// Compiled by ClojureScript 1.9.908 {}
goog.provide('animation.input');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('animation.tick');
animation.input.keyword__GT_event_type = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mouseup","mouseup",350619456),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"keypress","keypress",1625181642),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"dblclick","dblclick",-1821330376),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)],[goog.events.EventType.MOUSEUP,goog.events.EventType.KEYDOWN,goog.events.EventType.KEYPRESS,goog.events.EventType.MOUSEOUT,goog.events.EventType.KEYUP,goog.events.EventType.MOUSEOVER,goog.events.EventType.CLICK,goog.events.EventType.MOUSEMOVE,goog.events.EventType.BLUR,goog.events.EventType.FOCUS,goog.events.EventType.DBLCLICK,goog.events.EventType.MOUSEDOWN]);
animation.input.key__GT_keycode = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"4","4",-1197948085),(52),new cljs.core.Keyword(null,"shift","shift",997140064),(16),new cljs.core.Keyword(null,"tab","tab",-559583621),(9),new cljs.core.Keyword(null,"space","space",348133475),(32)], null);
animation.input.create_input = (function animation$input$create_input(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"down?","down?",1701019493),false,new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),false,new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"previous","previous",-720163404),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null)], null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"pressed-state","pressed-state",1499847364),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"read-fns","read-fns",-1268032808),cljs.core.PersistentVector.EMPTY], null);
});
animation.input.on = (function animation$input$on(element,event_type,fn){
return goog.events.listen(element,animation.input.keyword__GT_event_type.call(null,event_type),fn);
});
animation.input.dom_object__GT_map = (function animation$input$dom_object__GT_map(dom_object){
var keys = Object.keys(dom_object);
var values = Object.values(dom_object);
return cljs.core.zipmap.call(null,keys,values);
});
animation.input.event__GT_mouse_position = (function animation$input$event__GT_mouse_position(event){
var map__17445 = animation.input.dom_object__GT_map.call(null,event);
var map__17445__$1 = ((((!((map__17445 == null)))?((((map__17445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17445):map__17445);
var x = cljs.core.get.call(null,map__17445__$1,"clientX");
var y = cljs.core.get.call(null,map__17445__$1,"clientY");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
animation.input.store_mouse_is_down = (function animation$input$store_mouse_is_down(input,canvas){
animation.input.on.call(null,canvas,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.partial.call(null,cljs.core.swap_BANG_,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down?","down?",1701019493)], null),true));

return animation.input.on.call(null,canvas,new cljs.core.Keyword(null,"mouseup","mouseup",350619456),cljs.core.partial.call(null,cljs.core.swap_BANG_,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down?","down?",1701019493)], null),false));
});
animation.input.mouse_drag = (function animation$input$mouse_drag(p1__17447_SHARP_){
return cljs.core.get_in.call(null,p1__17447_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"drag","drag",449951290)], null));
});
animation.input.mouse_position = (function animation$input$mouse_position(p1__17448_SHARP_){
return cljs.core.get_in.call(null,p1__17448_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
});
animation.input.mouse_down_QMARK_ = (function animation$input$mouse_down_QMARK_(p1__17449_SHARP_){
return cljs.core.get_in.call(null,p1__17449_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down?","down?",1701019493)], null));
});
animation.input.mouse_clicked_QMARK_ = (function animation$input$mouse_clicked_QMARK_(p1__17450_SHARP_){
return cljs.core.get_in.call(null,p1__17450_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623)], null));
});
animation.input.key_down_QMARK_ = (function animation$input$key_down_QMARK_(input,keycode){
return cljs.core.contains_QMARK_.call(null,animation.input.keys_down.call(null,input),keycode);
});
animation.input.keys_down = (function animation$input$keys_down(input){
return cljs.core.get_in.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"down","down",1565245570)], null));
});
animation.input.key_pressed_QMARK_ = (function animation$input$key_pressed_QMARK_(input,keycode){
return cljs.core._EQ_.call(null,animation.input.key_pressed_state.call(null,input,keycode),new cljs.core.Keyword(null,"pressed","pressed",1100937946));
});
animation.input.keys_pressed = (function animation$input$keys_pressed(input){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__17451){
var vec__17452 = p__17451;
var keycode = cljs.core.nth.call(null,vec__17452,(0),null);
var state = cljs.core.nth.call(null,vec__17452,(1),null);
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"pressed","pressed",1100937946));
}),cljs.core.get_in.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"pressed-state","pressed-state",1499847364)], null))));
});
animation.input.key_pressed_state = (function animation$input$key_pressed_state(input,keycode){
return cljs.core.get_in.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"pressed-state","pressed-state",1499847364),keycode], null));
});
animation.input.keys_pressed_state = (function animation$input$keys_pressed_state(input,keycode){
return cljs.core.get_in.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"pressed-state","pressed-state",1499847364)], null));
});
animation.input.set_key_pressed_state = (function animation$input$set_key_pressed_state(input,keycode,state){
return cljs.core.swap_BANG_.call(null,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"pressed-state","pressed-state",1499847364),keycode], null),state);
});
animation.input.set_keys_down = (function animation$input$set_keys_down(input,keys_down){
return cljs.core.swap_BANG_.call(null,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"down","down",1565245570)], null),keys_down);
});
animation.input.store_mouse_position = (function animation$input$store_mouse_position(input,canvas){
return animation.input.on.call(null,canvas,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),(function (event){
return cljs.core.swap_BANG_.call(null,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"position","position",-2011731912)], null),animation.input.event__GT_mouse_position.call(null,event));
}));
});
animation.input.store_keys_down = (function animation$input$store_keys_down(input,window){
animation.input.on.call(null,window,new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (event){
animation.input.set_keys_down.call(null,input,cljs.core.conj.call(null,animation.input.keys_down.call(null,cljs.core.deref.call(null,input)),event.keyCode));

return event.preventDefault();
}));

return animation.input.on.call(null,window,new cljs.core.Keyword(null,"keyup","keyup",-794526927),(function (event){
return animation.input.set_keys_down.call(null,input,cljs.core.disj.call(null,animation.input.keys_down.call(null,cljs.core.deref.call(null,input)),event.keyCode));
}));
});
animation.input.store_keys_pressed_states = (function animation$input$store_keys_pressed_states(input,window){
animation.input.on.call(null,window,new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (event){
var keycode = event.keyCode;
var key_state = animation.input.key_pressed_state.call(null,cljs.core.deref.call(null,input),keycode);
if(cljs.core._EQ_.call(null,key_state,null)){
return animation.input.set_key_pressed_state.call(null,input,keycode,new cljs.core.Keyword(null,"pressed","pressed",1100937946));
} else {
return null;
}
}));

animation.input.on_read.call(null,input,(function (){
var seq__17455 = cljs.core.seq.call(null,animation.input.keys_pressed.call(null,cljs.core.deref.call(null,input)));
var chunk__17456 = null;
var count__17457 = (0);
var i__17458 = (0);
while(true){
if((i__17458 < count__17457)){
var keycode = cljs.core._nth.call(null,chunk__17456,i__17458);
animation.input.set_key_pressed_state.call(null,input,keycode,new cljs.core.Keyword(null,"waiting-for-up","waiting-for-up",571459707));

var G__17459 = seq__17455;
var G__17460 = chunk__17456;
var G__17461 = count__17457;
var G__17462 = (i__17458 + (1));
seq__17455 = G__17459;
chunk__17456 = G__17460;
count__17457 = G__17461;
i__17458 = G__17462;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17455);
if(temp__4657__auto__){
var seq__17455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17455__$1)){
var c__11683__auto__ = cljs.core.chunk_first.call(null,seq__17455__$1);
var G__17463 = cljs.core.chunk_rest.call(null,seq__17455__$1);
var G__17464 = c__11683__auto__;
var G__17465 = cljs.core.count.call(null,c__11683__auto__);
var G__17466 = (0);
seq__17455 = G__17463;
chunk__17456 = G__17464;
count__17457 = G__17465;
i__17458 = G__17466;
continue;
} else {
var keycode = cljs.core.first.call(null,seq__17455__$1);
animation.input.set_key_pressed_state.call(null,input,keycode,new cljs.core.Keyword(null,"waiting-for-up","waiting-for-up",571459707));

var G__17467 = cljs.core.next.call(null,seq__17455__$1);
var G__17468 = null;
var G__17469 = (0);
var G__17470 = (0);
seq__17455 = G__17467;
chunk__17456 = G__17468;
count__17457 = G__17469;
i__17458 = G__17470;
continue;
}
} else {
return null;
}
}
break;
}
}));

return animation.input.on.call(null,window,new cljs.core.Keyword(null,"keyup","keyup",-794526927),(function (event){
var keycode = event.keyCode;
var key_state = animation.input.key_pressed_state.call(null,cljs.core.deref.call(null,input),keycode);
if(cljs.core._EQ_.call(null,key_state,new cljs.core.Keyword(null,"waiting-for-up","waiting-for-up",571459707))){
return animation.input.set_key_pressed_state.call(null,input,keycode,null);
} else {
return null;
}
}));
});
animation.input.current_drag = (function animation$input$current_drag(input){
if(cljs.core.truth_(animation.input.mouse_down_QMARK_.call(null,input))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get_in.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"previous","previous",-720163404),cljs.core.get_in.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"current","current",-1088038603)], null))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),null,new cljs.core.Keyword(null,"previous","previous",-720163404),new cljs.core.Keyword(null,"nil","nil",99600501)], null);
}
});
animation.input.store_drag = (function animation$input$store_drag(input){
return cljs.core.swap_BANG_.call(null,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"drag","drag",449951290)], null),animation.input.current_drag.call(null,cljs.core.deref.call(null,input)));
});
animation.input.store_mouse_is_clicked = (function animation$input$store_mouse_is_clicked(input,window){
animation.input.on.call(null,window,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),cljs.core.partial.call(null,cljs.core.swap_BANG_,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623)], null),true));

return animation.input.on_read.call(null,input,cljs.core.partial.call(null,cljs.core.swap_BANG_,input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623)], null),false));
});
animation.input.on_read = (function animation$input$on_read(input,fn){
return cljs.core.swap_BANG_.call(null,input,cljs.core.assoc,new cljs.core.Keyword(null,"read-fns","read-fns",-1268032808),cljs.core.conj.call(null,cljs.core.deref.call(null,input).call(null,new cljs.core.Keyword(null,"read-fns","read-fns",-1268032808)),fn));
});
animation.input.read = (function animation$input$read(input){
var seq__17471 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,input),new cljs.core.Keyword(null,"read-fns","read-fns",-1268032808)));
var chunk__17472 = null;
var count__17473 = (0);
var i__17474 = (0);
while(true){
if((i__17474 < count__17473)){
var read_fn = cljs.core._nth.call(null,chunk__17472,i__17474);
read_fn.call(null);

var G__17475 = seq__17471;
var G__17476 = chunk__17472;
var G__17477 = count__17473;
var G__17478 = (i__17474 + (1));
seq__17471 = G__17475;
chunk__17472 = G__17476;
count__17473 = G__17477;
i__17474 = G__17478;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17471);
if(temp__4657__auto__){
var seq__17471__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17471__$1)){
var c__11683__auto__ = cljs.core.chunk_first.call(null,seq__17471__$1);
var G__17479 = cljs.core.chunk_rest.call(null,seq__17471__$1);
var G__17480 = c__11683__auto__;
var G__17481 = cljs.core.count.call(null,c__11683__auto__);
var G__17482 = (0);
seq__17471 = G__17479;
chunk__17472 = G__17480;
count__17473 = G__17481;
i__17474 = G__17482;
continue;
} else {
var read_fn = cljs.core.first.call(null,seq__17471__$1);
read_fn.call(null);

var G__17483 = cljs.core.next.call(null,seq__17471__$1);
var G__17484 = null;
var G__17485 = (0);
var G__17486 = (0);
seq__17471 = G__17483;
chunk__17472 = G__17484;
count__17473 = G__17485;
i__17474 = G__17486;
continue;
}
} else {
return null;
}
}
break;
}
});
animation.input.input = (function animation$input$input(canvas,window){
var input = cljs.core.atom.call(null,animation.input.create_input.call(null));
animation.tick.on_tick.call(null,((function (input){
return (function (){
return animation.input.store_drag.call(null,input);
});})(input))
);

animation.input.store_mouse_position.call(null,input,canvas);

animation.input.store_mouse_is_clicked.call(null,input,window);

animation.input.store_mouse_is_down.call(null,input,canvas);

animation.input.store_keys_down.call(null,input,window);

animation.input.store_keys_pressed_states.call(null,input,window);

return input;
});

//# sourceMappingURL=input.js.map