(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Sv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pc={exports:{}},Io={},Lc={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Mv(){if(kp)return mt;kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function x(U,ne,De){this.props=U,this.context=ne,this.refs=T,this.updater=De||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=x.prototype;function I(U,ne,De){this.props=U,this.context=ne,this.refs=T,this.updater=De||S}var D=I.prototype=new _;D.constructor=I,w(D,x.prototype),D.isPureReactComponent=!0;var C=Array.isArray,Q=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(U,ne,De){var K,fe={},ie=null,re=null;if(ne!=null)for(K in ne.ref!==void 0&&(re=ne.ref),ne.key!==void 0&&(ie=""+ne.key),ne)Q.call(ne,K)&&!F.hasOwnProperty(K)&&(fe[K]=ne[K]);var ye=arguments.length-2;if(ye===1)fe.children=De;else if(1<ye){for(var we=Array(ye),Ue=0;Ue<ye;Ue++)we[Ue]=arguments[Ue+2];fe.children=we}if(U&&U.defaultProps)for(K in ye=U.defaultProps,ye)fe[K]===void 0&&(fe[K]=ye[K]);return{$$typeof:s,type:U,key:ie,ref:re,props:fe,_owner:z.current}}function b(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(De){return ne[De]})}var ae=/\/+/g;function J(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):ne.toString(36)}function de(U,ne,De,K,fe){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var re=!1;if(U===null)re=!0;else switch(ie){case"string":case"number":re=!0;break;case"object":switch(U.$$typeof){case s:case e:re=!0}}if(re)return re=U,fe=fe(re),U=K===""?"."+J(re,0):K,C(fe)?(De="",U!=null&&(De=U.replace(ae,"$&/")+"/"),de(fe,ne,De,"",function(Ue){return Ue})):fe!=null&&(R(fe)&&(fe=b(fe,De+(!fe.key||re&&re.key===fe.key?"":(""+fe.key).replace(ae,"$&/")+"/")+U)),ne.push(fe)),1;if(re=0,K=K===""?".":K+":",C(U))for(var ye=0;ye<U.length;ye++){ie=U[ye];var we=K+J(ie,ye);re+=de(ie,ne,De,we,fe)}else if(we=v(U),typeof we=="function")for(U=we.call(U),ye=0;!(ie=U.next()).done;)ie=ie.value,we=K+J(ie,ye++),re+=de(ie,ne,De,we,fe);else if(ie==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return re}function me(U,ne,De){if(U==null)return U;var K=[],fe=0;return de(U,K,"","",function(ie){return ne.call(De,ie,fe++)}),K}function le(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(De){(U._status===0||U._status===-1)&&(U._status=1,U._result=De)},function(De){(U._status===0||U._status===-1)&&(U._status=2,U._result=De)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},O={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:O,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:me,forEach:function(U,ne,De){me(U,function(){ne.apply(this,arguments)},De)},count:function(U){var ne=0;return me(U,function(){ne++}),ne},toArray:function(U){return me(U,function(ne){return ne})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=x,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=I,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,mt.act=se,mt.cloneElement=function(U,ne,De){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var K=w({},U.props),fe=U.key,ie=U.ref,re=U._owner;if(ne!=null){if(ne.ref!==void 0&&(ie=ne.ref,re=z.current),ne.key!==void 0&&(fe=""+ne.key),U.type&&U.type.defaultProps)var ye=U.type.defaultProps;for(we in ne)Q.call(ne,we)&&!F.hasOwnProperty(we)&&(K[we]=ne[we]===void 0&&ye!==void 0?ye[we]:ne[we])}var we=arguments.length-2;if(we===1)K.children=De;else if(1<we){ye=Array(we);for(var Ue=0;Ue<we;Ue++)ye[Ue]=arguments[Ue+2];K.children=ye}return{$$typeof:s,type:U.type,key:fe,ref:ie,props:K,_owner:re}},mt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},mt.createElement=X,mt.createFactory=function(U){var ne=X.bind(null,U);return ne.type=U,ne},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:f,render:U}},mt.isValidElement=R,mt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:le}},mt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},mt.startTransition=function(U){var ne=O.transition;O.transition={};try{U()}finally{O.transition=ne}},mt.unstable_act=se,mt.useCallback=function(U,ne){return ce.current.useCallback(U,ne)},mt.useContext=function(U){return ce.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},mt.useEffect=function(U,ne){return ce.current.useEffect(U,ne)},mt.useId=function(){return ce.current.useId()},mt.useImperativeHandle=function(U,ne,De){return ce.current.useImperativeHandle(U,ne,De)},mt.useInsertionEffect=function(U,ne){return ce.current.useInsertionEffect(U,ne)},mt.useLayoutEffect=function(U,ne){return ce.current.useLayoutEffect(U,ne)},mt.useMemo=function(U,ne){return ce.current.useMemo(U,ne)},mt.useReducer=function(U,ne,De){return ce.current.useReducer(U,ne,De)},mt.useRef=function(U){return ce.current.useRef(U)},mt.useState=function(U){return ce.current.useState(U)},mt.useSyncExternalStore=function(U,ne,De){return ce.current.useSyncExternalStore(U,ne,De)},mt.useTransition=function(){return ce.current.useTransition()},mt.version="18.3.1",mt}var Bp;function rd(){return Bp||(Bp=1,Lc.exports=Mv()),Lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Ev(){if(zp)return Io;zp=1;var s=rd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,m){var g,y={},v=null,S=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!u.hasOwnProperty(g)&&(y[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:S,props:y,_owner:a.current}}return Io.Fragment=n,Io.jsx=c,Io.jsxs=c,Io}var Vp;function wv(){return Vp||(Vp=1,Pc.exports=Ev()),Pc.exports}var it=wv(),xt=rd();const Tv=Sv(xt);var sl={},Dc={exports:{}},Pn={},Uc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Av(){return Hp||(Hp=1,(function(s){function e(O,ue){var se=O.length;O.push(ue);e:for(;0<se;){var U=se-1>>>1,ne=O[U];if(0<a(ne,ue))O[U]=ue,O[se]=ne,se=U;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var ue=O[0],se=O.pop();if(se!==ue){O[0]=se;e:for(var U=0,ne=O.length,De=ne>>>1;U<De;){var K=2*(U+1)-1,fe=O[K],ie=K+1,re=O[ie];if(0>a(fe,se))ie<ne&&0>a(re,fe)?(O[U]=re,O[ie]=se,U=ie):(O[U]=fe,O[K]=se,U=K);else if(ie<ne&&0>a(re,se))O[U]=re,O[ie]=se,U=ie;else break e}}return ue}function a(O,ue){var se=O.sortIndex-ue.sortIndex;return se!==0?se:O.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],m=[],g=1,y=null,v=3,S=!1,w=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(O){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=O)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function C(O){if(T=!1,D(O),!w)if(n(h)!==null)w=!0,le(Q);else{var ue=n(m);ue!==null&&ce(C,ue.startTime-O)}}function Q(O,ue){w=!1,T&&(T=!1,_(X),X=-1),S=!0;var se=v;try{for(D(ue),y=n(h);y!==null&&(!(y.expirationTime>ue)||O&&!k());){var U=y.callback;if(typeof U=="function"){y.callback=null,v=y.priorityLevel;var ne=U(y.expirationTime<=ue);ue=s.unstable_now(),typeof ne=="function"?y.callback=ne:y===n(h)&&r(h),D(ue)}else r(h);y=n(h)}if(y!==null)var De=!0;else{var K=n(m);K!==null&&ce(C,K.startTime-ue),De=!1}return De}finally{y=null,v=se,S=!1}}var z=!1,F=null,X=-1,b=5,R=-1;function k(){return!(s.unstable_now()-R<b)}function ae(){if(F!==null){var O=s.unstable_now();R=O;var ue=!0;try{ue=F(!0,O)}finally{ue?J():(z=!1,F=null)}}else z=!1}var J;if(typeof I=="function")J=function(){I(ae)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,me=de.port2;de.port1.onmessage=ae,J=function(){me.postMessage(null)}}else J=function(){x(ae,0)};function le(O){F=O,z||(z=!0,J())}function ce(O,ue){X=x(function(){O(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,le(Q))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(O){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var se=v;v=ue;try{return O()}finally{v=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,ue){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var se=v;v=O;try{return ue()}finally{v=se}},s.unstable_scheduleCallback=function(O,ue,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,O={id:g++,callback:ue,priorityLevel:O,startTime:se,expirationTime:ne,sortIndex:-1},se>U?(O.sortIndex=se,e(m,O),n(h)===null&&O===n(m)&&(T?(_(X),X=-1):T=!0,ce(C,se-U))):(O.sortIndex=ne,e(h,O),w||S||(w=!0,le(Q))),O},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(O){var ue=v;return function(){var se=v;v=ue;try{return O.apply(this,arguments)}finally{v=se}}}})(Ic)),Ic}var Gp;function Rv(){return Gp||(Gp=1,Uc.exports=Av()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Cv(){if(Wp)return Pn;Wp=1;var s=rd(),e=Rv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(t){return h.call(y,t)?!0:h.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);x[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);x[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);x[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,l)&&(o=null),l||d===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),O=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var De=!1;function K(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var l=Z}Reflect.construct(t,[],i)}else{try{i.call()}catch(Z){l=Z}t.call(i.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var d=Z.stack.split(`
`),p=l.stack.split(`
`),M=d.length-1,L=p.length-1;1<=M&&0<=L&&d[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(d[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||d[M]!==p[L]){var N=`
`+d[M].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=M&&0<=L);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function fe(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case b:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:ie(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return ie(t(i))}catch{}}return null}function re(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(t){var i=we(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=Ue(t))}function tt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=we(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Rt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function G(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ot(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function rt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){rt(t,i);var o=ye(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ct(t,i,o){(i!=="number"||Rt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var je=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(je(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ye(o)}}function ge(t,i){var o=ye(i.value),l=ye(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Ze(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Qe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function st(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,oe=null,pe=null;function Le(t){if(t=xo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ya(i),Ce(t.stateNode,t.type,i))}}function Pe(t){oe?pe?pe.push(t):pe=[t]:oe=t}function ot(){if(oe){var t=oe,i=pe;if(pe=oe=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function It(t,i){return t(i)}function jt(){}var yt=!1;function En(t,i,o){if(yt)return t(i,o);yt=!0;try{return It(t,i,o)}finally{yt=!1,(oe!==null||pe!==null)&&(jt(),ot())}}function mn(t,i){var o=t.stateNode;if(o===null)return null;var l=ya(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ts=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){ts=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{ts=!1}function Mi(t,i,o,l,d,p,M,L,N){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(o,Z)}catch(xe){this.onError(xe)}}var Ei=!1,Tr=null,Ar=!1,qi=null,ea={onError:function(t){Ei=!0,Tr=t}};function ns(t,i,o,l,d,p,M,L,N){Ei=!1,Tr=null,Mi.apply(ea,arguments)}function ta(t,i,o,l,d,p,M,L,N){if(ns.apply(this,arguments),Ei){if(Ei){var Z=Tr;Ei=!1,Tr=null}else throw Error(n(198));Ar||(Ar=!0,qi=Z)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function na(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ia(t){if(hi(t)!==t)throw Error(n(188))}function Ql(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ia(d),t;if(p===l)return ia(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=p;else{for(var M=!1,L=d.child;L;){if(L===o){M=!0,o=d,l=p;break}if(L===l){M=!0,l=d,o=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===o){M=!0,o=p,l=d;break}if(L===l){M=!0,l=p,o=d;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=Ql(t),t!==null?H(t):null}function H(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=H(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,W=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Ee=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,Je=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Tt=null,gt=null;function on(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Tt,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Et,Ye=Math.log,Jn=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(Ye(t)/Jn|0)|0}var an=64,ei=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~d;L!==0?l=qt(L):(p&=M,p!==0&&(l=qt(p)))}else M=o&~d,M!==0?l=qt(M):p!==0&&(l=qt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-at(i),d=1<<o,l|=t[o],i&=~d;return l}function Dt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-at(p),L=1<<M,N=d[M];N===-1?((L&o)===0||(L&l)!==0)&&(d[M]=Dt(L,i)):N<=i&&(t.expiredLanes|=L),p&=~L}}function wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=an;return an<<=1,(an&4194240)===0&&(an=64),t}function Vn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function wn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=o}function ra(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-at(o),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~p}}function Jl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-at(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var bt=0;function gd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var _d,eu,vd,xd,yd,tu=!1,sa=[],$i=null,Ki=null,Zi=null,no=new Map,io=new Map,Qi=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(t,i){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":no.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(i.pointerId)}}function ro(t,i,o,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=xo(i),i!==null&&eu(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Wg(t,i,o,l,d){switch(i){case"focusin":return $i=ro($i,t,i,o,l,d),!0;case"dragenter":return Ki=ro(Ki,t,i,o,l,d),!0;case"mouseover":return Zi=ro(Zi,t,i,o,l,d),!0;case"pointerover":var p=d.pointerId;return no.set(p,ro(no.get(p)||null,t,i,o,l,d)),!0;case"gotpointercapture":return p=d.pointerId,io.set(p,ro(io.get(p)||null,t,i,o,l,d)),!0}return!1}function Md(t){var i=Rr(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=na(o),i!==null){t.blockedOn=i,yd(t.priority,function(){vd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=iu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);At=l,o.target.dispatchEvent(l),At=null}else return i=xo(o),i!==null&&eu(i),t.blockedOn=o,!1;i.shift()}return!0}function Ed(t,i,o){oa(t)&&o.delete(i)}function Xg(){tu=!1,$i!==null&&oa($i)&&($i=null),Ki!==null&&oa(Ki)&&(Ki=null),Zi!==null&&oa(Zi)&&(Zi=null),no.forEach(Ed),io.forEach(Ed)}function so(t,i){t.blockedOn===i&&(t.blockedOn=null,tu||(tu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xg)))}function oo(t){function i(d){return so(d,t)}if(0<sa.length){so(sa[0],t);for(var o=1;o<sa.length;o++){var l=sa[o];l.blockedOn===t&&(l.blockedOn=null)}}for($i!==null&&so($i,t),Ki!==null&&so(Ki,t),Zi!==null&&so(Zi,t),no.forEach(i),io.forEach(i),o=0;o<Qi.length;o++)l=Qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Qi.length&&(o=Qi[0],o.blockedOn===null);)Md(o),o.blockedOn===null&&Qi.shift()}var is=C.ReactCurrentBatchConfig,aa=!0;function Yg(t,i,o,l){var d=bt,p=is.transition;is.transition=null;try{bt=1,nu(t,i,o,l)}finally{bt=d,is.transition=p}}function jg(t,i,o,l){var d=bt,p=is.transition;is.transition=null;try{bt=4,nu(t,i,o,l)}finally{bt=d,is.transition=p}}function nu(t,i,o,l){if(aa){var d=iu(t,i,o,l);if(d===null)yu(t,i,l,la,o),Sd(t,l);else if(Wg(d,t,i,o,l))l.stopPropagation();else if(Sd(t,l),i&4&&-1<Gg.indexOf(t)){for(;d!==null;){var p=xo(d);if(p!==null&&_d(p),p=iu(t,i,o,l),p===null&&yu(t,i,l,la,o),p===d)break;d=p}d!==null&&l.stopPropagation()}else yu(t,i,l,null,o)}}var la=null;function iu(t,i,o,l){if(la=null,t=V(l),t=Rr(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=na(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return la=t,null}function wd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case Je:return 4;case nt:case We:return 16;case vt:return 536870912;default:return 16}default:return 16}}var Ji=null,ru=null,ua=null;function Td(){if(ua)return ua;var t,i=ru,o=i.length,l,d="value"in Ji?Ji.value:Ji.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===d[p-l];l++);return ua=d.slice(t,1<l?1-l:void 0)}function ca(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Ad(){return!1}function Dn(t){function i(o,l,d,p,M){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fa:Ad,this.isPropagationStopped=Ad,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=Dn(rs),ao=se({},rs,{view:0,detail:0}),qg=Dn(ao),ou,au,lo,da=se({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(ou=t.screenX-lo.screenX,au=t.screenY-lo.screenY):au=ou=0,lo=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Rd=Dn(da),$g=se({},da,{dataTransfer:0}),Kg=Dn($g),Zg=se({},ao,{relatedTarget:0}),lu=Dn(Zg),Qg=se({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=Dn(Qg),e_=se({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t_=Dn(e_),n_=se({},rs,{data:0}),Cd=Dn(n_),i_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=s_[t])?!!i[t]:!1}function uu(){return o_}var a_=se({},ao,{key:function(t){if(t.key){var i=i_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(t){return t.type==="keypress"?ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l_=Dn(a_),u_=se({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Dn(u_),c_=se({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),f_=Dn(c_),d_=se({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),h_=Dn(d_),p_=se({},da,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m_=Dn(p_),g_=[9,13,27,32],cu=f&&"CompositionEvent"in window,uo=null;f&&"documentMode"in document&&(uo=document.documentMode);var __=f&&"TextEvent"in window&&!uo,Pd=f&&(!cu||uo&&8<uo&&11>=uo),Ld=" ",Dd=!1;function Ud(t,i){switch(t){case"keyup":return g_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function v_(t,i){switch(t){case"compositionend":return Id(i);case"keypress":return i.which!==32?null:(Dd=!0,Ld);case"textInput":return t=i.data,t===Ld&&Dd?null:t;default:return null}}function x_(t,i){if(ss)return t==="compositionend"||!cu&&Ud(t,i)?(t=Td(),ua=ru=Ji=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pd&&i.locale!=="ko"?null:i.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!y_[t.type]:i==="textarea"}function Fd(t,i,o,l){Pe(l),i=_a(i,"onChange"),0<i.length&&(o=new su("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var co=null,fo=null;function S_(t){eh(t,0)}function ha(t){var i=cs(t);if(tt(i))return t}function M_(t,i){if(t==="change")return i}var Od=!1;if(f){var fu;if(f){var du="oninput"in document;if(!du){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),du=typeof kd.oninput=="function"}fu=du}else fu=!1;Od=fu&&(!document.documentMode||9<document.documentMode)}function Bd(){co&&(co.detachEvent("onpropertychange",zd),fo=co=null)}function zd(t){if(t.propertyName==="value"&&ha(fo)){var i=[];Fd(i,fo,t,V(t)),En(S_,i)}}function E_(t,i,o){t==="focusin"?(Bd(),co=i,fo=o,co.attachEvent("onpropertychange",zd)):t==="focusout"&&Bd()}function w_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ha(fo)}function T_(t,i){if(t==="click")return ha(i)}function A_(t,i){if(t==="input"||t==="change")return ha(i)}function R_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:R_;function ho(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!h.call(i,d)||!ti(t[d],i[d]))return!1}return!0}function Vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hd(t,i){var o=Vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Vd(o)}}function Gd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Gd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Wd(){for(var t=window,i=Rt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Rt(t.document)}return i}function hu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function C_(t){var i=Wd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Gd(o.ownerDocument.documentElement,o)){if(l!==null&&hu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=Hd(o,p);var M=Hd(o,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b_=f&&"documentMode"in document&&11>=document.documentMode,os=null,pu=null,po=null,mu=!1;function Xd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;mu||os==null||os!==Rt(l)||(l=os,"selectionStart"in l&&hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),po&&ho(po,l)||(po=l,l=_a(pu,"onSelect"),0<l.length&&(i=new su("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=os)))}function pa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},gu={},Yd={};f&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ma(t){if(gu[t])return gu[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Yd)return gu[t]=i[o];return t}var jd=ma("animationend"),qd=ma("animationiteration"),$d=ma("animationstart"),Kd=ma("transitionend"),Zd=new Map,Qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,i){Zd.set(t,i),u(i,[t])}for(var _u=0;_u<Qd.length;_u++){var vu=Qd[_u],P_=vu.toLowerCase(),L_=vu[0].toUpperCase()+vu.slice(1);er(P_,"on"+L_)}er(jd,"onAnimationEnd"),er(qd,"onAnimationIteration"),er($d,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Kd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D_=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Jd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,ta(l,i,void 0,t),t.currentTarget=null}function eh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],N=L.instance,Z=L.currentTarget;if(L=L.listener,N!==p&&d.isPropagationStopped())break e;Jd(d,L,Z),p=N}else for(M=0;M<l.length;M++){if(L=l[M],N=L.instance,Z=L.currentTarget,L=L.listener,N!==p&&d.isPropagationStopped())break e;Jd(d,L,Z),p=N}}}if(Ar)throw t=qi,Ar=!1,qi=null,t}function Nt(t,i){var o=i[Au];o===void 0&&(o=i[Au]=new Set);var l=t+"__bubble";o.has(l)||(th(i,t,2,!1),o.add(l))}function xu(t,i,o){var l=0;i&&(l|=4),th(o,t,l,i)}var ga="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[ga]){t[ga]=!0,r.forEach(function(o){o!=="selectionchange"&&(D_.has(o)||xu(o,!1,t),xu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ga]||(i[ga]=!0,xu("selectionchange",!1,i))}}function th(t,i,o,l){switch(wd(i)){case 1:var d=Yg;break;case 4:d=jg;break;default:d=nu}o=d.bind(null,i,o,t),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function yu(t,i,o,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===d||L.nodeType===8&&L.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var N=M.tag;if((N===3||N===4)&&(N=M.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;M=M.return}for(;L!==null;){if(M=Rr(L),M===null)return;if(N=M.tag,N===5||N===6){l=p=M;continue e}L=L.parentNode}}l=l.return}En(function(){var Z=p,xe=V(o),Se=[];e:{var _e=Zd.get(t);if(_e!==void 0){var Ie=su,Be=t;switch(t){case"keypress":if(ca(o)===0)break e;case"keydown":case"keyup":Ie=l_;break;case"focusin":Be="focus",Ie=lu;break;case"focusout":Be="blur",Ie=lu;break;case"beforeblur":case"afterblur":Ie=lu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=f_;break;case jd:case qd:case $d:Ie=Jg;break;case Kd:Ie=h_;break;case"scroll":Ie=qg;break;case"wheel":Ie=m_;break;case"copy":case"cut":case"paste":Ie=t_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=bd}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",Y=Ve?_e!==null?_e+"Capture":null:_e;Ve=[];for(var B=Z,j;B!==null;){j=B;var Te=j.stateNode;if(j.tag===5&&Te!==null&&(j=Te,Y!==null&&(Te=mn(B,Y),Te!=null&&Ve.push(_o(B,Te,j)))),Gt)break;B=B.return}0<Ve.length&&(_e=new Ie(_e,Be,null,o,xe),Se.push({event:_e,listeners:Ve}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",_e&&o!==At&&(Be=o.relatedTarget||o.fromElement)&&(Rr(Be)||Be[Ti]))break e;if((Ie||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ie?(Be=o.relatedTarget||o.toElement,Ie=Z,Be=Be?Rr(Be):null,Be!==null&&(Gt=hi(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=Z),Ie!==Be)){if(Ve=Rd,Te="onMouseLeave",Y="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=bd,Te="onPointerLeave",Y="onPointerEnter",B="pointer"),Gt=Ie==null?_e:cs(Ie),j=Be==null?_e:cs(Be),_e=new Ve(Te,B+"leave",Ie,o,xe),_e.target=Gt,_e.relatedTarget=j,Te=null,Rr(xe)===Z&&(Ve=new Ve(Y,B+"enter",Be,o,xe),Ve.target=j,Ve.relatedTarget=Gt,Te=Ve),Gt=Te,Ie&&Be)t:{for(Ve=Ie,Y=Be,B=0,j=Ve;j;j=ls(j))B++;for(j=0,Te=Y;Te;Te=ls(Te))j++;for(;0<B-j;)Ve=ls(Ve),B--;for(;0<j-B;)Y=ls(Y),j--;for(;B--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ls(Ve),Y=ls(Y)}Ve=null}else Ve=null;Ie!==null&&nh(Se,_e,Ie,Ve,!1),Be!==null&&Gt!==null&&nh(Se,Gt,Be,Ve,!0)}}e:{if(_e=Z?cs(Z):window,Ie=_e.nodeName&&_e.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&_e.type==="file")var Xe=M_;else if(Nd(_e))if(Od)Xe=A_;else{Xe=w_;var $e=E_}else(Ie=_e.nodeName)&&Ie.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Xe=T_);if(Xe&&(Xe=Xe(t,Z))){Fd(Se,Xe,o,xe);break e}$e&&$e(t,_e,Z),t==="focusout"&&($e=_e._wrapperState)&&$e.controlled&&_e.type==="number"&&Ct(_e,"number",_e.value)}switch($e=Z?cs(Z):window,t){case"focusin":(Nd($e)||$e.contentEditable==="true")&&(os=$e,pu=Z,po=null);break;case"focusout":po=pu=os=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Xd(Se,o,xe);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":Xd(Se,o,xe)}var Ke;if(cu)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else ss?Ud(t,o)&&(et="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(et="onCompositionStart");et&&(Pd&&o.locale!=="ko"&&(ss||et!=="onCompositionStart"?et==="onCompositionEnd"&&ss&&(Ke=Td()):(Ji=xe,ru="value"in Ji?Ji.value:Ji.textContent,ss=!0)),$e=_a(Z,et),0<$e.length&&(et=new Cd(et,t,null,o,xe),Se.push({event:et,listeners:$e}),Ke?et.data=Ke:(Ke=Id(o),Ke!==null&&(et.data=Ke)))),(Ke=__?v_(t,o):x_(t,o))&&(Z=_a(Z,"onBeforeInput"),0<Z.length&&(xe=new Cd("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:Z}),xe.data=Ke))}eh(Se,i)})}function _o(t,i,o){return{instance:t,listener:i,currentTarget:o}}function _a(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=mn(t,o),p!=null&&l.unshift(_o(t,p,d)),p=mn(t,i),p!=null&&l.push(_o(t,p,d))),t=t.return}return l}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nh(t,i,o,l,d){for(var p=i._reactName,M=[];o!==null&&o!==l;){var L=o,N=L.alternate,Z=L.stateNode;if(N!==null&&N===l)break;L.tag===5&&Z!==null&&(L=Z,d?(N=mn(o,p),N!=null&&M.unshift(_o(o,N,L))):d||(N=mn(o,p),N!=null&&M.push(_o(o,N,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var U_=/\r\n?/g,I_=/\u0000|\uFFFD/g;function ih(t){return(typeof t=="string"?t:""+t).replace(U_,`
`).replace(I_,"")}function va(t,i,o){if(i=ih(i),ih(t)!==i&&o)throw Error(n(425))}function xa(){}var Su=null,Mu=null;function Eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,N_=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,F_=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(t){return rh.resolve(null).then(t).catch(O_)}:wu;function O_(t){setTimeout(function(){throw t})}function Tu(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),oo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);oo(i)}function tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function sh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),mi="__reactFiber$"+us,vo="__reactProps$"+us,Ti="__reactContainer$"+us,Au="__reactEvents$"+us,k_="__reactListeners$"+us,B_="__reactHandles$"+us;function Rr(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=sh(t);t!==null;){if(o=t[mi])return o;t=sh(t)}return i}t=o,o=t.parentNode}return null}function xo(t){return t=t[mi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ya(t){return t[vo]||null}var Ru=[],fs=-1;function nr(t){return{current:t}}function Ft(t){0>fs||(t.current=Ru[fs],Ru[fs]=null,fs--)}function Ut(t,i){fs++,Ru[fs]=t.current,t.current=i}var ir={},ln=nr(ir),Tn=nr(!1),Cr=ir;function ds(t,i){var o=t.type.contextTypes;if(!o)return ir;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function An(t){return t=t.childContextTypes,t!=null}function Sa(){Ft(Tn),Ft(ln)}function oh(t,i,o){if(ln.current!==ir)throw Error(n(168));Ut(ln,i),Ut(Tn,o)}function ah(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,re(t)||"Unknown",d));return se({},o,l)}function Ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Cr=ln.current,Ut(ln,t),Ut(Tn,Tn.current),!0}function lh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=ah(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,Ft(Tn),Ft(ln),Ut(ln,t)):Ft(Tn),Ut(Tn,o)}var Ai=null,Ea=!1,Cu=!1;function uh(t){Ai===null?Ai=[t]:Ai.push(t)}function z_(t){Ea=!0,uh(t)}function rr(){if(!Cu&&Ai!==null){Cu=!0;var t=0,i=bt;try{var o=Ai;for(bt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ai=null,Ea=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(t+1)),ee(ze,rr),d}finally{bt=i,Cu=!1}}return null}var hs=[],ps=0,wa=null,Ta=0,Hn=[],Gn=0,br=null,Ri=1,Ci="";function Pr(t,i){hs[ps++]=Ta,hs[ps++]=wa,wa=t,Ta=i}function ch(t,i,o){Hn[Gn++]=Ri,Hn[Gn++]=Ci,Hn[Gn++]=br,br=t;var l=Ri;t=Ci;var d=32-at(l)-1;l&=~(1<<d),o+=1;var p=32-at(i)+d;if(30<p){var M=d-d%5;p=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Ri=1<<32-at(i)+d|o<<d|l,Ci=p+t}else Ri=1<<p|o<<d|l,Ci=t}function bu(t){t.return!==null&&(Pr(t,1),ch(t,1,0))}function Pu(t){for(;t===wa;)wa=hs[--ps],hs[ps]=null,Ta=hs[--ps],hs[ps]=null;for(;t===br;)br=Hn[--Gn],Hn[Gn]=null,Ci=Hn[--Gn],Hn[Gn]=null,Ri=Hn[--Gn],Hn[Gn]=null}var Un=null,In=null,kt=!1,ni=null;function fh(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function dh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,In=null,!0):!1;default:return!1}}function Lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(kt){var i=In;if(i){var o=i;if(!dh(t,i)){if(Lu(t))throw Error(n(418));i=tr(o.nextSibling);var l=Un;i&&dh(t,i)?fh(l,o):(t.flags=t.flags&-4097|2,kt=!1,Un=t)}}else{if(Lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Un=t}}}function hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Aa(t){if(t!==Un)return!1;if(!kt)return hh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Eu(t.type,t.memoizedProps)),i&&(i=In)){if(Lu(t))throw ph(),Error(n(418));for(;i;)fh(t,i),i=tr(i.nextSibling)}if(hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=tr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?tr(t.stateNode.nextSibling):null;return!0}function ph(){for(var t=In;t;)t=tr(t.nextSibling)}function ms(){In=Un=null,kt=!1}function Uu(t){ni===null?ni=[t]:ni.push(t)}var V_=C.ReactCurrentBatchConfig;function yo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var L=d.refs;M===null?delete L[p]:L[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ra(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function mh(t){var i=t._init;return i(t._payload)}function gh(t){function i(Y,B){if(t){var j=Y.deletions;j===null?(Y.deletions=[B],Y.flags|=16):j.push(B)}}function o(Y,B){if(!t)return null;for(;B!==null;)i(Y,B),B=B.sibling;return null}function l(Y,B){for(Y=new Map;B!==null;)B.key!==null?Y.set(B.key,B):Y.set(B.index,B),B=B.sibling;return Y}function d(Y,B){return Y=dr(Y,B),Y.index=0,Y.sibling=null,Y}function p(Y,B,j){return Y.index=j,t?(j=Y.alternate,j!==null?(j=j.index,j<B?(Y.flags|=2,B):j):(Y.flags|=2,B)):(Y.flags|=1048576,B)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,B,j,Te){return B===null||B.tag!==6?(B=wc(j,Y.mode,Te),B.return=Y,B):(B=d(B,j),B.return=Y,B)}function N(Y,B,j,Te){var Xe=j.type;return Xe===F?xe(Y,B,j.props.children,Te,j.key):B!==null&&(B.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&mh(Xe)===B.type)?(Te=d(B,j.props),Te.ref=yo(Y,B,j),Te.return=Y,Te):(Te=Za(j.type,j.key,j.props,null,Y.mode,Te),Te.ref=yo(Y,B,j),Te.return=Y,Te)}function Z(Y,B,j,Te){return B===null||B.tag!==4||B.stateNode.containerInfo!==j.containerInfo||B.stateNode.implementation!==j.implementation?(B=Tc(j,Y.mode,Te),B.return=Y,B):(B=d(B,j.children||[]),B.return=Y,B)}function xe(Y,B,j,Te,Xe){return B===null||B.tag!==7?(B=kr(j,Y.mode,Te,Xe),B.return=Y,B):(B=d(B,j),B.return=Y,B)}function Se(Y,B,j){if(typeof B=="string"&&B!==""||typeof B=="number")return B=wc(""+B,Y.mode,j),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Q:return j=Za(B.type,B.key,B.props,null,Y.mode,j),j.ref=yo(Y,null,B),j.return=Y,j;case z:return B=Tc(B,Y.mode,j),B.return=Y,B;case le:var Te=B._init;return Se(Y,Te(B._payload),j)}if(je(B)||ue(B))return B=kr(B,Y.mode,j,null),B.return=Y,B;Ra(Y,B)}return null}function _e(Y,B,j,Te){var Xe=B!==null?B.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Xe!==null?null:L(Y,B,""+j,Te);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return j.key===Xe?N(Y,B,j,Te):null;case z:return j.key===Xe?Z(Y,B,j,Te):null;case le:return Xe=j._init,_e(Y,B,Xe(j._payload),Te)}if(je(j)||ue(j))return Xe!==null?null:xe(Y,B,j,Te,null);Ra(Y,j)}return null}function Ie(Y,B,j,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(j)||null,L(B,Y,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case Q:return Y=Y.get(Te.key===null?j:Te.key)||null,N(B,Y,Te,Xe);case z:return Y=Y.get(Te.key===null?j:Te.key)||null,Z(B,Y,Te,Xe);case le:var $e=Te._init;return Ie(Y,B,j,$e(Te._payload),Xe)}if(je(Te)||ue(Te))return Y=Y.get(j)||null,xe(B,Y,Te,Xe,null);Ra(B,Te)}return null}function Be(Y,B,j,Te){for(var Xe=null,$e=null,Ke=B,et=B=0,tn=null;Ke!==null&&et<j.length;et++){Ke.index>et?(tn=Ke,Ke=null):tn=Ke.sibling;var wt=_e(Y,Ke,j[et],Te);if(wt===null){Ke===null&&(Ke=tn);break}t&&Ke&&wt.alternate===null&&i(Y,Ke),B=p(wt,B,et),$e===null?Xe=wt:$e.sibling=wt,$e=wt,Ke=tn}if(et===j.length)return o(Y,Ke),kt&&Pr(Y,et),Xe;if(Ke===null){for(;et<j.length;et++)Ke=Se(Y,j[et],Te),Ke!==null&&(B=p(Ke,B,et),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return kt&&Pr(Y,et),Xe}for(Ke=l(Y,Ke);et<j.length;et++)tn=Ie(Ke,Y,et,j[et],Te),tn!==null&&(t&&tn.alternate!==null&&Ke.delete(tn.key===null?et:tn.key),B=p(tn,B,et),$e===null?Xe=tn:$e.sibling=tn,$e=tn);return t&&Ke.forEach(function(hr){return i(Y,hr)}),kt&&Pr(Y,et),Xe}function Ve(Y,B,j,Te){var Xe=ue(j);if(typeof Xe!="function")throw Error(n(150));if(j=Xe.call(j),j==null)throw Error(n(151));for(var $e=Xe=null,Ke=B,et=B=0,tn=null,wt=j.next();Ke!==null&&!wt.done;et++,wt=j.next()){Ke.index>et?(tn=Ke,Ke=null):tn=Ke.sibling;var hr=_e(Y,Ke,wt.value,Te);if(hr===null){Ke===null&&(Ke=tn);break}t&&Ke&&hr.alternate===null&&i(Y,Ke),B=p(hr,B,et),$e===null?Xe=hr:$e.sibling=hr,$e=hr,Ke=tn}if(wt.done)return o(Y,Ke),kt&&Pr(Y,et),Xe;if(Ke===null){for(;!wt.done;et++,wt=j.next())wt=Se(Y,wt.value,Te),wt!==null&&(B=p(wt,B,et),$e===null?Xe=wt:$e.sibling=wt,$e=wt);return kt&&Pr(Y,et),Xe}for(Ke=l(Y,Ke);!wt.done;et++,wt=j.next())wt=Ie(Ke,Y,et,wt.value,Te),wt!==null&&(t&&wt.alternate!==null&&Ke.delete(wt.key===null?et:wt.key),B=p(wt,B,et),$e===null?Xe=wt:$e.sibling=wt,$e=wt);return t&&Ke.forEach(function(yv){return i(Y,yv)}),kt&&Pr(Y,et),Xe}function Gt(Y,B,j,Te){if(typeof j=="object"&&j!==null&&j.type===F&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:e:{for(var Xe=j.key,$e=B;$e!==null;){if($e.key===Xe){if(Xe=j.type,Xe===F){if($e.tag===7){o(Y,$e.sibling),B=d($e,j.props.children),B.return=Y,Y=B;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&mh(Xe)===$e.type){o(Y,$e.sibling),B=d($e,j.props),B.ref=yo(Y,$e,j),B.return=Y,Y=B;break e}o(Y,$e);break}else i(Y,$e);$e=$e.sibling}j.type===F?(B=kr(j.props.children,Y.mode,Te,j.key),B.return=Y,Y=B):(Te=Za(j.type,j.key,j.props,null,Y.mode,Te),Te.ref=yo(Y,B,j),Te.return=Y,Y=Te)}return M(Y);case z:e:{for($e=j.key;B!==null;){if(B.key===$e)if(B.tag===4&&B.stateNode.containerInfo===j.containerInfo&&B.stateNode.implementation===j.implementation){o(Y,B.sibling),B=d(B,j.children||[]),B.return=Y,Y=B;break e}else{o(Y,B);break}else i(Y,B);B=B.sibling}B=Tc(j,Y.mode,Te),B.return=Y,Y=B}return M(Y);case le:return $e=j._init,Gt(Y,B,$e(j._payload),Te)}if(je(j))return Be(Y,B,j,Te);if(ue(j))return Ve(Y,B,j,Te);Ra(Y,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,B!==null&&B.tag===6?(o(Y,B.sibling),B=d(B,j),B.return=Y,Y=B):(o(Y,B),B=wc(j,Y.mode,Te),B.return=Y,Y=B),M(Y)):o(Y,B)}return Gt}var gs=gh(!0),_h=gh(!1),Ca=nr(null),ba=null,_s=null,Iu=null;function Nu(){Iu=_s=ba=null}function Fu(t){var i=Ca.current;Ft(Ca),t._currentValue=i}function Ou(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function vs(t,i){ba=t,Iu=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(Iu!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(ba===null)throw Error(n(308));_s=t,ba.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Lr=null;function ku(t){Lr===null?Lr=[t]:Lr.push(t)}function vh(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,ku(i)):(o.next=d.next,d.next=o),i.interleaved=o,bi(t,l)}function bi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var sr=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,bi(t,o)}return d=l.interleaved,d===null?(i.next=i,ku(l)):(i.next=d.next,d.next=i),l.interleaved=i,bi(t,o)}function Pa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Jl(t,o)}}function yh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function La(t,i,o,l){var d=t.updateQueue;sr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var N=L,Z=N.next;N.next=null,M===null?p=Z:M.next=Z,M=N;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,L=xe.lastBaseUpdate,L!==M&&(L===null?xe.firstBaseUpdate=Z:L.next=Z,xe.lastBaseUpdate=N))}if(p!==null){var Se=d.baseState;M=0,xe=Z=N=null,L=p;do{var _e=L.lane,Ie=L.eventTime;if((l&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Ie,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,Ve=L;switch(_e=i,Ie=o,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){Se=Be.call(Ie,Se,_e);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,_e=typeof Be=="function"?Be.call(Ie,Se,_e):Be,_e==null)break e;Se=se({},Se,_e);break e;case 2:sr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[L]:_e.push(L))}else Ie={eventTime:Ie,lane:_e,tag:L.tag,payload:L.payload,callback:L.callback,next:null},xe===null?(Z=xe=Ie,N=Se):xe=xe.next=Ie,M|=_e;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;_e=L,L=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(N=Se),d.baseState=N,d.firstBaseUpdate=Z,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ir|=M,t.lanes=M,t.memoizedState=Se}}function Sh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var So={},gi=nr(So),Mo=nr(So),Eo=nr(So);function Dr(t){if(t===So)throw Error(n(174));return t}function zu(t,i){switch(Ut(Eo,i),Ut(Mo,t),Ut(gi,So),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=He(i,t)}Ft(gi),Ut(gi,i)}function xs(){Ft(gi),Ft(Mo),Ft(Eo)}function Mh(t){Dr(Eo.current);var i=Dr(gi.current),o=He(i,t.type);i!==o&&(Ut(Mo,t),Ut(gi,o))}function Vu(t){Mo.current===t&&(Ft(gi),Ft(Mo))}var zt=nr(0);function Da(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hu=[];function Gu(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var Ua=C.ReactCurrentDispatcher,Wu=C.ReactCurrentBatchConfig,Ur=0,Vt=null,$t=null,Jt=null,Ia=!1,wo=!1,To=0,H_=0;function un(){throw Error(n(321))}function Xu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ti(t[o],i[o]))return!1;return!0}function Yu(t,i,o,l,d,p){if(Ur=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=t===null||t.memoizedState===null?Y_:j_,t=o(l,d),wo){p=0;do{if(wo=!1,To=0,25<=p)throw Error(n(301));p+=1,Jt=$t=null,i.updateQueue=null,Ua.current=q_,t=o(l,d)}while(wo)}if(Ua.current=Oa,i=$t!==null&&$t.next!==null,Ur=0,Jt=$t=Vt=null,Ia=!1,i)throw Error(n(300));return t}function ju(){var t=To!==0;return To=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Vt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Xn(){if($t===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Jt===null?Vt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?Vt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Ao(t,i){return typeof i=="function"?i(t):i}function qu(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,d=l.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}l.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,l=l.baseState;var L=M=null,N=null,Z=p;do{var xe=Z.lane;if((Ur&xe)===xe)N!==null&&(N=N.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var Se={lane:xe,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};N===null?(L=N=Se,M=l):N=N.next=Se,Vt.lanes|=xe,Ir|=xe}Z=Z.next}while(Z!==null&&Z!==p);N===null?M=l:N.next=L,ti(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=N,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Vt.lanes|=p,Ir|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function $u(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);ti(p,i.memoizedState)||(Rn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function Eh(){}function wh(t,i){var o=Vt,l=Xn(),d=i(),p=!ti(l.memoizedState,d);if(p&&(l.memoizedState=d,Rn=!0),l=l.queue,Ku(Rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,Ro(9,Ah.bind(null,o,l,d,i),void 0,null),en===null)throw Error(n(349));(Ur&30)!==0||Th(o,i,d)}return d}function Th(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Ah(t,i,o,l){i.value=o,i.getSnapshot=l,Ch(i)&&bh(t)}function Rh(t,i,o){return o(function(){Ch(i)&&bh(t)})}function Ch(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ti(t,o)}catch{return!0}}function bh(t){var i=bi(t,1);i!==null&&oi(i,t,1,-1)}function Ph(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},i.queue=t,t=t.dispatch=X_.bind(null,Vt,t),[i.memoizedState,t]}function Ro(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Lh(){return Xn().memoizedState}function Na(t,i,o,l){var d=_i();Vt.flags|=t,d.memoizedState=Ro(1|i,o,void 0,l===void 0?null:l)}function Fa(t,i,o,l){var d=Xn();l=l===void 0?null:l;var p=void 0;if($t!==null){var M=$t.memoizedState;if(p=M.destroy,l!==null&&Xu(l,M.deps)){d.memoizedState=Ro(i,o,p,l);return}}Vt.flags|=t,d.memoizedState=Ro(1|i,o,p,l)}function Dh(t,i){return Na(8390656,8,t,i)}function Ku(t,i){return Fa(2048,8,t,i)}function Uh(t,i){return Fa(4,2,t,i)}function Ih(t,i){return Fa(4,4,t,i)}function Nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Fh(t,i,o){return o=o!=null?o.concat([t]):null,Fa(4,4,Nh.bind(null,i,t),o)}function Zu(){}function Oh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Xu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function kh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Xu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Bh(t,i,o){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=o):(ti(o,i)||(o=gn(),Vt.lanes|=o,Ir|=o,t.baseState=!0),i)}function G_(t,i){var o=bt;bt=o!==0&&4>o?o:4,t(!0);var l=Wu.transition;Wu.transition={};try{t(!1),i()}finally{bt=o,Wu.transition=l}}function zh(){return Xn().memoizedState}function W_(t,i,o){var l=cr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Vh(t))Hh(i,o);else if(o=vh(t,i,o,l),o!==null){var d=vn();oi(o,t,l,d),Gh(o,i,l)}}function X_(t,i,o){var l=cr(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vh(t))Hh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,L=p(M,o);if(d.hasEagerState=!0,d.eagerState=L,ti(L,M)){var N=i.interleaved;N===null?(d.next=d,ku(i)):(d.next=N.next,N.next=d),i.interleaved=d;return}}catch{}finally{}o=vh(t,i,d,l),o!==null&&(d=vn(),oi(o,t,l,d),Gh(o,i,l))}}function Vh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function Hh(t,i){wo=Ia=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Gh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Jl(t,o)}}var Oa={readContext:Wn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},Y_={readContext:Wn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:Dh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Na(4194308,4,Nh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Na(4194308,4,t,i)},useInsertionEffect:function(t,i){return Na(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=W_.bind(null,Vt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Ph,useDebugValue:Zu,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Ph(!1),i=t[0];return t=G_.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Vt,d=_i();if(kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),en===null)throw Error(n(349));(Ur&30)!==0||Th(l,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Dh(Rh.bind(null,l,p,t),[t]),l.flags|=2048,Ro(9,Ah.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=en.identifierPrefix;if(kt){var o=Ci,l=Ri;o=(l&~(1<<32-at(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=To++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=H_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},j_={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:Ku,useImperativeHandle:Fh,useInsertionEffect:Uh,useLayoutEffect:Ih,useMemo:kh,useReducer:qu,useRef:Lh,useState:function(){return qu(Ao)},useDebugValue:Zu,useDeferredValue:function(t){var i=Xn();return Bh(i,$t.memoizedState,t)},useTransition:function(){var t=qu(Ao)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Eh,useSyncExternalStore:wh,useId:zh,unstable_isNewReconciler:!1},q_={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:Ku,useImperativeHandle:Fh,useInsertionEffect:Uh,useLayoutEffect:Ih,useMemo:kh,useReducer:$u,useRef:Lh,useState:function(){return $u(Ao)},useDebugValue:Zu,useDeferredValue:function(t){var i=Xn();return $t===null?i.memoizedState=t:Bh(i,$t.memoizedState,t)},useTransition:function(){var t=$u(Ao)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Eh,useSyncExternalStore:wh,useId:zh,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Qu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ka={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),d=cr(t),p=Pi(l,d);p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(oi(i,t,d,l),Pa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),d=cr(t),p=Pi(l,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(oi(i,t,d,l),Pa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=cr(t),d=Pi(o,l);d.tag=2,i!=null&&(d.callback=i),i=or(t,d,l),i!==null&&(oi(i,t,l,o),Pa(i,t,l))}};function Wh(t,i,o,l,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!ho(o,l)||!ho(d,p):!0}function Xh(t,i,o){var l=!1,d=ir,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(d=An(i)?Cr:ln.current,l=i.contextTypes,p=(l=l!=null)?ds(t,d):ir),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Yh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&ka.enqueueReplaceState(i,i.state,null)}function Ju(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Bu(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Wn(p):(p=An(i)?Cr:ln.current,d.context=ds(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Qu(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ka.enqueueReplaceState(d,d.state,null),La(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function ec(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function tc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var $_=typeof WeakMap=="function"?WeakMap:Map;function jh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Xa||(Xa=!0,gc=l),tc(t,i)},o}function qh(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){tc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){tc(t,i),typeof l!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function $h(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new $_;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=uv.bind(null,t,i,o),i.then(t,t))}function Kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Zh(t,i,o,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var K_=C.ReactCurrentOwner,Rn=!1;function _n(t,i,o,l){i.child=t===null?_h(i,null,o,l):gs(i,t.child,o,l)}function Qh(t,i,o,l,d){o=o.render;var p=i.ref;return vs(i,d),l=Yu(t,i,o,l,p,d),o=ju(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Li(t,i,d)):(kt&&o&&bu(i),i.flags|=1,_n(t,i,l,d),i.child)}function Jh(t,i,o,l,d){if(t===null){var p=o.type;return typeof p=="function"&&!Ec(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,ep(t,i,p,l,d)):(t=Za(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:ho,o(M,l)&&t.ref===i.ref)return Li(t,i,d)}return i.flags|=1,t=dr(p,l),t.ref=i.ref,t.return=i,i.child=t}function ep(t,i,o,l,d){if(t!==null){var p=t.memoizedProps;if(ho(p,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,Li(t,i,d)}return nc(t,i,o,l,d)}function tp(t,i,o){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ms,Nn),Nn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ms,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Ut(Ms,Nn),Nn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Ut(Ms,Nn),Nn|=l;return _n(t,i,d,o),i.child}function np(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function nc(t,i,o,l,d){var p=An(o)?Cr:ln.current;return p=ds(i,p),vs(i,d),o=Yu(t,i,o,l,p,d),l=ju(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Li(t,i,d)):(kt&&l&&bu(i),i.flags|=1,_n(t,i,o,d),i.child)}function ip(t,i,o,l,d){if(An(o)){var p=!0;Ma(i)}else p=!1;if(vs(i,d),i.stateNode===null)za(t,i),Xh(i,o,l),Ju(i,o,l,d),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var N=M.context,Z=o.contextType;typeof Z=="object"&&Z!==null?Z=Wn(Z):(Z=An(o)?Cr:ln.current,Z=ds(i,Z));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||N!==Z)&&Yh(i,M,l,Z),sr=!1;var _e=i.memoizedState;M.state=_e,La(i,l,M,d),N=i.memoizedState,L!==l||_e!==N||Tn.current||sr?(typeof xe=="function"&&(Qu(i,o,xe,l),N=i.memoizedState),(L=sr||Wh(i,o,L,l,_e,N,Z))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=N),M.props=l,M.state=N,M.context=Z,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,xh(t,i),L=i.memoizedProps,Z=i.type===i.elementType?L:ii(i.type,L),M.props=Z,Se=i.pendingProps,_e=M.context,N=o.contextType,typeof N=="object"&&N!==null?N=Wn(N):(N=An(o)?Cr:ln.current,N=ds(i,N));var Ie=o.getDerivedStateFromProps;(xe=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||_e!==N)&&Yh(i,M,l,N),sr=!1,_e=i.memoizedState,M.state=_e,La(i,l,M,d);var Be=i.memoizedState;L!==Se||_e!==Be||Tn.current||sr?(typeof Ie=="function"&&(Qu(i,o,Ie,l),Be=i.memoizedState),(Z=sr||Wh(i,o,Z,l,_e,Be,N)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,N),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,N)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=N,l=Z):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return ic(t,i,o,l,p,d)}function ic(t,i,o,l,d,p){np(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&lh(i,o,!1),Li(t,i,p);l=i.stateNode,K_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=gs(i,t.child,null,p),i.child=gs(i,null,L,p)):_n(t,i,L,p),i.memoizedState=l.state,d&&lh(i,o,!0),i.child}function rp(t){var i=t.stateNode;i.pendingContext?oh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(t,i.context,!1),zu(t,i.containerInfo)}function sp(t,i,o,l,d){return ms(),Uu(d),i.flags|=256,_n(t,i,o,l),i.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function op(t,i,o){var l=i.pendingProps,d=zt.current,p=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(d&2)!==0),L?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ut(zt,d&1),t===null)return Du(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Qa(M,l,0,null),t=kr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=sc(o),i.memoizedState=rc,t):oc(i,M));if(d=t.memoizedState,d!==null&&(L=d.dehydrated,L!==null))return Z_(t,i,M,l,L,d,o);if(p){p=l.fallback,M=i.mode,d=t.child,L=d.sibling;var N={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=N,i.deletions=null):(l=dr(d,N),l.subtreeFlags=d.subtreeFlags&14680064),L!==null?p=dr(L,p):(p=kr(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?sc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=rc,l}return p=t.child,t=p.sibling,l=dr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function oc(t,i){return i=Qa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ba(t,i,o,l){return l!==null&&Uu(l),gs(i,t.child,null,o),t=oc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Z_(t,i,o,l,d,p,M){if(o)return i.flags&256?(i.flags&=-257,l=ec(Error(n(422))),Ba(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Qa({mode:"visible",children:l.children},d,0,null),p=kr(p,d,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&gs(i,t.child,null,M),i.child.memoizedState=sc(M),i.memoizedState=rc,p);if((i.mode&1)===0)return Ba(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(n(419)),l=ec(p,l,void 0),Ba(t,i,M,l)}if(L=(M&t.childLanes)!==0,Rn||L){if(l=en,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,bi(t,d),oi(l,t,d,-1))}return Mc(),l=ec(Error(n(421))),Ba(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=cv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,In=tr(d.nextSibling),Un=i,kt=!0,ni=null,t!==null&&(Hn[Gn++]=Ri,Hn[Gn++]=Ci,Hn[Gn++]=br,Ri=t.id,Ci=t.overflow,br=i),i=oc(i,l.children),i.flags|=4096,i)}function ap(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ou(t.return,i,o)}function ac(t,i,o,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=d)}function lp(t,i,o){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(_n(t,i,l.children,o),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,o,i);else if(t.tag===19)ap(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Da(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),ac(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Da(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}ac(i,!0,o,null,p);break;case"together":ac(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function za(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Q_(t,i,o){switch(i.tag){case 3:rp(i),ms();break;case 5:Mh(i);break;case 1:An(i.type)&&Ma(i);break;case 4:zu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Ut(Ca,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?op(t,i,o):(Ut(zt,zt.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Ut(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return lp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,tp(t,i,o)}return Li(t,i,o)}var up,lc,cp,fp;up=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},lc=function(){},cp=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Dr(gi.current);var p=null;switch(o){case"input":d=G(t,d),l=G(t,l),p=[];break;case"select":d=se({},d,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":d=E(t,d),l=E(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=xa)}pt(o,l);var M;o=null;for(Z in d)if(!l.hasOwnProperty(Z)&&d.hasOwnProperty(Z)&&d[Z]!=null)if(Z==="style"){var L=d[Z];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(a.hasOwnProperty(Z)?p||(p=[]):(p=p||[]).push(Z,null));for(Z in l){var N=l[Z];if(L=d?.[Z],l.hasOwnProperty(Z)&&N!==L&&(N!=null||L!=null))if(Z==="style")if(L){for(M in L)!L.hasOwnProperty(M)||N&&N.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in N)N.hasOwnProperty(M)&&L[M]!==N[M]&&(o||(o={}),o[M]=N[M])}else o||(p||(p=[]),p.push(Z,o)),o=N;else Z==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,L=L?L.__html:void 0,N!=null&&L!==N&&(p=p||[]).push(Z,N)):Z==="children"?typeof N!="string"&&typeof N!="number"||(p=p||[]).push(Z,""+N):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(a.hasOwnProperty(Z)?(N!=null&&Z==="onScroll"&&Nt("scroll",t),p||L===N||(p=[])):(p=p||[]).push(Z,N))}o&&(p=p||[]).push("style",o);var Z=p;(i.updateQueue=Z)&&(i.flags|=4)}},fp=function(t,i,o,l){o!==l&&(i.flags|=4)};function Co(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function J_(t,i,o){var l=i.pendingProps;switch(Pu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return An(i.type)&&Sa(),cn(i),null;case 3:return l=i.stateNode,xs(),Ft(Tn),Ft(ln),Gu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Aa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(xc(ni),ni=null))),lc(t,i),cn(i),null;case 5:Vu(i);var d=Dr(Eo.current);if(o=i.type,t!==null&&i.stateNode!=null)cp(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Dr(gi.current),Aa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[mi]=i,l[vo]=p,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(d=0;d<mo.length;d++)Nt(mo[d],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":Ot(l,p),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",l);break;case"textarea":$(l,p),Nt("invalid",l)}pt(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&va(l.textContent,L,t),d=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&va(l.textContent,L,t),d=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Nt("scroll",l)}switch(o){case"input":ht(l),qe(l,p,!0);break;case"textarea":ht(l),ve(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=xa)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[mi]=i,t[vo]=l,up(t,i,!1,!1),i.stateNode=t;e:{switch(M=st(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),d=l;break;case"iframe":case"object":case"embed":Nt("load",t),d=l;break;case"video":case"audio":for(d=0;d<mo.length;d++)Nt(mo[d],t);d=l;break;case"source":Nt("error",t),d=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),d=l;break;case"details":Nt("toggle",t),d=l;break;case"input":Ot(t,l),d=G(t,l),Nt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=se({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":$(t,l),d=E(t,l),Nt("invalid",t);break;default:d=l}pt(o,d),L=d;for(p in L)if(L.hasOwnProperty(p)){var N=L[p];p==="style"?Qe(t,N):p==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ne(t,N)):p==="children"?typeof N=="string"?(o!=="textarea"||N!=="")&&ft(t,N):typeof N=="number"&&ft(t,""+N):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?N!=null&&p==="onScroll"&&Nt("scroll",t):N!=null&&D(t,p,N,M))}switch(o){case"input":ht(t),qe(t,l,!1);break;case"textarea":ht(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ye(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?P(t,!!l.multiple,p,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=xa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)fp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Dr(Eo.current),Dr(gi.current),Aa(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(p=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:va(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return cn(i),null;case 13:if(Ft(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ph(),ms(),i.flags|=98560,p=!1;else if(p=Aa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),p=!1}else ni!==null&&(xc(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Kt===0&&(Kt=3):Mc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return xs(),lc(t,i),t===null&&go(i.stateNode.containerInfo),cn(i),null;case 10:return Fu(i.type._context),cn(i),null;case 17:return An(i.type)&&Sa(),cn(i),null;case 19:if(Ft(zt),p=i.memoizedState,p===null)return cn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Co(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Da(t),M!==null){for(i.flags|=128,Co(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ut(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ee()>Es&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304)}else{if(!l)if(t=Da(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Co(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!kt)return cn(i),null}else 2*Ee()-p.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ee(),i.sibling=null,o=zt.current,Ut(zt,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return Sc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Nn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function ev(t,i){switch(Pu(i),i.tag){case 1:return An(i.type)&&Sa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Ft(Tn),Ft(ln),Gu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Vu(i),null;case 13:if(Ft(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(zt),null;case 4:return xs(),null;case 10:return Fu(i.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var Va=!1,fn=!1,tv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function uc(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var dp=!1;function nv(t,i){if(Su=aa,t=Wd(),hu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,L=-1,N=-1,Z=0,xe=0,Se=t,_e=null;t:for(;;){for(var Ie;Se!==o||d!==0&&Se.nodeType!==3||(L=M+d),Se!==p||l!==0&&Se.nodeType!==3||(N=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)_e=Se,Se=Ie;for(;;){if(Se===t)break t;if(_e===o&&++Z===d&&(L=M),_e===p&&++xe===l&&(N=M),(Ie=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Ie}o=L===-1||N===-1?null:{start:L,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(Mu={focusedElem:t,selectionRange:o},aa=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Gt=Be.memoizedState,Y=i.stateNode,B=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ii(i.type,Ve),Gt);Y.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=dp,dp=!1,Be}function bo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&uc(i,o,p)}d=d.next}while(d!==l)}}function Ha(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function cc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function hp(t){var i=t.alternate;i!==null&&(t.alternate=null,hp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[vo],delete i[Au],delete i[k_],delete i[B_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pp(t){return t.tag===5||t.tag===3||t.tag===4}function mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xa));else if(l!==4&&(t=t.child,t!==null))for(fc(t,i,o),t=t.sibling;t!==null;)fc(t,i,o),t=t.sibling}function dc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(dc(t,i,o),t=t.sibling;t!==null;)dc(t,i,o),t=t.sibling}var rn=null,ri=!1;function ar(t,i,o){for(o=o.child;o!==null;)gp(t,i,o),o=o.sibling}function gp(t,i,o){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Tt,o)}catch{}switch(o.tag){case 5:fn||Ss(o,i);case 6:var l=rn,d=ri;rn=null,ar(t,i,o),rn=l,ri=d,rn!==null&&(ri?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(ri?(t=rn,o=o.stateNode,t.nodeType===8?Tu(t.parentNode,o):t.nodeType===1&&Tu(t,o),oo(t)):Tu(rn,o.stateNode));break;case 4:l=rn,d=ri,rn=o.stateNode.containerInfo,ri=!0,ar(t,i,o),rn=l,ri=d;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&uc(o,i,M),d=d.next}while(d!==l)}ar(t,i,o);break;case 1:if(!fn&&(Ss(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Ht(o,i,L)}ar(t,i,o);break;case 21:ar(t,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,ar(t,i,o),fn=l):ar(t,i,o);break;default:ar(t,i,o)}}function _p(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new tv),i.forEach(function(l){var d=fv.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function si(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var p=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:rn=L.stateNode,ri=!1;break e;case 3:rn=L.stateNode.containerInfo,ri=!0;break e;case 4:rn=L.stateNode.containerInfo,ri=!0;break e}L=L.return}if(rn===null)throw Error(n(160));gp(p,M,d),rn=null,ri=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch(Z){Ht(d,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vp(i,t),i=i.sibling}function vp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),vi(t),l&4){try{bo(3,t,t.return),Ha(3,t)}catch(Ve){Ht(t,t.return,Ve)}try{bo(5,t,t.return)}catch(Ve){Ht(t,t.return,Ve)}}break;case 1:si(i,t),vi(t),l&512&&o!==null&&Ss(o,o.return);break;case 5:if(si(i,t),vi(t),l&512&&o!==null&&Ss(o,o.return),t.flags&32){var d=t.stateNode;try{ft(d,"")}catch(Ve){Ht(t,t.return,Ve)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,L=t.type,N=t.updateQueue;if(t.updateQueue=null,N!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&rt(d,p),st(L,M);var Z=st(L,p);for(M=0;M<N.length;M+=2){var xe=N[M],Se=N[M+1];xe==="style"?Qe(d,Se):xe==="dangerouslySetInnerHTML"?Ne(d,Se):xe==="children"?ft(d,Se):D(d,xe,Se,Z)}switch(L){case"input":ut(d,p);break;case"textarea":ge(d,p);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?P(d,!!p.multiple,Ie,!1):_e!==!!p.multiple&&(p.defaultValue!=null?P(d,!!p.multiple,p.defaultValue,!0):P(d,!!p.multiple,p.multiple?[]:"",!1))}d[vo]=p}catch(Ve){Ht(t,t.return,Ve)}}break;case 6:if(si(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ve){Ht(t,t.return,Ve)}}break;case 3:if(si(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{oo(i.containerInfo)}catch(Ve){Ht(t,t.return,Ve)}break;case 4:si(i,t),vi(t);break;case 13:si(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(mc=Ee())),l&4&&_p(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(fn=(Z=fn)||xe,si(i,t),fn=Z):si(i,t),vi(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!xe&&(t.mode&1)!==0)for(Fe=t,xe=t.child;xe!==null;){for(Se=Fe=xe;Fe!==null;){switch(_e=Fe,Ie=_e.child,_e.tag){case 0:case 11:case 14:case 15:bo(4,_e,_e.return);break;case 1:Ss(_e,_e.return);var Be=_e.stateNode;if(typeof Be.componentWillUnmount=="function"){l=_e,o=_e.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Ht(l,o,Ve)}}break;case 5:Ss(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Sp(Se);continue}}Ie!==null?(Ie.return=_e,Fe=Ie):Sp(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,Z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=Se.stateNode,N=Se.memoizedProps.style,M=N!=null&&N.hasOwnProperty("display")?N.display:null,L.style.display=Ze("display",M))}catch(Ve){Ht(t,t.return,Ve)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=Z?"":Se.memoizedProps}catch(Ve){Ht(t,t.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:si(i,t),vi(t),l&4&&_p(t);break;case 21:break;default:si(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(pp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ft(d,""),l.flags&=-33);var p=mp(t);dc(t,p,d);break;case 3:case 4:var M=l.stateNode.containerInfo,L=mp(t);fc(t,L,M);break;default:throw Error(n(161))}}catch(N){Ht(t,t.return,N)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function iv(t,i,o){Fe=t,xp(t)}function xp(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var d=Fe,p=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Va;if(!M){var L=d.alternate,N=L!==null&&L.memoizedState!==null||fn;L=Va;var Z=fn;if(Va=M,(fn=N)&&!Z)for(Fe=d;Fe!==null;)M=Fe,N=M.child,M.tag===22&&M.memoizedState!==null?Mp(d):N!==null?(N.return=M,Fe=N):Mp(d);for(;p!==null;)Fe=p,xp(p),p=p.sibling;Fe=d,Va=L,fn=Z}yp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Fe=p):yp(t)}}function yp(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Ha(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Sh(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Sh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&o.focus();break;case"img":N.src&&(o.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var xe=Z.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&oo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&cc(i)}catch(_e){Ht(i,i.return,_e)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Sp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Mp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ha(4,i)}catch(N){Ht(i,o,N)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(N){Ht(i,d,N)}}var p=i.return;try{cc(i)}catch(N){Ht(i,p,N)}break;case 5:var M=i.return;try{cc(i)}catch(N){Ht(i,M,N)}}}catch(N){Ht(i,i.return,N)}if(i===t){Fe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Fe=L;break}Fe=i.return}}var rv=Math.ceil,Ga=C.ReactCurrentDispatcher,hc=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,St=0,en=null,Xt=null,sn=0,Nn=0,Ms=nr(0),Kt=0,Po=null,Ir=0,Wa=0,pc=0,Lo=null,Cn=null,mc=0,Es=1/0,Di=null,Xa=!1,gc=null,lr=null,Ya=!1,ur=null,ja=0,Do=0,_c=null,qa=-1,$a=0;function vn(){return(St&6)!==0?Ee():qa!==-1?qa:qa=Ee()}function cr(t){return(t.mode&1)===0?1:(St&2)!==0&&sn!==0?sn&-sn:V_.transition!==null?($a===0&&($a=gn()),$a):(t=bt,t!==0||(t=window.event,t=t===void 0?16:wd(t.type)),t)}function oi(t,i,o,l){if(50<Do)throw Do=0,_c=null,Error(n(185));wn(t,o,l),((St&2)===0||t!==en)&&(t===en&&((St&2)===0&&(Wa|=o),Kt===4&&fr(t,sn)),bn(t,l),o===1&&St===0&&(i.mode&1)===0&&(Es=Ee()+500,Ea&&rr()))}function bn(t,i){var o=t.callbackNode;zn(t,i);var l=pi(t,t===en?sn:0);if(l===0)o!==null&&te(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&te(o),i===1)t.tag===0?z_(wp.bind(null,t)):uh(wp.bind(null,t)),F_(function(){(St&6)===0&&rr()}),o=null;else{switch(gd(l)){case 1:o=ze;break;case 4:o=Je;break;case 16:o=nt;break;case 536870912:o=vt;break;default:o=nt}o=Dp(o,Ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Ep(t,i){if(qa=-1,$a=0,(St&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ws()&&t.callbackNode!==o)return null;var l=pi(t,t===en?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ka(t,l);else{i=l;var d=St;St|=2;var p=Ap();(en!==t||sn!==i)&&(Di=null,Es=Ee()+500,Fr(t,i));do try{av();break}catch(L){Tp(t,L)}while(!0);Nu(),Ga.current=p,St=d,Xt!==null?i=0:(en=null,sn=0,i=Kt)}if(i!==0){if(i===2&&(d=wi(t),d!==0&&(l=d,i=vc(t,d))),i===1)throw o=Po,Fr(t,0),fr(t,l),bn(t,Ee()),o;if(i===6)fr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!sv(d)&&(i=Ka(t,l),i===2&&(p=wi(t),p!==0&&(l=p,i=vc(t,p))),i===1))throw o=Po,Fr(t,0),fr(t,l),bn(t,Ee()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Or(t,Cn,Di);break;case 3:if(fr(t,l),(l&130023424)===l&&(i=mc+500-Ee(),10<i)){if(pi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=wu(Or.bind(null,t,Cn,Di),i);break}Or(t,Cn,Di);break;case 4:if(fr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-at(l);p=1<<M,M=i[M],M>d&&(d=M),l&=~p}if(l=d,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*rv(l/1960))-l,10<l){t.timeoutHandle=wu(Or.bind(null,t,Cn,Di),l);break}Or(t,Cn,Di);break;case 5:Or(t,Cn,Di);break;default:throw Error(n(329))}}}return bn(t,Ee()),t.callbackNode===o?Ep.bind(null,t):null}function vc(t,i){var o=Lo;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Ka(t,i),t!==2&&(i=Cn,Cn=o,i!==null&&xc(i)),t}function xc(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function sv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],p=d.getSnapshot;d=d.value;try{if(!ti(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~pc,i&=~Wa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-at(i),l=1<<o;t[o]=-1,i&=~l}}function wp(t){if((St&6)!==0)throw Error(n(327));ws();var i=pi(t,0);if((i&1)===0)return bn(t,Ee()),null;var o=Ka(t,i);if(t.tag!==0&&o===2){var l=wi(t);l!==0&&(i=l,o=vc(t,l))}if(o===1)throw o=Po,Fr(t,0),fr(t,i),bn(t,Ee()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,Cn,Di),bn(t,Ee()),null}function yc(t,i){var o=St;St|=1;try{return t(i)}finally{St=o,St===0&&(Es=Ee()+500,Ea&&rr())}}function Nr(t){ur!==null&&ur.tag===0&&(St&6)===0&&ws();var i=St;St|=1;var o=Yn.transition,l=bt;try{if(Yn.transition=null,bt=1,t)return t()}finally{bt=l,Yn.transition=o,St=i,(St&6)===0&&rr()}}function Sc(){Nn=Ms.current,Ft(Ms)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,N_(o)),Xt!==null)for(o=Xt.return;o!==null;){var l=o;switch(Pu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Sa();break;case 3:xs(),Ft(Tn),Ft(ln),Gu();break;case 5:Vu(l);break;case 4:xs();break;case 13:Ft(zt);break;case 19:Ft(zt);break;case 10:Fu(l.type._context);break;case 22:case 23:Sc()}o=o.return}if(en=t,Xt=t=dr(t.current,null),sn=Nn=i,Kt=0,Po=null,pc=Wa=Ir=0,Cn=Lo=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,l.next=M}o.pending=l}Lr=null}return t}function Tp(t,i){do{var o=Xt;try{if(Nu(),Ua.current=Oa,Ia){for(var l=Vt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Ia=!1}if(Ur=0,Jt=$t=Vt=null,wo=!1,To=0,hc.current=null,o===null||o.return===null){Kt=1,Po=i,Xt=null;break}e:{var p=t,M=o.return,L=o,N=i;if(i=sn,L.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var Z=N,xe=L,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ie=Kh(M);if(Ie!==null){Ie.flags&=-257,Zh(Ie,M,L,p,i),Ie.mode&1&&$h(p,Z,i),i=Ie,N=Z;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(N),i.updateQueue=Ve}else Be.add(N);break e}else{if((i&1)===0){$h(p,Z,i),Mc();break e}N=Error(n(426))}}else if(kt&&L.mode&1){var Gt=Kh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Zh(Gt,M,L,p,i),Uu(ys(N,L));break e}}p=N=ys(N,L),Kt!==4&&(Kt=2),Lo===null?Lo=[p]:Lo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=jh(p,N,i);yh(p,Y);break e;case 1:L=N;var B=p.type,j=p.stateNode;if((p.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(lr===null||!lr.has(j)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=qh(p,L,i);yh(p,Te);break e}}p=p.return}while(p!==null)}Cp(o)}catch(Xe){i=Xe,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function Ap(){var t=Ga.current;return Ga.current=Oa,t===null?Oa:t}function Mc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||(Ir&268435455)===0&&(Wa&268435455)===0||fr(en,sn)}function Ka(t,i){var o=St;St|=2;var l=Ap();(en!==t||sn!==i)&&(Di=null,Fr(t,i));do try{ov();break}catch(d){Tp(t,d)}while(!0);if(Nu(),St=o,Ga.current=l,Xt!==null)throw Error(n(261));return en=null,sn=0,Kt}function ov(){for(;Xt!==null;)Rp(Xt)}function av(){for(;Xt!==null&&!W();)Rp(Xt)}function Rp(t){var i=Lp(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?Cp(t):Xt=i,hc.current=null}function Cp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=J_(o,i,Nn),o!==null){Xt=o;return}}else{if(o=ev(o,i),o!==null){o.flags&=32767,Xt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Or(t,i,o){var l=bt,d=Yn.transition;try{Yn.transition=null,bt=1,lv(t,i,o,l)}finally{Yn.transition=d,bt=l}return null}function lv(t,i,o,l){do ws();while(ur!==null);if((St&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(ra(t,p),t===en&&(Xt=en=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ya||(Ya=!0,Dp(nt,function(){return ws(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var M=bt;bt=1;var L=St;St|=4,hc.current=null,nv(t,o),vp(o,t),C_(Mu),aa=!!Su,Mu=Su=null,t.current=o,iv(o),Ae(),St=L,bt=M,Yn.transition=p}else t.current=o;if(Ya&&(Ya=!1,ur=t,ja=d),p=t.pendingLanes,p===0&&(lr=null),on(o.stateNode),bn(t,Ee()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Xa)throw Xa=!1,t=gc,gc=null,t;return(ja&1)!==0&&t.tag!==0&&ws(),p=t.pendingLanes,(p&1)!==0?t===_c?Do++:(Do=0,_c=t):Do=0,rr(),null}function ws(){if(ur!==null){var t=gd(ja),i=Yn.transition,o=bt;try{if(Yn.transition=null,bt=16>t?16:t,ur===null)var l=!1;else{if(t=ur,ur=null,ja=0,(St&6)!==0)throw Error(n(331));var d=St;for(St|=4,Fe=t.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var L=p.deletions;if(L!==null){for(var N=0;N<L.length;N++){var Z=L[N];for(Fe=Z;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:bo(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,Fe=Se;else for(;Fe!==null;){xe=Fe;var _e=xe.sibling,Ie=xe.return;if(hp(xe),xe===Z){Fe=null;break}if(_e!==null){_e.return=Ie,Fe=_e;break}Fe=Ie}}}var Be=p.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:bo(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Fe=Y;break e}Fe=p.return}}var B=t.current;for(Fe=B;Fe!==null;){M=Fe;var j=M.child;if((M.subtreeFlags&2064)!==0&&j!==null)j.return=M,Fe=j;else e:for(M=B;Fe!==null;){if(L=Fe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ha(9,L)}}catch(Xe){Ht(L,L.return,Xe)}if(L===M){Fe=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Fe=Te;break e}Fe=L.return}}if(St=d,rr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Tt,t)}catch{}l=!0}return l}finally{bt=o,Yn.transition=i}}return!1}function bp(t,i,o){i=ys(o,i),i=jh(t,i,1),t=or(t,i,1),i=vn(),t!==null&&(wn(t,1,i),bn(t,i))}function Ht(t,i,o){if(t.tag===3)bp(t,t,o);else for(;i!==null;){if(i.tag===3){bp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(lr===null||!lr.has(l))){t=ys(o,t),t=qh(i,t,1),i=or(i,t,1),t=vn(),i!==null&&(wn(i,1,t),bn(i,t));break}}i=i.return}}function uv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,en===t&&(sn&o)===o&&(Kt===4||Kt===3&&(sn&130023424)===sn&&500>Ee()-mc?Fr(t,0):pc|=o),bn(t,i)}function Pp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var o=vn();t=bi(t,i),t!==null&&(wn(t,i,o),bn(t,o))}function cv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Pp(t,o)}function fv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Pp(t,o)}var Lp;Lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)Rn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,Q_(t,i,o);Rn=(t.flags&131072)!==0}else Rn=!1,kt&&(i.flags&1048576)!==0&&ch(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;za(t,i),t=i.pendingProps;var d=ds(i,ln.current);vs(i,o),d=Yu(null,i,l,t,d,o);var p=ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(p=!0,Ma(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Bu(i),d.updater=ka,i.stateNode=d,d._reactInternals=i,Ju(i,l,t,o),i=ic(null,i,l,!0,p,o)):(i.tag=0,kt&&p&&bu(i),_n(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(za(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=hv(l),t=ii(l,t),d){case 0:i=nc(null,i,l,t,o);break e;case 1:i=ip(null,i,l,t,o);break e;case 11:i=Qh(null,i,l,t,o);break e;case 14:i=Jh(null,i,l,ii(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ii(l,d),nc(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ii(l,d),ip(t,i,l,d,o);case 3:e:{if(rp(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,xh(t,i),La(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ys(Error(n(423)),i),i=sp(t,i,l,o,d);break e}else if(l!==d){d=ys(Error(n(424)),i),i=sp(t,i,l,o,d);break e}else for(In=tr(i.stateNode.containerInfo.firstChild),Un=i,kt=!0,ni=null,o=_h(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),l===d){i=Li(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return Mh(i),t===null&&Du(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,Eu(l,d)?M=null:p!==null&&Eu(l,p)&&(i.flags|=32),np(t,i),_n(t,i,M,o),i.child;case 6:return t===null&&Du(i),null;case 13:return op(t,i,o);case 4:return zu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=gs(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ii(l,d),Qh(t,i,l,d,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Ut(Ca,l._currentValue),l._currentValue=M,p!==null)if(ti(p.value,M)){if(p.children===d.children&&!Tn.current){i=Li(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var N=L.firstContext;N!==null;){if(N.context===l){if(p.tag===1){N=Pi(-1,o&-o),N.tag=2;var Z=p.updateQueue;if(Z!==null){Z=Z.shared;var xe=Z.pending;xe===null?N.next=N:(N.next=xe.next,xe.next=N),Z.pending=N}}p.lanes|=o,N=p.alternate,N!==null&&(N.lanes|=o),Ou(p.return,o,i),L.lanes|=o;break}N=N.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Ou(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}_n(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,vs(i,o),d=Wn(d),l=l(d),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,d=ii(l,i.pendingProps),d=ii(l.type,d),Jh(t,i,l,d,o);case 15:return ep(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ii(l,d),za(t,i),i.tag=1,An(l)?(t=!0,Ma(i)):t=!1,vs(i,o),Xh(i,l,d),Ju(i,l,d,o),ic(null,i,l,!0,t,o);case 19:return lp(t,i,o);case 22:return tp(t,i,o)}throw Error(n(156,i.tag))};function Dp(t,i){return ee(t,i)}function dv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new dv(t,i,o,l)}function Ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hv(t){if(typeof t=="function")return Ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===me)return 14}return 2}function dr(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Za(t,i,o,l,d,p){var M=2;if(l=t,typeof t=="function")Ec(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return kr(o.children,d,p,i);case X:M=8,d|=8;break;case b:return t=jn(12,o,i,d|2),t.elementType=b,t.lanes=p,t;case J:return t=jn(13,o,i,d),t.elementType=J,t.lanes=p,t;case de:return t=jn(19,o,i,d),t.elementType=de,t.lanes=p,t;case ce:return Qa(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case k:M=9;break e;case ae:M=11;break e;case me:M=14;break e;case le:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function kr(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Qa(t,i,o,l){return t=jn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function wc(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function Tc(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function pv(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ac(t,i,o,l,d,p,M,L,N){return t=new pv(t,i,o,L,N),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(p),t}function mv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Up(t){if(!t)return ir;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(An(o))return ah(t,o,i)}return i}function Ip(t,i,o,l,d,p,M,L,N){return t=Ac(o,l,!0,t,d,p,M,L,N),t.context=Up(null),o=t.current,l=vn(),d=cr(o),p=Pi(l,d),p.callback=i??null,or(o,p,d),t.current.lanes=d,wn(t,d,l),bn(t,l),t}function Ja(t,i,o,l){var d=i.current,p=vn(),M=cr(d);return o=Up(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=or(d,i,M),t!==null&&(oi(t,d,M,p),Pa(t,d,M)),M}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Rc(t,i){Np(t,i),(t=t.alternate)&&Np(t,i)}function gv(){return null}var Fp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cc(t){this._internalRoot=t}tl.prototype.render=Cc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ja(t,i,null,null)},tl.prototype.unmount=Cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nr(function(){Ja(null,t,null,null)}),i[Ti]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var i=xd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Qi.length&&i!==0&&i<Qi[o].priority;o++);Qi.splice(o,0,t),o===0&&Md(t)}};function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function _v(t,i,o,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var Z=el(M);p.call(Z)}}var M=Ip(i,l,t,0,null,!1,!1,"",Op);return t._reactRootContainer=M,t[Ti]=M.current,go(t.nodeType===8?t.parentNode:t),Nr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var L=l;l=function(){var Z=el(N);L.call(Z)}}var N=Ac(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=N,t[Ti]=N.current,go(t.nodeType===8?t.parentNode:t),Nr(function(){Ja(i,N,o,l)}),N}function il(t,i,o,l,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var L=d;d=function(){var N=el(M);L.call(N)}}Ja(i,M,t,d)}else M=_v(o,i,t,d,l);return el(M)}_d=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(Jl(i,o|1),bn(i,Ee()),(St&6)===0&&(Es=Ee()+500,rr()))}break;case 13:Nr(function(){var l=bi(t,1);if(l!==null){var d=vn();oi(l,t,1,d)}}),Rc(t,1)}},eu=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var o=vn();oi(i,t,134217728,o)}Rc(t,134217728)}},vd=function(t){if(t.tag===13){var i=cr(t),o=bi(t,i);if(o!==null){var l=vn();oi(o,t,i,l)}Rc(t,i)}},xd=function(){return bt},yd=function(t,i){var o=bt;try{return bt=t,i()}finally{bt=o}},Ce=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=ya(l);if(!d)throw Error(n(90));tt(l),ut(l,d)}}}break;case"textarea":ge(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},It=yc,jt=Nr;var vv={usingClientEntryPoint:!1,Events:[xo,cs,ya,Pe,ot,yc]},Uo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Tt=rl.inject(xv),gt=rl}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv,Pn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(i))throw Error(n(200));return mv(t,i,null,o)},Pn.createRoot=function(t,i){if(!bc(t))throw Error(n(299));var o=!1,l="",d=Fp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ac(t,1,!1,null,null,o,!1,l,d),t[Ti]=i.current,go(t.nodeType===8?t.parentNode:t),new Cc(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Nr(t)},Pn.hydrate=function(t,i,o){if(!nl(i))throw Error(n(200));return il(null,t,i,!0,o)},Pn.hydrateRoot=function(t,i,o){if(!bc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,p="",M=Fp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Ip(i,null,t,1,o??null,d,!1,p,M),t[Ti]=i.current,go(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new tl(i)},Pn.render=function(t,i,o){if(!nl(i))throw Error(n(200));return il(null,t,i,!1,o)},Pn.unmountComponentAtNode=function(t){if(!nl(t))throw Error(n(40));return t._reactRootContainer?(Nr(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Pn.unstable_batchedUpdates=yc,Pn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!nl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return il(t,i,o,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Xp;function bv(){if(Xp)return Dc.exports;Xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Dc.exports=Cv(),Dc.exports}var Yp;function Pv(){if(Yp)return sl;Yp=1;var s=bv();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var Lv=Pv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="170",Dv=0,jp=1,Uv=2,ig=1,Iv=2,ki=3,Er=0,Ln=1,Bi=2,Sr=0,Ws=1,Vl=2,qp=3,$p=4,Nv=5,jr=100,Fv=101,Ov=102,kv=103,Bv=104,zv=200,Vv=201,Hv=202,Gv=203,gf=204,_f=205,Wv=206,Xv=207,Yv=208,jv=209,qv=210,$v=211,Kv=212,Zv=213,Qv=214,vf=0,xf=1,yf=2,js=3,Sf=4,Mf=5,Ef=6,wf=7,rg=0,Jv=1,e0=2,Mr=0,t0=1,n0=2,i0=3,r0=4,s0=5,o0=6,a0=7,sg=300,qs=301,$s=302,Tf=303,Af=304,jl=306,Rf=1e3,$r=1001,Cf=1002,di=1003,l0=1004,ol=1005,yi=1006,Nc=1007,Kr=1008,Yi=1009,og=1010,ag=1011,qo=1012,od=1013,Zr=1014,zi=1015,Ko=1016,ad=1017,ld=1018,Ks=1020,lg=35902,ug=1021,cg=1022,fi=1023,fg=1024,dg=1025,Xs=1026,Zs=1027,hg=1028,ud=1029,pg=1030,cd=1031,fd=1033,Nl=33776,Fl=33777,Ol=33778,kl=33779,bf=35840,Pf=35841,Lf=35842,Df=35843,Uf=36196,If=37492,Nf=37496,Ff=37808,Of=37809,kf=37810,Bf=37811,zf=37812,Vf=37813,Hf=37814,Gf=37815,Wf=37816,Xf=37817,Yf=37818,jf=37819,qf=37820,$f=37821,Bl=36492,Kf=36494,Zf=36495,mg=36283,Qf=36284,Jf=36285,ed=36286,u0=3200,c0=3201,f0=0,d0=1,yr="",kn="srgb",Js="srgb-linear",ql="linear",Lt="srgb",Ts=7680,Kp=519,h0=512,p0=513,m0=514,gg=515,g0=516,_0=517,v0=518,x0=519,td=35044,Zp="300 es",Vi=2e3,Hl=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qp=1234567;const Xo=Math.PI/180,$o=180/Math.PI;function Gi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function Sn(s,e,n){return Math.max(e,Math.min(n,s))}function dd(s,e){return(s%e+e)%e}function y0(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function S0(s,e,n){return s!==e?(n-s)/(e-s):0}function Yo(s,e,n){return(1-n)*s+n*e}function M0(s,e,n,r){return Yo(s,e,1-Math.exp(-n*r))}function E0(s,e=1){return e-Math.abs(dd(s,e*2)-e)}function w0(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function T0(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function A0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function R0(s,e){return s+Math.random()*(e-s)}function C0(s){return s*(.5-Math.random())}function b0(s){s!==void 0&&(Qp=s);let e=Qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(s){return s*Xo}function L0(s){return s*$o}function D0(s){return(s&s-1)===0&&s!==0}function U0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function I0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function N0(s,e,n,r,a){const u=Math.cos,c=Math.sin,f=u(n/2),h=c(n/2),m=u((e+r)/2),g=c((e+r)/2),y=u((e-r)/2),v=c((e-r)/2),S=u((r-e)/2),w=c((r-e)/2);switch(a){case"XYX":s.set(f*g,h*y,h*v,f*m);break;case"YZY":s.set(h*v,f*g,h*y,f*m);break;case"ZXZ":s.set(h*y,h*v,f*g,f*m);break;case"XZX":s.set(f*g,h*w,h*S,f*m);break;case"YXY":s.set(h*S,f*g,h*w,f*m);break;case"ZYZ":s.set(h*w,h*S,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fc={DEG2RAD:Xo,RAD2DEG:$o,generateUUID:Gi,clamp:Sn,euclideanModulo:dd,mapLinear:y0,inverseLerp:S0,lerp:Yo,damp:M0,pingpong:E0,smoothstep:w0,smootherstep:T0,randInt:A0,randFloat:R0,randFloatSpread:C0,seededRandom:b0,degToRad:P0,radToDeg:L0,isPowerOfTwo:D0,ceilPowerOfTwo:U0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:N0,normalize:Pt,denormalize:ci};class _t{constructor(e=0,n=0){_t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Sn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,r,a,u,c,f,h,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,f,h,m)}set(e,n,r,a,u,c,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=u,g[5]=h,g[6]=r,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],f=r[3],h=r[6],m=r[1],g=r[4],y=r[7],v=r[2],S=r[5],w=r[8],T=a[0],x=a[3],_=a[6],I=a[1],D=a[4],C=a[7],Q=a[2],z=a[5],F=a[8];return u[0]=c*T+f*I+h*Q,u[3]=c*x+f*D+h*z,u[6]=c*_+f*C+h*F,u[1]=m*T+g*I+y*Q,u[4]=m*x+g*D+y*z,u[7]=m*_+g*C+y*F,u[2]=v*T+S*I+w*Q,u[5]=v*x+S*D+w*z,u[8]=v*_+S*C+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*c*g-n*f*m-r*u*g+r*f*h+a*u*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=g*c-f*m,v=f*h-g*u,S=m*u-c*h,w=n*y+r*v+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(a*m-g*r)*T,e[2]=(f*r-a*c)*T,e[3]=v*T,e[4]=(g*n-a*h)*T,e[5]=(a*u-f*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(c*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,c,f){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*c+m*f)+c+e,-a*m,a*h,-a*(-m*c+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new lt;function _g(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function F0(){const s=Gl("canvas");return s.style.display="block",s}const Jp={};function Go(s){s in Jp||(Jp[s]=!0,console.warn(s))}function O0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function k0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function B0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Lt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Lt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yr?ql:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const em=[.64,.33,.3,.6,.15,.06],tm=[.2126,.7152,.0722],nm=[.3127,.329],im=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[Js]:{primaries:em,whitePoint:nm,transfer:ql,toXYZ:im,fromXYZ:rm,luminanceCoefficients:tm,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:em,whitePoint:nm,transfer:Lt,toXYZ:im,fromXYZ:rm,luminanceCoefficients:tm,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}});let As;class z0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Gl("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=Wi(u[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Wi(n[r]/255)*255):n[r]=Wi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V0=0;class vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?u.push(kc(a[c].image)):u.push(kc(a[c]))}else u=kc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?z0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H0=0;class Mn extends eo{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,r=$r,a=$r,u=yi,c=Kr,f=fi,h=Yi,m=Mn.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Gi(),this.name="",this.source=new vg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=sg;Mn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],g=h[4],y=h[8],v=h[1],S=h[5],w=h[9],T=h[2],x=h[6],_=h[10];if(Math.abs(g-v)<.01&&Math.abs(y-T)<.01&&Math.abs(w-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+T)<.1&&Math.abs(w+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,C=(S+1)/2,Q=(_+1)/2,z=(g+v)/4,F=(y+T)/4,X=(w+x)/4;return D>C&&D>Q?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=z/r,u=F/r):C>Q?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=z/a,u=X/a):Q<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Q),r=F/u,a=X/u),this.set(r,a,u,n),this}let I=Math.sqrt((x-w)*(x-w)+(y-T)*(y-T)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(x-w)/I,this.y=(y-T)/I,this.z=(v-g)/I,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G0 extends eo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Mn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new vg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends G0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class xg extends Mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W0 extends Mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,c,f){let h=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];const v=u[c+0],S=u[c+1],w=u[c+2],T=u[c+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(f===1){e[n+0]=v,e[n+1]=S,e[n+2]=w,e[n+3]=T;return}if(y!==T||h!==v||m!==S||g!==w){let x=1-f;const _=h*v+m*S+g*w+y*T,I=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const Q=Math.sqrt(D),z=Math.atan2(Q,_*I);x=Math.sin(x*z)/Q,f=Math.sin(f*z)/Q}const C=f*I;if(h=h*x+v*C,m=m*x+S*C,g=g*x+w*C,y=y*x+T*C,x===1-f){const Q=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=Q,m*=Q,g*=Q,y*=Q}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,c){const f=r[a],h=r[a+1],m=r[a+2],g=r[a+3],y=u[c],v=u[c+1],S=u[c+2],w=u[c+3];return e[n]=f*w+g*y+h*S-m*v,e[n+1]=h*w+g*v+m*y-f*S,e[n+2]=m*w+g*S+f*v-h*y,e[n+3]=g*w-f*y-h*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(a/2),y=f(u/2),v=h(r/2),S=h(a/2),w=h(u/2);switch(c){case"XYZ":this._x=v*g*y+m*S*w,this._y=m*S*y-v*g*w,this._z=m*g*w+v*S*y,this._w=m*g*y-v*S*w;break;case"YXZ":this._x=v*g*y+m*S*w,this._y=m*S*y-v*g*w,this._z=m*g*w-v*S*y,this._w=m*g*y+v*S*w;break;case"ZXY":this._x=v*g*y-m*S*w,this._y=m*S*y+v*g*w,this._z=m*g*w+v*S*y,this._w=m*g*y-v*S*w;break;case"ZYX":this._x=v*g*y-m*S*w,this._y=m*S*y+v*g*w,this._z=m*g*w-v*S*y,this._w=m*g*y+v*S*w;break;case"YZX":this._x=v*g*y+m*S*w,this._y=m*S*y+v*g*w,this._z=m*g*w-v*S*y,this._w=m*g*y-v*S*w;break;case"XZY":this._x=v*g*y-m*S*w,this._y=m*S*y-v*g*w,this._z=m*g*w+v*S*y,this._w=m*g*y+v*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],c=n[1],f=n[5],h=n[9],m=n[2],g=n[6],y=n[10],v=r+f+y;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(u-m)*S,this._z=(c-a)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(u+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(u-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(c-a)/S,this._x=(u+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,c=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+c*f+a*m-u*h,this._y=a*g+c*h+u*f-r*m,this._z=u*g+c*m+r*h-a*f,this._w=c*g-r*f-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),y=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=c*y+this._w*v,this._x=r*y+this._x*v,this._y=a*y+this._y*v,this._z=u*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*a-f*r),g=2*(f*n-u*a),y=2*(u*r-c*n);return this.x=n+h*m+c*y-f*g,this.y=r+h*g+f*m-u*y,this.z=a+h*y+u*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,c=n.x,f=n.y,h=n.z;return this.x=a*h-u*f,this.y=u*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Sn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new q,sm=new Jr;class Zo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(u,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),ll.subVectors(this.max,No),Rs.subVectors(e.a,No),Cs.subVectors(e.b,No),bs.subVectors(e.c,No),pr.subVectors(Cs,Rs),mr.subVectors(bs,Cs),Br.subVectors(Rs,bs);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Br.z,Br.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Br.z,0,-Br.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Br.y,Br.x,0];return!zc(n,Rs,Cs,bs,ll)||(n=[1,0,0,0,1,0,0,0,1],!zc(n,Rs,Cs,bs,ll))?!1:(ul.crossVectors(pr,mr),n=[ul.x,ul.y,ul.z],zc(n,Rs,Cs,bs,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new q,new q,new q,new q,new q,new q,new q,new q],ai=new q,al=new Zo,Rs=new q,Cs=new q,bs=new q,pr=new q,mr=new q,Br=new q,No=new q,ll=new q,ul=new q,zr=new q;function zc(s,e,n,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){zr.fromArray(s,u);const f=a.x*Math.abs(zr.x)+a.y*Math.abs(zr.y)+a.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),g=r.dot(zr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const X0=new Zo,Fo=new q,Vc=new q;class Qo{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):X0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const n=Fo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Fo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Vc)),this.expandByPoint(Fo.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new q,Hc=new q,cl=new q,gr=new q,Gc=new q,fl=new q,Wc=new q;class hd{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Hc.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Hc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(cl),f=gr.dot(this.direction),h=-gr.dot(cl),m=gr.lengthSq(),g=Math.abs(1-c*c);let y,v,S,w;if(g>0)if(y=c*h-f,v=c*f-h,w=u*g,y>=0)if(v>=-w)if(v<=w){const T=1/g;y*=T,v*=T,S=y*(y+c*v+2*f)+v*(c*y+v+2*h)+m}else v=u,y=Math.max(0,-(c*v+f)),S=-y*y+v*(v+2*h)+m;else v=-u,y=Math.max(0,-(c*v+f)),S=-y*y+v*(v+2*h)+m;else v<=-w?(y=Math.max(0,-(-c*u+f)),v=y>0?-u:Math.min(Math.max(-u,-h),u),S=-y*y+v*(v+2*h)+m):v<=w?(y=0,v=Math.min(Math.max(-u,-h),u),S=v*(v+2*h)+m):(y=Math.max(0,-(c*u+f)),v=y>0?u:Math.min(Math.max(-u,-h),u),S=-y*y+v*(v+2*h)+m);else v=c>0?-u:u,y=Math.max(0,-(c*v+f)),S=-y*y+v*(v+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Hc).addScaledVector(cl,v),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,c,f,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),g>=0?(u=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),y>=0?(f=(e.min.z-v.z)*y,h=(e.max.z-v.z)*y):(f=(e.max.z-v.z)*y,h=(e.min.z-v.z)*y),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,u){Gc.subVectors(n,e),fl.subVectors(r,e),Wc.crossVectors(Gc,fl);let c=this.direction.dot(Wc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;gr.subVectors(this.origin,e);const h=f*this.direction.dot(fl.crossVectors(gr,fl));if(h<0)return null;const m=f*this.direction.dot(Gc.cross(gr));if(m<0||h+m>c)return null;const g=-f*gr.dot(Wc);return g<0?null:this.at(g/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,c,f,h,m,g,y,v,S,w,T,x){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,f,h,m,g,y,v,S,w,T,x)}set(e,n,r,a,u,c,f,h,m,g,y,v,S,w,T,x){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=c,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=y,_[14]=v,_[3]=S,_[7]=w,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),u=1/Ps.setFromMatrixColumn(e,1).length(),c=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const v=c*g,S=c*y,w=f*g,T=f*y;n[0]=h*g,n[4]=-h*y,n[8]=m,n[1]=S+w*m,n[5]=v-T*m,n[9]=-f*h,n[2]=T-v*m,n[6]=w+S*m,n[10]=c*h}else if(e.order==="YXZ"){const v=h*g,S=h*y,w=m*g,T=m*y;n[0]=v+T*f,n[4]=w*f-S,n[8]=c*m,n[1]=c*y,n[5]=c*g,n[9]=-f,n[2]=S*f-w,n[6]=T+v*f,n[10]=c*h}else if(e.order==="ZXY"){const v=h*g,S=h*y,w=m*g,T=m*y;n[0]=v-T*f,n[4]=-c*y,n[8]=w+S*f,n[1]=S+w*f,n[5]=c*g,n[9]=T-v*f,n[2]=-c*m,n[6]=f,n[10]=c*h}else if(e.order==="ZYX"){const v=c*g,S=c*y,w=f*g,T=f*y;n[0]=h*g,n[4]=w*m-S,n[8]=v*m+T,n[1]=h*y,n[5]=T*m+v,n[9]=S*m-w,n[2]=-m,n[6]=f*h,n[10]=c*h}else if(e.order==="YZX"){const v=c*h,S=c*m,w=f*h,T=f*m;n[0]=h*g,n[4]=T-v*y,n[8]=w*y+S,n[1]=y,n[5]=c*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*y+w,n[10]=v-T*y}else if(e.order==="XZY"){const v=c*h,S=c*m,w=f*h,T=f*m;n[0]=h*g,n[4]=-y,n[8]=m*g,n[1]=v*y+T,n[5]=c*g,n[9]=S*y-w,n[2]=w*y-S,n[6]=f*g,n[10]=T*y+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,j0)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),_r.crossVectors(r,Fn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),_r.crossVectors(r,Fn)),_r.normalize(),dl.crossVectors(Fn,_r),a[0]=_r.x,a[4]=dl.x,a[8]=Fn.x,a[1]=_r.y,a[5]=dl.y,a[9]=Fn.y,a[2]=_r.z,a[6]=dl.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],f=r[4],h=r[8],m=r[12],g=r[1],y=r[5],v=r[9],S=r[13],w=r[2],T=r[6],x=r[10],_=r[14],I=r[3],D=r[7],C=r[11],Q=r[15],z=a[0],F=a[4],X=a[8],b=a[12],R=a[1],k=a[5],ae=a[9],J=a[13],de=a[2],me=a[6],le=a[10],ce=a[14],O=a[3],ue=a[7],se=a[11],U=a[15];return u[0]=c*z+f*R+h*de+m*O,u[4]=c*F+f*k+h*me+m*ue,u[8]=c*X+f*ae+h*le+m*se,u[12]=c*b+f*J+h*ce+m*U,u[1]=g*z+y*R+v*de+S*O,u[5]=g*F+y*k+v*me+S*ue,u[9]=g*X+y*ae+v*le+S*se,u[13]=g*b+y*J+v*ce+S*U,u[2]=w*z+T*R+x*de+_*O,u[6]=w*F+T*k+x*me+_*ue,u[10]=w*X+T*ae+x*le+_*se,u[14]=w*b+T*J+x*ce+_*U,u[3]=I*z+D*R+C*de+Q*O,u[7]=I*F+D*k+C*me+Q*ue,u[11]=I*X+D*ae+C*le+Q*se,u[15]=I*b+D*J+C*ce+Q*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],c=e[1],f=e[5],h=e[9],m=e[13],g=e[2],y=e[6],v=e[10],S=e[14],w=e[3],T=e[7],x=e[11],_=e[15];return w*(+u*h*y-a*m*y-u*f*v+r*m*v+a*f*S-r*h*S)+T*(+n*h*S-n*m*v+u*c*v-a*c*S+a*m*g-u*h*g)+x*(+n*m*y-n*f*S-u*c*y+r*c*S+u*f*g-r*m*g)+_*(-a*f*g-n*h*y+n*f*v+a*c*y-r*c*v+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=e[9],v=e[10],S=e[11],w=e[12],T=e[13],x=e[14],_=e[15],I=y*x*m-T*v*m+T*h*S-f*x*S-y*h*_+f*v*_,D=w*v*m-g*x*m-w*h*S+c*x*S+g*h*_-c*v*_,C=g*T*m-w*y*m+w*f*S-c*T*S-g*f*_+c*y*_,Q=w*y*h-g*T*h-w*f*v+c*T*v+g*f*x-c*y*x,z=n*I+r*D+a*C+u*Q;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=I*F,e[1]=(T*v*u-y*x*u-T*a*S+r*x*S+y*a*_-r*v*_)*F,e[2]=(f*x*u-T*h*u+T*a*m-r*x*m-f*a*_+r*h*_)*F,e[3]=(y*h*u-f*v*u-y*a*m+r*v*m+f*a*S-r*h*S)*F,e[4]=D*F,e[5]=(g*x*u-w*v*u+w*a*S-n*x*S-g*a*_+n*v*_)*F,e[6]=(w*h*u-c*x*u-w*a*m+n*x*m+c*a*_-n*h*_)*F,e[7]=(c*v*u-g*h*u+g*a*m-n*v*m-c*a*S+n*h*S)*F,e[8]=C*F,e[9]=(w*y*u-g*T*u-w*r*S+n*T*S+g*r*_-n*y*_)*F,e[10]=(c*T*u-w*f*u+w*r*m-n*T*m-c*r*_+n*f*_)*F,e[11]=(g*f*u-c*y*u-g*r*m+n*y*m+c*r*S-n*f*S)*F,e[12]=Q*F,e[13]=(g*T*a-w*y*a+w*r*v-n*T*v-g*r*x+n*y*x)*F,e[14]=(w*f*a-c*T*a-w*r*h+n*T*h+c*r*x-n*f*x)*F,e[15]=(c*y*a-g*f*a+g*r*h-n*y*h-c*r*v+n*f*v)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,c=e.x,f=e.y,h=e.z,m=u*c,g=u*f;return this.set(m*c+r,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+r,g*h-a*c,0,m*h-a*f,g*h+a*c,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,c=n._y,f=n._z,h=n._w,m=u+u,g=c+c,y=f+f,v=u*m,S=u*g,w=u*y,T=c*g,x=c*y,_=f*y,I=h*m,D=h*g,C=h*y,Q=r.x,z=r.y,F=r.z;return a[0]=(1-(T+_))*Q,a[1]=(S+C)*Q,a[2]=(w-D)*Q,a[3]=0,a[4]=(S-C)*z,a[5]=(1-(v+_))*z,a[6]=(x+I)*z,a[7]=0,a[8]=(w+D)*F,a[9]=(x-I)*F,a[10]=(1-(v+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ps.set(a[0],a[1],a[2]).length();const c=Ps.set(a[4],a[5],a[6]).length(),f=Ps.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/u,g=1/c,y=1/f;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=y,li.elements[9]*=y,li.elements[10]*=y,n.setFromRotationMatrix(li),r.x=u,r.y=c,r.z=f,this}makePerspective(e,n,r,a,u,c,f=Vi){const h=this.elements,m=2*u/(n-e),g=2*u/(r-a),y=(n+e)/(n-e),v=(r+a)/(r-a);let S,w;if(f===Vi)S=-(c+u)/(c-u),w=-2*c*u/(c-u);else if(f===Hl)S=-c/(c-u),w=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,c,f=Vi){const h=this.elements,m=1/(n-e),g=1/(r-a),y=1/(c-u),v=(n+e)*m,S=(r+a)*g;let w,T;if(f===Vi)w=(c+u)*y,T=-2*y;else if(f===Hl)w=u*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new q,li=new Bt,Y0=new q(0,0,0),j0=new q(1,1,1),_r=new q,dl=new q,Fn=new q,om=new Bt,am=new Jr;class Si{constructor(e=0,n=0,r=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],f=a[8],h=a[1],m=a[5],g=a[9],y=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-Sn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return am.setFromEuler(this),this.setFromQuaternion(am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const lm=new q,Ls=new Jr,Ni=new Bt,hl=new q,Oo=new q,$0=new q,K0=new Jr,um=new q(1,0,0),cm=new q(0,1,0),fm=new q(0,0,1),dm={type:"added"},Z0={type:"removed"},Ds={type:"childadded",child:null},Xc={type:"childremoved",child:null};class pn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new q,n=new Si,r=new Jr,a=new q(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new lt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Oo,hl,this.up):Ni.lookAt(hl,Oo,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z0),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];u(e.shapes,y)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(u(e.materials,this.material[h]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(u(e.animations,h))}}if(n){const f=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),y=c(e.shapes),v=c(e.skeletons),S=c(e.animations),w=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function c(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}pn.DEFAULT_UP=new q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new q,Fi=new q,Yc=new q,Oi=new q,Us=new q,Is=new q,hm=new q,jc=new q,qc=new q,$c=new q,Kc=new Wt,Zc=new Wt,Qc=new Wt;class Zn{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ui.subVectors(e,n),a.cross(ui);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ui.subVectors(a,n),Fi.subVectors(r,n),Yc.subVectors(e,n);const c=ui.dot(ui),f=ui.dot(Fi),h=ui.dot(Yc),m=Fi.dot(Fi),g=Fi.dot(Yc),y=c*m-f*f;if(y===0)return u.set(0,0,0),null;const v=1/y,S=(m*h-f*g)*v,w=(c*g-f*h)*v;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,u,c,f,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,a,u,c){return Kc.setScalar(0),Zc.setScalar(0),Qc.setScalar(0),Kc.fromBufferAttribute(e,n),Zc.fromBufferAttribute(e,r),Qc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Kc,u.x),c.addScaledVector(Zc,u.y),c.addScaledVector(Qc,u.z),c}static isFrontFacing(e,n,r,a){return ui.subVectors(r,n),Fi.subVectors(e,n),ui.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ui.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return Zn.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let c,f;Us.subVectors(a,r),Is.subVectors(u,r),jc.subVectors(e,r);const h=Us.dot(jc),m=Is.dot(jc);if(h<=0&&m<=0)return n.copy(r);qc.subVectors(e,a);const g=Us.dot(qc),y=Is.dot(qc);if(g>=0&&y<=g)return n.copy(a);const v=h*y-g*m;if(v<=0&&h>=0&&g<=0)return c=h/(h-g),n.copy(r).addScaledVector(Us,c);$c.subVectors(e,u);const S=Us.dot($c),w=Is.dot($c);if(w>=0&&S<=w)return n.copy(u);const T=S*m-h*w;if(T<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Is,f);const x=g*w-S*y;if(x<=0&&y-g>=0&&S-w>=0)return hm.subVectors(u,a),f=(y-g)/(y-g+(S-w)),n.copy(a).addScaledVector(hm,f);const _=1/(x+T+v);return c=T*_,f=v*_,n.copy(r).addScaledVector(Us,c).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Jc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=dd(e,1),n=Sn(n,0,1),r=Sn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Jc(c,u,e+1/3),this.g=Jc(c,u,e),this.b=Jc(c,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=kn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const r=Sg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Mt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Sn(hn.r*255,0,255))*65536+Math.round(Sn(hn.g*255,0,255))*256+Math.round(Sn(hn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,a=hn.g,u=hn.b,c=Math.max(r,a,u),f=Math.min(r,a,u);let h,m;const g=(f+c)/2;if(f===c)h=0,m=0;else{const y=c-f;switch(m=g<=.5?y/(c+f):y/(2-c-f),c){case r:h=(a-u)/y+(a<u?6:0);break;case a:h=(u-r)/y+2;break;case u:h=(r-a)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=kn){Mt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,a=hn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(pl);const r=Yo(vr.h,pl.h,n),a=Yo(vr.s,pl.s,n),u=Yo(vr.l,pl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new dt;dt.NAMES=Sg;let Q0=0;class es extends eo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Gi(),this.name="",this.blending=Ws,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=_f,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gf&&(r.blendSrc=this.blendSrc),this.blendDst!==_f&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const f in u){const h=u[f];delete h.metadata,c.push(h)}return c}if(n){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mg extends es{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new q,ml=new _t;class Bn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=td,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ci(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ci(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ci(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ci(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ci(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),r=Pt(r,this.array),a=Pt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),r=Pt(r,this.array),a=Pt(a,this.array),u=Pt(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==td&&(e.usage=this.usage),e}}class Eg extends Bn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class wg extends Bn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xi extends Bn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let J0=0;const qn=new Bt,ef=new pn,Ns=new q,On=new Zo,ko=new Zo,nn=new q;class Qn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_g(e)?wg:Eg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return ef.lookAt(e),ef.updateMatrix(),this.applyMatrix4(ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xi(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(On.min,ko.min),On.expandByPoint(nn),nn.addVectors(On.max,ko.max),On.expandByPoint(nn)):(On.expandByPoint(ko.min),On.expandByPoint(ko.max))}On.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)nn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)nn.fromBufferAttribute(f,m),h&&(Ns.fromBufferAttribute(e,m),nn.add(Ns)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<r.count;X++)f[X]=new q,h[X]=new q;const m=new q,g=new q,y=new q,v=new _t,S=new _t,w=new _t,T=new q,x=new q;function _(X,b,R){m.fromBufferAttribute(r,X),g.fromBufferAttribute(r,b),y.fromBufferAttribute(r,R),v.fromBufferAttribute(u,X),S.fromBufferAttribute(u,b),w.fromBufferAttribute(u,R),g.sub(m),y.sub(m),S.sub(v),w.sub(v);const k=1/(S.x*w.y-w.x*S.y);isFinite(k)&&(T.copy(g).multiplyScalar(w.y).addScaledVector(y,-S.y).multiplyScalar(k),x.copy(y).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(k),f[X].add(T),f[b].add(T),f[R].add(T),h[X].add(x),h[b].add(x),h[R].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,b=I.length;X<b;++X){const R=I[X],k=R.start,ae=R.count;for(let J=k,de=k+ae;J<de;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new q,C=new q,Q=new q,z=new q;function F(X){Q.fromBufferAttribute(a,X),z.copy(Q);const b=f[X];D.copy(b),D.sub(Q.multiplyScalar(Q.dot(b))).normalize(),C.crossVectors(z,b);const k=C.dot(h[X])<0?-1:1;c.setXYZW(X,D.x,D.y,D.z,k)}for(let X=0,b=I.length;X<b;++X){const R=I[X],k=R.start,ae=R.count;for(let J=k,de=k+ae;J<de;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new q,u=new q,c=new q,f=new q,h=new q,m=new q,g=new q,y=new q;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),T=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,x),g.subVectors(c,u),y.subVectors(a,u),g.cross(y),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,x),f.add(g),h.add(g),m.add(g),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),g.subVectors(c,u),y.subVectors(a,u),g.cross(y),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,y=f.normalized,v=new m.constructor(h.length*g);let S=0,w=0;for(let T=0,x=h.length;T<x;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*g;for(let _=0;_<g;_++)v[w++]=m[S++]}return new Bn(v,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const h=[],m=u[f];for(let g=0,y=m.length;g<y;g++){const v=m[g],S=e(v,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const m=c[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,v=m.length;y<v;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let v=0,S=y.length;v<S;v++)g.push(y[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const y=c[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pm=new Bt,Vr=new hd,gl=new Qo,mm=new q,_l=new q,vl=new q,xl=new q,tf=new q,yl=new q,gm=new q,Sl=new q;class Hi extends pn{constructor(e=new Qn,n=new Mg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){yl.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const g=f[h],y=u[h];g!==0&&(tf.fromBufferAttribute(y,e),c?yl.addScaledVector(tf,g):yl.addScaledVector(tf.sub(n),g))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(u),Vr.copy(e.ray).recast(e.near),!(gl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(gl,mm)===null||Vr.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(u).invert(),Vr.copy(e.ray).applyMatrix4(pm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,c=this.material,f=u.index,h=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,v=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(c))for(let w=0,T=v.length;w<T;w++){const x=v[w],_=c[x.materialIndex],I=Math.max(x.start,S.start),D=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let C=I,Q=D;C<Q;C+=3){const z=f.getX(C),F=f.getX(C+1),X=f.getX(C+2);a=Ml(this,_,e,r,m,g,y,z,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let x=w,_=T;x<_;x+=3){const I=f.getX(x),D=f.getX(x+1),C=f.getX(x+2);a=Ml(this,c,e,r,m,g,y,I,D,C),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let w=0,T=v.length;w<T;w++){const x=v[w],_=c[x.materialIndex],I=Math.max(x.start,S.start),D=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let C=I,Q=D;C<Q;C+=3){const z=C,F=C+1,X=C+2;a=Ml(this,_,e,r,m,g,y,z,F,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let x=w,_=T;x<_;x+=3){const I=x,D=x+1,C=x+2;a=Ml(this,c,e,r,m,g,y,I,D,C),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function ex(s,e,n,r,a,u,c,f){let h;if(e.side===Ln?h=r.intersectTriangle(c,u,a,!0,f):h=r.intersectTriangle(a,u,c,e.side===Er,f),h===null)return null;Sl.copy(f),Sl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Sl);return m<n.near||m>n.far?null:{distance:m,point:Sl.clone(),object:s}}function Ml(s,e,n,r,a,u,c,f,h,m){s.getVertexPosition(f,_l),s.getVertexPosition(h,vl),s.getVertexPosition(m,xl);const g=ex(s,e,n,r,_l,vl,xl,gm);if(g){const y=new q;Zn.getBarycoord(gm,_l,vl,xl,y),a&&(g.uv=Zn.getInterpolatedAttribute(a,f,h,m,y,new _t)),u&&(g.uv1=Zn.getInterpolatedAttribute(u,f,h,m,y,new _t)),c&&(g.normal=Zn.getInterpolatedAttribute(c,f,h,m,y,new q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:m,normal:new q,materialIndex:0};Zn.getNormal(_l,vl,xl,v.normal),g.face=v,g.barycoord=y}return g}class Jo extends Qn{constructor(e=1,n=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const f=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const h=[],m=[],g=[],y=[];let v=0,S=0;w("z","y","x",-1,-1,r,n,e,c,u,0),w("z","y","x",1,-1,r,n,-e,c,u,1),w("x","z","y",1,1,e,r,n,a,c,2),w("x","z","y",1,-1,e,r,-n,a,c,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new Xi(m,3)),this.setAttribute("normal",new Xi(g,3)),this.setAttribute("uv",new Xi(y,2));function w(T,x,_,I,D,C,Q,z,F,X,b){const R=C/F,k=Q/X,ae=C/2,J=Q/2,de=z/2,me=F+1,le=X+1;let ce=0,O=0;const ue=new q;for(let se=0;se<le;se++){const U=se*k-J;for(let ne=0;ne<me;ne++){const De=ne*R-ae;ue[T]=De*I,ue[x]=U*D,ue[_]=de,m.push(ue.x,ue.y,ue.z),ue[T]=0,ue[x]=0,ue[_]=z>0?1:-1,g.push(ue.x,ue.y,ue.z),y.push(ne/F),y.push(1-se/X),ce+=1}}for(let se=0;se<X;se++)for(let U=0;U<F;U++){const ne=v+U+me*se,De=v+U+me*(se+1),K=v+(U+1)+me*(se+1),fe=v+(U+1)+me*se;h.push(ne,De,fe),h.push(De,K,fe),O+=6}f.addGroup(S,O,b),S+=O,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Qs(s[n]);for(const a in r)e[a]=r[a]}return e}function tx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Tg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const nx={clone:Qs,merge:yn};var ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends es{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ag extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new q,_m=new _t,vm=new _t;class Kn extends Ag{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,_m,vm),n.subVectors(vm,_m)}setViewOffset(e,n,r,a,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xo*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class sx extends pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Fs,Os,e,n);a.layers=this.layers,this.add(a);const u=new Kn(Fs,Os,e,n);u.layers=this.layers,this.add(u);const c=new Kn(Fs,Os,e,n);c.layers=this.layers,this.add(c);const f=new Kn(Fs,Os,e,n);f.layers=this.layers,this.add(f);const h=new Kn(Fs,Os,e,n);h.layers=this.layers,this.add(h);const m=new Kn(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,c,f,h]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,h,m,g]=this.children,y=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(y,v,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Rg extends Mn{constructor(e,n,r,a,u,c,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,r,a,u,c,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ox extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Rg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jo(5,5,5),u=new wr({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:Sr});u.uniforms.tEquirect.value=n;const c=new Hi(a,u),f=n.minFilter;return n.minFilter===Kr&&(n.minFilter=yi),new sx(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(u)}}const nf=new q,ax=new q,lx=new lt;class Xr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=nf.subVectors(r,n).cross(ax.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(nf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||lx.getNormalMatrix(e),a=this.coplanarPoint(nf).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Qo,El=new q;class Cg{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,u=new Xr,c=new Xr){this.planes=[e,n,r,a,u,c]}set(e,n,r,a,u,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,u=a[0],c=a[1],f=a[2],h=a[3],m=a[4],g=a[5],y=a[6],v=a[7],S=a[8],w=a[9],T=a[10],x=a[11],_=a[12],I=a[13],D=a[14],C=a[15];if(r[0].setComponents(h-u,v-m,x-S,C-_).normalize(),r[1].setComponents(h+u,v+m,x+S,C+_).normalize(),r[2].setComponents(h+c,v+g,x+w,C+I).normalize(),r[3].setComponents(h-c,v-g,x-w,C-I).normalize(),r[4].setComponents(h-f,v-y,x-T,C-D).normalize(),n===Vi)r[5].setComponents(h+f,v+y,x+T,C+D).normalize();else if(n===Hl)r[5].setComponents(f,y,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(El.x=a.normal.x>0?e.max.x:e.min.x,El.y=a.normal.y>0?e.max.y:e.min.y,El.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bg(){let s=null,e=!1,n=null,r=null;function a(u,c){n(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function ux(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,y=m.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,m){const g=h.array,y=h.updateRanges;if(s.bindBuffer(m,f),y.length===0)s.bufferSubData(m,0,g);else{y.sort((S,w)=>S.start-w.start);let v=0;for(let S=1;S<y.length;S++){const w=y[v],T=y[S];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++v,y[v]=T)}y.length=v+1;for(let S=0,w=y.length;S<w;S++){const T=y[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:u,update:c}}class $l extends Qn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,c=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,g=h+1,y=e/f,v=n/h,S=[],w=[],T=[],x=[];for(let _=0;_<g;_++){const I=_*v-c;for(let D=0;D<m;D++){const C=D*y-u;w.push(C,-I,0),T.push(0,0,1),x.push(D/f),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<f;I++){const D=I+m*_,C=I+m*(_+1),Q=I+1+m*(_+1),z=I+1+m*_;S.push(D,C,z),S.push(C,Q,z)}this.setIndex(S),this.setAttribute("position",new Xi(w,3)),this.setAttribute("normal",new Xi(T,3)),this.setAttribute("uv",new Xi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ux=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ly=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,uy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rS=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,gS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_S=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,vS=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,AS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,CS=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,DS=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,IS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,FS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:cx,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:vx,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:Sx,bsdfs:Mx,iridescence_fragment:Ex,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Cx,color_fragment:bx,color_pars_fragment:Px,color_pars_vertex:Lx,color_vertex:Dx,common:Ux,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Fx,displacementmap_vertex:Ox,emissivemap_fragment:kx,emissivemap_pars_fragment:Bx,colorspace_fragment:zx,colorspace_pars_fragment:Vx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:ny,envmap_vertex:Yx,fog_vertex:jx,fog_pars_vertex:qx,fog_fragment:$x,fog_pars_fragment:Kx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:Qx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:oy,lights_physical_fragment:ay,lights_physical_pars_fragment:ly,lights_fragment_begin:uy,lights_fragment_maps:cy,lights_fragment_end:fy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:_y,map_particle_fragment:vy,map_particle_pars_fragment:xy,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:My,morphcolor_vertex:Ey,morphnormal_vertex:wy,morphtarget_pars_vertex:Ty,morphtarget_vertex:Ay,normal_fragment_begin:Ry,normal_fragment_maps:Cy,normal_pars_fragment:by,normal_pars_vertex:Py,normal_vertex:Ly,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Fy,opaque_fragment:Oy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:Vy,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:Yy,shadowmap_vertex:jy,shadowmask_pars_fragment:qy,skinbase_vertex:$y,skinning_pars_vertex:Ky,skinning_vertex:Zy,skinnormal_vertex:Qy,specularmap_fragment:Jy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:uS,background_frag:cS,backgroundCube_vert:fS,backgroundCube_frag:dS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:_S,distanceRGBA_frag:vS,equirect_vert:xS,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:wS,meshlambert_vert:TS,meshlambert_frag:AS,meshmatcap_vert:RS,meshmatcap_frag:CS,meshnormal_vert:bS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:DS,meshphysical_vert:US,meshphysical_frag:IS,meshtoon_vert:NS,meshtoon_frag:FS,points_vert:OS,points_frag:kS,shadow_vert:BS,shadow_frag:zS,sprite_vert:VS,sprite_frag:HS},be={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},xi={basic:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:yn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:yn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:yn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:yn([be.points,be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:yn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:yn([be.common,be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:yn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:yn([be.sprite,be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:yn([be.common,be.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:yn([be.lights,be.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};xi.physical={uniforms:yn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const wl={r:0,b:0,g:0},Gr=new Si,GS=new Bt;function WS(s,e,n,r,a,u,c){const f=new dt(0);let h=u===!0?0:1,m,g,y=null,v=0,S=null;function w(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?n:e).get(D)),D}function T(I){let D=!1;const C=w(I);C===null?_(f,h):C&&C.isColor&&(_(C,1),D=!0);const Q=s.xr.getEnvironmentBlendMode();Q==="additive"?r.buffers.color.setClear(0,0,0,1,c):Q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(I,D){const C=w(D);C&&(C.isCubeTexture||C.mapping===jl)?(g===void 0&&(g=new Hi(new Jo(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Qs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Q,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Gr.copy(D.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(Gr)),g.material.toneMapped=Mt.getTransfer(C.colorSpace)!==Lt,(y!==C||v!==C.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=C,v=C.version,S=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Hi(new $l(2,2),new wr({name:"BackgroundMaterial",uniforms:Qs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(C.colorSpace)!==Lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||v!==C.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=C,v=C.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,D){I.getRGB(wl,Tg(s)),r.buffers.color.setClear(wl.r,wl.g,wl.b,D,c)}return{getClearColor:function(){return f},setClearColor:function(I,D=1){f.set(I),h=D,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,_(f,h)},render:T,addToRenderList:x}}function XS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,c=!1;function f(R,k,ae,J,de){let me=!1;const le=y(J,ae,k);u!==le&&(u=le,m(u.object)),me=S(R,J,ae,de),me&&w(R,J,ae,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,C(R,k,ae,J),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function y(R,k,ae){const J=ae.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let me=de[k.id];me===void 0&&(me={},de[k.id]=me);let le=me[J];return le===void 0&&(le=v(h()),me[J]=le),le}function v(R){const k=[],ae=[],J=[];for(let de=0;de<n;de++)k[de]=0,ae[de]=0,J[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:J,object:R,attributes:{},index:null}}function S(R,k,ae,J){const de=u.attributes,me=k.attributes;let le=0;const ce=ae.getAttributes();for(const O in ce)if(ce[O].location>=0){const se=de[O];let U=me[O];if(U===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;le++}return u.attributesNum!==le||u.index!==J}function w(R,k,ae,J){const de={},me=k.attributes;let le=0;const ce=ae.getAttributes();for(const O in ce)if(ce[O].location>=0){let se=me[O];se===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),de[O]=U,le++}u.attributes=de,u.attributesNum=le,u.index=J}function T(){const R=u.newAttributes;for(let k=0,ae=R.length;k<ae;k++)R[k]=0}function x(R){_(R,0)}function _(R,k){const ae=u.newAttributes,J=u.enabledAttributes,de=u.attributeDivisors;ae[R]=1,J[R]===0&&(s.enableVertexAttribArray(R),J[R]=1),de[R]!==k&&(s.vertexAttribDivisor(R,k),de[R]=k)}function I(){const R=u.newAttributes,k=u.enabledAttributes;for(let ae=0,J=k.length;ae<J;ae++)k[ae]!==R[ae]&&(s.disableVertexAttribArray(ae),k[ae]=0)}function D(R,k,ae,J,de,me,le){le===!0?s.vertexAttribIPointer(R,k,ae,de,me):s.vertexAttribPointer(R,k,ae,J,de,me)}function C(R,k,ae,J){T();const de=J.attributes,me=ae.getAttributes(),le=k.defaultAttributeValues;for(const ce in me){const O=me[ce];if(O.location>=0){let ue=de[ce];if(ue===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const se=ue.normalized,U=ue.itemSize,ne=e.get(ue);if(ne===void 0)continue;const De=ne.buffer,K=ne.type,fe=ne.bytesPerElement,ie=K===s.INT||K===s.UNSIGNED_INT||ue.gpuType===od;if(ue.isInterleavedBufferAttribute){const re=ue.data,ye=re.stride,we=ue.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<O.locationSize;Ue++)_(O.location+Ue,re.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<O.locationSize;Ue++)x(O.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ue=0;Ue<O.locationSize;Ue++)D(O.location+Ue,U/O.locationSize,K,se,ye*fe,(we+U/O.locationSize*Ue)*fe,ie)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<O.locationSize;re++)_(O.location+re,ue.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<O.locationSize;re++)x(O.location+re);s.bindBuffer(s.ARRAY_BUFFER,De);for(let re=0;re<O.locationSize;re++)D(O.location+re,U/O.locationSize,K,se,U*fe,U/O.locationSize*re*fe,ie)}}else if(le!==void 0){const se=le[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(O.location,se);break;case 3:s.vertexAttrib3fv(O.location,se);break;case 4:s.vertexAttrib4fv(O.location,se);break;default:s.vertexAttrib1fv(O.location,se)}}}}I()}function Q(){X();for(const R in r){const k=r[R];for(const ae in k){const J=k[ae];for(const de in J)g(J[de].object),delete J[de];delete k[ae]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const ae in k){const J=k[ae];for(const de in J)g(J[de].object),delete J[de];delete k[ae]}delete r[R.id]}function F(R){for(const k in r){const ae=r[k];if(ae[R.id]===void 0)continue;const J=ae[R.id];for(const de in J)g(J[de].object),delete J[de];delete ae[R.id]}}function X(){b(),c=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:Q,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:x,disableUnusedAttributes:I}}function YS(s,e,n){let r;function a(m){r=m}function u(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function c(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),n.update(g,r,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let S=0;for(let w=0;w<y;w++)S+=g[w];n.update(S,r,1)}function h(m,g,y,v){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)c(m[w],g[w],v[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,y);let w=0;for(let T=0;T<y;T++)w+=g[T]*v[T];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function jS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==fi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const X=F===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Yi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!X)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Q=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:Q,maxSamples:z}}function qS(s){const e=this;let n=null,r=0,a=!1,u=!1;const c=new Xr,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const S=y.length!==0||v||r!==0||a;return a=v,r=y.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,v){n=g(y,v,0)},this.setState=function(y,v,S){const w=y.clippingPlanes,T=y.clipIntersection,x=y.clipShadows,_=s.get(y);if(!a||w===null||w.length===0||u&&!x)u?g(null):m();else{const I=u?0:r,D=I*4;let C=_.clippingState||null;h.value=C,C=g(w,v,D,S);for(let Q=0;Q!==D;++Q)C[Q]=n[Q];_.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,v,S,w){const T=y!==null?y.length:0;let x=null;if(T!==0){if(x=h.value,w!==!0||x===null){const _=S+T*4,I=v.matrixWorldInverse;f.getNormalMatrix(I),(x===null||x.length<_)&&(x=new Float32Array(_));for(let D=0,C=S;D!==T;++D,C+=4)c.copy(y[D]).applyMatrix4(I,f),c.normal.toArray(x,C),x[C+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function $S(s){let e=new WeakMap;function n(c,f){return f===Tf?c.mapping=qs:f===Af&&(c.mapping=$s),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Tf||f===Af)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new ox(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class KS extends Ag{constructor(e=-1,n=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=4,xm=[.125,.215,.35,.446,.526,.582],qr=20,rf=new KS,ym=new dt;let sf=null,of=0,af=0,lf=!1;const Yr=(1+Math.sqrt(5))/2,ks=1/Yr,Sm=[new q(-Yr,ks,0),new q(Yr,ks,0),new q(-ks,0,Yr),new q(ks,0,Yr),new q(0,Yr,-ks),new q(0,Yr,ks),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,of,af),this._renderer.xr.enabled=lf,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Ko,format:fi,colorSpace:Js,depthBuffer:!1},a=Em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZS(u)),this._blurMaterial=QS(u,e,n)}return a}_compileMaterial(e){const n=new Hi(this._lodPlanes[0],e);this._renderer.compile(n,rf)}_sceneToCubeUV(e,n,r,a){const f=new Kn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,v=g.toneMapping;g.getClearColor(ym),g.toneMapping=Mr,g.autoClear=!1;const S=new Mg({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),w=new Hi(new Jo,S);let T=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,T=!0):(S.color.copy(ym),T=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):I===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const D=this._cubeSize;Tl(a,I*D,_>2?D:0,D,D),g.setRenderTarget(a),T&&g.render(w,f),g.render(e,f)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=v,g.autoClear=y,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===qs||e.mapping===$s;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new Hi(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const h=this._cubeSize;Tl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,rf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=Sm[(a-u-1)%Sm.length];this._blur(e,u-1,u,c,f)}n.autoClear=r}_blur(e,n,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,c,f){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Hi(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*qr-1),T=u/w,x=isFinite(u)?1+Math.floor(g*T):qr;x>qr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qr}`);const _=[];let I=0;for(let F=0;F<qr;++F){const X=F/T,b=Math.exp(-X*X/2);_.push(b),F===0?I+=b:F<x&&(I+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/I;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=w,v.mipInt.value=D-r;const C=this._sizeLods[a],Q=3*C*(a>D-Gs?a-D+Gs:0),z=4*(this._cubeSize-C);Tl(n,Q,z,3*C,2*C),h.setRenderTarget(n),h.render(y,rf)}}function ZS(s){const e=[],n=[],r=[];let a=s;const u=s-Gs+1+xm.length;for(let c=0;c<u;c++){const f=Math.pow(2,a);n.push(f);let h=1/f;c>s-Gs?h=xm[c-s+Gs-1]:c===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,y=1+m,v=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,w=6,T=3,x=2,_=1,I=new Float32Array(T*w*S),D=new Float32Array(x*w*S),C=new Float32Array(_*w*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,X=z>2?0:-1,b=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];I.set(b,T*w*z),D.set(v,x*w*z);const R=[z,z,z,z,z,z];C.set(R,_*w*z)}const Q=new Qn;Q.setAttribute("position",new Bn(I,T)),Q.setAttribute("uv",new Bn(D,x)),Q.setAttribute("faceIndex",new Bn(C,_)),e.push(Q),a>Gs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Em(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function QS(s,e,n){const r=new Float32Array(qr),a=new q(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function wm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Tm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function pd(){return`

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
	`}function JS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===Tf||h===Af,g=h===qs||h===$s;if(m||g){let y=e.get(f);const v=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Mm(s)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new Mm(s)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",u),y.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function eM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Go("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function tM(s,e,n,r){const a={},u=new WeakMap;function c(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);for(const w in v.morphAttributes){const T=v.morphAttributes[w];for(let x=0,_=T.length;x<_;x++)e.remove(T[x])}v.removeEventListener("dispose",c),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(y,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,n.memory.geometries++),v}function h(y){const v=y.attributes;for(const w in v)e.update(v[w],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const w in S){const T=S[w];for(let x=0,_=T.length;x<_;x++)e.update(T[x],s.ARRAY_BUFFER)}}function m(y){const v=[],S=y.index,w=y.attributes.position;let T=0;if(S!==null){const I=S.array;T=S.version;for(let D=0,C=I.length;D<C;D+=3){const Q=I[D+0],z=I[D+1],F=I[D+2];v.push(Q,z,z,F,F,Q)}}else if(w!==void 0){const I=w.array;T=w.version;for(let D=0,C=I.length/3-1;D<C;D+=3){const Q=D+0,z=D+1,F=D+2;v.push(Q,z,z,F,F,Q)}}else return;const x=new(_g(v)?wg:Eg)(v,1);x.version=T;const _=u.get(y);_&&e.remove(_),u.set(y,x)}function g(y){const v=u.get(y);if(v){const S=y.index;S!==null&&v.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:f,update:h,getWireframeAttribute:g}}function nM(s,e,n){let r;function a(v){r=v}let u,c;function f(v){u=v.type,c=v.bytesPerElement}function h(v,S){s.drawElements(r,S,u,v*c),n.update(S,r,1)}function m(v,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,v*c,w),n.update(S,r,w))}function g(v,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,w);let x=0;for(let _=0;_<w;_++)x+=S[_];n.update(x,r,1)}function y(v,S,w,T){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<v.length;_++)m(v[_]/c,S[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,T,0,w);let _=0;for(let I=0;I<w;I++)_+=S[I]*T[I];n.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function iM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,f){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=f*(u/3);break;case s.LINES:n.lines+=f*(u/2);break;case s.LINE_STRIP:n.lines+=f*(u-1);break;case s.LINE_LOOP:n.lines+=f*u;break;case s.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function rM(s,e,n){const r=new WeakMap,a=new Wt;function u(c,f,h){const m=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==y){let R=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const w=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;w===!0&&(C=1),T===!0&&(C=2),x===!0&&(C=3);let Q=f.attributes.position.count*C,z=1;Q>e.maxTextureSize&&(z=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const F=new Float32Array(Q*z*4*y),X=new xg(F,Q,z,y);X.type=zi,X.needsUpdate=!0;const b=C*4;for(let k=0;k<y;k++){const ae=_[k],J=I[k],de=D[k],me=Q*z*4*k;for(let le=0;le<ae.count;le++){const ce=le*b;w===!0&&(a.fromBufferAttribute(ae,le),F[me+ce+0]=a.x,F[me+ce+1]=a.y,F[me+ce+2]=a.z,F[me+ce+3]=0),T===!0&&(a.fromBufferAttribute(J,le),F[me+ce+4]=a.x,F[me+ce+5]=a.y,F[me+ce+6]=a.z,F[me+ce+7]=0),x===!0&&(a.fromBufferAttribute(de,le),F[me+ce+8]=a.x,F[me+ce+9]=a.y,F[me+ce+10]=a.z,F[me+ce+11]=de.itemSize===4?a.w:1)}}v={count:y,texture:X,size:new _t(Q,z)},r.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let w=0;for(let x=0;x<m.length;x++)w+=m[x];const T=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function sM(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,g=h.geometry,y=e.get(h,g);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return y}function c(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:c}}class Pg extends Mn{constructor(e,n,r,a,u,c,f,h,m,g=Xs){if(g!==Xs&&g!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Xs&&(r=Zr),r===void 0&&g===Zs&&(r=Ks),super(null,a,u,c,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Lg=new Mn,Am=new Pg(1,1),Dg=new xg,Ug=new W0,Ig=new Rg,Rm=[],Cm=[],bm=new Float32Array(16),Pm=new Float32Array(9),Lm=new Float32Array(4);function to(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=Rm[a];if(u===void 0&&(u=new Float32Array(a),Rm[a]=u),e!==0){r.toArray(u,0);for(let c=1,f=0;c!==e;++c)f+=n,s[c].toArray(u,f)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Cm[e];n===void 0&&(n=new Int32Array(e),Cm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function oM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function cM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Lm.set(r),s.uniformMatrix2fv(this.addr,!1,Lm),Qt(n,r)}}function fM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Pm.set(r),s.uniformMatrix3fv(this.addr,!1,Pm),Qt(n,r)}}function dM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;bm.set(r),s.uniformMatrix4fv(this.addr,!1,bm),Qt(n,r)}}function hM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function _M(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function SM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Am.compareFunction=gg,u=Am):u=Lg,n.setTexture2D(e||u,a)}function MM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Ug,a)}function EM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Ig,a)}function wM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Dg,a)}function TM(s){switch(s){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return uM;case 35674:return cM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return hM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return vM;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return wM}}function AM(s,e){s.uniform1fv(this.addr,e)}function RM(s,e){const n=to(e,this.size,2);s.uniform2fv(this.addr,n)}function CM(s,e){const n=to(e,this.size,3);s.uniform3fv(this.addr,n)}function bM(s,e){const n=to(e,this.size,4);s.uniform4fv(this.addr,n)}function PM(s,e){const n=to(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function LM(s,e){const n=to(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function DM(s,e){const n=to(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function UM(s,e){s.uniform1iv(this.addr,e)}function IM(s,e){s.uniform2iv(this.addr,e)}function NM(s,e){s.uniform3iv(this.addr,e)}function FM(s,e){s.uniform4iv(this.addr,e)}function OM(s,e){s.uniform1uiv(this.addr,e)}function kM(s,e){s.uniform2uiv(this.addr,e)}function BM(s,e){s.uniform3uiv(this.addr,e)}function zM(s,e){s.uniform4uiv(this.addr,e)}function VM(s,e,n){const r=this.cache,a=e.length,u=Kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Lg,u[c])}function HM(s,e,n){const r=this.cache,a=e.length,u=Kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Ug,u[c])}function GM(s,e,n){const r=this.cache,a=e.length,u=Kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Ig,u[c])}function WM(s,e,n){const r=this.cache,a=e.length,u=Kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Dg,u[c])}function XM(s){switch(s){case 5126:return AM;case 35664:return RM;case 35665:return CM;case 35666:return bM;case 35674:return PM;case 35675:return LM;case 35676:return DM;case 5124:case 35670:return UM;case 35667:case 35671:return IM;case 35668:case 35672:return NM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return kM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}class YM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=TM(n.type)}}class jM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XM(n.type)}}class qM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function Dm(s,e){s.seq.push(e),s.map[e.id]=e}function $M(s,e,n){const r=s.name,a=r.length;for(uf.lastIndex=0;;){const u=uf.exec(r),c=uf.lastIndex;let f=u[1];const h=u[2]==="]",m=u[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===a){Dm(n,m===void 0?new YM(f,s,e):new jM(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new qM(f),Dm(n,y)),n=y}}}class zl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),c=e.getUniformLocation(n,u.name);$M(u,c,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,c=n.length;u!==c;++u){const f=n[u],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Um(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const KM=37297;let ZM=0;function QM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=a;c<u;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Im=new lt;function JM(s){Mt._getMatrix(Im,Mt.workingColorSpace,s);const e=`mat3( ${Im.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(s)){case ql:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+QM(s.getShaderSource(e),c)}else return a}function eE(s,e){const n=JM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tE(s,e){let n;switch(e){case t0:n="Linear";break;case n0:n="Reinhard";break;case i0:n="Cineon";break;case r0:n="ACESFilmic";break;case o0:n="AgX";break;case a0:n="Neutral";break;case s0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new q;function nE(){Mt.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function rE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:f}}return n}function Wo(s){return s!==""}function Fm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(s){return s.replace(oE,lE)}const aE=new Map;function lE(s,e){let n=ct[e];if(n===void 0){const r=aE.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return nd(n)}const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(s){return s.replace(uE,cE)}function cE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Iv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function dE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function pE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rg:e="ENVMAP_BLENDING_MULTIPLY";break;case Jv:e="ENVMAP_BLENDING_MIX";break;case e0:e="ENVMAP_BLENDING_ADD";break}return e}function mE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gE(s,e,n,r){const a=s.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const h=fE(n),m=dE(n),g=hE(n),y=pE(n),v=mE(n),S=iE(n),w=rE(u),T=a.createProgram();let x,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(x=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ct.tonemapping_pars_fragment:"",n.toneMapping!==Mr?tE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,eE("linearToOutputTexel",n.outputColorSpace),nE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),c=nd(c),c=Fm(c,n),c=Om(c,n),f=nd(f),f=Fm(f,n),f=Om(f,n),c=km(c),f=km(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",n.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=I+x+c,C=I+_+f,Q=Um(a,a.VERTEX_SHADER,D),z=Um(a,a.FRAGMENT_SHADER,C);a.attachShader(T,Q),a.attachShader(T,z),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(k){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(T).trim(),J=a.getShaderInfoLog(Q).trim(),de=a.getShaderInfoLog(z).trim();let me=!0,le=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,Q,z);else{const ce=Nm(a,Q,"vertex"),O=Nm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ae+`
`+ce+`
`+O)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||de==="")&&(le=!1);le&&(k.diagnostics={runnable:me,programLog:ae,vertexShader:{log:J,prefix:x},fragmentShader:{log:de,prefix:_}})}a.deleteShader(Q),a.deleteShader(z),X=new zl(a,T),b=sE(a,T)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,KM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Q,this.fragmentShader=z,this}let _E=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xE(e),n.set(e,r)),r}}class xE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function yE(s,e,n,r,a,u,c){const f=new yg,h=new vE,m=new Set,g=[],y=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function x(b,R,k,ae,J){const de=ae.fog,me=J.geometry,le=b.isMeshStandardMaterial?ae.environment:null,ce=(b.isMeshStandardMaterial?n:e).get(b.envMap||le),O=ce&&ce.mapping===jl?ce.image.height:null,ue=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,U=se!==void 0?se.length:0;let ne=0;me.morphAttributes.position!==void 0&&(ne=1),me.morphAttributes.normal!==void 0&&(ne=2),me.morphAttributes.color!==void 0&&(ne=3);let De,K,fe,ie;if(ue){const yt=xi[ue];De=yt.vertexShader,K=yt.fragmentShader}else De=b.vertexShader,K=b.fragmentShader,h.update(b),fe=h.getVertexShaderID(b),ie=h.getFragmentShaderID(b);const re=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),we=J.isInstancedMesh===!0,Ue=J.isBatchedMesh===!0,ht=!!b.map,tt=!!b.matcap,Rt=!!ce,G=!!b.aoMap,Ot=!!b.lightMap,rt=!!b.bumpMap,ut=!!b.normalMap,qe=!!b.displacementMap,Ct=!!b.emissiveMap,je=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,$=b.clearcoat>0,ge=b.dispersion>0,ve=b.iridescence>0,he=b.sheen>0,He=b.transmission>0,Re=E&&!!b.anisotropyMap,Ne=$&&!!b.clearcoatMap,ft=$&&!!b.clearcoatNormalMap,Me=$&&!!b.clearcoatRoughnessMap,Oe=ve&&!!b.iridescenceMap,Ze=ve&&!!b.iridescenceThicknessMap,Qe=he&&!!b.sheenColorMap,ke=he&&!!b.sheenRoughnessMap,pt=!!b.specularMap,st=!!b.specularColorMap,At=!!b.specularIntensityMap,V=He&&!!b.transmissionMap,Ce=He&&!!b.thicknessMap,oe=!!b.gradientMap,pe=!!b.alphaMap,Le=b.alphaTest>0,Pe=!!b.alphaHash,ot=!!b.extensions;let It=Mr;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(It=s.toneMapping);const jt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:K,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ue,batchingColor:Ue&&J._colorsTexture!==null,instancing:we,instancingColor:we&&J.instanceColor!==null,instancingMorph:we&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Js,alphaToCoverage:!!b.alphaToCoverage,map:ht,matcap:tt,envMap:Rt,envMapMode:Rt&&ce.mapping,envMapCubeUVHeight:O,aoMap:G,lightMap:Ot,bumpMap:rt,normalMap:ut,displacementMap:v&&qe,emissiveMap:Ct,normalMapObjectSpace:ut&&b.normalMapType===d0,normalMapTangentSpace:ut&&b.normalMapType===f0,metalnessMap:je,roughnessMap:P,anisotropy:E,anisotropyMap:Re,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:ge,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Ze,sheen:he,sheenColorMap:Qe,sheenRoughnessMap:ke,specularMap:pt,specularColorMap:st,specularIntensityMap:At,transmission:He,transmissionMap:V,thicknessMap:Ce,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Ws&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:b.combine,mapUv:ht&&T(b.map.channel),aoMapUv:G&&T(b.aoMap.channel),lightMapUv:Ot&&T(b.lightMap.channel),bumpMapUv:rt&&T(b.bumpMap.channel),normalMapUv:ut&&T(b.normalMap.channel),displacementMapUv:qe&&T(b.displacementMap.channel),emissiveMapUv:Ct&&T(b.emissiveMap.channel),metalnessMapUv:je&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Re&&T(b.anisotropyMap.channel),clearcoatMapUv:Ne&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(b.sheenRoughnessMap.channel),specularMapUv:pt&&T(b.specularMap.channel),specularColorMapUv:st&&T(b.specularColorMap.channel),specularIntensityMapUv:At&&T(b.specularIntensityMap.channel),transmissionMapUv:V&&T(b.transmissionMap.channel),thicknessMapUv:Ce&&T(b.thicknessMap.channel),alphaMapUv:pe&&T(b.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ut||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!me.attributes.uv&&(ht||pe),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:ye,skinning:J.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:ht&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ct&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===Ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)R.push(k),R.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(I(R,b),D(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function I(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function D(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=w[b.type];let k;if(R){const ae=xi[R];k=nx.clone(ae.uniforms)}else k=b.uniforms;return k}function Q(b,R){let k;for(let ae=0,J=g.length;ae<J;ae++){const de=g[ae];if(de.cacheKey===R){k=de,++k.usedTimes;break}}return k===void 0&&(k=new gE(s,R,b,u),g.push(k)),k}function z(b){if(--b.usedTimes===0){const R=g.indexOf(b);g[R]=g[g.length-1],g.pop(),b.destroy()}}function F(b){h.remove(b)}function X(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:C,acquireProgram:Q,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:X}}function SE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function c(y,v,S,w,T,x){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:v,material:S,groupOrder:w,renderOrder:y.renderOrder,z:T,group:x},s[e]=_):(_.id=y.id,_.object=y,_.geometry=v,_.material=S,_.groupOrder=w,_.renderOrder=y.renderOrder,_.z=T,_.group=x),e++,_}function f(y,v,S,w,T,x){const _=c(y,v,S,w,T,x);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(y,v,S,w,T,x){const _=c(y,v,S,w,T,x);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,v){n.length>1&&n.sort(y||ME),r.length>1&&r.sort(v||zm),a.length>1&&a.sort(v||zm)}function g(){for(let y=e,v=s.length;y<v;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:h,finish:g,sort:m}}function EE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new Vm,s.set(r,[c])):a>=u.length?(c=new Vm,u.push(c)):c=u[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new dt};break;case"SpotLight":n={position:new q,direction:new q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=n,n}}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let AE=0;function RE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CE(s){const e=new wE,n=TE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const a=new q,u=new Bt,c=new Bt;function f(m){let g=0,y=0,v=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,w=0,T=0,x=0,_=0,I=0,D=0,C=0,Q=0,z=0,F=0;m.sort(RE);for(let b=0,R=m.length;b<R;b++){const k=m[b],ae=k.color,J=k.intensity,de=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ae.r*J,y+=ae.g*J,v+=ae.b*J;else if(k.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(k.sh.coefficients[le],J);F++}else if(k.isDirectionalLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,O=n.get(k);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=me,r.directionalShadowMatrix[S]=k.shadow.matrix,I++}r.directional[S]=le,S++}else if(k.isSpotLight){const le=e.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(ae).multiplyScalar(J),le.distance=de,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,r.spot[T]=le;const ce=k.shadow;if(k.map&&(r.spotLightMap[Q]=k.map,Q++,ce.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[T]=ce.matrix,k.castShadow){const O=n.get(k);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,r.spotShadow[T]=O,r.spotShadowMap[T]=me,C++}T++}else if(k.isRectAreaLight){const le=e.get(k);le.color.copy(ae).multiplyScalar(J),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=le,x++}else if(k.isPointLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const ce=k.shadow,O=n.get(k);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,O.shadowCameraNear=ce.camera.near,O.shadowCameraFar=ce.camera.far,r.pointShadow[w]=O,r.pointShadowMap[w]=me,r.pointShadowMatrix[w]=k.shadow.matrix,D++}r.point[w]=le,w++}else if(k.isHemisphereLight){const le=e.get(k);le.skyColor.copy(k.color).multiplyScalar(J),le.groundColor.copy(k.groundColor).multiplyScalar(J),r.hemi[_]=le,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==S||X.pointLength!==w||X.spotLength!==T||X.rectAreaLength!==x||X.hemiLength!==_||X.numDirectionalShadows!==I||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==Q||X.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=x,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+Q-z,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,X.directionalLength=S,X.pointLength=w,X.spotLength=T,X.rectAreaLength=x,X.hemiLength=_,X.numDirectionalShadows=I,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=Q,X.numLightProbes=F,r.version=AE++)}function h(m,g){let y=0,v=0,S=0,w=0,T=0;const x=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const D=m[_];if(D.isDirectionalLight){const C=r.directional[y];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(x),y++}else if(D.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(x),S++}else if(D.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(x),c.identity(),u.copy(D.matrixWorld),u.premultiply(x),c.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),w++}else if(D.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(x),v++}else if(D.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(x),T++}}}return{setup:f,setupView:h,state:r}}function Hm(s){const e=new CE(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function c(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:c}}function bE(s){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let f;return c===void 0?(f=new Hm(s),e.set(a,[f])):u>=c.length?(f=new Hm(s),c.push(f)):f=c[u],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class PE extends es{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends es{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UE=`uniform sampler2D shadow_pass;
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
}`;function IE(s,e,n){let r=new Cg;const a=new _t,u=new _t,c=new Wt,f=new PE({depthPacking:c0}),h=new LE,m={},g=n.maxTextureSize,y={[Er]:Ln,[Ln]:Er,[Bi]:Bi},v=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:DE,fragmentShader:UE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new Qn;w.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Hi(w,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ig;let _=this.type;this.render=function(z,F,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Sr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=_!==ki&&this.type===ki,de=_===ki&&this.type!==ki;for(let me=0,le=z.length;me<le;me++){const ce=z[me],O=ce.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const ue=O.getFrameExtents();if(a.multiply(ue),u.copy(O.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(u.x=Math.floor(g/ue.x),a.x=u.x*ue.x,O.mapSize.x=u.x),a.y>g&&(u.y=Math.floor(g/ue.y),a.y=u.y*ue.y,O.mapSize.y=u.y)),O.map===null||J===!0||de===!0){const U=this.type!==ki?{minFilter:di,magFilter:di}:{};O.map!==null&&O.map.dispose(),O.map=new Qr(a.x,a.y,U),O.map.texture.name=ce.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const se=O.getViewportCount();for(let U=0;U<se;U++){const ne=O.getViewport(U);c.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),ae.viewport(c),O.updateMatrices(ce,U),r=O.getFrustum(),C(F,X,O.camera,ce,this.type)}O.isPointLightShadow!==!0&&this.type===ki&&I(O,X),O.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(b,R,k)};function I(z,F){const X=e.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Qr(a.x,a.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,X,v,T,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,X,S,T,null)}function D(z,F,X,b){let R=null;const k=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)R=k;else if(R=X.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ae=R.uuid,J=F.uuid;let de=m[ae];de===void 0&&(de={},m[ae]=de);let me=de[J];me===void 0&&(me=R.clone(),de[J]=me,F.addEventListener("dispose",Q)),R=me}if(R.visible=F.visible,R.wireframe=F.wireframe,b===ki?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:y[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=s.properties.get(R);ae.light=X}return R}function C(z,F,X,b,R){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===ki)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const J=e.update(z),de=z.material;if(Array.isArray(de)){const me=J.groups;for(let le=0,ce=me.length;le<ce;le++){const O=me[le],ue=de[O.materialIndex];if(ue&&ue.visible){const se=D(z,ue,b,R);z.onBeforeShadow(s,z,F,X,J,se,O),s.renderBufferDirect(X,null,J,se,z,O),z.onAfterShadow(s,z,F,X,J,se,O)}}}else if(de.visible){const me=D(z,de,b,R);z.onBeforeShadow(s,z,F,X,J,me,null),s.renderBufferDirect(X,null,J,me,z,null),z.onAfterShadow(s,z,F,X,J,me,null)}}const ae=z.children;for(let J=0,de=ae.length;J<de;J++)C(ae[J],F,X,b,R)}function Q(z){z.target.removeEventListener("dispose",Q);for(const X in m){const b=m[X],R=z.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const NE={[vf]:xf,[yf]:Ef,[Sf]:wf,[js]:Mf,[xf]:vf,[Ef]:yf,[wf]:Sf,[Mf]:js};function FE(s,e){function n(){let V=!1;const Ce=new Wt;let oe=null;const pe=new Wt(0,0,0,0);return{setMask:function(Le){oe!==Le&&!V&&(s.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Pe,ot,It,jt){jt===!0&&(Le*=It,Pe*=It,ot*=It),Ce.set(Le,Pe,ot,It),pe.equals(Ce)===!1&&(s.clearColor(Le,Pe,ot,It),pe.copy(Ce))},reset:function(){V=!1,oe=null,pe.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,oe=null,pe=null,Le=null;return{setReversed:function(Pe){if(Ce!==Pe){const ot=e.get("EXT_clip_control");Ce?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?re(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!V&&(s.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(Ce&&(Pe=NE[Pe]),pe!==Pe){switch(Pe){case vf:s.depthFunc(s.NEVER);break;case xf:s.depthFunc(s.ALWAYS);break;case yf:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Sf:s.depthFunc(s.EQUAL);break;case Mf:s.depthFunc(s.GEQUAL);break;case Ef:s.depthFunc(s.GREATER);break;case wf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){Le!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),Le=Pe)},reset:function(){V=!1,oe=null,pe=null,Le=null,Ce=!1}}}function a(){let V=!1,Ce=null,oe=null,pe=null,Le=null,Pe=null,ot=null,It=null,jt=null;return{setTest:function(yt){V||(yt?re(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!V&&(s.stencilMask(yt),Ce=yt)},setFunc:function(yt,En,mn){(oe!==yt||pe!==En||Le!==mn)&&(s.stencilFunc(yt,En,mn),oe=yt,pe=En,Le=mn)},setOp:function(yt,En,mn){(Pe!==yt||ot!==En||It!==mn)&&(s.stencilOp(yt,En,mn),Pe=yt,ot=En,It=mn)},setLocked:function(yt){V=yt},setClear:function(yt){jt!==yt&&(s.clearStencil(yt),jt=yt)},reset:function(){V=!1,Ce=null,oe=null,pe=null,Le=null,Pe=null,ot=null,It=null,jt=null}}}const u=new n,c=new r,f=new a,h=new WeakMap,m=new WeakMap;let g={},y={},v=new WeakMap,S=[],w=null,T=!1,x=null,_=null,I=null,D=null,C=null,Q=null,z=null,F=new dt(0,0,0),X=0,b=!1,R=null,k=null,ae=null,J=null,de=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ce=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(O)[1]),le=ce>=1):O.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),le=ce>=2);let ue=null,se={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),De=new Wt().fromArray(U),K=new Wt().fromArray(ne);function fe(V,Ce,oe,pe){const Le=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(V,Pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<oe;ot++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Pe}const ie={};ie[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),re(s.DEPTH_TEST),c.setFunc(js),rt(!1),ut(jp),re(s.CULL_FACE),G(Sr);function re(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function ye(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function we(V,Ce){return y[V]!==Ce?(s.bindFramebuffer(V,Ce),y[V]=Ce,V===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Ce),V===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ue(V,Ce){let oe=S,pe=!1;if(V){oe=v.get(Ce),oe===void 0&&(oe=[],v.set(Ce,oe));const Le=V.textures;if(oe.length!==Le.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,ot=Le.length;Pe<ot;Pe++)oe[Pe]=s.COLOR_ATTACHMENT0+Pe;oe.length=Le.length,pe=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,pe=!0);pe&&s.drawBuffers(oe)}function ht(V){return w!==V?(s.useProgram(V),w=V,!0):!1}const tt={[jr]:s.FUNC_ADD,[Fv]:s.FUNC_SUBTRACT,[Ov]:s.FUNC_REVERSE_SUBTRACT};tt[kv]=s.MIN,tt[Bv]=s.MAX;const Rt={[zv]:s.ZERO,[Vv]:s.ONE,[Hv]:s.SRC_COLOR,[gf]:s.SRC_ALPHA,[qv]:s.SRC_ALPHA_SATURATE,[Yv]:s.DST_COLOR,[Wv]:s.DST_ALPHA,[Gv]:s.ONE_MINUS_SRC_COLOR,[_f]:s.ONE_MINUS_SRC_ALPHA,[jv]:s.ONE_MINUS_DST_COLOR,[Xv]:s.ONE_MINUS_DST_ALPHA,[$v]:s.CONSTANT_COLOR,[Kv]:s.ONE_MINUS_CONSTANT_COLOR,[Zv]:s.CONSTANT_ALPHA,[Qv]:s.ONE_MINUS_CONSTANT_ALPHA};function G(V,Ce,oe,pe,Le,Pe,ot,It,jt,yt){if(V===Sr){T===!0&&(ye(s.BLEND),T=!1);return}if(T===!1&&(re(s.BLEND),T=!0),V!==Nv){if(V!==x||yt!==b){if((_!==jr||C!==jr)&&(s.blendEquation(s.FUNC_ADD),_=jr,C=jr),yt)switch(V){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vl:s.blendFunc(s.ONE,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,D=null,Q=null,z=null,F.set(0,0,0),X=0,x=V,b=yt}return}Le=Le||Ce,Pe=Pe||oe,ot=ot||pe,(Ce!==_||Le!==C)&&(s.blendEquationSeparate(tt[Ce],tt[Le]),_=Ce,C=Le),(oe!==I||pe!==D||Pe!==Q||ot!==z)&&(s.blendFuncSeparate(Rt[oe],Rt[pe],Rt[Pe],Rt[ot]),I=oe,D=pe,Q=Pe,z=ot),(It.equals(F)===!1||jt!==X)&&(s.blendColor(It.r,It.g,It.b,jt),F.copy(It),X=jt),x=V,b=!1}function Ot(V,Ce){V.side===Bi?ye(s.CULL_FACE):re(s.CULL_FACE);let oe=V.side===Ln;Ce&&(oe=!oe),rt(oe),V.blending===Ws&&V.transparent===!1?G(Sr):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),u.setMask(V.colorWrite);const pe=V.stencilWrite;f.setTest(pe),pe&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ct(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function ut(V){V!==Dv?(re(s.CULL_FACE),V!==k&&(V===jp?s.cullFace(s.BACK):V===Uv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),k=V}function qe(V){V!==ae&&(le&&s.lineWidth(V),ae=V)}function Ct(V,Ce,oe){V?(re(s.POLYGON_OFFSET_FILL),(J!==Ce||de!==oe)&&(s.polygonOffset(Ce,oe),J=Ce,de=oe)):ye(s.POLYGON_OFFSET_FILL)}function je(V){V?re(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function P(V){V===void 0&&(V=s.TEXTURE0+me-1),ue!==V&&(s.activeTexture(V),ue=V)}function E(V,Ce,oe){oe===void 0&&(ue===null?oe=s.TEXTURE0+me-1:oe=ue);let pe=se[oe];pe===void 0&&(pe={type:void 0,texture:void 0},se[oe]=pe),(pe.type!==V||pe.texture!==Ce)&&(ue!==oe&&(s.activeTexture(oe),ue=oe),s.bindTexture(V,Ce||ie[V]),pe.type=V,pe.texture=Ce)}function $(){const V=se[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(V){De.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),De.copy(V))}function ke(V){K.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),K.copy(V))}function pt(V,Ce){let oe=m.get(Ce);oe===void 0&&(oe=new WeakMap,m.set(Ce,oe));let pe=oe.get(V);pe===void 0&&(pe=s.getUniformBlockIndex(Ce,V.name),oe.set(V,pe))}function st(V,Ce){const pe=m.get(Ce).get(V);h.get(Ce)!==pe&&(s.uniformBlockBinding(Ce,pe,V.__bindingPointIndex),h.set(Ce,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ue=null,se={},y={},v=new WeakMap,S=[],w=null,T=!1,x=null,_=null,I=null,D=null,C=null,Q=null,z=null,F=new dt(0,0,0),X=0,b=!1,R=null,k=null,ae=null,J=null,de=null,De.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:re,disable:ye,bindFramebuffer:we,drawBuffers:Ue,useProgram:ht,setBlending:G,setMaterial:Ot,setFlipSided:rt,setCullFace:ut,setLineWidth:qe,setPolygonOffset:Ct,setScissorTest:je,activeTexture:P,bindTexture:E,unbindTexture:$,compressedTexImage2D:ge,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Ze,updateUBOMapping:pt,uniformBlockBinding:st,texStorage2D:ft,texStorage3D:Me,texSubImage2D:he,texSubImage3D:He,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ne,scissor:Qe,viewport:ke,reset:At}}function Gm(s,e,n,r){const a=OE(r);switch(n){case ug:return s*e;case fg:return s*e;case dg:return s*e*2;case hg:return s*e/a.components*a.byteLength;case ud:return s*e/a.components*a.byteLength;case pg:return s*e*2/a.components*a.byteLength;case cd:return s*e*2/a.components*a.byteLength;case cg:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case fd:return s*e*4/a.components*a.byteLength;case Nl:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:case Df:return Math.max(s,16)*Math.max(e,8)/4;case bf:case Lf:return Math.max(s,8)*Math.max(e,8)/2;case Uf:case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mg:case Qf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OE(s){switch(s){case Yi:case og:return{byteLength:1,components:1};case qo:case ag:case Ko:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case Zr:case od:case zi:return{byteLength:4,components:1};case lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function kE(s,e,n,r,a,u,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new _t,g=new WeakMap;let y;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return S?new OffscreenCanvas(P,E):Gl("canvas")}function T(P,E,$){let ge=1;const ve=je(P);if((ve.width>$||ve.height>$)&&(ge=$/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(ge*ve.width),He=Math.floor(ge*ve.height);y===void 0&&(y=w(he,He));const Re=E?w(he,He):y;return Re.width=he,Re.height=He,Re.getContext("2d").drawImage(P,0,0,he,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+He+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,E,$,ge,ve=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=E;if(E===s.RED&&($===s.FLOAT&&(he=s.R32F),$===s.HALF_FLOAT&&(he=s.R16F),$===s.UNSIGNED_BYTE&&(he=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.R8UI),$===s.UNSIGNED_SHORT&&(he=s.R16UI),$===s.UNSIGNED_INT&&(he=s.R32UI),$===s.BYTE&&(he=s.R8I),$===s.SHORT&&(he=s.R16I),$===s.INT&&(he=s.R32I)),E===s.RG&&($===s.FLOAT&&(he=s.RG32F),$===s.HALF_FLOAT&&(he=s.RG16F),$===s.UNSIGNED_BYTE&&(he=s.RG8)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RG8UI),$===s.UNSIGNED_SHORT&&(he=s.RG16UI),$===s.UNSIGNED_INT&&(he=s.RG32UI),$===s.BYTE&&(he=s.RG8I),$===s.SHORT&&(he=s.RG16I),$===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGB8UI),$===s.UNSIGNED_SHORT&&(he=s.RGB16UI),$===s.UNSIGNED_INT&&(he=s.RGB32UI),$===s.BYTE&&(he=s.RGB8I),$===s.SHORT&&(he=s.RGB16I),$===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),$===s.UNSIGNED_INT&&(he=s.RGBA32UI),$===s.BYTE&&(he=s.RGBA8I),$===s.SHORT&&(he=s.RGBA16I),$===s.INT&&(he=s.RGBA32I)),E===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),E===s.RGBA){const He=ve?ql:Mt.getTransfer(ge);$===s.FLOAT&&(he=s.RGBA32F),$===s.HALF_FLOAT&&(he=s.RGBA16F),$===s.UNSIGNED_BYTE&&(he=He===Lt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(P,E){let $;return P?E===null||E===Zr||E===Ks?$=s.DEPTH24_STENCIL8:E===zi?$=s.DEPTH32F_STENCIL8:E===qo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zr||E===Ks?$=s.DEPTH_COMPONENT24:E===zi?$=s.DEPTH_COMPONENT32F:E===qo&&($=s.DEPTH_COMPONENT16),$}function Q(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==di&&P.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),X(E),E.isVideoTexture&&g.delete(E)}function F(P){const E=P.target;E.removeEventListener("dispose",F),R(E)}function X(P){const E=r.get(P);if(E.__webglInit===void 0)return;const $=P.source,ge=v.get($);if(ge){const ve=ge[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(P),Object.keys(ge).length===0&&v.delete($)}r.remove(P)}function b(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const $=P.source,ge=v.get($);delete ge[E.__cacheKey],c.memory.textures--}function R(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let ve=0;ve<E.__webglFramebuffer[ge].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[ge][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[ge]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let ge=0,ve=$.length;ge<ve;ge++){const he=r.get($[ge]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove($[ge])}r.remove(P)}let k=0;function ae(){k=0}function J(){const P=k;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),k+=1,P}function de(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function me(P,E){const $=r.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const ge=P.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,P,E);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function le(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){K($,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function ce(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){K($,P,E);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function O(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){fe($,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const ue={[Rf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[Cf]:s.MIRRORED_REPEAT},se={[di]:s.NEAREST,[l0]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},U={[h0]:s.NEVER,[x0]:s.ALWAYS,[p0]:s.LESS,[gg]:s.LEQUAL,[m0]:s.EQUAL,[v0]:s.GEQUAL,[g0]:s.GREATER,[_0]:s.NOTEQUAL};function ne(P,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===Nc||E.magFilter===ol||E.magFilter===Kr||E.minFilter===yi||E.minFilter===Nc||E.minFilter===ol||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ue[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===di||E.minFilter!==ol&&E.minFilter!==Kr||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function De(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const ge=E.source;let ve=v.get(ge);ve===void 0&&(ve={},v.set(ge,ve));const he=de(E);if(he!==P.__cacheKey){ve[he]===void 0&&(ve[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ve[he].usedTimes++;const He=ve[P.__cacheKey];He!==void 0&&(ve[P.__cacheKey].usedTimes--,He.usedTimes===0&&b(E)),P.__cacheKey=he,P.__webglTexture=ve[he].texture}return $}function K(P,E,$){let ge=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=s.TEXTURE_3D);const ve=De(P,E),he=E.source;n.bindTexture(ge,P.__webglTexture,s.TEXTURE0+$);const He=r.get(he);if(he.version!==He.__version||ve===!0){n.activeTexture(s.TEXTURE0+$);const Re=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===yr?null:Mt.getPrimaries(E.colorSpace),ft=E.colorSpace===yr||Re===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=T(E.image,!1,a.maxTextureSize);Me=Ct(E,Me);const Oe=u.convert(E.format,E.colorSpace),Ze=u.convert(E.type);let Qe=D(E.internalFormat,Oe,Ze,E.colorSpace,E.isVideoTexture);ne(ge,E);let ke;const pt=E.mipmaps,st=E.isVideoTexture!==!0,At=He.__version===void 0||ve===!0,V=he.dataReady,Ce=Q(E,Me);if(E.isDepthTexture)Qe=C(E.format===Zs,E.type),At&&(st?n.texStorage2D(s.TEXTURE_2D,1,Qe,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Qe,Me.width,Me.height,0,Oe,Ze,null));else if(E.isDataTexture)if(pt.length>0){st&&At&&n.texStorage2D(s.TEXTURE_2D,Ce,Qe,pt[0].width,pt[0].height);for(let oe=0,pe=pt.length;oe<pe;oe++)ke=pt[oe],st?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Ze,ke.data):n.texImage2D(s.TEXTURE_2D,oe,Qe,ke.width,ke.height,0,Oe,Ze,ke.data);E.generateMipmaps=!1}else st?(At&&n.texStorage2D(s.TEXTURE_2D,Ce,Qe,Me.width,Me.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,Ze,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Qe,Me.width,Me.height,0,Oe,Ze,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Qe,pt[0].width,pt[0].height,Me.depth);for(let oe=0,pe=pt.length;oe<pe;oe++)if(ke=pt[oe],E.format!==fi)if(Oe!==null)if(st){if(V)if(E.layerUpdates.size>0){const Le=Gm(ke.width,ke.height,E.format,E.type);for(const Pe of E.layerUpdates){const ot=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Pe,ke.width,ke.height,1,Oe,ot)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Qe,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ke.width,ke.height,Me.depth,Oe,Ze,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,Qe,ke.width,ke.height,Me.depth,0,Oe,Ze,ke.data)}else{st&&At&&n.texStorage2D(s.TEXTURE_2D,Ce,Qe,pt[0].width,pt[0].height);for(let oe=0,pe=pt.length;oe<pe;oe++)ke=pt[oe],E.format!==fi?Oe!==null?st?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,Qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,ke.width,ke.height,Oe,Ze,ke.data):n.texImage2D(s.TEXTURE_2D,oe,Qe,ke.width,ke.height,0,Oe,Ze,ke.data)}else if(E.isDataArrayTexture)if(st){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Qe,Me.width,Me.height,Me.depth),V)if(E.layerUpdates.size>0){const oe=Gm(Me.width,Me.height,E.format,E.type);for(const pe of E.layerUpdates){const Le=Me.data.subarray(pe*oe/Me.data.BYTES_PER_ELEMENT,(pe+1)*oe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Oe,Ze,Le)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Ze,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Me.width,Me.height,Me.depth,0,Oe,Ze,Me.data);else if(E.isData3DTexture)st?(At&&n.texStorage3D(s.TEXTURE_3D,Ce,Qe,Me.width,Me.height,Me.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,Ze,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Qe,Me.width,Me.height,Me.depth,0,Oe,Ze,Me.data);else if(E.isFramebufferTexture){if(At)if(st)n.texStorage2D(s.TEXTURE_2D,Ce,Qe,Me.width,Me.height);else{let oe=Me.width,pe=Me.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(s.TEXTURE_2D,Le,Qe,oe,pe,0,Oe,Ze,null),oe>>=1,pe>>=1}}else if(pt.length>0){if(st&&At){const oe=je(pt[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Qe,oe.width,oe.height)}for(let oe=0,pe=pt.length;oe<pe;oe++)ke=pt[oe],st?V&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,Ze,ke):n.texImage2D(s.TEXTURE_2D,oe,Qe,Oe,Ze,ke);E.generateMipmaps=!1}else if(st){if(At){const oe=je(Me);n.texStorage2D(s.TEXTURE_2D,Ce,Qe,oe.width,oe.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Ze,Me)}else n.texImage2D(s.TEXTURE_2D,0,Qe,Oe,Ze,Me);x(E)&&_(ge),He.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function fe(P,E,$){if(E.image.length!==6)return;const ge=De(P,E),ve=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const he=r.get(ve);if(ve.version!==he.__version||ge===!0){n.activeTexture(s.TEXTURE0+$);const He=Mt.getPrimaries(Mt.workingColorSpace),Re=E.colorSpace===yr?null:Mt.getPrimaries(E.colorSpace),Ne=E.colorSpace===yr||He===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ft=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!ft&&!Me?Oe[pe]=T(E.image[pe],!0,a.maxCubemapSize):Oe[pe]=Me?E.image[pe].image:E.image[pe],Oe[pe]=Ct(E,Oe[pe]);const Ze=Oe[0],Qe=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),pt=D(E.internalFormat,Qe,ke,E.colorSpace),st=E.isVideoTexture!==!0,At=he.__version===void 0||ge===!0,V=ve.dataReady;let Ce=Q(E,Ze);ne(s.TEXTURE_CUBE_MAP,E);let oe;if(ft){st&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,pt,Ze.width,Ze.height);for(let pe=0;pe<6;pe++){oe=Oe[pe].mipmaps;for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];E.format!==fi?Qe!==null?st?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Qe,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,pt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Qe,ke,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,pt,Pe.width,Pe.height,0,Qe,ke,Pe.data)}}}else{if(oe=E.mipmaps,st&&At){oe.length>0&&Ce++;const pe=je(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,pt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,Qe,ke,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Oe[pe].width,Oe[pe].height,0,Qe,ke,Oe[pe].data);for(let Le=0;Le<oe.length;Le++){const ot=oe[Le].image[pe].image;st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,ot.width,ot.height,Qe,ke,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,pt,ot.width,ot.height,0,Qe,ke,ot.data)}}else{st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Qe,ke,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Qe,ke,Oe[pe]);for(let Le=0;Le<oe.length;Le++){const Pe=oe[Le];st?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Qe,ke,Pe.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,pt,Qe,ke,Pe.image[pe])}}}x(E)&&_(s.TEXTURE_CUBE_MAP),he.__version=ve.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ie(P,E,$,ge,ve,he){const He=u.convert($.format,$.colorSpace),Re=u.convert($.type),Ne=D($.internalFormat,He,Re,$.colorSpace),ft=r.get(E),Me=r.get($);if(Me.__renderTarget=E,!ft.__hasExternalTextures){const Oe=Math.max(1,E.width>>he),Ze=Math.max(1,E.height>>he);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,he,Ne,Oe,Ze,E.depth,0,He,Re,null):n.texImage2D(ve,he,Ne,Oe,Ze,0,He,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ve,Me.__webglTexture,0,rt(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ve,Me.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function re(P,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const ge=E.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,he=C(E.stencilBuffer,ve),He=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=rt(E);ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,he,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,P)}else{const ge=E.textures;for(let ve=0;ve<ge.length;ve++){const he=ge[ve],He=u.convert(he.format,he.colorSpace),Re=u.convert(he.type),Ne=D(he.internalFormat,He,Re,he.colorSpace),ft=rt(E);$&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ne,E.width,E.height):ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ne,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me(E.depthTexture,0);const ve=ge.__webglTexture,he=rt(E);if(E.depthTexture.format===Xs)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(E.depthTexture.format===Zs)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function we(P){const E=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ge=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ve)};ge.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=ge}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ye(E.__webglFramebuffer,P)}else if($){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=s.createRenderbuffer(),re(E.__webglDepthbuffer[ge],P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),re(E.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(P,E,$){const ge=r.get(P);E!==void 0&&ie(ge.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&we(P)}function ht(P){const E=P.texture,$=r.get(P),ge=r.get(E);P.addEventListener("dispose",F);const ve=P.textures,he=P.isWebGLCubeRenderTarget===!0,He=ve.length>1;if(He||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=E.version,c.memory.textures++),he){$.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Re]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)$.__webglFramebuffer[Re][Ne]=s.createFramebuffer()}else $.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Re=0;Re<E.mipmaps.length;Re++)$.__webglFramebuffer[Re]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(He)for(let Re=0,Ne=ve.length;Re<Ne;Re++){const ft=r.get(ve[Re]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&ut(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const Ne=ve[Re];$.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Re]);const ft=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=D(Ne.internalFormat,ft,Me,Ne.colorSpace,P.isXRRenderTarget===!0),Ze=rt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Oe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,$.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),re($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)ie($.__webglFramebuffer[Re][Ne],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ne);else ie($.__webglFramebuffer[Re],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(E)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let Re=0,Ne=ve.length;Re<Ne;Re++){const ft=ve[Re],Me=r.get(ft);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ne(s.TEXTURE_2D,ft),ie($.__webglFramebuffer,P,ft,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),x(ft)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,ge.__webglTexture),ne(Re,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)ie($.__webglFramebuffer[Ne],P,E,s.COLOR_ATTACHMENT0,Re,Ne);else ie($.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Re,0);x(E)&&_(Re),n.unbindTexture()}P.depthBuffer&&we(P)}function tt(P){const E=P.textures;for(let $=0,ge=E.length;$<ge;$++){const ve=E[$];if(x(ve)){const he=I(P),He=r.get(ve).__webglTexture;n.bindTexture(he,He),_(he),n.unbindTexture()}}}const Rt=[],G=[];function Ot(P){if(P.samples>0){if(ut(P)===!1){const E=P.textures,$=P.width,ge=P.height;let ve=s.COLOR_BUFFER_BIT;const he=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(P),Re=E.length>1;if(Re)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const ft=r.get(E[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,$,ge,0,0,$,ge,ve,s.NEAREST),h===!0&&(Rt.length=0,G.length=0,Rt.push(s.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(he),G.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ne]);const ft=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,ft,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function rt(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(P){const E=c.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Ct(P,E){const $=P.colorSpace,ge=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Js&&$!==yr&&(Mt.getTransfer($)===Lt?(ge!==fi||ve!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=me,this.setTexture2DArray=le,this.setTexture3D=ce,this.setTextureCube=O,this.rebindTextures=Ue,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ut}function BE(s,e){function n(r,a=yr){let u;const c=Mt.getTransfer(a);if(r===Yi)return s.UNSIGNED_BYTE;if(r===ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===og)return s.BYTE;if(r===ag)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===od)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Ko)return s.HALF_FLOAT;if(r===ug)return s.ALPHA;if(r===cg)return s.RGB;if(r===fi)return s.RGBA;if(r===fg)return s.LUMINANCE;if(r===dg)return s.LUMINANCE_ALPHA;if(r===Xs)return s.DEPTH_COMPONENT;if(r===Zs)return s.DEPTH_STENCIL;if(r===hg)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===pg)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===Nl||r===Fl||r===Ol||r===kl)if(c===Lt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Nl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Nl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bf||r===Pf||r===Lf||r===Df)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===bf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Df)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uf||r===If||r===Nf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Uf||r===If)return c===Lt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Nf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===Yf||r===jf||r===qf||r===$f)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ff)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Of)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$f)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===Kf||r===Zf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Bl)return c===Lt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mg||r===Qf||r===Jf||r===ed)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Bl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Qf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class zE extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rl extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,c=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,r),_=this._getHandJoint(m,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],v=g.position.distanceTo(y.position),S=.02,w=.005;m.inputState.pinching&&v>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Mn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:HE,fragmentShader:GE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new $l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XE extends eo{constructor(e,n){super();const r=this;let a=null,u=1,c=null,f="local-floor",h=1,m=null,g=null,y=null,v=null,S=null,w=null;const T=new WE,x=n.getContextAttributes();let _=null,I=null;const D=[],C=[],Q=new _t;let z=null;const F=new Kn;F.viewport=new Wt;const X=new Kn;X.viewport=new Wt;const b=[F,X],R=new zE;let k=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=D[K];return fe===void 0&&(fe=new cf,D[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=D[K];return fe===void 0&&(fe=new cf,D[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=D[K];return fe===void 0&&(fe=new cf,D[K]=fe),fe.getHandSpace()};function J(K){const fe=C.indexOf(K.inputSource);if(fe===-1)return;const ie=D[fe];ie!==void 0&&(ie.update(K.inputSource,K.frame,m||c),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function de(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",me);for(let K=0;K<D.length;K++){const fe=C[K];fe!==null&&(C[K]=null,D[K].disconnect(fe))}k=null,ae=null,T.reset(),e.setRenderTarget(_),S=null,v=null,y=null,a=null,I=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(Q.width,Q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",de),a.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(Q),a.renderState.layers===void 0){const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Qr(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,ie=null,re=null;x.depth&&(re=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=x.stencil?Zs:Xs,ie=x.stencil?Ks:Zr);const ye={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:u};y=new XRWebGLBinding(a,n),v=y.createProjectionLayer(ye),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new Qr(v.textureWidth,v.textureHeight,{format:fi,type:Yi,depthTexture:new Pg(v.textureWidth,v.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(f),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function me(K){for(let fe=0;fe<K.removed.length;fe++){const ie=K.removed[fe],re=C.indexOf(ie);re>=0&&(C[re]=null,D[re].disconnect(ie))}for(let fe=0;fe<K.added.length;fe++){const ie=K.added[fe];let re=C.indexOf(ie);if(re===-1){for(let we=0;we<D.length;we++)if(we>=C.length){C.push(ie),re=we;break}else if(C[we]===null){C[we]=ie,re=we;break}if(re===-1)break}const ye=D[re];ye&&ye.connect(ie)}}const le=new q,ce=new q;function O(K,fe,ie){le.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(ie.matrixWorld);const re=le.distanceTo(ce),ye=fe.projectionMatrix.elements,we=ie.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),ht=ye[14]/(ye[10]+1),tt=(ye[9]+1)/ye[5],Rt=(ye[9]-1)/ye[5],G=(ye[8]-1)/ye[0],Ot=(we[8]+1)/we[0],rt=Ue*G,ut=Ue*Ot,qe=re/(-G+Ot),Ct=qe*-G;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=Ue+qe,P=ht+qe,E=rt-Ct,$=ut+(re-Ct),ge=tt*ht/P*je,ve=Rt*ht/P*je;K.projectionMatrix.makePerspective(E,$,ge,ve,je,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let fe=K.near,ie=K.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(ie=T.depthFar)),R.near=X.near=F.near=fe,R.far=X.far=F.far=ie,(k!==R.near||ae!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ae=R.far),F.layers.mask=K.layers.mask|2,X.layers.mask=K.layers.mask|4,R.layers.mask=F.layers.mask|X.layers.mask;const re=K.parent,ye=R.cameras;ue(R,re);for(let we=0;we<ye.length;we++)ue(ye[we],re);ye.length===2?O(R,F,X):R.projectionMatrix.copy(F.projectionMatrix),se(K,R,re)};function se(K,fe,ie){ie===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$o*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(K){h=K,v!==null&&(v.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let U=null;function ne(K,fe){if(g=fe.getViewerPose(m||c),w=fe,g!==null){const ie=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let re=!1;ie.length!==R.cameras.length&&(R.cameras.length=0,re=!0);for(let we=0;we<ie.length;we++){const Ue=ie[we];let ht=null;if(S!==null)ht=S.getViewport(Ue);else{const Rt=y.getViewSubImage(v,Ue);ht=Rt.viewport,we===0&&(e.setRenderTargetTextures(I,Rt.colorTexture,v.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(I))}let tt=b[we];tt===void 0&&(tt=new Kn,tt.layers.enable(we),tt.viewport=new Wt,b[we]=tt),tt.matrix.fromArray(Ue.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ue.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ht.x,ht.y,ht.width,ht.height),we===0&&(R.matrix.copy(tt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),re===!0&&R.cameras.push(tt)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const we=y.getDepthInformation(ie[0]);we&&we.isValid&&we.texture&&T.init(e,we,a.renderState)}}for(let ie=0;ie<D.length;ie++){const re=C[ie],ye=D[ie];re!==null&&ye!==void 0&&ye.update(re,fe,m||c)}U&&U(K,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const De=new bg;De.setAnimationLoop(ne),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}const Wr=new Si,YE=new Bt;function jE(s,e){function n(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Tg(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,I,D,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(x,_):_.isMeshToonMaterial?(u(x,_),y(x,_)):_.isMeshPhongMaterial?(u(x,_),g(x,_)):_.isMeshStandardMaterial?(u(x,_),v(x,_),_.isMeshPhysicalMaterial&&S(x,_,C)):_.isMeshMatcapMaterial?(u(x,_),w(x,_)):_.isMeshDepthMaterial?u(x,_):_.isMeshDistanceMaterial?(u(x,_),T(x,_)):_.isMeshNormalMaterial?u(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?h(x,_,I,D):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,n(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Ln&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,n(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Ln&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,n(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,n(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const I=e.get(_),D=I.envMap,C=I.envMapRotation;D&&(x.envMap.value=D,Wr.copy(C),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),x.envMapRotation.value.setFromMatrix4(YE.makeRotationFromEuler(Wr)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,I,D){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*I,x.scale.value=D*.5,_.map&&(x.map.value=_.map,n(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,I){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ln&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const I=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function qE(s,e,n,r){let a={},u={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,D){const C=D.program;r.uniformBlockBinding(I,C)}function m(I,D){let C=a[I.id];C===void 0&&(w(I),C=g(I),a[I.id]=C,I.addEventListener("dispose",x));const Q=D.program;r.updateUBOMapping(I,Q);const z=e.render.frame;u[I.id]!==z&&(v(I),u[I.id]=z)}function g(I){const D=y();I.__bindingPointIndex=D;const C=s.createBuffer(),Q=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,Q,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function y(){for(let I=0;I<f;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const D=a[I.id],C=I.uniforms,Q=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,F=C.length;z<F;z++){const X=Array.isArray(C[z])?C[z]:[C[z]];for(let b=0,R=X.length;b<R;b++){const k=X[b];if(S(k,z,b,Q)===!0){const ae=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let de=0;for(let me=0;me<J.length;me++){const le=J[me],ce=T(le);typeof le=="number"||typeof le=="boolean"?(k.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,ae+de,k.__data)):le.isMatrix3?(k.__data[0]=le.elements[0],k.__data[1]=le.elements[1],k.__data[2]=le.elements[2],k.__data[3]=0,k.__data[4]=le.elements[3],k.__data[5]=le.elements[4],k.__data[6]=le.elements[5],k.__data[7]=0,k.__data[8]=le.elements[6],k.__data[9]=le.elements[7],k.__data[10]=le.elements[8],k.__data[11]=0):(le.toArray(k.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,D,C,Q){const z=I.value,F=D+"_"+C;if(Q[F]===void 0)return typeof z=="number"||typeof z=="boolean"?Q[F]=z:Q[F]=z.clone(),!0;{const X=Q[F];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return Q[F]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function w(I){const D=I.uniforms;let C=0;const Q=16;for(let F=0,X=D.length;F<X;F++){const b=Array.isArray(D[F])?D[F]:[D[F]];for(let R=0,k=b.length;R<k;R++){const ae=b[R],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let de=0,me=J.length;de<me;de++){const le=J[de],ce=T(le),O=C%Q,ue=O%ce.boundary,se=O+ue;C+=ue,se!==0&&Q-se<ce.storage&&(C+=Q-se),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=C,C+=ce.storage}}}const z=C%Q;return z>0&&(C+=Q-z),I.__size=C,I.__cache={},this}function T(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function x(I){const D=I.target;D.removeEventListener("dispose",x);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function _(){for(const I in a)s.deleteBuffer(a[I]);c=[],a={},u={}}return{bind:h,update:m,dispose:_}}class $E{constructor(e={}){const{canvas:n=F0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const w=new Uint32Array(4),T=new Int32Array(4);let x=null,_=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Mr,this.toneMappingExposure=1;const C=this;let Q=!1,z=0,F=0,X=null,b=-1,R=null;const k=new Wt,ae=new Wt;let J=null;const de=new dt(0);let me=0,le=n.width,ce=n.height,O=1,ue=null,se=null;const U=new Wt(0,0,le,ce),ne=new Wt(0,0,le,ce);let De=!1;const K=new Cg;let fe=!1,ie=!1;const re=new Bt,ye=new Bt,we=new q,Ue=new Wt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Rt(){return X===null?O:1}let G=r;function Ot(A,H){return n.getContext(A,H)}try{const A={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),G===null){const H="webgl2";if(G=Ot(H,A),G===null)throw Ot(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,ut,qe,Ct,je,P,E,$,ge,ve,he,He,Re,Ne,ft,Me,Oe,Ze,Qe,ke,pt,st,At,V;function Ce(){rt=new eM(G),rt.init(),st=new BE(G,rt),ut=new jS(G,rt,e,st),qe=new FE(G,rt),ut.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),Ct=new iM(G),je=new SE,P=new kE(G,rt,qe,je,ut,st,Ct),E=new $S(C),$=new JS(C),ge=new ux(G),At=new XS(G,ge),ve=new tM(G,ge,Ct,At),he=new sM(G,ve,ge,Ct),Qe=new rM(G,ut,P),Me=new qS(je),He=new yE(C,E,$,rt,ut,At,Me),Re=new jE(C,je),Ne=new EE,ft=new bE(rt),Ze=new WS(C,E,$,qe,he,S,h),Oe=new IE(C,he,ut),V=new qE(G,Ct,ut,qe),ke=new YS(G,rt,Ct),pt=new nM(G,rt,Ct),Ct.programs=He.programs,C.capabilities=ut,C.extensions=rt,C.properties=je,C.renderLists=Ne,C.shadowMap=Oe,C.state=qe,C.info=Ct}Ce();const oe=new XE(C,G);this.xr=oe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(le,ce,!1))},this.getSize=function(A){return A.set(le,ce)},this.setSize=function(A,H,ee=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,ce=H,n.width=Math.floor(A*O),n.height=Math.floor(H*O),ee===!0&&(n.style.width=A+"px",n.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(le*O,ce*O).floor()},this.setDrawingBufferSize=function(A,H,ee){le=A,ce=H,O=ee,n.width=Math.floor(A*ee),n.height=Math.floor(H*ee),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,H,ee,te){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,H,ee,te),qe.viewport(k.copy(U).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,H,ee,te){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,H,ee,te),qe.scissor(ae.copy(ne).multiplyScalar(O).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){qe.setScissorTest(De=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,H=!0,ee=!0){let te=0;if(A){let W=!1;if(X!==null){const Ae=X.texture.format;W=Ae===fd||Ae===cd||Ae===ud}if(W){const Ae=X.texture.type,Ee=Ae===Yi||Ae===Zr||Ae===qo||Ae===Ks||Ae===ad||Ae===ld,Ge=Ze.getClearColor(),ze=Ze.getClearAlpha(),Je=Ge.r,nt=Ge.g,We=Ge.b;Ee?(w[0]=Je,w[1]=nt,w[2]=We,w[3]=ze,G.clearBufferuiv(G.COLOR,0,w)):(T[0]=Je,T[1]=nt,T[2]=We,T[3]=ze,G.clearBufferiv(G.COLOR,0,T))}else te|=G.COLOR_BUFFER_BIT}H&&(te|=G.DEPTH_BUFFER_BIT),ee&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ne.dispose(),ft.dispose(),je.dispose(),E.dispose(),$.dispose(),he.dispose(),At.dispose(),V.dispose(),He.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ts),oe.removeEventListener("sessionend",ji),Mi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const A=Ct.autoReset,H=Oe.enabled,ee=Oe.autoUpdate,te=Oe.needsUpdate,W=Oe.type;Ce(),Ct.autoReset=A,Oe.enabled=H,Oe.autoUpdate=ee,Oe.needsUpdate=te,Oe.type=W}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const H=A.target;H.removeEventListener("dispose",ot),It(H)}function It(A){jt(A),je.remove(A)}function jt(A){const H=je.get(A).programs;H!==void 0&&(H.forEach(function(ee){He.releaseProgram(ee)}),A.isShaderMaterial&&He.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,ee,te,W,Ae){H===null&&(H=ht);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,Ge=na(A,H,ee,te,W);qe.setMaterial(te,Ee);let ze=ee.index,Je=1;if(te.wireframe===!0){if(ze=ve.getWireframeAttribute(ee),ze===void 0)return;Je=2}const nt=ee.drawRange,We=ee.attributes.position;let vt=nt.start*Je,Tt=(nt.start+nt.count)*Je;Ae!==null&&(vt=Math.max(vt,Ae.start*Je),Tt=Math.min(Tt,(Ae.start+Ae.count)*Je)),ze!==null?(vt=Math.max(vt,0),Tt=Math.min(Tt,ze.count)):We!=null&&(vt=Math.max(vt,0),Tt=Math.min(Tt,We.count));const gt=Tt-vt;if(gt<0||gt===1/0)return;At.setup(W,te,Ge,ee,ze);let on,at=ke;if(ze!==null&&(on=ge.get(ze),at=pt,at.setIndex(on)),W.isMesh)te.wireframe===!0?(qe.setLineWidth(te.wireframeLinewidth*Rt()),at.setMode(G.LINES)):at.setMode(G.TRIANGLES);else if(W.isLine){let Ye=te.linewidth;Ye===void 0&&(Ye=1),qe.setLineWidth(Ye*Rt()),W.isLineSegments?at.setMode(G.LINES):W.isLineLoop?at.setMode(G.LINE_LOOP):at.setMode(G.LINE_STRIP)}else W.isPoints?at.setMode(G.POINTS):W.isSprite&&at.setMode(G.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)at.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,Jn=W._multiDrawCounts,Et=W._multiDrawCount,an=ze?ge.get(ze).bytesPerElement:1,ei=je.get(te).currentProgram.getUniforms();for(let qt=0;qt<Et;qt++)ei.setValue(G,"_gl_DrawID",qt),at.render(Ye[qt]/an,Jn[qt])}else if(W.isInstancedMesh)at.renderInstances(vt,gt,W.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Jn=Math.min(ee.instanceCount,Ye);at.renderInstances(vt,gt,Jn)}else at.render(vt,gt)};function yt(A,H,ee){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,ns(A,H,ee),A.side=Er,A.needsUpdate=!0,ns(A,H,ee),A.side=Bi):ns(A,H,ee)}this.compile=function(A,H,ee=null){ee===null&&(ee=A),_=ft.get(ee),_.init(H),D.push(_),ee.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==ee&&A.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const te=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Ee=0;Ee<Ae.length;Ee++){const Ge=Ae[Ee];yt(Ge,ee,W),te.add(Ge)}else yt(Ae,ee,W),te.add(Ae)}),D.pop(),_=null,te},this.compileAsync=function(A,H,ee=null){const te=this.compile(A,H,ee);return new Promise(W=>{function Ae(){if(te.forEach(function(Ee){je.get(Ee).currentProgram.isReady()&&te.delete(Ee)}),te.size===0){W(A);return}setTimeout(Ae,10)}rt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let En=null;function mn(A){En&&En(A)}function ts(){Mi.stop()}function ji(){Mi.start()}const Mi=new bg;Mi.setAnimationLoop(mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){En=A,oe.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},oe.addEventListener("sessionstart",ts),oe.addEventListener("sessionend",ji),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,H,X),_=ft.get(A,D.length),_.init(H),D.push(_),ye.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(ye),ie=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,ie),x=Ne.get(A,I.length),x.init(),I.push(x),oe.enabled===!0&&oe.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Ei(Ae,H,-1/0,C.sortObjects)}Ei(A,H,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(ue,se),tt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,tt&&Ze.addToRenderList(x,A),this.info.render.frame++,fe===!0&&Me.beginShadows();const ee=_.state.shadowsArray;Oe.render(ee,A,H),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=x.opaque,W=x.transmissive;if(_.setupLights(),H.isArrayCamera){const Ae=H.cameras;if(W.length>0)for(let Ee=0,Ge=Ae.length;Ee<Ge;Ee++){const ze=Ae[Ee];Ar(te,W,A,ze)}tt&&Ze.render(A);for(let Ee=0,Ge=Ae.length;Ee<Ge;Ee++){const ze=Ae[Ee];Tr(x,A,ze,ze.viewport)}}else W.length>0&&Ar(te,W,A,H),tt&&Ze.render(A),Tr(x,A,H);X!==null&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,H),At.resetDefaultState(),b=-1,R=null,D.pop(),D.length>0?(_=D[D.length-1],fe===!0&&Me.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function Ei(A,H,ee,te){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){te&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const Ee=he.update(A),Ge=A.material;Ge.visible&&x.push(A,Ee,Ge,ee,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Ee=he.update(A),Ge=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Ge)){const ze=Ee.groups;for(let Je=0,nt=ze.length;Je<nt;Je++){const We=ze[Je],vt=Ge[We.materialIndex];vt&&vt.visible&&x.push(A,Ee,vt,ee,Ue.z,We)}}else Ge.visible&&x.push(A,Ee,Ge,ee,Ue.z,null)}}const Ae=A.children;for(let Ee=0,Ge=Ae.length;Ee<Ge;Ee++)Ei(Ae[Ee],H,ee,te)}function Tr(A,H,ee,te){const W=A.opaque,Ae=A.transmissive,Ee=A.transparent;_.setupLightsView(ee),fe===!0&&Me.setGlobalState(C.clippingPlanes,ee),te&&qe.viewport(k.copy(te)),W.length>0&&qi(W,H,ee),Ae.length>0&&qi(Ae,H,ee),Ee.length>0&&qi(Ee,H,ee),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Ar(A,H,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[te.id]===void 0&&(_.state.transmissionRenderTarget[te.id]=new Qr(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Ko:Yi,minFilter:Kr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[te.id],Ee=te.viewport||k;Ae.setSize(Ee.z,Ee.w);const Ge=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(de),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),tt&&Ze.render(ee);const ze=C.toneMapping;C.toneMapping=Mr;const Je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),_.setupLightsView(te),fe===!0&&Me.setGlobalState(C.clippingPlanes,te),qi(A,ee,te),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae),rt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,vt=H.length;We<vt;We++){const Tt=H[We],gt=Tt.object,on=Tt.geometry,at=Tt.material,Ye=Tt.group;if(at.side===Bi&&gt.layers.test(te.layers)){const Jn=at.side;at.side=Ln,at.needsUpdate=!0,ea(gt,ee,te,on,at,Ye),at.side=Jn,at.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Ge),C.setClearColor(de,me),Je!==void 0&&(te.viewport=Je),C.toneMapping=ze}function qi(A,H,ee){const te=H.isScene===!0?H.overrideMaterial:null;for(let W=0,Ae=A.length;W<Ae;W++){const Ee=A[W],Ge=Ee.object,ze=Ee.geometry,Je=te===null?Ee.material:te,nt=Ee.group;Ge.layers.test(ee.layers)&&ea(Ge,H,ee,ze,Je,nt)}}function ea(A,H,ee,te,W,Ae){A.onBeforeRender(C,H,ee,te,W,Ae),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,H,ee,te,A,Ae),W.transparent===!0&&W.side===Bi&&W.forceSinglePass===!1?(W.side=Ln,W.needsUpdate=!0,C.renderBufferDirect(ee,H,te,W,A,Ae),W.side=Er,W.needsUpdate=!0,C.renderBufferDirect(ee,H,te,W,A,Ae),W.side=Bi):C.renderBufferDirect(ee,H,te,W,A,Ae),A.onAfterRender(C,H,ee,te,W,Ae)}function ns(A,H,ee){H.isScene!==!0&&(H=ht);const te=je.get(A),W=_.state.lights,Ae=_.state.shadowsArray,Ee=W.state.version,Ge=He.getParameters(A,W.state,Ae,H,ee),ze=He.getProgramCacheKey(Ge);let Je=te.programs;te.environment=A.isMeshStandardMaterial?H.environment:null,te.fog=H.fog,te.envMap=(A.isMeshStandardMaterial?$:E).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",ot),Je=new Map,te.programs=Je);let nt=Je.get(ze);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Ee)return hi(A,Ge),nt}else Ge.uniforms=He.getUniforms(A),A.onBeforeCompile(Ge,C),nt=He.acquireProgram(Ge,ze),Je.set(ze,nt),te.uniforms=Ge.uniforms;const We=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Me.uniform),hi(A,Ge),te.needsLights=Ql(A),te.lightsStateVersion=Ee,te.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function ta(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function hi(A,H){const ee=je.get(A);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function na(A,H,ee,te,W){H.isScene!==!0&&(H=ht),P.resetTextureUnits();const Ae=H.fog,Ee=te.isMeshStandardMaterial?H.environment:null,Ge=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Js,ze=(te.isMeshStandardMaterial?$:E).get(te.envMap||Ee),Je=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,Tt=!!ee.morphAttributes.color;let gt=Mr;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(gt=C.toneMapping);const on=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,at=on!==void 0?on.length:0,Ye=je.get(te),Jn=_.state.lights;if(fe===!0&&(ie===!0||A!==R)){const gn=A===R&&te.id===b;Me.setState(te,A,gn)}let Et=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Jn.state.version||Ye.outputColorSpace!==Ge||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==ze||te.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==nt||Ye.morphTargets!==We||Ye.morphNormals!==vt||Ye.morphColors!==Tt||Ye.toneMapping!==gt||Ye.morphTargetsCount!==at)&&(Et=!0):(Et=!0,Ye.__version=te.version);let an=Ye.currentProgram;Et===!0&&(an=ns(te,H,W));let ei=!1,qt=!1,pi=!1;const Dt=an.getUniforms(),zn=Ye.uniforms;if(qe.useProgram(an.program)&&(ei=!0,qt=!0,pi=!0),te.id!==b&&(b=te.id,qt=!0),ei||R!==A){qe.buffers.depth.getReversed()?(re.copy(A.projectionMatrix),k0(re),B0(re),Dt.setValue(G,"projectionMatrix",re)):Dt.setValue(G,"projectionMatrix",A.projectionMatrix),Dt.setValue(G,"viewMatrix",A.matrixWorldInverse);const Vn=Dt.map.cameraPosition;Vn!==void 0&&Vn.setValue(G,we.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Dt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Dt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,qt=!0,pi=!0)}if(W.isSkinnedMesh){Dt.setOptional(G,W,"bindMatrix"),Dt.setOptional(G,W,"bindMatrixInverse");const gn=W.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Dt.setValue(G,"boneTexture",gn.boneTexture,P))}W.isBatchedMesh&&(Dt.setOptional(G,W,"batchingTexture"),Dt.setValue(G,"batchingTexture",W._matricesTexture,P),Dt.setOptional(G,W,"batchingIdTexture"),Dt.setValue(G,"batchingIdTexture",W._indirectTexture,P),Dt.setOptional(G,W,"batchingColorTexture"),W._colorsTexture!==null&&Dt.setValue(G,"batchingColorTexture",W._colorsTexture,P));const wi=ee.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Qe.update(W,ee,an),(qt||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Dt.setValue(G,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(zn.envMap.value=ze,zn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&H.environment!==null&&(zn.envMapIntensity.value=H.environmentIntensity),qt&&(Dt.setValue(G,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&ia(zn,pi),Ae&&te.fog===!0&&Re.refreshFogUniforms(zn,Ae),Re.refreshMaterialUniforms(zn,te,O,ce,_.state.transmissionRenderTarget[A.id]),zl.upload(G,ta(Ye),zn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(zl.upload(G,ta(Ye),zn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Dt.setValue(G,"center",W.center),Dt.setValue(G,"modelViewMatrix",W.modelViewMatrix),Dt.setValue(G,"normalMatrix",W.normalMatrix),Dt.setValue(G,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const gn=te.uniformsGroups;for(let Vn=0,wn=gn.length;Vn<wn;Vn++){const ra=gn[Vn];V.update(ra,an),V.bind(ra,an)}}return an}function ia(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ql(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,H,ee){je.get(A.texture).__webglTexture=H,je.get(A.depthTexture).__webglTexture=ee;const te=je.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const ee=je.get(A);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,ee=0){X=A,z=H,F=ee;let te=!0,W=null,Ae=!1,Ee=!1;if(A){const ze=je.get(A);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(G.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(ze.__hasExternalTextures)P.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&je.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ee=!0);const nt=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[H])?W=nt[H][ee]:W=nt[H],Ae=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?W=je.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[ee]:W=nt,k.copy(A.viewport),ae.copy(A.scissor),J=A.scissorTest}else k.copy(U).multiplyScalar(O).floor(),ae.copy(ne).multiplyScalar(O).floor(),J=De;if(qe.bindFramebuffer(G.FRAMEBUFFER,W)&&te&&qe.drawBuffers(A,W),qe.viewport(k),qe.scissor(ae),qe.setScissorTest(J),Ae){const ze=je.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,ze.__webglTexture,ee)}else if(Ee){const ze=je.get(A.texture),Je=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,Je)}b=-1},this.readRenderTargetPixels=function(A,H,ee,te,W,Ae,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){qe.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const ze=A.texture,Je=ze.format,nt=ze.type;if(!ut.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-te&&ee>=0&&ee<=A.height-W&&G.readPixels(H,ee,te,W,st.convert(Je),st.convert(nt),Ae)}finally{const ze=X!==null?je.get(X).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,H,ee,te,W,Ae,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){const ze=A.texture,Je=ze.format,nt=ze.type;if(!ut.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-te&&ee>=0&&ee<=A.height-W){qe.bindFramebuffer(G.FRAMEBUFFER,Ge);const We=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,We),G.bufferData(G.PIXEL_PACK_BUFFER,Ae.byteLength,G.STREAM_READ),G.readPixels(H,ee,te,W,st.convert(Je),st.convert(nt),0);const vt=X!==null?je.get(X).__webglFramebuffer:null;qe.bindFramebuffer(G.FRAMEBUFFER,vt);const Tt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await O0(G,Tt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,We),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ae),G.deleteBuffer(We),G.deleteSync(Tt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,ee=0){A.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-ee),W=Math.floor(A.image.width*te),Ae=Math.floor(A.image.height*te),Ee=H!==null?H.x:0,Ge=H!==null?H.y:0;P.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ee,0,0,Ee,Ge,W,Ae),qe.unbindTexture()},this.copyTextureToTexture=function(A,H,ee=null,te=null,W=0){A.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],H=arguments[2],W=arguments[3]||0,ee=null);let Ae,Ee,Ge,ze,Je,nt,We,vt,Tt;const gt=A.isCompressedTexture?A.mipmaps[W]:A.image;ee!==null?(Ae=ee.max.x-ee.min.x,Ee=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,Je=ee.min.y,nt=ee.isBox3?ee.min.z:0):(Ae=gt.width,Ee=gt.height,Ge=gt.depth||1,ze=0,Je=0,nt=0),te!==null?(We=te.x,vt=te.y,Tt=te.z):(We=0,vt=0,Tt=0);const on=st.convert(H.format),at=st.convert(H.type);let Ye;H.isData3DTexture?(P.setTexture3D(H,0),Ye=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(P.setTexture2DArray(H,0),Ye=G.TEXTURE_2D_ARRAY):(P.setTexture2D(H,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);const Jn=G.getParameter(G.UNPACK_ROW_LENGTH),Et=G.getParameter(G.UNPACK_IMAGE_HEIGHT),an=G.getParameter(G.UNPACK_SKIP_PIXELS),ei=G.getParameter(G.UNPACK_SKIP_ROWS),qt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,gt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ze),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,nt);const pi=A.isDataArrayTexture||A.isData3DTexture,Dt=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const zn=je.get(A),wi=je.get(H),gn=je.get(zn.__renderTarget),Vn=je.get(wi.__renderTarget);qe.bindFramebuffer(G.READ_FRAMEBUFFER,gn.__webglFramebuffer),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let wn=0;wn<Ge;wn++)pi&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(A).__webglTexture,W,nt+wn),A.isDepthTexture?(Dt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(H).__webglTexture,W,Tt+wn),G.blitFramebuffer(ze,Je,Ae,Ee,We,vt,Ae,Ee,G.DEPTH_BUFFER_BIT,G.NEAREST)):Dt?G.copyTexSubImage3D(Ye,W,We,vt,Tt+wn,ze,Je,Ae,Ee):G.copyTexSubImage2D(Ye,W,We,vt,Tt+wn,ze,Je,Ae,Ee);qe.bindFramebuffer(G.READ_FRAMEBUFFER,null),qe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ye,W,We,vt,Tt,Ae,Ee,Ge,on,at,gt.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,W,We,vt,Tt,Ae,Ee,Ge,on,gt.data):G.texSubImage3D(Ye,W,We,vt,Tt,Ae,Ee,Ge,on,at,gt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,W,We,vt,Ae,Ee,on,at,gt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,W,We,vt,gt.width,gt.height,on,gt.data):G.texSubImage2D(G.TEXTURE_2D,W,We,vt,Ae,Ee,on,at,gt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Jn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Et),G.pixelStorei(G.UNPACK_SKIP_PIXELS,an),G.pixelStorei(G.UNPACK_SKIP_ROWS,ei),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt),W===0&&H.generateMipmaps&&G.generateMipmap(Ye),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,H,ee=null,te=null,W=0){return A.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,A=arguments[2],H=arguments[3],W=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,ee,te,W)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){z=0,F=0,X=null,qe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}class md{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(e),this.density=n}clone(){return new md(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class KE extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ZE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=td,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,u=this.stride;a<u;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new q;class Wl{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=ci(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ci(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ci(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ci(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ci(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),r=Pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),r=Pt(r,this.array),a=Pt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),r=Pt(r,this.array),a=Pt(a,this.array),u=Pt(u,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=u,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[a+u])}return new Bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[a+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ng extends es{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Bo=new q,zs=new q,Vs=new q,Hs=new _t,zo=new _t,Fg=new Bt,Cl=new q,Vo=new q,bl=new q,Wm=new _t,ff=new _t,Xm=new _t;class QE extends pn{constructor(e=new Ng){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Qn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ZE(n,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Wl(r,3,0,!1)),Bs.setAttribute("uv",new Wl(r,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new _t(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Fg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Vs.z);const r=this.material.rotation;let a,u;r!==0&&(u=Math.cos(r),a=Math.sin(r));const c=this.center;Pl(Cl.set(-.5,-.5,0),Vs,c,zs,a,u),Pl(Vo.set(.5,-.5,0),Vs,c,zs,a,u),Pl(bl.set(.5,.5,0),Vs,c,zs,a,u),Wm.set(0,0),ff.set(1,0),Xm.set(1,1);let f=e.ray.intersectTriangle(Cl,Vo,bl,!1,Bo);if(f===null&&(Pl(Vo.set(-.5,.5,0),Vs,c,zs,a,u),ff.set(0,1),f=e.ray.intersectTriangle(Cl,bl,Vo,!1,Bo),f===null))return;const h=e.ray.origin.distanceTo(Bo);h<e.near||h>e.far||n.push({distance:h,point:Bo.clone(),uv:Zn.getInterpolation(Bo,Cl,Vo,bl,Wm,ff,Xm,new _t),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pl(s,e,n,r,a,u){Hs.subVectors(s,n).addScalar(.5).multiply(r),a!==void 0?(zo.x=u*Hs.x-a*Hs.y,zo.y=a*Hs.x+u*Hs.y):zo.copy(Hs),s.copy(e),s.x+=zo.x,s.y+=zo.y,s.applyMatrix4(Fg)}class Og extends es{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new q,Yl=new q,Ym=new Bt,Ho=new hd,Ll=new Qo,df=new q,jm=new q;class JE extends pn{constructor(e=new Qn,n=new Og){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Xl.fromBufferAttribute(n,a-1),Yl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Xl.distanceTo(Yl);e.setAttribute("lineDistance",new Xi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(a),Ll.radius+=u,e.ray.intersectsSphere(Ll)===!1)return;Ym.copy(a).invert(),Ho.copy(e.ray).applyMatrix4(Ym);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const S=Math.max(0,c.start),w=Math.min(g.count,c.start+c.count);for(let T=S,x=w-1;T<x;T+=m){const _=g.getX(T),I=g.getX(T+1),D=Dl(this,e,Ho,h,_,I);D&&n.push(D)}if(this.isLineLoop){const T=g.getX(w-1),x=g.getX(S),_=Dl(this,e,Ho,h,T,x);_&&n.push(_)}}else{const S=Math.max(0,c.start),w=Math.min(v.count,c.start+c.count);for(let T=S,x=w-1;T<x;T+=m){const _=Dl(this,e,Ho,h,T,T+1);_&&n.push(_)}if(this.isLineLoop){const T=Dl(this,e,Ho,h,w-1,S);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function Dl(s,e,n,r,a,u){const c=s.geometry.attributes.position;if(Xl.fromBufferAttribute(c,a),Yl.fromBufferAttribute(c,u),n.distanceSqToSegment(Xl,Yl,df,jm)>r)return;df.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(df);if(!(h<e.near||h>e.far))return{distance:h,point:jm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const qm=new q,$m=new q;class ew extends JE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)qm.fromBufferAttribute(n,a),$m.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+qm.distanceTo($m);e.setAttribute("lineDistance",new Xi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kg extends es{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new Bt,id=new hd,Ul=new Qo,Il=new q;class tw extends pn{constructor(e=new Qn,n=new kg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(a),Ul.radius+=u,e.ray.intersectsSphere(Ul)===!1)return;Km.copy(a).invert(),id.copy(e.ray).applyMatrix4(Km);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,y=r.attributes.position;if(m!==null){const v=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let w=v,T=S;w<T;w++){const x=m.getX(w);Il.fromBufferAttribute(y,x),Zm(Il,x,h,a,e,n,this)}}else{const v=Math.max(0,c.start),S=Math.min(y.count,c.start+c.count);for(let w=v,T=S;w<T;w++)Il.fromBufferAttribute(y,w),Zm(Il,w,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function Zm(s,e,n,r,a,u,c){const f=id.distanceSqToPoint(s);if(f<n){const h=new q;id.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class nw extends Mn{constructor(e,n,r,a,u,c,f,h,m){super(e,n,r,a,u,c,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);function jo(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}const $n=(s,e)=>e[Math.floor(s()*e.length)],rw=["a sea that had forgotten its tides","the library at the bottom of the sky","a city built from unsent letters","the orchard where echoes ripen","a lighthouse that warned ships away from the past","the museum of almost","a river running uphill out of stubbornness","the last station before the dark","a garden grown entirely from maybes","the workshop where mornings are repaired","a bridge held up by held breath","the valley where lost songs graze","an observatory pointed inward","the harbor of postponed departures"],sw=["a cartographer of feelings","the moth who kept the moon company","a clockmaker who refused to count","the archivist of unfinished sentences","a fox made of static and good intentions","the gardener of small bravery","a lamplighter going from star to star","the keeper of borrowed time","an old wind that remembered every name","the apprentice to silence"],ow=["a key that opened only questions","a compass that pointed at whoever was missing","a jar of collected pauses","a map drawn on the inside of an eyelid","a coin that always landed on its edge","a thread leading out of every maze and into another","a bell that rang one second before it was needed","a mirror that showed you mid-becoming","a lantern fueled by unspent courage","a book whose pages turned themselves at the good parts"],aw=["And for a long while, nothing happened — which was itself a kind of happening.","The dark leaned closer, the way an audience does.","Somewhere behind the stars, something old smiled and adjusted its grip on the scenery.","It would have been easier to turn back. That is how all true doors are disguised.","The silence said more than the telling ever could, so the telling stepped aside.","What was lost did not want to be found. It wanted to be understood. There is a difference."],Bg={curious:["Not all who question are lost; some are taking inventory of the dark.","The locked door and the curious hand were made in the same workshop.","Every answer is just a question wearing its good clothes."],wistful:["What we long for longs back, in its own slow language.","Some things are kept best by letting them keep themselves.","The softest light travels furthest, having less to carry."],precise:["A careful step is a love letter to the ground.","What is measured twice is feared half as much.","Even the stars keep ledgers; we call them constellations."],warm:["The road knows you better than the destination ever will.","Drift is only another word for trust with the hands open.","You were never off the path. You are how the path moves."],steady:["What returns is never the same, and that is why it returns.","Holding on and letting go use the same muscle. Practice both.","The keeper is kept by the keeping."],playful:["The rules were written in pencil for a reason.","Every maze secretly hopes someone will climb over the walls.","Mischief is hope with its shoes off."]},lw={dawn:"In the hour when the sky was still deciding,",day:"Under a sky wide awake and pretending not to watch,",dusk:"As the light packed its things and lingered at the door,",night:"Deep in the night, where stories go when no one is reading,"},uw={seeker:"someone arrived who looked at everything twice — once to see it, once to see behind it",dreamer:"someone arrived so quietly that the dust kept dancing, unembarrassed",architect:"someone arrived counting their steps, not from fear, but from respect for distances",wanderer:"someone arrived without a map and was therefore impossible to mislead",guardian:"someone arrived and immediately checked that everything was where they had left it, though they had never been here",trickster:"someone arrived through the exit, grinning, which the doorway secretly admired"};function cw({behaviorSeed:s,worldSeed:e,date:n=new Date}){const r=n.getHours()*7+n.getMonth()*131;return(s^e)+r*2654435761>>>0}function fw(s,{archetype:e,epochKey:n,visits:r}){const a=lw[n],u=uw[e.key],c=[`${a} ${u}.`];return r<=1?c.push("The stars had not been told to expect anyone. They rearranged themselves anyway."):r===2?c.push('The stars recognized the way you moved before they recognized you. "Again," they whispered, pleased.'):c.push(`This is your ${zg(r)} crossing. The dark has started leaving a light on for you.`),c.push(`They would come to be called ${e.name} — ${e.epithet}.`),c}function dw(s,{archetype:e,index:n}){const r=$n(s,rw),a=$n(s,sw),u=$n(s,ow),c=$n(s,aw),f=$n(s,Bg[e.tone]),h=[`The ${e.name} came, in time, to ${r}.`,`Chapter by chapter the drift carried the ${e.name} to ${r}.`,`Past the edge of the charted dark waited ${r}.`],m=[`There they met ${a}, who had been expecting someone else and was delighted to be wrong.`,`It was ${a} who found them first — for in such places, it is always the resident who discovers the traveler.`,`Living there, in the way a held note lives in a hall, was ${a}.`],g=[`Before the parting, the ${e.name} was given ${u}. No reason was offered. None was needed.`,`In exchange for the visit — for visits are a currency there — they received ${u}.`,`Something changed hands without either of them moving: ${u}, which had decided whom it belonged to.`];return{index:n,title:hw(s,n),paragraphs:[$n(s,h),$n(s,m),c,$n(s,g)],moral:f}}function hw(s,e){const n=["The Hour","The Weight","The Color","The Shape","The Sound","The Cost","The Gift","The Edge"],r=["of Unmaps","of Almost","of the Second Door","of Quiet Engines","of Borrowed Light","of the Long Way","of Small Bravery","of What Returns","of the Unsent","of Open Hands"];return`${e}. ${$n(s,n)} ${$n(s,r)}`}function pw(s,{archetype:e,chaptersRead:n}){return[`And so the fable of the ${e.name} pauses — not ends, for ${n>3?"the deep travelers know":"even new travelers suspect"} that fables only pretend to end.`,"Close this sky and the story will keep walking without you for a while. It knows the way back to you now.",$n(s,Bg[e.tone])]}function zg(s){const e=["th","st","nd","rd"],n=s%100;return s+(e[(n-20)%10]||e[n]||e[0])}const Jm={calm:["the stars slow down to match you","stillness is also a direction","you are easy to orbit"],curious:["something just moved behind that light","three of these stars are doors","closer. closer is correct"],restless:["the sky can keep up. take your time anyway","speed is a question the dark always answers with more dark"],overwhelmed:["breathe. the universe will hold still for you","nothing here needs anything from you","rest. the story waits"]};function mw(s,e){return $n(s,Jm[e]||Jm.curious)}const gw=22,hf=1600;function eg(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){const r=document.createElement("canvas");r.width=r.height=128;const a=r.getContext("2d"),u=a.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);u.addColorStop(0,s),u.addColorStop(.25,"rgba(255,255,255,0.85)"),u.addColorStop(.55,"rgba(255,255,255,0.25)"),u.addColorStop(1,e),a.fillStyle=u,a.fillRect(0,0,128,128);const c=new nw(r);return c.colorSpace=kn,c}class _w{constructor(e,n){this.opts=n,this.reducedMotion=n.reducedMotion,this.renderer=new $E({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new KE,this.camera=new Kn(62,1,.1,400),this.camera.position.set(0,0,0),this.yaw=0,this.pitch=0,this.yawVel=0,this.pitchVel=0,this.dragging=!1,this.dragMoved=0,this.hovered=null,this.diving=null,this.moodFactor=1,this.driftSpeed=n.seasonDrift?.driftSpeed??1,this.disposed=!1,this.bgColor=new dt(n.epochLight?.tint??"#05060e"),this.targetBg=this.bgColor.clone(),this.scene.fog=new md(this.bgColor.clone(),.0035*(n.epochLight?.fogDensity??1)),this.renderer.setClearColor(this.bgColor),this._buildStars(n.seed,n.epochLight?.star??"#ffffff"),this._buildEmbers(n.seed),this.constellation=null,this._pointer=new _t(-10,-10),this._tmpV=new q,this._bindInput(e),this.resize(),this._clock=new iw,this._raf=requestAnimationFrame(()=>this._loop())}_buildStars(e,n){const r=jo(e^1597463007),a=new Float32Array(hf*3),u=new Float32Array(hf*3),c=new dt(n);for(let m=0;m<hf;m++){const g=120+r()*220,y=r()*Math.PI*2,v=Math.acos(2*r()-1);a[m*3]=g*Math.sin(v)*Math.cos(y),a[m*3+1]=g*Math.cos(v),a[m*3+2]=g*Math.sin(v)*Math.sin(y);const S=.35+r()*.65;u[m*3]=c.r*S,u[m*3+1]=c.g*S,u[m*3+2]=c.b*S}const f=new Qn;f.setAttribute("position",new Bn(a,3)),f.setAttribute("color",new Bn(u,3));const h=new kg({size:1.6,vertexColors:!0,sizeAttenuation:!0,map:eg(),transparent:!0,depthWrite:!1,blending:Vl});this.stars=new tw(f,h),this.scene.add(this.stars)}_buildEmbers(e){const n=jo(e);this.embers=[],this.emberTexture=eg();for(let r=0;r<gw;r++){const a=38+n()*55,u=n()*Math.PI*2,c=Math.PI/2+(n()-.5)*1.9,f=new q(a*Math.sin(c)*Math.cos(u),a*Math.cos(c),a*Math.sin(c)*Math.sin(u)),h=new Ng({map:this.emberTexture,transparent:!0,depthWrite:!1,blending:Vl,color:new dt("#9aa6ff"),opacity:.95}),m=new QE(h);m.position.copy(f);const g=2.6+n()*1.8;m.scale.setScalar(g),this.scene.add(m),this.embers.push({id:r,seed:Math.floor(n()*2**31),sprite:m,baseScale:g,phase:n()*Math.PI*2,ignited:!1,screen:new _t(10,10)})}}setPalette(e){this.targetBg=new dt(e.sky),this._targetEmber=new dt(e.ember)}setEpoch(e){this.targetBg=new dt(e.tint)}setMood(e){this.moodFactor={overwhelmed:.25,calm:.7,curious:1,restless:1.25}[e]??1}igniteConstellation(e){this.constellation&&(this.scene.remove(this.constellation),this.constellation.geometry.dispose(),this.constellation.material.dispose());const n=jo(e),r=[...this.embers].sort(()=>n()-.5).slice(0,6),a=[];for(let f=0;f<r.length-1;f++)a.push(r[f].sprite.position,r[f+1].sprite.position);const u=new Qn().setFromPoints(a),c=new Og({color:this._targetEmber??new dt("#9aa6ff"),transparent:!0,opacity:.22});this.constellation=new ew(u,c),this.scene.add(this.constellation)}_bindInput(e){this._onDown=n=>{this.diving||(this.dragging=!0,this.dragMoved=0,this._lastX=n.clientX,this._lastY=n.clientY)},this._onMove=n=>{if(this._pointer.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),!this.dragging)return;const r=n.clientX-this._lastX,a=n.clientY-this._lastY;this._lastX=n.clientX,this._lastY=n.clientY,this.dragMoved+=Math.abs(r)+Math.abs(a),this.yawVel=r*.0022,this.pitchVel=a*.0022,this.opts.onDrag?.()},this._onUp=()=>{const n=this.dragging&&this.dragMoved<8;this.dragging=!1,n&&this.hovered&&!this.diving&&this.opts.onSelect?.(this.hovered)},e.addEventListener("pointerdown",this._onDown),window.addEventListener("pointermove",this._onMove,{passive:!0}),window.addEventListener("pointerup",this._onUp),this._onKey=n=>{if(this.diving)return;const r=.045;if(n.key==="ArrowLeft")this.yawVel=r;else if(n.key==="ArrowRight")this.yawVel=-r;else if(n.key==="ArrowUp")this.pitchVel=r;else if(n.key==="ArrowDown")this.pitchVel=-r;else if(n.key==="Enter"&&this.hovered)this.opts.onSelect?.(this.hovered);else return;n.preventDefault()},window.addEventListener("keydown",this._onKey)}diveInto(e){return new Promise(n=>{this.diving={ember:e,t:0,dir:1,resolve:n},this.opts.onHover?.(null),this.hovered=null})}surface(){return new Promise(e=>{if(!this.diving)return e();this.diving={ember:this.diving.ember,t:1,dir:-1,resolve:e}})}resize(){const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}_loop(){if(this.disposed)return;const e=Math.min(this._clock.getDelta(),.05),n=this._clock.elapsedTime,r=this.reducedMotion?.15:this.moodFactor;this.yaw+=this.yawVel,this.pitch=Fc.clamp(this.pitch+this.pitchVel,-1.25,1.25),this.yawVel*=.93,this.pitchVel*=.93,this.yaw+=e*.012*this.driftSpeed*r;const a=new Jr().setFromEuler(new Si(this.pitch,this.yaw,0,"YXZ"));this.camera.quaternion.copy(a),this.stars.rotation.y+=e*.004*this.driftSpeed*r,this.bgColor.lerp(this.targetBg,.02),this.renderer.setClearColor(this.bgColor),this.scene.fog.color.copy(this.bgColor);let u=null,c=.16;for(const f of this.embers){const h=1+Math.sin(n*1.4*r+f.phase)*.16*r;let m=f.baseScale*h;this._targetEmber&&f.sprite.material.color.lerp(this._targetEmber,.03),this._tmpV.copy(f.sprite.position).project(this.camera);const g=this._tmpV.z<1;if(f.screen.set(this._tmpV.x,this._tmpV.y),g&&!this.diving){const y=Math.hypot(this._tmpV.x-this._pointer.x,this._tmpV.y-this._pointer.y),v=Math.hypot(this._tmpV.x,this._tmpV.y),S=Math.min(y,v);S<c&&(c=S,u=f)}f===this.hovered&&(m*=1.9),f.ignited&&(m*=1.25),f.sprite.scale.setScalar(m)}if(u!==this.hovered&&!this.diving&&(this.hovered=u,this.opts.onHover?.(u)),this.diving){const f=this.diving;f.t+=e*(this.reducedMotion?3:.9)*f.dir;const h=Fc.smoothstep(Fc.clamp(f.t,0,1),0,1),m=new Jr().setFromRotationMatrix(new Bt().lookAt(new q,f.ember.sprite.position,new q(0,1,0)));if(this.camera.quaternion.slerp(m,h*.2+.02),this.camera.fov=62-38*h,this.camera.updateProjectionMatrix(),f.ember.sprite.scale.setScalar(f.ember.baseScale*(1+h*26)),f.dir===1&&f.t>=1){const g=f.resolve;f.resolve=null,f.t=1,g&&g()}if(f.dir===-1&&f.t<=0){f.ember.ignited=!0,f.ember.sprite.scale.setScalar(f.ember.baseScale),this.camera.fov=62,this.camera.updateProjectionMatrix();const g=f.resolve;this.diving=null,g&&g()}}this.renderer.render(this.scene,this.camera),this._raf=requestAnimationFrame(()=>this._loop())}dispose(){this.disposed=!0,cancelAnimationFrame(this._raf),window.removeEventListener("pointermove",this._onMove),window.removeEventListener("pointerup",this._onUp),window.removeEventListener("keydown",this._onKey),this.renderer.dispose()}}const vw={seeker:{name:"Seeker",epithet:"the one who moves toward what is hidden",palette:{sky:"#070b1a",ember:"#7fd4ff",accent:"#3a7bd5",ink:"#d9ecff",haze:"#10204a"},tone:"curious"},dreamer:{name:"Dreamer",epithet:"the one who lingers where the light is soft",palette:{sky:"#0d0716",ember:"#d6a8ff",accent:"#8e5ad8",ink:"#f0e4ff",haze:"#2a1545"},tone:"wistful"},architect:{name:"Architect",epithet:"the one who measures the dark before crossing it",palette:{sky:"#060d0d",ember:"#9affd6",accent:"#2bbf9a",ink:"#dcfff2",haze:"#0d2b26"},tone:"precise"},wanderer:{name:"Wanderer",epithet:"the one who trusts the drift",palette:{sky:"#0e0a06",ember:"#ffc97f",accent:"#d58f3a",ink:"#ffeed9",haze:"#3a2410"},tone:"warm"},guardian:{name:"Guardian",epithet:"the one who returns to what matters",palette:{sky:"#0a0810",ember:"#ff9fb2",accent:"#c85a78",ink:"#ffe4ea",haze:"#33121f"},tone:"steady"},trickster:{name:"Trickster",epithet:"the one the map was not drawn for",palette:{sky:"#0b0612",ember:"#c8ff7f",accent:"#7fd53a",ink:"#f2ffd9",haze:"#1f3310"},tone:"playful"}};class xw{constructor(){this.samples=[],this.clicks=0,this.directionChanges=0,this.stillnessMs=0,this.coverage=new Set,this.totalDistance=0,this.startedAt=performance.now(),this.lastSample=null,this.lastHeading=null,this._lastTick=performance.now(),this.listeners=new Set,this._onMove=this._onMove.bind(this),this._onDown=this._onDown.bind(this),window.addEventListener("pointermove",this._onMove,{passive:!0}),window.addEventListener("pointerdown",this._onDown,{passive:!0}),this._interval=setInterval(()=>this._tick(),500)}destroy(){window.removeEventListener("pointermove",this._onMove),window.removeEventListener("pointerdown",this._onDown),clearInterval(this._interval)}_onMove(e){const n=performance.now(),r={x:e.clientX,y:e.clientY,t:n};if(this.lastSample){const c=r.x-this.lastSample.x,f=r.y-this.lastSample.y,h=Math.hypot(c,f);if(this.totalDistance+=h,h>2){const m=Math.atan2(f,c);if(this.lastHeading!=null){let g=Math.abs(m-this.lastHeading);g>Math.PI&&(g=2*Math.PI-g),g>Math.PI/2&&this.directionChanges++}this.lastHeading=m}}this.lastSample=r,this.samples.push(r),this.samples.length>240&&this.samples.splice(0,this.samples.length-240);const a=Math.floor(r.x/window.innerWidth*12),u=Math.floor(r.y/window.innerHeight*8);this.coverage.add(a+":"+u)}_onDown(){this.clicks++}_tick(){const e=performance.now(),n=e-this._lastTick;this._lastTick=e,(!this.lastSample||e-this.lastSample.t>450)&&(this.stillnessMs+=n);const r=this.read();this.listeners.forEach(a=>a(r))}onReading(e){return this.listeners.add(e),()=>this.listeners.delete(e)}recentSpeed(){if(this.samples.length<2)return 0;let e=0;for(let r=1;r<this.samples.length;r++)e+=Math.hypot(this.samples[r].x-this.samples[r-1].x,this.samples[r].y-this.samples[r-1].y);const n=(this.samples[this.samples.length-1].t-this.samples[0].t)/1e3;return n>0?e/n:0}mood(){const e=this.recentSpeed(),n=(performance.now()-this.startedAt)/1e3,r=this.directionChanges/Math.max(n,1);return e>1400||r>3.2?"overwhelmed":e>600?"restless":e<90?"calm":"curious"}read(){const e=(performance.now()-this.startedAt)/1e3,n=this.recentSpeed(),r=this.stillnessMs/Math.max(performance.now()-this.startedAt,1),a=this.coverage.size/96,u=this.clicks/Math.max(e,1),c=this.directionChanges/Math.max(e,1);return{elapsed:e,speed:n,stillRatio:r,coverageRatio:a,clickRate:u,turnRate:c,mood:this.mood()}}archetype(){const e=this.read(),n={seeker:0,dreamer:0,architect:0,wanderer:0,guardian:0,trickster:0};n.seeker+=e.coverageRatio*3+e.clickRate*1.2,n.dreamer+=e.stillRatio*3.4+(e.speed<120?1.2:0),n.architect+=(e.turnRate<.8?1.8:0)+(e.speed>120&&e.speed<450?1.4:0),n.wanderer+=(e.speed>200?1.1:0)+(e.clickRate<.08?1.3:0)+e.coverageRatio*1.2,n.guardian+=(e.coverageRatio<.18&&e.speed>80?2.2:0)+(e.stillRatio>.25?.8:0),n.trickster+=e.turnRate*.9+(e.speed>700?1.5:0)+(e.clickRate>.35?1.4:0);let r="wanderer",a=-1/0;for(const u of Object.keys(n))n[u]>a&&(a=n[u],r=u);return{key:r,...vw[r],evidence:e}}}const Vg="fable.memory.v1",pf=()=>({visits:0,firstVisit:null,lastVisit:null,lastArchetype:null,archetypeHistory:[],secrets:[],chaptersRead:0,worldSeed:Math.floor(Math.random()*2**31)});function Hg(){try{const s=localStorage.getItem(Vg);return s?{...pf(),...JSON.parse(s)}:pf()}catch{return pf()}}function Zl(s){try{localStorage.setItem(Vg,JSON.stringify(s))}catch{}}function yw(){const s=Hg();s.visits+=1;const e=Date.now();return s.firstVisit||(s.firstVisit=e),s.previousVisit=s.lastVisit,s.lastVisit=e,s.worldSeed=s.worldSeed*1664525+1013904223>>>0,Zl(s),s}function Sw(s,e){s.lastArchetype=e,s.archetypeHistory=[...s.archetypeHistory||[],e].slice(-12),Zl(s)}function Mw(s,e){return s.secrets.includes(e)?!1:(s.secrets=[...s.secrets,e],Zl(s),!0)}function Ew(s){s.chaptersRead=(s.chaptersRead||0)+1,Zl(s)}function ww(s=new Date){const e=s.getHours();return e>=5&&e<9?"dawn":e>=9&&e<17?"day":e>=17&&e<21?"dusk":"night"}function Tw(s=new Date){const e=s.getMonth();return e>=2&&e<=4?"spring":e>=5&&e<=7?"summer":e>=8&&e<=10?"autumn":"winter"}const tg={dawn:{tint:"#2a1f3d",star:"#ffd9b8",fogDensity:.9,word:"first light"},day:{tint:"#101a33",star:"#ffffff",fogDensity:.6,word:"broad daylight"},dusk:{tint:"#33152a",star:"#ffb8c9",fogDensity:1,word:"the hour of long shadows"},night:{tint:"#05060e",star:"#bcd2ff",fogDensity:1.2,word:"deep night"}},ng={spring:{driftSpeed:1.15,bloom:1.2,word:"a season of beginnings"},summer:{driftSpeed:1.3,bloom:1.35,word:"the long bright season"},autumn:{driftSpeed:.9,bloom:1,word:"the season of letting go"},winter:{driftSpeed:.7,bloom:.8,word:"the still cold season"}};function Aw(s=new Date){const e=s.getDay();return e===0||e===6}const Rw=[0,3,5,7,10];class Cw{constructor(){this.ctx=null,this.master=null,this.running=!1,this.root=110,this._droneTimer=null}enable(){if(this.running)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination),this.master.gain.linearRampToValueAtTime(.35,this.ctx.currentTime+3),this.running=!0,this._breathe(),this._droneTimer=setInterval(()=>this._breathe(),9e3))}disable(){if(!this.running)return;clearInterval(this._droneTimer);const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(0,e+1.2);const n=this.ctx;setTimeout(()=>n.close().catch(()=>{}),1600),this.running=!1,this.ctx=null}_note(e,n=0){return this.root*Math.pow(2,(Rw[e%5]+12*n)/12)}_breathe(){if(!this.running)return;const e=this.ctx.currentTime;[0,Math.floor(Math.random()*5),Math.floor(Math.random()*5)].forEach((r,a)=>{const u=this.ctx.createOscillator(),c=this.ctx.createGain();u.type=a===0?"sine":"triangle",u.frequency.value=this._note(r,a===2?1:0),u.detune.value=(Math.random()-.5)*12,c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(.06/(a+1),e+4),c.gain.linearRampToValueAtTime(0,e+11),u.connect(c).connect(this.master),u.start(e),u.stop(e+12)})}chime(e=0,n=0){if(!this.running)return;const r=this.ctx.currentTime,a=this.ctx.createOscillator(),u=this.ctx.createGain(),c=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;a.type="sine",a.frequency.value=this._note(Math.floor(Math.random()*5),2+(n>.5?1:0)),u.gain.setValueAtTime(0,r),u.gain.linearRampToValueAtTime(.12,r+.02),u.gain.exponentialRampToValueAtTime(1e-4,r+2.4),c?(c.pan.value=Math.max(-1,Math.min(1,e)),a.connect(u).connect(c).connect(this.master)):a.connect(u).connect(this.master),a.start(r),a.stop(r+2.6)}}const bw=12,mf={patience:{id:"patience",title:"The Patient One",line:"You did nothing for a long while, beautifully. The dark approves of those who can be still inside it."},margin:{id:"margin",title:"The Margin Walker",line:"You found the corner of the page. Most readers never touch the margins, where the story keeps its spare parts."},circle:{id:"circle",title:"The Orbit Drawn",line:"You drew a circle in the sky, and the sky drew one back. A constellation now remembers your hand."},incant:{id:"incant",title:"The First Word",line:"You typed the oldest opening there is. Somewhere, every story that ever began with it turned to look at you."},nightowl:{id:"nightowl",title:"Keeper of Late Hours",line:"You came in deep night, when the site speaks more honestly. It will remember your hour."},pilgrim:{id:"pilgrim",title:"The Pilgrim",line:"Five chapters deep. Few drift this far. The epilogue has unlocked itself for you."},weekender:{id:"weekender",title:"The Unhurried",line:"A weekend traveler. The cosmos sets a slower table for those who arrive with nowhere else to be."}};function Pw(){const s=xt.useRef(null),e=xt.useRef(null),n=xt.useRef(null),r=xt.useRef(null),a=xt.useRef(null),u=xt.useRef(null),[c,f]=xt.useState("listening"),[h,m]=xt.useState(null),[g,y]=xt.useState(""),[v,S]=xt.useState(null),[w,T]=xt.useState(null),[x,_]=xt.useState([]),[I,D]=xt.useState([]),[C,Q]=xt.useState(null),[z,F]=xt.useState(!1),[X,b]=xt.useState(1),[R,k]=xt.useState(0),[ae,J]=xt.useState(!1),[de,me]=xt.useState(0),le=xt.useRef(c);le.current=c;const ce=xt.useRef(x);ce.current=x;const O=xt.useRef(null),ue=xt.useRef(ww()).current,se=xt.useRef(Tw()).current,U=xt.useCallback(ie=>{const re=u.current,ye=mf[ie];if(!ye||!re)return;Mw(re,ie)&&(k(re.secrets.length),Q(ye),setTimeout(()=>Q(Ue=>Ue===ye?null:Ue),7e3),ie==="circle"&&e.current?.igniteConstellation(re.worldSeed^793630))},[]);xt.useEffect(()=>{const ie=yw();u.current=ie,b(ie.visits),k(ie.secrets.length);const re=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ye=new xw;n.current=ye,r.current=new Cw;const we=new _w(s.current,{seed:ie.worldSeed,epochLight:tg[ue],seasonDrift:ng[se],reducedMotion:re,onHover:tt=>S(tt),onSelect:tt=>O.current?.(tt)});e.current=we;const Ue=()=>we.resize();window.addEventListener("resize",Ue),ie.secrets.includes("circle")&&we.igniteConstellation(ie.worldSeed^793630);const ht=ye.onReading(tt=>{we.setMood(tt.mood),J(tt.mood==="overwhelmed")});return ue==="night"&&U("nightowl"),Aw()&&U("weekender"),()=>{window.removeEventListener("resize",Ue),ht(),ye.destroy(),we.dispose(),r.current?.disable()}},[]),xt.useEffect(()=>{if(c!=="listening")return;const ie=performance.now(),re=setInterval(()=>{const ye=(performance.now()-ie)/(bw*1e3);if(me(Math.min(ye,1)),ye>=1){clearInterval(re);const we=n.current.archetype();m(we),Sw(u.current,we.key),Lw(we.palette),e.current?.setPalette(we.palette);const Ue=Math.floor((we.evidence.speed*31+we.evidence.coverageRatio*9973+we.evidence.turnRate*131071)*1e3)>>>0,ht=jo(cw({behaviorSeed:Ue,worldSeed:u.current.worldSeed}));a.current=ht,D(fw(ht,{archetype:we,epochKey:ue,visits:u.current.visits})),f("naming")}},120);return()=>clearInterval(re)},[c]),xt.useEffect(()=>{if(c!=="drift")return;const ie=()=>{const ye=n.current?.mood()??"curious";y(mw(a.current??Math.random,ye))};ie();const re=setInterval(ie,11e3);return()=>clearInterval(re)},[c]),xt.useEffect(()=>{let ie=performance.now(),re=null,ye="",we=0,Ue=null;const ht=()=>{ie=performance.now()},tt=Ot=>{if(ie=performance.now(),Ot.clientX<28&&Ot.clientY<28?re?performance.now()-re>1500&&(U("margin"),re=null):re=performance.now():re=null,Ot.buttons>0){const rt={x:Ot.movementX,y:Ot.movementY};if(Math.hypot(rt.x,rt.y)>2){if(Ue){const ut=Ue.x*rt.y-Ue.y*rt.x,qe=Ue.x*rt.x+Ue.y*rt.y;we+=Math.atan2(ut,qe),Math.abs(we)>Math.PI*2.1&&(U("circle"),we=0)}Ue=rt}}else we=0,Ue=null},Rt=Ot=>{ie=performance.now(),Ot.key.length===1&&(ye=(ye+Ot.key.toLowerCase()).slice(-4),ye==="once"&&U("incant"))},G=setInterval(()=>{performance.now()-ie>45e3&&(U("patience"),ie=performance.now())},5e3);return window.addEventListener("pointermove",tt,{passive:!0}),window.addEventListener("pointerdown",ht,{passive:!0}),window.addEventListener("keydown",Rt),()=>{clearInterval(G),window.removeEventListener("pointermove",tt),window.removeEventListener("pointerdown",ht),window.removeEventListener("keydown",Rt)}},[U]);const ne=xt.useCallback(async ie=>{if(!e.current||!a.current||le.current!=="drift")return;f("diving");const re=u.current,ye=n.current.archetype();r.current?.chime(ie.screen?.x??0,Math.random()),await e.current.diveInto(ie);const we=ce.current.length+1,Ue=dw(jo(ie.seed^re.worldSeed),{archetype:ye,index:we});T(Ue),_(ht=>[...ht,Ue]),Ew(re),we>=5&&U("pilgrim"),f("chapter")},[U]);O.current=ne;const De=xt.useCallback(async()=>{T(null),f("surfacing"),await e.current?.surface(),f("drift")},[]),K=xt.useCallback(()=>{F(ie=>(ie?r.current?.disable():r.current?.enable(),!ie))},[]);xt.useEffect(()=>{const ie=re=>{re.key==="Escape"&&(c==="chapter"?De():c==="fable"&&f("drift")),(re.key==="f"||re.key==="F")&&c==="drift"&&x.length>0&&f("fable")};return window.addEventListener("keydown",ie),()=>window.removeEventListener("keydown",ie)},[c,x.length,De]);const fe=u.current??Hg();return it.jsxs("div",{className:`fable ${ae?"simplified":""} phase-${c}`,children:[it.jsx("canvas",{ref:s,className:"cosmos",role:"application","aria-label":"The Fable cosmos. Drag anywhere or use the arrow keys to drift through the sky. When a light brightens under your gaze, press Enter or tap it to open a chapter of your story."}),c==="listening"&&it.jsxs("section",{className:"veil listening","aria-live":"polite",children:[it.jsx("h1",{className:"title",children:"FABLE"}),it.jsx("p",{className:"murmur",children:X>1?`Your ${zg(X)} crossing. Move as you like — I remember how you move, but people change.`:"Move as you like. I am learning the way you move — nothing more, and nothing leaves this page."}),it.jsx("div",{className:"listen-track","aria-hidden":"true",children:it.jsx("div",{className:"listen-fill",style:{transform:`scaleX(${de})`}})}),it.jsxs("p",{className:"fineprint",children:[tg[ue].word," · ",ng[se].word]})]}),c==="naming"&&h&&it.jsxs("section",{className:"veil naming","aria-live":"polite",children:[it.jsx("p",{className:"murmur",children:"You move like a"}),it.jsx("h1",{className:"archetype-name",children:h.name}),it.jsx("p",{className:"epithet",children:h.epithet}),it.jsx("div",{className:"prologue",children:I.map((ie,re)=>it.jsx("p",{style:{animationDelay:`${1+re*1.4}s`},children:ie},re))}),it.jsx("button",{className:"ghost-btn",onClick:()=>f("drift"),children:"step into the sky"})]}),(c==="drift"||c==="diving"||c==="surfacing")&&it.jsxs(it.Fragment,{children:[it.jsx("p",{className:"whisper","aria-live":"polite",children:g}),!ae&&v&&c==="drift"&&it.jsx("p",{className:"ember-call",children:"an ember is listening — tap it, or press Enter"}),!ae&&!v&&c==="drift"&&x.length===0&&it.jsx("p",{className:"hint",children:"drag the sky · drift toward a light"}),ae&&it.jsx("p",{className:"hint calm-hint",children:"breathe. nothing here is urgent."})]}),c==="chapter"&&w&&it.jsxs("article",{className:"veil chapter","aria-live":"polite",children:[it.jsx("h2",{children:w.title}),w.paragraphs.map((ie,re)=>it.jsx("p",{style:{animationDelay:`${.4+re*.9}s`},children:ie},re)),it.jsx("p",{className:"moral",style:{animationDelay:`${.4+w.paragraphs.length*.9}s`},children:w.moral}),it.jsx("button",{className:"ghost-btn",onClick:De,children:"return to the drift"})]}),c==="fable"&&it.jsxs("article",{className:"veil fable-read",children:[it.jsxs("h2",{children:["The Fable of the ",h?.name]}),I.map((ie,re)=>it.jsx("p",{children:ie},"p"+re)),x.map(ie=>it.jsxs("div",{children:[it.jsx("h3",{children:ie.title}),ie.paragraphs.map((re,ye)=>it.jsx("p",{children:re},ye)),it.jsx("p",{className:"moral",children:ie.moral})]},ie.index)),fe.secrets.includes("pilgrim")&&a.current&&pw(a.current,{archetype:h,chaptersRead:x.length}).map((ie,re)=>it.jsx("p",{className:"moral",children:ie},"e"+re)),it.jsx("button",{className:"ghost-btn",onClick:()=>f("drift"),children:"fold the page"})]}),C&&it.jsxs("aside",{className:"toast",role:"status",children:[it.jsx("strong",{children:C.title}),it.jsx("span",{children:C.line})]}),c!=="listening"&&it.jsxs("nav",{className:"sigils","aria-label":"Fable controls",children:[it.jsx("button",{className:"sigil",onClick:K,"aria-pressed":z,"aria-label":z?"Silence the cosmos":"Let the cosmos sing (generative audio)",children:z?"◉":"◎"}),x.length>0&&c==="drift"&&it.jsxs("button",{className:"sigil",onClick:()=>f("fable"),"aria-label":`Read your fable so far: ${x.length} chapter${x.length>1?"s":""}`,children:["❡",it.jsx("em",{children:x.length})]}),R>0&&it.jsxs("span",{className:"sigil counter",title:`${R} of ${Object.keys(mf).length} secrets found`,"aria-label":`${R} of ${Object.keys(mf).length} secrets found`,children:["✦",it.jsx("em",{children:R})]})]})]})}function Lw(s){const e=document.documentElement.style;e.setProperty("--ink",s.ink),e.setProperty("--accent",s.accent),e.setProperty("--ember",s.ember),e.setProperty("--haze",s.haze)}Lv.createRoot(document.getElementById("root")).render(it.jsx(Tv.StrictMode,{children:it.jsx(Pw,{})}));
