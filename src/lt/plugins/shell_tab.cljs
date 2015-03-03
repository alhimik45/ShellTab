(ns lt.plugins.shell-tab
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def plugin-dir (plugins/find-plugin "ShellTab"))

(def pty (js/require (str plugin-dir "/node_modules/pty.js/index.js")))

(defui shell-frame [this]
  [:iframe {:src (str "file://" plugin-dir "/static/index.html")}])

(object/object* ::shell-tab.shell
                :tags [:shell-tab.shell]
                :behaviors [::on-close-destroy]
                :name "shell-tab"
                :init (fn [this]
                        (let [frame (shell-frame this)]
                          (set! (.-onload frame)
                                (fn [] (-> frame
                                           .-contentWindow
                                           .-lighttable_calls
                                           (.start_pty pty))))
                          frame)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :desc "shell-tab: Close tab and kill shell"
          :reaction (fn [this]
                      (-> @this :content .-contentWindow .-lighttable_calls .disable_pty)
                      (object/raise this :destroy)))

(cmd/command {:command ::run-new-shell
              :desc "shell-tab: Run new shell"
              :exec (fn []
                      (tabs/add-or-focus! (object/create ::shell-tab.shell)))})
