(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function D0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bp={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),I0=Symbol.for("react.portal"),k0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),z0=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),B0=Symbol.for("react.suspense"),G0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),sd=Symbol.iterator;function W0(n){return n===null||typeof n!="object"?null:(n=sd&&n[sd]||n["@@iterator"],typeof n=="function"?n:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Wp={};function Ls(n,e,t){this.props=n,this.context=e,this.refs=Wp,this.updater=t||Gp}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ls.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Hp(){}Hp.prototype=Ls.prototype;function sf(n,e,t){this.props=n,this.context=e,this.refs=Wp,this.updater=t||Gp}var of=sf.prototype=new Hp;of.constructor=sf;Vp(of,Ls.prototype);of.isPureReactComponent=!0;var od=Array.isArray,Xp=Object.prototype.hasOwnProperty,af={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function $p(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xp.call(e,i)&&!jp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bo,type:n,key:s,ref:o,props:r,_owner:af.current}}function H0(n,e){return{$$typeof:Bo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function lf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bo}function X0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ad=/\/+/g;function jl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?X0(""+n.key):e.toString(36)}function Na(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bo:case I0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+jl(o,0):i,od(r)?(t="",n!=null&&(t=n.replace(ad,"$&/")+"/"),Na(r,e,t,"",function(u){return u})):r!=null&&(lf(r)&&(r=H0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ad,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",od(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+jl(s,a);o+=Na(s,e,t,l,r)}else if(l=W0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+jl(s,a++),o+=Na(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(n,e,t){if(n==null)return n;var i=[],r=0;return Na(n,i,"","",function(s){return e.call(t,s,r++)}),i}function j0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Jt={current:null},za={transition:null},$0={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:za,ReactCurrentOwner:af};function qp(){throw Error("act(...) is not supported in production builds of React.")}Pe.Children={map:qo,forEach:function(n,e,t){qo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return qo(n,function(){e++}),e},toArray:function(n){return qo(n,function(e){return e})||[]},only:function(n){if(!lf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Pe.Component=Ls;Pe.Fragment=k0;Pe.Profiler=z0;Pe.PureComponent=sf;Pe.StrictMode=N0;Pe.Suspense=B0;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0;Pe.act=qp;Pe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Vp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Xp.call(e,l)&&!jp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Bo,type:n.type,key:r,ref:s,props:i,_owner:o}};Pe.createContext=function(n){return n={$$typeof:U0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:F0,_context:n},n.Consumer=n};Pe.createElement=$p;Pe.createFactory=function(n){var e=$p.bind(null,n);return e.type=n,e};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(n){return{$$typeof:O0,render:n}};Pe.isValidElement=lf;Pe.lazy=function(n){return{$$typeof:V0,_payload:{_status:-1,_result:n},_init:j0}};Pe.memo=function(n,e){return{$$typeof:G0,type:n,compare:e===void 0?null:e}};Pe.startTransition=function(n){var e=za.transition;za.transition={};try{n()}finally{za.transition=e}};Pe.unstable_act=qp;Pe.useCallback=function(n,e){return Jt.current.useCallback(n,e)};Pe.useContext=function(n){return Jt.current.useContext(n)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(n){return Jt.current.useDeferredValue(n)};Pe.useEffect=function(n,e){return Jt.current.useEffect(n,e)};Pe.useId=function(){return Jt.current.useId()};Pe.useImperativeHandle=function(n,e,t){return Jt.current.useImperativeHandle(n,e,t)};Pe.useInsertionEffect=function(n,e){return Jt.current.useInsertionEffect(n,e)};Pe.useLayoutEffect=function(n,e){return Jt.current.useLayoutEffect(n,e)};Pe.useMemo=function(n,e){return Jt.current.useMemo(n,e)};Pe.useReducer=function(n,e,t){return Jt.current.useReducer(n,e,t)};Pe.useRef=function(n){return Jt.current.useRef(n)};Pe.useState=function(n){return Jt.current.useState(n)};Pe.useSyncExternalStore=function(n,e,t){return Jt.current.useSyncExternalStore(n,e,t)};Pe.useTransition=function(){return Jt.current.useTransition()};Pe.version="18.3.1";Bp.exports=Pe;var Se=Bp.exports;const Ke=D0(Se);var Qu={},Yp={exports:{}},Sn={},Zp={exports:{}},Kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,B){var V=L.length;L.push(B);e:for(;0<V;){var ne=V-1>>>1,N=L[ne];if(0<r(N,B))L[ne]=B,L[V]=N,V=ne;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var B=L[0],V=L.pop();if(V!==B){L[0]=V;e:for(var ne=0,N=L.length,q=N>>>1;ne<q;){var ee=2*(ne+1)-1,ie=L[ee],O=ee+1,he=L[O];if(0>r(ie,V))O<N&&0>r(he,ie)?(L[ne]=he,L[O]=V,ne=O):(L[ne]=ie,L[ee]=V,ne=ee);else if(O<N&&0>r(he,V))L[ne]=he,L[O]=V,ne=O;else break e}}return B}function r(L,B){var V=L.sortIndex-B.sortIndex;return V!==0?V:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,y=!1,h=!1,m=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var B=t(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=L)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(u)}}function x(L){if(h=!1,_(L),!y)if(t(l)!==null)y=!0,W(M);else{var B=t(u);B!==null&&K(x,B.startTime-L)}}function M(L,B){y=!1,h&&(h=!1,g(S),S=-1),p=!0;var V=f;try{for(_(B),d=t(l);d!==null&&(!(d.expirationTime>B)||L&&!F());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var N=ne(d.expirationTime<=B);B=n.unstable_now(),typeof N=="function"?d.callback=N:d===t(l)&&i(l),_(B)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var ee=t(u);ee!==null&&K(x,ee.startTime-B),q=!1}return q}finally{d=null,f=V,p=!1}}var E=!1,T=null,S=-1,C=5,P=-1;function F(){return!(n.unstable_now()-P<C)}function H(){if(T!==null){var L=n.unstable_now();P=L;var B=!0;try{B=T(!0,L)}finally{B?D():(E=!1,T=null)}}else E=!1}var D;if(typeof v=="function")D=function(){v(H)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=H,D=function(){G.postMessage(null)}}else D=function(){m(H,0)};function W(L){T=L,E||(E=!0,D())}function K(L,B){S=m(function(){L(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){y||p||(y=!0,W(M))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var V=f;f=B;try{return L()}finally{f=V}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=f;f=L;try{return B()}finally{f=V}},n.unstable_scheduleCallback=function(L,B,V){var ne=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ne+V:ne):V=ne,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=V+N,L={id:c++,callback:B,priorityLevel:L,startTime:V,expirationTime:N,sortIndex:-1},V>ne?(L.sortIndex=V,e(u,L),t(l)===null&&L===t(u)&&(h?(g(S),S=-1):h=!0,K(x,V-ne))):(L.sortIndex=N,e(l,L),y||p||(y=!0,W(M))),L},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(L){var B=f;return function(){var V=f;f=B;try{return L.apply(this,arguments)}finally{f=V}}}})(Kp);Zp.exports=Kp;var q0=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0=Se,xn=q0;function Q(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qp=new Set,xo={};function Pr(n,e){ys(n,e),ys(n+"Capture",e)}function ys(n,e){for(xo[n]=e,n=0;n<e.length;n++)Qp.add(e[n])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ld={},ud={};function K0(n){return Ju.call(ud,n)?!0:Ju.call(ld,n)?!1:Z0.test(n)?ud[n]=!0:(ld[n]=!0,!1)}function Q0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J0(n,e,t,i){if(e===null||typeof e>"u"||Q0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Rt[n]=new en(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Rt[e]=new en(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Rt[n]=new en(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Rt[n]=new en(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Rt[n]=new en(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Rt[n]=new en(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Rt[n]=new en(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Rt[n]=new en(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Rt[n]=new en(n,5,!1,n.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(uf,cf);Rt[e]=new en(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(uf,cf);Rt[e]=new en(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(uf,cf);Rt[e]=new en(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Rt[n]=new en(n,1,!1,n.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Rt[n]=new en(n,1,!1,n.toLowerCase(),null,!0,!0)});function ff(n,e,t,i){var r=Rt.hasOwnProperty(e)?Rt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J0(e,t,r,i)&&(t=null),i||r===null?K0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Si=Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),em=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),cd=Symbol.iterator;function Fs(n){return n===null||typeof n!="object"?null:(n=cd&&n[cd]||n["@@iterator"],typeof n=="function"?n:null)}var tt=Object.assign,$l;function no(n){if($l===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+n}var ql=!1;function Yl(n,e){if(!n||ql)return"";ql=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?no(n):""}function ev(n){switch(n.tag){case 5:return no(n.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return n=Yl(n.type,!1),n;case 11:return n=Yl(n.type.render,!1),n;case 1:return n=Yl(n.type,!0),n;default:return""}}function ic(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Jr:return"Fragment";case Qr:return"Portal";case ec:return"Profiler";case df:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case em:return(n.displayName||"Context")+".Consumer";case Jp:return(n._context.displayName||"Context")+".Provider";case hf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pf:return e=n.displayName||null,e!==null?e:ic(n.type)||"Memo";case Ai:e=n._payload,n=n._init;try{return ic(n(e))}catch{}}return null}function tv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nv(n){var e=nm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Zo(n){n._valueTracker||(n._valueTracker=nv(n))}function im(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=nm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ya(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rc(n,e){var t=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function fd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=$i(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rm(n,e){e=e.checked,e!=null&&ff(n,"checked",e,!1)}function sc(n,e){rm(n,e);var t=$i(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?oc(n,e.type,t):e.hasOwnProperty("defaultValue")&&oc(n,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function dd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function oc(n,e,t){(e!=="number"||Ya(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var io=Array.isArray;function fs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+$i(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ac(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function hd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Q(92));if(io(t)){if(1<t.length)throw Error(Q(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:$i(t)}}function sm(n,e){var t=$i(e.value),i=$i(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function pd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function om(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?om(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ko,am=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function So(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(n){iv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),uo[e]=uo[n]})});function lm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||uo.hasOwnProperty(n)&&uo[n]?(""+e).trim():e+"px"}function um(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=lm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var rv=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(n,e){if(e){if(rv[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function cc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function mf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dc=null,ds=null,hs=null;function md(n){if(n=Wo(n)){if(typeof dc!="function")throw Error(Q(280));var e=n.stateNode;e&&(e=El(e),dc(n.stateNode,n.type,e))}}function cm(n){ds?hs?hs.push(n):hs=[n]:ds=n}function fm(){if(ds){var n=ds,e=hs;if(hs=ds=null,md(n),e)for(n=0;n<e.length;n++)md(e[n])}}function dm(n,e){return n(e)}function hm(){}var Zl=!1;function pm(n,e,t){if(Zl)return n(e,t);Zl=!0;try{return dm(n,e,t)}finally{Zl=!1,(ds!==null||hs!==null)&&(hm(),fm())}}function Mo(n,e){var t=n.stateNode;if(t===null)return null;var i=El(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Q(231,e,typeof t));return t}var hc=!1;if(gi)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){hc=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{hc=!1}function sv(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var co=!1,Za=null,Ka=!1,pc=null,ov={onError:function(n){co=!0,Za=n}};function av(n,e,t,i,r,s,o,a,l){co=!1,Za=null,sv.apply(ov,arguments)}function lv(n,e,t,i,r,s,o,a,l){if(av.apply(this,arguments),co){if(co){var u=Za;co=!1,Za=null}else throw Error(Q(198));Ka||(Ka=!0,pc=u)}}function Lr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function mm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function gd(n){if(Lr(n)!==n)throw Error(Q(188))}function uv(n){var e=n.alternate;if(!e){if(e=Lr(n),e===null)throw Error(Q(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return gd(r),n;if(s===i)return gd(r),e;s=s.sibling}throw Error(Q(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(t.alternate!==i)throw Error(Q(190))}if(t.tag!==3)throw Error(Q(188));return t.stateNode.current===t?n:e}function gm(n){return n=uv(n),n!==null?vm(n):null}function vm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=vm(n);if(e!==null)return e;n=n.sibling}return null}var _m=xn.unstable_scheduleCallback,vd=xn.unstable_cancelCallback,cv=xn.unstable_shouldYield,fv=xn.unstable_requestPaint,st=xn.unstable_now,dv=xn.unstable_getCurrentPriorityLevel,gf=xn.unstable_ImmediatePriority,ym=xn.unstable_UserBlockingPriority,Qa=xn.unstable_NormalPriority,hv=xn.unstable_LowPriority,xm=xn.unstable_IdlePriority,Sl=null,Jn=null;function pv(n){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Sl,n,void 0,(n.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:vv,mv=Math.log,gv=Math.LN2;function vv(n){return n>>>=0,n===0?32:31-(mv(n)/gv|0)|0}var Qo=64,Jo=4194304;function ro(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ja(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ro(a):(s&=o,s!==0&&(i=ro(s)))}else o=t&~r,o!==0?i=ro(o):s!==0&&(i=ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Wn(e),r=1<<t,i|=n[t],e&=~r;return i}function _v(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=_v(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function mc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sm(){var n=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),n}function Kl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Go(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Wn(e),n[e]=t}function xv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Wn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function vf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Wn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ve=0;function Mm(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var wm,_f,bm,Em,Tm,gc=!1,ea=[],Fi=null,Ui=null,Oi=null,wo=new Map,bo=new Map,Li=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(n,e){switch(n){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Os(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&_f(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Mv(n,e,t,i,r){switch(e){case"focusin":return Fi=Os(Fi,n,e,t,i,r),!0;case"dragenter":return Ui=Os(Ui,n,e,t,i,r),!0;case"mouseover":return Oi=Os(Oi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,Os(wo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,Os(bo.get(s)||null,n,e,t,i,r)),!0}return!1}function Cm(n){var e=fr(n.target);if(e!==null){var t=Lr(e);if(t!==null){if(e=t.tag,e===13){if(e=mm(t),e!==null){n.blockedOn=e,Tm(n.priority,function(){bm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);fc=i,t.target.dispatchEvent(i),fc=null}else return e=Wo(t),e!==null&&_f(e),n.blockedOn=t,!1;e.shift()}return!0}function yd(n,e,t){Fa(n)&&t.delete(e)}function wv(){gc=!1,Fi!==null&&Fa(Fi)&&(Fi=null),Ui!==null&&Fa(Ui)&&(Ui=null),Oi!==null&&Fa(Oi)&&(Oi=null),wo.forEach(yd),bo.forEach(yd)}function Bs(n,e){n.blockedOn===e&&(n.blockedOn=null,gc||(gc=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,wv)))}function Eo(n){function e(r){return Bs(r,n)}if(0<ea.length){Bs(ea[0],n);for(var t=1;t<ea.length;t++){var i=ea[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Fi!==null&&Bs(Fi,n),Ui!==null&&Bs(Ui,n),Oi!==null&&Bs(Oi,n),wo.forEach(e),bo.forEach(e),t=0;t<Li.length;t++)i=Li[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Li.length&&(t=Li[0],t.blockedOn===null);)Cm(t),t.blockedOn===null&&Li.shift()}var ps=Si.ReactCurrentBatchConfig,el=!0;function bv(n,e,t,i){var r=Ve,s=ps.transition;ps.transition=null;try{Ve=1,yf(n,e,t,i)}finally{Ve=r,ps.transition=s}}function Ev(n,e,t,i){var r=Ve,s=ps.transition;ps.transition=null;try{Ve=4,yf(n,e,t,i)}finally{Ve=r,ps.transition=s}}function yf(n,e,t,i){if(el){var r=vc(n,e,t,i);if(r===null)au(n,e,i,tl,t),_d(n,i);else if(Mv(r,n,e,t,i))i.stopPropagation();else if(_d(n,i),e&4&&-1<Sv.indexOf(n)){for(;r!==null;){var s=Wo(r);if(s!==null&&wm(s),s=vc(n,e,t,i),s===null&&au(n,e,i,tl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else au(n,e,i,null,t)}}var tl=null;function vc(n,e,t,i){if(tl=null,n=mf(i),n=fr(n),n!==null)if(e=Lr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=mm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return tl=n,null}function Am(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dv()){case gf:return 1;case ym:return 4;case Qa:case hv:return 16;case xm:return 536870912;default:return 16}default:return 16}}var Di=null,xf=null,Ua=null;function Pm(){if(Ua)return Ua;var n,e=xf,t=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ua=r.slice(n,1<i?1-i:void 0)}function Oa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ta(){return!0}function xd(){return!1}function Mn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:xd,this.isPropagationStopped=xd,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=Mn(Rs),Vo=tt({},Rs,{view:0,detail:0}),Tv=Mn(Vo),Ql,Jl,Gs,Ml=tt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Gs&&(Gs&&n.type==="mousemove"?(Ql=n.screenX-Gs.screenX,Jl=n.screenY-Gs.screenY):Jl=Ql=0,Gs=n),Ql)},movementY:function(n){return"movementY"in n?n.movementY:Jl}}),Sd=Mn(Ml),Cv=tt({},Ml,{dataTransfer:0}),Av=Mn(Cv),Pv=tt({},Vo,{relatedTarget:0}),eu=Mn(Pv),Lv=tt({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Mn(Lv),Dv=tt({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Iv=Mn(Dv),kv=tt({},Rs,{data:0}),Md=Mn(kv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Fv[n])?!!e[n]:!1}function Mf(){return Uv}var Ov=tt({},Vo,{key:function(n){if(n.key){var e=Nv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Oa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(n){return n.type==="keypress"?Oa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Bv=Mn(Ov),Gv=tt({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Mn(Gv),Vv=tt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),Wv=Mn(Vv),Hv=tt({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=Mn(Hv),jv=tt({},Ml,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=Mn(jv),qv=[9,13,27,32],wf=gi&&"CompositionEvent"in window,fo=null;gi&&"documentMode"in document&&(fo=document.documentMode);var Yv=gi&&"TextEvent"in window&&!fo,Lm=gi&&(!wf||fo&&8<fo&&11>=fo),bd=" ",Ed=!1;function Rm(n,e){switch(n){case"keyup":return qv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var es=!1;function Zv(n,e){switch(n){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(Ed=!0,bd);case"textInput":return n=e.data,n===bd&&Ed?null:n;default:return null}}function Kv(n,e){if(es)return n==="compositionend"||!wf&&Rm(n,e)?(n=Pm(),Ua=xf=Di=null,es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lm&&e.locale!=="ko"?null:e.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Qv[n.type]:e==="textarea"}function Im(n,e,t,i){cm(i),e=nl(e,"onChange"),0<e.length&&(t=new Sf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ho=null,To=null;function Jv(n){Hm(n,0)}function wl(n){var e=is(n);if(im(e))return n}function e_(n,e){if(n==="change")return e}var km=!1;if(gi){var tu;if(gi){var nu="oninput"in document;if(!nu){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),nu=typeof Cd.oninput=="function"}tu=nu}else tu=!1;km=tu&&(!document.documentMode||9<document.documentMode)}function Ad(){ho&&(ho.detachEvent("onpropertychange",Nm),To=ho=null)}function Nm(n){if(n.propertyName==="value"&&wl(To)){var e=[];Im(e,To,n,mf(n)),pm(Jv,e)}}function t_(n,e,t){n==="focusin"?(Ad(),ho=e,To=t,ho.attachEvent("onpropertychange",Nm)):n==="focusout"&&Ad()}function n_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(To)}function i_(n,e){if(n==="click")return wl(e)}function r_(n,e){if(n==="input"||n==="change")return wl(e)}function s_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var jn=typeof Object.is=="function"?Object.is:s_;function Co(n,e){if(jn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ju.call(e,r)||!jn(n[r],e[r]))return!1}return!0}function Pd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ld(n,e){var t=Pd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pd(t)}}function zm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Fm(){for(var n=window,e=Ya();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ya(n.document)}return e}function bf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function o_(n){var e=Fm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&zm(t.ownerDocument.documentElement,t)){if(i!==null&&bf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Ld(t,s);var o=Ld(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var a_=gi&&"documentMode"in document&&11>=document.documentMode,ts=null,_c=null,po=null,yc=!1;function Rd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yc||ts==null||ts!==Ya(i)||(i=ts,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&Co(po,i)||(po=i,i=nl(_c,"onSelect"),0<i.length&&(e=new Sf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ts)))}function na(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ns={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},iu={},Um={};gi&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function bl(n){if(iu[n])return iu[n];if(!ns[n])return n;var e=ns[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Um)return iu[n]=e[t];return n}var Om=bl("animationend"),Bm=bl("animationiteration"),Gm=bl("animationstart"),Vm=bl("transitionend"),Wm=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(n,e){Wm.set(n,e),Pr(e,[n])}for(var ru=0;ru<Dd.length;ru++){var su=Dd[ru],l_=su.toLowerCase(),u_=su[0].toUpperCase()+su.slice(1);Zi(l_,"on"+u_)}Zi(Om,"onAnimationEnd");Zi(Bm,"onAnimationIteration");Zi(Gm,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Vm,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c_=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Id(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,lv(i,e,void 0,n),n.currentTarget=null}function Hm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Id(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Id(r,a,u),s=l}}}if(Ka)throw n=pc,Ka=!1,pc=null,n}function je(n,e){var t=e[bc];t===void 0&&(t=e[bc]=new Set);var i=n+"__bubble";t.has(i)||(Xm(e,n,2,!1),t.add(i))}function ou(n,e,t){var i=0;e&&(i|=4),Xm(t,n,i,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Ao(n){if(!n[ia]){n[ia]=!0,Qp.forEach(function(t){t!=="selectionchange"&&(c_.has(t)||ou(t,!1,n),ou(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ia]||(e[ia]=!0,ou("selectionchange",!1,e))}}function Xm(n,e,t,i){switch(Am(e)){case 1:var r=bv;break;case 4:r=Ev;break;default:r=yf}t=r.bind(null,e,t,n),r=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function au(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pm(function(){var u=s,c=mf(t),d=[];e:{var f=Wm.get(n);if(f!==void 0){var p=Sf,y=n;switch(n){case"keypress":if(Oa(t)===0)break e;case"keydown":case"keyup":p=Bv;break;case"focusin":y="focus",p=eu;break;case"focusout":y="blur",p=eu;break;case"beforeblur":case"afterblur":p=eu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Wv;break;case Om:case Bm:case Gm:p=Rv;break;case Vm:p=Xv;break;case"scroll":p=Tv;break;case"wheel":p=$v;break;case"copy":case"cut":case"paste":p=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wd}var h=(e&4)!==0,m=!h&&n==="scroll",g=h?f!==null?f+"Capture":null:f;h=[];for(var v=u,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,g!==null&&(x=Mo(v,g),x!=null&&h.push(Po(v,x,_)))),m)break;v=v.return}0<h.length&&(f=new p(f,y,null,t,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==fc&&(y=t.relatedTarget||t.fromElement)&&(fr(y)||y[vi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=t.relatedTarget||t.toElement,p=u,y=y?fr(y):null,y!==null&&(m=Lr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(h=Sd,x="onMouseLeave",g="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(h=wd,x="onPointerLeave",g="onPointerEnter",v="pointer"),m=p==null?f:is(p),_=y==null?f:is(y),f=new h(x,v+"leave",p,t,c),f.target=m,f.relatedTarget=_,x=null,fr(c)===u&&(h=new h(g,v+"enter",y,t,c),h.target=_,h.relatedTarget=m,x=h),m=x,p&&y)t:{for(h=p,g=y,v=0,_=h;_;_=Dr(_))v++;for(_=0,x=g;x;x=Dr(x))_++;for(;0<v-_;)h=Dr(h),v--;for(;0<_-v;)g=Dr(g),_--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=Dr(h),g=Dr(g)}h=null}else h=null;p!==null&&kd(d,f,p,h,!1),y!==null&&m!==null&&kd(d,m,y,h,!0)}}e:{if(f=u?is(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var M=e_;else if(Td(f))if(km)M=r_;else{M=n_;var E=t_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=i_);if(M&&(M=M(n,u))){Im(d,M,t,c);break e}E&&E(n,f,u),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&oc(f,"number",f.value)}switch(E=u?is(u):window,n){case"focusin":(Td(E)||E.contentEditable==="true")&&(ts=E,_c=u,po=null);break;case"focusout":po=_c=ts=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Rd(d,t,c);break;case"selectionchange":if(a_)break;case"keydown":case"keyup":Rd(d,t,c)}var T;if(wf)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else es?Rm(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Lm&&t.locale!=="ko"&&(es||S!=="onCompositionStart"?S==="onCompositionEnd"&&es&&(T=Pm()):(Di=c,xf="value"in Di?Di.value:Di.textContent,es=!0)),E=nl(u,S),0<E.length&&(S=new Md(S,n,null,t,c),d.push({event:S,listeners:E}),T?S.data=T:(T=Dm(t),T!==null&&(S.data=T)))),(T=Yv?Zv(n,t):Kv(n,t))&&(u=nl(u,"onBeforeInput"),0<u.length&&(c=new Md("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=T))}Hm(d,e)})}function Po(n,e,t){return{instance:n,listener:e,currentTarget:t}}function nl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Mo(n,t),s!=null&&i.unshift(Po(n,s,r)),s=Mo(n,e),s!=null&&i.push(Po(n,s,r))),n=n.return}return i}function Dr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function kd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Mo(t,s),l!=null&&o.unshift(Po(t,l,a))):r||(l=Mo(t,s),l!=null&&o.push(Po(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var f_=/\r\n?/g,d_=/\u0000|\uFFFD/g;function Nd(n){return(typeof n=="string"?n:""+n).replace(f_,`
`).replace(d_,"")}function ra(n,e,t){if(e=Nd(e),Nd(n)!==e&&t)throw Error(Q(425))}function il(){}var xc=null,Sc=null;function Mc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,p_=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(n){return zd.resolve(null).then(n).catch(m_)}:wc;function m_(n){setTimeout(function(){throw n})}function lu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Eo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Eo(e)}function Bi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Fd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Ds,Lo="__reactProps$"+Ds,vi="__reactContainer$"+Ds,bc="__reactEvents$"+Ds,g_="__reactListeners$"+Ds,v_="__reactHandles$"+Ds;function fr(n){var e=n[Kn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[vi]||t[Kn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Fd(n);n!==null;){if(t=n[Kn])return t;n=Fd(n)}return e}n=t,t=n.parentNode}return null}function Wo(n){return n=n[Kn]||n[vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Q(33))}function El(n){return n[Lo]||null}var Ec=[],rs=-1;function Ki(n){return{current:n}}function qe(n){0>rs||(n.current=Ec[rs],Ec[rs]=null,rs--)}function Xe(n,e){rs++,Ec[rs]=n.current,n.current=e}var qi={},Bt=Ki(qi),on=Ki(!1),xr=qi;function xs(n,e){var t=n.type.contextTypes;if(!t)return qi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function an(n){return n=n.childContextTypes,n!=null}function rl(){qe(on),qe(Bt)}function Ud(n,e,t){if(Bt.current!==qi)throw Error(Q(168));Xe(Bt,e),Xe(on,t)}function jm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,tv(n)||"Unknown",r));return tt({},t,i)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qi,xr=Bt.current,Xe(Bt,n),Xe(on,on.current),!0}function Od(n,e,t){var i=n.stateNode;if(!i)throw Error(Q(169));t?(n=jm(n,e,xr),i.__reactInternalMemoizedMergedChildContext=n,qe(on),qe(Bt),Xe(Bt,n)):qe(on),Xe(on,t)}var ci=null,Tl=!1,uu=!1;function $m(n){ci===null?ci=[n]:ci.push(n)}function __(n){Tl=!0,$m(n)}function Qi(){if(!uu&&ci!==null){uu=!0;var n=0,e=Ve;try{var t=ci;for(Ve=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ci=null,Tl=!1}catch(r){throw ci!==null&&(ci=ci.slice(n+1)),_m(gf,Qi),r}finally{Ve=e,uu=!1}}return null}var ss=[],os=0,ol=null,al=0,En=[],Tn=0,Sr=null,fi=1,di="";function or(n,e){ss[os++]=al,ss[os++]=ol,ol=n,al=e}function qm(n,e,t){En[Tn++]=fi,En[Tn++]=di,En[Tn++]=Sr,Sr=n;var i=fi;n=di;var r=32-Wn(i)-1;i&=~(1<<r),t+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-Wn(e)+r|t<<r|i,di=s+n}else fi=1<<s|t<<r|i,di=n}function Ef(n){n.return!==null&&(or(n,1),qm(n,1,0))}function Tf(n){for(;n===ol;)ol=ss[--os],ss[os]=null,al=ss[--os],ss[os]=null;for(;n===Sr;)Sr=En[--Tn],En[Tn]=null,di=En[--Tn],En[Tn]=null,fi=En[--Tn],En[Tn]=null}var _n=null,gn=null,Qe=!1,Bn=null;function Ym(n,e){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Bd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,_n=n,gn=Bi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,_n=n,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Sr!==null?{id:fi,overflow:di}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,_n=n,gn=null,!0):!1;default:return!1}}function Tc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cc(n){if(Qe){var e=gn;if(e){var t=e;if(!Bd(n,e)){if(Tc(n))throw Error(Q(418));e=Bi(t.nextSibling);var i=_n;e&&Bd(n,e)?Ym(i,t):(n.flags=n.flags&-4097|2,Qe=!1,_n=n)}}else{if(Tc(n))throw Error(Q(418));n.flags=n.flags&-4097|2,Qe=!1,_n=n}}}function Gd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_n=n}function sa(n){if(n!==_n)return!1;if(!Qe)return Gd(n),Qe=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Mc(n.type,n.memoizedProps)),e&&(e=gn)){if(Tc(n))throw Zm(),Error(Q(418));for(;e;)Ym(n,e),e=Bi(e.nextSibling)}if(Gd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Q(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){gn=Bi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}gn=null}}else gn=_n?Bi(n.stateNode.nextSibling):null;return!0}function Zm(){for(var n=gn;n;)n=Bi(n.nextSibling)}function Ss(){gn=_n=null,Qe=!1}function Cf(n){Bn===null?Bn=[n]:Bn.push(n)}var y_=Si.ReactCurrentBatchConfig;function Vs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Q(309));var i=t.stateNode}if(!i)throw Error(Q(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Q(284));if(!t._owner)throw Error(Q(290,n))}return n}function oa(n,e){throw n=Object.prototype.toString.call(e),Error(Q(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Vd(n){var e=n._init;return e(n._payload)}function Km(n){function e(g,v){if(n){var _=g.deletions;_===null?(g.deletions=[v],g.flags|=16):_.push(v)}}function t(g,v){if(!n)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=Hi(g,v),g.index=0,g.sibling=null,g}function s(g,v,_){return g.index=_,n?(_=g.alternate,_!==null?(_=_.index,_<v?(g.flags|=2,v):_):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,v,_,x){return v===null||v.tag!==6?(v=gu(_,g.mode,x),v.return=g,v):(v=r(v,_),v.return=g,v)}function l(g,v,_,x){var M=_.type;return M===Jr?c(g,v,_.props.children,x,_.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ai&&Vd(M)===v.type)?(x=r(v,_.props),x.ref=Vs(g,v,_),x.return=g,x):(x=ja(_.type,_.key,_.props,null,g.mode,x),x.ref=Vs(g,v,_),x.return=g,x)}function u(g,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=vu(_,g.mode,x),v.return=g,v):(v=r(v,_.children||[]),v.return=g,v)}function c(g,v,_,x,M){return v===null||v.tag!==7?(v=vr(_,g.mode,x,M),v.return=g,v):(v=r(v,_),v.return=g,v)}function d(g,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gu(""+v,g.mode,_),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yo:return _=ja(v.type,v.key,v.props,null,g.mode,_),_.ref=Vs(g,null,v),_.return=g,_;case Qr:return v=vu(v,g.mode,_),v.return=g,v;case Ai:var x=v._init;return d(g,x(v._payload),_)}if(io(v)||Fs(v))return v=vr(v,g.mode,_,null),v.return=g,v;oa(g,v)}return null}function f(g,v,_,x){var M=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:a(g,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return _.key===M?l(g,v,_,x):null;case Qr:return _.key===M?u(g,v,_,x):null;case Ai:return M=_._init,f(g,v,M(_._payload),x)}if(io(_)||Fs(_))return M!==null?null:c(g,v,_,x,null);oa(g,_)}return null}function p(g,v,_,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(_)||null,a(v,g,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yo:return g=g.get(x.key===null?_:x.key)||null,l(v,g,x,M);case Qr:return g=g.get(x.key===null?_:x.key)||null,u(v,g,x,M);case Ai:var E=x._init;return p(g,v,_,E(x._payload),M)}if(io(x)||Fs(x))return g=g.get(_)||null,c(v,g,x,M,null);oa(v,x)}return null}function y(g,v,_,x){for(var M=null,E=null,T=v,S=v=0,C=null;T!==null&&S<_.length;S++){T.index>S?(C=T,T=null):C=T.sibling;var P=f(g,T,_[S],x);if(P===null){T===null&&(T=C);break}n&&T&&P.alternate===null&&e(g,T),v=s(P,v,S),E===null?M=P:E.sibling=P,E=P,T=C}if(S===_.length)return t(g,T),Qe&&or(g,S),M;if(T===null){for(;S<_.length;S++)T=d(g,_[S],x),T!==null&&(v=s(T,v,S),E===null?M=T:E.sibling=T,E=T);return Qe&&or(g,S),M}for(T=i(g,T);S<_.length;S++)C=p(T,g,S,_[S],x),C!==null&&(n&&C.alternate!==null&&T.delete(C.key===null?S:C.key),v=s(C,v,S),E===null?M=C:E.sibling=C,E=C);return n&&T.forEach(function(F){return e(g,F)}),Qe&&or(g,S),M}function h(g,v,_,x){var M=Fs(_);if(typeof M!="function")throw Error(Q(150));if(_=M.call(_),_==null)throw Error(Q(151));for(var E=M=null,T=v,S=v=0,C=null,P=_.next();T!==null&&!P.done;S++,P=_.next()){T.index>S?(C=T,T=null):C=T.sibling;var F=f(g,T,P.value,x);if(F===null){T===null&&(T=C);break}n&&T&&F.alternate===null&&e(g,T),v=s(F,v,S),E===null?M=F:E.sibling=F,E=F,T=C}if(P.done)return t(g,T),Qe&&or(g,S),M;if(T===null){for(;!P.done;S++,P=_.next())P=d(g,P.value,x),P!==null&&(v=s(P,v,S),E===null?M=P:E.sibling=P,E=P);return Qe&&or(g,S),M}for(T=i(g,T);!P.done;S++,P=_.next())P=p(T,g,S,P.value,x),P!==null&&(n&&P.alternate!==null&&T.delete(P.key===null?S:P.key),v=s(P,v,S),E===null?M=P:E.sibling=P,E=P);return n&&T.forEach(function(H){return e(g,H)}),Qe&&or(g,S),M}function m(g,v,_,x){if(typeof _=="object"&&_!==null&&_.type===Jr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:e:{for(var M=_.key,E=v;E!==null;){if(E.key===M){if(M=_.type,M===Jr){if(E.tag===7){t(g,E.sibling),v=r(E,_.props.children),v.return=g,g=v;break e}}else if(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ai&&Vd(M)===E.type){t(g,E.sibling),v=r(E,_.props),v.ref=Vs(g,E,_),v.return=g,g=v;break e}t(g,E);break}else e(g,E);E=E.sibling}_.type===Jr?(v=vr(_.props.children,g.mode,x,_.key),v.return=g,g=v):(x=ja(_.type,_.key,_.props,null,g.mode,x),x.ref=Vs(g,v,_),x.return=g,g=x)}return o(g);case Qr:e:{for(E=_.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(g,v.sibling),v=r(v,_.children||[]),v.return=g,g=v;break e}else{t(g,v);break}else e(g,v);v=v.sibling}v=vu(_,g.mode,x),v.return=g,g=v}return o(g);case Ai:return E=_._init,m(g,v,E(_._payload),x)}if(io(_))return y(g,v,_,x);if(Fs(_))return h(g,v,_,x);oa(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(g,v.sibling),v=r(v,_),v.return=g,g=v):(t(g,v),v=gu(_,g.mode,x),v.return=g,g=v),o(g)):t(g,v)}return m}var Ms=Km(!0),Qm=Km(!1),ll=Ki(null),ul=null,as=null,Af=null;function Pf(){Af=as=ul=null}function Lf(n){var e=ll.current;qe(ll),n._currentValue=e}function Ac(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ms(n,e){ul=n,Af=as=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(sn=!0),n.firstContext=null)}function Rn(n){var e=n._currentValue;if(Af!==n)if(n={context:n,memoizedValue:e,next:null},as===null){if(ul===null)throw Error(Q(308));as=n,ul.dependencies={lanes:0,firstContext:n}}else as=as.next=n;return e}var dr=null;function Rf(n){dr===null?dr=[n]:dr.push(n)}function Jm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rf(e)):(t.next=r.next,r.next=t),e.interleaved=t,_i(n,i)}function _i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Pi=!1;function Df(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ie&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(n,t)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(n,t)}function Ba(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vf(n,t)}}function Wd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function cl(n,e,t,i){var r=n.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,h=a;switch(f=e,p=t,h.tag){case 1:if(y=h.payload,typeof y=="function"){d=y.call(p,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=h.payload,f=typeof y=="function"?y.call(p,d,f):y,f==null)break e;d=tt({},d,f);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=o,n.lanes=o,n.memoizedState=d}}function Hd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Ho={},ei=Ki(Ho),Ro=Ki(Ho),Do=Ki(Ho);function hr(n){if(n===Ho)throw Error(Q(174));return n}function If(n,e){switch(Xe(Do,e),Xe(Ro,n),Xe(ei,Ho),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=lc(e,n)}qe(ei),Xe(ei,e)}function ws(){qe(ei),qe(Ro),qe(Do)}function tg(n){hr(Do.current);var e=hr(ei.current),t=lc(e,n.type);e!==t&&(Xe(Ro,n),Xe(ei,t))}function kf(n){Ro.current===n&&(qe(ei),qe(Ro))}var Je=Ki(0);function fl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function Nf(){for(var n=0;n<cu.length;n++)cu[n]._workInProgressVersionPrimary=null;cu.length=0}var Ga=Si.ReactCurrentDispatcher,fu=Si.ReactCurrentBatchConfig,Mr=0,et=null,mt=null,Et=null,dl=!1,mo=!1,Io=0,x_=0;function It(){throw Error(Q(321))}function zf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!jn(n[t],e[t]))return!1;return!0}function Ff(n,e,t,i,r,s){if(Mr=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=n===null||n.memoizedState===null?b_:E_,n=t(i,r),mo){s=0;do{if(mo=!1,Io=0,25<=s)throw Error(Q(301));s+=1,Et=mt=null,e.updateQueue=null,Ga.current=T_,n=t(i,r)}while(mo)}if(Ga.current=hl,e=mt!==null&&mt.next!==null,Mr=0,Et=mt=et=null,dl=!1,e)throw Error(Q(300));return n}function Uf(){var n=Io!==0;return Io=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function Dn(){if(mt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var e=Et===null?et.memoizedState:Et.next;if(e!==null)Et=e,mt=n;else{if(n===null)throw Error(Q(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function ko(n,e){return typeof e=="function"?e(n):e}function du(n){var e=Dn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=mt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,et.lanes|=c,wr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,et.lanes|=s,wr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function hu(n){var e=Dn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function ng(){}function ig(n,e){var t=et,i=Dn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Of(og.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Et!==null&&Et.memoizedState.tag&1){if(t.flags|=2048,No(9,sg.bind(null,t,i,r,e),void 0,null),Tt===null)throw Error(Q(349));Mr&30||rg(t,e,r)}return r}function rg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function sg(n,e,t,i){e.value=t,e.getSnapshot=i,ag(e)&&lg(n)}function og(n,e,t){return t(function(){ag(e)&&lg(n)})}function ag(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!jn(n,t)}catch{return!0}}function lg(n){var e=_i(n,1);e!==null&&Hn(e,n,1,-1)}function Xd(n){var e=qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},e.queue=n,n=n.dispatch=w_.bind(null,et,n),[e.memoizedState,n]}function No(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ug(){return Dn().memoizedState}function Va(n,e,t,i){var r=qn();et.flags|=n,r.memoizedState=No(1|e,t,void 0,i===void 0?null:i)}function Cl(n,e,t,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(mt!==null){var o=mt.memoizedState;if(s=o.destroy,i!==null&&zf(i,o.deps)){r.memoizedState=No(e,t,s,i);return}}et.flags|=n,r.memoizedState=No(1|e,t,s,i)}function jd(n,e){return Va(8390656,8,n,e)}function Of(n,e){return Cl(2048,8,n,e)}function cg(n,e){return Cl(4,2,n,e)}function fg(n,e){return Cl(4,4,n,e)}function dg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function hg(n,e,t){return t=t!=null?t.concat([n]):null,Cl(4,4,dg.bind(null,e,n),t)}function Bf(){}function pg(n,e){var t=Dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function mg(n,e){var t=Dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function gg(n,e,t){return Mr&21?(jn(t,e)||(t=Sm(),et.lanes|=t,wr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,sn=!0),n.memoizedState=t)}function S_(n,e){var t=Ve;Ve=t!==0&&4>t?t:4,n(!0);var i=fu.transition;fu.transition={};try{n(!1),e()}finally{Ve=t,fu.transition=i}}function vg(){return Dn().memoizedState}function M_(n,e,t){var i=Wi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},_g(n))yg(e,t);else if(t=Jm(n,e,t,i),t!==null){var r=Kt();Hn(t,n,i,r),xg(t,e,i)}}function w_(n,e,t){var i=Wi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(_g(n))yg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Jm(n,e,r,i),t!==null&&(r=Kt(),Hn(t,n,i,r),xg(t,e,i))}}function _g(n){var e=n.alternate;return n===et||e!==null&&e===et}function yg(n,e){mo=dl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function xg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vf(n,t)}}var hl={readContext:Rn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},b_={readContext:Rn,useCallback:function(n,e){return qn().memoizedState=[n,e===void 0?null:e],n},useContext:Rn,useEffect:jd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Va(4194308,4,dg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Va(4194308,4,n,e)},useInsertionEffect:function(n,e){return Va(4,2,n,e)},useMemo:function(n,e){var t=qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=qn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=M_.bind(null,et,n),[i.memoizedState,n]},useRef:function(n){var e=qn();return n={current:n},e.memoizedState=n},useState:Xd,useDebugValue:Bf,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=Xd(!1),e=n[0];return n=S_.bind(null,n[1]),qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=et,r=qn();if(Qe){if(t===void 0)throw Error(Q(407));t=t()}else{if(t=e(),Tt===null)throw Error(Q(349));Mr&30||rg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,jd(og.bind(null,i,s,n),[n]),i.flags|=2048,No(9,sg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=qn(),e=Tt.identifierPrefix;if(Qe){var t=di,i=fi;t=(i&~(1<<32-Wn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Io++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=x_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},E_={readContext:Rn,useCallback:pg,useContext:Rn,useEffect:Of,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:du,useRef:ug,useState:function(){return du(ko)},useDebugValue:Bf,useDeferredValue:function(n){var e=Dn();return gg(e,mt.memoizedState,n)},useTransition:function(){var n=du(ko)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:vg,unstable_isNewReconciler:!1},T_={readContext:Rn,useCallback:pg,useContext:Rn,useEffect:Of,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:hu,useRef:ug,useState:function(){return hu(ko)},useDebugValue:Bf,useDeferredValue:function(n){var e=Dn();return mt===null?e.memoizedState=n:gg(e,mt.memoizedState,n)},useTransition:function(){var n=hu(ko)[0],e=Dn().memoizedState;return[n,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:vg,unstable_isNewReconciler:!1};function Un(n,e){if(n&&n.defaultProps){e=tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Pc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Al={isMounted:function(n){return(n=n._reactInternals)?Lr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Kt(),r=Wi(n),s=hi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Gi(n,s,r),e!==null&&(Hn(e,n,r,i),Ba(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Kt(),r=Wi(n),s=hi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Gi(n,s,r),e!==null&&(Hn(e,n,r,i),Ba(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Kt(),i=Wi(n),r=hi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(n,r,i),e!==null&&(Hn(e,n,i,t),Ba(e,n,i))}};function $d(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Co(t,i)||!Co(r,s):!0}function Sg(n,e,t){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=an(e)?xr:Bt.current,i=e.contextTypes,s=(i=i!=null)?xs(n,r):qi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function qd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Al.enqueueReplaceState(e,e.state,null)}function Lc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Df(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=an(e)?xr:Bt.current,r.context=xs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Al.enqueueReplaceState(r,r.state,null),cl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,e){try{var t="",i=e;do t+=ev(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function pu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Rc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function Mg(n,e,t){t=hi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ml||(ml=!0,Gc=i),Rc(n,e)},t}function wg(n,e,t){t=hi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Rc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Rc(n,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Yd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new C_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=G_.bind(null,n,e,t),e.then(n,n))}function Zd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Kd(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=hi(-1,1),e.tag=2,Gi(t,e,1))),t.lanes|=1),n)}var A_=Si.ReactCurrentOwner,sn=!1;function Yt(n,e,t,i){e.child=n===null?Qm(e,null,t,i):Ms(e,n.child,t,i)}function Qd(n,e,t,i,r){t=t.render;var s=e.ref;return ms(e,r),i=Ff(n,e,t,i,s,r),t=Uf(),n!==null&&!sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,yi(n,e,r)):(Qe&&t&&Ef(e),e.flags|=1,Yt(n,e,i,r),e.child)}function Jd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!qf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,bg(n,e,s,i,r)):(n=ja(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Co,t(o,i)&&n.ref===e.ref)return yi(n,e,r)}return e.flags|=1,n=Hi(s,i),n.ref=e.ref,n.return=e,e.child=n}function bg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Co(s,i)&&n.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(sn=!0);else return e.lanes=n.lanes,yi(n,e,r)}return Dc(n,e,t,i,r)}function Eg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(us,pn),pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Xe(us,pn),pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Xe(us,pn),pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Xe(us,pn),pn|=i;return Yt(n,e,r,t),e.child}function Tg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Dc(n,e,t,i,r){var s=an(t)?xr:Bt.current;return s=xs(e,s),ms(e,r),t=Ff(n,e,t,i,s,r),i=Uf(),n!==null&&!sn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,yi(n,e,r)):(Qe&&i&&Ef(e),e.flags|=1,Yt(n,e,t,r),e.child)}function eh(n,e,t,i,r){if(an(t)){var s=!0;sl(e)}else s=!1;if(ms(e,r),e.stateNode===null)Wa(n,e),Sg(e,t,i),Lc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=an(t)?xr:Bt.current,u=xs(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&qd(e,o,i,u),Pi=!1;var f=e.memoizedState;o.state=f,cl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||on.current||Pi?(typeof c=="function"&&(Pc(e,t,c,i),l=e.memoizedState),(a=Pi||$d(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,eg(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Un(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=an(t)?xr:Bt.current,l=xs(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&qd(e,o,i,l),Pi=!1,f=e.memoizedState,o.state=f,cl(e,i,o,r);var y=e.memoizedState;a!==d||f!==y||on.current||Pi?(typeof p=="function"&&(Pc(e,t,p,i),y=e.memoizedState),(u=Pi||$d(e,t,u,i,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Ic(n,e,t,i,s,r)}function Ic(n,e,t,i,r,s){Tg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Od(e,t,!1),yi(n,e,s);i=e.stateNode,A_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ms(e,n.child,null,s),e.child=Ms(e,null,a,s)):Yt(n,e,a,s),e.memoizedState=i.state,r&&Od(e,t,!0),e.child}function Cg(n){var e=n.stateNode;e.pendingContext?Ud(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ud(n,e.context,!1),If(n,e.containerInfo)}function th(n,e,t,i,r){return Ss(),Cf(r),e.flags|=256,Yt(n,e,t,i),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ag(n,e,t){var i=e.pendingProps,r=Je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Xe(Je,r&1),n===null)return Cc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,i,0,null),n=vr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Nc(t),e.memoizedState=kc,n):Gf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return P_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Hi(a,s):(s=vr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Nc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=kc,i}return s=n.child,n=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Gf(n,e){return e=Rl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function aa(n,e,t,i){return i!==null&&Cf(i),Ms(e,n.child,null,t),n=Gf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function P_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=pu(Error(Q(422))),aa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ms(e,n.child,null,o),e.child.memoizedState=Nc(o),e.memoizedState=kc,s);if(!(e.mode&1))return aa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=pu(s,i,void 0),aa(n,e,o,i)}if(a=(o&n.childLanes)!==0,sn||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(n,r),Hn(i,n,r,-1))}return $f(),i=pu(Error(Q(421))),aa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=V_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,gn=Bi(r.nextSibling),_n=e,Qe=!0,Bn=null,n!==null&&(En[Tn++]=fi,En[Tn++]=di,En[Tn++]=Sr,fi=n.id,di=n.overflow,Sr=e),e=Gf(e,i.children),e.flags|=4096,e)}function nh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ac(n.return,e,t)}function mu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Pg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(n,e,i.children,t),i=Je.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nh(n,t,e);else if(n.tag===19)nh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Xe(Je,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&fl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),mu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&fl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}mu(e,!0,t,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wa(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function yi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),wr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Q(153));if(e.child!==null){for(n=e.child,t=Hi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Hi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function L_(n,e,t){switch(e.tag){case 3:Cg(e),Ss();break;case 5:tg(e);break;case 1:an(e.type)&&sl(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xe(ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xe(Je,Je.current&1),e.flags|=128,null):t&e.child.childLanes?Ag(n,e,t):(Xe(Je,Je.current&1),n=yi(n,e,t),n!==null?n.sibling:null);Xe(Je,Je.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Pg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xe(Je,Je.current),i)break;return null;case 22:case 23:return e.lanes=0,Eg(n,e,t)}return yi(n,e,t)}var Lg,zc,Rg,Dg;Lg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};zc=function(){};Rg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,hr(ei.current);var s=null;switch(t){case"input":r=rc(n,r),i=rc(n,i),s=[];break;case"select":r=tt({},r,{value:void 0}),i=tt({},i,{value:void 0}),s=[];break;case"textarea":r=ac(n,r),i=ac(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=il)}uc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Dg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ws(n,e){if(!Qe)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function R_(n,e,t){var i=e.pendingProps;switch(Tf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return an(e.type)&&rl(),kt(e),null;case 3:return i=e.stateNode,ws(),qe(on),qe(Bt),Nf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(sa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(Hc(Bn),Bn=null))),zc(n,e),kt(e),null;case 5:kf(e);var r=hr(Do.current);if(t=e.type,n!==null&&e.stateNode!=null)Rg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return kt(e),null}if(n=hr(ei.current),sa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Lo]=s,n=(e.mode&1)!==0,t){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(r=0;r<so.length;r++)je(so[r],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":fd(i,s),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},je("invalid",i);break;case"textarea":hd(i,s),je("invalid",i)}uc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,n),r=["children",""+a]):xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",i)}switch(t){case"input":Zo(i),dd(i,s,!0);break;case"textarea":Zo(i),pd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=om(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Kn]=e,n[Lo]=i,Lg(n,e,!1,!1),e.stateNode=n;e:{switch(o=cc(t,i),t){case"dialog":je("cancel",n),je("close",n),r=i;break;case"iframe":case"object":case"embed":je("load",n),r=i;break;case"video":case"audio":for(r=0;r<so.length;r++)je(so[r],n);r=i;break;case"source":je("error",n),r=i;break;case"img":case"image":case"link":je("error",n),je("load",n),r=i;break;case"details":je("toggle",n),r=i;break;case"input":fd(n,i),r=rc(n,i),je("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=tt({},i,{value:void 0}),je("invalid",n);break;case"textarea":hd(n,i),r=ac(n,i),je("invalid",n);break;default:r=i}uc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?um(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&am(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&So(n,l):typeof l=="number"&&So(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",n):l!=null&&ff(n,s,l,o))}switch(t){case"input":Zo(n),dd(n,i,!1);break;case"textarea":Zo(n),pd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+$i(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?fs(n,!!i.multiple,s,!1):i.defaultValue!=null&&fs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=il)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(n&&e.stateNode!=null)Dg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(t=hr(Do.current),hr(ei.current),sa(e)){if(i=e.stateNode,t=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==t)&&(n=_n,n!==null))switch(n.tag){case 3:ra(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ra(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return kt(e),null;case 13:if(qe(Je),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&gn!==null&&e.mode&1&&!(e.flags&128))Zm(),Ss(),e.flags|=98560,s=!1;else if(s=sa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Kn]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Bn!==null&&(Hc(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Je.current&1?gt===0&&(gt=3):$f())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return ws(),zc(n,e),n===null&&Ao(e.stateNode.containerInfo),kt(e),null;case 10:return Lf(e.type._context),kt(e),null;case 17:return an(e.type)&&rl(),kt(e),null;case 19:if(qe(Je),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ws(s,!1);else{if(gt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=fl(n),o!==null){for(e.flags|=128,Ws(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Xe(Je,Je.current&1|2),e.child}n=n.sibling}s.tail!==null&&st()>Es&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(n=fl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return kt(e),null}else 2*st()-s.renderingStartTime>Es&&t!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=st(),e.sibling=null,t=Je.current,Xe(Je,i?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return jf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function D_(n,e){switch(Tf(e),e.tag){case 1:return an(e.type)&&rl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ws(),qe(on),qe(Bt),Nf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return kf(e),null;case 13:if(qe(Je),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));Ss()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return qe(Je),null;case 4:return ws(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var la=!1,Ot=!1,I_=typeof WeakSet=="function"?WeakSet:Set,ce=null;function ls(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){it(n,e,i)}else t.current=null}function Fc(n,e,t){try{t()}catch(i){it(n,e,i)}}var ih=!1;function k_(n,e){if(xc=el,n=Fm(),bf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sc={focusedElem:n,selectionRange:t},el=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){e=ce;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var h=y.memoizedProps,m=y.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Un(e.type,h),m);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(x){it(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}return y=ih,ih=!1,y}function go(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fc(e,t,s)}r=r.next}while(r!==i)}}function Pl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Uc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Ig(n){var e=n.alternate;e!==null&&(n.alternate=null,Ig(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Kn],delete e[Lo],delete e[bc],delete e[g_],delete e[v_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kg(n){return n.tag===5||n.tag===3||n.tag===4}function rh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=il));else if(i!==4&&(n=n.child,n!==null))for(Oc(n,e,t),n=n.sibling;n!==null;)Oc(n,e,t),n=n.sibling}function Bc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Bc(n,e,t),n=n.sibling;n!==null;)Bc(n,e,t),n=n.sibling}var Ct=null,On=!1;function wi(n,e,t){for(t=t.child;t!==null;)Ng(n,e,t),t=t.sibling}function Ng(n,e,t){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Sl,t)}catch{}switch(t.tag){case 5:Ot||ls(t,e);case 6:var i=Ct,r=On;Ct=null,wi(n,e,t),Ct=i,On=r,Ct!==null&&(On?(n=Ct,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ct.removeChild(t.stateNode));break;case 18:Ct!==null&&(On?(n=Ct,t=t.stateNode,n.nodeType===8?lu(n.parentNode,t):n.nodeType===1&&lu(n,t),Eo(n)):lu(Ct,t.stateNode));break;case 4:i=Ct,r=On,Ct=t.stateNode.containerInfo,On=!0,wi(n,e,t),Ct=i,On=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fc(t,e,o),r=r.next}while(r!==i)}wi(n,e,t);break;case 1:if(!Ot&&(ls(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){it(t,e,a)}wi(n,e,t);break;case 21:wi(n,e,t);break;case 22:t.mode&1?(Ot=(i=Ot)||t.memoizedState!==null,wi(n,e,t),Ot=i):wi(n,e,t);break;default:wi(n,e,t)}}function sh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new I_),e.forEach(function(i){var r=W_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function kn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,On=!1;break e;case 3:Ct=a.stateNode.containerInfo,On=!0;break e;case 4:Ct=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Ct===null)throw Error(Q(160));Ng(s,o,r),Ct=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){it(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zg(e,n),e=e.sibling}function zg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(kn(e,n),$n(n),i&4){try{go(3,n,n.return),Pl(3,n)}catch(h){it(n,n.return,h)}try{go(5,n,n.return)}catch(h){it(n,n.return,h)}}break;case 1:kn(e,n),$n(n),i&512&&t!==null&&ls(t,t.return);break;case 5:if(kn(e,n),$n(n),i&512&&t!==null&&ls(t,t.return),n.flags&32){var r=n.stateNode;try{So(r,"")}catch(h){it(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rm(r,s),cc(a,o);var u=cc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?um(r,d):c==="dangerouslySetInnerHTML"?am(r,d):c==="children"?So(r,d):ff(r,c,d,u)}switch(a){case"input":sc(r,s);break;case"textarea":sm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?fs(r,!!s.multiple,s.defaultValue,!0):fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Lo]=s}catch(h){it(n,n.return,h)}}break;case 6:if(kn(e,n),$n(n),i&4){if(n.stateNode===null)throw Error(Q(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){it(n,n.return,h)}}break;case 3:if(kn(e,n),$n(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(h){it(n,n.return,h)}break;case 4:kn(e,n),$n(n);break;case 13:kn(e,n),$n(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hf=st())),i&4&&sh(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Ot=(u=Ot)||c,kn(e,n),Ot=u):kn(e,n),$n(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ce=n,c=n.child;c!==null;){for(d=ce=c;ce!==null;){switch(f=ce,p=f.child,f.tag){case 0:case 11:case 14:case 15:go(4,f,f.return);break;case 1:ls(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(h){it(i,t,h)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){ah(d);continue}}p!==null?(p.return=f,ce=p):ah(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lm("display",o))}catch(h){it(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){it(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,n),$n(n),i&4&&sh(n);break;case 21:break;default:kn(e,n),$n(n)}}function $n(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(kg(t)){var i=t;break e}t=t.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(So(r,""),i.flags&=-33);var s=rh(n);Bc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rh(n);Oc(n,a,o);break;default:throw Error(Q(161))}}catch(l){it(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function N_(n,e,t){ce=n,Fg(n)}function Fg(n,e,t){for(var i=(n.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||la;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=la;var u=Ot;if(la=o,(Ot=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?lh(r):l!==null?(l.return=o,ce=l):lh(r);for(;s!==null;)ce=s,Fg(s),s=s.sibling;ce=r,la=a,Ot=u}oh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):oh(n)}}function oh(n){for(;ce!==null;){var e=ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Pl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Un(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Hd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Eo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Ot||e.flags&512&&Uc(e)}catch(f){it(e,e.return,f)}}if(e===n){ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function ah(n){for(;ce!==null;){var e=ce;if(e===n){ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ce=t;break}ce=e.return}}function lh(n){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Pl(4,e)}catch(l){it(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){it(e,r,l)}}var s=e.return;try{Uc(e)}catch(l){it(e,s,l)}break;case 5:var o=e.return;try{Uc(e)}catch(l){it(e,o,l)}}}catch(l){it(e,e.return,l)}if(e===n){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var z_=Math.ceil,pl=Si.ReactCurrentDispatcher,Vf=Si.ReactCurrentOwner,Ln=Si.ReactCurrentBatchConfig,Ie=0,Tt=null,dt=null,Lt=0,pn=0,us=Ki(0),gt=0,zo=null,wr=0,Ll=0,Wf=0,vo=null,rn=null,Hf=0,Es=1/0,ui=null,ml=!1,Gc=null,Vi=null,ua=!1,Ii=null,gl=0,_o=0,Vc=null,Ha=-1,Xa=0;function Kt(){return Ie&6?st():Ha!==-1?Ha:Ha=st()}function Wi(n){return n.mode&1?Ie&2&&Lt!==0?Lt&-Lt:y_.transition!==null?(Xa===0&&(Xa=Sm()),Xa):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Am(n.type)),n):1}function Hn(n,e,t,i){if(50<_o)throw _o=0,Vc=null,Error(Q(185));Go(n,t,i),(!(Ie&2)||n!==Tt)&&(n===Tt&&(!(Ie&2)&&(Ll|=t),gt===4&&Ri(n,Lt)),ln(n,i),t===1&&Ie===0&&!(e.mode&1)&&(Es=st()+500,Tl&&Qi()))}function ln(n,e){var t=n.callbackNode;yv(n,e);var i=Ja(n,n===Tt?Lt:0);if(i===0)t!==null&&vd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&vd(t),e===1)n.tag===0?__(uh.bind(null,n)):$m(uh.bind(null,n)),p_(function(){!(Ie&6)&&Qi()}),t=null;else{switch(Mm(i)){case 1:t=gf;break;case 4:t=ym;break;case 16:t=Qa;break;case 536870912:t=xm;break;default:t=Qa}t=Xg(t,Ug.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ug(n,e){if(Ha=-1,Xa=0,Ie&6)throw Error(Q(327));var t=n.callbackNode;if(gs()&&n.callbackNode!==t)return null;var i=Ja(n,n===Tt?Lt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=vl(n,i);else{e=i;var r=Ie;Ie|=2;var s=Bg();(Tt!==n||Lt!==e)&&(ui=null,Es=st()+500,gr(n,e));do try{O_();break}catch(a){Og(n,a)}while(!0);Pf(),pl.current=s,Ie=r,dt!==null?e=0:(Tt=null,Lt=0,e=gt)}if(e!==0){if(e===2&&(r=mc(n),r!==0&&(i=r,e=Wc(n,r))),e===1)throw t=zo,gr(n,0),Ri(n,i),ln(n,st()),t;if(e===6)Ri(n,i);else{if(r=n.current.alternate,!(i&30)&&!F_(r)&&(e=vl(n,i),e===2&&(s=mc(n),s!==0&&(i=s,e=Wc(n,s))),e===1))throw t=zo,gr(n,0),Ri(n,i),ln(n,st()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:ar(n,rn,ui);break;case 3:if(Ri(n,i),(i&130023424)===i&&(e=Hf+500-st(),10<e)){if(Ja(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Kt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wc(ar.bind(null,n,rn,ui),e);break}ar(n,rn,ui);break;case 4:if(Ri(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=st()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z_(i/1960))-i,10<i){n.timeoutHandle=wc(ar.bind(null,n,rn,ui),i);break}ar(n,rn,ui);break;case 5:ar(n,rn,ui);break;default:throw Error(Q(329))}}}return ln(n,st()),n.callbackNode===t?Ug.bind(null,n):null}function Wc(n,e){var t=vo;return n.current.memoizedState.isDehydrated&&(gr(n,e).flags|=256),n=vl(n,e),n!==2&&(e=rn,rn=t,e!==null&&Hc(e)),n}function Hc(n){rn===null?rn=n:rn.push.apply(rn,n)}function F_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(n,e){for(e&=~Wf,e&=~Ll,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Wn(e),i=1<<t;n[t]=-1,e&=~i}}function uh(n){if(Ie&6)throw Error(Q(327));gs();var e=Ja(n,0);if(!(e&1))return ln(n,st()),null;var t=vl(n,e);if(n.tag!==0&&t===2){var i=mc(n);i!==0&&(e=i,t=Wc(n,i))}if(t===1)throw t=zo,gr(n,0),Ri(n,e),ln(n,st()),t;if(t===6)throw Error(Q(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ar(n,rn,ui),ln(n,st()),null}function Xf(n,e){var t=Ie;Ie|=1;try{return n(e)}finally{Ie=t,Ie===0&&(Es=st()+500,Tl&&Qi())}}function br(n){Ii!==null&&Ii.tag===0&&!(Ie&6)&&gs();var e=Ie;Ie|=1;var t=Ln.transition,i=Ve;try{if(Ln.transition=null,Ve=1,n)return n()}finally{Ve=i,Ln.transition=t,Ie=e,!(Ie&6)&&Qi()}}function jf(){pn=us.current,qe(us)}function gr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,h_(t)),dt!==null)for(t=dt.return;t!==null;){var i=t;switch(Tf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rl();break;case 3:ws(),qe(on),qe(Bt),Nf();break;case 5:kf(i);break;case 4:ws();break;case 13:qe(Je);break;case 19:qe(Je);break;case 10:Lf(i.type._context);break;case 22:case 23:jf()}t=t.return}if(Tt=n,dt=n=Hi(n.current,null),Lt=pn=e,gt=0,zo=null,Wf=Ll=wr=0,rn=vo=null,dr!==null){for(e=0;e<dr.length;e++)if(t=dr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}dr=null}return n}function Og(n,e){do{var t=dt;try{if(Pf(),Ga.current=hl,dl){for(var i=et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}if(Mr=0,Et=mt=et=null,mo=!1,Io=0,Vf.current=null,t===null||t.return===null){gt=1,zo=e,dt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Zd(o);if(p!==null){p.flags&=-257,Kd(p,o,a,s,e),p.mode&1&&Yd(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var h=new Set;h.add(l),e.updateQueue=h}else y.add(l);break e}else{if(!(e&1)){Yd(s,u,e),$f();break e}l=Error(Q(426))}}else if(Qe&&a.mode&1){var m=Zd(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kd(m,o,a,s,e),Cf(bs(l,a));break e}}s=l=bs(l,a),gt!==4&&(gt=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Mg(s,l,e);Wd(s,g);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vi===null||!Vi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=wg(s,a,e);Wd(s,x);break e}}s=s.return}while(s!==null)}Vg(t)}catch(M){e=M,dt===t&&t!==null&&(dt=t=t.return);continue}break}while(!0)}function Bg(){var n=pl.current;return pl.current=hl,n===null?hl:n}function $f(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||!(wr&268435455)&&!(Ll&268435455)||Ri(Tt,Lt)}function vl(n,e){var t=Ie;Ie|=2;var i=Bg();(Tt!==n||Lt!==e)&&(ui=null,gr(n,e));do try{U_();break}catch(r){Og(n,r)}while(!0);if(Pf(),Ie=t,pl.current=i,dt!==null)throw Error(Q(261));return Tt=null,Lt=0,gt}function U_(){for(;dt!==null;)Gg(dt)}function O_(){for(;dt!==null&&!cv();)Gg(dt)}function Gg(n){var e=Hg(n.alternate,n,pn);n.memoizedProps=n.pendingProps,e===null?Vg(n):dt=e,Vf.current=null}function Vg(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=D_(t,e),t!==null){t.flags&=32767,dt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,dt=null;return}}else if(t=R_(t,e,pn),t!==null){dt=t;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=n}while(e!==null);gt===0&&(gt=5)}function ar(n,e,t){var i=Ve,r=Ln.transition;try{Ln.transition=null,Ve=1,B_(n,e,t,i)}finally{Ln.transition=r,Ve=i}return null}function B_(n,e,t,i){do gs();while(Ii!==null);if(Ie&6)throw Error(Q(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Q(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(xv(n,s),n===Tt&&(dt=Tt=null,Lt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ua||(ua=!0,Xg(Qa,function(){return gs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=Ve;Ve=1;var a=Ie;Ie|=4,Vf.current=null,k_(n,t),zg(t,n),o_(Sc),el=!!xc,Sc=xc=null,n.current=t,N_(t),fv(),Ie=a,Ve=o,Ln.transition=s}else n.current=t;if(ua&&(ua=!1,Ii=n,gl=r),s=n.pendingLanes,s===0&&(Vi=null),pv(t.stateNode),ln(n,st()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ml)throw ml=!1,n=Gc,Gc=null,n;return gl&1&&n.tag!==0&&gs(),s=n.pendingLanes,s&1?n===Vc?_o++:(_o=0,Vc=n):_o=0,Qi(),null}function gs(){if(Ii!==null){var n=Mm(gl),e=Ln.transition,t=Ve;try{if(Ln.transition=null,Ve=16>n?16:n,Ii===null)var i=!1;else{if(n=Ii,Ii=null,gl=0,Ie&6)throw Error(Q(331));var r=Ie;for(Ie|=4,ce=n.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:go(8,c,s)}var d=c.child;if(d!==null)d.return=c,ce=d;else for(;ce!==null;){c=ce;var f=c.sibling,p=c.return;if(Ig(c),c===u){ce=null;break}if(f!==null){f.return=p,ce=f;break}ce=p}}}var y=s.alternate;if(y!==null){var h=y.child;if(h!==null){y.child=null;do{var m=h.sibling;h.sibling=null,h=m}while(h!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ce=g;break e}ce=s.return}}var v=n.current;for(ce=v;ce!==null;){o=ce;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ce=_;else e:for(o=v;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pl(9,a)}}catch(M){it(a,a.return,M)}if(a===o){ce=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ce=x;break e}ce=a.return}}if(Ie=r,Qi(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Sl,n)}catch{}i=!0}return i}finally{Ve=t,Ln.transition=e}}return!1}function ch(n,e,t){e=bs(t,e),e=Mg(n,e,1),n=Gi(n,e,1),e=Kt(),n!==null&&(Go(n,1,e),ln(n,e))}function it(n,e,t){if(n.tag===3)ch(n,n,t);else for(;e!==null;){if(e.tag===3){ch(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){n=bs(t,n),n=wg(e,n,1),e=Gi(e,n,1),n=Kt(),e!==null&&(Go(e,1,n),ln(e,n));break}}e=e.return}}function G_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Kt(),n.pingedLanes|=n.suspendedLanes&t,Tt===n&&(Lt&t)===t&&(gt===4||gt===3&&(Lt&130023424)===Lt&&500>st()-Hf?gr(n,0):Wf|=t),ln(n,e)}function Wg(n,e){e===0&&(n.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var t=Kt();n=_i(n,e),n!==null&&(Go(n,e,t),ln(n,t))}function V_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Wg(n,t)}function W_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),Wg(n,t)}var Hg;Hg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return sn=!1,L_(n,e,t);sn=!!(n.flags&131072)}else sn=!1,Qe&&e.flags&1048576&&qm(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wa(n,e),n=e.pendingProps;var r=xs(e,Bt.current);ms(e,t),r=Ff(null,e,i,n,r,t);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=Al,e.stateNode=r,r._reactInternals=e,Lc(e,i,n,t),e=Ic(null,e,i,!0,s,t)):(e.tag=0,Qe&&s&&Ef(e),Yt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Wa(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=X_(i),n=Un(i,n),r){case 0:e=Dc(null,e,i,n,t);break e;case 1:e=eh(null,e,i,n,t);break e;case 11:e=Qd(null,e,i,n,t);break e;case 14:e=Jd(null,e,i,Un(i.type,n),t);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Dc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),eh(n,e,i,r,t);case 3:e:{if(Cg(e),n===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,eg(n,e),cl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(Q(423)),e),e=th(n,e,i,t,r);break e}else if(i!==r){r=bs(Error(Q(424)),e),e=th(n,e,i,t,r);break e}else for(gn=Bi(e.stateNode.containerInfo.firstChild),_n=e,Qe=!0,Bn=null,t=Qm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ss(),i===r){e=yi(n,e,t);break e}Yt(n,e,i,t)}e=e.child}return e;case 5:return tg(e),n===null&&Cc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Mc(i,r)?o=null:s!==null&&Mc(i,s)&&(e.flags|=32),Tg(n,e),Yt(n,e,o,t),e.child;case 6:return n===null&&Cc(e),null;case 13:return Ag(n,e,t);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ms(e,null,i,t):Yt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Qd(n,e,i,r,t);case 7:return Yt(n,e,e.pendingProps,t),e.child;case 8:return Yt(n,e,e.pendingProps.children,t),e.child;case 12:return Yt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Xe(ll,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!on.current){e=yi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ac(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ac(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,t),r=Rn(r),i=i(r),e.flags|=1,Yt(n,e,i,t),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Jd(n,e,i,r,t);case 15:return bg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Wa(n,e),e.tag=1,an(i)?(n=!0,sl(e)):n=!1,ms(e,t),Sg(e,i,r),Lc(e,i,r,t),Ic(null,e,i,!0,n,t);case 19:return Pg(n,e,t);case 22:return Eg(n,e,t)}throw Error(Q(156,e.tag))};function Xg(n,e){return _m(n,e)}function H_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,e,t,i){return new H_(n,e,t,i)}function qf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function X_(n){if(typeof n=="function")return qf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===hf)return 11;if(n===pf)return 14}return 2}function Hi(n,e){var t=n.alternate;return t===null?(t=Pn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ja(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")qf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Jr:return vr(t.children,r,s,e);case df:o=8,r|=8;break;case ec:return n=Pn(12,t,e,r|2),n.elementType=ec,n.lanes=s,n;case tc:return n=Pn(13,t,e,r),n.elementType=tc,n.lanes=s,n;case nc:return n=Pn(19,t,e,r),n.elementType=nc,n.lanes=s,n;case tm:return Rl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Jp:o=10;break e;case em:o=9;break e;case hf:o=11;break e;case pf:o=14;break e;case Ai:o=16,i=null;break e}throw Error(Q(130,n==null?n:typeof n,""))}return e=Pn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vr(n,e,t,i){return n=Pn(7,n,i,e),n.lanes=t,n}function Rl(n,e,t,i){return n=Pn(22,n,i,e),n.elementType=tm,n.lanes=t,n.stateNode={isHidden:!1},n}function gu(n,e,t){return n=Pn(6,n,null,e),n.lanes=t,n}function vu(n,e,t){return e=Pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function j_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yf(n,e,t,i,r,s,o,a,l){return n=new j_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),n}function $_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function jg(n){if(!n)return qi;n=n._reactInternals;e:{if(Lr(n)!==n||n.tag!==1)throw Error(Q(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(n.tag===1){var t=n.type;if(an(t))return jm(n,t,e)}return e}function $g(n,e,t,i,r,s,o,a,l){return n=Yf(t,i,!0,n,r,s,o,a,l),n.context=jg(null),t=n.current,i=Kt(),r=Wi(t),s=hi(i,r),s.callback=e??null,Gi(t,s,r),n.current.lanes=r,Go(n,r,i),ln(n,i),n}function Dl(n,e,t,i){var r=e.current,s=Kt(),o=Wi(r);return t=jg(t),e.context===null?e.context=t:e.pendingContext=t,e=hi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Gi(r,e,o),n!==null&&(Hn(n,r,o,s),Ba(n,r,o)),o}function _l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Zf(n,e){fh(n,e),(n=n.alternate)&&fh(n,e)}function q_(){return null}var qg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Kf(n){this._internalRoot=n}Il.prototype.render=Kf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Q(409));Dl(n,e,null,null)};Il.prototype.unmount=Kf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;br(function(){Dl(null,n,null,null)}),e[vi]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var e=Em();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Li.length&&e!==0&&e<Li[t].priority;t++);Li.splice(t,0,n),t===0&&Cm(n)}};function Qf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dh(){}function Y_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=_l(o);s.call(u)}}var o=$g(e,i,n,0,null,!1,!1,"",dh);return n._reactRootContainer=o,n[vi]=o.current,Ao(n.nodeType===8?n.parentNode:n),br(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_l(l);a.call(u)}}var l=Yf(n,0,!1,null,null,!1,!1,"",dh);return n._reactRootContainer=l,n[vi]=l.current,Ao(n.nodeType===8?n.parentNode:n),br(function(){Dl(e,l,t,i)}),l}function Nl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_l(o);a.call(l)}}Dl(e,o,n,r)}else o=Y_(t,e,n,r,i);return _l(o)}wm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ro(e.pendingLanes);t!==0&&(vf(e,t|1),ln(e,st()),!(Ie&6)&&(Es=st()+500,Qi()))}break;case 13:br(function(){var i=_i(n,1);if(i!==null){var r=Kt();Hn(i,n,1,r)}}),Zf(n,1)}};_f=function(n){if(n.tag===13){var e=_i(n,134217728);if(e!==null){var t=Kt();Hn(e,n,134217728,t)}Zf(n,134217728)}};bm=function(n){if(n.tag===13){var e=Wi(n),t=_i(n,e);if(t!==null){var i=Kt();Hn(t,n,e,i)}Zf(n,e)}};Em=function(){return Ve};Tm=function(n,e){var t=Ve;try{return Ve=n,e()}finally{Ve=t}};dc=function(n,e,t){switch(e){case"input":if(sc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=El(i);if(!r)throw Error(Q(90));im(i),sc(i,r)}}}break;case"textarea":sm(n,t);break;case"select":e=t.value,e!=null&&fs(n,!!t.multiple,e,!1)}};dm=Xf;hm=br;var Z_={usingClientEntryPoint:!1,Events:[Wo,is,El,cm,fm,Xf]},Hs={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K_={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gm(n),n===null?null:n.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{Sl=ca.inject(K_),Jn=ca}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;Sn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(Q(200));return $_(n,e,null,t)};Sn.createRoot=function(n,e){if(!Qf(n))throw Error(Q(299));var t=!1,i="",r=qg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yf(n,1,!1,null,null,t,!1,i,r),n[vi]=e.current,Ao(n.nodeType===8?n.parentNode:n),new Kf(e)};Sn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Q(188)):(n=Object.keys(n).join(","),Error(Q(268,n)));return n=gm(e),n=n===null?null:n.stateNode,n};Sn.flushSync=function(n){return br(n)};Sn.hydrate=function(n,e,t){if(!kl(e))throw Error(Q(200));return Nl(null,n,e,!0,t)};Sn.hydrateRoot=function(n,e,t){if(!Qf(n))throw Error(Q(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=qg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=$g(e,null,n,1,t??null,r,!1,s,o),n[vi]=e.current,Ao(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Il(e)};Sn.render=function(n,e,t){if(!kl(e))throw Error(Q(200));return Nl(null,n,e,!1,t)};Sn.unmountComponentAtNode=function(n){if(!kl(n))throw Error(Q(40));return n._reactRootContainer?(br(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[vi]=null})}),!0):!1};Sn.unstable_batchedUpdates=Xf;Sn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!kl(t))throw Error(Q(200));if(n==null||n._reactInternals===void 0)throw Error(Q(38));return Nl(n,e,t,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function Yg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yg)}catch(n){console.error(n)}}Yg(),Yp.exports=Sn;var Q_=Yp.exports,hh=Q_;Qu.createRoot=hh.createRoot,Qu.hydrateRoot=hh.hydrateRoot;var Zg={exports:{}},zl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=Se,ey=Symbol.for("react.element"),ty=Symbol.for("react.fragment"),ny=Object.prototype.hasOwnProperty,iy=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ry={key:!0,ref:!0,__self:!0,__source:!0};function Kg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ny.call(e,i)&&!ry.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ey,type:n,key:s,ref:o,props:r,_owner:iy.current}}zl.Fragment=ty;zl.jsx=Kg;zl.jsxs=Kg;Zg.exports=zl;var ft=Zg.exports;const sy=`
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}
  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;overflow-wrap:anywhere}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}
  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}
  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;function oy(n){const[e,t]=Ke.useState(n),i=Ke.useCallback((r,s)=>{const o=typeof r=="object"&&r!==null?r:{[r]:s};t(a=>({...a,...o})),window.parent.postMessage({type:"__edit_mode_set_keys",edits:o},"*"),window.dispatchEvent(new CustomEvent("tweakchange",{detail:o}))},[]);return[e,i]}function ay({title:n="Tweaks",children:e}){const[t,i]=Ke.useState(!1),r=Ke.useRef(null),s=Ke.useRef({x:16,y:16}),o=16,a=Ke.useCallback(()=>{const c=r.current;if(!c)return;const d=c.offsetWidth,f=c.offsetHeight,p=Math.max(o,window.innerWidth-d-o),y=Math.max(o,window.innerHeight-f-o);s.current={x:Math.min(p,Math.max(o,s.current.x)),y:Math.min(y,Math.max(o,s.current.y))},c.style.right=s.current.x+"px",c.style.bottom=s.current.y+"px"},[]);Ke.useEffect(()=>{if(!t)return;if(a(),typeof ResizeObserver>"u")return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);const c=new ResizeObserver(a);return c.observe(document.documentElement),()=>c.disconnect()},[t,a]),Ke.useEffect(()=>{const c=d=>{var p;const f=(p=d==null?void 0:d.data)==null?void 0:p.type;f==="__activate_edit_mode"?i(!0):f==="__deactivate_edit_mode"&&i(!1)};return window.addEventListener("message",c),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",c)},[]);const l=()=>{i(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},u=c=>{const d=r.current;if(!d)return;const f=d.getBoundingClientRect(),p=c.clientX,y=c.clientY,h=window.innerWidth-f.right,m=window.innerHeight-f.bottom,g=_=>{s.current={x:h-(_.clientX-p),y:m-(_.clientY-y)},a()},v=()=>{window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)};window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)};return t?ft.jsxs(ft.Fragment,{children:[ft.jsx("style",{children:sy}),ft.jsxs("div",{ref:r,className:"twk-panel","data-omelette-chrome":"",style:{right:s.current.x,bottom:s.current.y},children:[ft.jsxs("div",{className:"twk-hd",onMouseDown:u,children:[ft.jsx("b",{children:n}),ft.jsx("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:c=>c.stopPropagation(),onClick:l,children:"✕"})]}),ft.jsx("div",{className:"twk-body",children:e})]})]}):null}function ph({label:n,children:e}){return ft.jsxs(ft.Fragment,{children:[ft.jsx("div",{className:"twk-sect",children:n}),e]})}function Qg({label:n,value:e,children:t,inline:i=!1}){return ft.jsxs("div",{className:i?"twk-row twk-row-h":"twk-row",children:[ft.jsxs("div",{className:"twk-lbl",children:[ft.jsx("span",{children:n}),e!=null&&ft.jsx("span",{className:"twk-val",children:e})]}),t]})}function ly({label:n,value:e,min:t=0,max:i=100,step:r=1,unit:s="",onChange:o}){return ft.jsx(Qg,{label:n,value:`${e}${s}`,children:ft.jsx("input",{type:"range",className:"twk-slider",min:t,max:i,step:r,value:e,onChange:a=>o(Number(a.target.value))})})}function mh({label:n,value:e,options:t,onChange:i}){return ft.jsx(Qg,{label:n,children:ft.jsx("select",{className:"twk-field",value:e,onChange:r=>i(r.target.value),children:t.map(r=>{const s=typeof r=="object"?r.value:r,o=typeof r=="object"?r.label:r;return ft.jsx("option",{value:s,children:o},s)})})})}const lt=Ke.createElement;function uy(){const[n,e]=Se.useState(!1),[t,i]=Se.useState(!1),r=Se.useRef(null);Se.useEffect(()=>{function o(l){l.key==="Escape"&&e(!1)}function a(){i(window.scrollY>8)}return i(window.scrollY>8),document.addEventListener("keydown",o),window.addEventListener("scroll",a,{passive:!0}),()=>{document.removeEventListener("keydown",o),window.removeEventListener("scroll",a)}},[]),Se.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]);const s=()=>e(!1);return lt(Ke.Fragment,null,lt("nav",{className:"g-nav"+(t?" scrolled":""),id:"g-nav",ref:r},lt("a",{href:"/",className:"g-logo"},lt("img",{src:"assets/logo.svg",className:"logo-wordmark",alt:"Code Timur",height:30})),lt("div",{className:"g-nav-r"},lt("button",{className:"g-burger"+(n?" is-open":""),onClick:()=>e(o=>!o),"aria-label":"Меню","aria-expanded":n},lt("svg",{viewBox:"0 0 24 22",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.8",width:"24",height:"22"},lt("path",{className:"gb1",d:"M2,4 L22,4"}),lt("path",{className:"gb2",d:"M2,11 L22,11"}),lt("path",{className:"gb3",d:"M2,18 L22,18"}))))),lt("div",{className:"g-backdrop"+(n?" is-open":""),onClick:s}),lt("div",{className:"g-drawer"+(n?" is-open":"")},lt("nav",{className:"g-drawer-links"},lt("a",{href:"/apps/",onClick:s},"Экосистема"),lt("a",{href:"/mentorship/",onClick:s},"Наставничество"),lt("a",{href:"/teaching/",onClick:s},"Учение"),lt("a",{href:"/vision/",onClick:s},"Видение")),lt("a",{className:"g-drawer-tg",href:"https://t.me/codetimur",target:"_blank",rel:"noopener",onClick:s},lt("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"14",height:"14"},lt("path",{d:"M21.5 4.2 2.9 11.4c-1.3.5-1.3 1.2-.3 1.5l4.7 1.5 1.8 5.5c.2.6.4.8.8.8.4 0 .6-.2.8-.5l2.5-2.4 5.2 3.8c1 .5 1.6.3 1.9-.9l3.4-16c.4-1.5-.5-2.2-1.2-1.5z"})),"@codetimur")))}const fa=Ke.createElement;function cy({screens:n,screen:e,onJump:t}){return fa("div",{className:"rail"},n.map((i,r)=>fa("button",{key:r,className:"rail-step","data-on":e===r,"data-done":r<e,title:i.title,onClick:()=>t(r)},fa("span",{className:"rail-num"},String(r+1).padStart(2,"0")),fa("span",{className:"rail-dot"}))))}function Mi(n){const{active:e,init:t,frame:i,autostartMs:r=0,deps:s=[]}=n,o=Se.useRef(null),a=Se.useRef(null),l=Se.useRef(0),u=Se.useRef(0),c=Se.useRef({w:1,h:1});return Se.useEffect(()=>{const d=o.current;if(!d)return;const f=d.getContext("2d"),p=Math.min(window.devicePixelRatio||1,2);function y(){const m=d.getBoundingClientRect(),g=Math.max(1,m.width),v=Math.max(1,m.height);c.current={w:g,h:v},d.width=Math.round(g*p),d.height=Math.round(v*p),f.setTransform(p,0,0,p,0,0),a.current=t?t(f,g,v):{}}y();const h=new ResizeObserver(y);return h.observe(d),()=>{h.disconnect(),cancelAnimationFrame(l.current)}},s),Se.useEffect(()=>{const d=o.current;if(!d)return;const f=d.getContext("2d");let p=!0;u.current=performance.now();function y(h){if(!p)return;const{w:m,h:g}=c.current;m>0&&g>0&&i&&a.current&&i(f,m,g,(h-u.current)/1e3,a.current,e),l.current=requestAnimationFrame(y)}return(e||r)&&(l.current=requestAnimationFrame(y)),()=>{p=!1,cancelAnimationFrame(l.current)}},[e,...s]),o}const At=(n,e,t)=>n+(e-n)*t,We=(n,e,t)=>Math.max(e,Math.min(t,n)),Ut=(n,e)=>n+Math.random()*(e-n),xi=n=>1-Math.pow(1-n,3),Fl=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;const gh="232,199,154",fy="255,248,235";function Rr({active:n=!0,density:e=1,twinkle:t=!0,className:i="fx",style:r,radiusScale:s=1,dissolveRatio:o=0,yMax:a=1}){const l=Se.useRef(!1);Se.useEffect(()=>{l.current=n},[n]);const u=Mi({active:n,init:(c,d,f)=>{const p=Math.max(28,Math.round(d*f/5500*e)),y=Math.floor(p*o),h=new Set;if(y>0)for(;h.size<y;)h.add(Math.floor(Math.random()*p));const m=[];for(let g=0;g<p;g++){const _=Math.random()<.06,x=h.has(g);m.push({x:Math.random()*d,y:Math.random()*f*a,r:(_?1.1+Math.random()*.5:.3+Math.random()*.45)*s,phase:Math.random()*Math.PI*2,freq:.012+Math.random()*.022,peak:.22+Math.random()*.52,isBig:_,dissolves:x,dissolveDelay:x?Math.random()*2:0})}return{stars:m,dissolveStart:null,wasActive:!1}},frame:(c,d,f,p,y)=>{const h=l.current;h&&!y.wasActive&&(y.dissolveStart=p),h||(y.dissolveStart=null),y.wasActive=h,c.clearRect(0,0,d,f);for(const m of y.stars){let g=1;if(m.dissolves&&y.dissolveStart!==null){const x=p-y.dissolveStart-m.dissolveDelay;if(x>0&&(g=Math.max(0,1-xi(We(x/.9,0,1))),g<.01))continue}const _=(t?m.peak*(.38+.62*Math.sin(p*60*m.freq+m.phase)):m.peak)*g;if(!(_<.005)){if(m.isBig){const x=c.createRadialGradient(m.x,m.y,0,m.x,m.y,m.r*7);x.addColorStop(0,`rgba(${gh},${_*.28})`),x.addColorStop(1,`rgba(${gh},0)`),c.fillStyle=x,c.beginPath(),c.arc(m.x,m.y,m.r*7,0,Math.PI*2),c.fill()}c.fillStyle=`rgba(${fy},${_})`,c.beginPath(),c.arc(m.x,m.y,m.r,0,Math.PI*2),c.fill()}}}});return Ke.createElement("canvas",{ref:u,className:i,style:r})}function vh({active:n,density:e=1,xRange:t=[0,1],className:i="fx",style:r}){const s=t[0],o=t[1],a=o-s,l=Mi({active:!0,init:(u,c,d)=>{const f=Math.round(c*d*a/1e4*e),p=[];for(let y=0;y<f;y++)p.push({x:(s+Math.random()*a)*c,y:Math.random()*d,r:Ut(.5,2.4),vx:Ut(-.05,.05),vy:Ut(-.14,-.04),base:Ut(.07,.48),ph:Math.random()*Math.PI*2,sp:Ut(.25,.85),wobbleAmp:Ut(.02,.12),wobblePh:Math.random()*Math.PI*2,wobbleSp:Ut(.18,.55)});return{particles:p}},frame:(u,c,d,f,p)=>{u.clearRect(0,0,c,d);for(const y of p.particles){y.x+=y.vx+Math.sin(f*y.wobbleSp+y.wobblePh)*y.wobbleAmp,y.y+=y.vy,y.y<-12&&(y.y=d+8,y.x=(s+Math.random()*a)*c),y.x<s*c-12&&(y.x=o*c+12),y.x>o*c+12&&(y.x=s*c-12);const h=.5+.5*Math.sin(f*y.sp+y.ph),m=y.base*h;if(m<.01)continue;const g=u.createRadialGradient(y.x,y.y,0,y.x,y.y,y.r*3.8);g.addColorStop(0,`rgba(255,242,208,${Math.min(m,1)})`),g.addColorStop(.3,`rgba(221,189,125,${Math.min(m*.55,1)})`),g.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=g,u.beginPath(),u.arc(y.x,y.y,y.r*3.8,0,Math.PI*2),u.fill()}},deps:[s,o,e]});return Ke.createElement("canvas",{ref:l,className:i,style:r})}const Nt=Ke.createElement;function dy({active:n}){const e=typeof window<"u"&&window.innerWidth<720;return Nt("section",{className:"scene s1","data-active":n,"data-screen-label":"01"},Nt(Rr,{density:.7,twinkle:!0}),Nt(vh,{density:e?1.4:.84,style:{zIndex:4}}),Nt(vh,{density:e?3.2:1.92,xRange:[0,.52],style:{zIndex:4}}),Nt("div",{className:"s1-art"},Nt("div",{className:"portrait",style:{backgroundImage:'url("assets/portrait.png")'}})),Nt("div",{className:"scene-inner"},Nt("div",{className:"s1-copy"},Nt("div",{className:"overline rise d1"},"Код Тимура"),Nt("h1",{className:"display rise d2"},"Ускоритель ",Nt("br"),"твоего ",Nt("span",{className:"gold"},"развития")),Nt("p",{className:"lead rise d3"},"Пройди путь от исходного кода Вселенной до твоей личной трансформации через ясность, глубину и системный подход."))),Nt("div",{className:"s1-scroll-hint"},Nt("span",{className:"sh-label"},"Крути вниз"),Nt("div",{className:"sh-line"})))}const Xt=Ke.createElement;function hy(n,e,t,i,r,s){if(s){const o=n.createRadialGradient(e,t,0,e,t,s);o.addColorStop(0,r),o.addColorStop(1,"rgba(221,189,125,0)"),n.fillStyle=o,n.beginPath(),n.arc(e,t,s,0,Math.PI*2),n.fill()}n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fillStyle="#fff7e6",n.fill()}function py({active:n,sub:e}){const t=Se.useRef(e);Se.useEffect(()=>{t.current=e},[e]);const i=Mi({active:n,init:(r,s,o)=>{const a=s/2,l=o/2,u=Math.round(We(s*o/6500,90,240)),c=Math.min(s,o)*(s<720?.38:.46),d=[];for(let p=0;p<u;p++){const y=Math.random()*Math.PI*2,h=Math.pow(Math.random(),.62)*c;d.push({tx:Math.cos(y)*h,ty:Math.sin(y)*h,r:Ut(.6,1.8),ph:Math.random()*Math.PI*2,sp:Ut(.5,1.5)})}const f=[];for(let p=0;p<u;p++){const y=[];for(let h=0;h<u;h++)if(p!==h){const m=d[p].tx-d[h].tx,g=d[p].ty-d[h].ty;y.push([m*m+g*g,h])}y.sort((h,m)=>h[0]-m[0]);for(let h=0;h<2;h++)y[h]&&y[h][0]<(c*.5)**2&&f.push([p,y[h][1]])}return{P:d,links:f,prog:0,cx:a,cy:l,rot:0}},frame:(r,s,o,a,l)=>{const u=t.current>=1?1:0;l.prog+=(u-l.prog)*.045,l.rot+=.0012;const c=xi(We(l.prog,0,1)),d=s>900?s*.68:s*.5,f=s<720?o*.36:o/2;if(r.clearRect(0,0,s,o),c<.01)return;const p=Math.cos(l.rot),y=Math.sin(l.rot),h=l.P.map(m=>{const g=Math.sin(a*.3*m.sp+m.ph)*5,v=Math.cos(a*.3*m.sp+m.ph)*5,_=m.tx*p-m.ty*y,x=m.tx*y+m.ty*p;return[d+(_+g)*c,f+(x+v)*c]});for(let m=0;m<l.P.length;m++){const g=l.P[m],v=h[m],_=.55+.45*Math.sin(a*g.sp+g.ph);hy(r,v[0],v[1],g.r*(.7+.5*c),`rgba(255,247,230,${_*c})`,g.r*4*c*_)}},deps:[n]});return Xt("canvas",{ref:i,className:"fx"})}function my({active:n,sub:e}){return Xt("section",{className:"scene s2 center-scene","data-active":n,"data-sub":e,"data-screen-label":"02"},Xt(Rr,{density:.5}),Xt(py,{active:n,sub:e}),e===0?Xt("div",{className:"singularity"}):null,Xt("div",{className:"scene-inner"},Xt("div",{className:"cs-copy"},Xt("div",{className:"overline rise d1"},"02 — Исходный код"),Xt("h2",{className:"swap"},Xt("span",{className:"swap-item","data-show":e===0},"Принято считать, что наша Вселенная началась с ",Xt("em",{className:"gold-ital"},"Большого взрыва"),"."),Xt("span",{className:"swap-item","data-show":e===1},"Но развитие Вселенной — не случайность. У этой эволюции есть строгая формула: первоначальный Код, заданный ещё до начала времен.")))),Xt("div",{className:"s1-scroll-hint"},Xt("span",{className:"sh-label"},"Крути вниз"),Xt("div",{className:"sh-line"})))}const jt=Ke.createElement;function Xs(n,e,t,i,r,s){if(s){const o=n.createRadialGradient(e,t,0,e,t,s);o.addColorStop(0,r),o.addColorStop(1,"rgba(221,189,125,0)"),n.fillStyle=o,n.beginPath(),n.arc(e,t,s,0,Math.PI*2),n.fill()}n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fillStyle="#fff7e6",n.fill()}function gy({active:n,sub:e}){const t=Se.useRef(e),i=Se.useRef({t0:-1});Se.useEffect(()=>{t.current=e,e>=1&&i.current.t0<0&&(i.current.t0=performance.now()/1e3),e<1&&(i.current.t0=-1)},[e]);const r=Mi({active:n,init:(s,o,a)=>{const u=Math.min(o,a)*.26*.34,c=[];for(let d=0;d<65;d++){const f=Math.random()*Math.PI*2,p=Math.pow(Math.random(),.45)*u;c.push({tx:Math.cos(f)*p,ty:Math.sin(f)*p,r:Ut(.35,1.5),ph:Math.random()*Math.PI*2,sp:Ut(.4,1.2),oAng:Math.random()*Math.PI*2,oRadF:Ut(1.02,1.42),oSpin:Ut(.7,1.25)*(Math.random()<.5,1)})}return{cx:o/2,cy:a/2,appear:0,stars:c,starRot:0,contractProg:0}},frame:(s,o,a,l,u)=>{const c=o>900?o*.68:o*.5,d=o<720?a*.29:a/2;s.clearRect(0,0,o,a);const f=Math.min(o,a)*(o<720?.22:.26);if(t.current>=1&&i.current.t0>0){const v=performance.now()/1e3-i.current.t0,_=Fl(We(v/1.35,0,1)),x=xi(We((v-.18)/1.35,0,1)),M=_*(Math.PI/2),E=1+_*.07*Math.sin(l*1.8),T=(1-_*.46)*E,S=We(1-_*2.4,0,1),C=We((_-.35)/.65,0,1),P=.8+.2*Math.sin(l*1.6),F=v*.16,H=u.starRot||0,D=Math.cos(H),I=Math.sin(H);s.save();for(const W of u.stars){const K=W.tx*D-W.ty*I,L=W.tx*I+W.ty*D,B=W.oAng+F*W.oSpin,V=f*.92*W.oRadF,ne=Math.cos(B)*V,N=Math.sin(B)*V,q=At(K,ne,x),ee=At(L,N,x),ie=.55+.45*Math.sin(l*W.sp+W.ph);s.globalAlpha=ie*(.55+.45*x),Xs(s,c+q,d+ee,W.r*(1+x*.25),"#fff7e6",W.r*6)}s.globalAlpha=1,s.restore(),s.save(),s.translate(c,d),s.rotate(M),s.scale(T,T);const G=[];for(let W=0;W<3;W++){const K=-Math.PI/2+W*(Math.PI*2/3);G.push([Math.cos(K)*f,Math.sin(K)*f])}if(C>.01){s.save(),s.globalAlpha=C*.5,s.beginPath(),G.forEach((K,L)=>L?s.lineTo(K[0],K[1]):s.moveTo(K[0],K[1])),s.closePath();const W=s.createLinearGradient(-f,0,f,0);W.addColorStop(0,"rgba(232,199,154,0.7)"),W.addColorStop(1,"rgba(212,165,116,0.46)"),s.fillStyle=W,s.fill(),s.restore()}s.lineWidth=3.2,s.lineJoin="round",s.strokeStyle=`rgba(228,184,120,${.92*P})`,s.shadowColor="rgba(221,189,125,0.55)",s.shadowBlur=14,s.beginPath(),G.forEach((W,K)=>K?s.lineTo(W[0],W[1]):s.moveTo(W[0],W[1])),s.closePath(),s.stroke(),S>.02&&(s.globalAlpha=S,s.lineWidth=.8,s.strokeStyle=`rgba(221,189,125,${.3*P})`,s.shadowBlur=0,G.forEach(W=>{s.beginPath(),s.moveTo(0,0),s.lineTo(W[0],W[1]),s.stroke()}),G.forEach(W=>Xs(s,W[0],W[1],2.2,"#fff7e6",10)),s.globalAlpha=1),s.restore();return}u.contractProg<1&&(u.contractProg=Math.min(1,(u.contractProg||0)+.007));const y=xi(We(u.contractProg,0,1)),h=1+(1-y)*4.2,m=We((y-.5)/.5,0,1);u.appear=u.appear||0,u.appear+=(m-u.appear)*.055;const g=u.appear;if(u.stars){u.starRot=(u.starRot||0)+9e-4;const v=Math.cos(u.starRot),_=Math.sin(u.starRot),x=We(y*3,0,1);s.save(),y>.97&&(s.beginPath(),s.arc(c,d,f*.4,0,Math.PI*2),s.clip());for(const M of u.stars){const E=(M.tx*v-M.ty*_)*h,T=(M.tx*_+M.ty*v)*h,S=.5+.5*Math.sin(l*M.sp+M.ph);s.globalAlpha=S*x,Xs(s,c+E,d+T,M.r,"#fff7e6",M.r*5)}s.globalAlpha=1,s.restore()}if(g>.02){const v=.7+.3*Math.sin(l*1.6),_=[];for(let M=0;M<3;M++){const E=-Math.PI/2+M*(Math.PI*2/3);_.push([c+Math.cos(E)*f,d+Math.sin(E)*f])}const x=[c,d];s.save(),s.globalAlpha=g,s.lineWidth=1.2,s.strokeStyle=`rgba(221,189,125,${.55*v})`,s.shadowColor="rgba(221,189,125,0.6)",s.shadowBlur=14,s.beginPath(),_.forEach((M,E)=>E?s.lineTo(M[0],M[1]):s.moveTo(M[0],M[1])),s.closePath(),s.stroke(),s.lineWidth=.8,s.strokeStyle=`rgba(221,189,125,${.32*v})`,_.forEach(M=>{s.beginPath(),s.moveTo(x[0],x[1]),s.lineTo(M[0],M[1]),s.stroke()}),s.beginPath(),s.arc(c,d,f*.42,0,Math.PI*2),s.strokeStyle=`rgba(221,189,125,${.18*v})`,s.stroke(),s.shadowBlur=0,_.forEach(M=>Xs(s,M[0],M[1],2.4,"#fff7e6",12)),Xs(s,c,d,3,"#fff7e6",16),s.restore()}},deps:[n]});return jt("canvas",{ref:r,className:"fx"})}function vy({active:n,sub:e}){return jt("section",{className:"scene s3 center-scene","data-active":n,"data-sub":e,"data-screen-label":"03"},jt(Rr,{density:.55}),jt(gy,{active:n,sub:e}),jt("div",{className:"scene-inner"},jt("div",{className:"cs-copy"},jt("div",{className:"overline rise d1"},"03 — Правила игры"),jt("h2",{className:"swap"},jt("span",{className:"swap-item","data-show":e===0},"Эта формула заключена в триединую систему — универсальный код, объединяющий законы космоса и природу человека."),jt("span",{className:"swap-item","data-show":e===1},"Расшифровывая этот Код, я понял, что реальность — это игра. И зная её правила, ты перестаёшь быть персонажем и становишься активным ",jt("span",{className:"gold"},"Игроком"),".")),jt("a",{className:"btn btn--outline btn--detail",style:{pointerEvents:e===1?"auto":"none",marginTop:"2em",opacity:e===1?1:0,transform:e===1?"none":"translateY(10px)",transition:"opacity 0.65s var(--ease), transform 0.65s var(--ease)"},href:"#",onClick:t=>t.preventDefault()},jt("span",{className:"btn-sub"},"Подробнее про"),jt("span",{className:"btn-main"},"Систему «Я в игре»",jt("span",{className:"arr"},"→"))))))}const rt=Ke.createElement;function _h(n,e,t,i,r,s){const o=n.createRadialGradient(e,t,0,e,t,r);o.addColorStop(0,`rgba(232,199,154,${.4*s})`),o.addColorStop(.4,`rgba(212,165,116,${.12*s})`),o.addColorStop(1,"rgba(212,165,116,0)"),n.fillStyle=o,n.beginPath(),n.arc(e,t,r,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,248,235,${s})`,n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill()}function _y(n,e,t,i){n.save(),n.globalAlpha=i,n.shadowBlur=0;const r="rgba(195,190,182,0.13)",s=n.createLinearGradient(e*.229,t*.558,e*.229,t);s.addColorStop(0,"#1e1c2a"),s.addColorStop(1,"#0b0a13"),n.fillStyle=s,n.beginPath(),n.moveTo(e*-.028,t+2),n.lineTo(e*.229,t*.558),n.lineTo(e*.458,t+2),n.closePath(),n.fill(),n.strokeStyle=r,n.lineWidth=.8,n.beginPath(),n.moveTo(e*-.028,t+2),n.lineTo(e*.229,t*.558),n.stroke();const o=n.createLinearGradient(e*.792,t*.492,e*.792,t);o.addColorStop(0,"#1e1c2a"),o.addColorStop(1,"#0b0a13"),n.fillStyle=o,n.beginPath(),n.moveTo(e*.569,t+2),n.lineTo(e*.792,t*.492),n.lineTo(e*1.028,t+2),n.closePath(),n.fill(),n.strokeStyle=r,n.beginPath(),n.moveTo(e*.792,t*.492),n.lineTo(e*1.028,t+2),n.stroke(),n.restore()}function yy(n,e,t,i){n.save(),n.globalAlpha=i,n.shadowBlur=0;function r(s,o,a,l){const u=n.createLinearGradient(0,a*t,0,t);u.addColorStop(0,"rgba(33,30,46,0.97)"),u.addColorStop(.6,"rgba(24,21,33,0.97)"),u.addColorStop(1,"rgba(17,16,24,0.97)"),n.fillStyle=u,n.beginPath(),n.moveTo(s*e,t+2),n.lineTo(o*e,a*t),n.lineTo(l*e,t+2),n.closePath(),n.fill(),n.strokeStyle="rgba(232,199,154,0.13)",n.lineWidth=1.2,n.shadowColor="rgba(232,199,154,0.14)",n.shadowBlur=7,n.beginPath(),n.moveTo(s*e,t+2),n.lineTo(o*e,a*t),n.lineTo(l*e,t+2),n.stroke(),n.shadowBlur=0}r(-.1,.19,.52,.55),r(.46,.82,.47,1.1),n.restore()}function xy({active:n}){const e=Mi({active:n,init:(t,i,r)=>{const s=i>900?i*.68:i*.5,o=r/2,a=Math.min(i,r)*.26*.92,l=[];for(let u=0;u<38;u++){const c=u/38*Math.PI*2+(Math.random()-.5)*.4,d=a*(1.02+Math.random()*.38);l.push({sx:s+Math.cos(c)*d,sy:o+Math.sin(c)*d,tx:Math.random()*i,ty:Math.random()*r*.5,r:Ut(.4,1),ph:Math.random()*6.28,sp:Ut(.5,1.3),delay:Math.random()*.9})}return{stars:l}},frame:(t,i,r,s,o)=>{t.clearRect(0,0,i,r);const a=i>900?i*.68:i*.5,l=r/2,u=Math.min(i,r)*.26*.54,c=Fl(We(s/2.2,0,1)),d=[[a+u,l],[a-u*.5,l-u*.866],[a-u*.5,l+u*.866]],f=[[i*.514,r*.355],[i*.965,r+4],[i*.035,r+4]],p=d.map((_,x)=>[At(_[0],f[x][0],c),At(_[1],f[x][1],c)]),y=We((c-.52)/.48,0,1);y>.01&&yy(t,i,r,y),t.save();const h=t.createLinearGradient(p[0][0],p[0][1],(p[1][0]+p[2][0])*.5,r);h.addColorStop(0,"#272231"),h.addColorStop(.28,"#1c1926"),h.addColorStop(.68,"#15131c"),h.addColorStop(1,"#100f15"),t.beginPath(),t.moveTo(p[0][0],p[0][1]),t.lineTo(p[1][0],p[1][1]),t.lineTo(p[2][0],p[2][1]),t.closePath(),t.fillStyle=h,t.fill();const m=Math.max(0,1-c*1.65);if(m>.01){const _=.8+.2*Math.sin(s*1.6);t.strokeStyle=`rgba(228,184,120,${.92*m*_})`,t.lineWidth=3.2,t.lineJoin="round",t.shadowColor="rgba(221,189,125,0.55)",t.shadowBlur=14*m,t.beginPath(),t.moveTo(p[0][0],p[0][1]),t.lineTo(p[1][0],p[1][1]),t.lineTo(p[2][0],p[2][1]),t.closePath(),t.stroke()}const g=We((c-.25)/.75,0,1);if(g>.01){t.shadowColor="rgba(232,199,154,0.18)",t.shadowBlur=11*g,t.strokeStyle=`rgba(232,199,154,${.16*g})`,t.lineWidth=1.6,t.beginPath(),t.moveTo(p[2][0],p[2][1]),t.lineTo(p[0][0],p[0][1]),t.lineTo(p[1][0],p[1][1]),t.stroke(),t.shadowColor="rgba(150,180,225,0.16)",t.shadowBlur=8*g,t.strokeStyle=`rgba(150,180,225,${.22*g})`,t.lineWidth=1.2;const _=.34;t.beginPath(),t.moveTo(At(p[0][0],p[2][0],_),At(p[0][1],p[2][1],_)),t.lineTo(p[0][0],p[0][1]),t.lineTo(At(p[0][0],p[1][0],_),At(p[0][1],p[1][1],_)),t.stroke(),t.shadowBlur=0;const x=t.createRadialGradient(p[0][0],p[0][1],0,p[0][0],p[0][1],r*.11);x.addColorStop(0,`rgba(255,248,235,${.16*g})`),x.addColorStop(.2,`rgba(232,199,154,${.06*g})`),x.addColorStop(1,"rgba(232,199,154,0)"),t.fillStyle=x,t.beginPath(),t.arc(p[0][0],p[0][1],r*.11,0,Math.PI*2),t.fill()}t.restore();const v=We((c-.3)/.7,0,1);if(v>.01){const _=i<720?.3333333333333333:1,x=t.createRadialGradient(p[0][0],p[0][1],0,p[0][0],p[0][1],r*.13);x.addColorStop(0,`rgba(255,248,220,${.55*v*_})`),x.addColorStop(.25,`rgba(244,228,191,${.28*v*_})`),x.addColorStop(.7,`rgba(220,195,150,${.06*v*_})`),x.addColorStop(1,"rgba(220,195,150,0)"),t.fillStyle=x,t.beginPath(),t.arc(p[0][0],p[0][1],r*.13,0,Math.PI*2),t.fill()}for(const _ of o.stars){const x=xi(We((s-_.delay)/1.6,0,1));if(x<.01)continue;const M=At(_.sx,_.tx,x),E=At(_.sy,_.ty,x),T=.55+.45*Math.sin(s*_.sp+_.ph),S=x*T;if(S<.01)continue;const C=_.r*5*(1-x);if(C>.5){const P=t.createRadialGradient(M,E,0,M,E,C);P.addColorStop(0,`rgba(255,247,230,${.6*S*(1-x)})`),P.addColorStop(1,"rgba(221,189,125,0)"),t.fillStyle=P,t.beginPath(),t.arc(M,E,C,0,Math.PI*2),t.fill()}t.beginPath(),t.arc(M,E,_.r,0,Math.PI*2),t.fillStyle=`rgba(255,248,235,${S})`,t.fill()}},deps:[n]});return rt("canvas",{ref:e,className:"fx"})}const Xc={uma:{key:4,stars:[[.052,.205],[.092,.152],[.132,.128],[.172,.135],[.228,.118],[.238,.2],[.178,.212]],links:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]]},orion:{key:4,stars:[[.495,.085],[.452,.148],[.548,.14],[.474,.262],[.498,.272],[.522,.28],[.464,.408],[.556,.396],[.508,.33]],links:[[1,0],[0,2],[1,3],[2,5],[3,4],[4,5],[3,6],[5,7],[6,7],[4,8]]},pegasus:{key:1,stars:[[.742,.215],[.832,.178],[.858,.292],[.762,.322],[.872,.118],[.912,.088],[.944,.108],[.722,.415],[.842,.425]],links:[[0,1],[1,2],[2,3],[3,0],[1,4],[4,5],[5,6],[3,7],[2,8]]}},jc=["uma","orion","pegasus"];function yh(n,e,t,i,r){let s=null,o=r*r;for(const a of jc)for(const[l,u]of Xc[a].stars){const c=l*t-n,d=u*i-e,f=c*c+d*d;f<o&&(o=f,s=a)}return s}function Sy({active:n,constel:e,setConstel:t}){const i=Se.useRef(e),r=Se.useRef({uma:0,orion:0,pegasus:0});Se.useEffect(()=>{i.current=e},[e]);const s=Mi({active:n,init:()=>({meteor:null,next:2,tw:jc.reduce((l,u)=>(l[u]=Xc[u].stars.map(()=>({ph:Math.random()*6.28,sp:Ut(1.8,2.8)})),l),{})}),frame:(l,u,c,d,f)=>{l.clearRect(0,0,u,c);const p=r.current;for(const y of jc){const h=Xc[y],m=i.current===y?1:0;p[y]+=(m-p[y])*.055;const g=p[y],v=y==="uma"&&u<720?c*.14:0,_=h.stars.map(([E,T])=>[E*u,T*c+v]);if(g>.015){l.lineWidth=1;for(let E=0;E<h.links.length;E++){const T=We((g*1.45-E*.09)/.32,0,1);if(T<=0)continue;const[S,C]=h.links[E],P=_[S],F=_[C];l.strokeStyle=`rgba(228,196,134,${.5*T*g})`,l.shadowColor="rgba(221,189,125,0.5)",l.shadowBlur=6*T,l.beginPath(),l.moveTo(P[0],P[1]),l.lineTo(At(P[0],F[0],T),At(P[1],F[1],T)),l.stroke(),l.shadowBlur=0}}const x=u>900?u*.68:u*.5,M=c/2;for(let E=0;E<_.length;E++){const T=xi(We((d-2-E%4*.12)/1.3,0,1));if(T<=.001)continue;const S=At(x,_[E][0],T),C=At(M,_[E][1],T),P=f.tw[y][E],F=.55+.45*Math.sin(d*P.sp+P.ph),H=3+1.4*g;_h(l,S,C,H,H*(3.2+2*g),T*F*(.62+.38*g))}}if(!f.meteor&&d>f.next){const y=Math.random()<.5?-1:1,h=(.62+Math.random()*.16)*Math.PI/2,m=u*(.32+Math.random()*.16);f.meteor={x:(.18+Math.random()*.64)*u,y:(.04+Math.random()*.16)*c,vx:y*Math.cos(h)*m,vy:Math.sin(h)*m,born:d,life:.9+Math.random()*.4}}if(f.meteor){const y=f.meteor,h=d-y.born;if(h>y.life)f.meteor=null,f.next=d+7;else{const m=Math.sin(Math.PI*We(h/y.life,0,1)),g=y.x+y.vx*h,v=y.y+y.vy*h,_=130,x=y.vx/Math.hypot(y.vx,y.vy),M=y.vy/Math.hypot(y.vx,y.vy),E=g-x*_,T=v-M*_,S=l.createLinearGradient(g,v,E,T);S.addColorStop(0,`rgba(255,247,230,${.85*m})`),S.addColorStop(.4,`rgba(221,189,125,${.3*m})`),S.addColorStop(1,"rgba(221,189,125,0)"),l.strokeStyle=S,l.lineWidth=1.6,l.lineCap="round",l.beginPath(),l.moveTo(g,v),l.lineTo(E,T),l.stroke(),_h(l,g,v,1.6,9,m)}}},deps:[n]});return rt("canvas",{ref:s,className:"fx fx-nodes",onClick:l=>{const u=l.currentTarget.getBoundingClientRect(),c=l.clientX-u.left,d=l.clientY-u.top,f=yh(c,d,u.width,u.height,56);f&&t(p=>p===f?null:f)},onMouseMove:l=>{const u=l.currentTarget.getBoundingClientRect(),c=l.clientX-u.left,d=l.clientY-u.top;l.currentTarget.style.cursor=yh(c,d,u.width,u.height,56)?"pointer":"default"}})}const My={uma:["Ясность","Первый шаг в Игре. Инструменты, чтобы определить своё текущее состояние, понять правила реальности и увидеть цель."],orion:["Зрелость","Работа над состоянием и мышлением. Проекты, которые превращают твоего аватара в полноправного Игрока-создателя."],pegasus:["Влияние","Финальный квест Игры. Инструменты для создания глобальных сценариев и изменения реальности вокруг себя."]};function wy({active:n}){const[e,t]=Se.useState(null),[i,r]=Se.useState(!1);Se.useEffect(()=>{if(n){const a=setTimeout(()=>r(!0),2300);return()=>clearTimeout(a)}r(!1)},[n]);const s=e?My[e]:null,o=typeof window<"u"&&window.innerWidth<720;return rt("section",{className:"scene s4","data-active":n,"data-screen-label":"04"},rt(Rr,{density:o?.06:.12,twinkle:!0,radiusScale:.22,className:"fx fx-ambient",style:{WebkitMaskImage:"linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.35) 78%, transparent 100%)",maskImage:"linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.35) 78%, transparent 100%)"}}),rt(xy,{active:n}),rt(Sy,{active:n,constel:e,setConstel:t}),rt("div",{className:"scene-inner"},rt("div",{className:"s4-copy",style:{opacity:i?1:0,transform:i?"none":"translateY(18px)",transition:"opacity 0.9s var(--ease), transform 0.9s var(--ease)"}},rt("div",{className:"overline"},"04 — Экосистема"),rt("h2",null,"На основе этого Кода создана ",rt("em",null,"Единая экосистема")," из 30 IT-проектов в формате Игры."),s?rt("p",{className:"eco-dyn",key:e},rt("span",{className:"eco-label"},s[0],".")," ",s[1]):rt("p",{className:"eco-hint",key:"hint"},"На небе скрыты три созвездия — найди ключевые звёзды."),rt("a",{className:"btn btn--outline btn--detail",style:{pointerEvents:"auto",marginTop:"1.8em"},href:"https://codetimur.com/apps/",target:"_blank",rel:"noopener"},rt("span",{className:"btn-sub"},"Подробнее про"),rt("span",{className:"btn-main"},"Экосистему «Покори Олимп»",rt("span",{className:"arr"},"→"))))),rt("div",{className:"s1-scroll-hint s4-scroll-hint"},rt("span",{className:"sh-label"},"Прокручивай вниз"),rt("div",{className:"sh-line"})))}const $t=Ke.createElement;function by({active:n}){const e=Mi({active:n,init:(t,i,r)=>{function s(l,u,c,d,f){const p=1-l;return p*p*p*u+3*p*p*l*c+3*p*l*l*d+l*l*l*f}const o=[[[.26,.96],[.36,.87],[.55,.8],[.6,.73]],[[.6,.73],[.65,.66],[.57,.585],[.54,.56]],[[.54,.56],[.51,.535],[.62,.45],[.66,.4]],[[.66,.4],[.7,.35],[.69,.27],[.68,.19]]],a=[];for(const[l,u,c,d]of o)for(let f=0;f<=40;f++){const p=f/40;a.push([s(p,l[0],u[0],c[0],d[0]),s(p,l[1],u[1],c[1],d[1])])}return{trail:a,dotSpeeds:[.055,.068,.06,.048,.075,.063]}},frame:(t,i,r,s,o)=>{t.clearRect(0,0,i,r);const a=Fl(We(s/2.4,0,1)),l=[[i*.514,r*.253],[i*.861,r+4],[i*.167,r+4]],u=[[i*.68,r*.19],[i*1.042,r+4],[i*.208,r+4]],c=l.map((m,g)=>[At(m[0],u[g][0],a),At(m[1],u[g][1],a)]),d=We(1-s/.9,0,1);d>.01&&_y(t,i,r,d),t.save();const f=t.createLinearGradient(c[0][0],c[0][1],(c[1][0]+c[2][0])*.5,r);f.addColorStop(0,"rgba(30,28,42,1.0)"),f.addColorStop(.45,"rgba(20,18,30,1.0)"),f.addColorStop(1,"rgba(10,9,15,1.0)"),t.beginPath(),t.moveTo(c[0][0],c[0][1]),t.lineTo(c[1][0],c[1][1]),t.lineTo(c[2][0],c[2][1]),t.closePath(),t.fillStyle=f,t.fill();const p=We(a*2,0,1);p>.01&&(t.lineWidth=.8,t.shadowBlur=0,t.strokeStyle=`rgba(195,190,182,${.15*p})`,t.beginPath(),t.moveTo(c[0][0],c[0][1]),t.lineTo(c[1][0],c[1][1]),t.stroke(),t.strokeStyle=`rgba(195,190,182,${.1*p})`,t.beginPath(),t.moveTo(c[0][0],c[0][1]),t.lineTo(c[2][0],c[2][1]),t.stroke()),t.restore();const y=We((a-.3)/.7,0,1);if(y>.01){const m=t.createRadialGradient(c[0][0],c[0][1],0,c[0][0],c[0][1],r*.13);m.addColorStop(0,`rgba(255,248,220,${.55*y})`),m.addColorStop(.25,`rgba(244,228,191,${.28*y})`),m.addColorStop(.7,`rgba(220,195,150,${.06*y})`),m.addColorStop(1,"rgba(220,195,150,0)"),t.fillStyle=m,t.beginPath(),t.arc(c[0][0],c[0][1],r*.13,0,Math.PI*2),t.fill()}const h=xi(We((s-2.5)/1.4,0,1));if(h>.01&&o.trail.length>=2){const m=Math.max(2,Math.floor(o.trail.length*h)),g=t.createLinearGradient(0,o.trail[0][1]*r,0,o.trail[o.trail.length-1][1]*r);g.addColorStop(0,"rgba(221,189,125,0.15)"),g.addColorStop(1,"rgba(244,228,191,0.92)"),t.save(),t.strokeStyle=g,t.lineWidth=2.4,t.lineCap="round",t.lineJoin="round",t.shadowColor="rgba(221,189,125,0.6)",t.shadowBlur=6,t.beginPath(),t.moveTo(o.trail[0][0]*i,o.trail[0][1]*r);for(let v=1;v<m-1;v++){const _=(o.trail[v][0]+o.trail[v+1][0])*.5*i,x=(o.trail[v][1]+o.trail[v+1][1])*.5*r;t.quadraticCurveTo(o.trail[v][0]*i,o.trail[v][1]*r,_,x)}if(m>1&&t.lineTo(o.trail[m-1][0]*i,o.trail[m-1][1]*r),t.stroke(),t.restore(),h>.25){const v=o.trail.length-1;for(let _=0;_<6;_++){const x=(_/6+s*o.dotSpeeds[_])%1,M=Math.min(x*v,m-1),E=Math.floor(M),T=M-E,S=Math.min(E+1,m-1),C=o.trail[E],P=o.trail[S],F=(C[0]+(P[0]-C[0])*T)*i,H=(C[1]+(P[1]-C[1])*T)*r,D=.3+.7*(E/o.trail.length),I=.6+.4*Math.sin(s*2.2+_);t.save(),t.shadowColor="rgba(221,189,125,0.7)",t.shadowBlur=5,t.beginPath(),t.arc(F,H,2.6,0,Math.PI*2),t.fillStyle=`rgba(255,247,230,${D*I})`,t.fill(),t.restore()}}}},deps:[]});return $t("canvas",{ref:e,className:"fx"})}function Ey({active:n}){return $t("section",{className:"scene s5","data-active":n,"data-screen-label":"05"},$t(Rr,{active:n,density:.35,twinkle:!0,radiusScale:1.2,dissolveRatio:.5,yMax:.38}),$t(by,{active:n}),$t("div",{className:"scene-inner"},$t("div",{className:"s5-copy"},$t("div",{className:"overline rise d1"},"05 — Совместный путь"),$t("h2",{className:"display rise d2"},"Движение к ",$t("br"),"вершине ",$t("span",{className:"gold"},"Олимпа")),$t("p",{className:"lead rise d3"},"Знать код недостаточно. Мы объединяемся в Движение, чтобы вместе дойти до самой вершины и поддержать друг друга в пути."),$t("a",{className:"btn btn--outline btn--detail rise d4",href:"#",onClick:e=>e.preventDefault()},$t("span",{className:"btn-sub"},"Подробнее про"),$t("span",{className:"btn-main"},"Движение «Вершина Олимпа»",$t("span",{className:"arr"},"→"))))))}const ct=Ke.createElement;function Ty({active:n}){const e=Se.useRef(-1);Se.useEffect(()=>{e.current=n?performance.now()/1e3:-1},[n]);const t=Mi({active:!0,init:(i,r,s)=>{function o(u,c,d,f,p){const y=1-u;return y*y*y*c+3*y*y*u*d+3*y*u*u*f+u*u*u*p}const a=[[[.26,.96],[.36,.87],[.55,.8],[.6,.73]],[[.6,.73],[.65,.66],[.57,.585],[.54,.56]],[[.54,.56],[.51,.535],[.62,.45],[.66,.4]],[[.66,.4],[.7,.35],[.69,.27],[.68,.19]]],l=[];for(const[u,c,d,f]of a)for(let p=0;p<=40;p++){const y=p/40;l.push([o(y,u[0],c[0],d[0],f[0]),o(y,u[1],c[1],d[1],f[1])])}return{trail:l,dotSpeeds:[.055,.068,.06,.048,.075,.063]}},frame:(i,r,s,o,a)=>{i.clearRect(0,0,r,s);const l=e.current<0?-1:performance.now()/1e3-e.current;if(l<0)return;const u=Fl(We(l/1.6,0,1)),c=typeof window<"u"&&window.innerWidth<720,d=At(1,c?.56:.44,u),f=c?r*.72:r*.5;function p(T,S){return[f+(T*r-f)*d,s+(S*s-s)*d]}const y=p(.68,.19),h=p(.208,1),m=p(1.042,1);i.save(),i.globalAlpha=.88;const g=i.createLinearGradient(y[0],y[1],(h[0]+m[0])*.5,s);g.addColorStop(0,"rgba(30,28,42,1.0)"),g.addColorStop(.45,"rgba(20,18,30,1.0)"),g.addColorStop(1,"rgba(10,9,15,1.0)"),i.beginPath(),i.moveTo(y[0],y[1]),i.lineTo(h[0],h[1]),i.lineTo(m[0],m[1]),i.closePath(),i.fillStyle=g,i.fill(),i.lineWidth=1.2,i.strokeStyle="rgba(212,180,140,0.32)",i.beginPath(),i.moveTo(y[0],y[1]),i.lineTo(h[0],h[1]),i.stroke(),i.strokeStyle="rgba(212,180,140,0.24)",i.beginPath(),i.moveTo(y[0],y[1]),i.lineTo(m[0],m[1]),i.stroke(),i.restore();const v=s*.16*d,_=i.createRadialGradient(y[0],y[1],0,y[0],y[1],v);_.addColorStop(0,"rgba(255,252,230,0.80)"),_.addColorStop(.22,"rgba(244,228,191,0.45)"),_.addColorStop(.6,"rgba(220,195,150,0.10)"),_.addColorStop(1,"rgba(220,195,150,0)"),i.fillStyle=_,i.beginPath(),i.arc(y[0],y[1],v,0,Math.PI*2),i.fill();const x=a.trail.map(([T,S])=>p(T,S)),M=i.createLinearGradient(0,x[0][1],0,x[x.length-1][1]);M.addColorStop(0,"rgba(221,189,125,0.15)"),M.addColorStop(1,"rgba(244,228,191,0.92)"),i.save(),i.strokeStyle=M,i.lineWidth=Math.max(1.2,2.4*d),i.lineCap="round",i.lineJoin="round",i.shadowColor="rgba(221,189,125,0.6)",i.shadowBlur=6,i.beginPath(),i.moveTo(x[0][0],x[0][1]);for(let T=1;T<x.length-1;T++){const S=(x[T][0]+x[T+1][0])*.5,C=(x[T][1]+x[T+1][1])*.5;i.quadraticCurveTo(x[T][0],x[T][1],S,C)}i.lineTo(x[x.length-1][0],x[x.length-1][1]),i.stroke(),i.restore();const E=x.length-1;if(!(E<1))for(let T=0;T<6;T++){const S=(T/6+o*a.dotSpeeds[T])%1,C=Math.min(S*E,E),P=Math.max(0,Math.floor(C)),F=C-P,H=Math.min(P+1,E);if(!x[P]||!x[H])continue;const D=x[P][0]+(x[H][0]-x[P][0])*F,I=x[P][1]+(x[H][1]-x[P][1])*F,G=.3+.7*(P/E),W=.6+.4*Math.sin(o*2.2+T);i.save(),i.shadowColor="rgba(221,189,125,0.7)",i.shadowBlur=5,i.beginPath(),i.arc(D,I,Math.max(1.2,2.6*d),0,Math.PI*2),i.fillStyle=`rgba(255,247,230,${G*W})`,i.fill(),i.restore()}},deps:[n]});return ct("canvas",{ref:t,className:"fx",style:{zIndex:5}})}function Cy({active:n}){return ct("section",{className:"scene s6","data-active":n,"data-screen-label":"06"},ct("div",{style:{position:"absolute",inset:0,background:"#070707",zIndex:0}}),ct(Rr,{density:.3,twinkle:!0,radiusScale:.92,yMax:.55}),ct(Ty,{active:n}),ct("div",{className:"s6-fade-top"}),ct("div",{className:"s6-fade-bottom"}),ct("div",{className:"s6-portrait",style:{opacity:n?1:0,transition:"opacity 1.4s cubic-bezier(0.22,1,0.36,1) 0.8s"}},ct("img",{className:"s6-portrait-img",src:"assets/timur-portrait.png",alt:"Тимур"})),ct("div",{className:"scene-inner"},ct("div",{className:"s6-copy"},ct("div",{className:"overline rise d1"},"06 — Твой проводник"),ct("h2",{className:"display rise d2"},"Личная работа ",ct("br"),"с ",ct("span",{className:"gold"},"автором")," системы"),ct("p",{className:"lead rise d3"},"Я пропустил этот Код через себя. Как твой проводник, я помогу тебе увидеть твои слепые зоны и выстроить точный маршрут к вершине."),ct("a",{className:"btn btn--outline btn--detail rise d4",href:"https://codetimur.com/mentorship/",target:"_blank",rel:"noopener"},ct("span",{className:"btn-sub"},"Подробнее про"),ct("span",{className:"btn-main"},"Наставничество",ct("span",{className:"arr"},"→"))))))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="149",Ay=0,xh=1,Py=2,Jg=1,Ly=2,oo=3,Yi=0,yn=1,ki=2,Xi=0,vs=1,yo=2,Sh=3,Mh=4,Ry=5,Kr=100,Dy=101,Iy=102,wh=103,bh=104,ky=200,Ny=201,zy=202,Fy=203,e0=204,t0=205,Uy=206,Oy=207,By=208,Gy=209,Vy=210,Wy=0,Hy=1,Xy=2,$c=3,jy=4,$y=5,qy=6,Yy=7,n0=0,Zy=1,Ky=2,pi=0,Qy=1,Jy=2,ex=3,tx=4,nx=5,i0=300,Ts=301,Cs=302,qc=303,Yc=304,Ul=306,Zc=1e3,Gn=1001,Kc=1002,Zt=1003,Eh=1004,_u=1005,Cn=1006,ix=1007,Fo=1008,Er=1009,rx=1010,sx=1011,r0=1012,ox=1013,pr=1014,mr=1015,Uo=1016,ax=1017,lx=1018,_s=1020,ux=1021,Vn=1023,cx=1024,fx=1025,_r=1026,As=1027,dx=1028,hx=1029,px=1030,mx=1031,gx=1033,yu=33776,xu=33777,Su=33778,Mu=33779,Th=35840,Ch=35841,Ah=35842,Ph=35843,vx=36196,Lh=37492,Rh=37496,Dh=37808,Ih=37809,kh=37810,Nh=37811,zh=37812,Fh=37813,Uh=37814,Oh=37815,Bh=37816,Gh=37817,Vh=37818,Wh=37819,Hh=37820,Xh=37821,wu=36492,_x=36283,jh=36284,$h=36285,qh=36286,Tr=3e3,$e=3001,yx=3200,xx=3201,Sx=0,Mx=1,Yn="srgb",Oo="srgb-linear",bu=7680,wx=519,Qc=35044,Yh="300 es",Jc=1035;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=Math.PI/180,Zh=180/Math.PI;function ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function bx(n,e){return(n%e+e)%e}function Tu(n,e,t){return(1-t)*n+t*e}function Kh(n){return(n&n-1)===0&&n!==0}function ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function He(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(){vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],y=i[8],h=r[0],m=r[3],g=r[6],v=r[1],_=r[4],x=r[7],M=r[2],E=r[5],T=r[8];return s[0]=o*h+a*v+l*M,s[3]=o*m+a*_+l*E,s[6]=o*g+a*x+l*T,s[1]=u*h+c*v+d*M,s[4]=u*m+c*_+d*E,s[7]=u*g+c*x+d*T,s[2]=f*h+p*v+y*M,s[5]=f*m+p*_+y*E,s[8]=f*g+p*x+y*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,y=t*d+i*f+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/y;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=p*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new vn;function s0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Au={[Yn]:{[Oo]:yr},[Oo]:{[Yn]:$a}},Wt={legacyMode:!0,get workingColorSpace(){return Oo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Au[e]&&Au[e][t]!==void 0){const i=Au[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},o0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pt={r:0,g:0,b:0},Nn={h:0,s:0,l:0},da={h:0,s:0,l:0};function Pu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ha(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Wt.workingColorSpace){if(e=bx(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Pu(o,s,e+1/3),this.g=Pu(o,s,e),this.b=Pu(o,s,e-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(e,t=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Wt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Wt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Yn){const i=o0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Wt.fromWorkingColorSpace(ha(this,pt),e),mn(pt.r*255,0,255)<<16^mn(pt.g*255,0,255)<<8^mn(pt.b*255,0,255)<<0}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(ha(this,pt),t);const i=pt.r,r=pt.g,s=pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(ha(this,pt),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Yn){return Wt.fromWorkingColorSpace(ha(this,pt),e),e!==Yn?`color(${e} ${pt.r} ${pt.g} ${pt.b})`:`rgb(${pt.r*255|0},${pt.g*255|0},${pt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Nn),Nn.h+=e,Nn.s+=t,Nn.l+=i,this.setHSL(Nn.h,Nn.s,Nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(da);const i=Tu(Nn.h,da.h,t),r=Tu(Nn.s,da.s,t),s=Tu(Nn.l,da.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ge.NAMES=o0;let Ir;class a0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=yl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yr(t[i]/255)*255):t[i]=yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class l0{constructor(e=null){this.isSource=!0,this.uuid=ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lu(r[o].image)):s.push(Lu(r[o]))}else s=Lu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Lu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?a0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ex=0;class un extends Is{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=Gn,r=Gn,s=Cn,o=Fo,a=Vn,l=Er,u=un.DEFAULT_ANISOTROPY,c=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=ji(),this.name="",this.source=new l0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zc:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zc:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=i0;un.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],y=l[9],h=l[2],m=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(y-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,x=(p+1)/2,M=(g+1)/2,E=(c+f)/4,T=(d+h)/4,S=(y+m)/4;return _>x&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=T/i):x>M?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=E/r,s=S/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=T/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-y)*(m-y)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(d-h)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cr extends Is{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Cn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new l0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class u0 extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tx extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],y=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=y,e[t+3]=h;return}if(d!==h||l!==f||u!==p||c!==y){let m=1-a;const g=l*f+u*p+c*y+d*h,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const M=Math.sqrt(_),E=Math.atan2(M,g*v);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const x=a*v;if(l=l*m+f*x,u=u*m+p*x,c=c*m+y*x,d=d*m+h*x,m===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+c*d+l*p-u*f,e[t+1]=l*y+c*f+u*d-a*p,e[t+2]=u*y+c*p+a*f-l*d,e[t+3]=c*y-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*y,this._y=u*p*d-f*c*y,this._z=u*c*y+f*p*d,this._w=u*c*d-f*p*y;break;case"YXZ":this._x=f*c*d+u*p*y,this._y=u*p*d-f*c*y,this._z=u*c*y-f*p*d,this._w=u*c*d+f*p*y;break;case"ZXY":this._x=f*c*d-u*p*y,this._y=u*p*d+f*c*y,this._z=u*c*y+f*p*d,this._w=u*c*d-f*p*y;break;case"ZYX":this._x=f*c*d-u*p*y,this._y=u*p*d+f*c*y,this._z=u*c*y-f*p*d,this._w=u*c*d+f*p*y;break;case"YZX":this._x=f*c*d+u*p*y,this._y=u*p*d+f*c*y,this._z=u*c*y-f*p*d,this._w=u*c*d-f*p*y;break;case"XZY":this._x=f*c*d-u*p*y,this._y=u*p*d-f*c*y,this._z=u*c*y+f*p*d,this._w=u*c*d+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new U,Qh=new Xo;class jo{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ir.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ir.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ir)}else i.boundingBox===null&&i.computeBoundingBox(),Du.copy(i.boundingBox),Du.applyMatrix4(e.matrixWorld),this.union(Du);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ir),ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),pa.subVectors(this.max,js),kr.subVectors(e.a,js),Nr.subVectors(e.b,js),zr.subVectors(e.c,js),bi.subVectors(Nr,kr),Ei.subVectors(zr,Nr),rr.subVectors(kr,zr);let t=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-rr.z,rr.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,rr.z,0,-rr.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-rr.y,rr.x,0];return!Iu(t,kr,Nr,zr,pa)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,kr,Nr,zr,pa))?!1:(ma.crossVectors(bi,Ei),t=[ma.x,ma.y,ma.z],Iu(t,kr,Nr,zr,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ir.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ir).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new U,new U,new U,new U,new U,new U,new U,new U],ir=new U,Du=new jo,kr=new U,Nr=new U,zr=new U,bi=new U,Ei=new U,rr=new U,js=new U,pa=new U,ma=new U,sr=new U;function Iu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){sr.fromArray(n,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=t.dot(sr),c=i.dot(sr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Cx=new jo,$s=new U,ku=new U;class Ol{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(ku)),this.expandByPoint($s.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new U,Nu=new U,ga=new U,Ti=new U,zu=new U,va=new U,Fu=new U;class c0{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.direction).multiplyScalar(t).add(this.origin),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nu.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Nu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ga),a=Ti.dot(this.direction),l=-Ti.dot(ga),u=Ti.lengthSq(),c=Math.abs(1-o*o);let d,f,p,y;if(c>0)if(d=o*l-a,f=o*a-l,y=s*c,d>=0)if(f>=-y)if(f<=y){const h=1/c;d*=h,f*=h,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ga).multiplyScalar(f).add(Nu),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,r,s){zu.subVectors(t,e),va.subVectors(i,e),Fu.crossVectors(zu,va);let o=this.direction.dot(Fu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(Ti,va));if(l<0)return null;const u=a*this.direction.dot(zu.cross(Ti));if(u<0||l+u>o)return null;const c=-a*Ti.dot(Fu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,p,y,h,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=d,g[14]=f,g[3]=p,g[7]=y,g[11]=h,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,y=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+y*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=y+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,y=u*c,h=u*d;t[0]=f+h*a,t[4]=y*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-y,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,y=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,y=a*c,h=a*d;t[0]=l*c,t[4]=y*u-p,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=p*u-y,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,y=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=y*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+y,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,p=o*u,y=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=p*d-y,t[2]=y*d-p,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Px)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(i,dn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(i,dn)),Ci.normalize(),_a.crossVectors(dn,Ci),r[0]=Ci.x,r[4]=_a.x,r[8]=dn.x,r[1]=Ci.y,r[5]=_a.y,r[9]=dn.y,r[2]=Ci.z,r[6]=_a.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],y=i[2],h=i[6],m=i[10],g=i[14],v=i[3],_=i[7],x=i[11],M=i[15],E=r[0],T=r[4],S=r[8],C=r[12],P=r[1],F=r[5],H=r[9],D=r[13],I=r[2],G=r[6],W=r[10],K=r[14],L=r[3],B=r[7],V=r[11],ne=r[15];return s[0]=o*E+a*P+l*I+u*L,s[4]=o*T+a*F+l*G+u*B,s[8]=o*S+a*H+l*W+u*V,s[12]=o*C+a*D+l*K+u*ne,s[1]=c*E+d*P+f*I+p*L,s[5]=c*T+d*F+f*G+p*B,s[9]=c*S+d*H+f*W+p*V,s[13]=c*C+d*D+f*K+p*ne,s[2]=y*E+h*P+m*I+g*L,s[6]=y*T+h*F+m*G+g*B,s[10]=y*S+h*H+m*W+g*V,s[14]=y*C+h*D+m*K+g*ne,s[3]=v*E+_*P+x*I+M*L,s[7]=v*T+_*F+x*G+M*B,s[11]=v*S+_*H+x*W+M*V,s[15]=v*C+_*D+x*K+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],y=e[3],h=e[7],m=e[11],g=e[15];return y*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+h*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+g*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],y=e[12],h=e[13],m=e[14],g=e[15],v=d*m*u-h*f*u+h*l*p-a*m*p-d*l*g+a*f*g,_=y*f*u-c*m*u-y*l*p+o*m*p+c*l*g-o*f*g,x=c*h*u-y*d*u+y*a*p-o*h*p-c*a*g+o*d*g,M=y*d*l-c*h*l-y*a*f+o*h*f+c*a*m-o*d*m,E=t*v+i*_+r*x+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(h*f*s-d*m*s-h*r*p+i*m*p+d*r*g-i*f*g)*T,e[2]=(a*m*s-h*l*s+h*r*u-i*m*u-a*r*g+i*l*g)*T,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(c*m*s-y*f*s+y*r*p-t*m*p-c*r*g+t*f*g)*T,e[6]=(y*l*s-o*m*s-y*r*u+t*m*u+o*r*g-t*l*g)*T,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*T,e[8]=x*T,e[9]=(y*d*s-c*h*s-y*i*p+t*h*p+c*i*g-t*d*g)*T,e[10]=(o*h*s-y*a*s+y*i*u-t*h*u-o*i*g+t*a*g)*T,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*T,e[12]=M*T,e[13]=(c*h*r-y*d*r+y*i*f-t*h*f-c*i*m+t*d*m)*T,e[14]=(y*a*r-o*h*r-y*i*l+t*h*l+o*i*m-t*a*m)*T,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,y=s*d,h=o*c,m=o*d,g=a*d,v=l*u,_=l*c,x=l*d,M=i.x,E=i.y,T=i.z;return r[0]=(1-(h+g))*M,r[1]=(p+x)*M,r[2]=(y-_)*M,r[3]=0,r[4]=(p-x)*E,r[5]=(1-(f+g))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(y+_)*T,r[9]=(m-v)*T,r[10]=(1-(f+h))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,c=1/o,d=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,p=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fr=new U,zn=new vt,Ax=new U(0,0,0),Px=new U(1,1,1),Ci=new U,_a=new U,dn=new U,Jh=new vt,ep=new Xo;class Bl{constructor(e=0,t=0,i=0,r=Bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bl.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lx=0;const tp=new U,Ur=new Xo,oi=new vt,ya=new U,qs=new U,Rx=new U,Dx=new Xo,np=new U(1,0,0),ip=new U(0,1,0),rp=new U(0,0,1),Ix={type:"added"},sp={type:"removed"};class Qt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new U,t=new Bl,i=new Xo,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new vn}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ya.copy(e):ya.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(qs,ya,this.up):oi.lookAt(ya,qs,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(oi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ix)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new U(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new U,ai=new U,Uu=new U,li=new U,Or=new U,Br=new U,op=new U,Ou=new U,Bu=new U,Gu=new U;class Qn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Fn.subVectors(r,t),ai.subVectors(i,t),Uu.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(ai),l=Fn.dot(Uu),u=ai.dot(ai),c=ai.dot(Uu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(u*l-a*c)*f,y=(o*c-a*l)*f;return s.set(1-p-y,y,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,li),li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,li),l.set(0,0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l}static isFrontFacing(e,t,i,r){return Fn.subVectors(i,t),ai.subVectors(e,t),Fn.cross(ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Br.subVectors(s,i),Ou.subVectors(e,i);const l=Or.dot(Ou),u=Br.dot(Ou);if(l<=0&&u<=0)return t.copy(i);Bu.subVectors(e,r);const c=Or.dot(Bu),d=Br.dot(Bu);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Or,o);Gu.subVectors(e,s);const p=Or.dot(Gu),y=Br.dot(Gu);if(y>=0&&p<=y)return t.copy(s);const h=p*u-l*y;if(h<=0&&u>=0&&y<=0)return a=u/(u-y),t.copy(i).addScaledVector(Br,a);const m=c*y-p*d;if(m<=0&&d-c>=0&&p-y>=0)return op.subVectors(s,r),a=(d-c)/(d-c+(p-y)),t.copy(r).addScaledVector(op,a);const g=1/(m+h+f);return o=h*g,a=f*g,t.copy(i).addScaledVector(Or,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kx=0;class ks extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=vs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=e0,this.blendDst=t0,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bu,this.stencilZFail=bu,this.stencilZPass=bu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class d0 extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=n0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new U,xa=new ke;class Xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class h0 extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class p0 extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mi extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nx=0;const bn=new vt,Vu=new Qt,Gr=new U,hn=new jo,Ys=new jo,bt=new U;class ti extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?p0:h0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(hn.min,Ys.min),hn.expandByPoint(bt),bt.addVectors(hn.max,Ys.max),hn.expandByPoint(bt)):(hn.expandByPoint(Ys.min),hn.expandByPoint(Ys.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(Gr.fromBufferAttribute(e,u),bt.add(Gr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new U,c[P]=new U;const d=new U,f=new U,p=new U,y=new ke,h=new ke,m=new ke,g=new U,v=new U;function _(P,F,H){d.fromArray(r,P*3),f.fromArray(r,F*3),p.fromArray(r,H*3),y.fromArray(o,P*2),h.fromArray(o,F*2),m.fromArray(o,H*2),f.sub(d),p.sub(d),h.sub(y),m.sub(y);const D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(g.copy(f).multiplyScalar(m.y).addScaledVector(p,-h.y).multiplyScalar(D),v.copy(p).multiplyScalar(h.x).addScaledVector(f,-m.x).multiplyScalar(D),u[P].add(g),u[F].add(g),u[H].add(g),c[P].add(v),c[F].add(v),c[H].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let P=0,F=x.length;P<F;++P){const H=x[P],D=H.start,I=H.count;for(let G=D,W=D+I;G<W;G+=3)_(i[G+0],i[G+1],i[G+2])}const M=new U,E=new U,T=new U,S=new U;function C(P){T.fromArray(s,P*3),S.copy(T);const F=u[P];M.copy(F),M.sub(T.multiplyScalar(T.dot(F))).normalize(),E.crossVectors(S,F);const D=E.dot(c[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=D}for(let P=0,F=x.length;P<F;++P){const H=x[P],D=H.start,I=H.count;for(let G=D,W=D+I;G<W;G+=3)C(i[G+0]),C(i[G+1]),C(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,d=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const y=e.getX(f+0),h=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,y=0;for(let h=0,m=l.length;h<m;h++){a.isInterleavedBufferAttribute?p=l[h]*a.data.stride+a.offset:p=l[h]*c;for(let g=0;g<c;g++)f[y++]=u[p++]}return new Xn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ap=new vt,Vr=new c0,Wu=new Ol,Zs=new U,Ks=new U,Qs=new U,Hu=new U,Sa=new U,Ma=new ke,wa=new ke,ba=new ke,Xu=new U,Ea=new U;class zi extends Qt{constructor(e=new ti,t=new d0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Hu.fromBufferAttribute(d,e),o?Sa.addScaledVector(Hu,c):Sa.addScaledVector(Hu.sub(t),c))}t.add(Sa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Wu.copy(i.boundingSphere),Wu.applyMatrix4(s),e.ray.intersectsSphere(Wu)===!1)||(ap.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(ap),i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,y=d.length;p<y;p++){const h=d[p],m=r[h.materialIndex],g=Math.max(h.start,f.start),v=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=g,x=v;_<x;_+=3){const M=a.getX(_),E=a.getX(_+1),T=a.getX(_+2);o=Ta(this,m,e,Vr,u,c,M,E,T),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let h=p,m=y;h<m;h+=3){const g=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);o=Ta(this,r,e,Vr,u,c,g,v,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,y=d.length;p<y;p++){const h=d[p],m=r[h.materialIndex],g=Math.max(h.start,f.start),v=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=g,x=v;_<x;_+=3){const M=_,E=_+1,T=_+2;o=Ta(this,m,e,Vr,u,c,M,E,T),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let h=p,m=y;h<m;h+=3){const g=h,v=h+1,_=h+2;o=Ta(this,r,e,Vr,u,c,g,v,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function zx(n,e,t,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ea);return u<t.near||u>t.far?null:{distance:u,point:Ea.clone(),object:n}}function Ta(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Zs),n.getVertexPosition(a,Ks),n.getVertexPosition(l,Qs);const u=zx(n,e,t,i,Zs,Ks,Qs,Xu);if(u){r&&(Ma.fromBufferAttribute(r,o),wa.fromBufferAttribute(r,a),ba.fromBufferAttribute(r,l),u.uv=Qn.getUV(Xu,Zs,Ks,Qs,Ma,wa,ba,new ke)),s&&(Ma.fromBufferAttribute(s,o),wa.fromBufferAttribute(s,a),ba.fromBufferAttribute(s,l),u.uv2=Qn.getUV(Xu,Zs,Ks,Qs,Ma,wa,ba,new ke));const c={a:o,b:a,c:l,normal:new U,materialIndex:0};Qn.getNormal(Zs,Ks,Qs,c.normal),u.face=c}return u}class $o extends ti{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mi(u,3)),this.setAttribute("normal",new mi(c,3)),this.setAttribute("uv",new mi(d,2));function y(h,m,g,v,_,x,M,E,T,S,C){const P=x/T,F=M/S,H=x/2,D=M/2,I=E/2,G=T+1,W=S+1;let K=0,L=0;const B=new U;for(let V=0;V<W;V++){const ne=V*F-D;for(let N=0;N<G;N++){const q=N*P-H;B[h]=q*v,B[m]=ne*_,B[g]=I,u.push(B.x,B.y,B.z),B[h]=0,B[m]=0,B[g]=E>0?1:-1,c.push(B.x,B.y,B.z),d.push(N/T),d.push(1-V/S),K+=1}}for(let V=0;V<S;V++)for(let ne=0;ne<T;ne++){const N=f+ne+G*V,q=f+ne+G*(V+1),ee=f+(ne+1)+G*(V+1),ie=f+(ne+1)+G*V;l.push(N,q,ie),l.push(q,ee,ie),L+=6}a.addGroup(p,L,C),p+=L,f+=K}}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Fx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function m0(n){return n.getRenderTarget()===null&&n.outputEncoding===$e?Yn:Oo}const Ux={clone:Ps,merge:qt};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class g0 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends g0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(Eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,Hr=1;class Gx extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new An(Wr,Hr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new An(Wr,Hr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new An(Wr,Hr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new An(Wr,Hr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new An(Wr,Hr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new An(Wr,Hr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=pi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class v0 extends un{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vx extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new v0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $o(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Xi});s.uniforms.tEquirect.value=t;const o=new zi(r,s),a=t.minFilter;return t.minFilter===Fo&&(t.minFilter=Cn),new Gx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ju=new U,Wx=new U,Hx=new vn;class lr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ju.subVectors(i,t).cross(Wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hx.getNormalMatrix(e),r=this.coplanarPoint(ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Ol,Ca=new U;class _0{constructor(e=new lr,t=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],p=i[9],y=i[10],h=i[11],m=i[12],g=i[13],v=i[14],_=i[15];return t[0].setComponents(a-r,d-l,h-f,_-m).normalize(),t[1].setComponents(a+r,d+l,h+f,_+m).normalize(),t[2].setComponents(a+s,d+u,h+p,_+g).normalize(),t[3].setComponents(a-s,d-u,h-p,_-g).normalize(),t[4].setComponents(a-o,d-c,h-y,_-v).normalize(),t[5].setComponents(a+o,d+c,h+y,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,f),u.onUploadCallback();let y;if(d instanceof Float32Array)y=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(d instanceof Int16Array)y=5122;else if(d instanceof Uint32Array)y=5125;else if(d instanceof Int32Array)y=5124;else if(d instanceof Int8Array)y=5120;else if(d instanceof Uint8Array)y=5121;else if(d instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,p=c.updateRange;n.bindBuffer(d,u),p.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class ed extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],y=[],h=[],m=[];for(let g=0;g<c;g++){const v=g*f-o;for(let _=0;_<u;_++){const x=_*d-s;y.push(x,-v,0),h.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const _=v+u*g,x=v+u*(g+1),M=v+1+u*(g+1),E=v+1+u*g;p.push(_,x,E),p.push(x,M,E)}this.setIndex(p),this.setAttribute("position",new mi(y,3)),this.setAttribute("normal",new mi(h,3)),this.setAttribute("uv",new mi(m,2))}static fromJSON(e){return new ed(e.width,e.height,e.widthSegments,e.heightSegments)}}var jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx="vec3 transformed = vec3( position );",Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,t1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,f1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_1="gl_FragColor = linearToOutputTexel( gl_FragColor );",y1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,G1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,oS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ES=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,zS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,FS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,US=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,OS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,BS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,GS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,VS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,WS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ZS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,QS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,MM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:jx,alphamap_pars_fragment:$x,alphatest_fragment:qx,alphatest_pars_fragment:Yx,aomap_fragment:Zx,aomap_pars_fragment:Kx,begin_vertex:Qx,beginnormal_vertex:Jx,bsdfs:e1,iridescence_fragment:t1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:r1,clipping_planes_pars_vertex:s1,clipping_planes_vertex:o1,color_fragment:a1,color_pars_fragment:l1,color_pars_vertex:u1,color_vertex:c1,common:f1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:h1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:v1,encodings_fragment:_1,encodings_pars_fragment:y1,envmap_fragment:x1,envmap_common_pars_fragment:S1,envmap_pars_fragment:M1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:N1,envmap_vertex:b1,fog_vertex:E1,fog_pars_vertex:T1,fog_fragment:C1,fog_pars_fragment:A1,gradientmap_pars_fragment:P1,lightmap_fragment:L1,lightmap_pars_fragment:R1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:I1,lights_pars_begin:k1,lights_toon_fragment:z1,lights_toon_pars_fragment:F1,lights_phong_fragment:U1,lights_phong_pars_fragment:O1,lights_physical_fragment:B1,lights_physical_pars_fragment:G1,lights_fragment_begin:V1,lights_fragment_maps:W1,lights_fragment_end:H1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:q1,map_fragment:Y1,map_pars_fragment:Z1,map_particle_fragment:K1,map_particle_pars_fragment:Q1,metalnessmap_fragment:J1,metalnessmap_pars_fragment:eS,morphcolor_vertex:tS,morphnormal_vertex:nS,morphtarget_pars_vertex:iS,morphtarget_vertex:rS,normal_fragment_begin:sS,normal_fragment_maps:oS,normal_pars_fragment:aS,normal_pars_vertex:lS,normal_vertex:uS,normalmap_pars_fragment:cS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:hS,iridescence_pars_fragment:pS,output_fragment:mS,packing:gS,premultiplied_alpha_fragment:vS,project_vertex:_S,dithering_fragment:yS,dithering_pars_fragment:xS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:bS,shadowmap_vertex:ES,shadowmask_pars_fragment:TS,skinbase_vertex:CS,skinning_pars_vertex:AS,skinning_vertex:PS,skinnormal_vertex:LS,specularmap_fragment:RS,specularmap_pars_fragment:DS,tonemapping_fragment:IS,tonemapping_pars_fragment:kS,transmission_fragment:NS,transmission_pars_fragment:zS,uv_pars_fragment:FS,uv_pars_vertex:US,uv_vertex:OS,uv2_pars_fragment:BS,uv2_pars_vertex:GS,uv2_vertex:VS,worldpos_vertex:WS,background_vert:HS,background_frag:XS,backgroundCube_vert:jS,backgroundCube_frag:$S,cube_vert:qS,cube_frag:YS,depth_vert:ZS,depth_frag:KS,distanceRGBA_vert:QS,distanceRGBA_frag:JS,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:oM,meshlambert_frag:aM,meshmatcap_vert:lM,meshmatcap_frag:uM,meshnormal_vert:cM,meshnormal_frag:fM,meshphong_vert:dM,meshphong_frag:hM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:vM,points_vert:_M,points_frag:yM,shadow_vert:xM,shadow_frag:SM,sprite_vert:MM,sprite_frag:wM},se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vn},uv2Transform:{value:new vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}}},Zn={basic:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:qt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:qt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:qt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:qt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:qt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:qt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new vn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:qt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:qt([se.lights,se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Zn.physical={uniforms:qt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Aa={r:0,b:0,g:0};function bM(n,e,t,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function y(m,g){let v=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_));const x=n.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ul)?(c===void 0&&(c=new zi(new $o(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:Ps(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=_.encoding!==$e,(d!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new zi(new ed(2,2),new Ar({name:"BackgroundMaterial",uniforms:Ps(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=_.encoding!==$e,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function h(m,g){m.getRGB(Aa,m0(n)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(a,l)},render:y}}function EM(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(I,G,W,K,L){let B=!1;if(o){const V=h(K,W,G);u!==V&&(u=V,p(u.object)),B=g(I,K,W,L),B&&v(I,K,W,L)}else{const V=G.wireframe===!0;(u.geometry!==K.id||u.program!==W.id||u.wireframe!==V)&&(u.geometry=K.id,u.program=W.id,u.wireframe=V,B=!0)}L!==null&&t.update(L,34963),(B||c)&&(c=!1,S(I,G,W,K),L!==null&&n.bindBuffer(34963,t.get(L).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function y(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function h(I,G,W){const K=W.wireframe===!0;let L=a[I.id];L===void 0&&(L={},a[I.id]=L);let B=L[G.id];B===void 0&&(B={},L[G.id]=B);let V=B[K];return V===void 0&&(V=m(f()),B[K]=V),V}function m(I){const G=[],W=[],K=[];for(let L=0;L<r;L++)G[L]=0,W[L]=0,K[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:K,object:I,attributes:{},index:null}}function g(I,G,W,K){const L=u.attributes,B=G.attributes;let V=0;const ne=W.getAttributes();for(const N in ne)if(ne[N].location>=0){const ee=L[N];let ie=B[N];if(ie===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;V++}return u.attributesNum!==V||u.index!==K}function v(I,G,W,K){const L={},B=G.attributes;let V=0;const ne=W.getAttributes();for(const N in ne)if(ne[N].location>=0){let ee=B[N];ee===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),L[N]=ie,V++}u.attributes=L,u.attributesNum=V,u.index=K}function _(){const I=u.newAttributes;for(let G=0,W=I.length;G<W;G++)I[G]=0}function x(I){M(I,0)}function M(I,G){const W=u.newAttributes,K=u.enabledAttributes,L=u.attributeDivisors;W[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),L[I]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),L[I]=G)}function E(){const I=u.newAttributes,G=u.enabledAttributes;for(let W=0,K=G.length;W<K;W++)G[W]!==I[W]&&(n.disableVertexAttribArray(W),G[W]=0)}function T(I,G,W,K,L,B){i.isWebGL2===!0&&(W===5124||W===5125)?n.vertexAttribIPointer(I,G,W,L,B):n.vertexAttribPointer(I,G,W,K,L,B)}function S(I,G,W,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const L=K.attributes,B=W.getAttributes(),V=G.defaultAttributeValues;for(const ne in B){const N=B[ne];if(N.location>=0){let q=L[ne];if(q===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){const ee=q.normalized,ie=q.itemSize,O=t.get(q);if(O===void 0)continue;const he=O.buffer,fe=O.type,de=O.bytesPerElement;if(q.isInterleavedBufferAttribute){const oe=q.data,Be=oe.stride,we=q.offset;if(oe.isInstancedInterleavedBuffer){for(let _e=0;_e<N.locationSize;_e++)M(N.location+_e,oe.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<N.locationSize;_e++)x(N.location+_e);n.bindBuffer(34962,he);for(let _e=0;_e<N.locationSize;_e++)T(N.location+_e,ie/N.locationSize,fe,ee,Be*de,(we+ie/N.locationSize*_e)*de)}else{if(q.isInstancedBufferAttribute){for(let oe=0;oe<N.locationSize;oe++)M(N.location+oe,q.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<N.locationSize;oe++)x(N.location+oe);n.bindBuffer(34962,he);for(let oe=0;oe<N.locationSize;oe++)T(N.location+oe,ie/N.locationSize,fe,ee,ie*de,ie/N.locationSize*oe*de)}}else if(V!==void 0){const ee=V[ne];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(N.location,ee);break;case 3:n.vertexAttrib3fv(N.location,ee);break;case 4:n.vertexAttrib4fv(N.location,ee);break;default:n.vertexAttrib1fv(N.location,ee)}}}}E()}function C(){H();for(const I in a){const G=a[I];for(const W in G){const K=G[W];for(const L in K)y(K[L].object),delete K[L];delete G[W]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const W in G){const K=G[W];for(const L in K)y(K[L].object),delete K[L];delete G[W]}delete a[I.id]}function F(I){for(const G in a){const W=a[G];if(W[I.id]===void 0)continue;const K=W[I.id];for(const L in K)y(K[L].object),delete K[L];delete W[I.id]}}function H(){D(),c=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:x,disableUnusedAttributes:E}}function TM(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function CM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),p=n.getParameter(3379),y=n.getParameter(34076),h=n.getParameter(34921),m=n.getParameter(36347),g=n.getParameter(36348),v=n.getParameter(36349),_=f>0,x=o||e.has("OES_texture_float"),M=_&&x,E=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:y,maxAttributes:h,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function AM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new lr,a=new vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const y=d.clippingPlanes,h=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!r||y===null||y.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,_=v*4;let x=g.clippingState||null;l.value=x,x=c(y,f,_,p);for(let M=0;M!==_;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,y){const h=d!==null?d.length:0;let m=null;if(h!==0){if(m=l.value,y!==!0||m===null){const g=p+h*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,x=p;_!==h;++_,x+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,m}}function PM(n){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=Ts:a===Yc&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===qc||a===Yc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Vx(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class LM extends g0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,lp=[.125,.215,.35,.446,.526,.582],cr=20,$u=new LM,up=new Ge;let qu=null;const ur=(1+Math.sqrt(5))/2,jr=1/ur,cp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ur,jr),new U(0,ur,-jr),new U(jr,0,ur),new U(-jr,0,ur),new U(ur,jr,0),new U(-ur,jr,0)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){qu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu),e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Uo,format:Vn,encoding:Tr,depthBuffer:!1},r=dp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RM(s)),this._blurMaterial=DM(s,e,t)}return r}_compileMaterial(e){const t=new zi(this._lodPlanes[0],e);this._renderer.compile(t,$u)}_sceneToCubeUV(e,t,i,r){const a=new An(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(up),c.toneMapping=pi,c.autoClear=!1;const p=new d0({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),y=new zi(new $o,p);let h=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,h=!0):(p.color.copy(up),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const _=this._cubeSize;Pa(r,v*_,g>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ts||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$u)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cp[(r-1)%cp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new zi(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*cr-1),h=s/y,m=isFinite(s)?1+Math.floor(c*h):cr;m>cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);const g=[];let v=0;for(let T=0;T<cr;++T){const S=T/h,C=Math.exp(-S*S/2);g.push(C),T===0?v+=C:T<m&&(v+=2*C)}for(let T=0;T<g.length;T++)g[T]=g[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-i;const x=this._sizeLods[r],M=3*x*(r>_-cs?r-_+cs:0),E=4*(this._cubeSize-x);Pa(t,M,E,3*x,2*x),l.setRenderTarget(t),l.render(d,$u)}}function RM(n){const e=[],t=[],i=[];let r=n;const s=n-cs+1+lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-cs?l=lp[o-n+cs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,y=6,h=3,m=2,g=1,v=new Float32Array(h*y*p),_=new Float32Array(m*y*p),x=new Float32Array(g*y*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,S=E>2?0:-1,C=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];v.set(C,h*y*E),_.set(f,m*y*E);const P=[E,E,E,E,E,E];x.set(P,g*y*E)}const M=new ti;M.setAttribute("position",new Xn(v,h)),M.setAttribute("uv",new Xn(_,m)),M.setAttribute("faceIndex",new Xn(x,g)),e.push(M),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dp(n,e,t){const i=new Cr(n,e,t);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DM(n,e,t){const i=new Float32Array(cr),r=new U(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hp(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function pp(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qc||l===Yc,c=l===Ts||l===Cs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new fp(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new fp(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NM(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)e.update(f[y],34962);const p=d.morphAttributes;for(const y in p){const h=p[y];for(let m=0,g=h.length;m<g;m++)e.update(h[m],34962)}}function u(d){const f=[],p=d.index,y=d.attributes.position;let h=0;if(p!==null){const v=p.array;h=p.version;for(let _=0,x=v.length;_<x;_+=3){const M=v[_+0],E=v[_+1],T=v[_+2];f.push(M,E,E,T,T,M)}}else{const v=y.array;h=y.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const M=_+0,E=_+1,T=_+2;f.push(M,E,E,T,T,M)}}const m=new(s0(f)?p0:h0)(f,1);m.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function zM(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,p){n.drawElements(s,p,a,f*l),t.update(p,s,1)}function d(f,p,y){if(y===0)return;let h,m;if(r)h=n,m="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,p,a,f*l,y),t.update(p,s,y)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function FM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function UM(n,e){return n[0]-e[0]}function OM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function BM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Pt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=h!==void 0?h.length:0;let g=s.get(c);if(g===void 0||g.count!==m){let W=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",W)};var y=W;g!==void 0&&g.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let P=0;x===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let F=c.attributes.position.count*P,H=1;F>e.maxTextureSize&&(H=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*H*4*m),I=new u0(D,F,H,m);I.type=mr,I.needsUpdate=!0;const G=P*4;for(let K=0;K<m;K++){const L=T[K],B=S[K],V=C[K],ne=F*H*4*K;for(let N=0;N<L.count;N++){const q=N*G;x===!0&&(o.fromBufferAttribute(L,N),D[ne+q+0]=o.x,D[ne+q+1]=o.y,D[ne+q+2]=o.z,D[ne+q+3]=0),M===!0&&(o.fromBufferAttribute(B,N),D[ne+q+4]=o.x,D[ne+q+5]=o.y,D[ne+q+6]=o.z,D[ne+q+7]=0),E===!0&&(o.fromBufferAttribute(V,N),D[ne+q+8]=o.x,D[ne+q+9]=o.y,D[ne+q+10]=o.z,D[ne+q+11]=V.itemSize===4?o.w:1)}}g={count:m,texture:I,size:new ke(F,H)},s.set(c,g),c.addEventListener("dispose",W)}let v=0;for(let x=0;x<p.length;x++)v+=p[x];const _=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const h=p===void 0?0:p.length;let m=i[c.id];if(m===void 0||m.length!==h){m=[];for(let M=0;M<h;M++)m[M]=[M,0];i[c.id]=m}for(let M=0;M<h;M++){const E=m[M];E[0]=M,E[1]=p[M]}m.sort(OM);for(let M=0;M<8;M++)M<h&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(UM);const g=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const E=a[M],T=E[0],S=E[1];T!==Number.MAX_SAFE_INTEGER&&S?(g&&c.getAttribute("morphTarget"+M)!==g[T]&&c.setAttribute("morphTarget"+M,g[T]),v&&c.getAttribute("morphNormal"+M)!==v[T]&&c.setAttribute("morphNormal"+M,v[T]),r[M]=S,_+=S):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),v&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const x=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function GM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const x0=new un,S0=new u0,M0=new Tx,w0=new v0,mp=[],gp=[],vp=new Float32Array(16),_p=new Float32Array(9),yp=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gl(n,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function XM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function jM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,i))return;yp.set(i),n.uniformMatrix2fv(this.addr,!1,yp),yt(t,i)}}function $M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,i))return;_p.set(i),n.uniformMatrix3fv(this.addr,!1,_p),yt(t,i)}}function qM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,i))return;vp.set(i),n.uniformMatrix4fv(this.addr,!1,vp),yt(t,i)}}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function JM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function iw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||x0,r)}function rw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||M0,r)}function sw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||w0,r)}function ow(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||S0,r)}function aw(n){switch(n){case 5126:return VM;case 35664:return WM;case 35665:return HM;case 35666:return XM;case 35674:return jM;case 35675:return $M;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return ZM;case 35668:case 35672:return KM;case 35669:case 35673:return QM;case 5125:return JM;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return ow}}function lw(n,e){n.uniform1fv(this.addr,e)}function uw(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function cw(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function fw(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function dw(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hw(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pw(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mw(n,e){n.uniform1iv(this.addr,e)}function gw(n,e){n.uniform2iv(this.addr,e)}function vw(n,e){n.uniform3iv(this.addr,e)}function _w(n,e){n.uniform4iv(this.addr,e)}function yw(n,e){n.uniform1uiv(this.addr,e)}function xw(n,e){n.uniform2uiv(this.addr,e)}function Sw(n,e){n.uniform3uiv(this.addr,e)}function Mw(n,e){n.uniform4uiv(this.addr,e)}function ww(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||x0,s[o])}function bw(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||M0,s[o])}function Ew(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||w0,s[o])}function Tw(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||S0,s[o])}function Cw(n){switch(n){case 5126:return lw;case 35664:return uw;case 35665:return cw;case 35666:return fw;case 35674:return dw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return yw;case 36294:return xw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}class Aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=aw(t.type)}}class Pw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Cw(t.type)}}class Lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function xp(n,e){n.seq.push(e),n.map[e.id]=e}function Rw(n,e,t){const i=n.name,r=i.length;for(Yu.lastIndex=0;;){const s=Yu.exec(i),o=Yu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){xp(t,u===void 0?new Aw(a,n,e):new Pw(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Lw(a),xp(t,d)),t=d}}}class qa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Sp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Dw=0;function Iw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function kw(n){switch(n){case Tr:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Mp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Iw(n.getShaderSource(e),o)}else return r}function Nw(n,e){const t=kw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zw(n,e){let t;switch(e){case Qy:t="Linear";break;case Jy:t="Reinhard";break;case ex:t="OptimizedCineon";break;case tx:t="ACESFilmic";break;case nx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function Uw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ow(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ao(n){return n!==""}function wp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(n){return n.replace(Bw,Gw)}function Gw(n,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return tf(t)}const Vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(n){return n.replace(Vw,Ww)}function Ww(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ly?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oo&&(e="SHADOWMAP_TYPE_VSM"),e}function Xw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case Cs:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function $w(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case n0:e="ENVMAP_BLENDING_MULTIPLY";break;case Zy:e="ENVMAP_BLENDING_MIX";break;case Ky:e="ENVMAP_BLENDING_ADD";break}return e}function qw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Yw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hw(t),u=Xw(t),c=jw(t),d=$w(t),f=qw(t),p=t.isWebGL2?"":Fw(t),y=Uw(s),h=r.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[y].filter(ao).join(`
`),m.length>0&&(m+=`
`),g=[p,y].filter(ao).join(`
`),g.length>0&&(g+=`
`)):(m=[Tp(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),g=[p,Tp(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Te.tonemapping_pars_fragment:"",t.toneMapping!==pi?zw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Nw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=tf(o),o=wp(o,t),o=bp(o,t),a=tf(a),a=wp(a,t),a=bp(a,t),o=Ep(o),a=Ep(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=v+m+o,x=v+g+a,M=Sp(r,35633,_),E=Sp(r,35632,x);if(r.attachShader(h,M),r.attachShader(h,E),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(M).trim(),F=r.getShaderInfoLog(E).trim();let H=!0,D=!0;if(r.getProgramParameter(h,35714)===!1){H=!1;const I=Mp(r,M,"vertex"),G=Mp(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+C+`
`+I+`
`+G)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||F==="")&&(D=!1);D&&(this.diagnostics={runnable:H,programLog:C,vertexShader:{log:P,prefix:m},fragmentShader:{log:F,prefix:g}})}r.deleteShader(M),r.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new qa(r,h)),T};let S;return this.getAttributes=function(){return S===void 0&&(S=Ow(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=E,this}let Zw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qw(e),t.set(e,i)),i}}class Qw{constructor(e){this.id=Zw++,this.code=e,this.usedTimes=0}}function Jw(n,e,t,i,r,s,o){const a=new f0,l=new Kw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,C,P,F,H){const D=F.fog,I=H.geometry,G=S.isMeshStandardMaterial?F.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),K=W&&W.mapping===Ul?W.image.height:null,L=y[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const B=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,V=B!==void 0?B.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let N,q,ee,ie;if(L){const Be=Zn[L];N=Be.vertexShader,q=Be.fragmentShader}else N=S.vertexShader,q=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),ie=l.getFragmentShaderID(S);const O=n.getRenderTarget(),he=S.alphaTest>0,fe=S.clearcoat>0,de=S.iridescence>0;return{isWebGL2:c,shaderID:L,shaderName:S.type,vertexShader:N,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:f,outputEncoding:O===null?n.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Tr,map:!!S.map,matcap:!!S.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:K,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Mx,tangentSpaceNormalMap:S.normalMapType===Sx,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===$e,clearcoat:fe,clearcoatMap:fe&&!!S.clearcoatMap,clearcoatRoughnessMap:fe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!S.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!S.iridescenceMap,iridescenceThicknessMap:de&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===vs,alphaMap:!!S.alphaMap,alphaTest:he,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!I.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:pi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ki,flipSided:S.side===yn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)C.push(P),C.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(C,S),v(C,S),C.push(n.outputEncoding)),C.push(S.customProgramCacheKey),C.join()}function g(S,C){S.push(C.precision),S.push(C.outputEncoding),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.combine),S.push(C.vertexUvs),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function v(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),S.push(a.mask)}function _(S){const C=y[S.type];let P;if(C){const F=Zn[C];P=Ux.clone(F.uniforms)}else P=S.uniforms;return P}function x(S,C){let P;for(let F=0,H=u.length;F<H;F++){const D=u[F];if(D.cacheKey===C){P=D,++P.usedTimes;break}}return P===void 0&&(P=new Yw(n,C,S,s),u.push(P)),P}function M(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function T(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:T}}function e2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function t2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ap(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,y,h,m){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,groupOrder:y,renderOrder:d.renderOrder,z:h,group:m},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=h,g.group=m),e++,g}function a(d,f,p,y,h,m){const g=o(d,f,p,y,h,m);p.transmission>0?i.push(g):p.transparent===!0?r.push(g):t.push(g)}function l(d,f,p,y,h,m){const g=o(d,f,p,y,h,m);p.transmission>0?i.unshift(g):p.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,f){t.length>1&&t.sort(d||t2),i.length>1&&i.sort(f||Cp),r.length>1&&r.sort(f||Cp)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function n2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ap,n.set(i,[o])):r>=s.length?(o=new Ap,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function i2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function r2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let s2=0;function o2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a2(n,e){const t=new i2,i=r2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new U);const s=new U,o=new vt,a=new vt;function l(c,d){let f=0,p=0,y=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let h=0,m=0,g=0,v=0,_=0,x=0,M=0,E=0,T=0,S=0;c.sort(o2);const C=d!==!0?Math.PI:1;for(let F=0,H=c.length;F<H;F++){const D=c[F],I=D.color,G=D.intensity,W=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*G*C,p+=I.g*G*C,y+=I.b*G*C;else if(D.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(D.sh.coefficients[L],G);else if(D.isDirectionalLight){const L=t.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*C),D.castShadow){const B=D.shadow,V=i.get(D);V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,r.directionalShadow[h]=V,r.directionalShadowMap[h]=K,r.directionalShadowMatrix[h]=D.shadow.matrix,x++}r.directional[h]=L,h++}else if(D.isSpotLight){const L=t.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(I).multiplyScalar(G*C),L.distance=W,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,r.spot[g]=L;const B=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,B.updateMatrices(D),D.castShadow&&S++),r.spotLightMatrix[g]=B.matrix,D.castShadow){const V=i.get(D);V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,r.spotShadow[g]=V,r.spotShadowMap[g]=K,E++}g++}else if(D.isRectAreaLight){const L=t.get(D);L.color.copy(I).multiplyScalar(G),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=L,v++}else if(D.isPointLight){const L=t.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*C),L.distance=D.distance,L.decay=D.decay,D.castShadow){const B=D.shadow,V=i.get(D);V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,r.pointShadow[m]=V,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=D.shadow.matrix,M++}r.point[m]=L,m++}else if(D.isHemisphereLight){const L=t.get(D);L.skyColor.copy(D.color).multiplyScalar(G*C),L.groundColor.copy(D.groundColor).multiplyScalar(G*C),r.hemi[_]=L,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=y;const P=r.hash;(P.directionalLength!==h||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==v||P.hemiLength!==_||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==T)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+T-S,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=S,P.directionalLength=h,P.pointLength=m,P.spotLength=g,P.rectAreaLength=v,P.hemiLength=_,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=T,r.version=s2++)}function u(c,d){let f=0,p=0,y=0,h=0,m=0;const g=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const x=c[v];if(x.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(x.isSpotLight){const M=r.spot[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),y++}else if(x.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(x.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(x.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:l,setupView:u,state:r}}function Pp(n,e){const t=new a2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function l2(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Pp(n,e),t.set(s,[l])):o>=a.length?(l=new Pp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class u2 extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c2 extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h2(n,e,t){let i=new _0;const r=new ke,s=new ke,o=new Pt,a=new u2({depthPacking:xx}),l=new c2,u={},c=t.maxTextureSize,d={[Yi]:yn,[yn]:Yi,[ki]:ki},f=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:f2,fragmentShader:d2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const y=new ti;y.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new zi(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jg,this.render=function(x,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Xi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let F=0,H=x.length;F<H;F++){const D=x[F],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const G=I.getFrameExtents();if(r.multiply(G),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/G.y),r.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null){const K=this.type!==oo?{minFilter:Zt,magFilter:Zt}:{};I.map=new Cr(r.x,r.y,K),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const W=I.getViewportCount();for(let K=0;K<W;K++){const L=I.getViewport(K);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),P.viewport(o),I.updateMatrices(D,K),i=I.getFrustum(),_(M,E,I.camera,D,this.type)}I.isPointLightShadow!==!0&&this.type===oo&&g(I,E),I.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(T,S,C)};function g(x,M){const E=e.update(h);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Cr(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(M,null,E,f,h,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(M,null,E,p,h,null)}function v(x,M,E,T,S,C){let P=null;const F=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)P=F;else if(P=E.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const H=P.uuid,D=M.uuid;let I=u[H];I===void 0&&(I={},u[H]=I);let G=I[D];G===void 0&&(G=P.clone(),I[D]=G),P=G}return P.visible=M.visible,P.wireframe=M.wireframe,C===oo?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:d[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=T,P.farDistance=S),P}function _(x,M,E,T,S){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===oo)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const F=e.update(x),H=x.material;if(Array.isArray(H)){const D=F.groups;for(let I=0,G=D.length;I<G;I++){const W=D[I],K=H[W.materialIndex];if(K&&K.visible){const L=v(x,K,T,E.near,E.far,S);n.renderBufferDirect(E,null,F,L,x,W)}}}else if(H.visible){const D=v(x,H,T,E.near,E.far,S);n.renderBufferDirect(E,null,F,D,x,null)}}const P=x.children;for(let F=0,H=P.length;F<H;F++)_(P[F],M,E,T,S)}}function p2(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const j=new Pt;let J=null;const ue=new Pt(0,0,0,0);return{setMask:function(me){J!==me&&!R&&(n.colorMask(me,me,me,me),J=me)},setLocked:function(me){R=me},setClear:function(me,Oe,Mt,Dt,Ji){Ji===!0&&(me*=Dt,Oe*=Dt,Mt*=Dt),j.set(me,Oe,Mt,Dt),ue.equals(j)===!1&&(n.clearColor(me,Oe,Mt,Dt),ue.copy(j))},reset:function(){R=!1,J=null,ue.set(-1,0,0,0)}}}function s(){let R=!1,j=null,J=null,ue=null;return{setTest:function(me){me?he(2929):fe(2929)},setMask:function(me){j!==me&&!R&&(n.depthMask(me),j=me)},setFunc:function(me){if(J!==me){switch(me){case Wy:n.depthFunc(512);break;case Hy:n.depthFunc(519);break;case Xy:n.depthFunc(513);break;case $c:n.depthFunc(515);break;case jy:n.depthFunc(514);break;case $y:n.depthFunc(518);break;case qy:n.depthFunc(516);break;case Yy:n.depthFunc(517);break;default:n.depthFunc(515)}J=me}},setLocked:function(me){R=me},setClear:function(me){ue!==me&&(n.clearDepth(me),ue=me)},reset:function(){R=!1,j=null,J=null,ue=null}}}function o(){let R=!1,j=null,J=null,ue=null,me=null,Oe=null,Mt=null,Dt=null,Ji=null;return{setTest:function(Ze){R||(Ze?he(2960):fe(2960))},setMask:function(Ze){j!==Ze&&!R&&(n.stencilMask(Ze),j=Ze)},setFunc:function(Ze,ni,wn){(J!==Ze||ue!==ni||me!==wn)&&(n.stencilFunc(Ze,ni,wn),J=Ze,ue=ni,me=wn)},setOp:function(Ze,ni,wn){(Oe!==Ze||Mt!==ni||Dt!==wn)&&(n.stencilOp(Ze,ni,wn),Oe=Ze,Mt=ni,Dt=wn)},setLocked:function(Ze){R=Ze},setClear:function(Ze){Ji!==Ze&&(n.clearStencil(Ze),Ji=Ze)},reset:function(){R=!1,j=null,J=null,ue=null,me=null,Oe=null,Mt=null,Dt=null,Ji=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},p={},y=new WeakMap,h=[],m=null,g=!1,v=null,_=null,x=null,M=null,E=null,T=null,S=null,C=!1,P=null,F=null,H=null,D=null,I=null;const G=n.getParameter(35661);let W=!1,K=0;const L=n.getParameter(7938);L.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(L)[1]),W=K>=1):L.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),W=K>=2);let B=null,V={};const ne=n.getParameter(3088),N=n.getParameter(2978),q=new Pt().fromArray(ne),ee=new Pt().fromArray(N);function ie(R,j,J){const ue=new Uint8Array(4),me=n.createTexture();n.bindTexture(R,me),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Oe=0;Oe<J;Oe++)n.texImage2D(j+Oe,0,6408,1,1,0,6408,5121,ue);return me}const O={};O[3553]=ie(3553,3553,1),O[34067]=ie(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),he(2929),l.setFunc($c),ht(!1),tn(xh),he(2884),xt(Xi);function he(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function fe(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function de(R,j){return p[R]!==j?(n.bindFramebuffer(R,j),p[R]=j,i&&(R===36009&&(p[36160]=j),R===36160&&(p[36009]=j)),!0):!1}function oe(R,j){let J=h,ue=!1;if(R)if(J=y.get(j),J===void 0&&(J=[],y.set(j,J)),R.isWebGLMultipleRenderTargets){const me=R.texture;if(J.length!==me.length||J[0]!==36064){for(let Oe=0,Mt=me.length;Oe<Mt;Oe++)J[Oe]=36064+Oe;J.length=me.length,ue=!0}}else J[0]!==36064&&(J[0]=36064,ue=!0);else J[0]!==1029&&(J[0]=1029,ue=!0);ue&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Be(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const we={[Kr]:32774,[Dy]:32778,[Iy]:32779};if(i)we[wh]=32775,we[bh]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(we[wh]=R.MIN_EXT,we[bh]=R.MAX_EXT)}const _e={[ky]:0,[Ny]:1,[zy]:768,[e0]:770,[Vy]:776,[By]:774,[Uy]:772,[Fy]:769,[t0]:771,[Gy]:775,[Oy]:773};function xt(R,j,J,ue,me,Oe,Mt,Dt){if(R===Xi){g===!0&&(fe(3042),g=!1);return}if(g===!1&&(he(3042),g=!0),R!==Ry){if(R!==v||Dt!==C){if((_!==Kr||E!==Kr)&&(n.blendEquation(32774),_=Kr,E=Kr),Dt)switch(R){case vs:n.blendFuncSeparate(1,771,1,771);break;case yo:n.blendFunc(1,1);break;case Sh:n.blendFuncSeparate(0,769,0,1);break;case Mh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case vs:n.blendFuncSeparate(770,771,1,771);break;case yo:n.blendFunc(770,1);break;case Sh:n.blendFuncSeparate(0,769,0,1);break;case Mh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,M=null,T=null,S=null,v=R,C=Dt}return}me=me||j,Oe=Oe||J,Mt=Mt||ue,(j!==_||me!==E)&&(n.blendEquationSeparate(we[j],we[me]),_=j,E=me),(J!==x||ue!==M||Oe!==T||Mt!==S)&&(n.blendFuncSeparate(_e[J],_e[ue],_e[Oe],_e[Mt]),x=J,M=ue,T=Oe,S=Mt),v=R,C=!1}function Gt(R,j){R.side===ki?fe(2884):he(2884);let J=R.side===yn;j&&(J=!J),ht(J),R.blending===vs&&R.transparent===!1?xt(Xi):xt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ue=R.stencilWrite;u.setTest(ue),ue&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Fe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?he(32926):fe(32926)}function ht(R){P!==R&&(R?n.frontFace(2304):n.frontFace(2305),P=R)}function tn(R){R!==Ay?(he(2884),R!==F&&(R===xh?n.cullFace(1029):R===Py?n.cullFace(1028):n.cullFace(1032))):fe(2884),F=R}function nt(R){R!==H&&(W&&n.lineWidth(R),H=R)}function Fe(R,j,J){R?(he(32823),(D!==j||I!==J)&&(n.polygonOffset(j,J),D=j,I=J)):fe(32823)}function In(R){R?he(3089):fe(3089)}function nn(R){R===void 0&&(R=33984+G-1),B!==R&&(n.activeTexture(R),B=R)}function A(R,j,J){J===void 0&&(B===null?J=33984+G-1:J=B);let ue=V[J];ue===void 0&&(ue={type:void 0,texture:void 0},V[J]=ue),(ue.type!==R||ue.texture!==j)&&(B!==J&&(n.activeTexture(J),B=J),n.bindTexture(R,j||O[R]),ue.type=R,ue.texture=j)}function w(){const R=V[B];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(R){q.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),q.copy(R))}function ge(R){ee.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function Ne(R,j){let J=d.get(j);J===void 0&&(J=new WeakMap,d.set(j,J));let ue=J.get(R);ue===void 0&&(ue=n.getUniformBlockIndex(j,R.name),J.set(R,ue))}function Ye(R,j){const ue=d.get(j).get(R);c.get(j)!==ue&&(n.uniformBlockBinding(j,ue,R.__bindingPointIndex),c.set(j,ue))}function St(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},B=null,V={},p={},y=new WeakMap,h=[],m=null,g=!1,v=null,_=null,x=null,M=null,E=null,T=null,S=null,C=!1,P=null,F=null,H=null,D=null,I=null,q.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:he,disable:fe,bindFramebuffer:de,drawBuffers:oe,useProgram:Be,setBlending:xt,setMaterial:Gt,setFlipSided:ht,setCullFace:tn,setLineWidth:nt,setPolygonOffset:Fe,setScissorTest:In,activeTexture:nn,bindTexture:A,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:te,texImage2D:Me,texImage3D:pe,updateUBOMapping:Ne,uniformBlockBinding:Ye,texStorage2D:Z,texStorage3D:ye,texSubImage2D:re,texSubImage3D:ae,compressedTexSubImage2D:be,compressedTexSubImage3D:le,scissor:xe,viewport:ge,reset:St}}function m2(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return g?new OffscreenCanvas(A,w):yl("canvas")}function _(A,w,X,te){let re=1;if((A.width>te||A.height>te)&&(re=te/Math.max(A.width,A.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=w?ef:Math.floor,be=ae(re*A.width),le=ae(re*A.height);h===void 0&&(h=v(be,le));const Z=X?v(be,le):h;return Z.width=be,Z.height=le,Z.getContext("2d").drawImage(A,0,0,be,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+le+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Kh(A.width)&&Kh(A.height)}function M(A){return a?!1:A.wrapS!==Gn||A.wrapT!==Gn||A.minFilter!==Zt&&A.minFilter!==Cn}function E(A,w){return A.generateMipmaps&&w&&A.minFilter!==Zt&&A.minFilter!==Cn}function T(A){n.generateMipmap(A)}function S(A,w,X,te,re=!1){if(a===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=w;return w===6403&&(X===5126&&(ae=33326),X===5131&&(ae=33325),X===5121&&(ae=33321)),w===33319&&(X===5126&&(ae=33328),X===5131&&(ae=33327),X===5121&&(ae=33323)),w===6408&&(X===5126&&(ae=34836),X===5131&&(ae=34842),X===5121&&(ae=te===$e&&re===!1?35907:32856),X===32819&&(ae=32854),X===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function C(A,w,X){return E(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==Cn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===Zt||A===Eh||A===_u?9728:9729}function F(A){const w=A.target;w.removeEventListener("dispose",F),D(w),w.isVideoTexture&&y.delete(w)}function H(A){const w=A.target;w.removeEventListener("dispose",H),G(w)}function D(A){const w=i.get(A);if(w.__webglInit===void 0)return;const X=A.source,te=m.get(X);if(te){const re=te[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(A),Object.keys(te).length===0&&m.delete(X)}i.remove(A)}function I(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const X=A.source,te=m.get(X);delete te[w.__cacheKey],o.memory.textures--}function G(A){const w=A.texture,X=i.get(A),te=i.get(w);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let re=0,ae=w.length;re<ae;re++){const be=i.get(w[re]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(A)}let W=0;function K(){W=0}function L(){const A=W;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),W+=1,A}function B(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function V(A,w){const X=i.get(A);if(A.isVideoTexture&&In(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(X,A,w);return}}t.bindTexture(3553,X.__webglTexture,33984+w)}function ne(A,w){const X=i.get(A);if(A.version>0&&X.__version!==A.version){fe(X,A,w);return}t.bindTexture(35866,X.__webglTexture,33984+w)}function N(A,w){const X=i.get(A);if(A.version>0&&X.__version!==A.version){fe(X,A,w);return}t.bindTexture(32879,X.__webglTexture,33984+w)}function q(A,w){const X=i.get(A);if(A.version>0&&X.__version!==A.version){de(X,A,w);return}t.bindTexture(34067,X.__webglTexture,33984+w)}const ee={[Zc]:10497,[Gn]:33071,[Kc]:33648},ie={[Zt]:9728,[Eh]:9984,[_u]:9986,[Cn]:9729,[ix]:9985,[Fo]:9987};function O(A,w,X){if(X?(n.texParameteri(A,10242,ee[w.wrapS]),n.texParameteri(A,10243,ee[w.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,ee[w.wrapR]),n.texParameteri(A,10240,ie[w.magFilter]),n.texParameteri(A,10241,ie[w.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(w.wrapS!==Gn||w.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,P(w.magFilter)),n.texParameteri(A,10241,P(w.minFilter)),w.minFilter!==Zt&&w.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Zt||w.minFilter!==_u&&w.minFilter!==Fo||w.type===mr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Uo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function he(A,w){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",F));const te=w.source;let re=m.get(te);re===void 0&&(re={},m.set(te,re));const ae=B(w);if(ae!==A.__cacheKey){re[ae]===void 0&&(re[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[ae].usedTimes++;const be=re[A.__cacheKey];be!==void 0&&(re[A.__cacheKey].usedTimes--,be.usedTimes===0&&I(w)),A.__cacheKey=ae,A.__webglTexture=re[ae].texture}return X}function fe(A,w,X){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const re=he(A,w),ae=w.source;t.bindTexture(te,A.__webglTexture,33984+X);const be=i.get(ae);if(ae.version!==be.__version||re===!0){t.activeTexture(33984+X),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const le=M(w)&&x(w.image)===!1;let Z=_(w.image,le,!1,c);Z=nn(w,Z);const ye=x(Z)||a,Me=s.convert(w.format,w.encoding);let pe=s.convert(w.type),xe=S(w.internalFormat,Me,pe,w.encoding,w.isVideoTexture);O(te,w,ye);let ge;const Ne=w.mipmaps,Ye=a&&w.isVideoTexture!==!0,St=be.__version===void 0||re===!0,R=C(w,Z,ye);if(w.isDepthTexture)xe=6402,a?w.type===mr?xe=36012:w.type===pr?xe=33190:w.type===_s?xe=35056:xe=33189:w.type===mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_r&&xe===6402&&w.type!==r0&&w.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=pr,pe=s.convert(w.type)),w.format===As&&xe===6402&&(xe=34041,w.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=_s,pe=s.convert(w.type))),St&&(Ye?t.texStorage2D(3553,1,xe,Z.width,Z.height):t.texImage2D(3553,0,xe,Z.width,Z.height,0,Me,pe,null));else if(w.isDataTexture)if(Ne.length>0&&ye){Ye&&St&&t.texStorage2D(3553,R,xe,Ne[0].width,Ne[0].height);for(let j=0,J=Ne.length;j<J;j++)ge=Ne[j],Ye?t.texSubImage2D(3553,j,0,0,ge.width,ge.height,Me,pe,ge.data):t.texImage2D(3553,j,xe,ge.width,ge.height,0,Me,pe,ge.data);w.generateMipmaps=!1}else Ye?(St&&t.texStorage2D(3553,R,xe,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,Me,pe,Z.data)):t.texImage2D(3553,0,xe,Z.width,Z.height,0,Me,pe,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&St&&t.texStorage3D(35866,R,xe,Ne[0].width,Ne[0].height,Z.depth);for(let j=0,J=Ne.length;j<J;j++)ge=Ne[j],w.format!==Vn?Me!==null?Ye?t.compressedTexSubImage3D(35866,j,0,0,0,ge.width,ge.height,Z.depth,Me,ge.data,0,0):t.compressedTexImage3D(35866,j,xe,ge.width,ge.height,Z.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(35866,j,0,0,0,ge.width,ge.height,Z.depth,Me,pe,ge.data):t.texImage3D(35866,j,xe,ge.width,ge.height,Z.depth,0,Me,pe,ge.data)}else{Ye&&St&&t.texStorage2D(3553,R,xe,Ne[0].width,Ne[0].height);for(let j=0,J=Ne.length;j<J;j++)ge=Ne[j],w.format!==Vn?Me!==null?Ye?t.compressedTexSubImage2D(3553,j,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(3553,j,xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(3553,j,0,0,ge.width,ge.height,Me,pe,ge.data):t.texImage2D(3553,j,xe,ge.width,ge.height,0,Me,pe,ge.data)}else if(w.isDataArrayTexture)Ye?(St&&t.texStorage3D(35866,R,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,Me,pe,Z.data)):t.texImage3D(35866,0,xe,Z.width,Z.height,Z.depth,0,Me,pe,Z.data);else if(w.isData3DTexture)Ye?(St&&t.texStorage3D(32879,R,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,Me,pe,Z.data)):t.texImage3D(32879,0,xe,Z.width,Z.height,Z.depth,0,Me,pe,Z.data);else if(w.isFramebufferTexture){if(St)if(Ye)t.texStorage2D(3553,R,xe,Z.width,Z.height);else{let j=Z.width,J=Z.height;for(let ue=0;ue<R;ue++)t.texImage2D(3553,ue,xe,j,J,0,Me,pe,null),j>>=1,J>>=1}}else if(Ne.length>0&&ye){Ye&&St&&t.texStorage2D(3553,R,xe,Ne[0].width,Ne[0].height);for(let j=0,J=Ne.length;j<J;j++)ge=Ne[j],Ye?t.texSubImage2D(3553,j,0,0,Me,pe,ge):t.texImage2D(3553,j,xe,Me,pe,ge);w.generateMipmaps=!1}else Ye?(St&&t.texStorage2D(3553,R,xe,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Me,pe,Z)):t.texImage2D(3553,0,xe,Me,pe,Z);E(w,ye)&&T(te),be.__version=ae.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function de(A,w,X){if(w.image.length!==6)return;const te=he(A,w),re=w.source;t.bindTexture(34067,A.__webglTexture,33984+X);const ae=i.get(re);if(re.version!==ae.__version||te===!0){t.activeTexture(33984+X),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let j=0;j<6;j++)!be&&!le?Z[j]=_(w.image[j],!1,!0,u):Z[j]=le?w.image[j].image:w.image[j],Z[j]=nn(w,Z[j]);const ye=Z[0],Me=x(ye)||a,pe=s.convert(w.format,w.encoding),xe=s.convert(w.type),ge=S(w.internalFormat,pe,xe,w.encoding),Ne=a&&w.isVideoTexture!==!0,Ye=ae.__version===void 0||te===!0;let St=C(w,ye,Me);O(34067,w,Me);let R;if(be){Ne&&Ye&&t.texStorage2D(34067,St,ge,ye.width,ye.height);for(let j=0;j<6;j++){R=Z[j].mipmaps;for(let J=0;J<R.length;J++){const ue=R[J];w.format!==Vn?pe!==null?Ne?t.compressedTexSubImage2D(34069+j,J,0,0,ue.width,ue.height,pe,ue.data):t.compressedTexImage2D(34069+j,J,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+j,J,0,0,ue.width,ue.height,pe,xe,ue.data):t.texImage2D(34069+j,J,ge,ue.width,ue.height,0,pe,xe,ue.data)}}}else{R=w.mipmaps,Ne&&Ye&&(R.length>0&&St++,t.texStorage2D(34067,St,ge,Z[0].width,Z[0].height));for(let j=0;j<6;j++)if(le){Ne?t.texSubImage2D(34069+j,0,0,0,Z[j].width,Z[j].height,pe,xe,Z[j].data):t.texImage2D(34069+j,0,ge,Z[j].width,Z[j].height,0,pe,xe,Z[j].data);for(let J=0;J<R.length;J++){const me=R[J].image[j].image;Ne?t.texSubImage2D(34069+j,J+1,0,0,me.width,me.height,pe,xe,me.data):t.texImage2D(34069+j,J+1,ge,me.width,me.height,0,pe,xe,me.data)}}else{Ne?t.texSubImage2D(34069+j,0,0,0,pe,xe,Z[j]):t.texImage2D(34069+j,0,ge,pe,xe,Z[j]);for(let J=0;J<R.length;J++){const ue=R[J];Ne?t.texSubImage2D(34069+j,J+1,0,0,pe,xe,ue.image[j]):t.texImage2D(34069+j,J+1,ge,pe,xe,ue.image[j])}}}E(w,Me)&&T(34067),ae.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function oe(A,w,X,te,re){const ae=s.convert(X.format,X.encoding),be=s.convert(X.type),le=S(X.internalFormat,ae,be,X.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,le,w.width,w.height,w.depth,0,ae,be,null):t.texImage2D(re,0,le,w.width,w.height,0,ae,be,null)),t.bindFramebuffer(36160,A),Fe(w)?f.framebufferTexture2DMultisampleEXT(36160,te,re,i.get(X).__webglTexture,0,nt(w)):(re===3553||re>=34069&&re<=34074)&&n.framebufferTexture2D(36160,te,re,i.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(A,w,X){if(n.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(X||Fe(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===mr?te=36012:re.type===pr&&(te=33190));const ae=nt(w);Fe(w)?f.renderbufferStorageMultisampleEXT(36161,ae,te,w.width,w.height):n.renderbufferStorageMultisample(36161,ae,te,w.width,w.height)}else n.renderbufferStorage(36161,te,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const te=nt(w);X&&Fe(w)===!1?n.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):Fe(w)?f.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<te.length;re++){const ae=te[re],be=s.convert(ae.format,ae.encoding),le=s.convert(ae.type),Z=S(ae.internalFormat,be,le,ae.encoding),ye=nt(w);X&&Fe(w)===!1?n.renderbufferStorageMultisample(36161,ye,Z,w.width,w.height):Fe(w)?f.renderbufferStorageMultisampleEXT(36161,ye,Z,w.width,w.height):n.renderbufferStorage(36161,Z,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function we(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,re=nt(w);if(w.depthTexture.format===_r)Fe(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,re):n.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===As)Fe(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,re):n.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function _e(A){const w=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,A)}else if(X){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=n.createRenderbuffer(),Be(w.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Be(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function xt(A,w,X){const te=i.get(A);w!==void 0&&oe(te.__webglFramebuffer,A,A.texture,36064,3553),X!==void 0&&_e(A)}function Gt(A){const w=A.texture,X=i.get(A),te=i.get(w);A.addEventListener("dispose",H),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=w.version,o.memory.textures++);const re=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,be=x(A)||a;if(re){X.__webglFramebuffer=[];for(let le=0;le<6;le++)X.__webglFramebuffer[le]=n.createFramebuffer()}else{if(X.__webglFramebuffer=n.createFramebuffer(),ae)if(r.drawBuffers){const le=A.texture;for(let Z=0,ye=le.length;Z<ye;Z++){const Me=i.get(le[Z]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Fe(A)===!1){const le=ae?w:[w];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let Z=0;Z<le.length;Z++){const ye=le[Z];X.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,X.__webglColorRenderbuffer[Z]);const Me=s.convert(ye.format,ye.encoding),pe=s.convert(ye.type),xe=S(ye.internalFormat,Me,pe,ye.encoding,A.isXRRenderTarget===!0),ge=nt(A);n.renderbufferStorageMultisample(36161,ge,xe,A.width,A.height),n.framebufferRenderbuffer(36160,36064+Z,36161,X.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,te.__webglTexture),O(34067,w,be);for(let le=0;le<6;le++)oe(X.__webglFramebuffer[le],A,w,36064,34069+le);E(w,be)&&T(34067),t.unbindTexture()}else if(ae){const le=A.texture;for(let Z=0,ye=le.length;Z<ye;Z++){const Me=le[Z],pe=i.get(Me);t.bindTexture(3553,pe.__webglTexture),O(3553,Me,be),oe(X.__webglFramebuffer,A,Me,36064+Z,3553),E(Me,be)&&T(3553)}t.unbindTexture()}else{let le=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),O(le,w,be),oe(X.__webglFramebuffer,A,w,36064,le),E(w,be)&&T(le),t.unbindTexture()}A.depthBuffer&&_e(A)}function ht(A){const w=x(A)||a,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,re=X.length;te<re;te++){const ae=X[te];if(E(ae,w)){const be=A.isWebGLCubeRenderTarget?34067:3553,le=i.get(ae).__webglTexture;t.bindTexture(be,le),T(be),t.unbindTexture()}}}function tn(A){if(a&&A.samples>0&&Fe(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,te=A.height;let re=16384;const ae=[],be=A.stencilBuffer?33306:36096,le=i.get(A),Z=A.isWebGLMultipleRenderTargets===!0;if(Z)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,le.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,le.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){ae.push(36064+ye),A.depthBuffer&&ae.push(be);const Me=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Me===!1&&(A.depthBuffer&&(re|=256),A.stencilBuffer&&(re|=1024)),Z&&n.framebufferRenderbuffer(36008,36064,36161,le.__webglColorRenderbuffer[ye]),Me===!0&&(n.invalidateFramebuffer(36008,[be]),n.invalidateFramebuffer(36009,[be])),Z){const pe=i.get(w[ye]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,pe,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,re,9728),p&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,le.__webglColorRenderbuffer[ye]);const Me=i.get(w[ye]).__webglTexture;t.bindFramebuffer(36160,le.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,Me,0)}t.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}}function nt(A){return Math.min(d,A.samples)}function Fe(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function In(A){const w=o.render.frame;y.get(A)!==w&&(y.set(A,w),A.update())}function nn(A,w){const X=A.encoding,te=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Jc||X!==Tr&&(X===$e?a===!1?e.has("EXT_sRGB")===!0&&te===Vn?(A.format=Jc,A.minFilter=Cn,A.generateMipmaps=!1):w=a0.sRGBToLinear(w):(te!==Vn||re!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),w}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=V,this.setTexture2DArray=ne,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=xt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Fe}function g2(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Er)return 5121;if(s===ax)return 32819;if(s===lx)return 32820;if(s===rx)return 5120;if(s===sx)return 5122;if(s===r0)return 5123;if(s===ox)return 5124;if(s===pr)return 5125;if(s===mr)return 5126;if(s===Uo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ux)return 6406;if(s===Vn)return 6408;if(s===cx)return 6409;if(s===fx)return 6410;if(s===_r)return 6402;if(s===As)return 34041;if(s===Jc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dx)return 6403;if(s===hx)return 36244;if(s===px)return 33319;if(s===mx)return 33320;if(s===gx)return 36249;if(s===yu||s===xu||s===Su||s===Mu)if(o===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Th||s===Ch||s===Ah||s===Ph)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Th)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lh||s===Rh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Lh)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dh||s===Ih||s===kh||s===Nh||s===zh||s===Fh||s===Uh||s===Oh||s===Bh||s===Gh||s===Vh||s===Wh||s===Hh||s===Xh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Dh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ih)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wu)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===_x||s===jh||s===$h||s===qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$h)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_s?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class v2 extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lo extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _2={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const m=t.getJointPose(h,i),g=this._getHandJoint(u,h);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,y=.005;u.inputState.pinching&&f>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class y2 extends un{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:_r,c!==_r&&c!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===_r&&(i=pr),i===void 0&&c===As&&(i=_s),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1}}class x2 extends Is{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,y=null;const h=t.getContextAttributes();let m=null,g=null;const v=[],_=[],x=new Set,M=new Map,E=new An;E.layers.enable(1),E.viewport=new Pt;const T=new An;T.layers.enable(2),T.viewport=new Pt;const S=[E,T],C=new v2;C.layers.enable(1),C.layers.enable(2);let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let q=v[N];return q===void 0&&(q=new Zu,v[N]=q),q.getTargetRaySpace()},this.getControllerGrip=function(N){let q=v[N];return q===void 0&&(q=new Zu,v[N]=q),q.getGripSpace()},this.getHand=function(N){let q=v[N];return q===void 0&&(q=new Zu,v[N]=q),q.getHandSpace()};function H(N){const q=_.indexOf(N.inputSource);if(q===-1)return;const ee=v[q];ee!==void 0&&ee.dispatchEvent({type:N.type,data:N.inputSource})}function D(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",I);for(let N=0;N<v.length;N++){const q=_[N];q!==null&&(_[N]=null,v[N].disconnect(q))}P=null,F=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,g=null,ne.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",D),r.addEventListener("inputsourceschange",I),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),g=new Cr(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:Er,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let q=null,ee=null,ie=null;h.depth&&(ie=h.stencil?35056:33190,q=h.stencil?As:_r,ee=h.stencil?_s:pr);const O={colorFormat:32856,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(O),r.updateRenderState({layers:[f]}),g=new Cr(f.textureWidth,f.textureHeight,{format:Vn,type:Er,depthTexture:new y2(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const he=e.properties.get(g);he.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(N){for(let q=0;q<N.removed.length;q++){const ee=N.removed[q],ie=_.indexOf(ee);ie>=0&&(_[ie]=null,v[ie].disconnect(ee))}for(let q=0;q<N.added.length;q++){const ee=N.added[q];let ie=_.indexOf(ee);if(ie===-1){for(let he=0;he<v.length;he++)if(he>=_.length){_.push(ee),ie=he;break}else if(_[he]===null){_[he]=ee,ie=he;break}if(ie===-1)break}const O=v[ie];O&&O.connect(ee)}}const G=new U,W=new U;function K(N,q,ee){G.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(ee.matrixWorld);const ie=G.distanceTo(W),O=q.projectionMatrix.elements,he=ee.projectionMatrix.elements,fe=O[14]/(O[10]-1),de=O[14]/(O[10]+1),oe=(O[9]+1)/O[5],Be=(O[9]-1)/O[5],we=(O[8]-1)/O[0],_e=(he[8]+1)/he[0],xt=fe*we,Gt=fe*_e,ht=ie/(-we+_e),tn=ht*-we;q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(tn),N.translateZ(ht),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const nt=fe+ht,Fe=de+ht,In=xt-tn,nn=Gt+(ie-tn),A=oe*de/Fe*nt,w=Be*de/Fe*nt;N.projectionMatrix.makePerspective(In,nn,A,w,nt,Fe)}function L(N,q){q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;C.near=T.near=E.near=N.near,C.far=T.far=E.far=N.far,(P!==C.near||F!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,F=C.far);const q=N.parent,ee=C.cameras;L(C,q);for(let O=0;O<ee.length;O++)L(ee[O],q);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),N.matrix.copy(C.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const ie=N.children;for(let O=0,he=ie.length;O<he;O++)ie[O].updateMatrixWorld(!0);ee.length===2?K(C,E,T):C.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.getPlanes=function(){return x};let B=null;function V(N,q){if(c=q.getViewerPose(u||o),y=q,c!==null){const ee=c.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ie=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,ie=!0);for(let O=0;O<ee.length;O++){const he=ee[O];let fe=null;if(p!==null)fe=p.getViewport(he);else{const oe=d.getViewSubImage(f,he);fe=oe.viewport,O===0&&(e.setRenderTargetTextures(g,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(g))}let de=S[O];de===void 0&&(de=new An,de.layers.enable(O),de.viewport=new Pt,S[O]=de),de.matrix.fromArray(he.transform.matrix),de.projectionMatrix.fromArray(he.projectionMatrix),de.viewport.set(fe.x,fe.y,fe.width,fe.height),O===0&&C.matrix.copy(de.matrix),ie===!0&&C.cameras.push(de)}}for(let ee=0;ee<v.length;ee++){const ie=_[ee],O=v[ee];ie!==null&&O!==void 0&&O.update(ie,q,u||o)}if(B&&B(N,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ee=null;for(const ie of x)q.detectedPlanes.has(ie)||(ee===null&&(ee=[]),ee.push(ie));if(ee!==null)for(const ie of ee)x.delete(ie),M.delete(ie),i.dispatchEvent({type:"planeremoved",data:ie});for(const ie of q.detectedPlanes)if(!x.has(ie))x.add(ie),M.set(ie,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ie});else{const O=M.get(ie);ie.lastChangedTime>O&&(M.set(ie,ie.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ie}))}}y=null}const ne=new y0;ne.setAnimationLoop(V),this.setAnimationLoop=function(N){B=N},this.dispose=function(){}}}function S2(n,e){function t(h,m){m.color.getRGB(h.fogColor.value,m0(n)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function i(h,m,g,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(h,m):m.isMeshToonMaterial?(r(h,m),c(h,m)):m.isMeshPhongMaterial?(r(h,m),u(h,m)):m.isMeshStandardMaterial?(r(h,m),d(h,m),m.isMeshPhysicalMaterial&&f(h,m,_)):m.isMeshMatcapMaterial?(r(h,m),p(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),y(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(s(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?a(h,m,g,v):m.isSpriteMaterial?l(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.bumpMap&&(h.bumpMap.value=m.bumpMap,h.bumpScale.value=m.bumpScale,m.side===yn&&(h.bumpScale.value*=-1)),m.displacementMap&&(h.displacementMap.value=m.displacementMap,h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap),m.normalMap&&(h.normalMap.value=m.normalMap,h.normalScale.value.copy(m.normalScale),m.side===yn&&h.normalScale.value.negate()),m.specularMap&&(h.specularMap.value=m.specularMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const g=e.get(m).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap){h.lightMap.value=m.lightMap;const x=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.iridescenceMap?v=m.iridescenceMap:m.iridescenceThicknessMap?v=m.iridescenceThicknessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function a(h,m,g,v){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*g,h.scale.value=v*.5,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function c(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.roughness.value=m.roughness,h.metalness.value=m.metalness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function f(h,m,g){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),h.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===yn&&h.clearcoatNormalScale.value.negate())),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap)}function p(h,m){m.matcap&&(h.matcap.value=m.matcap)}function y(h,m){h.referencePosition.value.copy(m.referencePosition),h.nearDistance.value=m.nearDistance,h.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function M2(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function u(v,_){let x=r[v.id];x===void 0&&(y(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const M=_.program;i.updateUBOMapping(v,M);const E=e.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function c(v){const _=d();v.__bindingPointIndex=_;const x=n.createBuffer(),M=v.__size,E=v.usage;return n.bindBuffer(35345,x),n.bufferData(35345,M,E),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],x=v.uniforms,M=v.__cache;n.bindBuffer(35345,_);for(let E=0,T=x.length;E<T;E++){const S=x[E];if(p(S,E,M)===!0){const C=S.__offset,P=Array.isArray(S.value)?S.value:[S.value];let F=0;for(let H=0;H<P.length;H++){const D=P[H],I=h(D);typeof D=="number"?(S.__data[0]=D,n.bufferSubData(35345,C+F,S.__data)):D.isMatrix3?(S.__data[0]=D.elements[0],S.__data[1]=D.elements[1],S.__data[2]=D.elements[2],S.__data[3]=D.elements[0],S.__data[4]=D.elements[3],S.__data[5]=D.elements[4],S.__data[6]=D.elements[5],S.__data[7]=D.elements[0],S.__data[8]=D.elements[6],S.__data[9]=D.elements[7],S.__data[10]=D.elements[8],S.__data[11]=D.elements[0]):(D.toArray(S.__data,F),F+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,S.__data)}}n.bindBuffer(35345,null)}function p(v,_,x){const M=v.value;if(x[_]===void 0){if(typeof M=="number")x[_]=M;else{const E=Array.isArray(M)?M:[M],T=[];for(let S=0;S<E.length;S++)T.push(E[S].clone());x[_]=T}return!0}else if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{const E=Array.isArray(x[_])?x[_]:[x[_]],T=Array.isArray(M)?M:[M];for(let S=0;S<E.length;S++){const C=E[S];if(C.equals(T[S])===!1)return C.copy(T[S]),!0}}return!1}function y(v){const _=v.uniforms;let x=0;const M=16;let E=0;for(let T=0,S=_.length;T<S;T++){const C=_[T],P={boundary:0,storage:0},F=Array.isArray(C.value)?C.value:[C.value];for(let H=0,D=F.length;H<D;H++){const I=F[H],G=h(I);P.boundary+=G.boundary,P.storage+=G.storage}if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,T>0){E=x%M;const H=M-E;E!==0&&H-P.boundary<0&&(x+=M-E,C.__offset=x)}x+=P.storage}return E=x%M,E>0&&(x+=M-E),v.__size=x,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function g(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function w2(){const n=yl("canvas");return n.style.display="block",n}function b0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:w2(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tr,this.physicallyCorrectLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const h=this;let m=!1,g=0,v=0,_=null,x=-1,M=null;const E=new Pt,T=new Pt;let S=null,C=e.width,P=e.height,F=1,H=null,D=null;const I=new Pt(0,0,C,P),G=new Pt(0,0,C,P);let W=!1;const K=new _0;let L=!1,B=!1,V=null;const ne=new vt,N=new ke,q=new U,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return _===null?F:1}let O=t;function he(b,z){for(let $=0;$<b.length;$++){const k=b[$],Y=e.getContext(k,z);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jf}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),O===null){const z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&z.shift(),O=he(z,b),O===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let fe,de,oe,Be,we,_e,xt,Gt,ht,tn,nt,Fe,In,nn,A,w,X,te,re,ae,be,le,Z,ye;function Me(){fe=new kM(O),de=new CM(O,fe,n),fe.init(de),le=new g2(O,fe,de),oe=new p2(O,fe,de),Be=new FM,we=new e2,_e=new m2(O,fe,oe,we,de,le,Be),xt=new PM(h),Gt=new IM(h),ht=new Xx(O,de),Z=new EM(O,fe,ht,de),tn=new NM(O,ht,Be,Z),nt=new GM(O,tn,ht,Be),re=new BM(O,de,_e),w=new AM(we),Fe=new Jw(h,xt,Gt,fe,de,Z,w),In=new S2(h,we),nn=new n2,A=new l2(fe,de),te=new bM(h,xt,Gt,oe,nt,c,o),X=new h2(h,nt,de),ye=new M2(O,Be,de,oe),ae=new TM(O,fe,Be,de),be=new zM(O,fe,Be,de),Be.programs=Fe.programs,h.capabilities=de,h.extensions=fe,h.properties=we,h.renderLists=nn,h.shadowMap=X,h.state=oe,h.info=Be}Me();const pe=new x2(h,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(C,P,!1))},this.getSize=function(b){return b.set(C,P)},this.setSize=function(b,z,$){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=b,P=z,e.width=Math.floor(b*F),e.height=Math.floor(z*F),$!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(C*F,P*F).floor()},this.setDrawingBufferSize=function(b,z,$){C=b,P=z,F=$,e.width=Math.floor(b*$),e.height=Math.floor(z*$),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,z,$,k){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,z,$,k),oe.viewport(E.copy(I).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(G)},this.setScissor=function(b,z,$,k){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,z,$,k),oe.scissor(T.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(b){oe.setScissorTest(W=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,z=!0,$=!0){let k=0;b&&(k|=16384),z&&(k|=256),$&&(k|=1024),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),nn.dispose(),A.dispose(),we.dispose(),xt.dispose(),Gt.dispose(),nt.dispose(),Z.dispose(),ye.dispose(),Fe.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ue),pe.removeEventListener("sessionend",me),V&&(V.dispose(),V=null),Oe.stop()};function xe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const b=Be.autoReset,z=X.enabled,$=X.autoUpdate,k=X.needsUpdate,Y=X.type;Me(),Be.autoReset=b,X.enabled=z,X.autoUpdate=$,X.needsUpdate=k,X.type=Y}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ye(b){const z=b.target;z.removeEventListener("dispose",Ye),St(z)}function St(b){R(b),we.remove(b)}function R(b){const z=we.get(b).programs;z!==void 0&&(z.forEach(function($){Fe.releaseProgram($)}),b.isShaderMaterial&&Fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,$,k,Y,ve){z===null&&(z=ee);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Ce=A0(b,z,$,k,Y);oe.setMaterial(k,Ee);let Ae=$.index,ze=1;k.wireframe===!0&&(Ae=tn.getWireframeAttribute($),ze=2);const Le=$.drawRange,Re=$.attributes.position;let ot=Le.start*ze,cn=(Le.start+Le.count)*ze;ve!==null&&(ot=Math.max(ot,ve.start*ze),cn=Math.min(cn,(ve.start+ve.count)*ze)),Ae!==null?(ot=Math.max(ot,0),cn=Math.min(cn,Ae.count)):Re!=null&&(ot=Math.max(ot,0),cn=Math.min(cn,Re.count));const ii=cn-ot;if(ii<0||ii===1/0)return;Z.setup(Y,k,Ce,$,Ae);let er,at=ae;if(Ae!==null&&(er=ht.get(Ae),at=be,at.setIndex(er)),Y.isMesh)k.wireframe===!0?(oe.setLineWidth(k.wireframeLinewidth*ie()),at.setMode(1)):at.setMode(4);else if(Y.isLine){let De=k.linewidth;De===void 0&&(De=1),oe.setLineWidth(De*ie()),Y.isLineSegments?at.setMode(1):Y.isLineLoop?at.setMode(2):at.setMode(3)}else Y.isPoints?at.setMode(0):Y.isSprite&&at.setMode(4);if(Y.isInstancedMesh)at.renderInstances(ot,ii,Y.count);else if($.isInstancedBufferGeometry){const De=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Vl=Math.min($.instanceCount,De);at.renderInstances(ot,ii,Vl)}else at.render(ot,ii)},this.compile=function(b,z){function $(k,Y,ve){k.transparent===!0&&k.side===ki&&k.forceSinglePass===!1?(k.side=yn,k.needsUpdate=!0,wn(k,Y,ve),k.side=Yi,k.needsUpdate=!0,wn(k,Y,ve),k.side=ki):wn(k,Y,ve)}f=A.get(b),f.init(),y.push(f),b.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(h.physicallyCorrectLights),b.traverse(function(k){const Y=k.material;if(Y)if(Array.isArray(Y))for(let ve=0;ve<Y.length;ve++){const Ee=Y[ve];$(Ee,b,k)}else $(Y,b,k)}),y.pop(),f=null};let j=null;function J(b){j&&j(b)}function ue(){Oe.stop()}function me(){Oe.start()}const Oe=new y0;Oe.setAnimationLoop(J),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(b){j=b,pe.setAnimationLoop(b),b===null?Oe.stop():Oe.start()},pe.addEventListener("sessionstart",ue),pe.addEventListener("sessionend",me),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(h,b,z,_),f=A.get(b,y.length),f.init(),y.push(f),ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(ne),B=this.localClippingEnabled,L=w.init(this.clippingPlanes,B),d=nn.get(b,p.length),d.init(),p.push(d),Mt(b,z,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(H,D),L===!0&&w.beginShadows();const $=f.state.shadowsArray;if(X.render($,b,z),L===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,b),f.setupLights(h.physicallyCorrectLights),z.isArrayCamera){const k=z.cameras;for(let Y=0,ve=k.length;Y<ve;Y++){const Ee=k[Y];Dt(d,b,Ee,Ee.viewport)}}else Dt(d,b,z);_!==null&&(_e.updateMultisampleRenderTarget(_),_e.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(h,b,z),Z.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function Mt(b,z,$,k){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){k&&q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const Ee=nt.update(b),Ce=b.material;Ce.visible&&d.push(b,Ee,Ce,$,q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Be.render.frame&&(b.skeleton.update(),b.skeleton.frame=Be.render.frame),!b.frustumCulled||K.intersectsObject(b))){k&&q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const Ee=nt.update(b),Ce=b.material;if(Array.isArray(Ce)){const Ae=Ee.groups;for(let ze=0,Le=Ae.length;ze<Le;ze++){const Re=Ae[ze],ot=Ce[Re.materialIndex];ot&&ot.visible&&d.push(b,Ee,ot,$,q.z,Re)}}else Ce.visible&&d.push(b,Ee,Ce,$,q.z,null)}}const ve=b.children;for(let Ee=0,Ce=ve.length;Ee<Ce;Ee++)Mt(ve[Ee],z,$,k)}function Dt(b,z,$,k){const Y=b.opaque,ve=b.transmissive,Ee=b.transparent;f.setupLightsView($),L===!0&&w.setGlobalState(h.clippingPlanes,$),ve.length>0&&Ji(Y,z,$),k&&oe.viewport(E.copy(k)),Y.length>0&&Ze(Y,z,$),ve.length>0&&Ze(ve,z,$),Ee.length>0&&Ze(Ee,z,$),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ji(b,z,$){const k=de.isWebGL2;V===null&&(V=new Cr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Uo:Er,minFilter:Fo,samples:k&&s===!0?4:0})),h.getDrawingBufferSize(N),k?V.setSize(N.x,N.y):V.setSize(ef(N.x),ef(N.y));const Y=h.getRenderTarget();h.setRenderTarget(V),h.clear();const ve=h.toneMapping;h.toneMapping=pi,Ze(b,z,$),h.toneMapping=ve,_e.updateMultisampleRenderTarget(V),_e.updateRenderTargetMipmap(V),h.setRenderTarget(Y)}function Ze(b,z,$){const k=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,ve=b.length;Y<ve;Y++){const Ee=b[Y],Ce=Ee.object,Ae=Ee.geometry,ze=k===null?Ee.material:k,Le=Ee.group;Ce.layers.test($.layers)&&ni(Ce,z,$,Ae,ze,Le)}}function ni(b,z,$,k,Y,ve){b.onBeforeRender(h,z,$,k,Y,ve),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(h,z,$,k,b,ve),Y.transparent===!0&&Y.side===ki&&Y.forceSinglePass===!1?(Y.side=yn,Y.needsUpdate=!0,h.renderBufferDirect($,z,k,Y,b,ve),Y.side=Yi,Y.needsUpdate=!0,h.renderBufferDirect($,z,k,Y,b,ve),Y.side=ki):h.renderBufferDirect($,z,k,Y,b,ve),b.onAfterRender(h,z,$,k,Y,ve)}function wn(b,z,$){z.isScene!==!0&&(z=ee);const k=we.get(b),Y=f.state.lights,ve=f.state.shadowsArray,Ee=Y.state.version,Ce=Fe.getParameters(b,Y.state,ve,z,$),Ae=Fe.getProgramCacheKey(Ce);let ze=k.programs;k.environment=b.isMeshStandardMaterial?z.environment:null,k.fog=z.fog,k.envMap=(b.isMeshStandardMaterial?Gt:xt).get(b.envMap||k.environment),ze===void 0&&(b.addEventListener("dispose",Ye),ze=new Map,k.programs=ze);let Le=ze.get(Ae);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===Ee)return nd(b,Ce),Le}else Ce.uniforms=Fe.getUniforms(b),b.onBuild($,Ce,h),b.onBeforeCompile(Ce,h),Le=Fe.acquireProgram(Ce,Ae),ze.set(Ae,Le),k.uniforms=Ce.uniforms;const Re=k.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=w.uniform),nd(b,Ce),k.needsLights=L0(b),k.lightsStateVersion=Ee,k.needsLights&&(Re.ambientLightColor.value=Y.state.ambient,Re.lightProbe.value=Y.state.probe,Re.directionalLights.value=Y.state.directional,Re.directionalLightShadows.value=Y.state.directionalShadow,Re.spotLights.value=Y.state.spot,Re.spotLightShadows.value=Y.state.spotShadow,Re.rectAreaLights.value=Y.state.rectArea,Re.ltc_1.value=Y.state.rectAreaLTC1,Re.ltc_2.value=Y.state.rectAreaLTC2,Re.pointLights.value=Y.state.point,Re.pointLightShadows.value=Y.state.pointShadow,Re.hemisphereLights.value=Y.state.hemi,Re.directionalShadowMap.value=Y.state.directionalShadowMap,Re.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Re.spotShadowMap.value=Y.state.spotShadowMap,Re.spotLightMatrix.value=Y.state.spotLightMatrix,Re.spotLightMap.value=Y.state.spotLightMap,Re.pointShadowMap.value=Y.state.pointShadowMap,Re.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ot=Le.getUniforms(),cn=qa.seqWithValue(ot.seq,Re);return k.currentProgram=Le,k.uniformsList=cn,Le}function nd(b,z){const $=we.get(b);$.outputEncoding=z.outputEncoding,$.instancing=z.instancing,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function A0(b,z,$,k,Y){z.isScene!==!0&&(z=ee),_e.resetTextureUnits();const ve=z.fog,Ee=k.isMeshStandardMaterial?z.environment:null,Ce=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Tr,Ae=(k.isMeshStandardMaterial?Gt:xt).get(k.envMap||Ee),ze=k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Le=!!k.normalMap&&!!$.attributes.tangent,Re=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,cn=!!$.morphAttributes.color,ii=k.toneMapped?h.toneMapping:pi,er=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,at=er!==void 0?er.length:0,De=we.get(k),Vl=f.state.lights;if(L===!0&&(B===!0||b!==M)){const fn=b===M&&k.id===x;w.setState(k,b,fn)}let wt=!1;k.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Vl.state.version||De.outputEncoding!==Ce||Y.isInstancedMesh&&De.instancing===!1||!Y.isInstancedMesh&&De.instancing===!0||Y.isSkinnedMesh&&De.skinning===!1||!Y.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ae||k.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==w.numPlanes||De.numIntersection!==w.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==Le||De.morphTargets!==Re||De.morphNormals!==ot||De.morphColors!==cn||De.toneMapping!==ii||de.isWebGL2===!0&&De.morphTargetsCount!==at)&&(wt=!0):(wt=!0,De.__version=k.version);let tr=De.currentProgram;wt===!0&&(tr=wn(k,z,Y));let id=!1,zs=!1,Wl=!1;const Vt=tr.getUniforms(),nr=De.uniforms;if(oe.useProgram(tr.program)&&(id=!0,zs=!0,Wl=!0),k.id!==x&&(x=k.id,zs=!0),id||M!==b){if(Vt.setValue(O,"projectionMatrix",b.projectionMatrix),de.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),M!==b&&(M=b,zs=!0,Wl=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const fn=Vt.map.cameraPosition;fn!==void 0&&fn.setValue(O,q.setFromMatrixPosition(b.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Y.isSkinnedMesh)&&Vt.setValue(O,"viewMatrix",b.matrixWorldInverse)}if(Y.isSkinnedMesh){Vt.setOptional(O,Y,"bindMatrix"),Vt.setOptional(O,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(de.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Vt.setValue(O,"boneTexture",fn.boneTexture,_e),Vt.setValue(O,"boneTextureSize",fn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hl=$.morphAttributes;if((Hl.position!==void 0||Hl.normal!==void 0||Hl.color!==void 0&&de.isWebGL2===!0)&&re.update(Y,$,k,tr),(zs||De.receiveShadow!==Y.receiveShadow)&&(De.receiveShadow=Y.receiveShadow,Vt.setValue(O,"receiveShadow",Y.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(nr.envMap.value=Ae,nr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),zs&&(Vt.setValue(O,"toneMappingExposure",h.toneMappingExposure),De.needsLights&&P0(nr,Wl),ve&&k.fog===!0&&In.refreshFogUniforms(nr,ve),In.refreshMaterialUniforms(nr,k,F,P,V),qa.upload(O,De.uniformsList,nr,_e)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qa.upload(O,De.uniformsList,nr,_e),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Vt.setValue(O,"center",Y.center),Vt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Vt.setValue(O,"normalMatrix",Y.normalMatrix),Vt.setValue(O,"modelMatrix",Y.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const fn=k.uniformsGroups;for(let Xl=0,R0=fn.length;Xl<R0;Xl++)if(de.isWebGL2){const rd=fn[Xl];ye.update(rd,tr),ye.bind(rd,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function P0(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function L0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,z,$){we.get(b.texture).__webglTexture=z,we.get(b.depthTexture).__webglTexture=$;const k=we.get(b);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=$===void 0,k.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const $=we.get(b);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,$=0){_=b,g=z,v=$;let k=!0,Y=null,ve=!1,Ee=!1;if(b){const Ae=we.get(b);Ae.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),k=!1):Ae.__webglFramebuffer===void 0?_e.setupRenderTarget(b):Ae.__hasExternalTextures&&_e.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Le=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Y=Le[z],ve=!0):de.isWebGL2&&b.samples>0&&_e.useMultisampledRTT(b)===!1?Y=we.get(b).__webglMultisampledFramebuffer:Y=Le,E.copy(b.viewport),T.copy(b.scissor),S=b.scissorTest}else E.copy(I).multiplyScalar(F).floor(),T.copy(G).multiplyScalar(F).floor(),S=W;if(oe.bindFramebuffer(36160,Y)&&de.drawBuffers&&k&&oe.drawBuffers(b,Y),oe.viewport(E),oe.scissor(T),oe.setScissorTest(S),ve){const Ae=we.get(b.texture);O.framebufferTexture2D(36160,36064,34069+z,Ae.__webglTexture,$)}else if(Ee){const Ae=we.get(b.texture),ze=z||0;O.framebufferTextureLayer(36160,36064,Ae.__webglTexture,$||0,ze)}x=-1},this.readRenderTargetPixels=function(b,z,$,k,Y,ve,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){oe.bindFramebuffer(36160,Ce);try{const Ae=b.texture,ze=Ae.format,Le=Ae.type;if(ze!==Vn&&le.convert(ze)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===Uo&&(fe.has("EXT_color_buffer_half_float")||de.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Le!==Er&&le.convert(Le)!==O.getParameter(35738)&&!(Le===mr&&(de.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-k&&$>=0&&$<=b.height-Y&&O.readPixels(z,$,k,Y,le.convert(ze),le.convert(Le),ve)}finally{const Ae=_!==null?we.get(_).__webglFramebuffer:null;oe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(b,z,$=0){const k=Math.pow(2,-$),Y=Math.floor(z.image.width*k),ve=Math.floor(z.image.height*k);_e.setTexture2D(z,0),O.copyTexSubImage2D(3553,$,0,0,b.x,b.y,Y,ve),oe.unbindTexture()},this.copyTextureToTexture=function(b,z,$,k=0){const Y=z.image.width,ve=z.image.height,Ee=le.convert($.format),Ce=le.convert($.type);_e.setTexture2D($,0),O.pixelStorei(37440,$.flipY),O.pixelStorei(37441,$.premultiplyAlpha),O.pixelStorei(3317,$.unpackAlignment),z.isDataTexture?O.texSubImage2D(3553,k,b.x,b.y,Y,ve,Ee,Ce,z.image.data):z.isCompressedTexture?O.compressedTexSubImage2D(3553,k,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Ee,z.mipmaps[0].data):O.texSubImage2D(3553,k,b.x,b.y,Ee,Ce,z.image),k===0&&$.generateMipmaps&&O.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(b,z,$,k,Y=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=b.max.x-b.min.x+1,Ee=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,Ae=le.convert(k.format),ze=le.convert(k.type);let Le;if(k.isData3DTexture)_e.setTexture3D(k,0),Le=32879;else if(k.isDataArrayTexture)_e.setTexture2DArray(k,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,k.flipY),O.pixelStorei(37441,k.premultiplyAlpha),O.pixelStorei(3317,k.unpackAlignment);const Re=O.getParameter(3314),ot=O.getParameter(32878),cn=O.getParameter(3316),ii=O.getParameter(3315),er=O.getParameter(32877),at=$.isCompressedTexture?$.mipmaps[0]:$.image;O.pixelStorei(3314,at.width),O.pixelStorei(32878,at.height),O.pixelStorei(3316,b.min.x),O.pixelStorei(3315,b.min.y),O.pixelStorei(32877,b.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Le,Y,z.x,z.y,z.z,ve,Ee,Ce,Ae,ze,at.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Le,Y,z.x,z.y,z.z,ve,Ee,Ce,Ae,at.data)):O.texSubImage3D(Le,Y,z.x,z.y,z.z,ve,Ee,Ce,Ae,ze,at),O.pixelStorei(3314,Re),O.pixelStorei(32878,ot),O.pixelStorei(3316,cn),O.pixelStorei(3315,ii),O.pixelStorei(32877,er),Y===0&&k.generateMipmaps&&O.generateMipmap(Le),oe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?_e.setTextureCube(b,0):b.isData3DTexture?_e.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_e.setTexture2DArray(b,0):_e.setTexture2D(b,0),oe.unbindTexture()},this.resetState=function(){g=0,v=0,_=null,oe.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class b2 extends b0{}b2.prototype.isWebGL1Renderer=!0;class E2 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class T2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new U;class xl{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=He(t,this.array),i=He(i,this.array),r=He(r,this.array),s=He(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nf extends ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const Js=new U,qr=new U,Yr=new U,Zr=new ke,eo=new ke,E0=new vt,La=new U,to=new U,Ra=new U,Lp=new ke,Ku=new ke,Rp=new ke;class Dp extends Qt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new ti;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new T2(t,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new xl(i,3,0,!1)),$r.setAttribute("uv",new xl(i,2,3,!1))}this.geometry=$r,this.material=e!==void 0?e:new nf,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),E0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Da(La.set(-.5,-.5,0),Yr,o,qr,r,s),Da(to.set(.5,-.5,0),Yr,o,qr,r,s),Da(Ra.set(.5,.5,0),Yr,o,qr,r,s),Lp.set(0,0),Ku.set(1,0),Rp.set(1,1);let a=e.ray.intersectTriangle(La,to,Ra,!1,Js);if(a===null&&(Da(to.set(-.5,.5,0),Yr,o,qr,r,s),Ku.set(0,1),a=e.ray.intersectTriangle(La,Ra,to,!1,Js),a===null))return;const l=e.ray.origin.distanceTo(Js);l<e.near||l>e.far||t.push({distance:l,point:Js.clone(),uv:Qn.getUV(Js,La,to,Ra,Lp,Ku,Rp,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Da(n,e,t,i,r,s){Zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(eo.x=s*Zr.x-r*Zr.y,eo.y=r*Zr.x+s*Zr.y):eo.copy(Zr),n.copy(e),n.x+=eo.x,n.y+=eo.y,n.applyMatrix4(E0)}class T0 extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ip=new vt,rf=new c0,Ia=new Ol,ka=new U;class C2 extends Qt{constructor(e=new ti,t=new T0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,e.ray.intersectsSphere(Ia)===!1)return;Ip.copy(r).invert(),rf.copy(e.ray).applyMatrix4(Ip);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=f,h=p;y<h;y++){const m=u.getX(y);ka.fromBufferAttribute(d,m),kp(ka,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=f,h=p;y<h;y++)ka.fromBufferAttribute(d,y),kp(ka,y,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kp(n,e,t,i,r,s,o){const a=rf.distanceSqToPoint(n);if(a<t){const l=new U;rf.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class A2 extends un{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);const Ft=Ke.createElement;function P2({active:n}){const e=Se.useRef(null),t=Se.useRef(null),i=Se.useRef({down:!1,lastX:0,lastY:0,moved:!1}),r=["Не так резко. Всех человеков раскидаешь. Лучше объединяйся!","Похоже, сегодня у кого-то утро будет раньше… Или позже. Всё зависит от тебя!","Остановись! Хочешь стать причиной глобального потепления?","Ну всё. Ось Земли смещена. На Алтае теперь будет всегда лето.","Меня, кажется, укачало. Тебе лучше отойти в сторону.","Аккуратнее со мной. Поверь, у меня в тысячу раз лучше, чем на Марсе.","Хватит крутить меня. Лучше вступи в движение «Вершина Олимпа».","Твоё время пришло! Записывайся к Тимуру на стратегическую сессию и найди свою глобальную цель!","Эпоха потребления подходит к концу. Отныне я вращаюсь только для тех, кто созидает."],s=Se.useRef([]),o=Se.useRef(null);function a(){if(!i.current.moved||!o.current)return;s.current.length||(s.current=r.map((c,d)=>d).sort(()=>Math.random()-.5));const l=r[s.current.pop()],u=o.current;u.style.transition="opacity 0.28s ease",u.style.opacity="0",setTimeout(()=>{u.textContent=l,u.classList.add("has-message"),u.style.transition="",u.style.opacity=""},320),i.current.moved=!1}return Se.useEffect(()=>{if(!n)return;const u=setTimeout(()=>{t.current&&(t.current.appearAt=performance.now())},320);return()=>clearTimeout(u)},[n]),Se.useEffect(()=>{const l=e.current;if(!l)return;let u=!1,c=0;const d=new E2,f=new An(38,Math.max(.2,l.clientWidth/Math.max(1,l.clientHeight)),1,6e3),p=100,y=window.innerWidth<720?p*5.6:p*4.3;f.position.set(0,0,y);const h=new b0({alpha:!0,antialias:!0});h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setSize(l.clientWidth||600,l.clientHeight||600),h.setClearColor(0,0),h.domElement.style.cssText="width:100%;height:100%;display:block;",l.appendChild(h.domElement);function m(P){const F=document.createElement("canvas");F.width=F.height=64;const H=F.getContext("2d"),D=H.createRadialGradient(32,32,0,32,32,32);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(P,"rgba(255,255,255,0.85)"),D.addColorStop(.62,"rgba(255,255,255,0.22)"),D.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=D,H.fillRect(0,0,64,64);const I=new A2(F);return I.needsUpdate=!0,I}const g=m(.28),v=new lo;v.rotation.x=-.24,v.rotation.y=2.05,v.scale.setScalar(.001),d.add(v);const _=new Dp(new nf({map:m(.5),color:13935988,transparent:!0,opacity:0,blending:yo,depthWrite:!1}));_.scale.set(p*4.4,p*4.4,1),_.position.z=-p*.6,d.add(_);const x=new nf({map:m(.3),color:15911290,transparent:!0,opacity:0,blending:yo,depthWrite:!1}),M=new Dp(x);M.scale.set(0,0,1),d.add(M),t.current={appearAt:-1,group:v};function E(P){const F=Math.min(1,Math.max(0,P));return 1-(1-F)*(1-F)*(1-F)}function T(P){return new Promise(F=>{const H=new Image;H.crossOrigin="anonymous",H.onload=()=>F(H),H.onerror=()=>F(null),H.src=P})}Promise.all([T("https://unpkg.com/three-globe/example/img/earth-water.png"),T("https://unpkg.com/three-globe/example/img/earth-night.jpg")]).then(([P,F])=>{if(u)return;const H=1024,D=512;function I(he){if(!he)return null;const fe=document.createElement("canvas");fe.width=H,fe.height=D;const de=fe.getContext("2d");de.drawImage(he,0,0,H,D);try{return de.getImageData(0,0,H,D).data}catch{return null}}const G=I(P),W=I(F);function K(he,fe,de){if(!he)return 0;const oe=Math.min(H-1,Math.max(0,fe*H|0)),we=(Math.min(D-1,Math.max(0,de*D|0))*H+oe)*4;return(he[we]*.299+he[we+1]*.587+he[we+2]*.114)/255}const L=[],B=[],V=new Ge(14722638),ne=new Ge(16174978),N=new Ge(16772802),q=new Ge,ee=360;for(let he=0;he<ee;he++){const fe=90-(he+.5)/ee*180,de=fe*Math.PI/180,oe=Math.max(1,Math.round(2*ee*Math.cos(de))),Be=180/ee,we=360/oe;for(let _e=0;_e<oe;_e++){const xt=-180+(_e+.5)/oe*360,Gt=(xt+180)/360,ht=(90-fe)/180,tn=K(G,Gt,ht),nt=K(W,Gt,ht);if(tn>.5||nt<.04&&Math.random()<.22)continue;const Fe=fe+(Math.random()-.5)*Be*.95,In=xt+(Math.random()-.5)*we*.95,nn=(90-Fe)*Math.PI/180,A=(In+180)*Math.PI/180,w=Math.sin(nn);L.push(-p*w*Math.cos(A),p*Math.cos(nn),p*w*Math.sin(A));const X=Math.min(1,.54+nt*2.2);X<.62?q.copy(V).lerp(ne,(X-.5)/.12):q.copy(ne).lerp(N,(X-.62)/.38),B.push(q.r,q.g,q.b)}}const ie=new ti;ie.setAttribute("position",new mi(L,3)),ie.setAttribute("color",new mi(B,3));const O=new T0({size:1.7,map:g,vertexColors:!0,transparent:!0,opacity:.8,blending:yo,depthWrite:!1,sizeAttenuation:!0});v.add(new C2(ie,O))});function S(){if(u)return;v.rotation.y+=9e-4;const P=t.current?t.current.appearAt:-1;if(P>0){const F=(performance.now()-P)/1e3,H=E(F/1.5);if(v.scale.setScalar(H),_.material.opacity=.065*Math.min(1,F/1.2),F<1.15){const D=F/1,I=p*(.8+D*4.2);M.scale.set(I,I,1);const G=Math.min(1,F*7);x.opacity=.55*G*Math.max(0,1-D*D)}else M.scale.set(0,0,1),x.opacity=0}h.render(d,f),c=requestAnimationFrame(S)}S();function C(){if(!l)return;const P=l.clientWidth,F=l.clientHeight;!P||!F||(f.aspect=P/F,f.updateProjectionMatrix(),h.setSize(P,F),f.position.z=window.innerWidth<720?p*5.6:p*4.3)}return window.addEventListener("resize",C),()=>{u=!0,cancelAnimationFrame(c),window.removeEventListener("resize",C);try{h.dispose()}catch{}try{h.domElement.parentNode===l&&l.removeChild(h.domElement)}catch{}}},[]),Ft("div",{ref:e,className:"globe-container",onMouseDown:l=>{i.current.down=!0,i.current.lastX=l.clientX,i.current.lastY=l.clientY,i.current.moved=!1,l.preventDefault()},onMouseMove:l=>{if(!i.current.down)return;const u=l.clientX-i.current.lastX,c=l.clientY-i.current.lastY;i.current.lastX=l.clientX,i.current.lastY=l.clientY,i.current.moved=!0,t.current&&t.current.group&&(t.current.group.rotation.y+=u*.005,t.current.group.rotation.x=Math.max(-1.4,Math.min(1.4,t.current.group.rotation.x+c*.005)))},onMouseUp:()=>{a(),i.current.down=!1},onMouseLeave:()=>{i.current.down=!1},onTouchStart:l=>{l.stopPropagation(),i.current.down=!0,i.current.lastX=l.touches[0].clientX,i.current.lastY=l.touches[0].clientY,i.current.moved=!1},onTouchMove:l=>{if(!i.current.down||!l.touches.length)return;const u=l.touches[0].clientX-i.current.lastX,c=l.touches[0].clientY-i.current.lastY;i.current.lastX=l.touches[0].clientX,i.current.lastY=l.touches[0].clientY,i.current.moved=!0,t.current&&t.current.group&&(t.current.group.rotation.y+=u*.005,t.current.group.rotation.x=Math.max(-1.4,Math.min(1.4,t.current.group.rotation.x+c*.005)))},onTouchEnd:l=>{l.stopPropagation(),a(),i.current.down=!1},style:{zIndex:5,pointerEvents:n?"auto":"none",cursor:n?"grab":"default",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"center",opacity:n?1:0,transition:"opacity 1.6s cubic-bezier(0.22,1,0.36,1) 0.3s"}},Ft("div",{className:"globe-spin-hint",ref:o},"↺ Покрути меня"))}function L2({active:n}){const e=Se.useRef(-1);Se.useEffect(()=>{e.current=n?performance.now()/1e3:-1},[n]);const t=Mi({active:!0,init:(i,r,s)=>{const o=r<720,a=o?r*.5:r*.74,l=o?s*.23:s*.5,u=o?s*.14:s*.3,c=160,d=[];for(let f=0;f<c;f++){const p=Math.random()*Math.PI*2,y=Math.min(r,s)*.16,h=Math.min(r,s)*.72,m=y+Math.random()*(h-y),g=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*u;d.push({sx:a+Math.cos(p)*m,sy:l+Math.sin(p)*m,tx:a+Math.cos(g)*v,ty:l+Math.sin(g)*v,delay:Math.random()*.9,dur:.5+Math.random()*.6,r:.5+Math.random()*1.2,warm:Math.random()<.65,swirl:(Math.random()<.5?1:-1)*(.03+Math.random()*.07)})}return{pts:d}},frame:(i,r,s,o,a)=>{i.clearRect(0,0,r,s);const l=e.current;if(l<0)return;const u=performance.now()/1e3-l;if(!(u<0||u>3))for(const c of a.pts){const d=u-c.delay;if(d<0||d>c.dur+.3)continue;const f=We(d/c.dur,0,1),p=xi(f),y=c.tx-c.sx,h=c.ty-c.sy,m=Math.hypot(y,h)||1,g=-h/m,v=y/m,_=c.swirl*m*(1-p),x=c.sx+y*p+g*_,M=c.sy+h*p+v*_,E=We((d-.09)/c.dur,0,1),T=xi(E),S=c.swirl*m*(1-T),C=c.sx+y*T+g*S,P=c.sy+h*T+v*S,F=We(d/.2,0,1),H=f>.72?1-We((f-.72)/.28,0,1):1,D=.4*F*H;if(D<.01)continue;f>.06&&E>.01&&(i.beginPath(),i.moveTo(C,P),i.lineTo(x,M),i.strokeStyle=c.warm?`rgba(255,218,135,${D*.36})`:`rgba(235,208,165,${D*.28})`,i.lineWidth=c.r*.52,i.lineCap="round",i.stroke());const I=c.r*2.3,G=i.createRadialGradient(x,M,0,x,M,I);G.addColorStop(0,c.warm?`rgba(255,232,175,${D})`:`rgba(235,218,190,${D*.9})`),G.addColorStop(.42,c.warm?`rgba(212,162,78,${D*.28})`:`rgba(202,182,144,${D*.24})`),G.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=G,i.beginPath(),i.arc(x,M,I,0,Math.PI*2),i.fill()}},deps:[n]});return Ke.createElement("canvas",{ref:t,className:"fx",style:{zIndex:4,pointerEvents:"none"}})}function R2({active:n}){return Ft("section",{className:"scene s7","data-active":n,"data-screen-label":"07"},Ft(Rr,{density:.16,radiusScale:.9,yMax:.45}),Ft(L2,{active:n}),Ft(P2,{active:n}),Ft("div",{className:"scene-inner"},Ft("div",{className:"s7-copy"},Ft("div",{className:"overline rise d1"},"07 — Миссия"),Ft("h2",{className:"display rise d2"},"Глобальная ",Ft("span",{className:"gold"},"цель")),Ft("p",{className:"lead rise d3"},"Объединить людей, готовых развиваться, и создать среду, усиливающую их движение. Итоговая цель — набрать критическую массу и изменить ход человечества."),Ft("a",{className:"btn btn--outline btn--detail rise d4",href:"https://codetimur.com/vision/",target:"_blank",rel:"noopener"},Ft("span",{className:"btn-sub"},"Подробнее про"),Ft("span",{className:"btn-main"},"Видение «Покори Олимп»",Ft("span",{className:"arr"},"→"))))))}const Ue=Ke.createElement,C0=[{screen:0,sub:0},{screen:1,sub:0},{screen:1,sub:1},{screen:2,sub:0},{screen:2,sub:1},{screen:3,sub:0},{screen:4,sub:0},{screen:5,sub:0},{screen:6,sub:0}],Np=C0.length-1,D2={1:1,2:1},I2=[0,1,3,5,6,7,8],k2=[{title:"Старт"},{title:"Исходный код"},{title:"Структура"},{title:"Экосистема"},{title:"Движение"},{title:"Проводник"},{title:"Миссия"}],zp={"Cormorant Garamond":"Cormorant Garamond",Playfair:"Playfair Display","PT Serif":"PT Serif",Lora:"Lora"},Fp={Manrope:"Manrope",Inter:"Inter",Golos:"Golos Text"},Up=new Set(["Cormorant Garamond","Manrope"]);function Op(n){if(!n||Up.has(n))return;Up.add(n);const e=document.createElement("link");e.rel="stylesheet",e.href=`https://fonts.googleapis.com/css2?family=${n.replace(/ /g,"+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap`,document.head.appendChild(e)}const N2={serif:"Cormorant Garamond",sans:"Manrope",warmth:.42};function z2(){const[n,e]=oy(N2),[t,i]=Se.useState(0),r=Se.useRef(0),s=Se.useRef(t);Se.useEffect(()=>{s.current=t},[t]);const o=Se.useCallback(f=>{if(window.__launchLock&&!window.__rocketFlying&&f!==0)return;const p=Math.max(0,Math.min(Np,f));i(p)},[]),a=Se.useCallback(()=>o(s.current+1),[o]);Se.useEffect(()=>(window.__ctGoTo=o,()=>{delete window.__ctGoTo}),[o]),Se.useEffect(()=>{function f(p){p.persisted&&i(0)}return window.addEventListener("pageshow",f),()=>window.removeEventListener("pageshow",f)},[]),Se.useEffect(()=>{const f=document.documentElement,p=zp[n.serif]||"Cormorant Garamond",y=Fp[n.sans]||"Manrope";Op(p),Op(y),f.style.setProperty("--serif",`'${p}', 'Cormorant Garamond', Georgia, serif`),f.style.setProperty("--sans",`'${y}', system-ui, sans-serif`),f.style.setProperty("--warm-a",String(n.warmth))},[n.serif,n.sans,n.warmth]),Se.useEffect(()=>{function f(v){if(window.__launchLock)return;const _=performance.now();_-r.current<700||(r.current=_,o(s.current+v))}function p(v){v.preventDefault(),!(Math.abs(v.deltaY)<8)&&f(v.deltaY>0?1:-1)}function y(v){["ArrowDown","ArrowRight","PageDown"," "].includes(v.key)?(v.preventDefault(),f(1)):["ArrowUp","ArrowLeft","PageUp"].includes(v.key)?(v.preventDefault(),f(-1)):v.key==="Home"?o(0):v.key==="End"&&o(Np)}let h=0;function m(v){h=v.touches[0].clientY}function g(v){const _=h-v.changedTouches[0].clientY;Math.abs(_)>42&&f(_>0?1:-1)}return window.addEventListener("wheel",p,{passive:!1}),window.addEventListener("keydown",y),window.addEventListener("touchstart",m,{passive:!0}),window.addEventListener("touchend",g,{passive:!0}),()=>{window.removeEventListener("wheel",p),window.removeEventListener("keydown",y),window.removeEventListener("touchstart",m),window.removeEventListener("touchend",g)}},[o]);const l=C0[t],u=f=>l.screen===f?l.sub:f<l.screen&&D2[f]||0,c=f=>l.screen===f,d=f=>({active:c(f),sub:u(f),onTap:a});return Ue(Ke.Fragment,null,Ue("div",{className:"stage"},Ue(dy,d(0)),Ue(my,d(1)),Ue(vy,d(2)),Ue(wy,d(3)),Ue(Ey,d(4)),Ue(Cy,d(5)),Ue(R2,d(6))),Ue(uy),Ue(cy,{screens:k2,screen:l.screen,onJump:f=>o(I2[f])}),Ue("footer",{className:"g-foot g-foot--fixed"+(l.screen===6?" g-foot--visible":"")},Ue("div",{className:"g-foot-row"},Ue("a",{href:"/",className:"g-foot-logo"},Ue("img",{src:"assets/logo.svg",alt:"Code Timur",height:26})),Ue("nav",{className:"g-foot-nav"},Ue("a",{href:"/apps/"},"Экосистема"),Ue("a",{href:"/mentorship/"},"Наставничество"),Ue("a",{href:"/teaching/"},"Учение"),Ue("a",{href:"/vision/"},"Видение")),Ue("div",{className:"g-foot-right"},Ue("a",{className:"g-foot-tg",href:"https://t.me/codetimur",target:"_blank",rel:"noopener"},Ue("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:15,height:15},Ue("path",{d:"M21.5 4.2 2.9 11.4c-1.3.5-1.3 1.2-.3 1.5l4.7 1.5 1.8 5.5c.2.6.4.8.8.8.4 0 .6-.2.8-.5l2.5-2.4 5.2 3.8c1 .5 1.6.3 1.9-.9l3.4-16c.4-1.5-.5-2.2-1.2-1.5z"})),"Telegram"),Ue("span",{className:"g-foot-copy"},"© 2026 · Код Тимура")))),Ue(ay,null,Ue(ph,{label:"Типографика"}),Ue(mh,{label:"Заголовки (serif)",value:n.serif,options:Object.keys(zp),onChange:f=>e("serif",f)}),Ue(mh,{label:"Текст (sans)",value:n.sans,options:Object.keys(Fp),onChange:f=>e("sans",f)}),Ue(ph,{label:"Атмосфера"}),Ue(ly,{label:"Тёплое свечение",value:n.warmth,min:0,max:.8,step:.02,onChange:f=>e("warmth",f)})))}Qu.createRoot(document.getElementById("root")).render(Ke.createElement(z2));
