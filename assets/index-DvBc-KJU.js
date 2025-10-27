(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function s(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=s(d);fetch(d.href,p)}})();function c1(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Bc={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Yg(){if(Th)return gi;Th=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(c,d,p){var y=null;if(p!==void 0&&(y=""+p),d.key!==void 0&&(y=""+d.key),"key"in d){p={};for(var E in d)E!=="key"&&(p[E]=d[E])}else p=d;return d=p.ref,{$$typeof:l,type:c,key:y,ref:d!==void 0?d:null,props:p}}return gi.Fragment=o,gi.jsx=s,gi.jsxs=s,gi}var Rh;function Lg(){return Rh||(Rh=1,Bc.exports=Yg()),Bc.exports}var u=Lg(),Hc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Qg(){if(Oh)return re;Oh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),M=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=M&&x[M]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,X={};function k(x,$,Y){this.props=x,this.context=$,this.refs=X,this.updater=Y||B}k.prototype.isReactComponent={},k.prototype.setState=function(x,$){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,$,"setState")},k.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function V(){}V.prototype=k.prototype;function H(x,$,Y){this.props=x,this.context=$,this.refs=X,this.updater=Y||B}var Z=H.prototype=new V;Z.constructor=H,G(Z,k.prototype),Z.isPureReactComponent=!0;var le=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ie=Object.prototype.hasOwnProperty;function F(x,$,Y,Q,P,fe){return Y=fe.ref,{$$typeof:l,type:x,key:$,ref:Y!==void 0?Y:null,props:fe}}function Te(x,$){return F(x.type,$,void 0,void 0,void 0,x.props)}function Ee(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function rt(x){var $={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return $[Y]})}var ut=/\/+/g;function Le(x,$){return typeof x=="object"&&x!==null&&x.key!=null?rt(""+x.key):$.toString(36)}function Pt(){}function It(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Pt,Pt):(x.status="pending",x.then(function($){x.status==="pending"&&(x.status="fulfilled",x.value=$)},function($){x.status==="pending"&&(x.status="rejected",x.reason=$)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Qe(x,$,Y,Q,P){var fe=typeof x;(fe==="undefined"||fe==="boolean")&&(x=null);var te=!1;if(x===null)te=!0;else switch(fe){case"bigint":case"string":case"number":te=!0;break;case"object":switch(x.$$typeof){case l:case o:te=!0;break;case j:return te=x._init,Qe(te(x._payload),$,Y,Q,P)}}if(te)return P=P(x),te=Q===""?"."+Le(x,0):Q,le(P)?(Y="",te!=null&&(Y=te.replace(ut,"$&/")+"/"),Qe(P,$,Y,"",function(at){return at})):P!=null&&(Ee(P)&&(P=Te(P,Y+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(ut,"$&/")+"/")+te)),$.push(P)),1;te=0;var Ve=Q===""?".":Q+":";if(le(x))for(var ve=0;ve<x.length;ve++)Q=x[ve],fe=Ve+Le(Q,ve),te+=Qe(Q,$,Y,fe,P);else if(ve=U(x),typeof ve=="function")for(x=ve.call(x),ve=0;!(Q=x.next()).done;)Q=Q.value,fe=Ve+Le(Q,ve++),te+=Qe(Q,$,Y,fe,P);else if(fe==="object"){if(typeof x.then=="function")return Qe(It(x),$,Y,Q,P);throw $=String(x),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return te}function D(x,$,Y){if(x==null)return x;var Q=[],P=0;return Qe(x,Q,"","",function(fe){return $.call(Y,fe,P++)}),Q}function L(x){if(x._status===-1){var $=x._result;$=$(),$.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=$)}if(x._status===1)return x._result.default;throw x._result}var I=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return re.Children={map:D,forEach:function(x,$,Y){D(x,function(){$.apply(this,arguments)},Y)},count:function(x){var $=0;return D(x,function(){$++}),$},toArray:function(x){return D(x,function($){return $})||[]},only:function(x){if(!Ee(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},re.Component=k,re.Fragment=s,re.Profiler=d,re.PureComponent=H,re.StrictMode=c,re.Suspense=b,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,re.__COMPILER_RUNTIME={__proto__:null,c:function(x){return K.H.useMemoCache(x)}},re.cache=function(x){return function(){return x.apply(null,arguments)}},re.cloneElement=function(x,$,Y){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Q=G({},x.props),P=x.key,fe=void 0;if($!=null)for(te in $.ref!==void 0&&(fe=void 0),$.key!==void 0&&(P=""+$.key),$)!ie.call($,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&$.ref===void 0||(Q[te]=$[te]);var te=arguments.length-2;if(te===1)Q.children=Y;else if(1<te){for(var Ve=Array(te),ve=0;ve<te;ve++)Ve[ve]=arguments[ve+2];Q.children=Ve}return F(x.type,P,void 0,void 0,fe,Q)},re.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},re.createElement=function(x,$,Y){var Q,P={},fe=null;if($!=null)for(Q in $.key!==void 0&&(fe=""+$.key),$)ie.call($,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(P[Q]=$[Q]);var te=arguments.length-2;if(te===1)P.children=Y;else if(1<te){for(var Ve=Array(te),ve=0;ve<te;ve++)Ve[ve]=arguments[ve+2];P.children=Ve}if(x&&x.defaultProps)for(Q in te=x.defaultProps,te)P[Q]===void 0&&(P[Q]=te[Q]);return F(x,fe,void 0,void 0,null,P)},re.createRef=function(){return{current:null}},re.forwardRef=function(x){return{$$typeof:E,render:x}},re.isValidElement=Ee,re.lazy=function(x){return{$$typeof:j,_payload:{_status:-1,_result:x},_init:L}},re.memo=function(x,$){return{$$typeof:g,type:x,compare:$===void 0?null:$}},re.startTransition=function(x){var $=K.T,Y={};K.T=Y;try{var Q=x(),P=K.S;P!==null&&P(Y,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(se,I)}catch(fe){I(fe)}finally{K.T=$}},re.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},re.use=function(x){return K.H.use(x)},re.useActionState=function(x,$,Y){return K.H.useActionState(x,$,Y)},re.useCallback=function(x,$){return K.H.useCallback(x,$)},re.useContext=function(x){return K.H.useContext(x)},re.useDebugValue=function(){},re.useDeferredValue=function(x,$){return K.H.useDeferredValue(x,$)},re.useEffect=function(x,$,Y){var Q=K.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(x,$)},re.useId=function(){return K.H.useId()},re.useImperativeHandle=function(x,$,Y){return K.H.useImperativeHandle(x,$,Y)},re.useInsertionEffect=function(x,$){return K.H.useInsertionEffect(x,$)},re.useLayoutEffect=function(x,$){return K.H.useLayoutEffect(x,$)},re.useMemo=function(x,$){return K.H.useMemo(x,$)},re.useOptimistic=function(x,$){return K.H.useOptimistic(x,$)},re.useReducer=function(x,$,Y){return K.H.useReducer(x,$,Y)},re.useRef=function(x){return K.H.useRef(x)},re.useState=function(x){return K.H.useState(x)},re.useSyncExternalStore=function(x,$,Y){return K.H.useSyncExternalStore(x,$,Y)},re.useTransition=function(){return K.H.useTransition()},re.version="19.1.1",re}var Mh;function vs(){return Mh||(Mh=1,Hc.exports=Qg()),Hc.exports}var O=vs();const Ye=c1(O);var Gc={exports:{}},vi={},kc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Vg(){return Dh||(Dh=1,(function(l){function o(D,L){var I=D.length;D.push(L);e:for(;0<I;){var se=I-1>>>1,x=D[se];if(0<d(x,L))D[se]=L,D[I]=x,I=se;else break e}}function s(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var L=D[0],I=D.pop();if(I!==L){D[0]=I;e:for(var se=0,x=D.length,$=x>>>1;se<$;){var Y=2*(se+1)-1,Q=D[Y],P=Y+1,fe=D[P];if(0>d(Q,I))P<x&&0>d(fe,Q)?(D[se]=fe,D[P]=I,se=P):(D[se]=Q,D[Y]=I,se=Y);else if(P<x&&0>d(fe,I))D[se]=fe,D[P]=I,se=P;else break e}}return L}function d(D,L){var I=D.sortIndex-L.sortIndex;return I!==0?I:D.id-L.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var y=Date,E=y.now();l.unstable_now=function(){return y.now()-E}}var b=[],g=[],j=1,M=null,U=3,B=!1,G=!1,X=!1,k=!1,V=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function le(D){for(var L=s(g);L!==null;){if(L.callback===null)c(g);else if(L.startTime<=D)c(g),L.sortIndex=L.expirationTime,o(b,L);else break;L=s(g)}}function K(D){if(X=!1,le(D),!G)if(s(b)!==null)G=!0,ie||(ie=!0,Le());else{var L=s(g);L!==null&&Qe(K,L.startTime-D)}}var ie=!1,F=-1,Te=5,Ee=-1;function rt(){return k?!0:!(l.unstable_now()-Ee<Te)}function ut(){if(k=!1,ie){var D=l.unstable_now();Ee=D;var L=!0;try{e:{G=!1,X&&(X=!1,H(F),F=-1),B=!0;var I=U;try{t:{for(le(D),M=s(b);M!==null&&!(M.expirationTime>D&&rt());){var se=M.callback;if(typeof se=="function"){M.callback=null,U=M.priorityLevel;var x=se(M.expirationTime<=D);if(D=l.unstable_now(),typeof x=="function"){M.callback=x,le(D),L=!0;break t}M===s(b)&&c(b),le(D)}else c(b);M=s(b)}if(M!==null)L=!0;else{var $=s(g);$!==null&&Qe(K,$.startTime-D),L=!1}}break e}finally{M=null,U=I,B=!1}L=void 0}}finally{L?Le():ie=!1}}}var Le;if(typeof Z=="function")Le=function(){Z(ut)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,It=Pt.port2;Pt.port1.onmessage=ut,Le=function(){It.postMessage(null)}}else Le=function(){V(ut,0)};function Qe(D,L){F=V(function(){D(l.unstable_now())},L)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return U},l.unstable_next=function(D){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var I=U;U=L;try{return D()}finally{U=I}},l.unstable_requestPaint=function(){k=!0},l.unstable_runWithPriority=function(D,L){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=U;U=D;try{return L()}finally{U=I}},l.unstable_scheduleCallback=function(D,L,I){var se=l.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,D){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=I+x,D={id:j++,callback:L,priorityLevel:D,startTime:I,expirationTime:x,sortIndex:-1},I>se?(D.sortIndex=I,o(g,D),s(b)===null&&D===s(g)&&(X?(H(F),F=-1):X=!0,Qe(K,I-se))):(D.sortIndex=x,o(b,D),G||B||(G=!0,ie||(ie=!0,Le()))),D},l.unstable_shouldYield=rt,l.unstable_wrapCallback=function(D){var L=U;return function(){var I=U;U=L;try{return D.apply(this,arguments)}finally{U=I}}}})(Yc)),Yc}var _h;function Xg(){return _h||(_h=1,kc.exports=Vg()),kc.exports}var Lc={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function Zg(){if(qh)return it;qh=1;var l=vs();function o(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)g+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(b,g,j){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:b,containerInfo:g,implementation:j}}var y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,it.createPortal=function(b,g){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return p(b,g,null,j)},it.flushSync=function(b){var g=y.T,j=c.p;try{if(y.T=null,c.p=2,b)return b()}finally{y.T=g,c.p=j,c.d.f()}},it.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(b,g))},it.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},it.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var j=g.as,M=E(j,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;j==="style"?c.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:U,fetchPriority:B}):j==="script"&&c.d.X(b,{crossOrigin:M,integrity:U,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},it.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var j=E(g.as,g.crossOrigin);c.d.M(b,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(b)},it.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var j=g.as,M=E(j,g.crossOrigin);c.d.L(b,j,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},it.preloadModule=function(b,g){if(typeof b=="string")if(g){var j=E(g.as,g.crossOrigin);c.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(b)},it.requestFormReset=function(b){c.d.r(b)},it.unstable_batchedUpdates=function(b,g){return b(g)},it.useFormState=function(b,g,j){return y.H.useFormState(b,g,j)},it.useFormStatus=function(){return y.H.useHostTransitionStatus()},it.version="19.1.1",it}var Nh;function Kg(){if(Nh)return Lc.exports;Nh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Lc.exports=Zg(),Lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Jg(){if($h)return vi;$h=1;var l=Xg(),o=vs(),s=Kg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return E(i),e;if(r===n)return E(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=r;else{for(var f=!1,m=i.child;m;){if(m===a){f=!0,a=i,n=r;break}if(m===n){f=!0,n=i,a=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===a){f=!0,a=r,n=i;break}if(m===n){f=!0,n=r,a=i;break}m=m.sibling}if(!f)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,M=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var Pt=Symbol.for("react.client.reference");function It(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case k:return"Profiler";case X:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:It(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return It(e(t))}catch{}}return null}var Qe=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],x=-1;function $(e){return{current:e}}function Y(e){0>x||(e.current=se[x],se[x]=null,x--)}function Q(e,t){x++,se[x]=e.current,e.current=t}var P=$(null),fe=$(null),te=$(null),Ve=$(null);function ve(e,t){switch(Q(te,t),Q(fe,e),Q(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ah(t),e=nh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(P),Q(P,e)}function at(){Y(P),Y(fe),Y(te)}function Ka(e){e.memoizedState!==null&&Q(Ve,e);var t=P.current,a=nh(t,e.type);t!==a&&(Q(fe,e),Q(P,a))}function ea(e){fe.current===e&&(Y(P),Y(fe)),Ve.current===e&&(Y(Ve),fi._currentValue=I)}var zt=Object.prototype.hasOwnProperty,wo=l.unstable_scheduleCallback,Co=l.unstable_cancelCallback,xp=l.unstable_shouldYield,Sp=l.unstable_requestPaint,Qt=l.unstable_now,jp=l.unstable_getCurrentPriorityLevel,Ns=l.unstable_ImmediatePriority,$s=l.unstable_UserBlockingPriority,Ci=l.unstable_NormalPriority,Ap=l.unstable_LowPriority,Us=l.unstable_IdlePriority,Ep=l.log,wp=l.unstable_setDisableYieldValue,bl=null,vt=null;function Sa(e){if(typeof Ep=="function"&&wp(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(bl,e)}catch{}}var yt=Math.clz32?Math.clz32:Tp,Cp=Math.log,zp=Math.LN2;function Tp(e){return e>>>=0,e===0?32:31-(Cp(e)/zp|0)|0}var zi=256,Ti=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ri(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~r,n!==0?i=Ja(n):(f&=m,f!==0?i=Ja(f):a||(a=m&~e,a!==0&&(i=Ja(a))))):(m=n&~r,m!==0?i=Ja(m):f!==0?i=Ja(f):a||(a=n&~e,a!==0&&(i=Ja(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=zi;return zi<<=1,(zi&4194048)===0&&(zi=256),e}function Hs(){var e=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),e}function zo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Op(e,t,a,n,i,r){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,C=e.hiddenUpdates;for(a=f&~a;0<a;){var _=31-yt(a),N=1<<_;m[_]=0,v[_]=-1;var T=C[_];if(T!==null)for(C[_]=null,_=0;_<T.length;_++){var R=T[_];R!==null&&(R.lane&=-536870913)}a&=~N}n!==0&&Gs(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Gs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-yt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function ks(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-yt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ys(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:jh(e.type))}function Mp(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ja=Math.random().toString(36).slice(2),nt="__reactFiber$"+ja,ct="__reactProps$"+ja,yn="__reactContainer$"+ja,Oo="__reactEvents$"+ja,Dp="__reactListeners$"+ja,_p="__reactHandles$"+ja,Ls="__reactResources$"+ja,jl="__reactMarker$"+ja;function Mo(e){delete e[nt],delete e[ct],delete e[Oo],delete e[Dp],delete e[_p]}function bn(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yn]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=oh(e);e!==null;){if(a=e[nt])return a;e=oh(e)}return t}e=a,a=e.parentNode}return null}function xn(e){if(e=e[nt]||e[yn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Sn(e){var t=e[Ls];return t||(t=e[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[jl]=!0}var Qs=new Set,Vs={};function Wa(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Vs[e]=t,e=0;e<t.length;e++)Qs.add(t[e])}var qp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xs={},Zs={};function Np(e){return zt.call(Zs,e)?!0:zt.call(Xs,e)?!1:qp.test(e)?Zs[e]=!0:(Xs[e]=!0,!1)}function Oi(e,t,a){if(Np(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Mi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ta(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Do,Ks;function An(e){if(Do===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||"",Ks=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Do+e+Ks}var _o=!1;function qo(e,t){if(!e||_o)return"";_o=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(R){var T=R}Reflect.construct(e,[],N)}else{try{N.call()}catch(R){T=R}e.call(N.prototype)}}else{try{throw Error()}catch(R){T=R}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(R){if(R&&T&&typeof R.stack=="string")return[R.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var v=f.split(`
`),C=m.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===C.length)for(n=v.length-1,i=C.length-1;1<=n&&0<=i&&v[n]!==C[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==C[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==C[i]){var _=`
`+v[n].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=n&&0<=i);break}}}finally{_o=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?An(a):""}function $p(e){switch(e.tag){case 26:case 27:case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 15:return qo(e.type,!1);case 11:return qo(e.type.render,!1);case 1:return qo(e.type,!0);case 31:return An("Activity");default:return""}}function Js(e){try{var t="";do t+=$p(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e){var t=Ws(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=Up(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ws(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bp=/[\n"\\]/g;function Rt(e){return e.replace(Bp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function No(e,t,a,n,i,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?$o(e,f,Tt(t)):a!=null?$o(e,f,Tt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Tt(m):e.removeAttribute("name")}function Ps(e,t,a,n,i,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function $o(e,t,a){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function En(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Is(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function ef(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Qe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function wn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Hp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Hp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function af(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&tf(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&tf(e,r,t[r])}function Uo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(e){return kp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bo=null;function Ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,zn=null;function nf(e){var t=xn(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(No(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ct]||null;if(!i)throw Error(c(90));No(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Fs(n)}break e;case"textarea":Is(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&En(e,!!a.multiple,t,!1)}}}var Go=!1;function lf(e,t,a){if(Go)return e(t,a);Go=!0;try{var n=e(t);return n}finally{if(Go=!1,(Cn!==null||zn!==null)&&(br(),Cn&&(t=Cn,e=zn,zn=Cn=null,nf(t),e)))for(t=0;t<e.length;t++)nf(e[t])}}function El(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ct]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ko=!1;if(aa)try{var wl={};Object.defineProperty(wl,"passive",{get:function(){ko=!0}}),window.addEventListener("test",wl,wl),window.removeEventListener("test",wl,wl)}catch{ko=!1}var Aa=null,Yo=null,Ni=null;function rf(){if(Ni)return Ni;var e,t=Yo,a=t.length,n,i="value"in Aa?Aa.value:Aa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(n=1;n<=f&&t[a-n]===i[r-n];n++);return Ni=i.slice(e,1<n?1-n:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function of(){return!1}function st(e){function t(a,n,i,r,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ui:of,this.isPropagationStopped=of,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=st(Fa),Cl=j({},Fa,{view:0,detail:0}),Yp=st(Cl),Lo,Qo,zl,Hi=j({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Lo=e.screenX-zl.screenX,Qo=e.screenY-zl.screenY):Qo=Lo=0,zl=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),uf=st(Hi),Lp=j({},Hi,{dataTransfer:0}),Qp=st(Lp),Vp=j({},Cl,{relatedTarget:0}),Vo=st(Vp),Xp=j({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Zp=st(Xp),Kp=j({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=st(Kp),Wp=j({},Fa,{data:0}),cf=st(Wp),Fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function Xo(){return e0}var t0=j({},Cl,{key:function(e){if(e.key){var t=Fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a0=st(t0),n0=j({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=st(n0),l0=j({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),i0=st(l0),r0=j({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=st(r0),u0=j({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=st(u0),s0=j({},Fa,{newState:0,oldState:0}),f0=st(s0),d0=[9,13,27,32],Zo=aa&&"CompositionEvent"in window,Tl=null;aa&&"documentMode"in document&&(Tl=document.documentMode);var m0=aa&&"TextEvent"in window&&!Tl,ff=aa&&(!Zo||Tl&&8<Tl&&11>=Tl),df=" ",mf=!1;function hf(e,t){switch(e){case"keyup":return d0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function h0(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(mf=!0,df);case"textInput":return e=t.data,e===df&&mf?null:e;default:return null}}function p0(e,t){if(Tn)return e==="compositionend"||!Zo&&hf(e,t)?(e=rf(),Ni=Yo=Aa=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g0[e.type]:t==="textarea"}function vf(e,t,a,n){Cn?zn?zn.push(n):zn=[n]:Cn=n,t=wr(t,"onChange"),0<t.length&&(a=new Bi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Rl=null,Ol=null;function v0(e){Fm(e,0)}function Gi(e){var t=Al(e);if(Fs(t))return e}function yf(e,t){if(e==="change")return t}var bf=!1;if(aa){var Ko;if(aa){var Jo="oninput"in document;if(!Jo){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),Jo=typeof xf.oninput=="function"}Ko=Jo}else Ko=!1;bf=Ko&&(!document.documentMode||9<document.documentMode)}function Sf(){Rl&&(Rl.detachEvent("onpropertychange",jf),Ol=Rl=null)}function jf(e){if(e.propertyName==="value"&&Gi(Ol)){var t=[];vf(t,Ol,e,Ho(e)),lf(v0,t)}}function y0(e,t,a){e==="focusin"?(Sf(),Rl=t,Ol=a,Rl.attachEvent("onpropertychange",jf)):e==="focusout"&&Sf()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Ol)}function x0(e,t){if(e==="click")return Gi(t)}function S0(e,t){if(e==="input"||e==="change")return Gi(t)}function j0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:j0;function Ml(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!zt.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function Af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var a=Af(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Af(a)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_i(e.document)}return t}function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A0=aa&&"documentMode"in document&&11>=document.documentMode,Rn=null,Fo=null,Dl=null,Po=!1;function zf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Po||Rn==null||Rn!==_i(n)||(n=Rn,"selectionStart"in n&&Wo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dl&&Ml(Dl,n)||(Dl=n,n=wr(Fo,"onSelect"),0<n.length&&(t=new Bi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Rn)))}function Pa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var On={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},Io={},Tf={};aa&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Ia(e){if(Io[e])return Io[e];if(!On[e])return e;var t=On[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tf)return Io[e]=t[a];return e}var Rf=Ia("animationend"),Of=Ia("animationiteration"),Mf=Ia("animationstart"),E0=Ia("transitionrun"),w0=Ia("transitionstart"),C0=Ia("transitioncancel"),Df=Ia("transitionend"),_f=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function Bt(e,t){_f.set(e,t),Wa(t,[e])}var qf=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var a=qf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Js(t)},qf.set(e,t),t)}return{value:e,source:t,stack:Js(t)}}var Mt=[],Mn=0,tu=0;function ki(){for(var e=Mn,t=tu=Mn=0;t<e;){var a=Mt[t];Mt[t++]=null;var n=Mt[t];Mt[t++]=null;var i=Mt[t];Mt[t++]=null;var r=Mt[t];if(Mt[t++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}r!==0&&Nf(a,i,r)}}function Yi(e,t,a,n){Mt[Mn++]=e,Mt[Mn++]=t,Mt[Mn++]=a,Mt[Mn++]=n,tu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function au(e,t,a,n){return Yi(e,t,a,n),Li(e)}function Dn(e,t){return Yi(e,null,null,t),Li(e)}function Nf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-yt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Li(e){if(50<ni)throw ni=0,uc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _n={};function z0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,n){return new z0(e,t,a,n)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $f(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,a,n,i,r){var f=0;if(n=e,typeof e=="function")nu(e)&&(f=1);else if(typeof e=="string")f=Rg(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=xt(31,a,t,i),e.elementType=Ee,e.lanes=r,e;case G:return en(a.children,i,r,t);case X:f=8,i|=24;break;case k:return e=xt(12,a,t,i|2),e.elementType=k,e.lanes=r,e;case K:return e=xt(13,a,t,i),e.elementType=K,e.lanes=r,e;case ie:return e=xt(19,a,t,i),e.elementType=ie,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case Z:f=10;break e;case H:f=9;break e;case le:f=11;break e;case F:f=14;break e;case Te:f=16,n=null;break e}f=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=xt(f,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function en(e,t,a,n){return e=xt(7,e,n,t),e.lanes=a,e}function lu(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function iu(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qn=[],Nn=0,Vi=null,Xi=0,Dt=[],_t=0,tn=null,la=1,ia="";function an(e,t){qn[Nn++]=Xi,qn[Nn++]=Vi,Vi=e,Xi=t}function Uf(e,t,a){Dt[_t++]=la,Dt[_t++]=ia,Dt[_t++]=tn,tn=e;var n=la;e=ia;var i=32-yt(n)-1;n&=~(1<<i),a+=1;var r=32-yt(t)+i;if(30<r){var f=i-i%5;r=(n&(1<<f)-1).toString(32),n>>=f,i-=f,la=1<<32-yt(t)+i|a<<i|n,ia=r+e}else la=1<<r|a<<i|n,ia=e}function ru(e){e.return!==null&&(an(e,1),Uf(e,1,0))}function ou(e){for(;e===Vi;)Vi=qn[--Nn],qn[Nn]=null,Xi=qn[--Nn],qn[Nn]=null;for(;e===tn;)tn=Dt[--_t],Dt[_t]=null,ia=Dt[--_t],Dt[_t]=null,la=Dt[--_t],Dt[_t]=null}var ot=null,_e=null,ge=!1,nn=null,Vt=!1,uu=Error(c(519));function ln(e){var t=Error(c(418,""));throw Nl(Ot(t,e)),uu}function Bf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[nt]=e,t[ct]=n,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<ii.length;a++)me(ii[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Ps(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Di(t);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),ef(t,n.value,n.defaultValue,n.children),Di(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||th(t.textContent,a)?(n.popover!=null&&(me("beforetoggle",t),me("toggle",t)),n.onScroll!=null&&me("scroll",t),n.onScrollEnd!=null&&me("scrollend",t),n.onClick!=null&&(t.onclick=Cr),t=!0):t=!1,t||ln(e)}function Hf(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ot=ot.return}}function _l(e){if(e!==ot)return!1;if(!ge)return Hf(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ec(e.type,e.memoizedProps)),a=!a),a&&_e&&ln(e),Hf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){_e=Gt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}_e=null}}else t===27?(t=_e,Ha(e.type)?(e=Tc,Tc=null,_e=e):_e=t):_e=ot?Gt(e.stateNode.nextSibling):null;return!0}function ql(){_e=ot=null,ge=!1}function Gf(){var e=nn;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),nn=null),e}function Nl(e){nn===null?nn=[e]:nn.push(e)}var cu=$(null),rn=null,ra=null;function Ea(e,t,a){Q(cu,t._currentValue),t._currentValue=a}function oa(e){e._currentValue=cu.current,Y(cu)}function su(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function fu(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),su(r.return,a,e),n||(f=null);break e}r=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(c(341));f.lanes|=a,r=f.alternate,r!==null&&(r.lanes|=a),su(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function $l(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var m=i.type;bt(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===Ve.current){if(f=i.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}i=i.return}e!==null&&fu(t,e,a,n),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function on(e){rn=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return kf(rn,e)}function Ki(e,t){return rn===null&&on(e),kf(e,t)}function kf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(c(308));ra=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ra=ra.next=t;return a}var T0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},R0=l.unstable_scheduleCallback,O0=l.unstable_NormalPriority,Ge={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new T0,data:new Map,refCount:0}}function Ul(e){e.refCount--,e.refCount===0&&R0(O0,function(){e.controller.abort()})}var Bl=null,mu=0,$n=0,Un=null;function M0(e,t){if(Bl===null){var a=Bl=[];mu=0,$n=pc(),Un={status:"pending",value:void 0,then:function(n){a.push(n)}}}return mu++,t.then(Yf,Yf),t}function Yf(){if(--mu===0&&Bl!==null){Un!==null&&(Un.status="fulfilled");var e=Bl;Bl=null,$n=0,Un=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function D0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Lf=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&M0(e,t),Lf!==null&&Lf(e,t)};var un=$(null);function hu(){var e=un.current;return e!==null?e:Ce.pooledCache}function Ji(e,t){t===null?Q(un,un.current):Q(un,t.pool)}function Qf(){var e=hu();return e===null?null:{parent:Ge._currentValue,pool:e}}var Hl=Error(c(460)),Vf=Error(c(474)),Wi=Error(c(542)),pu={then:function(){}};function Xf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fi(){}function Zf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Fi,Fi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e;default:if(typeof t.status=="string")t.then(Fi,Fi);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e}throw Gl=t,Hl}}var Gl=null;function Kf(){if(Gl===null)throw Error(c(459));var e=Gl;return Gl=null,e}function Jf(e){if(e===Hl||e===Wi)throw Error(c(483))}var wa=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(be&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Li(e),Nf(e,null,a),t}return Yi(e,n,t,a),Li(e)}function kl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ks(e,a)}}function yu(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bu=!1;function Yl(){if(bu){var e=Un;if(e!==null)throw e}}function Ll(e,t,a,n){bu=!1;var i=e.updateQueue;wa=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,C=v.next;v.next=null,f===null?r=C:f.next=C,f=v;var _=e.alternate;_!==null&&(_=_.updateQueue,m=_.lastBaseUpdate,m!==f&&(m===null?_.firstBaseUpdate=C:m.next=C,_.lastBaseUpdate=v))}if(r!==null){var N=i.baseState;f=0,_=C=v=null,m=r;do{var T=m.lane&-536870913,R=T!==m.lane;if(R?(he&T)===T:(n&T)===T){T!==0&&T===$n&&(bu=!0),_!==null&&(_=_.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ne=e,ee=m;T=t;var Ae=a;switch(ee.tag){case 1:if(ne=ee.payload,typeof ne=="function"){N=ne.call(Ae,N,T);break e}N=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ee.payload,T=typeof ne=="function"?ne.call(Ae,N,T):ne,T==null)break e;N=j({},N,T);break e;case 2:wa=!0}}T=m.callback,T!==null&&(e.flags|=64,R&&(e.flags|=8192),R=i.callbacks,R===null?i.callbacks=[T]:R.push(T))}else R={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},_===null?(C=_=R,v=N):_=_.next=R,f|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;R=m,m=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);_===null&&(v=N),i.baseState=v,i.firstBaseUpdate=C,i.lastBaseUpdate=_,r===null&&(i.shared.lanes=0),Na|=f,e.lanes=f,e.memoizedState=N}}function Wf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ff(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wf(a[e],t)}var Bn=$(null),Pi=$(0);function Pf(e,t){e=ha,Q(Pi,e),Q(Bn,t),ha=e|t.baseLanes}function xu(){Q(Pi,ha),Q(Bn,Bn.current)}function Su(){ha=Pi.current,Y(Bn),Y(Pi)}var Ta=0,ue=null,Se=null,Ue=null,Ii=!1,Hn=!1,cn=!1,er=0,Ql=0,Gn=null,_0=0;function Ne(){throw Error(c(321))}function ju(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!bt(e[a],t[a]))return!1;return!0}function Au(e,t,a,n,i,r){return Ta=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Nd:$d,cn=!1,r=a(n,i),cn=!1,Hn&&(r=ed(t,a,n,i)),If(e),r}function If(e){D.H=rr;var t=Se!==null&&Se.next!==null;if(Ta=0,Ue=Se=ue=null,Ii=!1,Ql=0,Gn=null,t)throw Error(c(300));e===null||Ze||(e=e.dependencies,e!==null&&Zi(e)&&(Ze=!0))}function ed(e,t,a,n){ue=e;var i=0;do{if(Hn&&(Gn=null),Ql=0,Hn=!1,25<=i)throw Error(c(301));if(i+=1,Ue=Se=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=G0,r=t(a,n)}while(Hn);return r}function q0(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Vl(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ue.flags|=1024),t}function Eu(){var e=er!==0;return er=0,e}function wu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Cu(e){if(Ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ii=!1}Ta=0,Ue=Se=ue=null,Hn=!1,Ql=er=0,Gn=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Be(){if(Se===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,Se=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(e){var t=Ql;return Ql+=1,Gn===null&&(Gn=[]),e=Zf(Gn,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Nd:$d),e}function tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vl(e);if(e.$$typeof===Z)return lt(e)}throw Error(c(438,String(e)))}function Tu(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ue.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zu(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=rt;return t.index++,a}function ua(e,t){return typeof t=="function"?t(e):t}function ar(e){var t=Be();return Ru(t,Se,e)}function Ru(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=f=null,v=null,C=t,_=!1;do{var N=C.lane&-536870913;if(N!==C.lane?(he&N)===N:(Ta&N)===N){var T=C.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),N===$n&&(_=!0);else if((Ta&T)===T){C=C.next,T===$n&&(_=!0);continue}else N={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(m=v=N,f=r):v=v.next=N,ue.lanes|=T,Na|=T;N=C.action,cn&&a(r,N),r=C.hasEagerState?C.eagerState:a(r,N)}else T={lane:N,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(m=v=T,f=r):v=v.next=T,ue.lanes|=N,Na|=N;C=C.next}while(C!==null&&C!==t);if(v===null?f=r:v.next=m,!bt(r,e.memoizedState)&&(Ze=!0,_&&(a=Un,a!==null)))throw a;e.memoizedState=r,e.baseState=f,e.baseQueue=v,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ou(e){var t=Be(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);bt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function td(e,t,a){var n=ue,i=Be(),r=ge;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var f=!bt((Se||i).memoizedState,a);f&&(i.memoizedState=a,Ze=!0),i=i.queue;var m=ld.bind(null,n,i,e);if(Xl(2048,8,m,[e]),i.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,kn(9,nr(),nd.bind(null,n,i,a,t),null),Ce===null)throw Error(c(349));r||(Ta&124)!==0||ad(n,t,a)}return a}function ad(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=zu(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function nd(e,t,a,n){t.value=a,t.getSnapshot=n,id(t)&&rd(e)}function ld(e,t,a){return a(function(){id(t)&&rd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!bt(e,a)}catch{return!0}}function rd(e){var t=Dn(e,2);t!==null&&wt(t,e,2)}function Mu(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),cn){Sa(!0);try{a()}finally{Sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t}function od(e,t,a,n){return e.baseState=a,Ru(e,Se,typeof n=="function"?n:ua)}function N0(e,t,a,n,i){if(ir(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};D.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,ud(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ud(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=D.T,f={};D.T=f;try{var m=a(i,n),v=D.S;v!==null&&v(f,m),cd(e,t,m)}catch(C){Du(e,t,C)}finally{D.T=r}}else try{r=a(i,n),cd(e,t,r)}catch(C){Du(e,t,C)}}function cd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){sd(e,t,n)},function(n){return Du(e,t,n)}):sd(e,t,a)}function sd(e,t,a){t.status="fulfilled",t.value=a,fd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ud(e,a)))}function Du(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,fd(t),t=t.next;while(t!==n)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function md(e,t){if(ge){var a=Ce.formState;if(a!==null){e:{var n=ue;if(ge){if(_e){t:{for(var i=_e,r=Vt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Gt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){_e=Gt(i.nextSibling),n=i.data==="F!";break e}}ln(n)}n=!1}n&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},a.queue=n,a=Dd.bind(null,ue,n),n.dispatch=a,n=Mu(!1),r=Uu.bind(null,ue,!1,n.queue),n=ft(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=N0.bind(null,ue,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function hd(e){var t=Be();return pd(t,Se,e)}function pd(e,t,a){if(t=Ru(e,t,dd)[0],e=ar(ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Vl(t)}catch(f){throw f===Hl?Wi:f}else n=t;t=Be();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,kn(9,nr(),$0.bind(null,i,a),null)),[n,r,e]}function $0(e,t){e.action=t}function gd(e){var t=Be(),a=Se;if(a!==null)return pd(t,a,e);Be(),t=t.memoizedState,a=Be();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function kn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ue.updateQueue,t===null&&(t=zu(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function nr(){return{destroy:void 0,resource:void 0}}function vd(){return Be().memoizedState}function lr(e,t,a,n){var i=ft();n=n===void 0?null:n,ue.flags|=e,i.memoizedState=kn(1|t,nr(),a,n)}function Xl(e,t,a,n){var i=Be();n=n===void 0?null:n;var r=i.memoizedState.inst;Se!==null&&n!==null&&ju(n,Se.memoizedState.deps)?i.memoizedState=kn(t,r,a,n):(ue.flags|=e,i.memoizedState=kn(1|t,r,a,n))}function yd(e,t){lr(8390656,8,e,t)}function bd(e,t){Xl(2048,8,e,t)}function xd(e,t){return Xl(4,2,e,t)}function Sd(e,t){return Xl(4,4,e,t)}function jd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,a){a=a!=null?a.concat([e]):null,Xl(4,4,jd.bind(null,t,e),a)}function _u(){}function Ed(e,t){var a=Be();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ju(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function wd(e,t){var a=Be();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ju(t,n[1]))return n[0];if(n=e(),cn){Sa(!0);try{e()}finally{Sa(!1)}}return a.memoizedState=[n,t],n}function qu(e,t,a){return a===void 0||(Ta&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Tm(),ue.lanes|=e,Na|=e,a)}function Cd(e,t,a,n){return bt(a,t)?a:Bn.current!==null?(e=qu(e,a,n),bt(e,t)||(Ze=!0),e):(Ta&42)===0?(Ze=!0,e.memoizedState=a):(e=Tm(),ue.lanes|=e,Na|=e,t)}function zd(e,t,a,n,i){var r=L.p;L.p=r!==0&&8>r?r:8;var f=D.T,m={};D.T=m,Uu(e,!1,t,a);try{var v=i(),C=D.S;if(C!==null&&C(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var _=D0(v,n);Zl(e,t,_,Et(e))}else Zl(e,t,n,Et(e))}catch(N){Zl(e,t,{then:function(){},status:"rejected",reason:N},Et())}finally{L.p=r,D.T=f}}function U0(){}function Nu(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Td(e).queue;zd(e,i,t,I,a===null?U0:function(){return Rd(e),a(n)})}function Td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=Td(e).next.queue;Zl(e,t,{},Et())}function $u(){return lt(fi)}function Od(){return Be().memoizedState}function Md(){return Be().memoizedState}function B0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Et();e=Ca(a);var n=za(t,e,a);n!==null&&(wt(n,t,a),kl(n,t,a)),t={cache:du()},e.payload=t;return}t=t.return}}function H0(e,t,a){var n=Et();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ir(e)?_d(t,a):(a=au(e,t,a,n),a!==null&&(wt(a,e,n),qd(a,t,n)))}function Dd(e,t,a){var n=Et();Zl(e,t,a,n)}function Zl(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ir(e))_d(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,m=r(f,a);if(i.hasEagerState=!0,i.eagerState=m,bt(m,f))return Yi(e,t,i,0),Ce===null&&ki(),!1}catch{}finally{}if(a=au(e,t,i,n),a!==null)return wt(a,e,n),qd(a,t,n),!0}return!1}function Uu(e,t,a,n){if(n={lane:2,revertLane:pc(),action:n,hasEagerState:!1,eagerState:null,next:null},ir(e)){if(t)throw Error(c(479))}else t=au(e,a,n,2),t!==null&&wt(t,e,2)}function ir(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function _d(e,t){Hn=Ii=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function qd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ks(e,a)}}var rr={readContext:lt,use:tr,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Nd={readContext:lt,use:tr,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:yd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,lr(4194308,4,jd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return lr(4194308,4,e,t)},useInsertionEffect:function(e,t){lr(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var n=e();if(cn){Sa(!0);try{e()}finally{Sa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ft();if(a!==void 0){var i=a(t);if(cn){Sa(!0);try{a(t)}finally{Sa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=H0.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Mu(e);var t=e.queue,a=Dd.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_u,useDeferredValue:function(e,t){var a=ft();return qu(a,e,t)},useTransition:function(){var e=Mu(!1);return e=zd.bind(null,ue,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ue,i=ft();if(ge){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ce===null)throw Error(c(349));(he&124)!==0||ad(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,yd(ld.bind(null,n,r,e),[e]),n.flags|=2048,kn(9,nr(),nd.bind(null,n,r,a,t),null),a},useId:function(){var e=ft(),t=Ce.identifierPrefix;if(ge){var a=ia,n=la;a=(n&~(1<<32-yt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=er++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=_0++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:$u,useFormState:md,useActionState:md,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Uu.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Tu,useCacheRefresh:function(){return ft().memoizedState=B0.bind(null,ue)}},$d={readContext:lt,use:tr,useCallback:Ed,useContext:lt,useEffect:bd,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:wd,useReducer:ar,useRef:vd,useState:function(){return ar(ua)},useDebugValue:_u,useDeferredValue:function(e,t){var a=Be();return Cd(a,Se.memoizedState,e,t)},useTransition:function(){var e=ar(ua)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:$u,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var a=Be();return od(a,Se,e,t)},useMemoCache:Tu,useCacheRefresh:Md},G0={readContext:lt,use:tr,useCallback:Ed,useContext:lt,useEffect:bd,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:wd,useReducer:Ou,useRef:vd,useState:function(){return Ou(ua)},useDebugValue:_u,useDeferredValue:function(e,t){var a=Be();return Se===null?qu(a,e,t):Cd(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ou(ua)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:$u,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var a=Be();return Se!==null?od(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Md},Yn=null,Kl=0;function or(e){var t=Kl;return Kl+=1,Yn===null&&(Yn=[]),Zf(Yn,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ur(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){var t=e._init;return t(e._payload)}function Bd(e){function t(A,S){if(e){var w=A.deletions;w===null?(A.deletions=[S],A.flags|=16):w.push(S)}}function a(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function n(A){for(var S=new Map;A!==null;)A.key!==null?S.set(A.key,A):S.set(A.index,A),A=A.sibling;return S}function i(A,S){return A=na(A,S),A.index=0,A.sibling=null,A}function r(A,S,w){return A.index=w,e?(w=A.alternate,w!==null?(w=w.index,w<S?(A.flags|=67108866,S):w):(A.flags|=67108866,S)):(A.flags|=1048576,S)}function f(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function m(A,S,w,q){return S===null||S.tag!==6?(S=lu(w,A.mode,q),S.return=A,S):(S=i(S,w),S.return=A,S)}function v(A,S,w,q){var J=w.type;return J===G?_(A,S,w.props.children,q,w.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Te&&Ud(J)===S.type)?(S=i(S,w.props),Jl(S,w),S.return=A,S):(S=Qi(w.type,w.key,w.props,null,A.mode,q),Jl(S,w),S.return=A,S)}function C(A,S,w,q){return S===null||S.tag!==4||S.stateNode.containerInfo!==w.containerInfo||S.stateNode.implementation!==w.implementation?(S=iu(w,A.mode,q),S.return=A,S):(S=i(S,w.children||[]),S.return=A,S)}function _(A,S,w,q,J){return S===null||S.tag!==7?(S=en(w,A.mode,q,J),S.return=A,S):(S=i(S,w),S.return=A,S)}function N(A,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=lu(""+S,A.mode,w),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return w=Qi(S.type,S.key,S.props,null,A.mode,w),Jl(w,S),w.return=A,w;case B:return S=iu(S,A.mode,w),S.return=A,S;case Te:var q=S._init;return S=q(S._payload),N(A,S,w)}if(Qe(S)||Le(S))return S=en(S,A.mode,w,null),S.return=A,S;if(typeof S.then=="function")return N(A,or(S),w);if(S.$$typeof===Z)return N(A,Ki(A,S),w);ur(A,S)}return null}function T(A,S,w,q){var J=S!==null?S.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return J!==null?null:m(A,S,""+w,q);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case U:return w.key===J?v(A,S,w,q):null;case B:return w.key===J?C(A,S,w,q):null;case Te:return J=w._init,w=J(w._payload),T(A,S,w,q)}if(Qe(w)||Le(w))return J!==null?null:_(A,S,w,q,null);if(typeof w.then=="function")return T(A,S,or(w),q);if(w.$$typeof===Z)return T(A,S,Ki(A,w),q);ur(A,w)}return null}function R(A,S,w,q,J){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return A=A.get(w)||null,m(S,A,""+q,J);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case U:return A=A.get(q.key===null?w:q.key)||null,v(S,A,q,J);case B:return A=A.get(q.key===null?w:q.key)||null,C(S,A,q,J);case Te:var ce=q._init;return q=ce(q._payload),R(A,S,w,q,J)}if(Qe(q)||Le(q))return A=A.get(w)||null,_(S,A,q,J,null);if(typeof q.then=="function")return R(A,S,w,or(q),J);if(q.$$typeof===Z)return R(A,S,w,Ki(S,q),J);ur(S,q)}return null}function ne(A,S,w,q){for(var J=null,ce=null,W=S,ae=S=0,Je=null;W!==null&&ae<w.length;ae++){W.index>ae?(Je=W,W=null):Je=W.sibling;var pe=T(A,W,w[ae],q);if(pe===null){W===null&&(W=Je);break}e&&W&&pe.alternate===null&&t(A,W),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe,W=Je}if(ae===w.length)return a(A,W),ge&&an(A,ae),J;if(W===null){for(;ae<w.length;ae++)W=N(A,w[ae],q),W!==null&&(S=r(W,S,ae),ce===null?J=W:ce.sibling=W,ce=W);return ge&&an(A,ae),J}for(W=n(W);ae<w.length;ae++)Je=R(W,A,ae,w[ae],q),Je!==null&&(e&&Je.alternate!==null&&W.delete(Je.key===null?ae:Je.key),S=r(Je,S,ae),ce===null?J=Je:ce.sibling=Je,ce=Je);return e&&W.forEach(function(Qa){return t(A,Qa)}),ge&&an(A,ae),J}function ee(A,S,w,q){if(w==null)throw Error(c(151));for(var J=null,ce=null,W=S,ae=S=0,Je=null,pe=w.next();W!==null&&!pe.done;ae++,pe=w.next()){W.index>ae?(Je=W,W=null):Je=W.sibling;var Qa=T(A,W,pe.value,q);if(Qa===null){W===null&&(W=Je);break}e&&W&&Qa.alternate===null&&t(A,W),S=r(Qa,S,ae),ce===null?J=Qa:ce.sibling=Qa,ce=Qa,W=Je}if(pe.done)return a(A,W),ge&&an(A,ae),J;if(W===null){for(;!pe.done;ae++,pe=w.next())pe=N(A,pe.value,q),pe!==null&&(S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return ge&&an(A,ae),J}for(W=n(W);!pe.done;ae++,pe=w.next())pe=R(W,A,ae,pe.value,q),pe!==null&&(e&&pe.alternate!==null&&W.delete(pe.key===null?ae:pe.key),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return e&&W.forEach(function(kg){return t(A,kg)}),ge&&an(A,ae),J}function Ae(A,S,w,q){if(typeof w=="object"&&w!==null&&w.type===G&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case U:e:{for(var J=w.key;S!==null;){if(S.key===J){if(J=w.type,J===G){if(S.tag===7){a(A,S.sibling),q=i(S,w.props.children),q.return=A,A=q;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Te&&Ud(J)===S.type){a(A,S.sibling),q=i(S,w.props),Jl(q,w),q.return=A,A=q;break e}a(A,S);break}else t(A,S);S=S.sibling}w.type===G?(q=en(w.props.children,A.mode,q,w.key),q.return=A,A=q):(q=Qi(w.type,w.key,w.props,null,A.mode,q),Jl(q,w),q.return=A,A=q)}return f(A);case B:e:{for(J=w.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===w.containerInfo&&S.stateNode.implementation===w.implementation){a(A,S.sibling),q=i(S,w.children||[]),q.return=A,A=q;break e}else{a(A,S);break}else t(A,S);S=S.sibling}q=iu(w,A.mode,q),q.return=A,A=q}return f(A);case Te:return J=w._init,w=J(w._payload),Ae(A,S,w,q)}if(Qe(w))return ne(A,S,w,q);if(Le(w)){if(J=Le(w),typeof J!="function")throw Error(c(150));return w=J.call(w),ee(A,S,w,q)}if(typeof w.then=="function")return Ae(A,S,or(w),q);if(w.$$typeof===Z)return Ae(A,S,Ki(A,w),q);ur(A,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,S!==null&&S.tag===6?(a(A,S.sibling),q=i(S,w),q.return=A,A=q):(a(A,S),q=lu(w,A.mode,q),q.return=A,A=q),f(A)):a(A,S)}return function(A,S,w,q){try{Kl=0;var J=Ae(A,S,w,q);return Yn=null,J}catch(W){if(W===Hl||W===Wi)throw W;var ce=xt(29,W,null,A.mode);return ce.lanes=q,ce.return=A,ce}finally{}}}var Ln=Bd(!0),Hd=Bd(!1),qt=$(null),Xt=null;function Ra(e){var t=e.alternate;Q(ke,ke.current&1),Q(qt,e),Xt===null&&(t===null||Bn.current!==null||t.memoizedState!==null)&&(Xt=e)}function Gd(e){if(e.tag===22){if(Q(ke,ke.current),Q(qt,e),Xt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Xt=e)}}else Oa()}function Oa(){Q(ke,ke.current),Q(qt,qt.current)}function ca(e){Y(qt),Xt===e&&(Xt=null),Y(ke)}var ke=$(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||zc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Bu(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hu={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Et(),i=Ca(n);i.payload=t,a!=null&&(i.callback=a),t=za(e,i,n),t!==null&&(wt(t,e,n),kl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Et(),i=Ca(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=za(e,i,n),t!==null&&(wt(t,e,n),kl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Et(),n=Ca(a);n.tag=2,t!=null&&(n.callback=t),t=za(e,n,a),t!==null&&(wt(t,e,a),kl(t,e,a))}};function kd(e,t,a,n,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,f):t.prototype&&t.prototype.isPureReactComponent?!Ml(a,n)||!Ml(i,r):!0}function Yd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Hu.enqueueReplaceState(t,t.state,null)}function sn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ld(e){sr(e)}function Qd(e){console.error(e)}function Vd(e){sr(e)}function fr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Xd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Gu(e,t,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){fr(e,t)},a}function Zd(e){return e=Ca(e),e.tag=3,e}function Kd(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Xd(t,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Xd(t,a,n),typeof i!="function"&&($a===null?$a=new Set([this]):$a.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function k0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&$l(t,a,i,!0),a=qt.current,a!==null){switch(a.tag){case 13:return Xt===null?sc():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===pu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),dc(e,n,i)),!1;case 22:return a.flags|=65536,n===pu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),dc(e,n,i)),!1}throw Error(c(435,a.tag))}return dc(e,n,i),sc(),!1}if(ge)return t=qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==uu&&(e=Error(c(422),{cause:n}),Nl(Ot(e,a)))):(n!==uu&&(t=Error(c(423),{cause:n}),Nl(Ot(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Ot(n,a),i=Gu(e.stateNode,n,i),yu(e,i),qe!==4&&(qe=2)),!1;var r=Error(c(520),{cause:n});if(r=Ot(r,a),ai===null?ai=[r]:ai.push(r),qe!==4&&(qe=2),t===null)return!0;n=Ot(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Gu(a.stateNode,n,e),yu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&($a===null||!$a.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Zd(i),Kd(i,e,a,n),yu(a,i),!1}a=a.return}while(a!==null);return!1}var Jd=Error(c(461)),Ze=!1;function Ie(e,t,a,n){t.child=e===null?Hd(t,null,a,n):Ln(t,e.child,a,n)}function Wd(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var f={};for(var m in n)m!=="ref"&&(f[m]=n[m])}else f=n;return on(t),n=Au(e,t,a,f,r,i),m=Eu(),e!==null&&!Ze?(wu(e,t,i),sa(e,t,i)):(ge&&m&&ru(t),t.flags|=1,Ie(e,t,n,i),t.child)}function Fd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!nu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Pd(e,t,r,n,i)):(e=Qi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ku(e,i)){var f=r.memoizedProps;if(a=a.compare,a=a!==null?a:Ml,a(f,n)&&e.ref===t.ref)return sa(e,t,i)}return t.flags|=1,e=na(r,n),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Ml(r,n)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=n=r,Ku(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,sa(e,t,i)}return ku(e,t,a,n,i)}function Id(e,t,a){var n=t.pendingProps,i=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return em(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ji(t,r!==null?r.cachePool:null),r!==null?Pf(t,r):xu(),Gd(t);else return t.lanes=t.childLanes=536870912,em(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Ji(t,r.cachePool),Pf(t,r),Oa(),t.memoizedState=null):(e!==null&&Ji(t,null),xu(),Oa());return Ie(e,t,i,a),t.child}function em(e,t,a,n){var i=hu();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ji(t,null),xu(),Gd(t),e!==null&&$l(e,t,n,!0),null}function dr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ku(e,t,a,n,i){return on(t),a=Au(e,t,a,n,void 0,i),n=Eu(),e!==null&&!Ze?(wu(e,t,i),sa(e,t,i)):(ge&&n&&ru(t),t.flags|=1,Ie(e,t,a,i),t.child)}function tm(e,t,a,n,i,r){return on(t),t.updateQueue=null,a=ed(t,n,a,i),If(e),n=Eu(),e!==null&&!Ze?(wu(e,t,r),sa(e,t,r)):(ge&&n&&ru(t),t.flags|=1,Ie(e,t,a,r),t.child)}function am(e,t,a,n,i){if(on(t),t.stateNode===null){var r=_n,f=a.contextType;typeof f=="object"&&f!==null&&(r=lt(f)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},gu(t),f=a.contextType,r.context=typeof f=="object"&&f!==null?lt(f):_n,r.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Bu(t,a,f,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Hu.enqueueReplaceState(r,r.state,null),Ll(t,n,r,i),Yl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=sn(a,m);r.props=v;var C=r.context,_=a.contextType;f=_n,typeof _=="object"&&_!==null&&(f=lt(_));var N=a.getDerivedStateFromProps;_=typeof N=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,_||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||C!==f)&&Yd(t,r,n,f),wa=!1;var T=t.memoizedState;r.state=T,Ll(t,n,r,i),Yl(),C=t.memoizedState,m||T!==C||wa?(typeof N=="function"&&(Bu(t,a,N,n),C=t.memoizedState),(v=wa||kd(t,a,v,n,T,C,f))?(_||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),r.props=n,r.state=C,r.context=f,n=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,vu(e,t),f=t.memoizedProps,_=sn(a,f),r.props=_,N=t.pendingProps,T=r.context,C=a.contextType,v=_n,typeof C=="object"&&C!==null&&(v=lt(C)),m=a.getDerivedStateFromProps,(C=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==N||T!==v)&&Yd(t,r,n,v),wa=!1,T=t.memoizedState,r.state=T,Ll(t,n,r,i),Yl();var R=t.memoizedState;f!==N||T!==R||wa||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof m=="function"&&(Bu(t,a,m,n),R=t.memoizedState),(_=wa||kd(t,a,_,n,T,R,v)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(C||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,R,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,R,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=R),r.props=n,r.state=R,r.context=v,n=_):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,dr(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=Ln(t,e.child,null,i),t.child=Ln(t,null,a,i)):Ie(e,t,a,i),t.memoizedState=r.state,e=t.child):e=sa(e,t,i),e}function nm(e,t,a,n){return ql(),t.flags|=256,Ie(e,t,a,n),t.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lu(e){return{baseLanes:e,cachePool:Qf()}}function Qu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function lm(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Ra(t):Oa(),ge){var m=_e,v;if(v=m){e:{for(v=m,m=Vt;v.nodeType!==8;){if(!m){m=null;break e}if(v=Gt(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:tn!==null?{id:la,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},v=xt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,ot=t,_e=null,v=!0):v=!1}v||ln(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return zc(m)?t.lanes=32:t.lanes=536870912,null;ca(t)}return m=n.children,n=n.fallback,i?(Oa(),i=t.mode,m=mr({mode:"hidden",children:m},i),n=en(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,i=t.child,i.memoizedState=Lu(a),i.childLanes=Qu(e,f,a),t.memoizedState=Yu,n):(Ra(t),Vu(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(Ra(t),t.flags&=-257,t=Xu(e,t,a)):t.memoizedState!==null?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),i=n.fallback,m=t.mode,n=mr({mode:"visible",children:n.children},m),i=en(i,m,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Ln(t,e.child,null,a),n=t.child,n.memoizedState=Lu(a),n.childLanes=Qu(e,f,a),t.memoizedState=Yu,t=i);else if(Ra(t),zc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var C=f.dgst;f=C,n=Error(c(419)),n.stack="",n.digest=f,Nl({value:n,source:null,stack:null}),t=Xu(e,t,a)}else if(Ze||$l(e,t,a,!1),f=(a&e.childLanes)!==0,Ze||f){if(f=Ce,f!==null&&(n=a&-a,n=(n&42)!==0?1:To(n),n=(n&(f.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane))throw v.retryLane=n,Dn(e,n),wt(f,e,n),Jd;m.data==="$?"||sc(),t=Xu(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,_e=Gt(m.nextSibling),ot=t,ge=!0,nn=null,Vt=!1,e!==null&&(Dt[_t++]=la,Dt[_t++]=ia,Dt[_t++]=tn,la=e.id,ia=e.overflow,tn=t),t=Vu(t,n.children),t.flags|=4096);return t}return i?(Oa(),i=n.fallback,m=t.mode,v=e.child,C=v.sibling,n=na(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,C!==null?i=na(C,i):(i=en(i,m,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,m=e.child.memoizedState,m===null?m=Lu(a):(v=m.cachePool,v!==null?(C=Ge._currentValue,v=v.parent!==C?{parent:C,pool:C}:v):v=Qf(),m={baseLanes:m.baseLanes|a,cachePool:v}),i.memoizedState=m,i.childLanes=Qu(e,f,a),t.memoizedState=Yu,n):(Ra(t),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Vu(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=xt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Xu(e,t,a){return Ln(t,e.child,null,a),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),su(e.return,t,a)}function Zu(e,t,a,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i)}function rm(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;if(Ie(e,t,n.children,a),n=ke.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,a,t);else if(e.tag===19)im(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Q(ke,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&cr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Zu(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&cr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Zu(t,!0,a,null,r);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($l(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=na(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ku(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zi(e)))}function Y0(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Ea(t,Ge,e.memoizedState.cache),ql();break;case 27:case 5:Ka(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?lm(e,t,a):(Ra(t),e=sa(e,t,a),e!==null?e.sibling:null);Ra(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||($l(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return rm(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ke,ke.current),n)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,a);case 24:Ea(t,Ge,e.memoizedState.cache)}return sa(e,t,a)}function om(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Ku(e,a)&&(t.flags&128)===0)return Ze=!1,Y0(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,ge&&(t.flags&1048576)!==0&&Uf(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")nu(n)?(e=sn(n,e),t.tag=1,t=am(null,t,n,e,a)):(t.tag=0,t=ku(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===le){t.tag=11,t=Wd(null,t,n,e,a);break e}else if(i===F){t.tag=14,t=Fd(null,t,n,e,a);break e}}throw t=It(n)||n,Error(c(306,t,""))}}return t;case 0:return ku(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=sn(n,t.pendingProps),am(e,t,n,i,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,vu(e,t),Ll(t,n,null,a);var f=t.memoizedState;if(n=f.cache,Ea(t,Ge,n),n!==r.cache&&fu(t,[Ge],a,!0),Yl(),n=f.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=nm(e,t,n,a);break e}else if(n!==i){i=Ot(Error(c(424)),t),Nl(i),t=nm(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Gt(e.firstChild),ot=t,ge=!0,nn=null,Vt=!0,a=Hd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ql(),n===i){t=sa(e,t,a);break e}Ie(e,t,n,a)}t=t.child}return t;case 26:return dr(e,t),e===null?(a=fh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,n=zr(te.current).createElement(a),n[nt]=t,n[ct]=e,tt(n,a,e),Xe(n),t.stateNode=n):t.memoizedState=fh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ka(t),e===null&&ge&&(n=t.stateNode=uh(t.type,t.pendingProps,te.current),ot=t,Vt=!0,i=_e,Ha(t.type)?(Tc=i,_e=Gt(n.firstChild)):_e=i),Ie(e,t,t.pendingProps.children,a),dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=n=_e)&&(n=gg(n,t.type,t.pendingProps,Vt),n!==null?(t.stateNode=n,ot=t,_e=Gt(n.firstChild),Vt=!1,i=!0):i=!1),i||ln(t)),Ka(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,n=r.children,Ec(i,r)?n=null:f!==null&&Ec(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Au(e,t,q0,null,null,a),fi._currentValue=i),dr(e,t),Ie(e,t,n,a),t.child;case 6:return e===null&&ge&&((e=a=_e)&&(a=vg(a,t.pendingProps,Vt),a!==null?(t.stateNode=a,ot=t,_e=null,e=!0):e=!1),e||ln(t)),null;case 13:return lm(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ln(t,null,n,a):Ie(e,t,n,a),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,a);case 7:return Ie(e,t,t.pendingProps,a),t.child;case 8:return Ie(e,t,t.pendingProps.children,a),t.child;case 12:return Ie(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ea(t,t.type,n.value),Ie(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,on(t),i=lt(i),n=n(i),t.flags|=1,Ie(e,t,n,a),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,a);case 15:return Pd(e,t,t.type,t.pendingProps,a);case 19:return rm(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=mr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=na(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Id(e,t,a);case 24:return on(t),n=lt(Ge),e===null?(i=hu(),i===null&&(i=Ce,r=du(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},gu(t),Ea(t,Ge,i)):((e.lanes&a)!==0&&(vu(e,t),Ll(t,null,null,a),Yl()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,Ge,n)):(n=r.cache,Ea(t,Ge,n),n!==i.cache&&fu(t,[Ge],a,!0))),Ie(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function fa(e){e.flags|=4}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gh(t)){if(t=qt.current,t!==null&&((he&4194048)===he?Xt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Xt))throw Gl=pu,Vf;e.flags|=8192}}function hr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hs():536870912,e.lanes|=t,Zn|=t)}function Wl(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function L0(e,t,a){var n=t.pendingProps;switch(ou(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),oa(Ge),at(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_l(t)?fa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gf())),De(t),null;case 26:return a=t.memoizedState,e===null?(fa(t),a!==null?(De(t),um(t,a)):(De(t),t.flags&=-16777217)):a?a!==e.memoizedState?(fa(t),De(t),um(t,a)):(De(t),t.flags&=-16777217):(e.memoizedProps!==n&&fa(t),De(t),t.flags&=-16777217),null;case 27:ea(t),a=te.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&fa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return De(t),null}e=P.current,_l(t)?Bf(t):(e=uh(i,n,a),t.stateNode=e,fa(t))}return De(t),null;case 5:if(ea(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&fa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return De(t),null}if(e=P.current,_l(t))Bf(t);else{switch(i=zr(te.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[nt]=t,e[ct]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(tt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&fa(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&fa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=te.current,_l(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ot,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||th(e.nodeValue,a)),e||ln(t)}else e=zr(e).createTextNode(n),e[nt]=t,t.stateNode=e}return De(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=_l(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[nt]=t}else ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ca(t),t):(ca(t),null)}if(ca(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),hr(t,t.updateQueue),De(t),null;case 4:return at(),e===null&&bc(t.stateNode.containerInfo),De(t),null;case 10:return oa(t.type),De(t),null;case 19:if(Y(ke),i=t.memoizedState,i===null)return De(t),null;if(n=(t.flags&128)!==0,r=i.rendering,r===null)if(n)Wl(i,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=cr(e),r!==null){for(t.flags|=128,Wl(i,!1),e=r.updateQueue,t.updateQueue=e,hr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$f(a,e),a=a.sibling;return Q(ke,ke.current&1|2),t.child}e=e.sibling}i.tail!==null&&Qt()>vr&&(t.flags|=128,n=!0,Wl(i,!1),t.lanes=4194304)}else{if(!n)if(e=cr(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,hr(t,e),Wl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ge)return De(t),null}else 2*Qt()-i.renderingStartTime>vr&&a!==536870912&&(t.flags|=128,n=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Qt(),t.sibling=null,e=ke.current,Q(ke,n?e&1|2:e&1),t):(De(t),null);case 22:case 23:return ca(t),Su(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),a=t.updateQueue,a!==null&&hr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Y(un),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),oa(Ge),De(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Q0(e,t){switch(ou(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oa(Ge),at(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ea(t),null;case 13:if(ca(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(ke),null;case 4:return at(),null;case 10:return oa(t.type),null;case 22:case 23:return ca(t),Su(),e!==null&&Y(un),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return oa(Ge),null;case 25:return null;default:return null}}function cm(e,t){switch(ou(t),t.tag){case 3:oa(Ge),at();break;case 26:case 27:case 5:ea(t);break;case 4:at();break;case 13:ca(t);break;case 19:Y(ke);break;case 10:oa(t.type);break;case 22:case 23:ca(t),Su(),e!==null&&Y(un);break;case 24:oa(Ge)}}function Fl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,f=a.inst;n=r(),f.destroy=n}a=a.next}while(a!==i)}}catch(m){we(t,t.return,m)}}function Ma(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var f=n.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var v=a,C=m;try{C()}catch(_){we(i,v,_)}}}n=n.next}while(n!==r)}}catch(_){we(t,t.return,_)}}function sm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ff(t,a)}catch(n){we(e,e.return,n)}}}function fm(e,t,a){a.props=sn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){we(e,t,n)}}function Pl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){we(e,t,i)}}function Zt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){we(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){we(e,t,i)}else a.current=null}function dm(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){we(e,e.return,i)}}function Ju(e,t,a){try{var n=e.stateNode;fg(n,e.type,a,t),n[ct]=t}catch(i){we(e,e.return,i)}}function mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Cr));else if(n!==4&&(n===27&&Ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Fu(e,t,a),e=e.sibling;e!==null;)Fu(e,t,a),e=e.sibling}function pr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(pr(e,t,a),e=e.sibling;e!==null;)pr(e,t,a),e=e.sibling}function hm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,n,a),t[nt]=e,t[ct]=a}catch(r){we(e,e.return,r)}}var da=!1,$e=!1,Pu=!1,pm=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function V0(e,t){if(e=e.containerInfo,jc=_r,e=Cf(e),Wo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var f=0,m=-1,v=-1,C=0,_=0,N=e,T=null;t:for(;;){for(var R;N!==a||i!==0&&N.nodeType!==3||(m=f+i),N!==r||n!==0&&N.nodeType!==3||(v=f+n),N.nodeType===3&&(f+=N.nodeValue.length),(R=N.firstChild)!==null;)T=N,N=R;for(;;){if(N===e)break t;if(T===a&&++C===i&&(m=f),T===r&&++_===n&&(v=f),(R=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=R}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:e,selectionRange:a},_r=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var ne=sn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(ne,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){we(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function gm(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a),n&4&&Fl(5,a);break;case 1:if(Da(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){we(a,a.return,f)}else{var i=sn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){we(a,a.return,f)}}n&64&&sm(a),n&512&&Pl(a,a.return);break;case 3:if(Da(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ff(e,t)}catch(f){we(a,a.return,f)}}break;case 27:t===null&&n&4&&hm(a);case 26:case 5:Da(e,a),t===null&&n&4&&dm(a),n&512&&Pl(a,a.return);break;case 12:Da(e,a);break;case 13:Da(e,a),n&4&&bm(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eg.bind(null,a),yg(e,a))));break;case 22:if(n=a.memoizedState!==null||da,!n){t=t!==null&&t.memoizedState!==null||$e,i=da;var r=$e;da=n,($e=t)&&!r?_a(e,a,(a.subtreeFlags&8772)!==0):Da(e,a),da=i,$e=r}break;case 30:break;default:Da(e,a)}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,dt=!1;function ma(e,t,a){for(a=a.child;a!==null;)ym(e,t,a),a=a.sibling}function ym(e,t,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(bl,a)}catch{}switch(a.tag){case 26:$e||Zt(a,t),ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Zt(a,t);var n=Oe,i=dt;Ha(a.type)&&(Oe=a.stateNode,dt=!1),ma(e,t,a),oi(a.stateNode),Oe=n,dt=i;break;case 5:$e||Zt(a,t);case 6:if(n=Oe,i=dt,Oe=null,ma(e,t,a),Oe=n,dt=i,Oe!==null)if(dt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(a.stateNode)}catch(r){we(a,t,r)}else try{Oe.removeChild(a.stateNode)}catch(r){we(a,t,r)}break;case 18:Oe!==null&&(dt?(e=Oe,rh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pi(e)):rh(Oe,a.stateNode));break;case 4:n=Oe,i=dt,Oe=a.stateNode.containerInfo,dt=!0,ma(e,t,a),Oe=n,dt=i;break;case 0:case 11:case 14:case 15:$e||Ma(2,a,t),$e||Ma(4,a,t),ma(e,t,a);break;case 1:$e||(Zt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&fm(a,t,n)),ma(e,t,a);break;case 21:ma(e,t,a);break;case 22:$e=(n=$e)||a.memoizedState!==null,ma(e,t,a),$e=n;break;default:ma(e,t,a)}}function bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pi(e)}catch(a){we(t,t.return,a)}}function X0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pm),t;default:throw Error(c(435,e.tag))}}function Iu(e,t){var a=X0(e);t.forEach(function(n){var i=tg.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function St(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Ha(m.type)){Oe=m.stateNode,dt=!1;break e}break;case 5:Oe=m.stateNode,dt=!1;break e;case 3:case 4:Oe=m.stateNode.containerInfo,dt=!0;break e}m=m.return}if(Oe===null)throw Error(c(160));ym(r,f,i),Oe=null,dt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xm(t,e),t=t.sibling}var Ht=null;function xm(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),jt(e),n&4&&(Ma(3,e,e.return),Fl(3,e),Ma(5,e,e.return));break;case 1:St(t,e),jt(e),n&512&&($e||a===null||Zt(a,a.return)),n&64&&da&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ht;if(St(t,e),jt(e),n&512&&($e||a===null||Zt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[jl]||r[nt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),tt(r,n,a),r[nt]=e,Xe(r),n=r;break e;case"link":var f=hh("link","href",i).get(n+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;case"meta":if(f=hh("meta","content",i).get(n+(a.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}r=i.createElement(n),tt(r,n,a),i.head.appendChild(r);break;default:throw Error(c(468,n))}r[nt]=e,Xe(r),n=r}e.stateNode=n}else ph(i,e.type,e.stateNode);else e.stateNode=mh(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?ph(i,e.type,e.stateNode):mh(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:St(t,e),jt(e),n&512&&($e||a===null||Zt(a,a.return)),a!==null&&n&4&&Ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(St(t,e),jt(e),n&512&&($e||a===null||Zt(a,a.return)),e.flags&32){i=e.stateNode;try{wn(i,"")}catch(R){we(e,e.return,R)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Ju(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Pu=!0);break;case 6:if(St(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(R){we(e,e.return,R)}}break;case 3:if(Or=null,i=Ht,Ht=Tr(t.containerInfo),St(t,e),Ht=i,jt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(R){we(e,e.return,R)}Pu&&(Pu=!1,Sm(e));break;case 4:n=Ht,Ht=Tr(e.stateNode.containerInfo),St(t,e),jt(e),Ht=n;break;case 12:St(t,e),jt(e);break;case 13:St(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=Qt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Iu(e,n)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,C=da,_=$e;if(da=C||i,$e=_||v,St(t,e),$e=_,da=C,jt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||da||$e||fn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=v.stateNode;var N=v.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null;m.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(R){we(v,v.return,R)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(R){we(v,v.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Iu(e,a))));break;case 19:St(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Iu(e,n)));break;case 30:break;case 21:break;default:St(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(mm(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=Wu(e);pr(e,r,i);break;case 5:var f=a.stateNode;a.flags&32&&(wn(f,""),a.flags&=-33);var m=Wu(e);pr(e,m,f);break;case 3:case 4:var v=a.stateNode.containerInfo,C=Wu(e);Fu(e,C,v);break;default:throw Error(c(161))}}catch(_){we(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gm(e,t.alternate,t),t=t.sibling}function fn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ma(4,t,t.return),fn(t);break;case 1:Zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&fm(t,t.return,a),fn(t);break;case 27:oi(t.stateNode);case 26:case 5:Zt(t,t.return),fn(t);break;case 22:t.memoizedState===null&&fn(t);break;case 30:fn(t);break;default:fn(t)}e=e.sibling}}function _a(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:_a(i,r,a),Fl(4,r);break;case 1:if(_a(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){we(n,n.return,C)}if(n=r,i=n.updateQueue,i!==null){var m=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Wf(v[i],m)}catch(C){we(n,n.return,C)}}a&&f&64&&sm(r),Pl(r,r.return);break;case 27:hm(r);case 26:case 5:_a(i,r,a),a&&n===null&&f&4&&dm(r),Pl(r,r.return);break;case 12:_a(i,r,a);break;case 13:_a(i,r,a),a&&f&4&&bm(i,r);break;case 22:r.memoizedState===null&&_a(i,r,a),Pl(r,r.return);break;case 30:break;default:_a(i,r,a)}t=t.sibling}}function ec(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ul(a))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e))}function Kt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(e,t,a,n),t=t.sibling}function jm(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,a,n),i&2048&&Fl(9,t);break;case 1:Kt(e,t,a,n);break;case 3:Kt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e)));break;case 12:if(i&2048){Kt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){we(t,t.return,v)}}else Kt(e,t,a,n);break;case 13:Kt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Kt(e,t,a,n):Il(e,t):r._visibility&2?Kt(e,t,a,n):(r._visibility|=2,Qn(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&ec(f,t);break;case 24:Kt(e,t,a,n),i&2048&&tc(t.alternate,t);break;default:Kt(e,t,a,n)}}function Qn(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,m=a,v=n,C=f.flags;switch(f.tag){case 0:case 11:case 15:Qn(r,f,m,v,i),Fl(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Qn(r,f,m,v,i):Il(r,f):(_._visibility|=2,Qn(r,f,m,v,i)),i&&C&2048&&ec(f.alternate,f);break;case 24:Qn(r,f,m,v,i),i&&C&2048&&tc(f.alternate,f);break;default:Qn(r,f,m,v,i)}t=t.sibling}}function Il(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Il(a,n),i&2048&&ec(n.alternate,n);break;case 24:Il(a,n),i&2048&&tc(n.alternate,n);break;default:Il(a,n)}t=t.sibling}}var ei=8192;function Vn(e){if(e.subtreeFlags&ei)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 26:Vn(e),e.flags&ei&&e.memoizedState!==null&&Mg(Ht,e.memoizedState,e.memoizedProps);break;case 5:Vn(e);break;case 3:case 4:var t=Ht;Ht=Tr(e.stateNode.containerInfo),Vn(e),Ht=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ei,ei=16777216,Vn(e),ei=t):Vn(e));break;default:Vn(e)}}function Em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,Cm(n,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gr(e)):ti(e);break;default:ti(e)}}function gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ke=n,Cm(n,e)}Em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ma(8,t,t.return),gr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,gr(t));break;default:gr(t)}e=e.sibling}}function Cm(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:Ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ul(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ke=n;else e:for(a=e;Ke!==null;){n=Ke;var i=n.sibling,r=n.return;if(vm(n),n===a){Ke=null;break e}if(i!==null){i.return=r,Ke=i;break e}Ke=r}}}var Z0={getCacheForType:function(e){var t=lt(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},K0=typeof WeakMap=="function"?WeakMap:Map,be=0,Ce=null,de=null,he=0,xe=0,At=null,qa=!1,Xn=!1,ac=!1,ha=0,qe=0,Na=0,dn=0,nc=0,Nt=0,Zn=0,ai=null,mt=null,lc=!1,ic=0,vr=1/0,yr=null,$a=null,et=0,Ua=null,Kn=null,Jn=0,rc=0,oc=null,zm=null,ni=0,uc=null;function Et(){if((be&2)!==0&&he!==0)return he&-he;if(D.T!==null){var e=$n;return e!==0?e:pc()}return Ys()}function Tm(){Nt===0&&(Nt=(he&536870912)===0||ge?Bs():536870912);var e=qt.current;return e!==null&&(e.flags|=32),Nt}function wt(e,t,a){(e===Ce&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Wn(e,0),Ba(e,he,Nt,!1)),Sl(e,a),((be&2)===0||e!==Ce)&&(e===Ce&&((be&2)===0&&(dn|=a),qe===4&&Ba(e,he,Nt,!1)),Jt(e))}function Rm(e,t,a){if((be&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||xl(e,t),i=n?F0(e,t):fc(e,t,!0),r=n;do{if(i===0){Xn&&!n&&Ba(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!J0(a)){i=fc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=ai;var v=m.current.memoizedState.isDehydrated;if(v&&(Wn(m,f).flags|=256),f=fc(m,f,!1),f!==2){if(ac&&!v){m.errorRecoveryDisabledLanes|=r,dn|=r,i=4;break e}r=mt,mt=i,r!==null&&(mt===null?mt=r:mt.push.apply(mt,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Wn(e,0),Ba(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ba(n,t,Nt,!qa);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=ic+300-Qt(),10<i)){if(Ba(n,t,Nt,!qa),Ri(n,0,!0)!==0)break e;n.timeoutHandle=lh(Om.bind(null,n,a,mt,yr,lc,t,Nt,dn,Zn,qa,r,2,-0,0),i);break e}Om(n,a,mt,yr,lc,t,Nt,dn,Zn,qa,r,0,-0,0)}}break}while(!0);Jt(e)}function Om(e,t,a,n,i,r,f,m,v,C,_,N,T,R){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&(si={stylesheets:null,count:0,unsuspend:Og},Am(t),N=Dg(),N!==null)){e.cancelPendingCommit=N(Um.bind(null,e,t,r,a,n,i,f,m,v,_,1,T,R)),Ba(e,r,f,!C);return}Um(e,t,r,a,n,i,f,m,v)}function J0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!bt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ba(e,t,a,n){t&=~nc,t&=~dn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-yt(i),f=1<<r;n[r]=-1,i&=~f}a!==0&&Gs(e,a,t)}function br(){return(be&6)===0?(li(0),!1):!0}function cc(){if(de!==null){if(xe===0)var e=de.return;else e=de,ra=rn=null,Cu(e),Yn=null,Kl=0,e=de;for(;e!==null;)cm(e.alternate,e),e=e.return;de=null}}function Wn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,mg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),cc(),Ce=e,de=a=na(e.current,null),he=t,xe=0,At=null,qa=!1,Xn=xl(e,t),ac=!1,Zn=Nt=nc=dn=Na=qe=0,mt=ai=null,lc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-yt(n),r=1<<i;t|=e[i],n&=~r}return ha=t,ki(),a}function Mm(e,t){ue=null,D.H=rr,t===Hl||t===Wi?(t=Kf(),xe=3):t===Vf?(t=Kf(),xe=4):xe=t===Jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,de===null&&(qe=1,fr(e,Ot(t,e.current)))}function Dm(){var e=D.H;return D.H=rr,e===null?rr:e}function _m(){var e=D.A;return D.A=Z0,e}function sc(){qe=4,qa||(he&4194048)!==he&&qt.current!==null||(Xn=!0),(Na&134217727)===0&&(dn&134217727)===0||Ce===null||Ba(Ce,he,Nt,!1)}function fc(e,t,a){var n=be;be|=2;var i=Dm(),r=_m();(Ce!==e||he!==t)&&(yr=null,Wn(e,t)),t=!1;var f=qe;e:do try{if(xe!==0&&de!==null){var m=de,v=At;switch(xe){case 8:cc(),f=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(t=!0);var C=xe;if(xe=0,At=null,Fn(e,m,v,C),a&&Xn){f=0;break e}break;default:C=xe,xe=0,At=null,Fn(e,m,v,C)}}W0(),f=qe;break}catch(_){Mm(e,_)}while(!0);return t&&e.shellSuspendCounter++,ra=rn=null,be=n,D.H=i,D.A=r,de===null&&(Ce=null,he=0,ki()),f}function W0(){for(;de!==null;)qm(de)}function F0(e,t){var a=be;be|=2;var n=Dm(),i=_m();Ce!==e||he!==t?(yr=null,vr=Qt()+500,Wn(e,t)):Xn=xl(e,t);e:do try{if(xe!==0&&de!==null){t=de;var r=At;t:switch(xe){case 1:xe=0,At=null,Fn(e,t,r,1);break;case 2:case 9:if(Xf(r)){xe=0,At=null,Nm(t);break}t=function(){xe!==2&&xe!==9||Ce!==e||(xe=7),Jt(e)},r.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Xf(r)?(xe=0,At=null,Nm(t)):(xe=0,At=null,Fn(e,t,r,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var m=de;if(!f||gh(f)){xe=0,At=null;var v=m.sibling;if(v!==null)de=v;else{var C=m.return;C!==null?(de=C,xr(C)):de=null}break t}}xe=0,At=null,Fn(e,t,r,5);break;case 6:xe=0,At=null,Fn(e,t,r,6);break;case 8:cc(),qe=6;break e;default:throw Error(c(462))}}P0();break}catch(_){Mm(e,_)}while(!0);return ra=rn=null,D.H=n,D.A=i,be=a,de!==null?0:(Ce=null,he=0,ki(),qe)}function P0(){for(;de!==null&&!xp();)qm(de)}function qm(e){var t=om(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function Nm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=tm(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=tm(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Cu(t);default:cm(a,t),t=de=$f(t,ha),t=om(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function Fn(e,t,a,n){ra=rn=null,Cu(t),Yn=null,Kl=0;var i=t.return;try{if(k0(e,i,t,a,he)){qe=1,fr(e,Ot(a,e.current)),de=null;return}}catch(r){if(i!==null)throw de=i,r;qe=1,fr(e,Ot(a,e.current)),de=null;return}t.flags&32768?(ge||n===1?e=!0:Xn||(he&536870912)!==0?e=!1:(qa=e=!0,(n===2||n===9||n===3||n===6)&&(n=qt.current,n!==null&&n.tag===13&&(n.flags|=16384))),$m(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){$m(t,qa);return}e=t.return;var a=L0(t.alternate,t,ha);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);qe===0&&(qe=5)}function $m(e,t){do{var a=Q0(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);qe=6,de=null}function Um(e,t,a,n,i,r,f,m,v){e.cancelPendingCommit=null;do Sr();while(et!==0);if((be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=tu,Op(e,a,r,f,m,v),e===Ce&&(de=Ce=null,he=0),Kn=t,Ua=e,Jn=a,rc=r,oc=i,zm=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ag(Ci,function(){return Ym(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,i=L.p,L.p=2,f=be,be|=4;try{V0(e,t,a)}finally{be=f,L.p=i,D.T=n}}et=1,Bm(),Hm(),Gm()}}function Bm(){if(et===1){et=0;var e=Ua,t=Kn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=L.p;L.p=2;var i=be;be|=4;try{xm(t,e);var r=Ac,f=Cf(e.containerInfo),m=r.focusedElem,v=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&wf(m.ownerDocument.documentElement,m)){if(v!==null&&Wo(m)){var C=v.start,_=v.end;if(_===void 0&&(_=C),"selectionStart"in m)m.selectionStart=C,m.selectionEnd=Math.min(_,m.value.length);else{var N=m.ownerDocument||document,T=N&&N.defaultView||window;if(T.getSelection){var R=T.getSelection(),ne=m.textContent.length,ee=Math.min(v.start,ne),Ae=v.end===void 0?ee:Math.min(v.end,ne);!R.extend&&ee>Ae&&(f=Ae,Ae=ee,ee=f);var A=Ef(m,ee),S=Ef(m,Ae);if(A&&S&&(R.rangeCount!==1||R.anchorNode!==A.node||R.anchorOffset!==A.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var w=N.createRange();w.setStart(A.node,A.offset),R.removeAllRanges(),ee>Ae?(R.addRange(w),R.extend(S.node,S.offset)):(w.setEnd(S.node,S.offset),R.addRange(w))}}}}for(N=[],R=m;R=R.parentNode;)R.nodeType===1&&N.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<N.length;m++){var q=N[m];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}_r=!!jc,Ac=jc=null}finally{be=i,L.p=n,D.T=a}}e.current=t,et=2}}function Hm(){if(et===2){et=0;var e=Ua,t=Kn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=L.p;L.p=2;var i=be;be|=4;try{gm(e,t.alternate,t)}finally{be=i,L.p=n,D.T=a}}et=3}}function Gm(){if(et===4||et===3){et=0,Sp();var e=Ua,t=Kn,a=Jn,n=zm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,Kn=Ua=null,km(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&($a=null),Ro(a),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,i=L.p,L.p=2,D.T=null;try{for(var r=e.onRecoverableError,f=0;f<n.length;f++){var m=n[f];r(m.value,{componentStack:m.stack})}}finally{D.T=t,L.p=i}}(Jn&3)!==0&&Sr(),Jt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===uc?ni++:(ni=0,uc=e):ni=0,li(0)}}function km(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ul(t)))}function Sr(e){return Bm(),Hm(),Gm(),Ym()}function Ym(){if(et!==5)return!1;var e=Ua,t=rc;rc=0;var a=Ro(Jn),n=D.T,i=L.p;try{L.p=32>a?32:a,D.T=null,a=oc,oc=null;var r=Ua,f=Jn;if(et=0,Kn=Ua=null,Jn=0,(be&6)!==0)throw Error(c(331));var m=be;if(be|=4,wm(r.current),jm(r,r.current,f,a),be=m,li(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(bl,r)}catch{}return!0}finally{L.p=i,D.T=n,km(e,t)}}function Lm(e,t,a){t=Ot(a,t),t=Gu(e.stateNode,t,2),e=za(e,t,2),e!==null&&(Sl(e,2),Jt(e))}function we(e,t,a){if(e.tag===3)Lm(e,e,a);else for(;t!==null;){if(t.tag===3){Lm(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($a===null||!$a.has(n))){e=Ot(a,e),a=Zd(2),n=za(t,a,2),n!==null&&(Kd(a,n,t,e),Sl(n,2),Jt(n));break}}t=t.return}}function dc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new K0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(ac=!0,i.add(a),e=I0.bind(null,e,t,a),t.then(e,e))}function I0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(he&a)===a&&(qe===4||qe===3&&(he&62914560)===he&&300>Qt()-ic?(be&2)===0&&Wn(e,0):nc|=a,Zn===he&&(Zn=0)),Jt(e)}function Qm(e,t){t===0&&(t=Hs()),e=Dn(e,t),e!==null&&(Sl(e,t),Jt(e))}function eg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qm(e,a)}function tg(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Qm(e,a)}function ag(e,t){return wo(e,t)}var jr=null,Pn=null,mc=!1,Ar=!1,hc=!1,mn=0;function Jt(e){e!==Pn&&e.next===null&&(Pn===null?jr=Pn=e:Pn=Pn.next=e),Ar=!0,mc||(mc=!0,lg())}function li(e,t){if(!hc&&Ar){hc=!0;do for(var a=!1,n=jr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var f=n.suspendedLanes,m=n.pingedLanes;r=(1<<31-yt(42|e)+1)-1,r&=i&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Km(n,r))}else r=he,r=Ri(n,n===Ce?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||xl(n,r)||(a=!0,Km(n,r));n=n.next}while(a);hc=!1}}function ng(){Vm()}function Vm(){Ar=mc=!1;var e=0;mn!==0&&(dg()&&(e=mn),mn=0);for(var t=Qt(),a=null,n=jr;n!==null;){var i=n.next,r=Xm(n,t);r===0?(n.next=null,a===null?jr=i:a.next=i,i===null&&(Pn=a)):(a=n,(e!==0||(r&3)!==0)&&(Ar=!0)),n=i}li(e)}function Xm(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-yt(r),m=1<<f,v=i[f];v===-1?((m&a)===0||(m&n)!==0)&&(i[f]=Rp(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=Ce,a=he,a=Ri(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Co(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||xl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Co(n),Ro(a)){case 2:case 8:a=$s;break;case 32:a=Ci;break;case 268435456:a=Us;break;default:a=Ci}return n=Zm.bind(null,e),a=wo(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Co(n),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sr()&&e.callbackNode!==a)return null;var n=he;return n=Ri(e,e===Ce?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Rm(e,n,t),Xm(e,Qt()),e.callbackNode!=null&&e.callbackNode===a?Zm.bind(null,e):null)}function Km(e,t){if(Sr())return null;Rm(e,t,!0)}function lg(){hg(function(){(be&6)!==0?wo(Ns,ng):Vm()})}function pc(){return mn===0&&(mn=Bs()),mn}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qi(""+e)}function Wm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ig(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=Jm((i[ct]||null).action),f=n.submitter;f&&(t=(t=f[ct]||null)?Jm(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var m=new Bi("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(mn!==0){var v=f?Wm(i,f):new FormData(i);Nu(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=f?Wm(i,f):new FormData(i),Nu(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var gc=0;gc<eu.length;gc++){var vc=eu[gc],rg=vc.toLowerCase(),og=vc[0].toUpperCase()+vc.slice(1);Bt(rg,"on"+og)}Bt(Rf,"onAnimationEnd"),Bt(Of,"onAnimationIteration"),Bt(Mf,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(E0,"onTransitionRun"),Bt(w0,"onTransitionStart"),Bt(C0,"onTransitionCancel"),Bt(Df,"onTransitionEnd"),jn("onMouseEnter",["mouseout","mouseover"]),jn("onMouseLeave",["mouseout","mouseover"]),jn("onPointerEnter",["pointerout","pointerover"]),jn("onPointerLeave",["pointerout","pointerover"]),Wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function Fm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var f=n.length-1;0<=f;f--){var m=n[f],v=m.instance,C=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=C;try{r(i)}catch(_){sr(_)}i.currentTarget=null,r=v}else for(f=0;f<n.length;f++){if(m=n[f],v=m.instance,C=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=C;try{r(i)}catch(_){sr(_)}i.currentTarget=null,r=v}}}}function me(e,t){var a=t[Oo];a===void 0&&(a=t[Oo]=new Set);var n=e+"__bubble";a.has(n)||(Pm(t,e,2,!1),a.add(n))}function yc(e,t,a){var n=0;t&&(n|=4),Pm(a,e,n,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function bc(e){if(!e[Er]){e[Er]=!0,Qs.forEach(function(a){a!=="selectionchange"&&(ug.has(a)||yc(a,!1,e),yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,yc("selectionchange",!1,t))}}function Pm(e,t,a,n){switch(jh(t)){case 2:var i=Ng;break;case 8:i=$g;break;default:i=_c}a=i.bind(null,t,a,e),i=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function xc(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var m=n.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=n.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=bn(m),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){n=r=f;continue e}m=m.parentNode}}n=n.return}lf(function(){var C=r,_=Ho(a),N=[];e:{var T=_f.get(e);if(T!==void 0){var R=Bi,ne=e;switch(e){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":R=a0;break;case"focusin":ne="focus",R=Vo;break;case"focusout":ne="blur",R=Vo;break;case"beforeblur":case"afterblur":R=Vo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=i0;break;case Rf:case Of:case Mf:R=Zp;break;case Df:R=o0;break;case"scroll":case"scrollend":R=Yp;break;case"wheel":R=c0;break;case"copy":case"cut":case"paste":R=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=sf;break;case"toggle":case"beforetoggle":R=f0}var ee=(t&4)!==0,Ae=!ee&&(e==="scroll"||e==="scrollend"),A=ee?T!==null?T+"Capture":null:T;ee=[];for(var S=C,w;S!==null;){var q=S;if(w=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||w===null||A===null||(q=El(S,A),q!=null&&ee.push(ri(S,q,w))),Ae)break;S=S.return}0<ee.length&&(T=new R(T,ne,null,a,_),N.push({event:T,listeners:ee}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",T&&a!==Bo&&(ne=a.relatedTarget||a.fromElement)&&(bn(ne)||ne[yn]))break e;if((R||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,R?(ne=a.relatedTarget||a.toElement,R=C,ne=ne?bn(ne):null,ne!==null&&(Ae=p(ne),ee=ne.tag,ne!==Ae||ee!==5&&ee!==27&&ee!==6)&&(ne=null)):(R=null,ne=C),R!==ne)){if(ee=uf,q="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=sf,q="onPointerLeave",A="onPointerEnter",S="pointer"),Ae=R==null?T:Al(R),w=ne==null?T:Al(ne),T=new ee(q,S+"leave",R,a,_),T.target=Ae,T.relatedTarget=w,q=null,bn(_)===C&&(ee=new ee(A,S+"enter",ne,a,_),ee.target=w,ee.relatedTarget=Ae,q=ee),Ae=q,R&&ne)t:{for(ee=R,A=ne,S=0,w=ee;w;w=In(w))S++;for(w=0,q=A;q;q=In(q))w++;for(;0<S-w;)ee=In(ee),S--;for(;0<w-S;)A=In(A),w--;for(;S--;){if(ee===A||A!==null&&ee===A.alternate)break t;ee=In(ee),A=In(A)}ee=null}else ee=null;R!==null&&Im(N,T,R,ee,!1),ne!==null&&Ae!==null&&Im(N,Ae,ne,ee,!0)}}e:{if(T=C?Al(C):window,R=T.nodeName&&T.nodeName.toLowerCase(),R==="select"||R==="input"&&T.type==="file")var J=yf;else if(gf(T))if(bf)J=S0;else{J=b0;var ce=y0}else R=T.nodeName,!R||R.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?C&&Uo(C.elementType)&&(J=yf):J=x0;if(J&&(J=J(e,C))){vf(N,J,a,_);break e}ce&&ce(e,T,C),e==="focusout"&&C&&T.type==="number"&&C.memoizedProps.value!=null&&$o(T,"number",T.value)}switch(ce=C?Al(C):window,e){case"focusin":(gf(ce)||ce.contentEditable==="true")&&(Rn=ce,Fo=C,Dl=null);break;case"focusout":Dl=Fo=Rn=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,zf(N,a,_);break;case"selectionchange":if(A0)break;case"keydown":case"keyup":zf(N,a,_)}var W;if(Zo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Tn?hf(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(ff&&a.locale!=="ko"&&(Tn||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Tn&&(W=rf()):(Aa=_,Yo="value"in Aa?Aa.value:Aa.textContent,Tn=!0)),ce=wr(C,ae),0<ce.length&&(ae=new cf(ae,e,null,a,_),N.push({event:ae,listeners:ce}),W?ae.data=W:(W=pf(a),W!==null&&(ae.data=W)))),(W=m0?h0(e,a):p0(e,a))&&(ae=wr(C,"onBeforeInput"),0<ae.length&&(ce=new cf("onBeforeInput","beforeinput",null,a,_),N.push({event:ce,listeners:ae}),ce.data=W)),ig(N,e,C,a,_)}Fm(N,t)})}function ri(e,t,a){return{instance:e,listener:t,currentTarget:a}}function wr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=El(e,a),i!=null&&n.unshift(ri(e,i,r)),i=El(e,t),i!=null&&n.push(ri(e,i,r))),e.tag===3)return n;e=e.return}return[]}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,t,a,n,i){for(var r=t._reactName,f=[];a!==null&&a!==n;){var m=a,v=m.alternate,C=m.stateNode;if(m=m.tag,v!==null&&v===n)break;m!==5&&m!==26&&m!==27||C===null||(v=C,i?(C=El(a,r),C!=null&&f.unshift(ri(a,C,v))):i||(C=El(a,r),C!=null&&f.push(ri(a,C,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var cg=/\r\n?/g,sg=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(sg,"")}function th(e,t){return t=eh(t),eh(e)===t}function Cr(){}function je(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||wn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&wn(e,""+n);break;case"className":Mi(e,"class",n);break;case"tabIndex":Mi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,a,n);break;case"style":af(e,n,r);break;case"data":if(t!=="object"){Mi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=qi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",i.name,i,null),je(e,t,"formEncType",i.formEncType,i,null),je(e,t,"formMethod",i.formMethod,i,null),je(e,t,"formTarget",i.formTarget,i,null)):(je(e,t,"encType",i.encType,i,null),je(e,t,"method",i.method,i,null),je(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=qi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Cr);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=qi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":me("beforetoggle",e),me("toggle",e),Oi(e,"popover",n);break;case"xlinkActuate":ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ta(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ta(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ta(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ta(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Oi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gp.get(a)||a,Oi(e,a,n))}}function Sc(e,t,a,n,i,r){switch(a){case"style":af(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?wn(e,n):(typeof n=="number"||typeof n=="bigint")&&wn(e,""+n);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ct]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Oi(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var f=a[r];if(f!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,r,f,a,null)}}i&&je(e,t,"srcSet",a.srcSet,a,null),n&&je(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=r=f=i=null,v=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var _=a[n];if(_!=null)switch(n){case"name":i=_;break;case"type":f=_;break;case"checked":v=_;break;case"defaultChecked":C=_;break;case"value":r=_;break;case"defaultValue":m=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:je(e,t,n,_,a,null)}}Ps(e,r,m,v,C,f,i,!1),Di(e);return;case"select":me("invalid",e),n=f=r=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":n=m;default:je(e,t,i,m,a,null)}t=r,a=f,e.multiple=!!n,t!=null?En(e,!!n,t,!1):a!=null&&En(e,!!n,a,!0);return;case"textarea":me("invalid",e),r=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":n=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:je(e,t,f,m,a,null)}ef(e,n,i,r),Di(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:je(e,t,v,n,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(n=0;n<ii.length;n++)me(ii[n],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,C,n,a,null)}return;default:if(Uo(t)){for(_ in a)a.hasOwnProperty(_)&&(n=a[_],n!==void 0&&Sc(e,t,_,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&je(e,t,m,n,a,null))}function fg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,m=null,v=null,C=null,_=null;for(R in a){var N=a[R];if(a.hasOwnProperty(R)&&N!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=N;default:n.hasOwnProperty(R)||je(e,t,R,null,n,N)}}for(var T in n){var R=n[T];if(N=a[T],n.hasOwnProperty(T)&&(R!=null||N!=null))switch(T){case"type":r=R;break;case"name":i=R;break;case"checked":C=R;break;case"defaultChecked":_=R;break;case"value":f=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==N&&je(e,t,T,R,n,N)}}No(e,f,m,v,C,_,r,i);return;case"select":R=f=m=T=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":R=v;default:n.hasOwnProperty(r)||je(e,t,r,null,n,v)}for(i in n)if(r=n[i],v=a[i],n.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":T=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==v&&je(e,t,i,r,n,v)}t=m,a=f,n=R,T!=null?En(e,!!a,T,!1):!!n!=!!a&&(t!=null?En(e,!!a,t,!0):En(e,!!a,a?[]:"",!1));return;case"textarea":R=T=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:je(e,t,m,null,n,i)}for(f in n)if(i=n[f],r=a[f],n.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":T=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&je(e,t,f,i,n,r)}Is(e,T,R);return;case"option":for(var ne in a)if(T=a[ne],a.hasOwnProperty(ne)&&T!=null&&!n.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:je(e,t,ne,null,n,T)}for(v in n)if(T=n[v],R=a[v],n.hasOwnProperty(v)&&T!==R&&(T!=null||R!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:je(e,t,v,T,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)T=a[ee],a.hasOwnProperty(ee)&&T!=null&&!n.hasOwnProperty(ee)&&je(e,t,ee,null,n,T);for(C in n)if(T=n[C],R=a[C],n.hasOwnProperty(C)&&T!==R&&(T!=null||R!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:je(e,t,C,T,n,R)}return;default:if(Uo(t)){for(var Ae in a)T=a[Ae],a.hasOwnProperty(Ae)&&T!==void 0&&!n.hasOwnProperty(Ae)&&Sc(e,t,Ae,void 0,n,T);for(_ in n)T=n[_],R=a[_],!n.hasOwnProperty(_)||T===R||T===void 0&&R===void 0||Sc(e,t,_,T,n,R);return}}for(var A in a)T=a[A],a.hasOwnProperty(A)&&T!=null&&!n.hasOwnProperty(A)&&je(e,t,A,null,n,T);for(N in n)T=n[N],R=a[N],!n.hasOwnProperty(N)||T===R||T==null&&R==null||je(e,t,N,T,n,R)}var jc=null,Ac=null;function zr(e){return e.nodeType===9?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wc=null;function dg(){var e=window.event;return e&&e.type==="popstate"?e===wc?!1:(wc=e,!0):(wc=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(pg)}:lh;function pg(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function rh(e,t){var a=t,n=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var f=e.ownerDocument;if(a&1&&oi(f.documentElement),a&2&&oi(f.body),a&4)for(a=f.head,oi(a),f=a.firstChild;f;){var m=f.nextSibling,v=f.nodeName;f[jl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=m}}if(i===0){e.removeChild(r),pi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);pi(t)}function Cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cc(a),Mo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gg(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function vg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gt(e.nextSibling),e===null))return null;return e}function zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yg(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Tc=null;function oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function uh(e,t,a){switch(t=zr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function oi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mo(e)}var $t=new Map,ch=new Set;function Tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=L.d;L.d={f:bg,r:xg,D:Sg,C:jg,L:Ag,m:Eg,X:Cg,S:wg,M:zg};function bg(){var e=pa.f(),t=br();return e||t}function xg(e){var t=xn(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):pa.r(e)}var el=typeof document>"u"?null:document;function sh(e,t,a){var n=el;if(n&&typeof t=="string"&&t){var i=Rt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),ch.has(i)||(ch.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),tt(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Sg(e){pa.D(e),sh("dns-prefetch",e,null)}function jg(e,t){pa.C(e,t),sh("preconnect",e,t)}function Ag(e,t,a){pa.L(e,t,a);var n=el;if(n&&e&&t){var i='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Rt(a.imageSizes)+'"]')):i+='[href="'+Rt(e)+'"]';var r=i;switch(t){case"style":r=tl(e);break;case"script":r=al(e)}$t.has(r)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),$t.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(ui(r))||t==="script"&&n.querySelector(ci(r))||(t=n.createElement("link"),tt(t,"link",e),Xe(t),n.head.appendChild(t)))}}function Eg(e,t){pa.m(e,t);var a=el;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Rt(n)+'"][href="'+Rt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=al(e)}if(!$t.has(r)&&(e=j({rel:"modulepreload",href:e},t),$t.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ci(r)))return}n=a.createElement("link"),tt(n,"link",e),Xe(n),a.head.appendChild(n)}}}function wg(e,t,a){pa.S(e,t,a);var n=el;if(n&&e){var i=Sn(n).hoistableStyles,r=tl(e);t=t||"default";var f=i.get(r);if(!f){var m={loading:0,preload:null};if(f=n.querySelector(ui(r)))m.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=$t.get(r))&&Rc(e,a);var v=f=n.createElement("link");Xe(v),tt(v,"link",e),v._p=new Promise(function(C,_){v.onload=C,v.onerror=_}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Rr(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(r,f)}}}function Cg(e,t){pa.X(e,t);var a=el;if(a&&e){var n=Sn(a).hoistableScripts,i=al(e),r=n.get(i);r||(r=a.querySelector(ci(i)),r||(e=j({src:e,async:!0},t),(t=$t.get(i))&&Oc(e,t),r=a.createElement("script"),Xe(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function zg(e,t){pa.M(e,t);var a=el;if(a&&e){var n=Sn(a).hoistableScripts,i=al(e),r=n.get(i);r||(r=a.querySelector(ci(i)),r||(e=j({src:e,async:!0,type:"module"},t),(t=$t.get(i))&&Oc(e,t),r=a.createElement("script"),Xe(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function fh(e,t,a,n){var i=(i=te.current)?Tr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=tl(a.href),a=Sn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=tl(a.href);var r=Sn(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(ui(e)))&&!r._p&&(f.instance=r,f.state.loading=5),$t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$t.set(e,a),r||Tg(i,e,a,f.state))),t&&n===null)throw Error(c(528,""));return f}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=al(a),a=Sn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function tl(e){return'href="'+Rt(e)+'"'}function ui(e){return'link[rel="stylesheet"]['+e+"]"}function dh(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Tg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),Xe(t),e.head.appendChild(t))}function al(e){return'[src="'+Rt(e)+'"]'}function ci(e){return"script[async]"+e}function mh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(n)return t.instance=n,Xe(n),n;var i=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Xe(n),tt(n,"style",i),Rr(n,a.precedence,e),t.instance=n;case"stylesheet":i=tl(a.href);var r=e.querySelector(ui(i));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;n=dh(a),(i=$t.get(i))&&Rc(n,i),r=(e.ownerDocument||e).createElement("link"),Xe(r);var f=r;return f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),tt(r,"link",n),t.state.loading|=4,Rr(r,a.precedence,e),t.instance=r;case"script":return r=al(a.src),(i=e.querySelector(ci(r)))?(t.instance=i,Xe(i),i):(n=a,(i=$t.get(r))&&(n=j({},a),Oc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),tt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Rr(n,a.precedence,e));return t.instance}function Rr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,f=0;f<n.length;f++){var m=n[f];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function hh(e,t,a){if(Or===null){var n=new Map,i=Or=new Map;i.set(a,n)}else i=Or,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[jl]||r[nt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var m=n.get(f);m?m.push(r):n.set(f,[r])}}return n}function ph(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Rg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var si=null;function Og(){}function Mg(e,t,a){if(si===null)throw Error(c(475));var n=si;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=tl(a.href),r=e.querySelector(ui(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Mr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,a=dh(a),(i=$t.get(i))&&Rc(a,i),r=r.createElement("link"),Xe(r);var f=r;f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),tt(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Mr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Dg(){if(si===null)throw Error(c(475));var e=si;return e.stylesheets&&e.count===0&&Mc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Mr(){if(this.count--,this.count===0){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dr=null;function Mc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dr=new Map,t.forEach(_g,e),Dr=null,Mr.call(e))}function _g(e,t){if(!(t.state.loading&4)){var a=Dr.get(e);if(a)var n=a.get(null);else{a=new Map,Dr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=t.instance,f=i.getAttribute("data-precedence"),r=a.get(f)||n,r===n&&a.set(null,i),a.set(f,i),this.count++,n=Mr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:Z,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function qg(e,t,a,n,i,r,f,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function vh(e,t,a,n,i,r,f,m,v,C,_,N){return e=new qg(e,t,a,f,m,v,C,N),t=1,r===!0&&(t|=24),r=xt(3,null,null,t),e.current=r,r.stateNode=e,t=du(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},gu(r),e}function yh(e){return e?(e=_n,e):_n}function bh(e,t,a,n,i,r){i=yh(i),n.context===null?n.context=i:n.pendingContext=i,n=Ca(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=za(e,n,t),a!==null&&(wt(a,e,t),kl(a,e,t))}function xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Dc(e,t){xh(e,t),(e=e.alternate)&&xh(e,t)}function Sh(e){if(e.tag===13){var t=Dn(e,67108864);t!==null&&wt(t,e,67108864),Dc(e,67108864)}}var _r=!0;function Ng(e,t,a,n){var i=D.T;D.T=null;var r=L.p;try{L.p=2,_c(e,t,a,n)}finally{L.p=r,D.T=i}}function $g(e,t,a,n){var i=D.T;D.T=null;var r=L.p;try{L.p=8,_c(e,t,a,n)}finally{L.p=r,D.T=i}}function _c(e,t,a,n){if(_r){var i=qc(n);if(i===null)xc(e,t,n,qr,a),Ah(e,n);else if(Bg(i,e,t,a,n))n.stopPropagation();else if(Ah(e,n),t&4&&-1<Ug.indexOf(e)){for(;i!==null;){var r=xn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Ja(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var v=1<<31-yt(f);m.entanglements[1]|=v,f&=~v}Jt(r),(be&6)===0&&(vr=Qt()+500,li(0))}}break;case 13:m=Dn(r,2),m!==null&&wt(m,r,2),br(),Dc(r,2)}if(r=qc(n),r===null&&xc(e,t,n,qr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else xc(e,t,n,null,a)}}function qc(e){return e=Ho(e),Nc(e)}var qr=null;function Nc(e){if(qr=null,e=bn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qr=e,null}function jh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jp()){case Ns:return 2;case $s:return 8;case Ci:case Ap:return 32;case Us:return 268435456;default:return 32}default:return 32}}var $c=!1,Ga=null,ka=null,Ya=null,di=new Map,mi=new Map,La=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ah(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function hi(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=xn(t),t!==null&&Sh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bg(e,t,a,n,i){switch(t){case"focusin":return Ga=hi(Ga,e,t,a,n,i),!0;case"dragenter":return ka=hi(ka,e,t,a,n,i),!0;case"mouseover":return Ya=hi(Ya,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return di.set(r,hi(di.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,mi.set(r,hi(mi.get(r)||null,e,t,a,n,i)),!0}return!1}function Eh(e){var t=bn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,Mp(e.priority,function(){if(a.tag===13){var n=Et();n=To(n);var i=Dn(a,n);i!==null&&wt(i,a,n),Dc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=qc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Bo=n,a.target.dispatchEvent(n),Bo=null}else return t=xn(a),t!==null&&Sh(t),e.blockedOn=a,!1;t.shift()}return!0}function wh(e,t,a){Nr(e)&&a.delete(t)}function Hg(){$c=!1,Ga!==null&&Nr(Ga)&&(Ga=null),ka!==null&&Nr(ka)&&(ka=null),Ya!==null&&Nr(Ya)&&(Ya=null),di.forEach(wh),mi.forEach(wh)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,$c||($c=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Hg)))}var Ur=null;function Ch(e){Ur!==e&&(Ur=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ur===e&&(Ur=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Nc(n||a)===null)continue;break}var r=xn(a);r!==null&&(e.splice(t,3),t-=3,Nu(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function pi(e){function t(v){return $r(v,e)}Ga!==null&&$r(Ga,e),ka!==null&&$r(ka,e),Ya!==null&&$r(Ya,e),di.forEach(t),mi.forEach(t);for(var a=0;a<La.length;a++){var n=La[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],f=i[ct]||null;if(typeof r=="function")f||Ch(a);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[ct]||null)m=f.formAction;else if(Nc(i)!==null)continue}else m=f.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Ch(a)}}}function Uc(e){this._internalRoot=e}Br.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Et();bh(a,n,e,t,null,null)},Br.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bh(e.current,2,null,e,null,null),br(),t[yn]=null}};function Br(e){this._internalRoot=e}Br.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ys();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&Eh(e)}};var zh=o.version;if(zh!=="19.1.1")throw Error(c(527,zh,"19.1.1"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Gg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{bl=Hr.inject(Gg),vt=Hr}catch{}}return vi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,n="",i=Ld,r=Qd,f=Vd,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=vh(e,1,!1,null,null,a,n,i,r,f,m,null),e[yn]=t.current,bc(e),new Uc(t)},vi.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var n=!1,i="",r=Ld,f=Qd,m=Vd,v=null,C=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(C=a.formState)),t=vh(e,1,!0,t,a??null,n,i,r,f,m,v,C),t.context=yh(null),a=t.current,n=Et(),n=To(n),i=Ca(n),i.callback=null,za(a,i,n),a=n,t.current.lanes=a,Sl(t,a),Jt(t),e[yn]=t.current,bc(e),new Br(t)},vi.version="19.1.1",vi}var Uh;function Wg(){if(Uh)return Gc.exports;Uh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Gc.exports=Jg(),Gc.exports}var Fg=Wg();const Pg=c1(Fg);var Fe=function(){return Fe=Object.assign||function(o){for(var s,c=1,d=arguments.length;c<d;c++){s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(o[p]=s[p])}return o},Fe.apply(this,arguments)};function sl(l,o,s){if(s||arguments.length===2)for(var c=0,d=o.length,p;c<d;c++)(p||!(c in o))&&(p||(p=Array.prototype.slice.call(o,0,c)),p[c]=o[c]);return l.concat(p||Array.prototype.slice.call(o))}var Re="-ms-",xi="-moz-",ye="-webkit-",s1="comm",go="rule",ys="decl",Ig="@import",f1="@keyframes",ev="@layer",d1=Math.abs,bs=String.fromCharCode,rs=Object.assign;function tv(l,o){return We(l,0)^45?(((o<<2^We(l,0))<<2^We(l,1))<<2^We(l,2))<<2^We(l,3):0}function m1(l){return l.trim()}function va(l,o){return(l=o.exec(l))?l[0]:l}function oe(l,o,s){return l.replace(o,s)}function Ir(l,o,s){return l.indexOf(o,s)}function We(l,o){return l.charCodeAt(o)|0}function fl(l,o,s){return l.slice(o,s)}function Wt(l){return l.length}function h1(l){return l.length}function bi(l,o){return o.push(l),l}function av(l,o){return l.map(o).join("")}function Bh(l,o){return l.filter(function(s){return!va(s,o)})}var vo=1,dl=1,p1=0,Ut=0,He=0,pl="";function yo(l,o,s,c,d,p,y,E){return{value:l,root:o,parent:s,type:c,props:d,children:p,line:vo,column:dl,length:y,return:"",siblings:E}}function Va(l,o){return rs(yo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},o)}function nl(l){for(;l.root;)l=Va(l.root,{children:[l]});bi(l,l.siblings)}function nv(){return He}function lv(){return He=Ut>0?We(pl,--Ut):0,dl--,He===10&&(dl=1,vo--),He}function kt(){return He=Ut<p1?We(pl,Ut++):0,dl++,He===10&&(dl=1,vo++),He}function pn(){return We(pl,Ut)}function eo(){return Ut}function bo(l,o){return fl(pl,l,o)}function os(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iv(l){return vo=dl=1,p1=Wt(pl=l),Ut=0,[]}function rv(l){return pl="",l}function Qc(l){return m1(bo(Ut-1,us(l===91?l+2:l===40?l+1:l)))}function ov(l){for(;(He=pn())&&He<33;)kt();return os(l)>2||os(He)>3?"":" "}function uv(l,o){for(;--o&&kt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return bo(l,eo()+(o<6&&pn()==32&&kt()==32))}function us(l){for(;kt();)switch(He){case l:return Ut;case 34:case 39:l!==34&&l!==39&&us(He);break;case 40:l===41&&us(l);break;case 92:kt();break}return Ut}function cv(l,o){for(;kt()&&l+He!==57;)if(l+He===84&&pn()===47)break;return"/*"+bo(o,Ut-1)+"*"+bs(l===47?l:kt())}function sv(l){for(;!os(pn());)kt();return bo(l,Ut)}function fv(l){return rv(to("",null,null,null,[""],l=iv(l),0,[0],l))}function to(l,o,s,c,d,p,y,E,b){for(var g=0,j=0,M=y,U=0,B=0,G=0,X=1,k=1,V=1,H=0,Z="",le=d,K=p,ie=c,F=Z;k;)switch(G=H,H=kt()){case 40:if(G!=108&&We(F,M-1)==58){Ir(F+=oe(Qc(H),"&","&\f"),"&\f",d1(g?E[g-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:F+=Qc(H);break;case 9:case 10:case 13:case 32:F+=ov(G);break;case 92:F+=uv(eo()-1,7);continue;case 47:switch(pn()){case 42:case 47:bi(dv(cv(kt(),eo()),o,s,b),b);break;default:F+="/"}break;case 123*X:E[g++]=Wt(F)*V;case 125*X:case 59:case 0:switch(H){case 0:case 125:k=0;case 59+j:V==-1&&(F=oe(F,/\f/g,"")),B>0&&Wt(F)-M&&bi(B>32?Gh(F+";",c,s,M-1,b):Gh(oe(F," ","")+";",c,s,M-2,b),b);break;case 59:F+=";";default:if(bi(ie=Hh(F,o,s,g,j,d,E,Z,le=[],K=[],M,p),p),H===123)if(j===0)to(F,o,ie,ie,le,p,M,E,K);else switch(U===99&&We(F,3)===110?100:U){case 100:case 108:case 109:case 115:to(l,ie,ie,c&&bi(Hh(l,ie,ie,0,0,d,E,Z,d,le=[],M,K),K),d,K,M,E,c?le:K);break;default:to(F,ie,ie,ie,[""],K,0,E,K)}}g=j=B=0,X=V=1,Z=F="",M=y;break;case 58:M=1+Wt(F),B=G;default:if(X<1){if(H==123)--X;else if(H==125&&X++==0&&lv()==125)continue}switch(F+=bs(H),H*X){case 38:V=j>0?1:(F+="\f",-1);break;case 44:E[g++]=(Wt(F)-1)*V,V=1;break;case 64:pn()===45&&(F+=Qc(kt())),U=pn(),j=M=Wt(Z=F+=sv(eo())),H++;break;case 45:G===45&&Wt(F)==2&&(X=0)}}return p}function Hh(l,o,s,c,d,p,y,E,b,g,j,M){for(var U=d-1,B=d===0?p:[""],G=h1(B),X=0,k=0,V=0;X<c;++X)for(var H=0,Z=fl(l,U+1,U=d1(k=y[X])),le=l;H<G;++H)(le=m1(k>0?B[H]+" "+Z:oe(Z,/&\f/g,B[H])))&&(b[V++]=le);return yo(l,o,s,d===0?go:E,b,g,j,M)}function dv(l,o,s,c){return yo(l,o,s,s1,bs(nv()),fl(l,2,-2),0,c)}function Gh(l,o,s,c,d){return yo(l,o,s,ys,fl(l,0,c),fl(l,c+1,-1),c,d)}function g1(l,o,s){switch(tv(l,o)){case 5103:return ye+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+l+l;case 4789:return xi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+l+xi+l+Re+l+l;case 5936:switch(We(l,o+11)){case 114:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ye+l+Re+oe(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return ye+l+Re+l+l;case 6165:return ye+l+Re+"flex-"+l+l;case 5187:return ye+l+oe(l,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Re+"flex-$1$2")+l;case 5443:return ye+l+Re+"flex-item-"+oe(l,/flex-|-self/g,"")+(va(l,/flex-|baseline/)?"":Re+"grid-row-"+oe(l,/flex-|-self/g,""))+l;case 4675:return ye+l+Re+"flex-line-pack"+oe(l,/align-content|flex-|-self/g,"")+l;case 5548:return ye+l+Re+oe(l,"shrink","negative")+l;case 5292:return ye+l+Re+oe(l,"basis","preferred-size")+l;case 6060:return ye+"box-"+oe(l,"-grow","")+ye+l+Re+oe(l,"grow","positive")+l;case 4554:return ye+oe(l,/([^-])(transform)/g,"$1"+ye+"$2")+l;case 6187:return oe(oe(oe(l,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),l,"")+l;case 5495:case 3959:return oe(l,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return oe(oe(l,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+l+l;case 4200:if(!va(l,/flex-|baseline/))return Re+"grid-column-align"+fl(l,o)+l;break;case 2592:case 3360:return Re+oe(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(c,d){return o=d,va(c.props,/grid-\w+-end/)})?~Ir(l+(s=s[o].value),"span",0)?l:Re+oe(l,"-start","")+l+Re+"grid-row-span:"+(~Ir(s,"span",0)?va(s,/\d+/):+va(s,/\d+/)-+va(l,/\d+/))+";":Re+oe(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(c){return va(c.props,/grid-\w+-start/)})?l:Re+oe(oe(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return oe(l,/(.+)-inline(.+)/,ye+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(l)-1-o>6)switch(We(l,o+1)){case 109:if(We(l,o+4)!==45)break;case 102:return oe(l,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+xi+(We(l,o+3)==108?"$3":"$2-$3"))+l;case 115:return~Ir(l,"stretch",0)?g1(oe(l,"stretch","fill-available"),o,s)+l:l}break;case 5152:case 5920:return oe(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,p,y,E,b,g){return Re+d+":"+p+g+(y?Re+d+"-span:"+(E?b:+b-+p)+g:"")+l});case 4949:if(We(l,o+6)===121)return oe(l,":",":"+ye)+l;break;case 6444:switch(We(l,We(l,14)===45?18:11)){case 120:return oe(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(We(l,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Re+"$2box$3")+l;case 100:return oe(l,":",":"+Re)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(l,"scroll-","scroll-snap-")+l}return l}function ro(l,o){for(var s="",c=0;c<l.length;c++)s+=o(l[c],c,l,o)||"";return s}function mv(l,o,s,c){switch(l.type){case ev:if(l.children.length)break;case Ig:case ys:return l.return=l.return||l.value;case s1:return"";case f1:return l.return=l.value+"{"+ro(l.children,c)+"}";case go:if(!Wt(l.value=l.props.join(",")))return""}return Wt(s=ro(l.children,c))?l.return=l.value+"{"+s+"}":""}function hv(l){var o=h1(l);return function(s,c,d,p){for(var y="",E=0;E<o;E++)y+=l[E](s,c,d,p)||"";return y}}function pv(l){return function(o){o.root||(o=o.return)&&l(o)}}function gv(l,o,s,c){if(l.length>-1&&!l.return)switch(l.type){case ys:l.return=g1(l.value,l.length,s);return;case f1:return ro([Va(l,{value:oe(l.value,"@","@"+ye)})],c);case go:if(l.length)return av(s=l.props,function(d){switch(va(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nl(Va(l,{props:[oe(d,/:(read-\w+)/,":"+xi+"$1")]})),nl(Va(l,{props:[d]})),rs(l,{props:Bh(s,c)});break;case"::placeholder":nl(Va(l,{props:[oe(d,/:(plac\w+)/,":"+ye+"input-$1")]})),nl(Va(l,{props:[oe(d,/:(plac\w+)/,":"+xi+"$1")]})),nl(Va(l,{props:[oe(d,/:(plac\w+)/,Re+"input-$1")]})),nl(Va(l,{props:[d]})),rs(l,{props:Bh(s,c)});break}return""})}}var vv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct={},ml=typeof process<"u"&&Ct!==void 0&&(Ct.REACT_APP_SC_ATTR||Ct.SC_ATTR)||"data-styled",v1="active",y1="data-styled-version",xo="6.1.19",xs=`/*!sc*/
`,oo=typeof window<"u"&&typeof document<"u",yv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==""?Ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.SC_DISABLE_SPEEDY!==void 0&&Ct.SC_DISABLE_SPEEDY!==""&&Ct.SC_DISABLE_SPEEDY!=="false"&&Ct.SC_DISABLE_SPEEDY),bv={},So=Object.freeze([]),hl=Object.freeze({});function b1(l,o,s){return s===void 0&&(s=hl),l.theme!==s.theme&&l.theme||o||s.theme}var x1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sv=/(^-|-$)/g;function kh(l){return l.replace(xv,"-").replace(Sv,"")}var jv=/(a)(d)/gi,Gr=52,Yh=function(l){return String.fromCharCode(l+(l>25?39:97))};function cs(l){var o,s="";for(o=Math.abs(l);o>Gr;o=o/Gr|0)s=Yh(o%Gr)+s;return(Yh(o%Gr)+s).replace(jv,"$1-$2")}var Vc,S1=5381,cl=function(l,o){for(var s=o.length;s;)l=33*l^o.charCodeAt(--s);return l},j1=function(l){return cl(S1,l)};function Ss(l){return cs(j1(l)>>>0)}function Av(l){return l.displayName||l.name||"Component"}function Xc(l){return typeof l=="string"&&!0}var A1=typeof Symbol=="function"&&Symbol.for,E1=A1?Symbol.for("react.memo"):60115,Ev=A1?Symbol.for("react.forward_ref"):60112,wv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zv=((Vc={})[Ev]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vc[E1]=w1,Vc);function Lh(l){return("type"in(o=l)&&o.type.$$typeof)===E1?w1:"$$typeof"in l?zv[l.$$typeof]:wv;var o}var Tv=Object.defineProperty,Rv=Object.getOwnPropertyNames,Qh=Object.getOwnPropertySymbols,Ov=Object.getOwnPropertyDescriptor,Mv=Object.getPrototypeOf,Vh=Object.prototype;function C1(l,o,s){if(typeof o!="string"){if(Vh){var c=Mv(o);c&&c!==Vh&&C1(l,c,s)}var d=Rv(o);Qh&&(d=d.concat(Qh(o)));for(var p=Lh(l),y=Lh(o),E=0;E<d.length;++E){var b=d[E];if(!(b in Cv||s&&s[b]||y&&b in y||p&&b in p)){var g=Ov(o,b);try{Tv(l,b,g)}catch{}}}}return l}function gn(l){return typeof l=="function"}function js(l){return typeof l=="object"&&"styledComponentId"in l}function hn(l,o){return l&&o?"".concat(l," ").concat(o):l||o||""}function uo(l,o){if(l.length===0)return"";for(var s=l[0],c=1;c<l.length;c++)s+=l[c];return s}function Si(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function ss(l,o,s){if(s===void 0&&(s=!1),!s&&!Si(l)&&!Array.isArray(l))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)l[c]=ss(l[c],o[c]);else if(Si(o))for(var c in o)l[c]=ss(l[c],o[c]);return l}function As(l,o){Object.defineProperty(l,"toString",{value:o})}function vn(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Dv=(function(){function l(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return l.prototype.indexOfGroup=function(o){for(var s=0,c=0;c<o;c++)s+=this.groupSizes[c];return s},l.prototype.insertRules=function(o,s){if(o>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,p=d;o>=p;)if((p<<=1)<0)throw vn(16,"".concat(o));this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(var y=d;y<p;y++)this.groupSizes[y]=0}for(var E=this.indexOfGroup(o+1),b=(y=0,s.length);y<b;y++)this.tag.insertRule(E,s[y])&&(this.groupSizes[o]++,E++)},l.prototype.clearGroup=function(o){if(o<this.length){var s=this.groupSizes[o],c=this.indexOfGroup(o),d=c+s;this.groupSizes[o]=0;for(var p=c;p<d;p++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(o){var s="";if(o>=this.length||this.groupSizes[o]===0)return s;for(var c=this.groupSizes[o],d=this.indexOfGroup(o),p=d+c,y=d;y<p;y++)s+="".concat(this.tag.getRule(y)).concat(xs);return s},l})(),ao=new Map,co=new Map,no=1,kr=function(l){if(ao.has(l))return ao.get(l);for(;co.has(no);)no++;var o=no++;return ao.set(l,o),co.set(o,l),o},_v=function(l,o){no=o+1,ao.set(l,o),co.set(o,l)},qv="style[".concat(ml,"][").concat(y1,'="').concat(xo,'"]'),Nv=new RegExp("^".concat(ml,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$v=function(l,o,s){for(var c,d=s.split(","),p=0,y=d.length;p<y;p++)(c=d[p])&&l.registerName(o,c)},Uv=function(l,o){for(var s,c=((s=o.textContent)!==null&&s!==void 0?s:"").split(xs),d=[],p=0,y=c.length;p<y;p++){var E=c[p].trim();if(E){var b=E.match(Nv);if(b){var g=0|parseInt(b[1],10),j=b[2];g!==0&&(_v(j,g),$v(l,j,b[3]),l.getTag().insertRules(g,d)),d.length=0}else d.push(E)}}},Xh=function(l){for(var o=document.querySelectorAll(qv),s=0,c=o.length;s<c;s++){var d=o[s];d&&d.getAttribute(ml)!==v1&&(Uv(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function Bv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var z1=function(l){var o=document.head,s=l||o,c=document.createElement("style"),d=(function(E){var b=Array.from(E.querySelectorAll("style[".concat(ml,"]")));return b[b.length-1]})(s),p=d!==void 0?d.nextSibling:null;c.setAttribute(ml,v1),c.setAttribute(y1,xo);var y=Bv();return y&&c.setAttribute("nonce",y),s.insertBefore(c,p),c},Hv=(function(){function l(o){this.element=z1(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,d=0,p=c.length;d<p;d++){var y=c[d];if(y.ownerNode===s)return y}throw vn(17)})(this.element),this.length=0}return l.prototype.insertRule=function(o,s){try{return this.sheet.insertRule(s,o),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},l.prototype.getRule=function(o){var s=this.sheet.cssRules[o];return s&&s.cssText?s.cssText:""},l})(),Gv=(function(){function l(o){this.element=z1(o),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(o,s){if(o<=this.length&&o>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},l.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},l})(),kv=(function(){function l(o){this.rules=[],this.length=0}return l.prototype.insertRule=function(o,s){return o<=this.length&&(this.rules.splice(o,0,s),this.length++,!0)},l.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},l.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},l})(),Zh=oo,Yv={isServer:!oo,useCSSOMInjection:!yv},so=(function(){function l(o,s,c){o===void 0&&(o=hl),s===void 0&&(s={});var d=this;this.options=Fe(Fe({},Yv),o),this.gs=s,this.names=new Map(c),this.server=!!o.isServer,!this.server&&oo&&Zh&&(Zh=!1,Xh(this)),As(this,function(){return(function(p){for(var y=p.getTag(),E=y.length,b="",g=function(M){var U=(function(V){return co.get(V)})(M);if(U===void 0)return"continue";var B=p.names.get(U),G=y.getGroup(M);if(B===void 0||!B.size||G.length===0)return"continue";var X="".concat(ml,".g").concat(M,'[id="').concat(U,'"]'),k="";B!==void 0&&B.forEach(function(V){V.length>0&&(k+="".concat(V,","))}),b+="".concat(G).concat(X,'{content:"').concat(k,'"}').concat(xs)},j=0;j<E;j++)g(j);return b})(d)})}return l.registerId=function(o){return kr(o)},l.prototype.rehydrate=function(){!this.server&&oo&&Xh(this)},l.prototype.reconstructWithOptions=function(o,s){return s===void 0&&(s=!0),new l(Fe(Fe({},this.options),o),this.gs,s&&this.names||void 0)},l.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(s){var c=s.useCSSOMInjection,d=s.target;return s.isServer?new kv(d):c?new Hv(d):new Gv(d)})(this.options),new Dv(o)));var o},l.prototype.hasNameForId=function(o,s){return this.names.has(o)&&this.names.get(o).has(s)},l.prototype.registerName=function(o,s){if(kr(o),this.names.has(o))this.names.get(o).add(s);else{var c=new Set;c.add(s),this.names.set(o,c)}},l.prototype.insertRules=function(o,s,c){this.registerName(o,s),this.getTag().insertRules(kr(o),c)},l.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},l.prototype.clearRules=function(o){this.getTag().clearGroup(kr(o)),this.clearNames(o)},l.prototype.clearTag=function(){this.tag=void 0},l})(),Lv=/&/g,Qv=/^\s*\/\/.*$/gm;function T1(l,o){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(o," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(o," ")),s.props=s.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=T1(s.children,o)),s})}function Vv(l){var o,s,c,d=hl,p=d.options,y=p===void 0?hl:p,E=d.plugins,b=E===void 0?So:E,g=function(U,B,G){return G.startsWith(s)&&G.endsWith(s)&&G.replaceAll(s,"").length>0?".".concat(o):U},j=b.slice();j.push(function(U){U.type===go&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Lv,s).replace(c,g))}),y.prefix&&j.push(gv),j.push(mv);var M=function(U,B,G,X){B===void 0&&(B=""),G===void 0&&(G=""),X===void 0&&(X="&"),o=X,s=B,c=new RegExp("\\".concat(s,"\\b"),"g");var k=U.replace(Qv,""),V=fv(G||B?"".concat(G," ").concat(B," { ").concat(k," }"):k);y.namespace&&(V=T1(V,y.namespace));var H=[];return ro(V,hv(j.concat(pv(function(Z){return H.push(Z)})))),H};return M.hash=b.length?b.reduce(function(U,B){return B.name||vn(15),cl(U,B.name)},S1).toString():"",M}var Xv=new so,fs=Vv(),R1=Ye.createContext({shouldForwardProp:void 0,styleSheet:Xv,stylis:fs});R1.Consumer;Ye.createContext(void 0);function ds(){return O.useContext(R1)}var O1=(function(){function l(o,s){var c=this;this.inject=function(d,p){p===void 0&&(p=fs);var y=c.name+p.hash;d.hasNameForId(c.id,y)||d.insertRules(c.id,y,p(c.rules,y,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=s,As(this,function(){throw vn(12,String(c.name))})}return l.prototype.getName=function(o){return o===void 0&&(o=fs),this.name+o.hash},l})(),Zv=function(l){return l>="A"&&l<="Z"};function Kh(l){for(var o="",s=0;s<l.length;s++){var c=l[s];if(s===1&&c==="-"&&l[0]==="-")return l;Zv(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var M1=function(l){return l==null||l===!1||l===""},D1=function(l){var o,s,c=[];for(var d in l){var p=l[d];l.hasOwnProperty(d)&&!M1(p)&&(Array.isArray(p)&&p.isCss||gn(p)?c.push("".concat(Kh(d),":"),p,";"):Si(p)?c.push.apply(c,sl(sl(["".concat(d," {")],D1(p),!1),["}"],!1)):c.push("".concat(Kh(d),": ").concat((o=d,(s=p)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||o in vv||o.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function Za(l,o,s,c){if(M1(l))return[];if(js(l))return[".".concat(l.styledComponentId)];if(gn(l)){if(!gn(p=l)||p.prototype&&p.prototype.isReactComponent||!o)return[l];var d=l(o);return Za(d,o,s,c)}var p;return l instanceof O1?s?(l.inject(s,c),[l.getName(c)]):[l]:Si(l)?D1(l):Array.isArray(l)?Array.prototype.concat.apply(So,l.map(function(y){return Za(y,o,s,c)})):[l.toString()]}function _1(l){for(var o=0;o<l.length;o+=1){var s=l[o];if(gn(s)&&!js(s))return!1}return!0}var Kv=j1(xo),Jv=(function(){function l(o,s,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&_1(o),this.componentId=s,this.baseHash=cl(Kv,s),this.baseStyle=c,so.registerId(s)}return l.prototype.generateAndInjectStyles=function(o,s,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))d=hn(d,this.staticRulesId);else{var p=uo(Za(this.rules,o,s,c)),y=cs(cl(this.baseHash,p)>>>0);if(!s.hasNameForId(this.componentId,y)){var E=c(p,".".concat(y),void 0,this.componentId);s.insertRules(this.componentId,y,E)}d=hn(d,y),this.staticRulesId=y}else{for(var b=cl(this.baseHash,c.hash),g="",j=0;j<this.rules.length;j++){var M=this.rules[j];if(typeof M=="string")g+=M;else if(M){var U=uo(Za(M,o,s,c));b=cl(b,U+j),g+=U}}if(g){var B=cs(b>>>0);s.hasNameForId(this.componentId,B)||s.insertRules(this.componentId,B,c(g,".".concat(B),void 0,this.componentId)),d=hn(d,B)}}return d},l})(),ji=Ye.createContext(void 0);ji.Consumer;function q1(l){var o=Ye.useContext(ji),s=O.useMemo(function(){return(function(c,d){if(!c)throw vn(14);if(gn(c)){var p=c(d);return p}if(Array.isArray(c)||typeof c!="object")throw vn(8);return d?Fe(Fe({},d),c):c})(l.theme,o)},[l.theme,o]);return l.children?Ye.createElement(ji.Provider,{value:s},l.children):null}var Zc={};function Wv(l,o,s){var c=js(l),d=l,p=!Xc(l),y=o.attrs,E=y===void 0?So:y,b=o.componentId,g=b===void 0?(function(le,K){var ie=typeof le!="string"?"sc":kh(le);Zc[ie]=(Zc[ie]||0)+1;var F="".concat(ie,"-").concat(Ss(xo+ie+Zc[ie]));return K?"".concat(K,"-").concat(F):F})(o.displayName,o.parentComponentId):b,j=o.displayName,M=j===void 0?(function(le){return Xc(le)?"styled.".concat(le):"Styled(".concat(Av(le),")")})(l):j,U=o.displayName&&o.componentId?"".concat(kh(o.displayName),"-").concat(o.componentId):o.componentId||g,B=c&&d.attrs?d.attrs.concat(E).filter(Boolean):E,G=o.shouldForwardProp;if(c&&d.shouldForwardProp){var X=d.shouldForwardProp;if(o.shouldForwardProp){var k=o.shouldForwardProp;G=function(le,K){return X(le,K)&&k(le,K)}}else G=X}var V=new Jv(s,U,c?d.componentStyle:void 0);function H(le,K){return(function(ie,F,Te){var Ee=ie.attrs,rt=ie.componentStyle,ut=ie.defaultProps,Le=ie.foldedComponentIds,Pt=ie.styledComponentId,It=ie.target,Qe=Ye.useContext(ji),D=ds(),L=ie.shouldForwardProp||D.shouldForwardProp,I=b1(F,Qe,ut)||hl,se=(function(fe,te,Ve){for(var ve,at=Fe(Fe({},te),{className:void 0,theme:Ve}),Ka=0;Ka<fe.length;Ka+=1){var ea=gn(ve=fe[Ka])?ve(at):ve;for(var zt in ea)at[zt]=zt==="className"?hn(at[zt],ea[zt]):zt==="style"?Fe(Fe({},at[zt]),ea[zt]):ea[zt]}return te.className&&(at.className=hn(at.className,te.className)),at})(Ee,F,I),x=se.as||It,$={};for(var Y in se)se[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&se.theme===I||(Y==="forwardedAs"?$.as=se.forwardedAs:L&&!L(Y,x)||($[Y]=se[Y]));var Q=(function(fe,te){var Ve=ds(),ve=fe.generateAndInjectStyles(te,Ve.styleSheet,Ve.stylis);return ve})(rt,se),P=hn(Le,Pt);return Q&&(P+=" "+Q),se.className&&(P+=" "+se.className),$[Xc(x)&&!x1.has(x)?"class":"className"]=P,Te&&($.ref=Te),O.createElement(x,$)})(Z,le,K)}H.displayName=M;var Z=Ye.forwardRef(H);return Z.attrs=B,Z.componentStyle=V,Z.displayName=M,Z.shouldForwardProp=G,Z.foldedComponentIds=c?hn(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=U,Z.target=c?d.target:l,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=c?(function(K){for(var ie=[],F=1;F<arguments.length;F++)ie[F-1]=arguments[F];for(var Te=0,Ee=ie;Te<Ee.length;Te++)ss(K,Ee[Te],!0);return K})({},d.defaultProps,le):le}}),As(Z,function(){return".".concat(Z.styledComponentId)}),p&&C1(Z,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Jh(l,o){for(var s=[l[0]],c=0,d=o.length;c<d;c+=1)s.push(o[c],l[c+1]);return s}var Wh=function(l){return Object.assign(l,{isCss:!0})};function jo(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];if(gn(l)||Si(l))return Wh(Za(Jh(So,sl([l],o,!0))));var c=l;return o.length===0&&c.length===1&&typeof c[0]=="string"?Za(c):Wh(Za(Jh(c,o)))}function ms(l,o,s){if(s===void 0&&(s=hl),!o)throw vn(1,o);var c=function(d){for(var p=[],y=1;y<arguments.length;y++)p[y-1]=arguments[y];return l(o,s,jo.apply(void 0,sl([d],p,!1)))};return c.attrs=function(d){return ms(l,o,Fe(Fe({},s),{attrs:Array.prototype.concat(s.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return ms(l,o,Fe(Fe({},s),d))},c}var N1=function(l){return ms(Wv,l)},z=N1;x1.forEach(function(l){z[l]=N1(l)});var Fv=(function(){function l(o,s){this.rules=o,this.componentId=s,this.isStatic=_1(o),so.registerId(this.componentId+1)}return l.prototype.createStyles=function(o,s,c,d){var p=d(uo(Za(this.rules,s,c,d)),""),y=this.componentId+o;c.insertRules(y,y,p)},l.prototype.removeStyles=function(o,s){s.clearRules(this.componentId+o)},l.prototype.renderStyles=function(o,s,c,d){o>2&&so.registerId(this.componentId+o),this.removeStyles(o,c),this.createStyles(o,s,c,d)},l})();function Pv(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var c=jo.apply(void 0,sl([l],o,!1)),d="sc-global-".concat(Ss(JSON.stringify(c))),p=new Fv(c,d),y=function(b){var g=ds(),j=Ye.useContext(ji),M=Ye.useRef(g.styleSheet.allocateGSInstance(d)).current;return g.styleSheet.server&&E(M,b,g.styleSheet,j,g.stylis),Ye.useLayoutEffect(function(){if(!g.styleSheet.server)return E(M,b,g.styleSheet,j,g.stylis),function(){return p.removeStyles(M,g.styleSheet)}},[M,b,g.styleSheet,j,g.stylis]),null};function E(b,g,j,M,U){if(p.isStatic)p.renderStyles(b,bv,j,U);else{var B=Fe(Fe({},g),{theme:b1(g,M,y.defaultProps)});p.renderStyles(b,B,j,U)}}return Ye.memo(y)}function Iv(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var c=uo(jo.apply(void 0,sl([l],o,!1))),d=Ss(c);return new O1(d,c)}const h={colors:{primary:"#26a9e0",secundary:"#001f3D",white:"#FFFFFF",lightGray:"#F9FAFB",dark:"#000f1d",mediumGray:"#9E9E9E"},fonts:{primary:'"Inter", sans-serif',secondary:'"Roboto", sans-serif'},breakpoints:{mobile:"1020px",tablet:"986px",desktop:"1200px"},transitions:{default:"0.2s ease-in-out"},shadows:{small:"0 2px 4px rgba(0,0,0,0.1)",medium:"0 4px 8px rgba(0,0,0,0.15)",large:"0 8px 16px rgba(0,0,0,0.2)"}},e2=Pv`
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
`,t2=z.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({$isScrolled:l,theme:o})=>l?"rgba(255, 255, 255, 0.95)":"transparent"};
  box-shadow: ${({$isScrolled:l,theme:o})=>l?o.shadows.small:"none"};
  transition: all 0.1s ease-in-out;
`,a2=z.nav`
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
`,n2=z.a`
  font-family: ${({theme:l})=>l.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:l})=>l.colors.dark};
  text-decoration: none;
  
  span {
    color: ${({theme:l})=>l.colors.primary};
  }
`,l2=z.ul`
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
`,ll=z.li`
  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;z.a`
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
`;const i2=z.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    display: flex;
  }
`,r2="/AbaCorretora/assets/logo-Cfhf6tiY.png";/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fh="popstate";function o2(l={}){function o(c,d){let{pathname:p,search:y,hash:E}=c.location;return hs("",{pathname:p,search:y,hash:E},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(c,d){return typeof d=="string"?d:Ai(d)}return c2(o,s,null,l)}function Me(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Yt(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function u2(){return Math.random().toString(36).substring(2,10)}function Ph(l,o){return{usr:l.state,key:l.key,idx:o}}function hs(l,o,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?gl(o):o,state:s,key:o&&o.key||c||u2()}}function Ai({pathname:l="/",search:o="",hash:s=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function gl(l){let o={};if(l){let s=l.indexOf("#");s>=0&&(o.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function c2(l,o,s,c={}){let{window:d=document.defaultView,v5Compat:p=!1}=c,y=d.history,E="POP",b=null,g=j();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function j(){return(y.state||{idx:null}).idx}function M(){E="POP";let k=j(),V=k==null?null:k-g;g=k,b&&b({action:E,location:X.location,delta:V})}function U(k,V){E="PUSH";let H=hs(X.location,k,V);g=j()+1;let Z=Ph(H,g),le=X.createHref(H);try{y.pushState(Z,"",le)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(le)}p&&b&&b({action:E,location:X.location,delta:1})}function B(k,V){E="REPLACE";let H=hs(X.location,k,V);g=j();let Z=Ph(H,g),le=X.createHref(H);y.replaceState(Z,"",le),p&&b&&b({action:E,location:X.location,delta:0})}function G(k){return s2(k)}let X={get action(){return E},get location(){return l(d,y)},listen(k){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Fh,M),b=k,()=>{d.removeEventListener(Fh,M),b=null}},createHref(k){return o(d,k)},createURL:G,encodeLocation(k){let V=G(k);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:U,replace:B,go(k){return y.go(k)}};return X}function s2(l,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Me(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Ai(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function $1(l,o,s="/"){return f2(l,o,s,!1)}function f2(l,o,s,c){let d=typeof o=="string"?gl(o):o,p=ba(d.pathname||"/",s);if(p==null)return null;let y=U1(l);d2(y);let E=null;for(let b=0;E==null&&b<y.length;++b){let g=A2(p);E=S2(y[b],g,c)}return E}function U1(l,o=[],s=[],c="",d=!1){let p=(y,E,b=d,g)=>{let j={relativePath:g===void 0?y.path||"":g,caseSensitive:y.caseSensitive===!0,childrenIndex:E,route:y};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(c)&&b)return;Me(j.relativePath.startsWith(c),`Absolute route path "${j.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(c.length)}let M=ya([c,j.relativePath]),U=s.concat(j);y.children&&y.children.length>0&&(Me(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${M}".`),U1(y.children,o,U,M,b)),!(y.path==null&&!y.index)&&o.push({path:M,score:b2(M,y.index),routesMeta:U})};return l.forEach((y,E)=>{if(y.path===""||!y.path?.includes("?"))p(y,E);else for(let b of B1(y.path))p(y,E,!0,b)}),o}function B1(l){let o=l.split("/");if(o.length===0)return[];let[s,...c]=o,d=s.endsWith("?"),p=s.replace(/\?$/,"");if(c.length===0)return d?[p,""]:[p];let y=B1(c.join("/")),E=[];return E.push(...y.map(b=>b===""?p:[p,b].join("/"))),d&&E.push(...y),E.map(b=>l.startsWith("/")&&b===""?"/":b)}function d2(l){l.sort((o,s)=>o.score!==s.score?s.score-o.score:x2(o.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var m2=/^:[\w-]+$/,h2=3,p2=2,g2=1,v2=10,y2=-2,Ih=l=>l==="*";function b2(l,o){let s=l.split("/"),c=s.length;return s.some(Ih)&&(c+=y2),o&&(c+=p2),s.filter(d=>!Ih(d)).reduce((d,p)=>d+(m2.test(p)?h2:p===""?g2:v2),c)}function x2(l,o){return l.length===o.length&&l.slice(0,-1).every((c,d)=>c===o[d])?l[l.length-1]-o[o.length-1]:0}function S2(l,o,s=!1){let{routesMeta:c}=l,d={},p="/",y=[];for(let E=0;E<c.length;++E){let b=c[E],g=E===c.length-1,j=p==="/"?o:o.slice(p.length)||"/",M=fo({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},j),U=b.route;if(!M&&g&&s&&!c[c.length-1].route.index&&(M=fo({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},j)),!M)return null;Object.assign(d,M.params),y.push({params:d,pathname:ya([p,M.pathname]),pathnameBase:z2(ya([p,M.pathnameBase])),route:U}),M.pathnameBase!=="/"&&(p=ya([p,M.pathnameBase]))}return y}function fo(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=j2(l.path,l.caseSensitive,l.end),d=o.match(s);if(!d)return null;let p=d[0],y=p.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:c.reduce((g,{paramName:j,isOptional:M},U)=>{if(j==="*"){let G=E[U]||"";y=p.slice(0,p.length-G.length).replace(/(.)\/+$/,"$1")}const B=E[U];return M&&!B?g[j]=void 0:g[j]=(B||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:y,pattern:l}}function j2(l,o=!1,s=!0){Yt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,b)=>(c.push({paramName:E,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),c]}function A2(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Yt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function ba(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}function E2(l,o="/"){let{pathname:s,search:c="",hash:d=""}=typeof l=="string"?gl(l):l;return{pathname:s?s.startsWith("/")?s:w2(s,o):o,search:T2(c),hash:R2(d)}}function w2(l,o){let s=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Kc(l,o,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function C2(l){return l.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Es(l){let o=C2(l);return o.map((s,c)=>c===o.length-1?s.pathname:s.pathnameBase)}function ws(l,o,s,c=!1){let d;typeof l=="string"?d=gl(l):(d={...l},Me(!d.pathname||!d.pathname.includes("?"),Kc("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Kc("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Kc("#","search","hash",d)));let p=l===""||d.pathname==="",y=p?"/":d.pathname,E;if(y==null)E=s;else{let M=o.length-1;if(!c&&y.startsWith("..")){let U=y.split("/");for(;U[0]==="..";)U.shift(),M-=1;d.pathname=U.join("/")}E=M>=0?o[M]:"/"}let b=E2(d,E),g=y&&y!=="/"&&y.endsWith("/"),j=(p||y===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(g||j)&&(b.pathname+="/"),b}var ya=l=>l.join("/").replace(/\/\/+/g,"/"),z2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),T2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,R2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function O2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var H1=["POST","PUT","PATCH","DELETE"];new Set(H1);var M2=["GET",...H1];new Set(M2);var vl=O.createContext(null);vl.displayName="DataRouter";var Ao=O.createContext(null);Ao.displayName="DataRouterState";O.createContext(!1);var G1=O.createContext({isTransitioning:!1});G1.displayName="ViewTransition";var D2=O.createContext(new Map);D2.displayName="Fetchers";var _2=O.createContext(null);_2.displayName="Await";var Lt=O.createContext(null);Lt.displayName="Navigation";var Ei=O.createContext(null);Ei.displayName="Location";var Ft=O.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Cs=O.createContext(null);Cs.displayName="RouteError";function q2(l,{relative:o}={}){Me(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=O.useContext(Lt),{hash:d,pathname:p,search:y}=wi(l,{relative:o}),E=p;return s!=="/"&&(E=p==="/"?s:ya([s,p])),c.createHref({pathname:E,search:y,hash:d})}function yl(){return O.useContext(Ei)!=null}function xa(){return Me(yl(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ei).location}var k1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Y1(l){O.useContext(Lt).static||O.useLayoutEffect(l)}function L1(){let{isDataRoute:l}=O.useContext(Ft);return l?Z2():N2()}function N2(){Me(yl(),"useNavigate() may be used only in the context of a <Router> component.");let l=O.useContext(vl),{basename:o,navigator:s}=O.useContext(Lt),{matches:c}=O.useContext(Ft),{pathname:d}=xa(),p=JSON.stringify(Es(c)),y=O.useRef(!1);return Y1(()=>{y.current=!0}),O.useCallback((b,g={})=>{if(Yt(y.current,k1),!y.current)return;if(typeof b=="number"){s.go(b);return}let j=ws(b,JSON.parse(p),d,g.relative==="path");l==null&&o!=="/"&&(j.pathname=j.pathname==="/"?o:ya([o,j.pathname])),(g.replace?s.replace:s.push)(j,g.state,g)},[o,s,p,d,l])}O.createContext(null);function wi(l,{relative:o}={}){let{matches:s}=O.useContext(Ft),{pathname:c}=xa(),d=JSON.stringify(Es(s));return O.useMemo(()=>ws(l,JSON.parse(d),c,o==="path"),[l,d,c,o])}function $2(l,o){return Q1(l,o)}function Q1(l,o,s,c,d){Me(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=O.useContext(Lt),{matches:y}=O.useContext(Ft),E=y[y.length-1],b=E?E.params:{},g=E?E.pathname:"/",j=E?E.pathnameBase:"/",M=E&&E.route;{let H=M&&M.path||"";V1(g,!M||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let U=xa(),B;if(o){let H=typeof o=="string"?gl(o):o;Me(j==="/"||H.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${H.pathname}" was given in the \`location\` prop.`),B=H}else B=U;let G=B.pathname||"/",X=G;if(j!=="/"){let H=j.replace(/^\//,"").split("/");X="/"+G.replace(/^\//,"").split("/").slice(H.length).join("/")}let k=$1(l,{pathname:X});Yt(M||k!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Yt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=k2(k&&k.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:ya([j,p.encodeLocation?p.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?j:ya([j,p.encodeLocation?p.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),y,s,c,d);return o&&V?O.createElement(Ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},V):V}function U2(){let l=X2(),o=O2(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",l),y=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:p},"ErrorBoundary")," or"," ",O.createElement("code",{style:p},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},o),s?O.createElement("pre",{style:d},s):null,y)}var B2=O.createElement(U2,null),H2=class extends O.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.unstable_onError?this.props.unstable_onError(l,o):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?O.createElement(Ft.Provider,{value:this.props.routeContext},O.createElement(Cs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function G2({routeContext:l,match:o,children:s}){let c=O.useContext(vl);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),O.createElement(Ft.Provider,{value:l},s)}function k2(l,o=[],s=null,c=null,d=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let p=l,y=s?.errors;if(y!=null){let g=p.findIndex(j=>j.route.id&&y?.[j.route.id]!==void 0);Me(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),p=p.slice(0,Math.min(p.length,g+1))}let E=!1,b=-1;if(s)for(let g=0;g<p.length;g++){let j=p[g];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(b=g),j.route.id){let{loaderData:M,errors:U}=s,B=j.route.loader&&!M.hasOwnProperty(j.route.id)&&(!U||U[j.route.id]===void 0);if(j.route.lazy||B){E=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}return p.reduceRight((g,j,M)=>{let U,B=!1,G=null,X=null;s&&(U=y&&j.route.id?y[j.route.id]:void 0,G=j.route.errorElement||B2,E&&(b<0&&M===0?(V1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,X=null):b===M&&(B=!0,X=j.route.hydrateFallbackElement||null)));let k=o.concat(p.slice(0,M+1)),V=()=>{let H;return U?H=G:B?H=X:j.route.Component?H=O.createElement(j.route.Component,null):j.route.element?H=j.route.element:H=g,O.createElement(G2,{match:j,routeContext:{outlet:g,matches:k,isDataRoute:s!=null},children:H})};return s&&(j.route.ErrorBoundary||j.route.errorElement||M===0)?O.createElement(H2,{location:s.location,revalidation:s.revalidation,component:G,error:U,children:V(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:c}):V()},null)}function zs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y2(l){let o=O.useContext(vl);return Me(o,zs(l)),o}function L2(l){let o=O.useContext(Ao);return Me(o,zs(l)),o}function Q2(l){let o=O.useContext(Ft);return Me(o,zs(l)),o}function Ts(l){let o=Q2(l),s=o.matches[o.matches.length-1];return Me(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function V2(){return Ts("useRouteId")}function X2(){let l=O.useContext(Cs),o=L2("useRouteError"),s=Ts("useRouteError");return l!==void 0?l:o.errors?.[s]}function Z2(){let{router:l}=Y2("useNavigate"),o=Ts("useNavigate"),s=O.useRef(!1);return Y1(()=>{s.current=!0}),O.useCallback(async(d,p={})=>{Yt(s.current,k1),s.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:o,...p}))},[l,o])}var e1={};function V1(l,o,s){!o&&!e1[l]&&(e1[l]=!0,Yt(!1,s))}O.memo(K2);function K2({routes:l,future:o,state:s,unstable_onError:c}){return Q1(l,void 0,s,c,o)}function J2({to:l,replace:o,state:s,relative:c}){Me(yl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=O.useContext(Lt);Yt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=O.useContext(Ft),{pathname:y}=xa(),E=L1(),b=ws(l,Es(p),y,c==="path"),g=JSON.stringify(b);return O.useEffect(()=>{E(JSON.parse(g),{replace:o,state:s,relative:c})},[E,g,c,o,s]),null}function Xa(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function W2({basename:l="/",children:o=null,location:s,navigationType:c="POP",navigator:d,static:p=!1}){Me(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),E=O.useMemo(()=>({basename:y,navigator:d,static:p,future:{}}),[y,d,p]);typeof s=="string"&&(s=gl(s));let{pathname:b="/",search:g="",hash:j="",state:M=null,key:U="default"}=s,B=O.useMemo(()=>{let G=ba(b,y);return G==null?null:{location:{pathname:G,search:g,hash:j,state:M,key:U},navigationType:c}},[y,b,g,j,M,U,c]);return Yt(B!=null,`<Router basename="${y}"> is not able to match the URL "${b}${g}${j}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:O.createElement(Lt.Provider,{value:E},O.createElement(Ei.Provider,{children:o,value:B}))}function F2({children:l,location:o}){return $2(ps(l),o)}function ps(l,o=[]){let s=[];return O.Children.forEach(l,(c,d)=>{if(!O.isValidElement(c))return;let p=[...o,d];if(c.type===O.Fragment){s.push.apply(s,ps(c.props.children,p));return}Me(c.type===Xa,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=ps(c.props.children,p)),s.push(y)}),s}var lo="get",io="application/x-www-form-urlencoded";function Eo(l){return l!=null&&typeof l.tagName=="string"}function P2(l){return Eo(l)&&l.tagName.toLowerCase()==="button"}function I2(l){return Eo(l)&&l.tagName.toLowerCase()==="form"}function ey(l){return Eo(l)&&l.tagName.toLowerCase()==="input"}function ty(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ay(l,o){return l.button===0&&(!o||o==="_self")&&!ty(l)}var Yr=null;function ny(){if(Yr===null)try{new FormData(document.createElement("form"),0),Yr=!1}catch{Yr=!0}return Yr}var ly=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jc(l){return l!=null&&!ly.has(l)?(Yt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`),null):l}function iy(l,o){let s,c,d,p,y;if(I2(l)){let E=l.getAttribute("action");c=E?ba(E,o):null,s=l.getAttribute("method")||lo,d=Jc(l.getAttribute("enctype"))||io,p=new FormData(l)}else if(P2(l)||ey(l)&&(l.type==="submit"||l.type==="image")){let E=l.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||E.getAttribute("action");if(c=b?ba(b,o):null,s=l.getAttribute("formmethod")||E.getAttribute("method")||lo,d=Jc(l.getAttribute("formenctype"))||Jc(E.getAttribute("enctype"))||io,p=new FormData(E,l),!ny()){let{name:g,type:j,value:M}=l;if(j==="image"){let U=g?`${g}.`:"";p.append(`${U}x`,"0"),p.append(`${U}y`,"0")}else g&&p.append(g,M)}}else{if(Eo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=lo,c=null,d=io,y=l}return p&&d==="text/plain"&&(y=p,p=void 0),{action:c,method:s.toLowerCase(),encType:d,formData:p,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rs(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function ry(l,o,s){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c.pathname==="/"?c.pathname=`_root.${s}`:o&&ba(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function oy(l,o){if(l.id in o)return o[l.id];try{let s=await import(l.module);return o[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uy(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function cy(l,o,s){let c=await Promise.all(l.map(async d=>{let p=o.routes[d.route.id];if(p){let y=await oy(p,s);return y.links?y.links():[]}return[]}));return my(c.flat(1).filter(uy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function t1(l,o,s,c,d,p){let y=(b,g)=>s[g]?b.route.id!==s[g].route.id:!0,E=(b,g)=>s[g].pathname!==b.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==b.params["*"];return p==="assets"?o.filter((b,g)=>y(b,g)||E(b,g)):p==="data"?o.filter((b,g)=>{let j=c.routes[b.route.id];if(!j||!j.hasLoader)return!1;if(y(b,g)||E(b,g))return!0;if(b.route.shouldRevalidate){let M=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function sy(l,o,{includeHydrateFallback:s}={}){return fy(l.map(c=>{let d=o.routes[c.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function fy(l){return[...new Set(l)]}function dy(l){let o={},s=Object.keys(l).sort();for(let c of s)o[c]=l[c];return o}function my(l,o){let s=new Set;return new Set(o),l.reduce((c,d)=>{let p=JSON.stringify(dy(d));return s.has(p)||(s.add(p),c.push({key:p,link:d})),c},[])}function X1(){let l=O.useContext(vl);return Rs(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function hy(){let l=O.useContext(Ao);return Rs(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Os=O.createContext(void 0);Os.displayName="FrameworkContext";function Z1(){let l=O.useContext(Os);return Rs(l,"You must render this element inside a <HydratedRouter> element"),l}function py(l,o){let s=O.useContext(Os),[c,d]=O.useState(!1),[p,y]=O.useState(!1),{onFocus:E,onBlur:b,onMouseEnter:g,onMouseLeave:j,onTouchStart:M}=o,U=O.useRef(null);O.useEffect(()=>{if(l==="render"&&y(!0),l==="viewport"){let X=V=>{V.forEach(H=>{y(H.isIntersecting)})},k=new IntersectionObserver(X,{threshold:.5});return U.current&&k.observe(U.current),()=>{k.disconnect()}}},[l]),O.useEffect(()=>{if(c){let X=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(X)}}},[c]);let B=()=>{d(!0)},G=()=>{d(!1),y(!1)};return s?l!=="intent"?[p,U,{}]:[p,U,{onFocus:yi(E,B),onBlur:yi(b,G),onMouseEnter:yi(g,B),onMouseLeave:yi(j,G),onTouchStart:yi(M,B)}]:[!1,U,{}]}function yi(l,o){return s=>{l&&l(s),s.defaultPrevented||o(s)}}function gy({page:l,...o}){let{router:s}=X1(),c=O.useMemo(()=>$1(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?O.createElement(yy,{page:l,matches:c,...o}):null}function vy(l){let{manifest:o,routeModules:s}=Z1(),[c,d]=O.useState([]);return O.useEffect(()=>{let p=!1;return cy(l,o,s).then(y=>{p||d(y)}),()=>{p=!0}},[l,o,s]),c}function yy({page:l,matches:o,...s}){let c=xa(),{manifest:d,routeModules:p}=Z1(),{basename:y}=X1(),{loaderData:E,matches:b}=hy(),g=O.useMemo(()=>t1(l,o,b,d,c,"data"),[l,o,b,d,c]),j=O.useMemo(()=>t1(l,o,b,d,c,"assets"),[l,o,b,d,c]),M=O.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let G=new Set,X=!1;if(o.forEach(V=>{let H=d.routes[V.route.id];!H||!H.hasLoader||(!g.some(Z=>Z.route.id===V.route.id)&&V.route.id in E&&p[V.route.id]?.shouldRevalidate||H.hasClientLoader?X=!0:G.add(V.route.id))}),G.size===0)return[];let k=ry(l,y,"data");return X&&G.size>0&&k.searchParams.set("_routes",o.filter(V=>G.has(V.route.id)).map(V=>V.route.id).join(",")),[k.pathname+k.search]},[y,E,c,d,g,o,l,p]),U=O.useMemo(()=>sy(j,d),[j,d]),B=vy(j);return O.createElement(O.Fragment,null,M.map(G=>O.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...s})),U.map(G=>O.createElement("link",{key:G,rel:"modulepreload",href:G,...s})),B.map(({key:G,link:X})=>O.createElement("link",{key:G,nonce:s.nonce,...X})))}function by(...l){return o=>{l.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var K1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{K1&&(window.__reactRouterVersion="7.9.1")}catch{}function xy({basename:l,children:o,window:s}){let c=O.useRef();c.current==null&&(c.current=o2({window:s,v5Compat:!0}));let d=c.current,[p,y]=O.useState({action:d.action,location:d.location}),E=O.useCallback(b=>{O.startTransition(()=>y(b))},[y]);return O.useLayoutEffect(()=>d.listen(E),[d,E]),O.createElement(W2,{basename:l,children:o,location:p.location,navigationType:p.action,navigator:d})}var J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=O.forwardRef(function({onClick:o,discover:s="render",prefetch:c="none",relative:d,reloadDocument:p,replace:y,state:E,target:b,to:g,preventScrollReset:j,viewTransition:M,...U},B){let{basename:G}=O.useContext(Lt),X=typeof g=="string"&&J1.test(g),k,V=!1;if(typeof g=="string"&&X&&(k=g,K1))try{let Ee=new URL(window.location.href),rt=g.startsWith("//")?new URL(Ee.protocol+g):new URL(g),ut=ba(rt.pathname,G);rt.origin===Ee.origin&&ut!=null?g=ut+rt.search+rt.hash:V=!0}catch{Yt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=q2(g,{relative:d}),[Z,le,K]=py(c,U),ie=Ey(g,{replace:y,state:E,target:b,preventScrollReset:j,relative:d,viewTransition:M});function F(Ee){o&&o(Ee),Ee.defaultPrevented||ie(Ee)}let Te=O.createElement("a",{...U,...K,href:k||H,onClick:V||p?o:F,ref:by(B,le),target:b,"data-discover":!X&&s==="render"?"true":void 0});return Z&&!X?O.createElement(O.Fragment,null,Te,O.createElement(gy,{page:H})):Te});ht.displayName="Link";var Sy=O.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:c="",end:d=!1,style:p,to:y,viewTransition:E,children:b,...g},j){let M=wi(y,{relative:g.relative}),U=xa(),B=O.useContext(Ao),{navigator:G,basename:X}=O.useContext(Lt),k=B!=null&&Ry(M)&&E===!0,V=G.encodeLocation?G.encodeLocation(M).pathname:M.pathname,H=U.pathname,Z=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;s||(H=H.toLowerCase(),Z=Z?Z.toLowerCase():null,V=V.toLowerCase()),Z&&X&&(Z=ba(Z,X)||Z);const le=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let K=H===V||!d&&H.startsWith(V)&&H.charAt(le)==="/",ie=Z!=null&&(Z===V||!d&&Z.startsWith(V)&&Z.charAt(V.length)==="/"),F={isActive:K,isPending:ie,isTransitioning:k},Te=K?o:void 0,Ee;typeof c=="function"?Ee=c(F):Ee=[c,K?"active":null,ie?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let rt=typeof p=="function"?p(F):p;return O.createElement(ht,{...g,"aria-current":Te,className:Ee,ref:j,style:rt,to:y,viewTransition:E},typeof b=="function"?b(F):b)});Sy.displayName="NavLink";var jy=O.forwardRef(({discover:l="render",fetcherKey:o,navigate:s,reloadDocument:c,replace:d,state:p,method:y=lo,action:E,onSubmit:b,relative:g,preventScrollReset:j,viewTransition:M,...U},B)=>{let G=zy(),X=Ty(E,{relative:g}),k=y.toLowerCase()==="get"?"get":"post",V=typeof E=="string"&&J1.test(E),H=Z=>{if(b&&b(Z),Z.defaultPrevented)return;Z.preventDefault();let le=Z.nativeEvent.submitter,K=le?.getAttribute("formmethod")||y;G(le||Z.currentTarget,{fetcherKey:o,method:K,navigate:s,replace:d,state:p,relative:g,preventScrollReset:j,viewTransition:M})};return O.createElement("form",{ref:B,method:k,action:X,onSubmit:c?b:H,...U,"data-discover":!V&&l==="render"?"true":void 0})});jy.displayName="Form";function Ay(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W1(l){let o=O.useContext(vl);return Me(o,Ay(l)),o}function Ey(l,{target:o,replace:s,state:c,preventScrollReset:d,relative:p,viewTransition:y}={}){let E=L1(),b=xa(),g=wi(l,{relative:p});return O.useCallback(j=>{if(ay(j,o)){j.preventDefault();let M=s!==void 0?s:Ai(b)===Ai(g);E(l,{replace:M,state:c,preventScrollReset:d,relative:p,viewTransition:y})}},[b,E,g,s,c,o,l,d,p,y])}var wy=0,Cy=()=>`__${String(++wy)}__`;function zy(){let{router:l}=W1("useSubmit"),{basename:o}=O.useContext(Lt),s=V2();return O.useCallback(async(c,d={})=>{let{action:p,method:y,encType:E,formData:b,body:g}=iy(c,o);if(d.navigate===!1){let j=d.fetcherKey||Cy();await l.fetch(j,s,d.action||p,{preventScrollReset:d.preventScrollReset,formData:b,body:g,formMethod:d.method||y,formEncType:d.encType||E,flushSync:d.flushSync})}else await l.navigate(d.action||p,{preventScrollReset:d.preventScrollReset,formData:b,body:g,formMethod:d.method||y,formEncType:d.encType||E,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,o,s])}function Ty(l,{relative:o}={}){let{basename:s}=O.useContext(Lt),c=O.useContext(Ft);Me(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),p={...wi(l||".",{relative:o})},y=xa();if(l==null){p.search=y.search;let E=new URLSearchParams(p.search),b=E.getAll("index");if(b.some(j=>j==="")){E.delete("index"),b.filter(M=>M).forEach(M=>E.append("index",M));let j=E.toString();p.search=j?`?${j}`:""}}return(!l||l===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:ya([s,p.pathname])),Ai(p)}function Ry(l,{relative:o}={}){let s=O.useContext(G1);Me(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=W1("useViewTransitionState"),d=wi(l,{relative:o});if(!s.isTransitioning)return!1;let p=ba(s.currentLocation.pathname,c)||s.currentLocation.pathname,y=ba(s.nextLocation.pathname,c)||s.nextLocation.pathname;return fo(d.pathname,y)!=null||fo(d.pathname,p)!=null}const Oy=()=>{const[l,o]=O.useState(!1),[s,c]=O.useState(!1),d=()=>c(!1);return O.useEffect(()=>{const p=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),u.jsx(t2,{$isScrolled:l,children:u.jsxs(a2,{children:[u.jsx(n2,{href:"/AbaCorretora",children:u.jsx("img",{src:r2,alt:"Logo",width:150,height:"auto"})}),u.jsx(i2,{onClick:()=>c(!s),"aria-label":"Menu",children:"☰"}),u.jsxs(l2,{$isOpen:s,children:[u.jsx(ll,{children:u.jsx(ht,{className:"navLink",to:"/AbaCorretora",onClick:d,children:"HOME"})}),u.jsx(ll,{children:u.jsx(ht,{className:"navLink",to:"/seguros",onClick:d,children:"SEGUROS"})}),u.jsx(ll,{children:u.jsx(ht,{className:"navLink",to:"/consorcios",onClick:d,children:"CONSÓRCIOS"})}),u.jsx(ll,{children:u.jsx(ht,{className:"navLink",to:"/saude",onClick:d,children:"SAÚDE"})}),u.jsx(ll,{children:u.jsx(ht,{className:"navLink",to:"/contato",onClick:d,children:"CONTATO"})}),u.jsx(ll,{children:u.jsx(ht,{className:"navLink",to:"/corretoras",onClick:d})})]})]})})},My=z.footer`
  background-color: ${h.colors.dark};
  color: ${h.colors.white};
  padding: 4rem 0 0;
`,Dy=z.div`
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
`,Lr=z.div`
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
`,Qr=z.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: ${h.colors.primary};
`,ze=z.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all ${h.transitions.default};
  
  &:hover {
    color: ${h.colors.primary};
    padding-left: 5px;
  }
`,_y=z.div`
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
`,qy=z.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  
  p {
    margin: 0.5rem 0;
  }
`,Ny=z.img`
  width: 30%; 
  height: auto; 
`;var F1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a1=Ye.createContext&&Ye.createContext(F1),$y=["attr","size","title"];function Uy(l,o){if(l==null)return{};var s=By(l,o),c,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(d=0;d<p.length;d++)c=p[d],!(o.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(s[c]=l[c])}return s}function By(l,o){if(l==null)return{};var s={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(o.indexOf(c)>=0)continue;s[c]=l[c]}return s}function mo(){return mo=Object.assign?Object.assign.bind():function(l){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=s[c])}return l},mo.apply(this,arguments)}function n1(l,o){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);o&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(l,d).enumerable})),s.push.apply(s,c)}return s}function ho(l){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?n1(Object(s),!0).forEach(function(c){Hy(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):n1(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function Hy(l,o,s){return o=Gy(o),o in l?Object.defineProperty(l,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[o]=s,l}function Gy(l){var o=ky(l,"string");return typeof o=="symbol"?o:o+""}function ky(l,o){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var c=s.call(l,o);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(l)}function P1(l){return l&&l.map((o,s)=>Ye.createElement(o.tag,ho({key:s},o.attr),P1(o.child)))}function Pe(l){return o=>Ye.createElement(Yy,mo({attr:ho({},l.attr)},o),P1(l.child))}function Yy(l){var o=s=>{var{attr:c,size:d,title:p}=l,y=Uy(l,$y),E=d||s.size||"1em",b;return s.className&&(b=s.className),l.className&&(b=(b?b+" ":"")+l.className),Ye.createElement("svg",mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,y,{className:b,style:ho(ho({color:l.color||s.color},s.style),l.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),p&&Ye.createElement("title",null,p),l.children)};return a1!==void 0?Ye.createElement(a1.Consumer,null,s=>o(s)):o(F1)}function Ly(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(l)}function Qy(l){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(l)}function I1(l){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(l)}function Vy(l){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}function Xy(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(l)}function Zy(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(l)}function Ky(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function Jy(l){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"},child:[]}]})(l)}function Wy(l){return Pe({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(l)}function Fy(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(l)}function Py(l){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"},child:[]}]})(l)}function Iy(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(l)}function eb(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(l)}function tb(l){return Pe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"},child:[]}]})(l)}const ab="/AbaCorretora/assets/LOGO-ABA-DiJw_GYy.png",nb=()=>u.jsxs(My,{children:[u.jsxs(Dy,{children:[u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Seguros"}),u.jsx(ze,{children:"Automóvel"}),u.jsx(ze,{children:"Bicicleta"}),u.jsx(ze,{children:"Condomínio"}),u.jsx(ze,{children:"Empresarial"}),u.jsx(ze,{children:"Equipamentos Portáteis"}),u.jsx(ze,{children:"Eventos"}),u.jsx(ze,{children:"Máquinas"}),u.jsx(ze,{children:"Residência"}),u.jsx(ze,{children:"Responsabilidade Civil"}),u.jsx(ze,{children:"Viagem "}),u.jsx(ze,{children:"Vida"})]}),u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Demais Serviços"}),u.jsx(ze,{children:"Consórcio"}),u.jsx(ze,{children:"Empréstimo"}),u.jsx(ze,{children:"Financiamento"}),u.jsx(ze,{children:"Capitalização"}),u.jsx(ze,{children:"Plano de Saúde"}),u.jsx(ze,{children:"Plano Odontológico"}),u.jsx(ze,{children:"Serviços"}),u.jsx(ze,{children:"Carro por Assinatura"}),u.jsx(ze,{children:"Celular por Assinatura"}),u.jsx(ze,{children:"PetLove"})]}),u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Empresa"}),u.jsx(ze,{as:ht,to:"/AbaCorretora",children:"Home"}),u.jsx(ze,{as:ht,to:"/seguros",children:"Seguros"}),u.jsx(ze,{as:ht,to:"/consorcios",children:"Consórcios"}),u.jsx(ze,{as:ht,to:"/saude",children:"Saúde"}),u.jsx(ze,{as:ht,to:"/contato",children:"Contato"})]}),u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Nossas Redes Sociais"}),u.jsx(Ny,{src:ab,alt:"Descrição da imagem (ex: Selo de Segurança)"}),u.jsxs(_y,{children:[u.jsx("a",{href:"#","aria-label":"Facebook",children:u.jsx(Ly,{})}),u.jsx("a",{href:"#","aria-label":"Instagram",children:u.jsx(Qy,{})}),u.jsx("a",{href:"#","aria-label":"YouTube",children:u.jsx(Vy,{})})]})]})]}),u.jsxs(qy,{children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," ABA SEGUROS. Todos os direitos reservados."]}),u.jsx("p",{children:"CNPJ: 57.208.516/0001-43 | SUSEP: 2421619-27"})]})]}),lb=z.a`
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
`,ib="5511945411551",rb=()=>{const l=`https://wa.me/${ib}`;return u.jsx(lb,{href:l,target:"_blank",rel:"noreferrer","aria-label":"Fale conosco no WhatsApp",children:u.jsx(I1,{})})},ob=z.section`
  padding: 3rem 0;
  background-color: ${h.colors.lightGray};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;z.div`
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
`;const ub=z.div`
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
`,cb=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,sb=z.div`
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
`,fb=z.div`
  flex: 0 0 32%;
  scroll-snap-align: start;

  @media (max-width: ${h.breakpoints.tablet}) {
    flex-basis: 50%;
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-basis: 90%;
  }
`,db=z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
`,l1=z.button`
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
`,mb=z.div`
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
`,hb=z.section`
  background: ${h.colors.white};
  padding: 7rem 0 8rem 0;
  position: relative;
  overflow: hidden;
    

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,pb=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,gb=z.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,vb=z.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    align-items: center;
  }
`,yb=z.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,bb=z.p`
  color: ${h.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${h.breakpoints.tablet}) {
    max-width: 100%;
  }
`,xb=z.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: ${h.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,Sb=z.div`
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
`,jb=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Ab=z.div`
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
`,Wc=z.div`
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
`,Eb=z.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,wb=z.ol`
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
`,Vr=z.li`
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
`,Cb=z.section`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  padding: 2rem 0;
`,zb=z.div`
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
`,Xr=z.div`
  strong {
    font-size: 1.5rem;
    display: block;
  }
  span {
    opacity: 0.9;
    font-size: 0.95rem;
  }
`,Tb=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,Rb=z.div`
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
`,Ob=z.div`
  display: flex;
  flex-shrink: 0;
  
`,Fc=z.button`
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
`,Mb=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Db=z.div`
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
`,i1=z.div`
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
`;z.div`
  font-family: ${({theme:l})=>l.fonts.primary};
  color: ${({theme:l})=>l.colors.dark};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    padding: 0 15px;
  }
`;const pt=z.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: .6rem;
  text-align: center;
  color: #001f3D;

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,gt=z.p`
  font-size: 1.25rem;
  color: ${({theme:l})=>l.colors.mediumGray};
  text-align: center;
  max-width: 800px;
  margin: 0px auto 3rem;
  color: ${({theme:l,$inverted:o})=>o?"rgba(255, 255, 255, 0.8)":l.colors.mediumGray};

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,_b=z.section`
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
`,qb=z.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all ${h.transitions.default};
`,Nb=z.div`
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
`,$b=z.div`
  max-height: ${({isOpen:l})=>l?"500px":"0"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: ${({isOpen:l})=>l?"0 0 1.5rem":"0"};
  opacity: ${({isOpen:l})=>l?"1":"0"};
  line-height: 1.6;
  color: ${h.colors.mediumGray};
`;function Ub(l){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(l)}function Bb(l){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(l)}const Hb=()=>{const[l,o]=O.useState(null),s=[{question:"Como faço para contratar um seguro?",answer:"Você pode contratar diretamente pelo nosso site ou através do WhatsApp. O processo é rápido e simples."},{question:"Quanto tempo leva para aprovar uma apólice?",answer:"O prazo legal para aprovação de uma apolice é de 15 dias, conforme regulamentação da SUSEP. No entanto, algumas seguradoras podem ter um processo mais rápido."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Não tem taxa administrativa em caso de cancelamento."},{question:"Como faço para acionar meu seguro?",answer:u.jsxs(u.Fragment,{children:["Você pode entrar em contato direto com a companhia através da nossa"," ",u.jsx(ht,{className:"navLink",to:"/corretoras",children:"página de contatos"})," ","ou através do nosso "," ",u.jsx("a",{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",className:"navLink",children:"canal de atendimento ao segurado via WhatsApp"})," ","e nossa equipe irá guia-lo em todo o processo."]})},{question:"Quais documentos preciso para contratar?",answer:"Depende do tipo de seguro. Para seguros de automóvel, por exemplo, precisamos da CNH e documento do veículo. Nossa equipe informará todos os documentos necessários durante a contratação."}],c=d=>{o(l===d?null:d)};return u.jsxs(_b,{id:"faq",children:[u.jsxs(pt,{children:["Perguntas ",u.jsx("span",{children:"Frequentes"})]}),u.jsx(gt,{children:"Tire suas dúvidas sobre nossos produtos e serviços"}),u.jsx("div",{className:"faq-list",children:s.map((d,p)=>u.jsxs(qb,{isOpen:l===p,children:[u.jsxs(Nb,{onClick:()=>c(p),children:[d.question,l===p?u.jsx(Ub,{}):u.jsx(Bb,{})]}),u.jsx($b,{isOpen:l===p,children:d.answer})]},p))})]})},Ms=z.section`
  padding: 5rem 0;
  background-color: ${h.colors.lightGray};
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Gb=Iv`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,Ds=z.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 2rem;
`,_s=z.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: nowrap;
  width: max-content;
  animation: ${Gb} 20s linear infinite;

  // Pause on hover (desktop)
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation-play-state: paused;
    }
  }
`,qs=z.div`
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
`,po="/AbaCorretora/assets/Porto-30iDzEz_.webp",gs="/AbaCorretora/assets/suhai-BGSD2-ff.webp",ep="/AbaCorretora/assets/bradesco-seguros-CU0YlWGC.webp",tp="/AbaCorretora/assets/akad-WygRT6HJ.webp",ap="/AbaCorretora/assets/allianz-AD1QpejW.webp",np="/AbaCorretora/assets/azul-seguros-Dkd7YuIr.webp",kb="/AbaCorretora/assets/hdi-BSlu-vdy.webp",lp="/AbaCorretora/assets/itau-CA2YPp_k.webp",Yb="/AbaCorretora/assets/liberty-CYdUqwAU.webp",ip="/AbaCorretora/assets/mapfre-BfLKiNQi.webp",Lb="/AbaCorretora/assets/mitsui-DPVuNnp1.webp",rp="/AbaCorretora/assets/pier-C6X-gZNf.webp",op="/AbaCorretora/assets/tokio-PWOAQajT.webp",up="/AbaCorretora/assets/zurich-Bl3pizn0.webp",cp="/AbaCorretora/assets/metlife-CAXA8Mmt.webp",sp="/AbaCorretora/assets/unimed-K0Q_FeZr.webp",fp="/AbaCorretora/assets/sulamerica-bAr1DSkW.webp",dp="/AbaCorretora/assets/portosaude-D-kX7kVD.webp",mp="/AbaCorretora/assets/amil-Ds0I0K89.webp",hp="/AbaCorretora/assets/bradesco-saude-CTYd8tOi.webp",pp="/AbaCorretora/assets/hapvida-fH7cADKa.webp",gp="/AbaCorretora/assets/sao-cristovao-DIepHmhN.webp",Qb="/AbaCorretora/assets/sao-miguel-saude-C4GY8ihI.webp",vp="/AbaCorretora/assets/alice-BgrSNUpT.webp",Vb="/AbaCorretora/assets/allcare-BA9YMYeD.webp",yp="/AbaCorretora/assets/medsenior-DBUjLZq7.webp",bp="/AbaCorretora/assets/preventsenior-BTfljb9F.webp",Xb="/AbaCorretora/assets/omint-B64DAi7n.webp",Zb=()=>{const l=[{name:"Porto Seguro",logo:po},{name:"Unimed",logo:sp},{name:"Suhai",logo:gs},{name:"Metlife",logo:cp},{name:"Bradesco",logo:ep},{name:"Sul America",logo:fp},{name:"Akad",logo:tp},{name:"Porto Saude",logo:dp},{name:"Allianz",logo:ap},{name:"Amil",logo:mp},{name:"Porto Seguro",logo:po},{name:"Bradesco Saude",logo:hp},{name:"Azul",logo:np},{name:"Hapvida",logo:pp},{name:"Itau",logo:lp},{name:"Sao Cristovao",logo:gp},{name:"Mapfre",logo:ip},{name:"Alice",logo:vp},{name:"Pier",logo:rp},{name:"Prevent Senior",logo:bp},{name:"Tokio",logo:op},{name:"Medsenior",logo:yp},{name:"Zurich",logo:up}],o=[...l,...l];return u.jsx(Ms,{children:u.jsx(Ds,{children:u.jsx(_s,{children:o.map((s,c)=>u.jsx(qs,{children:u.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},Kb=()=>{const l=[{name:"Porto Seguro",logo:po},{name:"Suhai",logo:gs},{name:"Bradesco",logo:ep},{name:"Akad",logo:tp},{name:"Allianz",logo:ap},{name:"Porto Seguro",logo:po},{name:"Suhai",logo:gs},{name:"Azul",logo:np},{name:"HDI",logo:kb},{name:"Itau",logo:lp},{name:"Liberty",logo:Yb},{name:"Mapfre",logo:ip},{name:"Mitsui",logo:Lb},{name:"Pier",logo:rp},{name:"Tokio",logo:op},{name:"Zurich",logo:up}],o=[...l,...l];return u.jsx(Ms,{children:u.jsx(Ds,{children:u.jsx(_s,{children:o.map((s,c)=>u.jsx(qs,{children:u.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},Jb=()=>{const l=[{name:"Metlife",logo:cp},{name:"Unimed",logo:sp},{name:"Sul America",logo:fp},{name:"Porto Saude",logo:dp},{name:"Amil",logo:mp},{name:"Bradesco Saude",logo:hp},{name:"Hapvida",logo:pp},{name:"Sao Cristovao",logo:gp},{name:"Sao Miguel",logo:Qb},{name:"Alice",logo:vp},{name:"Allcare",logo:Vb},{name:"Medsenior",logo:yp},{name:"Prevent Senior",logo:bp},{name:"Omint",logo:Xb}],o=[...l,...l];return u.jsx(Ms,{children:u.jsx(Ds,{children:u.jsx(_s,{children:o.map((s,c)=>u.jsx(qs,{children:u.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},Wb=z.section`
  background-color: ${h.colors.dark};
  padding: 5rem 0;
  color: ${h.colors.white};
  overflow: hidden; /* Adicionado para conter o carrossel */
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Fb=z.div`
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
`,Pb=z.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`,Ib=z.div`
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
`,ex=z.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: ${({theme:l})=>l.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,tx=z.div`
  width: 100%;
  overflow: hidden;
`,ax=z.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`,nx=z.div`
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
`,lx=z.div`
  flex: 0 0 100%; // Faz cada slide ocupar 100% da viewport
  scroll-snap-align: start;
  min-width: 100%;
`,ix=z.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; // Alinha as setas à direita
  gap: 0.75rem;
  margin-top: 1rem;
  
  @media (max-width: ${h.breakpoints.tablet}) {
    justify-content: center; // Centraliza as setas no mobile
  }
`,r1=z.button`
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
`,rx="/AbaCorretora/assets/jucelino-Bp9UFJA2.png",ox="/AbaCorretora/assets/tamires-vPXPx5Bg.png",ux="/AbaCorretora/assets/thiago-DZ2v8mKy.png",cx="/AbaCorretora/assets/camila-CdxkK5qM.png",sx="/AbaCorretora/assets/vitor-C0e6Ru8k.png",fx=[{id:1,quote:"Aba Corretora, cuida da frota de veículos da minha Empresa com muita atenção e cuidado, toda equipe é muito atenciosa e o atendimento rápido e eficiênte, eu super recomendo.",name:"Jucelino Mendes",title:"Cliente há 2 anos",image:rx},{id:2,quote:"Sou muito satisfeita com meu seguro, a corretora Mariana é super competente, atenciosa, tirou todas minhas dúvidas quando fechei com eles. Obtive o melhor preço, eu amo e indico muito!!",name:"Tamires Elley",title:"Cliente há 1 ano",image:ox},{id:3,quote:"Profissional incrível! Desde o primeiro contato, me senti super bem direcionado no processo do meu seguro. Ela foi clara, prestativa e mostrou total domínio do que fazia. Estou com ela até hoje, porque confio e recomendo de verdade!",name:"Thiago Bastos",title:"Cliente há 3 anos",image:ux},{id:4,quote:"Mariana é uma corretora excelente: muito atenciosa, detalhista, com atendimento cordial e vasto conhecimento do mercado segurador. Sempre nos apresenta as melhores opções para proteger a vida, os bens, os serviços e também em soluções financeiras. ",name:"Camila Barbosa",title:"Cliente há 4 anos",image:cx},{id:5,quote:"Eu tenho seguro com a Aba e tenho total confiança que meu veículo e minha residência estão protegidos !! Sempre que preciso tenho um ótimo atendimento.",name:"Vitor Carneiro",title:"Cliente há 4 anos",image:sx}],dx=()=>{const l=O.useRef(null),o=s=>{if(!l.current)return;const c=l.current.querySelector(":scope > *");if(!c)return;const d=c.getBoundingClientRect().width,p=window.getComputedStyle(l.current),y=parseFloat(p.gap)||16,E=s==="next"?d+y:-(d+y);l.current.scrollBy({left:E,behavior:"smooth"})};return u.jsx(Wb,{id:"testimonials",children:u.jsxs(Fb,{children:[u.jsxs("div",{children:[u.jsx(ex,{children:"O que nossos clientes dizem"}),u.jsx(Pb,{children:"Mais de 400 clientes confiam em nossos serviços de proteção. Sua satisfação é nossa maior recompensa."})]}),u.jsxs(tx,{children:[u.jsx(ax,{children:u.jsx(nx,{ref:l,children:fx.map(s=>u.jsx(lx,{children:u.jsxs(Ib,{children:[u.jsx("div",{className:"quote",children:'"'}),u.jsx("p",{className:"testimonial",children:s.quote}),u.jsxs("div",{className:"author",children:[u.jsx("img",{src:s.image,alt:`Cliente ${s.name}`}),u.jsxs("div",{children:[u.jsx("h4",{children:s.name}),u.jsx("span",{children:s.title})]})]})]})},s.id))})}),u.jsxs(ix,{children:[u.jsx(r1,{"aria-label":"Anterior",onClick:()=>o("prev"),children:"◀"}),u.jsx(r1,{"aria-label":"Próximo",onClick:()=>o("next"),children:"▶"})]})]})]})})},mx="/AbaCorretora/assets/img-home-CAVUu0KH.webp",hx="/AbaCorretora/assets/automovel-v7wycPm7.webp",px="/AbaCorretora/assets/residencial-BkyGMxCT.webp",gx="/AbaCorretora/assets/saude-D9vBannL.webp",vx="/AbaCorretora/assets/financiamento-egU71Zvi.webp",yx="/AbaCorretora/assets/viagem-GBNKwrvT.webp",bx="/AbaCorretora/assets/pet-Bbrdhl-x.webp",xx=()=>{const l=[{icon:hx,title:"Seguros",description:"Seguros que protegem seus patrimônios e vida: automóvel, equipamentos, empresa, residência, viagem, vida e muito mais."},{icon:px,title:"Consórcio",description:"O consórcio é o caminho ideal para quem busca comprar um bem com parcelas que cabem no bolso e sem pagar juros."},{icon:gx,title:"Plano de Saúde",description:"Encontre o plano de saúde (individual, familiar ou empresarial) com a cobertura ideal para suas necessidades e seu orçamento."},{icon:vx,title:"Financiamento",description:"O financiamento ideal para suas conquistas. Taxas competitivas e planos flexíveis para você tirar seus projetos do papel."},{icon:yx,title:"Empréstimo",description:"O empréstimo que você precisa está aqui. Dinheiro na mão para seus objetivos e sonhos."},{icon:bx,title:"Petlove Saúde",description:"Planos de saúde para seu animal de estimação. Cuide bem do seu Pet."}];return u.jsxs(u.Fragment,{children:[u.jsxs(hb,{children:[u.jsx(pb,{children:u.jsxs(gb,{children:[u.jsxs(vb,{children:[u.jsx(yb,{children:"Tranquilidade para sua família, segurança para sua empresa."}),u.jsx(bb,{children:"Consultoria especializada em seguros, planos de saúde, odontológico e consórcios. As melhores soluções do mercado para você e sua empresa."}),u.jsx(Fc,{as:"a",href:"https://wa.me/5511945411551",children:"Contrate Agora"})]}),u.jsx(xb,{src:mx,alt:"imagem hero"})]})}),u.jsx(Sb,{})]}),u.jsxs(ob,{id:"products",children:[u.jsx(pt,{children:"Nossos Planos"}),u.jsx(gt,{children:"Opções que cabem no seu orçamento"}),(()=>{const o=O.useRef(null),s=d=>{if(!o.current)return;const p=o.current.parentElement,y=o.current.querySelector(":scope > *"),E=y?y.getBoundingClientRect().width+16:p.clientWidth,b=d==="next"?E:-E;o.current.scrollBy({left:b,behavior:"smooth"})},c=d=>{d.key==="ArrowRight"&&s("next"),d.key==="ArrowLeft"&&s("prev")};return u.jsxs(u.Fragment,{children:[u.jsx(cb,{role:"region","aria-label":"Carrossel de produtos",children:u.jsx(sb,{ref:o,tabIndex:0,onKeyDown:c,children:l.map((d,p)=>u.jsx(fb,{"aria-roledescription":"slide",children:u.jsxs(ub,{children:[u.jsx(mb,{children:u.jsx("img",{src:d.icon,alt:d.title})}),u.jsx("h3",{children:d.title}),u.jsx("p",{children:d.description}),u.jsxs("div",{className:"saiba-mais-wrapper",children:[u.jsx("a",{href:"https://wa.me/5511945411551",children:"Saiba mais "})," "]})]})},p))})}),u.jsxs(db,{children:[u.jsx(l1,{"aria-label":"Anterior",onClick:()=>s("prev"),children:"◀"}),u.jsx(l1,{"aria-label":"Próximo",onClick:()=>s("next"),children:"▶"})]})]})})()]}),u.jsxs(jb,{children:[u.jsx(pt,{children:"Por que escolher a ABA Corretora?"}),u.jsx(gt,{children:"Atendimento consultivo, múltiplas seguradoras parceiras e soluções sob medida para você e sua empresa."}),u.jsxs(Ab,{children:[u.jsx(Wc,{children:u.jsxs("div",{children:[u.jsx("h4",{children:"Assessoria Completa"}),u.jsx("p",{children:"Do orçamento à emissão da apólice e suporte em sinistros."})]})}),u.jsx(Wc,{children:u.jsxs("div",{children:[u.jsx("h4",{children:"Economia e Comparação"}),u.jsx("p",{children:"Cotamos nas principais seguradoras para o melhor custo-benefício."})]})}),u.jsx(Wc,{children:u.jsxs("div",{children:[u.jsx("h4",{children:"Atendimento Humanizado"}),u.jsx("p",{children:"Equipe próxima, rápida e disponível nos principais canais."})]})})]})]}),u.jsxs(Eb,{children:[u.jsx(pt,{children:"Como funciona"}),u.jsx(gt,{children:"4 passos simples para contratar seu seguro com tranquilidade."}),u.jsxs(wb,{children:[u.jsxs(Vr,{children:[u.jsx("h4",{children:"1. Entendimento"}),u.jsx("p",{children:"Coletamos suas necessidades e perfil para indicar coberturas ideais."})]}),u.jsxs(Vr,{children:[u.jsx("h4",{children:"2. Cotações"}),u.jsx("p",{children:"Comparamos propostas entre seguradoras parceiras."})]}),u.jsxs(Vr,{children:[u.jsx("h4",{children:"3. Personalização"}),u.jsx("p",{children:"Ajustamos franquias e coberturas conforme seu orçamento."})]}),u.jsxs(Vr,{children:[u.jsx("h4",{children:"4. Contratação"}),u.jsx("p",{children:"Documentação rápida e acompanhamento pós-venda."})]})]})]}),u.jsx(Cb,{children:u.jsxs(zb,{children:[u.jsxs(Xr,{children:[u.jsx("strong",{children:"8+"}),u.jsx("span",{children:"Anos de experiência"})]}),u.jsxs(Xr,{children:[u.jsx("strong",{children:"600+"}),u.jsx("span",{children:"Clientes atendidos"})]}),u.jsxs(Xr,{children:[u.jsx("strong",{children:"15+"}),u.jsx("span",{children:"Seguradoras parceiras"})]}),u.jsxs(Xr,{children:[u.jsx("strong",{children:"24h"}),u.jsx("span",{children:"Suporte em sinistros"})]})]})}),u.jsxs(Mb,{children:[u.jsx(pt,{children:"Mais soluções para você"}),u.jsx(gt,{children:"Além dos seguros, conte com nossas soluções em planos de saúde e consórcios para ampliar suas possibilidades."}),u.jsxs(Db,{children:[u.jsxs(i1,{children:[u.jsx("h3",{children:"Planos de Saúde"}),u.jsx("p",{children:"Cuidar da sua saúde e da sua família é prioridade. Oferecemos planos de saúde individuais, familiares e empresariais, com ampla rede de atendimento e condições acessíveis."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Atendimento nacional com hospitais, clínicas e laboratórios de referência."}),u.jsx("li",{children:"Consultas e exames com agendamento facilitado."}),u.jsx("li",{children:"Planos com ou sem coparticipação"}),u.jsx("li",{children:"Isenção de carência mediante análise"})]})]}),u.jsxs(i1,{children:[u.jsx("h3",{children:"Consórcios"}),u.jsx("p",{children:"Planeje suas conquistas com segurança e parcelas que cabem no seu bolso."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consórcio de automóveis"}),u.jsx("li",{children:"Consórcio imobiliário"}),u.jsx("li",{children:"Administração confiável e suporte em todas as etapas"})]})]})]})]}),u.jsx(Tb,{children:u.jsxs(Rb,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Fale com um especialista"}),u.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),u.jsxs(Ob,{children:[u.jsx(Fc,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"}),u.jsx(Fc,{as:"a",href:"#faq",style:{backgroundColor:"#fff",color:"#001f3D"},children:"Tirar dúvidas"})]})]})}),u.jsx(Zb,{}),u.jsx(dx,{}),u.jsx(Hb,{})]})},Sx=z.section`
  padding: 3rem 0;
  background: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
   
  }
`,Pc=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,jx=z.div`
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
`,il=z.article`
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
`,rl=z.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  background-color: #e0e0e0;
`,ol=z.div`
  background: ${h.colors.white};
  border-left: 4px solid ${h.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${h.colors.mediumGray};
  margin-top: 1rem;
`,Ax=z.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,Ex=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,wx=z.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,Cx=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,zx=z.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;z.p`
  color: ${h.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${h.breakpoints.tablet}) {
    max-width: 100%;
  }
`;const Tx=z.img`
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
`,Rx=z.div`
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
`,ul=z.button`
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
`,Ox=z.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,Mx=z.ol`
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
`,Zr=z.li`
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
`,Dx=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,_x=z.div`
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
`,qx=z.div`
  display: flex;
  flex-shrink: 0;
  
`,Nx=z.button`
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
`,$x=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Ux=z.div`
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
`,Bx=z.div`
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
`;z.div`
  font-size: 2.5rem;
  color: ${h.colors.primary};
`;const Hx=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Gx=z.div`
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
`;function kx(l){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"},child:[]}]})(l)}function Yx(l){return Pe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"},child:[]},{tag:"circle",attr:{cx:"9",cy:"13",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"13",r:"1"},child:[]},{tag:"path",attr:{d:"M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"},child:[]}]})(l)}const Lx="/AbaCorretora/assets/img-seguro-DlWdeZ7-.webp",Qx="/AbaCorretora/assets/seguro-auto-D6qreSmg.webp",Vx="/AbaCorretora/assets/seguro-residencial-Btqe_yzn.webp",Xx="/AbaCorretora/assets/seguro-equipamentos-CPBCTzMW.webp",Zx="/AbaCorretora/assets/seguro-bike-CuLlbGiL.webp",Kx="/AbaCorretora/assets/seguro-vida-DtiI4z54.webp",Jx="/AbaCorretora/assets/seguro-viagem-CuWjTEg6.webp",Wx=()=>{const l=[{icon:u.jsx(Iy,{}),title:"Proteção Completa",description:"Coberturas abrangentes para todas as situações que você possa imaginar."},{icon:u.jsx(tb,{}),title:"Preços Acessíveis",description:"Planos que cabem no seu bolso sem abrir mão da qualidade."},{icon:u.jsx(kx,{}),title:"Rápida Indenização",description:"Processos ágeis para que você receba o que é seu o mais rápido possível."},{icon:u.jsx(Yx,{}),title:"Suporte 24/7",description:"Atendimento humanizado disponível a qualquer hora, todos os dias."}],o=[{question:"Como funciona a franquia do seguro?",answer:"A franquia é a participação do segurado nos prejuízos em caso de sinistro. Se o custo do reparo for menor que a franquia, o segurado arca com o valor. Se for maior, a seguradora cobre o excedente."},{question:"O que é um sinistro e como devo proceder?",answer:"Sinistro é qualquer evento previsto na apólice que cause dano ou prejuízo. Ao ocorrer, você deve entrar em contato com a seguradora o mais rápido possível para receber as orientações de como acionar sua cobertura."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Sim, a maioria dos seguros pode ser cancelada a qualquer momento. A seguradora fará um cálculo para devolver parte do valor pago, proporcional ao tempo que ainda resta de cobertura."},{question:"Qual a diferença entre seguro e assistência 24h?",answer:"O seguro cobre os prejuízos financeiros de um sinistro (roubo, colisão, etc.), enquanto a assistência 24h oferece serviços emergenciais como guincho, chaveiro e eletricista, garantindo suporte no dia a dia."}];return u.jsxs(u.Fragment,{children:[u.jsxs(Ax,{children:[u.jsx(Ex,{children:u.jsxs(wx,{children:[u.jsx(Cx,{children:u.jsx(zx,{children:"Proteção completa para manter você e sua família seguros."})}),u.jsx(Tx,{src:Lx,alt:"imagem hero"})]})}),u.jsx(Rx,{})]}),u.jsx(Sx,{children:u.jsxs(Pc,{children:[u.jsx(pt,{children:"Nossos Seguros"}),u.jsx(gt,{children:"Proteção para todas as fases da sua vida. Encontre a solução ideal para veículos, residência, viagens, vida, equipamentos e muito mais."}),u.jsxs(jx,{children:[u.jsxs(il,{children:[u.jsx(rl,{src:Qx,alt:"Ícone representando seguro de automóvel"}),u.jsx("h3",{children:"Seguro Automóvel"}),u.jsx("p",{children:"Proteção contra colisão, roubo, furto, eventos naturais e terceiros."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Guincho 24h, carro reserva, taxi, hospedagem e etc"}),u.jsx("li",{children:"Cobertura para vidros, faróis, retrovisores "}),u.jsx("li",{children:"Assistência completa a terceiros"})]}),u.jsx(ol,{children:"Indicado para quem busca tranquilidade no dia a dia e proteção patrimonial."}),u.jsx(ul,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(il,{children:[u.jsx(rl,{src:Vx,alt:"Ícone representando seguro residencial"}),u.jsx("h3",{children:"Seguro Residencial"}),u.jsx("p",{children:"Coberturas essenciais para sua casa: incêndio, vendaval, roubo e danos elétricos."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Assistência 24h (chaveiro, encanador, eletricista e etc)"}),u.jsx("li",{children:"Responsabilidade civil familiar"}),u.jsx("li",{children:"Proteção para eletroeletrônicos"})]}),u.jsx(ol,{children:"Excelente custo-benefício para proteger seu patrimônio e rotina."}),u.jsx(ul,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(il,{children:[u.jsx(rl,{src:Jx,alt:"Ícone representando seguro de viagem"}),u.jsx("h3",{children:"Seguro Viagem"}),u.jsx("p",{children:"Viaje pelo mundo com a certeza de que imprevistos médicos e logísticos não vão estragar sua experiência."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Despesas Médicas e Hospitalares"}),u.jsx("li",{children:"Cancelamento de viagem e extravio de bagagem"}),u.jsx("li",{children:"Assistência internacional 24h "})]}),u.jsx(ol,{children:"Essencial para viagens internacionais e para garantir sua paz de espírito."}),u.jsx(ul,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(il,{children:[u.jsx(rl,{src:Kx,alt:"Ícone representando seguro de vida"}),u.jsx("h3",{children:"Seguro de Vida"}),u.jsx("p",{children:"Garanta a segurança financeira de quem você ama em momentos delicados, protegendo o futuro da sua família."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Cobertura em caso de falecimento"}),u.jsx("li",{children:"Indenização por invalidez (total ou parcial)"}),u.jsx("li",{children:"Assistência para doenças graves e acidentes"})]}),u.jsx(ol,{children:"Essencial para proteger financeiramente sua família e entes queridos."}),u.jsx(ul,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(il,{children:[u.jsx(rl,{src:Xx,alt:"Ícone representando seguro de equipamentos"}),u.jsx("h3",{children:"Equipamentos Portáteis"}),u.jsx("p",{children:"Proteja seus eletrônicos como notebook, smartphone e câmera contra danos, roubo e furto."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Proteção contra roubo e furto"}),u.jsx("li",{children:"Cobertura para danos físicos acidentais (quedas)"}),u.jsx("li",{children:"Danos elétricos e por líquidos"})]}),u.jsx(ol,{children:"Perfeito para profissionais e estudantes que dependem de seus equipamentos."}),u.jsx(ul,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(il,{children:[u.jsx(rl,{src:Zx,alt:"Ícone representando seguro de bicicleta"}),u.jsx("h3",{children:"Seguro de Bicicleta"}),u.jsx("p",{children:"Pedale com tranquilidade sabendo que sua bike está protegida contra roubo, furto e acidentes."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Cobertura contra roubo e furto qualificado"}),u.jsx("li",{children:"Danos acidentais e quebra"}),u.jsx("li",{children:"Assistência e transporte em caso de acidente"})]}),u.jsx(ol,{children:"Ideal para ciclistas urbanos e atletas que querem garantir a segurança do seu investimento."}),u.jsx(ul,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]})]})]})}),u.jsx($x,{children:u.jsxs(Pc,{children:[u.jsx(pt,{children:"Nossos Diferenciais"}),u.jsx(gt,{children:"Oferecemos as melhores soluções em proteção para você e sua família."}),u.jsx(Ux,{children:l.map((s,c)=>u.jsxs(Bx,{children:[u.jsx("h3",{children:s.title}),u.jsx("p",{children:s.description})]},c))})]})}),u.jsxs(Ox,{children:[u.jsx(pt,{children:"Como Contratar?"}),u.jsx(gt,{children:"Contratar seu seguro é simples, rápido e totalmente digital."}),u.jsxs(Mx,{children:[u.jsxs(Zr,{children:[u.jsx("h4",{children:"Simulação Online"}),u.jsx("p",{children:"Escolha o seguro desejado e preencha algumas informações para receber sua cotação."})]}),u.jsxs(Zr,{children:[u.jsx("h4",{children:"Análise de Perfil"}),u.jsx("p",{children:"Nossos especialistas analisam seu perfil para encontrar a melhor cobertura pelo menor preço."})]}),u.jsxs(Zr,{children:[u.jsx("h4",{children:"Emissão da Apólice"}),u.jsx("p",{children:"Após a aprovação, sua apólice é emitida e enviada digitalmente para você."})]}),u.jsxs(Zr,{children:[u.jsx("h4",{children:"Tudo Pronto!"}),u.jsx("p",{children:"Você e seu patrimônio estão protegidos. Conte com nosso suporte sempre que precisar."})]})]})]}),u.jsx(Hx,{children:u.jsxs(Pc,{children:[u.jsx(pt,{children:"Perguntas Frequentes"}),u.jsx(gt,{children:"Ainda tem dúvidas? A gente ajuda você a esclarecer."}),o.map((s,c)=>u.jsxs(Gx,{children:[u.jsx("h4",{children:s.question}),u.jsx("p",{children:s.answer})]},c))]})}),u.jsx(Dx,{children:u.jsxs(_x,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Fale com um especialista"}),u.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),u.jsx(qx,{children:u.jsx(Nx,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),u.jsx(Kb,{})]})},Fx=z.section`
  padding: 4rem 0;
  background: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Ic=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,Px=z.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Ix=z.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background-color: ${h.colors.lightGray};
`,e3=z.article`
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
`,t3=z.button`
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
`,a3=z.section`
  padding: 4rem 0;
  background: ${h.colors.lightGray};
`,n3=z.div`
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
`,Kr=z.div`
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
`,l3=z.section`
  padding: 4rem 0;
  background: ${h.colors.white};
`,i3=z.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,es=z.div`
  text-align: center;
  h4 {
    margin: 1rem 0 0.5rem;
  }
`,ts=z.div`
  font-size: 3rem;
  color: ${h.colors.primary};
`,r3=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,o3=z.div`
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
`,u3=z.div`
  display: flex;
  flex-shrink: 0;
`,c3=z.button`
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
`,s3=z.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,f3=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,d3=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
  text-align: center;
`,m3=z.div``,h3=z.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,p3=z.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
`,g3=z.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
`,v3="/AbaCorretora/assets/img-consorcio-DvFABkr6.webp",y3="/AbaCorretora/assets/consorcio-imovel-BsMy8Emp.webp",b3="/AbaCorretora/assets/consorcio-automovel-DuhiKWI6.webp",x3="/AbaCorretora/assets/consorcio-servicos-IYxMUqUU.webp",S3=()=>{const l=[{img:y3,title:"Consórcio Imobiliário",description:"A forma mais inteligente de comprar, construir ou reformar seu imóvel sem juros."},{img:b3,title:"Consórcio de Veículos",description:"Planeje a compra do seu carro, moto ou utilitário novo ou seminovo com parcelas que cabem no bolso."},{img:x3,title:"Consórcio de Serviços",description:"Realize seus sonhos como viagens, festas, cirurgias plásticas ou cursos com planejamento e economia."}];return u.jsxs(u.Fragment,{children:[u.jsxs(s3,{children:[u.jsx(f3,{children:u.jsxs(d3,{children:[u.jsx(m3,{children:u.jsx(h3,{children:"Conquiste seus maiores sonhos sem pagar juros."})}),u.jsx(p3,{src:v3,alt:"Família feliz com a conquista da casa própria através de consórcio"})]})}),u.jsx(g3,{})]}),u.jsx(Fx,{children:u.jsxs(Ic,{children:[u.jsx(pt,{children:"Consórcio: O Planejamento Inteligente"}),u.jsx(gt,{children:"Uma modalidade de compra baseada na união de pessoas que formam uma poupança comum destinada à aquisição de bens ou serviços. Ideal para quem não tem pressa e busca disciplina financeira para atingir grandes objetivos."}),u.jsx(Px,{children:l.map((o,s)=>u.jsxs(e3,{children:[u.jsx(Ix,{src:o.img,alt:o.title}),u.jsx("h3",{children:o.title}),u.jsx("p",{children:o.description}),u.jsx(t3,{as:"a",href:"https://wa.me/5511945411551",children:"Simular Agora"})]},s))})]})}),u.jsx(a3,{children:u.jsxs(Ic,{children:[u.jsx(pt,{children:"Como Funciona na Prática?"}),u.jsx(gt,{children:"O processo é simples e transparente. Veja as 4 etapas principais:"}),u.jsxs(n3,{children:[u.jsxs(Kr,{children:[u.jsx("h4",{children:"1. Formação do Grupo"}),u.jsx("p",{children:"Você adere a um grupo com outras pessoas que têm o mesmo objetivo que você."})]}),u.jsxs(Kr,{children:[u.jsx("h4",{children:"2. Contribuição Mensal"}),u.jsx("p",{children:"Todos os participantes pagam parcelas mensais, que formam o fundo do grupo."})]}),u.jsxs(Kr,{children:[u.jsx("h4",{children:"3. Contemplação"}),u.jsx("p",{children:"Mensalmente, participantes são contemplados por sorteio ou lance para receber o crédito."})]}),u.jsxs(Kr,{children:[u.jsx("h4",{children:"4. Aquisição do Bem"}),u.jsx("p",{children:"Com a carta de crédito em mãos, você tem poder de compra à vista para adquirir seu bem."})]})]})]})}),u.jsx(l3,{children:u.jsxs(Ic,{children:[u.jsx(pt,{children:"Principais Vantagens"}),u.jsx(gt,{children:"Descubra por que o consórcio é a melhor opção para o seu planejamento."}),u.jsxs(i3,{children:[u.jsxs(es,{children:[u.jsx(ts,{children:u.jsx(Py,{})}),u.jsx("h4",{children:"Sem Juros"}),u.jsx("p",{children:"Você paga apenas uma taxa de administração, que é muito menor que os juros de um financiamento."})]}),u.jsxs(es,{children:[u.jsx(ts,{children:u.jsx(Jy,{})}),u.jsx("h4",{children:"Poder de Compra"}),u.jsx("p",{children:"Ao ser contemplado, você recebe o valor integral da carta de crédito para negociar sua compra à vista."})]}),u.jsxs(es,{children:[u.jsx(ts,{children:u.jsx(eb,{})}),u.jsx("h4",{children:"Flexibilidade"}),u.jsx("p",{children:"Utilize o crédito para o bem que desejar dentro da categoria do seu grupo, com total liberdade de escolha."})]})]})]})}),u.jsx(r3,{children:u.jsxs(o3,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Pronto para dar o primeiro passo?"}),u.jsx("p",{children:"Faça uma simulação gratuita e sem compromisso para encontrar o plano perfeito para você."})]}),u.jsx(u3,{children:u.jsx(c3,{as:"a",href:"https://wa.me/5511945411551",children:"Fazer Simulação"})})]})})]})},Jr=z.div`
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
`,ga=z.article`
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
`,j3=z.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,A3=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,E3=z.div`
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,w3=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,C3=z.h1`
  color: ${({theme:l})=>l.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  text-align:center;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;z.p`
  color: ${h.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${h.breakpoints.tablet}) {
    max-width: 100%;
  }
`;const z3=z.img`
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
`,T3=z.div`
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
`,as=z.div`
  background: ${h.colors.white};
  border-left: 4px solid ${h.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${h.colors.mediumGray};
  margin-top: 1rem;
  margin: 1rem 1.25rem 1.25rem; 
`,Wr=z.h2`
  font-size: 2.5rem;
  color: ${h.colors.secundary};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 2rem;
    padding: 0 1.2rem;
  }
`,Fr=z.p`
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
`,Pr=z.section`
  padding: 3rem 0;
  background-color: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
   
  }
`,ns=z.article`
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
`,ls=z.button`
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
`,R3=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,O3=z.div`
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
`,M3=z.div`
  display: flex;
  flex-shrink: 0;
  
`,D3=z.button`
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
`,_3="/AbaCorretora/assets/img-saude-D4ti4aYu.webp",q3="/AbaCorretora/assets/convenio-medico-DHQi6kuG.webp",N3="/AbaCorretora/assets/convenio-odonto-CKul8QD8.webp",$3="/AbaCorretora/assets/convenio-pet-CKosw--s.webp";function U3(){return u.jsxs(u.Fragment,{children:[u.jsxs(j3,{children:[u.jsx(A3,{children:u.jsxs(E3,{children:[u.jsx(w3,{children:u.jsx(C3,{children:"Planos de saúde com valores que cabem no seu orçamento."})}),u.jsx(z3,{src:_3,alt:"imagem hero"})]})}),u.jsx(T3,{})]}),u.jsxs(Pr,{id:"convenios",children:[u.jsx(Wr,{children:"Planos de Saúde"}),u.jsx(Fr,{children:"Encontre o plano ideal para sua saúde e bem-estar, com cobertura completa para você, sua família e até mesmo seu pet."}),u.jsxs(Jr,{children:[u.jsxs(ns,{children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:q3,alt:"Família feliz com médico, representando convênio médico",loading:"lazy"})}),u.jsx("h3",{children:"Convênio Médico"}),u.jsx("p",{children:"Cuidado integral para sua saúde. Acesse uma ampla rede credenciada de hospitais, clínicas e laboratórios."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consultas e exames"}),u.jsx("li",{children:"Internações e cirurgias"}),u.jsx("li",{children:"Atendimento de emergência 24h"})]}),u.jsx(as,{children:"Ideal para quem busca segurança e tranquilidade no acesso a serviços de saúde de qualidade."}),u.jsx("div",{className:"card-button-wrapper",children:u.jsx(ls,{children:"Ver Planos Médicos "})})]}),u.jsxs(ns,{children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:N3,alt:"Pessoas sorrindo, representando convênio odontológico",loading:"lazy"})}),u.jsx("h3",{children:"Convênio Odontológico"}),u.jsx("p",{children:"Mantenha seu sorriso saudável com cobertura para prevenção, tratamentos e procedimentos essenciais."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consultas e limpezas"}),u.jsx("li",{children:"Tratamentos de cárie e canal"}),u.jsx("li",{children:"Ortodontia (em alguns planos)"})]}),u.jsx(as,{children:"Perfeito para quem valoriza a saúde bucal e quer evitar gastos inesperados com o dentista."}),u.jsx("div",{className:"card-button-wrapper",children:u.jsx(ls,{children:"Ver Planos Odontológicos "})})]}),u.jsxs(ns,{children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:$3,alt:"Cão e gato felizes, representando convênio pet",loading:"lazy"})}),u.jsx("h3",{children:"Convênio Pet"}),u.jsx("p",{children:"Cuide da saúde do seu melhor amigo com planos que cobrem consultas, vacinas e procedimentos veterinários."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consultas e exames de rotina"}),u.jsx("li",{children:"Vacinas e vermifugação"}),u.jsx("li",{children:"Cirurgias e internações (em alguns planos)"})]}),u.jsx(as,{children:"Essencial para tutores que querem garantir a longevidade e o bem-estar de seus animais de estimação."}),u.jsx("div",{className:"card-button-wrapper",children:u.jsx(ls,{children:"Ver Planos Pet "})})]})]})]}),u.jsxs(Pr,{style:{backgroundColor:"#f9f9f9"},children:[u.jsx(Wr,{children:"Por que ter um Convênio Médico?"}),u.jsx(Fr,{children:"Garanta o acesso rápido e de qualidade a serviços de saúde essenciais para você e sua família, sem preocupações com gastos inesperados."}),u.jsxs(Jr,{children:[u.jsxs(ga,{children:[u.jsx("h3",{children:"Acesso Facilitado"}),u.jsx("p",{children:"Com um convênio médico, você e sua família têm acesso a uma ampla rede de médicos, hospitais e laboratórios credenciados, com agendamento facilitado e sem as longas filas do sistema público. Isso garante que você receba o atendimento necessário no momento certo."})]}),u.jsxs(ga,{children:[u.jsx("h3",{children:"Economia e Previsibilidade"}),u.jsx("p",{children:"Evite surpresas com os altos custos de consultas, exames, internações e cirurgias particulares. O convênio médico oferece mensalidades fixas, tornando seus gastos com saúde previsíveis e protegendo seu orçamento em caso de emergências ou tratamentos de longo prazo."})]}),u.jsxs(ga,{children:[u.jsx("h3",{children:"Cuidado Completo e Preventivo"}),u.jsx("p",{children:"Além do atendimento para doenças e emergências, muitos planos oferecem programas de medicina preventiva, check-ups regulares e acompanhamento para doenças crônicas. Invista na sua saúde e bem-estar com um cuidado abrangente e contínuo."})]})]})]}),u.jsxs(Pr,{children:[u.jsx(Wr,{children:"A Importância do Convênio Odontológico"}),u.jsx(Fr,{children:"Um sorriso saudável é essencial para sua qualidade de vida. Invista em prevenção e tratamentos odontológicos sem pesar no seu bolso."}),u.jsxs(Jr,{children:[u.jsxs(ga,{children:[u.jsx("h3",{children:"Prevenção de Doenças"}),u.jsx("p",{children:"Consultas e limpezas regulares são fundamentais para prevenir cáries, gengivite e outras doenças bucais que podem afetar sua saúde geral. O convênio odontológico facilita esse acesso à prevenção."})]}),u.jsxs(ga,{children:[u.jsx("h3",{children:"Cobertura para Tratamentos Essenciais"}),u.jsx("p",{children:"De obturações a tratamentos de canal, o convênio cobre uma série de procedimentos que seriam caros se feitos de forma particular. Garanta que você não adie tratamentos importantes devido ao custo."})]}),u.jsxs(ga,{children:[u.jsx("h3",{children:"Estética e Bem-estar"}),u.jsx("p",{children:"Um sorriso bonito aumenta a autoestima e a confiança. Além da saúde, muitos planos oferecem cobertura para procedimentos estéticos ou ortodônticos (parcialmente), contribuindo para seu bem-estar."})]})]})]}),u.jsxs(Pr,{style:{backgroundColor:"#f9f9f9"},children:[u.jsx(Wr,{children:"Cuide do seu Melhor Amigo com um Convênio Pet"}),u.jsx(Fr,{children:"Seu pet merece o melhor cuidado! Proteja a saúde do seu companheiro de quatro patas com planos veterinários completos e acessíveis."}),u.jsxs(Jr,{children:[u.jsxs(ga,{children:[u.jsx("h3",{children:"Atendimento Veterinário Completo"}),u.jsx("p",{children:"Garanta consultas, exames, vacinas e até cirurgias para seu pet com uma rede credenciada de clínicas e hospitais veterinários. Seu amigo terá acesso aos melhores profissionais e tratamentos."})]}),u.jsxs(ga,{children:[u.jsx("h3",{children:"Prevenção e Bem-estar"}),u.jsx("p",{children:"Mantenha seu pet protegido com a cobertura de vacinas essenciais, vermifugação e check-ups regulares. A prevenção é a melhor forma de garantir uma vida longa e saudável para ele."})]}),u.jsxs(ga,{children:[u.jsx("h3",{children:"Segurança em Emergências"}),u.jsx("p",{children:"Acidentes e doenças podem acontecer. Com um convênio pet, você tem a tranquilidade de saber que os custos com emergências, cirurgias e internações estarão cobertos, sem comprometer seu orçamento."})]})]})]}),u.jsx(R3,{children:u.jsxs(O3,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Fale com um especialista"}),u.jsx("p",{children:"Receba uma consultoria gratuita para encontrar o plano ideal."})]}),u.jsx(M3,{children:u.jsx(D3,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),u.jsx(Jb,{})]})}const B3=z.section`
  padding: 5rem 2rem;
  background-color: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 1rem;
    margin-top: 60px;
  }
`,H3=z.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`,G3=z.div`
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
`,k3=z.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,is=z.a`
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
  ${({primary:l})=>l&&jo`
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
`,Y3=z.div`
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
`,L3=z.div`
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
`,o1=z.div`
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
`,Q3=()=>u.jsxs(B3,{id:"contact",children:[u.jsxs(H3,{children:[u.jsx(pt,{children:"Estamos aqui para ajudar"}),u.jsx(gt,{children:"Escolha o melhor canal para falar conosco. Nossa equipe de especialistas está pronta para atender você."})]}),u.jsxs(G3,{children:[u.jsxs(k3,{children:[u.jsxs(is,{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",primary:!0,children:[u.jsx(I1,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"WhatsApp"}),u.jsx("p",{children:"Clique aqui para iniciar uma conversa agora mesmo."})]})]}),u.jsxs(is,{href:"tel:+551140044004",children:[u.jsx(Fy,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"Telefone"}),u.jsx("p",{children:"(11) 94541-1551"})]})]}),u.jsxs(is,{href:"mailto:contato@abacorretora.com.br",children:[u.jsx(Ky,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"E-mail"}),u.jsx("p",{children:"abaseguros@abaseguros.com.br"})]})]})]}),u.jsx(Y3,{children:u.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.210770118163!2d-46.504975200000004!3d-23.5249205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60bce3afc021%3A0xf2841702e1fdf959!2sR.%20Itingu%C3%A7u%2C%201019%20-%20Vila%20R%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003658-010!5e0!3m2!1spt-BR!2sbr!4v1760037282599!5m2!1spt-BR!2sbr",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Endereço da ABA Corretora na Av. Paulista"})})]}),u.jsxs(L3,{children:[u.jsxs(o1,{children:[u.jsx(Wy,{}),u.jsxs("div",{children:[u.jsx("h4",{children:"Nosso Endereço"}),u.jsx("p",{children:"Av. Itinguçu, 1019 - Vila Ré, São Paulo/SP"})]})]}),u.jsxs(o1,{children:[u.jsx(Xy,{}),u.jsxs("div",{children:[u.jsx("h4",{children:"Horário de Atendimento"}),u.jsx("p",{children:"Segunda a Sexta: 08h às 18h"})]})]})]})]}),V3=z.div`
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
`,X3=z.p`
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
`,Z3=z.button`
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
`,u1="cookies_accepted",K3=()=>{const[l,o]=O.useState(!1);O.useEffect(()=>{localStorage.getItem(u1)||o(!0)},[]);const s=()=>{localStorage.setItem(u1,"true"),o(!1)};return l?u.jsxs(V3,{children:[u.jsx(Zy,{}),u.jsxs(X3,{children:['Utilizamos cookies para oferecer a melhor experiência e analisar o desempenho do nosso site. Ao clicar em "Aceitar Cookies", você concorda com o uso de todos os cookies. Para mais informações, consulte nossa'," ",u.jsx("a",{href:"/politica-de-privacidade",children:"Política de Privacidade"}),"."]}),u.jsx(Z3,{onClick:s,children:"Aceitar Cookies"})]}):null};function J3(){const{pathname:l}=xa();return O.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[l]),null}const W3=z.section`
  padding: 4rem 0;
  background-color: ${h.colors.lightGray};
  min-height: 80vh; // Garante que a página tenha uma altura mínima

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,F3=z.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  overflow-x: auto; // Essencial para responsividade da tabela
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,P3=z.table`
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
`,I3=z.button`
  background: ${({isCopied:l,theme:o})=>l?"#28a745":o.colors.primary};
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
    background: ${({isCopied:l,theme:o})=>l?"#28a745":o.colors.primaryDark};
  }

  &:disabled {
    cursor: default;
  }
`,e4=[{id:1,name:"Corretora Exemplo Alfa",contact:"(11) 99999-1234"},{id:2,name:"Beta Seguros",contact:"(21) 98888-5678"},{id:3,name:"Gama Corretora",contact:"(31) 97777-4321"}],t4=()=>{const[l,o]=O.useState(null),s=(c,d)=>{navigator.clipboard.writeText(c).then(()=>{o(d),setTimeout(()=>{o(null)},2e3)})};return u.jsxs(W3,{children:[u.jsx(pt,{children:"Contatos das Corretoras"}),u.jsx(gt,{children:"Encontre e entre em contato com nossas corretoras parceiras."}),u.jsx(F3,{children:u.jsxs(P3,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Corretora"}),u.jsx("th",{children:"Contato"}),u.jsx("th",{children:"Copiar"})]})}),u.jsx("tbody",{children:e4.map(c=>u.jsxs("tr",{children:[u.jsx("td",{children:c.name}),u.jsx("td",{children:c.contact}),u.jsx("td",{children:u.jsx(I3,{onClick:()=>s(c.contact,c.id),isCopied:l===c.id,disabled:l===c.id,children:l===c.id?"Copiado!":"Clique aqui"})})]},c.id))})]})})]})};function a4(){return u.jsxs(q1,{theme:h,children:[u.jsx(e2,{}),u.jsx(Oy,{}),u.jsx(J3,{}),u.jsx("main",{children:u.jsxs(F2,{children:[u.jsx(Xa,{path:"/AbaCorretora",element:u.jsx(xx,{})}),u.jsx(Xa,{path:"/products",element:u.jsx(J2,{to:"/home",replace:!0})}),u.jsx(Xa,{path:"/seguros",element:u.jsx(Wx,{})}),u.jsx(Xa,{path:"/consorcios",element:u.jsx(S3,{})}),u.jsx(Xa,{path:"/saude",element:u.jsx(U3,{})}),u.jsx(Xa,{path:"/contato",element:u.jsx(Q3,{})}),u.jsx(Xa,{path:"/corretoras",element:u.jsx(t4,{})})]})}),u.jsx(K3,{}),u.jsx(nb,{}),u.jsx(rb,{})]})}Pg.createRoot(document.getElementById("root")).render(u.jsx(Ye.StrictMode,{children:u.jsx(q1,{theme:h,children:u.jsx(xy,{children:u.jsx(a4,{})})})}));
