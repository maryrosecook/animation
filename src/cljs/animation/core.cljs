(ns animation.core
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [clojure.browser.repl :as repl]))

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
     :drag-start nil}}
   {:key-down?
    {}}
   ))

(defn initial-state
  []
  {:mouse-down-points []
   :mode :draw})

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

(defn store-drag-start
  [input canvas]
  (listen canvas
          :mousedown
          (fn [event]
            (if (not (mouse-down? input))
              (swap! input
                     assoc-in
                     [:mouse :drag-start]
                     (event->mouse-position event))))))

(defn store-mouse-position
  [input canvas]
  (listen canvas
          :mousemove
          (fn [event]
            (let [{x "clientX" y "clientY"} (dom-object->map event)]
              (swap! input
                     assoc-in
                     [:mouse :position]
                     (event->mouse-position event))))))

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
(store-drag-start input canvas)
(store-key-down input js/window)

(defn draw
  [state screen]
  (doseq [point (get state :mouse-down-points)]
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

(defn drawing?
  [state]
  (= :draw (get state :mode)))

(defn draw-points
  [input state]
  (if (and (drawing? state)
           (mouse-down? input))
    (update state
            :mouse-down-points
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

(defn default
  [fn value]
  (or (fn value) value))

(defn step-state
  [input state]
  (->> state
       (default (partial set-mode input))
       (default (partial draw-points input))))

(defn run
  [input state screen]
  (let [next-state (step-state (deref input) state)]
    (draw state screen)
    (js/requestAnimationFrame (partial run input next-state screen))))

(set-canvas-size! canvas (get-window-size js/window js/document))

(run input
  (initial-state)
  screen)
