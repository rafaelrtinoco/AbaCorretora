(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();function s1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hc={exports:{}},pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function kg(){if(Th)return pi;Th=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(u,d,h){var y=null;if(h!==void 0&&(y=""+h),d.key!==void 0&&(y=""+d.key),"key"in d){h={};for(var E in d)E!=="key"&&(h[E]=d[E])}else h=d;return d=h.ref,{$$typeof:n,type:u,key:y,ref:d!==void 0?d:null,props:h}}return pi.Fragment=o,pi.jsx=s,pi.jsxs=s,pi}var Rh;function Vg(){return Rh||(Rh=1,Hc.exports=kg()),Hc.exports}var c=Vg(),$c={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Xg(){if(Oh)return re;Oh=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),M=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=M&&x[M]||x["@@iterator"],typeof x=="function"?x:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function Y(x,B,L){this.props=x,this.context=B,this.refs=Q,this.updater=L||H}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function X(){}X.prototype=Y.prototype;function $(x,B,L){this.props=x,this.context=B,this.refs=Q,this.updater=L||H}var Z=$.prototype=new X;Z.constructor=$,G(Z,Y.prototype),Z.isPureReactComponent=!0;var ne=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ie=Object.prototype.hasOwnProperty;function F(x,B,L,V,P,fe){return L=fe.ref,{$$typeof:n,type:x,key:B,ref:L!==void 0?L:null,props:fe}}function we(x,B){return F(x.type,B,void 0,void 0,void 0,x.props)}function Ee(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function it(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(L){return B[L]})}var ot=/\/+/g;function ke(x,B){return typeof x=="object"&&x!==null&&x.key!=null?it(""+x.key):B.toString(36)}function Ft(){}function Pt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Ft,Ft):(x.status="pending",x.then(function(B){x.status==="pending"&&(x.status="fulfilled",x.value=B)},function(B){x.status==="pending"&&(x.status="rejected",x.reason=B)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ve(x,B,L,V,P){var fe=typeof x;(fe==="undefined"||fe==="boolean")&&(x=null);var te=!1;if(x===null)te=!0;else switch(fe){case"bigint":case"string":case"number":te=!0;break;case"object":switch(x.$$typeof){case n:case o:te=!0;break;case j:return te=x._init,Ve(te(x._payload),B,L,V,P)}}if(te)return P=P(x),te=V===""?"."+ke(x,0):V,ne(P)?(L="",te!=null&&(L=te.replace(ot,"$&/")+"/"),Ve(P,B,L,"",function(tt){return tt})):P!=null&&(Ee(P)&&(P=we(P,L+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(ot,"$&/")+"/")+te)),B.push(P)),1;te=0;var Xe=V===""?".":V+":";if(ne(x))for(var ve=0;ve<x.length;ve++)V=x[ve],fe=Xe+ke(V,ve),te+=Ve(V,B,L,fe,P);else if(ve=U(x),typeof ve=="function")for(x=ve.call(x),ve=0;!(V=x.next()).done;)V=V.value,fe=Xe+ke(V,ve++),te+=Ve(V,B,L,fe,P);else if(fe==="object"){if(typeof x.then=="function")return Ve(Pt(x),B,L,V,P);throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return te}function D(x,B,L){if(x==null)return x;var V=[],P=0;return Ve(x,V,"","",function(fe){return B.call(L,fe,P++)}),V}function k(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(L){(x._status===0||x._status===-1)&&(x._status=1,x._result=L)},function(L){(x._status===0||x._status===-1)&&(x._status=2,x._result=L)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var I=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function se(){}return re.Children={map:D,forEach:function(x,B,L){D(x,function(){B.apply(this,arguments)},L)},count:function(x){var B=0;return D(x,function(){B++}),B},toArray:function(x){return D(x,function(B){return B})||[]},only:function(x){if(!Ee(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},re.Component=Y,re.Fragment=s,re.Profiler=d,re.PureComponent=$,re.StrictMode=u,re.Suspense=b,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,re.__COMPILER_RUNTIME={__proto__:null,c:function(x){return K.H.useMemoCache(x)}},re.cache=function(x){return function(){return x.apply(null,arguments)}},re.cloneElement=function(x,B,L){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=G({},x.props),P=x.key,fe=void 0;if(B!=null)for(te in B.ref!==void 0&&(fe=void 0),B.key!==void 0&&(P=""+B.key),B)!ie.call(B,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&B.ref===void 0||(V[te]=B[te]);var te=arguments.length-2;if(te===1)V.children=L;else if(1<te){for(var Xe=Array(te),ve=0;ve<te;ve++)Xe[ve]=arguments[ve+2];V.children=Xe}return F(x.type,P,void 0,void 0,fe,V)},re.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:h,_context:x},x},re.createElement=function(x,B,L){var V,P={},fe=null;if(B!=null)for(V in B.key!==void 0&&(fe=""+B.key),B)ie.call(B,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(P[V]=B[V]);var te=arguments.length-2;if(te===1)P.children=L;else if(1<te){for(var Xe=Array(te),ve=0;ve<te;ve++)Xe[ve]=arguments[ve+2];P.children=Xe}if(x&&x.defaultProps)for(V in te=x.defaultProps,te)P[V]===void 0&&(P[V]=te[V]);return F(x,fe,void 0,void 0,null,P)},re.createRef=function(){return{current:null}},re.forwardRef=function(x){return{$$typeof:E,render:x}},re.isValidElement=Ee,re.lazy=function(x){return{$$typeof:j,_payload:{_status:-1,_result:x},_init:k}},re.memo=function(x,B){return{$$typeof:g,type:x,compare:B===void 0?null:B}},re.startTransition=function(x){var B=K.T,L={};K.T=L;try{var V=x(),P=K.S;P!==null&&P(L,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(se,I)}catch(fe){I(fe)}finally{K.T=B}},re.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},re.use=function(x){return K.H.use(x)},re.useActionState=function(x,B,L){return K.H.useActionState(x,B,L)},re.useCallback=function(x,B){return K.H.useCallback(x,B)},re.useContext=function(x){return K.H.useContext(x)},re.useDebugValue=function(){},re.useDeferredValue=function(x,B){return K.H.useDeferredValue(x,B)},re.useEffect=function(x,B,L){var V=K.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,B)},re.useId=function(){return K.H.useId()},re.useImperativeHandle=function(x,B,L){return K.H.useImperativeHandle(x,B,L)},re.useInsertionEffect=function(x,B){return K.H.useInsertionEffect(x,B)},re.useLayoutEffect=function(x,B){return K.H.useLayoutEffect(x,B)},re.useMemo=function(x,B){return K.H.useMemo(x,B)},re.useOptimistic=function(x,B){return K.H.useOptimistic(x,B)},re.useReducer=function(x,B,L){return K.H.useReducer(x,B,L)},re.useRef=function(x){return K.H.useRef(x)},re.useState=function(x){return K.H.useState(x)},re.useSyncExternalStore=function(x,B,L){return K.H.useSyncExternalStore(x,B,L)},re.useTransition=function(){return K.H.useTransition()},re.version="19.1.1",re}var Mh;function vs(){return Mh||(Mh=1,$c.exports=Xg()),$c.exports}var O=vs();const Le=s1(O);var Gc={exports:{}},gi={},Yc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function Qg(){return Dh||(Dh=1,(function(n){function o(D,k){var I=D.length;D.push(k);e:for(;0<I;){var se=I-1>>>1,x=D[se];if(0<d(x,k))D[se]=k,D[I]=x,I=se;else break e}}function s(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var k=D[0],I=D.pop();if(I!==k){D[0]=I;e:for(var se=0,x=D.length,B=x>>>1;se<B;){var L=2*(se+1)-1,V=D[L],P=L+1,fe=D[P];if(0>d(V,I))P<x&&0>d(fe,V)?(D[se]=fe,D[P]=I,se=P):(D[se]=V,D[L]=I,se=L);else if(P<x&&0>d(fe,I))D[se]=fe,D[P]=I,se=P;else break e}}return k}function d(D,k){var I=D.sortIndex-k.sortIndex;return I!==0?I:D.id-k.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;n.unstable_now=function(){return h.now()}}else{var y=Date,E=y.now();n.unstable_now=function(){return y.now()-E}}var b=[],g=[],j=1,M=null,U=3,H=!1,G=!1,Q=!1,Y=!1,X=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ne(D){for(var k=s(g);k!==null;){if(k.callback===null)u(g);else if(k.startTime<=D)u(g),k.sortIndex=k.expirationTime,o(b,k);else break;k=s(g)}}function K(D){if(Q=!1,ne(D),!G)if(s(b)!==null)G=!0,ie||(ie=!0,ke());else{var k=s(g);k!==null&&Ve(K,k.startTime-D)}}var ie=!1,F=-1,we=5,Ee=-1;function it(){return Y?!0:!(n.unstable_now()-Ee<we)}function ot(){if(Y=!1,ie){var D=n.unstable_now();Ee=D;var k=!0;try{e:{G=!1,Q&&(Q=!1,$(F),F=-1),H=!0;var I=U;try{t:{for(ne(D),M=s(b);M!==null&&!(M.expirationTime>D&&it());){var se=M.callback;if(typeof se=="function"){M.callback=null,U=M.priorityLevel;var x=se(M.expirationTime<=D);if(D=n.unstable_now(),typeof x=="function"){M.callback=x,ne(D),k=!0;break t}M===s(b)&&u(b),ne(D)}else u(b);M=s(b)}if(M!==null)k=!0;else{var B=s(g);B!==null&&Ve(K,B.startTime-D),k=!1}}break e}finally{M=null,U=I,H=!1}k=void 0}}finally{k?ke():ie=!1}}}var ke;if(typeof Z=="function")ke=function(){Z(ot)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,Pt=Ft.port2;Ft.port1.onmessage=ot,ke=function(){Pt.postMessage(null)}}else ke=function(){X(ot,0)};function Ve(D,k){F=X(function(){D(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return U},n.unstable_next=function(D){switch(U){case 1:case 2:case 3:var k=3;break;default:k=U}var I=U;U=k;try{return D()}finally{U=I}},n.unstable_requestPaint=function(){Y=!0},n.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=U;U=D;try{return k()}finally{U=I}},n.unstable_scheduleCallback=function(D,k,I){var se=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,D){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=I+x,D={id:j++,callback:k,priorityLevel:D,startTime:I,expirationTime:x,sortIndex:-1},I>se?(D.sortIndex=I,o(g,D),s(b)===null&&D===s(g)&&(Q?($(F),F=-1):Q=!0,Ve(K,I-se))):(D.sortIndex=x,o(b,D),G||H||(G=!0,ie||(ie=!0,ke()))),D},n.unstable_shouldYield=it,n.unstable_wrapCallback=function(D){var k=U;return function(){var I=U;U=k;try{return D.apply(this,arguments)}finally{U=I}}}})(Lc)),Lc}var Nh;function Zg(){return Nh||(Nh=1,Yc.exports=Qg()),Yc.exports}var kc={exports:{}},nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function Kg(){if(_h)return nt;_h=1;var n=vs();function o(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)g+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var u={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(b,g,j){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:b,containerInfo:g,implementation:j}}var y=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,nt.createPortal=function(b,g){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return h(b,g,null,j)},nt.flushSync=function(b){var g=y.T,j=u.p;try{if(y.T=null,u.p=2,b)return b()}finally{y.T=g,u.p=j,u.d.f()}},nt.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(b,g))},nt.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},nt.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var j=g.as,M=E(j,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,H=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;j==="style"?u.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:U,fetchPriority:H}):j==="script"&&u.d.X(b,{crossOrigin:M,integrity:U,fetchPriority:H,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nt.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var j=E(g.as,g.crossOrigin);u.d.M(b,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(b)},nt.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var j=g.as,M=E(j,g.crossOrigin);u.d.L(b,j,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nt.preloadModule=function(b,g){if(typeof b=="string")if(g){var j=E(g.as,g.crossOrigin);u.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(b)},nt.requestFormReset=function(b){u.d.r(b)},nt.unstable_batchedUpdates=function(b,g){return b(g)},nt.useFormState=function(b,g,j){return y.H.useFormState(b,g,j)},nt.useFormStatus=function(){return y.H.useHostTransitionStatus()},nt.version="19.1.1",nt}var qh;function Jg(){if(qh)return kc.exports;qh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),kc.exports=Kg(),kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function Wg(){if(Bh)return gi;Bh=1;var n=Zg(),o=vs(),s=Jg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(h(e)!==e)throw Error(u(188))}function b(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return E(i),e;if(r===l)return E(i),t;r=r.sibling}throw Error(u(188))}if(a.return!==l.return)a=i,l=r;else{for(var f=!1,m=i.child;m;){if(m===a){f=!0,a=i,l=r;break}if(m===l){f=!0,l=i,a=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===a){f=!0,a=r,l=i;break}if(m===l){f=!0,l=r,a=i;break}m=m.sibling}if(!f)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,M=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),it=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var Ft=Symbol.for("react.client.reference");function Pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Y:return"Profiler";case Q:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Pt(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Pt(e(t))}catch{}}return null}var Ve=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],x=-1;function B(e){return{current:e}}function L(e){0>x||(e.current=se[x],se[x]=null,x--)}function V(e,t){x++,se[x]=e.current,e.current=t}var P=B(null),fe=B(null),te=B(null),Xe=B(null);function ve(e,t){switch(V(te,t),V(fe,e),V(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ah(t),e=lh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(P),V(P,e)}function tt(){L(P),L(fe),L(te)}function Qa(e){e.memoizedState!==null&&V(Xe,e);var t=P.current,a=lh(t,e.type);t!==a&&(V(fe,e),V(P,a))}function It(e){fe.current===e&&(L(P),L(fe)),Xe.current===e&&(L(Xe),si._currentValue=I)}var zt=Object.prototype.hasOwnProperty,Co=n.unstable_scheduleCallback,zo=n.unstable_cancelCallback,S0=n.unstable_shouldYield,j0=n.unstable_requestPaint,kt=n.unstable_now,A0=n.unstable_getCurrentPriorityLevel,qs=n.unstable_ImmediatePriority,Bs=n.unstable_UserBlockingPriority,zi=n.unstable_NormalPriority,E0=n.unstable_LowPriority,Us=n.unstable_IdlePriority,C0=n.log,z0=n.unstable_setDisableYieldValue,yn=null,mt=null;function ba(e){if(typeof C0=="function"&&z0(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(yn,e)}catch{}}var ht=Math.clz32?Math.clz32:R0,w0=Math.log,T0=Math.LN2;function R0(e){return e>>>=0,e===0?32:31-(w0(e)/T0|0)|0}var wi=256,Ti=4194304;function Za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ri(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?i=Za(l):(f&=m,f!==0?i=Za(f):a||(a=m&~e,a!==0&&(i=Za(a))))):(m=l&~r,m!==0?i=Za(m):f!==0?i=Za(f):a||(a=l&~e,a!==0&&(i=Za(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function bn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function O0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hs(){var e=wi;return wi<<=1,(wi&4194048)===0&&(wi=256),e}function $s(){var e=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),e}function wo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function xn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function M0(e,t,a,l,i,r){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,z=e.hiddenUpdates;for(a=f&~a;0<a;){var N=31-ht(a),q=1<<N;m[N]=0,v[N]=-1;var w=z[N];if(w!==null)for(z[N]=null,N=0;N<w.length;N++){var T=w[N];T!==null&&(T.lane&=-536870913)}a&=~q}l!==0&&Gs(e,l,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Gs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ht(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Ys(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ht(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ls(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:jh(e.type))}function D0(e,t){var a=k.p;try{return k.p=e,t()}finally{k.p=a}}var xa=Math.random().toString(36).slice(2),at="__reactFiber$"+xa,ut="__reactProps$"+xa,vl="__reactContainer$"+xa,Oo="__reactEvents$"+xa,N0="__reactListeners$"+xa,_0="__reactHandles$"+xa,ks="__reactResources$"+xa,Sn="__reactMarker$"+xa;function Mo(e){delete e[at],delete e[ut],delete e[Oo],delete e[N0],delete e[_0]}function yl(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[vl]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=oh(e);e!==null;){if(a=e[at])return a;e=oh(e)}return t}e=a,a=e.parentNode}return null}function bl(e){if(e=e[at]||e[vl]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function jn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function xl(e){var t=e[ks];return t||(t=e[ks]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Sn]=!0}var Vs=new Set,Xs={};function Ka(e,t){Sl(e,t),Sl(e+"Capture",t)}function Sl(e,t){for(Xs[e]=t,e=0;e<t.length;e++)Vs.add(t[e])}var q0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},Zs={};function B0(e){return zt.call(Zs,e)?!0:zt.call(Qs,e)?!1:q0.test(e)?Zs[e]=!0:(Qs[e]=!0,!1)}function Oi(e,t,a){if(B0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Mi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ea(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var Do,Ks;function jl(e){if(Do===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||"",Ks=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Do+e+Ks}var No=!1;function _o(e,t){if(!e||No)return"";No=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(T){var w=T}Reflect.construct(e,[],q)}else{try{q.call()}catch(T){w=T}e.call(q.prototype)}}else{try{throw Error()}catch(T){w=T}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(T){if(T&&w&&typeof T.stack=="string")return[T.stack,w.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var v=f.split(`
`),z=m.split(`
`);for(i=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(l===v.length||i===z.length)for(l=v.length-1,i=z.length-1;1<=l&&0<=i&&v[l]!==z[i];)i--;for(;1<=l&&0<=i;l--,i--)if(v[l]!==z[i]){if(l!==1||i!==1)do if(l--,i--,0>i||v[l]!==z[i]){var N=`
`+v[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=i);break}}}finally{No=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jl(a):""}function U0(e){switch(e.tag){case 26:case 27:case 5:return jl(e.type);case 16:return jl("Lazy");case 13:return jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return _o(e.type,!1);case 11:return _o(e.type.render,!1);case 1:return _o(e.type,!0);case 31:return jl("Activity");default:return""}}function Js(e){try{var t="";do t+=U0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=Ws(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){l=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=H0(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ws(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $0=/[\n"\\]/g;function Tt(e){return e.replace($0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qo(e,t,a,l,i,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Bo(e,f,wt(t)):a!=null?Bo(e,f,wt(a)):l!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+wt(m):e.removeAttribute("name")}function Ps(e,t,a,l,i,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+wt(a):"",t=t!=null?""+wt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Bo(e,t,a){t==="number"&&Ni(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Al(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Is(e,t,a){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+wt(a):""}function ef(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(Ve(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=wt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function El(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var G0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||G0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function af(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&tf(e,i,l)}else for(var r in t)t.hasOwnProperty(r)&&tf(e,r,t[r])}function Uo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(e){return L0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ho=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,zl=null;function lf(e){var t=bl(e);if(t&&(e=t.stateNode)){var a=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(qo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[ut]||null;if(!i)throw Error(u(90));qo(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Fs(l)}break e;case"textarea":Is(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Al(e,!!a.multiple,t,!1)}}}var Go=!1;function nf(e,t,a){if(Go)return e(t,a);Go=!0;try{var l=e(t);return l}finally{if(Go=!1,(Cl!==null||zl!==null)&&(br(),Cl&&(t=Cl,e=zl,zl=Cl=null,lf(t),e)))for(t=0;t<e.length;t++)lf(e[t])}}function An(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ut]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(ta)try{var En={};Object.defineProperty(En,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Yo=!1}var Sa=null,Lo=null,qi=null;function rf(){if(qi)return qi;var e,t=Lo,a=t.length,l,i="value"in Sa?Sa.value:Sa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(l=1;l<=f&&t[a-l]===i[r-l];l++);return qi=i.slice(e,1<l?1-l:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function of(){return!1}function ct(e){function t(a,l,i,r,f){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ui:of,this.isPropagationStopped=of,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=ct(Ja),Cn=j({},Ja,{view:0,detail:0}),k0=ct(Cn),ko,Vo,zn,$i=j({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(ko=e.screenX-zn.screenX,Vo=e.screenY-zn.screenY):Vo=ko=0,zn=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),uf=ct($i),V0=j({},$i,{dataTransfer:0}),X0=ct(V0),Q0=j({},Cn,{relatedTarget:0}),Xo=ct(Q0),Z0=j({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=ct(Z0),J0=j({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=ct(J0),F0=j({},Ja,{data:0}),cf=ct(F0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ep[e])?!!t[e]:!1}function Qo(){return tp}var ap=j({},Cn,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qo,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lp=ct(ap),np=j({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=ct(np),ip=j({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qo}),rp=ct(ip),op=j({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),up=ct(op),cp=j({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sp=ct(cp),fp=j({},Ja,{newState:0,oldState:0}),dp=ct(fp),mp=[9,13,27,32],Zo=ta&&"CompositionEvent"in window,wn=null;ta&&"documentMode"in document&&(wn=document.documentMode);var hp=ta&&"TextEvent"in window&&!wn,ff=ta&&(!Zo||wn&&8<wn&&11>=wn),df=" ",mf=!1;function hf(e,t){switch(e){case"keyup":return mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wl=!1;function pp(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(mf=!0,df);case"textInput":return e=t.data,e===df&&mf?null:e;default:return null}}function gp(e,t){if(wl)return e==="compositionend"||!Zo&&hf(e,t)?(e=rf(),qi=Lo=Sa=null,wl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vp[e.type]:t==="textarea"}function vf(e,t,a,l){Cl?zl?zl.push(l):zl=[l]:Cl=l,t=Cr(t,"onChange"),0<t.length&&(a=new Hi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Tn=null,Rn=null;function yp(e){Fm(e,0)}function Gi(e){var t=jn(e);if(Fs(t))return e}function yf(e,t){if(e==="change")return t}var bf=!1;if(ta){var Ko;if(ta){var Jo="oninput"in document;if(!Jo){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),Jo=typeof xf.oninput=="function"}Ko=Jo}else Ko=!1;bf=Ko&&(!document.documentMode||9<document.documentMode)}function Sf(){Tn&&(Tn.detachEvent("onpropertychange",jf),Rn=Tn=null)}function jf(e){if(e.propertyName==="value"&&Gi(Rn)){var t=[];vf(t,Rn,e,$o(e)),nf(yp,t)}}function bp(e,t,a){e==="focusin"?(Sf(),Tn=t,Rn=a,Tn.attachEvent("onpropertychange",jf)):e==="focusout"&&Sf()}function xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Rn)}function Sp(e,t){if(e==="click")return Gi(t)}function jp(e,t){if(e==="input"||e==="change")return Gi(t)}function Ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Ap;function On(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!zt.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var a=Af(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Af(a)}}function Cf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ni(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ni(e.document)}return t}function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ep=ta&&"documentMode"in document&&11>=document.documentMode,Tl=null,Fo=null,Mn=null,Po=!1;function wf(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Po||Tl==null||Tl!==Ni(l)||(l=Tl,"selectionStart"in l&&Wo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mn&&On(Mn,l)||(Mn=l,l=Cr(Fo,"onSelect"),0<l.length&&(t=new Hi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Tl)))}function Wa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Rl={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Io={},Tf={};ta&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function Fa(e){if(Io[e])return Io[e];if(!Rl[e])return e;var t=Rl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tf)return Io[e]=t[a];return e}var Rf=Fa("animationend"),Of=Fa("animationiteration"),Mf=Fa("animationstart"),Cp=Fa("transitionrun"),zp=Fa("transitionstart"),wp=Fa("transitioncancel"),Df=Fa("transitionend"),Nf=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function Ut(e,t){Nf.set(e,t),Ka(t,[e])}var _f=new WeakMap;function Rt(e,t){if(typeof e=="object"&&e!==null){var a=_f.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Js(t)},_f.set(e,t),t)}return{value:e,source:t,stack:Js(t)}}var Ot=[],Ol=0,tu=0;function Yi(){for(var e=Ol,t=tu=Ol=0;t<e;){var a=Ot[t];Ot[t++]=null;var l=Ot[t];Ot[t++]=null;var i=Ot[t];Ot[t++]=null;var r=Ot[t];if(Ot[t++]=null,l!==null&&i!==null){var f=l.pending;f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i}r!==0&&qf(a,i,r)}}function Li(e,t,a,l){Ot[Ol++]=e,Ot[Ol++]=t,Ot[Ol++]=a,Ot[Ol++]=l,tu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function au(e,t,a,l){return Li(e,t,a,l),ki(e)}function Ml(e,t){return Li(e,null,null,t),ki(e)}function qf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-ht(a),e=r.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),r):null}function ki(e){if(50<ai)throw ai=0,uc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Dl={};function Tp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new Tp(e,t,a,l)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vi(e,t,a,l,i,r){var f=0;if(l=e,typeof e=="function")lu(e)&&(f=1);else if(typeof e=="string")f=Og(e,a,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=gt(31,a,t,i),e.elementType=Ee,e.lanes=r,e;case G:return Pa(a.children,i,r,t);case Q:f=8,i|=24;break;case Y:return e=gt(12,a,t,i|2),e.elementType=Y,e.lanes=r,e;case K:return e=gt(13,a,t,i),e.elementType=K,e.lanes=r,e;case ie:return e=gt(19,a,t,i),e.elementType=ie,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:case Z:f=10;break e;case $:f=9;break e;case ne:f=11;break e;case F:f=14;break e;case we:f=16,l=null;break e}f=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=gt(f,a,t,i),t.elementType=e,t.type=l,t.lanes=r,t}function Pa(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function nu(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function iu(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Nl=[],_l=0,Xi=null,Qi=0,Mt=[],Dt=0,Ia=null,la=1,na="";function el(e,t){Nl[_l++]=Qi,Nl[_l++]=Xi,Xi=e,Qi=t}function Uf(e,t,a){Mt[Dt++]=la,Mt[Dt++]=na,Mt[Dt++]=Ia,Ia=e;var l=la;e=na;var i=32-ht(l)-1;l&=~(1<<i),a+=1;var r=32-ht(t)+i;if(30<r){var f=i-i%5;r=(l&(1<<f)-1).toString(32),l>>=f,i-=f,la=1<<32-ht(t)+i|a<<i|l,na=r+e}else la=1<<r|a<<i|l,na=e}function ru(e){e.return!==null&&(el(e,1),Uf(e,1,0))}function ou(e){for(;e===Xi;)Xi=Nl[--_l],Nl[_l]=null,Qi=Nl[--_l],Nl[_l]=null;for(;e===Ia;)Ia=Mt[--Dt],Mt[Dt]=null,na=Mt[--Dt],Mt[Dt]=null,la=Mt[--Dt],Mt[Dt]=null}var rt=null,De=null,ge=!1,tl=null,Vt=!1,uu=Error(u(519));function al(e){var t=Error(u(418,""));throw _n(Rt(t,e)),uu}function Hf(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[at]=e,t[ut]=l,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<ni.length;a++)me(ni[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Ps(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Di(t);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),ef(t,l.value,l.defaultValue,l.children),Di(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||th(t.textContent,a)?(l.popover!=null&&(me("beforetoggle",t),me("toggle",t)),l.onScroll!=null&&me("scroll",t),l.onScrollEnd!=null&&me("scrollend",t),l.onClick!=null&&(t.onclick=zr),t=!0):t=!1,t||al(e)}function $f(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:rt=rt.return}}function Dn(e){if(e!==rt)return!1;if(!ge)return $f(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ec(e.type,e.memoizedProps)),a=!a),a&&De&&al(e),$f(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){De=$t(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}De=null}}else t===27?(t=De,Ua(e.type)?(e=Tc,Tc=null,De=e):De=t):De=rt?$t(e.stateNode.nextSibling):null;return!0}function Nn(){De=rt=null,ge=!1}function Gf(){var e=tl;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),tl=null),e}function _n(e){tl===null?tl=[e]:tl.push(e)}var cu=B(null),ll=null,ia=null;function ja(e,t,a){V(cu,t._currentValue),t._currentValue=a}function ra(e){e._currentValue=cu.current,L(cu)}function su(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function fu(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),su(r.return,a,e),l||(f=null);break e}r=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=a,r=f.alternate,r!==null&&(r.lanes|=a),su(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function qn(e,t,a,l){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var m=i.type;pt(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===Xe.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(si):e=[si])}i=i.return}e!==null&&fu(t,e,a,l),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nl(e){ll=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Yf(ll,e)}function Ki(e,t){return ll===null&&nl(e),Yf(e,t)}function Yf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(u(308));ia=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ia=ia.next=t;return a}var Rp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Op=n.unstable_scheduleCallback,Mp=n.unstable_NormalPriority,Ge={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new Rp,data:new Map,refCount:0}}function Bn(e){e.refCount--,e.refCount===0&&Op(Mp,function(){e.controller.abort()})}var Un=null,mu=0,ql=0,Bl=null;function Dp(e,t){if(Un===null){var a=Un=[];mu=0,ql=pc(),Bl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return mu++,t.then(Lf,Lf),t}function Lf(){if(--mu===0&&Un!==null){Bl!==null&&(Bl.status="fulfilled");var e=Un;Un=null,ql=0,Bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Np(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var kf=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dp(e,t),kf!==null&&kf(e,t)};var il=B(null);function hu(){var e=il.current;return e!==null?e:ze.pooledCache}function Ji(e,t){t===null?V(il,il.current):V(il,t.pool)}function Vf(){var e=hu();return e===null?null:{parent:Ge._currentValue,pool:e}}var Hn=Error(u(460)),Xf=Error(u(474)),Wi=Error(u(542)),pu={then:function(){}};function Qf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fi(){}function Zf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Fi,Fi),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e;default:if(typeof t.status=="string")t.then(Fi,Fi);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e}throw $n=t,Hn}}var $n=null;function Kf(){if($n===null)throw Error(u(459));var e=$n;return $n=null,e}function Jf(e){if(e===Hn||e===Wi)throw Error(u(483))}var Aa=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=ki(e),qf(e,null,a),t}return Li(e,l,t,a),ki(e)}function Gn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ys(e,a)}}function yu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bu=!1;function Yn(){if(bu){var e=Bl;if(e!==null)throw e}}function Ln(e,t,a,l){bu=!1;var i=e.updateQueue;Aa=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,z=v.next;v.next=null,f===null?r=z:f.next=z,f=v;var N=e.alternate;N!==null&&(N=N.updateQueue,m=N.lastBaseUpdate,m!==f&&(m===null?N.firstBaseUpdate=z:m.next=z,N.lastBaseUpdate=v))}if(r!==null){var q=i.baseState;f=0,N=z=v=null,m=r;do{var w=m.lane&-536870913,T=w!==m.lane;if(T?(he&w)===w:(l&w)===w){w!==0&&w===ql&&(bu=!0),N!==null&&(N=N.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var le=e,ee=m;w=t;var Ae=a;switch(ee.tag){case 1:if(le=ee.payload,typeof le=="function"){q=le.call(Ae,q,w);break e}q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ee.payload,w=typeof le=="function"?le.call(Ae,q,w):le,w==null)break e;q=j({},q,w);break e;case 2:Aa=!0}}w=m.callback,w!==null&&(e.flags|=64,T&&(e.flags|=8192),T=i.callbacks,T===null?i.callbacks=[w]:T.push(w))}else T={lane:w,tag:m.tag,payload:m.payload,callback:m.callback,next:null},N===null?(z=N=T,v=q):N=N.next=T,f|=w;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;T=m,m=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);N===null&&(v=q),i.baseState=v,i.firstBaseUpdate=z,i.lastBaseUpdate=N,r===null&&(i.shared.lanes=0),Na|=f,e.lanes=f,e.memoizedState=q}}function Wf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ff(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wf(a[e],t)}var Ul=B(null),Pi=B(0);function Pf(e,t){e=ma,V(Pi,e),V(Ul,t),ma=e|t.baseLanes}function xu(){V(Pi,ma),V(Ul,Ul.current)}function Su(){ma=Pi.current,L(Ul),L(Pi)}var za=0,ue=null,Se=null,Ue=null,Ii=!1,Hl=!1,rl=!1,er=0,kn=0,$l=null,_p=0;function qe(){throw Error(u(321))}function ju(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!pt(e[a],t[a]))return!1;return!0}function Au(e,t,a,l,i,r){return za=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?qd:Bd,rl=!1,r=a(l,i),rl=!1,Hl&&(r=ed(t,a,l,i)),If(e),r}function If(e){D.H=rr;var t=Se!==null&&Se.next!==null;if(za=0,Ue=Se=ue=null,Ii=!1,kn=0,$l=null,t)throw Error(u(300));e===null||Ze||(e=e.dependencies,e!==null&&Zi(e)&&(Ze=!0))}function ed(e,t,a,l){ue=e;var i=0;do{if(Hl&&($l=null),kn=0,Hl=!1,25<=i)throw Error(u(301));if(i+=1,Ue=Se=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=Yp,r=t(a,l)}while(Hl);return r}function qp(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Vn(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ue.flags|=1024),t}function Eu(){var e=er!==0;return er=0,e}function Cu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zu(e){if(Ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ii=!1}za=0,Ue=Se=ue=null,Hl=!1,kn=er=0,$l=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function He(){if(Se===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,Se=e;else{if(e===null)throw ue.alternate===null?Error(u(467)):Error(u(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vn(e){var t=kn;return kn+=1,$l===null&&($l=[]),e=Zf($l,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?qd:Bd),e}function tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vn(e);if(e.$$typeof===Z)return lt(e)}throw Error(u(438,String(e)))}function Tu(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=wu(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=it;return t.index++,a}function oa(e,t){return typeof t=="function"?t(e):t}function ar(e){var t=He();return Ru(t,Se,e)}function Ru(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var i=e.baseQueue,r=l.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,l.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=f=null,v=null,z=t,N=!1;do{var q=z.lane&-536870913;if(q!==z.lane?(he&q)===q:(za&q)===q){var w=z.revertLane;if(w===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),q===ql&&(N=!0);else if((za&w)===w){z=z.next,w===ql&&(N=!0);continue}else q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},v===null?(m=v=q,f=r):v=v.next=q,ue.lanes|=w,Na|=w;q=z.action,rl&&a(r,q),r=z.hasEagerState?z.eagerState:a(r,q)}else w={lane:q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},v===null?(m=v=w,f=r):v=v.next=w,ue.lanes|=q,Na|=q;z=z.next}while(z!==null&&z!==t);if(v===null?f=r:v.next=m,!pt(r,e.memoizedState)&&(Ze=!0,N&&(a=Bl,a!==null)))throw a;e.memoizedState=r,e.baseState=f,e.baseQueue=v,l.lastRenderedState=r}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ou(e){var t=He(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);pt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function td(e,t,a){var l=ue,i=He(),r=ge;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var f=!pt((Se||i).memoizedState,a);f&&(i.memoizedState=a,Ze=!0),i=i.queue;var m=nd.bind(null,l,i,e);if(Xn(2048,8,m,[e]),i.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Gl(9,lr(),ld.bind(null,l,i,a,t),null),ze===null)throw Error(u(349));r||(za&124)!==0||ad(l,t,a)}return a}function ad(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=wu(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ld(e,t,a,l){t.value=a,t.getSnapshot=l,id(t)&&rd(e)}function nd(e,t,a){return a(function(){id(t)&&rd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!pt(e,a)}catch{return!0}}function rd(e){var t=Ml(e,2);t!==null&&St(t,e,2)}function Mu(e){var t=st();if(typeof e=="function"){var a=e;if(e=a(),rl){ba(!0);try{a()}finally{ba(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function od(e,t,a,l){return e.baseState=a,Ru(e,Se,typeof l=="function"?l:oa)}function Bp(e,t,a,l,i){if(ir(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};D.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,ud(t,r)):(r.next=a.next,t.pending=a.next=r)}}function ud(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var r=D.T,f={};D.T=f;try{var m=a(i,l),v=D.S;v!==null&&v(f,m),cd(e,t,m)}catch(z){Du(e,t,z)}finally{D.T=r}}else try{r=a(i,l),cd(e,t,r)}catch(z){Du(e,t,z)}}function cd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){sd(e,t,l)},function(l){return Du(e,t,l)}):sd(e,t,a)}function sd(e,t,a){t.status="fulfilled",t.value=a,fd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ud(e,a)))}function Du(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,fd(t),t=t.next;while(t!==l)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function md(e,t){if(ge){var a=ze.formState;if(a!==null){e:{var l=ue;if(ge){if(De){t:{for(var i=De,r=Vt;i.nodeType!==8;){if(!r){i=null;break t}if(i=$t(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){De=$t(i.nextSibling),l=i.data==="F!";break e}}al(l)}l=!1}l&&(t=a[0])}}return a=st(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},a.queue=l,a=Dd.bind(null,ue,l),l.dispatch=a,l=Mu(!1),r=Uu.bind(null,ue,!1,l.queue),l=st(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Bp.bind(null,ue,i,r,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function hd(e){var t=He();return pd(t,Se,e)}function pd(e,t,a){if(t=Ru(e,t,dd)[0],e=ar(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Vn(t)}catch(f){throw f===Hn?Wi:f}else l=t;t=He();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Gl(9,lr(),Up.bind(null,i,a),null)),[l,r,e]}function Up(e,t){e.action=t}function gd(e){var t=He(),a=Se;if(a!==null)return pd(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ue.updateQueue,t===null&&(t=wu(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function lr(){return{destroy:void 0,resource:void 0}}function vd(){return He().memoizedState}function nr(e,t,a,l){var i=st();l=l===void 0?null:l,ue.flags|=e,i.memoizedState=Gl(1|t,lr(),a,l)}function Xn(e,t,a,l){var i=He();l=l===void 0?null:l;var r=i.memoizedState.inst;Se!==null&&l!==null&&ju(l,Se.memoizedState.deps)?i.memoizedState=Gl(t,r,a,l):(ue.flags|=e,i.memoizedState=Gl(1|t,r,a,l))}function yd(e,t){nr(8390656,8,e,t)}function bd(e,t){Xn(2048,8,e,t)}function xd(e,t){return Xn(4,2,e,t)}function Sd(e,t){return Xn(4,4,e,t)}function jd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,a){a=a!=null?a.concat([e]):null,Xn(4,4,jd.bind(null,t,e),a)}function Nu(){}function Ed(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ju(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Cd(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ju(t,l[1]))return l[0];if(l=e(),rl){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[l,t],l}function _u(e,t,a){return a===void 0||(za&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Tm(),ue.lanes|=e,Na|=e,a)}function zd(e,t,a,l){return pt(a,t)?a:Ul.current!==null?(e=_u(e,a,l),pt(e,t)||(Ze=!0),e):(za&42)===0?(Ze=!0,e.memoizedState=a):(e=Tm(),ue.lanes|=e,Na|=e,t)}function wd(e,t,a,l,i){var r=k.p;k.p=r!==0&&8>r?r:8;var f=D.T,m={};D.T=m,Uu(e,!1,t,a);try{var v=i(),z=D.S;if(z!==null&&z(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=Np(v,l);Qn(e,t,N,xt(e))}else Qn(e,t,l,xt(e))}catch(q){Qn(e,t,{then:function(){},status:"rejected",reason:q},xt())}finally{k.p=r,D.T=f}}function Hp(){}function qu(e,t,a,l){if(e.tag!==5)throw Error(u(476));var i=Td(e).queue;wd(e,i,t,I,a===null?Hp:function(){return Rd(e),a(l)})}function Td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rd(e){var t=Td(e).next.queue;Qn(e,t,{},xt())}function Bu(){return lt(si)}function Od(){return He().memoizedState}function Md(){return He().memoizedState}function $p(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=xt();e=Ea(a);var l=Ca(t,e,a);l!==null&&(St(l,t,a),Gn(l,t,a)),t={cache:du()},e.payload=t;return}t=t.return}}function Gp(e,t,a){var l=xt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ir(e)?Nd(t,a):(a=au(e,t,a,l),a!==null&&(St(a,e,l),_d(a,t,l)))}function Dd(e,t,a){var l=xt();Qn(e,t,a,l)}function Qn(e,t,a,l){var i={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ir(e))Nd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,m=r(f,a);if(i.hasEagerState=!0,i.eagerState=m,pt(m,f))return Li(e,t,i,0),ze===null&&Yi(),!1}catch{}finally{}if(a=au(e,t,i,l),a!==null)return St(a,e,l),_d(a,t,l),!0}return!1}function Uu(e,t,a,l){if(l={lane:2,revertLane:pc(),action:l,hasEagerState:!1,eagerState:null,next:null},ir(e)){if(t)throw Error(u(479))}else t=au(e,a,l,2),t!==null&&St(t,e,2)}function ir(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Nd(e,t){Hl=Ii=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function _d(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ys(e,a)}}var rr={readContext:lt,use:tr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe},qd={readContext:lt,use:tr,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:yd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,nr(4194308,4,jd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return nr(4194308,4,e,t)},useInsertionEffect:function(e,t){nr(4,2,e,t)},useMemo:function(e,t){var a=st();t=t===void 0?null:t;var l=e();if(rl){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=st();if(a!==void 0){var i=a(t);if(rl){ba(!0);try{a(t)}finally{ba(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Gp.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Mu(e);var t=e.queue,a=Dd.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Nu,useDeferredValue:function(e,t){var a=st();return _u(a,e,t)},useTransition:function(){var e=Mu(!1);return e=wd.bind(null,ue,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ue,i=st();if(ge){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),ze===null)throw Error(u(349));(he&124)!==0||ad(l,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,yd(nd.bind(null,l,r,e),[e]),l.flags|=2048,Gl(9,lr(),ld.bind(null,l,r,a,t),null),a},useId:function(){var e=st(),t=ze.identifierPrefix;if(ge){var a=na,l=la;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=er++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=_p++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Bu,useFormState:md,useActionState:md,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Uu.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Tu,useCacheRefresh:function(){return st().memoizedState=$p.bind(null,ue)}},Bd={readContext:lt,use:tr,useCallback:Ed,useContext:lt,useEffect:bd,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:Cd,useReducer:ar,useRef:vd,useState:function(){return ar(oa)},useDebugValue:Nu,useDeferredValue:function(e,t){var a=He();return zd(a,Se.memoizedState,e,t)},useTransition:function(){var e=ar(oa)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Vn(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:Bu,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var a=He();return od(a,Se,e,t)},useMemoCache:Tu,useCacheRefresh:Md},Yp={readContext:lt,use:tr,useCallback:Ed,useContext:lt,useEffect:bd,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:Cd,useReducer:Ou,useRef:vd,useState:function(){return Ou(oa)},useDebugValue:Nu,useDeferredValue:function(e,t){var a=He();return Se===null?_u(a,e,t):zd(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ou(oa)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Vn(e),t]},useSyncExternalStore:td,useId:Od,useHostTransitionStatus:Bu,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var a=He();return Se!==null?od(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Md},Yl=null,Zn=0;function or(e){var t=Zn;return Zn+=1,Yl===null&&(Yl=[]),Zf(Yl,e,t)}function Kn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ur(e,t){throw t.$$typeof===M?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){var t=e._init;return t(e._payload)}function Hd(e){function t(A,S){if(e){var C=A.deletions;C===null?(A.deletions=[S],A.flags|=16):C.push(S)}}function a(A,S){if(!e)return null;for(;S!==null;)t(A,S),S=S.sibling;return null}function l(A){for(var S=new Map;A!==null;)A.key!==null?S.set(A.key,A):S.set(A.index,A),A=A.sibling;return S}function i(A,S){return A=aa(A,S),A.index=0,A.sibling=null,A}function r(A,S,C){return A.index=C,e?(C=A.alternate,C!==null?(C=C.index,C<S?(A.flags|=67108866,S):C):(A.flags|=67108866,S)):(A.flags|=1048576,S)}function f(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function m(A,S,C,_){return S===null||S.tag!==6?(S=nu(C,A.mode,_),S.return=A,S):(S=i(S,C),S.return=A,S)}function v(A,S,C,_){var J=C.type;return J===G?N(A,S,C.props.children,_,C.key):S!==null&&(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===we&&Ud(J)===S.type)?(S=i(S,C.props),Kn(S,C),S.return=A,S):(S=Vi(C.type,C.key,C.props,null,A.mode,_),Kn(S,C),S.return=A,S)}function z(A,S,C,_){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=iu(C,A.mode,_),S.return=A,S):(S=i(S,C.children||[]),S.return=A,S)}function N(A,S,C,_,J){return S===null||S.tag!==7?(S=Pa(C,A.mode,_,J),S.return=A,S):(S=i(S,C),S.return=A,S)}function q(A,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=nu(""+S,A.mode,C),S.return=A,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return C=Vi(S.type,S.key,S.props,null,A.mode,C),Kn(C,S),C.return=A,C;case H:return S=iu(S,A.mode,C),S.return=A,S;case we:var _=S._init;return S=_(S._payload),q(A,S,C)}if(Ve(S)||ke(S))return S=Pa(S,A.mode,C,null),S.return=A,S;if(typeof S.then=="function")return q(A,or(S),C);if(S.$$typeof===Z)return q(A,Ki(A,S),C);ur(A,S)}return null}function w(A,S,C,_){var J=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return J!==null?null:m(A,S,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case U:return C.key===J?v(A,S,C,_):null;case H:return C.key===J?z(A,S,C,_):null;case we:return J=C._init,C=J(C._payload),w(A,S,C,_)}if(Ve(C)||ke(C))return J!==null?null:N(A,S,C,_,null);if(typeof C.then=="function")return w(A,S,or(C),_);if(C.$$typeof===Z)return w(A,S,Ki(A,C),_);ur(A,C)}return null}function T(A,S,C,_,J){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A=A.get(C)||null,m(S,A,""+_,J);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case U:return A=A.get(_.key===null?C:_.key)||null,v(S,A,_,J);case H:return A=A.get(_.key===null?C:_.key)||null,z(S,A,_,J);case we:var ce=_._init;return _=ce(_._payload),T(A,S,C,_,J)}if(Ve(_)||ke(_))return A=A.get(C)||null,N(S,A,_,J,null);if(typeof _.then=="function")return T(A,S,C,or(_),J);if(_.$$typeof===Z)return T(A,S,C,Ki(S,_),J);ur(S,_)}return null}function le(A,S,C,_){for(var J=null,ce=null,W=S,ae=S=0,Je=null;W!==null&&ae<C.length;ae++){W.index>ae?(Je=W,W=null):Je=W.sibling;var pe=w(A,W,C[ae],_);if(pe===null){W===null&&(W=Je);break}e&&W&&pe.alternate===null&&t(A,W),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe,W=Je}if(ae===C.length)return a(A,W),ge&&el(A,ae),J;if(W===null){for(;ae<C.length;ae++)W=q(A,C[ae],_),W!==null&&(S=r(W,S,ae),ce===null?J=W:ce.sibling=W,ce=W);return ge&&el(A,ae),J}for(W=l(W);ae<C.length;ae++)Je=T(W,A,ae,C[ae],_),Je!==null&&(e&&Je.alternate!==null&&W.delete(Je.key===null?ae:Je.key),S=r(Je,S,ae),ce===null?J=Je:ce.sibling=Je,ce=Je);return e&&W.forEach(function(La){return t(A,La)}),ge&&el(A,ae),J}function ee(A,S,C,_){if(C==null)throw Error(u(151));for(var J=null,ce=null,W=S,ae=S=0,Je=null,pe=C.next();W!==null&&!pe.done;ae++,pe=C.next()){W.index>ae?(Je=W,W=null):Je=W.sibling;var La=w(A,W,pe.value,_);if(La===null){W===null&&(W=Je);break}e&&W&&La.alternate===null&&t(A,W),S=r(La,S,ae),ce===null?J=La:ce.sibling=La,ce=La,W=Je}if(pe.done)return a(A,W),ge&&el(A,ae),J;if(W===null){for(;!pe.done;ae++,pe=C.next())pe=q(A,pe.value,_),pe!==null&&(S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return ge&&el(A,ae),J}for(W=l(W);!pe.done;ae++,pe=C.next())pe=T(W,A,ae,pe.value,_),pe!==null&&(e&&pe.alternate!==null&&W.delete(pe.key===null?ae:pe.key),S=r(pe,S,ae),ce===null?J=pe:ce.sibling=pe,ce=pe);return e&&W.forEach(function(Lg){return t(A,Lg)}),ge&&el(A,ae),J}function Ae(A,S,C,_){if(typeof C=="object"&&C!==null&&C.type===G&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case U:e:{for(var J=C.key;S!==null;){if(S.key===J){if(J=C.type,J===G){if(S.tag===7){a(A,S.sibling),_=i(S,C.props.children),_.return=A,A=_;break e}}else if(S.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===we&&Ud(J)===S.type){a(A,S.sibling),_=i(S,C.props),Kn(_,C),_.return=A,A=_;break e}a(A,S);break}else t(A,S);S=S.sibling}C.type===G?(_=Pa(C.props.children,A.mode,_,C.key),_.return=A,A=_):(_=Vi(C.type,C.key,C.props,null,A.mode,_),Kn(_,C),_.return=A,A=_)}return f(A);case H:e:{for(J=C.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){a(A,S.sibling),_=i(S,C.children||[]),_.return=A,A=_;break e}else{a(A,S);break}else t(A,S);S=S.sibling}_=iu(C,A.mode,_),_.return=A,A=_}return f(A);case we:return J=C._init,C=J(C._payload),Ae(A,S,C,_)}if(Ve(C))return le(A,S,C,_);if(ke(C)){if(J=ke(C),typeof J!="function")throw Error(u(150));return C=J.call(C),ee(A,S,C,_)}if(typeof C.then=="function")return Ae(A,S,or(C),_);if(C.$$typeof===Z)return Ae(A,S,Ki(A,C),_);ur(A,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(a(A,S.sibling),_=i(S,C),_.return=A,A=_):(a(A,S),_=nu(C,A.mode,_),_.return=A,A=_),f(A)):a(A,S)}return function(A,S,C,_){try{Zn=0;var J=Ae(A,S,C,_);return Yl=null,J}catch(W){if(W===Hn||W===Wi)throw W;var ce=gt(29,W,null,A.mode);return ce.lanes=_,ce.return=A,ce}finally{}}}var Ll=Hd(!0),$d=Hd(!1),Nt=B(null),Xt=null;function wa(e){var t=e.alternate;V(Ye,Ye.current&1),V(Nt,e),Xt===null&&(t===null||Ul.current!==null||t.memoizedState!==null)&&(Xt=e)}function Gd(e){if(e.tag===22){if(V(Ye,Ye.current),V(Nt,e),Xt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Xt=e)}}else Ta()}function Ta(){V(Ye,Ye.current),V(Nt,Nt.current)}function ua(e){L(Nt),Xt===e&&(Xt=null),L(Ye)}var Ye=B(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||wc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Hu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=xt(),i=Ea(l);i.payload=t,a!=null&&(i.callback=a),t=Ca(e,i,l),t!==null&&(St(t,e,l),Gn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=xt(),i=Ea(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ca(e,i,l),t!==null&&(St(t,e,l),Gn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=xt(),l=Ea(a);l.tag=2,t!=null&&(l.callback=t),t=Ca(e,l,a),t!==null&&(St(t,e,a),Gn(t,e,a))}};function Yd(e,t,a,l,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,f):t.prototype&&t.prototype.isPureReactComponent?!On(a,l)||!On(i,r):!0}function Ld(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&$u.enqueueReplaceState(t,t.state,null)}function ol(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function kd(e){sr(e)}function Vd(e){console.error(e)}function Xd(e){sr(e)}function fr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Qd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Gu(e,t,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){fr(e,t)},a}function Zd(e){return e=Ea(e),e.tag=3,e}function Kd(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;e.payload=function(){return i(r)},e.callback=function(){Qd(t,a,l)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Qd(t,a,l),typeof i!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Lp(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&qn(t,a,i,!0),a=Nt.current,a!==null){switch(a.tag){case 13:return Xt===null?sc():a.alternate===null&&Ne===0&&(Ne=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===pu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),dc(e,l,i)),!1;case 22:return a.flags|=65536,l===pu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),dc(e,l,i)),!1}throw Error(u(435,a.tag))}return dc(e,l,i),sc(),!1}if(ge)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==uu&&(e=Error(u(422),{cause:l}),_n(Rt(e,a)))):(l!==uu&&(t=Error(u(423),{cause:l}),_n(Rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Rt(l,a),i=Gu(e.stateNode,l,i),yu(e,i),Ne!==4&&(Ne=2)),!1;var r=Error(u(520),{cause:l});if(r=Rt(r,a),ti===null?ti=[r]:ti.push(r),Ne!==4&&(Ne=2),t===null)return!0;l=Rt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Gu(a.stateNode,l,e),yu(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(_a===null||!_a.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Zd(i),Kd(i,e,a,l),yu(a,i),!1}a=a.return}while(a!==null);return!1}var Jd=Error(u(461)),Ze=!1;function Pe(e,t,a,l){t.child=e===null?$d(t,null,a,l):Ll(t,e.child,a,l)}function Wd(e,t,a,l,i){a=a.render;var r=t.ref;if("ref"in l){var f={};for(var m in l)m!=="ref"&&(f[m]=l[m])}else f=l;return nl(t),l=Au(e,t,a,f,r,i),m=Eu(),e!==null&&!Ze?(Cu(e,t,i),ca(e,t,i)):(ge&&m&&ru(t),t.flags|=1,Pe(e,t,l,i),t.child)}function Fd(e,t,a,l,i){if(e===null){var r=a.type;return typeof r=="function"&&!lu(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Pd(e,t,r,l,i)):(e=Vi(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ku(e,i)){var f=r.memoizedProps;if(a=a.compare,a=a!==null?a:On,a(f,l)&&e.ref===t.ref)return ca(e,t,i)}return t.flags|=1,e=aa(r,l),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,a,l,i){if(e!==null){var r=e.memoizedProps;if(On(r,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=r,Ku(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ca(e,t,i)}return Yu(e,t,a,l,i)}function Id(e,t,a){var l=t.pendingProps,i=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=r!==null?r.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~l}else t.childLanes=0,t.child=null;return em(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ji(t,r!==null?r.cachePool:null),r!==null?Pf(t,r):xu(),Gd(t);else return t.lanes=t.childLanes=536870912,em(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(Ji(t,r.cachePool),Pf(t,r),Ta(),t.memoizedState=null):(e!==null&&Ji(t,null),xu(),Ta());return Pe(e,t,i,a),t.child}function em(e,t,a,l){var i=hu();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ji(t,null),xu(),Gd(t),e!==null&&qn(e,t,l,!0),null}function dr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Yu(e,t,a,l,i){return nl(t),a=Au(e,t,a,l,void 0,i),l=Eu(),e!==null&&!Ze?(Cu(e,t,i),ca(e,t,i)):(ge&&l&&ru(t),t.flags|=1,Pe(e,t,a,i),t.child)}function tm(e,t,a,l,i,r){return nl(t),t.updateQueue=null,a=ed(t,l,a,i),If(e),l=Eu(),e!==null&&!Ze?(Cu(e,t,r),ca(e,t,r)):(ge&&l&&ru(t),t.flags|=1,Pe(e,t,a,r),t.child)}function am(e,t,a,l,i){if(nl(t),t.stateNode===null){var r=Dl,f=a.contextType;typeof f=="object"&&f!==null&&(r=lt(f)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$u,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},gu(t),f=a.contextType,r.context=typeof f=="object"&&f!==null?lt(f):Dl,r.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Hu(t,a,f,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&$u.enqueueReplaceState(r,r.state,null),Ln(t,l,r,i),Yn(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=ol(a,m);r.props=v;var z=r.context,N=a.contextType;f=Dl,typeof N=="object"&&N!==null&&(f=lt(N));var q=a.getDerivedStateFromProps;N=typeof q=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||z!==f)&&Ld(t,r,l,f),Aa=!1;var w=t.memoizedState;r.state=w,Ln(t,l,r,i),Yn(),z=t.memoizedState,m||w!==z||Aa?(typeof q=="function"&&(Hu(t,a,q,l),z=t.memoizedState),(v=Aa||Yd(t,a,v,l,w,z,f))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=z),r.props=l,r.state=z,r.context=f,l=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,vu(e,t),f=t.memoizedProps,N=ol(a,f),r.props=N,q=t.pendingProps,w=r.context,z=a.contextType,v=Dl,typeof z=="object"&&z!==null&&(v=lt(z)),m=a.getDerivedStateFromProps,(z=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==q||w!==v)&&Ld(t,r,l,v),Aa=!1,w=t.memoizedState,r.state=w,Ln(t,l,r,i),Yn();var T=t.memoizedState;f!==q||w!==T||Aa||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof m=="function"&&(Hu(t,a,m,l),T=t.memoizedState),(N=Aa||Yd(t,a,N,l,w,T,v)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(z||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,T,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,T,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),r.props=l,r.state=T,r.context=v,l=N):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,dr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ll(t,e.child,null,i),t.child=Ll(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=r.state,e=t.child):e=ca(e,t,i),e}function lm(e,t,a,l){return Nn(),t.flags|=256,Pe(e,t,a,l),t.child}var Lu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(e){return{baseLanes:e,cachePool:Vf()}}function Vu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=_t),e}function nm(e,t,a){var l=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?wa(t):Ta(),ge){var m=De,v;if(v=m){e:{for(v=m,m=Vt;v.nodeType!==8;){if(!m){m=null;break e}if(v=$t(v.nextSibling),v===null){m=null;break e}}m=v}m!==null?(t.memoizedState={dehydrated:m,treeContext:Ia!==null?{id:la,overflow:na}:null,retryLane:536870912,hydrationErrors:null},v=gt(18,null,null,0),v.stateNode=m,v.return=t,t.child=v,rt=t,De=null,v=!0):v=!1}v||al(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return wc(m)?t.lanes=32:t.lanes=536870912,null;ua(t)}return m=l.children,l=l.fallback,i?(Ta(),i=t.mode,m=mr({mode:"hidden",children:m},i),l=Pa(l,i,a,null),m.return=t,l.return=t,m.sibling=l,t.child=m,i=t.child,i.memoizedState=ku(a),i.childLanes=Vu(e,f,a),t.memoizedState=Lu,l):(wa(t),Xu(t,m))}if(v=e.memoizedState,v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(wa(t),t.flags&=-257,t=Qu(e,t,a)):t.memoizedState!==null?(Ta(),t.child=e.child,t.flags|=128,t=null):(Ta(),i=l.fallback,m=t.mode,l=mr({mode:"visible",children:l.children},m),i=Pa(i,m,a,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,Ll(t,e.child,null,a),l=t.child,l.memoizedState=ku(a),l.childLanes=Vu(e,f,a),t.memoizedState=Lu,t=i);else if(wa(t),wc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var z=f.dgst;f=z,l=Error(u(419)),l.stack="",l.digest=f,_n({value:l,source:null,stack:null}),t=Qu(e,t,a)}else if(Ze||qn(e,t,a,!1),f=(a&e.childLanes)!==0,Ze||f){if(f=ze,f!==null&&(l=a&-a,l=(l&42)!==0?1:To(l),l=(l&(f.suspendedLanes|a))!==0?0:l,l!==0&&l!==v.retryLane))throw v.retryLane=l,Ml(e,l),St(f,e,l),Jd;m.data==="$?"||sc(),t=Qu(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,De=$t(m.nextSibling),rt=t,ge=!0,tl=null,Vt=!1,e!==null&&(Mt[Dt++]=la,Mt[Dt++]=na,Mt[Dt++]=Ia,la=e.id,na=e.overflow,Ia=t),t=Xu(t,l.children),t.flags|=4096);return t}return i?(Ta(),i=l.fallback,m=t.mode,v=e.child,z=v.sibling,l=aa(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,z!==null?i=aa(z,i):(i=Pa(i,m,a,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,m=e.child.memoizedState,m===null?m=ku(a):(v=m.cachePool,v!==null?(z=Ge._currentValue,v=v.parent!==z?{parent:z,pool:z}:v):v=Vf(),m={baseLanes:m.baseLanes|a,cachePool:v}),i.memoizedState=m,i.childLanes=Vu(e,f,a),t.memoizedState=Lu,l):(wa(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Xu(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=gt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qu(e,t,a){return Ll(t,e.child,null,a),e=Xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),su(e.return,t,a)}function Zu(e,t,a,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=i)}function rm(e,t,a){var l=t.pendingProps,i=l.revealOrder,r=l.tail;if(Pe(e,t,l.children,a),l=Ye.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,a,t);else if(e.tag===19)im(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(V(Ye,l),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&cr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Zu(t,!1,i,a,r);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&cr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Zu(t,!0,a,null,r);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Na|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(qn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ku(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zi(e)))}function kp(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ja(t,Ge,e.memoizedState.cache),Nn();break;case 27:case 5:Qa(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ja(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(wa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?nm(e,t,a):(wa(t),e=ca(e,t,a),e!==null?e.sibling:null);wa(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(qn(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return rm(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Ye,Ye.current),l)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,a);case 24:ja(t,Ge,e.memoizedState.cache)}return ca(e,t,a)}function om(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Ku(e,a)&&(t.flags&128)===0)return Ze=!1,kp(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,ge&&(t.flags&1048576)!==0&&Uf(t,Qi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,i=l._init;if(l=i(l._payload),t.type=l,typeof l=="function")lu(l)?(e=ol(l,e),t.tag=1,t=am(null,t,l,e,a)):(t.tag=0,t=Yu(null,t,l,e,a));else{if(l!=null){if(i=l.$$typeof,i===ne){t.tag=11,t=Wd(null,t,l,e,a);break e}else if(i===F){t.tag=14,t=Fd(null,t,l,e,a);break e}}throw t=Pt(l)||l,Error(u(306,t,""))}}return t;case 0:return Yu(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=ol(l,t.pendingProps),am(e,t,l,i,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var r=t.memoizedState;i=r.element,vu(e,t),Ln(t,l,null,a);var f=t.memoizedState;if(l=f.cache,ja(t,Ge,l),l!==r.cache&&fu(t,[Ge],a,!0),Yn(),l=f.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=lm(e,t,l,a);break e}else if(l!==i){i=Rt(Error(u(424)),t),_n(i),t=lm(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=$t(e.firstChild),rt=t,ge=!0,tl=null,Vt=!0,a=$d(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Nn(),l===i){t=ca(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return dr(e,t),e===null?(a=fh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=wr(te.current).createElement(a),l[at]=t,l[ut]=e,et(l,a,e),Qe(l),t.stateNode=l):t.memoizedState=fh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qa(t),e===null&&ge&&(l=t.stateNode=uh(t.type,t.pendingProps,te.current),rt=t,Vt=!0,i=De,Ua(t.type)?(Tc=i,De=$t(l.firstChild)):De=i),Pe(e,t,t.pendingProps.children,a),dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=De)&&(l=vg(l,t.type,t.pendingProps,Vt),l!==null?(t.stateNode=l,rt=t,De=$t(l.firstChild),Vt=!1,i=!0):i=!1),i||al(t)),Qa(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,l=r.children,Ec(i,r)?l=null:f!==null&&Ec(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Au(e,t,qp,null,null,a),si._currentValue=i),dr(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=De)&&(a=yg(a,t.pendingProps,Vt),a!==null?(t.stateNode=a,rt=t,De=null,e=!0):e=!1),e||al(t)),null;case 13:return nm(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ll(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ja(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,nl(t),i=lt(i),l=l(i),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,a);case 15:return Pd(e,t,t.type,t.pendingProps,a);case 19:return rm(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=mr(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=aa(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Id(e,t,a);case 24:return nl(t),l=lt(Ge),e===null?(i=hu(),i===null&&(i=ze,r=du(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:l,cache:i},gu(t),ja(t,Ge,i)):((e.lanes&a)!==0&&(vu(e,t),Ln(t,null,null,a),Yn()),i=e.memoizedState,r=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ja(t,Ge,l)):(l=r.cache,ja(t,Ge,l),l!==i.cache&&fu(t,[Ge],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function sa(e){e.flags|=4}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gh(t)){if(t=Nt.current,t!==null&&((he&4194048)===he?Xt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Xt))throw $n=pu,Xf;e.flags|=8192}}function hr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$s():536870912,e.lanes|=t,Ql|=t)}function Jn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Vp(e,t,a){var l=t.pendingProps;switch(ou(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ra(Ge),tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Dn(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gf())),Me(t),null;case 26:return a=t.memoizedState,e===null?(sa(t),a!==null?(Me(t),um(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(sa(t),Me(t),um(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==l&&sa(t),Me(t),t.flags&=-16777217),null;case 27:It(t),a=te.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Me(t),null}e=P.current,Dn(t)?Hf(t):(e=uh(i,l,a),t.stateNode=e,sa(t))}return Me(t),null;case 5:if(It(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Me(t),null}if(e=P.current,Dn(t))Hf(t);else{switch(i=wr(te.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}e[at]=t,e[ut]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(et(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&sa(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&sa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=te.current,Dn(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=rt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||th(e.nodeValue,a)),e||al(t)}else e=wr(e).createTextNode(l),e[at]=t,t.stateNode=e}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Dn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[at]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else i=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ua(t),t):(ua(t),null)}if(ua(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var r=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),hr(t,t.updateQueue),Me(t),null;case 4:return tt(),e===null&&bc(t.stateNode.containerInfo),Me(t),null;case 10:return ra(t.type),Me(t),null;case 19:if(L(Ye),i=t.memoizedState,i===null)return Me(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)Jn(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=cr(e),r!==null){for(t.flags|=128,Jn(i,!1),e=r.updateQueue,t.updateQueue=e,hr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Bf(a,e),a=a.sibling;return V(Ye,Ye.current&1|2),t.child}e=e.sibling}i.tail!==null&&kt()>vr&&(t.flags|=128,l=!0,Jn(i,!1),t.lanes=4194304)}else{if(!l)if(e=cr(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,hr(t,e),Jn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ge)return Me(t),null}else 2*kt()-i.renderingStartTime>vr&&a!==536870912&&(t.flags|=128,l=!0,Jn(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=kt(),t.sibling=null,e=Ye.current,V(Ye,l?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return ua(t),Su(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&hr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&L(il),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ra(Ge),Me(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Xp(e,t){switch(ou(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(Ge),tt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return It(t),null;case 13:if(ua(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ye),null;case 4:return tt(),null;case 10:return ra(t.type),null;case 22:case 23:return ua(t),Su(),e!==null&&L(il),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(Ge),null;case 25:return null;default:return null}}function cm(e,t){switch(ou(t),t.tag){case 3:ra(Ge),tt();break;case 26:case 27:case 5:It(t);break;case 4:tt();break;case 13:ua(t);break;case 19:L(Ye);break;case 10:ra(t.type);break;case 22:case 23:ua(t),Su(),e!==null&&L(il);break;case 24:ra(Ge)}}function Wn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var r=a.create,f=a.inst;l=r(),f.destroy=l}a=a.next}while(a!==i)}}catch(m){Ce(t,t.return,m)}}function Ra(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&e)===e){var f=l.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var v=a,z=m;try{z()}catch(N){Ce(i,v,N)}}}l=l.next}while(l!==r)}}catch(N){Ce(t,t.return,N)}}function sm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ff(t,a)}catch(l){Ce(e,e.return,l)}}}function fm(e,t,a){a.props=ol(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ce(e,t,l)}}function Fn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Ce(e,t,i)}}function Qt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ce(e,t,i)}else a.current=null}function dm(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Ce(e,e.return,i)}}function Ju(e,t,a){try{var l=e.stateNode;dg(l,e.type,a,t),l[ut]=t}catch(i){Ce(e,e.return,i)}}function mm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=zr));else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Fu(e,t,a),e=e.sibling;e!==null;)Fu(e,t,a),e=e.sibling}function pr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(pr(e,t,a),e=e.sibling;e!==null;)pr(e,t,a),e=e.sibling}function hm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);et(t,l,a),t[at]=e,t[ut]=a}catch(r){Ce(e,e.return,r)}}var fa=!1,Be=!1,Pu=!1,pm=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Qp(e,t){if(e=e.containerInfo,jc=Nr,e=zf(e),Wo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var f=0,m=-1,v=-1,z=0,N=0,q=e,w=null;t:for(;;){for(var T;q!==a||i!==0&&q.nodeType!==3||(m=f+i),q!==r||l!==0&&q.nodeType!==3||(v=f+l),q.nodeType===3&&(f+=q.nodeValue.length),(T=q.firstChild)!==null;)w=q,q=T;for(;;){if(q===e)break t;if(w===a&&++z===i&&(m=f),w===r&&++N===l&&(v=f),(T=q.nextSibling)!==null)break;q=w,w=q.parentNode}q=T}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:e,selectionRange:a},Nr=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var le=ol(a.type,i,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(le,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ce(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)zc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function gm(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(e,a),l&4&&Wn(5,a);break;case 1:if(Oa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Ce(a,a.return,f)}else{var i=ol(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ce(a,a.return,f)}}l&64&&sm(a),l&512&&Fn(a,a.return);break;case 3:if(Oa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ff(e,t)}catch(f){Ce(a,a.return,f)}}break;case 27:t===null&&l&4&&hm(a);case 26:case 5:Oa(e,a),t===null&&l&4&&dm(a),l&512&&Fn(a,a.return);break;case 12:Oa(e,a);break;case 13:Oa(e,a),l&4&&bm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=tg.bind(null,a),bg(e,a))));break;case 22:if(l=a.memoizedState!==null||fa,!l){t=t!==null&&t.memoizedState!==null||Be,i=fa;var r=Be;fa=l,(Be=t)&&!r?Ma(e,a,(a.subtreeFlags&8772)!==0):Oa(e,a),fa=i,Be=r}break;case 30:break;default:Oa(e,a)}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,ft=!1;function da(e,t,a){for(a=a.child;a!==null;)ym(e,t,a),a=a.sibling}function ym(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(yn,a)}catch{}switch(a.tag){case 26:Be||Qt(a,t),da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Qt(a,t);var l=Re,i=ft;Ua(a.type)&&(Re=a.stateNode,ft=!1),da(e,t,a),ri(a.stateNode),Re=l,ft=i;break;case 5:Be||Qt(a,t);case 6:if(l=Re,i=ft,Re=null,da(e,t,a),Re=l,ft=i,Re!==null)if(ft)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(a.stateNode)}catch(r){Ce(a,t,r)}else try{Re.removeChild(a.stateNode)}catch(r){Ce(a,t,r)}break;case 18:Re!==null&&(ft?(e=Re,rh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hi(e)):rh(Re,a.stateNode));break;case 4:l=Re,i=ft,Re=a.stateNode.containerInfo,ft=!0,da(e,t,a),Re=l,ft=i;break;case 0:case 11:case 14:case 15:Be||Ra(2,a,t),Be||Ra(4,a,t),da(e,t,a);break;case 1:Be||(Qt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&fm(a,t,l)),da(e,t,a);break;case 21:da(e,t,a);break;case 22:Be=(l=Be)||a.memoizedState!==null,da(e,t,a),Be=l;break;default:da(e,t,a)}}function bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hi(e)}catch(a){Ce(t,t.return,a)}}function Zp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pm),t;default:throw Error(u(435,e.tag))}}function Iu(e,t){var a=Zp(e);t.forEach(function(l){var i=ag.bind(null,e,l);a.has(l)||(a.add(l),l.then(i,i))})}function vt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],r=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Ua(m.type)){Re=m.stateNode,ft=!1;break e}break;case 5:Re=m.stateNode,ft=!1;break e;case 3:case 4:Re=m.stateNode.containerInfo,ft=!0;break e}m=m.return}if(Re===null)throw Error(u(160));ym(r,f,i),Re=null,ft=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xm(t,e),t=t.sibling}var Ht=null;function xm(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),yt(e),l&4&&(Ra(3,e,e.return),Wn(3,e),Ra(5,e,e.return));break;case 1:vt(t,e),yt(e),l&512&&(Be||a===null||Qt(a,a.return)),l&64&&fa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Ht;if(vt(t,e),yt(e),l&512&&(Be||a===null||Qt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Sn]||r[at]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(l),i.head.insertBefore(r,i.querySelector("head > title"))),et(r,l,a),r[at]=e,Qe(r),l=r;break e;case"link":var f=hh("link","href",i).get(l+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}r=i.createElement(l),et(r,l,a),i.head.appendChild(r);break;case"meta":if(f=hh("meta","content",i).get(l+(a.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}r=i.createElement(l),et(r,l,a),i.head.appendChild(r);break;default:throw Error(u(468,l))}r[at]=e,Qe(r),l=r}e.stateNode=l}else ph(i,e.type,e.stateNode);else e.stateNode=mh(i,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?ph(i,e.type,e.stateNode):mh(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:vt(t,e),yt(e),l&512&&(Be||a===null||Qt(a,a.return)),a!==null&&l&4&&Ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vt(t,e),yt(e),l&512&&(Be||a===null||Qt(a,a.return)),e.flags&32){i=e.stateNode;try{El(i,"")}catch(T){Ce(e,e.return,T)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Ju(e,i,a!==null?a.memoizedProps:i)),l&1024&&(Pu=!0);break;case 6:if(vt(t,e),yt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(T){Ce(e,e.return,T)}}break;case 3:if(Or=null,i=Ht,Ht=Tr(t.containerInfo),vt(t,e),Ht=i,yt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(T){Ce(e,e.return,T)}Pu&&(Pu=!1,Sm(e));break;case 4:l=Ht,Ht=Tr(e.stateNode.containerInfo),vt(t,e),yt(e),Ht=l;break;case 12:vt(t,e),yt(e);break;case 13:vt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=kt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Iu(e,l)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,z=fa,N=Be;if(fa=z||i,Be=N||v,vt(t,e),Be=N,fa=z,yt(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||fa||Be||ul(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=v.stateNode;var q=v.memoizedProps.style,w=q!=null&&q.hasOwnProperty("display")?q.display:null;m.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(T){Ce(v,v.return,T)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(T){Ce(v,v.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Iu(e,a))));break;case 19:vt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Iu(e,l)));break;case 30:break;case 21:break;default:vt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(mm(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,r=Wu(e);pr(e,r,i);break;case 5:var f=a.stateNode;a.flags&32&&(El(f,""),a.flags&=-33);var m=Wu(e);pr(e,m,f);break;case 3:case 4:var v=a.stateNode.containerInfo,z=Wu(e);Fu(e,z,v);break;default:throw Error(u(161))}}catch(N){Ce(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gm(e,t.alternate,t),t=t.sibling}function ul(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),ul(t);break;case 1:Qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&fm(t,t.return,a),ul(t);break;case 27:ri(t.stateNode);case 26:case 5:Qt(t,t.return),ul(t);break;case 22:t.memoizedState===null&&ul(t);break;case 30:ul(t);break;default:ul(t)}e=e.sibling}}function Ma(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Ma(i,r,a),Wn(4,r);break;case 1:if(Ma(i,r,a),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Ce(l,l.return,z)}if(l=r,i=l.updateQueue,i!==null){var m=l.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Wf(v[i],m)}catch(z){Ce(l,l.return,z)}}a&&f&64&&sm(r),Fn(r,r.return);break;case 27:hm(r);case 26:case 5:Ma(i,r,a),a&&l===null&&f&4&&dm(r),Fn(r,r.return);break;case 12:Ma(i,r,a);break;case 13:Ma(i,r,a),a&&f&4&&bm(i,r);break;case 22:r.memoizedState===null&&Ma(i,r,a),Fn(r,r.return);break;case 30:break;default:Ma(i,r,a)}t=t.sibling}}function ec(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bn(a))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bn(e))}function Zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(e,t,a,l),t=t.sibling}function jm(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,l),i&2048&&Wn(9,t);break;case 1:Zt(e,t,a,l);break;case 3:Zt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bn(e)));break;case 12:if(i&2048){Zt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(t,t.return,v)}}else Zt(e,t,a,l);break;case 13:Zt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Zt(e,t,a,l):Pn(e,t):r._visibility&2?Zt(e,t,a,l):(r._visibility|=2,kl(e,t,a,l,(t.subtreeFlags&10256)!==0)),i&2048&&ec(f,t);break;case 24:Zt(e,t,a,l),i&2048&&tc(t.alternate,t);break;default:Zt(e,t,a,l)}}function kl(e,t,a,l,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,m=a,v=l,z=f.flags;switch(f.tag){case 0:case 11:case 15:kl(r,f,m,v,i),Wn(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?kl(r,f,m,v,i):Pn(r,f):(N._visibility|=2,kl(r,f,m,v,i)),i&&z&2048&&ec(f.alternate,f);break;case 24:kl(r,f,m,v,i),i&&z&2048&&tc(f.alternate,f);break;default:kl(r,f,m,v,i)}t=t.sibling}}function Pn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:Pn(a,l),i&2048&&ec(l.alternate,l);break;case 24:Pn(a,l),i&2048&&tc(l.alternate,l);break;default:Pn(a,l)}t=t.sibling}}var In=8192;function Vl(e){if(e.subtreeFlags&In)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 26:Vl(e),e.flags&In&&e.memoizedState!==null&&Dg(Ht,e.memoizedState,e.memoizedProps);break;case 5:Vl(e);break;case 3:case 4:var t=Ht;Ht=Tr(e.stateNode.containerInfo),Vl(e),Ht=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=In,In=16777216,Vl(e),In=t):Vl(e));break;default:Vl(e)}}function Em(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,zm(l,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cm(e),e=e.sibling}function Cm(e){switch(e.tag){case 0:case 11:case 15:ei(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:ei(e);break;case 12:ei(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gr(e)):ei(e);break;default:ei(e)}}function gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,zm(l,e)}Em(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),gr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,gr(t));break;default:gr(t)}e=e.sibling}}function zm(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ke=l;else e:for(a=e;Ke!==null;){l=Ke;var i=l.sibling,r=l.return;if(vm(l),l===a){Ke=null;break e}if(i!==null){i.return=r,Ke=i;break e}Ke=r}}}var Kp={getCacheForType:function(e){var t=lt(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Jp=typeof WeakMap=="function"?WeakMap:Map,be=0,ze=null,de=null,he=0,xe=0,bt=null,Da=!1,Xl=!1,ac=!1,ma=0,Ne=0,Na=0,cl=0,lc=0,_t=0,Ql=0,ti=null,dt=null,nc=!1,ic=0,vr=1/0,yr=null,_a=null,Ie=0,qa=null,Zl=null,Kl=0,rc=0,oc=null,wm=null,ai=0,uc=null;function xt(){if((be&2)!==0&&he!==0)return he&-he;if(D.T!==null){var e=ql;return e!==0?e:pc()}return Ls()}function Tm(){_t===0&&(_t=(he&536870912)===0||ge?Hs():536870912);var e=Nt.current;return e!==null&&(e.flags|=32),_t}function St(e,t,a){(e===ze&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Jl(e,0),Ba(e,he,_t,!1)),xn(e,a),((be&2)===0||e!==ze)&&(e===ze&&((be&2)===0&&(cl|=a),Ne===4&&Ba(e,he,_t,!1)),Kt(e))}function Rm(e,t,a){if((be&6)!==0)throw Error(u(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||bn(e,t),i=l?Pp(e,t):fc(e,t,!0),r=l;do{if(i===0){Xl&&!l&&Ba(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Wp(a)){i=fc(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=ti;var v=m.current.memoizedState.isDehydrated;if(v&&(Jl(m,f).flags|=256),f=fc(m,f,!1),f!==2){if(ac&&!v){m.errorRecoveryDisabledLanes|=r,cl|=r,i=4;break e}r=dt,dt=i,r!==null&&(dt===null?dt=r:dt.push.apply(dt,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Jl(e,0),Ba(e,t,0,!0);break}e:{switch(l=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ba(l,t,_t,!Da);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=ic+300-kt(),10<i)){if(Ba(l,t,_t,!Da),Ri(l,0,!0)!==0)break e;l.timeoutHandle=nh(Om.bind(null,l,a,dt,yr,nc,t,_t,cl,Ql,Da,r,2,-0,0),i);break e}Om(l,a,dt,yr,nc,t,_t,cl,Ql,Da,r,0,-0,0)}}break}while(!0);Kt(e)}function Om(e,t,a,l,i,r,f,m,v,z,N,q,w,T){if(e.timeoutHandle=-1,q=t.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(ci={stylesheets:null,count:0,unsuspend:Mg},Am(t),q=Ng(),q!==null)){e.cancelPendingCommit=q(Um.bind(null,e,t,r,a,l,i,f,m,v,N,1,w,T)),Ba(e,r,f,!z);return}Um(e,t,r,a,l,i,f,m,v)}function Wp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],r=i.getSnapshot;i=i.value;try{if(!pt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ba(e,t,a,l){t&=~lc,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var r=31-ht(i),f=1<<r;l[r]=-1,i&=~f}a!==0&&Gs(e,a,t)}function br(){return(be&6)===0?(li(0),!1):!0}function cc(){if(de!==null){if(xe===0)var e=de.return;else e=de,ia=ll=null,zu(e),Yl=null,Zn=0,e=de;for(;e!==null;)cm(e.alternate,e),e=e.return;de=null}}function Jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),cc(),ze=e,de=a=aa(e.current,null),he=t,xe=0,bt=null,Da=!1,Xl=bn(e,t),ac=!1,Ql=_t=lc=cl=Na=Ne=0,dt=ti=null,nc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-ht(l),r=1<<i;t|=e[i],l&=~r}return ma=t,Yi(),a}function Mm(e,t){ue=null,D.H=rr,t===Hn||t===Wi?(t=Kf(),xe=3):t===Xf?(t=Kf(),xe=4):xe=t===Jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,de===null&&(Ne=1,fr(e,Rt(t,e.current)))}function Dm(){var e=D.H;return D.H=rr,e===null?rr:e}function Nm(){var e=D.A;return D.A=Kp,e}function sc(){Ne=4,Da||(he&4194048)!==he&&Nt.current!==null||(Xl=!0),(Na&134217727)===0&&(cl&134217727)===0||ze===null||Ba(ze,he,_t,!1)}function fc(e,t,a){var l=be;be|=2;var i=Dm(),r=Nm();(ze!==e||he!==t)&&(yr=null,Jl(e,t)),t=!1;var f=Ne;e:do try{if(xe!==0&&de!==null){var m=de,v=bt;switch(xe){case 8:cc(),f=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var z=xe;if(xe=0,bt=null,Wl(e,m,v,z),a&&Xl){f=0;break e}break;default:z=xe,xe=0,bt=null,Wl(e,m,v,z)}}Fp(),f=Ne;break}catch(N){Mm(e,N)}while(!0);return t&&e.shellSuspendCounter++,ia=ll=null,be=l,D.H=i,D.A=r,de===null&&(ze=null,he=0,Yi()),f}function Fp(){for(;de!==null;)_m(de)}function Pp(e,t){var a=be;be|=2;var l=Dm(),i=Nm();ze!==e||he!==t?(yr=null,vr=kt()+500,Jl(e,t)):Xl=bn(e,t);e:do try{if(xe!==0&&de!==null){t=de;var r=bt;t:switch(xe){case 1:xe=0,bt=null,Wl(e,t,r,1);break;case 2:case 9:if(Qf(r)){xe=0,bt=null,qm(t);break}t=function(){xe!==2&&xe!==9||ze!==e||(xe=7),Kt(e)},r.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Qf(r)?(xe=0,bt=null,qm(t)):(xe=0,bt=null,Wl(e,t,r,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var m=de;if(!f||gh(f)){xe=0,bt=null;var v=m.sibling;if(v!==null)de=v;else{var z=m.return;z!==null?(de=z,xr(z)):de=null}break t}}xe=0,bt=null,Wl(e,t,r,5);break;case 6:xe=0,bt=null,Wl(e,t,r,6);break;case 8:cc(),Ne=6;break e;default:throw Error(u(462))}}Ip();break}catch(N){Mm(e,N)}while(!0);return ia=ll=null,D.H=l,D.A=i,be=a,de!==null?0:(ze=null,he=0,Yi(),Ne)}function Ip(){for(;de!==null&&!S0();)_m(de)}function _m(e){var t=om(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function qm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=tm(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=tm(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:zu(t);default:cm(a,t),t=de=Bf(t,ma),t=om(a,t,ma)}e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function Wl(e,t,a,l){ia=ll=null,zu(t),Yl=null,Zn=0;var i=t.return;try{if(Lp(e,i,t,a,he)){Ne=1,fr(e,Rt(a,e.current)),de=null;return}}catch(r){if(i!==null)throw de=i,r;Ne=1,fr(e,Rt(a,e.current)),de=null;return}t.flags&32768?(ge||l===1?e=!0:Xl||(he&536870912)!==0?e=!1:(Da=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bm(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){Bm(t,Da);return}e=t.return;var a=Vp(t.alternate,t,ma);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ne===0&&(Ne=5)}function Bm(e,t){do{var a=Xp(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ne=6,de=null}function Um(e,t,a,l,i,r,f,m,v){e.cancelPendingCommit=null;do Sr();while(Ie!==0);if((be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=tu,M0(e,a,r,f,m,v),e===ze&&(de=ze=null,he=0),Zl=t,qa=e,Kl=a,rc=r,oc=i,wm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lg(zi,function(){return Lm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,i=k.p,k.p=2,f=be,be|=4;try{Qp(e,t,a)}finally{be=f,k.p=i,D.T=l}}Ie=1,Hm(),$m(),Gm()}}function Hm(){if(Ie===1){Ie=0;var e=qa,t=Zl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=k.p;k.p=2;var i=be;be|=4;try{xm(t,e);var r=Ac,f=zf(e.containerInfo),m=r.focusedElem,v=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&Cf(m.ownerDocument.documentElement,m)){if(v!==null&&Wo(m)){var z=v.start,N=v.end;if(N===void 0&&(N=z),"selectionStart"in m)m.selectionStart=z,m.selectionEnd=Math.min(N,m.value.length);else{var q=m.ownerDocument||document,w=q&&q.defaultView||window;if(w.getSelection){var T=w.getSelection(),le=m.textContent.length,ee=Math.min(v.start,le),Ae=v.end===void 0?ee:Math.min(v.end,le);!T.extend&&ee>Ae&&(f=Ae,Ae=ee,ee=f);var A=Ef(m,ee),S=Ef(m,Ae);if(A&&S&&(T.rangeCount!==1||T.anchorNode!==A.node||T.anchorOffset!==A.offset||T.focusNode!==S.node||T.focusOffset!==S.offset)){var C=q.createRange();C.setStart(A.node,A.offset),T.removeAllRanges(),ee>Ae?(T.addRange(C),T.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),T.addRange(C))}}}}for(q=[],T=m;T=T.parentNode;)T.nodeType===1&&q.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<q.length;m++){var _=q[m];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Nr=!!jc,Ac=jc=null}finally{be=i,k.p=l,D.T=a}}e.current=t,Ie=2}}function $m(){if(Ie===2){Ie=0;var e=qa,t=Zl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=k.p;k.p=2;var i=be;be|=4;try{gm(e,t.alternate,t)}finally{be=i,k.p=l,D.T=a}}Ie=3}}function Gm(){if(Ie===4||Ie===3){Ie=0,j0();var e=qa,t=Zl,a=Kl,l=wm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,Zl=qa=null,Ym(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(_a=null),Ro(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(yn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,i=k.p,k.p=2,D.T=null;try{for(var r=e.onRecoverableError,f=0;f<l.length;f++){var m=l[f];r(m.value,{componentStack:m.stack})}}finally{D.T=t,k.p=i}}(Kl&3)!==0&&Sr(),Kt(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===uc?ai++:(ai=0,uc=e):ai=0,li(0)}}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bn(t)))}function Sr(e){return Hm(),$m(),Gm(),Lm()}function Lm(){if(Ie!==5)return!1;var e=qa,t=rc;rc=0;var a=Ro(Kl),l=D.T,i=k.p;try{k.p=32>a?32:a,D.T=null,a=oc,oc=null;var r=qa,f=Kl;if(Ie=0,Zl=qa=null,Kl=0,(be&6)!==0)throw Error(u(331));var m=be;if(be|=4,Cm(r.current),jm(r,r.current,f,a),be=m,li(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(yn,r)}catch{}return!0}finally{k.p=i,D.T=l,Ym(e,t)}}function km(e,t,a){t=Rt(a,t),t=Gu(e.stateNode,t,2),e=Ca(e,t,2),e!==null&&(xn(e,2),Kt(e))}function Ce(e,t,a){if(e.tag===3)km(e,e,a);else for(;t!==null;){if(t.tag===3){km(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_a===null||!_a.has(l))){e=Rt(a,e),a=Zd(2),l=Ca(t,a,2),l!==null&&(Kd(a,l,t,e),xn(l,2),Kt(l));break}}t=t.return}}function dc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Jp;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(ac=!0,i.add(a),e=eg.bind(null,e,t,a),t.then(e,e))}function eg(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(he&a)===a&&(Ne===4||Ne===3&&(he&62914560)===he&&300>kt()-ic?(be&2)===0&&Jl(e,0):lc|=a,Ql===he&&(Ql=0)),Kt(e)}function Vm(e,t){t===0&&(t=$s()),e=Ml(e,t),e!==null&&(xn(e,t),Kt(e))}function tg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vm(e,a)}function ag(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Vm(e,a)}function lg(e,t){return Co(e,t)}var jr=null,Fl=null,mc=!1,Ar=!1,hc=!1,sl=0;function Kt(e){e!==Fl&&e.next===null&&(Fl===null?jr=Fl=e:Fl=Fl.next=e),Ar=!0,mc||(mc=!0,ig())}function li(e,t){if(!hc&&Ar){hc=!0;do for(var a=!1,l=jr;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var f=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-ht(42|e)+1)-1,r&=i&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Km(l,r))}else r=he,r=Ri(l,l===ze?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||bn(l,r)||(a=!0,Km(l,r));l=l.next}while(a);hc=!1}}function ng(){Xm()}function Xm(){Ar=mc=!1;var e=0;sl!==0&&(mg()&&(e=sl),sl=0);for(var t=kt(),a=null,l=jr;l!==null;){var i=l.next,r=Qm(l,t);r===0?(l.next=null,a===null?jr=i:a.next=i,i===null&&(Fl=a)):(a=l,(e!==0||(r&3)!==0)&&(Ar=!0)),l=i}li(e)}function Qm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-ht(r),m=1<<f,v=i[f];v===-1?((m&a)===0||(m&l)!==0)&&(i[f]=O0(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=ze,a=he,a=Ri(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&zo(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||bn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&zo(l),Ro(a)){case 2:case 8:a=Bs;break;case 32:a=zi;break;case 268435456:a=Us;break;default:a=zi}return l=Zm.bind(null,e),a=Co(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&zo(l),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sr()&&e.callbackNode!==a)return null;var l=he;return l=Ri(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rm(e,l,t),Qm(e,kt()),e.callbackNode!=null&&e.callbackNode===a?Zm.bind(null,e):null)}function Km(e,t){if(Sr())return null;Rm(e,t,!0)}function ig(){pg(function(){(be&6)!==0?Co(qs,ng):Xm()})}function pc(){return sl===0&&(sl=Hs()),sl}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_i(""+e)}function Wm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function rg(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var r=Jm((i[ut]||null).action),f=l.submitter;f&&(t=(t=f[ut]||null)?Jm(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var m=new Hi("action","action",null,l,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(sl!==0){var v=f?Wm(i,f):new FormData(i);qu(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=f?Wm(i,f):new FormData(i),qu(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var gc=0;gc<eu.length;gc++){var vc=eu[gc],og=vc.toLowerCase(),ug=vc[0].toUpperCase()+vc.slice(1);Ut(og,"on"+ug)}Ut(Rf,"onAnimationEnd"),Ut(Of,"onAnimationIteration"),Ut(Mf,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(Cp,"onTransitionRun"),Ut(zp,"onTransitionStart"),Ut(wp,"onTransitionCancel"),Ut(Df,"onTransitionEnd"),Sl("onMouseEnter",["mouseout","mouseover"]),Sl("onMouseLeave",["mouseout","mouseover"]),Sl("onPointerEnter",["pointerout","pointerover"]),Sl("onPointerLeave",["pointerout","pointerover"]),Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function Fm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var f=l.length-1;0<=f;f--){var m=l[f],v=m.instance,z=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=z;try{r(i)}catch(N){sr(N)}i.currentTarget=null,r=v}else for(f=0;f<l.length;f++){if(m=l[f],v=m.instance,z=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=z;try{r(i)}catch(N){sr(N)}i.currentTarget=null,r=v}}}}function me(e,t){var a=t[Oo];a===void 0&&(a=t[Oo]=new Set);var l=e+"__bubble";a.has(l)||(Pm(t,e,2,!1),a.add(l))}function yc(e,t,a){var l=0;t&&(l|=4),Pm(a,e,l,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function bc(e){if(!e[Er]){e[Er]=!0,Vs.forEach(function(a){a!=="selectionchange"&&(cg.has(a)||yc(a,!1,e),yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,yc("selectionchange",!1,t))}}function Pm(e,t,a,l){switch(jh(t)){case 2:var i=Bg;break;case 8:i=Ug;break;default:i=Nc}a=i.bind(null,t,a,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function xc(e,t,a,l,i){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var m=l.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=l.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=yl(m),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){l=r=f;continue e}m=m.parentNode}}l=l.return}nf(function(){var z=r,N=$o(a),q=[];e:{var w=Nf.get(e);if(w!==void 0){var T=Hi,le=e;switch(e){case"keypress":if(Bi(a)===0)break e;case"keydown":case"keyup":T=lp;break;case"focusin":le="focus",T=Xo;break;case"focusout":le="blur",T=Xo;break;case"beforeblur":case"afterblur":T=Xo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=rp;break;case Rf:case Of:case Mf:T=K0;break;case Df:T=up;break;case"scroll":case"scrollend":T=k0;break;case"wheel":T=sp;break;case"copy":case"cut":case"paste":T=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=sf;break;case"toggle":case"beforetoggle":T=dp}var ee=(t&4)!==0,Ae=!ee&&(e==="scroll"||e==="scrollend"),A=ee?w!==null?w+"Capture":null:w;ee=[];for(var S=z,C;S!==null;){var _=S;if(C=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||C===null||A===null||(_=An(S,A),_!=null&&ee.push(ii(S,_,C))),Ae)break;S=S.return}0<ee.length&&(w=new T(w,le,null,a,N),q.push({event:w,listeners:ee}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",w&&a!==Ho&&(le=a.relatedTarget||a.fromElement)&&(yl(le)||le[vl]))break e;if((T||w)&&(w=N.window===N?N:(w=N.ownerDocument)?w.defaultView||w.parentWindow:window,T?(le=a.relatedTarget||a.toElement,T=z,le=le?yl(le):null,le!==null&&(Ae=h(le),ee=le.tag,le!==Ae||ee!==5&&ee!==27&&ee!==6)&&(le=null)):(T=null,le=z),T!==le)){if(ee=uf,_="onMouseLeave",A="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=sf,_="onPointerLeave",A="onPointerEnter",S="pointer"),Ae=T==null?w:jn(T),C=le==null?w:jn(le),w=new ee(_,S+"leave",T,a,N),w.target=Ae,w.relatedTarget=C,_=null,yl(N)===z&&(ee=new ee(A,S+"enter",le,a,N),ee.target=C,ee.relatedTarget=Ae,_=ee),Ae=_,T&&le)t:{for(ee=T,A=le,S=0,C=ee;C;C=Pl(C))S++;for(C=0,_=A;_;_=Pl(_))C++;for(;0<S-C;)ee=Pl(ee),S--;for(;0<C-S;)A=Pl(A),C--;for(;S--;){if(ee===A||A!==null&&ee===A.alternate)break t;ee=Pl(ee),A=Pl(A)}ee=null}else ee=null;T!==null&&Im(q,w,T,ee,!1),le!==null&&Ae!==null&&Im(q,Ae,le,ee,!0)}}e:{if(w=z?jn(z):window,T=w.nodeName&&w.nodeName.toLowerCase(),T==="select"||T==="input"&&w.type==="file")var J=yf;else if(gf(w))if(bf)J=jp;else{J=xp;var ce=bp}else T=w.nodeName,!T||T.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?z&&Uo(z.elementType)&&(J=yf):J=Sp;if(J&&(J=J(e,z))){vf(q,J,a,N);break e}ce&&ce(e,w,z),e==="focusout"&&z&&w.type==="number"&&z.memoizedProps.value!=null&&Bo(w,"number",w.value)}switch(ce=z?jn(z):window,e){case"focusin":(gf(ce)||ce.contentEditable==="true")&&(Tl=ce,Fo=z,Mn=null);break;case"focusout":Mn=Fo=Tl=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,wf(q,a,N);break;case"selectionchange":if(Ep)break;case"keydown":case"keyup":wf(q,a,N)}var W;if(Zo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else wl?hf(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(ff&&a.locale!=="ko"&&(wl||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&wl&&(W=rf()):(Sa=N,Lo="value"in Sa?Sa.value:Sa.textContent,wl=!0)),ce=Cr(z,ae),0<ce.length&&(ae=new cf(ae,e,null,a,N),q.push({event:ae,listeners:ce}),W?ae.data=W:(W=pf(a),W!==null&&(ae.data=W)))),(W=hp?pp(e,a):gp(e,a))&&(ae=Cr(z,"onBeforeInput"),0<ae.length&&(ce=new cf("onBeforeInput","beforeinput",null,a,N),q.push({event:ce,listeners:ae}),ce.data=W)),rg(q,e,z,a,N)}Fm(q,t)})}function ii(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Cr(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=An(e,a),i!=null&&l.unshift(ii(e,i,r)),i=An(e,t),i!=null&&l.push(ii(e,i,r))),e.tag===3)return l;e=e.return}return[]}function Pl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,t,a,l,i){for(var r=t._reactName,f=[];a!==null&&a!==l;){var m=a,v=m.alternate,z=m.stateNode;if(m=m.tag,v!==null&&v===l)break;m!==5&&m!==26&&m!==27||z===null||(v=z,i?(z=An(a,r),z!=null&&f.unshift(ii(a,z,v))):i||(z=An(a,r),z!=null&&f.push(ii(a,z,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var sg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(sg,`
`).replace(fg,"")}function th(e,t){return t=eh(t),eh(e)===t}function zr(){}function je(e,t,a,l,i,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||El(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&El(e,""+l);break;case"className":Mi(e,"class",l);break;case"tabIndex":Mi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(e,a,l);break;case"style":af(e,l,r);break;case"data":if(t!=="object"){Mi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_i(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",i.name,i,null),je(e,t,"formEncType",i.formEncType,i,null),je(e,t,"formMethod",i.formMethod,i,null),je(e,t,"formTarget",i.formTarget,i,null)):(je(e,t,"encType",i.encType,i,null),je(e,t,"method",i.method,i,null),je(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=_i(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=zr);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=_i(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":me("beforetoggle",e),me("toggle",e),Oi(e,"popover",l);break;case"xlinkActuate":ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ea(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ea(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ea(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ea(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Y0.get(a)||a,Oi(e,a,l))}}function Sc(e,t,a,l,i,r){switch(a){case"style":af(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?El(e,l):(typeof l=="number"||typeof l=="bigint")&&El(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ut]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Oi(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var f=a[r];if(f!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,r,f,a,null)}}i&&je(e,t,"srcSet",a.srcSet,a,null),l&&je(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=r=f=i=null,v=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":i=N;break;case"type":f=N;break;case"checked":v=N;break;case"defaultChecked":z=N;break;case"value":r=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:je(e,t,l,N,a,null)}}Ps(e,r,m,v,z,f,i,!1),Di(e);return;case"select":me("invalid",e),l=f=r=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":l=m;default:je(e,t,i,m,a,null)}t=r,a=f,e.multiple=!!l,t!=null?Al(e,!!l,t,!1):a!=null&&Al(e,!!l,a,!0);return;case"textarea":me("invalid",e),r=i=l=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":l=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:je(e,t,f,m,a,null)}ef(e,l,i,r),Di(e);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:je(e,t,v,l,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<ni.length;l++)me(ni[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:je(e,t,z,l,a,null)}return;default:if(Uo(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&Sc(e,t,N,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&je(e,t,m,l,a,null))}function dg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,m=null,v=null,z=null,N=null;for(T in a){var q=a[T];if(a.hasOwnProperty(T)&&q!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":v=q;default:l.hasOwnProperty(T)||je(e,t,T,null,l,q)}}for(var w in l){var T=l[w];if(q=a[w],l.hasOwnProperty(w)&&(T!=null||q!=null))switch(w){case"type":r=T;break;case"name":i=T;break;case"checked":z=T;break;case"defaultChecked":N=T;break;case"value":f=T;break;case"defaultValue":m=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:T!==q&&je(e,t,w,T,l,q)}}qo(e,f,m,v,z,N,r,i);return;case"select":T=f=m=w=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":T=v;default:l.hasOwnProperty(r)||je(e,t,r,null,l,v)}for(i in l)if(r=l[i],v=a[i],l.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":w=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==v&&je(e,t,i,r,l,v)}t=m,a=f,l=T,w!=null?Al(e,!!a,w,!1):!!l!=!!a&&(t!=null?Al(e,!!a,t,!0):Al(e,!!a,a?[]:"",!1));return;case"textarea":T=w=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:je(e,t,m,null,l,i)}for(f in l)if(i=l[f],r=a[f],l.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":w=i;break;case"defaultValue":T=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&je(e,t,f,i,l,r)}Is(e,w,T);return;case"option":for(var le in a)if(w=a[le],a.hasOwnProperty(le)&&w!=null&&!l.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:je(e,t,le,null,l,w)}for(v in l)if(w=l[v],T=a[v],l.hasOwnProperty(v)&&w!==T&&(w!=null||T!=null))switch(v){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:je(e,t,v,w,l,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)w=a[ee],a.hasOwnProperty(ee)&&w!=null&&!l.hasOwnProperty(ee)&&je(e,t,ee,null,l,w);for(z in l)if(w=l[z],T=a[z],l.hasOwnProperty(z)&&w!==T&&(w!=null||T!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:je(e,t,z,w,l,T)}return;default:if(Uo(t)){for(var Ae in a)w=a[Ae],a.hasOwnProperty(Ae)&&w!==void 0&&!l.hasOwnProperty(Ae)&&Sc(e,t,Ae,void 0,l,w);for(N in l)w=l[N],T=a[N],!l.hasOwnProperty(N)||w===T||w===void 0&&T===void 0||Sc(e,t,N,w,l,T);return}}for(var A in a)w=a[A],a.hasOwnProperty(A)&&w!=null&&!l.hasOwnProperty(A)&&je(e,t,A,null,l,w);for(q in l)w=l[q],T=a[q],!l.hasOwnProperty(q)||w===T||w==null&&T==null||je(e,t,q,w,l,T)}var jc=null,Ac=null;function wr(e){return e.nodeType===9?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cc=null;function mg(){var e=window.event;return e&&e.type==="popstate"?e===Cc?!1:(Cc=e,!0):(Cc=null,!1)}var nh=typeof setTimeout=="function"?setTimeout:void 0,hg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,pg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(gg)}:nh;function gg(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function rh(e,t){var a=t,l=0,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<l&&8>l){a=l;var f=e.ownerDocument;if(a&1&&ri(f.documentElement),a&2&&ri(f.body),a&4)for(a=f.head,ri(a),f=a.firstChild;f;){var m=f.nextSibling,v=f.nodeName;f[Sn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=m}}if(i===0){e.removeChild(r),hi(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:l=a.charCodeAt(0)-48;else l=0;a=r}while(a);hi(t)}function zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zc(a),Mo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vg(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Sn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=$t(e.nextSibling),e===null)break}return null}function yg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=$t(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function bg(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Tc=null;function oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function uh(e,t,a){switch(t=wr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ri(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mo(e)}var qt=new Map,ch=new Set;function Tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=k.d;k.d={f:xg,r:Sg,D:jg,C:Ag,L:Eg,m:Cg,X:wg,S:zg,M:Tg};function xg(){var e=ha.f(),t=br();return e||t}function Sg(e){var t=bl(e);t!==null&&t.tag===5&&t.type==="form"?Rd(t):ha.r(e)}var Il=typeof document>"u"?null:document;function sh(e,t,a){var l=Il;if(l&&typeof t=="string"&&t){var i=Tt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),ch.has(i)||(ch.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),et(t,"link",e),Qe(t),l.head.appendChild(t)))}}function jg(e){ha.D(e),sh("dns-prefetch",e,null)}function Ag(e,t){ha.C(e,t),sh("preconnect",e,t)}function Eg(e,t,a){ha.L(e,t,a);var l=Il;if(l&&e&&t){var i='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Tt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Tt(a.imageSizes)+'"]')):i+='[href="'+Tt(e)+'"]';var r=i;switch(t){case"style":r=en(e);break;case"script":r=tn(e)}qt.has(r)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qt.set(r,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(oi(r))||t==="script"&&l.querySelector(ui(r))||(t=l.createElement("link"),et(t,"link",e),Qe(t),l.head.appendChild(t)))}}function Cg(e,t){ha.m(e,t);var a=Il;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Tt(l)+'"][href="'+Tt(e)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=tn(e)}if(!qt.has(r)&&(e=j({rel:"modulepreload",href:e},t),qt.set(r,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ui(r)))return}l=a.createElement("link"),et(l,"link",e),Qe(l),a.head.appendChild(l)}}}function zg(e,t,a){ha.S(e,t,a);var l=Il;if(l&&e){var i=xl(l).hoistableStyles,r=en(e);t=t||"default";var f=i.get(r);if(!f){var m={loading:0,preload:null};if(f=l.querySelector(oi(r)))m.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qt.get(r))&&Rc(e,a);var v=f=l.createElement("link");Qe(v),et(v,"link",e),v._p=new Promise(function(z,N){v.onload=z,v.onerror=N}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Rr(f,t,l)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(r,f)}}}function wg(e,t){ha.X(e,t);var a=Il;if(a&&e){var l=xl(a).hoistableScripts,i=tn(e),r=l.get(i);r||(r=a.querySelector(ui(i)),r||(e=j({src:e,async:!0},t),(t=qt.get(i))&&Oc(e,t),r=a.createElement("script"),Qe(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function Tg(e,t){ha.M(e,t);var a=Il;if(a&&e){var l=xl(a).hoistableScripts,i=tn(e),r=l.get(i);r||(r=a.querySelector(ui(i)),r||(e=j({src:e,async:!0,type:"module"},t),(t=qt.get(i))&&Oc(e,t),r=a.createElement("script"),Qe(r),et(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function fh(e,t,a,l){var i=(i=te.current)?Tr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=en(a.href),a=xl(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=en(a.href);var r=xl(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(oi(e)))&&!r._p&&(f.instance=r,f.state.loading=5),qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(e,a),r||Rg(i,e,a,f.state))),t&&l===null)throw Error(u(528,""));return f}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=tn(a),a=xl(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function en(e){return'href="'+Tt(e)+'"'}function oi(e){return'link[rel="stylesheet"]['+e+"]"}function dh(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Rg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Qe(t),e.head.appendChild(t))}function tn(e){return'[src="'+Tt(e)+'"]'}function ui(e){return"script[async]"+e}function mh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Tt(a.href)+'"]');if(l)return t.instance=l,Qe(l),l;var i=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),et(l,"style",i),Rr(l,a.precedence,e),t.instance=l;case"stylesheet":i=en(a.href);var r=e.querySelector(oi(i));if(r)return t.state.loading|=4,t.instance=r,Qe(r),r;l=dh(a),(i=qt.get(i))&&Rc(l,i),r=(e.ownerDocument||e).createElement("link"),Qe(r);var f=r;return f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),et(r,"link",l),t.state.loading|=4,Rr(r,a.precedence,e),t.instance=r;case"script":return r=tn(a.src),(i=e.querySelector(ui(r)))?(t.instance=i,Qe(i),i):(l=a,(i=qt.get(r))&&(l=j({},a),Oc(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Qe(i),et(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Rr(l,a.precedence,e));return t.instance}function Rr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,f=0;f<l.length;f++){var m=l[f];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function hh(e,t,a){if(Or===null){var l=new Map,i=Or=new Map;i.set(a,l)}else i=Or,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Sn]||r[at]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var m=l.get(f);m?m.push(r):l.set(f,[r])}}return l}function ph(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Og(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ci=null;function Mg(){}function Dg(e,t,a){if(ci===null)throw Error(u(475));var l=ci;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=en(a.href),r=e.querySelector(oi(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Mr.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=r,Qe(r);return}r=e.ownerDocument||e,a=dh(a),(i=qt.get(i))&&Rc(a,i),r=r.createElement("link"),Qe(r);var f=r;f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),et(r,"link",a),t.instance=r}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Mr.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ng(){if(ci===null)throw Error(u(475));var e=ci;return e.stylesheets&&e.count===0&&Mc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Mc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Mr(){if(this.count--,this.count===0){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dr=null;function Mc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dr=new Map,t.forEach(_g,e),Dr=null,Mr.call(e))}function _g(e,t){if(!(t.state.loading&4)){var a=Dr.get(e);if(a)var l=a.get(null);else{a=new Map,Dr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),l=f)}l&&a.set(null,l)}i=t.instance,f=i.getAttribute("data-precedence"),r=a.get(f)||l,r===l&&a.set(null,i),a.set(f,i),this.count++,l=Mr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var si={$$typeof:Z,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function qg(e,t,a,l,i,r,f,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.hiddenUpdates=wo(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function vh(e,t,a,l,i,r,f,m,v,z,N,q){return e=new qg(e,t,a,f,m,v,z,q),t=1,r===!0&&(t|=24),r=gt(3,null,null,t),e.current=r,r.stateNode=e,t=du(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},gu(r),e}function yh(e){return e?(e=Dl,e):Dl}function bh(e,t,a,l,i,r){i=yh(i),l.context===null?l.context=i:l.pendingContext=i,l=Ea(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=Ca(e,l,t),a!==null&&(St(a,e,t),Gn(a,e,t))}function xh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Dc(e,t){xh(e,t),(e=e.alternate)&&xh(e,t)}function Sh(e){if(e.tag===13){var t=Ml(e,67108864);t!==null&&St(t,e,67108864),Dc(e,67108864)}}var Nr=!0;function Bg(e,t,a,l){var i=D.T;D.T=null;var r=k.p;try{k.p=2,Nc(e,t,a,l)}finally{k.p=r,D.T=i}}function Ug(e,t,a,l){var i=D.T;D.T=null;var r=k.p;try{k.p=8,Nc(e,t,a,l)}finally{k.p=r,D.T=i}}function Nc(e,t,a,l){if(Nr){var i=_c(l);if(i===null)xc(e,t,l,_r,a),Ah(e,l);else if($g(i,e,t,a,l))l.stopPropagation();else if(Ah(e,l),t&4&&-1<Hg.indexOf(e)){for(;i!==null;){var r=bl(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Za(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var v=1<<31-ht(f);m.entanglements[1]|=v,f&=~v}Kt(r),(be&6)===0&&(vr=kt()+500,li(0))}}break;case 13:m=Ml(r,2),m!==null&&St(m,r,2),br(),Dc(r,2)}if(r=_c(l),r===null&&xc(e,t,l,_r,a),r===i)break;i=r}i!==null&&l.stopPropagation()}else xc(e,t,l,null,a)}}function _c(e){return e=$o(e),qc(e)}var _r=null;function qc(e){if(_r=null,e=yl(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _r=e,null}function jh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A0()){case qs:return 2;case Bs:return 8;case zi:case E0:return 32;case Us:return 268435456;default:return 32}default:return 32}}var Bc=!1,Ha=null,$a=null,Ga=null,fi=new Map,di=new Map,Ya=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ah(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function mi(e,t,a,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},t!==null&&(t=bl(t),t!==null&&Sh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $g(e,t,a,l,i){switch(t){case"focusin":return Ha=mi(Ha,e,t,a,l,i),!0;case"dragenter":return $a=mi($a,e,t,a,l,i),!0;case"mouseover":return Ga=mi(Ga,e,t,a,l,i),!0;case"pointerover":var r=i.pointerId;return fi.set(r,mi(fi.get(r)||null,e,t,a,l,i)),!0;case"gotpointercapture":return r=i.pointerId,di.set(r,mi(di.get(r)||null,e,t,a,l,i)),!0}return!1}function Eh(e){var t=yl(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,D0(e.priority,function(){if(a.tag===13){var l=xt();l=To(l);var i=Ml(a,l);i!==null&&St(i,a,l),Dc(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_c(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ho=l,a.target.dispatchEvent(l),Ho=null}else return t=bl(a),t!==null&&Sh(t),e.blockedOn=a,!1;t.shift()}return!0}function Ch(e,t,a){qr(e)&&a.delete(t)}function Gg(){Bc=!1,Ha!==null&&qr(Ha)&&(Ha=null),$a!==null&&qr($a)&&($a=null),Ga!==null&&qr(Ga)&&(Ga=null),fi.forEach(Ch),di.forEach(Ch)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Gg)))}var Ur=null;function zh(e){Ur!==e&&(Ur=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ur===e&&(Ur=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(qc(l||a)===null)continue;break}var r=bl(a);r!==null&&(e.splice(t,3),t-=3,qu(r,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function hi(e){function t(v){return Br(v,e)}Ha!==null&&Br(Ha,e),$a!==null&&Br($a,e),Ga!==null&&Br(Ga,e),fi.forEach(t),di.forEach(t);for(var a=0;a<Ya.length;a++){var l=Ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Eh(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],r=a[l+1],f=i[ut]||null;if(typeof r=="function")f||zh(a);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[ut]||null)m=f.formAction;else if(qc(i)!==null)continue}else m=f.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),zh(a)}}}function Uc(e){this._internalRoot=e}Hr.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=xt();bh(a,l,e,t,null,null)},Hr.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bh(e.current,2,null,e,null,null),br(),t[vl]=null}};function Hr(e){this._internalRoot=e}Hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ya.length&&t!==0&&t<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Eh(e)}};var wh=o.version;if(wh!=="19.1.1")throw Error(u(527,wh,"19.1.1"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=b(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Yg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{yn=$r.inject(Yg),mt=$r}catch{}}return gi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var a=!1,l="",i=kd,r=Vd,f=Xd,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=vh(e,1,!1,null,null,a,l,i,r,f,m,null),e[vl]=t.current,bc(e),new Uc(t)},gi.hydrateRoot=function(e,t,a){if(!d(e))throw Error(u(299));var l=!1,i="",r=kd,f=Vd,m=Xd,v=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),t=vh(e,1,!0,t,a??null,l,i,r,f,m,v,z),t.context=yh(null),a=t.current,l=xt(),l=To(l),i=Ea(l),i.callback=null,Ca(a,i,l),a=l,t.current.lanes=a,xn(t,a),Kt(t),e[vl]=t.current,bc(e),new Hr(t)},gi.version="19.1.1",gi}var Uh;function Fg(){if(Uh)return Gc.exports;Uh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),Gc.exports=Wg(),Gc.exports}var Pg=Fg();const Ig=s1(Pg);var Fe=function(){return Fe=Object.assign||function(o){for(var s,u=1,d=arguments.length;u<d;u++){s=arguments[u];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(o[h]=s[h])}return o},Fe.apply(this,arguments)};function cn(n,o,s){if(s||arguments.length===2)for(var u=0,d=o.length,h;u<d;u++)(h||!(u in o))&&(h||(h=Array.prototype.slice.call(o,0,u)),h[u]=o[u]);return n.concat(h||Array.prototype.slice.call(o))}var Te="-ms-",xi="-moz-",ye="-webkit-",f1="comm",go="rule",ys="decl",e2="@import",d1="@keyframes",t2="@layer",m1=Math.abs,bs=String.fromCharCode,rs=Object.assign;function a2(n,o){return We(n,0)^45?(((o<<2^We(n,0))<<2^We(n,1))<<2^We(n,2))<<2^We(n,3):0}function h1(n){return n.trim()}function ga(n,o){return(n=o.exec(n))?n[0]:n}function oe(n,o,s){return n.replace(o,s)}function Ir(n,o,s){return n.indexOf(o,s)}function We(n,o){return n.charCodeAt(o)|0}function sn(n,o,s){return n.slice(o,s)}function Jt(n){return n.length}function p1(n){return n.length}function bi(n,o){return o.push(n),n}function l2(n,o){return n.map(o).join("")}function Hh(n,o){return n.filter(function(s){return!ga(s,o)})}var vo=1,fn=1,g1=0,Bt=0,$e=0,hn="";function yo(n,o,s,u,d,h,y,E){return{value:n,root:o,parent:s,type:u,props:d,children:h,line:vo,column:fn,length:y,return:"",siblings:E}}function ka(n,o){return rs(yo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function an(n){for(;n.root;)n=ka(n.root,{children:[n]});bi(n,n.siblings)}function n2(){return $e}function i2(){return $e=Bt>0?We(hn,--Bt):0,fn--,$e===10&&(fn=1,vo--),$e}function Gt(){return $e=Bt<g1?We(hn,Bt++):0,fn++,$e===10&&(fn=1,vo++),$e}function hl(){return We(hn,Bt)}function eo(){return Bt}function bo(n,o){return sn(hn,n,o)}function os(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r2(n){return vo=fn=1,g1=Jt(hn=n),Bt=0,[]}function o2(n){return hn="",n}function Vc(n){return h1(bo(Bt-1,us(n===91?n+2:n===40?n+1:n)))}function u2(n){for(;($e=hl())&&$e<33;)Gt();return os(n)>2||os($e)>3?"":" "}function c2(n,o){for(;--o&&Gt()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return bo(n,eo()+(o<6&&hl()==32&&Gt()==32))}function us(n){for(;Gt();)switch($e){case n:return Bt;case 34:case 39:n!==34&&n!==39&&us($e);break;case 40:n===41&&us(n);break;case 92:Gt();break}return Bt}function s2(n,o){for(;Gt()&&n+$e!==57;)if(n+$e===84&&hl()===47)break;return"/*"+bo(o,Bt-1)+"*"+bs(n===47?n:Gt())}function f2(n){for(;!os(hl());)Gt();return bo(n,Bt)}function d2(n){return o2(to("",null,null,null,[""],n=r2(n),0,[0],n))}function to(n,o,s,u,d,h,y,E,b){for(var g=0,j=0,M=y,U=0,H=0,G=0,Q=1,Y=1,X=1,$=0,Z="",ne=d,K=h,ie=u,F=Z;Y;)switch(G=$,$=Gt()){case 40:if(G!=108&&We(F,M-1)==58){Ir(F+=oe(Vc($),"&","&\f"),"&\f",m1(g?E[g-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:F+=Vc($);break;case 9:case 10:case 13:case 32:F+=u2(G);break;case 92:F+=c2(eo()-1,7);continue;case 47:switch(hl()){case 42:case 47:bi(m2(s2(Gt(),eo()),o,s,b),b);break;default:F+="/"}break;case 123*Q:E[g++]=Jt(F)*X;case 125*Q:case 59:case 0:switch($){case 0:case 125:Y=0;case 59+j:X==-1&&(F=oe(F,/\f/g,"")),H>0&&Jt(F)-M&&bi(H>32?Gh(F+";",u,s,M-1,b):Gh(oe(F," ","")+";",u,s,M-2,b),b);break;case 59:F+=";";default:if(bi(ie=$h(F,o,s,g,j,d,E,Z,ne=[],K=[],M,h),h),$===123)if(j===0)to(F,o,ie,ie,ne,h,M,E,K);else switch(U===99&&We(F,3)===110?100:U){case 100:case 108:case 109:case 115:to(n,ie,ie,u&&bi($h(n,ie,ie,0,0,d,E,Z,d,ne=[],M,K),K),d,K,M,E,u?ne:K);break;default:to(F,ie,ie,ie,[""],K,0,E,K)}}g=j=H=0,Q=X=1,Z=F="",M=y;break;case 58:M=1+Jt(F),H=G;default:if(Q<1){if($==123)--Q;else if($==125&&Q++==0&&i2()==125)continue}switch(F+=bs($),$*Q){case 38:X=j>0?1:(F+="\f",-1);break;case 44:E[g++]=(Jt(F)-1)*X,X=1;break;case 64:hl()===45&&(F+=Vc(Gt())),U=hl(),j=M=Jt(Z=F+=f2(eo())),$++;break;case 45:G===45&&Jt(F)==2&&(Q=0)}}return h}function $h(n,o,s,u,d,h,y,E,b,g,j,M){for(var U=d-1,H=d===0?h:[""],G=p1(H),Q=0,Y=0,X=0;Q<u;++Q)for(var $=0,Z=sn(n,U+1,U=m1(Y=y[Q])),ne=n;$<G;++$)(ne=h1(Y>0?H[$]+" "+Z:oe(Z,/&\f/g,H[$])))&&(b[X++]=ne);return yo(n,o,s,d===0?go:E,b,g,j,M)}function m2(n,o,s,u){return yo(n,o,s,f1,bs(n2()),sn(n,2,-2),0,u)}function Gh(n,o,s,u,d){return yo(n,o,s,ys,sn(n,0,u),sn(n,u+1,-1),u,d)}function v1(n,o,s){switch(a2(n,o)){case 5103:return ye+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+n+n;case 4789:return xi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+n+xi+n+Te+n+n;case 5936:switch(We(n,o+11)){case 114:return ye+n+Te+oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ye+n+Te+oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ye+n+Te+oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ye+n+Te+n+n;case 6165:return ye+n+Te+"flex-"+n+n;case 5187:return ye+n+oe(n,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Te+"flex-$1$2")+n;case 5443:return ye+n+Te+"flex-item-"+oe(n,/flex-|-self/g,"")+(ga(n,/flex-|baseline/)?"":Te+"grid-row-"+oe(n,/flex-|-self/g,""))+n;case 4675:return ye+n+Te+"flex-line-pack"+oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return ye+n+Te+oe(n,"shrink","negative")+n;case 5292:return ye+n+Te+oe(n,"basis","preferred-size")+n;case 6060:return ye+"box-"+oe(n,"-grow","")+ye+n+Te+oe(n,"grow","positive")+n;case 4554:return ye+oe(n,/([^-])(transform)/g,"$1"+ye+"$2")+n;case 6187:return oe(oe(oe(n,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),n,"")+n;case 5495:case 3959:return oe(n,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return oe(oe(n,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+n+n;case 4200:if(!ga(n,/flex-|baseline/))return Te+"grid-column-align"+sn(n,o)+n;break;case 2592:case 3360:return Te+oe(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(u,d){return o=d,ga(u.props,/grid-\w+-end/)})?~Ir(n+(s=s[o].value),"span",0)?n:Te+oe(n,"-start","")+n+Te+"grid-row-span:"+(~Ir(s,"span",0)?ga(s,/\d+/):+ga(s,/\d+/)-+ga(n,/\d+/))+";":Te+oe(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(u){return ga(u.props,/grid-\w+-start/)})?n:Te+oe(oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return oe(n,/(.+)-inline(.+)/,ye+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(n)-1-o>6)switch(We(n,o+1)){case 109:if(We(n,o+4)!==45)break;case 102:return oe(n,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+xi+(We(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~Ir(n,"stretch",0)?v1(oe(n,"stretch","fill-available"),o,s)+n:n}break;case 5152:case 5920:return oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,h,y,E,b,g){return Te+d+":"+h+g+(y?Te+d+"-span:"+(E?b:+b-+h)+g:"")+n});case 4949:if(We(n,o+6)===121)return oe(n,":",":"+ye)+n;break;case 6444:switch(We(n,We(n,14)===45?18:11)){case 120:return oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(We(n,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Te+"$2box$3")+n;case 100:return oe(n,":",":"+Te)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(n,"scroll-","scroll-snap-")+n}return n}function ro(n,o){for(var s="",u=0;u<n.length;u++)s+=o(n[u],u,n,o)||"";return s}function h2(n,o,s,u){switch(n.type){case t2:if(n.children.length)break;case e2:case ys:return n.return=n.return||n.value;case f1:return"";case d1:return n.return=n.value+"{"+ro(n.children,u)+"}";case go:if(!Jt(n.value=n.props.join(",")))return""}return Jt(s=ro(n.children,u))?n.return=n.value+"{"+s+"}":""}function p2(n){var o=p1(n);return function(s,u,d,h){for(var y="",E=0;E<o;E++)y+=n[E](s,u,d,h)||"";return y}}function g2(n){return function(o){o.root||(o=o.return)&&n(o)}}function v2(n,o,s,u){if(n.length>-1&&!n.return)switch(n.type){case ys:n.return=v1(n.value,n.length,s);return;case d1:return ro([ka(n,{value:oe(n.value,"@","@"+ye)})],u);case go:if(n.length)return l2(s=n.props,function(d){switch(ga(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":an(ka(n,{props:[oe(d,/:(read-\w+)/,":"+xi+"$1")]})),an(ka(n,{props:[d]})),rs(n,{props:Hh(s,u)});break;case"::placeholder":an(ka(n,{props:[oe(d,/:(plac\w+)/,":"+ye+"input-$1")]})),an(ka(n,{props:[oe(d,/:(plac\w+)/,":"+xi+"$1")]})),an(ka(n,{props:[oe(d,/:(plac\w+)/,Te+"input-$1")]})),an(ka(n,{props:[d]})),rs(n,{props:Hh(s,u)});break}return""})}}var y2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},dn=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",y1="active",b1="data-styled-version",xo="6.1.19",xs=`/*!sc*/
`,oo=typeof window<"u"&&typeof document<"u",b2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),x2={},So=Object.freeze([]),mn=Object.freeze({});function x1(n,o,s){return s===void 0&&(s=mn),n.theme!==s.theme&&n.theme||o||s.theme}var S1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),S2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,j2=/(^-|-$)/g;function Yh(n){return n.replace(S2,"-").replace(j2,"")}var A2=/(a)(d)/gi,Gr=52,Lh=function(n){return String.fromCharCode(n+(n>25?39:97))};function cs(n){var o,s="";for(o=Math.abs(n);o>Gr;o=o/Gr|0)s=Lh(o%Gr)+s;return(Lh(o%Gr)+s).replace(A2,"$1-$2")}var Xc,j1=5381,un=function(n,o){for(var s=o.length;s;)n=33*n^o.charCodeAt(--s);return n},A1=function(n){return un(j1,n)};function Ss(n){return cs(A1(n)>>>0)}function E2(n){return n.displayName||n.name||"Component"}function Qc(n){return typeof n=="string"&&!0}var E1=typeof Symbol=="function"&&Symbol.for,C1=E1?Symbol.for("react.memo"):60115,C2=E1?Symbol.for("react.forward_ref"):60112,z2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},z1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T2=((Xc={})[C2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[C1]=z1,Xc);function kh(n){return("type"in(o=n)&&o.type.$$typeof)===C1?z1:"$$typeof"in n?T2[n.$$typeof]:z2;var o}var R2=Object.defineProperty,O2=Object.getOwnPropertyNames,Vh=Object.getOwnPropertySymbols,M2=Object.getOwnPropertyDescriptor,D2=Object.getPrototypeOf,Xh=Object.prototype;function w1(n,o,s){if(typeof o!="string"){if(Xh){var u=D2(o);u&&u!==Xh&&w1(n,u,s)}var d=O2(o);Vh&&(d=d.concat(Vh(o)));for(var h=kh(n),y=kh(o),E=0;E<d.length;++E){var b=d[E];if(!(b in w2||s&&s[b]||y&&b in y||h&&b in h)){var g=M2(o,b);try{R2(n,b,g)}catch{}}}}return n}function pl(n){return typeof n=="function"}function js(n){return typeof n=="object"&&"styledComponentId"in n}function ml(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function uo(n,o){if(n.length===0)return"";for(var s=n[0],u=1;u<n.length;u++)s+=n[u];return s}function Si(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ss(n,o,s){if(s===void 0&&(s=!1),!s&&!Si(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)n[u]=ss(n[u],o[u]);else if(Si(o))for(var u in o)n[u]=ss(n[u],o[u]);return n}function As(n,o){Object.defineProperty(n,"toString",{value:o})}function gl(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var N2=(function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var s=0,u=0;u<o;u++)s+=this.groupSizes[u];return s},n.prototype.insertRules=function(o,s){if(o>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,h=d;o>=h;)if((h<<=1)<0)throw gl(16,"".concat(o));this.groupSizes=new Uint32Array(h),this.groupSizes.set(u),this.length=h;for(var y=d;y<h;y++)this.groupSizes[y]=0}for(var E=this.indexOfGroup(o+1),b=(y=0,s.length);y<b;y++)this.tag.insertRule(E,s[y])&&(this.groupSizes[o]++,E++)},n.prototype.clearGroup=function(o){if(o<this.length){var s=this.groupSizes[o],u=this.indexOfGroup(o),d=u+s;this.groupSizes[o]=0;for(var h=u;h<d;h++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(o){var s="";if(o>=this.length||this.groupSizes[o]===0)return s;for(var u=this.groupSizes[o],d=this.indexOfGroup(o),h=d+u,y=d;y<h;y++)s+="".concat(this.tag.getRule(y)).concat(xs);return s},n})(),ao=new Map,co=new Map,lo=1,Yr=function(n){if(ao.has(n))return ao.get(n);for(;co.has(lo);)lo++;var o=lo++;return ao.set(n,o),co.set(o,n),o},_2=function(n,o){lo=o+1,ao.set(n,o),co.set(o,n)},q2="style[".concat(dn,"][").concat(b1,'="').concat(xo,'"]'),B2=new RegExp("^".concat(dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U2=function(n,o,s){for(var u,d=s.split(","),h=0,y=d.length;h<y;h++)(u=d[h])&&n.registerName(o,u)},H2=function(n,o){for(var s,u=((s=o.textContent)!==null&&s!==void 0?s:"").split(xs),d=[],h=0,y=u.length;h<y;h++){var E=u[h].trim();if(E){var b=E.match(B2);if(b){var g=0|parseInt(b[1],10),j=b[2];g!==0&&(_2(j,g),U2(n,j,b[3]),n.getTag().insertRules(g,d)),d.length=0}else d.push(E)}}},Qh=function(n){for(var o=document.querySelectorAll(q2),s=0,u=o.length;s<u;s++){var d=o[s];d&&d.getAttribute(dn)!==y1&&(H2(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function $2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var T1=function(n){var o=document.head,s=n||o,u=document.createElement("style"),d=(function(E){var b=Array.from(E.querySelectorAll("style[".concat(dn,"]")));return b[b.length-1]})(s),h=d!==void 0?d.nextSibling:null;u.setAttribute(dn,y1),u.setAttribute(b1,xo);var y=$2();return y&&u.setAttribute("nonce",y),s.insertBefore(u,h),u},G2=(function(){function n(o){this.element=T1(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var u=document.styleSheets,d=0,h=u.length;d<h;d++){var y=u[d];if(y.ownerNode===s)return y}throw gl(17)})(this.element),this.length=0}return n.prototype.insertRule=function(o,s){try{return this.sheet.insertRule(s,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var s=this.sheet.cssRules[o];return s&&s.cssText?s.cssText:""},n})(),Y2=(function(){function n(o){this.element=T1(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,s){if(o<=this.length&&o>=0){var u=document.createTextNode(s);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n})(),L2=(function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,s){return o<=this.length&&(this.rules.splice(o,0,s),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n})(),Zh=oo,k2={isServer:!oo,useCSSOMInjection:!b2},so=(function(){function n(o,s,u){o===void 0&&(o=mn),s===void 0&&(s={});var d=this;this.options=Fe(Fe({},k2),o),this.gs=s,this.names=new Map(u),this.server=!!o.isServer,!this.server&&oo&&Zh&&(Zh=!1,Qh(this)),As(this,function(){return(function(h){for(var y=h.getTag(),E=y.length,b="",g=function(M){var U=(function(X){return co.get(X)})(M);if(U===void 0)return"continue";var H=h.names.get(U),G=y.getGroup(M);if(H===void 0||!H.size||G.length===0)return"continue";var Q="".concat(dn,".g").concat(M,'[id="').concat(U,'"]'),Y="";H!==void 0&&H.forEach(function(X){X.length>0&&(Y+="".concat(X,","))}),b+="".concat(G).concat(Q,'{content:"').concat(Y,'"}').concat(xs)},j=0;j<E;j++)g(j);return b})(d)})}return n.registerId=function(o){return Yr(o)},n.prototype.rehydrate=function(){!this.server&&oo&&Qh(this)},n.prototype.reconstructWithOptions=function(o,s){return s===void 0&&(s=!0),new n(Fe(Fe({},this.options),o),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(s){var u=s.useCSSOMInjection,d=s.target;return s.isServer?new L2(d):u?new G2(d):new Y2(d)})(this.options),new N2(o)));var o},n.prototype.hasNameForId=function(o,s){return this.names.has(o)&&this.names.get(o).has(s)},n.prototype.registerName=function(o,s){if(Yr(o),this.names.has(o))this.names.get(o).add(s);else{var u=new Set;u.add(s),this.names.set(o,u)}},n.prototype.insertRules=function(o,s,u){this.registerName(o,s),this.getTag().insertRules(Yr(o),u)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Yr(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n})(),V2=/&/g,X2=/^\s*\/\/.*$/gm;function R1(n,o){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(o," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(o," ")),s.props=s.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=R1(s.children,o)),s})}function Q2(n){var o,s,u,d=mn,h=d.options,y=h===void 0?mn:h,E=d.plugins,b=E===void 0?So:E,g=function(U,H,G){return G.startsWith(s)&&G.endsWith(s)&&G.replaceAll(s,"").length>0?".".concat(o):U},j=b.slice();j.push(function(U){U.type===go&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(V2,s).replace(u,g))}),y.prefix&&j.push(v2),j.push(h2);var M=function(U,H,G,Q){H===void 0&&(H=""),G===void 0&&(G=""),Q===void 0&&(Q="&"),o=Q,s=H,u=new RegExp("\\".concat(s,"\\b"),"g");var Y=U.replace(X2,""),X=d2(G||H?"".concat(G," ").concat(H," { ").concat(Y," }"):Y);y.namespace&&(X=R1(X,y.namespace));var $=[];return ro(X,p2(j.concat(g2(function(Z){return $.push(Z)})))),$};return M.hash=b.length?b.reduce(function(U,H){return H.name||gl(15),un(U,H.name)},j1).toString():"",M}var Z2=new so,fs=Q2(),O1=Le.createContext({shouldForwardProp:void 0,styleSheet:Z2,stylis:fs});O1.Consumer;Le.createContext(void 0);function ds(){return O.useContext(O1)}var M1=(function(){function n(o,s){var u=this;this.inject=function(d,h){h===void 0&&(h=fs);var y=u.name+h.hash;d.hasNameForId(u.id,y)||d.insertRules(u.id,y,h(u.rules,y,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=s,As(this,function(){throw gl(12,String(u.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=fs),this.name+o.hash},n})(),K2=function(n){return n>="A"&&n<="Z"};function Kh(n){for(var o="",s=0;s<n.length;s++){var u=n[s];if(s===1&&u==="-"&&n[0]==="-")return n;K2(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var D1=function(n){return n==null||n===!1||n===""},N1=function(n){var o,s,u=[];for(var d in n){var h=n[d];n.hasOwnProperty(d)&&!D1(h)&&(Array.isArray(h)&&h.isCss||pl(h)?u.push("".concat(Kh(d),":"),h,";"):Si(h)?u.push.apply(u,cn(cn(["".concat(d," {")],N1(h),!1),["}"],!1)):u.push("".concat(Kh(d),": ").concat((o=d,(s=h)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||o in y2||o.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return u};function Va(n,o,s,u){if(D1(n))return[];if(js(n))return[".".concat(n.styledComponentId)];if(pl(n)){if(!pl(h=n)||h.prototype&&h.prototype.isReactComponent||!o)return[n];var d=n(o);return Va(d,o,s,u)}var h;return n instanceof M1?s?(n.inject(s,u),[n.getName(u)]):[n]:Si(n)?N1(n):Array.isArray(n)?Array.prototype.concat.apply(So,n.map(function(y){return Va(y,o,s,u)})):[n.toString()]}function _1(n){for(var o=0;o<n.length;o+=1){var s=n[o];if(pl(s)&&!js(s))return!1}return!0}var J2=A1(xo),W2=(function(){function n(o,s,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&_1(o),this.componentId=s,this.baseHash=un(J2,s),this.baseStyle=u,so.registerId(s)}return n.prototype.generateAndInjectStyles=function(o,s,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,s,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))d=ml(d,this.staticRulesId);else{var h=uo(Va(this.rules,o,s,u)),y=cs(un(this.baseHash,h)>>>0);if(!s.hasNameForId(this.componentId,y)){var E=u(h,".".concat(y),void 0,this.componentId);s.insertRules(this.componentId,y,E)}d=ml(d,y),this.staticRulesId=y}else{for(var b=un(this.baseHash,u.hash),g="",j=0;j<this.rules.length;j++){var M=this.rules[j];if(typeof M=="string")g+=M;else if(M){var U=uo(Va(M,o,s,u));b=un(b,U+j),g+=U}}if(g){var H=cs(b>>>0);s.hasNameForId(this.componentId,H)||s.insertRules(this.componentId,H,u(g,".".concat(H),void 0,this.componentId)),d=ml(d,H)}}return d},n})(),ji=Le.createContext(void 0);ji.Consumer;function q1(n){var o=Le.useContext(ji),s=O.useMemo(function(){return(function(u,d){if(!u)throw gl(14);if(pl(u)){var h=u(d);return h}if(Array.isArray(u)||typeof u!="object")throw gl(8);return d?Fe(Fe({},d),u):u})(n.theme,o)},[n.theme,o]);return n.children?Le.createElement(ji.Provider,{value:s},n.children):null}var Zc={};function F2(n,o,s){var u=js(n),d=n,h=!Qc(n),y=o.attrs,E=y===void 0?So:y,b=o.componentId,g=b===void 0?(function(ne,K){var ie=typeof ne!="string"?"sc":Yh(ne);Zc[ie]=(Zc[ie]||0)+1;var F="".concat(ie,"-").concat(Ss(xo+ie+Zc[ie]));return K?"".concat(K,"-").concat(F):F})(o.displayName,o.parentComponentId):b,j=o.displayName,M=j===void 0?(function(ne){return Qc(ne)?"styled.".concat(ne):"Styled(".concat(E2(ne),")")})(n):j,U=o.displayName&&o.componentId?"".concat(Yh(o.displayName),"-").concat(o.componentId):o.componentId||g,H=u&&d.attrs?d.attrs.concat(E).filter(Boolean):E,G=o.shouldForwardProp;if(u&&d.shouldForwardProp){var Q=d.shouldForwardProp;if(o.shouldForwardProp){var Y=o.shouldForwardProp;G=function(ne,K){return Q(ne,K)&&Y(ne,K)}}else G=Q}var X=new W2(s,U,u?d.componentStyle:void 0);function $(ne,K){return(function(ie,F,we){var Ee=ie.attrs,it=ie.componentStyle,ot=ie.defaultProps,ke=ie.foldedComponentIds,Ft=ie.styledComponentId,Pt=ie.target,Ve=Le.useContext(ji),D=ds(),k=ie.shouldForwardProp||D.shouldForwardProp,I=x1(F,Ve,ot)||mn,se=(function(fe,te,Xe){for(var ve,tt=Fe(Fe({},te),{className:void 0,theme:Xe}),Qa=0;Qa<fe.length;Qa+=1){var It=pl(ve=fe[Qa])?ve(tt):ve;for(var zt in It)tt[zt]=zt==="className"?ml(tt[zt],It[zt]):zt==="style"?Fe(Fe({},tt[zt]),It[zt]):It[zt]}return te.className&&(tt.className=ml(tt.className,te.className)),tt})(Ee,F,I),x=se.as||Pt,B={};for(var L in se)se[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&se.theme===I||(L==="forwardedAs"?B.as=se.forwardedAs:k&&!k(L,x)||(B[L]=se[L]));var V=(function(fe,te){var Xe=ds(),ve=fe.generateAndInjectStyles(te,Xe.styleSheet,Xe.stylis);return ve})(it,se),P=ml(ke,Ft);return V&&(P+=" "+V),se.className&&(P+=" "+se.className),B[Qc(x)&&!S1.has(x)?"class":"className"]=P,we&&(B.ref=we),O.createElement(x,B)})(Z,ne,K)}$.displayName=M;var Z=Le.forwardRef($);return Z.attrs=H,Z.componentStyle=X,Z.displayName=M,Z.shouldForwardProp=G,Z.foldedComponentIds=u?ml(d.foldedComponentIds,d.styledComponentId):"",Z.styledComponentId=U,Z.target=u?d.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ne){this._foldedDefaultProps=u?(function(K){for(var ie=[],F=1;F<arguments.length;F++)ie[F-1]=arguments[F];for(var we=0,Ee=ie;we<Ee.length;we++)ss(K,Ee[we],!0);return K})({},d.defaultProps,ne):ne}}),As(Z,function(){return".".concat(Z.styledComponentId)}),h&&w1(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Jh(n,o){for(var s=[n[0]],u=0,d=o.length;u<d;u+=1)s.push(o[u],n[u+1]);return s}var Wh=function(n){return Object.assign(n,{isCss:!0})};function jo(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];if(pl(n)||Si(n))return Wh(Va(Jh(So,cn([n],o,!0))));var u=n;return o.length===0&&u.length===1&&typeof u[0]=="string"?Va(u):Wh(Va(Jh(u,o)))}function ms(n,o,s){if(s===void 0&&(s=mn),!o)throw gl(1,o);var u=function(d){for(var h=[],y=1;y<arguments.length;y++)h[y-1]=arguments[y];return n(o,s,jo.apply(void 0,cn([d],h,!1)))};return u.attrs=function(d){return ms(n,o,Fe(Fe({},s),{attrs:Array.prototype.concat(s.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return ms(n,o,Fe(Fe({},s),d))},u}var B1=function(n){return ms(F2,n)},R=B1;S1.forEach(function(n){R[n]=B1(n)});var P2=(function(){function n(o,s){this.rules=o,this.componentId=s,this.isStatic=_1(o),so.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,s,u,d){var h=d(uo(Va(this.rules,s,u,d)),""),y=this.componentId+o;u.insertRules(y,y,h)},n.prototype.removeStyles=function(o,s){s.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,s,u,d){o>2&&so.registerId(this.componentId+o),this.removeStyles(o,u),this.createStyles(o,s,u,d)},n})();function I2(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var u=jo.apply(void 0,cn([n],o,!1)),d="sc-global-".concat(Ss(JSON.stringify(u))),h=new P2(u,d),y=function(b){var g=ds(),j=Le.useContext(ji),M=Le.useRef(g.styleSheet.allocateGSInstance(d)).current;return g.styleSheet.server&&E(M,b,g.styleSheet,j,g.stylis),Le.useLayoutEffect(function(){if(!g.styleSheet.server)return E(M,b,g.styleSheet,j,g.stylis),function(){return h.removeStyles(M,g.styleSheet)}},[M,b,g.styleSheet,j,g.stylis]),null};function E(b,g,j,M,U){if(h.isStatic)h.renderStyles(b,x2,j,U);else{var H=Fe(Fe({},g),{theme:x1(g,M,y.defaultProps)});h.renderStyles(b,H,j,U)}}return Le.memo(y)}function ev(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var u=uo(jo.apply(void 0,cn([n],o,!1))),d=Ss(u);return new M1(d,u)}const p={colors:{primary:"#26a9e0",secundary:"#001f3D",white:"#FFFFFF",lightGray:"#F9FAFB",dark:"#000f1d",mediumGray:"#9E9E9E"},fonts:{primary:'"Inter", sans-serif',secondary:'"Roboto", sans-serif'},breakpoints:{mobile:"1020px",tablet:"986px",desktop:"1200px"},transitions:{default:"0.2s ease-in-out"},shadows:{small:"0 2px 4px rgba(0,0,0,0.1)",medium:"0 4px 8px rgba(0,0,0,0.15)",large:"0 8px 16px rgba(0,0,0,0.2)"}},tv=I2`
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
`,av=R.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({$isScrolled:n,theme:o})=>n?"rgba(255, 255, 255, 0.95)":"transparent"};
  box-shadow: ${({$isScrolled:n,theme:o})=>n?o.shadows.small:"none"};
  transition: all 0.1s ease-in-out;
`,lv=R.nav`
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
`,nv=R.a`
  font-family: ${({theme:n})=>n.fonts.primary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.dark};
  text-decoration: none;
  
  span {
    color: ${({theme:n})=>n.colors.primary};
  }
`,iv=R.ul`
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
`,vi=R.li`
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;R.a`
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
`;const rv=R.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: flex;
  }
`,ov="/AbaCorretora/assets/logo-Cfhf6tiY.png";/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fh="popstate";function uv(n={}){function o(u,d){let{pathname:h,search:y,hash:E}=u.location;return hs("",{pathname:h,search:y,hash:E},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(u,d){return typeof d=="string"?d:Ai(d)}return sv(o,s,null,n)}function Oe(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function Yt(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function cv(){return Math.random().toString(36).substring(2,10)}function Ph(n,o){return{usr:n.state,key:n.key,idx:o}}function hs(n,o,s=null,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?pn(o):o,state:s,key:o&&o.key||u||cv()}}function Ai({pathname:n="/",search:o="",hash:s=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function pn(n){let o={};if(n){let s=n.indexOf("#");s>=0&&(o.hash=n.substring(s),n=n.substring(0,s));let u=n.indexOf("?");u>=0&&(o.search=n.substring(u),n=n.substring(0,u)),n&&(o.pathname=n)}return o}function sv(n,o,s,u={}){let{window:d=document.defaultView,v5Compat:h=!1}=u,y=d.history,E="POP",b=null,g=j();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function j(){return(y.state||{idx:null}).idx}function M(){E="POP";let Y=j(),X=Y==null?null:Y-g;g=Y,b&&b({action:E,location:Q.location,delta:X})}function U(Y,X){E="PUSH";let $=hs(Q.location,Y,X);g=j()+1;let Z=Ph($,g),ne=Q.createHref($);try{y.pushState(Z,"",ne)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(ne)}h&&b&&b({action:E,location:Q.location,delta:1})}function H(Y,X){E="REPLACE";let $=hs(Q.location,Y,X);g=j();let Z=Ph($,g),ne=Q.createHref($);y.replaceState(Z,"",ne),h&&b&&b({action:E,location:Q.location,delta:0})}function G(Y){return fv(Y)}let Q={get action(){return E},get location(){return n(d,y)},listen(Y){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Fh,M),b=Y,()=>{d.removeEventListener(Fh,M),b=null}},createHref(Y){return o(d,Y)},createURL:G,encodeLocation(Y){let X=G(Y);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:U,replace:H,go(Y){return y.go(Y)}};return Q}function fv(n,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(s,"No window.location.(origin|href) available to create URL");let u=typeof n=="string"?n:Ai(n);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=s+u),new URL(u,s)}function U1(n,o,s="/"){return dv(n,o,s,!1)}function dv(n,o,s,u){let d=typeof o=="string"?pn(o):o,h=ya(d.pathname||"/",s);if(h==null)return null;let y=H1(n);mv(y);let E=null;for(let b=0;E==null&&b<y.length;++b){let g=Ev(h);E=jv(y[b],g,u)}return E}function H1(n,o=[],s=[],u="",d=!1){let h=(y,E,b=d,g)=>{let j={relativePath:g===void 0?y.path||"":g,caseSensitive:y.caseSensitive===!0,childrenIndex:E,route:y};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(u)&&b)return;Oe(j.relativePath.startsWith(u),`Absolute route path "${j.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(u.length)}let M=va([u,j.relativePath]),U=s.concat(j);y.children&&y.children.length>0&&(Oe(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${M}".`),H1(y.children,o,U,M,b)),!(y.path==null&&!y.index)&&o.push({path:M,score:xv(M,y.index),routesMeta:U})};return n.forEach((y,E)=>{if(y.path===""||!y.path?.includes("?"))h(y,E);else for(let b of $1(y.path))h(y,E,!0,b)}),o}function $1(n){let o=n.split("/");if(o.length===0)return[];let[s,...u]=o,d=s.endsWith("?"),h=s.replace(/\?$/,"");if(u.length===0)return d?[h,""]:[h];let y=$1(u.join("/")),E=[];return E.push(...y.map(b=>b===""?h:[h,b].join("/"))),d&&E.push(...y),E.map(b=>n.startsWith("/")&&b===""?"/":b)}function mv(n){n.sort((o,s)=>o.score!==s.score?s.score-o.score:Sv(o.routesMeta.map(u=>u.childrenIndex),s.routesMeta.map(u=>u.childrenIndex)))}var hv=/^:[\w-]+$/,pv=3,gv=2,vv=1,yv=10,bv=-2,Ih=n=>n==="*";function xv(n,o){let s=n.split("/"),u=s.length;return s.some(Ih)&&(u+=bv),o&&(u+=gv),s.filter(d=>!Ih(d)).reduce((d,h)=>d+(hv.test(h)?pv:h===""?vv:yv),u)}function Sv(n,o){return n.length===o.length&&n.slice(0,-1).every((u,d)=>u===o[d])?n[n.length-1]-o[o.length-1]:0}function jv(n,o,s=!1){let{routesMeta:u}=n,d={},h="/",y=[];for(let E=0;E<u.length;++E){let b=u[E],g=E===u.length-1,j=h==="/"?o:o.slice(h.length)||"/",M=fo({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},j),U=b.route;if(!M&&g&&s&&!u[u.length-1].route.index&&(M=fo({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},j)),!M)return null;Object.assign(d,M.params),y.push({params:d,pathname:va([h,M.pathname]),pathnameBase:Tv(va([h,M.pathnameBase])),route:U}),M.pathnameBase!=="/"&&(h=va([h,M.pathnameBase]))}return y}function fo(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,u]=Av(n.path,n.caseSensitive,n.end),d=o.match(s);if(!d)return null;let h=d[0],y=h.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:u.reduce((g,{paramName:j,isOptional:M},U)=>{if(j==="*"){let G=E[U]||"";y=h.slice(0,h.length-G.length).replace(/(.)\/+$/,"$1")}const H=E[U];return M&&!H?g[j]=void 0:g[j]=(H||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:y,pattern:n}}function Av(n,o=!1,s=!0){Yt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,E,b)=>(u.push({paramName:E,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(u.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),u]}function Ev(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Yt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function ya(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,u=n.charAt(s);return u&&u!=="/"?null:n.slice(s)||"/"}function Cv(n,o="/"){let{pathname:s,search:u="",hash:d=""}=typeof n=="string"?pn(n):n;return{pathname:s?s.startsWith("/")?s:zv(s,o):o,search:Rv(u),hash:Ov(d)}}function zv(n,o){let s=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Kc(n,o,s,u){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wv(n){return n.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Es(n){let o=wv(n);return o.map((s,u)=>u===o.length-1?s.pathname:s.pathnameBase)}function Cs(n,o,s,u=!1){let d;typeof n=="string"?d=pn(n):(d={...n},Oe(!d.pathname||!d.pathname.includes("?"),Kc("?","pathname","search",d)),Oe(!d.pathname||!d.pathname.includes("#"),Kc("#","pathname","hash",d)),Oe(!d.search||!d.search.includes("#"),Kc("#","search","hash",d)));let h=n===""||d.pathname==="",y=h?"/":d.pathname,E;if(y==null)E=s;else{let M=o.length-1;if(!u&&y.startsWith("..")){let U=y.split("/");for(;U[0]==="..";)U.shift(),M-=1;d.pathname=U.join("/")}E=M>=0?o[M]:"/"}let b=Cv(d,E),g=y&&y!=="/"&&y.endsWith("/"),j=(h||y===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(g||j)&&(b.pathname+="/"),b}var va=n=>n.join("/").replace(/\/\/+/g,"/"),Tv=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Rv=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Ov=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Mv(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var G1=["POST","PUT","PATCH","DELETE"];new Set(G1);var Dv=["GET",...G1];new Set(Dv);var gn=O.createContext(null);gn.displayName="DataRouter";var Ao=O.createContext(null);Ao.displayName="DataRouterState";O.createContext(!1);var Y1=O.createContext({isTransitioning:!1});Y1.displayName="ViewTransition";var Nv=O.createContext(new Map);Nv.displayName="Fetchers";var _v=O.createContext(null);_v.displayName="Await";var Lt=O.createContext(null);Lt.displayName="Navigation";var Ei=O.createContext(null);Ei.displayName="Location";var Wt=O.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var zs=O.createContext(null);zs.displayName="RouteError";function qv(n,{relative:o}={}){Oe(vn(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:u}=O.useContext(Lt),{hash:d,pathname:h,search:y}=Ci(n,{relative:o}),E=h;return s!=="/"&&(E=h==="/"?s:va([s,h])),u.createHref({pathname:E,search:y,hash:d})}function vn(){return O.useContext(Ei)!=null}function Xa(){return Oe(vn(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Ei).location}var L1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k1(n){O.useContext(Lt).static||O.useLayoutEffect(n)}function V1(){let{isDataRoute:n}=O.useContext(Wt);return n?Kv():Bv()}function Bv(){Oe(vn(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(gn),{basename:o,navigator:s}=O.useContext(Lt),{matches:u}=O.useContext(Wt),{pathname:d}=Xa(),h=JSON.stringify(Es(u)),y=O.useRef(!1);return k1(()=>{y.current=!0}),O.useCallback((b,g={})=>{if(Yt(y.current,L1),!y.current)return;if(typeof b=="number"){s.go(b);return}let j=Cs(b,JSON.parse(h),d,g.relative==="path");n==null&&o!=="/"&&(j.pathname=j.pathname==="/"?o:va([o,j.pathname])),(g.replace?s.replace:s.push)(j,g.state,g)},[o,s,h,d,n])}O.createContext(null);function Ci(n,{relative:o}={}){let{matches:s}=O.useContext(Wt),{pathname:u}=Xa(),d=JSON.stringify(Es(s));return O.useMemo(()=>Cs(n,JSON.parse(d),u,o==="path"),[n,d,u,o])}function Uv(n,o){return X1(n,o)}function X1(n,o,s,u,d){Oe(vn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=O.useContext(Lt),{matches:y}=O.useContext(Wt),E=y[y.length-1],b=E?E.params:{},g=E?E.pathname:"/",j=E?E.pathnameBase:"/",M=E&&E.route;{let $=M&&M.path||"";Q1(g,!M||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let U=Xa(),H;if(o){let $=typeof o=="string"?pn(o):o;Oe(j==="/"||$.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${$.pathname}" was given in the \`location\` prop.`),H=$}else H=U;let G=H.pathname||"/",Q=G;if(j!=="/"){let $=j.replace(/^\//,"").split("/");Q="/"+G.replace(/^\//,"").split("/").slice($.length).join("/")}let Y=U1(n,{pathname:Q});Yt(M||Y!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Yt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=Lv(Y&&Y.map($=>Object.assign({},$,{params:Object.assign({},b,$.params),pathname:va([j,h.encodeLocation?h.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?j:va([j,h.encodeLocation?h.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),y,s,u,d);return o&&X?O.createElement(Ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},X):X}function Hv(){let n=Zv(),o=Mv(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",n),y=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:h},"ErrorBoundary")," or"," ",O.createElement("code",{style:h},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},o),s?O.createElement("pre",{style:d},s):null,y)}var $v=O.createElement(Hv,null),Gv=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){this.props.unstable_onError?this.props.unstable_onError(n,o):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?O.createElement(Wt.Provider,{value:this.props.routeContext},O.createElement(zs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Yv({routeContext:n,match:o,children:s}){let u=O.useContext(gn);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),O.createElement(Wt.Provider,{value:n},s)}function Lv(n,o=[],s=null,u=null,d=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let h=n,y=s?.errors;if(y!=null){let g=h.findIndex(j=>j.route.id&&y?.[j.route.id]!==void 0);Oe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),h=h.slice(0,Math.min(h.length,g+1))}let E=!1,b=-1;if(s)for(let g=0;g<h.length;g++){let j=h[g];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(b=g),j.route.id){let{loaderData:M,errors:U}=s,H=j.route.loader&&!M.hasOwnProperty(j.route.id)&&(!U||U[j.route.id]===void 0);if(j.route.lazy||H){E=!0,b>=0?h=h.slice(0,b+1):h=[h[0]];break}}}return h.reduceRight((g,j,M)=>{let U,H=!1,G=null,Q=null;s&&(U=y&&j.route.id?y[j.route.id]:void 0,G=j.route.errorElement||$v,E&&(b<0&&M===0?(Q1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,Q=null):b===M&&(H=!0,Q=j.route.hydrateFallbackElement||null)));let Y=o.concat(h.slice(0,M+1)),X=()=>{let $;return U?$=G:H?$=Q:j.route.Component?$=O.createElement(j.route.Component,null):j.route.element?$=j.route.element:$=g,O.createElement(Yv,{match:j,routeContext:{outlet:g,matches:Y,isDataRoute:s!=null},children:$})};return s&&(j.route.ErrorBoundary||j.route.errorElement||M===0)?O.createElement(Gv,{location:s.location,revalidation:s.revalidation,component:G,error:U,children:X(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},unstable_onError:u}):X()},null)}function ws(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kv(n){let o=O.useContext(gn);return Oe(o,ws(n)),o}function Vv(n){let o=O.useContext(Ao);return Oe(o,ws(n)),o}function Xv(n){let o=O.useContext(Wt);return Oe(o,ws(n)),o}function Ts(n){let o=Xv(n),s=o.matches[o.matches.length-1];return Oe(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function Qv(){return Ts("useRouteId")}function Zv(){let n=O.useContext(zs),o=Vv("useRouteError"),s=Ts("useRouteError");return n!==void 0?n:o.errors?.[s]}function Kv(){let{router:n}=kv("useNavigate"),o=Ts("useNavigate"),s=O.useRef(!1);return k1(()=>{s.current=!0}),O.useCallback(async(d,h={})=>{Yt(s.current,L1),s.current&&(typeof d=="number"?n.navigate(d):await n.navigate(d,{fromRouteId:o,...h}))},[n,o])}var e1={};function Q1(n,o,s){!o&&!e1[n]&&(e1[n]=!0,Yt(!1,s))}O.memo(Jv);function Jv({routes:n,future:o,state:s,unstable_onError:u}){return X1(n,void 0,s,u,o)}function Wv({to:n,replace:o,state:s,relative:u}){Oe(vn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=O.useContext(Lt);Yt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=O.useContext(Wt),{pathname:y}=Xa(),E=V1(),b=Cs(n,Es(h),y,u==="path"),g=JSON.stringify(b);return O.useEffect(()=>{E(JSON.parse(g),{replace:o,state:s,relative:u})},[E,g,u,o,s]),null}function fl(n){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fv({basename:n="/",children:o=null,location:s,navigationType:u="POP",navigator:d,static:h=!1}){Oe(!vn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=n.replace(/^\/*/,"/"),E=O.useMemo(()=>({basename:y,navigator:d,static:h,future:{}}),[y,d,h]);typeof s=="string"&&(s=pn(s));let{pathname:b="/",search:g="",hash:j="",state:M=null,key:U="default"}=s,H=O.useMemo(()=>{let G=ya(b,y);return G==null?null:{location:{pathname:G,search:g,hash:j,state:M,key:U},navigationType:u}},[y,b,g,j,M,U,u]);return Yt(H!=null,`<Router basename="${y}"> is not able to match the URL "${b}${g}${j}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:O.createElement(Lt.Provider,{value:E},O.createElement(Ei.Provider,{children:o,value:H}))}function Pv({children:n,location:o}){return Uv(ps(n),o)}function ps(n,o=[]){let s=[];return O.Children.forEach(n,(u,d)=>{if(!O.isValidElement(u))return;let h=[...o,d];if(u.type===O.Fragment){s.push.apply(s,ps(u.props.children,h));return}Oe(u.type===fl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=ps(u.props.children,h)),s.push(y)}),s}var no="get",io="application/x-www-form-urlencoded";function Eo(n){return n!=null&&typeof n.tagName=="string"}function Iv(n){return Eo(n)&&n.tagName.toLowerCase()==="button"}function ey(n){return Eo(n)&&n.tagName.toLowerCase()==="form"}function ty(n){return Eo(n)&&n.tagName.toLowerCase()==="input"}function ay(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ly(n,o){return n.button===0&&(!o||o==="_self")&&!ay(n)}var Lr=null;function ny(){if(Lr===null)try{new FormData(document.createElement("form"),0),Lr=!1}catch{Lr=!0}return Lr}var iy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jc(n){return n!=null&&!iy.has(n)?(Yt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`),null):n}function ry(n,o){let s,u,d,h,y;if(ey(n)){let E=n.getAttribute("action");u=E?ya(E,o):null,s=n.getAttribute("method")||no,d=Jc(n.getAttribute("enctype"))||io,h=new FormData(n)}else if(Iv(n)||ty(n)&&(n.type==="submit"||n.type==="image")){let E=n.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=n.getAttribute("formaction")||E.getAttribute("action");if(u=b?ya(b,o):null,s=n.getAttribute("formmethod")||E.getAttribute("method")||no,d=Jc(n.getAttribute("formenctype"))||Jc(E.getAttribute("enctype"))||io,h=new FormData(E,n),!ny()){let{name:g,type:j,value:M}=n;if(j==="image"){let U=g?`${g}.`:"";h.append(`${U}x`,"0"),h.append(`${U}y`,"0")}else g&&h.append(g,M)}}else{if(Eo(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=no,u=null,d=io,y=n}return h&&d==="text/plain"&&(y=h,h=void 0),{action:u,method:s.toLowerCase(),encType:d,formData:h,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rs(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function oy(n,o,s){let u=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return u.pathname==="/"?u.pathname=`_root.${s}`:o&&ya(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${s}`,u}async function uy(n,o){if(n.id in o)return o[n.id];try{let s=await import(n.module);return o[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cy(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function sy(n,o,s){let u=await Promise.all(n.map(async d=>{let h=o.routes[d.route.id];if(h){let y=await uy(h,s);return y.links?y.links():[]}return[]}));return hy(u.flat(1).filter(cy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function t1(n,o,s,u,d,h){let y=(b,g)=>s[g]?b.route.id!==s[g].route.id:!0,E=(b,g)=>s[g].pathname!==b.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==b.params["*"];return h==="assets"?o.filter((b,g)=>y(b,g)||E(b,g)):h==="data"?o.filter((b,g)=>{let j=u.routes[b.route.id];if(!j||!j.hasLoader)return!1;if(y(b,g)||E(b,g))return!0;if(b.route.shouldRevalidate){let M=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function fy(n,o,{includeHydrateFallback:s}={}){return dy(n.map(u=>{let d=o.routes[u.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function dy(n){return[...new Set(n)]}function my(n){let o={},s=Object.keys(n).sort();for(let u of s)o[u]=n[u];return o}function hy(n,o){let s=new Set;return new Set(o),n.reduce((u,d)=>{let h=JSON.stringify(my(d));return s.has(h)||(s.add(h),u.push({key:h,link:d})),u},[])}function Z1(){let n=O.useContext(gn);return Rs(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function py(){let n=O.useContext(Ao);return Rs(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Os=O.createContext(void 0);Os.displayName="FrameworkContext";function K1(){let n=O.useContext(Os);return Rs(n,"You must render this element inside a <HydratedRouter> element"),n}function gy(n,o){let s=O.useContext(Os),[u,d]=O.useState(!1),[h,y]=O.useState(!1),{onFocus:E,onBlur:b,onMouseEnter:g,onMouseLeave:j,onTouchStart:M}=o,U=O.useRef(null);O.useEffect(()=>{if(n==="render"&&y(!0),n==="viewport"){let Q=X=>{X.forEach($=>{y($.isIntersecting)})},Y=new IntersectionObserver(Q,{threshold:.5});return U.current&&Y.observe(U.current),()=>{Y.disconnect()}}},[n]),O.useEffect(()=>{if(u){let Q=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(Q)}}},[u]);let H=()=>{d(!0)},G=()=>{d(!1),y(!1)};return s?n!=="intent"?[h,U,{}]:[h,U,{onFocus:yi(E,H),onBlur:yi(b,G),onMouseEnter:yi(g,H),onMouseLeave:yi(j,G),onTouchStart:yi(M,H)}]:[!1,U,{}]}function yi(n,o){return s=>{n&&n(s),s.defaultPrevented||o(s)}}function vy({page:n,...o}){let{router:s}=Z1(),u=O.useMemo(()=>U1(s.routes,n,s.basename),[s.routes,n,s.basename]);return u?O.createElement(by,{page:n,matches:u,...o}):null}function yy(n){let{manifest:o,routeModules:s}=K1(),[u,d]=O.useState([]);return O.useEffect(()=>{let h=!1;return sy(n,o,s).then(y=>{h||d(y)}),()=>{h=!0}},[n,o,s]),u}function by({page:n,matches:o,...s}){let u=Xa(),{manifest:d,routeModules:h}=K1(),{basename:y}=Z1(),{loaderData:E,matches:b}=py(),g=O.useMemo(()=>t1(n,o,b,d,u,"data"),[n,o,b,d,u]),j=O.useMemo(()=>t1(n,o,b,d,u,"assets"),[n,o,b,d,u]),M=O.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let G=new Set,Q=!1;if(o.forEach(X=>{let $=d.routes[X.route.id];!$||!$.hasLoader||(!g.some(Z=>Z.route.id===X.route.id)&&X.route.id in E&&h[X.route.id]?.shouldRevalidate||$.hasClientLoader?Q=!0:G.add(X.route.id))}),G.size===0)return[];let Y=oy(n,y,"data");return Q&&G.size>0&&Y.searchParams.set("_routes",o.filter(X=>G.has(X.route.id)).map(X=>X.route.id).join(",")),[Y.pathname+Y.search]},[y,E,u,d,g,o,n,h]),U=O.useMemo(()=>fy(j,d),[j,d]),H=yy(j);return O.createElement(O.Fragment,null,M.map(G=>O.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...s})),U.map(G=>O.createElement("link",{key:G,rel:"modulepreload",href:G,...s})),H.map(({key:G,link:Q})=>O.createElement("link",{key:G,nonce:s.nonce,...Q})))}function xy(...n){return o=>{n.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var J1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{J1&&(window.__reactRouterVersion="7.9.1")}catch{}function Sy({basename:n,children:o,window:s}){let u=O.useRef();u.current==null&&(u.current=uv({window:s,v5Compat:!0}));let d=u.current,[h,y]=O.useState({action:d.action,location:d.location}),E=O.useCallback(b=>{O.startTransition(()=>y(b))},[y]);return O.useLayoutEffect(()=>d.listen(E),[d,E]),O.createElement(Fv,{basename:n,children:o,location:h.location,navigationType:h.action,navigator:d})}var W1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dl=O.forwardRef(function({onClick:o,discover:s="render",prefetch:u="none",relative:d,reloadDocument:h,replace:y,state:E,target:b,to:g,preventScrollReset:j,viewTransition:M,...U},H){let{basename:G}=O.useContext(Lt),Q=typeof g=="string"&&W1.test(g),Y,X=!1;if(typeof g=="string"&&Q&&(Y=g,J1))try{let Ee=new URL(window.location.href),it=g.startsWith("//")?new URL(Ee.protocol+g):new URL(g),ot=ya(it.pathname,G);it.origin===Ee.origin&&ot!=null?g=ot+it.search+it.hash:X=!0}catch{Yt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=qv(g,{relative:d}),[Z,ne,K]=gy(u,U),ie=Cy(g,{replace:y,state:E,target:b,preventScrollReset:j,relative:d,viewTransition:M});function F(Ee){o&&o(Ee),Ee.defaultPrevented||ie(Ee)}let we=O.createElement("a",{...U,...K,href:Y||$,onClick:X||h?o:F,ref:xy(H,ne),target:b,"data-discover":!Q&&s==="render"?"true":void 0});return Z&&!Q?O.createElement(O.Fragment,null,we,O.createElement(vy,{page:$})):we});dl.displayName="Link";var jy=O.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:u="",end:d=!1,style:h,to:y,viewTransition:E,children:b,...g},j){let M=Ci(y,{relative:g.relative}),U=Xa(),H=O.useContext(Ao),{navigator:G,basename:Q}=O.useContext(Lt),Y=H!=null&&Oy(M)&&E===!0,X=G.encodeLocation?G.encodeLocation(M).pathname:M.pathname,$=U.pathname,Z=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;s||($=$.toLowerCase(),Z=Z?Z.toLowerCase():null,X=X.toLowerCase()),Z&&Q&&(Z=ya(Z,Q)||Z);const ne=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let K=$===X||!d&&$.startsWith(X)&&$.charAt(ne)==="/",ie=Z!=null&&(Z===X||!d&&Z.startsWith(X)&&Z.charAt(X.length)==="/"),F={isActive:K,isPending:ie,isTransitioning:Y},we=K?o:void 0,Ee;typeof u=="function"?Ee=u(F):Ee=[u,K?"active":null,ie?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let it=typeof h=="function"?h(F):h;return O.createElement(dl,{...g,"aria-current":we,className:Ee,ref:j,style:it,to:y,viewTransition:E},typeof b=="function"?b(F):b)});jy.displayName="NavLink";var Ay=O.forwardRef(({discover:n="render",fetcherKey:o,navigate:s,reloadDocument:u,replace:d,state:h,method:y=no,action:E,onSubmit:b,relative:g,preventScrollReset:j,viewTransition:M,...U},H)=>{let G=Ty(),Q=Ry(E,{relative:g}),Y=y.toLowerCase()==="get"?"get":"post",X=typeof E=="string"&&W1.test(E),$=Z=>{if(b&&b(Z),Z.defaultPrevented)return;Z.preventDefault();let ne=Z.nativeEvent.submitter,K=ne?.getAttribute("formmethod")||y;G(ne||Z.currentTarget,{fetcherKey:o,method:K,navigate:s,replace:d,state:h,relative:g,preventScrollReset:j,viewTransition:M})};return O.createElement("form",{ref:H,method:Y,action:Q,onSubmit:u?b:$,...U,"data-discover":!X&&n==="render"?"true":void 0})});Ay.displayName="Form";function Ey(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F1(n){let o=O.useContext(gn);return Oe(o,Ey(n)),o}function Cy(n,{target:o,replace:s,state:u,preventScrollReset:d,relative:h,viewTransition:y}={}){let E=V1(),b=Xa(),g=Ci(n,{relative:h});return O.useCallback(j=>{if(ly(j,o)){j.preventDefault();let M=s!==void 0?s:Ai(b)===Ai(g);E(n,{replace:M,state:u,preventScrollReset:d,relative:h,viewTransition:y})}},[b,E,g,s,u,o,n,d,h,y])}var zy=0,wy=()=>`__${String(++zy)}__`;function Ty(){let{router:n}=F1("useSubmit"),{basename:o}=O.useContext(Lt),s=Qv();return O.useCallback(async(u,d={})=>{let{action:h,method:y,encType:E,formData:b,body:g}=ry(u,o);if(d.navigate===!1){let j=d.fetcherKey||wy();await n.fetch(j,s,d.action||h,{preventScrollReset:d.preventScrollReset,formData:b,body:g,formMethod:d.method||y,formEncType:d.encType||E,flushSync:d.flushSync})}else await n.navigate(d.action||h,{preventScrollReset:d.preventScrollReset,formData:b,body:g,formMethod:d.method||y,formEncType:d.encType||E,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[n,o,s])}function Ry(n,{relative:o}={}){let{basename:s}=O.useContext(Lt),u=O.useContext(Wt);Oe(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),h={...Ci(n||".",{relative:o})},y=Xa();if(n==null){h.search=y.search;let E=new URLSearchParams(h.search),b=E.getAll("index");if(b.some(j=>j==="")){E.delete("index"),b.filter(M=>M).forEach(M=>E.append("index",M));let j=E.toString();h.search=j?`?${j}`:""}}return(!n||n===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:va([s,h.pathname])),Ai(h)}function Oy(n,{relative:o}={}){let s=O.useContext(Y1);Oe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=F1("useViewTransitionState"),d=Ci(n,{relative:o});if(!s.isTransitioning)return!1;let h=ya(s.currentLocation.pathname,u)||s.currentLocation.pathname,y=ya(s.nextLocation.pathname,u)||s.nextLocation.pathname;return fo(d.pathname,y)!=null||fo(d.pathname,h)!=null}const My=()=>{const[n,o]=O.useState(!1),[s,u]=O.useState(!1),d=()=>u(!1);return O.useEffect(()=>{const h=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]),c.jsx(av,{$isScrolled:n,children:c.jsxs(lv,{children:[c.jsx(nv,{href:"/",children:c.jsx("img",{src:ov,alt:"Logo",width:150,height:"auto"})}),c.jsx(rv,{onClick:()=>u(!s),"aria-label":"Menu",children:"☰"}),c.jsxs(iv,{$isOpen:s,children:[c.jsx(vi,{children:c.jsx(dl,{className:"navLink",to:"/",onClick:d,children:"HOME"})}),c.jsx(vi,{children:c.jsx(dl,{className:"navLink",to:"/seguros",onClick:d,children:"SEGUROS"})}),c.jsx(vi,{children:c.jsx(dl,{className:"navLink",to:"/consorcios",onClick:d,children:"CONSÓRCIOS"})}),c.jsx(vi,{children:c.jsx(dl,{className:"navLink",to:"/saude",onClick:d,children:"SAÚDE"})}),c.jsx(vi,{children:c.jsx(dl,{className:"navLink",to:"/contato",onClick:d,children:"CONTATO"})})]})]})})},Dy=R.footer`
  background-color: ${p.colors.dark};
  color: ${p.colors.white};
  padding: 4rem 0 0;
`,Ny=R.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
  
  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,kr=R.div`
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
    color: ${p.colors.white};
    text-decoration: none;
    transition: all ${p.transitions.default};
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    svg {
      font-size: 1.2rem;
    }
  }
`,Vr=R.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: ${p.colors.primary};
`,jt=R.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all ${p.transitions.default};
  
  &:hover {
    color: ${p.colors.primary};
    padding-left: 5px;
  }
`,_y=R.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    transition: all ${p.transitions.default};
    
    &:hover {
      color: ${p.colors.primary};
      transform: translateY(-3px);
    }
  }
`,qy=R.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  
  p {
    margin: 0.5rem 0;
  }
`;var P1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a1=Le.createContext&&Le.createContext(P1),By=["attr","size","title"];function Uy(n,o){if(n==null)return{};var s=Hy(n,o),u,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(n);for(d=0;d<h.length;d++)u=h[d],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(n,u)&&(s[u]=n[u])}return s}function Hy(n,o){if(n==null)return{};var s={};for(var u in n)if(Object.prototype.hasOwnProperty.call(n,u)){if(o.indexOf(u)>=0)continue;s[u]=n[u]}return s}function mo(){return mo=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(n[u]=s[u])}return n},mo.apply(this,arguments)}function l1(n,o){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);o&&(u=u.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),s.push.apply(s,u)}return s}function ho(n){for(var o=1;o<arguments.length;o++){var s=arguments[o]!=null?arguments[o]:{};o%2?l1(Object(s),!0).forEach(function(u){$y(n,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):l1(Object(s)).forEach(function(u){Object.defineProperty(n,u,Object.getOwnPropertyDescriptor(s,u))})}return n}function $y(n,o,s){return o=Gy(o),o in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s,n}function Gy(n){var o=Yy(n,"string");return typeof o=="symbol"?o:o+""}function Yy(n,o){if(typeof n!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var u=s.call(n,o);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function I1(n){return n&&n.map((o,s)=>Le.createElement(o.tag,ho({key:s},o.attr),I1(o.child)))}function _e(n){return o=>Le.createElement(Ly,mo({attr:ho({},n.attr)},o),I1(n.child))}function Ly(n){var o=s=>{var{attr:u,size:d,title:h}=n,y=Uy(n,By),E=d||s.size||"1em",b;return s.className&&(b=s.className),n.className&&(b=(b?b+" ":"")+n.className),Le.createElement("svg",mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,u,y,{className:b,style:ho(ho({color:n.color||s.color},s.style),n.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),h&&Le.createElement("title",null,h),n.children)};return a1!==void 0?Le.createElement(a1.Consumer,null,s=>o(s)):o(P1)}function ky(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"},child:[]}]})(n)}function Vy(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(n)}function Xy(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"},child:[]}]})(n)}function Qy(n){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function Zy(n){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function Ky(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(n)}function e0(n){return _e({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function Jy(n){return _e({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(n)}function Wy(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function Fy(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(n)}function Py(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function Iy(n){return _e({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"},child:[]}]})(n)}function eb(n){return _e({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function tb(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(n)}function ab(n){return _e({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"},child:[]}]})(n)}function lb(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(n)}function nb(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"},child:[]}]})(n)}function ib(n){return _e({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"},child:[]}]})(n)}const rb=()=>c.jsxs(Dy,{children:[c.jsxs(Ny,{children:[c.jsxs(kr,{children:[c.jsx(Vr,{children:"Serviços"}),c.jsx(jt,{href:"#",children:"Seguros"}),c.jsx(jt,{href:"#",children:"Consócios"}),c.jsx(jt,{href:"#",children:"Planos Saúde"})]}),c.jsxs(kr,{children:[c.jsx(Vr,{children:"Empresa"}),c.jsx(jt,{href:"#",children:"Sobre Nós"}),c.jsx(jt,{href:"#",children:"Trabalhe Conosco"}),c.jsx(jt,{href:"#",children:"Notícias"}),c.jsx(jt,{href:"#",children:"Blog"}),c.jsx(jt,{href:"#",children:"Contato"})]}),c.jsxs(kr,{children:[c.jsx(Vr,{children:"Transparência"}),c.jsx(jt,{href:"#",children:"Termos de Uso"}),c.jsx(jt,{href:"#",children:"Política de Privacidade"}),c.jsx(jt,{href:"#",children:"Regulamentos"}),c.jsx(jt,{href:"#",children:"Ouvidoria"}),c.jsx(jt,{href:"#",children:"Dúvidas Frequentes"})]}),c.jsxs(kr,{children:[c.jsx(Vr,{children:"Baixe nosso App"}),c.jsxs("div",{className:"app-buttons",children:[c.jsxs("a",{href:"#",className:"app-button",children:[c.jsx(Xy,{})," Google Play"]}),c.jsxs("a",{href:"#",className:"app-button",children:[c.jsx(ky,{})," App Store"]})]}),c.jsxs(_y,{children:[c.jsx("a",{href:"#","aria-label":"Facebook",children:c.jsx(Vy,{})}),c.jsx("a",{href:"#","aria-label":"Instagram",children:c.jsx(Qy,{})}),c.jsx("a",{href:"#","aria-label":"LinkedIn",children:c.jsx(Zy,{})}),c.jsx("a",{href:"#","aria-label":"Twitter",children:c.jsx(Ky,{})}),c.jsx("a",{href:"#","aria-label":"YouTube",children:c.jsx(Jy,{})})]})]})]}),c.jsxs(qy,{children:[c.jsxs("p",{children:["© ",new Date().getFullYear()," Aba Seguros. Todos os direitos reservados."]}),c.jsx("p",{children:"CNPJ: 00.000.000/0000-00 | SUSEP: 00000.000000/0000-00"})]})]}),ob=R.a`
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
`,ub="550000000000",cb=()=>{const n=`https://wa.me/${ub}`;return c.jsx(ob,{href:n,target:"_blank",rel:"noreferrer","aria-label":"Fale conosco no WhatsApp",children:c.jsx(e0,{})})},sb=R.section`
  padding: 3rem 0;
  background-color: ${p.colors.lightGray};

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;R.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;const fb=R.div`
  background: ${p.colors.lightGray};
  border-radius: 12px;
  border: 1px solid ${p.colors.border||"#e5e7eb"};
  padding: 1.25rem;
  transition: all ${p.transitions.default};
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    font-size: 1.5rem;
    margin: 0 0 0.75rem;
    color: ${p.colors.dark};
    text-align: center;
  }

  p {
    color: ${p.colors.mediumGray};
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
    color: ${p.colors.white};
    background-color: ${p.colors.primary};
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all ${p.transitions.default};
    width: auto;
    max-width: 200px;
    margin: 0 auto;
  }

  &:hover {
    box-shadow: ${p.shadows.medium};
  }
`,db=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,mb=R.div`
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
`,hb=R.div`
  flex: 0 0 32%;
  scroll-snap-align: start;

  @media (max-width: ${p.breakpoints.tablet}) {
    flex-basis: 50%;
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    flex-basis: 90%;
  }
`,pb=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
`,n1=R.button`
  background: ${p.colors.white};
  color: ${p.colors.primary};
  border: 1px solid ${p.colors.primary};
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: ${p.transitions.default};

  &:hover {
    background: ${p.colors.primary};
    color: ${p.colors.white};
  }
`,gb=R.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: ${p.colors.primaryLight};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5%;
  }
`,vb=R.section`
  background: ${p.colors.white};
  padding: 10rem 0 8rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,yb=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,bb=R.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,xb=R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    align-items: center;
  }
`,Sb=R.h1`
  color: ${({theme:n})=>n.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${p.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,jb=R.p`
  color: ${p.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${p.breakpoints.tablet}) {
    max-width: 100%;
  }
`,Ab=R.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: ${p.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,Eb=R.div`
  position: relative;
  
  background: linear-gradient(
    to bottom,
    ${p.colors.white} 0%,
    ${p.colors.white} 40%,
    ${p.colors.lightGray} 41%,
    ${p.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${p.breakpoints.mobile}) {
    
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`,Cb=R.section`
  background: ${p.colors.white};
  padding: 4rem 0;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,zb=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,Wc=R.div`
  background: ${p.colors.lightGray};
  border: 1px solid ${p.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  transition: ${p.transitions.default};
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  h4 {
    color: ${p.colors.dark};
    margin: 0 0 0.25rem;
    font-size: 1.1rem;
  }

  p {
    color: ${p.colors.mediumGray};
    margin: 0;
    line-height: 1.5;
    font-size: 0.95rem;
  }

  &:hover {
    background: ${p.colors.white};
    box-shadow: ${p.shadows.small};
  }
`,wb=R.section`
  background: ${p.colors.lightGray};
  padding: 4rem 0;
`,Tb=R.ol`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  list-style: none;
  counter-reset: step;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,Xr=R.li`
  background: ${p.colors.white};
  border: 1px solid ${p.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;

  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -12px;
    left: -12px;
    background: ${p.colors.primary};
    color: ${p.colors.white};
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
    color: ${p.colors.dark};
  }
  p {
    margin: 0;
    color: ${p.colors.mediumGray};
  }
`,Rb=R.section`
  background: ${p.colors.secundary};
  color: ${p.colors.white};
  padding: 2rem 0;
`,Ob=R.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    padding: 0 1rem;
  }
`,Qr=R.div`
  strong {
    font-size: 1.5rem;
    display: block;
  }
  span {
    opacity: 0.9;
    font-size: 0.95rem;
  }
`,Mb=R.section`
  background: ${p.colors.primary}; /* Cor de destaque */
  color: ${p.colors.white};
  padding: 3rem 0;
`,Db=R.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,Nb=R.div`
  display: flex;
  flex-shrink: 0;
  
`,Fc=R.button`
  background: ${p.colors.secundary};
  color: ${p.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${p.colors.primaryDark};
    transform: scale(1.05);
  }
`,_b=R.section`
  background: ${p.colors.white};
  padding: 4rem 0;
`,qb=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,i1=R.div`
  background: ${p.colors.lightGray};
  border: 1px solid ${p.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    margin: 0 0 0.5rem;
    color: ${p.colors.dark};
  }
  p {
    margin: 0 0 1rem;
    color: ${p.colors.mediumGray};
  }
  ul {
    margin: 0;
    padding-left: 1rem;
  }
  li {
    color: ${p.colors.mediumGray};
    margin: 0.25rem 0;
  }
`;R.div`
  font-family: ${({theme:n})=>n.fonts.primary};
  color: ${({theme:n})=>n.colors.dark};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 0 15px;
  }
`;const Et=R.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: .6rem;
  text-align: center;
  color: #001f3D;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,Ct=R.p`
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
`,Bb=R.section`
  padding: 5rem 0;
  background-color: ${p.colors.lightGray};
  
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
    
    .faq-list {
      padding: 0 1rem;
    }
  }
`,Ub=R.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all ${p.transitions.default};
`,Hb=R.div`
  padding: 1.5rem 0;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  svg {
    color: ${p.colors.primary};
    font-size: 1.2rem;
    transition: transform ${p.transitions.default};
  }
  
  &:hover {
    color: ${p.colors.primary};
  }
`,$b=R.div`
  max-height: ${({isOpen:n})=>n?"500px":"0"};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: ${({isOpen:n})=>n?"0 0 1.5rem":"0"};
  opacity: ${({isOpen:n})=>n?"1":"0"};
  line-height: 1.6;
  color: ${p.colors.mediumGray};
`;function Gb(n){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function Yb(n){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}const Lb=()=>{const[n,o]=O.useState(null),s=[{question:"Como faço para contratar um seguro?",answer:"Você pode contratar diretamente pelo nosso site, através do telefone ou em uma de nossas agências. O processo é rápido e simples."},{question:"Quanto tempo leva para aprovar uma apólice?",answer:"A aprovação é quase instantânea para a maioria dos seguros. Em alguns casos específicos pode levar até 24 horas."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Sim, você pode cancelar a qualquer momento. Consulte nossas políticas para entender sobre possíveis taxas administrativas."},{question:"Como faço para acionar meu seguro?",answer:"Você pode acionar através do nosso aplicativo, site ou central telefônica 24 horas. Nossa equipe irá guiá-lo em todo o processo."},{question:"Quais documentos preciso para contratar?",answer:"Depende do tipo de seguro. Para seguros de automóvel, por exemplo, precisamos da CNH e documento do veículo. Nossa equipe informará todos os documentos necessários durante a contratação."}],u=d=>{o(n===d?null:d)};return c.jsxs(Bb,{id:"faq",children:[c.jsxs(Et,{children:["Perguntas ",c.jsx("span",{children:"Frequentes"})]}),c.jsx(Ct,{children:"Tire suas dúvidas sobre nossos produtos e serviços"}),c.jsx("div",{className:"faq-list",children:s.map((d,h)=>c.jsxs(Ub,{isOpen:n===h,children:[c.jsxs(Hb,{onClick:()=>u(h),children:[d.question,n===h?c.jsx(Gb,{}):c.jsx(Yb,{})]}),c.jsx($b,{isOpen:n===h,children:d.answer})]},h))})]})},Ms=R.section`
  padding: 5rem 0;
  background-color: ${p.colors.lightGray};
  
  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,kb=ev`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,Ds=R.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 2rem;
`,Ns=R.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: nowrap;
  width: max-content;
  animation: ${kb} 20s linear infinite;

  // Pause on hover (desktop)
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation-play-state: paused;
    }
  }
`,_s=R.div`
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all ${p.transitions.default};
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
`,po="/AbaCorretora/assets/Porto-C52nXgTN.png",gs="/AbaCorretora/assets/suhai-DQ77UtvM.png",t0="/AbaCorretora/assets/bradesco-DPwe9rAB.png",a0="/AbaCorretora/assets/akad-DmBhX9m1.png",l0="/AbaCorretora/assets/allianz-S2Auim8J.png",n0="/AbaCorretora/assets/azul-seguros-CjB3TlL8.png",Vb="/AbaCorretora/assets/hdi-C9p4X3wS.png",i0="/AbaCorretora/assets/itau-aX-wJTv5.png",Xb="/AbaCorretora/assets/liberty-DCyMrL8_.png",r0="/AbaCorretora/assets/mapfre-BBgIKfjJ.png",Qb="/AbaCorretora/assets/mitsui-B4RxfRh0.png",o0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbUAAABzCAMAAAAosmzyAAAAYFBMVEX/gKH/////lK//e57/ucr/eJz/9/r/+/z/h6b/nbX/ep3/5Or/2OH/ytf/2+T/g6T/4ej/0dz/7vL/8/b/6e7/q8D/jKr/lrH/wtH/kKz/ztr/v8//orn/8PP/obj/s8ZKXbT9AAAIyElEQVR4nO2da4PiKgyGqYhWvFTH+7gz/v9/edpxZ/fsGPKG9KbY97OQwGOB0gSMUajID+fj5/6yXL9NMp2AhVGo3MRpHBaINjdS1PTVO7P9eLlS907N3uNkrXfeHGaX9bRxu89M7aaqd5zJj+NVC+jqN7fy7niZN2v3+al9yzo3Gq8je6dm70ld864Y7xq0mw61StaZa6PgGvHqt2vHTWN206Jmqt45LBUTia734uTMSeoZqCk5aqW8Hzc1xTXo1ZdnUm6gnhSplb1jr808b4169eXZYdWA3TSplb1TvOs4RfWeRu6XYCAAdaRKreyd84eWlbj3VLJmUdduutTKF7mlmpaw95Ry15p2E6ZWDUZ1Z7c2vCrlR8AxUD5pasbmNUfJVryqHDvwkxsonja1cg55e0hqxhbbgVpYNnYLsBtq5TDAPW2gcPLUjI3aAOyMWjlIMnMbKJs+NWPYsag3asbOBmph2cNjUjPuMlALy/96TGrGBedcUPAVqBkX8Y2kS2qmCE1toNxLUDNW+9rWqlflKBDaJAHlXoTa52NSMy7wOgmKvQY140TfR7qnFlpHgmIvQs0o15Ete1X+nei3SVCqa2rW9kPN4a8jKmruXt5bK/bL0utbUEpN7XAc6aSjVrd3zLkVaqP16qcWm+VlPyqc0DdH7gEgs0pqXjlRhISoBXrnWDgv7B3VfiSolNnemI8L0WjlTwq7WmrKEScoRC1YcHc6iP7Wdq9xC1XKbEpl2eYs4UYOAqDM01MrtT5KesdrvpCCOnlqWbYU/J/IxT8okwK1LFsY3D0qj0GdiFr2VkDHyCESlEmDWjYZwd5RDZGoTkQtm+TIL3OMt5sItSw7Qmy5wi1QJaaWfUC/qM1IUCQZatMC9U5o94gTqFJALdugSZda3YIiyVDL5qh3vCKuFVQpoQabRvkFiqRDLduDscjCKMR7Aa9E1FbgjZLyC9hNiNoHeNhEXfxDwCtZlWBBQlUC7CZELZuBh02xHAFeyaiNgV/EzjawmxK1Jdrcis+PAhXKqC3AIOCj7aZEbYcmkPhFJPBKRm0LqLlouylRy8DiP/AtixPwSkZtCmpx92MAKJEUtQPonfhtf+CVcIGD/LqPagF2k6IGliMuPtEeeCWkduZrIV7/gd2kqH0CavE+A68aonY/cgO7SVH79aDU0AjZ2bPmN9NJpNiGdTJCxn9/B141tBq5D0IAJdRxI0Ws+NyWTlYjPc1rcOV/v+kP7HYXo8Wv4Jqghrb9+1r5o7fs7t7X4sX3Wcpv2Vewo1VE202J2qPuaKHdY+JjNrCbEjX0Obun3ePF43ypiVfr1N6Qx1SABhCoUUQNvK0ZTxyLAookRA28rfX1VXQJIxCIpS0okg619WNGIOxwzB8x3YISyVCbPGa0zxa6RSJQFLn1wnNRm54fMrJuh6HZcbzdRKhtMbQ+olhPkohxql9AmTSobR4xYnz6nkvyfch8SFAmBWoLUe6K7TQ7Y7vZF6IcLU8eOgIKPTu1yeKaizxtJRPKnN+X9xrvj7nzj5h1GK961KjeuexnBy/OyVSdGA+r9UQOa0wKa+DPBEo9CzUqw9fG5D8rNkYk1Orq0bPp61GrbV2XkdyyV8FxGxR7EWo22M5+qdGz2kDtJq88JLJdr4yn3rAHar/lVQvI9qkFt2tAudegptnM6oDaE5w02CM13aq/dWrPcKpnvWifWpZDs0e/1LiD9EBRfWRdHinT17OmyTbsgFofp1X7RTaNFNs9LZ4xfq5xgUZrXvVzMnzXEeNqsX9pqLa8AtBenVqtJ609an7Uy40nT0LN13rSWqPm0KnnoHza1Jz27fpbrXjFLflldpOmRkUaxqkNr6zBO9mgioSpuUOdG2puat6r8vkXDNqgjmSpWUsechqppr0ybiTapwG1JErNun2NO4X+qlmvjMuFt3iAehKlNqt169pfNeqUy8XRz6CmNKnFb2K9rd5Pl9NyM//3PapBl9woostAZWlSMy5q9bje59VB85WcOf7/+vhmvLHeHS5RSyNQYaLUqJNXQtrk/8Z5eXf988DVd6QkVhxPsatZUGmq1MQxWdvZfUO9+Z6A9Pat9VXU3ej6vlNsz4Dan4Wa/ykUVOdkC/81HZ33veUEjJhidCZ1nO2vp8VavY4FZp+F2mrxQyjHUBbgEzyewN8uRwA26ny6YwXsPgu16IYZK7iZZh0Oxb8BQTYGaqzuS6xg5izco91yz6urEoKBiYEaL6LIFeWswDGSPzShClcGFp6OWsd3QhFFpvBaCnBVHjpp/5AcNX/azbWizGkyoXD+PB+cBY7dqsYT8Itno0alAElFvb+o8tfgGMlG88GJsWSCf9GOgN3u7xWlkzZ1WYe1xkh0a0Pp6Rb9YKDGinYS33LCnAwjSeVGTRmosQp4icfI4EdIeIBTdagE+sFAjVXITThGBhMz4LRWXbCLfjBQYxVyE4+RoTAteC5hKXRw2UCNV7B9Y7hFEnizvAiSutGTPFDjFW4gHCOpuwQzfOePqCkDNVbhBs7RSBfIWB+etSg1TC0bw3UkuWcqmdfQ7slAjRfXRNS3tEV08nelGap4oMaKayI6W5weI3eClf8V/WCgxopt4wWuI6kxEo+QfoOaMlBjxTcS33FOpIuBu4gqTz/QDwZqrPhGwt0pSySMwYusy85B1Q7UWIFWnuAYeR9gD+9Fd+8Dtb9NbYEavIHBmPsotwuY2fLkvmXXUCvU8BhJdDD/sFWPp6LSRgTspkJNcNnBfeg/G8LwNRWipgzUWOGGwjHSEmNkuJE2n+LeG6jxwg19g9SILr4GW3ljrKiyEQG76VBTjZGhDz02/5D03kCNl6SpcIykTj59p467drPfb+VVbgwjpztNGct6zqwPBsNPHO+wXmRk3Zl300qauvVsJaVl6j/68fmTmy/+ZOKaMa/aR2MEBMwG84WmV1BSL4raCZQRtXWBLF/J+Mj5zP4BV6V1/g+F7BbaQb1ouxnPvl7eRvvlP8kB/wFHA6bFLqeEpQAAAABJRU5ErkJggg==",u0="/AbaCorretora/assets/tokio-B-CNgMuQ.png",c0="/AbaCorretora/assets/zurich-Dd7j6AuJ.png",s0="/AbaCorretora/assets/metlife-jPSH1Vcq.png",f0="/AbaCorretora/assets/unimed-Cq3D61gm.png",d0="/AbaCorretora/assets/sulamerica-BW3vbA9F.png",m0="/AbaCorretora/assets/portosaude-B9SKI3Ch.png",h0="/AbaCorretora/assets/amil-BdfManNt.png",p0="/AbaCorretora/assets/bradesco-saude-C93lh7eZ.png",g0="/AbaCorretora/assets/hapvida-P-8p03xQ.png",v0="/AbaCorretora/assets/sao-cristovao--34f1olN.png",Zb="/AbaCorretora/assets/sao-miguel-saude-C_Q27lBK.png",y0="/AbaCorretora/assets/alice-DtIahoLQ.png",Kb="/AbaCorretora/assets/allcare-CrdR-KOx.png",b0="/AbaCorretora/assets/medsenior-Bv3DSoKZ.png",x0="/AbaCorretora/assets/preventsenior-RL4u4vD-.png",Jb="/AbaCorretora/assets/omint-DSNNZjXj.png",Wb=()=>{const n=[{name:"Porto Seguro",logo:po},{name:"Unimed",logo:f0},{name:"Suhai",logo:gs},{name:"Metlife",logo:s0},{name:"Bradesco",logo:t0},{name:"Sul America",logo:d0},{name:"Akad",logo:a0},{name:"Porto Saude",logo:m0},{name:"Allianz",logo:l0},{name:"Amil",logo:h0},{name:"Porto Seguro",logo:po},{name:"Bradesco Saude",logo:p0},{name:"Azul",logo:n0},{name:"Hapvida",logo:g0},{name:"Itau",logo:i0},{name:"Sao Cristovao",logo:v0},{name:"Mapfre",logo:r0},{name:"Alice",logo:y0},{name:"Pier",logo:o0},{name:"Prevent Senior",logo:x0},{name:"Tokio",logo:u0},{name:"Medsenior",logo:b0},{name:"Zurich",logo:c0}],o=[...n,...n];return c.jsx(Ms,{children:c.jsx(Ds,{children:c.jsx(Ns,{children:o.map((s,u)=>c.jsx(_s,{children:c.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},u))})})})},Fb=()=>{const n=[{name:"Porto Seguro",logo:po},{name:"Suhai",logo:gs},{name:"Bradesco",logo:t0},{name:"Akad",logo:a0},{name:"Allianz",logo:l0},{name:"Porto Seguro",logo:po},{name:"Suhai",logo:gs},{name:"Azul",logo:n0},{name:"HDI",logo:Vb},{name:"Itau",logo:i0},{name:"Liberty",logo:Xb},{name:"Mapfre",logo:r0},{name:"Mitsui",logo:Qb},{name:"Pier",logo:o0},{name:"Tokio",logo:u0},{name:"Zurich",logo:c0}],o=[...n,...n];return c.jsx(Ms,{children:c.jsx(Ds,{children:c.jsx(Ns,{children:o.map((s,u)=>c.jsx(_s,{children:c.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},u))})})})},Pb=()=>{const n=[{name:"Metlife",logo:s0},{name:"Unimed",logo:f0},{name:"Sul America",logo:d0},{name:"Porto Saude",logo:m0},{name:"Amil",logo:h0},{name:"Bradesco Saude",logo:p0},{name:"Hapvida",logo:g0},{name:"Sao Cristovao",logo:v0},{name:"Sao Miguel",logo:Zb},{name:"Alice",logo:y0},{name:"Allcare",logo:Kb},{name:"Medsenior",logo:b0},{name:"Prevent Senior",logo:x0},{name:"Omint",logo:Jb}],o=[...n,...n];return c.jsx(Ms,{children:c.jsx(Ds,{children:c.jsx(Ns,{children:o.map((s,u)=>c.jsx(_s,{children:c.jsx("img",{src:s.logo,alt:s.name,loading:"lazy"})},u))})})})},Ib=R.section`
  background-color: ${p.colors.dark};
  padding: 5rem 0;
  color: ${p.colors.white};
  
  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`,ex=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,tx=R.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`,ax=R.div`
  background: ${p.colors.lightGray};
  border-radius: 12px;
  padding: 2.5rem;
  position: relative;
  color: ${p.colors.dark};
  
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
      color: ${p.colors.mediumGray};
    }
  }
  
  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`,lx=R.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,nx=()=>c.jsx(Ib,{id:"testimonials",children:c.jsxs(ex,{children:[c.jsxs("div",{children:[c.jsx(lx,{children:"O que nossos clientes dizem"}),c.jsx(tx,{children:"Mais de 10.000 clientes confiam em nossos serviços de proteção. Sua satisfação é nossa maior recompensa."})]}),c.jsxs(ax,{children:[c.jsx("div",{className:"quote",children:'"'}),c.jsx("p",{className:"testimonial",children:"Contratei o seguro auto e fiquei impressionado com a agilidade no atendimento quando precisei acionar. Indico para todos!"}),c.jsxs("div",{className:"author",children:[c.jsx("img",{src:"/assets/avatars/user1.jpg",alt:"Cliente satisfeito"}),c.jsxs("div",{children:[c.jsx("h4",{children:"Roberto Silva"}),c.jsx("span",{children:"Cliente há 3 anos"})]})]})]})]})}),ix="/AbaCorretora/assets/img-home-DI0DXi0P.png",rx="/AbaCorretora/assets/automovel-CYt8XeY6.png",ox="/AbaCorretora/assets/residencial-C-HcLcoF.png",ux="/AbaCorretora/assets/saude-By10Whs5.png",cx="/AbaCorretora/assets/vida-DM2KMRXC.png",sx="/AbaCorretora/assets/empresa-rTyW7nsV.png",fx="/AbaCorretora/assets/viagem-uVA-uhP0.png",dx="/AbaCorretora/assets/celular-eezvoOPE.png",mx="/AbaCorretora/assets/pet-CVo2CbI7.png",hx=()=>{const n=[{icon:rx,title:"Seguro Auto",description:"Proteção completa para seu veículo contra colisões, roubos e danos."},{icon:ox,title:"Seguro Residencial",description:"Cobertura contra incêndios, roubos e desastres naturais."},{icon:ux,title:"Plano de Saúde",description:"Planos individuais ou familiares com ampla rede de hospitais."},{icon:cx,title:"Seguro de Vida",description:"Proteção financeira para sua família em caso de imprevistos."},{icon:fx,title:"Seguro Viagem",description:"Cobertura para emergências médicas e extravio de bagagem."},{icon:sx,title:"Seguro Empresarial",description:"Proteção para seu negócio contra riscos operacionais e patrimoniais."},{icon:dx,title:"Seguro Celular",description:"Cobertura para danos acidentais e roubo de seu aparelho."},{icon:mx,title:"Petlove Saúde",description:"Planos de saúde para seu animal de estimação."}];return c.jsxs(c.Fragment,{children:[c.jsxs(vb,{children:[c.jsx(yb,{children:c.jsxs(bb,{children:[c.jsxs(xb,{children:[c.jsx(Sb,{children:"Proteção completa para manter você e sua família seguros."}),c.jsx(jb,{children:"Soluções em seguros, convênios e consórcios para pessoas e empresas, com atendimento consultivo e as melhores condições do mercado."}),c.jsx(Fc,{children:"Contrate Agora"})]}),c.jsx(Ab,{src:ix,alt:"imagem hero"})]})}),c.jsx(Eb,{})]}),c.jsxs(sb,{id:"products",children:[c.jsx(Et,{children:"Nossos Planos"}),c.jsx(Ct,{children:"Opções que cabem no seu orçamento"}),(()=>{const o=O.useRef(null),s=d=>{if(!o.current)return;const h=o.current.parentElement,y=o.current.querySelector(":scope > *"),E=y?y.getBoundingClientRect().width+16:h.clientWidth,b=d==="next"?E:-E;o.current.scrollBy({left:b,behavior:"smooth"})},u=d=>{d.key==="ArrowRight"&&s("next"),d.key==="ArrowLeft"&&s("prev")};return c.jsxs(c.Fragment,{children:[c.jsx(db,{role:"region","aria-label":"Carrossel de produtos",children:c.jsx(mb,{ref:o,tabIndex:0,onKeyDown:u,children:n.map((d,h)=>c.jsx(hb,{"aria-roledescription":"slide",children:c.jsxs(fb,{children:[c.jsx(gb,{children:c.jsx("img",{src:d.icon,alt:d.title})}),c.jsx("h3",{children:d.title}),c.jsx("p",{children:d.description}),c.jsxs("div",{className:"saiba-mais-wrapper",children:[c.jsx("a",{href:"#",children:"Saiba mais "})," "]})]})},h))})}),c.jsxs(pb,{children:[c.jsx(n1,{"aria-label":"Anterior",onClick:()=>s("prev"),children:"◀"}),c.jsx(n1,{"aria-label":"Próximo",onClick:()=>s("next"),children:"▶"})]})]})})()]}),c.jsxs(Cb,{children:[c.jsx(Et,{children:"Por que escolher a ABA Corretora?"}),c.jsx(Ct,{children:"Atendimento consultivo, múltiplas seguradoras parceiras e soluções sob medida para você e sua empresa."}),c.jsxs(zb,{children:[c.jsx(Wc,{children:c.jsxs("div",{children:[c.jsx("h4",{children:"Assessoria Completa"}),c.jsx("p",{children:"Do orçamento à emissão da apólice e suporte em sinistros."})]})}),c.jsx(Wc,{children:c.jsxs("div",{children:[c.jsx("h4",{children:"Economia e Comparação"}),c.jsx("p",{children:"Cotamos nas principais seguradoras para o melhor custo-benefício."})]})}),c.jsx(Wc,{children:c.jsxs("div",{children:[c.jsx("h4",{children:"Atendimento Humanizado"}),c.jsx("p",{children:"Equipe próxima, rápida e disponível nos principais canais."})]})})]})]}),c.jsxs(wb,{children:[c.jsx(Et,{children:"Como funciona"}),c.jsx(Ct,{children:"4 passos simples para contratar seu seguro com tranquilidade."}),c.jsxs(Tb,{children:[c.jsxs(Xr,{children:[c.jsx("h4",{children:"1. Entendimento"}),c.jsx("p",{children:"Coletamos suas necessidades e perfil para indicar coberturas ideais."})]}),c.jsxs(Xr,{children:[c.jsx("h4",{children:"2. Cotações"}),c.jsx("p",{children:"Comparamos propostas entre seguradoras parceiras."})]}),c.jsxs(Xr,{children:[c.jsx("h4",{children:"3. Personalização"}),c.jsx("p",{children:"Ajustamos franquias e coberturas conforme seu orçamento."})]}),c.jsxs(Xr,{children:[c.jsx("h4",{children:"4. Contratação"}),c.jsx("p",{children:"Documentação rápida e acompanhamento pós-venda."})]})]})]}),c.jsx(Rb,{children:c.jsxs(Ob,{children:[c.jsxs(Qr,{children:[c.jsx("strong",{children:"10+"}),c.jsx("span",{children:"Anos de mercado"})]}),c.jsxs(Qr,{children:[c.jsx("strong",{children:"2k+"}),c.jsx("span",{children:"Clientes atendidos"})]}),c.jsxs(Qr,{children:[c.jsx("strong",{children:"15+"}),c.jsx("span",{children:"Seguradoras parceiras"})]}),c.jsxs(Qr,{children:[c.jsx("strong",{children:"24h"}),c.jsx("span",{children:"Suporte em sinistros"})]})]})}),c.jsxs(_b,{children:[c.jsx(Et,{children:"Mais soluções para você"}),c.jsx(Ct,{children:"Além dos seguros, conte com nossos convênios e consórcios para ampliar suas possibilidades."}),c.jsxs(qb,{children:[c.jsxs(i1,{children:[c.jsx("h3",{children:"Convênios"}),c.jsx("p",{children:"Parcerias para oferecer benefícios exclusivos aos nossos clientes."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Descontos em saúde e bem-estar"}),c.jsx("li",{children:"Serviços automotivos e residenciais"}),c.jsx("li",{children:"Assistências 24h"})]})]}),c.jsxs(i1,{children:[c.jsx("h3",{children:"Consórcios"}),c.jsx("p",{children:"Planejamento para aquisição de bens com parcelas acessíveis."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Consórcio de automóveis"}),c.jsx("li",{children:"Consórcio imobiliário"}),c.jsx("li",{children:"Administração confiável"})]})]})]})]}),c.jsx(Mb,{children:c.jsxs(Db,{children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Fale com um especialista"}),c.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),c.jsxs(Nb,{children:[c.jsx(Fc,{as:"a",href:"#contact",children:"Solicitar cotação"}),c.jsx(Fc,{as:"a",href:"#faq",style:{backgroundColor:"#fff",color:"#001f3D"},children:"Tirar dúvidas"})]})]})}),c.jsx(Wb,{}),c.jsx(nx,{}),c.jsx(Lb,{})]})},px=R.section`
  padding: 3rem 0;
  background: ${p.colors.white};

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
    margin-top: 80px;
  }
`,Pc=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,gx=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,ln=R.article`
  background: ${p.colors.lightGray};
  border: 1px solid ${p.colors.border||"#e5e7eb"};
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
    color: ${p.colors.dark};
  }
  p {
    margin: 0 0 1rem;
    color: ${p.colors.mediumGray};
  }
  ul {
    margin: 0;
    padding-left: 1.2rem;
  }
  li {
    color: ${p.colors.mediumGray};
    margin: 0.25rem 0;
  }
`,nn=R.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  background-color: #e0e0e0;
`,rn=R.div`
  background: ${p.colors.white};
  border-left: 4px solid ${p.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${p.colors.mediumGray};
  margin-top: 1rem;
`,vx=R.section`
  background: ${p.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,yx=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,bx=R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,xx=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,Sx=R.h1`
  color: ${({theme:n})=>n.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${p.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;R.p`
  color: ${p.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${p.breakpoints.tablet}) {
    max-width: 100%;
  }
`;const jx=R.img`
  width: 100%;
  max-width: 1200px;
  max-height: 450px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: ${p.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,r1=R.button`
  color: #e4e8eb;
  background-color: ${p.colors.secundary};
  font-size: 1rem;
  border: none;
  padding: 12px 16px;
  border-radius: 5px;
  margin: 20px 0;
  cursor: pointer;

  @media (max-width: ${p.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 14px 18px;
  }
`,Ax=R.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${p.colors.white} 0%,
    ${p.colors.white} 40%,
    ${p.colors.lightGray} 41%,
    ${p.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${p.breakpoints.mobile}) {
   clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`,on=R.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: auto;

  background-color: ${p.colors.primary};
  color: ${p.colors.white};

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${p.colors.primaryDark};
  }
`,Ex=R.section`
  background: ${p.colors.lightGray};
  padding: 4rem 0;
`,Cx=R.ol`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  list-style: none;
  counter-reset: step;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,Zr=R.li`
  background: ${p.colors.white};
  border: 1px solid ${p.colors.border||"#e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;

  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -12px;
    left: -12px;
    background: ${p.colors.primary};
    color: ${p.colors.white};
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
    color: ${p.colors.dark};
  }
  p {
    margin: 0;
    color: ${p.colors.mediumGray};
  }
`,zx=R.section`
  background: ${p.colors.primary};
  color: ${p.colors.white};
  padding: 2.5rem 0;
`,wx=R.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
`,Tx=R.div`
  display: flex;
  gap: 0.75rem;

  a,
  button {
    background: ${p.colors.white};
    color: ${p.colors.primary};
    border: none;
    padding: 12px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
  }
`,Rx=R.section`
  background: ${p.colors.white};
  padding: 4rem 0;
`,Ox=R.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Mx=R.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  h4 {
    margin: 0.75rem 0 0.5rem;
    color: ${p.colors.dark};
  }
  p {
    color: ${p.colors.mediumGray};
    font-size:16px;
  }
`;R.div`
  font-size: 2.5rem;
  color: ${p.colors.primary};
`;const Dx=R.section`
  background: ${p.colors.white};
  padding: 4rem 0;
`,Nx=R.div`
  background: ${p.colors.lightGray};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border-left: 4px solid ${p.colors.secundary};

  h4 {
    margin: 0 0 0.5rem;
    color: ${p.colors.dark};
  }
  
  p {
    margin: 0;
    color: ${p.colors.mediumGray};
  }
`;function _x(n){return _e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"},child:[]}]})(n)}function qx(n){return _e({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"},child:[]},{tag:"circle",attr:{cx:"9",cy:"13",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"13",r:"1"},child:[]},{tag:"path",attr:{d:"M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"},child:[]}]})(n)}const Bx="/AbaCorretora/assets/img-seguro-DmYW1Oag.png",Ux="/AbaCorretora/assets/seguro-auto-DrFFIEHz.png",Hx="/AbaCorretora/assets/seguro-residencial-HbGebHZy.png",$x="/AbaCorretora/assets/seguro-equipamentos-HwUFDCut.png",Gx="/AbaCorretora/assets/seguro-bike-C77pmOzU.png",Yx="/AbaCorretora/assets/seguro-vida-DmgnFRn3.png",Lx="/AbaCorretora/assets/seguro-viagem-DaPmMwDb.png",kx=()=>{const n=[{icon:c.jsx(lb,{}),title:"Proteção Completa",description:"Coberturas abrangentes para todas as situações que você possa imaginar."},{icon:c.jsx(ib,{}),title:"Preços Acessíveis",description:"Planos que cabem no seu bolso sem abrir mão da qualidade."},{icon:c.jsx(_x,{}),title:"Rápida Indenização",description:"Processos ágeis para que você receba o que é seu o mais rápido possível."},{icon:c.jsx(qx,{}),title:"Suporte 24/7",description:"Atendimento humanizado disponível a qualquer hora, todos os dias."}],o=[{question:"Como funciona a franquia do seguro?",answer:"A franquia é a participação do segurado nos prejuízos em caso de sinistro. Se o custo do reparo for menor que a franquia, o segurado arca com o valor. Se for maior, a seguradora cobre o excedente."},{question:"O que é um sinistro e como devo proceder?",answer:"Sinistro é qualquer evento previsto na apólice que cause dano ou prejuízo. Ao ocorrer, você deve entrar em contato com a seguradora o mais rápido possível para receber as orientações de como acionar sua cobertura."},{question:"Posso cancelar meu seguro a qualquer momento?",answer:"Sim, a maioria dos seguros pode ser cancelada a qualquer momento. A seguradora fará um cálculo para devolver parte do valor pago, proporcional ao tempo que ainda resta de cobertura."},{question:"Qual a diferença entre seguro e assistência 24h?",answer:"O seguro cobre os prejuízos financeiros de um sinistro (roubo, colisão, etc.), enquanto a assistência 24h oferece serviços emergenciais como guincho, chaveiro e eletricista, garantindo suporte no dia a dia."}];return c.jsxs(c.Fragment,{children:[c.jsxs(vx,{children:[c.jsx(yx,{children:c.jsxs(bx,{children:[c.jsx(xx,{children:c.jsx(Sx,{children:"Proteção completa para manter você e sua família seguros."})}),c.jsx(jx,{src:Bx,alt:"imagem hero"})]})}),c.jsx(Ax,{})]}),c.jsx(px,{children:c.jsxs(Pc,{children:[c.jsx(Et,{children:"Nossos Seguros"}),c.jsx(Ct,{children:"Proteção para todas as fases da sua vida. Encontre a solução ideal para veículos, residência, viagens, vida, equipamentos e muito mais."}),c.jsxs(gx,{children:[c.jsxs(ln,{children:[c.jsx(nn,{src:Ux,alt:"Ícone representando seguro de automóvel"}),c.jsx("h3",{children:"Seguro Automóvel"}),c.jsx("p",{children:"Proteção contra colisão, roubo, furto, eventos naturais e terceiros."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Guincho 24h, carro reserva, taxi, hospedagem e etc"}),c.jsx("li",{children:"Cobertura para vidros, faróis, retrovisores "}),c.jsx("li",{children:"Assistência completa a terceiros"})]}),c.jsx(rn,{children:"Indicado para quem busca tranquilidade no dia a dia e proteção patrimonial."}),c.jsx(on,{children:"Planos a partir de R$ 30,00"})]}),c.jsxs(ln,{children:[c.jsx(nn,{src:Hx,alt:"Ícone representando seguro residencial"}),c.jsx("h3",{children:"Seguro Residencial"}),c.jsx("p",{children:"Coberturas essenciais para sua casa: incêndio, vendaval, roubo e danos elétricos."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Assistência 24h (chaveiro, encanador, eletricista e etc)"}),c.jsx("li",{children:"Responsabilidade civil familiar"}),c.jsx("li",{children:"Proteção para eletroeletrônicos"})]}),c.jsx(rn,{children:"Excelente custo-benefício para proteger seu patrimônio e rotina."}),c.jsx(on,{children:"Planos a partir de R$ 30,00"})]}),c.jsxs(ln,{children:[c.jsx(nn,{src:Lx,alt:"Ícone representando seguro de viagem"}),c.jsx("h3",{children:"Seguro Viagem"}),c.jsx("p",{children:"Viaje pelo mundo com a certeza de que imprevistos médicos e logísticos não vão estragar sua experiência."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Despesas Médicas e Hospitalares"}),c.jsx("li",{children:"Cancelamento de viagem e extravio de bagagem"}),c.jsx("li",{children:"Assistência internacional 24h "})]}),c.jsx(rn,{children:"Essencial para viagens internacionais e para garantir sua paz de espírito."}),c.jsx(on,{children:"Planos a partir de R$ 30,00"})]}),c.jsxs(ln,{children:[c.jsx(nn,{src:Yx,alt:"Ícone representando seguro de vida"}),c.jsx("h3",{children:"Seguro de Vida"}),c.jsx("p",{children:"Garanta a segurança financeira de quem você ama em momentos delicados, protegendo o futuro da sua família."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Cobertura em caso de falecimento"}),c.jsx("li",{children:"Indenização por invalidez (total ou parcial)"}),c.jsx("li",{children:"Assistência para doenças graves e acidentes"})]}),c.jsx(rn,{children:"Essencial para proteger financeiramente sua família e entes queridos."}),c.jsx(on,{children:"Planos a partir de R$ 30,00"})]}),c.jsxs(ln,{children:[c.jsx(nn,{src:$x,alt:"Ícone representando seguro de equipamentos"}),c.jsx("h3",{children:"Equipamentos Portáteis"}),c.jsx("p",{children:"Proteja seus eletrônicos como notebook, smartphone e câmera contra danos, roubo e furto."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Proteção contra roubo e furto"}),c.jsx("li",{children:"Cobertura para danos físicos acidentais (quedas)"}),c.jsx("li",{children:"Danos elétricos e por líquidos"})]}),c.jsx(rn,{children:"Perfeito para profissionais e estudantes que dependem de seus equipamentos."}),c.jsx(on,{children:"Planos a partir de R$ 30,00"})]}),c.jsxs(ln,{children:[c.jsx(nn,{src:Gx,alt:"Ícone representando seguro de bicicleta"}),c.jsx("h3",{children:"Seguro de Bicicleta"}),c.jsx("p",{children:"Pedale com tranquilidade sabendo que sua bike está protegida contra roubo, furto e acidentes."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Cobertura contra roubo e furto qualificado"}),c.jsx("li",{children:"Danos acidentais e quebra"}),c.jsx("li",{children:"Assistência e transporte em caso de acidente"})]}),c.jsx(rn,{children:"Ideal para ciclistas urbanos e atletas que querem garantir a segurança do seu investimento."}),c.jsx(on,{children:"Planos a partir de R$ 30,00"})]})]})]})}),c.jsx(Rx,{children:c.jsxs(Pc,{children:[c.jsx(Et,{children:"Nossos Diferenciais"}),c.jsx(Ct,{children:"Oferecemos as melhores soluções em proteção para você e sua família."}),c.jsx(Ox,{children:n.map((s,u)=>c.jsxs(Mx,{children:[c.jsx("h3",{children:s.title}),c.jsx("p",{children:s.description})]},u))})]})}),c.jsxs(Ex,{children:[c.jsx(Et,{children:"Como Contratar?"}),c.jsx(Ct,{children:"Contratar seu seguro é simples, rápido e totalmente digital."}),c.jsxs(Cx,{children:[c.jsxs(Zr,{children:[c.jsx("h4",{children:"Simulação Online"}),c.jsx("p",{children:"Escolha o seguro desejado e preencha algumas informações para receber sua cotação."})]}),c.jsxs(Zr,{children:[c.jsx("h4",{children:"Análise de Perfil"}),c.jsx("p",{children:"Nossos especialistas analisam seu perfil para encontrar a melhor cobertura pelo menor preço."})]}),c.jsxs(Zr,{children:[c.jsx("h4",{children:"Emissão da Apólice"}),c.jsx("p",{children:"Após a aprovação, sua apólice é emitida e enviada digitalmente para você."})]}),c.jsxs(Zr,{children:[c.jsx("h4",{children:"Tudo Pronto!"}),c.jsx("p",{children:"Você e seu patrimônio estão protegidos. Conte com nosso suporte sempre que precisar."})]})]})]}),c.jsx(Dx,{children:c.jsxs(Pc,{children:[c.jsx(Et,{children:"Perguntas Frequentes"}),c.jsx(Ct,{children:"Ainda tem dúvidas? A gente ajuda você a esclarecer."}),o.map((s,u)=>c.jsxs(Nx,{children:[c.jsx("h4",{children:s.question}),c.jsx("p",{children:s.answer})]},u))]})}),c.jsx(zx,{children:c.jsxs(wx,{children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Fale com um especialista"}),c.jsx("p",{children:"Receba uma consultoria gratuita para encontrar a proteção ideal."})]}),c.jsxs(Tx,{children:[c.jsx(r1,{as:"a",href:"#contact",children:"Solicitar cotação"}),c.jsx(r1,{as:"a",href:"#faq",style:{backgroundColor:"#fff",color:"#001f3D"},children:"Tirar dúvidas"})]})]})}),c.jsx(Fb,{})]})},Vx=R.section`
  padding: 4rem 0;
  background: ${p.colors.white};

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
    margin-top: 80px;
  }
`,Ic=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,Xx=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Qx=R.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background-color: ${p.colors.lightGray};
`,Zx=R.article`
  background: ${p.colors.white};
  border: 1px solid ${p.colors.border||"#e5e7eb"};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: ${p.shadows.small};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${p.shadows.medium};
  }

  h3 {
    margin: 1.25rem 1.25rem 0.5rem;
    color: ${p.colors.dark};
    font-size: 1.5rem;
  }

  p {
    margin: 0 1.25rem 1.5rem;
    color: ${p.colors.mediumGray};
    flex-grow: 1; /* Empurra o botão para baixo */
  }
`,Kx=R.button`
  display: block;
  width: calc(100% - 2.5rem);
  padding: 0.75rem 1rem;
  margin: 0 1.25rem 1.25rem;
  
  background-color: ${p.colors.primary};
  color: ${p.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${p.colors.primaryDark};
  }
`,Jx=R.section`
  padding: 4rem 0;
  background: ${p.colors.lightGray};
`,Wx=R.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`,Kr=R.div`
  background: ${p.colors.white};
  border-radius: 12px;
  padding: 1.5rem;
  border-top: 4px solid ${p.colors.primary};
  box-shadow: ${p.shadows.small};

  h4 {
    margin: 0 0 0.5rem;
    color: ${p.colors.dark};
  }
  p {
    margin: 0;
    color: ${p.colors.mediumGray};
  }
`,Fx=R.section`
  padding: 4rem 0;
  background: ${p.colors.white};
`,Px=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,es=R.div`
  text-align: center;
  h4 {
    margin: 1rem 0 0.5rem;
  }
`,ts=R.div`
  font-size: 3rem;
  color: ${p.colors.primary};
`,Ix=R.section`
  background: ${p.colors.primary}; /* Cor de destaque */
  color: ${p.colors.white};
  padding: 3rem 0;
`,e3=R.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,t3=R.div`
  display: flex;
  flex-shrink: 0;
  
`,a3=R.button`
  background: ${p.colors.secundary};
  color: ${p.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${p.colors.primaryDark};
    transform: scale(1.05);
  }
`,l3=R.section`
  background: ${p.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,n3=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,i3=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
  text-align: center;
`,r3=R.div``,o3=R.h1`
  color: ${({theme:n})=>n.colors.secundary};
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  @media (max-width: ${p.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,u3=R.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
`,c3=R.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    ${p.colors.white} 0%,
    ${p.colors.white} 40%,
    ${p.colors.lightGray} 41%,
    ${p.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
`,s3="/AbaCorretora/assets/img-consorcio-BDLwnJgO.png",f3="/AbaCorretora/assets/consorcio-imovel-DpoaTZVN.png",d3="/AbaCorretora/assets/consorcio-automovel-Ddbl2Hpc.png",m3="/AbaCorretora/assets/consorcio-servicos-s7UmUOK-.png",h3=()=>{const n=[{img:f3,title:"Consórcio Imobiliário",description:"A forma mais inteligente de comprar, construir ou reformar seu imóvel sem juros."},{img:d3,title:"Consórcio de Veículos",description:"Planeje a compra do seu carro, moto ou utilitário novo ou seminovo com parcelas que cabem no bolso."},{img:m3,title:"Consórcio de Serviços",description:"Realize seus sonhos como viagens, festas, cirurgias plásticas ou cursos com planejamento e economia."}];return c.jsxs(c.Fragment,{children:[c.jsxs(l3,{children:[c.jsx(n3,{children:c.jsxs(i3,{children:[c.jsx(r3,{children:c.jsx(o3,{children:"Conquiste seus maiores sonhos sem pagar juros."})}),c.jsx(u3,{src:s3,alt:"Família feliz com a conquista da casa própria através de consórcio"})]})}),c.jsx(c3,{})]}),c.jsx(Vx,{children:c.jsxs(Ic,{children:[c.jsx(Et,{children:"Consórcio: O Planejamento Inteligente"}),c.jsx(Ct,{children:"Uma modalidade de compra baseada na união de pessoas que formam uma poupança comum destinada à aquisição de bens ou serviços. Ideal para quem não tem pressa e busca disciplina financeira para atingir grandes objetivos."}),c.jsx(Xx,{children:n.map((o,s)=>c.jsxs(Zx,{children:[c.jsx(Qx,{src:o.img,alt:o.title}),c.jsx("h3",{children:o.title}),c.jsx("p",{children:o.description}),c.jsx(Kx,{children:"Simular Agora"})]},s))})]})}),c.jsx(Jx,{children:c.jsxs(Ic,{children:[c.jsx(Et,{children:"Como Funciona na Prática?"}),c.jsx(Ct,{children:"O processo é simples e transparente. Veja as 4 etapas principais:"}),c.jsxs(Wx,{children:[c.jsxs(Kr,{children:[c.jsx("h4",{children:"1. Formação do Grupo"}),c.jsx("p",{children:"Você adere a um grupo com outras pessoas que têm o mesmo objetivo que você."})]}),c.jsxs(Kr,{children:[c.jsx("h4",{children:"2. Contribuição Mensal"}),c.jsx("p",{children:"Todos os participantes pagam parcelas mensais, que formam o fundo do grupo."})]}),c.jsxs(Kr,{children:[c.jsx("h4",{children:"3. Contemplação"}),c.jsx("p",{children:"Mensalmente, participantes são contemplados por sorteio ou lance para receber o crédito."})]}),c.jsxs(Kr,{children:[c.jsx("h4",{children:"4. Aquisição do Bem"}),c.jsx("p",{children:"Com a carta de crédito em mãos, você tem poder de compra à vista para adquirir seu bem."})]})]})]})}),c.jsx(Fx,{children:c.jsxs(Ic,{children:[c.jsx(Et,{children:"Principais Vantagens"}),c.jsx(Ct,{children:"Descubra por que o consórcio é a melhor opção para o seu planejamento."}),c.jsxs(Px,{children:[c.jsxs(es,{children:[c.jsx(ts,{children:c.jsx(ab,{})}),c.jsx("h4",{children:"Sem Juros"}),c.jsx("p",{children:"Você paga apenas uma taxa de administração, que é muito menor que os juros de um financiamento."})]}),c.jsxs(es,{children:[c.jsx(ts,{children:c.jsx(Iy,{})}),c.jsx("h4",{children:"Poder de Compra"}),c.jsx("p",{children:"Ao ser contemplado, você recebe o valor integral da carta de crédito para negociar sua compra à vista."})]}),c.jsxs(es,{children:[c.jsx(ts,{children:c.jsx(nb,{})}),c.jsx("h4",{children:"Flexibilidade"}),c.jsx("p",{children:"Utilize o crédito para o bem que desejar dentro da categoria do seu grupo, com total liberdade de escolha."})]})]})]})}),c.jsx(Ix,{children:c.jsxs(e3,{children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Pronto para dar o primeiro passo?"}),c.jsx("p",{children:"Faça uma simulação gratuita e sem compromisso para encontrar o plano perfeito para você."})]}),c.jsx(t3,{children:c.jsx(a3,{as:"a",href:"#contact",children:"Fazer Simulação"})})]})})]})},Jr=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 0 2rem;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${p.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,pa=R.article`
  border-radius: 12px;
  overflow: hidden;
  transition: all ${p.transitions.default};
  border: 1px solid ${p.colors.border||"#e5e7eb"}; /* Adicionado para borda */
  background: ${p.colors.white}; /* Fundo branco para se destacar */
  display: flex; /* Para flex-direction column */
  flex-direction: column; /* Para conteúdo vertical */
  height: 100%; /* Para os cards terem altura igual no grid */
  padding-bottom: 0; /* Começa sem padding inferior específico aqui, pois o conteúdo interno terá */

  .image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-bottom: 1px solid ${p.colors.border||"#e5e7eb"}; /* Linha sutil abaixo da imagem */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${p.transitions.default};
    }

    .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: ${p.colors.primary};
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  h3 {
    font-size: 1.25rem;
    margin: 1.5rem 1.25rem 1rem; /* Ajustado para ter padding interno */
    line-height: 1.4;
    color: ${p.colors.dark};
  }

  p {
    margin: 0 1.25rem 1.5rem; /* Adicionado padding interno */
    color: ${p.colors.mediumGray};
    flex-grow: 1; /* Permite que o parágrafo ocupe o espaço restante */
  }

  .read-more {
    display: inline-block;
    margin: 0 1.25rem 1.5rem; /* Ajustado para ter padding interno */
    color: ${p.colors.primary};
    font-weight: 500;
    text-decoration: none;
    transition: all ${p.transitions.default};

    &:hover {
      color: ${p.colors.dark};
    }
  }

  &:hover {
    box-shadow: ${p.shadows.medium};

    img {
      transform: scale(1.05);
    }
  }
`,p3=R.section`
  background: ${p.colors.lightGray};
  padding: 7rem 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 6rem 0 0;
  }
`,g3=R.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`,v3=R.div`
  display: flex; /* -> Alterado de 'grid' para 'flex' */
  flex-direction: column; /* -> Adicionado para empilhar os itens verticalmente */
  align-items: flex-start; /* -> Garante que tudo fique alinhado à esquerda */
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 40px;
`,y3=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,b3=R.h1`
  color: ${({theme:n})=>n.colors.secundary};
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${p.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;R.p`
  color: ${p.colors.mediumGray};
  margin: 0;
  font-size: 1.125rem;
  max-width: 52ch;

  @media (max-width: ${p.breakpoints.tablet}) {
    max-width: 100%;
  }
`;const x3=R.img`
  width: 100%;
  max-width: 1200px;
  max-height: 500px;
  aspect-ratio: 16 / 9; /* -> Força um formato de paisagem (16:9). Ajuste se precisar. */
  object-fit: cover; /* -> Garante que a imagem cubra a área sem distorcer */
  border-radius: 8px; /* -> Opcional: um leve arredondamento nas bordas */
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: ${p.breakpoints.mobile}) {
    margin: 1rem auto 0;
    max-width: 440px;
  }
`,S3=R.div`
  position: relative;
  /* height: 60px; */
  background: linear-gradient(
    to bottom,
    ${p.colors.white} 0%,
    ${p.colors.white} 40%,
    ${p.colors.lightGray} 41%,
    ${p.colors.lightGray} 100%
  );
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);

  @media (max-width: ${p.breakpoints.mobile}) {
    height: 40px;
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  }
`,as=R.div`
  background: ${p.colors.white};
  border-left: 4px solid ${p.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  color: ${p.colors.mediumGray};
  margin-top: 1rem;
  margin: 1rem 1.25rem 1.25rem; /* Adicionado para ter padding interno */
`,Wr=R.h2`
  font-size: 2.5rem;
  color: ${p.colors.secundary};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,Fr=R.p`
  font-size: 1.25rem;
  color: ${p.colors.mediumGray};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;

  @media (max-width: ${p.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`,Pr=R.section`
  padding: 3rem 0;
  background-color: ${p.colors.white};

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 0;
    margin-top: 80px;
  }
`,ls=R.article`
  border-radius: 12px;
  overflow: hidden;
  transition: all ${p.transitions.default};
  border: 1px solid ${p.colors.border||"#e5e7eb"};
  background: ${p.colors.lightGray};
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  height: 100%;

  .image-container {
    position: relative;
    height: 220px;
    overflow: hidden;
    border-bottom: 1px solid ${p.colors.border||"#e5e7eb"}; /* Linha sutil abaixo da imagem */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform ${p.transitions.default};
    }

    /* REMOVIDO: .category, pois não se encaixa aqui */
  }

  h3 {
    font-size: 1.5rem; /* Um pouco maior que o BlogCard, mais próximo do ProductCard */
    margin: 1.25rem 1.25rem 0.75rem; /* Ajusta as margens internas do título */
    line-height: 1.4;
    color: ${p.colors.dark};
  }

  p {
    margin: 0 1.25rem 1rem; /* Margens para o parágrafo */
    color: ${p.colors.mediumGray};
    flex-grow: 1; /* Permite que o parágrafo ocupe o espaço restante */
  }

  ul {
    margin: 0 1.25rem 1rem; /* Margens para a lista */
    padding-left: 1.5rem;
  }
  li {
    color: ${p.colors.mediumGray};
    margin: 0.25rem 0;
  }

  .card-button-wrapper {
    margin-top: auto;
    padding: 1rem 1.25rem 1.25rem;
  }

  &:hover {
    box-shadow: ${p.shadows.medium};

    img {
      transform: scale(1.05);
    }
  }
`,ns=R.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: auto;

  background-color: ${p.colors.primary};
  color: ${p.colors.white};

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${p.colors.primaryDark};
  }
`,j3=R.section`
  background: ${p.colors.primary}; /* Cor de destaque */
  color: ${p.colors.white};
  padding: 3rem 0;
`,A3=R.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${p.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,E3=R.div`
  display: flex;
  flex-shrink: 0;
  
`,o1=R.button`
  background: ${p.colors.secundary};
  color: ${p.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${p.colors.primaryDark};
    transform: scale(1.05);
  }
`,C3="/AbaCorretora/assets/img-saude-v6gqXMP5.png",z3="/AbaCorretora/assets/convenio-medico-eXPi27Ff.png",w3="/AbaCorretora/assets/convenio-odonto-C_8rCNiQ.png",T3="/AbaCorretora/assets/convenio-pet-BF0i8y5Y.png";function R3(){return c.jsxs(c.Fragment,{children:[c.jsxs(p3,{children:[c.jsx(g3,{children:c.jsxs(v3,{children:[c.jsx(y3,{children:c.jsx(b3,{children:"Planos de saúde com valores que cabem no seu orçamento."})}),c.jsx(x3,{src:C3,alt:"imagem hero"})]})}),c.jsx(S3,{})]}),c.jsxs(Pr,{id:"convenios",children:[c.jsx(Wr,{children:"Convênios e Planos de Saúde"}),c.jsx(Fr,{children:"Encontre o plano ideal para sua saúde e bem-estar, com cobertura completa para você, sua família e até mesmo seu pet."}),c.jsxs(Jr,{children:[c.jsxs(ls,{children:[c.jsx("div",{className:"image-container",children:c.jsx("img",{src:z3,alt:"Família feliz com médico, representando convênio médico",loading:"lazy"})}),c.jsx("h3",{children:"Convênio Médico"}),c.jsx("p",{children:"Cuidado integral para sua saúde. Acesse uma ampla rede credenciada de hospitais, clínicas e laboratórios."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Consultas e exames"}),c.jsx("li",{children:"Internações e cirurgias"}),c.jsx("li",{children:"Atendimento de emergência 24h"})]}),c.jsx(as,{children:"Ideal para quem busca segurança e tranquilidade no acesso a serviços de saúde de qualidade."}),c.jsx("div",{className:"card-button-wrapper",children:c.jsx(ns,{children:"Ver Planos Médicos "})})]}),c.jsxs(ls,{children:[c.jsx("div",{className:"image-container",children:c.jsx("img",{src:w3,alt:"Pessoas sorrindo, representando convênio odontológico",loading:"lazy"})}),c.jsx("h3",{children:"Convênio Odontológico"}),c.jsx("p",{children:"Mantenha seu sorriso saudável com cobertura para prevenção, tratamentos e procedimentos essenciais."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Consultas e limpezas"}),c.jsx("li",{children:"Tratamentos de cárie e canal"}),c.jsx("li",{children:"Ortodontia (em alguns planos)"})]}),c.jsx(as,{children:"Perfeito para quem valoriza a saúde bucal e quer evitar gastos inesperados com o dentista."}),c.jsx("div",{className:"card-button-wrapper",children:c.jsx(ns,{children:"Ver Planos Odontológicos "})})]}),c.jsxs(ls,{children:[c.jsx("div",{className:"image-container",children:c.jsx("img",{src:T3,alt:"Cão e gato felizes, representando convênio pet",loading:"lazy"})}),c.jsx("h3",{children:"Convênio Pet"}),c.jsx("p",{children:"Cuide da saúde do seu melhor amigo com planos que cobrem consultas, vacinas e procedimentos veterinários."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Consultas e exames de rotina"}),c.jsx("li",{children:"Vacinas e vermifugação"}),c.jsx("li",{children:"Cirurgias e internações (em alguns planos)"})]}),c.jsx(as,{children:"Essencial para tutores que querem garantir a longevidade e o bem-estar de seus animais de estimação."}),c.jsx("div",{className:"card-button-wrapper",children:c.jsx(ns,{children:"Ver Planos Pet "})})]})]})]}),c.jsxs(Pr,{style:{backgroundColor:"#f9f9f9"},children:[c.jsx(Wr,{children:"Por que ter um Convênio Médico?"}),c.jsx(Fr,{children:"Garanta o acesso rápido e de qualidade a serviços de saúde essenciais para você e sua família, sem preocupações com gastos inesperados."}),c.jsxs(Jr,{children:[c.jsxs(pa,{children:[c.jsx("h3",{children:"Acesso Facilitado"}),c.jsx("p",{children:"Com um convênio médico, você e sua família têm acesso a uma ampla rede de médicos, hospitais e laboratórios credenciados, com agendamento facilitado e sem as longas filas do sistema público. Isso garante que você receba o atendimento necessário no momento certo."})]}),c.jsxs(pa,{children:[c.jsx("h3",{children:"Economia e Previsibilidade"}),c.jsx("p",{children:"Evite surpresas com os altos custos de consultas, exames, internações e cirurgias particulares. O convênio médico oferece mensalidades fixas, tornando seus gastos com saúde previsíveis e protegendo seu orçamento em caso de emergências ou tratamentos de longo prazo."})]}),c.jsxs(pa,{children:[c.jsx("h3",{children:"Cuidado Completo e Preventivo"}),c.jsx("p",{children:"Além do atendimento para doenças e emergências, muitos planos oferecem programas de medicina preventiva, check-ups regulares e acompanhamento para doenças crônicas. Invista na sua saúde e bem-estar com um cuidado abrangente e contínuo."})]})]})]}),c.jsxs(Pr,{children:[c.jsx(Wr,{children:"A Importância do Convênio Odontológico"}),c.jsx(Fr,{children:"Um sorriso saudável é essencial para sua qualidade de vida. Invista em prevenção e tratamentos odontológicos sem pesar no seu bolso."}),c.jsxs(Jr,{children:[c.jsxs(pa,{children:[c.jsx("h3",{children:"Prevenção de Doenças"}),c.jsx("p",{children:"Consultas e limpezas regulares são fundamentais para prevenir cáries, gengivite e outras doenças bucais que podem afetar sua saúde geral. O convênio odontológico facilita esse acesso à prevenção."})]}),c.jsxs(pa,{children:[c.jsx("h3",{children:"Cobertura para Tratamentos Essenciais"}),c.jsx("p",{children:"De obturações a tratamentos de canal, o convênio cobre uma série de procedimentos que seriam caros se feitos de forma particular. Garanta que você não adie tratamentos importantes devido ao custo."})]}),c.jsxs(pa,{children:[c.jsx("h3",{children:"Estética e Bem-estar"}),c.jsx("p",{children:"Um sorriso bonito aumenta a autoestima e a confiança. Além da saúde, muitos planos oferecem cobertura para procedimentos estéticos ou ortodônticos (parcialmente), contribuindo para seu bem-estar."})]})]})]}),c.jsxs(Pr,{style:{backgroundColor:"#f9f9f9"},children:[c.jsx(Wr,{children:"Cuide do seu Melhor Amigo com um Convênio Pet"}),c.jsx(Fr,{children:"Seu pet merece o melhor cuidado! Proteja a saúde do seu companheiro de quatro patas com planos veterinários completos e acessíveis."}),c.jsxs(Jr,{children:[c.jsxs(pa,{children:[c.jsx("h3",{children:"Atendimento Veterinário Completo"}),c.jsx("p",{children:"Garanta consultas, exames, vacinas e até cirurgias para seu pet com uma rede credenciada de clínicas e hospitais veterinários. Seu amigo terá acesso aos melhores profissionais e tratamentos."})]}),c.jsxs(pa,{children:[c.jsx("h3",{children:"Prevenção e Bem-estar"}),c.jsx("p",{children:"Mantenha seu pet protegido com a cobertura de vacinas essenciais, vermifugação e check-ups regulares. A prevenção é a melhor forma de garantir uma vida longa e saudável para ele."})]}),c.jsxs(pa,{children:[c.jsx("h3",{children:"Segurança em Emergências"}),c.jsx("p",{children:"Acidentes e doenças podem acontecer. Com um convênio pet, você tem a tranquilidade de saber que os custos com emergências, cirurgias e internações estarão cobertos, sem comprometer seu orçamento."})]})]})]}),c.jsx(j3,{children:c.jsxs(A3,{children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Fale com um especialista"}),c.jsx("p",{children:"Receba uma consultoria gratuita para encontrar o plano ideal."})]}),c.jsxs(E3,{children:[c.jsx(o1,{as:"a",href:"#contact",children:"Solicitar cotação"}),c.jsx(o1,{as:"a",href:"#faq",style:{backgroundColor:"#fff",color:"#001f3D"},children:"Tirar dúvidas"})]})]})}),c.jsx(Pb,{})]})}const O3=R.section`
  padding: 5rem 2rem;
  background-color: ${p.colors.white};

  @media (max-width: ${p.breakpoints.mobile}) {
    padding: 3rem 1rem;
    margin-top: 60px;
  }
`,M3=R.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`,D3=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${p.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,N3=R.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,is=R.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${p.colors.border};
  background: ${p.colors.lightGray};
  color: ${p.colors.dark};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  svg {
    font-size: 2.5rem;
    color: ${p.colors.primary};
    flex-shrink: 0;
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    color: ${p.colors.mediumGray};
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: ${p.shadows.medium};
    border-color: ${p.colors.primary};
  }

  // Estilo primário para o card de WhatsApp
  ${({primary:n})=>n&&jo`
    background: ${p.colors.primary};
    color: ${p.colors.white};
    border-color: ${p.colors.primary};

    svg {
      color: ${p.colors.white};
    }

    p {
      color: rgba(255, 255, 255, 0.9);
    }

    &:hover {
      background: ${p.colors.primaryDark};
      border-color: ${p.colors.primaryDark};
    }
  `}
`,_3=R.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${p.shadows.medium};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  @media (max-width: ${p.breakpoints.tablet}) {
    height: 300px;
    order: -1; /* Joga o mapa para cima no mobile */
  }
`,q3=R.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid ${p.colors.border};

  @media (max-width: ${p.breakpoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`,u1=R.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: ${p.colors.secundary};
  }
  
  h4 {
    margin: 0 0 0.25rem;
    color: ${p.colors.dark};
  }

  p {
    margin: 0;
    color: ${p.colors.mediumGray};
  }
  
  @media (max-width: ${p.breakpoints.mobile}) {
    flex-direction: column;
  }
`,B3=()=>c.jsxs(O3,{id:"contact",children:[c.jsxs(M3,{children:[c.jsx(Et,{children:"Estamos aqui para ajudar"}),c.jsx(Ct,{children:"Escolha o melhor canal para falar conosco. Nossa equipe de especialistas está pronta para atender você."})]}),c.jsxs(D3,{children:[c.jsxs(N3,{children:[c.jsxs(is,{href:"https://wa.me/5511999999999",target:"_blank",rel:"noopener noreferrer",primary:!0,children:[c.jsx(e0,{}),c.jsxs("div",{children:[c.jsx("h3",{children:"WhatsApp"}),c.jsx("p",{children:"Clique aqui para iniciar uma conversa agora mesmo."})]})]}),c.jsxs(is,{href:"tel:+551140044004",children:[c.jsx(tb,{}),c.jsxs("div",{children:[c.jsx("h3",{children:"Telefone"}),c.jsx("p",{children:"(11) 4004-4004"})]})]}),c.jsxs(is,{href:"mailto:contato@abacorretora.com.br",children:[c.jsx(Py,{}),c.jsxs("div",{children:[c.jsx("h3",{children:"E-mail"}),c.jsx("p",{children:"contato@abacorretora.com.br"})]})]})]}),c.jsx(_3,{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106695383502!2d-46.65657118440693!3d-23.56409456760337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1668102353915!5m2!1spt-BR!2sbr",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Endereço da ABA Corretora na Av. Paulista"})})]}),c.jsxs(q3,{children:[c.jsxs(u1,{children:[c.jsx(eb,{}),c.jsxs("div",{children:[c.jsx("h4",{children:"Nosso Endereço"}),c.jsx("p",{children:"Av. Paulista, 1000 - Bela Vista, São Paulo/SP"})]})]}),c.jsxs(u1,{children:[c.jsx(Wy,{}),c.jsxs("div",{children:[c.jsx("h4",{children:"Horário de Atendimento"}),c.jsx("p",{children:"Segunda a Sexta: 08h às 18h | Sábado: 09h às 13h"})]})]})]})]}),U3=R.div`
  position: fixed;
  bottom: 1.5rem;  /* Adicionado espaçamento do final da tela */
  left: 50%;       /* Posiciona o início do banner no meio da tela */
  transform: translateX(-50%); /* Centraliza o banner horizontalmente */
  
  width: calc(100% - 2rem); /* Garante um espaçamento nas laterais em telas menores */
  max-width: 1200px;        /* Define a largura máxima solicitada */
  
  background-color: ${p.colors.primary};
  color: ${p.colors.white};
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
    color: ${p.colors.white}; /* Cor do ícone */
    flex-shrink: 0; /* Impede que o ícone seja esmagado em telas menores */
  }

  /* Em telas menores, o layout vira uma coluna */
  @media (max-width: ${p.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem;
  }
`,H3=R.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;

  a {
    color: ${p.colors.dark};
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`,$3=R.button`
  background-color: ${p.colors.secundary};
  color: ${p.colors.white};
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
`,c1="cookies_accepted",G3=()=>{const[n,o]=O.useState(!1);O.useEffect(()=>{localStorage.getItem(c1)||o(!0)},[]);const s=()=>{localStorage.setItem(c1,"true"),o(!1)};return n?c.jsxs(U3,{children:[c.jsx(Fy,{}),c.jsxs(H3,{children:['Utilizamos cookies para oferecer a melhor experiência e analisar o desempenho do nosso site. Ao clicar em "Aceitar Cookies", você concorda com o uso de todos os cookies. Para mais informações, consulte nossa'," ",c.jsx("a",{href:"/politica-de-privacidade",children:"Política de Privacidade"}),"."]}),c.jsx($3,{onClick:s,children:"Aceitar Cookies"})]}):null};function Y3(){return c.jsxs(q1,{theme:p,children:[c.jsx(tv,{}),c.jsx(My,{}),c.jsx("main",{children:c.jsxs(Pv,{children:[c.jsx(fl,{path:"/",element:c.jsx(hx,{})}),c.jsx(fl,{path:"/products",element:c.jsx(Wv,{to:"/",replace:!0})}),c.jsx(fl,{path:"/seguros",element:c.jsx(kx,{})}),c.jsx(fl,{path:"/consorcios",element:c.jsx(h3,{})}),c.jsx(fl,{path:"/saude",element:c.jsx(R3,{})}),c.jsx(fl,{path:"/contato",element:c.jsx(B3,{})})]})}),c.jsx(G3,{}),c.jsx(rb,{}),c.jsx(cb,{})]})}Ig.createRoot(document.getElementById("root")).render(c.jsx(Le.StrictMode,{children:c.jsx(q1,{theme:p,children:c.jsx(Sy,{children:c.jsx(Y3,{})})})}));
