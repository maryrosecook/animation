(ns animation.tick)

(defn forever
  [function]
  (function)
  (js/requestAnimationFrame (partial forever function)))

(defn create-tick
  []
  (let [tick (atom 0)]
    (forever (fn [] (swap! tick inc)))
    tick))

(def next-watch-id
  (let [id (atom 0)]
    (fn
      []
      (swap! id inc)
      @id)))

(defn create-on-tick
  [tick]
  (fn on-tick
    [handler]
    (add-watch tick (next-watch-id) handler)))

(def on-tick (create-on-tick (create-tick)))
