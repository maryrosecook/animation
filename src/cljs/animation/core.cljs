(ns animation.core
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [clojure.browser.repl :as repl]
            [animation.geometry :as geometry]
            [animation.tick :refer [on-tick]]
            [animation.input :as input]))

(enable-console-print!)
;; (repl/connect "http://localhost:9000/repl")

(def canvas (dom/getElement "screen"))
(def screen (.getContext canvas "2d"))

(def point-radius 2)

(defn initial-state
  []
  {:points []
   :mode :draw
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

(defn draw
  [state screen]
  (clear-screen screen (get-window-size js/window js/document))
  (doseq [point (get state :points)]
    (draw-circle screen point point-radius)))

(defn set-canvas-size! [canvas {w :w h :h}]
  (set! (. canvas -width) w)
  (set! (. canvas -height) h))

(defn draw-mode? [state] (= :draw (get state :mode)))
(defn move-mode? [state] (= :move (get state :mode)))
(def point-group #(% :point-group))
(def points #(% :points))

(defn create-point
  [position group]
  (assoc position :group group))

(defn add-point
  [state point]
  (update state :points #(conj % point)))

(defn draw-points
  [input state]
  (if (and (draw-mode? state)
           (input/mouse-down? input))
    (let [point (create-point (input/mouse-position input)
                              (point-group state))]
      (add-point state point))))

(defn draw-circle
  [screen center radius]
  (.beginPath screen)
  (.arc screen (center :x) (center :y) radius 0 (* 2 (.-PI js/Math)))
  (.closePath screen)
  (.fill screen))

(defn keyboard-selected-mode
  [input]
  (let [button-maps {49 :select
                     50 :draw
                     51 :move}]
    (get button-maps (first (input/key-codes-down input)))))

(defn set-mode
  [input state]
  (if-let [new-mode (keyboard-selected-mode input)]
    (assoc state :mode new-mode)))

(defn move-points
  [input state]
  (if (and (input/mouse-down? input)
           (move-mode? state))
    (update state
            :points
            (partial map
                     (fn [point] (geometry/add-vectors
                                  point
                                  (drag-delta input)))))))

(defn increment-dot-group-on-mouse-down
  [input state]
  (if (input/mouse-clicked? input)
    (update state :point-group inc)))

(defn default
  [fn value]
  (or (fn value) value))

(defn step-state
  [input state]
  (->> state
       (default (partial set-mode input))
       (default (partial draw-points input))
       (default (partial move-points input))
       (default (partial increment-dot-group-on-mouse-down input))))

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
