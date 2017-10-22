// Compiled by ClojureScript 1.9.908 {}
goog.provide('animation.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('clojure.browser.repl');
goog.require('animation.geometry');
goog.require('animation.tick');
goog.require('animation.input');
cljs.core.enable_console_print_BANG_.call(null);
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
animation.core.canvas = goog.dom.getElement("screen");
animation.core.screen = animation.core.canvas.getContext("2d");
animation.core.point_radius = (2);
animation.core.draw_mode_QMARK_ = (function animation$core$draw_mode_QMARK_(state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.get.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691)));
});
animation.core.move_mode_QMARK_ = (function animation$core$move_mode_QMARK_(state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),cljs.core.get.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691)));
});
animation.core.current_frame_index = (function animation$core$current_frame_index(p1__13577_SHARP_){
return p1__13577_SHARP_.call(null,new cljs.core.Keyword(null,"current-frame-index","current-frame-index",-2126953732));
});
animation.core.playing_QMARK_ = (function animation$core$playing_QMARK_(p1__13578_SHARP_){
return p1__13578_SHARP_.call(null,new cljs.core.Keyword(null,"playing?","playing?",-1884542863));
});
animation.core.point_group = (function animation$core$point_group(p1__13579_SHARP_){
return p1__13579_SHARP_.call(null,new cljs.core.Keyword(null,"point-group","point-group",414883798));
});
animation.core.selected_group = (function animation$core$selected_group(p1__13580_SHARP_){
return p1__13580_SHARP_.call(null,new cljs.core.Keyword(null,"selected-group","selected-group",669136664));
});
animation.core.frames = (function animation$core$frames(p1__13581_SHARP_){
return p1__13581_SHARP_.call(null,new cljs.core.Keyword(null,"frames","frames",1765687497));
});
animation.core.frame = (function animation$core$frame(state,i){
return cljs.core.get.call(null,animation.core.frames.call(null,state),i);
});
animation.core.last_frame = (function animation$core$last_frame(p1__13582_SHARP_){
return cljs.core.last.call(null,new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(p1__13582_SHARP_));
});
animation.core.set_current_points = (function animation$core$set_current_points(state,points){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frames","frames",1765687497),animation.core.current_frame_index.call(null,state),new cljs.core.Keyword(null,"points","points",-1486596883)], null),points);
});
animation.core.current_frame = (function animation$core$current_frame(p1__13583_SHARP_){
return animation.core.frame.call(null,p1__13583_SHARP_,animation.core.current_frame_index.call(null,p1__13583_SHARP_));
});
animation.core.next_frame = (function animation$core$next_frame(p1__13584_SHARP_){
return animation.core.frame.call(null,p1__13584_SHARP_,(animation.core.current_frame_index.call(null,p1__13584_SHARP_) + (1)));
});
animation.core.initial_state = (function animation$core$initial_state(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [animation.core.create_frame.call(null,cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"current-frame-index","current-frame-index",-2126953732),(0),new cljs.core.Keyword(null,"next-point-id","next-point-id",-613512213),(0),new cljs.core.Keyword(null,"mode","mode",654403691),null,new cljs.core.Keyword(null,"point-group","point-group",414883798),(0),new cljs.core.Keyword(null,"selected-group","selected-group",669136664),(1),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true], null);
});
animation.core.drag_delta = (function animation$core$drag_delta(input){
var drag = animation.input.mouse_drag.call(null,input);
if(cljs.core.truth_(drag.call(null,new cljs.core.Keyword(null,"previous","previous",-720163404)))){
return animation.geometry.subtract_vectors.call(null,drag.call(null,new cljs.core.Keyword(null,"current","current",-1088038603)),drag.call(null,new cljs.core.Keyword(null,"previous","previous",-720163404)));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
}
});
animation.core.clear_screen = (function animation$core$clear_screen(screen,window_size){
return screen.clearRect((0),(0),cljs.core.get.call(null,window_size,new cljs.core.Keyword(null,"w","w",354169001)),cljs.core.get.call(null,window_size,new cljs.core.Keyword(null,"h","h",1109658740)));
});
animation.core.get_window_size = (function animation$core$get_window_size(window,document){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(function (){var or__10844__auto__ = window.innerWidth;
if(cljs.core.truth_(or__10844__auto__)){
return or__10844__auto__;
} else {
return document.body.clientWidth;
}
})(),new cljs.core.Keyword(null,"h","h",1109658740),(function (){var or__10844__auto__ = window.innerHeight;
if(cljs.core.truth_(or__10844__auto__)){
return or__10844__auto__;
} else {
return document.body.clientHeight;
}
})()], null);
});
animation.core.fill_circle = (function animation$core$fill_circle(screen,center,radius,color){
screen.fillStyle = color;

screen.beginPath();

screen.arc(center.call(null,new cljs.core.Keyword(null,"x","x",2099068185)),center.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)),radius,(0),((2) * Math.PI));

screen.closePath();

return screen.fill();
});
animation.core.point_color = (function animation$core$point_color(point,selected_group){
if(cljs.core._EQ_.call(null,point.call(null,new cljs.core.Keyword(null,"group","group",582596132)),selected_group)){
return "red";
} else {
return "black";
}
});
animation.core.draw_ui = (function animation$core$draw_ui(screen,state){
var playing_status = (cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(state))?"playing":"stopped");
screen.fillStyle = "black";

return screen.fillText(playing_status,(10),(10));
});
animation.core.draw = (function animation$core$draw(state,screen){
animation.core.clear_screen.call(null,screen,animation.core.get_window_size.call(null,window,document));

animation.core.draw_ui.call(null,screen,state);

var seq__13585 = cljs.core.seq.call(null,animation.core.current_frame.call(null,state).call(null,new cljs.core.Keyword(null,"points","points",-1486596883)));
var chunk__13586 = null;
var count__13587 = (0);
var i__13588 = (0);
while(true){
if((i__13588 < count__13587)){
var point = cljs.core._nth.call(null,chunk__13586,i__13588);
animation.core.fill_circle.call(null,screen,point,animation.core.point_radius,animation.core.point_color.call(null,point,animation.core.selected_group.call(null,state)));

var G__13589 = seq__13585;
var G__13590 = chunk__13586;
var G__13591 = count__13587;
var G__13592 = (i__13588 + (1));
seq__13585 = G__13589;
chunk__13586 = G__13590;
count__13587 = G__13591;
i__13588 = G__13592;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13585);
if(temp__4657__auto__){
var seq__13585__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13585__$1)){
var c__11683__auto__ = cljs.core.chunk_first.call(null,seq__13585__$1);
var G__13593 = cljs.core.chunk_rest.call(null,seq__13585__$1);
var G__13594 = c__11683__auto__;
var G__13595 = cljs.core.count.call(null,c__11683__auto__);
var G__13596 = (0);
seq__13585 = G__13593;
chunk__13586 = G__13594;
count__13587 = G__13595;
i__13588 = G__13596;
continue;
} else {
var point = cljs.core.first.call(null,seq__13585__$1);
animation.core.fill_circle.call(null,screen,point,animation.core.point_radius,animation.core.point_color.call(null,point,animation.core.selected_group.call(null,state)));

var G__13597 = cljs.core.next.call(null,seq__13585__$1);
var G__13598 = null;
var G__13599 = (0);
var G__13600 = (0);
seq__13585 = G__13597;
chunk__13586 = G__13598;
count__13587 = G__13599;
i__13588 = G__13600;
continue;
}
} else {
return null;
}
}
break;
}
});
animation.core.set_canvas_size_BANG_ = (function animation$core$set_canvas_size_BANG_(canvas,p__13601){
var map__13602 = p__13601;
var map__13602__$1 = ((((!((map__13602 == null)))?((((map__13602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13602):map__13602);
var w = cljs.core.get.call(null,map__13602__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__13602__$1,new cljs.core.Keyword(null,"h","h",1109658740));
canvas.width = w;

return canvas.height = h;
});
animation.core.create_point = (function animation$core$create_point(id,position,group){
return cljs.core.merge.call(null,position,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"version","version",425292698),(0)], null));
});
animation.core.create_points = (function animation$core$create_points(input,state){
if(cljs.core.truth_((function (){var and__10832__auto__ = animation.core.draw_mode_QMARK_.call(null,state);
if(cljs.core.truth_(and__10832__auto__)){
return animation.input.mouse_down_QMARK_.call(null,input);
} else {
return and__10832__auto__;
}
})())){
var id = state.call(null,new cljs.core.Keyword(null,"next-point-id","next-point-id",-613512213));
var point = animation.core.create_point.call(null,id,animation.input.mouse_position.call(null,input),animation.core.point_group.call(null,state));
var points = cljs.core.conj.call(null,animation.core.current_frame.call(null,state).call(null,new cljs.core.Keyword(null,"points","points",-1486596883)),point);
return animation.core.set_current_points.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"next-point-id","next-point-id",-613512213),cljs.core.inc),points);
} else {
return null;
}
});
animation.core.keyboard_selected_mode = (function animation$core$keyboard_selected_mode(input){
var button_maps = new cljs.core.PersistentArrayMap(null, 3, [(49),new cljs.core.Keyword(null,"select","select",1147833503),(16),new cljs.core.Keyword(null,"draw","draw",1358331674),(51),new cljs.core.Keyword(null,"move","move",-2110884309)], null);
return cljs.core.get.call(null,button_maps,cljs.core.first.call(null,animation.input.keys_down.call(null,input)));
});
animation.core.set_mode = (function animation$core$set_mode(input,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),animation.core.keyboard_selected_mode.call(null,input));
});
animation.core.points_selected_unselected = (function animation$core$points_selected_unselected(points,selected_group){
var map__13604 = cljs.core.group_by.call(null,(function (point){
return cljs.core._EQ_.call(null,point.call(null,new cljs.core.Keyword(null,"group","group",582596132)),selected_group);
}),points);
var map__13604__$1 = ((((!((map__13604 == null)))?((((map__13604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13604):map__13604);
var selected = cljs.core.get.call(null,map__13604__$1,true);
var unselected = cljs.core.get.call(null,map__13604__$1,false);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"unselected","unselected",-1210198137),unselected], null);
});
animation.core.move_points = (function animation$core$move_points(input,state){
if(cljs.core.truth_((function (){var and__10832__auto__ = animation.input.mouse_down_QMARK_.call(null,input);
if(cljs.core.truth_(and__10832__auto__)){
return animation.core.move_mode_QMARK_.call(null,state);
} else {
return and__10832__auto__;
}
})())){
var drag_delta_SINGLEQUOTE_ = animation.core.drag_delta.call(null,input);
var points = animation.core.current_frame.call(null,state).call(null,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__13606 = animation.core.points_selected_unselected.call(null,points,animation.core.selected_group.call(null,state));
var map__13606__$1 = ((((!((map__13606 == null)))?((((map__13606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13606):map__13606);
var selected = cljs.core.get.call(null,map__13606__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var unselected = cljs.core.get.call(null,map__13606__$1,new cljs.core.Keyword(null,"unselected","unselected",-1210198137));
var moved_points = cljs.core.map.call(null,((function (drag_delta_SINGLEQUOTE_,points,map__13606,map__13606__$1,selected,unselected){
return (function (point){
return cljs.core.merge.call(null,point,animation.geometry.add_vectors.call(null,point,drag_delta_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(point) + (1))], null));
});})(drag_delta_SINGLEQUOTE_,points,map__13606,map__13606__$1,selected,unselected))
,selected);
return animation.core.set_current_points.call(null,state,cljs.core.concat.call(null,moved_points,unselected));
} else {
return null;
}
});
animation.core.rewind_on_4_key = (function animation$core$rewind_on_4_key(input,state){
if(cljs.core.truth_(animation.input.key_down_QMARK_.call(null,input,animation.input.key__GT_keycode.call(null,new cljs.core.Keyword(null,"4","4",-1197948085))))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-frame-index","current-frame-index",-2126953732),(0));
} else {
return null;
}
});
animation.core.increment_dot_group_on_shift = (function animation$core$increment_dot_group_on_shift(input,state){
if(cljs.core.truth_(animation.input.key_pressed_QMARK_.call(null,input,animation.input.key__GT_keycode.call(null,new cljs.core.Keyword(null,"shift","shift",997140064))))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"point-group","point-group",414883798),cljs.core.inc);
} else {
return null;
}
});
animation.core.default$ = (function animation$core$default(fn,value){
var or__10844__auto__ = fn.call(null,value);
if(cljs.core.truth_(or__10844__auto__)){
return or__10844__auto__;
} else {
return value;
}
});
animation.core.create_frame = (function animation$core$create_frame(points){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),points], null);
});
animation.core.at_last_frame_QMARK_ = (function animation$core$at_last_frame_QMARK_(state){
return cljs.core._EQ_.call(null,animation.core.current_frame_index.call(null,state),(cljs.core.count.call(null,animation.core.frames.call(null,state)) - (1)));
});
animation.core.add_frame_if_at_animation_end = (function animation$core$add_frame_if_at_animation_end(state){
if(cljs.core.truth_(animation.core.at_last_frame_QMARK_.call(null,state))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.conj.call(null,state.call(null,new cljs.core.Keyword(null,"frames","frames",1765687497)),animation.core.create_frame.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
return null;
}
});
animation.core.replace_next_frame = (function animation$core$replace_next_frame(state,frame){
var next_frame_id = (animation.core.current_frame_index.call(null,state) + (1));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frames","frames",1765687497),next_frame_id], null),frame);
});
animation.core.points_lookup = (function animation$core$points_lookup(points){
return cljs.core.reduce.call(null,(function (lookup,p__13608){
var map__13609 = p__13608;
var map__13609__$1 = ((((!((map__13609 == null)))?((((map__13609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13609):map__13609);
var p = map__13609__$1;
var id = cljs.core.get.call(null,map__13609__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,lookup,id,p);
}),cljs.core.PersistentArrayMap.EMPTY,points);
});
animation.core.merge_points = (function animation$core$merge_points(current_points,next_points){
var current_id__GT_point = animation.core.points_lookup.call(null,current_points);
return cljs.core.vals.call(null,cljs.core.reduce.call(null,((function (current_id__GT_point){
return (function (id__GT_point,p__13611){
var map__13612 = p__13611;
var map__13612__$1 = ((((!((map__13612 == null)))?((((map__13612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13612):map__13612);
var point = map__13612__$1;
var id = cljs.core.get.call(null,map__13612__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var version = cljs.core.get.call(null,map__13612__$1,new cljs.core.Keyword(null,"version","version",425292698));
var point_exists_QMARK_ = cljs.core.contains_QMARK_.call(null,id__GT_point,id);
var replace_QMARK_ = (point_exists_QMARK_) && ((cljs.core.get_in.call(null,id__GT_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"version","version",425292698)], null)) < version));
if((replace_QMARK_) || (!(point_exists_QMARK_))){
return cljs.core.assoc.call(null,id__GT_point,id,point);
} else {
return id__GT_point;
}
});})(current_id__GT_point))
,current_id__GT_point,next_points));
});
animation.core.merge_frames = (function animation$core$merge_frames(p__13614,p__13615){
var map__13616 = p__13614;
var map__13616__$1 = ((((!((map__13616 == null)))?((((map__13616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13616):map__13616);
var current_points = cljs.core.get.call(null,map__13616__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__13617 = p__13615;
var map__13617__$1 = ((((!((map__13617 == null)))?((((map__13617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13617):map__13617);
var next = map__13617__$1;
var next_points = cljs.core.get.call(null,map__13617__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.assoc.call(null,animation.core.to,new cljs.core.Keyword(null,"points","points",-1486596883),animation.core.merge_points.call(null,current_points,next_points));
});
animation.core.merge_current_frame_into_next = (function animation$core$merge_current_frame_into_next(state){
var current_frame_SINGLEQUOTE_ = animation.core.current_frame.call(null,state);
var next_frame_SINGLEQUOTE_ = animation.core.next_frame.call(null,state);
var merged_frame = animation.core.merge_frames.call(null,current_frame_SINGLEQUOTE_,next_frame_SINGLEQUOTE_);
return animation.core.replace_next_frame.call(null,state,merged_frame);
});
animation.core.increment_current_frame_index = (function animation$core$increment_current_frame_index(state){
if(cljs.core.truth_(animation.core.playing_QMARK_.call(null,state))){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"current-frame-index","current-frame-index",-2126953732),cljs.core.inc);
} else {
return null;
}
});
animation.core.cycle_selected_group = (function animation$core$cycle_selected_group(state){
var max_group = animation.core.point_group.call(null,state);
var next_group = (animation.core.selected_group.call(null,state) + (1));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"selected-group","selected-group",669136664),(((next_group <= max_group))?next_group:(1)));
});
animation.core.cycle_selected_group_on_tab = (function animation$core$cycle_selected_group_on_tab(input,state){
if(cljs.core.truth_(animation.input.key_pressed_QMARK_.call(null,input,animation.input.key__GT_keycode.call(null,new cljs.core.Keyword(null,"tab","tab",-559583621))))){
return animation.core.cycle_selected_group.call(null,state);
} else {
return null;
}
});
animation.core.toggle_playing_on_space = (function animation$core$toggle_playing_on_space(input,state){
if(cljs.core.truth_(animation.input.key_pressed_QMARK_.call(null,input,animation.input.key__GT_keycode.call(null,new cljs.core.Keyword(null,"space","space",348133475))))){
return animation.core.toggle_playing.call(null,state);
} else {
return null;
}
});
animation.core.toggle_playing = (function animation$core$toggle_playing(state){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),cljs.core.not);
});
animation.core.setup_layout = (function animation$core$setup_layout(window,document){
var window_size = animation.core.get_window_size.call(null,window,document);
var canvas_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(window_size),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(window_size) - (40))], null);
return animation.core.set_canvas_size_BANG_.call(null,animation.core.canvas,canvas_size);
});
animation.core.step_state = (function animation$core$step_state(input,state){
return animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.increment_current_frame_index),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.merge_current_frame_into_next),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.add_frame_if_at_animation_end),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.toggle_playing_on_space,input),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.cycle_selected_group_on_tab,input),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.increment_dot_group_on_shift,input),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.move_points,input),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.create_points,input),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.rewind_on_4_key,input),animation.core.default$.call(null,cljs.core.partial.call(null,animation.core.set_mode,input),state))))))))));
});
animation.core.run = (function animation$core$run(state,input,screen){
animation.core.setup_layout.call(null,window,document);

animation.tick.on_tick.call(null,(function (){
return cljs.core.reset_BANG_.call(null,state,animation.core.step_state.call(null,cljs.core.deref.call(null,input),cljs.core.deref.call(null,state)));
}));

animation.tick.on_tick.call(null,(function (){
return animation.core.draw.call(null,cljs.core.deref.call(null,state),screen);
}));

return animation.tick.on_tick.call(null,(function (){
return animation.input.read.call(null,input);
}));
});
animation.core.state = cljs.core.atom.call(null,animation.core.initial_state.call(null));
animation.core.run.call(null,animation.core.state,animation.input.input.call(null,animation.core.canvas,window),animation.core.screen);

//# sourceMappingURL=core.js.map
