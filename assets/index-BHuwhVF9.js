(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function s(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=s(f);fetch(f.href,p)}})();function fp(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var kc={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function Jg(){if(Rh)return vi;Rh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(c,f,p){var b=null;if(p!==void 0&&(b=""+p),f.key!==void 0&&(b=""+f.key),"key"in f){p={};for(var C in f)C!=="key"&&(p[C]=f[C])}else p=f;return f=p.ref,{$$typeof:l,type:c,key:b,ref:f!==void 0?f:null,props:p}}return vi.Fragment=u,vi.jsx=s,vi.jsxs=s,vi}var _h;function Fg(){return _h||(_h=1,kc.exports=Jg()),kc.exports}var o=Fg(),Gc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Wg(){if(Dh)return re;Dh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=_&&x[_]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,X={};function G(x,q,L){this.props=x,this.context=q,this.refs=X,this.updater=L||B}G.prototype.isReactComponent={},G.prototype.setState=function(x,q){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,q,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Q(){}Q.prototype=G.prototype;function H(x,q,L){this.props=x,this.context=q,this.refs=X,this.updater=L||B}var Z=H.prototype=new Q;Z.constructor=H,k(Z,G.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ie=Object.prototype.hasOwnProperty;function W(x,q,L,V,P,de){return L=de.ref,{$$typeof:l,type:x,key:q,ref:L!==void 0?L:null,props:de}}function Oe(x,q){return W(x.type,q,void 0,void 0,void 0,x.props)}function Ce(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function ct(x){var q={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return q[L]})}var dt=/\/+/g;function Qe(x,q){return typeof x=="object"&&x!==null&&x.key!=null?ct(""+x.key):q.toString(36)}function Pt(){}function It(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Pt,Pt):(x.status="pending",x.then(function(q){x.status==="pending"&&(x.status="fulfilled",x.value=q)},function(q){x.status==="pending"&&(x.status="rejected",x.reason=q)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Xe(x,q,L,V,P){var de=typeof x;(de==="undefined"||de==="boolean")&&(x=null);var te=!1;if(x===null)te=!0;else switch(de){case"bigint":case"string":case"number":te=!0;break;case"object":switch(x.$$typeof){case l:case u:te=!0;break;case w:return te=x._init,Xe(te(x._payload),q,L,V,P)}}if(te)return P=P(x),te=V===""?"."+Qe(x,0):V,le(P)?(L="",te!=null&&(L=te.replace(dt,"$&/")+"/"),Xe(P,q,L,"",function(it){return it})):P!=null&&(Ce(P)&&(P=Oe(P,L+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(dt,"$&/")+"/")+te)),q.push(P)),1;te=0;var Ze=V===""?".":V+":";if(le(x))for(var be=0;be<x.length;be++)V=x[be],de=Ze+Qe(V,be),te+=Xe(V,q,L,de,P);else if(be=U(x),typeof be=="function")for(x=be.call(x),be=0;!(V=x.next()).done;)V=V.value,de=Ze+Qe(V,be++),te+=Xe(V,q,L,de,P);else if(de==="object"){if(typeof x.then=="function")return Xe(It(x),q,L,V,P);throw q=String(x),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return te}function D(x,q,L){if(x==null)return x;var V=[],P=0;return Xe(x,V,"","",function(de){return q.call(L,de,P++)}),V}function Y(x){if(x._status===-1){var q=x._result;q=q(),q.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=q)}if(x._status===1)return x._result.default;throw x._result}var I=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return re.Children={map:D,forEach:function(x,q,L){D(x,function(){q.apply(this,arguments)},L)},count:function(x){var q=0;return D(x,function(){q++}),q},toArray:function(x){return D(x,function(q){return q})||[]},only:function(x){if(!Ce(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},re.Component=G,re.Fragment=s,re.Profiler=f,re.PureComponent=H,re.StrictMode=c,re.Suspense=y,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,re.__COMPILER_RUNTIME={__proto__:null,c:function(x){return K.H.useMemoCache(x)}},re.cache=function(x){return function(){return x.apply(null,arguments)}},re.cloneElement=function(x,q,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=k({},x.props),P=x.key,de=void 0;if(q!=null)for(te in q.ref!==void 0&&(de=void 0),q.key!==void 0&&(P=""+q.key),q)!ie.call(q,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&q.ref===void 0||(V[te]=q[te]);var te=arguments.length-2;if(te===1)V.children=L;else if(1<te){for(var Ze=Array(te),be=0;be<te;be++)Ze[be]=arguments[be+2];V.children=Ze}return W(x.type,P,void 0,void 0,de,V)},re.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},re.createElement=function(x,q,L){var V,P={},de=null;if(q!=null)for(V in q.key!==void 0&&(de=""+q.key),q)ie.call(q,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(P[V]=q[V]);var te=arguments.length-2;if(te===1)P.children=L;else if(1<te){for(var Ze=Array(te),be=0;be<te;be++)Ze[be]=arguments[be+2];P.children=Ze}if(x&&x.defaultProps)for(V in te=x.defaultProps,te)P[V]===void 0&&(P[V]=te[V]);return W(x,de,void 0,void 0,null,P)},re.createRef=function(){return{current:null}},re.forwardRef=function(x){return{$$typeof:C,render:x}},re.isValidElement=Ce,re.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Y}},re.memo=function(x,q){return{$$typeof:g,type:x,compare:q===void 0?null:q}},re.startTransition=function(x){var q=K.T,L={};K.T=L;try{var V=x(),P=K.S;P!==null&&P(L,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(se,I)}catch(de){I(de)}finally{K.T=q}},re.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},re.use=function(x){return K.H.use(x)},re.useActionState=function(x,q,L){return K.H.useActionState(x,q,L)},re.useCallback=function(x,q){return K.H.useCallback(x,q)},re.useContext=function(x){return K.H.useContext(x)},re.useDebugValue=function(){},re.useDeferredValue=function(x,q){return K.H.useDeferredValue(x,q)},re.useEffect=function(x,q,L){var V=K.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,q)},re.useId=function(){return K.H.useId()},re.useImperativeHandle=function(x,q,L){return K.H.useImperativeHandle(x,q,L)},re.useInsertionEffect=function(x,q){return K.H.useInsertionEffect(x,q)},re.useLayoutEffect=function(x,q){return K.H.useLayoutEffect(x,q)},re.useMemo=function(x,q){return K.H.useMemo(x,q)},re.useOptimistic=function(x,q){return K.H.useOptimistic(x,q)},re.useReducer=function(x,q,L){return K.H.useReducer(x,q,L)},re.useRef=function(x){return K.H.useRef(x)},re.useState=function(x){return K.H.useState(x)},re.useSyncExternalStore=function(x,q,L){return K.H.useSyncExternalStore(x,q,L)},re.useTransition=function(){return K.H.useTransition()},re.version="19.1.1",re}var Mh;function ys(){return Mh||(Mh=1,Gc.exports=Wg()),Gc.exports}var R=ys();const Ye=fp(R);var Lc={exports:{}},bi={},Yc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Pg(){return $h||($h=1,(function(l){function u(D,Y){var I=D.length;D.push(Y);e:for(;0<I;){var se=I-1>>>1,x=D[se];if(0<f(x,Y))D[se]=Y,D[I]=x,I=se;else break e}}function s(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var Y=D[0],I=D.pop();if(I!==Y){D[0]=I;e:for(var se=0,x=D.length,q=x>>>1;se<q;){var L=2*(se+1)-1,V=D[L],P=L+1,de=D[P];if(0>f(V,I))P<x&&0>f(de,V)?(D[se]=de,D[P]=I,se=P):(D[se]=V,D[L]=I,se=L);else if(P<x&&0>f(de,I))D[se]=de,D[P]=I,se=P;else break e}}return Y}function f(D,Y){var I=D.sortIndex-Y.sortIndex;return I!==0?I:D.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var b=Date,C=b.now();l.unstable_now=function(){return b.now()-C}}var y=[],g=[],w=1,_=null,U=3,B=!1,k=!1,X=!1,G=!1,Q=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function le(D){for(var Y=s(g);Y!==null;){if(Y.callback===null)c(g);else if(Y.startTime<=D)c(g),Y.sortIndex=Y.expirationTime,u(y,Y);else break;Y=s(g)}}function K(D){if(X=!1,le(D),!k)if(s(y)!==null)k=!0,ie||(ie=!0,Qe());else{var Y=s(g);Y!==null&&Xe(K,Y.startTime-D)}}var ie=!1,W=-1,Oe=5,Ce=-1;function ct(){return G?!0:!(l.unstable_now()-Ce<Oe)}function dt(){if(G=!1,ie){var D=l.unstable_now();Ce=D;var Y=!0;try{e:{k=!1,X&&(X=!1,H(W),W=-1),B=!0;var I=U;try{t:{for(le(D),_=s(y);_!==null&&!(_.expirationTime>D&&ct());){var se=_.callback;if(typeof se=="function"){_.callback=null,U=_.priorityLevel;var x=se(_.expirationTime<=D);if(D=l.unstable_now(),typeof x=="function"){_.callback=x,le(D),Y=!0;break t}_===s(y)&&c(y),le(D)}else c(y);_=s(y)}if(_!==null)Y=!0;else{var q=s(g);q!==null&&Xe(K,q.startTime-D),Y=!1}}break e}finally{_=null,U=I,B=!1}Y=void 0}}finally{Y?Qe():ie=!1}}}var Qe;if(typeof Z=="function")Qe=function(){Z(dt)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,It=Pt.port2;Pt.port1.onmessage=dt,Qe=function(){It.postMessage(null)}}else Qe=function(){Q(dt,0)};function Xe(D,Y){W=Q(function(){D(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return U},l.unstable_next=function(D){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var I=U;U=Y;try{return D()}finally{U=I}},l.unstable_requestPaint=function(){G=!0},l.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=U;U=D;try{return Y()}finally{U=I}},l.unstable_scheduleCallback=function(D,Y,I){var se=l.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,D){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=I+x,D={id:w++,callback:Y,priorityLevel:D,startTime:I,expirationTime:x,sortIndex:-1},I>se?(D.sortIndex=I,u(g,D),s(y)===null&&D===s(g)&&(X?(H(W),W=-1):X=!0,Xe(K,I-se))):(D.sortIndex=x,u(y,D),k||B||(k=!0,ie||(ie=!0,Qe()))),D},l.unstable_shouldYield=ct,l.unstable_wrapCallback=function(D){var Y=U;return function(){var I=U;U=Y;try{return D.apply(this,arguments)}finally{U=I}}}})(Vc)),Vc}var Nh;function Ig(){return Nh||(Nh=1,Yc.exports=Pg()),Yc.exports}var Qc={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function ev(){if(qh)return ut;qh=1;var l=ys();function u(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(y,g,w){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:_==null?null:""+_,children:y,containerInfo:g,implementation:w}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ut.createPortal=function(y,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return p(y,g,null,w)},ut.flushSync=function(y){var g=b.T,w=c.p;try{if(b.T=null,c.p=2,y)return y()}finally{b.T=g,c.p=w,c.d.f()}},ut.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(y,g))},ut.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},ut.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var w=g.as,_=C(w,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?c.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:U,fetchPriority:B}):w==="script"&&c.d.X(y,{crossOrigin:_,integrity:U,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ut.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=C(g.as,g.crossOrigin);c.d.M(y,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(y)},ut.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,_=C(w,g.crossOrigin);c.d.L(y,w,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ut.preloadModule=function(y,g){if(typeof y=="string")if(g){var w=C(g.as,g.crossOrigin);c.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(y)},ut.requestFormReset=function(y){c.d.r(y)},ut.unstable_batchedUpdates=function(y,g){return y(g)},ut.useFormState=function(y,g,w){return b.H.useFormState(y,g,w)},ut.useFormStatus=function(){return b.H.useHostTransitionStatus()},ut.version="19.1.1",ut}var Uh;function tv(){if(Uh)return Qc.exports;Uh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Qc.exports=ev(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function av(){if(Bh)return bi;Bh=1;var l=Ig(),u=ys(),s=tv();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(p(e)!==e)throw Error(c(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return C(i),e;if(r===n)return C(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var d=!1,m=i.child;m;){if(m===a){d=!0,a=i,n=r;break}if(m===n){d=!0,n=i,a=r;break}m=m.sibling}if(!d){for(m=r.child;m;){if(m===a){d=!0,a=r,n=i;break}if(m===n){d=!0,n=r,a=i;break}m=m.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,_=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var Pt=Symbol.for("react.client.reference");function It(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case G:return"Profiler";case X:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList";case Ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:It(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return It(e(t))}catch{}}return null}var Xe=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],x=-1;function q(e){return{current:e}}function L(e){0>x||(e.current=se[x],se[x]=null,x--)}function V(e,t){x++,se[x]=e.current,e.current=t}var P=q(null),de=q(null),te=q(null),Ze=q(null);function be(e,t){switch(V(te,t),V(de,e),V(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lh(t),e=ih(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(P),V(P,e)}function it(){L(P),L(de),L(te)}function Ka(e){e.memoizedState!==null&&V(Ze,e);var t=P.current,a=ih(t,e.type);t!==a&&(V(de,e),V(P,a))}function ea(e){de.current===e&&(L(P),L(de)),Ze.current===e&&(L(Ze),fi._currentValue=I)}var Tt=Object.prototype.hasOwnProperty,To=l.unstable_scheduleCallback,zo=l.unstable_cancelCallback,T1=l.unstable_shouldYield,z1=l.unstable_requestPaint,Vt=l.unstable_now,O1=l.unstable_getCurrentPriorityLevel,Us=l.unstable_ImmediatePriority,Bs=l.unstable_UserBlockingPriority,Ti=l.unstable_NormalPriority,R1=l.unstable_LowPriority,Hs=l.unstable_IdlePriority,_1=l.log,D1=l.unstable_setDisableYieldValue,xl=null,vt=null;function ja(e){if(typeof _1=="function"&&D1(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(xl,e)}catch{}}var bt=Math.clz32?Math.clz32:N1,M1=Math.log,$1=Math.LN2;function N1(e){return e>>>=0,e===0?32:31-(M1(e)/$1|0)|0}var zi=256,Oi=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ri(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~r,n!==0?i=Ja(n):(d&=m,d!==0?i=Ja(d):a||(a=m&~e,a!==0&&(i=Ja(a))))):(m=n&~r,m!==0?i=Ja(m):d!==0?i=Ja(d):a||(a=n&~e,a!==0&&(i=Ja(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Sl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function q1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ks(){var e=zi;return zi<<=1,(zi&4194048)===0&&(zi=256),e}function Gs(){var e=Oi;return Oi<<=1,(Oi&62914560)===0&&(Oi=4194304),e}function Oo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function jl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function U1(e,t,a,n,i,r){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,T=e.hiddenUpdates;for(a=d&~a;0<a;){var M=31-bt(a),N=1<<M;m[M]=0,v[M]=-1;var z=T[M];if(z!==null)for(T[M]=null,M=0;M<z.length;M++){var O=z[M];O!==null&&(O.lane&=-536870913)}a&=~N}n!==0&&Ls(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(d&~t))}function Ls(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-bt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Ys(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-bt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Ro(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Ah(e.type))}function B1(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var wa=Math.random().toString(36).slice(2),rt="__reactFiber$"+wa,ft="__reactProps$"+wa,yn="__reactContainer$"+wa,Do="__reactEvents$"+wa,H1="__reactListeners$"+wa,k1="__reactHandles$"+wa,Qs="__reactResources$"+wa,wl="__reactMarker$"+wa;function Mo(e){delete e[rt],delete e[ft],delete e[Do],delete e[H1],delete e[k1]}function xn(e){var t=e[rt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yn]||a[rt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ch(e);e!==null;){if(a=e[rt])return a;e=ch(e)}return t}e=a,a=e.parentNode}return null}function Sn(e){if(e=e[rt]||e[yn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function jn(e){var t=e[Qs];return t||(t=e[Qs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[wl]=!0}var Xs=new Set,Zs={};function Fa(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(Zs[e]=t,e=0;e<t.length;e++)Xs.add(t[e])}var G1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ks={},Js={};function L1(e){return Tt.call(Js,e)?!0:Tt.call(Ks,e)?!1:G1.test(e)?Js[e]=!0:(Ks[e]=!0,!1)}function _i(e,t,a){if(L1(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Di(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ta(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var $o,Fs;function An(e){if($o===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||"",Fs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$o+e+Fs}var No=!1;function qo(e,t){if(!e||No)return"";No=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(O){var z=O}Reflect.construct(e,[],N)}else{try{N.call()}catch(O){z=O}e.call(N.prototype)}}else{try{throw Error()}catch(O){z=O}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(O){if(O&&z&&typeof O.stack=="string")return[O.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),d=r[0],m=r[1];if(d&&m){var v=d.split(`
`),T=m.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===T.length)for(n=v.length-1,i=T.length-1;1<=n&&0<=i&&v[n]!==T[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==T[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==T[i]){var M=`
`+v[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=i);break}}}finally{No=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?An(a):""}function Y1(e){switch(e.tag){case 26:case 27:case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 15:return qo(e.type,!1);case 11:return qo(e.type.render,!1);case 1:return qo(e.type,!0);case 31:return An("Activity");default:return""}}function Ws(e){try{var t="";do t+=Y1(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V1(e){var t=Ps(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,r.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=V1(e))}function Is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ps(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Q1=/[\n"\\]/g;function Ot(e){return e.replace(Q1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uo(e,t,a,n,i,r,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Bo(e,d,zt(t)):a!=null?Bo(e,d,zt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+zt(m):e.removeAttribute("name")}function ed(e,t,a,n,i,r,d,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+zt(a):"",t=t!=null?""+zt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Bo(e,t,a){t==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Cn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function td(e,t,a){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+zt(a):""}function ad(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Xe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=zt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function En(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var X1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||X1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ld(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&nd(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&nd(e,r,t[r])}function Ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(e){return K1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ko=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tn=null,zn=null;function id(e){var t=Sn(e);if(t&&(e=t.stateNode)){var a=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Uo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ft]||null;if(!i)throw Error(c(90));Uo(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Is(n)}break e;case"textarea":td(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Cn(e,!!a.multiple,t,!1)}}}var Lo=!1;function rd(e,t,a){if(Lo)return e(t,a);Lo=!0;try{var n=e(t);return n}finally{if(Lo=!1,(Tn!==null||zn!==null)&&(xr(),Tn&&(t=Tn,e=zn,zn=Tn=null,id(t),e)))for(t=0;t<e.length;t++)id(e[t])}}function Cl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ft]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(aa)try{var El={};Object.defineProperty(El,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",El,El),window.removeEventListener("test",El,El)}catch{Yo=!1}var Aa=null,Vo=null,qi=null;function od(){if(qi)return qi;var e,t=Vo,a=t.length,n,i="value"in Aa?Aa.value:Aa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[r-n];n++);return qi=i.slice(e,1<n?1-n:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function ud(){return!1}function mt(e){function t(a,n,i,r,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Bi:ud,this.isPropagationStopped=ud,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=mt(Wa),Tl=w({},Wa,{view:0,detail:0}),J1=mt(Tl),Qo,Xo,zl,ki=w({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Qo=e.screenX-zl.screenX,Xo=e.screenY-zl.screenY):Xo=Qo=0,zl=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),cd=mt(ki),F1=w({},ki,{dataTransfer:0}),W1=mt(F1),P1=w({},Tl,{relatedTarget:0}),Zo=mt(P1),I1=w({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),e0=mt(I1),t0=w({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a0=mt(t0),n0=w({},Wa,{data:0}),sd=mt(n0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r0[e])?!!t[e]:!1}function Ko(){return o0}var u0=w({},Tl,{key:function(e){if(e.key){var t=l0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ko,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c0=mt(u0),s0=w({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=mt(s0),d0=w({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ko}),f0=mt(d0),m0=w({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=mt(m0),p0=w({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g0=mt(p0),v0=w({},Wa,{newState:0,oldState:0}),b0=mt(v0),y0=[9,13,27,32],Jo=aa&&"CompositionEvent"in window,Ol=null;aa&&"documentMode"in document&&(Ol=document.documentMode);var x0=aa&&"TextEvent"in window&&!Ol,fd=aa&&(!Jo||Ol&&8<Ol&&11>=Ol),md=" ",hd=!1;function pd(e,t){switch(e){case"keyup":return y0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function S0(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(hd=!0,md);case"textInput":return e=t.data,e===md&&hd?null:e;default:return null}}function j0(e,t){if(On)return e==="compositionend"||!Jo&&pd(e,t)?(e=od(),qi=Vo=Aa=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fd&&t.locale!=="ko"?null:t.data;default:return null}}var w0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w0[e.type]:t==="textarea"}function bd(e,t,a,n){Tn?zn?zn.push(n):zn=[n]:Tn=n,t=Er(t,"onChange"),0<t.length&&(a=new Hi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Rl=null,_l=null;function A0(e){Im(e,0)}function Gi(e){var t=Al(e);if(Is(t))return e}function yd(e,t){if(e==="change")return t}var xd=!1;if(aa){var Fo;if(aa){var Wo="oninput"in document;if(!Wo){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Wo=typeof Sd.oninput=="function"}Fo=Wo}else Fo=!1;xd=Fo&&(!document.documentMode||9<document.documentMode)}function jd(){Rl&&(Rl.detachEvent("onpropertychange",wd),_l=Rl=null)}function wd(e){if(e.propertyName==="value"&&Gi(_l)){var t=[];bd(t,_l,e,Go(e)),rd(A0,t)}}function C0(e,t,a){e==="focusin"?(jd(),Rl=t,_l=a,Rl.attachEvent("onpropertychange",wd)):e==="focusout"&&jd()}function E0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(_l)}function T0(e,t){if(e==="click")return Gi(t)}function z0(e,t){if(e==="input"||e==="change")return Gi(t)}function O0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:O0;function Dl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Tt.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cd(e,t){var a=Ad(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ad(a)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Td(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$i(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$i(e.document)}return t}function Po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var R0=aa&&"documentMode"in document&&11>=document.documentMode,Rn=null,Io=null,Ml=null,eu=!1;function zd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Rn==null||Rn!==$i(n)||(n=Rn,"selectionStart"in n&&Po(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ml&&Dl(Ml,n)||(Ml=n,n=Er(Io,"onSelect"),0<n.length&&(t=new Hi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Rn)))}function Pa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var _n={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},tu={},Od={};aa&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Ia(e){if(tu[e])return tu[e];if(!_n[e])return e;var t=_n[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Od)return tu[e]=t[a];return e}var Rd=Ia("animationend"),_d=Ia("animationiteration"),Dd=Ia("animationstart"),_0=Ia("transitionrun"),D0=Ia("transitionstart"),M0=Ia("transitioncancel"),Md=Ia("transitionend"),$d=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function Bt(e,t){$d.set(e,t),Fa(t,[e])}var Nd=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var a=Nd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ws(t)},Nd.set(e,t),t)}return{value:e,source:t,stack:Ws(t)}}var _t=[],Dn=0,nu=0;function Li(){for(var e=Dn,t=nu=Dn=0;t<e;){var a=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var i=_t[t];_t[t++]=null;var r=_t[t];if(_t[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}r!==0&&qd(a,i,r)}}function Yi(e,t,a,n){_t[Dn++]=e,_t[Dn++]=t,_t[Dn++]=a,_t[Dn++]=n,nu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function lu(e,t,a,n){return Yi(e,t,a,n),Vi(e)}function Mn(e,t){return Yi(e,null,null,t),Vi(e)}function qd(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-bt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Vi(e){if(50<li)throw li=0,sc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var $n={};function $0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,n){return new $0(e,t,a,n)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ud(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,a,n,i,r){var d=0;if(n=e,typeof e=="function")iu(e)&&(d=1);else if(typeof e=="string")d=qg(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ce:return e=xt(31,a,t,i),e.elementType=Ce,e.lanes=r,e;case k:return en(a.children,i,r,t);case X:d=8,i|=24;break;case G:return e=xt(12,a,t,i|2),e.elementType=G,e.lanes=r,e;case K:return e=xt(13,a,t,i),e.elementType=K,e.lanes=r,e;case ie:return e=xt(19,a,t,i),e.elementType=ie,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:case Z:d=10;break e;case H:d=9;break e;case le:d=11;break e;case W:d=14;break e;case Oe:d=16,n=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=xt(d,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function en(e,t,a,n){return e=xt(7,e,n,t),e.lanes=a,e}function ru(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function ou(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nn=[],qn=0,Xi=null,Zi=0,Dt=[],Mt=0,tn=null,la=1,ia="";function an(e,t){Nn[qn++]=Zi,Nn[qn++]=Xi,Xi=e,Zi=t}function Bd(e,t,a){Dt[Mt++]=la,Dt[Mt++]=ia,Dt[Mt++]=tn,tn=e;var n=la;e=ia;var i=32-bt(n)-1;n&=~(1<<i),a+=1;var r=32-bt(t)+i;if(30<r){var d=i-i%5;r=(n&(1<<d)-1).toString(32),n>>=d,i-=d,la=1<<32-bt(t)+i|a<<i|n,ia=r+e}else la=1<<r|a<<i|n,ia=e}function uu(e){e.return!==null&&(an(e,1),Bd(e,1,0))}function cu(e){for(;e===Xi;)Xi=Nn[--qn],Nn[qn]=null,Zi=Nn[--qn],Nn[qn]=null;for(;e===tn;)tn=Dt[--Mt],Dt[Mt]=null,ia=Dt[--Mt],Dt[Mt]=null,la=Dt[--Mt],Dt[Mt]=null}var st=null,$e=null,ve=!1,nn=null,Qt=!1,su=Error(c(519));function ln(e){var t=Error(c(418,""));throw ql(Rt(t,e)),su}function Hd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[rt]=e,t[ft]=n,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<ri.length;a++)me(ri[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),ed(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Mi(t);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),ad(t,n.value,n.defaultValue,n.children),Mi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||nh(t.textContent,a)?(n.popover!=null&&(me("beforetoggle",t),me("toggle",t)),n.onScroll!=null&&me("scroll",t),n.onScrollEnd!=null&&me("scrollend",t),n.onClick!=null&&(t.onclick=Tr),t=!0):t=!1,t||ln(e)}function kd(e){for(st=e.return;st;)switch(st.tag){case 5:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:st=st.return}}function $l(e){if(e!==st)return!1;if(!ve)return kd(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ec(e.type,e.memoizedProps)),a=!a),a&&$e&&ln(e),kd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){$e=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}$e=null}}else t===27?(t=$e,ka(e.type)?(e=Rc,Rc=null,$e=e):$e=t):$e=st?kt(e.stateNode.nextSibling):null;return!0}function Nl(){$e=st=null,ve=!1}function Gd(){var e=nn;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),nn=null),e}function ql(e){nn===null?nn=[e]:nn.push(e)}var du=q(null),rn=null,ra=null;function Ca(e,t,a){V(du,t._currentValue),t._currentValue=a}function oa(e){e._currentValue=du.current,L(du)}function fu(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function mu(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var d=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),fu(r.return,a,e),n||(d=null);break e}r=m.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(c(341));d.lanes|=a,r=d.alternate,r!==null&&(r.lanes|=a),fu(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Ul(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var m=i.type;yt(i.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(i===Ze.current){if(d=i.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}i=i.return}e!==null&&mu(t,e,a,n),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function on(e){rn=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Ld(rn,e)}function Ji(e,t){return rn===null&&on(e),Ld(e,t)}function Ld(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(c(308));ra=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ra=ra.next=t;return a}var N0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},q0=l.unstable_scheduleCallback,U0=l.unstable_NormalPriority,Ge={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new N0,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&q0(U0,function(){e.controller.abort()})}var Hl=null,pu=0,Un=0,Bn=null;function B0(e,t){if(Hl===null){var a=Hl=[];pu=0,Un=vc(),Bn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return pu++,t.then(Yd,Yd),t}function Yd(){if(--pu===0&&Hl!==null){Bn!==null&&(Bn.status="fulfilled");var e=Hl;Hl=null,Un=0,Bn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Vd=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&B0(e,t),Vd!==null&&Vd(e,t)};var un=q(null);function gu(){var e=un.current;return e!==null?e:ze.pooledCache}function Fi(e,t){t===null?V(un,un.current):V(un,t.pool)}function Qd(){var e=gu();return e===null?null:{parent:Ge._currentValue,pool:e}}var kl=Error(c(460)),Xd=Error(c(474)),Wi=Error(c(542)),vu={then:function(){}};function Zd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pi(){}function Kd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Pi,Pi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fd(e),e;default:if(typeof t.status=="string")t.then(Pi,Pi);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fd(e),e}throw Gl=t,kl}}var Gl=null;function Jd(){if(Gl===null)throw Error(c(459));var e=Gl;return Gl=null,e}function Fd(e){if(e===kl||e===Wi)throw Error(c(483))}var Ea=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(xe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Vi(e),qd(e,null,a),t}return Yi(e,n,t,a),Vi(e)}function Ll(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ys(e,a)}}function xu(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=d:r=r.next=d,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Su=!1;function Yl(){if(Su){var e=Bn;if(e!==null)throw e}}function Vl(e,t,a,n){Su=!1;var i=e.updateQueue;Ea=!1;var r=i.firstBaseUpdate,d=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,T=v.next;v.next=null,d===null?r=T:d.next=T,d=v;var M=e.alternate;M!==null&&(M=M.updateQueue,m=M.lastBaseUpdate,m!==d&&(m===null?M.firstBaseUpdate=T:m.next=T,M.lastBaseUpdate=v))}if(r!==null){var N=i.baseState;d=0,M=T=v=null,m=r;do{var z=m.lane&-536870913,O=z!==m.lane;if(O?(pe&z)===z:(n&z)===z){z!==0&&z===Un&&(Su=!0),M!==null&&(M=M.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ne=e,ee=m;z=t;var Ae=a;switch(ee.tag){case 1:if(ne=ee.payload,typeof ne=="function"){N=ne.call(Ae,N,z);break e}N=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ee.payload,z=typeof ne=="function"?ne.call(Ae,N,z):ne,z==null)break e;N=w({},N,z);break e;case 2:Ea=!0}}z=m.callback,z!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[z]:O.push(z))}else O={lane:z,tag:m.tag,payload:m.payload,callback:m.callback,next:null},M===null?(T=M=O,v=N):M=M.next=O,d|=z;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;O=m,m=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);M===null&&(v=N),i.baseState=v,i.firstBaseUpdate=T,i.lastBaseUpdate=M,r===null&&(i.shared.lanes=0),qa|=d,e.lanes=d,e.memoizedState=N}}function Wd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Pd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wd(a[e],t)}var Hn=q(null),Ii=q(0);function Id(e,t){e=ha,V(Ii,e),V(Hn,t),ha=e|t.baseLanes}function ju(){V(Ii,ha),V(Hn,Hn.current)}function wu(){ha=Ii.current,L(Hn),L(Ii)}var Oa=0,ue=null,je=null,Be=null,er=!1,kn=!1,cn=!1,tr=0,Ql=0,Gn=null,k0=0;function qe(){throw Error(c(321))}function Au(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function Cu(e,t,a,n,i,r){return Oa=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Uf:Bf,cn=!1,r=a(n,i),cn=!1,kn&&(r=tf(t,a,n,i)),ef(e),r}function ef(e){D.H=or;var t=je!==null&&je.next!==null;if(Oa=0,Be=je=ue=null,er=!1,Ql=0,Gn=null,t)throw Error(c(300));e===null||Je||(e=e.dependencies,e!==null&&Ki(e)&&(Je=!0))}function tf(e,t,a,n){ue=e;var i=0;do{if(kn&&(Gn=null),Ql=0,kn=!1,25<=i)throw Error(c(301));if(i+=1,Be=je=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=Z0,r=t(a,n)}while(kn);return r}function G0(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Xl(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ue.flags|=1024),t}function Eu(){var e=tr!==0;return tr=0,e}function Tu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zu(e){if(er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}er=!1}Oa=0,Be=je=ue=null,kn=!1,Ql=tr=0,Gn=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ue.memoizedState=Be=e:Be=Be.next=e,Be}function He(){if(je===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Be===null?ue.memoizedState:Be.next;if(t!==null)Be=t,je=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Be===null?ue.memoizedState=Be=e:Be=Be.next=e}return Be}function Ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var t=Ql;return Ql+=1,Gn===null&&(Gn=[]),e=Kd(Gn,e,t),t=ue,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Uf:Bf),e}function ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===Z)return ot(e)}throw Error(c(438,String(e)))}function Ru(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ue.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ou(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ct;return t.index++,a}function ua(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=He();return _u(t,je,e)}function _u(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var d=i.next;i.next=r.next,r.next=d}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=d=null,v=null,T=t,M=!1;do{var N=T.lane&-536870913;if(N!==T.lane?(pe&N)===N:(Oa&N)===N){var z=T.revertLane;if(z===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),N===Un&&(M=!0);else if((Oa&z)===z){T=T.next,z===Un&&(M=!0);continue}else N={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(m=v=N,d=r):v=v.next=N,ue.lanes|=z,qa|=z;N=T.action,cn&&a(r,N),r=T.hasEagerState?T.eagerState:a(r,N)}else z={lane:N,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(m=v=z,d=r):v=v.next=z,ue.lanes|=N,qa|=N;T=T.next}while(T!==null&&T!==t);if(v===null?d=r:v.next=m,!yt(r,e.memoizedState)&&(Je=!0,M&&(a=Bn,a!==null)))throw a;e.memoizedState=r,e.baseState=d,e.baseQueue=v,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Du(e){var t=He(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do r=e(r,d.action),d=d.next;while(d!==i);yt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function af(e,t,a){var n=ue,i=He(),r=ve;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!yt((je||i).memoizedState,a);d&&(i.memoizedState=a,Je=!0),i=i.queue;var m=rf.bind(null,n,i,e);if(Zl(2048,8,m,[e]),i.getSnapshot!==t||d||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ln(9,lr(),lf.bind(null,n,i,a,t),null),ze===null)throw Error(c(349));r||(Oa&124)!==0||nf(n,t,a)}return a}function nf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Ou(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function lf(e,t,a,n){t.value=a,t.getSnapshot=n,of(t)&&uf(e)}function rf(e,t,a){return a(function(){of(t)&&uf(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function uf(e){var t=Mn(e,2);t!==null&&Ct(t,e,2)}function Mu(e){var t=ht();if(typeof e=="function"){var a=e;if(e=a(),cn){ja(!0);try{a()}finally{ja(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t}function cf(e,t,a,n){return e.baseState=a,_u(e,je,typeof n=="function"?n:ua)}function L0(e,t,a,n,i){if(rr(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){r.listeners.push(d)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,sf(t,r)):(r.next=a.next,t.pending=a.next=r)}}function sf(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=D.T,d={};D.T=d;try{var m=a(i,n),v=D.S;v!==null&&v(d,m),df(e,t,m)}catch(T){$u(e,t,T)}finally{D.T=r}}else try{r=a(i,n),df(e,t,r)}catch(T){$u(e,t,T)}}function df(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){ff(e,t,n)},function(n){return $u(e,t,n)}):ff(e,t,a)}function ff(e,t,a){t.status="fulfilled",t.value=a,mf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,sf(e,a)))}function $u(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,mf(t),t=t.next;while(t!==n)}e.action=null}function mf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hf(e,t){return t}function pf(e,t){if(ve){var a=ze.formState;if(a!==null){e:{var n=ue;if(ve){if($e){t:{for(var i=$e,r=Qt;i.nodeType!==8;){if(!r){i=null;break t}if(i=kt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){$e=kt(i.nextSibling),n=i.data==="F!";break e}}ln(n)}n=!1}n&&(t=a[0])}}return a=ht(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hf,lastRenderedState:t},a.queue=n,a=$f.bind(null,ue,n),n.dispatch=a,n=Mu(!1),r=Hu.bind(null,ue,!1,n.queue),n=ht(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=L0.bind(null,ue,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function gf(e){var t=He();return vf(t,je,e)}function vf(e,t,a){if(t=_u(e,t,hf)[0],e=nr(ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Xl(t)}catch(d){throw d===kl?Wi:d}else n=t;t=He();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Ln(9,lr(),Y0.bind(null,i,a),null)),[n,r,e]}function Y0(e,t){e.action=t}function bf(e){var t=He(),a=je;if(a!==null)return vf(t,a,e);He(),t=t.memoizedState,a=He();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Ln(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Ou(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function lr(){return{destroy:void 0,resource:void 0}}function yf(){return He().memoizedState}function ir(e,t,a,n){var i=ht();n=n===void 0?null:n,ue.flags|=e,i.memoizedState=Ln(1|t,lr(),a,n)}function Zl(e,t,a,n){var i=He();n=n===void 0?null:n;var r=i.memoizedState.inst;je!==null&&n!==null&&Au(n,je.memoizedState.deps)?i.memoizedState=Ln(t,r,a,n):(ue.flags|=e,i.memoizedState=Ln(1|t,r,a,n))}function xf(e,t){ir(8390656,8,e,t)}function Sf(e,t){Zl(2048,8,e,t)}function jf(e,t){return Zl(4,2,e,t)}function wf(e,t){return Zl(4,4,e,t)}function Af(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,a){a=a!=null?a.concat([e]):null,Zl(4,4,Af.bind(null,t,e),a)}function Nu(){}function Ef(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Au(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Tf(e,t){var a=He();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Au(t,n[1]))return n[0];if(n=e(),cn){ja(!0);try{e()}finally{ja(!1)}}return a.memoizedState=[n,t],n}function qu(e,t,a){return a===void 0||(Oa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Rm(),ue.lanes|=e,qa|=e,a)}function zf(e,t,a,n){return yt(a,t)?a:Hn.current!==null?(e=qu(e,a,n),yt(e,t)||(Je=!0),e):(Oa&42)===0?(Je=!0,e.memoizedState=a):(e=Rm(),ue.lanes|=e,qa|=e,t)}function Of(e,t,a,n,i){var r=Y.p;Y.p=r!==0&&8>r?r:8;var d=D.T,m={};D.T=m,Hu(e,!1,t,a);try{var v=i(),T=D.S;if(T!==null&&T(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var M=H0(v,n);Kl(e,t,M,At(e))}else Kl(e,t,n,At(e))}catch(N){Kl(e,t,{then:function(){},status:"rejected",reason:N},At())}finally{Y.p=r,D.T=d}}function V0(){}function Uu(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Rf(e).queue;Of(e,i,t,I,a===null?V0:function(){return _f(e),a(n)})}function Rf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _f(e){var t=Rf(e).next.queue;Kl(e,t,{},At())}function Bu(){return ot(fi)}function Df(){return He().memoizedState}function Mf(){return He().memoizedState}function Q0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=At();e=Ta(a);var n=za(t,e,a);n!==null&&(Ct(n,t,a),Ll(n,t,a)),t={cache:hu()},e.payload=t;return}t=t.return}}function X0(e,t,a){var n=At();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},rr(e)?Nf(t,a):(a=lu(e,t,a,n),a!==null&&(Ct(a,e,n),qf(a,t,n)))}function $f(e,t,a){var n=At();Kl(e,t,a,n)}function Kl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(rr(e))Nf(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var d=t.lastRenderedState,m=r(d,a);if(i.hasEagerState=!0,i.eagerState=m,yt(m,d))return Yi(e,t,i,0),ze===null&&Li(),!1}catch{}finally{}if(a=lu(e,t,i,n),a!==null)return Ct(a,e,n),qf(a,t,n),!0}return!1}function Hu(e,t,a,n){if(n={lane:2,revertLane:vc(),action:n,hasEagerState:!1,eagerState:null,next:null},rr(e)){if(t)throw Error(c(479))}else t=lu(e,a,n,2),t!==null&&Ct(t,e,2)}function rr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Nf(e,t){kn=er=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function qf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ys(e,a)}}var or={readContext:ot,use:ar,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe},Uf={readContext:ot,use:ar,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:xf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ir(4194308,4,Af.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){ir(4,2,e,t)},useMemo:function(e,t){var a=ht();t=t===void 0?null:t;var n=e();if(cn){ja(!0);try{e()}finally{ja(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ht();if(a!==void 0){var i=a(t);if(cn){ja(!0);try{a(t)}finally{ja(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=X0.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Mu(e);var t=e.queue,a=$f.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Nu,useDeferredValue:function(e,t){var a=ht();return qu(a,e,t)},useTransition:function(){var e=Mu(!1);return e=Of.bind(null,ue,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ue,i=ht();if(ve){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),ze===null)throw Error(c(349));(pe&124)!==0||nf(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,xf(rf.bind(null,n,r,e),[e]),n.flags|=2048,Ln(9,lr(),lf.bind(null,n,r,a,t),null),a},useId:function(){var e=ht(),t=ze.identifierPrefix;if(ve){var a=ia,n=la;a=(n&~(1<<32-bt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=tr++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=k0++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Bu,useFormState:pf,useActionState:pf,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hu.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ru,useCacheRefresh:function(){return ht().memoizedState=Q0.bind(null,ue)}},Bf={readContext:ot,use:ar,useCallback:Ef,useContext:ot,useEffect:Sf,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:wf,useMemo:Tf,useReducer:nr,useRef:yf,useState:function(){return nr(ua)},useDebugValue:Nu,useDeferredValue:function(e,t){var a=He();return zf(a,je.memoizedState,e,t)},useTransition:function(){var e=nr(ua)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:af,useId:Df,useHostTransitionStatus:Bu,useFormState:gf,useActionState:gf,useOptimistic:function(e,t){var a=He();return cf(a,je,e,t)},useMemoCache:Ru,useCacheRefresh:Mf},Z0={readContext:ot,use:ar,useCallback:Ef,useContext:ot,useEffect:Sf,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:wf,useMemo:Tf,useReducer:Du,useRef:yf,useState:function(){return Du(ua)},useDebugValue:Nu,useDeferredValue:function(e,t){var a=He();return je===null?qu(a,e,t):zf(a,je.memoizedState,e,t)},useTransition:function(){var e=Du(ua)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:af,useId:Df,useHostTransitionStatus:Bu,useFormState:bf,useActionState:bf,useOptimistic:function(e,t){var a=He();return je!==null?cf(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:Mf},Yn=null,Jl=0;function ur(e){var t=Jl;return Jl+=1,Yn===null&&(Yn=[]),Kd(Yn,e,t)}function Fl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hf(e){var t=e._init;return t(e._payload)}function kf(e){function t(A,S){if(e){var E=A.deletions;E===null?(A.deletions=[S],A.flags|=16):E.push(S)}}function a(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function n(A){for(var S=new Map;A!==null;)A.key!==null?S.set(A.key,A):S.set(A.index,A),A=A.sibling;return S}function i(A,S){return A=na(A,S),A.index=0,A.sibling=null,A}function r(A,S,E){return A.index=E,e?(E=A.alternate,E!==null?(E=E.index,E<S?(A.flags|=67108866,S):E):(A.flags|=67108866,S)):(A.flags|=1048576,S)}function d(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function m(A,S,E,$){return S===null||S.tag!==6?(S=ru(E,A.mode,$),S.return=A,S):(S=i(S,E),S.return=A,S)}function v(A,S,E,$){var J=E.type;return J===k?M(A,S,E.props.children,$,E.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Oe&&Hf(J)===S.type)?(S=i(S,E.props),Fl(S,E),S.return=A,S):(S=Qi(E.type,E.key,E.props,null,A.mode,$),Fl(S,E),S.return=A,S)}function T(A,S,E,$){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=ou(E,A.mode,$),S.return=A,S):(S=i(S,E.children||[]),S.return=A,S)}function M(A,S,E,$,J){return S===null||S.tag!==7?(S=en(E,A.mode,$,J),S.return=A,S):(S=i(S,E),S.return=A,S)}function N(A,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ru(""+S,A.mode,E),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return E=Qi(S.type,S.key,S.props,null,A.mode,E),Fl(E,S),E.return=A,E;case B:return S=ou(S,A.mode,E),S.return=A,S;case Oe:var $=S._init;return S=$(S._payload),N(A,S,E)}if(Xe(S)||Qe(S))return S=en(S,A.mode,E,null),S.return=A,S;if(typeof S.then=="function")return N(A,ur(S),E);if(S.$$typeof===Z)return N(A,Ji(A,S),E);cr(A,S)}return null}function z(A,S,E,$){var J=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:m(A,S,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case U:return E.key===J?v(A,S,E,$):null;case B:return E.key===J?T(A,S,E,$):null;case Oe:return J=E._init,E=J(E._payload),z(A,S,E,$)}if(Xe(E)||Qe(E))return J!==null?null:M(A,S,E,$,null);if(typeof E.then=="function")return z(A,S,ur(E),$);if(E.$$typeof===Z)return z(A,S,Ji(A,E),$);cr(A,E)}return null}function O(A,S,E,$,J){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return A=A.get(E)||null,m(S,A,""+$,J);if(typeof $=="object"&&$!==null){switch($.$$typeof){case U:return A=A.get($.key===null?E:$.key)||null,v(S,A,$,J);case B:return A=A.get($.key===null?E:$.key)||null,T(S,A,$,J);case Oe:var ce=$._init;return $=ce($._payload),O(A,S,E,$,J)}if(Xe($)||Qe($))return A=A.get(E)||null,M(S,A,$,J,null);if(typeof $.then=="function")return O(A,S,E,ur($),J);if($.$$typeof===Z)return O(A,S,E,Ji(S,$),J);cr(S,$)}return null}function ne(A,S,E,$){for(var J=null,ce=null,F=S,ae=S=0,We=null;F!==null&&ae<E.length;ae++){F.index>ae?(We=F,F=null):We=F.sibling;var ge=z(A,F,E[ae],$);if(ge===null){F===null&&(F=We);break}e&&F&&ge.alternate===null&&t(A,F),S=r(ge,S,ae),ce===null?J=ge:ce.sibling=ge,ce=ge,F=We}if(ae===E.length)return a(A,F),ve&&an(A,ae),J;if(F===null){for(;ae<E.length;ae++)F=N(A,E[ae],$),F!==null&&(S=r(F,S,ae),ce===null?J=F:ce.sibling=F,ce=F);return ve&&an(A,ae),J}for(F=n(F);ae<E.length;ae++)We=O(F,A,ae,E[ae],$),We!==null&&(e&&We.alternate!==null&&F.delete(We.key===null?ae:We.key),S=r(We,S,ae),ce===null?J=We:ce.sibling=We,ce=We);return e&&F.forEach(function(Qa){return t(A,Qa)}),ve&&an(A,ae),J}function ee(A,S,E,$){if(E==null)throw Error(c(151));for(var J=null,ce=null,F=S,ae=S=0,We=null,ge=E.next();F!==null&&!ge.done;ae++,ge=E.next()){F.index>ae?(We=F,F=null):We=F.sibling;var Qa=z(A,F,ge.value,$);if(Qa===null){F===null&&(F=We);break}e&&F&&Qa.alternate===null&&t(A,F),S=r(Qa,S,ae),ce===null?J=Qa:ce.sibling=Qa,ce=Qa,F=We}if(ge.done)return a(A,F),ve&&an(A,ae),J;if(F===null){for(;!ge.done;ae++,ge=E.next())ge=N(A,ge.value,$),ge!==null&&(S=r(ge,S,ae),ce===null?J=ge:ce.sibling=ge,ce=ge);return ve&&an(A,ae),J}for(F=n(F);!ge.done;ae++,ge=E.next())ge=O(F,A,ae,ge.value,$),ge!==null&&(e&&ge.alternate!==null&&F.delete(ge.key===null?ae:ge.key),S=r(ge,S,ae),ce===null?J=ge:ce.sibling=ge,ce=ge);return e&&F.forEach(function(Kg){return t(A,Kg)}),ve&&an(A,ae),J}function Ae(A,S,E,$){if(typeof E=="object"&&E!==null&&E.type===k&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case U:e:{for(var J=E.key;S!==null;){if(S.key===J){if(J=E.type,J===k){if(S.tag===7){a(A,S.sibling),$=i(S,E.props.children),$.return=A,A=$;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Oe&&Hf(J)===S.type){a(A,S.sibling),$=i(S,E.props),Fl($,E),$.return=A,A=$;break e}a(A,S);break}else t(A,S);S=S.sibling}E.type===k?($=en(E.props.children,A.mode,$,E.key),$.return=A,A=$):($=Qi(E.type,E.key,E.props,null,A.mode,$),Fl($,E),$.return=A,A=$)}return d(A);case B:e:{for(J=E.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){a(A,S.sibling),$=i(S,E.children||[]),$.return=A,A=$;break e}else{a(A,S);break}else t(A,S);S=S.sibling}$=ou(E,A.mode,$),$.return=A,A=$}return d(A);case Oe:return J=E._init,E=J(E._payload),Ae(A,S,E,$)}if(Xe(E))return ne(A,S,E,$);if(Qe(E)){if(J=Qe(E),typeof J!="function")throw Error(c(150));return E=J.call(E),ee(A,S,E,$)}if(typeof E.then=="function")return Ae(A,S,ur(E),$);if(E.$$typeof===Z)return Ae(A,S,Ji(A,E),$);cr(A,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(a(A,S.sibling),$=i(S,E),$.return=A,A=$):(a(A,S),$=ru(E,A.mode,$),$.return=A,A=$),d(A)):a(A,S)}return function(A,S,E,$){try{Jl=0;var J=Ae(A,S,E,$);return Yn=null,J}catch(F){if(F===kl||F===Wi)throw F;var ce=xt(29,F,null,A.mode);return ce.lanes=$,ce.return=A,ce}finally{}}}var Vn=kf(!0),Gf=kf(!1),$t=q(null),Xt=null;function Ra(e){var t=e.alternate;V(Le,Le.current&1),V($t,e),Xt===null&&(t===null||Hn.current!==null||t.memoizedState!==null)&&(Xt=e)}function Lf(e){if(e.tag===22){if(V(Le,Le.current),V($t,e),Xt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Xt=e)}}else _a()}function _a(){V(Le,Le.current),V($t,$t.current)}function ca(e){L($t),Xt===e&&(Xt=null),L(Le)}var Le=q(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Oc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ku(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=At(),i=Ta(n);i.payload=t,a!=null&&(i.callback=a),t=za(e,i,n),t!==null&&(Ct(t,e,n),Ll(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=At(),i=Ta(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=za(e,i,n),t!==null&&(Ct(t,e,n),Ll(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=At(),n=Ta(a);n.tag=2,t!=null&&(n.callback=t),t=za(e,n,a),t!==null&&(Ct(t,e,a),Ll(t,e,a))}};function Yf(e,t,a,n,i,r,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,d):t.prototype&&t.prototype.isPureReactComponent?!Dl(a,n)||!Dl(i,r):!0}function Vf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Gu.enqueueReplaceState(t,t.state,null)}function sn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qf(e){dr(e)}function Xf(e){console.error(e)}function Zf(e){dr(e)}function fr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Kf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Lu(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){fr(e,t)},a}function Jf(e){return e=Ta(e),e.tag=3,e}function Ff(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Kf(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Kf(t,a,n),typeof i!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function K0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Ul(t,a,i,!0),a=$t.current,a!==null){switch(a.tag){case 13:return Xt===null?fc():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===vu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),hc(e,n,i)),!1;case 22:return a.flags|=65536,n===vu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),hc(e,n,i)),!1}throw Error(c(435,a.tag))}return hc(e,n,i),fc(),!1}if(ve)return t=$t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==su&&(e=Error(c(422),{cause:n}),ql(Rt(e,a)))):(n!==su&&(t=Error(c(423),{cause:n}),ql(Rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Rt(n,a),i=Lu(e.stateNode,n,i),xu(e,i),Ne!==4&&(Ne=2)),!1;var r=Error(c(520),{cause:n});if(r=Rt(r,a),ni===null?ni=[r]:ni.push(r),Ne!==4&&(Ne=2),t===null)return!0;n=Rt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Lu(a.stateNode,n,e),xu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ua===null||!Ua.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Jf(i),Ff(i,e,a,n),xu(a,i),!1}a=a.return}while(a!==null);return!1}var Wf=Error(c(461)),Je=!1;function et(e,t,a,n){t.child=e===null?Gf(t,null,a,n):Vn(t,e.child,a,n)}function Pf(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var d={};for(var m in n)m!=="ref"&&(d[m]=n[m])}else d=n;return on(t),n=Cu(e,t,a,d,r,i),m=Eu(),e!==null&&!Je?(Tu(e,t,i),sa(e,t,i)):(ve&&m&&uu(t),t.flags|=1,et(e,t,n,i),t.child)}function If(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!iu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,em(e,t,r,n,i)):(e=Qi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Fu(e,i)){var d=r.memoizedProps;if(a=a.compare,a=a!==null?a:Dl,a(d,n)&&e.ref===t.ref)return sa(e,t,i)}return t.flags|=1,e=na(r,n),e.ref=t.ref,e.return=t,t.child=e}function em(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Dl(r,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=r,Fu(e,i))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,sa(e,t,i)}return Yu(e,t,a,n,i)}function tm(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return am(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,r!==null?r.cachePool:null),r!==null?Id(t,r):ju(),Lf(t);else return t.lanes=t.childLanes=536870912,am(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Fi(t,r.cachePool),Id(t,r),_a(),t.memoizedState=null):(e!==null&&Fi(t,null),ju(),_a());return et(e,t,i,a),t.child}function am(e,t,a,n){var i=gu();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Fi(t,null),ju(),Lf(t),e!==null&&Ul(e,t,n,!0),null}function mr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Yu(e,t,a,n,i){return on(t),a=Cu(e,t,a,n,void 0,i),n=Eu(),e!==null&&!Je?(Tu(e,t,i),sa(e,t,i)):(ve&&n&&uu(t),t.flags|=1,et(e,t,a,i),t.child)}function nm(e,t,a,n,i,r){return on(t),t.updateQueue=null,a=tf(t,n,a,i),ef(e),n=Eu(),e!==null&&!Je?(Tu(e,t,r),sa(e,t,r)):(ve&&n&&uu(t),t.flags|=1,et(e,t,a,r),t.child)}function lm(e,t,a,n,i){if(on(t),t.stateNode===null){var r=$n,d=a.contextType;typeof d=="object"&&d!==null&&(r=ot(d)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},bu(t),d=a.contextType,r.context=typeof d=="object"&&d!==null?ot(d):$n,r.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(ku(t,a,d,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(d=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),d!==r.state&&Gu.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),Yl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=sn(a,m);r.props=v;var T=r.context,M=a.contextType;d=$n,typeof M=="object"&&M!==null&&(d=ot(M));var N=a.getDerivedStateFromProps;M=typeof N=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||T!==d)&&Vf(t,r,n,d),Ea=!1;var z=t.memoizedState;r.state=z,Vl(t,n,r,i),Yl(),T=t.memoizedState,m||z!==T||Ea?(typeof N=="function"&&(ku(t,a,N,n),T=t.memoizedState),(v=Ea||Yf(t,a,v,n,z,T,d))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=T),r.props=n,r.state=T,r.context=d,n=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,yu(e,t),d=t.memoizedProps,M=sn(a,d),r.props=M,N=t.pendingProps,z=r.context,T=a.contextType,v=$n,typeof T=="object"&&T!==null&&(v=ot(T)),m=a.getDerivedStateFromProps,(T=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d!==N||z!==v)&&Vf(t,r,n,v),Ea=!1,z=t.memoizedState,r.state=z,Vl(t,n,r,i),Yl();var O=t.memoizedState;d!==N||z!==O||Ea||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof m=="function"&&(ku(t,a,m,n),O=t.memoizedState),(M=Ea||Yf(t,a,M,n,z,O,v)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(T||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,O,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,O,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=O),r.props=n,r.state=O,r.context=v,n=M):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,mr(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Vn(t,e.child,null,i),t.child=Vn(t,null,a,i)):et(e,t,a,i),t.memoizedState=r.state,e=t.child):e=sa(e,t,i),e}function im(e,t,a,n){return Nl(),t.flags|=256,et(e,t,a,n),t.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(e){return{baseLanes:e,cachePool:Qd()}}function Xu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function rm(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,d;if((d=r)||(d=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(i?Ra(t):_a(),ve){var m=$e,v;if(v=m){e:{for(v=m,m=Qt;v.nodeType!==8;){if(!m){m=null;break e}if(v=kt(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:tn!==null?{id:la,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},v=xt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,st=t,$e=null,v=!0):v=!1}v||ln(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Oc(m)?t.lanes=32:t.lanes=536870912,null;ca(t)}return m=n.children,n=n.fallback,i?(_a(),i=t.mode,m=hr({mode:"hidden",children:m},i),n=en(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,i=t.child,i.memoizedState=Qu(a),i.childLanes=Xu(e,d,a),t.memoizedState=Vu,n):(Ra(t),Zu(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(Ra(t),t.flags&=-257,t=Ku(e,t,a)):t.memoizedState!==null?(_a(),t.child=e.child,t.flags|=128,t=null):(_a(),i=n.fallback,m=t.mode,n=hr({mode:"visible",children:n.children},m),i=en(i,m,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Vn(t,e.child,null,a),n=t.child,n.memoizedState=Qu(a),n.childLanes=Xu(e,d,a),t.memoizedState=Vu,t=i);else if(Ra(t),Oc(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var T=d.dgst;d=T,n=Error(c(419)),n.stack="",n.digest=d,ql({value:n,source:null,stack:null}),t=Ku(e,t,a)}else if(Je||Ul(e,t,a,!1),d=(a&e.childLanes)!==0,Je||d){if(d=ze,d!==null&&(n=a&-a,n=(n&42)!==0?1:Ro(n),n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane))throw v.retryLane=n,Mn(e,n),Ct(d,e,n),Wf;m.data==="$?"||fc(),t=Ku(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,$e=kt(m.nextSibling),st=t,ve=!0,nn=null,Qt=!1,e!==null&&(Dt[Mt++]=la,Dt[Mt++]=ia,Dt[Mt++]=tn,la=e.id,ia=e.overflow,tn=t),t=Zu(t,n.children),t.flags|=4096);return t}return i?(_a(),i=n.fallback,m=t.mode,v=e.child,T=v.sibling,n=na(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,T!==null?i=na(T,i):(i=en(i,m,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,m=e.child.memoizedState,m===null?m=Qu(a):(v=m.cachePool,v!==null?(T=Ge._currentValue,v=v.parent!==T?{parent:T,pool:T}:v):v=Qd(),m={baseLanes:m.baseLanes|a,cachePool:v}),i.memoizedState=m,i.childLanes=Xu(e,d,a),t.memoizedState=Vu,n):(Ra(t),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function Zu(e,t){return t=hr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hr(e,t){return e=xt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ku(e,t,a){return Vn(t,e.child,null,a),e=Zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function om(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fu(e.return,t,a)}function Ju(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function um(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(et(e,t,n.children,a),n=Le.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&om(e,a,t);else if(e.tag===19)om(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(V(Le,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&sr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Ju(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Ju(t,!0,a,null,r);break;case"together":Ju(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ul(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=na(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Fu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function J0(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),Ca(t,Ge,e.memoizedState.cache),Nl();break;case 27:case 5:Ka(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:Ca(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?rm(e,t,a):(Ra(t),e=sa(e,t,a),e!==null?e.sibling:null);Ra(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Ul(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return um(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Le,Le.current),n)break;return null;case 22:case 23:return t.lanes=0,tm(e,t,a);case 24:Ca(t,Ge,e.memoizedState.cache)}return sa(e,t,a)}function cm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Fu(e,a)&&(t.flags&128)===0)return Je=!1,J0(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,ve&&(t.flags&1048576)!==0&&Bd(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")iu(n)?(e=sn(n,e),t.tag=1,t=lm(null,t,n,e,a)):(t.tag=0,t=Yu(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===le){t.tag=11,t=Pf(null,t,n,e,a);break e}else if(i===W){t.tag=14,t=If(null,t,n,e,a);break e}}throw t=It(n)||n,Error(c(306,t,""))}}return t;case 0:return Yu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=sn(n,t.pendingProps),lm(e,t,n,i,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,yu(e,t),Vl(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Ca(t,Ge,n),n!==r.cache&&mu(t,[Ge],a,!0),Yl(),n=d.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=im(e,t,n,a);break e}else if(n!==i){i=Rt(Error(c(424)),t),ql(i),t=im(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=kt(e.firstChild),st=t,ve=!0,nn=null,Qt=!0,a=Gf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Nl(),n===i){t=sa(e,t,a);break e}et(e,t,n,a)}t=t.child}return t;case 26:return mr(e,t),e===null?(a=mh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,n=zr(te.current).createElement(a),n[rt]=t,n[ft]=e,at(n,a,e),Ke(n),t.stateNode=n):t.memoizedState=mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ka(t),e===null&&ve&&(n=t.stateNode=sh(t.type,t.pendingProps,te.current),st=t,Qt=!0,i=$e,ka(t.type)?(Rc=i,$e=kt(n.firstChild)):$e=i),et(e,t,t.pendingProps.children,a),mr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((i=n=$e)&&(n=wg(n,t.type,t.pendingProps,Qt),n!==null?(t.stateNode=n,st=t,$e=kt(n.firstChild),Qt=!1,i=!0):i=!1),i||ln(t)),Ka(t),i=t.type,r=t.pendingProps,d=e!==null?e.memoizedProps:null,n=r.children,Ec(i,r)?n=null:d!==null&&Ec(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Cu(e,t,G0,null,null,a),fi._currentValue=i),mr(e,t),et(e,t,n,a),t.child;case 6:return e===null&&ve&&((e=a=$e)&&(a=Ag(a,t.pendingProps,Qt),a!==null?(t.stateNode=a,st=t,$e=null,e=!0):e=!1),e||ln(t)),null;case 13:return rm(e,t,a);case 4:return be(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vn(t,null,n,a):et(e,t,n,a),t.child;case 11:return Pf(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ca(t,t.type,n.value),et(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,on(t),i=ot(i),n=n(i),t.flags|=1,et(e,t,n,a),t.child;case 14:return If(e,t,t.type,t.pendingProps,a);case 15:return em(e,t,t.type,t.pendingProps,a);case 19:return um(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=hr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=na(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return tm(e,t,a);case 24:return on(t),n=ot(Ge),e===null?(i=gu(),i===null&&(i=ze,r=hu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},bu(t),Ca(t,Ge,i)):((e.lanes&a)!==0&&(yu(e,t),Vl(t,null,null,a),Yl()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ca(t,Ge,n)):(n=r.cache,Ca(t,Ge,n),n!==i.cache&&mu(t,[Ge],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function da(e){e.flags|=4}function sm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(t)){if(t=$t.current,t!==null&&((pe&4194048)===pe?Xt!==null:(pe&62914560)!==pe&&(pe&536870912)===0||t!==Xt))throw Gl=vu,Xd;e.flags|=8192}}function pr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gs():536870912,e.lanes|=t,Kn|=t)}function Wl(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function F0(e,t,a){var n=t.pendingProps;switch(cu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),oa(Ge),it(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($l(t)?da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gd())),Me(t),null;case 26:return a=t.memoizedState,e===null?(da(t),a!==null?(Me(t),sm(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(da(t),Me(t),sm(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==n&&da(t),Me(t),t.flags&=-16777217),null;case 27:ea(t),a=te.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Me(t),null}e=P.current,$l(t)?Hd(t):(e=sh(i,n,a),t.stateNode=e,da(t))}return Me(t),null;case 5:if(ea(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Me(t),null}if(e=P.current,$l(t))Hd(t);else{switch(i=zr(te.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[rt]=t,e[ft]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(at(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&da(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=te.current,$l(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=st,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[rt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||nh(e.nodeValue,a)),e||ln(t)}else e=zr(e).createTextNode(n),e[rt]=t,t.stateNode=e}return Me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=$l(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[rt]=t}else Nl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else i=Gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ca(t),t):(ca(t),null)}if(ca(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),pr(t,t.updateQueue),Me(t),null;case 4:return it(),e===null&&Sc(t.stateNode.containerInfo),Me(t),null;case 10:return oa(t.type),Me(t),null;case 19:if(L(Le),i=t.memoizedState,i===null)return Me(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Wl(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=sr(e),r!==null){for(t.flags|=128,Wl(i,!1),e=r.updateQueue,t.updateQueue=e,pr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ud(a,e),a=a.sibling;return V(Le,Le.current&1|2),t.child}e=e.sibling}i.tail!==null&&Vt()>br&&(t.flags|=128,n=!0,Wl(i,!1),t.lanes=4194304)}else{if(!n)if(e=sr(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,pr(t,e),Wl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ve)return Me(t),null}else 2*Vt()-i.renderingStartTime>br&&a!==536870912&&(t.flags|=128,n=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Vt(),t.sibling=null,e=Le.current,V(Le,n?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return ca(t),wu(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&pr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&L(un),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),oa(Ge),Me(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function W0(e,t){switch(cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oa(Ge),it(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ea(t),null;case 13:if(ca(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Nl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Le),null;case 4:return it(),null;case 10:return oa(t.type),null;case 22:case 23:return ca(t),wu(),e!==null&&L(un),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return oa(Ge),null;case 25:return null;default:return null}}function dm(e,t){switch(cu(t),t.tag){case 3:oa(Ge),it();break;case 26:case 27:case 5:ea(t);break;case 4:it();break;case 13:ca(t);break;case 19:L(Le);break;case 10:oa(t.type);break;case 22:case 23:ca(t),wu(),e!==null&&L(un);break;case 24:oa(Ge)}}function Pl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,d=a.inst;n=r(),d.destroy=n}a=a.next}while(a!==i)}}catch(m){Ee(t,t.return,m)}}function Da(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var d=n.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,i=t;var v=a,T=m;try{T()}catch(M){Ee(i,v,M)}}}n=n.next}while(n!==r)}}catch(M){Ee(t,t.return,M)}}function fm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Pd(t,a)}catch(n){Ee(e,e.return,n)}}}function mm(e,t,a){a.props=sn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ee(e,t,n)}}function Il(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ee(e,t,i)}}function Zt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ee(e,t,i)}else a.current=null}function hm(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ee(e,e.return,i)}}function Wu(e,t,a){try{var n=e.stateNode;bg(n,e.type,a,t),n[ft]=t}catch(i){Ee(e,e.return,i)}}function pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Tr));else if(n!==4&&(n===27&&ka(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Iu(e,t,a),e=e.sibling;e!==null;)Iu(e,t,a),e=e.sibling}function gr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gr(e,t,a),e=e.sibling;e!==null;)gr(e,t,a),e=e.sibling}function gm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);at(t,n,a),t[rt]=e,t[ft]=a}catch(r){Ee(e,e.return,r)}}var fa=!1,Ue=!1,ec=!1,vm=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function P0(e,t){if(e=e.containerInfo,Ac=$r,e=Td(e),Po(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var d=0,m=-1,v=-1,T=0,M=0,N=e,z=null;t:for(;;){for(var O;N!==a||i!==0&&N.nodeType!==3||(m=d+i),N!==r||n!==0&&N.nodeType!==3||(v=d+n),N.nodeType===3&&(d+=N.nodeValue.length),(O=N.firstChild)!==null;)z=N,N=O;for(;;){if(N===e)break t;if(z===a&&++T===i&&(m=d),z===r&&++M===n&&(v=d),(O=N.nextSibling)!==null)break;N=z,z=N.parentNode}N=O}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:e,selectionRange:a},$r=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var ne=sn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(ne,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ee(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)zc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function bm(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),n&4&&Pl(5,a);break;case 1:if(Ma(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Ee(a,a.return,d)}else{var i=sn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ee(a,a.return,d)}}n&64&&fm(a),n&512&&Il(a,a.return);break;case 3:if(Ma(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Pd(e,t)}catch(d){Ee(a,a.return,d)}}break;case 27:t===null&&n&4&&gm(a);case 26:case 5:Ma(e,a),t===null&&n&4&&hm(a),n&512&&Il(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),n&4&&Sm(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=og.bind(null,a),Cg(e,a))));break;case 22:if(n=a.memoizedState!==null||fa,!n){t=t!==null&&t.memoizedState!==null||Ue,i=fa;var r=Ue;fa=n,(Ue=t)&&!r?$a(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),fa=i,Ue=r}break;case 30:break;default:Ma(e,a)}}function ym(e){var t=e.alternate;t!==null&&(e.alternate=null,ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,pt=!1;function ma(e,t,a){for(a=a.child;a!==null;)xm(e,t,a),a=a.sibling}function xm(e,t,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(xl,a)}catch{}switch(a.tag){case 26:Ue||Zt(a,t),ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ue||Zt(a,t);var n=_e,i=pt;ka(a.type)&&(_e=a.stateNode,pt=!1),ma(e,t,a),ui(a.stateNode),_e=n,pt=i;break;case 5:Ue||Zt(a,t);case 6:if(n=_e,i=pt,_e=null,ma(e,t,a),_e=n,pt=i,_e!==null)if(pt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(r){Ee(a,t,r)}else try{_e.removeChild(a.stateNode)}catch(r){Ee(a,t,r)}break;case 18:_e!==null&&(pt?(e=_e,uh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gi(e)):uh(_e,a.stateNode));break;case 4:n=_e,i=pt,_e=a.stateNode.containerInfo,pt=!0,ma(e,t,a),_e=n,pt=i;break;case 0:case 11:case 14:case 15:Ue||Da(2,a,t),Ue||Da(4,a,t),ma(e,t,a);break;case 1:Ue||(Zt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&mm(a,t,n)),ma(e,t,a);break;case 21:ma(e,t,a);break;case 22:Ue=(n=Ue)||a.memoizedState!==null,ma(e,t,a),Ue=n;break;default:ma(e,t,a)}}function Sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gi(e)}catch(a){Ee(t,t.return,a)}}function I0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vm),t;default:throw Error(c(435,e.tag))}}function tc(e,t){var a=I0(e);t.forEach(function(n){var i=ug.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function St(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(ka(m.type)){_e=m.stateNode,pt=!1;break e}break;case 5:_e=m.stateNode,pt=!1;break e;case 3:case 4:_e=m.stateNode.containerInfo,pt=!0;break e}m=m.return}if(_e===null)throw Error(c(160));xm(r,d,i),_e=null,pt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}var Ht=null;function jm(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),jt(e),n&4&&(Da(3,e,e.return),Pl(3,e),Da(5,e,e.return));break;case 1:St(t,e),jt(e),n&512&&(Ue||a===null||Zt(a,a.return)),n&64&&fa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ht;if(St(t,e),jt(e),n&512&&(Ue||a===null||Zt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[wl]||r[rt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),at(r,n,a),r[rt]=e,Ke(r),n=r;break e;case"link":var d=gh("link","href",i).get(n+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(r=d[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}r=i.createElement(n),at(r,n,a),i.head.appendChild(r);break;case"meta":if(d=gh("meta","content",i).get(n+(a.content||""))){for(m=0;m<d.length;m++)if(r=d[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}r=i.createElement(n),at(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[rt]=e,Ke(r),n=r}e.stateNode=n}else vh(i,e.type,e.stateNode);else e.stateNode=ph(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?vh(i,e.type,e.stateNode):ph(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Wu(e,e.memoizedProps,a.memoizedProps)}break;case 27:St(t,e),jt(e),n&512&&(Ue||a===null||Zt(a,a.return)),a!==null&&n&4&&Wu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(St(t,e),jt(e),n&512&&(Ue||a===null||Zt(a,a.return)),e.flags&32){i=e.stateNode;try{En(i,"")}catch(O){Ee(e,e.return,O)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Wu(e,i,a!==null?a.memoizedProps:i)),n&1024&&(ec=!0);break;case 6:if(St(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(O){Ee(e,e.return,O)}}break;case 3:if(_r=null,i=Ht,Ht=Or(t.containerInfo),St(t,e),Ht=i,jt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(O){Ee(e,e.return,O)}ec&&(ec=!1,wm(e));break;case 4:n=Ht,Ht=Or(e.stateNode.containerInfo),St(t,e),jt(e),Ht=n;break;case 12:St(t,e),jt(e);break;case 13:St(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oc=Vt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,tc(e,n)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,T=fa,M=Ue;if(fa=T||i,Ue=M||v,St(t,e),Ue=M,fa=T,jt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||fa||Ue||dn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)d=r.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=v.stateNode;var N=v.memoizedProps.style,z=N!=null&&N.hasOwnProperty("display")?N.display:null;m.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(O){Ee(v,v.return,O)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(O){Ee(v,v.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,tc(e,a))));break;case 19:St(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,tc(e,n)));break;case 30:break;case 21:break;default:St(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(pm(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=Pu(e);gr(e,r,i);break;case 5:var d=a.stateNode;a.flags&32&&(En(d,""),a.flags&=-33);var m=Pu(e);gr(e,m,d);break;case 3:case 4:var v=a.stateNode.containerInfo,T=Pu(e);Iu(e,T,v);break;default:throw Error(c(161))}}catch(M){Ee(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bm(e,t.alternate,t),t=t.sibling}function dn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Da(4,t,t.return),dn(t);break;case 1:Zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&mm(t,t.return,a),dn(t);break;case 27:ui(t.stateNode);case 26:case 5:Zt(t,t.return),dn(t);break;case 22:t.memoizedState===null&&dn(t);break;case 30:dn(t);break;default:dn(t)}e=e.sibling}}function $a(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,d=r.flags;switch(r.tag){case 0:case 11:case 15:$a(i,r,a),Pl(4,r);break;case 1:if($a(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Ee(n,n.return,T)}if(n=r,i=n.updateQueue,i!==null){var m=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Wd(v[i],m)}catch(T){Ee(n,n.return,T)}}a&&d&64&&fm(r),Il(r,r.return);break;case 27:gm(r);case 26:case 5:$a(i,r,a),a&&n===null&&d&4&&hm(r),Il(r,r.return);break;case 12:$a(i,r,a);break;case 13:$a(i,r,a),a&&d&4&&Sm(i,r);break;case 22:r.memoizedState===null&&$a(i,r,a),Il(r,r.return);break;case 30:break;default:$a(i,r,a)}t=t.sibling}}function ac(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bl(a))}function nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function Kt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(e,t,a,n),t=t.sibling}function Am(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,a,n),i&2048&&Pl(9,t);break;case 1:Kt(e,t,a,n);break;case 3:Kt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e)));break;case 12:if(i&2048){Kt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,d=r.id,m=r.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ee(t,t.return,v)}}else Kt(e,t,a,n);break;case 13:Kt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,d=t.alternate,t.memoizedState!==null?r._visibility&2?Kt(e,t,a,n):ei(e,t):r._visibility&2?Kt(e,t,a,n):(r._visibility|=2,Qn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&ac(d,t);break;case 24:Kt(e,t,a,n),i&2048&&nc(t.alternate,t);break;default:Kt(e,t,a,n)}}function Qn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,d=t,m=a,v=n,T=d.flags;switch(d.tag){case 0:case 11:case 15:Qn(r,d,m,v,i),Pl(8,d);break;case 23:break;case 22:var M=d.stateNode;d.memoizedState!==null?M._visibility&2?Qn(r,d,m,v,i):ei(r,d):(M._visibility|=2,Qn(r,d,m,v,i)),i&&T&2048&&ac(d.alternate,d);break;case 24:Qn(r,d,m,v,i),i&&T&2048&&nc(d.alternate,d);break;default:Qn(r,d,m,v,i)}t=t.sibling}}function ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ei(a,n),i&2048&&ac(n.alternate,n);break;case 24:ei(a,n),i&2048&&nc(n.alternate,n);break;default:ei(a,n)}t=t.sibling}}var ti=8192;function Xn(e){if(e.subtreeFlags&ti)for(e=e.child;e!==null;)Cm(e),e=e.sibling}function Cm(e){switch(e.tag){case 26:Xn(e),e.flags&ti&&e.memoizedState!==null&&Bg(Ht,e.memoizedState,e.memoizedProps);break;case 5:Xn(e);break;case 3:case 4:var t=Ht;Ht=Or(e.stateNode.containerInfo),Xn(e),Ht=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ti,ti=16777216,Xn(e),ti=t):Xn(e));break;default:Xn(e)}}function Em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Fe=n,zm(n,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tm(e),e=e.sibling}function Tm(e){switch(e.tag){case 0:case 11:case 15:ai(e),e.flags&2048&&Da(9,e,e.return);break;case 3:ai(e);break;case 12:ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vr(e)):ai(e);break;default:ai(e)}}function vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Fe=n,zm(n,e)}Em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Da(8,t,t.return),vr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,vr(t));break;default:vr(t)}e=e.sibling}}function zm(e,t){for(;Fe!==null;){var a=Fe;switch(a.tag){case 0:case 11:case 15:Da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Bl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Fe=n;else e:for(a=e;Fe!==null;){n=Fe;var i=n.sibling,r=n.return;if(ym(n),n===a){Fe=null;break e}if(i!==null){i.return=r,Fe=i;break e}Fe=r}}}var eg={getCacheForType:function(e){var t=ot(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},tg=typeof WeakMap=="function"?WeakMap:Map,xe=0,ze=null,fe=null,pe=0,Se=0,wt=null,Na=!1,Zn=!1,lc=!1,ha=0,Ne=0,qa=0,fn=0,ic=0,Nt=0,Kn=0,ni=null,gt=null,rc=!1,oc=0,br=1/0,yr=null,Ua=null,tt=0,Ba=null,Jn=null,Fn=0,uc=0,cc=null,Om=null,li=0,sc=null;function At(){if((xe&2)!==0&&pe!==0)return pe&-pe;if(D.T!==null){var e=Un;return e!==0?e:vc()}return Vs()}function Rm(){Nt===0&&(Nt=(pe&536870912)===0||ve?ks():536870912);var e=$t.current;return e!==null&&(e.flags|=32),Nt}function Ct(e,t,a){(e===ze&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Wn(e,0),Ha(e,pe,Nt,!1)),jl(e,a),((xe&2)===0||e!==ze)&&(e===ze&&((xe&2)===0&&(fn|=a),Ne===4&&Ha(e,pe,Nt,!1)),Jt(e))}function _m(e,t,a){if((xe&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Sl(e,t),i=n?lg(e,t):mc(e,t,!0),r=n;do{if(i===0){Zn&&!n&&Ha(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!ag(a)){i=mc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;i=ni;var v=m.current.memoizedState.isDehydrated;if(v&&(Wn(m,d).flags|=256),d=mc(m,d,!1),d!==2){if(lc&&!v){m.errorRecoveryDisabledLanes|=r,fn|=r,i=4;break e}r=gt,gt=i,r!==null&&(gt===null?gt=r:gt.push.apply(gt,r))}i=d}if(r=!1,i!==2)continue}}if(i===1){Wn(e,0),Ha(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ha(n,t,Nt,!Na);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=oc+300-Vt(),10<i)){if(Ha(n,t,Nt,!Na),Ri(n,0,!0)!==0)break e;n.timeoutHandle=rh(Dm.bind(null,n,a,gt,yr,rc,t,Nt,fn,Kn,Na,r,2,-0,0),i);break e}Dm(n,a,gt,yr,rc,t,Nt,fn,Kn,Na,r,0,-0,0)}}break}while(!0);Jt(e)}function Dm(e,t,a,n,i,r,d,m,v,T,M,N,z,O){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(di={stylesheets:null,count:0,unsuspend:Ug},Cm(t),N=Hg(),N!==null)){e.cancelPendingCommit=N(Hm.bind(null,e,t,r,a,n,i,d,m,v,M,1,z,O)),Ha(e,r,d,!T);return}Hm(e,t,r,a,n,i,d,m,v)}function ag(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!yt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ha(e,t,a,n){t&=~ic,t&=~fn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-bt(i),d=1<<r;n[r]=-1,i&=~d}a!==0&&Ls(e,a,t)}function xr(){return(xe&6)===0?(ii(0),!1):!0}function dc(){if(fe!==null){if(Se===0)var e=fe.return;else e=fe,ra=rn=null,zu(e),Yn=null,Jl=0,e=fe;for(;e!==null;)dm(e.alternate,e),e=e.return;fe=null}}function Wn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),dc(),ze=e,fe=a=na(e.current,null),pe=t,Se=0,wt=null,Na=!1,Zn=Sl(e,t),lc=!1,Kn=Nt=ic=fn=qa=Ne=0,gt=ni=null,rc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-bt(n),r=1<<i;t|=e[i],n&=~r}return ha=t,Li(),a}function Mm(e,t){ue=null,D.H=or,t===kl||t===Wi?(t=Jd(),Se=3):t===Xd?(t=Jd(),Se=4):Se=t===Wf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,fe===null&&(Ne=1,fr(e,Rt(t,e.current)))}function $m(){var e=D.H;return D.H=or,e===null?or:e}function Nm(){var e=D.A;return D.A=eg,e}function fc(){Ne=4,Na||(pe&4194048)!==pe&&$t.current!==null||(Zn=!0),(qa&134217727)===0&&(fn&134217727)===0||ze===null||Ha(ze,pe,Nt,!1)}function mc(e,t,a){var n=xe;xe|=2;var i=$m(),r=Nm();(ze!==e||pe!==t)&&(yr=null,Wn(e,t)),t=!1;var d=Ne;e:do try{if(Se!==0&&fe!==null){var m=fe,v=wt;switch(Se){case 8:dc(),d=6;break e;case 3:case 2:case 9:case 6:$t.current===null&&(t=!0);var T=Se;if(Se=0,wt=null,Pn(e,m,v,T),a&&Zn){d=0;break e}break;default:T=Se,Se=0,wt=null,Pn(e,m,v,T)}}ng(),d=Ne;break}catch(M){Mm(e,M)}while(!0);return t&&e.shellSuspendCounter++,ra=rn=null,xe=n,D.H=i,D.A=r,fe===null&&(ze=null,pe=0,Li()),d}function ng(){for(;fe!==null;)qm(fe)}function lg(e,t){var a=xe;xe|=2;var n=$m(),i=Nm();ze!==e||pe!==t?(yr=null,br=Vt()+500,Wn(e,t)):Zn=Sl(e,t);e:do try{if(Se!==0&&fe!==null){t=fe;var r=wt;t:switch(Se){case 1:Se=0,wt=null,Pn(e,t,r,1);break;case 2:case 9:if(Zd(r)){Se=0,wt=null,Um(t);break}t=function(){Se!==2&&Se!==9||ze!==e||(Se=7),Jt(e)},r.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Zd(r)?(Se=0,wt=null,Um(t)):(Se=0,wt=null,Pn(e,t,r,7));break;case 5:var d=null;switch(fe.tag){case 26:d=fe.memoizedState;case 5:case 27:var m=fe;if(!d||bh(d)){Se=0,wt=null;var v=m.sibling;if(v!==null)fe=v;else{var T=m.return;T!==null?(fe=T,Sr(T)):fe=null}break t}}Se=0,wt=null,Pn(e,t,r,5);break;case 6:Se=0,wt=null,Pn(e,t,r,6);break;case 8:dc(),Ne=6;break e;default:throw Error(c(462))}}ig();break}catch(M){Mm(e,M)}while(!0);return ra=rn=null,D.H=n,D.A=i,xe=a,fe!==null?0:(ze=null,pe=0,Li(),Ne)}function ig(){for(;fe!==null&&!T1();)qm(fe)}function qm(e){var t=cm(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function Um(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=nm(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=nm(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:zu(t);default:dm(a,t),t=fe=Ud(t,ha),t=cm(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function Pn(e,t,a,n){ra=rn=null,zu(t),Yn=null,Jl=0;var i=t.return;try{if(K0(e,i,t,a,pe)){Ne=1,fr(e,Rt(a,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;Ne=1,fr(e,Rt(a,e.current)),fe=null;return}t.flags&32768?(ve||n===1?e=!0:Zn||(pe&536870912)!==0?e=!1:(Na=e=!0,(n===2||n===9||n===3||n===6)&&(n=$t.current,n!==null&&n.tag===13&&(n.flags|=16384))),Bm(t,e)):Sr(t)}function Sr(e){var t=e;do{if((t.flags&32768)!==0){Bm(t,Na);return}e=t.return;var a=F0(t.alternate,t,ha);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ne===0&&(Ne=5)}function Bm(e,t){do{var a=W0(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Ne=6,fe=null}function Hm(e,t,a,n,i,r,d,m,v){e.cancelPendingCommit=null;do jr();while(tt!==0);if((xe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=nu,U1(e,a,r,d,m,v),e===ze&&(fe=ze=null,pe=0),Jn=t,Ba=e,Fn=a,uc=r,cc=i,Om=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cg(Ti,function(){return Vm(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=Y.p,Y.p=2,d=xe,xe|=4;try{P0(e,t,a)}finally{xe=d,Y.p=i,D.T=n}}tt=1,km(),Gm(),Lm()}}function km(){if(tt===1){tt=0;var e=Ba,t=Jn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=Y.p;Y.p=2;var i=xe;xe|=4;try{jm(t,e);var r=Cc,d=Td(e.containerInfo),m=r.focusedElem,v=r.selectionRange;if(d!==m&&m&&m.ownerDocument&&Ed(m.ownerDocument.documentElement,m)){if(v!==null&&Po(m)){var T=v.start,M=v.end;if(M===void 0&&(M=T),"selectionStart"in m)m.selectionStart=T,m.selectionEnd=Math.min(M,m.value.length);else{var N=m.ownerDocument||document,z=N&&N.defaultView||window;if(z.getSelection){var O=z.getSelection(),ne=m.textContent.length,ee=Math.min(v.start,ne),Ae=v.end===void 0?ee:Math.min(v.end,ne);!O.extend&&ee>Ae&&(d=Ae,Ae=ee,ee=d);var A=Cd(m,ee),S=Cd(m,Ae);if(A&&S&&(O.rangeCount!==1||O.anchorNode!==A.node||O.anchorOffset!==A.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var E=N.createRange();E.setStart(A.node,A.offset),O.removeAllRanges(),ee>Ae?(O.addRange(E),O.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),O.addRange(E))}}}}for(N=[],O=m;O=O.parentNode;)O.nodeType===1&&N.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<N.length;m++){var $=N[m];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}$r=!!Ac,Cc=Ac=null}finally{xe=i,Y.p=n,D.T=a}}e.current=t,tt=2}}function Gm(){if(tt===2){tt=0;var e=Ba,t=Jn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=Y.p;Y.p=2;var i=xe;xe|=4;try{bm(e,t.alternate,t)}finally{xe=i,Y.p=n,D.T=a}}tt=3}}function Lm(){if(tt===4||tt===3){tt=0,z1();var e=Ba,t=Jn,a=Fn,n=Om;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tt=5:(tt=0,Jn=Ba=null,Ym(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ua=null),_o(a),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,i=Y.p,Y.p=2,D.T=null;try{for(var r=e.onRecoverableError,d=0;d<n.length;d++){var m=n[d];r(m.value,{componentStack:m.stack})}}finally{D.T=t,Y.p=i}}(Fn&3)!==0&&jr(),Jt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===sc?li++:(li=0,sc=e):li=0,ii(0)}}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function jr(e){return km(),Gm(),Lm(),Vm()}function Vm(){if(tt!==5)return!1;var e=Ba,t=uc;uc=0;var a=_o(Fn),n=D.T,i=Y.p;try{Y.p=32>a?32:a,D.T=null,a=cc,cc=null;var r=Ba,d=Fn;if(tt=0,Jn=Ba=null,Fn=0,(xe&6)!==0)throw Error(c(331));var m=xe;if(xe|=4,Tm(r.current),Am(r,r.current,d,a),xe=m,ii(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(xl,r)}catch{}return!0}finally{Y.p=i,D.T=n,Ym(e,t)}}function Qm(e,t,a){t=Rt(a,t),t=Lu(e.stateNode,t,2),e=za(e,t,2),e!==null&&(jl(e,2),Jt(e))}function Ee(e,t,a){if(e.tag===3)Qm(e,e,a);else for(;t!==null;){if(t.tag===3){Qm(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ua===null||!Ua.has(n))){e=Rt(a,e),a=Jf(2),n=za(t,a,2),n!==null&&(Ff(a,n,t,e),jl(n,2),Jt(n));break}}t=t.return}}function hc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new tg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(lc=!0,i.add(a),e=rg.bind(null,e,t,a),t.then(e,e))}function rg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(pe&a)===a&&(Ne===4||Ne===3&&(pe&62914560)===pe&&300>Vt()-oc?(xe&2)===0&&Wn(e,0):ic|=a,Kn===pe&&(Kn=0)),Jt(e)}function Xm(e,t){t===0&&(t=Gs()),e=Mn(e,t),e!==null&&(jl(e,t),Jt(e))}function og(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xm(e,a)}function ug(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Xm(e,a)}function cg(e,t){return To(e,t)}var wr=null,In=null,pc=!1,Ar=!1,gc=!1,mn=0;function Jt(e){e!==In&&e.next===null&&(In===null?wr=In=e:In=In.next=e),Ar=!0,pc||(pc=!0,dg())}function ii(e,t){if(!gc&&Ar){gc=!0;do for(var a=!1,n=wr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var d=n.suspendedLanes,m=n.pingedLanes;r=(1<<31-bt(42|e)+1)-1,r&=i&~(d&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Fm(n,r))}else r=pe,r=Ri(n,n===ze?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Sl(n,r)||(a=!0,Fm(n,r));n=n.next}while(a);gc=!1}}function sg(){Zm()}function Zm(){Ar=pc=!1;var e=0;mn!==0&&(yg()&&(e=mn),mn=0);for(var t=Vt(),a=null,n=wr;n!==null;){var i=n.next,r=Km(n,t);r===0?(n.next=null,a===null?wr=i:a.next=i,i===null&&(In=a)):(a=n,(e!==0||(r&3)!==0)&&(Ar=!0)),n=i}ii(e)}function Km(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var d=31-bt(r),m=1<<d,v=i[d];v===-1?((m&a)===0||(m&n)!==0)&&(i[d]=q1(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=ze,a=pe,a=Ri(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&zo(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Sl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&zo(n),_o(a)){case 2:case 8:a=Bs;break;case 32:a=Ti;break;case 268435456:a=Hs;break;default:a=Ti}return n=Jm.bind(null,e),a=To(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&zo(n),e.callbackPriority=2,e.callbackNode=null,2}function Jm(e,t){if(tt!==0&&tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jr()&&e.callbackNode!==a)return null;var n=pe;return n=Ri(e,e===ze?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(_m(e,n,t),Km(e,Vt()),e.callbackNode!=null&&e.callbackNode===a?Jm.bind(null,e):null)}function Fm(e,t){if(jr())return null;_m(e,t,!0)}function dg(){Sg(function(){(xe&6)!==0?To(Us,sg):Zm()})}function vc(){return mn===0&&(mn=ks()),mn}function Wm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ni(""+e)}function Pm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Wm((i[ft]||null).action),d=n.submitter;d&&(t=(t=d[ft]||null)?Wm(t.formAction):d.getAttribute("formAction"),t!==null&&(r=t,d=null));var m=new Hi("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(mn!==0){var v=d?Pm(i,d):new FormData(i);Uu(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=d?Pm(i,d):new FormData(i),Uu(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var bc=0;bc<au.length;bc++){var yc=au[bc],mg=yc.toLowerCase(),hg=yc[0].toUpperCase()+yc.slice(1);Bt(mg,"on"+hg)}Bt(Rd,"onAnimationEnd"),Bt(_d,"onAnimationIteration"),Bt(Dd,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(_0,"onTransitionRun"),Bt(D0,"onTransitionStart"),Bt(M0,"onTransitionCancel"),Bt(Md,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ri));function Im(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var d=n.length-1;0<=d;d--){var m=n[d],v=m.instance,T=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=T;try{r(i)}catch(M){dr(M)}i.currentTarget=null,r=v}else for(d=0;d<n.length;d++){if(m=n[d],v=m.instance,T=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=T;try{r(i)}catch(M){dr(M)}i.currentTarget=null,r=v}}}}function me(e,t){var a=t[Do];a===void 0&&(a=t[Do]=new Set);var n=e+"__bubble";a.has(n)||(eh(t,e,2,!1),a.add(n))}function xc(e,t,a){var n=0;t&&(n|=4),eh(a,e,n,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[Cr]){e[Cr]=!0,Xs.forEach(function(a){a!=="selectionchange"&&(pg.has(a)||xc(a,!1,e),xc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,xc("selectionchange",!1,t))}}function eh(e,t,a,n){switch(Ah(t)){case 2:var i=Lg;break;case 8:i=Yg;break;default:i=Nc}a=i.bind(null,t,a,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function jc(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===i)break;if(d===4)for(d=n.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;m!==null;){if(d=xn(m),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){n=r=d;continue e}m=m.parentNode}}n=n.return}rd(function(){var T=r,M=Go(a),N=[];e:{var z=$d.get(e);if(z!==void 0){var O=Hi,ne=e;switch(e){case"keypress":if(Ui(a)===0)break e;case"keydown":case"keyup":O=c0;break;case"focusin":ne="focus",O=Zo;break;case"focusout":ne="blur",O=Zo;break;case"beforeblur":case"afterblur":O=Zo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=W1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=f0;break;case Rd:case _d:case Dd:O=e0;break;case Md:O=h0;break;case"scroll":case"scrollend":O=J1;break;case"wheel":O=g0;break;case"copy":case"cut":case"paste":O=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=dd;break;case"toggle":case"beforetoggle":O=b0}var ee=(t&4)!==0,Ae=!ee&&(e==="scroll"||e==="scrollend"),A=ee?z!==null?z+"Capture":null:z;ee=[];for(var S=T,E;S!==null;){var $=S;if(E=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||E===null||A===null||($=Cl(S,A),$!=null&&ee.push(oi(S,$,E))),Ae)break;S=S.return}0<ee.length&&(z=new O(z,ne,null,a,M),N.push({event:z,listeners:ee}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",z&&a!==ko&&(ne=a.relatedTarget||a.fromElement)&&(xn(ne)||ne[yn]))break e;if((O||z)&&(z=M.window===M?M:(z=M.ownerDocument)?z.defaultView||z.parentWindow:window,O?(ne=a.relatedTarget||a.toElement,O=T,ne=ne?xn(ne):null,ne!==null&&(Ae=p(ne),ee=ne.tag,ne!==Ae||ee!==5&&ee!==27&&ee!==6)&&(ne=null)):(O=null,ne=T),O!==ne)){if(ee=cd,$="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=dd,$="onPointerLeave",A="onPointerEnter",S="pointer"),Ae=O==null?z:Al(O),E=ne==null?z:Al(ne),z=new ee($,S+"leave",O,a,M),z.target=Ae,z.relatedTarget=E,$=null,xn(M)===T&&(ee=new ee(A,S+"enter",ne,a,M),ee.target=E,ee.relatedTarget=Ae,$=ee),Ae=$,O&&ne)t:{for(ee=O,A=ne,S=0,E=ee;E;E=el(E))S++;for(E=0,$=A;$;$=el($))E++;for(;0<S-E;)ee=el(ee),S--;for(;0<E-S;)A=el(A),E--;for(;S--;){if(ee===A||A!==null&&ee===A.alternate)break t;ee=el(ee),A=el(A)}ee=null}else ee=null;O!==null&&th(N,z,O,ee,!1),ne!==null&&Ae!==null&&th(N,Ae,ne,ee,!0)}}e:{if(z=T?Al(T):window,O=z.nodeName&&z.nodeName.toLowerCase(),O==="select"||O==="input"&&z.type==="file")var J=yd;else if(vd(z))if(xd)J=z0;else{J=E0;var ce=C0}else O=z.nodeName,!O||O.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?T&&Ho(T.elementType)&&(J=yd):J=T0;if(J&&(J=J(e,T))){bd(N,J,a,M);break e}ce&&ce(e,z,T),e==="focusout"&&T&&z.type==="number"&&T.memoizedProps.value!=null&&Bo(z,"number",z.value)}switch(ce=T?Al(T):window,e){case"focusin":(vd(ce)||ce.contentEditable==="true")&&(Rn=ce,Io=T,Ml=null);break;case"focusout":Ml=Io=Rn=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,zd(N,a,M);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":zd(N,a,M)}var F;if(Jo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else On?pd(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(fd&&a.locale!=="ko"&&(On||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&On&&(F=od()):(Aa=M,Vo="value"in Aa?Aa.value:Aa.textContent,On=!0)),ce=Er(T,ae),0<ce.length&&(ae=new sd(ae,e,null,a,M),N.push({event:ae,listeners:ce}),F?ae.data=F:(F=gd(a),F!==null&&(ae.data=F)))),(F=x0?S0(e,a):j0(e,a))&&(ae=Er(T,"onBeforeInput"),0<ae.length&&(ce=new sd("onBeforeInput","beforeinput",null,a,M),N.push({event:ce,listeners:ae}),ce.data=F)),fg(N,e,T,a,M)}Im(N,t)})}function oi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Er(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Cl(e,a),i!=null&&n.unshift(oi(e,i,r)),i=Cl(e,t),i!=null&&n.push(oi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function el(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function th(e,t,a,n,i){for(var r=t._reactName,d=[];a!==null&&a!==n;){var m=a,v=m.alternate,T=m.stateNode;if(m=m.tag,v!==null&&v===n)break;m!==5&&m!==26&&m!==27||T===null||(v=T,i?(T=Cl(a,r),T!=null&&d.unshift(oi(a,T,v))):i||(T=Cl(a,r),T!=null&&d.push(oi(a,T,v)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var gg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(vg,"")}function nh(e,t){return t=ah(t),ah(e)===t}function Tr(){}function we(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||En(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&En(e,""+n);break;case"className":Di(e,"class",n);break;case"tabIndex":Di(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(e,a,n);break;case"style":ld(e,n,r);break;case"data":if(t!=="object"){Di(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ni(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",i.name,i,null),we(e,t,"formEncType",i.formEncType,i,null),we(e,t,"formMethod",i.formMethod,i,null),we(e,t,"formTarget",i.formTarget,i,null)):(we(e,t,"encType",i.encType,i,null),we(e,t,"method",i.method,i,null),we(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ni(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Tr);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ni(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":me("beforetoggle",e),me("toggle",e),_i(e,"popover",n);break;case"xlinkActuate":ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ta(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ta(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ta(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ta(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":_i(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Z1.get(a)||a,_i(e,a,n))}}function wc(e,t,a,n,i,r){switch(a){case"style":ld(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?En(e,n):(typeof n=="number"||typeof n=="bigint")&&En(e,""+n);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Tr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ft]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):_i(e,a,n)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var d=a[r];if(d!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,r,d,a,null)}}i&&we(e,t,"srcSet",a.srcSet,a,null),n&&we(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=r=d=i=null,v=null,T=null;for(n in a)if(a.hasOwnProperty(n)){var M=a[n];if(M!=null)switch(n){case"name":i=M;break;case"type":d=M;break;case"checked":v=M;break;case"defaultChecked":T=M;break;case"value":r=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:we(e,t,n,M,a,null)}}ed(e,r,m,v,T,d,i,!1),Mi(e);return;case"select":me("invalid",e),n=d=r=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":d=m;break;case"multiple":n=m;default:we(e,t,i,m,a,null)}t=r,a=d,e.multiple=!!n,t!=null?Cn(e,!!n,t,!1):a!=null&&Cn(e,!!n,a,!0);return;case"textarea":me("invalid",e),r=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":n=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:we(e,t,d,m,a,null)}ad(e,n,i,r),Mi(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:we(e,t,v,n,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(n=0;n<ri.length;n++)me(ri[n],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,T,n,a,null)}return;default:if(Ho(t)){for(M in a)a.hasOwnProperty(M)&&(n=a[M],n!==void 0&&wc(e,t,M,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&we(e,t,m,n,a,null))}function bg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,d=null,m=null,v=null,T=null,M=null;for(O in a){var N=a[O];if(a.hasOwnProperty(O)&&N!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":v=N;default:n.hasOwnProperty(O)||we(e,t,O,null,n,N)}}for(var z in n){var O=n[z];if(N=a[z],n.hasOwnProperty(z)&&(O!=null||N!=null))switch(z){case"type":r=O;break;case"name":i=O;break;case"checked":T=O;break;case"defaultChecked":M=O;break;case"value":d=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:O!==N&&we(e,t,z,O,n,N)}}Uo(e,d,m,v,T,M,r,i);return;case"select":O=d=m=z=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":O=v;default:n.hasOwnProperty(r)||we(e,t,r,null,n,v)}for(i in n)if(r=n[i],v=a[i],n.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":z=r;break;case"defaultValue":m=r;break;case"multiple":d=r;default:r!==v&&we(e,t,i,r,n,v)}t=m,a=d,n=O,z!=null?Cn(e,!!a,z,!1):!!n!=!!a&&(t!=null?Cn(e,!!a,t,!0):Cn(e,!!a,a?[]:"",!1));return;case"textarea":O=z=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(e,t,m,null,n,i)}for(d in n)if(i=n[d],r=a[d],n.hasOwnProperty(d)&&(i!=null||r!=null))switch(d){case"value":z=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&we(e,t,d,i,n,r)}td(e,z,O);return;case"option":for(var ne in a)if(z=a[ne],a.hasOwnProperty(ne)&&z!=null&&!n.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:we(e,t,ne,null,n,z)}for(v in n)if(z=n[v],O=a[v],n.hasOwnProperty(v)&&z!==O&&(z!=null||O!=null))switch(v){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:we(e,t,v,z,n,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)z=a[ee],a.hasOwnProperty(ee)&&z!=null&&!n.hasOwnProperty(ee)&&we(e,t,ee,null,n,z);for(T in n)if(z=n[T],O=a[T],n.hasOwnProperty(T)&&z!==O&&(z!=null||O!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:we(e,t,T,z,n,O)}return;default:if(Ho(t)){for(var Ae in a)z=a[Ae],a.hasOwnProperty(Ae)&&z!==void 0&&!n.hasOwnProperty(Ae)&&wc(e,t,Ae,void 0,n,z);for(M in n)z=n[M],O=a[M],!n.hasOwnProperty(M)||z===O||z===void 0&&O===void 0||wc(e,t,M,z,n,O);return}}for(var A in a)z=a[A],a.hasOwnProperty(A)&&z!=null&&!n.hasOwnProperty(A)&&we(e,t,A,null,n,z);for(N in n)z=n[N],O=a[N],!n.hasOwnProperty(N)||z===O||z==null&&O==null||we(e,t,N,z,n,O)}var Ac=null,Cc=null;function zr(e){return e.nodeType===9?e:e.ownerDocument}function lh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ih(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tc=null;function yg(){var e=window.event;return e&&e.type==="popstate"?e===Tc?!1:(Tc=e,!0):(Tc=null,!1)}var rh=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(e){return oh.resolve(null).then(e).catch(jg)}:rh;function jg(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function uh(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var d=e.ownerDocument;if(a&1&&ui(d.documentElement),a&2&&ui(d.body),a&4)for(a=d.head,ui(a),d=a.firstChild;d;){var m=d.nextSibling,v=d.nodeName;d[wl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=m}}if(i===0){e.removeChild(r),gi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);gi(t)}function zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zc(a),Mo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wg(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function Ag(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cg(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Rc=null;function ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function sh(e,t,a){switch(t=zr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mo(e)}var qt=new Map,dh=new Set;function Or(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=Y.d;Y.d={f:Eg,r:Tg,D:zg,C:Og,L:Rg,m:_g,X:Mg,S:Dg,M:$g};function Eg(){var e=pa.f(),t=xr();return e||t}function Tg(e){var t=Sn(e);t!==null&&t.tag===5&&t.type==="form"?_f(t):pa.r(e)}var tl=typeof document>"u"?null:document;function fh(e,t,a){var n=tl;if(n&&typeof t=="string"&&t){var i=Ot(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),dh.has(i)||(dh.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),at(t,"link",e),Ke(t),n.head.appendChild(t)))}}function zg(e){pa.D(e),fh("dns-prefetch",e,null)}function Og(e,t){pa.C(e,t),fh("preconnect",e,t)}function Rg(e,t,a){pa.L(e,t,a);var n=tl;if(n&&e&&t){var i='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ot(a.imageSizes)+'"]')):i+='[href="'+Ot(e)+'"]';var r=i;switch(t){case"style":r=al(e);break;case"script":r=nl(e)}qt.has(r)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ci(r))||t==="script"&&n.querySelector(si(r))||(t=n.createElement("link"),at(t,"link",e),Ke(t),n.head.appendChild(t)))}}function _g(e,t){pa.m(e,t);var a=tl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ot(n)+'"][href="'+Ot(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=nl(e)}if(!qt.has(r)&&(e=w({rel:"modulepreload",href:e},t),qt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(r)))return}n=a.createElement("link"),at(n,"link",e),Ke(n),a.head.appendChild(n)}}}function Dg(e,t,a){pa.S(e,t,a);var n=tl;if(n&&e){var i=jn(n).hoistableStyles,r=al(e);t=t||"default";var d=i.get(r);if(!d){var m={loading:0,preload:null};if(d=n.querySelector(ci(r)))m.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qt.get(r))&&_c(e,a);var v=d=n.createElement("link");Ke(v),at(v,"link",e),v._p=new Promise(function(T,M){v.onload=T,v.onerror=M}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Rr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:m},i.set(r,d)}}}function Mg(e,t){pa.X(e,t);var a=tl;if(a&&e){var n=jn(a).hoistableScripts,i=nl(e),r=n.get(i);r||(r=a.querySelector(si(i)),r||(e=w({src:e,async:!0},t),(t=qt.get(i))&&Dc(e,t),r=a.createElement("script"),Ke(r),at(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function $g(e,t){pa.M(e,t);var a=tl;if(a&&e){var n=jn(a).hoistableScripts,i=nl(e),r=n.get(i);r||(r=a.querySelector(si(i)),r||(e=w({src:e,async:!0,type:"module"},t),(t=qt.get(i))&&Dc(e,t),r=a.createElement("script"),Ke(r),at(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function mh(e,t,a,n){var i=(i=te.current)?Or(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=al(a.href),a=jn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=al(a.href);var r=jn(i).hoistableStyles,d=r.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,d),(r=i.querySelector(ci(e)))&&!r._p&&(d.instance=r,d.state.loading=5),qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(e,a),r||Ng(i,e,a,d.state))),t&&n===null)throw Error(c(528,""));return d}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=nl(a),a=jn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function al(e){return'href="'+Ot(e)+'"'}function ci(e){return'link[rel="stylesheet"]['+e+"]"}function hh(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Ng(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),at(t,"link",a),Ke(t),e.head.appendChild(t))}function nl(e){return'[src="'+Ot(e)+'"]'}function si(e){return"script[async]"+e}function ph(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(n)return t.instance=n,Ke(n),n;var i=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ke(n),at(n,"style",i),Rr(n,a.precedence,e),t.instance=n;case"stylesheet":i=al(a.href);var r=e.querySelector(ci(i));if(r)return t.state.loading|=4,t.instance=r,Ke(r),r;n=hh(a),(i=qt.get(i))&&_c(n,i),r=(e.ownerDocument||e).createElement("link"),Ke(r);var d=r;return d._p=new Promise(function(m,v){d.onload=m,d.onerror=v}),at(r,"link",n),t.state.loading|=4,Rr(r,a.precedence,e),t.instance=r;case"script":return r=nl(a.src),(i=e.querySelector(si(r)))?(t.instance=i,Ke(i),i):(n=a,(i=qt.get(r))&&(n=w({},a),Dc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ke(i),at(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Rr(n,a.precedence,e));return t.instance}function Rr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,d=0;d<n.length;d++){var m=n[d];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function _c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _r=null;function gh(e,t,a){if(_r===null){var n=new Map,i=_r=new Map;i.set(a,n)}else i=_r,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[wl]||r[rt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var d=r.getAttribute(t)||"";d=e+d;var m=n.get(d);m?m.push(r):n.set(d,[r])}}return n}function vh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function qg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var di=null;function Ug(){}function Bg(e,t,a){if(di===null)throw Error(c(475));var n=di;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=al(a.href),r=e.querySelector(ci(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Dr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Ke(r);return}r=e.ownerDocument||e,a=hh(a),(i=qt.get(i))&&_c(a,i),r=r.createElement("link"),Ke(r);var d=r;d._p=new Promise(function(m,v){d.onload=m,d.onerror=v}),at(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Dr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Hg(){if(di===null)throw Error(c(475));var e=di;return e.stylesheets&&e.count===0&&Mc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Dr(){if(this.count--,this.count===0){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mr=null;function Mc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mr=new Map,t.forEach(kg,e),Mr=null,Dr.call(e))}function kg(e,t){if(!(t.state.loading&4)){var a=Mr.get(e);if(a)var n=a.get(null);else{a=new Map,Mr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var d=i[r];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),r=a.get(d)||n,r===n&&a.set(null,i),a.set(d,i),this.count++,n=Dr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:Z,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Gg(e,t,a,n,i,r,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.hiddenUpdates=Oo(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function yh(e,t,a,n,i,r,d,m,v,T,M,N){return e=new Gg(e,t,a,d,m,v,T,N),t=1,r===!0&&(t|=24),r=xt(3,null,null,t),e.current=r,r.stateNode=e,t=hu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},bu(r),e}function xh(e){return e?(e=$n,e):$n}function Sh(e,t,a,n,i,r){i=xh(i),n.context===null?n.context=i:n.pendingContext=i,n=Ta(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=za(e,n,t),a!==null&&(Ct(a,e,t),Ll(a,e,t))}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $c(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function wh(e){if(e.tag===13){var t=Mn(e,67108864);t!==null&&Ct(t,e,67108864),$c(e,67108864)}}var $r=!0;function Lg(e,t,a,n){var i=D.T;D.T=null;var r=Y.p;try{Y.p=2,Nc(e,t,a,n)}finally{Y.p=r,D.T=i}}function Yg(e,t,a,n){var i=D.T;D.T=null;var r=Y.p;try{Y.p=8,Nc(e,t,a,n)}finally{Y.p=r,D.T=i}}function Nc(e,t,a,n){if($r){var i=qc(n);if(i===null)jc(e,t,n,Nr,a),Ch(e,n);else if(Qg(i,e,t,a,n))n.stopPropagation();else if(Ch(e,n),t&4&&-1<Vg.indexOf(e)){for(;i!==null;){var r=Sn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var d=Ja(r.pendingLanes);if(d!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var v=1<<31-bt(d);m.entanglements[1]|=v,d&=~v}Jt(r),(xe&6)===0&&(br=Vt()+500,ii(0))}}break;case 13:m=Mn(r,2),m!==null&&Ct(m,r,2),xr(),$c(r,2)}if(r=qc(n),r===null&&jc(e,t,n,Nr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else jc(e,t,n,null,a)}}function qc(e){return e=Go(e),Uc(e)}var Nr=null;function Uc(e){if(Nr=null,e=xn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function Ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O1()){case Us:return 2;case Bs:return 8;case Ti:case R1:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var Bc=!1,Ga=null,La=null,Ya=null,mi=new Map,hi=new Map,Va=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ch(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function pi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Sn(t),t!==null&&wh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qg(e,t,a,n,i){switch(t){case"focusin":return Ga=pi(Ga,e,t,a,n,i),!0;case"dragenter":return La=pi(La,e,t,a,n,i),!0;case"mouseover":return Ya=pi(Ya,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return mi.set(r,pi(mi.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,hi.set(r,pi(hi.get(r)||null,e,t,a,n,i)),!0}return!1}function Eh(e){var t=xn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,B1(e.priority,function(){if(a.tag===13){var n=At();n=Ro(n);var i=Mn(a,n);i!==null&&Ct(i,a,n),$c(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=qc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);ko=n,a.target.dispatchEvent(n),ko=null}else return t=Sn(a),t!==null&&wh(t),e.blockedOn=a,!1;t.shift()}return!0}function Th(e,t,a){qr(e)&&a.delete(t)}function Xg(){Bc=!1,Ga!==null&&qr(Ga)&&(Ga=null),La!==null&&qr(La)&&(La=null),Ya!==null&&qr(Ya)&&(Ya=null),mi.forEach(Th),hi.forEach(Th)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Xg)))}var Br=null;function zh(e){Br!==e&&(Br=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Br===e&&(Br=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Uc(n||a)===null)continue;break}var r=Sn(a);r!==null&&(e.splice(t,3),t-=3,Uu(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function gi(e){function t(v){return Ur(v,e)}Ga!==null&&Ur(Ga,e),La!==null&&Ur(La,e),Ya!==null&&Ur(Ya,e),mi.forEach(t),hi.forEach(t);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],d=i[ft]||null;if(typeof r=="function")d||zh(a);else if(d){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,d=r[ft]||null)m=d.formAction;else if(Uc(i)!==null)continue}else m=d.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),zh(a)}}}function Hc(e){this._internalRoot=e}Hr.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=At();Sh(a,n,e,t,null,null)},Hr.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sh(e.current,2,null,e,null,null),xr(),t[yn]=null}};function Hr(e){this._internalRoot=e}Hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Va.length&&t!==0&&t<Va[a].priority;a++);Va.splice(a,0,e),a===0&&Eh(e)}};var Oh=u.version;if(Oh!=="19.1.1")throw Error(c(527,Oh,"19.1.1"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Zg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{xl=kr.inject(Zg),vt=kr}catch{}}return bi.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",i=Qf,r=Xf,d=Zf,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=yh(e,1,!1,null,null,a,n,i,r,d,m,null),e[yn]=t.current,Sc(e),new Hc(t)},bi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,i="",r=Qf,d=Xf,m=Zf,v=null,T=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(T=a.formState)),t=yh(e,1,!0,t,a??null,n,i,r,d,m,v,T),t.context=xh(null),a=t.current,n=At(),n=Ro(n),i=Ta(n),i.callback=null,za(a,i,n),a=n,t.current.lanes=a,jl(t,a),Jt(t),e[yn]=t.current,Sc(e),new Hr(t)},bi.version="19.1.1",bi}var Hh;function nv(){if(Hh)return Lc.exports;Hh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Lc.exports=av(),Lc.exports}var lv=nv();const iv=fp(lv);var Ie=function(){return Ie=Object.assign||function(u){for(var s,c=1,f=arguments.length;c<f;c++){s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(u[p]=s[p])}return u},Ie.apply(this,arguments)};function dl(l,u,s){if(s||arguments.length===2)for(var c=0,f=u.length,p;c<f;c++)(p||!(c in u))&&(p||(p=Array.prototype.slice.call(u,0,c)),p[c]=u[c]);return l.concat(p||Array.prototype.slice.call(u))}var Re="-ms-",Si="-moz-",ye="-webkit-",mp="comm",bo="rule",xs="decl",rv="@import",hp="@keyframes",ov="@layer",pp=Math.abs,Ss=String.fromCharCode,us=Object.assign;function uv(l,u){return Pe(l,0)^45?(((u<<2^Pe(l,0))<<2^Pe(l,1))<<2^Pe(l,2))<<2^Pe(l,3):0}function gp(l){return l.trim()}function ba(l,u){return(l=u.exec(l))?l[0]:l}function oe(l,u,s){return l.replace(u,s)}function to(l,u,s){return l.indexOf(u,s)}function Pe(l,u){return l.charCodeAt(u)|0}function fl(l,u,s){return l.slice(u,s)}function Ft(l){return l.length}function vp(l){return l.length}function xi(l,u){return u.push(l),l}function cv(l,u){return l.map(u).join("")}function kh(l,u){return l.filter(function(s){return!ba(s,u)})}var yo=1,ml=1,bp=0,Ut=0,ke=0,gl="";function xo(l,u,s,c,f,p,b,C){return{value:l,root:u,parent:s,type:c,props:f,children:p,line:yo,column:ml,length:b,return:"",siblings:C}}function Xa(l,u){return us(xo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function ll(l){for(;l.root;)l=Xa(l.root,{children:[l]});xi(l,l.siblings)}function sv(){return ke}function dv(){return ke=Ut>0?Pe(gl,--Ut):0,ml--,ke===10&&(ml=1,yo--),ke}function Gt(){return ke=Ut<bp?Pe(gl,Ut++):0,ml++,ke===10&&(ml=1,yo++),ke}function gn(){return Pe(gl,Ut)}function ao(){return Ut}function So(l,u){return fl(gl,l,u)}function cs(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fv(l){return yo=ml=1,bp=Ft(gl=l),Ut=0,[]}function mv(l){return gl="",l}function Xc(l){return gp(So(Ut-1,ss(l===91?l+2:l===40?l+1:l)))}function hv(l){for(;(ke=gn())&&ke<33;)Gt();return cs(l)>2||cs(ke)>3?"":" "}function pv(l,u){for(;--u&&Gt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return So(l,ao()+(u<6&&gn()==32&&Gt()==32))}function ss(l){for(;Gt();)switch(ke){case l:return Ut;case 34:case 39:l!==34&&l!==39&&ss(ke);break;case 40:l===41&&ss(l);break;case 92:Gt();break}return Ut}function gv(l,u){for(;Gt()&&l+ke!==57;)if(l+ke===84&&gn()===47)break;return"/*"+So(u,Ut-1)+"*"+Ss(l===47?l:Gt())}function vv(l){for(;!cs(gn());)Gt();return So(l,Ut)}function bv(l){return mv(no("",null,null,null,[""],l=fv(l),0,[0],l))}function no(l,u,s,c,f,p,b,C,y){for(var g=0,w=0,_=b,U=0,B=0,k=0,X=1,G=1,Q=1,H=0,Z="",le=f,K=p,ie=c,W=Z;G;)switch(k=H,H=Gt()){case 40:if(k!=108&&Pe(W,_-1)==58){to(W+=oe(Xc(H),"&","&\f"),"&\f",pp(g?C[g-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:W+=Xc(H);break;case 9:case 10:case 13:case 32:W+=hv(k);break;case 92:W+=pv(ao()-1,7);continue;case 47:switch(gn()){case 42:case 47:xi(yv(gv(Gt(),ao()),u,s,y),y);break;default:W+="/"}break;case 123*X:C[g++]=Ft(W)*Q;case 125*X:case 59:case 0:switch(H){case 0:case 125:G=0;case 59+w:Q==-1&&(W=oe(W,/\f/g,"")),B>0&&Ft(W)-_&&xi(B>32?Lh(W+";",c,s,_-1,y):Lh(oe(W," ","")+";",c,s,_-2,y),y);break;case 59:W+=";";default:if(xi(ie=Gh(W,u,s,g,w,f,C,Z,le=[],K=[],_,p),p),H===123)if(w===0)no(W,u,ie,ie,le,p,_,C,K);else switch(U===99&&Pe(W,3)===110?100:U){case 100:case 108:case 109:case 115:no(l,ie,ie,c&&xi(Gh(l,ie,ie,0,0,f,C,Z,f,le=[],_,K),K),f,K,_,C,c?le:K);break;default:no(W,ie,ie,ie,[""],K,0,C,K)}}g=w=B=0,X=Q=1,Z=W="",_=b;break;case 58:_=1+Ft(W),B=k;default:if(X<1){if(H==123)--X;else if(H==125&&X++==0&&dv()==125)continue}switch(W+=Ss(H),H*X){case 38:Q=w>0?1:(W+="\f",-1);break;case 44:C[g++]=(Ft(W)-1)*Q,Q=1;break;case 64:gn()===45&&(W+=Xc(Gt())),U=gn(),w=_=Ft(Z=W+=vv(ao())),H++;break;case 45:k===45&&Ft(W)==2&&(X=0)}}return p}function Gh(l,u,s,c,f,p,b,C,y,g,w,_){for(var U=f-1,B=f===0?p:[""],k=vp(B),X=0,G=0,Q=0;X<c;++X)for(var H=0,Z=fl(l,U+1,U=pp(G=b[X])),le=l;H<k;++H)(le=gp(G>0?B[H]+" "+Z:oe(Z,/&\f/g,B[H])))&&(y[Q++]=le);return xo(l,u,s,f===0?bo:C,y,g,w,_)}function yv(l,u,s,c){return xo(l,u,s,mp,Ss(sv()),fl(l,2,-2),0,c)}function Lh(l,u,s,c,f){return xo(l,u,s,xs,fl(l,0,c),fl(l,c+1,-1),c,f)}function yp(l,u,s){switch(uv(l,u)){case 5103:return ye+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+l+l;case 4789:return Si+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+l+Si+l+Re+l+l;case 5936:switch(Pe(l,u+11)){case 114:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return ye+l+Re+l+l;case 6165:return ye+l+Re+"flex-"+l+l;case 5187:return ye+l+oe(l,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Re+"flex-$1$2")+l;case 5443:return ye+l+Re+"flex-item-"+oe(l,/flex-|-self/g,"")+(ba(l,/flex-|baseline/)?"":Re+"grid-row-"+oe(l,/flex-|-self/g,""))+l;case 4675:return ye+l+Re+"flex-line-pack"+oe(l,/align-content|flex-|-self/g,"")+l;case 5548:return ye+l+Re+oe(l,"shrink","negative")+l;case 5292:return ye+l+Re+oe(l,"basis","preferred-size")+l;case 6060:return ye+"box-"+oe(l,"-grow","")+ye+l+Re+oe(l,"grow","positive")+l;case 4554:return ye+oe(l,/([^-])(transform)/g,"$1"+ye+"$2")+l;case 6187:return oe(oe(oe(l,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),l,"")+l;case 5495:case 3959:return oe(l,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return oe(oe(l,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+l+l;case 4200:if(!ba(l,/flex-|baseline/))return Re+"grid-column-align"+fl(l,u)+l;break;case 2592:case 3360:return Re+oe(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(c,f){return u=f,ba(c.props,/grid-\w+-end/)})?~to(l+(s=s[u].value),"span",0)?l:Re+oe(l,"-start","")+l+Re+"grid-row-span:"+(~to(s,"span",0)?ba(s,/\d+/):+ba(s,/\d+/)-+ba(l,/\d+/))+";":Re+oe(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(c){return ba(c.props,/grid-\w+-start/)})?l:Re+oe(oe(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return oe(l,/(.+)-inline(.+)/,ye+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(l)-1-u>6)switch(Pe(l,u+1)){case 109:if(Pe(l,u+4)!==45)break;case 102:return oe(l,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Si+(Pe(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~to(l,"stretch",0)?yp(oe(l,"stretch","fill-available"),u,s)+l:l}break;case 5152:case 5920:return oe(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,p,b,C,y,g){return Re+f+":"+p+g+(b?Re+f+"-span:"+(C?y:+y-+p)+g:"")+l});case 4949:if(Pe(l,u+6)===121)return oe(l,":",":"+ye)+l;break;case 6444:switch(Pe(l,Pe(l,14)===45?18:11)){case 120:return oe(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Pe(l,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Re+"$2box$3")+l;case 100:return oe(l,":",":"+Re)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(l,"scroll-","scroll-snap-")+l}return l}function uo(l,u){for(var s="",c=0;c<l.length;c++)s+=u(l[c],c,l,u)||"";return s}function xv(l,u,s,c){switch(l.type){case ov:if(l.children.length)break;case rv:case xs:return l.return=l.return||l.value;case mp:return"";case hp:return l.return=l.value+"{"+uo(l.children,c)+"}";case bo:if(!Ft(l.value=l.props.join(",")))return""}return Ft(s=uo(l.children,c))?l.return=l.value+"{"+s+"}":""}function Sv(l){var u=vp(l);return function(s,c,f,p){for(var b="",C=0;C<u;C++)b+=l[C](s,c,f,p)||"";return b}}function jv(l){return function(u){u.root||(u=u.return)&&l(u)}}function wv(l,u,s,c){if(l.length>-1&&!l.return)switch(l.type){case xs:l.return=yp(l.value,l.length,s);return;case hp:return uo([Xa(l,{value:oe(l.value,"@","@"+ye)})],c);case bo:if(l.length)return cv(s=l.props,function(f){switch(ba(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ll(Xa(l,{props:[oe(f,/:(read-\w+)/,":"+Si+"$1")]})),ll(Xa(l,{props:[f]})),us(l,{props:kh(s,c)});break;case"::placeholder":ll(Xa(l,{props:[oe(f,/:(plac\w+)/,":"+ye+"input-$1")]})),ll(Xa(l,{props:[oe(f,/:(plac\w+)/,":"+Si+"$1")]})),ll(Xa(l,{props:[oe(f,/:(plac\w+)/,Re+"input-$1")]})),ll(Xa(l,{props:[f]})),us(l,{props:kh(s,c)});break}return""})}}var Av={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et={},hl=typeof process<"u"&&Et!==void 0&&(Et.REACT_APP_SC_ATTR||Et.SC_ATTR)||"data-styled",xp="active",Sp="data-styled-version",jo="6.1.19",js=`/*!sc*/
`,co=typeof window<"u"&&typeof document<"u",Cv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==""?Et.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Et.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.SC_DISABLE_SPEEDY!==void 0&&Et.SC_DISABLE_SPEEDY!==""&&Et.SC_DISABLE_SPEEDY!=="false"&&Et.SC_DISABLE_SPEEDY),Ev={},wo=Object.freeze([]),pl=Object.freeze({});function jp(l,u,s){return s===void 0&&(s=pl),l.theme!==s.theme&&l.theme||u||s.theme}var wp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zv=/(^-|-$)/g;function Yh(l){return l.replace(Tv,"-").replace(zv,"")}var Ov=/(a)(d)/gi,Gr=52,Vh=function(l){return String.fromCharCode(l+(l>25?39:97))};function ds(l){var u,s="";for(u=Math.abs(l);u>Gr;u=u/Gr|0)s=Vh(u%Gr)+s;return(Vh(u%Gr)+s).replace(Ov,"$1-$2")}var Zc,Ap=5381,sl=function(l,u){for(var s=u.length;s;)l=33*l^u.charCodeAt(--s);return l},Cp=function(l){return sl(Ap,l)};function ws(l){return ds(Cp(l)>>>0)}function Rv(l){return l.displayName||l.name||"Component"}function Kc(l){return typeof l=="string"&&!0}var Ep=typeof Symbol=="function"&&Symbol.for,Tp=Ep?Symbol.for("react.memo"):60115,_v=Ep?Symbol.for("react.forward_ref"):60112,Dv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$v=((Zc={})[_v]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zc[Tp]=zp,Zc);function Qh(l){return("type"in(u=l)&&u.type.$$typeof)===Tp?zp:"$$typeof"in l?$v[l.$$typeof]:Dv;var u}var Nv=Object.defineProperty,qv=Object.getOwnPropertyNames,Xh=Object.getOwnPropertySymbols,Uv=Object.getOwnPropertyDescriptor,Bv=Object.getPrototypeOf,Zh=Object.prototype;function Op(l,u,s){if(typeof u!="string"){if(Zh){var c=Bv(u);c&&c!==Zh&&Op(l,c,s)}var f=qv(u);Xh&&(f=f.concat(Xh(u)));for(var p=Qh(l),b=Qh(u),C=0;C<f.length;++C){var y=f[C];if(!(y in Mv||s&&s[y]||b&&y in b||p&&y in p)){var g=Uv(u,y);try{Nv(l,y,g)}catch{}}}}return l}function vn(l){return typeof l=="function"}function As(l){return typeof l=="object"&&"styledComponentId"in l}function pn(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function so(l,u){if(l.length===0)return"";for(var s=l[0],c=1;c<l.length;c++)s+=l[c];return s}function ji(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function fs(l,u,s){if(s===void 0&&(s=!1),!s&&!ji(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)l[c]=fs(l[c],u[c]);else if(ji(u))for(var c in u)l[c]=fs(l[c],u[c]);return l}function Cs(l,u){Object.defineProperty(l,"toString",{value:u})}function bn(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Hv=(function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var s=0,c=0;c<u;c++)s+=this.groupSizes[c];return s},l.prototype.insertRules=function(u,s){if(u>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,p=f;u>=p;)if((p<<=1)<0)throw bn(16,"".concat(u));this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(var b=f;b<p;b++)this.groupSizes[b]=0}for(var C=this.indexOfGroup(u+1),y=(b=0,s.length);b<y;b++)this.tag.insertRule(C,s[b])&&(this.groupSizes[u]++,C++)},l.prototype.clearGroup=function(u){if(u<this.length){var s=this.groupSizes[u],c=this.indexOfGroup(u),f=c+s;this.groupSizes[u]=0;for(var p=c;p<f;p++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(u){var s="";if(u>=this.length||this.groupSizes[u]===0)return s;for(var c=this.groupSizes[u],f=this.indexOfGroup(u),p=f+c,b=f;b<p;b++)s+="".concat(this.tag.getRule(b)).concat(js);return s},l})(),lo=new Map,fo=new Map,io=1,Lr=function(l){if(lo.has(l))return lo.get(l);for(;fo.has(io);)io++;var u=io++;return lo.set(l,u),fo.set(u,l),u},kv=function(l,u){io=u+1,lo.set(l,u),fo.set(u,l)},Gv="style[".concat(hl,"][").concat(Sp,'="').concat(jo,'"]'),Lv=new RegExp("^".concat(hl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yv=function(l,u,s){for(var c,f=s.split(","),p=0,b=f.length;p<b;p++)(c=f[p])&&l.registerName(u,c)},Vv=function(l,u){for(var s,c=((s=u.textContent)!==null&&s!==void 0?s:"").split(js),f=[],p=0,b=c.length;p<b;p++){var C=c[p].trim();if(C){var y=C.match(Lv);if(y){var g=0|parseInt(y[1],10),w=y[2];g!==0&&(kv(w,g),Yv(l,w,y[3]),l.getTag().insertRules(g,f)),f.length=0}else f.push(C)}}},Kh=function(l){for(var u=document.querySelectorAll(Gv),s=0,c=u.length;s<c;s++){var f=u[s];f&&f.getAttribute(hl)!==xp&&(Vv(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Qv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rp=function(l){var u=document.head,s=l||u,c=document.createElement("style"),f=(function(C){var y=Array.from(C.querySelectorAll("style[".concat(hl,"]")));return y[y.length-1]})(s),p=f!==void 0?f.nextSibling:null;c.setAttribute(hl,xp),c.setAttribute(Sp,jo);var b=Qv();return b&&c.setAttribute("nonce",b),s.insertBefore(c,p),c},Xv=(function(){function l(u){this.element=Rp(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,f=0,p=c.length;f<p;f++){var b=c[f];if(b.ownerNode===s)return b}throw bn(17)})(this.element),this.length=0}return l.prototype.insertRule=function(u,s){try{return this.sheet.insertRule(s,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var s=this.sheet.cssRules[u];return s&&s.cssText?s.cssText:""},l})(),Zv=(function(){function l(u){this.element=Rp(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,s){if(u<=this.length&&u>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l})(),Kv=(function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,s){return u<=this.length&&(this.rules.splice(u,0,s),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l})(),Jh=co,Jv={isServer:!co,useCSSOMInjection:!Cv},mo=(function(){function l(u,s,c){u===void 0&&(u=pl),s===void 0&&(s={});var f=this;this.options=Ie(Ie({},Jv),u),this.gs=s,this.names=new Map(c),this.server=!!u.isServer,!this.server&&co&&Jh&&(Jh=!1,Kh(this)),Cs(this,function(){return(function(p){for(var b=p.getTag(),C=b.length,y="",g=function(_){var U=(function(Q){return fo.get(Q)})(_);if(U===void 0)return"continue";var B=p.names.get(U),k=b.getGroup(_);if(B===void 0||!B.size||k.length===0)return"continue";var X="".concat(hl,".g").concat(_,'[id="').concat(U,'"]'),G="";B!==void 0&&B.forEach(function(Q){Q.length>0&&(G+="".concat(Q,","))}),y+="".concat(k).concat(X,'{content:"').concat(G,'"}').concat(js)},w=0;w<C;w++)g(w);return y})(f)})}return l.registerId=function(u){return Lr(u)},l.prototype.rehydrate=function(){!this.server&&co&&Kh(this)},l.prototype.reconstructWithOptions=function(u,s){return s===void 0&&(s=!0),new l(Ie(Ie({},this.options),u),this.gs,s&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(s){var c=s.useCSSOMInjection,f=s.target;return s.isServer?new Kv(f):c?new Xv(f):new Zv(f)})(this.options),new Hv(u)));var u},l.prototype.hasNameForId=function(u,s){return this.names.has(u)&&this.names.get(u).has(s)},l.prototype.registerName=function(u,s){if(Lr(u),this.names.has(u))this.names.get(u).add(s);else{var c=new Set;c.add(s),this.names.set(u,c)}},l.prototype.insertRules=function(u,s,c){this.registerName(u,s),this.getTag().insertRules(Lr(u),c)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(Lr(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l})(),Fv=/&/g,Wv=/^\s*\/\/.*$/gm;function _p(l,u){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(u," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(u," ")),s.props=s.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=_p(s.children,u)),s})}function Pv(l){var u,s,c,f=pl,p=f.options,b=p===void 0?pl:p,C=f.plugins,y=C===void 0?wo:C,g=function(U,B,k){return k.startsWith(s)&&k.endsWith(s)&&k.replaceAll(s,"").length>0?".".concat(u):U},w=y.slice();w.push(function(U){U.type===bo&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Fv,s).replace(c,g))}),b.prefix&&w.push(wv),w.push(xv);var _=function(U,B,k,X){B===void 0&&(B=""),k===void 0&&(k=""),X===void 0&&(X="&"),u=X,s=B,c=new RegExp("\\".concat(s,"\\b"),"g");var G=U.replace(Wv,""),Q=bv(k||B?"".concat(k," ").concat(B," { ").concat(G," }"):G);b.namespace&&(Q=_p(Q,b.namespace));var H=[];return uo(Q,Sv(w.concat(jv(function(Z){return H.push(Z)})))),H};return _.hash=y.length?y.reduce(function(U,B){return B.name||bn(15),sl(U,B.name)},Ap).toString():"",_}var Iv=new mo,ms=Pv(),Dp=Ye.createContext({shouldForwardProp:void 0,styleSheet:Iv,stylis:ms});Dp.Consumer;Ye.createContext(void 0);function hs(){return R.useContext(Dp)}var Mp=(function(){function l(u,s){var c=this;this.inject=function(f,p){p===void 0&&(p=ms);var b=c.name+p.hash;f.hasNameForId(c.id,b)||f.insertRules(c.id,b,p(c.rules,b,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=s,Cs(this,function(){throw bn(12,String(c.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=ms),this.name+u.hash},l})(),e2=function(l){return l>="A"&&l<="Z"};function Fh(l){for(var u="",s=0;s<l.length;s++){var c=l[s];if(s===1&&c==="-"&&l[0]==="-")return l;e2(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var $p=function(l){return l==null||l===!1||l===""},Np=function(l){var u,s,c=[];for(var f in l){var p=l[f];l.hasOwnProperty(f)&&!$p(p)&&(Array.isArray(p)&&p.isCss||vn(p)?c.push("".concat(Fh(f),":"),p,";"):ji(p)?c.push.apply(c,dl(dl(["".concat(f," {")],Np(p),!1),["}"],!1)):c.push("".concat(Fh(f),": ").concat((u=f,(s=p)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||u in Av||u.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function Za(l,u,s,c){if($p(l))return[];if(As(l))return[".".concat(l.styledComponentId)];if(vn(l)){if(!vn(p=l)||p.prototype&&p.prototype.isReactComponent||!u)return[l];var f=l(u);return Za(f,u,s,c)}var p;return l instanceof Mp?s?(l.inject(s,c),[l.getName(c)]):[l]:ji(l)?Np(l):Array.isArray(l)?Array.prototype.concat.apply(wo,l.map(function(b){return Za(b,u,s,c)})):[l.toString()]}function qp(l){for(var u=0;u<l.length;u+=1){var s=l[u];if(vn(s)&&!As(s))return!1}return!0}var t2=Cp(jo),a2=(function(){function l(u,s,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&qp(u),this.componentId=s,this.baseHash=sl(t2,s),this.baseStyle=c,mo.registerId(s)}return l.prototype.generateAndInjectStyles=function(u,s,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=pn(f,this.staticRulesId);else{var p=so(Za(this.rules,u,s,c)),b=ds(sl(this.baseHash,p)>>>0);if(!s.hasNameForId(this.componentId,b)){var C=c(p,".".concat(b),void 0,this.componentId);s.insertRules(this.componentId,b,C)}f=pn(f,b),this.staticRulesId=b}else{for(var y=sl(this.baseHash,c.hash),g="",w=0;w<this.rules.length;w++){var _=this.rules[w];if(typeof _=="string")g+=_;else if(_){var U=so(Za(_,u,s,c));y=sl(y,U+w),g+=U}}if(g){var B=ds(y>>>0);s.hasNameForId(this.componentId,B)||s.insertRules(this.componentId,B,c(g,".".concat(B),void 0,this.componentId)),f=pn(f,B)}}return f},l})(),wi=Ye.createContext(void 0);wi.Consumer;function Up(l){var u=Ye.useContext(wi),s=R.useMemo(function(){return(function(c,f){if(!c)throw bn(14);if(vn(c)){var p=c(f);return p}if(Array.isArray(c)||typeof c!="object")throw bn(8);return f?Ie(Ie({},f),c):c})(l.theme,u)},[l.theme,u]);return l.children?Ye.createElement(wi.Provider,{value:s},l.children):null}var Jc={};function n2(l,u,s){var c=As(l),f=l,p=!Kc(l),b=u.attrs,C=b===void 0?wo:b,y=u.componentId,g=y===void 0?(function(le,K){var ie=typeof le!="string"?"sc":Yh(le);Jc[ie]=(Jc[ie]||0)+1;var W="".concat(ie,"-").concat(ws(jo+ie+Jc[ie]));return K?"".concat(K,"-").concat(W):W})(u.displayName,u.parentComponentId):y,w=u.displayName,_=w===void 0?(function(le){return Kc(le)?"styled.".concat(le):"Styled(".concat(Rv(le),")")})(l):w,U=u.displayName&&u.componentId?"".concat(Yh(u.displayName),"-").concat(u.componentId):u.componentId||g,B=c&&f.attrs?f.attrs.concat(C).filter(Boolean):C,k=u.shouldForwardProp;if(c&&f.shouldForwardProp){var X=f.shouldForwardProp;if(u.shouldForwardProp){var G=u.shouldForwardProp;k=function(le,K){return X(le,K)&&G(le,K)}}else k=X}var Q=new a2(s,U,c?f.componentStyle:void 0);function H(le,K){return(function(ie,W,Oe){var Ce=ie.attrs,ct=ie.componentStyle,dt=ie.defaultProps,Qe=ie.foldedComponentIds,Pt=ie.styledComponentId,It=ie.target,Xe=Ye.useContext(wi),D=hs(),Y=ie.shouldForwardProp||D.shouldForwardProp,I=jp(W,Xe,dt)||pl,se=(function(de,te,Ze){for(var be,it=Ie(Ie({},te),{className:void 0,theme:Ze}),Ka=0;Ka<de.length;Ka+=1){var ea=vn(be=de[Ka])?be(it):be;for(var Tt in ea)it[Tt]=Tt==="className"?pn(it[Tt],ea[Tt]):Tt==="style"?Ie(Ie({},it[Tt]),ea[Tt]):ea[Tt]}return te.className&&(it.className=pn(it.className,te.className)),it})(Ce,W,I),x=se.as||It,q={};for(var L in se)se[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&se.theme===I||(L==="forwardedAs"?q.as=se.forwardedAs:Y&&!Y(L,x)||(q[L]=se[L]));var V=(function(de,te){var Ze=hs(),be=de.generateAndInjectStyles(te,Ze.styleSheet,Ze.stylis);return be})(ct,se),P=pn(Qe,Pt);return V&&(P+=" "+V),se.className&&(P+=" "+se.className),q[Kc(x)&&!wp.has(x)?"class":"className"]=P,Oe&&(q.ref=Oe),R.createElement(x,q)})(Z,le,K)}H.displayName=_;var Z=Ye.forwardRef(H);return Z.attrs=B,Z.componentStyle=Q,Z.displayName=_,Z.shouldForwardProp=k,Z.foldedComponentIds=c?pn(f.foldedComponentIds,f.styledComponentId):"",Z.styledComponentId=U,Z.target=c?f.target:l,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=c?(function(K){for(var ie=[],W=1;W<arguments.length;W++)ie[W-1]=arguments[W];for(var Oe=0,Ce=ie;Oe<Ce.length;Oe++)fs(K,Ce[Oe],!0);return K})({},f.defaultProps,le):le}}),Cs(Z,function(){return".".concat(Z.styledComponentId)}),p&&Op(Z,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Wh(l,u){for(var s=[l[0]],c=0,f=u.length;c<f;c+=1)s.push(u[c],l[c+1]);return s}var Ph=function(l){return Object.assign(l,{isCss:!0})};function Ao(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];if(vn(l)||ji(l))return Ph(Za(Wh(wo,dl([l],u,!0))));var c=l;return u.length===0&&c.length===1&&typeof c[0]=="string"?Za(c):Ph(Za(Wh(c,u)))}function ps(l,u,s){if(s===void 0&&(s=pl),!u)throw bn(1,u);var c=function(f){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];return l(u,s,Ao.apply(void 0,dl([f],p,!1)))};return c.attrs=function(f){return ps(l,u,Ie(Ie({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return ps(l,u,Ie(Ie({},s),f))},c}var Bp=function(l){return ps(n2,l)},j=Bp;wp.forEach(function(l){j[l]=Bp(l)});var l2=(function(){function l(u,s){this.rules=u,this.componentId=s,this.isStatic=qp(u),mo.registerId(this.componentId+1)}return l.prototype.createStyles=function(u,s,c,f){var p=f(so(Za(this.rules,s,c,f)),""),b=this.componentId+u;c.insertRules(b,b,p)},l.prototype.removeStyles=function(u,s){s.clearRules(this.componentId+u)},l.prototype.renderStyles=function(u,s,c,f){u>2&&mo.registerId(this.componentId+u),this.removeStyles(u,c),this.createStyles(u,s,c,f)},l})();function i2(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];var c=Ao.apply(void 0,dl([l],u,!1)),f="sc-global-".concat(ws(JSON.stringify(c))),p=new l2(c,f),b=function(y){var g=hs(),w=Ye.useContext(wi),_=Ye.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&C(_,y,g.styleSheet,w,g.stylis),Ye.useLayoutEffect(function(){if(!g.styleSheet.server)return C(_,y,g.styleSheet,w,g.stylis),function(){return p.removeStyles(_,g.styleSheet)}},[_,y,g.styleSheet,w,g.stylis]),null};function C(y,g,w,_,U){if(p.isStatic)p.renderStyles(y,Ev,w,U);else{var B=Ie(Ie({},g),{theme:jp(g,_,b.defaultProps)});p.renderStyles(y,B,w,U)}}return Ye.memo(b)}function r2(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];var c=so(Ao.apply(void 0,dl([l],u,!1))),f=ws(c);return new Mp(f,c)}const h={colors:{primary:"#26a9e0",secundary:"#001f3D",white:"#FFFFFF",lightGray:"#F9FAFB",dark:"#000f1d",mediumGray:"#9E9E9E"},fonts:{primary:'"Inter", sans-serif',secondary:'"Roboto", sans-serif'},breakpoints:{mobile:"1020px",tablet:"986px",desktop:"1200px"},transitions:{default:"0.2s ease-in-out"},shadows:{small:"0 2px 4px rgba(0,0,0,0.1)",medium:"0 4px 8px rgba(0,0,0,0.15)",large:"0 8px 16px rgba(0,0,0,0.2)"}},o2=i2`
  body {
    /* color: #001f3d; */
    font-family: ${({theme:l})=>l.fonts.primary};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
  }
`,u2=j.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({$isScrolled:l,theme:u})=>l?"rgba(255, 255, 255, 0.95)":"transparent"};
  box-shadow: ${({$isScrolled:l,theme:u})=>l?u.shadows.small:"none"};
  transition: all 0.1s ease-in-out;
`,c2=j.nav`
  display: flex;
  justify-content: start;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
`,s2=j.a`
  font-family: ${({theme:l})=>l.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:l})=>l.colors.dark};
  text-decoration: none;
  
  span {
    color: ${({theme:l})=>l.colors.primary};
  }
`,d2=j.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    position: fixed;
    top: 70px;
    left: ${({$isOpen:l})=>l?"0":"-100%"};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${({theme:l})=>l.colors.white};
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    transition: left 0.3s ease-in-out;
    box-shadow: ${({theme:l})=>l.shadows.medium};
  }
`,hn=j.li`
  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;j.a`
  color: ${({theme:l})=>l.colors.dark};
  font-size: 1rem;
  font-family: inherit;
  text-decoration: none;
  font-weight: 600;
  transition: color ${({theme:l})=>l.transitions.default};
  
  &:hover {
    color: ${({theme:l})=>l.colors.primary};
  }
  
  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    display: block;
    padding: 1rem;
    width: 100%;
  }
`;const f2=j.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    display: flex;
  }
`,m2="/AbaCorretora/assets/logo-Cfhf6tiY.png";/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ih="popstate";function h2(l={}){function u(c,f){let{pathname:p,search:b,hash:C}=c.location;return gs("",{pathname:p,search:b,hash:C},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:Ai(f)}return g2(u,s,null,l)}function De(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function Lt(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function p2(){return Math.random().toString(36).substring(2,10)}function ep(l,u){return{usr:l.state,key:l.key,idx:u}}function gs(l,u,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?vl(u):u,state:s,key:u&&u.key||c||p2()}}function Ai({pathname:l="/",search:u="",hash:s=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function vl(l){let u={};if(l){let s=l.indexOf("#");s>=0&&(u.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(u.search=l.substring(c),l=l.substring(0,c)),l&&(u.pathname=l)}return u}function g2(l,u,s,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,b=f.history,C="POP",y=null,g=w();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function w(){return(b.state||{idx:null}).idx}function _(){C="POP";let G=w(),Q=G==null?null:G-g;g=G,y&&y({action:C,location:X.location,delta:Q})}function U(G,Q){C="PUSH";let H=gs(X.location,G,Q);g=w()+1;let Z=ep(H,g),le=X.createHref(H);try{b.pushState(Z,"",le)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;f.location.assign(le)}p&&y&&y({action:C,location:X.location,delta:1})}function B(G,Q){C="REPLACE";let H=gs(X.location,G,Q);g=w();let Z=ep(H,g),le=X.createHref(H);b.replaceState(Z,"",le),p&&y&&y({action:C,location:X.location,delta:0})}function k(G){return v2(G)}let X={get action(){return C},get location(){return l(f,b)},listen(G){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Ih,_),y=G,()=>{f.removeEventListener(Ih,_),y=null}},createHref(G){return u(f,G)},createURL:k,encodeLocation(G){let Q=k(G);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:U,replace:B,go(G){return b.go(G)}};return X}function v2(l,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),De(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Ai(l);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Hp(l,u,s="/"){return b2(l,u,s,!1)}function b2(l,u,s,c){let f=typeof u=="string"?vl(u):u,p=xa(f.pathname||"/",s);if(p==null)return null;let b=kp(l);y2(b);let C=null;for(let y=0;C==null&&y<b.length;++y){let g=R2(p);C=z2(b[y],g,c)}return C}function kp(l,u=[],s=[],c="",f=!1){let p=(b,C,y=f,g)=>{let w={relativePath:g===void 0?b.path||"":g,caseSensitive:b.caseSensitive===!0,childrenIndex:C,route:b};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(c)&&y)return;De(w.relativePath.startsWith(c),`Absolute route path "${w.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(c.length)}let _=ya([c,w.relativePath]),U=s.concat(w);b.children&&b.children.length>0&&(De(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),kp(b.children,u,U,_,y)),!(b.path==null&&!b.index)&&u.push({path:_,score:E2(_,b.index),routesMeta:U})};return l.forEach((b,C)=>{if(b.path===""||!b.path?.includes("?"))p(b,C);else for(let y of Gp(b.path))p(b,C,!0,y)}),u}function Gp(l){let u=l.split("/");if(u.length===0)return[];let[s,...c]=u,f=s.endsWith("?"),p=s.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let b=Gp(c.join("/")),C=[];return C.push(...b.map(y=>y===""?p:[p,y].join("/"))),f&&C.push(...b),C.map(y=>l.startsWith("/")&&y===""?"/":y)}function y2(l){l.sort((u,s)=>u.score!==s.score?s.score-u.score:T2(u.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var x2=/^:[\w-]+$/,S2=3,j2=2,w2=1,A2=10,C2=-2,tp=l=>l==="*";function E2(l,u){let s=l.split("/"),c=s.length;return s.some(tp)&&(c+=C2),u&&(c+=j2),s.filter(f=>!tp(f)).reduce((f,p)=>f+(x2.test(p)?S2:p===""?w2:A2),c)}function T2(l,u){return l.length===u.length&&l.slice(0,-1).every((c,f)=>c===u[f])?l[l.length-1]-u[u.length-1]:0}function z2(l,u,s=!1){let{routesMeta:c}=l,f={},p="/",b=[];for(let C=0;C<c.length;++C){let y=c[C],g=C===c.length-1,w=p==="/"?u:u.slice(p.length)||"/",_=ho({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},w),U=y.route;if(!_&&g&&s&&!c[c.length-1].route.index&&(_=ho({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},w)),!_)return null;Object.assign(f,_.params),b.push({params:f,pathname:ya([p,_.pathname]),pathnameBase:$2(ya([p,_.pathnameBase])),route:U}),_.pathnameBase!=="/"&&(p=ya([p,_.pathnameBase]))}return b}function ho(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=O2(l.path,l.caseSensitive,l.end),f=u.match(s);if(!f)return null;let p=f[0],b=p.replace(/(.)\/+$/,"$1"),C=f.slice(1);return{params:c.reduce((g,{paramName:w,isOptional:_},U)=>{if(w==="*"){let k=C[U]||"";b=p.slice(0,p.length-k.length).replace(/(.)\/+$/,"$1")}const B=C[U];return _&&!B?g[w]=void 0:g[w]=(B||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:b,pattern:l}}function O2(l,u=!1,s=!0){Lt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,C,y)=>(c.push({paramName:C,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),c]}function R2(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Lt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function xa(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}function _2(l,u="/"){let{pathname:s,search:c="",hash:f=""}=typeof l=="string"?vl(l):l;return{pathname:s?s.startsWith("/")?s:D2(s,u):u,search:N2(c),hash:q2(f)}}function D2(l,u){let s=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function Fc(l,u,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function M2(l){return l.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Es(l){let u=M2(l);return u.map((s,c)=>c===u.length-1?s.pathname:s.pathnameBase)}function Ts(l,u,s,c=!1){let f;typeof l=="string"?f=vl(l):(f={...l},De(!f.pathname||!f.pathname.includes("?"),Fc("?","pathname","search",f)),De(!f.pathname||!f.pathname.includes("#"),Fc("#","pathname","hash",f)),De(!f.search||!f.search.includes("#"),Fc("#","search","hash",f)));let p=l===""||f.pathname==="",b=p?"/":f.pathname,C;if(b==null)C=s;else{let _=u.length-1;if(!c&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),_-=1;f.pathname=U.join("/")}C=_>=0?u[_]:"/"}let y=_2(f,C),g=b&&b!=="/"&&b.endsWith("/"),w=(p||b===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(g||w)&&(y.pathname+="/"),y}var ya=l=>l.join("/").replace(/\/\/+/g,"/"),$2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),N2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,q2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function U2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Lp=["POST","PUT","PATCH","DELETE"];new Set(Lp);var B2=["GET",...Lp];new Set(B2);var bl=R.createContext(null);bl.displayName="DataRouter";var Co=R.createContext(null);Co.displayName="DataRouterState";R.createContext(!1);var Yp=R.createContext({isTransitioning:!1});Yp.displayName="ViewTransition";var H2=R.createContext(new Map);H2.displayName="Fetchers";var k2=R.createContext(null);k2.displayName="Await";var Yt=R.createContext(null);Yt.displayName="Navigation";var Ci=R.createContext(null);Ci.displayName="Location";var Wt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var zs=R.createContext(null);zs.displayName="RouteError";function G2(l,{relative:u}={}){De(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=R.useContext(Yt),{hash:f,pathname:p,search:b}=Ei(l,{relative:u}),C=p;return s!=="/"&&(C=p==="/"?s:ya([s,p])),c.createHref({pathname:C,search:b,hash:f})}function yl(){return R.useContext(Ci)!=null}function Sa(){return De(yl(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ci).location}var Vp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qp(l){R.useContext(Yt).static||R.useLayoutEffect(l)}function Xp(){let{isDataRoute:l}=R.useContext(Wt);return l?eb():L2()}function L2(){De(yl(),"useNavigate() may be used only in the context of a <Router> component.");let l=R.useContext(bl),{basename:u,navigator:s}=R.useContext(Yt),{matches:c}=R.useContext(Wt),{pathname:f}=Sa(),p=JSON.stringify(Es(c)),b=R.useRef(!1);return Qp(()=>{b.current=!0}),R.useCallback((y,g={})=>{if(Lt(b.current,Vp),!b.current)return;if(typeof y=="number"){s.go(y);return}let w=Ts(y,JSON.parse(p),f,g.relative==="path");l==null&&u!=="/"&&(w.pathname=w.pathname==="/"?u:ya([u,w.pathname])),(g.replace?s.replace:s.push)(w,g.state,g)},[u,s,p,f,l])}R.createContext(null);function Ei(l,{relative:u}={}){let{matches:s}=R.useContext(Wt),{pathname:c}=Sa(),f=JSON.stringify(Es(s));return R.useMemo(()=>Ts(l,JSON.parse(f),c,u==="path"),[l,f,c,u])}function Y2(l,u){return Zp(l,u)}function Zp(l,u,s,c,f){De(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=R.useContext(Yt),{matches:b}=R.useContext(Wt),C=b[b.length-1],y=C?C.params:{},g=C?C.pathname:"/",w=C?C.pathnameBase:"/",_=C&&C.route;{let H=_&&_.path||"";Kp(g,!_||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let U=Sa(),B;if(u){let H=typeof u=="string"?vl(u):u;De(w==="/"||H.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${H.pathname}" was given in the \`location\` prop.`),B=H}else B=U;let k=B.pathname||"/",X=k;if(w!=="/"){let H=w.replace(/^\//,"").split("/");X="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=Hp(l,{pathname:X});Lt(_||G!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Lt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=K2(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},y,H.params),pathname:ya([w,p.encodeLocation?p.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?w:ya([w,p.encodeLocation?p.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),b,s,c,f);return u&&Q?R.createElement(Ci.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},Q):Q}function V2(){let l=I2(),u=U2(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",l),b=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:p},"ErrorBoundary")," or"," ",R.createElement("code",{style:p},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),s?R.createElement("pre",{style:f},s):null,b)}var Q2=R.createElement(V2,null),X2=class extends R.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){this.props.unstable_onError?this.props.unstable_onError(l,u):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?R.createElement(Wt.Provider,{value:this.props.routeContext},R.createElement(zs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Z2({routeContext:l,match:u,children:s}){let c=R.useContext(bl);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(Wt.Provider,{value:l},s)}function K2(l,u=[],s=null,c=null,f=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let p=l,b=s?.errors;if(b!=null){let g=p.findIndex(w=>w.route.id&&b?.[w.route.id]!==void 0);De(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),p=p.slice(0,Math.min(p.length,g+1))}let C=!1,y=-1;if(s)for(let g=0;g<p.length;g++){let w=p[g];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=g),w.route.id){let{loaderData:_,errors:U}=s,B=w.route.loader&&!_.hasOwnProperty(w.route.id)&&(!U||U[w.route.id]===void 0);if(w.route.lazy||B){C=!0,y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}return p.reduceRight((g,w,_)=>{let U,B=!1,k=null,X=null;s&&(U=b&&w.route.id?b[w.route.id]:void 0,k=w.route.errorElement||Q2,C&&(y<0&&_===0?(Kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,X=null):y===_&&(B=!0,X=w.route.hydrateFallbackElement||null)));let G=u.concat(p.slice(0,_+1)),Q=()=>{let H;return U?H=k:B?H=X:w.route.Component?H=R.createElement(w.route.Component,null):w.route.element?H=w.route.element:H=g,R.createElement(Z2,{match:w,routeContext:{outlet:g,matches:G,isDataRoute:s!=null},children:H})};return s&&(w.route.ErrorBoundary||w.route.errorElement||_===0)?R.createElement(X2,{location:s.location,revalidation:s.revalidation,component:k,error:U,children:Q(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:c}):Q()},null)}function Os(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J2(l){let u=R.useContext(bl);return De(u,Os(l)),u}function F2(l){let u=R.useContext(Co);return De(u,Os(l)),u}function W2(l){let u=R.useContext(Wt);return De(u,Os(l)),u}function Rs(l){let u=W2(l),s=u.matches[u.matches.length-1];return De(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function P2(){return Rs("useRouteId")}function I2(){let l=R.useContext(zs),u=F2("useRouteError"),s=Rs("useRouteError");return l!==void 0?l:u.errors?.[s]}function eb(){let{router:l}=J2("useNavigate"),u=Rs("useNavigate"),s=R.useRef(!1);return Qp(()=>{s.current=!0}),R.useCallback(async(f,p={})=>{Lt(s.current,Vp),s.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:u,...p}))},[l,u])}var ap={};function Kp(l,u,s){!u&&!ap[l]&&(ap[l]=!0,Lt(!1,s))}R.memo(tb);function tb({routes:l,future:u,state:s,unstable_onError:c}){return Zp(l,void 0,s,c,u)}function ab({to:l,replace:u,state:s,relative:c}){De(yl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=R.useContext(Yt);Lt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=R.useContext(Wt),{pathname:b}=Sa(),C=Xp(),y=Ts(l,Es(p),b,c==="path"),g=JSON.stringify(y);return R.useEffect(()=>{C(JSON.parse(g),{replace:u,state:s,relative:c})},[C,g,c,u,s]),null}function va(l){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nb({basename:l="/",children:u=null,location:s,navigationType:c="POP",navigator:f,static:p=!1}){De(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),C=R.useMemo(()=>({basename:b,navigator:f,static:p,future:{}}),[b,f,p]);typeof s=="string"&&(s=vl(s));let{pathname:y="/",search:g="",hash:w="",state:_=null,key:U="default"}=s,B=R.useMemo(()=>{let k=xa(y,b);return k==null?null:{location:{pathname:k,search:g,hash:w,state:_,key:U},navigationType:c}},[b,y,g,w,_,U,c]);return Lt(B!=null,`<Router basename="${b}"> is not able to match the URL "${y}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:R.createElement(Yt.Provider,{value:C},R.createElement(Ci.Provider,{children:u,value:B}))}function lb({children:l,location:u}){return Y2(vs(l),u)}function vs(l,u=[]){let s=[];return R.Children.forEach(l,(c,f)=>{if(!R.isValidElement(c))return;let p=[...u,f];if(c.type===R.Fragment){s.push.apply(s,vs(c.props.children,p));return}De(c.type===va,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=vs(c.props.children,p)),s.push(b)}),s}var ro="get",oo="application/x-www-form-urlencoded";function Eo(l){return l!=null&&typeof l.tagName=="string"}function ib(l){return Eo(l)&&l.tagName.toLowerCase()==="button"}function rb(l){return Eo(l)&&l.tagName.toLowerCase()==="form"}function ob(l){return Eo(l)&&l.tagName.toLowerCase()==="input"}function ub(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function cb(l,u){return l.button===0&&(!u||u==="_self")&&!ub(l)}var Yr=null;function sb(){if(Yr===null)try{new FormData(document.createElement("form"),0),Yr=!1}catch{Yr=!0}return Yr}var db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wc(l){return l!=null&&!db.has(l)?(Lt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oo}"`),null):l}function fb(l,u){let s,c,f,p,b;if(rb(l)){let C=l.getAttribute("action");c=C?xa(C,u):null,s=l.getAttribute("method")||ro,f=Wc(l.getAttribute("enctype"))||oo,p=new FormData(l)}else if(ib(l)||ob(l)&&(l.type==="submit"||l.type==="image")){let C=l.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||C.getAttribute("action");if(c=y?xa(y,u):null,s=l.getAttribute("formmethod")||C.getAttribute("method")||ro,f=Wc(l.getAttribute("formenctype"))||Wc(C.getAttribute("enctype"))||oo,p=new FormData(C,l),!sb()){let{name:g,type:w,value:_}=l;if(w==="image"){let U=g?`${g}.`:"";p.append(`${U}x`,"0"),p.append(`${U}y`,"0")}else g&&p.append(g,_)}}else{if(Eo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ro,c=null,f=oo,b=l}return p&&f==="text/plain"&&(b=p,p=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _s(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function mb(l,u,s){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c.pathname==="/"?c.pathname=`_root.${s}`:u&&xa(c.pathname,u)==="/"?c.pathname=`${u.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function hb(l,u){if(l.id in u)return u[l.id];try{let s=await import(l.module);return u[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pb(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function gb(l,u,s){let c=await Promise.all(l.map(async f=>{let p=u.routes[f.route.id];if(p){let b=await hb(p,s);return b.links?b.links():[]}return[]}));return xb(c.flat(1).filter(pb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function np(l,u,s,c,f,p){let b=(y,g)=>s[g]?y.route.id!==s[g].route.id:!0,C=(y,g)=>s[g].pathname!==y.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==y.params["*"];return p==="assets"?u.filter((y,g)=>b(y,g)||C(y,g)):p==="data"?u.filter((y,g)=>{let w=c.routes[y.route.id];if(!w||!w.hasLoader)return!1;if(b(y,g)||C(y,g))return!0;if(y.route.shouldRevalidate){let _=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function vb(l,u,{includeHydrateFallback:s}={}){return bb(l.map(c=>{let f=u.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function bb(l){return[...new Set(l)]}function yb(l){let u={},s=Object.keys(l).sort();for(let c of s)u[c]=l[c];return u}function xb(l,u){let s=new Set;return new Set(u),l.reduce((c,f)=>{let p=JSON.stringify(yb(f));return s.has(p)||(s.add(p),c.push({key:p,link:f})),c},[])}function Jp(){let l=R.useContext(bl);return _s(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Sb(){let l=R.useContext(Co);return _s(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Ds=R.createContext(void 0);Ds.displayName="FrameworkContext";function Fp(){let l=R.useContext(Ds);return _s(l,"You must render this element inside a <HydratedRouter> element"),l}function jb(l,u){let s=R.useContext(Ds),[c,f]=R.useState(!1),[p,b]=R.useState(!1),{onFocus:C,onBlur:y,onMouseEnter:g,onMouseLeave:w,onTouchStart:_}=u,U=R.useRef(null);R.useEffect(()=>{if(l==="render"&&b(!0),l==="viewport"){let X=Q=>{Q.forEach(H=>{b(H.isIntersecting)})},G=new IntersectionObserver(X,{threshold:.5});return U.current&&G.observe(U.current),()=>{G.disconnect()}}},[l]),R.useEffect(()=>{if(c){let X=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(X)}}},[c]);let B=()=>{f(!0)},k=()=>{f(!1),b(!1)};return s?l!=="intent"?[p,U,{}]:[p,U,{onFocus:yi(C,B),onBlur:yi(y,k),onMouseEnter:yi(g,B),onMouseLeave:yi(w,k),onTouchStart:yi(_,B)}]:[!1,U,{}]}function yi(l,u){return s=>{l&&l(s),s.defaultPrevented||u(s)}}function wb({page:l,...u}){let{router:s}=Jp(),c=R.useMemo(()=>Hp(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?R.createElement(Cb,{page:l,matches:c,...u}):null}function Ab(l){let{manifest:u,routeModules:s}=Fp(),[c,f]=R.useState([]);return R.useEffect(()=>{let p=!1;return gb(l,u,s).then(b=>{p||f(b)}),()=>{p=!0}},[l,u,s]),c}function Cb({page:l,matches:u,...s}){let c=Sa(),{manifest:f,routeModules:p}=Fp(),{basename:b}=Jp(),{loaderData:C,matches:y}=Sb(),g=R.useMemo(()=>np(l,u,y,f,c,"data"),[l,u,y,f,c]),w=R.useMemo(()=>np(l,u,y,f,c,"assets"),[l,u,y,f,c]),_=R.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let k=new Set,X=!1;if(u.forEach(Q=>{let H=f.routes[Q.route.id];!H||!H.hasLoader||(!g.some(Z=>Z.route.id===Q.route.id)&&Q.route.id in C&&p[Q.route.id]?.shouldRevalidate||H.hasClientLoader?X=!0:k.add(Q.route.id))}),k.size===0)return[];let G=mb(l,b,"data");return X&&k.size>0&&G.searchParams.set("_routes",u.filter(Q=>k.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[G.pathname+G.search]},[b,C,c,f,g,u,l,p]),U=R.useMemo(()=>vb(w,f),[w,f]),B=Ab(w);return R.createElement(R.Fragment,null,_.map(k=>R.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...s})),U.map(k=>R.createElement("link",{key:k,rel:"modulepreload",href:k,...s})),B.map(({key:k,link:X})=>R.createElement("link",{key:k,nonce:s.nonce,...X})))}function Eb(...l){return u=>{l.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wp&&(window.__reactRouterVersion="7.9.1")}catch{}function Tb({basename:l,children:u,window:s}){let c=R.useRef();c.current==null&&(c.current=h2({window:s,v5Compat:!0}));let f=c.current,[p,b]=R.useState({action:f.action,location:f.location}),C=R.useCallback(y=>{R.startTransition(()=>b(y))},[b]);return R.useLayoutEffect(()=>f.listen(C),[f,C]),R.createElement(nb,{basename:l,children:u,location:p.location,navigationType:p.action,navigator:f})}var Pp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=R.forwardRef(function({onClick:u,discover:s="render",prefetch:c="none",relative:f,reloadDocument:p,replace:b,state:C,target:y,to:g,preventScrollReset:w,viewTransition:_,...U},B){let{basename:k}=R.useContext(Yt),X=typeof g=="string"&&Pp.test(g),G,Q=!1;if(typeof g=="string"&&X&&(G=g,Wp))try{let Ce=new URL(window.location.href),ct=g.startsWith("//")?new URL(Ce.protocol+g):new URL(g),dt=xa(ct.pathname,k);ct.origin===Ce.origin&&dt!=null?g=dt+ct.search+ct.hash:Q=!0}catch{Lt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=G2(g,{relative:f}),[Z,le,K]=jb(c,U),ie=_b(g,{replace:b,state:C,target:y,preventScrollReset:w,relative:f,viewTransition:_});function W(Ce){u&&u(Ce),Ce.defaultPrevented||ie(Ce)}let Oe=R.createElement("a",{...U,...K,href:G||H,onClick:Q||p?u:W,ref:Eb(B,le),target:y,"data-discover":!X&&s==="render"?"true":void 0});return Z&&!X?R.createElement(R.Fragment,null,Oe,R.createElement(wb,{page:H})):Oe});he.displayName="Link";var zb=R.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:c="",end:f=!1,style:p,to:b,viewTransition:C,children:y,...g},w){let _=Ei(b,{relative:g.relative}),U=Sa(),B=R.useContext(Co),{navigator:k,basename:X}=R.useContext(Yt),G=B!=null&&qb(_)&&C===!0,Q=k.encodeLocation?k.encodeLocation(_).pathname:_.pathname,H=U.pathname,Z=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;s||(H=H.toLowerCase(),Z=Z?Z.toLowerCase():null,Q=Q.toLowerCase()),Z&&X&&(Z=xa(Z,X)||Z);const le=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let K=H===Q||!f&&H.startsWith(Q)&&H.charAt(le)==="/",ie=Z!=null&&(Z===Q||!f&&Z.startsWith(Q)&&Z.charAt(Q.length)==="/"),W={isActive:K,isPending:ie,isTransitioning:G},Oe=K?u:void 0,Ce;typeof c=="function"?Ce=c(W):Ce=[c,K?"active":null,ie?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let ct=typeof p=="function"?p(W):p;return R.createElement(he,{...g,"aria-current":Oe,className:Ce,ref:w,style:ct,to:b,viewTransition:C},typeof y=="function"?y(W):y)});zb.displayName="NavLink";var Ob=R.forwardRef(({discover:l="render",fetcherKey:u,navigate:s,reloadDocument:c,replace:f,state:p,method:b=ro,action:C,onSubmit:y,relative:g,preventScrollReset:w,viewTransition:_,...U},B)=>{let k=$b(),X=Nb(C,{relative:g}),G=b.toLowerCase()==="get"?"get":"post",Q=typeof C=="string"&&Pp.test(C),H=Z=>{if(y&&y(Z),Z.defaultPrevented)return;Z.preventDefault();let le=Z.nativeEvent.submitter,K=le?.getAttribute("formmethod")||b;k(le||Z.currentTarget,{fetcherKey:u,method:K,navigate:s,replace:f,state:p,relative:g,preventScrollReset:w,viewTransition:_})};return R.createElement("form",{ref:B,method:G,action:X,onSubmit:c?y:H,...U,"data-discover":!Q&&l==="render"?"true":void 0})});Ob.displayName="Form";function Rb(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ip(l){let u=R.useContext(bl);return De(u,Rb(l)),u}function _b(l,{target:u,replace:s,state:c,preventScrollReset:f,relative:p,viewTransition:b}={}){let C=Xp(),y=Sa(),g=Ei(l,{relative:p});return R.useCallback(w=>{if(cb(w,u)){w.preventDefault();let _=s!==void 0?s:Ai(y)===Ai(g);C(l,{replace:_,state:c,preventScrollReset:f,relative:p,viewTransition:b})}},[y,C,g,s,c,u,l,f,p,b])}var Db=0,Mb=()=>`__${String(++Db)}__`;function $b(){let{router:l}=Ip("useSubmit"),{basename:u}=R.useContext(Yt),s=P2();return R.useCallback(async(c,f={})=>{let{action:p,method:b,encType:C,formData:y,body:g}=fb(c,u);if(f.navigate===!1){let w=f.fetcherKey||Mb();await l.fetch(w,s,f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||b,formEncType:f.encType||C,flushSync:f.flushSync})}else await l.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||b,formEncType:f.encType||C,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,u,s])}function Nb(l,{relative:u}={}){let{basename:s}=R.useContext(Yt),c=R.useContext(Wt);De(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...Ei(l||".",{relative:u})},b=Sa();if(l==null){p.search=b.search;let C=new URLSearchParams(p.search),y=C.getAll("index");if(y.some(w=>w==="")){C.delete("index"),y.filter(_=>_).forEach(_=>C.append("index",_));let w=C.toString();p.search=w?`?${w}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:ya([s,p.pathname])),Ai(p)}function qb(l,{relative:u}={}){let s=R.useContext(Yp);De(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Ip("useViewTransitionState"),f=Ei(l,{relative:u});if(!s.isTransitioning)return!1;let p=xa(s.currentLocation.pathname,c)||s.currentLocation.pathname,b=xa(s.nextLocation.pathname,c)||s.nextLocation.pathname;return ho(f.pathname,b)!=null||ho(f.pathname,p)!=null}const Ub=()=>{const[l,u]=R.useState(!1),[s,c]=R.useState(!1),f=()=>c(!1);return R.useEffect(()=>{const p=()=>{u(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),o.jsx(u2,{$isScrolled:l,children:o.jsxs(c2,{children:[o.jsx(s2,{href:"/AbaCorretora",children:o.jsx("img",{src:m2,alt:"Logo",width:150,height:"auto"})}),o.jsx(f2,{onClick:()=>c(!s),"aria-label":"Menu",children:"☰"}),o.jsxs(d2,{$isOpen:s,children:[o.jsx(hn,{children:o.jsx(he,{className:"navLink",to:"/AbaCorretora",onClick:f,children:"HOME"})}),o.jsx(hn,{children:o.jsx(he,{className:"navLink",to:"/seguros",onClick:f,children:"SEGUROS"})}),o.jsx(hn,{children:o.jsx(he,{className:"navLink",to:"/consorcios",onClick:f,children:"CONSÓRCIOS"})}),o.jsx(hn,{children:o.jsx(he,{className:"navLink",to:"/saude",onClick:f,children:"SAÚDE"})}),o.jsx(hn,{children:o.jsx(he,{className:"navLink",to:"/contrateAgora",onClick:f,children:"CONTRATE AGORA"})}),o.jsx(hn,{children:o.jsx(he,{className:"navLink",to:"/contato",onClick:f,children:"CONTATO"})}),o.jsx(hn,{children:o.jsx(he,{className:"navLink",to:"/corretoras",onClick:f})})]})]})})},Bb=j.footer`
  background-color: ${h.colors.dark};
  color: ${h.colors.white};
  padding: 4rem 0 0;
`,Hb=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
  
  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Vr=j.div`
  .app-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .app-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: ${h.colors.white};
    text-decoration: none;
    transition: all ${h.transitions.default};
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    svg {
      font-size: 1.2rem;
    }
  }
`,Qr=j.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: ${h.colors.primary};
`,Te=j.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all ${h.transitions.default};
  
  &:hover {
    color: ${h.colors.primary};
    padding-left: 5px;
  }
`,kb=j.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    transition: all ${h.transitions.default};
    
    &:hover {
      color: ${h.colors.primary};
      transform: translateY(-3px);
    }
  }
`,Gb=j.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  
  p {
    margin: 0.5rem 0;
  }
`,Lb=j.img`
  width: 50%; 
  height: auto; 
  margin-top: -20px;
  margin-bottom: -30px;
`;var e1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lp=Ye.createContext&&Ye.createContext(e1),Yb=["attr","size","title"];function Vb(l,u){if(l==null)return{};var s=Qb(l,u),c,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(f=0;f<p.length;f++)c=p[f],!(u.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(s[c]=l[c])}return s}function Qb(l,u){if(l==null)return{};var s={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(u.indexOf(c)>=0)continue;s[c]=l[c]}return s}function po(){return po=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=s[c])}return l},po.apply(this,arguments)}function ip(l,u){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);u&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,c)}return s}function go(l){for(var u=1;u<arguments.length;u++){var s=arguments[u]!=null?arguments[u]:{};u%2?ip(Object(s),!0).forEach(function(c){Xb(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):ip(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function Xb(l,u,s){return u=Zb(u),u in l?Object.defineProperty(l,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[u]=s,l}function Zb(l){var u=Kb(l,"string");return typeof u=="symbol"?u:u+""}function Kb(l,u){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var c=s.call(l,u);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(l)}function t1(l){return l&&l.map((u,s)=>Ye.createElement(u.tag,go({key:s},u.attr),t1(u.child)))}function Ve(l){return u=>Ye.createElement(Jb,po({attr:go({},l.attr)},u),t1(l.child))}function Jb(l){var u=s=>{var{attr:c,size:f,title:p}=l,b=Vb(l,Yb),C=f||s.size||"1em",y;return s.className&&(y=s.className),l.className&&(y=(y?y+" ":"")+l.className),Ye.createElement("svg",po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,b,{className:y,style:go(go({color:l.color||s.color},s.style),l.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),p&&Ye.createElement("title",null,p),l.children)};return lp!==void 0?Ye.createElement(lp.Consumer,null,s=>u(s)):u(e1)}function Fb(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(l)}function Wb(l){return Ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function Pb(l){return Ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(l)}function a1(l){return Ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(l)}function Ib(l){return Ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}function ey(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(l)}function ty(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(l)}function ay(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function ny(l){return Ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"},child:[]}]})(l)}function ly(l){return Ve({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}function iy(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(l)}function ry(l){return Ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"},child:[]}]})(l)}function oy(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(l)}function uy(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(l)}function cy(l){return Ve({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"},child:[]}]})(l)}const sy="/AbaCorretora/logo-ababranco.png",dy=()=>o.jsxs(Bb,{children:[o.jsxs(Hb,{children:[o.jsxs(Vr,{children:[o.jsx(Qr,{children:"Seguros"}),o.jsx(Te,{as:he,to:"/seguros",children:"Automóvel"}),o.jsx(Te,{as:he,to:"/seguros",children:"Bicicleta"}),o.jsx(Te,{as:he,to:"/seguros",children:"Condomínio"}),o.jsx(Te,{as:he,to:"/seguros",children:"Empresarial"}),o.jsx(Te,{as:he,to:"/seguros",children:"Equipamentos Portáteis"}),o.jsx(Te,{as:he,to:"/seguros",children:"Eventos"}),o.jsx(Te,{as:he,to:"/seguros",children:"Máquinas"}),o.jsx(Te,{as:he,to:"/seguros",children:"Residência"}),o.jsx(Te,{as:he,to:"/seguros",children:"Responsabilidade Civil"}),o.jsx(Te,{as:he,to:"/seguros",children:"Viagem "}),o.jsx(Te,{as:he,to:"/seguros",children:"Vida"})]}),o.jsxs(Vr,{children:[o.jsx(Qr,{children:"Demais Serviços"}),o.jsx(Te,{as:he,to:"/consorcios",children:"Consórcio"}),o.jsx(Te,{as:he,to:"/consorcios",children:"Empréstimo"}),o.jsx(Te,{as:he,to:"/consorcios",children:"Financiamento"}),o.jsx(Te,{as:he,to:"/consorcios",children:"Capitalização"}),o.jsx(Te,{as:he,to:"/saude",children:"Plano de Saúde"}),o.jsx(Te,{as:he,to:"/saude",children:"Plano Odontológico"}),o.jsx(Te,{as:"a",target:"_blank",href:"https://www.portoseguro.com.br/servicos",children:"Serviços"}),o.jsx(Te,{as:he,to:"/AbaCorretora",children:"Carro por Assinatura"}),o.jsx(Te,{as:he,to:"/AbaCorretora",children:"Celular por Assinatura"}),o.jsx(Te,{as:he,to:"/saude",children:"PetLove"})]}),o.jsxs(Vr,{children:[o.jsx(Qr,{children:"Empresa"}),o.jsx(Te,{as:he,to:"/AbaCorretora",children:"Home"}),o.jsx(Te,{as:he,to:"/seguros",children:"Seguros"}),o.jsx(Te,{as:he,to:"/consorcios",children:"Consórcios"}),o.jsx(Te,{as:he,to:"/saude",children:"Saúde"}),o.jsx(Te,{as:he,to:"/contato",children:"Contato"}),o.jsx(Te,{as:he,to:"/contrateAgora",children:"Contrate Agora"})]}),o.jsxs(Vr,{children:[o.jsx(Qr,{children:"Nossas Redes Sociais"}),o.jsx(Lb,{src:sy,alt:"Descrição da imagem (ex: Selo de Segurança)"}),o.jsxs(kb,{children:[o.jsx("a",{href:"https://www.facebook.com/profile.php?id=61582932668466",target:"_blank","aria-label":"Facebook",children:o.jsx(Fb,{})}),o.jsx("a",{href:"https://www.instagram.com/abacorretoradeseguros?igsh=N2o0bGFoMmtmbzJ5",target:"_blank","aria-label":"Instagram",children:o.jsx(Wb,{})}),o.jsx("a",{href:"https://youtube.com/@abacorretoradeseguros?si=iFRGtmx-0855JW-d",target:"_blank","aria-label":"YouTube",children:o.jsx(Ib,{})}),o.jsx("a",{href:"https://www.linkedin.com/company/aba-corretora-e-administradora-de-seguros-ltda/",target:"_blank","aria-label":"LinkedIn",children:o.jsx(Pb,{})})]})]})]}),o.jsxs(Gb,{children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," ABA SEGUROS. Todos os direitos reservados."]}),o.jsx("p",{children:"CNPJ: 57.208.516/0001-43 | SUSEP: 2421619-27"})]})]}),fy=j.a`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1100;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  svg { font-size: 28px; }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0,0,0,0.22);
  }

  @media (max-width: 768px) {
    right: 16px;
    bottom: 16px;
  }
`,my="5511945411551",hy=()=>{const l=`https://wa.me/${my}`;return o.jsx(fy,{href:l,target:"_blank",rel:"noreferrer","aria-label":"Fale conosco no WhatsApp",children:o.jsx(a1,{})})},py=j.section`
  padding: 3rem 0;
  background-color: ${h.colors.lightGray};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;j.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;const gy=j.div`
  background: ${h.colors.lightGray};
  border-radius: 12px;
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  padding: 1.25rem;
  transition: all ${h.transitions.default};
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    font-size: 1.5rem;
    margin: 0 0 0.75rem;
    color: ${h.colors.dark};
    text-align: center;
  }

  p {
    color: ${h.colors.mediumGray};
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    text-align: center;
  }

  .saiba-mais-wrapper {
    margin-top: auto;
    text-align: center;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${h.colors.white};
    background-color: ${h.colors.primary};
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all ${h.transitions.default};
    width: auto;
    max-width: 200px;
    margin: 0 auto;
  }

  &:hover {
    box-shadow: ${h.shadows.medium};
  }
`,vy=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,by=j.div`
  display: flex;
  gap: 1rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,yy=j.div`
  flex: 0 0 32%;
  scroll-snap-align: start;

  @media (max-width: ${h.breakpoints.tablet}) {
    flex-basis: 50%;
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-basis: 90%;
  }
`,xy=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
`,rp=j.button`
  background: ${h.colors.white};
  color: ${h.colors.primary};
  border: 1px solid ${h.colors.primary};
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: ${h.transitions.default};

  &:hover {
    background: ${h.colors.primary};
    color: ${h.colors.white};
  }
`,Sy=j.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: ${h.colors.primaryLight};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5%;
  }
`,jy=j.section`
  background: ${h.colors.white};
  padding: 7rem 0 8rem 0;
  position: relative;
  overflow: hidden;
    

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,wy=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,Ay=j.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Cy=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    align-items: center;
  }
`,Ey=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,Ty=j.p`
  color: ${h.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${h.breakpoints.tablet}) {
    max-width: 100%;
  }
`,zy=j.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: ${h.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,Oy=j.div`
  position: relative;
  
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${h.breakpoints.mobile}) {
    
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`,Ry=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,_y=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,Pc=j.div`
  background: ${h.colors.lightGray};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  transition: ${h.transitions.default};
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  h4 {
    color: ${h.colors.dark};
    margin: 0 0 0.25rem;
    font-size: 1.1rem;
  }

  p {
    color: ${h.colors.mediumGray};
    margin: 0;
    line-height: 1.5;
    font-size: 0.95rem;
  }

  &:hover {
    background: ${h.colors.white};
    box-shadow: ${h.shadows.small};
  }
`,Dy=j.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,My=j.ol`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  list-style: none;
  counter-reset: step;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,Xr=j.li`
  background: ${h.colors.white};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;

  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -12px;
    left: -12px;
    background: ${h.colors.primary};
    color: ${h.colors.white};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }

  h4 {
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }
`,$y=j.section`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  padding: 2rem 0;
`,Ny=j.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
  }
`,Zr=j.div`
  strong {
    font-size: 1.5rem;
    display: block;
  }
  span {
    opacity: 0.9;
    font-size: 0.95rem;
  }
`,qy=j.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,Uy=j.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,By=j.div`
  display: flex;
  flex-shrink: 0;
  
`,Ic=j.button`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${h.colors.primaryDark};
    transform: scale(1.05);
  }
`,Hy=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,ky=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,op=j.div`
  background: ${h.colors.lightGray};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    margin: 0 0 1rem;
    color: ${h.colors.mediumGray};
  }
  ul {
    margin: 0;
    padding-left: 1rem;
  }
  li {
    color: ${h.colors.mediumGray};
    margin: 0.25rem 0;
  }
`;j.div`
  font-family: ${({theme:l})=>l.fonts.primary};
  color: ${({theme:l})=>l.colors.dark};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    padding: 0 15px;
  }
`;const nt=j.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: .6rem;
  text-align: center;
  color: #001f3D;

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,lt=j.p`
  font-size: 1.25rem;
  color: ${({theme:l})=>l.colors.mediumGray};
  text-align: center;
  max-width: 800px;
  margin: 0px auto 3rem;
  color: ${({theme:l,$inverted:u})=>u?"rgba(255, 255, 255, 0.8)":l.colors.mediumGray};

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,Gy=j.section`
  padding: 5rem 0;
  background-color: ${h.colors.lightGray};
  
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
    
    .faq-list {
      padding: 0 1rem;
    }
  }
`,Ly=j.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all ${h.transitions.default};
`,Yy=j.div`
  padding: 1.5rem 0;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  svg {
    color: ${h.colors.primary};
    font-size: 1.2rem;
    transition: transform ${h.transitions.default};
  }
  
  &:hover {
    color: ${h.colors.primary};
  }
`,Vy=j.div`
  max-height: ${({isOpen:l})=>l?"500px":"0"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: ${({isOpen:l})=>l?"0 0 1.5rem":"0"};
  opacity: ${({isOpen:l})=>l?"1":"0"};
  line-height: 1.6;
  color: ${h.colors.mediumGray};
`;function Qy(l){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(l)}function Xy(l){return Ve({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(l)}const Zy=()=>{const[l,u]=R.useState(null),s=[{question:"Como faço para contratar um seguro?",answer:"Você pode contratar diretamente pelo nosso site ou através do WhatsApp. O processo é rápido e simples."},{question:"Quanto tempo leva para aprovar uma apólice?",answer:"O prazo legal para aprovação de uma apolice é de 15 dias, conforme regulamentação da SUSEP. No entanto, algumas seguradoras podem ter um processo mais rápido."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Não tem taxa administrativa em caso de cancelamento."},{question:"Como faço para acionar meu seguro?",answer:o.jsxs(o.Fragment,{children:["Você pode entrar em contato direto com a companhia através da nossa"," ",o.jsx(he,{className:"navLink",to:"/corretoras",children:"página de contatos"})," ","ou através do nosso "," ",o.jsx("a",{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",className:"navLink",children:"canal de atendimento ao segurado via WhatsApp"})," ","e nossa equipe irá guia-lo em todo o processo."]})},{question:"Quais documentos preciso para contratar?",answer:"Depende do tipo de seguro. Para seguros de automóvel, por exemplo, precisamos da CNH e documento do veículo. Nossa equipe informará todos os documentos necessários durante a contratação."}],c=f=>{u(l===f?null:f)};return o.jsxs(Gy,{id:"faq",children:[o.jsxs(nt,{children:["Perguntas ",o.jsx("span",{children:"Frequentes"})]}),o.jsx(lt,{children:"Tire suas dúvidas sobre nossos produtos e serviços"}),o.jsx("div",{className:"faq-list",children:s.map((f,p)=>o.jsxs(Ly,{isOpen:l===p,children:[o.jsxs(Yy,{onClick:()=>c(p),children:[f.question,l===p?o.jsx(Qy,{}):o.jsx(Xy,{})]}),o.jsx(Vy,{isOpen:l===p,children:f.answer})]},p))})]})},Ms=j.section`
  padding: 5rem 0;
  background-color: ${h.colors.lightGray};
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Ky=r2`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,$s=j.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 2rem;
`,Ns=j.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: nowrap;
  width: max-content;
  animation: ${Ky} 20s linear infinite;

  // Pause on hover (desktop)
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation-play-state: paused;
    }
  }
`,qs=j.div`
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all ${h.transitions.default};
  flex: 0 0 auto;
  min-width: 160px;
  
  img {
    max-width: 100%;
    /* height: auto; */
    max-height: 50px;
    object-fit: contain;
  }
  
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }
`,vo="/AbaCorretora/assets/Porto-30iDzEz_.webp",bs="/AbaCorretora/assets/suhai-BGSD2-ff.webp",n1="/AbaCorretora/assets/bradesco-seguros-CU0YlWGC.webp",l1="/AbaCorretora/assets/akad-WygRT6HJ.webp",i1="/AbaCorretora/assets/allianz-AD1QpejW.webp",r1="/AbaCorretora/assets/azul-seguros-Dkd7YuIr.webp",Jy="/AbaCorretora/assets/hdi-BSlu-vdy.webp",o1="/AbaCorretora/assets/itau-CA2YPp_k.webp",Fy="/AbaCorretora/assets/liberty-CYdUqwAU.webp",u1="/AbaCorretora/assets/mapfre-BfLKiNQi.webp",Wy="/AbaCorretora/assets/mitsui-DPVuNnp1.webp",c1="/AbaCorretora/assets/pier-C6X-gZNf.webp",s1="/AbaCorretora/assets/tokio-PWOAQajT.webp",d1="/AbaCorretora/assets/zurich-Bl3pizn0.webp",f1="/AbaCorretora/assets/metlife-CAXA8Mmt.webp",m1="/AbaCorretora/assets/unimed-K0Q_FeZr.webp",h1="/AbaCorretora/assets/sulamerica-bAr1DSkW.webp",p1="/AbaCorretora/assets/portosaude-D-kX7kVD.webp",g1="/AbaCorretora/assets/amil-Ds0I0K89.webp",v1="/AbaCorretora/assets/bradesco-saude-CTYd8tOi.webp",b1="/AbaCorretora/assets/hapvida-fH7cADKa.webp",y1="/AbaCorretora/assets/sao-cristovao-DIepHmhN.webp",Py="/AbaCorretora/assets/sao-miguel-saude-C4GY8ihI.webp",x1="/AbaCorretora/assets/alice-BgrSNUpT.webp",Iy="/AbaCorretora/assets/allcare-BA9YMYeD.webp",S1="/AbaCorretora/assets/medsenior-DBUjLZq7.webp",j1="/AbaCorretora/assets/preventsenior-BTfljb9F.webp",ex="/AbaCorretora/assets/omint-B64DAi7n.webp",tx=()=>{const l=[{name:"Porto Seguro",logo:vo},{name:"Unimed",logo:m1},{name:"Suhai",logo:bs},{name:"Metlife",logo:f1},{name:"Bradesco",logo:n1},{name:"Sul America",logo:h1},{name:"Akad",logo:l1},{name:"Porto Saude",logo:p1},{name:"Allianz",logo:i1},{name:"Amil",logo:g1},{name:"Porto Seguro",logo:vo},{name:"Bradesco Saude",logo:v1},{name:"Azul",logo:r1},{name:"Hapvida",logo:b1},{name:"Itau",logo:o1},{name:"Sao Cristovao",logo:y1},{name:"Mapfre",logo:u1},{name:"Alice",logo:x1},{name:"Pier",logo:c1},{name:"Prevent Senior",logo:j1},{name:"Tokio",logo:s1},{name:"Medsenior",logo:S1},{name:"Zurich",logo:d1}],u=[...l,...l];return o.jsx(Ms,{children:o.jsx($s,{children:o.jsx(Ns,{children:u.map((s,c)=>o.jsx(qs,{children:o.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},ax=()=>{const l=[{name:"Porto Seguro",logo:vo},{name:"Suhai",logo:bs},{name:"Bradesco",logo:n1},{name:"Akad",logo:l1},{name:"Allianz",logo:i1},{name:"Porto Seguro",logo:vo},{name:"Suhai",logo:bs},{name:"Azul",logo:r1},{name:"HDI",logo:Jy},{name:"Itau",logo:o1},{name:"Liberty",logo:Fy},{name:"Mapfre",logo:u1},{name:"Mitsui",logo:Wy},{name:"Pier",logo:c1},{name:"Tokio",logo:s1},{name:"Zurich",logo:d1}],u=[...l,...l];return o.jsx(Ms,{children:o.jsx($s,{children:o.jsx(Ns,{children:u.map((s,c)=>o.jsx(qs,{children:o.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},nx=()=>{const l=[{name:"Metlife",logo:f1},{name:"Unimed",logo:m1},{name:"Sul America",logo:h1},{name:"Porto Saude",logo:p1},{name:"Amil",logo:g1},{name:"Bradesco Saude",logo:v1},{name:"Hapvida",logo:b1},{name:"Sao Cristovao",logo:y1},{name:"Sao Miguel",logo:Py},{name:"Alice",logo:x1},{name:"Allcare",logo:Iy},{name:"Medsenior",logo:S1},{name:"Prevent Senior",logo:j1},{name:"Omint",logo:ex}],u=[...l,...l];return o.jsx(Ms,{children:o.jsx($s,{children:o.jsx(Ns,{children:u.map((s,c)=>o.jsx(qs,{children:o.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},lx=j.section`
  background-color: ${h.colors.dark};
  padding: 5rem 0;
  color: ${h.colors.white};
  overflow: hidden; /* Adicionado para conter o carrossel */
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,ix=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,rx=j.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`,ox=j.div`
  background: ${h.colors.lightGray};
  border-radius: 12px;
  padding: 2.5rem;
  position: relative;
  color: ${h.colors.dark};
  
  /* Ajustes para layout flexível e altura consistente */
  height: 100%; 
  display: flex;
  flex-direction: column;
  
  .quote {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    font-weight: bold;
    color: #26a9e0; /* Cor azul que você definiu */
  }
  
  .testimonial {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 1rem 0 2rem;
    position: relative;
    z-index: 1;
    flex-grow: 1; /* Adicionado para empurrar o 'author' para baixo */
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    h4 {
      margin: 0;
      font-size: 1.1rem;
    }
    
    span {
      font-size: 0.9rem;
      color: ${h.colors.mediumGray};
    }
  }
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`,ux=j.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,cx=j.div`
  width: 100%;
  overflow: hidden;
`,sx=j.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`,dx=j.div`
  display: flex;
  gap: 1rem; // Define o espaço entre os slides
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;

  /* Esconde a barra de rolagem */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,fx=j.div`
  flex: 0 0 100%; // Faz cada slide ocupar 100% da viewport
  scroll-snap-align: start;
  min-width: 100%;
`,mx=j.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; // Alinha as setas à direita
  gap: 0.75rem;
  margin-top: 1rem;
  
  @media (max-width: ${h.breakpoints.tablet}) {
    justify-content: center; // Centraliza as setas no mobile
  }
`,up=j.button`
  /* Estilo de botão "Ghost" para combinar com o fundo escuro */
  background: transparent;
  color: ${h.colors.white};
  border: 1px solid ${h.colors.white};
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: ${h.transitions.default};
  font-size: 1rem;

  &:hover {
    background: ${h.colors.white};
    color: ${h.colors.dark}; /* Inverte as cores no hover */
  }
`,hx="/AbaCorretora/assets/jucelino-Bp9UFJA2.png",px="/AbaCorretora/assets/tamires-vPXPx5Bg.png",gx="/AbaCorretora/assets/thiago-DZ2v8mKy.png",vx="/AbaCorretora/assets/camila-CdxkK5qM.png",bx="/AbaCorretora/assets/vitor-C0e6Ru8k.png",yx=[{id:1,quote:"Aba Corretora, cuida da frota de veículos da minha Empresa com muita atenção e cuidado, toda equipe é muito atenciosa e o atendimento rápido e eficiênte, eu super recomendo.",name:"Jucelino Mendes",title:"Cliente há 2 anos",image:hx},{id:2,quote:"Sou muito satisfeita com meu seguro, a corretora Mariana é super competente, atenciosa, tirou todas minhas dúvidas quando fechei com eles. Obtive o melhor preço, eu amo e indico muito!!",name:"Tamires Elley",title:"Cliente há 1 ano",image:px},{id:3,quote:"Profissional incrível! Desde o primeiro contato, me senti super bem direcionado no processo do meu seguro. Ela foi clara, prestativa e mostrou total domínio do que fazia. Estou com ela até hoje, porque confio e recomendo de verdade!",name:"Thiago Bastos",title:"Cliente há 3 anos",image:gx},{id:4,quote:"Mariana é uma corretora excelente: muito atenciosa, detalhista, com atendimento cordial e vasto conhecimento do mercado segurador. Sempre nos apresenta as melhores opções para proteger a vida, os bens, os serviços e também em soluções financeiras. ",name:"Camila Barbosa",title:"Cliente há 4 anos",image:vx},{id:5,quote:"Eu tenho seguro com a Aba e tenho total confiança que meu veículo e minha residência estão protegidos !! Sempre que preciso tenho um ótimo atendimento.",name:"Vitor Carneiro",title:"Cliente há 4 anos",image:bx}],xx=()=>{const l=R.useRef(null),u=s=>{if(!l.current)return;const c=l.current.querySelector(":scope > *");if(!c)return;const f=c.getBoundingClientRect().width,p=window.getComputedStyle(l.current),b=parseFloat(p.gap)||16,C=s==="next"?f+b:-(f+b);l.current.scrollBy({left:C,behavior:"smooth"})};return o.jsx(lx,{id:"testimonials",children:o.jsxs(ix,{children:[o.jsxs("div",{children:[o.jsx(ux,{children:"O que nossos clientes dizem"}),o.jsx(rx,{children:"Mais de 400 clientes confiam em nossos serviços de proteção. Sua satisfação é nossa maior recompensa."})]}),o.jsxs(cx,{children:[o.jsx(sx,{children:o.jsx(dx,{ref:l,children:yx.map(s=>o.jsx(fx,{children:o.jsxs(ox,{children:[o.jsx("div",{className:"quote",children:'"'}),o.jsx("p",{className:"testimonial",children:s.quote}),o.jsxs("div",{className:"author",children:[o.jsx("img",{src:s.image,alt:`Cliente ${s.name}`}),o.jsxs("div",{children:[o.jsx("h4",{children:s.name}),o.jsx("span",{children:s.title})]})]})]})},s.id))})}),o.jsxs(mx,{children:[o.jsx(up,{"aria-label":"Anterior",onClick:()=>u("prev"),children:"◀"}),o.jsx(up,{"aria-label":"Próximo",onClick:()=>u("next"),children:"▶"})]})]})]})})},Sx="/AbaCorretora/assets/img-home-CAVUu0KH.webp",jx="/AbaCorretora/assets/automovel-v7wycPm7.webp",wx="/AbaCorretora/assets/residencial-BkyGMxCT.webp",Ax="/AbaCorretora/assets/saude-D9vBannL.webp",Cx="/AbaCorretora/assets/financiamento-egU71Zvi.webp",Ex="/AbaCorretora/assets/viagem-GBNKwrvT.webp",Tx="/AbaCorretora/assets/pet-Bbrdhl-x.webp",zx=()=>{const l=[{icon:jx,title:"Seguros",description:"Seguros que protegem seus patrimônios e vida: automóvel, equipamentos, empresa, residência, viagem, vida e muito mais."},{icon:wx,title:"Consórcio",description:"O consórcio é o caminho ideal para quem busca comprar um bem com parcelas que cabem no bolso e sem pagar juros."},{icon:Ax,title:"Plano de Saúde",description:"Encontre o plano de saúde (individual, familiar ou empresarial) com a cobertura ideal para suas necessidades e seu orçamento."},{icon:Cx,title:"Financiamento",description:"O financiamento ideal para suas conquistas. Taxas competitivas e planos flexíveis para você tirar seus projetos do papel."},{icon:Ex,title:"Empréstimo",description:"O empréstimo que você precisa está aqui. Dinheiro na mão para seus objetivos e sonhos."},{icon:Tx,title:"Petlove Saúde",description:"Planos de saúde para seu animal de estimação. Cuide bem do seu Pet."}];return o.jsxs(o.Fragment,{children:[o.jsxs(jy,{children:[o.jsx(wy,{children:o.jsxs(Ay,{children:[o.jsxs(Cy,{children:[o.jsx(Ey,{children:"Tranquilidade para sua família, segurança para sua empresa."}),o.jsx(Ty,{children:"Consultoria especializada em seguros, planos de saúde, odontológico e consórcios. As melhores soluções do mercado para você e sua empresa."}),o.jsx(Ic,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Contrate Agora"})]}),o.jsx(zy,{src:Sx,alt:"imagem hero"})]})}),o.jsx(Oy,{})]}),o.jsxs(py,{id:"products",children:[o.jsx(nt,{children:"Nossos Planos"}),o.jsx(lt,{children:"Opções que cabem no seu orçamento"}),(()=>{const u=R.useRef(null),s=f=>{if(!u.current)return;const p=u.current.parentElement,b=u.current.querySelector(":scope > *"),C=b?b.getBoundingClientRect().width+16:p.clientWidth,y=f==="next"?C:-C;u.current.scrollBy({left:y,behavior:"smooth"})},c=f=>{f.key==="ArrowRight"&&s("next"),f.key==="ArrowLeft"&&s("prev")};return o.jsxs(o.Fragment,{children:[o.jsx(vy,{role:"region","aria-label":"Carrossel de produtos",children:o.jsx(by,{ref:u,tabIndex:0,onKeyDown:c,children:l.map((f,p)=>o.jsx(yy,{"aria-roledescription":"slide",children:o.jsxs(gy,{children:[o.jsx(Sy,{children:o.jsx("img",{src:f.icon,alt:f.title})}),o.jsx("h3",{children:f.title}),o.jsx("p",{children:f.description}),o.jsxs("div",{className:"saiba-mais-wrapper",children:[o.jsx("a",{target:"_blank",href:"https://wa.me/5511945411551",children:"Saiba mais "})," "]})]})},p))})}),o.jsxs(xy,{children:[o.jsx(rp,{"aria-label":"Anterior",onClick:()=>s("prev"),children:"◀"}),o.jsx(rp,{"aria-label":"Próximo",onClick:()=>s("next"),children:"▶"})]})]})})()]}),o.jsxs(Ry,{children:[o.jsx(nt,{children:"Por que escolher a ABA Corretora?"}),o.jsx(lt,{children:"Atendimento consultivo, múltiplas seguradoras parceiras e soluções sob medida para você e sua empresa."}),o.jsxs(_y,{children:[o.jsx(Pc,{children:o.jsxs("div",{children:[o.jsx("h4",{children:"Assessoria Completa"}),o.jsx("p",{children:"Do orçamento à emissão da apólice e suporte em sinistros."})]})}),o.jsx(Pc,{children:o.jsxs("div",{children:[o.jsx("h4",{children:"Economia e Comparação"}),o.jsx("p",{children:"Cotamos nas principais seguradoras para o melhor custo-benefício."})]})}),o.jsx(Pc,{children:o.jsxs("div",{children:[o.jsx("h4",{children:"Atendimento Humanizado"}),o.jsx("p",{children:"Equipe próxima, rápida e disponível nos principais canais."})]})})]})]}),o.jsxs(Dy,{children:[o.jsx(nt,{children:"Como funciona"}),o.jsx(lt,{children:"4 passos simples para contratar seu seguro com tranquilidade."}),o.jsxs(My,{children:[o.jsxs(Xr,{children:[o.jsx("h4",{children:"1. Entendimento"}),o.jsx("p",{children:"Coletamos suas necessidades e perfil para indicar coberturas ideais."})]}),o.jsxs(Xr,{children:[o.jsx("h4",{children:"2. Cotações"}),o.jsx("p",{children:"Comparamos propostas entre seguradoras parceiras."})]}),o.jsxs(Xr,{children:[o.jsx("h4",{children:"3. Personalização"}),o.jsx("p",{children:"Ajustamos franquias e coberturas conforme seu orçamento."})]}),o.jsxs(Xr,{children:[o.jsx("h4",{children:"4. Contratação"}),o.jsx("p",{children:"Documentação rápida e acompanhamento pós-venda."})]})]})]}),o.jsx($y,{children:o.jsxs(Ny,{children:[o.jsxs(Zr,{children:[o.jsx("strong",{children:"8+"}),o.jsx("span",{children:"Anos de experiência"})]}),o.jsxs(Zr,{children:[o.jsx("strong",{children:"600+"}),o.jsx("span",{children:"Clientes atendidos"})]}),o.jsxs(Zr,{children:[o.jsx("strong",{children:"15+"}),o.jsx("span",{children:"Seguradoras parceiras"})]}),o.jsxs(Zr,{children:[o.jsx("strong",{children:"24h"}),o.jsx("span",{children:"Suporte em sinistros"})]})]})}),o.jsxs(Hy,{children:[o.jsx(nt,{children:"Mais soluções para você"}),o.jsx(lt,{children:"Além dos seguros, conte com nossas soluções em planos de saúde e consórcios para ampliar suas possibilidades."}),o.jsxs(ky,{children:[o.jsxs(op,{children:[o.jsx("h3",{children:"Planos de Saúde"}),o.jsx("p",{children:"Cuidar da sua saúde e da sua família é prioridade. Oferecemos planos de saúde individuais, familiares e empresariais, com ampla rede de atendimento e condições acessíveis."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Atendimento nacional com hospitais, clínicas e laboratórios de referência."}),o.jsx("li",{children:"Consultas e exames com agendamento facilitado."}),o.jsx("li",{children:"Planos com ou sem coparticipação"}),o.jsx("li",{children:"Isenção de carência mediante análise"})]})]}),o.jsxs(op,{children:[o.jsx("h3",{children:"Consórcios"}),o.jsx("p",{children:"Planeje suas conquistas com segurança e parcelas que cabem no seu bolso."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consórcio de automóveis"}),o.jsx("li",{children:"Consórcio imobiliário"}),o.jsx("li",{children:"Administração confiável e suporte em todas as etapas"})]})]})]})]}),o.jsx(qy,{children:o.jsxs(Uy,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Fale com um especialista"}),o.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),o.jsxs(By,{children:[o.jsx(Ic,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Solicitar cotação"}),o.jsx(Ic,{as:"a",href:"#faq",style:{backgroundColor:"#fff",color:"#001f3D"},children:"Tirar dúvidas"})]})]})}),o.jsx(tx,{}),o.jsx(xx,{}),o.jsx(Zy,{})]})},Ox=j.section`
  padding: 3rem 0;
  background: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
   
  }
`,es=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,Rx=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,il=j.article`
  background: ${h.colors.lightGray};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 24px;
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    margin: 0 0 1rem;
    color: ${h.colors.mediumGray};
  }
  ul {
    margin: 0;
    padding-left: 1.2rem;
  }
  li {
    color: ${h.colors.mediumGray};
    margin: 0.25rem 0;
  }
`,rl=j.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  background-color: #e0e0e0;
`,ol=j.div`
  background: ${h.colors.white};
  border-left: 4px solid ${h.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${h.colors.mediumGray};
  margin-top: 1rem;
`,_x=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,Dx=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,Mx=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,$x=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,Nx=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;j.p`
  color: ${h.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${h.breakpoints.tablet}) {
    max-width: 100%;
  }
`;const qx=j.img`
  width: 100%;
  max-width: 1200px;
  max-height: 450px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: ${h.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,Ux=j.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${h.breakpoints.mobile}) {
   clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`,ul=j.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: auto; /* Garante que o botão fique na parte inferior */

  background-color: ${h.colors.primary};
  color: ${h.colors.white};

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${h.colors.primaryDark};
  }
`,cl=j.a`
  display: block; // Para ocupar a largura total e permitir margin-top/bottom
  text-align: center;
  margin-top: 0.3rem; 
  background-color: ${h.colors.secundary};
  width: 100%;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  color: ${h.colors.white}; 
  font-size: 1rem; // Um tamanho de fonte menor
  font-weight: bold;
  text-decoration: none; // Sem sublinhado por padrão
  
  &:hover {
     color: ${h.colors.white}; 
  }
`,Bx=j.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,Hx=j.ol`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  list-style: none;
  counter-reset: step;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,Kr=j.li`
  background: ${h.colors.white};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;

  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -12px;
    left: -12px;
    background: ${h.colors.primary};
    color: ${h.colors.white};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }

  h4 {
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }
`,kx=j.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,Gx=j.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,Lx=j.div`
  display: flex;
  flex-shrink: 0;
  
`,Yx=j.button`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${h.colors.primaryDark};
    transform: scale(1.05);
  }
`,Vx=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Qx=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Xx=j.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  h4 {
    margin: 0.75rem 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    color: ${h.colors.mediumGray};
    font-size:16px;
  }
`;j.div`
  font-size: 2.5rem;
  color: ${h.colors.primary};
`;const Zx=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Kx=j.div`
  background: ${h.colors.lightGray};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border-left: 4px solid ${h.colors.secundary};

  h4 {
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  
  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }
`;function Jx(l){return Ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"},child:[]}]})(l)}function Fx(l){return Ve({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"},child:[]},{tag:"circle",attr:{cx:"9",cy:"13",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"13",r:"1"},child:[]},{tag:"path",attr:{d:"M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"},child:[]}]})(l)}const Wx="/AbaCorretora/assets/img-seguro-DlWdeZ7-.webp",w1="/AbaCorretora/assets/seguro-auto-D6qreSmg.webp",A1="/AbaCorretora/assets/seguro-residencial-Btqe_yzn.webp",Px="/AbaCorretora/assets/seguro-equipamentos-CPBCTzMW.webp",Ix="/AbaCorretora/assets/seguro-bike-CuLlbGiL.webp",C1="/AbaCorretora/assets/seguro-vida-DtiI4z54.webp",E1="/AbaCorretora/assets/seguro-viagem-CuWjTEg6.webp",e4=()=>{const l=[{icon:o.jsx(oy,{}),title:"Proteção Completa",description:"Coberturas abrangentes para todas as situações que você possa imaginar."},{icon:o.jsx(cy,{}),title:"Preços Acessíveis",description:"Planos que cabem no seu bolso sem abrir mão da qualidade."},{icon:o.jsx(Jx,{}),title:"Rápida Indenização",description:"Processos ágeis para que você receba o que é seu o mais rápido possível."},{icon:o.jsx(Fx,{}),title:"Suporte 24/7",description:"Atendimento humanizado disponível a qualquer hora, todos os dias."}],u=[{question:"Como funciona a franquia do seguro?",answer:"A franquia é a participação do segurado nos prejuízos em caso de sinistro. Se o custo do reparo for menor que a franquia, o segurado arca com o valor. Se for maior, a seguradora cobre o excedente."},{question:"O que é um sinistro e como devo proceder?",answer:"Sinistro é qualquer evento previsto na apólice que cause dano ou prejuízo. Ao ocorrer, você deve entrar em contato com a seguradora o mais rápido possível para receber as orientações de como acionar sua cobertura."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Sim, a maioria dos seguros pode ser cancelada a qualquer momento. A seguradora fará um cálculo para devolver parte do valor pago, proporcional ao tempo que ainda resta de cobertura."},{question:"Qual a diferença entre seguro e assistência 24h?",answer:"O seguro cobre os prejuízos financeiros de um sinistro (roubo, colisão, etc.), enquanto a assistência 24h oferece serviços emergenciais como guincho, chaveiro e eletricista, garantindo suporte no dia a dia."}];return o.jsxs(o.Fragment,{children:[o.jsxs(_x,{children:[o.jsx(Dx,{children:o.jsxs(Mx,{children:[o.jsx($x,{children:o.jsx(Nx,{children:"Proteção completa para manter você e sua família seguros."})}),o.jsx(qx,{src:Wx,alt:"imagem hero"})]})}),o.jsx(Ux,{})]}),o.jsx(Ox,{children:o.jsxs(es,{children:[o.jsx(nt,{children:"Nossos Seguros"}),o.jsx(lt,{children:"Proteção para todas as fases da sua vida. Encontre a solução ideal para veículos, residência, viagens, vida, equipamentos e muito mais."}),o.jsxs(Rx,{children:[o.jsxs(il,{children:[o.jsx(rl,{src:w1,alt:"Ícone representando seguro de automóvel"}),o.jsx("h3",{children:"Seguro Automóvel"}),o.jsx("p",{children:"Proteção contra colisão, roubo, furto, eventos naturais e terceiros."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Guincho 24h, carro reserva, taxi, hospedagem e etc"}),o.jsx("li",{children:"Cobertura para vidros, faróis, retrovisores "}),o.jsx("li",{children:"Assistência completa a terceiros"})]}),o.jsx(ol,{children:"Indicado para quem busca tranquilidade no dia a dia e proteção patrimonial."}),o.jsx(ul,{as:"a",target:"_blank",href:"http://www.porto.vc/SEGUROAUTO_2C888J_4adc4d250fef4398bff082d6ec55c22d",children:"Contratar Agora"}),o.jsx(cl,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Falar com Especialista"})]}),o.jsxs(il,{children:[o.jsx(rl,{src:A1,alt:"Ícone representando seguro residencial"}),o.jsx("h3",{children:"Seguro Residencial"}),o.jsx("p",{children:"Coberturas essenciais para sua casa: incêndio, vendaval, roubo e danos elétricos."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Assistência 24h (chaveiro, encanador, eletricista e etc)"}),o.jsx("li",{children:"Responsabilidade civil familiar"}),o.jsx("li",{children:"Proteção para eletroeletrônicos"})]}),o.jsx(ol,{children:"Excelente custo-benefício para proteger seu patrimônio e rotina."}),o.jsx(ul,{as:"a",target:"_blank",href:"http://www.porto.vc/RESIDENCIAESSENCIAL_2C888J_61958aa0450642a5b951525d33924932",children:"Contratar Agora"}),o.jsx(cl,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Falar com Especialista"})]}),o.jsxs(il,{children:[o.jsx(rl,{src:E1,alt:"Ícone representando seguro de viagem"}),o.jsx("h3",{children:"Seguro Viagem"}),o.jsx("p",{children:"Viaje pelo mundo com a certeza de que imprevistos médicos e logísticos não vão estragar sua experiência."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Despesas Médicas e Hospitalares"}),o.jsx("li",{children:"Cancelamento de viagem e extravio de bagagem"}),o.jsx("li",{children:"Assistência internacional 24h "})]}),o.jsx(ol,{children:"Essencial para viagens internacionais e para garantir sua paz de espírito."}),o.jsx(ul,{as:"a",target:"_blank",href:"http://www.porto.vc/VIAGEM_2C888J_4e6ceaf7a7994221896910f63bbdc78d",children:"Contratar Agora"}),o.jsx(cl,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Falar com Especialista"})]}),o.jsxs(il,{children:[o.jsx(rl,{src:C1,alt:"Ícone representando seguro de vida"}),o.jsx("h3",{children:"Seguro de Vida"}),o.jsx("p",{children:"Garanta a segurança financeira de quem você ama em momentos delicados, protegendo o futuro da sua família."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Cobertura em caso de falecimento"}),o.jsx("li",{children:"Indenização por invalidez (total ou parcial)"}),o.jsx("li",{children:"Assistência para doenças graves e acidentes"})]}),o.jsx(ol,{children:"Essencial para proteger financeiramente sua família e entes queridos."}),o.jsx(ul,{as:"a",target:"_blank",href:" http://www.porto.vc/SEGURODEVIDAON_2C888J_2cc78e5c020f4904814a1f187c934e26",children:"Contratar Agora"}),o.jsx(cl,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Falar com Especialista"})]}),o.jsxs(il,{children:[o.jsx(rl,{src:Px,alt:"Ícone representando seguro de equipamentos"}),o.jsx("h3",{children:"Equipamentos Portáteis"}),o.jsx("p",{children:"Proteja seus eletrônicos como notebook, smartphone e câmera contra danos, roubo e furto."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Proteção contra roubo e furto"}),o.jsx("li",{children:"Cobertura para danos físicos acidentais (quedas)"}),o.jsx("li",{children:"Danos elétricos e por líquidos"})]}),o.jsx(ol,{children:"Perfeito para profissionais e estudantes que dependem de seus equipamentos."}),o.jsx(ul,{as:"a",target:"_blank",href:"http://www.porto.vc/EQUIPAMENTOSPORTATEIS_2C888J_9c024469b4cd40d493617ac9c3ec506e",children:"Contratar Agora"}),o.jsx(cl,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Falar com Especialista"})]}),o.jsxs(il,{children:[o.jsx(rl,{src:Ix,alt:"Ícone representando seguro de bicicleta"}),o.jsx("h3",{children:"Seguro de Bicicleta"}),o.jsx("p",{children:"Pedale com tranquilidade sabendo que sua bike está protegida contra roubo, furto e acidentes."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Cobertura contra roubo e furto qualificado"}),o.jsx("li",{children:"Danos acidentais e quebra"}),o.jsx("li",{children:"Assistência e transporte em caso de acidente"})]}),o.jsx(ol,{children:"Ideal para ciclistas urbanos e atletas que querem garantir a segurança do seu investimento."}),o.jsx(ul,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Contratar Agora"}),o.jsx(cl,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Falar com Especialista"})]})]})]})}),o.jsx(Vx,{children:o.jsxs(es,{children:[o.jsx(nt,{children:"Nossos Diferenciais"}),o.jsx(lt,{children:"Oferecemos as melhores soluções em proteção para você e sua família."}),o.jsx(Qx,{children:l.map((s,c)=>o.jsxs(Xx,{children:[o.jsx("h3",{children:s.title}),o.jsx("p",{children:s.description})]},c))})]})}),o.jsxs(Bx,{children:[o.jsx(nt,{children:"Como Contratar?"}),o.jsx(lt,{children:"Contratar seu seguro é simples, rápido e totalmente digital."}),o.jsxs(Hx,{children:[o.jsxs(Kr,{children:[o.jsx("h4",{children:"Simulação Online"}),o.jsx("p",{children:"Escolha o seguro desejado e preencha algumas informações para receber sua cotação."})]}),o.jsxs(Kr,{children:[o.jsx("h4",{children:"Análise de Perfil"}),o.jsx("p",{children:"Nossos especialistas analisam seu perfil para encontrar a melhor cobertura pelo menor preço."})]}),o.jsxs(Kr,{children:[o.jsx("h4",{children:"Emissão da Apólice"}),o.jsx("p",{children:"Após a aprovação, sua apólice é emitida e enviada digitalmente para você."})]}),o.jsxs(Kr,{children:[o.jsx("h4",{children:"Tudo Pronto!"}),o.jsx("p",{children:"Você e seu patrimônio estão protegidos. Conte com nosso suporte sempre que precisar."})]})]})]}),o.jsx(Zx,{children:o.jsxs(es,{children:[o.jsx(nt,{children:"Perguntas Frequentes"}),o.jsx(lt,{children:"Ainda tem dúvidas? A gente ajuda você a esclarecer."}),u.map((s,c)=>o.jsxs(Kx,{children:[o.jsx("h4",{children:s.question}),o.jsx("p",{children:s.answer})]},c))]})}),o.jsx(kx,{children:o.jsxs(Gx,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Fale com um especialista"}),o.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),o.jsx(Lx,{children:o.jsx(Yx,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),o.jsx(ax,{})]})},t4=j.section`
  padding: 4rem 0;
  background: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,ts=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,a4=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,n4=j.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background-color: ${h.colors.lightGray};
`,l4=j.article`
  background: ${h.colors.white};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: ${h.shadows.small};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${h.shadows.medium};
  }

  h3 {
    margin: 1.25rem 1.25rem 0.5rem;
    color: ${h.colors.dark};
    font-size: 1.5rem;
  }

  p {
    margin: 0 1.25rem 1.5rem;
    color: ${h.colors.mediumGray};
    flex-grow: 1; /* Empurra o botão para baixo */
  }
`,i4=j.button`
  display: block;
  width: calc(100% - 2.5rem);
  padding: 0.75rem 1rem;
  margin: 0 1.25rem 1.25rem;

  background-color: ${h.colors.primary};
  color: ${h.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${h.colors.primaryDark};
  }
`,r4=j.section`
  padding: 4rem 0;
  background: ${h.colors.lightGray};
`,o4=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Jr=j.div`
  background: ${h.colors.white};
  border-radius: 12px;
  padding: 1.5rem;
  border-top: 4px solid ${h.colors.primary};
  box-shadow: ${h.shadows.small};

  h4 {
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }
`,u4=j.section`
  padding: 4rem 0;
  background: ${h.colors.white};
`,c4=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,as=j.div`
  text-align: center;
  h4 {
    margin: 1rem 0 0.5rem;
  }
`,ns=j.div`
  font-size: 3rem;
  color: ${h.colors.primary};
`,s4=j.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,d4=j.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,f4=j.div`
  display: flex;
  flex-shrink: 0;
`,m4=j.button`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${h.colors.primaryDark};
    transform: scale(1.05);
  }
`,h4=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,p4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,g4=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
  text-align: center;
`,v4=j.div``,b4=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,y4=j.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
`,x4=j.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
`,S4="/AbaCorretora/assets/img-consorcio-DvFABkr6.webp",j4="/AbaCorretora/assets/consorcio-imovel-BsMy8Emp.webp",w4="/AbaCorretora/assets/consorcio-automovel-DuhiKWI6.webp",A4="/AbaCorretora/assets/consorcio-servicos-IYxMUqUU.webp",C4=()=>{const l=[{img:j4,title:"Consórcio Imobiliário",description:"A forma mais inteligente de comprar, construir ou reformar seu imóvel sem juros."},{img:w4,title:"Consórcio de Veículos",description:"Planeje a compra do seu carro, moto ou utilitário novo ou seminovo com parcelas que cabem no bolso."},{img:A4,title:"Consórcio de Serviços",description:"Realize seus sonhos como viagens, festas, cirurgias plásticas ou cursos com planejamento e economia."}];return o.jsxs(o.Fragment,{children:[o.jsxs(h4,{children:[o.jsx(p4,{children:o.jsxs(g4,{children:[o.jsx(v4,{children:o.jsx(b4,{children:"Conquiste seus maiores sonhos sem pagar juros."})}),o.jsx(y4,{src:S4,alt:"Família feliz com a conquista da casa própria através de consórcio"})]})}),o.jsx(x4,{})]}),o.jsx(t4,{children:o.jsxs(ts,{children:[o.jsx(nt,{children:"Consórcio: O Planejamento Inteligente"}),o.jsx(lt,{children:"Uma modalidade de compra baseada na união de pessoas que formam uma poupança comum destinada à aquisição de bens ou serviços. Ideal para quem não tem pressa e busca disciplina financeira para atingir grandes objetivos."}),o.jsx(a4,{children:l.map((u,s)=>o.jsxs(l4,{children:[o.jsx(n4,{src:u.img,alt:u.title}),o.jsx("h3",{children:u.title}),o.jsx("p",{children:u.description}),o.jsx(i4,{target:"_blank",as:"a",href:"https://wa.me/5511945411551",children:"Simular Agora"})]},s))})]})}),o.jsx(r4,{children:o.jsxs(ts,{children:[o.jsx(nt,{children:"Como Funciona na Prática?"}),o.jsx(lt,{children:"O processo é simples e transparente. Veja as 4 etapas principais:"}),o.jsxs(o4,{children:[o.jsxs(Jr,{children:[o.jsx("h4",{children:"1. Formação do Grupo"}),o.jsx("p",{children:"Você adere a um grupo com outras pessoas que têm o mesmo objetivo que você."})]}),o.jsxs(Jr,{children:[o.jsx("h4",{children:"2. Contribuição Mensal"}),o.jsx("p",{children:"Todos os participantes pagam parcelas mensais, que formam o fundo do grupo."})]}),o.jsxs(Jr,{children:[o.jsx("h4",{children:"3. Contemplação"}),o.jsx("p",{children:"Mensalmente, participantes são contemplados por sorteio ou lance para receber o crédito."})]}),o.jsxs(Jr,{children:[o.jsx("h4",{children:"4. Aquisição do Bem"}),o.jsx("p",{children:"Com a carta de crédito em mãos, você tem poder de compra à vista para adquirir seu bem."})]})]})]})}),o.jsx(u4,{children:o.jsxs(ts,{children:[o.jsx(nt,{children:"Principais Vantagens"}),o.jsx(lt,{children:"Descubra por que o consórcio é a melhor opção para o seu planejamento."}),o.jsxs(c4,{children:[o.jsxs(as,{children:[o.jsx(ns,{children:o.jsx(ry,{})}),o.jsx("h4",{children:"Sem Juros"}),o.jsx("p",{children:"Você paga apenas uma taxa de administração, que é muito menor que os juros de um financiamento."})]}),o.jsxs(as,{children:[o.jsx(ns,{children:o.jsx(ny,{})}),o.jsx("h4",{children:"Poder de Compra"}),o.jsx("p",{children:"Ao ser contemplado, você recebe o valor integral da carta de crédito para negociar sua compra à vista."})]}),o.jsxs(as,{children:[o.jsx(ns,{children:o.jsx(uy,{})}),o.jsx("h4",{children:"Flexibilidade"}),o.jsx("p",{children:"Utilize o crédito para o bem que desejar dentro da categoria do seu grupo, com total liberdade de escolha."})]})]})]})}),o.jsx(s4,{children:o.jsxs(d4,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Pronto para dar o primeiro passo?"}),o.jsx("p",{children:"Faça uma simulação gratuita e sem compromisso para encontrar o plano perfeito para você."})]}),o.jsx(f4,{children:o.jsx(m4,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Fazer Simulação"})})]})})]})},Fr=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,ga=j.article`
  border-radius: 12px;
  overflow: hidden;
  transition: all ${h.transitions.default};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  background: ${h.colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 0;

  .image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-bottom: 1px solid ${h.colors.border||"#e5e7eb"};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${h.transitions.default};
    }

    .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: ${h.colors.primary};
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  h3 {
    font-size: 1.25rem;
    margin: 1.5rem 1.25rem 1rem;
    line-height: 1.4;
    color: ${h.colors.dark};
  }

  p {
    margin: 0 1.25rem 1.5rem;
    color: ${h.colors.mediumGray};
    flex-grow: 1;
  }

  .read-more {
    display: inline-block;
    margin: 0 1.25rem 1.5rem;
    color: ${h.colors.primary};
    font-weight: 500;
    text-decoration: none;
    transition: all ${h.transitions.default};

    &:hover {
      color: ${h.colors.dark};
    }
  }

  &:hover {
    box-shadow: ${h.shadows.medium};

    img {
      transform: scale(1.05);
    }
  }
`,E4=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,T4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,z4=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,O4=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,R4=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;j.p`
  color: ${h.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${h.breakpoints.tablet}) {
    max-width: 100%;
  }
`;const _4=j.img`
  width: 100%;
  max-width: 1200px;
  max-height: 500px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: ${h.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,D4=j.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${h.breakpoints.mobile}) {
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`,ls=j.div`
  background: ${h.colors.white};
  border-left: 4px solid ${h.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${h.colors.mediumGray};
  margin-top: 1rem;
  margin: 1rem 1.25rem 1.25rem;
`,Wr=j.h2`
  font-size: 2.5rem;
  color: ${h.colors.secundary};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 2rem;
    padding: 0 1.2rem;
  }
`,Pr=j.p`
  font-size: 1.25rem;
  color: ${h.colors.mediumGray};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`,Ir=j.section`
  padding: 3rem 0;
  background-color: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,is=j.article`
  border-radius: 12px;
  overflow: hidden;
  transition: all ${h.transitions.default};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  background: ${h.colors.lightGray};
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  height: 100%;

  .image-container {
    position: relative;
    height: 220px;
    overflow: hidden;
    border-bottom: 1px solid ${h.colors.border||"#e5e7eb"}; /* Linha sutil abaixo da imagem */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${h.transitions.default};
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 1.25rem 1.25rem 0.75rem;
    line-height: 1.4;
    color: ${h.colors.dark};
  }

  p {
    margin: 0 1.25rem 1rem;
    color: ${h.colors.mediumGray};
    flex-grow: 1;
  }

  ul {
    margin: 0 1.25rem 1rem;
    padding-left: 1.5rem;
  }
  li {
    color: ${h.colors.mediumGray};
    margin: 0.25rem 0;
  }

  .card-button-wrapper {
    margin-top: auto;
    padding: 1rem 1.25rem 1.25rem;
  }

  &:hover {
    box-shadow: ${h.shadows.medium};

    img {
      transform: scale(1.05);
    }
  }
`,rs=j.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: auto;

  background-color: ${h.colors.primary};
  color: ${h.colors.white};

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${h.colors.primary};
  }
`,M4=j.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,$4=j.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,N4=j.div`
  display: flex;
  flex-shrink: 0;
`,q4=j.button`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${h.colors.primaryDark};
    transform: scale(1.05);
  }
`,U4="/AbaCorretora/assets/img-saude-D4ti4aYu.webp",B4="/AbaCorretora/assets/convenio-medico-DHQi6kuG.webp",H4="/AbaCorretora/assets/convenio-odonto-CKul8QD8.webp",k4="/AbaCorretora/assets/convenio-pet-DK-lPRO6.webp";function G4(){return o.jsxs(o.Fragment,{children:[o.jsxs(E4,{children:[o.jsx(T4,{children:o.jsxs(z4,{children:[o.jsx(O4,{children:o.jsx(R4,{children:"Planos de saúde com valores que cabem no seu orçamento."})}),o.jsx(_4,{src:U4,alt:"imagem hero"})]})}),o.jsx(D4,{})]}),o.jsxs(Ir,{id:"convenios",children:[o.jsx(Wr,{children:"Planos de Saúde"}),o.jsx(Pr,{children:"Encontre o plano ideal para sua saúde e bem-estar, com cobertura completa para você, sua família e até mesmo seu pet."}),o.jsxs(Fr,{children:[o.jsxs(is,{children:[o.jsx("div",{className:"image-container",children:o.jsx("img",{src:B4,alt:"Família feliz com médico, representando convênio médico",loading:"lazy"})}),o.jsx("h3",{children:"Convênio Médico"}),o.jsx("p",{children:"Cuidado integral para sua saúde. Acesse uma ampla rede credenciada de hospitais, clínicas e laboratórios."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consultas e exames"}),o.jsx("li",{children:"Internações e cirurgias"}),o.jsx("li",{children:"Atendimento de emergência 24h"})]}),o.jsx(ls,{children:"Ideal para quem busca segurança e tranquilidade no acesso a serviços de saúde de qualidade."}),o.jsx("div",{className:"card-button-wrapper",children:o.jsx(rs,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Ver Planos Médicos "})})]}),o.jsxs(is,{children:[o.jsx("div",{className:"image-container",children:o.jsx("img",{src:H4,alt:"Pessoas sorrindo, representando convênio odontológico",loading:"lazy"})}),o.jsx("h3",{children:"Convênio Odontológico"}),o.jsx("p",{children:"Mantenha seu sorriso saudável com cobertura para prevenção, tratamentos e procedimentos essenciais."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consultas e limpezas"}),o.jsx("li",{children:"Tratamentos de cárie e canal"}),o.jsx("li",{children:"Ortodontia (em alguns planos)"})]}),o.jsx(ls,{children:"Perfeito para quem valoriza a saúde bucal e quer evitar gastos inesperados com o dentista."}),o.jsx("div",{className:"card-button-wrapper",children:o.jsx(rs,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Ver Planos Odontológicos "})})]}),o.jsxs(is,{children:[o.jsx("div",{className:"image-container",children:o.jsx("img",{src:k4,alt:"Cão e gato felizes, representando convênio pet",loading:"lazy"})}),o.jsx("h3",{children:"Convênio Pet"}),o.jsx("p",{children:"Cuide da saúde do seu melhor amigo com planos que cobrem consultas, vacinas e procedimentos veterinários."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consultas e exames de rotina"}),o.jsx("li",{children:"Vacinas e vermifugação"}),o.jsx("li",{children:"Cirurgias e internações (em alguns planos)"})]}),o.jsx(ls,{children:"Essencial para tutores que querem garantir a longevidade e o bem-estar de seus animais de estimação."}),o.jsx("div",{className:"card-button-wrapper",children:o.jsx(rs,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Ver Planos Pet "})})]})]})]}),o.jsxs(Ir,{style:{backgroundColor:"#f9f9f9"},children:[o.jsx(Wr,{children:"Por que ter um Convênio Médico?"}),o.jsx(Pr,{children:"Garanta o acesso rápido e de qualidade a serviços de saúde essenciais para você e sua família, sem preocupações com gastos inesperados."}),o.jsxs(Fr,{children:[o.jsxs(ga,{children:[o.jsx("h3",{children:"Acesso Facilitado"}),o.jsx("p",{children:"Com um convênio médico, você e sua família têm acesso a uma ampla rede de médicos, hospitais e laboratórios credenciados, com agendamento facilitado e sem as longas filas do sistema público. Isso garante que você receba o atendimento necessário no momento certo."})]}),o.jsxs(ga,{children:[o.jsx("h3",{children:"Economia e Previsibilidade"}),o.jsx("p",{children:"Evite surpresas com os altos custos de consultas, exames, internações e cirurgias particulares. O convênio médico oferece mensalidades fixas, tornando seus gastos com saúde previsíveis e protegendo seu orçamento em caso de emergências ou tratamentos de longo prazo."})]}),o.jsxs(ga,{children:[o.jsx("h3",{children:"Cuidado Completo e Preventivo"}),o.jsx("p",{children:"Além do atendimento para doenças e emergências, muitos planos oferecem programas de medicina preventiva, check-ups regulares e acompanhamento para doenças crônicas. Invista na sua saúde e bem-estar com um cuidado abrangente e contínuo."})]})]})]}),o.jsxs(Ir,{children:[o.jsx(Wr,{children:"A Importância do Convênio Odontológico"}),o.jsx(Pr,{children:"Um sorriso saudável é essencial para sua qualidade de vida. Invista em prevenção e tratamentos odontológicos sem pesar no seu bolso."}),o.jsxs(Fr,{children:[o.jsxs(ga,{children:[o.jsx("h3",{children:"Prevenção de Doenças"}),o.jsx("p",{children:"Consultas e limpezas regulares são fundamentais para prevenir cáries, gengivite e outras doenças bucais que podem afetar sua saúde geral. O convênio odontológico facilita esse acesso à prevenção."})]}),o.jsxs(ga,{children:[o.jsx("h3",{children:"Cobertura para Tratamentos Essenciais"}),o.jsx("p",{children:"De obturações a tratamentos de canal, o convênio cobre uma série de procedimentos que seriam caros se feitos de forma particular. Garanta que você não adie tratamentos importantes devido ao custo."})]}),o.jsxs(ga,{children:[o.jsx("h3",{children:"Estética e Bem-estar"}),o.jsx("p",{children:"Um sorriso bonito aumenta a autoestima e a confiança. Além da saúde, muitos planos oferecem cobertura para procedimentos estéticos ou ortodônticos (parcialmente), contribuindo para seu bem-estar."})]})]})]}),o.jsxs(Ir,{style:{backgroundColor:"#f9f9f9"},children:[o.jsx(Wr,{children:"Cuide do seu Melhor Amigo com um Convênio Pet"}),o.jsx(Pr,{children:"Seu pet merece o melhor cuidado! Proteja a saúde do seu companheiro de quatro patas com planos veterinários completos e acessíveis."}),o.jsxs(Fr,{children:[o.jsxs(ga,{children:[o.jsx("h3",{children:"Atendimento Veterinário Completo"}),o.jsx("p",{children:"Garanta consultas, exames, vacinas e até cirurgias para seu pet com uma rede credenciada de clínicas e hospitais veterinários. Seu amigo terá acesso aos melhores profissionais e tratamentos."})]}),o.jsxs(ga,{children:[o.jsx("h3",{children:"Prevenção e Bem-estar"}),o.jsx("p",{children:"Mantenha seu pet protegido com a cobertura de vacinas essenciais, vermifugação e check-ups regulares. A prevenção é a melhor forma de garantir uma vida longa e saudável para ele."})]}),o.jsxs(ga,{children:[o.jsx("h3",{children:"Segurança em Emergências"}),o.jsx("p",{children:"Acidentes e doenças podem acontecer. Com um convênio pet, você tem a tranquilidade de saber que os custos com emergências, cirurgias e internações estarão cobertos, sem comprometer seu orçamento."})]})]})]}),o.jsx(M4,{children:o.jsxs($4,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Fale com um especialista"}),o.jsx("p",{children:"Receba uma consultoria gratuita para encontrar o plano ideal."})]}),o.jsx(N4,{children:o.jsx(q4,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),o.jsx(nx,{})]})}const L4=j.section`
  padding: 5rem 2rem;
  background-color: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 1rem;
    margin-top: 60px;
  }
`,Y4=j.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`,V4=j.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Q4=j.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,os=j.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${h.colors.border};
  background: ${h.colors.lightGray};
  color: ${h.colors.dark};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  svg {
    font-size: 2.5rem;
    color: ${h.colors.primary};
    flex-shrink: 0;
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: ${h.shadows.medium};
    border-color: ${h.colors.primary};
  }

  // Estilo primário para o card de WhatsApp
  ${({primary:l})=>l&&Ao`
    background: ${h.colors.primary};
    color: ${h.colors.white};
    border-color: ${h.colors.primary};

    svg {
      color: ${h.colors.white};
    }

    p {
      color: rgba(255, 255, 255, 0.9);
    }

    &:hover {
      background: ${h.colors.primaryDark};
      border-color: ${h.colors.primaryDark};
    }
  `}
`,X4=j.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${h.shadows.medium};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  @media (max-width: ${h.breakpoints.tablet}) {
    height: 300px;
    order: -1; /* Joga o mapa para cima no mobile */
  }
`,Z4=j.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid ${h.colors.border};

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`,cp=j.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: ${h.colors.secundary};
  }
  
  h4 {
    margin: 0 0 0.25rem;
    color: ${h.colors.dark};
  }

  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }
  
  @media (max-width: ${h.breakpoints.mobile}) {
    flex-direction: column;
  }
`,K4=()=>o.jsxs(L4,{id:"contact",children:[o.jsxs(Y4,{children:[o.jsx(nt,{children:"Estamos aqui para ajudar"}),o.jsx(lt,{children:"Escolha o melhor canal para falar conosco. Nossa equipe de especialistas está pronta para atender você."})]}),o.jsxs(V4,{children:[o.jsxs(Q4,{children:[o.jsxs(os,{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",primary:!0,children:[o.jsx(a1,{}),o.jsxs("div",{children:[o.jsx("h3",{children:"WhatsApp"}),o.jsx("p",{children:"Clique aqui para iniciar uma conversa agora mesmo."})]})]}),o.jsxs(os,{href:"tel:+551140044004",children:[o.jsx(iy,{}),o.jsxs("div",{children:[o.jsx("h3",{children:"Telefone"}),o.jsx("p",{children:"(11) 94541-1551"})]})]}),o.jsxs(os,{href:"mailto:contato@abacorretora.com.br",children:[o.jsx(ay,{}),o.jsxs("div",{children:[o.jsx("h3",{children:"E-mail"}),o.jsx("p",{children:"abaseguros@abaseguros.com.br"})]})]})]}),o.jsx(X4,{children:o.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.210770118163!2d-46.504975200000004!3d-23.5249205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60bce3afc021%3A0xf2841702e1fdf959!2sR.%20Itingu%C3%A7u%2C%201019%20-%20Vila%20R%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003658-010!5e0!3m2!1spt-BR!2sbr!4v1760037282599!5m2!1spt-BR!2sbr",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Endereço da ABA Corretora na Av. Paulista"})})]}),o.jsxs(Z4,{children:[o.jsxs(cp,{children:[o.jsx(ly,{}),o.jsxs("div",{children:[o.jsx("h4",{children:"Nosso Endereço"}),o.jsx("p",{children:"Av. Itinguçu, 1019 - Vila Ré, São Paulo/SP"})]})]}),o.jsxs(cp,{children:[o.jsx(ey,{}),o.jsxs("div",{children:[o.jsx("h4",{children:"Horário de Atendimento"}),o.jsx("p",{children:"Segunda a Sexta: 08h às 18h"})]})]})]})]}),J4=j.div`
  position: fixed;
  bottom: 1.5rem;  /* Adicionado espaçamento do final da tela */
  left: 50%;       /* Posiciona o início do banner no meio da tela */
  transform: translateX(-50%); /* Centraliza o banner horizontalmente */
  
  width: calc(100% - 2rem); /* Garante um espaçamento nas laterais em telas menores */
  max-width: 1200px;        /* Define a largura máxima solicitada */
  
  background-color: ${h.colors.primary};
  color: ${h.colors.white};
  padding: 1.5rem 2rem;
  
  display: flex;
  align-items: center; /* Alinha o ícone, texto e botão verticalmente */
  gap: 1.5rem;
  
  border-radius: 12px; /* Adiciona as bordas arredondadas */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  /* Estilização para o ícone que será adicionado via react-icons */
  svg {
    font-size: 2rem; /* Tamanho do ícone */
    color: ${h.colors.white}; /* Cor do ícone */
    flex-shrink: 0; /* Impede que o ícone seja esmagado em telas menores */
  }

  /* Em telas menores, o layout vira uma coluna */
  @media (max-width: ${h.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem;
  }
`,F4=j.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;

  a {
    color: ${h.colors.dark};
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`,W4=j.button`
  background-color: ${h.colors.secundary};
  color: ${h.colors.white};
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0; /* Impede que o botão seja esmagado */

  &:hover {
    background-color: #fd5000;
  }
`,sp="cookies_accepted",P4=()=>{const[l,u]=R.useState(!1);R.useEffect(()=>{localStorage.getItem(sp)||u(!0)},[]);const s=()=>{localStorage.setItem(sp,"true"),u(!1)};return l?o.jsxs(J4,{children:[o.jsx(ty,{}),o.jsxs(F4,{children:['Utilizamos cookies para oferecer a melhor experiência e analisar o desempenho do nosso site. Ao clicar em "Aceitar Cookies", você concorda com o uso de todos os cookies. Para mais informações, consulte nossa'," ",o.jsx("a",{href:"/politica-de-privacidade",children:"Política de Privacidade"}),"."]}),o.jsx(W4,{onClick:s,children:"Aceitar Cookies"})]}):null};function I4(){const{pathname:l}=Sa();return R.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[l]),null}const e3=j.section`
  padding: 4rem 0;
  background-color: ${h.colors.lightGray};
  min-height: 80vh; // Garante que a página tenha uma altura mínima

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,t3=j.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  overflow-x: auto; // Essencial para responsividade da tabela
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,a3=j.table`
  width: 100%;
  border-collapse: collapse;
  background: ${h.colors.white};
  border-radius: 12px;
  /* Use a sombra do seu tema, se houver, ou a do ProductCard */
  box-shadow: ${h.shadows?.medium||"0 4px 12px rgba(0, 0, 0, 0.05)"};
  overflow: hidden; /* Para o border-radius funcionar no 'thead' */
  border: 1px solid ${h.colors.border||"#e5e7eb"};

  th,
  td {
    padding: 1rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid ${h.colors.border||"#e5e7eb"};
  }

  th {
    background: ${h.colors.white};
    color: ${h.colors.dark};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    color: ${h.colors.mediumGray};
    font-size: 1rem;
  }

  /* Remove a borda da última linha */
  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    th,
    td {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
  }
`,n3=j.button`
  background: ${({isCopied:l,theme:u})=>l?"#28a745":u.colors.primary};
  color: ${h.colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${h.transitions.default};
  font-size: 0.9rem;
  min-width: 90px; /* Evita que o botão mude de tamanho */

  &:hover {
    background: ${({isCopied:l,theme:u})=>l?"#28a745":u.colors.primaryDark};
  }

  &:disabled {
    cursor: default;
  }
`,l3=[{id:1,name:"Corretora Exemplo Alfa",contact:"(11) 99999-1234"},{id:2,name:"Beta Seguros",contact:"(21) 98888-5678"},{id:3,name:"Gama Corretora",contact:"(31) 97777-4321"}],i3=()=>{const[l,u]=R.useState(null),s=(c,f)=>{navigator.clipboard.writeText(c).then(()=>{u(f),setTimeout(()=>{u(null)},2e3)})};return o.jsxs(e3,{children:[o.jsx(nt,{children:"Contatos das Corretoras"}),o.jsx(lt,{children:"Encontre e entre em contato com nossas corretoras parceiras."}),o.jsx(t3,{children:o.jsxs(a3,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Corretora"}),o.jsx("th",{children:"Contato"}),o.jsx("th",{children:"Copiar"})]})}),o.jsx("tbody",{children:l3.map(c=>o.jsxs("tr",{children:[o.jsx("td",{children:c.name}),o.jsx("td",{children:c.contact}),o.jsx("td",{children:o.jsx(n3,{onClick:()=>s(c.contact,c.id),isCopied:l===c.id,disabled:l===c.id,children:l===c.id?"Copiado!":"Clique aqui"})})]},c.id))})]})})]})},r3=j.section`
  padding: 3rem 0;
  background: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,dp=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,o3=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,u3=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,c3=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,s3=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,d3=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,f3=j.img`
  width: 100%;
  max-width: 1200px;
  max-height: 600px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: ${h.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,m3=j.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${h.breakpoints.mobile}) {
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`,h3=j.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,p3=j.ol`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  list-style: none;
  counter-reset: step;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,eo=j.li`
  background: ${h.colors.white};
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;

  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -12px;
    left: -12px;
    background: ${h.colors.primary};
    color: ${h.colors.white};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
  h4 {
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }
`,g3=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,v3=j.div`
  background: ${h.colors.lightGray};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border-left: 4px solid ${h.colors.secundary};

  h4 {
    margin: 0 0 0.5rem;
    color: ${h.colors.dark};
  }
  p {
    margin: 0;
    color: ${h.colors.mediumGray};
  }
`,b3=j.section`
  background: ${h.colors.primary};
  color: ${h.colors.white};
  padding: 3rem 0;
`,y3=j.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,x3=j.div`
  display: flex;
  flex-shrink: 0;
`,S3=j.button`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${h.colors.primaryDark};
    transform: scale(1.05);
  }
`,j3=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,w3=j.article`
  /* Estilo baseado no seu ProductCard, mas simplificado como na imagem */
  background: ${h.colors.white}; /* Fundo branco como na imagem */
  border: 1px solid ${h.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 0; /* Padding será interno */
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  position: relative;
  overflow: hidden; /* Para o border-radius da imagem funcionar */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.1rem; /* Título um pouco menor */
    margin: 1rem 1.25rem 0.5rem;
    color: ${h.colors.dark};
    font-weight: 600;
    flex-grow: 1; /* Empurra o preço e botão para baixo */
  }
`,A3=j.img`
  /* Estilo do seu ProductImage, mas com altura fixa */
  width: 100%;
  height: 180px; /* Altura fixa para alinhar a grade */
  object-fit: cover;
  background-color: #e0e0e0;
`,C3=j.span`
  /* Estilo da tag "NOVO" na imagem */
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  background: ${h.colors.secundary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 2;
`,E3=j.p`
  /* Estilo do preço na imagem */
  font-size: 1.25rem;
  font-weight: bold;
  color: ${h.colors.dark};
  margin: 0.5rem 1.25rem 1rem;
  line-height: 1;
`,T3=j.a`
  /* Estilo do seu ProductButton, mas como <a> e com margens */
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 2.5rem); /* 1.25rem de margem de cada lado */
  margin: 0 1.25rem 1.25rem; /* Margens */

  padding: 0.75rem 1rem;
  background-color: ${h.colors.primary};
  color: ${h.colors.white};

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${h.colors.primaryDark};
  }
`,z3="/AbaCorretora/assets/contrate-qOm5gv_C.webp",O3="/AbaCorretora/assets/cartao-C5OlbCS9.webp",R3="/AbaCorretora/assets/conta-BLrxCejT.webp",_3="/AbaCorretora/assets/equipamentos-BEO8xOsZ.webp",D3="/AbaCorretora/assets/arCondicionado-BswqJYdo.webp",M3="/AbaCorretora/assets/reparoArCondicionado-SFXWwpEQ.webp",$3="/AbaCorretora/assets/eletro-BoEK75kJ.webp",N3="/AbaCorretora/assets/fechadura-ixP9lh0v.webp",q3="/AbaCorretora/assets/limpezaAr-Duw_AiuF.webp",U3="/AbaCorretora/assets/limpezaSofa-CoKyFiwB.webp",B3="/AbaCorretora/assets/aquecedor-C8ggKrTW.webp",H3="/AbaCorretora/assets/azul-9kxREnPX.webp",k3="/AbaCorretora/assets/servicosGerais-BE4QNFnd.webp",G3="/AbaCorretora/assets/desentupidora-C0K8J5Tc.webp",L3="/AbaCorretora/assets/hidraulico-eg1goQbA.webp",Y3="/AbaCorretora/assets/guincho-C1hU1RDU.webp",V3="/AbaCorretora/assets/eletrica-5eBQzqbi.webp",Q3="/AbaCorretora/assets/celular-CGItzMyH.webp",X3=[{id:1,title:"Cartão de Crédito Porto Bank",image:O3,price:"Consulte",link:"http://www.porto.vc/CARTAODECREDITOPORTOBANK_2C888J_08580097b3b94188846765137cdde970",tag:"Financeiro"},{id:2,title:"Conta Digital Porto Bank",image:R3,price:"Gratuita",link:"http://www.porto.vc/CONTADIGITALPORTOBANK_2C888J_bf30075b311648a298e099b53bf9aa83",tag:"Financeiro"},{id:3,title:"Seguro Equipamentos Portáteis",image:_3,price:"Consulte",link:"http://www.porto.vc/EQUIPAMENTOSPORTATEIS_2C888J_9c024469b4cd40d493617ac9c3ec506e",tag:"Seguro"},{id:4,title:"Instalação de Ar Condicionado",image:D3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOINSTALACAODEARCONDICIONADO_2C888J_236ea5eac97949ff851979d791b173c6",tag:"Serviço"},{id:5,title:"Conserto de Ar Condicionado",image:M3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOCONSERTODEARCONDICIONADO_2C888J_3ebb64c816fe49b1b38633e437b20db0",tag:"Serviço"},{id:6,title:"Conserto de Eletrodomésticos",image:$3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOCONSERTODEELETRODOMESTICO_2C888J_997bb8fa00144daab2a7666397d7f541",tag:"Serviço"},{id:7,title:"Instalação de Fechadura Digital",image:N3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOINSTALACAODEFECHADURADIGITAL_2C888J_8c68120488cc42ec93f2ae8e04b00c6a",tag:"Serviço"},{id:8,title:"Limpeza de Ar Condicionado",image:q3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOLIMPEZADEARCONDICIONADO_2C888J_52556b93bcbb42219e5ffb1dfdf45579",tag:"Serviço"},{id:9,title:"Limpeza de Sofá e Estofados",image:U3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOLIMPEZADESOFAEESTOFADOS_2C888J_3a54492c203e40bdaa7fec40986a82d2",tag:"Serviço"},{id:10,title:"Manutenção de Aquecedor a Gás",image:B3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOMANUTENCAODEAQUECEDORAGAS_2C888J_85a3db639a484bf19c2a6e0bee224240",tag:"Serviço"},{id:11,title:"Residência Essencial",image:A1,price:"Consulte",link:"http://www.porto.vc/RESIDENCIAESSENCIAL_2C888J_61958aa0450642a5b951525d33924932",tag:"Seguro"},{id:12,title:"Seguro de Vida On",image:C1,price:"Consulte",link:"http://www.porto.vc/SEGURODEVIDAON_2C888J_2cc78e5c020f4904814a1f187c934e26",tag:"Seguro"},{id:13,title:"Seguro Viagem",image:E1,price:"Consulte",link:"http://www.porto.vc/VIAGEM_2C888J_4e6ceaf7a7994221896910f63bbdc78d",tag:"Seguro"},{id:14,title:"Azul por Assinatura",image:H3,price:"Consulte",link:"http://www.porto.vc/AZULPORASSINATURA_2C888J_125fd31ab392408d95ae1120b36c97a7",tag:"Assinatura"},{id:15,title:"Seguro Automóvel",image:w1,price:"Consulte",link:"http://www.porto.vc/SEGUROAUTO_2C888J_4adc4d250fef4398bff082d6ec55c22d",tag:"Seguro"},{id:16,title:"Porto Serviços (Geral)",image:k3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICO_2C888J_59ce64a743444d869f4d1880cd19b4b4",tag:"Serviço"},{id:17,title:"Porto Serviço Desentupimento",image:G3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICODESENTUPIMENTO_2C888J_294f3bd8d0694676be52211c06cb4ce9",tag:"Serviço"},{id:18,title:"Porto Serviço Consertos Hidráulicos",image:L3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOCONSERTOHIDRAULICOS_2C888J_9898e89495ff4a29b47633fddc73b1bc",tag:"Serviço"},{id:19,title:"Porto Serviço Guincho",image:Y3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOGUINCHO_2C888J_2ad08df43f094c34a43ac97179b888e3",tag:"Serviço"},{id:20,title:"Porto Serviço Consertos Elétricos",image:V3,price:"Consulte",link:"http://www.porto.vc/PORTOSERVICOCONSERTOSELETRICOS_2C888J_3b120fe61be4435c86bbc9e59c60446c",tag:"Serviço"},{id:21,title:"Seguro Celular",image:Q3,price:"Consulte",link:"http://www.porto.vc/SEGUROCELULAR_2C888J_b8d7305862ab4086aede4a2ed397e6bf",tag:"Seguro"}],Z3=[{question:"Como contrato um serviço?",answer:"É simples! Escolha o serviço desejado, clique em 'Contratar Agora' e siga as instruções para agendamento e pagamento. Você será direcionado para a plataforma de contratação."},{question:"Os serviços têm garantia?",answer:"Sim, todos os serviços prestados pela Porto Serviços possuem garantia de qualidade. O prazo da garantia varia conforme o tipo de serviço executado."},{question:"Posso parcelar o pagamento?",answer:"Sim, oferecemos diversas formas de pagamento, incluindo parcelamento no cartão de crédito. As condições exatas estarão disponíveis na página de pagamento do serviço."}],K3=()=>o.jsxs(o.Fragment,{children:[o.jsxs(o3,{children:[o.jsx(u3,{children:o.jsxs(c3,{children:[o.jsx(s3,{children:o.jsx(d3,{children:"Serviços Porto para sua casa, carro e vida cotidiana."})}),o.jsx(f3,{src:z3,alt:"Serviços Porto"})]})}),o.jsx(m3,{})]}),o.jsx(r3,{children:o.jsxs(dp,{children:[o.jsx(nt,{children:"Todos os Nossos Serviços"}),o.jsx(lt,{children:"Encontre seguros e serviços para todas as suas necessidades. Contrate online com rapidez e segurança."}),o.jsx(j3,{children:X3.map(l=>o.jsxs(w3,{children:[l.tag&&o.jsx(C3,{children:l.tag}),o.jsx(A3,{src:l.image,alt:l.title}),o.jsx("h3",{children:l.title}),o.jsx(E3,{children:l.price}),o.jsx(T3,{as:"a",href:l.link,target:"_blank",rel:"noopener noreferrer",children:"Contratar Agora"})]},l.id))})]})}),o.jsxs(h3,{children:[o.jsx(nt,{children:"Como Contratar?"}),o.jsx(lt,{children:"Contratar um serviço ou seguro é simples e rápido."}),o.jsxs(p3,{children:[o.jsxs(eo,{children:[o.jsx("h4",{children:"1. Escolha"}),o.jsx("p",{children:"Navegue pela nossa grade e escolha o serviço ou seguro que você precisa."})]}),o.jsxs(eo,{children:[o.jsx("h4",{children:"2. Simule"}),o.jsx("p",{children:'Clique em "Contratar Agora" para ver os detalhes, preços e simular seu plano.'})]}),o.jsxs(eo,{children:[o.jsx("h4",{children:"3. Contrate"}),o.jsx("p",{children:"Preencha seus dados e finalize a contratação de forma 100% digital."})]}),o.jsxs(eo,{children:[o.jsx("h4",{children:"4. Pronto!"}),o.jsx("p",{children:"Receba a confirmação e agende seu serviço ou receba sua apólice digital."})]})]})]}),o.jsx(g3,{children:o.jsxs(dp,{children:[o.jsx(nt,{children:"Perguntas Frequentes"}),o.jsx(lt,{children:"Ainda tem dúvidas? A gente ajuda você a esclarecer."}),Z3.map((l,u)=>o.jsxs(v3,{children:[o.jsx("h4",{children:l.question}),o.jsx("p",{children:l.answer})]},u))]})}),o.jsx(b3,{children:o.jsxs(y3,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Não encontrou o que procurava?"}),o.jsx("p",{children:"Fale com um de nossos especialistas e tire todas as suas dúvidas."})]}),o.jsx(x3,{children:o.jsx(S3,{as:"a",target:"_blank",href:"https://wa.me/5511945411551",children:"Falar pelo WhatsApp"})})]})})]});function J3(){return o.jsxs(Up,{theme:h,children:[o.jsx(o2,{}),o.jsx(Ub,{}),o.jsx(I4,{}),o.jsx("main",{children:o.jsxs(lb,{children:[o.jsx(va,{path:"/AbaCorretora",element:o.jsx(zx,{})}),o.jsx(va,{path:"/products",element:o.jsx(ab,{to:"/home",replace:!0})}),o.jsx(va,{path:"/seguros",element:o.jsx(e4,{})}),o.jsx(va,{path:"/consorcios",element:o.jsx(C4,{})}),o.jsx(va,{path:"/saude",element:o.jsx(G4,{})}),o.jsx(va,{path:"/contato",element:o.jsx(K4,{})}),o.jsx(va,{path:"/corretoras",element:o.jsx(i3,{})}),o.jsx(va,{path:"/contrateAgora",element:o.jsx(K3,{})})]})}),o.jsx(P4,{}),o.jsx(dy,{}),o.jsx(hy,{})]})}iv.createRoot(document.getElementById("root")).render(o.jsx(Ye.StrictMode,{children:o.jsx(Up,{theme:h,children:o.jsx(Tb,{children:o.jsx(J3,{})})})}));
