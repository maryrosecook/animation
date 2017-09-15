(ns animation.geometry)

(defn add-vectors
  [{x1 :x y1 :y} {x2 :x y2 :y}]
  {:x (+ x1 x2) :y (+ y1 y2)})

(defn subtract-vectors
  [{x1 :x y1 :y} {x2 :x y2 :y}]
  {:x (- x1 x2) :y (- y1 y2)})
