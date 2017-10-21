(ns animation.core
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [clojure.set :as set]
            [clojure.browser.repl :as repl]
            [animation.geometry :as geometry]
            [animation.tick :refer [on-tick]]
            [animation.input :as input]))

(enable-console-print!)
(repl/connect "http://localhost:9000/repl")

(def canvas (dom/getElement "screen"))
(def screen (.getContext canvas "2d"))

(def point-radius 2)

(defn draw-mode? [state] (= :draw (get state :mode)))
(defn move-mode? [state] (= :move (get state :mode)))
(def current-frame-index #(% :current-frame-index))
(def playing? #(% :playing?))
(def point-group #(% :point-group))
(def selected-group #(% :selected-group))
(def frames #(% :frames))
(defn frame [state i] (get (frames state) i))
(def last-frame #(-> % :frames last))
(defn set-current-points
  [state points]
  (assoc-in state [:frames (current-frame-index state) :points] points))
(def current-frame #(frame % (current-frame-index %)))
(def next-frame #(frame % (inc (current-frame-index %))))

(defn initial-state
  []
  {:frames [(create-frame [])]
   :current-frame-index 0
   :next-point-id 0
   :mode nil
   :point-group 0
   :selected-group 1
   :playing? true})

(defn drag-delta
  [input]
  (let [drag (input/mouse-drag input)]
    (if (drag :previous)
      (geometry/subtract-vectors (drag :current) (drag :previous))
      {:x 0 :y 0})))

(defn clear-screen
  [screen window-size]
  (.clearRect screen 0 0 (get window-size :w) (get window-size :h)))

(defn get-window-size [window document]
  {:w (or (.-innerWidth window) (.-clientWidth (.-body document)))
   :h (or (.-innerHeight window) (.-clientHeight (.-body document)))})

(defn fill-circle
  [screen center radius color]
  (set! (. screen -fillStyle) color)
  (.beginPath screen)
  (.arc screen (center :x) (center :y) radius 0 (* 2 (.-PI js/Math)))
  (.closePath screen)
  (.fill screen))

(defn point-color
  [point selected-group]
  (if (= (point :group) selected-group)
    "red"
    "black"))

(defn draw-ui
  [screen state]
  (let [playing-status (if (:playing? state) "playing" "stopped")]
    (set! (. screen -fillStyle) "black")
    (.fillText screen playing-status 10 10)))

(defn draw
  [state screen]
  (clear-screen screen (get-window-size js/window js/document))
  (draw-ui screen state)
  (doseq [point ((current-frame state) :points)]
    (fill-circle screen
                 point
                 point-radius
                 (point-color point (selected-group state)))))

(defn set-canvas-size! [canvas {w :w h :h}]
  (set! (. canvas -width) w)
  (set! (. canvas -height) h))

(defn create-point
  [id position group]
  (merge position {:id id :group group}))

(defn create-points
  [input state]
  (if (and (draw-mode? state)
           (input/mouse-down? input))
    (let [id (state :next-point-id)
          point (create-point id
                              (input/mouse-position input)
                              (point-group state))
          points (conj ((current-frame state) :points) point)]
      (-> state
          (update :next-point-id inc)
          (set-current-points points)))))

(defn keyboard-selected-mode
  [input]
  (let [button-maps {49 :select
                     16 :draw
                     51 :move}]
    (get button-maps (first (input/keys-down input)))))

(defn set-mode
  [input state]
  (assoc state :mode (keyboard-selected-mode input)))

(defn points-selected-unselected
  [points selected-group]
  (let [{selected true unselected false}
          (group-by (fn [point] (= (point :group) selected-group)) points)]
    {:selected selected :unselected unselected}))

(defn move-points
  [input state]
  (if (and (input/mouse-down? input)
           (move-mode? state))
    (let [drag-delta' (drag-delta input)
          points ((current-frame state) :points)
          {selected :selected unselected :unselected}
            (points-selected-unselected points (selected-group state))
          moved-points (map (fn [point]
                              (merge point (geometry/add-vectors
                                            point
                                            drag-delta')))
                            selected)]
      (set-current-points state (concat moved-points unselected)))))

(defn rewind-on-4-key
  [input state]
  (if (input/key-down? input (input/key->keycode :4))
    (assoc state :current-frame-index 0)))

(defn increment-dot-group-on-shift
  [input state]
  (if (input/key-pressed? input (input/key->keycode :shift))
    (update state :point-group inc)))

;; todo: finish
;; (defn points-at-position
;;   [points center radius]
;;   (filter (partial geometry/point-in-circle? center radius) points))

;; todo: finish
;; (defn select-points
;;   [input state]
;;   (if (input/mouse-clicked? input)
;;     (let [points ((current-frame state) :points)
;;           mouse-position (input/mouse-position input)
;;           clicked-point (first (points-at-position points
;;                                                    mouse-position
;;                                                    point-radius))]

(defn default
  [fn value]
  (or (fn value) value))

(defn create-frame
  [points]
  {:points points})

(defn at-last-frame?
  [state]
  (= (current-frame-index state) (dec (count (frames state)))))

(defn add-frame-if-at-animation-end
  [state]
  (if (at-last-frame? state)
    (assoc state
           :frames
           (conj (state :frames) (create-frame [])))))

(defn replace-next-frame
  [state frame]
  (let [next-frame-id (inc (current-frame-index state))]
    (assoc-in state [:frames next-frame-id] frame)))

(defn merge-frames
  [{current-points :points} {next-points :points :as next}]
  (let [current-point-ids (set (map :id current-points))
        points-to-add (filter #(not (contains? current-point-ids (:id %)))
                              next-points)]
    (assoc to :points (concat current-points points-to-add))))

(defn merge-current-frame-into-next
  [state]
  (let [current-frame' (current-frame state)
        next-frame' (next-frame state)
        merged-frame (merge-frames current-frame' next-frame')]
    (replace-next-frame state merged-frame)))

(defn increment-current-frame-index
  [state]
  (if (playing? state)
    (update state :current-frame-index inc)))

(defn cycle-selected-group
  [state]
  (let [max-group (point-group state)
        next-group (inc (selected-group state))]
    (assoc state
           :selected-group
           (if (<= next-group max-group) next-group 1))))

(defn cycle-selected-group-on-tab
  [input state]
  (if (input/key-pressed? input (input/key->keycode :tab))
    (cycle-selected-group state)))

(defn toggle-playing-on-space
  [input state]
  (if (input/key-pressed? input (input/key->keycode :space))
    (toggle-playing state)))

(defn toggle-playing
  [state]
  (update state :playing? not))

(defn step-state
  [input state]
  (->> state
       (default (partial set-mode input))
       (default (partial rewind-on-4-key input))
       (default (partial create-points input))
       (default (partial move-points input))
       (default (partial increment-dot-group-on-shift input))
       (default (partial cycle-selected-group-on-tab input))
       (default (partial toggle-playing-on-space input))
       (default (partial add-frame-if-at-animation-end))
       (default (partial merge-current-frame-into-next))
       (default (partial increment-current-frame-index))))

(defn run
  [_state input screen]
  (set-canvas-size! canvas (get-window-size js/window js/document))

  (let [state (atom _state)]
    (on-tick #(reset! state (step-state @input @state)))
    (on-tick #(draw @state screen))
    (on-tick #(input/read input))))

(run
  (initial-state)
  (input/input canvas js/window)
  screen)
