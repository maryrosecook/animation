(defproject animation "0.1.0"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "animation"
              :source-paths ["src"]
              :compiler {
                         :main "animation.core"
                         :output-to "out/animation/animation.js"
                         :output-dir "out"
                         :optimizations :none
                         :source-map true}}]})
