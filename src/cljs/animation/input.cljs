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

(def key->keycode
  {:r 82
   :shift 16
   :tab 9
   :space 32})

(defn create-input
  []
  {:mouse
   {:position {:x 0 :y 0}
    :down? false
    :clicked? false
    :drag {:previous nil :current nil}
    :move {:previous nil :current nil}}
   :keys {:down (hash-set)
          :pressed-state {}}
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
  (let [{x "offsetX" y "offsetY"} (dom-object->map event)]
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
(def mouse-move #(get-in % [:mouse :move]))
(def mouse-position #(get-in % [:mouse :position]))
(def mouse-down? #(get-in % [:mouse :down?]))
(def mouse-clicked? #(get-in % [:mouse :clicked?]))
(defn key-down?
  [input keycode]
  (contains? (keys-down input) keycode))
(defn keys-down
  [input]
  (get-in input [:keys :down]))
(defn key-pressed?
  [input keycode]
  (= (key-pressed-state input keycode) :pressed))
(defn keys-pressed
  [input]
  (->> (get-in input [:keys :pressed-state])
       (filter (fn [[keycode state]] (= state :pressed)))
       (map first)))
(defn key-pressed-state
  [input keycode]
  (get-in input [:keys :pressed-state keycode]))
(defn keys-pressed-state
  [input keycode]
  (get-in input [:keys :pressed-state]))
(defn set-key-pressed-state
  [input keycode state]
  (swap! input assoc-in [:keys :pressed-state keycode] state))
(defn set-keys-down
  [input keys-down]
  (swap! input assoc-in [:keys :down] keys-down))

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
        (set-keys-down input (conj (keys-down @input) (.-keyCode event)))
        (.preventDefault event)))
  (on window
      :keyup
      (fn [event]
        (set-keys-down input (disj (keys-down @input) (.-keyCode event))))))

(defn store-keys-pressed-states
  [input window]
  (on window
      :keydown
      (fn [event]
        (let [keycode (.-keyCode event)
              key-state (key-pressed-state @input keycode)]
          (if (= key-state nil)
            (set-key-pressed-state input keycode :pressed)))))
  (on-read input
           (fn []
             (doseq [keycode (keys-pressed @input)]
               (set-key-pressed-state input keycode :waiting-for-up))))
  (on window
      :keyup
      (fn [event]
        (let [keycode (.-keyCode event)
              key-state (key-pressed-state @input keycode)]
          (if (= key-state :waiting-for-up)
            (set-key-pressed-state input keycode nil))))))

(defn current-drag
  [input]
  (if (mouse-down? input)
    {:current (get-in input [:mouse :position])
     :previous (get-in input [:mouse :drag :current])}
    {:current nil :previous :nil}))

(defn current-move
  [input]
  {:current (get-in input [:mouse :position])
   :previous (get-in input [:mouse :move :current])})

(defn store-move
  [input]
  (swap! input assoc-in [:mouse :move] (current-move @input)))

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
    (on-tick #(store-move input))
    (store-mouse-position input canvas)
    (store-mouse-is-clicked input window)
    (store-mouse-is-down input canvas)
    (store-keys-down input window)
    (store-keys-pressed-states input window)

    input))
