// Compiled by ClojureScript 1.9.908 {}
goog.provide('animation.tick');
goog.require('cljs.core');
animation.tick.forever = (function animation$tick$forever(function$){
function$.call(null);

return requestAnimationFrame(cljs.core.partial.call(null,animation.tick.forever,function$));
});
animation.tick.create_tick = (function animation$tick$create_tick(){
var tick = cljs.core.atom.call(null,(0));
animation.tick.forever.call(null,((function (tick){
return (function (){
return cljs.core.swap_BANG_.call(null,tick,cljs.core.inc);
});})(tick))
);

return tick;
});
animation.tick.next_watch_id = (function (){var id = cljs.core.atom.call(null,(0));
return ((function (id){
return (function (){
cljs.core.swap_BANG_.call(null,id,cljs.core.inc);

return cljs.core.deref.call(null,id);
});
;})(id))
})();
animation.tick.create_on_tick = (function animation$tick$create_on_tick(tick){
return (function animation$tick$create_on_tick_$_on_tick(handler){
return cljs.core.add_watch.call(null,tick,animation.tick.next_watch_id.call(null),handler);
});
});
animation.tick.on_tick = animation.tick.create_on_tick.call(null,animation.tick.create_tick.call(null));

//# sourceMappingURL=tick.js.map
