(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function s(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=s(d);fetch(d.href,p)}})();function u0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bc={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Yg(){if(Th)return gi;Th=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(c,d,p){var y=null;if(p!==void 0&&(y=""+p),d.key!==void 0&&(y=""+d.key),"key"in d){p={};for(var E in d)E!=="key"&&(p[E]=d[E])}else p=d;return d=p.ref,{$$typeof:n,type:c,key:y,ref:d!==void 0?d:null,props:p}}return gi.Fragment=o,gi.jsx=s,gi.jsxs=s,gi}var Rh;function kg(){return Rh||(Rh=1,Bc.exports=Yg()),Bc.exports}var u=kg(),Hc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Lg(){if(Oh)return re;Oh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),M=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=M&&x[M]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,V={};function Y(x,$,k){this.props=x,this.context=$,this.refs=V,this.updater=k||B}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,$){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,$,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function X(){}X.prototype=Y.prototype;function H(x,$,k){this.props=x,this.context=$,this.refs=V,this.updater=k||B}var Z=H.prototype=new X;Z.constructor=H,G(Z,Y.prototype),Z.isPureReactComponent=!0;var ne=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ie=Object.prototype.hasOwnProperty;function F(x,$,k,Q,P,fe){return k=fe.ref,{$$typeof:n,type:x,key:$,ref:k!==void 0?k:null,props:fe}}function Te(x,$){return F(x.type,$,void 0,void 0,void 0,x.props)}function Ee(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function rt(x){var $={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(k){return $[k]})}var ut=/\/+/g;function Le(x,$){return typeof x=="object"&&x!==null&&x.key!=null?rt(""+x.key):$.toString(36)}function Ft(){}function Pt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Ft,Ft):(x.status="pending",x.then(function($){x.status==="pending"&&(x.status="fulfilled",x.value=$)},function($){x.status==="pending"&&(x.status="rejected",x.reason=$)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Qe(x,$,k,Q,P){var fe=typeof x;(fe==="undefined"||fe==="boolean")&&(x=null);var te=!1;if(x===null)te=!0;else switch(fe){case"bigint":case"string":case"number":te=!0;break;case"object":switch(x.$$typeof){case n:case o:te=!0;break;case j:return te=x._init,Qe(te(x._payload),$,k,Q,P)}}if(te)return P=P(x),te=Q===""?"."+Le(x,0):Q,ne(P)?(k="",te!=null&&(k=te.replace(ut,"$&/")+"/"),Qe(P,$,k,"",function(at){return at})):P!=null&&(Ee(P)&&(P=Te(P,k+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(ut,"$&/")+"/")+te)),$.push(P)),1;te=0;var Xe=Q===""?".":Q+":";if(ne(x))for(var ve=0;ve<x.length;ve++)Q=x[ve],fe=Xe+Le(Q,ve),te+=Qe(Q,$,k,fe,P);else if(ve=U(x),typeof ve=="function")for(x=ve.call(x),ve=0;!(Q=x.next()).done;)Q=Q.value,fe=Xe+Le(Q,ve++),te+=Qe(Q,$,k,fe,P);else if(fe==="object"){if(typeof x.then=="function")return Qe(Pt(x),$,k,Q,P);throw $=String(x),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return te}function D(x,$,k){if(x==null)return x;var Q=[],P=0;return Qe(x,Q,"","",function(fe){return $.call(k,fe,P++)}),Q}function L(x){if(x._status===-1){var $=x._result;$=$(),$.then(function(k){(x._status===0||x._status===-1)&&(x._status=1,x._result=k)},function(k){(x._status===0||x._status===-1)&&(x._status=2,x._result=k)}),x._status===-1&&(x._status=0,x._result=$)}if(x._status===1)return x._result.default;throw x._result}var I=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return re.Children={map:D,forEach:function(x,$,k){D(x,function(){$.apply(this,arguments)},k)},count:function(x){var $=0;return D(x,function(){$++}),$},toArray:function(x){return D(x,function($){return $})||[]},only:function(x){if(!Ee(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},re.Component=Y,re.Fragment=s,re.Profiler=d,re.PureComponent=H,re.StrictMode=c,re.Suspense=b,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,re.__COMPILER_RUNTIME={__proto__:null,c:function(x){return K.H.useMemoCache(x)}},re.cache=function(x){return function(){return x.apply(null,arguments)}},re.cloneElement=function(x,$,k){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Q=G({},x.props),P=x.key,fe=void 0;if($!=null)for(te in $.ref!==void 0&&(fe=void 0),$.key!==void 0&&(P=""+$.key),$)!ie.call($,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&$.ref===void 0||(Q[te]=$[te]);var te=arguments.length-2;if(te===1)Q.children=k;else if(1<te){for(var Xe=Array(te),ve=0;ve<te;ve++)Xe[ve]=arguments[ve+2];Q.children=Xe}return F(x.type,P,void 0,void 0,fe,Q)},re.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},re.createElement=function(x,$,k){var Q,P={},fe=null;if($!=null)for(Q in $.key!==void 0&&(fe=""+$.key),$)ie.call($,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(P[Q]=$[Q]);var te=arguments.length-2;if(te===1)P.children=k;else if(1<te){for(var Xe=Array(te),ve=0;ve<te;ve++)Xe[ve]=arguments[ve+2];P.children=Xe}if(x&&x.defaultProps)for(Q in te=x.defaultProps,te)P[Q]===void 0&&(P[Q]=te[Q]);return F(x,fe,void 0,void 0,null,P)},re.createRef=function(){return{current:null}},re.forwardRef=function(x){return{$$typeof:E,render:x}},re.isValidElement=Ee,re.lazy=function(x){return{$$typeof:j,_payload:{_status:-1,_result:x},_init:L}},re.memo=function(x,$){return{$$typeof:g,type:x,compare:$===void 0?null:$}},re.startTransition=function(x){var $=K.T,k={};K.T=k;try{var Q=x(),P=K.S;P!==null&&P(k,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(se,I)}catch(fe){I(fe)}finally{K.T=$}},re.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},re.use=function(x){return K.H.use(x)},re.useActionState=function(x,$,k){return K.H.useActionState(x,$,k)},re.useCallback=function(x,$){return K.H.useCallback(x,$)},re.useContext=function(x){return K.H.useContext(x)},re.useDebugValue=function(){},re.useDeferredValue=function(x,$){return K.H.useDeferredValue(x,$)},re.useEffect=function(x,$,k){var Q=K.H;if(typeof k=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(x,$)},re.useId=function(){return K.H.useId()},re.useImperativeHandle=function(x,$,k){return K.H.useImperativeHandle(x,$,k)},re.useInsertionEffect=function(x,$){return K.H.useInsertionEffect(x,$)},re.useLayoutEffect=function(x,$){return K.H.useLayoutEffect(x,$)},re.useMemo=function(x,$){return K.H.useMemo(x,$)},re.useOptimistic=function(x,$){return K.H.useOptimistic(x,$)},re.useReducer=function(x,$,k){return K.H.useReducer(x,$,k)},re.useRef=function(x){return K.H.useRef(x)},re.useState=function(x){return K.H.useState(x)},re.useSyncExternalStore=function(x,$,k){return K.H.useSyncExternalStore(x,$,k)},re.useTransition=function(){return K.H.useTransition()},re.version="19.1.1",re}var Mh;function vs(){return Mh||(Mh=1,Hc.exports=Lg()),Hc.exports}var O=vs();const ke=u0(O);var Gc={exports:{}},vi={},Yc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Qg(){return Dh||(Dh=1,(function(n){function o(D,L){var I=D.length;D.push(L);e:for(;0<I;){var se=I-1>>>1,x=D[se];if(0<d(x,L))D[se]=L,D[I]=x,I=se;else break e}}function s(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var L=D[0],I=D.pop();if(I!==L){D[0]=I;e:for(var se=0,x=D.length,$=x>>>1;se<$;){var k=2*(se+1)-1,Q=D[k],P=k+1,fe=D[P];if(0>d(Q,I))P<x&&0>d(fe,Q)?(D[se]=fe,D[P]=I,se=P):(D[se]=Q,D[k]=I,se=k);else if(P<x&&0>d(fe,I))D[se]=fe,D[P]=I,se=P;else break e}}return L}function d(D,L){var I=D.sortIndex-L.sortIndex;return I!==0?I:D.id-L.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var y=Date,E=y.now();n.unstable_now=function(){return y.now()-E}}var b=[],g=[],j=1,M=null,U=3,B=!1,G=!1,V=!1,Y=!1,X=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ne(D){for(var L=s(g);L!==null;){if(L.callback===null)c(g);else if(L.startTime<=D)c(g),L.sortIndex=L.expirationTime,o(b,L);else break;L=s(g)}}function K(D){if(V=!1,ne(D),!G)if(s(b)!==null)G=!0,ie||(ie=!0,Le());else{var L=s(g);L!==null&&Qe(K,L.startTime-D)}}var ie=!1,F=-1,Te=5,Ee=-1;function rt(){return Y?!0:!(n.unstable_now()-Ee<Te)}function ut(){if(Y=!1,ie){var D=n.unstable_now();Ee=D;var L=!0;try{e:{G=!1,V&&(V=!1,H(F),F=-1),B=!0;var I=U;try{t:{for(ne(D),M=s(b);M!==null&&!(M.expirationTime>D&&rt());){var se=M.callback;if(typeof se=="function"){M.callback=null,U=M.priorityLevel;var x=se(M.expirationTime<=D);if(D=n.unstable_now(),typeof x=="function"){M.callback=x,ne(D),L=!0;break t}M===s(b)&&c(b),ne(D)}else c(b);M=s(b)}if(M!==null)L=!0;else{var $=s(g);$!==null&&Qe(K,$.startTime-D),L=!1}}break e}finally{M=null,U=I,B=!1}L=void 0}}finally{L?Le():ie=!1}}}var Le;if(typeof Z=="function")Le=function(){Z(ut)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,Pt=Ft.port2;Ft.port1.onmessage=ut,Le=function(){Pt.postMessage(null)}}else Le=function(){X(ut,0)};function Qe(D,L){F=X(function(){D(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return U},n.unstable_next=function(D){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var I=U;U=L;try{return D()}finally{U=I}},n.unstable_requestPaint=function(){Y=!0},n.unstable_runWithPriority=function(D,L){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=U;U=D;try{return L()}finally{U=I}},n.unstable_scheduleCallback=function(D,L,I){var se=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,D){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=I+x,D={id:j++,callback:L,priorityLevel:D,startTime:I,expirationTime:x,sortIndex:-1},I>se?(D.sortIndex=I,o(g,D),s(b)===null&&D===s(g)&&(V?(H(F),F=-1):V=!0,Qe(K,I-se))):(D.sortIndex=x,o(b,D),G||B||(G=!0,ie||(ie=!0,Le()))),D},n.unstable_shouldYield=rt,n.unstable_wrapCallback=function(D){var L=U;return function(){var I=U;U=L;try{return D.apply(this,arguments)}finally{U=I}}}})(kc)),kc}var _h;function Xg(){return _h||(_h=1,Yc.exports=Qg()),Yc.exports}var Lc={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function Vg(){if(Nh)return it;Nh=1;var n=vs();function o(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)g+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(b,g,j){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:b,containerInfo:g,implementation:j}}var y=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,it.createPortal=function(b,g){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return p(b,g,null,j)},it.flushSync=function(b){var g=y.T,j=c.p;try{if(y.T=null,c.p=2,b)return b()}finally{y.T=g,c.p=j,c.d.f()}},it.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(b,g))},it.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},it.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var j=g.as,M=E(j,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;j==="style"?c.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:U,fetchPriority:B}):j==="script"&&c.d.X(b,{crossOrigin:M,integrity:U,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},it.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var j=E(g.as,g.crossOrigin);c.d.M(b,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(b)},it.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var j=g.as,M=E(j,g.crossOrigin);c.d.L(b,j,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},it.preloadModule=function(b,g){if(typeof b=="string")if(g){var j=E(g.as,g.crossOrigin);c.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(b)},it.requestFormReset=function(b){c.d.r(b)},it.unstable_batchedUpdates=function(b,g){return b(g)},it.useFormState=function(b,g,j){return y.H.useFormState(b,g,j)},it.useFormStatus=function(){return y.H.useHostTransitionStatus()},it.version="19.1.1",it}var qh;function Zg(){if(qh)return Lc.exports;qh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Lc.exports=Vg(),Lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Kg(){if($h)return vi;$h=1;var n=Xg(),o=vs(),s=Zg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return E(i),e;if(r===l)return E(i),t;r=r.sibling}throw Error(c(188))}if(a.return!==l.return)a=i,l=r;else{for(var f=!1,m=i.child;m;){if(m===a){f=!0,a=i,l=r;break}if(m===l){f=!0,l=i,a=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===a){f=!0,a=r,l=i;break}if(m===l){f=!0,l=r,a=i;break}m=m.sibling}if(!f)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,M=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var Ft=Symbol.for("react.client.reference");function Pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Y:return"Profiler";case V:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Pt(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Pt(e(t))}catch{}}return null}var Qe=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],x=-1;function $(e){return{current:e}}function k(e){0>x||(e.current=se[x],se[x]=null,x--)}function Q(e,t){x++,se[x]=e.current,e.current=t}var P=$(null),fe=$(null),te=$(null),Xe=$(null);function ve(e,t){switch(Q(te,t),Q(fe,e),Q(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ah(t),e=lh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(P),Q(P,e)}function at(){k(P),k(fe),k(te)}function Ka(e){e.memoizedState!==null&&Q(Xe,e);var t=P.current,a=lh(t,e.type);t!==a&&(Q(fe,e),Q(P,a))}function It(e){fe.current===e&&(k(P),k(fe)),Xe.current===e&&(k(Xe),fi._currentValue=I)}var Ct=Object.prototype.hasOwnProperty,wo=n.unstable_scheduleCallback,Co=n.unstable_cancelCallback,b1=n.unstable_shouldYield,x1=n.unstable_requestPaint,Lt=n.unstable_now,S1=n.unstable_getCurrentPriorityLevel,qs=n.unstable_ImmediatePriority,$s=n.unstable_UserBlockingPriority,Ci=n.unstable_NormalPriority,j1=n.unstable_LowPriority,Us=n.unstable_IdlePriority,A1=n.log,E1=n.unstable_setDisableYieldValue,bn=null,gt=null;function Sa(e){if(typeof A1=="function"&&E1(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(bn,e)}catch{}}var vt=Math.clz32?Math.clz32:z1,w1=Math.log,C1=Math.LN2;function z1(e){return e>>>=0,e===0?32:31-(w1(e)/C1|0)|0}var zi=256,Ti=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ri(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?i=Ja(l):(f&=m,f!==0?i=Ja(f):a||(a=m&~e,a!==0&&(i=Ja(a))))):(m=l&~r,m!==0?i=Ja(m):f!==0?i=Ja(f):a||(a=l&~e,a!==0&&(i=Ja(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function xn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function T1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=zi;return zi<<=1,(zi&4194048)===0&&(zi=256),e}function Hs(){var e=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),e}function zo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function R1(e,t,a,l,i,r){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,C=e.hiddenUpdates;for(a=f&~a;0<a;){var _=31-vt(a),q=1<<_;m[_]=0,v[_]=-1;var T=C[_];if(T!==null)for(C[_]=null,_=0;_<T.length;_++){var R=T[_];R!==null&&(R.lane&=-536870913)}a&=~q}l!==0&&Gs(e,l,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Gs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-vt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Ys(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-vt(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ks(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:jh(e.type))}function O1(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ja=Math.random().toString(36).slice(2),lt="__reactFiber$"+ja,ct="__reactProps$"+ja,vl="__reactContainer$"+ja,Oo="__reactEvents$"+ja,M1="__reactListeners$"+ja,D1="__reactHandles$"+ja,Ls="__reactResources$"+ja,jn="__reactMarker$"+ja;function Mo(e){delete e[lt],delete e[ct],delete e[Oo],delete e[M1],delete e[D1]}function yl(e){var t=e[lt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[vl]||a[lt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=oh(e);e!==null;){if(a=e[lt])return a;e=oh(e)}return t}e=a,a=e.parentNode}return null}function bl(e){if(e=e[lt]||e[vl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function An(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function xl(e){var t=e[Ls];return t||(t=e[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[jn]=!0}var Qs=new Set,Xs={};function Wa(e,t){Sl(e,t),Sl(e+"Capture",t)}function Sl(e,t){for(Xs[e]=t,e=0;e<t.length;e++)Qs.add(t[e])}var _1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Zs={};function N1(e){return Ct.call(Zs,e)?!0:Ct.call(Vs,e)?!1:_1.test(e)?Zs[e]=!0:(Vs[e]=!0,!1)}function Oi(e,t,a){if(N1(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Mi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ea(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var Do,Ks;function jl(e){if(Do===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||"",Ks=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Do+e+Ks}var _o=!1;function No(e,t){if(!e||_o)return"";_o=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(R){var T=R}Reflect.construct(e,[],q)}else{try{q.call()}catch(R){T=R}e.call(q.prototype)}}else{try{throw Error()}catch(R){T=R}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(R){if(R&&T&&typeof R.stack=="string")return[R.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var v=f.split(`
`),C=m.split(`
`);for(i=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(l===v.length||i===C.length)for(l=v.length-1,i=C.length-1;1<=l&&0<=i&&v[l]!==C[i];)i--;for(;1<=l&&0<=i;l--,i--)if(v[l]!==C[i]){if(l!==1||i!==1)do if(l--,i--,0>i||v[l]!==C[i]){var _=`
`+v[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=i);break}}}finally{_o=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jl(a):""}function q1(e){switch(e.tag){case 26:case 27:case 5:return jl(e.type);case 16:return jl("Lazy");case 13:return jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return No(e.type,!1);case 11:return No(e.type.render,!1);case 1:return No(e.type,!0);case 31:return jl("Activity");default:return""}}function Js(e){try{var t="";do t+=q1(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $1(e){var t=Ws(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){l=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=$1(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ws(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var U1=/[\n"\\]/g;function Tt(e){return e.replace(U1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qo(e,t,a,l,i,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?$o(e,f,zt(t)):a!=null?$o(e,f,zt(a)):l!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+zt(m):e.removeAttribute("name")}function Ps(e,t,a,l,i,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+zt(a):"",t=t!=null?""+zt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function $o(e,t,a){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Al(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Is(e,t,a){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+zt(a):""}function ef(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Qe(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=zt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function El(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var B1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||B1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function af(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&tf(e,i,l)}else for(var r in t)t.hasOwnProperty(r)&&tf(e,r,t[r])}function Uo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),G1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(e){return G1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bo=null;function Ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,Cl=null;function lf(e){var t=bl(e);if(t&&(e=t.stateNode)){var a=e[ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(qo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[ct]||null;if(!i)throw Error(c(90));qo(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Fs(l)}break e;case"textarea":Is(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Al(e,!!a.multiple,t,!1)}}}var Go=!1;function nf(e,t,a){if(Go)return e(t,a);Go=!0;try{var l=e(t);return l}finally{if(Go=!1,(wl!==null||Cl!==null)&&(br(),wl&&(t=wl,e=Cl,Cl=wl=null,lf(t),e)))for(t=0;t<e.length;t++)lf(e[t])}}function En(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ct]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(ta)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Yo=!1}var Aa=null,ko=null,qi=null;function rf(){if(qi)return qi;var e,t=ko,a=t.length,l,i="value"in Aa?Aa.value:Aa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(l=1;l<=f&&t[a-l]===i[r-l];l++);return qi=i.slice(e,1<l?1-l:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function of(){return!1}function st(e){function t(a,l,i,r,f){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ui:of,this.isPropagationStopped=of,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=st(Fa),Cn=j({},Fa,{view:0,detail:0}),Y1=st(Cn),Lo,Qo,zn,Hi=j({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Lo=e.screenX-zn.screenX,Qo=e.screenY-zn.screenY):Qo=Lo=0,zn=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),uf=st(Hi),k1=j({},Hi,{dataTransfer:0}),L1=st(k1),Q1=j({},Cn,{relatedTarget:0}),Xo=st(Q1),X1=j({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),V1=st(X1),Z1=j({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K1=st(Z1),J1=j({},Fa,{data:0}),cf=st(J1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P1[e])?!!t[e]:!1}function Vo(){return I1}var ep=j({},Cn,{key:function(e){if(e.key){var t=W1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vo,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tp=st(ep),ap=j({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=st(ap),lp=j({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vo}),np=st(lp),ip=j({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rp=st(ip),op=j({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),up=st(op),cp=j({},Fa,{newState:0,oldState:0}),sp=st(cp),fp=[9,13,27,32],Zo=ta&&"CompositionEvent"in window,Tn=null;ta&&"documentMode"in document&&(Tn=document.documentMode);var dp=ta&&"TextEvent"in window&&!Tn,ff=ta&&(!Zo||Tn&&8<Tn&&11>=Tn),df=" ",mf=!1;function hf(e,t){switch(e){case"keyup":return fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zl=!1;function mp(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(mf=!0,df);case"textInput":return e=t.data,e===df&&mf?null:e;default:return null}}function hp(e,t){if(zl)return e==="compositionend"||!Zo&&hf(e,t)?(e=rf(),qi=ko=Aa=null,zl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pp[e.type]:t==="textarea"}function vf(e,t,a,l){wl?Cl?Cl.push(l):Cl=[l]:wl=l,t=wr(t,"onChange"),0<t.length&&(a=new Bi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Rn=null,On=null;function gp(e){Fm(e,0)}function Gi(e){var t=An(e);if(Fs(t))return e}function yf(e,t){if(e==="change")return t}var bf=!1;if(ta){var Ko;if(ta){var Jo="oninput"in document;if(!Jo){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),Jo=typeof xf.oninput=="function"}Ko=Jo}else Ko=!1;bf=Ko&&(!document.documentMode||9<document.documentMode)}function Sf(){Rn&&(Rn.detachEvent("onpropertychange",jf),On=Rn=null)}function jf(e){if(e.propertyName==="value"&&Gi(On)){var t=[];vf(t,On,e,Ho(e)),nf(gp,t)}}function vp(e,t,a){e==="focusin"?(Sf(),Rn=t,On=a,Rn.attachEvent("onpropertychange",jf)):e==="focusout"&&Sf()}function yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(On)}function bp(e,t){if(e==="click")return Gi(t)}function xp(e,t){if(e==="input"||e==="change")return Gi(t)}function Sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Sp;function Mn(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Ct.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function Af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var a=Af(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Af(a)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_i(e.document)}return t}function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jp=ta&&"documentMode"in document&&11>=document.documentMode,Tl=null,Fo=null,Dn=null,Po=!1;function zf(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Po||Tl==null||Tl!==_i(l)||(l=Tl,"selectionStart"in l&&Wo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Dn&&Mn(Dn,l)||(Dn=l,l=wr(Fo,"onSelect"),0<l.length&&(t=new Bi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Tl)))}function Pa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Rl={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},Io={},Tf={};ta&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function Ia(e){if(Io[e])return Io[e];if(!Rl[e])return e;var t=Rl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tf)return Io[e]=t[a];return e}var Rf=Ia("animationend"),Of=Ia("animationiteration"),Mf=Ia("animationstart"),Ap=Ia("transitionrun"),Ep=Ia("transitionstart"),wp=Ia("transitioncancel"),Df=Ia("transitionend"),_f=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function Ut(e,t){_f.set(e,t),Wa(t,[e])}var Nf=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var a=Nf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Js(t)},Nf.set(e,t),t)}return{value:e,source:t,stack:Js(t)}}var Ot=[],Ol=0,tu=0;function Yi(){for(var e=Ol,t=tu=Ol=0;t<e;){var a=Ot[t];Ot[t++]=null;var l=Ot[t];Ot[t++]=null;var i=Ot[t];Ot[t++]=null;var r=Ot[t];if(Ot[t++]=null,l!==null&&i!==null){var f=l.pending;f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i}r!==0&&qf(a,i,r)}}function ki(e,t,a,l){Ot[Ol++]=e,Ot[Ol++]=t,Ot[Ol++]=a,Ot[Ol++]=l,tu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function au(e,t,a,l){return ki(e,t,a,l),Li(e)}function Ml(e,t){return ki(e,null,null,t),Li(e)}function qf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-vt(a),e=r.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),r):null}function Li(e){if(50<li)throw li=0,uc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Dl={};function Cp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,l){return new Cp(e,t,a,l)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $f(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,a,l,i,r){var f=0;if(l=e,typeof e=="function")lu(e)&&(f=1);else if(typeof e=="string")f=Tg(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=bt(31,a,t,i),e.elementType=Ee,e.lanes=r,e;case G:return el(a.children,i,r,t);case V:f=8,i|=24;break;case Y:return e=bt(12,a,t,i|2),e.elementType=Y,e.lanes=r,e;case K:return e=bt(13,a,t,i),e.elementType=K,e.lanes=r,e;case ie:return e=bt(19,a,t,i),e.elementType=ie,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:case Z:f=10;break e;case H:f=9;break e;case ne:f=11;break e;case F:f=14;break e;case Te:f=16,l=null;break e}f=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=bt(f,a,t,i),t.elementType=e,t.type=l,t.lanes=r,t}function el(e,t,a,l){return e=bt(7,e,l,t),e.lanes=a,e}function nu(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function iu(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _l=[],Nl=0,Xi=null,Vi=0,Mt=[],Dt=0,tl=null,la=1,na="";function al(e,t){_l[Nl++]=Vi,_l[Nl++]=Xi,Xi=e,Vi=t}function Uf(e,t,a){Mt[Dt++]=la,Mt[Dt++]=na,Mt[Dt++]=tl,tl=e;var l=la;e=na;var i=32-vt(l)-1;l&=~(1<<i),a+=1;var r=32-vt(t)+i;if(30<r){var f=i-i%5;r=(l&(1<<f)-1).toString(32),l>>=f,i-=f,la=1<<32-vt(t)+i|a<<i|l,na=r+e}else la=1<<r|a<<i|l,na=e}function ru(e){e.return!==null&&(al(e,1),Uf(e,1,0))}function ou(e){for(;e===Xi;)Xi=_l[--Nl],_l[Nl]=null,Vi=_l[--Nl],_l[Nl]=null;for(;e===tl;)tl=Mt[--Dt],Mt[Dt]=null,na=Mt[--Dt],Mt[Dt]=null,la=Mt[--Dt],Mt[Dt]=null}var ot=null,_e=null,ge=!1,ll=null,Qt=!1,uu=Error(c(519));function nl(e){var t=Error(c(418,""));throw qn(Rt(t,e)),uu}function Bf(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[lt]=e,t[ct]=l,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<ii.length;a++)me(ii[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Ps(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Di(t);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),ef(t,l.value,l.defaultValue,l.children),Di(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||th(t.textContent,a)?(l.popover!=null&&(me("beforetoggle",t),me("toggle",t)),l.onScroll!=null&&me("scroll",t),l.onScrollEnd!=null&&me("scrollend",t),l.onClick!=null&&(t.onclick=Cr),t=!0):t=!1,t||nl(e)}function Hf(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:ot=ot.return}}function _n(e){if(e!==ot)return!1;if(!ge)return Hf(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ec(e.type,e.memoizedProps)),a=!a),a&&_e&&nl(e),Hf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){_e=Ht(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}_e=null}}else t===27?(t=_e,Ha(e.type)?(e=Tc,Tc=null,_e=e):_e=t):_e=ot?Ht(e.stateNode.nextSibling):null;return!0}function Nn(){_e=ot=null,ge=!1}function Gf(){var e=ll;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),ll=null),e}function qn(e){ll===null?ll=[e]:ll.push(e)}var cu=$(null),il=null,ia=null;function Ea(e,t,a){Q(cu,t._currentValue),t._currentValue=a}function ra(e){e._currentValue=cu.current,k(cu)}function su(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function fu(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),su(r.return,a,e),l||(f=null);break e}r=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(c(341));f.lanes|=a,r=f.alternate,r!==null&&(r.lanes|=a),su(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function $n(e,t,a,l){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var m=i.type;yt(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===Xe.current){if(f=i.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}i=i.return}e!==null&&fu(t,e,a,l),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rl(e){il=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Yf(il,e)}function Ki(e,t){return il===null&&rl(e),Yf(e,t)}function Yf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(c(308));ia=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ia=ia.next=t;return a}var zp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Tp=n.unstable_scheduleCallback,Rp=n.unstable_NormalPriority,Ge={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new zp,data:new Map,refCount:0}}function Un(e){e.refCount--,e.refCount===0&&Tp(Rp,function(){e.controller.abort()})}var Bn=null,mu=0,ql=0,$l=null;function Op(e,t){if(Bn===null){var a=Bn=[];mu=0,ql=pc(),$l={status:"pending",value:void 0,then:function(l){a.push(l)}}}return mu++,t.then(kf,kf),t}function kf(){if(--mu===0&&Bn!==null){$l!==null&&($l.status="fulfilled");var e=Bn;Bn=null,ql=0,$l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Mp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Lf=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Op(e,t),Lf!==null&&Lf(e,t)};var ol=$(null);function hu(){var e=ol.current;return e!==null?e:Ce.pooledCache}function Ji(e,t){t===null?Q(ol,ol.current):Q(ol,t.pool)}function Qf(){var e=hu();return e===null?null:{parent:Ge._currentValue,pool:e}}var Hn=Error(c(460)),Xf=Error(c(474)),Wi=Error(c(542)),pu={then:function(){}};function Vf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fi(){}function Zf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Fi,Fi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e;default:if(typeof t.status=="string")t.then(Fi,Fi);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e}throw Gn=t,Hn}}var Gn=null;function Kf(){if(Gn===null)throw Error(c(459));var e=Gn;return Gn=null,e}function Jf(e){if(e===Hn||e===Wi)throw Error(c(483))}var wa=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=Li(e),qf(e,null,a),t}return ki(e,l,t,a),Li(e)}function Yn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ys(e,a)}}function yu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bu=!1;function kn(){if(bu){var e=$l;if(e!==null)throw e}}function Ln(e,t,a,l){bu=!1;var i=e.updateQueue;wa=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,C=v.next;v.next=null,f===null?r=C:f.next=C,f=v;var _=e.alternate;_!==null&&(_=_.updateQueue,m=_.lastBaseUpdate,m!==f&&(m===null?_.firstBaseUpdate=C:m.next=C,_.lastBaseUpdate=v))}if(r!==null){var q=i.baseState;f=0,_=C=v=null,m=r;do{var T=m.lane&-536870913,R=T!==m.lane;if(R?(he&T)===T:(l&T)===T){T!==0&&T===ql&&(bu=!0),_!==null&&(_=_.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var le=e,ee=m;T=t;var Ae=a;switch(ee.tag){case 1:if(le=ee.payload,typeof le=="function"){q=le.call(Ae,q,T);break e}q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ee.payload,T=typeof le=="function"?le.call(Ae,q,T):le,T==null)break e;q=j({},q,T);break e;case 2:wa=!0}}T=m.callback,T!==null&&(e.flags|=64,R&&(e.flags|=8192),R=i.callbacks,R===null?i.callbacks=[T]:R.push(T))}else R={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},_===null?(C=_=R,v=q):_=_.next=R,f|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;R=m,m=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);_===null&&(v=q),i.baseState=v,i.firstBaseUpdate=C,i.lastBaseUpdate=_,r===null&&(i.shared.lanes=0),qa|=f,e.lanes=f,e.memoizedState=q}}function Wf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ff(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wf(a[e],t)}var Ul=$(null),Pi=$(0);function Pf(e,t){e=ma,Q(Pi,e),Q(Ul,t),ma=e|t.baseLanes}function xu(){Q(Pi,ma),Q(Ul,Ul.current)}function Su(){ma=Pi.current,k(Ul),k(Pi)}var Ta=0,ue=null,Se=null,Ue=null,Ii=!1,Bl=!1,ul=!1,er=0,Qn=0,Hl=null,Dp=0;function qe(){throw Error(c(321))}function ju(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function Au(e,t,a,l,i,r){return Ta=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?qd:$d,ul=!1,r=a(l,i),ul=!1,Bl&&(r=ed(t,a,l,i)),If(e),r}function If(e){D.H=rr;var t=Se!==null&&Se.next!==null;if(Ta=0,Ue=Se=ue=null,Ii=!1,Qn=0,Hl=null,t)throw Error(c(300));e===null||Ze||(e=e.dependencies,e!==null&&Zi(e)&&(Ze=!0))}function ed(e,t,a,l){ue=e;var i=0;do{if(Bl&&(Hl=null),Qn=0,Bl=!1,25<=i)throw Error(c(301));if(i+=1,Ue=Se=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=Hp,r=t(a,l)}while(Bl);return r}function _p(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Xn(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ue.flags|=1024),t}function Eu(){var e=er!==0;return er=0,e}function wu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Cu(e){if(Ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ii=!1}Ta=0,Ue=Se=ue=null,Bl=!1,Qn=er=0,Hl=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Be(){if(Se===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,Se=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xn(e){var t=Qn;return Qn+=1,Hl===null&&(Hl=[]),e=Zf(Hl,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?qd:$d),e}function tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xn(e);if(e.$$typeof===Z)return nt(e)}throw Error(c(438,String(e)))}function Tu(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zu(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=rt;return t.index++,a}function oa(e,t){return typeof t=="function"?t(e):t}function ar(e){var t=Be();return Ru(t,Se,e)}function Ru(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var i=e.baseQueue,r=l.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,l.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=f=null,v=null,C=t,_=!1;do{var q=C.lane&-536870913;if(q!==C.lane?(he&q)===q:(Ta&q)===q){var T=C.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),q===ql&&(_=!0);else if((Ta&T)===T){C=C.next,T===ql&&(_=!0);continue}else q={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(m=v=q,f=r):v=v.next=q,ue.lanes|=T,qa|=T;q=C.action,ul&&a(r,q),r=C.hasEagerState?C.eagerState:a(r,q)}else T={lane:q,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(m=v=T,f=r):v=v.next=T,ue.lanes|=q,qa|=q;C=C.next}while(C!==null&&C!==t);if(v===null?f=r:v.next=m,!yt(r,e.memoizedState)&&(Ze=!0,_&&(a=$l,a!==null)))throw a;e.memoizedState=r,e.baseState=f,e.baseQueue=v,l.lastRenderedState=r}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ou(e){var t=Be(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);yt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function td(e,t,a){var l=ue,i=Be(),r=ge;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var f=!yt((Se||i).memoizedState,a);f&&(i.memoizedState=a,Ze=!0),i=i.queue;var m=nd.bind(null,l,i,e);if(Vn(2048,8,m,[e]),i.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Gl(9,lr(),ld.bind(null,l,i,a,t),null),Ce===null)throw Error(c(349));r||(Ta&124)!==0||ad(l,t,a)}return a}function ad(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=zu(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ld(e,t,a,l){t.value=a,t.getSnapshot=l,id(t)&&rd(e)}function nd(e,t,a){return a(function(){id(t)&&rd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function rd(e){var t=Ml(e,2);t!==null&&Et(t,e,2)}function Mu(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),ul){Sa(!0);try{a()}finally{Sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function od(e,t,a,l){return e.baseState=a,Ru(e,Se,typeof l=="function"?l:oa)}function Np(e,t,a,l,i){if(ir(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};D.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,ud(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ud(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var r=D.T,f={};D.T=f;try{var m=a(i,l),v=D.S;v!==null&&v(f,m),cd(e,t,m)}catch(C){Du(e,t,C)}finally{D.T=r}}else try{r=a(i,l),cd(e,t,r)}catch(C){Du(e,t,C)}}function cd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){sd(e,t,l)},function(l){return Du(e,t,l)}):sd(e,t,a)}function sd(e,t,a){t.status="fulfilled",t.value=a,fd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ud(e,a)))}function Du(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,fd(t),t=t.next;while(t!==l)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function md(e,t){if(ge){var a=Ce.formState;if(a!==null){e:{var l=ue;if(ge){if(_e){t:{for(var i=_e,r=Qt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Ht(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){_e=Ht(i.nextSibling),l=i.data==="F!";break e}}nl(l)}l=!1}l&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},a.queue=l,a=Dd.bind(null,ue,l),l.dispatch=a,l=Mu(!1),r=Uu.bind(null,ue,!1,l.queue),l=ft(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Np.bind(null,ue,i,r,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function hd(e){var t=Be();return pd(t,Se,e)}function pd(e,t,a){if(t=Ru(e,t,dd)[0],e=ar(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Xn(t)}catch(f){throw f===Hn?Wi:f}else l=t;t=Be();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Gl(9,lr(),qp.bind(null,i,a),null)),[l,r,e]}function qp(e,t){e.action=t}function gd(e){var t=Be(),a=Se;if(a!==null)return pd(t,a,e);Be(),t=t.memoizedState,a=Be();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ue.updateQueue,t===null&&(t=zu(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function lr(){return{destroy:void 0,resource:void 0}}function vd(){return Be().memoizedState}function nr(e,t,a,l){var i=ft();l=l===void 0?null:l,ue.flags|=e,i.memoizedState=Gl(1|t,lr(),a,l)}function Vn(e,t,a,l){var i=Be();l=l===void 0?null:l;var r=i.memoizedState.inst;Se!==null&&l!==null&&ju(l,Se.memoizedState.deps)?i.memoizedState=Gl(t,r,a,l):(ue.flags|=e,i.memoizedState=Gl(1|t,r,a,l))}function yd(e,t){nr(8390656,8,e,t)}function bd(e,t){Vn(2048,8,e,t)}function xd(e,t){return Vn(4,2,e,t)}function Sd(e,t){return Vn(4,4,e,t)}function jd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,a){a=a!=null?a.concat([e]):null,Vn(4,4,jd.bind(null,t,e),a)}function _u(){}function Ed(e,t){var a=Be();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ju(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function wd(e,t){var a=Be();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ju(t,l[1]))return l[0];if(l=e(),ul){Sa(!0);try{e()}finally{Sa(!1)}}return a.memoizedState=[l,t],l}function Nu(e,t,a){return a===void 0||(Ta&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Tm(),ue.lanes|=e,qa|=e,a)}function Cd(e,t,a,l){return yt(a,t)?a:Ul.current!==null?(e=Nu(e,a,l),yt(e,t)||(Ze=!0),e):(Ta&42)===0?(Ze=!0,e.memoizedState=a):(e=Tm(),ue.lanes|=e,qa|=e,t)}function zd(e,t,a,l,i){var r=L.p;L.p=r!==0&&8>r?r:8;var f=D.T,m={};D.T=m,Uu(e,!1,t,a);try{var v=i(),C=D.S;if(C!==null&&C(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var _=Mp(v,l);Zn(e,t,_,At(e))}else Zn(e,t,l,At(e))}catch(q){Zn(e,t,{then:function(){},status:"rejected",reason:q},At())}finally{L.p=r,D.T=f}}function $p(){}function qu(e,t,a,l){if(e.tag!==5)throw Error(c(476));var i=Td(e).queue;zd(e,i,t,I,a===null?$p:function(){return Rd(e),a(l)})}function Td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=Td(e).next.queue;Zn(e,t,{},At())}function $u(){return nt(fi)}function Od(){return Be().memoizedState}function Md(){return Be().memoizedState}function Up(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=At();e=Ca(a);var l=za(t,e,a);l!==null&&(Et(l,t,a),Yn(l,t,a)),t={cache:du()},e.payload=t;return}t=t.return}}function Bp(e,t,a){var l=At();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ir(e)?_d(t,a):(a=au(e,t,a,l),a!==null&&(Et(a,e,l),Nd(a,t,l)))}function Dd(e,t,a){var l=At();Zn(e,t,a,l)}function Zn(e,t,a,l){var i={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ir(e))_d(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,m=r(f,a);if(i.hasEagerState=!0,i.eagerState=m,yt(m,f))return ki(e,t,i,0),Ce===null&&Yi(),!1}catch{}finally{}if(a=au(e,t,i,l),a!==null)return Et(a,e,l),Nd(a,t,l),!0}return!1}function Uu(e,t,a,l){if(l={lane:2,revertLane:pc(),action:l,hasEagerState:!1,eagerState:null,next:null},ir(e)){if(t)throw Error(c(479))}else t=au(e,a,l,2),t!==null&&Et(t,e,2)}function ir(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function _d(e,t){Bl=Ii=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Nd(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ys(e,a)}}var rr={readContext:nt,use:tr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe},qd={readContext:nt,use:tr,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:yd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,nr(4194308,4,jd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return nr(4194308,4,e,t)},useInsertionEffect:function(e,t){nr(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var l=e();if(ul){Sa(!0);try{e()}finally{Sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ft();if(a!==void 0){var i=a(t);if(ul){Sa(!0);try{a(t)}finally{Sa(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Bp.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=Mu(e);var t=e.queue,a=Dd.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_u,useDeferredValue:function(e,t){var a=ft();return Nu(a,e,t)},useTransition:function(){var e=Mu(!1);return e=zd.bind(null,ue,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ue,i=ft();if(ge){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ce===null)throw Error(c(349));(he&124)!==0||ad(l,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,yd(nd.bind(null,l,r,e),[e]),l.flags|=2048,Gl(9,lr(),ld.bind(null,l,r,a,t),null),a},useId:function(){var e=ft(),t=Ce.identifierPrefix;if(ge){var a=na,l=la;a=(l&~(1<<32-vt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=er++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Dp++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:$u,useFormState:md,useActionState:md,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Uu.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Tu,useCacheRefresh:function(){return ft().memoizedState=Up.bind(null,ue)}},$d={readContext:nt,use:tr,useCallback:Ed,useContext:nt,useEffect:bd,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:wd,useReducer:ar,useRef:vd,useState:function(){return ar(oa)},useDebugValue:_u,useDeferredValue:function(e,t){var a=Be();return Cd(a,Se.memoizedState,e,t)},useTransition:function(){var e=ar(oa)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Xn(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:$u,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var a=Be();return od(a,Se,e,t)},useMemoCache:Tu,useCacheRefresh:Md},Hp={readContext:nt,use:tr,useCallback:Ed,useContext:nt,useEffect:bd,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:wd,useReducer:Ou,useRef:vd,useState:function(){return Ou(oa)},useDebugValue:_u,useDeferredValue:function(e,t){var a=Be();return Se===null?Nu(a,e,t):Cd(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ou(oa)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Xn(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:$u,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var a=Be();return Se!==null?od(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Md},Yl=null,Kn=0;function or(e){var t=Kn;return Kn+=1,Yl===null&&(Yl=[]),Zf(Yl,e,t)}function Jn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ur(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){var t=e._init;return t(e._payload)}function Bd(e){function t(A,S){if(e){var w=A.deletions;w===null?(A.deletions=[S],A.flags|=16):w.push(S)}}function a(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function l(A){for(var S=new Map;A!==null;)A.key!==null?S.set(A.key,A):S.set(A.index,A),A=A.sibling;return S}function i(A,S){return A=aa(A,S),A.index=0,A.sibling=null,A}function r(A,S,w){return A.index=w,e?(w=A.alternate,w!==null?(w=w.index,w<S?(A.flags|=67108866,S):w):(A.flags|=67108866,S)):(A.flags|=1048576,S)}function f(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function m(A,S,w,N){return S===null||S.tag!==6?(S=nu(w,A.mode,N),S.return=A,S):(S=i(S,w),S.return=A,S)}function v(A,S,w,N){var J=w.type;return J===G?_(A,S,w.props.children,N,w.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Te&&Ud(J)===S.type)?(S=i(S,w.props),Jn(S,w),S.return=A,S):(S=Qi(w.type,w.key,w.props,null,A.mode,N),Jn(S,w),S.return=A,S)}function C(A,S,w,N){return S===null||S.tag!==4||S.stateNode.containerInfo!==w.containerInfo||S.stateNode.implementation!==w.implementation?(S=iu(w,A.mode,N),S.return=A,S):(S=i(S,w.children||[]),S.return=A,S)}function _(A,S,w,N,J){return S===null||S.tag!==7?(S=el(w,A.mode,N,J),S.return=A,S):(S=i(S,w),S.return=A,S)}function q(A,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=nu(""+S,A.mode,w),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return w=Qi(S.type,S.key,S.props,null,A.mode,w),Jn(w,S),w.return=A,w;case B:return S=iu(S,A.mode,w),S.return=A,S;case Te:var N=S._init;return S=N(S._payload),q(A,S,w)}if(Qe(S)||Le(S))return S=el(S,A.mode,w,null),S.return=A,S;if(typeof S.then=="function")return q(A,or(S),w);if(S.$$typeof===Z)return q(A,Ki(A,S),w);ur(A,S)}return null}function T(A,S,w,N){var J=S!==null?S.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return J!==null?null:m(A,S,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case U:return w.key===J?v(A,S,w,N):null;case B:return w.key===J?C(A,S,w,N):null;case Te:return J=w._init,w=J(w._payload),T(A,S,w,N)}if(Qe(w)||Le(w))return J!==null?null:_(A,S,w,N,null);if(typeof w.then=="function")return T(A,S,or(w),N);if(w.$$typeof===Z)return T(A,S,Ki(A,w),N);ur(A,w)}return null}function R(A,S,w,N,J){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return A=A.get(w)||null,m(S,A,""+N,J);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case U:return A=A.get(N.key===null?w:N.key)||null,v(S,A,N,J);case B:return A=A.get(N.key===null?w:N.key)||null,C(S,A,N,J);case Te:var ce=N._init;return N=ce(N._payload),R(A,S,w,N,J)}if(Qe(N)||Le(N))return A=A.get(w)||null,_(S,A,N,J,null);if(typeof N.then=="function")return R(A,S,w,or(N),J);if(N.$$typeof===Z)return R(A,S,w,Ki(S,N),J);ur(S,N)}return null}function le(A,S,w,N){for(var J=null,ce=null,W=S,ae=S=0,Je=null;W!==null&&ae<w.length;ae++){W.index>ae?(Je=W,W=null):Je=W.sibling;var pe=T(A,W,w[ae],N);if(pe===null){W===null&&(W=Je);break}e&&W&&pe.alternate===null&&t(A,W),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe,W=Je}if(ae===w.length)return a(A,W),ge&&al(A,ae),J;if(W===null){for(;ae<w.length;ae++)W=q(A,w[ae],N),W!==null&&(S=r(W,S,ae),ce===null?J=W:ce.sibling=W,ce=W);return ge&&al(A,ae),J}for(W=l(W);ae<w.length;ae++)Je=R(W,A,ae,w[ae],N),Je!==null&&(e&&Je.alternate!==null&&W.delete(Je.key===null?ae:Je.key),S=r(Je,S,ae),ce===null?J=Je:ce.sibling=Je,ce=Je);return e&&W.forEach(function(Qa){return t(A,Qa)}),ge&&al(A,ae),J}function ee(A,S,w,N){if(w==null)throw Error(c(151));for(var J=null,ce=null,W=S,ae=S=0,Je=null,pe=w.next();W!==null&&!pe.done;ae++,pe=w.next()){W.index>ae?(Je=W,W=null):Je=W.sibling;var Qa=T(A,W,pe.value,N);if(Qa===null){W===null&&(W=Je);break}e&&W&&Qa.alternate===null&&t(A,W),S=r(Qa,S,ae),ce===null?J=Qa:ce.sibling=Qa,ce=Qa,W=Je}if(pe.done)return a(A,W),ge&&al(A,ae),J;if(W===null){for(;!pe.done;ae++,pe=w.next())pe=q(A,pe.value,N),pe!==null&&(S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return ge&&al(A,ae),J}for(W=l(W);!pe.done;ae++,pe=w.next())pe=R(W,A,ae,pe.value,N),pe!==null&&(e&&pe.alternate!==null&&W.delete(pe.key===null?ae:pe.key),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return e&&W.forEach(function(Gg){return t(A,Gg)}),ge&&al(A,ae),J}function Ae(A,S,w,N){if(typeof w=="object"&&w!==null&&w.type===G&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case U:e:{for(var J=w.key;S!==null;){if(S.key===J){if(J=w.type,J===G){if(S.tag===7){a(A,S.sibling),N=i(S,w.props.children),N.return=A,A=N;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Te&&Ud(J)===S.type){a(A,S.sibling),N=i(S,w.props),Jn(N,w),N.return=A,A=N;break e}a(A,S);break}else t(A,S);S=S.sibling}w.type===G?(N=el(w.props.children,A.mode,N,w.key),N.return=A,A=N):(N=Qi(w.type,w.key,w.props,null,A.mode,N),Jn(N,w),N.return=A,A=N)}return f(A);case B:e:{for(J=w.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===w.containerInfo&&S.stateNode.implementation===w.implementation){a(A,S.sibling),N=i(S,w.children||[]),N.return=A,A=N;break e}else{a(A,S);break}else t(A,S);S=S.sibling}N=iu(w,A.mode,N),N.return=A,A=N}return f(A);case Te:return J=w._init,w=J(w._payload),Ae(A,S,w,N)}if(Qe(w))return le(A,S,w,N);if(Le(w)){if(J=Le(w),typeof J!="function")throw Error(c(150));return w=J.call(w),ee(A,S,w,N)}if(typeof w.then=="function")return Ae(A,S,or(w),N);if(w.$$typeof===Z)return Ae(A,S,Ki(A,w),N);ur(A,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,S!==null&&S.tag===6?(a(A,S.sibling),N=i(S,w),N.return=A,A=N):(a(A,S),N=nu(w,A.mode,N),N.return=A,A=N),f(A)):a(A,S)}return function(A,S,w,N){try{Kn=0;var J=Ae(A,S,w,N);return Yl=null,J}catch(W){if(W===Hn||W===Wi)throw W;var ce=bt(29,W,null,A.mode);return ce.lanes=N,ce.return=A,ce}finally{}}}var kl=Bd(!0),Hd=Bd(!1),_t=$(null),Xt=null;function Ra(e){var t=e.alternate;Q(Ye,Ye.current&1),Q(_t,e),Xt===null&&(t===null||Ul.current!==null||t.memoizedState!==null)&&(Xt=e)}function Gd(e){if(e.tag===22){if(Q(Ye,Ye.current),Q(_t,e),Xt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Xt=e)}}else Oa()}function Oa(){Q(Ye,Ye.current),Q(_t,_t.current)}function ua(e){k(_t),Xt===e&&(Xt=null),k(Ye)}var Ye=$(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||zc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Bu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=At(),i=Ca(l);i.payload=t,a!=null&&(i.callback=a),t=za(e,i,l),t!==null&&(Et(t,e,l),Yn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=At(),i=Ca(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=za(e,i,l),t!==null&&(Et(t,e,l),Yn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=At(),l=Ca(a);l.tag=2,t!=null&&(l.callback=t),t=za(e,l,a),t!==null&&(Et(t,e,a),Yn(t,e,a))}};function Yd(e,t,a,l,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,f):t.prototype&&t.prototype.isPureReactComponent?!Mn(a,l)||!Mn(i,r):!0}function kd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Hu.enqueueReplaceState(t,t.state,null)}function cl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ld(e){sr(e)}function Qd(e){console.error(e)}function Xd(e){sr(e)}function fr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Vd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Gu(e,t,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){fr(e,t)},a}function Zd(e){return e=Ca(e),e.tag=3,e}function Kd(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;e.payload=function(){return i(r)},e.callback=function(){Vd(t,a,l)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Vd(t,a,l),typeof i!="function"&&($a===null?$a=new Set([this]):$a.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Gp(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&$n(t,a,i,!0),a=_t.current,a!==null){switch(a.tag){case 13:return Xt===null?sc():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===pu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),dc(e,l,i)),!1;case 22:return a.flags|=65536,l===pu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),dc(e,l,i)),!1}throw Error(c(435,a.tag))}return dc(e,l,i),sc(),!1}if(ge)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==uu&&(e=Error(c(422),{cause:l}),qn(Rt(e,a)))):(l!==uu&&(t=Error(c(423),{cause:l}),qn(Rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Rt(l,a),i=Gu(e.stateNode,l,i),yu(e,i),Ne!==4&&(Ne=2)),!1;var r=Error(c(520),{cause:l});if(r=Rt(r,a),ai===null?ai=[r]:ai.push(r),Ne!==4&&(Ne=2),t===null)return!0;l=Rt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Gu(a.stateNode,l,e),yu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&($a===null||!$a.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Zd(i),Kd(i,e,a,l),yu(a,i),!1}a=a.return}while(a!==null);return!1}var Jd=Error(c(461)),Ze=!1;function Ie(e,t,a,l){t.child=e===null?Hd(t,null,a,l):kl(t,e.child,a,l)}function Wd(e,t,a,l,i){a=a.render;var r=t.ref;if("ref"in l){var f={};for(var m in l)m!=="ref"&&(f[m]=l[m])}else f=l;return rl(t),l=Au(e,t,a,f,r,i),m=Eu(),e!==null&&!Ze?(wu(e,t,i),ca(e,t,i)):(ge&&m&&ru(t),t.flags|=1,Ie(e,t,l,i),t.child)}function Fd(e,t,a,l,i){if(e===null){var r=a.type;return typeof r=="function"&&!lu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Pd(e,t,r,l,i)):(e=Qi(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ku(e,i)){var f=r.memoizedProps;if(a=a.compare,a=a!==null?a:Mn,a(f,l)&&e.ref===t.ref)return ca(e,t,i)}return t.flags|=1,e=aa(r,l),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,a,l,i){if(e!==null){var r=e.memoizedProps;if(Mn(r,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=r,Ku(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ca(e,t,i)}return Yu(e,t,a,l,i)}function Id(e,t,a){var l=t.pendingProps,i=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return em(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ji(t,r!==null?r.cachePool:null),r!==null?Pf(t,r):xu(),Gd(t);else return t.lanes=t.childLanes=536870912,em(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Ji(t,r.cachePool),Pf(t,r),Oa(),t.memoizedState=null):(e!==null&&Ji(t,null),xu(),Oa());return Ie(e,t,i,a),t.child}function em(e,t,a,l){var i=hu();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ji(t,null),xu(),Gd(t),e!==null&&$n(e,t,l,!0),null}function dr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Yu(e,t,a,l,i){return rl(t),a=Au(e,t,a,l,void 0,i),l=Eu(),e!==null&&!Ze?(wu(e,t,i),ca(e,t,i)):(ge&&l&&ru(t),t.flags|=1,Ie(e,t,a,i),t.child)}function tm(e,t,a,l,i,r){return rl(t),t.updateQueue=null,a=ed(t,l,a,i),If(e),l=Eu(),e!==null&&!Ze?(wu(e,t,r),ca(e,t,r)):(ge&&l&&ru(t),t.flags|=1,Ie(e,t,a,r),t.child)}function am(e,t,a,l,i){if(rl(t),t.stateNode===null){var r=Dl,f=a.contextType;typeof f=="object"&&f!==null&&(r=nt(f)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},gu(t),f=a.contextType,r.context=typeof f=="object"&&f!==null?nt(f):Dl,r.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Bu(t,a,f,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Hu.enqueueReplaceState(r,r.state,null),Ln(t,l,r,i),kn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=cl(a,m);r.props=v;var C=r.context,_=a.contextType;f=Dl,typeof _=="object"&&_!==null&&(f=nt(_));var q=a.getDerivedStateFromProps;_=typeof q=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,_||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||C!==f)&&kd(t,r,l,f),wa=!1;var T=t.memoizedState;r.state=T,Ln(t,l,r,i),kn(),C=t.memoizedState,m||T!==C||wa?(typeof q=="function"&&(Bu(t,a,q,l),C=t.memoizedState),(v=wa||Yd(t,a,v,l,T,C,f))?(_||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),r.props=l,r.state=C,r.context=f,l=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,vu(e,t),f=t.memoizedProps,_=cl(a,f),r.props=_,q=t.pendingProps,T=r.context,C=a.contextType,v=Dl,typeof C=="object"&&C!==null&&(v=nt(C)),m=a.getDerivedStateFromProps,(C=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==q||T!==v)&&kd(t,r,l,v),wa=!1,T=t.memoizedState,r.state=T,Ln(t,l,r,i),kn();var R=t.memoizedState;f!==q||T!==R||wa||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof m=="function"&&(Bu(t,a,m,l),R=t.memoizedState),(_=wa||Yd(t,a,_,l,T,R,v)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(C||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,R,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,R,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=R),r.props=l,r.state=R,r.context=v,l=_):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,dr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=kl(t,e.child,null,i),t.child=kl(t,null,a,i)):Ie(e,t,a,i),t.memoizedState=r.state,e=t.child):e=ca(e,t,i),e}function lm(e,t,a,l){return Nn(),t.flags|=256,Ie(e,t,a,l),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lu(e){return{baseLanes:e,cachePool:Qf()}}function Qu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function nm(e,t,a){var l=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Ra(t):Oa(),ge){var m=_e,v;if(v=m){e:{for(v=m,m=Qt;v.nodeType!==8;){if(!m){m=null;break e}if(v=Ht(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:tl!==null?{id:la,overflow:na}:null,retryLane:536870912,hydrationErrors:null},v=bt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,ot=t,_e=null,v=!0):v=!1}v||nl(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return zc(m)?t.lanes=32:t.lanes=536870912,null;ua(t)}return m=l.children,l=l.fallback,i?(Oa(),i=t.mode,m=mr({mode:"hidden",children:m},i),l=el(l,i,a,null),m.return=t,l.return=t,m.sibling=l,t.child=m,i=t.child,i.memoizedState=Lu(a),i.childLanes=Qu(e,f,a),t.memoizedState=ku,l):(Ra(t),Xu(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(Ra(t),t.flags&=-257,t=Vu(e,t,a)):t.memoizedState!==null?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),i=l.fallback,m=t.mode,l=mr({mode:"visible",children:l.children},m),i=el(i,m,a,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,kl(t,e.child,null,a),l=t.child,l.memoizedState=Lu(a),l.childLanes=Qu(e,f,a),t.memoizedState=ku,t=i);else if(Ra(t),zc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var C=f.dgst;f=C,l=Error(c(419)),l.stack="",l.digest=f,qn({value:l,source:null,stack:null}),t=Vu(e,t,a)}else if(Ze||$n(e,t,a,!1),f=(a&e.childLanes)!==0,Ze||f){if(f=Ce,f!==null&&(l=a&-a,l=(l&42)!==0?1:To(l),l=(l&(f.suspendedLanes|a))!==0?0:l,l!==0&&l!==v.retryLane))throw v.retryLane=l,Ml(e,l),Et(f,e,l),Jd;m.data==="$?"||sc(),t=Vu(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,_e=Ht(m.nextSibling),ot=t,ge=!0,ll=null,Qt=!1,e!==null&&(Mt[Dt++]=la,Mt[Dt++]=na,Mt[Dt++]=tl,la=e.id,na=e.overflow,tl=t),t=Xu(t,l.children),t.flags|=4096);return t}return i?(Oa(),i=l.fallback,m=t.mode,v=e.child,C=v.sibling,l=aa(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,C!==null?i=aa(C,i):(i=el(i,m,a,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,m=e.child.memoizedState,m===null?m=Lu(a):(v=m.cachePool,v!==null?(C=Ge._currentValue,v=v.parent!==C?{parent:C,pool:C}:v):v=Qf(),m={baseLanes:m.baseLanes|a,cachePool:v}),i.memoizedState=m,i.childLanes=Qu(e,f,a),t.memoizedState=ku,l):(Ra(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Xu(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=bt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vu(e,t,a){return kl(t,e.child,null,a),e=Xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),su(e.return,t,a)}function Zu(e,t,a,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=i)}function rm(e,t,a){var l=t.pendingProps,i=l.revealOrder,r=l.tail;if(Ie(e,t,l.children,a),l=Ye.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,a,t);else if(e.tag===19)im(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Q(Ye,l),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&cr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Zu(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&cr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Zu(t,!0,a,null,r);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ku(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zi(e)))}function Yp(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Ea(t,Ge,e.memoizedState.cache),Nn();break;case 27:case 5:Ka(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?nm(e,t,a):(Ra(t),e=ca(e,t,a),e!==null?e.sibling:null);Ra(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||($n(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return rm(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Ye,Ye.current),l)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,a);case 24:Ea(t,Ge,e.memoizedState.cache)}return ca(e,t,a)}function om(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Ku(e,a)&&(t.flags&128)===0)return Ze=!1,Yp(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,ge&&(t.flags&1048576)!==0&&Uf(t,Vi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,i=l._init;if(l=i(l._payload),t.type=l,typeof l=="function")lu(l)?(e=cl(l,e),t.tag=1,t=am(null,t,l,e,a)):(t.tag=0,t=Yu(null,t,l,e,a));else{if(l!=null){if(i=l.$$typeof,i===ne){t.tag=11,t=Wd(null,t,l,e,a);break e}else if(i===F){t.tag=14,t=Fd(null,t,l,e,a);break e}}throw t=Pt(l)||l,Error(c(306,t,""))}}return t;case 0:return Yu(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=cl(l,t.pendingProps),am(e,t,l,i,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var r=t.memoizedState;i=r.element,vu(e,t),Ln(t,l,null,a);var f=t.memoizedState;if(l=f.cache,Ea(t,Ge,l),l!==r.cache&&fu(t,[Ge],a,!0),kn(),l=f.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=lm(e,t,l,a);break e}else if(l!==i){i=Rt(Error(c(424)),t),qn(i),t=lm(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=Ht(e.firstChild),ot=t,ge=!0,ll=null,Qt=!0,a=Hd(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Nn(),l===i){t=ca(e,t,a);break e}Ie(e,t,l,a)}t=t.child}return t;case 26:return dr(e,t),e===null?(a=fh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=zr(te.current).createElement(a),l[lt]=t,l[ct]=e,tt(l,a,e),Ve(l),t.stateNode=l):t.memoizedState=fh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ka(t),e===null&&ge&&(l=t.stateNode=uh(t.type,t.pendingProps,te.current),ot=t,Qt=!0,i=_e,Ha(t.type)?(Tc=i,_e=Ht(l.firstChild)):_e=i),Ie(e,t,t.pendingProps.children,a),dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=_e)&&(l=pg(l,t.type,t.pendingProps,Qt),l!==null?(t.stateNode=l,ot=t,_e=Ht(l.firstChild),Qt=!1,i=!0):i=!1),i||nl(t)),Ka(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,l=r.children,Ec(i,r)?l=null:f!==null&&Ec(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Au(e,t,_p,null,null,a),fi._currentValue=i),dr(e,t),Ie(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=_e)&&(a=gg(a,t.pendingProps,Qt),a!==null?(t.stateNode=a,ot=t,_e=null,e=!0):e=!1),e||nl(t)),null;case 13:return nm(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=kl(t,null,l,a):Ie(e,t,l,a),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,a);case 7:return Ie(e,t,t.pendingProps,a),t.child;case 8:return Ie(e,t,t.pendingProps.children,a),t.child;case 12:return Ie(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Ea(t,t.type,l.value),Ie(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,rl(t),i=nt(i),l=l(i),t.flags|=1,Ie(e,t,l,a),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,a);case 15:return Pd(e,t,t.type,t.pendingProps,a);case 19:return rm(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=mr(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=aa(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Id(e,t,a);case 24:return rl(t),l=nt(Ge),e===null?(i=hu(),i===null&&(i=Ce,r=du(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:l,cache:i},gu(t),Ea(t,Ge,i)):((e.lanes&a)!==0&&(vu(e,t),Ln(t,null,null,a),kn()),i=e.memoizedState,r=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,Ge,l)):(l=r.cache,Ea(t,Ge,l),l!==i.cache&&fu(t,[Ge],a,!0))),Ie(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function sa(e){e.flags|=4}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gh(t)){if(t=_t.current,t!==null&&((he&4194048)===he?Xt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Xt))throw Gn=pu,Xf;e.flags|=8192}}function hr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hs():536870912,e.lanes|=t,Vl|=t)}function Wn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function kp(e,t,a){var l=t.pendingProps;switch(ou(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ra(Ge),at(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_n(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gf())),De(t),null;case 26:return a=t.memoizedState,e===null?(sa(t),a!==null?(De(t),um(t,a)):(De(t),t.flags&=-16777217)):a?a!==e.memoizedState?(sa(t),De(t),um(t,a)):(De(t),t.flags&=-16777217):(e.memoizedProps!==l&&sa(t),De(t),t.flags&=-16777217),null;case 27:It(t),a=te.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return De(t),null}e=P.current,_n(t)?Bf(t):(e=uh(i,l,a),t.stateNode=e,sa(t))}return De(t),null;case 5:if(It(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return De(t),null}if(e=P.current,_n(t))Bf(t);else{switch(i=zr(te.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}e[lt]=t,e[ct]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(tt(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&sa(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=te.current,_n(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=ot,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[lt]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||th(e.nodeValue,a)),e||nl(t)}else e=zr(e).createTextNode(l),e[lt]=t,t.stateNode=e}return De(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=_n(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[lt]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ua(t),t):(ua(t),null)}if(ua(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),hr(t,t.updateQueue),De(t),null;case 4:return at(),e===null&&bc(t.stateNode.containerInfo),De(t),null;case 10:return ra(t.type),De(t),null;case 19:if(k(Ye),i=t.memoizedState,i===null)return De(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)Wn(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=cr(e),r!==null){for(t.flags|=128,Wn(i,!1),e=r.updateQueue,t.updateQueue=e,hr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$f(a,e),a=a.sibling;return Q(Ye,Ye.current&1|2),t.child}e=e.sibling}i.tail!==null&&Lt()>vr&&(t.flags|=128,l=!0,Wn(i,!1),t.lanes=4194304)}else{if(!l)if(e=cr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,hr(t,e),Wn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ge)return De(t),null}else 2*Lt()-i.renderingStartTime>vr&&a!==536870912&&(t.flags|=128,l=!0,Wn(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Lt(),t.sibling=null,e=Ye.current,Q(Ye,l?e&1|2:e&1),t):(De(t),null);case 22:case 23:return ua(t),Su(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),a=t.updateQueue,a!==null&&hr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&k(ol),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ra(Ge),De(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Lp(e,t){switch(ou(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(Ge),at(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return It(t),null;case 13:if(ua(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(Ye),null;case 4:return at(),null;case 10:return ra(t.type),null;case 22:case 23:return ua(t),Su(),e!==null&&k(ol),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(Ge),null;case 25:return null;default:return null}}function cm(e,t){switch(ou(t),t.tag){case 3:ra(Ge),at();break;case 26:case 27:case 5:It(t);break;case 4:at();break;case 13:ua(t);break;case 19:k(Ye);break;case 10:ra(t.type);break;case 22:case 23:ua(t),Su(),e!==null&&k(ol);break;case 24:ra(Ge)}}function Fn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var r=a.create,f=a.inst;l=r(),f.destroy=l}a=a.next}while(a!==i)}}catch(m){we(t,t.return,m)}}function Ma(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&e)===e){var f=l.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var v=a,C=m;try{C()}catch(_){we(i,v,_)}}}l=l.next}while(l!==r)}}catch(_){we(t,t.return,_)}}function sm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ff(t,a)}catch(l){we(e,e.return,l)}}}function fm(e,t,a){a.props=cl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){we(e,t,l)}}function Pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){we(e,t,i)}}function Vt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){we(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){we(e,t,i)}else a.current=null}function dm(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){we(e,e.return,i)}}function Ju(e,t,a){try{var l=e.stateNode;sg(l,e.type,a,t),l[ct]=t}catch(i){we(e,e.return,i)}}function mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Cr));else if(l!==4&&(l===27&&Ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Fu(e,t,a),e=e.sibling;e!==null;)Fu(e,t,a),e=e.sibling}function pr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(pr(e,t,a),e=e.sibling;e!==null;)pr(e,t,a),e=e.sibling}function hm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,l,a),t[lt]=e,t[ct]=a}catch(r){we(e,e.return,r)}}var fa=!1,$e=!1,Pu=!1,pm=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Qp(e,t){if(e=e.containerInfo,jc=_r,e=Cf(e),Wo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var f=0,m=-1,v=-1,C=0,_=0,q=e,T=null;t:for(;;){for(var R;q!==a||i!==0&&q.nodeType!==3||(m=f+i),q!==r||l!==0&&q.nodeType!==3||(v=f+l),q.nodeType===3&&(f+=q.nodeValue.length),(R=q.firstChild)!==null;)T=q,q=R;for(;;){if(q===e)break t;if(T===a&&++C===i&&(m=f),T===r&&++_===l&&(v=f),(R=q.nextSibling)!==null)break;q=T,T=q.parentNode}q=R}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:e,selectionRange:a},_r=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var le=cl(a.type,i,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(le,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){we(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function gm(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a),l&4&&Fn(5,a);break;case 1:if(Da(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){we(a,a.return,f)}else{var i=cl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){we(a,a.return,f)}}l&64&&sm(a),l&512&&Pn(a,a.return);break;case 3:if(Da(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ff(e,t)}catch(f){we(a,a.return,f)}}break;case 27:t===null&&l&4&&hm(a);case 26:case 5:Da(e,a),t===null&&l&4&&dm(a),l&512&&Pn(a,a.return);break;case 12:Da(e,a);break;case 13:Da(e,a),l&4&&bm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ip.bind(null,a),vg(e,a))));break;case 22:if(l=a.memoizedState!==null||fa,!l){t=t!==null&&t.memoizedState!==null||$e,i=fa;var r=$e;fa=l,($e=t)&&!r?_a(e,a,(a.subtreeFlags&8772)!==0):Da(e,a),fa=i,$e=r}break;case 30:break;default:Da(e,a)}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,dt=!1;function da(e,t,a){for(a=a.child;a!==null;)ym(e,t,a),a=a.sibling}function ym(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(bn,a)}catch{}switch(a.tag){case 26:$e||Vt(a,t),da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Vt(a,t);var l=Oe,i=dt;Ha(a.type)&&(Oe=a.stateNode,dt=!1),da(e,t,a),oi(a.stateNode),Oe=l,dt=i;break;case 5:$e||Vt(a,t);case 6:if(l=Oe,i=dt,Oe=null,da(e,t,a),Oe=l,dt=i,Oe!==null)if(dt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(a.stateNode)}catch(r){we(a,t,r)}else try{Oe.removeChild(a.stateNode)}catch(r){we(a,t,r)}break;case 18:Oe!==null&&(dt?(e=Oe,rh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pi(e)):rh(Oe,a.stateNode));break;case 4:l=Oe,i=dt,Oe=a.stateNode.containerInfo,dt=!0,da(e,t,a),Oe=l,dt=i;break;case 0:case 11:case 14:case 15:$e||Ma(2,a,t),$e||Ma(4,a,t),da(e,t,a);break;case 1:$e||(Vt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&fm(a,t,l)),da(e,t,a);break;case 21:da(e,t,a);break;case 22:$e=(l=$e)||a.memoizedState!==null,da(e,t,a),$e=l;break;default:da(e,t,a)}}function bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pi(e)}catch(a){we(t,t.return,a)}}function Xp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pm),t;default:throw Error(c(435,e.tag))}}function Iu(e,t){var a=Xp(e);t.forEach(function(l){var i=eg.bind(null,e,l);a.has(l)||(a.add(l),l.then(i,i))})}function xt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],r=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Ha(m.type)){Oe=m.stateNode,dt=!1;break e}break;case 5:Oe=m.stateNode,dt=!1;break e;case 3:case 4:Oe=m.stateNode.containerInfo,dt=!0;break e}m=m.return}if(Oe===null)throw Error(c(160));ym(r,f,i),Oe=null,dt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xm(t,e),t=t.sibling}var Bt=null;function xm(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),St(e),l&4&&(Ma(3,e,e.return),Fn(3,e),Ma(5,e,e.return));break;case 1:xt(t,e),St(e),l&512&&($e||a===null||Vt(a,a.return)),l&64&&fa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Bt;if(xt(t,e),St(e),l&512&&($e||a===null||Vt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":r=i.getElementsByTagName("title")[0],(!r||r[jn]||r[lt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(l),i.head.insertBefore(r,i.querySelector("head > title"))),tt(r,l,a),r[lt]=e,Ve(r),l=r;break e;case"link":var f=hh("link","href",i).get(l+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}r=i.createElement(l),tt(r,l,a),i.head.appendChild(r);break;case"meta":if(f=hh("meta","content",i).get(l+(a.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}r=i.createElement(l),tt(r,l,a),i.head.appendChild(r);break;default:throw Error(c(468,l))}r[lt]=e,Ve(r),l=r}e.stateNode=l}else ph(i,e.type,e.stateNode);else e.stateNode=mh(i,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?ph(i,e.type,e.stateNode):mh(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(t,e),St(e),l&512&&($e||a===null||Vt(a,a.return)),a!==null&&l&4&&Ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(t,e),St(e),l&512&&($e||a===null||Vt(a,a.return)),e.flags&32){i=e.stateNode;try{El(i,"")}catch(R){we(e,e.return,R)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Ju(e,i,a!==null?a.memoizedProps:i)),l&1024&&(Pu=!0);break;case 6:if(xt(t,e),St(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(R){we(e,e.return,R)}}break;case 3:if(Or=null,i=Bt,Bt=Tr(t.containerInfo),xt(t,e),Bt=i,St(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(R){we(e,e.return,R)}Pu&&(Pu=!1,Sm(e));break;case 4:l=Bt,Bt=Tr(e.stateNode.containerInfo),xt(t,e),St(e),Bt=l;break;case 12:xt(t,e),St(e);break;case 13:xt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=Lt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Iu(e,l)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,C=fa,_=$e;if(fa=C||i,$e=_||v,xt(t,e),$e=_,fa=C,St(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||fa||$e||sl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=v.stateNode;var q=v.memoizedProps.style,T=q!=null&&q.hasOwnProperty("display")?q.display:null;m.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(R){we(v,v.return,R)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(R){we(v,v.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Iu(e,a))));break;case 19:xt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Iu(e,l)));break;case 30:break;case 21:break;default:xt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(mm(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,r=Wu(e);pr(e,r,i);break;case 5:var f=a.stateNode;a.flags&32&&(El(f,""),a.flags&=-33);var m=Wu(e);pr(e,m,f);break;case 3:case 4:var v=a.stateNode.containerInfo,C=Wu(e);Fu(e,C,v);break;default:throw Error(c(161))}}catch(_){we(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gm(e,t.alternate,t),t=t.sibling}function sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ma(4,t,t.return),sl(t);break;case 1:Vt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&fm(t,t.return,a),sl(t);break;case 27:oi(t.stateNode);case 26:case 5:Vt(t,t.return),sl(t);break;case 22:t.memoizedState===null&&sl(t);break;case 30:sl(t);break;default:sl(t)}e=e.sibling}}function _a(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:_a(i,r,a),Fn(4,r);break;case 1:if(_a(i,r,a),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){we(l,l.return,C)}if(l=r,i=l.updateQueue,i!==null){var m=l.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Wf(v[i],m)}catch(C){we(l,l.return,C)}}a&&f&64&&sm(r),Pn(r,r.return);break;case 27:hm(r);case 26:case 5:_a(i,r,a),a&&l===null&&f&4&&dm(r),Pn(r,r.return);break;case 12:_a(i,r,a);break;case 13:_a(i,r,a),a&&f&4&&bm(i,r);break;case 22:r.memoizedState===null&&_a(i,r,a),Pn(r,r.return);break;case 30:break;default:_a(i,r,a)}t=t.sibling}}function ec(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Un(a))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Un(e))}function Zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(e,t,a,l),t=t.sibling}function jm(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,l),i&2048&&Fn(9,t);break;case 1:Zt(e,t,a,l);break;case 3:Zt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Un(e)));break;case 12:if(i&2048){Zt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){we(t,t.return,v)}}else Zt(e,t,a,l);break;case 13:Zt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Zt(e,t,a,l):In(e,t):r._visibility&2?Zt(e,t,a,l):(r._visibility|=2,Ll(e,t,a,l,(t.subtreeFlags&10256)!==0)),i&2048&&ec(f,t);break;case 24:Zt(e,t,a,l),i&2048&&tc(t.alternate,t);break;default:Zt(e,t,a,l)}}function Ll(e,t,a,l,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,m=a,v=l,C=f.flags;switch(f.tag){case 0:case 11:case 15:Ll(r,f,m,v,i),Fn(8,f);break;case 23:break;case 22:var _=f.stateNode;f.memoizedState!==null?_._visibility&2?Ll(r,f,m,v,i):In(r,f):(_._visibility|=2,Ll(r,f,m,v,i)),i&&C&2048&&ec(f.alternate,f);break;case 24:Ll(r,f,m,v,i),i&&C&2048&&tc(f.alternate,f);break;default:Ll(r,f,m,v,i)}t=t.sibling}}function In(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:In(a,l),i&2048&&ec(l.alternate,l);break;case 24:In(a,l),i&2048&&tc(l.alternate,l);break;default:In(a,l)}t=t.sibling}}var ei=8192;function Ql(e){if(e.subtreeFlags&ei)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 26:Ql(e),e.flags&ei&&e.memoizedState!==null&&Og(Bt,e.memoizedState,e.memoizedProps);break;case 5:Ql(e);break;case 3:case 4:var t=Bt;Bt=Tr(e.stateNode.containerInfo),Ql(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ei,ei=16777216,Ql(e),ei=t):Ql(e));break;default:Ql(e)}}function Em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,Cm(l,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gr(e)):ti(e);break;default:ti(e)}}function gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,Cm(l,e)}Em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ma(8,t,t.return),gr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,gr(t));break;default:gr(t)}e=e.sibling}}function Cm(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:Ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Un(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ke=l;else e:for(a=e;Ke!==null;){l=Ke;var i=l.sibling,r=l.return;if(vm(l),l===a){Ke=null;break e}if(i!==null){i.return=r,Ke=i;break e}Ke=r}}}var Vp={getCacheForType:function(e){var t=nt(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Zp=typeof WeakMap=="function"?WeakMap:Map,be=0,Ce=null,de=null,he=0,xe=0,jt=null,Na=!1,Xl=!1,ac=!1,ma=0,Ne=0,qa=0,fl=0,lc=0,Nt=0,Vl=0,ai=null,mt=null,nc=!1,ic=0,vr=1/0,yr=null,$a=null,et=0,Ua=null,Zl=null,Kl=0,rc=0,oc=null,zm=null,li=0,uc=null;function At(){if((be&2)!==0&&he!==0)return he&-he;if(D.T!==null){var e=ql;return e!==0?e:pc()}return ks()}function Tm(){Nt===0&&(Nt=(he&536870912)===0||ge?Bs():536870912);var e=_t.current;return e!==null&&(e.flags|=32),Nt}function Et(e,t,a){(e===Ce&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Jl(e,0),Ba(e,he,Nt,!1)),Sn(e,a),((be&2)===0||e!==Ce)&&(e===Ce&&((be&2)===0&&(fl|=a),Ne===4&&Ba(e,he,Nt,!1)),Kt(e))}function Rm(e,t,a){if((be&6)!==0)throw Error(c(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||xn(e,t),i=l?Wp(e,t):fc(e,t,!0),r=l;do{if(i===0){Xl&&!l&&Ba(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Kp(a)){i=fc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=ai;var v=m.current.memoizedState.isDehydrated;if(v&&(Jl(m,f).flags|=256),f=fc(m,f,!1),f!==2){if(ac&&!v){m.errorRecoveryDisabledLanes|=r,fl|=r,i=4;break e}r=mt,mt=i,r!==null&&(mt===null?mt=r:mt.push.apply(mt,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Jl(e,0),Ba(e,t,0,!0);break}e:{switch(l=e,r=i,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ba(l,t,Nt,!Na);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=ic+300-Lt(),10<i)){if(Ba(l,t,Nt,!Na),Ri(l,0,!0)!==0)break e;l.timeoutHandle=nh(Om.bind(null,l,a,mt,yr,nc,t,Nt,fl,Vl,Na,r,2,-0,0),i);break e}Om(l,a,mt,yr,nc,t,Nt,fl,Vl,Na,r,0,-0,0)}}break}while(!0);Kt(e)}function Om(e,t,a,l,i,r,f,m,v,C,_,q,T,R){if(e.timeoutHandle=-1,q=t.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(si={stylesheets:null,count:0,unsuspend:Rg},Am(t),q=Mg(),q!==null)){e.cancelPendingCommit=q(Um.bind(null,e,t,r,a,l,i,f,m,v,_,1,T,R)),Ba(e,r,f,!C);return}Um(e,t,r,a,l,i,f,m,v)}function Kp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],r=i.getSnapshot;i=i.value;try{if(!yt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ba(e,t,a,l){t&=~lc,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var r=31-vt(i),f=1<<r;l[r]=-1,i&=~f}a!==0&&Gs(e,a,t)}function br(){return(be&6)===0?(ni(0),!1):!0}function cc(){if(de!==null){if(xe===0)var e=de.return;else e=de,ia=il=null,Cu(e),Yl=null,Kn=0,e=de;for(;e!==null;)cm(e.alternate,e),e=e.return;de=null}}function Jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),cc(),Ce=e,de=a=aa(e.current,null),he=t,xe=0,jt=null,Na=!1,Xl=xn(e,t),ac=!1,Vl=Nt=lc=fl=qa=Ne=0,mt=ai=null,nc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-vt(l),r=1<<i;t|=e[i],l&=~r}return ma=t,Yi(),a}function Mm(e,t){ue=null,D.H=rr,t===Hn||t===Wi?(t=Kf(),xe=3):t===Xf?(t=Kf(),xe=4):xe=t===Jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,de===null&&(Ne=1,fr(e,Rt(t,e.current)))}function Dm(){var e=D.H;return D.H=rr,e===null?rr:e}function _m(){var e=D.A;return D.A=Vp,e}function sc(){Ne=4,Na||(he&4194048)!==he&&_t.current!==null||(Xl=!0),(qa&134217727)===0&&(fl&134217727)===0||Ce===null||Ba(Ce,he,Nt,!1)}function fc(e,t,a){var l=be;be|=2;var i=Dm(),r=_m();(Ce!==e||he!==t)&&(yr=null,Jl(e,t)),t=!1;var f=Ne;e:do try{if(xe!==0&&de!==null){var m=de,v=jt;switch(xe){case 8:cc(),f=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var C=xe;if(xe=0,jt=null,Wl(e,m,v,C),a&&Xl){f=0;break e}break;default:C=xe,xe=0,jt=null,Wl(e,m,v,C)}}Jp(),f=Ne;break}catch(_){Mm(e,_)}while(!0);return t&&e.shellSuspendCounter++,ia=il=null,be=l,D.H=i,D.A=r,de===null&&(Ce=null,he=0,Yi()),f}function Jp(){for(;de!==null;)Nm(de)}function Wp(e,t){var a=be;be|=2;var l=Dm(),i=_m();Ce!==e||he!==t?(yr=null,vr=Lt()+500,Jl(e,t)):Xl=xn(e,t);e:do try{if(xe!==0&&de!==null){t=de;var r=jt;t:switch(xe){case 1:xe=0,jt=null,Wl(e,t,r,1);break;case 2:case 9:if(Vf(r)){xe=0,jt=null,qm(t);break}t=function(){xe!==2&&xe!==9||Ce!==e||(xe=7),Kt(e)},r.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Vf(r)?(xe=0,jt=null,qm(t)):(xe=0,jt=null,Wl(e,t,r,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var m=de;if(!f||gh(f)){xe=0,jt=null;var v=m.sibling;if(v!==null)de=v;else{var C=m.return;C!==null?(de=C,xr(C)):de=null}break t}}xe=0,jt=null,Wl(e,t,r,5);break;case 6:xe=0,jt=null,Wl(e,t,r,6);break;case 8:cc(),Ne=6;break e;default:throw Error(c(462))}}Fp();break}catch(_){Mm(e,_)}while(!0);return ia=il=null,D.H=l,D.A=i,be=a,de!==null?0:(Ce=null,he=0,Yi(),Ne)}function Fp(){for(;de!==null&&!b1();)Nm(de)}function Nm(e){var t=om(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function qm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=tm(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=tm(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Cu(t);default:cm(a,t),t=de=$f(t,ma),t=om(a,t,ma)}e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function Wl(e,t,a,l){ia=il=null,Cu(t),Yl=null,Kn=0;var i=t.return;try{if(Gp(e,i,t,a,he)){Ne=1,fr(e,Rt(a,e.current)),de=null;return}}catch(r){if(i!==null)throw de=i,r;Ne=1,fr(e,Rt(a,e.current)),de=null;return}t.flags&32768?(ge||l===1?e=!0:Xl||(he&536870912)!==0?e=!1:(Na=e=!0,(l===2||l===9||l===3||l===6)&&(l=_t.current,l!==null&&l.tag===13&&(l.flags|=16384))),$m(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){$m(t,Na);return}e=t.return;var a=kp(t.alternate,t,ma);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ne===0&&(Ne=5)}function $m(e,t){do{var a=Lp(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ne=6,de=null}function Um(e,t,a,l,i,r,f,m,v){e.cancelPendingCommit=null;do Sr();while(et!==0);if((be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=tu,R1(e,a,r,f,m,v),e===Ce&&(de=Ce=null,he=0),Zl=t,Ua=e,Kl=a,rc=r,oc=i,zm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tg(Ci,function(){return km(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,i=L.p,L.p=2,f=be,be|=4;try{Qp(e,t,a)}finally{be=f,L.p=i,D.T=l}}et=1,Bm(),Hm(),Gm()}}function Bm(){if(et===1){et=0;var e=Ua,t=Zl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=L.p;L.p=2;var i=be;be|=4;try{xm(t,e);var r=Ac,f=Cf(e.containerInfo),m=r.focusedElem,v=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&wf(m.ownerDocument.documentElement,m)){if(v!==null&&Wo(m)){var C=v.start,_=v.end;if(_===void 0&&(_=C),"selectionStart"in m)m.selectionStart=C,m.selectionEnd=Math.min(_,m.value.length);else{var q=m.ownerDocument||document,T=q&&q.defaultView||window;if(T.getSelection){var R=T.getSelection(),le=m.textContent.length,ee=Math.min(v.start,le),Ae=v.end===void 0?ee:Math.min(v.end,le);!R.extend&&ee>Ae&&(f=Ae,Ae=ee,ee=f);var A=Ef(m,ee),S=Ef(m,Ae);if(A&&S&&(R.rangeCount!==1||R.anchorNode!==A.node||R.anchorOffset!==A.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var w=q.createRange();w.setStart(A.node,A.offset),R.removeAllRanges(),ee>Ae?(R.addRange(w),R.extend(S.node,S.offset)):(w.setEnd(S.node,S.offset),R.addRange(w))}}}}for(q=[],R=m;R=R.parentNode;)R.nodeType===1&&q.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<q.length;m++){var N=q[m];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}_r=!!jc,Ac=jc=null}finally{be=i,L.p=l,D.T=a}}e.current=t,et=2}}function Hm(){if(et===2){et=0;var e=Ua,t=Zl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=L.p;L.p=2;var i=be;be|=4;try{gm(e,t.alternate,t)}finally{be=i,L.p=l,D.T=a}}et=3}}function Gm(){if(et===4||et===3){et=0,x1();var e=Ua,t=Zl,a=Kl,l=zm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,Zl=Ua=null,Ym(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&($a=null),Ro(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(bn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,i=L.p,L.p=2,D.T=null;try{for(var r=e.onRecoverableError,f=0;f<l.length;f++){var m=l[f];r(m.value,{componentStack:m.stack})}}finally{D.T=t,L.p=i}}(Kl&3)!==0&&Sr(),Kt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===uc?li++:(li=0,uc=e):li=0,ni(0)}}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Un(t)))}function Sr(e){return Bm(),Hm(),Gm(),km()}function km(){if(et!==5)return!1;var e=Ua,t=rc;rc=0;var a=Ro(Kl),l=D.T,i=L.p;try{L.p=32>a?32:a,D.T=null,a=oc,oc=null;var r=Ua,f=Kl;if(et=0,Zl=Ua=null,Kl=0,(be&6)!==0)throw Error(c(331));var m=be;if(be|=4,wm(r.current),jm(r,r.current,f,a),be=m,ni(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(bn,r)}catch{}return!0}finally{L.p=i,D.T=l,Ym(e,t)}}function Lm(e,t,a){t=Rt(a,t),t=Gu(e.stateNode,t,2),e=za(e,t,2),e!==null&&(Sn(e,2),Kt(e))}function we(e,t,a){if(e.tag===3)Lm(e,e,a);else for(;t!==null;){if(t.tag===3){Lm(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($a===null||!$a.has(l))){e=Rt(a,e),a=Zd(2),l=za(t,a,2),l!==null&&(Kd(a,l,t,e),Sn(l,2),Kt(l));break}}t=t.return}}function dc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Zp;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(ac=!0,i.add(a),e=Pp.bind(null,e,t,a),t.then(e,e))}function Pp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(he&a)===a&&(Ne===4||Ne===3&&(he&62914560)===he&&300>Lt()-ic?(be&2)===0&&Jl(e,0):lc|=a,Vl===he&&(Vl=0)),Kt(e)}function Qm(e,t){t===0&&(t=Hs()),e=Ml(e,t),e!==null&&(Sn(e,t),Kt(e))}function Ip(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qm(e,a)}function eg(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Qm(e,a)}function tg(e,t){return wo(e,t)}var jr=null,Fl=null,mc=!1,Ar=!1,hc=!1,dl=0;function Kt(e){e!==Fl&&e.next===null&&(Fl===null?jr=Fl=e:Fl=Fl.next=e),Ar=!0,mc||(mc=!0,lg())}function ni(e,t){if(!hc&&Ar){hc=!0;do for(var a=!1,l=jr;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var f=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-vt(42|e)+1)-1,r&=i&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Km(l,r))}else r=he,r=Ri(l,l===Ce?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||xn(l,r)||(a=!0,Km(l,r));l=l.next}while(a);hc=!1}}function ag(){Xm()}function Xm(){Ar=mc=!1;var e=0;dl!==0&&(fg()&&(e=dl),dl=0);for(var t=Lt(),a=null,l=jr;l!==null;){var i=l.next,r=Vm(l,t);r===0?(l.next=null,a===null?jr=i:a.next=i,i===null&&(Fl=a)):(a=l,(e!==0||(r&3)!==0)&&(Ar=!0)),l=i}ni(e)}function Vm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-vt(r),m=1<<f,v=i[f];v===-1?((m&a)===0||(m&l)!==0)&&(i[f]=T1(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=Ce,a=he,a=Ri(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Co(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||xn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Co(l),Ro(a)){case 2:case 8:a=$s;break;case 32:a=Ci;break;case 268435456:a=Us;break;default:a=Ci}return l=Zm.bind(null,e),a=wo(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Co(l),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sr()&&e.callbackNode!==a)return null;var l=he;return l=Ri(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rm(e,l,t),Vm(e,Lt()),e.callbackNode!=null&&e.callbackNode===a?Zm.bind(null,e):null)}function Km(e,t){if(Sr())return null;Rm(e,t,!0)}function lg(){mg(function(){(be&6)!==0?wo(qs,ag):Xm()})}function pc(){return dl===0&&(dl=Bs()),dl}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ni(""+e)}function Wm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ng(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var r=Jm((i[ct]||null).action),f=l.submitter;f&&(t=(t=f[ct]||null)?Jm(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var m=new Bi("action","action",null,l,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(dl!==0){var v=f?Wm(i,f):new FormData(i);qu(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=f?Wm(i,f):new FormData(i),qu(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var gc=0;gc<eu.length;gc++){var vc=eu[gc],ig=vc.toLowerCase(),rg=vc[0].toUpperCase()+vc.slice(1);Ut(ig,"on"+rg)}Ut(Rf,"onAnimationEnd"),Ut(Of,"onAnimationIteration"),Ut(Mf,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(Ap,"onTransitionRun"),Ut(Ep,"onTransitionStart"),Ut(wp,"onTransitionCancel"),Ut(Df,"onTransitionEnd"),Sl("onMouseEnter",["mouseout","mouseover"]),Sl("onMouseLeave",["mouseout","mouseover"]),Sl("onPointerEnter",["pointerout","pointerover"]),Sl("onPointerLeave",["pointerout","pointerover"]),Wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),og=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function Fm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var f=l.length-1;0<=f;f--){var m=l[f],v=m.instance,C=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=C;try{r(i)}catch(_){sr(_)}i.currentTarget=null,r=v}else for(f=0;f<l.length;f++){if(m=l[f],v=m.instance,C=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=C;try{r(i)}catch(_){sr(_)}i.currentTarget=null,r=v}}}}function me(e,t){var a=t[Oo];a===void 0&&(a=t[Oo]=new Set);var l=e+"__bubble";a.has(l)||(Pm(t,e,2,!1),a.add(l))}function yc(e,t,a){var l=0;t&&(l|=4),Pm(a,e,l,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function bc(e){if(!e[Er]){e[Er]=!0,Qs.forEach(function(a){a!=="selectionchange"&&(og.has(a)||yc(a,!1,e),yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,yc("selectionchange",!1,t))}}function Pm(e,t,a,l){switch(jh(t)){case 2:var i=Ng;break;case 8:i=qg;break;default:i=_c}a=i.bind(null,t,a,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function xc(e,t,a,l,i){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var m=l.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=l.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=yl(m),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){l=r=f;continue e}m=m.parentNode}}l=l.return}nf(function(){var C=r,_=Ho(a),q=[];e:{var T=_f.get(e);if(T!==void 0){var R=Bi,le=e;switch(e){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":R=tp;break;case"focusin":le="focus",R=Xo;break;case"focusout":le="blur",R=Xo;break;case"beforeblur":case"afterblur":R=Xo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=np;break;case Rf:case Of:case Mf:R=V1;break;case Df:R=rp;break;case"scroll":case"scrollend":R=Y1;break;case"wheel":R=up;break;case"copy":case"cut":case"paste":R=K1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=sf;break;case"toggle":case"beforetoggle":R=sp}var ee=(t&4)!==0,Ae=!ee&&(e==="scroll"||e==="scrollend"),A=ee?T!==null?T+"Capture":null:T;ee=[];for(var S=C,w;S!==null;){var N=S;if(w=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||w===null||A===null||(N=En(S,A),N!=null&&ee.push(ri(S,N,w))),Ae)break;S=S.return}0<ee.length&&(T=new R(T,le,null,a,_),q.push({event:T,listeners:ee}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",T&&a!==Bo&&(le=a.relatedTarget||a.fromElement)&&(yl(le)||le[vl]))break e;if((R||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,R?(le=a.relatedTarget||a.toElement,R=C,le=le?yl(le):null,le!==null&&(Ae=p(le),ee=le.tag,le!==Ae||ee!==5&&ee!==27&&ee!==6)&&(le=null)):(R=null,le=C),R!==le)){if(ee=uf,N="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=sf,N="onPointerLeave",A="onPointerEnter",S="pointer"),Ae=R==null?T:An(R),w=le==null?T:An(le),T=new ee(N,S+"leave",R,a,_),T.target=Ae,T.relatedTarget=w,N=null,yl(_)===C&&(ee=new ee(A,S+"enter",le,a,_),ee.target=w,ee.relatedTarget=Ae,N=ee),Ae=N,R&&le)t:{for(ee=R,A=le,S=0,w=ee;w;w=Pl(w))S++;for(w=0,N=A;N;N=Pl(N))w++;for(;0<S-w;)ee=Pl(ee),S--;for(;0<w-S;)A=Pl(A),w--;for(;S--;){if(ee===A||A!==null&&ee===A.alternate)break t;ee=Pl(ee),A=Pl(A)}ee=null}else ee=null;R!==null&&Im(q,T,R,ee,!1),le!==null&&Ae!==null&&Im(q,Ae,le,ee,!0)}}e:{if(T=C?An(C):window,R=T.nodeName&&T.nodeName.toLowerCase(),R==="select"||R==="input"&&T.type==="file")var J=yf;else if(gf(T))if(bf)J=xp;else{J=yp;var ce=vp}else R=T.nodeName,!R||R.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?C&&Uo(C.elementType)&&(J=yf):J=bp;if(J&&(J=J(e,C))){vf(q,J,a,_);break e}ce&&ce(e,T,C),e==="focusout"&&C&&T.type==="number"&&C.memoizedProps.value!=null&&$o(T,"number",T.value)}switch(ce=C?An(C):window,e){case"focusin":(gf(ce)||ce.contentEditable==="true")&&(Tl=ce,Fo=C,Dn=null);break;case"focusout":Dn=Fo=Tl=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,zf(q,a,_);break;case"selectionchange":if(jp)break;case"keydown":case"keyup":zf(q,a,_)}var W;if(Zo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else zl?hf(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(ff&&a.locale!=="ko"&&(zl||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&zl&&(W=rf()):(Aa=_,ko="value"in Aa?Aa.value:Aa.textContent,zl=!0)),ce=wr(C,ae),0<ce.length&&(ae=new cf(ae,e,null,a,_),q.push({event:ae,listeners:ce}),W?ae.data=W:(W=pf(a),W!==null&&(ae.data=W)))),(W=dp?mp(e,a):hp(e,a))&&(ae=wr(C,"onBeforeInput"),0<ae.length&&(ce=new cf("onBeforeInput","beforeinput",null,a,_),q.push({event:ce,listeners:ae}),ce.data=W)),ng(q,e,C,a,_)}Fm(q,t)})}function ri(e,t,a){return{instance:e,listener:t,currentTarget:a}}function wr(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=En(e,a),i!=null&&l.unshift(ri(e,i,r)),i=En(e,t),i!=null&&l.push(ri(e,i,r))),e.tag===3)return l;e=e.return}return[]}function Pl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,t,a,l,i){for(var r=t._reactName,f=[];a!==null&&a!==l;){var m=a,v=m.alternate,C=m.stateNode;if(m=m.tag,v!==null&&v===l)break;m!==5&&m!==26&&m!==27||C===null||(v=C,i?(C=En(a,r),C!=null&&f.unshift(ri(a,C,v))):i||(C=En(a,r),C!=null&&f.push(ri(a,C,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var ug=/\r\n?/g,cg=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(ug,`
`).replace(cg,"")}function th(e,t){return t=eh(t),eh(e)===t}function Cr(){}function je(e,t,a,l,i,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||El(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&El(e,""+l);break;case"className":Mi(e,"class",l);break;case"tabIndex":Mi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,a,l);break;case"style":af(e,l,r);break;case"data":if(t!=="object"){Mi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ni(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",i.name,i,null),je(e,t,"formEncType",i.formEncType,i,null),je(e,t,"formMethod",i.formMethod,i,null),je(e,t,"formTarget",i.formTarget,i,null)):(je(e,t,"encType",i.encType,i,null),je(e,t,"method",i.method,i,null),je(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ni(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Cr);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ni(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":me("beforetoggle",e),me("toggle",e),Oi(e,"popover",l);break;case"xlinkActuate":ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ea(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ea(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ea(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ea(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=H1.get(a)||a,Oi(e,a,l))}}function Sc(e,t,a,l,i,r){switch(a){case"style":af(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?El(e,l):(typeof l=="number"||typeof l=="bigint")&&El(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ct]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Oi(e,a,l)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var f=a[r];if(f!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,r,f,a,null)}}i&&je(e,t,"srcSet",a.srcSet,a,null),l&&je(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=r=f=i=null,v=null,C=null;for(l in a)if(a.hasOwnProperty(l)){var _=a[l];if(_!=null)switch(l){case"name":i=_;break;case"type":f=_;break;case"checked":v=_;break;case"defaultChecked":C=_;break;case"value":r=_;break;case"defaultValue":m=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:je(e,t,l,_,a,null)}}Ps(e,r,m,v,C,f,i,!1),Di(e);return;case"select":me("invalid",e),l=f=r=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":l=m;default:je(e,t,i,m,a,null)}t=r,a=f,e.multiple=!!l,t!=null?Al(e,!!l,t,!1):a!=null&&Al(e,!!l,a,!0);return;case"textarea":me("invalid",e),r=i=l=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":l=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:je(e,t,f,m,a,null)}ef(e,l,i,r),Di(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:je(e,t,v,l,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<ii.length;l++)me(ii[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,C,l,a,null)}return;default:if(Uo(t)){for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!==void 0&&Sc(e,t,_,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&je(e,t,m,l,a,null))}function sg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,m=null,v=null,C=null,_=null;for(R in a){var q=a[R];if(a.hasOwnProperty(R)&&q!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=q;default:l.hasOwnProperty(R)||je(e,t,R,null,l,q)}}for(var T in l){var R=l[T];if(q=a[T],l.hasOwnProperty(T)&&(R!=null||q!=null))switch(T){case"type":r=R;break;case"name":i=R;break;case"checked":C=R;break;case"defaultChecked":_=R;break;case"value":f=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==q&&je(e,t,T,R,l,q)}}qo(e,f,m,v,C,_,r,i);return;case"select":R=f=m=T=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":R=v;default:l.hasOwnProperty(r)||je(e,t,r,null,l,v)}for(i in l)if(r=l[i],v=a[i],l.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":T=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==v&&je(e,t,i,r,l,v)}t=m,a=f,l=R,T!=null?Al(e,!!a,T,!1):!!l!=!!a&&(t!=null?Al(e,!!a,t,!0):Al(e,!!a,a?[]:"",!1));return;case"textarea":R=T=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:je(e,t,m,null,l,i)}for(f in l)if(i=l[f],r=a[f],l.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":T=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==r&&je(e,t,f,i,l,r)}Is(e,T,R);return;case"option":for(var le in a)if(T=a[le],a.hasOwnProperty(le)&&T!=null&&!l.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:je(e,t,le,null,l,T)}for(v in l)if(T=l[v],R=a[v],l.hasOwnProperty(v)&&T!==R&&(T!=null||R!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:je(e,t,v,T,l,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)T=a[ee],a.hasOwnProperty(ee)&&T!=null&&!l.hasOwnProperty(ee)&&je(e,t,ee,null,l,T);for(C in l)if(T=l[C],R=a[C],l.hasOwnProperty(C)&&T!==R&&(T!=null||R!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:je(e,t,C,T,l,R)}return;default:if(Uo(t)){for(var Ae in a)T=a[Ae],a.hasOwnProperty(Ae)&&T!==void 0&&!l.hasOwnProperty(Ae)&&Sc(e,t,Ae,void 0,l,T);for(_ in l)T=l[_],R=a[_],!l.hasOwnProperty(_)||T===R||T===void 0&&R===void 0||Sc(e,t,_,T,l,R);return}}for(var A in a)T=a[A],a.hasOwnProperty(A)&&T!=null&&!l.hasOwnProperty(A)&&je(e,t,A,null,l,T);for(q in l)T=l[q],R=a[q],!l.hasOwnProperty(q)||T===R||T==null&&R==null||je(e,t,q,T,l,R)}var jc=null,Ac=null;function zr(e){return e.nodeType===9?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wc=null;function fg(){var e=window.event;return e&&e.type==="popstate"?e===wc?!1:(wc=e,!0):(wc=null,!1)}var nh=typeof setTimeout=="function"?setTimeout:void 0,dg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,mg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(hg)}:nh;function hg(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function rh(e,t){var a=t,l=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<l&&8>l){a=l;var f=e.ownerDocument;if(a&1&&oi(f.documentElement),a&2&&oi(f.body),a&4)for(a=f.head,oi(a),f=a.firstChild;f;){var m=f.nextSibling,v=f.nodeName;f[jn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=m}}if(i===0){e.removeChild(r),pi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:l=a.charCodeAt(0)-48;else l=0;a=r}while(a);pi(t)}function Cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cc(a),Mo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pg(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[jn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function gg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ht(e.nextSibling),e===null))return null;return e}function zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function vg(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Tc=null;function oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function uh(e,t,a){switch(t=zr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function oi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mo(e)}var qt=new Map,ch=new Set;function Tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=L.d;L.d={f:yg,r:bg,D:xg,C:Sg,L:jg,m:Ag,X:wg,S:Eg,M:Cg};function yg(){var e=ha.f(),t=br();return e||t}function bg(e){var t=bl(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):ha.r(e)}var Il=typeof document>"u"?null:document;function sh(e,t,a){var l=Il;if(l&&typeof t=="string"&&t){var i=Tt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),ch.has(i)||(ch.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),tt(t,"link",e),Ve(t),l.head.appendChild(t)))}}function xg(e){ha.D(e),sh("dns-prefetch",e,null)}function Sg(e,t){ha.C(e,t),sh("preconnect",e,t)}function jg(e,t,a){ha.L(e,t,a);var l=Il;if(l&&e&&t){var i='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Tt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Tt(a.imageSizes)+'"]')):i+='[href="'+Tt(e)+'"]';var r=i;switch(t){case"style":r=en(e);break;case"script":r=tn(e)}qt.has(r)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qt.set(r,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(ui(r))||t==="script"&&l.querySelector(ci(r))||(t=l.createElement("link"),tt(t,"link",e),Ve(t),l.head.appendChild(t)))}}function Ag(e,t){ha.m(e,t);var a=Il;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Tt(l)+'"][href="'+Tt(e)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=tn(e)}if(!qt.has(r)&&(e=j({rel:"modulepreload",href:e},t),qt.set(r,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ci(r)))return}l=a.createElement("link"),tt(l,"link",e),Ve(l),a.head.appendChild(l)}}}function Eg(e,t,a){ha.S(e,t,a);var l=Il;if(l&&e){var i=xl(l).hoistableStyles,r=en(e);t=t||"default";var f=i.get(r);if(!f){var m={loading:0,preload:null};if(f=l.querySelector(ui(r)))m.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qt.get(r))&&Rc(e,a);var v=f=l.createElement("link");Ve(v),tt(v,"link",e),v._p=new Promise(function(C,_){v.onload=C,v.onerror=_}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Rr(f,t,l)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(r,f)}}}function wg(e,t){ha.X(e,t);var a=Il;if(a&&e){var l=xl(a).hoistableScripts,i=tn(e),r=l.get(i);r||(r=a.querySelector(ci(i)),r||(e=j({src:e,async:!0},t),(t=qt.get(i))&&Oc(e,t),r=a.createElement("script"),Ve(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function Cg(e,t){ha.M(e,t);var a=Il;if(a&&e){var l=xl(a).hoistableScripts,i=tn(e),r=l.get(i);r||(r=a.querySelector(ci(i)),r||(e=j({src:e,async:!0,type:"module"},t),(t=qt.get(i))&&Oc(e,t),r=a.createElement("script"),Ve(r),tt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function fh(e,t,a,l){var i=(i=te.current)?Tr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=en(a.href),a=xl(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=en(a.href);var r=xl(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(ui(e)))&&!r._p&&(f.instance=r,f.state.loading=5),qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(e,a),r||zg(i,e,a,f.state))),t&&l===null)throw Error(c(528,""));return f}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=tn(a),a=xl(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function en(e){return'href="'+Tt(e)+'"'}function ui(e){return'link[rel="stylesheet"]['+e+"]"}function dh(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function zg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),tt(t,"link",a),Ve(t),e.head.appendChild(t))}function tn(e){return'[src="'+Tt(e)+'"]'}function ci(e){return"script[async]"+e}function mh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Tt(a.href)+'"]');if(l)return t.instance=l,Ve(l),l;var i=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ve(l),tt(l,"style",i),Rr(l,a.precedence,e),t.instance=l;case"stylesheet":i=en(a.href);var r=e.querySelector(ui(i));if(r)return t.state.loading|=4,t.instance=r,Ve(r),r;l=dh(a),(i=qt.get(i))&&Rc(l,i),r=(e.ownerDocument||e).createElement("link"),Ve(r);var f=r;return f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),tt(r,"link",l),t.state.loading|=4,Rr(r,a.precedence,e),t.instance=r;case"script":return r=tn(a.src),(i=e.querySelector(ci(r)))?(t.instance=i,Ve(i),i):(l=a,(i=qt.get(r))&&(l=j({},a),Oc(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ve(i),tt(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Rr(l,a.precedence,e));return t.instance}function Rr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,f=0;f<l.length;f++){var m=l[f];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function hh(e,t,a){if(Or===null){var l=new Map,i=Or=new Map;i.set(a,l)}else i=Or,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[jn]||r[lt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var m=l.get(f);m?m.push(r):l.set(f,[r])}}return l}function ph(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Tg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var si=null;function Rg(){}function Og(e,t,a){if(si===null)throw Error(c(475));var l=si;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=en(a.href),r=e.querySelector(ui(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Mr.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,Ve(r);return}r=e.ownerDocument||e,a=dh(a),(i=qt.get(i))&&Rc(a,i),r=r.createElement("link"),Ve(r);var f=r;f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),tt(r,"link",a),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Mr.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Mg(){if(si===null)throw Error(c(475));var e=si;return e.stylesheets&&e.count===0&&Mc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Mr(){if(this.count--,this.count===0){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dr=null;function Mc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dr=new Map,t.forEach(Dg,e),Dr=null,Mr.call(e))}function Dg(e,t){if(!(t.state.loading&4)){var a=Dr.get(e);if(a)var l=a.get(null);else{a=new Map,Dr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),l=f)}l&&a.set(null,l)}i=t.instance,f=i.getAttribute("data-precedence"),r=a.get(f)||l,r===l&&a.set(null,i),a.set(f,i),this.count++,l=Mr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:Z,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function _g(e,t,a,l,i,r,f,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function vh(e,t,a,l,i,r,f,m,v,C,_,q){return e=new _g(e,t,a,f,m,v,C,q),t=1,r===!0&&(t|=24),r=bt(3,null,null,t),e.current=r,r.stateNode=e,t=du(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},gu(r),e}function yh(e){return e?(e=Dl,e):Dl}function bh(e,t,a,l,i,r){i=yh(i),l.context===null?l.context=i:l.pendingContext=i,l=Ca(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=za(e,l,t),a!==null&&(Et(a,e,t),Yn(a,e,t))}function xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Dc(e,t){xh(e,t),(e=e.alternate)&&xh(e,t)}function Sh(e){if(e.tag===13){var t=Ml(e,67108864);t!==null&&Et(t,e,67108864),Dc(e,67108864)}}var _r=!0;function Ng(e,t,a,l){var i=D.T;D.T=null;var r=L.p;try{L.p=2,_c(e,t,a,l)}finally{L.p=r,D.T=i}}function qg(e,t,a,l){var i=D.T;D.T=null;var r=L.p;try{L.p=8,_c(e,t,a,l)}finally{L.p=r,D.T=i}}function _c(e,t,a,l){if(_r){var i=Nc(l);if(i===null)xc(e,t,l,Nr,a),Ah(e,l);else if(Ug(i,e,t,a,l))l.stopPropagation();else if(Ah(e,l),t&4&&-1<$g.indexOf(e)){for(;i!==null;){var r=bl(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Ja(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var v=1<<31-vt(f);m.entanglements[1]|=v,f&=~v}Kt(r),(be&6)===0&&(vr=Lt()+500,ni(0))}}break;case 13:m=Ml(r,2),m!==null&&Et(m,r,2),br(),Dc(r,2)}if(r=Nc(l),r===null&&xc(e,t,l,Nr,a),r===i)break;i=r}i!==null&&l.stopPropagation()}else xc(e,t,l,null,a)}}function Nc(e){return e=Ho(e),qc(e)}var Nr=null;function qc(e){if(Nr=null,e=yl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function jh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(S1()){case qs:return 2;case $s:return 8;case Ci:case j1:return 32;case Us:return 268435456;default:return 32}default:return 32}}var $c=!1,Ga=null,Ya=null,ka=null,di=new Map,mi=new Map,La=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ah(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function hi(e,t,a,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},t!==null&&(t=bl(t),t!==null&&Sh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ug(e,t,a,l,i){switch(t){case"focusin":return Ga=hi(Ga,e,t,a,l,i),!0;case"dragenter":return Ya=hi(Ya,e,t,a,l,i),!0;case"mouseover":return ka=hi(ka,e,t,a,l,i),!0;case"pointerover":var r=i.pointerId;return di.set(r,hi(di.get(r)||null,e,t,a,l,i)),!0;case"gotpointercapture":return r=i.pointerId,mi.set(r,hi(mi.get(r)||null,e,t,a,l,i)),!0}return!1}function Eh(e){var t=yl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,O1(e.priority,function(){if(a.tag===13){var l=At();l=To(l);var i=Ml(a,l);i!==null&&Et(i,a,l),Dc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Nc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Bo=l,a.target.dispatchEvent(l),Bo=null}else return t=bl(a),t!==null&&Sh(t),e.blockedOn=a,!1;t.shift()}return!0}function wh(e,t,a){qr(e)&&a.delete(t)}function Bg(){$c=!1,Ga!==null&&qr(Ga)&&(Ga=null),Ya!==null&&qr(Ya)&&(Ya=null),ka!==null&&qr(ka)&&(ka=null),di.forEach(wh),mi.forEach(wh)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,$c||($c=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Bg)))}var Ur=null;function Ch(e){Ur!==e&&(Ur=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ur===e&&(Ur=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(qc(l||a)===null)continue;break}var r=bl(a);r!==null&&(e.splice(t,3),t-=3,qu(r,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function pi(e){function t(v){return $r(v,e)}Ga!==null&&$r(Ga,e),Ya!==null&&$r(Ya,e),ka!==null&&$r(ka,e),di.forEach(t),mi.forEach(t);for(var a=0;a<La.length;a++){var l=La[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],r=a[l+1],f=i[ct]||null;if(typeof r=="function")f||Ch(a);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[ct]||null)m=f.formAction;else if(qc(i)!==null)continue}else m=f.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),Ch(a)}}}function Uc(e){this._internalRoot=e}Br.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=At();bh(a,l,e,t,null,null)},Br.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bh(e.current,2,null,e,null,null),br(),t[vl]=null}};function Br(e){this._internalRoot=e}Br.prototype.unstable_scheduleHydration=function(e){if(e){var t=ks();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&Eh(e)}};var zh=o.version;if(zh!=="19.1.1")throw Error(c(527,zh,"19.1.1"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Hg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{bn=Hr.inject(Hg),gt=Hr}catch{}}return vi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,l="",i=Ld,r=Qd,f=Xd,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=vh(e,1,!1,null,null,a,l,i,r,f,m,null),e[vl]=t.current,bc(e),new Uc(t)},vi.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var l=!1,i="",r=Ld,f=Qd,m=Xd,v=null,C=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(C=a.formState)),t=vh(e,1,!0,t,a??null,l,i,r,f,m,v,C),t.context=yh(null),a=t.current,l=At(),l=To(l),i=Ca(l),i.callback=null,za(a,i,l),a=l,t.current.lanes=a,Sn(t,a),Kt(t),e[vl]=t.current,bc(e),new Br(t)},vi.version="19.1.1",vi}var Uh;function Jg(){if(Uh)return Gc.exports;Uh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Gc.exports=Kg(),Gc.exports}var Wg=Jg();const Fg=u0(Wg);var Fe=function(){return Fe=Object.assign||function(o){for(var s,c=1,d=arguments.length;c<d;c++){s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(o[p]=s[p])}return o},Fe.apply(this,arguments)};function sn(n,o,s){if(s||arguments.length===2)for(var c=0,d=o.length,p;c<d;c++)(p||!(c in o))&&(p||(p=Array.prototype.slice.call(o,0,c)),p[c]=o[c]);return n.concat(p||Array.prototype.slice.call(o))}var Re="-ms-",xi="-moz-",ye="-webkit-",c0="comm",go="rule",ys="decl",Pg="@import",s0="@keyframes",Ig="@layer",f0=Math.abs,bs=String.fromCharCode,rs=Object.assign;function ev(n,o){return We(n,0)^45?(((o<<2^We(n,0))<<2^We(n,1))<<2^We(n,2))<<2^We(n,3):0}function d0(n){return n.trim()}function ga(n,o){return(n=o.exec(n))?n[0]:n}function oe(n,o,s){return n.replace(o,s)}function Ir(n,o,s){return n.indexOf(o,s)}function We(n,o){return n.charCodeAt(o)|0}function fn(n,o,s){return n.slice(o,s)}function Jt(n){return n.length}function m0(n){return n.length}function bi(n,o){return o.push(n),n}function tv(n,o){return n.map(o).join("")}function Bh(n,o){return n.filter(function(s){return!ga(s,o)})}var vo=1,dn=1,h0=0,$t=0,He=0,pn="";function yo(n,o,s,c,d,p,y,E){return{value:n,root:o,parent:s,type:c,props:d,children:p,line:vo,column:dn,length:y,return:"",siblings:E}}function Xa(n,o){return rs(yo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function an(n){for(;n.root;)n=Xa(n.root,{children:[n]});bi(n,n.siblings)}function av(){return He}function lv(){return He=$t>0?We(pn,--$t):0,dn--,He===10&&(dn=1,vo--),He}function Gt(){return He=$t<h0?We(pn,$t++):0,dn++,He===10&&(dn=1,vo++),He}function hl(){return We(pn,$t)}function eo(){return $t}function bo(n,o){return fn(pn,n,o)}function os(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nv(n){return vo=dn=1,h0=Jt(pn=n),$t=0,[]}function iv(n){return pn="",n}function Qc(n){return d0(bo($t-1,us(n===91?n+2:n===40?n+1:n)))}function rv(n){for(;(He=hl())&&He<33;)Gt();return os(n)>2||os(He)>3?"":" "}function ov(n,o){for(;--o&&Gt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return bo(n,eo()+(o<6&&hl()==32&&Gt()==32))}function us(n){for(;Gt();)switch(He){case n:return $t;case 34:case 39:n!==34&&n!==39&&us(He);break;case 40:n===41&&us(n);break;case 92:Gt();break}return $t}function uv(n,o){for(;Gt()&&n+He!==57;)if(n+He===84&&hl()===47)break;return"/*"+bo(o,$t-1)+"*"+bs(n===47?n:Gt())}function cv(n){for(;!os(hl());)Gt();return bo(n,$t)}function sv(n){return iv(to("",null,null,null,[""],n=nv(n),0,[0],n))}function to(n,o,s,c,d,p,y,E,b){for(var g=0,j=0,M=y,U=0,B=0,G=0,V=1,Y=1,X=1,H=0,Z="",ne=d,K=p,ie=c,F=Z;Y;)switch(G=H,H=Gt()){case 40:if(G!=108&&We(F,M-1)==58){Ir(F+=oe(Qc(H),"&","&\f"),"&\f",f0(g?E[g-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:F+=Qc(H);break;case 9:case 10:case 13:case 32:F+=rv(G);break;case 92:F+=ov(eo()-1,7);continue;case 47:switch(hl()){case 42:case 47:bi(fv(uv(Gt(),eo()),o,s,b),b);break;default:F+="/"}break;case 123*V:E[g++]=Jt(F)*X;case 125*V:case 59:case 0:switch(H){case 0:case 125:Y=0;case 59+j:X==-1&&(F=oe(F,/\f/g,"")),B>0&&Jt(F)-M&&bi(B>32?Gh(F+";",c,s,M-1,b):Gh(oe(F," ","")+";",c,s,M-2,b),b);break;case 59:F+=";";default:if(bi(ie=Hh(F,o,s,g,j,d,E,Z,ne=[],K=[],M,p),p),H===123)if(j===0)to(F,o,ie,ie,ne,p,M,E,K);else switch(U===99&&We(F,3)===110?100:U){case 100:case 108:case 109:case 115:to(n,ie,ie,c&&bi(Hh(n,ie,ie,0,0,d,E,Z,d,ne=[],M,K),K),d,K,M,E,c?ne:K);break;default:to(F,ie,ie,ie,[""],K,0,E,K)}}g=j=B=0,V=X=1,Z=F="",M=y;break;case 58:M=1+Jt(F),B=G;default:if(V<1){if(H==123)--V;else if(H==125&&V++==0&&lv()==125)continue}switch(F+=bs(H),H*V){case 38:X=j>0?1:(F+="\f",-1);break;case 44:E[g++]=(Jt(F)-1)*X,X=1;break;case 64:hl()===45&&(F+=Qc(Gt())),U=hl(),j=M=Jt(Z=F+=cv(eo())),H++;break;case 45:G===45&&Jt(F)==2&&(V=0)}}return p}function Hh(n,o,s,c,d,p,y,E,b,g,j,M){for(var U=d-1,B=d===0?p:[""],G=m0(B),V=0,Y=0,X=0;V<c;++V)for(var H=0,Z=fn(n,U+1,U=f0(Y=y[V])),ne=n;H<G;++H)(ne=d0(Y>0?B[H]+" "+Z:oe(Z,/&\f/g,B[H])))&&(b[X++]=ne);return yo(n,o,s,d===0?go:E,b,g,j,M)}function fv(n,o,s,c){return yo(n,o,s,c0,bs(av()),fn(n,2,-2),0,c)}function Gh(n,o,s,c,d){return yo(n,o,s,ys,fn(n,0,c),fn(n,c+1,-1),c,d)}function p0(n,o,s){switch(ev(n,o)){case 5103:return ye+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+n+n;case 4789:return xi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+n+xi+n+Re+n+n;case 5936:switch(We(n,o+11)){case 114:return ye+n+Re+oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ye+n+Re+oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ye+n+Re+oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ye+n+Re+n+n;case 6165:return ye+n+Re+"flex-"+n+n;case 5187:return ye+n+oe(n,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Re+"flex-$1$2")+n;case 5443:return ye+n+Re+"flex-item-"+oe(n,/flex-|-self/g,"")+(ga(n,/flex-|baseline/)?"":Re+"grid-row-"+oe(n,/flex-|-self/g,""))+n;case 4675:return ye+n+Re+"flex-line-pack"+oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return ye+n+Re+oe(n,"shrink","negative")+n;case 5292:return ye+n+Re+oe(n,"basis","preferred-size")+n;case 6060:return ye+"box-"+oe(n,"-grow","")+ye+n+Re+oe(n,"grow","positive")+n;case 4554:return ye+oe(n,/([^-])(transform)/g,"$1"+ye+"$2")+n;case 6187:return oe(oe(oe(n,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),n,"")+n;case 5495:case 3959:return oe(n,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return oe(oe(n,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+n+n;case 4200:if(!ga(n,/flex-|baseline/))return Re+"grid-column-align"+fn(n,o)+n;break;case 2592:case 3360:return Re+oe(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(c,d){return o=d,ga(c.props,/grid-\w+-end/)})?~Ir(n+(s=s[o].value),"span",0)?n:Re+oe(n,"-start","")+n+Re+"grid-row-span:"+(~Ir(s,"span",0)?ga(s,/\d+/):+ga(s,/\d+/)-+ga(n,/\d+/))+";":Re+oe(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(c){return ga(c.props,/grid-\w+-start/)})?n:Re+oe(oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return oe(n,/(.+)-inline(.+)/,ye+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(n)-1-o>6)switch(We(n,o+1)){case 109:if(We(n,o+4)!==45)break;case 102:return oe(n,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+xi+(We(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~Ir(n,"stretch",0)?p0(oe(n,"stretch","fill-available"),o,s)+n:n}break;case 5152:case 5920:return oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,p,y,E,b,g){return Re+d+":"+p+g+(y?Re+d+"-span:"+(E?b:+b-+p)+g:"")+n});case 4949:if(We(n,o+6)===121)return oe(n,":",":"+ye)+n;break;case 6444:switch(We(n,We(n,14)===45?18:11)){case 120:return oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(We(n,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Re+"$2box$3")+n;case 100:return oe(n,":",":"+Re)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(n,"scroll-","scroll-snap-")+n}return n}function ro(n,o){for(var s="",c=0;c<n.length;c++)s+=o(n[c],c,n,o)||"";return s}function dv(n,o,s,c){switch(n.type){case Ig:if(n.children.length)break;case Pg:case ys:return n.return=n.return||n.value;case c0:return"";case s0:return n.return=n.value+"{"+ro(n.children,c)+"}";case go:if(!Jt(n.value=n.props.join(",")))return""}return Jt(s=ro(n.children,c))?n.return=n.value+"{"+s+"}":""}function mv(n){var o=m0(n);return function(s,c,d,p){for(var y="",E=0;E<o;E++)y+=n[E](s,c,d,p)||"";return y}}function hv(n){return function(o){o.root||(o=o.return)&&n(o)}}function pv(n,o,s,c){if(n.length>-1&&!n.return)switch(n.type){case ys:n.return=p0(n.value,n.length,s);return;case s0:return ro([Xa(n,{value:oe(n.value,"@","@"+ye)})],c);case go:if(n.length)return tv(s=n.props,function(d){switch(ga(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":an(Xa(n,{props:[oe(d,/:(read-\w+)/,":"+xi+"$1")]})),an(Xa(n,{props:[d]})),rs(n,{props:Bh(s,c)});break;case"::placeholder":an(Xa(n,{props:[oe(d,/:(plac\w+)/,":"+ye+"input-$1")]})),an(Xa(n,{props:[oe(d,/:(plac\w+)/,":"+xi+"$1")]})),an(Xa(n,{props:[oe(d,/:(plac\w+)/,Re+"input-$1")]})),an(Xa(n,{props:[d]})),rs(n,{props:Bh(s,c)});break}return""})}}var gv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},mn=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",g0="active",v0="data-styled-version",xo="6.1.19",xs=`/*!sc*/
`,oo=typeof window<"u"&&typeof document<"u",vv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),yv={},So=Object.freeze([]),hn=Object.freeze({});function y0(n,o,s){return s===void 0&&(s=hn),n.theme!==s.theme&&n.theme||o||s.theme}var b0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xv=/(^-|-$)/g;function Yh(n){return n.replace(bv,"-").replace(xv,"")}var Sv=/(a)(d)/gi,Gr=52,kh=function(n){return String.fromCharCode(n+(n>25?39:97))};function cs(n){var o,s="";for(o=Math.abs(n);o>Gr;o=o/Gr|0)s=kh(o%Gr)+s;return(kh(o%Gr)+s).replace(Sv,"$1-$2")}var Xc,x0=5381,cn=function(n,o){for(var s=o.length;s;)n=33*n^o.charCodeAt(--s);return n},S0=function(n){return cn(x0,n)};function Ss(n){return cs(S0(n)>>>0)}function jv(n){return n.displayName||n.name||"Component"}function Vc(n){return typeof n=="string"&&!0}var j0=typeof Symbol=="function"&&Symbol.for,A0=j0?Symbol.for("react.memo"):60115,Av=j0?Symbol.for("react.forward_ref"):60112,Ev={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},E0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cv=((Xc={})[Av]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[A0]=E0,Xc);function Lh(n){return("type"in(o=n)&&o.type.$$typeof)===A0?E0:"$$typeof"in n?Cv[n.$$typeof]:Ev;var o}var zv=Object.defineProperty,Tv=Object.getOwnPropertyNames,Qh=Object.getOwnPropertySymbols,Rv=Object.getOwnPropertyDescriptor,Ov=Object.getPrototypeOf,Xh=Object.prototype;function w0(n,o,s){if(typeof o!="string"){if(Xh){var c=Ov(o);c&&c!==Xh&&w0(n,c,s)}var d=Tv(o);Qh&&(d=d.concat(Qh(o)));for(var p=Lh(n),y=Lh(o),E=0;E<d.length;++E){var b=d[E];if(!(b in wv||s&&s[b]||y&&b in y||p&&b in p)){var g=Rv(o,b);try{zv(n,b,g)}catch{}}}}return n}function pl(n){return typeof n=="function"}function js(n){return typeof n=="object"&&"styledComponentId"in n}function ml(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function uo(n,o){if(n.length===0)return"";for(var s=n[0],c=1;c<n.length;c++)s+=n[c];return s}function Si(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ss(n,o,s){if(s===void 0&&(s=!1),!s&&!Si(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var c=0;c<o.length;c++)n[c]=ss(n[c],o[c]);else if(Si(o))for(var c in o)n[c]=ss(n[c],o[c]);return n}function As(n,o){Object.defineProperty(n,"toString",{value:o})}function gl(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var Mv=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var s=0,c=0;c<o;c++)s+=this.groupSizes[c];return s},n.prototype.insertRules=function(o,s){if(o>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,p=d;o>=p;)if((p<<=1)<0)throw gl(16,"".concat(o));this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(var y=d;y<p;y++)this.groupSizes[y]=0}for(var E=this.indexOfGroup(o+1),b=(y=0,s.length);y<b;y++)this.tag.insertRule(E,s[y])&&(this.groupSizes[o]++,E++)},n.prototype.clearGroup=function(o){if(o<this.length){var s=this.groupSizes[o],c=this.indexOfGroup(o),d=c+s;this.groupSizes[o]=0;for(var p=c;p<d;p++)this.tag.deleteRule(c)}},n.prototype.getGroup=function(o){var s="";if(o>=this.length||this.groupSizes[o]===0)return s;for(var c=this.groupSizes[o],d=this.indexOfGroup(o),p=d+c,y=d;y<p;y++)s+="".concat(this.tag.getRule(y)).concat(xs);return s},n})(),ao=new Map,co=new Map,lo=1,Yr=function(n){if(ao.has(n))return ao.get(n);for(;co.has(lo);)lo++;var o=lo++;return ao.set(n,o),co.set(o,n),o},Dv=function(n,o){lo=o+1,ao.set(n,o),co.set(o,n)},_v="style[".concat(mn,"][").concat(v0,'="').concat(xo,'"]'),Nv=new RegExp("^".concat(mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qv=function(n,o,s){for(var c,d=s.split(","),p=0,y=d.length;p<y;p++)(c=d[p])&&n.registerName(o,c)},$v=function(n,o){for(var s,c=((s=o.textContent)!==null&&s!==void 0?s:"").split(xs),d=[],p=0,y=c.length;p<y;p++){var E=c[p].trim();if(E){var b=E.match(Nv);if(b){var g=0|parseInt(b[1],10),j=b[2];g!==0&&(Dv(j,g),qv(n,j,b[3]),n.getTag().insertRules(g,d)),d.length=0}else d.push(E)}}},Vh=function(n){for(var o=document.querySelectorAll(_v),s=0,c=o.length;s<c;s++){var d=o[s];d&&d.getAttribute(mn)!==g0&&($v(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Uv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var C0=function(n){var o=document.head,s=n||o,c=document.createElement("style"),d=(function(E){var b=Array.from(E.querySelectorAll("style[".concat(mn,"]")));return b[b.length-1]})(s),p=d!==void 0?d.nextSibling:null;c.setAttribute(mn,g0),c.setAttribute(v0,xo);var y=Uv();return y&&c.setAttribute("nonce",y),s.insertBefore(c,p),c},Bv=(function(){function n(o){this.element=C0(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,d=0,p=c.length;d<p;d++){var y=c[d];if(y.ownerNode===s)return y}throw gl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,s){try{return this.sheet.insertRule(s,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var s=this.sheet.cssRules[o];return s&&s.cssText?s.cssText:""},n})(),Hv=(function(){function n(o){this.element=C0(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,s){if(o<=this.length&&o>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),Gv=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,s){return o<=this.length&&(this.rules.splice(o,0,s),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),Zh=oo,Yv={isServer:!oo,useCSSOMInjection:!vv},so=(function(){function n(o,s,c){o===void 0&&(o=hn),s===void 0&&(s={});var d=this;this.options=Fe(Fe({},Yv),o),this.gs=s,this.names=new Map(c),this.server=!!o.isServer,!this.server&&oo&&Zh&&(Zh=!1,Vh(this)),As(this,function(){return(function(p){for(var y=p.getTag(),E=y.length,b="",g=function(M){var U=(function(X){return co.get(X)})(M);if(U===void 0)return"continue";var B=p.names.get(U),G=y.getGroup(M);if(B===void 0||!B.size||G.length===0)return"continue";var V="".concat(mn,".g").concat(M,'[id="').concat(U,'"]'),Y="";B!==void 0&&B.forEach(function(X){X.length>0&&(Y+="".concat(X,","))}),b+="".concat(G).concat(V,'{content:"').concat(Y,'"}').concat(xs)},j=0;j<E;j++)g(j);return b})(d)})}return n.registerId=function(o){return Yr(o)},n.prototype.rehydrate=function(){!this.server&&oo&&Vh(this)},n.prototype.reconstructWithOptions=function(o,s){return s===void 0&&(s=!0),new n(Fe(Fe({},this.options),o),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(s){var c=s.useCSSOMInjection,d=s.target;return s.isServer?new Gv(d):c?new Bv(d):new Hv(d)})(this.options),new Mv(o)));var o},n.prototype.hasNameForId=function(o,s){return this.names.has(o)&&this.names.get(o).has(s)},n.prototype.registerName=function(o,s){if(Yr(o),this.names.has(o))this.names.get(o).add(s);else{var c=new Set;c.add(s),this.names.set(o,c)}},n.prototype.insertRules=function(o,s,c){this.registerName(o,s),this.getTag().insertRules(Yr(o),c)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Yr(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),kv=/&/g,Lv=/^\s*\/\/.*$/gm;function z0(n,o){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(o," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(o," ")),s.props=s.props.map(function(c){return"".concat(o," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=z0(s.children,o)),s})}function Qv(n){var o,s,c,d=hn,p=d.options,y=p===void 0?hn:p,E=d.plugins,b=E===void 0?So:E,g=function(U,B,G){return G.startsWith(s)&&G.endsWith(s)&&G.replaceAll(s,"").length>0?".".concat(o):U},j=b.slice();j.push(function(U){U.type===go&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(kv,s).replace(c,g))}),y.prefix&&j.push(pv),j.push(dv);var M=function(U,B,G,V){B===void 0&&(B=""),G===void 0&&(G=""),V===void 0&&(V="&"),o=V,s=B,c=new RegExp("\\".concat(s,"\\b"),"g");var Y=U.replace(Lv,""),X=sv(G||B?"".concat(G," ").concat(B," { ").concat(Y," }"):Y);y.namespace&&(X=z0(X,y.namespace));var H=[];return ro(X,mv(j.concat(hv(function(Z){return H.push(Z)})))),H};return M.hash=b.length?b.reduce(function(U,B){return B.name||gl(15),cn(U,B.name)},x0).toString():"",M}var Xv=new so,fs=Qv(),T0=ke.createContext({shouldForwardProp:void 0,styleSheet:Xv,stylis:fs});T0.Consumer;ke.createContext(void 0);function ds(){return O.useContext(T0)}var R0=(function(){function n(o,s){var c=this;this.inject=function(d,p){p===void 0&&(p=fs);var y=c.name+p.hash;d.hasNameForId(c.id,y)||d.insertRules(c.id,y,p(c.rules,y,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=s,As(this,function(){throw gl(12,String(c.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=fs),this.name+o.hash},n})(),Vv=function(n){return n>="A"&&n<="Z"};function Kh(n){for(var o="",s=0;s<n.length;s++){var c=n[s];if(s===1&&c==="-"&&n[0]==="-")return n;Vv(c)?o+="-"+c.toLowerCase():o+=c}return o.startsWith("ms-")?"-"+o:o}var O0=function(n){return n==null||n===!1||n===""},M0=function(n){var o,s,c=[];for(var d in n){var p=n[d];n.hasOwnProperty(d)&&!O0(p)&&(Array.isArray(p)&&p.isCss||pl(p)?c.push("".concat(Kh(d),":"),p,";"):Si(p)?c.push.apply(c,sn(sn(["".concat(d," {")],M0(p),!1),["}"],!1)):c.push("".concat(Kh(d),": ").concat((o=d,(s=p)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||o in gv||o.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function Za(n,o,s,c){if(O0(n))return[];if(js(n))return[".".concat(n.styledComponentId)];if(pl(n)){if(!pl(p=n)||p.prototype&&p.prototype.isReactComponent||!o)return[n];var d=n(o);return Za(d,o,s,c)}var p;return n instanceof R0?s?(n.inject(s,c),[n.getName(c)]):[n]:Si(n)?M0(n):Array.isArray(n)?Array.prototype.concat.apply(So,n.map(function(y){return Za(y,o,s,c)})):[n.toString()]}function D0(n){for(var o=0;o<n.length;o+=1){var s=n[o];if(pl(s)&&!js(s))return!1}return!0}var Zv=S0(xo),Kv=(function(){function n(o,s,c){this.rules=o,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&D0(o),this.componentId=s,this.baseHash=cn(Zv,s),this.baseStyle=c,so.registerId(s)}return n.prototype.generateAndInjectStyles=function(o,s,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))d=ml(d,this.staticRulesId);else{var p=uo(Za(this.rules,o,s,c)),y=cs(cn(this.baseHash,p)>>>0);if(!s.hasNameForId(this.componentId,y)){var E=c(p,".".concat(y),void 0,this.componentId);s.insertRules(this.componentId,y,E)}d=ml(d,y),this.staticRulesId=y}else{for(var b=cn(this.baseHash,c.hash),g="",j=0;j<this.rules.length;j++){var M=this.rules[j];if(typeof M=="string")g+=M;else if(M){var U=uo(Za(M,o,s,c));b=cn(b,U+j),g+=U}}if(g){var B=cs(b>>>0);s.hasNameForId(this.componentId,B)||s.insertRules(this.componentId,B,c(g,".".concat(B),void 0,this.componentId)),d=ml(d,B)}}return d},n})(),ji=ke.createContext(void 0);ji.Consumer;function _0(n){var o=ke.useContext(ji),s=O.useMemo(function(){return(function(c,d){if(!c)throw gl(14);if(pl(c)){var p=c(d);return p}if(Array.isArray(c)||typeof c!="object")throw gl(8);return d?Fe(Fe({},d),c):c})(n.theme,o)},[n.theme,o]);return n.children?ke.createElement(ji.Provider,{value:s},n.children):null}var Zc={};function Jv(n,o,s){var c=js(n),d=n,p=!Vc(n),y=o.attrs,E=y===void 0?So:y,b=o.componentId,g=b===void 0?(function(ne,K){var ie=typeof ne!="string"?"sc":Yh(ne);Zc[ie]=(Zc[ie]||0)+1;var F="".concat(ie,"-").concat(Ss(xo+ie+Zc[ie]));return K?"".concat(K,"-").concat(F):F})(o.displayName,o.parentComponentId):b,j=o.displayName,M=j===void 0?(function(ne){return Vc(ne)?"styled.".concat(ne):"Styled(".concat(jv(ne),")")})(n):j,U=o.displayName&&o.componentId?"".concat(Yh(o.displayName),"-").concat(o.componentId):o.componentId||g,B=c&&d.attrs?d.attrs.concat(E).filter(Boolean):E,G=o.shouldForwardProp;if(c&&d.shouldForwardProp){var V=d.shouldForwardProp;if(o.shouldForwardProp){var Y=o.shouldForwardProp;G=function(ne,K){return V(ne,K)&&Y(ne,K)}}else G=V}var X=new Kv(s,U,c?d.componentStyle:void 0);function H(ne,K){return(function(ie,F,Te){var Ee=ie.attrs,rt=ie.componentStyle,ut=ie.defaultProps,Le=ie.foldedComponentIds,Ft=ie.styledComponentId,Pt=ie.target,Qe=ke.useContext(ji),D=ds(),L=ie.shouldForwardProp||D.shouldForwardProp,I=y0(F,Qe,ut)||hn,se=(function(fe,te,Xe){for(var ve,at=Fe(Fe({},te),{className:void 0,theme:Xe}),Ka=0;Ka<fe.length;Ka+=1){var It=pl(ve=fe[Ka])?ve(at):ve;for(var Ct in It)at[Ct]=Ct==="className"?ml(at[Ct],It[Ct]):Ct==="style"?Fe(Fe({},at[Ct]),It[Ct]):It[Ct]}return te.className&&(at.className=ml(at.className,te.className)),at})(Ee,F,I),x=se.as||Pt,$={};for(var k in se)se[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&se.theme===I||(k==="forwardedAs"?$.as=se.forwardedAs:L&&!L(k,x)||($[k]=se[k]));var Q=(function(fe,te){var Xe=ds(),ve=fe.generateAndInjectStyles(te,Xe.styleSheet,Xe.stylis);return ve})(rt,se),P=ml(Le,Ft);return Q&&(P+=" "+Q),se.className&&(P+=" "+se.className),$[Vc(x)&&!b0.has(x)?"class":"className"]=P,Te&&($.ref=Te),O.createElement(x,$)})(Z,ne,K)}H.displayName=M;var Z=ke.forwardRef(H);return Z.attrs=B,Z.componentStyle=X,Z.displayName=M,Z.shouldForwardProp=G,Z.foldedComponentIds=c?ml(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=U,Z.target=c?d.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ne){this._foldedDefaultProps=c?(function(K){for(var ie=[],F=1;F<arguments.length;F++)ie[F-1]=arguments[F];for(var Te=0,Ee=ie;Te<Ee.length;Te++)ss(K,Ee[Te],!0);return K})({},d.defaultProps,ne):ne}}),As(Z,function(){return".".concat(Z.styledComponentId)}),p&&w0(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Jh(n,o){for(var s=[n[0]],c=0,d=o.length;c<d;c+=1)s.push(o[c],n[c+1]);return s}var Wh=function(n){return Object.assign(n,{isCss:!0})};function jo(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];if(pl(n)||Si(n))return Wh(Za(Jh(So,sn([n],o,!0))));var c=n;return o.length===0&&c.length===1&&typeof c[0]=="string"?Za(c):Wh(Za(Jh(c,o)))}function ms(n,o,s){if(s===void 0&&(s=hn),!o)throw gl(1,o);var c=function(d){for(var p=[],y=1;y<arguments.length;y++)p[y-1]=arguments[y];return n(o,s,jo.apply(void 0,sn([d],p,!1)))};return c.attrs=function(d){return ms(n,o,Fe(Fe({},s),{attrs:Array.prototype.concat(s.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return ms(n,o,Fe(Fe({},s),d))},c}var N0=function(n){return ms(Jv,n)},z=N0;b0.forEach(function(n){z[n]=N0(n)});var Wv=(function(){function n(o,s){this.rules=o,this.componentId=s,this.isStatic=D0(o),so.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,s,c,d){var p=d(uo(Za(this.rules,s,c,d)),""),y=this.componentId+o;c.insertRules(y,y,p)},n.prototype.removeStyles=function(o,s){s.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,s,c,d){o>2&&so.registerId(this.componentId+o),this.removeStyles(o,c),this.createStyles(o,s,c,d)},n})();function Fv(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var c=jo.apply(void 0,sn([n],o,!1)),d="sc-global-".concat(Ss(JSON.stringify(c))),p=new Wv(c,d),y=function(b){var g=ds(),j=ke.useContext(ji),M=ke.useRef(g.styleSheet.allocateGSInstance(d)).current;return g.styleSheet.server&&E(M,b,g.styleSheet,j,g.stylis),ke.useLayoutEffect(function(){if(!g.styleSheet.server)return E(M,b,g.styleSheet,j,g.stylis),function(){return p.removeStyles(M,g.styleSheet)}},[M,b,g.styleSheet,j,g.stylis]),null};function E(b,g,j,M,U){if(p.isStatic)p.renderStyles(b,yv,j,U);else{var B=Fe(Fe({},g),{theme:y0(g,M,y.defaultProps)});p.renderStyles(b,B,j,U)}}return ke.memo(y)}function Pv(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var c=uo(jo.apply(void 0,sn([n],o,!1))),d=Ss(c);return new R0(d,c)}const h={colors:{primary:"#26a9e0",secundary:"#001f3D",white:"#FFFFFF",lightGray:"#F9FAFB",dark:"#000f1d",mediumGray:"#9E9E9E"},fonts:{primary:'"Inter", sans-serif',secondary:'"Roboto", sans-serif'},breakpoints:{mobile:"1020px",tablet:"986px",desktop:"1200px"},transitions:{default:"0.2s ease-in-out"},shadows:{small:"0 2px 4px rgba(0,0,0,0.1)",medium:"0 4px 8px rgba(0,0,0,0.15)",large:"0 8px 16px rgba(0,0,0,0.2)"}},Iv=Fv`
  body {
    /* color: #001f3d; */
    font-family: ${({theme:n})=>n.fonts.primary};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
  }
`,e2=z.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({$isScrolled:n,theme:o})=>n?"rgba(255, 255, 255, 0.95)":"transparent"};
  box-shadow: ${({$isScrolled:n,theme:o})=>n?o.shadows.small:"none"};
  transition: all 0.1s ease-in-out;
`,t2=z.nav`
  display: flex;
  justify-content: start;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
`,a2=z.a`
  font-family: ${({theme:n})=>n.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.dark};
  text-decoration: none;
  
  span {
    color: ${({theme:n})=>n.colors.primary};
  }
`,l2=z.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    position: fixed;
    top: 70px;
    left: ${({$isOpen:n})=>n?"0":"-100%"};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${({theme:n})=>n.colors.white};
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    transition: left 0.3s ease-in-out;
    box-shadow: ${({theme:n})=>n.shadows.medium};
  }
`,ln=z.li`
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;z.a`
  color: ${({theme:n})=>n.colors.dark};
  font-size: 1rem;
  font-family: inherit;
  text-decoration: none;
  font-weight: 600;
  transition: color ${({theme:n})=>n.transitions.default};
  
  &:hover {
    color: ${({theme:n})=>n.colors.primary};
  }
  
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
    padding: 1rem;
    width: 100%;
  }
`;const n2=z.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: flex;
  }
`,i2="/AbaCorretora/assets/logo-Cfhf6tiY.png";/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fh="popstate";function r2(n={}){function o(c,d){let{pathname:p,search:y,hash:E}=c.location;return hs("",{pathname:p,search:y,hash:E},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(c,d){return typeof d=="string"?d:Ai(d)}return u2(o,s,null,n)}function Me(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function Yt(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function o2(){return Math.random().toString(36).substring(2,10)}function Ph(n,o){return{usr:n.state,key:n.key,idx:o}}function hs(n,o,s=null,c){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?gn(o):o,state:s,key:o&&o.key||c||o2()}}function Ai({pathname:n="/",search:o="",hash:s=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function gn(n){let o={};if(n){let s=n.indexOf("#");s>=0&&(o.hash=n.substring(s),n=n.substring(0,s));let c=n.indexOf("?");c>=0&&(o.search=n.substring(c),n=n.substring(0,c)),n&&(o.pathname=n)}return o}function u2(n,o,s,c={}){let{window:d=document.defaultView,v5Compat:p=!1}=c,y=d.history,E="POP",b=null,g=j();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function j(){return(y.state||{idx:null}).idx}function M(){E="POP";let Y=j(),X=Y==null?null:Y-g;g=Y,b&&b({action:E,location:V.location,delta:X})}function U(Y,X){E="PUSH";let H=hs(V.location,Y,X);g=j()+1;let Z=Ph(H,g),ne=V.createHref(H);try{y.pushState(Z,"",ne)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(ne)}p&&b&&b({action:E,location:V.location,delta:1})}function B(Y,X){E="REPLACE";let H=hs(V.location,Y,X);g=j();let Z=Ph(H,g),ne=V.createHref(H);y.replaceState(Z,"",ne),p&&b&&b({action:E,location:V.location,delta:0})}function G(Y){return c2(Y)}let V={get action(){return E},get location(){return n(d,y)},listen(Y){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Fh,M),b=Y,()=>{d.removeEventListener(Fh,M),b=null}},createHref(Y){return o(d,Y)},createURL:G,encodeLocation(Y){let X=G(Y);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:U,replace:B,go(Y){return y.go(Y)}};return V}function c2(n,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Me(s,"No window.location.(origin|href) available to create URL");let c=typeof n=="string"?n:Ai(n);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function q0(n,o,s="/"){return s2(n,o,s,!1)}function s2(n,o,s,c){let d=typeof o=="string"?gn(o):o,p=ba(d.pathname||"/",s);if(p==null)return null;let y=$0(n);f2(y);let E=null;for(let b=0;E==null&&b<y.length;++b){let g=j2(p);E=x2(y[b],g,c)}return E}function $0(n,o=[],s=[],c="",d=!1){let p=(y,E,b=d,g)=>{let j={relativePath:g===void 0?y.path||"":g,caseSensitive:y.caseSensitive===!0,childrenIndex:E,route:y};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(c)&&b)return;Me(j.relativePath.startsWith(c),`Absolute route path "${j.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(c.length)}let M=ya([c,j.relativePath]),U=s.concat(j);y.children&&y.children.length>0&&(Me(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${M}".`),$0(y.children,o,U,M,b)),!(y.path==null&&!y.index)&&o.push({path:M,score:y2(M,y.index),routesMeta:U})};return n.forEach((y,E)=>{if(y.path===""||!y.path?.includes("?"))p(y,E);else for(let b of U0(y.path))p(y,E,!0,b)}),o}function U0(n){let o=n.split("/");if(o.length===0)return[];let[s,...c]=o,d=s.endsWith("?"),p=s.replace(/\?$/,"");if(c.length===0)return d?[p,""]:[p];let y=U0(c.join("/")),E=[];return E.push(...y.map(b=>b===""?p:[p,b].join("/"))),d&&E.push(...y),E.map(b=>n.startsWith("/")&&b===""?"/":b)}function f2(n){n.sort((o,s)=>o.score!==s.score?s.score-o.score:b2(o.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var d2=/^:[\w-]+$/,m2=3,h2=2,p2=1,g2=10,v2=-2,Ih=n=>n==="*";function y2(n,o){let s=n.split("/"),c=s.length;return s.some(Ih)&&(c+=v2),o&&(c+=h2),s.filter(d=>!Ih(d)).reduce((d,p)=>d+(d2.test(p)?m2:p===""?p2:g2),c)}function b2(n,o){return n.length===o.length&&n.slice(0,-1).every((c,d)=>c===o[d])?n[n.length-1]-o[o.length-1]:0}function x2(n,o,s=!1){let{routesMeta:c}=n,d={},p="/",y=[];for(let E=0;E<c.length;++E){let b=c[E],g=E===c.length-1,j=p==="/"?o:o.slice(p.length)||"/",M=fo({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},j),U=b.route;if(!M&&g&&s&&!c[c.length-1].route.index&&(M=fo({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},j)),!M)return null;Object.assign(d,M.params),y.push({params:d,pathname:ya([p,M.pathname]),pathnameBase:C2(ya([p,M.pathnameBase])),route:U}),M.pathnameBase!=="/"&&(p=ya([p,M.pathnameBase]))}return y}function fo(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,c]=S2(n.path,n.caseSensitive,n.end),d=o.match(s);if(!d)return null;let p=d[0],y=p.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:c.reduce((g,{paramName:j,isOptional:M},U)=>{if(j==="*"){let G=E[U]||"";y=p.slice(0,p.length-G.length).replace(/(.)\/+$/,"$1")}const B=E[U];return M&&!B?g[j]=void 0:g[j]=(B||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:y,pattern:n}}function S2(n,o=!1,s=!0){Yt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let c=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,b)=>(c.push({paramName:E,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(c.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),c]}function j2(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Yt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function ba(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,c=n.charAt(s);return c&&c!=="/"?null:n.slice(s)||"/"}function A2(n,o="/"){let{pathname:s,search:c="",hash:d=""}=typeof n=="string"?gn(n):n;return{pathname:s?s.startsWith("/")?s:E2(s,o):o,search:z2(c),hash:T2(d)}}function E2(n,o){let s=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Kc(n,o,s,c){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function w2(n){return n.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Es(n){let o=w2(n);return o.map((s,c)=>c===o.length-1?s.pathname:s.pathnameBase)}function ws(n,o,s,c=!1){let d;typeof n=="string"?d=gn(n):(d={...n},Me(!d.pathname||!d.pathname.includes("?"),Kc("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Kc("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Kc("#","search","hash",d)));let p=n===""||d.pathname==="",y=p?"/":d.pathname,E;if(y==null)E=s;else{let M=o.length-1;if(!c&&y.startsWith("..")){let U=y.split("/");for(;U[0]==="..";)U.shift(),M-=1;d.pathname=U.join("/")}E=M>=0?o[M]:"/"}let b=A2(d,E),g=y&&y!=="/"&&y.endsWith("/"),j=(p||y===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(g||j)&&(b.pathname+="/"),b}var ya=n=>n.join("/").replace(/\/\/+/g,"/"),C2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),z2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,T2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function R2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var B0=["POST","PUT","PATCH","DELETE"];new Set(B0);var O2=["GET",...B0];new Set(O2);var vn=O.createContext(null);vn.displayName="DataRouter";var Ao=O.createContext(null);Ao.displayName="DataRouterState";O.createContext(!1);var H0=O.createContext({isTransitioning:!1});H0.displayName="ViewTransition";var M2=O.createContext(new Map);M2.displayName="Fetchers";var D2=O.createContext(null);D2.displayName="Await";var kt=O.createContext(null);kt.displayName="Navigation";var Ei=O.createContext(null);Ei.displayName="Location";var Wt=O.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var Cs=O.createContext(null);Cs.displayName="RouteError";function _2(n,{relative:o}={}){Me(yn(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=O.useContext(kt),{hash:d,pathname:p,search:y}=wi(n,{relative:o}),E=p;return s!=="/"&&(E=p==="/"?s:ya([s,p])),c.createHref({pathname:E,search:y,hash:d})}function yn(){return O.useContext(Ei)!=null}function xa(){return Me(yn(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ei).location}var G0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Y0(n){O.useContext(kt).static||O.useLayoutEffect(n)}function k0(){let{isDataRoute:n}=O.useContext(Wt);return n?V2():N2()}function N2(){Me(yn(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(vn),{basename:o,navigator:s}=O.useContext(kt),{matches:c}=O.useContext(Wt),{pathname:d}=xa(),p=JSON.stringify(Es(c)),y=O.useRef(!1);return Y0(()=>{y.current=!0}),O.useCallback((b,g={})=>{if(Yt(y.current,G0),!y.current)return;if(typeof b=="number"){s.go(b);return}let j=ws(b,JSON.parse(p),d,g.relative==="path");n==null&&o!=="/"&&(j.pathname=j.pathname==="/"?o:ya([o,j.pathname])),(g.replace?s.replace:s.push)(j,g.state,g)},[o,s,p,d,n])}O.createContext(null);function wi(n,{relative:o}={}){let{matches:s}=O.useContext(Wt),{pathname:c}=xa(),d=JSON.stringify(Es(s));return O.useMemo(()=>ws(n,JSON.parse(d),c,o==="path"),[n,d,c,o])}function q2(n,o){return L0(n,o)}function L0(n,o,s,c,d){Me(yn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=O.useContext(kt),{matches:y}=O.useContext(Wt),E=y[y.length-1],b=E?E.params:{},g=E?E.pathname:"/",j=E?E.pathnameBase:"/",M=E&&E.route;{let H=M&&M.path||"";Q0(g,!M||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let U=xa(),B;if(o){let H=typeof o=="string"?gn(o):o;Me(j==="/"||H.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${H.pathname}" was given in the \`location\` prop.`),B=H}else B=U;let G=B.pathname||"/",V=G;if(j!=="/"){let H=j.replace(/^\//,"").split("/");V="/"+G.replace(/^\//,"").split("/").slice(H.length).join("/")}let Y=q0(n,{pathname:V});Yt(M||Y!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Yt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=G2(Y&&Y.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:ya([j,p.encodeLocation?p.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?j:ya([j,p.encodeLocation?p.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),y,s,c,d);return o&&X?O.createElement(Ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},X):X}function $2(){let n=X2(),o=R2(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",n),y=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:p},"ErrorBoundary")," or"," ",O.createElement("code",{style:p},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},o),s?O.createElement("pre",{style:d},s):null,y)}var U2=O.createElement($2,null),B2=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){this.props.unstable_onError?this.props.unstable_onError(n,o):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?O.createElement(Wt.Provider,{value:this.props.routeContext},O.createElement(Cs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function H2({routeContext:n,match:o,children:s}){let c=O.useContext(vn);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),O.createElement(Wt.Provider,{value:n},s)}function G2(n,o=[],s=null,c=null,d=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let p=n,y=s?.errors;if(y!=null){let g=p.findIndex(j=>j.route.id&&y?.[j.route.id]!==void 0);Me(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),p=p.slice(0,Math.min(p.length,g+1))}let E=!1,b=-1;if(s)for(let g=0;g<p.length;g++){let j=p[g];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(b=g),j.route.id){let{loaderData:M,errors:U}=s,B=j.route.loader&&!M.hasOwnProperty(j.route.id)&&(!U||U[j.route.id]===void 0);if(j.route.lazy||B){E=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}return p.reduceRight((g,j,M)=>{let U,B=!1,G=null,V=null;s&&(U=y&&j.route.id?y[j.route.id]:void 0,G=j.route.errorElement||U2,E&&(b<0&&M===0?(Q0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,V=null):b===M&&(B=!0,V=j.route.hydrateFallbackElement||null)));let Y=o.concat(p.slice(0,M+1)),X=()=>{let H;return U?H=G:B?H=V:j.route.Component?H=O.createElement(j.route.Component,null):j.route.element?H=j.route.element:H=g,O.createElement(H2,{match:j,routeContext:{outlet:g,matches:Y,isDataRoute:s!=null},children:H})};return s&&(j.route.ErrorBoundary||j.route.errorElement||M===0)?O.createElement(B2,{location:s.location,revalidation:s.revalidation,component:G,error:U,children:X(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},unstable_onError:c}):X()},null)}function zs(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y2(n){let o=O.useContext(vn);return Me(o,zs(n)),o}function k2(n){let o=O.useContext(Ao);return Me(o,zs(n)),o}function L2(n){let o=O.useContext(Wt);return Me(o,zs(n)),o}function Ts(n){let o=L2(n),s=o.matches[o.matches.length-1];return Me(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function Q2(){return Ts("useRouteId")}function X2(){let n=O.useContext(Cs),o=k2("useRouteError"),s=Ts("useRouteError");return n!==void 0?n:o.errors?.[s]}function V2(){let{router:n}=Y2("useNavigate"),o=Ts("useNavigate"),s=O.useRef(!1);return Y0(()=>{s.current=!0}),O.useCallback(async(d,p={})=>{Yt(s.current,G0),s.current&&(typeof d=="number"?n.navigate(d):await n.navigate(d,{fromRouteId:o,...p}))},[n,o])}var e0={};function Q0(n,o,s){!o&&!e0[n]&&(e0[n]=!0,Yt(!1,s))}O.memo(Z2);function Z2({routes:n,future:o,state:s,unstable_onError:c}){return L0(n,void 0,s,c,o)}function K2({to:n,replace:o,state:s,relative:c}){Me(yn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=O.useContext(kt);Yt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=O.useContext(Wt),{pathname:y}=xa(),E=k0(),b=ws(n,Es(p),y,c==="path"),g=JSON.stringify(b);return O.useEffect(()=>{E(JSON.parse(g),{replace:o,state:s,relative:c})},[E,g,c,o,s]),null}function Va(n){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function J2({basename:n="/",children:o=null,location:s,navigationType:c="POP",navigator:d,static:p=!1}){Me(!yn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=n.replace(/^\/*/,"/"),E=O.useMemo(()=>({basename:y,navigator:d,static:p,future:{}}),[y,d,p]);typeof s=="string"&&(s=gn(s));let{pathname:b="/",search:g="",hash:j="",state:M=null,key:U="default"}=s,B=O.useMemo(()=>{let G=ba(b,y);return G==null?null:{location:{pathname:G,search:g,hash:j,state:M,key:U},navigationType:c}},[y,b,g,j,M,U,c]);return Yt(B!=null,`<Router basename="${y}"> is not able to match the URL "${b}${g}${j}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:O.createElement(kt.Provider,{value:E},O.createElement(Ei.Provider,{children:o,value:B}))}function W2({children:n,location:o}){return q2(ps(n),o)}function ps(n,o=[]){let s=[];return O.Children.forEach(n,(c,d)=>{if(!O.isValidElement(c))return;let p=[...o,d];if(c.type===O.Fragment){s.push.apply(s,ps(c.props.children,p));return}Me(c.type===Va,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=ps(c.props.children,p)),s.push(y)}),s}var no="get",io="application/x-www-form-urlencoded";function Eo(n){return n!=null&&typeof n.tagName=="string"}function F2(n){return Eo(n)&&n.tagName.toLowerCase()==="button"}function P2(n){return Eo(n)&&n.tagName.toLowerCase()==="form"}function I2(n){return Eo(n)&&n.tagName.toLowerCase()==="input"}function ey(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ty(n,o){return n.button===0&&(!o||o==="_self")&&!ey(n)}var kr=null;function ay(){if(kr===null)try{new FormData(document.createElement("form"),0),kr=!1}catch{kr=!0}return kr}var ly=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jc(n){return n!=null&&!ly.has(n)?(Yt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`),null):n}function ny(n,o){let s,c,d,p,y;if(P2(n)){let E=n.getAttribute("action");c=E?ba(E,o):null,s=n.getAttribute("method")||no,d=Jc(n.getAttribute("enctype"))||io,p=new FormData(n)}else if(F2(n)||I2(n)&&(n.type==="submit"||n.type==="image")){let E=n.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=n.getAttribute("formaction")||E.getAttribute("action");if(c=b?ba(b,o):null,s=n.getAttribute("formmethod")||E.getAttribute("method")||no,d=Jc(n.getAttribute("formenctype"))||Jc(E.getAttribute("enctype"))||io,p=new FormData(E,n),!ay()){let{name:g,type:j,value:M}=n;if(j==="image"){let U=g?`${g}.`:"";p.append(`${U}x`,"0"),p.append(`${U}y`,"0")}else g&&p.append(g,M)}}else{if(Eo(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=no,c=null,d=io,y=n}return p&&d==="text/plain"&&(y=p,p=void 0),{action:c,method:s.toLowerCase(),encType:d,formData:p,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rs(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function iy(n,o,s){let c=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return c.pathname==="/"?c.pathname=`_root.${s}`:o&&ba(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${s}`,c}async function ry(n,o){if(n.id in o)return o[n.id];try{let s=await import(n.module);return o[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function oy(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function uy(n,o,s){let c=await Promise.all(n.map(async d=>{let p=o.routes[d.route.id];if(p){let y=await ry(p,s);return y.links?y.links():[]}return[]}));return dy(c.flat(1).filter(oy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function t0(n,o,s,c,d,p){let y=(b,g)=>s[g]?b.route.id!==s[g].route.id:!0,E=(b,g)=>s[g].pathname!==b.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==b.params["*"];return p==="assets"?o.filter((b,g)=>y(b,g)||E(b,g)):p==="data"?o.filter((b,g)=>{let j=c.routes[b.route.id];if(!j||!j.hasLoader)return!1;if(y(b,g)||E(b,g))return!0;if(b.route.shouldRevalidate){let M=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function cy(n,o,{includeHydrateFallback:s}={}){return sy(n.map(c=>{let d=o.routes[c.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function sy(n){return[...new Set(n)]}function fy(n){let o={},s=Object.keys(n).sort();for(let c of s)o[c]=n[c];return o}function dy(n,o){let s=new Set;return new Set(o),n.reduce((c,d)=>{let p=JSON.stringify(fy(d));return s.has(p)||(s.add(p),c.push({key:p,link:d})),c},[])}function X0(){let n=O.useContext(vn);return Rs(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function my(){let n=O.useContext(Ao);return Rs(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Os=O.createContext(void 0);Os.displayName="FrameworkContext";function V0(){let n=O.useContext(Os);return Rs(n,"You must render this element inside a <HydratedRouter> element"),n}function hy(n,o){let s=O.useContext(Os),[c,d]=O.useState(!1),[p,y]=O.useState(!1),{onFocus:E,onBlur:b,onMouseEnter:g,onMouseLeave:j,onTouchStart:M}=o,U=O.useRef(null);O.useEffect(()=>{if(n==="render"&&y(!0),n==="viewport"){let V=X=>{X.forEach(H=>{y(H.isIntersecting)})},Y=new IntersectionObserver(V,{threshold:.5});return U.current&&Y.observe(U.current),()=>{Y.disconnect()}}},[n]),O.useEffect(()=>{if(c){let V=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(V)}}},[c]);let B=()=>{d(!0)},G=()=>{d(!1),y(!1)};return s?n!=="intent"?[p,U,{}]:[p,U,{onFocus:yi(E,B),onBlur:yi(b,G),onMouseEnter:yi(g,B),onMouseLeave:yi(j,G),onTouchStart:yi(M,B)}]:[!1,U,{}]}function yi(n,o){return s=>{n&&n(s),s.defaultPrevented||o(s)}}function py({page:n,...o}){let{router:s}=X0(),c=O.useMemo(()=>q0(s.routes,n,s.basename),[s.routes,n,s.basename]);return c?O.createElement(vy,{page:n,matches:c,...o}):null}function gy(n){let{manifest:o,routeModules:s}=V0(),[c,d]=O.useState([]);return O.useEffect(()=>{let p=!1;return uy(n,o,s).then(y=>{p||d(y)}),()=>{p=!0}},[n,o,s]),c}function vy({page:n,matches:o,...s}){let c=xa(),{manifest:d,routeModules:p}=V0(),{basename:y}=X0(),{loaderData:E,matches:b}=my(),g=O.useMemo(()=>t0(n,o,b,d,c,"data"),[n,o,b,d,c]),j=O.useMemo(()=>t0(n,o,b,d,c,"assets"),[n,o,b,d,c]),M=O.useMemo(()=>{if(n===c.pathname+c.search+c.hash)return[];let G=new Set,V=!1;if(o.forEach(X=>{let H=d.routes[X.route.id];!H||!H.hasLoader||(!g.some(Z=>Z.route.id===X.route.id)&&X.route.id in E&&p[X.route.id]?.shouldRevalidate||H.hasClientLoader?V=!0:G.add(X.route.id))}),G.size===0)return[];let Y=iy(n,y,"data");return V&&G.size>0&&Y.searchParams.set("_routes",o.filter(X=>G.has(X.route.id)).map(X=>X.route.id).join(",")),[Y.pathname+Y.search]},[y,E,c,d,g,o,n,p]),U=O.useMemo(()=>cy(j,d),[j,d]),B=gy(j);return O.createElement(O.Fragment,null,M.map(G=>O.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...s})),U.map(G=>O.createElement("link",{key:G,rel:"modulepreload",href:G,...s})),B.map(({key:G,link:V})=>O.createElement("link",{key:G,nonce:s.nonce,...V})))}function yy(...n){return o=>{n.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var Z0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z0&&(window.__reactRouterVersion="7.9.1")}catch{}function by({basename:n,children:o,window:s}){let c=O.useRef();c.current==null&&(c.current=r2({window:s,v5Compat:!0}));let d=c.current,[p,y]=O.useState({action:d.action,location:d.location}),E=O.useCallback(b=>{O.startTransition(()=>y(b))},[y]);return O.useLayoutEffect(()=>d.listen(E),[d,E]),O.createElement(J2,{basename:n,children:o,location:p.location,navigationType:p.action,navigator:d})}var K0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,va=O.forwardRef(function({onClick:o,discover:s="render",prefetch:c="none",relative:d,reloadDocument:p,replace:y,state:E,target:b,to:g,preventScrollReset:j,viewTransition:M,...U},B){let{basename:G}=O.useContext(kt),V=typeof g=="string"&&K0.test(g),Y,X=!1;if(typeof g=="string"&&V&&(Y=g,Z0))try{let Ee=new URL(window.location.href),rt=g.startsWith("//")?new URL(Ee.protocol+g):new URL(g),ut=ba(rt.pathname,G);rt.origin===Ee.origin&&ut!=null?g=ut+rt.search+rt.hash:X=!0}catch{Yt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=_2(g,{relative:d}),[Z,ne,K]=hy(c,U),ie=Ay(g,{replace:y,state:E,target:b,preventScrollReset:j,relative:d,viewTransition:M});function F(Ee){o&&o(Ee),Ee.defaultPrevented||ie(Ee)}let Te=O.createElement("a",{...U,...K,href:Y||H,onClick:X||p?o:F,ref:yy(B,ne),target:b,"data-discover":!V&&s==="render"?"true":void 0});return Z&&!V?O.createElement(O.Fragment,null,Te,O.createElement(py,{page:H})):Te});va.displayName="Link";var xy=O.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:c="",end:d=!1,style:p,to:y,viewTransition:E,children:b,...g},j){let M=wi(y,{relative:g.relative}),U=xa(),B=O.useContext(Ao),{navigator:G,basename:V}=O.useContext(kt),Y=B!=null&&Ty(M)&&E===!0,X=G.encodeLocation?G.encodeLocation(M).pathname:M.pathname,H=U.pathname,Z=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;s||(H=H.toLowerCase(),Z=Z?Z.toLowerCase():null,X=X.toLowerCase()),Z&&V&&(Z=ba(Z,V)||Z);const ne=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let K=H===X||!d&&H.startsWith(X)&&H.charAt(ne)==="/",ie=Z!=null&&(Z===X||!d&&Z.startsWith(X)&&Z.charAt(X.length)==="/"),F={isActive:K,isPending:ie,isTransitioning:Y},Te=K?o:void 0,Ee;typeof c=="function"?Ee=c(F):Ee=[c,K?"active":null,ie?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let rt=typeof p=="function"?p(F):p;return O.createElement(va,{...g,"aria-current":Te,className:Ee,ref:j,style:rt,to:y,viewTransition:E},typeof b=="function"?b(F):b)});xy.displayName="NavLink";var Sy=O.forwardRef(({discover:n="render",fetcherKey:o,navigate:s,reloadDocument:c,replace:d,state:p,method:y=no,action:E,onSubmit:b,relative:g,preventScrollReset:j,viewTransition:M,...U},B)=>{let G=Cy(),V=zy(E,{relative:g}),Y=y.toLowerCase()==="get"?"get":"post",X=typeof E=="string"&&K0.test(E),H=Z=>{if(b&&b(Z),Z.defaultPrevented)return;Z.preventDefault();let ne=Z.nativeEvent.submitter,K=ne?.getAttribute("formmethod")||y;G(ne||Z.currentTarget,{fetcherKey:o,method:K,navigate:s,replace:d,state:p,relative:g,preventScrollReset:j,viewTransition:M})};return O.createElement("form",{ref:B,method:Y,action:V,onSubmit:c?b:H,...U,"data-discover":!X&&n==="render"?"true":void 0})});Sy.displayName="Form";function jy(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J0(n){let o=O.useContext(vn);return Me(o,jy(n)),o}function Ay(n,{target:o,replace:s,state:c,preventScrollReset:d,relative:p,viewTransition:y}={}){let E=k0(),b=xa(),g=wi(n,{relative:p});return O.useCallback(j=>{if(ty(j,o)){j.preventDefault();let M=s!==void 0?s:Ai(b)===Ai(g);E(n,{replace:M,state:c,preventScrollReset:d,relative:p,viewTransition:y})}},[b,E,g,s,c,o,n,d,p,y])}var Ey=0,wy=()=>`__${String(++Ey)}__`;function Cy(){let{router:n}=J0("useSubmit"),{basename:o}=O.useContext(kt),s=Q2();return O.useCallback(async(c,d={})=>{let{action:p,method:y,encType:E,formData:b,body:g}=ny(c,o);if(d.navigate===!1){let j=d.fetcherKey||wy();await n.fetch(j,s,d.action||p,{preventScrollReset:d.preventScrollReset,formData:b,body:g,formMethod:d.method||y,formEncType:d.encType||E,flushSync:d.flushSync})}else await n.navigate(d.action||p,{preventScrollReset:d.preventScrollReset,formData:b,body:g,formMethod:d.method||y,formEncType:d.encType||E,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[n,o,s])}function zy(n,{relative:o}={}){let{basename:s}=O.useContext(kt),c=O.useContext(Wt);Me(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),p={...wi(n||".",{relative:o})},y=xa();if(n==null){p.search=y.search;let E=new URLSearchParams(p.search),b=E.getAll("index");if(b.some(j=>j==="")){E.delete("index"),b.filter(M=>M).forEach(M=>E.append("index",M));let j=E.toString();p.search=j?`?${j}`:""}}return(!n||n===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:ya([s,p.pathname])),Ai(p)}function Ty(n,{relative:o}={}){let s=O.useContext(H0);Me(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=J0("useViewTransitionState"),d=wi(n,{relative:o});if(!s.isTransitioning)return!1;let p=ba(s.currentLocation.pathname,c)||s.currentLocation.pathname,y=ba(s.nextLocation.pathname,c)||s.nextLocation.pathname;return fo(d.pathname,y)!=null||fo(d.pathname,p)!=null}const Ry=()=>{const[n,o]=O.useState(!1),[s,c]=O.useState(!1),d=()=>c(!1);return O.useEffect(()=>{const p=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),u.jsx(e2,{$isScrolled:n,children:u.jsxs(t2,{children:[u.jsx(a2,{href:"/AbaCorretora",children:u.jsx("img",{src:i2,alt:"Logo",width:150,height:"auto"})}),u.jsx(n2,{onClick:()=>c(!s),"aria-label":"Menu",children:"☰"}),u.jsxs(l2,{$isOpen:s,children:[u.jsx(ln,{children:u.jsx(va,{className:"navLink",to:"/AbaCorretora",onClick:d,children:"HOME"})}),u.jsx(ln,{children:u.jsx(va,{className:"navLink",to:"/seguros",onClick:d,children:"SEGUROS"})}),u.jsx(ln,{children:u.jsx(va,{className:"navLink",to:"/consorcios",onClick:d,children:"CONSÓRCIOS"})}),u.jsx(ln,{children:u.jsx(va,{className:"navLink",to:"/saude",onClick:d,children:"SAÚDE"})}),u.jsx(ln,{children:u.jsx(va,{className:"navLink",to:"/contato",onClick:d,children:"CONTATO"})}),u.jsx(ln,{children:u.jsx(va,{className:"navLink",to:"/corretoras",onClick:d})})]})]})})},Oy=z.footer`
  background-color: ${h.colors.dark};
  color: ${h.colors.white};
  padding: 4rem 0 0;
`,My=z.div`
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
`,Dy=z.div`
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
`,_y=z.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  
  p {
    margin: 0.5rem 0;
  }
`,Ny=z.img`
  width: 30%; /* Faz a imagem ocupar a largura da coluna */
  height: auto; /* Mantém a proporção da imagem */ 
  
`;var W0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a0=ke.createContext&&ke.createContext(W0),qy=["attr","size","title"];function $y(n,o){if(n==null)return{};var s=Uy(n,o),c,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(d=0;d<p.length;d++)c=p[d],!(o.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(n,c)&&(s[c]=n[c])}return s}function Uy(n,o){if(n==null)return{};var s={};for(var c in n)if(Object.prototype.hasOwnProperty.call(n,c)){if(o.indexOf(c)>=0)continue;s[c]=n[c]}return s}function mo(){return mo=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(n[c]=s[c])}return n},mo.apply(this,arguments)}function l0(n,o){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);o&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),s.push.apply(s,c)}return s}function ho(n){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?l0(Object(s),!0).forEach(function(c){By(n,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l0(Object(s)).forEach(function(c){Object.defineProperty(n,c,Object.getOwnPropertyDescriptor(s,c))})}return n}function By(n,o,s){return o=Hy(o),o in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s,n}function Hy(n){var o=Gy(n,"string");return typeof o=="symbol"?o:o+""}function Gy(n,o){if(typeof n!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var c=s.call(n,o);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function F0(n){return n&&n.map((o,s)=>ke.createElement(o.tag,ho({key:s},o.attr),F0(o.child)))}function Pe(n){return o=>ke.createElement(Yy,mo({attr:ho({},n.attr)},o),F0(n.child))}function Yy(n){var o=s=>{var{attr:c,size:d,title:p}=n,y=$y(n,qy),E=d||s.size||"1em",b;return s.className&&(b=s.className),n.className&&(b=(b?b+" ":"")+n.className),ke.createElement("svg",mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,y,{className:b,style:ho(ho({color:n.color||s.color},s.style),n.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),p&&ke.createElement("title",null,p),n.children)};return a0!==void 0?ke.createElement(a0.Consumer,null,s=>o(s)):o(W0)}function ky(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(n)}function Ly(n){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function P0(n){return Pe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function Qy(n){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(n)}function Xy(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function Vy(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(n)}function Zy(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function Ky(n){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"},child:[]}]})(n)}function Jy(n){return Pe({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function Wy(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(n)}function Fy(n){return Pe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"},child:[]}]})(n)}function Py(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(n)}function Iy(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(n)}function eb(n){return Pe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"},child:[]}]})(n)}const tb="/AbaCorretora/assets/LOGO-ABA-DiJw_GYy.png",ab=()=>u.jsxs(Oy,{children:[u.jsxs(My,{children:[u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Seguros"}),u.jsx(ze,{children:"Automóvel"}),u.jsx(ze,{children:"Bicicleta"}),u.jsx(ze,{children:"Condomínio"}),u.jsx(ze,{children:"Empresaial"}),u.jsx(ze,{children:"Equipamentos Portáteis"}),u.jsx(ze,{children:"Eventos"}),u.jsx(ze,{children:"Máquinas"}),u.jsx(ze,{children:"Residência"}),u.jsx(ze,{children:"Responsabilidade Civil"}),u.jsx(ze,{children:"Viagem "}),u.jsx(ze,{children:"Vida"})]}),u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Demais Serviços"}),u.jsx(ze,{children:"Consórcio"}),u.jsx(ze,{children:"Empréstimo"}),u.jsx(ze,{children:"Financiamento"}),u.jsx(ze,{children:"Capitalização"}),u.jsx(ze,{children:"Plano de Saúde"}),u.jsx(ze,{children:"Plano Odontológico"}),u.jsx(ze,{children:"Serviços"}),u.jsx(ze,{children:"Carro por Assinatura"}),u.jsx(ze,{children:"Celular por Assinatura"}),u.jsx(ze,{children:"PetLove"})]}),u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Empresa"}),u.jsx(ze,{children:"Home"}),u.jsx(ze,{children:"Seguros"}),u.jsx(ze,{children:"Consórcios"}),u.jsx(ze,{children:"Saúde"}),u.jsx(ze,{children:"Contato"})]}),u.jsxs(Lr,{children:[u.jsx(Qr,{children:"Nossas Redes Sociais"}),u.jsx(Ny,{src:tb,alt:"Descrição da imagem (ex: Selo de Segurança)"}),u.jsxs(Dy,{children:[u.jsx("a",{href:"#","aria-label":"Facebook",children:u.jsx(ky,{})}),u.jsx("a",{href:"#","aria-label":"Instagram",children:u.jsx(Ly,{})}),u.jsx("a",{href:"#","aria-label":"YouTube",children:u.jsx(Qy,{})})]})]})]}),u.jsxs(_y,{children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," ABA SEGUROS. Todos os direitos reservados."]}),u.jsx("p",{children:"CNPJ: 00.000.000/0000-00 | SUSEP: 00000.000000/0000-00"})]})]}),lb=z.a`
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
`,nb="5511945411551",ib=()=>{const n=`https://wa.me/${nb}`;return u.jsx(lb,{href:n,target:"_blank",rel:"noreferrer","aria-label":"Fale conosco no WhatsApp",children:u.jsx(P0,{})})},rb=z.section`
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
`;const ob=z.div`
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
`,ub=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,cb=z.div`
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
`,sb=z.div`
  flex: 0 0 32%;
  scroll-snap-align: start;

  @media (max-width: ${h.breakpoints.tablet}) {
    flex-basis: 50%;
  }

  @media (max-width: ${h.breakpoints.mobile}) {
    flex-basis: 90%;
  }
`,fb=z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
`,n0=z.button`
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
`,db=z.div`
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
`,mb=z.section`
  background: ${h.colors.white};
  padding: 7rem 0 8rem 0;
  position: relative;
  overflow: hidden;
    

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,hb=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,pb=z.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,gb=z.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    align-items: center;
  }
`,vb=z.h1`
  color: ${({theme:n})=>n.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,yb=z.p`
  color: ${h.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${h.breakpoints.tablet}) {
    max-width: 100%;
  }
`,bb=z.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: ${h.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,xb=z.div`
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
`,Sb=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,jb=z.div`
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
`,Ab=z.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,Eb=z.ol`
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
`,Xr=z.li`
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
`,wb=z.section`
  background: ${h.colors.secundary};
  color: ${h.colors.white};
  padding: 2rem 0;
`,Cb=z.div`
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
`,Vr=z.div`
  strong {
    font-size: 1.5rem;
    display: block;
  }
  span {
    opacity: 0.9;
    font-size: 0.95rem;
  }
`,zb=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,Tb=z.div`
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
`,Rb=z.div`
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
`,Ob=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Mb=z.div`
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
`,i0=z.div`
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
  font-family: ${({theme:n})=>n.fonts.primary};
  color: ${({theme:n})=>n.colors.dark};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 0 15px;
  }
`;const ht=z.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: .6rem;
  text-align: center;
  color: #001f3D;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,pt=z.p`
  font-size: 1.25rem;
  color: ${({theme:n})=>n.colors.mediumGray};
  text-align: center;
  max-width: 800px;
  margin: 0px auto 3rem;
  color: ${({theme:n,$inverted:o})=>o?"rgba(255, 255, 255, 0.8)":n.colors.mediumGray};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,Db=z.section`
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
`,_b=z.div`
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
`,qb=z.div`
  max-height: ${({isOpen:n})=>n?"500px":"0"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: ${({isOpen:n})=>n?"0 0 1.5rem":"0"};
  opacity: ${({isOpen:n})=>n?"1":"0"};
  line-height: 1.6;
  color: ${h.colors.mediumGray};
`;function $b(n){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function Ub(n){return Pe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}const Bb=()=>{const[n,o]=O.useState(null),s=[{question:"Como faço para contratar um seguro?",answer:"Você pode contratar diretamente pelo nosso site ou através do WhatsApp. O processo é rápido e simples."},{question:"Quanto tempo leva para aprovar uma apólice?",answer:"O prazo legal para aprovação de uma apolice é de 15 dias, conforme regulamentação da SUSEP. No entanto, algumas seguradoras podem ter um processo mais rápido."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Não tem taxa administrativa em caso de cancelamento."},{question:"Como faço para acionar meu seguro?",answer:u.jsxs(u.Fragment,{children:["Você pode entrar em contato direto com a companhia através da nossa"," ",u.jsx(va,{className:"navLink",to:"/corretoras",children:"página de contatos"})," ","ou através do nosso ou através do nosso "," ",u.jsx("a",{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",className:"navLink",children:"canal de atendimento ao segurado via WhatsApp"})," ","e nossa equipe irá guia-lo em todo o processo."]})},{question:"Quais documentos preciso para contratar?",answer:"Depende do tipo de seguro. Para seguros de automóvel, por exemplo, precisamos da CNH e documento do veículo. Nossa equipe informará todos os documentos necessários durante a contratação."}],c=d=>{o(n===d?null:d)};return u.jsxs(Db,{id:"faq",children:[u.jsxs(ht,{children:["Perguntas ",u.jsx("span",{children:"Frequentes"})]}),u.jsx(pt,{children:"Tire suas dúvidas sobre nossos produtos e serviços"}),u.jsx("div",{className:"faq-list",children:s.map((d,p)=>u.jsxs(_b,{isOpen:n===p,children:[u.jsxs(Nb,{onClick:()=>c(p),children:[d.question,n===p?u.jsx($b,{}):u.jsx(Ub,{})]}),u.jsx(qb,{isOpen:n===p,children:d.answer})]},p))})]})},Ms=z.section`
  padding: 5rem 0;
  background-color: ${h.colors.lightGray};
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Hb=Pv`
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
  animation: ${Hb} 20s linear infinite;

  // Pause on hover (desktop)
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation-play-state: paused;
    }
  }
`,Ns=z.div`
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
`,po="/AbaCorretora/assets/Porto-30iDzEz_.webp",gs="/AbaCorretora/assets/suhai-BGSD2-ff.webp",I0="/AbaCorretora/assets/bradesco-seguros-CU0YlWGC.webp",e1="/AbaCorretora/assets/akad-WygRT6HJ.webp",t1="/AbaCorretora/assets/allianz-AD1QpejW.webp",a1="/AbaCorretora/assets/azul-seguros-Dkd7YuIr.webp",Gb="/AbaCorretora/assets/hdi-BSlu-vdy.webp",l1="/AbaCorretora/assets/itau-CA2YPp_k.webp",Yb="/AbaCorretora/assets/liberty-CYdUqwAU.webp",n1="/AbaCorretora/assets/mapfre-BfLKiNQi.webp",kb="/AbaCorretora/assets/mitsui-DPVuNnp1.webp",i1="/AbaCorretora/assets/pier-C6X-gZNf.webp",r1="/AbaCorretora/assets/tokio-PWOAQajT.webp",o1="/AbaCorretora/assets/zurich-Bl3pizn0.webp",u1="/AbaCorretora/assets/metlife-CAXA8Mmt.webp",c1="/AbaCorretora/assets/unimed-K0Q_FeZr.webp",s1="/AbaCorretora/assets/sulamerica-bAr1DSkW.webp",f1="/AbaCorretora/assets/portosaude-D-kX7kVD.webp",d1="/AbaCorretora/assets/amil-Ds0I0K89.webp",m1="/AbaCorretora/assets/bradesco-saude-CTYd8tOi.webp",h1="/AbaCorretora/assets/hapvida-fH7cADKa.webp",p1="/AbaCorretora/assets/sao-cristovao-DIepHmhN.webp",Lb="/AbaCorretora/assets/sao-miguel-saude-C4GY8ihI.webp",g1="/AbaCorretora/assets/alice-BgrSNUpT.webp",Qb="/AbaCorretora/assets/allcare-BA9YMYeD.webp",v1="/AbaCorretora/assets/medsenior-DBUjLZq7.webp",y1="/AbaCorretora/assets/preventsenior-BTfljb9F.webp",Xb="/AbaCorretora/assets/omint-B64DAi7n.webp",Vb=()=>{const n=[{name:"Porto Seguro",logo:po},{name:"Unimed",logo:c1},{name:"Suhai",logo:gs},{name:"Metlife",logo:u1},{name:"Bradesco",logo:I0},{name:"Sul America",logo:s1},{name:"Akad",logo:e1},{name:"Porto Saude",logo:f1},{name:"Allianz",logo:t1},{name:"Amil",logo:d1},{name:"Porto Seguro",logo:po},{name:"Bradesco Saude",logo:m1},{name:"Azul",logo:a1},{name:"Hapvida",logo:h1},{name:"Itau",logo:l1},{name:"Sao Cristovao",logo:p1},{name:"Mapfre",logo:n1},{name:"Alice",logo:g1},{name:"Pier",logo:i1},{name:"Prevent Senior",logo:y1},{name:"Tokio",logo:r1},{name:"Medsenior",logo:v1},{name:"Zurich",logo:o1}],o=[...n,...n];return u.jsx(Ms,{children:u.jsx(Ds,{children:u.jsx(_s,{children:o.map((s,c)=>u.jsx(Ns,{children:u.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},Zb=()=>{const n=[{name:"Porto Seguro",logo:po},{name:"Suhai",logo:gs},{name:"Bradesco",logo:I0},{name:"Akad",logo:e1},{name:"Allianz",logo:t1},{name:"Porto Seguro",logo:po},{name:"Suhai",logo:gs},{name:"Azul",logo:a1},{name:"HDI",logo:Gb},{name:"Itau",logo:l1},{name:"Liberty",logo:Yb},{name:"Mapfre",logo:n1},{name:"Mitsui",logo:kb},{name:"Pier",logo:i1},{name:"Tokio",logo:r1},{name:"Zurich",logo:o1}],o=[...n,...n];return u.jsx(Ms,{children:u.jsx(Ds,{children:u.jsx(_s,{children:o.map((s,c)=>u.jsx(Ns,{children:u.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},Kb=()=>{const n=[{name:"Metlife",logo:u1},{name:"Unimed",logo:c1},{name:"Sul America",logo:s1},{name:"Porto Saude",logo:f1},{name:"Amil",logo:d1},{name:"Bradesco Saude",logo:m1},{name:"Hapvida",logo:h1},{name:"Sao Cristovao",logo:p1},{name:"Sao Miguel",logo:Lb},{name:"Alice",logo:g1},{name:"Allcare",logo:Qb},{name:"Medsenior",logo:v1},{name:"Prevent Senior",logo:y1},{name:"Omint",logo:Xb}],o=[...n,...n];return u.jsx(Ms,{children:u.jsx(Ds,{children:u.jsx(_s,{children:o.map((s,c)=>u.jsx(Ns,{children:u.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},c))})})})},Jb=z.section`
  background-color: ${h.colors.dark};
  padding: 5rem 0;
  color: ${h.colors.white};
  
  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,Wb=z.div`
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
`,Fb=z.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`,Pb=z.div`
  background: ${h.colors.lightGray};
  border-radius: 12px;
  padding: 2.5rem;
  position: relative;
  color: ${h.colors.dark};
  
  .quote {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    font-weight: bold;
    color: #26a9e0;
  }
  
  .testimonial {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 1rem 0 2rem;
    position: relative;
    z-index: 1;
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
`,Ib=z.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,ex="/AbaCorretora/assets/jucelino-Bp9UFJA2.png",tx=()=>u.jsx(Jb,{id:"testimonials",children:u.jsxs(Wb,{children:[u.jsxs("div",{children:[u.jsx(Ib,{children:"O que nossos clientes dizem"}),u.jsx(Fb,{children:"Mais de 400 clientes confiam em nossos serviços de proteção. Sua satisfação é nossa maior recompensa."})]}),u.jsxs(Pb,{children:[u.jsx("div",{className:"quote",children:'"'}),u.jsx("p",{className:"testimonial",children:"Aba Corretora, cuida da frota de veículos da minha Empresa com muita atenção e cuidado, toda equipe é muito atenciosa e o atendimento rápido e eficiênte, eu super recomendo."}),u.jsxs("div",{className:"author",children:[u.jsx("img",{src:ex,alt:"Cliente satisfeito"}),u.jsxs("div",{children:[u.jsx("h4",{children:"Jucelino Mendes"}),u.jsx("span",{children:"Cliente há 2 anos"})]})]})]})]})}),ax="/AbaCorretora/assets/img-home-CAVUu0KH.webp",lx="/AbaCorretora/assets/automovel-v7wycPm7.webp",nx="/AbaCorretora/assets/residencial-BkyGMxCT.webp",ix="/AbaCorretora/assets/saude-D9vBannL.webp",rx="/AbaCorretora/assets/financiamento-egU71Zvi.webp",ox="/AbaCorretora/assets/viagem-GBNKwrvT.webp",ux="/AbaCorretora/assets/pet-Bbrdhl-x.webp",cx=()=>{const n=[{icon:lx,title:"Seguros",description:"Seguros que protegem seus patrimônios e vida: automóvel, equipamentos, empresa, residência, viagem, vida e muito mais."},{icon:nx,title:"Consórcio",description:"O consórcio é o caminho ideal para quem busca comprar um bem com parcelas que cabem no bolso e sem pagar juros."},{icon:ix,title:"Plano de Saúde",description:"Encontre o plano de saúde (individual, familiar ou empresarial) com a cobertura ideal para suas necessidades e seu orçamento."},{icon:rx,title:"Financiamento",description:"O financiamento ideal para suas conquistas. Taxas competitivas e planos flexíveis para você tirar seus projetos do papel."},{icon:ox,title:"Empréstimo",description:"O empréstimo que você precisa está aqui. Dinheiro na mão para seus objetivos e sonhos."},{icon:ux,title:"Petlove Saúde",description:"Planos de saúde para seu animal de estimação. Cuide bem do seu Pet."}];return u.jsxs(u.Fragment,{children:[u.jsxs(mb,{children:[u.jsx(hb,{children:u.jsxs(pb,{children:[u.jsxs(gb,{children:[u.jsx(vb,{children:"Tranquilidade para sua família, segurança para sua empresa."}),u.jsx(yb,{children:"Consultoria especializada em seguros, convênios e consórcios. As melhores soluções do mercado para você e sua empresa."}),u.jsx(Fc,{as:"a",href:"https://wa.me/5511945411551",children:"Contrate Agora"})]}),u.jsx(bb,{src:ax,alt:"imagem hero"})]})}),u.jsx(xb,{})]}),u.jsxs(rb,{id:"products",children:[u.jsx(ht,{children:"Nossos Planos"}),u.jsx(pt,{children:"Opções que cabem no seu orçamento"}),(()=>{const o=O.useRef(null),s=d=>{if(!o.current)return;const p=o.current.parentElement,y=o.current.querySelector(":scope > *"),E=y?y.getBoundingClientRect().width+16:p.clientWidth,b=d==="next"?E:-E;o.current.scrollBy({left:b,behavior:"smooth"})},c=d=>{d.key==="ArrowRight"&&s("next"),d.key==="ArrowLeft"&&s("prev")};return u.jsxs(u.Fragment,{children:[u.jsx(ub,{role:"region","aria-label":"Carrossel de produtos",children:u.jsx(cb,{ref:o,tabIndex:0,onKeyDown:c,children:n.map((d,p)=>u.jsx(sb,{"aria-roledescription":"slide",children:u.jsxs(ob,{children:[u.jsx(db,{children:u.jsx("img",{src:d.icon,alt:d.title})}),u.jsx("h3",{children:d.title}),u.jsx("p",{children:d.description}),u.jsxs("div",{className:"saiba-mais-wrapper",children:[u.jsx("a",{href:"https://wa.me/5511945411551",children:"Saiba mais "})," "]})]})},p))})}),u.jsxs(fb,{children:[u.jsx(n0,{"aria-label":"Anterior",onClick:()=>s("prev"),children:"◀"}),u.jsx(n0,{"aria-label":"Próximo",onClick:()=>s("next"),children:"▶"})]})]})})()]}),u.jsxs(Sb,{children:[u.jsx(ht,{children:"Por que escolher a ABA Corretora?"}),u.jsx(pt,{children:"Atendimento consultivo, múltiplas seguradoras parceiras e soluções sob medida para você e sua empresa."}),u.jsxs(jb,{children:[u.jsx(Wc,{children:u.jsxs("div",{children:[u.jsx("h4",{children:"Assessoria Completa"}),u.jsx("p",{children:"Do orçamento à emissão da apólice e suporte em sinistros."})]})}),u.jsx(Wc,{children:u.jsxs("div",{children:[u.jsx("h4",{children:"Economia e Comparação"}),u.jsx("p",{children:"Cotamos nas principais seguradoras para o melhor custo-benefício."})]})}),u.jsx(Wc,{children:u.jsxs("div",{children:[u.jsx("h4",{children:"Atendimento Humanizado"}),u.jsx("p",{children:"Equipe próxima, rápida e disponível nos principais canais."})]})})]})]}),u.jsxs(Ab,{children:[u.jsx(ht,{children:"Como funciona"}),u.jsx(pt,{children:"4 passos simples para contratar seu seguro com tranquilidade."}),u.jsxs(Eb,{children:[u.jsxs(Xr,{children:[u.jsx("h4",{children:"1. Entendimento"}),u.jsx("p",{children:"Coletamos suas necessidades e perfil para indicar coberturas ideais."})]}),u.jsxs(Xr,{children:[u.jsx("h4",{children:"2. Cotações"}),u.jsx("p",{children:"Comparamos propostas entre seguradoras parceiras."})]}),u.jsxs(Xr,{children:[u.jsx("h4",{children:"3. Personalização"}),u.jsx("p",{children:"Ajustamos franquias e coberturas conforme seu orçamento."})]}),u.jsxs(Xr,{children:[u.jsx("h4",{children:"4. Contratação"}),u.jsx("p",{children:"Documentação rápida e acompanhamento pós-venda."})]})]})]}),u.jsx(wb,{children:u.jsxs(Cb,{children:[u.jsxs(Vr,{children:[u.jsx("strong",{children:"8+"}),u.jsx("span",{children:"Anos de experiência"})]}),u.jsxs(Vr,{children:[u.jsx("strong",{children:"600+"}),u.jsx("span",{children:"Clientes atendidos"})]}),u.jsxs(Vr,{children:[u.jsx("strong",{children:"15+"}),u.jsx("span",{children:"Seguradoras parceiras"})]}),u.jsxs(Vr,{children:[u.jsx("strong",{children:"24h"}),u.jsx("span",{children:"Suporte em sinistros"})]})]})}),u.jsxs(Ob,{children:[u.jsx(ht,{children:"Mais soluções para você"}),u.jsx(pt,{children:"Além dos seguros, conte com nossas soluções em planos de saúde e consórcios para ampliar suas possibilidades."}),u.jsxs(Mb,{children:[u.jsxs(i0,{children:[u.jsx("h3",{children:"Planos de Saúde"}),u.jsx("p",{children:"Cuidar da sua saúde e da sua família é prioridade. Oferecemos planos de saúde individuais, familiares e empresariais, com ampla rede de atendimento e condições acessíveis."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Atendimento nacional com hospitais, clínicas e laboratórios de referência."}),u.jsx("li",{children:"Consultas e exames com agendamento facilitado."}),u.jsx("li",{children:"Planos com ou sem coparticipação"}),u.jsx("li",{children:"Isenção de carência mediante análise"})]})]}),u.jsxs(i0,{children:[u.jsx("h3",{children:"Consórcios"}),u.jsx("p",{children:"Planeje suas conquistas com segurança e parcelas que cabem no seu bolso."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consórcio de automóveis"}),u.jsx("li",{children:"Consórcio imobiliário"}),u.jsx("li",{children:"Administração confiável e suporte em todas as etapas"})]})]})]})]}),u.jsx(zb,{children:u.jsxs(Tb,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Fale com um especialista"}),u.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),u.jsxs(Rb,{children:[u.jsx(Fc,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"}),u.jsx(Fc,{as:"a",href:"#faq",style:{backgroundColor:"#fff",color:"#001f3D"},children:"Tirar dúvidas"})]})]})}),u.jsx(Vb,{}),u.jsx(tx,{}),u.jsx(Bb,{})]})},sx=z.section`
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
`,fx=z.div`
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
`,nn=z.article`
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
`,rn=z.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  background-color: #e0e0e0;
`,on=z.div`
  background: ${h.colors.white};
  border-left: 4px solid ${h.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${h.colors.mediumGray};
  margin-top: 1rem;
`,dx=z.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,mx=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,hx=z.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,px=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,gx=z.h1`
  color: ${({theme:n})=>n.colors.secundary};
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
`;const vx=z.img`
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
`,yx=z.div`
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
`,un=z.button`
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
`,bx=z.section`
  background: ${h.colors.lightGray};
  padding: 4rem 0;
`,xx=z.ol`
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
`,Sx=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,jx=z.div`
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
`,Ax=z.div`
  display: flex;
  flex-shrink: 0;
  
`,Ex=z.button`
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
`,wx=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Cx=z.div`
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
`,zx=z.div`
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
`;const Tx=z.section`
  background: ${h.colors.white};
  padding: 4rem 0;
`,Rx=z.div`
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
`;function Ox(n){return Pe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"},child:[]}]})(n)}function Mx(n){return Pe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"},child:[]},{tag:"circle",attr:{cx:"9",cy:"13",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"13",r:"1"},child:[]},{tag:"path",attr:{d:"M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"},child:[]}]})(n)}const Dx="/AbaCorretora/assets/img-seguro-DlWdeZ7-.webp",_x="/AbaCorretora/assets/seguro-auto-D6qreSmg.webp",Nx="/AbaCorretora/assets/seguro-residencial-Btqe_yzn.webp",qx="/AbaCorretora/assets/seguro-equipamentos-CPBCTzMW.webp",$x="/AbaCorretora/assets/seguro-bike-CuLlbGiL.webp",Ux="/AbaCorretora/assets/seguro-vida-DtiI4z54.webp",Bx="/AbaCorretora/assets/seguro-viagem-CuWjTEg6.webp",Hx=()=>{const n=[{icon:u.jsx(Py,{}),title:"Proteção Completa",description:"Coberturas abrangentes para todas as situações que você possa imaginar."},{icon:u.jsx(eb,{}),title:"Preços Acessíveis",description:"Planos que cabem no seu bolso sem abrir mão da qualidade."},{icon:u.jsx(Ox,{}),title:"Rápida Indenização",description:"Processos ágeis para que você receba o que é seu o mais rápido possível."},{icon:u.jsx(Mx,{}),title:"Suporte 24/7",description:"Atendimento humanizado disponível a qualquer hora, todos os dias."}],o=[{question:"Como funciona a franquia do seguro?",answer:"A franquia é a participação do segurado nos prejuízos em caso de sinistro. Se o custo do reparo for menor que a franquia, o segurado arca com o valor. Se for maior, a seguradora cobre o excedente."},{question:"O que é um sinistro e como devo proceder?",answer:"Sinistro é qualquer evento previsto na apólice que cause dano ou prejuízo. Ao ocorrer, você deve entrar em contato com a seguradora o mais rápido possível para receber as orientações de como acionar sua cobertura."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Sim, a maioria dos seguros pode ser cancelada a qualquer momento. A seguradora fará um cálculo para devolver parte do valor pago, proporcional ao tempo que ainda resta de cobertura."},{question:"Qual a diferença entre seguro e assistência 24h?",answer:"O seguro cobre os prejuízos financeiros de um sinistro (roubo, colisão, etc.), enquanto a assistência 24h oferece serviços emergenciais como guincho, chaveiro e eletricista, garantindo suporte no dia a dia."}];return u.jsxs(u.Fragment,{children:[u.jsxs(dx,{children:[u.jsx(mx,{children:u.jsxs(hx,{children:[u.jsx(px,{children:u.jsx(gx,{children:"Proteção completa para manter você e sua família seguros."})}),u.jsx(vx,{src:Dx,alt:"imagem hero"})]})}),u.jsx(yx,{})]}),u.jsx(sx,{children:u.jsxs(Pc,{children:[u.jsx(ht,{children:"Nossos Seguros"}),u.jsx(pt,{children:"Proteção para todas as fases da sua vida. Encontre a solução ideal para veículos, residência, viagens, vida, equipamentos e muito mais."}),u.jsxs(fx,{children:[u.jsxs(nn,{children:[u.jsx(rn,{src:_x,alt:"Ícone representando seguro de automóvel"}),u.jsx("h3",{children:"Seguro Automóvel"}),u.jsx("p",{children:"Proteção contra colisão, roubo, furto, eventos naturais e terceiros."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Guincho 24h, carro reserva, taxi, hospedagem e etc"}),u.jsx("li",{children:"Cobertura para vidros, faróis, retrovisores "}),u.jsx("li",{children:"Assistência completa a terceiros"})]}),u.jsx(on,{children:"Indicado para quem busca tranquilidade no dia a dia e proteção patrimonial."}),u.jsx(un,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(nn,{children:[u.jsx(rn,{src:Nx,alt:"Ícone representando seguro residencial"}),u.jsx("h3",{children:"Seguro Residencial"}),u.jsx("p",{children:"Coberturas essenciais para sua casa: incêndio, vendaval, roubo e danos elétricos."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Assistência 24h (chaveiro, encanador, eletricista e etc)"}),u.jsx("li",{children:"Responsabilidade civil familiar"}),u.jsx("li",{children:"Proteção para eletroeletrônicos"})]}),u.jsx(on,{children:"Excelente custo-benefício para proteger seu patrimônio e rotina."}),u.jsx(un,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(nn,{children:[u.jsx(rn,{src:Bx,alt:"Ícone representando seguro de viagem"}),u.jsx("h3",{children:"Seguro Viagem"}),u.jsx("p",{children:"Viaje pelo mundo com a certeza de que imprevistos médicos e logísticos não vão estragar sua experiência."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Despesas Médicas e Hospitalares"}),u.jsx("li",{children:"Cancelamento de viagem e extravio de bagagem"}),u.jsx("li",{children:"Assistência internacional 24h "})]}),u.jsx(on,{children:"Essencial para viagens internacionais e para garantir sua paz de espírito."}),u.jsx(un,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(nn,{children:[u.jsx(rn,{src:Ux,alt:"Ícone representando seguro de vida"}),u.jsx("h3",{children:"Seguro de Vida"}),u.jsx("p",{children:"Garanta a segurança financeira de quem você ama em momentos delicados, protegendo o futuro da sua família."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Cobertura em caso de falecimento"}),u.jsx("li",{children:"Indenização por invalidez (total ou parcial)"}),u.jsx("li",{children:"Assistência para doenças graves e acidentes"})]}),u.jsx(on,{children:"Essencial para proteger financeiramente sua família e entes queridos."}),u.jsx(un,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(nn,{children:[u.jsx(rn,{src:qx,alt:"Ícone representando seguro de equipamentos"}),u.jsx("h3",{children:"Equipamentos Portáteis"}),u.jsx("p",{children:"Proteja seus eletrônicos como notebook, smartphone e câmera contra danos, roubo e furto."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Proteção contra roubo e furto"}),u.jsx("li",{children:"Cobertura para danos físicos acidentais (quedas)"}),u.jsx("li",{children:"Danos elétricos e por líquidos"})]}),u.jsx(on,{children:"Perfeito para profissionais e estudantes que dependem de seus equipamentos."}),u.jsx(un,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]}),u.jsxs(nn,{children:[u.jsx(rn,{src:$x,alt:"Ícone representando seguro de bicicleta"}),u.jsx("h3",{children:"Seguro de Bicicleta"}),u.jsx("p",{children:"Pedale com tranquilidade sabendo que sua bike está protegida contra roubo, furto e acidentes."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Cobertura contra roubo e furto qualificado"}),u.jsx("li",{children:"Danos acidentais e quebra"}),u.jsx("li",{children:"Assistência e transporte em caso de acidente"})]}),u.jsx(on,{children:"Ideal para ciclistas urbanos e atletas que querem garantir a segurança do seu investimento."}),u.jsx(un,{as:"a",href:"https://wa.me/5511945411551",children:"Planos a partir de R$ 30,00"})]})]})]})}),u.jsx(wx,{children:u.jsxs(Pc,{children:[u.jsx(ht,{children:"Nossos Diferenciais"}),u.jsx(pt,{children:"Oferecemos as melhores soluções em proteção para você e sua família."}),u.jsx(Cx,{children:n.map((s,c)=>u.jsxs(zx,{children:[u.jsx("h3",{children:s.title}),u.jsx("p",{children:s.description})]},c))})]})}),u.jsxs(bx,{children:[u.jsx(ht,{children:"Como Contratar?"}),u.jsx(pt,{children:"Contratar seu seguro é simples, rápido e totalmente digital."}),u.jsxs(xx,{children:[u.jsxs(Zr,{children:[u.jsx("h4",{children:"Simulação Online"}),u.jsx("p",{children:"Escolha o seguro desejado e preencha algumas informações para receber sua cotação."})]}),u.jsxs(Zr,{children:[u.jsx("h4",{children:"Análise de Perfil"}),u.jsx("p",{children:"Nossos especialistas analisam seu perfil para encontrar a melhor cobertura pelo menor preço."})]}),u.jsxs(Zr,{children:[u.jsx("h4",{children:"Emissão da Apólice"}),u.jsx("p",{children:"Após a aprovação, sua apólice é emitida e enviada digitalmente para você."})]}),u.jsxs(Zr,{children:[u.jsx("h4",{children:"Tudo Pronto!"}),u.jsx("p",{children:"Você e seu patrimônio estão protegidos. Conte com nosso suporte sempre que precisar."})]})]})]}),u.jsx(Tx,{children:u.jsxs(Pc,{children:[u.jsx(ht,{children:"Perguntas Frequentes"}),u.jsx(pt,{children:"Ainda tem dúvidas? A gente ajuda você a esclarecer."}),o.map((s,c)=>u.jsxs(Rx,{children:[u.jsx("h4",{children:s.question}),u.jsx("p",{children:s.answer})]},c))]})}),u.jsx(Sx,{children:u.jsxs(jx,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Fale com um especialista"}),u.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),u.jsx(Ax,{children:u.jsx(Ex,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),u.jsx(Zb,{})]})},Gx=z.section`
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
`,Yx=z.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${h.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,kx=z.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background-color: ${h.colors.lightGray};
`,Lx=z.article`
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
`,Qx=z.button`
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
`,Xx=z.section`
  padding: 4rem 0;
  background: ${h.colors.lightGray};
`,Vx=z.div`
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
`,Zx=z.section`
  padding: 4rem 0;
  background: ${h.colors.white};
`,Kx=z.div`
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
`,Jx=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,Wx=z.div`
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
`,Fx=z.div`
  display: flex;
  flex-shrink: 0;
`,Px=z.button`
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
`,Ix=z.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,e3=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,t3=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
  text-align: center;
`,a3=z.div``,l3=z.h1`
  color: ${({theme:n})=>n.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  @media (max-width: ${h.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,n3=z.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
`,i3=z.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${h.colors.white} 0%,
    ${h.colors.white} 40%,
    ${h.colors.lightGray} 41%,
    ${h.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
`,r3="/AbaCorretora/assets/img-consorcio-DvFABkr6.webp",o3="/AbaCorretora/assets/consorcio-imovel-BsMy8Emp.webp",u3="/AbaCorretora/assets/consorcio-automovel-DuhiKWI6.webp",c3="/AbaCorretora/assets/consorcio-servicos-IYxMUqUU.webp",s3=()=>{const n=[{img:o3,title:"Consórcio Imobiliário",description:"A forma mais inteligente de comprar, construir ou reformar seu imóvel sem juros."},{img:u3,title:"Consórcio de Veículos",description:"Planeje a compra do seu carro, moto ou utilitário novo ou seminovo com parcelas que cabem no bolso."},{img:c3,title:"Consórcio de Serviços",description:"Realize seus sonhos como viagens, festas, cirurgias plásticas ou cursos com planejamento e economia."}];return u.jsxs(u.Fragment,{children:[u.jsxs(Ix,{children:[u.jsx(e3,{children:u.jsxs(t3,{children:[u.jsx(a3,{children:u.jsx(l3,{children:"Conquiste seus maiores sonhos sem pagar juros."})}),u.jsx(n3,{src:r3,alt:"Família feliz com a conquista da casa própria através de consórcio"})]})}),u.jsx(i3,{})]}),u.jsx(Gx,{children:u.jsxs(Ic,{children:[u.jsx(ht,{children:"Consórcio: O Planejamento Inteligente"}),u.jsx(pt,{children:"Uma modalidade de compra baseada na união de pessoas que formam uma poupança comum destinada à aquisição de bens ou serviços. Ideal para quem não tem pressa e busca disciplina financeira para atingir grandes objetivos."}),u.jsx(Yx,{children:n.map((o,s)=>u.jsxs(Lx,{children:[u.jsx(kx,{src:o.img,alt:o.title}),u.jsx("h3",{children:o.title}),u.jsx("p",{children:o.description}),u.jsx(Qx,{as:"a",href:"https://wa.me/5511945411551",children:"Simular Agora"})]},s))})]})}),u.jsx(Xx,{children:u.jsxs(Ic,{children:[u.jsx(ht,{children:"Como Funciona na Prática?"}),u.jsx(pt,{children:"O processo é simples e transparente. Veja as 4 etapas principais:"}),u.jsxs(Vx,{children:[u.jsxs(Kr,{children:[u.jsx("h4",{children:"1. Formação do Grupo"}),u.jsx("p",{children:"Você adere a um grupo com outras pessoas que têm o mesmo objetivo que você."})]}),u.jsxs(Kr,{children:[u.jsx("h4",{children:"2. Contribuição Mensal"}),u.jsx("p",{children:"Todos os participantes pagam parcelas mensais, que formam o fundo do grupo."})]}),u.jsxs(Kr,{children:[u.jsx("h4",{children:"3. Contemplação"}),u.jsx("p",{children:"Mensalmente, participantes são contemplados por sorteio ou lance para receber o crédito."})]}),u.jsxs(Kr,{children:[u.jsx("h4",{children:"4. Aquisição do Bem"}),u.jsx("p",{children:"Com a carta de crédito em mãos, você tem poder de compra à vista para adquirir seu bem."})]})]})]})}),u.jsx(Zx,{children:u.jsxs(Ic,{children:[u.jsx(ht,{children:"Principais Vantagens"}),u.jsx(pt,{children:"Descubra por que o consórcio é a melhor opção para o seu planejamento."}),u.jsxs(Kx,{children:[u.jsxs(es,{children:[u.jsx(ts,{children:u.jsx(Fy,{})}),u.jsx("h4",{children:"Sem Juros"}),u.jsx("p",{children:"Você paga apenas uma taxa de administração, que é muito menor que os juros de um financiamento."})]}),u.jsxs(es,{children:[u.jsx(ts,{children:u.jsx(Ky,{})}),u.jsx("h4",{children:"Poder de Compra"}),u.jsx("p",{children:"Ao ser contemplado, você recebe o valor integral da carta de crédito para negociar sua compra à vista."})]}),u.jsxs(es,{children:[u.jsx(ts,{children:u.jsx(Iy,{})}),u.jsx("h4",{children:"Flexibilidade"}),u.jsx("p",{children:"Utilize o crédito para o bem que desejar dentro da categoria do seu grupo, com total liberdade de escolha."})]})]})]})}),u.jsx(Jx,{children:u.jsxs(Wx,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Pronto para dar o primeiro passo?"}),u.jsx("p",{children:"Faça uma simulação gratuita e sem compromisso para encontrar o plano perfeito para você."})]}),u.jsx(Fx,{children:u.jsx(Px,{as:"a",href:"https://wa.me/5511945411551",children:"Fazer Simulação"})})]})})]})},Jr=z.div`
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
`,pa=z.article`
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
`,f3=z.section`
  background: ${h.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,d3=z.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,m3=z.div`
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,h3=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,p3=z.h1`
  color: ${({theme:n})=>n.colors.secundary};
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
`;const g3=z.img`
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
`,v3=z.div`
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
`,ls=z.article`
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
`,ns=z.button`
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
`,y3=z.section`
  background: ${h.colors.primary}; /* Cor de destaque */
  color: ${h.colors.white};
  padding: 3rem 0;
`,b3=z.div`
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
`,x3=z.div`
  display: flex;
  flex-shrink: 0;
  
`,S3=z.button`
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
`,j3="/AbaCorretora/assets/img-saude-D4ti4aYu.webp",A3="/AbaCorretora/assets/convenio-medico-DHQi6kuG.webp",E3="/AbaCorretora/assets/convenio-odonto-CKul8QD8.webp",w3="/AbaCorretora/assets/convenio-pet-CKosw--s.webp";function C3(){return u.jsxs(u.Fragment,{children:[u.jsxs(f3,{children:[u.jsx(d3,{children:u.jsxs(m3,{children:[u.jsx(h3,{children:u.jsx(p3,{children:"Planos de saúde com valores que cabem no seu orçamento."})}),u.jsx(g3,{src:j3,alt:"imagem hero"})]})}),u.jsx(v3,{})]}),u.jsxs(Pr,{id:"convenios",children:[u.jsx(Wr,{children:"Convênios e Planos de Saúde"}),u.jsx(Fr,{children:"Encontre o plano ideal para sua saúde e bem-estar, com cobertura completa para você, sua família e até mesmo seu pet."}),u.jsxs(Jr,{children:[u.jsxs(ls,{children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:A3,alt:"Família feliz com médico, representando convênio médico",loading:"lazy"})}),u.jsx("h3",{children:"Convênio Médico"}),u.jsx("p",{children:"Cuidado integral para sua saúde. Acesse uma ampla rede credenciada de hospitais, clínicas e laboratórios."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consultas e exames"}),u.jsx("li",{children:"Internações e cirurgias"}),u.jsx("li",{children:"Atendimento de emergência 24h"})]}),u.jsx(as,{children:"Ideal para quem busca segurança e tranquilidade no acesso a serviços de saúde de qualidade."}),u.jsx("div",{className:"card-button-wrapper",children:u.jsx(ns,{children:"Ver Planos Médicos "})})]}),u.jsxs(ls,{children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:E3,alt:"Pessoas sorrindo, representando convênio odontológico",loading:"lazy"})}),u.jsx("h3",{children:"Convênio Odontológico"}),u.jsx("p",{children:"Mantenha seu sorriso saudável com cobertura para prevenção, tratamentos e procedimentos essenciais."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consultas e limpezas"}),u.jsx("li",{children:"Tratamentos de cárie e canal"}),u.jsx("li",{children:"Ortodontia (em alguns planos)"})]}),u.jsx(as,{children:"Perfeito para quem valoriza a saúde bucal e quer evitar gastos inesperados com o dentista."}),u.jsx("div",{className:"card-button-wrapper",children:u.jsx(ns,{children:"Ver Planos Odontológicos "})})]}),u.jsxs(ls,{children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:w3,alt:"Cão e gato felizes, representando convênio pet",loading:"lazy"})}),u.jsx("h3",{children:"Convênio Pet"}),u.jsx("p",{children:"Cuide da saúde do seu melhor amigo com planos que cobrem consultas, vacinas e procedimentos veterinários."}),u.jsxs("ul",{children:[u.jsx("li",{children:"Consultas e exames de rotina"}),u.jsx("li",{children:"Vacinas e vermifugação"}),u.jsx("li",{children:"Cirurgias e internações (em alguns planos)"})]}),u.jsx(as,{children:"Essencial para tutores que querem garantir a longevidade e o bem-estar de seus animais de estimação."}),u.jsx("div",{className:"card-button-wrapper",children:u.jsx(ns,{children:"Ver Planos Pet "})})]})]})]}),u.jsxs(Pr,{style:{backgroundColor:"#f9f9f9"},children:[u.jsx(Wr,{children:"Por que ter um Convênio Médico?"}),u.jsx(Fr,{children:"Garanta o acesso rápido e de qualidade a serviços de saúde essenciais para você e sua família, sem preocupações com gastos inesperados."}),u.jsxs(Jr,{children:[u.jsxs(pa,{children:[u.jsx("h3",{children:"Acesso Facilitado"}),u.jsx("p",{children:"Com um convênio médico, você e sua família têm acesso a uma ampla rede de médicos, hospitais e laboratórios credenciados, com agendamento facilitado e sem as longas filas do sistema público. Isso garante que você receba o atendimento necessário no momento certo."})]}),u.jsxs(pa,{children:[u.jsx("h3",{children:"Economia e Previsibilidade"}),u.jsx("p",{children:"Evite surpresas com os altos custos de consultas, exames, internações e cirurgias particulares. O convênio médico oferece mensalidades fixas, tornando seus gastos com saúde previsíveis e protegendo seu orçamento em caso de emergências ou tratamentos de longo prazo."})]}),u.jsxs(pa,{children:[u.jsx("h3",{children:"Cuidado Completo e Preventivo"}),u.jsx("p",{children:"Além do atendimento para doenças e emergências, muitos planos oferecem programas de medicina preventiva, check-ups regulares e acompanhamento para doenças crônicas. Invista na sua saúde e bem-estar com um cuidado abrangente e contínuo."})]})]})]}),u.jsxs(Pr,{children:[u.jsx(Wr,{children:"A Importância do Convênio Odontológico"}),u.jsx(Fr,{children:"Um sorriso saudável é essencial para sua qualidade de vida. Invista em prevenção e tratamentos odontológicos sem pesar no seu bolso."}),u.jsxs(Jr,{children:[u.jsxs(pa,{children:[u.jsx("h3",{children:"Prevenção de Doenças"}),u.jsx("p",{children:"Consultas e limpezas regulares são fundamentais para prevenir cáries, gengivite e outras doenças bucais que podem afetar sua saúde geral. O convênio odontológico facilita esse acesso à prevenção."})]}),u.jsxs(pa,{children:[u.jsx("h3",{children:"Cobertura para Tratamentos Essenciais"}),u.jsx("p",{children:"De obturações a tratamentos de canal, o convênio cobre uma série de procedimentos que seriam caros se feitos de forma particular. Garanta que você não adie tratamentos importantes devido ao custo."})]}),u.jsxs(pa,{children:[u.jsx("h3",{children:"Estética e Bem-estar"}),u.jsx("p",{children:"Um sorriso bonito aumenta a autoestima e a confiança. Além da saúde, muitos planos oferecem cobertura para procedimentos estéticos ou ortodônticos (parcialmente), contribuindo para seu bem-estar."})]})]})]}),u.jsxs(Pr,{style:{backgroundColor:"#f9f9f9"},children:[u.jsx(Wr,{children:"Cuide do seu Melhor Amigo com um Convênio Pet"}),u.jsx(Fr,{children:"Seu pet merece o melhor cuidado! Proteja a saúde do seu companheiro de quatro patas com planos veterinários completos e acessíveis."}),u.jsxs(Jr,{children:[u.jsxs(pa,{children:[u.jsx("h3",{children:"Atendimento Veterinário Completo"}),u.jsx("p",{children:"Garanta consultas, exames, vacinas e até cirurgias para seu pet com uma rede credenciada de clínicas e hospitais veterinários. Seu amigo terá acesso aos melhores profissionais e tratamentos."})]}),u.jsxs(pa,{children:[u.jsx("h3",{children:"Prevenção e Bem-estar"}),u.jsx("p",{children:"Mantenha seu pet protegido com a cobertura de vacinas essenciais, vermifugação e check-ups regulares. A prevenção é a melhor forma de garantir uma vida longa e saudável para ele."})]}),u.jsxs(pa,{children:[u.jsx("h3",{children:"Segurança em Emergências"}),u.jsx("p",{children:"Acidentes e doenças podem acontecer. Com um convênio pet, você tem a tranquilidade de saber que os custos com emergências, cirurgias e internações estarão cobertos, sem comprometer seu orçamento."})]})]})]}),u.jsx(y3,{children:u.jsxs(b3,{children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Fale com um especialista"}),u.jsx("p",{children:"Receba uma consultoria gratuita para encontrar o plano ideal."})]}),u.jsx(x3,{children:u.jsx(S3,{as:"a",href:"https://wa.me/5511945411551",children:"Solicitar cotação"})})]})}),u.jsx(Kb,{})]})}const z3=z.section`
  padding: 5rem 2rem;
  background-color: ${h.colors.white};

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 1rem;
    margin-top: 60px;
  }
`,T3=z.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`,R3=z.div`
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
`,O3=z.div`
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
  ${({primary:n})=>n&&jo`
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
`,M3=z.div`
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
`,D3=z.div`
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
`,r0=z.div`
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
`,_3=()=>u.jsxs(z3,{id:"contact",children:[u.jsxs(T3,{children:[u.jsx(ht,{children:"Estamos aqui para ajudar"}),u.jsx(pt,{children:"Escolha o melhor canal para falar conosco. Nossa equipe de especialistas está pronta para atender você."})]}),u.jsxs(R3,{children:[u.jsxs(O3,{children:[u.jsxs(is,{href:"https://wa.me/5511945411551",target:"_blank",rel:"noopener noreferrer",primary:!0,children:[u.jsx(P0,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"WhatsApp"}),u.jsx("p",{children:"Clique aqui para iniciar uma conversa agora mesmo."})]})]}),u.jsxs(is,{href:"tel:+551140044004",children:[u.jsx(Wy,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"Telefone"}),u.jsx("p",{children:"(11) 94541-1551"})]})]}),u.jsxs(is,{href:"mailto:contato@abacorretora.com.br",children:[u.jsx(Zy,{}),u.jsxs("div",{children:[u.jsx("h3",{children:"E-mail"}),u.jsx("p",{children:"abaseguros@abaseguros.com.br"})]})]})]}),u.jsx(M3,{children:u.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.210770118163!2d-46.504975200000004!3d-23.5249205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60bce3afc021%3A0xf2841702e1fdf959!2sR.%20Itingu%C3%A7u%2C%201019%20-%20Vila%20R%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003658-010!5e0!3m2!1spt-BR!2sbr!4v1760037282599!5m2!1spt-BR!2sbr",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Endereço da ABA Corretora na Av. Paulista"})})]}),u.jsxs(D3,{children:[u.jsxs(r0,{children:[u.jsx(Jy,{}),u.jsxs("div",{children:[u.jsx("h4",{children:"Nosso Endereço"}),u.jsx("p",{children:"Av. Itinguçu, 1019 - Vila Ré, São Paulo/SP"})]})]}),u.jsxs(r0,{children:[u.jsx(Xy,{}),u.jsxs("div",{children:[u.jsx("h4",{children:"Horário de Atendimento"}),u.jsx("p",{children:"Segunda a Sexta: 08h às 18h"})]})]})]})]}),N3=z.div`
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
`,q3=z.p`
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
`,$3=z.button`
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
`,o0="cookies_accepted",U3=()=>{const[n,o]=O.useState(!1);O.useEffect(()=>{localStorage.getItem(o0)||o(!0)},[]);const s=()=>{localStorage.setItem(o0,"true"),o(!1)};return n?u.jsxs(N3,{children:[u.jsx(Vy,{}),u.jsxs(q3,{children:['Utilizamos cookies para oferecer a melhor experiência e analisar o desempenho do nosso site. Ao clicar em "Aceitar Cookies", você concorda com o uso de todos os cookies. Para mais informações, consulte nossa'," ",u.jsx("a",{href:"/politica-de-privacidade",children:"Política de Privacidade"}),"."]}),u.jsx($3,{onClick:s,children:"Aceitar Cookies"})]}):null};function B3(){const{pathname:n}=xa();return O.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[n]),null}const H3=z.section`
  padding: 4rem 0;
  background-color: ${h.colors.lightGray};
  min-height: 80vh; // Garante que a página tenha uma altura mínima

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,G3=z.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  padding: 0 2rem;
  overflow-x: auto; // Essencial para responsividade da tabela
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${h.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,Y3=z.table`
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
`,k3=z.button`
  background: ${({isCopied:n,theme:o})=>n?"#28a745":o.colors.primary};
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
    background: ${({isCopied:n,theme:o})=>n?"#28a745":o.colors.primaryDark};
  }

  &:disabled {
    cursor: default;
  }
`,L3=[{id:1,name:"Corretora Exemplo Alfa",contact:"(11) 99999-1234"},{id:2,name:"Beta Seguros",contact:"(21) 98888-5678"},{id:3,name:"Gama Corretora",contact:"(31) 97777-4321"}],Q3=()=>{const[n,o]=O.useState(null),s=(c,d)=>{navigator.clipboard.writeText(c).then(()=>{o(d),setTimeout(()=>{o(null)},2e3)})};return u.jsxs(H3,{children:[u.jsx(ht,{children:"Contatos das Corretoras"}),u.jsx(pt,{children:"Encontre e entre em contato com nossas corretoras parceiras."}),u.jsx(G3,{children:u.jsxs(Y3,{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Corretora"}),u.jsx("th",{children:"Contato"}),u.jsx("th",{children:"Copiar"})]})}),u.jsx("tbody",{children:L3.map(c=>u.jsxs("tr",{children:[u.jsx("td",{children:c.name}),u.jsx("td",{children:c.contact}),u.jsx("td",{children:u.jsx(k3,{onClick:()=>s(c.contact,c.id),isCopied:n===c.id,disabled:n===c.id,children:n===c.id?"Copiado!":"Clique aqui"})})]},c.id))})]})})]})};function X3(){return u.jsxs(_0,{theme:h,children:[u.jsx(Iv,{}),u.jsx(Ry,{}),u.jsx(B3,{}),u.jsx("main",{children:u.jsxs(W2,{children:[u.jsx(Va,{path:"/AbaCorretora",element:u.jsx(cx,{})}),u.jsx(Va,{path:"/products",element:u.jsx(K2,{to:"/home",replace:!0})}),u.jsx(Va,{path:"/seguros",element:u.jsx(Hx,{})}),u.jsx(Va,{path:"/consorcios",element:u.jsx(s3,{})}),u.jsx(Va,{path:"/saude",element:u.jsx(C3,{})}),u.jsx(Va,{path:"/contato",element:u.jsx(_3,{})}),u.jsx(Va,{path:"/corretoras",element:u.jsx(Q3,{})})]})}),u.jsx(U3,{}),u.jsx(ab,{}),u.jsx(ib,{})]})}Fg.createRoot(document.getElementById("root")).render(u.jsx(ke.StrictMode,{children:u.jsx(_0,{theme:h,children:u.jsx(by,{children:u.jsx(X3,{})})})}));
