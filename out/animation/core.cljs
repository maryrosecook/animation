(ns animation.core
  (:require [goog.dom :as dom]
            [goog.events :as events]))

(enable-console-print!)

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
   :blur goog.events.EventType.BLUR

   :dragstart goog.events.EventType.DRAGSTART
   :drag goog.events.EventType.DRAG
   :dragenter goog.events.EventType.DRAGENTER
   :dragover goog.events.EventType.DRAGOVER
   :dragleave goog.events.EventType.DRAGLEAVE
   :drop goog.events.EventType.DROP
   :dragend goog.events.EventType.DRAGEND})

(defn listen
  [element event-type fn]
  (events/listen element (keyword->event-type event-type) fn))

(def screen (dom/getElement "screen"))

(.log js/console (listen screen :mousedown (fn [] (println "hi"))))

(println "working")
