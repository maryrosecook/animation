(ns animation.input
  (:require [goog.events :as events]))

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

(def input
  (atom
   {:mouse
    {:position {:x 0 :y 0}
     :down? false
     :drag {:previous nil :current nil}}
    :key-down? {}}))

(defn listen
  [element event-type fn]
  (events/listen element (keyword->event-type event-type) fn))

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

(def mouse-position #(get-in % [:mouse :position]))
(def mouse-down? #(get-in % [:mouse :down?]))
(defn key-codes-down
  [input]
  (map first (filter (fn [[_, down?]] down?) (input :key-down?))))

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

(defn store-input
  [canvas window]
  (store-mouse-position input canvas)
  (store-mouse-is-down input canvas)
  (store-key-down input window))
