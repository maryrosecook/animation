// Compiled by ClojureScript 1.9.908 {}
goog.provide('animation.geometry');
goog.require('cljs.core');
animation.geometry.add_vectors = (function animation$geometry$add_vectors(p__12443,p__12444){
var map__12445 = p__12443;
var map__12445__$1 = ((((!((map__12445 == null)))?((((map__12445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12445):map__12445);
var x1 = cljs.core.get.call(null,map__12445__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__12445__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__12446 = p__12444;
var map__12446__$1 = ((((!((map__12446 == null)))?((((map__12446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12446):map__12446);
var x2 = cljs.core.get.call(null,map__12446__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__12446__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x1 + x2),new cljs.core.Keyword(null,"y","y",-1757859776),(y1 + y2)], null);
});
animation.geometry.subtract_vectors = (function animation$geometry$subtract_vectors(p__12449,p__12450){
var map__12451 = p__12449;
var map__12451__$1 = ((((!((map__12451 == null)))?((((map__12451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12451):map__12451);
var x1 = cljs.core.get.call(null,map__12451__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__12451__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__12452 = p__12450;
var map__12452__$1 = ((((!((map__12452 == null)))?((((map__12452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12452):map__12452);
var x2 = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x1 - x2),new cljs.core.Keyword(null,"y","y",-1757859776),(y1 - y2)], null);
});
animation.geometry.point_in_circle_QMARK_ = (function animation$geometry$point_in_circle_QMARK_(p__12455,circle_radius,p__12456){
var map__12457 = p__12455;
var map__12457__$1 = ((((!((map__12457 == null)))?((((map__12457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12457):map__12457);
var circle_x = cljs.core.get.call(null,map__12457__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var circle_y = cljs.core.get.call(null,map__12457__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__12458 = p__12456;
var map__12458__$1 = ((((!((map__12458 == null)))?((((map__12458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12458):map__12458);
var point_x = cljs.core.get.call(null,map__12458__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var point_y = cljs.core.get.call(null,map__12458__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var and__10832__auto__ = animation.geometry.within.call(null,point_x,circle_x,circle_radius);
if(cljs.core.truth_(and__10832__auto__)){
return animation.geometry.within.call(null,point_y,circle_y,circle_radius);
} else {
return and__10832__auto__;
}
});
animation.geometry.within = (function animation$geometry$within(first_number,second_number,distance){
return (Math.abs((first_number - second_number)) <= distance);
});

//# sourceMappingURL=geometry.js.map
