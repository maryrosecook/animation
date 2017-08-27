// Compiled by ClojureScript 1.9.908 {}
goog.provide('animation.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
animation.core.keyword__GT_event_type = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mouseup","mouseup",350619456),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"keypress","keypress",1625181642),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"dblclick","dblclick",-1821330376),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074)],[goog.events.EventType.MOUSEUP,goog.events.EventType.KEYDOWN,goog.events.EventType.KEYPRESS,goog.events.EventType.MOUSEOUT,goog.events.EventType.KEYUP,goog.events.EventType.MOUSEOVER,goog.events.EventType.CLICK,goog.events.EventType.MOUSEMOVE,goog.events.EventType.BLUR,goog.events.EventType.FOCUS,goog.events.EventType.DBLCLICK,goog.events.EventType.MOUSEDOWN]);
animation.core.listen = (function animation$core$listen(element,event_type,fn){
return goog.events.listen(element,animation.core.keyword__GT_event_type.call(null,event_type),fn);
});
animation.core.canvas = goog.dom.getElement("screen");
animation.core.screen = animation.core.canvas.getContext("2d");
animation.core.listen.call(null,animation.core.canvas,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),(function (event){
return animation.core.screen.fillRect(event.clientX,event.clientY,(2),(2));
}));

//# sourceMappingURL=core.js.map
