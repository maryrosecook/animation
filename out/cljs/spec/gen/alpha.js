// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__11469__auto__,writer__11470__auto__,opt__11471__auto__){
return cljs.core._write.call(null,writer__11470__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12564 = arguments.length;
var i__12014__auto___12565 = (0);
while(true){
if((i__12014__auto___12565 < len__12013__auto___12564)){
args__12020__auto__.push((arguments[i__12014__auto___12565]));

var G__12566 = (i__12014__auto___12565 + (1));
i__12014__auto___12565 = G__12566;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq12563){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12563));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12568 = arguments.length;
var i__12014__auto___12569 = (0);
while(true){
if((i__12014__auto___12569 < len__12013__auto___12568)){
args__12020__auto__.push((arguments[i__12014__auto___12569]));

var G__12570 = (i__12014__auto___12569 + (1));
i__12014__auto___12569 = G__12570;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq12567){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12567));
});

var g_QMARK__12571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_12572 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12571){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__12571))
,null));
var mkg_12573 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12571,g_12572){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__12571,g_12572))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__12571,g_12572,mkg_12573){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12571).call(null,x);
});})(g_QMARK__12571,g_12572,mkg_12573))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__12571,g_12572,mkg_12573){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_12573).call(null,gfn);
});})(g_QMARK__12571,g_12572,mkg_12573))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__12571,g_12572,mkg_12573){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_12572).call(null,generator);
});})(g_QMARK__12571,g_12572,mkg_12573))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12163__auto___12593 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__12163__auto___12593){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12594 = arguments.length;
var i__12014__auto___12595 = (0);
while(true){
if((i__12014__auto___12595 < len__12013__auto___12594)){
args__12020__auto__.push((arguments[i__12014__auto___12595]));

var G__12596 = (i__12014__auto___12595 + (1));
i__12014__auto___12595 = G__12596;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12593))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12593),args);
});})(g__12163__auto___12593))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__12163__auto___12593){
return (function (seq12574){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12574));
});})(g__12163__auto___12593))
;


var g__12163__auto___12597 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__12163__auto___12597){
return (function cljs$spec$gen$alpha$list(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12598 = arguments.length;
var i__12014__auto___12599 = (0);
while(true){
if((i__12014__auto___12599 < len__12013__auto___12598)){
args__12020__auto__.push((arguments[i__12014__auto___12599]));

var G__12600 = (i__12014__auto___12599 + (1));
i__12014__auto___12599 = G__12600;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12597))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12597),args);
});})(g__12163__auto___12597))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__12163__auto___12597){
return (function (seq12575){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12575));
});})(g__12163__auto___12597))
;


var g__12163__auto___12601 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__12163__auto___12601){
return (function cljs$spec$gen$alpha$map(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12602 = arguments.length;
var i__12014__auto___12603 = (0);
while(true){
if((i__12014__auto___12603 < len__12013__auto___12602)){
args__12020__auto__.push((arguments[i__12014__auto___12603]));

var G__12604 = (i__12014__auto___12603 + (1));
i__12014__auto___12603 = G__12604;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12601))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12601),args);
});})(g__12163__auto___12601))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__12163__auto___12601){
return (function (seq12576){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12576));
});})(g__12163__auto___12601))
;


var g__12163__auto___12605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__12163__auto___12605){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12606 = arguments.length;
var i__12014__auto___12607 = (0);
while(true){
if((i__12014__auto___12607 < len__12013__auto___12606)){
args__12020__auto__.push((arguments[i__12014__auto___12607]));

var G__12608 = (i__12014__auto___12607 + (1));
i__12014__auto___12607 = G__12608;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12605))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12605),args);
});})(g__12163__auto___12605))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__12163__auto___12605){
return (function (seq12577){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12577));
});})(g__12163__auto___12605))
;


var g__12163__auto___12609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__12163__auto___12609){
return (function cljs$spec$gen$alpha$set(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12610 = arguments.length;
var i__12014__auto___12611 = (0);
while(true){
if((i__12014__auto___12611 < len__12013__auto___12610)){
args__12020__auto__.push((arguments[i__12014__auto___12611]));

var G__12612 = (i__12014__auto___12611 + (1));
i__12014__auto___12611 = G__12612;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12609))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12609),args);
});})(g__12163__auto___12609))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__12163__auto___12609){
return (function (seq12578){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12578));
});})(g__12163__auto___12609))
;


var g__12163__auto___12613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__12163__auto___12613){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12614 = arguments.length;
var i__12014__auto___12615 = (0);
while(true){
if((i__12014__auto___12615 < len__12013__auto___12614)){
args__12020__auto__.push((arguments[i__12014__auto___12615]));

var G__12616 = (i__12014__auto___12615 + (1));
i__12014__auto___12615 = G__12616;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12613))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12613),args);
});})(g__12163__auto___12613))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__12163__auto___12613){
return (function (seq12579){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12579));
});})(g__12163__auto___12613))
;


var g__12163__auto___12617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__12163__auto___12617){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12618 = arguments.length;
var i__12014__auto___12619 = (0);
while(true){
if((i__12014__auto___12619 < len__12013__auto___12618)){
args__12020__auto__.push((arguments[i__12014__auto___12619]));

var G__12620 = (i__12014__auto___12619 + (1));
i__12014__auto___12619 = G__12620;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12617))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12617),args);
});})(g__12163__auto___12617))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__12163__auto___12617){
return (function (seq12580){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12580));
});})(g__12163__auto___12617))
;


var g__12163__auto___12621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__12163__auto___12621){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12622 = arguments.length;
var i__12014__auto___12623 = (0);
while(true){
if((i__12014__auto___12623 < len__12013__auto___12622)){
args__12020__auto__.push((arguments[i__12014__auto___12623]));

var G__12624 = (i__12014__auto___12623 + (1));
i__12014__auto___12623 = G__12624;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12621))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12621),args);
});})(g__12163__auto___12621))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__12163__auto___12621){
return (function (seq12581){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12581));
});})(g__12163__auto___12621))
;


var g__12163__auto___12625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__12163__auto___12625){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12626 = arguments.length;
var i__12014__auto___12627 = (0);
while(true){
if((i__12014__auto___12627 < len__12013__auto___12626)){
args__12020__auto__.push((arguments[i__12014__auto___12627]));

var G__12628 = (i__12014__auto___12627 + (1));
i__12014__auto___12627 = G__12628;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12625))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12625),args);
});})(g__12163__auto___12625))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__12163__auto___12625){
return (function (seq12582){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12582));
});})(g__12163__auto___12625))
;


var g__12163__auto___12629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__12163__auto___12629){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12630 = arguments.length;
var i__12014__auto___12631 = (0);
while(true){
if((i__12014__auto___12631 < len__12013__auto___12630)){
args__12020__auto__.push((arguments[i__12014__auto___12631]));

var G__12632 = (i__12014__auto___12631 + (1));
i__12014__auto___12631 = G__12632;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12629))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12629),args);
});})(g__12163__auto___12629))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__12163__auto___12629){
return (function (seq12583){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12583));
});})(g__12163__auto___12629))
;


var g__12163__auto___12633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__12163__auto___12633){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12634 = arguments.length;
var i__12014__auto___12635 = (0);
while(true){
if((i__12014__auto___12635 < len__12013__auto___12634)){
args__12020__auto__.push((arguments[i__12014__auto___12635]));

var G__12636 = (i__12014__auto___12635 + (1));
i__12014__auto___12635 = G__12636;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12633))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12633),args);
});})(g__12163__auto___12633))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__12163__auto___12633){
return (function (seq12584){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12584));
});})(g__12163__auto___12633))
;


var g__12163__auto___12637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__12163__auto___12637){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12638 = arguments.length;
var i__12014__auto___12639 = (0);
while(true){
if((i__12014__auto___12639 < len__12013__auto___12638)){
args__12020__auto__.push((arguments[i__12014__auto___12639]));

var G__12640 = (i__12014__auto___12639 + (1));
i__12014__auto___12639 = G__12640;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12637))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12637),args);
});})(g__12163__auto___12637))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__12163__auto___12637){
return (function (seq12585){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12585));
});})(g__12163__auto___12637))
;


var g__12163__auto___12641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__12163__auto___12641){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12642 = arguments.length;
var i__12014__auto___12643 = (0);
while(true){
if((i__12014__auto___12643 < len__12013__auto___12642)){
args__12020__auto__.push((arguments[i__12014__auto___12643]));

var G__12644 = (i__12014__auto___12643 + (1));
i__12014__auto___12643 = G__12644;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12641))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12641),args);
});})(g__12163__auto___12641))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__12163__auto___12641){
return (function (seq12586){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12586));
});})(g__12163__auto___12641))
;


var g__12163__auto___12645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__12163__auto___12645){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12646 = arguments.length;
var i__12014__auto___12647 = (0);
while(true){
if((i__12014__auto___12647 < len__12013__auto___12646)){
args__12020__auto__.push((arguments[i__12014__auto___12647]));

var G__12648 = (i__12014__auto___12647 + (1));
i__12014__auto___12647 = G__12648;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12645))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12645),args);
});})(g__12163__auto___12645))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__12163__auto___12645){
return (function (seq12587){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12587));
});})(g__12163__auto___12645))
;


var g__12163__auto___12649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__12163__auto___12649){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12650 = arguments.length;
var i__12014__auto___12651 = (0);
while(true){
if((i__12014__auto___12651 < len__12013__auto___12650)){
args__12020__auto__.push((arguments[i__12014__auto___12651]));

var G__12652 = (i__12014__auto___12651 + (1));
i__12014__auto___12651 = G__12652;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12649))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12649),args);
});})(g__12163__auto___12649))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__12163__auto___12649){
return (function (seq12588){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12588));
});})(g__12163__auto___12649))
;


var g__12163__auto___12653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__12163__auto___12653){
return (function cljs$spec$gen$alpha$return(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12654 = arguments.length;
var i__12014__auto___12655 = (0);
while(true){
if((i__12014__auto___12655 < len__12013__auto___12654)){
args__12020__auto__.push((arguments[i__12014__auto___12655]));

var G__12656 = (i__12014__auto___12655 + (1));
i__12014__auto___12655 = G__12656;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12653))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12653),args);
});})(g__12163__auto___12653))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__12163__auto___12653){
return (function (seq12589){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12589));
});})(g__12163__auto___12653))
;


var g__12163__auto___12657 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__12163__auto___12657){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12658 = arguments.length;
var i__12014__auto___12659 = (0);
while(true){
if((i__12014__auto___12659 < len__12013__auto___12658)){
args__12020__auto__.push((arguments[i__12014__auto___12659]));

var G__12660 = (i__12014__auto___12659 + (1));
i__12014__auto___12659 = G__12660;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12657))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12657),args);
});})(g__12163__auto___12657))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12163__auto___12657){
return (function (seq12590){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12590));
});})(g__12163__auto___12657))
;


var g__12163__auto___12661 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__12163__auto___12661){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12662 = arguments.length;
var i__12014__auto___12663 = (0);
while(true){
if((i__12014__auto___12663 < len__12013__auto___12662)){
args__12020__auto__.push((arguments[i__12014__auto___12663]));

var G__12664 = (i__12014__auto___12663 + (1));
i__12014__auto___12663 = G__12664;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12661))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12661),args);
});})(g__12163__auto___12661))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__12163__auto___12661){
return (function (seq12591){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12591));
});})(g__12163__auto___12661))
;


var g__12163__auto___12665 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__12163__auto___12665){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12666 = arguments.length;
var i__12014__auto___12667 = (0);
while(true){
if((i__12014__auto___12667 < len__12013__auto___12666)){
args__12020__auto__.push((arguments[i__12014__auto___12667]));

var G__12668 = (i__12014__auto___12667 + (1));
i__12014__auto___12667 = G__12668;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12163__auto___12665))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12163__auto___12665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12163__auto___12665),args);
});})(g__12163__auto___12665))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__12163__auto___12665){
return (function (seq12592){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12592));
});})(g__12163__auto___12665))
;

var g__12176__auto___12690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__12176__auto___12690){
return (function cljs$spec$gen$alpha$any(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12691 = arguments.length;
var i__12014__auto___12692 = (0);
while(true){
if((i__12014__auto___12692 < len__12013__auto___12691)){
args__12020__auto__.push((arguments[i__12014__auto___12692]));

var G__12693 = (i__12014__auto___12692 + (1));
i__12014__auto___12692 = G__12693;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12690))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12690){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12690);
});})(g__12176__auto___12690))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__12176__auto___12690){
return (function (seq12669){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12669));
});})(g__12176__auto___12690))
;


var g__12176__auto___12694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__12176__auto___12694){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12695 = arguments.length;
var i__12014__auto___12696 = (0);
while(true){
if((i__12014__auto___12696 < len__12013__auto___12695)){
args__12020__auto__.push((arguments[i__12014__auto___12696]));

var G__12697 = (i__12014__auto___12696 + (1));
i__12014__auto___12696 = G__12697;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12694))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12694){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12694);
});})(g__12176__auto___12694))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__12176__auto___12694){
return (function (seq12670){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12670));
});})(g__12176__auto___12694))
;


var g__12176__auto___12698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__12176__auto___12698){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12699 = arguments.length;
var i__12014__auto___12700 = (0);
while(true){
if((i__12014__auto___12700 < len__12013__auto___12699)){
args__12020__auto__.push((arguments[i__12014__auto___12700]));

var G__12701 = (i__12014__auto___12700 + (1));
i__12014__auto___12700 = G__12701;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12698))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12698){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12698);
});})(g__12176__auto___12698))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__12176__auto___12698){
return (function (seq12671){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12671));
});})(g__12176__auto___12698))
;


var g__12176__auto___12702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__12176__auto___12702){
return (function cljs$spec$gen$alpha$char(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12703 = arguments.length;
var i__12014__auto___12704 = (0);
while(true){
if((i__12014__auto___12704 < len__12013__auto___12703)){
args__12020__auto__.push((arguments[i__12014__auto___12704]));

var G__12705 = (i__12014__auto___12704 + (1));
i__12014__auto___12704 = G__12705;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12702))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12702){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12702);
});})(g__12176__auto___12702))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__12176__auto___12702){
return (function (seq12672){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12672));
});})(g__12176__auto___12702))
;


var g__12176__auto___12706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__12176__auto___12706){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12707 = arguments.length;
var i__12014__auto___12708 = (0);
while(true){
if((i__12014__auto___12708 < len__12013__auto___12707)){
args__12020__auto__.push((arguments[i__12014__auto___12708]));

var G__12709 = (i__12014__auto___12708 + (1));
i__12014__auto___12708 = G__12709;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12706))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12706){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12706);
});})(g__12176__auto___12706))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__12176__auto___12706){
return (function (seq12673){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12673));
});})(g__12176__auto___12706))
;


var g__12176__auto___12710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__12176__auto___12710){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12711 = arguments.length;
var i__12014__auto___12712 = (0);
while(true){
if((i__12014__auto___12712 < len__12013__auto___12711)){
args__12020__auto__.push((arguments[i__12014__auto___12712]));

var G__12713 = (i__12014__auto___12712 + (1));
i__12014__auto___12712 = G__12713;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12710))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12710){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12710);
});})(g__12176__auto___12710))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__12176__auto___12710){
return (function (seq12674){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12674));
});})(g__12176__auto___12710))
;


var g__12176__auto___12714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__12176__auto___12714){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12715 = arguments.length;
var i__12014__auto___12716 = (0);
while(true){
if((i__12014__auto___12716 < len__12013__auto___12715)){
args__12020__auto__.push((arguments[i__12014__auto___12716]));

var G__12717 = (i__12014__auto___12716 + (1));
i__12014__auto___12716 = G__12717;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12714))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12714){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12714);
});})(g__12176__auto___12714))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__12176__auto___12714){
return (function (seq12675){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12675));
});})(g__12176__auto___12714))
;


var g__12176__auto___12718 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__12176__auto___12718){
return (function cljs$spec$gen$alpha$double(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12719 = arguments.length;
var i__12014__auto___12720 = (0);
while(true){
if((i__12014__auto___12720 < len__12013__auto___12719)){
args__12020__auto__.push((arguments[i__12014__auto___12720]));

var G__12721 = (i__12014__auto___12720 + (1));
i__12014__auto___12720 = G__12721;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12718))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12718){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12718);
});})(g__12176__auto___12718))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__12176__auto___12718){
return (function (seq12676){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12676));
});})(g__12176__auto___12718))
;


var g__12176__auto___12722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__12176__auto___12722){
return (function cljs$spec$gen$alpha$int(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12723 = arguments.length;
var i__12014__auto___12724 = (0);
while(true){
if((i__12014__auto___12724 < len__12013__auto___12723)){
args__12020__auto__.push((arguments[i__12014__auto___12724]));

var G__12725 = (i__12014__auto___12724 + (1));
i__12014__auto___12724 = G__12725;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12722))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12722){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12722);
});})(g__12176__auto___12722))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__12176__auto___12722){
return (function (seq12677){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12677));
});})(g__12176__auto___12722))
;


var g__12176__auto___12726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__12176__auto___12726){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12727 = arguments.length;
var i__12014__auto___12728 = (0);
while(true){
if((i__12014__auto___12728 < len__12013__auto___12727)){
args__12020__auto__.push((arguments[i__12014__auto___12728]));

var G__12729 = (i__12014__auto___12728 + (1));
i__12014__auto___12728 = G__12729;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12726))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12726){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12726);
});})(g__12176__auto___12726))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__12176__auto___12726){
return (function (seq12678){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12678));
});})(g__12176__auto___12726))
;


var g__12176__auto___12730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__12176__auto___12730){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12731 = arguments.length;
var i__12014__auto___12732 = (0);
while(true){
if((i__12014__auto___12732 < len__12013__auto___12731)){
args__12020__auto__.push((arguments[i__12014__auto___12732]));

var G__12733 = (i__12014__auto___12732 + (1));
i__12014__auto___12732 = G__12733;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12730))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12730){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12730);
});})(g__12176__auto___12730))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__12176__auto___12730){
return (function (seq12679){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12679));
});})(g__12176__auto___12730))
;


var g__12176__auto___12734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__12176__auto___12734){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12735 = arguments.length;
var i__12014__auto___12736 = (0);
while(true){
if((i__12014__auto___12736 < len__12013__auto___12735)){
args__12020__auto__.push((arguments[i__12014__auto___12736]));

var G__12737 = (i__12014__auto___12736 + (1));
i__12014__auto___12736 = G__12737;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12734))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12734){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12734);
});})(g__12176__auto___12734))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__12176__auto___12734){
return (function (seq12680){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12680));
});})(g__12176__auto___12734))
;


var g__12176__auto___12738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__12176__auto___12738){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12739 = arguments.length;
var i__12014__auto___12740 = (0);
while(true){
if((i__12014__auto___12740 < len__12013__auto___12739)){
args__12020__auto__.push((arguments[i__12014__auto___12740]));

var G__12741 = (i__12014__auto___12740 + (1));
i__12014__auto___12740 = G__12741;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12738))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12738){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12738);
});})(g__12176__auto___12738))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__12176__auto___12738){
return (function (seq12681){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12681));
});})(g__12176__auto___12738))
;


var g__12176__auto___12742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__12176__auto___12742){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12743 = arguments.length;
var i__12014__auto___12744 = (0);
while(true){
if((i__12014__auto___12744 < len__12013__auto___12743)){
args__12020__auto__.push((arguments[i__12014__auto___12744]));

var G__12745 = (i__12014__auto___12744 + (1));
i__12014__auto___12744 = G__12745;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12742))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12742){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12742);
});})(g__12176__auto___12742))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__12176__auto___12742){
return (function (seq12682){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12682));
});})(g__12176__auto___12742))
;


var g__12176__auto___12746 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__12176__auto___12746){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12747 = arguments.length;
var i__12014__auto___12748 = (0);
while(true){
if((i__12014__auto___12748 < len__12013__auto___12747)){
args__12020__auto__.push((arguments[i__12014__auto___12748]));

var G__12749 = (i__12014__auto___12748 + (1));
i__12014__auto___12748 = G__12749;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12746))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12746){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12746);
});})(g__12176__auto___12746))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__12176__auto___12746){
return (function (seq12683){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12683));
});})(g__12176__auto___12746))
;


var g__12176__auto___12750 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__12176__auto___12750){
return (function cljs$spec$gen$alpha$string(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12751 = arguments.length;
var i__12014__auto___12752 = (0);
while(true){
if((i__12014__auto___12752 < len__12013__auto___12751)){
args__12020__auto__.push((arguments[i__12014__auto___12752]));

var G__12753 = (i__12014__auto___12752 + (1));
i__12014__auto___12752 = G__12753;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12750))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12750){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12750);
});})(g__12176__auto___12750))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__12176__auto___12750){
return (function (seq12684){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12684));
});})(g__12176__auto___12750))
;


var g__12176__auto___12754 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__12176__auto___12754){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12755 = arguments.length;
var i__12014__auto___12756 = (0);
while(true){
if((i__12014__auto___12756 < len__12013__auto___12755)){
args__12020__auto__.push((arguments[i__12014__auto___12756]));

var G__12757 = (i__12014__auto___12756 + (1));
i__12014__auto___12756 = G__12757;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12754))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12754){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12754);
});})(g__12176__auto___12754))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__12176__auto___12754){
return (function (seq12685){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12685));
});})(g__12176__auto___12754))
;


var g__12176__auto___12758 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__12176__auto___12758){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12759 = arguments.length;
var i__12014__auto___12760 = (0);
while(true){
if((i__12014__auto___12760 < len__12013__auto___12759)){
args__12020__auto__.push((arguments[i__12014__auto___12760]));

var G__12761 = (i__12014__auto___12760 + (1));
i__12014__auto___12760 = G__12761;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12758))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12758){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12758);
});})(g__12176__auto___12758))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__12176__auto___12758){
return (function (seq12686){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12686));
});})(g__12176__auto___12758))
;


var g__12176__auto___12762 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__12176__auto___12762){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12763 = arguments.length;
var i__12014__auto___12764 = (0);
while(true){
if((i__12014__auto___12764 < len__12013__auto___12763)){
args__12020__auto__.push((arguments[i__12014__auto___12764]));

var G__12765 = (i__12014__auto___12764 + (1));
i__12014__auto___12764 = G__12765;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12762))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12762){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12762);
});})(g__12176__auto___12762))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__12176__auto___12762){
return (function (seq12687){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12687));
});})(g__12176__auto___12762))
;


var g__12176__auto___12766 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__12176__auto___12766){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12767 = arguments.length;
var i__12014__auto___12768 = (0);
while(true){
if((i__12014__auto___12768 < len__12013__auto___12767)){
args__12020__auto__.push((arguments[i__12014__auto___12768]));

var G__12769 = (i__12014__auto___12768 + (1));
i__12014__auto___12768 = G__12769;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12766))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12766){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12766);
});})(g__12176__auto___12766))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__12176__auto___12766){
return (function (seq12688){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12688));
});})(g__12176__auto___12766))
;


var g__12176__auto___12770 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__12176__auto___12770){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12771 = arguments.length;
var i__12014__auto___12772 = (0);
while(true){
if((i__12014__auto___12772 < len__12013__auto___12771)){
args__12020__auto__.push((arguments[i__12014__auto___12772]));

var G__12773 = (i__12014__auto___12772 + (1));
i__12014__auto___12772 = G__12773;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});})(g__12176__auto___12770))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12176__auto___12770){
return (function (args){
return cljs.core.deref.call(null,g__12176__auto___12770);
});})(g__12176__auto___12770))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__12176__auto___12770){
return (function (seq12689){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12689));
});})(g__12176__auto___12770))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__12020__auto__ = [];
var len__12013__auto___12776 = arguments.length;
var i__12014__auto___12777 = (0);
while(true){
if((i__12014__auto___12777 < len__12013__auto___12776)){
args__12020__auto__.push((arguments[i__12014__auto___12777]));

var G__12778 = (i__12014__auto___12777 + (1));
i__12014__auto___12777 = G__12778;
continue;
} else {
}
break;
}

var argseq__12021__auto__ = ((((0) < args__12020__auto__.length))?(new cljs.core.IndexedSeq(args__12020__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__12021__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__12774_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12774_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq12775){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12775));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__12779_SHARP_){
return (new Date(p1__12779_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
