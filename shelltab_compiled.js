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
lt.plugins.shell_tab.shell_frame = (function shell_frame(this$){var e__9995__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",4117657110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("file://"),cljs.core.str(lt.plugins.shell_tab.plugin_dir),cljs.core.str("/static/index.html")].join('')], null)], null));var seq__10317_10323 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10318_10324 = null;var count__10319_10325 = 0;var i__10320_10326 = 0;while(true){
if((i__10320_10326 < count__10319_10325))
{var vec__10321_10327 = cljs.core._nth.call(null,chunk__10318_10324,i__10320_10326);var ev__9996__auto___10328 = cljs.core.nth.call(null,vec__10321_10327,0,null);var func__9997__auto___10329 = cljs.core.nth.call(null,vec__10321_10327,1,null);lt.util.dom.on.call(null,e__9995__auto__,ev__9996__auto___10328,func__9997__auto___10329);
{
var G__10330 = seq__10317_10323;
var G__10331 = chunk__10318_10324;
var G__10332 = count__10319_10325;
var G__10333 = (i__10320_10326 + 1);
seq__10317_10323 = G__10330;
chunk__10318_10324 = G__10331;
count__10319_10325 = G__10332;
i__10320_10326 = G__10333;
continue;
}
} else
{var temp__4126__auto___10334 = cljs.core.seq.call(null,seq__10317_10323);if(temp__4126__auto___10334)
{var seq__10317_10335__$1 = temp__4126__auto___10334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10317_10335__$1))
{var c__9352__auto___10336 = cljs.core.chunk_first.call(null,seq__10317_10335__$1);{
var G__10337 = cljs.core.chunk_rest.call(null,seq__10317_10335__$1);
var G__10338 = c__9352__auto___10336;
var G__10339 = cljs.core.count.call(null,c__9352__auto___10336);
var G__10340 = 0;
seq__10317_10323 = G__10337;
chunk__10318_10324 = G__10338;
count__10319_10325 = G__10339;
i__10320_10326 = G__10340;
continue;
}
} else
{var vec__10322_10341 = cljs.core.first.call(null,seq__10317_10335__$1);var ev__9996__auto___10342 = cljs.core.nth.call(null,vec__10322_10341,0,null);var func__9997__auto___10343 = cljs.core.nth.call(null,vec__10322_10341,1,null);lt.util.dom.on.call(null,e__9995__auto__,ev__9996__auto___10342,func__9997__auto___10343);
{
var G__10344 = cljs.core.next.call(null,seq__10317_10335__$1);
var G__10345 = null;
var G__10346 = 0;
var G__10347 = 0;
seq__10317_10323 = G__10344;
chunk__10318_10324 = G__10345;
count__10319_10325 = G__10346;
i__10320_10326 = G__10347;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.shell-tab","run-new-shell","lt.plugins.shell-tab/run-new-shell",772723816),new cljs.core.Keyword(null,"desc","desc",1016984067),"shell-tab: Run new shell",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.shell-tab","shell-tab.shell","lt.plugins.shell-tab/shell-tab.shell",4348551193)));
})], null));
}

//# sourceMappingURL=shelltab_compiled.js.map