(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function s(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=s(f);fetch(f.href,p)}})();function fp(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var kc={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Jg(){if(Oh)return vi;Oh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(c,f,p){var b=null;if(p!==void 0&&(b=""+p),f.key!==void 0&&(b=""+f.key),"key"in f){p={};for(var C in f)C!=="key"&&(p[C]=f[C])}else p=f;return f=p.ref,{$$typeof:l,type:c,key:b,ref:f!==void 0?f:null,props:p}}return vi.Fragment=u,vi.jsx=s,vi.jsxs=s,vi}var Mh;function Wg(){return Mh||(Mh=1,kc.exports=Jg()),kc.exports}var o=Wg(),Gc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Fg(){if(Dh)return re;Dh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),M=Symbol.iterator;function B(x){return x===null||typeof x!="object"?null:(x=M&&x[M]||x["@@iterator"],typeof x=="function"?x:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,X={};function G(x,N,Y){this.props=x,this.context=N,this.refs=X,this.updater=Y||U}G.prototype.isReactComponent={},G.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function V(){}V.prototype=G.prototype;function H(x,N,Y){this.props=x,this.context=N,this.refs=X,this.updater=Y||U}var Z=H.prototype=new V;Z.constructor=H,k(Z,G.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ie=Object.prototype.hasOwnProperty;function F(x,N,Y,Q,P,de){return Y=de.ref,{$$typeof:l,type:x,key:N,ref:Y!==void 0?Y:null,props:de}}function Te(x,N){return F(x.type,N,void 0,void 0,void 0,x.props)}function we(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function ut(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return N[Y]})}var dt=/\/+/g;function Le(x,N){return typeof x=="object"&&x!==null&&x.key!=null?ut(""+x.key):N.toString(36)}function It(){}function ea(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(It,It):(x.status="pending",x.then(function(N){x.status==="pending"&&(x.status="fulfilled",x.value=N)},function(N){x.status==="pending"&&(x.status="rejected",x.reason=N)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Qe(x,N,Y,Q,P){var de=typeof x;(de==="undefined"||de==="boolean")&&(x=null);var te=!1;if(x===null)te=!0;else switch(de){case"bigint":case"string":case"number":te=!0;break;case"object":switch(x.$$typeof){case l:case u:te=!0;break;case A:return te=x._init,Qe(te(x._payload),N,Y,Q,P)}}if(te)return P=P(x),te=Q===""?"."+Le(x,0):Q,le(P)?(Y="",te!=null&&(Y=te.replace(dt,"$&/")+"/"),Qe(P,N,Y,"",function(lt){return lt})):P!=null&&(we(P)&&(P=Te(P,Y+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(dt,"$&/")+"/")+te)),N.push(P)),1;te=0;var Ve=Q===""?".":Q+":";if(le(x))for(var ve=0;ve<x.length;ve++)Q=x[ve],de=Ve+Le(Q,ve),te+=Qe(Q,N,Y,de,P);else if(ve=B(x),typeof ve=="function")for(x=ve.call(x),ve=0;!(Q=x.next()).done;)Q=Q.value,de=Ve+Le(Q,ve++),te+=Qe(Q,N,Y,de,P);else if(de==="object"){if(typeof x.then=="function")return Qe(ea(x),N,Y,Q,P);throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return te}function D(x,N,Y){if(x==null)return x;var Q=[],P=0;return Qe(x,Q,"","",function(de){return N.call(Y,de,P++)}),Q}function L(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var I=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return re.Children={map:D,forEach:function(x,N,Y){D(x,function(){N.apply(this,arguments)},Y)},count:function(x){var N=0;return D(x,function(){N++}),N},toArray:function(x){return D(x,function(N){return N})||[]},only:function(x){if(!we(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},re.Component=G,re.Fragment=s,re.Profiler=f,re.PureComponent=H,re.StrictMode=c,re.Suspense=y,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,re.__COMPILER_RUNTIME={__proto__:null,c:function(x){return K.H.useMemoCache(x)}},re.cache=function(x){return function(){return x.apply(null,arguments)}},re.cloneElement=function(x,N,Y){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Q=k({},x.props),P=x.key,de=void 0;if(N!=null)for(te in N.ref!==void 0&&(de=void 0),N.key!==void 0&&(P=""+N.key),N)!ie.call(N,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&N.ref===void 0||(Q[te]=N[te]);var te=arguments.length-2;if(te===1)Q.children=Y;else if(1<te){for(var Ve=Array(te),ve=0;ve<te;ve++)Ve[ve]=arguments[ve+2];Q.children=Ve}return F(x.type,P,void 0,void 0,de,Q)},re.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},re.createElement=function(x,N,Y){var Q,P={},de=null;if(N!=null)for(Q in N.key!==void 0&&(de=""+N.key),N)ie.call(N,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(P[Q]=N[Q]);var te=arguments.length-2;if(te===1)P.children=Y;else if(1<te){for(var Ve=Array(te),ve=0;ve<te;ve++)Ve[ve]=arguments[ve+2];P.children=Ve}if(x&&x.defaultProps)for(Q in te=x.defaultProps,te)P[Q]===void 0&&(P[Q]=te[Q]);return F(x,de,void 0,void 0,null,P)},re.createRef=function(){return{current:null}},re.forwardRef=function(x){return{$$typeof:C,render:x}},re.isValidElement=we,re.lazy=function(x){return{$$typeof:A,_payload:{_status:-1,_result:x},_init:L}},re.memo=function(x,N){return{$$typeof:g,type:x,compare:N===void 0?null:N}},re.startTransition=function(x){var N=K.T,Y={};K.T=Y;try{var Q=x(),P=K.S;P!==null&&P(Y,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(se,I)}catch(de){I(de)}finally{K.T=N}},re.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},re.use=function(x){return K.H.use(x)},re.useActionState=function(x,N,Y){return K.H.useActionState(x,N,Y)},re.useCallback=function(x,N){return K.H.useCallback(x,N)},re.useContext=function(x){return K.H.useContext(x)},re.useDebugValue=function(){},re.useDeferredValue=function(x,N){return K.H.useDeferredValue(x,N)},re.useEffect=function(x,N,Y){var Q=K.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(x,N)},re.useId=function(){return K.H.useId()},re.useImperativeHandle=function(x,N,Y){return K.H.useImperativeHandle(x,N,Y)},re.useInsertionEffect=function(x,N){return K.H.useInsertionEffect(x,N)},re.useLayoutEffect=function(x,N){return K.H.useLayoutEffect(x,N)},re.useMemo=function(x,N){return K.H.useMemo(x,N)},re.useOptimistic=function(x,N){return K.H.useOptimistic(x,N)},re.useReducer=function(x,N,Y){return K.H.useReducer(x,N,Y)},re.useRef=function(x){return K.H.useRef(x)},re.useState=function(x){return K.H.useState(x)},re.useSyncExternalStore=function(x,N,Y){return K.H.useSyncExternalStore(x,N,Y)},re.useTransition=function(){return K.H.useTransition()},re.version="19.1.1",re}var _h;function ys(){return _h||(_h=1,Gc.exports=Fg()),Gc.exports}var O=ys();const Ye=fp(O);var Yc={exports:{}},bi={},Lc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Pg(){return $h||($h=1,(function(l){function u(D,L){var I=D.length;D.push(L);e:for(;0<I;){var se=I-1>>>1,x=D[se];if(0<f(x,L))D[se]=L,D[I]=x,I=se;else break e}}function s(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var L=D[0],I=D.pop();if(I!==L){D[0]=I;e:for(var se=0,x=D.length,N=x>>>1;se<N;){var Y=2*(se+1)-1,Q=D[Y],P=Y+1,de=D[P];if(0>f(Q,I))P<x&&0>f(de,Q)?(D[se]=de,D[P]=I,se=P):(D[se]=Q,D[Y]=I,se=Y);else if(P<x&&0>f(de,I))D[se]=de,D[P]=I,se=P;else break e}}return L}function f(D,L){var I=D.sortIndex-L.sortIndex;return I!==0?I:D.id-L.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var b=Date,C=b.now();l.unstable_now=function(){return b.now()-C}}var y=[],g=[],A=1,M=null,B=3,U=!1,k=!1,X=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function le(D){for(var L=s(g);L!==null;){if(L.callback===null)c(g);else if(L.startTime<=D)c(g),L.sortIndex=L.expirationTime,u(y,L);else break;L=s(g)}}function K(D){if(X=!1,le(D),!k)if(s(y)!==null)k=!0,ie||(ie=!0,Le());else{var L=s(g);L!==null&&Qe(K,L.startTime-D)}}var ie=!1,F=-1,Te=5,we=-1;function ut(){return G?!0:!(l.unstable_now()-we<Te)}function dt(){if(G=!1,ie){var D=l.unstable_now();we=D;var L=!0;try{e:{k=!1,X&&(X=!1,H(F),F=-1),U=!0;var I=B;try{t:{for(le(D),M=s(y);M!==null&&!(M.expirationTime>D&&ut());){var se=M.callback;if(typeof se=="function"){M.callback=null,B=M.priorityLevel;var x=se(M.expirationTime<=D);if(D=l.unstable_now(),typeof x=="function"){M.callback=x,le(D),L=!0;break t}M===s(y)&&c(y),le(D)}else c(y);M=s(y)}if(M!==null)L=!0;else{var N=s(g);N!==null&&Qe(K,N.startTime-D),L=!1}}break e}finally{M=null,B=I,U=!1}L=void 0}}finally{L?Le():ie=!1}}}var Le;if(typeof Z=="function")Le=function(){Z(dt)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,ea=It.port2;It.port1.onmessage=dt,Le=function(){ea.postMessage(null)}}else Le=function(){V(dt,0)};function Qe(D,L){F=V(function(){D(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return B},l.unstable_next=function(D){switch(B){case 1:case 2:case 3:var L=3;break;default:L=B}var I=B;B=L;try{return D()}finally{B=I}},l.unstable_requestPaint=function(){G=!0},l.unstable_runWithPriority=function(D,L){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=B;B=D;try{return L()}finally{B=I}},l.unstable_scheduleCallback=function(D,L,I){var se=l.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,D){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=I+x,D={id:A++,callback:L,priorityLevel:D,startTime:I,expirationTime:x,sortIndex:-1},I>se?(D.sortIndex=I,u(g,D),s(y)===null&&D===s(g)&&(X?(H(F),F=-1):X=!0,Qe(K,I-se))):(D.sortIndex=x,u(y,D),k||U||(k=!0,ie||(ie=!0,Le()))),D},l.unstable_shouldYield=ut,l.unstable_wrapCallback=function(D){var L=B;return function(){var I=B;B=L;try{return D.apply(this,arguments)}finally{B=I}}}})(Qc)),Qc}var qh;function Ig(){return qh||(qh=1,Lc.exports=Pg()),Lc.exports}var Vc={exports:{}},ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function ev(){if(Nh)return ot;Nh=1;var l=ys();function u(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)g+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(y,g,A){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:M==null?null:""+M,children:y,containerInfo:g,implementation:A}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ot.createPortal=function(y,g){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return p(y,g,null,A)},ot.flushSync=function(y){var g=b.T,A=c.p;try{if(b.T=null,c.p=2,y)return y()}finally{b.T=g,c.p=A,c.d.f()}},ot.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(y,g))},ot.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},ot.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var A=g.as,M=C(A,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;A==="style"?c.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:B,fetchPriority:U}):A==="script"&&c.d.X(y,{crossOrigin:M,integrity:B,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ot.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var A=C(g.as,g.crossOrigin);c.d.M(y,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(y)},ot.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var A=g.as,M=C(A,g.crossOrigin);c.d.L(y,A,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ot.preloadModule=function(y,g){if(typeof y=="string")if(g){var A=C(g.as,g.crossOrigin);c.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(y)},ot.requestFormReset=function(y){c.d.r(y)},ot.unstable_batchedUpdates=function(y,g){return y(g)},ot.useFormState=function(y,g,A){return b.H.useFormState(y,g,A)},ot.useFormStatus=function(){return b.H.useHostTransitionStatus()},ot.version="19.1.1",ot}var Bh;function tv(){if(Bh)return Vc.exports;Bh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Vc.exports=ev(),Vc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function av(){if(Uh)return bi;Uh=1;var l=Ig(),u=ys(),s=tv();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(p(e)!==e)throw Error(c(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return C(i),e;if(r===n)return C(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var d=!1,m=i.child;m;){if(m===a){d=!0,a=i,n=r;break}if(m===n){d=!0,n=i,a=r;break}m=m.sibling}if(!d){for(m=r.child;m;){if(m===a){d=!0,a=r,n=i;break}if(m===n){d=!0,n=r,a=i;break}m=m.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,M=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var It=Symbol.for("react.client.reference");function ea(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===It?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case G:return"Profiler";case X:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:ea(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return ea(e(t))}catch{}}return null}var Qe=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],x=-1;function N(e){return{current:e}}function Y(e){0>x||(e.current=se[x],se[x]=null,x--)}function Q(e,t){x++,se[x]=e.current,e.current=t}var P=N(null),de=N(null),te=N(null),Ve=N(null);function ve(e,t){switch(Q(te,t),Q(de,e),Q(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lh(t),e=ih(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(P),Q(P,e)}function lt(){Y(P),Y(de),Y(te)}function Ja(e){e.memoizedState!==null&&Q(Ve,e);var t=P.current,a=ih(t,e.type);t!==a&&(Q(de,e),Q(P,a))}function ta(e){de.current===e&&(Y(P),Y(de)),Ve.current===e&&(Y(Ve),fi._currentValue=I)}var zt=Object.prototype.hasOwnProperty,zo=l.unstable_scheduleCallback,To=l.unstable_cancelCallback,z0=l.unstable_shouldYield,T0=l.unstable_requestPaint,Vt=l.unstable_now,R0=l.unstable_getCurrentPriorityLevel,Bs=l.unstable_ImmediatePriority,Us=l.unstable_UserBlockingPriority,zi=l.unstable_NormalPriority,O0=l.unstable_LowPriority,Hs=l.unstable_IdlePriority,M0=l.log,D0=l.unstable_setDisableYieldValue,xl=null,vt=null;function Aa(e){if(typeof M0=="function"&&D0(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(xl,e)}catch{}}var bt=Math.clz32?Math.clz32:q0,_0=Math.log,$0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(_0(e)/$0|0)|0}var Ti=256,Ri=4194304;function Wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~r,n!==0?i=Wa(n):(d&=m,d!==0?i=Wa(d):a||(a=m&~e,a!==0&&(i=Wa(a))))):(m=n&~r,m!==0?i=Wa(m):d!==0?i=Wa(d):a||(a=n&~e,a!==0&&(i=Wa(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Sl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function N0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ks(){var e=Ti;return Ti<<=1,(Ti&4194048)===0&&(Ti=256),e}function Gs(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function Ro(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function jl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function B0(e,t,a,n,i,r){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,z=e.hiddenUpdates;for(a=d&~a;0<a;){var _=31-bt(a),q=1<<_;m[_]=0,v[_]=-1;var T=z[_];if(T!==null)for(z[_]=null,_=0;_<T.length;_++){var R=T[_];R!==null&&(R.lane&=-536870913)}a&=~q}n!==0&&Ys(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(d&~t))}function Ys(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-bt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Ls(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-bt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qs(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:wh(e.type))}function U0(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var wa=Math.random().toString(36).slice(2),it="__reactFiber$"+wa,ft="__reactProps$"+wa,xn="__reactContainer$"+wa,Do="__reactEvents$"+wa,H0="__reactListeners$"+wa,k0="__reactHandles$"+wa,Vs="__reactResources$"+wa,Al="__reactMarker$"+wa;function _o(e){delete e[it],delete e[ft],delete e[Do],delete e[H0],delete e[k0]}function Sn(e){var t=e[it];if(t)return t;for(var a=e.parentNode;a;){if(t=a[xn]||a[it]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ch(e);e!==null;){if(a=e[it])return a;e=ch(e)}return t}e=a,a=e.parentNode}return null}function jn(e){if(e=e[it]||e[xn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function An(e){var t=e[Vs];return t||(t=e[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Al]=!0}var Xs=new Set,Zs={};function Fa(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(Zs[e]=t,e=0;e<t.length;e++)Xs.add(t[e])}var G0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ks={},Js={};function Y0(e){return zt.call(Js,e)?!0:zt.call(Ks,e)?!1:G0.test(e)?Js[e]=!0:(Ks[e]=!0,!1)}function Mi(e,t,a){if(Y0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Di(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function aa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var $o,Ws;function Cn(e){if($o===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||"",Ws=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$o+e+Ws}var qo=!1;function No(e,t){if(!e||qo)return"";qo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(R){var T=R}Reflect.construct(e,[],q)}else{try{q.call()}catch(R){T=R}e.call(q.prototype)}}else{try{throw Error()}catch(R){T=R}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(R){if(R&&T&&typeof R.stack=="string")return[R.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),d=r[0],m=r[1];if(d&&m){var v=d.split(`
`),z=m.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===z.length)for(n=v.length-1,i=z.length-1;1<=n&&0<=i&&v[n]!==z[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==z[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==z[i]){var _=`
`+v[n].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=n&&0<=i);break}}}finally{qo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Cn(a):""}function L0(e){switch(e.tag){case 26:case 27:case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 15:return No(e.type,!1);case 11:return No(e.type.render,!1);case 1:return No(e.type,!0);case 31:return Cn("Activity");default:return""}}function Fs(e){try{var t="";do t+=L0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q0(e){var t=Ps(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,r.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=Q0(e))}function Is(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ps(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var V0=/[\n"\\]/g;function Rt(e){return e.replace(V0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bo(e,t,a,n,i,r,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Uo(e,d,Tt(t)):a!=null?Uo(e,d,Tt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Tt(m):e.removeAttribute("name")}function ed(e,t,a,n,i,r,d,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Uo(e,t,a){t==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function En(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function td(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function ad(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Qe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function zn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var X0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||X0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ld(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&nd(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&nd(e,r,t[r])}function Ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(e){return K0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ko=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tn=null,Rn=null;function id(e){var t=jn(e);if(t&&(e=t.stateNode)){var a=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ft]||null;if(!i)throw Error(c(90));Bo(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Is(n)}break e;case"textarea":td(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&En(e,!!a.multiple,t,!1)}}}var Yo=!1;function rd(e,t,a){if(Yo)return e(t,a);Yo=!0;try{var n=e(t);return n}finally{if(Yo=!1,(Tn!==null||Rn!==null)&&(xr(),Tn&&(t=Tn,e=Rn,Rn=Tn=null,id(t),e)))for(t=0;t<e.length;t++)id(e[t])}}function Cl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ft]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lo=!1;if(na)try{var El={};Object.defineProperty(El,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",El,El),window.removeEventListener("test",El,El)}catch{Lo=!1}var Ca=null,Qo=null,Ni=null;function od(){if(Ni)return Ni;var e,t=Qo,a=t.length,n,i="value"in Ca?Ca.value:Ca.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[r-n];n++);return Ni=i.slice(e,1<n?1-n:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function ud(){return!1}function mt(e){function t(a,n,i,r,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ui:ud,this.isPropagationStopped=ud,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=mt(Pa),zl=A({},Pa,{view:0,detail:0}),J0=mt(zl),Vo,Xo,Tl,ki=A({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tl&&(Tl&&e.type==="mousemove"?(Vo=e.screenX-Tl.screenX,Xo=e.screenY-Tl.screenY):Xo=Vo=0,Tl=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),cd=mt(ki),W0=A({},ki,{dataTransfer:0}),F0=mt(W0),P0=A({},zl,{relatedTarget:0}),Zo=mt(P0),I0=A({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=mt(I0),t1=A({},Pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a1=mt(t1),n1=A({},Pa,{data:0}),sd=mt(n1),l1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r1[e])?!!t[e]:!1}function Ko(){return o1}var u1=A({},zl,{key:function(e){if(e.key){var t=l1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ko,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c1=mt(u1),s1=A({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=mt(s1),d1=A({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ko}),f1=mt(d1),m1=A({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),h1=mt(m1),p1=A({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=mt(p1),v1=A({},Pa,{newState:0,oldState:0}),b1=mt(v1),y1=[9,13,27,32],Jo=na&&"CompositionEvent"in window,Rl=null;na&&"documentMode"in document&&(Rl=document.documentMode);var x1=na&&"TextEvent"in window&&!Rl,fd=na&&(!Jo||Rl&&8<Rl&&11>=Rl),md=" ",hd=!1;function pd(e,t){switch(e){case"keyup":return y1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function S1(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(hd=!0,md);case"textInput":return e=t.data,e===md&&hd?null:e;default:return null}}function j1(e,t){if(On)return e==="compositionend"||!Jo&&pd(e,t)?(e=od(),Ni=Qo=Ca=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fd&&t.locale!=="ko"?null:t.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A1[e.type]:t==="textarea"}function bd(e,t,a,n){Tn?Rn?Rn.push(n):Rn=[n]:Tn=n,t=Er(t,"onChange"),0<t.length&&(a=new Hi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ol=null,Ml=null;function w1(e){Im(e,0)}function Gi(e){var t=wl(e);if(Is(t))return e}function yd(e,t){if(e==="change")return t}var xd=!1;if(na){var Wo;if(na){var Fo="oninput"in document;if(!Fo){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Fo=typeof Sd.oninput=="function"}Wo=Fo}else Wo=!1;xd=Wo&&(!document.documentMode||9<document.documentMode)}function jd(){Ol&&(Ol.detachEvent("onpropertychange",Ad),Ml=Ol=null)}function Ad(e){if(e.propertyName==="value"&&Gi(Ml)){var t=[];bd(t,Ml,e,Go(e)),rd(w1,t)}}function C1(e,t,a){e==="focusin"?(jd(),Ol=t,Ml=a,Ol.attachEvent("onpropertychange",Ad)):e==="focusout"&&jd()}function E1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Ml)}function z1(e,t){if(e==="click")return Gi(t)}function T1(e,t){if(e==="input"||e==="change")return Gi(t)}function R1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:R1;function Dl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!zt.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cd(e,t){var a=wd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wd(a)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$i(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$i(e.document)}return t}function Po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var O1=na&&"documentMode"in document&&11>=document.documentMode,Mn=null,Io=null,_l=null,eu=!1;function Td(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Mn==null||Mn!==$i(n)||(n=Mn,"selectionStart"in n&&Po(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_l&&Dl(_l,n)||(_l=n,n=Er(Io,"onSelect"),0<n.length&&(t=new Hi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Mn)))}function Ia(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Dn={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},tu={},Rd={};na&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function en(e){if(tu[e])return tu[e];if(!Dn[e])return e;var t=Dn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Rd)return tu[e]=t[a];return e}var Od=en("animationend"),Md=en("animationiteration"),Dd=en("animationstart"),M1=en("transitionrun"),D1=en("transitionstart"),_1=en("transitioncancel"),_d=en("transitionend"),$d=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function Ut(e,t){$d.set(e,t),Fa(t,[e])}var qd=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var a=qd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Fs(t)},qd.set(e,t),t)}return{value:e,source:t,stack:Fs(t)}}var Mt=[],_n=0,nu=0;function Yi(){for(var e=_n,t=nu=_n=0;t<e;){var a=Mt[t];Mt[t++]=null;var n=Mt[t];Mt[t++]=null;var i=Mt[t];Mt[t++]=null;var r=Mt[t];if(Mt[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}r!==0&&Nd(a,i,r)}}function Li(e,t,a,n){Mt[_n++]=e,Mt[_n++]=t,Mt[_n++]=a,Mt[_n++]=n,nu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function lu(e,t,a,n){return Li(e,t,a,n),Qi(e)}function $n(e,t){return Li(e,null,null,t),Qi(e)}function Nd(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-bt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Qi(e){if(50<li)throw li=0,sc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qn={};function $1(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,n){return new $1(e,t,a,n)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function la(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vi(e,t,a,n,i,r){var d=0;if(n=e,typeof e=="function")iu(e)&&(d=1);else if(typeof e=="string")d=Ng(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=xt(31,a,t,i),e.elementType=we,e.lanes=r,e;case k:return tn(a.children,i,r,t);case X:d=8,i|=24;break;case G:return e=xt(12,a,t,i|2),e.elementType=G,e.lanes=r,e;case K:return e=xt(13,a,t,i),e.elementType=K,e.lanes=r,e;case ie:return e=xt(19,a,t,i),e.elementType=ie,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case Z:d=10;break e;case H:d=9;break e;case le:d=11;break e;case F:d=14;break e;case Te:d=16,n=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=xt(d,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function tn(e,t,a,n){return e=xt(7,e,n,t),e.lanes=a,e}function ru(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function ou(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nn=[],Bn=0,Xi=null,Zi=0,Dt=[],_t=0,an=null,ia=1,ra="";function nn(e,t){Nn[Bn++]=Zi,Nn[Bn++]=Xi,Xi=e,Zi=t}function Ud(e,t,a){Dt[_t++]=ia,Dt[_t++]=ra,Dt[_t++]=an,an=e;var n=ia;e=ra;var i=32-bt(n)-1;n&=~(1<<i),a+=1;var r=32-bt(t)+i;if(30<r){var d=i-i%5;r=(n&(1<<d)-1).toString(32),n>>=d,i-=d,ia=1<<32-bt(t)+i|a<<i|n,ra=r+e}else ia=1<<r|a<<i|n,ra=e}function uu(e){e.return!==null&&(nn(e,1),Ud(e,1,0))}function cu(e){for(;e===Xi;)Xi=Nn[--Bn],Nn[Bn]=null,Zi=Nn[--Bn],Nn[Bn]=null;for(;e===an;)an=Dt[--_t],Dt[_t]=null,ra=Dt[--_t],Dt[_t]=null,ia=Dt[--_t],Dt[_t]=null}var ct=null,_e=null,ge=!1,ln=null,Xt=!1,su=Error(c(519));function rn(e){var t=Error(c(418,""));throw Nl(Ot(t,e)),su}function Hd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[it]=e,t[ft]=n,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<ri.length;a++)me(ri[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),ed(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),_i(t);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),ad(t,n.value,n.defaultValue,n.children),_i(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||nh(t.textContent,a)?(n.popover!=null&&(me("beforetoggle",t),me("toggle",t)),n.onScroll!=null&&me("scroll",t),n.onScrollEnd!=null&&me("scrollend",t),n.onClick!=null&&(t.onclick=zr),t=!0):t=!1,t||rn(e)}function kd(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ct=ct.return}}function $l(e){if(e!==ct)return!1;if(!ge)return kd(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ec(e.type,e.memoizedProps)),a=!a),a&&_e&&rn(e),kd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){_e=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}_e=null}}else t===27?(t=_e,Ga(e.type)?(e=Oc,Oc=null,_e=e):_e=t):_e=ct?kt(e.stateNode.nextSibling):null;return!0}function ql(){_e=ct=null,ge=!1}function Gd(){var e=ln;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),ln=null),e}function Nl(e){ln===null?ln=[e]:ln.push(e)}var du=N(null),on=null,oa=null;function Ea(e,t,a){Q(du,t._currentValue),t._currentValue=a}function ua(e){e._currentValue=du.current,Y(du)}function fu(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function mu(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var d=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),fu(r.return,a,e),n||(d=null);break e}r=m.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(c(341));d.lanes|=a,r=d.alternate,r!==null&&(r.lanes|=a),fu(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Bl(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var m=i.type;yt(i.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(i===Ve.current){if(d=i.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}i=i.return}e!==null&&mu(t,e,a,n),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function un(e){on=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Yd(on,e)}function Ji(e,t){return on===null&&un(e),Yd(e,t)}function Yd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(c(308));oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else oa=oa.next=t;return a}var q1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},N1=l.unstable_scheduleCallback,B1=l.unstable_NormalPriority,ke={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new q1,data:new Map,refCount:0}}function Ul(e){e.refCount--,e.refCount===0&&N1(B1,function(){e.controller.abort()})}var Hl=null,pu=0,Un=0,Hn=null;function U1(e,t){if(Hl===null){var a=Hl=[];pu=0,Un=vc(),Hn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return pu++,t.then(Ld,Ld),t}function Ld(){if(--pu===0&&Hl!==null){Hn!==null&&(Hn.status="fulfilled");var e=Hl;Hl=null,Un=0,Hn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function H1(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Qd=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&U1(e,t),Qd!==null&&Qd(e,t)};var cn=N(null);function gu(){var e=cn.current;return e!==null?e:Ee.pooledCache}function Wi(e,t){t===null?Q(cn,cn.current):Q(cn,t.pool)}function Vd(){var e=gu();return e===null?null:{parent:ke._currentValue,pool:e}}var kl=Error(c(460)),Xd=Error(c(474)),Fi=Error(c(542)),vu={then:function(){}};function Zd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pi(){}function Kd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Pi,Pi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wd(e),e;default:if(typeof t.status=="string")t.then(Pi,Pi);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wd(e),e}throw Gl=t,kl}}var Gl=null;function Jd(){if(Gl===null)throw Error(c(459));var e=Gl;return Gl=null,e}function Wd(e){if(e===kl||e===Fi)throw Error(c(483))}var za=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ye&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Qi(e),Nd(e,null,a),t}return Li(e,n,t,a),Qi(e)}function Yl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ls(e,a)}}function xu(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=d:r=r.next=d,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Su=!1;function Ll(){if(Su){var e=Hn;if(e!==null)throw e}}function Ql(e,t,a,n){Su=!1;var i=e.updateQueue;za=!1;var r=i.firstBaseUpdate,d=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,z=v.next;v.next=null,d===null?r=z:d.next=z,d=v;var _=e.alternate;_!==null&&(_=_.updateQueue,m=_.lastBaseUpdate,m!==d&&(m===null?_.firstBaseUpdate=z:m.next=z,_.lastBaseUpdate=v))}if(r!==null){var q=i.baseState;d=0,_=z=v=null,m=r;do{var T=m.lane&-536870913,R=T!==m.lane;if(R?(he&T)===T:(n&T)===T){T!==0&&T===Un&&(Su=!0),_!==null&&(_=_.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ne=e,ee=m;T=t;var Ae=a;switch(ee.tag){case 1:if(ne=ee.payload,typeof ne=="function"){q=ne.call(Ae,q,T);break e}q=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ee.payload,T=typeof ne=="function"?ne.call(Ae,q,T):ne,T==null)break e;q=A({},q,T);break e;case 2:za=!0}}T=m.callback,T!==null&&(e.flags|=64,R&&(e.flags|=8192),R=i.callbacks,R===null?i.callbacks=[T]:R.push(T))}else R={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},_===null?(z=_=R,v=q):_=_.next=R,d|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;R=m,m=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);_===null&&(v=q),i.baseState=v,i.firstBaseUpdate=z,i.lastBaseUpdate=_,r===null&&(i.shared.lanes=0),Ba|=d,e.lanes=d,e.memoizedState=q}}function Fd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Pd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fd(a[e],t)}var kn=N(null),Ii=N(0);function Id(e,t){e=pa,Q(Ii,e),Q(kn,t),pa=e|t.baseLanes}function ju(){Q(Ii,pa),Q(kn,kn.current)}function Au(){pa=Ii.current,Y(kn),Y(Ii)}var Oa=0,ue=null,Se=null,Be=null,er=!1,Gn=!1,sn=!1,tr=0,Vl=0,Yn=null,k1=0;function qe(){throw Error(c(321))}function wu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function Cu(e,t,a,n,i,r){return Oa=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bf:Uf,sn=!1,r=a(n,i),sn=!1,Gn&&(r=tf(t,a,n,i)),ef(e),r}function ef(e){D.H=or;var t=Se!==null&&Se.next!==null;if(Oa=0,Be=Se=ue=null,er=!1,Vl=0,Yn=null,t)throw Error(c(300));e===null||Ze||(e=e.dependencies,e!==null&&Ki(e)&&(Ze=!0))}function tf(e,t,a,n){ue=e;var i=0;do{if(Gn&&(Yn=null),Vl=0,Gn=!1,25<=i)throw Error(c(301));if(i+=1,Be=Se=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=Z1,r=t(a,n)}while(Gn);return r}function G1(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Xl(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ue.flags|=1024),t}function Eu(){var e=tr!==0;return tr=0,e}function zu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Tu(e){if(er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}er=!1}Oa=0,Be=Se=ue=null,Gn=!1,Vl=tr=0,Yn=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ue.memoizedState=Be=e:Be=Be.next=e,Be}function Ue(){if(Se===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Be===null?ue.memoizedState:Be.next;if(t!==null)Be=t,Se=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Be===null?ue.memoizedState=Be=e:Be=Be.next=e}return Be}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var t=Vl;return Vl+=1,Yn===null&&(Yn=[]),e=Kd(Yn,e,t),t=ue,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bf:Uf),e}function ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===Z)return rt(e)}throw Error(c(438,String(e)))}function Ou(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ue.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ru(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ut;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=Ue();return Mu(t,Se,e)}function Mu(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var d=i.next;i.next=r.next,r.next=d}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=d=null,v=null,z=t,_=!1;do{var q=z.lane&-536870913;if(q!==z.lane?(he&q)===q:(Oa&q)===q){var T=z.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),q===Un&&(_=!0);else if((Oa&T)===T){z=z.next,T===Un&&(_=!0);continue}else q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},v===null?(m=v=q,d=r):v=v.next=q,ue.lanes|=T,Ba|=T;q=z.action,sn&&a(r,q),r=z.hasEagerState?z.eagerState:a(r,q)}else T={lane:q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},v===null?(m=v=T,d=r):v=v.next=T,ue.lanes|=q,Ba|=q;z=z.next}while(z!==null&&z!==t);if(v===null?d=r:v.next=m,!yt(r,e.memoizedState)&&(Ze=!0,_&&(a=Hn,a!==null)))throw a;e.memoizedState=r,e.baseState=d,e.baseQueue=v,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Du(e){var t=Ue(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do r=e(r,d.action),d=d.next;while(d!==i);yt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function af(e,t,a){var n=ue,i=Ue(),r=ge;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!yt((Se||i).memoizedState,a);d&&(i.memoizedState=a,Ze=!0),i=i.queue;var m=rf.bind(null,n,i,e);if(Zl(2048,8,m,[e]),i.getSnapshot!==t||d||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ln(9,lr(),lf.bind(null,n,i,a,t),null),Ee===null)throw Error(c(349));r||(Oa&124)!==0||nf(n,t,a)}return a}function nf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Ru(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function lf(e,t,a,n){t.value=a,t.getSnapshot=n,of(t)&&uf(e)}function rf(e,t,a){return a(function(){of(t)&&uf(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function uf(e){var t=$n(e,2);t!==null&&Ct(t,e,2)}function _u(e){var t=ht();if(typeof e=="function"){var a=e;if(e=a(),sn){Aa(!0);try{a()}finally{Aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function cf(e,t,a,n){return e.baseState=a,Mu(e,Se,typeof n=="function"?n:ca)}function Y1(e,t,a,n,i){if(rr(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){r.listeners.push(d)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,sf(t,r)):(r.next=a.next,t.pending=a.next=r)}}function sf(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=D.T,d={};D.T=d;try{var m=a(i,n),v=D.S;v!==null&&v(d,m),df(e,t,m)}catch(z){$u(e,t,z)}finally{D.T=r}}else try{r=a(i,n),df(e,t,r)}catch(z){$u(e,t,z)}}function df(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){ff(e,t,n)},function(n){return $u(e,t,n)}):ff(e,t,a)}function ff(e,t,a){t.status="fulfilled",t.value=a,mf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,sf(e,a)))}function $u(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,mf(t),t=t.next;while(t!==n)}e.action=null}function mf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hf(e,t){return t}function pf(e,t){if(ge){var a=Ee.formState;if(a!==null){e:{var n=ue;if(ge){if(_e){t:{for(var i=_e,r=Xt;i.nodeType!==8;){if(!r){i=null;break t}if(i=kt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){_e=kt(i.nextSibling),n=i.data==="F!";break e}}rn(n)}n=!1}n&&(t=a[0])}}return a=ht(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hf,lastRenderedState:t},a.queue=n,a=$f.bind(null,ue,n),n.dispatch=a,n=_u(!1),r=Hu.bind(null,ue,!1,n.queue),n=ht(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Y1.bind(null,ue,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function gf(e){var t=Ue();return vf(t,Se,e)}function vf(e,t,a){if(t=Mu(e,t,hf)[0],e=nr(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Xl(t)}catch(d){throw d===kl?Fi:d}else n=t;t=Ue();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Ln(9,lr(),L1.bind(null,i,a),null)),[n,r,e]}function L1(e,t){e.action=t}function bf(e){var t=Ue(),a=Se;if(a!==null)return vf(t,a,e);Ue(),t=t.memoizedState,a=Ue();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Ln(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Ru(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function lr(){return{destroy:void 0,resource:void 0}}function yf(){return Ue().memoizedState}function ir(e,t,a,n){var i=ht();n=n===void 0?null:n,ue.flags|=e,i.memoizedState=Ln(1|t,lr(),a,n)}function Zl(e,t,a,n){var i=Ue();n=n===void 0?null:n;var r=i.memoizedState.inst;Se!==null&&n!==null&&wu(n,Se.memoizedState.deps)?i.memoizedState=Ln(t,r,a,n):(ue.flags|=e,i.memoizedState=Ln(1|t,r,a,n))}function xf(e,t){ir(8390656,8,e,t)}function Sf(e,t){Zl(2048,8,e,t)}function jf(e,t){return Zl(4,2,e,t)}function Af(e,t){return Zl(4,4,e,t)}function wf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,a){a=a!=null?a.concat([e]):null,Zl(4,4,wf.bind(null,t,e),a)}function qu(){}function Ef(e,t){var a=Ue();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&wu(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function zf(e,t){var a=Ue();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&wu(t,n[1]))return n[0];if(n=e(),sn){Aa(!0);try{e()}finally{Aa(!1)}}return a.memoizedState=[n,t],n}function Nu(e,t,a){return a===void 0||(Oa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Om(),ue.lanes|=e,Ba|=e,a)}function Tf(e,t,a,n){return yt(a,t)?a:kn.current!==null?(e=Nu(e,a,n),yt(e,t)||(Ze=!0),e):(Oa&42)===0?(Ze=!0,e.memoizedState=a):(e=Om(),ue.lanes|=e,Ba|=e,t)}function Rf(e,t,a,n,i){var r=L.p;L.p=r!==0&&8>r?r:8;var d=D.T,m={};D.T=m,Hu(e,!1,t,a);try{var v=i(),z=D.S;if(z!==null&&z(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var _=H1(v,n);Kl(e,t,_,wt(e))}else Kl(e,t,n,wt(e))}catch(q){Kl(e,t,{then:function(){},status:"rejected",reason:q},wt())}finally{L.p=r,D.T=d}}function Q1(){}function Bu(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Of(e).queue;Rf(e,i,t,I,a===null?Q1:function(){return Mf(e),a(n)})}function Of(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mf(e){var t=Of(e).next.queue;Kl(e,t,{},wt())}function Uu(){return rt(fi)}function Df(){return Ue().memoizedState}function _f(){return Ue().memoizedState}function V1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wt();e=Ta(a);var n=Ra(t,e,a);n!==null&&(Ct(n,t,a),Yl(n,t,a)),t={cache:hu()},e.payload=t;return}t=t.return}}function X1(e,t,a){var n=wt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},rr(e)?qf(t,a):(a=lu(e,t,a,n),a!==null&&(Ct(a,e,n),Nf(a,t,n)))}function $f(e,t,a){var n=wt();Kl(e,t,a,n)}function Kl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(rr(e))qf(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var d=t.lastRenderedState,m=r(d,a);if(i.hasEagerState=!0,i.eagerState=m,yt(m,d))return Li(e,t,i,0),Ee===null&&Yi(),!1}catch{}finally{}if(a=lu(e,t,i,n),a!==null)return Ct(a,e,n),Nf(a,t,n),!0}return!1}function Hu(e,t,a,n){if(n={lane:2,revertLane:vc(),action:n,hasEagerState:!1,eagerState:null,next:null},rr(e)){if(t)throw Error(c(479))}else t=lu(e,a,n,2),t!==null&&Ct(t,e,2)}function rr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function qf(e,t){Gn=er=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ls(e,a)}}var or={readContext:rt,use:ar,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe},Bf={readContext:rt,use:ar,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:xf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ir(4194308,4,wf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){ir(4,2,e,t)},useMemo:function(e,t){var a=ht();t=t===void 0?null:t;var n=e();if(sn){Aa(!0);try{e()}finally{Aa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ht();if(a!==void 0){var i=a(t);if(sn){Aa(!0);try{a(t)}finally{Aa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=X1.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=_u(e);var t=e.queue,a=$f.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,t){var a=ht();return Nu(a,e,t)},useTransition:function(){var e=_u(!1);return e=Rf.bind(null,ue,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ue,i=ht();if(ge){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ee===null)throw Error(c(349));(he&124)!==0||nf(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,xf(rf.bind(null,n,r,e),[e]),n.flags|=2048,Ln(9,lr(),lf.bind(null,n,r,a,t),null),a},useId:function(){var e=ht(),t=Ee.identifierPrefix;if(ge){var a=ra,n=ia;a=(n&~(1<<32-bt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=tr++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=k1++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Uu,useFormState:pf,useActionState:pf,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hu.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ou,useCacheRefresh:function(){return ht().memoizedState=V1.bind(null,ue)}},Uf={readContext:rt,use:ar,useCallback:Ef,useContext:rt,useEffect:Sf,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:Af,useMemo:zf,useReducer:nr,useRef:yf,useState:function(){return nr(ca)},useDebugValue:qu,useDeferredValue:function(e,t){var a=Ue();return Tf(a,Se.memoizedState,e,t)},useTransition:function(){var e=nr(ca)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:af,useId:Df,useHostTransitionStatus:Uu,useFormState:gf,useActionState:gf,useOptimistic:function(e,t){var a=Ue();return cf(a,Se,e,t)},useMemoCache:Ou,useCacheRefresh:_f},Z1={readContext:rt,use:ar,useCallback:Ef,useContext:rt,useEffect:Sf,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:Af,useMemo:zf,useReducer:Du,useRef:yf,useState:function(){return Du(ca)},useDebugValue:qu,useDeferredValue:function(e,t){var a=Ue();return Se===null?Nu(a,e,t):Tf(a,Se.memoizedState,e,t)},useTransition:function(){var e=Du(ca)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:af,useId:Df,useHostTransitionStatus:Uu,useFormState:bf,useActionState:bf,useOptimistic:function(e,t){var a=Ue();return Se!==null?cf(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:_f},Qn=null,Jl=0;function ur(e){var t=Jl;return Jl+=1,Qn===null&&(Qn=[]),Kd(Qn,e,t)}function Wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hf(e){var t=e._init;return t(e._payload)}function kf(e){function t(w,S){if(e){var E=w.deletions;E===null?(w.deletions=[S],w.flags|=16):E.push(S)}}function a(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function n(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(w,S){return w=la(w,S),w.index=0,w.sibling=null,w}function r(w,S,E){return w.index=E,e?(E=w.alternate,E!==null?(E=E.index,E<S?(w.flags|=67108866,S):E):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function m(w,S,E,$){return S===null||S.tag!==6?(S=ru(E,w.mode,$),S.return=w,S):(S=i(S,E),S.return=w,S)}function v(w,S,E,$){var J=E.type;return J===k?_(w,S,E.props.children,$,E.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Te&&Hf(J)===S.type)?(S=i(S,E.props),Wl(S,E),S.return=w,S):(S=Vi(E.type,E.key,E.props,null,w.mode,$),Wl(S,E),S.return=w,S)}function z(w,S,E,$){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=ou(E,w.mode,$),S.return=w,S):(S=i(S,E.children||[]),S.return=w,S)}function _(w,S,E,$,J){return S===null||S.tag!==7?(S=tn(E,w.mode,$,J),S.return=w,S):(S=i(S,E),S.return=w,S)}function q(w,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ru(""+S,w.mode,E),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case B:return E=Vi(S.type,S.key,S.props,null,w.mode,E),Wl(E,S),E.return=w,E;case U:return S=ou(S,w.mode,E),S.return=w,S;case Te:var $=S._init;return S=$(S._payload),q(w,S,E)}if(Qe(S)||Le(S))return S=tn(S,w.mode,E,null),S.return=w,S;if(typeof S.then=="function")return q(w,ur(S),E);if(S.$$typeof===Z)return q(w,Ji(w,S),E);cr(w,S)}return null}function T(w,S,E,$){var J=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return J!==null?null:m(w,S,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case B:return E.key===J?v(w,S,E,$):null;case U:return E.key===J?z(w,S,E,$):null;case Te:return J=E._init,E=J(E._payload),T(w,S,E,$)}if(Qe(E)||Le(E))return J!==null?null:_(w,S,E,$,null);if(typeof E.then=="function")return T(w,S,ur(E),$);if(E.$$typeof===Z)return T(w,S,Ji(w,E),$);cr(w,E)}return null}function R(w,S,E,$,J){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return w=w.get(E)||null,m(S,w,""+$,J);if(typeof $=="object"&&$!==null){switch($.$$typeof){case B:return w=w.get($.key===null?E:$.key)||null,v(S,w,$,J);case U:return w=w.get($.key===null?E:$.key)||null,z(S,w,$,J);case Te:var ce=$._init;return $=ce($._payload),R(w,S,E,$,J)}if(Qe($)||Le($))return w=w.get(E)||null,_(S,w,$,J,null);if(typeof $.then=="function")return R(w,S,E,ur($),J);if($.$$typeof===Z)return R(w,S,E,Ji(S,$),J);cr(S,$)}return null}function ne(w,S,E,$){for(var J=null,ce=null,W=S,ae=S=0,Je=null;W!==null&&ae<E.length;ae++){W.index>ae?(Je=W,W=null):Je=W.sibling;var pe=T(w,W,E[ae],$);if(pe===null){W===null&&(W=Je);break}e&&W&&pe.alternate===null&&t(w,W),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe,W=Je}if(ae===E.length)return a(w,W),ge&&nn(w,ae),J;if(W===null){for(;ae<E.length;ae++)W=q(w,E[ae],$),W!==null&&(S=r(W,S,ae),ce===null?J=W:ce.sibling=W,ce=W);return ge&&nn(w,ae),J}for(W=n(W);ae<E.length;ae++)Je=R(W,w,ae,E[ae],$),Je!==null&&(e&&Je.alternate!==null&&W.delete(Je.key===null?ae:Je.key),S=r(Je,S,ae),ce===null?J=Je:ce.sibling=Je,ce=Je);return e&&W.forEach(function(Xa){return t(w,Xa)}),ge&&nn(w,ae),J}function ee(w,S,E,$){if(E==null)throw Error(c(151));for(var J=null,ce=null,W=S,ae=S=0,Je=null,pe=E.next();W!==null&&!pe.done;ae++,pe=E.next()){W.index>ae?(Je=W,W=null):Je=W.sibling;var Xa=T(w,W,pe.value,$);if(Xa===null){W===null&&(W=Je);break}e&&W&&Xa.alternate===null&&t(w,W),S=r(Xa,S,ae),ce===null?J=Xa:ce.sibling=Xa,ce=Xa,W=Je}if(pe.done)return a(w,W),ge&&nn(w,ae),J;if(W===null){for(;!pe.done;ae++,pe=E.next())pe=q(w,pe.value,$),pe!==null&&(S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return ge&&nn(w,ae),J}for(W=n(W);!pe.done;ae++,pe=E.next())pe=R(W,w,ae,pe.value,$),pe!==null&&(e&&pe.alternate!==null&&W.delete(pe.key===null?ae:pe.key),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return e&&W.forEach(function(Kg){return t(w,Kg)}),ge&&nn(w,ae),J}function Ae(w,S,E,$){if(typeof E=="object"&&E!==null&&E.type===k&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case B:e:{for(var J=E.key;S!==null;){if(S.key===J){if(J=E.type,J===k){if(S.tag===7){a(w,S.sibling),$=i(S,E.props.children),$.return=w,w=$;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Te&&Hf(J)===S.type){a(w,S.sibling),$=i(S,E.props),Wl($,E),$.return=w,w=$;break e}a(w,S);break}else t(w,S);S=S.sibling}E.type===k?($=tn(E.props.children,w.mode,$,E.key),$.return=w,w=$):($=Vi(E.type,E.key,E.props,null,w.mode,$),Wl($,E),$.return=w,w=$)}return d(w);case U:e:{for(J=E.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){a(w,S.sibling),$=i(S,E.children||[]),$.return=w,w=$;break e}else{a(w,S);break}else t(w,S);S=S.sibling}$=ou(E,w.mode,$),$.return=w,w=$}return d(w);case Te:return J=E._init,E=J(E._payload),Ae(w,S,E,$)}if(Qe(E))return ne(w,S,E,$);if(Le(E)){if(J=Le(E),typeof J!="function")throw Error(c(150));return E=J.call(E),ee(w,S,E,$)}if(typeof E.then=="function")return Ae(w,S,ur(E),$);if(E.$$typeof===Z)return Ae(w,S,Ji(w,E),$);cr(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(a(w,S.sibling),$=i(S,E),$.return=w,w=$):(a(w,S),$=ru(E,w.mode,$),$.return=w,w=$),d(w)):a(w,S)}return function(w,S,E,$){try{Jl=0;var J=Ae(w,S,E,$);return Qn=null,J}catch(W){if(W===kl||W===Fi)throw W;var ce=xt(29,W,null,w.mode);return ce.lanes=$,ce.return=w,ce}finally{}}}var Vn=kf(!0),Gf=kf(!1),$t=N(null),Zt=null;function Ma(e){var t=e.alternate;Q(Ge,Ge.current&1),Q($t,e),Zt===null&&(t===null||kn.current!==null||t.memoizedState!==null)&&(Zt=e)}function Yf(e){if(e.tag===22){if(Q(Ge,Ge.current),Q($t,e),Zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Zt=e)}}else Da()}function Da(){Q(Ge,Ge.current),Q($t,$t.current)}function sa(e){Y($t),Zt===e&&(Zt=null),Y(Ge)}var Ge=N(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Rc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ku(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=wt(),i=Ta(n);i.payload=t,a!=null&&(i.callback=a),t=Ra(e,i,n),t!==null&&(Ct(t,e,n),Yl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=wt(),i=Ta(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ra(e,i,n),t!==null&&(Ct(t,e,n),Yl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wt(),n=Ta(a);n.tag=2,t!=null&&(n.callback=t),t=Ra(e,n,a),t!==null&&(Ct(t,e,a),Yl(t,e,a))}};function Lf(e,t,a,n,i,r,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,d):t.prototype&&t.prototype.isPureReactComponent?!Dl(a,n)||!Dl(i,r):!0}function Qf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Gu.enqueueReplaceState(t,t.state,null)}function dn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vf(e){dr(e)}function Xf(e){console.error(e)}function Zf(e){dr(e)}function fr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Kf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Yu(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){fr(e,t)},a}function Jf(e){return e=Ta(e),e.tag=3,e}function Wf(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Kf(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Kf(t,a,n),typeof i!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function K1(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Bl(t,a,i,!0),a=$t.current,a!==null){switch(a.tag){case 13:return Zt===null?fc():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===vu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),hc(e,n,i)),!1;case 22:return a.flags|=65536,n===vu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),hc(e,n,i)),!1}throw Error(c(435,a.tag))}return hc(e,n,i),fc(),!1}if(ge)return t=$t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==su&&(e=Error(c(422),{cause:n}),Nl(Ot(e,a)))):(n!==su&&(t=Error(c(423),{cause:n}),Nl(Ot(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Ot(n,a),i=Yu(e.stateNode,n,i),xu(e,i),$e!==4&&($e=2)),!1;var r=Error(c(520),{cause:n});if(r=Ot(r,a),ni===null?ni=[r]:ni.push(r),$e!==4&&($e=2),t===null)return!0;n=Ot(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Yu(a.stateNode,n,e),xu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ua===null||!Ua.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Jf(i),Wf(i,e,a,n),xu(a,i),!1}a=a.return}while(a!==null);return!1}var Ff=Error(c(461)),Ze=!1;function Ie(e,t,a,n){t.child=e===null?Gf(t,null,a,n):Vn(t,e.child,a,n)}function Pf(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var d={};for(var m in n)m!=="ref"&&(d[m]=n[m])}else d=n;return un(t),n=Cu(e,t,a,d,r,i),m=Eu(),e!==null&&!Ze?(zu(e,t,i),da(e,t,i)):(ge&&m&&uu(t),t.flags|=1,Ie(e,t,n,i),t.child)}function If(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!iu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,em(e,t,r,n,i)):(e=Vi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Wu(e,i)){var d=r.memoizedProps;if(a=a.compare,a=a!==null?a:Dl,a(d,n)&&e.ref===t.ref)return da(e,t,i)}return t.flags|=1,e=la(r,n),e.ref=t.ref,e.return=t,t.child=e}function em(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Dl(r,n)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=n=r,Wu(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,da(e,t,i)}return Lu(e,t,a,n,i)}function tm(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return am(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,r!==null?r.cachePool:null),r!==null?Id(t,r):ju(),Yf(t);else return t.lanes=t.childLanes=536870912,am(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Wi(t,r.cachePool),Id(t,r),Da(),t.memoizedState=null):(e!==null&&Wi(t,null),ju(),Da());return Ie(e,t,i,a),t.child}function am(e,t,a,n){var i=gu();return i=i===null?null:{parent:ke._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Wi(t,null),ju(),Yf(t),e!==null&&Bl(e,t,n,!0),null}function mr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Lu(e,t,a,n,i){return un(t),a=Cu(e,t,a,n,void 0,i),n=Eu(),e!==null&&!Ze?(zu(e,t,i),da(e,t,i)):(ge&&n&&uu(t),t.flags|=1,Ie(e,t,a,i),t.child)}function nm(e,t,a,n,i,r){return un(t),t.updateQueue=null,a=tf(t,n,a,i),ef(e),n=Eu(),e!==null&&!Ze?(zu(e,t,r),da(e,t,r)):(ge&&n&&uu(t),t.flags|=1,Ie(e,t,a,r),t.child)}function lm(e,t,a,n,i){if(un(t),t.stateNode===null){var r=qn,d=a.contextType;typeof d=="object"&&d!==null&&(r=rt(d)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},bu(t),d=a.contextType,r.context=typeof d=="object"&&d!==null?rt(d):qn,r.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(ku(t,a,d,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(d=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),d!==r.state&&Gu.enqueueReplaceState(r,r.state,null),Ql(t,n,r,i),Ll(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=dn(a,m);r.props=v;var z=r.context,_=a.contextType;d=qn,typeof _=="object"&&_!==null&&(d=rt(_));var q=a.getDerivedStateFromProps;_=typeof q=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,_||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||z!==d)&&Qf(t,r,n,d),za=!1;var T=t.memoizedState;r.state=T,Ql(t,n,r,i),Ll(),z=t.memoizedState,m||T!==z||za?(typeof q=="function"&&(ku(t,a,q,n),z=t.memoizedState),(v=za||Lf(t,a,v,n,T,z,d))?(_||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=z),r.props=n,r.state=z,r.context=d,n=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,yu(e,t),d=t.memoizedProps,_=dn(a,d),r.props=_,q=t.pendingProps,T=r.context,z=a.contextType,v=qn,typeof z=="object"&&z!==null&&(v=rt(z)),m=a.getDerivedStateFromProps,(z=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d!==q||T!==v)&&Qf(t,r,n,v),za=!1,T=t.memoizedState,r.state=T,Ql(t,n,r,i),Ll();var R=t.memoizedState;d!==q||T!==R||za||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof m=="function"&&(ku(t,a,m,n),R=t.memoizedState),(_=za||Lf(t,a,_,n,T,R,v)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(z||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,R,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,R,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=R),r.props=n,r.state=R,r.context=v,n=_):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,mr(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Vn(t,e.child,null,i),t.child=Vn(t,null,a,i)):Ie(e,t,a,i),t.memoizedState=r.state,e=t.child):e=da(e,t,i),e}function im(e,t,a,n){return ql(),t.flags|=256,Ie(e,t,a,n),t.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vu(e){return{baseLanes:e,cachePool:Vd()}}function Xu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function rm(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,d;if((d=r)||(d=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Ma(t):Da(),ge){var m=_e,v;if(v=m){e:{for(v=m,m=Xt;v.nodeType!==8;){if(!m){m=null;break e}if(v=kt(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:an!==null?{id:ia,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},v=xt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,ct=t,_e=null,v=!0):v=!1}v||rn(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Rc(m)?t.lanes=32:t.lanes=536870912,null;sa(t)}return m=n.children,n=n.fallback,i?(Da(),i=t.mode,m=hr({mode:"hidden",children:m},i),n=tn(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,i=t.child,i.memoizedState=Vu(a),i.childLanes=Xu(e,d,a),t.memoizedState=Qu,n):(Ma(t),Zu(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(Ma(t),t.flags&=-257,t=Ku(e,t,a)):t.memoizedState!==null?(Da(),t.child=e.child,t.flags|=128,t=null):(Da(),i=n.fallback,m=t.mode,n=hr({mode:"visible",children:n.children},m),i=tn(i,m,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Vn(t,e.child,null,a),n=t.child,n.memoizedState=Vu(a),n.childLanes=Xu(e,d,a),t.memoizedState=Qu,t=i);else if(Ma(t),Rc(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var z=d.dgst;d=z,n=Error(c(419)),n.stack="",n.digest=d,Nl({value:n,source:null,stack:null}),t=Ku(e,t,a)}else if(Ze||Bl(e,t,a,!1),d=(a&e.childLanes)!==0,Ze||d){if(d=Ee,d!==null&&(n=a&-a,n=(n&42)!==0?1:Oo(n),n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane))throw v.retryLane=n,$n(e,n),Ct(d,e,n),Ff;m.data==="$?"||fc(),t=Ku(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,_e=kt(m.nextSibling),ct=t,ge=!0,ln=null,Xt=!1,e!==null&&(Dt[_t++]=ia,Dt[_t++]=ra,Dt[_t++]=an,ia=e.id,ra=e.overflow,an=t),t=Zu(t,n.children),t.flags|=4096);return t}return i?(Da(),i=n.fallback,m=t.mode,v=e.child,z=v.sibling,n=la(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,z!==null?i=la(z,i):(i=tn(i,m,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,m=e.child.memoizedState,m===null?m=Vu(a):(v=m.cachePool,v!==null?(z=ke._currentValue,v=v.parent!==z?{parent:z,pool:z}:v):v=Vd(),m={baseLanes:m.baseLanes|a,cachePool:v}),i.memoizedState=m,i.childLanes=Xu(e,d,a),t.memoizedState=Qu,n):(Ma(t),a=e.child,e=a.sibling,a=la(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function Zu(e,t){return t=hr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hr(e,t){return e=xt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ku(e,t,a){return Vn(t,e.child,null,a),e=Zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function om(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fu(e.return,t,a)}function Ju(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function um(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(Ie(e,t,n.children,a),n=Ge.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&om(e,a,t);else if(e.tag===19)om(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Q(Ge,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&sr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Ju(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Ju(t,!0,a,null,r);break;case"together":Ju(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function da(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=la(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=la(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Wu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function J1(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Ea(t,ke,e.memoizedState.cache),ql();break;case 27:case 5:Ja(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?rm(e,t,a):(Ma(t),e=da(e,t,a),e!==null?e.sibling:null);Ma(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Bl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return um(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Ge,Ge.current),n)break;return null;case 22:case 23:return t.lanes=0,tm(e,t,a);case 24:Ea(t,ke,e.memoizedState.cache)}return da(e,t,a)}function cm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Wu(e,a)&&(t.flags&128)===0)return Ze=!1,J1(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,ge&&(t.flags&1048576)!==0&&Ud(t,Zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")iu(n)?(e=dn(n,e),t.tag=1,t=lm(null,t,n,e,a)):(t.tag=0,t=Lu(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===le){t.tag=11,t=Pf(null,t,n,e,a);break e}else if(i===F){t.tag=14,t=If(null,t,n,e,a);break e}}throw t=ea(n)||n,Error(c(306,t,""))}}return t;case 0:return Lu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=dn(n,t.pendingProps),lm(e,t,n,i,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,yu(e,t),Ql(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Ea(t,ke,n),n!==r.cache&&mu(t,[ke],a,!0),Ll(),n=d.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=im(e,t,n,a);break e}else if(n!==i){i=Ot(Error(c(424)),t),Nl(i),t=im(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=kt(e.firstChild),ct=t,ge=!0,ln=null,Xt=!0,a=Gf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ql(),n===i){t=da(e,t,a);break e}Ie(e,t,n,a)}t=t.child}return t;case 26:return mr(e,t),e===null?(a=mh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,n=Tr(te.current).createElement(a),n[it]=t,n[ft]=e,tt(n,a,e),Xe(n),t.stateNode=n):t.memoizedState=mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ja(t),e===null&&ge&&(n=t.stateNode=sh(t.type,t.pendingProps,te.current),ct=t,Xt=!0,i=_e,Ga(t.type)?(Oc=i,_e=kt(n.firstChild)):_e=i),Ie(e,t,t.pendingProps.children,a),mr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=n=_e)&&(n=Ag(n,t.type,t.pendingProps,Xt),n!==null?(t.stateNode=n,ct=t,_e=kt(n.firstChild),Xt=!1,i=!0):i=!1),i||rn(t)),Ja(t),i=t.type,r=t.pendingProps,d=e!==null?e.memoizedProps:null,n=r.children,Ec(i,r)?n=null:d!==null&&Ec(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Cu(e,t,G1,null,null,a),fi._currentValue=i),mr(e,t),Ie(e,t,n,a),t.child;case 6:return e===null&&ge&&((e=a=_e)&&(a=wg(a,t.pendingProps,Xt),a!==null?(t.stateNode=a,ct=t,_e=null,e=!0):e=!1),e||rn(t)),null;case 13:return rm(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vn(t,null,n,a):Ie(e,t,n,a),t.child;case 11:return Pf(e,t,t.type,t.pendingProps,a);case 7:return Ie(e,t,t.pendingProps,a),t.child;case 8:return Ie(e,t,t.pendingProps.children,a),t.child;case 12:return Ie(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ea(t,t.type,n.value),Ie(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,un(t),i=rt(i),n=n(i),t.flags|=1,Ie(e,t,n,a),t.child;case 14:return If(e,t,t.type,t.pendingProps,a);case 15:return em(e,t,t.type,t.pendingProps,a);case 19:return um(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=hr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=la(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return tm(e,t,a);case 24:return un(t),n=rt(ke),e===null?(i=gu(),i===null&&(i=Ee,r=hu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},bu(t),Ea(t,ke,i)):((e.lanes&a)!==0&&(yu(e,t),Ql(t,null,null,a),Ll()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,ke,n)):(n=r.cache,Ea(t,ke,n),n!==i.cache&&mu(t,[ke],a,!0))),Ie(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function fa(e){e.flags|=4}function sm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(t)){if(t=$t.current,t!==null&&((he&4194048)===he?Zt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Zt))throw Gl=vu,Xd;e.flags|=8192}}function pr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gs():536870912,e.lanes|=t,Jn|=t)}function Fl(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function W1(e,t,a){var n=t.pendingProps;switch(cu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ua(ke),lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($l(t)?fa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gd())),De(t),null;case 26:return a=t.memoizedState,e===null?(fa(t),a!==null?(De(t),sm(t,a)):(De(t),t.flags&=-16777217)):a?a!==e.memoizedState?(fa(t),De(t),sm(t,a)):(De(t),t.flags&=-16777217):(e.memoizedProps!==n&&fa(t),De(t),t.flags&=-16777217),null;case 27:ta(t),a=te.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&fa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return De(t),null}e=P.current,$l(t)?Hd(t):(e=sh(i,n,a),t.stateNode=e,fa(t))}return De(t),null;case 5:if(ta(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&fa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return De(t),null}if(e=P.current,$l(t))Hd(t);else{switch(i=Tr(te.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[it]=t,e[ft]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(tt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&fa(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&fa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=te.current,$l(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ct,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[it]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||nh(e.nodeValue,a)),e||rn(t)}else e=Tr(e).createTextNode(n),e[it]=t,t.stateNode=e}return De(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=$l(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[it]=t}else ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(sa(t),t):(sa(t),null)}if(sa(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),pr(t,t.updateQueue),De(t),null;case 4:return lt(),e===null&&Sc(t.stateNode.containerInfo),De(t),null;case 10:return ua(t.type),De(t),null;case 19:if(Y(Ge),i=t.memoizedState,i===null)return De(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Fl(i,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=sr(e),r!==null){for(t.flags|=128,Fl(i,!1),e=r.updateQueue,t.updateQueue=e,pr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Bd(a,e),a=a.sibling;return Q(Ge,Ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Vt()>br&&(t.flags|=128,n=!0,Fl(i,!1),t.lanes=4194304)}else{if(!n)if(e=sr(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,pr(t,e),Fl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ge)return De(t),null}else 2*Vt()-i.renderingStartTime>br&&a!==536870912&&(t.flags|=128,n=!0,Fl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Vt(),t.sibling=null,e=Ge.current,Q(Ge,n?e&1|2:e&1),t):(De(t),null);case 22:case 23:return sa(t),Au(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),a=t.updateQueue,a!==null&&pr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Y(cn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ua(ke),De(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function F1(e,t){switch(cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(ke),lt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ta(t),null;case 13:if(sa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Ge),null;case 4:return lt(),null;case 10:return ua(t.type),null;case 22:case 23:return sa(t),Au(),e!==null&&Y(cn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(ke),null;case 25:return null;default:return null}}function dm(e,t){switch(cu(t),t.tag){case 3:ua(ke),lt();break;case 26:case 27:case 5:ta(t);break;case 4:lt();break;case 13:sa(t);break;case 19:Y(Ge);break;case 10:ua(t.type);break;case 22:case 23:sa(t),Au(),e!==null&&Y(cn);break;case 24:ua(ke)}}function Pl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,d=a.inst;n=r(),d.destroy=n}a=a.next}while(a!==i)}}catch(m){Ce(t,t.return,m)}}function _a(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var d=n.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,i=t;var v=a,z=m;try{z()}catch(_){Ce(i,v,_)}}}n=n.next}while(n!==r)}}catch(_){Ce(t,t.return,_)}}function fm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Pd(t,a)}catch(n){Ce(e,e.return,n)}}}function mm(e,t,a){a.props=dn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ce(e,t,n)}}function Il(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ce(e,t,i)}}function Kt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ce(e,t,i)}else a.current=null}function hm(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ce(e,e.return,i)}}function Fu(e,t,a){try{var n=e.stateNode;bg(n,e.type,a,t),n[ft]=t}catch(i){Ce(e,e.return,i)}}function pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=zr));else if(n!==4&&(n===27&&Ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Iu(e,t,a),e=e.sibling;e!==null;)Iu(e,t,a),e=e.sibling}function gr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gr(e,t,a),e=e.sibling;e!==null;)gr(e,t,a),e=e.sibling}function gm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,n,a),t[it]=e,t[ft]=a}catch(r){Ce(e,e.return,r)}}var ma=!1,Ne=!1,ec=!1,vm=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function P1(e,t){if(e=e.containerInfo,wc=$r,e=zd(e),Po(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var d=0,m=-1,v=-1,z=0,_=0,q=e,T=null;t:for(;;){for(var R;q!==a||i!==0&&q.nodeType!==3||(m=d+i),q!==r||n!==0&&q.nodeType!==3||(v=d+n),q.nodeType===3&&(d+=q.nodeValue.length),(R=q.firstChild)!==null;)T=q,q=R;for(;;){if(q===e)break t;if(T===a&&++z===i&&(m=d),T===r&&++_===n&&(v=d),(R=q.nextSibling)!==null)break;q=T,T=q.parentNode}q=R}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:e,selectionRange:a},$r=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var ne=dn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(ne,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ce(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Tc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function bm(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:$a(e,a),n&4&&Pl(5,a);break;case 1:if($a(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Ce(a,a.return,d)}else{var i=dn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ce(a,a.return,d)}}n&64&&fm(a),n&512&&Il(a,a.return);break;case 3:if($a(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Pd(e,t)}catch(d){Ce(a,a.return,d)}}break;case 27:t===null&&n&4&&gm(a);case 26:case 5:$a(e,a),t===null&&n&4&&hm(a),n&512&&Il(a,a.return);break;case 12:$a(e,a);break;case 13:$a(e,a),n&4&&Sm(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=og.bind(null,a),Cg(e,a))));break;case 22:if(n=a.memoizedState!==null||ma,!n){t=t!==null&&t.memoizedState!==null||Ne,i=ma;var r=Ne;ma=n,(Ne=t)&&!r?qa(e,a,(a.subtreeFlags&8772)!==0):$a(e,a),ma=i,Ne=r}break;case 30:break;default:$a(e,a)}}function ym(e){var t=e.alternate;t!==null&&(e.alternate=null,ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_o(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,pt=!1;function ha(e,t,a){for(a=a.child;a!==null;)xm(e,t,a),a=a.sibling}function xm(e,t,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(xl,a)}catch{}switch(a.tag){case 26:Ne||Kt(a,t),ha(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ne||Kt(a,t);var n=Oe,i=pt;Ga(a.type)&&(Oe=a.stateNode,pt=!1),ha(e,t,a),ui(a.stateNode),Oe=n,pt=i;break;case 5:Ne||Kt(a,t);case 6:if(n=Oe,i=pt,Oe=null,ha(e,t,a),Oe=n,pt=i,Oe!==null)if(pt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(a.stateNode)}catch(r){Ce(a,t,r)}else try{Oe.removeChild(a.stateNode)}catch(r){Ce(a,t,r)}break;case 18:Oe!==null&&(pt?(e=Oe,uh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gi(e)):uh(Oe,a.stateNode));break;case 4:n=Oe,i=pt,Oe=a.stateNode.containerInfo,pt=!0,ha(e,t,a),Oe=n,pt=i;break;case 0:case 11:case 14:case 15:Ne||_a(2,a,t),Ne||_a(4,a,t),ha(e,t,a);break;case 1:Ne||(Kt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&mm(a,t,n)),ha(e,t,a);break;case 21:ha(e,t,a);break;case 22:Ne=(n=Ne)||a.memoizedState!==null,ha(e,t,a),Ne=n;break;default:ha(e,t,a)}}function Sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gi(e)}catch(a){Ce(t,t.return,a)}}function I1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vm),t;default:throw Error(c(435,e.tag))}}function tc(e,t){var a=I1(e);t.forEach(function(n){var i=ug.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function St(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(Ga(m.type)){Oe=m.stateNode,pt=!1;break e}break;case 5:Oe=m.stateNode,pt=!1;break e;case 3:case 4:Oe=m.stateNode.containerInfo,pt=!0;break e}m=m.return}if(Oe===null)throw Error(c(160));xm(r,d,i),Oe=null,pt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}var Ht=null;function jm(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),jt(e),n&4&&(_a(3,e,e.return),Pl(3,e),_a(5,e,e.return));break;case 1:St(t,e),jt(e),n&512&&(Ne||a===null||Kt(a,a.return)),n&64&&ma&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ht;if(St(t,e),jt(e),n&512&&(Ne||a===null||Kt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Al]||r[it]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),tt(r,n,a),r[it]=e,Xe(r),n=r;break e;case"link":var d=gh("link","href",i).get(n+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(r=d[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;case"meta":if(d=gh("meta","content",i).get(n+(a.content||""))){for(m=0;m<d.length;m++)if(r=d[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[it]=e,Xe(r),n=r}e.stateNode=n}else vh(i,e.type,e.stateNode);else e.stateNode=ph(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?vh(i,e.type,e.stateNode):ph(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Fu(e,e.memoizedProps,a.memoizedProps)}break;case 27:St(t,e),jt(e),n&512&&(Ne||a===null||Kt(a,a.return)),a!==null&&n&4&&Fu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(St(t,e),jt(e),n&512&&(Ne||a===null||Kt(a,a.return)),e.flags&32){i=e.stateNode;try{zn(i,"")}catch(R){Ce(e,e.return,R)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Fu(e,i,a!==null?a.memoizedProps:i)),n&1024&&(ec=!0);break;case 6:if(St(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(R){Ce(e,e.return,R)}}break;case 3:if(Mr=null,i=Ht,Ht=Rr(t.containerInfo),St(t,e),Ht=i,jt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(R){Ce(e,e.return,R)}ec&&(ec=!1,Am(e));break;case 4:n=Ht,Ht=Rr(e.stateNode.containerInfo),St(t,e),jt(e),Ht=n;break;case 12:St(t,e),jt(e);break;case 13:St(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oc=Vt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,tc(e,n)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,z=ma,_=Ne;if(ma=z||i,Ne=_||v,St(t,e),Ne=_,ma=z,jt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||ma||Ne||fn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)d=r.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=v.stateNode;var q=v.memoizedProps.style,T=q!=null&&q.hasOwnProperty("display")?q.display:null;m.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(R){Ce(v,v.return,R)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(R){Ce(v,v.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,tc(e,a))));break;case 19:St(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,tc(e,n)));break;case 30:break;case 21:break;default:St(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(pm(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=Pu(e);gr(e,r,i);break;case 5:var d=a.stateNode;a.flags&32&&(zn(d,""),a.flags&=-33);var m=Pu(e);gr(e,m,d);break;case 3:case 4:var v=a.stateNode.containerInfo,z=Pu(e);Iu(e,z,v);break;default:throw Error(c(161))}}catch(_){Ce(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Am(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $a(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bm(e,t.alternate,t),t=t.sibling}function fn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_a(4,t,t.return),fn(t);break;case 1:Kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&mm(t,t.return,a),fn(t);break;case 27:ui(t.stateNode);case 26:case 5:Kt(t,t.return),fn(t);break;case 22:t.memoizedState===null&&fn(t);break;case 30:fn(t);break;default:fn(t)}e=e.sibling}}function qa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,d=r.flags;switch(r.tag){case 0:case 11:case 15:qa(i,r,a),Pl(4,r);break;case 1:if(qa(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Ce(n,n.return,z)}if(n=r,i=n.updateQueue,i!==null){var m=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Fd(v[i],m)}catch(z){Ce(n,n.return,z)}}a&&d&64&&fm(r),Il(r,r.return);break;case 27:gm(r);case 26:case 5:qa(i,r,a),a&&n===null&&d&4&&hm(r),Il(r,r.return);break;case 12:qa(i,r,a);break;case 13:qa(i,r,a),a&&d&4&&Sm(i,r);break;case 22:r.memoizedState===null&&qa(i,r,a),Il(r,r.return);break;case 30:break;default:qa(i,r,a)}t=t.sibling}}function ac(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ul(a))}function nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e))}function Jt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(e,t,a,n),t=t.sibling}function wm(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,a,n),i&2048&&Pl(9,t);break;case 1:Jt(e,t,a,n);break;case 3:Jt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e)));break;case 12:if(i&2048){Jt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,d=r.id,m=r.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(t,t.return,v)}}else Jt(e,t,a,n);break;case 13:Jt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,d=t.alternate,t.memoizedState!==null?r._visibility&2?Jt(e,t,a,n):ei(e,t):r._visibility&2?Jt(e,t,a,n):(r._visibility|=2,Xn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&ac(d,t);break;case 24:Jt(e,t,a,n),i&2048&&nc(t.alternate,t);break;default:Jt(e,t,a,n)}}function Xn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,d=t,m=a,v=n,z=d.flags;switch(d.tag){case 0:case 11:case 15:Xn(r,d,m,v,i),Pl(8,d);break;case 23:break;case 22:var _=d.stateNode;d.memoizedState!==null?_._visibility&2?Xn(r,d,m,v,i):ei(r,d):(_._visibility|=2,Xn(r,d,m,v,i)),i&&z&2048&&ac(d.alternate,d);break;case 24:Xn(r,d,m,v,i),i&&z&2048&&nc(d.alternate,d);break;default:Xn(r,d,m,v,i)}t=t.sibling}}function ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ei(a,n),i&2048&&ac(n.alternate,n);break;case 24:ei(a,n),i&2048&&nc(n.alternate,n);break;default:ei(a,n)}t=t.sibling}}var ti=8192;function Zn(e){if(e.subtreeFlags&ti)for(e=e.child;e!==null;)Cm(e),e=e.sibling}function Cm(e){switch(e.tag){case 26:Zn(e),e.flags&ti&&e.memoizedState!==null&&Ug(Ht,e.memoizedState,e.memoizedProps);break;case 5:Zn(e);break;case 3:case 4:var t=Ht;Ht=Rr(e.stateNode.containerInfo),Zn(e),Ht=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ti,ti=16777216,Zn(e),ti=t):Zn(e));break;default:Zn(e)}}function Em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,Tm(n,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:ai(e),e.flags&2048&&_a(9,e,e.return);break;case 3:ai(e);break;case 12:ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vr(e)):ai(e);break;default:ai(e)}}function vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,Tm(n,e)}Em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),vr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,vr(t));break;default:vr(t)}e=e.sibling}}function Tm(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:_a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ul(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ke=n;else e:for(a=e;Ke!==null;){n=Ke;var i=n.sibling,r=n.return;if(ym(n),n===a){Ke=null;break e}if(i!==null){i.return=r,Ke=i;break e}Ke=r}}}var eg={getCacheForType:function(e){var t=rt(ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},tg=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ee=null,fe=null,he=0,xe=0,At=null,Na=!1,Kn=!1,lc=!1,pa=0,$e=0,Ba=0,mn=0,ic=0,qt=0,Jn=0,ni=null,gt=null,rc=!1,oc=0,br=1/0,yr=null,Ua=null,et=0,Ha=null,Wn=null,Fn=0,uc=0,cc=null,Rm=null,li=0,sc=null;function wt(){if((ye&2)!==0&&he!==0)return he&-he;if(D.T!==null){var e=Un;return e!==0?e:vc()}return Qs()}function Om(){qt===0&&(qt=(he&536870912)===0||ge?ks():536870912);var e=$t.current;return e!==null&&(e.flags|=32),qt}function Ct(e,t,a){(e===Ee&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Pn(e,0),ka(e,he,qt,!1)),jl(e,a),((ye&2)===0||e!==Ee)&&(e===Ee&&((ye&2)===0&&(mn|=a),$e===4&&ka(e,he,qt,!1)),Wt(e))}function Mm(e,t,a){if((ye&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Sl(e,t),i=n?lg(e,t):mc(e,t,!0),r=n;do{if(i===0){Kn&&!n&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!ag(a)){i=mc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;i=ni;var v=m.current.memoizedState.isDehydrated;if(v&&(Pn(m,d).flags|=256),d=mc(m,d,!1),d!==2){if(lc&&!v){m.errorRecoveryDisabledLanes|=r,mn|=r,i=4;break e}r=gt,gt=i,r!==null&&(gt===null?gt=r:gt.push.apply(gt,r))}i=d}if(r=!1,i!==2)continue}}if(i===1){Pn(e,0),ka(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ka(n,t,qt,!Na);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=oc+300-Vt(),10<i)){if(ka(n,t,qt,!Na),Oi(n,0,!0)!==0)break e;n.timeoutHandle=rh(Dm.bind(null,n,a,gt,yr,rc,t,qt,mn,Jn,Na,r,2,-0,0),i);break e}Dm(n,a,gt,yr,rc,t,qt,mn,Jn,Na,r,0,-0,0)}}break}while(!0);Wt(e)}function Dm(e,t,a,n,i,r,d,m,v,z,_,q,T,R){if(e.timeoutHandle=-1,q=t.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(di={stylesheets:null,count:0,unsuspend:Bg},Cm(t),q=Hg(),q!==null)){e.cancelPendingCommit=q(Hm.bind(null,e,t,r,a,n,i,d,m,v,_,1,T,R)),ka(e,r,d,!z);return}Hm(e,t,r,a,n,i,d,m,v)}function ag(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!yt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,n){t&=~ic,t&=~mn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-bt(i),d=1<<r;n[r]=-1,i&=~d}a!==0&&Ys(e,a,t)}function xr(){return(ye&6)===0?(ii(0),!1):!0}function dc(){if(fe!==null){if(xe===0)var e=fe.return;else e=fe,oa=on=null,Tu(e),Qn=null,Jl=0,e=fe;for(;e!==null;)dm(e.alternate,e),e=e.return;fe=null}}function Pn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),dc(),Ee=e,fe=a=la(e.current,null),he=t,xe=0,At=null,Na=!1,Kn=Sl(e,t),lc=!1,Jn=qt=ic=mn=Ba=$e=0,gt=ni=null,rc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-bt(n),r=1<<i;t|=e[i],n&=~r}return pa=t,Yi(),a}function _m(e,t){ue=null,D.H=or,t===kl||t===Fi?(t=Jd(),xe=3):t===Xd?(t=Jd(),xe=4):xe=t===Ff?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,fe===null&&($e=1,fr(e,Ot(t,e.current)))}function $m(){var e=D.H;return D.H=or,e===null?or:e}function qm(){var e=D.A;return D.A=eg,e}function fc(){$e=4,Na||(he&4194048)!==he&&$t.current!==null||(Kn=!0),(Ba&134217727)===0&&(mn&134217727)===0||Ee===null||ka(Ee,he,qt,!1)}function mc(e,t,a){var n=ye;ye|=2;var i=$m(),r=qm();(Ee!==e||he!==t)&&(yr=null,Pn(e,t)),t=!1;var d=$e;e:do try{if(xe!==0&&fe!==null){var m=fe,v=At;switch(xe){case 8:dc(),d=6;break e;case 3:case 2:case 9:case 6:$t.current===null&&(t=!0);var z=xe;if(xe=0,At=null,In(e,m,v,z),a&&Kn){d=0;break e}break;default:z=xe,xe=0,At=null,In(e,m,v,z)}}ng(),d=$e;break}catch(_){_m(e,_)}while(!0);return t&&e.shellSuspendCounter++,oa=on=null,ye=n,D.H=i,D.A=r,fe===null&&(Ee=null,he=0,Yi()),d}function ng(){for(;fe!==null;)Nm(fe)}function lg(e,t){var a=ye;ye|=2;var n=$m(),i=qm();Ee!==e||he!==t?(yr=null,br=Vt()+500,Pn(e,t)):Kn=Sl(e,t);e:do try{if(xe!==0&&fe!==null){t=fe;var r=At;t:switch(xe){case 1:xe=0,At=null,In(e,t,r,1);break;case 2:case 9:if(Zd(r)){xe=0,At=null,Bm(t);break}t=function(){xe!==2&&xe!==9||Ee!==e||(xe=7),Wt(e)},r.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Zd(r)?(xe=0,At=null,Bm(t)):(xe=0,At=null,In(e,t,r,7));break;case 5:var d=null;switch(fe.tag){case 26:d=fe.memoizedState;case 5:case 27:var m=fe;if(!d||bh(d)){xe=0,At=null;var v=m.sibling;if(v!==null)fe=v;else{var z=m.return;z!==null?(fe=z,Sr(z)):fe=null}break t}}xe=0,At=null,In(e,t,r,5);break;case 6:xe=0,At=null,In(e,t,r,6);break;case 8:dc(),$e=6;break e;default:throw Error(c(462))}}ig();break}catch(_){_m(e,_)}while(!0);return oa=on=null,D.H=n,D.A=i,ye=a,fe!==null?0:(Ee=null,he=0,Yi(),$e)}function ig(){for(;fe!==null&&!z0();)Nm(fe)}function Nm(e){var t=cm(e.alternate,e,pa);e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function Bm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=nm(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=nm(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Tu(t);default:dm(a,t),t=fe=Bd(t,pa),t=cm(a,t,pa)}e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function In(e,t,a,n){oa=on=null,Tu(t),Qn=null,Jl=0;var i=t.return;try{if(K1(e,i,t,a,he)){$e=1,fr(e,Ot(a,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;$e=1,fr(e,Ot(a,e.current)),fe=null;return}t.flags&32768?(ge||n===1?e=!0:Kn||(he&536870912)!==0?e=!1:(Na=e=!0,(n===2||n===9||n===3||n===6)&&(n=$t.current,n!==null&&n.tag===13&&(n.flags|=16384))),Um(t,e)):Sr(t)}function Sr(e){var t=e;do{if((t.flags&32768)!==0){Um(t,Na);return}e=t.return;var a=W1(t.alternate,t,pa);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);$e===0&&($e=5)}function Um(e,t){do{var a=F1(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);$e=6,fe=null}function Hm(e,t,a,n,i,r,d,m,v){e.cancelPendingCommit=null;do jr();while(et!==0);if((ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=nu,B0(e,a,r,d,m,v),e===Ee&&(fe=Ee=null,he=0),Wn=t,Ha=e,Fn=a,uc=r,cc=i,Rm=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cg(zi,function(){return Qm(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=L.p,L.p=2,d=ye,ye|=4;try{P1(e,t,a)}finally{ye=d,L.p=i,D.T=n}}et=1,km(),Gm(),Ym()}}function km(){if(et===1){et=0;var e=Ha,t=Wn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=L.p;L.p=2;var i=ye;ye|=4;try{jm(t,e);var r=Cc,d=zd(e.containerInfo),m=r.focusedElem,v=r.selectionRange;if(d!==m&&m&&m.ownerDocument&&Ed(m.ownerDocument.documentElement,m)){if(v!==null&&Po(m)){var z=v.start,_=v.end;if(_===void 0&&(_=z),"selectionStart"in m)m.selectionStart=z,m.selectionEnd=Math.min(_,m.value.length);else{var q=m.ownerDocument||document,T=q&&q.defaultView||window;if(T.getSelection){var R=T.getSelection(),ne=m.textContent.length,ee=Math.min(v.start,ne),Ae=v.end===void 0?ee:Math.min(v.end,ne);!R.extend&&ee>Ae&&(d=Ae,Ae=ee,ee=d);var w=Cd(m,ee),S=Cd(m,Ae);if(w&&S&&(R.rangeCount!==1||R.anchorNode!==w.node||R.anchorOffset!==w.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var E=q.createRange();E.setStart(w.node,w.offset),R.removeAllRanges(),ee>Ae?(R.addRange(E),R.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),R.addRange(E))}}}}for(q=[],R=m;R=R.parentNode;)R.nodeType===1&&q.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<q.length;m++){var $=q[m];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}$r=!!wc,Cc=wc=null}finally{ye=i,L.p=n,D.T=a}}e.current=t,et=2}}function Gm(){if(et===2){et=0;var e=Ha,t=Wn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=L.p;L.p=2;var i=ye;ye|=4;try{bm(e,t.alternate,t)}finally{ye=i,L.p=n,D.T=a}}et=3}}function Ym(){if(et===4||et===3){et=0,T0();var e=Ha,t=Wn,a=Fn,n=Rm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,Wn=Ha=null,Lm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ua=null),Mo(a),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,i=L.p,L.p=2,D.T=null;try{for(var r=e.onRecoverableError,d=0;d<n.length;d++){var m=n[d];r(m.value,{componentStack:m.stack})}}finally{D.T=t,L.p=i}}(Fn&3)!==0&&jr(),Wt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===sc?li++:(li=0,sc=e):li=0,ii(0)}}function Lm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ul(t)))}function jr(e){return km(),Gm(),Ym(),Qm()}function Qm(){if(et!==5)return!1;var e=Ha,t=uc;uc=0;var a=Mo(Fn),n=D.T,i=L.p;try{L.p=32>a?32:a,D.T=null,a=cc,cc=null;var r=Ha,d=Fn;if(et=0,Wn=Ha=null,Fn=0,(ye&6)!==0)throw Error(c(331));var m=ye;if(ye|=4,zm(r.current),wm(r,r.current,d,a),ye=m,ii(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(xl,r)}catch{}return!0}finally{L.p=i,D.T=n,Lm(e,t)}}function Vm(e,t,a){t=Ot(a,t),t=Yu(e.stateNode,t,2),e=Ra(e,t,2),e!==null&&(jl(e,2),Wt(e))}function Ce(e,t,a){if(e.tag===3)Vm(e,e,a);else for(;t!==null;){if(t.tag===3){Vm(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ua===null||!Ua.has(n))){e=Ot(a,e),a=Jf(2),n=Ra(t,a,2),n!==null&&(Wf(a,n,t,e),jl(n,2),Wt(n));break}}t=t.return}}function hc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new tg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(lc=!0,i.add(a),e=rg.bind(null,e,t,a),t.then(e,e))}function rg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(he&a)===a&&($e===4||$e===3&&(he&62914560)===he&&300>Vt()-oc?(ye&2)===0&&Pn(e,0):ic|=a,Jn===he&&(Jn=0)),Wt(e)}function Xm(e,t){t===0&&(t=Gs()),e=$n(e,t),e!==null&&(jl(e,t),Wt(e))}function og(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xm(e,a)}function ug(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Xm(e,a)}function cg(e,t){return zo(e,t)}var Ar=null,el=null,pc=!1,wr=!1,gc=!1,hn=0;function Wt(e){e!==el&&e.next===null&&(el===null?Ar=el=e:el=el.next=e),wr=!0,pc||(pc=!0,dg())}function ii(e,t){if(!gc&&wr){gc=!0;do for(var a=!1,n=Ar;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var d=n.suspendedLanes,m=n.pingedLanes;r=(1<<31-bt(42|e)+1)-1,r&=i&~(d&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Wm(n,r))}else r=he,r=Oi(n,n===Ee?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Sl(n,r)||(a=!0,Wm(n,r));n=n.next}while(a);gc=!1}}function sg(){Zm()}function Zm(){wr=pc=!1;var e=0;hn!==0&&(yg()&&(e=hn),hn=0);for(var t=Vt(),a=null,n=Ar;n!==null;){var i=n.next,r=Km(n,t);r===0?(n.next=null,a===null?Ar=i:a.next=i,i===null&&(el=a)):(a=n,(e!==0||(r&3)!==0)&&(wr=!0)),n=i}ii(e)}function Km(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var d=31-bt(r),m=1<<d,v=i[d];v===-1?((m&a)===0||(m&n)!==0)&&(i[d]=N0(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=Ee,a=he,a=Oi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&To(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Sl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&To(n),Mo(a)){case 2:case 8:a=Us;break;case 32:a=zi;break;case 268435456:a=Hs;break;default:a=zi}return n=Jm.bind(null,e),a=zo(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&To(n),e.callbackPriority=2,e.callbackNode=null,2}function Jm(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jr()&&e.callbackNode!==a)return null;var n=he;return n=Oi(e,e===Ee?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Mm(e,n,t),Km(e,Vt()),e.callbackNode!=null&&e.callbackNode===a?Jm.bind(null,e):null)}function Wm(e,t){if(jr())return null;Mm(e,t,!0)}function dg(){Sg(function(){(ye&6)!==0?zo(Bs,sg):Zm()})}function vc(){return hn===0&&(hn=ks()),hn}function Fm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qi(""+e)}function Pm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fg(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Fm((i[ft]||null).action),d=n.submitter;d&&(t=(t=d[ft]||null)?Fm(t.formAction):d.getAttribute("formAction"),t!==null&&(r=t,d=null));var m=new Hi("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(hn!==0){var v=d?Pm(i,d):new FormData(i);Bu(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=d?Pm(i,d):new FormData(i),Bu(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var bc=0;bc<au.length;bc++){var yc=au[bc],mg=yc.toLowerCase(),hg=yc[0].toUpperCase()+yc.slice(1);Ut(mg,"on"+hg)}Ut(Od,"onAnimationEnd"),Ut(Md,"onAnimationIteration"),Ut(Dd,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(M1,"onTransitionRun"),Ut(D1,"onTransitionStart"),Ut(_1,"onTransitionCancel"),Ut(_d,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ri));function Im(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var d=n.length-1;0<=d;d--){var m=n[d],v=m.instance,z=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=z;try{r(i)}catch(_){dr(_)}i.currentTarget=null,r=v}else for(d=0;d<n.length;d++){if(m=n[d],v=m.instance,z=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=z;try{r(i)}catch(_){dr(_)}i.currentTarget=null,r=v}}}}function me(e,t){var a=t[Do];a===void 0&&(a=t[Do]=new Set);var n=e+"__bubble";a.has(n)||(eh(t,e,2,!1),a.add(n))}function xc(e,t,a){var n=0;t&&(n|=4),eh(a,e,n,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[Cr]){e[Cr]=!0,Xs.forEach(function(a){a!=="selectionchange"&&(pg.has(a)||xc(a,!1,e),xc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,xc("selectionchange",!1,t))}}function eh(e,t,a,n){switch(wh(t)){case 2:var i=Yg;break;case 8:i=Lg;break;default:i=qc}a=i.bind(null,t,a,e),i=void 0,!Lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function jc(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===i)break;if(d===4)for(d=n.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;m!==null;){if(d=Sn(m),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){n=r=d;continue e}m=m.parentNode}}n=n.return}rd(function(){var z=r,_=Go(a),q=[];e:{var T=$d.get(e);if(T!==void 0){var R=Hi,ne=e;switch(e){case"keypress":if(Bi(a)===0)break e;case"keydown":case"keyup":R=c1;break;case"focusin":ne="focus",R=Zo;break;case"focusout":ne="blur",R=Zo;break;case"beforeblur":case"afterblur":R=Zo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=f1;break;case Od:case Md:case Dd:R=e1;break;case _d:R=h1;break;case"scroll":case"scrollend":R=J0;break;case"wheel":R=g1;break;case"copy":case"cut":case"paste":R=a1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=dd;break;case"toggle":case"beforetoggle":R=b1}var ee=(t&4)!==0,Ae=!ee&&(e==="scroll"||e==="scrollend"),w=ee?T!==null?T+"Capture":null:T;ee=[];for(var S=z,E;S!==null;){var $=S;if(E=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||E===null||w===null||($=Cl(S,w),$!=null&&ee.push(oi(S,$,E))),Ae)break;S=S.return}0<ee.length&&(T=new R(T,ne,null,a,_),q.push({event:T,listeners:ee}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",T&&a!==ko&&(ne=a.relatedTarget||a.fromElement)&&(Sn(ne)||ne[xn]))break e;if((R||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,R?(ne=a.relatedTarget||a.toElement,R=z,ne=ne?Sn(ne):null,ne!==null&&(Ae=p(ne),ee=ne.tag,ne!==Ae||ee!==5&&ee!==27&&ee!==6)&&(ne=null)):(R=null,ne=z),R!==ne)){if(ee=cd,$="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=dd,$="onPointerLeave",w="onPointerEnter",S="pointer"),Ae=R==null?T:wl(R),E=ne==null?T:wl(ne),T=new ee($,S+"leave",R,a,_),T.target=Ae,T.relatedTarget=E,$=null,Sn(_)===z&&(ee=new ee(w,S+"enter",ne,a,_),ee.target=E,ee.relatedTarget=Ae,$=ee),Ae=$,R&&ne)t:{for(ee=R,w=ne,S=0,E=ee;E;E=tl(E))S++;for(E=0,$=w;$;$=tl($))E++;for(;0<S-E;)ee=tl(ee),S--;for(;0<E-S;)w=tl(w),E--;for(;S--;){if(ee===w||w!==null&&ee===w.alternate)break t;ee=tl(ee),w=tl(w)}ee=null}else ee=null;R!==null&&th(q,T,R,ee,!1),ne!==null&&Ae!==null&&th(q,Ae,ne,ee,!0)}}e:{if(T=z?wl(z):window,R=T.nodeName&&T.nodeName.toLowerCase(),R==="select"||R==="input"&&T.type==="file")var J=yd;else if(vd(T))if(xd)J=T1;else{J=E1;var ce=C1}else R=T.nodeName,!R||R.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&Ho(z.elementType)&&(J=yd):J=z1;if(J&&(J=J(e,z))){bd(q,J,a,_);break e}ce&&ce(e,T,z),e==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&Uo(T,"number",T.value)}switch(ce=z?wl(z):window,e){case"focusin":(vd(ce)||ce.contentEditable==="true")&&(Mn=ce,Io=z,_l=null);break;case"focusout":_l=Io=Mn=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Td(q,a,_);break;case"selectionchange":if(O1)break;case"keydown":case"keyup":Td(q,a,_)}var W;if(Jo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else On?pd(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(fd&&a.locale!=="ko"&&(On||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&On&&(W=od()):(Ca=_,Qo="value"in Ca?Ca.value:Ca.textContent,On=!0)),ce=Er(z,ae),0<ce.length&&(ae=new sd(ae,e,null,a,_),q.push({event:ae,listeners:ce}),W?ae.data=W:(W=gd(a),W!==null&&(ae.data=W)))),(W=x1?S1(e,a):j1(e,a))&&(ae=Er(z,"onBeforeInput"),0<ae.length&&(ce=new sd("onBeforeInput","beforeinput",null,a,_),q.push({event:ce,listeners:ae}),ce.data=W)),fg(q,e,z,a,_)}Im(q,t)})}function oi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Er(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Cl(e,a),i!=null&&n.unshift(oi(e,i,r)),i=Cl(e,t),i!=null&&n.push(oi(e,i,r))),e.tag===3)return n;e=e.return}return[]}function tl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function th(e,t,a,n,i){for(var r=t._reactName,d=[];a!==null&&a!==n;){var m=a,v=m.alternate,z=m.stateNode;if(m=m.tag,v!==null&&v===n)break;m!==5&&m!==26&&m!==27||z===null||(v=z,i?(z=Cl(a,r),z!=null&&d.unshift(oi(a,z,v))):i||(z=Cl(a,r),z!=null&&d.push(oi(a,z,v)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var gg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(vg,"")}function nh(e,t){return t=ah(t),ah(e)===t}function zr(){}function je(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||zn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&zn(e,""+n);break;case"className":Di(e,"class",n);break;case"tabIndex":Di(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(e,a,n);break;case"style":ld(e,n,r);break;case"data":if(t!=="object"){Di(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=qi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",i.name,i,null),je(e,t,"formEncType",i.formEncType,i,null),je(e,t,"formMethod",i.formMethod,i,null),je(e,t,"formTarget",i.formTarget,i,null)):(je(e,t,"encType",i.encType,i,null),je(e,t,"method",i.method,i,null),je(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=qi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=zr);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=qi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":me("beforetoggle",e),me("toggle",e),Mi(e,"popover",n);break;case"xlinkActuate":aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":aa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":aa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":aa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":aa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Mi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Z0.get(a)||a,Mi(e,a,n))}}function Ac(e,t,a,n,i,r){switch(a){case"style":ld(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?zn(e,n):(typeof n=="number"||typeof n=="bigint")&&zn(e,""+n);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"onClick":n!=null&&(e.onclick=zr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ft]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Mi(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var d=a[r];if(d!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,r,d,a,null)}}i&&je(e,t,"srcSet",a.srcSet,a,null),n&&je(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=r=d=i=null,v=null,z=null;for(n in a)if(a.hasOwnProperty(n)){var _=a[n];if(_!=null)switch(n){case"name":i=_;break;case"type":d=_;break;case"checked":v=_;break;case"defaultChecked":z=_;break;case"value":r=_;break;case"defaultValue":m=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:je(e,t,n,_,a,null)}}ed(e,r,m,v,z,d,i,!1),_i(e);return;case"select":me("invalid",e),n=d=r=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":d=m;break;case"multiple":n=m;default:je(e,t,i,m,a,null)}t=r,a=d,e.multiple=!!n,t!=null?En(e,!!n,t,!1):a!=null&&En(e,!!n,a,!0);return;case"textarea":me("invalid",e),r=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":n=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:je(e,t,d,m,a,null)}ad(e,n,i,r),_i(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:je(e,t,v,n,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(n=0;n<ri.length;n++)me(ri[n],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(n=a[z],n!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,z,n,a,null)}return;default:if(Ho(t)){for(_ in a)a.hasOwnProperty(_)&&(n=a[_],n!==void 0&&Ac(e,t,_,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&je(e,t,m,n,a,null))}function bg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,d=null,m=null,v=null,z=null,_=null;for(R in a){var q=a[R];if(a.hasOwnProperty(R)&&q!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=q;default:n.hasOwnProperty(R)||je(e,t,R,null,n,q)}}for(var T in n){var R=n[T];if(q=a[T],n.hasOwnProperty(T)&&(R!=null||q!=null))switch(T){case"type":r=R;break;case"name":i=R;break;case"checked":z=R;break;case"defaultChecked":_=R;break;case"value":d=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==q&&je(e,t,T,R,n,q)}}Bo(e,d,m,v,z,_,r,i);return;case"select":R=d=m=T=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":R=v;default:n.hasOwnProperty(r)||je(e,t,r,null,n,v)}for(i in n)if(r=n[i],v=a[i],n.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":T=r;break;case"defaultValue":m=r;break;case"multiple":d=r;default:r!==v&&je(e,t,i,r,n,v)}t=m,a=d,n=R,T!=null?En(e,!!a,T,!1):!!n!=!!a&&(t!=null?En(e,!!a,t,!0):En(e,!!a,a?[]:"",!1));return;case"textarea":R=T=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:je(e,t,m,null,n,i)}for(d in n)if(i=n[d],r=a[d],n.hasOwnProperty(d)&&(i!=null||r!=null))switch(d){case"value":T=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&je(e,t,d,i,n,r)}td(e,T,R);return;case"option":for(var ne in a)if(T=a[ne],a.hasOwnProperty(ne)&&T!=null&&!n.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:je(e,t,ne,null,n,T)}for(v in n)if(T=n[v],R=a[v],n.hasOwnProperty(v)&&T!==R&&(T!=null||R!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:je(e,t,v,T,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)T=a[ee],a.hasOwnProperty(ee)&&T!=null&&!n.hasOwnProperty(ee)&&je(e,t,ee,null,n,T);for(z in n)if(T=n[z],R=a[z],n.hasOwnProperty(z)&&T!==R&&(T!=null||R!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:je(e,t,z,T,n,R)}return;default:if(Ho(t)){for(var Ae in a)T=a[Ae],a.hasOwnProperty(Ae)&&T!==void 0&&!n.hasOwnProperty(Ae)&&Ac(e,t,Ae,void 0,n,T);for(_ in n)T=n[_],R=a[_],!n.hasOwnProperty(_)||T===R||T===void 0&&R===void 0||Ac(e,t,_,T,n,R);return}}for(var w in a)T=a[w],a.hasOwnProperty(w)&&T!=null&&!n.hasOwnProperty(w)&&je(e,t,w,null,n,T);for(q in n)T=n[q],R=a[q],!n.hasOwnProperty(q)||T===R||T==null&&R==null||je(e,t,q,T,n,R)}var wc=null,Cc=null;function Tr(e){return e.nodeType===9?e:e.ownerDocument}function lh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ih(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zc=null;function yg(){var e=window.event;return e&&e.type==="popstate"?e===zc?!1:(zc=e,!0):(zc=null,!1)}var rh=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(e){return oh.resolve(null).then(e).catch(jg)}:rh;function jg(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function uh(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var d=e.ownerDocument;if(a&1&&ui(d.documentElement),a&2&&ui(d.body),a&4)for(a=d.head,ui(a),d=a.firstChild;d;){var m=d.nextSibling,v=d.nodeName;d[Al]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=m}}if(i===0){e.removeChild(r),gi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);gi(t)}function Tc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tc(a),_o(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ag(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Al])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function wg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function Rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cg(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Oc=null;function ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function sh(e,t,a){switch(t=Tr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_o(e)}var Nt=new Map,dh=new Set;function Rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=L.d;L.d={f:Eg,r:zg,D:Tg,C:Rg,L:Og,m:Mg,X:_g,S:Dg,M:$g};function Eg(){var e=ga.f(),t=xr();return e||t}function zg(e){var t=jn(e);t!==null&&t.tag===5&&t.type==="form"?Mf(t):ga.r(e)}var al=typeof document>"u"?null:document;function fh(e,t,a){var n=al;if(n&&typeof t=="string"&&t){var i=Rt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),dh.has(i)||(dh.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),tt(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Tg(e){ga.D(e),fh("dns-prefetch",e,null)}function Rg(e,t){ga.C(e,t),fh("preconnect",e,t)}function Og(e,t,a){ga.L(e,t,a);var n=al;if(n&&e&&t){var i='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Rt(a.imageSizes)+'"]')):i+='[href="'+Rt(e)+'"]';var r=i;switch(t){case"style":r=nl(e);break;case"script":r=ll(e)}Nt.has(r)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Nt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ci(r))||t==="script"&&n.querySelector(si(r))||(t=n.createElement("link"),tt(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Mg(e,t){ga.m(e,t);var a=al;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Rt(n)+'"][href="'+Rt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ll(e)}if(!Nt.has(r)&&(e=A({rel:"modulepreload",href:e},t),Nt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(r)))return}n=a.createElement("link"),tt(n,"link",e),Xe(n),a.head.appendChild(n)}}}function Dg(e,t,a){ga.S(e,t,a);var n=al;if(n&&e){var i=An(n).hoistableStyles,r=nl(e);t=t||"default";var d=i.get(r);if(!d){var m={loading:0,preload:null};if(d=n.querySelector(ci(r)))m.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Nt.get(r))&&Mc(e,a);var v=d=n.createElement("link");Xe(v),tt(v,"link",e),v._p=new Promise(function(z,_){v.onload=z,v.onerror=_}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Or(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:m},i.set(r,d)}}}function _g(e,t){ga.X(e,t);var a=al;if(a&&e){var n=An(a).hoistableScripts,i=ll(e),r=n.get(i);r||(r=a.querySelector(si(i)),r||(e=A({src:e,async:!0},t),(t=Nt.get(i))&&Dc(e,t),r=a.createElement("script"),Xe(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function $g(e,t){ga.M(e,t);var a=al;if(a&&e){var n=An(a).hoistableScripts,i=ll(e),r=n.get(i);r||(r=a.querySelector(si(i)),r||(e=A({src:e,async:!0,type:"module"},t),(t=Nt.get(i))&&Dc(e,t),r=a.createElement("script"),Xe(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function mh(e,t,a,n){var i=(i=te.current)?Rr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=nl(a.href),a=An(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nl(a.href);var r=An(i).hoistableStyles,d=r.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,d),(r=i.querySelector(ci(e)))&&!r._p&&(d.instance=r,d.state.loading=5),Nt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nt.set(e,a),r||qg(i,e,a,d.state))),t&&n===null)throw Error(c(528,""));return d}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ll(a),a=An(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function nl(e){return'href="'+Rt(e)+'"'}function ci(e){return'link[rel="stylesheet"]['+e+"]"}function hh(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function qg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),Xe(t),e.head.appendChild(t))}function ll(e){return'[src="'+Rt(e)+'"]'}function si(e){return"script[async]"+e}function ph(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(n)return t.instance=n,Xe(n),n;var i=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Xe(n),tt(n,"style",i),Or(n,a.precedence,e),t.instance=n;case"stylesheet":i=nl(a.href);var r=e.querySelector(ci(i));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;n=hh(a),(i=Nt.get(i))&&Mc(n,i),r=(e.ownerDocument||e).createElement("link"),Xe(r);var d=r;return d._p=new Promise(function(m,v){d.onload=m,d.onerror=v}),tt(r,"link",n),t.state.loading|=4,Or(r,a.precedence,e),t.instance=r;case"script":return r=ll(a.src),(i=e.querySelector(si(r)))?(t.instance=i,Xe(i),i):(n=a,(i=Nt.get(r))&&(n=A({},a),Dc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),tt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Or(n,a.precedence,e));return t.instance}function Or(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,d=0;d<n.length;d++){var m=n[d];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mr=null;function gh(e,t,a){if(Mr===null){var n=new Map,i=Mr=new Map;i.set(a,n)}else i=Mr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Al]||r[it]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var d=r.getAttribute(t)||"";d=e+d;var m=n.get(d);m?m.push(r):n.set(d,[r])}}return n}function vh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ng(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var di=null;function Bg(){}function Ug(e,t,a){if(di===null)throw Error(c(475));var n=di;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=nl(a.href),r=e.querySelector(ci(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Dr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,a=hh(a),(i=Nt.get(i))&&Mc(a,i),r=r.createElement("link"),Xe(r);var d=r;d._p=new Promise(function(m,v){d.onload=m,d.onerror=v}),tt(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Dr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Hg(){if(di===null)throw Error(c(475));var e=di;return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Dr(){if(this.count--,this.count===0){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _r=null;function _c(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_r=new Map,t.forEach(kg,e),_r=null,Dr.call(e))}function kg(e,t){if(!(t.state.loading&4)){var a=_r.get(e);if(a)var n=a.get(null);else{a=new Map,_r.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var d=i[r];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),r=a.get(d)||n,r===n&&a.set(null,i),a.set(d,i),this.count++,n=Dr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:Z,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Gg(e,t,a,n,i,r,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ro(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.hiddenUpdates=Ro(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function yh(e,t,a,n,i,r,d,m,v,z,_,q){return e=new Gg(e,t,a,d,m,v,z,q),t=1,r===!0&&(t|=24),r=xt(3,null,null,t),e.current=r,r.stateNode=e,t=hu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},bu(r),e}function xh(e){return e?(e=qn,e):qn}function Sh(e,t,a,n,i,r){i=xh(i),n.context===null?n.context=i:n.pendingContext=i,n=Ta(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Ra(e,n,t),a!==null&&(Ct(a,e,t),Yl(a,e,t))}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $c(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function Ah(e){if(e.tag===13){var t=$n(e,67108864);t!==null&&Ct(t,e,67108864),$c(e,67108864)}}var $r=!0;function Yg(e,t,a,n){var i=D.T;D.T=null;var r=L.p;try{L.p=2,qc(e,t,a,n)}finally{L.p=r,D.T=i}}function Lg(e,t,a,n){var i=D.T;D.T=null;var r=L.p;try{L.p=8,qc(e,t,a,n)}finally{L.p=r,D.T=i}}function qc(e,t,a,n){if($r){var i=Nc(n);if(i===null)jc(e,t,n,qr,a),Ch(e,n);else if(Vg(i,e,t,a,n))n.stopPropagation();else if(Ch(e,n),t&4&&-1<Qg.indexOf(e)){for(;i!==null;){var r=jn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var d=Wa(r.pendingLanes);if(d!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var v=1<<31-bt(d);m.entanglements[1]|=v,d&=~v}Wt(r),(ye&6)===0&&(br=Vt()+500,ii(0))}}break;case 13:m=$n(r,2),m!==null&&Ct(m,r,2),xr(),$c(r,2)}if(r=Nc(n),r===null&&jc(e,t,n,qr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else jc(e,t,n,null,a)}}function Nc(e){return e=Go(e),Bc(e)}var qr=null;function Bc(e){if(qr=null,e=Sn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qr=e,null}function wh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(R0()){case Bs:return 2;case Us:return 8;case zi:case O0:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var Uc=!1,Ya=null,La=null,Qa=null,mi=new Map,hi=new Map,Va=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ch(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function pi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=jn(t),t!==null&&Ah(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vg(e,t,a,n,i){switch(t){case"focusin":return Ya=pi(Ya,e,t,a,n,i),!0;case"dragenter":return La=pi(La,e,t,a,n,i),!0;case"mouseover":return Qa=pi(Qa,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return mi.set(r,pi(mi.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,hi.set(r,pi(hi.get(r)||null,e,t,a,n,i)),!0}return!1}function Eh(e){var t=Sn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,U0(e.priority,function(){if(a.tag===13){var n=wt();n=Oo(n);var i=$n(a,n);i!==null&&Ct(i,a,n),$c(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Nc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);ko=n,a.target.dispatchEvent(n),ko=null}else return t=jn(a),t!==null&&Ah(t),e.blockedOn=a,!1;t.shift()}return!0}function zh(e,t,a){Nr(e)&&a.delete(t)}function Xg(){Uc=!1,Ya!==null&&Nr(Ya)&&(Ya=null),La!==null&&Nr(La)&&(La=null),Qa!==null&&Nr(Qa)&&(Qa=null),mi.forEach(zh),hi.forEach(zh)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Uc||(Uc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Xg)))}var Ur=null;function Th(e){Ur!==e&&(Ur=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ur===e&&(Ur=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Bc(n||a)===null)continue;break}var r=jn(a);r!==null&&(e.splice(t,3),t-=3,Bu(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function gi(e){function t(v){return Br(v,e)}Ya!==null&&Br(Ya,e),La!==null&&Br(La,e),Qa!==null&&Br(Qa,e),mi.forEach(t),hi.forEach(t);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],d=i[ft]||null;if(typeof r=="function")d||Th(a);else if(d){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,d=r[ft]||null)m=d.formAction;else if(Bc(i)!==null)continue}else m=d.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Th(a)}}}function Hc(e){this._internalRoot=e}Hr.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=wt();Sh(a,n,e,t,null,null)},Hr.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sh(e.current,2,null,e,null,null),xr(),t[xn]=null}};function Hr(e){this._internalRoot=e}Hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Va.length&&t!==0&&t<Va[a].priority;a++);Va.splice(a,0,e),a===0&&Eh(e)}};var Rh=u.version;if(Rh!=="19.1.1")throw Error(c(527,Rh,"19.1.1"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Zg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{xl=kr.inject(Zg),vt=kr}catch{}}return bi.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",i=Vf,r=Xf,d=Zf,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=yh(e,1,!1,null,null,a,n,i,r,d,m,null),e[xn]=t.current,Sc(e),new Hc(t)},bi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,i="",r=Vf,d=Xf,m=Zf,v=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),t=yh(e,1,!0,t,a??null,n,i,r,d,m,v,z),t.context=xh(null),a=t.current,n=wt(),n=Oo(n),i=Ta(n),i.callback=null,Ra(a,i,n),a=n,t.current.lanes=a,jl(t,a),Wt(t),e[xn]=t.current,Sc(e),new Hr(t)},bi.version="19.1.1",bi}var Hh;function nv(){if(Hh)return Yc.exports;Hh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Yc.exports=av(),Yc.exports}var lv=nv();const iv=fp(lv);var Fe=function(){return Fe=Object.assign||function(u){for(var s,c=1,f=arguments.length;c<f;c++){s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(u[p]=s[p])}return u},Fe.apply(this,arguments)};function dl(l,u,s){if(s||arguments.length===2)for(var c=0,f=u.length,p;c<f;c++)(p||!(c in u))&&(p||(p=Array.prototype.slice.call(u,0,c)),p[c]=u[c]);return l.concat(p||Array.prototype.slice.call(u))}var Re="-ms-",Si="-moz-",be="-webkit-",mp="comm",bo="rule",xs="decl",rv="@import",hp="@keyframes",ov="@layer",pp=Math.abs,Ss=String.fromCharCode,us=Object.assign;function uv(l,u){return We(l,0)^45?(((u<<2^We(l,0))<<2^We(l,1))<<2^We(l,2))<<2^We(l,3):0}function gp(l){return l.trim()}function ya(l,u){return(l=u.exec(l))?l[0]:l}function oe(l,u,s){return l.replace(u,s)}function to(l,u,s){return l.indexOf(u,s)}function We(l,u){return l.charCodeAt(u)|0}function fl(l,u,s){return l.slice(u,s)}function Ft(l){return l.length}function vp(l){return l.length}function xi(l,u){return u.push(l),l}function cv(l,u){return l.map(u).join("")}function kh(l,u){return l.filter(function(s){return!ya(s,u)})}var yo=1,ml=1,bp=0,Bt=0,He=0,gl="";function xo(l,u,s,c,f,p,b,C){return{value:l,root:u,parent:s,type:c,props:f,children:p,line:yo,column:ml,length:b,return:"",siblings:C}}function Za(l,u){return us(xo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function il(l){for(;l.root;)l=Za(l.root,{children:[l]});xi(l,l.siblings)}function sv(){return He}function dv(){return He=Bt>0?We(gl,--Bt):0,ml--,He===10&&(ml=1,yo--),He}function Yt(){return He=Bt<bp?We(gl,Bt++):0,ml++,He===10&&(ml=1,yo++),He}function vn(){return We(gl,Bt)}function ao(){return Bt}function So(l,u){return fl(gl,l,u)}function cs(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fv(l){return yo=ml=1,bp=Ft(gl=l),Bt=0,[]}function mv(l){return gl="",l}function Xc(l){return gp(So(Bt-1,ss(l===91?l+2:l===40?l+1:l)))}function hv(l){for(;(He=vn())&&He<33;)Yt();return cs(l)>2||cs(He)>3?"":" "}function pv(l,u){for(;--u&&Yt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return So(l,ao()+(u<6&&vn()==32&&Yt()==32))}function ss(l){for(;Yt();)switch(He){case l:return Bt;case 34:case 39:l!==34&&l!==39&&ss(He);break;case 40:l===41&&ss(l);break;case 92:Yt();break}return Bt}function gv(l,u){for(;Yt()&&l+He!==57;)if(l+He===84&&vn()===47)break;return"/*"+So(u,Bt-1)+"*"+Ss(l===47?l:Yt())}function vv(l){for(;!cs(vn());)Yt();return So(l,Bt)}function bv(l){return mv(no("",null,null,null,[""],l=fv(l),0,[0],l))}function no(l,u,s,c,f,p,b,C,y){for(var g=0,A=0,M=b,B=0,U=0,k=0,X=1,G=1,V=1,H=0,Z="",le=f,K=p,ie=c,F=Z;G;)switch(k=H,H=Yt()){case 40:if(k!=108&&We(F,M-1)==58){to(F+=oe(Xc(H),"&","&\f"),"&\f",pp(g?C[g-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:F+=Xc(H);break;case 9:case 10:case 13:case 32:F+=hv(k);break;case 92:F+=pv(ao()-1,7);continue;case 47:switch(vn()){case 42:case 47:xi(yv(gv(Yt(),ao()),u,s,y),y);break;default:F+="/"}break;case 123*X:C[g++]=Ft(F)*V;case 125*X:case 59:case 0:switch(H){case 0:case 125:G=0;case 59+A:V==-1&&(F=oe(F,/\f/g,"")),U>0&&Ft(F)-M&&xi(U>32?Yh(F+";",c,s,M-1,y):Yh(oe(F," ","")+";",c,s,M-2,y),y);break;case 59:F+=";";default:if(xi(ie=Gh(F,u,s,g,A,f,C,Z,le=[],K=[],M,p),p),H===123)if(A===0)no(F,u,ie,ie,le,p,M,C,K);else switch(B===99&&We(F,3)===110?100:B){case 100:case 108:case 109:case 115:no(l,ie,ie,c&&xi(Gh(l,ie,ie,0,0,f,C,Z,f,le=[],M,K),K),f,K,M,C,c?le:K);break;default:no(F,ie,ie,ie,[""],K,0,C,K)}}g=A=U=0,X=V=1,Z=F="",M=b;break;case 58:M=1+Ft(F),U=k;default:if(X<1){if(H==123)--X;else if(H==125&&X++==0&&dv()==125)continue}switch(F+=Ss(H),H*X){case 38:V=A>0?1:(F+="\f",-1);break;case 44:C[g++]=(Ft(F)-1)*V,V=1;break;case 64:vn()===45&&(F+=Xc(Yt())),B=vn(),A=M=Ft(Z=F+=vv(ao())),H++;break;case 45:k===45&&Ft(F)==2&&(X=0)}}return p}function Gh(l,u,s,c,f,p,b,C,y,g,A,M){for(var B=f-1,U=f===0?p:[""],k=vp(U),X=0,G=0,V=0;X<c;++X)for(var H=0,Z=fl(l,B+1,B=pp(G=b[X])),le=l;H<k;++H)(le=gp(G>0?U[H]+" "+Z:oe(Z,/&\f/g,U[H])))&&(y[V++]=le);return xo(l,u,s,f===0?bo:C,y,g,A,M)}function yv(l,u,s,c){return xo(l,u,s,mp,Ss(sv()),fl(l,2,-2),0,c)}function Yh(l,u,s,c,f){return xo(l,u,s,xs,fl(l,0,c),fl(l,c+1,-1),c,f)}function yp(l,u,s){switch(uv(l,u)){case 5103:return be+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+l+l;case 4789:return Si+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return be+l+Si+l+Re+l+l;case 5936:switch(We(l,u+11)){case 114:return be+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return be+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return be+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return be+l+Re+l+l;case 6165:return be+l+Re+"flex-"+l+l;case 5187:return be+l+oe(l,/(\w+).+(:[^]+)/,be+"box-$1$2"+Re+"flex-$1$2")+l;case 5443:return be+l+Re+"flex-item-"+oe(l,/flex-|-self/g,"")+(ya(l,/flex-|baseline/)?"":Re+"grid-row-"+oe(l,/flex-|-self/g,""))+l;case 4675:return be+l+Re+"flex-line-pack"+oe(l,/align-content|flex-|-self/g,"")+l;case 5548:return be+l+Re+oe(l,"shrink","negative")+l;case 5292:return be+l+Re+oe(l,"basis","preferred-size")+l;case 6060:return be+"box-"+oe(l,"-grow","")+be+l+Re+oe(l,"grow","positive")+l;case 4554:return be+oe(l,/([^-])(transform)/g,"$1"+be+"$2")+l;case 6187:return oe(oe(oe(l,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),l,"")+l;case 5495:case 3959:return oe(l,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return oe(oe(l,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+l+l;case 4200:if(!ya(l,/flex-|baseline/))return Re+"grid-column-align"+fl(l,u)+l;break;case 2592:case 3360:return Re+oe(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(c,f){return u=f,ya(c.props,/grid-\w+-end/)})?~to(l+(s=s[u].value),"span",0)?l:Re+oe(l,"-start","")+l+Re+"grid-row-span:"+(~to(s,"span",0)?ya(s,/\d+/):+ya(s,/\d+/)-+ya(l,/\d+/))+";":Re+oe(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(c){return ya(c.props,/grid-\w+-start/)})?l:Re+oe(oe(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return oe(l,/(.+)-inline(.+)/,be+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(l)-1-u>6)switch(We(l,u+1)){case 109:if(We(l,u+4)!==45)break;case 102:return oe(l,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+Si+(We(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~to(l,"stretch",0)?yp(oe(l,"stretch","fill-available"),u,s)+l:l}break;case 5152:case 5920:return oe(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,p,b,C,y,g){return Re+f+":"+p+g+(b?Re+f+"-span:"+(C?y:+y-+p)+g:"")+l});case 4949:if(We(l,u+6)===121)return oe(l,":",":"+be)+l;break;case 6444:switch(We(l,We(l,14)===45?18:11)){case 120:return oe(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(We(l,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Re+"$2box$3")+l;case 100:return oe(l,":",":"+Re)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(l,"scroll-","scroll-snap-")+l}return l}function uo(l,u){for(var s="",c=0;c<l.length;c++)s+=u(l[c],c,l,u)||"";return s}function xv(l,u,s,c){switch(l.type){case ov:if(l.children.length)break;case rv:case xs:return l.return=l.return||l.value;case mp:return"";case hp:return l.return=l.value+"{"+uo(l.children,c)+"}";case bo:if(!Ft(l.value=l.props.join(",")))return""}return Ft(s=uo(l.children,c))?l.return=l.value+"{"+s+"}":""}function Sv(l){var u=vp(l);return function(s,c,f,p){for(var b="",C=0;C<u;C++)b+=l[C](s,c,f,p)||"";return b}}function jv(l){return function(u){u.root||(u=u.return)&&l(u)}}function Av(l,u,s,c){if(l.length>-1&&!l.return)switch(l.type){case xs:l.return=yp(l.value,l.length,s);return;case hp:return uo([Za(l,{value:oe(l.value,"@","@"+be)})],c);case bo:if(l.length)return cv(s=l.props,function(f){switch(ya(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":il(Za(l,{props:[oe(f,/:(read-\w+)/,":"+Si+"$1")]})),il(Za(l,{props:[f]})),us(l,{props:kh(s,c)});break;case"::placeholder":il(Za(l,{props:[oe(f,/:(plac\w+)/,":"+be+"input-$1")]})),il(Za(l,{props:[oe(f,/:(plac\w+)/,":"+Si+"$1")]})),il(Za(l,{props:[oe(f,/:(plac\w+)/,Re+"input-$1")]})),il(Za(l,{props:[f]})),us(l,{props:kh(s,c)});break}return""})}}var wv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Et={},hl=typeof process<"u"&&Et!==void 0&&(Et.REACT_APP_SC_ATTR||Et.SC_ATTR)||"data-styled",xp="active",Sp="data-styled-version",jo="6.1.19",js=`/*!sc*/
`,co=typeof window<"u"&&typeof document<"u",Cv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Et.REACT_APP_SC_DISABLE_SPEEDY!==""?Et.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Et.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Et!==void 0&&Et.SC_DISABLE_SPEEDY!==void 0&&Et.SC_DISABLE_SPEEDY!==""&&Et.SC_DISABLE_SPEEDY!=="false"&&Et.SC_DISABLE_SPEEDY),Ev={},Ao=Object.freeze([]),pl=Object.freeze({});function jp(l,u,s){return s===void 0&&(s=pl),l.theme!==s.theme&&l.theme||u||s.theme}var Ap=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tv=/(^-|-$)/g;function Lh(l){return l.replace(zv,"-").replace(Tv,"")}var Rv=/(a)(d)/gi,Gr=52,Qh=function(l){return String.fromCharCode(l+(l>25?39:97))};function ds(l){var u,s="";for(u=Math.abs(l);u>Gr;u=u/Gr|0)s=Qh(u%Gr)+s;return(Qh(u%Gr)+s).replace(Rv,"$1-$2")}var Zc,wp=5381,sl=function(l,u){for(var s=u.length;s;)l=33*l^u.charCodeAt(--s);return l},Cp=function(l){return sl(wp,l)};function As(l){return ds(Cp(l)>>>0)}function Ov(l){return l.displayName||l.name||"Component"}function Kc(l){return typeof l=="string"&&!0}var Ep=typeof Symbol=="function"&&Symbol.for,zp=Ep?Symbol.for("react.memo"):60115,Mv=Ep?Symbol.for("react.forward_ref"):60112,Dv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$v=((Zc={})[Mv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zc[zp]=Tp,Zc);function Vh(l){return("type"in(u=l)&&u.type.$$typeof)===zp?Tp:"$$typeof"in l?$v[l.$$typeof]:Dv;var u}var qv=Object.defineProperty,Nv=Object.getOwnPropertyNames,Xh=Object.getOwnPropertySymbols,Bv=Object.getOwnPropertyDescriptor,Uv=Object.getPrototypeOf,Zh=Object.prototype;function Rp(l,u,s){if(typeof u!="string"){if(Zh){var c=Uv(u);c&&c!==Zh&&Rp(l,c,s)}var f=Nv(u);Xh&&(f=f.concat(Xh(u)));for(var p=Vh(l),b=Vh(u),C=0;C<f.length;++C){var y=f[C];if(!(y in _v||s&&s[y]||b&&y in b||p&&y in p)){var g=Bv(u,y);try{qv(l,y,g)}catch{}}}}return l}function bn(l){return typeof l=="function"}function ws(l){return typeof l=="object"&&"styledComponentId"in l}function gn(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function so(l,u){if(l.length===0)return"";for(var s=l[0],c=1;c<l.length;c++)s+=l[c];return s}function ji(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function fs(l,u,s){if(s===void 0&&(s=!1),!s&&!ji(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)l[c]=fs(l[c],u[c]);else if(ji(u))for(var c in u)l[c]=fs(l[c],u[c]);return l}function Cs(l,u){Object.defineProperty(l,"toString",{value:u})}function yn(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Hv=(function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var s=0,c=0;c<u;c++)s+=this.groupSizes[c];return s},l.prototype.insertRules=function(u,s){if(u>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,p=f;u>=p;)if((p<<=1)<0)throw yn(16,"".concat(u));this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(var b=f;b<p;b++)this.groupSizes[b]=0}for(var C=this.indexOfGroup(u+1),y=(b=0,s.length);b<y;b++)this.tag.insertRule(C,s[b])&&(this.groupSizes[u]++,C++)},l.prototype.clearGroup=function(u){if(u<this.length){var s=this.groupSizes[u],c=this.indexOfGroup(u),f=c+s;this.groupSizes[u]=0;for(var p=c;p<f;p++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(u){var s="";if(u>=this.length||this.groupSizes[u]===0)return s;for(var c=this.groupSizes[u],f=this.indexOfGroup(u),p=f+c,b=f;b<p;b++)s+="".concat(this.tag.getRule(b)).concat(js);return s},l})(),lo=new Map,fo=new Map,io=1,Yr=function(l){if(lo.has(l))return lo.get(l);for(;fo.has(io);)io++;var u=io++;return lo.set(l,u),fo.set(u,l),u},kv=function(l,u){io=u+1,lo.set(l,u),fo.set(u,l)},Gv="style[".concat(hl,"][").concat(Sp,'="').concat(jo,'"]'),Yv=new RegExp("^".concat(hl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lv=function(l,u,s){for(var c,f=s.split(","),p=0,b=f.length;p<b;p++)(c=f[p])&&l.registerName(u,c)},Qv=function(l,u){for(var s,c=((s=u.textContent)!==null&&s!==void 0?s:"").split(js),f=[],p=0,b=c.length;p<b;p++){var C=c[p].trim();if(C){var y=C.match(Yv);if(y){var g=0|parseInt(y[1],10),A=y[2];g!==0&&(kv(A,g),Lv(l,A,y[3]),l.getTag().insertRules(g,f)),f.length=0}else f.push(C)}}},Kh=function(l){for(var u=document.querySelectorAll(Gv),s=0,c=u.length;s<c;s++){var f=u[s];f&&f.getAttribute(hl)!==xp&&(Qv(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function Vv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Op=function(l){var u=document.head,s=l||u,c=document.createElement("style"),f=(function(C){var y=Array.from(C.querySelectorAll("style[".concat(hl,"]")));return y[y.length-1]})(s),p=f!==void 0?f.nextSibling:null;c.setAttribute(hl,xp),c.setAttribute(Sp,jo);var b=Vv();return b&&c.setAttribute("nonce",b),s.insertBefore(c,p),c},Xv=(function(){function l(u){this.element=Op(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,f=0,p=c.length;f<p;f++){var b=c[f];if(b.ownerNode===s)return b}throw yn(17)})(this.element),this.length=0}return l.prototype.insertRule=function(u,s){try{return this.sheet.insertRule(s,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var s=this.sheet.cssRules[u];return s&&s.cssText?s.cssText:""},l})(),Zv=(function(){function l(u){this.element=Op(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,s){if(u<=this.length&&u>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l})(),Kv=(function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,s){return u<=this.length&&(this.rules.splice(u,0,s),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l})(),Jh=co,Jv={isServer:!co,useCSSOMInjection:!Cv},mo=(function(){function l(u,s,c){u===void 0&&(u=pl),s===void 0&&(s={});var f=this;this.options=Fe(Fe({},Jv),u),this.gs=s,this.names=new Map(c),this.server=!!u.isServer,!this.server&&co&&Jh&&(Jh=!1,Kh(this)),Cs(this,function(){return(function(p){for(var b=p.getTag(),C=b.length,y="",g=function(M){var B=(function(V){return fo.get(V)})(M);if(B===void 0)return"continue";var U=p.names.get(B),k=b.getGroup(M);if(U===void 0||!U.size||k.length===0)return"continue";var X="".concat(hl,".g").concat(M,'[id="').concat(B,'"]'),G="";U!==void 0&&U.forEach(function(V){V.length>0&&(G+="".concat(V,","))}),y+="".concat(k).concat(X,'{content:"').concat(G,'"}').concat(js)},A=0;A<C;A++)g(A);return y})(f)})}return l.registerId=function(u){return Yr(u)},l.prototype.rehydrate=function(){!this.server&&co&&Kh(this)},l.prototype.reconstructWithOptions=function(u,s){return s===void 0&&(s=!0),new l(Fe(Fe({},this.options),u),this.gs,s&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(s){var c=s.useCSSOMInjection,f=s.target;return s.isServer?new Kv(f):c?new Xv(f):new Zv(f)})(this.options),new Hv(u)));var u},l.prototype.hasNameForId=function(u,s){return this.names.has(u)&&this.names.get(u).has(s)},l.prototype.registerName=function(u,s){if(Yr(u),this.names.has(u))this.names.get(u).add(s);else{var c=new Set;c.add(s),this.names.set(u,c)}},l.prototype.insertRules=function(u,s,c){this.registerName(u,s),this.getTag().insertRules(Yr(u),c)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(Yr(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l})(),Wv=/&/g,Fv=/^\s*\/\/.*$/gm;function Mp(l,u){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(u," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(u," ")),s.props=s.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Mp(s.children,u)),s})}function Pv(l){var u,s,c,f=pl,p=f.options,b=p===void 0?pl:p,C=f.plugins,y=C===void 0?Ao:C,g=function(B,U,k){return k.startsWith(s)&&k.endsWith(s)&&k.replaceAll(s,"").length>0?".".concat(u):B},A=y.slice();A.push(function(B){B.type===bo&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(Wv,s).replace(c,g))}),b.prefix&&A.push(Av),A.push(xv);var M=function(B,U,k,X){U===void 0&&(U=""),k===void 0&&(k=""),X===void 0&&(X="&"),u=X,s=U,c=new RegExp("\\".concat(s,"\\b"),"g");var G=B.replace(Fv,""),V=bv(k||U?"".concat(k," ").concat(U," { ").concat(G," }"):G);b.namespace&&(V=Mp(V,b.namespace));var H=[];return uo(V,Sv(A.concat(jv(function(Z){return H.push(Z)})))),H};return M.hash=y.length?y.reduce(function(B,U){return U.name||yn(15),sl(B,U.name)},wp).toString():"",M}var Iv=new mo,ms=Pv(),Dp=Ye.createContext({shouldForwardProp:void 0,styleSheet:Iv,stylis:ms});Dp.Consumer;Ye.createContext(void 0);function hs(){return O.useContext(Dp)}var _p=(function(){function l(u,s){var c=this;this.inject=function(f,p){p===void 0&&(p=ms);var b=c.name+p.hash;f.hasNameForId(c.id,b)||f.insertRules(c.id,b,p(c.rules,b,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=s,Cs(this,function(){throw yn(12,String(c.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=ms),this.name+u.hash},l})(),e2=function(l){return l>="A"&&l<="Z"};function Wh(l){for(var u="",s=0;s<l.length;s++){var c=l[s];if(s===1&&c==="-"&&l[0]==="-")return l;e2(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var $p=function(l){return l==null||l===!1||l===""},qp=function(l){var u,s,c=[];for(var f in l){var p=l[f];l.hasOwnProperty(f)&&!$p(p)&&(Array.isArray(p)&&p.isCss||bn(p)?c.push("".concat(Wh(f),":"),p,";"):ji(p)?c.push.apply(c,dl(dl(["".concat(f," {")],qp(p),!1),["}"],!1)):c.push("".concat(Wh(f),": ").concat((u=f,(s=p)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||u in wv||u.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function Ka(l,u,s,c){if($p(l))return[];if(ws(l))return[".".concat(l.styledComponentId)];if(bn(l)){if(!bn(p=l)||p.prototype&&p.prototype.isReactComponent||!u)return[l];var f=l(u);return Ka(f,u,s,c)}var p;return l instanceof _p?s?(l.inject(s,c),[l.getName(c)]):[l]:ji(l)?qp(l):Array.isArray(l)?Array.prototype.concat.apply(Ao,l.map(function(b){return Ka(b,u,s,c)})):[l.toString()]}function Np(l){for(var u=0;u<l.length;u+=1){var s=l[u];if(bn(s)&&!ws(s))return!1}return!0}var t2=Cp(jo),a2=(function(){function l(u,s,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Np(u),this.componentId=s,this.baseHash=sl(t2,s),this.baseStyle=c,mo.registerId(s)}return l.prototype.generateAndInjectStyles=function(u,s,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=gn(f,this.staticRulesId);else{var p=so(Ka(this.rules,u,s,c)),b=ds(sl(this.baseHash,p)>>>0);if(!s.hasNameForId(this.componentId,b)){var C=c(p,".".concat(b),void 0,this.componentId);s.insertRules(this.componentId,b,C)}f=gn(f,b),this.staticRulesId=b}else{for(var y=sl(this.baseHash,c.hash),g="",A=0;A<this.rules.length;A++){var M=this.rules[A];if(typeof M=="string")g+=M;else if(M){var B=so(Ka(M,u,s,c));y=sl(y,B+A),g+=B}}if(g){var U=ds(y>>>0);s.hasNameForId(this.componentId,U)||s.insertRules(this.componentId,U,c(g,".".concat(U),void 0,this.componentId)),f=gn(f,U)}}return f},l})(),Ai=Ye.createContext(void 0);Ai.Consumer;function Bp(l){var u=Ye.useContext(Ai),s=O.useMemo(function(){return(function(c,f){if(!c)throw yn(14);if(bn(c)){var p=c(f);return p}if(Array.isArray(c)||typeof c!="object")throw yn(8);return f?Fe(Fe({},f),c):c})(l.theme,u)},[l.theme,u]);return l.children?Ye.createElement(Ai.Provider,{value:s},l.children):null}var Jc={};function n2(l,u,s){var c=ws(l),f=l,p=!Kc(l),b=u.attrs,C=b===void 0?Ao:b,y=u.componentId,g=y===void 0?(function(le,K){var ie=typeof le!="string"?"sc":Lh(le);Jc[ie]=(Jc[ie]||0)+1;var F="".concat(ie,"-").concat(As(jo+ie+Jc[ie]));return K?"".concat(K,"-").concat(F):F})(u.displayName,u.parentComponentId):y,A=u.displayName,M=A===void 0?(function(le){return Kc(le)?"styled.".concat(le):"Styled(".concat(Ov(le),")")})(l):A,B=u.displayName&&u.componentId?"".concat(Lh(u.displayName),"-").concat(u.componentId):u.componentId||g,U=c&&f.attrs?f.attrs.concat(C).filter(Boolean):C,k=u.shouldForwardProp;if(c&&f.shouldForwardProp){var X=f.shouldForwardProp;if(u.shouldForwardProp){var G=u.shouldForwardProp;k=function(le,K){return X(le,K)&&G(le,K)}}else k=X}var V=new a2(s,B,c?f.componentStyle:void 0);function H(le,K){return(function(ie,F,Te){var we=ie.attrs,ut=ie.componentStyle,dt=ie.defaultProps,Le=ie.foldedComponentIds,It=ie.styledComponentId,ea=ie.target,Qe=Ye.useContext(Ai),D=hs(),L=ie.shouldForwardProp||D.shouldForwardProp,I=jp(F,Qe,dt)||pl,se=(function(de,te,Ve){for(var ve,lt=Fe(Fe({},te),{className:void 0,theme:Ve}),Ja=0;Ja<de.length;Ja+=1){var ta=bn(ve=de[Ja])?ve(lt):ve;for(var zt in ta)lt[zt]=zt==="className"?gn(lt[zt],ta[zt]):zt==="style"?Fe(Fe({},lt[zt]),ta[zt]):ta[zt]}return te.className&&(lt.className=gn(lt.className,te.className)),lt})(we,F,I),x=se.as||ea,N={};for(var Y in se)se[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&se.theme===I||(Y==="forwardedAs"?N.as=se.forwardedAs:L&&!L(Y,x)||(N[Y]=se[Y]));var Q=(function(de,te){var Ve=hs(),ve=de.generateAndInjectStyles(te,Ve.styleSheet,Ve.stylis);return ve})(ut,se),P=gn(Le,It);return Q&&(P+=" "+Q),se.className&&(P+=" "+se.className),N[Kc(x)&&!Ap.has(x)?"class":"className"]=P,Te&&(N.ref=Te),O.createElement(x,N)})(Z,le,K)}H.displayName=M;var Z=Ye.forwardRef(H);return Z.attrs=U,Z.componentStyle=V,Z.displayName=M,Z.shouldForwardProp=k,Z.foldedComponentIds=c?gn(f.foldedComponentIds,f.styledComponentId):"",Z.styledComponentId=B,Z.target=c?f.target:l,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=c?(function(K){for(var ie=[],F=1;F<arguments.length;F++)ie[F-1]=arguments[F];for(var Te=0,we=ie;Te<we.length;Te++)fs(K,we[Te],!0);return K})({},f.defaultProps,le):le}}),Cs(Z,function(){return".".concat(Z.styledComponentId)}),p&&Rp(Z,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Fh(l,u){for(var s=[l[0]],c=0,f=u.length;c<f;c+=1)s.push(u[c],l[c+1]);return s}var Ph=function(l){return Object.assign(l,{isCss:!0})};function wo(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];if(bn(l)||ji(l))return Ph(Ka(Fh(Ao,dl([l],u,!0))));var c=l;return u.length===0&&c.length===1&&typeof c[0]=="string"?Ka(c):Ph(Ka(Fh(c,u)))}function ps(l,u,s){if(s===void 0&&(s=pl),!u)throw yn(1,u);var c=function(f){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];return l(u,s,wo.apply(void 0,dl([f],p,!1)))};return c.attrs=function(f){return ps(l,u,Fe(Fe({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return ps(l,u,Fe(Fe({},s),f))},c}var Up=function(l){return ps(n2,l)},j=Up;Ap.forEach(function(l){j[l]=Up(l)});var l2=(function(){function l(u,s){this.rules=u,this.componentId=s,this.isStatic=Np(u),mo.registerId(this.componentId+1)}return l.prototype.createStyles=function(u,s,c,f){var p=f(so(Ka(this.rules,s,c,f)),""),b=this.componentId+u;c.insertRules(b,b,p)},l.prototype.removeStyles=function(u,s){s.clearRules(this.componentId+u)},l.prototype.renderStyles=function(u,s,c,f){u>2&&mo.registerId(this.componentId+u),this.removeStyles(u,c),this.createStyles(u,s,c,f)},l})();function i2(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];var c=wo.apply(void 0,dl([l],u,!1)),f="sc-global-".concat(As(JSON.stringify(c))),p=new l2(c,f),b=function(y){var g=hs(),A=Ye.useContext(Ai),M=Ye.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&C(M,y,g.styleSheet,A,g.stylis),Ye.useLayoutEffect(function(){if(!g.styleSheet.server)return C(M,y,g.styleSheet,A,g.stylis),function(){return p.removeStyles(M,g.styleSheet)}},[M,y,g.styleSheet,A,g.stylis]),null};function C(y,g,A,M,B){if(p.isStatic)p.renderStyles(y,Ev,A,B);else{var U=Fe(Fe({},g),{theme:jp(g,M,b.defaultProps)});p.renderStyles(y,U,A,B)}}return Ye.memo(b)}function r2(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];var c=so(wo.apply(void 0,dl([l],u,!1))),f=As(c);return new _p(f,c)}const h={colors:{primary:"#26a9e0",secundary:"#001f3D",white:"#FFFFFF",lightGray:"#F9FAFB",dark:"#000f1d",mediumGray:"#9E9E9E"},fonts:{primary:'"Inter", sans-serif',secondary:'"Roboto", sans-serif'},breakpoints:{mobile:"1020px",tablet:"986px",desktop:"1200px"},transitions:{default:"0.2s ease-in-out"},shadows:{small:"0 2px 4px rgba(0,0,0,0.1)",medium:"0 4px 8px rgba(0,0,0,0.15)",large:"0 8px 16px rgba(0,0,0,0.2)"}},o2=i2`
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
`,pn=j.li`
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
 */var Ih="popstate";function h2(l={}){function u(c,f){let{pathname:p,search:b,hash:C}=c.location;return gs("",{pathname:p,search:b,hash:C},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:wi(f)}return g2(u,s,null,l)}function Me(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function Lt(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function p2(){return Math.random().toString(36).substring(2,10)}function ep(l,u){return{usr:l.state,key:l.key,idx:u}}function gs(l,u,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?vl(u):u,state:s,key:u&&u.key||c||p2()}}function wi({pathname:l="/",search:u="",hash:s=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function vl(l){let u={};if(l){let s=l.indexOf("#");s>=0&&(u.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(u.search=l.substring(c),l=l.substring(0,c)),l&&(u.pathname=l)}return u}function g2(l,u,s,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,b=f.history,C="POP",y=null,g=A();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function A(){return(b.state||{idx:null}).idx}function M(){C="POP";let G=A(),V=G==null?null:G-g;g=G,y&&y({action:C,location:X.location,delta:V})}function B(G,V){C="PUSH";let H=gs(X.location,G,V);g=A()+1;let Z=ep(H,g),le=X.createHref(H);try{b.pushState(Z,"",le)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;f.location.assign(le)}p&&y&&y({action:C,location:X.location,delta:1})}function U(G,V){C="REPLACE";let H=gs(X.location,G,V);g=A();let Z=ep(H,g),le=X.createHref(H);b.replaceState(Z,"",le),p&&y&&y({action:C,location:X.location,delta:0})}function k(G){return v2(G)}let X={get action(){return C},get location(){return l(f,b)},listen(G){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Ih,M),y=G,()=>{f.removeEventListener(Ih,M),y=null}},createHref(G){return u(f,G)},createURL:k,encodeLocation(G){let V=k(G);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:B,replace:U,go(G){return b.go(G)}};return X}function v2(l,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Me(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:wi(l);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Hp(l,u,s="/"){return b2(l,u,s,!1)}function b2(l,u,s,c){let f=typeof u=="string"?vl(u):u,p=Sa(f.pathname||"/",s);if(p==null)return null;let b=kp(l);y2(b);let C=null;for(let y=0;C==null&&y<b.length;++y){let g=O2(p);C=T2(b[y],g,c)}return C}function kp(l,u=[],s=[],c="",f=!1){let p=(b,C,y=f,g)=>{let A={relativePath:g===void 0?b.path||"":g,caseSensitive:b.caseSensitive===!0,childrenIndex:C,route:b};if(A.relativePath.startsWith("/")){if(!A.relativePath.startsWith(c)&&y)return;Me(A.relativePath.startsWith(c),`Absolute route path "${A.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),A.relativePath=A.relativePath.slice(c.length)}let M=xa([c,A.relativePath]),B=s.concat(A);b.children&&b.children.length>0&&(Me(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${M}".`),kp(b.children,u,B,M,y)),!(b.path==null&&!b.index)&&u.push({path:M,score:E2(M,b.index),routesMeta:B})};return l.forEach((b,C)=>{if(b.path===""||!b.path?.includes("?"))p(b,C);else for(let y of Gp(b.path))p(b,C,!0,y)}),u}function Gp(l){let u=l.split("/");if(u.length===0)return[];let[s,...c]=u,f=s.endsWith("?"),p=s.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let b=Gp(c.join("/")),C=[];return C.push(...b.map(y=>y===""?p:[p,y].join("/"))),f&&C.push(...b),C.map(y=>l.startsWith("/")&&y===""?"/":y)}function y2(l){l.sort((u,s)=>u.score!==s.score?s.score-u.score:z2(u.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var x2=/^:[\w-]+$/,S2=3,j2=2,A2=1,w2=10,C2=-2,tp=l=>l==="*";function E2(l,u){let s=l.split("/"),c=s.length;return s.some(tp)&&(c+=C2),u&&(c+=j2),s.filter(f=>!tp(f)).reduce((f,p)=>f+(x2.test(p)?S2:p===""?A2:w2),c)}function z2(l,u){return l.length===u.length&&l.slice(0,-1).every((c,f)=>c===u[f])?l[l.length-1]-u[u.length-1]:0}function T2(l,u,s=!1){let{routesMeta:c}=l,f={},p="/",b=[];for(let C=0;C<c.length;++C){let y=c[C],g=C===c.length-1,A=p==="/"?u:u.slice(p.length)||"/",M=ho({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},A),B=y.route;if(!M&&g&&s&&!c[c.length-1].route.index&&(M=ho({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},A)),!M)return null;Object.assign(f,M.params),b.push({params:f,pathname:xa([p,M.pathname]),pathnameBase:$2(xa([p,M.pathnameBase])),route:B}),M.pathnameBase!=="/"&&(p=xa([p,M.pathnameBase]))}return b}function ho(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=R2(l.path,l.caseSensitive,l.end),f=u.match(s);if(!f)return null;let p=f[0],b=p.replace(/(.)\/+$/,"$1"),C=f.slice(1);return{params:c.reduce((g,{paramName:A,isOptional:M},B)=>{if(A==="*"){let k=C[B]||"";b=p.slice(0,p.length-k.length).replace(/(.)\/+$/,"$1")}const U=C[B];return M&&!U?g[A]=void 0:g[A]=(U||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:b,pattern:l}}function R2(l,u=!1,s=!0){Lt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,C,y)=>(c.push({paramName:C,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),c]}function O2(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Lt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function Sa(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}function M2(l,u="/"){let{pathname:s,search:c="",hash:f=""}=typeof l=="string"?vl(l):l;return{pathname:s?s.startsWith("/")?s:D2(s,u):u,search:q2(c),hash:N2(f)}}function D2(l,u){let s=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function Wc(l,u,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _2(l){return l.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Es(l){let u=_2(l);return u.map((s,c)=>c===u.length-1?s.pathname:s.pathnameBase)}function zs(l,u,s,c=!1){let f;typeof l=="string"?f=vl(l):(f={...l},Me(!f.pathname||!f.pathname.includes("?"),Wc("?","pathname","search",f)),Me(!f.pathname||!f.pathname.includes("#"),Wc("#","pathname","hash",f)),Me(!f.search||!f.search.includes("#"),Wc("#","search","hash",f)));let p=l===""||f.pathname==="",b=p?"/":f.pathname,C;if(b==null)C=s;else{let M=u.length-1;if(!c&&b.startsWith("..")){let B=b.split("/");for(;B[0]==="..";)B.shift(),M-=1;f.pathname=B.join("/")}C=M>=0?u[M]:"/"}let y=M2(f,C),g=b&&b!=="/"&&b.endsWith("/"),A=(p||b===".")&&s.endsWith("/");return!y.pathname.endsWith("/")&&(g||A)&&(y.pathname+="/"),y}var xa=l=>l.join("/").replace(/\/\/+/g,"/"),$2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),q2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,N2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function B2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Yp=["POST","PUT","PATCH","DELETE"];new Set(Yp);var U2=["GET",...Yp];new Set(U2);var bl=O.createContext(null);bl.displayName="DataRouter";var Co=O.createContext(null);Co.displayName="DataRouterState";O.createContext(!1);var Lp=O.createContext({isTransitioning:!1});Lp.displayName="ViewTransition";var H2=O.createContext(new Map);H2.displayName="Fetchers";var k2=O.createContext(null);k2.displayName="Await";var Qt=O.createContext(null);Qt.displayName="Navigation";var Ci=O.createContext(null);Ci.displayName="Location";var Pt=O.createContext({outlet:null,matches:[],isDataRoute:!1});Pt.displayName="Route";var Ts=O.createContext(null);Ts.displayName="RouteError";function G2(l,{relative:u}={}){Me(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=O.useContext(Qt),{hash:f,pathname:p,search:b}=Ei(l,{relative:u}),C=p;return s!=="/"&&(C=p==="/"?s:xa([s,p])),c.createHref({pathname:C,search:b,hash:f})}function yl(){return O.useContext(Ci)!=null}function ja(){return Me(yl(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ci).location}var Qp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vp(l){O.useContext(Qt).static||O.useLayoutEffect(l)}function Xp(){let{isDataRoute:l}=O.useContext(Pt);return l?eb():Y2()}function Y2(){Me(yl(),"useNavigate() may be used only in the context of a <Router> component.");let l=O.useContext(bl),{basename:u,navigator:s}=O.useContext(Qt),{matches:c}=O.useContext(Pt),{pathname:f}=ja(),p=JSON.stringify(Es(c)),b=O.useRef(!1);return Vp(()=>{b.current=!0}),O.useCallback((y,g={})=>{if(Lt(b.current,Qp),!b.current)return;if(typeof y=="number"){s.go(y);return}let A=zs(y,JSON.parse(p),f,g.relative==="path");l==null&&u!=="/"&&(A.pathname=A.pathname==="/"?u:xa([u,A.pathname])),(g.replace?s.replace:s.push)(A,g.state,g)},[u,s,p,f,l])}O.createContext(null);function Ei(l,{relative:u}={}){let{matches:s}=O.useContext(Pt),{pathname:c}=ja(),f=JSON.stringify(Es(s));return O.useMemo(()=>zs(l,JSON.parse(f),c,u==="path"),[l,f,c,u])}function L2(l,u){return Zp(l,u)}function Zp(l,u,s,c,f){Me(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=O.useContext(Qt),{matches:b}=O.useContext(Pt),C=b[b.length-1],y=C?C.params:{},g=C?C.pathname:"/",A=C?C.pathnameBase:"/",M=C&&C.route;{let H=M&&M.path||"";Kp(g,!M||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let B=ja(),U;if(u){let H=typeof u=="string"?vl(u):u;Me(A==="/"||H.pathname?.startsWith(A),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=B;let k=U.pathname||"/",X=k;if(A!=="/"){let H=A.replace(/^\//,"").split("/");X="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=Hp(l,{pathname:X});Lt(M||G!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Lt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=K2(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},y,H.params),pathname:xa([A,p.encodeLocation?p.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?A:xa([A,p.encodeLocation?p.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),b,s,c,f);return u&&V?O.createElement(Ci.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},V):V}function Q2(){let l=I2(),u=B2(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",l),b=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:p},"ErrorBoundary")," or"," ",O.createElement("code",{style:p},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},u),s?O.createElement("pre",{style:f},s):null,b)}var V2=O.createElement(Q2,null),X2=class extends O.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){this.props.unstable_onError?this.props.unstable_onError(l,u):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?O.createElement(Pt.Provider,{value:this.props.routeContext},O.createElement(Ts.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Z2({routeContext:l,match:u,children:s}){let c=O.useContext(bl);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),O.createElement(Pt.Provider,{value:l},s)}function K2(l,u=[],s=null,c=null,f=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let p=l,b=s?.errors;if(b!=null){let g=p.findIndex(A=>A.route.id&&b?.[A.route.id]!==void 0);Me(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),p=p.slice(0,Math.min(p.length,g+1))}let C=!1,y=-1;if(s)for(let g=0;g<p.length;g++){let A=p[g];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(y=g),A.route.id){let{loaderData:M,errors:B}=s,U=A.route.loader&&!M.hasOwnProperty(A.route.id)&&(!B||B[A.route.id]===void 0);if(A.route.lazy||U){C=!0,y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}return p.reduceRight((g,A,M)=>{let B,U=!1,k=null,X=null;s&&(B=b&&A.route.id?b[A.route.id]:void 0,k=A.route.errorElement||V2,C&&(y<0&&M===0?(Kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,X=null):y===M&&(U=!0,X=A.route.hydrateFallbackElement||null)));let G=u.concat(p.slice(0,M+1)),V=()=>{let H;return B?H=k:U?H=X:A.route.Component?H=O.createElement(A.route.Component,null):A.route.element?H=A.route.element:H=g,O.createElement(Z2,{match:A,routeContext:{outlet:g,matches:G,isDataRoute:s!=null},children:H})};return s&&(A.route.ErrorBoundary||A.route.errorElement||M===0)?O.createElement(X2,{location:s.location,revalidation:s.revalidation,component:k,error:B,children:V(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:c}):V()},null)}function Rs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J2(l){let u=O.useContext(bl);return Me(u,Rs(l)),u}function W2(l){let u=O.useContext(Co);return Me(u,Rs(l)),u}function F2(l){let u=O.useContext(Pt);return Me(u,Rs(l)),u}function Os(l){let u=F2(l),s=u.matches[u.matches.length-1];return Me(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function P2(){return Os("useRouteId")}function I2(){let l=O.useContext(Ts),u=W2("useRouteError"),s=Os("useRouteError");return l!==void 0?l:u.errors?.[s]}function eb(){let{router:l}=J2("useNavigate"),u=Os("useNavigate"),s=O.useRef(!1);return Vp(()=>{s.current=!0}),O.useCallback(async(f,p={})=>{Lt(s.current,Qp),s.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:u,...p}))},[l,u])}var ap={};function Kp(l,u,s){!u&&!ap[l]&&(ap[l]=!0,Lt(!1,s))}O.memo(tb);function tb({routes:l,future:u,state:s,unstable_onError:c}){return Zp(l,void 0,s,c,u)}function ab({to:l,replace:u,state:s,relative:c}){Me(yl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=O.useContext(Qt);Lt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=O.useContext(Pt),{pathname:b}=ja(),C=Xp(),y=zs(l,Es(p),b,c==="path"),g=JSON.stringify(y);return O.useEffect(()=>{C(JSON.parse(g),{replace:u,state:s,relative:c})},[C,g,c,u,s]),null}function ba(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nb({basename:l="/",children:u=null,location:s,navigationType:c="POP",navigator:f,static:p=!1}){Me(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),C=O.useMemo(()=>({basename:b,navigator:f,static:p,future:{}}),[b,f,p]);typeof s=="string"&&(s=vl(s));let{pathname:y="/",search:g="",hash:A="",state:M=null,key:B="default"}=s,U=O.useMemo(()=>{let k=Sa(y,b);return k==null?null:{location:{pathname:k,search:g,hash:A,state:M,key:B},navigationType:c}},[b,y,g,A,M,B,c]);return Lt(U!=null,`<Router basename="${b}"> is not able to match the URL "${y}${g}${A}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:O.createElement(Qt.Provider,{value:C},O.createElement(Ci.Provider,{children:u,value:U}))}function lb({children:l,location:u}){return L2(vs(l),u)}function vs(l,u=[]){let s=[];return O.Children.forEach(l,(c,f)=>{if(!O.isValidElement(c))return;let p=[...u,f];if(c.type===O.Fragment){s.push.apply(s,vs(c.props.children,p));return}Me(c.type===ba,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=vs(c.props.children,p)),s.push(b)}),s}var ro="get",oo="application/x-www-form-urlencoded";function Eo(l){return l!=null&&typeof l.tagName=="string"}function ib(l){return Eo(l)&&l.tagName.toLowerCase()==="button"}function rb(l){return Eo(l)&&l.tagName.toLowerCase()==="form"}function ob(l){return Eo(l)&&l.tagName.toLowerCase()==="input"}function ub(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function cb(l,u){return l.button===0&&(!u||u==="_self")&&!ub(l)}var Lr=null;function sb(){if(Lr===null)try{new FormData(document.createElement("form"),0),Lr=!1}catch{Lr=!0}return Lr}var db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fc(l){return l!=null&&!db.has(l)?(Lt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oo}"`),null):l}function fb(l,u){let s,c,f,p,b;if(rb(l)){let C=l.getAttribute("action");c=C?Sa(C,u):null,s=l.getAttribute("method")||ro,f=Fc(l.getAttribute("enctype"))||oo,p=new FormData(l)}else if(ib(l)||ob(l)&&(l.type==="submit"||l.type==="image")){let C=l.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||C.getAttribute("action");if(c=y?Sa(y,u):null,s=l.getAttribute("formmethod")||C.getAttribute("method")||ro,f=Fc(l.getAttribute("formenctype"))||Fc(C.getAttribute("enctype"))||oo,p=new FormData(C,l),!sb()){let{name:g,type:A,value:M}=l;if(A==="image"){let B=g?`${g}.`:"";p.append(`${B}x`,"0"),p.append(`${B}y`,"0")}else g&&p.append(g,M)}}else{if(Eo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ro,c=null,f=oo,b=l}return p&&f==="text/plain"&&(b=p,p=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ms(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function mb(l,u,s){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c.pathname==="/"?c.pathname=`_root.${s}`:u&&Sa(c.pathname,u)==="/"?c.pathname=`${u.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function hb(l,u){if(l.id in u)return u[l.id];try{let s=await import(l.module);return u[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pb(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function gb(l,u,s){let c=await Promise.all(l.map(async f=>{let p=u.routes[f.route.id];if(p){let b=await hb(p,s);return b.links?b.links():[]}return[]}));return xb(c.flat(1).filter(pb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function np(l,u,s,c,f,p){let b=(y,g)=>s[g]?y.route.id!==s[g].route.id:!0,C=(y,g)=>s[g].pathname!==y.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==y.params["*"];return p==="assets"?u.filter((y,g)=>b(y,g)||C(y,g)):p==="data"?u.filter((y,g)=>{let A=c.routes[y.route.id];if(!A||!A.hasLoader)return!1;if(b(y,g)||C(y,g))return!0;if(y.route.shouldRevalidate){let M=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function vb(l,u,{includeHydrateFallback:s}={}){return bb(l.map(c=>{let f=u.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function bb(l){return[...new Set(l)]}function yb(l){let u={},s=Object.keys(l).sort();for(let c of s)u[c]=l[c];return u}function xb(l,u){let s=new Set;return new Set(u),l.reduce((c,f)=>{let p=JSON.stringify(yb(f));return s.has(p)||(s.add(p),c.push({key:p,link:f})),c},[])}function Jp(){let l=O.useContext(bl);return Ms(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Sb(){let l=O.useContext(Co);return Ms(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Ds=O.createContext(void 0);Ds.displayName="FrameworkContext";function Wp(){let l=O.useContext(Ds);return Ms(l,"You must render this element inside a <HydratedRouter> element"),l}function jb(l,u){let s=O.useContext(Ds),[c,f]=O.useState(!1),[p,b]=O.useState(!1),{onFocus:C,onBlur:y,onMouseEnter:g,onMouseLeave:A,onTouchStart:M}=u,B=O.useRef(null);O.useEffect(()=>{if(l==="render"&&b(!0),l==="viewport"){let X=V=>{V.forEach(H=>{b(H.isIntersecting)})},G=new IntersectionObserver(X,{threshold:.5});return B.current&&G.observe(B.current),()=>{G.disconnect()}}},[l]),O.useEffect(()=>{if(c){let X=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(X)}}},[c]);let U=()=>{f(!0)},k=()=>{f(!1),b(!1)};return s?l!=="intent"?[p,B,{}]:[p,B,{onFocus:yi(C,U),onBlur:yi(y,k),onMouseEnter:yi(g,U),onMouseLeave:yi(A,k),onTouchStart:yi(M,U)}]:[!1,B,{}]}function yi(l,u){return s=>{l&&l(s),s.defaultPrevented||u(s)}}function Ab({page:l,...u}){let{router:s}=Jp(),c=O.useMemo(()=>Hp(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?O.createElement(Cb,{page:l,matches:c,...u}):null}function wb(l){let{manifest:u,routeModules:s}=Wp(),[c,f]=O.useState([]);return O.useEffect(()=>{let p=!1;return gb(l,u,s).then(b=>{p||f(b)}),()=>{p=!0}},[l,u,s]),c}function Cb({page:l,matches:u,...s}){let c=ja(),{manifest:f,routeModules:p}=Wp(),{basename:b}=Jp(),{loaderData:C,matches:y}=Sb(),g=O.useMemo(()=>np(l,u,y,f,c,"data"),[l,u,y,f,c]),A=O.useMemo(()=>np(l,u,y,f,c,"assets"),[l,u,y,f,c]),M=O.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let k=new Set,X=!1;if(u.forEach(V=>{let H=f.routes[V.route.id];!H||!H.hasLoader||(!g.some(Z=>Z.route.id===V.route.id)&&V.route.id in C&&p[V.route.id]?.shouldRevalidate||H.hasClientLoader?X=!0:k.add(V.route.id))}),k.size===0)return[];let G=mb(l,b,"data");return X&&k.size>0&&G.searchParams.set("_routes",u.filter(V=>k.has(V.route.id)).map(V=>V.route.id).join(",")),[G.pathname+G.search]},[b,C,c,f,g,u,l,p]),B=O.useMemo(()=>vb(A,f),[A,f]),U=wb(A);return O.createElement(O.Fragment,null,M.map(k=>O.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...s})),B.map(k=>O.createElement("link",{key:k,rel:"modulepreload",href:k,...s})),U.map(({key:k,link:X})=>O.createElement("link",{key:k,nonce:s.nonce,...X})))}function Eb(...l){return u=>{l.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Fp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fp&&(window.__reactRouterVersion="7.9.1")}catch{}function zb({basename:l,children:u,window:s}){let c=O.useRef();c.current==null&&(c.current=h2({window:s,v5Compat:!0}));let f=c.current,[p,b]=O.useState({action:f.action,location:f.location}),C=O.useCallback(y=>{O.startTransition(()=>b(y))},[b]);return O.useLayoutEffect(()=>f.listen(C),[f,C]),O.createElement(nb,{basename:l,children:u,location:p.location,navigationType:p.action,navigator:f})}var Pp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,st=O.forwardRef(function({onClick:u,discover:s="render",prefetch:c="none",relative:f,reloadDocument:p,replace:b,state:C,target:y,to:g,preventScrollReset:A,viewTransition:M,...B},U){let{basename:k}=O.useContext(Qt),X=typeof g=="string"&&Pp.test(g),G,V=!1;if(typeof g=="string"&&X&&(G=g,Fp))try{let we=new URL(window.location.href),ut=g.startsWith("//")?new URL(we.protocol+g):new URL(g),dt=Sa(ut.pathname,k);ut.origin===we.origin&&dt!=null?g=dt+ut.search+ut.hash:V=!0}catch{Lt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=G2(g,{relative:f}),[Z,le,K]=jb(c,B),ie=Mb(g,{replace:b,state:C,target:y,preventScrollReset:A,relative:f,viewTransition:M});function F(we){u&&u(we),we.defaultPrevented||ie(we)}let Te=O.createElement("a",{...B,...K,href:G||H,onClick:V||p?u:F,ref:Eb(U,le),target:y,"data-discover":!X&&s==="render"?"true":void 0});return Z&&!X?O.createElement(O.Fragment,null,Te,O.createElement(Ab,{page:H})):Te});st.displayName="Link";var Tb=O.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:c="",end:f=!1,style:p,to:b,viewTransition:C,children:y,...g},A){let M=Ei(b,{relative:g.relative}),B=ja(),U=O.useContext(Co),{navigator:k,basename:X}=O.useContext(Qt),G=U!=null&&Nb(M)&&C===!0,V=k.encodeLocation?k.encodeLocation(M).pathname:M.pathname,H=B.pathname,Z=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;s||(H=H.toLowerCase(),Z=Z?Z.toLowerCase():null,V=V.toLowerCase()),Z&&X&&(Z=Sa(Z,X)||Z);const le=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let K=H===V||!f&&H.startsWith(V)&&H.charAt(le)==="/",ie=Z!=null&&(Z===V||!f&&Z.startsWith(V)&&Z.charAt(V.length)==="/"),F={isActive:K,isPending:ie,isTransitioning:G},Te=K?u:void 0,we;typeof c=="function"?we=c(F):we=[c,K?"active":null,ie?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let ut=typeof p=="function"?p(F):p;return O.createElement(st,{...g,"aria-current":Te,className:we,ref:A,style:ut,to:b,viewTransition:C},typeof y=="function"?y(F):y)});Tb.displayName="NavLink";var Rb=O.forwardRef(({discover:l="render",fetcherKey:u,navigate:s,reloadDocument:c,replace:f,state:p,method:b=ro,action:C,onSubmit:y,relative:g,preventScrollReset:A,viewTransition:M,...B},U)=>{let k=$b(),X=qb(C,{relative:g}),G=b.toLowerCase()==="get"?"get":"post",V=typeof C=="string"&&Pp.test(C),H=Z=>{if(y&&y(Z),Z.defaultPrevented)return;Z.preventDefault();let le=Z.nativeEvent.submitter,K=le?.getAttribute("formmethod")||b;k(le||Z.currentTarget,{fetcherKey:u,method:K,navigate:s,replace:f,state:p,relative:g,preventScrollReset:A,viewTransition:M})};return O.createElement("form",{ref:U,method:G,action:X,onSubmit:c?y:H,...B,"data-discover":!V&&l==="render"?"true":void 0})});Rb.displayName="Form";function Ob(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ip(l){let u=O.useContext(bl);return Me(u,Ob(l)),u}function Mb(l,{target:u,replace:s,state:c,preventScrollReset:f,relative:p,viewTransition:b}={}){let C=Xp(),y=ja(),g=Ei(l,{relative:p});return O.useCallback(A=>{if(cb(A,u)){A.preventDefault();let M=s!==void 0?s:wi(y)===wi(g);C(l,{replace:M,state:c,preventScrollReset:f,relative:p,viewTransition:b})}},[y,C,g,s,c,u,l,f,p,b])}var Db=0,_b=()=>`__${String(++Db)}__`;function $b(){let{router:l}=Ip("useSubmit"),{basename:u}=O.useContext(Qt),s=P2();return O.useCallback(async(c,f={})=>{let{action:p,method:b,encType:C,formData:y,body:g}=fb(c,u);if(f.navigate===!1){let A=f.fetcherKey||_b();await l.fetch(A,s,f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||b,formEncType:f.encType||C,flushSync:f.flushSync})}else await l.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:g,formMethod:f.method||b,formEncType:f.encType||C,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,u,s])}function qb(l,{relative:u}={}){let{basename:s}=O.useContext(Qt),c=O.useContext(Pt);Me(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...Ei(l||".",{relative:u})},b=ja();if(l==null){p.search=b.search;let C=new URLSearchParams(p.search),y=C.getAll("index");if(y.some(A=>A==="")){C.delete("index"),y.filter(M=>M).forEach(M=>C.append("index",M));let A=C.toString();p.search=A?`?${A}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:xa([s,p.pathname])),wi(p)}function Nb(l,{relative:u}={}){let s=O.useContext(Lp);Me(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Ip("useViewTransitionState"),f=Ei(l,{relative:u});if(!s.isTransitioning)return!1;let p=Sa(s.currentLocation.pathname,c)||s.currentLocation.pathname,b=Sa(s.nextLocation.pathname,c)||s.nextLocation.pathname;return ho(f.pathname,b)!=null||ho(f.pathname,p)!=null}const Bb=()=>{const[l,u]=O.useState(!1),[s,c]=O.useState(!1),f=()=>c(!1);return O.useEffect(()=>{const p=()=>{u(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),o.jsx(u2,{$isScrolled:l,children:o.jsxs(c2,{children:[o.jsx(s2,{href:"/AbaCorretora",children:o.jsx("img",{src:m2,alt:"Logo",width:150,height:"auto"})}),o.jsx(f2,{onClick:()=>c(!s),"aria-label":"Menu",children:"☰"}),o.jsxs(d2,{$isOpen:s,children:[o.jsx(pn,{children:o.jsx(st,{className:"navLink",to:"/AbaCorretora",onClick:f,children:"HOME"})}),o.jsx(pn,{children:o.jsx(st,{className:"navLink",to:"/seguros",onClick:f,children:"SEGUROS"})}),o.jsx(pn,{children:o.jsx(st,{className:"navLink",to:"/consorcios",onClick:f,children:"CONSÓRCIOS"})}),o.jsx(pn,{children:o.jsx(st,{className:"navLink",to:"/saude",onClick:f,children:"SAÚDE"})}),o.jsx(pn,{children:o.jsx(st,{className:"navLink",to:"/contato",onClick:f,children:"CONTATO"})}),o.jsx(pn,{children:o.jsx(st,{className:"navLink",to:"/contrateAgora",onClick:f,children:"CONTRATE AGORA"})}),o.jsx(pn,{children:o.jsx(st,{className:"navLink",to:"/corretoras",onClick:f})})]})]})})},Ub=j.footer`
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
`,Qr=j.div`
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
`,Vr=j.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: ${h.colors.primary};
`,ze=j.a`
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
`,Yb=j.img`
  width: 30%; 
  height: auto; 
`;var e0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lp=Ye.createContext&&Ye.createContext(e0),Lb=["attr","size","title"];function Qb(l,u){if(l==null)return{};var s=Vb(l,u),c,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(f=0;f<p.length;f++)c=p[f],!(u.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(s[c]=l[c])}return s}function Vb(l,u){if(l==null)return{};var s={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(u.indexOf(c)>=0)continue;s[c]=l[c]}return s}function po(){return po=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=s[c])}return l},po.apply(this,arguments)}function ip(l,u){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);u&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,c)}return s}function go(l){for(var u=1;u<arguments.length;u++){var s=arguments[u]!=null?arguments[u]:{};u%2?ip(Object(s),!0).forEach(function(c){Xb(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):ip(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function Xb(l,u,s){return u=Zb(u),u in l?Object.defineProperty(l,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[u]=s,l}function Zb(l){var u=Kb(l,"string");return typeof u=="symbol"?u:u+""}function Kb(l,u){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var c=s.call(l,u);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(l)}function t0(l){return l&&l.map((u,s)=>Ye.createElement(u.tag,go({key:s},u.attr),t0(u.child)))}function Pe(l){return u=>Ye.createElement(Jb,po({attr:go({},l.attr)},u),t0(l.child))}function Jb(l){var u=s=>{var{attr:c,size:f,title:p}=l,b=Qb(l,Lb),C=f||s.size||"1em",y;return s.className&&(y=s.className),l.className&&(y=(y?y+" ":"")+l.className),Ye.createElement("svg",po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,b,{className:y,style:go(go({color:l.color||s.color},s.style),l.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),p&&Ye.createElement("title",null,p),l.children)};return lp!==void 0?Ye.createElement(lp.Consumer,null,s=>u(s)):u(e0)}function Wb(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(l)}function Fb(l){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function a0(l){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(l)}function Pb(l){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}function Ib(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(l)}function ey(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(l)}function ty(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function ay(l){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"},child:[]}]})(l)}function ny(l){return Pe({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}function ly(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(l)}function iy(l){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"},child:[]}]})(l)}function ry(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(l)}function oy(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(l)}function uy(l){return Pe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"},child:[]}]})(l)}const cy="/AbaCorretora/assets/LOGO-ABA-DiJw_GYy.png",sy=()=>o.jsxs(Ub,{children:[o.jsxs(Hb,{children:[o.jsxs(Qr,{children:[o.jsx(Vr,{children:"Seguros"}),o.jsx(ze,{children:"Automóvel"}),o.jsx(ze,{children:"Bicicleta"}),o.jsx(ze,{children:"Condomínio"}),o.jsx(ze,{children:"Empresarial"}),o.jsx(ze,{children:"Equipamentos Portáteis"}),o.jsx(ze,{children:"Eventos"}),o.jsx(ze,{children:"Máquinas"}),o.jsx(ze,{children:"Residência"}),o.jsx(ze,{children:"Responsabilidade Civil"}),o.jsx(ze,{children:"Viagem "}),o.jsx(ze,{children:"Vida"})]}),o.jsxs(Qr,{children:[o.jsx(Vr,{children:"Demais Serviços"}),o.jsx(ze,{children:"Consórcio"}),o.jsx(ze,{children:"Empréstimo"}),o.jsx(ze,{children:"Financiamento"}),o.jsx(ze,{children:"Capitalização"}),o.jsx(ze,{children:"Plano de Saúde"}),o.jsx(ze,{children:"Plano Odontológico"}),o.jsx(ze,{children:"Serviços"}),o.jsx(ze,{children:"Carro por Assinatura"}),o.jsx(ze,{children:"Celular por Assinatura"}),o.jsx(ze,{children:"PetLove"})]}),o.jsxs(Qr,{children:[o.jsx(Vr,{children:"Empresa"}),o.jsx(ze,{as:st,to:"/AbaCorretora",children:"Home"}),o.jsx(ze,{as:st,to:"/seguros",children:"Seguros"}),o.jsx(ze,{as:st,to:"/consorcios",children:"Consórcios"}),o.jsx(ze,{as:st,to:"/saude",children:"Saúde"}),o.jsx(ze,{as:st,to:"/contato",children:"Contato"})]}),o.jsxs(Qr,{children:[o.jsx(Vr,{children:"Nossas Redes Sociais"}),o.jsx(Yb,{src:cy,alt:"Descrição da imagem (ex: Selo de Segurança)"}),o.jsxs(kb,{children:[o.jsx("a",{href:"#","aria-label":"Facebook",children:o.jsx(Wb,{})}),o.jsx("a",{href:"#","aria-label":"Instagram",children:o.jsx(Fb,{})}),o.jsx("a",{href:"#","aria-label":"YouTube",children:o.jsx(Pb,{})})]})]})]}),o.jsxs(Gb,{children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," ABA SEGUROS. Todos os direitos reservados."]}),o.jsx("p",{children:"CNPJ: 57.208.516/0001-43 | SUSEP: 2421619-27"})]})]}),dy=j.a`
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
`,fy="5511945411551",my=()=>{const l=`https://wa.me/${fy}`;return o.jsx(dy,{href:l,target:"_blank",rel:"noreferrer","aria-label":"Fale conosco no WhatsApp",children:o.jsx(a0,{})})},hy=j.section`
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
`;const py=j.div`
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
`,gy=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,vy=j.div`
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
`,by=j.div`
  flex: 0 0 32%;
  scroll-snap-align: start;

  @media (max-width: ${h.breakpoints.tablet}) {
    flex-basis: 50%;
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-basis: 90%;
  }
`,yy=j.div`
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
`,xy=j.div`
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
`,Sy=j.section`
  background: ${h.colors.white};
  padding: 7rem 0 8rem 0;
  position: relative;
  overflow: hidden;
    

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,jy=j.div`
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
`,wy=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    align-items: center;
  }
`,Cy=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,Ey=j.p`
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
`,Ty=j.div`
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
`,Oy=j.div`
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
`,My=j.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,Dy=j.ol`
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
`,_y=j.section`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  padding: 2rem 0;
`,$y=j.div`
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
`,Ny=j.div`
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
`,Uy=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Hy=j.div`
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
`;const at=j.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: .6rem;
  text-align: center;
  color: #001f3D;

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,nt=j.p`
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
`,ky=j.section`
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
`,Gy=j.div`
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
`,Ly=j.div`
  max-height: ${({isOpen:l})=>l?"500px":"0"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: ${({isOpen:l})=>l?"0 0 1.5rem":"0"};
  opacity: ${({isOpen:l})=>l?"1":"0"};
  line-height: 1.6;
  color: ${h.colors.mediumGray};
`;function Qy(l){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(l)}function Vy(l){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(l)}const Xy=()=>{const[l,u]=O.useState(null),s=[{question:"Como faço para contratar um seguro?",answer:"Você pode contratar diretamente pelo nosso site ou através do WhatsApp. O processo é rápido e simples."},{question:"Quanto tempo leva para aprovar uma apólice?",answer:"O prazo legal para aprovação de uma apolice é de 15 dias, conforme regulamentação da SUSEP. No entanto, algumas seguradoras podem ter um processo mais rápido."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Não tem taxa administrativa em caso de cancelamento."},{question:"Como faço para acionar meu seguro?",answer:o.jsxs(o.Fragment,{children:["Você pode entrar em contato direto com a companhia através da nossa"," ",o.jsx(st,{className:"navLink",to:"/corretoras",children:"página de contatos"})," ","ou através do nosso "," ",o.jsx("a",{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",className:"navLink",children:"canal de atendimento ao segurado via WhatsApp"})," ","e nossa equipe irá guia-lo em todo o processo."]})},{question:"Quais documentos preciso para contratar?",answer:"Depende do tipo de seguro. Para seguros de automóvel, por exemplo, precisamos da CNH e documento do veículo. Nossa equipe informará todos os documentos necessários durante a contratação."}],c=f=>{u(l===f?null:f)};return o.jsxs(ky,{id:"faq",children:[o.jsxs(at,{children:["Perguntas ",o.jsx("span",{children:"Frequentes"})]}),o.jsx(nt,{children:"Tire suas dúvidas sobre nossos produtos e serviços"}),o.jsx("div",{className:"faq-list",children:s.map((f,p)=>o.jsxs(Gy,{isOpen:l===p,children:[o.jsxs(Yy,{onClick:()=>c(p),children:[f.question,l===p?o.jsx(Qy,{}):o.jsx(Vy,{})]}),o.jsx(Ly,{isOpen:l===p,children:f.answer})]},p))})]})},_s=j.section`
  padding: 5rem 0;
  background-color: ${h.colors.lightGray};
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Zy=r2`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,$s=j.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 2rem;
`,qs=j.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: nowrap;
  width: max-content;
  animation: ${Zy} 20s linear infinite;

  // Pause on hover (desktop)
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation-play-state: paused;
    }
  }
`,Ns=j.div`
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
`,vo="/AbaCorretora/assets/Porto-30iDzEz_.webp",bs="/AbaCorretora/assets/suhai-BGSD2-ff.webp",n0="/AbaCorretora/assets/bradesco-seguros-CU0YlWGC.webp",l0="/AbaCorretora/assets/akad-WygRT6HJ.webp",i0="/AbaCorretora/assets/allianz-AD1QpejW.webp",r0="/AbaCorretora/assets/azul-seguros-Dkd7YuIr.webp",Ky="/AbaCorretora/assets/hdi-BSlu-vdy.webp",o0="/AbaCorretora/assets/itau-CA2YPp_k.webp",Jy="/AbaCorretora/assets/liberty-CYdUqwAU.webp",u0="/AbaCorretora/assets/mapfre-BfLKiNQi.webp",Wy="/AbaCorretora/assets/mitsui-DPVuNnp1.webp",c0="/AbaCorretora/assets/pier-C6X-gZNf.webp",s0="/AbaCorretora/assets/tokio-PWOAQajT.webp",d0="/AbaCorretora/assets/zurich-Bl3pizn0.webp",f0="/AbaCorretora/assets/metlife-CAXA8Mmt.webp",m0="/AbaCorretora/assets/unimed-K0Q_FeZr.webp",h0="/AbaCorretora/assets/sulamerica-bAr1DSkW.webp",p0="/AbaCorretora/assets/portosaude-D-kX7kVD.webp",g0="/AbaCorretora/assets/amil-Ds0I0K89.webp",v0="/AbaCorretora/assets/bradesco-saude-CTYd8tOi.webp",b0="/AbaCorretora/assets/hapvida-fH7cADKa.webp",y0="/AbaCorretora/assets/sao-cristovao-DIepHmhN.webp",Fy="/AbaCorretora/assets/sao-miguel-saude-C4GY8ihI.webp",x0="/AbaCorretora/assets/alice-BgrSNUpT.webp",Py="/AbaCorretora/assets/allcare-BA9YMYeD.webp",S0="/AbaCorretora/assets/medsenior-DBUjLZq7.webp",j0="/AbaCorretora/assets/preventsenior-BTfljb9F.webp",Iy="/AbaCorretora/assets/omint-B64DAi7n.webp",ex=()=>{const l=[{name:"Porto Seguro",logo:vo},{name:"Unimed",logo:m0},{name:"Suhai",logo:bs},{name:"Metlife",logo:f0},{name:"Bradesco",logo:n0},{name:"Sul America",logo:h0},{name:"Akad",logo:l0},{name:"Porto Saude",logo:p0},{name:"Allianz",logo:i0},{name:"Amil",logo:g0},{name:"Porto Seguro",logo:vo},{name:"Bradesco Saude",logo:v0},{name:"Azul",logo:r0},{name:"Hapvida",logo:b0},{name:"Itau",logo:o0},{name:"Sao Cristovao",logo:y0},{name:"Mapfre",logo:u0},{name:"Alice",logo:x0},{name:"Pier",logo:c0},{name:"Prevent Senior",logo:j0},{name:"Tokio",logo:s0},{name:"Medsenior",logo:S0},{name:"Zurich",logo:d0}],u=[...l,...l];return o.jsx(_s,{children:o.jsx($s,{children:o.jsx(qs,{children:u.map((s,c)=>o.jsx(Ns,{children:o.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},tx=()=>{const l=[{name:"Porto Seguro",logo:vo},{name:"Suhai",logo:bs},{name:"Bradesco",logo:n0},{name:"Akad",logo:l0},{name:"Allianz",logo:i0},{name:"Porto Seguro",logo:vo},{name:"Suhai",logo:bs},{name:"Azul",logo:r0},{name:"HDI",logo:Ky},{name:"Itau",logo:o0},{name:"Liberty",logo:Jy},{name:"Mapfre",logo:u0},{name:"Mitsui",logo:Wy},{name:"Pier",logo:c0},{name:"Tokio",logo:s0},{name:"Zurich",logo:d0}],u=[...l,...l];return o.jsx(_s,{children:o.jsx($s,{children:o.jsx(qs,{children:u.map((s,c)=>o.jsx(Ns,{children:o.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},ax=()=>{const l=[{name:"Metlife",logo:f0},{name:"Unimed",logo:m0},{name:"Sul America",logo:h0},{name:"Porto Saude",logo:p0},{name:"Amil",logo:g0},{name:"Bradesco Saude",logo:v0},{name:"Hapvida",logo:b0},{name:"Sao Cristovao",logo:y0},{name:"Sao Miguel",logo:Fy},{name:"Alice",logo:x0},{name:"Allcare",logo:Py},{name:"Medsenior",logo:S0},{name:"Prevent Senior",logo:j0},{name:"Omint",logo:Iy}],u=[...l,...l];return o.jsx(_s,{children:o.jsx($s,{children:o.jsx(qs,{children:u.map((s,c)=>o.jsx(Ns,{children:o.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},nx=j.section`
  background-color: ${h.colors.dark};
  padding: 5rem 0;
  color: ${h.colors.white};
  overflow: hidden; /* Adicionado para conter o carrossel */
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,lx=j.div`
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
`,ix=j.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`,rx=j.div`
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
`,ox=j.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,ux=j.div`
  width: 100%;
  overflow: hidden;
`,cx=j.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`,sx=j.div`
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
`,dx=j.div`
  flex: 0 0 100%; // Faz cada slide ocupar 100% da viewport
  scroll-snap-align: start;
  min-width: 100%;
`,fx=j.div`
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
`,mx="/AbaCorretora/assets/jucelino-Bp9UFJA2.png",hx="/AbaCorretora/assets/tamires-vPXPx5Bg.png",px="/AbaCorretora/assets/thiago-DZ2v8mKy.png",gx="/AbaCorretora/assets/camila-CdxkK5qM.png",vx="/AbaCorretora/assets/vitor-C0e6Ru8k.png",bx=[{id:1,quote:"Aba Corretora, cuida da frota de veículos da minha Empresa com muita atenção e cuidado, toda equipe é muito atenciosa e o atendimento rápido e eficiênte, eu super recomendo.",name:"Jucelino Mendes",title:"Cliente há 2 anos",image:mx},{id:2,quote:"Sou muito satisfeita com meu seguro, a corretora Mariana é super competente, atenciosa, tirou todas minhas dúvidas quando fechei com eles. Obtive o melhor preço, eu amo e indico muito!!",name:"Tamires Elley",title:"Cliente há 1 ano",image:hx},{id:3,quote:"Profissional incrível! Desde o primeiro contato, me senti super bem direcionado no processo do meu seguro. Ela foi clara, prestativa e mostrou total domínio do que fazia. Estou com ela até hoje, porque confio e recomendo de verdade!",name:"Thiago Bastos",title:"Cliente há 3 anos",image:px},{id:4,quote:"Mariana é uma corretora excelente: muito atenciosa, detalhista, com atendimento cordial e vasto conhecimento do mercado segurador. Sempre nos apresenta as melhores opções para proteger a vida, os bens, os serviços e também em soluções financeiras. ",name:"Camila Barbosa",title:"Cliente há 4 anos",image:gx},{id:5,quote:"Eu tenho seguro com a Aba e tenho total confiança que meu veículo e minha residência estão protegidos !! Sempre que preciso tenho um ótimo atendimento.",name:"Vitor Carneiro",title:"Cliente há 4 anos",image:vx}],yx=()=>{const l=O.useRef(null),u=s=>{if(!l.current)return;const c=l.current.querySelector(":scope > *");if(!c)return;const f=c.getBoundingClientRect().width,p=window.getComputedStyle(l.current),b=parseFloat(p.gap)||16,C=s==="next"?f+b:-(f+b);l.current.scrollBy({left:C,behavior:"smooth"})};return o.jsx(nx,{id:"testimonials",children:o.jsxs(lx,{children:[o.jsxs("div",{children:[o.jsx(ox,{children:"O que nossos clientes dizem"}),o.jsx(ix,{children:"Mais de 400 clientes confiam em nossos serviços de proteção. Sua satisfação é nossa maior recompensa."})]}),o.jsxs(ux,{children:[o.jsx(cx,{children:o.jsx(sx,{ref:l,children:bx.map(s=>o.jsx(dx,{children:o.jsxs(rx,{children:[o.jsx("div",{className:"quote",children:'"'}),o.jsx("p",{className:"testimonial",children:s.quote}),o.jsxs("div",{className:"author",children:[o.jsx("img",{src:s.image,alt:`Cliente ${s.name}`}),o.jsxs("div",{children:[o.jsx("h4",{children:s.name}),o.jsx("span",{children:s.title})]})]})]})},s.id))})}),o.jsxs(fx,{children:[o.jsx(up,{"aria-label":"Anterior",onClick:()=>u("prev"),children:"◀"}),o.jsx(up,{"aria-label":"Próximo",onClick:()=>u("next"),children:"▶"})]})]})]})})},xx="/AbaCorretora/assets/img-home-CAVUu0KH.webp",Gt="/AbaCorretora/assets/automovel-v7wycPm7.webp",Sx="/AbaCorretora/assets/residencial-BkyGMxCT.webp",jx="/AbaCorretora/assets/saude-D9vBannL.webp",Ax="/AbaCorretora/assets/financiamento-egU71Zvi.webp",wx="/AbaCorretora/assets/viagem-GBNKwrvT.webp",Cx="/AbaCorretora/assets/pet-Bbrdhl-x.webp",Ex=()=>{const l=[{icon:Gt,title:"Seguros",description:"Seguros que protegem seus patrimônios e vida: automóvel, equipamentos, empresa, residência, viagem, vida e muito mais."},{icon:Sx,title:"Consórcio",description:"O consórcio é o caminho ideal para quem busca comprar um bem com parcelas que cabem no bolso e sem pagar juros."},{icon:jx,title:"Plano de Saúde",description:"Encontre o plano de saúde (individual, familiar ou empresarial) com a cobertura ideal para suas necessidades e seu orçamento."},{icon:Ax,title:"Financiamento",description:"O financiamento ideal para suas conquistas. Taxas competitivas e planos flexíveis para você tirar seus projetos do papel."},{icon:wx,title:"Empréstimo",description:"O empréstimo que você precisa está aqui. Dinheiro na mão para seus objetivos e sonhos."},{icon:Cx,title:"Petlove Saúde",description:"Planos de saúde para seu animal de estimação. Cuide bem do seu Pet."}];return o.jsxs(o.Fragment,{children:[o.jsxs(Sy,{children:[o.jsx(jy,{children:o.jsxs(Ay,{children:[o.jsxs(wy,{children:[o.jsx(Cy,{children:"Tranquilidade para sua família, segurança para sua empresa."}),o.jsx(Ey,{children:"Consultoria especializada em seguros, planos de saúde, odontológico e consórcios. As melhores soluções do mercado para você e sua empresa."}),o.jsx(Ic,{as:"a",href:"https://wa.me/5511945411551",children:"Contrate Agora"})]}),o.jsx(zy,{src:xx,alt:"imagem hero"})]})}),o.jsx(Ty,{})]}),o.jsxs(hy,{id:"products",children:[o.jsx(at,{children:"Nossos Planos"}),o.jsx(nt,{children:"Opções que cabem no seu orçamento"}),(()=>{const u=O.useRef(null),s=f=>{if(!u.current)return;const p=u.current.parentElement,b=u.current.querySelector(":scope > *"),C=b?b.getBoundingClientRect().width+16:p.clientWidth,y=f==="next"?C:-C;u.current.scrollBy({left:y,behavior:"smooth"})},c=f=>{f.key==="ArrowRight"&&s("next"),f.key==="ArrowLeft"&&s("prev")};return o.jsxs(o.Fragment,{children:[o.jsx(gy,{role:"region","aria-label":"Carrossel de produtos",children:o.jsx(vy,{ref:u,tabIndex:0,onKeyDown:c,children:l.map((f,p)=>o.jsx(by,{"aria-roledescription":"slide",children:o.jsxs(py,{children:[o.jsx(xy,{children:o.jsx("img",{src:f.icon,alt:f.title})}),o.jsx("h3",{children:f.title}),o.jsx("p",{children:f.description}),o.jsxs("div",{className:"saiba-mais-wrapper",children:[o.jsx("a",{href:"https://wa.me/5511945411551",children:"Saiba mais "})," "]})]})},p))})}),o.jsxs(yy,{children:[o.jsx(rp,{"aria-label":"Anterior",onClick:()=>s("prev"),children:"◀"}),o.jsx(rp,{"aria-label":"Próximo",onClick:()=>s("next"),children:"▶"})]})]})})()]}),o.jsxs(Ry,{children:[o.jsx(at,{children:"Por que escolher a ABA Corretora?"}),o.jsx(nt,{children:"Atendimento consultivo, múltiplas seguradoras parceiras e soluções sob medida para você e sua empresa."}),o.jsxs(Oy,{children:[o.jsx(Pc,{children:o.jsxs("div",{children:[o.jsx("h4",{children:"Assessoria Completa"}),o.jsx("p",{children:"Do orçamento à emissão da apólice e suporte em sinistros."})]})}),o.jsx(Pc,{children:o.jsxs("div",{children:[o.jsx("h4",{children:"Economia e Comparação"}),o.jsx("p",{children:"Cotamos nas principais seguradoras para o melhor custo-benefício."})]})}),o.jsx(Pc,{children:o.jsxs("div",{children:[o.jsx("h4",{children:"Atendimento Humanizado"}),o.jsx("p",{children:"Equipe próxima, rápida e disponível nos principais canais."})]})})]})]}),o.jsxs(My,{children:[o.jsx(at,{children:"Como funciona"}),o.jsx(nt,{children:"4 passos simples para contratar seu seguro com tranquilidade."}),o.jsxs(Dy,{children:[o.jsxs(Xr,{children:[o.jsx("h4",{children:"1. Entendimento"}),o.jsx("p",{children:"Coletamos suas necessidades e perfil para indicar coberturas ideais."})]}),o.jsxs(Xr,{children:[o.jsx("h4",{children:"2. Cotações"}),o.jsx("p",{children:"Comparamos propostas entre seguradoras parceiras."})]}),o.jsxs(Xr,{children:[o.jsx("h4",{children:"3. Personalização"}),o.jsx("p",{children:"Ajustamos franquias e coberturas conforme seu orçamento."})]}),o.jsxs(Xr,{children:[o.jsx("h4",{children:"4. Contratação"}),o.jsx("p",{children:"Documentação rápida e acompanhamento pós-venda."})]})]})]}),o.jsx(_y,{children:o.jsxs($y,{children:[o.jsxs(Zr,{children:[o.jsx("strong",{children:"8+"}),o.jsx("span",{children:"Anos de experiência"})]}),o.jsxs(Zr,{children:[o.jsx("strong",{children:"600+"}),o.jsx("span",{children:"Clientes atendidos"})]}),o.jsxs(Zr,{children:[o.jsx("strong",{children:"15+"}),o.jsx("span",{children:"Seguradoras parceiras"})]}),o.jsxs(Zr,{children:[o.jsx("strong",{children:"24h"}),o.jsx("span",{children:"Suporte em sinistros"})]})]})}),o.jsxs(Uy,{children:[o.jsx(at,{children:"Mais soluções para você"}),o.jsx(nt,{children:"Além dos seguros, conte com nossas soluções em planos de saúde e consórcios para ampliar suas possibilidades."}),o.jsxs(Hy,{children:[o.jsxs(op,{children:[o.jsx("h3",{children:"Planos de Saúde"}),o.jsx("p",{children:"Cuidar da sua saúde e da sua família é prioridade. Oferecemos planos de saúde individuais, familiares e empresariais, com ampla rede de atendimento e condições acessíveis."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Atendimento nacional com hospitais, clínicas e laboratórios de referência."}),o.jsx("li",{children:"Consultas e exames com agendamento facilitado."}),o.jsx("li",{children:"Planos com ou sem coparticipação"}),o.jsx("li",{children:"Isenção de carência mediante análise"})]})]}),o.jsxs(op,{children:[o.jsx("h3",{children:"Consórcios"}),o.jsx("p",{children:"Planeje suas conquistas com segurança e parcelas que cabem no seu bolso."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consórcio de automóveis"}),o.jsx("li",{children:"Consórcio imobiliário"}),o.jsx("li",{children:"Administração confiável e suporte em todas as etapas"})]})]})]})]}),o.jsx(qy,{children:o.jsxs(Ny,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Fale com um especialista"}),o.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),o.jsxs(By,{children:[o.jsx(Ic,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"}),o.jsx(Ic,{as:"a",href:"#faq",style:{backgroundColor:"#fff",color:"#001f3D"},children:"Tirar dúvidas"})]})]})}),o.jsx(ex,{}),o.jsx(yx,{}),o.jsx(Xy,{})]})},zx=j.section`
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
`,Tx=j.div`
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
`,rl=j.article`
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
`,ol=j.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  background-color: #e0e0e0;
`,ul=j.div`
  background: ${h.colors.white};
  border-left: 4px solid ${h.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${h.colors.mediumGray};
  margin-top: 1rem;
`,Rx=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,Ox=j.div`
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
`,Dx=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,_x=j.h1`
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
`;const $x=j.img`
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
`,qx=j.div`
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
`,cl=j.button`
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
    background-color: ${h.colors.primaryDark};
  }
`,Nx=j.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,Bx=j.ol`
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
`,Ux=j.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,Hx=j.div`
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
`,kx=j.div`
  display: flex;
  flex-shrink: 0;
  
`,Gx=j.button`
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
`,Yx=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Lx=j.div`
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
`,Qx=j.div`
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
`;const Vx=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Xx=j.div`
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
`;function Zx(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"},child:[]}]})(l)}function Kx(l){return Pe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"},child:[]},{tag:"circle",attr:{cx:"9",cy:"13",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"13",r:"1"},child:[]},{tag:"path",attr:{d:"M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"},child:[]}]})(l)}const Jx="/AbaCorretora/assets/img-seguro-DlWdeZ7-.webp",A0="/AbaCorretora/assets/seguro-auto-D6qreSmg.webp",w0="/AbaCorretora/assets/seguro-residencial-Btqe_yzn.webp",Wx="/AbaCorretora/assets/seguro-equipamentos-CPBCTzMW.webp",Fx="/AbaCorretora/assets/seguro-bike-CuLlbGiL.webp",C0="/AbaCorretora/assets/seguro-vida-DtiI4z54.webp",E0="/AbaCorretora/assets/seguro-viagem-CuWjTEg6.webp",Px=()=>{const l=[{icon:o.jsx(ry,{}),title:"Proteção Completa",description:"Coberturas abrangentes para todas as situações que você possa imaginar."},{icon:o.jsx(uy,{}),title:"Preços Acessíveis",description:"Planos que cabem no seu bolso sem abrir mão da qualidade."},{icon:o.jsx(Zx,{}),title:"Rápida Indenização",description:"Processos ágeis para que você receba o que é seu o mais rápido possível."},{icon:o.jsx(Kx,{}),title:"Suporte 24/7",description:"Atendimento humanizado disponível a qualquer hora, todos os dias."}],u=[{question:"Como funciona a franquia do seguro?",answer:"A franquia é a participação do segurado nos prejuízos em caso de sinistro. Se o custo do reparo for menor que a franquia, o segurado arca com o valor. Se for maior, a seguradora cobre o excedente."},{question:"O que é um sinistro e como devo proceder?",answer:"Sinistro é qualquer evento previsto na apólice que cause dano ou prejuízo. Ao ocorrer, você deve entrar em contato com a seguradora o mais rápido possível para receber as orientações de como acionar sua cobertura."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Sim, a maioria dos seguros pode ser cancelada a qualquer momento. A seguradora fará um cálculo para devolver parte do valor pago, proporcional ao tempo que ainda resta de cobertura."},{question:"Qual a diferença entre seguro e assistência 24h?",answer:"O seguro cobre os prejuízos financeiros de um sinistro (roubo, colisão, etc.), enquanto a assistência 24h oferece serviços emergenciais como guincho, chaveiro e eletricista, garantindo suporte no dia a dia."}];return o.jsxs(o.Fragment,{children:[o.jsxs(Rx,{children:[o.jsx(Ox,{children:o.jsxs(Mx,{children:[o.jsx(Dx,{children:o.jsx(_x,{children:"Proteção completa para manter você e sua família seguros."})}),o.jsx($x,{src:Jx,alt:"imagem hero"})]})}),o.jsx(qx,{})]}),o.jsx(zx,{children:o.jsxs(es,{children:[o.jsx(at,{children:"Nossos Seguros"}),o.jsx(nt,{children:"Proteção para todas as fases da sua vida. Encontre a solução ideal para veículos, residência, viagens, vida, equipamentos e muito mais."}),o.jsxs(Tx,{children:[o.jsxs(rl,{children:[o.jsx(ol,{src:A0,alt:"Ícone representando seguro de automóvel"}),o.jsx("h3",{children:"Seguro Automóvel"}),o.jsx("p",{children:"Proteção contra colisão, roubo, furto, eventos naturais e terceiros."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Guincho 24h, carro reserva, taxi, hospedagem e etc"}),o.jsx("li",{children:"Cobertura para vidros, faróis, retrovisores "}),o.jsx("li",{children:"Assistência completa a terceiros"})]}),o.jsx(ul,{children:"Indicado para quem busca tranquilidade no dia a dia e proteção patrimonial."}),o.jsx(cl,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),o.jsxs(rl,{children:[o.jsx(ol,{src:w0,alt:"Ícone representando seguro residencial"}),o.jsx("h3",{children:"Seguro Residencial"}),o.jsx("p",{children:"Coberturas essenciais para sua casa: incêndio, vendaval, roubo e danos elétricos."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Assistência 24h (chaveiro, encanador, eletricista e etc)"}),o.jsx("li",{children:"Responsabilidade civil familiar"}),o.jsx("li",{children:"Proteção para eletroeletrônicos"})]}),o.jsx(ul,{children:"Excelente custo-benefício para proteger seu patrimônio e rotina."}),o.jsx(cl,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),o.jsxs(rl,{children:[o.jsx(ol,{src:E0,alt:"Ícone representando seguro de viagem"}),o.jsx("h3",{children:"Seguro Viagem"}),o.jsx("p",{children:"Viaje pelo mundo com a certeza de que imprevistos médicos e logísticos não vão estragar sua experiência."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Despesas Médicas e Hospitalares"}),o.jsx("li",{children:"Cancelamento de viagem e extravio de bagagem"}),o.jsx("li",{children:"Assistência internacional 24h "})]}),o.jsx(ul,{children:"Essencial para viagens internacionais e para garantir sua paz de espírito."}),o.jsx(cl,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),o.jsxs(rl,{children:[o.jsx(ol,{src:C0,alt:"Ícone representando seguro de vida"}),o.jsx("h3",{children:"Seguro de Vida"}),o.jsx("p",{children:"Garanta a segurança financeira de quem você ama em momentos delicados, protegendo o futuro da sua família."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Cobertura em caso de falecimento"}),o.jsx("li",{children:"Indenização por invalidez (total ou parcial)"}),o.jsx("li",{children:"Assistência para doenças graves e acidentes"})]}),o.jsx(ul,{children:"Essencial para proteger financeiramente sua família e entes queridos."}),o.jsx(cl,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),o.jsxs(rl,{children:[o.jsx(ol,{src:Wx,alt:"Ícone representando seguro de equipamentos"}),o.jsx("h3",{children:"Equipamentos Portáteis"}),o.jsx("p",{children:"Proteja seus eletrônicos como notebook, smartphone e câmera contra danos, roubo e furto."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Proteção contra roubo e furto"}),o.jsx("li",{children:"Cobertura para danos físicos acidentais (quedas)"}),o.jsx("li",{children:"Danos elétricos e por líquidos"})]}),o.jsx(ul,{children:"Perfeito para profissionais e estudantes que dependem de seus equipamentos."}),o.jsx(cl,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),o.jsxs(rl,{children:[o.jsx(ol,{src:Fx,alt:"Ícone representando seguro de bicicleta"}),o.jsx("h3",{children:"Seguro de Bicicleta"}),o.jsx("p",{children:"Pedale com tranquilidade sabendo que sua bike está protegida contra roubo, furto e acidentes."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Cobertura contra roubo e furto qualificado"}),o.jsx("li",{children:"Danos acidentais e quebra"}),o.jsx("li",{children:"Assistência e transporte em caso de acidente"})]}),o.jsx(ul,{children:"Ideal para ciclistas urbanos e atletas que querem garantir a segurança do seu investimento."}),o.jsx(cl,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]})]})]})}),o.jsx(Yx,{children:o.jsxs(es,{children:[o.jsx(at,{children:"Nossos Diferenciais"}),o.jsx(nt,{children:"Oferecemos as melhores soluções em proteção para você e sua família."}),o.jsx(Lx,{children:l.map((s,c)=>o.jsxs(Qx,{children:[o.jsx("h3",{children:s.title}),o.jsx("p",{children:s.description})]},c))})]})}),o.jsxs(Nx,{children:[o.jsx(at,{children:"Como Contratar?"}),o.jsx(nt,{children:"Contratar seu seguro é simples, rápido e totalmente digital."}),o.jsxs(Bx,{children:[o.jsxs(Kr,{children:[o.jsx("h4",{children:"Simulação Online"}),o.jsx("p",{children:"Escolha o seguro desejado e preencha algumas informações para receber sua cotação."})]}),o.jsxs(Kr,{children:[o.jsx("h4",{children:"Análise de Perfil"}),o.jsx("p",{children:"Nossos especialistas analisam seu perfil para encontrar a melhor cobertura pelo menor preço."})]}),o.jsxs(Kr,{children:[o.jsx("h4",{children:"Emissão da Apólice"}),o.jsx("p",{children:"Após a aprovação, sua apólice é emitida e enviada digitalmente para você."})]}),o.jsxs(Kr,{children:[o.jsx("h4",{children:"Tudo Pronto!"}),o.jsx("p",{children:"Você e seu patrimônio estão protegidos. Conte com nosso suporte sempre que precisar."})]})]})]}),o.jsx(Vx,{children:o.jsxs(es,{children:[o.jsx(at,{children:"Perguntas Frequentes"}),o.jsx(nt,{children:"Ainda tem dúvidas? A gente ajuda você a esclarecer."}),u.map((s,c)=>o.jsxs(Xx,{children:[o.jsx("h4",{children:s.question}),o.jsx("p",{children:s.answer})]},c))]})}),o.jsx(Ux,{children:o.jsxs(Hx,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Fale com um especialista"}),o.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),o.jsx(kx,{children:o.jsx(Gx,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),o.jsx(tx,{})]})},Ix=j.section`
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
`,e4=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,t4=j.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background-color: ${h.colors.lightGray};
`,a4=j.article`
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
`,n4=j.button`
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
`,l4=j.section`
  padding: 4rem 0;
  background: ${h.colors.lightGray};
`,i4=j.div`
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
`,r4=j.section`
  padding: 4rem 0;
  background: ${h.colors.white};
`,o4=j.div`
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
`,u4=j.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,c4=j.div`
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
`,s4=j.div`
  display: flex;
  flex-shrink: 0;
`,d4=j.button`
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
`,f4=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,m4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,h4=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
  text-align: center;
`,p4=j.div``,g4=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,v4=j.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
`,b4=j.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
`,y4="/AbaCorretora/assets/img-consorcio-DvFABkr6.webp",x4="/AbaCorretora/assets/consorcio-imovel-BsMy8Emp.webp",S4="/AbaCorretora/assets/consorcio-automovel-DuhiKWI6.webp",j4="/AbaCorretora/assets/consorcio-servicos-IYxMUqUU.webp",A4=()=>{const l=[{img:x4,title:"Consórcio Imobiliário",description:"A forma mais inteligente de comprar, construir ou reformar seu imóvel sem juros."},{img:S4,title:"Consórcio de Veículos",description:"Planeje a compra do seu carro, moto ou utilitário novo ou seminovo com parcelas que cabem no bolso."},{img:j4,title:"Consórcio de Serviços",description:"Realize seus sonhos como viagens, festas, cirurgias plásticas ou cursos com planejamento e economia."}];return o.jsxs(o.Fragment,{children:[o.jsxs(f4,{children:[o.jsx(m4,{children:o.jsxs(h4,{children:[o.jsx(p4,{children:o.jsx(g4,{children:"Conquiste seus maiores sonhos sem pagar juros."})}),o.jsx(v4,{src:y4,alt:"Família feliz com a conquista da casa própria através de consórcio"})]})}),o.jsx(b4,{})]}),o.jsx(Ix,{children:o.jsxs(ts,{children:[o.jsx(at,{children:"Consórcio: O Planejamento Inteligente"}),o.jsx(nt,{children:"Uma modalidade de compra baseada na união de pessoas que formam uma poupança comum destinada à aquisição de bens ou serviços. Ideal para quem não tem pressa e busca disciplina financeira para atingir grandes objetivos."}),o.jsx(e4,{children:l.map((u,s)=>o.jsxs(a4,{children:[o.jsx(t4,{src:u.img,alt:u.title}),o.jsx("h3",{children:u.title}),o.jsx("p",{children:u.description}),o.jsx(n4,{as:"a",href:"https://wa.me/5511945411551",children:"Simular Agora"})]},s))})]})}),o.jsx(l4,{children:o.jsxs(ts,{children:[o.jsx(at,{children:"Como Funciona na Prática?"}),o.jsx(nt,{children:"O processo é simples e transparente. Veja as 4 etapas principais:"}),o.jsxs(i4,{children:[o.jsxs(Jr,{children:[o.jsx("h4",{children:"1. Formação do Grupo"}),o.jsx("p",{children:"Você adere a um grupo com outras pessoas que têm o mesmo objetivo que você."})]}),o.jsxs(Jr,{children:[o.jsx("h4",{children:"2. Contribuição Mensal"}),o.jsx("p",{children:"Todos os participantes pagam parcelas mensais, que formam o fundo do grupo."})]}),o.jsxs(Jr,{children:[o.jsx("h4",{children:"3. Contemplação"}),o.jsx("p",{children:"Mensalmente, participantes são contemplados por sorteio ou lance para receber o crédito."})]}),o.jsxs(Jr,{children:[o.jsx("h4",{children:"4. Aquisição do Bem"}),o.jsx("p",{children:"Com a carta de crédito em mãos, você tem poder de compra à vista para adquirir seu bem."})]})]})]})}),o.jsx(r4,{children:o.jsxs(ts,{children:[o.jsx(at,{children:"Principais Vantagens"}),o.jsx(nt,{children:"Descubra por que o consórcio é a melhor opção para o seu planejamento."}),o.jsxs(o4,{children:[o.jsxs(as,{children:[o.jsx(ns,{children:o.jsx(iy,{})}),o.jsx("h4",{children:"Sem Juros"}),o.jsx("p",{children:"Você paga apenas uma taxa de administração, que é muito menor que os juros de um financiamento."})]}),o.jsxs(as,{children:[o.jsx(ns,{children:o.jsx(ay,{})}),o.jsx("h4",{children:"Poder de Compra"}),o.jsx("p",{children:"Ao ser contemplado, você recebe o valor integral da carta de crédito para negociar sua compra à vista."})]}),o.jsxs(as,{children:[o.jsx(ns,{children:o.jsx(oy,{})}),o.jsx("h4",{children:"Flexibilidade"}),o.jsx("p",{children:"Utilize o crédito para o bem que desejar dentro da categoria do seu grupo, com total liberdade de escolha."})]})]})]})}),o.jsx(u4,{children:o.jsxs(c4,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Pronto para dar o primeiro passo?"}),o.jsx("p",{children:"Faça uma simulação gratuita e sem compromisso para encontrar o plano perfeito para você."})]}),o.jsx(s4,{children:o.jsx(d4,{as:"a",href:"https://wa.me/5511945411551",children:"Fazer Simulação"})})]})})]})},Wr=j.div`
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
`,va=j.article`
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
`,w4=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,C4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,E4=j.div`
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,z4=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,T4=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align:center;

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
`;const R4=j.img`
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
`,O4=j.div`
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
`,Fr=j.h2`
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

    /* REMOVIDO: .category, pois não se encaixa aqui */
  }

  h3 {
    font-size: 1.5rem; /* Um pouco maior que o BlogCard, mais próximo do ProductCard */
    margin: 1.25rem 1.25rem 0.75rem; /* Ajusta as margens internas do título */
    line-height: 1.4;
    color: ${h.colors.dark};
  }

  p {
    margin: 0 1.25rem 1rem; /* Margens para o parágrafo */
    color: ${h.colors.mediumGray};
    flex-grow: 1; /* Permite que o parágrafo ocupe o espaço restante */
  }

  ul {
    margin: 0 1.25rem 1rem; /* Margens para a lista */
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

  &:hover {
    background-color: ${h.colors.primaryDark};
  }
`,M4=j.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,D4=j.div`
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
`,_4=j.div`
  display: flex;
  flex-shrink: 0;
  
`,$4=j.button`
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
`,q4="/AbaCorretora/assets/img-saude-D4ti4aYu.webp",N4="/AbaCorretora/assets/convenio-medico-DHQi6kuG.webp",B4="/AbaCorretora/assets/convenio-odonto-CKul8QD8.webp",U4="/AbaCorretora/assets/convenio-pet-CKosw--s.webp";function H4(){return o.jsxs(o.Fragment,{children:[o.jsxs(w4,{children:[o.jsx(C4,{children:o.jsxs(E4,{children:[o.jsx(z4,{children:o.jsx(T4,{children:"Planos de saúde com valores que cabem no seu orçamento."})}),o.jsx(R4,{src:q4,alt:"imagem hero"})]})}),o.jsx(O4,{})]}),o.jsxs(Ir,{id:"convenios",children:[o.jsx(Fr,{children:"Planos de Saúde"}),o.jsx(Pr,{children:"Encontre o plano ideal para sua saúde e bem-estar, com cobertura completa para você, sua família e até mesmo seu pet."}),o.jsxs(Wr,{children:[o.jsxs(is,{children:[o.jsx("div",{className:"image-container",children:o.jsx("img",{src:N4,alt:"Família feliz com médico, representando convênio médico",loading:"lazy"})}),o.jsx("h3",{children:"Convênio Médico"}),o.jsx("p",{children:"Cuidado integral para sua saúde. Acesse uma ampla rede credenciada de hospitais, clínicas e laboratórios."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consultas e exames"}),o.jsx("li",{children:"Internações e cirurgias"}),o.jsx("li",{children:"Atendimento de emergência 24h"})]}),o.jsx(ls,{children:"Ideal para quem busca segurança e tranquilidade no acesso a serviços de saúde de qualidade."}),o.jsx("div",{className:"card-button-wrapper",children:o.jsx(rs,{children:"Ver Planos Médicos "})})]}),o.jsxs(is,{children:[o.jsx("div",{className:"image-container",children:o.jsx("img",{src:B4,alt:"Pessoas sorrindo, representando convênio odontológico",loading:"lazy"})}),o.jsx("h3",{children:"Convênio Odontológico"}),o.jsx("p",{children:"Mantenha seu sorriso saudável com cobertura para prevenção, tratamentos e procedimentos essenciais."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consultas e limpezas"}),o.jsx("li",{children:"Tratamentos de cárie e canal"}),o.jsx("li",{children:"Ortodontia (em alguns planos)"})]}),o.jsx(ls,{children:"Perfeito para quem valoriza a saúde bucal e quer evitar gastos inesperados com o dentista."}),o.jsx("div",{className:"card-button-wrapper",children:o.jsx(rs,{children:"Ver Planos Odontológicos "})})]}),o.jsxs(is,{children:[o.jsx("div",{className:"image-container",children:o.jsx("img",{src:U4,alt:"Cão e gato felizes, representando convênio pet",loading:"lazy"})}),o.jsx("h3",{children:"Convênio Pet"}),o.jsx("p",{children:"Cuide da saúde do seu melhor amigo com planos que cobrem consultas, vacinas e procedimentos veterinários."}),o.jsxs("ul",{children:[o.jsx("li",{children:"Consultas e exames de rotina"}),o.jsx("li",{children:"Vacinas e vermifugação"}),o.jsx("li",{children:"Cirurgias e internações (em alguns planos)"})]}),o.jsx(ls,{children:"Essencial para tutores que querem garantir a longevidade e o bem-estar de seus animais de estimação."}),o.jsx("div",{className:"card-button-wrapper",children:o.jsx(rs,{children:"Ver Planos Pet "})})]})]})]}),o.jsxs(Ir,{style:{backgroundColor:"#f9f9f9"},children:[o.jsx(Fr,{children:"Por que ter um Convênio Médico?"}),o.jsx(Pr,{children:"Garanta o acesso rápido e de qualidade a serviços de saúde essenciais para você e sua família, sem preocupações com gastos inesperados."}),o.jsxs(Wr,{children:[o.jsxs(va,{children:[o.jsx("h3",{children:"Acesso Facilitado"}),o.jsx("p",{children:"Com um convênio médico, você e sua família têm acesso a uma ampla rede de médicos, hospitais e laboratórios credenciados, com agendamento facilitado e sem as longas filas do sistema público. Isso garante que você receba o atendimento necessário no momento certo."})]}),o.jsxs(va,{children:[o.jsx("h3",{children:"Economia e Previsibilidade"}),o.jsx("p",{children:"Evite surpresas com os altos custos de consultas, exames, internações e cirurgias particulares. O convênio médico oferece mensalidades fixas, tornando seus gastos com saúde previsíveis e protegendo seu orçamento em caso de emergências ou tratamentos de longo prazo."})]}),o.jsxs(va,{children:[o.jsx("h3",{children:"Cuidado Completo e Preventivo"}),o.jsx("p",{children:"Além do atendimento para doenças e emergências, muitos planos oferecem programas de medicina preventiva, check-ups regulares e acompanhamento para doenças crônicas. Invista na sua saúde e bem-estar com um cuidado abrangente e contínuo."})]})]})]}),o.jsxs(Ir,{children:[o.jsx(Fr,{children:"A Importância do Convênio Odontológico"}),o.jsx(Pr,{children:"Um sorriso saudável é essencial para sua qualidade de vida. Invista em prevenção e tratamentos odontológicos sem pesar no seu bolso."}),o.jsxs(Wr,{children:[o.jsxs(va,{children:[o.jsx("h3",{children:"Prevenção de Doenças"}),o.jsx("p",{children:"Consultas e limpezas regulares são fundamentais para prevenir cáries, gengivite e outras doenças bucais que podem afetar sua saúde geral. O convênio odontológico facilita esse acesso à prevenção."})]}),o.jsxs(va,{children:[o.jsx("h3",{children:"Cobertura para Tratamentos Essenciais"}),o.jsx("p",{children:"De obturações a tratamentos de canal, o convênio cobre uma série de procedimentos que seriam caros se feitos de forma particular. Garanta que você não adie tratamentos importantes devido ao custo."})]}),o.jsxs(va,{children:[o.jsx("h3",{children:"Estética e Bem-estar"}),o.jsx("p",{children:"Um sorriso bonito aumenta a autoestima e a confiança. Além da saúde, muitos planos oferecem cobertura para procedimentos estéticos ou ortodônticos (parcialmente), contribuindo para seu bem-estar."})]})]})]}),o.jsxs(Ir,{style:{backgroundColor:"#f9f9f9"},children:[o.jsx(Fr,{children:"Cuide do seu Melhor Amigo com um Convênio Pet"}),o.jsx(Pr,{children:"Seu pet merece o melhor cuidado! Proteja a saúde do seu companheiro de quatro patas com planos veterinários completos e acessíveis."}),o.jsxs(Wr,{children:[o.jsxs(va,{children:[o.jsx("h3",{children:"Atendimento Veterinário Completo"}),o.jsx("p",{children:"Garanta consultas, exames, vacinas e até cirurgias para seu pet com uma rede credenciada de clínicas e hospitais veterinários. Seu amigo terá acesso aos melhores profissionais e tratamentos."})]}),o.jsxs(va,{children:[o.jsx("h3",{children:"Prevenção e Bem-estar"}),o.jsx("p",{children:"Mantenha seu pet protegido com a cobertura de vacinas essenciais, vermifugação e check-ups regulares. A prevenção é a melhor forma de garantir uma vida longa e saudável para ele."})]}),o.jsxs(va,{children:[o.jsx("h3",{children:"Segurança em Emergências"}),o.jsx("p",{children:"Acidentes e doenças podem acontecer. Com um convênio pet, você tem a tranquilidade de saber que os custos com emergências, cirurgias e internações estarão cobertos, sem comprometer seu orçamento."})]})]})]}),o.jsx(M4,{children:o.jsxs(D4,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Fale com um especialista"}),o.jsx("p",{children:"Receba uma consultoria gratuita para encontrar o plano ideal."})]}),o.jsx(_4,{children:o.jsx($4,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),o.jsx(ax,{})]})}const k4=j.section`
  padding: 5rem 2rem;
  background-color: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 1rem;
    margin-top: 60px;
  }
`,G4=j.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`,Y4=j.div`
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
`,L4=j.div`
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
  ${({primary:l})=>l&&wo`
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
`,Q4=j.div`
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
`,V4=j.div`
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
`,X4=()=>o.jsxs(k4,{id:"contact",children:[o.jsxs(G4,{children:[o.jsx(at,{children:"Estamos aqui para ajudar"}),o.jsx(nt,{children:"Escolha o melhor canal para falar conosco. Nossa equipe de especialistas está pronta para atender você."})]}),o.jsxs(Y4,{children:[o.jsxs(L4,{children:[o.jsxs(os,{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",primary:!0,children:[o.jsx(a0,{}),o.jsxs("div",{children:[o.jsx("h3",{children:"WhatsApp"}),o.jsx("p",{children:"Clique aqui para iniciar uma conversa agora mesmo."})]})]}),o.jsxs(os,{href:"tel:+551140044004",children:[o.jsx(ly,{}),o.jsxs("div",{children:[o.jsx("h3",{children:"Telefone"}),o.jsx("p",{children:"(11) 94541-1551"})]})]}),o.jsxs(os,{href:"mailto:contato@abacorretora.com.br",children:[o.jsx(ty,{}),o.jsxs("div",{children:[o.jsx("h3",{children:"E-mail"}),o.jsx("p",{children:"abaseguros@abaseguros.com.br"})]})]})]}),o.jsx(Q4,{children:o.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.210770118163!2d-46.504975200000004!3d-23.5249205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60bce3afc021%3A0xf2841702e1fdf959!2sR.%20Itingu%C3%A7u%2C%201019%20-%20Vila%20R%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003658-010!5e0!3m2!1spt-BR!2sbr!4v1760037282599!5m2!1spt-BR!2sbr",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Endereço da ABA Corretora na Av. Paulista"})})]}),o.jsxs(V4,{children:[o.jsxs(cp,{children:[o.jsx(ny,{}),o.jsxs("div",{children:[o.jsx("h4",{children:"Nosso Endereço"}),o.jsx("p",{children:"Av. Itinguçu, 1019 - Vila Ré, São Paulo/SP"})]})]}),o.jsxs(cp,{children:[o.jsx(Ib,{}),o.jsxs("div",{children:[o.jsx("h4",{children:"Horário de Atendimento"}),o.jsx("p",{children:"Segunda a Sexta: 08h às 18h"})]})]})]})]}),Z4=j.div`
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
`,K4=j.p`
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
`,J4=j.button`
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
`,sp="cookies_accepted",W4=()=>{const[l,u]=O.useState(!1);O.useEffect(()=>{localStorage.getItem(sp)||u(!0)},[]);const s=()=>{localStorage.setItem(sp,"true"),u(!1)};return l?o.jsxs(Z4,{children:[o.jsx(ey,{}),o.jsxs(K4,{children:['Utilizamos cookies para oferecer a melhor experiência e analisar o desempenho do nosso site. Ao clicar em "Aceitar Cookies", você concorda com o uso de todos os cookies. Para mais informações, consulte nossa'," ",o.jsx("a",{href:"/politica-de-privacidade",children:"Política de Privacidade"}),"."]}),o.jsx(J4,{onClick:s,children:"Aceitar Cookies"})]}):null};function F4(){const{pathname:l}=ja();return O.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[l]),null}const P4=j.section`
  padding: 4rem 0;
  background-color: ${h.colors.lightGray};
  min-height: 80vh; // Garante que a página tenha uma altura mínima

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,I4=j.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  overflow-x: auto; // Essencial para responsividade da tabela
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,e3=j.table`
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
`,t3=j.button`
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
`,a3=[{id:1,name:"Corretora Exemplo Alfa",contact:"(11) 99999-1234"},{id:2,name:"Beta Seguros",contact:"(21) 98888-5678"},{id:3,name:"Gama Corretora",contact:"(31) 97777-4321"}],n3=()=>{const[l,u]=O.useState(null),s=(c,f)=>{navigator.clipboard.writeText(c).then(()=>{u(f),setTimeout(()=>{u(null)},2e3)})};return o.jsxs(P4,{children:[o.jsx(at,{children:"Contatos das Corretoras"}),o.jsx(nt,{children:"Encontre e entre em contato com nossas corretoras parceiras."}),o.jsx(I4,{children:o.jsxs(e3,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Corretora"}),o.jsx("th",{children:"Contato"}),o.jsx("th",{children:"Copiar"})]})}),o.jsx("tbody",{children:a3.map(c=>o.jsxs("tr",{children:[o.jsx("td",{children:c.name}),o.jsx("td",{children:c.contact}),o.jsx("td",{children:o.jsx(t3,{onClick:()=>s(c.contact,c.id),isCopied:l===c.id,disabled:l===c.id,children:l===c.id?"Copiado!":"Clique aqui"})})]},c.id))})]})})]})},l3=j.section`
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
`,i3=j.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,r3=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,o3=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,u3=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,c3=j.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,s3=j.img`
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
`,d3=j.div`
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
`,f3=j.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,m3=j.ol`
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
`,h3=j.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,p3=j.div`
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
`,g3=j.section`
  background: ${h.colors.primary};
  color: ${h.colors.white};
  padding: 3rem 0;
`,v3=j.div`
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
`,b3=j.div`
  display: flex;
  flex-shrink: 0;
`,y3=j.button`
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
`,x3=j.div`
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
`,S3=j.article`
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
`,j3=j.img`
  /* Estilo do seu ProductImage, mas com altura fixa */
  width: 100%;
  height: 180px; /* Altura fixa para alinhar a grade */
  object-fit: cover;
  background-color: #e0e0e0;
`,A3=j.span`
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
`,w3=j.p`
  /* Estilo do preço na imagem */
  font-size: 1.25rem;
  font-weight: bold;
  color: ${h.colors.dark};
  margin: 0.5rem 1.25rem 1rem;
  line-height: 1;
`,C3=j.a`
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
`,E3="/AbaCorretora/assets/contrate-qOm5gv_C.webp",z3="/AbaCorretora/assets/cartao-C5OlbCS9.webp",T3="/AbaCorretora/assets/conta-BLrxCejT.webp",R3="/AbaCorretora/assets/equipamentos-BEO8xOsZ.webp",O3="/AbaCorretora/assets/arCondicionado-BswqJYdo.webp",M3="/AbaCorretora/assets/reparoArCondicionado-SFXWwpEQ.webp",D3="/AbaCorretora/assets/eletro-BoEK75kJ.webp",_3="/AbaCorretora/assets/fechadura-ixP9lh0v.webp",$3=[{id:1,title:"Cartão de Crédito Porto Bank",image:z3,price:"Consulte",link:"#",tag:"Financeiro"},{id:2,title:"Conta Digital Porto Bank",image:T3,price:"Gratuita",link:"#",tag:"Financeiro"},{id:3,title:"Seguro Equipamentos Portáteis",image:R3,price:"Consulte",link:"#",tag:"Seguro"},{id:4,title:"Instalação de Ar Condicionado",image:O3,price:"Consulte",link:"#",tag:"Serviço"},{id:5,title:"Conserto de Ar Condicionado",image:M3,price:"Consulte",link:"#",tag:"Serviço"},{id:6,title:"Conserto de Eletrodomésticos",image:D3,price:"Consulte",link:"#",tag:"Serviço"},{id:7,title:"Instalação de Fechadura Digital",image:_3,price:"Consulte",link:"#",tag:"Serviço"},{id:8,title:"Limpeza de Ar Condicionado",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:9,title:"Limpeza de Sofá e Estofados",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:10,title:"Manutenção de Aquecedor a Gás",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:11,title:"Residência Essencial",image:w0,price:"Consulte",link:"#",tag:"Seguro"},{id:12,title:"Seguro de Vida On",image:C0,price:"Consulte",link:"#",tag:"Seguro"},{id:13,title:"Seguro Viagem",image:E0,price:"Consulte",link:"#",tag:"Seguro"},{id:14,title:"Azul por Assinatura",image:Gt,price:"Consulte",link:"#",tag:"Assinatura"},{id:15,title:"Seguro Automóvel",image:A0,price:"Consulte",link:"#",tag:"Seguro"},{id:16,title:"Porto Serviços (Geral)",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:17,title:"Porto Serviço Desentupimento",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:18,title:"Porto Serviço Consertos Hidráulicos",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:19,title:"Porto Serviço Guincho",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:20,title:"Porto Serviço Consertos Elétricos",image:Gt,price:"Consulte",link:"#",tag:"Serviço"},{id:21,title:"Seguro Celular",image:Gt,price:"Consulte",link:"#",tag:"Seguro"}],q3=[{question:"Como contrato um serviço?",answer:"É simples! Escolha o serviço desejado, clique em 'Contratar Agora' e siga as instruções para agendamento e pagamento. Você será direcionado para a plataforma de contratação."},{question:"Os serviços têm garantia?",answer:"Sim, todos os serviços prestados pela Porto Serviços possuem garantia de qualidade. O prazo da garantia varia conforme o tipo de serviço executado."},{question:"Posso parcelar o pagamento?",answer:"Sim, oferecemos diversas formas de pagamento, incluindo parcelamento no cartão de crédito. As condições exatas estarão disponíveis na página de pagamento do serviço."}],N3=()=>o.jsxs(o.Fragment,{children:[o.jsxs(i3,{children:[o.jsx(r3,{children:o.jsxs(o3,{children:[o.jsx(u3,{children:o.jsx(c3,{children:"Serviços Porto para sua casa, carro e vida cotidiana."})}),o.jsx(s3,{src:E3,alt:"Serviços Porto"})]})}),o.jsx(d3,{})]}),o.jsx(l3,{children:o.jsxs(dp,{children:[o.jsx(at,{children:"Todos os Nossos Serviços"}),o.jsx(nt,{children:"Encontre seguros e serviços para todas as suas necessidades. Contrate online com rapidez e segurança."}),o.jsx(x3,{children:$3.map(l=>o.jsxs(S3,{children:[l.tag&&o.jsx(A3,{children:l.tag}),o.jsx(j3,{src:l.image,alt:l.title}),o.jsx("h3",{children:l.title}),o.jsx(w3,{children:l.price}),o.jsx(C3,{as:"a",href:l.link,target:"_blank",rel:"noopener noreferrer",children:"Contratar Agora"})]},l.id))})]})}),o.jsxs(f3,{children:[o.jsx(at,{children:"Como Contratar?"}),o.jsx(nt,{children:"Contratar um serviço ou seguro é simples e rápido."}),o.jsxs(m3,{children:[o.jsxs(eo,{children:[o.jsx("h4",{children:"1. Escolha"}),o.jsx("p",{children:"Navegue pela nossa grade e escolha o serviço ou seguro que você precisa."})]}),o.jsxs(eo,{children:[o.jsx("h4",{children:"2. Simule"}),o.jsx("p",{children:'Clique em "Contratar Agora" para ver os detalhes, preços e simular seu plano.'})]}),o.jsxs(eo,{children:[o.jsx("h4",{children:"3. Contrate"}),o.jsx("p",{children:"Preencha seus dados e finalize a contratação de forma 100% digital."})]}),o.jsxs(eo,{children:[o.jsx("h4",{children:"4. Pronto!"}),o.jsx("p",{children:"Receba a confirmação e agende seu serviço ou receba sua apólice digital."})]})]})]}),o.jsx(h3,{children:o.jsxs(dp,{children:[o.jsx(at,{children:"Perguntas Frequentes"}),o.jsx(nt,{children:"Ainda tem dúvidas? A gente ajuda você a esclarecer."}),q3.map((l,u)=>o.jsxs(p3,{children:[o.jsx("h4",{children:l.question}),o.jsx("p",{children:l.answer})]},u))]})}),o.jsx(g3,{children:o.jsxs(v3,{children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Não encontrou o que procurava?"}),o.jsx("p",{children:"Fale com um de nossos especialistas e tire todas as suas dúvidas."})]}),o.jsx(b3,{children:o.jsx(y3,{as:"a",href:"https://wa.me/5511945411551",children:"Falar pelo WhatsApp"})})]})})]});function B3(){return o.jsxs(Bp,{theme:h,children:[o.jsx(o2,{}),o.jsx(Bb,{}),o.jsx(F4,{}),o.jsx("main",{children:o.jsxs(lb,{children:[o.jsx(ba,{path:"/AbaCorretora",element:o.jsx(Ex,{})}),o.jsx(ba,{path:"/products",element:o.jsx(ab,{to:"/home",replace:!0})}),o.jsx(ba,{path:"/seguros",element:o.jsx(Px,{})}),o.jsx(ba,{path:"/consorcios",element:o.jsx(A4,{})}),o.jsx(ba,{path:"/saude",element:o.jsx(H4,{})}),o.jsx(ba,{path:"/contato",element:o.jsx(X4,{})}),o.jsx(ba,{path:"/corretoras",element:o.jsx(n3,{})}),o.jsx(ba,{path:"/contrateAgora",element:o.jsx(N3,{})})]})}),o.jsx(W4,{}),o.jsx(sy,{}),o.jsx(my,{})]})}iv.createRoot(document.getElementById("root")).render(o.jsx(Ye.StrictMode,{children:o.jsx(Bp,{theme:h,children:o.jsx(zb,{children:o.jsx(B3,{})})})}));
