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

(def mouse-position (atom {:x 0 :y 0}))

(defn store-mouse-position
  [mouse-position canvas]
  (listen canvas
          :mousemove
          (fn [event]
            (let [{x "clientX" y "clientY"} (dom-object->map event)]
              (swap! mouse-position assoc :x x)
              (swap! mouse-position assoc :y y)))))

(defn dom-object->map
  [dom-object]
  (let [keys (.keys js/Object dom-object)
        values (.values js/Object dom-object)]
    (zipmap keys values)))

(store-mouse-position mouse-position canvas)

(defn draw
  [mouse-position screen]
  (.fillRect screen
             (mouse-position :x)
             (mouse-position :y)
             2
             2))

(defn tick
  [mouse-position screen]
  (draw (deref mouse-position) screen))

(defn run
  [mouse-position screen]
  (tick mouse-position screen)
  (js/requestAnimationFrame (partial run mouse-position screen)))

(run mouse-position screen)
