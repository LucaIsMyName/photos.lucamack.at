const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-Drae3PrL.js","assets/Image-CymjYLq9.js","assets/Href-CQT9wUe-.js","assets/mapbox-gl-CNTiHEyl.js","assets/mapbox-gl-BTev-8MA.css","assets/GalleryPage-D2Fi_lAz.js","assets/marked.esm-DJbTXz-_.js","assets/CopyButton-BwctSuyE.js","assets/check-C9MDYf2H.js","assets/NotFoundPage-L1TSlbd1.js","assets/PageComponent-ByUjtY0t.js","assets/MapPage-wRgkJzIs.js","assets/scale-control-CbbI99w3.js","assets/ListPage-CMA4vIv6.js","assets/index-BHneEDWo.js","assets/map-pin-BJP1fpJ3.js","assets/download-BlaHeuMf.js","assets/TimelinePage-DvKQH877.js","assets/MakePostcardPage-COLmpqou.js","assets/StatisticsPage-CJJhoP-m.js","assets/ImagePage-CDFGfeUv.js"])))=>i.map(i=>d[i]);
import{g as S2}from"./mapbox-gl-CNTiHEyl.js";function h3(t,a){for(var l=0;l<a.length;l++){const o=a[l];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in t)){const c=Object.getOwnPropertyDescriptor(o,s);c&&Object.defineProperty(t,s,c.get?c:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}})();var xf={exports:{}},li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1;function m3(){if(M1)return li;M1=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(o,s,c){var d=null;if(c!==void 0&&(d=""+c),s.key!==void 0&&(d=""+s.key),"key"in s){c={};for(var f in s)f!=="key"&&(c[f]=s[f])}else c=s;return s=c.ref,{$$typeof:t,type:o,key:d,ref:s!==void 0?s:null,props:c}}return li.Fragment=a,li.jsx=l,li.jsxs=l,li}var E1;function g3(){return E1||(E1=1,xf.exports=m3()),xf.exports}var $=g3(),Sf={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1;function w3(){if(D1)return Ee;D1=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=w&&C[w]||C["@@iterator"],typeof C=="function"?C:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function D(C,F,j){this.props=C,this.context=F,this.refs=E,this.updater=j||S}D.prototype.isReactComponent={},D.prototype.setState=function(C,F){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,F,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function x(){}x.prototype=D.prototype;function N(C,F,j){this.props=C,this.context=F,this.refs=E,this.updater=j||S}var R=N.prototype=new x;R.constructor=N,T(R,D.prototype),R.isPureReactComponent=!0;var H=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function ee(C,F,j,Z,W,X){return j=X.ref,{$$typeof:t,type:C,key:F,ref:j!==void 0?j:null,props:X}}function J(C,F){return ee(C.type,F,void 0,void 0,void 0,C.props)}function re(C){return typeof C=="object"&&C!==null&&C.$$typeof===t}function ie(C){var F={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(j){return F[j]})}var se=/\/+/g;function le(C,F){return typeof C=="object"&&C!==null&&C.key!=null?ie(""+C.key):F.toString(36)}function _e(){}function xe(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(_e,_e):(C.status="pending",C.then(function(F){C.status==="pending"&&(C.status="fulfilled",C.value=F)},function(F){C.status==="pending"&&(C.status="rejected",C.reason=F)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function me(C,F,j,Z,W){var X=typeof C;(X==="undefined"||X==="boolean")&&(C=null);var ae=!1;if(C===null)ae=!0;else switch(X){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(C.$$typeof){case t:case a:ae=!0;break;case v:return ae=C._init,me(ae(C._payload),F,j,Z,W)}}if(ae)return W=W(C),ae=Z===""?"."+le(C,0):Z,H(W)?(j="",ae!=null&&(j=ae.replace(se,"$&/")+"/"),me(W,F,j,"",function(ve){return ve})):W!=null&&(re(W)&&(W=J(W,j+(W.key==null||C&&C.key===W.key?"":(""+W.key).replace(se,"$&/")+"/")+ae)),F.push(W)),1;ae=0;var oe=Z===""?".":Z+":";if(H(C))for(var he=0;he<C.length;he++)Z=C[he],X=oe+le(Z,he),ae+=me(Z,F,j,X,W);else if(he=y(C),typeof he=="function")for(C=he.call(C),he=0;!(Z=C.next()).done;)Z=Z.value,X=oe+le(Z,he++),ae+=me(Z,F,j,X,W);else if(X==="object"){if(typeof C.then=="function")return me(xe(C),F,j,Z,W);throw F=String(C),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return ae}function k(C,F,j){if(C==null)return C;var Z=[],W=0;return me(C,Z,"","",function(X){return F.call(j,X,W++)}),Z}function z(C){if(C._status===-1){var F=C._result;F=F(),F.then(function(j){(C._status===0||C._status===-1)&&(C._status=1,C._result=j)},function(j){(C._status===0||C._status===-1)&&(C._status=2,C._result=j)}),C._status===-1&&(C._status=0,C._result=F)}if(C._status===1)return C._result.default;throw C._result}var U=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function K(){}return Ee.Children={map:k,forEach:function(C,F,j){k(C,function(){F.apply(this,arguments)},j)},count:function(C){var F=0;return k(C,function(){F++}),F},toArray:function(C){return k(C,function(F){return F})||[]},only:function(C){if(!re(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Ee.Component=D,Ee.Fragment=l,Ee.Profiler=s,Ee.PureComponent=N,Ee.StrictMode=o,Ee.Suspense=m,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(C){return q.H.useMemoCache(C)}},Ee.cache=function(C){return function(){return C.apply(null,arguments)}},Ee.cloneElement=function(C,F,j){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var Z=T({},C.props),W=C.key,X=void 0;if(F!=null)for(ae in F.ref!==void 0&&(X=void 0),F.key!==void 0&&(W=""+F.key),F)!V.call(F,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&F.ref===void 0||(Z[ae]=F[ae]);var ae=arguments.length-2;if(ae===1)Z.children=j;else if(1<ae){for(var oe=Array(ae),he=0;he<ae;he++)oe[he]=arguments[he+2];Z.children=oe}return ee(C.type,W,void 0,void 0,X,Z)},Ee.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},Ee.createElement=function(C,F,j){var Z,W={},X=null;if(F!=null)for(Z in F.key!==void 0&&(X=""+F.key),F)V.call(F,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(W[Z]=F[Z]);var ae=arguments.length-2;if(ae===1)W.children=j;else if(1<ae){for(var oe=Array(ae),he=0;he<ae;he++)oe[he]=arguments[he+2];W.children=oe}if(C&&C.defaultProps)for(Z in ae=C.defaultProps,ae)W[Z]===void 0&&(W[Z]=ae[Z]);return ee(C,X,void 0,void 0,null,W)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(C){return{$$typeof:f,render:C}},Ee.isValidElement=re,Ee.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:z}},Ee.memo=function(C,F){return{$$typeof:h,type:C,compare:F===void 0?null:F}},Ee.startTransition=function(C){var F=q.T,j={};q.T=j;try{var Z=C(),W=q.S;W!==null&&W(j,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(K,U)}catch(X){U(X)}finally{q.T=F}},Ee.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},Ee.use=function(C){return q.H.use(C)},Ee.useActionState=function(C,F,j){return q.H.useActionState(C,F,j)},Ee.useCallback=function(C,F){return q.H.useCallback(C,F)},Ee.useContext=function(C){return q.H.useContext(C)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(C,F){return q.H.useDeferredValue(C,F)},Ee.useEffect=function(C,F,j){var Z=q.H;if(typeof j=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(C,F)},Ee.useId=function(){return q.H.useId()},Ee.useImperativeHandle=function(C,F,j){return q.H.useImperativeHandle(C,F,j)},Ee.useInsertionEffect=function(C,F){return q.H.useInsertionEffect(C,F)},Ee.useLayoutEffect=function(C,F){return q.H.useLayoutEffect(C,F)},Ee.useMemo=function(C,F){return q.H.useMemo(C,F)},Ee.useOptimistic=function(C,F){return q.H.useOptimistic(C,F)},Ee.useReducer=function(C,F,j){return q.H.useReducer(C,F,j)},Ee.useRef=function(C){return q.H.useRef(C)},Ee.useState=function(C){return q.H.useState(C)},Ee.useSyncExternalStore=function(C,F,j){return q.H.useSyncExternalStore(C,F,j)},Ee.useTransition=function(){return q.H.useTransition()},Ee.version="19.1.0",Ee}var C1;function Ic(){return C1||(C1=1,Sf.exports=w3()),Sf.exports}var M=Ic();const v3=S2(M),T2=h3({__proto__:null,default:v3},[M]);var Tf={exports:{}},oi={},_f={exports:{}},kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function y3(){return N1||(N1=1,function(t){function a(k,z){var U=k.length;k.push(z);e:for(;0<U;){var K=U-1>>>1,C=k[K];if(0<s(C,z))k[K]=z,k[U]=C,U=K;else break e}}function l(k){return k.length===0?null:k[0]}function o(k){if(k.length===0)return null;var z=k[0],U=k.pop();if(U!==z){k[0]=U;e:for(var K=0,C=k.length,F=C>>>1;K<F;){var j=2*(K+1)-1,Z=k[j],W=j+1,X=k[W];if(0>s(Z,U))W<C&&0>s(X,Z)?(k[K]=X,k[W]=U,K=W):(k[K]=Z,k[j]=U,K=j);else if(W<C&&0>s(X,U))k[K]=X,k[W]=U,K=W;else break e}}return z}function s(k,z){var U=k.sortIndex-z.sortIndex;return U!==0?U:k.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();t.unstable_now=function(){return d.now()-f}}var m=[],h=[],v=1,w=null,y=3,S=!1,T=!1,E=!1,D=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function H(k){for(var z=l(h);z!==null;){if(z.callback===null)o(h);else if(z.startTime<=k)o(h),z.sortIndex=z.expirationTime,a(m,z);else break;z=l(h)}}function q(k){if(E=!1,H(k),!T)if(l(m)!==null)T=!0,V||(V=!0,le());else{var z=l(h);z!==null&&me(q,z.startTime-k)}}var V=!1,ee=-1,J=5,re=-1;function ie(){return D?!0:!(t.unstable_now()-re<J)}function se(){if(D=!1,V){var k=t.unstable_now();re=k;var z=!0;try{e:{T=!1,E&&(E=!1,N(ee),ee=-1),S=!0;var U=y;try{t:{for(H(k),w=l(m);w!==null&&!(w.expirationTime>k&&ie());){var K=w.callback;if(typeof K=="function"){w.callback=null,y=w.priorityLevel;var C=K(w.expirationTime<=k);if(k=t.unstable_now(),typeof C=="function"){w.callback=C,H(k),z=!0;break t}w===l(m)&&o(m),H(k)}else o(m);w=l(m)}if(w!==null)z=!0;else{var F=l(h);F!==null&&me(q,F.startTime-k),z=!1}}break e}finally{w=null,y=U,S=!1}z=void 0}}finally{z?le():V=!1}}}var le;if(typeof R=="function")le=function(){R(se)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,xe=_e.port2;_e.port1.onmessage=se,le=function(){xe.postMessage(null)}}else le=function(){x(se,0)};function me(k,z){ee=x(function(){k(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_next=function(k){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var U=y;y=z;try{return k()}finally{y=U}},t.unstable_requestPaint=function(){D=!0},t.unstable_runWithPriority=function(k,z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var U=y;y=k;try{return z()}finally{y=U}},t.unstable_scheduleCallback=function(k,z,U){var K=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?K+U:K):U=K,k){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=U+C,k={id:v++,callback:z,priorityLevel:k,startTime:U,expirationTime:C,sortIndex:-1},U>K?(k.sortIndex=U,a(h,k),l(m)===null&&k===l(h)&&(E?(N(ee),ee=-1):E=!0,me(q,U-K))):(k.sortIndex=C,a(m,k),T||S||(T=!0,V||(V=!0,le()))),k},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(k){var z=y;return function(){var U=y;y=z;try{return k.apply(this,arguments)}finally{y=U}}}}(kf)),kf}var A1;function b3(){return A1||(A1=1,_f.exports=y3()),_f.exports}var Mf={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1;function x3(){if(z1)return Zt;z1=1;var t=Ic();function a(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(m,h,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:w==null?null:""+w,children:m,containerInfo:h,implementation:v}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Zt.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(a(299));return c(m,h,null,v)},Zt.flushSync=function(m){var h=d.T,v=o.p;try{if(d.T=null,o.p=2,m)return m()}finally{d.T=h,o.p=v,o.d.f()}},Zt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(m,h))},Zt.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Zt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,w=f(v,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?o.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:y,fetchPriority:S}):v==="script"&&o.d.X(m,{crossOrigin:w,integrity:y,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Zt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=f(h.as,h.crossOrigin);o.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(m)},Zt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,w=f(v,h.crossOrigin);o.d.L(m,v,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Zt.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=f(h.as,h.crossOrigin);o.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(m)},Zt.requestFormReset=function(m){o.d.r(m)},Zt.unstable_batchedUpdates=function(m,h){return m(h)},Zt.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Zt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Zt.version="19.1.0",Zt}var U1;function _2(){if(U1)return Mf.exports;U1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Mf.exports=x3(),Mf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1;function S3(){if(j1)return oi;j1=1;var t=b3(),a=Ic(),l=_2();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(c(e)!==e)throw Error(o(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(o(188));return n!==e?null:e}for(var r=e,i=n;;){var u=r.return;if(u===null)break;var p=u.alternate;if(p===null){if(i=u.return,i!==null){r=i;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===r)return f(u),e;if(p===i)return f(u),n;p=p.sibling}throw Error(o(188))}if(r.return!==i.return)r=u,i=p;else{for(var b=!1,_=u.child;_;){if(_===r){b=!0,r=u,i=p;break}if(_===i){b=!0,i=u,r=p;break}_=_.sibling}if(!b){for(_=p.child;_;){if(_===r){b=!0,r=p,i=u;break}if(_===i){b=!0,i=p,r=u;break}_=_.sibling}if(!b)throw Error(o(189))}}if(r.alternate!==i)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:n}function h(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=h(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),R=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case D:return"Profiler";case E:return"StrictMode";case q:return"Suspense";case V:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case R:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case H:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:xe(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return xe(e(n))}catch{}}return null}var me=Array.isArray,k=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},K=[],C=-1;function F(e){return{current:e}}function j(e){0>C||(e.current=K[C],K[C]=null,C--)}function Z(e,n){C++,K[C]=e.current,e.current=n}var W=F(null),X=F(null),ae=F(null),oe=F(null);function he(e,n){switch(Z(ae,n),Z(X,e),Z(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?e1(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=e1(n),e=t1(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(W),Z(W,e)}function ve(){j(W),j(X),j(ae)}function He(e){e.memoizedState!==null&&Z(oe,e);var n=W.current,r=t1(n,e.type);n!==r&&(Z(X,e),Z(W,r))}function kt(e){X.current===e&&(j(W),j(X)),oe.current===e&&(j(oe),ei._currentValue=U)}var ht=Object.prototype.hasOwnProperty,Ht=t.unstable_scheduleCallback,Rn=t.unstable_cancelCallback,Yr=t.unstable_shouldYield,so=t.unstable_requestPaint,$t=t.unstable_now,Ta=t.unstable_getCurrentPriorityLevel,Vn=t.unstable_ImmediatePriority,Xn=t.unstable_UserBlockingPriority,Sn=t.unstable_NormalPriority,_a=t.unstable_LowPriority,Kn=t.unstable_IdlePriority,ka=t.log,Ma=t.unstable_setDisableYieldValue,cn=null,mt=null;function Ft(e){if(typeof ka=="function"&&Ma(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(cn,e)}catch{}}var gt=Math.clz32?Math.clz32:ye,Ea=Math.log,Wr=Math.LN2;function ye(e){return e>>>=0,e===0?32:31-(Ea(e)/Wr|0)|0}var Ne=256,et=4194304;function Tn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function sr(e,n,r){var i=e.pendingLanes;if(i===0)return 0;var u=0,p=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var _=i&134217727;return _!==0?(i=_&~p,i!==0?u=Tn(i):(b&=_,b!==0?u=Tn(b):r||(r=_&~e,r!==0&&(u=Tn(r))))):(_=i&~p,_!==0?u=Tn(_):b!==0?u=Tn(b):r||(r=i&~e,r!==0&&(u=Tn(r)))),u===0?0:n!==0&&n!==u&&(n&p)===0&&(p=u&-u,r=n&-n,p>=r||p===32&&(r&4194048)!==0)?n:u}function cr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function su(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gi(){var e=Ne;return Ne<<=1,(Ne&4194048)===0&&(Ne=256),e}function Lh(){var e=et;return et<<=1,(et&62914560)===0&&(et=4194304),e}function cu(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function co(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nb(e,n,r,i,u,p){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var _=e.entanglements,A=e.expirationTimes,P=e.hiddenUpdates;for(r=b&~r;0<r;){var Q=31-gt(r),ne=1<<Q;_[Q]=0,A[Q]=-1;var I=P[Q];if(I!==null)for(P[Q]=null,Q=0;Q<I.length;Q++){var Y=I[Q];Y!==null&&(Y.lane&=-536870913)}r&=~ne}i!==0&&Zh(e,i,0),p!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=p&~(b&~n))}function Zh(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-gt(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|r&4194090}function Bh(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var i=31-gt(r),u=1<<i;u&n|e[i]&n&&(e[i]|=n),r&=~u}}function uu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hh(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:b1(e.type))}function ab(e,n){var r=z.p;try{return z.p=e,n()}finally{z.p=r}}var Da=Math.random().toString(36).slice(2),qt="__reactFiber$"+Da,It="__reactProps$"+Da,Vr="__reactContainer$"+Da,fu="__reactEvents$"+Da,rb="__reactListeners$"+Da,lb="__reactHandles$"+Da,$h="__reactResources$"+Da,uo="__reactMarker$"+Da;function pu(e){delete e[qt],delete e[It],delete e[fu],delete e[rb],delete e[lb]}function Xr(e){var n=e[qt];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Vr]||r[qt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=l1(e);e!==null;){if(r=e[qt])return r;e=l1(e)}return n}e=r,r=e.parentNode}return null}function Kr(e){if(e=e[qt]||e[Vr]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function fo(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function Qr(e){var n=e[$h];return n||(n=e[$h]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mt(e){e[uo]=!0}var Fh=new Set,Gh={};function ur(e,n){Jr(e,n),Jr(e+"Capture",n)}function Jr(e,n){for(Gh[e]=n,e=0;e<n.length;e++)Fh.add(n[e])}var ob=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ph={},Ih={};function ib(e){return ht.call(Ih,e)?!0:ht.call(Ph,e)?!1:ob.test(e)?Ih[e]=!0:(Ph[e]=!0,!1)}function Pi(e,n,r){if(ib(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Ii(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Qn(e,n,r,i){if(i===null)e.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+i)}}var hu,Yh;function el(e){if(hu===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);hu=n&&n[1]||"",Yh=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+Yh}var mu=!1;function gu(e,n){if(!e||mu)return"";mu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Y){var I=Y}Reflect.construct(e,[],ne)}else{try{ne.call()}catch(Y){I=Y}e.call(ne.prototype)}}else{try{throw Error()}catch(Y){I=Y}(ne=e())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Y){if(Y&&I&&typeof Y.stack=="string")return[Y.stack,I.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=i.DetermineComponentFrameRoot(),b=p[0],_=p[1];if(b&&_){var A=b.split(`
`),P=_.split(`
`);for(u=i=0;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;for(;u<P.length&&!P[u].includes("DetermineComponentFrameRoot");)u++;if(i===A.length||u===P.length)for(i=A.length-1,u=P.length-1;1<=i&&0<=u&&A[i]!==P[u];)u--;for(;1<=i&&0<=u;i--,u--)if(A[i]!==P[u]){if(i!==1||u!==1)do if(i--,u--,0>u||A[i]!==P[u]){var Q=`
`+A[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=u);break}}}finally{mu=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?el(r):""}function sb(e){switch(e.tag){case 26:case 27:case 5:return el(e.type);case 16:return el("Lazy");case 13:return el("Suspense");case 19:return el("SuspenseList");case 0:case 15:return gu(e.type,!1);case 11:return gu(e.type.render,!1);case 1:return gu(e.type,!0);case 31:return el("Activity");default:return""}}function Wh(e){try{var n="";do n+=sb(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vh(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cb(e){var n=Vh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,p=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){i=""+b,p.call(this,b)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(b){i=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Yi(e){e._valueTracker||(e._valueTracker=cb(e))}function Xh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),i="";return e&&(i=Vh(e)?e.checked?"true":"false":e.value),e=i,e!==r?(n.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ub=/[\n"\\]/g;function dn(e){return e.replace(ub,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wu(e,n,r,i,u,p,b,_){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?vu(e,b,un(n)):r!=null?vu(e,b,un(r)):i!=null&&e.removeAttribute("value"),u==null&&p!=null&&(e.defaultChecked=!!p),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+un(_):e.removeAttribute("name")}function Kh(e,n,r,i,u,p,b,_){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||n!=null))return;r=r!=null?""+un(r):"",n=n!=null?""+un(n):r,_||n===e.value||(e.value=n),e.defaultValue=n}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=_?e.checked:!!i,e.defaultChecked=!!i,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function vu(e,n,r){n==="number"&&Wi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function tl(e,n,r,i){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&i&&(e[r].defaultSelected=!0)}else{for(r=""+un(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Qh(e,n,r){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+un(r):""}function Jh(e,n,r,i){if(n==null){if(i!=null){if(r!=null)throw Error(o(92));if(me(i)){if(1<i.length)throw Error(o(93));i=i[0]}r=i}r==null&&(r=""),n=r}r=un(n),e.defaultValue=r,i=e.textContent,i===r&&i!==""&&i!==null&&(e.value=i)}function nl(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var db=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function em(e,n,r){var i=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,r):typeof r!="number"||r===0||db.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function tm(e,n,r){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,r!=null){for(var i in r)!r.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var u in n)i=n[u],n.hasOwnProperty(u)&&r[u]!==i&&em(e,u,i)}else for(var p in n)n.hasOwnProperty(p)&&em(e,p,n[p])}function yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return pb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,rl=null;function nm(e){var n=Kr(e);if(n&&(e=n.stateNode)){var r=e[It]||null;e:switch(e=n.stateNode,n.type){case"input":if(wu(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var i=r[n];if(i!==e&&i.form===e.form){var u=i[It]||null;if(!u)throw Error(o(90));wu(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)i=r[n],i.form===e.form&&Xh(i)}break e;case"textarea":Qh(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&tl(e,!!r.multiple,n,!1)}}}var Su=!1;function am(e,n,r){if(Su)return e(n,r);Su=!0;try{var i=e(n);return i}finally{if(Su=!1,(al!==null||rl!==null)&&(js(),al&&(n=al,e=rl,rl=al=null,nm(n),e)))for(n=0;n<e.length;n++)nm(e[n])}}function po(e,n){var r=e.stateNode;if(r===null)return null;var i=r[It]||null;if(i===null)return null;r=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,n,typeof r));return r}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(Jn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Tu=!1}var Ca=null,_u=null,Xi=null;function rm(){if(Xi)return Xi;var e,n=_u,r=n.length,i,u="value"in Ca?Ca.value:Ca.textContent,p=u.length;for(e=0;e<r&&n[e]===u[e];e++);var b=r-e;for(i=1;i<=b&&n[r-i]===u[p-i];i++);return Xi=u.slice(e,1<i?1-i:void 0)}function Ki(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function lm(){return!1}function Yt(e){function n(r,i,u,p,b){this._reactName=r,this._targetInst=u,this.type=i,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(r=e[_],this[_]=r?r(p):p[_]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Qi:lm,this.isPropagationStopped=lm,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Yt(dr),mo=v({},dr,{view:0,detail:0}),hb=Yt(mo),ku,Mu,go,es=v({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(ku=e.screenX-go.screenX,Mu=e.screenY-go.screenY):Mu=ku=0,go=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),om=Yt(es),mb=v({},es,{dataTransfer:0}),gb=Yt(mb),wb=v({},mo,{relatedTarget:0}),Eu=Yt(wb),vb=v({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),yb=Yt(vb),bb=v({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xb=Yt(bb),Sb=v({},dr,{data:0}),im=Yt(Sb),Tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kb[e])?!!n[e]:!1}function Du(){return Mb}var Eb=v({},mo,{key:function(e){if(e.key){var n=Tb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_b[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Db=Yt(Eb),Cb=v({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Yt(Cb),Nb=v({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),Ab=Yt(Nb),zb=v({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=Yt(zb),jb=v({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rb=Yt(jb),Ob=v({},dr,{newState:0,oldState:0}),qb=Yt(Ob),Lb=[9,13,27,32],Cu=Jn&&"CompositionEvent"in window,wo=null;Jn&&"documentMode"in document&&(wo=document.documentMode);var Zb=Jn&&"TextEvent"in window&&!wo,cm=Jn&&(!Cu||wo&&8<wo&&11>=wo),um=" ",dm=!1;function fm(e,n){switch(e){case"keyup":return Lb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function Bb(e,n){switch(e){case"compositionend":return pm(n);case"keypress":return n.which!==32?null:(dm=!0,um);case"textInput":return e=n.data,e===um&&dm?null:e;default:return null}}function Hb(e,n){if(ll)return e==="compositionend"||!Cu&&fm(e,n)?(e=rm(),Xi=_u=Ca=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cm&&n.locale!=="ko"?null:n.data;default:return null}}var $b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$b[e.type]:n==="textarea"}function mm(e,n,r,i){al?rl?rl.push(i):rl=[i]:al=i,n=Bs(n,"onChange"),0<n.length&&(r=new Ji("onChange","change",null,r,i),e.push({event:r,listeners:n}))}var vo=null,yo=null;function Fb(e){V0(e,0)}function ts(e){var n=fo(e);if(Xh(n))return e}function gm(e,n){if(e==="change")return n}var wm=!1;if(Jn){var Nu;if(Jn){var Au="oninput"in document;if(!Au){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Au=typeof vm.oninput=="function"}Nu=Au}else Nu=!1;wm=Nu&&(!document.documentMode||9<document.documentMode)}function ym(){vo&&(vo.detachEvent("onpropertychange",bm),yo=vo=null)}function bm(e){if(e.propertyName==="value"&&ts(yo)){var n=[];mm(n,yo,e,xu(e)),am(Fb,n)}}function Gb(e,n,r){e==="focusin"?(ym(),vo=n,yo=r,vo.attachEvent("onpropertychange",bm)):e==="focusout"&&ym()}function Pb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ts(yo)}function Ib(e,n){if(e==="click")return ts(n)}function Yb(e,n){if(e==="input"||e==="change")return ts(n)}function Wb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jt=typeof Object.is=="function"?Object.is:Wb;function bo(e,n){if(Jt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),i=Object.keys(n);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var u=r[i];if(!ht.call(n,u)||!Jt(e[u],n[u]))return!1}return!0}function xm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sm(e,n){var r=xm(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=n&&i>=n)return{node:r,offset:n-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=xm(r)}}function Tm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _m(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Wi(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Wi(e.document)}return n}function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vb=Jn&&"documentMode"in document&&11>=document.documentMode,ol=null,Uu=null,xo=null,ju=!1;function km(e,n,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ju||ol==null||ol!==Wi(i)||(i=ol,"selectionStart"in i&&zu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xo&&bo(xo,i)||(xo=i,i=Bs(Uu,"onSelect"),0<i.length&&(n=new Ji("onSelect","select",null,n,r),e.push({event:n,listeners:i}),n.target=ol)))}function fr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var il={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Ru={},Mm={};Jn&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function pr(e){if(Ru[e])return Ru[e];if(!il[e])return e;var n=il[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Mm)return Ru[e]=n[r];return e}var Em=pr("animationend"),Dm=pr("animationiteration"),Cm=pr("animationstart"),Xb=pr("transitionrun"),Kb=pr("transitionstart"),Qb=pr("transitioncancel"),Nm=pr("transitionend"),Am=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function _n(e,n){Am.set(e,n),ur(n,[e])}var zm=new WeakMap;function fn(e,n){if(typeof e=="object"&&e!==null){var r=zm.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Wh(n)},zm.set(e,n),n)}return{value:e,source:n,stack:Wh(n)}}var pn=[],sl=0,qu=0;function ns(){for(var e=sl,n=qu=sl=0;n<e;){var r=pn[n];pn[n++]=null;var i=pn[n];pn[n++]=null;var u=pn[n];pn[n++]=null;var p=pn[n];if(pn[n++]=null,i!==null&&u!==null){var b=i.pending;b===null?u.next=u:(u.next=b.next,b.next=u),i.pending=u}p!==0&&Um(r,u,p)}}function as(e,n,r,i){pn[sl++]=e,pn[sl++]=n,pn[sl++]=r,pn[sl++]=i,qu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Lu(e,n,r,i){return as(e,n,r,i),rs(e)}function cl(e,n){return as(e,null,null,n),rs(e)}function Um(e,n,r){e.lanes|=r;var i=e.alternate;i!==null&&(i.lanes|=r);for(var u=!1,p=e.return;p!==null;)p.childLanes|=r,i=p.alternate,i!==null&&(i.childLanes|=r),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(u=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,u&&n!==null&&(u=31-gt(r),e=p.hiddenUpdates,i=e[u],i===null?e[u]=[n]:i.push(n),n.lane=r|536870912),p):null}function rs(e){if(50<Io)throw Io=0,Gd=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ul={};function Jb(e,n,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,n,r,i){return new Jb(e,n,r,i)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var r=e.alternate;return r===null?(r=en(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function jm(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ls(e,n,r,i,u,p){var b=0;if(i=e,typeof e=="function")Zu(e)&&(b=1);else if(typeof e=="string")b=t3(e,r,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=en(31,r,n,u),e.elementType=re,e.lanes=p,e;case T:return hr(r.children,u,p,n);case E:b=8,u|=24;break;case D:return e=en(12,r,n,u|2),e.elementType=D,e.lanes=p,e;case q:return e=en(13,r,n,u),e.elementType=q,e.lanes=p,e;case V:return e=en(19,r,n,u),e.elementType=V,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case R:b=10;break e;case N:b=9;break e;case H:b=11;break e;case ee:b=14;break e;case J:b=16,i=null;break e}b=29,r=Error(o(130,e===null?"null":typeof e,"")),i=null}return n=en(b,r,n,u),n.elementType=e,n.type=i,n.lanes=p,n}function hr(e,n,r,i){return e=en(7,e,i,n),e.lanes=r,e}function Bu(e,n,r){return e=en(6,e,null,n),e.lanes=r,e}function Hu(e,n,r){return n=en(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var dl=[],fl=0,os=null,is=0,hn=[],mn=0,mr=null,ta=1,na="";function gr(e,n){dl[fl++]=is,dl[fl++]=os,os=e,is=n}function Rm(e,n,r){hn[mn++]=ta,hn[mn++]=na,hn[mn++]=mr,mr=e;var i=ta;e=na;var u=32-gt(i)-1;i&=~(1<<u),r+=1;var p=32-gt(n)+u;if(30<p){var b=u-u%5;p=(i&(1<<b)-1).toString(32),i>>=b,u-=b,ta=1<<32-gt(n)+u|r<<u|i,na=p+e}else ta=1<<p|r<<u|i,na=e}function $u(e){e.return!==null&&(gr(e,1),Rm(e,1,0))}function Fu(e){for(;e===os;)os=dl[--fl],dl[fl]=null,is=dl[--fl],dl[fl]=null;for(;e===mr;)mr=hn[--mn],hn[mn]=null,na=hn[--mn],hn[mn]=null,ta=hn[--mn],hn[mn]=null}var Gt=null,ot=null,$e=!1,wr=null,On=!1,Gu=Error(o(519));function vr(e){var n=Error(o(418,""));throw _o(fn(n,e)),Gu}function Om(e){var n=e.stateNode,r=e.type,i=e.memoizedProps;switch(n[qt]=e,n[It]=i,r){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(r=0;r<Wo.length;r++)Oe(Wo[r],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),Kh(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Yi(n);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),Jh(n,i.value,i.defaultValue,i.children),Yi(n)}r=i.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||i.suppressHydrationWarning===!0||J0(n.textContent,r)?(i.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),i.onScroll!=null&&Oe("scroll",n),i.onScrollEnd!=null&&Oe("scrollend",n),i.onClick!=null&&(n.onclick=Hs),n=!0):n=!1,n||vr(e)}function qm(e){for(Gt=e.return;Gt;)switch(Gt.tag){case 5:case 13:On=!1;return;case 27:case 3:On=!0;return;default:Gt=Gt.return}}function So(e){if(e!==Gt)return!1;if(!$e)return qm(e),$e=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||of(e.type,e.memoizedProps)),r=!r),r&&ot&&vr(e),qm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){ot=Mn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}ot=null}}else n===27?(n=ot,Pa(e.type)?(e=df,df=null,ot=e):ot=n):ot=Gt?Mn(e.stateNode.nextSibling):null;return!0}function To(){ot=Gt=null,$e=!1}function Lm(){var e=wr;return e!==null&&(Xt===null?Xt=e:Xt.push.apply(Xt,e),wr=null),e}function _o(e){wr===null?wr=[e]:wr.push(e)}var Pu=F(null),yr=null,aa=null;function Na(e,n,r){Z(Pu,n._currentValue),n._currentValue=r}function ra(e){e._currentValue=Pu.current,j(Pu)}function Iu(e,n,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===r)break;e=e.return}}function Yu(e,n,r,i){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var p=u.dependencies;if(p!==null){var b=u.child;p=p.firstContext;e:for(;p!==null;){var _=p;p=u;for(var A=0;A<n.length;A++)if(_.context===n[A]){p.lanes|=r,_=p.alternate,_!==null&&(_.lanes|=r),Iu(p.return,r,e),i||(b=null);break e}p=_.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(o(341));b.lanes|=r,p=b.alternate,p!==null&&(p.lanes|=r),Iu(b,r,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function ko(e,n,r,i){e=null;for(var u=n,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(o(387));if(b=b.memoizedProps,b!==null){var _=u.type;Jt(u.pendingProps.value,b.value)||(e!==null?e.push(_):e=[_])}}else if(u===oe.current){if(b=u.alternate,b===null)throw Error(o(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ei):e=[ei])}u=u.return}e!==null&&Yu(n,e,r,i),n.flags|=262144}function ss(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function br(e){yr=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Lt(e){return Zm(yr,e)}function cs(e,n){return yr===null&&br(e),Zm(e,n)}function Zm(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},aa===null){if(e===null)throw Error(o(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return r}var e4=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},t4=t.unstable_scheduleCallback,n4=t.unstable_NormalPriority,xt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new e4,data:new Map,refCount:0}}function Mo(e){e.refCount--,e.refCount===0&&t4(n4,function(){e.controller.abort()})}var Eo=null,Vu=0,pl=0,hl=null;function a4(e,n){if(Eo===null){var r=Eo=[];Vu=0,pl=Kd(),hl={status:"pending",value:void 0,then:function(i){r.push(i)}}}return Vu++,n.then(Bm,Bm),n}function Bm(){if(--Vu===0&&Eo!==null){hl!==null&&(hl.status="fulfilled");var e=Eo;Eo=null,pl=0,hl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function r4(e,n){var r=[],i={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(i.status="rejected",i.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),i}var Hm=k.S;k.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&a4(e,n),Hm!==null&&Hm(e,n)};var xr=F(null);function Xu(){var e=xr.current;return e!==null?e:Ke.pooledCache}function us(e,n){n===null?Z(xr,xr.current):Z(xr,n.pool)}function $m(){var e=Xu();return e===null?null:{parent:xt._currentValue,pool:e}}var Do=Error(o(460)),Fm=Error(o(474)),ds=Error(o(542)),Ku={then:function(){}};function Gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fs(){}function Pm(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(fs,fs),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ym(e),e;default:if(typeof n.status=="string")n.then(fs,fs);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=i}},function(i){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ym(e),e}throw Co=n,Do}}var Co=null;function Im(){if(Co===null)throw Error(o(459));var e=Co;return Co=null,e}function Ym(e){if(e===Do||e===ds)throw Error(o(483))}var Aa=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ge&2)!==0){var u=i.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),i.pending=n,n=rs(e),Um(e,null,r),n}return as(e,i,n,r),rs(e)}function No(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,Bh(e,r)}}function ed(e,n){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var u=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?u=p=b:p=p.next=b,r=r.next}while(r!==null);p===null?u=p=n:p=p.next=n}else u=p=n;r={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:i.shared,callbacks:i.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var td=!1;function Ao(){if(td){var e=hl;if(e!==null)throw e}}function zo(e,n,r,i){td=!1;var u=e.updateQueue;Aa=!1;var p=u.firstBaseUpdate,b=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var A=_,P=A.next;A.next=null,b===null?p=P:b.next=P,b=A;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,_=Q.lastBaseUpdate,_!==b&&(_===null?Q.firstBaseUpdate=P:_.next=P,Q.lastBaseUpdate=A))}if(p!==null){var ne=u.baseState;b=0,Q=P=A=null,_=p;do{var I=_.lane&-536870913,Y=I!==_.lane;if(Y?(Le&I)===I:(i&I)===I){I!==0&&I===pl&&(td=!0),Q!==null&&(Q=Q.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var Te=e,be=_;I=n;var We=r;switch(be.tag){case 1:if(Te=be.payload,typeof Te=="function"){ne=Te.call(We,ne,I);break e}ne=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=be.payload,I=typeof Te=="function"?Te.call(We,ne,I):Te,I==null)break e;ne=v({},ne,I);break e;case 2:Aa=!0}}I=_.callback,I!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=u.callbacks,Y===null?u.callbacks=[I]:Y.push(I))}else Y={lane:I,tag:_.tag,payload:_.payload,callback:_.callback,next:null},Q===null?(P=Q=Y,A=ne):Q=Q.next=Y,b|=I;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;Y=_,_=Y.next,Y.next=null,u.lastBaseUpdate=Y,u.shared.pending=null}}while(!0);Q===null&&(A=ne),u.baseState=A,u.firstBaseUpdate=P,u.lastBaseUpdate=Q,p===null&&(u.shared.lanes=0),Ha|=b,e.lanes=b,e.memoizedState=ne}}function Wm(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function Vm(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Wm(r[e],n)}var ml=F(null),ps=F(0);function Xm(e,n){e=da,Z(ps,e),Z(ml,n),da=e|n.baseLanes}function nd(){Z(ps,da),Z(ml,ml.current)}function ad(){da=ps.current,j(ml),j(ps)}var ja=0,Ae=null,Ie=null,wt=null,hs=!1,gl=!1,Sr=!1,ms=0,Uo=0,wl=null,l4=0;function ct(){throw Error(o(321))}function rd(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Jt(e[r],n[r]))return!1;return!0}function ld(e,n,r,i,u,p){return ja=p,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,k.H=e===null||e.memoizedState===null?Ug:jg,Sr=!1,p=r(i,u),Sr=!1,gl&&(p=Qm(n,r,i,u)),Km(e),p}function Km(e){k.H=xs;var n=Ie!==null&&Ie.next!==null;if(ja=0,wt=Ie=Ae=null,hs=!1,Uo=0,wl=null,n)throw Error(o(300));e===null||Et||(e=e.dependencies,e!==null&&ss(e)&&(Et=!0))}function Qm(e,n,r,i){Ae=e;var u=0;do{if(gl&&(wl=null),Uo=0,gl=!1,25<=u)throw Error(o(301));if(u+=1,wt=Ie=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}k.H=f4,p=n(r,i)}while(gl);return p}function o4(){var e=k.H,n=e.useState()[0];return n=typeof n.then=="function"?jo(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(Ae.flags|=1024),n}function od(){var e=ms!==0;return ms=0,e}function id(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function sd(e){if(hs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hs=!1}ja=0,wt=Ie=Ae=null,gl=!1,Uo=ms=0,wl=null}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ae.memoizedState=wt=e:wt=wt.next=e,wt}function vt(){if(Ie===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=wt===null?Ae.memoizedState:wt.next;if(n!==null)wt=n,Ie=e;else{if(e===null)throw Ae.alternate===null?Error(o(467)):Error(o(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},wt===null?Ae.memoizedState=wt=e:wt=wt.next=e}return wt}function cd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var n=Uo;return Uo+=1,wl===null&&(wl=[]),e=Pm(wl,e,n),n=Ae,(wt===null?n.memoizedState:wt.next)===null&&(n=n.alternate,k.H=n===null||n.memoizedState===null?Ug:jg),e}function gs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===R)return Lt(e)}throw Error(o(438,String(e)))}function ud(e){var n=null,r=Ae.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var i=Ae.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=cd(),Ae.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),i=0;i<e;i++)r[i]=ie;return n.index++,r}function la(e,n){return typeof n=="function"?n(e):n}function ws(e){var n=vt();return dd(n,Ie,e)}function dd(e,n,r){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=r;var u=e.baseQueue,p=i.pending;if(p!==null){if(u!==null){var b=u.next;u.next=p.next,p.next=b}n.baseQueue=u=p,i.pending=null}if(p=e.baseState,u===null)e.memoizedState=p;else{n=u.next;var _=b=null,A=null,P=n,Q=!1;do{var ne=P.lane&-536870913;if(ne!==P.lane?(Le&ne)===ne:(ja&ne)===ne){var I=P.revertLane;if(I===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),ne===pl&&(Q=!0);else if((ja&I)===I){P=P.next,I===pl&&(Q=!0);continue}else ne={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},A===null?(_=A=ne,b=p):A=A.next=ne,Ae.lanes|=I,Ha|=I;ne=P.action,Sr&&r(p,ne),p=P.hasEagerState?P.eagerState:r(p,ne)}else I={lane:ne,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},A===null?(_=A=I,b=p):A=A.next=I,Ae.lanes|=ne,Ha|=ne;P=P.next}while(P!==null&&P!==n);if(A===null?b=p:A.next=_,!Jt(p,e.memoizedState)&&(Et=!0,Q&&(r=hl,r!==null)))throw r;e.memoizedState=p,e.baseState=b,e.baseQueue=A,i.lastRenderedState=p}return u===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function fd(e){var n=vt(),r=n.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var i=r.dispatch,u=r.pending,p=n.memoizedState;if(u!==null){r.pending=null;var b=u=u.next;do p=e(p,b.action),b=b.next;while(b!==u);Jt(p,n.memoizedState)||(Et=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),r.lastRenderedState=p}return[p,i]}function Jm(e,n,r){var i=Ae,u=vt(),p=$e;if(p){if(r===void 0)throw Error(o(407));r=r()}else r=n();var b=!Jt((Ie||u).memoizedState,r);b&&(u.memoizedState=r,Et=!0),u=u.queue;var _=ng.bind(null,i,u,e);if(Ro(2048,8,_,[e]),u.getSnapshot!==n||b||wt!==null&&wt.memoizedState.tag&1){if(i.flags|=2048,vl(9,vs(),tg.bind(null,i,u,r,n),null),Ke===null)throw Error(o(349));p||(ja&124)!==0||eg(i,n,r)}return r}function eg(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Ae.updateQueue,n===null?(n=cd(),Ae.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function tg(e,n,r,i){n.value=r,n.getSnapshot=i,ag(n)&&rg(e)}function ng(e,n,r){return r(function(){ag(n)&&rg(e)})}function ag(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Jt(e,r)}catch{return!0}}function rg(e){var n=cl(e,2);n!==null&&ln(n,e,2)}function pd(e){var n=Wt();if(typeof e=="function"){var r=e;if(e=r(),Sr){Ft(!0);try{r()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function lg(e,n,r,i){return e.baseState=r,dd(e,Ie,typeof i=="function"?i:la)}function i4(e,n,r,i,u){if(bs(e))throw Error(o(485));if(e=n.action,e!==null){var p={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){p.listeners.push(b)}};k.T!==null?r(!0):p.isTransition=!1,i(p),r=n.pending,r===null?(p.next=n.pending=p,og(n,p)):(p.next=r.next,n.pending=r.next=p)}}function og(e,n){var r=n.action,i=n.payload,u=e.state;if(n.isTransition){var p=k.T,b={};k.T=b;try{var _=r(u,i),A=k.S;A!==null&&A(b,_),ig(e,n,_)}catch(P){hd(e,n,P)}finally{k.T=p}}else try{p=r(u,i),ig(e,n,p)}catch(P){hd(e,n,P)}}function ig(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(i){sg(e,n,i)},function(i){return hd(e,n,i)}):sg(e,n,r)}function sg(e,n,r){n.status="fulfilled",n.value=r,cg(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,og(e,r)))}function hd(e,n,r){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=r,cg(n),n=n.next;while(n!==i)}e.action=null}function cg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ug(e,n){return n}function dg(e,n){if($e){var r=Ke.formState;if(r!==null){e:{var i=Ae;if($e){if(ot){t:{for(var u=ot,p=On;u.nodeType!==8;){if(!p){u=null;break t}if(u=Mn(u.nextSibling),u===null){u=null;break t}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){ot=Mn(u.nextSibling),i=u.data==="F!";break e}}vr(i)}i=!1}i&&(n=r[0])}}return r=Wt(),r.memoizedState=r.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ug,lastRenderedState:n},r.queue=i,r=Ng.bind(null,Ae,i),i.dispatch=r,i=pd(!1),p=yd.bind(null,Ae,!1,i.queue),i=Wt(),u={state:n,dispatch:null,action:e,pending:null},i.queue=u,r=i4.bind(null,Ae,u,p,r),u.dispatch=r,i.memoizedState=e,[n,r,!1]}function fg(e){var n=vt();return pg(n,Ie,e)}function pg(e,n,r){if(n=dd(e,n,ug)[0],e=ws(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=jo(n)}catch(b){throw b===Do?ds:b}else i=n;n=vt();var u=n.queue,p=u.dispatch;return r!==n.memoizedState&&(Ae.flags|=2048,vl(9,vs(),s4.bind(null,u,r),null)),[i,p,e]}function s4(e,n){e.action=n}function hg(e){var n=vt(),r=Ie;if(r!==null)return pg(n,r,e);vt(),n=n.memoizedState,r=vt();var i=r.queue.dispatch;return r.memoizedState=e,[n,i,!1]}function vl(e,n,r,i){return e={tag:e,create:r,deps:i,inst:n,next:null},n=Ae.updateQueue,n===null&&(n=cd(),Ae.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,n.lastEffect=e),e}function vs(){return{destroy:void 0,resource:void 0}}function mg(){return vt().memoizedState}function ys(e,n,r,i){var u=Wt();i=i===void 0?null:i,Ae.flags|=e,u.memoizedState=vl(1|n,vs(),r,i)}function Ro(e,n,r,i){var u=vt();i=i===void 0?null:i;var p=u.memoizedState.inst;Ie!==null&&i!==null&&rd(i,Ie.memoizedState.deps)?u.memoizedState=vl(n,p,r,i):(Ae.flags|=e,u.memoizedState=vl(1|n,p,r,i))}function gg(e,n){ys(8390656,8,e,n)}function wg(e,n){Ro(2048,8,e,n)}function vg(e,n){return Ro(4,2,e,n)}function yg(e,n){return Ro(4,4,e,n)}function bg(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xg(e,n,r){r=r!=null?r.concat([e]):null,Ro(4,4,bg.bind(null,n,e),r)}function md(){}function Sg(e,n){var r=vt();n=n===void 0?null:n;var i=r.memoizedState;return n!==null&&rd(n,i[1])?i[0]:(r.memoizedState=[e,n],e)}function Tg(e,n){var r=vt();n=n===void 0?null:n;var i=r.memoizedState;if(n!==null&&rd(n,i[1]))return i[0];if(i=e(),Sr){Ft(!0);try{e()}finally{Ft(!1)}}return r.memoizedState=[i,n],i}function gd(e,n,r){return r===void 0||(ja&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=M0(),Ae.lanes|=e,Ha|=e,r)}function _g(e,n,r,i){return Jt(r,n)?r:ml.current!==null?(e=gd(e,r,i),Jt(e,n)||(Et=!0),e):(ja&42)===0?(Et=!0,e.memoizedState=r):(e=M0(),Ae.lanes|=e,Ha|=e,n)}function kg(e,n,r,i,u){var p=z.p;z.p=p!==0&&8>p?p:8;var b=k.T,_={};k.T=_,yd(e,!1,n,r);try{var A=u(),P=k.S;if(P!==null&&P(_,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var Q=r4(A,i);Oo(e,n,Q,rn(e))}else Oo(e,n,i,rn(e))}catch(ne){Oo(e,n,{then:function(){},status:"rejected",reason:ne},rn())}finally{z.p=p,k.T=b}}function c4(){}function wd(e,n,r,i){if(e.tag!==5)throw Error(o(476));var u=Mg(e).queue;kg(e,u,n,U,r===null?c4:function(){return Eg(e),r(i)})}function Mg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:U},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Eg(e){var n=Mg(e).next.queue;Oo(e,n,{},rn())}function vd(){return Lt(ei)}function Dg(){return vt().memoizedState}function Cg(){return vt().memoizedState}function u4(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=rn();e=za(r);var i=Ua(n,e,r);i!==null&&(ln(i,n,r),No(i,n,r)),n={cache:Wu()},e.payload=n;return}n=n.return}}function d4(e,n,r){var i=rn();r={lane:i,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},bs(e)?Ag(n,r):(r=Lu(e,n,r,i),r!==null&&(ln(r,e,i),zg(r,n,i)))}function Ng(e,n,r){var i=rn();Oo(e,n,r,i)}function Oo(e,n,r,i){var u={lane:i,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(bs(e))Ag(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var b=n.lastRenderedState,_=p(b,r);if(u.hasEagerState=!0,u.eagerState=_,Jt(_,b))return as(e,n,u,0),Ke===null&&ns(),!1}catch{}finally{}if(r=Lu(e,n,u,i),r!==null)return ln(r,e,i),zg(r,n,i),!0}return!1}function yd(e,n,r,i){if(i={lane:2,revertLane:Kd(),action:i,hasEagerState:!1,eagerState:null,next:null},bs(e)){if(n)throw Error(o(479))}else n=Lu(e,r,i,2),n!==null&&ln(n,e,2)}function bs(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function Ag(e,n){gl=hs=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function zg(e,n,r){if((r&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,Bh(e,r)}}var xs={readContext:Lt,use:gs,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct},Ug={readContext:Lt,use:gs,useCallback:function(e,n){return Wt().memoizedState=[e,n===void 0?null:n],e},useContext:Lt,useEffect:gg,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,ys(4194308,4,bg.bind(null,n,e),r)},useLayoutEffect:function(e,n){return ys(4194308,4,e,n)},useInsertionEffect:function(e,n){ys(4,2,e,n)},useMemo:function(e,n){var r=Wt();n=n===void 0?null:n;var i=e();if(Sr){Ft(!0);try{e()}finally{Ft(!1)}}return r.memoizedState=[i,n],i},useReducer:function(e,n,r){var i=Wt();if(r!==void 0){var u=r(n);if(Sr){Ft(!0);try{r(n)}finally{Ft(!1)}}}else u=n;return i.memoizedState=i.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},i.queue=e,e=e.dispatch=d4.bind(null,Ae,e),[i.memoizedState,e]},useRef:function(e){var n=Wt();return e={current:e},n.memoizedState=e},useState:function(e){e=pd(e);var n=e.queue,r=Ng.bind(null,Ae,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:md,useDeferredValue:function(e,n){var r=Wt();return gd(r,e,n)},useTransition:function(){var e=pd(!1);return e=kg.bind(null,Ae,e.queue,!0,!1),Wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var i=Ae,u=Wt();if($e){if(r===void 0)throw Error(o(407));r=r()}else{if(r=n(),Ke===null)throw Error(o(349));(Le&124)!==0||eg(i,n,r)}u.memoizedState=r;var p={value:r,getSnapshot:n};return u.queue=p,gg(ng.bind(null,i,p,e),[e]),i.flags|=2048,vl(9,vs(),tg.bind(null,i,p,r,n),null),r},useId:function(){var e=Wt(),n=Ke.identifierPrefix;if($e){var r=na,i=ta;r=(i&~(1<<32-gt(i)-1)).toString(32)+r,n="«"+n+"R"+r,r=ms++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=l4++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:vd,useFormState:dg,useActionState:dg,useOptimistic:function(e){var n=Wt();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=yd.bind(null,Ae,!0,r),r.dispatch=n,[e,n]},useMemoCache:ud,useCacheRefresh:function(){return Wt().memoizedState=u4.bind(null,Ae)}},jg={readContext:Lt,use:gs,useCallback:Sg,useContext:Lt,useEffect:wg,useImperativeHandle:xg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Tg,useReducer:ws,useRef:mg,useState:function(){return ws(la)},useDebugValue:md,useDeferredValue:function(e,n){var r=vt();return _g(r,Ie.memoizedState,e,n)},useTransition:function(){var e=ws(la)[0],n=vt().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:Jm,useId:Dg,useHostTransitionStatus:vd,useFormState:fg,useActionState:fg,useOptimistic:function(e,n){var r=vt();return lg(r,Ie,e,n)},useMemoCache:ud,useCacheRefresh:Cg},f4={readContext:Lt,use:gs,useCallback:Sg,useContext:Lt,useEffect:wg,useImperativeHandle:xg,useInsertionEffect:vg,useLayoutEffect:yg,useMemo:Tg,useReducer:fd,useRef:mg,useState:function(){return fd(la)},useDebugValue:md,useDeferredValue:function(e,n){var r=vt();return Ie===null?gd(r,e,n):_g(r,Ie.memoizedState,e,n)},useTransition:function(){var e=fd(la)[0],n=vt().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:Jm,useId:Dg,useHostTransitionStatus:vd,useFormState:hg,useActionState:hg,useOptimistic:function(e,n){var r=vt();return Ie!==null?lg(r,Ie,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:ud,useCacheRefresh:Cg},yl=null,qo=0;function Ss(e){var n=qo;return qo+=1,yl===null&&(yl=[]),Pm(yl,e,n)}function Lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ts(e,n){throw n.$$typeof===w?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rg(e){var n=e._init;return n(e._payload)}function Og(e){function n(B,O){if(e){var G=B.deletions;G===null?(B.deletions=[O],B.flags|=16):G.push(O)}}function r(B,O){if(!e)return null;for(;O!==null;)n(B,O),O=O.sibling;return null}function i(B){for(var O=new Map;B!==null;)B.key!==null?O.set(B.key,B):O.set(B.index,B),B=B.sibling;return O}function u(B,O){return B=ea(B,O),B.index=0,B.sibling=null,B}function p(B,O,G){return B.index=G,e?(G=B.alternate,G!==null?(G=G.index,G<O?(B.flags|=67108866,O):G):(B.flags|=67108866,O)):(B.flags|=1048576,O)}function b(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function _(B,O,G,te){return O===null||O.tag!==6?(O=Bu(G,B.mode,te),O.return=B,O):(O=u(O,G),O.return=B,O)}function A(B,O,G,te){var de=G.type;return de===T?Q(B,O,G.props.children,te,G.key):O!==null&&(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===J&&Rg(de)===O.type)?(O=u(O,G.props),Lo(O,G),O.return=B,O):(O=ls(G.type,G.key,G.props,null,B.mode,te),Lo(O,G),O.return=B,O)}function P(B,O,G,te){return O===null||O.tag!==4||O.stateNode.containerInfo!==G.containerInfo||O.stateNode.implementation!==G.implementation?(O=Hu(G,B.mode,te),O.return=B,O):(O=u(O,G.children||[]),O.return=B,O)}function Q(B,O,G,te,de){return O===null||O.tag!==7?(O=hr(G,B.mode,te,de),O.return=B,O):(O=u(O,G),O.return=B,O)}function ne(B,O,G){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Bu(""+O,B.mode,G),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case y:return G=ls(O.type,O.key,O.props,null,B.mode,G),Lo(G,O),G.return=B,G;case S:return O=Hu(O,B.mode,G),O.return=B,O;case J:var te=O._init;return O=te(O._payload),ne(B,O,G)}if(me(O)||le(O))return O=hr(O,B.mode,G,null),O.return=B,O;if(typeof O.then=="function")return ne(B,Ss(O),G);if(O.$$typeof===R)return ne(B,cs(B,O),G);Ts(B,O)}return null}function I(B,O,G,te){var de=O!==null?O.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return de!==null?null:_(B,O,""+G,te);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return G.key===de?A(B,O,G,te):null;case S:return G.key===de?P(B,O,G,te):null;case J:return de=G._init,G=de(G._payload),I(B,O,G,te)}if(me(G)||le(G))return de!==null?null:Q(B,O,G,te,null);if(typeof G.then=="function")return I(B,O,Ss(G),te);if(G.$$typeof===R)return I(B,O,cs(B,G),te);Ts(B,G)}return null}function Y(B,O,G,te,de){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return B=B.get(G)||null,_(O,B,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case y:return B=B.get(te.key===null?G:te.key)||null,A(O,B,te,de);case S:return B=B.get(te.key===null?G:te.key)||null,P(O,B,te,de);case J:var je=te._init;return te=je(te._payload),Y(B,O,G,te,de)}if(me(te)||le(te))return B=B.get(G)||null,Q(O,B,te,de,null);if(typeof te.then=="function")return Y(B,O,G,Ss(te),de);if(te.$$typeof===R)return Y(B,O,G,cs(O,te),de);Ts(O,te)}return null}function Te(B,O,G,te){for(var de=null,je=null,ge=O,Se=O=0,Ct=null;ge!==null&&Se<G.length;Se++){ge.index>Se?(Ct=ge,ge=null):Ct=ge.sibling;var Be=I(B,ge,G[Se],te);if(Be===null){ge===null&&(ge=Ct);break}e&&ge&&Be.alternate===null&&n(B,ge),O=p(Be,O,Se),je===null?de=Be:je.sibling=Be,je=Be,ge=Ct}if(Se===G.length)return r(B,ge),$e&&gr(B,Se),de;if(ge===null){for(;Se<G.length;Se++)ge=ne(B,G[Se],te),ge!==null&&(O=p(ge,O,Se),je===null?de=ge:je.sibling=ge,je=ge);return $e&&gr(B,Se),de}for(ge=i(ge);Se<G.length;Se++)Ct=Y(ge,B,Se,G[Se],te),Ct!==null&&(e&&Ct.alternate!==null&&ge.delete(Ct.key===null?Se:Ct.key),O=p(Ct,O,Se),je===null?de=Ct:je.sibling=Ct,je=Ct);return e&&ge.forEach(function(Xa){return n(B,Xa)}),$e&&gr(B,Se),de}function be(B,O,G,te){if(G==null)throw Error(o(151));for(var de=null,je=null,ge=O,Se=O=0,Ct=null,Be=G.next();ge!==null&&!Be.done;Se++,Be=G.next()){ge.index>Se?(Ct=ge,ge=null):Ct=ge.sibling;var Xa=I(B,ge,Be.value,te);if(Xa===null){ge===null&&(ge=Ct);break}e&&ge&&Xa.alternate===null&&n(B,ge),O=p(Xa,O,Se),je===null?de=Xa:je.sibling=Xa,je=Xa,ge=Ct}if(Be.done)return r(B,ge),$e&&gr(B,Se),de;if(ge===null){for(;!Be.done;Se++,Be=G.next())Be=ne(B,Be.value,te),Be!==null&&(O=p(Be,O,Se),je===null?de=Be:je.sibling=Be,je=Be);return $e&&gr(B,Se),de}for(ge=i(ge);!Be.done;Se++,Be=G.next())Be=Y(ge,B,Se,Be.value,te),Be!==null&&(e&&Be.alternate!==null&&ge.delete(Be.key===null?Se:Be.key),O=p(Be,O,Se),je===null?de=Be:je.sibling=Be,je=Be);return e&&ge.forEach(function(p3){return n(B,p3)}),$e&&gr(B,Se),de}function We(B,O,G,te){if(typeof G=="object"&&G!==null&&G.type===T&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case y:e:{for(var de=G.key;O!==null;){if(O.key===de){if(de=G.type,de===T){if(O.tag===7){r(B,O.sibling),te=u(O,G.props.children),te.return=B,B=te;break e}}else if(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===J&&Rg(de)===O.type){r(B,O.sibling),te=u(O,G.props),Lo(te,G),te.return=B,B=te;break e}r(B,O);break}else n(B,O);O=O.sibling}G.type===T?(te=hr(G.props.children,B.mode,te,G.key),te.return=B,B=te):(te=ls(G.type,G.key,G.props,null,B.mode,te),Lo(te,G),te.return=B,B=te)}return b(B);case S:e:{for(de=G.key;O!==null;){if(O.key===de)if(O.tag===4&&O.stateNode.containerInfo===G.containerInfo&&O.stateNode.implementation===G.implementation){r(B,O.sibling),te=u(O,G.children||[]),te.return=B,B=te;break e}else{r(B,O);break}else n(B,O);O=O.sibling}te=Hu(G,B.mode,te),te.return=B,B=te}return b(B);case J:return de=G._init,G=de(G._payload),We(B,O,G,te)}if(me(G))return Te(B,O,G,te);if(le(G)){if(de=le(G),typeof de!="function")throw Error(o(150));return G=de.call(G),be(B,O,G,te)}if(typeof G.then=="function")return We(B,O,Ss(G),te);if(G.$$typeof===R)return We(B,O,cs(B,G),te);Ts(B,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,O!==null&&O.tag===6?(r(B,O.sibling),te=u(O,G),te.return=B,B=te):(r(B,O),te=Bu(G,B.mode,te),te.return=B,B=te),b(B)):r(B,O)}return function(B,O,G,te){try{qo=0;var de=We(B,O,G,te);return yl=null,de}catch(ge){if(ge===Do||ge===ds)throw ge;var je=en(29,ge,null,B.mode);return je.lanes=te,je.return=B,je}finally{}}}var bl=Og(!0),qg=Og(!1),gn=F(null),qn=null;function Ra(e){var n=e.alternate;Z(St,St.current&1),Z(gn,e),qn===null&&(n===null||ml.current!==null||n.memoizedState!==null)&&(qn=e)}function Lg(e){if(e.tag===22){if(Z(St,St.current),Z(gn,e),qn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(qn=e)}}else Oa()}function Oa(){Z(St,St.current),Z(gn,gn.current)}function oa(e){j(gn),qn===e&&(qn=null),j(St)}var St=F(0);function _s(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||uf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function bd(e,n,r,i){n=e.memoizedState,r=r(i,n),r=r==null?n:v({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xd={enqueueSetState:function(e,n,r){e=e._reactInternals;var i=rn(),u=za(i);u.payload=n,r!=null&&(u.callback=r),n=Ua(e,u,i),n!==null&&(ln(n,e,i),No(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var i=rn(),u=za(i);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ua(e,u,i),n!==null&&(ln(n,e,i),No(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=rn(),i=za(r);i.tag=2,n!=null&&(i.callback=n),n=Ua(e,i,r),n!==null&&(ln(n,e,r),No(n,e,r))}};function Zg(e,n,r,i,u,p,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,p,b):n.prototype&&n.prototype.isPureReactComponent?!bo(r,i)||!bo(u,p):!0}function Bg(e,n,r,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,i),n.state!==e&&xd.enqueueReplaceState(n,n.state,null)}function Tr(e,n){var r=n;if("ref"in n){r={};for(var i in n)i!=="ref"&&(r[i]=n[i])}if(e=e.defaultProps){r===n&&(r=v({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var ks=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Hg(e){ks(e)}function $g(e){console.error(e)}function Fg(e){ks(e)}function Ms(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function Gg(e,n,r){try{var i=e.onCaughtError;i(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sd(e,n,r){return r=za(r),r.tag=3,r.payload={element:null},r.callback=function(){Ms(e,n)},r}function Pg(e){return e=za(e),e.tag=3,e}function Ig(e,n,r,i){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;e.payload=function(){return u(p)},e.callback=function(){Gg(n,r,i)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Gg(n,r,i),typeof u!="function"&&($a===null?$a=new Set([this]):$a.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})})}function p4(e,n,r,i,u){if(r.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=r.alternate,n!==null&&ko(n,r,u,!0),r=gn.current,r!==null){switch(r.tag){case 13:return qn===null?Id():r.alternate===null&&it===0&&(it=3),r.flags&=-257,r.flags|=65536,r.lanes=u,i===Ku?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([i]):n.add(i),Wd(e,i,u)),!1;case 22:return r.flags|=65536,i===Ku?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([i]):r.add(i)),Wd(e,i,u)),!1}throw Error(o(435,r.tag))}return Wd(e,i,u),Id(),!1}if($e)return n=gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,i!==Gu&&(e=Error(o(422),{cause:i}),_o(fn(e,r)))):(i!==Gu&&(n=Error(o(423),{cause:i}),_o(fn(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,i=fn(i,r),u=Sd(e.stateNode,i,u),ed(e,u),it!==4&&(it=2)),!1;var p=Error(o(520),{cause:i});if(p=fn(p,r),Po===null?Po=[p]:Po.push(p),it!==4&&(it=2),n===null)return!0;i=fn(i,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=Sd(r.stateNode,i,e),ed(r,e),!1;case 1:if(n=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&($a===null||!$a.has(p))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Pg(u),Ig(u,e,r,i),ed(r,u),!1}r=r.return}while(r!==null);return!1}var Yg=Error(o(461)),Et=!1;function zt(e,n,r,i){n.child=e===null?qg(n,null,r,i):bl(n,e.child,r,i)}function Wg(e,n,r,i,u){r=r.render;var p=n.ref;if("ref"in i){var b={};for(var _ in i)_!=="ref"&&(b[_]=i[_])}else b=i;return br(n),i=ld(e,n,r,b,p,u),_=od(),e!==null&&!Et?(id(e,n,u),ia(e,n,u)):($e&&_&&$u(n),n.flags|=1,zt(e,n,i,u),n.child)}function Vg(e,n,r,i,u){if(e===null){var p=r.type;return typeof p=="function"&&!Zu(p)&&p.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=p,Xg(e,n,p,i,u)):(e=ls(r.type,null,i,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!Nd(e,u)){var b=p.memoizedProps;if(r=r.compare,r=r!==null?r:bo,r(b,i)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=ea(p,i),e.ref=n.ref,e.return=n,n.child=e}function Xg(e,n,r,i,u){if(e!==null){var p=e.memoizedProps;if(bo(p,i)&&e.ref===n.ref)if(Et=!1,n.pendingProps=i=p,Nd(e,u))(e.flags&131072)!==0&&(Et=!0);else return n.lanes=e.lanes,ia(e,n,u)}return Td(e,n,r,i,u)}function Kg(e,n,r){var i=n.pendingProps,u=i.children,p=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((n.flags&128)!==0){if(i=p!==null?p.baseLanes|r:r,e!==null){for(u=n.child=e.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;n.childLanes=p&~i}else n.childLanes=0,n.child=null;return Qg(e,n,i,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&us(n,p!==null?p.cachePool:null),p!==null?Xm(n,p):nd(),Lg(n);else return n.lanes=n.childLanes=536870912,Qg(e,n,p!==null?p.baseLanes|r:r,r)}else p!==null?(us(n,p.cachePool),Xm(n,p),Oa(),n.memoizedState=null):(e!==null&&us(n,null),nd(),Oa());return zt(e,n,u,r),n.child}function Qg(e,n,r,i){var u=Xu();return u=u===null?null:{parent:xt._currentValue,pool:u},n.memoizedState={baseLanes:r,cachePool:u},e!==null&&us(n,null),nd(),Lg(n),e!==null&&ko(e,n,i,!0),null}function Es(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function Td(e,n,r,i,u){return br(n),r=ld(e,n,r,i,void 0,u),i=od(),e!==null&&!Et?(id(e,n,u),ia(e,n,u)):($e&&i&&$u(n),n.flags|=1,zt(e,n,r,u),n.child)}function Jg(e,n,r,i,u,p){return br(n),n.updateQueue=null,r=Qm(n,i,r,u),Km(e),i=od(),e!==null&&!Et?(id(e,n,p),ia(e,n,p)):($e&&i&&$u(n),n.flags|=1,zt(e,n,r,p),n.child)}function e0(e,n,r,i,u){if(br(n),n.stateNode===null){var p=ul,b=r.contextType;typeof b=="object"&&b!==null&&(p=Lt(b)),p=new r(i,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=xd,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=i,p.state=n.memoizedState,p.refs={},Qu(n),b=r.contextType,p.context=typeof b=="object"&&b!==null?Lt(b):ul,p.state=n.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(bd(n,r,b,i),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(b=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),b!==p.state&&xd.enqueueReplaceState(p,p.state,null),zo(n,i,p,u),Ao(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){p=n.stateNode;var _=n.memoizedProps,A=Tr(r,_);p.props=A;var P=p.context,Q=r.contextType;b=ul,typeof Q=="object"&&Q!==null&&(b=Lt(Q));var ne=r.getDerivedStateFromProps;Q=typeof ne=="function"||typeof p.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,Q||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_||P!==b)&&Bg(n,p,i,b),Aa=!1;var I=n.memoizedState;p.state=I,zo(n,i,p,u),Ao(),P=n.memoizedState,_||I!==P||Aa?(typeof ne=="function"&&(bd(n,r,ne,i),P=n.memoizedState),(A=Aa||Zg(n,r,A,i,I,P,b))?(Q||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=P),p.props=i,p.state=P,p.context=b,i=A):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{p=n.stateNode,Ju(e,n),b=n.memoizedProps,Q=Tr(r,b),p.props=Q,ne=n.pendingProps,I=p.context,P=r.contextType,A=ul,typeof P=="object"&&P!==null&&(A=Lt(P)),_=r.getDerivedStateFromProps,(P=typeof _=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==ne||I!==A)&&Bg(n,p,i,A),Aa=!1,I=n.memoizedState,p.state=I,zo(n,i,p,u),Ao();var Y=n.memoizedState;b!==ne||I!==Y||Aa||e!==null&&e.dependencies!==null&&ss(e.dependencies)?(typeof _=="function"&&(bd(n,r,_,i),Y=n.memoizedState),(Q=Aa||Zg(n,r,Q,i,I,Y,A)||e!==null&&e.dependencies!==null&&ss(e.dependencies))?(P||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(i,Y,A),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(i,Y,A)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=Y),p.props=i,p.state=Y,p.context=A,i=Q):(typeof p.componentDidUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),i=!1)}return p=i,Es(e,n),i=(n.flags&128)!==0,p||i?(p=n.stateNode,r=i&&typeof r.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&i?(n.child=bl(n,e.child,null,u),n.child=bl(n,null,r,u)):zt(e,n,r,u),n.memoizedState=p.state,e=n.child):e=ia(e,n,u),e}function t0(e,n,r,i){return To(),n.flags|=256,zt(e,n,r,i),n.child}var _d={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kd(e){return{baseLanes:e,cachePool:$m()}}function Md(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=wn),e}function n0(e,n,r){var i=n.pendingProps,u=!1,p=(n.flags&128)!==0,b;if((b=p)||(b=e!==null&&e.memoizedState===null?!1:(St.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if($e){if(u?Ra(n):Oa(),$e){var _=ot,A;if(A=_){e:{for(A=_,_=On;A.nodeType!==8;){if(!_){_=null;break e}if(A=Mn(A.nextSibling),A===null){_=null;break e}}_=A}_!==null?(n.memoizedState={dehydrated:_,treeContext:mr!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},A=en(18,null,null,0),A.stateNode=_,A.return=n,n.child=A,Gt=n,ot=null,A=!0):A=!1}A||vr(n)}if(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return uf(_)?n.lanes=32:n.lanes=536870912,null;oa(n)}return _=i.children,i=i.fallback,u?(Oa(),u=n.mode,_=Ds({mode:"hidden",children:_},u),i=hr(i,u,r,null),_.return=n,i.return=n,_.sibling=i,n.child=_,u=n.child,u.memoizedState=kd(r),u.childLanes=Md(e,b,r),n.memoizedState=_d,i):(Ra(n),Ed(n,_))}if(A=e.memoizedState,A!==null&&(_=A.dehydrated,_!==null)){if(p)n.flags&256?(Ra(n),n.flags&=-257,n=Dd(e,n,r)):n.memoizedState!==null?(Oa(),n.child=e.child,n.flags|=128,n=null):(Oa(),u=i.fallback,_=n.mode,i=Ds({mode:"visible",children:i.children},_),u=hr(u,_,r,null),u.flags|=2,i.return=n,u.return=n,i.sibling=u,n.child=i,bl(n,e.child,null,r),i=n.child,i.memoizedState=kd(r),i.childLanes=Md(e,b,r),n.memoizedState=_d,n=u);else if(Ra(n),uf(_)){if(b=_.nextSibling&&_.nextSibling.dataset,b)var P=b.dgst;b=P,i=Error(o(419)),i.stack="",i.digest=b,_o({value:i,source:null,stack:null}),n=Dd(e,n,r)}else if(Et||ko(e,n,r,!1),b=(r&e.childLanes)!==0,Et||b){if(b=Ke,b!==null&&(i=r&-r,i=(i&42)!==0?1:uu(i),i=(i&(b.suspendedLanes|r))!==0?0:i,i!==0&&i!==A.retryLane))throw A.retryLane=i,cl(e,i),ln(b,e,i),Yg;_.data==="$?"||Id(),n=Dd(e,n,r)}else _.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=A.treeContext,ot=Mn(_.nextSibling),Gt=n,$e=!0,wr=null,On=!1,e!==null&&(hn[mn++]=ta,hn[mn++]=na,hn[mn++]=mr,ta=e.id,na=e.overflow,mr=n),n=Ed(n,i.children),n.flags|=4096);return n}return u?(Oa(),u=i.fallback,_=n.mode,A=e.child,P=A.sibling,i=ea(A,{mode:"hidden",children:i.children}),i.subtreeFlags=A.subtreeFlags&65011712,P!==null?u=ea(P,u):(u=hr(u,_,r,null),u.flags|=2),u.return=n,i.return=n,i.sibling=u,n.child=i,i=u,u=n.child,_=e.child.memoizedState,_===null?_=kd(r):(A=_.cachePool,A!==null?(P=xt._currentValue,A=A.parent!==P?{parent:P,pool:P}:A):A=$m(),_={baseLanes:_.baseLanes|r,cachePool:A}),u.memoizedState=_,u.childLanes=Md(e,b,r),n.memoizedState=_d,i):(Ra(n),r=e.child,e=r.sibling,r=ea(r,{mode:"visible",children:i.children}),r.return=n,r.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=r,n.memoizedState=null,r)}function Ed(e,n){return n=Ds({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ds(e,n){return e=en(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Dd(e,n,r){return bl(n,e.child,null,r),e=Ed(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function a0(e,n,r){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Iu(e.return,n,r)}function Cd(e,n,r,i,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=r,p.tailMode=u)}function r0(e,n,r){var i=n.pendingProps,u=i.revealOrder,p=i.tail;if(zt(e,n,i.children,r),i=St.current,(i&2)!==0)i=i&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a0(e,r,n);else if(e.tag===19)a0(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(Z(St,i),u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&_s(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Cd(n,!1,u,r,p);break;case"backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_s(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Cd(n,!0,r,null,p);break;case"together":Cd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(ko(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,r=ea(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=ea(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Nd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ss(e)))}function h4(e,n,r){switch(n.tag){case 3:he(n,n.stateNode.containerInfo),Na(n,xt,e.memoizedState.cache),To();break;case 27:case 5:He(n);break;case 4:he(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Ra(n),n.flags|=128,null):(r&n.child.childLanes)!==0?n0(e,n,r):(Ra(n),e=ia(e,n,r),e!==null?e.sibling:null);Ra(n);break;case 19:var u=(e.flags&128)!==0;if(i=(r&n.childLanes)!==0,i||(ko(e,n,r,!1),i=(r&n.childLanes)!==0),u){if(i)return r0(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Z(St,St.current),i)break;return null;case 22:case 23:return n.lanes=0,Kg(e,n,r);case 24:Na(n,xt,e.memoizedState.cache)}return ia(e,n,r)}function l0(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)Et=!0;else{if(!Nd(e,r)&&(n.flags&128)===0)return Et=!1,h4(e,n,r);Et=(e.flags&131072)!==0}else Et=!1,$e&&(n.flags&1048576)!==0&&Rm(n,is,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var i=n.elementType,u=i._init;if(i=u(i._payload),n.type=i,typeof i=="function")Zu(i)?(e=Tr(i,e),n.tag=1,n=e0(null,n,i,e,r)):(n.tag=0,n=Td(null,n,i,e,r));else{if(i!=null){if(u=i.$$typeof,u===H){n.tag=11,n=Wg(null,n,i,e,r);break e}else if(u===ee){n.tag=14,n=Vg(null,n,i,e,r);break e}}throw n=xe(i)||i,Error(o(306,n,""))}}return n;case 0:return Td(e,n,n.type,n.pendingProps,r);case 1:return i=n.type,u=Tr(i,n.pendingProps),e0(e,n,i,u,r);case 3:e:{if(he(n,n.stateNode.containerInfo),e===null)throw Error(o(387));i=n.pendingProps;var p=n.memoizedState;u=p.element,Ju(e,n),zo(n,i,null,r);var b=n.memoizedState;if(i=b.cache,Na(n,xt,i),i!==p.cache&&Yu(n,[xt],r,!0),Ao(),i=b.element,p.isDehydrated)if(p={element:i,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=t0(e,n,i,r);break e}else if(i!==u){u=fn(Error(o(424)),n),_o(u),n=t0(e,n,i,r);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ot=Mn(e.firstChild),Gt=n,$e=!0,wr=null,On=!0,r=qg(n,null,i,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(To(),i===u){n=ia(e,n,r);break e}zt(e,n,i,r)}n=n.child}return n;case 26:return Es(e,n),e===null?(r=c1(n.type,null,n.pendingProps,null))?n.memoizedState=r:$e||(r=n.type,e=n.pendingProps,i=$s(ae.current).createElement(r),i[qt]=n,i[It]=e,jt(i,r,e),Mt(i),n.stateNode=i):n.memoizedState=c1(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&$e&&(i=n.stateNode=o1(n.type,n.pendingProps,ae.current),Gt=n,On=!0,u=ot,Pa(n.type)?(df=u,ot=Mn(i.firstChild)):ot=u),zt(e,n,n.pendingProps.children,r),Es(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&$e&&((u=i=ot)&&(i=$4(i,n.type,n.pendingProps,On),i!==null?(n.stateNode=i,Gt=n,ot=Mn(i.firstChild),On=!1,u=!0):u=!1),u||vr(n)),He(n),u=n.type,p=n.pendingProps,b=e!==null?e.memoizedProps:null,i=p.children,of(u,p)?i=null:b!==null&&of(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=ld(e,n,o4,null,null,r),ei._currentValue=u),Es(e,n),zt(e,n,i,r),n.child;case 6:return e===null&&$e&&((e=r=ot)&&(r=F4(r,n.pendingProps,On),r!==null?(n.stateNode=r,Gt=n,ot=null,e=!0):e=!1),e||vr(n)),null;case 13:return n0(e,n,r);case 4:return he(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=bl(n,null,i,r):zt(e,n,i,r),n.child;case 11:return Wg(e,n,n.type,n.pendingProps,r);case 7:return zt(e,n,n.pendingProps,r),n.child;case 8:return zt(e,n,n.pendingProps.children,r),n.child;case 12:return zt(e,n,n.pendingProps.children,r),n.child;case 10:return i=n.pendingProps,Na(n,n.type,i.value),zt(e,n,i.children,r),n.child;case 9:return u=n.type._context,i=n.pendingProps.children,br(n),u=Lt(u),i=i(u),n.flags|=1,zt(e,n,i,r),n.child;case 14:return Vg(e,n,n.type,n.pendingProps,r);case 15:return Xg(e,n,n.type,n.pendingProps,r);case 19:return r0(e,n,r);case 31:return i=n.pendingProps,r=n.mode,i={mode:i.mode,children:i.children},e===null?(r=Ds(i,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=ea(e.child,i),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Kg(e,n,r);case 24:return br(n),i=Lt(xt),e===null?(u=Xu(),u===null&&(u=Ke,p=Wu(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=r),u=p),n.memoizedState={parent:i,cache:u},Qu(n),Na(n,xt,u)):((e.lanes&r)!==0&&(Ju(e,n),zo(n,null,null,r),Ao()),u=e.memoizedState,p=n.memoizedState,u.parent!==i?(u={parent:i,cache:i},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,xt,i)):(i=p.cache,Na(n,xt,i),i!==u.cache&&Yu(n,[xt],r,!0))),zt(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function sa(e){e.flags|=4}function o0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h1(n)){if(n=gn.current,n!==null&&((Le&4194048)===Le?qn!==null:(Le&62914560)!==Le&&(Le&536870912)===0||n!==qn))throw Co=Ku,Fm;e.flags|=8192}}function Cs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lh():536870912,e.lanes|=n,_l|=n)}function Zo(e,n){if(!$e)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function rt(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=r,n}function m4(e,n,r){var i=n.pendingProps;switch(Fu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(n),null;case 1:return rt(n),null;case 3:return r=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ra(xt),ve(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(n)?sa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lm())),rt(n),null;case 26:return r=n.memoizedState,e===null?(sa(n),r!==null?(rt(n),o0(n,r)):(rt(n),n.flags&=-16777217)):r?r!==e.memoizedState?(sa(n),rt(n),o0(n,r)):(rt(n),n.flags&=-16777217):(e.memoizedProps!==i&&sa(n),rt(n),n.flags&=-16777217),null;case 27:kt(n),r=ae.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==i&&sa(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return rt(n),null}e=W.current,So(n)?Om(n):(e=o1(u,i,r),n.stateNode=e,sa(n))}return rt(n),null;case 5:if(kt(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&sa(n);else{if(!i){if(n.stateNode===null)throw Error(o(166));return rt(n),null}if(e=W.current,So(n))Om(n);else{switch(u=$s(ae.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?u.createElement(r,{is:i.is}):u.createElement(r)}}e[qt]=n,e[It]=i;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(jt(e,r,i),r){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&sa(n)}}return rt(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&sa(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(o(166));if(e=ae.current,So(n)){if(e=n.stateNode,r=n.memoizedProps,i=null,u=Gt,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}e[qt]=n,e=!!(e.nodeValue===r||i!==null&&i.suppressHydrationWarning===!0||J0(e.nodeValue,r)),e||vr(n)}else e=$s(e).createTextNode(i),e[qt]=n,n.stateNode=e}return rt(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=So(n),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[qt]=n}else To(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rt(n),u=!1}else u=Lm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oa(n),n):(oa(n),null)}if(oa(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=i!==null,e=e!==null&&e.memoizedState!==null,r){i=n.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool);var p=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(p=i.memoizedState.cachePool.pool),p!==u&&(i.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Cs(n,n.updateQueue),rt(n),null;case 4:return ve(),e===null&&tf(n.stateNode.containerInfo),rt(n),null;case 10:return ra(n.type),rt(n),null;case 19:if(j(St),u=n.memoizedState,u===null)return rt(n),null;if(i=(n.flags&128)!==0,p=u.rendering,p===null)if(i)Zo(u,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=_s(e),p!==null){for(n.flags|=128,Zo(u,!1),e=p.updateQueue,n.updateQueue=e,Cs(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)jm(r,e),r=r.sibling;return Z(St,St.current&1|2),n.child}e=e.sibling}u.tail!==null&&$t()>zs&&(n.flags|=128,i=!0,Zo(u,!1),n.lanes=4194304)}else{if(!i)if(e=_s(p),e!==null){if(n.flags|=128,i=!0,e=e.updateQueue,n.updateQueue=e,Cs(n,e),Zo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!$e)return rt(n),null}else 2*$t()-u.renderingStartTime>zs&&r!==536870912&&(n.flags|=128,i=!0,Zo(u,!1),n.lanes=4194304);u.isBackwards?(p.sibling=n.child,n.child=p):(e=u.last,e!==null?e.sibling=p:n.child=p,u.last=p)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=$t(),n.sibling=null,e=St.current,Z(St,i?e&1|2:e&1),n):(rt(n),null);case 22:case 23:return oa(n),ad(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(r&536870912)!==0&&(n.flags&128)===0&&(rt(n),n.subtreeFlags&6&&(n.flags|=8192)):rt(n),r=n.updateQueue,r!==null&&Cs(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==r&&(n.flags|=2048),e!==null&&j(xr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ra(xt),rt(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function g4(e,n){switch(Fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(xt),ve(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(oa(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));To()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(St),null;case 4:return ve(),null;case 10:return ra(n.type),null;case 22:case 23:return oa(n),ad(),e!==null&&j(xr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(xt),null;case 25:return null;default:return null}}function i0(e,n){switch(Fu(n),n.tag){case 3:ra(xt),ve();break;case 26:case 27:case 5:kt(n);break;case 4:ve();break;case 13:oa(n);break;case 19:j(St);break;case 10:ra(n.type);break;case 22:case 23:oa(n),ad(),e!==null&&j(xr);break;case 24:ra(xt)}}function Bo(e,n){try{var r=n.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var u=i.next;r=u;do{if((r.tag&e)===e){i=void 0;var p=r.create,b=r.inst;i=p(),b.destroy=i}r=r.next}while(r!==u)}}catch(_){Ve(n,n.return,_)}}function qa(e,n,r){try{var i=n.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var p=u.next;i=p;do{if((i.tag&e)===e){var b=i.inst,_=b.destroy;if(_!==void 0){b.destroy=void 0,u=n;var A=r,P=_;try{P()}catch(Q){Ve(u,A,Q)}}}i=i.next}while(i!==p)}}catch(Q){Ve(n,n.return,Q)}}function s0(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Vm(n,r)}catch(i){Ve(e,e.return,i)}}}function c0(e,n,r){r.props=Tr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(i){Ve(e,n,i)}}function Ho(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof r=="function"?e.refCleanup=r(i):r.current=i}}catch(u){Ve(e,n,u)}}function Ln(e,n){var r=e.ref,i=e.refCleanup;if(r!==null)if(typeof i=="function")try{i()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ve(e,n,u)}else r.current=null}function u0(e){var n=e.type,r=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&i.focus();break e;case"img":r.src?i.src=r.src:r.srcSet&&(i.srcset=r.srcSet)}}catch(u){Ve(e,e.return,u)}}function Ad(e,n,r){try{var i=e.stateNode;q4(i,e.type,r,n),i[It]=n}catch(u){Ve(e,e.return,u)}}function d0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ud(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Hs));else if(i!==4&&(i===27&&Pa(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Ud(e,n,r),e=e.sibling;e!==null;)Ud(e,n,r),e=e.sibling}function Ns(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(i!==4&&(i===27&&Pa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ns(e,n,r),e=e.sibling;e!==null;)Ns(e,n,r),e=e.sibling}function f0(e){var n=e.stateNode,r=e.memoizedProps;try{for(var i=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);jt(n,i,r),n[qt]=e,n[It]=r}catch(p){Ve(e,e.return,p)}}var ca=!1,ut=!1,jd=!1,p0=typeof WeakSet=="function"?WeakSet:Set,Dt=null;function w4(e,n){if(e=e.containerInfo,rf=Ws,e=_m(e),zu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var u=i.anchorOffset,p=i.focusNode;i=i.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break e}var b=0,_=-1,A=-1,P=0,Q=0,ne=e,I=null;t:for(;;){for(var Y;ne!==r||u!==0&&ne.nodeType!==3||(_=b+u),ne!==p||i!==0&&ne.nodeType!==3||(A=b+i),ne.nodeType===3&&(b+=ne.nodeValue.length),(Y=ne.firstChild)!==null;)I=ne,ne=Y;for(;;){if(ne===e)break t;if(I===r&&++P===u&&(_=b),I===p&&++Q===i&&(A=b),(Y=ne.nextSibling)!==null)break;ne=I,I=ne.parentNode}ne=Y}r=_===-1||A===-1?null:{start:_,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(lf={focusedElem:e,selectionRange:r},Ws=!1,Dt=n;Dt!==null;)if(n=Dt,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Dt=e;else for(;Dt!==null;){switch(n=Dt,p=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,r=n,u=p.memoizedProps,p=p.memoizedState,i=r.stateNode;try{var Te=Tr(r.type,u,r.elementType===r.type);e=i.getSnapshotBeforeUpdate(Te,p),i.__reactInternalSnapshotBeforeUpdate=e}catch(be){Ve(r,r.return,be)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)cf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,Dt=e;break}Dt=n.return}}function h0(e,n,r){var i=r.flags;switch(r.tag){case 0:case 11:case 15:La(e,r),i&4&&Bo(5,r);break;case 1:if(La(e,r),i&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(b){Ve(r,r.return,b)}else{var u=Tr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ve(r,r.return,b)}}i&64&&s0(r),i&512&&Ho(r,r.return);break;case 3:if(La(e,r),i&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Vm(e,n)}catch(b){Ve(r,r.return,b)}}break;case 27:n===null&&i&4&&f0(r);case 26:case 5:La(e,r),n===null&&i&4&&u0(r),i&512&&Ho(r,r.return);break;case 12:La(e,r);break;case 13:La(e,r),i&4&&w0(e,r),i&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=M4.bind(null,r),G4(e,r))));break;case 22:if(i=r.memoizedState!==null||ca,!i){n=n!==null&&n.memoizedState!==null||ut,u=ca;var p=ut;ca=i,(ut=n)&&!p?Za(e,r,(r.subtreeFlags&8772)!==0):La(e,r),ca=u,ut=p}break;case 30:break;default:La(e,r)}}function m0(e){var n=e.alternate;n!==null&&(e.alternate=null,m0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&pu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tt=null,Vt=!1;function ua(e,n,r){for(r=r.child;r!==null;)g0(e,n,r),r=r.sibling}function g0(e,n,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(cn,r)}catch{}switch(r.tag){case 26:ut||Ln(r,n),ua(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ut||Ln(r,n);var i=tt,u=Vt;Pa(r.type)&&(tt=r.stateNode,Vt=!1),ua(e,n,r),Xo(r.stateNode),tt=i,Vt=u;break;case 5:ut||Ln(r,n);case 6:if(i=tt,u=Vt,tt=null,ua(e,n,r),tt=i,Vt=u,tt!==null)if(Vt)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(r.stateNode)}catch(p){Ve(r,n,p)}else try{tt.removeChild(r.stateNode)}catch(p){Ve(r,n,p)}break;case 18:tt!==null&&(Vt?(e=tt,r1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ri(e)):r1(tt,r.stateNode));break;case 4:i=tt,u=Vt,tt=r.stateNode.containerInfo,Vt=!0,ua(e,n,r),tt=i,Vt=u;break;case 0:case 11:case 14:case 15:ut||qa(2,r,n),ut||qa(4,r,n),ua(e,n,r);break;case 1:ut||(Ln(r,n),i=r.stateNode,typeof i.componentWillUnmount=="function"&&c0(r,n,i)),ua(e,n,r);break;case 21:ua(e,n,r);break;case 22:ut=(i=ut)||r.memoizedState!==null,ua(e,n,r),ut=i;break;default:ua(e,n,r)}}function w0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ri(e)}catch(r){Ve(n,n.return,r)}}function v4(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new p0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new p0),n;default:throw Error(o(435,e.tag))}}function Rd(e,n){var r=v4(e);n.forEach(function(i){var u=E4.bind(null,e,i);r.has(i)||(r.add(i),i.then(u,u))})}function tn(e,n){var r=n.deletions;if(r!==null)for(var i=0;i<r.length;i++){var u=r[i],p=e,b=n,_=b;e:for(;_!==null;){switch(_.tag){case 27:if(Pa(_.type)){tt=_.stateNode,Vt=!1;break e}break;case 5:tt=_.stateNode,Vt=!1;break e;case 3:case 4:tt=_.stateNode.containerInfo,Vt=!0;break e}_=_.return}if(tt===null)throw Error(o(160));g0(p,b,u),tt=null,Vt=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)v0(n,e),n=n.sibling}var kn=null;function v0(e,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tn(n,e),nn(e),i&4&&(qa(3,e,e.return),Bo(3,e),qa(5,e,e.return));break;case 1:tn(n,e),nn(e),i&512&&(ut||r===null||Ln(r,r.return)),i&64&&ca&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?i:r.concat(i))));break;case 26:var u=kn;if(tn(n,e),nn(e),i&512&&(ut||r===null||Ln(r,r.return)),i&4){var p=r!==null?r.memoizedState:null;if(i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null){e:{i=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(i){case"title":p=u.getElementsByTagName("title")[0],(!p||p[uo]||p[qt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(i),u.head.insertBefore(p,u.querySelector("head > title"))),jt(p,i,r),p[qt]=e,Mt(p),i=p;break e;case"link":var b=f1("link","href",u).get(i+(r.href||""));if(b){for(var _=0;_<b.length;_++)if(p=b[_],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(_,1);break t}}p=u.createElement(i),jt(p,i,r),u.head.appendChild(p);break;case"meta":if(b=f1("meta","content",u).get(i+(r.content||""))){for(_=0;_<b.length;_++)if(p=b[_],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(_,1);break t}}p=u.createElement(i),jt(p,i,r),u.head.appendChild(p);break;default:throw Error(o(468,i))}p[qt]=e,Mt(p),i=p}e.stateNode=i}else p1(u,e.type,e.stateNode);else e.stateNode=d1(u,i,e.memoizedProps);else p!==i?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,i===null?p1(u,e.type,e.stateNode):d1(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ad(e,e.memoizedProps,r.memoizedProps)}break;case 27:tn(n,e),nn(e),i&512&&(ut||r===null||Ln(r,r.return)),r!==null&&i&4&&Ad(e,e.memoizedProps,r.memoizedProps);break;case 5:if(tn(n,e),nn(e),i&512&&(ut||r===null||Ln(r,r.return)),e.flags&32){u=e.stateNode;try{nl(u,"")}catch(Y){Ve(e,e.return,Y)}}i&4&&e.stateNode!=null&&(u=e.memoizedProps,Ad(e,u,r!==null?r.memoizedProps:u)),i&1024&&(jd=!0);break;case 6:if(tn(n,e),nn(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,r=e.stateNode;try{r.nodeValue=i}catch(Y){Ve(e,e.return,Y)}}break;case 3:if(Ps=null,u=kn,kn=Fs(n.containerInfo),tn(n,e),kn=u,nn(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ri(n.containerInfo)}catch(Y){Ve(e,e.return,Y)}jd&&(jd=!1,y0(e));break;case 4:i=kn,kn=Fs(e.stateNode.containerInfo),tn(n,e),nn(e),kn=i;break;case 12:tn(n,e),nn(e);break;case 13:tn(n,e),nn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hd=$t()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rd(e,i)));break;case 22:u=e.memoizedState!==null;var A=r!==null&&r.memoizedState!==null,P=ca,Q=ut;if(ca=P||u,ut=Q||A,tn(n,e),ut=Q,ca=P,nn(e),i&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||A||ca||ut||_r(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){A=r=n;try{if(p=A.stateNode,u)b=p.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{_=A.stateNode;var ne=A.memoizedProps.style,I=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;_.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(Y){Ve(A,A.return,Y)}}}else if(n.tag===6){if(r===null){A=n;try{A.stateNode.nodeValue=u?"":A.memoizedProps}catch(Y){Ve(A,A.return,Y)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(r=i.retryQueue,r!==null&&(i.retryQueue=null,Rd(e,r))));break;case 19:tn(n,e),nn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rd(e,i)));break;case 30:break;case 21:break;default:tn(n,e),nn(e)}}function nn(e){var n=e.flags;if(n&2){try{for(var r,i=e.return;i!==null;){if(d0(i)){r=i;break}i=i.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var u=r.stateNode,p=zd(e);Ns(e,p,u);break;case 5:var b=r.stateNode;r.flags&32&&(nl(b,""),r.flags&=-33);var _=zd(e);Ns(e,_,b);break;case 3:case 4:var A=r.stateNode.containerInfo,P=zd(e);Ud(e,P,A);break;default:throw Error(o(161))}}catch(Q){Ve(e,e.return,Q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function y0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;y0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function La(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h0(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),_r(n);break;case 1:Ln(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&c0(n,n.return,r),_r(n);break;case 27:Xo(n.stateNode);case 26:case 5:Ln(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function Za(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,u=e,p=n,b=p.flags;switch(p.tag){case 0:case 11:case 15:Za(u,p,r),Bo(4,p);break;case 1:if(Za(u,p,r),i=p,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(P){Ve(i,i.return,P)}if(i=p,u=i.updateQueue,u!==null){var _=i.stateNode;try{var A=u.shared.hiddenCallbacks;if(A!==null)for(u.shared.hiddenCallbacks=null,u=0;u<A.length;u++)Wm(A[u],_)}catch(P){Ve(i,i.return,P)}}r&&b&64&&s0(p),Ho(p,p.return);break;case 27:f0(p);case 26:case 5:Za(u,p,r),r&&i===null&&b&4&&u0(p),Ho(p,p.return);break;case 12:Za(u,p,r);break;case 13:Za(u,p,r),r&&b&4&&w0(u,p);break;case 22:p.memoizedState===null&&Za(u,p,r),Ho(p,p.return);break;case 30:break;default:Za(u,p,r)}n=n.sibling}}function Od(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Mo(r))}function qd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Mo(e))}function Zn(e,n,r,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)b0(e,n,r,i),n=n.sibling}function b0(e,n,r,i){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Zn(e,n,r,i),u&2048&&Bo(9,n);break;case 1:Zn(e,n,r,i);break;case 3:Zn(e,n,r,i),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Mo(e)));break;case 12:if(u&2048){Zn(e,n,r,i),e=n.stateNode;try{var p=n.memoizedProps,b=p.id,_=p.onPostCommit;typeof _=="function"&&_(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Ve(n,n.return,A)}}else Zn(e,n,r,i);break;case 13:Zn(e,n,r,i);break;case 23:break;case 22:p=n.stateNode,b=n.alternate,n.memoizedState!==null?p._visibility&2?Zn(e,n,r,i):$o(e,n):p._visibility&2?Zn(e,n,r,i):(p._visibility|=2,xl(e,n,r,i,(n.subtreeFlags&10256)!==0)),u&2048&&Od(b,n);break;case 24:Zn(e,n,r,i),u&2048&&qd(n.alternate,n);break;default:Zn(e,n,r,i)}}function xl(e,n,r,i,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var p=e,b=n,_=r,A=i,P=b.flags;switch(b.tag){case 0:case 11:case 15:xl(p,b,_,A,u),Bo(8,b);break;case 23:break;case 22:var Q=b.stateNode;b.memoizedState!==null?Q._visibility&2?xl(p,b,_,A,u):$o(p,b):(Q._visibility|=2,xl(p,b,_,A,u)),u&&P&2048&&Od(b.alternate,b);break;case 24:xl(p,b,_,A,u),u&&P&2048&&qd(b.alternate,b);break;default:xl(p,b,_,A,u)}n=n.sibling}}function $o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,i=n,u=i.flags;switch(i.tag){case 22:$o(r,i),u&2048&&Od(i.alternate,i);break;case 24:$o(r,i),u&2048&&qd(i.alternate,i);break;default:$o(r,i)}n=n.sibling}}var Fo=8192;function Sl(e){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)x0(e),e=e.sibling}function x0(e){switch(e.tag){case 26:Sl(e),e.flags&Fo&&e.memoizedState!==null&&a3(kn,e.memoizedState,e.memoizedProps);break;case 5:Sl(e);break;case 3:case 4:var n=kn;kn=Fs(e.stateNode.containerInfo),Sl(e),kn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fo,Fo=16777216,Sl(e),Fo=n):Sl(e));break;default:Sl(e)}}function S0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];Dt=i,_0(i,e)}S0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T0(e),e=e.sibling}function T0(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,As(e)):Go(e);break;default:Go(e)}}function As(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];Dt=i,_0(i,e)}S0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),As(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,As(n));break;default:As(n)}e=e.sibling}}function _0(e,n){for(;Dt!==null;){var r=Dt;switch(r.tag){case 0:case 11:case 15:qa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var i=r.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Mo(r.memoizedState.cache)}if(i=r.child,i!==null)i.return=r,Dt=i;else e:for(r=e;Dt!==null;){i=Dt;var u=i.sibling,p=i.return;if(m0(i),i===r){Dt=null;break e}if(u!==null){u.return=p,Dt=u;break e}Dt=p}}}var y4={getCacheForType:function(e){var n=Lt(xt),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},b4=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Ke=null,Re=null,Le=0,Pe=0,an=null,Ba=!1,Tl=!1,Ld=!1,da=0,it=0,Ha=0,kr=0,Zd=0,wn=0,_l=0,Po=null,Xt=null,Bd=!1,Hd=0,zs=1/0,Us=null,$a=null,Ut=0,Fa=null,kl=null,Ml=0,$d=0,Fd=null,k0=null,Io=0,Gd=null;function rn(){if((Ge&2)!==0&&Le!==0)return Le&-Le;if(k.T!==null){var e=pl;return e!==0?e:Kd()}return Hh()}function M0(){wn===0&&(wn=(Le&536870912)===0||$e?Gi():536870912);var e=gn.current;return e!==null&&(e.flags|=32),wn}function ln(e,n,r){(e===Ke&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(El(e,0),Ga(e,Le,wn,!1)),co(e,r),((Ge&2)===0||e!==Ke)&&(e===Ke&&((Ge&2)===0&&(kr|=r),it===4&&Ga(e,Le,wn,!1)),Bn(e))}function E0(e,n,r){if((Ge&6)!==0)throw Error(o(327));var i=!r&&(n&124)===0&&(n&e.expiredLanes)===0||cr(e,n),u=i?T4(e,n):Yd(e,n,!0),p=i;do{if(u===0){Tl&&!i&&Ga(e,n,0,!1);break}else{if(r=e.current.alternate,p&&!x4(r)){u=Yd(e,n,!1),p=!1;continue}if(u===2){if(p=n,e.errorRecoveryDisabledLanes&p)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var _=e;u=Po;var A=_.current.memoizedState.isDehydrated;if(A&&(El(_,b).flags|=256),b=Yd(_,b,!1),b!==2){if(Ld&&!A){_.errorRecoveryDisabledLanes|=p,kr|=p,u=4;break e}p=Xt,Xt=u,p!==null&&(Xt===null?Xt=p:Xt.push.apply(Xt,p))}u=b}if(p=!1,u!==2)continue}}if(u===1){El(e,0),Ga(e,n,0,!0);break}e:{switch(i=e,p=u,p){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ga(i,n,wn,!Ba);break e;case 2:Xt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(u=Hd+300-$t(),10<u)){if(Ga(i,n,wn,!Ba),sr(i,0,!0)!==0)break e;i.timeoutHandle=n1(D0.bind(null,i,r,Xt,Us,Bd,n,wn,kr,_l,Ba,p,2,-0,0),u);break e}D0(i,r,Xt,Us,Bd,n,wn,kr,_l,Ba,p,0,-0,0)}}break}while(!0);Bn(e)}function D0(e,n,r,i,u,p,b,_,A,P,Q,ne,I,Y){if(e.timeoutHandle=-1,ne=n.subtreeFlags,(ne&8192||(ne&16785408)===16785408)&&(Jo={stylesheets:null,count:0,unsuspend:n3},x0(n),ne=r3(),ne!==null)){e.cancelPendingCommit=ne(R0.bind(null,e,n,p,r,i,u,b,_,A,Q,1,I,Y)),Ga(e,p,b,!P);return}R0(e,n,p,r,i,u,b,_,A)}function x4(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var i=0;i<r.length;i++){var u=r[i],p=u.getSnapshot;u=u.value;try{if(!Jt(p(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,r,i){n&=~Zd,n&=~kr,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var u=n;0<u;){var p=31-gt(u),b=1<<p;i[p]=-1,u&=~b}r!==0&&Zh(e,r,n)}function js(){return(Ge&6)===0?(Yo(0),!1):!0}function Pd(){if(Re!==null){if(Pe===0)var e=Re.return;else e=Re,aa=yr=null,sd(e),yl=null,qo=0,e=Re;for(;e!==null;)i0(e.alternate,e),e=e.return;Re=null}}function El(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Z4(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Pd(),Ke=e,Re=r=ea(e.current,null),Le=n,Pe=0,an=null,Ba=!1,Tl=cr(e,n),Ld=!1,_l=wn=Zd=kr=Ha=it=0,Xt=Po=null,Bd=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var u=31-gt(i),p=1<<u;n|=e[u],i&=~p}return da=n,ns(),r}function C0(e,n){Ae=null,k.H=xs,n===Do||n===ds?(n=Im(),Pe=3):n===Fm?(n=Im(),Pe=4):Pe=n===Yg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,an=n,Re===null&&(it=1,Ms(e,fn(n,e.current)))}function N0(){var e=k.H;return k.H=xs,e===null?xs:e}function A0(){var e=k.A;return k.A=y4,e}function Id(){it=4,Ba||(Le&4194048)!==Le&&gn.current!==null||(Tl=!0),(Ha&134217727)===0&&(kr&134217727)===0||Ke===null||Ga(Ke,Le,wn,!1)}function Yd(e,n,r){var i=Ge;Ge|=2;var u=N0(),p=A0();(Ke!==e||Le!==n)&&(Us=null,El(e,n)),n=!1;var b=it;e:do try{if(Pe!==0&&Re!==null){var _=Re,A=an;switch(Pe){case 8:Pd(),b=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(n=!0);var P=Pe;if(Pe=0,an=null,Dl(e,_,A,P),r&&Tl){b=0;break e}break;default:P=Pe,Pe=0,an=null,Dl(e,_,A,P)}}S4(),b=it;break}catch(Q){C0(e,Q)}while(!0);return n&&e.shellSuspendCounter++,aa=yr=null,Ge=i,k.H=u,k.A=p,Re===null&&(Ke=null,Le=0,ns()),b}function S4(){for(;Re!==null;)z0(Re)}function T4(e,n){var r=Ge;Ge|=2;var i=N0(),u=A0();Ke!==e||Le!==n?(Us=null,zs=$t()+500,El(e,n)):Tl=cr(e,n);e:do try{if(Pe!==0&&Re!==null){n=Re;var p=an;t:switch(Pe){case 1:Pe=0,an=null,Dl(e,n,p,1);break;case 2:case 9:if(Gm(p)){Pe=0,an=null,U0(n);break}n=function(){Pe!==2&&Pe!==9||Ke!==e||(Pe=7),Bn(e)},p.then(n,n);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:Gm(p)?(Pe=0,an=null,U0(n)):(Pe=0,an=null,Dl(e,n,p,7));break;case 5:var b=null;switch(Re.tag){case 26:b=Re.memoizedState;case 5:case 27:var _=Re;if(!b||h1(b)){Pe=0,an=null;var A=_.sibling;if(A!==null)Re=A;else{var P=_.return;P!==null?(Re=P,Rs(P)):Re=null}break t}}Pe=0,an=null,Dl(e,n,p,5);break;case 6:Pe=0,an=null,Dl(e,n,p,6);break;case 8:Pd(),it=6;break e;default:throw Error(o(462))}}_4();break}catch(Q){C0(e,Q)}while(!0);return aa=yr=null,k.H=i,k.A=u,Ge=r,Re!==null?0:(Ke=null,Le=0,ns(),it)}function _4(){for(;Re!==null&&!Yr();)z0(Re)}function z0(e){var n=l0(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?Rs(e):Re=n}function U0(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Jg(r,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=Jg(r,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:sd(n);default:i0(r,n),n=Re=jm(n,da),n=l0(r,n,da)}e.memoizedProps=e.pendingProps,n===null?Rs(e):Re=n}function Dl(e,n,r,i){aa=yr=null,sd(n),yl=null,qo=0;var u=n.return;try{if(p4(e,u,n,r,Le)){it=1,Ms(e,fn(r,e.current)),Re=null;return}}catch(p){if(u!==null)throw Re=u,p;it=1,Ms(e,fn(r,e.current)),Re=null;return}n.flags&32768?($e||i===1?e=!0:Tl||(Le&536870912)!==0?e=!1:(Ba=e=!0,(i===2||i===9||i===3||i===6)&&(i=gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),j0(n,e)):Rs(n)}function Rs(e){var n=e;do{if((n.flags&32768)!==0){j0(n,Ba);return}e=n.return;var r=m4(n.alternate,n,da);if(r!==null){Re=r;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);it===0&&(it=5)}function j0(e,n){do{var r=g4(e.alternate,e);if(r!==null){r.flags&=32767,Re=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=r}while(e!==null);it=6,Re=null}function R0(e,n,r,i,u,p,b,_,A){e.cancelPendingCommit=null;do Os();while(Ut!==0);if((Ge&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(p=n.lanes|n.childLanes,p|=qu,nb(e,r,p,b,_,A),e===Ke&&(Re=Ke=null,Le=0),kl=n,Fa=e,Ml=r,$d=p,Fd=u,k0=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,D4(Sn,function(){return B0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=k.T,k.T=null,u=z.p,z.p=2,b=Ge,Ge|=4;try{w4(e,n,r)}finally{Ge=b,z.p=u,k.T=i}}Ut=1,O0(),q0(),L0()}}function O0(){if(Ut===1){Ut=0;var e=Fa,n=kl,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=k.T,k.T=null;var i=z.p;z.p=2;var u=Ge;Ge|=4;try{v0(n,e);var p=lf,b=_m(e.containerInfo),_=p.focusedElem,A=p.selectionRange;if(b!==_&&_&&_.ownerDocument&&Tm(_.ownerDocument.documentElement,_)){if(A!==null&&zu(_)){var P=A.start,Q=A.end;if(Q===void 0&&(Q=P),"selectionStart"in _)_.selectionStart=P,_.selectionEnd=Math.min(Q,_.value.length);else{var ne=_.ownerDocument||document,I=ne&&ne.defaultView||window;if(I.getSelection){var Y=I.getSelection(),Te=_.textContent.length,be=Math.min(A.start,Te),We=A.end===void 0?be:Math.min(A.end,Te);!Y.extend&&be>We&&(b=We,We=be,be=b);var B=Sm(_,be),O=Sm(_,We);if(B&&O&&(Y.rangeCount!==1||Y.anchorNode!==B.node||Y.anchorOffset!==B.offset||Y.focusNode!==O.node||Y.focusOffset!==O.offset)){var G=ne.createRange();G.setStart(B.node,B.offset),Y.removeAllRanges(),be>We?(Y.addRange(G),Y.extend(O.node,O.offset)):(G.setEnd(O.node,O.offset),Y.addRange(G))}}}}for(ne=[],Y=_;Y=Y.parentNode;)Y.nodeType===1&&ne.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<ne.length;_++){var te=ne[_];te.element.scrollLeft=te.left,te.element.scrollTop=te.top}}Ws=!!rf,lf=rf=null}finally{Ge=u,z.p=i,k.T=r}}e.current=n,Ut=2}}function q0(){if(Ut===2){Ut=0;var e=Fa,n=kl,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=k.T,k.T=null;var i=z.p;z.p=2;var u=Ge;Ge|=4;try{h0(e,n.alternate,n)}finally{Ge=u,z.p=i,k.T=r}}Ut=3}}function L0(){if(Ut===4||Ut===3){Ut=0,so();var e=Fa,n=kl,r=Ml,i=k0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ut=5:(Ut=0,kl=Fa=null,Z0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&($a=null),du(r),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(cn,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=k.T,u=z.p,z.p=2,k.T=null;try{for(var p=e.onRecoverableError,b=0;b<i.length;b++){var _=i[b];p(_.value,{componentStack:_.stack})}}finally{k.T=n,z.p=u}}(Ml&3)!==0&&Os(),Bn(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===Gd?Io++:(Io=0,Gd=e):Io=0,Yo(0)}}function Z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Mo(n)))}function Os(e){return O0(),q0(),L0(),B0()}function B0(){if(Ut!==5)return!1;var e=Fa,n=$d;$d=0;var r=du(Ml),i=k.T,u=z.p;try{z.p=32>r?32:r,k.T=null,r=Fd,Fd=null;var p=Fa,b=Ml;if(Ut=0,kl=Fa=null,Ml=0,(Ge&6)!==0)throw Error(o(331));var _=Ge;if(Ge|=4,T0(p.current),b0(p,p.current,b,r),Ge=_,Yo(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(cn,p)}catch{}return!0}finally{z.p=u,k.T=i,Z0(e,n)}}function H0(e,n,r){n=fn(r,n),n=Sd(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(co(e,2),Bn(e))}function Ve(e,n,r){if(e.tag===3)H0(e,e,r);else for(;n!==null;){if(n.tag===3){H0(n,e,r);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($a===null||!$a.has(i))){e=fn(r,e),r=Pg(2),i=Ua(n,r,2),i!==null&&(Ig(r,i,n,e),co(i,2),Bn(i));break}}n=n.return}}function Wd(e,n,r){var i=e.pingCache;if(i===null){i=e.pingCache=new b4;var u=new Set;i.set(n,u)}else u=i.get(n),u===void 0&&(u=new Set,i.set(n,u));u.has(r)||(Ld=!0,u.add(r),e=k4.bind(null,e,n,r),n.then(e,e))}function k4(e,n,r){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ke===e&&(Le&r)===r&&(it===4||it===3&&(Le&62914560)===Le&&300>$t()-Hd?(Ge&2)===0&&El(e,0):Zd|=r,_l===Le&&(_l=0)),Bn(e)}function $0(e,n){n===0&&(n=Lh()),e=cl(e,n),e!==null&&(co(e,n),Bn(e))}function M4(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),$0(e,r)}function E4(e,n){var r=0;switch(e.tag){case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(n),$0(e,r)}function D4(e,n){return Ht(e,n)}var qs=null,Cl=null,Vd=!1,Ls=!1,Xd=!1,Mr=0;function Bn(e){e!==Cl&&e.next===null&&(Cl===null?qs=Cl=e:Cl=Cl.next=e),Ls=!0,Vd||(Vd=!0,N4())}function Yo(e,n){if(!Xd&&Ls){Xd=!0;do for(var r=!1,i=qs;i!==null;){if(e!==0){var u=i.pendingLanes;if(u===0)var p=0;else{var b=i.suspendedLanes,_=i.pingedLanes;p=(1<<31-gt(42|e)+1)-1,p&=u&~(b&~_),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,I0(i,p))}else p=Le,p=sr(i,i===Ke?p:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(p&3)===0||cr(i,p)||(r=!0,I0(i,p));i=i.next}while(r);Xd=!1}}function C4(){F0()}function F0(){Ls=Vd=!1;var e=0;Mr!==0&&(L4()&&(e=Mr),Mr=0);for(var n=$t(),r=null,i=qs;i!==null;){var u=i.next,p=G0(i,n);p===0?(i.next=null,r===null?qs=u:r.next=u,u===null&&(Cl=r)):(r=i,(e!==0||(p&3)!==0)&&(Ls=!0)),i=u}Yo(e)}function G0(e,n){for(var r=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var b=31-gt(p),_=1<<b,A=u[b];A===-1?((_&r)===0||(_&i)!==0)&&(u[b]=su(_,n)):A<=n&&(e.expiredLanes|=_),p&=~_}if(n=Ke,r=Le,r=sr(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,r===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Rn(i),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||cr(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(i!==null&&Rn(i),du(r)){case 2:case 8:r=Xn;break;case 32:r=Sn;break;case 268435456:r=Kn;break;default:r=Sn}return i=P0.bind(null,e),r=Ht(r,i),e.callbackPriority=n,e.callbackNode=r,n}return i!==null&&i!==null&&Rn(i),e.callbackPriority=2,e.callbackNode=null,2}function P0(e,n){if(Ut!==0&&Ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Os()&&e.callbackNode!==r)return null;var i=Le;return i=sr(e,e===Ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(E0(e,i,n),G0(e,$t()),e.callbackNode!=null&&e.callbackNode===r?P0.bind(null,e):null)}function I0(e,n){if(Os())return null;E0(e,n,!0)}function N4(){B4(function(){(Ge&6)!==0?Ht(Vn,C4):F0()})}function Kd(){return Mr===0&&(Mr=Gi()),Mr}function Y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function W0(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function A4(e,n,r,i,u){if(n==="submit"&&r&&r.stateNode===u){var p=Y0((u[It]||null).action),b=i.submitter;b&&(n=(n=b[It]||null)?Y0(n.formAction):b.getAttribute("formAction"),n!==null&&(p=n,b=null));var _=new Ji("action","action",null,i,u);e.push({event:_,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Mr!==0){var A=b?W0(u,b):new FormData(u);wd(r,{pending:!0,data:A,method:u.method,action:p},null,A)}}else typeof p=="function"&&(_.preventDefault(),A=b?W0(u,b):new FormData(u),wd(r,{pending:!0,data:A,method:u.method,action:p},p,A))},currentTarget:u}]})}}for(var Qd=0;Qd<Ou.length;Qd++){var Jd=Ou[Qd],z4=Jd.toLowerCase(),U4=Jd[0].toUpperCase()+Jd.slice(1);_n(z4,"on"+U4)}_n(Em,"onAnimationEnd"),_n(Dm,"onAnimationIteration"),_n(Cm,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(Xb,"onTransitionRun"),_n(Kb,"onTransitionStart"),_n(Qb,"onTransitionCancel"),_n(Nm,"onTransitionEnd"),Jr("onMouseEnter",["mouseout","mouseover"]),Jr("onMouseLeave",["mouseout","mouseover"]),Jr("onPointerEnter",["pointerout","pointerover"]),Jr("onPointerLeave",["pointerout","pointerover"]),ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ur("onBeforeInput",["compositionend","keypress","textInput","paste"]),ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function V0(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],u=i.event;i=i.listeners;e:{var p=void 0;if(n)for(var b=i.length-1;0<=b;b--){var _=i[b],A=_.instance,P=_.currentTarget;if(_=_.listener,A!==p&&u.isPropagationStopped())break e;p=_,u.currentTarget=P;try{p(u)}catch(Q){ks(Q)}u.currentTarget=null,p=A}else for(b=0;b<i.length;b++){if(_=i[b],A=_.instance,P=_.currentTarget,_=_.listener,A!==p&&u.isPropagationStopped())break e;p=_,u.currentTarget=P;try{p(u)}catch(Q){ks(Q)}u.currentTarget=null,p=A}}}}function Oe(e,n){var r=n[fu];r===void 0&&(r=n[fu]=new Set);var i=e+"__bubble";r.has(i)||(X0(n,e,2,!1),r.add(i))}function ef(e,n,r){var i=0;n&&(i|=4),X0(r,e,i,n)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function tf(e){if(!e[Zs]){e[Zs]=!0,Fh.forEach(function(r){r!=="selectionchange"&&(j4.has(r)||ef(r,!1,e),ef(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zs]||(n[Zs]=!0,ef("selectionchange",!1,n))}}function X0(e,n,r,i){switch(b1(n)){case 2:var u=i3;break;case 8:u=s3;break;default:u=gf}r=u.bind(null,n,r,e),u=void 0,!Tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function nf(e,n,r,i,u){var p=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var b=i.tag;if(b===3||b===4){var _=i.stateNode.containerInfo;if(_===u)break;if(b===4)for(b=i.return;b!==null;){var A=b.tag;if((A===3||A===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;_!==null;){if(b=Xr(_),b===null)return;if(A=b.tag,A===5||A===6||A===26||A===27){i=p=b;continue e}_=_.parentNode}}i=i.return}am(function(){var P=p,Q=xu(r),ne=[];e:{var I=Am.get(e);if(I!==void 0){var Y=Ji,Te=e;switch(e){case"keypress":if(Ki(r)===0)break e;case"keydown":case"keyup":Y=Db;break;case"focusin":Te="focus",Y=Eu;break;case"focusout":Te="blur",Y=Eu;break;case"beforeblur":case"afterblur":Y=Eu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=gb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Ab;break;case Em:case Dm:case Cm:Y=yb;break;case Nm:Y=Ub;break;case"scroll":case"scrollend":Y=hb;break;case"wheel":Y=Rb;break;case"copy":case"cut":case"paste":Y=xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=sm;break;case"toggle":case"beforetoggle":Y=qb}var be=(n&4)!==0,We=!be&&(e==="scroll"||e==="scrollend"),B=be?I!==null?I+"Capture":null:I;be=[];for(var O=P,G;O!==null;){var te=O;if(G=te.stateNode,te=te.tag,te!==5&&te!==26&&te!==27||G===null||B===null||(te=po(O,B),te!=null&&be.push(Vo(O,te,G))),We)break;O=O.return}0<be.length&&(I=new Y(I,Te,null,r,Q),ne.push({event:I,listeners:be}))}}if((n&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",I&&r!==bu&&(Te=r.relatedTarget||r.fromElement)&&(Xr(Te)||Te[Vr]))break e;if((Y||I)&&(I=Q.window===Q?Q:(I=Q.ownerDocument)?I.defaultView||I.parentWindow:window,Y?(Te=r.relatedTarget||r.toElement,Y=P,Te=Te?Xr(Te):null,Te!==null&&(We=c(Te),be=Te.tag,Te!==We||be!==5&&be!==27&&be!==6)&&(Te=null)):(Y=null,Te=P),Y!==Te)){if(be=om,te="onMouseLeave",B="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(be=sm,te="onPointerLeave",B="onPointerEnter",O="pointer"),We=Y==null?I:fo(Y),G=Te==null?I:fo(Te),I=new be(te,O+"leave",Y,r,Q),I.target=We,I.relatedTarget=G,te=null,Xr(Q)===P&&(be=new be(B,O+"enter",Te,r,Q),be.target=G,be.relatedTarget=We,te=be),We=te,Y&&Te)t:{for(be=Y,B=Te,O=0,G=be;G;G=Nl(G))O++;for(G=0,te=B;te;te=Nl(te))G++;for(;0<O-G;)be=Nl(be),O--;for(;0<G-O;)B=Nl(B),G--;for(;O--;){if(be===B||B!==null&&be===B.alternate)break t;be=Nl(be),B=Nl(B)}be=null}else be=null;Y!==null&&K0(ne,I,Y,be,!1),Te!==null&&We!==null&&K0(ne,We,Te,be,!0)}}e:{if(I=P?fo(P):window,Y=I.nodeName&&I.nodeName.toLowerCase(),Y==="select"||Y==="input"&&I.type==="file")var de=gm;else if(hm(I))if(wm)de=Yb;else{de=Pb;var je=Gb}else Y=I.nodeName,!Y||Y.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?P&&yu(P.elementType)&&(de=gm):de=Ib;if(de&&(de=de(e,P))){mm(ne,de,r,Q);break e}je&&je(e,I,P),e==="focusout"&&P&&I.type==="number"&&P.memoizedProps.value!=null&&vu(I,"number",I.value)}switch(je=P?fo(P):window,e){case"focusin":(hm(je)||je.contentEditable==="true")&&(ol=je,Uu=P,xo=null);break;case"focusout":xo=Uu=ol=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,km(ne,r,Q);break;case"selectionchange":if(Vb)break;case"keydown":case"keyup":km(ne,r,Q)}var ge;if(Cu)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else ll?fm(e,r)&&(Se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Se="onCompositionStart");Se&&(cm&&r.locale!=="ko"&&(ll||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&ll&&(ge=rm()):(Ca=Q,_u="value"in Ca?Ca.value:Ca.textContent,ll=!0)),je=Bs(P,Se),0<je.length&&(Se=new im(Se,e,null,r,Q),ne.push({event:Se,listeners:je}),ge?Se.data=ge:(ge=pm(r),ge!==null&&(Se.data=ge)))),(ge=Zb?Bb(e,r):Hb(e,r))&&(Se=Bs(P,"onBeforeInput"),0<Se.length&&(je=new im("onBeforeInput","beforeinput",null,r,Q),ne.push({event:je,listeners:Se}),je.data=ge)),A4(ne,e,P,r,Q)}V0(ne,n)})}function Vo(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Bs(e,n){for(var r=n+"Capture",i=[];e!==null;){var u=e,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=po(e,r),u!=null&&i.unshift(Vo(e,u,p)),u=po(e,n),u!=null&&i.push(Vo(e,u,p))),e.tag===3)return i;e=e.return}return[]}function Nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K0(e,n,r,i,u){for(var p=n._reactName,b=[];r!==null&&r!==i;){var _=r,A=_.alternate,P=_.stateNode;if(_=_.tag,A!==null&&A===i)break;_!==5&&_!==26&&_!==27||P===null||(A=P,u?(P=po(r,p),P!=null&&b.unshift(Vo(r,P,A))):u||(P=po(r,p),P!=null&&b.push(Vo(r,P,A)))),r=r.return}b.length!==0&&e.push({event:n,listeners:b})}var R4=/\r\n?/g,O4=/\u0000|\uFFFD/g;function Q0(e){return(typeof e=="string"?e:""+e).replace(R4,`
`).replace(O4,"")}function J0(e,n){return n=Q0(n),Q0(e)===n}function Hs(){}function Ye(e,n,r,i,u,p){switch(r){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||nl(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&nl(e,""+i);break;case"className":Ii(e,"class",i);break;case"tabIndex":Ii(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ii(e,r,i);break;case"style":tm(e,i,p);break;case"data":if(n!=="object"){Ii(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=Vi(""+i),e.setAttribute(r,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(n!=="input"&&Ye(e,n,"name",u.name,u,null),Ye(e,n,"formEncType",u.formEncType,u,null),Ye(e,n,"formMethod",u.formMethod,u,null),Ye(e,n,"formTarget",u.formTarget,u,null)):(Ye(e,n,"encType",u.encType,u,null),Ye(e,n,"method",u.method,u,null),Ye(e,n,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=Vi(""+i),e.setAttribute(r,i);break;case"onClick":i!=null&&(e.onclick=Hs);break;case"onScroll":i!=null&&Oe("scroll",e);break;case"onScrollEnd":i!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(r=i.__html,r!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}r=Vi(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""+i):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":i===!0?e.setAttribute(r,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,i):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(r,i):e.removeAttribute(r);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(r):e.setAttribute(r,i);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),Pi(e,"popover",i);break;case"xlinkActuate":Qn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Qn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Qn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Qn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Qn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Qn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Qn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Pi(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=fb.get(r)||r,Pi(e,r,i))}}function af(e,n,r,i,u,p){switch(r){case"style":tm(e,i,p);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(r=i.__html,r!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"children":typeof i=="string"?nl(e,i):(typeof i=="number"||typeof i=="bigint")&&nl(e,""+i);break;case"onScroll":i!=null&&Oe("scroll",e);break;case"onScrollEnd":i!=null&&Oe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Hs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gh.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),p=e[It]||null,p=p!=null?p[r]:null,typeof p=="function"&&e.removeEventListener(n,p,u),typeof i=="function")){typeof p!="function"&&p!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,i,u);break e}r in e?e[r]=i:i===!0?e.setAttribute(r,""):Pi(e,r,i)}}}function jt(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var i=!1,u=!1,p;for(p in r)if(r.hasOwnProperty(p)){var b=r[p];if(b!=null)switch(p){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ye(e,n,p,b,r,null)}}u&&Ye(e,n,"srcSet",r.srcSet,r,null),i&&Ye(e,n,"src",r.src,r,null);return;case"input":Oe("invalid",e);var _=p=b=u=null,A=null,P=null;for(i in r)if(r.hasOwnProperty(i)){var Q=r[i];if(Q!=null)switch(i){case"name":u=Q;break;case"type":b=Q;break;case"checked":A=Q;break;case"defaultChecked":P=Q;break;case"value":p=Q;break;case"defaultValue":_=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,n));break;default:Ye(e,n,i,Q,r,null)}}Kh(e,p,_,A,P,b,u,!1),Yi(e);return;case"select":Oe("invalid",e),i=b=p=null;for(u in r)if(r.hasOwnProperty(u)&&(_=r[u],_!=null))switch(u){case"value":p=_;break;case"defaultValue":b=_;break;case"multiple":i=_;default:Ye(e,n,u,_,r,null)}n=p,r=b,e.multiple=!!i,n!=null?tl(e,!!i,n,!1):r!=null&&tl(e,!!i,r,!0);return;case"textarea":Oe("invalid",e),p=u=i=null;for(b in r)if(r.hasOwnProperty(b)&&(_=r[b],_!=null))switch(b){case"value":i=_;break;case"defaultValue":u=_;break;case"children":p=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(91));break;default:Ye(e,n,b,_,r,null)}Jh(e,i,u,p),Yi(e);return;case"option":for(A in r)if(r.hasOwnProperty(A)&&(i=r[A],i!=null))switch(A){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ye(e,n,A,i,r,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(i=0;i<Wo.length;i++)Oe(Wo[i],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in r)if(r.hasOwnProperty(P)&&(i=r[P],i!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ye(e,n,P,i,r,null)}return;default:if(yu(n)){for(Q in r)r.hasOwnProperty(Q)&&(i=r[Q],i!==void 0&&af(e,n,Q,i,r,void 0));return}}for(_ in r)r.hasOwnProperty(_)&&(i=r[_],i!=null&&Ye(e,n,_,i,r,null))}function q4(e,n,r,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,b=null,_=null,A=null,P=null,Q=null;for(Y in r){var ne=r[Y];if(r.hasOwnProperty(Y)&&ne!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":A=ne;default:i.hasOwnProperty(Y)||Ye(e,n,Y,null,i,ne)}}for(var I in i){var Y=i[I];if(ne=r[I],i.hasOwnProperty(I)&&(Y!=null||ne!=null))switch(I){case"type":p=Y;break;case"name":u=Y;break;case"checked":P=Y;break;case"defaultChecked":Q=Y;break;case"value":b=Y;break;case"defaultValue":_=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,n));break;default:Y!==ne&&Ye(e,n,I,Y,i,ne)}}wu(e,b,_,A,P,Q,p,u);return;case"select":Y=b=_=I=null;for(p in r)if(A=r[p],r.hasOwnProperty(p)&&A!=null)switch(p){case"value":break;case"multiple":Y=A;default:i.hasOwnProperty(p)||Ye(e,n,p,null,i,A)}for(u in i)if(p=i[u],A=r[u],i.hasOwnProperty(u)&&(p!=null||A!=null))switch(u){case"value":I=p;break;case"defaultValue":_=p;break;case"multiple":b=p;default:p!==A&&Ye(e,n,u,p,i,A)}n=_,r=b,i=Y,I!=null?tl(e,!!r,I,!1):!!i!=!!r&&(n!=null?tl(e,!!r,n,!0):tl(e,!!r,r?[]:"",!1));return;case"textarea":Y=I=null;for(_ in r)if(u=r[_],r.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ye(e,n,_,null,i,u)}for(b in i)if(u=i[b],p=r[b],i.hasOwnProperty(b)&&(u!=null||p!=null))switch(b){case"value":I=u;break;case"defaultValue":Y=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==p&&Ye(e,n,b,u,i,p)}Qh(e,I,Y);return;case"option":for(var Te in r)if(I=r[Te],r.hasOwnProperty(Te)&&I!=null&&!i.hasOwnProperty(Te))switch(Te){case"selected":e.selected=!1;break;default:Ye(e,n,Te,null,i,I)}for(A in i)if(I=i[A],Y=r[A],i.hasOwnProperty(A)&&I!==Y&&(I!=null||Y!=null))switch(A){case"selected":e.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Ye(e,n,A,I,i,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in r)I=r[be],r.hasOwnProperty(be)&&I!=null&&!i.hasOwnProperty(be)&&Ye(e,n,be,null,i,I);for(P in i)if(I=i[P],Y=r[P],i.hasOwnProperty(P)&&I!==Y&&(I!=null||Y!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(o(137,n));break;default:Ye(e,n,P,I,i,Y)}return;default:if(yu(n)){for(var We in r)I=r[We],r.hasOwnProperty(We)&&I!==void 0&&!i.hasOwnProperty(We)&&af(e,n,We,void 0,i,I);for(Q in i)I=i[Q],Y=r[Q],!i.hasOwnProperty(Q)||I===Y||I===void 0&&Y===void 0||af(e,n,Q,I,i,Y);return}}for(var B in r)I=r[B],r.hasOwnProperty(B)&&I!=null&&!i.hasOwnProperty(B)&&Ye(e,n,B,null,i,I);for(ne in i)I=i[ne],Y=r[ne],!i.hasOwnProperty(ne)||I===Y||I==null&&Y==null||Ye(e,n,ne,I,i,Y)}var rf=null,lf=null;function $s(e){return e.nodeType===9?e:e.ownerDocument}function e1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t1(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sf=null;function L4(){var e=window.event;return e&&e.type==="popstate"?e===sf?!1:(sf=e,!0):(sf=null,!1)}var n1=typeof setTimeout=="function"?setTimeout:void 0,Z4=typeof clearTimeout=="function"?clearTimeout:void 0,a1=typeof Promise=="function"?Promise:void 0,B4=typeof queueMicrotask=="function"?queueMicrotask:typeof a1<"u"?function(e){return a1.resolve(null).then(e).catch(H4)}:n1;function H4(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function r1(e,n){var r=n,i=0,u=0;do{var p=r.nextSibling;if(e.removeChild(r),p&&p.nodeType===8)if(r=p.data,r==="/$"){if(0<i&&8>i){r=i;var b=e.ownerDocument;if(r&1&&Xo(b.documentElement),r&2&&Xo(b.body),r&4)for(r=b.head,Xo(r),b=r.firstChild;b;){var _=b.nextSibling,A=b.nodeName;b[uo]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&b.rel.toLowerCase()==="stylesheet"||r.removeChild(b),b=_}}if(u===0){e.removeChild(p),ri(n);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:i=r.charCodeAt(0)-48;else i=0;r=p}while(r);ri(n)}function cf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":cf(r),pu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function $4(e,n,r,i){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[uo])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Mn(e.nextSibling),e===null)break}return null}function F4(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Mn(e.nextSibling),e===null))return null;return e}function uf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function G4(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var i=function(){n(),r.removeEventListener("DOMContentLoaded",i)};r.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var df=null;function l1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function o1(e,n,r){switch(n=$s(r),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);pu(e)}var vn=new Map,i1=new Set;function Fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=z.d;z.d={f:P4,r:I4,D:Y4,C:W4,L:V4,m:X4,X:Q4,S:K4,M:J4};function P4(){var e=fa.f(),n=js();return e||n}function I4(e){var n=Kr(e);n!==null&&n.tag===5&&n.type==="form"?Eg(n):fa.r(e)}var Al=typeof document>"u"?null:document;function s1(e,n,r){var i=Al;if(i&&typeof n=="string"&&n){var u=dn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),i1.has(u)||(i1.add(u),e={rel:e,crossOrigin:r,href:n},i.querySelector(u)===null&&(n=i.createElement("link"),jt(n,"link",e),Mt(n),i.head.appendChild(n)))}}function Y4(e){fa.D(e),s1("dns-prefetch",e,null)}function W4(e,n){fa.C(e,n),s1("preconnect",e,n)}function V4(e,n,r){fa.L(e,n,r);var i=Al;if(i&&e&&n){var u='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+dn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+dn(r.imageSizes)+'"]')):u+='[href="'+dn(e)+'"]';var p=u;switch(n){case"style":p=zl(e);break;case"script":p=Ul(e)}vn.has(p)||(e=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),vn.set(p,e),i.querySelector(u)!==null||n==="style"&&i.querySelector(Ko(p))||n==="script"&&i.querySelector(Qo(p))||(n=i.createElement("link"),jt(n,"link",e),Mt(n),i.head.appendChild(n)))}}function X4(e,n){fa.m(e,n);var r=Al;if(r&&e){var i=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+dn(i)+'"][href="'+dn(e)+'"]',p=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ul(e)}if(!vn.has(p)&&(e=v({rel:"modulepreload",href:e},n),vn.set(p,e),r.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Qo(p)))return}i=r.createElement("link"),jt(i,"link",e),Mt(i),r.head.appendChild(i)}}}function K4(e,n,r){fa.S(e,n,r);var i=Al;if(i&&e){var u=Qr(i).hoistableStyles,p=zl(e);n=n||"default";var b=u.get(p);if(!b){var _={loading:0,preload:null};if(b=i.querySelector(Ko(p)))_.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},r),(r=vn.get(p))&&ff(e,r);var A=b=i.createElement("link");Mt(A),jt(A,"link",e),A._p=new Promise(function(P,Q){A.onload=P,A.onerror=Q}),A.addEventListener("load",function(){_.loading|=1}),A.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Gs(b,n,i)}b={type:"stylesheet",instance:b,count:1,state:_},u.set(p,b)}}}function Q4(e,n){fa.X(e,n);var r=Al;if(r&&e){var i=Qr(r).hoistableScripts,u=Ul(e),p=i.get(u);p||(p=r.querySelector(Qo(u)),p||(e=v({src:e,async:!0},n),(n=vn.get(u))&&pf(e,n),p=r.createElement("script"),Mt(p),jt(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},i.set(u,p))}}function J4(e,n){fa.M(e,n);var r=Al;if(r&&e){var i=Qr(r).hoistableScripts,u=Ul(e),p=i.get(u);p||(p=r.querySelector(Qo(u)),p||(e=v({src:e,async:!0,type:"module"},n),(n=vn.get(u))&&pf(e,n),p=r.createElement("script"),Mt(p),jt(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},i.set(u,p))}}function c1(e,n,r,i){var u=(u=ae.current)?Fs(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=zl(r.href),r=Qr(u).hoistableStyles,i=r.get(n),i||(i={type:"style",instance:null,count:0,state:null},r.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=zl(r.href);var p=Qr(u).hoistableStyles,b=p.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,b),(p=u.querySelector(Ko(e)))&&!p._p&&(b.instance=p,b.state.loading=5),vn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},vn.set(e,r),p||e3(u,e,r,b.state))),n&&i===null)throw Error(o(528,""));return b}if(n&&i!==null)throw Error(o(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ul(r),r=Qr(u).hoistableScripts,i=r.get(n),i||(i={type:"script",instance:null,count:0,state:null},r.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function zl(e){return'href="'+dn(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function u1(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function e3(e,n,r,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),jt(n,"link",r),Mt(n),e.head.appendChild(n))}function Ul(e){return'[src="'+dn(e)+'"]'}function Qo(e){return"script[async]"+e}function d1(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+dn(r.href)+'"]');if(i)return n.instance=i,Mt(i),i;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Mt(i),jt(i,"style",u),Gs(i,r.precedence,e),n.instance=i;case"stylesheet":u=zl(r.href);var p=e.querySelector(Ko(u));if(p)return n.state.loading|=4,n.instance=p,Mt(p),p;i=u1(r),(u=vn.get(u))&&ff(i,u),p=(e.ownerDocument||e).createElement("link"),Mt(p);var b=p;return b._p=new Promise(function(_,A){b.onload=_,b.onerror=A}),jt(p,"link",i),n.state.loading|=4,Gs(p,r.precedence,e),n.instance=p;case"script":return p=Ul(r.src),(u=e.querySelector(Qo(p)))?(n.instance=u,Mt(u),u):(i=r,(u=vn.get(p))&&(i=v({},r),pf(i,u)),e=e.ownerDocument||e,u=e.createElement("script"),Mt(u),jt(u,"link",i),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,Gs(i,r.precedence,e));return n.instance}function Gs(e,n,r){for(var i=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,p=u,b=0;b<i.length;b++){var _=i[b];if(_.dataset.precedence===n)p=_;else if(p!==u)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ps=null;function f1(e,n,r){if(Ps===null){var i=new Map,u=Ps=new Map;u.set(r,i)}else u=Ps,i=u.get(r),i||(i=new Map,u.set(r,i));if(i.has(e))return i;for(i.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var p=r[u];if(!(p[uo]||p[qt]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var b=p.getAttribute(n)||"";b=e+b;var _=i.get(b);_?_.push(p):i.set(b,[p])}}return i}function p1(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function t3(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function h1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Jo=null;function n3(){}function a3(e,n,r){if(Jo===null)throw Error(o(475));var i=Jo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=zl(r.href),p=e.querySelector(Ko(u));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Is.bind(i),e.then(i,i)),n.state.loading|=4,n.instance=p,Mt(p);return}p=e.ownerDocument||e,r=u1(r),(u=vn.get(u))&&ff(r,u),p=p.createElement("link"),Mt(p);var b=p;b._p=new Promise(function(_,A){b.onload=_,b.onerror=A}),jt(p,"link",r),n.instance=p}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(i.count++,n=Is.bind(i),e.addEventListener("load",n),e.addEventListener("error",n))}}function r3(){if(Jo===null)throw Error(o(475));var e=Jo;return e.stylesheets&&e.count===0&&hf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&hf(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Is(){if(this.count--,this.count===0){if(this.stylesheets)hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ys=null;function hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ys=new Map,n.forEach(l3,e),Ys=null,Is.call(e))}function l3(e,n){if(!(n.state.loading&4)){var r=Ys.get(e);if(r)var i=r.get(null);else{r=new Map,Ys.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var b=u[p];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),i=b)}i&&r.set(null,i)}u=n.instance,b=u.getAttribute("data-precedence"),p=r.get(b)||i,p===i&&r.set(null,u),r.set(b,u),this.count++,i=Is.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),p?p.parentNode.insertBefore(u,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ei={$$typeof:R,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function o3(e,n,r,i,u,p,b,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.hiddenUpdates=cu(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function m1(e,n,r,i,u,p,b,_,A,P,Q,ne){return e=new o3(e,n,r,b,_,A,P,ne),n=1,p===!0&&(n|=24),p=en(3,null,null,n),e.current=p,p.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:i,isDehydrated:r,cache:n},Qu(p),e}function g1(e){return e?(e=ul,e):ul}function w1(e,n,r,i,u,p){u=g1(u),i.context===null?i.context=u:i.pendingContext=u,i=za(n),i.payload={element:r},p=p===void 0?null:p,p!==null&&(i.callback=p),r=Ua(e,i,n),r!==null&&(ln(r,e,n),No(r,e,n))}function v1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function mf(e,n){v1(e,n),(e=e.alternate)&&v1(e,n)}function y1(e){if(e.tag===13){var n=cl(e,67108864);n!==null&&ln(n,e,67108864),mf(e,67108864)}}var Ws=!0;function i3(e,n,r,i){var u=k.T;k.T=null;var p=z.p;try{z.p=2,gf(e,n,r,i)}finally{z.p=p,k.T=u}}function s3(e,n,r,i){var u=k.T;k.T=null;var p=z.p;try{z.p=8,gf(e,n,r,i)}finally{z.p=p,k.T=u}}function gf(e,n,r,i){if(Ws){var u=wf(i);if(u===null)nf(e,n,i,Vs,r),x1(e,i);else if(u3(u,e,n,r,i))i.stopPropagation();else if(x1(e,i),n&4&&-1<c3.indexOf(e)){for(;u!==null;){var p=Kr(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var b=Tn(p.pendingLanes);if(b!==0){var _=p;for(_.pendingLanes|=2,_.entangledLanes|=2;b;){var A=1<<31-gt(b);_.entanglements[1]|=A,b&=~A}Bn(p),(Ge&6)===0&&(zs=$t()+500,Yo(0))}}break;case 13:_=cl(p,2),_!==null&&ln(_,p,2),js(),mf(p,2)}if(p=wf(i),p===null&&nf(e,n,i,Vs,r),p===u)break;u=p}u!==null&&i.stopPropagation()}else nf(e,n,i,null,r)}}function wf(e){return e=xu(e),vf(e)}var Vs=null;function vf(e){if(Vs=null,e=Xr(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=d(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Vs=e,null}function b1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ta()){case Vn:return 2;case Xn:return 8;case Sn:case _a:return 32;case Kn:return 268435456;default:return 32}default:return 32}}var yf=!1,Ia=null,Ya=null,Wa=null,ti=new Map,ni=new Map,Va=[],c3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x1(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":ti.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(n.pointerId)}}function ai(e,n,r,i,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:r,eventSystemFlags:i,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Kr(n),n!==null&&y1(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function u3(e,n,r,i,u){switch(n){case"focusin":return Ia=ai(Ia,e,n,r,i,u),!0;case"dragenter":return Ya=ai(Ya,e,n,r,i,u),!0;case"mouseover":return Wa=ai(Wa,e,n,r,i,u),!0;case"pointerover":var p=u.pointerId;return ti.set(p,ai(ti.get(p)||null,e,n,r,i,u)),!0;case"gotpointercapture":return p=u.pointerId,ni.set(p,ai(ni.get(p)||null,e,n,r,i,u)),!0}return!1}function S1(e){var n=Xr(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){e.blockedOn=n,ab(e.priority,function(){if(r.tag===13){var i=rn();i=uu(i);var u=cl(r,i);u!==null&&ln(u,r,i),mf(r,i)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=wf(e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);bu=i,r.target.dispatchEvent(i),bu=null}else return n=Kr(r),n!==null&&y1(n),e.blockedOn=r,!1;n.shift()}return!0}function T1(e,n,r){Xs(e)&&r.delete(n)}function d3(){yf=!1,Ia!==null&&Xs(Ia)&&(Ia=null),Ya!==null&&Xs(Ya)&&(Ya=null),Wa!==null&&Xs(Wa)&&(Wa=null),ti.forEach(T1),ni.forEach(T1)}function Ks(e,n){e.blockedOn===n&&(e.blockedOn=null,yf||(yf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,d3)))}var Qs=null;function _1(e){Qs!==e&&(Qs=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Qs===e&&(Qs=null);for(var n=0;n<e.length;n+=3){var r=e[n],i=e[n+1],u=e[n+2];if(typeof i!="function"){if(vf(i||r)===null)continue;break}var p=Kr(r);p!==null&&(e.splice(n,3),n-=3,wd(p,{pending:!0,data:u,method:r.method,action:i},i,u))}}))}function ri(e){function n(A){return Ks(A,e)}Ia!==null&&Ks(Ia,e),Ya!==null&&Ks(Ya,e),Wa!==null&&Ks(Wa,e),ti.forEach(n),ni.forEach(n);for(var r=0;r<Va.length;r++){var i=Va[r];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Va.length&&(r=Va[0],r.blockedOn===null);)S1(r),r.blockedOn===null&&Va.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(i=0;i<r.length;i+=3){var u=r[i],p=r[i+1],b=u[It]||null;if(typeof p=="function")b||_1(r);else if(b){var _=null;if(p&&p.hasAttribute("formAction")){if(u=p,b=p[It]||null)_=b.formAction;else if(vf(u)!==null)continue}else _=b.action;typeof _=="function"?r[i+1]=_:(r.splice(i,3),i-=3),_1(r)}}}function bf(e){this._internalRoot=e}Js.prototype.render=bf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var r=n.current,i=rn();w1(r,i,e,n,null,null)},Js.prototype.unmount=bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;w1(e.current,2,null,e,null,null),js(),n[Vr]=null}};function Js(e){this._internalRoot=e}Js.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hh();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Va.length&&n!==0&&n<Va[r].priority;r++);Va.splice(r,0,e),r===0&&S1(e)}};var k1=a.version;if(k1!=="19.1.0")throw Error(o(527,k1,"19.1.0"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(n),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var f3={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{cn=ec.inject(f3),mt=ec}catch{}}return oi.createRoot=function(e,n){if(!s(e))throw Error(o(299));var r=!1,i="",u=Hg,p=$g,b=Fg,_=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks)),n=m1(e,1,!1,null,null,r,i,u,p,b,_,null),e[Vr]=n.current,tf(e),new bf(n)},oi.hydrateRoot=function(e,n,r){if(!s(e))throw Error(o(299));var i=!1,u="",p=Hg,b=$g,_=Fg,A=null,P=null;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks),r.formState!==void 0&&(P=r.formState)),n=m1(e,1,!0,n,r??null,i,u,p,b,_,A,P),n.context=g1(null),r=n.current,i=rn(),i=uu(i),u=za(i),u.callback=null,Ua(r,u,i),r=i,n.current.lanes=r,co(n,r),Bn(n),e[Vr]=n.current,tf(e),new Js(n)},oi.version="19.1.0",oi}var R1;function T3(){if(R1)return Tf.exports;R1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Tf.exports=S3(),Tf.exports}var _3=T3(),ii={},O1;function k3(){if(O1)return ii;O1=1,Object.defineProperty(ii,"__esModule",{value:!0}),ii.parse=d,ii.serialize=h;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,a=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,c=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function d(y,S){const T=new c,E=y.length;if(E<2)return T;const D=S?.decode||v;let x=0;do{const N=y.indexOf("=",x);if(N===-1)break;const R=y.indexOf(";",x),H=R===-1?E:R;if(N>H){x=y.lastIndexOf(";",N-1)+1;continue}const q=f(y,x,N),V=m(y,N,q),ee=y.slice(q,V);if(T[ee]===void 0){let J=f(y,N+1,H),re=m(y,H,J);const ie=D(y.slice(J,re));T[ee]=ie}x=H+1}while(x<E);return T}function f(y,S,T){do{const E=y.charCodeAt(S);if(E!==32&&E!==9)return S}while(++S<T);return T}function m(y,S,T){for(;S>T;){const E=y.charCodeAt(--S);if(E!==32&&E!==9)return S+1}return T}function h(y,S,T){const E=T?.encode||encodeURIComponent;if(!t.test(y))throw new TypeError(`argument name is invalid: ${y}`);const D=E(S);if(!a.test(D))throw new TypeError(`argument val is invalid: ${S}`);let x=y+"="+D;if(!T)return x;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);x+="; Max-Age="+T.maxAge}if(T.domain){if(!l.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);x+="; Domain="+T.domain}if(T.path){if(!o.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);x+="; Path="+T.path}if(T.expires){if(!w(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);x+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(x+="; HttpOnly"),T.secure&&(x+="; Secure"),T.partitioned&&(x+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return x}function v(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function w(y){return s.call(y)==="[object Date]"}return ii}k3();var q1="popstate";function M3(t={}){function a(o,s){let{pathname:c,search:d,hash:f}=o.location;return mp("",{pathname:c,search:d,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function l(o,s){return typeof s=="string"?s:xi(s)}return D3(a,l,null,t)}function lt(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function zn(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function E3(){return Math.random().toString(36).substring(2,10)}function L1(t,a){return{usr:t.state,key:t.key,idx:a}}function mp(t,a,l=null,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?eo(a):a,state:l,key:a&&a.key||o||E3()}}function xi({pathname:t="/",search:a="",hash:l=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function eo(t){let a={};if(t){let l=t.indexOf("#");l>=0&&(a.hash=t.substring(l),t=t.substring(0,l));let o=t.indexOf("?");o>=0&&(a.search=t.substring(o),t=t.substring(0,o)),t&&(a.pathname=t)}return a}function D3(t,a,l,o={}){let{window:s=document.defaultView,v5Compat:c=!1}=o,d=s.history,f="POP",m=null,h=v();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function v(){return(d.state||{idx:null}).idx}function w(){f="POP";let D=v(),x=D==null?null:D-h;h=D,m&&m({action:f,location:E.location,delta:x})}function y(D,x){f="PUSH";let N=mp(E.location,D,x);h=v()+1;let R=L1(N,h),H=E.createHref(N);try{d.pushState(R,"",H)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;s.location.assign(H)}c&&m&&m({action:f,location:E.location,delta:1})}function S(D,x){f="REPLACE";let N=mp(E.location,D,x);h=v();let R=L1(N,h),H=E.createHref(N);d.replaceState(R,"",H),c&&m&&m({action:f,location:E.location,delta:0})}function T(D){return C3(D)}let E={get action(){return f},get location(){return t(s,d)},listen(D){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(q1,w),m=D,()=>{s.removeEventListener(q1,w),m=null}},createHref(D){return a(s,D)},createURL:T,encodeLocation(D){let x=T(D);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:S,go(D){return d.go(D)}};return E}function C3(t,a=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),lt(l,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:xi(t);return o=o.replace(/ $/,"%20"),!a&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function k2(t,a,l="/"){return N3(t,a,l,!1)}function N3(t,a,l,o){let s=typeof a=="string"?eo(a):a,c=xa(s.pathname||"/",l);if(c==null)return null;let d=M2(t);A3(d);let f=null;for(let m=0;f==null&&m<d.length;++m){let h=$3(c);f=B3(d[m],h,o)}return f}function M2(t,a=[],l=[],o=""){let s=(c,d,f)=>{let m={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(lt(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length));let h=va([o,m.relativePath]),v=l.concat(m);c.children&&c.children.length>0&&(lt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),M2(c.children,a,v,h)),!(c.path==null&&!c.index)&&a.push({path:h,score:L3(h,c.index),routesMeta:v})};return t.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))s(c,d);else for(let f of E2(c.path))s(c,d,f)}),a}function E2(t){let a=t.split("/");if(a.length===0)return[];let[l,...o]=a,s=l.endsWith("?"),c=l.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let d=E2(o.join("/")),f=[];return f.push(...d.map(m=>m===""?c:[c,m].join("/"))),s&&f.push(...d),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function A3(t){t.sort((a,l)=>a.score!==l.score?l.score-a.score:Z3(a.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var z3=/^:[\w-]+$/,U3=3,j3=2,R3=1,O3=10,q3=-2,Z1=t=>t==="*";function L3(t,a){let l=t.split("/"),o=l.length;return l.some(Z1)&&(o+=q3),a&&(o+=j3),l.filter(s=>!Z1(s)).reduce((s,c)=>s+(z3.test(c)?U3:c===""?R3:O3),o)}function Z3(t,a){return t.length===a.length&&t.slice(0,-1).every((o,s)=>o===a[s])?t[t.length-1]-a[a.length-1]:0}function B3(t,a,l=!1){let{routesMeta:o}=t,s={},c="/",d=[];for(let f=0;f<o.length;++f){let m=o[f],h=f===o.length-1,v=c==="/"?a:a.slice(c.length)||"/",w=Nc({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v),y=m.route;if(!w&&h&&l&&!o[o.length-1].route.index&&(w=Nc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!w)return null;Object.assign(s,w.params),d.push({params:s,pathname:va([c,w.pathname]),pathnameBase:I3(va([c,w.pathnameBase])),route:y}),w.pathnameBase!=="/"&&(c=va([c,w.pathnameBase]))}return d}function Nc(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[l,o]=H3(t.path,t.caseSensitive,t.end),s=a.match(l);if(!s)return null;let c=s[0],d=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:o.reduce((h,{paramName:v,isOptional:w},y)=>{if(v==="*"){let T=f[y]||"";d=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const S=f[y];return w&&!S?h[v]=void 0:h[v]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:d,pattern:t}}function H3(t,a=!1,l=!0){zn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let o=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,m)=>(o.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),o]}function $3(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return zn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function xa(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let l=a.endsWith("/")?a.length-1:a.length,o=t.charAt(l);return o&&o!=="/"?null:t.slice(l)||"/"}function F3(t,a="/"){let{pathname:l,search:o="",hash:s=""}=typeof t=="string"?eo(t):t;return{pathname:l?l.startsWith("/")?l:G3(l,a):a,search:Y3(o),hash:W3(s)}}function G3(t,a){let l=a.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?l.length>1&&l.pop():s!=="."&&l.push(s)}),l.length>1?l.join("/"):"/"}function Ef(t,a,l,o){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P3(t){return t.filter((a,l)=>l===0||a.route.path&&a.route.path.length>0)}function D2(t){let a=P3(t);return a.map((l,o)=>o===a.length-1?l.pathname:l.pathnameBase)}function C2(t,a,l,o=!1){let s;typeof t=="string"?s=eo(t):(s={...t},lt(!s.pathname||!s.pathname.includes("?"),Ef("?","pathname","search",s)),lt(!s.pathname||!s.pathname.includes("#"),Ef("#","pathname","hash",s)),lt(!s.search||!s.search.includes("#"),Ef("#","search","hash",s)));let c=t===""||s.pathname==="",d=c?"/":s.pathname,f;if(d==null)f=l;else{let w=a.length-1;if(!o&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),w-=1;s.pathname=y.join("/")}f=w>=0?a[w]:"/"}let m=F3(s,f),h=d&&d!=="/"&&d.endsWith("/"),v=(c||d===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}var va=t=>t.join("/").replace(/\/\/+/g,"/"),I3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Y3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,W3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function V3(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var N2=["POST","PUT","PATCH","DELETE"];new Set(N2);var X3=["GET",...N2];new Set(X3);var to=M.createContext(null);to.displayName="DataRouter";var Yc=M.createContext(null);Yc.displayName="DataRouterState";var A2=M.createContext({isTransitioning:!1});A2.displayName="ViewTransition";var K3=M.createContext(new Map);K3.displayName="Fetchers";var Q3=M.createContext(null);Q3.displayName="Await";var In=M.createContext(null);In.displayName="Navigation";var ji=M.createContext(null);ji.displayName="Location";var Yn=M.createContext({outlet:null,matches:[],isDataRoute:!1});Yn.displayName="Route";var Qp=M.createContext(null);Qp.displayName="RouteError";function J3(t,{relative:a}={}){lt(Ri(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=M.useContext(In),{hash:s,pathname:c,search:d}=Oi(t,{relative:a}),f=c;return l!=="/"&&(f=c==="/"?l:va([l,c])),o.createHref({pathname:f,search:d,hash:s})}function Ri(){return M.useContext(ji)!=null}function Sa(){return lt(Ri(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(ji).location}var z2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function U2(t){M.useContext(In).static||M.useLayoutEffect(t)}function Jp(){let{isDataRoute:t}=M.useContext(Yn);return t?fx():ex()}function ex(){lt(Ri(),"useNavigate() may be used only in the context of a <Router> component.");let t=M.useContext(to),{basename:a,navigator:l}=M.useContext(In),{matches:o}=M.useContext(Yn),{pathname:s}=Sa(),c=JSON.stringify(D2(o)),d=M.useRef(!1);return U2(()=>{d.current=!0}),M.useCallback((m,h={})=>{if(zn(d.current,z2),!d.current)return;if(typeof m=="number"){l.go(m);return}let v=C2(m,JSON.parse(c),s,h.relative==="path");t==null&&a!=="/"&&(v.pathname=v.pathname==="/"?a:va([a,v.pathname])),(h.replace?l.replace:l.push)(v,h.state,h)},[a,l,c,s,t])}M.createContext(null);function Zk(){let{matches:t}=M.useContext(Yn),a=t[t.length-1];return a?a.params:{}}function Oi(t,{relative:a}={}){let{matches:l}=M.useContext(Yn),{pathname:o}=Sa(),s=JSON.stringify(D2(l));return M.useMemo(()=>C2(t,JSON.parse(s),o,a==="path"),[t,s,o,a])}function tx(t,a){return j2(t,a)}function j2(t,a,l,o){lt(Ri(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=M.useContext(In),{matches:c}=M.useContext(Yn),d=c[c.length-1],f=d?d.params:{},m=d?d.pathname:"/",h=d?d.pathnameBase:"/",v=d&&d.route;{let x=v&&v.path||"";R2(m,!v||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let w=Sa(),y;if(a){let x=typeof a=="string"?eo(a):a;lt(h==="/"||x.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${x.pathname}" was given in the \`location\` prop.`),y=x}else y=w;let S=y.pathname||"/",T=S;if(h!=="/"){let x=h.replace(/^\//,"").split("/");T="/"+S.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=k2(t,{pathname:T});zn(v||E!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),zn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=ox(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:va([h,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?h:va([h,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),c,l,o);return a&&D?M.createElement(ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},D):D}function nx(){let t=dx(),a=V3(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),l=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:c},"ErrorBoundary")," or"," ",M.createElement("code",{style:c},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},a),l?M.createElement("pre",{style:s},l):null,d)}var ax=M.createElement(nx,null),rx=class extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){console.error("React Router caught the following error during render",t,a)}render(){return this.state.error!==void 0?M.createElement(Yn.Provider,{value:this.props.routeContext},M.createElement(Qp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lx({routeContext:t,match:a,children:l}){let o=M.useContext(to);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),M.createElement(Yn.Provider,{value:t},l)}function ox(t,a=[],l=null,o=null){if(t==null){if(!l)return null;if(l.errors)t=l.matches;else if(a.length===0&&!l.initialized&&l.matches.length>0)t=l.matches;else return null}let s=t,c=l?.errors;if(c!=null){let m=s.findIndex(h=>h.route.id&&c?.[h.route.id]!==void 0);lt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let d=!1,f=-1;if(l)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=m),h.route.id){let{loaderData:v,errors:w}=l,y=h.route.loader&&!v.hasOwnProperty(h.route.id)&&(!w||w[h.route.id]===void 0);if(h.route.lazy||y){d=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((m,h,v)=>{let w,y=!1,S=null,T=null;l&&(w=c&&h.route.id?c[h.route.id]:void 0,S=h.route.errorElement||ax,d&&(f<0&&v===0?(R2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,T=null):f===v&&(y=!0,T=h.route.hydrateFallbackElement||null)));let E=a.concat(s.slice(0,v+1)),D=()=>{let x;return w?x=S:y?x=T:h.route.Component?x=M.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=m,M.createElement(lx,{match:h,routeContext:{outlet:m,matches:E,isDataRoute:l!=null},children:x})};return l&&(h.route.ErrorBoundary||h.route.errorElement||v===0)?M.createElement(rx,{location:l.location,revalidation:l.revalidation,component:S,error:w,children:D(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):D()},null)}function eh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ix(t){let a=M.useContext(to);return lt(a,eh(t)),a}function sx(t){let a=M.useContext(Yc);return lt(a,eh(t)),a}function cx(t){let a=M.useContext(Yn);return lt(a,eh(t)),a}function th(t){let a=cx(t),l=a.matches[a.matches.length-1];return lt(l.route.id,`${t} can only be used on routes that contain a unique "id"`),l.route.id}function ux(){return th("useRouteId")}function dx(){let t=M.useContext(Qp),a=sx("useRouteError"),l=th("useRouteError");return t!==void 0?t:a.errors?.[l]}function fx(){let{router:t}=ix("useNavigate"),a=th("useNavigate"),l=M.useRef(!1);return U2(()=>{l.current=!0}),M.useCallback(async(s,c={})=>{zn(l.current,z2),l.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:a,...c}))},[t,a])}var B1={};function R2(t,a,l){!a&&!B1[t]&&(B1[t]=!0,zn(!1,l))}M.memo(px);function px({routes:t,future:a,state:l}){return j2(t,void 0,l,a)}function Dn(t){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hx({basename:t="/",children:a=null,location:l,navigationType:o="POP",navigator:s,static:c=!1}){lt(!Ri(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),f=M.useMemo(()=>({basename:d,navigator:s,static:c,future:{}}),[d,s,c]);typeof l=="string"&&(l=eo(l));let{pathname:m="/",search:h="",hash:v="",state:w=null,key:y="default"}=l,S=M.useMemo(()=>{let T=xa(m,d);return T==null?null:{location:{pathname:T,search:h,hash:v,state:w,key:y},navigationType:o}},[d,m,h,v,w,y,o]);return zn(S!=null,`<Router basename="${d}"> is not able to match the URL "${m}${h}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:M.createElement(In.Provider,{value:f},M.createElement(ji.Provider,{children:a,value:S}))}function mx({children:t,location:a}){return tx(gp(t),a)}function gp(t,a=[]){let l=[];return M.Children.forEach(t,(o,s)=>{if(!M.isValidElement(o))return;let c=[...a,s];if(o.type===M.Fragment){l.push.apply(l,gp(o.props.children,c));return}lt(o.type===Dn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=gp(o.props.children,c)),l.push(d)}),l}var yc="get",bc="application/x-www-form-urlencoded";function Wc(t){return t!=null&&typeof t.tagName=="string"}function gx(t){return Wc(t)&&t.tagName.toLowerCase()==="button"}function wx(t){return Wc(t)&&t.tagName.toLowerCase()==="form"}function vx(t){return Wc(t)&&t.tagName.toLowerCase()==="input"}function yx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bx(t,a){return t.button===0&&(!a||a==="_self")&&!yx(t)}function wp(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((a,l)=>{let o=t[l];return a.concat(Array.isArray(o)?o.map(s=>[l,s]):[[l,o]])},[]))}function xx(t,a){let l=wp(t);return a&&a.forEach((o,s)=>{l.has(s)||a.getAll(s).forEach(c=>{l.append(s,c)})}),l}var tc=null;function Sx(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var Tx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Df(t){return t!=null&&!Tx.has(t)?(zn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bc}"`),null):t}function _x(t,a){let l,o,s,c,d;if(wx(t)){let f=t.getAttribute("action");o=f?xa(f,a):null,l=t.getAttribute("method")||yc,s=Df(t.getAttribute("enctype"))||bc,c=new FormData(t)}else if(gx(t)||vx(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(o=m?xa(m,a):null,l=t.getAttribute("formmethod")||f.getAttribute("method")||yc,s=Df(t.getAttribute("formenctype"))||Df(f.getAttribute("enctype"))||bc,c=new FormData(f,t),!Sx()){let{name:h,type:v,value:w}=t;if(v==="image"){let y=h?`${h}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else h&&c.append(h,w)}}else{if(Wc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=yc,o=null,s=bc,d=t}return c&&s==="text/plain"&&(d=c,c=void 0),{action:o,method:l.toLowerCase(),encType:s,formData:c,body:d}}function nh(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}async function kx(t,a){if(t.id in a)return a[t.id];try{let l=await import(t.module);return a[t.id]=l,l}catch(l){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mx(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Ex(t,a,l){let o=await Promise.all(t.map(async s=>{let c=a.routes[s.route.id];if(c){let d=await kx(c,l);return d.links?d.links():[]}return[]}));return Ax(o.flat(1).filter(Mx).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function H1(t,a,l,o,s,c){let d=(m,h)=>l[h]?m.route.id!==l[h].route.id:!0,f=(m,h)=>l[h].pathname!==m.pathname||l[h].route.path?.endsWith("*")&&l[h].params["*"]!==m.params["*"];return c==="assets"?a.filter((m,h)=>d(m,h)||f(m,h)):c==="data"?a.filter((m,h)=>{let v=o.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(d(m,h)||f(m,h))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Dx(t,a,{includeHydrateFallback:l}={}){return Cx(t.map(o=>{let s=a.routes[o.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),l&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function Cx(t){return[...new Set(t)]}function Nx(t){let a={},l=Object.keys(t).sort();for(let o of l)a[o]=t[o];return a}function Ax(t,a){let l=new Set;return new Set(a),t.reduce((o,s)=>{let c=JSON.stringify(Nx(s));return l.has(c)||(l.add(c),o.push({key:c,link:s})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zx=new Set([100,101,204,205]);function Ux(t,a){let l=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return l.pathname==="/"?l.pathname="_root.data":a&&xa(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.data`:l.pathname=`${l.pathname.replace(/\/$/,"")}.data`,l}function O2(){let t=M.useContext(to);return nh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function jx(){let t=M.useContext(Yc);return nh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var ah=M.createContext(void 0);ah.displayName="FrameworkContext";function q2(){let t=M.useContext(ah);return nh(t,"You must render this element inside a <HydratedRouter> element"),t}function Rx(t,a){let l=M.useContext(ah),[o,s]=M.useState(!1),[c,d]=M.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:h,onMouseLeave:v,onTouchStart:w}=a,y=M.useRef(null);M.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let E=x=>{x.forEach(N=>{d(N.isIntersecting)})},D=new IntersectionObserver(E,{threshold:.5});return y.current&&D.observe(y.current),()=>{D.disconnect()}}},[t]),M.useEffect(()=>{if(o){let E=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(E)}}},[o]);let S=()=>{s(!0)},T=()=>{s(!1),d(!1)};return l?t!=="intent"?[c,y,{}]:[c,y,{onFocus:si(f,S),onBlur:si(m,T),onMouseEnter:si(h,S),onMouseLeave:si(v,T),onTouchStart:si(w,S)}]:[!1,y,{}]}function si(t,a){return l=>{t&&t(l),l.defaultPrevented||a(l)}}function Ox({page:t,...a}){let{router:l}=O2(),o=M.useMemo(()=>k2(l.routes,t,l.basename),[l.routes,t,l.basename]);return o?M.createElement(Lx,{page:t,matches:o,...a}):null}function qx(t){let{manifest:a,routeModules:l}=q2(),[o,s]=M.useState([]);return M.useEffect(()=>{let c=!1;return Ex(t,a,l).then(d=>{c||s(d)}),()=>{c=!0}},[t,a,l]),o}function Lx({page:t,matches:a,...l}){let o=Sa(),{manifest:s,routeModules:c}=q2(),{basename:d}=O2(),{loaderData:f,matches:m}=jx(),h=M.useMemo(()=>H1(t,a,m,s,o,"data"),[t,a,m,s,o]),v=M.useMemo(()=>H1(t,a,m,s,o,"assets"),[t,a,m,s,o]),w=M.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let T=new Set,E=!1;if(a.forEach(x=>{let N=s.routes[x.route.id];!N||!N.hasLoader||(!h.some(R=>R.route.id===x.route.id)&&x.route.id in f&&c[x.route.id]?.shouldRevalidate||N.hasClientLoader?E=!0:T.add(x.route.id))}),T.size===0)return[];let D=Ux(t,d);return E&&T.size>0&&D.searchParams.set("_routes",a.filter(x=>T.has(x.route.id)).map(x=>x.route.id).join(",")),[D.pathname+D.search]},[d,f,o,s,h,a,t,c]),y=M.useMemo(()=>Dx(v,s),[v,s]),S=qx(v);return M.createElement(M.Fragment,null,w.map(T=>M.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...l})),y.map(T=>M.createElement("link",{key:T,rel:"modulepreload",href:T,...l})),S.map(({key:T,link:E})=>M.createElement("link",{key:T,...E})))}function Zx(...t){return a=>{t.forEach(l=>{typeof l=="function"?l(a):l!=null&&(l.current=a)})}}var L2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{L2&&(window.__reactRouterVersion="7.6.3")}catch{}function Bx({basename:t,children:a,window:l}){let o=M.useRef();o.current==null&&(o.current=M3({window:l,v5Compat:!0}));let s=o.current,[c,d]=M.useState({action:s.action,location:s.location}),f=M.useCallback(m=>{M.startTransition(()=>d(m))},[d]);return M.useLayoutEffect(()=>s.listen(f),[s,f]),M.createElement(hx,{basename:t,children:a,location:c.location,navigationType:c.action,navigator:s})}var Z2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B2=M.forwardRef(function({onClick:a,discover:l="render",prefetch:o="none",relative:s,reloadDocument:c,replace:d,state:f,target:m,to:h,preventScrollReset:v,viewTransition:w,...y},S){let{basename:T}=M.useContext(In),E=typeof h=="string"&&Z2.test(h),D,x=!1;if(typeof h=="string"&&E&&(D=h,L2))try{let re=new URL(window.location.href),ie=h.startsWith("//")?new URL(re.protocol+h):new URL(h),se=xa(ie.pathname,T);ie.origin===re.origin&&se!=null?h=se+ie.search+ie.hash:x=!0}catch{zn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=J3(h,{relative:s}),[R,H,q]=Rx(o,y),V=Fx(h,{replace:d,state:f,target:m,preventScrollReset:v,relative:s,viewTransition:w});function ee(re){a&&a(re),re.defaultPrevented||V(re)}let J=M.createElement("a",{...y,...q,href:D||N,onClick:x||c?a:ee,ref:Zx(S,H),target:m,"data-discover":!E&&l==="render"?"true":void 0});return R&&!E?M.createElement(M.Fragment,null,J,M.createElement(Ox,{page:N})):J});B2.displayName="Link";var Kt=M.forwardRef(function({"aria-current":a="page",caseSensitive:l=!1,className:o="",end:s=!1,style:c,to:d,viewTransition:f,children:m,...h},v){let w=Oi(d,{relative:h.relative}),y=Sa(),S=M.useContext(Yc),{navigator:T,basename:E}=M.useContext(In),D=S!=null&&Wx(w)&&f===!0,x=T.encodeLocation?T.encodeLocation(w).pathname:w.pathname,N=y.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;l||(N=N.toLowerCase(),R=R?R.toLowerCase():null,x=x.toLowerCase()),R&&E&&(R=xa(R,E)||R);const H=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let q=N===x||!s&&N.startsWith(x)&&N.charAt(H)==="/",V=R!=null&&(R===x||!s&&R.startsWith(x)&&R.charAt(x.length)==="/"),ee={isActive:q,isPending:V,isTransitioning:D},J=q?a:void 0,re;typeof o=="function"?re=o(ee):re=[o,q?"active":null,V?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let ie=typeof c=="function"?c(ee):c;return M.createElement(B2,{...h,"aria-current":J,className:re,ref:v,style:ie,to:d,viewTransition:f},typeof m=="function"?m(ee):m)});Kt.displayName="NavLink";var Hx=M.forwardRef(({discover:t="render",fetcherKey:a,navigate:l,reloadDocument:o,replace:s,state:c,method:d=yc,action:f,onSubmit:m,relative:h,preventScrollReset:v,viewTransition:w,...y},S)=>{let T=Ix(),E=Yx(f,{relative:h}),D=d.toLowerCase()==="get"?"get":"post",x=typeof f=="string"&&Z2.test(f),N=R=>{if(m&&m(R),R.defaultPrevented)return;R.preventDefault();let H=R.nativeEvent.submitter,q=H?.getAttribute("formmethod")||d;T(H||R.currentTarget,{fetcherKey:a,method:q,navigate:l,replace:s,state:c,relative:h,preventScrollReset:v,viewTransition:w})};return M.createElement("form",{ref:S,method:D,action:E,onSubmit:o?m:N,...y,"data-discover":!x&&t==="render"?"true":void 0})});Hx.displayName="Form";function $x(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H2(t){let a=M.useContext(to);return lt(a,$x(t)),a}function Fx(t,{target:a,replace:l,state:o,preventScrollReset:s,relative:c,viewTransition:d}={}){let f=Jp(),m=Sa(),h=Oi(t,{relative:c});return M.useCallback(v=>{if(bx(v,a)){v.preventDefault();let w=l!==void 0?l:xi(m)===xi(h);f(t,{replace:w,state:o,preventScrollReset:s,relative:c,viewTransition:d})}},[m,f,h,l,o,a,t,s,c,d])}function Bk(t){zn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let a=M.useRef(wp(t)),l=M.useRef(!1),o=Sa(),s=M.useMemo(()=>xx(o.search,l.current?null:a.current),[o.search]),c=Jp(),d=M.useCallback((f,m)=>{const h=wp(typeof f=="function"?f(s):f);l.current=!0,c("?"+h,m)},[c,s]);return[s,d]}var Gx=0,Px=()=>`__${String(++Gx)}__`;function Ix(){let{router:t}=H2("useSubmit"),{basename:a}=M.useContext(In),l=ux();return M.useCallback(async(o,s={})=>{let{action:c,method:d,encType:f,formData:m,body:h}=_x(o,a);if(s.navigate===!1){let v=s.fetcherKey||Px();await t.fetch(v,l,s.action||c,{preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||d,formEncType:s.encType||f,flushSync:s.flushSync})}else await t.navigate(s.action||c,{preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||d,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:l,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,a,l])}function Yx(t,{relative:a}={}){let{basename:l}=M.useContext(In),o=M.useContext(Yn);lt(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),c={...Oi(t||".",{relative:a})},d=Sa();if(t==null){c.search=d.search;let f=new URLSearchParams(c.search),m=f.getAll("index");if(m.some(v=>v==="")){f.delete("index"),m.filter(w=>w).forEach(w=>f.append("index",w));let v=f.toString();c.search=v?`?${v}`:""}}return(!t||t===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(c.pathname=c.pathname==="/"?l:va([l,c.pathname])),xi(c)}function Wx(t,a={}){let l=M.useContext(A2);lt(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=H2("useViewTransitionState"),s=Oi(t,{relative:a.relative});if(!l.isTransitioning)return!1;let c=xa(l.currentLocation.pathname,o)||l.currentLocation.pathname,d=xa(l.nextLocation.pathname,o)||l.nextLocation.pathname;return Nc(s.pathname,d)!=null||Nc(s.pathname,c)!=null}[...zx];var $2=_2();const Vx=S2($2),Xx="modulepreload",Kx=function(t){return"/"+t},$1={},Wn=function(a,l,o){let s=Promise.resolve();if(l&&l.length>0){let m=function(h){return Promise.all(h.map(v=>Promise.resolve(v).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=d?.nonce||d?.getAttribute("nonce");s=m(l.map(h=>{if(h=Kx(h),h in $1)return;$1[h]=!0;const v=h.endsWith(".css"),w=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${w}`))return;const y=document.createElement("link");if(y.rel=v?"stylesheet":Xx,v||(y.as="script"),y.crossOrigin="",y.href=h,f&&y.setAttribute("nonce",f),document.head.appendChild(y),v)return new Promise((S,T)=>{y.addEventListener("load",S),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function c(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return s.then(d=>{for(const f of d||[])f.status==="rejected"&&c(f.reason);return a().catch(c)})};var Cf={exports:{}},Nf={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1;function Qx(){if(F1)return Nf;F1=1;var t=Ic().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Nf.c=function(a){return t.H.useMemoCache(a)},Nf}var G1;function Jx(){return G1||(G1=1,Cf.exports=Qx()),Cf.exports}var no=Jx();const gi=[{name:"arsenal",slug:"arsenal",title:"Arsenal",description:"Spazierengehen - Vom Hauptbahnhof nach Simmering. Technologie, Bäume & Panzer.",images:[{filename:"Altes Backsteingebäude.jpg",latitude:48.183372,longitude:16.392936,createDate:"2025-04-20T09:37:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.183372,16.392936",alt:null},{filename:"Bürohaus und Zaun.jpg",latitude:48.182872,longitude:16.391942,createDate:"2025-04-20T09:35:42.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.182872,16.391942",alt:null},{filename:"Gebäude und 3 Fahnenmäste.jpg",latitude:48.182206,longitude:16.390731,createDate:"2025-04-20T09:34:16.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.182206,16.390731",alt:null},{filename:"Gebäude und Bäume.jpg",latitude:48.182494,longitude:16.391122,createDate:"2025-04-20T09:34:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.182494,16.391122",alt:null},{filename:"Gebäude und Fussgängerweg.jpg",latitude:48.181928,longitude:16.390136,createDate:"2025-04-20T09:33:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.181928,16.390136",alt:null},{filename:"Panzer vor einer Garage.jpg",latitude:48.1827,longitude:16.394,createDate:"2025-04-20T09:38:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.1827,16.394",alt:null},{filename:"Radioturm Arsenal.jpg",latitude:48.181961,longitude:16.390197,createDate:"2025-04-20T09:33:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.181961,16.390197",alt:null},{filename:"Radioturm mit Auto davor.jpg",latitude:48.183189,longitude:16.393117,createDate:"2025-04-20T09:37:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.183189,16.393117",alt:null},{filename:"Rote Wand und Bäume Arsenal.jpg",latitude:48.183075,longitude:16.392044,createDate:"2025-04-20T09:35:58.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.183075,16.392044",alt:null},{filename:"Weg im Arsenal mit Laterne.jpg",latitude:48.182044,longitude:16.390392,createDate:"2025-04-20T09:33:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.182044,16.390392",alt:null},{filename:"Zaun mit Gebäude.jpg",latitude:48.182694,longitude:16.391783,createDate:"2025-04-20T09:35:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.182694,16.391783",alt:null}],timeframe:"20. April 2025",imageCount:11},{name:"berlin",slug:"berlin",title:"Berlin",description:"*Jo — eh schiach*",images:[{filename:"Berliner Hauptbahnhof von Innen mit Blick auf den Washingtonplatz.jpg",latitude:52.523789,longitude:13.369997,createDate:"2023-08-15T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.523789,13.369997",alt:null},{filename:"Berliner Hauptbahnhof von Innen.jpg",latitude:52.524533,longitude:13.369892,createDate:"2023-08-15T06:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.524533,13.369892",alt:null},{filename:"Eingelegte Sardinen im Raster geschlichtet.jpg",latitude:52.518742,longitude:13.408022,createDate:"2023-08-14T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.518742,13.408022",alt:null},{filename:"Fahrräder, Autos und Häuser in Berlin Neukölln.jpg",latitude:52.494972,longitude:13.421853,createDate:"2023-08-14T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.494972,13.421853",alt:null},{filename:"Fernsehturm am Alexanderplatz.jpg",latitude:52.518097,longitude:13.406433,createDate:"2023-08-15T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.518097,13.406433",alt:null},{filename:"Getränke Hoffmann Schild an einem Wohnhaus in Berlin.jpg",latitude:52.492272,longitude:13.416881,createDate:"2023-08-15T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.492272,13.416881",alt:null},{filename:"Großer Park vor dem Schloss Sansouci in Potsdam.jpg",latitude:52.404192,longitude:13.038433,createDate:"2023-08-16T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.404192,13.038433",alt:null},{filename:"Hochhaus Upper West von Kantstrasse aufgenommen.jpg",latitude:52.505053,longitude:13.332972,createDate:"2023-08-16T12:34:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.505053,13.332972",alt:null},{filename:"Jesus-Statue in der Kaiser-Wilhelm-Gedächtniskirche.jpg",latitude:52.504758,longitude:13.335239,createDate:"2023-08-14T12:34:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.504758,13.335239",alt:"A picture of the Berlin TV Tower"},{filename:"KaDeWe nähe Zoologischer Garten.jpg",latitude:52.501736,longitude:13.341056,createDate:"2023-08-16T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.501736,13.341056",alt:null},{filename:"Landwehrkanal am Maybachkai.jpg",latitude:52.495617,longitude:13.420594,createDate:"2023-08-13T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.495617,13.420594",alt:null},{filename:"Park Inn am Alexanderplatz.jpg",latitude:52.522811,longitude:13.413103,createDate:"2023-08-14T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.522811,13.413103",alt:null},{filename:"Schloss Sansouci in Potsdam.jpg",latitude:52.404192,longitude:13.038433,createDate:"2023-08-16T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.404192,13.038433",alt:null},{filename:"U-Bahn Station Kottbusser Tor vom Bahnsteig nach Außen.jpg",latitude:52.4988,longitude:13.418322,createDate:"2023-08-13T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=52.4988,13.418322",alt:null}],timeframe:"13. August 2023 - 16. August 2023",imageCount:14},{name:"beton-und-struktur",slug:"beton-und-struktur",title:"Beton & Struktur",description:"Beton, Struktur, Architektur, Kultur, Bahnhöfe, Gehsteige, Zebrastreifen, Statuen, Lugner, Licht & Schatten.",images:[{filename:"'Einfahrt freihalten' Schild auf einem Zaun vor einem Baugrund.jpg",latitude:48.173267,longitude:16.407208,createDate:"2025-07-26T15:44:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.173267,16.407208",alt:null},{filename:"'Gartenbaukino' Schriftzug am Stubenring.jpg",latitude:48.205733,longitude:16.378619,createDate:"2025-07-27T08:41:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205733,16.378619",alt:null},{filename:"'Simmering Regiert' Graffitti.jpg",latitude:48.168475,longitude:16.417436,createDate:"2025-05-02T15:45:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168475,16.417436",alt:null},{filename:"3 Müllcontainer, eine Mauer und Himmel in der Lorystrasse.jpg",latitude:48.169175,longitude:16.416547,createDate:"2025-05-02T15:47:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169175,16.416547",alt:null},{filename:"76A Bus in der nähe des Enkplatz.jpg",latitude:48.174133,longitude:16.416464,createDate:"2025-04-25T15:39:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.174133,16.416464",alt:null},{filename:"Albertina Dachterasse Clubbing und Statue.jpg",latitude:48.204525,longitude:16.368617,createDate:"2025-05-28T17:41:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204525,16.368617",alt:null},{filename:"Albin-Hirsch-Platz und Grünfläche in Simmering.jpg",latitude:48.167781,longitude:16.417983,createDate:"2025-08-02T05:06:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.167781,16.417983",alt:null},{filename:"Anton-Schmid-Hof Wien .jpg",latitude:48.199047,longitude:16.380219,createDate:"2025-05-02T15:17:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199047,16.380219",alt:null},{filename:"Anton-Schmid-Hof Wien 2.jpg",latitude:48.199006,longitude:16.378989,createDate:"2025-05-02T15:18:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199006,16.378989",alt:null},{filename:"Arena Wien bei Nacht.jpg",latitude:48.187514,longitude:16.412656,createDate:"2025-04-23T18:59:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.187514,16.412656",alt:null},{filename:"Arsenalsteg mit Blick auf Hauptbahnhof.jpg",latitude:48.180686,longitude:16.387744,createDate:"2025-04-20T09:29:58.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.180686,16.387744",alt:null},{filename:"Arsenalsteg und Radioturm.jpg",latitude:48.179886,longitude:16.386161,createDate:"2025-04-20T09:28:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.179886,16.386161",alt:null},{filename:"Auto-Auffahrt.jpg",latitude:48.160858,longitude:16.430958,createDate:"2025-06-01T06:33:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.160858,16.430958",alt:null},{filename:"Autobahnauffahrt und Grünfläche in der nähe der Geiereckstrasse.jpg",latitude:48.186092,longitude:16.413206,createDate:"2025-06-01T13:40:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.186092,16.413206",alt:null},{filename:"Äußere Mariahilfer-Strasse Richtung Penzing.jpg",latitude:48.191886,longitude:16.332106,createDate:"2025-07-30T15:29:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.191886,16.332106",alt:null},{filename:"BIM Station und Neubau-Gürtel bei der Burggasse.jpg",latitude:48.201878,longitude:16.337144,createDate:"2025-05-03T11:40:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.201878,16.337144",alt:null},{filename:"Basketballkäfig.jpg",latitude:48.168469,longitude:16.418028,createDate:"2025-07-15T06:00:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168469,16.418028",alt:null},{filename:"Baum und Basketball-Käfig.jpg",latitude:48.168353,longitude:16.417556,createDate:"2025-05-02T14:32:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168353,16.417556",alt:null},{filename:"Baustelle Wien.jpg",latitude:48.223858,longitude:16.393481,createDate:"2025-07-15T16:37:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.223858,16.393481",alt:null},{filename:"Baustelle mit Bau-Zaun und Skulptur dahinter.jpg",latitude:48.162914,longitude:16.429156,createDate:"2025-07-27T13:36:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.162914,16.429156",alt:null},{filename:"Bäume und Büsche an der Simmeringer S-Bahn.jpg",latitude:48.169014,longitude:16.416828,createDate:"2024-07-23T06:01:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169014,16.416828",alt:null},{filename:"Bäume und Dächer am Donaukanal während der Dämmerung.jpg",latitude:48.221325,longitude:16.367619,createDate:"2025-07-15T19:04:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.221325,16.367619",alt:null},{filename:"Beachvolleyball am Donaukanal.jpg",latitude:48.22055,longitude:16.367939,createDate:"2025-07-15T19:06:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.22055,16.367939",alt:null},{filename:"Beschmiertes Karl-Lueger-Denkmal am Stubenring.jpg",latitude:48.207589,longitude:16.380006,createDate:"2025-07-27T08:38:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.207589,16.380006",alt:null},{filename:"Bezirksmuseum Wien Landstrasse.jpg",latitude:48.201386,longitude:16.387961,createDate:"2025-05-02T15:07:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.201386,16.387961",alt:null},{filename:"Blumen-Buquets vor einem Asphaltboden in Simmering.jpg",latitude:48.169933,longitude:16.427206,createDate:"2025-07-26T12:26:37.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169933,16.427206",alt:null},{filename:"Brücke über die Donauinsel in Brigittenau.jpg",latitude:48.254253,longitude:16.380364,createDate:"2025-05-10T12:33:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.254253,16.380364",alt:null},{filename:"Das österreichische Parlament - Nordrampe.jpg",latitude:48.208242,longitude:16.359903,createDate:"2025-05-05T07:37:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.208242,16.359903",alt:null},{filename:"Der Karl-Marx-Hof Gemeindebau in Heiligenstadt.jpg",latitude:48.249478,longitude:16.364239,createDate:"2025-07-12T15:51:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.249478,16.364239",alt:null},{filename:"Echoes Schriftzug Hauptbibliothek Wien.jpg",latitude:48.203186,longitude:16.337078,createDate:"2025-05-03T11:37:10.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203186,16.337078",alt:null},{filename:"Ein Gebäude mit einem 'Nimm dein Sackerl fürs Gackerl' Papp-Aufsteller davor.jpg",latitude:48.176692,longitude:16.409042,createDate:"2025-07-26T15:36:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.176692,16.409042",alt:null},{filename:"Ein Mensch sitzt vor einem Gebäude in der Erdbergstrasse.jpg",latitude:48.202733,longitude:16.391633,createDate:"2025-07-25T11:45:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202733,16.391633",alt:null},{filename:"Ein Weg am Donaukanal.jpg",latitude:48.226181,longitude:16.366172,createDate:"2025-07-15T18:57:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.226181,16.366172",alt:null},{filename:"Eingang Belvedere am Rennweg 2.jpg",latitude:48.197028,longitude:16.380692,createDate:"2025-05-02T15:22:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.197028,16.380692",alt:null},{filename:"Eingang Belvedere am Rennweg.jpg",latitude:48.197242,longitude:16.379769,createDate:"2025-05-02T15:21:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.197242,16.379769",alt:null},{filename:"Eingang Gemeindebau Wien.jpg",latitude:48.233425,longitude:16.388417,createDate:"2025-07-15T16:52:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.233425,16.388417",alt:null},{filename:"Eingang Gemeindebau.jpg",latitude:48.1684,longitude:16.423244,createDate:"2025-06-29T10:35:58.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.1684,16.423244",alt:null},{filename:"Eingang und Wand-Uhr des Wiener Westbahnhofes.jpg",latitude:48.19725,longitude:16.337719,createDate:"2024-06-07T15:33:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.19725,16.337719",alt:null},{filename:"Eingang zu einem Gemeindebau Innenhof und Park.jpg",latitude:48.198947,longitude:16.382642,createDate:"2025-05-02T15:15:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.198947,16.382642",alt:null},{filename:"Eingang zu einem Gemeindebau nahe Rochusmarkt.jpg",latitude:48.202319,longitude:16.395164,createDate:"2025-07-25T11:48:30.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202319,16.395164",alt:null},{filename:"Eingangstor uz einem Gemeindebau in der Lorystrasse.jpg",latitude:48.169717,longitude:16.416008,createDate:"2025-07-13T13:28:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169717,16.416008",alt:null},{filename:"Engel-Statuen.jpg",latitude:48.200011,longitude:16.387772,createDate:"2025-05-02T15:09:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.200011,16.387772",alt:null},{filename:"Evangelische Kirche Simmering.jpg",latitude:48.169978,longitude:16.414044,createDate:"2025-07-13T13:26:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169978,16.414044",alt:null},{filename:"Fabriksgelände in Brigittenau.jpg",latitude:48.236172,longitude:16.385681,createDate:"2025-07-15T16:57:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.236172,16.385681",alt:null},{filename:"Fassade Cafe Weidinger am Neubau-Gürtel.jpg",latitude:48.20415,longitude:16.336481,createDate:"2025-05-03T11:35:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.20415,16.336481",alt:null},{filename:"Fassade der Votivkirche und Park davor.jpg",latitude:48.215033,longitude:16.358572,createDate:"2025-07-29T07:03:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215033,16.358572",alt:null},{filename:"Fassade des Salvador-Allende-Hofs in Simmering .jpg",latitude:48.162964,longitude:16.427539,createDate:"2025-06-01T06:38:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.162964,16.427539",alt:null},{filename:"Fassade eine Wohnhauses in der Landstrasse.jpg",latitude:48.199825,longitude:16.387606,createDate:"2025-05-02T15:09:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199825,16.387606",alt:null},{filename:"Fassade eines Hauses in Ottakring.jpg",latitude:48.207714,longitude:16.309044,createDate:"2025-06-07T15:53:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.207714,16.309044",alt:null},{filename:"Fassade und Baum Widholz-Hof.jpg",latitude:48.174494,longitude:16.410661,createDate:"2025-05-10T11:24:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.174494,16.410661",alt:null},{filename:"Fussgängerweg Simmering.jpg",latitude:48.168983,longitude:16.418758,createDate:"2025-05-04T05:09:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168983,16.418758",alt:null},{filename:"Fussgängerweg neben der Lorystrasse.jpg",latitude:48.168872,longitude:16.416753,createDate:"2025-05-02T14:31:53.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168872,16.416753",alt:null},{filename:"Geimeindebau in Brigittenau.jpg",latitude:48.241303,longitude:16.380889,createDate:"2025-04-26T17:25:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.241303,16.380889",alt:null},{filename:"Geländer und U-Bahn Station Rossauer Lände.jpg",latitude:48.222558,longitude:16.367436,createDate:"2025-07-15T19:03:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.222558,16.367436",alt:null},{filename:"Gemeindebau im 1. Bezirk.jpg",latitude:48.204853,longitude:16.372997,createDate:"2025-07-27T08:48:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204853,16.372997",alt:null},{filename:"Gemeindebau in Wien.jpg",latitude:48.198017,longitude:16.335486,createDate:"2025-05-03T10:58:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.198017,16.335486",alt:null},{filename:"Gemeindebau in der Kaiser-Ebersdorfer-Strasse.jpg",latitude:48.165367,longitude:16.430989,createDate:"2025-07-27T13:32:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.165367,16.430989",alt:null},{filename:"Gemeindebau, Baum und Grünfläche in Simmering.jpg",latitude:48.168206,longitude:16.412992,createDate:"2025-07-26T15:58:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168206,16.412992",alt:null},{filename:"Gemma Lugner Schriftzug am Neubau-Gürtel.jpg",latitude:48.204003,longitude:16.336544,createDate:"2025-05-03T11:36:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204003,16.336544",alt:null},{filename:"Geschlossene Trafik in der U-Bahn Station Volkstheater.jpg",latitude:48.2066,longitude:16.360278,createDate:"2025-07-14T18:17:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.2066,16.360278",alt:null},{filename:"Gleise und Radioturm in Wien in der nähe des Hauptbahnhofes.jpg",latitude:48.182247,longitude:16.384303,createDate:"2025-04-20T09:24:05.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.182247,16.384303",alt:null},{filename:"Grünfläche, Bäume und Wohnhaus am Kanal Simmering.jpg",latitude:48.158444,longitude:16.424008,createDate:"2025-05-29T08:20:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.158444,16.424008",alt:null},{filename:"Handelskai - Millenium City Fussgängerzone.jpg",latitude:48.240156,longitude:16.385886,createDate:"2025-07-15T17:06:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.240156,16.385886",alt:null},{filename:"Handelskai Durchgang Wehlistrasse.jpg",latitude:48.241619,longitude:16.384619,createDate:"2025-04-21T16:29:50.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.241619,16.384619",alt:null},{filename:"Handelskai Fussgängeraufgang S-Bahn Station.jpg",latitude:48.242469,longitude:16.385989,createDate:"2025-05-10T15:17:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.242469,16.385989",alt:null},{filename:"Handelskai S-Bahnstation Außenansicht Brigittenau.jpg",latitude:48.241947,longitude:16.384497,createDate:"2025-05-10T15:27:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.241947,16.384497",alt:null},{filename:"Handelskai Unterführung Fussgänger und Radweg.jpg",latitude:48.241558,longitude:16.384994,createDate:"2025-05-10T15:25:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.241558,16.384994",alt:null},{filename:"Hauptbibliothek und U-Bahn Burggasse Gürtel.jpg",latitude:48.203336,longitude:16.337169,createDate:"2025-05-03T11:36:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203336,16.337169",alt:null},{filename:"Hochhäuser in Wien Erdberg nahe Gasometer.jpg",latitude:48.185806,longitude:16.413911,createDate:"2025-04-23T20:40:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185806,16.413911",alt:null},{filename:"Hyblerpark und Wohnhäuser.jpg",latitude:48.181586,longitude:16.411972,createDate:"2025-04-23T17:35:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.181586,16.411972",alt:null},{filename:"Innenansicht Albert Schweitzer Haus auf die Garnisongasse.jpg",latitude:48.216494,longitude:16.356881,createDate:"2025-05-02T10:48:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216494,16.356881",alt:null},{filename:"Innenansicht Heidi Horten Collection.jpg",latitude:48.203903,longitude:16.367511,createDate:"2025-07-27T09:48:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203903,16.367511",alt:null},{filename:"Keiner-Stuben Cafe und Bar und Fussgängerdurchgang nahe Kardinal-Nagl-Platz.jpg",latitude:48.198822,longitude:16.399586,createDate:"2025-07-25T11:53:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.198822,16.399586",alt:null},{filename:"Kirche Wien Penzing Breitenseerstrasse.jpg",latitude:48.201831,longitude:16.308058,createDate:"2025-06-07T20:14:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.201831,16.308058",alt:null},{filename:"Kleines Haus in Simmering.jpg",latitude:48.160958,longitude:16.430558,createDate:"2025-05-29T08:48:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.160958,16.430558",alt:null},{filename:"Kleines Materl und Graffitti in der Geiselbergstrasse .jpg",latitude:48.174889,longitude:16.407264,createDate:"2025-05-10T11:27:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.174889,16.407264",alt:null},{filename:"Krankenhauseingang in Brigittenau.jpg",latitude:48.237469,longitude:16.383744,createDate:"2025-07-15T16:59:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.237469,16.383744",alt:null},{filename:"Kreisverkehr beim Zentralfriedhof Tor 11.jpg",latitude:48.154797,longitude:16.426722,createDate:"2025-05-29T08:23:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.154797,16.426722",alt:null},{filename:"Laterne auf Betonplatz Brigittenau.jpg",latitude:48.231597,longitude:16.390483,createDate:"2025-07-15T16:49:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.231597,16.390483",alt:null},{filename:"Laternen beim Hyblerpark im Regen.jpg",latitude:48.181872,longitude:16.413875,createDate:"2025-04-18T10:09:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.181872,16.413875",alt:null},{filename:"Lila getsrichenes Wohnhaus in der Braunhubergasse.jpg",latitude:48.169789,longitude:16.412914,createDate:"2025-07-13T13:24:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169789,16.412914",alt:null},{filename:"Lorystrasse 77 in Simmering .jpg",latitude:48.168781,longitude:16.417067,createDate:"2025-05-02T15:46:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168781,16.417067",alt:null},{filename:"Milchglaswand Albert Schweitzer Haus.jpg",latitude:48.216675,longitude:16.35685,createDate:"2025-07-09T07:58:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216675,16.35685",alt:null},{filename:"Millenium Tower von der Donau aus.jpg",latitude:48.243858,longitude:16.390128,createDate:"2025-05-10T15:10:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.243858,16.390128",alt:null},{filename:"Neubaugürtel und BIM Station bei der Burggasse.jpg",latitude:48.201675,longitude:16.336906,createDate:"2025-05-03T11:39:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.201675,16.336906",alt:null},{filename:"Obst-Stand bei der Rochhusgasse.jpg",latitude:48.202786,longitude:16.391031,createDate:"2025-05-22T06:15:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202786,16.391031",alt:null},{filename:"Parkbank am Stuben-Ring an Stadtpark-Mauer.jpg",latitude:48.204869,longitude:16.378467,createDate:"2025-07-14T16:00:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204869,16.378467",alt:null},{filename:"Parlament und Athene.jpg",latitude:48.208453,longitude:16.359864,createDate:"2025-05-05T07:37:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.208453,16.359864",alt:null},{filename:"Ringstrasse im Regen.jpg",latitude:48.206025,longitude:16.360444,createDate:"2025-06-07T13:27:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206025,16.360444",alt:null},{filename:"Rossauer Kaserne.jpg",latitude:48.218628,longitude:16.368933,createDate:"2025-07-15T19:09:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.218628,16.368933",alt:null},{filename:"Roy Lichetnstein Gemälde und Innerum der Heidi Horten Collection.jpg",latitude:48.203994,longitude:16.367664,createDate:"2025-07-27T09:19:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203994,16.367664",alt:null},{filename:"S-Bahn Station Grillgassse.jpg",latitude:48.167317,longitude:16.407628,createDate:"2025-04-13T11:53:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.167317,16.407628",alt:null},{filename:"S-Bahn Station Wien Simmering.jpg",latitude:48.169953,longitude:16.419403,createDate:"2025-05-11T13:28:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169953,16.419403",alt:null},{filename:"Schmetterling-Attrapen an der Glas-Decke des Zentrum Simmering.jpg",latitude:48.173319,longitude:16.416597,createDate:"2025-07-25T15:44:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.173319,16.416597",alt:null},{filename:"Schottenring Richtung Leopolstadt.jpg",latitude:48.218053,longitude:16.369561,createDate:"2025-07-15T19:10:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.218053,16.369561",alt:null},{filename:"Schottenring.jpg",latitude:48.217422,longitude:16.370125,createDate:"2025-07-15T19:12:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.217422,16.370125",alt:null},{filename:"Simmering U-Bahn Stadtauswärts.jpg",latitude:48.169636,longitude:16.420636,createDate:"2025-05-02T15:40:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169636,16.420636",alt:null},{filename:"Sonnenschutzkonstruke bei der Burggasse in Rudolfsheim-Fünfhaus.jpg",latitude:48.201789,longitude:16.337164,createDate:"2025-05-03T11:40:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.201789,16.337164",alt:null},{filename:"Spielplatz am Donaukanal.jpg",latitude:48.224244,longitude:16.367244,createDate:"2025-07-15T19:00:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.224244,16.367244",alt:null},{filename:"Spielplatz bei der Wohnanlage Hasenleiten.jpg",latitude:48.165025,longitude:16.416342,createDate:"2025-08-02T05:13:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.165025,16.416342",alt:null},{filename:"Statue Garnisongasse.jpg",latitude:48.216647,longitude:16.356478,createDate:"2025-07-07T08:17:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216647,16.356478",alt:null},{filename:"Statue im Stadtpark und rote Blumen.jpg",latitude:48.206183,longitude:16.380597,createDate:"2025-07-14T15:57:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206183,16.380597",alt:null},{filename:"Statuen auf einem Gemeindebau.jpg",latitude:48.199325,longitude:16.383333,createDate:"2025-05-02T15:14:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199325,16.383333",alt:null},{filename:"Statuen benannt nach österreichischen Flüssen nahe Albertina.jpg",latitude:48.204211,longitude:16.368397,createDate:"2025-07-27T10:05:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204211,16.368397",alt:null},{filename:"Stiege und Brücke in Brigittenau.jpg",latitude:48.231067,longitude:16.391083,createDate:"2025-07-15T16:48:10.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.231067,16.391083",alt:null},{filename:"Stillgelegte Fabrik in Brigittenau.jpg",latitude:48.235122,longitude:16.386739,createDate:"2025-07-15T16:55:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.235122,16.386739",alt:null},{filename:"Strand auf Donauinsel mit Blick auf Millenium Tower.jpg",latitude:48.252056,longitude:16.382144,createDate:"2025-05-10T12:37:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.252056,16.382144",alt:null},{filename:"Strasse mit Wohnhäusern.jpg",latitude:48.241436,longitude:16.381792,createDate:"2025-04-26T17:26:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.241436,16.381792",alt:null},{filename:"Strasse und Unterführung in der Landstrasse.jpg",latitude:48.198953,longitude:16.38115,createDate:"2025-05-02T15:16:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.198953,16.38115",alt:null},{filename:"Südtirolerplatz - Hauptbahnhof.jpg",latitude:48.185756,longitude:16.375636,createDate:"2025-06-05T17:40:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185756,16.375636",alt:null},{filename:"Tankstelle Wien Zentralfriedhof in Simmering.jpg",latitude:48.1596,longitude:16.432486,createDate:"2025-06-03T17:44:10.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.1596,16.432486",alt:null},{filename:"Treppe Hauptbibliothek bei der Burggasse in Rudolfsheim-Fünfhaus.jpg",latitude:48.202117,longitude:16.337203,createDate:"2025-05-03T11:41:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202117,16.337203",alt:null},{filename:"U-Bahn Quader Symbol bei der Burggase in Rudolfsheim-Fünfhaus.jpg",latitude:48.201886,longitude:16.337122,createDate:"2025-05-03T11:40:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.201886,16.337122",alt:null},{filename:"U-Bahn Station Kendlerstrasse.jpg",latitude:48.200256,longitude:16.311017,createDate:"2025-06-07T20:18:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.200256,16.311017",alt:null},{filename:"U-Bahn Station Stubentor Stiegen und Lifte durch Glas.jpg",latitude:48.207092,longitude:16.380056,createDate:"2025-07-27T08:39:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.207092,16.380056",alt:null},{filename:"VHS Simmering.jpg",latitude:48.174267,longitude:16.41165,createDate:"2025-05-10T16:03:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.174267,16.41165",alt:null},{filename:"Votivkirche von Blick Richtung Schottentor.jpg",latitude:48.214017,longitude:16.361797,createDate:"2025-04-21T13:08:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.214017,16.361797",alt:null},{filename:"Weg zum im Hyblerpark Richtung Gasometer.jpg",latitude:48.181714,longitude:16.412022,createDate:"2025-04-23T17:36:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.181714,16.412022",alt:null},{filename:"Weisse Rose in einem Aschenbecher.jpg",latitude:48.169839,longitude:16.420197,createDate:"2025-05-29T06:47:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169839,16.420197",alt:null},{filename:"Wien Energie Kraftwerk in Simmering.jpg",latitude:48.181389,longitude:16.398206,createDate:"2025-04-20T09:44:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.181389,16.398206",alt:null},{filename:"Wien Simmerung U-Bahn und Kran.jpg",latitude:48.169617,longitude:16.419389,createDate:"2025-05-02T14:34:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169617,16.419389",alt:null},{filename:"Wiener-Linien Zentrale Wien Erdberg Kunderservice.jpg",latitude:48.189767,longitude:16.414433,createDate:"2025-06-01T12:28:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.189767,16.414433",alt:null},{filename:"Wienfluss mit Universität für Angewandte Kunst.jpg",latitude:48.206794,longitude:16.382514,createDate:"2025-05-14T06:35:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206794,16.382514",alt:null},{filename:"Wohnhaus Durchgang zu Innenhof und weiteren Wohnungen.jpg",latitude:48.170964,longitude:16.426986,createDate:"2025-07-26T12:23:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170964,16.426986",alt:null},{filename:"Wohnhaus im Sonneschein.jpg",latitude:48.172869,longitude:16.409564,createDate:"2024-07-19T15:24:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.172869,16.409564",alt:null},{filename:"Wohnhaus in Simmering.jpg",latitude:48.168975,longitude:16.421569,createDate:"2025-04-18T13:24:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168975,16.421569",alt:null},{filename:"Wohnhaus mit Balkonen beim Rochusmarkt.jpg",latitude:48.202356,longitude:16.394811,createDate:"2025-07-25T11:47:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202356,16.394811",alt:null},{filename:"Wohnhausanlage in der Lorystrasse.jpg",latitude:48.167044,longitude:16.418656,createDate:"2025-08-02T05:07:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.167044,16.418656",alt:null},{filename:"Würstelstand bei der Burggasse in Rudolfsheim-Fünfhaus.jpg",latitude:48.202117,longitude:16.337203,createDate:"2025-05-03T11:41:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202117,16.337203",alt:null},{filename:"Zebrastreifen in Wien Simmering.jpg",latitude:48.178458,longitude:16.394178,createDate:"2025-04-20T09:52:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.178458,16.394178",alt:null},{filename:"Zebrastreifen vor dem Wienfluss in der nähe von Wien Mitte.jpg",latitude:48.206467,longitude:16.383042,createDate:"2025-07-14T15:55:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206467,16.383042",alt:null}],timeframe:"7. Juni 2024 - 2. August 2025",imageCount:131},{name:"graz",slug:"graz",title:"Graz",description:"Hauptplatz, viele Stufen & 1 Regenbogen.",images:[{filename:"'Würde' Graffitti Schriftzug.jpg",latitude:47.065875,longitude:15.423422,createDate:"2025-07-21T21:20:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.065875,15.423422",alt:null},{filename:"24h Shop am Griesplatz .jpg",latitude:47.066758,longitude:15.428022,createDate:"2025-07-21T20:56:02.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.066758,15.428022",alt:null},{filename:"Altes Möbelhaus Graz nähe Jakominiplatz.jpg",latitude:47.068131,longitude:15.444769,createDate:"2025-07-21T17:05:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.068131,15.444769",alt:null},{filename:"Aufgang über Schlossbergstiege zum Uhrturm und Kasematten.jpg",latitude:47.073247,longitude:15.436944,createDate:"2025-07-21T17:52:02.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.073247,15.436944",alt:null},{filename:"Betonstruktur Brücke bei der Mur.jpg",latitude:47.070781,longitude:15.435519,createDate:"2025-07-21T16:27:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.070781,15.435519",alt:null},{filename:"Betonstruktur Fussgängerstiege bei der Mur.jpg",latitude:47.070775,longitude:15.43545,createDate:"2025-07-21T16:32:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.070775,15.43545",alt:null},{filename:"Blick auf Graz mit Bäumen davor bei Sonnenuntergang.jpg",latitude:47.073394,longitude:15.437331,createDate:"2025-07-21T17:55:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.073394,15.437331",alt:null},{filename:"Blick auf die Grazer Innenstadt bei Nacht.jpg",latitude:47.074317,longitude:15.4366,createDate:"2025-07-21T20:22:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.074317,15.4366",alt:null},{filename:"Blick auf die Grazer Innenstandt vom Schlossberg.jpg",latitude:47.073506,longitude:15.436625,createDate:"2025-07-21T17:56:50.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.073506,15.436625",alt:null},{filename:"Brunnen Graz nähe Jakominiplatz.jpg",latitude:47.0682,longitude:15.441733,createDate:"2025-07-21T17:00:22.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.0682,15.441733",alt:null},{filename:"Bushaltestelle Graz.jpg",latitude:47.069119,longitude:15.435683,createDate:"2025-07-21T20:43:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.069119,15.435683",alt:null},{filename:"Chinesischer Pavillon am Schlossberg.jpg",latitude:47.074708,longitude:15.437128,createDate:"2025-07-21T17:59:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.074708,15.437128",alt:null},{filename:"Creditanstalt Bank Graz.jpg",latitude:47.069542,longitude:15.4405,createDate:"2025-07-21T16:57:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.069542,15.4405",alt:null},{filename:"Fabriksgelände in der Josef-Huber-Gasse bei Nacht.jpg",latitude:47.065747,longitude:15.422117,createDate:"2025-07-21T21:04:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.065747,15.422117",alt:null},{filename:"Fahnen und Statuen auf dem Rathaus der Stadt Graz.jpg",latitude:47.070775,longitude:15.43835,createDate:"2025-07-21T16:49:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.070775,15.43835",alt:null},{filename:"Geschäftslokal Baustelle in der Innenstadt.jpg",latitude:47.069631,longitude:15.438239,createDate:"2025-07-21T20:39:44.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.069631,15.438239",alt:null},{filename:"Grell ausgeleuchtetes Antiquitäten-Geschäft-Schaufenster bei Nacht.jpg",latitude:47.072839,longitude:15.436306,createDate:"2025-07-21T20:32:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.072839,15.436306",alt:null},{filename:"Hauptplatz bei Nacht.jpg",latitude:47.0708,longitude:15.438069,createDate:"2025-07-21T20:37:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.0708,15.438069",alt:null},{filename:"Hochhaus am Griesplatz.jpg",latitude:47.066406,longitude:15.431294,createDate:"2025-07-21T20:53:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.066406,15.431294",alt:null},{filename:"Häuser Schlossbergstiege bei Nacht.jpg",latitude:47.073219,longitude:15.437003,createDate:"2025-07-21T20:30:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.073219,15.437003",alt:null},{filename:"Jakominiplatz bei Regen.jpg",latitude:47.066986,longitude:15.441636,createDate:"2025-07-21T17:43:58.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.066986,15.441636",alt:null},{filename:"Jakominiplatz.jpg",latitude:47.067531,longitude:15.442253,createDate:"2025-07-21T17:02:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.067531,15.442253",alt:null},{filename:"Kasematten Konzert.jpg",latitude:47.076211,longitude:15.437172,createDate:"2025-07-21T19:08:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.076211,15.437172",alt:null},{filename:"Kasematten mit Blick auf Himmel.jpg",latitude:47.076389,longitude:15.437192,createDate:"2025-07-21T18:38:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.076389,15.437192",alt:null},{filename:"Ortsschild Graz Autobahnabfahrt Süd.jpg",latitude:47.032167,longitude:15.412222,createDate:"2025-07-21T13:57:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.032167,15.412222",alt:null},{filename:"Puntigamer Laternen.jpg",latitude:47.066433,longitude:15.431408,createDate:"2025-07-21T20:53:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.066433,15.431408",alt:null},{filename:"Regenbogen am Grazer Schlossberg.jpg",latitude:47.073692,longitude:15.437558,createDate:"2025-07-21T17:57:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.073692,15.437558",alt:null},{filename:"Sonnenterasse am Schlossberg in Graz bei Sonnenuntergang.jpg",latitude:47.074836,longitude:15.437069,createDate:"2025-07-21T17:59:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.074836,15.437069",alt:null},{filename:"Spielplatz Josef-Huber-Park nähe Eggenberger Gürtel Graz bei Nacht.jpg",latitude:47.065997,longitude:15.422139,createDate:"2025-07-21T21:05:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.065997,15.422139",alt:null},{filename:"Statue am Hauptplatz.jpg",latitude:47.071042,longitude:15.438156,createDate:"2025-07-21T16:50:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.071042,15.438156",alt:null},{filename:"Tennis Graffitti.jpg",latitude:47.065986,longitude:15.423369,createDate:"2025-07-21T21:00:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.065986,15.423369",alt:null},{filename:"Turm am Schlossberg.jpg",latitude:47.075886,longitude:15.437569,createDate:"2025-07-21T18:01:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.075886,15.437569",alt:null},{filename:"Uhrturm Nahaufnahme.jpg",latitude:47.073611,longitude:15.437589,createDate:"2025-07-21T17:56:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.073611,15.437589",alt:null},{filename:"Uhrturm bei Nacht.jpg",latitude:47.07385,longitude:15.437303,createDate:"2025-07-21T20:25:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.07385,15.437303",alt:null},{filename:"Uhrturm von der Innenstadt aus.jpg",latitude:47.072767,longitude:15.436361,createDate:"2025-07-21T20:32:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.072767,15.436361",alt:null},{filename:"WWF Beton Plakate.jpg",latitude:47.066281,longitude:15.425953,createDate:"2025-07-21T20:58:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.066281,15.425953",alt:null}],timeframe:"21. Juli 2025",imageCount:36},{name:"kaernten-koroska",slug:"kaernten-koroska",title:"Kärnten / Koroška",description:"Ab in den Süden. *Proti jugu.*",images:[{filename:"'Ich liebe dich' Graffitti Klagenfurt.jpg",latitude:46.616161,longitude:14.308681,createDate:"2025-07-20T18:06:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.616161,14.308681",alt:null},{filename:"A1 Hauptzentrale Feuerstiegen in Klagenfurt.jpg",latitude:46.621958,longitude:14.305153,createDate:"2025-07-20T17:43:42.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.621958,14.305153",alt:null},{filename:"Arkardenhof Klagenfurt.jpg",latitude:46.625503,longitude:14.307908,createDate:"2025-07-21T07:35:22.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.625503,14.307908",alt:null},{filename:"Basketballkorb über einer Haustür Klagenfurt.jpg",latitude:46.626483,longitude:14.3065,createDate:"2025-07-20T15:26:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.626483,14.3065",alt:null},{filename:"Benediktinerkirche Klagenfurt 2.jpg",latitude:46.626228,longitude:14.307481,createDate:"2025-07-21T07:08:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.626228,14.307481",alt:null},{filename:"Benediktinerkirche in Klagenfurt.jpg",latitude:46.626183,longitude:14.3074,createDate:"2025-07-21T07:09:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.626183,14.3074",alt:null},{filename:"Benediktinermarkt Uhr in Klagenfurt.jpg",latitude:46.622872,longitude:14.306,createDate:"2025-07-21T08:33:50.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622872,14.306",alt:null},{filename:"Buchhandlung Gute Nachricht Klagenfurt.jpg",latitude:46.626369,longitude:14.311086,createDate:"2025-07-20T12:38:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.626369,14.311086",alt:null},{filename:"Bus Hauptbahnhof Klagenfurt.jpg",latitude:46.6166,longitude:14.311928,createDate:"2025-07-21T11:59:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.6166,14.311928",alt:null},{filename:"Bushaltestelle am Wörthersee in Klagenfurt.jpg",latitude:46.622703,longitude:14.255239,createDate:"2025-07-20T14:31:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622703,14.255239",alt:null},{filename:"Die Lavant in Wolfsberg.jpg",latitude:46.840017,longitude:14.843519,createDate:"2025-07-19T15:53:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.840017,14.843519",alt:null},{filename:"Dom und Kapuzinerkirche Klagenfurt Kärnten.jpg",latitude:46.626381,longitude:14.311836,createDate:"2025-07-20T19:05:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.626381,14.311836",alt:null},{filename:"Fischer-Statue Benediktinermarkt Klagenfurt.jpg",latitude:46.622792,longitude:14.306056,createDate:"2025-07-21T08:31:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622792,14.306056",alt:null},{filename:"Fischerwirt St Margareten bei Wolfsberg.jpg",latitude:46.865619,longitude:14.782633,createDate:"2025-07-19T18:10:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.865619,14.782633",alt:null},{filename:"Garageneinfahrt und Park Klagenfurt.jpg",latitude:46.623997,longitude:14.302508,createDate:"2025-07-20T15:33:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.623997,14.302508",alt:null},{filename:"Gasflaschen im Fischerwirt St. Margarethen bei Wolfsberg.jpg",latitude:46.865806,longitude:14.782853,createDate:"2025-07-19T18:09:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.865806,14.782853",alt:null},{filename:"Gemälde Jesus Kapelle Klagenfurt.jpg",latitude:46.622708,longitude:14.306478,createDate:"2025-07-21T08:38:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622708,14.306478",alt:null},{filename:"Graffitti Auslage Klagenfurt.jpg",latitude:46.62515,longitude:14.309306,createDate:"2025-07-20T12:33:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.62515,14.309306",alt:null},{filename:"Hauptbahnhof Klagenfurt.jpg",latitude:46.616233,longitude:14.313658,createDate:"2025-07-21T11:30:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.616233,14.313658",alt:null},{filename:"Hauseingang Klagenfurt.jpg",latitude:46.626025,longitude:14.306869,createDate:"2025-07-21T07:15:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.626025,14.306869",alt:null},{filename:"Holzfisch Fischerwirt St Margareten.jpg",latitude:46.865739,longitude:14.782789,createDate:"2025-07-19T18:09:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.865739,14.782789",alt:null},{filename:"Jesus-Kreuz in Wolfsberg.jpg",latitude:46.840028,longitude:14.84355,createDate:"2025-07-19T15:54:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.840028,14.84355",alt:null},{filename:"Kapelle auf einem Berg bei Mallnitz in Kärnten.jpg",latitude:46.967381,longitude:13.193314,createDate:"2025-07-19T10:15:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.967381,13.193314",alt:null},{filename:"Kirche Deckenfassade Klagenfurt Kärnten.jpg",latitude:46.626228,longitude:14.307467,createDate:"2025-07-21T07:09:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.626228,14.307467",alt:null},{filename:"Kirche in Villach.jpg",latitude:46.613292,longitude:13.845847,createDate:"2025-07-19T12:43:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.613292,13.845847",alt:null},{filename:"Kur-Anstalt Optima Med in St. Margareten Kärnten.jpg",latitude:46.873825,longitude:14.775747,createDate:"2025-07-19T18:05:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.873825,14.775747",alt:null},{filename:"Lavant in Wolfsberg 2.jpg",latitude:46.838422,longitude:14.843519,createDate:"2025-07-19T16:10:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.838422,14.843519",alt:null},{filename:"Lindwurm Klagenfurt Kärnten 2.jpg",latitude:46.623967,longitude:14.307844,createDate:"2025-07-20T12:14:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.623967,14.307844",alt:null},{filename:"Lindwurm Klagenfurt Kärnten 3.jpg",latitude:46.624053,longitude:14.307789,createDate:"2025-07-20T12:14:50.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.624053,14.307789",alt:null},{filename:"Lindwurm Klagenfurt Kärnten.jpg",latitude:46.624008,longitude:14.307756,createDate:"2025-07-20T12:13:44.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.624008,14.307756",alt:null},{filename:"Marktamt Klagenfurt Kärnten.jpg",latitude:46.622892,longitude:14.306003,createDate:"2025-07-21T08:31:50.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622892,14.306003",alt:null},{filename:"Offener Reisekoffer mit Büchern verstreut vor einem Geschäft in Klagenfurt.jpg",latitude:46.622986,longitude:14.304922,createDate:"2025-07-20T17:45:05.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622986,14.304922",alt:null},{filename:"Park und Häuser Klagenfurt Kärnten.jpg",latitude:46.621825,longitude:14.303786,createDate:"2025-07-20T17:49:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.621825,14.303786",alt:null},{filename:"Pestsäule am Alten Platz in Klagenfurt Kärnten.jpg",latitude:46.625306,longitude:14.307778,createDate:"2025-07-20T12:04:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.625306,14.307778",alt:null},{filename:"Pyramidenkogel Innen-Ausblick auf den Wörthersee Kärnten 2.jpg",latitude:46.608844,longitude:14.145178,createDate:"2025-07-20T10:00:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.608844,14.145178",alt:null},{filename:"Pyramidenkogel Innenausblick Kärnten.jpg",latitude:46.614814,longitude:14.121894,createDate:"2025-07-20T09:58:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.614814,14.121894",alt:null},{filename:"Stadtbrunnen Klagenfurt Kärnten.jpg",latitude:46.62455,longitude:14.308033,createDate:"2025-07-20T12:31:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.62455,14.308033",alt:null},{filename:"Statue Landesregierung Klagenfurt Kärnten.jpg",latitude:46.621292,longitude:14.310967,createDate:"2025-07-20T18:22:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.621292,14.310967",alt:null},{filename:"Stiege in der Innenstadt Klagenfurt Kärnten.jpg",latitude:46.621042,longitude:14.306292,createDate:"2025-07-20T17:40:53.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.621042,14.306292",alt:null},{filename:"Udo-Jürgens-Promenade Klagenfurt Kärnten.jpg",latitude:46.623086,longitude:14.252092,createDate:"2025-07-20T14:19:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.623086,14.252092",alt:null},{filename:"Wasser Wörthersee Klagenfurt Kärnten.jpg",latitude:46.622769,longitude:14.252847,createDate:"2025-07-20T13:00:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622769,14.252847",alt:null},{filename:"Wörthersee Promenade Klagenfurt Kärnten.jpg",latitude:46.622169,longitude:14.254164,createDate:"2025-07-20T12:58:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622169,14.254164",alt:null},{filename:"Wörthersee Schiffanlegestelle Klagenfurt Kärnten.jpg",latitude:46.622453,longitude:14.253317,createDate:"2025-07-20T12:59:44.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=46.622453,14.253317",alt:null}],timeframe:"19. Juli 2025 - 21. Juli 2025",imageCount:43},{name:"kleinlobming",slug:"kleinlobming",title:"Kleinlobming",description:"Keine Menschen, viele Bäume",images:[{filename:"Blick über das Kleinlobmingtal.jpg",latitude:47.133819,longitude:14.874467,createDate:"2024-08-24T09:13:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.133819,14.874467",alt:null},{filename:"Bäume auf einem Berg im Kleinlobmingtal.jpg",latitude:47.133167,longitude:14.874389,createDate:"2024-08-24T09:34:44.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.133167,14.874389",alt:null},{filename:"Ferienhaus in einer Lichtung mit Liegestühlen.jpg",latitude:47.134494,longitude:14.869739,createDate:"2024-08-26T05:15:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.134494,14.869739",alt:null},{filename:"Sternenhimmel Kleinlobming Steiermark.jpg",latitude:47.134614,longitude:14.869656,createDate:"2024-08-23T20:36:37.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.134614,14.869656",alt:null}],timeframe:"23. August 2024 - 26. August 2024",imageCount:4},{name:"lisboa",slug:"lisboa",title:"Lisboa",description:"Vale a pena a viagem, possivelmente com uma passagem só de ida.",images:[{filename:"'Hello World' Neon-Schriftzug vor Häusern und Brücke.jpg",latitude:38.703011,longitude:-9.178928,createDate:"2018-11-21T16:31:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.703011,-9.178928",alt:"Hisilicon Balong"},{filename:"Azul-Fliesen in Grün und Blau.jpg",latitude:38.710667,longitude:-9.141656,createDate:"2018-11-20T10:00:05.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.710667,-9.141656",alt:"Hisilicon Balong"},{filename:"Blau-leuchtende Qualle im Ozeanium.jpg",latitude:38.763369,longitude:-9.093719,createDate:"2018-11-22T12:03:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.763369,-9.093719",alt:"Hisilicon Balong"},{filename:"Brücke über den Tajo Fluss mit Blick auf Lissabon.jpg",latitude:38.678614,longitude:-9.171356,createDate:"2018-11-20T16:03:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.678614,-9.171356",alt:"Hisilicon Balong"},{filename:"Der Atlantik und eine Bucht mit Leuchttum.jpg",latitude:38.683419,longitude:-9.31415,createDate:"2018-11-21T13:23:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.683419,-9.31415",alt:"Hisilicon Balong"},{filename:"Die Altstadt von Lissabon.jpg",latitude:38.715242,longitude:-9.144369,createDate:"2018-11-19T11:11:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.715242,-9.144369",alt:"Hisilicon Balong"},{filename:"Dom-Kuppel in Se de Lisboa.jpg",latitude:38.713175,longitude:-9.127778,createDate:"2018-11-19T15:31:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.713175,-9.127778",alt:"Hisilicon Balong"},{filename:"Hausfassade mit Satelliten-Schüsseln in der Altstadt von Lissabon.jpg",latitude:38.709792,longitude:-9.136431,createDate:"2018-11-19T13:55:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.709792,-9.136431",alt:"Hisilicon Balong"},{filename:"Schmale Gasse und BIM Gleise.jpg",latitude:38.707842,longitude:-9.138886,createDate:"2018-11-20T09:27:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.707842,-9.138886",alt:"Hisilicon Balong"},{filename:"Statuen Frontansicht.jpg",latitude:38.715592,longitude:-9.145636,createDate:"2018-11-20T09:53:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.715592,-9.145636",alt:"Hisilicon Balong"},{filename:"Statuen, nummeriert und beschriftet.jpg",latitude:38.715592,longitude:-9.145636,createDate:"2018-11-20T09:52:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=38.715592,-9.145636",alt:"Hisilicon Balong"}],timeframe:"19. November 2018 - 22. November 2018",imageCount:11},{name:"mayday",slug:"mayday",title:"Mayday",description:"Der 1. Mai am Wiener-Rathausplatz & im Wurstelprater. Langos, Bier & Freundschaft.",images:[{filename:"'Hoch der erste Mai' am Rathausplatz Wien Innere Stadt.jpg",latitude:48.210525,longitude:16.358989,createDate:"2025-05-01T09:22:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.210525,16.358989",alt:null},{filename:"'Kaptalismus entsorgen' Plakat und Demonstranten auf der Ringstrasse.jpg",latitude:48.207139,longitude:16.3597,createDate:"2025-05-01T08:59:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.207139,16.3597",alt:null},{filename:"'Wir in Wien halten zusammen' Banner am Rathaus in Wien.jpg",latitude:48.211181,longitude:16.35855,createDate:"2025-05-01T09:51:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.211181,16.35855",alt:null},{filename:"48er auf der Ringstrasse vor dem Parlament.jpg",latitude:48.207958,longitude:16.359894,createDate:"2025-05-01T09:01:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.207958,16.359894",alt:null},{filename:"Achterbahn Totalansicht Wurstelprater Wien.jpg",latitude:48.215558,longitude:16.398789,createDate:"2025-05-01T10:32:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215558,16.398789",alt:null},{filename:"Achterbahn Wurstelprater Wien.jpg",latitude:48.216133,longitude:16.398347,createDate:"2025-05-01T10:31:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216133,16.398347",alt:null},{filename:"Athene Parlamanet Ringstrasse Wien.jpg",latitude:48.207936,longitude:16.359811,createDate:"2025-05-01T09:01:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.207936,16.359811",alt:null},{filename:"Autodrom Wurstelprater.jpg",latitude:48.216861,longitude:16.396319,createDate:"2025-05-01T15:46:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216861,16.396319",alt:null},{filename:"Ball Ball Wurstelprater.jpg",latitude:48.216019,longitude:16.398375,createDate:"2025-05-01T10:31:50.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216019,16.398375",alt:null},{filename:"Burgtheater.jpg",latitude:48.209867,longitude:16.360381,createDate:"2025-05-01T09:04:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.209867,16.360381",alt:null},{filename:"Die gesengte Sau Wurstelprater.jpg",latitude:48.215764,longitude:16.398489,createDate:"2025-05-01T10:32:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215764,16.398489",alt:null},{filename:"Die wilde Maus Totalansicht Wurstelprater.jpg",latitude:48.2151,longitude:16.399356,createDate:"2025-05-01T10:34:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.2151,16.399356",alt:null},{filename:"Die wilde Maus Wurstelprater.jpg",latitude:48.215069,longitude:16.399456,createDate:"2025-05-01T10:34:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215069,16.399456",alt:null},{filename:"Eine Achterbahn und das Riesenrad im Prater.jpg",latitude:48.216039,longitude:16.397747,createDate:"2025-05-01T10:30:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216039,16.397747",alt:null},{filename:"Fahrradfahrer und Demo auf Ringstrasse.jpg",latitude:48.207492,longitude:16.359689,createDate:"2025-05-01T09:00:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.207492,16.359689",alt:null},{filename:"Fontäne Wurstelprater.jpg",latitude:48.216233,longitude:16.398181,createDate:"2025-05-01T10:31:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216233,16.398181",alt:null},{filename:"Freundschaft Rathausplatz.jpg",latitude:48.210561,longitude:16.360014,createDate:"2025-05-01T09:06:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.210561,16.360014",alt:null},{filename:"Geiselbergstrasse.jpg",latitude:48.174572,longitude:16.410278,createDate:"2025-05-01T16:36:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.174572,16.410278",alt:null},{filename:"Go-Card fahren Wurstelprater.jpg",latitude:48.216286,longitude:16.397525,createDate:"2025-05-01T10:29:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216286,16.397525",alt:null},{filename:"Karussell Wurstelprater.jpg",latitude:48.217328,longitude:16.395811,createDate:"2025-05-01T15:47:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.217328,16.395811",alt:null},{filename:"Liliputbahn Wurstelprater.jpg",latitude:48.215917,longitude:16.396686,createDate:"2025-05-01T15:38:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215917,16.396686",alt:null},{filename:"Prater Hauptalle 3.jpg",latitude:48.214419,longitude:16.397739,createDate:"2025-05-01T15:35:44.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.214419,16.397739",alt:null},{filename:"Prater Hauptallee 2.jpg",latitude:48.213722,longitude:16.398669,createDate:"2025-05-01T15:34:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.213722,16.398669",alt:null},{filename:"Prater Hauptallee.jpg",latitude:48.213733,longitude:16.398706,createDate:"2025-05-01T15:33:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.213733,16.398706",alt:null},{filename:"Prater Schriftzug.jpg",latitude:48.217383,longitude:16.395767,createDate:"2025-05-01T15:47:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.217383,16.395767",alt:null},{filename:"Praterstern BIM Station.jpg",latitude:48.218267,longitude:16.391383,createDate:"2025-05-01T15:58:02.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.218267,16.391383",alt:null},{filename:"Praterstern S-Bahn Bahnsteig 2.jpg",latitude:48.218892,longitude:16.391956,createDate:"2025-05-01T16:05:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.218892,16.391956",alt:null},{filename:"Praterstern S-Bahn Bahnsteig.jpg",latitude:48.218922,longitude:16.391997,createDate:"2025-05-01T16:04:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.218922,16.391997",alt:null},{filename:"Rathaus von Wien am ersten Mai.jpg",latitude:48.211181,longitude:16.358508,createDate:"2025-05-01T09:51:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.211181,16.358508",alt:null},{filename:"Ringstrasse Parlament.jpg",latitude:48.206608,longitude:16.360297,createDate:"2025-05-01T08:58:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206608,16.360297",alt:null},{filename:"Ringstrasse Volkstheater Parlament.jpg",latitude:48.206844,longitude:16.360006,createDate:"2025-05-01T08:58:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206844,16.360006",alt:null},{filename:"Ringstrasse autofrei am ersten Mai.jpg",latitude:48.205731,longitude:16.361333,createDate:"2025-05-01T08:56:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205731,16.361333",alt:null},{filename:"Ringstrasse vor dem Parlament.jpg",latitude:48.2075,longitude:16.359675,createDate:"2025-05-01T09:00:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.2075,16.359675",alt:null},{filename:"Rot-Weisse Rutschen im Wurstelprater.jpg",latitude:48.215286,longitude:16.399131,createDate:"2025-05-01T10:33:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215286,16.399131",alt:null},{filename:"Schweizerhaus Hintereingang.jpg",latitude:48.213511,longitude:16.401242,createDate:"2025-05-01T10:50:10.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.213511,16.401242",alt:null},{filename:"Turbo Autodrom im Wurstelprater Wien.jpg",latitude:48.215183,longitude:16.399372,createDate:"2025-05-01T10:34:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215183,16.399372",alt:null},{filename:"Turbo Autodrom mit Familien davor im Wurstelprater.jpg",latitude:48.215039,longitude:16.399642,createDate:"2025-05-01T10:34:53.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215039,16.399642",alt:null},{filename:"Wurstelprater 2.jpg",latitude:48.217022,longitude:16.396231,createDate:"2025-05-01T15:46:22.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.217022,16.396231",alt:null},{filename:"Wurstelprater mit Drachen.jpg",latitude:48.216175,longitude:16.398031,createDate:"2025-05-01T10:31:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216175,16.398031",alt:null},{filename:"Wurstelprater.jpg",latitude:48.216628,longitude:16.397244,createDate:"2025-05-01T15:43:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.216628,16.397244",alt:null}],timeframe:"1. Mai 2025",imageCount:40},{name:"nhm",slug:"nhm",title:"Naturhistorisches Museum",description:"Kleine Taferl lesen, Steine schauen & eine Katze.",images:[{filename:"Ausgestopfte Katze in einem Schaukasten im NHM.jpg",latitude:48.204956,longitude:16.360739,createDate:"2025-06-07T13:10:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204956,16.360739",alt:null},{filename:"Ausstellungsraum mit Schaukästen für Steine und Mineralien im NHM.jpg",latitude:48.204903,longitude:16.360542,createDate:"2025-06-07T12:46:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204903,16.360542",alt:null},{filename:"Ausstellungsraum mit Wandbildern NHM 2.jpg",latitude:48.206031,longitude:16.360542,createDate:"2025-06-07T12:49:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206031,16.360542",alt:null},{filename:"Ausstellungsraum mit Wandbildern NHM.jpg",latitude:48.204986,longitude:16.360767,createDate:"2025-06-07T12:46:50.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204986,16.360767",alt:null},{filename:"Besucher schauen auf Steine in Schaukästen.jpg",latitude:48.205983,longitude:16.359889,createDate:"2025-06-07T13:39:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205983,16.359889",alt:null},{filename:"Dinosaurier und Besucher im NHM 2.jpg",latitude:48.205789,longitude:16.359275,createDate:"2025-06-07T12:50:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205789,16.359275",alt:null},{filename:"Dinosaurier und Besucher im NHM.jpg",latitude:48.205719,longitude:16.359147,createDate:"2025-06-07T12:50:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205719,16.359147",alt:null},{filename:"Leuchtende Wand im NHM.jpg",latitude:48.204953,longitude:16.358825,createDate:"2025-06-07T12:52:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204953,16.358825",alt:null},{filename:"Mammut mit Rüssel und Hörnern im NHM.jpg",latitude:48.205406,longitude:16.359233,createDate:"2025-06-07T14:02:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205406,16.359233",alt:null},{filename:"Mammut-Rüssel im NHM.jpg",latitude:48.205728,longitude:16.359125,createDate:"2025-06-07T12:51:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205728,16.359125",alt:null},{filename:"Marmor-Stiegen zu einem Ausstellungsraum im NHM.jpg",latitude:48.204942,longitude:16.360272,createDate:"2025-06-07T12:57:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204942,16.360272",alt:null},{filename:"Mutter und Kind vor Schaukasten NHM.jpg",latitude:48.2049,longitude:16.360639,createDate:"2025-06-07T12:46:22.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.2049,16.360639",alt:null},{filename:"Schaukasten mit Steinen NHM.jpg",latitude:48.204964,longitude:16.360769,createDate:"2025-06-07T12:46:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204964,16.360769",alt:null},{filename:"Schaukästen in einem Ausstellungsraum.jpg",latitude:48.205944,longitude:16.360539,createDate:"2025-06-07T13:18:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205944,16.360539",alt:null},{filename:"Stiegen-Aufgang zu einem Austellungsraum im NHM.jpg",latitude:48.204869,longitude:16.360233,createDate:"2025-06-07T12:45:16.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204869,16.360233",alt:null},{filename:"Von der Decke hängende Steine im NHM.jpg",latitude:48.206006,longitude:16.360533,createDate:"2025-06-07T13:29:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206006,16.360533",alt:null}],timeframe:"7. Juni 2025",imageCount:16},{name:"oeffis",slug:"oeffis",title:"Öffis",description:"Tschu Tschu, Brum Brum, *Quietsch*, Tschu Tschu",images:[{filename:"'Bitte alle Einstiege benützen' Schriftzug in U-Bahn Station.jpg",latitude:48.208156,longitude:16.371689,createDate:"2025-08-01T13:31:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.208156,16.371689",alt:null},{filename:"'Der Weg nach Europa' Metallfries in der U-Bahn Station Westbahnhof.jpg",latitude:48.196022,longitude:16.340636,createDate:"2025-07-30T18:30:02.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.196022,16.340636",alt:null},{filename:"'Marchegg' Schild in einem Zug am Hauptbahnhof.jpg",latitude:48.185244,longitude:16.379136,createDate:"2025-05-04T14:14:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185244,16.379136",alt:null},{filename:"3 Telefone in der BIM Station Schottentor.jpg",latitude:48.214,longitude:16.362003,createDate:"2025-08-01T13:12:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.214,16.362003",alt:null},{filename:"71er Fenster zum Schwarzenbergplatz.jpg",latitude:48.2011,longitude:16.374708,createDate:"2025-04-23T05:20:37.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.2011,16.374708",alt:null},{filename:"Alte BIM von Innen.jpg",latitude:48.209511,longitude:16.360369,createDate:"2025-05-20T15:00:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.209511,16.360369",alt:null},{filename:"Aufgang Westbahntrasse zum Fussgängersteg.jpg",latitude:48.193394,longitude:16.326389,createDate:"2024-04-11T18:01:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.193394,16.326389",alt:null},{filename:"BIM Retunda in Simmering.jpg",latitude:48.166503,longitude:16.424153,createDate:"2025-06-01T06:43:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.166503,16.424153",alt:null},{filename:"BIM Station beim Schottentor.jpg",latitude:48.214,longitude:16.361961,createDate:"2025-04-21T13:06:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.214,16.361961",alt:null},{filename:"BIM Station in Simmering.jpg",latitude:48.170239,longitude:16.420364,createDate:"2025-05-25T09:40:44.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170239,16.420364",alt:null},{filename:"Bahnsteig S-Bahn Station Simmering.jpg",latitude:48.170064,longitude:16.419367,createDate:"2025-05-04T13:36:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170064,16.419367",alt:null},{filename:"Bahnsteige Simmering S-Bahn Station.jpg",latitude:48.169972,longitude:16.419542,createDate:"2025-05-16T09:53:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169972,16.419542",alt:null},{filename:"Bahnsteige und Gleise am Hauptbahnhof.jpg",latitude:48.184964,longitude:16.376628,createDate:"2025-05-18T16:35:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.184964,16.376628",alt:null},{filename:"Blick über die Wetsbahntrasse und die Schmelzbrücke in Rudolfsheim-Fünfhaus.jpg",latitude:48.194561,longitude:16.330406,createDate:"2024-05-01T09:13:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.194561,16.330406",alt:null},{filename:"Donaustadtbrücke U-Bahn Station.jpg",latitude:48.211761,longitude:16.440106,createDate:"2024-07-21T16:32:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.211761,16.440106",alt:null},{filename:"Gersthof S-Bahn Station im Jugendstil von Otto Wagner 2.jpg",latitude:48.230983,longitude:16.329208,createDate:"2025-04-21T16:04:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.230983,16.329208",alt:null},{filename:"Gersthof S-Bahn Station im Jugendstil von Otto Wagner.jpg",latitude:48.231044,longitude:16.329044,createDate:"2025-04-21T16:02:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.231044,16.329044",alt:null},{filename:"Glasfassade der U-Bahn-Station Rochusgasse.jpg",latitude:48.202764,longitude:16.391256,createDate:"2025-08-01T06:22:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202764,16.391256",alt:null},{filename:"Gleise am Hauptbahnhof.jpg",latitude:48.180231,longitude:16.386892,createDate:"2025-04-20T09:28:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.180231,16.386892",alt:null},{filename:"Handelskai Bahnsteig U-Bahn Wien.jpg",latitude:48.241853,longitude:16.385094,createDate:"2025-05-10T15:32:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.241853,16.385094",alt:null},{filename:"Handelskai Eingng Station Wien.jpg",latitude:48.241447,longitude:16.384992,createDate:"2025-04-21T16:30:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.241447,16.384992",alt:null},{filename:"Handelskai S-Bahn Station.jpg",latitude:48.242431,longitude:16.385114,createDate:"2025-05-10T12:00:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.242431,16.385114",alt:null},{filename:"Hauptbahnhof Halle Wien.jpg",latitude:48.185639,longitude:16.377672,createDate:"2025-05-11T13:49:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185639,16.377672",alt:null},{filename:"Imbiss Endstation Simmering U-Bahn Station Wien.jpg",latitude:48.169933,longitude:16.420058,createDate:"2025-05-02T15:41:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169933,16.420058",alt:null},{filename:"Praterstern Austria Campus Wien.jpg",latitude:48.218517,longitude:16.392872,createDate:"2025-07-15T16:29:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.218517,16.392872",alt:null},{filename:"Praterstern Bahnsteig.jpg",latitude:48.217828,longitude:16.392806,createDate:"2025-04-21T16:44:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.217828,16.392806",alt:null},{filename:"Raucherbereich Hauptbahnhof in Favoriten.jpg",latitude:48.183956,longitude:16.376364,createDate:"2025-05-18T16:40:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.183956,16.376364",alt:null},{filename:"Rolltreppe Bahnsteige Simmering S-Bahn Station.jpg",latitude:48.170064,longitude:16.419656,createDate:"2025-05-04T13:36:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170064,16.419656",alt:null},{filename:"Rolltreppe Kamera Volkstheater.jpg",latitude:48.218486,longitude:16.391533,createDate:"2025-07-15T16:07:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.218486,16.391533",alt:null},{filename:"Rolltreppe Simmering U-Bahn Station Wien.jpg",latitude:48.170056,longitude:16.420075,createDate:"2025-05-02T14:35:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170056,16.420075",alt:null},{filename:"S- und U-Bahn Station Simmering Wien.jpg",latitude:48.170203,longitude:16.42005,createDate:"2025-06-01T12:17:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170203,16.42005",alt:null},{filename:"Schwarzenbergplatz Wien.jpg",latitude:48.198619,longitude:16.376922,createDate:"2025-05-14T17:48:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.198619,16.376922",alt:null},{filename:"Simmering Schriftzug U-Bahn Station Wien.jpg",latitude:48.169681,longitude:16.416525,createDate:"2025-05-04T13:35:58.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169681,16.416525",alt:null},{filename:"Stadlau Güterwagen Wien.jpg",latitude:48.219372,longitude:16.449286,createDate:"2024-07-21T16:35:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.219372,16.449286",alt:null},{filename:"Station Rochusgasse Wien.jpg",latitude:48.203061,longitude:16.390975,createDate:"2025-05-20T06:31:02.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203061,16.390975",alt:null},{filename:"Station Simmering BIM Wien.jpg",latitude:48.170242,longitude:16.420217,createDate:"2025-05-25T09:41:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170242,16.420217",alt:null},{filename:"Südtiroler Platz Hauptbahnhof Wien.jpg",latitude:48.185858,longitude:16.375167,createDate:"2025-05-16T10:11:30.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185858,16.375167",alt:null},{filename:"Trafik Station U-Bahn Station Simmering.jpg",latitude:48.1702,longitude:16.420436,createDate:"2025-05-24T16:34:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.1702,16.420436",alt:null},{filename:"U-Bahn Station 'Neue Donau'.jpg",latitude:48.246381,longitude:16.394939,createDate:"2024-04-24T18:18:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.246381,16.394939",alt:null},{filename:"U-Bahn Station Landstrasse U2 und U4.jpg",latitude:48.213592,longitude:16.37625,createDate:"2025-07-15T19:26:22.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.213592,16.37625",alt:null},{filename:"U-Bahn Station Rossauer Lände Alsergrund.jpg",latitude:48.22185,longitude:16.367456,createDate:"2025-07-15T19:04:10.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.22185,16.367456",alt:null},{filename:"U-Bahn Station Rossauer Lände Aussen Alsergrund.jpg",latitude:48.223083,longitude:16.367325,createDate:"2025-07-15T19:02:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.223083,16.367325",alt:null},{filename:"U-Bahn Station Rossauer Lände Eingang Alsergrund.jpg",latitude:48.222844,longitude:16.367392,createDate:"2025-07-15T19:02:44.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.222844,16.367392",alt:null},{filename:"U-Bahn Station Simmering Aussen.jpg",latitude:48.169936,longitude:16.420114,createDate:"2025-05-02T15:41:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169936,16.420114",alt:null},{filename:"U-Bahn Station Volkstheater Wandmosaik.jpg",latitude:48.206589,longitude:16.360236,createDate:"2025-05-28T19:45:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206589,16.360236",alt:null},{filename:"U-bahn Fensterblick Wien.jpg",latitude:48.205944,longitude:16.360808,createDate:"2024-07-29T18:51:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205944,16.360808",alt:null},{filename:"U3 Bahnsteig Gasometer.jpg",latitude:48.185486,longitude:16.417503,createDate:"2025-06-01T13:48:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185486,16.417503",alt:null},{filename:"Universität Wien Schottentor Innere Stadt.jpg",latitude:48.214081,longitude:16.361719,createDate:"2025-04-21T13:08:58.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.214081,16.361719",alt:null},{filename:"Wien Hauptbahnhof Schriftzug Südtiroler Platz Favoriten.jpg",latitude:48.185878,longitude:16.375197,createDate:"2025-05-16T10:11:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185878,16.375197",alt:null},{filename:"Zentralfriedhof S-Bahn Station Simmering.jpg",latitude:48.154747,longitude:16.42505,createDate:"2025-06-01T06:03:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.154747,16.42505",alt:null},{filename:"Zwei U-Bahn Garnituren auf Gleisen und ein Bahnsteig davor.jpg",latitude:48.225656,longitude:16.349564,createDate:"2024-04-19T15:49:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.225656,16.349564",alt:null}],timeframe:"11. April 2024 - 1. August 2025",imageCount:51},{name:"ostsee",slug:"ostsee",title:"Ostsee",description:"Stralsund, Rügen & Greifswald",images:[{filename:"Bademeister-Hütte auf einem Ostsee-Strand bei Wampen.jpg",latitude:54.133667,longitude:13.430883,createDate:"2019-04-01T09:14:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=54.133667,13.430883",alt:"Hisilicon Balong"},{filename:"Hotel Neptun im Rostock-Warnemünde mit Strand bei klaren blauen Himmel.jpg",latitude:54.178906,longitude:12.0779,createDate:"2019-03-30T06:35:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=54.178906,12.0779",alt:"Hisilicon Balong"},{filename:"Sandboden und die Ostsee in Sassnitz auf Rügen.jpg",latitude:54.514506,longitude:13.639711,createDate:"2019-04-01T09:15:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=54.514506,13.639711",alt:"Hisilicon Balong"},{filename:"St.-Nikolai-Kirche von Stralsund.jpg",latitude:54.315369,longitude:13.091519,createDate:"2019-04-01T16:42:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=54.315369,13.091519",alt:"Hisilicon Balong"},{filename:"Verwaiste Ferienanlage Prora auf Rügen.jpg",latitude:54.442672,longitude:13.566181,createDate:"2019-03-31T15:48:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=54.442672,13.566181",alt:"Hisilicon Balong"},{filename:"Werbeplakate für Tabakwaren und Graffitti-Gekritzel in der Innenstadt von Stralsund bei Nacht.jpg",latitude:54.314908,longitude:13.095556,createDate:"2019-03-31T20:16:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=54.314908,13.095556",alt:"Hisilicon Balong"}],timeframe:"30. März 2019 - 1. April 2019",imageCount:6},{name:"ottenstein",slug:"ottenstein",title:"Ottenstein",description:"Die Zeit - zurückgedreht.",images:[{filename:"Kegelbahn Aussenaufnahme.jpg",latitude:48.59065,longitude:15.336872,createDate:"2025-06-10T18:22:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.59065,15.336872",alt:null},{filename:"Kegelbahn mit Kegelmaschine.jpg",latitude:48.590606,longitude:15.336908,createDate:"2025-06-10T18:28:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.590606,15.336908",alt:null},{filename:"Kegelbahn mit Kugeln.jpg",latitude:48.590603,longitude:15.336911,createDate:"2025-06-10T18:28:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.590603,15.336911",alt:null},{filename:"Statue eines Mannes mit Kind auf seinen Schultern.jpg",latitude:48.590442,longitude:15.336358,createDate:"2025-06-10T12:28:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.590442,15.336358",alt:null}],timeframe:"10. Juni 2025",imageCount:4},{name:"parks",slug:"parks",title:"Parks",description:"Die Parks, Bäume & Grashalme Wiens.",images:[{filename:"Bäume im Auer-Wellsbach Park Wien.jpg",latitude:48.187439,longitude:16.317444,createDate:"2024-04-13T15:26:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.187439,16.317444",alt:null},{filename:"Der Hyblerpark in Simmering Wien.jpg",latitude:48.181611,longitude:16.413031,createDate:"2025-04-18T10:10:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.181611,16.413031",alt:null},{filename:"Donauinsel Brücke Wien.jpg",latitude:48.244561,longitude:16.390017,createDate:"2025-05-10T15:08:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.244561,16.390017",alt:null},{filename:"Donauinsel DC Tower Wien.jpg",latitude:48.246186,longitude:16.3886,createDate:"2025-05-10T14:32:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.246186,16.3886",alt:null},{filename:"Donauinsel Hausschiff Wien.jpg",latitude:48.245297,longitude:16.388775,createDate:"2025-05-10T15:06:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.245297,16.388775",alt:null},{filename:"Donauinsel Wien.jpg",latitude:48.206853,longitude:16.447103,createDate:"2024-07-21T16:55:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206853,16.447103",alt:null},{filename:"Ein Metallzaun vor einer kleinen Hütte in Wien Simmering.jpg",latitude:48.172078,longitude:16.410625,createDate:"2025-05-03T12:47:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.172078,16.410625",alt:null},{filename:"Herderpark in Wien Simmering.jpg",latitude:48.172086,longitude:16.410622,createDate:"2025-05-03T12:47:16.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.172086,16.410622",alt:null},{filename:"Kein Sport auf der Donuainsel - Alte Donau in Wien.jpg",latitude:48.211767,longitude:16.434911,createDate:"2024-07-21T13:50:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.211767,16.434911",alt:null},{filename:"Musiker Votivkirche Alsergrund Wien.jpg",latitude:48.215978,longitude:16.358497,createDate:"2025-07-09T14:13:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215978,16.358497",alt:null},{filename:"Park Simmering Wien.jpg",latitude:48.171803,longitude:16.410644,createDate:"2025-05-03T12:47:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.171803,16.410644",alt:null},{filename:"Park und Yoga-Gruppe im Auer-Wellsbach-Park.jpg",latitude:48.186328,longitude:16.318358,createDate:"2025-07-30T17:03:42.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.186328,16.318358",alt:null},{filename:"Votivkirche mit Fussgänger und Hund davor.jpg",latitude:48.215353,longitude:16.359267,createDate:"2024-03-27T07:32:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215353,16.359267",alt:null},{filename:"Votivkirche und Grünfläche mit Fussweg und den dahinterliegenden Häusern.jpg",latitude:48.215408,longitude:16.359381,createDate:"2024-04-03T05:56:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.215408,16.359381",alt:null},{filename:"Wiese im Türkenschanzpark Wien.jpg",latitude:48.235967,longitude:16.336186,createDate:"2025-04-21T15:44:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.235967,16.336186",alt:null}],timeframe:"27. März 2024 - 30. Juli 2025",imageCount:15},{name:"porto",slug:"porto",title:"Porto",description:"Essa cidade é muito bonita, muita subida e descida.",images:[{filename:"Alte Häuser bei Sao Bento.jpg",latitude:41.145497,longitude:-8.610367,createDate:"2025-03-30T09:46:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145497,-8.610367",alt:null},{filename:"Alte und moderne Architektur.jpg",latitude:41.145125,longitude:-8.610692,createDate:"2025-03-30T09:45:33.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145125,-8.610692",alt:null},{filename:"Altes Gebäude.jpg",latitude:41.145006,longitude:-8.616325,createDate:"2025-03-29T21:52:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145006,-8.616325",alt:null},{filename:"Altes Haus und Villa Nova de Gaia.jpg",latitude:41.142406,longitude:-8.612067,createDate:"2025-04-02T10:48:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.142406,-8.612067",alt:null},{filename:"Altstadt Modern.jpg",latitude:41.143172,longitude:-8.611656,createDate:"2025-04-02T10:53:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.143172,-8.611656",alt:null},{filename:"Ausblick Balkon Laranjas.jpg",latitude:41.150781,longitude:-8.610925,createDate:"2025-03-29T16:38:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.150781,-8.610925",alt:null},{filename:"Blume am Strand Miramar in.jpg",latitude:41.0652,longitude:-8.656564,createDate:"2025-04-01T12:25:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.0652,-8.656564",alt:null},{filename:"Casa de Musica Seitlich.jpg",latitude:41.1585,longitude:-8.63095,createDate:"2025-03-31T13:14:33.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.1585,-8.63095",alt:null},{filename:"Casa de Musica Skater.jpg",latitude:41.158439,longitude:-8.630994,createDate:"2025-03-31T13:13:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.158439,-8.630994",alt:null},{filename:"Casa de Musica Südeingang.jpg",latitude:41.158731,longitude:-8.630008,createDate:"2025-03-31T13:09:53.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.158731,-8.630008",alt:null},{filename:"Casa de Musica Totale.jpg",latitude:41.158486,longitude:-8.631186,createDate:"2025-03-31T13:14:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.158486,-8.631186",alt:null},{filename:"Dunkle Gasse in der Nacht.jpg",latitude:41.145639,longitude:-8.614683,createDate:"2025-03-31T21:21:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145639,-8.614683",alt:null},{filename:"Flughafen Porto Architektur.jpg",latitude:41.236808,longitude:-8.670061,createDate:"2025-04-02T13:31:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.236808,-8.670061",alt:null},{filename:"Flughafen Taxi und Auto-Stand Porto.jpg",latitude:41.237369,longitude:-8.670303,createDate:"2025-04-02T14:10:16.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.237369,-8.670303",alt:null},{filename:"Flughafen-Halle.jpg",latitude:41.237064,longitude:-8.670583,createDate:"2025-04-02T13:21:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.237064,-8.670583",alt:null},{filename:"Fluss Porto.jpg",latitude:41.140236,longitude:-8.611989,createDate:"2025-03-30T11:57:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.140236,-8.611989",alt:null},{filename:"Häuser und Stadt-Blick.jpg",latitude:41.143153,longitude:-8.611278,createDate:"2025-04-02T10:45:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.143153,-8.611278",alt:null},{filename:"Jugendstil - Imperialer McDonalds.jpg",latitude:41.146733,longitude:-8.611031,createDate:"2025-03-30T09:13:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.146733,-8.611031",alt:null},{filename:"Jugendstil-Bahnsteig-Uhr in Sao Bento.jpg",latitude:41.145539,longitude:-8.610378,createDate:"2025-04-02T10:36:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145539,-8.610378",alt:null},{filename:"Kapelle am Strand Miramar an der Atlantikküste.jpg",latitude:41.068703,longitude:-8.656689,createDate:"2025-04-01T12:33:42.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.068703,-8.656689",alt:null},{filename:"Moderne Struktur.jpg",latitude:41.14355,longitude:-8.611039,createDate:"2025-04-02T10:43:16.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.14355,-8.611039",alt:null},{filename:"Palacio de la Justice.jpg",latitude:41.1446,longitude:-8.617233,createDate:"2025-03-31T21:18:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.1446,-8.617233",alt:null},{filename:"Platz Aliados mit Bäumen.jpg",latitude:41.147258,longitude:-8.611131,createDate:"2025-03-29T18:13:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.147258,-8.611131",alt:null},{filename:"Platz mit Kirche.jpg",latitude:41.1469,longitude:-8.615383,createDate:"2025-03-30T18:09:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.1469,-8.615383",alt:null},{filename:"Platz mit Palmen.jpg",latitude:41.146897,longitude:-8.615392,createDate:"2025-03-30T18:09:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.146897,-8.615392",alt:null},{filename:"Platz nahe Harry Potter Bücherei.jpg",latitude:41.147042,longitude:-8.615519,createDate:"2025-03-30T18:17:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.147042,-8.615519",alt:null},{filename:"Ponte Louis Porto von Villa Nova de Gaia gesehen.jpg",latitude:41.138839,longitude:-8.60995,createDate:"2025-03-30T14:36:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.138839,-8.60995",alt:null},{filename:"Ponte Louis Porto.jpg",latitude:41.140975,longitude:-8.611122,createDate:"2025-03-30T11:49:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.140975,-8.611122",alt:null},{filename:"Ponte de Louis und Villa Nova de Gaia bei Nacht.jpg",latitude:41.1431,longitude:-8.61565,createDate:"2025-04-01T21:23:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.1431,-8.61565",alt:null},{filename:"Ribera de Porto.jpg",latitude:41.139678,longitude:-8.614517,createDate:"2025-03-30T14:12:58.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.139678,-8.614517",alt:null},{filename:"Rolltreppe Öffis Porto.jpg",latitude:41.152139,longitude:-8.609864,createDate:"2025-04-02T12:28:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.152139,-8.609864",alt:null},{filename:"Rua de Almada bei Nacht.jpg",latitude:41.15285,longitude:-8.612036,createDate:"2025-03-30T21:35:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.15285,-8.612036",alt:null},{filename:"Rua de Almada.jpg",latitude:41.15285,longitude:-8.612036,createDate:"2025-03-30T21:35:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.15285,-8.612036",alt:null},{filename:"Rua de Flores 2.jpg",latitude:41.145231,longitude:-8.611053,createDate:"2025-04-02T10:26:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145231,-8.611053",alt:null},{filename:"Rua de Flores.jpg",latitude:41.145217,longitude:-8.611039,createDate:"2025-04-02T10:27:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145217,-8.611039",alt:null},{filename:"Salzburg Airport Treppe.jpg",latitude:47.791,longitude:12.997536,createDate:"2025-03-29T08:16:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.791,12.997536",alt:null},{filename:"Salzburg Airport.jpg",latitude:47.791783,longitude:12.996853,createDate:"2025-03-29T08:11:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.791783,12.996853",alt:null},{filename:"Sao Bento Bahnsteige 2.jpg",latitude:41.145458,longitude:-8.610133,createDate:"2025-04-02T10:33:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145458,-8.610133",alt:null},{filename:"Sao Bento Bahnsteige.jpg",latitude:41.145631,longitude:-8.610269,createDate:"2025-04-02T10:34:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145631,-8.610269",alt:null},{filename:"Sao Bento Fenster.jpg",latitude:41.145533,longitude:-8.610381,createDate:"2025-04-02T10:36:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145533,-8.610381",alt:null},{filename:"Sao Bento Fliesen.jpg",latitude:41.145489,longitude:-8.6106,createDate:"2025-04-02T10:36:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145489,-8.6106",alt:null},{filename:"Sao Bento Innen.jpg",latitude:41.145467,longitude:-8.610458,createDate:"2025-04-02T10:32:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145467,-8.610458",alt:null},{filename:"Sao Bento Schriftzug U-Bahn.jpg",latitude:41.145175,longitude:-8.610939,createDate:"2025-04-02T12:20:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145175,-8.610939",alt:null},{filename:"Sao Bento und alte Gebäude.jpg",latitude:41.145447,longitude:-8.611025,createDate:"2025-03-30T09:25:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.145447,-8.611025",alt:null},{filename:"Se de Porto Altstadt.jpg",latitude:41.143322,longitude:-8.611089,createDate:"2025-04-02T10:44:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.143322,-8.611089",alt:null},{filename:"Se de Porto Dom.jpg",latitude:41.142589,longitude:-8.611961,createDate:"2025-03-30T11:37:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.142589,-8.611961",alt:null},{filename:"Sessel in Strandbar am Atlantik.jpg",latitude:41.069214,longitude:-8.656706,createDate:"2025-04-01T12:45:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.069214,-8.656706",alt:null},{filename:"Stadtansicht 2.jpg",latitude:41.143119,longitude:-8.611456,createDate:"2025-04-02T10:46:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.143119,-8.611456",alt:null},{filename:"Stadtansicht mit Torres.jpg",latitude:41.143178,longitude:-8.611281,createDate:"2025-04-02T10:45:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.143178,-8.611281",alt:null},{filename:"Stadtansicht.jpg",latitude:41.143117,longitude:-8.611461,createDate:"2025-04-02T10:46:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.143117,-8.611461",alt:null},{filename:"Statue bei Se de Porto und Stadtansicht.jpg",latitude:41.142964,longitude:-8.611731,createDate:"2025-03-30T10:56:34.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.142964,-8.611731",alt:null},{filename:"Steine am Strand Miramar .jpg",latitude:41.067256,longitude:-8.657744,createDate:"2025-04-01T11:45:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.067256,-8.657744",alt:null},{filename:"Steine am Strand Miramar am Atlantik.jpg",latitude:41.064475,longitude:-8.657561,createDate:"2025-04-01T12:05:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.064475,-8.657561",alt:null},{filename:"Strasse mit Ampeln.jpg",latitude:41.150239,longitude:-8.610989,createDate:"2025-03-29T17:38:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.150239,-8.610989",alt:null},{filename:"Street Art Katze in Blau auf einer Hauswand in der Innenstadt.jpg",latitude:41.144675,longitude:-8.612403,createDate:"2025-03-30T18:39:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.144675,-8.612403",alt:null},{filename:"Super Bock Werbe-Banner am Flughafen.jpg",latitude:41.243625,longitude:-8.670739,createDate:"2025-03-29T15:16:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.243625,-8.670739",alt:null},{filename:"Trindade Auto-Parkhaus mit verweilenden Menschen.jpg",latitude:41.151147,longitude:-8.608889,createDate:"2025-04-02T12:31:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.151147,-8.608889",alt:null},{filename:"Villa Nova und Porto (Totale).jpg",latitude:41.14225,longitude:-8.611997,createDate:"2025-04-02T10:50:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.14225,-8.611997",alt:null},{filename:"Zaun und Stadtansicht bei Nacht.jpg",latitude:41.144489,longitude:-8.618378,createDate:"2025-04-01T22:04:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.144489,-8.618378",alt:null},{filename:"Zimmer im Hotel Laranjas.jpg",latitude:41.149792,longitude:-8.612272,createDate:"2025-03-29T17:16:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.149792,-8.612272",alt:null},{filename:"Öffis Eingang.jpg",latitude:41.152272,longitude:-8.609019,createDate:"2025-04-02T12:45:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=41.152272,-8.609019",alt:null}],timeframe:"29. März 2025 - 2. April 2025",imageCount:61},{name:"pride",slug:"pride",title:"Pride Parade",description:"Ain't no rain on my parade.",images:[{filename:"48er Aufräumarbeiten nach der Pride.jpg",latitude:48.204486,longitude:16.377731,createDate:"2025-06-14T13:50:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204486,16.377731",alt:null},{filename:"Mensch mit Fahnen.jpg",latitude:48.203475,longitude:16.364478,createDate:"2025-06-14T12:46:18.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203475,16.364478",alt:null},{filename:"Menschemenge auf der Ringstrasse.jpg",latitude:48.202825,longitude:16.376075,createDate:"2025-06-14T13:35:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202825,16.376075",alt:null},{filename:"Menschemenge und Wagen.jpg",latitude:48.2024,longitude:16.375597,createDate:"2025-06-14T13:29:05.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.2024,16.375597",alt:null},{filename:"Menschenmenge und Fahnen auf Pride Wien.jpg",latitude:48.206589,longitude:16.380058,createDate:"2025-06-14T13:59:02.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.206589,16.380058",alt:null},{filename:"Menschenmenge und Regebogen-Schirm Pride Innere Stadt Wien.jpg",latitude:48.201881,longitude:16.374986,createDate:"2025-06-14T13:25:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.201881,16.374986",alt:null},{filename:"Menschenmenge und Wagen 2.jpg",latitude:48.205611,longitude:16.361461,createDate:"2025-06-14T12:37:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205611,16.361461",alt:null},{filename:"Menschenmenge und Wagen mit Nebelmaschine.jpg",latitude:48.202019,longitude:16.375325,createDate:"2025-06-14T13:27:33.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.202019,16.375325",alt:null},{filename:"Menschenmenge vor dem Gartenbaukino.jpg",latitude:48.205414,longitude:16.378797,createDate:"2025-06-14T13:52:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.205414,16.378797",alt:null}],timeframe:"14. Juni 2025",imageCount:9},{name:"salzburg",slug:"salzburg",title:"Salzburg",description:"Johann Bernhard Fischer von Erlach wird man hier nicht finden.",images:[{filename:"Aganigi Naganigi Kebab.jpg",latitude:47.811672,longitude:13.025536,createDate:"2025-05-17T18:15:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.811672,13.025536",alt:null},{filename:"Ausblick über Salzburg Stadt von der Imlauer Sky Bar.jpg",latitude:47.807639,longitude:13.041683,createDate:"2024-04-06T17:21:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.807639,13.041683",alt:null},{filename:"Baptisten Kirche in Lehen.jpg",latitude:47.814172,longitude:13.026403,createDate:"2025-05-17T18:21:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.814172,13.026403",alt:null},{filename:"Blick auf Laufen an der Salzach von Oberndorf bei Salzburg.jpg",latitude:47.944294,longitude:12.935275,createDate:"2024-05-19T18:42:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.944294,12.935275",alt:null},{filename:"Blick auf die Bäume.jpg",latitude:47.816656,longitude:13.025656,createDate:"2025-05-17T17:19:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.816656,13.025656",alt:null},{filename:"Der Südtiroler-Platz am Hauptbahnhof.jpg",latitude:47.813194,longitude:13.044628,createDate:"2025-05-18T09:32:51.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.813194,13.044628",alt:null},{filename:"Die Glan in Lehen.jpg",latitude:47.817222,longitude:13.026694,createDate:"2025-05-17T17:49:45.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.817222,13.026694",alt:null},{filename:"Die Glanbrücke stadtauswärts in Lehen.jpg",latitude:47.817139,longitude:13.026803,createDate:"2025-05-17T17:50:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.817139,13.026803",alt:null},{filename:"Gebäude in Lehen.jpg",latitude:47.815106,longitude:13.025831,createDate:"2025-05-17T18:23:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.815106,13.025831",alt:null},{filename:"Gekritzel in Maxglan.jpg",latitude:47.796172,longitude:13.025944,createDate:"2025-05-18T11:49:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.796172,13.025944",alt:null},{filename:"Haus in Lehen.jpg",latitude:47.814,longitude:13.031281,createDate:"2025-05-17T17:57:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.814,13.031281",alt:null},{filename:"Kunst in der Nähe der Stiegl-Brauerei.jpg",latitude:47.794317,longitude:13.024908,createDate:"2025-05-18T10:35:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.794317,13.024908",alt:null},{filename:"Parkplatz Ignaz-Harrer-Strasse Lehen.jpg",latitude:47.811531,longitude:13.025461,createDate:"2025-05-17T18:16:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.811531,13.025461",alt:null},{filename:"Spielplatz in Lehen.jpg",latitude:47.815144,longitude:13.030261,createDate:"2025-05-17T17:55:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.815144,13.030261",alt:null},{filename:"Vordach der Neuen MItte Lehen und das Haus in Blau-Gelb gegenüber.jpg",latitude:47.813147,longitude:13.026411,createDate:"2025-05-18T08:11:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.813147,13.026411",alt:null},{filename:"Wohnhaus in Lehen Salzburg.jpg",latitude:47.814367,longitude:13.026233,createDate:"2025-05-17T18:22:22.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=47.814367,13.026233",alt:null}],timeframe:"6. April 2024 - 18. Mai 2025",imageCount:16},{name:"sonstwo-und-allfaelliges",slug:"sonstwo-und-allfaelliges",title:"Sonstwo & Allfälliges",description:"Hier & da. Dieses & jenes. Oben & unten.",images:[{filename:"Alte Jukebox im Anker-Kino Burghausen.jpg",latitude:48.158589,longitude:12.832308,createDate:"2025-05-16T17:48:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.158589,12.832308",alt:null},{filename:"Ausblick von Kleingröpfritz einen Wald.jpg",latitude:48.859294,longitude:15.217844,createDate:"2024-07-14T06:59:38.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.859294,15.217844",alt:null},{filename:"Durch den Türspion in Simmering Wien.jpg",latitude:48.169742,longitude:16.416686,createDate:"2025-05-11T17:54:05.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169742,16.416686",alt:null},{filename:"Eine Luftaufnahme von Stammersdorf als Wandbild in einem Heurigen in Stammersdorf.jpg",latitude:48.298211,longitude:16.422322,createDate:"2024-04-24T16:09:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.298211,16.422322",alt:null},{filename:"Elster im tschechischen Wald.jpg",latitude:49.013631,longitude:13.901269,createDate:"2024-02-18T08:09:11.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=49.013631,13.901269",alt:null},{filename:"Gummi-Stiefel-Brunnen in Kleingöpfritz bei Nacht.jpg",latitude:48.859253,longitude:15.219978,createDate:"2024-07-12T20:34:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.859253,15.219978",alt:null},{filename:"Henry Kissinger Portraits in der Diplomatischen Akademie in Wien - künstlerisch Gedreht.jpg",latitude:48.194011,longitude:16.370528,createDate:"2025-07-06T06:19:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.194011,16.370528",alt:null},{filename:"Kleingöpfritz.jpg",latitude:48.860578,longitude:15.211486,createDate:"2024-07-12T19:40:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.860578,15.211486",alt:null},{filename:"Toi Toi auf Holz-Baugerüst in Wien.jpg",latitude:48.185386,longitude:16.326622,createDate:"2024-06-28T14:37:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185386,16.326622",alt:null},{filename:"Umgefallenes Einkaufswagerl in Simmering.jpg",latitude:48.164283,longitude:16.418681,createDate:"2025-08-02T05:11:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.164283,16.418681",alt:null},{filename:"Umgefallenes Einkaufswagerl in der Geiselbergstrasse.jpg",latitude:48.174739,longitude:16.406886,createDate:"2024-07-28T15:47:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.174739,16.406886",alt:null}],timeframe:"18. Februar 2024 - 2. August 2025",imageCount:11},{name:"symbole",slug:"symbole",title:"Symbole",description:"Buchstaben, Kunst & Rechtschreibfehler.",images:[{filename:"'Mama' Graffitti in Simmering.jpg",latitude:48.176483,longitude:16.424428,createDate:"2024-08-17T13:26:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.176483,16.424428",alt:null},{filename:"'Metropolis' Plakat Heidi Horten Collection.jpg",latitude:48.203983,longitude:16.367647,createDate:"2025-07-27T09:31:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203983,16.367647",alt:null},{filename:"'Ruhe' Graffitti in der Simmeringer-Hauptstrasse.jpg",latitude:48.173625,longitude:16.417025,createDate:"2025-07-14T18:46:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.173625,16.417025",alt:null},{filename:"'Thailändische Spezialitäte' Auslage in der Kaiser-Ebersdorfer-Strasse.jpg",latitude:48.168872,longitude:16.424133,createDate:"2025-07-27T13:18:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.168872,16.424133",alt:null},{filename:"'Unter der Kirche' Strassenschild Simmering.jpg",latitude:48.169353,longitude:16.423528,createDate:"2025-07-26T12:06:15.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169353,16.423528",alt:null},{filename:"'Westbahnpark Jetzt' Sticker.jpg",latitude:48.194,longitude:16.326,createDate:"2024-07-21T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.194,16.326",alt:null},{filename:"'Wienliebe' Schriftzug Rathauspark.jpg",latitude:48.209703,longitude:16.359542,createDate:"2025-05-05T07:40:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.209703,16.359542",alt:null},{filename:"Bier Plastik-Werbeaufsteller auf einer kleinen Hütte.jpg",latitude:48.231892,longitude:16.390422,createDate:"2025-07-15T16:49:41.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.231892,16.390422",alt:null},{filename:"Erwin Wurm Skulptur im Hanuschhof.jpg",latitude:48.203919,longitude:16.367383,createDate:"2025-07-27T10:03:35.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203919,16.367383",alt:null},{filename:"Goldener Apfel im Hanuschhof.jpg",latitude:48.204108,longitude:16.367386,createDate:"2025-07-27T10:03:57.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204108,16.367386",alt:null},{filename:"Graffitti 'Fuck Love' und Hunde-Bild auf einer Well-Blech-Wand.jpg",latitude:48.175575,longitude:16.407339,createDate:"2025-07-26T15:39:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.175575,16.407339",alt:null},{filename:"Graffitti 'Kek' in der Lorystrasse.jpg",latitude:48.167661,longitude:16.418339,createDate:"2025-07-27T13:52:10.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.167661,16.418339",alt:null},{filename:"Graffitti Smiley auf einer Mauer Litschau.jpg",latitude:48.948892,longitude:15.044311,createDate:"2024-07-13T13:15:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.948892,15.044311",alt:null},{filename:"Graffitti-Tag 'Gurk' auf der Schmelzrampe.jpg",latitude:48.194328,longitude:16.330344,createDate:"2025-07-21T12:34:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.194328,16.330344",alt:null},{filename:"Graffitti-Tags auf einer Well-Blech-Wand.jpg",latitude:48.176256,longitude:16.407767,createDate:"2025-07-26T15:38:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.176256,16.407767",alt:null},{filename:"Grillhendl-Wagen auf einem Parkplatz.jpg",latitude:48.170364,longitude:16.425317,createDate:"2025-07-26T12:08:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.170364,16.425317",alt:null},{filename:"Kaos Graffitti in Brigittenau.jpg",latitude:48.239161,longitude:16.384072,createDate:"2025-07-15T17:03:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.239161,16.384072",alt:null},{filename:"Kinderwagenraum-Schild mit Videoüberwachungsinformation.jpg",latitude:48.164417,longitude:16.422269,createDate:"2025-07-27T13:47:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.164417,16.422269",alt:null},{filename:"Kursalon Hübner Eingang - Gesperrt wegen Bauarbeiten.jpg",latitude:48.203533,longitude:16.377142,createDate:"2025-07-14T16:03:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.203533,16.377142",alt:null},{filename:"LKW 'Schön ist es ein Ziel zu haben' nähe Schottentor.jpg",latitude:48.213772,longitude:16.362475,createDate:"2025-06-02T06:38:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.213772,16.362475",alt:null},{filename:"S-Bahn Unterführung Fahrradweg.jpg",latitude:48.166492,longitude:16.413928,createDate:"2025-05-25T16:23:31.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.166492,16.413928",alt:null},{filename:"Schaufenster des Magistrats in Rudolfsheim-Fünfhaus.jpg",latitude:48.204619,longitude:16.332464,createDate:"2025-05-03T11:12:53.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.204619,16.332464",alt:null},{filename:"Schild der Garage Capricorn am Schwedenplatz.jpg",latitude:48.211242,longitude:16.379222,createDate:"2025-04-26T14:45:27.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.211242,16.379222",alt:null},{filename:"Schöne Fassade.jpg",latitude:48.158839,longitude:12.833075,createDate:"2025-05-16T17:00:56.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.158839,12.833075",alt:null},{filename:"Tafelspitz Schild bei Schönbrunn Wien.jpg",latitude:48.185794,longitude:16.319944,createDate:"2024-04-11T17:25:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.185794,16.319944",alt:null},{filename:"Veränderung ist schwer Schriftzug Simmering Wien.jpg",latitude:48.169697,longitude:16.416206,createDate:"2024-05-29T14:39:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.169697,16.416206",alt:null},{filename:"Wien Leuchtet Schriftzug nahe Handelskai Brigittenau.jpg",latitude:48.242217,longitude:16.384361,createDate:"2025-07-15T17:17:16.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.242217,16.384361",alt:null}],timeframe:"11. April 2024 - 27. Juli 2025",imageCount:27},{name:"valencia",slug:"valencia",title:"Valencia",description:"Gute Paella & mediterrane Elektrik.",images:[{filename:"Aussen-Elektrik-Verkabelung.jpg",latitude:39.466347,longitude:-.330372,createDate:"2023-04-01T15:46:04.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.466347,-0.330372",alt:null},{filename:"Blick über die Dächer der Innenstand.jpg",latitude:39.475719,longitude:-.383778,createDate:"2023-04-02T08:41:28.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.475719,-0.383778",alt:null},{filename:"Bunte Fassaden.jpg",latitude:39.461956,longitude:-.377006,createDate:"2023-03-31T16:43:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.461956,-0.377006",alt:null},{filename:"Ciutat de les Arts i les Ciències Stufen und Moderne Architektur.jpg",latitude:39.454339,longitude:-.352461,createDate:"2023-03-31T14:39:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.454339,-0.352461",alt:null},{filename:"Flamingos vor einem Back im Tiergarten.jpg",latitude:39.478083,longitude:-.410333,createDate:"2023-04-02T13:12:54.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.478083,-0.410333",alt:null},{filename:"Flughafen von Valencia Ankunft.jpg",latitude:39.49055,longitude:-.474058,createDate:"2023-03-30T17:09:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.49055,-0.474058",alt:null},{filename:"Hauptplatz und Markt.jpg",latitude:39.474261,longitude:-.379144,createDate:"2023-04-02T08:57:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.474261,-0.379144",alt:null},{filename:"Hauptplatz und Palmen.jpg",latitude:39.474286,longitude:-.378867,createDate:"2023-04-02T08:57:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.474286,-0.378867",alt:null},{filename:"Markthalle von Aussen.jpg",latitude:39.473358,longitude:-.378281,createDate:"2023-03-31T11:07:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.473358,-0.378281",alt:null},{filename:"Modernes Gebäude am Hafen.jpg",latitude:39.461644,longitude:-.323592,createDate:"2023-04-01T15:18:43.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.461644,-0.323592",alt:null},{filename:"Strandpromenade.jpg",latitude:39.468239,longitude:-.324186,createDate:"2023-04-01T13:20:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.468239,-0.324186",alt:null},{filename:"Street Art Mann.jpg",latitude:39.473506,longitude:-.384342,createDate:"2023-03-30T19:10:39.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.473506,-0.384342",alt:null},{filename:"Street Art Salamander.jpg",latitude:39.473131,longitude:-.384878,createDate:"2023-03-30T19:10:06.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.473131,-0.384878",alt:null},{filename:"U-Bahn Station mit bunten Fliesen.jpg",latitude:39.470592,longitude:-.406297,createDate:"2023-04-02T16:09:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.470592,-0.406297",alt:null},{filename:"Umgefallener Stein-Poller.jpg",latitude:39.475447,longitude:-.383894,createDate:"2023-03-30T21:20:55.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.475447,-0.383894",alt:null},{filename:"Valencia Station North von Innen.jpg",latitude:39.466914,longitude:-.376903,createDate:"2023-03-31T16:53:26.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.466914,-0.376903",alt:null},{filename:"Zwei Buffallos liegen in der Weide am Tiergarten.jpg",latitude:39.479428,longitude:-.410625,createDate:"2023-04-02T13:36:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=39.479428,-0.410625",alt:null}],timeframe:"30. März 2023 - 2. April 2023",imageCount:17},{name:"waidhofen",slug:"waidhofen",title:"Waidhofen",description:"Blues, Katzen & Muddy Waters.",images:[{filename:"Chillen and der Thaya unter den Trauerweiden.jpg",latitude:48.811233,longitude:15.289903,createDate:"2025-06-28T18:19:19.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.811233,15.289903",alt:null},{filename:"Foto-Kunst neben Thayabühne.jpg",latitude:48.811478,longitude:15.290239,createDate:"2025-06-27T18:22:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.811478,15.290239",alt:null},{filename:"Rettungsring  an der Thaya.jpg",latitude:48.811428,longitude:15.290214,createDate:"2025-06-27T18:22:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.811428,15.290214",alt:null},{filename:"Saxophon Konzert Hauptbühne.jpg",latitude:48.810967,longitude:15.289403,createDate:"2025-06-27T19:37:13.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.810967,15.289403",alt:null},{filename:"Schnupperabend Bridge und Katzen Schaufenster.jpg",latitude:48.814175,longitude:15.285006,createDate:"2025-06-28T08:07:17.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.814175,15.285006",alt:null},{filename:"Thayabühne auf den Musiktagen.jpg",latitude:48.811347,longitude:15.290106,createDate:"2025-06-27T18:20:20.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.811347,15.290106",alt:null},{filename:"Verlassenes Gebäude.jpg",latitude:48.812633,longitude:15.28045,createDate:"2025-06-28T07:56:47.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.812633,15.28045",alt:null}],timeframe:"27. Juni 2025 - 28. Juni 2025",imageCount:7},{name:"wien-museum",slug:"wien-museum",title:"Wien Museum",description:"Viele Taferl, viele Exemplare & viele Räume. Schönes Museum. Gratis.",images:[{filename:"Schriftzug 'Museum der Stadt Wien'.jpg",latitude:48.199192,longitude:16.372353,createDate:"2025-05-14T14:14:08.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199192,16.372353",alt:null},{filename:"Schriftzug 'Zuerst schließen wir die Augen dann sehen wir weiter'.jpg",latitude:48.199092,longitude:16.372906,createDate:"2025-05-14T15:07:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199092,16.372906",alt:null},{filename:"Schriftzug Südbahnhof.jpg",latitude:48.199169,longitude:16.372769,createDate:"2025-05-14T15:05:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199169,16.372769",alt:null},{filename:"Stahl-Wal und Kutsche.jpg",latitude:48.199161,longitude:16.372861,createDate:"2025-05-14T15:28:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199161,16.372861",alt:null},{filename:"Stahl-Wal, Kutsche und Statuen.jpg",latitude:48.199367,longitude:16.372703,createDate:"2025-05-14T15:27:21.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199367,16.372703",alt:null},{filename:"Von der Decke hängender Stahl-Wahl.jpg",latitude:48.199161,longitude:16.372772,createDate:"2025-05-14T15:28:03.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.199161,16.372772",alt:null}],timeframe:"14. Mai 2025",imageCount:6},{name:"zentralfriedhof",slug:"zentralfriedhof",title:"Zentralfriedhof",description:"An den Grenzen der Stadt & am Ende der Dinge sieht man das schöne. Einmal mit der 71er hin- und retour.",images:[{filename:"Adler Grab.jpg",latitude:48.152783,longitude:16.435778,createDate:"2025-06-29T11:02:23.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.152783,16.435778",alt:null},{filename:"Altar Seitlich Kirche.jpg",latitude:48.158069,longitude:16.437931,createDate:"2025-06-29T11:13:46.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.158069,16.437931",alt:null},{filename:"Altar der Kirche.jpg",latitude:48.156844,longitude:16.439061,createDate:"2025-06-29T11:14:05.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.156844,16.439061",alt:null},{filename:"Arkaden neben der Kirche.jpg",latitude:48.150856,longitude:16.438381,createDate:"2025-07-06T06:20:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.150856,16.438381",alt:null},{filename:"Aussenansicht von Tor 1.jpg",latitude:48.159,longitude:16.431983,createDate:"2025-05-30T16:18:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.159,16.431983",alt:null},{filename:"Blau-Goldene Kuppel Seitlich in der Kirche.jpg",latitude:48.151558,longitude:16.437939,createDate:"2025-06-29T11:12:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.151558,16.437939",alt:null},{filename:"Blau-Goldene Kuppel der Kirche.jpg",latitude:48.150914,longitude:16.437881,createDate:"2025-06-29T11:11:48.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.150914,16.437881",alt:null},{filename:"Blumenstand am Tor 11.jpg",latitude:48.151947,longitude:16.427978,createDate:"2025-06-01T06:06:36.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.151947,16.427978",alt:null},{filename:"Bundespräsidentengräber und Kirche.jpg",latitude:48.1511,longitude:16.4386,createDate:"2025-06-29T11:09:07.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.1511,16.4386",alt:null},{filename:"Bänke im Detail in der Kirche.jpg",latitude:48.150864,longitude:16.4381,createDate:"2025-06-29T11:11:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.150864,16.4381",alt:null},{filename:"Bänke in der Kirche.jpg",latitude:48.158069,longitude:16.437931,createDate:"2025-06-29T11:13:32.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.158069,16.437931",alt:null},{filename:"Bänke von der Seite in der Kirche.jpg",latitude:48.150867,longitude:16.438186,createDate:"2025-06-29T11:11:25.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.150867,16.438186",alt:null},{filename:"Der Weg zur Kirche.jpg",latitude:48.152878,longitude:16.437461,createDate:"2025-06-29T11:04:29.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.152878,16.437461",alt:null},{filename:"Grab und Sonne Zentralfriedhof Wien.jpg",latitude:48.150075,longitude:16.437378,createDate:"2025-06-01T06:16:52.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.150075,16.437378",alt:null},{filename:"Gräber Kirche Zentralfriedhof Wien.jpg",latitude:48.152886,longitude:16.437042,createDate:"2025-06-29T11:03:59.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.152886,16.437042",alt:null},{filename:"Jesus-Statue in einem Seitenschiff der Kirche.jpg",latitude:48.156361,longitude:16.439128,createDate:"2025-06-29T11:15:30.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.156361,16.439128",alt:null},{filename:"Karl-Lueger-Gedächtniskirche am Zentralfriedhof Wien.jpg",latitude:48.151425,longitude:16.438867,createDate:"2025-06-29T11:08:09.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.151425,16.438867",alt:null},{filename:"Kirche, Gräber und Trauerweiden im Sonnenschein.jpg",latitude:48.150586,longitude:16.436633,createDate:"2025-06-01T06:16:12.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.150586,16.436633",alt:null},{filename:"Kirchenbänke und Jugendstil-Fassade.jpg",latitude:48.156892,longitude:16.438922,createDate:"2025-06-29T11:17:14.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.156892,16.438922",alt:null},{filename:"Lorenzo's Grab.jpg",latitude:48.153328,longitude:16.437883,createDate:"2025-05-21T16:08:49.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.153328,16.437883",alt:null},{filename:"Priester-Statue in einem Seitenschiff der Kirche.jpg",latitude:48.15685,longitude:16.439056,createDate:"2025-06-29T11:16:24.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.15685,16.439056",alt:null},{filename:"Seitengang der Kirche.jpg",latitude:48.156892,longitude:16.438922,createDate:"2025-06-29T11:17:00.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.156892,16.438922",alt:null},{filename:"Sowjetisches-Denkmal.jpg",latitude:48.148553,longitude:16.436297,createDate:"2025-05-29T08:31:01.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.148553,16.436297",alt:null},{filename:"Zwischengang der Kirche.jpg",latitude:48.156886,longitude:16.438947,createDate:"2025-06-29T11:16:40.000Z",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=48.156886,16.438947",alt:null}],timeframe:"21. Mai 2025 - 6. Juli 2025",imageCount:24}],vp=[{title:"Anmerkungen",slug:"anmerkungen",content:`# Anmerkungen

Nicht jeder Weg ist gerade,<br> 
nicht jeder Würstelstand kann gute Bosna &<br> 
nicht jedes Foto ist immer schön.

Momente festgehalten von [Luca Mack](https://lucamack.at)`},{title:"Datenschutz",slug:"datenschutz",content:`# Datenschutz

## Veranwtortlicher
Luca Mack\\
Lorystrassse 71/56\\
1110 Wien\\
[Mail](mailto:lucamack3@gmail.com)

## Hoster
Meine Website wird auf Servern des Hosters [Hetzner](https://www.hetzner.de/) gehostet. Der Hoster erhebt und speichert automatisch Informationen in so genannten Server-Log-Files, die Ihr Browser automatisch an uns  übertragt. Dies sind:

* Browsertyp und -version
* verwendetes Betriebssystem
* Referrer URL
* Uhrzeit der Serveranfrage
* IP-Adresse

## Betroffenen&shy;rechte

Sie haben das Recht, Auskunft über die von Ihnen gespeicherten Daten zu verlangen und diese Daten löschen zu lassen. 

Sie haben auch das Recht, die Berichtigung fehlerhafter Daten zu verlangen, soweit diese Daten unrichtig sind. 

Sie das Recht, der Verarbeitung der Daten zu widersprechen, wenn Sie der Meinung sind, dass die Verarbeitung unrechtmäßig ist oder dass Ihre Daten zu Unrecht verarbeitet werden. 

## Links

[EU- Datenschutzbehörde](https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/search-all-eu-institutions-and-bodies/european-data-protection-supervisor-edps_de)

[Österreichische Datenschutzbehörde](https://dsb.gv.at/)
`},{title:"Impressum",slug:"imprint",content:`# Impressum

Luca Mack\\
Lorystrassse 71/56\\
1110 Wien\\
[Mail](mailto:lucamack3@gmail.com)

## Foto-Lizenzen

Sofern nicht anders angegeben, stehen alle Fotos auf diesem Blog unter der Lizenz Creative Commons Namensnennung – Nicht kommerziell 4.0 International (CC BY-NC 4.0).

Das bedeutet:
- Du darfst die Fotos herunterladen, teilen und für private oder nicht-kommerzielle Projekte verwenden. (zB. als private Sammlung, einen Wikipedia Artikel damit befüllen, ...)
- Bei der Verwendung der Bilder ist das Copyright-Auszeichnung des Autors (zB. "CC BY-NC 4.0 by Luca Mack") zu beachten.
- Die kommerzielle Nutzung oder der Verkauf meiner Fotos ist nicht erlaubt. Solltest du die Fotos kommerziell nutzen wollen, wende dich bitte an mich via [Mail](mailto:lucamack3@gmail.com).

[Mehr Infos zur Lizenz](https://creativecommons.org/licenses/by-nc/4.0/deed.de)

## Disclaimer

Alle auf dieser Website veröffentlichten Inhalte unterliegen dem Urheberrecht und sind – sofern nicht anders gekennzeichnet – Eigentum von Luca Mack.

Für Inhalte, die unter der CC BY-NC 4.0 Lizenz veröffentlicht wurden, gelten die dort beschriebenen Nutzungsrechte. Eine darüber hinausgehende Nutzung, insbesondere für kommerzielle Zwecke, ist ohne meine vorherige schriftliche Zustimmung nicht gestattet.
Alle Inhalte wurden mit großer Sorgfalt erstellt. Trotzdem kann keine Garantie für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte gegeben werden.
Luca Mack haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung dieser Website entstehen.
`}],F2=M.createContext(void 0),e6=t=>{const a=no.c(9),{children:l}=t,[o,s]=M.useState(t6);let c,d;a[0]!==o?(c=()=>{typeof window<"u"&&localStorage.setItem("photos.lucamack.at::theme",o)},d=[o],a[0]=o,a[1]=c,a[2]=d):(c=a[1],d=a[2]),M.useEffect(c,d);let f;a[3]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{s(n6)},a[3]=f):f=a[3];const m=f;let h,v;a[4]!==o?(v={theme:o,toggleTheme:m},a[4]=o,a[5]=v):v=a[5],h=v;const w=h;let y;return a[6]!==l||a[7]!==w?(y=$.jsx(F2.Provider,{value:w,children:l}),a[6]=l,a[7]=w,a[8]=y):y=a[8],y},qi=()=>{const t=M.useContext(F2);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};function t6(){if(typeof window<"u"){const t=localStorage.getItem("photos.lucamack.at::theme");if(t==="light"||t==="dark")return t}return"light"}function n6(t){return t==="light"?"dark":"light"}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r6=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,o)=>o?o.toUpperCase():l.toLowerCase()),P1=t=>{const a=r6(t);return a.charAt(0).toUpperCase()+a.slice(1)},G2=(...t)=>t.filter((a,l,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===l).join(" ").trim(),l6=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=M.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:s="",children:c,iconNode:d,...f},m)=>M.createElement("svg",{ref:m,...o6,width:a,height:a,stroke:t,strokeWidth:o?Number(l)*24/Number(a):l,className:G2("lucide",s),...!c&&!l6(f)&&{"aria-hidden":"true"},...f},[...d.map(([h,v])=>M.createElement(h,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=(t,a)=>{const l=M.forwardRef(({className:o,...s},c)=>M.createElement(i6,{ref:c,iconNode:a,className:G2(`lucide-${a6(P1(t))}`,`lucide-${t}`,o),...s}));return l.displayName=P1(t),l};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],c6=ir("chevron-down",s6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],d6=ir("chevron-up",u6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],p6=ir("menu",f6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],m6=ir("moon",h6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Af=ir("panels-top-left",g6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],P2=ir("search",w6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],y6=ir("sun",v6);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],I2=ir("x",b6),zf=t=>{const a=no.c(18),{theme:l}=qi();let o;a[0]===Symbol.for("react.memo_cache_sentinel")?(o=$.jsx("defs",{children:$.jsx("clipPath",{id:"logo-clip",children:$.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"})})}),a[0]=o):o=a[0];const s=l==="light"?"fill-sky-300":"fill-sky-700";let c;a[1]!==s?(c=$.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",className:s}),a[1]=s,a[2]=c):c=a[2];const d=l==="light"?"fill-green-600":"fill-green-500";let f;a[3]!==d?(f=$.jsx("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21h15V15z",className:d}),a[3]=d,a[4]=f):f=a[4];const m=l==="light"?3:2.5,h=l==="light"?"fill-orange-200":"fill-white";let v;a[5]!==m||a[6]!==h?(v=$.jsx("circle",{r:m,cx:"9",cy:"9",className:h}),a[5]=m,a[6]=h,a[7]=v):v=a[7];let w;a[8]!==c||a[9]!==f||a[10]!==v?(w=$.jsxs("g",{clipPath:"url(#logo-clip)",children:[c,f,v]}),a[8]=c,a[9]=f,a[10]=v,a[11]=w):w=a[11];const y=l==="light"?"black":"white";let S;a[12]!==y?(S=$.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",fill:"none",stroke:y,strokeWidth:"1"}),a[12]=y,a[13]=S):S=a[13];let T;return a[14]!==t||a[15]!==S||a[16]!==w?(T=$.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t,children:[o,w,S]}),a[14]=t,a[15]=S,a[16]=w,a[17]=T):T=a[17],T};function Y2(t){var a,l,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(a=0;a<s;a++)t[a]&&(l=Y2(t[a]))&&(o&&(o+=" "),o+=l)}else for(l in t)t[l]&&(o&&(o+=" "),o+=l);return o}function x6(){for(var t,a,l=0,o="",s=arguments.length;l<s;l++)(t=arguments[l])&&(a=Y2(t))&&(o&&(o+=" "),o+=a);return o}const rh="-",S6=t=>{const a=_6(t),{conflictingClassGroups:l,conflictingClassGroupModifiers:o}=t;return{getClassGroupId:d=>{const f=d.split(rh);return f[0]===""&&f.length!==1&&f.shift(),W2(f,a)||T6(d)},getConflictingClassGroupIds:(d,f)=>{const m=l[d]||[];return f&&o[d]?[...m,...o[d]]:m}}},W2=(t,a)=>{if(t.length===0)return a.classGroupId;const l=t[0],o=a.nextPart.get(l),s=o?W2(t.slice(1),o):void 0;if(s)return s;if(a.validators.length===0)return;const c=t.join(rh);return a.validators.find(({validator:d})=>d(c))?.classGroupId},I1=/^\[(.+)\]$/,T6=t=>{if(I1.test(t)){const a=I1.exec(t)[1],l=a?.substring(0,a.indexOf(":"));if(l)return"arbitrary.."+l}},_6=t=>{const{theme:a,classGroups:l}=t,o={nextPart:new Map,validators:[]};for(const s in l)yp(l[s],o,s,a);return o},yp=(t,a,l,o)=>{t.forEach(s=>{if(typeof s=="string"){const c=s===""?a:Y1(a,s);c.classGroupId=l;return}if(typeof s=="function"){if(k6(s)){yp(s(o),a,l,o);return}a.validators.push({validator:s,classGroupId:l});return}Object.entries(s).forEach(([c,d])=>{yp(d,Y1(a,c),l,o)})})},Y1=(t,a)=>{let l=t;return a.split(rh).forEach(o=>{l.nextPart.has(o)||l.nextPart.set(o,{nextPart:new Map,validators:[]}),l=l.nextPart.get(o)}),l},k6=t=>t.isThemeGetter,M6=t=>{if(t<1)return{get:()=>{},set:()=>{}};let a=0,l=new Map,o=new Map;const s=(c,d)=>{l.set(c,d),a++,a>t&&(a=0,o=l,l=new Map)};return{get(c){let d=l.get(c);if(d!==void 0)return d;if((d=o.get(c))!==void 0)return s(c,d),d},set(c,d){l.has(c)?l.set(c,d):s(c,d)}}},bp="!",xp=":",E6=xp.length,D6=t=>{const{prefix:a,experimentalParseClassName:l}=t;let o=s=>{const c=[];let d=0,f=0,m=0,h;for(let T=0;T<s.length;T++){let E=s[T];if(d===0&&f===0){if(E===xp){c.push(s.slice(m,T)),m=T+E6;continue}if(E==="/"){h=T;continue}}E==="["?d++:E==="]"?d--:E==="("?f++:E===")"&&f--}const v=c.length===0?s:s.substring(m),w=C6(v),y=w!==v,S=h&&h>m?h-m:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:w,maybePostfixModifierPosition:S}};if(a){const s=a+xp,c=o;o=d=>d.startsWith(s)?c(d.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(l){const s=o;o=c=>l({className:c,parseClassName:s})}return o},C6=t=>t.endsWith(bp)?t.substring(0,t.length-1):t.startsWith(bp)?t.substring(1):t,N6=t=>{const a=Object.fromEntries(t.orderSensitiveModifiers.map(o=>[o,!0]));return o=>{if(o.length<=1)return o;const s=[];let c=[];return o.forEach(d=>{d[0]==="["||a[d]?(s.push(...c.sort(),d),c=[]):c.push(d)}),s.push(...c.sort()),s}},A6=t=>({cache:M6(t.cacheSize),parseClassName:D6(t),sortModifiers:N6(t),...S6(t)}),z6=/\s+/,U6=(t,a)=>{const{parseClassName:l,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:c}=a,d=[],f=t.trim().split(z6);let m="";for(let h=f.length-1;h>=0;h-=1){const v=f[h],{isExternal:w,modifiers:y,hasImportantModifier:S,baseClassName:T,maybePostfixModifierPosition:E}=l(v);if(w){m=v+(m.length>0?" "+m:m);continue}let D=!!E,x=o(D?T.substring(0,E):T);if(!x){if(!D){m=v+(m.length>0?" "+m:m);continue}if(x=o(T),!x){m=v+(m.length>0?" "+m:m);continue}D=!1}const N=c(y).join(":"),R=S?N+bp:N,H=R+x;if(d.includes(H))continue;d.push(H);const q=s(x,D);for(let V=0;V<q.length;++V){const ee=q[V];d.push(R+ee)}m=v+(m.length>0?" "+m:m)}return m};function j6(){let t=0,a,l,o="";for(;t<arguments.length;)(a=arguments[t++])&&(l=V2(a))&&(o&&(o+=" "),o+=l);return o}const V2=t=>{if(typeof t=="string")return t;let a,l="";for(let o=0;o<t.length;o++)t[o]&&(a=V2(t[o]))&&(l&&(l+=" "),l+=a);return l};function R6(t,...a){let l,o,s,c=d;function d(m){const h=a.reduce((v,w)=>w(v),t());return l=A6(h),o=l.cache.get,s=l.cache.set,c=f,f(m)}function f(m){const h=o(m);if(h)return h;const v=U6(m,l);return s(m,v),v}return function(){return c(j6.apply(null,arguments))}}const Tt=t=>{const a=l=>l[t]||[];return a.isThemeGetter=!0,a},X2=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,K2=/^\((?:(\w[\w-]*):)?(.+)\)$/i,O6=/^\d+\/\d+$/,q6=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,L6=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Z6=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,B6=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,H6=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jl=t=>O6.test(t),ze=t=>!!t&&!Number.isNaN(Number(t)),Ka=t=>!!t&&Number.isInteger(Number(t)),Uf=t=>t.endsWith("%")&&ze(t.slice(0,-1)),pa=t=>q6.test(t),$6=()=>!0,F6=t=>L6.test(t)&&!Z6.test(t),Q2=()=>!1,G6=t=>B6.test(t),P6=t=>H6.test(t),I6=t=>!fe(t)&&!pe(t),Y6=t=>ao(t,tv,Q2),fe=t=>X2.test(t),Er=t=>ao(t,nv,F6),jf=t=>ao(t,Q6,ze),W1=t=>ao(t,J2,Q2),W6=t=>ao(t,ev,P6),nc=t=>ao(t,av,G6),pe=t=>K2.test(t),ci=t=>ro(t,nv),V6=t=>ro(t,J6),V1=t=>ro(t,J2),X6=t=>ro(t,tv),K6=t=>ro(t,ev),ac=t=>ro(t,av,!0),ao=(t,a,l)=>{const o=X2.exec(t);return o?o[1]?a(o[1]):l(o[2]):!1},ro=(t,a,l=!1)=>{const o=K2.exec(t);return o?o[1]?a(o[1]):l:!1},J2=t=>t==="position"||t==="percentage",ev=t=>t==="image"||t==="url",tv=t=>t==="length"||t==="size"||t==="bg-size",nv=t=>t==="length",Q6=t=>t==="number",J6=t=>t==="family-name",av=t=>t==="shadow",e5=()=>{const t=Tt("color"),a=Tt("font"),l=Tt("text"),o=Tt("font-weight"),s=Tt("tracking"),c=Tt("leading"),d=Tt("breakpoint"),f=Tt("container"),m=Tt("spacing"),h=Tt("radius"),v=Tt("shadow"),w=Tt("inset-shadow"),y=Tt("text-shadow"),S=Tt("drop-shadow"),T=Tt("blur"),E=Tt("perspective"),D=Tt("aspect"),x=Tt("ease"),N=Tt("animate"),R=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],q=()=>[...H(),pe,fe],V=()=>["auto","hidden","clip","visible","scroll"],ee=()=>["auto","contain","none"],J=()=>[pe,fe,m],re=()=>[jl,"full","auto",...J()],ie=()=>[Ka,"none","subgrid",pe,fe],se=()=>["auto",{span:["full",Ka,pe,fe]},Ka,pe,fe],le=()=>[Ka,"auto",pe,fe],_e=()=>["auto","min","max","fr",pe,fe],xe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],me=()=>["start","end","center","stretch","center-safe","end-safe"],k=()=>["auto",...J()],z=()=>[jl,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...J()],U=()=>[t,pe,fe],K=()=>[...H(),V1,W1,{position:[pe,fe]}],C=()=>["no-repeat",{repeat:["","x","y","space","round"]}],F=()=>["auto","cover","contain",X6,Y6,{size:[pe,fe]}],j=()=>[Uf,ci,Er],Z=()=>["","none","full",h,pe,fe],W=()=>["",ze,ci,Er],X=()=>["solid","dashed","dotted","double"],ae=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>[ze,Uf,V1,W1],he=()=>["","none",T,pe,fe],ve=()=>["none",ze,pe,fe],He=()=>["none",ze,pe,fe],kt=()=>[ze,pe,fe],ht=()=>[jl,"full",...J()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[pa],breakpoint:[pa],color:[$6],container:[pa],"drop-shadow":[pa],ease:["in","out","in-out"],font:[I6],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[pa],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[pa],shadow:[pa],spacing:["px",ze],text:[pa],"text-shadow":[pa],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",jl,fe,pe,D]}],container:["container"],columns:[{columns:[ze,fe,pe,f]}],"break-after":[{"break-after":R()}],"break-before":[{"break-before":R()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:q()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:ee()}],"overscroll-x":[{"overscroll-x":ee()}],"overscroll-y":[{"overscroll-y":ee()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:re()}],"inset-x":[{"inset-x":re()}],"inset-y":[{"inset-y":re()}],start:[{start:re()}],end:[{end:re()}],top:[{top:re()}],right:[{right:re()}],bottom:[{bottom:re()}],left:[{left:re()}],visibility:["visible","invisible","collapse"],z:[{z:[Ka,"auto",pe,fe]}],basis:[{basis:[jl,"full","auto",f,...J()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ze,jl,"auto","initial","none",fe]}],grow:[{grow:["",ze,pe,fe]}],shrink:[{shrink:["",ze,pe,fe]}],order:[{order:[Ka,"first","last","none",pe,fe]}],"grid-cols":[{"grid-cols":ie()}],"col-start-end":[{col:se()}],"col-start":[{"col-start":le()}],"col-end":[{"col-end":le()}],"grid-rows":[{"grid-rows":ie()}],"row-start-end":[{row:se()}],"row-start":[{"row-start":le()}],"row-end":[{"row-end":le()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":_e()}],"auto-rows":[{"auto-rows":_e()}],gap:[{gap:J()}],"gap-x":[{"gap-x":J()}],"gap-y":[{"gap-y":J()}],"justify-content":[{justify:[...xe(),"normal"]}],"justify-items":[{"justify-items":[...me(),"normal"]}],"justify-self":[{"justify-self":["auto",...me()]}],"align-content":[{content:["normal",...xe()]}],"align-items":[{items:[...me(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...me(),{baseline:["","last"]}]}],"place-content":[{"place-content":xe()}],"place-items":[{"place-items":[...me(),"baseline"]}],"place-self":[{"place-self":["auto",...me()]}],p:[{p:J()}],px:[{px:J()}],py:[{py:J()}],ps:[{ps:J()}],pe:[{pe:J()}],pt:[{pt:J()}],pr:[{pr:J()}],pb:[{pb:J()}],pl:[{pl:J()}],m:[{m:k()}],mx:[{mx:k()}],my:[{my:k()}],ms:[{ms:k()}],me:[{me:k()}],mt:[{mt:k()}],mr:[{mr:k()}],mb:[{mb:k()}],ml:[{ml:k()}],"space-x":[{"space-x":J()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":J()}],"space-y-reverse":["space-y-reverse"],size:[{size:z()}],w:[{w:[f,"screen",...z()]}],"min-w":[{"min-w":[f,"screen","none",...z()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[d]},...z()]}],h:[{h:["screen","lh",...z()]}],"min-h":[{"min-h":["screen","lh","none",...z()]}],"max-h":[{"max-h":["screen","lh",...z()]}],"font-size":[{text:["base",l,ci,Er]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,pe,jf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Uf,fe]}],"font-family":[{font:[V6,fe,a]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,pe,fe]}],"line-clamp":[{"line-clamp":[ze,"none",pe,jf]}],leading:[{leading:[c,...J()]}],"list-image":[{"list-image":["none",pe,fe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",pe,fe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:U()}],"text-color":[{text:U()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:[ze,"from-font","auto",pe,Er]}],"text-decoration-color":[{decoration:U()}],"underline-offset":[{"underline-offset":[ze,"auto",pe,fe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:J()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",pe,fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",pe,fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:C()}],"bg-size":[{bg:F()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ka,pe,fe],radial:["",pe,fe],conic:[Ka,pe,fe]},K6,W6]}],"bg-color":[{bg:U()}],"gradient-from-pos":[{from:j()}],"gradient-via-pos":[{via:j()}],"gradient-to-pos":[{to:j()}],"gradient-from":[{from:U()}],"gradient-via":[{via:U()}],"gradient-to":[{to:U()}],rounded:[{rounded:Z()}],"rounded-s":[{"rounded-s":Z()}],"rounded-e":[{"rounded-e":Z()}],"rounded-t":[{"rounded-t":Z()}],"rounded-r":[{"rounded-r":Z()}],"rounded-b":[{"rounded-b":Z()}],"rounded-l":[{"rounded-l":Z()}],"rounded-ss":[{"rounded-ss":Z()}],"rounded-se":[{"rounded-se":Z()}],"rounded-ee":[{"rounded-ee":Z()}],"rounded-es":[{"rounded-es":Z()}],"rounded-tl":[{"rounded-tl":Z()}],"rounded-tr":[{"rounded-tr":Z()}],"rounded-br":[{"rounded-br":Z()}],"rounded-bl":[{"rounded-bl":Z()}],"border-w":[{border:W()}],"border-w-x":[{"border-x":W()}],"border-w-y":[{"border-y":W()}],"border-w-s":[{"border-s":W()}],"border-w-e":[{"border-e":W()}],"border-w-t":[{"border-t":W()}],"border-w-r":[{"border-r":W()}],"border-w-b":[{"border-b":W()}],"border-w-l":[{"border-l":W()}],"divide-x":[{"divide-x":W()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":W()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...X(),"hidden","none"]}],"divide-style":[{divide:[...X(),"hidden","none"]}],"border-color":[{border:U()}],"border-color-x":[{"border-x":U()}],"border-color-y":[{"border-y":U()}],"border-color-s":[{"border-s":U()}],"border-color-e":[{"border-e":U()}],"border-color-t":[{"border-t":U()}],"border-color-r":[{"border-r":U()}],"border-color-b":[{"border-b":U()}],"border-color-l":[{"border-l":U()}],"divide-color":[{divide:U()}],"outline-style":[{outline:[...X(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ze,pe,fe]}],"outline-w":[{outline:["",ze,ci,Er]}],"outline-color":[{outline:U()}],shadow:[{shadow:["","none",v,ac,nc]}],"shadow-color":[{shadow:U()}],"inset-shadow":[{"inset-shadow":["none",w,ac,nc]}],"inset-shadow-color":[{"inset-shadow":U()}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:U()}],"ring-offset-w":[{"ring-offset":[ze,Er]}],"ring-offset-color":[{"ring-offset":U()}],"inset-ring-w":[{"inset-ring":W()}],"inset-ring-color":[{"inset-ring":U()}],"text-shadow":[{"text-shadow":["none",y,ac,nc]}],"text-shadow-color":[{"text-shadow":U()}],opacity:[{opacity:[ze,pe,fe]}],"mix-blend":[{"mix-blend":[...ae(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ae()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ze]}],"mask-image-linear-from-pos":[{"mask-linear-from":oe()}],"mask-image-linear-to-pos":[{"mask-linear-to":oe()}],"mask-image-linear-from-color":[{"mask-linear-from":U()}],"mask-image-linear-to-color":[{"mask-linear-to":U()}],"mask-image-t-from-pos":[{"mask-t-from":oe()}],"mask-image-t-to-pos":[{"mask-t-to":oe()}],"mask-image-t-from-color":[{"mask-t-from":U()}],"mask-image-t-to-color":[{"mask-t-to":U()}],"mask-image-r-from-pos":[{"mask-r-from":oe()}],"mask-image-r-to-pos":[{"mask-r-to":oe()}],"mask-image-r-from-color":[{"mask-r-from":U()}],"mask-image-r-to-color":[{"mask-r-to":U()}],"mask-image-b-from-pos":[{"mask-b-from":oe()}],"mask-image-b-to-pos":[{"mask-b-to":oe()}],"mask-image-b-from-color":[{"mask-b-from":U()}],"mask-image-b-to-color":[{"mask-b-to":U()}],"mask-image-l-from-pos":[{"mask-l-from":oe()}],"mask-image-l-to-pos":[{"mask-l-to":oe()}],"mask-image-l-from-color":[{"mask-l-from":U()}],"mask-image-l-to-color":[{"mask-l-to":U()}],"mask-image-x-from-pos":[{"mask-x-from":oe()}],"mask-image-x-to-pos":[{"mask-x-to":oe()}],"mask-image-x-from-color":[{"mask-x-from":U()}],"mask-image-x-to-color":[{"mask-x-to":U()}],"mask-image-y-from-pos":[{"mask-y-from":oe()}],"mask-image-y-to-pos":[{"mask-y-to":oe()}],"mask-image-y-from-color":[{"mask-y-from":U()}],"mask-image-y-to-color":[{"mask-y-to":U()}],"mask-image-radial":[{"mask-radial":[pe,fe]}],"mask-image-radial-from-pos":[{"mask-radial-from":oe()}],"mask-image-radial-to-pos":[{"mask-radial-to":oe()}],"mask-image-radial-from-color":[{"mask-radial-from":U()}],"mask-image-radial-to-color":[{"mask-radial-to":U()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":H()}],"mask-image-conic-pos":[{"mask-conic":[ze]}],"mask-image-conic-from-pos":[{"mask-conic-from":oe()}],"mask-image-conic-to-pos":[{"mask-conic-to":oe()}],"mask-image-conic-from-color":[{"mask-conic-from":U()}],"mask-image-conic-to-color":[{"mask-conic-to":U()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:C()}],"mask-size":[{mask:F()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",pe,fe]}],filter:[{filter:["","none",pe,fe]}],blur:[{blur:he()}],brightness:[{brightness:[ze,pe,fe]}],contrast:[{contrast:[ze,pe,fe]}],"drop-shadow":[{"drop-shadow":["","none",S,ac,nc]}],"drop-shadow-color":[{"drop-shadow":U()}],grayscale:[{grayscale:["",ze,pe,fe]}],"hue-rotate":[{"hue-rotate":[ze,pe,fe]}],invert:[{invert:["",ze,pe,fe]}],saturate:[{saturate:[ze,pe,fe]}],sepia:[{sepia:["",ze,pe,fe]}],"backdrop-filter":[{"backdrop-filter":["","none",pe,fe]}],"backdrop-blur":[{"backdrop-blur":he()}],"backdrop-brightness":[{"backdrop-brightness":[ze,pe,fe]}],"backdrop-contrast":[{"backdrop-contrast":[ze,pe,fe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ze,pe,fe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ze,pe,fe]}],"backdrop-invert":[{"backdrop-invert":["",ze,pe,fe]}],"backdrop-opacity":[{"backdrop-opacity":[ze,pe,fe]}],"backdrop-saturate":[{"backdrop-saturate":[ze,pe,fe]}],"backdrop-sepia":[{"backdrop-sepia":["",ze,pe,fe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":J()}],"border-spacing-x":[{"border-spacing-x":J()}],"border-spacing-y":[{"border-spacing-y":J()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",pe,fe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ze,"initial",pe,fe]}],ease:[{ease:["linear","initial",x,pe,fe]}],delay:[{delay:[ze,pe,fe]}],animate:[{animate:["none",N,pe,fe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[E,pe,fe]}],"perspective-origin":[{"perspective-origin":q()}],rotate:[{rotate:ve()}],"rotate-x":[{"rotate-x":ve()}],"rotate-y":[{"rotate-y":ve()}],"rotate-z":[{"rotate-z":ve()}],scale:[{scale:He()}],"scale-x":[{"scale-x":He()}],"scale-y":[{"scale-y":He()}],"scale-z":[{"scale-z":He()}],"scale-3d":["scale-3d"],skew:[{skew:kt()}],"skew-x":[{"skew-x":kt()}],"skew-y":[{"skew-y":kt()}],transform:[{transform:[pe,fe,"","none","gpu","cpu"]}],"transform-origin":[{origin:q()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ht()}],"translate-x":[{"translate-x":ht()}],"translate-y":[{"translate-y":ht()}],"translate-z":[{"translate-z":ht()}],"translate-none":["translate-none"],accent:[{accent:U()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:U()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",pe,fe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":J()}],"scroll-mx":[{"scroll-mx":J()}],"scroll-my":[{"scroll-my":J()}],"scroll-ms":[{"scroll-ms":J()}],"scroll-me":[{"scroll-me":J()}],"scroll-mt":[{"scroll-mt":J()}],"scroll-mr":[{"scroll-mr":J()}],"scroll-mb":[{"scroll-mb":J()}],"scroll-ml":[{"scroll-ml":J()}],"scroll-p":[{"scroll-p":J()}],"scroll-px":[{"scroll-px":J()}],"scroll-py":[{"scroll-py":J()}],"scroll-ps":[{"scroll-ps":J()}],"scroll-pe":[{"scroll-pe":J()}],"scroll-pt":[{"scroll-pt":J()}],"scroll-pr":[{"scroll-pr":J()}],"scroll-pb":[{"scroll-pb":J()}],"scroll-pl":[{"scroll-pl":J()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",pe,fe]}],fill:[{fill:["none",...U()]}],"stroke-w":[{stroke:[ze,ci,Er,jf]}],stroke:[{stroke:["none",...U()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},t5=R6(e5);function n5(...t){return t5(x6(t))}const a5=t=>{const a=no.c(14),{iconToRight:l,hasKeyboardShortcut:o,iconSize:s,className:c,ariaLabel:d,onOpen:f}=t,m=l===void 0?!1:l,h=o===void 0?!0:o,v=s===void 0?16:s,{theme:w}=qi(),y=`${m?"flex-row-reverse":""}`;let S;a[0]!==c||a[1]!==y?(S=n5("flex items-center gap-2 px-3 py-1.5 text-sm",y,c),a[0]=c,a[1]=y,a[2]=S):S=a[2];const T=d||"Suche nach Fotos, Serien, Apps und Seiten öffnen";let E;a[3]!==v?(E=$.jsx(P2,{size:v}),a[3]=v,a[4]=E):E=a[4];let D;a[5]!==h||a[6]!==w?(D=h&&$.jsxs("kbd",{className:"ml-auto inline-flex select-none items-center gap-1 font-mono text-xs font-medium opacity-30 ",children:[$.jsx("span",{className:"text-[1.3em]",children:"⌘"}),"+ K"]}),a[5]=h,a[6]=w,a[7]=D):D=a[7];let x;return a[8]!==f||a[9]!==S||a[10]!==T||a[11]!==E||a[12]!==D?(x=$.jsxs("button",{onClick:f,className:S,"aria-label":T,children:[E,D]}),a[8]=f,a[9]=S,a[10]=T,a[11]=E,a[12]=D,a[13]=x):x=a[13],x},r5=t=>{const a=no.c(100),{onOpenCommandPalette:l,setMobileMenuOpen:o,mobileMenuOpen:s}=t,[c,d]=M.useState(!1);let f;a[0]!==o?(f=ye=>{d(ye),o&&o(ye)},a[0]=o,a[1]=f):f=a[1];const m=f;let h,v;a[2]!==s?(h=()=>{s!==void 0&&d(s)},v=[s],a[2]=s,a[3]=h,a[4]=v):(h=a[3],v=a[4]),M.useEffect(h,v);const w=M.useRef(null),[y,S]=M.useState(!1),[T,E]=M.useState(!1),{theme:D,toggleTheme:x}=qi();let N;a[5]!==D?(N=(ye,Ne,et)=>`block w-min py-1 ${(et===void 0?!0:et)?"px-4":""}  text-left ${(Ne===void 0?!1:Ne)?"text-xs":"text-base"} truncate ${ye?`underline underline-offset-4 ${D==="light"?"text-red-600 decoration-black":"text-red-300 decoration-white"}`:"font-normal"}`,a[5]=D,a[6]=N):N=a[6];const R=N;let H;a[7]!==m?(H=()=>{m(!1)},a[7]=m,a[8]=H):H=a[8];const q=H;let V;a[9]===Symbol.for("react.memo_cache_sentinel")?(V=ye=>{const Ne=w.current;if(Ne){const et=Ne.clientHeight*.8;Ne.scrollBy({top:ye==="up"?-et:et,behavior:"smooth"})}},a[9]=V):V=a[9];const ee=V;let J,re;a[10]===Symbol.for("react.memo_cache_sentinel")?(J=()=>{const ye=()=>{const et=w.current;if(et){const{scrollTop:Tn,scrollHeight:sr,clientHeight:cr}=et,su=Tn<=0,Gi=Tn>=sr-cr-1;S(!su),E(!Gi)}},Ne=w.current;if(Ne){ye(),Ne.addEventListener("scroll",ye);const et=new ResizeObserver(ye);return et.observe(Ne),()=>{Ne.removeEventListener("scroll",ye),et.unobserve(Ne)}}},re=[gi],a[10]=J,a[11]=re):(J=a[10],re=a[11]),M.useEffect(J,re);let ie;a[12]!==l?(ie=l&&$.jsx("div",{className:"p-1",children:$.jsx(a5,{onOpen:l})}),a[12]=l,a[13]=ie):ie=a[13];const se=`Farmodus auf ${D==="light"?"Dunkel":"Hell"} wechseln`;let le;a[14]!==D?(le=D==="light"?$.jsx(m6,{size:16}):$.jsx(y6,{size:16}),a[14]=D,a[15]=le):le=a[15];let _e;a[16]!==se||a[17]!==le||a[18]!==x?(_e=$.jsx("div",{className:"p-2",children:$.jsx("button",{onClick:x,className:"cursor-pointer flex items-center justify-start p-2","aria-label":se,children:le})}),a[16]=se,a[17]=le,a[18]=x,a[19]=_e):_e=a[19];let xe;a[20]!==_e||a[21]!==ie?(xe=$.jsxs("div",{className:"flex items-center justify-between gap-2",children:[ie,_e]}),a[20]=_e,a[21]=ie,a[22]=xe):xe=a[22];const me=xe,k=`md:hidden py-4 px-4 flex justify-between items-center sticky top-0 z-10 ${D==="light"?"bg-white text-black":"dark:bg-black dark:text-white"}`;let z;a[23]===Symbol.for("react.memo_cache_sentinel")?(z=$.jsx(Kt,{to:"/",title:"Startseite",className:"text-md font-bold",children:$.jsx(zf,{className:"",width:24,height:24})}),a[23]=z):z=a[23];let U;a[24]!==c||a[25]!==m?(U=()=>m(!c),a[24]=c,a[25]=m,a[26]=U):U=a[26];let K;a[27]===Symbol.for("react.memo_cache_sentinel")?(K=$.jsx(p6,{size:24,strokeWidth:1.5}),a[27]=K):K=a[27];let C;a[28]!==U?(C=$.jsx("button",{onClick:U,className:"cursor-pointer p-0","aria-label":"Navigation öffnen",children:K}),a[28]=U,a[29]=C):C=a[29];let F;a[30]!==k||a[31]!==C?(F=$.jsxs("header",{className:k,children:[z,C]}),a[30]=k,a[31]=C,a[32]=F):F=a[32];let j;a[33]!==q||a[34]!==c||a[35]!==R||a[36]!==m||a[37]!==D||a[38]!==me?(j=c&&$.jsxs("div",{className:`md:hidden fixed inset-0 z-[1000000] flex flex-col ${D==="light"?"bg-white":"dark bg-black"}`,children:[$.jsxs("div",{className:"flex-shrink-0 flex justify-between items-center p-4",children:[$.jsx(Kt,{to:"/",title:"Startseite",className:"text-md",onClick:q,children:$.jsx(zf,{width:24,height:24})}),$.jsx("button",{onClick:()=>m(!1),className:"cursor-pointer p-0","aria-label":"Navigation schließen",children:$.jsx(I2,{size:24,strokeWidth:1.5})})]}),$.jsxs("div",{className:"flex-grow overflow-y-auto pb-4 no-scrollbar",children:[$.jsx("nav",{children:gi.map(ye=>$.jsx(Kt,{title:`Fotoserie: ${ye.title||ye.name}`,to:`/gallery/${ye.slug}`,className:Ne=>{const{isActive:et}=Ne;return R(et)},onClick:q,children:ye.title||ye.name},ye.slug))}),$.jsxs("div",{className:"mt-4",children:[$.jsxs("section",{className:"flex gap-0 mb-4 px-4 gap-4",children:[$.jsx(Kt,{to:"/app/map",title:"Alle Fotos auf einer Karte anzeigen",className:ye=>{const{isActive:Ne}=ye;return R(Ne,!1,!1)},onClick:q,children:"Karte"}),$.jsx(Kt,{to:"/app/list",title:"Alle Fotos als Liste anzeigen",className:ye=>{const{isActive:Ne}=ye;return R(Ne,!1,!1)},onClick:q,children:"Liste"}),$.jsx(Kt,{to:"/app/timeline",title:"Alle Fotos als Timeline anzeigen",className:ye=>{const{isActive:Ne}=ye;return R(Ne,!1,!1)},onClick:q,children:"Timeline"})]}),vp.map(ye=>$.jsx(Kt,{to:`/page/${ye.slug}`,title:ye.title,className:Ne=>{const{isActive:et}=Ne;return R(et,!0)},onClick:q,children:ye.title},ye.slug))]}),$.jsx("div",{className:" mr-2",children:me})]})]}),a[33]=q,a[34]=c,a[35]=R,a[36]=m,a[37]=D,a[38]=me,a[39]=j):j=a[39];let Z;a[40]!==R?(Z=ye=>{const{isActive:Ne}=ye;return R(Ne)+" flex items-center gap-2"},a[40]=R,a[41]=Z):Z=a[41];let W;a[42]===Symbol.for("react.memo_cache_sentinel")?(W=$.jsx(zf,{width:24,height:24}),a[42]=W):W=a[42];let X;a[43]!==Z?(X=$.jsx("div",{className:"flex-shrink-0",children:$.jsx(Kt,{to:"/",title:"Startseite",className:Z,end:!0,children:W})}),a[43]=Z,a[44]=X):X=a[44];let ae;a[45]!==R?(ae=gi.map(ye=>$.jsx(Kt,{title:`Fotoserie: ${ye.title||ye.name}`,to:`/gallery/${ye.slug}`,className:Ne=>{const{isActive:et}=Ne;return R(et)},children:ye.title||ye.name},ye.slug)),a[45]=R,a[46]=ae):ae=a[46];let oe;a[47]!==ae?(oe=$.jsx("nav",{ref:w,className:"h-full overflow-y-auto no-scrollbar",children:ae}),a[47]=ae,a[48]=oe):oe=a[48];const he=`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${D==="light"?"from-white":"from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${y?"opacity-100":"opacity-0 pointer-events-none"}`;let ve;a[49]===Symbol.for("react.memo_cache_sentinel")?(ve=()=>ee("up"),a[49]=ve):ve=a[49];const He=`absolute top-0 left-7 -translate-x-1/2 cursor-pointer ${y?"pointer-events-auto":"pointer-events-none"}`;let kt;a[50]===Symbol.for("react.memo_cache_sentinel")?(kt=$.jsx(d6,{size:20}),a[50]=kt):kt=a[50];let ht;a[51]!==He?(ht=$.jsx("div",{onClick:ve,className:He,children:kt}),a[51]=He,a[52]=ht):ht=a[52];let Ht;a[53]!==he||a[54]!==ht?(Ht=$.jsx("div",{className:he,children:ht}),a[53]=he,a[54]=ht,a[55]=Ht):Ht=a[55];const Rn=`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${D==="light"?"from-white":"from-black"} to-transparent pointer-events-none transition-opacity duration-300 ${T?"opacity-100":"opacity-0 pointer-events-none"}`;let Yr;a[56]===Symbol.for("react.memo_cache_sentinel")?(Yr=()=>ee("down"),a[56]=Yr):Yr=a[56];const so=`absolute bottom-0 left-7 -translate-x-1/2 cursor-pointer ${T?"pointer-events-auto":"pointer-events-none"}`;let $t;a[57]===Symbol.for("react.memo_cache_sentinel")?($t=$.jsx(c6,{size:20}),a[57]=$t):$t=a[57];let Ta;a[58]!==so?(Ta=$.jsx("div",{onClick:Yr,className:so,children:$t}),a[58]=so,a[59]=Ta):Ta=a[59];let Vn;a[60]!==Rn||a[61]!==Ta?(Vn=$.jsx("div",{className:Rn,children:Ta}),a[60]=Rn,a[61]=Ta,a[62]=Vn):Vn=a[62];let Xn;a[63]!==oe||a[64]!==Ht||a[65]!==Vn?(Xn=$.jsxs("div",{className:"relative flex-grow my-4 overflow-hidden",children:[oe,Ht,Vn]}),a[63]=oe,a[64]=Ht,a[65]=Vn,a[66]=Xn):Xn=a[66];let Sn;a[67]!==R?(Sn=ye=>{const{isActive:Ne}=ye;return R(Ne,!0,!1)},a[67]=R,a[68]=Sn):Sn=a[68];let _a;a[69]!==q||a[70]!==Sn?(_a=$.jsx(Kt,{to:"/app/map",title:"Alle Fotos auf einer Karte anzeigen",className:Sn,onClick:q,children:"Karte"}),a[69]=q,a[70]=Sn,a[71]=_a):_a=a[71];let Kn;a[72]!==R?(Kn=ye=>{const{isActive:Ne}=ye;return R(Ne,!0,!1)},a[72]=R,a[73]=Kn):Kn=a[73];let ka;a[74]!==q||a[75]!==Kn?(ka=$.jsx(Kt,{to:"/app/list",title:"Alle Fotos als Such- und Filterbare Liste",className:Kn,onClick:q,children:"Liste"}),a[74]=q,a[75]=Kn,a[76]=ka):ka=a[76];let Ma;a[77]!==R?(Ma=ye=>{const{isActive:Ne}=ye;return R(Ne,!0,!1)},a[77]=R,a[78]=Ma):Ma=a[78];let cn;a[79]!==q||a[80]!==Ma?(cn=$.jsx(Kt,{to:"/app/timeline",title:"Alle Fotos als Timeline anzeigen",className:Ma,onClick:q,children:"Timeline"}),a[79]=q,a[80]=Ma,a[81]=cn):cn=a[81];let mt;a[82]!==_a||a[83]!==ka||a[84]!==cn?(mt=$.jsxs("section",{className:"flex gap-4 px-4 mb-2 sm:mb-6",children:[_a,ka,cn]}),a[82]=_a,a[83]=ka,a[84]=cn,a[85]=mt):mt=a[85];let Ft;a[86]!==R?(Ft=vp.map(ye=>$.jsx(Kt,{to:`/page/${ye.slug}`,title:ye.title,className:Ne=>{const{isActive:et}=Ne;return R(et,!0)},children:ye.title},ye.slug)),a[86]=R,a[87]=Ft):Ft=a[87];let gt;a[88]!==mt||a[89]!==Ft||a[90]!==me?(gt=$.jsxs("div",{className:"flex-shrink-0",children:[mt,Ft,me]}),a[88]=mt,a[89]=Ft,a[90]=me,a[91]=gt):gt=a[91];let Ea;a[92]!==X||a[93]!==Xn||a[94]!==gt?(Ea=$.jsxs("aside",{className:"hidden md:flex pt-4 md:flex-col md:w-[var(--sidebar-width)] flex-shrink-0 h-[calc(100vh)]",children:[X,Xn,gt]}),a[92]=X,a[93]=Xn,a[94]=gt,a[95]=Ea):Ea=a[95];let Wr;return a[96]!==F||a[97]!==j||a[98]!==Ea?(Wr=$.jsxs($.Fragment,{children:[F,j,Ea]}),a[96]=F,a[97]=j,a[98]=Ea,a[99]=Wr):Wr=a[99],Wr};var X1=1,l5=.9,o5=.8,i5=.17,Rf=.1,Of=.999,s5=.9999,c5=.99,u5=/[\\\/_+.#"@\[\(\{&]/,d5=/[\\\/_+.#"@\[\(\{&]/g,f5=/[\s-]/,rv=/[\s-]/g;function Sp(t,a,l,o,s,c,d){if(c===a.length)return s===t.length?X1:c5;var f=`${s},${c}`;if(d[f]!==void 0)return d[f];for(var m=o.charAt(c),h=l.indexOf(m,s),v=0,w,y,S,T;h>=0;)w=Sp(t,a,l,o,h+1,c+1,d),w>v&&(h===s?w*=X1:u5.test(t.charAt(h-1))?(w*=o5,S=t.slice(s,h-1).match(d5),S&&s>0&&(w*=Math.pow(Of,S.length))):f5.test(t.charAt(h-1))?(w*=l5,T=t.slice(s,h-1).match(rv),T&&s>0&&(w*=Math.pow(Of,T.length))):(w*=i5,s>0&&(w*=Math.pow(Of,h-s))),t.charAt(h)!==a.charAt(c)&&(w*=s5)),(w<Rf&&l.charAt(h-1)===o.charAt(c+1)||o.charAt(c+1)===o.charAt(c)&&l.charAt(h-1)!==o.charAt(c))&&(y=Sp(t,a,l,o,h+1,c+2,d),y*Rf>w&&(w=y*Rf)),w>v&&(v=w),h=l.indexOf(m,h+1);return d[f]=v,v}function K1(t){return t.toLowerCase().replace(rv," ")}function p5(t,a,l){return t=l&&l.length>0?`${t+" "+l.join(" ")}`:t,Sp(t,a,K1(t),K1(a),0,0,{})}function nr(t,a,{checkForDefaultPrevented:l=!0}={}){return function(s){if(t?.(s),l===!1||!s.defaultPrevented)return a?.(s)}}function Q1(t,a){if(typeof t=="function")return t(a);t!=null&&(t.current=a)}function Or(...t){return a=>{let l=!1;const o=t.map(s=>{const c=Q1(s,a);return!l&&typeof c=="function"&&(l=!0),c});if(l)return()=>{for(let s=0;s<o.length;s++){const c=o[s];typeof c=="function"?c():Q1(t[s],null)}}}}function $r(...t){return M.useCallback(Or(...t),t)}function h5(t,a){const l=M.createContext(a),o=c=>{const{children:d,...f}=c,m=M.useMemo(()=>f,Object.values(f));return $.jsx(l.Provider,{value:m,children:d})};o.displayName=t+"Provider";function s(c){const d=M.useContext(l);if(d)return d;if(a!==void 0)return a;throw new Error(`\`${c}\` must be used within \`${t}\``)}return[o,s]}function m5(t,a=[]){let l=[];function o(c,d){const f=M.createContext(d),m=l.length;l=[...l,d];const h=w=>{const{scope:y,children:S,...T}=w,E=y?.[t]?.[m]||f,D=M.useMemo(()=>T,Object.values(T));return $.jsx(E.Provider,{value:D,children:S})};h.displayName=c+"Provider";function v(w,y){const S=y?.[t]?.[m]||f,T=M.useContext(S);if(T)return T;if(d!==void 0)return d;throw new Error(`\`${w}\` must be used within \`${c}\``)}return[h,v]}const s=()=>{const c=l.map(d=>M.createContext(d));return function(f){const m=f?.[t]||c;return M.useMemo(()=>({[`__scope${t}`]:{...f,[t]:m}}),[f,m])}};return s.scopeName=t,[o,g5(s,...a)]}function g5(...t){const a=t[0];if(t.length===1)return a;const l=()=>{const o=t.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(c){const d=o.reduce((f,{useScope:m,scopeName:h})=>{const w=m(c)[`__scope${h}`];return{...f,...w}},{});return M.useMemo(()=>({[`__scope${a.scopeName}`]:d}),[d])}};return l.scopeName=a.scopeName,l}var Si=globalThis?.document?M.useLayoutEffect:()=>{},w5=T2[" useId ".trim().toString()]||(()=>{}),v5=0;function ya(t){const[a,l]=M.useState(w5());return Si(()=>{l(o=>o??String(v5++))},[t]),a?`radix-${a}`:""}var y5=T2[" useInsertionEffect ".trim().toString()]||Si;function b5({prop:t,defaultProp:a,onChange:l=()=>{},caller:o}){const[s,c,d]=x5({defaultProp:a,onChange:l}),f=t!==void 0,m=f?t:s;{const v=M.useRef(t!==void 0);M.useEffect(()=>{const w=v.current;w!==f&&console.warn(`${o} is changing from ${w?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),v.current=f},[f,o])}const h=M.useCallback(v=>{if(f){const w=S5(v)?v(t):v;w!==t&&d.current?.(w)}else c(v)},[f,t,c,d]);return[m,h]}function x5({defaultProp:t,onChange:a}){const[l,o]=M.useState(t),s=M.useRef(l),c=M.useRef(a);return y5(()=>{c.current=a},[a]),M.useEffect(()=>{s.current!==l&&(c.current?.(l),s.current=l)},[l,s]),[l,o,c]}function S5(t){return typeof t=="function"}function lv(t){const a=T5(t),l=M.forwardRef((o,s)=>{const{children:c,...d}=o,f=M.Children.toArray(c),m=f.find(k5);if(m){const h=m.props.children,v=f.map(w=>w===m?M.Children.count(h)>1?M.Children.only(null):M.isValidElement(h)?h.props.children:null:w);return $.jsx(a,{...d,ref:s,children:M.isValidElement(h)?M.cloneElement(h,void 0,v):null})}return $.jsx(a,{...d,ref:s,children:c})});return l.displayName=`${t}.Slot`,l}function T5(t){const a=M.forwardRef((l,o)=>{const{children:s,...c}=l;if(M.isValidElement(s)){const d=E5(s),f=M5(c,s.props);return s.type!==M.Fragment&&(f.ref=o?Or(o,d):d),M.cloneElement(s,f)}return M.Children.count(s)>1?M.Children.only(null):null});return a.displayName=`${t}.SlotClone`,a}var _5=Symbol("radix.slottable");function k5(t){return M.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===_5}function M5(t,a){const l={...a};for(const o in a){const s=t[o],c=a[o];/^on[A-Z]/.test(o)?s&&c?l[o]=(...f)=>{const m=c(...f);return s(...f),m}:s&&(l[o]=s):o==="style"?l[o]={...s,...c}:o==="className"&&(l[o]=[s,c].filter(Boolean).join(" "))}return{...t,...l}}function E5(t){let a=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,l=a&&"isReactWarning"in a&&a.isReactWarning;return l?t.ref:(a=Object.getOwnPropertyDescriptor(t,"ref")?.get,l=a&&"isReactWarning"in a&&a.isReactWarning,l?t.props.ref:t.props.ref||t.ref)}var D5=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Rt=D5.reduce((t,a)=>{const l=lv(`Primitive.${a}`),o=M.forwardRef((s,c)=>{const{asChild:d,...f}=s,m=d?l:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),$.jsx(m,{...f,ref:c})});return o.displayName=`Primitive.${a}`,{...t,[a]:o}},{});function C5(t,a){t&&$2.flushSync(()=>t.dispatchEvent(a))}function Ti(t){const a=M.useRef(t);return M.useEffect(()=>{a.current=t}),M.useMemo(()=>(...l)=>a.current?.(...l),[])}function N5(t,a=globalThis?.document){const l=Ti(t);M.useEffect(()=>{const o=s=>{s.key==="Escape"&&l(s)};return a.addEventListener("keydown",o,{capture:!0}),()=>a.removeEventListener("keydown",o,{capture:!0})},[l,a])}var A5="DismissableLayer",Tp="dismissableLayer.update",z5="dismissableLayer.pointerDownOutside",U5="dismissableLayer.focusOutside",J1,ov=M.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),iv=M.forwardRef((t,a)=>{const{disableOutsidePointerEvents:l=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:c,onInteractOutside:d,onDismiss:f,...m}=t,h=M.useContext(ov),[v,w]=M.useState(null),y=v?.ownerDocument??globalThis?.document,[,S]=M.useState({}),T=$r(a,ee=>w(ee)),E=Array.from(h.layers),[D]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),x=E.indexOf(D),N=v?E.indexOf(v):-1,R=h.layersWithOutsidePointerEventsDisabled.size>0,H=N>=x,q=O5(ee=>{const J=ee.target,re=[...h.branches].some(ie=>ie.contains(J));!H||re||(s?.(ee),d?.(ee),ee.defaultPrevented||f?.())},y),V=q5(ee=>{const J=ee.target;[...h.branches].some(ie=>ie.contains(J))||(c?.(ee),d?.(ee),ee.defaultPrevented||f?.())},y);return N5(ee=>{N===h.layers.size-1&&(o?.(ee),!ee.defaultPrevented&&f&&(ee.preventDefault(),f()))},y),M.useEffect(()=>{if(v)return l&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(J1=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(v)),h.layers.add(v),ew(),()=>{l&&h.layersWithOutsidePointerEventsDisabled.size===1&&(y.body.style.pointerEvents=J1)}},[v,y,l,h]),M.useEffect(()=>()=>{v&&(h.layers.delete(v),h.layersWithOutsidePointerEventsDisabled.delete(v),ew())},[v,h]),M.useEffect(()=>{const ee=()=>S({});return document.addEventListener(Tp,ee),()=>document.removeEventListener(Tp,ee)},[]),$.jsx(Rt.div,{...m,ref:T,style:{pointerEvents:R?H?"auto":"none":void 0,...t.style},onFocusCapture:nr(t.onFocusCapture,V.onFocusCapture),onBlurCapture:nr(t.onBlurCapture,V.onBlurCapture),onPointerDownCapture:nr(t.onPointerDownCapture,q.onPointerDownCapture)})});iv.displayName=A5;var j5="DismissableLayerBranch",R5=M.forwardRef((t,a)=>{const l=M.useContext(ov),o=M.useRef(null),s=$r(a,o);return M.useEffect(()=>{const c=o.current;if(c)return l.branches.add(c),()=>{l.branches.delete(c)}},[l.branches]),$.jsx(Rt.div,{...t,ref:s})});R5.displayName=j5;function O5(t,a=globalThis?.document){const l=Ti(t),o=M.useRef(!1),s=M.useRef(()=>{});return M.useEffect(()=>{const c=f=>{if(f.target&&!o.current){let m=function(){sv(z5,l,h,{discrete:!0})};const h={originalEvent:f};f.pointerType==="touch"?(a.removeEventListener("click",s.current),s.current=m,a.addEventListener("click",s.current,{once:!0})):m()}else a.removeEventListener("click",s.current);o.current=!1},d=window.setTimeout(()=>{a.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(d),a.removeEventListener("pointerdown",c),a.removeEventListener("click",s.current)}},[a,l]),{onPointerDownCapture:()=>o.current=!0}}function q5(t,a=globalThis?.document){const l=Ti(t),o=M.useRef(!1);return M.useEffect(()=>{const s=c=>{c.target&&!o.current&&sv(U5,l,{originalEvent:c},{discrete:!1})};return a.addEventListener("focusin",s),()=>a.removeEventListener("focusin",s)},[a,l]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ew(){const t=new CustomEvent(Tp);document.dispatchEvent(t)}function sv(t,a,l,{discrete:o}){const s=l.originalEvent.target,c=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:l});a&&s.addEventListener(t,a,{once:!0}),o?C5(s,c):s.dispatchEvent(c)}var qf="focusScope.autoFocusOnMount",Lf="focusScope.autoFocusOnUnmount",tw={bubbles:!1,cancelable:!0},L5="FocusScope",cv=M.forwardRef((t,a)=>{const{loop:l=!1,trapped:o=!1,onMountAutoFocus:s,onUnmountAutoFocus:c,...d}=t,[f,m]=M.useState(null),h=Ti(s),v=Ti(c),w=M.useRef(null),y=$r(a,E=>m(E)),S=M.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;M.useEffect(()=>{if(o){let E=function(R){if(S.paused||!f)return;const H=R.target;f.contains(H)?w.current=H:er(w.current,{select:!0})},D=function(R){if(S.paused||!f)return;const H=R.relatedTarget;H!==null&&(f.contains(H)||er(w.current,{select:!0}))},x=function(R){if(document.activeElement===document.body)for(const q of R)q.removedNodes.length>0&&er(f)};document.addEventListener("focusin",E),document.addEventListener("focusout",D);const N=new MutationObserver(x);return f&&N.observe(f,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",E),document.removeEventListener("focusout",D),N.disconnect()}}},[o,f,S.paused]),M.useEffect(()=>{if(f){aw.add(S);const E=document.activeElement;if(!f.contains(E)){const x=new CustomEvent(qf,tw);f.addEventListener(qf,h),f.dispatchEvent(x),x.defaultPrevented||(Z5(G5(uv(f)),{select:!0}),document.activeElement===E&&er(f))}return()=>{f.removeEventListener(qf,h),setTimeout(()=>{const x=new CustomEvent(Lf,tw);f.addEventListener(Lf,v),f.dispatchEvent(x),x.defaultPrevented||er(E??document.body,{select:!0}),f.removeEventListener(Lf,v),aw.remove(S)},0)}}},[f,h,v,S]);const T=M.useCallback(E=>{if(!l&&!o||S.paused)return;const D=E.key==="Tab"&&!E.altKey&&!E.ctrlKey&&!E.metaKey,x=document.activeElement;if(D&&x){const N=E.currentTarget,[R,H]=B5(N);R&&H?!E.shiftKey&&x===H?(E.preventDefault(),l&&er(R,{select:!0})):E.shiftKey&&x===R&&(E.preventDefault(),l&&er(H,{select:!0})):x===N&&E.preventDefault()}},[l,o,S.paused]);return $.jsx(Rt.div,{tabIndex:-1,...d,ref:y,onKeyDown:T})});cv.displayName=L5;function Z5(t,{select:a=!1}={}){const l=document.activeElement;for(const o of t)if(er(o,{select:a}),document.activeElement!==l)return}function B5(t){const a=uv(t),l=nw(a,t),o=nw(a.reverse(),t);return[l,o]}function uv(t){const a=[],l=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;l.nextNode();)a.push(l.currentNode);return a}function nw(t,a){for(const l of t)if(!H5(l,{upTo:a}))return l}function H5(t,{upTo:a}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(a!==void 0&&t===a)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function $5(t){return t instanceof HTMLInputElement&&"select"in t}function er(t,{select:a=!1}={}){if(t&&t.focus){const l=document.activeElement;t.focus({preventScroll:!0}),t!==l&&$5(t)&&a&&t.select()}}var aw=F5();function F5(){let t=[];return{add(a){const l=t[0];a!==l&&l?.pause(),t=rw(t,a),t.unshift(a)},remove(a){t=rw(t,a),t[0]?.resume()}}}function rw(t,a){const l=[...t],o=l.indexOf(a);return o!==-1&&l.splice(o,1),l}function G5(t){return t.filter(a=>a.tagName!=="A")}var P5="Portal",dv=M.forwardRef((t,a)=>{const{container:l,...o}=t,[s,c]=M.useState(!1);Si(()=>c(!0),[]);const d=l||s&&globalThis?.document?.body;return d?Vx.createPortal($.jsx(Rt.div,{...o,ref:a}),d):null});dv.displayName=P5;function I5(t,a){return M.useReducer((l,o)=>a[l][o]??l,t)}var Vc=t=>{const{present:a,children:l}=t,o=Y5(a),s=typeof l=="function"?l({present:o.isPresent}):M.Children.only(l),c=$r(o.ref,W5(s));return typeof l=="function"||o.isPresent?M.cloneElement(s,{ref:c}):null};Vc.displayName="Presence";function Y5(t){const[a,l]=M.useState(),o=M.useRef(null),s=M.useRef(t),c=M.useRef("none"),d=t?"mounted":"unmounted",[f,m]=I5(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return M.useEffect(()=>{const h=rc(o.current);c.current=f==="mounted"?h:"none"},[f]),Si(()=>{const h=o.current,v=s.current;if(v!==t){const y=c.current,S=rc(h);t?m("MOUNT"):S==="none"||h?.display==="none"?m("UNMOUNT"):m(v&&y!==S?"ANIMATION_OUT":"UNMOUNT"),s.current=t}},[t,m]),Si(()=>{if(a){let h;const v=a.ownerDocument.defaultView??window,w=S=>{const E=rc(o.current).includes(S.animationName);if(S.target===a&&E&&(m("ANIMATION_END"),!s.current)){const D=a.style.animationFillMode;a.style.animationFillMode="forwards",h=v.setTimeout(()=>{a.style.animationFillMode==="forwards"&&(a.style.animationFillMode=D)})}},y=S=>{S.target===a&&(c.current=rc(o.current))};return a.addEventListener("animationstart",y),a.addEventListener("animationcancel",w),a.addEventListener("animationend",w),()=>{v.clearTimeout(h),a.removeEventListener("animationstart",y),a.removeEventListener("animationcancel",w),a.removeEventListener("animationend",w)}}else m("ANIMATION_END")},[a,m]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:M.useCallback(h=>{o.current=h?getComputedStyle(h):null,l(h)},[])}}function rc(t){return t?.animationName||"none"}function W5(t){let a=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,l=a&&"isReactWarning"in a&&a.isReactWarning;return l?t.ref:(a=Object.getOwnPropertyDescriptor(t,"ref")?.get,l=a&&"isReactWarning"in a&&a.isReactWarning,l?t.props.ref:t.props.ref||t.ref)}var Zf=0;function V5(){M.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??lw()),document.body.insertAdjacentElement("beforeend",t[1]??lw()),Zf++,()=>{Zf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(a=>a.remove()),Zf--}},[])}function lw(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var Gn=function(){return Gn=Object.assign||function(a){for(var l,o=1,s=arguments.length;o<s;o++){l=arguments[o];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(a[c]=l[c])}return a},Gn.apply(this,arguments)};function fv(t,a){var l={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&a.indexOf(o)<0&&(l[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(t);s<o.length;s++)a.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(l[o[s]]=t[o[s]]);return l}function X5(t,a,l){if(l||arguments.length===2)for(var o=0,s=a.length,c;o<s;o++)(c||!(o in a))&&(c||(c=Array.prototype.slice.call(a,0,o)),c[o]=a[o]);return t.concat(c||Array.prototype.slice.call(a))}var xc="right-scroll-bar-position",Sc="width-before-scroll-bar",K5="with-scroll-bars-hidden",Q5="--removed-body-scroll-bar-size";function Bf(t,a){return typeof t=="function"?t(a):t&&(t.current=a),t}function J5(t,a){var l=M.useState(function(){return{value:t,callback:a,facade:{get current(){return l.value},set current(o){var s=l.value;s!==o&&(l.value=o,l.callback(o,s))}}}})[0];return l.callback=a,l.facade}var e8=typeof window<"u"?M.useLayoutEffect:M.useEffect,ow=new WeakMap;function t8(t,a){var l=J5(null,function(o){return t.forEach(function(s){return Bf(s,o)})});return e8(function(){var o=ow.get(l);if(o){var s=new Set(o),c=new Set(t),d=l.current;s.forEach(function(f){c.has(f)||Bf(f,null)}),c.forEach(function(f){s.has(f)||Bf(f,d)})}ow.set(l,t)},[t]),l}function n8(t){return t}function a8(t,a){a===void 0&&(a=n8);var l=[],o=!1,s={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return l.length?l[l.length-1]:t},useMedium:function(c){var d=a(c,o);return l.push(d),function(){l=l.filter(function(f){return f!==d})}},assignSyncMedium:function(c){for(o=!0;l.length;){var d=l;l=[],d.forEach(c)}l={push:function(f){return c(f)},filter:function(){return l}}},assignMedium:function(c){o=!0;var d=[];if(l.length){var f=l;l=[],f.forEach(c),d=l}var m=function(){var v=d;d=[],v.forEach(c)},h=function(){return Promise.resolve().then(m)};h(),l={push:function(v){d.push(v),h()},filter:function(v){return d=d.filter(v),l}}}};return s}function r8(t){t===void 0&&(t={});var a=a8(null);return a.options=Gn({async:!0,ssr:!1},t),a}var pv=function(t){var a=t.sideCar,l=fv(t,["sideCar"]);if(!a)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=a.read();if(!o)throw new Error("Sidecar medium not found");return M.createElement(o,Gn({},l))};pv.isSideCarExport=!0;function l8(t,a){return t.useMedium(a),pv}var hv=r8(),Hf=function(){},Xc=M.forwardRef(function(t,a){var l=M.useRef(null),o=M.useState({onScrollCapture:Hf,onWheelCapture:Hf,onTouchMoveCapture:Hf}),s=o[0],c=o[1],d=t.forwardProps,f=t.children,m=t.className,h=t.removeScrollBar,v=t.enabled,w=t.shards,y=t.sideCar,S=t.noRelative,T=t.noIsolation,E=t.inert,D=t.allowPinchZoom,x=t.as,N=x===void 0?"div":x,R=t.gapMode,H=fv(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),q=y,V=t8([l,a]),ee=Gn(Gn({},H),s);return M.createElement(M.Fragment,null,v&&M.createElement(q,{sideCar:hv,removeScrollBar:h,shards:w,noRelative:S,noIsolation:T,inert:E,setCallbacks:c,allowPinchZoom:!!D,lockRef:l,gapMode:R}),d?M.cloneElement(M.Children.only(f),Gn(Gn({},ee),{ref:V})):M.createElement(N,Gn({},ee,{className:m,ref:V}),f))});Xc.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Xc.classNames={fullWidth:Sc,zeroRight:xc};var o8=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function i8(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var a=o8();return a&&t.setAttribute("nonce",a),t}function s8(t,a){t.styleSheet?t.styleSheet.cssText=a:t.appendChild(document.createTextNode(a))}function c8(t){var a=document.head||document.getElementsByTagName("head")[0];a.appendChild(t)}var u8=function(){var t=0,a=null;return{add:function(l){t==0&&(a=i8())&&(s8(a,l),c8(a)),t++},remove:function(){t--,!t&&a&&(a.parentNode&&a.parentNode.removeChild(a),a=null)}}},d8=function(){var t=u8();return function(a,l){M.useEffect(function(){return t.add(a),function(){t.remove()}},[a&&l])}},mv=function(){var t=d8(),a=function(l){var o=l.styles,s=l.dynamic;return t(o,s),null};return a},f8={left:0,top:0,right:0,gap:0},$f=function(t){return parseInt(t||"",10)||0},p8=function(t){var a=window.getComputedStyle(document.body),l=a[t==="padding"?"paddingLeft":"marginLeft"],o=a[t==="padding"?"paddingTop":"marginTop"],s=a[t==="padding"?"paddingRight":"marginRight"];return[$f(l),$f(o),$f(s)]},h8=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return f8;var a=p8(t),l=document.documentElement.clientWidth,o=window.innerWidth;return{left:a[0],top:a[1],right:a[2],gap:Math.max(0,o-l+a[2]-a[0])}},m8=mv(),Il="data-scroll-locked",g8=function(t,a,l,o){var s=t.left,c=t.top,d=t.right,f=t.gap;return l===void 0&&(l="margin"),`
  .`.concat(K5,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(f,"px ").concat(o,`;
  }
  body[`).concat(Il,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([a&&"position: relative ".concat(o,";"),l==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f,"px ").concat(o,`;
    `),l==="padding"&&"padding-right: ".concat(f,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(xc,` {
    right: `).concat(f,"px ").concat(o,`;
  }
  
  .`).concat(Sc,` {
    margin-right: `).concat(f,"px ").concat(o,`;
  }
  
  .`).concat(xc," .").concat(xc,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Sc," .").concat(Sc,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Il,`] {
    `).concat(Q5,": ").concat(f,`px;
  }
`)},iw=function(){var t=parseInt(document.body.getAttribute(Il)||"0",10);return isFinite(t)?t:0},w8=function(){M.useEffect(function(){return document.body.setAttribute(Il,(iw()+1).toString()),function(){var t=iw()-1;t<=0?document.body.removeAttribute(Il):document.body.setAttribute(Il,t.toString())}},[])},v8=function(t){var a=t.noRelative,l=t.noImportant,o=t.gapMode,s=o===void 0?"margin":o;w8();var c=M.useMemo(function(){return h8(s)},[s]);return M.createElement(m8,{styles:g8(c,!a,s,l?"":"!important")})},_p=!1;if(typeof window<"u")try{var lc=Object.defineProperty({},"passive",{get:function(){return _p=!0,!0}});window.addEventListener("test",lc,lc),window.removeEventListener("test",lc,lc)}catch{_p=!1}var Rl=_p?{passive:!1}:!1,y8=function(t){return t.tagName==="TEXTAREA"},gv=function(t,a){if(!(t instanceof Element))return!1;var l=window.getComputedStyle(t);return l[a]!=="hidden"&&!(l.overflowY===l.overflowX&&!y8(t)&&l[a]==="visible")},b8=function(t){return gv(t,"overflowY")},x8=function(t){return gv(t,"overflowX")},sw=function(t,a){var l=a.ownerDocument,o=a;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=wv(t,o);if(s){var c=vv(t,o),d=c[1],f=c[2];if(d>f)return!0}o=o.parentNode}while(o&&o!==l.body);return!1},S8=function(t){var a=t.scrollTop,l=t.scrollHeight,o=t.clientHeight;return[a,l,o]},T8=function(t){var a=t.scrollLeft,l=t.scrollWidth,o=t.clientWidth;return[a,l,o]},wv=function(t,a){return t==="v"?b8(a):x8(a)},vv=function(t,a){return t==="v"?S8(a):T8(a)},_8=function(t,a){return t==="h"&&a==="rtl"?-1:1},k8=function(t,a,l,o,s){var c=_8(t,window.getComputedStyle(a).direction),d=c*o,f=l.target,m=a.contains(f),h=!1,v=d>0,w=0,y=0;do{if(!f)break;var S=vv(t,f),T=S[0],E=S[1],D=S[2],x=E-D-c*T;(T||x)&&wv(t,f)&&(w+=x,y+=T);var N=f.parentNode;f=N&&N.nodeType===Node.DOCUMENT_FRAGMENT_NODE?N.host:N}while(!m&&f!==document.body||m&&(a.contains(f)||a===f));return(v&&Math.abs(w)<1||!v&&Math.abs(y)<1)&&(h=!0),h},oc=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},cw=function(t){return[t.deltaX,t.deltaY]},uw=function(t){return t&&"current"in t?t.current:t},M8=function(t,a){return t[0]===a[0]&&t[1]===a[1]},E8=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},D8=0,Ol=[];function C8(t){var a=M.useRef([]),l=M.useRef([0,0]),o=M.useRef(),s=M.useState(D8++)[0],c=M.useState(mv)[0],d=M.useRef(t);M.useEffect(function(){d.current=t},[t]),M.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(s));var E=X5([t.lockRef.current],(t.shards||[]).map(uw),!0).filter(Boolean);return E.forEach(function(D){return D.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),E.forEach(function(D){return D.classList.remove("allow-interactivity-".concat(s))})}}},[t.inert,t.lockRef.current,t.shards]);var f=M.useCallback(function(E,D){if("touches"in E&&E.touches.length===2||E.type==="wheel"&&E.ctrlKey)return!d.current.allowPinchZoom;var x=oc(E),N=l.current,R="deltaX"in E?E.deltaX:N[0]-x[0],H="deltaY"in E?E.deltaY:N[1]-x[1],q,V=E.target,ee=Math.abs(R)>Math.abs(H)?"h":"v";if("touches"in E&&ee==="h"&&V.type==="range")return!1;var J=sw(ee,V);if(!J)return!0;if(J?q=ee:(q=ee==="v"?"h":"v",J=sw(ee,V)),!J)return!1;if(!o.current&&"changedTouches"in E&&(R||H)&&(o.current=q),!q)return!0;var re=o.current||q;return k8(re,D,E,re==="h"?R:H)},[]),m=M.useCallback(function(E){var D=E;if(!(!Ol.length||Ol[Ol.length-1]!==c)){var x="deltaY"in D?cw(D):oc(D),N=a.current.filter(function(q){return q.name===D.type&&(q.target===D.target||D.target===q.shadowParent)&&M8(q.delta,x)})[0];if(N&&N.should){D.cancelable&&D.preventDefault();return}if(!N){var R=(d.current.shards||[]).map(uw).filter(Boolean).filter(function(q){return q.contains(D.target)}),H=R.length>0?f(D,R[0]):!d.current.noIsolation;H&&D.cancelable&&D.preventDefault()}}},[]),h=M.useCallback(function(E,D,x,N){var R={name:E,delta:D,target:x,should:N,shadowParent:N8(x)};a.current.push(R),setTimeout(function(){a.current=a.current.filter(function(H){return H!==R})},1)},[]),v=M.useCallback(function(E){l.current=oc(E),o.current=void 0},[]),w=M.useCallback(function(E){h(E.type,cw(E),E.target,f(E,t.lockRef.current))},[]),y=M.useCallback(function(E){h(E.type,oc(E),E.target,f(E,t.lockRef.current))},[]);M.useEffect(function(){return Ol.push(c),t.setCallbacks({onScrollCapture:w,onWheelCapture:w,onTouchMoveCapture:y}),document.addEventListener("wheel",m,Rl),document.addEventListener("touchmove",m,Rl),document.addEventListener("touchstart",v,Rl),function(){Ol=Ol.filter(function(E){return E!==c}),document.removeEventListener("wheel",m,Rl),document.removeEventListener("touchmove",m,Rl),document.removeEventListener("touchstart",v,Rl)}},[]);var S=t.removeScrollBar,T=t.inert;return M.createElement(M.Fragment,null,T?M.createElement(c,{styles:E8(s)}):null,S?M.createElement(v8,{noRelative:t.noRelative,gapMode:t.gapMode}):null)}function N8(t){for(var a=null;t!==null;)t instanceof ShadowRoot&&(a=t.host,t=t.host),t=t.parentNode;return a}const A8=l8(hv,C8);var yv=M.forwardRef(function(t,a){return M.createElement(Xc,Gn({},t,{ref:a,sideCar:A8}))});yv.classNames=Xc.classNames;var z8=function(t){if(typeof document>"u")return null;var a=Array.isArray(t)?t[0]:t;return a.ownerDocument.body},ql=new WeakMap,ic=new WeakMap,sc={},Ff=0,bv=function(t){return t&&(t.host||bv(t.parentNode))},U8=function(t,a){return a.map(function(l){if(t.contains(l))return l;var o=bv(l);return o&&t.contains(o)?o:(console.error("aria-hidden",l,"in not contained inside",t,". Doing nothing"),null)}).filter(function(l){return!!l})},j8=function(t,a,l,o){var s=U8(a,Array.isArray(t)?t:[t]);sc[l]||(sc[l]=new WeakMap);var c=sc[l],d=[],f=new Set,m=new Set(s),h=function(w){!w||f.has(w)||(f.add(w),h(w.parentNode))};s.forEach(h);var v=function(w){!w||m.has(w)||Array.prototype.forEach.call(w.children,function(y){if(f.has(y))v(y);else try{var S=y.getAttribute(o),T=S!==null&&S!=="false",E=(ql.get(y)||0)+1,D=(c.get(y)||0)+1;ql.set(y,E),c.set(y,D),d.push(y),E===1&&T&&ic.set(y,!0),D===1&&y.setAttribute(l,"true"),T||y.setAttribute(o,"true")}catch(x){console.error("aria-hidden: cannot operate on ",y,x)}})};return v(a),f.clear(),Ff++,function(){d.forEach(function(w){var y=ql.get(w)-1,S=c.get(w)-1;ql.set(w,y),c.set(w,S),y||(ic.has(w)||w.removeAttribute(o),ic.delete(w)),S||w.removeAttribute(l)}),Ff--,Ff||(ql=new WeakMap,ql=new WeakMap,ic=new WeakMap,sc={})}},R8=function(t,a,l){l===void 0&&(l="data-aria-hidden");var o=Array.from(Array.isArray(t)?t:[t]),s=z8(t);return s?(o.push.apply(o,Array.from(s.querySelectorAll("[aria-live], script"))),j8(o,s,l,"aria-hidden")):function(){return null}},Kc="Dialog",[xv,Hk]=m5(Kc),[O8,jn]=xv(Kc),Sv=t=>{const{__scopeDialog:a,children:l,open:o,defaultOpen:s,onOpenChange:c,modal:d=!0}=t,f=M.useRef(null),m=M.useRef(null),[h,v]=b5({prop:o,defaultProp:s??!1,onChange:c,caller:Kc});return $.jsx(O8,{scope:a,triggerRef:f,contentRef:m,contentId:ya(),titleId:ya(),descriptionId:ya(),open:h,onOpenChange:v,onOpenToggle:M.useCallback(()=>v(w=>!w),[v]),modal:d,children:l})};Sv.displayName=Kc;var Tv="DialogTrigger",q8=M.forwardRef((t,a)=>{const{__scopeDialog:l,...o}=t,s=jn(Tv,l),c=$r(a,s.triggerRef);return $.jsx(Rt.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":ih(s.open),...o,ref:c,onClick:nr(t.onClick,s.onOpenToggle)})});q8.displayName=Tv;var lh="DialogPortal",[L8,_v]=xv(lh,{forceMount:void 0}),kv=t=>{const{__scopeDialog:a,forceMount:l,children:o,container:s}=t,c=jn(lh,a);return $.jsx(L8,{scope:a,forceMount:l,children:M.Children.map(o,d=>$.jsx(Vc,{present:l||c.open,children:$.jsx(dv,{asChild:!0,container:s,children:d})}))})};kv.displayName=lh;var Ac="DialogOverlay",Mv=M.forwardRef((t,a)=>{const l=_v(Ac,t.__scopeDialog),{forceMount:o=l.forceMount,...s}=t,c=jn(Ac,t.__scopeDialog);return c.modal?$.jsx(Vc,{present:o||c.open,children:$.jsx(B8,{...s,ref:a})}):null});Mv.displayName=Ac;var Z8=lv("DialogOverlay.RemoveScroll"),B8=M.forwardRef((t,a)=>{const{__scopeDialog:l,...o}=t,s=jn(Ac,l);return $.jsx(yv,{as:Z8,allowPinchZoom:!0,shards:[s.contentRef],children:$.jsx(Rt.div,{"data-state":ih(s.open),...o,ref:a,style:{pointerEvents:"auto",...o.style}})})}),qr="DialogContent",Ev=M.forwardRef((t,a)=>{const l=_v(qr,t.__scopeDialog),{forceMount:o=l.forceMount,...s}=t,c=jn(qr,t.__scopeDialog);return $.jsx(Vc,{present:o||c.open,children:c.modal?$.jsx(H8,{...s,ref:a}):$.jsx($8,{...s,ref:a})})});Ev.displayName=qr;var H8=M.forwardRef((t,a)=>{const l=jn(qr,t.__scopeDialog),o=M.useRef(null),s=$r(a,l.contentRef,o);return M.useEffect(()=>{const c=o.current;if(c)return R8(c)},[]),$.jsx(Dv,{...t,ref:s,trapFocus:l.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:nr(t.onCloseAutoFocus,c=>{c.preventDefault(),l.triggerRef.current?.focus()}),onPointerDownOutside:nr(t.onPointerDownOutside,c=>{const d=c.detail.originalEvent,f=d.button===0&&d.ctrlKey===!0;(d.button===2||f)&&c.preventDefault()}),onFocusOutside:nr(t.onFocusOutside,c=>c.preventDefault())})}),$8=M.forwardRef((t,a)=>{const l=jn(qr,t.__scopeDialog),o=M.useRef(!1),s=M.useRef(!1);return $.jsx(Dv,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{t.onCloseAutoFocus?.(c),c.defaultPrevented||(o.current||l.triggerRef.current?.focus(),c.preventDefault()),o.current=!1,s.current=!1},onInteractOutside:c=>{t.onInteractOutside?.(c),c.defaultPrevented||(o.current=!0,c.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const d=c.target;l.triggerRef.current?.contains(d)&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&s.current&&c.preventDefault()}})}),Dv=M.forwardRef((t,a)=>{const{__scopeDialog:l,trapFocus:o,onOpenAutoFocus:s,onCloseAutoFocus:c,...d}=t,f=jn(qr,l),m=M.useRef(null),h=$r(a,m);return V5(),$.jsxs($.Fragment,{children:[$.jsx(cv,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:s,onUnmountAutoFocus:c,children:$.jsx(iv,{role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":ih(f.open),...d,ref:h,onDismiss:()=>f.onOpenChange(!1)})}),$.jsxs($.Fragment,{children:[$.jsx(I8,{titleId:f.titleId}),$.jsx(W8,{contentRef:m,descriptionId:f.descriptionId})]})]})}),oh="DialogTitle",F8=M.forwardRef((t,a)=>{const{__scopeDialog:l,...o}=t,s=jn(oh,l);return $.jsx(Rt.h2,{id:s.titleId,...o,ref:a})});F8.displayName=oh;var Cv="DialogDescription",G8=M.forwardRef((t,a)=>{const{__scopeDialog:l,...o}=t,s=jn(Cv,l);return $.jsx(Rt.p,{id:s.descriptionId,...o,ref:a})});G8.displayName=Cv;var Nv="DialogClose",P8=M.forwardRef((t,a)=>{const{__scopeDialog:l,...o}=t,s=jn(Nv,l);return $.jsx(Rt.button,{type:"button",...o,ref:a,onClick:nr(t.onClick,()=>s.onOpenChange(!1))})});P8.displayName=Nv;function ih(t){return t?"open":"closed"}var Av="DialogTitleWarning",[$k,zv]=h5(Av,{contentName:qr,titleName:oh,docsSlug:"dialog"}),I8=({titleId:t})=>{const a=zv(Av),l=`\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;return M.useEffect(()=>{t&&(document.getElementById(t)||console.error(l))},[l,t]),null},Y8="DialogDescriptionWarning",W8=({contentRef:t,descriptionId:a})=>{const o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zv(Y8).contentName}}.`;return M.useEffect(()=>{const s=t.current?.getAttribute("aria-describedby");a&&s&&(document.getElementById(a)||console.warn(o))},[o,t,a]),null},V8=Sv,X8=kv,K8=Mv,Q8=Ev,ui='[cmdk-group=""]',Gf='[cmdk-group-items=""]',J8='[cmdk-group-heading=""]',Uv='[cmdk-item=""]',dw=`${Uv}:not([aria-disabled="true"])`,kp="cmdk-item-select",Fl="data-value",e7=(t,a,l)=>p5(t,a,l),jv=M.createContext(void 0),Li=()=>M.useContext(jv),Rv=M.createContext(void 0),sh=()=>M.useContext(Rv),Ov=M.createContext(void 0),qv=M.forwardRef((t,a)=>{let l=Gl(()=>{var j,Z;return{search:"",value:(Z=(j=t.value)!=null?j:t.defaultValue)!=null?Z:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),o=Gl(()=>new Set),s=Gl(()=>new Map),c=Gl(()=>new Map),d=Gl(()=>new Set),f=Lv(t),{label:m,children:h,value:v,onValueChange:w,filter:y,shouldFilter:S,loop:T,disablePointerSelection:E=!1,vimBindings:D=!0,...x}=t,N=ya(),R=ya(),H=ya(),q=M.useRef(null),V=d7();Lr(()=>{if(v!==void 0){let j=v.trim();l.current.value=j,ee.emit()}},[v]),Lr(()=>{V(6,_e)},[]);let ee=M.useMemo(()=>({subscribe:j=>(d.current.add(j),()=>d.current.delete(j)),snapshot:()=>l.current,setState:(j,Z,W)=>{var X,ae,oe,he;if(!Object.is(l.current[j],Z)){if(l.current[j]=Z,j==="search")le(),ie(),V(1,se);else if(j==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let ve=document.getElementById(H);ve?ve.focus():(X=document.getElementById(N))==null||X.focus()}if(V(7,()=>{var ve;l.current.selectedItemId=(ve=xe())==null?void 0:ve.id,ee.emit()}),W||V(5,_e),((ae=f.current)==null?void 0:ae.value)!==void 0){let ve=Z??"";(he=(oe=f.current).onValueChange)==null||he.call(oe,ve);return}}ee.emit()}},emit:()=>{d.current.forEach(j=>j())}}),[]),J=M.useMemo(()=>({value:(j,Z,W)=>{var X;Z!==((X=c.current.get(j))==null?void 0:X.value)&&(c.current.set(j,{value:Z,keywords:W}),l.current.filtered.items.set(j,re(Z,W)),V(2,()=>{ie(),ee.emit()}))},item:(j,Z)=>(o.current.add(j),Z&&(s.current.has(Z)?s.current.get(Z).add(j):s.current.set(Z,new Set([j]))),V(3,()=>{le(),ie(),l.current.value||se(),ee.emit()}),()=>{c.current.delete(j),o.current.delete(j),l.current.filtered.items.delete(j);let W=xe();V(4,()=>{le(),W?.getAttribute("id")===j&&se(),ee.emit()})}),group:j=>(s.current.has(j)||s.current.set(j,new Set),()=>{c.current.delete(j),s.current.delete(j)}),filter:()=>f.current.shouldFilter,label:m||t["aria-label"],getDisablePointerSelection:()=>f.current.disablePointerSelection,listId:N,inputId:H,labelId:R,listInnerRef:q}),[]);function re(j,Z){var W,X;let ae=(X=(W=f.current)==null?void 0:W.filter)!=null?X:e7;return j?ae(j,l.current.search,Z):0}function ie(){if(!l.current.search||f.current.shouldFilter===!1)return;let j=l.current.filtered.items,Z=[];l.current.filtered.groups.forEach(X=>{let ae=s.current.get(X),oe=0;ae.forEach(he=>{let ve=j.get(he);oe=Math.max(ve,oe)}),Z.push([X,oe])});let W=q.current;me().sort((X,ae)=>{var oe,he;let ve=X.getAttribute("id"),He=ae.getAttribute("id");return((oe=j.get(He))!=null?oe:0)-((he=j.get(ve))!=null?he:0)}).forEach(X=>{let ae=X.closest(Gf);ae?ae.appendChild(X.parentElement===ae?X:X.closest(`${Gf} > *`)):W.appendChild(X.parentElement===W?X:X.closest(`${Gf} > *`))}),Z.sort((X,ae)=>ae[1]-X[1]).forEach(X=>{var ae;let oe=(ae=q.current)==null?void 0:ae.querySelector(`${ui}[${Fl}="${encodeURIComponent(X[0])}"]`);oe?.parentElement.appendChild(oe)})}function se(){let j=me().find(W=>W.getAttribute("aria-disabled")!=="true"),Z=j?.getAttribute(Fl);ee.setState("value",Z||void 0)}function le(){var j,Z,W,X;if(!l.current.search||f.current.shouldFilter===!1){l.current.filtered.count=o.current.size;return}l.current.filtered.groups=new Set;let ae=0;for(let oe of o.current){let he=(Z=(j=c.current.get(oe))==null?void 0:j.value)!=null?Z:"",ve=(X=(W=c.current.get(oe))==null?void 0:W.keywords)!=null?X:[],He=re(he,ve);l.current.filtered.items.set(oe,He),He>0&&ae++}for(let[oe,he]of s.current)for(let ve of he)if(l.current.filtered.items.get(ve)>0){l.current.filtered.groups.add(oe);break}l.current.filtered.count=ae}function _e(){var j,Z,W;let X=xe();X&&(((j=X.parentElement)==null?void 0:j.firstChild)===X&&((W=(Z=X.closest(ui))==null?void 0:Z.querySelector(J8))==null||W.scrollIntoView({block:"nearest"})),X.scrollIntoView({block:"nearest"}))}function xe(){var j;return(j=q.current)==null?void 0:j.querySelector(`${Uv}[aria-selected="true"]`)}function me(){var j;return Array.from(((j=q.current)==null?void 0:j.querySelectorAll(dw))||[])}function k(j){let Z=me()[j];Z&&ee.setState("value",Z.getAttribute(Fl))}function z(j){var Z;let W=xe(),X=me(),ae=X.findIndex(he=>he===W),oe=X[ae+j];(Z=f.current)!=null&&Z.loop&&(oe=ae+j<0?X[X.length-1]:ae+j===X.length?X[0]:X[ae+j]),oe&&ee.setState("value",oe.getAttribute(Fl))}function U(j){let Z=xe(),W=Z?.closest(ui),X;for(;W&&!X;)W=j>0?c7(W,ui):u7(W,ui),X=W?.querySelector(dw);X?ee.setState("value",X.getAttribute(Fl)):z(j)}let K=()=>k(me().length-1),C=j=>{j.preventDefault(),j.metaKey?K():j.altKey?U(1):z(1)},F=j=>{j.preventDefault(),j.metaKey?k(0):j.altKey?U(-1):z(-1)};return M.createElement(Rt.div,{ref:a,tabIndex:-1,...x,"cmdk-root":"",onKeyDown:j=>{var Z;(Z=x.onKeyDown)==null||Z.call(x,j);let W=j.nativeEvent.isComposing||j.keyCode===229;if(!(j.defaultPrevented||W))switch(j.key){case"n":case"j":{D&&j.ctrlKey&&C(j);break}case"ArrowDown":{C(j);break}case"p":case"k":{D&&j.ctrlKey&&F(j);break}case"ArrowUp":{F(j);break}case"Home":{j.preventDefault(),k(0);break}case"End":{j.preventDefault(),K();break}case"Enter":{j.preventDefault();let X=xe();if(X){let ae=new Event(kp);X.dispatchEvent(ae)}}}}},M.createElement("label",{"cmdk-label":"",htmlFor:J.inputId,id:J.labelId,style:p7},m),Qc(t,j=>M.createElement(Rv.Provider,{value:ee},M.createElement(jv.Provider,{value:J},j))))}),t7=M.forwardRef((t,a)=>{var l,o;let s=ya(),c=M.useRef(null),d=M.useContext(Ov),f=Li(),m=Lv(t),h=(o=(l=m.current)==null?void 0:l.forceMount)!=null?o:d?.forceMount;Lr(()=>{if(!h)return f.item(s,d?.id)},[h]);let v=Zv(s,c,[t.value,t.children,c],t.keywords),w=sh(),y=rr(V=>V.value&&V.value===v.current),S=rr(V=>h||f.filter()===!1?!0:V.search?V.filtered.items.get(s)>0:!0);M.useEffect(()=>{let V=c.current;if(!(!V||t.disabled))return V.addEventListener(kp,T),()=>V.removeEventListener(kp,T)},[S,t.onSelect,t.disabled]);function T(){var V,ee;E(),(ee=(V=m.current).onSelect)==null||ee.call(V,v.current)}function E(){w.setState("value",v.current,!0)}if(!S)return null;let{disabled:D,value:x,onSelect:N,forceMount:R,keywords:H,...q}=t;return M.createElement(Rt.div,{ref:Or(c,a),...q,id:s,"cmdk-item":"",role:"option","aria-disabled":!!D,"aria-selected":!!y,"data-disabled":!!D,"data-selected":!!y,onPointerMove:D||f.getDisablePointerSelection()?void 0:E,onClick:D?void 0:T},t.children)}),n7=M.forwardRef((t,a)=>{let{heading:l,children:o,forceMount:s,...c}=t,d=ya(),f=M.useRef(null),m=M.useRef(null),h=ya(),v=Li(),w=rr(S=>s||v.filter()===!1?!0:S.search?S.filtered.groups.has(d):!0);Lr(()=>v.group(d),[]),Zv(d,f,[t.value,t.heading,m]);let y=M.useMemo(()=>({id:d,forceMount:s}),[s]);return M.createElement(Rt.div,{ref:Or(f,a),...c,"cmdk-group":"",role:"presentation",hidden:w?void 0:!0},l&&M.createElement("div",{ref:m,"cmdk-group-heading":"","aria-hidden":!0,id:h},l),Qc(t,S=>M.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":l?h:void 0},M.createElement(Ov.Provider,{value:y},S))))}),a7=M.forwardRef((t,a)=>{let{alwaysRender:l,...o}=t,s=M.useRef(null),c=rr(d=>!d.search);return!l&&!c?null:M.createElement(Rt.div,{ref:Or(s,a),...o,"cmdk-separator":"",role:"separator"})}),r7=M.forwardRef((t,a)=>{let{onValueChange:l,...o}=t,s=t.value!=null,c=sh(),d=rr(h=>h.search),f=rr(h=>h.selectedItemId),m=Li();return M.useEffect(()=>{t.value!=null&&c.setState("search",t.value)},[t.value]),M.createElement(Rt.input,{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":m.listId,"aria-labelledby":m.labelId,"aria-activedescendant":f,id:m.inputId,type:"text",value:s?t.value:d,onChange:h=>{s||c.setState("search",h.target.value),l?.(h.target.value)}})}),l7=M.forwardRef((t,a)=>{let{children:l,label:o="Suggestions",...s}=t,c=M.useRef(null),d=M.useRef(null),f=rr(h=>h.selectedItemId),m=Li();return M.useEffect(()=>{if(d.current&&c.current){let h=d.current,v=c.current,w,y=new ResizeObserver(()=>{w=requestAnimationFrame(()=>{let S=h.offsetHeight;v.style.setProperty("--cmdk-list-height",S.toFixed(1)+"px")})});return y.observe(h),()=>{cancelAnimationFrame(w),y.unobserve(h)}}},[]),M.createElement(Rt.div,{ref:Or(c,a),...s,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":f,"aria-label":o,id:m.listId},Qc(t,h=>M.createElement("div",{ref:Or(d,m.listInnerRef),"cmdk-list-sizer":""},h)))}),o7=M.forwardRef((t,a)=>{let{open:l,onOpenChange:o,overlayClassName:s,contentClassName:c,container:d,...f}=t;return M.createElement(V8,{open:l,onOpenChange:o},M.createElement(X8,{container:d},M.createElement(K8,{"cmdk-overlay":"",className:s}),M.createElement(Q8,{"aria-label":t.label,"cmdk-dialog":"",className:c},M.createElement(qv,{ref:a,...f}))))}),i7=M.forwardRef((t,a)=>rr(l=>l.filtered.count===0)?M.createElement(Rt.div,{ref:a,...t,"cmdk-empty":"",role:"presentation"}):null),s7=M.forwardRef((t,a)=>{let{progress:l,children:o,label:s="Loading...",...c}=t;return M.createElement(Rt.div,{ref:a,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":s},Qc(t,d=>M.createElement("div",{"aria-hidden":!0},d)))}),yn=Object.assign(qv,{List:l7,Item:t7,Input:r7,Group:n7,Separator:a7,Dialog:o7,Empty:i7,Loading:s7});function c7(t,a){let l=t.nextElementSibling;for(;l;){if(l.matches(a))return l;l=l.nextElementSibling}}function u7(t,a){let l=t.previousElementSibling;for(;l;){if(l.matches(a))return l;l=l.previousElementSibling}}function Lv(t){let a=M.useRef(t);return Lr(()=>{a.current=t}),a}var Lr=typeof window>"u"?M.useEffect:M.useLayoutEffect;function Gl(t){let a=M.useRef();return a.current===void 0&&(a.current=t()),a}function rr(t){let a=sh(),l=()=>t(a.snapshot());return M.useSyncExternalStore(a.subscribe,l,l)}function Zv(t,a,l,o=[]){let s=M.useRef(),c=Li();return Lr(()=>{var d;let f=(()=>{var h;for(let v of l){if(typeof v=="string")return v.trim();if(typeof v=="object"&&"current"in v)return v.current?(h=v.current.textContent)==null?void 0:h.trim():s.current}})(),m=o.map(h=>h.trim());c.value(t,f,m),(d=a.current)==null||d.setAttribute(Fl,f),s.current=f}),s}var d7=()=>{let[t,a]=M.useState(),l=Gl(()=>new Map);return Lr(()=>{l.current.forEach(o=>o()),l.current=new Map},[t]),(o,s)=>{l.current.set(o,s),a({})}};function f7(t){let a=t.type;return typeof a=="function"?a(t.props):"render"in a?a.render(t.props):t}function Qc({asChild:t,children:a},l){return t&&M.isValidElement(a)?M.cloneElement(f7(a),{ref:a.ref},l(a.props.children)):l(a)}var p7={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const fw=t=>t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),pw=(t,a,l="original")=>{if(a=a.replaceAll(" ","_"),l==="original")return`/content/galleries/${t}/${a}`;const o=a.replace(/\.(heic|jpg|jpeg|png|webp)$/i,`-${l}w.jpg`).trim();return`/content/galleries/${t}/${o}`},Pf={author:"Luca Mack",url:"https://photos.lucamack.at",meta:{title:"Luca Mack"},theme:{border:{default:"border border-neutral-500/50 border-dotted",top:"border-t border-neutral-500/50 border-dotted",bottom:"border-b border-neutral-500/50 border-dotted",left:"border-l border-neutral-500/50 border-dotted",right:"border-r border-neutral-500/50 border-dotted"},headline:{one:"text-4xl md:text-5xl"},light:{text:{primary:"text-red-600"}},dark:{text:{primary:"text-red-300"}}},mapbox:{accessToken:"pk.eyJ1IjoibHVtYTE5OTIiLCJhIjoiY2tpYTZqOHl2MG11YjJ0bGNvcWs1M29haiJ9.bOpInXV19yoQl1ShEzeEgQ",style:{dark:"mapbox://styles/luma1992/cmcrpf414029501qx4b4fa2jx",light:"mapbox://styles/luma1992/cmcrp4svj045g01r17lvz89bx"}}},hw=t=>t?typeof t=="string"?new Date(t):t&&typeof t=="object"&&t.year&&t.month&&t.day?new Date(t.year,t.month-1,t.day,t.hour||0,t.minute||0,t.second||0):null:null,cc=t=>{const a=no.c(2),{title:l}=t;let o;return a[0]!==l?(o=$.jsx("div",{className:"pt-4 pb-2 px-4 gap-8 select-none",children:$.jsx("p",{className:"text-[11px] tracking-[2px] uppercase opacity-50 font-mono",children:l})}),a[0]=l,a[1]=o):o=a[1],o},h7=[{name:"Karte",path:"/app/map",icon:$.jsx(Af,{size:16})},{name:"Liste",path:"/app/list",icon:$.jsx(Af,{size:16})},{name:"Timeline",path:"/app/timeline",icon:$.jsx(Af,{size:16})}];function m7({open:t,onClose:a,setMobileMenuOpen:l}){const[o,s]=M.useState(""),c=Jp(),{theme:d}=qi(),f=M.useMemo(()=>gi.flatMap(w=>w.images.map(y=>({...y,gallerySlug:w.slug,galleryTitle:w.title||w.name}))),[]),m=M.useMemo(()=>{if(o)return[];const w=[...f];for(let y=w.length-1;y>0;y--){const S=Math.floor(Math.random()*(y+1));[w[y],w[S]]=[w[S],w[y]]}return w.slice(0,50)},[f,o]);M.useEffect(()=>{const w=y=>{y.key==="k"&&(y.metaKey||y.ctrlKey)&&(y.preventDefault(),a()),y.key==="Escape"&&a()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[a]);const h=M.useCallback(w=>{const y=document.querySelector(".md\\:hidden.fixed.inset-0.z-\\[1000000\\]");y&&y.remove(),l&&l(!1),c(w),a()},[c,a,l]);if(!t)return null;const v="w-12 h-12 min-w-12 min-h-12 md:min-w-16 md:min-h-16 md:w-16 md:h-16";return $.jsx("div",{className:"fixed backdrop-blur-sm inset-0 z-[1000000] p-4 pt-[clamp(32px,10vh,240px)] bg-black/80 overflow-y-auto",children:$.jsx("div",{className:`max-w-2xl w-full mx-auto shadow-2xl overflow-hidden ${d==="light"?"bg-white text-black":"bg-black text-white"}`,children:$.jsxs(yn,{className:`w-full ${Pf.theme.border.default}`,filter:(w,y)=>{const S=y.toLowerCase();return w.toLowerCase().includes(S)?1:0},children:[$.jsxs("div",{className:`flex items-center px-4 ${Pf.theme.border.bottom} `,children:[$.jsx(P2,{className:"w-4 h-4 mr-2 opacity-50"}),$.jsx(yn.Input,{autoFocus:!0,onFocus:w=>{w.target.select()},placeholder:"Seiten, Serien oder Fotos suchen ...",className:`w-full py-4 outline-none ${d==="light"?"text-black bg-white":"text-white bg-black"}`,value:o,onValueChange:s}),$.jsx("button",{onClick:a,className:"p-2",children:$.jsx(I2,{className:"w-4 h-4 opacity-50"})})]}),$.jsxs(yn.List,{className:`max-h-[60vh] overflow-y-auto p-0 ${d==="light"?"bg-white":"bg-black"}`,children:[$.jsx(yn.Empty,{className:"py-6 text-center text-xs opacity-70 font-mono",children:"Keine Suchergebnisse gefunden."}),$.jsx(yn.Group,{heading:$.jsx(cc,{title:"Apps"}),children:h7.map(w=>$.jsx(yn.Item,{value:`${w.path} ${w.name}`,onSelect:()=>h(w.path),className:`flex items-center gap-2 p-4  cursor-pointer ${d==="light"?"hover:bg-neutral-200":"hover:bg-neutral-800"}`,children:$.jsx("span",{className:"text-sm",children:w.name})},w.path))}),$.jsx(yn.Group,{heading:$.jsx(cc,{title:"Seiten"}),className:"",children:vp.map(w=>$.jsx(yn.Item,{value:`/page/${w.slug} ${w.title}`,onSelect:()=>h(`/page/${w.slug}`),className:`flex items-center gap-2 p-4  cursor-pointer ${d==="light"?"hover:bg-neutral-200":"hover:bg-neutral-800"}`,children:$.jsx("span",{className:"text-sm",children:w.title})},w.slug))}),$.jsx(yn.Group,{heading:$.jsx(cc,{title:"Fotoserien"}),children:gi.map(w=>$.jsxs(yn.Item,{value:`/gallery/${w.slug} ${w.title||w.name}`,onSelect:()=>h(`/gallery/${w.slug}`),className:`flex items-center gap-4 p-2 px-4  cursor-pointer ${d==="light"?"hover:bg-neutral-200":"hover:bg-neutral-800"}`,children:[$.jsx("img",{className:`min-w-0 flex-shrink-0 ${v} object-cover`,src:pw(w.slug,w.images[0].filename.replaceAll(" ","_"),160)}),$.jsxs("div",{className:"truncate",children:[$.jsx("p",{className:"truncate text-sm",children:w.title||w.name}),$.jsxs("p",{className:"text-[11px]  opacity-70 truncate",children:[w.imageCount," Fotos | ",w.timeframe]})]})]},w.slug))}),$.jsx(yn.Group,{heading:$.jsx(cc,{title:"Fotos"}),children:(o?f.filter(w=>w.filename.toLowerCase().includes(o.toLowerCase())||w.galleryTitle.toLowerCase().includes(o.toLowerCase())).slice(0,50):m).map((w,y)=>$.jsxs(yn.Item,{value:`/gallery/${w.gallerySlug}/image/${fw(w.filename.replace(/\.[^/.]+$/,""))} ${w.filename.replace(/\.[^/.]+$/,"")} ${w.galleryTitle}`,onSelect:()=>h(`/gallery/${w.gallerySlug}/image/${fw(w.filename.replace(/\.[^/.]+$/,""))}`),className:`flex items-center gap-4 p-2 px-4  cursor-pointer ${d==="light"?"hover:bg-neutral-200":"hover:bg-neutral-800"}`,children:[$.jsx("img",{className:`min-w-0 flex-shrink-0 ${v} object-cover`,src:pw(w.gallerySlug,w.filename.replaceAll(" ","_"),160),alt:w.filename}),$.jsxs("div",{className:"flex flex-col",children:[$.jsx("span",{className:"truncate text-sm",children:w.filename.replace(".jpg","").replace(".png","").replace(".webp","")}),$.jsxs("span",{className:"text-[11px] opacity-70 truncate",children:[hw(w.createDate)&&new Date(hw(w.createDate)).toLocaleDateString("de-DE",{year:"numeric",month:"long",day:"numeric"})," ","| Fotoserie: ",w.galleryTitle]})]})]},`${w.gallerySlug}-${w.filename}-${y}`))})]}),$.jsx("div",{className:`p-2 ${Pf.theme.border.top}`,children:$.jsx("div",{className:"px-2 text-[11px] opacity-70 md:flex justify-end font-mono",children:$.jsx("p",{className:"truncate text-right",children:"Mit 'ESC' schließen"})})})]})})})}/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const g7="0.3.17",ch=`bippy-${g7}`,mw=Object.defineProperty,w7=Object.prototype.hasOwnProperty,If=()=>{},Bv=t=>{try{Function.prototype.toString.call(t).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},Hv=(t=Zr())=>"getFiberRoots"in t;let $v=!1,gw;const Mp=(t=Zr())=>$v?!0:(typeof t.inject=="function"&&(gw=t.inject.toString()),!!gw?.includes("(injected)")),Tc=new Set,Ep=new Set,v7=t=>{const a=new Map;let l=0,o={checkDCE:Bv,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:a,onCommitFiberRoot:If,onCommitFiberUnmount:If,onPostCommitFiberRoot:If,inject(s){const c=++l;return a.set(c,s),Ep.add(s),o._instrumentationIsActive||(o._instrumentationIsActive=!0,Tc.forEach(d=>d())),c},_instrumentationSource:ch,_instrumentationIsActive:!1};try{mw(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return o},set(d){if(d&&typeof d=="object"){const f=o.renderers;o=d,f.size>0&&(f.forEach((m,h)=>{Ep.add(m),d.renderers.set(h,m)}),Dp(t))}},configurable:!0,enumerable:!0});const s=window.hasOwnProperty;let c=!1;mw(window,"hasOwnProperty",{value:function(){try{if(!c&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,c=!0,-0}catch{}return s.apply(this,arguments)},configurable:!0,writable:!0})}catch{Dp(t)}return o},Dp=t=>{t&&Tc.add(t);try{const a=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!a)return;if(!a._instrumentationSource){if(a.checkDCE=Bv,a.supportsFiber=!0,a.supportsFlight=!0,a.hasUnsupportedRendererAttached=!1,a._instrumentationSource=ch,a._instrumentationIsActive=!1,a.renderers.size){a._instrumentationIsActive=!0,Tc.forEach(o=>o());return}const l=a.inject;Mp(a)&&!Hv()&&($v=!0,a.inject({scheduleRefresh(){}})&&(a._instrumentationIsActive=!0)),a.inject=o=>{const s=l(o);return Ep.add(o),a._instrumentationIsActive=!0,Tc.forEach(c=>c()),s}}(a.renderers.size||a._instrumentationIsActive||Mp())&&t?.()}catch{}},y7=()=>w7.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),Zr=t=>y7()?(Dp(t),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):v7(t),b7=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),x7=()=>{try{b7()&&Zr()}catch{}};/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Jc=0,Fr=1,Fv=3,S7=5,T7=6,_7=7,k7=9,eu=11,tu=13,Zi=14,Bi=15,M7=18,E7=22,D7=23,C7=26,N7=27,A7=60111,z7="Symbol(react.concurrent_mode)",U7="Symbol(react.async_mode)",ww=1,j7=2,R7=4096,O7=4,vw=8,q7=16,L7=32,Z7=1024,B7=8192,yw=j7|O7|q7|L7|R7|B7|Z7,_i=t=>{switch(t.tag){case S7:case C7:case N7:return!0;default:return typeof t.type=="string"}},nu=t=>{switch(t.tag){case Jc:case Fr:case Bi:case Zi:case eu:return!0;default:return!1}},H7=(t,a)=>{try{const l=t.dependencies,o=t.alternate?.dependencies;if(!l||!o||typeof l!="object"||!("firstContext"in l)||typeof o!="object"||!("firstContext"in o))return!1;let s=l.firstContext,c=o.firstContext;for(;s&&typeof s=="object"&&"memoizedValue"in s||c&&typeof c=="object"&&"memoizedValue"in c;){if(a(s,c)===!0)return!0;s=s?.next,c=c?.next}}catch{}return!1},uh=t=>{const a=t.memoizedProps,l=t.alternate?.memoizedProps||{},o=t.flags??t.effectTag??0;switch(t.tag){case Fr:case Jc:case k7:case eu:case Zi:case Bi:return(o&ww)===ww;default:return t.alternate?l!==a||t.alternate.memoizedState!==t.memoizedState||t.alternate.ref!==t.ref:!0}},dh=t=>(t.flags&(yw|vw))!==0||(t.subtreeFlags&(yw|vw))!==0,$7=t=>{const a=[],l=[t];for(;l.length;){const o=l.pop();o&&(_i(o)&&dh(o)&&uh(o)&&a.push(o),o.child&&l.push(o.child),o.sibling&&l.push(o.sibling))}return a},fh=t=>{switch(t.tag){case M7:return!0;case T7:case _7:case D7:case E7:return!0;case Fv:return!1;default:{const a=typeof t.type=="object"&&t.type!==null?t.type.$$typeof:t.type;switch(typeof a=="symbol"?a.toString():a){case A7:case z7:case U7:return!0;default:return!1}}}},F7=t=>{const a=[],l=[];for(_i(t)?a.push(t):t.child&&l.push(t.child);l.length;){const o=l.pop();if(!o)break;_i(o)?a.push(o):o.child&&l.push(o.child),o.sibling&&l.push(o.sibling)}return a},ph=(t,a,l=!1)=>{if(!t)return null;if(a(t)===!0)return t;let o=l?t.return:t.child;for(;o;){const s=ph(o,a,l);if(s)return s;o=l?null:o.sibling}return null},zr=t=>{const a=t?.actualDuration??0;let l=a,o=t?.child??null;for(;a>0&&o!=null;)l-=o.actualDuration??0,o=o.sibling;return{selfTime:l,totalTime:a}},ki=t=>!!t.updateQueue?.memoCache,Gr=t=>{const a=t;return typeof a=="function"?a:typeof a=="object"&&a?Gr(a.type||a.render):null},Nt=t=>{const a=t;if(typeof a=="string")return a;if(typeof a!="function"&&!(typeof a=="object"&&a))return null;const l=a.displayName||a.name||null;if(l)return l;const o=Gr(a);return o&&(o.displayName||o.name)||null},G7=t=>{try{if(typeof t.version=="string"&&t.bundleType>0)return"development"}catch{}return"production"},P7=()=>!!Zr()._instrumentationIsActive||Hv()||Mp();let Gv=0;const Ql=new WeakMap,I7=(t,a=Gv++)=>{Ql.set(t,a)},lr=t=>{let a=Ql.get(t);return!a&&t.alternate&&(a=Ql.get(t.alternate)),a||(a=Gv++,I7(t,a)),a},ar=(t,a,l)=>{let o=a;for(;o!=null;){if(Ql.has(o)||lr(o),!fh(o)&&uh(o)&&t(o,"mount"),o.tag===tu)if(o.memoizedState!==null){const d=o.child,f=d?d.sibling:null;if(f){const m=f.child;m!==null&&ar(t,m,!1)}}else{let d=null;o.child!==null&&(d=o.child.child),d!==null&&ar(t,d,!1)}else o.child!=null&&ar(t,o.child,!0);o=l?o.sibling:null}},Cp=(t,a,l,o)=>{if(Ql.has(a)||lr(a),!l)return;Ql.has(l)||lr(l);const s=a.tag===tu;!fh(a)&&uh(a)&&t(a,"update");const d=s&&l.memoizedState!==null,f=s&&a.memoizedState!==null;if(d&&f){const m=a.child?.sibling??null,h=l.child?.sibling??null;m!==null&&h!==null&&Cp(t,m,h)}else if(d&&!f){const m=a.child;m!==null&&ar(t,m,!0)}else if(!d&&f){Pv(t,l);const m=a.child?.sibling??null;m!==null&&ar(t,m,!0)}else if(a.child!==l.child){let m=a.child;for(;m;){if(m.alternate){const h=m.alternate;Cp(t,m,h)}else ar(t,m,!1);m=m.sibling}}},Np=(t,a)=>{(a.tag===Fv||!fh(a))&&t(a,"unmount")},Pv=(t,a)=>{const l=a.tag===tu&&a.memoizedState!==null;let o=a.child;for(l&&(o=(a.child?.sibling??null)?.child??null);o!==null;)o.return!==null&&(Np(t,o),Pv(t,o)),o=o.sibling};let Y7=0;const bw=new WeakMap,W7=(t,a)=>{const l="current"in t?t.current:t;let o=bw.get(t);o||(o={prevFiber:null,id:Y7++},bw.set(t,o));const{prevFiber:s}=o;if(!l)Np(a,l);else if(s!==null){const c=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,d=l.memoizedState!=null&&l.memoizedState.element!=null&&l.memoizedState.isDehydrated!==!0;!c&&d?ar(a,l,!1):c&&d?Cp(a,l,l.alternate):c&&!d&&Np(a,l)}else ar(a,l,!0);o.prevFiber=l},V7=t=>Zr(()=>{const a=Zr();t.onActive?.(),a._instrumentationSource=t.name??ch;const l=a.onCommitFiberRoot;t.onCommitFiberRoot&&(a.onCommitFiberRoot=(c,d,f)=>{l&&l(c,d,f),t.onCommitFiberRoot?.(c,d,f)});const o=a.onCommitFiberUnmount;t.onCommitFiberUnmount&&(a.onCommitFiberUnmount=(c,d)=>{o&&o(c,d),t.onCommitFiberUnmount?.(c,d)});const s=a.onPostCommitFiberRoot;t.onPostCommitFiberRoot&&(a.onPostCommitFiberRoot=(c,d)=>{s&&s(c,d),t.onPostCommitFiberRoot?.(c,d)})});/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */x7();var au,Me,Iv,Yv,Ar,xw,Wv,Vv,Xv,hh,Ap,zp,Kv,Mi={},Qv=[],X7=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Hi=Array.isArray;function ga(t,a){for(var l in a)t[l]=a[l];return t}function mh(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Br(t,a,l){var o,s,c,d={};for(c in a)c=="key"?o=a[c]:c=="ref"?s=a[c]:d[c]=a[c];if(arguments.length>2&&(d.children=arguments.length>3?au.call(arguments,2):l),typeof t=="function"&&t.defaultProps!=null)for(c in t.defaultProps)d[c]===void 0&&(d[c]=t.defaultProps[c]);return _c(t,d,o,s,null)}function _c(t,a,l,o,s){var c={type:t,props:a,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Iv,__i:-1,__u:0};return s==null&&Me.vnode!=null&&Me.vnode(c),c}function qe(t){return t.children}function xn(t,a){this.props=t,this.context=a}function Jl(t,a){if(a==null)return t.__?Jl(t.__,t.__i+1):null;for(var l;a<t.__k.length;a++)if((l=t.__k[a])!=null&&l.__e!=null)return l.__e;return typeof t.type=="function"?Jl(t):null}function Jv(t){var a,l;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,a=0;a<t.__k.length;a++)if((l=t.__k[a])!=null&&l.__e!=null){t.__e=t.__c.base=l.__e;break}return Jv(t)}}function Up(t){(!t.__d&&(t.__d=!0)&&Ar.push(t)&&!zc.__r++||xw!=Me.debounceRendering)&&((xw=Me.debounceRendering)||Wv)(zc)}function zc(){for(var t,a,l,o,s,c,d,f=1;Ar.length;)Ar.length>f&&Ar.sort(Vv),t=Ar.shift(),f=Ar.length,t.__d&&(l=void 0,s=(o=(a=t).__v).__e,c=[],d=[],a.__P&&((l=ga({},o)).__v=o.__v+1,Me.vnode&&Me.vnode(l),gh(a.__P,l,o,a.__n,a.__P.namespaceURI,32&o.__u?[s]:null,c,s??Jl(o),!!(32&o.__u),d),l.__v=o.__v,l.__.__k[l.__i]=l,ny(c,l,d),l.__e!=s&&Jv(l)));zc.__r=0}function ey(t,a,l,o,s,c,d,f,m,h,v){var w,y,S,T,E,D,x=o&&o.__k||Qv,N=a.length;for(m=K7(l,a,x,m,N),w=0;w<N;w++)(S=l.__k[w])!=null&&(y=S.__i==-1?Mi:x[S.__i]||Mi,S.__i=w,D=gh(t,S,y,s,c,d,f,m,h,v),T=S.__e,S.ref&&y.ref!=S.ref&&(y.ref&&wh(y.ref,null,S),v.push(S.ref,S.__c||T,S)),E==null&&T!=null&&(E=T),4&S.__u||y.__k===S.__k?m=ty(S,m,t):typeof S.type=="function"&&D!==void 0?m=D:T&&(m=T.nextSibling),S.__u&=-7);return l.__e=E,m}function K7(t,a,l,o,s){var c,d,f,m,h,v=l.length,w=v,y=0;for(t.__k=new Array(s),c=0;c<s;c++)(d=a[c])!=null&&typeof d!="boolean"&&typeof d!="function"?(m=c+y,(d=t.__k[c]=typeof d=="string"||typeof d=="number"||typeof d=="bigint"||d.constructor==String?_c(null,d,null,null,null):Hi(d)?_c(qe,{children:d},null,null,null):d.constructor==null&&d.__b>0?_c(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d).__=t,d.__b=t.__b+1,f=null,(h=d.__i=Q7(d,l,m,w))!=-1&&(w--,(f=l[h])&&(f.__u|=2)),f==null||f.__v==null?(h==-1&&(s>v?y--:s<v&&y++),typeof d.type!="function"&&(d.__u|=4)):h!=m&&(h==m-1?y--:h==m+1?y++:(h>m?y--:y++,d.__u|=4))):t.__k[c]=null;if(w)for(c=0;c<v;c++)(f=l[c])!=null&&(2&f.__u)==0&&(f.__e==o&&(o=Jl(f)),ry(f,f));return o}function ty(t,a,l){var o,s;if(typeof t.type=="function"){for(o=t.__k,s=0;o&&s<o.length;s++)o[s]&&(o[s].__=t,a=ty(o[s],a,l));return a}t.__e!=a&&(a&&t.type&&!l.contains(a)&&(a=Jl(t)),l.insertBefore(t.__e,a||null),a=t.__e);do a=a&&a.nextSibling;while(a!=null&&a.nodeType==8);return a}function Uc(t,a){return a=a||[],t==null||typeof t=="boolean"||(Hi(t)?t.some(function(l){Uc(l,a)}):a.push(t)),a}function Q7(t,a,l,o){var s,c,d,f=t.key,m=t.type,h=a[l],v=h!=null&&(2&h.__u)==0;if(h===null&&t.key==null||v&&f==h.key&&m==h.type)return l;if(o>(v?1:0)){for(s=l-1,c=l+1;s>=0||c<a.length;)if((h=a[d=s>=0?s--:c++])!=null&&(2&h.__u)==0&&f==h.key&&m==h.type)return d}return-1}function Sw(t,a,l){a[0]=="-"?t.setProperty(a,l??""):t[a]=l==null?"":typeof l!="number"||X7.test(a)?l:l+"px"}function uc(t,a,l,o,s){var c,d;e:if(a=="style")if(typeof l=="string")t.style.cssText=l;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(a in o)l&&a in l||Sw(t.style,a,"");if(l)for(a in l)o&&l[a]==o[a]||Sw(t.style,a,l[a])}else if(a[0]=="o"&&a[1]=="n")c=a!=(a=a.replace(Xv,"$1")),d=a.toLowerCase(),a=d in t||a=="onFocusOut"||a=="onFocusIn"?d.slice(2):a.slice(2),t.l||(t.l={}),t.l[a+c]=l,l?o?l.u=o.u:(l.u=hh,t.addEventListener(a,c?zp:Ap,c)):t.removeEventListener(a,c?zp:Ap,c);else{if(s=="http://www.w3.org/2000/svg")a=a.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(a!="width"&&a!="height"&&a!="href"&&a!="list"&&a!="form"&&a!="tabIndex"&&a!="download"&&a!="rowSpan"&&a!="colSpan"&&a!="role"&&a!="popover"&&a in t)try{t[a]=l??"";break e}catch{}typeof l=="function"||(l==null||l===!1&&a[4]!="-"?t.removeAttribute(a):t.setAttribute(a,a=="popover"&&l==1?"":l))}}function Tw(t){return function(a){if(this.l){var l=this.l[a.type+t];if(a.t==null)a.t=hh++;else if(a.t<l.u)return;return l(Me.event?Me.event(a):a)}}}function gh(t,a,l,o,s,c,d,f,m,h){var v,w,y,S,T,E,D,x,N,R,H,q,V,ee,J,re,ie,se=a.type;if(a.constructor!=null)return null;128&l.__u&&(m=!!(32&l.__u),c=[f=a.__e=l.__e]),(v=Me.__b)&&v(a);e:if(typeof se=="function")try{if(x=a.props,N="prototype"in se&&se.prototype.render,R=(v=se.contextType)&&o[v.__c],H=v?R?R.props.value:v.__:o,l.__c?D=(w=a.__c=l.__c).__=w.__E:(N?a.__c=w=new se(x,H):(a.__c=w=new xn(x,H),w.constructor=se,w.render=eS),R&&R.sub(w),w.props=x,w.state||(w.state={}),w.context=H,w.__n=o,y=w.__d=!0,w.__h=[],w._sb=[]),N&&w.__s==null&&(w.__s=w.state),N&&se.getDerivedStateFromProps!=null&&(w.__s==w.state&&(w.__s=ga({},w.__s)),ga(w.__s,se.getDerivedStateFromProps(x,w.__s))),S=w.props,T=w.state,w.__v=a,y)N&&se.getDerivedStateFromProps==null&&w.componentWillMount!=null&&w.componentWillMount(),N&&w.componentDidMount!=null&&w.__h.push(w.componentDidMount);else{if(N&&se.getDerivedStateFromProps==null&&x!==S&&w.componentWillReceiveProps!=null&&w.componentWillReceiveProps(x,H),!w.__e&&w.shouldComponentUpdate!=null&&w.shouldComponentUpdate(x,w.__s,H)===!1||a.__v==l.__v){for(a.__v!=l.__v&&(w.props=x,w.state=w.__s,w.__d=!1),a.__e=l.__e,a.__k=l.__k,a.__k.some(function(le){le&&(le.__=a)}),q=0;q<w._sb.length;q++)w.__h.push(w._sb[q]);w._sb=[],w.__h.length&&d.push(w);break e}w.componentWillUpdate!=null&&w.componentWillUpdate(x,w.__s,H),N&&w.componentDidUpdate!=null&&w.__h.push(function(){w.componentDidUpdate(S,T,E)})}if(w.context=H,w.props=x,w.__P=t,w.__e=!1,V=Me.__r,ee=0,N){for(w.state=w.__s,w.__d=!1,V&&V(a),v=w.render(w.props,w.state,w.context),J=0;J<w._sb.length;J++)w.__h.push(w._sb[J]);w._sb=[]}else do w.__d=!1,V&&V(a),v=w.render(w.props,w.state,w.context),w.state=w.__s;while(w.__d&&++ee<25);w.state=w.__s,w.getChildContext!=null&&(o=ga(ga({},o),w.getChildContext())),N&&!y&&w.getSnapshotBeforeUpdate!=null&&(E=w.getSnapshotBeforeUpdate(S,T)),re=v,v!=null&&v.type===qe&&v.key==null&&(re=ay(v.props.children)),f=ey(t,Hi(re)?re:[re],a,l,o,s,c,d,f,m,h),w.base=a.__e,a.__u&=-161,w.__h.length&&d.push(w),D&&(w.__E=w.__=null)}catch(le){if(a.__v=null,m||c!=null)if(le.then){for(a.__u|=m?160:128;f&&f.nodeType==8&&f.nextSibling;)f=f.nextSibling;c[c.indexOf(f)]=null,a.__e=f}else{for(ie=c.length;ie--;)mh(c[ie]);jp(a)}else a.__e=l.__e,a.__k=l.__k,le.then||jp(a);Me.__e(le,a,l)}else c==null&&a.__v==l.__v?(a.__k=l.__k,a.__e=l.__e):f=a.__e=J7(l.__e,a,l,o,s,c,d,m,h);return(v=Me.diffed)&&v(a),128&a.__u?void 0:f}function jp(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(jp)}function ny(t,a,l){for(var o=0;o<l.length;o++)wh(l[o],l[++o],l[++o]);Me.__c&&Me.__c(a,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(c){c.call(s)})}catch(c){Me.__e(c,s.__v)}})}function ay(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:Hi(t)?t.map(ay):ga({},t)}function J7(t,a,l,o,s,c,d,f,m){var h,v,w,y,S,T,E,D=l.props,x=a.props,N=a.type;if(N=="svg"?s="http://www.w3.org/2000/svg":N=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),c!=null){for(h=0;h<c.length;h++)if((S=c[h])&&"setAttribute"in S==!!N&&(N?S.localName==N:S.nodeType==3)){t=S,c[h]=null;break}}if(t==null){if(N==null)return document.createTextNode(x);t=document.createElementNS(s,N,x.is&&x),f&&(Me.__m&&Me.__m(a,c),f=!1),c=null}if(N==null)D===x||f&&t.data==x||(t.data=x);else{if(c=c&&au.call(t.childNodes),D=l.props||Mi,!f&&c!=null)for(D={},h=0;h<t.attributes.length;h++)D[(S=t.attributes[h]).name]=S.value;for(h in D)if(S=D[h],h!="children"){if(h=="dangerouslySetInnerHTML")w=S;else if(!(h in x)){if(h=="value"&&"defaultValue"in x||h=="checked"&&"defaultChecked"in x)continue;uc(t,h,null,S,s)}}for(h in x)S=x[h],h=="children"?y=S:h=="dangerouslySetInnerHTML"?v=S:h=="value"?T=S:h=="checked"?E=S:f&&typeof S!="function"||D[h]===S||uc(t,h,S,D[h],s);if(v)f||w&&(v.__html==w.__html||v.__html==t.innerHTML)||(t.innerHTML=v.__html),a.__k=[];else if(w&&(t.innerHTML=""),ey(a.type=="template"?t.content:t,Hi(y)?y:[y],a,l,o,N=="foreignObject"?"http://www.w3.org/1999/xhtml":s,c,d,c?c[0]:l.__k&&Jl(l,0),f,m),c!=null)for(h=c.length;h--;)mh(c[h]);f||(h="value",N=="progress"&&T==null?t.removeAttribute("value"):T!=null&&(T!==t[h]||N=="progress"&&!T||N=="option"&&T!=D[h])&&uc(t,h,T,D[h],s),h="checked",E!=null&&E!=t[h]&&uc(t,h,E,D[h],s))}return t}function wh(t,a,l){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&a==null||(t.__u=t(a))}else t.current=a}catch(s){Me.__e(s,l)}}function ry(t,a,l){var o,s;if(Me.unmount&&Me.unmount(t),(o=t.ref)&&(o.current&&o.current!=t.__e||wh(o,null,a)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(c){Me.__e(c,a)}o.base=o.__P=null}if(o=t.__k)for(s=0;s<o.length;s++)o[s]&&ry(o[s],a,l||typeof t.type!="function");l||mh(t.__e),t.__c=t.__=t.__e=void 0}function eS(t,a,l){return this.constructor(t,l)}function wi(t,a,l){var o,s,c,d;a==document&&(a=document.documentElement),Me.__&&Me.__(t,a),s=(o=!1)?null:a.__k,c=[],d=[],gh(a,t=a.__k=Br(qe,null,[t]),s||Mi,Mi,a.namespaceURI,s?null:a.firstChild?au.call(a.childNodes):null,c,s?s.__e:a.firstChild,o,d),ny(c,t,d)}function ly(t){function a(l){var o,s;return this.getChildContext||(o=new Set,(s={})[a.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(c){this.props.value!=c.value&&o.forEach(function(d){d.__e=!0,Up(d)})},this.sub=function(c){o.add(c);var d=c.componentWillUnmount;c.componentWillUnmount=function(){o&&o.delete(c),d&&d.call(c)}}),l.children}return a.__c="__cC"+Kv++,a.__=t,a.Provider=a.__l=(a.Consumer=function(l,o){return l.children(o)}).contextType=a,a}au=Qv.slice,Me={__e:function(t,a,l,o){for(var s,c,d;a=a.__;)if((s=a.__c)&&!s.__)try{if((c=s.constructor)&&c.getDerivedStateFromError!=null&&(s.setState(c.getDerivedStateFromError(t)),d=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,o||{}),d=s.__d),d)return s.__E=s}catch(f){t=f}throw t}},Iv=0,Yv=function(t){return t!=null&&t.constructor==null},xn.prototype.setState=function(t,a){var l;l=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ga({},this.state),typeof t=="function"&&(t=t(ga({},l),this.props)),t&&ga(l,t),t!=null&&this.__v&&(a&&this._sb.push(a),Up(this))},xn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Up(this))},xn.prototype.render=qe,Ar=[],Wv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vv=function(t,a){return t.__v.__b-a.__v.__b},zc.__r=0,Xv=/(PointerCapture)$|Capture$/i,hh=0,Ap=Tw(!1),zp=Tw(!0),Kv=0;var Hr,at,Yf,_w,Ei=0,oy=[],pt=Me,kw=pt.__b,Mw=pt.__r,Ew=pt.diffed,Dw=pt.__c,Cw=pt.unmount,Nw=pt.__;function $i(t,a){pt.__h&&pt.__h(at,t,Ei||a),Ei=0;var l=at.__H||(at.__H={__:[],__h:[]});return t>=l.__.length&&l.__.push({}),l.__[t]}function Ue(t){return Ei=1,tS(iy,t)}function tS(t,a,l){var o=$i(Hr++,2);if(o.t=t,!o.__c&&(o.__=[l?l(a):iy(void 0,a),function(f){var m=o.__N?o.__N[0]:o.__[0],h=o.t(m,f);m!==h&&(o.__N=[h,o.__[1]],o.__c.setState({}))}],o.__c=at,!at.__f)){var s=function(f,m,h){if(!o.__c.__H)return!0;var v=o.__c.__H.__.filter(function(y){return!!y.__c});if(v.every(function(y){return!y.__N}))return!c||c.call(this,f,m,h);var w=o.__c.props!==f;return v.forEach(function(y){if(y.__N){var S=y.__[0];y.__=y.__N,y.__N=void 0,S!==y.__[0]&&(w=!0)}}),c&&c.call(this,f,m,h)||w};at.__f=!0;var c=at.shouldComponentUpdate,d=at.componentWillUpdate;at.componentWillUpdate=function(f,m,h){if(this.__e){var v=c;c=void 0,s(f,m,h),c=v}d&&d.call(this,f,m,h)},at.shouldComponentUpdate=s}return o.__N||o.__}function Ce(t,a){var l=$i(Hr++,3);!pt.__s&&bh(l.__H,a)&&(l.__=t,l.u=a,at.__H.__h.push(l))}function vh(t,a){var l=$i(Hr++,4);!pt.__s&&bh(l.__H,a)&&(l.__=t,l.u=a,at.__h.push(l))}function we(t){return Ei=5,Un(function(){return{current:t}},[])}function Un(t,a){var l=$i(Hr++,7);return bh(l.__H,a)&&(l.__=t(),l.__H=a,l.__h=t),l.__}function ft(t,a){return Ei=8,Un(function(){return t},a)}function yh(t){var a=at.context[t.__c],l=$i(Hr++,9);return l.c=t,a?(l.__==null&&(l.__=!0,a.sub(at)),a.props.value):t.__}function nS(){for(var t;t=oy.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(kc),t.__H.__h.forEach(Rp),t.__H.__h=[]}catch(a){t.__H.__h=[],pt.__e(a,t.__v)}}pt.__b=function(t){at=null,kw&&kw(t)},pt.__=function(t,a){t&&a.__k&&a.__k.__m&&(t.__m=a.__k.__m),Nw&&Nw(t,a)},pt.__r=function(t){Mw&&Mw(t),Hr=0;var a=(at=t.__c).__H;a&&(Yf===at?(a.__h=[],at.__h=[],a.__.forEach(function(l){l.__N&&(l.__=l.__N),l.u=l.__N=void 0})):(a.__h.forEach(kc),a.__h.forEach(Rp),a.__h=[],Hr=0)),Yf=at},pt.diffed=function(t){Ew&&Ew(t);var a=t.__c;a&&a.__H&&(a.__H.__h.length&&(oy.push(a)!==1&&_w===pt.requestAnimationFrame||((_w=pt.requestAnimationFrame)||aS)(nS)),a.__H.__.forEach(function(l){l.u&&(l.__H=l.u),l.u=void 0})),Yf=at=null},pt.__c=function(t,a){a.some(function(l){try{l.__h.forEach(kc),l.__h=l.__h.filter(function(o){return!o.__||Rp(o)})}catch(o){a.some(function(s){s.__h&&(s.__h=[])}),a=[],pt.__e(o,l.__v)}}),Dw&&Dw(t,a)},pt.unmount=function(t){Cw&&Cw(t);var a,l=t.__c;l&&l.__H&&(l.__H.__.forEach(function(o){try{kc(o)}catch(s){a=s}}),l.__H=void 0,a&&pt.__e(a,l.__v))};var Aw=typeof requestAnimationFrame=="function";function aS(t){var a,l=function(){clearTimeout(o),Aw&&cancelAnimationFrame(a),setTimeout(t)},o=setTimeout(l,35);Aw&&(a=requestAnimationFrame(l))}function kc(t){var a=at,l=t.__c;typeof l=="function"&&(t.__c=void 0,l()),at=a}function Rp(t){var a=at;t.__c=t.__(),at=a}function bh(t,a){return!t||t.length!==a.length||a.some(function(l,o){return l!==t[o]})}function iy(t,a){return typeof a=="function"?a(t):a}var rS=Symbol.for("preact-signals");function xh(){if(Yl>1)Yl--;else{for(var t,a=!1;vi!==void 0;){var l=vi;for(vi=void 0,Op++;l!==void 0;){var o=l.o;if(l.o=void 0,l.f&=-3,!(8&l.f)&&cy(l))try{l.c()}catch(s){a||(t=s,a=!0)}l=o}}if(Op=0,Yl--,a)throw t}}var Fe=void 0;function Di(t){var a=Fe;Fe=void 0;try{return t()}finally{Fe=a}}var vi=void 0,Yl=0,Op=0,jc=0;function sy(t){if(Fe!==void 0){var a=t.n;if(a===void 0||a.t!==Fe)return a={i:0,S:t,p:Fe.s,n:void 0,t:Fe,e:void 0,x:void 0,r:a},Fe.s!==void 0&&(Fe.s.n=a),Fe.s=a,t.n=a,32&Fe.f&&t.S(a),a;if(a.i===-1)return a.i=0,a.n!==void 0&&(a.n.p=a.p,a.p!==void 0&&(a.p.n=a.n),a.p=Fe.s,a.n=void 0,Fe.s.n=a,Fe.s=a),a}}function Ot(t,a){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.W=a?.watched,this.Z=a?.unwatched}Ot.prototype.brand=rS;Ot.prototype.h=function(){return!0};Ot.prototype.S=function(t){var a=this,l=this.t;l!==t&&t.e===void 0&&(t.x=l,this.t=t,l!==void 0?l.e=t:Di(function(){var o;(o=a.W)==null||o.call(a)}))};Ot.prototype.U=function(t){var a=this;if(this.t!==void 0){var l=t.e,o=t.x;l!==void 0&&(l.x=o,t.e=void 0),o!==void 0&&(o.e=l,t.x=void 0),t===this.t&&(this.t=o,o===void 0&&Di(function(){var s;(s=a.Z)==null||s.call(a)}))}};Ot.prototype.subscribe=function(t){var a=this;return ru(function(){var l=a.value,o=Fe;Fe=void 0;try{t(l)}finally{Fe=o}})};Ot.prototype.valueOf=function(){return this.value};Ot.prototype.toString=function(){return this.value+""};Ot.prototype.toJSON=function(){return this.value};Ot.prototype.peek=function(){var t=Fe;Fe=void 0;try{return this.value}finally{Fe=t}};Object.defineProperty(Ot.prototype,"value",{get:function(){var t=sy(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(Op>100)throw new Error("Cycle detected");this.v=t,this.i++,jc++,Yl++;try{for(var a=this.t;a!==void 0;a=a.x)a.t.N()}finally{xh()}}}});function bt(t,a){return new Ot(t,a)}function cy(t){for(var a=t.s;a!==void 0;a=a.n)if(a.S.i!==a.i||!a.S.h()||a.S.i!==a.i)return!0;return!1}function uy(t){for(var a=t.s;a!==void 0;a=a.n){var l=a.S.n;if(l!==void 0&&(a.r=l),a.S.n=a,a.i=-1,a.n===void 0){t.s=a;break}}}function dy(t){for(var a=t.s,l=void 0;a!==void 0;){var o=a.p;a.i===-1?(a.S.U(a),o!==void 0&&(o.n=a.n),a.n!==void 0&&(a.n.p=o)):l=a,a.S.n=a.r,a.r!==void 0&&(a.r=void 0),a=o}t.s=l}function Pr(t,a){Ot.call(this,void 0),this.x=t,this.s=void 0,this.g=jc-1,this.f=4,this.W=a?.watched,this.Z=a?.unwatched}Pr.prototype=new Ot;Pr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===jc))return!0;if(this.g=jc,this.f|=1,this.i>0&&!cy(this))return this.f&=-2,!0;var t=Fe;try{uy(this),Fe=this;var a=this.x();(16&this.f||this.v!==a||this.i===0)&&(this.v=a,this.f&=-17,this.i++)}catch(l){this.v=l,this.f|=16,this.i++}return Fe=t,dy(this),this.f&=-2,!0};Pr.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var a=this.s;a!==void 0;a=a.n)a.S.S(a)}Ot.prototype.S.call(this,t)};Pr.prototype.U=function(t){if(this.t!==void 0&&(Ot.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var a=this.s;a!==void 0;a=a.n)a.S.U(a)}};Pr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(Pr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=sy(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Ir(t,a){return new Pr(t,a)}function fy(t){var a=t.u;if(t.u=void 0,typeof a=="function"){Yl++;var l=Fe;Fe=void 0;try{a()}catch(o){throw t.f&=-2,t.f|=8,Sh(t),o}finally{Fe=l,xh()}}}function Sh(t){for(var a=t.s;a!==void 0;a=a.n)a.S.U(a);t.x=void 0,t.s=void 0,fy(t)}function lS(t){if(Fe!==this)throw new Error("Out-of-order effect");dy(this),Fe=t,this.f&=-2,8&this.f&&Sh(this),xh()}function lo(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}lo.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var a=this.x();typeof a=="function"&&(this.u=a)}finally{t()}};lo.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,fy(this),uy(this),Yl++;var t=Fe;return Fe=this,lS.bind(this,t)};lo.prototype.N=function(){2&this.f||(this.f|=2,this.o=vi,vi=this)};lo.prototype.d=function(){this.f|=8,1&this.f||Sh(this)};lo.prototype.dispose=function(){this.d()};function ru(t){var a=new lo(t);try{a.c()}catch(o){throw a.d(),o}var l=a.d.bind(a);return l[Symbol.dispose]=l,l}var Wf;function oo(t,a){Me[t]=a.bind(null,Me[t]||function(){})}function Rc(t){Wf&&Wf(),Wf=t&&t.S()}function py(t){var a=this,l=t.data,o=iS(l);o.value=l;var s=Un(function(){for(var c=a.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}return a.__$u.c=function(){var d,f=a.__$u.S(),m=s.value;f(),Yv(m)||((d=a.base)==null?void 0:d.nodeType)!==3?(a.__$f|=1,a.setState({})):a.base.data=m},Ir(function(){var d=o.value.value;return d===0?0:d===!0?"":d||""})},[]);return s.value}py.displayName="_st";Object.defineProperties(Ot.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:py},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});oo("__b",function(t,a){if(typeof a.type=="string"){var l,o=a.props;for(var s in o)if(s!=="children"){var c=o[s];c instanceof Ot&&(l||(a.__np=l={}),l[s]=c,o[s]=c.peek())}}t(a)});oo("__r",function(t,a){Rc();var l,o=a.__c;o&&(o.__$f&=-2,(l=o.__$u)===void 0&&(o.__$u=l=function(s){var c;return ru(function(){c=this}),c.c=function(){o.__$f|=1,o.setState({})},c}())),Rc(l),t(a)});oo("__e",function(t,a,l,o){Rc(),t(a,l,o)});oo("diffed",function(t,a){Rc();var l;if(typeof a.type=="string"&&(l=a.__e)){var o=a.__np,s=a.props;if(o){var c=l.U;if(c)for(var d in c){var f=c[d];f!==void 0&&!(d in o)&&(f.d(),c[d]=void 0)}else l.U=c={};for(var m in o){var h=c[m],v=o[m];h===void 0?(h=oS(l,m,v,s),c[m]=h):h.o(v,s)}}}t(a)});function oS(t,a,l,o){var s=a in t&&t.ownerSVGElement===void 0,c=bt(l);return{o:function(d,f){c.value=d,o=f},d:ru(function(){var d=c.value.value;o[a]!==d&&(o[a]=d,s?t[a]=d:d?t.setAttribute(a,d):t.removeAttribute(a))})}}oo("unmount",function(t,a){if(typeof a.type=="string"){var l=a.__e;if(l){var o=l.U;if(o){l.U=void 0;for(var s in o){var c=o[s];c&&c.d()}}}}else{var d=a.__c;if(d){var f=d.__$u;f&&(d.__$u=void 0,f.d())}}t(a)});oo("__h",function(t,a,l,o){(o<3||o===9)&&(a.__$f|=2),t(a,l,o)});xn.prototype.shouldComponentUpdate=function(t,a){var l=this.__$u,o=l&&l.s!==void 0;for(var s in a)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(o||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(o||4&this.__$f)||3&this.__$f)return!0;for(var c in t)if(c!=="__source"&&t[c]!==this.props[c])return!0;for(var d in this.props)if(!(d in t))return!0;return!1};function iS(t){return Un(function(){return bt(t)},[])}function Ci(t){var a=we(t);a.current=t,Ce(function(){return ru(function(){return a.current()})},[])}function hy(t,a){for(var l in a)t[l]=a[l];return t}function qp(t,a){for(var l in t)if(l!=="__source"&&!(l in a))return!0;for(var o in a)if(o!=="__source"&&t[o]!==a[o])return!0;return!1}function sS(t,a){var l=a(),o=Ue({t:{__:l,u:a}}),s=o[0].t,c=o[1];return vh(function(){s.__=l,s.u=a,Vf(s)&&c({t:s})},[t,l,a]),Ce(function(){return Vf(s)&&c({t:s}),t(function(){Vf(s)&&c({t:s})})},[t]),l}function Vf(t){var a,l,o=t.u,s=t.__;try{var c=o();return!((a=s)===(l=c)&&(a!==0||1/a==1/l)||a!=a&&l!=l)}catch{return!0}}function zw(t,a){this.props=t,this.context=a}function lu(t,a){function l(s){var c=this.props.ref,d=c==s.ref;return!d&&c&&(c.call?c(null):c.current=null),a?!a(this.props,s)||!d:qp(this.props,s)}function o(s){return this.shouldComponentUpdate=l,Br(t,s)}return o.displayName="Memo("+(t.displayName||t.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(zw.prototype=new xn).isPureReactComponent=!0,zw.prototype.shouldComponentUpdate=function(t,a){return qp(this.props,t)||qp(this.state,a)};var Uw=Me.__b;Me.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Uw&&Uw(t)};var cS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Th(t){function a(l){var o=hy({},l);return delete o.ref,t(o,l.ref||null)}return a.$$typeof=cS,a.render=a,a.prototype.isReactComponent=a.__f=!0,a.displayName="ForwardRef("+(t.displayName||t.name)+")",a}var uS=Me.__e;Me.__e=function(t,a,l,o){if(t.then){for(var s,c=a;c=c.__;)if((s=c.__c)&&s.__c)return a.__e==null&&(a.__e=l.__e,a.__k=l.__k),s.__c(t,a)}uS(t,a,l,o)};var jw=Me.unmount;function my(t,a,l){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),t.__c.__H=null),(t=hy({},t)).__c!=null&&(t.__c.__P===l&&(t.__c.__P=a),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(o){return my(o,a,l)})),t}function gy(t,a,l){return t&&l&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(o){return gy(o,a,l)}),t.__c&&t.__c.__P===a&&(t.__e&&l.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=l)),t}function Xf(){this.__u=0,this.o=null,this.__b=null}function wy(t){var a=t.__.__c;return a&&a.__a&&a.__a(t)}function dc(){this.i=null,this.l=null}Me.unmount=function(t){var a=t.__c;a&&a.__R&&a.__R(),a&&32&t.__u&&(t.type=null),jw&&jw(t)},(Xf.prototype=new xn).__c=function(t,a){var l=a.__c,o=this;o.o==null&&(o.o=[]),o.o.push(l);var s=wy(o.__v),c=!1,d=function(){c||(c=!0,l.__R=null,s?s(f):f())};l.__R=d;var f=function(){if(!--o.__u){if(o.state.__a){var m=o.state.__a;o.__v.__k[0]=gy(m,m.__c.__P,m.__c.__O)}var h;for(o.setState({__a:o.__b=null});h=o.o.pop();)h.forceUpdate()}};o.__u++||32&a.__u||o.setState({__a:o.__b=o.__v.__k[0]}),t.then(d,d)},Xf.prototype.componentWillUnmount=function(){this.o=[]},Xf.prototype.render=function(t,a){if(this.__b){if(this.__v.__k){var l=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=my(this.__b,l,o.__O=o.__P)}this.__b=null}var s=a.__a&&Br(qe,null,t.fallback);return s&&(s.__u&=-33),[Br(qe,null,a.__a?null:t.children),s]};var Rw=function(t,a,l){if(++l[1]===l[0]&&t.l.delete(a),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(l=t.i;l;){for(;l.length>3;)l.pop()();if(l[1]<l[0])break;t.i=l=l[2]}};function dS(t){return this.getChildContext=function(){return t.context},t.children}function fS(t){var a=this,l=t.h;if(a.componentWillUnmount=function(){wi(null,a.v),a.v=null,a.h=null},a.h&&a.h!==l&&a.componentWillUnmount(),!a.v){for(var o=a.__v;o!==null&&!o.__m&&o.__!==null;)o=o.__;a.h=l,a.v={nodeType:1,parentNode:l,childNodes:[],__k:{__m:o.__m},contains:function(){return!0},insertBefore:function(s,c){this.childNodes.push(s),a.h.insertBefore(s,c)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),a.h.removeChild(s)}}}wi(Br(dS,{context:a.context},t.__v),a.v)}function pS(t,a){var l=Br(fS,{__v:t,h:a});return l.containerInfo=a,l}(dc.prototype=new xn).__a=function(t){var a=this,l=wy(a.__v),o=a.l.get(t);return o[0]++,function(s){var c=function(){a.props.revealOrder?(o.push(s),Rw(a,t,o)):s()};l?l(c):c()}},dc.prototype.render=function(t){this.i=null,this.l=new Map;var a=Uc(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&a.reverse();for(var l=a.length;l--;)this.l.set(a[l],this.i=[1,0,this.i]);return t.children},dc.prototype.componentDidUpdate=dc.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(a,l){Rw(t,l,a)})};var hS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,mS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,gS=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,wS=/[A-Z0-9]/g,vS=typeof document<"u",yS=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};xn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(xn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(a){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:a})}})});var Ow=Me.event;function bS(){}function xS(){return this.cancelBubble}function SS(){return this.defaultPrevented}Me.event=function(t){return Ow&&(t=Ow(t)),t.persist=bS,t.isPropagationStopped=xS,t.isDefaultPrevented=SS,t.nativeEvent=t};var TS={enumerable:!1,configurable:!0,get:function(){return this.class}},qw=Me.vnode;Me.vnode=function(t){typeof t.type=="string"&&function(a){var l=a.props,o=a.type,s={},c=o.indexOf("-")===-1;for(var d in l){var f=l[d];if(!(d==="value"&&"defaultValue"in l&&f==null||vS&&d==="children"&&o==="noscript"||d==="class"||d==="className")){var m=d.toLowerCase();d==="defaultValue"&&"value"in l&&l.value==null?d="value":d==="download"&&f===!0?f="":m==="translate"&&f==="no"?f=!1:m[0]==="o"&&m[1]==="n"?m==="ondoubleclick"?d="ondblclick":m!=="onchange"||o!=="input"&&o!=="textarea"||yS(l.type)?m==="onfocus"?d="onfocusin":m==="onblur"?d="onfocusout":gS.test(d)&&(d=m):m=d="oninput":c&&mS.test(d)?d=d.replace(wS,"-$&").toLowerCase():f===null&&(f=void 0),m==="oninput"&&s[d=m]&&(d="oninputCapture"),s[d]=f}}o=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Uc(l.children).forEach(function(h){h.props.selected=s.value.indexOf(h.props.value)!=-1})),o=="select"&&s.defaultValue!=null&&(s.value=Uc(l.children).forEach(function(h){h.props.selected=s.multiple?s.defaultValue.indexOf(h.props.value)!=-1:s.defaultValue==h.props.value})),l.class&&!l.className?(s.class=l.class,Object.defineProperty(s,"className",TS)):(l.className&&!l.class||l.class&&l.className)&&(s.class=s.className=l.className),a.props=s}(t),t.$$typeof=hS,qw&&qw(t)};var Lw=Me.__r;Me.__r=function(t){Lw&&Lw(t),t.__c};var Zw=Me.diffed;Me.diffed=function(t){Zw&&Zw(t);var a=t.props,l=t.__e;l!=null&&t.type==="textarea"&&"value"in a&&a.value!==l.value&&(l.value=a.value==null?"":a.value)};var _S=0;function g(t,a,l,o,s,c){a||(a={});var d,f,m=a;if("ref"in m)for(f in m={},a)f=="ref"?d=a[f]:m[f]=a[f];var h={type:t,props:m,key:l,ref:d,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_S,__i:-1,__u:0,__source:s,__self:c};if(typeof t=="function"&&(d=t.defaultProps))for(f in d)m[f]===void 0&&(m[f]=d[f]);return Me.vnode&&Me.vnode(h),h}Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(t){return[...this].sort(t)},writable:!0,configurable:!0});function kS(t,a){return a-t}function MS(t){let a=t[0].name;const l=t.length,o=Math.min(4,l);for(let s=1;s<o;s++)a+=`, ${t[s].name}`;return a}function ES(t){let a=t[0].time;for(let l=1,o=t.length;l<o;l++)a+=t[l].time;return a}function DS(t){for(let a=0,l=t.length;a<l;a++)if(t[a].forget)return!0;return!1}var CS=t=>{let a="";const l=new Map;for(const d of t){const{forget:f,time:m,aggregatedCount:h,name:v}=d;l.has(h)||l.set(h,[]);const w=l.get(h);w&&w.push({name:v,forget:f,time:m??0})}const o=Array.from(l.keys()).sort(kS),s=[];let c=0;for(const d of o){const f=l.get(d);if(!f)continue;let m=MS(f);const h=ES(f),v=DS(f);c+=h,f.length>4&&(m+="…"),d>1&&(m+=` × ${d}`),v&&(m=`✨${m}`),s.push(m)}return a=s.join(", "),a.length?(a.length>40&&(a=`${a.slice(0,40)}…`),c>=.01&&(a+=` (${Number(c.toFixed(2))}ms)`),a):null};function or(t,a){return t===a||t!==t&&a!==a}var _h=t=>{const a=t.createOscillator(),l=t.createGain();a.connect(l),l.connect(t.destination);const o={type:"sine",freq:[392,600],duration:.3,gain:.12},s=o.freq,c=o.duration/s.length;s.forEach((d,f)=>{a.frequency.setValueAtTime(d,t.currentTime+f*c)}),a.type=o.type,l.gain.setValueAtTime(o.gain,t.currentTime),l.gain.setTargetAtTime(0,t.currentTime+o.duration*.7,.05),a.start(),a.stop(t.currentTime+o.duration)},NS=t=>new Promise(a=>{const l=new Map,o=new IntersectionObserver(s=>{for(const c of s){const d=c.target,f=c.boundingClientRect;l.set(d,f)}o.disconnect(),a(l)});for(const s of t)o.observe(s)}),AS={mount:1,update:2,unmount:4},st=Th(({size:t=15,name:a,fill:l="currentColor",stroke:o="currentColor",className:s,externalURL:c="",style:d},f)=>{const m=Array.isArray(t)?t[0]:t,h=Array.isArray(t)?t[1]||t[0]:t,v=`${c}#${a}`;return g("svg",{ref:f,width:`${m}px`,height:`${h}px`,fill:l,stroke:o,className:s,style:{...d,minWidth:`${m}px`,maxWidth:`${m}px`,minHeight:`${h}px`,maxHeight:`${h}px`},children:[g("title",{children:a}),g("use",{href:v})]})}),ke=24,yt={width:550,height:350,initialHeight:400},Nn=240,wa="react-scan-widget-settings-v2",Mc="react-scan-widget-collapsed-v1",Ll="react-scan-widget-last-view-v1",Pn=typeof window<"u";function vy(t){var a,l,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(a=0;a<s;a++)t[a]&&(l=vy(t[a]))&&(o&&(o+=" "),o+=l)}else for(l in t)t[l]&&(o&&(o+=" "),o+=l);return o}function zS(){for(var t,a,l=0,o="",s=arguments.length;l<s;l++)(t=arguments[l])&&(a=vy(t))&&(o&&(o+=" "),o+=a);return o}var kh="-",US=t=>{const a=RS(t),{conflictingClassGroups:l,conflictingClassGroupModifiers:o}=t;return{getClassGroupId:d=>{const f=d.split(kh);return f[0]===""&&f.length!==1&&f.shift(),yy(f,a)||jS(d)},getConflictingClassGroupIds:(d,f)=>{const m=l[d]||[];return f&&o[d]?[...m,...o[d]]:m}}},yy=(t,a)=>{if(t.length===0)return a.classGroupId;const l=t[0],o=a.nextPart.get(l),s=o?yy(t.slice(1),o):void 0;if(s)return s;if(a.validators.length===0)return;const c=t.join(kh);return a.validators.find(({validator:d})=>d(c))?.classGroupId},Bw=/^\[(.+)\]$/,jS=t=>{if(Bw.test(t)){const a=Bw.exec(t)[1],l=a?.substring(0,a.indexOf(":"));if(l)return"arbitrary.."+l}},RS=t=>{const{theme:a,prefix:l}=t,o={nextPart:new Map,validators:[]};return qS(Object.entries(t.classGroups),l).forEach(([c,d])=>{Lp(d,o,c,a)}),o},Lp=(t,a,l,o)=>{t.forEach(s=>{if(typeof s=="string"){const c=s===""?a:Hw(a,s);c.classGroupId=l;return}if(typeof s=="function"){if(OS(s)){Lp(s(o),a,l,o);return}a.validators.push({validator:s,classGroupId:l});return}Object.entries(s).forEach(([c,d])=>{Lp(d,Hw(a,c),l,o)})})},Hw=(t,a)=>{let l=t;return a.split(kh).forEach(o=>{l.nextPart.has(o)||l.nextPart.set(o,{nextPart:new Map,validators:[]}),l=l.nextPart.get(o)}),l},OS=t=>t.isThemeGetter,qS=(t,a)=>a?t.map(([l,o])=>{const s=o.map(c=>typeof c=="string"?a+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([d,f])=>[a+d,f])):c);return[l,s]}):t,LS=t=>{if(t<1)return{get:()=>{},set:()=>{}};let a=0,l=new Map,o=new Map;const s=(c,d)=>{l.set(c,d),a++,a>t&&(a=0,o=l,l=new Map)};return{get(c){let d=l.get(c);if(d!==void 0)return d;if((d=o.get(c))!==void 0)return s(c,d),d},set(c,d){l.has(c)?l.set(c,d):s(c,d)}}},by="!",ZS=t=>{const{separator:a,experimentalParseClassName:l}=t,o=a.length===1,s=a[0],c=a.length,d=f=>{const m=[];let h=0,v=0,w;for(let D=0;D<f.length;D++){let x=f[D];if(h===0){if(x===s&&(o||f.slice(D,D+c)===a)){m.push(f.slice(v,D)),v=D+c;continue}if(x==="/"){w=D;continue}}x==="["?h++:x==="]"&&h--}const y=m.length===0?f:f.substring(v),S=y.startsWith(by),T=S?y.substring(1):y,E=w&&w>v?w-v:void 0;return{modifiers:m,hasImportantModifier:S,baseClassName:T,maybePostfixModifierPosition:E}};return l?f=>l({className:f,parseClassName:d}):d},BS=t=>{if(t.length<=1)return t;const a=[];let l=[];return t.forEach(o=>{o[0]==="["?(a.push(...l.sort(),o),l=[]):l.push(o)}),a.push(...l.sort()),a},HS=t=>({cache:LS(t.cacheSize),parseClassName:ZS(t),...US(t)}),$S=/\s+/,FS=(t,a)=>{const{parseClassName:l,getClassGroupId:o,getConflictingClassGroupIds:s}=a,c=[],d=t.trim().split($S);let f="";for(let m=d.length-1;m>=0;m-=1){const h=d[m],{modifiers:v,hasImportantModifier:w,baseClassName:y,maybePostfixModifierPosition:S}=l(h);let T=!!S,E=o(T?y.substring(0,S):y);if(!E){if(!T){f=h+(f.length>0?" "+f:f);continue}if(E=o(y),!E){f=h+(f.length>0?" "+f:f);continue}T=!1}const D=BS(v).join(":"),x=w?D+by:D,N=x+E;if(c.includes(N))continue;c.push(N);const R=s(E,T);for(let H=0;H<R.length;++H){const q=R[H];c.push(x+q)}f=h+(f.length>0?" "+f:f)}return f};function GS(){let t=0,a,l,o="";for(;t<arguments.length;)(a=arguments[t++])&&(l=xy(a))&&(o&&(o+=" "),o+=l);return o}var xy=t=>{if(typeof t=="string")return t;let a,l="";for(let o=0;o<t.length;o++)t[o]&&(a=xy(t[o]))&&(l&&(l+=" "),l+=a);return l};function PS(t,...a){let l,o,s,c=d;function d(m){const h=a.reduce((v,w)=>w(v),t());return l=HS(h),o=l.cache.get,s=l.cache.set,c=f,f(m)}function f(m){const h=o(m);if(h)return h;const v=FS(m,l);return s(m,v),v}return function(){return c(GS.apply(null,arguments))}}var Je=t=>{const a=l=>l[t]||[];return a.isThemeGetter=!0,a},Sy=/^\[(?:([a-z-]+):)?(.+)\]$/i,IS=/^\d+\/\d+$/,YS=new Set(["px","full","screen"]),WS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,XS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,KS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,QS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ha=t=>Wl(t)||YS.has(t)||IS.test(t),Qa=t=>io(t,"length",o9),Wl=t=>!!t&&!Number.isNaN(Number(t)),Kf=t=>io(t,"number",Wl),di=t=>!!t&&Number.isInteger(Number(t)),JS=t=>t.endsWith("%")&&Wl(t.slice(0,-1)),De=t=>Sy.test(t),Ja=t=>WS.test(t),e9=new Set(["length","size","percentage"]),t9=t=>io(t,e9,Ty),n9=t=>io(t,"position",Ty),a9=new Set(["image","url"]),r9=t=>io(t,a9,s9),l9=t=>io(t,"",i9),fi=()=>!0,io=(t,a,l)=>{const o=Sy.exec(t);return o?o[1]?typeof a=="string"?o[1]===a:a.has(o[1]):l(o[2]):!1},o9=t=>VS.test(t)&&!XS.test(t),Ty=()=>!1,i9=t=>KS.test(t),s9=t=>QS.test(t),c9=()=>{const t=Je("colors"),a=Je("spacing"),l=Je("blur"),o=Je("brightness"),s=Je("borderColor"),c=Je("borderRadius"),d=Je("borderSpacing"),f=Je("borderWidth"),m=Je("contrast"),h=Je("grayscale"),v=Je("hueRotate"),w=Je("invert"),y=Je("gap"),S=Je("gradientColorStops"),T=Je("gradientColorStopPositions"),E=Je("inset"),D=Je("margin"),x=Je("opacity"),N=Je("padding"),R=Je("saturate"),H=Je("scale"),q=Je("sepia"),V=Je("skew"),ee=Je("space"),J=Je("translate"),re=()=>["auto","contain","none"],ie=()=>["auto","hidden","clip","visible","scroll"],se=()=>["auto",De,a],le=()=>[De,a],_e=()=>["",ha,Qa],xe=()=>["auto",Wl,De],me=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],k=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],K=()=>["","0",De],C=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>[Wl,De];return{cacheSize:500,separator:":",theme:{colors:[fi],spacing:[ha,Qa],blur:["none","",Ja,De],brightness:F(),borderColor:[t],borderRadius:["none","","full",Ja,De],borderSpacing:le(),borderWidth:_e(),contrast:F(),grayscale:K(),hueRotate:F(),invert:K(),gap:le(),gradientColorStops:[t],gradientColorStopPositions:[JS,Qa],inset:se(),margin:se(),opacity:F(),padding:le(),saturate:F(),scale:F(),sepia:K(),skew:F(),space:le(),translate:le()},classGroups:{aspect:[{aspect:["auto","square","video",De]}],container:["container"],columns:[{columns:[Ja]}],"break-after":[{"break-after":C()}],"break-before":[{"break-before":C()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...me(),De]}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:re()}],"overscroll-x":[{"overscroll-x":re()}],"overscroll-y":[{"overscroll-y":re()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",di,De]}],basis:[{basis:se()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",De]}],grow:[{grow:K()}],shrink:[{shrink:K()}],order:[{order:["first","last","none",di,De]}],"grid-cols":[{"grid-cols":[fi]}],"col-start-end":[{col:["auto",{span:["full",di,De]},De]}],"col-start":[{"col-start":xe()}],"col-end":[{"col-end":xe()}],"grid-rows":[{"grid-rows":[fi]}],"row-start-end":[{row:["auto",{span:[di,De]},De]}],"row-start":[{"row-start":xe()}],"row-end":[{"row-end":xe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",De]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",De]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[N]}],px:[{px:[N]}],py:[{py:[N]}],ps:[{ps:[N]}],pe:[{pe:[N]}],pt:[{pt:[N]}],pr:[{pr:[N]}],pb:[{pb:[N]}],pl:[{pl:[N]}],m:[{m:[D]}],mx:[{mx:[D]}],my:[{my:[D]}],ms:[{ms:[D]}],me:[{me:[D]}],mt:[{mt:[D]}],mr:[{mr:[D]}],mb:[{mb:[D]}],ml:[{ml:[D]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",De,a]}],"min-w":[{"min-w":[De,a,"min","max","fit"]}],"max-w":[{"max-w":[De,a,"none","full","min","max","fit","prose",{screen:[Ja]},Ja]}],h:[{h:[De,a,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[De,a,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[De,a,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[De,a,"auto","min","max","fit"]}],"font-size":[{text:["base",Ja,Qa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Kf]}],"font-family":[{font:[fi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",De]}],"line-clamp":[{"line-clamp":["none",Wl,Kf]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ha,De]}],"list-image":[{"list-image":["none",De]}],"list-style-type":[{list:["none","disc","decimal",De]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...k(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ha,Qa]}],"underline-offset":[{"underline-offset":["auto",ha,De]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:le()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",De]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",De]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...me(),n9]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",t9]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},r9]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[T]}],"gradient-via-pos":[{via:[T]}],"gradient-to-pos":[{to:[T]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...k(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:k()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...k()]}],"outline-offset":[{"outline-offset":[ha,De]}],"outline-w":[{outline:[ha,Qa]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:_e()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[ha,Qa]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Ja,l9]}],"shadow-color":[{shadow:[fi]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[l]}],brightness:[{brightness:[o]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Ja,De]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[w]}],saturate:[{saturate:[R]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[l]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[R]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[d]}],"border-spacing-x":[{"border-spacing-x":[d]}],"border-spacing-y":[{"border-spacing-y":[d]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",De]}],duration:[{duration:F()}],ease:[{ease:["linear","in","out","in-out",De]}],delay:[{delay:F()}],animate:[{animate:["none","spin","ping","pulse","bounce",De]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[H]}],"scale-x":[{"scale-x":[H]}],"scale-y":[{"scale-y":[H]}],rotate:[{rotate:[di,De]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[V]}],"skew-y":[{"skew-y":[V]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",De]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",De]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":le()}],"scroll-mx":[{"scroll-mx":le()}],"scroll-my":[{"scroll-my":le()}],"scroll-ms":[{"scroll-ms":le()}],"scroll-me":[{"scroll-me":le()}],"scroll-mt":[{"scroll-mt":le()}],"scroll-mr":[{"scroll-mr":le()}],"scroll-mb":[{"scroll-mb":le()}],"scroll-ml":[{"scroll-ml":le()}],"scroll-p":[{"scroll-p":le()}],"scroll-px":[{"scroll-px":le()}],"scroll-py":[{"scroll-py":le()}],"scroll-ps":[{"scroll-ps":le()}],"scroll-pe":[{"scroll-pe":le()}],"scroll-pt":[{"scroll-pt":le()}],"scroll-pr":[{"scroll-pr":le()}],"scroll-pb":[{"scroll-pb":le()}],"scroll-pl":[{"scroll-pl":le()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",De]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[ha,Qa,Kf]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},u9=PS(c9),L=(...t)=>u9(zS(t));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var _y=(t,a)=>{let l=0;return o=>{const s=Date.now();if(s-l>=a)return l=s,t(o)}},ba=t=>{if(!Pn)return null;try{const a=localStorage.getItem(t);return a?JSON.parse(a):null}catch{return null}},Qt=(t,a)=>{if(Pn)try{window.localStorage.setItem(t,JSON.stringify(a))}catch{}},$w=t=>{if(Pn)try{window.localStorage.removeItem(t)}catch{}},d9=24,f9=12,Ni=t=>{if(!t)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:a,type:l,elementType:o}=t;let s=Nt(l);const c=[],d=[];if(ki(t)||a===Bi||a===Zi||l?.$$typeof===Symbol.for("react.memo")||o?.$$typeof===Symbol.for("react.memo")){const f=ki(t);d.push({type:"memo",title:f?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:f})}if(a===d9&&d.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),a===tu&&d.push({type:"suspense",title:"Component that can suspend while content is loading"}),a===f9&&d.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const f=/^(\w+)\((.*)\)$/;let m=s;for(;f.test(m);){const h=m.match(f);if(h?.[1]&&h?.[2])c.unshift(h[1]),m=h[2];else break}s=m}return{name:s||"Unknown",wrappers:c,wrapperTypes:d}},ou=bt(!1),Zp=bt(null),Hn={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:yt.width,height:yt.height,position:{x:ke,y:ke}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:yt.width,height:yt.height,position:{x:ke,y:ke}},componentsTree:{width:Nn}},p9=()=>{const t=ba(wa);return t?{corner:t.corner??Hn.corner,dimensions:t.dimensions??Hn.dimensions,lastDimensions:t.lastDimensions??t.dimensions??Hn.lastDimensions,componentsTree:t.componentsTree??Hn.componentsTree}:(Qt(wa,{corner:Hn.corner,dimensions:Hn.dimensions,lastDimensions:Hn.lastDimensions,componentsTree:Hn.componentsTree}),Hn)},ue=bt(p9()),Qf=()=>{if(!Pn)return;const{dimensions:t}=ue.value,{width:a,height:l,position:o}=t;ue.value={...ue.value,dimensions:{isFullWidth:a>=window.innerWidth-ke*2,isFullHeight:l>=window.innerHeight-ke*2,width:a,height:l,position:o}}},Qe=bt({view:"none"}),h9=ba(Mc),on=bt(h9??null);function m9(){return!1}function Mh(t){function a(l){return this.shouldComponentUpdate=m9,Br(t,l)}return a.displayName=`Memo(${t.displayName||t.name})`,a.prototype.isReactComponent=!0,a._forwarded=!0,a}var g9=t=>{const{count:a,getScrollElement:l,estimateSize:o,overscan:s=5}=t,[c,d]=Ue(0),[f,m]=Ue(0),h=we(),v=we(null),w=we(null),y=o(),S=ft(x=>{if(!v.current)return;const N=x?.[0]?.contentRect.height??v.current.getBoundingClientRect().height;m(N)},[]),T=ft(()=>{w.current!==null&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{S(),w.current=null})},[S]);Ce(()=>{const x=l();if(!x)return;v.current=x;const N=()=>{v.current&&d(v.current.scrollTop)};S(),h.current||(h.current=new ResizeObserver(()=>{T()})),h.current.observe(x),x.addEventListener("scroll",N,{passive:!0});const R=new MutationObserver(T);return R.observe(x,{attributes:!0,childList:!0,subtree:!0}),()=>{x.removeEventListener("scroll",N),h.current&&h.current.disconnect(),R.disconnect(),w.current!==null&&cancelAnimationFrame(w.current)}},[l,S,T]);const E=Un(()=>{const x=Math.floor(c/y),N=Math.ceil(f/y);return{start:Math.max(0,x-s),end:Math.min(a,x+N+s)}},[c,y,f,a,s]);return{virtualItems:Un(()=>{const x=[];for(let N=E.start;N<E.end;N++)x.push({key:N,index:N,start:N*y});return x},[E,y]),totalSize:a*y,scrollTop:c,containerHeight:f}};ba("react-scann-pinned");var w9=t=>{const a=[];let l=t;for(;l;){const o=l.elementType,s=typeof o=="function"?o.displayName||o.name:typeof o=="string"?o:"Unknown",c=l.index!==void 0?`[${l.index}]`:"";a.unshift(`${s}${c}`),l=l.return??null}return a.join("::")},Dr=new WeakMap,v9=(t,a)=>{const l=a.bind(null,t);return document.addEventListener("scroll",l,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",l,{capture:!0})}},y9={activeFlashes:new Map,create(t){const a=t.querySelector(".react-scan-flash-overlay"),l=a instanceof HTMLElement?a:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",t.appendChild(s);const c=v9(t,()=>{t.querySelector(".react-scan-flash-overlay")&&this.create(t)});return this.activeFlashes.set(t,{element:t,overlay:s,scrollCleanup:c}),s})(),o=Dr.get(l);o&&(clearTimeout(o),Dr.delete(l)),requestAnimationFrame(()=>{l.style.transition="none",l.style.opacity="0.9";const s=setTimeout(()=>{l.style.transition="opacity 150ms ease-out",l.style.opacity="0";const c=setTimeout(()=>{l.parentNode&&l.parentNode.removeChild(l);const d=this.activeFlashes.get(t);d?.scrollCleanup&&d.scrollCleanup(),this.activeFlashes.delete(t),Dr.delete(l)},150);Dr.set(l,c)},300);Dr.set(l,s)})},cleanup(t){const a=this.activeFlashes.get(t);if(a){const l=Dr.get(a.overlay);l&&(clearTimeout(l),Dr.delete(a.overlay)),a.overlay.parentNode&&a.overlay.parentNode.removeChild(a.overlay),a.scrollCleanup&&a.scrollCleanup(),this.activeFlashes.delete(t)}},cleanupAll(){for(const[,t]of this.activeFlashes)this.cleanup(t.element)}},Fw=1e3,ky={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Pt=bt(ky),Eh=bt(0),Ur=[],Cr=null,b9=()=>{if(Ur.length===0)return;const t=[...Ur],{updates:a,totalUpdates:l,currentIndex:o,isViewingHistory:s}=Pt.value,c=[...a];let d=l;for(const{update:v}of t)c.length>=Fw&&c.shift(),c.push(v),d++;const f=Math.max(0,d-Fw);let m;s?o===l-1?m=c.length-1:o===0?m=0:f===0?m=o:m=o-1:m=c.length-1;const h=t[t.length-1];Pt.value={...Pt.value,latestFiber:h.fiber,updates:c,totalUpdates:d,windowOffset:f,currentIndex:m,isViewingHistory:s},Ur=Ur.slice(t.length)},My={showTimeline:()=>{Pt.value={...Pt.value,isVisible:!0}},hideTimeline:()=>{Pt.value={...Pt.value,isVisible:!1,currentIndex:Pt.value.updates.length-1}},updateFrame:(t,a)=>{Pt.value={...Pt.value,currentIndex:t,isViewingHistory:a}},updatePlaybackSpeed:t=>{Pt.value={...Pt.value,playbackSpeed:t}},addUpdate:(t,a)=>{if(Ur.push({update:t,fiber:a}),!Cr){const l=()=>{b9(),Cr=null,Ur.length>0&&(Cr=setTimeout(l,96))};Cr=setTimeout(l,96)}},reset:()=>{Cr&&(clearTimeout(Cr),Cr=null),Ur=[],Pt.value=ky}},Bt=bt({query:"",matches:[],currentMatchIndex:-1}),Jf=bt(!1),Ey=(t,a=0,l=null)=>t.reduce((o,s,c)=>{const d=s.element?w9(s.fiber):`${l}-${c}`,f=s.fiber?.type?Zy(s.fiber):void 0,m={...s,depth:a,nodeId:d,parentId:l,fiber:s.fiber,renderData:f};return o.push(m),s.children?.length&&o.push(...Ey(s.children,a+1,d)),o},[]),x9=t=>t.reduce((a,l)=>Math.max(a,l.depth),0),S9=(t,a)=>{if(a<=0)return 24;const c=Math.max(0,t-Nn);if(c<24)return 0;const f=Math.min(c*.3,a*24)/a;return Math.max(0,Math.min(24,f))},T9=["memo","forwardRef","lazy","suspense"],Dy=t=>{const a=t.match(/\[(.*?)\]/);if(!a)return null;const l=[],o=a[1].split(",");for(const s of o){const c=s.trim().toLowerCase();c&&l.push(c)}return l},_9=t=>{if(t.length===0)return!1;for(const a of t){let l=!1;for(const o of T9)if(o.toLowerCase().includes(a)){l=!0;break}if(!l)return!1}return!0},Cy=(t,a)=>{if(t.length===0)return!0;if(!a.length)return!1;for(const l of t){let o=!1;for(const s of a)if(s.type.toLowerCase().includes(l)){o=!0;break}if(!o)return!1}return!0},k9=(t,a)=>Un(()=>{const{query:l,matches:o}=a,s=o.some(h=>h.nodeId===t.nodeId),c=Dy(l)||[],d=l?l.replace(/\[.*?\]/,"").trim():"";if(!l||!s)return{highlightedText:g("span",{className:"truncate",children:t.label}),typeHighlight:!1};let f=!0;if(c.length>0)if(!t.fiber)f=!1;else{const{wrapperTypes:h}=Ni(t.fiber);f=Cy(c,h)}let m=g("span",{className:"truncate",children:t.label});if(d)try{if(d.startsWith("/")&&d.endsWith("/")){const h=d.slice(1,-1),v=new RegExp(`(${h})`,"i"),w=t.label.split(v);m=g("span",{className:"tree-node-search-highlight",children:w.map((y,S)=>v.test(y)?g("span",{className:L("regex",{start:v.test(y)&&S===0,middle:v.test(y)&&S%2===1,end:v.test(y)&&S===w.length-1,"!ml-0":S===1}),children:y},`${t.nodeId}-${y}`):y)})}else{const h=t.label.toLowerCase(),v=d.toLowerCase(),w=h.indexOf(v);w>=0&&(m=g("span",{className:"tree-node-search-highlight",children:[t.label.slice(0,w),g("span",{className:"single",children:t.label.slice(w,w+d.length)}),t.label.slice(w+d.length)]}))}}catch{}return{highlightedText:m,typeHighlight:f&&c.length>0}},[t.label,t.nodeId,t.fiber,a]),Gw=t=>t>0?t<.1-Number.EPSILON?"< 0.1":t<1e3?Number(t.toFixed(1)).toString():`${(t/1e3).toFixed(1)}k`:"0",M9=({node:t,nodeIndex:a,hasChildren:l,isCollapsed:o,handleTreeNodeClick:s,handleTreeNodeToggle:c,searchValue:d})=>{const f=we(null),m=we(t.renderData?.renderCount??0),{highlightedText:h,typeHighlight:v}=k9(t,d);Ce(()=>{const S=t.renderData?.renderCount,T=f.current;!T||!m.current||!S||m.current===S||(T.classList.remove("count-flash"),T.offsetWidth,T.classList.add("count-flash"),m.current=S)},[t.renderData?.renderCount]);const w=Un(()=>{if(!t.renderData)return null;const{selfTime:S,totalTime:T,renderCount:E}=t.renderData;return E?g("span",{className:L("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:g("span",{ref:f,title:`Self time: ${Gw(S)}ms
Total time: ${Gw(T)}ms`,className:"count-badge",children:["×",E]})}):null},[t.renderData]),y=Un(()=>{if(!t.fiber)return null;const{wrapperTypes:S}=Ni(t.fiber),T=S[0];return g("span",{className:L("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[T&&g(qe,{children:[g("span",{title:T?.title,className:L("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",T.type==="memo"&&"bg-[#8e61e3] text-white",v&&"bg-yellow-300 text-black"),children:T.type},T.type),T.compiler&&g("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),S.length>1&&`×${S.length}`,w]})},[t.fiber,v,w]);return g("button",{type:"button",title:t.title,"data-index":a,className:L("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[g("button",{type:"button","data-index":a,onClick:c,className:L("w-6 h-6 flex items-center justify-center","text-left"),children:l&&g(st,{name:"icon-chevron-right",size:12,className:L("transition-transform",!o&&"rotate-90")})}),h,y]})},E9=()=>{const t=we(null),a=we(null),l=we(null),o=we(null),s=we(null),c=we(0),d=we(!1),f=we(!1),m=we(null),[h,v]=Ue([]),[w,y]=Ue(new Set),[S,T]=Ue(void 0),[E,D]=Ue(Bt.value),x=Un(()=>{const k=[],z=h,U=new Map(z.map(K=>[K.nodeId,K]));for(const K of z){let C=!0,F=K;for(;F.parentId;){const j=U.get(F.parentId);if(!j)break;if(w.has(j.nodeId)){C=!1;break}F=j}C&&k.push(K)}return k},[w,h]),N=28,{virtualItems:R,totalSize:H}=g9({count:x.length,getScrollElement:()=>t.current,estimateSize:()=>N,overscan:5}),q=ft(k=>{d.current=!0,o.current?.blur(),Jf.value=!0;const{parentCompositeFiber:z}=jr(k);if(!z)return;ce.inspectState.value={kind:"focused",focusedDomElement:k,fiber:z};const U=x.findIndex(K=>K.element===k);if(U!==-1){T(U);const K=U*N,C=t.current;if(C){const F=C.clientHeight,j=C.scrollTop;(K<j||K+N>j+F)&&C.scrollTo({top:Math.max(0,K-F/2),behavior:"instant"})}}},[x]),V=ft(k=>{const z=k.currentTarget,U=Number(z.dataset.index);if(Number.isNaN(U))return;const K=x[U].element;K&&q(K)},[x,q]),ee=ft(k=>{y(z=>{const U=new Set(z);return U.has(k)?U.delete(k):U.add(k),U})},[]),J=ft(k=>{k.stopPropagation();const z=k.target,U=Number(z.dataset.index);if(Number.isNaN(U))return;const K=x[U].nodeId;ee(K)},[x,ee]),re=ft(k=>{l.current?.classList.remove("!border-red-500");const z=[];if(!k){Bt.value={query:k,matches:z,currentMatchIndex:-1};return}if(k.includes("[")&&!k.includes("]")&&k.length>k.indexOf("[")+1){l.current?.classList.add("!border-red-500");return}const U=Dy(k)||[];if(k.includes("[")&&!_9(U)){l.current?.classList.add("!border-red-500");return}const K=k.replace(/\[.*?\]/,"").trim(),C=/^\/.*\/$/.test(K);let F=j=>!1;if(K.startsWith("/")&&!C&&K.length>1){l.current?.classList.add("!border-red-500");return}if(C)try{const j=K.slice(1,-1),Z=new RegExp(j,"i");F=W=>Z.test(W)}catch{l.current?.classList.add("!border-red-500");return}else if(K){const j=K.toLowerCase();F=Z=>Z.toLowerCase().includes(j)}for(const j of h){let Z=!0;if(K&&(Z=F(j.label)),Z&&U.length>0)if(!j.fiber)Z=!1;else{const{wrapperTypes:W}=Ni(j.fiber);Z=Cy(U,W)}Z&&z.push(j)}if(Bt.value={query:k,matches:z,currentMatchIndex:z.length>0?0:-1},z.length>0){const j=z[0],Z=x.findIndex(W=>W.nodeId===j.nodeId);if(Z!==-1){const W=Z*N,X=t.current;if(X){const ae=X.clientHeight;X.scrollTo({top:Math.max(0,W-ae/2),behavior:"instant"})}}}},[h,x]),ie=ft(k=>{const z=k.currentTarget;z&&re(z.value)},[re]),se=ft(k=>{const{matches:z,currentMatchIndex:U}=Bt.value;if(z.length===0)return;const K=k==="next"?(U+1)%z.length:(U-1+z.length)%z.length;Bt.value={...Bt.value,currentMatchIndex:K};const C=z[K],F=x.findIndex(j=>j.nodeId===C.nodeId);if(F!==-1){T(F);const j=F*N,Z=t.current;if(Z){const W=Z.clientHeight;Z.scrollTo({top:Math.max(0,j-W/2),behavior:"instant"})}}},[x]),le=ft(k=>{if(a.current&&(a.current.style.width=`${k}px`),t.current){t.current.style.width=`${k}px`;const z=S9(k,c.current);t.current.style.setProperty("--indentation-size",`${z}px`)}},[]),_e=ft(k=>{if(!m.current)return;const z=ue.value.dimensions.width,U=Math.floor(z-Nn/2);m.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),k<=Nn?m.current.classList.add("cursor-w-resize"):k>=U?m.current.classList.add("cursor-e-resize"):m.current.classList.add("cursor-ew-resize")},[]),xe=ft(k=>{if(k.preventDefault(),k.stopPropagation(),!t.current)return;t.current.style.setProperty("pointer-events","none"),f.current=!0;const z=k.clientX,U=t.current.offsetWidth,K=ue.value.dimensions.width,C=Math.floor(K-Nn/2);_e(U);const F=Z=>{const W=z-Z.clientX,X=U+W;_e(X);const ae=Math.min(C,Math.max(Nn,X));le(ae)},j=()=>{t.current&&(t.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",j),ue.value={...ue.value,componentsTree:{...ue.value.componentsTree,width:t.current.offsetWidth}},Qt(wa,ue.value),f.current=!1)};document.addEventListener("pointermove",F),document.addEventListener("pointerup",j)},[le,_e]);Ce(()=>{if(!t.current)return;const k=t.current.offsetWidth;return _e(k),ue.subscribe(()=>{t.current&&_e(t.current.offsetWidth)})},[_e]);const me=ft(()=>{d.current=!1},[]);return Ce(()=>{let k=!0;const z=j=>{const Z=new Map,W=[];for(const{element:X,name:ae,fiber:oe}of j){if(!X)continue;let he=ae;const{name:ve,wrappers:He}=Ni(oe);ve&&(He.length>0?he=`${He.join("(")}(${ve})${")".repeat(He.length)}`:he=ve),Z.set(X,{label:ve||ae,title:he,children:[],element:X,fiber:oe})}for(const{element:X,depth:ae}of j){if(!X)continue;const oe=Z.get(X);if(oe)if(ae===0)W.push(oe);else{let he=X.parentElement;for(;he;){const ve=Z.get(he);if(ve){ve.children=ve.children||[],ve.children.push(oe);break}he=he.parentElement}}}return W},U=()=>{const j=s.current;if(!j)return;const Z=Y9(),W=z(Z);if(W.length>0){const X=Ey(W),ae=x9(X);if(c.current=ae,le(ue.value.componentsTree.width),v(X),k){k=!1;const oe=X.findIndex(he=>he.element===j);if(oe!==-1){const he=oe*N,ve=t.current;ve&&setTimeout(()=>{ve.scrollTo({top:he,behavior:"instant"})},96)}}}},K=ce.inspectState.subscribe(j=>{if(j.kind==="focused"){if(Jf.value)return;re(""),s.current=j.focusedDomElement,U()}});let C=0;const F=Eh.subscribe(()=>{if(ce.inspectState.value.kind==="focused"){if(cancelAnimationFrame(C),f.current)return;C=requestAnimationFrame(()=>{Jf.value=!1,U()})}});return()=>{K(),F(),Bt.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Ce(()=>{const k=z=>{if(d.current&&S)switch(z.key){case"ArrowUp":{if(z.preventDefault(),z.stopPropagation(),S>0){const U=x[S-1];U?.element&&q(U.element)}return}case"ArrowDown":{if(z.preventDefault(),z.stopPropagation(),S<x.length-1){const U=x[S+1];U?.element&&q(U.element)}return}case"ArrowLeft":{z.preventDefault(),z.stopPropagation();const U=x[S];U?.nodeId&&ee(U.nodeId);return}case"ArrowRight":{z.preventDefault(),z.stopPropagation();const U=x[S];U?.nodeId&&ee(U.nodeId);return}}};return document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}},[S,x,q,ee]),Ce(()=>Bt.subscribe(D),[]),Ce(()=>ue.subscribe(z=>{a.current?.style.setProperty("transition","width 0.1s"),le(z.componentsTree.width),setTimeout(()=>{a.current?.style.removeProperty("transition")},500)}),[]),g("div",{className:"react-scan-components-tree flex",children:[g("div",{ref:m,onPointerDown:xe,className:"relative resize-v-line",children:g("span",{children:g(st,{name:"icon-ellipsis",size:18})})}),g("div",{ref:a,className:"flex flex-col h-full",children:[g("div",{className:"p-2 border-b border-[#1e1e1e]",children:g("div",{ref:l,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:L("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[g(st,{name:"icon-search",size:12,className:" text-neutral-500"}),g("div",{className:"relative flex-1 h-7 overflow-hidden",children:g("input",{ref:o,type:"text",value:Bt.value.query,onClick:k=>{k.stopPropagation(),k.currentTarget.focus()},onPointerDown:k=>{k.stopPropagation()},onKeyDown:k=>{k.key==="Escape"&&k.currentTarget.blur(),Bt.value.matches.length&&(k.key==="Enter"&&k.shiftKey?se("prev"):k.key==="Enter"&&(k.metaKey||k.ctrlKey?(k.preventDefault(),k.stopPropagation(),q(Bt.value.matches[Bt.value.currentMatchIndex].element),k.currentTarget.focus()):se("next")))},onChange:ie,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Bt.value.query?g(qe,{children:[g("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Bt.value.currentMatchIndex+1,"|",Bt.value.matches.length]}),!!Bt.value.matches.length&&g(qe,{children:[g("button",{type:"button",onClick:k=>{k.stopPropagation(),se("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:g(st,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),g("button",{type:"button",onClick:k=>{k.stopPropagation(),se("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:g(st,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),g("button",{type:"button",onClick:k=>{k.stopPropagation(),re("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:g(st,{name:"icon-close",size:12})})]}):!!h.length&&g("span",{className:"text-xs text-neutral-500",children:h.length})]})}),g("div",{className:"flex-1 overflow-hidden",children:g("div",{ref:t,onPointerLeave:me,className:"tree h-full overflow-auto will-change-transform",children:g("div",{className:"relative w-full",style:{height:H},children:R.map(k=>{const z=x[k.index];if(!z)return null;const U=ce.inspectState.value.kind==="focused"&&z.element===ce.inspectState.value.focusedDomElement,K=k.index===S;return g("div",{className:L("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(U||K)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:k.start,height:N},children:g("div",{className:"w-full h-full",style:{paddingLeft:`calc(${z.depth} * var(--indentation-size))`},children:g(M9,{node:z,nodeIndex:k.index,hasChildren:!!z.children?.length,isCollapsed:w.has(z.nodeId),handleTreeNodeClick:V,handleTreeNodeToggle:J,searchValue:E})})},z.nodeId)})})})})]})]})},Oc=lu(({text:t,children:a,onCopy:l,className:o,iconSize:s=14})=>{const[c,d]=Ue(!1);Ce(()=>{if(c){const h=setTimeout(()=>d(!1),600);return()=>{clearTimeout(h)}}},[c]);const f=ft(h=>{h.preventDefault(),h.stopPropagation(),navigator.clipboard.writeText(t).then(()=>{d(!0),l?.(!0,t)},()=>{l?.(!1,t)})},[t,l]),m=g("button",{onClick:f,type:"button",className:L("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,o),children:g(st,{name:`icon-${c?"check":"copy"}`,size:[s],className:L(c&&"text-green-500")})});return a?a({ClipboardIcon:m,onClick:f}):m}),D9=({length:t,expanded:a,onToggle:l,isNegative:o})=>g("div",{className:"flex items-center gap-1",children:[g("button",{type:"button",onClick:l,className:"flex items-center p-0 opacity-50",children:g(st,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",o?"text-[#f87171]":"text-[#4ade80]",a&&"rotate-90")})}),g("span",{children:["Array(",t,")"]})]}),Bp=({value:t,path:a,isNegative:l})=>{const[o,s]=Ue(!1);if(!(t!==null&&typeof t=="object"&&!(t instanceof Date)))return g("div",{className:"flex items-center gap-1",children:[g("span",{className:"text-gray-500",children:[a,":"]}),g("span",{className:"truncate",children:Bc(t)})]});const d=Object.entries(t);return g("div",{className:"flex flex-col",children:[g("div",{className:"flex items-center gap-1",children:[g("button",{type:"button",onClick:()=>s(!o),className:"flex items-center p-0 opacity-50",children:g(st,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",o&&"rotate-90")})}),g("span",{className:"text-gray-500",children:[a,":"]}),!o&&g("span",{className:"truncate",children:t instanceof Date?Bc(t):`{${Object.keys(t).join(", ")}}`})]}),o&&g("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:d.map(([f,m])=>g(Bp,{value:m,path:f,isNegative:l},f))})]})},qc=({value:t,expanded:a,onToggle:l,isNegative:o})=>{const{value:s,error:c}=X9(t);return c?g("span",{className:"text-gray-500 font-italic",children:c}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?g("div",{className:"flex flex-col gap-1 relative",children:[g(D9,{length:s.length,expanded:a,onToggle:l,isNegative:o}),a&&g("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((f,m)=>g(Bp,{value:f,path:m.toString(),isNegative:o},m.toString()))}),g(Oc,{text:Vw(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:f})=>g(qe,{children:f})})]}):g("div",{className:"flex items-start gap-1 relative",children:[g("button",{type:"button",onClick:l,className:L("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:g(st,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",o?"text-[#f87171]":"text-[#4ade80]",a&&"rotate-90")})}),g("div",{className:"flex-1",children:a?g("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([f,m])=>g(Bp,{value:m,path:f,isNegative:o},f))}):g("span",{children:Bc(s)})}),g(Oc,{text:Vw(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:f})=>g(qe,{children:f})})]}):g("span",{children:Bc(s)})},C9=50;bt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Hp=t=>{switch(t.kind){case"initialized":return t.changes.currentValue;case"partially-initialized":return t.value}},Pw=(t,a)=>{for(const l of t){const o=a.get(l.name);if(o){a.set(o.name,{count:o.count+1,currentValue:l.value,id:o.name,lastUpdated:Date.now(),name:o.name,previousValue:l.prevValue});continue}a.set(l.name,{count:1,currentValue:l.value,id:l.name,lastUpdated:Date.now(),name:l.name,previousValue:l.prevValue})}},N9=(t,a)=>{for(const l of t){const o=a.contextChanges.get(l.contextType);if(o){if(or(Hp(o),l.value))continue;if(o.kind==="partially-initialized"){a.contextChanges.set(l.contextType,{kind:"initialized",changes:{count:1,currentValue:l.value,id:l.contextType.toString(),lastUpdated:Date.now(),name:l.name,previousValue:o.value}});continue}a.contextChanges.set(l.contextType,{kind:"initialized",changes:{count:o.changes.count+1,currentValue:l.value,id:l.contextType.toString(),lastUpdated:Date.now(),name:l.name,previousValue:o.changes.currentValue}});continue}a.contextChanges.set(l.contextType,{kind:"partially-initialized",id:l.contextType.toString(),lastUpdated:Date.now(),name:l.name,value:l.value})}},A9=t=>{const a={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return t.forEach(l=>{N9(l.contextChanges,a),Pw(l.stateChanges,a.stateChanges),Pw(l.propsChanges,a.propsChanges)}),a},Iw=(t,a)=>{const l=new Map;return t.forEach((o,s)=>{l.set(s,o)}),a.forEach((o,s)=>{const c=l.get(s);if(!c){l.set(s,o);return}l.set(s,{count:c.count+o.count,currentValue:o.currentValue,id:o.id,lastUpdated:o.lastUpdated,name:o.name,previousValue:o.previousValue})}),l},z9=(t,a)=>{const l=new Map;return t.contextChanges.forEach((o,s)=>{l.set(s,o)}),a.contextChanges.forEach((o,s)=>{const c=l.get(s);if(!c){l.set(s,o);return}if(Hp(o)!==Hp(c))switch(c.kind){case"initialized":switch(o.kind){case"initialized":{l.set(s,{kind:"initialized",changes:{...o.changes,count:o.changes.count+c.changes.count+1,currentValue:o.changes.currentValue,previousValue:o.changes.previousValue}});return}case"partially-initialized":{l.set(s,{kind:"initialized",changes:{count:c.changes.count+1,currentValue:o.value,id:o.id,lastUpdated:o.lastUpdated,name:o.name,previousValue:c.changes.currentValue}});return}}case"partially-initialized":switch(o.kind){case"initialized":{l.set(s,{kind:"initialized",changes:{count:o.changes.count+1,currentValue:o.changes.currentValue,id:o.changes.id,lastUpdated:o.changes.lastUpdated,name:o.changes.name,previousValue:c.value}});return}case"partially-initialized":{l.set(s,{kind:"initialized",changes:{count:1,currentValue:o.value,id:o.id,lastUpdated:o.lastUpdated,name:o.name,previousValue:c.value}});return}}}}),l},U9=(t,a)=>{const l=z9(t,a),o=Iw(t.propsChanges,a.propsChanges),s=Iw(t.stateChanges,a.stateChanges);return{contextChanges:l,propsChanges:o,stateChanges:s}},$p=t=>Array.from(t.propsChanges.values()).reduce((a,l)=>a+l.count,0)+Array.from(t.stateChanges.values()).reduce((a,l)=>a+l.count,0)+Array.from(t.contextChanges.values()).filter(a=>a.kind==="initialized").reduce((a,l)=>a+l.changes.count,0),j9=t=>{const a=we({queue:[]}),[l,o]=Ue({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ce.inspectState.value.kind==="focused"?ce.inspectState.value.fiber:null,c=s?lr(s):null;return Ce(()=>{const d=setInterval(()=>{a.current.queue.length!==0&&(o(f=>{const m=A9(a.current.queue),h=U9(f,m);return $p(f),$p(h),h}),a.current.queue=[])},C9);return()=>{clearInterval(d)}},[s]),Ce(()=>{if(!c)return;const d=m=>{a.current?.queue.push(m)};let f=ce.changesListeners.get(c);return f||(f=[],ce.changesListeners.set(c,f)),f.push(d),()=>{o({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),a.current.queue=[],ce.changesListeners.set(c,ce.changesListeners.get(c)?.filter(m=>m!==d)??[])}},[c]),Ce(()=>()=>{o({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),a.current.queue=[]},[c]),l},Lc=t=>{if(t==null)return{value:t};if(typeof t=="function")return{value:t};if(typeof t!="object")return{value:t};if(Xl(t))return{value:"Promise"};try{const a=Object.getPrototypeOf(t);return a===Promise.prototype||a?.constructor?.name==="Promise"?{value:"Promise"}:{value:t}}catch{return{value:null,error:"Error accessing value"}}},R9=lu(()=>{const[t,a]=Ue(!0),l=j9(),[o,s]=Ue(!1),c=$p(l)>0;Ce(()=>{if(!o&&c){const m=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{a(!0)})},0);return()=>clearTimeout(m)}},[o,c]);const d=new Map(Array.from(l.contextChanges.entries()).filter(([,m])=>m.kind==="initialized").map(([m,h])=>[m,h.kind==="partially-initialized"?null:h.changes])),f=ce.inspectState.value.kind==="focused"?ce.inspectState.value.fiber:null;if(f)return g(qe,{children:[g(q9,{}),g("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[g("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[g("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",g("span",{className:"text-[#A855F7]",children:Nt(f)})," ","render?"]}),!c&&g("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[g("div",{children:"No changes detected since selecting"}),g("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),g("div",{className:L("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[g(ep,{changes:l.propsChanges,title:"Changed Props",isExpanded:t}),g(ep,{renderName:m=>O9(m,Nt(Gr(f))??"Unknown Component"),changes:l.stateChanges,title:"Changed State",isExpanded:t}),g(ep,{changes:d,title:"Changed Context",isExpanded:t})]})]})]})}),O9=(t,a)=>{if(Number.isNaN(Number(t)))return t;const l=Number.parseInt(t);return g("span",{className:"truncate",children:[g("span",{className:"text-white",children:[l,(s=>{const c=s%10,d=s%100;if(d>=11&&d<=13)return"th";switch(c){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(l)," hook"," "]}),g("span",{style:{color:"#666"},children:["called in ",g("i",{className:"text-[#A855F7] truncate",children:a})]})]})},q9=lu(()=>{const t=we(null),a=we(null),l=we(null),o=we({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Ce(()=>{const s=_y(()=>{const d=[];t.current?.dataset.flash==="true"&&d.push(t.current),a.current?.dataset.flash==="true"&&d.push(a.current),l.current?.dataset.flash==="true"&&d.push(l.current);for(const f of d)f.classList.remove("count-flash-white"),f.offsetWidth,f.classList.add("count-flash-white")},400);return Pt.subscribe(d=>{if(!t.current||!a.current||!l.current)return;const{currentIndex:f,updates:m}=d,h=m[f];!h||f===0||(s(),o.current={isPropsChanged:(h.props?.changes?.size??0)>0,isStateChanged:(h.state?.changes?.size??0)>0,isContextChanged:(h.context?.changes?.size??0)>0},t.current.dataset.flash!=="true"&&(t.current.dataset.flash=o.current.isPropsChanged.toString()),a.current.dataset.flash!=="true"&&(a.current.dataset.flash=o.current.isStateChanged.toString()),l.current.dataset.flash!=="true"&&(l.current.dataset.flash=o.current.isContextChanged.toString()))})},[]),g("button",{type:"button",className:L("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:g("div",{className:L("flex-1 react-scan-expandable"),children:g("div",{className:"overflow-hidden",children:g("div",{className:"flex items-center whitespace-nowrap",children:[g("div",{className:"flex items-center gap-x-2",children:"What changed?"}),g("div",{className:L("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[g("div",{ref:t,children:"props"}),g("div",{ref:a,children:"state"}),g("div",{ref:l,children:"context"})]})]})})})})}),L9=t=>t,ep=lu(({title:t,changes:a,renderName:l=L9})=>{const[o,s]=Ue(new Set),[c,d]=Ue(new Set),f=Array.from(a.entries());return a.size===0?null:g("div",{children:[g("div",{className:"text-xs text-[#888] mb-1.5",children:t}),g("div",{className:"flex flex-col gap-2",children:f.map(([m,h])=>{const v=c.has(String(m)),{value:w,error:y}=Lc(h.previousValue),{value:S,error:T}=Lc(h.currentValue),E=Uy(w,S);return g("div",{children:[g("button",{onClick:()=>{d(D=>{const x=new Set(D);return x.has(String(m))?x.delete(String(m)):x.add(String(m)),x})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:g("div",{className:"flex items-center gap-1.5 flex-1",children:[g(st,{name:"icon-chevron-right",size:12,className:L("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":v})}),g("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[l(h.name),g($9,{count:h.count,isFunction:typeof h.currentValue=="function",showWarning:E.changes.length===0,forceFlash:!0})]})]})}),g("div",{className:L("react-scan-expandable",{"react-scan-expanded":v}),children:g("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:g("div",{className:"flex flex-col gap-0.5",children:y||T?g(Z9,{currError:T,prevError:y}):E.changes.length>0?g(B9,{change:h,diff:E,expandedFns:o,renderName:l,setExpandedFns:s,title:t}):g(H9,{currValue:S,entryKey:m,expandedFns:o,prevValue:w,setExpandedFns:s})})})})]},m)})})]})}),Z9=({prevError:t,currError:a})=>g(qe,{children:[t&&g("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:t}),a&&g("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:a})]}),B9=({diff:t,title:a,renderName:l,change:o,expandedFns:s,setExpandedFns:c})=>t.changes.map((d,f)=>{const{value:m,error:h}=Lc(d.prevValue),{value:v,error:w}=Lc(d.currentValue),y=typeof m=="function"||typeof v=="function";let S;return a==="Props"&&(S=d.path.length>0?`${l(String(o.name))}.${En(d.path)}`:void 0),a==="State"&&d.path.length>0&&(S=`state.${En(d.path)}`),S||(S=En(d.path)),g("div",{className:L("flex flex-col gap-y-1",f<t.changes.length-1&&"mb-4"),children:[S&&g("div",{className:"text-[#666] text-[10px]",children:S}),g("button",{type:"button",className:L("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",y&&"cursor-pointer"),onClick:y?()=>{const T=`${En(d.path)}-prev`;c(E=>{const D=new Set(E);return D.has(T)?D.delete(T):D.add(T),D})}:void 0,children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),g("span",{className:"flex-1 whitespace-nowrap font-mono",children:h?g("span",{className:"italic text-[#f87171]",children:h}):y?g("div",{className:"flex gap-1 items-start flex-col",children:[g("div",{className:"flex gap-1 items-start w-full",children:[g("span",{className:"flex-1 max-h-40",children:Gp(m,s.has(`${En(d.path)}-prev`))}),typeof m=="function"&&g(Oc,{text:m.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:T})=>g(qe,{children:T})})]}),m?.toString()===v?.toString()&&g("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):g(qc,{value:m,expanded:s.has(`${En(d.path)}-prev`),onToggle:()=>{const T=`${En(d.path)}-prev`;c(E=>{const D=new Set(E);return D.has(T)?D.delete(T):D.add(T),D})},isNegative:!0})})]}),g("button",{type:"button",className:L("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",y&&"cursor-pointer"),onClick:y?()=>{const T=`${En(d.path)}-current`;c(E=>{const D=new Set(E);return D.has(T)?D.delete(T):D.add(T),D})}:void 0,children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),g("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:w?g("span",{className:"italic text-[#4ade80]",children:w}):y?g("div",{className:"flex gap-1 items-start flex-col",children:[g("div",{className:"flex gap-1 items-start w-full",children:[g("span",{className:"flex-1",children:Gp(v,s.has(`${En(d.path)}-current`))}),typeof v=="function"&&g(Oc,{text:v.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:T})=>g(qe,{children:T})})]}),m?.toString()===v?.toString()&&g("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):g(qc,{value:v,expanded:s.has(`${En(d.path)}-current`),onToggle:()=>{const T=`${En(d.path)}-current`;c(E=>{const D=new Set(E);return D.has(T)?D.delete(T):D.add(T),D})},isNegative:!1})})]})]},`${S}-${o.name}-${f}`)}),H9=({prevValue:t,currValue:a,entryKey:l,expandedFns:o,setExpandedFns:s})=>g(qe,{children:[g("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),g("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:g(qc,{value:t,expanded:o.has(`${String(l)}-prev`),onToggle:()=>{const c=`${String(l)}-prev`;s(d=>{const f=new Set(d);return f.has(c)?f.delete(c):f.add(c),f})},isNegative:!0})})]}),g("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),g("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:g(qc,{value:a,expanded:o.has(`${String(l)}-current`),onToggle:()=>{const c=`${String(l)}-current`;s(d=>{const f=new Set(d);return f.has(c)?f.delete(c):f.add(c),f})},isNegative:!1})})]}),typeof a=="object"&&a!==null&&g("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[g(st,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),g("span",{children:"Reference changed but objects are structurally the same"})]})]}),$9=({count:t,forceFlash:a,isFunction:l,showWarning:o})=>{const s=we(!0),c=we(null),d=we(t);return Ce(()=>{const f=c.current;!f||d.current===t||(f.classList.remove("count-flash"),f.offsetWidth,f.classList.add("count-flash"),d.current=t)},[t]),Ce(()=>{if(s.current){s.current=!1;return}if(a){let f=setTimeout(()=>{c.current?.classList.add("count-flash-white"),f=setTimeout(()=>{c.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(f)}}},[a]),g("div",{ref:c,className:"count-badge",children:[o&&g(st,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),l&&g(st,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",t]})},tr={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{tr.lastRendered.clear(),tr.expandedPaths.clear(),y9.cleanupAll(),eT(),My.reset()}},Ny=class extends xn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),tr.cleanup()}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){return this.state.hasError?g("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[g("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[g(st,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),g("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),g("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},F9=Ir(()=>L("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!ou.value&&"opacity-100 delay-300 pointer-events-auto")),G9=Mh(()=>{const t=we(null),a=l=>{if(!l)return;t.current=l;const{data:o,shouldUpdate:s}=nT(l);if(s){const c={timestamp:Date.now(),fiberInfo:K9(l),props:o.fiberProps,state:o.fiberState,context:o.fiberContext,stateNames:J9(l)};My.addUpdate(c,l)}};return Ci(()=>{const l=ce.inspectState.value;Di(()=>{if(l.kind!=="focused"||!l.focusedDomElement){t.current=null,tr.cleanup();return}l.kind==="focused"&&(ou.value=!1);const{parentCompositeFiber:o}=Ww(l.focusedDomElement,l.fiber);if(!o){ce.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}t.current?.type!==o.type&&(t.current=o,tr.cleanup(),a(o))})}),Ci(()=>{Eh.value,Di(()=>{const l=ce.inspectState.value;if(l.kind!=="focused"||!l.focusedDomElement){t.current=null,tr.cleanup();return}const{parentCompositeFiber:o}=Ww(l.focusedDomElement,l.fiber);if(!o){ce.inspectState.value={kind:"inspect-off"},Qe.value={view:"none"};return}a(o),l.focusedDomElement.isConnected||(t.current=null,tr.cleanup(),ce.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Ce(()=>()=>{tr.cleanup()},[]),g(Ny,{children:g("div",{className:F9,children:g("div",{className:"w-full h-full",children:g(R9,{})})})})}),P9=Mh(()=>ce.inspectState.value.kind!=="focused"?null:g(Ny,{children:[g(G9,{}),g(E9,{})]})),Ay=t=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const a=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!a?.renderers)return null;for(const[,l]of Array.from(a.renderers))try{const o=l.findFiberByHostInstance?.(t);if(o)return o}catch{}}if("_reactRootContainer"in t)return t._reactRootContainer?._internalRoot?.current?.child??null;for(const a in t)if(a.startsWith("__reactInternalInstance$")||a.startsWith("__reactFiber"))return t[a];return null},Dh=t=>{let a=t;for(;a;){if(a.stateNode instanceof Element)return a.stateNode;if(!a.child)break;a=a.child}for(;a;){if(a.stateNode instanceof Element)return a.stateNode;if(!a.return)break;a=a.return}return null},Ch=t=>{if(!t)return null;try{const a=Ay(t);if(!a)return null;const l=Vl(a);return l?l[0]:null}catch{return null}},Vl=t=>{let a=t,l=null;for(;a;){if(nu(a))return[a,l];_i(a)&&!l&&(l=a),a=a.return}return null},Yw=(t,a)=>!!ph(a,o=>o===t),I9=async t=>{const a=Ch(t);if(!a)return null;const l=Dh(a);if(!l)return null;const o=(await NS([l])).get(l);return o||null},jr=t=>{const a=Ch(t);if(!a)return{};if(!Dh(a))return{};const o=Vl(a);if(!o)return{};const[s]=o;return{parentCompositeFiber:s}},Ww=(t,a)=>{if(!t.isConnected)return{};let l=a??Ch(t);if(!l)return{};let o=l,s=null,c=null;for(;o;){if(!o.stateNode){o=o.return;continue}if(Ze.instrumentation?.fiberRoots.has(o.stateNode)){s=o,c=o.stateNode.current;break}o=o.return}if(!s||!c)return{};if(l=Yw(l,c)?l:l.alternate??l,!l)return{};if(!Dh(l))return{};const d=Vl(l)?.[0];return d?{parentCompositeFiber:Yw(d,c)?d:d.alternate??d}:{}},zy=t=>{const a=t.memoizedProps??{},l=t.alternate?.memoizedProps??{},o=[];for(const s in a){if(s==="children")continue;const c=a[s],d=l[s];or(c,d)||o.push({name:s,value:c,prevValue:d,type:1})}return o},Fp=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Zc=(t,a=!0)=>{if(t.stateNode&&"nodeType"in t.stateNode){const o=t.stateNode;return a&&o.tagName&&Fp.has(o.tagName.toLowerCase())?null:o}let l=t.child;for(;l;){const o=Zc(l,a);if(o)return o;l=l.sibling}return null},Y9=(t=document.body)=>{const a=[],l=s=>{if(!s)return null;const{parentCompositeFiber:c}=jr(s);return c&&Zc(c)===s?s:null},o=(s,c=0)=>{const d=l(s);if(d){const{parentCompositeFiber:f}=jr(d);if(!f)return;a.push({element:d,depth:c,name:Nt(f.type)??"Unknown",fiber:f})}for(const f of Array.from(s.children))o(f,d?c+1:c)};return o(t),a},Vw=t=>{try{if(t===null)return"null";if(t===void 0)return"undefined";if(Xl(t))return"Promise";if(typeof t=="function"){const a=t.toString();try{return a.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return a}}switch(!0){case t instanceof Date:return t.toISOString();case t instanceof RegExp:return t.toString();case t instanceof Error:return`${t.name}: ${t.message}`;case t instanceof Map:return JSON.stringify(Array.from(t.entries()),null,2);case t instanceof Set:return JSON.stringify(Array.from(t),null,2);case t instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(t.buffer)),null,2);case t instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(t)),null,2);case(ArrayBuffer.isView(t)&&"length"in t):return JSON.stringify(Array.from(t),null,2);case Array.isArray(t):return JSON.stringify(t,null,2);case typeof t=="object":return JSON.stringify(t,null,2);default:return String(t)}}catch{return String(t)}},W9=(t,a)=>{try{return typeof t!="function"||typeof a!="function"?!1:t.toString()===a.toString()}catch{return!1}},Uy=(t,a,l=[],o=new WeakSet)=>{if(t===a)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof t=="function"&&typeof a=="function"){const h=W9(t,a);return{type:"primitive",changes:[{path:l,prevValue:t,currentValue:a,sameFunction:h}],hasDeepChanges:!h}}if(t===null||a===null||t===void 0||a===void 0||typeof t!="object"||typeof a!="object")return{type:"primitive",changes:[{path:l,prevValue:t,currentValue:a}],hasDeepChanges:!0};if(o.has(t)||o.has(a))return{type:"object",changes:[{path:l,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};o.add(t),o.add(a);const s=t,c=a,d=new Set([...Object.keys(s),...Object.keys(c)]),f=[];let m=!1;for(const h of d){const v=s[h],w=c[h];if(v!==w)if(typeof v=="object"&&typeof w=="object"&&v!==null&&w!==null){const y=Uy(v,w,[...l,h],o);f.push(...y.changes),y.hasDeepChanges&&(m=!0)}else f.push({path:[...l,h],prevValue:v,currentValue:w}),m=!0}return{type:"object",changes:f,hasDeepChanges:m}},En=t=>t.length===0?"":t.reduce((a,l,o)=>/^\d+$/.test(l)?`${a}[${l}]`:o===0?l:`${a}.${l}`,"");function V9(t){const a=t.replace(/\s+/g," ").trim(),l=[];let o="";for(let x=0;x<a.length;x++){const N=a[x];if(N==="="&&a[x+1]===">"){o.trim()&&l.push(o.trim()),l.push("=>"),o="",x++;continue}/[(){}[\];,<>:\?!]/.test(N)?(o.trim()&&l.push(o.trim()),l.push(N),o=""):/\s/.test(N)?(o.trim()&&l.push(o.trim()),o=""):o+=N}o.trim()&&l.push(o.trim());const s=[];for(let x=0;x<l.length;x++){const N=l[x],R=l[x+1];N==="("&&R===")"||N==="["&&R==="]"||N==="{"&&R==="}"||N==="<"&&R===">"?(s.push(N+R),x++):s.push(N)}const c=new Set,d=new Set;function f(x,N,R){let H=0;for(let q=R;q<s.length;q++){const V=s[q];if(V===x)H++;else if(V===N&&(H--,H===0))return q}return-1}for(let x=0;x<s.length;x++)if(s[x]==="("){const R=f("(",")",x);if(R!==-1&&s[R+1]==="=>")for(let H=x;H<=R;H++)c.add(H)}for(let x=1;x<s.length;x++){const N=s[x-1],R=s[x];if(/^[a-zA-Z0-9_$]+$/.test(N)&&R==="<"){const H=f("<",">",x);if(H!==-1)for(let q=x;q<=H;q++)d.add(q)}}let m=0;const h="  ",v=[];let w="";function y(){w.trim()&&v.push(w.replace(/\s+$/,"")),w=""}function S(){y(),w=h.repeat(m)}const T=[];function E(){return T.length?T[T.length-1]:null}function D(x,N=!1){w.trim()?N||/^[),;:\].}>]$/.test(x)?w+=x:w+=` ${x}`:w+=x}for(let x=0;x<s.length;x++){const N=s[x],R=s[x+1]||"";if(["(","{","[","<"].includes(N)){if(D(N),T.push(N),N==="{")m++,S();else if((N==="("||N==="["||N==="<")&&!(c.has(x)&&N==="("||d.has(x)&&N==="<")){const H={"(":")","[":"]","<":">"}[N];R!==H&&R!=="()"&&R!=="[]"&&R!=="<>"&&(m++,S())}}else if([")","}","]",">"].includes(N)){const H=E();N===")"&&H==="("||N==="]"&&H==="["||N===">"&&H==="<"?!(c.has(x)&&N===")")&&!(d.has(x)&&N===">")&&(m=Math.max(m-1,0),S()):N==="}"&&H==="{"&&(m=Math.max(m-1,0),S()),T.pop(),D(N),N==="}"&&S()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(N))D(N);else if(N==="=>")D(N);else if(N===";")D(N,!0),S();else if(N===","){D(N,!0);const H=E();!(c.has(x)&&H==="(")&&!(d.has(x)&&H==="<")&&H&&["{","[","(","<"].includes(H)&&S()}else D(N)}return y(),v.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Gp=(t,a=!1)=>{try{const l=t.toString(),o=l.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!o)return"ƒ";const c=(o[1]||o[2]||"").replace(/\s+/g,"");return a?V9(l):`ƒ (${c}) => ...`}catch{return"ƒ"}},Bc=t=>{if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return`"${t.length>150?`${t.slice(0,20)}...`:t}"`;if(typeof t=="number"||typeof t=="boolean")return String(t);if(typeof t=="function")return Gp(t);if(Array.isArray(t))return`Array(${t.length})`;if(t instanceof Map)return`Map(${t.size})`;if(t instanceof Set)return`Set(${t.size})`;if(t instanceof Date)return t.toISOString();if(t instanceof RegExp)return t.toString();if(t instanceof Error)return`${t.name}: ${t.message}`;if(typeof t=="object"){const a=Object.keys(t);return`{${a.length>2?`${a.slice(0,2).join(", ")}, ...`:a.join(", ")}}`}return String(t)},X9=t=>{if(t==null)return{value:t};if(typeof t=="function")return{value:t};if(typeof t!="object")return{value:t};if(t instanceof Promise)return{value:"Promise"};try{const a=Object.getPrototypeOf(t);return a===Promise.prototype||a?.constructor?.name==="Promise"?{value:"Promise"}:{value:t}}catch{return{value:null,error:"Error accessing value"}}},Xl=t=>!!t&&(t instanceof Promise||typeof t=="object"&&"then"in t),K9=t=>{const a=zr(t);return{displayName:Nt(t)||"Unknown",type:t.type,key:t.key,id:t.index,selfTime:a?.selfTime??null,totalTime:a?.totalTime??null}},Nh=new Map,jy=new Map,Ah=new Map,Pp=null,Q9=/\[(?<name>\w+),\s*set\w+\]/g,J9=t=>{const a=t.type?.toString?.()||"";return a?Array.from(a.matchAll(Q9),l=>l.groups?.name??""):[]},eT=()=>{Nh.clear(),jy.clear(),Ah.clear(),Pp=null},tT=t=>{const a=t.type!==Pp;return Pp=t.type,a},tp=(t,a,l,o)=>{const s=t.get(a),c=t===Nh||t===Ah,d=!or(l,o);if(!s)return t.set(a,{count:d&&c?1:0,currentValue:l,previousValue:o,lastUpdated:Date.now()}),{hasChanged:d,count:d&&c?1:c?0:1};if(!or(s.currentValue,l)){const f=s.count+1;return t.set(a,{count:f,currentValue:l,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:f}}return{hasChanged:!1,count:s.count}},Xw=t=>{if(!t)return{};if(t.tag===Jc||t.tag===eu||t.tag===Bi||t.tag===Zi){let a=t.memoizedState;const l={};let o=0;for(;a;)a.queue&&a.memoizedState!==void 0&&(l[o]=a.memoizedState),a=a.next,o++;return l}return t.tag===Fr?t.memoizedState||{}:{}},zh=t=>{const a=t.memoizedProps||{},l=t.alternate?.memoizedProps||{},o={},s={},c=Object.keys(a);for(const f of c)f in a&&(o[f]=a[f],s[f]=l[f]);const d=zy(t).map(f=>({name:f.name,value:f.value,prevValue:f.prevValue}));return{current:o,prev:s,changes:d}},Uh=t=>{const a=Xw(t),l=t.alternate?Xw(t.alternate):{},o=[];for(const[s,c]of Object.entries(a)){const d=t.tag===Fr?s:Number(s);t.alternate&&!or(l[s],c)&&o.push({name:d,value:c,prevValue:l[s]})}return{current:a,prev:l,changes:o}},jh=t=>{const a=Qw(t),l=t.alternate?Qw(t.alternate):new Map,o={},s={},c=[],d=new Set;for(const[f,m]of a){const h=m.displayName,v=f;if(d.has(v))continue;d.add(v),o[h]=m.value;const w=l.get(f);w&&(s[h]=w.value,or(w.value,m.value)||c.push({name:h,value:m.value,prevValue:w.value,contextType:f}))}return{current:o,prev:s,changes:c}},nT=t=>{const a=()=>({current:[],changes:new Set,changesCounts:new Map});if(!t)return{data:{fiberProps:a(),fiberState:a(),fiberContext:a()},shouldUpdate:!1};let l=!1;const o=tT(t),s=a();if(t.memoizedProps){const{current:w,changes:y}=zh(t);for(const[S,T]of Object.entries(w))s.current.push({name:S,value:Xl(T)?{type:"promise",displayValue:"Promise"}:T});for(const S of y){const{hasChanged:T,count:E}=tp(Nh,S.name,S.value,S.prevValue);T&&(l=!0,s.changes.add(S.name),s.changesCounts.set(S.name,E))}}const c=a(),{current:d,changes:f}=Uh(t);for(const[w,y]of Object.entries(d)){const S=t.tag===Fr?w:Number(w);c.current.push({name:S,value:y})}for(const w of f){const{hasChanged:y,count:S}=tp(jy,w.name,w.value,w.prevValue);y&&(l=!0,c.changes.add(w.name),c.changesCounts.set(w.name,S))}const m=a(),{current:h,changes:v}=jh(t);for(const[w,y]of Object.entries(h))m.current.push({name:w,value:y});if(!o)for(const w of v){const{hasChanged:y,count:S}=tp(Ah,w.name,w.value,w.prevValue);y&&(l=!0,m.changes.add(w.name),m.changesCounts.set(w.name,S))}return!l&&!o&&(s.changes.clear(),c.changes.clear(),m.changes.clear()),{data:{fiberProps:s,fiberState:c,fiberContext:m},shouldUpdate:l||o}},Kw=new WeakMap,Qw=t=>{if(!t)return new Map;const a=Kw.get(t);if(a)return a;const l=new Map;let o=t;for(;o;){const s=o.dependencies;if(s?.firstContext){let c=s.firstContext;for(;c;){const d=c.memoizedValue,f=c.context?.displayName;if(l.has(d)||l.set(c.context,{value:d,displayName:f??"UnnamedContext",contextType:null}),c===c.next)break;c=c.next}}o=o.return}return Kw.set(t,l),l},Jw=t=>{const a=()=>({current:[],changes:new Set,changesCounts:new Map});if(!t)return{fiberProps:a(),fiberState:a(),fiberContext:a()};const l=a();if(t.memoizedProps){const{current:f,changes:m}=zh(t);for(const[h,v]of Object.entries(f))l.current.push({name:h,value:Xl(v)?{type:"promise",displayValue:"Promise"}:v});for(const h of m)l.changes.add(h.name),l.changesCounts.set(h.name,1)}const o=a();if(t.memoizedState){const{current:f,changes:m}=Uh(t);for(const[h,v]of Object.entries(f))o.current.push({name:h,value:Xl(v)?{type:"promise",displayValue:"Promise"}:v});for(const h of m)o.changes.add(h.name),o.changesCounts.set(h.name,1)}const s=a(),{current:c,changes:d}=jh(t);for(const[f,m]of Object.entries(c))s.current.push({name:f,value:Xl(m)?{type:"promise",displayValue:"Promise"}:m});for(const f of d)s.changes.add(f.name),s.changesCounts.set(f.name,1);return{fiberProps:l,fiberState:o,fiberContext:s}},Ip=0,e2=performance.now(),np=0,t2=!1,Ry=()=>{np++;const t=performance.now();t-e2>=1e3&&(Ip=np,np=0,e2=t),requestAnimationFrame(Ry)},Oy=()=>(t2||(t2=!0,Ry(),Ip=60),Ip),aT=t=>{if(!t)return[];const a=[];if(t.tag===Jc||t.tag===eu||t.tag===Bi||t.tag===Zi){let l=t.memoizedState,o=t.alternate?.memoizedState,s=0;for(;l;){if(l.queue&&l.memoizedState!==void 0){const c={type:2,name:s.toString(),value:l.memoizedState,prevValue:o?.memoizedState};or(c.prevValue,c.value)||a.push(c)}l=l.next,o=o?.next,s++}return a}if(t.tag===Fr){const l={type:3,name:"state",value:t.memoizedState,prevValue:t.alternate?.memoizedState};return or(l.prevValue,l.value)||a.push(l),a}return a},ap=0,n2=new WeakMap,rT=t=>{const a=n2.get(t);return a||(ap++,n2.set(t,ap),ap)};function lT(t,a){if(!t||!a)return;const l=t.memoizedValue,o={type:4,name:t.context.displayName??"Context.Provider",value:l,contextType:rT(t.context)};this.push(o)}var oT=t=>{const a=[];return H7(t,lT.bind(a)),a},qy=new Map,a2=!1,rp=()=>Array.from(qy.values()),iT=16,Yp=new WeakMap;function Ly(t){return String(lr(t))}function Zy(t){const a=Ly(t),l=Yp.get(Gr(t));if(l)return l.get(a)}function sT(t,a){const l=Gr(t.type),o=Ly(t);let s=Yp.get(l);s||(s=new Map,Yp.set(l,s)),s.set(o,a)}var cT=(t,a,l,o,s)=>{const c=Date.now(),d=Zy(t);if((o||s)&&(!d||c-(d.lastRenderTimestamp||0)>iT)){const f=d||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:c};f.renderCount=(f.renderCount||0)+1,f.selfTime=a||0,f.totalTime=l||0,f.lastRenderTimestamp=c,sT(t,{...f})}},uT=(t,a)=>{const l={isPaused:bt(!Ze.options.value.enabled),fiberRoots:new WeakSet};return qy.set(t,{key:t,config:a,instrumentation:l}),a2||(a2=!0,V7({name:"react-scan",onActive:a.onActive,onCommitFiberRoot(o,s){l.fiberRoots.add(s);const c=rp();for(const d of c)d.config.onCommitStart();W7(s.current,(d,f)=>{const m=Gr(d.type);if(!m)return null;const h=rp(),v=[];for(let N=0,R=h.length;N<R;N++)h[N].config.isValidFiber(d)&&v.push(N);if(!v.length)return null;const w=[];if(h.some(N=>N.config.trackChanges)){const N=zh(d).changes,R=Uh(d).changes,H=jh(d).changes;w.push.apply(null,N.map(q=>({type:1,name:q.name,value:q.value})));for(const q of R)d.tag===Fr?w.push({type:3,name:q.name.toString(),value:q.value}):w.push({type:2,name:q.name.toString(),value:q.value});w.push.apply(null,H.map(q=>({type:4,name:q.name,value:q.value,contextType:Number(q.contextType)})))}const{selfTime:y,totalTime:S}=zr(d),T=Oy(),E={phase:AS[f],componentName:Nt(m),count:1,changes:w,time:y,forget:ki(d),unnecessary:null,didCommit:dh(d),fps:T},D=w.length>0,x=$7(d).length>0;f==="update"&&cT(d,y,S,D,x);for(let N=0,R=v.length;N<R;N++){const H=v[N];h[H].config.onRender(d,[E])}});for(const d of c)d.config.onCommitFinish()},onPostCommitFiberRoot(){const o=rp();for(const s of o)s.config.onPostCommitFiberRoot()}})),l},dT=t=>{const a=new Map;for(let l=0,o=t.length;l<o;l++){const s=t[l];if(!s.componentName)continue;const c=a.get(s.componentName)??[],d=CS([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((h,v)=>h|v.type,0),unstable:s.changes.some(h=>h.unstable)},phase:s.phase,computedCurrent:null}]);if(!d)continue;let f=null,m=null;if(s.changes)for(let h=0,v=s.changes.length;h<v;h++){const{name:w,prevValue:y,nextValue:S,unstable:T,type:E}=s.changes[h];E===1?(f??={},m??={},f[`${T?"⚠️":""}${w} (prev)`]=y,m[`${T?"⚠️":""}${w} (next)`]=S):c.push({prev:y,next:S,type:E===4?"context":"state",unstable:T??!1})}f&&m&&c.push({prev:f,next:m,type:"props",unstable:!1}),a.set(d,c)}for(const[l,o]of Array.from(a.entries())){console.group(`%c${l}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:c,next:d,unstable:f}of o)console.log(`${s}:`,f?"⚠️":"",c,"!==",d);console.groupEnd()}},fT=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},r2=7,pT="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",hT=.1,fc=(t,a)=>Math.floor(t+(a-t)*hT),mT=4,Hc=40,lp=45,op="115,97,230";function gT(t,a){return a[0]-t[0]}function wT(t){return[...t.entries()].sort(gT)}function l2([t,a]){let l=`${a.slice(0,mT).join(", ")} ×${t}`;return l.length>Hc&&(l=`${l.slice(0,Hc)}…`),l}var o2=t=>{const a=new Map;for(const{name:c,count:d}of t)a.set(c,(a.get(c)||0)+d);const l=new Map;for(const[c,d]of a){const f=l.get(d);f?f.push(c):l.set(d,[c])}const o=wT(l);let s=l2(o[0]);for(let c=1,d=o.length;c<d;c++)s+=", "+l2(o[c]);return s.length>Hc?`${s.slice(0,Hc)}…`:s},i2=t=>{let a=0;for(const l of t)a+=l.width*l.height;return a},vT=(t,a)=>{for(const{id:l,name:o,count:s,x:c,y:d,width:f,height:m,didCommit:h}of a){const v={id:l,name:o,count:s,x:c,y:d,width:f,height:m,frame:0,targetX:c,targetY:d,targetWidth:f,targetHeight:m,didCommit:h},w=String(v.id),y=t.get(w);y?(y.count++,y.frame=0,y.targetX=c,y.targetY=d,y.targetWidth=f,y.targetHeight=m,y.didCommit=h):t.set(w,v)}},yT=(t,a,l)=>{for(const o of t.values()){const s=o.x-a,c=o.y-l;o.targetX=s,o.targetY=c}},bT=(t,a)=>{const l=t.getContext("2d",{alpha:!0});return l&&l.scale(a,a),l},xT=(t,a,l,o)=>{t.clearRect(0,0,a.width/l,a.height/l);const s=new Map,c=new Map;for(const m of o.values()){const{x:h,y:v,width:w,height:y,targetX:S,targetY:T,targetWidth:E,targetHeight:D,frame:x}=m;S!==h&&(m.x=fc(h,S)),T!==v&&(m.y=fc(v,T)),E!==w&&(m.width=fc(w,E)),D!==y&&(m.height=fc(y,D));const N=`${S??h},${T??v}`,R=`${N},${E??w},${D??y}`,H=s.get(N);H?H.push(m):s.set(N,[m]);const q=1-x/lp;m.frame++;const V=c.get(R)||{x:h,y:v,width:w,height:y,alpha:q};q>V.alpha&&(V.alpha=q),c.set(R,V)}for(const{x:m,y:h,width:v,height:w,alpha:y}of c.values())t.strokeStyle=`rgba(${op},${y})`,t.lineWidth=1,t.beginPath(),t.rect(m,h,v,w),t.stroke(),t.fillStyle=`rgba(${op},${y*.1})`,t.fill();t.font=`11px ${pT}`;const d=new Map;t.textRendering="optimizeSpeed";for(const m of s.values()){const h=m[0],{x:v,y:w,frame:y}=h,S=1-y/lp,T=o2(m),{width:E}=t.measureText(T);if(d.set(`${v},${w},${E},${T}`,{text:T,width:E,height:11,alpha:S,x:v,y:w,outlines:m}),y>lp)for(const x of m)o.delete(String(x.id))}const f=Array.from(d.entries()).sort(([m,h],[v,w])=>i2(w.outlines)-i2(h.outlines));for(const[m,h]of f)if(d.has(m))for(const[v,w]of d.entries()){if(m===v)continue;const{x:y,y:S,width:T,height:E}=h,{x:D,y:x,width:N,height:R}=w;y+T>D&&D+N>y&&S+E>x&&x+R>S&&(h.text=o2(h.outlines.concat(w.outlines)),h.width=t.measureText(h.text).width,d.delete(v))}for(const m of d.values()){const{x:h,y:v,alpha:w,width:y,height:S,text:T}=m;let E=v-S-4;E<0&&(E=0),t.fillStyle=`rgba(${op},${w})`,t.fillRect(h,E,y+4,S+4),t.fillStyle=`rgba(255,255,255,${w})`,t.fillText(T,h+2,E+S)}return o.size>0},ST='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',Fn=null,$c=null,Rr=null,bn=1,Fc=null,Rh=new Map,yi=new Map,Pl=new Set,TT=t=>{if(!nu(t))return;const a=typeof t.type=="string"?t.type:Nt(t);if(!a)return;const l=yi.get(t),o=F7(t),s=dh(t);l?l.count++:(yi.set(t,{name:a,count:1,elements:o.map(c=>c.stateNode),didCommit:s?1:0}),Pl.add(t))},_T=t=>{const a=t[0];if(t.length===1)return a;let l,o,s,c;for(let d=0,f=t.length;d<f;d++){const m=t[d];l=l==null?m.x:Math.min(l,m.x),o=o==null?m.y:Math.min(o,m.y),s=s==null?m.x+m.width:Math.max(s,m.x+m.width),c=c==null?m.y+m.height:Math.max(c,m.y+m.height)}return l==null||o==null||s==null||c==null?t[0]:new DOMRect(l,o,s-l,c-o)};function kT(t,a){const l=[];for(const o of t){const s=o.target;this.seenElements.has(s)||(this.seenElements.add(s),l.push(o))}l.length>0&&this.resolveNext&&(this.resolveNext(l),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(a.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var By=async function*(t){const a={uniqueElements:new Set(t),seenElements:new Set,resolveNext:null,done:!1},l=new IntersectionObserver(kT.bind(a));for(const o of a.uniqueElements)l.observe(o);for(;!a.done;){const o=await new Promise(s=>{a.resolveNext=s});o.length>0&&(yield o)}},MT=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,ET=async()=>{const t=[];for(const l of Pl){const o=yi.get(l);if(o)for(let s=0;s<o.elements.length;s++)o.elements[s]instanceof Element&&t.push(o.elements[s])}const a=new Map;for await(const l of By(t)){for(const d of l){const f=d.target,m=d.intersectionRect;d.isIntersecting&&m.width&&m.height&&a.set(f,m)}const o=[],s=[],c=[];for(const d of Pl){const f=yi.get(d);if(!f)continue;const m=[];for(let h=0;h<f.elements.length;h++){const v=f.elements[h],w=a.get(v);w&&m.push(w)}m.length&&(o.push(f),s.push(_T(m)),c.push(lr(d)))}if(o.length>0){const d=new MT(o.length*r2*4),f=new Float32Array(d),m=new Array(o.length);let h;for(let v=0,w=o.length;v<w;v++){const y=o[v],S=c[v],{x:T,y:E,width:D,height:x}=s[v],{count:N,name:R,didCommit:H}=y;if(Fn){const q=v*r2;f[q]=S,f[q+1]=N,f[q+2]=T,f[q+3]=E,f[q+4]=D,f[q+5]=x,f[q+6]=H,m[v]=R}else h||=new Array(o.length),h[v]={id:S,name:R,count:N,x:T,y:E,width:D,height:x,didCommit:H}}Fn?Fn.postMessage({type:"draw-outlines",data:d,names:m}):$c&&Rr&&h&&(vT(Rh,h),Fc||(Fc=requestAnimationFrame(Oh)))}}for(const l of Pl)yi.delete(l),Pl.delete(l)},Oh=()=>{if(!Rr||!$c)return;xT(Rr,$c,bn,Rh)?Fc=requestAnimationFrame(Oh):Fc=null},DT=typeof OffscreenCanvas<"u"&&typeof Worker<"u",s2=()=>Math.min(window.devicePixelRatio||1,2),CT=()=>{NT();const t=document.createElement("div");t.setAttribute("data-react-scan","true");const a=t.attachShadow({mode:"open"}),l=document.createElement("canvas");if(l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.pointerEvents="none",l.style.zIndex="2147483646",l.setAttribute("aria-hidden","true"),a.appendChild(l),!l)return null;bn=s2(),$c=l;const{innerWidth:o,innerHeight:s}=window;l.style.width=`${o}px`,l.style.height=`${s}px`;const c=o*bn,d=s*bn;if(l.width=c,l.height=d,DT&&!window.__REACT_SCAN_EXTENSION__)try{Fn=new Worker(URL.createObjectURL(new Blob([ST],{type:"application/javascript"})));const w=l.transferControlToOffscreen();Fn?.postMessage({type:"init",canvas:w,width:l.width,height:l.height,dpr:bn},[w])}catch(w){console.warn("Failed to initialize OffscreenCanvas worker:",w)}Fn||(Rr=bT(l,bn));let f=!1;window.addEventListener("resize",()=>{f||(f=!0,setTimeout(()=>{const w=window.innerWidth,y=window.innerHeight;bn=s2(),l.style.width=`${w}px`,l.style.height=`${y}px`,Fn?Fn.postMessage({type:"resize",width:w,height:y,dpr:bn}):(l.width=w*bn,l.height=y*bn,Rr&&(Rr.resetTransform(),Rr.scale(bn,bn)),Oh()),f=!1}))});let m=window.scrollX,h=window.scrollY,v=!1;return window.addEventListener("scroll",()=>{v||(v=!0,setTimeout(()=>{const{scrollX:w,scrollY:y}=window,S=w-m,T=y-h;m=w,h=y,Fn?Fn.postMessage({type:"scroll",deltaX:S,deltaY:T}):requestAnimationFrame(yT.bind(null,Rh,S,T)),v=!1},16*2))}),setInterval(()=>{Pl.size&&requestAnimationFrame(ET)},16*2),a.appendChild(l),t},c2=()=>globalThis.__REACT_SCAN_STOP__,NT=()=>{const t=document.querySelector("[data-react-scan]");t&&t.remove()},AT=t=>{if(nu(t)&&Ze.options.value.showToolbar!==!1&&ce.inspectState.value.kind==="focused"){const a=t,{selfTime:l}=zr(t),o=Nt(t.type),s=lr(a),c=ce.reportData.get(s),d=c?.count??0,f=c?.time??0,m=[],h=ce.changesListeners.get(lr(t));if(h?.length){const w=zy(t).map(E=>({type:1,name:E.name,value:E.value,prevValue:E.prevValue,unstable:!1})),y=aT(t),T=oT(t).map(E=>({name:E.name,type:4,value:E.value,contextType:E.contextType}));h.forEach(E=>{E({propsChanges:w,stateChanges:y,contextChanges:T})})}const v={count:d+1,time:f+l||0,renders:[],displayName:o,type:Gr(t.type)||null,changes:m};ce.reportData.set(s,v),Wp=!0}},Wp=!1,u2,zT=()=>{clearInterval(u2),u2=setInterval(()=>{Wp&&(ce.lastReportTime.value=Date.now(),Wp=!1)},50)},UT=t=>!kk.has(t.memoizedProps),jT=t=>{if(c2())return;let a,l=!1;const o=()=>{l||(a&&cancelAnimationFrame(a),a=requestAnimationFrame(()=>{l=!0;const c=CT();c&&document.documentElement.appendChild(c),t()}))},s=uT("react-scan-devtools-0.1.0",{onCommitStart:()=>{Ze.options.value.onCommitStart?.()},onActive:()=>{c2()||(o(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Ze}),zT(),fT())},onError:()=>{},isValidFiber:UT,onRender:(c,d)=>{nu(c)&&ce.interactionListeningForRenders?.(c,d);const f=Ze.instrumentation?.isPaused.value,m=ce.inspectState.value.kind==="inspect-off"||ce.inspectState.value.kind==="uninitialized";f&&m||(f||TT(c),Ze.options.value.log&&dT(d),ce.inspectState.value.kind==="focused"&&(Eh.value=Date.now()),m||AT(c),Ze.options.value.onRender?.(c,d))},onCommitFinish:()=>{o(),Ze.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){o()},trackChanges:!1});Ze.instrumentation=s},RT=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,OT=(t,a,l=a)=>{const[o,s]=Ue(t);return Ce(()=>{if(t===o)return;const d=setTimeout(()=>s(t),t?a:l);return()=>clearTimeout(d)},[t,a,l]),o},qT=Ir(()=>L("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",ou.value&&"-translate-y-[200%]")),LT=()=>{const t=we(null),a=we(null),[l,o]=Ue(null);Ci(()=>{const c=ce.inspectState.value;c.kind==="focused"&&o(c.fiber)}),Ci(()=>{const c=Pt.value;Di(()=>{if(ce.inspectState.value.kind!=="focused"||!t.current||!a.current)return;const{totalUpdates:d,currentIndex:f,updates:m,isVisible:h,windowOffset:v}=c,w=Math.max(0,d-1),y=h?`#${v+f} Re-render`:w>0?`×${w}`:"";let S;if(w>0&&f>=0&&f<m.length){const T=m[f]?.fiberInfo?.selfTime;S=T>0?T<.1-Number.EPSILON?"< 0.1ms":`${Number(T.toFixed(1))}ms`:void 0}t.current.dataset.text=y?` • ${y}`:"",a.current.dataset.text=S?` • ${S}`:""})});const s=Un(()=>{if(!l)return null;const{name:c,wrappers:d,wrapperTypes:f}=Ni(l),m=d.length?`${d.join("(")}(${c})${")".repeat(d.length)}`:c??"",h=f[0];return g("span",{title:m,className:"flex items-center gap-x-1",children:[c??"Unknown",g("span",{title:h?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!h&&g(qe,{children:[g("span",{className:L("rounded py-[1px] px-1","truncate",h.compiler&&"bg-purple-800 text-neutral-400",!h.compiler&&"bg-neutral-700 text-neutral-300",h.type==="memo"&&"bg-[#5f3f9a] text-white"),children:h.type},h.type),h.compiler&&g("span",{className:"text-yellow-300",children:"✨"})]})}),f.length>1&&g("span",{className:"text-[10px] text-neutral-400",children:["×",f.length-1]})]})},[l]);return g("div",{className:qT,children:[s,g("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[g("span",{ref:t,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),g("span",{ref:a,className:"with-data-text !overflow-visible"})]})]})},ZT=()=>{const t=OT(ce.inspectState.value.kind==="focused",150,0),a=()=>{Qe.value={view:"none"},ce.inspectState.value={kind:"inspect-off"}};if(Qe.value.view!=="notifications")return g("div",{className:"react-scan-header",children:[g("div",{className:"relative flex-1 h-full",children:g("div",{className:L("react-scan-header-item is-visible",!t&&"!duration-0"),children:g(LT,{})})}),g("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:a,children:g(st,{name:"icon-close"})})]})},BT=({className:t,...a})=>g("div",{className:L("react-scan-toggle",t),children:[g("input",{type:"checkbox",...a}),g("div",{})]}),HT=({fps:t})=>{const a=l=>l<30?"#EF4444":l<50?"#F59E0B":"rgb(214,132,245)";return g("div",{className:L("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[g("div",{style:{color:a(t)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:t}),g("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},$T=()=>{const[t,a]=Ue(null);return Ce(()=>{const l=setInterval(()=>{a(Oy())},200);return()=>clearInterval(l)},[]),g("div",{className:L("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:t===null?g(qe,{children:"️"}):g(HT,{fps:t})})},Cn=()=>Pn?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",An=t=>t(),_t=class Hy extends Array{constructor(a=25){super(),this.capacity=a}push(...a){const l=super.push(...a);for(;this.length>this.capacity;)this.shift();return l}static fromArray(a,l){const o=new Hy(l);return o.push(...a),o}},FT=class{constructor(t){this.subscribers=new Set,this.currentValue=t}subscribe(t){return this.subscribers.add(t),t(this.currentValue),()=>{this.subscribers.delete(t)}}setState(t){this.currentValue=t,this.subscribers.forEach(a=>a(t))}getCurrentState(){return this.currentValue}},$y=150,d2=new FT(new _t($y)),$n=50,GT=class{constructor(){this.channels={}}publish(t,a,l=!0){const o=this.channels[a];if(!o){if(!l)return;this.channels[a]={callbacks:new _t($n),state:new _t($n)},this.channels[a].state.push(t);return}o.state.push(t),o.callbacks.forEach(s=>s(t))}getAvailableChannels(){return _t.fromArray(Object.keys(this.channels),$n)}subscribe(t,a,l=!1){const o=()=>(l||this.channels[t].state.forEach(c=>{a(c)}),()=>{const c=this.channels[t].callbacks.filter(d=>d!==a);this.channels[t].callbacks=_t.fromArray(c,$n)}),s=this.channels[t];return s?(s.callbacks.push(a),o()):(this.channels[t]={callbacks:new _t($n),state:new _t($n)},this.channels[t].callbacks.push(a),o())}updateChannelState(t,a,l=!0){const o=this.channels[t];if(!o){if(!l)return;const s=new _t($n),c={callbacks:new _t($n),state:s};this.channels[t]=c,c.state=a(s);return}o.state=a(o.state)}getChannelState(t){return this.channels[t].state??new _t($n)}},Gc=new GT,Fy={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},pi={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},PT=(t,a=Fy)=>{const l=[];return a.skipProviders&&l.push(...pi.providers),a.skipHocs&&l.push(...pi.hocs),a.skipContainers&&l.push(...pi.containers),a.skipUtilities&&l.push(...pi.utilities),a.skipBoundaries&&l.push(...pi.boundaries),!l.some(o=>o.test(t))},f2=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],IT=t=>{for(let c=0;c<f2.length;c++)if(f2[c].test(t))return!0;const a=!/[aeiou]/i.test(t),l=(t.match(/\d/g)?.length??0)>t.length/2,o=/^[a-z]+$/.test(t),s=/[$_]{2,}/.test(t);return Number(a)+Number(l)+Number(o)+Number(s)>=2},YT=(t,a=Fy)=>{if(!t)return[];if(!Nt(t.type))return[];const o=new Array;let s=t;for(;s.return;){const d=WT(s.type);d&&!IT(d)&&PT(d,a)&&d.toLowerCase()!==d&&o.push(d),s=s.return}const c=new Array(o.length);for(let d=0;d<o.length;d++)c[d]=o[o.length-d-1];return c},WT=t=>{const a=Nt(t);return a?a.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},VT=(t,a=()=>!0)=>{let l=t;for(;l;){const o=Nt(l.type);if(o&&a(o))return o;l=l.return}return null},p2,Vp="never-hidden",XT=()=>{p2?.();const t=()=>{document.hidden&&(Vp=Date.now())};document.addEventListener("visibilitychange",t),p2=()=>{document.removeEventListener("visibilitychange",t)}},KT=t=>["pointerup","click"].includes(t)?"pointer":(t.includes("key"),["keydown","keyup"].includes(t)?"keyboard":null),ip=null,QT=t=>{XT();const a=new Map,l=new Map,o=c=>{if(!c.interactionId)return;if(c.interactionId&&c.target&&!l.has(c.interactionId)&&l.set(c.interactionId,c.target),c.target){let f=c.target;for(;f;){if(f.id==="react-scan-toolbar-root"||f.id==="react-scan-root")return;f=f.parentElement}}const d=a.get(c.interactionId);if(d)c.duration>d.latency?(d.entries=[c],d.latency=c.duration):c.duration===d.latency&&c.startTime===d.entries[0].startTime&&d.entries.push(c);else{const f=KT(c.name);if(!f)return;const m={id:c.interactionId,latency:c.duration,entries:[c],target:c.target,type:f,startTime:c.startTime,endTime:Date.now(),processingStart:c.processingStart,processingEnd:c.processingEnd,duration:c.duration,inputDelay:c.processingStart-c.startTime,processingDuration:c.processingEnd-c.processingStart,presentationDelay:c.duration-(c.processingEnd-c.startTime),timestamp:Date.now(),timeSinceTabInactive:Vp==="never-hidden"?"never-hidden":Date.now()-Vp,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};a.set(m.id,m),ip||(ip=requestAnimationFrame(()=>{requestAnimationFrame(()=>{t(a.get(m.id)),ip=null})}))}},s=new PerformanceObserver(c=>{const d=c.getEntries();for(let f=0,m=d.length;f<m;f++){const h=d[f];o(h)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},JT=()=>QT(t=>{Gc.publish({kind:"entry-received",entry:t},"recording")}),Ec=25,ma=new _t(Ec),e_=(t,a)=>{let l=null;for(const o of a){if(o.type!==t.type)continue;if(l===null){l=o;continue}const s=(c,d)=>Math.abs(c.startDateTime)-(d.startTime+d.timeOrigin);s(o,t)<s(l,t)&&(l=o)}return l},t_=t=>Gc.subscribe("recording",l=>{const o=l.kind==="auto-complete-race"?ma.find(c=>c.interactionUUID===l.interactionUUID):e_(l.entry,ma);if(!o)return;const s=o.completeInteraction(l);t(s)}),n_=({onMicroTask:t,onRAF:a,onTimeout:l,abort:o})=>{queueMicrotask(()=>{o?.()!==!0&&t()&&requestAnimationFrame(()=>{o?.()!==!0&&a()&&setTimeout(()=>{o?.()!==!0&&l()},0)})})},a_=t=>{const a=Ay(t);if(!a)return;let l=a?Nt(a?.type):"N/A";return l||(l=VT(a,s=>s.length>2)??"N/A"),l?{componentPath:YT(a),childrenTree:{},componentName:l,elementFiber:a}:void 0},h2=(t,a)=>{let l=null;const o=m=>{switch(t){case"pointer":return m.phase==="start"?"pointerup":m.target instanceof HTMLInputElement||m.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return m.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:Cn(),stageStart:Date.now(),interactionType:t}},c=m=>{if(m.composedPath().some(E=>E instanceof Element&&E.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:Cn(),stageStart:Date.now(),interactionType:t}),s.current.kind!=="uninitialized-stage"))return;const v=performance.now();a?.onStart?.(s.current.interactionUUID);const w=a_(m.target);if(!w){a?.onError?.(s.current.interactionUUID);return}const y={},S=Gy(y);s.current={...s.current,interactionType:t,blockingTimeStart:Date.now(),childrenTree:w.childrenTree,componentName:w.componentName,componentPath:w.componentPath,fiberRenders:y,kind:"interaction-start",interactionStartDetail:v,stopListeningForRenders:S};const T=o({phase:"end",target:m.target});document.addEventListener(T,d,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(T,d)})};document.addEventListener(o({phase:"start"}),c,{capture:!0});const d=(m,h,v)=>{if(s.current.kind!=="interaction-start"&&h===l){if(t==="pointer"&&m.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:Cn(),stageStart:Date.now(),interactionType:t};return}a?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Cn(),stageStart:Date.now(),interactionType:t};return}l=h,n_({abort:v,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?(a?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Cn(),stageStart:Date.now(),interactionType:t},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(s.current.kind!=="raf-stage"){a?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Cn(),stageStart:Date.now(),interactionType:t};return}const w=Date.now(),y=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:w,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:Cn(),stageStart:w,interactionType:t};let S=!1;const T=D=>{S=!0;const x=D.kind==="auto-complete-race"?D.detailedTiming.commitEnd-D.detailedTiming.interactionStartDetail:D.entry.latency,N={detailedTiming:y,latency:x,completedAt:Date.now(),flushNeeded:!0};a?.onComplete?.(y.interactionUUID,N,D);const R=ma.filter(H=>H.interactionUUID!==y.interactionUUID);return ma=_t.fromArray(R,Ec),N},E={completeInteraction:T,endDateTime:Date.now(),startDateTime:y.blockingTimeStart,type:t,interactionUUID:y.interactionUUID};if(ma.push(E),r_())setTimeout(()=>{if(S)return;T({kind:"auto-complete-race",detailedTiming:y,interactionUUID:y.interactionUUID});const D=ma.filter(x=>x.interactionUUID!==y.interactionUUID);ma=_t.fromArray(D,Ec)},1e3);else{const D=ma.filter(x=>x.interactionUUID!==y.interactionUUID);ma=_t.fromArray(D,Ec),T({kind:"auto-complete-race",detailedTiming:y,interactionUUID:y.interactionUUID})}}})},f=m=>{const h=Cn();d(m,h,()=>h!==l)};return t==="keyboard"&&document.addEventListener("keypress",f),()=>{document.removeEventListener(o({phase:"start"}),c,{capture:!0}),document.removeEventListener("keypress",f)}},m2=t=>ph(t,a=>{if(_i(a))return!0})?.stateNode,r_=()=>"PerformanceEventTiming"in globalThis,Gy=t=>{const a=l=>{const o=Nt(l.type);if(!o)return;const s=t[o];if(!s){const v=new Set,w=l.return&&Vl(l.return),y=w&&Nt(w[0]);y&&v.add(y);const{selfTime:S,totalTime:T}=zr(l),E=Jw(l),D={current:[],changes:new Set,changesCounts:new Map},x={fiberProps:E.fiberProps||D,fiberState:E.fiberState||D,fiberContext:E.fiberContext||D};t[o]={renderCount:1,hasMemoCache:ki(l),wasFiberRenderMount:g2(l),parents:v,selfTime:S,totalTime:T,nodeInfo:[{element:m2(l),name:Nt(l.type)??"Unknown",selfTime:zr(l).selfTime}],changes:x};return}if(Vl(l)?.[0]?.type){const v=l.return&&Vl(l.return),w=v&&Nt(v[0]);w&&s.parents.add(w)}const{selfTime:d,totalTime:f}=zr(l),m=Jw(l);if(!m)return;const h={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||g2(l),s.hasMemoCache=s.hasMemoCache||ki(l),s.changes={fiberProps:sp(s.changes?.fiberProps||h,m.fiberProps||h),fiberState:sp(s.changes?.fiberState||h,m.fiberState||h),fiberContext:sp(s.changes?.fiberContext||h,m.fiberContext||h)},s.renderCount+=1,s.selfTime+=d,s.totalTime+=f,s.nodeInfo.push({element:m2(l),name:Nt(l.type)??"Unknown",selfTime:zr(l).selfTime})};return ce.interactionListeningForRenders=a,()=>{ce.interactionListeningForRenders===a&&(ce.interactionListeningForRenders=null)}},sp=(t,a)=>{const l={current:[...t.current],changes:new Set,changesCounts:new Map};for(const o of a.current)l.current.some(s=>s.name===o.name)||l.current.push(o);for(const o of a.changes)if(typeof o=="string"||typeof o=="number"){l.changes.add(o);const s=t.changesCounts.get(o)||0,c=a.changesCounts.get(o)||0;l.changesCounts.set(o,s+c)}return l},g2=t=>{if(!t.alternate)return!0;const a=t.alternate,l=a&&a.memoizedState!=null&&a.memoizedState.element!=null&&a.memoizedState.isDehydrated!==!0,o=t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0;return!l&&o},l_=t=>{let a;const l=new Set,o=(h,v)=>{const w=typeof h=="function"?h(a):h;if(!Object.is(w,a)){const y=a;a=v??(typeof w!="object"||w===null)?w:Object.assign({},a,w),l.forEach(S=>S(a,y))}},s=()=>a,f={setState:o,getState:s,getInitialState:()=>m,subscribe:(h,v)=>{let w,y;v?(w=h,y=v):y=h;let S=w?w(a):void 0;const T=(E,D)=>{if(w){const x=w(E),N=w(D);Object.is(S,x)||(S=x,y(x,N))}else y(E,D)};return l.add(T),()=>l.delete(T)}},m=a=t(o,s,f);return f},Py=t=>l_,pc=null;Py()(t=>({state:{events:[]},actions:{addEvent:a=>{t(l=>({state:{events:[...l.state.events,a]}}))},clear:()=>{t({state:{events:[]}})}}}));var cp=200,Ai=Py()((t,a)=>{const l=new Set;return{state:{events:new _t(cp)},actions:{addEvent:o=>{l.forEach(m=>m(o));const s=[...a().state.events,o],c=(m,h)=>{const v=s.find(w=>{if(w.kind!=="long-render"&&w.id!==m.id&&(m.data.startAt<=w.data.startAt&&m.data.endAt<=w.data.endAt&&m.data.endAt>=w.data.startAt||w.data.startAt<=m.data.startAt&&w.data.endAt>=m.data.startAt||m.data.startAt<=w.data.startAt&&m.data.endAt>=w.data.endAt))return!0});v&&h(v)},d=new Set;s.forEach(m=>{m.kind!=="interaction"&&c(m,()=>{d.add(m.id)})});const f=s.filter(m=>!d.has(m.id));t(()=>({state:{events:_t.fromArray(f,cp)}}))},addListener:o=>(l.add(o),()=>{l.delete(o)}),clear:()=>{t({state:{events:new _t(cp)}})}}}}),o_=()=>sS(Ai.subscribe,Ai.getState),Dc=null,Cc=null,up=null,Xp,i_=()=>{const t=a=>{Xp=a.composedPath().map(l=>l.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",t),up=t,()=>{up&&document.removeEventListener("mouseover",up)}},s_=()=>{const t=()=>{Dc=performance.now(),Cc=performance.timeOrigin};return document.addEventListener("visibilitychange",t),()=>{document.removeEventListener("visibilitychange",t)}},Iy=150,dp=[];function c_(){let t,a;function l(){let s=null;pc=null,pc={},s=Gy(pc);const c=performance.timeOrigin,d=performance.now();return t=requestAnimationFrame(()=>{a=setTimeout(()=>{const f=performance.now(),m=f-d,h=performance.timeOrigin;dp.push(f+h);const v=dp.filter(T=>f+h-T<=1e3),w=v.length;dp=v;const y=Dc!==null&&Cc!==null?f+h-(Cc+Dc)<100:null,S=Xp!==null&&Xp;if(m>Iy&&!y&&document.visibilityState==="visible"&&!S){const T=h+f,E=d+c;Ai.getState().actions.addEvent({kind:"long-render",id:Cn(),data:{endAt:T,startAt:E,meta:{fiberRenders:pc,latency:m,fps:w}}})}Dc=null,Cc=null,s?.(),l()},0)}),s}const o=l();return()=>{o(),cancelAnimationFrame(t),clearTimeout(a)}}var u_=()=>{const t=JT(),a=i_(),l=s_(),o=c_(),s=async(m,h,v)=>{Ai.getState().actions.addEvent({kind:"interaction",id:Cn(),data:{startAt:h.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...h,kind:v.kind}}});const w=Gc.getChannelState("recording");h.detailedTiming.stopListeningForRenders(),w.length&&Gc.updateChannelState("recording",()=>new _t($n))},c=h2("pointer",{onComplete:s}),d=h2("keyboard",{onComplete:s}),f=t_(m=>{d2.setState(_t.fromArray(d2.getCurrentState().concat(m),$y))});return()=>{a(),l(),o(),t(),c(),f(),d()}},zi=t=>{const a=t.filter(l=>l.length>2);return a.length===0?t.at(-1)??"Unknown":a.at(-1)},At=t=>{switch(t.kind){case"interaction":{const{renderTime:a,otherJSTime:l,framePreparation:o,frameConstruction:s,frameDraw:c}=t;return a+l+o+s+(c??0)}case"dropped-frames":return t.otherTime+t.renderTime}},d_=t=>t.wasFiberRenderMount||t.hasMemoCache?!1:t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0,Fi=t=>{const a=At(t.timing);switch(t.kind){case"interaction":return a<200?"low":a<500?"needs-improvement":"high";case"dropped-frames":return a<50?"low":a<Iy?"needs-improvement":"high"}},sn=()=>yh(Yy),Yy=ly(null),Wy=({size:t=24,className:a})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:L(["lucide lucide-chevron-right",a]),children:g("path",{d:"m9 18 6-6-6-6"})}),f_=({className:t="",size:a=24,events:l=[]})=>{const o=l.includes(!0),s=l.filter(f=>f).length,c=s>99?">99":s,d=o?Math.max(a*.6,14):Math.max(a*.4,6);return g("div",{className:"relative",children:[g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${t}`,children:[g("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),g("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),l.length>0&&s>0&&Ze.options.value.showNotificationCount&&g("div",{className:L(["absolute",o?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",o?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${d}px`,height:`${d}px`,padding:o?"0.5px":"0"},children:o&&c})]})},Pc=({className:t="",size:a=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[g("path",{d:"M18 6 6 18"}),g("path",{d:"m6 6 12 12"})]}),p_=({className:t="",size:a=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[g("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),g("path",{d:"M16 9a5 5 0 0 1 0 6"}),g("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),h_=({className:t="",size:a=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[g("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),g("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),g("path",{d:"m2 2 20 20"}),g("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),g("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),m_=({size:t=24,className:a})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:L(["lucide lucide-arrow-left",a]),children:[g("path",{d:"m12 19-7-7 7-7"}),g("path",{d:"M19 12H5"})]}),g_=({className:t="",size:a=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[g("path",{d:"M14 4.1 12 6"}),g("path",{d:"m5.1 8-2.9-.8"}),g("path",{d:"m6 12-1.9 2"}),g("path",{d:"M7.2 2.2 8 5.1"}),g("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),w_=({className:t="",size:a=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[g("path",{d:"M10 8h.01"}),g("path",{d:"M12 12h.01"}),g("path",{d:"M14 8h.01"}),g("path",{d:"M16 12h.01"}),g("path",{d:"M18 8h.01"}),g("path",{d:"M6 8h.01"}),g("path",{d:"M7 16h10"}),g("path",{d:"M8 12h.01"}),g("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),v_=({className:t="",size:a=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,style:{transform:"rotate(180deg)"},children:[g("circle",{cx:"12",cy:"12",r:"10"}),g("path",{d:"m4.9 4.9 14.2 14.2"})]}),y_=({className:t="",size:a=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[g("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),g("polyline",{points:"16 17 22 17 22 11"})]}),Vy=({children:t,triggerContent:a,wrapperProps:l})=>{const[o,s]=Ue("closed"),[c,d]=Ue(null),[f,m]=Ue({width:window.innerWidth,height:window.innerHeight}),h=we(null),v=we(null),w=yh(qh),y=we(!1);Ce(()=>{const x=()=>{m({width:window.innerWidth,height:window.innerHeight}),S()};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const S=()=>{if(h.current&&w){const x=h.current.getBoundingClientRect(),N=w.getBoundingClientRect(),R=x.left+x.width/2,H=x.top,q=new DOMRect(R-N.left,H-N.top,x.width,x.height);d(q)}};Ce(()=>{S()},[h.current]),Ce(()=>{if(o==="opening"){const x=setTimeout(()=>s("open"),120);return()=>clearTimeout(x)}else if(o==="closing"){const x=setTimeout(()=>s("closed"),120);return()=>clearTimeout(x)}},[o]),Ce(()=>{const x=setInterval(()=>{!y.current&&o!=="closed"&&s("closing")},1e3);return()=>clearInterval(x)},[o]);const T=()=>{y.current=!0,S(),s("opening")},E=()=>{y.current=!1,S(),s("closing")},D=()=>{if(!c||!w)return{top:0,left:0};const x=w.getBoundingClientRect(),N=175,R=v.current?.offsetHeight||40,H=5,q=c.x+x.left,V=c.y+x.top;let ee=q,J=V-4;return ee-N/2<H?ee=H+N/2:ee+N/2>f.width-H&&(ee=f.width-H-N/2),J-R<H&&(J=V+c.height+4),{top:J-x.top,left:ee-x.left}};return g(qe,{children:[w&&c&&o!=="closed"&&pS(g("div",{ref:v,className:L(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",o==="opening"||o==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:D().top+"px",left:D().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:t}),w),g("div",{ref:h,onMouseEnter:T,onMouseLeave:E,...l,children:a})]})},b_=({selectedEvent:t})=>{const{notificationState:a,setNotificationState:l,setRoute:o}=sn();return g("div",{className:L(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[g("div",{className:L(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[g("button",{onClick:()=>{o({route:"render-visualization",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",a.route==="render-visualization"||a.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),g("button",{onClick:()=>{o({route:"other-visualization",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",a.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),g("button",{onClick:()=>{o({route:"optimize",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",a.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:g("span",{children:"Prompts"})})]}),g(Vy,{triggerContent:g("button",{onClick:()=>{l(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const c=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!c));const d=new AudioContext;return s.audioNotificationsOptions.enabled||_h(d),c&&d.close(),{...s,audioNotificationsOptions:c?{audioContext:null,enabled:!1}:{audioContext:d,enabled:!0}}})},className:"ml-auto",children:g("div",{className:L(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[g("span",{children:"Alerts"}),a.audioNotificationsOptions.enabled?g(p_,{size:16,className:"text-[#6E6E77]"}):g(h_,{size:16,className:"text-[#6E6E77]"})]})}),children:g(qe,{children:"Play a chime when a slowdown is recorded"})})]})},Zl=t=>{let a="";return t.toSorted((o,s)=>s.totalTime-o.totalTime).slice(0,30).filter(o=>o.totalTime>5).forEach(o=>{let s="";s+="Component Name:",s+=o.name,s+=`
`,s+=`Rendered: ${o.count} times
`,s+=`Sum of self times for ${o.name} is ${o.totalTime.toFixed(0)}ms
`,o.changes.props.length>0&&(s+=`Changed props for all ${o.name} instances ("name:count" pairs)
`,o.changes.props.forEach(c=>{s+=`${c.name}:${c.count}x
`})),o.changes.state.length>0&&(s+=`Changed state for all ${o.name} instances ("hook index:count" pairs)
`,o.changes.state.forEach(c=>{s+=`${c.index}:${c.count}x
`})),o.changes.context.length>0&&(s+=`Changed context for all ${o.name} instances ("context display name (if exists):count" pairs)
`,o.changes.context.forEach(c=>{s+=`${c.name}:${c.count}x
`})),a+=s,a+=`
`}),a},x_=({renderTime:t,eHandlerTimeExcludingRenders:a,toRafTime:l,commitTime:o,framePresentTime:s,formattedReactData:c})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${t.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${l.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${c}`,S_=({interactionType:t,name:a,componentPath:l,time:o,renderTime:s,eHandlerTimeExcludingRenders:c,toRafTime:d,commitTime:f,framePresentTime:m,formattedReactData:h})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${t} on the component named ${a}. This component has the following ancestors ${l}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${o.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${s.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${c.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${d.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${f.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${m===null?"":`- how long it took from dom commit for the frame to be presented: ${m.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${h}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,T_=({renderTime:t,otherTime:a,formattedReactData:l})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${t.toFixed(0)}ms
- other time: ${a}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,__=({renderTime:t,otherTime:a,formattedReactData:l})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${t.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${a}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,k_=({renderTime:t,otherTime:a,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${t.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${a}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${l}`,M_=({interactionType:t,name:a,time:l,renderTime:o,eHandlerTimeExcludingRenders:s,toRafTime:c,commitTime:d,framePresentTime:f,formattedReactData:m})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${t} on a component named ${a}. This means, roughly, the component that handled the ${t} event was named ${a}.

We have a set of high level, and low level data about the performance issue.

The click took ${l.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${o.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${s.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${c.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${d.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${f===null?"":`- how long it took from dom commit for the frame to be presented: ${f.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${m}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Kp=(t,a)=>An(()=>{switch(t){case"data":switch(a.kind){case"dropped-frames":return k_({formattedReactData:Zl(a.groupedFiberRenders),renderTime:a.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),otherTime:a.timing.otherTime});case"interaction":return x_({commitTime:a.timing.frameConstruction,eHandlerTimeExcludingRenders:a.timing.otherJSTime,formattedReactData:Zl(a.groupedFiberRenders),framePresentTime:a.timing.frameDraw,renderTime:a.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),toRafTime:a.timing.framePreparation})}case"explanation":switch(a.kind){case"dropped-frames":return __({formattedReactData:Zl(a.groupedFiberRenders),renderTime:a.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),otherTime:a.timing.otherTime});case"interaction":return M_({commitTime:a.timing.frameConstruction,eHandlerTimeExcludingRenders:a.timing.otherJSTime,formattedReactData:Zl(a.groupedFiberRenders),framePresentTime:a.timing.frameDraw,interactionType:a.type,name:zi(a.componentPath),renderTime:a.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),time:At(a.timing),toRafTime:a.timing.framePreparation})}case"fix":switch(a.kind){case"dropped-frames":return T_({formattedReactData:Zl(a.groupedFiberRenders),renderTime:a.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),otherTime:a.timing.otherTime});case"interaction":return S_({commitTime:a.timing.frameConstruction,componentPath:a.componentPath.join(">"),eHandlerTimeExcludingRenders:a.timing.otherJSTime,formattedReactData:Zl(a.groupedFiberRenders),framePresentTime:a.timing.frameDraw,interactionType:a.type,name:zi(a.componentPath),renderTime:a.groupedFiberRenders.reduce((l,o)=>l+o.totalTime,0),time:At(a.timing),toRafTime:a.timing.framePreparation})}}}),E_=({selectedEvent:t})=>{const[a,l]=Ue("fix"),[o,s]=Ue(!1);return g("div",{className:L(["w-full h-full"]),children:[g("div",{className:L(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[g("div",{className:L(["bg-[#18181B] p-1 rounded-t-sm"]),children:g("div",{className:L(["flex items-center gap-x-1"]),children:[g("button",{onClick:()=>l("fix"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",a==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),g("button",{onClick:()=>l("explanation"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",a==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),g("button",{onClick:()=>l("data"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",a==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),g("div",{className:L(["overflow-y-auto h-full"]),children:g("pre",{className:L(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Kp(a,t)})})]}),g("button",{onClick:async()=>{const c=Kp(a,t);await navigator.clipboard.writeText(c),s(!0),setTimeout(()=>s(!1),1e3)},className:L(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[g("span",{children:o?"Copied!":"Copy Prompt"}),g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:L(["transition-transform duration-200",o&&"scale-110"]),children:o?g("path",{d:"M20 6L9 17l-5-5"}):g(qe,{children:[g("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),g("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},D_=(t,a)=>{switch(t.kind){case"dropped-frames":return[...a?[{name:"Total Processing Time",time:At(t.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:t.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:t.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...a?[]:[{name:"Renders",time:t.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:a?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:t.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:At(t.timing)-t.timing.renderTime-t.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},C_=({selectedEvent:t})=>{const[a]=Ue(iu()??!1),{notificationState:l}=sn(),[o,s]=Ue(l.routeMessage?.name?[l.routeMessage.name]:[]),c=D_(t,a),d=yh(qh);Ce(()=>{if(l.routeMessage?.name){const m=d?.querySelector("#overview-scroll-container"),h=d?.querySelector(`#react-scan-overview-bar-${l.routeMessage.name}`);if(m&&h){const v=h.getBoundingClientRect().top,w=m.getBoundingClientRect().top,y=v-w;m.scrollTop=m.scrollTop+y}}},[l.route]),Ce(()=>{l.route==="other-visualization"&&s(m=>l.routeMessage?.name?[l.routeMessage.name]:m)},[l.route]);const f=c.reduce((m,h)=>m+h.time,0);return g("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[g("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:g("div",{className:"flex items-center justify-between",children:[g("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),g("span",{className:"text-xs text-zinc-400",children:["Total: ",f.toFixed(0),"ms"]})]})}),g("div",{className:"divide-y divide-zinc-800",children:c.map(m=>{const h=o.includes(m.kind);return g("div",{id:`react-scan-overview-bar-${m.kind}`,children:[g("button",{onClick:()=>s(v=>v.includes(m.kind)?v.filter(w=>w!==m.kind):[...v,m.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:g("div",{className:"flex-1",children:[g("div",{className:"flex items-center justify-between mb-2",children:[g("div",{className:"flex items-center gap-0.5",children:[g("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${h?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),g("span",{className:"font-medium flex items-center text-left",children:m.name})]}),g("span",{className:" text-zinc-400",children:[m.time.toFixed(0),"ms"]})]}),g("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:g("div",{className:`h-full ${m.color} transition-all`,style:{width:`${m.time/f*100}%`}})})]})}),h&&g("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:g("p",{className:" text-zinc-400 mb-4 text-xs",children:An(()=>{switch(t.kind){case"interaction":switch(m.kind){case"render":return g(Bl,{input:A_(t)});case"other-javascript":return g(Bl,{input:z_(t)});case"other-not-javascript":return g(Bl,{input:N_(t)})}case"dropped-frames":switch(m.kind){case"total-processing-time":return g(Bl,{input:{kind:"total-processing",data:{time:At(t.timing)}}});case"render":return g(qe,{children:g(Bl,{input:{kind:"render",data:{topByTime:t.groupedFiberRenders.toSorted((v,w)=>w.totalTime-v.totalTime).slice(0,3).map(v=>({name:v.name,percentage:v.totalTime/At(t.timing)}))}}})});case"other-frame-drop":return g(Bl,{input:{kind:"other"}})}}})})})]},m.kind)})})]})},N_=t=>{const a=t.groupedFiberRenders.reduce((c,d)=>c+d.count,0),l=t.timing.renderTime,o=At(t.timing),s=l/o*100;return a>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:a,percentageOfTotal:s,copyButton:g(w2,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:g(w2,{})}}},w2=()=>{const[t,a]=Ue(!1),{notificationState:l}=sn();return g("button",{onClick:async()=>{l.selectedEvent&&(await navigator.clipboard.writeText(Kp("explanation",l.selectedEvent)),a(!0),setTimeout(()=>a(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[g("span",{children:t?"Copied!":"Copy Prompt"}),g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:L(["transition-transform duration-200",t&&"scale-110"]),children:t?g("path",{d:"M20 6L9 17l-5-5"}):g(qe,{children:[g("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),g("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},A_=t=>t.timing.renderTime/At(t.timing)>.3?{kind:"render",data:{topByTime:t.groupedFiberRenders.toSorted((a,l)=>l.totalTime-a.totalTime).slice(0,3).map(a=>({percentage:a.totalTime/At(t.timing),name:a.name}))}}:{kind:"other"},z_=t=>{const a=t.groupedFiberRenders.reduce((l,o)=>l+o.count,0);return t.timing.otherJSTime/At(t.timing)<.2?{kind:"js-explanation-base"}:t.groupedFiberRenders.find(l=>l.count>200)||t.groupedFiberRenders.reduce((l,o)=>l+o.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:a,topByCount:t.groupedFiberRenders.filter(l=>l.count>100).toSorted((l,o)=>o.count-l.count).slice(0,3)}}:t.timing.otherJSTime/At(t.timing)>.3?t.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:a}}:{kind:"js-explanation-base"}},Bl=({input:t})=>{switch(t.kind){case"total-processing":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),g("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),g("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),g("p",{children:["To understand precisely what caused the slowdown while in production, use the ",g("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),g("p",{})]});case"render":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),g("div",{className:L(["flex flex-col"]),children:[g("p",{children:"The slowest components for this time period were:"}),t.data.topByTime.map(a=>g("div",{children:[g("strong",{children:a.name}),":"," ",(a.percentage*100).toFixed(0),"% of total"]},a.name))]}),g("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),g("p",{children:'The "Ranked" tab shows the render times of every component.'}),g("p",{children:"The render times of the same components are grouped together into one bar."}),g("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),g("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",g("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",g("code",{children:"'onclick'"}),", ",g("code",{children:"'onchange'"}),") that performed expensive computation."]}),g("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),g("p",{children:["You should profile your app using the"," ",g("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),t.data.renderCount===0?g(qe,{children:[g("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),g("p",{children:["You should try to reproduce the slowdown while profiling your website with the",g("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):g(qe,{children:[" ",g("p",{children:["There were ",g("strong",{children:t.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",g("code",{children:"useEffects"}),"."]}),g("div",{className:L(["flex flex-col"]),children:[g("p",{children:"You should try optimizing the renders of:"}),t.data.topByCount.map(a=>g("div",{children:["- ",g("strong",{children:a.name})," (rendered ",a.count,"x)"]},a.name))]}),"and then checking if the problem still exists.",g("p",{children:["You can also try profiling your app using the"," ",g("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),g("p",{children:["There were only ",g("strong",{children:t.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",g("code",{children:"useEffect"}),"/",g("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),g("p",{children:["To understand precisely what caused the slowdown, use the"," ",g("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),g("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),g("p",{children:["During this interaction, there were"," ",g("strong",{children:t.data.count})," renders, which was"," ",g("strong",{children:[t.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),g("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),g("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),g("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),g("p",{children:t.data.copyButton}),g("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),g("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),g("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),g("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),g("p",{children:t.data.copyButton}),g("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),g("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return g("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",g("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),g("p",{children:["To get a better picture of what happened, profile your app using the"," ",g("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},nt=null,dt=null,Xe=bt({kind:"idle",current:null}),fp=null,Kl=()=>{fp&&cancelAnimationFrame(fp),fp=requestAnimationFrame(()=>{if(!nt||!dt)return;dt.clearRect(0,0,nt.width,nt.height);const t="hsl(271, 76%, 53%)",a=Xe.value,{alpha:l,current:o}=An(()=>{switch(a.kind){case"transition":{const s=a.current?.alpha&&a.current.alpha>0?a.current:a.transitionTo;return{alpha:s?s.alpha:0,current:s}}case"move-out":return{alpha:a.current?.alpha??0,current:a.current};case"idle":return{alpha:1,current:a.current}}});switch(o?.rects.forEach(s=>{dt&&(dt.shadowColor=t,dt.shadowBlur=6,dt.strokeStyle=t,dt.lineWidth=2,dt.globalAlpha=l,dt.beginPath(),dt.rect(s.left,s.top,s.width,s.height),dt.stroke(),dt.shadowBlur=0,dt.beginPath(),dt.rect(s.left,s.top,s.width,s.height),dt.stroke())}),a.kind){case"move-out":{if(a.current.alpha===0){Xe.value={kind:"idle",current:null};return}a.current.alpha<=.01&&(a.current.alpha=0),a.current.alpha=Math.max(0,a.current.alpha-.03),Kl();return}case"transition":{if(a.current&&a.current.alpha>0){a.current.alpha=Math.max(0,a.current.alpha-.03),Kl();return}if(a.transitionTo.alpha===1){Xe.value={kind:"idle",current:a.transitionTo};return}a.transitionTo.alpha=Math.min(a.transitionTo.alpha+.03,1),Kl()}case"idle":return}})},pp=null,U_=t=>{if(nt=document.createElement("canvas"),dt=nt.getContext("2d",{alpha:!0}),!dt)return null;const a=window.devicePixelRatio||1,{innerWidth:l,innerHeight:o}=window;nt.style.width=`${l}px`,nt.style.height=`${o}px`,nt.width=l*a,nt.height=o*a,nt.style.position="fixed",nt.style.left="0",nt.style.top="0",nt.style.pointerEvents="none",nt.style.zIndex="2147483600",dt.scale(a,a),t.appendChild(nt),pp&&window.removeEventListener("resize",pp);const s=()=>{if(!nt||!dt)return;const c=window.devicePixelRatio||1,{innerWidth:d,innerHeight:f}=window;nt.style.width=`${d}px`,nt.style.height=`${f}px`,nt.width=d*c,nt.height=f*c,dt.scale(c,c),Kl()};return pp=s,window.addEventListener("resize",s),Xe.subscribe(()=>{requestAnimationFrame(()=>{Kl()})}),j_};function j_(){nt?.parentNode&&nt.parentNode.removeChild(nt),nt=null,dt=null}var mi=()=>{const t=Xe.value.current?Xe.value.current:Xe.value.kind==="transition"?Xe.value.transitionTo:null;if(t){if(Xe.value.kind==="transition"){Xe.value={kind:"move-out",current:Xe.value.current?.alpha===0?Xe.value.transitionTo:Xe.value.current??Xe.value.transitionTo};return}Xe.value={kind:"move-out",current:{alpha:0,...t}}}},R_=({selectedEvent:t})=>{const a=At(t.timing),l=a-t.timing.renderTime,[o]=Ue(iu()),c=t.groupedFiberRenders.map(h=>({event:h,kind:"render",totalTime:o?h.count:h.totalTime})),d=An(()=>{switch(t.kind){case"dropped-frames":return t.timing.renderTime/a<.1;case"interaction":return(t.timing.otherJSTime+t.timing.renderTime)/a<.2}});t.kind==="interaction"&&!o&&c.push({kind:"other-javascript",totalTime:t.timing.otherJSTime}),d&&!o&&(t.kind==="interaction"?c.push({kind:"other-not-javascript",totalTime:At(t.timing)-t.timing.renderTime-t.timing.otherJSTime}):c.push({kind:"other-frame-drop",totalTime:l}));const f=we({lastCallAt:null,timer:null}),m=c.reduce((h,v)=>h+v.totalTime,0);return g("div",{className:L(["flex flex-col h-full w-full gap-y-1"]),children:[An(()=>{if(o&&c.length===0)return g("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[g("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),g("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(c.length===0)return g("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[g("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),g("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),c.toSorted((h,v)=>v.totalTime-h.totalTime).map(h=>g(Xy,{bars:c,bar:h,debouncedMouseEnter:f,totalBarTime:m,isProduction:o},h.kind==="render"?h.event.id:h.kind))]})},O_=t=>t.current&&t.current.alpha>0?"fading-out":"fading-in",Xy=({bar:t,debouncedMouseEnter:a,totalBarTime:l,isProduction:o,bars:s,depth:c=0})=>{const{setNotificationState:d,setRoute:f}=sn(),[m,h]=Ue(!1),v=t.kind==="render"?t.event.parents.size===0:!0,w=s.filter(T=>T.kind==="render"&&t.kind==="render"?t.event.parents.has(T.event.name)&&T.event.name!==t.event.name:!1),y=t.kind==="render"?Array.from(t.event.parents).filter(T=>!s.some(E=>E.kind==="render"&&E.event.name===T)):[],S=()=>{t.kind==="render"?(d(T=>({...T,selectedFiber:t.event})),f({route:"render-explanation",routeMessage:null})):f({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:t.kind}})};return g("div",{className:"w-full",children:[g("div",{className:L(["w-full flex items-center relative text-xs min-w-0"]),children:[g("button",{onMouseLeave:()=>{a.current.timer&&clearTimeout(a.current.timer),mi()},onMouseEnter:async()=>{const T=async()=>{if(a.current.lastCallAt=Date.now(),t.kind!=="render"){const R=Xe.value.current?Xe.value.current:Xe.value.kind==="transition"?Xe.value.transitionTo:null;if(!R){Xe.value={kind:"idle",current:null};return}Xe.value={kind:"move-out",current:{alpha:0,...R}};return}const E=Xe.value,D=An(()=>{switch(E.kind){case"transition":return E.transitionTo;case"idle":case"move-out":return E.current}}),x=[];if(E.kind==="transition"){const R=O_(E);An(()=>{switch(R){case"fading-in":{Xe.value={kind:"transition",current:E.transitionTo,transitionTo:{rects:x,alpha:0,name:t.event.name}};return}case"fading-out":{Xe.value={kind:"transition",current:Xe.value.current?{alpha:0,...Xe.value.current}:null,transitionTo:{rects:x,alpha:0,name:t.event.name}};return}}})}else Xe.value={kind:"transition",transitionTo:{rects:x,alpha:0,name:t.event.name},current:D?{alpha:0,...D}:null};const N=t.event.elements.filter(R=>R instanceof Element);for await(const R of By(N))R.forEach(({boundingClientRect:H})=>{x.push(H)}),Kl()};if(a.current.lastCallAt&&Date.now()-a.current.lastCallAt<200){a.current.timer&&clearTimeout(a.current.timer),a.current.timer=setTimeout(()=>{T()},200);return}T()},onClick:S,className:L(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[g("div",{style:{minWidth:"fit-content",width:`${t.totalTime/l*100}%`},className:L(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",t.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",t.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",t.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",t.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),g("div",{className:L(["absolute inset-0 flex items-center px-2","min-w-0"]),children:g("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[g("span",{className:L(["truncate"]),children:An(()=>{switch(t.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return t.event.name}})}),t.kind==="render"&&d_(t.event)&&g("div",{style:{lineHeight:"10px"},className:L(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),g("button",{onClick:()=>t.kind==="render"&&!v&&h(!m),className:L(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!v&&"hover:bg-[#0f0f0f]",t.kind==="render"&&!v?"cursor-pointer":"cursor-default"]),children:[g("div",{className:"w-[20px] flex items-center justify-center",children:t.kind==="render"&&!v&&g(Wy,{className:L("transition-transform",m&&"rotate-90"),size:16})}),g("div",{style:{minWidth:v?"fit-content":o?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[t.kind==="render"&&g("span",{className:L(["text-[10px]"]),children:["x",t.event.count]}),(t.kind!=="render"||!o)&&g("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[t.totalTime<1?"<1":t.totalTime.toFixed(0),"ms"]})]})]}),c===0&&g("div",{className:L(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),m&&(w.length>0||y.length>0)&&g("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[w.toSorted((T,E)=>E.totalTime-T.totalTime).map((T,E)=>g(Xy,{depth:c+1,bar:T,debouncedMouseEnter:a,totalBarTime:l,isProduction:o,bars:s},E)),y.map(T=>g("div",{className:"w-full",children:g("div",{className:"w-full flex items-center relative text-xs",children:g("div",{className:"h-full w-full flex items-center relative",children:[g("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),g("div",{className:"absolute inset-0 flex items-center px-2",children:g("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:T})})]})})},T))]})]})},q_=({selectedEvent:t,selectedFiber:a})=>{const{setRoute:l}=sn(),[o,s]=Ue(!0),[c]=Ue(iu());vh(()=>{const f=localStorage.getItem("react-scan-tip-shown"),m=f==="true"?!0:f==="false"?!1:null;if(m===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}m||s(!1)},[]);const d=a.changes.context.length===0&&a.changes.props.length===0&&a.changes.state.length===0;return g("div",{className:L(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[g("div",{className:L(["flex items-start gap-x-4 "]),children:[g("button",{onClick:()=>{l({route:"render-visualization",routeMessage:null})},className:L(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[g(m_,{size:14})," ",g("span",{children:"Overview"})]}),g("div",{className:L(["flex flex-col gap-y-1"]),children:[g("div",{className:L(["text-sm font-bold text-white overflow-x-hidden"]),children:g("div",{className:"flex items-center gap-x-2 truncate",children:a.name})}),g("div",{className:L(["flex gap-x-2"]),children:[!c&&g(qe,{children:g("div",{className:L(["text-xs text-gray-400"]),children:["• Render time: ",a.totalTime.toFixed(0),"ms"]})}),g("div",{className:L(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",a.count,"x"]})]})]})]}),o&&!d&&g("div",{className:L(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[g("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:L(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:g(Pc,{size:12})}),g("div",{className:L(["w-1 bg-[#d36cff]"])}),g("div",{className:L(["flex-1"]),children:[g("div",{className:L(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),g("div",{className:L(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),d&&g("div",{className:L(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[g("div",{className:L(["w-1 bg-[#d36cff]"])}),g("div",{className:L(["flex-1"]),children:[g("div",{className:L(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),g("div",{className:L(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),g("div",{className:L(["flex w-full"]),children:[g("div",{className:L(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[g("div",{className:L(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),a.changes.props.length>0?a.changes.props.toSorted((f,m)=>m.count-f.count).map(f=>g("div",{className:L(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[g("span",{className:L(["text-white "]),children:f.name}),g("div",{className:L([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[f.count,"/",a.count,"x"]})]},f.name)):g("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),g("div",{className:L(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[g("div",{className:L([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),a.changes.state.length>0?a.changes.state.toSorted((f,m)=>m.count-f.count).map(f=>g("div",{className:L(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[g("span",{className:L(["text-white "]),children:["index ",f.index]}),g("div",{className:L(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[f.count,"/",a.count,"x"]})]},f.index)):g("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),g("div",{className:L(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[g("div",{className:L([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),a.changes.context.length>0?a.changes.context.toSorted((f,m)=>m.count-f.count).map(f=>g("div",{className:L(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[g("span",{className:L(["text-white "]),children:f.name}),g("div",{className:L(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[f.count,"/",a.count,"x"]})]},f.name)):g("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},L_=()=>{const{notificationState:t,setNotificationState:a}=sn(),[l,o]=Ue("..."),s=we(null);if(Ce(()=>{const c=setInterval(()=>{o(d=>d==="..."?"":d+".")},500);return()=>clearInterval(c)},[]),!t.selectedEvent)return g("div",{ref:s,className:L(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[g("div",{className:L(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:g("button",{onClick:()=>{Qe.value={view:"none"}},children:g(Pc,{size:18,className:"text-[#6F6F78]"})})}),g("div",{className:L(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:g("div",{className:L(["flex flex-col items-start gap-y-4"]),children:[g("div",{className:L(["flex items-center"]),children:g("span",{className:L(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",l]})}),t.events.length!==0&&g("p",{className:L(["text-xs"]),children:["Click on an item in the"," ",g("span",{className:L(["text-purple-400"]),children:"History"})," list to get started"]}),g("p",{className:L(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),g("p",{className:L(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),g("button",{onClick:()=>{if(t.audioNotificationsOptions.enabled){a(d=>(d.audioNotificationsOptions.audioContext?.state!=="closed"&&d.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...d,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const c=new AudioContext;_h(c),a(d=>({...d,audioNotificationsOptions:{enabled:!0,audioContext:c}}))},className:L(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:t.audioNotificationsOptions.enabled?g(qe,{children:g("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):g(qe,{children:g("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(t.route){case"render-visualization":return g(hc,{children:g(R_,{selectedEvent:t.selectedEvent})});case"render-explanation":{if(!t.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return g(hc,{children:g(q_,{selectedFiber:t.selectedFiber,selectedEvent:t.selectedEvent})})}case"other-visualization":return g(hc,{children:g("div",{className:L(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:g(C_,{selectedEvent:t.selectedEvent})})});case"optimize":return g(hc,{children:g(E_,{selectedEvent:t.selectedEvent})})}t.route},hc=({children:t})=>{const{notificationState:a}=sn();if(!a.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return g("div",{className:L(["w-full h-full flex flex-col gap-y-2"]),children:[g("div",{className:L(["h-[50px] w-full"]),children:g(b_,{selectedEvent:a.selectedEvent})}),g("div",{className:L(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:t})]})},Z_=({selectedEvent:t})=>{const a=Fi(t);switch(t.kind){case"interaction":return g("div",{className:L(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:g("div",{className:L(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[g("div",{className:L(["flex items-center gap-x-2 "]),children:[g("span",{className:L(["text-[#5a5a5a] mr-0.5"]),children:t.type==="click"?"Clicked ":"Typed in "}),g("span",{children:zi(t.componentPath)}),g("div",{className:L(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",a==="low"&&"bg-green-500/50",a==="needs-improvement"&&"bg-[#b77116]",a==="high"&&"bg-[#b94040]"]),children:[At(t.timing).toFixed(0),"ms processing time"]})]}),g("div",{className:L(["flex items-center gap-x-2  justify-end ml-auto"]),children:g("div",{className:L(["p-2 flex justify-center items-center border-[#27272A]"]),children:g("button",{onClick:()=>{Qe.value={view:"none"}},title:"Close",children:g(Pc,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return g("div",{className:L(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:g("div",{className:L(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[g("div",{className:L(["flex items-center gap-x-2 "]),children:["FPS Drop",g("div",{className:L(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",a==="low"&&"bg-green-500/50",a==="needs-improvement"&&"bg-[#b77116]",a==="high"&&"bg-[#b94040]"]),children:["dropped to ",t.fps," FPS"]})]}),g("div",{className:L(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:g("div",{className:L(["p-2 flex justify-center items-center border-[#27272A]"]),children:g("button",{onClick:()=>{Qe.value={view:"none"}},children:g(Pc,{size:18,className:"text-[#6F6F78]"})})})})]})})}},B_=({flashingItemsCount:t,totalEvents:a})=>{const[l,o]=Ue(!1),s=we(0),c=we(0);return Ce(()=>{if(s.current>=a)return;const d=Date.now(),f=250,m=d-c.current;if(m>=f){o(!1);const h=setTimeout(()=>{s.current=a,c.current=Date.now(),o(!0),setTimeout(()=>{o(!1)},2e3)},50);return()=>clearTimeout(h)}else{const h=f-m,v=setTimeout(()=>{o(!1),setTimeout(()=>{s.current=a,c.current=Date.now(),o(!0),setTimeout(()=>{o(!1)},2e3)},50)},h);return()=>clearTimeout(v)}},[t]),l},v2=({item:t,shouldFlash:a})=>{const[l,o]=Ue(!1),s=t.events.map(Fi).reduce((f,m)=>{switch(m){case"high":return"high";case"needs-improvement":return f==="high"?"high":"needs-improvement";case"low":return f}},"low"),c=t.events.reduce((f,m)=>a(m.id)?f+1:f,0),d=B_({flashingItemsCount:c,totalEvents:t.events.length});return g("div",{className:L(["flex flex-col gap-y-0.5"]),children:[g("button",{onClick:()=>o(f=>!f),className:L(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",d&&!l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[g("div",{className:L(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[g("span",{className:L(["min-w-fit"]),children:g(Wy,{className:L(["text-[#A1A1AA] transition-transform",l?"rotate-90":""]),size:14},`chevron-${t.timestamp}`)}),g("span",{className:L(["text-xs"]),children:t.kind==="collapsed-frame-drops"?"FPS Drops":zi(t.events.at(0)?.componentPath??[])})]}),g("div",{className:L(["ml-auto min-w-fit flex justify-end items-center"]),children:g("div",{style:{lineHeight:"10px"},className:L(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",t.events.length]})})]}),l&&g(H_,{children:t.events.toSorted((f,m)=>m.timestamp-f.timestamp).map(f=>g(Ky,{event:f,shouldFlash:a(f.id)}))})]})},H_=({children:t})=>g("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[g("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),t]}),$_=t=>{const a=we([]),[l,o]=Ue(new Set),s=we(!0);return Ce(()=>{if(s.current){s.current=!1,a.current=t;return}const c=new Set(t.map(m=>m.id)),d=new Set(a.current.map(m=>m.id)),f=new Set;c.forEach(m=>{d.has(m)||f.add(m)}),f.size>0&&(o(f),setTimeout(()=>{o(new Set)},2e3)),a.current=t},[t]),c=>l.has(c)},F_=({shouldFlash:t})=>{const[a,l]=Ue(t);return Ce(()=>{if(t){l(!0);const o=setTimeout(()=>{l(!1)},1e3);return()=>clearTimeout(o)}},[t]),a},Ky=({event:t,shouldFlash:a})=>{const{notificationState:l,setNotificationState:o}=sn(),s=Fi(t),c=F_({shouldFlash:a});switch(t.kind){case"interaction":return g("button",{onClick:()=>{o(d=>({...d,selectedEvent:t,route:"render-visualization",selectedFiber:null}))},className:L(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",t.id===l.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[g("div",{className:L(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[g("span",{className:L(["min-w-fit text-xs"]),children:An(()=>{switch(t.type){case"click":return g(g_,{size:14});case"keyboard":return g(w_,{size:14})}})}),g("span",{className:L(["text-xs pr-1 truncate"]),children:zi(t.componentPath)})]}),g("div",{className:L([" min-w-fit flex justify-end items-center ml-auto"]),children:g("div",{style:{lineHeight:"10px"},className:L(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:g("div",{style:{lineHeight:"10px"},className:L(["text-[10px] text-white flex items-end"]),children:[At(t.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return g("button",{onClick:()=>{o(d=>({...d,selectedEvent:t,route:"render-visualization",selectedFiber:null}))},className:L(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",t.id===l.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[g("div",{className:L(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[g(y_,{size:14,className:"mr-1.5"})," FPS Drop"]}),g("div",{className:L([" min-w-fit flex justify-end items-center ml-auto"]),children:g("div",{style:{lineHeight:"10px"},className:L(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[t.fps," FPS"]})})]})}},G_=t=>t.reduce((l,o)=>{const s=l.at(-1);if(!s)return[{kind:"single",event:o,timestamp:o.timestamp}];switch(s.kind){case"collapsed-keyboard":return o.kind==="interaction"&&o.type==="keyboard"&&o.componentPath.join("-")===s.events[0].componentPath.join("-")?[...l.filter(d=>d!==s),{kind:"collapsed-keyboard",events:[...s.events,o],timestamp:Math.max(...[...s.events,o].map(d=>d.timestamp))}]:[...l,{kind:"single",event:o,timestamp:o.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&o.kind==="interaction"&&o.type==="keyboard"&&s.event.componentPath.join("-")===o.componentPath.join("-")?[...l.filter(d=>d!==s),{kind:"collapsed-keyboard",events:[s.event,o],timestamp:Math.max(s.event.timestamp,o.timestamp)}]:s.event.kind==="dropped-frames"&&o.kind==="dropped-frames"?[...l.filter(d=>d!==s),{kind:"collapsed-frame-drops",events:[s.event,o],timestamp:Math.max(s.event.timestamp,o.timestamp)}]:[...l,{kind:"single",event:o,timestamp:o.timestamp}];case"collapsed-frame-drops":return o.kind==="dropped-frames"?[...l.filter(d=>d!==s),{kind:"collapsed-frame-drops",events:[...s.events,o],timestamp:Math.max(...[...s.events,o].map(d=>d.timestamp))}]:[...l,{kind:"single",event:o,timestamp:o.timestamp}]}},[]),Qy=(t=150)=>{const{notificationState:a}=sn(),[l,o]=Ue(a.events);return Ce(()=>{setTimeout(()=>{o(a.events)},t)},[a.events]),[l,o]},P_=()=>{const{notificationState:t,setNotificationState:a}=sn(),l=$_(t.events),[o,s]=Qy(),c=G_(o).toSorted((d,f)=>f.timestamp-d.timestamp);return g("div",{className:L(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[g("div",{className:L(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[g("span",{children:"History"}),g(Vy,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:g("button",{className:L(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{Ai.getState().actions.clear(),a(d=>({...d,selectedEvent:null,selectedFiber:null,route:d.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:g(v_,{className:L([""]),size:16})}),children:g("div",{className:L(["w-full flex justify-center"]),children:"Clear all events"})})]}),g("div",{className:L(["flex flex-col px-1 gap-y-1"]),children:[c.length===0&&g("div",{className:L(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),c.map(d=>An(()=>{switch(d.kind){case"collapsed-keyboard":return g(v2,{shouldFlash:l,item:d});case"single":return g(Ky,{event:d.event,shouldFlash:l(d.event.id)},d.event.id);case"collapsed-frame-drops":return g(v2,{shouldFlash:l,item:d})}}))]})]})},I_=t=>Object.values(t).map(l=>({id:Cn(),totalTime:l.nodeInfo.reduce((o,s)=>o+s.selfTime,0),count:l.nodeInfo.length,name:l.nodeInfo[0].name,deletedAll:!1,parents:l.parents,hasMemoCache:l.hasMemoCache,wasFiberRenderMount:l.wasFiberRenderMount,elements:l.nodeInfo.map(o=>o.element),changes:{context:l.changes.fiberContext.current.filter(o=>l.changes.fiberContext.changesCounts.get(o.name)).map(o=>({name:String(o.name),count:l.changes.fiberContext.changesCounts.get(o.name)??0})),props:l.changes.fiberProps.current.filter(o=>l.changes.fiberProps.changesCounts.get(o.name)).map(o=>({name:String(o.name),count:l.changes.fiberProps.changesCounts.get(o.name)??0})),state:l.changes.fiberState.current.filter(o=>l.changes.fiberState.changesCounts.get(Number(o.name))).map(o=>({index:o.name,count:l.changes.fiberState.changesCounts.get(Number(o.name))??0}))}})),Y_=t=>{Ce(()=>{const l=setInterval(()=>{t.forEach(o=>{o.groupedFiberRenders&&o.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const c=s.elements.length;s.elements=s.elements.filter(d=>d&&d.isConnected),s.elements.length===0&&c>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(l)}},[t])},Jy=()=>{const t=o_(),a=[];return Y_(a),t.state.events.forEach(l=>{const o=l.kind==="interaction"?l.data.meta.detailedTiming.fiberRenders:l.data.meta.fiberRenders,s=I_(o),c=s.reduce((d,f)=>d+f.totalTime,0);switch(l.kind){case"interaction":{const{commitEnd:d,jsEndDetail:f,interactionStartDetail:m,rafStart:h}=l.data.meta.detailedTiming,v=Math.max(0,f-m-c),w=Math.max(l.data.meta.latency-(d-m),0);a.push({componentPath:l.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:l.id,kind:"interaction",memory:null,timestamp:l.data.startAt,type:l.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:c,kind:"interaction",otherJSTime:v,framePreparation:h-f,frameConstruction:d-h,frameDraw:w}});return}case"long-render":{a.push({kind:"dropped-frames",id:l.id,memory:null,timing:{kind:"dropped-frames",renderTime:c,otherTime:l.data.meta.latency},groupedFiberRenders:s,timestamp:l.data.startAt,fps:l.data.meta.fps});return}}}),a},W_=1e3,V_=()=>{const{notificationState:t,setNotificationState:a}=sn(),l=we(null),o=we(null),s=we(0),[c]=Qy(),d=c.filter(f=>Fi(f)==="high").length;return Ce(()=>{const f=localStorage.getItem("react-scan-notifications-audio");if(f!=="false"&&f!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(f!=="false"){a(h=>h.audioNotificationsOptions.enabled?h:{...h,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Ce(()=>{const{audioNotificationsOptions:f}=t;if(!f.enabled||d===0||l.current&&l.current>=d)return;o.current&&clearTimeout(o.current);const h=Date.now()-s.current,v=Math.max(0,W_-h);o.current=setTimeout(()=>{_h(f.audioContext),l.current=d,s.current=Date.now(),o.current=null},v)},[d]),Ce(()=>{d===0&&(l.current=null)},[d]),Ce(()=>()=>{o.current&&clearTimeout(o.current)},[]),null},X_=Th((t,a)=>{const l=Jy(),[o,s]=Ue({detailsExpanded:!1,events:l,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:l.toSorted((c,d)=>c.timestamp-d.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return o.events=l,g(Yy.Provider,{value:{notificationState:o,setNotificationState:s,setRoute:({route:c,routeMessage:d})=>{s(f=>{const m={...f,route:c,routeMessage:d};switch(c){case"render-visualization":return mi(),{...m,selectedFiber:null};case"optimize":return mi(),{...m,selectedFiber:null};case"other-visualization":return mi(),{...m,selectedFiber:null};case"render-explanation":return mi(),m}})}},children:[g(V_,{}),g(K_,{ref:a})]})}),K_=Th((t,a)=>{const{notificationState:l}=sn();return g("div",{ref:a,className:L(["h-full w-full flex flex-col"]),children:[l.selectedEvent&&g("div",{className:L(["w-full h-[48px] flex flex-col",l.moreInfoExpanded&&"h-[235px]",l.moreInfoExpanded&&l.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[g(Z_,{selectedEvent:l.selectedEvent}),l.moreInfoExpanded&&g(Q_,{})]}),g("div",{className:L(["flex ",l.selectedEvent?"h-[calc(100%-48px)]":"h-full",l.moreInfoExpanded&&"h-[calc(100%-200px)]",l.moreInfoExpanded&&l.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[g("div",{className:L(["h-full min-w-[200px]"]),children:g(P_,{})}),g("div",{className:L(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:g(L_,{})})]})]})}),Q_=()=>{const{notificationState:t}=sn();if(!t.selectedEvent)throw new Error("Invariant must have selected event for more info");const a=t.selectedEvent;return g("div",{className:L(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",a.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:g("div",{className:L(["flex flex-col gap-y-4 h-full"]),children:An(()=>{switch(a.kind){case"interaction":return g(qe,{children:[g("div",{className:L(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:a.type==="click"?"Clicked component location":"Typed in component location"}),g("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:a.componentPath.toReversed().map((l,o)=>g(qe,{children:[g("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:l},l),o<a.componentPath.length-1&&g("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),g("div",{className:L(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[At(a.timing).toFixed(0),"ms"]})]}),g("div",{className:L(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-a.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return g(qe,{children:[g("div",{className:L(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[At(a.timing).toFixed(0),"ms"]})]}),g("div",{className:L(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-a.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},J_=Mh(()=>{const t=Jy(),[a,l]=Ue(t);Ce(()=>{const y=setTimeout(()=>{l(t)},600);return()=>{clearTimeout(y)}},[t]);const o=ce.inspectState,s=o.value.kind==="inspecting",c=o.value.kind==="focused",[d,f]=Ue([]),m=ft(()=>{switch(ce.inspectState.value.kind){case"inspecting":{Qe.value={view:"none"},ce.inspectState.value={kind:"inspect-off"};return}case"focused":{Qe.value={view:"inspector"},ce.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Qe.value={view:"none"},ce.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),h=ft(y=>{if(y.preventDefault(),y.stopPropagation(),!Ze.instrumentation)return;const S=!Ze.instrumentation.isPaused.value;Ze.instrumentation.isPaused.value=S;const T=ba("react-scan-options");Qt("react-scan-options",{...T,enabled:!S})},[]);Ci(()=>{ce.inspectState.value.kind==="uninitialized"&&(ce.inspectState.value={kind:"inspect-off"})});let v=null,w="#999";return s?(v=g(st,{name:"icon-inspect"}),w="#8e61e3"):c?(v=g(st,{name:"icon-focus"}),w="#8e61e3"):(v=g(st,{name:"icon-inspect"}),w="#999"),vh(()=>{if(Qe.value.view!=="notifications")return;const y=new Set(t.map(S=>S.id));f([...y.values()])},[t.length,Qe.value.view]),g("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[g("div",{className:"h-full flex items-center min-w-fit",children:g("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:m,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:w},children:v})}),g("div",{className:"h-full flex items-center justify-center",children:g("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ce.inspectState.value.kind!=="inspect-off"&&(ce.inspectState.value={kind:"inspect-off"}),Qe.value.view){case"inspector":{ce.inspectState.value={kind:"inspect-off"};const y=new Set(t.map(S=>S.id));f([...y.values()]),Qe.value={view:"notifications"};return}case"notifications":{Qe.value={view:"none"};return}case"none":{const y=new Set(t.map(S=>S.id));f([...y.values()]),Qe.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:w},children:g(f_,{events:a.filter(y=>!d.includes(y.id)).map(y=>Fi(y)==="high"),size:16,className:L(["text-[#999]",Qe.value.view==="notifications"&&"text-[#8E61E3]"])})})}),g(BT,{checked:!Ze.instrumentation?.isPaused.value,onChange:h,className:"place-self-center",title:"Outline Re-renders"}),Ze.options.value.showFPS&&g($T,{})]})}),ek=Ir(()=>ce.inspectState.value.kind==="inspecting"),tk=Ir(()=>L("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",ek.value&&"opacity-0 duration-0 delay-0")),nk=Ir(()=>Qe.value.view==="inspector"),ak=Ir(()=>Qe.value.view==="notifications"),rk=()=>g("div",{className:L("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[g("div",{className:tk,children:[g(ZT,{}),g("div",{className:L("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[g(y2,{isOpen:nk,children:g(P9,{})}),g(y2,{isOpen:ak,children:g(X_,{})})]})]}),g(J_,{})]}),y2=({isOpen:t,children:a})=>g("div",{className:L("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",t.value&&"opacity-100 delay-150 pointer-events-auto"),children:g("div",{className:"absolute inset-0 flex",children:a})}),mc=(t,a,l)=>t+(a-t)*l,hp={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Hl=Pn&&window.devicePixelRatio||1,lk=()=>{const t=we(null),a=we(null),l=we(null),o=we(null),s=we(null),c=we(0),d=we(),f=we(new Map),m=we(!1),h=we(0),v=(k,z,U,K)=>{k.save(),k.strokeStyle="white",k.fillStyle="white",k.lineWidth=1.5;const C=K*.6,F=K*.5,j=z+(K-C)/2,Z=U;k.beginPath(),k.arc(j+C/2,Z+F/2,C/2,Math.PI,0,!1),k.stroke();const W=K*.8,X=K*.5,ae=z+(K-W)/2,oe=U+F/2;k.fillRect(ae,oe,W,X),k.restore()},w=(k,z,U,K)=>{if(!K)return;const C=24,F=8,Z=(K?.type&&Nt(K.type))??"Unknown";k.save(),k.font="12px system-ui, -apple-system, sans-serif";const X=k.measureText(Z).width,ae=U==="locked"?14:0,oe=U==="locked"?6:0,he=X+F*2+ae+oe,ve=z.left,He=z.top-C-4;if(k.fillStyle="rgb(37, 37, 38, .75)",k.beginPath(),k.roundRect(ve,He,he,C,3),k.fill(),U==="locked"){const ht=ve+F,Ht=He+(C-ae)/2+2;v(k,ht,Ht,ae),o.current={x:ht,y:Ht,width:ae,height:ae}}else o.current=null;k.fillStyle="white",k.textBaseline="middle";const kt=ve+F+(U==="locked"?ae+oe:0);k.fillText(Z,kt,He+C/2),k.restore()},y=(k,z,U,K)=>{if(!l.current)return;const C=l.current;z.clearRect(0,0,k.width,k.height),z.strokeStyle="rgba(142, 97, 227, 0.5)",z.fillStyle="rgba(173, 97, 230, 0.10)",U==="locked"?z.setLineDash([]):z.setLineDash([4]),z.lineWidth=1,z.fillRect(C.left,C.top,C.width,C.height),z.strokeRect(C.left,C.top,C.width,C.height),w(z,C,U,K)},S=(k,z,U,K,C,F)=>{const j=Ze.options.value.animationSpeed,Z=hp.speeds[j]??hp.speeds.off,W=X=>{if(X-h.current<hp.frameInterval){c.current=requestAnimationFrame(W);return}if(h.current=X,!l.current){cancelAnimationFrame(c.current);return}l.current={left:mc(l.current.left,U.left,Z),top:mc(l.current.top,U.top,Z),width:mc(l.current.width,U.width,Z),height:mc(l.current.height,U.height,Z)},y(k,z,K,C),Math.abs(l.current.left-U.left)>.1||Math.abs(l.current.top-U.top)>.1||Math.abs(l.current.width-U.width)>.1||Math.abs(l.current.height-U.height)>.1?c.current=requestAnimationFrame(W):(l.current=U,y(k,z,K,C),cancelAnimationFrame(c.current),z.restore())};cancelAnimationFrame(c.current),clearTimeout(d.current),c.current=requestAnimationFrame(W),d.current=setTimeout(()=>{cancelAnimationFrame(c.current),l.current=U,y(k,z,K,C),z.restore()},1e3)},T=(k,z,U,K,C)=>{if(z.save(),!l.current){l.current=U,y(k,z,K,C),z.restore();return}S(k,z,U,K,C)},E=async(k,z,U,K)=>{if(!k||!z||!U)return;const{parentCompositeFiber:C}=jr(k),F=await I9(k);!C||!F||T(z,U,F,K,C)},D=()=>{for(const k of f.current.values())k?.()},x=k=>{const z=k.getContext("2d");z&&z.clearRect(0,0,k.width,k.height),l.current=null,o.current=null,s.current=null,k.classList.remove("fade-in"),m.current=!1},N=k=>{if(!t.current||m.current)return;const z=K=>{!t.current||K.propertyName!=="opacity"||!m.current||(t.current.removeEventListener("transitionend",z),x(t.current),k?.())},U=f.current.get("fade-out");U&&(U(),f.current.delete("fade-out")),t.current.addEventListener("transitionend",z),f.current.set("fade-out",()=>{t.current?.removeEventListener("transitionend",z)}),m.current=!0,t.current.classList.remove("fade-in"),requestAnimationFrame(()=>{t.current?.classList.add("fade-out")})},R=()=>{t.current&&(m.current=!1,t.current.classList.remove("fade-out"),requestAnimationFrame(()=>{t.current?.classList.add("fade-in")}))},H=k=>{k!==s.current&&(s.current=k,Fp.has(k.tagName)?N():R(),ce.inspectState.value={kind:"inspecting",hoveredDomElement:k})},q=()=>{!l.current||!t.current||m.current||N()},V=_y(k=>{if(ce.inspectState.peek().kind!=="inspecting"||!a.current)return;a.current.style.pointerEvents="none";const U=document.elementFromPoint(k?.clientX??0,k?.clientY??0);if(a.current.style.removeProperty("pointer-events"),clearTimeout(d.current),U&&U!==t.current){const{parentCompositeFiber:K}=jr(U);if(K){const C=Zc(K);if(C){H(C);return}}}q()},32),ee=(k,z)=>{const U=o.current;if(!U)return!1;const K=z.getBoundingClientRect(),C=z.width/K.width,F=z.height/K.height,j=(k.clientX-K.left)*C,Z=(k.clientY-K.top)*F,W=j/Hl,X=Z/Hl;return W>=U.x&&W<=U.x+U.width&&X>=U.y&&X<=U.y+U.height},J=k=>{k.kind==="focused"&&(ce.inspectState.value={kind:"inspecting",hoveredDomElement:k.focusedDomElement})},re=k=>{const z=["react-scan-inspect-element","react-scan-power"];if(k.target instanceof HTMLElement&&z.includes(k.target.id))return;const U=s.current?.tagName;if(U&&Fp.has(U))return;k.preventDefault(),k.stopPropagation();const K=s.current??document.elementFromPoint(k.clientX,k.clientY);if(!K)return;const C=k.composedPath().at(0);if(C instanceof HTMLElement&&z.includes(C.id)){const Z=new MouseEvent(k.type,k);Z.__reactScanSyntheticEvent=!0,C.dispatchEvent(Z);return}const{parentCompositeFiber:F}=jr(K);if(!F)return;const j=Zc(F);if(!j){s.current=null,ce.inspectState.value={kind:"inspect-off"};return}ce.inspectState.value={kind:"focused",focusedDomElement:j,fiber:F}},ie=k=>{if(k.__reactScanSyntheticEvent)return;const z=ce.inspectState.peek(),U=t.current;if(!(!U||!a.current)){if(ee(k,U)){k.preventDefault(),k.stopPropagation(),J(z);return}z.kind==="inspecting"&&re(k)}},se=k=>{if(k.key!=="Escape")return;const z=ce.inspectState.peek();if(t.current&&document.activeElement?.id!=="react-scan-root"&&(Qe.value={view:"none"},z.kind==="focused"||z.kind==="inspecting"))switch(k.preventDefault(),k.stopPropagation(),z.kind){case"focused":{R(),l.current=null,s.current=z.focusedDomElement,ce.inspectState.value={kind:"inspecting",hoveredDomElement:z.focusedDomElement};break}case"inspecting":{N(()=>{ou.value=!1,ce.inspectState.value={kind:"inspect-off"}});break}}},le=(k,z,U)=>{f.current.get(k.kind)?.(),a.current&&k.kind!=="inspecting"&&(a.current.style.pointerEvents="none"),c.current&&cancelAnimationFrame(c.current);let K;switch(k.kind){case"inspect-off":N();return;case"inspecting":E(k.hoveredDomElement,z,U,"inspecting");break;case"focused":if(!k.focusedDomElement)return;s.current!==k.focusedDomElement&&(s.current=k.focusedDomElement),Qe.value={view:"inspector"},E(k.focusedDomElement,z,U,"locked"),K=ce.lastReportTime.subscribe(()=>{if(c.current&&l.current){const{parentCompositeFiber:C}=jr(k.focusedDomElement);C&&E(k.focusedDomElement,z,U,"locked")}}),K&&f.current.set(k.kind,K);break}},_e=(k,z)=>{const U=k.getBoundingClientRect();k.width=U.width*Hl,k.height=U.height*Hl,z.scale(Hl,Hl),z.save()},xe=()=>{const k=ce.inspectState.peek(),z=t.current;if(!z)return;const U=z?.getContext("2d");U&&(cancelAnimationFrame(c.current),clearTimeout(d.current),_e(z,U),l.current=null,k.kind==="focused"&&k.focusedDomElement?E(k.focusedDomElement,z,U,"locked"):k.kind==="inspecting"&&k.hoveredDomElement&&E(k.hoveredDomElement,z,U,"inspecting"))},me=k=>{const z=ce.inspectState.peek(),U=t.current;U&&(z.kind==="inspecting"||ee(k,U))&&(k.preventDefault(),k.stopPropagation(),k.stopImmediatePropagation())};return Ce(()=>{const k=t.current;if(!k)return;const z=k?.getContext("2d");if(!z)return;_e(k,z);const U=ce.inspectState.subscribe(K=>{le(K,k,z)});return window.addEventListener("scroll",xe,{passive:!0}),window.addEventListener("resize",xe,{passive:!0}),document.addEventListener("pointermove",V,{passive:!0,capture:!0}),document.addEventListener("pointerdown",me,{capture:!0}),document.addEventListener("click",ie,{capture:!0}),document.addEventListener("keydown",se,{capture:!0}),()=>{D(),U(),window.removeEventListener("scroll",xe),window.removeEventListener("resize",xe),document.removeEventListener("pointermove",V,{capture:!0}),document.removeEventListener("click",ie,{capture:!0}),document.removeEventListener("pointerdown",me,{capture:!0}),document.removeEventListener("keydown",se,{capture:!0}),c.current&&cancelAnimationFrame(c.current),clearTimeout(d.current)}},[]),g(qe,{children:[g("div",{ref:a,className:L("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),g("canvas",{ref:t,dir:"ltr",className:L("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},ok=class{constructor(t,a){this.width=t,this.height=a,this.maxWidth=t-ke*2,this.maxHeight=a-ke*2}rightEdge(t){return this.width-t-ke}bottomEdge(t){return this.height-t-ke}isFullWidth(t){return t>=this.maxWidth}isFullHeight(t){return t>=this.maxHeight}},$l,Ui=()=>{const t=window.innerWidth,a=window.innerHeight;return $l&&$l.width===t&&$l.height===a||($l=new ok(t,a)),$l},ik=(t,a,l,o,s)=>{if(l){if(t==="top-left")return"bottom-right";if(t==="top-right")return"bottom-left";if(t==="bottom-left")return"top-right";if(t==="bottom-right")return"top-left";const[c,d]=a.split("-");if(t==="left")return`${c}-right`;if(t==="right")return`${c}-left`;if(t==="top")return`bottom-${d}`;if(t==="bottom")return`top-${d}`}if(o){if(t==="left")return`${a.split("-")[0]}-right`;if(t==="right")return`${a.split("-")[0]}-left`}if(s){if(t==="top")return`bottom-${a.split("-")[1]}`;if(t==="bottom")return`top-${a.split("-")[1]}`}return a},bi=(t,a,l)=>{const o=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,c=window.innerHeight,d=a===yt.width,f=d?a:Math.min(a,s-ke*2),m=d?l:Math.min(l,c-ke*2);let h,v,w=ke,y=s-f-ke,S=ke,T=c-m-ke;switch(t){case"top-right":h=o?-w:y,v=S;break;case"bottom-right":h=o?-w:y,v=T;break;case"bottom-left":h=o?-y:w,v=T;break;case"top-left":h=o?-y:w,v=S;break;default:h=w,v=S;break}return d&&(o?h=Math.min(-w,Math.max(h,-y)):h=Math.max(w,Math.min(h,y)),v=Math.max(S,Math.min(v,T))),{x:h,y:v}},sk=(t,a)=>{const[l,o]=a.split("-");return t!==l&&t!==o},ck=(t,a,l,o)=>l&&o?!0:!l&&!o?sk(t,a):l?t!==a.split("-")[0]:o?t!==a.split("-")[1]:!1,gc=(t,a,l)=>{const o=l?yt.width:yt.initialHeight,s=l?Ui().maxWidth:Ui().maxHeight,c=t+a;return Math.min(Math.max(o,c),s)},uk=(t,a,l,o,s)=>{const c=getComputedStyle(document.body).direction==="rtl",d=window.innerWidth-ke*2,f=window.innerHeight-ke*2;let m=a.width,h=a.height,v=l.x,w=l.y;if(c&&t.includes("right")){const D=-l.x+a.width-ke,x=Math.min(a.width+o,D);m=Math.min(d,Math.max(yt.width,x)),v=l.x+(m-a.width)}if(c&&t.includes("left")){const D=window.innerWidth-l.x-ke,x=Math.min(a.width-o,D);m=Math.min(d,Math.max(yt.width,x))}if(!c&&t.includes("right")){const D=window.innerWidth-l.x-ke,x=Math.min(a.width+o,D);m=Math.min(d,Math.max(yt.width,x))}if(!c&&t.includes("left")){const D=l.x+a.width-ke,x=Math.min(a.width-o,D);m=Math.min(d,Math.max(yt.width,x)),v=l.x-(m-a.width)}if(t.includes("bottom")){const D=window.innerHeight-l.y-ke,x=Math.min(a.height+s,D);h=Math.min(f,Math.max(yt.initialHeight,x))}if(t.includes("top")){const D=l.y+a.height-ke,x=Math.min(a.height-s,D);h=Math.min(f,Math.max(yt.initialHeight,x)),w=l.y-(h-a.height)}let y=ke,S=window.innerWidth-ke-m,T=ke,E=window.innerHeight-ke-h;return c?v=Math.min(-y,Math.max(v,-S)):v=Math.max(y,Math.min(v,S)),w=Math.max(T,Math.min(w,E)),{newSize:{width:m,height:h},newPosition:{x:v,y:w}}},dk=t=>{const a=Ui(),l={"top-left":Math.hypot(t.x,t.y),"top-right":Math.hypot(a.maxWidth-t.x,t.y),"bottom-left":Math.hypot(t.x,a.maxHeight-t.y),"bottom-right":Math.hypot(a.maxWidth-t.x,a.maxHeight-t.y)};let o="top-left";for(const s in l)l[s]<l[o]&&(o=s);return o},fk=(t,a,l,o,s=100)=>{const c=l!==void 0?t-l:0,d=o!==void 0?a-o:0,f=window.innerWidth/2,m=window.innerHeight/2,h=c>s,v=c<-s,w=d>s,y=d<-s;if(h||v){const S=a>m;return h?S?"bottom-right":"top-right":S?"bottom-left":"top-left"}if(w||y){const S=t>f;return w?S?"bottom-right":"bottom-left":S?"top-right":"top-left"}return t>f?a>m?"bottom-right":"top-right":a>m?"bottom-left":"top-left"},wc=({position:t})=>{const a=we(null),l=we(null),o=we(null),s=we(null);Ce(()=>{const f=a.current;if(!f)return;const m=()=>{f.classList.remove("pointer-events-none");const w=ce.inspectState.value.kind==="focused",y=Qe.value.view!=="none";(w||y)&&ck(t,ue.value.corner,ue.value.dimensions.isFullWidth,ue.value.dimensions.isFullHeight)?f.classList.remove("hidden","pointer-events-none","opacity-0"):f.classList.add("hidden","pointer-events-none","opacity-0")},h=ue.subscribe(w=>{l.current!==null&&o.current!==null&&s.current!==null&&w.dimensions.width===l.current&&w.dimensions.height===o.current&&w.corner===s.current||(m(),l.current=w.dimensions.width,o.current=w.dimensions.height,s.current=w.corner)}),v=ce.inspectState.subscribe(()=>{m()});return()=>{h(),v(),l.current=null,o.current=null,s.current=null}},[]);const c=ft(f=>{f.preventDefault(),f.stopPropagation();const m=Zp.value;if(!m)return;const h=m.style,{dimensions:v}=ue.value,w=f.clientX,y=f.clientY,S=v.width,T=v.height,E=v.position;ue.value={...ue.value,dimensions:{...v,isFullWidth:!1,isFullHeight:!1,width:S,height:T,position:E}};let D=null;const x=R=>{D||(h.transition="none",D=requestAnimationFrame(()=>{const{newSize:H,newPosition:q}=uk(t,{width:S,height:T},E,R.clientX-w,R.clientY-y);h.transform=`translate3d(${q.x}px, ${q.y}px, 0)`,h.width=`${H.width}px`,h.height=`${H.height}px`;const V=Math.floor(H.width-Nn/2),ee=ue.value.componentsTree.width,J=Math.min(V,Math.max(Nn,ee));ue.value={...ue.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:H.width,height:H.height,position:q},componentsTree:{...ue.value.componentsTree,width:J}},D=null}))},N=()=>{D&&(cancelAnimationFrame(D),D=null),document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",N);const{dimensions:R,corner:H}=ue.value,q=Ui(),V=q.isFullWidth(R.width),ee=q.isFullHeight(R.height),J=V&&ee;let re=H;(J||V||ee)&&(re=dk(R.position));const ie=bi(re,R.width,R.height),se=()=>{m.removeEventListener("transitionend",se)};m.addEventListener("transitionend",se),h.transform=`translate3d(${ie.x}px, ${ie.y}px, 0)`,ue.value={...ue.value,corner:re,dimensions:{isFullWidth:V,isFullHeight:ee,width:R.width,height:R.height,position:ie},lastDimensions:{isFullWidth:V,isFullHeight:ee,width:R.width,height:R.height,position:ie}},Qt(wa,{corner:re,dimensions:ue.value.dimensions,lastDimensions:ue.value.lastDimensions,componentsTree:ue.value.componentsTree})};document.addEventListener("pointermove",x,{passive:!0}),document.addEventListener("pointerup",N)},[]),d=ft(f=>{f.preventDefault(),f.stopPropagation();const m=Zp.value;if(!m)return;const h=m.style,{dimensions:v,corner:w}=ue.value,y=Ui(),S=y.isFullWidth(v.width),T=y.isFullHeight(v.height),E=S&&T,D=(S||T)&&!E;let x=v.width,N=v.height;const R=ik(t,w,E,S,T);t==="left"||t==="right"?(x=S?v.width:y.maxWidth,D&&(x=S?yt.width:y.maxWidth)):(N=T?v.height:y.maxHeight,D&&(N=T?yt.initialHeight:y.maxHeight)),E&&(t==="left"||t==="right"?x=yt.width:N=yt.initialHeight);const H=bi(R,x,N),q={isFullWidth:y.isFullWidth(x),isFullHeight:y.isFullHeight(N),width:x,height:N,position:H},V=Math.floor(x-yt.width/2),ee=ue.value.componentsTree.width,J=Math.floor(x*.3),re=S?Nn:(t==="left"||t==="right")&&!S?Math.min(V,Math.max(Nn,J)):Math.min(V,Math.max(Nn,ee));requestAnimationFrame(()=>{ue.value={corner:R,dimensions:q,lastDimensions:v,componentsTree:{...ue.value.componentsTree,width:re}},h.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",h.width=`${x}px`,h.height=`${N}px`,h.transform=`translate3d(${H.x}px, ${H.y}px, 0)`}),Qt(wa,{corner:R,dimensions:q,lastDimensions:v,componentsTree:{...ue.value.componentsTree,width:re}})},[]);return g("div",{ref:a,onPointerDown:c,onDblClick:d,className:L("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":t==="left","resize-right peer/right z-10":t==="right","resize-top peer/top":t==="top","resize-bottom peer/bottom":t==="bottom"}),children:g("span",{className:"resize-line-wrapper",children:g("span",{className:"resize-line",children:g(st,{name:"icon-ellipsis",size:18,className:L("text-neutral-400",(t==="left"||t==="right")&&"rotate-90")})})})})},b2={horizontal:{width:20,height:48},vertical:{width:48,height:20}},pk=()=>{const t=we(null),a=we(!1),l=we(0),o=we(0),s=we(!1),c=ft((y=!0)=>{if(!t.current)return;const{corner:S}=ue.value;let T,E;if(on.value){const re=on.value.orientation||"horizontal",ie=b2[re];T=ie.width,E=ie.height}else if(a.current){const re=ue.value.lastDimensions;T=gc(re.width,0,!0),E=gc(re.height,0,!1),s.current&&(s.current=!1)}else T=l.current,E=o.current;let x=bi(S,T,E);if(on.value){const{corner:re,orientation:ie="horizontal"}=on.value,se=b2[ie];switch(re){case"top-left":x=ie==="horizontal"?{x:-1,y:ke}:{x:ke,y:-1};break;case"bottom-left":x=ie==="horizontal"?{x:-1,y:window.innerHeight-se.height-ke}:{x:ke,y:window.innerHeight-se.height+1};break;case"top-right":x=ie==="horizontal"?{x:window.innerWidth-se.width+1,y:ke}:{x:window.innerWidth-se.width-ke,y:-1};break;case"bottom-right":default:x=ie==="horizontal"?{x:window.innerWidth-se.width+1,y:window.innerHeight-se.height-ke}:{x:window.innerWidth-se.width-ke,y:window.innerHeight-se.height+1};break}}const N=T<yt.width||E<yt.initialHeight,R=y&&!N,H=t.current,q=H.style;let V=null;const ee=()=>{Qf(),H.removeEventListener("transitionend",ee),V&&(cancelAnimationFrame(V),V=null)};H.addEventListener("transitionend",ee),q.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",V=requestAnimationFrame(()=>{q.width=`${T}px`,q.height=`${E}px`,q.transform=`translate3d(${x.x}px, ${x.y}px, 0)`,V=null});const J={isFullWidth:T>=window.innerWidth-ke*2,isFullHeight:E>=window.innerHeight-ke*2,width:T,height:E,position:x};ue.value={corner:S,dimensions:J,lastDimensions:a?ue.value.lastDimensions:T>l.current?J:ue.value.lastDimensions,componentsTree:ue.value.componentsTree},R&&Qt(wa,{corner:ue.value.corner,dimensions:ue.value.dimensions,lastDimensions:ue.value.lastDimensions,componentsTree:ue.value.componentsTree}),Qf()},[]),d=ft(y=>{if(y.preventDefault(),!t.current||y.target.closest("button"))return;const S=t.current,T=S.style,{dimensions:E}=ue.value,D=y.clientX,x=y.clientY,N=E.position.x,R=E.position.y;let H=N,q=R,V=null,ee=!1,J=D,re=x;const ie=le=>{V||(ee=!0,J=le.clientX,re=le.clientY,V=requestAnimationFrame(()=>{const _e=J-D,xe=re-x;H=Number(N)+_e,q=Number(R)+xe,T.transition="none",T.transform=`translate3d(${H}px, ${q}px, 0)`;const me=H+E.width,k=q+E.height,z=Math.max(0,-H),U=Math.max(0,me-window.innerWidth),K=Math.max(0,-q),C=Math.max(0,k-window.innerHeight),F=Math.min(E.width,z+U),j=Math.min(E.height,K+C),Z=F*E.height+j*E.width-F*j,W=E.width*E.height;let X=Z>W*.35;if(!X&&Ze.options.value.showFPS){const ae=H+E.width,oe=ae-100;X=ae<=0||oe>=window.innerWidth||q+E.height<=0||q>=window.innerHeight}if(X){const ae=H+E.width/2,oe=q+E.height/2,he=window.innerWidth/2,ve=window.innerHeight/2;let He;ae<he?He=oe<ve?"top-left":"bottom-left":He=oe<ve?"top-right":"bottom-right";let kt;const ht=Math.max(z,U),Ht=Math.max(K,C);kt=ht>Ht?"horizontal":"vertical",ue.value={...ue.value,corner:He,lastDimensions:{...E,position:bi(He,E.width,E.height)}};const Rn={corner:He,orientation:kt};on.value=Rn,Qt(Mc,Rn),Qt(wa,ue.value),c(!1),document.removeEventListener("pointermove",ie),document.removeEventListener("pointerup",se),V&&(cancelAnimationFrame(V),V=null)}V=null}))},se=()=>{if(!S)return;V&&(cancelAnimationFrame(V),V=null),document.removeEventListener("pointermove",ie),document.removeEventListener("pointerup",se);const le=Math.abs(J-D),_e=Math.abs(re-x),xe=Math.sqrt(le*le+_e*_e);if(!ee||xe<60)return;const me=fk(J,re,D,x,ce.inspectState.value.kind==="focused"?80:40);if(me===ue.value.corner){T.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const U=ue.value.dimensions.position;requestAnimationFrame(()=>{T.transform=`translate3d(${U.x}px, ${U.y}px, 0)`});return}const k=bi(me,E.width,E.height);if(H===N&&q===R)return;const z=()=>{T.transition="none",Qf(),S.removeEventListener("transitionend",z),V&&(cancelAnimationFrame(V),V=null)};S.addEventListener("transitionend",z),T.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{T.transform=`translate3d(${k.x}px, ${k.y}px, 0)`}),ue.value={corner:me,dimensions:{isFullWidth:E.isFullWidth,isFullHeight:E.isFullHeight,width:E.width,height:E.height,position:k},lastDimensions:ue.value.lastDimensions,componentsTree:ue.value.componentsTree},Qt(wa,{corner:me,dimensions:ue.value.dimensions,lastDimensions:ue.value.lastDimensions,componentsTree:ue.value.componentsTree})};document.addEventListener("pointermove",ie),document.addEventListener("pointerup",se)},[]),f=ft(y=>{if(y.preventDefault(),!t.current||!on.value)return;const{corner:S,orientation:T="horizontal"}=on.value,E=y.clientX,D=y.clientY;let x=null,N=!1;const R=50,H=V=>{if(N||x)return;const ee=V.clientX-E,J=V.clientY-D;let re=!1;if(T==="horizontal"?(S.endsWith("left")&&ee>R||S.endsWith("right")&&ee<-R)&&(re=!0):(S.startsWith("top")&&J>R||S.startsWith("bottom")&&J<-R)&&(re=!0),re){if(N=!0,on.value=null,Qt(Mc,null),l.current===0&&t.current)requestAnimationFrame(()=>{if(t.current){t.current.style.width="min-content";const ie=t.current.offsetWidth;l.current=ie||300;const se=ue.value.lastDimensions,le=gc(se.width,0,!0),_e=gc(se.height,0,!1);let xe=V.clientX-le/2,me=V.clientY-_e/2;xe=Math.max(ke,Math.min(xe,window.innerWidth-le-ke)),me=Math.max(ke,Math.min(me,window.innerHeight-_e-ke)),ue.value={...ue.value,dimensions:{...ue.value.dimensions,position:{x:xe,y:me}}},c(!0);const k=ba(Ll);Qe.value=k||{view:"none"},setTimeout(()=>{if(t.current){const z=new PointerEvent("pointerdown",{clientX:V.clientX,clientY:V.clientY,pointerId:V.pointerId,bubbles:!0});t.current.dispatchEvent(z)}},100)}});else{c(!0);const ie=ba(Ll);Qe.value=ie||{view:"none"}}document.removeEventListener("pointermove",H),document.removeEventListener("pointerup",q)}},q=()=>{document.removeEventListener("pointermove",H),document.removeEventListener("pointerup",q)};document.addEventListener("pointermove",H),document.addEventListener("pointerup",q)},[]);Ce(()=>{if(!t.current)return;$w(Ll),on.value?(o.current=36,l.current=0):(t.current.style.width="min-content",o.current=36,l.current=t.current.offsetWidth),t.current.style.maxWidth=`calc(100vw - ${ke*2}px)`,t.current.style.maxHeight=`calc(100vh - ${ke*2}px)`,c(),ce.inspectState.value.kind!=="focused"&&!on.value&&!s.current&&(ue.value={...ue.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:l.current,height:o.current,position:ue.value.dimensions.position}}),Zp.value=t.current;const y=ue.subscribe(D=>{if(!t.current)return;const{x,y:N}=D.dimensions.position,{width:R,height:H}=D.dimensions,q=t.current;requestAnimationFrame(()=>{q.style.transform=`translate3d(${x}px, ${N}px, 0)`,q.style.width=`${R}px`,q.style.height=`${H}px`})}),S=Qe.subscribe(D=>{a.current=D.view!=="none",c(),on.value||(D.view!=="none"?Qt(Ll,D):$w(Ll))}),T=ce.inspectState.subscribe(D=>{a.current=D.kind==="focused",c()}),E=()=>{c(!0)};return window.addEventListener("resize",E,{passive:!0}),()=>{window.removeEventListener("resize",E),S(),T(),y(),Qt(wa,{...Hn,corner:ue.value.corner})}},[]);const[m,h]=Ue(!1);Ce(()=>{h(!0)},[]);const v=on.value;let w="";if(v){const{orientation:y="horizontal",corner:S}=v;y==="horizontal"?w=S?.endsWith("right")?"rotate-180":"":w=S?.startsWith("bottom")?"-rotate-90":"rotate-90"}return g(qe,{children:[g(lk,{}),g(qh.Provider,{value:t.current,children:g("div",{id:"react-scan-toolbar",dir:"ltr",ref:t,onPointerDown:v?f:d,className:L("fixed inset-0",v?(()=>{const{orientation:y="horizontal",corner:S}=v;return y==="horizontal"?S?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":S?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",v?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:v?g("button",{type:"button",onClick:()=>{on.value=null,Qt(Mc,null),l.current===0&&t.current&&requestAnimationFrame(()=>{if(t.current){t.current.style.width="min-content";const S=t.current.offsetWidth;l.current=S||300,c(!0)}});const y=ba(Ll);Qe.value=y||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:g(st,{name:"icon-chevron-right",size:16,className:L("transition-transform",w)})}):g(qe,{children:[g(wc,{position:"top"}),g(wc,{position:"bottom"}),g(wc,{position:"left"}),g(wc,{position:"right"}),g(rk,{})]})})})]})},qh=ly(null),hk=()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[g("title",{children:"React Scan Icons"}),g("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),g("path",{d:"M5 3a2 2 0 0 0-2 2"}),g("path",{d:"M19 3a2 2 0 0 1 2 2"}),g("path",{d:"M5 21a2 2 0 0 1-2-2"}),g("path",{d:"M9 3h1"}),g("path",{d:"M9 21h2"}),g("path",{d:"M14 3h1"}),g("path",{d:"M3 9v1"}),g("path",{d:"M21 9v2"}),g("path",{d:"M3 14v1"})]}),g("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),g("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),g("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),g("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),g("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),g("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),g("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),g("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),g("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),g("circle",{cx:"12",cy:"12",r:"1"}),g("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),g("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("circle",{cx:"12",cy:"12",r:"1"}),g("circle",{cx:"19",cy:"12",r:"1"}),g("circle",{cx:"5",cy:"12",r:"1"})]}),g("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),g("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),g("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"M20 6 9 17l-5-5"})}),g("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"m9 18 6-6-6-6"})}),g("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),g("circle",{cx:"12",cy:"12",r:"3"})]}),g("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:g("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),g("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),g("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),g("path",{d:"M9 11.2h5.7"})]}),g("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),g("path",{d:"M12 9v4"}),g("path",{d:"M12 17h.01"})]}),g("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M2 7v10"}),g("path",{d:"M6 5v14"}),g("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),g("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("circle",{cx:"11",cy:"11",r:"8"}),g("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),g("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),g("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),g("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),g("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),g("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),g("circle",{cx:"10",cy:"13",r:"8"}),g("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),g("path",{d:"M18 3 19.1 5.2"})]})]}),mk=class extends xn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){return this.state.hasError?g("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:g("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[g("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[g(st,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),g("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),g("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},gk=t=>{const a=document.createElement("div");a.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=a,t.appendChild(a),wi(g(mk,{children:g(qe,{children:[g(hk,{}),g(pk,{})]})}),a);const l=a.remove.bind(a);return a.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,a.hasChildNodes()&&(wi(null,a),wi(null,a)),l()},a},wk={version:"0.4.3"},Nr=null,hi=null,vk=()=>{if(Nr&&hi)return{rootContainer:Nr,shadowRoot:hi};Nr=document.createElement("div"),Nr.id="react-scan-root",hi=Nr.attachShadow({mode:"open"});const t=document.createElement("style");return t.textContent=RT,hi.appendChild(t),document.documentElement.appendChild(Nr),{rootContainer:Nr,shadowRoot:hi}},ce={wasDetailsOpen:bt(!0),isInIframe:bt(Pn&&window.self!==window.top),inspectState:bt({kind:"uninitialized"}),monitor:bt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:bt(0),interactionListeningForRenders:null,changesListeners:new Map},Ze={instrumentation:null,componentAllowList:null,options:bt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ce,version:wk.version};Pn&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Ze.version);function yk(t){return t in Ze.options.value}var eb=t=>{const a=[],l={};for(const o in t){if(!yk(o))continue;const s=t[o];switch(o){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?a.push(`- ${o} must be a boolean. Got "${s}"`):l[o]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?l[o]=s:a.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?a.push(`- ${o} must be a function. Got "${s}"`):l.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?a.push(`- ${o} must be a function. Got "${s}"`):l.onCommitFinish=s;break;case"onRender":typeof s!="function"?a.push(`- ${o} must be a function. Got "${s}"`):l.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?a.push(`- ${o} must be a function. Got "${s}"`):l[o]=s;break;default:a.push(`- Unknown option "${o}"`)}}return a.length>0&&console.warn(`[React Scan] Invalid options:
${a.join(`
`)}`),l},bk=t=>{try{const a=eb(t);if(Object.keys(a).length===0)return;const l="showToolbar"in a&&a.showToolbar!==void 0,o={...Ze.options.value,...a},{instrumentation:s}=Ze;s&&"enabled"in a&&(s.isPaused.value=a.enabled===!1),Ze.options.value=o;try{const c=ba("react-scan-options")?.enabled;typeof c=="boolean"&&(o.enabled=c)}catch(c){Ze.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",c)}return Qt("react-scan-options",o),l&&tb(!!o.showToolbar),o}catch(a){Ze.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},xk=()=>Ze.options,vc=null,x2,iu=()=>{if(vc!==null)return vc;x2??=Zr();for(const t of x2.renderers.values())G7(t)==="production"&&(vc=!0);return vc},Sk=()=>{try{if(!Pn||!Ze.runInAllEnvironments&&iu()&&!Ze.options.value.dangerouslyForceRunInProduction)return;const t=ba("react-scan-options");if(t){const l=eb(t);Object.keys(l).length>0&&(Ze.options.value={...Ze.options.value,...l})}const a=xk();jT(()=>{tb(!!a.value.showToolbar)}),!ce.monitor.value&&Pn&&setTimeout(()=>{P7()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(t){Ze.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",t)}},tb=t=>{window.reactScanCleanupListeners?.();const a=u_(),l=Tk();window.reactScanCleanupListeners=()=>{a(),l?.()};const o=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!t){o?.remove();return}o?.remove();const{shadowRoot:s}=vk();gk(s)},Tk=()=>{try{const t=document.documentElement;return U_(t)}catch(t){Ze.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",t)}},_k=(t={})=>{bk(t),!(ce.isInIframe.value&&!Ze.options.value.allowInIframe&&!Ze.runInAllEnvironments)&&(t.enabled===!1&&t.showToolbar!==!0||Sk())},kk=new WeakSet;_k();const Mk=M.lazy(()=>Wn(()=>import("./HomePage-Drae3PrL.js"),__vite__mapDeps([0,1,2,3,4]))),Ek=M.lazy(()=>Wn(()=>import("./GalleryPage-D2Fi_lAz.js"),__vite__mapDeps([5,6,1,7,8,9,2,3,4]))),Dk=M.lazy(()=>Wn(()=>import("./PageComponent-ByUjtY0t.js"),__vite__mapDeps([10,6,9,2,3,4]))),Ck=M.lazy(()=>Wn(()=>import("./MapPage-wRgkJzIs.js"),__vite__mapDeps([11,12,3,4,2]))),Nk=M.lazy(()=>Wn(()=>import("./ListPage-CMA4vIv6.js"),__vite__mapDeps([13,2,14,15,16,3,4]))),Ak=M.lazy(()=>Wn(()=>import("./TimelinePage-DvKQH877.js"),__vite__mapDeps([17,15,16,3,4]))),zk=M.lazy(()=>Wn(()=>import("./MakePostcardPage-COLmpqou.js"),__vite__mapDeps([18,14,16,8,3,4]))),Uk=M.lazy(()=>Wn(()=>import("./StatisticsPage-CJJhoP-m.js"),__vite__mapDeps([19,12,3,4,15]))),jk=M.lazy(()=>Wn(()=>import("./ImagePage-CDFGfeUv.js"),__vite__mapDeps([20,12,1,7,8,2,9,3,4]))),Rk=M.lazy(()=>Wn(()=>import("./NotFoundPage-L1TSlbd1.js"),__vite__mapDeps([9,2,3,4])));function Ok(){const t=no.c(32),{theme:a}=qi(),l=M.useRef(null),o=Sa(),[s,c]=M.useState(!1),[d,f]=M.useState(!1);let m;t[0]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{l.current&&(l.current.scrollTop=0)},t[0]=m):m=t[0];let h;t[1]!==o?(h=[o],t[1]=o,t[2]=h):h=t[2],M.useEffect(m,h);let v,w;t[3]!==d?(v=()=>{const k=z=>{z.key==="k"&&(z.metaKey||z.ctrlKey)&&(z.preventDefault(),d&&f(!1),c(qk))};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},w=[d],t[3]=d,t[4]=v,t[5]=w):(v=t[4],w=t[5]),M.useEffect(v,w);let y;t[6]!==d?(y=()=>{d&&f(!1),c(!0)},t[6]=d,t[7]=y):y=t[7];const S=y,T=`bg-black font-geist overflow-hidden  h-screen w-screen flex flex-col md:flex-row gap-0 ${a==="light"?"bg-white text-black":"bg-black text-white"}`;let E;t[8]!==S||t[9]!==d?(E=$.jsx(r5,{onOpenCommandPalette:S,setMobileMenuOpen:f,mobileMenuOpen:d}),t[8]=S,t[9]=d,t[10]=E):E=t[10];let D;t[11]===Symbol.for("react.memo_cache_sentinel")?(D=()=>c(!1),t[11]=D):D=t[11];let x;t[12]!==s?(x=$.jsx(m7,{open:s,onClose:D,setMobileMenuOpen:f}),t[12]=s,t[13]=x):x=t[13];const N=`max-h-screen overflow-x-hidden flex-1 overflow-y-auto ${a==="light"?"bg-white":"bg-black"}`;let R;t[14]===Symbol.for("react.memo_cache_sentinel")?(R=$.jsx("div",{className:"p-4 pt-8",children:"Laden ..."}),t[14]=R):R=t[14];let H;t[15]===Symbol.for("react.memo_cache_sentinel")?(H=$.jsx(Dn,{path:"/",element:$.jsx(Mk,{})}),t[15]=H):H=t[15];let q;t[16]===Symbol.for("react.memo_cache_sentinel")?(q=$.jsx(Dn,{path:"/gallery/:slug",element:$.jsx(Ek,{})}),t[16]=q):q=t[16];let V;t[17]===Symbol.for("react.memo_cache_sentinel")?(V=$.jsx(Dn,{path:"/gallery/:gallerySlug/image/:slug",element:$.jsx(jk,{})}),t[17]=V):V=t[17];let ee;t[18]===Symbol.for("react.memo_cache_sentinel")?(ee=$.jsx(Dn,{path:"/page/:slug",element:$.jsx(Dk,{})}),t[18]=ee):ee=t[18];let J;t[19]===Symbol.for("react.memo_cache_sentinel")?(J=$.jsx(Dn,{path:"/app/map",element:$.jsx(Ck,{})}),t[19]=J):J=t[19];let re;t[20]===Symbol.for("react.memo_cache_sentinel")?(re=$.jsx(Dn,{path:"/app/list",element:$.jsx(Nk,{})}),t[20]=re):re=t[20];let ie;t[21]===Symbol.for("react.memo_cache_sentinel")?(ie=$.jsx(Dn,{path:"/app/timeline",element:$.jsx(Ak,{})}),t[21]=ie):ie=t[21];let se;t[22]===Symbol.for("react.memo_cache_sentinel")?(se=$.jsx(Dn,{path:"/app/postcard",element:$.jsx(zk,{})}),t[22]=se):se=t[22];let le;t[23]===Symbol.for("react.memo_cache_sentinel")?(le=$.jsx(Dn,{path:"/app/statistics",element:$.jsx(Uk,{})}),t[23]=le):le=t[23];let _e;t[24]===Symbol.for("react.memo_cache_sentinel")?(_e=$.jsx(M.Suspense,{fallback:R,children:$.jsxs(mx,{children:[H,q,V,ee,J,re,ie,se,le,$.jsx(Dn,{path:"*",element:$.jsx(Rk,{})})]})}),t[24]=_e):_e=t[24];let xe;t[25]!==N?(xe=$.jsx("main",{ref:l,className:N,children:_e}),t[25]=N,t[26]=xe):xe=t[26];let me;return t[27]!==xe||t[28]!==T||t[29]!==E||t[30]!==x?(me=$.jsxs("div",{className:T,children:[E,x,xe]}),t[27]=xe,t[28]=T,t[29]=E,t[30]=x,t[31]=me):me=t[31],me}function qk(t){return!t}_3.createRoot(document.getElementById("root")).render($.jsx(M.StrictMode,{children:$.jsx(Bx,{children:$.jsx(e6,{children:$.jsx(Ok,{})})})}));export{V5 as A,yv as B,Pf as C,iv as D,dv as E,cv as F,x6 as G,Ic as H,B2 as L,Rt as P,v3 as R,I2 as X,Wn as _,n5 as a,pw as b,no as c,Sa as d,qi as e,vp as f,gi as g,ir as h,Bk as i,$ as j,c6 as k,d6 as l,b5 as m,m5 as n,nr as o,hw as p,$r as q,M as r,fw as s,lv as t,Zk as u,$2 as v,Si as w,Ti as x,ya as y,R8 as z};
