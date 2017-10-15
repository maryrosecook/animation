(ns animation.core
  (:require [goog.dom :as dom]
            [goog.events :as events]
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
(def point-group #(% :point-group))
(def frames #(% :frames))
(def last-frame #(-> % :frames last))
(defn set-current-points
  [state points]
  (assoc-in state [:frames (current-frame-index state) :points] points))
(defn current-frame
  [state]
  (get (frames state) (current-frame-index state)))

(defn initial-state
  []
  {:frames [(create-frame [])]
   :current-frame-index 0
   :mode nil
   :point-group 0})

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

(defn draw
  [state screen]
  (clear-screen screen (get-window-size js/window js/document))
  (let [[first-group-points rest] (partition-by (fn [p] (= (p :group) 1))
                                                ((current-frame state) :points))]
  (doseq [point first-group-points]
    (fill-circle screen point point-radius "red"))
  (doseq [point rest]
    (fill-circle screen point point-radius "black"))))

(defn set-canvas-size! [canvas {w :w h :h}]
  (set! (. canvas -width) w)
  (set! (. canvas -height) h))

(defn create-point
  [position group]
  (assoc position :group group))

(defn create-points
  [input state]
  (if (and (draw-mode? state)
           (input/mouse-down? input))
    (let [point (create-point (input/mouse-position input)
                              (point-group state))]
      (set-current-points state
                          (conj ((current-frame state) :points) point)))))

(defn keyboard-selected-mode
  [input]
  (let [button-maps {49 :select
                     16 :draw
                     51 :move}]
    (get button-maps (first (input/keys-down input)))))

(defn set-mode
  [input state]
  (assoc state :mode (keyboard-selected-mode input)))

(defn move-points
  [input state]
  (if (and (input/mouse-down? input)
           (move-mode? state))
    (set-current-points state (map
                               (fn [point] (geometry/add-vectors
                                            point
                                            (drag-delta input)))
                               ((current-frame state) :points)))))

(defn rewind-on-4-key
  [input state]
  (if (input/key-down? input (input/key->keycode :4))
    (assoc state :current-frame-index 0)))

(defn increment-dot-group-on-mouse-down
  [input state]
  (if (input/key-pressed? input (input/key->keycode :shift))
    (update state :point-group inc)))

;; todo: finish
(defn points-at-position
  [points center radius]
  (filter (partial geometry/point-in-circle? center radius) points))

;; todo: finish
(defn select-points
  [input state]
  (if (input/mouse-clicked? input)
    (let [points ((current-frame state) :points)
          mouse-position (input/mouse-position input)
          clicked-point (first (points-at-position points
                                                   mouse-position
                                                   point-radius))]
      (.log js/console (clj->js clicked-point)))))

(defn default
  [fn value]
  (or (fn value) value))

(defn create-frame
  [points]
  {:points points})

(defn add-frame
  [state]
  (assoc state
         :frames
         (conj (state :frames) (last-frame state))))

(defn increment-current-frame-index
  [state]
  (update state :current-frame-index inc))

(defn step-state
  [input state]
  (->> state
       (default (partial set-mode input))
       (default (partial rewind-on-4-key input))
       (default (partial create-points input))
       (default (partial move-points input))
       (default (partial increment-dot-group-on-mouse-down input))
       (default (partial increment-current-frame-index))
       (default (partial add-frame))))

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
