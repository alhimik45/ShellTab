(defproject lt-shell-in-tab "0.0.1"
  :description "Shell in tab plugin for LightTable"
  :license {:name "GPL v3.0"
            :url "http://www.gnu.org/licenses/gpl-3.0.en.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]]
  :plugins [[lein-coffeescript "0.1.5"]
            [lein-sass "0.3.0"]
            [lein-npm "0.5.0"]]
  :node-dependencies [[pty.js "0.2.5"]]
  :coffeescript [{:sources "src-coffee/*.coffee"
                  :join "main.js"
                  :output "static/"}
                 {:sources "src-coffee/ext/*.coffee"
                  :join "ext.js"
                  :output "static/"}]
  :sass {:src "src-sass"
         :output-directory "static"})
