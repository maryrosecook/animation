// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13966){
var map__13967 = p__13966;
var map__13967__$1 = ((((!((map__13967 == null)))?((((map__13967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13967):map__13967);
var m = map__13967__$1;
var n = cljs.core.get.call(null,map__13967__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13967__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13969_13991 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13970_13992 = null;
var count__13971_13993 = (0);
var i__13972_13994 = (0);
while(true){
if((i__13972_13994 < count__13971_13993)){
var f_13995 = cljs.core._nth.call(null,chunk__13970_13992,i__13972_13994);
cljs.core.println.call(null,"  ",f_13995);

var G__13996 = seq__13969_13991;
var G__13997 = chunk__13970_13992;
var G__13998 = count__13971_13993;
var G__13999 = (i__13972_13994 + (1));
seq__13969_13991 = G__13996;
chunk__13970_13992 = G__13997;
count__13971_13993 = G__13998;
i__13972_13994 = G__13999;
continue;
} else {
var temp__4657__auto___14000 = cljs.core.seq.call(null,seq__13969_13991);
if(temp__4657__auto___14000){
var seq__13969_14001__$1 = temp__4657__auto___14000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13969_14001__$1)){
var c__11683__auto___14002 = cljs.core.chunk_first.call(null,seq__13969_14001__$1);
var G__14003 = cljs.core.chunk_rest.call(null,seq__13969_14001__$1);
var G__14004 = c__11683__auto___14002;
var G__14005 = cljs.core.count.call(null,c__11683__auto___14002);
var G__14006 = (0);
seq__13969_13991 = G__14003;
chunk__13970_13992 = G__14004;
count__13971_13993 = G__14005;
i__13972_13994 = G__14006;
continue;
} else {
var f_14007 = cljs.core.first.call(null,seq__13969_14001__$1);
cljs.core.println.call(null,"  ",f_14007);

var G__14008 = cljs.core.next.call(null,seq__13969_14001__$1);
var G__14009 = null;
var G__14010 = (0);
var G__14011 = (0);
seq__13969_13991 = G__14008;
chunk__13970_13992 = G__14009;
count__13971_13993 = G__14010;
i__13972_13994 = G__14011;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14012 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__10844__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10844__auto__)){
return or__10844__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14012);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14012)))?cljs.core.second.call(null,arglists_14012):arglists_14012));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13973_14013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13974_14014 = null;
var count__13975_14015 = (0);
var i__13976_14016 = (0);
while(true){
if((i__13976_14016 < count__13975_14015)){
var vec__13977_14017 = cljs.core._nth.call(null,chunk__13974_14014,i__13976_14016);
var name_14018 = cljs.core.nth.call(null,vec__13977_14017,(0),null);
var map__13980_14019 = cljs.core.nth.call(null,vec__13977_14017,(1),null);
var map__13980_14020__$1 = ((((!((map__13980_14019 == null)))?((((map__13980_14019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13980_14019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13980_14019):map__13980_14019);
var doc_14021 = cljs.core.get.call(null,map__13980_14020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14022 = cljs.core.get.call(null,map__13980_14020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14018);

cljs.core.println.call(null," ",arglists_14022);

if(cljs.core.truth_(doc_14021)){
cljs.core.println.call(null," ",doc_14021);
} else {
}

var G__14023 = seq__13973_14013;
var G__14024 = chunk__13974_14014;
var G__14025 = count__13975_14015;
var G__14026 = (i__13976_14016 + (1));
seq__13973_14013 = G__14023;
chunk__13974_14014 = G__14024;
count__13975_14015 = G__14025;
i__13976_14016 = G__14026;
continue;
} else {
var temp__4657__auto___14027 = cljs.core.seq.call(null,seq__13973_14013);
if(temp__4657__auto___14027){
var seq__13973_14028__$1 = temp__4657__auto___14027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13973_14028__$1)){
var c__11683__auto___14029 = cljs.core.chunk_first.call(null,seq__13973_14028__$1);
var G__14030 = cljs.core.chunk_rest.call(null,seq__13973_14028__$1);
var G__14031 = c__11683__auto___14029;
var G__14032 = cljs.core.count.call(null,c__11683__auto___14029);
var G__14033 = (0);
seq__13973_14013 = G__14030;
chunk__13974_14014 = G__14031;
count__13975_14015 = G__14032;
i__13976_14016 = G__14033;
continue;
} else {
var vec__13982_14034 = cljs.core.first.call(null,seq__13973_14028__$1);
var name_14035 = cljs.core.nth.call(null,vec__13982_14034,(0),null);
var map__13985_14036 = cljs.core.nth.call(null,vec__13982_14034,(1),null);
var map__13985_14037__$1 = ((((!((map__13985_14036 == null)))?((((map__13985_14036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13985_14036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13985_14036):map__13985_14036);
var doc_14038 = cljs.core.get.call(null,map__13985_14037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14039 = cljs.core.get.call(null,map__13985_14037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14035);

cljs.core.println.call(null," ",arglists_14039);

if(cljs.core.truth_(doc_14038)){
cljs.core.println.call(null," ",doc_14038);
} else {
}

var G__14040 = cljs.core.next.call(null,seq__13973_14028__$1);
var G__14041 = null;
var G__14042 = (0);
var G__14043 = (0);
seq__13973_14013 = G__14040;
chunk__13974_14014 = G__14041;
count__13975_14015 = G__14042;
i__13976_14016 = G__14043;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13987 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13988 = null;
var count__13989 = (0);
var i__13990 = (0);
while(true){
if((i__13990 < count__13989)){
var role = cljs.core._nth.call(null,chunk__13988,i__13990);
var temp__4657__auto___14044__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14044__$1)){
var spec_14045 = temp__4657__auto___14044__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14045));
} else {
}

var G__14046 = seq__13987;
var G__14047 = chunk__13988;
var G__14048 = count__13989;
var G__14049 = (i__13990 + (1));
seq__13987 = G__14046;
chunk__13988 = G__14047;
count__13989 = G__14048;
i__13990 = G__14049;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13987);
if(temp__4657__auto____$1){
var seq__13987__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13987__$1)){
var c__11683__auto__ = cljs.core.chunk_first.call(null,seq__13987__$1);
var G__14050 = cljs.core.chunk_rest.call(null,seq__13987__$1);
var G__14051 = c__11683__auto__;
var G__14052 = cljs.core.count.call(null,c__11683__auto__);
var G__14053 = (0);
seq__13987 = G__14050;
chunk__13988 = G__14051;
count__13989 = G__14052;
i__13990 = G__14053;
continue;
} else {
var role = cljs.core.first.call(null,seq__13987__$1);
var temp__4657__auto___14054__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14054__$2)){
var spec_14055 = temp__4657__auto___14054__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14055));
} else {
}

var G__14056 = cljs.core.next.call(null,seq__13987__$1);
var G__14057 = null;
var G__14058 = (0);
var G__14059 = (0);
seq__13987 = G__14056;
chunk__13988 = G__14057;
count__13989 = G__14058;
i__13990 = G__14059;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
