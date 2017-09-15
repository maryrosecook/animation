(ns animation.core
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [clojure.browser.repl :as repl]
            [animation.geometry :as geometry]))

(enable-console-print!)
(repl/connect "http://localhost:9000/repl")

(def keyword->event-type
  {:keyup goog.events.EventType.KEYUP
   :keydown goog.events.EventType.KEYDOWN
   :keypress goog.events.EventType.KEYPRESS
   :click goog.events.EventType.CLICK
   :dblclick goog.events.EventType.DBLCLICK
   :mousedown goog.events.EventType.MOUSEDOWN
   :mouseup goog.events.EventType.MOUSEUP
   :mouseover goog.events.EventType.MOUSEOVER
   :mouseout goog.events.EventType.MOUSEOUT
   :mousemove goog.events.EventType.MOUSEMOVE
   :focus goog.events.EventType.FOCUS
   :blur goog.events.EventType.BLUR})

(defn listen
  [element event-type fn]
  (events/listen element (keyword->event-type event-type) fn))

(def canvas (dom/getElement "screen"))
(def screen (.getContext canvas "2d"))

(def input
  (atom
   {:mouse
    {:position {:x 0 :y 0}
     :down? false
     :drag {:previous nil :current nil}}
    :key-down? {}}))

(defn initial-state
  []
  {:points []
   :mode :draw})

(defn create-tick
  []
  (defn forever
    [function]
    (function)
    (js/requestAnimationFrame (partial forever function)))
  (let [tick (atom 0)]
    (forever (fn [] (swap! tick inc)))
    tick))

(defn dom-object->map
  [dom-object]
  (let [keys (.keys js/Object dom-object)
        values (.values js/Object dom-object)]
    (zipmap keys values)))

(defn event->mouse-position
  [event]
  (let [{x "clientX" y "clientY"} (dom-object->map event)]
    {:x x :y y}))

(defn store-mouse-is-down
  [input canvas]
  (listen canvas
          :mousedown
          (partial swap! input assoc-in [:mouse :down?] true))
  (listen canvas
          :mouseup
          (partial swap! input assoc-in [:mouse :down?] false)))

(defn drag-delta
  [input]
  (let [drag (get-in input [:mouse :drag])]
    (if (drag :previous)
      (geometry/subtract-vectors (drag :current) (drag :previous))
      {:x 0 :y 0})))

(defn current-drag
  [input]
  (if (mouse-down? input)
    {:current (get-in input [:mouse :position])
     :previous (get-in input [:mouse :drag :current])}
    {:current nil :previous :nil}))

(defn store-drag
  [input tick]
  (add-watch tick
             :drag
             #(swap! input assoc-in [:mouse :drag] (current-drag @input))))

(defn store-mouse-position
  [input canvas]
  (listen canvas
          :mousemove
          (fn [event]
            (swap! input
                   assoc-in
                   [:mouse :position]
                   (event->mouse-position event)))))

(defn store-key-down
  [input window]
  (listen window
          :keydown
          (fn [event]
            (swap! input assoc-in [:key-down? (.-keyCode event)] true)))
  (listen window
          :keyup
          (fn [event]
            (swap! input assoc-in [:key-down? (.-keyCode event)] false))))

(store-mouse-position input canvas)
(store-mouse-is-down input canvas)
(store-key-down input js/window)

(defn clear-screen
  [screen window-size]
  (.clearRect screen 0 0 (get window-size :w) (get window-size :h)))

(defn draw
  [state screen]
  (clear-screen screen (get-window-size js/window js/document))
  (doseq [point (get state :points)]
    (.fillRect screen (get point :x) (get point :y) 5 5)))

(def mouse-position #(get-in % [:mouse :position]))
(def mouse-down? #(get-in % [:mouse :down?]))
(def key-down? (fn [state key-code] (get-in state [:key-down? key-code])))
(defn key-codes-down
  [input]
  (map first (filter (fn [[_, down?]] down?) (input :key-down?))))

(defn set-canvas-size! [canvas {w :w h :h}]
  (set! (. canvas -width) w)
  (set! (. canvas -height) h))

(defn get-window-size [window document]
  {:w (or (.-innerWidth window) (.-clientWidth (.-body document)))
   :h (or (.-innerHeight window) (.-clientHeight (.-body document)))})

(defn draw-mode? [state] (= :draw (get state :mode)))
(defn move-mode? [state] (= :move (get state :mode)))

(defn draw-points
  [input state]
  (if (and (draw-mode? state)
           (mouse-down? input))
    (update state
            :points
            #(conj % (mouse-position input)))))

(defn keyboard-selected-mode
  [input]
  (let [button-maps {49 :select
                     50 :draw
                     51 :move}]
    (get button-maps (first (key-codes-down input)))))

(defn set-mode
  [input state]
  (if-let [new-mode (keyboard-selected-mode input)]
    (assoc state :mode new-mode)))

(defn move-points
  [input state]
  (if (and (mouse-down? input)
           (move-mode? state))
    (update state
            :points
            (partial map
                     (fn [point] (geometry/add-vectors
                                  point
                                  (drag-delta input)))))))

(defn default
  [fn value]
  (or (fn value) value))

(defn step-state
  [input state]
  (->> state
       (default (partial set-mode input))
       (default (partial draw-points input))
       (default (partial move-points input))))

(defn run
  [input _state tick screen]
  (let [state (atom _state)]
    (store-drag input tick)
    (add-watch tick :update #(reset! state (step-state @input @state)))
    (add-watch tick :draw #(draw @state screen))))

(set-canvas-size! canvas (get-window-size js/window js/document))

(run input
  (initial-state)
  (create-tick)
  screen)
