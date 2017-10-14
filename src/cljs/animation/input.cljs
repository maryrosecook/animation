(ns animation.input
  (:require [goog.events :as events]
            [animation.tick :refer [on-tick]]))

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

(def keyword->keycode
  {:4 52
   :shift 16})

(defn create-input
  []
  {:mouse
   {:position {:x 0 :y 0}
    :down? false
    :clicked? false
    :drag {:previous nil :current nil}}
   :keys {:down (hash-set)
          :pressed (hash-set)}
   :read-fns []})

(defn on
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
  (on canvas
      :mousedown
      (partial swap! input assoc-in [:mouse :down?] true))
  (on canvas
      :mouseup
      (partial swap! input assoc-in [:mouse :down?] false)))

(def mouse-drag #(get-in % [:mouse :drag]))
(def mouse-position #(get-in % [:mouse :position]))
(def mouse-down? #(get-in % [:mouse :down?]))
(def mouse-clicked? #(get-in % [:mouse :clicked?]))
(defn key-down?
  [input key-keyword]
  (contains? (keys-down input) (keyword->keycode key-keyword)))
(defn keys-down
  [input]
  (get-in input [:keys :down]))
(defn keys-pressed
  [input]
  (get-in input [:keys :pressed]))
(defn set-keys-down
  [input keys-down]
  (swap! input assoc-in [:keys :down] keys-down))
(defn set-keys-pressed
  [input keys-pressed]
  (swap! input assoc-in [:keys :pressed] keys-pressed))

(defn store-mouse-position
  [input canvas]
  (on canvas
      :mousemove
      (fn [event]
        (swap! input
               assoc-in
               [:mouse :position]
               (event->mouse-position event)))))

(defn store-keys-down
  [input window]
  (on window
      :keydown
      (fn [event]
        (set-keys-down input (conj (keys-down @input) (.-keyCode event)))))
  (on window
      :keyup
      (fn [event]
        (set-keys-down input (disj (keys-down @input) (.-keyCode event))))))

(defn store-keys-pressed
  [input window]
  (on window
      :keypress
      (fn [event]
        (set-keys-pressed input (conj (keys-pressed @input) (.-keyCode event))))))

(defn current-drag
  [input]
  (if (mouse-down? input)
    {:current (get-in input [:mouse :position])
     :previous (get-in input [:mouse :drag :current])}
    {:current nil :previous :nil}))

(defn store-drag
  [input]
  (swap! input assoc-in [:mouse :drag] (current-drag @input)))

(defn store-mouse-is-clicked
  [input window]
  (on window
      :mousedown
      (partial swap! input assoc-in [:mouse :clicked?] true))
  (on-read input (partial swap! input assoc-in [:mouse :clicked?] false)))

(defn on-read
  [input fn]
  (swap! input assoc :read-fns (conj (@input :read-fns) fn)))

(defn read
  [input]
  (doseq [read-fn (get @input :read-fns)]
    (read-fn)))

(defn input
  [canvas window]
  (let [input (atom (create-input))]
    (on-tick #(store-drag input))
    (store-mouse-position input canvas)
    (store-mouse-is-clicked input window)
    (store-mouse-is-down input canvas)
    (store-keys-down input window)
    (store-keys-pressed input window)

    input))
