if(!lt.util.load.provided_QMARK_('lt.plugins.shell-tab')) {
goog.provide('lt.plugins.shell_tab');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('crate.core');
goog.require('lt.object');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.object');
lt.plugins.shell_tab.plugin_dir = lt.objs.plugins.find_plugin.call(null,"ShellTab");
lt.plugins.shell_tab.pty = require([cljs.core.str(lt.plugins.shell_tab.plugin_dir),cljs.core.str("/node_modules/pty.js/index.js")].join(''));
lt.plugins.shell_tab.shell_frame = (function shell_frame(this$){var e__9995__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",4117657110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("file://"),cljs.core.str(lt.plugins.shell_tab.plugin_dir),cljs.core.str("/static/index.html")].join('')], null)], null));var seq__10391_10397 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10392_10398 = null;var count__10393_10399 = 0;var i__10394_10400 = 0;while(true){
if((i__10394_10400 < count__10393_10399))
{var vec__10395_10401 = cljs.core._nth.call(null,chunk__10392_10398,i__10394_10400);var ev__9996__auto___10402 = cljs.core.nth.call(null,vec__10395_10401,0,null);var func__9997__auto___10403 = cljs.core.nth.call(null,vec__10395_10401,1,null);lt.util.dom.on.call(null,e__9995__auto__,ev__9996__auto___10402,func__9997__auto___10403);
{
var G__10404 = seq__10391_10397;
var G__10405 = chunk__10392_10398;
var G__10406 = count__10393_10399;
var G__10407 = (i__10394_10400 + 1);
seq__10391_10397 = G__10404;
chunk__10392_10398 = G__10405;
count__10393_10399 = G__10406;
i__10394_10400 = G__10407;
continue;
}
} else
{var temp__4126__auto___10408 = cljs.core.seq.call(null,seq__10391_10397);if(temp__4126__auto___10408)
{var seq__10391_10409__$1 = temp__4126__auto___10408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10391_10409__$1))
{var c__9352__auto___10410 = cljs.core.chunk_first.call(null,seq__10391_10409__$1);{
var G__10411 = cljs.core.chunk_rest.call(null,seq__10391_10409__$1);
var G__10412 = c__9352__auto___10410;
var G__10413 = cljs.core.count.call(null,c__9352__auto___10410);
var G__10414 = 0;
seq__10391_10397 = G__10411;
chunk__10392_10398 = G__10412;
count__10393_10399 = G__10413;
i__10394_10400 = G__10414;
continue;
}
} else
{var vec__10396_10415 = cljs.core.first.call(null,seq__10391_10409__$1);var ev__9996__auto___10416 = cljs.core.nth.call(null,vec__10396_10415,0,null);var func__9997__auto___10417 = cljs.core.nth.call(null,vec__10396_10415,1,null);lt.util.dom.on.call(null,e__9995__auto__,ev__9996__auto___10416,func__9997__auto___10417);
{
var G__10418 = cljs.core.next.call(null,seq__10391_10409__$1);
var G__10419 = null;
var G__10420 = 0;
var G__10421 = 0;
seq__10391_10397 = G__10418;
chunk__10392_10398 = G__10419;
count__10393_10399 = G__10420;
i__10394_10400 = G__10421;
continue;
}
}
} else
{}
}
break;
}
return e__9995__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.shell-tab","shell-tab.shell","lt.plugins.shell-tab/shell-tab.shell",4348551193),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shell-tab.shell","shell-tab.shell",2526838444)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.shell-tab","on-close-destroy","lt.plugins.shell-tab/on-close-destroy",1773172638)], null),new cljs.core.Keyword(null,"name","name",1017277949),"shell-tab",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var frame = lt.plugins.shell_tab.shell_frame.call(null,this$);frame.onload = ((function (frame){
return (function (){return frame.contentWindow.lighttable_calls.start_pty(lt.plugins.shell_tab.pty);
});})(frame))
;
return frame;
}));
lt.plugins.shell_tab.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).contentWindow.lighttable_calls.disable_pty();
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.shell-tab","on-close-destroy","lt.plugins.shell-tab/on-close-destroy",1773172638),new cljs.core.Keyword(null,"desc","desc",1016984067),"shell-tab: Close tab and kill shell",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.shell_tab.__BEH__on_close_destroy);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.shell-tab","run-new-shell","lt.plugins.shell-tab/run-new-shell",772723816),new cljs.core.Keyword(null,"desc","desc",1016984067),"shell-tab: Run new shell",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var shell = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.shell-tab","shell-tab.shell","lt.plugins.shell-tab/shell-tab.shell",4348551193));lt.objs.tabs.add_or_focus_BANG_.call(null,shell);
return lt.util.dom.focus.call(null,lt.object.__GT_content.call(null,shell));
})], null));
}

//# sourceMappingURL=shelltab_compiled.js.map