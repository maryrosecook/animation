(ns animation.geometry)

(defn add-vectors
  [{x1 :x y1 :y} {x2 :x y2 :y}]
  {:x (+ x1 x2) :y (+ y1 y2)})

(defn subtract-vectors
  [{x1 :x y1 :y} {x2 :x y2 :y}]
  {:x (- x1 x2) :y (- y1 y2)})

(defn point-in-circle?
  [{circle-x :x circle-y :y} circle-radius {point-x :x point-y :y}]
  (and (within point-x circle-x circle-radius)
       (within point-y circle-y circle-radius)))

(defn within
  [first-number second-number distance]
  (<= (.abs js/Math (- first-number second-number)) distance))
