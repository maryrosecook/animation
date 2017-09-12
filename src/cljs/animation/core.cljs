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
     :down? false}}
   {:key-down?
    {}}
   ))

(defn initial-state
  []
  {:mouse-down-points []
   :mode :draw})

(defn store-mouse-is-down
  [input canvas]
  (listen canvas
          :mousedown
          (partial swap! input assoc-in [:mouse :down?] true))
  (listen canvas
          :mouseup
          (partial swap! input assoc-in [:mouse :down?] false)))

(defn store-mouse-position
  [input canvas]
  (listen canvas
          :mousemove
          (fn [event]
            (let [{x "clientX" y "clientY"} (dom-object->map event)]
              (swap! input assoc-in [:mouse :position] {:x x :y y})))))

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

(defn dom-object->map
  [dom-object]
  (let [keys (.keys js/Object dom-object)
        values (.values js/Object dom-object)]
    (zipmap keys values)))

(store-mouse-position input canvas)
(store-mouse-is-down input canvas)
(store-key-down input js/window)

(defn draw
  [state screen]
  (doseq [point (get state :mouse-down-points)]
    (.fillRect screen (get point :x) (get point :y) 5 5)))

(def mouse-position #(get-in % [:mouse :position]))
(def mouse-down? #(get-in % [:mouse :down?]))

(defn set-canvas-size! [canvas {w :w h :h}]
  (set! (. canvas -width) w)
  (set! (. canvas -height) h))

(defn get-window-size [window document]
  {:w (or (.-innerWidth window) (.-clientWidth (.-body document)))
   :h (or (.-innerHeight window) (.-clientHeight (.-body document)))})

(defn accrue-mouse-down-points
  [input state]
  (if (mouse-down? input)
    (update state
            :mouse-down-points
            #(conj % (mouse-position input)))))

(defn step-state
  [input state]
    (or (accrue-mouse-down-points input state) state))

(defn run
  [input state screen]
  (let [next-state (step-state (deref input) state)]
    (draw state screen)
    (js/requestAnimationFrame (partial run input next-state screen))))

(set-canvas-size! canvas (get-window-size js/window js/document))

(run input
  (initial-state)
  screen)
