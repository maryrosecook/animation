// Compiled by ClojureScript 1.9.908 {}
goog.provide('animation.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
animation.core.keyword__GT_event_type = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mouseup","mouseup",350619456),new cljs.core.Keyword(null,"dragover","dragover",-1169536926),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"keypress","keypress",1625181642),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"dragenter","dragenter",-237546900),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"dblclick","dblclick",-1821330376),new cljs.core.Keyword(null,"dragend","dragend",1096302264),new cljs.core.Keyword(null,"dragstart","dragstart",955864218),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),new cljs.core.Keyword(null,"dragleave","dragleave",-624601572)],[goog.events.EventType.MOUSEUP,goog.events.EventType.DRAGOVER,goog.events.EventType.KEYDOWN,goog.events.EventType.KEYPRESS,goog.events.EventType.MOUSEOUT,goog.events.EventType.DROP,goog.events.EventType.DRAGENTER,goog.events.EventType.KEYUP,goog.events.EventType.MOUSEOVER,goog.events.EventType.CLICK,goog.events.EventType.MOUSEMOVE,goog.events.EventType.BLUR,goog.events.EventType.FOCUS,goog.events.EventType.DBLCLICK,goog.events.EventType.DRAGEND,goog.events.EventType.DRAGSTART,goog.events.EventType.DRAG,goog.events.EventType.MOUSEDOWN,goog.events.EventType.DRAGLEAVE]);
animation.core.listen = (function animation$core$listen(element,event_type,fn){
return goog.events.listen(element,animation.core.keyword__GT_event_type.call(null,event_type),fn);
});
animation.core.screen = goog.dom.getElement("screen");
console.log(animation.core.listen.call(null,animation.core.screen,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),(function (){
return cljs.core.println.call(null,"hi");
})));
cljs.core.println.call(null,"working");

//# sourceMappingURL=core.js.map
