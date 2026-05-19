(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))s(T);new MutationObserver(T=>{for(const v of T)if(v.type==="childList")for(const E of v.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&s(E)}).observe(document,{childList:!0,subtree:!0});function o(T){const v={};return T.integrity&&(v.integrity=T.integrity),T.referrerPolicy&&(v.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?v.credentials="include":T.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function s(T){if(T.ep)return;T.ep=!0;const v=o(T);fetch(T.href,v)}})();var vc={exports:{}},Du={};var E0;function x1(){if(E0)return Du;E0=1;var i=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function o(s,T,v){var E=null;if(v!==void 0&&(E=""+v),T.key!==void 0&&(E=""+T.key),"key"in T){v={};for(var B in T)B!=="key"&&(v[B]=T[B])}else v=T;return T=v.ref,{$$typeof:i,type:s,key:E,ref:T!==void 0?T:null,props:v}}return Du.Fragment=h,Du.jsx=o,Du.jsxs=o,Du}var M0;function A1(){return M0||(M0=1,vc.exports=x1()),vc.exports}var D=A1(),gc={exports:{}},_u={},Sc={exports:{}},bc={};var z0;function E1(){return z0||(z0=1,(function(i){function h(_,j){var w=_.length;_.push(j);l:for(;0<w;){var gl=w-1>>>1,y=_[gl];if(0<T(y,j))_[gl]=j,_[w]=y,w=gl;else break l}}function o(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var j=_[0],w=_.pop();if(w!==j){_[0]=w;l:for(var gl=0,y=_.length,N=y>>>1;gl<N;){var Y=2*(gl+1)-1,q=_[Y],Q=Y+1,nl=_[Q];if(0>T(q,w))Q<y&&0>T(nl,q)?(_[gl]=nl,_[Q]=w,gl=Q):(_[gl]=q,_[Y]=w,gl=Y);else if(Q<y&&0>T(nl,w))_[gl]=nl,_[Q]=w,gl=Q;else break l}}return j}function T(_,j){var w=_.sortIndex-j.sortIndex;return w!==0?w:_.id-j.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;i.unstable_now=function(){return v.now()}}else{var E=Date,B=E.now();i.unstable_now=function(){return E.now()-B}}var z=[],p=[],d=1,U=null,H=3,k=!1,L=!1,K=!1,sl=!1,ut=typeof setTimeout=="function"?setTimeout:null,pl=typeof clearTimeout=="function"?clearTimeout:null,dl=typeof setImmediate<"u"?setImmediate:null;function W(_){for(var j=o(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=_)s(p),j.sortIndex=j.expirationTime,h(z,j);else break;j=o(p)}}function G(_){if(K=!1,W(_),!L)if(o(z)!==null)L=!0,al||(al=!0,zl());else{var j=o(p);j!==null&&Kl(G,j.startTime-_)}}var al=!1,Tl=-1,Bl=5,vl=-1;function Rt(){return sl?!0:!(i.unstable_now()-vl<Bl)}function $l(){if(sl=!1,al){var _=i.unstable_now();vl=_;var j=!0;try{l:{L=!1,K&&(K=!1,pl(Tl),Tl=-1),k=!0;var w=H;try{t:{for(W(_),U=o(z);U!==null&&!(U.expirationTime>_&&Rt());){var gl=U.callback;if(typeof gl=="function"){U.callback=null,H=U.priorityLevel;var y=gl(U.expirationTime<=_);if(_=i.unstable_now(),typeof y=="function"){U.callback=y,W(_),j=!0;break t}U===o(z)&&s(z),W(_)}else s(z);U=o(z)}if(U!==null)j=!0;else{var N=o(p);N!==null&&Kl(G,N.startTime-_),j=!1}}break l}finally{U=null,H=w,k=!1}j=void 0}}finally{j?zl():al=!1}}}var zl;if(typeof dl=="function")zl=function(){dl($l)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,Ee=mt.port2;mt.port1.onmessage=$l,zl=function(){Ee.postMessage(null)}}else zl=function(){ut($l,0)};function Kl(_,j){Tl=ut(function(){_(i.unstable_now())},j)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(_){_.callback=null},i.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bl=0<_?Math.floor(1e3/_):5},i.unstable_getCurrentPriorityLevel=function(){return H},i.unstable_next=function(_){switch(H){case 1:case 2:case 3:var j=3;break;default:j=H}var w=H;H=j;try{return _()}finally{H=w}},i.unstable_requestPaint=function(){sl=!0},i.unstable_runWithPriority=function(_,j){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var w=H;H=_;try{return j()}finally{H=w}},i.unstable_scheduleCallback=function(_,j,w){var gl=i.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?gl+w:gl):w=gl,_){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=w+y,_={id:d++,callback:j,priorityLevel:_,startTime:w,expirationTime:y,sortIndex:-1},w>gl?(_.sortIndex=w,h(p,_),o(z)===null&&_===o(p)&&(K?(pl(Tl),Tl=-1):K=!0,Kl(G,w-gl))):(_.sortIndex=y,h(z,_),L||k||(L=!0,al||(al=!0,zl()))),_},i.unstable_shouldYield=Rt,i.unstable_wrapCallback=function(_){var j=H;return function(){var w=H;H=j;try{return _.apply(this,arguments)}finally{H=w}}}})(bc)),bc}var D0;function M1(){return D0||(D0=1,Sc.exports=E1()),Sc.exports}var pc={exports:{}},F={};var _0;function z1(){if(_0)return F;_0=1;var i=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),E=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),U=Symbol.iterator;function H(y){return y===null||typeof y!="object"?null:(y=U&&y[U]||y["@@iterator"],typeof y=="function"?y:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,K={};function sl(y,N,Y){this.props=y,this.context=N,this.refs=K,this.updater=Y||k}sl.prototype.isReactComponent={},sl.prototype.setState=function(y,N){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,N,"setState")},sl.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function ut(){}ut.prototype=sl.prototype;function pl(y,N,Y){this.props=y,this.context=N,this.refs=K,this.updater=Y||k}var dl=pl.prototype=new ut;dl.constructor=pl,L(dl,sl.prototype),dl.isPureReactComponent=!0;var W=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},al=Object.prototype.hasOwnProperty;function Tl(y,N,Y,q,Q,nl){return Y=nl.ref,{$$typeof:i,type:y,key:N,ref:Y!==void 0?Y:null,props:nl}}function Bl(y,N){return Tl(y.type,N,void 0,void 0,void 0,y.props)}function vl(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function Rt(y){var N={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return N[Y]})}var $l=/\/+/g;function zl(y,N){return typeof y=="object"&&y!==null&&y.key!=null?Rt(""+y.key):N.toString(36)}function mt(){}function Ee(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(mt,mt):(y.status="pending",y.then(function(N){y.status==="pending"&&(y.status="fulfilled",y.value=N)},function(N){y.status==="pending"&&(y.status="rejected",y.reason=N)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Kl(y,N,Y,q,Q){var nl=typeof y;(nl==="undefined"||nl==="boolean")&&(y=null);var $=!1;if(y===null)$=!0;else switch(nl){case"bigint":case"string":case"number":$=!0;break;case"object":switch(y.$$typeof){case i:case h:$=!0;break;case d:return $=y._init,Kl($(y._payload),N,Y,q,Q)}}if($)return Q=Q(y),$=q===""?"."+zl(y,0):q,W(Q)?(Y="",$!=null&&(Y=$.replace($l,"$&/")+"/"),Kl(Q,N,Y,"",function(Ft){return Ft})):Q!=null&&(vl(Q)&&(Q=Bl(Q,Y+(Q.key==null||y&&y.key===Q.key?"":(""+Q.key).replace($l,"$&/")+"/")+$)),N.push(Q)),1;$=0;var nt=q===""?".":q+":";if(W(y))for(var Al=0;Al<y.length;Al++)q=y[Al],nl=nt+zl(q,Al),$+=Kl(q,N,Y,nl,Q);else if(Al=H(y),typeof Al=="function")for(y=Al.call(y),Al=0;!(q=y.next()).done;)q=q.value,nl=nt+zl(q,Al++),$+=Kl(q,N,Y,nl,Q);else if(nl==="object"){if(typeof y.then=="function")return Kl(Ee(y),N,Y,q,Q);throw N=String(y),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return $}function _(y,N,Y){if(y==null)return y;var q=[],Q=0;return Kl(y,q,"","",function(nl){return N.call(Y,nl,Q++)}),q}function j(y){if(y._status===-1){var N=y._result;N=N(),N.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=N)}if(y._status===1)return y._result.default;throw y._result}var w=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function gl(){}return F.Children={map:_,forEach:function(y,N,Y){_(y,function(){N.apply(this,arguments)},Y)},count:function(y){var N=0;return _(y,function(){N++}),N},toArray:function(y){return _(y,function(N){return N})||[]},only:function(y){if(!vl(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},F.Component=sl,F.Fragment=o,F.Profiler=T,F.PureComponent=pl,F.StrictMode=s,F.Suspense=z,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,F.__COMPILER_RUNTIME={__proto__:null,c:function(y){return G.H.useMemoCache(y)}},F.cache=function(y){return function(){return y.apply(null,arguments)}},F.cloneElement=function(y,N,Y){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var q=L({},y.props),Q=y.key,nl=void 0;if(N!=null)for($ in N.ref!==void 0&&(nl=void 0),N.key!==void 0&&(Q=""+N.key),N)!al.call(N,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&N.ref===void 0||(q[$]=N[$]);var $=arguments.length-2;if($===1)q.children=Y;else if(1<$){for(var nt=Array($),Al=0;Al<$;Al++)nt[Al]=arguments[Al+2];q.children=nt}return Tl(y.type,Q,void 0,void 0,nl,q)},F.createContext=function(y){return y={$$typeof:E,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:v,_context:y},y},F.createElement=function(y,N,Y){var q,Q={},nl=null;if(N!=null)for(q in N.key!==void 0&&(nl=""+N.key),N)al.call(N,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(Q[q]=N[q]);var $=arguments.length-2;if($===1)Q.children=Y;else if(1<$){for(var nt=Array($),Al=0;Al<$;Al++)nt[Al]=arguments[Al+2];Q.children=nt}if(y&&y.defaultProps)for(q in $=y.defaultProps,$)Q[q]===void 0&&(Q[q]=$[q]);return Tl(y,nl,void 0,void 0,null,Q)},F.createRef=function(){return{current:null}},F.forwardRef=function(y){return{$$typeof:B,render:y}},F.isValidElement=vl,F.lazy=function(y){return{$$typeof:d,_payload:{_status:-1,_result:y},_init:j}},F.memo=function(y,N){return{$$typeof:p,type:y,compare:N===void 0?null:N}},F.startTransition=function(y){var N=G.T,Y={};G.T=Y;try{var q=y(),Q=G.S;Q!==null&&Q(Y,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(gl,w)}catch(nl){w(nl)}finally{G.T=N}},F.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},F.use=function(y){return G.H.use(y)},F.useActionState=function(y,N,Y){return G.H.useActionState(y,N,Y)},F.useCallback=function(y,N){return G.H.useCallback(y,N)},F.useContext=function(y){return G.H.useContext(y)},F.useDebugValue=function(){},F.useDeferredValue=function(y,N){return G.H.useDeferredValue(y,N)},F.useEffect=function(y,N,Y){var q=G.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(y,N)},F.useId=function(){return G.H.useId()},F.useImperativeHandle=function(y,N,Y){return G.H.useImperativeHandle(y,N,Y)},F.useInsertionEffect=function(y,N){return G.H.useInsertionEffect(y,N)},F.useLayoutEffect=function(y,N){return G.H.useLayoutEffect(y,N)},F.useMemo=function(y,N){return G.H.useMemo(y,N)},F.useOptimistic=function(y,N){return G.H.useOptimistic(y,N)},F.useReducer=function(y,N,Y){return G.H.useReducer(y,N,Y)},F.useRef=function(y){return G.H.useRef(y)},F.useState=function(y){return G.H.useState(y)},F.useSyncExternalStore=function(y,N,Y){return G.H.useSyncExternalStore(y,N,Y)},F.useTransition=function(){return G.H.useTransition()},F.version="19.1.0",F}var R0;function zc(){return R0||(R0=1,pc.exports=z1()),pc.exports}var Tc={exports:{}},kl={};var O0;function D1(){if(O0)return kl;O0=1;var i=zc();function h(z){var p="https://react.dev/errors/"+z;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var d=2;d<arguments.length;d++)p+="&args[]="+encodeURIComponent(arguments[d])}return"Minified React error #"+z+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(h(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},T=Symbol.for("react.portal");function v(z,p,d){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:U==null?null:""+U,children:z,containerInfo:p,implementation:d}}var E=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(z,p){if(z==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,kl.createPortal=function(z,p){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(h(299));return v(z,p,null,d)},kl.flushSync=function(z){var p=E.T,d=s.p;try{if(E.T=null,s.p=2,z)return z()}finally{E.T=p,s.p=d,s.d.f()}},kl.preconnect=function(z,p){typeof z=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(z,p))},kl.prefetchDNS=function(z){typeof z=="string"&&s.d.D(z)},kl.preinit=function(z,p){if(typeof z=="string"&&p&&typeof p.as=="string"){var d=p.as,U=B(d,p.crossOrigin),H=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;d==="style"?s.d.S(z,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:U,integrity:H,fetchPriority:k}):d==="script"&&s.d.X(z,{crossOrigin:U,integrity:H,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kl.preinitModule=function(z,p){if(typeof z=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var d=B(p.as,p.crossOrigin);s.d.M(z,{crossOrigin:d,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(z)},kl.preload=function(z,p){if(typeof z=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var d=p.as,U=B(d,p.crossOrigin);s.d.L(z,d,{crossOrigin:U,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kl.preloadModule=function(z,p){if(typeof z=="string")if(p){var d=B(p.as,p.crossOrigin);s.d.m(z,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:d,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(z)},kl.requestFormReset=function(z){s.d.r(z)},kl.unstable_batchedUpdates=function(z,p){return z(p)},kl.useFormState=function(z,p,d){return E.H.useFormState(z,p,d)},kl.useFormStatus=function(){return E.H.useHostTransitionStatus()},kl.version="19.1.0",kl}var U0;function _1(){if(U0)return Tc.exports;U0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(h){console.error(h)}}return i(),Tc.exports=D1(),Tc.exports}var H0;function R1(){if(H0)return _u;H0=1;var i=M1(),h=zc(),o=_1();function s(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function v(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function E(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function B(l){if(v(l)!==l)throw Error(s(188))}function z(l){var t=l.alternate;if(!t){if(t=v(l),t===null)throw Error(s(188));return t!==l?null:l}for(var e=l,a=t;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return B(u),l;if(n===a)return B(u),t;n=n.sibling}throw Error(s(188))}if(e.return!==a.return)e=u,a=n;else{for(var f=!1,c=u.child;c;){if(c===e){f=!0,e=u,a=n;break}if(c===a){f=!0,a=u,e=n;break}c=c.sibling}if(!f){for(c=n.child;c;){if(c===e){f=!0,e=n,a=u;break}if(c===a){f=!0,a=n,e=u;break}c=c.sibling}if(!f)throw Error(s(189))}}if(e.alternate!==a)throw Error(s(190))}if(e.tag!==3)throw Error(s(188));return e.stateNode.current===e?l:t}function p(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=p(l),t!==null)return t;l=l.sibling}return null}var d=Object.assign,U=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),ut=Symbol.for("react.provider"),pl=Symbol.for("react.consumer"),dl=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Bl=Symbol.for("react.lazy"),vl=Symbol.for("react.activity"),Rt=Symbol.for("react.memo_cache_sentinel"),$l=Symbol.iterator;function zl(l){return l===null||typeof l!="object"?null:(l=$l&&l[$l]||l["@@iterator"],typeof l=="function"?l:null)}var mt=Symbol.for("react.client.reference");function Ee(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===mt?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case L:return"Fragment";case sl:return"Profiler";case K:return"StrictMode";case G:return"Suspense";case al:return"SuspenseList";case vl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case k:return"Portal";case dl:return(l.displayName||"Context")+".Provider";case pl:return(l._context.displayName||"Context")+".Consumer";case W:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Tl:return t=l.displayName||null,t!==null?t:Ee(l.type)||"Memo";case Bl:t=l._payload,l=l._init;try{return Ee(l(t))}catch(_e){}}return null}var Kl=Array.isArray,_=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},gl=[],y=-1;function N(l){return{current:l}}function Y(l){0>y||(l.current=gl[y],gl[y]=null,y--)}function q(l,t){y++,gl[y]=l.current,l.current=t}var Q=N(null),nl=N(null),$=N(null),nt=N(null);function Al(l,t){switch(q($,t),q(nl,l),q(Q,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Pr(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Pr(t),l=Ir(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}Y(Q),q(Q,l)}function Ft(){Y(Q),Y(nl),Y($)}function li(l){l.memoizedState!==null&&q(nt,l);var t=Q.current,e=Ir(t,l.type);t!==e&&(q(nl,l),q(Q,e))}function Hu(l){nl.current===l&&(Y(Q),Y(nl)),nt.current===l&&(Y(nt),xu._currentValue=w)}var ti=Object.prototype.hasOwnProperty,ei=i.unstable_scheduleCallback,ai=i.unstable_cancelCallback,ld=i.unstable_shouldYield,td=i.unstable_requestPaint,Ot=i.unstable_now,ed=i.unstable_getCurrentPriorityLevel,Uc=i.unstable_ImmediatePriority,Hc=i.unstable_UserBlockingPriority,Nu=i.unstable_NormalPriority,ad=i.unstable_LowPriority,Nc=i.unstable_IdlePriority,ud=i.log,nd=i.unstable_setDisableYieldValue,Oa=null,it=null;function Pt(l){if(typeof ud=="function"&&nd(l),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Oa,l)}catch(_e){}}var ft=Math.clz32?Math.clz32:cd,id=Math.log,fd=Math.LN2;function cd(l){return l>>>=0,l===0?32:31-(id(l)/fd|0)|0}var Bu=256,qu=4194304;function Me(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function ju(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var u=0,n=l.suspendedLanes,f=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=Me(a):(f&=c,f!==0?u=Me(f):e||(e=c&~l,e!==0&&(u=Me(e))))):(c=a&~n,c!==0?u=Me(c):f!==0?u=Me(f):e||(e=a&~l,e!==0&&(u=Me(e)))),u===0?0:t!==0&&t!==u&&(t&n)===0&&(n=u&-u,e=t&-t,n>=e||n===32&&(e&4194048)!==0)?t:u}function Ua(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function sd(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var l=Bu;return Bu<<=1,(Bu&4194048)===0&&(Bu=256),l}function qc(){var l=qu;return qu<<=1,(qu&62914560)===0&&(qu=4194304),l}function ui(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Ha(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function od(l,t,e,a,u,n){var f=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var c=l.entanglements,r=l.expirationTimes,b=l.hiddenUpdates;for(e=f&~e;0<e;){var M=31-ft(e),O=1<<M;c[M]=0,r[M]=-1;var x=b[M];if(x!==null)for(b[M]=null,M=0;M<x.length;M++){var A=x[M];A!==null&&(A.lane&=-536870913)}e&=~O}a!==0&&jc(l,a,0),n!==0&&u===0&&l.tag!==0&&(l.suspendedLanes|=n&~(f&~t))}function jc(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-ft(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&4194090}function Yc(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-ft(e),u=1<<a;u&t|l[a]&t&&(l[a]|=t),e&=~u}}function ni(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function ii(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Gc(){var l=j.p;return l!==0?l:(l=window.event,l===void 0?32:S0(l.type))}function rd(l,t){var e=j.p;try{return j.p=l,t()}finally{j.p=e}}var It=Math.random().toString(36).slice(2),Jl="__reactFiber$"+It,Pl="__reactProps$"+It,Ze="__reactContainer$"+It,fi="__reactEvents$"+It,dd="__reactListeners$"+It,hd="__reactHandles$"+It,Xc="__reactResources$"+It,Na="__reactMarker$"+It;function ci(l){delete l[Jl],delete l[Pl],delete l[fi],delete l[dd],delete l[hd]}function Ve(l){var t=l[Jl];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Ze]||e[Jl]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=a0(l);l!==null;){if(e=l[Jl])return e;l=a0(l)}return t}l=e,e=l.parentNode}return null}function we(l){if(l=l[Jl]||l[Ze]){var t=l.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return l}return null}function Ba(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(s(33))}function Ke(l){var t=l[Xc];return t||(t=l[Xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Gl(l){l[Na]=!0}var Cc=new Set,Lc={};function ze(l,t){Je(l,t),Je(l+"Capture",t)}function Je(l,t){for(Lc[l]=t,l=0;l<t.length;l++)Cc.add(t[l])}var yd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qc={},Zc={};function md(l){return ti.call(Zc,l)?!0:ti.call(Qc,l)?!1:yd.test(l)?Zc[l]=!0:(Qc[l]=!0,!1)}function Yu(l,t,e){if(md(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Gu(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function jt(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}var si,Vc;function We(l){if(si===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);si=t&&t[1]||"",Vc=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+si+l+Vc}var oi=!1;function ri(l,t){if(!l||oi)return"";oi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var x=A}Reflect.construct(l,[],O)}else{try{O.call()}catch(A){x=A}l.call(O.prototype)}}else{try{throw Error()}catch(A){x=A}(O=l())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&x&&typeof A.stack=="string")return[A.stack,x.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),f=n[0],c=n[1];if(f&&c){var r=f.split(`
`),b=c.split(`
`);for(u=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;u<b.length&&!b[u].includes("DetermineComponentFrameRoot");)u++;if(a===r.length||u===b.length)for(a=r.length-1,u=b.length-1;1<=a&&0<=u&&r[a]!==b[u];)u--;for(;1<=a&&0<=u;a--,u--)if(r[a]!==b[u]){if(a!==1||u!==1)do if(a--,u--,0>u||r[a]!==b[u]){var M=`
`+r[a].replace(" at new "," at ");return l.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",l.displayName)),M}while(1<=a&&0<=u);break}}}finally{oi=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?We(e):""}function vd(l){switch(l.tag){case 26:case 27:case 5:return We(l.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return ri(l.type,!1);case 11:return ri(l.type.render,!1);case 1:return ri(l.type,!0);case 31:return We("Activity");default:return""}}function wc(l){try{var t="";do t+=vd(l),l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function vt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Kc(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gd(l){var t=Kc(l)?"checked":"value",e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t),a=""+l[t];if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var u=e.get,n=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return u.call(this)},set:function(f){a=""+f,n.call(this,f)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function Xu(l){l._valueTracker||(l._valueTracker=gd(l))}function Jc(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=Kc(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function Cu(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var Sd=/[\n"\\]/g;function gt(l){return l.replace(Sd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function di(l,t,e,a,u,n,f,c){l.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?l.type=f:l.removeAttribute("type"),t!=null?f==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+vt(t)):l.value!==""+vt(t)&&(l.value=""+vt(t)):f!=="submit"&&f!=="reset"||l.removeAttribute("value"),t!=null?hi(l,f,vt(t)):e!=null?hi(l,f,vt(e)):a!=null&&l.removeAttribute("value"),u==null&&n!=null&&(l.defaultChecked=!!n),u!=null&&(l.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+vt(c):l.removeAttribute("name")}function Wc(l,t,e,a,u,n,f,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(l.type=n),t!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||t!=null))return;e=e!=null?""+vt(e):"",t=t!=null?""+vt(t):e,c||t===l.value||(l.value=t),l.defaultValue=t}a=a!==void 0&&a!==null?a:u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(l.name=f)}function hi(l,t,e){t==="number"&&Cu(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function ke(l,t,e,a){if(l=l.options,t){t={};for(var u=0;u<e.length;u++)t["$"+e[u]]=!0;for(e=0;e<l.length;e++)u=t.hasOwnProperty("$"+l[e].value),l[e].selected!==u&&(l[e].selected=u),u&&a&&(l[e].defaultSelected=!0)}else{for(e=""+vt(e),t=null,u=0;u<l.length;u++){if(l[u].value===e){l[u].selected=!0,a&&(l[u].defaultSelected=!0);return}t!==null||l[u].disabled||(t=l[u])}t!==null&&(t.selected=!0)}}function kc(l,t,e){if(t!=null&&(t=""+vt(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+vt(e):""}function $c(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(s(92));if(Kl(a)){if(1<a.length)throw Error(s(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=vt(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a)}function $e(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var bd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fc(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||bd.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Pc(l,t,e){if(t!=null&&typeof t!="object")throw Error(s(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var u in t)a=t[u],t.hasOwnProperty(u)&&e[u]!==a&&Fc(l,u,a)}else for(var n in t)t.hasOwnProperty(n)&&Fc(l,n,t[n])}function yi(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Td=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lu(l){return Td.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}var mi=null;function vi(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fe=null,Pe=null;function Ic(l){var t=we(l);if(t&&(l=t.stateNode)){var e=l[Pl]||null;l:switch(l=t.stateNode,t.type){case"input":if(di(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var u=a[Pl]||null;if(!u)throw Error(s(90));di(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Jc(a)}break l;case"textarea":kc(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&ke(l,!!e.multiple,t,!1)}}}var gi=!1;function ls(l,t,e){if(gi)return l(t,e);gi=!0;try{var a=l(t);return a}finally{if(gi=!1,(Fe!==null||Pe!==null)&&(Dn(),Fe&&(t=Fe,l=Pe,Pe=Fe=null,Ic(t),l)))for(t=0;t<l.length;t++)Ic(l[t])}}function qa(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Pl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(s(231,t,typeof e));return e}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=!1;if(Yt)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){Si=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{Si=!1}var le=null,bi=null,Qu=null;function ts(){if(Qu)return Qu;var l,t=bi,e=t.length,a,u="value"in le?le.value:le.textContent,n=u.length;for(l=0;l<e&&t[l]===u[l];l++);var f=e-l;for(a=1;a<=f&&t[e-a]===u[n-a];a++);return Qu=u.slice(l,1<a?1-a:void 0)}function Zu(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Vu(){return!0}function es(){return!1}function Il(l){function t(e,a,u,n,f){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=f,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(e=l[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Vu:es,this.isPropagationStopped=es,this}return d(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Vu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Vu)},persist:function(){},isPersistent:Vu}),t}var De={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=Il(De),Ya=d({},De,{view:0,detail:0}),xd=Il(Ya),pi,Ti,Ga,Ku=d({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ai,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Ga&&(Ga&&l.type==="mousemove"?(pi=l.screenX-Ga.screenX,Ti=l.screenY-Ga.screenY):Ti=pi=0,Ga=l),pi)},movementY:function(l){return"movementY"in l?l.movementY:Ti}}),as=Il(Ku),Ad=d({},Ku,{dataTransfer:0}),Ed=Il(Ad),Md=d({},Ya,{relatedTarget:0}),xi=Il(Md),zd=d({},De,{animationName:0,elapsedTime:0,pseudoElement:0}),Dd=Il(zd),_d=d({},De,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Rd=Il(_d),Od=d({},De,{data:0}),us=Il(Od),Ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=Nd[l])?!!t[l]:!1}function Ai(){return Bd}var qd=d({},Ya,{key:function(l){if(l.key){var t=Ud[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Zu(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?Hd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ai,charCode:function(l){return l.type==="keypress"?Zu(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Zu(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),jd=Il(qd),Yd=d({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ns=Il(Yd),Gd=d({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ai}),Xd=Il(Gd),Cd=d({},De,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ld=Il(Cd),Qd=d({},Ku,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=Il(Qd),Vd=d({},De,{newState:0,oldState:0}),wd=Il(Vd),Kd=[9,13,27,32],Ei=Yt&&"CompositionEvent"in window,Xa=null;Yt&&"documentMode"in document&&(Xa=document.documentMode);var Jd=Yt&&"TextEvent"in window&&!Xa,is=Yt&&(!Ei||Xa&&8<Xa&&11>=Xa),fs=" ",cs=!1;function ss(l,t){switch(l){case"keyup":return Kd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function os(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Ie=!1;function Wd(l,t){switch(l){case"compositionend":return os(t);case"keypress":return t.which!==32?null:(cs=!0,fs);case"textInput":return l=t.data,l===fs&&cs?null:l;default:return null}}function kd(l,t){if(Ie)return l==="compositionend"||!Ei&&ss(l,t)?(l=ts(),Qu=bi=le=null,Ie=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return is&&t.locale!=="ko"?null:t.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!$d[l.type]:t==="textarea"}function ds(l,t,e,a){Fe?Pe?Pe.push(a):Pe=[a]:Fe=a,t=Nn(t,"onChange"),0<t.length&&(e=new wu("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Ca=null,La=null;function Fd(l){Jr(l,0)}function Ju(l){var t=Ba(l);if(Jc(t))return l}function hs(l,t){if(l==="change")return t}var ys=!1;if(Yt){var Mi;if(Yt){var zi="oninput"in document;if(!zi){var ms=document.createElement("div");ms.setAttribute("oninput","return;"),zi=typeof ms.oninput=="function"}Mi=zi}else Mi=!1;ys=Mi&&(!document.documentMode||9<document.documentMode)}function vs(){Ca&&(Ca.detachEvent("onpropertychange",gs),La=Ca=null)}function gs(l){if(l.propertyName==="value"&&Ju(La)){var t=[];ds(t,La,l,vi(l)),ls(Fd,t)}}function Pd(l,t,e){l==="focusin"?(vs(),Ca=t,La=e,Ca.attachEvent("onpropertychange",gs)):l==="focusout"&&vs()}function Id(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Ju(La)}function lh(l,t){if(l==="click")return Ju(t)}function th(l,t){if(l==="input"||l==="change")return Ju(t)}function eh(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var ct=typeof Object.is=="function"?Object.is:eh;function Qa(l,t){if(ct(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!ti.call(t,u)||!ct(l[u],t[u]))return!1}return!0}function Ss(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function bs(l,t){var e=Ss(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=Ss(e)}}function ps(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ps(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function Ts(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Cu(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Cu(l.document)}return t}function Di(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var ah=Yt&&"documentMode"in document&&11>=document.documentMode,la=null,_i=null,Za=null,Ri=!1;function xs(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Ri||la==null||la!==Cu(a)||(a=la,"selectionStart"in a&&Di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&Qa(Za,a)||(Za=a,a=Nn(_i,"onSelect"),0<a.length&&(t=new wu("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=la)))}function _e(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var ta={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},Oi={},As={};Yt&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Re(l){if(Oi[l])return Oi[l];if(!ta[l])return l;var t=ta[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in As)return Oi[l]=t[e];return l}var Es=Re("animationend"),Ms=Re("animationiteration"),zs=Re("animationstart"),uh=Re("transitionrun"),nh=Re("transitionstart"),ih=Re("transitioncancel"),Ds=Re("transitionend"),_s=new Map,Ui="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ui.push("scrollEnd");function Mt(l,t){_s.set(l,t),ze(t,[l])}var Rs=new WeakMap;function St(l,t){if(typeof l=="object"&&l!==null){var e=Rs.get(l);return e!==void 0?e:(t={value:l,source:t,stack:wc(t)},Rs.set(l,t),t)}return{value:l,source:t,stack:wc(t)}}var bt=[],ea=0,Hi=0;function Wu(){for(var l=ea,t=Hi=ea=0;t<l;){var e=bt[t];bt[t++]=null;var a=bt[t];bt[t++]=null;var u=bt[t];bt[t++]=null;var n=bt[t];if(bt[t++]=null,a!==null&&u!==null){var f=a.pending;f===null?u.next=u:(u.next=f.next,f.next=u),a.pending=u}n!==0&&Os(e,u,n)}}function ku(l,t,e,a){bt[ea++]=l,bt[ea++]=t,bt[ea++]=e,bt[ea++]=a,Hi|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Ni(l,t,e,a){return ku(l,t,e,a),$u(l)}function aa(l,t){return ku(l,null,null,t),$u(l)}function Os(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=l.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(l=n.stateNode,l===null||l._visibility&1||(u=!0)),l=n,n=n.return;return l.tag===3?(n=l.stateNode,u&&t!==null&&(u=31-ft(e),l=n.hiddenUpdates,a=l[u],a===null?l[u]=[t]:a.push(t),t.lane=e|536870912),n):null}function $u(l){if(50<yu)throw yu=0,Cf=null,Error(s(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ua={};function fh(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(l,t,e,a){return new fh(l,t,e,a)}function Bi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Gt(l,t){var e=l.alternate;return e===null?(e=st(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function Us(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Fu(l,t,e,a,u,n){var f=0;if(a=l,typeof l=="function")Bi(l)&&(f=1);else if(typeof l=="string")f=s1(l,e,Q.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case vl:return l=st(31,e,t,u),l.elementType=vl,l.lanes=n,l;case L:return Oe(e.children,u,n,t);case K:f=8,u|=24;break;case sl:return l=st(12,e,t,u|2),l.elementType=sl,l.lanes=n,l;case G:return l=st(13,e,t,u),l.elementType=G,l.lanes=n,l;case al:return l=st(19,e,t,u),l.elementType=al,l.lanes=n,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case ut:case dl:f=10;break l;case pl:f=9;break l;case W:f=11;break l;case Tl:f=14;break l;case Bl:f=16,a=null;break l}f=29,e=Error(s(130,l===null?"null":typeof l,"")),a=null}return t=st(f,e,t,u),t.elementType=l,t.type=a,t.lanes=n,t}function Oe(l,t,e,a){return l=st(7,l,a,t),l.lanes=e,l}function qi(l,t,e){return l=st(6,l,null,t),l.lanes=e,l}function ji(l,t,e){return t=st(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var na=[],ia=0,Pu=null,Iu=0,pt=[],Tt=0,Ue=null,Xt=1,Ct="";function He(l,t){na[ia++]=Iu,na[ia++]=Pu,Pu=l,Iu=t}function Hs(l,t,e){pt[Tt++]=Xt,pt[Tt++]=Ct,pt[Tt++]=Ue,Ue=l;var a=Xt;l=Ct;var u=32-ft(a)-1;a&=~(1<<u),e+=1;var n=32-ft(t)+u;if(30<n){var f=u-u%5;n=(a&(1<<f)-1).toString(32),a>>=f,u-=f,Xt=1<<32-ft(t)+u|e<<u|a,Ct=n+l}else Xt=1<<n|e<<u|a,Ct=l}function Yi(l){l.return!==null&&(He(l,1),Hs(l,1,0))}function Gi(l){for(;l===Pu;)Pu=na[--ia],na[ia]=null,Iu=na[--ia],na[ia]=null;for(;l===Ue;)Ue=pt[--Tt],pt[Tt]=null,Ct=pt[--Tt],pt[Tt]=null,Xt=pt[--Tt],pt[Tt]=null}var Fl=null,Dl=null,fl=!1,Ne=null,Ut=!1,Xi=Error(s(519));function Be(l){var t=Error(s(418,""));throw Ka(St(t,l)),Xi}function Ns(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[Jl]=l,t[Pl]=a,e){case"dialog":tl("cancel",t),tl("close",t);break;case"iframe":case"object":case"embed":tl("load",t);break;case"video":case"audio":for(e=0;e<vu.length;e++)tl(vu[e],t);break;case"source":tl("error",t);break;case"img":case"image":case"link":tl("error",t),tl("load",t);break;case"details":tl("toggle",t);break;case"input":tl("invalid",t),Wc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Xu(t);break;case"select":tl("invalid",t);break;case"textarea":tl("invalid",t),$c(t,a.value,a.defaultValue,a.children),Xu(t)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||Fr(t.textContent,e)?(a.popover!=null&&(tl("beforetoggle",t),tl("toggle",t)),a.onScroll!=null&&tl("scroll",t),a.onScrollEnd!=null&&tl("scrollend",t),a.onClick!=null&&(t.onclick=Bn),t=!0):t=!1,t||Be(l)}function Bs(l){for(Fl=l.return;Fl;)switch(Fl.tag){case 5:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:Fl=Fl.return}}function Va(l){if(l!==Fl)return!1;if(!fl)return Bs(l),fl=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||ec(l.type,l.memoizedProps)),e=!e),e&&Dl&&Be(l),Bs(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l:{for(l=l.nextSibling,t=0;l;){if(l.nodeType===8)if(e=l.data,e==="/$"){if(t===0){Dl=Dt(l.nextSibling);break l}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;l=l.nextSibling}Dl=null}}else t===27?(t=Dl,ve(l.type)?(l=ic,ic=null,Dl=l):Dl=t):Dl=Fl?Dt(l.stateNode.nextSibling):null;return!0}function wa(){Dl=Fl=null,fl=!1}function qs(){var l=Ne;return l!==null&&(et===null?et=l:et.push.apply(et,l),Ne=null),l}function Ka(l){Ne===null?Ne=[l]:Ne.push(l)}var Ci=N(null),qe=null,Lt=null;function te(l,t,e){q(Ci,t._currentValue),t._currentValue=e}function Qt(l){l._currentValue=Ci.current,Y(Ci)}function Li(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Qi(l,t,e,a){var u=l.child;for(u!==null&&(u.return=l);u!==null;){var n=u.dependencies;if(n!==null){var f=u.child;n=n.firstContext;l:for(;n!==null;){var c=n;n=u;for(var r=0;r<t.length;r++)if(c.context===t[r]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),Li(n.return,e,l),a||(f=null);break l}n=c.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(s(341));f.lanes|=e,n=f.alternate,n!==null&&(n.lanes|=e),Li(f,e,l),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===l){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function Ja(l,t,e,a){l=null;for(var u=t,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var c=u.type;ct(u.pendingProps.value,f.value)||(l!==null?l.push(c):l=[c])}}else if(u===nt.current){if(f=u.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(l!==null?l.push(xu):l=[xu])}u=u.return}l!==null&&Qi(t,l,e,a),t.flags|=262144}function ln(l){for(l=l.firstContext;l!==null;){if(!ct(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function je(l){qe=l,Lt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Wl(l){return js(qe,l)}function tn(l,t){return qe===null&&je(l),js(l,t)}function js(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Lt===null){if(l===null)throw Error(s(308));Lt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Lt=Lt.next=t;return e}var ch=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},sh=i.unstable_scheduleCallback,oh=i.unstable_NormalPriority,ql={$$typeof:dl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zi(){return{controller:new ch,data:new Map,refCount:0}}function Wa(l){l.refCount--,l.refCount===0&&sh(oh,function(){l.controller.abort()})}var ka=null,Vi=0,fa=0,ca=null;function rh(l,t){if(ka===null){var e=ka=[];Vi=0,fa=Jf(),ca={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Vi++,t.then(Ys,Ys),t}function Ys(){if(--Vi===0&&ka!==null){ca!==null&&(ca.status="fulfilled");var l=ka;ka=null,fa=0,ca=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function dh(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var u=0;u<e.length;u++)(0,e[u])(t)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var Gs=_.S;_.S=function(l,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&rh(l,t),Gs!==null&&Gs(l,t)};var Ye=N(null);function wi(){var l=Ye.current;return l!==null?l:bl.pooledCache}function en(l,t){t===null?q(Ye,Ye.current):q(Ye,t.pool)}function Xs(){var l=wi();return l===null?null:{parent:ql._currentValue,pool:l}}var $a=Error(s(460)),Cs=Error(s(474)),an=Error(s(542)),Ki={then:function(){}};function Ls(l){return l=l.status,l==="fulfilled"||l==="rejected"}function un(){}function Qs(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(un,un),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Vs(l),l;default:if(typeof t.status=="string")t.then(un,un);else{if(l=bl,l!==null&&100<l.shellSuspendCounter)throw Error(s(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=a}},function(a){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Vs(l),l}throw Fa=t,$a}}var Fa=null;function Zs(){if(Fa===null)throw Error(s(459));var l=Fa;return Fa=null,l}function Vs(l){if(l===$a||l===an)throw Error(s(483))}var ee=!1;function Ji(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ae(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function ue(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(ol&2)!==0){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,t=$u(l),Os(l,null,e),t}return ku(l,a,t,e),$u(l)}function Pa(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Yc(l,e)}}function ki(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var f={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=f:n=n.next=f,e=e.next}while(e!==null);n===null?u=n=t:n=n.next=t}else u=n=t;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var $i=!1;function Ia(){if($i){var l=ca;if(l!==null)throw l}}function lu(l,t,e,a){$i=!1;var u=l.updateQueue;ee=!1;var n=u.firstBaseUpdate,f=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var r=c,b=r.next;r.next=null,f===null?n=b:f.next=b,f=r;var M=l.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==f&&(c===null?M.firstBaseUpdate=b:c.next=b,M.lastBaseUpdate=r))}if(n!==null){var O=u.baseState;f=0,M=b=r=null,c=n;do{var x=c.lane&-536870913,A=x!==c.lane;if(A?(ul&x)===x:(a&x)===x){x!==0&&x===fa&&($i=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var J=l,Z=c;x=t;var ml=e;switch(Z.tag){case 1:if(J=Z.payload,typeof J=="function"){O=J.call(ml,O,x);break l}O=J;break l;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Z.payload,x=typeof J=="function"?J.call(ml,O,x):J,x==null)break l;O=d({},O,x);break l;case 2:ee=!0}}x=c.callback,x!==null&&(l.flags|=64,A&&(l.flags|=8192),A=u.callbacks,A===null?u.callbacks=[x]:A.push(x))}else A={lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(b=M=A,r=O):M=M.next=A,f|=x;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;A=c,c=A.next,A.next=null,u.lastBaseUpdate=A,u.shared.pending=null}}while(!0);M===null&&(r=O),u.baseState=r,u.firstBaseUpdate=b,u.lastBaseUpdate=M,n===null&&(u.shared.lanes=0),de|=f,l.lanes=f,l.memoizedState=O}}function ws(l,t){if(typeof l!="function")throw Error(s(191,l));l.call(t)}function Ks(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)ws(e[l],t)}var sa=N(null),nn=N(0);function Js(l,t){l=kt,q(nn,l),q(sa,t),kt=l|t.baseLanes}function Fi(){q(nn,kt),q(sa,sa.current)}function Pi(){kt=nn.current,Y(sa),Y(nn)}var ne=0,P=null,hl=null,Hl=null,fn=!1,oa=!1,Ge=!1,cn=0,tu=0,ra=null,hh=0;function Rl(){throw Error(s(321))}function Ii(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!ct(l[e],t[e]))return!1;return!0}function lf(l,t,e,a,u,n){return ne=n,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=l===null||l.memoizedState===null?Uo:Ho,Ge=!1,n=e(a,u),Ge=!1,oa&&(n=ks(t,e,a,u)),Ws(l),n}function Ws(l){_.H=yn;var t=hl!==null&&hl.next!==null;if(ne=0,Hl=hl=P=null,fn=!1,tu=0,ra=null,t)throw Error(s(300));l===null||Xl||(l=l.dependencies,l!==null&&ln(l)&&(Xl=!0))}function ks(l,t,e,a){P=l;var u=0;do{if(oa&&(ra=null),tu=0,oa=!1,25<=u)throw Error(s(301));if(u+=1,Hl=hl=null,l.updateQueue!=null){var n=l.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}_.H=ph,n=t(e,a)}while(oa);return n}function yh(){var l=_.H,t=l.useState()[0];return t=typeof t.then=="function"?eu(t):t,l=l.useState()[0],(hl!==null?hl.memoizedState:null)!==l&&(P.flags|=1024),t}function tf(){var l=cn!==0;return cn=0,l}function ef(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function af(l){if(fn){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}fn=!1}ne=0,Hl=hl=P=null,oa=!1,tu=cn=0,ra=null}function lt(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hl===null?P.memoizedState=Hl=l:Hl=Hl.next=l,Hl}function Nl(){if(hl===null){var l=P.alternate;l=l!==null?l.memoizedState:null}else l=hl.next;var t=Hl===null?P.memoizedState:Hl.next;if(t!==null)Hl=t,hl=l;else{if(l===null)throw P.alternate===null?Error(s(467)):Error(s(310));hl=l,l={memoizedState:hl.memoizedState,baseState:hl.baseState,baseQueue:hl.baseQueue,queue:hl.queue,next:null},Hl===null?P.memoizedState=Hl=l:Hl=Hl.next=l}return Hl}function uf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eu(l){var t=tu;return tu+=1,ra===null&&(ra=[]),l=Qs(ra,l,t),t=P,(Hl===null?t.memoizedState:Hl.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Uo:Ho),l}function sn(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return eu(l);if(l.$$typeof===dl)return Wl(l)}throw Error(s(438,String(l)))}function nf(l){var t=null,e=P.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=uf(),P.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=Rt;return t.index++,e}function Zt(l,t){return typeof t=="function"?t(l):t}function on(l){var t=Nl();return ff(t,hl,l)}function ff(l,t,e){var a=l.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var u=l.baseQueue,n=a.pending;if(n!==null){if(u!==null){var f=u.next;u.next=n.next,n.next=f}t.baseQueue=u=n,a.pending=null}if(n=l.baseState,u===null)l.memoizedState=n;else{t=u.next;var c=f=null,r=null,b=t,M=!1;do{var O=b.lane&-536870913;if(O!==b.lane?(ul&O)===O:(ne&O)===O){var x=b.revertLane;if(x===0)r!==null&&(r=r.next={lane:0,revertLane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),O===fa&&(M=!0);else if((ne&x)===x){b=b.next,x===fa&&(M=!0);continue}else O={lane:0,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},r===null?(c=r=O,f=n):r=r.next=O,P.lanes|=x,de|=x;O=b.action,Ge&&e(n,O),n=b.hasEagerState?b.eagerState:e(n,O)}else x={lane:O,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},r===null?(c=r=x,f=n):r=r.next=x,P.lanes|=O,de|=O;b=b.next}while(b!==null&&b!==t);if(r===null?f=n:r.next=c,!ct(n,l.memoizedState)&&(Xl=!0,M&&(e=ca,e!==null)))throw e;l.memoizedState=n,l.baseState=f,l.baseQueue=r,a.lastRenderedState=n}return u===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function cf(l){var t=Nl(),e=t.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=l;var a=e.dispatch,u=e.pending,n=t.memoizedState;if(u!==null){e.pending=null;var f=u=u.next;do n=l(n,f.action),f=f.next;while(f!==u);ct(n,t.memoizedState)||(Xl=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),e.lastRenderedState=n}return[n,a]}function $s(l,t,e){var a=P,u=Nl(),n=fl;if(n){if(e===void 0)throw Error(s(407));e=e()}else e=t();var f=!ct((hl||u).memoizedState,e);f&&(u.memoizedState=e,Xl=!0),u=u.queue;var c=Is.bind(null,a,u,l);if(au(2048,8,c,[l]),u.getSnapshot!==t||f||Hl!==null&&Hl.memoizedState.tag&1){if(a.flags|=2048,da(9,rn(),Ps.bind(null,a,u,e,t),null),bl===null)throw Error(s(349));n||(ne&124)!==0||Fs(a,t,e)}return e}function Fs(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=P.updateQueue,t===null?(t=uf(),P.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Ps(l,t,e,a){t.value=e,t.getSnapshot=a,lo(t)&&to(l)}function Is(l,t,e){return e(function(){lo(t)&&to(l)})}function lo(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!ct(l,e)}catch{return!0}}function to(l){var t=aa(l,2);t!==null&&yt(t,l,2)}function sf(l){var t=lt();if(typeof l=="function"){var e=l;if(l=e(),Ge){Pt(!0);try{e()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:l},t}function eo(l,t,e,a){return l.baseState=e,ff(l,hl,typeof a=="function"?a:Zt)}function mh(l,t,e,a,u){if(hn(l))throw Error(s(485));if(l=t.action,l!==null){var n={payload:u,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){n.listeners.push(f)}};_.T!==null?e(!0):n.isTransition=!1,a(n),e=t.pending,e===null?(n.next=t.pending=n,ao(t,n)):(n.next=e.next,t.pending=e.next=n)}}function ao(l,t){var e=t.action,a=t.payload,u=l.state;if(t.isTransition){var n=_.T,f={};_.T=f;try{var c=e(u,a),r=_.S;r!==null&&r(f,c),uo(l,t,c)}catch(b){of(l,t,b)}finally{_.T=n}}else try{n=e(u,a),uo(l,t,n)}catch(b){of(l,t,b)}}function uo(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){no(l,t,a)},function(a){return of(l,t,a)}):no(l,t,e)}function no(l,t,e){t.status="fulfilled",t.value=e,io(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,ao(l,e)))}function of(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,io(t),t=t.next;while(t!==a)}l.action=null}function io(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function fo(l,t){return t}function co(l,t){if(fl){var e=bl.formState;if(e!==null){l:{var a=P;if(fl){if(Dl){t:{for(var u=Dl,n=Ut;u.nodeType!==8;){if(!n){u=null;break t}if(u=Dt(u.nextSibling),u===null){u=null;break t}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){Dl=Dt(u.nextSibling),a=u.data==="F!";break l}}Be(a)}a=!1}a&&(t=e[0])}}return e=lt(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=a,e=_o.bind(null,P,a),a.dispatch=e,a=sf(!1),n=mf.bind(null,P,!1,a.queue),a=lt(),u={state:t,dispatch:null,action:l,pending:null},a.queue=u,e=mh.bind(null,P,u,n,e),u.dispatch=e,a.memoizedState=l,[t,e,!1]}function so(l){var t=Nl();return oo(t,hl,l)}function oo(l,t,e){if(t=ff(l,t,fo)[0],l=on(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=eu(t)}catch(f){throw f===$a?an:f}else a=t;t=Nl();var u=t.queue,n=u.dispatch;return e!==t.memoizedState&&(P.flags|=2048,da(9,rn(),vh.bind(null,u,e),null)),[a,n,l]}function vh(l,t){l.action=t}function ro(l){var t=Nl(),e=hl;if(e!==null)return oo(t,e,l);Nl(),t=t.memoizedState,e=Nl();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function da(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=P.updateQueue,t===null&&(t=uf(),P.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function rn(){return{destroy:void 0,resource:void 0}}function ho(){return Nl().memoizedState}function dn(l,t,e,a){var u=lt();a=a===void 0?null:a,P.flags|=l,u.memoizedState=da(1|t,rn(),e,a)}function au(l,t,e,a){var u=Nl();a=a===void 0?null:a;var n=u.memoizedState.inst;hl!==null&&a!==null&&Ii(a,hl.memoizedState.deps)?u.memoizedState=da(t,n,e,a):(P.flags|=l,u.memoizedState=da(1|t,n,e,a))}function yo(l,t){dn(8390656,8,l,t)}function mo(l,t){au(2048,8,l,t)}function vo(l,t){return au(4,2,l,t)}function go(l,t){return au(4,4,l,t)}function So(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function bo(l,t,e){e=e!=null?e.concat([l]):null,au(4,4,So.bind(null,t,l),e)}function rf(){}function po(l,t){var e=Nl();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&Ii(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function To(l,t){var e=Nl();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&Ii(t,a[1]))return a[0];if(a=l(),Ge){Pt(!0);try{l()}finally{Pt(!1)}}return e.memoizedState=[a,t],a}function df(l,t,e){return e===void 0||(ne&1073741824)!==0?l.memoizedState=t:(l.memoizedState=e,l=Er(),P.lanes|=l,de|=l,e)}function xo(l,t,e,a){return ct(e,t)?e:sa.current!==null?(l=df(l,e,a),ct(l,t)||(Xl=!0),l):(ne&42)===0?(Xl=!0,l.memoizedState=e):(l=Er(),P.lanes|=l,de|=l,t)}function Ao(l,t,e,a,u){var n=j.p;j.p=n!==0&&8>n?n:8;var f=_.T,c={};_.T=c,mf(l,!1,t,e);try{var r=u(),b=_.S;if(b!==null&&b(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var M=dh(r,a);uu(l,t,M,ht(l))}else uu(l,t,a,ht(l))}catch(O){uu(l,t,{then:function(){},status:"rejected",reason:O},ht())}finally{j.p=n,_.T=f}}function gh(){}function hf(l,t,e,a){if(l.tag!==5)throw Error(s(476));var u=Eo(l).queue;Ao(l,u,t,w,e===null?gh:function(){return Mo(l),e(a)})}function Eo(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:w},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function Mo(l){var t=Eo(l).next.queue;uu(l,t,{},ht())}function yf(){return Wl(xu)}function zo(){return Nl().memoizedState}function Do(){return Nl().memoizedState}function Sh(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=ht();l=ae(e);var a=ue(t,l,e);a!==null&&(yt(a,t,e),Pa(a,t,e)),t={cache:Zi()},l.payload=t;return}t=t.return}}function bh(l,t,e){var a=ht();e={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},hn(l)?Ro(t,e):(e=Ni(l,t,e,a),e!==null&&(yt(e,l,a),Oo(e,t,a)))}function _o(l,t,e){var a=ht();uu(l,t,e,a)}function uu(l,t,e,a){var u={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(hn(l))Ro(t,u);else{var n=l.alternate;if(l.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var f=t.lastRenderedState,c=n(f,e);if(u.hasEagerState=!0,u.eagerState=c,ct(c,f))return ku(l,t,u,0),bl===null&&Wu(),!1}catch(_e){}if(e=Ni(l,t,u,a),e!==null)return yt(e,l,a),Oo(e,t,a),!0}return!1}function mf(l,t,e,a){if(a={lane:2,revertLane:Jf(),action:a,hasEagerState:!1,eagerState:null,next:null},hn(l)){if(t)throw Error(s(479))}else t=Ni(l,e,a,2),t!==null&&yt(t,l,2)}function hn(l){var t=l.alternate;return l===P||t!==null&&t===P}function Ro(l,t){oa=fn=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function Oo(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Yc(l,e)}}var yn={readContext:Wl,use:sn,useCallback:Rl,useContext:Rl,useEffect:Rl,useImperativeHandle:Rl,useLayoutEffect:Rl,useInsertionEffect:Rl,useMemo:Rl,useReducer:Rl,useRef:Rl,useState:Rl,useDebugValue:Rl,useDeferredValue:Rl,useTransition:Rl,useSyncExternalStore:Rl,useId:Rl,useHostTransitionStatus:Rl,useFormState:Rl,useActionState:Rl,useOptimistic:Rl,useMemoCache:Rl,useCacheRefresh:Rl},Uo={readContext:Wl,use:sn,useCallback:function(l,t){return lt().memoizedState=[l,t===void 0?null:t],l},useContext:Wl,useEffect:yo,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,dn(4194308,4,So.bind(null,t,l),e)},useLayoutEffect:function(l,t){return dn(4194308,4,l,t)},useInsertionEffect:function(l,t){dn(4,2,l,t)},useMemo:function(l,t){var e=lt();t=t===void 0?null:t;var a=l();if(Ge){Pt(!0);try{l()}finally{Pt(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=lt();if(e!==void 0){var u=e(t);if(Ge){Pt(!0);try{e(t)}finally{Pt(!1)}}}else u=t;return a.memoizedState=a.baseState=u,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:u},a.queue=l,l=l.dispatch=bh.bind(null,P,l),[a.memoizedState,l]},useRef:function(l){var t=lt();return l={current:l},t.memoizedState=l},useState:function(l){l=sf(l);var t=l.queue,e=_o.bind(null,P,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:rf,useDeferredValue:function(l,t){var e=lt();return df(e,l,t)},useTransition:function(){var l=sf(!1);return l=Ao.bind(null,P,l.queue,!0,!1),lt().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=P,u=lt();if(fl){if(e===void 0)throw Error(s(407));e=e()}else{if(e=t(),bl===null)throw Error(s(349));(ul&124)!==0||Fs(a,t,e)}u.memoizedState=e;var n={value:e,getSnapshot:t};return u.queue=n,yo(Is.bind(null,a,n,l),[l]),a.flags|=2048,da(9,rn(),Ps.bind(null,a,n,e,t),null),e},useId:function(){var l=lt(),t=bl.identifierPrefix;if(fl){var e=Ct,a=Xt;e=(a&~(1<<32-ft(a)-1)).toString(32)+e,t="«"+t+"R"+e,e=cn++,0<e&&(t+="H"+e.toString(32)),t+="»"}else e=hh++,t="«"+t+"r"+e.toString(32)+"»";return l.memoizedState=t},useHostTransitionStatus:yf,useFormState:co,useActionState:co,useOptimistic:function(l){var t=lt();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=mf.bind(null,P,!0,e),e.dispatch=t,[l,t]},useMemoCache:nf,useCacheRefresh:function(){return lt().memoizedState=Sh.bind(null,P)}},Ho={readContext:Wl,use:sn,useCallback:po,useContext:Wl,useEffect:mo,useImperativeHandle:bo,useInsertionEffect:vo,useLayoutEffect:go,useMemo:To,useReducer:on,useRef:ho,useState:function(){return on(Zt)},useDebugValue:rf,useDeferredValue:function(l,t){var e=Nl();return xo(e,hl.memoizedState,l,t)},useTransition:function(){var l=on(Zt)[0],t=Nl().memoizedState;return[typeof l=="boolean"?l:eu(l),t]},useSyncExternalStore:$s,useId:zo,useHostTransitionStatus:yf,useFormState:so,useActionState:so,useOptimistic:function(l,t){var e=Nl();return eo(e,hl,l,t)},useMemoCache:nf,useCacheRefresh:Do},ph={readContext:Wl,use:sn,useCallback:po,useContext:Wl,useEffect:mo,useImperativeHandle:bo,useInsertionEffect:vo,useLayoutEffect:go,useMemo:To,useReducer:cf,useRef:ho,useState:function(){return cf(Zt)},useDebugValue:rf,useDeferredValue:function(l,t){var e=Nl();return hl===null?df(e,l,t):xo(e,hl.memoizedState,l,t)},useTransition:function(){var l=cf(Zt)[0],t=Nl().memoizedState;return[typeof l=="boolean"?l:eu(l),t]},useSyncExternalStore:$s,useId:zo,useHostTransitionStatus:yf,useFormState:ro,useActionState:ro,useOptimistic:function(l,t){var e=Nl();return hl!==null?eo(e,hl,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Do},ha=null,nu=0;function mn(l){var t=nu;return nu+=1,ha===null&&(ha=[]),Qs(ha,l,t)}function iu(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function vn(l,t){throw t.$$typeof===U?Error(s(525)):(l=Object.prototype.toString.call(t),Error(s(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function No(l){var t=l._init;return t(l._payload)}function Bo(l){function t(g,m){if(l){var S=g.deletions;S===null?(g.deletions=[m],g.flags|=16):S.push(m)}}function e(g,m){if(!l)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function a(g){for(var m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function u(g,m){return g=Gt(g,m),g.index=0,g.sibling=null,g}function n(g,m,S){return g.index=S,l?(S=g.alternate,S!==null?(S=S.index,S<m?(g.flags|=67108866,m):S):(g.flags|=67108866,m)):(g.flags|=1048576,m)}function f(g){return l&&g.alternate===null&&(g.flags|=67108866),g}function c(g,m,S,R){return m===null||m.tag!==6?(m=qi(S,g.mode,R),m.return=g,m):(m=u(m,S),m.return=g,m)}function r(g,m,S,R){var X=S.type;return X===L?M(g,m,S.props.children,R,S.key):m!==null&&(m.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Bl&&No(X)===m.type)?(m=u(m,S.props),iu(m,S),m.return=g,m):(m=Fu(S.type,S.key,S.props,null,g.mode,R),iu(m,S),m.return=g,m)}function b(g,m,S,R){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=ji(S,g.mode,R),m.return=g,m):(m=u(m,S.children||[]),m.return=g,m)}function M(g,m,S,R,X){return m===null||m.tag!==7?(m=Oe(S,g.mode,R,X),m.return=g,m):(m=u(m,S),m.return=g,m)}function O(g,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=qi(""+m,g.mode,S),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case H:return S=Fu(m.type,m.key,m.props,null,g.mode,S),iu(S,m),S.return=g,S;case k:return m=ji(m,g.mode,S),m.return=g,m;case Bl:var R=m._init;return m=R(m._payload),O(g,m,S)}if(Kl(m)||zl(m))return m=Oe(m,g.mode,S,null),m.return=g,m;if(typeof m.then=="function")return O(g,mn(m),S);if(m.$$typeof===dl)return O(g,tn(g,m),S);vn(g,m)}return null}function x(g,m,S,R){var X=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return X!==null?null:c(g,m,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case H:return S.key===X?r(g,m,S,R):null;case k:return S.key===X?b(g,m,S,R):null;case Bl:return X=S._init,S=X(S._payload),x(g,m,S,R)}if(Kl(S)||zl(S))return X!==null?null:M(g,m,S,R,null);if(typeof S.then=="function")return x(g,m,mn(S),R);if(S.$$typeof===dl)return x(g,m,tn(g,S),R);vn(g,S)}return null}function A(g,m,S,R,X){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return g=g.get(S)||null,c(m,g,""+R,X);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case H:return g=g.get(R.key===null?S:R.key)||null,r(m,g,R,X);case k:return g=g.get(R.key===null?S:R.key)||null,b(m,g,R,X);case Bl:var I=R._init;return R=I(R._payload),A(g,m,S,R,X)}if(Kl(R)||zl(R))return g=g.get(S)||null,M(m,g,R,X,null);if(typeof R.then=="function")return A(g,m,S,mn(R),X);if(R.$$typeof===dl)return A(g,m,S,tn(m,R),X);vn(m,R)}return null}function J(g,m,S,R){for(var X=null,I=null,C=m,V=m=0,Ll=null;C!==null&&V<S.length;V++){C.index>V?(Ll=C,C=null):Ll=C.sibling;var il=x(g,C,S[V],R);if(il===null){C===null&&(C=Ll);break}l&&C&&il.alternate===null&&t(g,C),m=n(il,m,V),I===null?X=il:I.sibling=il,I=il,C=Ll}if(V===S.length)return e(g,C),fl&&He(g,V),X;if(C===null){for(;V<S.length;V++)C=O(g,S[V],R),C!==null&&(m=n(C,m,V),I===null?X=C:I.sibling=C,I=C);return fl&&He(g,V),X}for(C=a(C);V<S.length;V++)Ll=A(C,g,V,S[V],R),Ll!==null&&(l&&Ll.alternate!==null&&C.delete(Ll.key===null?V:Ll.key),m=n(Ll,m,V),I===null?X=Ll:I.sibling=Ll,I=Ll);return l&&C.forEach(function(Te){return t(g,Te)}),fl&&He(g,V),X}function Z(g,m,S,R){if(S==null)throw Error(s(151));for(var X=null,I=null,C=m,V=m=0,Ll=null,il=S.next();C!==null&&!il.done;V++,il=S.next()){C.index>V?(Ll=C,C=null):Ll=C.sibling;var Te=x(g,C,il.value,R);if(Te===null){C===null&&(C=Ll);break}l&&C&&Te.alternate===null&&t(g,C),m=n(Te,m,V),I===null?X=Te:I.sibling=Te,I=Te,C=Ll}if(il.done)return e(g,C),fl&&He(g,V),X;if(C===null){for(;!il.done;V++,il=S.next())il=O(g,il.value,R),il!==null&&(m=n(il,m,V),I===null?X=il:I.sibling=il,I=il);return fl&&He(g,V),X}for(C=a(C);!il.done;V++,il=S.next())il=A(C,g,V,il.value,R),il!==null&&(l&&il.alternate!==null&&C.delete(il.key===null?V:il.key),m=n(il,m,V),I===null?X=il:I.sibling=il,I=il);return l&&C.forEach(function(T1){return t(g,T1)}),fl&&He(g,V),X}function ml(g,m,S,R){if(typeof S=="object"&&S!==null&&S.type===L&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case H:l:{for(var X=S.key;m!==null;){if(m.key===X){if(X=S.type,X===L){if(m.tag===7){e(g,m.sibling),R=u(m,S.props.children),R.return=g,g=R;break l}}else if(m.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Bl&&No(X)===m.type){e(g,m.sibling),R=u(m,S.props),iu(R,S),R.return=g,g=R;break l}e(g,m);break}else t(g,m);m=m.sibling}S.type===L?(R=Oe(S.props.children,g.mode,R,S.key),R.return=g,g=R):(R=Fu(S.type,S.key,S.props,null,g.mode,R),iu(R,S),R.return=g,g=R)}return f(g);case k:l:{for(X=S.key;m!==null;){if(m.key===X)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){e(g,m.sibling),R=u(m,S.children||[]),R.return=g,g=R;break l}else{e(g,m);break}else t(g,m);m=m.sibling}R=ji(S,g.mode,R),R.return=g,g=R}return f(g);case Bl:return X=S._init,S=X(S._payload),ml(g,m,S,R)}if(Kl(S))return J(g,m,S,R);if(zl(S)){if(X=zl(S),typeof X!="function")throw Error(s(150));return S=X.call(S),Z(g,m,S,R)}if(typeof S.then=="function")return ml(g,m,mn(S),R);if(S.$$typeof===dl)return ml(g,m,tn(g,S),R);vn(g,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(e(g,m.sibling),R=u(m,S),R.return=g,g=R):(e(g,m),R=qi(S,g.mode,R),R.return=g,g=R),f(g)):e(g,m)}return function(g,m,S,R){try{nu=0;var X=ml(g,m,S,R);return ha=null,X}catch(C){if(C===$a||C===an)throw C;var I=st(29,C,null,g.mode);return I.lanes=R,I.return=g,I}}}var ya=Bo(!0),qo=Bo(!1),xt=N(null),Ht=null;function ie(l){var t=l.alternate;q(jl,jl.current&1),q(xt,l),Ht===null&&(t===null||sa.current!==null||t.memoizedState!==null)&&(Ht=l)}function jo(l){if(l.tag===22){if(q(jl,jl.current),q(xt,l),Ht===null){var t=l.alternate;t!==null&&t.memoizedState!==null&&(Ht=l)}}else fe()}function fe(){q(jl,jl.current),q(xt,xt.current)}function Vt(l){Y(xt),Ht===l&&(Ht=null),Y(jl)}var jl=N(0);function gn(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||nc(e)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vf(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:d({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var gf={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=ht(),u=ae(a);u.payload=t,e!=null&&(u.callback=e),t=ue(l,u,a),t!==null&&(yt(t,l,a),Pa(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=ht(),u=ae(a);u.tag=1,u.payload=t,e!=null&&(u.callback=e),t=ue(l,u,a),t!==null&&(yt(t,l,a),Pa(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=ht(),a=ae(e);a.tag=2,t!=null&&(a.callback=t),t=ue(l,a,e),t!==null&&(yt(t,l,e),Pa(t,l,e))}};function Yo(l,t,e,a,u,n,f){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,n,f):t.prototype&&t.prototype.isPureReactComponent?!Qa(e,a)||!Qa(u,n):!0}function Go(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&gf.enqueueReplaceState(t,t.state,null)}function Xe(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=d({},e));for(var u in l)e[u]===void 0&&(e[u]=l[u])}return e}var Sn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)};function Xo(l){Sn(l)}function Co(l){console.error(l)}function Lo(l){Sn(l)}function bn(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Qo(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(l,t,e){return e=ae(e),e.tag=3,e.payload={element:null},e.callback=function(){bn(l,t)},e}function Zo(l){return l=ae(l),l.tag=3,l}function Vo(l,t,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;l.payload=function(){return u(n)},l.callback=function(){Qo(t,e,a)}}var f=e.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(l.callback=function(){Qo(t,e,a),typeof u!="function"&&(he===null?he=new Set([this]):he.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Th(l,t,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&Ja(t,e,u,!0),e=xt.current,e!==null){switch(e.tag){case 13:return Ht===null?Qf():e.alternate===null&&_l===0&&(_l=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===Ki?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Vf(l,a,u)),!1;case 22:return e.flags|=65536,a===Ki?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Vf(l,a,u)),!1}throw Error(s(435,e.tag))}return Vf(l,a,u),Qf(),!1}if(fl)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,a!==Xi&&(l=Error(s(422),{cause:a}),Ka(St(l,e)))):(a!==Xi&&(t=Error(s(423),{cause:a}),Ka(St(t,e))),l=l.current.alternate,l.flags|=65536,u&=-u,l.lanes|=u,a=St(a,e),u=Sf(l.stateNode,a,u),ki(l,u),_l!==4&&(_l=2)),!1;var n=Error(s(520),{cause:a});if(n=St(n,e),hu===null?hu=[n]:hu.push(n),_l!==4&&(_l=2),t===null)return!0;a=St(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=u&-u,e.lanes|=l,l=Sf(e.stateNode,a,l),ki(e,l),!1;case 1:if(t=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(he===null||!he.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=Zo(u),Vo(u,l,e,a),ki(e,u),!1}e=e.return}while(e!==null);return!1}var wo=Error(s(461)),Xl=!1;function Zl(l,t,e,a){t.child=l===null?qo(t,null,e,a):ya(t,l.child,e,a)}function Ko(l,t,e,a,u){e=e.render;var n=t.ref;if("ref"in a){var f={};for(var c in a)c!=="ref"&&(f[c]=a[c])}else f=a;return je(t),a=lf(l,t,e,f,n,u),c=tf(),l!==null&&!Xl?(ef(l,t,u),wt(l,t,u)):(fl&&c&&Yi(t),t.flags|=1,Zl(l,t,a,u),t.child)}function Jo(l,t,e,a,u){if(l===null){var n=e.type;return typeof n=="function"&&!Bi(n)&&n.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=n,Wo(l,t,n,a,u)):(l=Fu(e.type,null,a,t,t.mode,u),l.ref=t.ref,l.return=t,t.child=l)}if(n=l.child,!zf(l,u)){var f=n.memoizedProps;if(e=e.compare,e=e!==null?e:Qa,e(f,a)&&l.ref===t.ref)return wt(l,t,u)}return t.flags|=1,l=Gt(n,a),l.ref=t.ref,l.return=t,t.child=l}function Wo(l,t,e,a,u){if(l!==null){var n=l.memoizedProps;if(Qa(n,a)&&l.ref===t.ref)if(Xl=!1,t.pendingProps=a=n,zf(l,u))(l.flags&131072)!==0&&(Xl=!0);else return t.lanes=l.lanes,wt(l,t,u)}return bf(l,t,e,a,u)}function ko(l,t,e){var a=t.pendingProps,u=a.children,n=l!==null?l.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=n!==null?n.baseLanes|e:e,l!==null){for(u=t.child=l.child,n=0;u!==null;)n=n|u.lanes|u.childLanes,u=u.sibling;t.childLanes=n&~a}else t.childLanes=0,t.child=null;return $o(l,t,a,e)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&en(t,n!==null?n.cachePool:null),n!==null?Js(t,n):Fi(),jo(t);else return t.lanes=t.childLanes=536870912,$o(l,t,n!==null?n.baseLanes|e:e,e)}else n!==null?(en(t,n.cachePool),Js(t,n),fe(),t.memoizedState=null):(l!==null&&en(t,null),Fi(),fe());return Zl(l,t,u,e),t.child}function $o(l,t,e,a){var u=wi();return u=u===null?null:{parent:ql._currentValue,pool:u},t.memoizedState={baseLanes:e,cachePool:u},l!==null&&en(t,null),Fi(),jo(t),l!==null&&Ja(l,t,a,!0),null}function pn(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(s(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function bf(l,t,e,a,u){return je(t),e=lf(l,t,e,a,void 0,u),a=tf(),l!==null&&!Xl?(ef(l,t,u),wt(l,t,u)):(fl&&a&&Yi(t),t.flags|=1,Zl(l,t,e,u),t.child)}function Fo(l,t,e,a,u,n){return je(t),t.updateQueue=null,e=ks(t,a,e,u),Ws(l),a=tf(),l!==null&&!Xl?(ef(l,t,n),wt(l,t,n)):(fl&&a&&Yi(t),t.flags|=1,Zl(l,t,e,n),t.child)}function Po(l,t,e,a,u){if(je(t),t.stateNode===null){var n=ua,f=e.contextType;typeof f=="object"&&f!==null&&(n=Wl(f)),n=new e(a,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=gf,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=a,n.state=t.memoizedState,n.refs={},Ji(t),f=e.contextType,n.context=typeof f=="object"&&f!==null?Wl(f):ua,n.state=t.memoizedState,f=e.getDerivedStateFromProps,typeof f=="function"&&(vf(t,e,f,a),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(f=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),f!==n.state&&gf.enqueueReplaceState(n,n.state,null),lu(t,a,n,u),Ia(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){n=t.stateNode;var c=t.memoizedProps,r=Xe(e,c);n.props=r;var b=n.context,M=e.contextType;f=ua,typeof M=="object"&&M!==null&&(f=Wl(M));var O=e.getDerivedStateFromProps;M=typeof O=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,M||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||b!==f)&&Go(t,n,a,f),ee=!1;var x=t.memoizedState;n.state=x,lu(t,a,n,u),Ia(),b=t.memoizedState,c||x!==b||ee?(typeof O=="function"&&(vf(t,e,O,a),b=t.memoizedState),(r=ee||Yo(t,e,r,a,x,b,f))?(M||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),n.props=a,n.state=b,n.context=f,a=r):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{n=t.stateNode,Wi(l,t),f=t.memoizedProps,M=Xe(e,f),n.props=M,O=t.pendingProps,x=n.context,b=e.contextType,r=ua,typeof b=="object"&&b!==null&&(r=Wl(b)),c=e.getDerivedStateFromProps,(b=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(f!==O||x!==r)&&Go(t,n,a,r),ee=!1,x=t.memoizedState,n.state=x,lu(t,a,n,u),Ia();var A=t.memoizedState;f!==O||x!==A||ee||l!==null&&l.dependencies!==null&&ln(l.dependencies)?(typeof c=="function"&&(vf(t,e,c,a),A=t.memoizedState),(M=ee||Yo(t,e,M,a,x,A,r)||l!==null&&l.dependencies!==null&&ln(l.dependencies))?(b||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,A,r),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,A,r)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||f===l.memoizedProps&&x===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||f===l.memoizedProps&&x===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),n.props=a,n.state=A,n.context=r,a=M):(typeof n.componentDidUpdate!="function"||f===l.memoizedProps&&x===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||f===l.memoizedProps&&x===l.memoizedState||(t.flags|=1024),a=!1)}return n=a,pn(l,t),a=(t.flags&128)!==0,n||a?(n=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,l!==null&&a?(t.child=ya(t,l.child,null,u),t.child=ya(t,null,e,u)):Zl(l,t,e,u),t.memoizedState=n.state,l=t.child):l=wt(l,t,u),l}function Io(l,t,e,a){return wa(),t.flags|=256,Zl(l,t,e,a),t.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(l){return{baseLanes:l,cachePool:Xs()}}function xf(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=At),l}function lr(l,t,e){var a=t.pendingProps,u=!1,n=(t.flags&128)!==0,f;if((f=n)||(f=l!==null&&l.memoizedState===null?!1:(jl.current&2)!==0),f&&(u=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,l===null){if(fl){if(u?ie(t):fe(),fl){var c=Dl,r;if(r=c){l:{for(r=c,c=Ut;r.nodeType!==8;){if(!c){c=null;break l}if(r=Dt(r.nextSibling),r===null){c=null;break l}}c=r}c!==null?(t.memoizedState={dehydrated:c,treeContext:Ue!==null?{id:Xt,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},r=st(18,null,null,0),r.stateNode=c,r.return=t,t.child=r,Fl=t,Dl=null,r=!0):r=!1}r||Be(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return nc(c)?t.lanes=32:t.lanes=536870912,null;Vt(t)}return c=a.children,a=a.fallback,u?(fe(),u=t.mode,c=Tn({mode:"hidden",children:c},u),a=Oe(a,u,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,u=t.child,u.memoizedState=Tf(e),u.childLanes=xf(l,f,e),t.memoizedState=pf,a):(ie(t),Af(t,c))}if(r=l.memoizedState,r!==null&&(c=r.dehydrated,c!==null)){if(n)t.flags&256?(ie(t),t.flags&=-257,t=Ef(l,t,e)):t.memoizedState!==null?(fe(),t.child=l.child,t.flags|=128,t=null):(fe(),u=a.fallback,c=t.mode,a=Tn({mode:"visible",children:a.children},c),u=Oe(u,c,e,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,ya(t,l.child,null,e),a=t.child,a.memoizedState=Tf(e),a.childLanes=xf(l,f,e),t.memoizedState=pf,t=u);else if(ie(t),nc(c)){if(f=c.nextSibling&&c.nextSibling.dataset,f)var b=f.dgst;f=b,a=Error(s(419)),a.stack="",a.digest=f,Ka({value:a,source:null,stack:null}),t=Ef(l,t,e)}else if(Xl||Ja(l,t,e,!1),f=(e&l.childLanes)!==0,Xl||f){if(f=bl,f!==null&&(a=e&-e,a=(a&42)!==0?1:ni(a),a=(a&(f.suspendedLanes|e))!==0?0:a,a!==0&&a!==r.retryLane))throw r.retryLane=a,aa(l,a),yt(f,l,a),wo;c.data==="$?"||Qf(),t=Ef(l,t,e)}else c.data==="$?"?(t.flags|=192,t.child=l.child,t=null):(l=r.treeContext,Dl=Dt(c.nextSibling),Fl=t,fl=!0,Ne=null,Ut=!1,l!==null&&(pt[Tt++]=Xt,pt[Tt++]=Ct,pt[Tt++]=Ue,Xt=l.id,Ct=l.overflow,Ue=t),t=Af(t,a.children),t.flags|=4096);return t}return u?(fe(),u=a.fallback,c=t.mode,r=l.child,b=r.sibling,a=Gt(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,b!==null?u=Gt(b,u):(u=Oe(u,c,e,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,a=u,u=t.child,c=l.child.memoizedState,c===null?c=Tf(e):(r=c.cachePool,r!==null?(b=ql._currentValue,r=r.parent!==b?{parent:b,pool:b}:r):r=Xs(),c={baseLanes:c.baseLanes|e,cachePool:r}),u.memoizedState=c,u.childLanes=xf(l,f,e),t.memoizedState=pf,a):(ie(t),e=l.child,l=e.sibling,e=Gt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(f=t.deletions,f===null?(t.deletions=[l],t.flags|=16):f.push(l)),t.child=e,t.memoizedState=null,e)}function Af(l,t){return t=Tn({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function Tn(l,t){return l=st(22,l,null,t),l.lanes=0,l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},l}function Ef(l,t,e){return ya(t,l.child,null,e),l=Af(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function tr(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),Li(l.return,t,e)}function Mf(l,t,e,a,u){var n=l.memoizedState;n===null?l.memoizedState={isBackwards:t,rendemediumSquare:null,renderingStartTime:0,last:a,tail:e,tailMode:u}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=a,n.tail=e,n.tailMode=u)}function er(l,t,e){var a=t.pendingProps,u=a.revealOrder,n=a.tail;if(Zl(l,t,a.children,e),a=jl.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&tr(l,e,t);else if(l.tag===19)tr(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}a&=1}switch(q(jl,a),u){case"forwards":for(e=t.child,u=null;e!==null;)l=e.alternate,l!==null&&gn(l)===null&&(u=e),e=e.sibling;e=u,e===null?(u=t.child,t.child=null):(u=e.sibling,e.sibling=null),Mf(t,!1,u,e,n);break;case"backwards":for(e=null,u=t.child,t.child=null;u!==null;){if(l=u.alternate,l!==null&&gn(l)===null){t.child=u;break}l=u.sibling,u.sibling=e,e=u,u=l}Mf(t,!0,e,null,n);break;case"together":Mf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),de|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(Ja(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(s(153));if(t.child!==null){for(l=t.child,e=Gt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Gt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function zf(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&ln(l)))}function xh(l,t,e){switch(t.tag){case 3:Al(t,t.stateNode.containerInfo),te(t,ql,l.memoizedState.cache),wa();break;case 27:case 5:li(t);break;case 4:Al(t,t.stateNode.containerInfo);break;case 10:te(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ie(t),t.flags|=128,null):(e&t.child.childLanes)!==0?lr(l,t,e):(ie(t),l=wt(l,t,e),l!==null?l.sibling:null);ie(t);break;case 19:var u=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(Ja(l,t,e,!1),a=(e&t.childLanes)!==0),u){if(a)return er(l,t,e);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),q(jl,jl.current),a)break;return null;case 22:case 23:return t.lanes=0,ko(l,t,e);case 24:te(t,ql,l.memoizedState.cache)}return wt(l,t,e)}function ar(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)Xl=!0;else{if(!zf(l,e)&&(t.flags&128)===0)return Xl=!1,xh(l,t,e);Xl=(l.flags&131072)!==0}else Xl=!1,fl&&(t.flags&1048576)!==0&&Hs(t,Iu,t.index);switch(t.lanes=0,t.tag){case 16:l:{l=t.pendingProps;var a=t.elementType,u=a._init;if(a=u(a._payload),t.type=a,typeof a=="function")Bi(a)?(l=Xe(a,l),t.tag=1,t=Po(null,t,a,l,e)):(t.tag=0,t=bf(null,t,a,l,e));else{if(a!=null){if(u=a.$$typeof,u===W){t.tag=11,t=Ko(null,t,a,l,e);break l}else if(u===Tl){t.tag=14,t=Jo(null,t,a,l,e);break l}}throw t=Ee(a)||a,Error(s(306,t,""))}}return t;case 0:return bf(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,u=Xe(a,t.pendingProps),Po(l,t,a,u,e);case 3:l:{if(Al(t,t.stateNode.containerInfo),l===null)throw Error(s(387));a=t.pendingProps;var n=t.memoizedState;u=n.element,Wi(l,t),lu(t,a,null,e);var f=t.memoizedState;if(a=f.cache,te(t,ql,a),a!==n.cache&&Qi(t,[ql],e,!0),Ia(),a=f.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Io(l,t,a,e);break l}else if(a!==u){u=St(Error(s(424)),t),Ka(u),t=Io(l,t,a,e);break l}else for(l=t.stateNode.containerInfo,l.nodeType===9?l=l.body:l=l.nodeName==="HTML"?l.ownerDocument.body:l,Dl=Dt(l.firstChild),Fl=t,fl=!0,Ne=null,Ut=!0,e=qo(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(wa(),a===u){t=wt(l,t,e);break l}Zl(l,t,a,e)}t=t.child}return t;case 26:return pn(l,t),l===null?(e=f0(t.type,null,t.pendingProps,null))?t.memoizedState=e:fl||(e=t.type,l=t.pendingProps,a=qn($.current).createElement(e),a[Jl]=t,a[Pl]=l,wl(a,e,l),Gl(a),t.stateNode=a):t.memoizedState=f0(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return li(t),l===null&&fl&&(a=t.stateNode=u0(t.type,t.pendingProps,$.current),Fl=t,Ut=!0,u=Dl,ve(t.type)?(ic=u,Dl=Dt(a.firstChild)):Dl=u),Zl(l,t,t.pendingProps.children,e),pn(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&fl&&((u=a=Dl)&&(a=$h(a,t.type,t.pendingProps,Ut),a!==null?(t.stateNode=a,Fl=t,Dl=Dt(a.firstChild),Ut=!1,u=!0):u=!1),u||Be(t)),li(t),u=t.type,n=t.pendingProps,f=l!==null?l.memoizedProps:null,a=n.children,ec(u,n)?a=null:f!==null&&ec(u,f)&&(t.flags|=32),t.memoizedState!==null&&(u=lf(l,t,yh,null,null,e),xu._currentValue=u),pn(l,t),Zl(l,t,a,e),t.child;case 6:return l===null&&fl&&((l=e=Dl)&&(e=Fh(e,t.pendingProps,Ut),e!==null?(t.stateNode=e,Fl=t,Dl=null,l=!0):l=!1),l||Be(t)),null;case 13:return lr(l,t,e);case 4:return Al(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=ya(t,null,a,e):Zl(l,t,a,e),t.child;case 11:return Ko(l,t,t.type,t.pendingProps,e);case 7:return Zl(l,t,t.pendingProps,e),t.child;case 8:return Zl(l,t,t.pendingProps.children,e),t.child;case 12:return Zl(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,te(t,t.type,a.value),Zl(l,t,a.children,e),t.child;case 9:return u=t.type._context,a=t.pendingProps.children,je(t),u=Wl(u),a=a(u),t.flags|=1,Zl(l,t,a,e),t.child;case 14:return Jo(l,t,t.type,t.pendingProps,e);case 15:return Wo(l,t,t.type,t.pendingProps,e);case 19:return er(l,t,e);case 31:return a=t.pendingProps,e=t.mode,a={mode:a.mode,children:a.children},l===null?(e=Tn(a,e),e.ref=t.ref,t.child=e,e.return=t,t=e):(e=Gt(l.child,a),e.ref=t.ref,t.child=e,e.return=t,t=e),t;case 22:return ko(l,t,e);case 24:return je(t),a=Wl(ql),l===null?(u=wi(),u===null&&(u=bl,n=Zi(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),t.memoizedState={parent:a,cache:u},Ji(t),te(t,ql,u)):((l.lanes&e)!==0&&(Wi(l,t),lu(t,null,null,e),Ia()),u=l.memoizedState,n=t.memoizedState,u.parent!==a?(u={parent:a,cache:a},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),te(t,ql,a)):(a=n.cache,te(t,ql,a),a!==u.cache&&Qi(t,[ql],e,!0))),Zl(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Kt(l){l.flags|=4}function ur(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!d0(t)){if(t=xt.current,t!==null&&((ul&4194048)===ul?Ht!==null:(ul&62914560)!==ul&&(ul&536870912)===0||t!==Ht))throw Fa=Ki,Cs;l.flags|=8192}}function xn(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?qc():536870912,l.lanes|=t,Sa|=t)}function fu(l,t){if(!fl)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function Ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=l,u=u.sibling;else for(u=l.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=l,u=u.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function Ah(l,t,e){var a=t.pendingProps;switch(Gi(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ml(t),null;case 1:return Ml(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(ql),Ft(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(Va(t)?Kt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qs())),Ml(t),null;case 26:return e=t.memoizedState,l===null?(Kt(t),e!==null?(Ml(t),ur(t,e)):(Ml(t),t.flags&=-16777217)):e?e!==l.memoizedState?(Kt(t),Ml(t),ur(t,e)):(Ml(t),t.flags&=-16777217):(l.memoizedProps!==a&&Kt(t),Ml(t),t.flags&=-16777217),null;case 27:Hu(t),e=$.current;var u=t.type;if(l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Kt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ml(t),null}l=Q.current,Va(t)?Ns(t):(l=u0(u,a,e),t.stateNode=l,Kt(t))}return Ml(t),null;case 5:if(Hu(t),e=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Kt(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ml(t),null}if(l=Q.current,Va(t))Ns(t);else{switch(u=qn($.current),l){case 1:l=u.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:l=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":l=u.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":l=u.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":l=u.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?u.createElement(e,{is:a.is}):u.createElement(e)}}l[Jl]=t,l[Pl]=a;l:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)l.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break l;for(;u.sibling===null;){if(u.return===null||u.return===t)break l;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=l;l:switch(wl(l,e,a),e){case"button":case"input":case"select":case"textarea":l=!!a.autoFocus;break l;case"img":l=!0;break l;default:l=!1}l&&Kt(t)}}return Ml(t),t.flags&=-16777217,null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&Kt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(l=$.current,Va(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,u=Fl,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}l[Jl]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Fr(l.nodeValue,e)),l||Be(t)}else l=qn(l).createTextNode(a),l[Jl]=t,t.stateNode=l}return Ml(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(u=Va(t),a!==null&&a.dehydrated!==null){if(l===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Jl]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ml(t),u=!1}else u=qs(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Vt(t),t):(Vt(t),null)}if(Vt(t),(t.flags&128)!==0)return t.lanes=e,t;if(e=a!==null,l=l!==null&&l.memoizedState!==null,e){a=t.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var n=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)}return e!==l&&e&&(t.child.flags|=8192),xn(t,t.updateQueue),Ml(t),null;case 4:return Ft(),l===null&&Ff(t.stateNode.containerInfo),Ml(t),null;case 10:return Qt(t.type),Ml(t),null;case 19:if(Y(jl),u=t.memoizedState,u===null)return Ml(t),null;if(a=(t.flags&128)!==0,n=u.rendering,n===null)if(a)fu(u,!1);else{if(_l!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(n=gn(l),n!==null){for(t.flags|=128,fu(u,!1),l=n.updateQueue,t.updateQueue=l,xn(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)Us(e,l),e=e.sibling;return q(jl,jl.current&1|2),t.child}l=l.sibling}u.tail!==null&&Ot()>Mn&&(t.flags|=128,a=!0,fu(u,!1),t.lanes=4194304)}else{if(!a)if(l=gn(n),l!==null){if(t.flags|=128,a=!0,l=l.updateQueue,t.updateQueue=l,xn(t,l),fu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!n.alternate&&!fl)return Ml(t),null}else 2*Ot()-u.renderingStartTime>Mn&&e!==536870912&&(t.flags|=128,a=!0,fu(u,!1),t.lanes=4194304);u.isBackwards?(n.sibling=t.child,t.child=n):(l=u.last,l!==null?l.sibling=n:t.child=n,u.last=n)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ot(),t.sibling=null,l=jl.current,q(jl,a?l&1|2:l&1),t):(Ml(t),null);case 22:case 23:return Vt(t),Pi(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(Ml(t),t.subtreeFlags&6&&(t.flags|=8192)):Ml(t),e=t.updateQueue,e!==null&&xn(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&Y(Ye),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Qt(ql),Ml(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Eh(l,t){switch(Gi(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Qt(ql),Ft(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Hu(t),null;case 13:if(Vt(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(s(340));wa()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return Y(jl),null;case 4:return Ft(),null;case 10:return Qt(t.type),null;case 22:case 23:return Vt(t),Pi(),l!==null&&Y(Ye),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Qt(ql),null;case 25:return null;default:return null}}function nr(l,t){switch(Gi(t),t.tag){case 3:Qt(ql),Ft();break;case 26:case 27:case 5:Hu(t);break;case 4:Ft();break;case 13:Vt(t);break;case 19:Y(jl);break;case 10:Qt(t.type);break;case 22:case 23:Vt(t),Pi(),l!==null&&Y(Ye);break;case 24:Qt(ql)}}function cu(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&l)===l){a=void 0;var n=e.create,f=e.inst;a=n(),f.destroy=a}e=e.next}while(e!==u)}}catch(c){Sl(t,t.return,c)}}function ce(l,t,e){try{var a=t.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&l)===l){var f=a.inst,c=f.destroy;if(c!==void 0){f.destroy=void 0,u=t;var r=e,b=c;try{b()}catch(M){Sl(u,r,M)}}}a=a.next}while(a!==n)}}catch(M){Sl(t,t.return,M)}}function ir(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Ks(t,e)}catch(a){Sl(l,l.return,a)}}}function fr(l,t,e){e.props=Xe(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){Sl(l,t,a)}}function su(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(u){Sl(l,t,u)}}function Nt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){Sl(l,t,u)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){Sl(l,t,u)}else e.current=null}function cr(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){Sl(l,l.return,u)}}function Df(l,t,e){try{var a=l.stateNode;wh(a,l.type,e,t),a[Pl]=t}catch(u){Sl(l,l.return,u)}}function sr(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ve(l.type)||l.tag===4}function _f(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||sr(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ve(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Rf(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Bn));else if(a!==4&&(a===27&&ve(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Rf(l,t,e),l=l.sibling;l!==null;)Rf(l,t,e),l=l.sibling}function An(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&ve(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(An(l,t,e),l=l.sibling;l!==null;)An(l,t,e),l=l.sibling}function or(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);wl(t,a,e),t[Jl]=l,t[Pl]=e}catch(n){Sl(l,l.return,n)}}var Jt=!1,Ol=!1,Of=!1,rr=typeof WeakSet=="function"?WeakSet:Set,Cl=null;function Mh(l,t){if(l=l.containerInfo,lc=Ln,l=Ts(l),Di(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break l}var f=0,c=-1,r=-1,b=0,M=0,O=l,x=null;t:for(;;){for(var A;O!==e||u!==0&&O.nodeType!==3||(c=f+u),O!==n||a!==0&&O.nodeType!==3||(r=f+a),O.nodeType===3&&(f+=O.nodeValue.length),(A=O.firstChild)!==null;)x=O,O=A;for(;;){if(O===l)break t;if(x===e&&++b===u&&(c=f),x===n&&++M===a&&(r=f),(A=O.nextSibling)!==null)break;O=x,x=O.parentNode}O=A}e=c===-1||r===-1?null:{start:c,end:r}}else e=null}e=e||{start:0,end:0}}else e=null;for(tc={focusedElem:l,selectionRange:e},Ln=!1,Cl=t;Cl!==null;)if(t=Cl,l=t.child,(t.subtreeFlags&1024)!==0&&l!==null)l.return=t,Cl=l;else for(;Cl!==null;){switch(t=Cl,n=t.alternate,l=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){l=void 0,e=t,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var J=Xe(e.type,u,e.elementType===e.type);l=a.getSnapshotBeforeUpdate(J,n),a.__reactInternalSnapshotBeforeUpdate=l}catch(Z){Sl(e,e.return,Z)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)uc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":uc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(s(163))}if(l=t.sibling,l!==null){l.return=t.return,Cl=l;break}Cl=t.return}}function dr(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:se(l,e),a&4&&cu(5,e);break;case 1:if(se(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(f){Sl(e,e.return,f)}else{var u=Xe(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(u,t,l.__reactInternalSnapshotBeforeUpdate)}catch(f){Sl(e,e.return,f)}}a&64&&ir(e),a&512&&su(e,e.return);break;case 3:if(se(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Ks(l,t)}catch(f){Sl(e,e.return,f)}}break;case 27:t===null&&a&4&&or(e);case 26:case 5:se(l,e),t===null&&a&4&&cr(e),a&512&&su(e,e.return);break;case 12:se(l,e);break;case 13:se(l,e),a&4&&mr(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=Bh.bind(null,e),Ph(l,e))));break;case 22:if(a=e.memoizedState!==null||Jt,!a){t=t!==null&&t.memoizedState!==null||Ol,u=Jt;var n=Ol;Jt=a,(Ol=t)&&!n?oe(l,e,(e.subtreeFlags&8772)!==0):se(l,e),Jt=u,Ol=n}break;case 30:break;default:se(l,e)}}function hr(l){var t=l.alternate;t!==null&&(l.alternate=null,hr(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&ci(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var El=null,tt=!1;function Wt(l,t,e){for(e=e.child;e!==null;)yr(l,t,e),e=e.sibling}function yr(l,t,e){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Oa,e)}catch(_e){}switch(e.tag){case 26:Ol||Nt(e,t),Wt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Ol||Nt(e,t);var a=El,u=tt;ve(e.type)&&(El=e.stateNode,tt=!1),Wt(l,t,e),Su(e.stateNode),El=a,tt=u;break;case 5:Ol||Nt(e,t);case 6:if(a=El,u=tt,El=null,Wt(l,t,e),El=a,tt=u,El!==null)if(tt)try{(El.nodeType===9?El.body:El.nodeName==="HTML"?El.ownerDocument.body:El).removeChild(e.stateNode)}catch(n){Sl(e,t,n)}else try{El.removeChild(e.stateNode)}catch(n){Sl(e,t,n)}break;case 18:El!==null&&(tt?(l=El,e0(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),zu(l)):e0(El,e.stateNode));break;case 4:a=El,u=tt,El=e.stateNode.containerInfo,tt=!0,Wt(l,t,e),El=a,tt=u;break;case 0:case 11:case 14:case 15:Ol||ce(2,e,t),Ol||ce(4,e,t),Wt(l,t,e);break;case 1:Ol||(Nt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&fr(e,t,a)),Wt(l,t,e);break;case 21:Wt(l,t,e);break;case 22:Ol=(a=Ol)||e.memoizedState!==null,Wt(l,t,e),Ol=a;break;default:Wt(l,t,e)}}function mr(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{zu(l)}catch(e){Sl(t,t.return,e)}}function zh(l){switch(l.tag){case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new rr),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new rr),t;default:throw Error(s(435,l.tag))}}function Uf(l,t){var e=zh(l);t.forEach(function(a){var u=qh.bind(null,l,a);e.has(a)||(e.add(a),a.then(u,u))})}function ot(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=l,f=t,c=f;l:for(;c!==null;){switch(c.tag){case 27:if(ve(c.type)){El=c.stateNode,tt=!1;break l}break;case 5:El=c.stateNode,tt=!1;break l;case 3:case 4:El=c.stateNode.containerInfo,tt=!0;break l}c=c.return}if(El===null)throw Error(s(160));yr(n,f,u),El=null,tt=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vr(t,l),t=t.sibling}var zt=null;function vr(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:ot(t,l),rt(l),a&4&&(ce(3,l,l.return),cu(3,l),ce(5,l,l.return));break;case 1:ot(t,l),rt(l),a&512&&(Ol||e===null||Nt(e,e.return)),a&64&&Jt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=zt;if(ot(t,l),rt(l),a&512&&(Ol||e===null||Nt(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,u=u.ownerDocument||u;t:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Na]||n[Jl]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),wl(n,a,e),n[Jl]=l,Gl(n),a=n;break l;case"link":var f=o0("link","href",u).get(a+(e.href||""));if(f){for(var c=0;c<f.length;c++)if(n=f[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){f.splice(c,1);break t}}n=u.createElement(a),wl(n,a,e),u.head.appendChild(n);break;case"meta":if(f=o0("meta","content",u).get(a+(e.content||""))){for(c=0;c<f.length;c++)if(n=f[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){f.splice(c,1);break t}}n=u.createElement(a),wl(n,a,e),u.head.appendChild(n);break;default:throw Error(s(468,a))}n[Jl]=l,Gl(n),a=n}l.stateNode=a}else r0(u,l.type,l.stateNode);else l.stateNode=s0(u,a,l.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?r0(u,l.type,l.stateNode):s0(u,a,l.memoizedProps)):a===null&&l.stateNode!==null&&Df(l,l.memoizedProps,e.memoizedProps)}break;case 27:ot(t,l),rt(l),a&512&&(Ol||e===null||Nt(e,e.return)),e!==null&&a&4&&Df(l,l.memoizedProps,e.memoizedProps);break;case 5:if(ot(t,l),rt(l),a&512&&(Ol||e===null||Nt(e,e.return)),l.flags&32){u=l.stateNode;try{$e(u,"")}catch(A){Sl(l,l.return,A)}}a&4&&l.stateNode!=null&&(u=l.memoizedProps,Df(l,u,e!==null?e.memoizedProps:u)),a&1024&&(Of=!0);break;case 6:if(ot(t,l),rt(l),a&4){if(l.stateNode===null)throw Error(s(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(A){Sl(l,l.return,A)}}break;case 3:if(Gn=null,u=zt,zt=jn(t.containerInfo),ot(t,l),zt=u,rt(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{zu(t.containerInfo)}catch(A){Sl(l,l.return,A)}Of&&(Of=!1,gr(l));break;case 4:a=zt,zt=jn(l.stateNode.containerInfo),ot(t,l),rt(l),zt=a;break;case 12:ot(t,l),rt(l);break;case 13:ot(t,l),rt(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Yf=Ot()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,Uf(l,a)));break;case 22:u=l.memoizedState!==null;var r=e!==null&&e.memoizedState!==null,b=Jt,M=Ol;if(Jt=b||u,Ol=M||r,ot(t,l),Ol=M,Jt=b,rt(l),a&8192)l:for(t=l.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(e===null||r||Jt||Ol||Ce(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){r=e=t;try{if(n=r.stateNode,u)f=n.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{c=r.stateNode;var O=r.memoizedProps.style,x=O!=null&&O.hasOwnProperty("display")?O.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(A){Sl(r,r.return,A)}}}else if(t.tag===6){if(e===null){r=t;try{r.stateNode.nodeValue=u?"":r.memoizedProps}catch(A){Sl(r,r.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,Uf(l,e))));break;case 19:ot(t,l),rt(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,Uf(l,a)));break;case 30:break;case 21:break;default:ot(t,l),rt(l)}}function rt(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if(sr(a)){e=a;break}a=a.return}if(e==null)throw Error(s(160));switch(e.tag){case 27:var u=e.stateNode,n=_f(l);An(l,n,u);break;case 5:var f=e.stateNode;e.flags&32&&($e(f,""),e.flags&=-33);var c=_f(l);An(l,c,f);break;case 3:case 4:var r=e.stateNode.containerInfo,b=_f(l);Rf(l,b,r);break;default:throw Error(s(161))}}catch(M){Sl(l,l.return,M)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function gr(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;gr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function se(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dr(l,t.alternate,t),t=t.sibling}function Ce(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ce(4,t,t.return),Ce(t);break;case 1:Nt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&fr(t,t.return,e),Ce(t);break;case 27:Su(t.stateNode);case 26:case 5:Nt(t,t.return),Ce(t);break;case 22:t.memoizedState===null&&Ce(t);break;case 30:Ce(t);break;default:Ce(t)}l=l.sibling}}function oe(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,u=l,n=t,f=n.flags;switch(n.tag){case 0:case 11:case 15:oe(u,n,e),cu(4,n);break;case 1:if(oe(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(b){Sl(a,a.return,b)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var r=u.shared.hiddenCallbacks;if(r!==null)for(u.shared.hiddenCallbacks=null,u=0;u<r.length;u++)ws(r[u],c)}catch(b){Sl(a,a.return,b)}}e&&f&64&&ir(n),su(n,n.return);break;case 27:or(n);case 26:case 5:oe(u,n,e),e&&a===null&&f&4&&cr(n),su(n,n.return);break;case 12:oe(u,n,e);break;case 13:oe(u,n,e),e&&f&4&&mr(u,n);break;case 22:n.memoizedState===null&&oe(u,n,e),su(n,n.return);break;case 30:break;default:oe(u,n,e)}t=t.sibling}}function Hf(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Wa(e))}function Nf(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Wa(l))}function Bt(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sr(l,t,e,a),t=t.sibling}function Sr(l,t,e,a){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(l,t,e,a),u&2048&&cu(9,t);break;case 1:Bt(l,t,e,a);break;case 3:Bt(l,t,e,a),u&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Wa(l)));break;case 12:if(u&2048){Bt(l,t,e,a),l=t.stateNode;try{var n=t.memoizedProps,f=n.id,c=n.onPostCommit;typeof c=="function"&&c(f,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(r){Sl(t,t.return,r)}}else Bt(l,t,e,a);break;case 13:Bt(l,t,e,a);break;case 23:break;case 22:n=t.stateNode,f=t.alternate,t.memoizedState!==null?n._visibility&2?Bt(l,t,e,a):ou(l,t):n._visibility&2?Bt(l,t,e,a):(n._visibility|=2,ma(l,t,e,a,(t.subtreeFlags&10256)!==0)),u&2048&&Hf(f,t);break;case 24:Bt(l,t,e,a),u&2048&&Nf(t.alternate,t);break;default:Bt(l,t,e,a)}}function ma(l,t,e,a,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var n=l,f=t,c=e,r=a,b=f.flags;switch(f.tag){case 0:case 11:case 15:ma(n,f,c,r,u),cu(8,f);break;case 23:break;case 22:var M=f.stateNode;f.memoizedState!==null?M._visibility&2?ma(n,f,c,r,u):ou(n,f):(M._visibility|=2,ma(n,f,c,r,u)),u&&b&2048&&Hf(f.alternate,f);break;case 24:ma(n,f,c,r,u),u&&b&2048&&Nf(f.alternate,f);break;default:ma(n,f,c,r,u)}t=t.sibling}}function ou(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,u=a.flags;switch(a.tag){case 22:ou(e,a),u&2048&&Hf(a.alternate,a);break;case 24:ou(e,a),u&2048&&Nf(a.alternate,a);break;default:ou(e,a)}t=t.sibling}}var ru=8192;function va(l){if(l.subtreeFlags&ru)for(l=l.child;l!==null;)br(l),l=l.sibling}function br(l){switch(l.tag){case 26:va(l),l.flags&ru&&l.memoizedState!==null&&r1(zt,l.memoizedState,l.memoizedProps);break;case 5:va(l);break;case 3:case 4:var t=zt;zt=jn(l.stateNode.containerInfo),va(l),zt=t;break;case 22:l.memoizedState===null&&(t=l.alternate,t!==null&&t.memoizedState!==null?(t=ru,ru=16777216,va(l),ru=t):va(l));break;default:va(l)}}function pr(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function du(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Cl=a,xr(a,l)}pr(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Tr(l),l=l.sibling}function Tr(l){switch(l.tag){case 0:case 11:case 15:du(l),l.flags&2048&&ce(9,l,l.return);break;case 3:du(l);break;case 12:du(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,En(l)):du(l);break;default:du(l)}}function En(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Cl=a,xr(a,l)}pr(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ce(8,t,t.return),En(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,En(t));break;default:En(t)}l=l.sibling}}function xr(l,t){for(;Cl!==null;){var e=Cl;switch(e.tag){case 0:case 11:case 15:ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Wa(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Cl=a;else l:for(e=l;Cl!==null;){a=Cl;var u=a.sibling,n=a.return;if(hr(a),a===e){Cl=null;break l}if(u!==null){u.return=n,Cl=u;break l}Cl=n}}}var Dh={getCacheForType:function(l){var t=Wl(ql),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e}},_h=typeof WeakMap=="function"?WeakMap:Map,ol=0,bl=null,ll=null,ul=0,rl=0,dt=null,re=!1,ga=!1,Bf=!1,kt=0,_l=0,de=0,Le=0,qf=0,At=0,Sa=0,hu=null,et=null,jf=!1,Yf=0,Mn=1/0,zn=null,he=null,Vl=0,ye=null,ba=null,pa=0,Gf=0,Xf=null,Ar=null,yu=0,Cf=null;function ht(){if((ol&2)!==0&&ul!==0)return ul&-ul;if(_.T!==null){var l=fa;return l!==0?l:Jf()}return Gc()}function Er(){At===0&&(At=(ul&536870912)===0||fl?Bc():536870912);var l=xt.current;return l!==null&&(l.flags|=32),At}function yt(l,t,e){(l===bl&&(rl===2||rl===9)||l.cancelPendingCommit!==null)&&(Ta(l,0),me(l,ul,At,!1)),Ha(l,e),((ol&2)===0||l!==bl)&&(l===bl&&((ol&2)===0&&(Le|=e),_l===4&&me(l,ul,At,!1)),qt(l))}function Mr(l,t,e){if((ol&6)!==0)throw Error(s(327));var a=!e&&(t&124)===0&&(t&l.expiredLanes)===0||Ua(l,t),u=a?Uh(l,t):Zf(l,t,!0),n=a;do{if(u===0){ga&&!a&&me(l,t,0,!1);break}else{if(e=l.current.alternate,n&&!Rh(e)){u=Zf(l,t,!1),n=!1;continue}if(u===2){if(n=t,l.errorRecoveryDisabledLanes&n)var f=0;else f=l.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;l:{var c=l;u=hu;var r=c.current.memoizedState.isDehydrated;if(r&&(Ta(c,f).flags|=256),f=Zf(c,f,!1),f!==2){if(Bf&&!r){c.errorRecoveryDisabledLanes|=n,Le|=n,u=4;break l}n=et,et=u,n!==null&&(et===null?et=n:et.push.apply(et,n))}u=f}if(n=!1,u!==2)continue}}if(u===1){Ta(l,0),me(l,t,0,!0);break}l:{switch(a=l,n=u,n){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:me(a,t,At,!re);break l;case 2:et=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(u=Yf+300-Ot(),10<u)){if(me(a,t,At,!re),ju(a,0,!0)!==0)break l;a.timeoutHandle=l0(zr.bind(null,a,e,et,zn,jf,t,At,Le,Sa,re,n,2,-0,0),u);break l}zr(a,e,et,zn,jf,t,At,Le,Sa,re,n,0,-0,0)}}break}while(!0);qt(l)}function zr(l,t,e,a,u,n,f,c,r,b,M,O,x,A){if(l.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Tu={stylesheets:null,count:0,unsuspend:o1},br(t),O=d1(),O!==null)){l.cancelPendingCommit=O(Nr.bind(null,l,t,n,e,a,u,f,c,r,M,1,x,A)),me(l,n,f,!b);return}Nr(l,t,n,e,a,u,f,c,r)}function Rh(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!ct(n(),u))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function me(l,t,e,a){t&=~qf,t&=~Le,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var u=t;0<u;){var n=31-ft(u),f=1<<n;a[n]=-1,u&=~f}e!==0&&jc(l,e,t)}function Dn(){return(ol&6)===0?(mu(0),!1):!0}function Lf(){if(ll!==null){if(rl===0)var l=ll.return;else l=ll,Lt=qe=null,af(l),ha=null,nu=0,l=ll;for(;l!==null;)nr(l.alternate,l),l=l.return;ll=null}}function Ta(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Jh(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),Lf(),bl=l,ll=e=Gt(l.current,null),ul=t,rl=0,dt=null,re=!1,ga=Ua(l,t),Bf=!1,Sa=At=qf=Le=de=_l=0,et=hu=null,jf=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var u=31-ft(a),n=1<<u;t|=l[u],a&=~n}return kt=t,Wu(),e}function Dr(l,t){P=null,_.H=yn,t===$a||t===an?(t=Zs(),rl=3):t===Cs?(t=Zs(),rl=4):rl=t===wo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dt=t,ll===null&&(_l=1,bn(l,St(t,l.current)))}function _r(){var l=_.H;return _.H=yn,l===null?yn:l}function Rr(){var l=_.A;return _.A=Dh,l}function Qf(){_l=4,re||(ul&4194048)!==ul&&xt.current!==null||(ga=!0),(de&134217727)===0&&(Le&134217727)===0||bl===null||me(bl,ul,At,!1)}function Zf(l,t,e){var a=ol;ol|=2;var u=_r(),n=Rr();(bl!==l||ul!==t)&&(zn=null,Ta(l,t)),t=!1;var f=_l;l:do try{if(rl!==0&&ll!==null){var c=ll,r=dt;switch(rl){case 8:Lf(),f=6;break l;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var b=rl;if(rl=0,dt=null,xa(l,c,r,b),e&&ga){f=0;break l}break;default:b=rl,rl=0,dt=null,xa(l,c,r,b)}}Oh(),f=_l;break}catch(M){Dr(l,M)}while(!0);return t&&l.shellSuspendCounter++,Lt=qe=null,ol=a,_.H=u,_.A=n,ll===null&&(bl=null,ul=0,Wu()),f}function Oh(){for(;ll!==null;)Or(ll)}function Uh(l,t){var e=ol;ol|=2;var a=_r(),u=Rr();bl!==l||ul!==t?(zn=null,Mn=Ot()+500,Ta(l,t)):ga=Ua(l,t);l:do try{if(rl!==0&&ll!==null){t=ll;var n=dt;t:switch(rl){case 1:rl=0,dt=null,xa(l,t,n,1);break;case 2:case 9:if(Ls(n)){rl=0,dt=null,Ur(t);break}t=function(){rl!==2&&rl!==9||bl!==l||(rl=7),qt(l)},n.then(t,t);break l;case 3:rl=7;break l;case 4:rl=5;break l;case 7:Ls(n)?(rl=0,dt=null,Ur(t)):(rl=0,dt=null,xa(l,t,n,7));break;case 5:var f=null;switch(ll.tag){case 26:f=ll.memoizedState;case 5:case 27:var c=ll;if(!f||d0(f)){rl=0,dt=null;var r=c.sibling;if(r!==null)ll=r;else{var b=c.return;b!==null?(ll=b,_n(b)):ll=null}break t}}rl=0,dt=null,xa(l,t,n,5);break;case 6:rl=0,dt=null,xa(l,t,n,6);break;case 8:Lf(),_l=6;break l;default:throw Error(s(462))}}Hh();break}catch(M){Dr(l,M)}while(!0);return Lt=qe=null,_.H=a,_.A=u,ol=e,ll!==null?0:(bl=null,ul=0,Wu(),_l)}function Hh(){for(;ll!==null&&!ld();)Or(ll)}function Or(l){var t=ar(l.alternate,l,kt);l.memoizedProps=l.pendingProps,t===null?_n(l):ll=t}function Ur(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Fo(e,t,t.pendingProps,t.type,void 0,ul);break;case 11:t=Fo(e,t,t.pendingProps,t.type.render,t.ref,ul);break;case 5:af(t);default:nr(e,t),t=ll=Us(t,kt),t=ar(e,t,kt)}l.memoizedProps=l.pendingProps,t===null?_n(l):ll=t}function xa(l,t,e,a){Lt=qe=null,af(t),ha=null,nu=0;var u=t.return;try{if(Th(l,u,t,e,ul)){_l=1,bn(l,St(e,l.current)),ll=null;return}}catch(n){if(u!==null)throw ll=u,n;_l=1,bn(l,St(e,l.current)),ll=null;return}t.flags&32768?(fl||a===1?l=!0:ga||(ul&536870912)!==0?l=!1:(re=l=!0,(a===2||a===9||a===3||a===6)&&(a=xt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Hr(t,l)):_n(t)}function _n(l){var t=l;do{if((t.flags&32768)!==0){Hr(t,re);return}l=t.return;var e=Ah(t.alternate,t,kt);if(e!==null){ll=e;return}if(t=t.sibling,t!==null){ll=t;return}ll=t=l}while(t!==null);_l===0&&(_l=5)}function Hr(l,t){do{var e=Eh(l.alternate,l);if(e!==null){e.flags&=32767,ll=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){ll=l;return}ll=l=e}while(l!==null);_l=6,ll=null}function Nr(l,t,e,a,u,n,f,c,r){l.cancelPendingCommit=null;do Rn();while(Vl!==0);if((ol&6)!==0)throw Error(s(327));if(t!==null){if(t===l.current)throw Error(s(177));if(n=t.lanes|t.childLanes,n|=Hi,od(l,e,n,f,c,r),l===bl&&(ll=bl=null,ul=0),ba=t,ye=l,pa=e,Gf=n,Xf=u,Ar=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,jh(Nu,function(){return Gr(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,u=j.p,j.p=2,f=ol,ol|=4;try{Mh(l,t,e)}finally{ol=f,j.p=u,_.T=a}}Vl=1,Br(),qr(),jr()}}function Br(){if(Vl===1){Vl=0;var l=ye,t=ba,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=_.T,_.T=null;var a=j.p;j.p=2;var u=ol;ol|=4;try{vr(t,l);var n=tc,f=Ts(l.containerInfo),c=n.focusedElem,r=n.selectionRange;if(f!==c&&c&&c.ownerDocument&&ps(c.ownerDocument.documentElement,c)){if(r!==null&&Di(c)){var b=r.start,M=r.end;if(M===void 0&&(M=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(M,c.value.length);else{var O=c.ownerDocument||document,x=O&&O.defaultView||window;if(x.getSelection){var A=x.getSelection(),J=c.textContent.length,Z=Math.min(r.start,J),ml=r.end===void 0?Z:Math.min(r.end,J);!A.extend&&Z>ml&&(f=ml,ml=Z,Z=f);var g=bs(c,Z),m=bs(c,ml);if(g&&m&&(A.rangeCount!==1||A.anchorNode!==g.node||A.anchorOffset!==g.offset||A.focusNode!==m.node||A.focusOffset!==m.offset)){var S=O.createRange();S.setStart(g.node,g.offset),A.removeAllRanges(),Z>ml?(A.addRange(S),A.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),A.addRange(S))}}}}for(O=[],A=c;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<O.length;c++){var R=O[c];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Ln=!!lc,tc=lc=null}finally{ol=u,j.p=a,_.T=e}}l.current=t,Vl=2}}function qr(){if(Vl===2){Vl=0;var l=ye,t=ba,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=_.T,_.T=null;var a=j.p;j.p=2;var u=ol;ol|=4;try{dr(l,t.alternate,t)}finally{ol=u,j.p=a,_.T=e}}Vl=3}}function jr(){if(Vl===4||Vl===3){Vl=0,td();var l=ye,t=ba,e=pa,a=Ar;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Vl=5:(Vl=0,ba=ye=null,Yr(l,l.pendingLanes));var u=l.pendingLanes;if(u===0&&(he=null),ii(e),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch(_e){}if(a!==null){t=_.T,u=j.p,j.p=2,_.T=null;try{for(var n=l.onRecoverableError,f=0;f<a.length;f++){var c=a[f];n(c.value,{componentStack:c.stack})}}finally{_.T=t,j.p=u}}(pa&3)!==0&&Rn(),qt(l),u=l.pendingLanes,(e&4194090)!==0&&(u&42)!==0?l===Cf?yu++:(yu=0,Cf=l):yu=0,mu(0)}}function Yr(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Wa(t)))}function Rn(l){return Br(),qr(),jr(),Gr()}function Gr(){if(Vl!==5)return!1;var l=ye,t=Gf;Gf=0;var e=ii(pa),a=_.T,u=j.p;try{j.p=32>e?32:e,_.T=null,e=Xf,Xf=null;var n=ye,f=pa;if(Vl=0,ba=ye=null,pa=0,(ol&6)!==0)throw Error(s(331));var c=ol;if(ol|=4,Tr(n.current),Sr(n,n.current,f,e),ol=c,mu(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Oa,n)}catch(_e){}return!0}finally{j.p=u,_.T=a,Yr(l,t)}}function Xr(l,t,e){t=St(e,t),t=Sf(l.stateNode,t,2),l=ue(l,t,2),l!==null&&(Ha(l,2),qt(l))}function Sl(l,t,e){if(l.tag===3)Xr(l,l,e);else for(;t!==null;){if(t.tag===3){Xr(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(he===null||!he.has(a))){l=St(e,l),e=Zo(2),a=ue(t,e,2),a!==null&&(Vo(e,a,t,l),Ha(a,2),qt(a));break}}t=t.return}}function Vf(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new _h;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(e)||(Bf=!0,u.add(e),l=Nh.bind(null,l,t,e),t.then(l,l))}function Nh(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,bl===l&&(ul&e)===e&&(_l===4||_l===3&&(ul&62914560)===ul&&300>Ot()-Yf?(ol&2)===0&&Ta(l,0):qf|=e,Sa===ul&&(Sa=0)),qt(l)}function Cr(l,t){t===0&&(t=qc()),l=aa(l,t),l!==null&&(Ha(l,t),qt(l))}function Bh(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Cr(l,e)}function qh(l,t){var e=0;switch(l.tag){case 13:var a=l.stateNode,u=l.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Cr(l,e)}function jh(l,t){return ei(l,t)}var On=null,Aa=null,wf=!1,Un=!1,Kf=!1,Qe=0;function qt(l){l!==Aa&&l.next===null&&(Aa===null?On=Aa=l:Aa=Aa.next=l),Un=!0,wf||(wf=!0,Gh())}function mu(l,t){if(!Kf&&Un){Kf=!0;do for(var e=!1,a=On;a!==null;){if(l!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var f=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-ft(42|l)+1)-1,n&=u&~(f&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,Vr(a,n))}else n=ul,n=ju(a,a===bl?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Ua(a,n)||(e=!0,Vr(a,n));a=a.next}while(e);Kf=!1}}function Yh(){Lr()}function Lr(){Un=wf=!1;var l=0;Qe!==0&&(Kh()&&(l=Qe),Qe=0);for(var t=Ot(),e=null,a=On;a!==null;){var u=a.next,n=Qr(a,t);n===0?(a.next=null,e===null?On=u:e.next=u,u===null&&(Aa=e)):(e=a,(l!==0||(n&3)!==0)&&(Un=!0)),a=u}mu(l)}function Qr(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,u=l.expirationTimes,n=l.pendingLanes&-62914561;0<n;){var f=31-ft(n),c=1<<f,r=u[f];r===-1?((c&e)===0||(c&a)!==0)&&(u[f]=sd(c,t)):r<=t&&(l.expiredLanes|=c),n&=~c}if(t=bl,e=ul,e=ju(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(rl===2||rl===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&ai(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Ua(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&ai(a),ii(e)){case 2:case 8:e=Hc;break;case 32:e=Nu;break;case 268435456:e=Nc;break;default:e=Nu}return a=Zr.bind(null,l),e=ei(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&ai(a),l.callbackPriority=2,l.callbackNode=null,2}function Zr(l,t){if(Vl!==0&&Vl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Rn()&&l.callbackNode!==e)return null;var a=ul;return a=ju(l,l===bl?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(Mr(l,a,t),Qr(l,Ot()),l.callbackNode!=null&&l.callbackNode===e?Zr.bind(null,l):null)}function Vr(l,t){if(Rn())return null;Mr(l,t,!0)}function Gh(){Wh(function(){(ol&6)!==0?ei(Uc,Yh):Lr()})}function Jf(){return Qe===0&&(Qe=Bc()),Qe}function wr(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Lu(""+l)}function Kr(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function Xh(l,t,e,a,u){if(t==="submit"&&e&&e.stateNode===u){var n=wr((u[Pl]||null).action),f=a.submitter;f&&(t=(t=f[Pl]||null)?wr(t.formAction):f.getAttribute("formAction"),t!==null&&(n=t,f=null));var c=new wu("action","action",null,a,u);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Qe!==0){var r=f?Kr(u,f):new FormData(u);hf(e,{pending:!0,data:r,method:u.method,action:n},null,r)}}else typeof n=="function"&&(c.preventDefault(),r=f?Kr(u,f):new FormData(u),hf(e,{pending:!0,data:r,method:u.method,action:n},n,r))},currentTarget:u}]})}}for(var Wf=0;Wf<Ui.length;Wf++){var kf=Ui[Wf],Ch=kf.toLowerCase(),Lh=kf[0].toUpperCase()+kf.slice(1);Mt(Ch,"on"+Lh)}Mt(Es,"onAnimationEnd"),Mt(Ms,"onAnimationIteration"),Mt(zs,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(uh,"onTransitionRun"),Mt(nh,"onTransitionStart"),Mt(ih,"onTransitionCancel"),Mt(Ds,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu));function Jr(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],u=a.event;a=a.listeners;l:{var n=void 0;if(t)for(var f=a.length-1;0<=f;f--){var c=a[f],r=c.instance,b=c.currentTarget;if(c=c.listener,r!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=b;try{n(u)}catch(M){Sn(M)}u.currentTarget=null,n=r}else for(f=0;f<a.length;f++){if(c=a[f],r=c.instance,b=c.currentTarget,c=c.listener,r!==n&&u.isPropagationStopped())break l;n=c,u.currentTarget=b;try{n(u)}catch(M){Sn(M)}u.currentTarget=null,n=r}}}}function tl(l,t){var e=t[fi];e===void 0&&(e=t[fi]=new Set);var a=l+"__bubble";e.has(a)||(Wr(t,l,2,!1),e.add(a))}function $f(l,t,e){var a=0;t&&(a|=4),Wr(e,l,a,t)}var Hn="_reactListening"+Math.random().toString(36).slice(2);function Ff(l){if(!l[Hn]){l[Hn]=!0,Cc.forEach(function(e){e!=="selectionchange"&&(Qh.has(e)||$f(e,!1,l),$f(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Hn]||(t[Hn]=!0,$f("selectionchange",!1,t))}}function Wr(l,t,e,a){switch(S0(t)){case 2:var u=m1;break;case 8:u=v1;break;default:u=rc}e=u.bind(null,t,e,l),u=void 0,!Si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?l.addEventListener(t,e,{capture:!0,passive:u}):l.addEventListener(t,e,!0):u!==void 0?l.addEventListener(t,e,{passive:u}):l.addEventListener(t,e,!1)}function Pf(l,t,e,a,u){var n=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var c=a.stateNode.containerInfo;if(c===u)break;if(f===4)for(f=a.return;f!==null;){var r=f.tag;if((r===3||r===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;c!==null;){if(f=Ve(c),f===null)return;if(r=f.tag,r===5||r===6||r===26||r===27){a=n=f;continue l}c=c.parentNode}}a=a.return}ls(function(){var b=n,M=vi(e),O=[];l:{var x=_s.get(l);if(x!==void 0){var A=wu,J=l;switch(l){case"keypress":if(Zu(e)===0)break l;case"keydown":case"keyup":A=jd;break;case"focusin":J="focus",A=xi;break;case"focusout":J="blur",A=xi;break;case"beforeblur":case"afterblur":A=xi;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=as;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Xd;break;case Es:case Ms:case zs:A=Dd;break;case Ds:A=Ld;break;case"scroll":case"scrollend":A=xd;break;case"wheel":A=Zd;break;case"copy":case"cut":case"paste":A=Rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=ns;break;case"toggle":case"beforetoggle":A=wd}var Z=(t&4)!==0,ml=!Z&&(l==="scroll"||l==="scrollend"),g=Z?x!==null?x+"Capture":null:x;Z=[];for(var m=b,S;m!==null;){var R=m;if(S=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||S===null||g===null||(R=qa(m,g),R!=null&&Z.push(gu(m,R,S))),ml)break;m=m.return}0<Z.length&&(x=new A(x,J,null,e,M),O.push({event:x,listeners:Z}))}}if((t&7)===0){l:{if(x=l==="mouseover"||l==="pointerover",A=l==="mouseout"||l==="pointerout",x&&e!==mi&&(J=e.relatedTarget||e.fromElement)&&(Ve(J)||J[Ze]))break l;if((A||x)&&(x=M.window===M?M:(x=M.ownerDocument)?x.defaultView||x.parentWindow:window,A?(J=e.relatedTarget||e.toElement,A=b,J=J?Ve(J):null,J!==null&&(ml=v(J),Z=J.tag,J!==ml||Z!==5&&Z!==27&&Z!==6)&&(J=null)):(A=null,J=b),A!==J)){if(Z=as,R="onMouseLeave",g="onMouseEnter",m="mouse",(l==="pointerout"||l==="pointerover")&&(Z=ns,R="onPointerLeave",g="onPointerEnter",m="pointer"),ml=A==null?x:Ba(A),S=J==null?x:Ba(J),x=new Z(R,m+"leave",A,e,M),x.target=ml,x.relatedTarget=S,R=null,Ve(M)===b&&(Z=new Z(g,m+"enter",J,e,M),Z.target=S,Z.relatedTarget=ml,R=Z),ml=R,A&&J)t:{for(Z=A,g=J,m=0,S=Z;S;S=Ea(S))m++;for(S=0,R=g;R;R=Ea(R))S++;for(;0<m-S;)Z=Ea(Z),m--;for(;0<S-m;)g=Ea(g),S--;for(;m--;){if(Z===g||g!==null&&Z===g.alternate)break t;Z=Ea(Z),g=Ea(g)}Z=null}else Z=null;A!==null&&kr(O,x,A,Z,!1),J!==null&&ml!==null&&kr(O,ml,J,Z,!0)}}l:{if(x=b?Ba(b):window,A=x.nodeName&&x.nodeName.toLowerCase(),A==="select"||A==="input"&&x.type==="file")var X=hs;else if(rs(x))if(ys)X=th;else{X=Id;var I=Pd}else A=x.nodeName,!A||A.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?b&&yi(b.elementType)&&(X=hs):X=lh;if(X&&(X=X(l,b))){ds(O,X,e,M);break l}I&&I(l,x,b),l==="focusout"&&b&&x.type==="number"&&b.memoizedProps.value!=null&&hi(x,"number",x.value)}switch(I=b?Ba(b):window,l){case"focusin":(rs(I)||I.contentEditable==="true")&&(la=I,_i=b,Za=null);break;case"focusout":Za=_i=la=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,xs(O,e,M);break;case"selectionchange":if(ah)break;case"keydown":case"keyup":xs(O,e,M)}var C;if(Ei)l:{switch(l){case"compositionstart":var V="onCompositionStart";break l;case"compositionend":V="onCompositionEnd";break l;case"compositionupdate":V="onCompositionUpdate";break l}V=void 0}else Ie?ss(l,e)&&(V="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(V="onCompositionStart");V&&(is&&e.locale!=="ko"&&(Ie||V!=="onCompositionStart"?V==="onCompositionEnd"&&Ie&&(C=ts()):(le=M,bi="value"in le?le.value:le.textContent,Ie=!0)),I=Nn(b,V),0<I.length&&(V=new us(V,l,null,e,M),O.push({event:V,listeners:I}),C?V.data=C:(C=os(e),C!==null&&(V.data=C)))),(C=Jd?Wd(l,e):kd(l,e))&&(V=Nn(b,"onBeforeInput"),0<V.length&&(I=new us("onBeforeInput","beforeinput",null,e,M),O.push({event:I,listeners:V}),I.data=C)),Xh(O,l,b,e,M)}Jr(O,t)})}function gu(l,t,e){return{instance:l,listener:t,currentTarget:e}}function Nn(l,t){for(var e=t+"Capture",a=[];l!==null;){var u=l,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=qa(l,e),u!=null&&a.unshift(gu(l,u,n)),u=qa(l,t),u!=null&&a.push(gu(l,u,n))),l.tag===3)return a;l=l.return}return[]}function Ea(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function kr(l,t,e,a,u){for(var n=t._reactName,f=[];e!==null&&e!==a;){var c=e,r=c.alternate,b=c.stateNode;if(c=c.tag,r!==null&&r===a)break;c!==5&&c!==26&&c!==27||b===null||(r=b,u?(b=qa(e,n),b!=null&&f.unshift(gu(e,b,r))):u||(b=qa(e,n),b!=null&&f.push(gu(e,b,r)))),e=e.return}f.length!==0&&l.push({event:t,listeners:f})}var Zh=/\r\n?/g,Vh=/\u0000|\uFFFD/g;function $r(l){return(typeof l=="string"?l:""+l).replace(Zh,`
`).replace(Vh,"")}function Fr(l,t){return t=$r(t),$r(l)===t}function Bn(){}function yl(l,t,e,a,u,n){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$e(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$e(l,""+a);break;case"className":Gu(l,"class",a);break;case"tabIndex":Gu(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Gu(l,e,a);break;case"style":Pc(l,a,n);break;case"data":if(t!=="object"){Gu(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Lu(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(t!=="input"&&yl(l,t,"name",u.name,u,null),yl(l,t,"formEncType",u.formEncType,u,null),yl(l,t,"formMethod",u.formMethod,u,null),yl(l,t,"formTarget",u.formTarget,u,null)):(yl(l,t,"encType",u.encType,u,null),yl(l,t,"method",u.method,u,null),yl(l,t,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Lu(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Bn);break;case"onScroll":a!=null&&tl("scroll",l);break;case"onScrollEnd":a!=null&&tl("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(s(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Lu(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":tl("beforetoggle",l),tl("toggle",l),Yu(l,"popover",a);break;case"xlinkActuate":jt(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jt(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jt(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jt(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jt(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jt(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jt(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yu(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=pd.get(e)||e,Yu(l,e,a))}}function If(l,t,e,a,u,n){switch(e){case"style":Pc(l,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(s(60));l.innerHTML=e}}break;case"children":typeof a=="string"?$e(l,a):(typeof a=="number"||typeof a=="bigint")&&$e(l,""+a);break;case"onScroll":a!=null&&tl("scroll",l);break;case"onScrollEnd":a!=null&&tl("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lc.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),t=e.slice(2,u?e.length-7:void 0),n=l[Pl]||null,n=n!=null?n[e]:null,typeof n=="function"&&l.removeEventListener(t,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,u);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Yu(l,e,a)}}}function wl(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tl("error",l),tl("load",l);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var f=e[n];if(f!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:yl(l,t,n,f,e,null)}}u&&yl(l,t,"srcSet",e.srcSet,e,null),a&&yl(l,t,"src",e.src,e,null);return;case"input":tl("invalid",l);var c=n=f=u=null,r=null,b=null;for(a in e)if(e.hasOwnProperty(a)){var M=e[a];if(M!=null)switch(a){case"name":u=M;break;case"type":f=M;break;case"checked":r=M;break;case"defaultChecked":b=M;break;case"value":n=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:yl(l,t,a,M,e,null)}}Wc(l,n,c,r,b,f,u,!1),Xu(l);return;case"select":tl("invalid",l),a=f=n=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":f=c;break;case"multiple":a=c;default:yl(l,t,u,c,e,null)}t=n,e=f,l.multiple=!!a,t!=null?ke(l,!!a,t,!1):e!=null&&ke(l,!!a,e,!0);return;case"textarea":tl("invalid",l),n=u=a=null;for(f in e)if(e.hasOwnProperty(f)&&(c=e[f],c!=null))switch(f){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:yl(l,t,f,c,e,null)}$c(l,a,u,n),Xu(l);return;case"option":for(r in e)e.hasOwnProperty(r)&&(a=e[r],a!=null)&&(r==="selected"?l.selected=a&&typeof a!="function"&&typeof a!="symbol":yl(l,t,r,a,e,null));return;case"dialog":tl("beforetoggle",l),tl("toggle",l),tl("cancel",l),tl("close",l);break;case"iframe":case"object":tl("load",l);break;case"video":case"audio":for(a=0;a<vu.length;a++)tl(vu[a],l);break;case"image":tl("error",l),tl("load",l);break;case"details":tl("toggle",l);break;case"embed":case"source":case"link":tl("error",l),tl("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in e)if(e.hasOwnProperty(b)&&(a=e[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:yl(l,t,b,a,e,null)}return;default:if(yi(t)){for(M in e)e.hasOwnProperty(M)&&(a=e[M],a!==void 0&&If(l,t,M,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&yl(l,t,c,a,e,null))}function wh(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,f=null,c=null,r=null,b=null,M=null;for(A in e){var O=e[A];if(e.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":r=O;default:a.hasOwnProperty(A)||yl(l,t,A,null,a,O)}}for(var x in a){var A=a[x];if(O=e[x],a.hasOwnProperty(x)&&(A!=null||O!=null))switch(x){case"type":n=A;break;case"name":u=A;break;case"checked":b=A;break;case"defaultChecked":M=A;break;case"value":f=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:A!==O&&yl(l,t,x,A,a,O)}}di(l,f,c,r,b,M,n,u);return;case"select":A=f=c=x=null;for(n in e)if(r=e[n],e.hasOwnProperty(n)&&r!=null)switch(n){case"value":break;case"multiple":A=r;default:a.hasOwnProperty(n)||yl(l,t,n,null,a,r)}for(u in a)if(n=a[u],r=e[u],a.hasOwnProperty(u)&&(n!=null||r!=null))switch(u){case"value":x=n;break;case"defaultValue":c=n;break;case"multiple":f=n;default:n!==r&&yl(l,t,u,n,a,r)}t=c,e=f,a=A,x!=null?ke(l,!!e,x,!1):!!a!=!!e&&(t!=null?ke(l,!!e,t,!0):ke(l,!!e,e?[]:"",!1));return;case"textarea":A=x=null;for(c in e)if(u=e[c],e.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:yl(l,t,c,null,a,u)}for(f in a)if(u=a[f],n=e[f],a.hasOwnProperty(f)&&(u!=null||n!=null))switch(f){case"value":x=u;break;case"defaultValue":A=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==n&&yl(l,t,f,u,a,n)}kc(l,x,A);return;case"option":for(var J in e)x=e[J],e.hasOwnProperty(J)&&x!=null&&!a.hasOwnProperty(J)&&(J==="selected"?l.selected=!1:yl(l,t,J,null,a,x));for(r in a)x=a[r],A=e[r],a.hasOwnProperty(r)&&x!==A&&(x!=null||A!=null)&&(r==="selected"?l.selected=x&&typeof x!="function"&&typeof x!="symbol":yl(l,t,r,x,a,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in e)x=e[Z],e.hasOwnProperty(Z)&&x!=null&&!a.hasOwnProperty(Z)&&yl(l,t,Z,null,a,x);for(b in a)if(x=a[b],A=e[b],a.hasOwnProperty(b)&&x!==A&&(x!=null||A!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(137,t));break;default:yl(l,t,b,x,a,A)}return;default:if(yi(t)){for(var ml in e)x=e[ml],e.hasOwnProperty(ml)&&x!==void 0&&!a.hasOwnProperty(ml)&&If(l,t,ml,void 0,a,x);for(M in a)x=a[M],A=e[M],!a.hasOwnProperty(M)||x===A||x===void 0&&A===void 0||If(l,t,M,x,a,A);return}}for(var g in e)x=e[g],e.hasOwnProperty(g)&&x!=null&&!a.hasOwnProperty(g)&&yl(l,t,g,null,a,x);for(O in a)x=a[O],A=e[O],!a.hasOwnProperty(O)||x===A||x==null&&A==null||yl(l,t,O,x,a,A)}var lc=null,tc=null;function qn(l){return l.nodeType===9?l:l.ownerDocument}function Pr(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ir(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function ec(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ac=null;function Kh(){var l=window.event;return l&&l.type==="popstate"?l===ac?!1:(ac=l,!0):(ac=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,Jh=typeof clearTimeout=="function"?clearTimeout:void 0,t0=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof t0<"u"?function(l){return t0.resolve(null).then(l).catch(kh)}:l0;function kh(l){setTimeout(function(){throw l})}function ve(l){return l==="head"}function e0(l,t){var e=t,a=0,u=0;do{var n=e.nextSibling;if(l.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(0<a&&8>a){e=a;var f=l.ownerDocument;if(e&1&&Su(f.documentElement),e&2&&Su(f.body),e&4)for(e=f.head,Su(e),f=e.firstChild;f;){var c=f.nextSibling,r=f.nodeName;f[Na]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&f.rel.toLowerCase()==="stylesheet"||e.removeChild(f),f=c}}if(u===0){l.removeChild(n),zu(t);return}u--}else e==="$"||e==="$?"||e==="$!"?u++:a=e.charCodeAt(0)-48;else a=0;e=n}while(e);zu(t)}function uc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":uc(e),ci(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function $h(l,t,e,a){for(;l.nodeType===1;){var u=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Na])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(n=l.getAttribute("rel"),n==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(n!==u.rel||l.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||l.getAttribute("title")!==(u.title==null?null:u.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(n=l.getAttribute("src"),(n!==(u.src==null?null:u.src)||l.getAttribute("type")!==(u.type==null?null:u.type)||l.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&l.getAttribute("name")===n)return l}else return l;if(l=Dt(l.nextSibling),l===null)break}return null}function Fh(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=Dt(l.nextSibling),l===null))return null;return l}function nc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState==="complete"}function Ph(l,t){var e=l.ownerDocument;if(l.data!=="$?"||e.readyState==="complete")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function Dt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return l}var ic=null;function a0(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return l;t--}else e==="/$"&&t++}l=l.previousSibling}return null}function u0(l,t,e){switch(t=qn(e),l){case"html":if(l=t.documentElement,!l)throw Error(s(452));return l;case"head":if(l=t.head,!l)throw Error(s(453));return l;case"body":if(l=t.body,!l)throw Error(s(454));return l;default:throw Error(s(451))}}function Su(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);ci(l)}var Et=new Map,n0=new Set;function jn(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var $t=j.d;j.d={f:Ih,r:l1,D:t1,C:e1,L:a1,m:u1,X:i1,S:n1,M:f1};function Ih(){var l=$t.f(),t=Dn();return l||t}function l1(l){var t=we(l);t!==null&&t.tag===5&&t.type==="form"?Mo(t):$t.r(l)}var Ma=typeof document>"u"?null:document;function i0(l,t,e){var a=Ma;if(a&&typeof t=="string"&&t){var u=gt(t);u='link[rel="'+l+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),n0.has(u)||(n0.add(u),l={rel:l,crossOrigin:e,href:t},a.querySelector(u)===null&&(t=a.createElement("link"),wl(t,"link",l),Gl(t),a.head.appendChild(t)))}}function t1(l){$t.D(l),i0("dns-prefetch",l,null)}function e1(l,t){$t.C(l,t),i0("preconnect",l,t)}function a1(l,t,e){$t.L(l,t,e);var a=Ma;if(a&&l&&t){var u='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+gt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+gt(e.imageSizes)+'"]')):u+='[href="'+gt(l)+'"]';var n=u;switch(t){case"style":n=za(l);break;case"script":n=Da(l)}Et.has(n)||(l=d({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),Et.set(n,l),a.querySelector(u)!==null||t==="style"&&a.querySelector(bu(n))||t==="script"&&a.querySelector(pu(n))||(t=a.createElement("link"),wl(t,"link",l),Gl(t),a.head.appendChild(t)))}}function u1(l,t){$t.m(l,t);var e=Ma;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+gt(a)+'"][href="'+gt(l)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Da(l)}if(!Et.has(n)&&(l=d({rel:"modulepreload",href:l},t),Et.set(n,l),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(pu(n)))return}a=e.createElement("link"),wl(a,"link",l),Gl(a),e.head.appendChild(a)}}}function n1(l,t,e){$t.S(l,t,e);var a=Ma;if(a&&l){var u=Ke(a).hoistableStyles,n=za(l);t=t||"default";var f=u.get(n);if(!f){var c={loading:0,preload:null};if(f=a.querySelector(bu(n)))c.loading=5;else{l=d({rel:"stylesheet",href:l,"data-precedence":t},e),(e=Et.get(n))&&fc(l,e);var r=f=a.createElement("link");Gl(r),wl(r,"link",l),r._p=new Promise(function(b,M){r.onload=b,r.onerror=M}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Yn(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:c},u.set(n,f)}}}function i1(l,t){$t.X(l,t);var e=Ma;if(e&&l){var a=Ke(e).hoistableScripts,u=Da(l),n=a.get(u);n||(n=e.querySelector(pu(u)),n||(l=d({src:l,async:!0},t),(t=Et.get(u))&&cc(l,t),n=e.createElement("script"),Gl(n),wl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function f1(l,t){$t.M(l,t);var e=Ma;if(e&&l){var a=Ke(e).hoistableScripts,u=Da(l),n=a.get(u);n||(n=e.querySelector(pu(u)),n||(l=d({src:l,async:!0,type:"module"},t),(t=Et.get(u))&&cc(l,t),n=e.createElement("script"),Gl(n),wl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function f0(l,t,e,a){var u=(u=$.current)?jn(u):null;if(!u)throw Error(s(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=za(e.href),e=Ke(u).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=za(e.href);var n=Ke(u).hoistableStyles,f=n.get(l);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(l,f),(n=u.querySelector(bu(l)))&&!n._p&&(f.instance=n,f.state.loading=5),Et.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Et.set(l,e),n||c1(u,l,e,f.state))),t&&a===null)throw Error(s(528,""));return f}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Da(e),e=Ke(u).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,l))}}function za(l){return'href="'+gt(l)+'"'}function bu(l){return'link[rel="stylesheet"]['+l+"]"}function c0(l){return d({},l,{"data-precedence":l.precedence,precedence:null})}function c1(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),wl(t,"link",e),Gl(t),l.head.appendChild(t))}function Da(l){return'[src="'+gt(l)+'"]'}function pu(l){return"script[async]"+l}function s0(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+gt(e.href)+'"]');if(a)return t.instance=a,Gl(a),a;var u=d({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),Gl(a),wl(a,"style",u),Yn(a,e.precedence,l),t.instance=a;case"stylesheet":u=za(e.href);var n=l.querySelector(bu(u));if(n)return t.state.loading|=4,t.instance=n,Gl(n),n;a=c0(e),(u=Et.get(u))&&fc(a,u),n=(l.ownerDocument||l).createElement("link"),Gl(n);var f=n;return f._p=new Promise(function(c,r){f.onload=c,f.onerror=r}),wl(n,"link",a),t.state.loading|=4,Yn(n,e.precedence,l),t.instance=n;case"script":return n=Da(e.src),(u=l.querySelector(pu(n)))?(t.instance=u,Gl(u),u):(a=e,(u=Et.get(n))&&(a=d({},e),cc(a,u)),l=l.ownerDocument||l,u=l.createElement("script"),Gl(u),wl(u,"link",a),l.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Yn(a,e.precedence,l));return t.instance}function Yn(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,f=0;f<a.length;f++){var c=a[f];if(c.dataset.precedence===t)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(l,n.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function fc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function cc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Gn=null;function o0(l,t,e){if(Gn===null){var a=new Map,u=Gn=new Map;u.set(e,a)}else u=Gn,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),u=0;u<e.length;u++){var n=e[u];if(!(n[Na]||n[Jl]||l==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var f=n.getAttribute(t)||"";f=l+f;var c=a.get(f);c?c.push(n):a.set(f,[n])}}return a}function r0(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function s1(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(l=t.disabled,typeof t.precedence=="string"&&l==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function d0(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}var Tu=null;function o1(){}function r1(l,t,e){if(Tu===null)throw Error(s(475));var a=Tu;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=za(e.href),n=l.querySelector(bu(u));if(n){l=n._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(a.count++,a=Xn.bind(a),l.then(a,a)),t.state.loading|=4,t.instance=n,Gl(n);return}n=l.ownerDocument||l,e=c0(e),(u=Et.get(u))&&fc(e,u),n=n.createElement("link"),Gl(n);var f=n;f._p=new Promise(function(c,r){f.onload=c,f.onerror=r}),wl(n,"link",e),t.instance=n}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,l),(l=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Xn.bind(a),l.addEventListener("load",t),l.addEventListener("error",t))}}function d1(){if(Tu===null)throw Error(s(475));var l=Tu;return l.stylesheets&&l.count===0&&sc(l,l.stylesheets),0<l.count?function(t){var e=setTimeout(function(){if(l.stylesheets&&sc(l,l.stylesheets),l.unsuspend){var a=l.unsuspend;l.unsuspend=null,a()}},6e4);return l.unsuspend=t,function(){l.unsuspend=null,clearTimeout(e)}}:null}function Xn(){if(this.count--,this.count===0){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Cn=null;function sc(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Cn=new Map,t.forEach(h1,l),Cn=null,Xn.call(l))}function h1(l,t){if(!(t.state.loading&4)){var e=Cn.get(l);if(e)var a=e.get(null);else{e=new Map,Cn.set(l,e);for(var u=l.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var f=u[n];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(e.set(f.dataset.precedence,f),a=f)}a&&e.set(null,a)}u=t.instance,f=u.getAttribute("data-precedence"),n=e.get(f)||a,n===a&&e.set(null,u),e.set(f,u),this.count++,a=Xn.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(u,l.firstChild)),t.state.loading|=4}}var xu={$$typeof:dl,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function y1(l,t,e,a,u,n,f,c){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ui(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.hiddenUpdates=ui(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function h0(l,t,e,a,u,n,f,c,r,b,M,O){return l=new y1(l,t,e,f,c,r,b,O),t=1,n===!0&&(t|=24),n=st(3,null,null,t),l.current=n,n.stateNode=l,t=Zi(),t.refCount++,l.pooledCache=t,t.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:t},Ji(n),l}function y0(l){return l?(l=ua,l):ua}function m0(l,t,e,a,u,n){u=y0(u),a.context===null?a.context=u:a.pendingContext=u,a=ae(t),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=ue(l,a,t),e!==null&&(yt(e,l,t),Pa(e,l,t))}function v0(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function oc(l,t){v0(l,t),(l=l.alternate)&&v0(l,t)}function g0(l){if(l.tag===13){var t=aa(l,67108864);t!==null&&yt(t,l,67108864),oc(l,67108864)}}var Ln=!0;function m1(l,t,e,a){var u=_.T;_.T=null;var n=j.p;try{j.p=2,rc(l,t,e,a)}finally{j.p=n,_.T=u}}function v1(l,t,e,a){var u=_.T;_.T=null;var n=j.p;try{j.p=8,rc(l,t,e,a)}finally{j.p=n,_.T=u}}function rc(l,t,e,a){if(Ln){var u=dc(a);if(u===null)Pf(l,t,a,Qn,e),b0(l,a);else if(S1(u,l,t,e,a))a.stopPropagation();else if(b0(l,a),t&4&&-1<g1.indexOf(l)){for(;u!==null;){var n=we(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var f=Me(n.pendingLanes);if(f!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;f;){var r=1<<31-ft(f);c.entanglements[1]|=r,f&=~r}qt(n),(ol&6)===0&&(Mn=Ot()+500,mu(0))}}break;case 13:c=aa(n,2),c!==null&&yt(c,n,2),Dn(),oc(n,2)}if(n=dc(a),n===null&&Pf(l,t,a,Qn,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else Pf(l,t,a,null,e)}}function dc(l){return l=vi(l),hc(l)}var Qn=null;function hc(l){if(Qn=null,l=Ve(l),l!==null){var t=v(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=E(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Qn=l,null}function S0(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ed()){case Uc:return 2;case Hc:return 8;case Nu:case ad:return 32;case Nc:return 268435456;default:return 32}default:return 32}}var yc=!1,ge=null,Se=null,be=null,Au=new Map,Eu=new Map,pe=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b0(l,t){switch(l){case"focusin":case"focusout":ge=null;break;case"dragenter":case"dragleave":Se=null;break;case"mouseover":case"mouseout":be=null;break;case"pointerover":case"pointerout":Au.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(t.pointerId)}}function Mu(l,t,e,a,u,n){return l===null||l.nativeEvent!==n?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},t!==null&&(t=we(t),t!==null&&g0(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),l)}function S1(l,t,e,a,u){switch(t){case"focusin":return ge=Mu(ge,l,t,e,a,u),!0;case"dragenter":return Se=Mu(Se,l,t,e,a,u),!0;case"mouseover":return be=Mu(be,l,t,e,a,u),!0;case"pointerover":var n=u.pointerId;return Au.set(n,Mu(Au.get(n)||null,l,t,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,Eu.set(n,Mu(Eu.get(n)||null,l,t,e,a,u)),!0}return!1}function p0(l){var t=Ve(l.target);if(t!==null){var e=v(t);if(e!==null){if(t=e.tag,t===13){if(t=E(e),t!==null){l.blockedOn=t,rd(l.priority,function(){if(e.tag===13){var a=ht();a=ni(a);var u=aa(e,a);u!==null&&yt(u,e,a),oc(e,a)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Zn(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=dc(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);mi=a,e.target.dispatchEvent(a),mi=null}else return t=we(e),t!==null&&g0(t),l.blockedOn=e,!1;t.shift()}return!0}function T0(l,t,e){Zn(l)&&e.delete(t)}function b1(){yc=!1,ge!==null&&Zn(ge)&&(ge=null),Se!==null&&Zn(Se)&&(Se=null),be!==null&&Zn(be)&&(be=null),Au.forEach(T0),Eu.forEach(T0)}function Vn(l,t){l.blockedOn===t&&(l.blockedOn=null,yc||(yc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,b1)))}var wn=null;function x0(l){wn!==l&&(wn=l,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){wn===l&&(wn=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],u=l[t+2];if(typeof a!="function"){if(hc(a||e)===null)continue;break}var n=we(e);n!==null&&(l.splice(t,3),t-=3,hf(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function zu(l){function t(r){return Vn(r,l)}ge!==null&&Vn(ge,l),Se!==null&&Vn(Se,l),be!==null&&Vn(be,l),Au.forEach(t),Eu.forEach(t);for(var e=0;e<pe.length;e++){var a=pe[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<pe.length&&(e=pe[0],e.blockedOn===null);)p0(e),e.blockedOn===null&&pe.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],f=u[Pl]||null;if(typeof n=="function")f||x0(e);else if(f){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,f=n[Pl]||null)c=f.formAction;else if(hc(u)!==null)continue}else c=f.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),x0(e)}}}function mc(l){this._internalRoot=l}Kn.prototype.render=mc.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(s(409));var e=t.current,a=ht();m0(e,a,l,t,null,null)},Kn.prototype.unmount=mc.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;m0(l.current,2,null,l,null,null),Dn(),t[Ze]=null}};function Kn(l){this._internalRoot=l}Kn.prototype.unstable_scheduleHydration=function(l){if(l){var t=Gc();l={blockedOn:null,target:l,priority:t};for(var e=0;e<pe.length&&t!==0&&t<pe[e].priority;e++);pe.splice(e,0,l),e===0&&p0(l)}};var A0=h.version;if(A0!=="19.1.0")throw Error(s(527,A0,"19.1.0"));j.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(s(188)):(l=Object.keys(l).join(","),Error(s(268,l)));return l=z(t),l=l!==null?p(l):null,l=l===null?null:l.stateNode,l};var p1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jn.isDisabled&&Jn.supportsFiber)try{Oa=Jn.inject(p1),it=Jn}catch(_e){}}return _u.createRoot=function(l,t){if(!T(l))throw Error(s(299));var e=!1,a="",u=Xo,n=Co,f=Lo,c=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=h0(l,1,!1,null,null,e,a,u,n,f,c,null),l[Ze]=t.current,Ff(l),new mc(t)},_u.hydrateRoot=function(l,t,e){if(!T(l))throw Error(s(299));var a=!1,u="",n=Xo,f=Co,c=Lo,r=null,b=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(f=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(r=e.unstable_transitionCallbacks),e.formState!==void 0&&(b=e.formState)),t=h0(l,1,!0,t,e!==void 0&&e!==null?e:null,a,u,n,f,c,r,b),t.context=y0(null),e=t.current,a=ht(),a=ni(a),u=ae(a),u.callback=null,ue(e,u,a),e=a,t.current.lanes=e,Ha(t,e),qt(t),l[Ze]=t.current,Ff(l),new Kn(t)},_u.version="19.1.0",_u}var N0;function O1(){if(N0)return gc.exports;N0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(h){console.error(h)}}return i(),gc.exports=R1(),gc.exports}var U1=O1(),cl=zc();const Ul=16e3,_a=100,Ra=120,Fn=10;function Uu(i){return i<=1?0:Math.floor(500*Math.pow(1.085,i-1))}const H1={square:43,triangle:107,pentagon:558,bigPentagon:6435,crasher:150,mediumTriangle:229,mediumSquare:64,largeSquare:100,largeTriangle:315,alphaPentagon:1072,hexagon:8580,heptagon:14300,octagon:24310,decagon:40040,megaPentagon:71500,ultraPolygon:143000},B0={square:13,triangle:26,pentagon:130,bigPentagon:1950,crasher:52,mediumTriangle:90,mediumSquare:35,largeSquare:60,largeTriangle:150,alphaPentagon:910,hexagon:2600,heptagon:4200,octagon:7000,decagon:12000,megaPentagon:22000,ultraPolygon:45000},N1={square:18,triangle:22,pentagon:30,bigPentagon:80,crasher:16,mediumTriangle:22,mediumSquare:24,largeSquare:17,largeTriangle:21,alphaPentagon:52,hexagon:90,heptagon:105,octagon:122,decagon:142,megaPentagon:175,ultraPolygon:225},B1={square:8,triangle:12,pentagon:18,bigPentagon:60,crasher:22,mediumTriangle:14,mediumSquare:10,largeSquare:13,largeTriangle:18,alphaPentagon:40,hexagon:70,heptagon:88,octagon:108,decagon:130,megaPentagon:160,ultraPolygon:210},q1=["healthRegen","maxHealth","bodyDamage","bulletSpeed","bulletDamage","reload","movementSpeed"],j1={healthRegen:"Регенерация",maxHealth:"Здоровье",bodyDamage:"Урон корпусом",bulletSpeed:"Скорость пуль",bulletDamage:"Урон пуль",reload:"Скорострельность",movementSpeed:"Скорость"},W0=25,Y1=22,xc=195,G1=2.2,X1=8,C1=24,L1=1,Q1=22,q0=80,Wn=240,Z1=500,V1=12,w1=60,K1=600,k0=3600,j0=1800,el=(i,h,o,s,T,v,E,B)=>({angleOffset:i,length:h,width:o,reloadMultiplier:s,bulletSizeMultiplier:T,bulletSpeedMultiplier:v,bulletDamageMultiplier:E>1?1+(E-1)*0.65:E,...B!==void 0?{spread:B}:{}}),_t={Basic:{name:"Basic",requiredLevel:1,upgradesFrom:[],color:"#00b2e1",description:"Один ствол. Классическое начало.",barrels:[el(0,45,14,1,1,1,1)]},Sniper:{name:"Sniper",requiredLevel:15,radiusMultiplier:1.12,upgradesFrom:["Basic"],color:"#45b84e",description:"Дальняя точная стрельба — один мощный снаряд.",barrels:[el(0,62,13,2.4,.8,1.9,1.5)]},MachineGun:{name:"MachineGun",requiredLevel:15,radiusMultiplier:1.12,upgradesFrom:["Basic"],color:"#e88018",description:"Очень высокая скорострельность, средний урон.",barrels:[el(0,46,18,.6,1.1,.9,.7)]},FlankGuard:{name:"FlankGuard",requiredLevel:15,radiusMultiplier:1.12,upgradesFrom:["Assault"],color:"#9050c0",description:"Стрельба спереди и сзади — защита флангов.",barrels:[el(0,45,14,1,1,1,1),el(Math.PI,40,12,1,.9,1,.9)]},Assassin:{name:"Assassin",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["Sniper"],color:"#3aaa58",description:"Снайпер-убийца — огромная дальность, высокий урон.",barrels:[el(0,78,13,3.2,.75,2.3,2)]},Hunter:{name:"Hunter",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["Sniper"],color:"#2898c4",description:"Два ствола разного калибра — ближний и дальний.",barrels:[el(0,64,13,2.9,.75,2.1,1.8),el(0,47,19,2.2,1,1.4,1.2)]},Stalker:{name:"Stalker",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["Sniper"],color:"#4aa87c",description:"Тройной веерный снайпер — широкое покрытие.",barrels:[el(-.08,70,9,2.6,.75,2.0,1.6),el(0,65,12,2,.8,1.5,1.5),el(.08,70,9,2,.75,1.55,1.6)]},Gunner:{name:"Gunner",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["MachineGun"],color:"#e09020",description:"Двойной пулемёт — узкие быстрые стволы.",barrels:[el(0,46,10,.45,.7,1,.6,undefined,-7),el(0,46,10,.45,.7,1,.6,undefined,7)]},Sprayer:{name:"Sprayer",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["MachineGun"],color:"#d06010",description:"Хаотичный широкий поток пуль с разлётом.",barrels:[el(0,50,20,.48,1.05,.85,.6,.12)]},TripleShot:{name:"TripleShot",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["MachineGun"],color:"#c8a018",description:"Три пули одновременно в широком конусе.",barrels:[el(0,46,14,1.5,.9,1,.9),el(-.35,41,14,1.5,.9,1,.9),el(.35,41,14,1.5,.9,1,.9)]},Twin:{name:"Twin",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["FlankGuard"],color:"#8038c0",description:"Два параллельных ствола — вдвое больше пуль.",barrels:[el(0,45,13,.75,.85,1,.85,undefined,-8),el(0,45,13,.75,.85,1,.85,undefined,8)]},QuadTank:{name:"QuadTank",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["FlankGuard"],color:"#6428b0",description:"Четыре ствола — стрельба во все стороны.",barrels:[0,1,2,3].map(i=>el(i*Math.PI/2,45,14,1.2,.9,1,.9))},Smasher:{name:"Smasher",requiredLevel:30,upgradesFrom:["FlankGuard"],color:"#5c7080",description:"Без стволов — таранит всё на своём пути.",barrels:[],noBarrels:!0,bodyDamageMultiplier:5,radiusMultiplier:1.4},Ranger:{name:"Ranger",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Assassin"],color:"#22aa66",description:"Ультра-снайпер — максимальная дальность и урон.",barrels:[el(0,95,13,5.2,.6,3.5,2.8)]},Annihilator:{name:"Annihilator",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Assassin"],color:"#cc2200",description:"Один колоссальный снаряд — уничтожает всё.",barrels:[el(0,58,30,3,2.6,.8,3.2)]},Streamliner:{name:"Streamliner",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Hunter"],color:"#22b478",description:"5 стволов в ряд — непрерывный шквал пуль.",barrels:[30,37,44,51,58].map((i,h)=>el(0,i,Math.max(12,16-h),.22,.65,1.2,.55))},Booster:{name:"Booster",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Gunner"],color:"#c03030",description:"Реактивные задние стволы — скорость и шквал.",barrels:[el(0,53,14,1,1,1,1),el(Math.PI,40,12,.6,.8,1.1,.8,undefined,-10),el(Math.PI,40,12,.6,.8,1.1,.8,undefined,10),el(Math.PI,42,12,.5,.8,1.2,.9)]},PentaShot:{name:"PentaShot",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Sprayer"],color:"#c8b200",description:"Пять стволов в широком веере — массированный огонь.",barrels:[-.52,-.26,0,.26,.52].map(i=>el(i,41,12,1.1,.85,.9,.85))},OctoTank:{name:"OctoTank",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Gunner"],color:"#c07000",description:"8 стволов — покрывает все 360 градусов.",barrels:[0,1,2,3,4,5,6,7].map(i=>el(i*Math.PI/4,41,12,1.8,.8,.95,.75))},TripleTwin:{name:"TripleTwin",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Twin"],color:"#7838c0",description:"Три пары стволов — спереди и по обоим бокам.",barrels:[el(0,45,12,.8,.85,1,.85,undefined,-8),el(0,45,12,.8,.85,1,.85,undefined,8),el(Math.PI*2/3,42,12,.8,.85,1,.85,undefined,-8),el(Math.PI*2/3,42,12,.8,.85,1,.85,undefined,8),el(Math.PI*4/3,42,12,.8,.85,1,.85,undefined,-8),el(Math.PI*4/3,42,12,.8,.85,1,.85,undefined,8)]},Destroyer:{name:"Destroyer",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Twin"],color:"#a82030",description:"Один огромный снаряд — взрывная мощь.",barrels:[el(0,52,30,4,2.5,.65,3.5)]},AutoSmasher:{name:"AutoSmasher",requiredLevel:45,upgradesFrom:["QuadTank"],color:"#5840a0",description:"Таран + автоматическая стрельба по кругу.",barrels:[0,1,2].map(i=>el(i*Math.PI*2/3,32,11,1.1,.9,1,.85)),bodyDamageMultiplier:4,radiusMultiplier:1.3},Predator:{name:"Predator",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Assassin"],color:"#2a7a2a",description:"Две пушки — большая и малая, сверхдальний обстрел.",barrels:[el(0,78,13,3.6,1.8,2.8,1.3),el(0,58,18,1.6,1.3,1.6,1.6)]},Overtrapper:{name:"Overtrapper",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Hunter"],color:"#c040c0",description:"Передняя пушка и два боковых ловушечника.",barrels:[el(0,52,14,1.2,1.1,1.2,1),{...el(2.5,34,12,0.8,0.8,1,1.3),isTrap:!0},{...el(-2.5,34,12,0.8,0.8,1,1.3),isTrap:!0}]},Skimmer:{name:"Skimmer",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Hunter"],color:"#40a0e0",description:"Два угловых ствола — рикошетирующий огонь.",barrels:[el(0.28,62,12,2.9,1.3,2.1,1.4),el(-0.28,62,12,2.2,1.3,1.6,1.4)]},Landmine:{name:"Landmine",requiredLevel:45,upgradesFrom:["Stalker"],color:"#505050",description:"Без стволов — невидим, огромный урон корпусом.",barrels:[],noBarrels:!0,bodyDamageMultiplier:7,radiusMultiplier:1.2},Fighter:{name:"Fighter",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Stalker"],color:"#e06020",description:"Передний ствол и два боковых — тройная атака.",barrels:[el(0,54,14,1.3,1.2,1.3,1),el(Math.PI/2,36,11,0.9,0.9,1,1.3),el(-Math.PI/2,36,11,0.9,0.9,1,1.3)]},Rocketeer:{name:"Rocketeer",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Stalker"],color:"#c04020",description:"Один огромный медленный снаряд — ракетная атака.",barrels:[el(0,58,28,0.45,3.5,2.5,2.2)]},GunnerTrapper:{name:"GunnerTrapper",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Gunner"],color:"#20a080",description:"Два передних и один широкий задний ствол.",barrels:[el(0,47,10,0.35,0.7,1,0.65,undefined,-7),el(0,47,10,0.35,0.7,1,0.65,undefined,7),el(Math.PI,42,21,1.6,1.6,1.6,2)]},Hurricane:{name:"Hurricane",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Sprayer"],color:"#6020b0",description:"Шесть стволов — спиральный поток пуль.",barrels:[el(0,40,12,1,1,1,1.2),el(0.16,38,10,1,0.9,0.9,1.2),el(2.09,40,12,1,1,1,1.2),el(2.25,38,10,1,0.9,0.9,1.2),el(-2.09,40,12,1,1,1,1.2),el(-2.25,38,10,1,0.9,0.9,1.2)]},MoreGun:{name:"MoreGun",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Sprayer"],color:"#d07018",description:"Четыре параллельных ствола — шквал пуль.",barrels:[el(0,52,14,0.4,0.8,1,0.7,undefined,-21),el(0,52,14,0.4,0.8,1,0.7,undefined,-7),el(0,52,14,0.4,0.8,1,0.7,undefined,7),el(0,52,14,0.4,0.8,1,0.7,undefined,21)]},Spreadshot:{name:"Spreadshot",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["TripleShot"],color:"#c8a000",description:"Семь стволов — максимально широкий веер.",barrels:[el(0,46,14,1,1,1,0.9),el(0.5,42,12,1,0.9,0.9,1),el(-0.5,42,12,1,0.9,0.9,1),el(0.9,38,11,1,0.8,0.8,1.1),el(-0.9,38,11,1,0.8,0.8,1.1),el(1.2,34,10,1,0.7,0.7,1.2),el(-1.2,34,10,1,0.7,0.7,1.2)]},TriAngle:{name:"TriAngle",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["TripleShot"],color:"#60c020",description:"Один вперёд, два назад — тяга и атака.",barrels:[el(0,52,14,1.2,1.1,1.2,1),el(2.4,38,12,0.9,0.9,1,1.2),el(-2.4,38,12,0.9,0.9,1,1.2)]},BentHybrid:{name:"BentHybrid",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["TripleShot"],color:"#4060c0",description:"Три угловых ствола — диагональная стрельба.",barrels:[el(0,50,16,1,1.2,1.2,1.2),el(0.7,43,12,0.85,1,1,1.3),el(-0.7,43,12,0.85,1,1,1.3)]},TwinFlank:{name:"TwinFlank",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Twin"],color:"#b05820",description:"Два спереди и два сзади — полная защита флангов.",barrels:[el(0,48,14,1,1,1,1,undefined,-8),el(0,45,12,1,0.9,0.9,1.1,undefined,8),el(Math.PI,46,14,1,1,1,1,undefined,-8),el(Math.PI,43,12,1,0.9,0.9,1.1,undefined,8)]},Fortress:{name:"Fortress",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["QuadTank"],color:"#5070a0",description:"Шесть равномерных стволов — круговая осада.",barrels:[el(0,43,12,1,0.9,1,1.2),el(Math.PI/3,43,12,1,0.9,1,1.2),el(2*Math.PI/3,43,12,1,0.9,1,1.2),el(Math.PI,43,12,1,0.9,1,1.2),el(4*Math.PI/3,43,12,1,0.9,1,1.2),el(5*Math.PI/3,43,12,1,0.9,1,1.2)]},Battleship:{name:"Battleship",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["QuadTank"],color:"#203080",description:"Четыре тяжёлых орудия — линкор поля боя.",barrels:[el(0,52,15,1.3,1.3,1.4,1.2),el(Math.PI/2,44,11,1,0.9,1,1.3),el(-Math.PI/2,44,11,1,0.9,1,1.3),el(Math.PI,50,15,1.2,1.2,1.3,1.2)]},Spike:{name:"Spike",requiredLevel:45,upgradesFrom:["Smasher"],color:"#c01818",description:"Шипы во все стороны — экстремальный урон корпусом.",barrels:[],noBarrels:!0,bodyDamageMultiplier:10,radiusMultiplier:1.35},MegaSmasher:{name:"MegaSmasher",requiredLevel:45,upgradesFrom:["Smasher"],color:"#484848",description:"Гигантский корпус — максимальная броня и таран.",barrels:[],noBarrels:!0,bodyDamageMultiplier:6,radiusMultiplier:1.6},Auto3:{name:"Auto3",requiredLevel:45,upgradesFrom:["Smasher"],color:"#808020",description:"Три авто-пушки по кругу — корпус+стрельба.",barrels:[0,1,2].map(i=>el(i*Math.PI*2/3,44,13,1.1,1,1.1,1.2)),bodyDamageMultiplier:2.5,radiusMultiplier:1.15},Scout:{name:"Scout",requiredLevel:15,upgradesFrom:["Basic"],color:"#20c8a0",description:"Маленький быстрый разведчик — слабые пули, высокая скорость.",barrels:[el(0,38,9,1.2,0.9,1.4,0.7)],radiusMultiplier:0.82},Cannon:{name:"Cannon",requiredLevel:15,radiusMultiplier:1.12,upgradesFrom:["Skirmisher"],color:"#c05020",description:"Один толстый ствол — медленная, но огромная пуля.",barrels:[el(0,45,22,0.6,1.4,0.7,2.2)]},Ninja:{name:"Ninja",requiredLevel:30,upgradesFrom:["Scout"],color:"#188860",description:"Невидим стоя — резкий снайперский выстрел из засады.",barrels:[el(0,65,10,1.6,0.75,1.5,1.8)]},ScoutGhost:{name:"ScoutGhost",requiredLevel:30,upgradesFrom:["Scout"],color:"#607080",description:"Полная невидимость — не стреляет, только таранит.",barrels:[],noBarrels:!0,bodyDamageMultiplier:6,radiusMultiplier:1.1},Drone:{name:"Drone",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["Scout"],color:"#2878c8",description:"Запускает 3 самонаводящихся дрона-снаряда.",barrels:[el(0,32,8,0.8,1.2,1.1,0.7),el(2.09,32,8,0.8,1.2,1.1,0.7),el(-2.09,32,8,0.8,1.2,1.1,0.7)]},Artillery:{name:"Artillery",requiredLevel:30,radiusMultiplier:1.25,upgradesFrom:["Cannon"],color:"#b84010",description:"Взрывная пуля в точке попадания — широкий урон.",barrels:[el(0,50,20,0.5,1.3,0.75,2.5)]},Railgun:{name:"Railgun",requiredLevel:30,upgradesFrom:["Cannon"],color:"#3060d0",description:"Мгновенная пуля-луч — длинная, точная, мощная.",barrels:[el(0,80,8,2.0,0.7,2.0,1.8)]},Siege:{name:"Siege",requiredLevel:30,upgradesFrom:["Cannon"],color:"#806040",description:"Скорость −40%, урон ×2.5 — тяжёлый бронированный корпус.",barrels:[el(0,48,28,0.4,1.6,0.6,3.5)],radiusMultiplier:1.3},Phantom:{name:"Phantom",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Ninja"],color:"#10a870",description:"Невидим в движении — пули тоже прозрачны.",barrels:[el(0,75,8,1.8,0.65,1.8,2.2)]},Ambusher:{name:"Ambusher",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Ninja"],color:"#208848",description:"+200% урон первого выстрела из невидимости — смертельная засада.",barrels:[el(0,68,12,1.5,0.75,1.6,3.0)]},Spy:{name:"Spy",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Ninja"],color:"#28a060",description:"Проходит сквозь NPC без урона — шпионаж и обход.",barrels:[el(0,52,12,1.3,0.9,1.4,1.4),el(Math.PI/2,32,9,0.9,0.8,1.1,1.1)]},Specter:{name:"Specter",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["ScoutGhost"],color:"#4a6070",description:"Пули проходят сквозь него когда невидим.",barrels:[el(0,55,12,1.4,0.85,1.3,1.5),el(-0.2,52,10,1.2,0.8,1.2,1.3)]},RamX:{name:"RamX",requiredLevel:45,upgradesFrom:["ScoutGhost"],color:"#903010",description:"Таранит всё вокруг в радиусе — взрывной удар.",barrels:[],noBarrels:!0,bodyDamageMultiplier:10,radiusMultiplier:1.4},Mine:{name:"Mine",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["ScoutGhost"],color:"#505870",description:"Оставляет позади мины при движении.",barrels:[el(Math.PI,40,18,0.6,1.1,1.3,1.2)]},Swarm:{name:"Swarm",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Drone"],color:"#1868b8",description:"5 дронов одновременно — рой самонаводящихся снарядов.",barrels:[0,1,2,3,4].map(i=>el(i*Math.PI*2/5,28,7,0.6,1.3,1.1,0.65))},Guardian:{name:"Guardian",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Drone"],color:"#2858a8",description:"Дроны защищают танк по кругу.",barrels:[0,1,2,3].map(i=>el(i*Math.PI/2,30,8,0.8,1.2,1,0.7))},HunterDrone:{name:"HunterDrone",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Drone"],color:"#1848a0",description:"Дроны телепортируются к цели — точная охота.",barrels:[el(-0.15,55,9,1.2,1,1.5,1.1),el(0,60,10,1.4,0.9,1.4,1.3),el(0.15,55,9,1.2,1,1.5,1.1)]},Howitzer:{name:"Howitzer",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Artillery"],color:"#a03008",description:"Двойной взрыв, рикошетирует — максимальный площадной урон.",barrels:[el(0,50,22,0.45,1.5,0.7,2.8),el(0.4,30,12,0.7,1.2,0.95,1.0),el(-0.4,30,12,0.7,1.2,0.95,1.0)]},Cassette:{name:"Cassette",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Artillery"],color:"#b03010",description:"Пуля в точке делится на 5 маленьких — кассетная бомба.",barrels:[el(0,52,18,0.4,1.4,0.75,2.5),el(0.5,30,10,0.9,0.95,0.8,0.8),el(-0.5,30,10,0.9,0.95,0.8,0.8)]},Mortar:{name:"Mortar",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Artillery"],color:"#c04018",description:"Пуля летит по дуге, ускоряясь — непрямой огонь.",barrels:[el(0.2,58,18,0.45,1.4,0.7,2.6),el(-0.2,58,18,0.45,1.4,0.7,2.6)]},Plasma:{name:"Plasma",requiredLevel:45,upgradesFrom:["Railgun"],color:"#2050c8",isPiercing:true,description:"Луч пробивает всех насквозь — сквозной урон.",barrels:[el(0,90,7,2.5,0.65,2.5,2.0)]},EMPTank:{name:"EMPTank",requiredLevel:45,upgradesFrom:["Railgun"],color:"#3060c0",description:"Удар замедляет и оглушает врага на 2 секунды.",barrels:[el(0,70,12,2.0,0.6,1.8,2.2)],radiusMultiplier:1.2},DualRailgun:{name:"DualRailgun",requiredLevel:45,radiusMultiplier:1.38,upgradesFrom:["Railgun"],color:"#2048b0",description:"Два луча с разносом 0.3 сек — двойной рейлган.",barrels:[el(0,80,7,2.0,0.65,2.0,1.8,undefined,-6),el(0,80,7,2.0,0.65,2.0,1.8,undefined,6)]},Citadel:{name:"Citadel",requiredLevel:45,upgradesFrom:["Siege"],color:"#704830",description:"Неподвижная крепость — 6 стволов по кругу.",barrels:[0,1,2,3,4,5].map(i=>el(i*Math.PI/3,38,12,1.0,0.9,1.0,1.1)),radiusMultiplier:1.4},Bunker:{name:"Bunker",requiredLevel:45,upgradesFrom:["Siege"],color:"#806038",description:"3 толстых ствола конусом — огромная отдача и урон.",barrels:[el(-0.25,50,22,0.4,1.5,0.7,2.8),el(0,52,24,0.38,1.5,0.68,3.0),el(0.25,50,22,0.4,1.5,0.7,2.8)],radiusMultiplier:1.3},Tower:{name:"Tower",requiredLevel:45,upgradesFrom:["Siege"],color:"#706040",description:"3 снаряда-спутника вращаются вокруг танка.",barrels:[el(0,35,10,0.9,1.1,1.1,1.0),el(2.09,35,10,0.9,1.1,1.1,1.0),el(-2.09,35,10,0.9,1.1,1.1,1.0)],radiusMultiplier:1.2},Shotgun:{name:"Shotgun",requiredLevel:15,upgradesFrom:["Skirmisher"],color:"#d06830",description:"Залп из 7 дробин в конусе 55° — ближний бой, высокий суммарный урон за залп.",barrels:[el(0,37.8,16,1.05,0.75,1.35,0.84),el(0.16,32.4,12,1.05,0.72,1.35,0.66),el(-0.16,32.4,12,1.05,0.72,1.35,0.66),el(0.33,25.2,10,1.05,0.68,1.35,0.51),el(-0.33,25.2,10,1.05,0.68,1.35,0.51),el(0.52,18,8,1.05,0.63,1.35,0.39),el(-0.52,18,8,1.05,0.63,1.35,0.39)],radiusMultiplier:1.15},Blaster:{name:"Blaster",requiredLevel:30,upgradesFrom:["Shotgun"],color:"#e05020",description:"9 дробин в конусе 70° — максимальный разброс, огромный ближний урон.",barrels:[el(0,34.2,18,1.05,0.7,1.4,0.9),el(0.15,29.7,14,1.05,0.67,1.4,0.69),el(-0.15,29.7,14,1.05,0.67,1.4,0.69),el(0.30,24.3,11,1.05,0.63,1.4,0.552),el(-0.30,24.3,11,1.05,0.63,1.4,0.552),el(0.46,18,9,1.05,0.59,1.4,0.432),el(-0.46,18,9,1.05,0.59,1.4,0.432),el(0.63,12.6,7,1.05,0.54,1.4,0.324),el(-0.63,12.6,7,1.05,0.54,1.4,0.324)],radiusMultiplier:1.2},Buster:{name:"Buster",requiredLevel:30,upgradesFrom:["Shotgun"],color:"#c07020",description:"3 тяжёлых снаряда в узком конусе — фокусированный дробовой удар.",barrels:[el(0,45,22,1.05,0.72,1.5,1.44),el(0.20,36,16,1.05,0.7,1.5,1.02),el(-0.20,36,16,1.05,0.7,1.5,1.02)],radiusMultiplier:1.25},Riot:{name:"Riot",requiredLevel:30,upgradesFrom:["Shotgun"],color:"#a03010",description:"3 дробины в 4 диагональных направления — покрывает 360° вокруг танка.",barrels:[el(Math.PI/4,27,11,1.05,0.7,1.2,0.57),el(Math.PI/4+0.22,22.5,9,1.05,0.67,1.2,0.45),el(Math.PI/4-0.22,22.5,9,1.05,0.67,1.2,0.45),el(3*Math.PI/4,27,11,1.05,0.7,1.2,0.57),el(3*Math.PI/4+0.22,22.5,9,1.05,0.67,1.2,0.45),el(3*Math.PI/4-0.22,22.5,9,1.05,0.67,1.2,0.45),el(-3*Math.PI/4,27,11,1.05,0.7,1.2,0.57),el(-3*Math.PI/4+0.22,22.5,9,1.05,0.67,1.2,0.45),el(-3*Math.PI/4-0.22,22.5,9,1.05,0.67,1.2,0.45),el(-Math.PI/4,27,11,1.05,0.7,1.2,0.57),el(-Math.PI/4+0.22,22.5,9,1.05,0.67,1.2,0.45),el(-Math.PI/4-0.22,22.5,9,1.05,0.67,1.2,0.45)],radiusMultiplier:1.2},Dreadnought:{name:"Dreadnought",requiredLevel:15,upgradesFrom:["Basic"],color:"#607880",description:"Один огромный ствол — медленный тяжёлый снаряд с колоссальным уроном.",barrels:[el(0,54,28,3.8,0.55,1.65,3.0)],radiusMultiplier:1.35,bodyDamageMultiplier:2},Colossus:{name:"Colossus",requiredLevel:30,upgradesFrom:["Dreadnought"],color:"#405060",description:"Абсолютно колоссальный ствол — наивысший разовый урон в T3.",barrels:[el(0,58,38,5.2,0.44,1.9,5.2)],radiusMultiplier:1.6,bodyDamageMultiplier:3},Cruiser:{name:"Cruiser",requiredLevel:30,upgradesFrom:["Dreadnought"],color:"#5070a0",description:"Два тяжёлых ствола в шахмат — устойчивый двойной тяжёлый огонь.",barrels:[el(-0.08,52,24,3.5,0.54,1.45,2.8),el(0.08,52,24,4.8,0.54,1.45,2.8)],radiusMultiplier:1.5,bodyDamageMultiplier:2},Brawler:{name:"Brawler",requiredLevel:30,upgradesFrom:["Dreadnought"],color:"#708040",description:"Средний ствол + высокий урон корпусом — стреляет и таранит.",barrels:[el(0,50,22,3.0,0.62,1.35,2.2)],bodyDamageMultiplier:6,radiusMultiplier:1.45}};function J1(i,h){return Object.values(_t).filter(o=>o.requiredLevel<=h&&o.upgradesFrom.includes(i)&&o.name!==i).map(o=>o.name)}const W1={Basic:"Базовый",Sniper:"Снайпер",MachineGun:"Пулемёт",FlankGuard:"Флангер",Assassin:"Ассасин",Hunter:"Охотник",Stalker:"Сталкер",Gunner:"Стрелок",Sprayer:"Распылитель",TripleShot:"Тройной",Twin:"Двойной",QuadTank:"Квад-Танк",Smasher:"Крушитель",Ranger:"Рейнджер",Annihilator:"Аннигилятор",Streamliner:"Поточник",Booster:"Ускоритель",PentaShot:"Пента",OctoTank:"Окто-Танк",TripleTwin:"Трой-Двойной",Destroyer:"Разрушитель",AutoSmasher:"Авто-Таран",Predator:"Хищник",Overtrapper:"Ловушечник",Skimmer:"Рикошет",Landmine:"Мина",Fighter:"Боец",Rocketeer:"Ракетчик",GunnerTrapper:"Стрелок-Ловушка",Hurricane:"Ураган",MoreGun:"Шквал-4",Spreadshot:"Веер",TriAngle:"Треугольник",BentHybrid:"Гибрид",TwinFlank:"Двойной-Фланг",Fortress:"Крепость",Battleship:"Линкор",Spike:"Шип",MegaSmasher:"Мега-Таран",Auto3:"Авто-3",Scout:"Разведчик",Cannon:"Пушкарь",Ninja:"Ниндзя",ScoutGhost:"Призрак",Drone:"Дрон",Artillery:"Артиллерия",Railgun:"Рейлган",Siege:"Осадник",Phantom:"Фантом",Ambusher:"Засадник",Spy:"Шпион",Specter:"Спектр",RamX:"Таран-X",Mine:"Минёр",Swarm:"Рой",Guardian:"Страж",HunterDrone:"Охотник-Дрон",Howitzer:"Гаубица",Cassette:"Кассета",Mortar:"Миномёт",Plasma:"Плазма",EMPTank:"ЭМП",DualRailgun:"Двойной Рейлган",Citadel:"Цитадель",Bunker:"Бункер",Tower:"Башня",Assault:"Штурмовик",Skirmisher:"Застрельщик",Warlord:"Военачальник",Engineer:"Инженер",Defender:"Защитник",Overseer:"Наблюдатель",Architect:"Архитектор",Commander:"Командир",Protector:"Протектор",Stronghold:"Твердыня",Rampart:"Бастион",Overlord:"Повелитель",Manager:"Менеджер",Necromancer:"Некромант",Warden:"Смотритель",Outpost:"Аванпост",Marshal:"Маршал",Vanguard:"Авангард",Golem:"Голем",Paragon:"Образец",Phalanx:"Фаланга",Garrison:"Гарнизон",Redoubt:"Редут",Bulkhead:"Переборка"};function Dc(i){return W1[i]||i}let k1=1;function _c(){return String(k1++)}function Yl(i,h){return Math.random()*(h-i)+i}function Pn(i,h){const o=i.x-h.x,s=i.y-h.y;return Math.sqrt(o*o+s*s)}function $n(i){const h=Math.sqrt(i.x*i.x+i.y*i.y);return h===0?{x:0,y:0}:{x:i.x/h,y:i.y/h}}function Ae(i,h,o){return Math.max(h,Math.min(o,i))}function $0(){return{healthRegen:0,maxHealth:0,bodyDamage:0,bulletSpeed:0,bulletPenetration:0,bulletDamage:0,reload:0,movementSpeed:0}}function $1(){return{id:"player",pos:{x:Ul/2,y:Ul/2},vel:{x:0,y:0},angle:0,radius:W0,health:xc,maxHealth:xc,level:1,xp:0,totalXp:0,xpToNext:Uu(2),stats:$0(),statPoints:0,className:"Basic",isPlayer:!0,name:"Player",color:"#00b2e1",reloadTimers:[0],damagedTimer:0,regenTimer:0,score:0,aiState:"wander",aiTarget:"",aiWanderTimer:0,aiWanderAngle:0,aiType:"basic",isBoss:!1}}const Y0=(window._GAME_BOT_NAMES&&window._GAME_BOT_NAMES.length>0)?window._GAME_BOT_NAMES:["Shadow","Viper","Storm","Blaze","Frost","Phantom","Nova","Raven","Wolf","Titan","Ghost","Cobra","Reaper","Blade","Surge","Thunder","Phoenix","Ninja","Omega","Zephyr","Orion","Knight","Ace","Fury","Chaos","Призрак","Тень","Буря","Огонь","Мороз","Вихрь","Гром","Ворон","Волк","Сокол","Дракон","Стрела","Клинок","Меч","Охотник","Воин","Рыцарь","Страж","Быстрый","Сильный","Мститель","Победа","Честь","Илья","Руслан"];function Ac(i=!1,_farmer=!1){const s={x:Yl(300,Ul-300),y:Yl(300,Ul-300)},T=_farmer?1:i?45:Math.floor(Math.random()<.06?Yl(55,60):Math.random()<.128?Yl(35,54):Math.random()<.244?Yl(25,34):Math.random()<.452?Yl(12,24):Yl(1,11)),v=i?"boss":(()=>{const sniperClasses=["Sniper","Assassin","Hunter","Stalker","Ranger","Predator","Overtrapper","Skimmer","RangerAlpha","RangerOmega","RangerPrime","PredatorAlpha","PredatorOmega","PredatorPrime","StreamlinerAlpha","StreamlinerOmega","StreamlinerPrime","OvertrapperAlpha","OvertrapperOmega","OvertrapperPrime","SkimmerAlpha","SkimmerOmega","SkimmerPrime"];const rusherClasses=["MachineGun","Gunner","Sprayer","Twin","QuadTank","GunnerTrapper","MoreGun","TriAngle","BoosterAlpha","BoosterOmega","BoosterPrime","GunnerTrapperAlpha","GunnerTrapperOmega","GunnerTrapperPrime","MoreGunAlpha","MoreGunOmega","MoreGunPrime","TriAngleAlpha","TriAngleOmega","TriAnglePrime"];const flankerClasses=["FlankGuard","TripleTwin","TripleShot","PentaShot","OctoTank","Hurricane","Spreadshot","BentHybrid","TwinFlank","Fortress","Battleship","Auto3","Fighter","OctoTankAlpha","OctoTankOmega","OctoTankPrime","HurricaneAlpha","HurricaneOmega","HurricanePrime","SpreadshotAlpha","SpreadshotOmega","SpreadshotPrime","BentHybridAlpha","BentHybridOmega","BentHybridPrime","TripleTwinAlpha","TripleTwinOmega","TripleTwinPrime","TwinFlankAlpha","TwinFlankOmega","TwinFlankPrime","FortressAlpha","FortressOmega","FortressPrime","BattleshipAlpha","BattleshipOmega","BattleshipPrime","Auto3Alpha","Auto3Omega","Auto3Prime","FighterAlpha","FighterOmega","FighterPrime","PentaShotAlpha","PentaShotOmega","PentaShotPrime"];const smasherClasses=["Smasher","AutoSmasher","Landmine","Spike","MegaSmasher","LandmineAlpha","LandmineOmega","LandminePrime","AutoSmasherAlpha","AutoSmasherOmega","AutoSmasherPrime","SpikeAlpha","SpikeOmega","SpikePrime","MegaSmasherAlpha","MegaSmasherOmega","MegaSmasherPrime"];const E_tmp=i?["Annihilator"]:T>=45?["RangerAlpha","RangerOmega","RangerPrime","AnnihilatorAlpha","AnnihilatorOmega","AnnihilatorPrime","PredatorAlpha","PredatorOmega","PredatorPrime","StreamlinerAlpha","StreamlinerOmega","StreamlinerPrime","OvertrapperAlpha","OvertrapperOmega","OvertrapperPrime","SkimmerAlpha","SkimmerOmega","SkimmerPrime","LandmineAlpha","LandmineOmega","LandminePrime","FighterAlpha","FighterOmega","FighterPrime","RocketeerAlpha","RocketeerOmega","RocketeerPrime","BoosterAlpha","BoosterOmega","BoosterPrime","OctoTankAlpha","OctoTankOmega","OctoTankPrime","GunnerTrapperAlpha","GunnerTrapperOmega","GunnerTrapperPrime","PentaShotAlpha","PentaShotOmega","PentaShotPrime","HurricaneAlpha","HurricaneOmega","HurricanePrime","MoreGunAlpha","MoreGunOmega","MoreGunPrime","SpreadshotAlpha","SpreadshotOmega","SpreadshotPrime","TriAngleAlpha","TriAngleOmega","TriAnglePrime","BentHybridAlpha","BentHybridOmega","BentHybridPrime","TripleTwinAlpha","TripleTwinOmega","TripleTwinPrime","DestroyerAlpha","DestroyerOmega","DestroyerPrime","TwinFlankAlpha","TwinFlankOmega","TwinFlankPrime","AutoSmasherAlpha","AutoSmasherOmega","AutoSmasherPrime","FortressAlpha","FortressOmega","FortressPrime","BattleshipAlpha","BattleshipOmega","BattleshipPrime","SpikeAlpha","SpikeOmega","SpikePrime","MegaSmasherAlpha","MegaSmasherOmega","MegaSmasherPrime","Auto3Alpha","Auto3Omega","Auto3Prime"]:T>=30?["Ranger","Annihilator","Predator","Streamliner","Overtrapper","Skimmer","Landmine","Fighter","Rocketeer","Booster","OctoTank","GunnerTrapper","PentaShot","Hurricane","MoreGun","Spreadshot","TriAngle","BentHybrid","TripleTwin","Destroyer","TwinFlank","AutoSmasher","Fortress","Battleship","Spike","MegaSmasher","Auto3"]:T>=15?["Sniper","MachineGun","FlankGuard","Assassin","Hunter","Stalker","Gunner","Sprayer","TripleShot","Twin","QuadTank","Smasher"]:["Basic"];const cls=E_tmp[Math.floor(Math.random()*E_tmp.length)];if(sniperClasses.includes(cls))return"sniper";if(rusherClasses.includes(cls))return"rusher";if(flankerClasses.includes(cls))return"flanker";if(smasherClasses.includes(cls))return"smasher";return"basic"})(),E=i?["Annihilator","Booster","Ranger","Streamliner","OctoTank","Destroyer","AutoSmasher"]:T>=30?["Ranger","Annihilator","Predator","Streamliner","Overtrapper","Skimmer","Landmine","Fighter","Rocketeer","Booster","OctoTank","GunnerTrapper","PentaShot","Hurricane","MoreGun","Spreadshot","TriAngle","BentHybrid","TripleTwin","Destroyer","TwinFlank","AutoSmasher","Fortress","Battleship","Spike","MegaSmasher","Auto3"]:T>=15?["Sniper","MachineGun","FlankGuard","Assassin","Hunter","Stalker","Gunner","Sprayer","TripleShot","Twin","QuadTank","Smasher"]:["Basic"],B=E[Math.floor(Math.random()*E.length)],z=_t[B],p=Math.round((xc+T*2)*(z&&z.isDroneShooter?0.833:1)*[1,1.3,1.7,2.2,2.8,3.4][Math.min(5,Math.floor(T/10))]),d=$0(),U=Math.floor(T*.7),H=Object.keys(d);for(let k=0;k<U;k++){const L=H[Math.floor(Math.random()*H.length)];d[L]<Fn&&d[L]++}const _npcName=Y0[Math.floor(Math.random()*Y0.length)];const _isSpecial=_npcName==="White Devil"||_npcName==="SeraGON";return{id:_c(),pos:s,vel:{x:0,y:0},angle:Yl(0,Math.PI*2),radius:Y1*(z.radiusMultiplier||1),health:p,maxHealth:p,level:T,xp:_farmer?0:Math.floor(Yl(0,Uu(T+1))),totalXp:(function(){var _s=0;for(var _i=2;_i<=T;_i++)_s+=Math.floor(500*Math.pow(1.085,_i-1));return _s+(_farmer?0:Math.floor(Yl(0,Uu(T+1))));}()),xpToNext:Uu(T+1),stats:d,statPoints:0,className:_farmer?"Basic":B,isPlayer:!1,name:_npcName,color:z.color,reloadTimers:(z&&z.barrels||[]).map(()=>0),damagedTimer:0,regenTimer:0,score:Math.round(500*(Math.pow(1.085,T>1?T-1:0)-1)/0.085),berserker:Math.random()<.4,aiState:"wander",aiTarget:"",aiWanderTimer:0,aiWanderAngle:Yl(0,Math.PI*2),aiType:(_t[B]&&_t[B].noBarrels?"smasher":v),isBoss:!1,isFarmer:!1,_shapeFarmer:_isSpecial||(!_farmer&&Math.random()<0.5),_xpMult:_isSpecial?2:1,_shapeSkipChance:_isSpecial?0.45:0}}function Ru(i){if(i==='legendShape'){var _lsp={x:Yl(200,Ul-200),y:Yl(200,Ul-200)};return{id:_c(),pos:_lsp,vel:{x:0,y:0},angle:Yl(0,Math.PI*2),rotationSpeed:Yl(-.02,.02),type:'legendShape',health:10,maxHealth:10,radius:N1['hexagon']/2,xpValue:100000,damage:5,isAggressive:false,damagedTimer:0};}const h=["square","square","square","square","square","square","mediumTriangle","mediumTriangle","mediumTriangle","mediumSquare","mediumSquare","triangle","triangle","triangle","pentagon","pentagon","largeSquare","largeSquare","crasher","largeTriangle","hugeSquare","hugeSquare","hugeTriangle","titanSquare","titanTriangle"],o=i||h[Math.floor(Math.random()*h.length)];let s;s={x:Yl(200,Ul-200),y:Yl(200,Ul-200)};const T=o==="crasher"?Yl(.6,1.2):o==="triangle"?Yl(.3,.8):o==="alphaPentagon"||o==="ultraPolygon"?Yl(0,.04):o==="megaPentagon"||o==="decagon"?Yl(0,.07):o==="octagon"||o==="heptagon"?Yl(0,.10):o==="hexagon"?Yl(0,.12):o==="hugeSquare"?Yl(0,.13):o==="hugeTriangle"?Yl(.3,.7):o==="titanSquare"?Yl(0,.11):o==="titanTriangle"?Yl(.25,.6):o==="colossusSquare"?Yl(0,.09):o==="colossusTriangle"?Yl(.2,.5):o==="behemothSquare"?Yl(0,.07):o==="behemothTriangle"?Yl(.15,.45):o==="legendSquare"?Yl(0,.06):o==="legendTriangle"?Yl(.1,.4):Yl(0,.15),v=Yl(0,Math.PI*2);return{id:_c(),pos:s,vel:{x:Math.cos(v)*T,y:Math.sin(v)*T},angle:Yl(0,Math.PI*2),rotationSpeed:Yl(-.02,.02),type:o,health:B0[o],maxHealth:B0[o],radius:N1[o],xpValue:H1[o],damage:B1[o],isAggressive:o==="triangle"||o==="crasher"||o==="hugeTriangle"||o==="titanTriangle"||o==="colossusTriangle"||o==="behemothTriangle"||o==="legendTriangle",damagedTimer:0}}function G0(Jm=!1,_gm="classic"){const i=[];for(let s=0;s<320;s++)i.push(Ru());for(let s=0;s<20;s++)i.push(Ru("pentagon"));for(let s=0;s<10;s++)i.push(Ru("bigPentagon"));for(let s=0;s<18;s++)i.push(Ru("alphaPentagon"));for(let s=0;s<10;s++)i.push(Ru("crasher"));for(let s=0;s<7;s++)i.push(Ru("hexagon"));for(let s=0;s<5;s++)i.push(Ru("heptagon"));for(let s=0;s<4;s++)i.push(Ru("octagon"));for(let s=0;s<3;s++)i.push(Ru("decagon"));for(let s=0;s<2;s++)i.push(Ru("megaPentagon"));i.push(Ru("ultraPolygon"));const h=[];for(let s=0;s<16;s++)h.push(Ac(!1));const o=$1();if(Jm){const half=Math.ceil(h.length/2);h.slice(0,half).forEach(n=>{n.team="blue"});h.slice(half).forEach(n=>{n.team="red"});o.team="blue"}if(_gm==="horde")h.length=0;if(_gm==="domination")h.forEach((n,_ri)=>{n.domRole=_ri%5<2?"defender":_ri%5<4?"capturer":"hunter";});if(_gm==="zombie"&&h.length>0){const _zc=Math.min(3,h.length);for(let _zi=0;_zi<_zc;_zi++){h[_zi].isZombie=!0;h[_zi].color="#22ff55";h[_zi].aiType="rusher";}}if(_gm==="sniper"){const _sc=_t["Sniper"];if(_sc){o.className="Sniper";o.color=_sc.color;o.reloadTimers=[0];}const _sniperClasses=["Sniper","Assassin","Hunter","Stalker","Ranger","Predator"];h.forEach(n=>{const _cls=_sniperClasses[Math.floor(Math.random()*_sniperClasses.length)];const _cd=_t[_cls];if(_cd){n.className=_cls;n.color=_cd.color;n.reloadTimers=_cd.barrels.map(()=>0);}n.stats.movementSpeed=Math.min(10,n.stats.movementSpeed+4);n.aiType="guard";});}return{player:o,npcs:h,shapes:i,bullets:[],particles:[],camera:{x:o.pos.x,y:o.pos.y},gameTime:0,phase:"menu",leaderboard:F0(o,h),nextShapeSpawnTimer:0,shapeZones:Array.from({length:8},()=>({x:Yl(1e3,Ul-1e3),y:Yl(1e3,Ul-1e3),dx:(Math.random()-.5)*.4,dy:(Math.random()-.5)*.4})),nextNpcSpawnTimer:0,kills:0,showUpgradeClass:!1,availableClasses:[],classUnlockNotifs:[],lastDamageTime:-9999,bossTimer:k0,teamMode:Jm,teamScore:{blue:0,red:0},gameMode:_gm,zoneRadius:_gm==="survival"?Ul*.45:Ul*2,zoneX:Ul/2,zoneY:Ul/2,capturePoints:_gm==="domination"?[{x:2400,y:2400,team:null,prog:0,id:"A"},{x:Ul/2,y:Ul/2,team:null,prog:0,id:"B"},{x:Ul-2400,y:Ul-2400,team:null,prog:0,id:"C"}]:[],domScore:{player:0,npc:0},waveNumber:0,waveTimer:30000,zombieTimer:_gm==="zombie"?180000:0}}function F0(i,h){const o=h.map(s=>({name:s.name,score:s.totalXp||0,level:s.level,isPlayer:!1}));return o.push({name:i.name,score:i.totalXp||0,level:i.level,isPlayer:!0}),o.sort((s,T)=>T.score-s.score),o}function P0(i){return G1*Math.pow(1.07,i.stats.movementSpeed)}function In(i){const _cm=_t[i.className];const _tm=[1,1.3,1.7,2.2,2.8,3.4][Math.min(5,Math.floor(i.level/10))];return (xc+i.level*2)*Math.pow(1.10,i.stats.maxHealth)*(_cm&&_cm.isDroneShooter?0.833:1)*_tm}function F1(i){return X1*Math.pow(1.05,i.stats.bulletSpeed)}function P1(i){return C1*Math.pow(1.12,i.stats.bulletDamage)}function I1(i){return L1*Math.pow(1.20,i.stats.bulletPenetration)}function ly(i,h){return Math.max(5,Q1*h/Math.pow(1.08,i.stats.reload))}function Ec(i,h,o){const s=_t[i.className];if(s.noBarrels||h>=s.barrels.length)return null;const T=s.barrels[h],v=T.spread?(Math.random()-.5)*2*T.spread:0,_sniperMiss=!i.isPlayer&&i.aiType==="sniper"&&Math.random()<0.6?(Math.random()<0.5?1:-1)*(0.08+Math.random()*0.10):0,E=o+T.angleOffset+v+_sniperMiss,B=i.pos.x+Math.cos(E)*T.length,z=i.pos.y+Math.sin(E)*T.length,p=F1(i)*T.bulletSpeedMultiplier,d=P1(i)*T.bulletDamageMultiplier*0.78*(!i.isPlayer&&i.aiType==="sniper"?0.333:1),U=7*T.bulletSizeMultiplier;const _isDrn=!!((_t[i.className]&&_t[i.className].isDroneShooter));return i.reloadTimers[h]=ly(i,T.reloadMultiplier),T.isTrap?{id:_c(),pos:{x:B,y:z},vel:{x:Math.cos(E)*p*.22,y:Math.sin(E)*p*.22},radius:U*1.6,damage:d*1.65,penetration:999,ownerId:i.id,isNpc:!i.isPlayer,allyTeam:i.team||null,isTrap:!0,health:Math.round(i.maxHealth*.1),maxHealth:Math.round(i.maxHealth*.1),color:i.color||"#e8a000",lifetime:q0*5,maxLifetime:q0*5}:{id:_c(),pos:{x:B,y:z},vel:{x:Math.cos(E)*(_isDrn?.88:(_t[i.className]&&_t[i.className].isRocket)?.25:1)*p,y:Math.sin(E)*(_isDrn?.88:(_t[i.className]&&_t[i.className].isRocket)?.25:1)*p},radius:U*(_isDrn?1.15:1),damage:d*(_isDrn?0.5:(!i.isPlayer?(i.name==="White Devil"||i.name==="SeraGON")?1.034:1:1)),penetration:_isDrn?(_t[i.className]?.droneHits||8):(_t[i.className]&&_t[i.className].isPiercing?999:I1(i)),ownerId:i.id,isNpc:!i.isPlayer,allyTeam:i.team||null,color:i.color,lifetime:Math.round(q0*(_t[i.className]&&_t[i.className].bulletLifeMultiplier||1)),maxLifetime:Math.round(q0*(_t[i.className]&&_t[i.className].bulletLifeMultiplier||1)),isHoming:!!((_t[i.className]&&_t[i.className].isHoming)),isDrone:_isDrn,_bdm:_isDrn?T.bulletDamageMultiplier:void 0,isLaser:!!((_t[i.className]&&_t[i.className].isLaser)),isRocket:!!((_t[i.className]&&_t[i.className].isRocket)),isSplitting:!!((_t[i.className]&&_t[i.className].isSplitting))}}function X0(i){if(i.pos.x=Ae(i.pos.x+i.vel.x,i.radius,Ul-i.radius),i.pos.y=Ae(i.pos.y+i.vel.y,i.radius,Ul-i.radius),i.vel.x*=.85,i.vel.y*=.85,i.damagedTimer>0&&i.damagedTimer--,i.regenTimer>0)i.regenTimer--;else{const h=.04*Math.pow(1.12,i.stats.healthRegen);i.health<i.maxHealth&&(i.health=Math.min(i.maxHealth,i.health+h))}for(let h=0;h<i.reloadTimers.length;h++)i.reloadTimers[h]>0&&i.reloadTimers[h]--;if(!i.isPlayer&&i._targetAngle!==undefined){let _ad=i._targetAngle-i.angle;while(_ad>Math.PI)_ad-=Math.PI*2;while(_ad<-Math.PI)_ad+=Math.PI*2;i.angle+=_ad*0.12;}}function ty(i,h){let o=null;for(const s of h)if(!s.isNpc){const T=s.pos.x-i.pos.x,v=s.pos.y-i.pos.y,E=Math.sqrt(T*T+v*v);if(E<180){const B=s.vel.x,z=s.vel.y;T*B+v*z<0&&(!o||E<o.dist)&&(o={bullet:s,dist:E})}}if(o){const s=o.bullet.vel.x,T=o.bullet.vel.y,v=Math.sqrt(s*s+T*T);return{x:-T/v,y:s/v}}return null}function ey(i,h){let o=null,s=1/0;for(const T of h){const v=Pn(i.pos,T.pos);v<s&&(s=v,o=T)}return s<600?o:null}function ay(i,h,o,s){if(i.team==="blue"){const spd=P0(i),Tb=_t[i.className];let tgt=null,md=Infinity;for(const n of o.npcs)if(n.team!=="blue"&&n.id!==i.id){const dd=Pn(i.pos,n.pos);dd<md&&(md=dd,tgt=n)}if(tgt&&md<900){const dir=$n({x:tgt.pos.x-i.pos.x,y:tgt.pos.y-i.pos.y});i.vel.x+=dir.x*spd*.3,i.vel.y+=dir.y*spd*.3,i._targetAngle=Math.atan2(dir.y,dir.x);if(md<500&&!Tb.noBarrels)for(let K=0;K<Tb.barrels.length;K++)if(i.reloadTimers[K]<=0){const sl=Ec(i,K,i.angle);sl&&s.push(sl)}}else{i.aiWanderTimer=Math.max(0,(i.aiWanderTimer||0)-1);i.aiWanderTimer<=0&&(i.aiWanderTimer=Math.floor(Yl(80,200)),i.aiWanderAngle=Yl(0,Math.PI*2));i.vel.x+=Math.cos(i.aiWanderAngle||0)*spd*.2,i.vel.y+=Math.sin(i.aiWanderAngle||0)*spd*.2,i._targetAngle=i.aiWanderAngle||0}return}if(!i.isZombie){let _nd=Pn(i.pos,h.pos);for(const _n of o.npcs)if(_n.id!==i.id){const _dd=Pn(i.pos,_n.pos);if(_dd<_nd){_nd=_dd;h=_n;}}}const T=_t[i.className],v=P0(i),E=Pn(i.pos,h.pos),_plInv=(h===o&&_t[o.className]&&_t[o.className].isInvis),B=(_plInv?.5:1)*(i.aiType==="sniper"?400:i.aiType==="rusher"?650:i.aiType==="flanker"?600:i.aiType==="smasher"?700:550),z=i.aiType==="smasher"?0.08:i.aiType==="sniper"?0.35:i.aiType==="rusher"?0.2:.25;i.aiWanderTimer||(i.aiWanderTimer=0),i.aiWanderTimer=Math.max(0,i.aiWanderTimer-1);const p=ty(i,o.bullets);if(i.health<i.maxHealth*z&&!i.berserker?i.aiState="flee":E<B?i.aiState="chase":i.aiState="wander",p&&(i.vel.x+=p.x*v*.25,i.vel.y+=p.y*v*.25),i.aiState==="flee"){const H=$n({x:i.pos.x-h.pos.x,y:i.pos.y-h.pos.y});i.vel.x+=H.x*v*.45,i.vel.y+=H.y*v*.45,i._targetAngle=Math.atan2(-H.y,-H.x)}else if(i.aiState==="chase"){const H=$n({x:h.pos.x-i.pos.x,y:h.pos.y-i.pos.y}),k=Math.atan2(H.y,H.x);if(i.aiType==="sniper"){const L=160+Math.sin(o.gameTime*.008+i.aiWanderAngle)*30;E<L-30?(i.vel.x-=H.x*v*.3,i.vel.y-=H.y*v*.3):E>L+30&&(i.vel.x+=H.x*v*.25,i.vel.y+=H.y*v*.25);const K=Math.sin(o.gameTime*.03+i.aiWanderAngle)*v*.35;i.vel.x+=-H.y*K,i.vel.y+=H.x*K,i._targetAngle=k}else if(i.aiType==="rusher"){const targetDist=120+Math.abs(Math.sin(i.aiWanderAngle))*60;E>targetDist+20?(i.vel.x+=H.x*v*.5,i.vel.y+=H.y*v*.5):E<targetDist-20&&(i.vel.x-=H.x*v*.3,i.vel.y-=H.y*v*.3);const strafe=Math.sin(o.gameTime*.04+i.aiWanderAngle)*v*.3;i.vel.x+=-H.y*strafe,i.vel.y+=H.x*strafe;i._targetAngle=k}else if(i.aiType==="flanker"){const orbitDist=280+Math.sin(i.aiWanderAngle)*80;E>orbitDist+40?(i.vel.x+=H.x*v*.35,i.vel.y+=H.y*v*.35):E<orbitDist-40&&(i.vel.x-=H.x*v*.3,i.vel.y-=H.y*v*.3);const orbitDir=Math.sign(Math.sin(i.aiWanderAngle+i.id.charCodeAt(0)));const orbit=v*.55*orbitDir;i.vel.x+=-H.y*orbit,i.vel.y+=H.x*orbit;i._targetAngle=k}else if(i.aiType==="smasher"){i.vel.x+=H.x*v*.7,i.vel.y+=H.y*v*.7;i._targetAngle=k}else{if(T.noBarrels||(T.bodyDamageMultiplier&&T.bodyDamageMultiplier>1)){i.vel.x+=H.x*v*.8,i.vel.y+=H.y*v*.8,i._targetAngle=k;}else{const L=o.gameTime*.02+i.aiWanderAngle,K=Math.sin(L)*v*.4,sl=250+Math.abs(Math.sin(i.aiWanderAngle))*100;E>sl+30?(i.vel.x+=H.x*v*.3,i.vel.y+=H.y*v*.3):E<sl-30?(i.vel.x-=H.x*v*.2,i.vel.y-=H.y*v*.2):(i.vel.x+=H.x*v*.6,i.vel.y+=H.y*v*.6),i.vel.x+=-H.y*K,i.vel.y+=H.x*K,i._targetAngle=k;}}if(!T.noBarrels){const L=i.aiType==="sniper"?220:i.aiType==="rusher"?200:i.aiType==="flanker"?320:i.aiType==="smasher"&&!(T.barrels&&T.barrels.length)?0:480;if(E<L){for(let K=0;K<T.barrels.length;K++)if(i.reloadTimers[K]<=0){const sl=Ec(i,K,i.angle);sl&&s.push(sl)}}}}else{if(i.aiWanderTimer<=0){i.aiWanderTimer=Math.floor(i.isFarmer&&i.level<15?Yl(40,100):Yl(80,220));i.aiWanderAngle=Yl(0,Math.PI*2);}i.vel.x+=Math.cos(i.aiWanderAngle)*v*(i.isFarmer&&i.level<15?.35:.22),i.vel.y+=Math.sin(i.aiWanderAngle)*v*(i.isFarmer&&i.level<15?.35:.22),i._targetAngle=i.aiWanderAngle;if(!T.noBarrels){const H=ey(i,o.shapes);if(H){const _fd=Pn(i.pos,H.pos);const _farmerRange=i.isFarmer&&i.level<15?800:i._shapeFarmer?600:500;const k=$n({x:H.pos.x-i.pos.x,y:H.pos.y-i.pos.y});if(i._targetAngle=Math.atan2(k.y,k.x),i.isFarmer&&i.level<15){i.vel.x+=k.x*v*.3;i.vel.y+=k.y*v*.3;}else if(i._shapeFarmer){i.vel.x+=k.x*v*.12;i.vel.y+=k.y*v*.12;}if(_fd<_farmerRange&&(!i._shapeSkipChance||Math.random()>i._shapeSkipChance)){for(let K=0;K<T.barrels.length;K++)if(i.reloadTimers[K]<=0){const sl=Ec(i,K,i.angle);sl&&s.push(sl)}}}}}const d=v*1.8,U=Math.sqrt(i.vel.x*i.vel.x+i.vel.y*i.vel.y);U>d&&(i.vel.x=i.vel.x/U*d,i.vel.y=i.vel.y/U*d)}function xe(i,h,o,s,T,v){const E=i-s,B=h-T;return E*E+B*B<(o+v)*(o+v)}function kn(i,h){const o=i.pos.x-h.pos.x,s=i.pos.y-h.pos.y,T=Math.sqrt(o*o+s*s)||.001,v=i.radius+h.radius-T;if(v>0){const E=o/T,B=s/T;const _mI=(i.radius||20)*(i.radius||20),_mH=(h.radius||20)*(h.radius||20),_mt=_mI+_mH,_fi=_mH/_mt,_fh=_mI/_mt;i.vel.x+=E*v*.6*_fi,i.vel.y+=B*v*.6*_fi,h.vel.x-=E*v*.6*_fh,h.vel.y-=B*v*.6*_fh;if(h.rotationSpeed!==undefined){const _t=E*(i.vel.y-h.vel.y)-B*(i.vel.x-h.vel.x);const _hI=((h.radius||20)/20)*((h.radius||20)/20);h.rotationSpeed=Math.max(-0.32,Math.min(0.32,h.rotationSpeed+_t*0.014*_fh/_hI))}if(i.rotationSpeed!==undefined){const _t=E*(h.vel.y-i.vel.y)-B*(h.vel.x-i.vel.x);const _iI=((i.radius||20)/20)*((i.radius||20)/20);i.rotationSpeed=Math.max(-0.18,Math.min(0.18,i.rotationSpeed+_t*0.004*_fi/_iI))}}}function uy(i){i.level=Math.min(i.level+1,Ra),i.xp-=i.xpToNext,i.xpToNext=Uu(i.level+1),i.isPlayer&&(["healthRegen","maxHealth","bodyDamage","bulletSpeed","bulletDamage","reload","movementSpeed"].some(k=>i.stats[k]<Fn))&&i.statPoints++,i.maxHealth=In(i),i.health=Math.min(i.health+15,i.maxHealth)}function ny(i,h){i.statPoints<=0||i.stats[h]>=Fn||(i.stats[h]++,i.statPoints--,i.maxHealth=In(i))}function iy(i,h){const o=i.player,s=_t[h];o.className=h,o.color=s.color,o.reloadTimers=Array((s.barrels||[]).length).fill(0),s.radiusMultiplier&&(o.radius=W0*s.radiusMultiplier),o.stats=$0(),o.statPoints=0,o.maxHealth=In(o),o.health=Math.min(o.health,o.maxHealth),i.showUpgradeClass=!1,i.availableClasses=[],i.bullets=i.bullets.filter(b=>!(b.isDrone&&b.ownerId===o.id))}const Vp={Sniper:1,SniperAlpha:1,SniperOmega:1,SniperPrime:1,Assassin:1.5,AssassinAlpha:1.5,AssassinOmega:1.5,AssassinPrime:1.5,Hunter:.9,HunterAlpha:.9,HunterOmega:.9,HunterPrime:.9,Ranger:1.2,RangerAlpha:1.2,RangerOmega:1.2,RangerPrime:1.2,Stalker:1.3,StalkerAlpha:1.3,StalkerOmega:1.3,StalkerPrime:1.3,Predator:1.4,PredatorAlpha:1.4,PredatorOmega:1.4,PredatorPrime:1.4,Destroyer:2.8,DestroyerAlpha:2.8,DestroyerOmega:2.8,DestroyerPrime:2.8,Annihilator:3.2,AnnihilatorAlpha:3.2,AnnihilatorOmega:3.2,AnnihilatorPrime:3.2};function Kp(x,y,col,n=4){const r=[];for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,sp=.6+Math.random()*1.8;r.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:16+Math.floor(Math.random()*12),maxLife:28,color:col,r:1.5+Math.random()*2})}return r}let _aggrSCache=[],_aggrSTimer=0;function fy(i,h,_dt){_dt=_dt||16.7;if(i.phase!=="playing")return i;i.gameTime++;i._realMs=(i._realMs||0)+_dt;i.classUnlockNotifs=i.classUnlockNotifs?i.classUnlockNotifs.map(n=>({...n,timer:n.timer-1})).filter(n=>n.timer>0):[];const o=i.player;let s=[],T=_t[o.className],v=P0(o)*(i.gameMode==="sniper"?1.3:1);if(h.moveX!==0||h.moveY!==0){const d=Math.sqrt(h.moveX*h.moveX+h.moveY*h.moveY);o.vel.x+=h.moveX/d*v*.3,o.vel.y+=h.moveY/d*v*.3}const E=Math.sqrt(o.vel.x*o.vel.x+o.vel.y*o.vel.y);if(E>v*1.5&&(o.vel.x*=v*1.5/E,o.vel.y*=v*1.5/E),(h.aimX!==0||h.aimY!==0)&&(o.angle=Math.atan2(h.aimY,h.aimX)),h.shooting&&!T.noBarrels){for(let d=0;d<T.barrels.length;d++)if(o.reloadTimers[d]<=0){const U=Ec(o,d,o.angle);U&&(s.push(U),Vp[o.className]&&(o.vel.x-=Math.cos(o.angle)*Vp[o.className],o.vel.y-=Math.sin(o.angle)*Vp[o.className]))}}X0(o);for(const d of i.npcs)ay(d,o,i,s),X0(d);for(const d of i.shapes){if(d.isAggressive){let _at=o,_ad=Pn(d.pos,o.pos);for(const _n of i.npcs){const _dd=Pn(d.pos,_n.pos);if(_dd<_ad){_ad=_dd;_at=_n;}}if(_ad<500){const U=$n({x:_at.pos.x-d.pos.x,y:_at.pos.y-d.pos.y});d.vel.x+=U.x*.18,d.vel.y+=U.y*.18}}d.pos.x=Ae(d.pos.x+d.vel.x,d.radius,Ul-d.radius),d.pos.y=Ae(d.pos.y+d.vel.y,d.radius,Ul-d.radius),d.vel.x*=.98,d.vel.y*=.98,d.angle+=d.rotationSpeed,d.rotationSpeed*=.997,d.damagedTimer>0&&d.damagedTimer--};{if(++_aggrSTimer>=8){_aggrSTimer=0;_aggrSCache=i.shapes.filter(_s=>_s.isAggressive);}const _aggrS=_aggrSCache;for(const _nc of i.npcs){let _nrS=null,_nrD=400;for(const _sa of _aggrS){const _dsa=Math.hypot(_sa.pos.x-_nc.pos.x,_sa.pos.y-_nc.pos.y);if(_dsa<_nrD){_nrD=_dsa;_nrS=_sa;}}if(_nrS){const _dx=_nrS.pos.x-_nc.pos.x,_dy=_nrS.pos.y-_nc.pos.y;const _dd=Math.hypot(_dx,_dy)||1;_nc.vel.x+=(_dx/_dd)*.5;_nc.vel.y+=(_dy/_dd)*.5;_nc.angle=Math.atan2(_dy,_dx);}}}{const _sh=i.shapes,_sn=_sh.length;for(let _si=0;_si<_sn;_si++){const _a=_sh[_si];for(let _sj=_si+1;_sj<_sn;_sj++){const _b=_sh[_sj],_dx=_b.pos.x-_a.pos.x,_dy=_b.pos.y-_a.pos.y,_md=_a.radius+_b.radius;if(Math.abs(_dx)>2000||Math.abs(_dy)>2000)continue;if(_dx>_md||_dx<-_md||_dy>_md||_dy<-_md)continue;const _d2=_dx*_dx+_dy*_dy;if(_d2<_md*_md&&_d2>0){const _d=Math.sqrt(_d2),_ov=(_md-_d)*.5,_nx=_dx/_d,_ny=_dy/_d;_a.pos.x-=_nx*_ov;_a.pos.y-=_ny*_ov;_b.pos.x+=_nx*_ov;_b.pos.y+=_ny*_ov;const _ma=_a.radius*_a.radius,_mb=_b.radius*_b.radius,_mtt=_ma+_mb,_fa=_mb/_mtt,_fb=_ma/_mtt;_a.vel.x-=_nx*.2*_fa;_a.vel.y-=_ny*.2*_fa;_b.vel.x+=_nx*.2*_fb;_b.vel.y+=_ny*.2*_fb;const _st=_nx*(_a.vel.y-_b.vel.y)-_ny*(_a.vel.x-_b.vel.x);const _ia=((_a.radius||20)/20)*((_a.radius||20)/20),_ib=((_b.radius||20)/20)*((_b.radius||20)/20);_a.rotationSpeed=Math.max(-0.32,Math.min(0.32,_a.rotationSpeed+_st*0.010*_fa/_ia));_b.rotationSpeed=Math.max(-0.32,Math.min(0.32,_b.rotationSpeed-_st*0.010*_fb/_ib));}}}}for(const d of i.bullets){d.pos.x+=d.vel.x,d.pos.y+=d.vel.y,d.lifetime--;d.isTrap&&(d.vel.x*=.76,d.vel.y*=.76);if(d.isHoming&&d.lifetime>0){d._ht2=(d._ht2||0)-1;if(d._ht2<=0){d._ht2=6;let _ht=null,_hd=Infinity;const _htar=d.isNpc?[i.player,...i.npcs.filter(n=>n&&n.team!==d.allyTeam)]:[...i.npcs];for(const _he of _htar){if(!_he||_he.id===d.ownerId)continue;const _dx=_he.pos.x-d.pos.x,_dy=_he.pos.y-d.pos.y,_dd=_dx*_dx+_dy*_dy;if(_dd<_hd){_hd=_dd;_ht=_he;}}if(!_ht){for(const _hs of i.shapes){if(!_hs)continue;const _dx=_hs.pos.x-d.pos.x,_dy=_hs.pos.y-d.pos.y,_dd=_dx*_dx+_dy*_dy;if(_dd<_hd){_hd=_dd;_ht=_hs;}}}if(_ht&&_hd<500*500){d._htc=_ht;}else{d._htc=null;}}const _ht=d._htc;if(_ht&&_ht.health>0){const _dx=_ht.pos.x-d.pos.x,_dy=_ht.pos.y-d.pos.y,_dd=Math.sqrt(_dx*_dx+_dy*_dy)||1;const _sp=Math.sqrt(d.vel.x*d.vel.x+d.vel.y*d.vel.y);d.vel.x=d.vel.x*0.86+(_dx/_dd)*_sp*0.14;d.vel.y=d.vel.y*0.86+(_dy/_dd)*_sp*0.14;const _ns=Math.sqrt(d.vel.x*d.vel.x+d.vel.y*d.vel.y);if(_ns>0.01){d.vel.x=d.vel.x/_ns*_sp;d.vel.y=d.vel.y/_ns*_sp;}}}if(d.isDrone&&d.lifetime>0){const _dow=d.isNpc?i.npcs.find(n=>n.id===d.ownerId):i.player;if(!_dow||_dow.health<=0){d.lifetime=0;}else{d.lifetime=Math.max(d.lifetime,200);if(!d.isNpc&&_dow){d.damage=P1(_dow)*(d._bdm||1)*0.78*0.65;}d._tt=(d._tt||0)-1;if(d._tt<=0){d._tt=8;let _dt=null,_dd2=Infinity;const _dts=d.isNpc?[i.player,...i.npcs.filter(n=>n&&n.id!==d.ownerId&&(!d.allyTeam||n.team!==d.allyTeam))]:i.npcs;for(const _de of _dts){if(!_de)continue;const _dx=_de.pos.x-d.pos.x,_dy=_de.pos.y-d.pos.y,_dd=_dx*_dx+_dy*_dy;if(_dd<_dd2){_dd2=_dd;_dt=_de;}}d._tc=(_dt&&_dd2<360*360)?_dt:null;}const _dt=d._tc;if(_dt&&_dt.health>0){const _dx=_dt.pos.x-d.pos.x,_dy=_dt.pos.y-d.pos.y,_dn=Math.sqrt(_dx*_dx+_dy*_dy);const _sp=Math.sqrt(d.vel.x*d.vel.x+d.vel.y*d.vel.y)||4;d.vel.x=d.vel.x*.75+(_dx/_dn)*_sp*.25;d.vel.y=d.vel.y*.75+(_dy/_dn)*_sp*.25;}else{if(!d._orbAngle)d._orbAngle=Math.atan2(d.pos.y-_dow.pos.y,d.pos.x-_dow.pos.x);d._orbAngle+=0.022;const _orbR=65;const _tx=_dow.pos.x+Math.cos(d._orbAngle)*_orbR;const _ty=_dow.pos.y+Math.sin(d._orbAngle)*_orbR;const _ox=_tx-d.pos.x,_oy=_ty-d.pos.y;const _od=Math.sqrt(_ox*_ox+_oy*_oy)||.001;const _spd=Math.min(_od*.28,5.5);d.vel.x=d.vel.x*.55+(_ox/_od)*_spd*.45;d.vel.y=d.vel.y*.55+(_oy/_od)*_spd*.45;}if(d.pos.x<60){d.vel.x=Math.abs(d.vel.x);}if(d.pos.x>Ul-60){d.vel.x=-Math.abs(d.vel.x);}if(d.pos.y<60){d.vel.y=Math.abs(d.vel.y);}if(d.pos.y>Ul-60){d.vel.y=-Math.abs(d.vel.y);}}}d._dcd=(d._dcd||1)-1;}if(s.length>0&&s[0].isDrone){const _ownId=s[0].ownerId;const _maxDr=(function(){const _ownEnt=(i.player&&i.player.id===_ownId)?i.player:i.npcs.find(n=>n.id===_ownId);const _ownCls=_ownEnt?_ownEnt.className:"";const _dmx={Drone:6,Swarm:12,Guardian:8,HunterDrone:6,Overseer:8,Overlord:16,Manager:8,Commander:10,Necromancer:12,Outpost:16,Marshal:16,Vanguard:6,Engineer:8,ScoutGhost:4};return _dmx[_ownCls]||(_t[_ownCls]?.barrels?.length||4);})();const _curDr=i.bullets.filter(b=>b.isDrone&&b.ownerId===_ownId).length;if(_curDr>=_maxDr)s=[];}i.bullets.push(...s);(function(){if(s&&s.length){for(var _spi=0;_spi<s.length;_spi++){var _spb=s[_spi];if(_spb.isSplitting){window._activeSplitBullets=window._activeSplitBullets||{};window._activeSplitBullets[_spb.id]={px:_spb.pos.x,py:_spb.pos.y,vx:_spb.vel.x,vy:_spb.vel.y,r:_spb.radius,dmg:_spb.damage,life:_spb.lifetime,isNpc:_spb.isNpc,team:_spb.allyTeam,col:_spb.color,age:0,splitAt:Math.floor(_spb.lifetime*0.42)};}}}}());const B=new Set,z=new Set,p=new Set;const _CS=2000,_SG={},_NG={},_TG={};const _gk=(x,y)=>((x/_CS|0)+"_"+(y/_CS|0));const _gna=(g,x,y)=>{const cx=x/_CS|0,cy=y/_CS|0,r=[];for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){const a=g[(cx+dx)+"_"+(cy+dy)];if(a)for(const _e of a)r.push(_e);}return r;};for(const U of i.shapes){if(z.has(U.id))continue;const _sk=_gk(U.pos.x,U.pos.y);(_SG[_sk]||(_SG[_sk]=[])).push(U);}for(const U of i.npcs){if(p.has(U.id))continue;const _nk=_gk(U.pos.x,U.pos.y);(_NG[_nk]||(_NG[_nk]=[])).push(U);}for(const _tt of i.bullets){if(_tt.isTrap&&!B.has(_tt.id)){const _tk=_gk(_tt.pos.x,_tt.pos.y);(_TG[_tk]||(_TG[_tk]=[])).push(_tt);}}for(const d of i.bullets){if(d.lifetime<=0||(d.pos.x<0||d.pos.x>Ul||d.pos.y<0||d.pos.y>Ul)){if(d.isDrone){const _dow=d.isNpc?i.npcs.find(n=>n.id===d.ownerId):i.player;if(_dow&&_dow.health>0){d.pos.x=_dow.pos.x+(Math.random()-.5)*50;d.pos.y=_dow.pos.y+(Math.random()-.5)*50;d.vel.x=(Math.random()-.5)*2;d.vel.y=(Math.random()-.5)*2;d.lifetime=999;d._dcd=10;continue;}}B.add(d.id);continue}if(!d.isTrap){for(const _tr of _gna(_TG,d.pos.x,d.pos.y)){if(!_tr.isTrap||B.has(_tr.id)||(_tr.allyTeam&&_tr.allyTeam===d.allyTeam))continue;if(xe(d.pos.x,d.pos.y,d.radius,_tr.pos.x,_tr.pos.y,_tr.radius)){_tr.health-=d.damage;_tr.health<=0&&B.add(_tr.id);d.penetration--;d.penetration<=0&&B.add(d.id);break;}}}if(d.isNpc&&(!i.teamMode||d.allyTeam!=="blue"))xe(d.pos.x,d.pos.y,d.radius,o.pos.x,o.pos.y,o.radius)&&(o.health-=d.damage,o.damagedTimer=8,o.regenTimer=Wn,i.lastDamageTime=i.gameTime,d.penetration--,d.penetration<=0&&B.add(d.id));else{for(const U of _gna(_SG,d.pos.x,d.pos.y))if(!z.has(U.id)&&xe(d.pos.x,d.pos.y,d.radius,U.pos.x,U.pos.y,U.radius)){if(!d.isDrone||(d._dcd||0)<=0){if(d.isDrone){d._dcd=20;d.penetration--;d.penetration<=0&&B.add(d.id);}else{d.penetration--;d.penetration<=0&&B.add(d.id);}U.health-=d.damage,U.damagedTimer=8,U.health<=0&&(z.add(U.id),o.xp+=U.xpValue,o.totalXp+=U.xpValue,o.score+=U.xpValue,i.particles.push(...Kp(U.pos.x,U.pos.y,(C0[U.type]||C0.square).fill)));}break}for(const U of _gna(_NG,d.pos.x,d.pos.y))if(!p.has(U.id)&&(!i.teamMode||U.team!=="blue")&&xe(d.pos.x,d.pos.y,d.radius,U.pos.x,U.pos.y,U.radius)){if(!d.isDrone||(d._dcd||0)<=0){if(d.isDrone){d._dcd=20;d.penetration--;d.penetration<=0&&B.add(d.id);}else{d.penetration--;d.penetration<=0&&B.add(d.id);}U.health-=d.damage,U.damagedTimer=8,U.regenTimer=Wn;if(U.health<=0){p.add(U.id),i.particles.push(...Kp(U.pos.x,U.pos.y,U.color,5));const H=Math.max(100,Math.floor(U.xp*0.60));if(d.isNpc){const _bk=i.npcs.find(k=>k.id===d.ownerId);_bk&&(_bk.xp+=H*(_bk._xpMult||1),_bk.totalXp+=H*(_bk._xpMult||1),_bk.score+=H*2);}else{o.xp+=H;o.totalXp+=H;o.score+=H*2;i.kills++;i.teamMode&&i.teamScore&&i.teamScore.blue++;}}}break}}}for(const d of i.bullets)if(!(!d.isNpc||B.has(d.id))){for(const U of _gna(_SG,d.pos.x,d.pos.y))if(!z.has(U.id)&&xe(d.pos.x,d.pos.y,d.radius,U.pos.x,U.pos.y,U.radius)){if(U.health-=d.damage*.5,U.damagedTimer=4,d.penetration--,d.penetration<=0&&B.add(d.id),U.health<=0){z.add(U.id),i.particles.push(...Kp(U.pos.x,U.pos.y,(C0[U.type]||C0.square).fill));const H=i.npcs.find(k=>k.id===d.ownerId);H&&(H.xp+=U.xpValue,H.totalXp+=U.xpValue,H.score+=U.xpValue)}break}}for(const d of i.bullets)if(d.isNpc&&!B.has(d.id)){for(const U of _gna(_NG,d.pos.x,d.pos.y))if(!p.has(U.id)&&U.id!==d.ownerId&&!(i.teamMode&&d.allyTeam&&d.allyTeam===U.team)&&xe(d.pos.x,d.pos.y,d.radius,U.pos.x,U.pos.y,U.radius)){U.health-=d.damage*.7;U.damagedTimer=8;U.regenTimer=Wn;d.penetration--;d.penetration<=0&&B.add(d.id);if(U.health<=0){p.add(U.id);i.particles.push(...Kp(U.pos.x,U.pos.y,U.color,5));const _kn=i.npcs.find(k=>k.id===d.ownerId);if(_kn){_kn.xp+=Math.max(100,Math.floor(U.xp*0.60));_kn.totalXp+=Math.max(100,Math.floor(U.xp*0.60));_kn.score+=Math.max(200,Math.floor(U.xp*0.7));}}break;}}if(window._splitQueue&&window._splitQueue.length>0){var _sq=window._splitQueue.splice(0);for(var _sqi=0;_sqi<_sq.length;_sqi++){var _sqb=_sq[_sqi];if(!B.has(_sqb.id))i.bullets.push(_sqb);}}i.bullets=i.bullets.filter(d=>!B.has(d.id)),i.shapes=i.shapes.filter(d=>!z.has(d.id)),i.teamMode&&i.teamMode&&i.teamScore&&(i.teamScore.blue>=50&&i.phase==="playing"&&(i.phase="won"),i.teamScore.red>=50&&i.phase==="playing"&&(i.phase="dead"));i.teamScore&&i.npcs.forEach(d=>{if(p.has(d.id)){if(d.team==="blue")i.teamScore.red++;if(d.team){i._teamQ=i._teamQ||[];i._teamQ.push(d.team);}}}),i.npcs=i.npcs.filter(d=>!p.has(d.id));for(const d of i.npcs)for(;d.xp>=d.xpToNext&&d.level<Ra;){d.level=Math.min(d.level+1,Ra);d.xp-=d.xpToNext;d.xpToNext=Uu(d.level+1);d.maxHealth=In(d);const _sk=Object.keys(d.stats).filter(_k=>d.stats[_k]<Fn);if(_sk.length>0){const _uk=_sk[Math.floor(Math.random()*_sk.length)];d.stats[_uk]++;d.maxHealth=In(d);}if(d.isFarmer&&d.level>=15){d.isFarmer=!1;}const _uc=J1(d.className,d.level);if(_uc.length>0&&Math.random()<0.6){const _nc=_uc[Math.floor(Math.random()*_uc.length)];const _ns=_t[_nc];if(_ns){d.className=_nc;d.color=_ns.color;d.radius=Y1*(_ns.radiusMultiplier||1);d.reloadTimers=(_ns.barrels||[]).map(()=>0);}}}for(const d of i.shapes)if(xe(o.pos.x,o.pos.y,o.radius,d.pos.x,d.pos.y,d.radius)){const U=Math.pow(1.18,o.stats.bodyDamage)*(T.bodyDamageMultiplier||1)*(T.isDroneShooter?1.5:3);d.health-=U,d.damagedTimer=5,kn(o,d),d.health<=0&&(i.shapes=i.shapes.filter(H=>H.id!==d.id),o.xp+=d.xpValue,o.totalXp+=d.xpValue,o.score+=d.xpValue)}for(const d of i.shapes)xe(o.pos.x,o.pos.y,o.radius,d.pos.x,d.pos.y,d.radius)&&(o.health-=d.damage*.016,o.regenTimer=Wn,i.lastDamageTime=i.gameTime,kn(o,d));const _nsDead=new Set();for(const _nc of i.npcs){const _nT=_t[_nc.className],_nBdm=_nT.bodyDamageMultiplier||1;for(const _s of i.shapes){if(xe(_nc.pos.x,_nc.pos.y,_nc.radius,_s.pos.x,_s.pos.y,_s.radius)){_s.health-=Math.max(1.5,_nBdm),_s.damagedTimer=5,kn(_nc,_s),_nc.health-=_s.damage*.016,_nc.regenTimer=Wn;if(_s.health<=0){i.shapes=i.shapes.filter(_h=>_h.id!==_s.id);_nc.xp+=_s.xpValue;_nc.totalXp+=_s.xpValue;_nc.score+=_s.xpValue;}if(_nc.health<=0&&!_nsDead.has(_nc.id)){_nsDead.add(_nc.id);i.particles.push(...Kp(_nc.pos.x,_nc.pos.y,_nc.color,5));}break;}}}if(_nsDead.size>0)i.npcs=i.npcs.filter(_n=>!_nsDead.has(_n.id));for(const d of i.npcs){if(xe(o.pos.x,o.pos.y,o.radius,d.pos.x,d.pos.y,d.radius)){const U=Math.pow(1.18,o.stats.bodyDamage)*(T.bodyDamageMultiplier||1)*(T.isDroneShooter?1.5:3);if(i.teamMode&&d.team==="blue"){kn(o,d);}else{d.health-=U*.016,o.health-=.06,o.regenTimer=Wn,i.lastDamageTime=i.gameTime,kn(o,d),d.health<=0&&(i.npcs=i.npcs.filter(H=>H.id!==d.id),o.xp+=Math.max(100,Math.floor(d.xp*0.72)),o.totalXp+=Math.max(100,Math.floor(d.xp*0.72)),o.score+=Math.max(200,Math.floor(d.xp*0.84)),i.kills++,i.teamMode&&i.teamScore&&i.teamScore.blue++)}}for(const U of i.npcs)U.id!==d.id&&xe(d.pos.x,d.pos.y,d.radius,U.pos.x,U.pos.y,U.radius)&&kn(d,U)}for(;o.xp>=o.xpToNext&&o.level<Ra;)if(uy(o),o.isPlayer){const d=J1(o.className,o.level);d.length>0&&(i.showUpgradeClass=!0,i.availableClasses=d,(()=>{var _sk="_diep_seen_cls",_seen=[];try{_seen=JSON.parse(localStorage.getItem(_sk)||"[]");}catch(e){}var _new=d.filter(c=>!_seen.includes(c));if(_new.length>0){_seen=[..._seen,..._new];try{localStorage.setItem(_sk,JSON.stringify(_seen));}catch(e){}_new.forEach(c=>{i.classUnlockNotifs.push({name:c,timer:360});});}})())}return o.maxHealth=In(o),i.shapeZones&&i.shapeZones.forEach(z=>{z.x+=z.dx;z.y+=z.dy;(z.x<600||z.x>Ul-600)&&(z.dx*=-1);(z.y<600||z.y>Ul-600)&&(z.dy*=-1);Math.random()<.0003&&(z.x=Yl(1e3,Ul-1e3),z.y=Yl(1e3,Ul-1e3),z.dx=(Math.random()-.5)*.4,z.dy=(Math.random()-.5)*.4)}),i.nextShapeSpawnTimer--,i.nextShapeSpawnTimer<=0&&(i.nextShapeSpawnTimer=w1,i.shapes.length<Z1&&(()=>{const _z=i.shapeZones[Math.floor(Math.random()*i.shapeZones.length)];const _a=Math.random()*Math.PI*2;const _r=120+Math.random()*320;const _np=type=>{const _s=Ru(type);_s.pos.x=Math.max(200,Math.min(Ul-200,_z.x+Math.cos(_a+(Math.random()-.5)*.9)*_r));_s.pos.y=Math.max(200,Math.min(Ul-200,_z.y+Math.sin(_a+(Math.random()-.5)*.9)*_r));return _s};i.shapes.push(_np());Math.random()<.14&&i.shapes.push(_np("pentagon"));Math.random()<.03&&i.shapes.push(_np("bigPentagon"));Math.random()<.05&&i.shapes.push(_np("alphaPentagon"));Math.random()<.18&&i.shapes.push(_np("crasher"));Math.random()<.22&&i.shapes.push(_np("mediumTriangle"));Math.random()<.16&&i.shapes.push(_np("mediumSquare"));Math.random()<.14&&i.shapes.push(_np("largeSquare"));Math.random()<.08&&i.shapes.push(_np("largeTriangle"));Math.random()<.12&&i.shapes.push(_np("hugeSquare"));Math.random()<.09&&i.shapes.push(_np("hugeTriangle"));Math.random()<.06&&i.shapes.push(_np("titanSquare"));Math.random()<.05&&i.shapes.push(_np("titanTriangle"));Math.random()<.04&&i.shapes.push(_np("colossusSquare"));Math.random()<.03&&i.shapes.push(_np("colossusTriangle"));Math.random()<.025&&i.shapes.push(_np("behemothSquare"));Math.random()<.018&&i.shapes.push(_np("behemothTriangle"));Math.random()<.012&&i.shapes.push(_np("legendSquare"));Math.random()<.008&&i.shapes.push(_np("legendTriangle"))})()),(function(){if(window._adminSpawnQueue&&window._adminSpawnQueue.length>0){var _aq=window._adminSpawnQueue.shift();var _px=i.player?i.player.pos.x:8000,_py=i.player?i.player.pos.y:8000;var _ns=Ru(_aq);_ns.pos.x=_px+(Math.random()-.5)*300;_ns.pos.y=_py+(Math.random()-.5)*300;i.shapes.push(_ns);}})(),(function(){if(window._adminNpcQueue&&window._adminNpcQueue.length>0){var _an=window._adminNpcQueue.shift();var _ac=_an.className||"Basic";var _az=_t[_ac];if(_az&&i.player){var _al=_an.level||45;var _ax=i.player.pos.x+(Math.random()-.5)*400;var _ay=i.player.pos.y+(Math.random()-.5)*400;var _ap=Math.floor(1500*Math.pow(1.085,_al-1)*(_t[_ac]&&_t[_ac].isDroneShooter?0.833:1));var _ad={};for(var _ai=0;_ai<7;_ai++){var _aj=q1[Math.floor(Math.random()*q1.length)];_ad[_aj]=(_ad[_aj]||0)+1;}_ad.movementSpeed=(_ad.movementSpeed||0)+2;var _npc={id:_c(),pos:{x:_ax,y:_ay},vel:{x:0,y:0},angle:Math.random()*Math.PI*2,radius:Y1*(_az.radiusMultiplier||1),health:_ap,maxHealth:_ap,level:_al,xp:0,xpToNext:Uu(_al+1),stats:_ad,statPoints:0,className:_ac,isPlayer:false,name:"[Admin]",color:_az.color,reloadTimers:(_az.barrels||[]).map(()=>0),damagedTimer:0,regenTimer:0,score:0,berserker:false,aiState:"wander",aiTarget:"",aiWanderTimer:0,aiWanderAngle:Math.random()*Math.PI*2,aiType:(_az.noBarrels?"smasher":"basic"),isBoss:false};i.npcs.push(_npc);}}})(),i.nextNpcSpawnTimer--,i.nextNpcSpawnTimer<=0&&(i.nextNpcSpawnTimer=K1,i.npcs.length<V1&&(()=>{const _nn=Ac(!1,!0);if(i.teamMode){const _q=i._teamQ;if(_q&&_q.length>0){_nn.team=_q.shift();}else{const _bc=i.npcs.filter(_x=>_x.team==="blue").length,_rc=i.npcs.filter(_x=>_x.team==="red").length;_nn.team=_bc<=_rc?"blue":"red";}}i.npcs.push(_nn);})()),i.bossTimer--,i.bossTimer<=0&&(i.bossTimer=k0),o.health<=0&&(i.phase="dead"),i.camera.x+=(o.pos.x-i.camera.x)*.1,i.camera.y+=(o.pos.y-i.camera.y)*.1,i.gameTime%180===0&&(i.leaderboard=F0(o,i.npcs),!i._dualMsgShown&&(o.name==="White Devil"||i.npcs.some(n=>n.name==="White Devil"))&&(o.name==="SeraGON"||i.npcs.some(n=>n.name==="SeraGON"))&&(i._dualMsgShown=true,(()=>{const _ml=document.createElement("div");_ml.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;color:#fff;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;text-align:center;text-shadow:0 0 20px #9b30ff,0 0 20px #ff1a1a;pointer-events:none;opacity:1;transition:opacity 1.6s;line-height:1.9;";_ml.innerHTML="◈ ☠ ...они снова встретились.<br><span style=\"font-size:9px\">Когда двое таких оказываются рядом — арена меняется.<br>Удачи.</span>";document.body.appendChild(_ml);setTimeout(()=>{_ml.style.opacity="0";setTimeout(()=>_ml.remove(),1600);},5000)})())),i.particles=i.particles.filter(p=>(p.x+=p.vx,p.y+=p.vy,p.vx*=.9,p.vy*=.9,--p.life>0));if(i.particles.length>200)i.particles=i.particles.slice(-200),(()=>{if(i.gameMode==="survival"){if(i._realMs>10000)i.zoneRadius=Math.max(700,i.zoneRadius-(_dt*70/1000));const _zd=Math.hypot(o.pos.x-i.zoneX,o.pos.y-i.zoneY);i._zdAcc=(i._zdAcc||0)+_dt;if(_zd>i.zoneRadius&&i._zdAcc>=1000){i._zdAcc=0;const _sdmg=Math.max(1,Math.floor(i._realMs/5000));o.health-=_sdmg;o.regenTimer=Wn;i.lastDamageTime=i.gameTime;}}for(const _sn of i.npcs){if(Math.hypot(_sn.pos.x-i.zoneX,_sn.pos.y-i.zoneY)>i.zoneRadius&&i._zdAcc>=1000){const _sdmg2=Math.max(1,Math.floor(i._realMs/5000));_sn.health-=_sdmg2;}}if(i.zoneRadius<=700&&i.phase==="playing")i.phase="won";for(const _zsn of i.npcs){const _zsnD=Math.hypot(_zsn.pos.x-i.zoneX,_zsn.pos.y-i.zoneY);if(_zsnD>i.zoneRadius*0.82){const _znx=i.zoneX-_zsn.pos.x,_zny=i.zoneY-_zsn.pos.y,_znm=Math.hypot(_znx,_zny)||1;_zsn.vel.x+=(_znx/_znm)*2.2;_zsn.vel.y+=(_zny/_znm)*2.2;}}if(i.gameMode==="domination"){for(const _cp of i.capturePoints){const _pd=Math.hypot(o.pos.x-_cp.x,o.pos.y-_cp.y);let _cap=0;if(_pd<220)_cap=1;for(const _n of i.npcs){if(Math.hypot(_n.pos.x-_cp.x,_n.pos.y-_cp.y)<220){if(_cap===1){_cap=0;}else{_cap=-1;}break;}}_cp.prog=Math.max(-100,Math.min(100,(_cp.prog||0)+_cap*0.35));if(_cp.prog>=100)_cp.team="player";else if(_cp.prog<=-100)_cp.team="npc";}if(i.gameTime%60===0){for(const _cp of i.capturePoints){if(_cp.team==="player")i.domScore.player+=1;if(_cp.team==="npc")i.domScore.npc+=1;}}for(const _rn of i.npcs){if(!_rn.domRole)continue;if(_rn.domRole==="capturer"){const _cpt=i.capturePoints.filter(c=>c.team!=="npc").sort((a,b)=>Math.hypot(_rn.pos.x-a.x,_rn.pos.y-a.y)-Math.hypot(_rn.pos.x-b.x,_rn.pos.y-b.y))[0];if(_cpt){const _dx=_cpt.x-_rn.pos.x,_dy=_cpt.y-_rn.pos.y,_dd=Math.hypot(_dx,_dy);if(_dd>80){_rn.pos.x+=(_dx/_dd)*2.2;_rn.pos.y+=(_dy/_dd)*2.2;}}}else if(_rn.domRole==="defender"){const _dpt=i.capturePoints.filter(c=>c.team==="npc").sort((a,b)=>Math.hypot(_rn.pos.x-a.x,_rn.pos.y-a.y)-Math.hypot(_rn.pos.x-b.x,_rn.pos.y-b.y))[0];if(_dpt){const _dx=_dpt.x-_rn.pos.x,_dy=_dpt.y-_rn.pos.y,_dd=Math.hypot(_dx,_dy);if(_dd>280){_rn.pos.x+=(_dx/_dd)*1.8;_rn.pos.y+=(_dy/_dd)*1.8;}}}else if(_rn.domRole==="hunter"){let _htx=o.pos.x,_hty=o.pos.y,_hbest=Infinity;for(const _hcp of i.capturePoints){if(_hcp.team==="npc"||_hcp.prog>0){const _hppd=Math.hypot(o.pos.x-_hcp.x,o.pos.y-_hcp.y);const _hpri=_hppd-(_hcp.team==="npc"&&_hppd<600?3000:0)-(_hcp.prog>50?1000:0);if(_hpri<_hbest){_hbest=_hpri;_htx=_hcp.x;_hty=_hcp.y;}}}if(_hbest===Infinity){for(const _hcp of i.capturePoints){if(_hcp.team!=="npc"){const _hcd=Math.hypot(_rn.pos.x-_hcp.x,_rn.pos.y-_hcp.y);if(_hcd<_hbest){_hbest=_hcd;_htx=_hcp.x;_hty=_hcp.y;}}}}const _hdx=_htx-_rn.pos.x,_hdy=_hty-_rn.pos.y,_hdd=Math.hypot(_hdx,_hdy)||1;if(_hdd>150){_rn.vel.x+=(_hdx/_hdd)*2.8;_rn.vel.y+=(_hdy/_hdd)*2.8;_rn.angle=Math.atan2(_hdy,_hdx);}}}}if(i.domScore.player>=300&&i.phase==="playing")i.phase="won";if(i.domScore.npc>=300&&i.phase==="playing")i.phase="dead";if(i.gameMode==="zombie"){i.zombieTimer=Math.max(0,(i.zombieTimer||0)-_dt);if(i.zombieTimer<=0&&i.phase==="playing")i.phase="won";for(const _z of i.npcs.filter(n=>n.isZombie)){for(const _n of i.npcs){if(!_n.isZombie&&Math.hypot(_z.pos.x-_n.pos.x,_z.pos.y-_n.pos.y)<(_z.radius+_n.radius+6)){_n.isZombie=!0;_n.color="#22ff55";_n.aiType="rusher";}}if(Math.hypot(_z.pos.x-o.pos.x,_z.pos.y-o.pos.y)<(_z.radius+o.radius+10)){o.health-=0.4;o.regenTimer=Wn;i.lastDamageTime=i.gameTime;}}}if(i.gameMode==="horde"){if(i.npcs.length===0){if(i.waveTimer>0){i.waveTimer-=_dt;}else{i.waveNumber=(i.waveNumber||0)+1;const _wc=i.waveNumber*2+2;const _wlvl=Math.min(60,5+i.waveNumber*5);for(let _w=0;_w<_wc;_w++){const _wn=Ac(!1);const _wsang=Math.random()*Math.PI*2;const _wsdst=1000+Math.random()*700;_wn.pos.x=Math.max(300,Math.min(Ul-300,o.pos.x+Math.cos(_wsang)*_wsdst));_wn.pos.y=Math.max(300,Math.min(Ul-300,o.pos.y+Math.sin(_wsang)*_wsdst));_wn.level=_wlvl;_wn.maxHealth=50+_wlvl*8;_wn.health=_wn.maxHealth;_wn.aiType="rusher";_wn.stats.movementSpeed=Math.min(10,(_wn.stats.movementSpeed||1)+3);i.npcs.push(_wn);}i.waveTimer=30000;}}}})(),i}const C0={square:{fill:"#f0dc40",stroke:"#d4ba38"},triangle:{fill:"#f05050",stroke:"#d84e50"},pentagon:{fill:"#6680f0",stroke:"#5062cc"},bigPentagon:{fill:"#6680f0",stroke:"#5062cc"},crasher:{fill:"#e040c8",stroke:"#a02090"},mediumTriangle:{fill:"#ffcc00",stroke:"#cc9900"},mediumSquare:{fill:"#00ddcc",stroke:"#009988"},largeSquare:{fill:"#ff8800",stroke:"#cc5500"},largeTriangle:{fill:"#44cc44",stroke:"#22aa22"},alphaPentagon:{fill:"#4455ee",stroke:"#2233cc"},hexagon:{fill:"#9966ff",stroke:"#7744cc"},heptagon:{fill:"#cc44ff",stroke:"#9922cc"},octagon:{fill:"#ff6633",stroke:"#cc4422"},decagon:{fill:"#ff2244",stroke:"#cc1133"},megaPentagon:{fill:"#0d1fcc",stroke:"#0a14aa"},ultraPolygon:{fill:"#ffaa00",stroke:"#cc8800"},legendShape:{fill:"#ff2299",stroke:"#cc0077"},hugeSquare:{fill:"#cc2222",stroke:"#991111"},hugeTriangle:{fill:"#882288",stroke:"#551155"},titanSquare:{fill:"#aa1111",stroke:"#770000"},titanTriangle:{fill:"#cc5500",stroke:"#993300"},colossusSquare:{fill:"#772244",stroke:"#440022"},colossusTriangle:{fill:"#007766",stroke:"#004433"},behemothSquare:{fill:"#660066",stroke:"#330033"},behemothTriangle:{fill:"#aa7700",stroke:"#664400"},legendSquare:{fill:"#888888",stroke:"#555555"},legendTriangle:{fill:"#0044dd",stroke:"#002299"}},cy={"#00b2e1":"#0080aa","#45b84e":"#2e8035","#e88018":"#a85c10","#9050c0":"#6a3090","#cc2200":"#981200","#555577":"#333344","#c03030":"#881818","#3aaa58":"#257a3c","#2898c4":"#1a6a90","#4aa87c":"#2e7558","#e09020":"#a06815","#d06010":"#904210","#c8a018":"#906e10","#8038c0":"#602898","#6428b0":"#4a1490","#5c7080":"#3a5060","#22aa66":"#008040","#22b478":"#129658","#c8b200":"#907e00","#c07000":"#885000","#7838c0":"#5a2898","#a82030":"#780f20","#5840a0":"#3c2870"};function L0(i){return cy[i]||"#333333"}function I0(i,h,o,s,T,v,E){const B=E*2.2,z=6,p=h-B/2,d=o+E+5;i.fillStyle="rgba(0,0,0,0.4)",i.beginPath(),i.roundRect(p-1,d-1,B+2,z+2,3),i.fill(),i.fillStyle="#22aa22";const U=Math.max(0,T/v);U>.6?i.fillStyle="#22cc22":U>.3?i.fillStyle="#ddaa00":i.fillStyle="#dd2200",i.beginPath(),i.roundRect(p,d,B*U,z,2),i.fill()}function sy(i,h,o,s,_rad,_lat){const _sw=Math.max(10,s);const _st=_rad?-Math.max(10,_rad*0.33):-10;i.save();i.rotate(h);if(_lat)i.translate(0,_lat);i.fillStyle="#9aacbe";i.strokeStyle="#000000";i.lineWidth=2;i.beginPath();i.rect(_st,-_sw/2,o-_st,_sw);i.fill();i.stroke();i.restore();}function Q0(i,h,o,s){const T=h.pos.x-o,v=h.pos.y-s;i.save();i.translate(T,v);const E=_t[h.className];const _rl=E?(E.requiredLevel||1):1;const _tf=_rl>=60?1.30:_rl>=45?1.15:_rl>=30?1.06:1.0;const _dr=h.radius*_tf;const B=h.damagedTimer>0;const _inv=(_t[h.className]&&_t[h.className].isInvis&&h.isPlayer&&!B)?0.28:1;if(E&&!E.noBarrels){for(const z of E.barrels)sy(i,h.angle+z.angleOffset,z.length,z.width,_dr,z.lateralOffset||0);}i.globalAlpha=_inv;if(h._glowColor){i.shadowBlur=24;i.shadowColor=h._glowColor;}i.fillStyle=B?"#ffffff":h.color;i.strokeStyle="#000000";i.lineWidth=3;i.beginPath();i.arc(0,0,_dr,0,Math.PI*2);i.fill();i.stroke();i.shadowBlur=0;if(h.team){i.strokeStyle=h.team==="blue"?"#4499ff":"#ff4444";i.lineWidth=4;i.beginPath();i.arc(0,0,_dr+6,0,Math.PI*2);i.stroke();}if(E&&E.noBarrels){i.strokeStyle="#000000";i.lineWidth=5;i.beginPath();i.arc(0,0,_dr+4,0,Math.PI*2);i.stroke();}if(!B){if(_rl>=15){i.globalAlpha=_inv*0.40;i.strokeStyle=L0(h.color);i.lineWidth=1.8;i.beginPath();i.arc(0,0,_dr+5,0,Math.PI*2);i.stroke();}if(_rl>=30){i.globalAlpha=_inv*0.32;i.strokeStyle=L0(h.color);i.lineWidth=1.8;i.beginPath();i.arc(0,0,_dr+10,0,Math.PI*2);i.stroke();}if(_rl>=45){i.globalAlpha=_inv*0.55;i.strokeStyle=h.color;i.lineWidth=2.5;i.beginPath();i.arc(0,0,_dr+15,0,Math.PI*2);i.stroke();}if(_rl>=60){i.globalAlpha=_inv*0.38;i.strokeStyle=h.color;i.lineWidth=2;i.beginPath();i.arc(0,0,_dr+22,0,Math.PI*2);i.stroke();}}i.globalAlpha=_inv;if(!h.isPlayer||h.isBoss){i.fillStyle="#333333";i.font="bold 11px Arial";i.textAlign="center";i.fillText(h.name,0,-_dr-10);}if(!h.isPlayer){i.fillStyle="#555555";i.font="9px Arial";i.textAlign="center";i.fillText(`Lv${h.level}`,0,-_dr-22);}I0(i,0,0,0,h.health,h.maxHealth,_dr);i.restore();}function oy(i,h,o,s){const T=h.pos.x-o,v=h.pos.y-s;i.save(),i.translate(T,v),i.rotate(h.angle);const E=C0[h.type]||C0.square,B=h.damagedTimer>0;i.fillStyle=B?"#ffffff":E.fill,i.strokeStyle=E.stroke,i.lineWidth=3,i.beginPath();const z=h.radius;if(h.type==="square")i.rect(-z,-z,z*2,z*2);else if(h.type==="triangle"||h.type==="crasher"){const sides=h.type==="crasher"?4:3;const _vr=Math.min(z/Math.cos(Math.PI/sides),z*1.4);for(let f=0;f<sides;f++){const ang=f/sides*Math.PI*2-Math.PI/2;f===0?i.moveTo(Math.cos(ang)*_vr,Math.sin(ang)*_vr):i.lineTo(Math.cos(ang)*_vr,Math.sin(ang)*_vr)}i.closePath()}else if(h.type==="mediumTriangle"){for(let _f=0;_f<3;_f++){const _a=_f/3*Math.PI*2-Math.PI/2;_f===0?i.moveTo(Math.cos(_a)*z,Math.sin(_a)*z):i.lineTo(Math.cos(_a)*z,Math.sin(_a)*z);}i.closePath();}else if(h.type==="mediumSquare"){i.rect(-z,-z,z*2,z*2);}else if(h.type==="largeSquare"){i.rect(-z,-z,z*2,z*2);}else if(h.type==="largeTriangle"){for(let _f=0;_f<3;_f++){const _a=_f/3*Math.PI*2-Math.PI/2;_f===0?i.moveTo(Math.cos(_a)*z,Math.sin(_a)*z):i.lineTo(Math.cos(_a)*z,Math.sin(_a)*z);}i.closePath();}else{const _sm={pentagon:5,alphaPentagon:6,bigPentagon:5,hexagon:6,heptagon:7,octagon:8,decagon:10,megaPentagon:5,ultraPolygon:12,legendShape:10};const sides=_sm[h.type]||5;const _vr=Math.min(z/Math.cos(Math.PI/sides),z*1.4);for(let d=0;d<sides;d++){const U=d/sides*Math.PI*2-Math.PI/2;d===0?i.moveTo(Math.cos(U)*_vr,Math.sin(U)*_vr):i.lineTo(Math.cos(U)*_vr,Math.sin(U)*_vr)}i.closePath()}i.fill(),i.stroke(),h.health<h.maxHealth&&(i.rotate(-h.angle),I0(i,0,0,0,h.health,h.maxHealth,h.radius)),i.restore()}function ry(i,h,o){const _snZoom=h.player&&h.player.className&&_t[h.player.className]&&_t[h.player.className].sniperZoom;o=o*(_snZoom?0.8125:1);const s=i.getContext("2d");if(!s)return;const T=i.width,v=i.height,E=h.camera.x-T/(2*o),B=h.camera.y-v/(2*o);s.save(),s.scale(o,o),s.clearRect(0,0,T/o,v/o),s.fillStyle="#cdcdcd",s.fillRect(0,0,T/o,v/o);const z=Math.floor(E/_a)*_a,p=Math.floor(B/_a)*_a;s.strokeStyle="rgba(160,160,160,0.55)",s.lineWidth=.5;for(let H=z;H<E+T/o;H+=_a)s.beginPath(),s.moveTo(H-E,0),s.lineTo(H-E,v/o),s.stroke();for(let H=p;H<B+v/o;H+=_a)s.beginPath(),s.moveTo(0,H-B),s.lineTo(T/o,H-B),s.stroke();s.strokeStyle="#000000",s.lineWidth=25;const d=-E,U=-B;s.strokeRect(d,U,Ul,Ul);const _vW=T/o,_vH=v/o;for(const H of h.bullets){if(H.pos.x<E-500||H.pos.x>E+_vW+500||H.pos.y<B-500||H.pos.y>B+_vH+500)continue;const k=H.pos.x-E,L=H.pos.y-B;s.globalAlpha=1;if(H.isTrap){s.fillStyle=H.color||"#e8a000",s.strokeStyle="#000000",s.lineWidth=3,s.beginPath();for(let f=0;f<8;f++){const a=f/8*Math.PI*2+Math.PI/8;f===0?s.moveTo(k+Math.cos(a)*H.radius,L+Math.sin(a)*H.radius):s.lineTo(k+Math.cos(a)*H.radius,L+Math.sin(a)*H.radius)}s.closePath(),s.fill(),s.stroke();if(H.health!==undefined&&H.maxHealth>0&&H.health<H.maxHealth){const _bw=H.radius*2.2,_bh=4,_bx=k-_bw/2,_by=L-H.radius-12,_hp=Math.max(0,H.health/H.maxHealth);s.fillStyle="#444444";s.fillRect(_bx,_by,_bw,_bh);s.fillStyle="hsl("+Math.round(_hp*120)+",90%,45%)";s.fillRect(_bx,_by,_bw*_hp,_bh);s.strokeStyle="#111111";s.lineWidth=1;s.strokeRect(_bx,_by,_bw,_bh);}}else{s.fillStyle=H.isNpc?"#f05050":(H.color||"#ffffff"),s.strokeStyle="#000000",s.lineWidth=2,s.beginPath(),(H.isDrone||H.isRocket?(function(){const _la=Math.atan2(H.vel.y,H.vel.x)-Math.PI/2;for(let _i=0;_i<3;_i++){const _a=_la+_i*Math.PI*2/3;_i?s.lineTo(k+Math.cos(_a)*H.radius*1.45,L+Math.sin(_a)*H.radius*1.45):s.moveTo(k+Math.cos(_a)*H.radius*1.45,L+Math.sin(_a)*H.radius*1.45);}s.closePath();})():H.isLaser?(function(){const _la=Math.atan2(H.vel.y,H.vel.x);s.save();s.translate(k,L);s.rotate(_la);s.rect(-H.radius*7,-H.radius*0.35,H.radius*14,H.radius*0.7);s.restore();})():s.arc(k,L,H.radius,0,Math.PI*2)),s.fill(),s.stroke()}s.globalAlpha=1}for(const H of h.shapes)if(H.pos.x>E-1000&&H.pos.x<E+_vW+1000&&H.pos.y>B-1000&&H.pos.y<B+_vH+1000)oy(s,H,E,B);for(const H of h.npcs)if(H.pos.x>E-1000&&H.pos.x<E+_vW+1000&&H.pos.y>B-1000&&H.pos.y<B+_vH+1000)Q0(s,H,E,B);Q0(s,h.player,E,B);if(h.particles)for(const H of h.particles){if(H.x<E-1000||H.x>E+_vW+1000||H.y<B-1000||H.y>B+_vH+1000)continue;const a=H.life/H.maxLife;s.globalAlpha=a*.7,s.fillStyle=H.color,s.beginPath(),s.arc(H.x-E,H.y-B,H.r,0,Math.PI*2),s.fill()}if(h.gameMode==="survival"&&h.zoneRadius<Ul*1.8){const _zx=h.zoneX-E,_zy=h.zoneY-B;s.save();s.strokeStyle="rgba(255,60,60,0.85)";s.lineWidth=6;s.setLineDash([20,12]);s.beginPath();s.arc(_zx,_zy,h.zoneRadius,0,Math.PI*2);s.stroke();s.setLineDash([]);s.restore();}if(h.gameMode==="domination"&&h.capturePoints&&h.capturePoints.length){for(const _cp of h.capturePoints){const _cx=_cp.x-E,_cy=_cp.y-B;const _cc=_cp.team==="player"?"rgba(0,180,255,0.7)":_cp.team==="npc"?"rgba(255,80,50,0.7)":"rgba(200,200,200,0.5)";s.save();s.fillStyle=_cp.team==="player"?"rgba(0,180,255,0.1)":_cp.team==="npc"?"rgba(255,80,50,0.1)":"rgba(200,200,200,0.07)";s.beginPath();s.arc(_cx,_cy,200,0,Math.PI*2);s.fill();s.strokeStyle=_cc;s.lineWidth=4;s.beginPath();s.arc(_cx,_cy,200,0,Math.PI*2);s.stroke();if(_cp.prog&&_cp.prog!==0){const _pang=(_cp.prog/100)*Math.PI*2;s.strokeStyle=_cp.prog>0?"rgba(0,220,255,0.9)":"rgba(255,100,50,0.9)";s.lineWidth=7;s.lineCap="round";s.beginPath();s.arc(_cx,_cy,200,-Math.PI/2,-Math.PI/2+_pang);s.stroke();}s.fillStyle="rgba(255,255,255,0.95)";s.font="bold 22px Arial";s.textAlign="center";s.textBaseline="middle";s.fillText(_cp.id,_cx,_cy);s.restore();}}s.globalAlpha=1,s.restore()}const Mc=50,dy=13;function hy(i,h){const o=i.getContext("2d");if(!o||(o.clearRect(0,0,i.width,i.height),!h.active)){if(i._vOvl){const _oc=i._vOvl.getContext("2d");if(_oc)_oc.clearRect(0,0,i._vOvl.width,i._vOvl.height);}return;}if(!i._vOvl){const _PAD=70;const _ov=document.createElement("canvas");_ov.style.cssText="position:fixed;pointer-events:none;z-index:81;display:block;";document.body.appendChild(_ov);i._vOvl=_ov;i._vPad=_PAD;i._vSync=()=>{const _r=i.getBoundingClientRect();const _nw=Math.round(_r.width+_PAD*2),_nh=Math.round(_r.height+_PAD*2);if(_ov.width!==_nw||_ov.height!==_nh){_ov.width=_nw;_ov.height=_nh;}_ov.style.left=(_r.left-_PAD)+"px";_ov.style.top=(_r.top-_PAD)+"px";_ov.style.width=_ov.width+"px";_ov.style.height=_ov.height+"px";};}i._vSync();const s=i.getBoundingClientRect(),T=h.startX-s.left,v=h.startY-s.top,E=h.curX-h.startX,B=h.curY-h.startY,z=Math.sqrt(E*E+B*B),p=Math.atan2(B,E),d=Math.min(z,Mc),U=T+Math.cos(p)*d,H=v+Math.sin(p)*d;i._vSync();const _PAD2=i._vPad;const _c=i._vOvl.getContext("2d");_c.clearRect(0,0,i._vOvl.width,i._vOvl.height);const _jR=Math.max(19,Math.min(40,Math.min(i.width,i.height)*0.10));const _jIn=_jR*0.5;_c.beginPath();_c.arc(T+_PAD2,v+_PAD2,_jR,0,Math.PI*2);_c.fillStyle="rgba(0,0,0,0.25)";_c.fill();_c.strokeStyle="rgba(0,0,0,0.55)";_c.lineWidth=2;_c.stroke();_c.beginPath();_c.arc(U+_PAD2,H+_PAD2,_jIn,0,Math.PI*2);_c.fillStyle="rgba(0,0,0,0.45)";_c.fill();_c.strokeStyle="rgba(0,0,0,0.75)";_c.lineWidth=2;_c.stroke();}function Z0({side:i,onMove:h,onShoot:o}){const s=cl.useRef(null),T=cl.useRef({active:!1,touchId:-1,startX:0,startY:0,curX:0,curY:0}),v=cl.useRef(0);return cl.useEffect(()=>{const E=s.current;if(!E)return;const _dpr=window.devicePixelRatio||1;const B=()=>{E.width=Math.round(E.offsetWidth*_dpr);E.height=Math.round(E.offsetHeight*_dpr);E.style.width=E.offsetWidth+"px";E.style.height=E.offsetHeight+"px";};B();const z=new ResizeObserver(B);z.observe(E);let _lfT=0;const p=(ts)=>{if(ts-_lfT>=11.11){_lfT=ts;hy(E,T.current);}v.current=requestAnimationFrame(p)};v.current=requestAnimationFrame(p);const d=k=>{k.preventDefault();const L=T.current;if(L.active)return;const K=k.changedTouches[0];L.active=!0,L.touchId=K.identifier,L.startX=K.clientX,L.startY=K.clientY,L.curX=K.clientX,L.curY=K.clientY},U=k=>{k.preventDefault();const L=T.current;for(let K=0;K<k.changedTouches.length;K++){const sl=k.changedTouches[K];if(sl.identifier!==L.touchId)continue;L.curX=sl.clientX,L.curY=sl.clientY;const ut=L.curX-L.startX,pl=L.curY-L.startY,dl=Math.sqrt(ut*ut+pl*pl),W=dl>0?ut/dl:0,G=dl>0?pl/dl:0,al=Math.min(dl/Mc,1);h(W*al,G*al),o&&o(dl>14,W,G)}},H=k=>{k.preventDefault();const L=T.current;for(let K=0;K<k.changedTouches.length;K++)k.changedTouches[K].identifier===L.touchId&&(L.active=!1,L.touchId=-1,h(0,0),o&&o(!1,0,0))};return E.addEventListener("touchstart",d,{passive:!1}),E.addEventListener("touchmove",U,{passive:!1}),E.addEventListener("touchend",H,{passive:!1}),E.addEventListener("touchcancel",H,{passive:!1}),()=>{cancelAnimationFrame(v.current),z.disconnect(),E.removeEventListener("touchstart",d),E.removeEventListener("touchmove",U),E.removeEventListener("touchend",H),E.removeEventListener("touchcancel",H)}},[h,o]),D.jsx("canvas",{ref:s,style:{position:"absolute",bottom:0,[i]:0,width:"45%",height:"42%",touchAction:"none",pointerEvents:"auto",zIndex:80,display:"block"}})}function yy({onLeftMove:i,onRightMove:h,onRightShoot:o}){return D.jsxs(D.Fragment,{children:[D.jsx(Z0,{side:"left",onMove:i}),D.jsx(Z0,{side:"right",onMove:h,onShoot:o})]})}function Rc({className:i,size:h=64,angle:o=-Math.PI/2}){const s=_t[i];if(!s)return null;const T=h/2,v=h/130,E=24*v*(s.radiusMultiplier||1),B=E+6*v;return D.jsxs("svg",{width:h,height:h,viewBox:`${-T} ${-T} ${h} ${h}`,style:{display:"block",overflow:"visible"},children:[s.barrels.map((z,p)=>{const d=o+z.angleOffset,U=z.length*v,H=Math.max(9*v,z.width*v),k=Math.cos(d),L=Math.sin(d);return D.jsx("rect",{x:-E*0.3,y:-H/2,width:U+E*0.3,height:H,rx:2*v,fill:"#9aacbe",stroke:"#5a6e82",strokeWidth:1.5*v,transform:`rotate(${d*180/Math.PI}) translate(0,${(z.lateralOffset||0)*v})`},p)}),s.noBarrels&&D.jsx("circle",{r:B,fill:"none",stroke:s.color,strokeWidth:5*v,opacity:.6}),s.bodyDamageMultiplier&&D.jsx("circle",{r:E+4*v,fill:"none",stroke:s.color,strokeWidth:3*v,opacity:.8}),D.jsx("circle",{r:E,fill:s.color,stroke:s.color,strokeWidth:2.5*v}),D.jsx("circle",{r:3*v,fill:"#ffffff",opacity:.9})]})}function my({player:i,kills:h,gameTime:o,teamMode:q,teamScore:j,uiScale:_uiProp}){const _sc=_uiProp||Math.max(0.4,Math.min(2.5,Math.min(window.innerWidth,window.innerHeight)/420));const s=Math.max(0,i.health/i.maxHealth),T=i.level>=Ra?1:i.xp/i.xpToNext,v=Math.floor(o/3600),E=Math.floor(o%3600/60),B=`${String(v).padStart(2,"0")}:${String(E).padStart(2,"0")}`,z=s>.6?"#22cc44":s>.3?"#ddaa00":"#dd2222";return D.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none",zIndex:50,zoom:_sc},children:[q&&j&&D.jsxs("div",{style:{position:"absolute",bottom:108,left:"50%",transform:"translateX(-50%)",display:"flex",gap:12,zIndex:60,pointerEvents:"none"},children:[D.jsxs("span",{style:{background:"rgba(20,50,140,0.88)",color:"#aadeff",fontFamily:"Arial",fontSize:13,fontWeight:"bold",padding:"4px 15px",borderRadius:16,border:"1.5px solid rgba(68,153,255,0.5)",whiteSpace:"nowrap"},children:["Синие: ",j.blue]}),D.jsxs("span",{style:{background:"rgba(140,20,20,0.88)",color:"#ffbbbb",fontFamily:"Arial",fontSize:13,fontWeight:"bold",padding:"4px 15px",borderRadius:16,border:"1.5px solid rgba(255,68,68,0.5)",whiteSpace:"nowrap"},children:["Красные: ",j.red]})]}),D.jsxs("div",{style:{position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",width:"46%",maxWidth:336,minWidth:168,display:"flex",alignItems:"flex-end",gap:8},children:[D.jsx("div",{style:{flexShrink:0,width:42,height:42,background:"rgba(0,0,0,0.4)",borderRadius:10,border:"1.5px solid rgba(255,255,255,0.18)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:4},children:D.jsx(Rc,{className:i.className,size:34,angle:-Math.PI/2})}),D.jsxs("div",{style:{flex:1,paddingBottom:4},children:[D.jsxs("div",{style:{marginBottom:3,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[D.jsxs("span",{style:{color:"#fff",fontFamily:"Arial",fontSize:9,fontWeight:"bold",textShadow:"0 1px 3px #000"},children:["HP ",Math.ceil(i.health),"/",Math.round(i.maxHealth)]}),D.jsxs("span",{style:{color:"#d0e4f0",fontFamily:"Arial",fontSize:8,textShadow:"0 1px 3px #000"},children:[Dc(i.className)," · Lv",i.level]})]}),D.jsx("div",{style:{height:10,background:"rgba(0,0,0,0.45)",borderRadius:7,overflow:"hidden",border:"1.5px solid rgba(255,255,255,0.18)",marginBottom:4},children:D.jsx("div",{style:{height:"100%",width:`${s*100}%`,background:z,borderRadius:7,transition:"width 0.1s, background 0.3s"}})}),D.jsxs("div",{style:{marginBottom:3,display:"flex",flexDirection:"column",gap:2},children:[D.jsxs("div",{style:{height:6,background:"rgba(0,0,0,0.35)",borderRadius:3,position:"relative",border:"1px solid rgba(255,255,255,0.18)",overflow:"hidden"},children:[D.jsx("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:`${((i.level-1)/44)*100}%`,background:"#f6e84c",borderRadius:3,transition:"width 0.3s"}}),D.jsx("div",{key:5,style:{position:"absolute",top:0,left:"9.09%",width:"2px",height:"100%",background:"#e04040",opacity:0.92}}),D.jsx("div",{key:10,style:{position:"absolute",top:0,left:"20.45%",width:"2px",height:"100%",background:"#e04040",opacity:0.92}}),D.jsx("div",{key:15,style:{position:"absolute",top:0,left:"31.82%",width:"2px",height:"100%",background:"#f8b700",opacity:0.92}}),D.jsx("div",{key:20,style:{position:"absolute",top:0,left:"43.18%",width:"2px",height:"100%",background:"#e04040",opacity:0.92}}),D.jsx("div",{key:25,style:{position:"absolute",top:0,left:"54.55%",width:"2px",height:"100%",background:"#e04040",opacity:0.92}}),D.jsx("div",{key:30,style:{position:"absolute",top:0,left:"65.91%",width:"2px",height:"100%",background:"#f8b700",opacity:0.92}}),D.jsx("div",{key:35,style:{position:"absolute",top:0,left:"77.27%",width:"2px",height:"100%",background:"#e04040",opacity:0.92}}),D.jsx("div",{key:40,style:{position:"absolute",top:0,left:"88.64%",width:"2px",height:"100%",background:"#e04040",opacity:0.92}}),D.jsx("div",{key:45,style:{position:"absolute",top:0,left:"calc(100% - 2px)",width:"2px",height:"100%",background:"#f8b700",opacity:0.92}})]}),D.jsxs("div",{style:{height:5,background:"rgba(0,0,0,0.3)",borderRadius:3,overflow:"hidden",border:"1px solid rgba(255,255,255,0.12)"},children:[D.jsx("div",{style:{height:"100%",width:`${T*100}%`,background:"#5090e0",borderRadius:3,transition:"width 0.15s"}})]})]}),D.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[D.jsxs("span",{style:{color:"#aaccee",fontFamily:"Arial",fontSize:9.5,textShadow:"0 1px 2px #000"},children:["XP ",i.xp,"/",i.level<Ra?i.xpToNext:"—"]}),D.jsxs("span",{style:{color:"#f6e84c",fontFamily:"Arial",fontSize:9.5,textShadow:"0 1px 2px #000"},children:["Очки: ",i.score]})]})]})]}),D.jsxs("div",{style:{position:"absolute",bottom:80,right:10,color:"rgba(255,255,255,0.7)",fontFamily:"Arial",fontSize:11,textAlign:"right",textShadow:"0 1px 3px #000"},children:[D.jsxs("div",{children:["Убийств: ",h]}),D.jsxs("div",{children:["Время: ",B]})]}),i.statPoints>0&&D.jsxs("div",{style:{position:"absolute",bottom:90,left:"50%",transform:"translateX(-50%)",background:"rgba(230,200,0,0.92)",color:"#333",borderRadius:8,padding:"4px 14px",fontFamily:"Arial",fontSize:12,fontWeight:"bold",whiteSpace:"nowrap",animation:"pulse 1s infinite"},children:["+",i.statPoints,(i.statPoints%10===1&&i.statPoints%100!==11)?" очко":(i.statPoints%10>=2&&i.statPoints%10<=4&&(i.statPoints%100<10||i.statPoints%100>=20))?" очка":" очков"," прокачки!"]})]})}function vy({player:i,onUpgrade:h,uiScale:_vyUiSc}){const[o,s]=cl.useState(!1);return cl.useEffect(()=>{i.statPoints>0&&s(!0)},[i.statPoints]),cl.useEffect(()=>{i.statPoints<=0&&s(!1)},[i.statPoints]),o?D.jsxs("div",{style:{position:"absolute",bottom:70,left:12,transform:"scale("+(_vyUiSc||1)+")",transformOrigin:"bottom left",background:"rgba(0,0,12,0.72)",border:"2px solid rgba(0,100,200,0.65)",borderRadius:4,padding:"5px 8px",zIndex:500,minWidth:180,maxWidth:200,boxShadow:"0 4px 20px rgba(0,0,0,0.65)",pointerEvents:"auto",touchAction:"manipulation",fontFamily:"Arial"},onTouchStart:T=>T.stopPropagation(),children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4,paddingBottom:4,borderBottom:"1px solid rgba(0,100,200,0.35)"},children:[D.jsxs("div",{style:{color:"#ffe14d",fontSize:10,fontWeight:"bold",letterSpacing:0.8,textTransform:"uppercase"},children:["Прокачка  ",D.jsx("span",{style:{color:"#fff",background:"rgba(68,136,255,0.4)",borderRadius:3,padding:"0 5px",fontSize:12,fontWeight:"bold"},children:i.statPoints})]}),D.jsx("button",{onPointerDown:T=>{T.stopPropagation();s(!1)},style:{background:"none",border:"none",color:"rgba(255,255,255,0.35)",cursor:"pointer",fontSize:15,lineHeight:1,padding:"0 3px",touchAction:"manipulation"},children:"×"})]}),q1.map(T=>{const v=i.stats[T],E=i.statPoints>0&&v<Fn;return D.jsxs("div",{style:{marginBottom:4,display:"flex",alignItems:"center",gap:4},children:[D.jsx("button",{onPointerDown:B=>{B.stopPropagation();E&&h(T)},style:{width:20,height:20,borderRadius:3,border:E?"2px solid #ffe14d":"2px solid rgba(255,255,255,0.08)",background:E?"rgba(255,220,50,0.18)":"rgba(255,255,255,0.04)",color:E?"#ffe14d":"#444",fontSize:14,fontWeight:"bold",cursor:E?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,padding:0,lineHeight:1,transition:"all 0.1s",touchAction:"manipulation"},children:"+"}),D.jsxs("div",{style:{flex:1,minWidth:0},children:[D.jsx("div",{style:{color:"rgba(180,220,255,0.9)",fontSize:9,marginBottom:3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",letterSpacing:0.2},children:j1[T]}),D.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:Fn}).map((B,z)=>D.jsx("div",{style:{flex:1,height:7,borderRadius:1,background:z<v?"#3399ff":"rgba(255,255,255,0.07)",transition:"background 0.12s",boxShadow:z<v?"0 0 4px rgba(51,153,255,0.5)":undefined}},z))})]})]},T)})]}):null}function gy({state:i}){const h=cl.useRef(null),o=110,s=o/Ul;return cl.useEffect(()=>{const T=h.current;if(!T)return;const v=T.getContext("2d");if(!v)return;v.clearRect(0,0,o,o),v.fillStyle="rgba(220,220,220,0.92)",v.fillRect(0,0,o,o);const E=2e3*s;v.strokeStyle="rgba(150,150,150,0.35)",v.lineWidth=.5;for(let p=0;p<o;p+=E)v.beginPath(),v.moveTo(p,0),v.lineTo(p,o),v.stroke();for(let p=0;p<o;p+=E)v.beginPath(),v.moveTo(0,p),v.lineTo(o,p),v.stroke();v.strokeStyle="rgba(80,80,80,0.4)",v.lineWidth=1,v.strokeRect(0,0,o,o);for(const p of i.shapes){const d=p.pos.x*s,U=p.pos.y*s;p.type==="ultraPolygon"?v.fillStyle="#ffaa00":p.type==="megaPentagon"?v.fillStyle="#0d1fcc":p.type==="decagon"?v.fillStyle="#ff2244":p.type==="octagon"?v.fillStyle="#ff6633":p.type==="heptagon"?v.fillStyle="#cc44ff":p.type==="hexagon"?v.fillStyle="#9966ff":p.type==="pentagon"||p.type==="bigPentagon"||p.type==="alphaPentagon"?v.fillStyle="#6680f0":p.type==="triangle"?v.fillStyle="#f05050":p.type==="mediumTriangle"?v.fillStyle="#ffcc00":p.type==="mediumSquare"?v.fillStyle="#00ddcc":p.type==="largeSquare"?v.fillStyle="#ff8800":p.type==="largeTriangle"?v.fillStyle="#44cc44":v.fillStyle="#f0dc40",v.fillRect(d-1,U-1,2,2)}for(const p of i.npcs){const d=p.pos.x*s,U=p.pos.y*s;v.fillStyle=p.isZombie?"#00ff55":p.team==="blue"?"#00b2e1":"#f14e54";v.beginPath();v.arc(d,U,p.isZombie?3.5:p.team==="blue"?3.5:2.5,0,Math.PI*2);v.fill();if(p.isZombie){v.strokeStyle="#005500";v.lineWidth=1.5;v.stroke();}else if(p.team==="blue"){v.strokeStyle="#ffffff";v.lineWidth=1;v.stroke();}}if(i.gameMode==="domination"&&i.capturePoints&&i.capturePoints.length){v.save();for(const _cp of i.capturePoints){const _cx=_cp.x*s,_cy=_cp.y*s;v.fillStyle=_cp.team==="player"?"#00b2e1":_cp.team==="npc"?"#f14e54":"#aaaaaa";v.beginPath();v.arc(_cx,_cy,6,0,Math.PI*2);v.fill();v.strokeStyle="#000";v.lineWidth=1;v.stroke();v.fillStyle="#fff";v.font="bold 7px Arial";v.textAlign="center";v.textBaseline="middle";v.fillText(_cp.id,_cx,_cy);}v.restore();}if(i.gameMode==="survival"&&i.zoneRadius&&i.zoneRadius<Ul*1.8){const _zx=(i.zoneX||Ul/2)*s,_zy=(i.zoneY||Ul/2)*s,_zr=i.zoneRadius*s;v.save();v.strokeStyle="rgba(255,60,60,0.85)";v.lineWidth=1.5;v.setLineDash([4,3]);v.beginPath();v.arc(_zx,_zy,Math.max(_zr,2),0,Math.PI*2);v.stroke();v.setLineDash([]);v.restore();}const B=i.player.pos.x*s,z=i.player.pos.y*s;v.fillStyle="#00b2e1",v.beginPath(),v.arc(B,z,4,0,Math.PI*2),v.fill(),v.strokeStyle="#fff",v.lineWidth=1.5,v.stroke()}),D.jsx("div",{style:{borderRadius:6,overflow:"hidden",border:"2px solid rgba(0,0,0,0.25)",boxShadow:"0 2px 8px rgba(0,0,0,0.35)"},children:D.jsx("canvas",{ref:h,width:o,height:o})})}function Sy({entries:i,uiScale:_syUiSc}){
  const _top=i.slice(0,5);
  const _pr=i.findIndex(e=>e.isPlayer);
  const _pe=i[_pr];
  const _outside=_pr>=5;
  function _row(o,_rank,_key,_sep){
    const _isFirst=_rank===0;
    const _isPlayer=o.isPlayer;
    return D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,padding:"2px 0",marginTop:_sep?6:0,paddingTop:_sep?6:0,borderTop:_sep?"1px solid rgba(255,255,255,0.15)":"none"},children:[
      D.jsx("span",{style:{color:_isFirst?"#ffe14d":_isPlayer?"#ffe14d":"rgba(255,255,255,0.45)",minWidth:16,fontSize:9,fontFamily:"Arial",textAlign:"right"},children:_rank+1+"."}),
      D.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:80,color:_isPlayer?"#ffe14d":o.name==="White Devil"?"#ff9090":o.name==="SeraGON"?"#cc88ff":"#fff",fontFamily:"Arial",fontSize:10,fontWeight:_isPlayer||o.name==="White Devil"||o.name==="SeraGON"?"bold":"normal"},children:(o.name==="White Devil"||o.name==="SeraGON"?"★ ":"")+o.name}),
      D.jsxs("span",{style:{color:"#aaddff",fontSize:9,fontFamily:"Arial",minWidth:26},children:["Lv",o.level]}),
      D.jsx("span",{style:{color:_isFirst?"#ffe14d":_isPlayer?"#ffe14d":"rgba(200,200,200,0.9)",fontSize:9,fontFamily:"Arial",minWidth:40,textAlign:"right",fontWeight:_isFirst||_isPlayer?"bold":"normal"},children:o.score.toLocaleString()})
    ]},_key);
  }
  return D.jsxs("div",{style:{background:"rgba(0,0,0,0.39)",border:"1px solid rgba(0,120,220,0.25)",borderRadius:6,padding:"6px 10px",minWidth:160,boxShadow:"0 2px 12px rgba(0,0,0,0.35)",transform:"scale("+(_syUiSc||1)+")",transformOrigin:"top right"},children:[
    D.jsx("div",{style:{color:"#ffe14d",fontFamily:"Arial",fontSize:10,fontWeight:"bold",textAlign:"center",marginBottom:5,letterSpacing:1,textTransform:"uppercase",borderBottom:"1px solid rgba(255,220,60,0.25)",paddingBottom:4},children:"ТОП ИГРОКИ"}),
    _top.map((o,s)=>_row(o,s,s)),
    _outside&&_pe?_row(_pe,_pr,"player",true):null
  ]});
}function by({availableClasses:i,onSelect:h,uiScale:_bySc}){if(i.length===0)return null;const o=i[0]?_t[i[0]].requiredLevel:"";return D.jsx("div",{style:{position:"absolute",bottom:20,left:0,right:0,display:"flex",justifyContent:"center",zIndex:600,pointerEvents:"none"},onPointerDown:s=>s.stopPropagation(),children:D.jsxs("div",{style:{pointerEvents:"auto",display:"flex",flexDirection:"column",alignItems:"center",gap:10,background:"rgba(0,0,0,0.62)",zoom:(_bySc||1),borderRadius:14,padding:"12px 20px 14px",backdropFilter:"blur(2px)"},children:[D.jsx("div",{style:{color:"#fff",fontFamily:"Arial",fontSize:13,fontWeight:"bold",letterSpacing:.4,opacity:.85}},void 0,"Уровень "+o+" — выберите класс:"),D.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",maxWidth:640},children:i.map(s=>{const T=_t[s];return D.jsxs("button",{onPointerDown:v=>{v.stopPropagation();h(s)},style:{background:T.color+"bb",border:"2px solid "+T.color,borderRadius:8,padding:"6px 12px 8px",cursor:"pointer",color:"#fff",fontFamily:"Arial",fontWeight:"bold",fontSize:12,textShadow:"0 1px 4px #0009",display:"flex",flexDirection:"column",alignItems:"center",gap:3,minWidth:82,transition:"transform .1s"},onMouseEnter:v=>{v.currentTarget.style.transform="scale(1.08)";v.currentTarget.style.boxShadow="0 0 16px "+T.color+"99"},onMouseLeave:v=>{v.currentTarget.style.transform="";v.currentTarget.style.boxShadow=""},children:[D.jsx(Rc,{className:s,size:40,angle:-Math.PI/2}),D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[D.jsx("span",{style:{fontSize:11,fontWeight:"bold"},children:Dc(s)}),_t[s]&&_t[s].upgradesFrom&&_t[s].upgradesFrom.length>0?D.jsx("span",{style:{fontSize:9,color:"rgba(255,255,255,0.6)"},children:"← "+(_t[s].upgradesFrom.map(p=>W1[p]||p).join("/"))}):null]})]},s)})})]})})}const xl=[55,165,295,430,590],at=19,Ou=[812,2275,3737],Oc=80;let V0=750,py=16000;function Ql(i,h){return(i*9+h*3+2)*65}function Ql3(i,h,k){return(i*9+h*3+k+1)*65}const w0=[{name:"Basic",tier:0,x:xl[0],y:910},{name:"Sniper",tier:1,x:xl[1],y:260},{name:"MachineGun",tier:1,x:xl[1],y:845},{name:"FlankGuard",tier:1,x:xl[1],y:1430},{name:"Assassin",tier:2,x:xl[2],y:130},{name:"Hunter",tier:2,x:xl[2],y:325},{name:"Stalker",tier:2,x:xl[2],y:520},{name:"Gunner",tier:2,x:xl[2],y:715},{name:"Sprayer",tier:2,x:xl[2],y:910},{name:"TripleShot",tier:2,x:xl[2],y:1105},{name:"Twin",tier:2,x:xl[2],y:1300},{name:"QuadTank",tier:2,x:xl[2],y:1495},{name:"Smasher",tier:2,x:xl[2],y:1690},{name:"Ranger",tier:3,x:xl[3],y:65},{name:"Annihilator",tier:3,x:xl[3],y:130},{name:"Predator",tier:3,x:xl[3],y:195},{name:"Streamliner",tier:3,x:xl[3],y:260},{name:"Overtrapper",tier:3,x:xl[3],y:325},{name:"Skimmer",tier:3,x:xl[3],y:390},{name:"Landmine",tier:3,x:xl[3],y:455},{name:"Fighter",tier:3,x:xl[3],y:520},{name:"Rocketeer",tier:3,x:xl[3],y:585},{name:"Booster",tier:3,x:xl[3],y:650},{name:"OctoTank",tier:3,x:xl[3],y:715},{name:"GunnerTrapper",tier:3,x:xl[3],y:780},{name:"PentaShot",tier:3,x:xl[3],y:845},{name:"Hurricane",tier:3,x:xl[3],y:910},{name:"MoreGun",tier:3,x:xl[3],y:975},{name:"Spreadshot",tier:3,x:xl[3],y:1040},{name:"TriAngle",tier:3,x:xl[3],y:1105},{name:"BentHybrid",tier:3,x:xl[3],y:1170},{name:"TripleTwin",tier:3,x:xl[3],y:1235},{name:"Destroyer",tier:3,x:xl[3],y:1300},{name:"TwinFlank",tier:3,x:xl[3],y:1365},{name:"AutoSmasher",tier:3,x:xl[3],y:1430},{name:"Fortress",tier:3,x:xl[3],y:1495},{name:"Battleship",tier:3,x:xl[3],y:1560},{name:"Spike",tier:3,x:xl[3],y:1625},{name:"MegaSmasher",tier:3,x:xl[3],y:1690},{name:"Auto3",tier:3,x:xl[3],y:1755},{name:"Scout",tier:1,x:xl[1],y:2730},{name:"Cannon",tier:1,x:xl[1],y:4420},{name:"Ninja",tier:2,x:xl[2],y:2210},{name:"ScoutGhost",tier:2,x:xl[2],y:2730},{name:"Drone",tier:2,x:xl[2],y:3250},{name:"Artillery",tier:2,x:xl[2],y:3900},{name:"Railgun",tier:2,x:xl[2],y:4420},{name:"Siege",tier:2,x:xl[2],y:4940},{name:"Phantom",tier:3,x:xl[3],y:2080},{name:"Ambusher",tier:3,x:xl[3],y:2210},{name:"Spy",tier:3,x:xl[3],y:2340},{name:"Specter",tier:3,x:xl[3],y:2600},{name:"RamX",tier:3,x:xl[3],y:2730},{name:"Mine",tier:3,x:xl[3],y:2860},{name:"Swarm",tier:3,x:xl[3],y:3120},{name:"Guardian",tier:3,x:xl[3],y:3250},{name:"HunterDrone",tier:3,x:xl[3],y:3380},{name:"Howitzer",tier:3,x:xl[3],y:3770},{name:"Cassette",tier:3,x:xl[3],y:3900},{name:"Mortar",tier:3,x:xl[3],y:4030},{name:"Plasma",tier:3,x:xl[3],y:4290},{name:"EMPTank",tier:3,x:xl[3],y:4420},{name:"DualRailgun",tier:3,x:xl[3],y:4550},{name:"Citadel",tier:3,x:xl[3],y:4810},{name:"Bunker",tier:3,x:xl[3],y:4940},{name:"Tower",tier:3,x:xl[3],y:5070}],Ty=[["Basic","Assault"],["Basic","Skirmisher"],["Basic","Warlord"],["Assault","Sniper"],["Assault","MachineGun"],["Assault","FlankGuard"],["Skirmisher","Scout"],["Skirmisher","Cannon"],["Warlord","Engineer"],["Warlord","Defender"],["Sniper","Assassin"],["Sniper","Hunter"],["Sniper","Stalker"],["MachineGun","Gunner"],["MachineGun","Sprayer"],["MachineGun","TripleShot"],["FlankGuard","Twin"],["FlankGuard","QuadTank"],["FlankGuard","Smasher"],["Assassin","Ranger"],["Assassin","Annihilator"],["Assassin","Predator"],["Hunter","Streamliner"],["Hunter","Overtrapper"],["Hunter","Skimmer"],["Stalker","Landmine"],["Stalker","Fighter"],["Stalker","Rocketeer"],["Gunner","Booster"],["Gunner","OctoTank"],["Gunner","GunnerTrapper"],["Sprayer","PentaShot"],["Sprayer","Hurricane"],["Sprayer","MoreGun"],["TripleShot","Spreadshot"],["TripleShot","TriAngle"],["TripleShot","BentHybrid"],["Twin","TripleTwin"],["Twin","Destroyer"],["Twin","TwinFlank"],["QuadTank","AutoSmasher"],["QuadTank","Fortress"],["QuadTank","Battleship"],["Smasher","Spike"],["Smasher","MegaSmasher"],["Smasher","Auto3"],["Scout","Ninja"],["Scout","ScoutGhost"],["Scout","Drone"],["Cannon","Artillery"],["Cannon","Railgun"],["Cannon","Siege"],["Ninja","Phantom"],["Ninja","Ambusher"],["Ninja","Spy"],["ScoutGhost","Specter"],["ScoutGhost","RamX"],["ScoutGhost","Mine"],["Drone","Swarm"],["Drone","Guardian"],["Drone","HunterDrone"],["Artillery","Howitzer"],["Artillery","Cassette"],["Artillery","Mortar"],["Railgun","Plasma"],["Railgun","EMPTank"],["Railgun","DualRailgun"],["Siege","Citadel"],["Siege","Bunker"],["Siege","Tower"],["Engineer","Overseer"],["Engineer","Architect"],["Engineer","Commander"],["Overseer","Overlord"],["Overseer","Manager"],["Overseer","Necromancer"],["Architect","Warden"],["Architect","Outpost"],["Commander","Marshal"],["Commander","Vanguard"],["Defender","Protector"],["Defender","Stronghold"],["Defender","Rampart"],["Protector","Golem"],["Protector","Paragon"],["Stronghold","Phalanx"],["Stronghold","Garrison"],["Rampart","Redoubt"],["Rampart","Bulkhead"]],K0={0:"#44aaff",1:"#e0e0e0",2:"#22cc55",3:"#ffdd00",4:"#ff8800",5:"#ff3333"},xy={0:"Синий · Ур.1",1:"Белый · Ур.5",2:"Зелёный · Ур.15",3:"Жёлтый · Ур.30",4:"Оранжевый · Ур.45",5:"Красный · Ур.60"},Ay=["rgba(50,200,100,0.04)","rgba(255,160,50,0.04)","rgba(180,80,255,0.04)"],Ey=[92,1555,3017,7700,11800],My=1700;

;(function addNewBranches(){
  // ── Tier-1 tanks (upgrade from Basic at level 15) ────────────────────
  _t['Shotgun']={name:'Shotgun',requiredLevel:15,upgradesFrom:['Skirmisher'],color:'#22cc55',
    description:'Широкий залп дроби — сметает всё вблизи.',
    barrels:[el(-0.45,38,11,1.0,0.95,0.92,0.75,0.18),el(-0.22,44,13,1.0,1.0,0.92,0.85,0.15),
             el(0,48,15,1.0,1.0,0.92,0.9,0.12),el(0.22,44,13,1.0,1.0,0.92,0.85,0.15),
             el(0.45,38,11,1.0,0.95,0.92,0.75,0.18)],
    noBarrels:false,bodyDamageMultiplier:1.0,radiusMultiplier:1.0};

  _t['Dreadnought']={name:'Dreadnought',requiredLevel:15,upgradesFrom:['Warlord'],color:'#22cc55',
    description:'Один колоссальный снаряд — пробивает насквозь.',
    isPiercing:true,
    barrels:[el(0,56,28,1.0,0.6,2.0,3.5)],
    noBarrels:false,bodyDamageMultiplier:1.3,radiusMultiplier:1.1};

  // ── Tier-2 tanks — Shotgun branch (level 30) ──────────────────────────
  _t['Blaster']={name:'Blaster',requiredLevel:30,upgradesFrom:['Shotgun'],color:'#ffdd00',
    description:'Веер из 7 стволов — сплошная стена пуль.',
    barrels:[el(-0.55,34,10,1.0,0.95,0.88,0.65,0.22),el(-0.33,38,12,1.0,1.0,0.88,0.75,0.18),
             el(-0.11,42,13,1.0,1.0,0.88,0.82,0.14),el(0,44,14,1.0,1.0,0.88,0.85,0.12),
             el(0.11,42,13,1.0,1.0,0.88,0.82,0.14),el(0.33,38,12,1.0,1.0,0.88,0.75,0.18),
             el(0.55,34,10,1.0,0.95,0.88,0.65,0.22)],
    noBarrels:false,bodyDamageMultiplier:0.85,radiusMultiplier:1.0};

  _t['Buster']={name:'Buster',requiredLevel:30,upgradesFrom:['Shotgun'],color:'#ffdd00',
    description:'Два тяжёлых ствола — сокрушительный двойной удар.',
    barrels:[el(-0.18,48,20,1.0,0.7,1.4,2.0),el(0.18,48,20,1.0,0.7,1.4,2.0)],
    noBarrels:false,bodyDamageMultiplier:1.1,radiusMultiplier:1.05};

  _t['Riot']={name:'Riot',requiredLevel:30,upgradesFrom:['Shotgun'],color:'#ffdd00',
    description:'Четыре ствола крестом — огонь во все стороны.',
    barrels:[el(0,44,14,1.0,1.0,0.95,1.0),el(Math.PI/2,44,14,1.0,1.0,0.95,1.0),
             el(Math.PI,44,14,1.0,1.0,0.95,1.0),el(-Math.PI/2,44,14,1.0,1.0,0.95,1.0)],
    noBarrels:false,bodyDamageMultiplier:0.9,radiusMultiplier:1.0};

  // ── Tier-2 tanks — Dreadnought branch (level 30) ──────────────────────
  _t['Colossus']={name:'Colossus',requiredLevel:30,upgradesFrom:['Dreadnought'],color:'#ffdd00',
    description:'Пушка-гигант + два задних — тяжёлый ударный крейсер.',
    barrels:[el(0,56,32,1.0,0.55,1.9,3.8),
             el(Math.PI+0.22,30,11,1.0,0.8,0.9,0.7),el(Math.PI-0.22,30,11,1.0,0.8,0.9,0.7)],
    noBarrels:false,bodyDamageMultiplier:1.2,radiusMultiplier:1.3};

  _t['Cruiser']={name:'Cruiser',requiredLevel:30,upgradesFrom:['Dreadnought'],color:'#ffdd00',
    description:'Два больших смещённых ствола — крейсер двойного огня.',
    barrels:[el(-0.1,52,24,1.0,0.58,1.5,2.8),el(0.1,52,24,1.0,0.58,1.5,2.8)],
    noBarrels:false,bodyDamageMultiplier:1.1,radiusMultiplier:1.15};

  _t['Brawler']={name:'Brawler',requiredLevel:30,upgradesFrom:['Dreadnought'],color:'#ffdd00',
    description:'Три ствола — вперёд и по бокам, мастер ближнего боя.',
    barrels:[el(0,48,20,1.0,0.65,1.3,2.0),
             el(Math.PI/2,34,13,1.0,0.65,1.1,1.2),el(-Math.PI/2,34,13,1.0,0.65,1.1,1.2)],
    noBarrels:false,bodyDamageMultiplier:2.5,radiusMultiplier:1.15};

  // ── Russian display names ─────────────────────────────────────────────
  W1['Shotgun']     = 'Дробовик';
  W1['Dreadnought'] = 'Дредноут';
  W1['Blaster']     = 'Бластер';
  W1['Buster']      = 'Сокрушитель';
  W1['Riot']        = 'Буря';
  W1['Colossus']    = 'Колосс';
  W1['Cruiser']     = 'Крейсер';
  W1['Brawler']     = 'Громила';

  // ── Tree nodes (y-coords will be ×2.5 by generateT4, then re-laid out) ─
  w0.push({name:'Shotgun',     tier:1, x:xl[1], y:5500});
  w0.push({name:'Dreadnought', tier:1, x:xl[1], y:7000});
  w0.push({name:'Blaster',     tier:2, x:xl[2], y:5240});
  w0.push({name:'Buster',      tier:2, x:xl[2], y:5500});
  w0.push({name:'Riot',        tier:2, x:xl[2], y:5760});
  w0.push({name:'Colossus',    tier:2, x:xl[2], y:6740});
  w0.push({name:'Cruiser',     tier:2, x:xl[2], y:7000});
  w0.push({name:'Brawler',     tier:2, x:xl[2], y:7260});

  // ── Tree edges ────────────────────────────────────────────────────────
  Ty.push(['Skirmisher','Shotgun']);
  Ty.push(['Warlord','Dreadnought']);
  Ty.push(['Shotgun','Blaster']);
  Ty.push(['Shotgun','Buster']);
  Ty.push(['Shotgun','Riot']);
  Ty.push(['Dreadnought','Colossus']);
  Ty.push(['Dreadnought','Cruiser']);
  Ty.push(['Dreadnought','Brawler']);
})();

;(function redesignClasses(){
  var el=function(i,h,o,s,T,v,E,B,lat){return{angleOffset:i,length:h,width:o,reloadMultiplier:s,bulletSizeMultiplier:T,bulletSpeedMultiplier:v,bulletDamageMultiplier:E>1?1+(E-1)*0.65:E,lateralOffset:lat||0,...(B!==undefined?{spread:B}:{})};};


  // ═══════════════════════════════════════════════════════════════
  //  НОВЫЕ Т2 ТАНКИ (ур.5) — промежуточные архетипы
  // ═══════════════════════════════════════════════════════════════

  // Assault — боевой архетип → Sniper, MachineGun, FlankGuard
  _t['Assault']={name:'Assault',requiredLevel:5,upgradesFrom:['Basic'],color:'#e0e0e0',
    radiusMultiplier:1.05,
    description:'Боевой архетип — чуть мощнее базового. Ведёт к снайперу, пулемёту и защите флангов.',
    barrels:[el(0,50,14,0.95,1.02,1.08,1.08)]};

  // Skirmisher — лёгкий архетип → Scout, Shotgun, Cannon
  _t['Skirmisher']={name:'Skirmisher',requiredLevel:5,upgradesFrom:['Basic'],color:'#e0e0e0',
    radiusMultiplier:0.95,
    description:'Лёгкий архетип — быстрее и манёвреннее базового. Ведёт к разведчику, дробовику и пушкарю.',
    barrels:[el(0,48,13,0.90,0.98,1.12,0.98)]};

  // Warlord — тяжёлый архетип → Dreadnought, Engineer, Defender
  _t['Warlord']={name:'Warlord',requiredLevel:5,upgradesFrom:['Basic'],color:'#e0e0e0',
    radiusMultiplier:1.15,bodyDamageMultiplier:1.3,
    description:'Тяжёлый архетип — крупнее и прочнее базового. Ведёт к дредноуту, инженеру и защитнику.',
    barrels:[el(0,46,17,1.05,1.10,0.95,1.12)]};

  // ═══════════════════════════════════════════════════════════════
  //  СНАЙПЕР (SNIPER) BRANCH — Уникальная механика: точность + невидимость
  // ═══════════════════════════════════════════════════════════════
  // T2: длинный ствол, медленный перезаряд, высокий урон
  _t['Sniper']={name:'Sniper',requiredLevel:15,radiusMultiplier:1.05,upgradesFrom:['Assault'],color:'#22cc55',
    description:'Один точный выстрел — огромный урон на большой дистанции.',
    barrels:[el(0,72,9,2.6,0.72,2.2,2.0)]};

  // T3-A: невидимость между выстрелами — засада
  _t['Assassin']={name:'Assassin',requiredLevel:30,radiusMultiplier:1.1,upgradesFrom:['Sniper'],color:'#ffdd00',
    isInvis:true,
    description:'МЕХАНИКА: Невидим между выстрелами — атакует из темноты.',
    barrels:[el(0,82,8,2.9,0.66,2.5,2.4)]};

  // T3-B: двойной ствол — снайперский + поддерживающий
  _t['Hunter']={name:'Hunter',requiredLevel:30,radiusMultiplier:1.1,upgradesFrom:['Sniper'],color:'#ffdd00',
    description:'МЕХАНИКА: Два ствола разной мощи — снайперский и средний одновременно.',
    barrels:[el(0,74,11,2.2,0.82,2.1,1.9),el(0,54,17,1.4,1.1,1.6,1.3)]};

  // T3-C: тройной точный залп
  _t['Stalker']={name:'Stalker',requiredLevel:30,radiusMultiplier:1.1,upgradesFrom:['Sniper'],color:'#ffdd00',
    description:'МЕХАНИКА: Три снайперских ствола кластером — накрывает зону.',
    barrels:[el(-0.09,70,8,2.5,0.70,2.0,1.7),el(0,72,9,2.6,0.70,2.1,1.8),el(0.09,70,8,2.5,0.70,2.0,1.7)]};

  // T4 from Assassin — невидимость + максимальная дальность
  _t['Ranger']={name:'Ranger',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Assassin'],color:'#ff8800',
    isInvis:true,
    description:'Невидимый снайпер — рекордная дальность, невидим между выстрелами.',
    barrels:[el(0,96,7,3.2,0.60,2.8,3.0)]};

  // T4 from Assassin — колоссальный разрушительный снаряд
  _t['Annihilator']={name:'Annihilator',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Assassin'],color:'#ff8800',
    isPiercing:true,description:'Один огромный снаряд — пробивает всё, уничтожает группы врагов.',
    barrels:[el(0,58,30,2.8,2.4,0.95,3.5)]};

  // T4 from Assassin — три уровня дальности
  _t['Predator']={name:'Predator',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Assassin'],color:'#ff8800',
    description:'Три ствола разной длины — снайпер + средний + ближний одновременно.',
    barrels:[el(0,80,9,3.0,0.65,2.5,2.5),el(0,60,14,1.8,1.1,1.8,1.8),el(0,45,19,1.0,1.3,1.2,1.4)]};

  // T4 from Hunter — 5 вложенных стволов
  _t['Streamliner']={name:'Streamliner',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Hunter'],color:'#ff8800',
    description:'5 вложенных стволов — непрерывный поток снарядов на дальней дистанции.',
    barrels:[30,37,44,51,58].map(function(h,i){return el(0,h,Math.max(8,11-i),0.22,0.65,1.2,0.55);})};

  // T4 from Hunter — снайпер + ловушки по бокам
  _t['Overtrapper']={name:'Overtrapper',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Hunter'],color:'#ff8800',
    description:'МЕХАНИКА: Снайперский ствол + ловушки по бокам — блокирует отступление.',
    barrels:[el(0,52,14,1.2,1.1,1.2,1.0),Object.assign(el(2.5,34,12,0.8,0.8,1.0,1.3),{isTrap:true}),Object.assign(el(-2.5,34,12,0.8,0.8,1.0,1.3),{isTrap:true})]};

  // T4 from Hunter — два угловых снайперских ствола
  _t['Skimmer']={name:'Skimmer',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Hunter'],color:'#ff8800',
    description:'Два угловых ствола — перекрёстный огонь с большой дальностью.',
    barrels:[el(0.30,62,12,2.8,1.2,2.1,1.5),el(-0.30,62,12,2.8,1.2,2.1,1.5)]};

  // T4 from Stalker — три оси атаки
  _t['Fighter']={name:'Fighter',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Stalker'],color:'#ff8800',
    description:'Снайпер + два боковых ствола — тройная зона поражения.',
    barrels:[el(0,55,14,1.3,1.1,1.3,1.1),el(Math.PI/2,36,11,0.9,0.9,1.0,1.2),el(-Math.PI/2,36,11,0.9,0.9,1.0,1.2)]};

  // T4 from Stalker — самонаводящаяся ракета
  _t['Rocketeer']={name:'Rocketeer',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Stalker'],color:'#ff8800',
    isHoming:true,
    description:'МЕХАНИКА: Гигантская самонаводящаяся ракета — цель никуда не денется!',
    barrels:[el(0,58,28,0.48,3.5,2.4,2.4)]};

  // T4 from Stalker — невидимая мина
  _t['Landmine']={name:'Landmine',requiredLevel:45,upgradesFrom:['Stalker'],color:'#ff8800',
    isInvis:true,noBarrels:true,bodyDamageMultiplier:7,radiusMultiplier:1.2,
    description:'МЕХАНИКА: Полностью невидим — огромный урон тараном, без стволов.',
    barrels:[]};

  // ═══════════════════════════════════════════════════════════════
  //  ПУЛЕМЁТ (MACHINEGUN) BRANCH — Уникальная механика: скорострельность
  // ═══════════════════════════════════════════════════════════════
  // T2: быстрый перезаряд, лёгкий разброс
  _t['MachineGun']={name:'MachineGun',requiredLevel:15,radiusMultiplier:1.05,upgradesFrom:['Assault'],color:'#22cc55',
    description:'Ливень пуль — наивысшая скорострельность, лёгкий разброс.',
    barrels:[el(0,44,17,0.50,1.0,1.0,0.72,0.07)]};

  // T3-A: два узких ствола — двойной пулемёт
  _t['Gunner']={name:'Gunner',requiredLevel:30,radiusMultiplier:1.1,upgradesFrom:['MachineGun'],color:'#ffdd00',
    description:'МЕХАНИКА: Два тонких ствола — чередующийся огонь, вдвое больше пуль.',
    barrels:[el(0,46,9,0.40,0.70,1.0,0.60,undefined,-7),el(0,46,9,0.40,0.70,1.0,0.60,undefined,7)]};

  // T3-B: широкий ствол с сильным разбросом
  _t['Sprayer']={name:'Sprayer',requiredLevel:30,radiusMultiplier:1.1,upgradesFrom:['MachineGun'],color:'#ffdd00',
    description:'МЕХАНИКА: Один широкий ствол — хаотичный шквал с огромным конусом.',
    barrels:[el(0,50,20,0.44,1.05,0.90,0.60,0.14)]};

  // T3-C: тройной веерный залп
  _t['TripleShot']={name:'TripleShot',requiredLevel:30,radiusMultiplier:1.1,upgradesFrom:['MachineGun'],color:'#ffdd00',
    description:'МЕХАНИКА: Три пули одновременно в широком конусе — покрывает весь фронт.',
    barrels:[el(0,46,14,1.4,0.9,1.0,0.88),el(-0.35,42,14,1.4,0.9,1.0,0.88),el(0.35,42,14,1.4,0.9,1.0,0.88)]};

  // T4 from Gunner — передний ствол + 3 реактивных задних (тяга!)
  _t['Booster']={name:'Booster',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Gunner'],color:'#ff8800',
    description:'МЕХАНИКА: Передний пулемёт + 3 реактивных задних — тяга и атака одновременно!',
    barrels:[el(0,54,14,0.88,1.0,1.0,1.0),el(Math.PI,40,12,0.55,0.8,1.1,0.8,undefined,-10),el(Math.PI,40,12,0.55,0.8,1.1,0.8,undefined,10),el(Math.PI,42,12,0.48,0.8,1.2,0.88)]};

  // T4 from Gunner — 8 стволов во все стороны
  _t['OctoTank']={name:'OctoTank',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Gunner'],color:'#ff8800',
    description:'МЕХАНИКА: 8 стволов по 360° — непрерывный огонь в любую сторону.',
    barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI/4,41,12,1.7,0.82,0.96,0.78);})};

  // T4 from Gunner — двойной пулемёт + ловушка
  _t['GunnerTrapper']={name:'GunnerTrapper',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Gunner'],color:'#ff8800',
    description:'Два быстрых ствола вперёд + ловушка назад — атака и заграждение.',
    barrels:[el(0,47,9,0.35,0.7,1.0,0.65,undefined,-7),el(0,47,9,0.35,0.7,1.0,0.65,undefined,7),Object.assign(el(Math.PI,42,21,1.6,1.6,1.6,2.0),{isTrap:true})]};

  // T4 from Sprayer — пять стволов веером
  _t['PentaShot']={name:'PentaShot',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Sprayer'],color:'#ff8800',
    description:'Пять стволов одновременно — широкий веер, ни одна цель не пройдёт.',
    barrels:[-.52,-.26,0,.26,.52].map(function(i){return el(i,41,12,1.1,0.85,0.92,0.85);})};

  // T4 from Sprayer — 6 стволов спиралью
  _t['Hurricane']={name:'Hurricane',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Sprayer'],color:'#ff8800',
    description:'МЕХАНИКА: 6 стволов тайфуном — спиральный поток пуль со всех сторон.',
    barrels:[el(0,40,12,0.9,1.0,1.0,1.2,undefined,-8),el(0,38,10,0.9,0.88,0.9,1.2,undefined,8),el(2.09,40,12,0.9,1.0,1.0,1.2,undefined,-8),el(2.09,38,10,0.9,0.88,0.9,1.2,undefined,8),el(-2.09,40,12,0.9,1.0,1.0,1.2,undefined,-8),el(-2.09,38,10,0.9,0.88,0.9,1.2,undefined,8)]};

  // T4 from Sprayer — четыре параллельных ствола
  _t['MoreGun']={name:'MoreGun',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['Sprayer'],color:'#ff8800',
    description:'Четыре параллельных ствола — максимальная плотность огня.',
    barrels:[el(0,48,10,0.38,0.80,1.0,0.70,undefined,-21),el(0,48,10,0.38,0.80,1.0,0.70,undefined,-7),el(0,48,10,0.38,0.80,1.0,0.70,undefined,7),el(0,48,10,0.38,0.80,1.0,0.70,undefined,21)]};

  // T4 from TripleShot — 7 стволов максимальный веер
  _t['Spreadshot']={name:'Spreadshot',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['TripleShot'],color:'#ff8800',
    description:'7 стволов — максимально широкий веер, покрывает весь фронт.',
    barrels:[el(0,46,14,1.0,1.0,1.0,0.9),el(0.5,42,12,1.0,0.9,0.9,1.0),el(-0.5,42,12,1.0,0.9,0.9,1.0),el(0.9,38,11,1.0,0.8,0.8,1.1),el(-0.9,38,11,1.0,0.8,0.8,1.1),el(1.2,34,10,1.0,0.7,0.7,1.2),el(-1.2,34,10,1.0,0.7,0.7,1.2)]};

  // T4 from TripleShot — атака + реактивная тяга назад
  _t['TriAngle']={name:'TriAngle',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['TripleShot'],color:'#ff8800',
    description:'МЕХАНИКА: Один вперёд + два задних реактивных — тяга разгоняет вперёд!',
    barrels:[el(0,52,14,1.2,1.1,1.2,1.0),el(2.4,38,12,0.9,0.9,1.0,1.2),el(-2.4,38,12,0.9,0.9,1.0,1.2)]};

  // T4 from TripleShot — три диагональных ствола
  _t['BentHybrid']={name:'BentHybrid',requiredLevel:45,radiusMultiplier:1.2,upgradesFrom:['TripleShot'],color:'#ff8800',
    description:'Три угловых ствола — диагональный огонь под 45°, охват по бокам.',
    barrels:[el(0,50,16,1.0,1.2,1.2,1.2),el(0.7,43,12,0.85,1.0,1.0,1.3),el(-0.7,43,12,0.85,1.0,1.0,1.3)]};

  // ═══════════════════════════════════════════════════════════════
  //  РАЗВЕДЧИК (SCOUT) BRANCH — Уникальная механика: скорость + невидимость
  // ═══════════════════════════════════════════════════════════════
  // T2: маленький, быстрый, слабые пули
  _t['Scout']={name:'Scout',requiredLevel:15,upgradesFrom:['Skirmisher'],color:'#22cc55',
    description:'Самый быстрый танк — маленький, неуловимый, слабый урон.',
    barrels:[el(0,38,9,1.2,0.9,1.4,0.68)],radiusMultiplier:0.80};

  // T3-A: невидимость + снайперский удар из засады
  _t['Ninja']={name:'Ninja',requiredLevel:30,upgradesFrom:['Scout'],color:'#ffdd00',
    isInvis:true,
    description:'МЕХАНИКА: Невидим стоя — резкий точный удар из засады.',
    barrels:[el(0,65,10,1.7,0.76,1.55,1.85)]};

  // T3-B: невидимость + огромный урон тараном
  _t['ScoutGhost']={droneHits:14,name:'ScoutGhost',requiredLevel:30,upgradesFrom:['Scout'],color:'#ffdd00',
    isInvis:true,noBarrels:true,bodyDamageMultiplier:8,radiusMultiplier:1.05,
    description:'МЕХАНИКА: Полностью невидим + огромный урон корпусом — призрак-таран.',
    barrels:[]};

  // T3-C: 3 самонаводящихся дрона — охотники
  _t['Drone']={droneHits:6,name:'Drone',requiredLevel:30,radiusMultiplier:1.15,upgradesFrom:['Scout'],color:'#ffdd00',
    isDroneShooter:true,
    description:'МЕХАНИКА: 3 автономных дрона — самостоятельно охотятся на врагов.',
    barrels:[el(0,32,9,0.80,1.2,1.1,0.72),el(2.09,32,9,0.80,1.2,1.1,0.72),el(-2.09,32,9,0.80,1.2,1.1,0.72)]};

  // T4 from Ninja — невидимость + два быстрых ствола
  _t['Phantom']={name:'Phantom',requiredLevel:45,upgradesFrom:['Ninja'],color:'#ff8800',
    isInvis:true,radiusMultiplier:1.1,
    description:'Невидимый двойной снайпер — два быстрых удара из тени.',
    barrels:[el(-0.10,62,9,1.6,0.75,1.6,1.8),el(0.10,62,9,1.6,0.75,1.6,1.8)]};

  // T4 from Ninja — невидимость + один мощный удар
  _t['Ambusher']={name:'Ambusher',requiredLevel:45,upgradesFrom:['Ninja'],color:'#ff8800',
    isInvis:true,radiusMultiplier:1.1,
    description:'МЕХАНИКА: Невидим + один сокрушительный выстрел — чистый ваншот из тени.',
    barrels:[el(0,75,11,2.5,0.70,2.0,2.2)]};

  // T4 from Ninja — невидимый с тремя стволами в разные стороны
  _t['Spy']={name:'Spy',requiredLevel:45,upgradesFrom:['Ninja'],color:'#ff8800',
    isInvis:true,radiusMultiplier:1.1,
    description:'Шпион — невидим, три лёгких ствола: вперёд и по сторонам.',
    barrels:[el(0,55,10,1.4,0.80,1.4,1.5),el(2.09,42,9,1.2,0.78,1.3,1.2),el(-2.09,42,9,1.2,0.78,1.3,1.2)]};

  // T4 from ScoutGhost — максимальный невидимый таран
  _t['Specter']={name:'Specter',requiredLevel:45,upgradesFrom:['ScoutGhost'],color:'#ff8800',
    isInvis:true,noBarrels:true,bodyDamageMultiplier:12,radiusMultiplier:1.25,
    description:'МЕХАНИКА: Макс. урон корпуса + невидимость — разрушительный призрак-таран.',
    barrels:[]};

  // T4 from ScoutGhost — открытый таран без невидимости, экстремальный урон
  _t['RamX']={name:'RamX',requiredLevel:45,upgradesFrom:['ScoutGhost'],color:'#ff8800',
    noBarrels:true,bodyDamageMultiplier:15,radiusMultiplier:1.35,
    description:'МЕХАНИКА: Огромный корпус без невидимости — рекордный урон тараном!',
    barrels:[]};

  // T4 from ScoutGhost — невидимка с ловушками
  _t['Mine']={name:'Mine',requiredLevel:45,upgradesFrom:['ScoutGhost'],color:'#ff8800',
    isInvis:true,bodyDamageMultiplier:4,radiusMultiplier:1.1,
    description:'Невидимая мина — расставляет ловушки и наносит урон корпусом.',
    barrels:[Object.assign(el(0,36,14,0.9,0.9,0.8,1.2),{isTrap:true}),Object.assign(el(Math.PI,36,14,0.9,0.9,0.8,1.2),{isTrap:true})]};

  // T4 from Drone — 6 дронов — рой
  _t['Swarm']={droneHits:4,name:'Swarm',requiredLevel:45,upgradesFrom:['Drone'],color:'#ff8800',
    isDroneShooter:true,radiusMultiplier:1.2,
    description:'МЕХАНИКА: Рой из 6 дронов — подавляет числом, охватывает всю зону.',
    barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI*2/6,28,7,0.72,1.1,1.05,0.65);})};

  // T4 from Drone — 4 мощных дрона + корпус
  _t['Guardian']={droneHits:8,name:'Guardian',requiredLevel:45,upgradesFrom:['Drone'],color:'#ff8800',
    isDroneShooter:true,radiusMultiplier:1.2,bodyDamageMultiplier:1.5,
    description:'Страж — 4 мощных дрона защищают танк + урон корпуса.',
    barrels:[0,1,2,3].map(function(i){return el(i*Math.PI/2,30,10,0.80,1.25,1.0,0.80);})};

  // T4 from Drone — невидимый с дронами-охотниками
  _t['HunterDrone']={droneHits:10,name:'HunterDrone',requiredLevel:45,upgradesFrom:['Drone'],color:'#ff8800',
    isDroneShooter:true,isInvis:true,radiusMultiplier:1.2,
    description:'МЕХАНИКА: Невидимый охотник — дроны атакуют сами, хозяин невидим!',
    barrels:[el(-0.15,55,9,1.2,1.0,1.5,1.2),el(0,64,10,1.6,0.85,1.5,1.5),el(0.15,55,9,1.2,1.0,1.5,1.2)]};

  // ═══════════════════════════════════════════════════════════════
  //  ДРОБОВИК (SHOTGUN) BRANCH — Уникальная механика: дробь + охват
  // ═══════════════════════════════════════════════════════════════
  // T2: 5 зарядов дроби — широкий конус вблизи
  _t['Shotgun']={name:'Shotgun',requiredLevel:15,upgradesFrom:['Skirmisher'],color:'#22cc55',
    description:'МЕХАНИКА: 5 дробин одновременно — опустошает всё в ближнем бою.',
    barrels:[el(-0.45,38,11,1.05,0.95,0.92,0.75,0.18),el(-0.22,44,13,1.05,1.0,0.92,0.85,0.15),
             el(0,48,15,1.05,1.0,0.92,0.9,0.12),el(0.22,44,13,1.05,1.0,0.92,0.85,0.15),
             el(0.45,38,11,1.05,0.95,0.92,0.75,0.18)]};

  // T3-A: 9 дробин, широкий конус — максимальный разброс
  _t['Blaster']={name:'Blaster',requiredLevel:30,upgradesFrom:['Shotgun'],color:'#ffdd00',
    description:'МЕХАНИКА: 9 дробин в огромном конусе 70° — стена пуль в ближнем бою.',
    barrels:[el(-0.60,34,9,1.05,0.90,0.88,0.62,0.24),el(-0.38,37,11,1.05,0.95,0.88,0.70,0.20),
             el(-0.18,41,12,1.05,1.0,0.88,0.78,0.16),el(-0.06,43,13,1.05,1.0,0.88,0.82,0.13),
             el(0,45,14,1.05,1.0,0.88,0.85,0.12),
             el(0.06,43,13,1.05,1.0,0.88,0.82,0.13),el(0.18,41,12,1.05,1.0,0.88,0.78,0.16),
             el(0.38,37,11,1.05,0.95,0.88,0.70,0.20),el(0.60,34,9,1.05,0.90,0.88,0.62,0.24)]};

  // T3-B: 3 тяжёлых снаряда — концентрированный удар
  _t['Buster']={name:'Buster',requiredLevel:30,upgradesFrom:['Shotgun'],color:'#ffdd00',
    description:'МЕХАНИКА: 3 тяжёлых снаряда в узком конусе — высокий урон на чуть большей дистанции.',
    barrels:[el(-0.18,48,16,1.1,1.3,0.95,1.35,0.10),el(0,52,18,1.1,1.4,0.95,1.5,0.08),el(0.18,48,16,1.1,1.3,0.95,1.35,0.10)]};

  // T3-C: 3 дробины × 4 направления — круговой дробовик!
  _t['Riot']={name:'Riot',requiredLevel:30,upgradesFrom:['Shotgun'],color:'#ffdd00',
    description:'МЕХАНИКА: Дробь в 4 диагональных направлениях — покрывает 360° вокруг!',
    barrels:[el(Math.PI/4,38,10,1.1,0.90,0.88,0.72,0.20),el(Math.PI/4+0.25,34,9,1.1,0.88,0.88,0.65,0.22),el(Math.PI/4-0.25,34,9,1.1,0.88,0.88,0.65,0.22),
             el(-Math.PI/4,38,10,1.1,0.90,0.88,0.72,0.20),el(-Math.PI/4+0.25,34,9,1.1,0.88,0.88,0.65,0.22),el(-Math.PI/4-0.25,34,9,1.1,0.88,0.88,0.65,0.22),
             el(Math.PI+Math.PI/4,38,10,1.1,0.90,0.88,0.72,0.20),el(Math.PI-Math.PI/4,38,10,1.1,0.90,0.88,0.72,0.20)]};

  // ═══════════════════════════════════════════════════════════════
  //  ИНЖЕНЕР (ENGINEER) BRANCH — Новая ветвь! Механика: автономные дроны
  // ═══════════════════════════════════════════════════════════════
  // T2: 4 дрона по углам — базовая автономная армия
  _t['Engineer']={droneHits:5,name:'Engineer',requiredLevel:15,upgradesFrom:['Warlord'],color:'#22cc55',
    isDroneShooter:true,radiusMultiplier:1.0,
    description:'НОВАЯ МЕХАНИКА: 4 автономных дрона атакуют врагов самостоятельно!',
    barrels:[0,1,2,3].map(function(i){return el(i*Math.PI/2,28,7,0.95,1.05,1.0,0.62);})};

  // T3-A: 6 дронов — расширенная армия
  _t['Overseer']={droneHits:7,name:'Overseer',requiredLevel:30,upgradesFrom:['Engineer'],color:'#ffdd00',
    isDroneShooter:true,radiusMultiplier:1.15,
    description:'МЕХАНИКА: 6 дронов в армии — больше юнитов, лучше охват территории.',
    barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI*2/6,26,8,0.85,1.1,1.0,0.65);})};

  // T3-B: передний ствол + 2 боковых мины — гибрид инженера
  _t['Architect']={name:'Architect',requiredLevel:30,upgradesFrom:['Engineer'],color:'#ffdd00',
    radiusMultiplier:1.1,
    description:'МЕХАНИКА: Пушка вперёд + ловушки по бокам — атака и минирование сразу.',
    barrels:[el(0,48,14,1.1,1.0,1.1,1.0),Object.assign(el(Math.PI/2,34,12,0.85,0.9,0.9,1.1),{isTrap:true}),Object.assign(el(-Math.PI/2,34,12,0.85,0.9,0.9,1.1),{isTrap:true})]};

  // T3-C: 5 мощных дронов + увеличенный корпус
  _t['Commander']={droneHits:8,name:'Commander',requiredLevel:30,upgradesFrom:['Engineer'],color:'#ffdd00',
    isDroneShooter:true,radiusMultiplier:1.2,bodyDamageMultiplier:1.8,
    description:'МЕХАНИКА: 5 мощных дронов + урон корпусом — командует армией в ближнем бою.',
    barrels:[0,1,2,3,4].map(function(i){return el(i*Math.PI*2/5,30,10,0.78,1.2,1.0,0.72);})};

  // T4 from Overseer — 4 огромных дрона — максимальная армия
  _t['Overlord']={droneHits:6,name:'Overlord',requiredLevel:45,upgradesFrom:['Overseer'],color:'#ff8800',
    isDroneShooter:true,radiusMultiplier:1.40,
    description:'Повелитель — 4 огромных дрона, максимальная сила каждого юнита.',
    barrels:[0,1,2,3].map(function(i){return el(i*Math.PI/2,42,16,0.68,1.4,1.0,0.95);})};

  // T4 from Overseer — невидимый повелитель дронов
  _t['Manager']={droneHits:12,name:'Manager',requiredLevel:45,upgradesFrom:['Overseer'],color:'#9922bb',
    isDroneShooter:true,isInvis:true,radiusMultiplier:1.30,
    description:'МЕХАНИКА: Невидимый повелитель — сам невидим, два больших дрона охотятся!',
    barrels:[el(0,44,18,0.72,1.35,1.0,0.90),el(Math.PI,44,18,0.72,1.35,1.0,0.90)]};

  // T4 from Overseer — 12 мини-дронов — рой
  _t['Necromancer']={droneHits:5,name:'Necromancer',requiredLevel:45,upgradesFrom:['Overseer'],color:'#228855',
    isDroneShooter:true,radiusMultiplier:1.20,
    description:'МЕХАНИКА: Рой из 12 мини-дронов — подавляет числом, занимает всю карту!',
    barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI*2/8,28,11,0.55,0.85,1.0,0.48);})};

  // T4 from Architect — пушка + 4 ловушки
  _t['Warden']={name:'Warden',requiredLevel:45,upgradesFrom:['Architect'],color:'#ff8800',
    radiusMultiplier:1.2,
    description:'Страж — одна мощная пушка + 4 ловушки по периметру, создаёт укреплённую зону.',
    barrels:[el(0,52,16,1.1,1.1,1.2,1.1),Object.assign(el(Math.PI/2,36,13,0.80,0.9,0.9,1.2),{isTrap:true}),Object.assign(el(-Math.PI/2,36,13,0.80,0.9,0.9,1.2),{isTrap:true}),Object.assign(el(Math.PI*0.75,32,12,0.80,0.88,0.9,1.1),{isTrap:true}),Object.assign(el(-Math.PI*0.75,32,12,0.80,0.88,0.9,1.1),{isTrap:true})]};

  // T4 from Architect — мини-дронов + ловушки = форпост
  _t['Outpost']={droneHits:6,name:'Outpost',requiredLevel:45,upgradesFrom:['Architect'],color:'#ff8800',
    isDroneShooter:true,radiusMultiplier:1.2,
    description:'МЕХАНИКА: Дроны + ловушки — превращает зону в непроходимую крепость.',
    barrels:[Object.assign(el(Math.PI/4,30,10,0.88,1.1,1.0,0.70),{isTrap:false}),Object.assign(el(-Math.PI/4,30,10,0.88,1.1,1.0,0.70),{isTrap:false}),Object.assign(el(Math.PI*0.75,34,12,0.85,0.90,0.90,1.0),{isTrap:true}),Object.assign(el(-Math.PI*0.75,34,12,0.85,0.90,0.90,1.0),{isTrap:true}),el(0,42,13,1.05,1.0,1.05,0.90)]};

  // T4 from Commander — армия из 8 дронов
  _t['Marshal']={droneHits:7,name:'Marshal',requiredLevel:45,upgradesFrom:['Commander'],color:'#ff8800',
    isDroneShooter:true,radiusMultiplier:1.3,bodyDamageMultiplier:2.5,
    description:'Маршал — 8 дронов + огромный корпус — армия в движении.',
    barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI/4,26,8,0.70,1.15,1.0,0.68);})};

  // T4 from Commander — 3 огромных дрона без промаха
  _t['Vanguard']={droneHits:10,name:'Vanguard',requiredLevel:45,upgradesFrom:['Commander'],color:'#ff8800',
    isDroneShooter:true,isHoming:true,radiusMultiplier:1.25,bodyDamageMultiplier:2.0,
    description:'МЕХАНИКА: 3 самонаводящихся боевых дрона — догоняют цель автоматически!',
    barrels:[el(0,34,13,0.70,1.3,1.0,0.88),el(2.09,34,13,0.70,1.3,1.0,0.88),el(-2.09,34,13,0.70,1.3,1.0,0.88)]};

  // ═══════════════════════════════════════════════════════════════
  //  ЗАЩИТНИК (DEFENDER) BRANCH — Новая ветвь! Механика: броня + корпус
  // ═══════════════════════════════════════════════════════════════
  // T2: большой, медленный, урон корпусом — броня
  _t['Defender']={name:'Defender',requiredLevel:15,upgradesFrom:['Warlord'],color:'#22cc55',
    radiusMultiplier:1.40,bodyDamageMultiplier:2.0,
    description:'НОВАЯ МЕХАНИКА: Огромный броневик — одна пушка + урон при контакте!',
    barrels:[el(0,50,16,1.4,1.2,0.9,1.4)]};

  // T3-A: 3 ствола + большой корпус
  _t['Protector']={name:'Protector',requiredLevel:30,upgradesFrom:['Defender'],color:'#ffdd00',
    radiusMultiplier:1.50,bodyDamageMultiplier:2.8,
    description:'МЕХАНИКА: Три ствола 120° + огромный корпус — круговая защита.',
    barrels:[el(0,48,15,1.3,1.15,0.92,1.3),el(2.09,44,13,1.3,1.1,0.90,1.2),el(-2.09,44,13,1.3,1.1,0.90,1.2)]};

  // T3-B: 6 стволов 360° — неприступная крепость
  _t['Stronghold']={name:'Stronghold',requiredLevel:30,upgradesFrom:['Defender'],color:'#ffdd00',
    radiusMultiplier:1.50,bodyDamageMultiplier:2.5,
    description:'МЕХАНИКА: 6 стволов по 360° + огромный корпус — неприступная крепость!',
    barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI/3,44,13,1.35,1.1,0.92,1.1);})};

  // T3-C: один колоссальный ствол + максимальный урон тараном
  _t['Rampart']={name:'Rampart',requiredLevel:30,upgradesFrom:['Defender'],color:'#ffdd00',
    radiusMultiplier:1.55,bodyDamageMultiplier:4.0,
    description:'МЕХАНИКА: Одна огромная пушка + рекордный урон тараном — лобовой штурм!',
    barrels:[el(0,58,24,1.6,1.5,0.88,2.0)]};

  // T4 from Protector — огромный танк без стволов, максимальный таран
  _t['Golem']={name:'Golem',requiredLevel:45,upgradesFrom:['Protector'],color:'#ff8800',
    radiusMultiplier:1.65,bodyDamageMultiplier:7.0,noBarrels:true,
    description:'МЕХАНИКА: Без стволов — чистый таран! Колоссальный урон корпусом, неуязвимость.',
    barrels:[]};

  // T4 from Protector — 4 ствола + мощный корпус
  _t['Paragon']={name:'Paragon',requiredLevel:45,upgradesFrom:['Protector'],color:'#ff8800',
    radiusMultiplier:1.55,bodyDamageMultiplier:3.5,
    description:'Эталон — 4 ствола крестом + мощная броня, идеальный баланс атаки и защиты.',
    barrels:[el(0,50,15,1.3,1.15,0.92,1.3),el(Math.PI/2,46,13,1.3,1.1,0.90,1.2),el(Math.PI,48,15,1.3,1.15,0.92,1.3),el(-Math.PI/2,46,13,1.3,1.1,0.90,1.2)]};

  // T4 from Stronghold — 8 стволов + гигантский корпус
  _t['Phalanx']={name:'Phalanx',requiredLevel:45,upgradesFrom:['Stronghold'],color:'#ff8800',
    radiusMultiplier:1.60,bodyDamageMultiplier:3.0,
    description:'Фаланга — 8 стволов 360° + гигантский корпус, непреодолимая стена.',
    barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI/4,42,12,1.4,1.05,0.90,1.05);})};

  // T4 from Stronghold — три огромных ствола + экстремальный урон корпусом
  _t['Garrison']={name:'Garrison',requiredLevel:45,upgradesFrom:['Stronghold'],color:'#ff8800',
    radiusMultiplier:1.58,bodyDamageMultiplier:4.5,
    description:'Гарнизон — три тяжёлых ствола вперёд/бок + бронированный корпус-таран.',
    barrels:[el(0,54,20,1.4,1.3,0.90,1.6),el(Math.PI/2,46,16,1.4,1.2,0.88,1.4),el(-Math.PI/2,46,16,1.4,1.2,0.88,1.4)]};

  // T4 from Rampart — ультра-таранный без стволов  
  _t['Redoubt']={name:'Redoubt',requiredLevel:45,upgradesFrom:['Rampart'],color:'#ff8800',
    radiusMultiplier:1.70,bodyDamageMultiplier:10.0,noBarrels:true,
    description:'МЕХАНИКА: Рекордный урон тараном — самый разрушительный корпус в игре!',
    barrels:[]};

  // T4 from Rampart — два колоссальных ствола + броня
  _t['Bulkhead']={name:'Bulkhead',requiredLevel:45,upgradesFrom:['Rampart'],color:'#ff8800',
    radiusMultiplier:1.60,bodyDamageMultiplier:5.0,
    description:'Переборка — два огромных снаряда + экстремальный урон корпусом.',
    barrels:[el(0,60,24,1.7,1.5,0.88,2.2),el(0,44,18,1.5,1.3,0.88,1.6)]};


})();

;(function addStealthFlags(){
  // Mark existing built-in stealth tanks
  ['Phantom','Ambusher','Ninja','ScoutGhost','Landmine'].forEach(function(n){if(_t[n])_t[n].isInvis=true;});
  // Mark all Alpha/Omega/Prime variants of stealth tanks
  ['Phantom','Ambusher','Ninja'].forEach(function(base){
    ['Alpha','Omega','Prime'].forEach(function(suf){if(_t[base+suf])_t[base+suf].isInvis=true;});
  });
})();

;(function addT3Branches(){
  // ── Tier-3 — Shotgun branch (level 45) ───────────────────────────────

  // From Blaster
  _t['Devastator']={name:'Devastator',requiredLevel:45,upgradesFrom:['Blaster'],color:'#ff8800',
    description:'Девять стволов — непробиваемая стена дроби.',
    barrels:[el(-0.65,30,9,1.0,0.95,0.85,0.55,0.25),el(-0.44,34,10,1.0,0.97,0.85,0.65,0.20),
             el(-0.22,38,12,1.0,1.0,0.85,0.75,0.16),el(-0.08,42,13,1.0,1.0,0.85,0.82,0.13),
             el(0,44,14,1.0,1.0,0.85,0.88,0.11),el(0.08,42,13,1.0,1.0,0.85,0.82,0.13),
             el(0.22,38,12,1.0,1.0,0.85,0.75,0.16),el(0.44,34,10,1.0,0.97,0.85,0.65,0.20),
             el(0.65,30,9,1.0,0.95,0.85,0.55,0.25)],
    noBarrels:false,bodyDamageMultiplier:0.8,radiusMultiplier:1.05};

  _t['Barrage']={name:'Barrage',requiredLevel:45,upgradesFrom:['Blaster'],color:'#ff8800',
    description:'Скорострельный шквал — 5 стволов вперёд и 2 по бокам.',
    barrels:[el(-0.3,40,11,0.7,1.1,0.85,0.78),el(-0.12,44,13,0.7,1.12,0.85,0.85),
             el(0,46,14,0.7,1.15,0.85,0.9),el(0.12,44,13,0.7,1.12,0.85,0.85),
             el(0.3,40,11,0.7,1.1,0.85,0.78),
             el(Math.PI/2,32,11,0.6,0.95,0.85,0.7),el(-Math.PI/2,32,11,0.6,0.95,0.85,0.7)],
    noBarrels:false,bodyDamageMultiplier:0.82,radiusMultiplier:1.0};

  _t['Canister']={name:'Canister',requiredLevel:45,upgradesFrom:['Blaster'],color:'#ff8800',
    description:'Три широких тяжёлых ствола — сокрушительная картечь.',
    barrels:[el(-0.28,42,18,1.0,0.8,1.1,1.5,0.20),el(0,46,20,1.0,0.75,1.1,1.8,0.15),
             el(0.28,42,18,1.0,0.8,1.1,1.5,0.20)],
    noBarrels:false,bodyDamageMultiplier:0.9,radiusMultiplier:1.08};

  // From Buster
  _t['Juggernaut']={name:'Juggernaut',requiredLevel:45,upgradesFrom:['Buster'],color:'#ff8800',
    description:'Три массивных ствола — неудержимый разрушитель.',
    barrels:[el(-0.22,50,24,1.0,0.65,1.5,2.5),el(0,52,26,1.0,0.6,1.5,2.8),
             el(0.22,50,24,1.0,0.65,1.5,2.5)],
    noBarrels:false,bodyDamageMultiplier:1.2,radiusMultiplier:1.15};

  _t['Obliterator']={name:'Obliterator',requiredLevel:45,upgradesFrom:['Buster'],color:'#ff8800',
    description:'Один сверхшироких ствол + 2 боковых — точечное уничтожение.',
    barrels:[el(0,52,30,1.0,0.55,1.8,3.5),
             el(Math.PI/2+0.15,34,14,1.0,0.75,1.1,1.2),
             el(-Math.PI/2-0.15,34,14,1.0,0.75,1.1,1.2)],
    noBarrels:false,bodyDamageMultiplier:1.3,radiusMultiplier:1.2};

  _t['Breacher']={name:'Breacher',requiredLevel:45,upgradesFrom:['Buster'],color:'#ff8800',
    description:'Два ствола вперёд и два по диагонали — пробивает любую оборону.',
    barrels:[el(-0.15,50,22,1.0,0.68,1.4,2.2),el(0.15,50,22,1.0,0.68,1.4,2.2),
             el(Math.PI/4,38,16,1.0,0.72,1.1,1.3),el(-Math.PI/4,38,16,1.0,0.72,1.1,1.3)],
    noBarrels:false,bodyDamageMultiplier:1.1,radiusMultiplier:1.1};

  // From Riot
  _t['Havoc']={name:'Havoc',requiredLevel:45,upgradesFrom:['Riot'],color:'#ff8800',
    description:'Восемь стволов во все стороны — полный контроль территории.',
    barrels:[el(0,44,14,1.0,1.0,0.92,0.95),el(Math.PI/4,42,13,1.0,1.0,0.92,0.9),
             el(Math.PI/2,44,14,1.0,1.0,0.92,0.95),el(3*Math.PI/4,42,13,1.0,1.0,0.92,0.9),
             el(Math.PI,44,14,1.0,1.0,0.92,0.95),el(-3*Math.PI/4,42,13,1.0,1.0,0.92,0.9),
             el(-Math.PI/2,44,14,1.0,1.0,0.92,0.95),el(-Math.PI/4,42,13,1.0,1.0,0.92,0.9)],
    noBarrels:false,bodyDamageMultiplier:0.85,radiusMultiplier:1.05};

  _t['Tempest']={name:'Tempest',requiredLevel:45,upgradesFrom:['Riot'],color:'#ff8800',
    description:'Шесть стволов — двойные пучки, огонь шестиугольником.',
    barrels:[el(0,46,15,0.8,1.05,0.92,1.0),el(0.15,44,14,0.8,1.0,0.92,0.95),
             el(Math.PI/2+0.08,44,14,0.8,1.0,0.92,0.95),
             el(-Math.PI/2-0.08,44,14,0.8,1.0,0.92,0.95),
             el(Math.PI+0.08,44,14,0.8,1.0,0.92,0.95),
             el(-0.15,44,14,0.8,1.0,0.92,0.95)],
    noBarrels:false,bodyDamageMultiplier:0.88,radiusMultiplier:1.0};

  _t['Vortex']={name:'Vortex',requiredLevel:45,upgradesFrom:['Riot'],color:'#ff8800',
    description:'Четыре диагональных + четыре фронтальных — вихрь огня.',
    barrels:[el(-0.35,44,12,1.0,1.0,0.9,0.88),el(0.35,44,12,1.0,1.0,0.9,0.88),
             el(Math.PI/3,40,11,1.0,1.0,0.9,0.82),el(-Math.PI/3,40,11,1.0,1.0,0.9,0.82),
             el(Math.PI-0.35,40,11,1.0,0.95,0.9,0.8),el(Math.PI+0.35,40,11,1.0,0.95,0.9,0.8),
             el(Math.PI/2+0.2,38,11,1.0,0.95,0.9,0.78),el(-Math.PI/2-0.2,38,11,1.0,0.95,0.9,0.78)],
    noBarrels:false,bodyDamageMultiplier:0.88,radiusMultiplier:1.02};

  // ── Tier-3 — Dreadnought branch (level 45) ───────────────────────────

  // From Colossus
  _t['Titan']={name:'Titan',requiredLevel:45,upgradesFrom:['Colossus'],color:'#ff8800',
    description:'Сверхпушка + три кормовых стабилизатора — линкор апокалипсиса.',
    barrels:[el(0,58,36,1.0,0.5,2.1,4.5),
             el(Math.PI+0.3,32,12,1.0,0.82,0.88,0.72),
             el(Math.PI,30,12,1.0,0.82,0.88,0.75),
             el(Math.PI-0.3,32,12,1.0,0.82,0.88,0.72)],
    noBarrels:false,bodyDamageMultiplier:1.4,radiusMultiplier:1.4};

  _t['Leviathan']={name:'Leviathan',requiredLevel:45,upgradesFrom:['Colossus'],color:'#ff8800',
    description:'Два колоссальных ствола + 2 кормовых — морской монстр.',
    barrels:[el(-0.12,56,30,1.0,0.52,1.85,3.8),el(0.12,56,30,1.0,0.52,1.85,3.8),
             el(Math.PI+0.25,30,11,1.0,0.8,0.88,0.7),el(Math.PI-0.25,30,11,1.0,0.8,0.88,0.7)],
    noBarrels:false,bodyDamageMultiplier:1.3,radiusMultiplier:1.35};

  _t['Bastion']={name:'Bastion',requiredLevel:45,upgradesFrom:['Colossus'],color:'#ff8800',
    description:'Мегапушка + четыре боковых — крепость с круговой обороной.',
    barrels:[el(0,58,34,1.0,0.5,2.0,4.2),
             el(Math.PI/2+0.1,34,13,1.0,0.78,1.0,0.9),
             el(-Math.PI/2-0.1,34,13,1.0,0.78,1.0,0.9),
             el(Math.PI+0.35,30,12,1.0,0.8,0.9,0.75),
             el(Math.PI-0.35,30,12,1.0,0.8,0.9,0.75)],
    noBarrels:false,bodyDamageMultiplier:1.25,radiusMultiplier:1.38};

  // From Cruiser
  _t['Warship']={name:'Warship',requiredLevel:45,upgradesFrom:['Cruiser'],color:'#ff8800',
    description:'Три тяжёлых выровненных ствола — военный корабль огня.',
    barrels:[el(-0.18,52,26,1.0,0.56,1.6,3.0),el(0,54,28,1.0,0.52,1.6,3.2),
             el(0.18,52,26,1.0,0.56,1.6,3.0)],
    noBarrels:false,bodyDamageMultiplier:1.2,radiusMultiplier:1.2};

  _t['Flagship']={name:'Flagship',requiredLevel:45,upgradesFrom:['Cruiser'],color:'#ff8800',
    description:'Два мегаствола + два средних боковых — флагман флота.',
    barrels:[el(-0.1,54,28,1.0,0.54,1.7,3.2),el(0.1,54,28,1.0,0.54,1.7,3.2),
             el(Math.PI/2+0.2,36,14,1.0,0.76,1.05,1.0),
             el(-Math.PI/2-0.2,36,14,1.0,0.76,1.05,1.0)],
    noBarrels:false,bodyDamageMultiplier:1.15,radiusMultiplier:1.25};

  _t['Ironclad']={name:'Ironclad',requiredLevel:45,upgradesFrom:['Cruiser'],color:'#ff8800',
    description:'Два ствола + тяжёлая защита по бокам — непробиваемый броненосец.',
    barrels:[el(-0.08,52,26,1.0,0.56,1.55,2.8),el(0.08,52,26,1.0,0.56,1.55,2.8),
             el(Math.PI/2,38,18,1.0,0.72,1.1,1.3),el(-Math.PI/2,38,18,1.0,0.72,1.1,1.3),
             el(Math.PI/2+0.3,32,14,1.0,0.74,1.0,1.0),
             el(-Math.PI/2-0.3,32,14,1.0,0.74,1.0,1.0)],
    noBarrels:false,bodyDamageMultiplier:1.5,radiusMultiplier:1.3};

  // From Brawler
  _t['Behemoth']={name:'Behemoth',requiredLevel:45,upgradesFrom:['Brawler'],color:'#ff8800',
    description:'Огромный передний ствол + четыре боковых — чудовище ближнего боя.',
    barrels:[el(0,52,28,1.0,0.58,1.5,2.8),
             el(Math.PI/2+0.1,38,16,1.0,0.65,1.2,1.4),
             el(-Math.PI/2-0.1,38,16,1.0,0.65,1.2,1.4),
             el(Math.PI/2+0.4,32,13,1.0,0.67,1.0,1.0),
             el(-Math.PI/2-0.4,32,13,1.0,0.67,1.0,1.0)],
    noBarrels:false,bodyDamageMultiplier:2.8,radiusMultiplier:1.25};

  _t['Rampage']={name:'Rampage',requiredLevel:45,upgradesFrom:['Brawler'],color:'#ff8800',
    description:'Два передних + три боковых — берсерк, сметающий всё.',
    barrels:[el(-0.12,50,22,1.0,0.62,1.4,2.2),el(0.12,50,22,1.0,0.62,1.4,2.2),
             el(Math.PI/2,36,15,1.0,0.65,1.1,1.2),el(-Math.PI/2,36,15,1.0,0.65,1.1,1.2),
             el(Math.PI,34,14,1.0,0.67,1.0,1.0)],
    noBarrels:false,bodyDamageMultiplier:2.5,radiusMultiplier:1.2};

  _t['Bulwark']={name:'Bulwark',requiredLevel:45,upgradesFrom:['Brawler'],color:'#ff8800',
    description:'Мощный передний ствол + полная боковая защита — живая крепость.',
    barrels:[el(0,54,30,1.0,0.58,1.6,3.0),
             el(Math.PI/2,40,18,1.0,0.66,1.15,1.35),el(-Math.PI/2,40,18,1.0,0.66,1.15,1.35),
             el(Math.PI/2+0.35,34,14,1.0,0.68,1.0,1.0),
             el(-Math.PI/2-0.35,34,14,1.0,0.68,1.0,1.0),
             el(Math.PI,38,16,1.0,0.67,1.1,1.2)],
    noBarrels:false,bodyDamageMultiplier:3.0,radiusMultiplier:1.3};

  // ── Russian names ─────────────────────────────────────────────────────
  W1['Devastator']  = 'Опустошитель';
  W1['Barrage']     = 'Шквал';
  W1['Canister']    = 'Картечь';
  W1['Juggernaut']  = 'Джаггернаут';
  W1['Obliterator'] = 'Аннигилятор';
  W1['Breacher']    = 'Пробойник';
  W1['Havoc']       = 'Хаос';
  W1['Tempest']     = 'Шторм';
  W1['Vortex']      = 'Вихрь';
  W1['Titan']       = 'Титан';
  W1['Leviathan']   = 'Левиафан';
  W1['Bastion']     = 'Бастион';
  W1['Warship']     = 'Военный корабль';
  W1['Flagship']    = 'Флагман';
  W1['Ironclad']    = 'Броненосец';
  W1['Behemoth']    = 'Бегемот';
  W1['Rampage']     = 'Берсерк';
  W1['Bulwark']     = 'Оплот';

  // ── Tree nodes (y-coords will be ×2.5 by generateT4) ─────────────────
  // Shotgun T3 (centred on their T2 parents at y:5240, 5500, 5760)
  w0.push({name:'Devastator',  tier:3, x:xl[3], y:5175});
  w0.push({name:'Barrage',     tier:3, x:xl[3], y:5240});
  w0.push({name:'Canister',    tier:3, x:xl[3], y:5305});
  w0.push({name:'Juggernaut',  tier:3, x:xl[3], y:5435});
  w0.push({name:'Obliterator', tier:3, x:xl[3], y:5500});
  w0.push({name:'Breacher',    tier:3, x:xl[3], y:5565});
  w0.push({name:'Havoc',       tier:3, x:xl[3], y:5695});
  w0.push({name:'Tempest',     tier:3, x:xl[3], y:5760});
  w0.push({name:'Vortex',      tier:3, x:xl[3], y:5825});
  // Dreadnought T3 (centred on their T2 parents at y:6740, 7000, 7260)
  w0.push({name:'Titan',       tier:3, x:xl[3], y:6675});
  w0.push({name:'Leviathan',   tier:3, x:xl[3], y:6740});
  w0.push({name:'Bastion',     tier:3, x:xl[3], y:6805});
  w0.push({name:'Warship',     tier:3, x:xl[3], y:6935});
  w0.push({name:'Flagship',    tier:3, x:xl[3], y:7000});
  w0.push({name:'Ironclad',    tier:3, x:xl[3], y:7065});
  w0.push({name:'Behemoth',    tier:3, x:xl[3], y:7195});
  w0.push({name:'Rampage',     tier:3, x:xl[3], y:7260});
  w0.push({name:'Bulwark',     tier:3, x:xl[3], y:7325});

  // ── Tree edges ────────────────────────────────────────────────────────
  Ty.push(['Blaster','Devastator']);
  Ty.push(['Blaster','Barrage']);
  Ty.push(['Blaster','Canister']);
  Ty.push(['Buster','Juggernaut']);
  Ty.push(['Buster','Obliterator']);
  Ty.push(['Buster','Breacher']);
  Ty.push(['Riot','Havoc']);
  Ty.push(['Riot','Tempest']);
  Ty.push(['Riot','Vortex']);
  Ty.push(['Colossus','Titan']);
  Ty.push(['Colossus','Leviathan']);
  Ty.push(['Colossus','Bastion']);
  Ty.push(['Cruiser','Warship']);
  Ty.push(['Cruiser','Flagship']);
  Ty.push(['Cruiser','Ironclad']);
  Ty.push(['Brawler','Behemoth']);
  Ty.push(['Brawler','Rampage']);
  Ty.push(['Brawler','Bulwark']);
})();

;(function addCustomBranches(){
  // ── BRANCH 1 T1: Alchemist (level 5, from Basic) ──────────────────────────
  _t['Alchemist']={name:'Alchemist',requiredLevel:5,upgradesFrom:['Basic'],color:'#e0e0e0',
    description:'Алхимик — мастер особых снарядов. Ведёт к Раздробителю, Разрывнику и Дальнобойному.',
    barrels:[el(0,46,14,1.0,1.0,1.0,1.0)]};
  W1['Alchemist']='Алхимик';

  // ── BRANCH 2 T1: Warlock (level 5, from Basic) ────────────────────────────
  _t['Warlock']={name:'Warlock',requiredLevel:5,upgradesFrom:['Basic'],color:'#e0e0e0',
    description:'Чернокнижник — тёмная магия. Ведёт к Вампиру, Цепному и Турельщику.',
    barrels:[el(0,46,14,1.0,1.0,1.0,1.0)]};
  W1['Warlock']='Чернокнижник';

  // ══════════════════════════════════════════════════════════════════════════
  // BRANCH 1 — SPLITTER  (level 15, Раздробитель)
  // ══════════════════════════════════════════════════════════════════════════
  _t['Splitter']={name:'Splitter',requiredLevel:15,upgradesFrom:['Alchemist'],color:'#22cc55',
    isSplitting:true,
    description:'МЕХАНИКА: Пуля делится в полёте — один выстрел превращается в рой из 8 снарядов за 1 сек.',
    barrels:[el(-0.30,40,10,1.2,0.80,1.10,0.72,0.12),el(0,44,12,1.2,0.90,1.10,0.82,0.08),el(0.30,40,10,1.2,0.80,1.10,0.72,0.12)]};
  W1['Splitter']='Раздробитель';

  _t['Fragmenter']={name:'Fragmenter',requiredLevel:30,upgradesFrom:['Splitter'],color:'#ffdd00',
    isSplitting:true,
    description:'Пуля дробится на 5 осколков — конус разброса 40°, снаряды уменьшаются но ускоряются.',
    barrels:[el(-0.35,36,9,1.0,0.75,1.10,0.65,0.15),el(-0.17,40,11,1.0,0.82,1.10,0.72,0.12),
             el(0,42,12,1.0,0.88,1.10,0.78,0.09),el(0.17,40,11,1.0,0.82,1.10,0.72,0.12),el(0.35,36,9,1.0,0.75,1.10,0.65,0.15)]};
  W1['Fragmenter']='Фрагментатор';

  _t['ScatterShot']={name:'ScatterShot',requiredLevel:30,upgradesFrom:['Splitter'],color:'#ffdd00',
    isSplitting:true,
    description:'Широкий рой — 7 стволов в конусе 160°, покрывает всё пространство перед собой.',
    barrels:[el(-0.80,32,8,1.1,0.70,1.00,0.58,0.22),el(-0.50,36,10,1.1,0.78,1.00,0.65,0.18),
             el(-0.20,40,11,1.1,0.85,1.00,0.72,0.12),el(0,42,12,1.1,0.90,1.00,0.78,0.09),
             el(0.20,40,11,1.1,0.85,1.00,0.72,0.12),el(0.50,36,10,1.1,0.78,1.00,0.65,0.18),el(0.80,32,8,1.1,0.70,1.00,0.58,0.22)]};
  W1['ScatterShot']='Рассеиватель';

  _t['SplitMirror']={name:'SplitMirror',requiredLevel:30,upgradesFrom:['Splitter'],color:'#ffdd00',
    isSplitting:true,
    description:'Зеркальное деление — рой вперёд и рой назад одновременно, двойная засада.',
    barrels:[el(-0.25,40,10,1.2,0.82,1.10,0.72,0.12),el(0,44,12,1.2,0.90,1.10,0.80,0.08),el(0.25,40,10,1.2,0.82,1.10,0.72,0.12),
             el(Math.PI-0.20,32,9,1.2,0.78,0.95,0.62,0.12),el(Math.PI,36,11,1.2,0.85,0.95,0.70,0.08),el(Math.PI+0.20,32,9,1.2,0.78,0.95,0.62,0.12)]};
  W1['SplitMirror']='Зеркало';

  _t['ShardStorm']={name:'ShardStorm',requiredLevel:45,upgradesFrom:['Fragmenter'],color:'#ff8800',
    isSplitting:true,
    description:'Буря осколков — 9 стволов в широком конусе, максимальная дробь.',
    barrels:[el(-0.65,28,7,0.90,0.70,1.0,0.55,0.25),el(-0.45,32,9,0.90,0.76,1.0,0.62,0.20),
             el(-0.25,36,10,0.90,0.82,1.0,0.68,0.15),el(-0.08,40,11,0.90,0.87,1.0,0.73,0.11),
             el(0,42,12,0.90,0.90,1.0,0.78,0.09),
             el(0.08,40,11,0.90,0.87,1.0,0.73,0.11),el(0.25,36,10,0.90,0.82,1.0,0.68,0.15),
             el(0.45,32,9,0.90,0.76,1.0,0.62,0.20),el(0.65,28,7,0.90,0.70,1.0,0.55,0.25)]};
  W1['ShardStorm']='Буря осколков';

  _t['FragCore']={name:'FragCore',requiredLevel:45,upgradesFrom:['Fragmenter'],color:'#ff8800',
    isSplitting:true,isPiercing:true,
    description:'Ядро-осколок — пробивающий снаряд + взрывная оболочка из 6 дробин по бокам.',
    barrels:[el(0,52,14,1.50,0.95,1.30,1.40),
             el(-0.40,34,8,0.80,0.72,1.00,0.60,0.18),el(-0.20,36,9,0.80,0.78,1.00,0.66,0.14),
             el(0.20,36,9,0.80,0.78,1.00,0.66,0.14),el(0.40,34,8,0.80,0.72,1.00,0.60,0.18),
             el(Math.PI/2,28,8,1.00,0.70,0.90,0.55),el(-Math.PI/2,28,8,1.00,0.70,0.90,0.55)]};
  W1['FragCore']='Ядро-осколок';

  _t['FragNova']={name:'FragNova',requiredLevel:45,upgradesFrom:['Fragmenter'],color:'#ff8800',
    isSplitting:true,
    description:'Осколочная нова — 8 стволов по кругу 360°, тотальное осколочное покрытие.',
    barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI/4,30,8,0.90,0.75,1.00,0.60,0.14);})};
  W1['FragNova']='Нова-осколок';

  _t['Buckshot']={name:'Buckshot',requiredLevel:45,upgradesFrom:['ScatterShot'],color:'#ff8800',
    isSplitting:true,
    description:'Картечь-Икс — 11 стволов в конусе 200°, максимальная ближняя зона покрытия.',
    barrels:[el(-1.00,26,7,1.00,0.68,0.90,0.52,0.28),el(-0.75,30,8,1.00,0.74,0.90,0.58,0.22),
             el(-0.50,34,9,1.00,0.80,0.90,0.64,0.18),el(-0.25,38,10,1.00,0.85,0.90,0.70,0.14),
             el(-0.08,40,11,1.00,0.88,0.90,0.74,0.11),el(0,42,12,1.00,0.90,0.90,0.77,0.09),
             el(0.08,40,11,1.00,0.88,0.90,0.74,0.11),el(0.25,38,10,1.00,0.85,0.90,0.70,0.14),
             el(0.50,34,9,1.00,0.80,0.90,0.64,0.18),el(0.75,30,8,1.00,0.74,0.90,0.58,0.22),
             el(1.00,26,7,1.00,0.68,0.90,0.52,0.28)]};
  W1['Buckshot']='Картечь-Икс';

  _t['ScatterBomb']={name:'ScatterBomb',requiredLevel:45,upgradesFrom:['ScatterShot'],color:'#ff8800',
    isSplitting:true,
    description:'Рассеивающая бомба — 5 широких стволов вперёд + 4 боковых, охват 270°.',
    barrels:[el(-0.50,36,12,1.00,0.82,0.95,0.75,0.16),el(-0.20,40,13,1.00,0.88,0.95,0.82,0.12),
             el(0,44,14,1.00,0.92,0.95,0.88,0.09),el(0.20,40,13,1.00,0.88,0.95,0.82,0.12),
             el(0.50,36,12,1.00,0.82,0.95,0.75,0.16),
             el(Math.PI/2,32,11,1.00,0.78,0.90,0.70),el(-Math.PI/2,32,11,1.00,0.78,0.90,0.70),
             el(Math.PI/2+0.35,28,9,1.00,0.74,0.88,0.65),el(-Math.PI/2-0.35,28,9,1.00,0.74,0.88,0.65)]};
  W1['ScatterBomb']='Рассеивающая бомба';

  _t['CloudBurst']={name:'CloudBurst',requiredLevel:45,upgradesFrom:['ScatterShot'],color:'#ff8800',
    isSplitting:true,
    description:'Облачный взрыв — 3 вперёд + 5 по бокам и назад, тотальное облако дроби.',
    barrels:[el(-0.30,42,13,1.00,0.86,0.95,0.80,0.13),el(0,46,15,1.00,0.90,0.95,0.88,0.09),el(0.30,42,13,1.00,0.86,0.95,0.80,0.13),
             el(-0.50,36,10,1.10,0.80,0.90,0.70,0.18),el(0.50,36,10,1.10,0.80,0.90,0.70,0.18),
             el(2*Math.PI/3,28,9,1.00,0.74,0.88,0.62),el(Math.PI,28,9,1.00,0.74,0.88,0.62),el(-2*Math.PI/3,28,9,1.00,0.74,0.88,0.62)]};
  W1['CloudBurst']='Облачный взрыв';

  _t['DualFrag']={name:'DualFrag',requiredLevel:45,upgradesFrom:['SplitMirror'],color:'#ff8800',
    isSplitting:true,
    description:'Двойная фрагм. — 5 стволов вперёд + 3 назад, одновременный рой с обеих сторон.',
    barrels:[el(-0.30,40,10,1.00,0.80,1.05,0.70,0.14),el(-0.12,44,12,1.00,0.88,1.05,0.78,0.10),
             el(0,46,13,1.00,0.92,1.05,0.84,0.08),el(0.12,44,12,1.00,0.88,1.05,0.78,0.10),el(0.30,40,10,1.00,0.80,1.05,0.70,0.14),
             el(Math.PI-0.25,32,9,1.00,0.76,0.92,0.62,0.12),el(Math.PI,36,11,1.00,0.84,0.92,0.70,0.08),el(Math.PI+0.25,32,9,1.00,0.76,0.92,0.62,0.12)]};
  W1['DualFrag']='Двойная фрагм.';

  _t['OmniFrag']={name:'OmniFrag',requiredLevel:45,upgradesFrom:['SplitMirror'],color:'#ff8800',
    isSplitting:true,
    description:'Омни-фрагм. — рои во всех 4 направлениях, полная зона покрытия 360°.',
    barrels:[el(-0.20,38,10,1.10,0.82,1.00,0.72,0.12),el(0,42,12,1.10,0.88,1.00,0.78,0.09),el(0.20,38,10,1.10,0.82,1.00,0.72,0.12),
             el(Math.PI/2-0.15,32,9,1.10,0.78,0.95,0.65,0.12),el(Math.PI/2,36,10,1.10,0.84,0.95,0.72,0.09),el(Math.PI/2+0.15,32,9,1.10,0.78,0.95,0.65,0.12),
             el(Math.PI-0.20,30,9,1.10,0.76,0.92,0.62,0.12),el(Math.PI,34,10,1.10,0.82,0.92,0.68,0.09),el(Math.PI+0.20,30,9,1.10,0.76,0.92,0.62,0.12)]};
  W1['OmniFrag']='Омни-фрагм.';

  _t['CrossFrag']={name:'CrossFrag',requiredLevel:45,upgradesFrom:['SplitMirror'],color:'#ff8800',
    isSplitting:true,
    description:'Крест-фрагм. — широкий передний рой + 2 боковых залпа, три мощных потока.',
    barrels:[el(-0.35,36,9,1.00,0.78,1.00,0.68,0.16),el(-0.15,40,11,1.00,0.85,1.00,0.75,0.12),
             el(0,44,13,1.00,0.92,1.00,0.82,0.09),el(0.15,40,11,1.00,0.85,1.00,0.75,0.12),el(0.35,36,9,1.00,0.78,1.00,0.68,0.16),
             el(Math.PI/2,36,12,1.20,0.82,0.95,0.72),el(-Math.PI/2,36,12,1.20,0.82,0.95,0.72)]};
  W1['CrossFrag']='Крест-фрагм.';

  // ══════════════════════════════════════════════════════════════════════════
  // BRANCH 1 — DETONATOR  (level 15, Разрывник)
  // ══════════════════════════════════════════════════════════════════════════
  _t['Detonator']={name:'Detonator',requiredLevel:15,upgradesFrom:['Alchemist'],color:'#22cc55',
    description:'МЕХАНИКА: Липкие снаряды — прилипают к врагу и взрываются через 1.5 сек. Можно наклеить несколько.',
    barrels:[Object.assign(el(-0.15,46,16,1.40,1.30,0.80,1.20),{isTrap:true}),
             Object.assign(el(0.15,46,16,1.40,1.30,0.80,1.20),{isTrap:true})]};
  W1['Detonator']='Разрывник';

  _t['Primer']={name:'Primer',requiredLevel:30,upgradesFrom:['Detonator'],color:'#ffdd00',
    description:'Капсюльный — 4 быстрых малых заряда-липучки, стрельба короткими очередями.',
    barrels:[Object.assign(el(-0.25,40,12,1.20,1.10,0.78,1.00),{isTrap:true}),
             Object.assign(el(-0.08,44,13,1.20,1.15,0.78,1.05),{isTrap:true}),
             Object.assign(el(0.08,44,13,1.20,1.15,0.78,1.05),{isTrap:true}),
             Object.assign(el(0.25,40,12,1.20,1.10,0.78,1.00),{isTrap:true})]};
  W1['Primer']='Капсюль';

  _t['Bombard']={name:'Bombard',requiredLevel:30,upgradesFrom:['Detonator'],color:'#ffdd00',
    description:'Бомбардир — 2 огромных заряда с чудовищным взрывом при контакте.',
    barrels:[Object.assign(el(-0.12,50,24,1.80,1.80,0.72,2.20),{isTrap:true}),
             Object.assign(el(0.12,50,24,1.80,1.80,0.72,2.20),{isTrap:true})]};
  W1['Bombard']='Бомбардир';

  _t['Minelayer']={name:'Minelayer',requiredLevel:30,upgradesFrom:['Detonator'],color:'#ffdd00',
    description:'Минёр — 3 мины по 360°, расставляет минное заграждение по всей зоне боя.',
    barrels:[Object.assign(el(0,44,15,1.50,1.35,0.76,1.30),{isTrap:true}),
             Object.assign(el(2*Math.PI/3,42,14,1.50,1.28,0.76,1.20),{isTrap:true}),
             Object.assign(el(-2*Math.PI/3,42,14,1.50,1.28,0.76,1.20),{isTrap:true})]};
  W1['Minelayer']='Минёр';

  _t['ChargeBurst']={name:'ChargeBurst',requiredLevel:45,upgradesFrom:['Primer'],color:'#ff8800',
    description:'Очередь зарядов — 6 быстрых зарядов-липучек в широком конусе.',
    barrels:[Object.assign(el(-0.35,36,10,1.00,1.05,0.76,0.90),{isTrap:true}),
             Object.assign(el(-0.14,40,11,1.00,1.10,0.76,0.95),{isTrap:true}),
             Object.assign(el(0,42,12,1.00,1.15,0.76,1.00),{isTrap:true}),
             Object.assign(el(0.14,40,11,1.00,1.10,0.76,0.95),{isTrap:true}),
             Object.assign(el(0.35,36,10,1.00,1.05,0.76,0.90),{isTrap:true}),
             Object.assign(el(Math.PI,32,10,1.20,1.00,0.72,0.80),{isTrap:true})]};
  W1['ChargeBurst']='Очередь зарядов';

  _t['StickyFlak']={name:'StickyFlak',requiredLevel:45,upgradesFrom:['Primer'],color:'#ff8800',
    description:'Зенитные липучки — 4 вперёд + 2 боковых, перекрёстная засада из липких зарядов.',
    barrels:[Object.assign(el(-0.22,38,11,1.10,1.08,0.76,0.92),{isTrap:true}),
             Object.assign(el(-0.07,42,12,1.10,1.12,0.76,0.96),{isTrap:true}),
             Object.assign(el(0.07,42,12,1.10,1.12,0.76,0.96),{isTrap:true}),
             Object.assign(el(0.22,38,11,1.10,1.08,0.76,0.92),{isTrap:true}),
             Object.assign(el(Math.PI/2+0.10,34,11,1.30,1.05,0.72,0.88),{isTrap:true}),
             Object.assign(el(-Math.PI/2-0.10,34,11,1.30,1.05,0.72,0.88),{isTrap:true})]};
  W1['StickyFlak']='Зенитная липучка';

  _t['QuickFuse']={name:'QuickFuse',requiredLevel:45,upgradesFrom:['Primer'],color:'#ff8800',
    description:'Быстрый взрыватель — 3 липких заряда с быстрой перезарядкой.',
    barrels:[Object.assign(el(-0.12,44,13,0.80,1.20,0.78,1.10),{isTrap:true}),
             Object.assign(el(0,48,15,0.80,1.30,0.78,1.20),{isTrap:true}),
             Object.assign(el(0.12,44,13,0.80,1.20,0.78,1.10),{isTrap:true})]};
  W1['QuickFuse']='Быстрый взрыватель';

  _t['MegaBomb']={name:'MegaBomb',requiredLevel:45,upgradesFrom:['Bombard'],color:'#ff8800',
    description:'Мегабомба — один колоссальный заряд. Огромный радиус взрыва, максимальный урон.',
    barrels:[Object.assign(el(0,56,32,2.20,2.50,0.65,3.50),{isTrap:true})]};
  W1['MegaBomb']='Мегабомба';

  _t['DoubleBomb']={name:'DoubleBomb',requiredLevel:45,upgradesFrom:['Bombard'],color:'#ff8800',
    description:'Двойная бомба — два огромных заряда + два боковых средних, перекрёстный взрыв.',
    barrels:[Object.assign(el(-0.10,52,26,1.80,2.00,0.68,2.50),{isTrap:true}),
             Object.assign(el(0.10,52,26,1.80,2.00,0.68,2.50),{isTrap:true}),
             Object.assign(el(Math.PI/2,36,14,1.40,1.30,0.70,1.20),{isTrap:true}),
             Object.assign(el(-Math.PI/2,36,14,1.40,1.30,0.70,1.20),{isTrap:true})]};
  W1['DoubleBomb']='Двойная бомба';

  _t['BombRain']={name:'BombRain',requiredLevel:45,upgradesFrom:['Bombard'],color:'#ff8800',
    description:'Бомбовый дождь — четыре заряда по 4 сторонам, бомбардировка 360°.',
    barrels:[Object.assign(el(0,50,22,1.60,1.80,0.68,2.20),{isTrap:true}),
             Object.assign(el(Math.PI/2,48,20,1.60,1.70,0.68,2.00),{isTrap:true}),
             Object.assign(el(Math.PI,50,22,1.60,1.80,0.68,2.20),{isTrap:true}),
             Object.assign(el(-Math.PI/2,48,20,1.60,1.70,0.68,2.00),{isTrap:true})]};
  W1['BombRain']='Бомбовый дождь';

  _t['MineBelt']={name:'MineBelt',requiredLevel:45,upgradesFrom:['Minelayer'],color:'#ff8800',
    description:'Минный пояс — 6 мин по 360°, создаёт непроходимое заграждение вокруг себя.',
    barrels:[0,1,2,3,4,5].map(function(i){return Object.assign(el(i*Math.PI/3,42,14,1.40,1.30,0.72,1.20),{isTrap:true});})};
  W1['MineBelt']='Минный пояс';

  _t['SuperMine']={name:'SuperMine',requiredLevel:45,upgradesFrom:['Minelayer'],color:'#ff8800',
    description:'Супермина — 3 огромных заряда по кругу + мощный броневой корпус для прикрытия.',
    radiusMultiplier:1.20,bodyDamageMultiplier:2.00,
    barrels:[Object.assign(el(0,52,22,1.60,1.80,0.70,2.00),{isTrap:true}),
             Object.assign(el(2*Math.PI/3,50,20,1.60,1.70,0.70,1.80),{isTrap:true}),
             Object.assign(el(-2*Math.PI/3,50,20,1.60,1.70,0.70,1.80),{isTrap:true})]};
  W1['SuperMine']='Супермина';

  _t['InvisibleMiner']={name:'InvisibleMiner',requiredLevel:45,upgradesFrom:['Minelayer'],color:'#ff8800',
    isInvis:true,
    description:'МЕХАНИКА: Невидимый минёр — расставляет мины незаметно, враги не видят угрозы.',
    barrels:[Object.assign(el(0,46,16,1.50,1.40,0.72,1.30),{isTrap:true}),
             Object.assign(el(2*Math.PI/3,44,14,1.50,1.30,0.72,1.20),{isTrap:true}),
             Object.assign(el(-2*Math.PI/3,44,14,1.50,1.30,0.72,1.20),{isTrap:true}),
             Object.assign(el(Math.PI,42,14,1.50,1.25,0.72,1.10),{isTrap:true})]};
  W1['InvisibleMiner']='Невидимый минёр';

  // ══════════════════════════════════════════════════════════════════════════
  // BRANCH 1 — LONGSHOT  (level 15, Дальнобойный — моя идея)
  // ══════════════════════════════════════════════════════════════════════════
  _t['Longshot']={name:'Longshot',requiredLevel:15,upgradesFrom:['Alchemist'],color:'#22cc55',
    isRangeBoost:true,
    description:'МЕХАНИКА (моя идея): Урон растёт с дистанцией полёта пули. Дальние враги получают в 3× больше.',
    barrels:[el(0,58,10,2.00,0.80,1.80,1.20)]};
  W1['Longshot']='Дальнобойный';

  _t['Marksman']={name:'Marksman',requiredLevel:30,upgradesFrom:['Longshot'],color:'#ffdd00',
    isRangeBoost:true,
    description:'Меткий стрелок — сверхдальний снайпер, урон нарастает до максимума на большой дистанции.',
    barrels:[el(0,76,8,2.80,0.62,2.20,1.40)]};
  W1['Marksman']='Меткий стрелок';

  _t['HeavyCannon']={name:'HeavyCannon',requiredLevel:30,upgradesFrom:['Longshot'],color:'#ffdd00',
    isRangeBoost:true,
    description:'Тяжёлая пушка — медленный колоссальный снаряд. Чем дальше — тем чудовищнее урон.',
    barrels:[el(0,62,22,2.50,1.60,1.20,2.00)]};
  W1['HeavyCannon']='Тяжёлая пушка';

  _t['BurstRifle']={name:'BurstRifle',requiredLevel:30,upgradesFrom:['Longshot'],color:'#ffdd00',
    isRangeBoost:true,
    description:'Очередная винтовка — тройная очередь с нарастающим уроном от дистанции.',
    barrels:[el(0,62,9,1.20,0.72,1.80,1.10),el(0,58,9,1.50,0.70,1.80,1.05),el(0,54,9,1.80,0.68,1.80,1.00)]};
  W1['BurstRifle']='Очередная винтовка';

  _t['LongRangeX']={name:'LongRangeX',requiredLevel:45,upgradesFrom:['Marksman'],color:'#ff8800',
    isRangeBoost:true,
    description:'Дальнобой-Икс — запредельная дальность, пуля ускоряется в полёте.',
    barrels:[el(0,92,7,3.50,0.52,2.60,1.60)]};
  W1['LongRangeX']='Дальнобой-Икс';

  _t['SniperX']={name:'SniperX',requiredLevel:45,upgradesFrom:['Marksman'],color:'#ff8800',
    isRangeBoost:true,isPiercing:true,
    description:'Снайпер-Икс — пробивающий дальнобойный выстрел. Урон × расстояние × пробитие.',
    barrels:[el(0,84,9,3.20,0.58,2.40,1.50)]};
  W1['SniperX']='Снайпер-Икс';

  _t['TwinRifle']={name:'TwinRifle',requiredLevel:45,upgradesFrom:['Marksman'],color:'#ff8800',
    isRangeBoost:true,
    description:'Двойная дальнобойная — два параллельных ствола, двойной урон от дистанции.',
    barrels:[el(-0.06,78,8,3.00,0.58,2.20,1.40),el(0.06,78,8,3.00,0.58,2.20,1.40)]};
  W1['TwinRifle']='Двойная дальнобойная';

  _t['HeavyShell']={name:'HeavyShell',requiredLevel:45,upgradesFrom:['HeavyCannon'],color:'#ff8800',
    isRangeBoost:true,isPiercing:true,
    description:'Тяжёлый снаряд — колоссальный медленный снаряд, урон множится с расстоянием.',
    barrels:[el(0,66,28,3.00,2.00,1.00,2.80)]};
  W1['HeavyShell']='Тяжёлый снаряд';

  _t['CannonBarrage']={name:'CannonBarrage',requiredLevel:45,upgradesFrom:['HeavyCannon'],color:'#ff8800',
    isRangeBoost:true,
    description:'Пушечный шквал — три тяжёлых снаряда в залп, нарастающий дальний урон.',
    barrels:[el(-0.12,60,20,2.20,1.50,1.15,1.80),el(0,64,22,2.50,1.60,1.15,2.00),el(0.12,60,20,2.20,1.50,1.15,1.80)]};
  W1['CannonBarrage']='Пушечный шквал';

  _t['SiegeGun']={name:'SiegeGun',requiredLevel:45,upgradesFrom:['HeavyCannon'],color:'#ff8800',
    isRangeBoost:true,
    description:'Осадное орудие — широкий снаряд вперёд + 2 фланговых, зона подавления огнём.',
    barrels:[el(0,62,24,2.50,1.70,1.10,2.20),el(Math.PI/2,40,14,1.50,1.10,0.90,1.00),el(-Math.PI/2,40,14,1.50,1.10,0.90,1.00)]};
  W1['SiegeGun']='Осадное орудие';

  _t['RapidBurst']={name:'RapidBurst',requiredLevel:45,upgradesFrom:['BurstRifle'],color:'#ff8800',
    isRangeBoost:true,
    description:'Скоростная очередь — 5 стволов убывающей длины, непрерывный огонь с нарастающим уроном.',
    barrels:[el(0,72,8,0.80,0.65,2.00,1.10),el(0,66,8,1.00,0.64,2.00,1.08),el(0,60,8,1.20,0.63,2.00,1.06),el(0,54,8,1.40,0.62,2.00,1.04),el(0,48,8,1.60,0.61,2.00,1.02)]};
  W1['RapidBurst']='Скоростная очередь';

  _t['TriSnipe']={name:'TriSnipe',requiredLevel:45,upgradesFrom:['BurstRifle'],color:'#ff8800',
    isRangeBoost:true,
    description:'Тройной снайпер — 3 ствола треугольником, каждый с нарастающим уроном от расстояния.',
    barrels:[el(0,70,9,2.50,0.62,2.00,1.30),el(2*Math.PI/3,68,8,2.50,0.60,2.00,1.25),el(-2*Math.PI/3,68,8,2.50,0.60,2.00,1.25)]};
  W1['TriSnipe']='Тройной снайпер';

  _t['GaussRifle']={name:'GaussRifle',requiredLevel:45,upgradesFrom:['BurstRifle'],color:'#ff8800',
    isRangeBoost:true,isLaser:true,
    description:'МЕХАНИКА: Гаусс-винтовка — лазерный луч нарастающего урона, бьёт на любое расстояние.',
    barrels:[el(0,80,8,3.50,0.55,3.00,1.60)]};
  W1['GaussRifle']='Гаусс-винтовка';

  // ══════════════════════════════════════════════════════════════════════════
  // BRANCH 2 — VAMPIRE  (level 15, Вампир)
  // ══════════════════════════════════════════════════════════════════════════
  _t['Vampire']={name:'Vampire',requiredLevel:15,upgradesFrom:['Warlock'],color:'#22cc55',
    isVampire:true,bodyDamageMultiplier:1.30,
    description:'МЕХАНИКА: Вампиризм — каждый выстрел восстанавливает HP. Меньше HP = быстрее регенерация.',
    barrels:[el(0,50,14,1.40,1.00,1.10,1.10)]};
  W1['Vampire']='Вампир';

  _t['BloodHunter']={name:'BloodHunter',requiredLevel:30,upgradesFrom:['Vampire'],color:'#ffdd00',
    isVampire:true,bodyDamageMultiplier:1.60,
    description:'Охотник крови — агрессивный вампир, быстрая перезарядка + высокий урон корпусом.',
    barrels:[el(-0.10,52,14,1.20,1.05,1.15,1.20),el(0.10,52,14,1.20,1.05,1.15,1.20)]};
  W1['BloodHunter']='Охотник крови';

  _t['SoulDrain']={name:'SoulDrain',requiredLevel:30,upgradesFrom:['Vampire'],color:'#ffdd00',
    isVampire:true,isDroneShooter:true,droneHits:5,radiusMultiplier:1.10,
    description:'МЕХАНИКА: Высасывание душ — 3 вампирических дрона-охотника поглощают HP врагов автономно.',
    barrels:[el(0,34,10,0.85,1.20,1.10,0.82),el(2.09,34,10,0.85,1.20,1.10,0.82),el(-2.09,34,10,0.85,1.20,1.10,0.82)]};
  W1['SoulDrain']='Высасывание душ';

  _t['Revenant']={name:'Revenant',requiredLevel:30,upgradesFrom:['Vampire'],color:'#ffdd00',
    isVampire:true,isInvis:true,bodyDamageMultiplier:1.40,
    description:'МЕХАНИКА: Ревенант — невидим + вампиризм. Восстанавливает HP из засады.',
    barrels:[el(0,60,11,2.00,0.78,1.40,1.50)]};
  W1['Revenant']='Ревенант';

  _t['Bloodlust']={name:'Bloodlust',requiredLevel:45,upgradesFrom:['BloodHunter'],color:'#ff8800',
    isVampire:true,bodyDamageMultiplier:1.80,
    description:'Жажда крови — 4 ствола крестом, вампирический огонь во все стороны одновременно.',
    barrels:[el(0,54,14,1.10,1.05,1.15,1.20),el(Math.PI/2,48,12,1.20,1.00,1.10,1.00),
             el(Math.PI,54,14,1.10,1.05,1.15,1.20),el(-Math.PI/2,48,12,1.20,1.00,1.10,1.00)]};
  W1['Bloodlust']='Жажда крови';

  _t['DarkFangs']={name:'DarkFangs',requiredLevel:45,upgradesFrom:['BloodHunter'],color:'#ff8800',
    isVampire:true,bodyDamageMultiplier:2.50,
    description:'Тёмные клыки — два длинных вампирических ствола + высокий урон тараном.',
    barrels:[el(-0.12,56,15,1.20,1.10,1.20,1.30),el(0.12,56,15,1.20,1.10,1.20,1.30)]};
  W1['DarkFangs']='Тёмные клыки';

  _t['VampireX']={name:'VampireX',requiredLevel:45,upgradesFrom:['BloodHunter'],color:'#ff8800',
    isVampire:true,isPiercing:true,bodyDamageMultiplier:2.00,
    description:'МЕХАНИКА: Вампир-Икс — пробивающий вампирический выстрел, поглощает HP от нескольких врагов.',
    barrels:[el(0,62,18,2.00,1.20,1.40,1.80)]};
  W1['VampireX']='Вампир-Икс';

  _t['SoulReaper']={name:'SoulReaper',requiredLevel:45,upgradesFrom:['SoulDrain'],color:'#ff8800',
    isVampire:true,isDroneShooter:true,droneHits:7,radiusMultiplier:1.20,
    description:'Пожиратель душ — 5 вампирических дронов-охотников атакуют автономно.',
    barrels:[0,1,2,3,4].map(function(i){return el(i*2*Math.PI/5,32,10,0.78,1.25,1.10,0.85);})};
  W1['SoulReaper']='Пожиратель душ';

  _t['EclipseDrain']={name:'EclipseDrain',requiredLevel:45,upgradesFrom:['SoulDrain'],color:'#ff8800',
    isVampire:true,isDroneShooter:true,droneHits:8,isInvis:true,radiusMultiplier:1.15,
    description:'МЕХАНИКА: Затмение-поглощение — невидимые вампирические дроны атакуют незаметно.',
    barrels:[el(0,38,12,0.80,1.30,1.10,0.88),el(2.09,38,12,0.80,1.30,1.10,0.88),el(-2.09,38,12,0.80,1.30,1.10,0.88)]};
  W1['EclipseDrain']='Затмение-поглощение';

  _t['VoidDrain']={name:'VoidDrain',requiredLevel:45,upgradesFrom:['SoulDrain'],color:'#ff8800',
    isVampire:true,isDroneShooter:true,droneHits:10,radiusMultiplier:1.25,
    description:'Поглощение пустоты — 6 дронов по кругу + вампиризм, тотальный захват зоны.',
    barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI/3,36,11,0.72,1.35,1.10,0.90);})};
  W1['VoidDrain']='Поглощение пустоты';

  _t['Wraith']={name:'Wraith',requiredLevel:45,upgradesFrom:['Revenant'],color:'#ff8800',
    isVampire:true,isInvis:true,
    description:'Призрак — невидимый вампир с двумя стволами, атакует из тени.',
    barrels:[el(-0.10,60,10,1.80,0.80,1.50,1.60),el(0.10,60,10,1.80,0.80,1.50,1.60)]};
  W1['Wraith']='Призрак';

  _t['NightShade']={name:'NightShade',requiredLevel:45,upgradesFrom:['Revenant'],color:'#ff8800',
    isVampire:true,isInvis:true,
    description:'Ночная тень — невидимый вампир-снайпер, один чёрный выстрел из темноты.',
    barrels:[el(0,74,10,2.50,0.68,1.80,2.00)]};
  W1['NightShade']='Ночная тень';

  _t['DarkReaper']={name:'DarkReaper',requiredLevel:45,upgradesFrom:['Revenant'],color:'#ff8800',
    isVampire:true,isInvis:true,bodyDamageMultiplier:2.50,
    description:'МЕХАНИКА: Тёмный жнец — невидим + огромный урон тараном + вампирический выстрел.',
    barrels:[el(0,54,16,2.00,0.90,1.30,1.50)]};
  W1['DarkReaper']='Тёмный жнец';

  // ══════════════════════════════════════════════════════════════════════════
  // BRANCH 2 — CHAINSHOT  (level 15, Цепной)
  // ══════════════════════════════════════════════════════════════════════════
  _t['Chainshot']={name:'Chainshot',requiredLevel:15,upgradesFrom:['Warlock'],color:'#22cc55',
    isChain:true,isHoming:true,
    description:'МЕХАНИКА: Цепной — пуля прыгает на ближайшего врага (до 3 прыжков). Каждый прыжок слабее.',
    barrels:[el(0,48,13,1.60,1.00,1.40,1.00)]};
  W1['Chainshot']='Цепной';

  _t['ArcaneBolt']={name:'ArcaneBolt',requiredLevel:30,upgradesFrom:['Chainshot'],color:'#ffdd00',
    isChain:true,isHoming:true,
    description:'МЕХАНИКА: Аркановый разряд — 2 цепных снаряда одновременно, поражают до 6 врагов.',
    barrels:[el(-0.10,50,13,1.50,1.05,1.40,1.00),el(0.10,50,13,1.50,1.05,1.40,1.00)]};
  W1['ArcaneBolt']='Аркановый разряд';

  _t['Thunderchain']={name:'Thunderchain',requiredLevel:30,upgradesFrom:['Chainshot'],color:'#ffdd00',
    isChain:true,isHoming:true,
    description:'МЕХАНИКА: Громовая цепь — широкий снаряд прыгает широко, покрывает большую зону.',
    barrels:[el(-0.20,46,16,1.40,1.20,1.30,1.20),el(0,50,18,1.40,1.25,1.30,1.30),el(0.20,46,16,1.40,1.20,1.30,1.20)]};
  W1['Thunderchain']='Громовая цепь';

  _t['LightningRod']={name:'LightningRod',requiredLevel:30,upgradesFrom:['Chainshot'],color:'#ffdd00',
    isChain:true,isHoming:true,isLaser:true,
    description:'МЕХАНИКА: Молниеотвод — лазерный цепной удар, мгновенно поражает 3 врага подряд.',
    barrels:[el(0,60,9,2.20,0.72,2.50,1.30)]};
  W1['LightningRod']='Молниеотвод';

  _t['ArcaneStorm']={name:'ArcaneStorm',requiredLevel:45,upgradesFrom:['ArcaneBolt'],color:'#ff8800',
    isChain:true,isHoming:true,
    description:'Аркановый шторм — 4 цепных снаряда, 12 суммарных прыжков, магический шквал.',
    barrels:[el(-0.25,48,12,1.40,1.00,1.30,0.95),el(-0.08,52,13,1.40,1.05,1.30,1.00),
             el(0.08,52,13,1.40,1.05,1.30,1.00),el(0.25,48,12,1.40,1.00,1.30,0.95)]};
  W1['ArcaneStorm']='Аркановый шторм';

  _t['ChainBlast']={name:'ChainBlast',requiredLevel:45,upgradesFrom:['ArcaneBolt'],color:'#ff8800',
    isChain:true,isHoming:true,
    description:'Цепной взрыв — 3 снаряда вперёд + 2 назад, покрывает 270° цепными ударами.',
    barrels:[el(0,52,14,1.30,1.05,1.35,1.00),el(Math.PI/2,46,12,1.50,1.00,1.25,0.90),
             el(-Math.PI/2,46,12,1.50,1.00,1.25,0.90),el(Math.PI,44,11,1.60,0.95,1.20,0.88)]};
  W1['ChainBlast']='Цепной взрыв';

  _t['ArcCaster']={name:'ArcCaster',requiredLevel:45,upgradesFrom:['ArcaneBolt'],color:'#ff8800',
    isChain:true,isHoming:true,isDroneShooter:true,droneHits:5,radiusMultiplier:1.10,
    description:'МЕХАНИКА: Дуговой маг — 3 цепных дрона автономно прыгают между врагами.',
    barrels:[el(0,34,11,0.82,1.20,1.10,0.80),el(2.09,34,11,0.82,1.20,1.10,0.80),el(-2.09,34,11,0.82,1.20,1.10,0.80)]};
  W1['ArcCaster']='Дуговой маг';

  _t['Thunderclap']={name:'Thunderclap',requiredLevel:45,upgradesFrom:['Thunderchain'],color:'#ff8800',
    isChain:true,isHoming:true,
    description:'Удар грома — широкий снаряд + 4 боковых, цепная молния в 5 направлениях.',
    barrels:[el(0,54,20,1.60,1.30,1.30,1.40),el(Math.PI/3,38,12,1.40,1.05,1.20,1.00),
             el(-Math.PI/3,38,12,1.40,1.05,1.20,1.00),el(2*Math.PI/3,36,11,1.60,1.00,1.15,0.88),
             el(-2*Math.PI/3,36,11,1.60,1.00,1.15,0.88)]};
  W1['Thunderclap']='Удар грома';

  _t['StormSurge']={name:'StormSurge',requiredLevel:45,upgradesFrom:['Thunderchain'],color:'#ff8800',
    isChain:true,isHoming:true,
    description:'Штормовая волна — 6 широких снарядов по 360°, цепная буря вокруг.',
    barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI/3,44,16,1.40,1.15,1.25,1.10);})};
  W1['StormSurge']='Штормовая волна';

  _t['Maelstrom']={name:'Maelstrom',requiredLevel:45,upgradesFrom:['Thunderchain'],color:'#ff8800',
    isChain:true,isHoming:true,
    description:'Мальстрём — 3 тяжёлых снаряда, каждый прыгает до 5 врагов, вихрь цепей.',
    barrels:[el(0,52,22,1.80,1.40,1.20,1.60),el(2.09,50,20,1.80,1.35,1.20,1.50),el(-2.09,50,20,1.80,1.35,1.20,1.50)]};
  W1['Maelstrom']='Мальстрём';

  _t['PlasmaChain']={name:'PlasmaChain',requiredLevel:45,upgradesFrom:['LightningRod'],color:'#ff8800',
    isChain:true,isHoming:true,isLaser:true,
    description:'Плазменная цепь — лазерный цепной луч + 2 боковых разряда, 3 мгновенные цели.',
    barrels:[el(0,68,9,2.50,0.68,2.80,1.50),el(Math.PI/3,42,8,2.00,0.65,2.50,1.10),el(-Math.PI/3,42,8,2.00,0.65,2.50,1.10)]};
  W1['PlasmaChain']='Плазменная цепь';

  _t['BallLightning']={name:'BallLightning',requiredLevel:45,upgradesFrom:['LightningRod'],color:'#ff8800',
    isChain:true,isHoming:true,isRocket:true,
    description:'МЕХАНИКА: Шаровая молния — самонаводящийся снаряд преследует и поражает группы врагов.',
    barrels:[el(0,50,22,3.00,1.40,2.00,2.20)]};
  W1['BallLightning']='Шаровая молния';

  _t['VoltStrike']={name:'VoltStrike',requiredLevel:45,upgradesFrom:['LightningRod'],color:'#ff8800',
    isChain:true,isHoming:true,isLaser:true,
    description:'Вольтовый удар — 3 лазерных цепных луча одновременно, мгновенная гибель группы.',
    barrels:[el(-0.12,64,8,2.20,0.65,2.60,1.40),el(0,68,9,2.40,0.66,2.60,1.50),el(0.12,64,8,2.20,0.65,2.60,1.40)]};
  W1['VoltStrike']='Вольтовый удар';

  // ══════════════════════════════════════════════════════════════════════════
  // BRANCH 2 — TURRET ENGINEER  (level 15, Турельщик)
  // ══════════════════════════════════════════════════════════════════════════
  _t['Turret']={name:'Turret',requiredLevel:15,upgradesFrom:['Warlock'],color:'#22cc55',
    isDroneShooter:true,droneHits:5,radiusMultiplier:1.05,
    description:'МЕХАНИКА: Турельщик — ставит 3 авто-турели. Турели автономно атакуют ближайшего врага.',
    barrels:[el(0,30,9,0.90,1.10,1.00,0.68),el(2.09,30,9,0.90,1.10,1.00,0.68),el(-2.09,30,9,0.90,1.10,1.00,0.68)]};
  W1['Turret']='Турельщик';

  _t['TurretBattery']={name:'TurretBattery',requiredLevel:30,upgradesFrom:['Turret'],color:'#ffdd00',
    isDroneShooter:true,droneHits:4,radiusMultiplier:1.10,
    description:'МЕХАНИКА: Батарея турелей — 6 маленьких быстрых турелей, максимальная плотность огня.',
    barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI/3,26,7,0.80,1.05,1.00,0.62);})};
  W1['TurretBattery']='Батарея турелей';

  _t['TurretHeavy']={name:'TurretHeavy',requiredLevel:30,upgradesFrom:['Turret'],color:'#ffdd00',
    isDroneShooter:true,droneHits:8,radiusMultiplier:1.20,bodyDamageMultiplier:1.50,
    description:'МЕХАНИКА: Тяжёлые турели — 4 мощных авто-орудия с высоким уроном.',
    barrels:[0,1,2,3].map(function(i){return el(i*Math.PI/2,36,14,1.00,1.35,1.00,0.88);})};
  W1['TurretHeavy']='Тяжёлые турели';

  _t['TurretCannon']={name:'TurretCannon',requiredLevel:30,upgradesFrom:['Turret'],color:'#ffdd00',
    isDroneShooter:true,droneHits:9,isHoming:true,radiusMultiplier:1.15,
    description:'МЕХАНИКА: Пушечные турели — 2 дальнобойных самонаводящихся орудия.',
    barrels:[el(0,44,18,1.10,1.40,1.00,0.95),el(Math.PI,44,18,1.10,1.40,1.00,0.95)]};
  W1['TurretCannon']='Пушечные турели';

  _t['TurretSwarm']={name:'TurretSwarm',requiredLevel:45,upgradesFrom:['TurretBattery'],color:'#ff8800',
    isDroneShooter:true,droneHits:3,radiusMultiplier:1.20,
    description:'Рой турелей — 8 быстрых маленьких орудий атакуют одновременно со всех сторон.',
    barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI/4,24,6,0.65,1.00,1.00,0.58);})};
  W1['TurretSwarm']='Рой турелей';

  _t['TurretStorm']={name:'TurretStorm',requiredLevel:45,upgradesFrom:['TurretBattery'],color:'#ff8800',
    isDroneShooter:true,droneHits:5,radiusMultiplier:1.25,bodyDamageMultiplier:1.50,
    description:'Штормовые турели — 6 орудий + мощный таран, непрерывный огонь во все стороны.',
    barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI/3,28,8,0.72,1.10,1.00,0.65);})};
  W1['TurretStorm']='Штормовые турели';

  _t['TurretFlak']={name:'TurretFlak',requiredLevel:45,upgradesFrom:['TurretBattery'],color:'#ff8800',
    isDroneShooter:true,droneHits:6,radiusMultiplier:1.18,
    description:'Зенитные турели — 8 орудий со всех углов, непробиваемая сеть огня.',
    barrels:[el(0,32,10,0.78,1.15,1.00,0.70),el(Math.PI/4,30,9,0.78,1.10,1.00,0.65),
             el(Math.PI/2,30,9,0.82,1.10,1.00,0.65),el(Math.PI,32,10,0.78,1.15,1.00,0.70),
             el(-Math.PI/2,30,9,0.82,1.10,1.00,0.65),el(-Math.PI/4,30,9,0.78,1.10,1.00,0.65),
             el(3*Math.PI/4,28,9,0.80,1.05,1.00,0.62),el(-3*Math.PI/4,28,9,0.80,1.05,1.00,0.62)]};
  W1['TurretFlak']='Зенитные турели';

  _t['CannonTurret']={name:'CannonTurret',requiredLevel:45,upgradesFrom:['TurretHeavy'],color:'#ff8800',
    isDroneShooter:true,droneHits:10,radiusMultiplier:1.35,bodyDamageMultiplier:2.50,
    description:'Орудийные турели — 4 тяжёлых орудия + мощный броневой корпус.',
    barrels:[0,1,2,3].map(function(i){return el(i*Math.PI/2,44,18,0.88,1.50,1.00,1.00);})};
  W1['CannonTurret']='Орудийные турели';

  _t['SiegeTurret']={name:'SiegeTurret',requiredLevel:45,upgradesFrom:['TurretHeavy'],color:'#ff8800',
    isDroneShooter:true,droneHits:12,radiusMultiplier:1.40,bodyDamageMultiplier:2.00,
    description:'Осадные турели — 2 колоссальных орудия + 2 боковых защитных, крепость на колёсах.',
    barrels:[el(0,50,22,1.00,1.60,1.00,1.10),el(Math.PI,50,22,1.00,1.60,1.00,1.10),
             el(Math.PI/2,36,14,0.90,1.20,1.00,0.88),el(-Math.PI/2,36,14,0.90,1.20,1.00,0.88)]};
  W1['SiegeTurret']='Осадные турели';

  _t['WarlordTurret']={name:'WarlordTurret',requiredLevel:45,upgradesFrom:['TurretHeavy'],color:'#ff8800',
    isDroneShooter:true,droneHits:8,isInvis:true,radiusMultiplier:1.30,
    description:'МЕХАНИКА: Лорд турелей — невидим, 3 мощных орудия атакуют пока хозяин скрыт.',
    barrels:[el(0,48,20,0.95,1.45,1.00,0.98),el(2.09,46,18,0.95,1.40,1.00,0.92),el(-2.09,46,18,0.95,1.40,1.00,0.92)]};
  W1['WarlordTurret']='Лорд турелей';

  _t['MissileTurret']={name:'MissileTurret',requiredLevel:45,upgradesFrom:['TurretCannon'],color:'#ff8800',
    isDroneShooter:true,droneHits:8,isHoming:true,radiusMultiplier:1.25,
    description:'МЕХАНИКА: Ракетные турели — 4 самонаводящихся орудия, ни одна цель не скроется.',
    barrels:[0,1,2,3].map(function(i){return el(i*Math.PI/2,42,16,1.00,1.38,1.00,0.92);})};
  W1['MissileTurret']='Ракетные турели';

  _t['LongbowTurret']={name:'LongbowTurret',requiredLevel:45,upgradesFrom:['TurretCannon'],color:'#ff8800',
    isDroneShooter:true,droneHits:10,isHoming:true,isRangeBoost:true,radiusMultiplier:1.20,
    description:'МЕХАНИКА: Дальнобойные турели — 3 орудия с нарастающим уроном от расстояния.',
    barrels:[el(0,52,16,1.10,1.40,1.00,0.95),el(2.09,50,15,1.10,1.35,1.00,0.90),el(-2.09,50,15,1.10,1.35,1.00,0.90)]};
  W1['LongbowTurret']='Дальнобойные турели';

  _t['NexusTurret']={name:'NexusTurret',requiredLevel:45,upgradesFrom:['TurretCannon'],color:'#ff8800',
    isDroneShooter:true,droneHits:12,isHoming:true,radiusMultiplier:1.40,bodyDamageMultiplier:1.80,
    description:'Нексус — командная башня: 4 тяжёлых + 4 лёгких орудия, полная доминация зоны.',
    barrels:[el(0,48,18,0.90,1.45,1.00,0.98),el(Math.PI/2,48,18,0.90,1.45,1.00,0.98),
             el(Math.PI,48,18,0.90,1.45,1.00,0.98),el(-Math.PI/2,48,18,0.90,1.45,1.00,0.98),
             el(Math.PI/4,32,10,0.80,1.15,1.00,0.75),el(3*Math.PI/4,32,10,0.80,1.15,1.00,0.75),
             el(-3*Math.PI/4,32,10,0.80,1.15,1.00,0.75),el(-Math.PI/4,32,10,0.80,1.15,1.00,0.75)]};
  W1['NexusTurret']='Нексус';

  // ── TREE NODES ────────────────────────────────────────────────────────────
  // Branch 1 — tier:1 (level-15 tanks, x=xl[1]=165)
  w0.push({name:'Splitter',     tier:1, x:xl[1], y:8000});
  w0.push({name:'Detonator',    tier:1, x:xl[1], y:8500});
  w0.push({name:'Longshot',     tier:1, x:xl[1], y:9000});
  // Branch 2 — tier:1
  w0.push({name:'Vampire',      tier:1, x:xl[1], y:10200});
  w0.push({name:'Chainshot',    tier:1, x:xl[1], y:10700});
  w0.push({name:'Turret',       tier:1, x:xl[1], y:11200});

  // Branch 1 — tier:2 (level-30 tanks, x=xl[2]=295)
  w0.push({name:'Fragmenter',   tier:2, x:xl[2], y:7870});
  w0.push({name:'ScatterShot',  tier:2, x:xl[2], y:8000});
  w0.push({name:'SplitMirror',  tier:2, x:xl[2], y:8130});
  w0.push({name:'Primer',       tier:2, x:xl[2], y:8370});
  w0.push({name:'Bombard',      tier:2, x:xl[2], y:8500});
  w0.push({name:'Minelayer',    tier:2, x:xl[2], y:8630});
  w0.push({name:'Marksman',     tier:2, x:xl[2], y:8870});
  w0.push({name:'HeavyCannon',  tier:2, x:xl[2], y:9000});
  w0.push({name:'BurstRifle',   tier:2, x:xl[2], y:9130});
  // Branch 2 — tier:2
  w0.push({name:'BloodHunter',  tier:2, x:xl[2], y:10070});
  w0.push({name:'SoulDrain',    tier:2, x:xl[2], y:10200});
  w0.push({name:'Revenant',     tier:2, x:xl[2], y:10330});
  w0.push({name:'ArcaneBolt',   tier:2, x:xl[2], y:10570});
  w0.push({name:'Thunderchain', tier:2, x:xl[2], y:10700});
  w0.push({name:'LightningRod', tier:2, x:xl[2], y:10830});
  w0.push({name:'TurretBattery',tier:2, x:xl[2], y:11070});
  w0.push({name:'TurretHeavy',  tier:2, x:xl[2], y:11200});
  w0.push({name:'TurretCannon', tier:2, x:xl[2], y:11330});

  // Branch 1 — tier:3 (level-45 tanks, x=xl[3]=430) — generateT4 will add T5
  w0.push({name:'ShardStorm',   tier:3, x:xl[3], y:7818});
  w0.push({name:'FragCore',     tier:3, x:xl[3], y:7870});
  w0.push({name:'FragNova',     tier:3, x:xl[3], y:7922});
  w0.push({name:'Buckshot',     tier:3, x:xl[3], y:7948});
  w0.push({name:'ScatterBomb',  tier:3, x:xl[3], y:8000});
  w0.push({name:'CloudBurst',   tier:3, x:xl[3], y:8052});
  w0.push({name:'DualFrag',     tier:3, x:xl[3], y:8078});
  w0.push({name:'OmniFrag',     tier:3, x:xl[3], y:8130});
  w0.push({name:'CrossFrag',    tier:3, x:xl[3], y:8182});
  w0.push({name:'ChargeBurst',  tier:3, x:xl[3], y:8318});
  w0.push({name:'StickyFlak',   tier:3, x:xl[3], y:8370});
  w0.push({name:'QuickFuse',    tier:3, x:xl[3], y:8422});
  w0.push({name:'MegaBomb',     tier:3, x:xl[3], y:8448});
  w0.push({name:'DoubleBomb',   tier:3, x:xl[3], y:8500});
  w0.push({name:'BombRain',     tier:3, x:xl[3], y:8552});
  w0.push({name:'MineBelt',     tier:3, x:xl[3], y:8578});
  w0.push({name:'SuperMine',    tier:3, x:xl[3], y:8630});
  w0.push({name:'InvisibleMiner',tier:3,x:xl[3], y:8682});
  w0.push({name:'LongRangeX',   tier:3, x:xl[3], y:8818});
  w0.push({name:'SniperX',      tier:3, x:xl[3], y:8870});
  w0.push({name:'TwinRifle',    tier:3, x:xl[3], y:8922});
  w0.push({name:'HeavyShell',   tier:3, x:xl[3], y:8948});
  w0.push({name:'CannonBarrage',tier:3, x:xl[3], y:9000});
  w0.push({name:'SiegeGun',     tier:3, x:xl[3], y:9052});
  w0.push({name:'RapidBurst',   tier:3, x:xl[3], y:9078});
  w0.push({name:'TriSnipe',     tier:3, x:xl[3], y:9130});
  w0.push({name:'GaussRifle',   tier:3, x:xl[3], y:9182});
  // Branch 2 — tier:3
  w0.push({name:'Bloodlust',    tier:3, x:xl[3], y:10018});
  w0.push({name:'DarkFangs',    tier:3, x:xl[3], y:10070});
  w0.push({name:'VampireX',     tier:3, x:xl[3], y:10122});
  w0.push({name:'SoulReaper',   tier:3, x:xl[3], y:10148});
  w0.push({name:'EclipseDrain', tier:3, x:xl[3], y:10200});
  w0.push({name:'VoidDrain',    tier:3, x:xl[3], y:10252});
  w0.push({name:'Wraith',       tier:3, x:xl[3], y:10278});
  w0.push({name:'NightShade',   tier:3, x:xl[3], y:10330});
  w0.push({name:'DarkReaper',   tier:3, x:xl[3], y:10382});
  w0.push({name:'ArcaneStorm',  tier:3, x:xl[3], y:10518});
  w0.push({name:'ChainBlast',   tier:3, x:xl[3], y:10570});
  w0.push({name:'ArcCaster',    tier:3, x:xl[3], y:10622});
  w0.push({name:'Thunderclap',  tier:3, x:xl[3], y:10648});
  w0.push({name:'StormSurge',   tier:3, x:xl[3], y:10700});
  w0.push({name:'Maelstrom',    tier:3, x:xl[3], y:10752});
  w0.push({name:'PlasmaChain',  tier:3, x:xl[3], y:10778});
  w0.push({name:'BallLightning',tier:3, x:xl[3], y:10830});
  w0.push({name:'VoltStrike',   tier:3, x:xl[3], y:10882});
  w0.push({name:'TurretSwarm',  tier:3, x:xl[3], y:11018});
  w0.push({name:'TurretStorm',  tier:3, x:xl[3], y:11070});
  w0.push({name:'TurretFlak',   tier:3, x:xl[3], y:11122});
  w0.push({name:'CannonTurret', tier:3, x:xl[3], y:11148});
  w0.push({name:'SiegeTurret',  tier:3, x:xl[3], y:11200});
  w0.push({name:'WarlordTurret',tier:3, x:xl[3], y:11252});
  w0.push({name:'MissileTurret',tier:3, x:xl[3], y:11278});
  w0.push({name:'LongbowTurret',tier:3, x:xl[3], y:11330});
  w0.push({name:'NexusTurret',  tier:3, x:xl[3], y:11382});

  // ── TREE EDGES ────────────────────────────────────────────────────────────
  Ty.push(['Basic','Alchemist']);
  Ty.push(['Alchemist','Splitter']);
  Ty.push(['Alchemist','Detonator']);
  Ty.push(['Alchemist','Longshot']);
  Ty.push(['Basic','Warlock']);
  Ty.push(['Warlock','Vampire']);
  Ty.push(['Warlock','Chainshot']);
  Ty.push(['Warlock','Turret']);
  Ty.push(['Splitter','Fragmenter']);
  Ty.push(['Splitter','ScatterShot']);
  Ty.push(['Splitter','SplitMirror']);
  Ty.push(['Detonator','Primer']);
  Ty.push(['Detonator','Bombard']);
  Ty.push(['Detonator','Minelayer']);
  Ty.push(['Longshot','Marksman']);
  Ty.push(['Longshot','HeavyCannon']);
  Ty.push(['Longshot','BurstRifle']);
  Ty.push(['Fragmenter','ShardStorm']);
  Ty.push(['Fragmenter','FragCore']);
  Ty.push(['Fragmenter','FragNova']);
  Ty.push(['ScatterShot','Buckshot']);
  Ty.push(['ScatterShot','ScatterBomb']);
  Ty.push(['ScatterShot','CloudBurst']);
  Ty.push(['SplitMirror','DualFrag']);
  Ty.push(['SplitMirror','OmniFrag']);
  Ty.push(['SplitMirror','CrossFrag']);
  Ty.push(['Primer','ChargeBurst']);
  Ty.push(['Primer','StickyFlak']);
  Ty.push(['Primer','QuickFuse']);
  Ty.push(['Bombard','MegaBomb']);
  Ty.push(['Bombard','DoubleBomb']);
  Ty.push(['Bombard','BombRain']);
  Ty.push(['Minelayer','MineBelt']);
  Ty.push(['Minelayer','SuperMine']);
  Ty.push(['Minelayer','InvisibleMiner']);
  Ty.push(['Marksman','LongRangeX']);
  Ty.push(['Marksman','SniperX']);
  Ty.push(['Marksman','TwinRifle']);
  Ty.push(['HeavyCannon','HeavyShell']);
  Ty.push(['HeavyCannon','CannonBarrage']);
  Ty.push(['HeavyCannon','SiegeGun']);
  Ty.push(['BurstRifle','RapidBurst']);
  Ty.push(['BurstRifle','TriSnipe']);
  Ty.push(['BurstRifle','GaussRifle']);
  Ty.push(['Vampire','BloodHunter']);
  Ty.push(['Vampire','SoulDrain']);
  Ty.push(['Vampire','Revenant']);
  Ty.push(['Chainshot','ArcaneBolt']);
  Ty.push(['Chainshot','Thunderchain']);
  Ty.push(['Chainshot','LightningRod']);
  Ty.push(['Turret','TurretBattery']);
  Ty.push(['Turret','TurretHeavy']);
  Ty.push(['Turret','TurretCannon']);
  Ty.push(['BloodHunter','Bloodlust']);
  Ty.push(['BloodHunter','DarkFangs']);
  Ty.push(['BloodHunter','VampireX']);
  Ty.push(['SoulDrain','SoulReaper']);
  Ty.push(['SoulDrain','EclipseDrain']);
  Ty.push(['SoulDrain','VoidDrain']);
  Ty.push(['Revenant','Wraith']);
  Ty.push(['Revenant','NightShade']);
  Ty.push(['Revenant','DarkReaper']);
  Ty.push(['ArcaneBolt','ArcaneStorm']);
  Ty.push(['ArcaneBolt','ChainBlast']);
  Ty.push(['ArcaneBolt','ArcCaster']);
  Ty.push(['Thunderchain','Thunderclap']);
  Ty.push(['Thunderchain','StormSurge']);
  Ty.push(['Thunderchain','Maelstrom']);
  Ty.push(['LightningRod','PlasmaChain']);
  Ty.push(['LightningRod','BallLightning']);
  Ty.push(['LightningRod','VoltStrike']);
  Ty.push(['TurretBattery','TurretSwarm']);
  Ty.push(['TurretBattery','TurretStorm']);
  Ty.push(['TurretBattery','TurretFlak']);
  Ty.push(['TurretHeavy','CannonTurret']);
  Ty.push(['TurretHeavy','SiegeTurret']);
  Ty.push(['TurretHeavy','WarlordTurret']);
  Ty.push(['TurretCannon','MissileTurret']);
  Ty.push(['TurretCannon','LongbowTurret']);
  Ty.push(['TurretCannon','NexusTurret']);
})();

;(function generateT4(){
  // Scale all tree node y-positions x2 for proper tier-4 spacing
  w0.forEach(function(n){n.y=n.y*2.5;});

  function shiftHue(hex,deg){
    let r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
    let max=Math.max(r,g,b),min=Math.min(r,g,b),h,s,l=(max+min)/2;
    if(max===min){h=s=0;}else{let d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);h=max===r?(g-b)/d+(g<b?6:0):max===g?(b-r)/d+2:(r-g)/d+4;h/=6;}
    h=(h+deg/360)%1;if(h<0)h+=1;
    let q=l<0.5?l*(1+s):l+s-l*s,p=2*l-q;
    function hf(t){t=t<0?t+1:t>1?t-1:t;return t<1/6?p+(q-p)*6*t:t<1/2?q:t<2/3?p+(q-p)*(2/3-t)*6:p;}
    let nr=Math.round(hf(h+1/3)*255),ng=Math.round(hf(h)*255),nb=Math.round(hf(h-1/3)*255);
    return '#'+[nr,ng,nb].map(x=>x.toString(16).padStart(2,'0')).join('');
  }

  // Each variant gives a COMPLETELY DIFFERENT role, not just stat changes:
  // Alpha  = Реактор    — скорость + реактивные стволы назад
  // Omega  = Коллапсар  — один колоссальный снаряд (заменяет ВСЕ стволы)
  // Prime  = Арсенал    — оригинал + боковые/задние орудия для кругового контроля

  // Branch-aware variants: sniper / machine / flank each get unique geometry.
    const _T4BRANCH={
      Assassin:'sniper', Hunter:'sniper', Stalker:'sniper',
      Gunner:'machine', Sprayer:'machine', TripleShot:'machine',
      Twin:'flank', QuadTank:'flank', Smasher:'flank',
    };
    const variants=[
      {
        suf:'Alpha', ru:'Альфа', h:38, bdm:0.82, rm:0.93,
        getLabel:(br)=>({
          sniper:'[Пустотный: гиперскоростные тонкие стволы + стабилизаторы — дальнобойный убийца]',
          machine:'[Вихрь: 6 стволов спиралью — шторм пуль по всему конусу]',
          flank: '[Натиск: усиленные стволы + 4 боковых орудия — круговая атака]',
        }[br]||'[Реактор: реактивные стволы назад + высокая скорострельность]'),
        transform:(t,br,tk)=>{
          const _ovA={
'Booster':t=>({barrels:[el(0,44,12,0.38,1.15,0.9,0.85),el(0.22,40,10,0.34,1.1,0.85,0.8),el(-0.22,40,10,0.34,1.1,0.85,0.8),el(0.45,35,9,0.3,1.05,0.8,0.75),el(Math.PI,32,11,0.32,0.9,0.72,0.72),el(Math.PI+0.28,28,9,0.28,0.88,0.68,0.68),el(Math.PI-0.28,28,9,0.28,0.88,0.68,0.68),el(Math.PI+0.55,24,8,0.25,0.85,0.65,0.65)],noBarrels:false,bdm:0.88,rm:0.92}),
'OctoTank':t=>({barrels:[el(0,42,11,0.35,1.1,0.85,0.85),el(Math.PI/4,40,11,0.35,1.1,0.85,0.85),el(Math.PI/2,40,11,0.35,1.1,0.85,0.85),el(3*Math.PI/4,40,11,0.35,1.1,0.85,0.85),el(Math.PI,42,11,0.35,1.1,0.85,0.85),el(-3*Math.PI/4,40,11,0.35,1.1,0.85,0.85),el(-Math.PI/2,40,11,0.35,1.1,0.85,0.85),el(-Math.PI/4,40,11,0.35,1.1,0.85,0.85)],noBarrels:false,bdm:0.82,rm:0.9}),
'GunnerTrapper':t=>({barrels:[el(0,44,8,0.3,1.15,0.88,0.78),el(0.22,40,7,0.28,1.1,0.82,0.72),el(-0.22,40,7,0.28,1.1,0.82,0.72),el(Math.PI/2,32,14,0.5,0.85,0.95,1.1),el(-Math.PI/2,32,14,0.5,0.85,0.95,1.1)],noBarrels:false,bdm:0.9,rm:0.95}),
'PentaShot':t=>({barrels:[el(0,44,10,0.36,1.12,0.88,0.82),el(0.22,42,10,0.34,1.1,0.86,0.8),el(-0.22,42,10,0.34,1.1,0.86,0.8),el(0.44,38,9,0.3,1.06,0.82,0.75),el(-0.44,38,9,0.3,1.06,0.82,0.75),el(Math.PI/2+0.2,30,10,0.4,0.9,0.85,0.9),el(-Math.PI/2-0.2,30,10,0.4,0.9,0.85,0.9)],noBarrels:false,bdm:0.86,rm:0.92}),
'Hurricane':t=>({barrels:[el(0.4,40,11,0.34,1.1,0.86,0.82),el(-0.4,40,11,0.34,1.1,0.86,0.82),el(Math.PI/2+0.4,38,10,0.32,1.05,0.82,0.78),el(-Math.PI/2-0.4,38,10,0.32,1.05,0.82,0.78),el(Math.PI+0.25,30,9,0.3,0.88,0.75,0.72),el(Math.PI-0.25,30,9,0.3,0.88,0.75,0.72)],noBarrels:false,bdm:0.86,rm:0.92}),
'MoreGun':t=>({barrels:[el(-0.2,44,9,0.3,1.12,0.86,0.78),el(-0.07,46,9,0.28,1.12,0.86,0.78),el(0.07,46,9,0.28,1.12,0.86,0.78),el(0.2,44,9,0.3,1.12,0.86,0.78),el(-0.3,38,8,0.32,1.06,0.82,0.72),el(-0.1,40,8,0.3,1.06,0.82,0.72),el(0.1,40,8,0.3,1.06,0.82,0.72),el(0.3,38,8,0.32,1.06,0.82,0.72)],noBarrels:false,bdm:0.84,rm:0.9}),
'Spreadshot':t=>({barrels:[el(0,44,10,0.35,1.12,0.88,0.82),el(0.3,40,10,0.33,1.08,0.84,0.78),el(-0.3,40,10,0.33,1.08,0.84,0.78),el(0.6,36,9,0.3,1.04,0.8,0.74),el(-0.6,36,9,0.3,1.04,0.8,0.74),el(0.9,30,9,0.28,0.98,0.76,0.7),el(-0.9,30,9,0.28,0.98,0.76,0.7)],noBarrels:false,bdm:0.86,rm:0.92}),
'TriAngle':t=>({barrels:[el(0,46,14,0.45,1.18,0.95,0.88),el(Math.PI+0.45,34,11,0.38,0.92,0.82,0.78),el(Math.PI-0.45,34,11,0.38,0.92,0.82,0.78)],noBarrels:false,bdm:0.95,rm:1.0}),
'BentHybrid':t=>({barrels:[el(0,44,12,0.4,1.15,0.9,0.85),el(0.1,42,11,0.38,1.12,0.88,0.82),el(Math.PI/3,36,10,0.35,1.0,0.85,0.82),el(-Math.PI/3,36,10,0.35,1.0,0.85,0.82)],noBarrels:false,bdm:0.9,rm:0.95}),
'Blaster':t=>({barrels:[el(0,36,17,1.0,0.76,0.88,1.38),el(0.14,32,13,1.0,0.72,0.88,1.08),el(-0.14,32,13,1.0,0.72,0.88,1.08),el(0.28,26,11,1.0,0.68,0.88,0.86),el(-0.28,26,11,1.0,0.68,0.88,0.86),el(0.43,20,9,1.0,0.64,0.88,0.68),el(-0.43,20,9,1.0,0.64,0.88,0.68),el(0.59,14,7,1.0,0.60,0.88,0.52),el(-0.59,14,7,1.0,0.60,0.88,0.52),el(0.76,10,6,1.0,0.56,0.88,0.40),el(-0.76,10,6,1.0,0.56,0.88,0.40)],noBarrels:false,bdm:0.72,rm:1.1}),
'Buster':t=>({barrels:[el(0,48,21,0.88,0.74,1.3,2.2),el(0.19,38,15,0.88,0.71,1.3,1.55),el(-0.19,38,15,0.88,0.71,1.3,1.55),el(0.38,28,11,0.88,0.68,1.3,1.15),el(-0.38,28,11,0.88,0.68,1.3,1.15)],noBarrels:false,bdm:0.78,rm:1.1}),
'Riot':t=>({barrels:[el(Math.PI/4,28,12,1.0,0.72,0.98,1.0),el(Math.PI/4+0.22,23,9,1.0,0.68,0.98,0.78),el(Math.PI/4-0.22,23,9,1.0,0.68,0.98,0.78),el(Math.PI/4+0.44,17,7,1.0,0.64,0.98,0.58),el(Math.PI/4-0.44,17,7,1.0,0.64,0.98,0.58),el(3*Math.PI/4,28,12,1.0,0.72,0.98,1.0),el(3*Math.PI/4+0.22,23,9,1.0,0.68,0.98,0.78),el(3*Math.PI/4-0.22,23,9,1.0,0.68,0.98,0.78),el(3*Math.PI/4+0.44,17,7,1.0,0.64,0.98,0.58),el(3*Math.PI/4-0.44,17,7,1.0,0.64,0.98,0.58),el(-3*Math.PI/4,28,12,1.0,0.72,0.98,1.0),el(-3*Math.PI/4+0.22,23,9,1.0,0.68,0.98,0.78),el(-3*Math.PI/4-0.22,23,9,1.0,0.68,0.98,0.78),el(-3*Math.PI/4+0.44,17,7,1.0,0.64,0.98,0.58),el(-3*Math.PI/4-0.44,17,7,1.0,0.64,0.98,0.58),el(-Math.PI/4,28,12,1.0,0.72,0.98,1.0),el(-Math.PI/4+0.22,23,9,1.0,0.68,0.98,0.78),el(-Math.PI/4-0.22,23,9,1.0,0.68,0.98,0.78),el(-Math.PI/4+0.44,17,7,1.0,0.64,0.98,0.58),el(-Math.PI/4-0.44,17,7,1.0,0.64,0.98,0.58)],noBarrels:false,bdm:0.7,rm:1.0}),
'Colossus':t=>({barrels:[el(0,56,36,4.8,0.46,1.75,4.8),el(Math.PI+0.28,32,12,2.0,0.8,0.88,0.75),el(Math.PI-0.28,32,12,2.0,0.8,0.88,0.75)],noBarrels:false,bdm:1.2,rm:1.38}),
'Cruiser':t=>({barrels:[el(-0.08,50,22,3.2,0.56,1.32,2.6),el(0.08,50,22,4.5,0.56,1.32,2.6),el(Math.PI+0.28,26,10,2.4,0.75,0.98,0.72),el(Math.PI-0.28,26,10,2.4,0.75,0.98,0.72)],noBarrels:false,bdm:0.9,rm:1.22}),
'Brawler':t=>({barrels:[el(0,48,20,2.8,0.65,1.25,2.0),el(Math.PI/2,34,13,2.4,0.62,1.1,1.2),el(-Math.PI/2,34,13,2.4,0.62,1.1,1.2)],noBarrels:false,bdm:2.8,rm:1.15})
};if(_ovA[tk])return _ovA[tk](t);
          if(t.noBarrels){
            return {barrels:[el(0,42,13,0.45,1.3,0.95,0.9),el(0.28,38,11,0.5,1.2,0.85,0.8),el(-0.28,38,11,0.5,1.2,0.85,0.8)],noBarrels:false,bdm:0.5,rm:1.05};
          }
          if(br==='sniper'){
            // VOIDSHOT: parent barrels become ultra-long/thin + 2 tiny rear stabilizers
            const front=(t.barrels||[]).map(b=>({...b,
              length:Math.round(b.length*1.35), width:Math.max(6,Math.round(b.width*0.68)),
              bulletSpeedMultiplier:b.bulletSpeedMultiplier*1.45,
              reloadMultiplier:b.reloadMultiplier*0.65,
              bulletDamageMultiplier:b.bulletDamageMultiplier*1.18}));
            return {barrels:[...front,
              el(Math.PI-0.22,25,7,0.6,0.9,0.78,0.6),
              el(Math.PI+0.22,25,7,0.6,0.9,0.78,0.6)],noBarrels:false,bdm:0.85,rm:0.88};
          }
          if(br==='machine'){
            // TWISTER: 6 barrels in widening spiral — rotating fan look
            return {barrels:[
              el(0,    42,12,0.36,1.12,0.86,0.82),
              el( 0.36,36,10,0.32,1.06,0.82,0.72),
              el(-0.36,36,10,0.32,1.06,0.82,0.72),
              el( 0.82,28, 9,0.28,0.96,0.78,0.65),
              el(-0.82,28, 9,0.28,0.96,0.78,0.65),
              el(Math.PI,26,9,0.34,0.86,0.75,0.6),
            ],noBarrels:false,bdm:0.88,rm:0.95};
          }
          // flank: RAMPAGE — heavy enhanced front + 4 symmetrical side/rear star
          const heavy=(t.barrels||[]).map(b=>({...b,
            length:Math.round(b.length*1.1), width:Math.round(b.width*1.15),
            bulletDamageMultiplier:b.bulletDamageMultiplier*1.22,
            reloadMultiplier:b.reloadMultiplier*0.7}));
          return {barrels:[...heavy,
            el( Math.PI/2+0.18,34,11,0.55,0.9,0.95,0.85),
            el(-Math.PI/2-0.18,34,11,0.55,0.9,0.95,0.85),
            el( Math.PI-0.22,  32,10,0.5, 0.88,0.9,0.8),
            el( Math.PI+0.22,  32,10,0.5, 0.88,0.9,0.8),
          ],noBarrels:false,bdm:1.1,rm:1.0};
        }
      },
      {
        suf:'Omega', ru:'Омега', h:128, bdm:1.18, rm:1.22,
        getLabel:(br)=>({
          sniper:'[Сверхзаряд: один сверхдлинный снаряд — мгновенное уничтожение с любой дистанции]',
          machine:'[Шрапнель: три широких ствола — дробовик чудовищного калибра]',
          flank: '[Исполин: 4 толстых ствола крестом — тяжёлая неуязвимая крепость]',
        }[br]||'[Коллапсар: один сокрушительный снаряд чудовищного калибра]'),
        transform:(t,br,tk)=>{
          const _ovO={
'Ranger':t=>({barrels:[el(0,90,8,5.0,0.42,2.8,4.0)],noBarrels:false,bdm:0.8,rm:0.95}),
'Annihilator':t=>({barrels:[el(0,40,32,3.8,0.8,2.5,2.8)],noBarrels:false,bdm:1.0,rm:1.1}),
'Predator':t=>({barrels:[el(-0.04,80,10,4.0,0.46,2.3,3.5),el(0.04,76,9,3.6,0.44,2.0,3.2)],noBarrels:false,bdm:0.85,rm:0.98}),
'Streamliner':t=>({barrels:[el(0,82,8,3.8,0.45,2.2,3.2),el(0.12,76,7,3.4,0.44,2.0,3.0),el(-0.12,76,7,3.4,0.44,2.0,3.0)],noBarrels:false,bdm:0.82,rm:0.96}),
'Overtrapper':t=>({barrels:[el(0,78,10,4.2,0.46,2.4,3.6),el(Math.PI/2,32,14,1.8,0.7,1.5,1.8),el(-Math.PI/2,32,14,1.8,0.7,1.5,1.8)],noBarrels:false,bdm:0.86,rm:0.96}),
'Skimmer':t=>({barrels:[el(0,80,10,4.4,0.45,2.5,3.8),el(Math.PI+0.3,30,9,1.2,0.75,1.2,1.5),el(Math.PI-0.3,30,9,1.2,0.75,1.2,1.5)],noBarrels:false,bdm:0.84,rm:0.95}),
'Landmine':t=>({barrels:[],noBarrels:true,bdm:3.5,rm:1.5}),
'Fighter':t=>({barrels:[el(0,80,11,4.3,0.45,2.5,3.7),el(Math.PI/2,28,12,1.5,0.8,1.4,1.6),el(-Math.PI/2,28,12,1.5,0.8,1.4,1.6)],noBarrels:false,bdm:0.86,rm:0.96}),
'Rocketeer':t=>({barrels:[el(0,36,28,4.5,0.65,2.8,3.5)],noBarrels:false,bdm:1.1,rm:1.05}),
'Booster':t=>({barrels:[el(0,52,20,3.2,1.1,2.2,3.2),el(Math.PI+0.3,30,10,1.5,0.9,1.2,1.5),el(Math.PI-0.3,30,10,1.5,0.9,1.2,1.5)],noBarrels:false,bdm:1.15,rm:1.1}),
'OctoTank':t=>({barrels:[el(0,50,22,3.5,1.1,2.3,3.5),el(Math.PI/2,48,20,3.2,1.05,2.2,3.3),el(Math.PI,50,22,3.5,1.1,2.3,3.5),el(-Math.PI/2,48,20,3.2,1.05,2.2,3.3)],noBarrels:false,bdm:1.1,rm:1.1}),
'GunnerTrapper':t=>({barrels:[el(0.18,46,18,3.0,1.05,2.1,3.0),el(-0.18,46,18,3.0,1.05,2.1,3.0),el(Math.PI/2,34,15,2.2,0.85,1.8,2.2),el(-Math.PI/2,34,15,2.2,0.85,1.8,2.2)],noBarrels:false,bdm:1.05,rm:1.05}),
'PentaShot':t=>({barrels:[el(0,38,20,3.2,0.9,2.2,3.2),el(0.32,34,18,2.8,0.88,2.0,3.0),el(-0.32,34,18,2.8,0.88,2.0,3.0),el(0.65,28,16,2.4,0.85,1.8,2.8),el(-0.65,28,16,2.4,0.85,1.8,2.8)],noBarrels:false,bdm:1.0,rm:1.05}),
'Hurricane':t=>({barrels:[el(Math.PI/4,48,22,3.4,1.0,2.3,3.3),el(-3*Math.PI/4,48,22,3.4,1.0,2.3,3.3)],noBarrels:false,bdm:1.12,rm:1.08}),
'MoreGun':t=>({barrels:[el(0.18,44,14,2.8,1.05,2.0,2.8),el(-0.18,44,14,2.8,1.05,2.0,2.8),el(0.42,38,13,2.4,1.0,1.8,2.6),el(-0.42,38,13,2.4,1.0,1.8,2.6),el(0.65,32,12,2.0,0.95,1.6,2.4),el(-0.65,32,12,2.0,0.95,1.6,2.4)],noBarrels:false,bdm:0.98,rm:1.05}),
'Spreadshot':t=>({barrels:[el(0,50,24,4.0,1.0,2.5,3.5),el(Math.PI/3,30,14,2.2,0.85,1.8,2.5),el(-Math.PI/3,30,14,2.2,0.85,1.8,2.5),el(2*Math.PI/3,28,13,2.0,0.82,1.6,2.3),el(-2*Math.PI/3,28,13,2.0,0.82,1.6,2.3)],noBarrels:false,bdm:1.05,rm:1.08}),
'TriAngle':t=>({barrels:[el(0,46,20,3.3,1.0,2.2,3.3),el(2*Math.PI/3,44,19,3.0,0.95,2.1,3.1),el(-2*Math.PI/3,44,19,3.0,0.95,2.1,3.1)],noBarrels:false,bdm:1.1,rm:1.05}),
'BentHybrid':t=>({barrels:[el(0,54,22,3.8,1.05,2.5,3.8),el(Math.PI,52,20,3.5,1.0,2.3,3.5)],noBarrels:false,bdm:1.2,rm:1.12}),
'TripleTwin':t=>({barrels:[el(0,46,18,3.0,1.05,2.0,3.0,undefined,-10),el(0,46,18,3.0,1.05,2.0,3.0,undefined,10),el(2*Math.PI/3,44,17,2.8,1.0,1.9,2.8,undefined,-10),el(2*Math.PI/3,44,17,2.8,1.0,1.9,2.8,undefined,10),el(-2*Math.PI/3,44,17,2.8,1.0,1.9,2.8,undefined,-10),el(-2*Math.PI/3,44,17,2.8,1.0,1.9,2.8,undefined,10)],noBarrels:false,bdm:1.0,rm:1.08}),
'Destroyer':t=>({barrels:[el(0,46,36,4.5,0.95,3.0,4.2)],noBarrels:false,bdm:1.2,rm:1.2}),
'TwinFlank':t=>({barrels:[el(0,50,24,4.0,1.05,2.6,3.8),el(Math.PI,50,24,4.0,1.05,2.6,3.8)],noBarrels:false,bdm:1.18,rm:1.15}),
'AutoSmasher':t=>({barrels:[],noBarrels:true,bdm:3.2,rm:1.4}),
'Fortress':t=>({barrels:[el(0,44,16,2.8,1.0,2.0,3.0),el(Math.PI/2,44,16,2.8,1.0,2.0,3.0),el(Math.PI,44,16,2.8,1.0,2.0,3.0),el(-Math.PI/2,44,16,2.8,1.0,2.0,3.0),el(Math.PI/4,38,13,2.4,0.95,1.8,2.8),el(3*Math.PI/4,38,13,2.4,0.95,1.8,2.8),el(-3*Math.PI/4,38,13,2.4,0.95,1.8,2.8),el(-Math.PI/4,38,13,2.4,0.95,1.8,2.8)],noBarrels:false,bdm:0.95,rm:1.05}),
'Battleship':t=>({barrels:[el(Math.PI/4,46,19,3.0,1.0,2.1,3.2),el(3*Math.PI/4,46,19,3.0,1.0,2.1,3.2),el(-3*Math.PI/4,46,19,3.0,1.0,2.1,3.2),el(-Math.PI/4,46,19,3.0,1.0,2.1,3.2)],noBarrels:false,bdm:1.1,rm:1.1}),
'Spike':t=>({barrels:[],noBarrels:true,bdm:4.0,rm:1.6}),
'MegaSmasher':t=>({barrels:[el(Math.PI/2,48,22,3.5,0.95,2.2,3.4),el(-Math.PI/2,48,22,3.5,0.95,2.2,3.4)],noBarrels:false,bdm:1.2,rm:1.1}),
'Auto3':t=>({barrels:[el(0,46,18,3.0,1.0,2.1,3.2),el(2*Math.PI/3,44,17,2.8,0.95,2.0,3.0),el(-2*Math.PI/3,44,17,2.8,0.95,2.0,3.0)],noBarrels:false,bdm:1.05,rm:1.08}),
'Blaster':t=>({barrels:[el(0,32,52,2.2,0.58,2.2,5.5)],noBarrels:false,bdm:0.8,rm:0.98}),
'Buster':t=>({barrels:[el(0.10,52,34,2.0,0.65,2.0,4.2),el(-0.10,52,34,2.8,0.65,2.0,4.2)],noBarrels:false,bdm:0.9,rm:1.0}),
'Riot':t=>({barrels:[el(Math.PI/4,32,24,1.8,0.65,1.8,3.5),el(3*Math.PI/4,32,24,1.8,0.65,1.8,3.5),el(-3*Math.PI/4,32,24,1.8,0.65,1.8,3.5),el(-Math.PI/4,32,24,1.8,0.65,1.8,3.5)],noBarrels:false,bdm:0.8,rm:1.0}),
'Colossus':t=>({barrels:[el(0,62,44,6.0,0.40,2.1,6.5)],noBarrels:false,bdm:1.5,rm:1.5}),
'Cruiser':t=>({barrels:[el(0,58,36,5.0,0.46,1.9,5.8)],noBarrels:false,bdm:1.0,rm:1.2}),
'Brawler':t=>({barrels:[el(0,52,26,3.5,0.60,1.5,3.0)],noBarrels:false,bdm:4.5,rm:1.25})
};if(_ovO[tk])return _ovO[tk](t);
          if(t.noBarrels){
            return {barrels:[],noBarrels:true,bdm:2.6,rm:1.38};
          }
          if(br==='sniper'){
            // OVERCHARGE: single ultra-long needle — widest range possible
            return {barrels:[el(0,88,9,4.8,0.44,2.65,3.85)],noBarrels:false,bdm:0.82,rm:0.94};
          }
          if(br==='machine'){
            // SHRAPNEL: 3 ultra-wide short shotgun barrels — point-blank destroyer
            return {barrels:[
              el(0,    32,28,2.8,0.62,0.5,3.5),
              el( 0.22,28,22,2.4,0.58,0.48,3.0),
              el(-0.22,28,22,2.4,0.58,0.48,3.0),
            ],noBarrels:false,bdm:1.0,rm:1.05};
          }
          // flank: COLOSSUS — 4 massive cross barrels, giant slugs
          return {barrels:[
            el(0,         52,22,3.5,1.2,0.58,3.9),
            el(Math.PI/2, 48,20,3.2,1.1,0.56,3.5),
            el(Math.PI,   52,22,3.5,1.2,0.58,3.9),
            el(-Math.PI/2,48,20,3.2,1.1,0.56,3.5),
          ],noBarrels:false,bdm:1.22,rm:1.18};
        }
      },
      {
        suf:'Prime', ru:'Прайм', h:208, bdm:1.42, rm:1.08,
        getLabel:(br)=>({
          sniper:'[Часовой: усиленные стволы + 2 фланговых под 60° + задний — снайперское доминирование]',
          machine:'[Шторм: 8 узких стволов двумя рядами — сплошная стена огня]',
          flank: '[Бастион: оригинал + 5 орудий шестигранником — непреступная крепость]',
        }[br]||'[Арсенал: усиленные оригинальные стволы + боковые и задний орудия]'),
        transform:(t,br,tk)=>{
          const _ovP={
'Booster':t=>({barrels:[el(0,44,11,0.32,1.12,0.88,0.8),el(0.22,42,10,0.3,1.1,0.85,0.76),el(-0.22,42,10,0.3,1.1,0.85,0.76),el(0.44,38,9,0.28,1.06,0.82,0.72),el(-0.44,38,9,0.28,1.06,0.82,0.72),el(Math.PI,32,11,0.3,0.9,0.78,0.75),el(Math.PI+0.35,28,9,0.26,0.88,0.74,0.7),el(Math.PI-0.35,28,9,0.26,0.88,0.74,0.7)],noBarrels:false,bdm:0.95,rm:1.0}),
'OctoTank':t=>({barrels:[el(0,42,10,0.3,1.08,0.84,0.82),el(Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(2*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(3*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(4*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(5*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(Math.PI,42,10,0.3,1.08,0.84,0.82),el(-5*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(-4*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(-3*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(-2*Math.PI/6,40,10,0.3,1.08,0.84,0.82),el(-Math.PI/6,40,10,0.3,1.08,0.84,0.82)],noBarrels:false,bdm:0.8,rm:0.9}),
'GunnerTrapper':t=>({barrels:[el(0,46,8,0.28,1.14,0.86,0.76),el(0.18,43,7,0.26,1.12,0.84,0.74),el(-0.18,43,7,0.26,1.12,0.84,0.74),el(0.36,40,7,0.25,1.1,0.82,0.72),el(Math.PI/2+0.2,34,12,0.45,0.88,0.9,1.0),el(Math.PI/2-0.2,32,11,0.42,0.86,0.88,0.98),el(-Math.PI/2-0.2,34,12,0.45,0.88,0.9,1.0),el(-Math.PI/2+0.2,32,11,0.42,0.86,0.88,0.98)],noBarrels:false,bdm:0.9,rm:0.98}),
'PentaShot':t=>({barrels:[el(0,44,10,0.32,1.12,0.86,0.8),el(0.25,42,9,0.3,1.1,0.84,0.78),el(-0.25,42,9,0.3,1.1,0.84,0.78),el(0.5,38,9,0.28,1.06,0.8,0.74),el(-0.5,38,9,0.28,1.06,0.8,0.74),el(Math.PI+0.3,30,9,0.28,0.88,0.76,0.72),el(Math.PI-0.3,30,9,0.28,0.88,0.76,0.72),el(Math.PI/2,34,10,0.35,0.9,0.82,0.85),el(-Math.PI/2,34,10,0.35,0.9,0.82,0.85)],noBarrels:false,bdm:0.88,rm:0.95}),
'Hurricane':t=>({barrels:[el(0.35,42,11,0.32,1.1,0.85,0.82),el(-0.35,42,11,0.32,1.1,0.85,0.82),el(Math.PI/2+0.35,40,10,0.3,1.06,0.82,0.78),el(-Math.PI/2-0.35,40,10,0.3,1.06,0.82,0.78),el(Math.PI+0.35,38,10,0.3,1.04,0.8,0.76),el(-Math.PI+0.35,38,10,0.3,1.04,0.8,0.76),el(Math.PI+0.1,30,9,0.28,0.88,0.75,0.72),el(Math.PI-0.1,30,9,0.28,0.88,0.75,0.72)],noBarrels:false,bdm:0.88,rm:0.95}),
'MoreGun':t=>({barrels:[el(-0.28,44,8,0.28,1.12,0.84,0.76),el(-0.14,46,8,0.26,1.12,0.84,0.76),el(0,47,8,0.26,1.12,0.84,0.76),el(0.14,46,8,0.26,1.12,0.84,0.76),el(0.28,44,8,0.28,1.12,0.84,0.76),el(-0.35,39,7,0.3,1.06,0.8,0.7),el(-0.18,41,7,0.28,1.06,0.8,0.7),el(0,42,7,0.27,1.06,0.8,0.7),el(0.18,41,7,0.28,1.06,0.8,0.7),el(0.35,39,7,0.3,1.06,0.8,0.7)],noBarrels:false,bdm:0.82,rm:0.9}),
'Spreadshot':t=>({barrels:[el(0,44,9,0.3,1.12,0.85,0.8),el(0.28,41,9,0.28,1.08,0.82,0.76),el(-0.28,41,9,0.28,1.08,0.82,0.76),el(0.56,37,8,0.26,1.04,0.78,0.72),el(-0.56,37,8,0.26,1.04,0.78,0.72),el(0.85,32,8,0.24,1.0,0.74,0.68),el(-0.85,32,8,0.24,1.0,0.74,0.68),el(1.14,26,7,0.22,0.95,0.7,0.64),el(-1.14,26,7,0.22,0.95,0.7,0.64)],noBarrels:false,bdm:0.84,rm:0.9}),
'TriAngle':t=>({barrels:[el(0,44,12,0.38,1.15,0.9,0.88),el(2*Math.PI/3,42,11,0.35,1.1,0.88,0.85),el(-2*Math.PI/3,42,11,0.35,1.1,0.88,0.85),el(Math.PI,40,11,0.35,0.95,0.85,0.82),el(Math.PI+2*Math.PI/3,38,10,0.32,0.92,0.82,0.8),el(Math.PI-2*Math.PI/3,38,10,0.32,0.92,0.82,0.8)],noBarrels:false,bdm:0.95,rm:1.0}),
'BentHybrid':t=>({barrels:[el(0,46,12,0.4,1.15,0.92,0.88),el(0.12,44,11,0.38,1.12,0.9,0.85),el(Math.PI/3+0.1,36,10,0.32,1.0,0.84,0.8),el(-Math.PI/3-0.1,36,10,0.32,1.0,0.84,0.8),el(Math.PI/3-0.1,34,9,0.3,0.98,0.82,0.78),el(-Math.PI/3+0.1,34,9,0.3,0.98,0.82,0.78),el(Math.PI,30,9,0.28,0.88,0.78,0.72)],noBarrels:false,bdm:0.92,rm:0.98}),
'Blaster':t=>({barrels:[el(0,36,16,1.0,0.71,0.98,1.28),el(0.15,31,12,1.0,0.68,0.98,1.0),el(-0.15,31,12,1.0,0.68,0.98,1.0),el(0.30,25,10,1.0,0.64,0.98,0.8),el(-0.30,25,10,1.0,0.64,0.98,0.8),el(0.46,19,8,1.0,0.60,0.98,0.62),el(-0.46,19,8,1.0,0.60,0.98,0.62),el(0.63,13,6,1.0,0.56,0.98,0.48),el(-0.63,13,6,1.0,0.56,0.98,0.48),el(Math.PI+0.2,24,10,1.0,0.7,0.98,0.7),el(Math.PI,26,12,1.0,0.7,0.98,0.85),el(Math.PI-0.2,24,10,1.0,0.7,0.98,0.7)],noBarrels:false,bdm:0.72,rm:1.0}),
'Buster':t=>({barrels:[el(0,50,22,1.0,0.72,1.4,2.3),el(0.19,40,16,1.0,0.70,1.4,1.65),el(-0.19,40,16,1.0,0.70,1.4,1.65),el(Math.PI+0.2,38,14,1.0,0.70,1.3,1.5),el(Math.PI,42,18,1.0,0.70,1.3,1.9),el(Math.PI-0.2,38,14,1.0,0.70,1.3,1.5)],noBarrels:false,bdm:0.85,rm:1.05}),
'Riot':t=>({barrels:[el(0,28,11,1.0,0.7,1.1,0.9),el(0.22,23,9,1.0,0.67,1.1,0.72),el(-0.22,23,9,1.0,0.67,1.1,0.72),el(Math.PI/2,28,11,1.0,0.7,1.1,0.9),el(Math.PI/2+0.22,23,9,1.0,0.67,1.1,0.72),el(Math.PI/2-0.22,23,9,1.0,0.67,1.1,0.72),el(Math.PI,28,11,1.0,0.7,1.1,0.9),el(Math.PI+0.22,23,9,1.0,0.67,1.1,0.72),el(Math.PI-0.22,23,9,1.0,0.67,1.1,0.72),el(-Math.PI/2,28,11,1.0,0.7,1.1,0.9),el(-Math.PI/2+0.22,23,9,1.0,0.67,1.1,0.72),el(-Math.PI/2-0.22,23,9,1.0,0.67,1.1,0.72)],noBarrels:false,bdm:0.72,rm:1.0}),
'Colossus':t=>({barrels:[el(0,58,38,5.0,0.44,1.85,5.0),el(Math.PI,42,22,3.5,0.52,1.5,2.8),el(Math.PI/2,30,14,2.8,0.6,1.2,1.5),el(-Math.PI/2,30,14,2.8,0.6,1.2,1.5)],noBarrels:false,bdm:1.3,rm:1.4}),
'Cruiser':t=>({barrels:[el(0,52,22,3.5,0.55,1.4,2.7),el(Math.PI/2,48,20,3.2,0.54,1.38,2.5),el(Math.PI,52,22,3.5,0.55,1.4,2.7),el(-Math.PI/2,48,20,3.2,0.54,1.38,2.5)],noBarrels:false,bdm:1.0,rm:1.25}),
'Brawler':t=>({barrels:[el(0,50,20,2.8,0.64,1.3,2.1),el(0.38,36,14,2.4,0.60,1.1,1.4),el(-0.38,36,14,2.4,0.60,1.1,1.4)],noBarrels:false,bdm:3.5,rm:1.2})
};if(_ovP[tk])return _ovP[tk](t);
          if(t.noBarrels){
            return {barrels:[
              el(0,        44,13,1.0,1.05,1.15,1.1),
              el( Math.PI/2,42,13,1.0,1.05,1.15,1.1),
              el( Math.PI,  42,12,0.95,1.0,1.1,1.0),
              el(-Math.PI/2,42,13,1.0,1.05,1.15,1.1),
            ],noBarrels:false,bdm:1.1,rm:1.05};
          }
          if(br==='sniper'){
            // SENTINEL: enhanced front + 2 diagonal at 60° + 1 rear — flanking overwatch
            const enh=(t.barrels||[]).map(b=>({...b,
              length:Math.round(b.length*1.2),
              bulletDamageMultiplier:b.bulletDamageMultiplier*1.32}));
            return {barrels:[...enh,
              el( Math.PI/3,  44,10,1.18,0.92,1.1,1.0),
              el(-Math.PI/3,  44,10,1.18,0.92,1.1,1.0),
              el( Math.PI,    34, 9,1.1, 0.85,1.0,0.88),
            ],noBarrels:false,bdm:1.0,rm:1.0};
          }
          if(br==='machine'){
            // BLITZ: 8 narrow forward barrels in double-row — twin-row bullet wall
            return {barrels:[
              el(-0.18,40,8,0.31,1.12,0.88,0.76),
              el(-0.06,42,8,0.29,1.12,0.88,0.76),
              el( 0.06,42,8,0.29,1.12,0.88,0.76),
              el( 0.18,40,8,0.31,1.12,0.88,0.76),
              el(-0.28,35,7,0.33,1.02,0.84,0.7),
              el(-0.10,37,7,0.31,1.02,0.84,0.7),
              el( 0.10,37,7,0.31,1.02,0.84,0.7),
              el( 0.28,35,7,0.33,1.02,0.84,0.7),
            ],noBarrels:false,bdm:0.82,rm:0.97};
          }
          // flank: BASTION — enhanced original + 5 hexagonal ring barrels
          const enh=(t.barrels||[]).map(b=>({...b,
            bulletDamageMultiplier:b.bulletDamageMultiplier*1.28,
            length:Math.round(b.length*1.1), width:Math.round(b.width*1.1)}));
          return {barrels:[...enh,
            el( Math.PI/3,  38,12,1.25,0.95,1.1,1.0),
            el(-Math.PI/3,  38,12,1.25,0.95,1.1,1.0),
            el( 2*Math.PI/3,36,11,1.2, 0.92,1.05,0.95),
            el(-2*Math.PI/3,36,11,1.2, 0.92,1.05,0.95),
            el( Math.PI,    34,10,1.15,0.9, 1.0, 0.9),
          ],noBarrels:false,bdm:1.12,rm:1.02};
        }
      }
    ];

  const _customT3=new Set(["Phantom","Ambusher","Spy","Specter","RamX","Mine","Swarm","Guardian","HunterDrone","Howitzer","Cassette","Mortar","Plasma","EMPTank","DualRailgun","Citadel","Bunker","Tower"]);
  const t3keys=Object.keys(_t).filter(k=>_t[k].requiredLevel===45&&!_customT3.has(k));
    for(const k of t3keys){
      const t=_t[k];
      const _br=_T4BRANCH[(t.upgradesFrom && t.upgradesFrom[0])]||'flank';
      for(let vi=0;vi<3;vi++){
        const v=variants[vi],nk=k+v.suf;
        const tr=v.transform(t,_br,k);
        const extraBdm=tr.bdm||1, extraRm=tr.rm||1;
        _t[nk]={
          name:nk,requiredLevel:60,upgradesFrom:[k],
          color:shiftHue(t.color,v.h),
          description:t.description+' '+v.getLabel(_br),
          barrels:tr.barrels,
          noBarrels:tr.noBarrels||false,
          bodyDamageMultiplier:(t.bodyDamageMultiplier||1)*v.bdm*extraBdm,
          radiusMultiplier:(t.radiusMultiplier||1)*v.rm*extraRm
        };
        W1[nk]=(W1[k]||k)+'·'+v.ru;
      }
    }

  // Tier-4 nodes — bigger radius (r:17 instead of r:9)
  const t3nodes=w0.filter(n=>n.tier===3&&!_customT3.has(n.name));
  for(const p of t3nodes){
    for(let vi=0;vi<3;vi++){
      const nk=p.name+variants[vi].suf;
      w0.push({name:nk,tier:4,x:xl[4],y:p.y+(vi-1)*72,r:19});
      Ty.push([p.name,nk]);
    }
  }

  // ── Custom Tier-4 for Scout & Cannon branches ─────────────────
  var _ct4=[
    {p:"Phantom",name:"Absolute",ru:"\u0410\u0431\u0441\u043e\u043b\u044e\u0442",h:40,desc:"\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0435\u0432\u0438\u0434\u0438\u043c \u0432\u0441\u0435\u0433\u0434\u0430 \u2014 \u0444\u0430\u043d\u0442\u043e\u043c \u0431\u0435\u0437 \u0441\u043b\u0435\u0434\u043e\u0432.",barrels:[el(0,80,7,2.0,0.6,1.9,2.5)]},
    {p:"Phantom",name:"ShadowX",ru:"\u0422\u0435\u043d\u044c-X",h:120,desc:"\u041d\u0435\u0432\u0438\u0434\u0438\u043c + \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \xd71.5 \u2014 \u043c\u043e\u043b\u043d\u0438\u0435\u043d\u043e\u0441\u043d\u0430\u044f \u0442\u0435\u043d\u044c.",barrels:[el(0,70,8,1.6,0.7,2.0,2.0),el(Math.PI,28,9,0.5,0.9,0.9,0.7)]},
    {p:"Phantom",name:"PhantomSniper",ru:"\u0424\u0430\u043d\u0442\u043e\u043c-\u0421\u043d\u0430\u0439\u043f\u0435\u0440",h:200,desc:"\u041d\u0435\u0432\u0438\u0434\u0438\u043c + \u043e\u0434\u0438\u043d \u0432\u044b\u0441\u0442\u0440\u0435\u043b \u0432 \u0433\u043e\u043b\u043e\u0432\u0443 \u2014 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u0430\u044f \u0441\u043c\u0435\u0440\u0442\u044c.",barrels:[el(0,95,7,4.0,0.5,2.5,3.5)]},
    {p:"Ambusher",name:"Killer",ru:"\u0423\u0431\u0438\u0439\u0446\u0430",h:35,desc:"\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u0430\u044f \u0441\u043c\u0435\u0440\u0442\u044c \u043f\u0440\u0438 \u0443\u0434\u0430\u0440\u0435 \u0441\u0437\u0430\u0434\u0438 \u2014 \u0442\u0438\u0445\u0438\u0439 \u0443\u0431\u0438\u0439\u0446\u0430.",barrels:[el(0,72,12,3.0,0.7,1.8,3.5)]},
    {p:"Ambusher",name:"HunterX",ru:"\u041e\u0445\u043e\u0442\u043d\u0438\u043a-X",h:115,desc:"\u0422\u0440\u0438 \u0432\u044b\u0441\u0442\u0440\u0435\u043b\u0430 \u043f\u043e\u0434\u0440\u044f\u0434 \u0438\u0437 \u0437\u0430\u0441\u0430\u0434\u044b \u2014 \u0448\u043a\u0432\u0430\u043b \u0438\u0437 \u0442\u0435\u043d\u0438.",barrels:[el(-0.15,65,10,1.8,0.75,1.6,2.5),el(0,68,13,2.0,0.7,1.7,3.0),el(0.15,65,10,1.8,0.75,1.6,2.5)]},
    {p:"Ambusher",name:"Chameleon",ru:"\u0425\u0430\u043c\u0435\u043b\u0435\u043e\u043d",h:195,desc:"\u041a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0446\u0432\u0435\u0442 NPC \u0440\u044f\u0434\u043e\u043c \u2014 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0430\u0441\u043a\u0438\u0440\u043e\u0432\u043a\u0430.",barrels:[el(0,60,14,1.6,0.8,1.5,2.5),el(0.3,45,10,1.2,0.85,1.3,1.8),el(-0.3,45,10,1.2,0.85,1.3,1.8)]},
    {p:"Spy",name:"Infiltrator",ru:"\u0418\u043d\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0442\u043e\u0440",h:40,desc:"\u041d\u0435 \u0432\u0438\u0434\u0435\u043d \u043d\u0430 \u043c\u0438\u043d\u0438\u043a\u0430\u0440\u0442\u0435 \u2014 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u044b\u0439 \u043b\u0430\u0437\u0443\u0442\u0447\u0438\u043a.",barrels:[el(0,58,11,1.5,0.85,1.5,1.6),el(Math.PI/2,35,9,1.0,0.8,1.2,1.0),el(-Math.PI/2,35,9,1.0,0.8,1.2,1.0)]},
    {p:"Spy",name:"Saboteur",ru:"\u0414\u0438\u0432\u0435\u0440\u0441\u0430\u043d\u0442",h:130,desc:"\u0412\u0437\u0440\u044b\u0432 \u043f\u0440\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u0441 NPC \u2014 \u0436\u0438\u0432\u0430\u044f \u0431\u043e\u043c\u0431\u0430.",bdm:2.5,barrels:[el(0,50,18,1.4,0.9,1.4,2.0),el(0.5,38,12,1.1,0.85,1.3,1.5),el(-0.5,38,12,1.1,0.85,1.3,1.5)]},
    {p:"Spy",name:"Double",ru:"\u0414\u0432\u043e\u0439\u043d\u0438\u043a",h:210,desc:"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043b\u043e\u0436\u043d\u0443\u044e \u043a\u043e\u043f\u0438\u044e \u2014 \u043e\u0431\u043c\u0430\u043d \u0432\u0440\u0430\u0433\u043e\u0432.",barrels:[el(-0.15,52,12,1.3,0.9,1.4,1.4),el(0.15,52,12,1.3,0.9,1.4,1.4),el(Math.PI,42,10,0.9,0.8,1.1,1.0)]},
    {p:"Specter",name:"Invulnerable",ru:"\u041d\u0435\u0443\u044f\u0437\u0432\u0438\u043c\u044b\u0439",h:40,desc:"3 \u0441\u0435\u043a \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0438\u043c\u043c\u0443\u043d\u0438\u0442\u0435\u0442\u0430 \u0440\u0430\u0437 \u0432 10 \u0441\u0435\u043a.",rm:1.2,bdm:0.8,barrels:[el(0,58,12,1.5,0.85,1.4,1.6),el(-0.2,54,10,1.3,0.8,1.3,1.4)]},
    {p:"Specter",name:"Ether",ru:"\u042d\u0444\u0438\u0440",h:130,desc:"HP \u043d\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u0441\u044f \u0432 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u2014 \u0432\u0435\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u0440\u0430\u043a.",barrels:[el(0,60,11,1.6,0.8,1.5,1.7),el(-0.15,55,9,1.3,0.75,1.4,1.4),el(0.15,55,9,1.3,0.75,1.4,1.4)]},
    {p:"Specter",name:"Mirage",ru:"\u041c\u0438\u0440\u0430\u0436",h:210,desc:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 3 \u043b\u043e\u0436\u043d\u044b\u0445 \u043a\u043e\u043f\u0438\u0438 \u2014 \u043e\u0431\u043c\u0430\u043d \u0438 \u0440\u0430\u0441\u0441\u0435\u0438\u0432\u0430\u043d\u0438\u0435.",barrels:[el(-0.3,52,10,1.3,0.85,1.3,1.4),el(0,56,12,1.5,0.85,1.4,1.6),el(0.3,52,10,1.3,0.85,1.3,1.4)]},
    {p:"RamX",name:"Comet",ru:"\u041a\u043e\u043c\u0435\u0442\u0430",h:40,desc:"\u041e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u0441\u043b\u0435\u0434 \u043f\u0440\u0438 \u0442\u0430\u0440\u0430\u043d\u0435 \u2014 \u0445\u0432\u043e\u0441\u0442\u0430\u0442\u0430\u044f \u043a\u043e\u043c\u0435\u0442\u0430.",bdm:1.5,rm:1.1,barrels:[el(Math.PI,40,16,0.6,1.2,1.1,0.9),el(Math.PI+0.3,36,12,0.5,1.1,1.0,0.8),el(Math.PI-0.3,36,12,0.5,1.1,1.0,0.8)]},
    {p:"RamX",name:"Bolide",ru:"\u0411\u043e\u043b\u0438\u0434",h:120,desc:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0442\u0430\u0440\u0430\u043d\u0435 \xd73 \u043d\u0430 1 \u0441\u0435\u043a \u2014 \u043c\u0435\u0442\u0435\u043e\u0440\u0438\u0442.",noBarrels:true,bdm:2.0,rm:1.15,barrels:[]},
    {p:"RamX",name:"Proton",ru:"\u041f\u0440\u043e\u0442\u043e\u043d",h:200,desc:"\u0422\u0430\u0440\u0430\u043d \u043e\u0442\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0443\u043b\u0438 \u043d\u0430\u0437\u0430\u0434 \u2014 \u0441\u0438\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435.",noBarrels:true,bdm:1.8,rm:1.25,barrels:[]},
    {p:"Mine",name:"Minefield",ru:"\u041c\u0438\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",h:40,desc:"5 \u043c\u0438\u043d \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u044b \u2014 \u0441\u043c\u0435\u0440\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435.",bdm:1.2,barrels:[el(Math.PI,40,18,0.6,1.1,1.3,1.2),el(Math.PI+0.4,38,14,0.55,1.0,1.2,1.0),el(Math.PI-0.4,38,14,0.55,1.0,1.2,1.0)]},
    {p:"Mine",name:"SmartMine",ru:"\u0423\u043c\u043d\u0430\u044f \u041c\u0438\u043d\u0430",h:130,desc:"\u041c\u0438\u043d\u0430 \u043f\u0440\u0435\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u0440\u0430\u0433\u0430 \u2014 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u0440\u043f\u0435\u0434\u0430.",isHoming:true,barrels:[el(Math.PI,45,16,0.7,1.2,1.4,1.5),el(Math.PI+0.25,40,12,0.6,1.1,1.3,1.2),el(Math.PI-0.25,40,12,0.6,1.1,1.3,1.2)]},
    {p:"Mine",name:"Nuclear",ru:"\u0422\u0435\u0440\u043c\u043e\u044f\u0434\u0435\u0440\u043d\u0430\u044f",h:210,desc:"\u041e\u0434\u043d\u0430 \u043c\u0438\u043d\u0430, \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 \u0440\u0430\u0434\u0438\u0443\u0441 \u2014 \u044f\u0434\u0435\u0440\u043d\u044b\u0439 \u0432\u0437\u0440\u044b\u0432.",bdm:2.5,barrels:[el(Math.PI,45,28,0.5,1.5,1.2,3.5)]},
    {p:"Swarm",name:"Hive",ru:"\u0423\u043b\u0435\u0439",h:40,desc:"8 \u0434\u0440\u043e\u043d\u043e\u0432, \u0432\u043e\u0437\u0440\u043e\u0436\u0434\u0430\u044e\u0442\u0441\u044f \u2014 \u0436\u0438\u0432\u043e\u0439 \u0440\u043e\u0439.",isDroneShooter:true,rm:1.15,barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI*2/8,28,6,0.5,1.4,1.1,0.6);})},
    {p:"Swarm",name:"NanoSwarm",ru:"\u041d\u0430\u043d\u043e\u0440\u043e\u0439",h:130,desc:"12 \u043c\u0435\u043b\u043a\u0438\u0445 \u0431\u044b\u0441\u0442\u0440\u044b\u0445 \u0434\u0440\u043e\u043d\u043e\u0432 \u2014 \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u044b\u0439 \u0440\u043e\u0439.",isDroneShooter:true,barrels:[0,1,2,3,4,5,6,7,8,9,10,11].map(function(i){return el(i*Math.PI*2/12,24,5,0.4,1.6,1.3,0.5);})},
    {p:"Swarm",name:"Queen",ru:"\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430",h:210,desc:"1 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 + 6 \u043c\u0430\u043b\u044b\u0445 \u0434\u0440\u043e\u043d\u043e\u0432 \u2014 \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0430 \u0440\u043e\u044f.",isDroneShooter:true,barrels:[el(0,38,14,1.2,1.1,1.0,1.0)].concat([1,2,3,4,5,6].map(function(i){return el(i*Math.PI*2/6,25,6,0.4,1.3,1.1,0.55);}))},
    {p:"Guardian",name:"Shielder",ru:"\u0429\u0438\u0442\u043e\u0432\u0438\u043a",h:40,desc:"\u0414\u0440\u043e\u043d\u044b \u043e\u0440\u0431\u0438\u0442\u0438\u0440\u0443\u044e\u0442 \u2014 \u0436\u0438\u0432\u0430\u044f \u0431\u0440\u043e\u043d\u044f.",isDroneShooter:true,rm:1.2,barrels:[0,1,2,3,4].map(function(i){return el(i*Math.PI*2/5,30,10,0.7,1.3,0.9,0.75);})},
    {p:"Guardian",name:"Bodyguard",ru:"\u0422\u0435\u043b\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c",h:130,desc:"\u0414\u0440\u043e\u043d\u044b \u043e\u0440\u0431\u0438\u0442\u0438\u0440\u0443\u044e\u0442 \u0442\u0430\u043d\u043a \u2014 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u044d\u0441\u043a\u043e\u0440\u0442.",isDroneShooter:true,rm:1.15,barrels:[0,1,2,3].map(function(i){return el(i*Math.PI/2,32,9,0.75,1.2,0.95,0.7);})},
    {p:"Guardian",name:"Armor",ru:"\u0411\u0440\u043e\u043d\u044f",h:210,desc:"\u0414\u0440\u043e\u043d\u044b \u043e\u0440\u0431\u0438\u0442\u0438\u0440\u0443\u044e\u0442 \u0432\u043e\u043a\u0440\u0443\u0433 \u2014 \u0436\u0438\u0432\u0430\u044f \u043a\u0440\u0435\u043f\u043e\u0441\u0442\u044c.",isDroneShooter:true,rm:1.25,bdm:0.6,barrels:[0,1,2,3,4,5].map(function(i){return el(i*Math.PI/3,28,10,0.7,1.1,0.85,0.8);})},
    {p:"HunterDrone",name:"AssassinDrone",ru:"\u0410\u0441\u0441\u0430\u0441\u0438\u043d-\u0414\u0440\u043e\u043d",h:40,desc:"\u0414\u0440\u043e\u043d\u044b \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u044b \u2014 \u043d\u0435\u0437\u0440\u0438\u043c\u044b\u0435 \u0443\u0431\u0438\u0439\u0446\u044b.",isDroneShooter:true,isInvis:true,barrels:[el(-0.15,58,8,1.3,0.9,1.6,1.2),el(0,64,9,1.6,0.85,1.5,1.5),el(0.15,58,8,1.3,0.9,1.6,1.2)]},
    {p:"HunterDrone",name:"SuperHunter",ru:"\u0421\u0443\u043f\u0435\u0440\u043e\u0445\u043e\u0442\u043d\u0438\u043a",h:130,desc:"\u0414\u0440\u043e\u043d\u044b \u0432\u0437\u0440\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u0446\u0435\u043b\u0438 \u2014 \u0441\u0443\u0438\u0446\u0438\u0434\u0430\u043b\u044c\u043d\u0430\u044f \u0430\u0442\u0430\u043a\u0430.",isDroneShooter:true,bdm:1.5,barrels:[el(-0.2,55,10,1.4,0.9,1.5,1.5),el(0,60,12,1.8,0.85,1.4,2.0),el(0.2,55,10,1.4,0.9,1.5,1.5)]},
    {p:"HunterDrone",name:"DiversionSwarm",ru:"\u0414\u0438\u0432\u0435\u0440\u0441\u0430\u043d\u0442-\u0420\u043e\u0439",h:200,desc:"\u0414\u0440\u043e\u043d\u044b \u043e\u0440\u0431\u0438\u0442\u0438\u0440\u0443\u044e\u0442 + \u0430\u0442\u0430\u043a\u0443\u044e\u0442 \u2014 \u0440\u043e\u0435\u0432\u043e\u0439 \u0440\u043e\u0439.",isDroneShooter:true,barrels:[el(-0.25,52,10,1.3,0.9,1.4,1.4),el(0,56,11,1.6,0.85,1.4,1.8),el(0.25,52,10,1.3,0.9,1.4,1.4),el(Math.PI,38,9,0.8,0.85,1.1,0.9)]},
    {p:"Howitzer",name:"MegaHowitzer",ru:"\u041c\u0435\u0433\u0430-\u0413\u0430\u0443\u0431\u0438\u0446\u0430",h:40,desc:"\u0422\u0440\u043e\u0439\u043d\u043e\u0439 \u0432\u0437\u0440\u044b\u0432, \u0437\u0430\u043c\u0435\u0434\u043b\u044f\u0435\u0442 \u2014 \u0430\u043f\u043e\u0433\u0435\u0439 \u0430\u0440\u0442\u0438\u043b\u043b\u0435\u0440\u0438\u0438.",bdm:1.4,barrels:[el(0,52,26,0.4,1.6,0.65,3.5),el(0.45,32,14,0.65,1.2,0.95,1.2),el(-0.45,32,14,0.65,1.2,0.95,1.2)]},
    {p:"Howitzer",name:"Shrapnel",ru:"\u0428\u0440\u0430\u043f\u043d\u0435\u043b\u044c",h:130,desc:"\u0412\u0437\u0440\u044b\u0432 \u0434\u0430\u0451\u0442 8 \u043e\u0441\u043a\u043e\u043b\u043a\u043e\u0432 \u2014 \u0441\u043c\u0435\u0440\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0435\u0440.",barrels:[el(0,50,20,0.42,1.4,0.7,2.6),el(0.4,28,10,0.7,1.2,0.95,0.9),el(-0.4,28,10,0.7,1.2,0.95,0.9),el(0.8,26,9,0.65,1.1,0.9,0.8),el(-0.8,26,9,0.65,1.1,0.9,0.8)]},
    {p:"Howitzer",name:"Core",ru:"\u042f\u0434\u0440\u043e",h:210,desc:"\u041f\u0443\u043b\u044f \u043b\u0435\u0442\u0438\u0442 \u0441\u043a\u0432\u043e\u0437\u044c \u0432\u0441\u0435\u0445 \u2014 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u043f\u0440\u043e\u0431\u0438\u0442\u0438\u0435.",bdm:1.2,barrels:[el(0,55,24,0.42,1.5,0.68,3.2),el(0.5,28,11,0.7,1.2,0.95,1.0),el(-0.5,28,11,0.7,1.2,0.95,1.0)]},
    {p:"Cassette",name:"Cluster",ru:"\u041a\u043b\u0430\u0441\u0442\u0435\u0440",h:40,desc:"10 \u043e\u0441\u043a\u043e\u043b\u043a\u043e\u0432, \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0440\u0430\u0437\u043b\u0451\u0442 \u2014 \u043a\u0430\u0441\u0441\u0435\u0442\u043d\u044b\u0439 \u0432\u0437\u0440\u044b\u0432.",barrels:[el(0,52,18,0.38,1.4,0.75,2.5),el(0.4,30,10,0.8,0.95,0.8,0.75),el(-0.4,30,10,0.8,0.95,0.8,0.75),el(0.7,28,9,0.75,0.9,0.75,0.7),el(-0.7,28,9,0.75,0.9,0.75,0.7)]},
    {p:"Cassette",name:"Thermite",ru:"\u0422\u0435\u0440\u043c\u0438\u0442",h:130,desc:"\u041e\u0441\u043a\u043e\u043b\u043a\u0438 \u043f\u043e\u0434\u0436\u0438\u0433\u0430\u044e\u0442 \u2014 \u0443\u0440\u043e\u043d 3 \u0441\u0435\u043a.",bdm:1.3,barrels:[el(0,52,18,0.4,1.5,0.75,2.6),el(0.5,28,11,0.85,1.0,0.8,0.8),el(-0.5,28,11,0.85,1.0,0.8,0.8)]},
    {p:"Cassette",name:"ShotgunX",ru:"\u0414\u0440\u043e\u0431\u043e\u0432\u0438\u043a-X",h:210,desc:"\u041e\u0434\u0438\u043d \u0437\u0430\u043b\u043f \u2014 \u043a\u043e\u043d\u0443\u0441 \u0438\u0437 15 \u043f\u0443\u043b\u044c.",barrels:[el(-0.6,45,11,0.9,0.9,0.75,0.8),el(-0.4,48,12,0.95,0.95,0.75,0.85),el(-0.2,50,13,1.0,1.0,0.75,0.9),el(0,52,14,1.0,1.0,0.75,0.9),el(0.2,50,13,1.0,1.0,0.75,0.9),el(0.4,48,12,0.95,0.95,0.75,0.85),el(0.6,45,11,0.9,0.9,0.75,0.8)]},
    {p:"Mortar",name:"Rocket",ru:"\u0420\u0430\u043a\u0435\u0442\u043d\u0438\u0446\u0430",h:40,desc:"\u0422\u0440\u0438 \u0440\u0430\u043a\u0435\u0442\u044b \u0441 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u2014 \u0440\u0430\u043a\u0435\u0442\u043d\u044b\u0439 \u0437\u0430\u043b\u043f.",bdm:1.2,barrels:[el(0,58,20,0.42,1.6,0.68,2.8),el(0.35,52,16,0.4,1.4,0.65,2.4),el(-0.35,52,16,0.4,1.4,0.65,2.4)]},
    {p:"Mortar",name:"Drum",ru:"\u0411\u0430\u0440\u0430\u0431\u0430\u043d",h:130,desc:"4 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u043b\u043f\u0430 \u2014 \u0431\u0430\u0440\u0430\u0431\u0430\u043d\u043d\u044b\u0439 \u043e\u0433\u043e\u043d\u044c.",barrels:[el(0,60,18,0.4,1.5,0.68,2.8),el(0.2,56,16,0.42,1.45,0.66,2.5),el(-0.2,56,16,0.42,1.45,0.66,2.5),el(0,50,14,0.45,1.4,0.62,2.2)]},
    {p:"Mortar",name:"Storm",ru:"\u0428\u0442\u043e\u0440\u043c",h:210,desc:"6 \u0441\u043d\u0430\u0440\u044f\u0434\u043e\u0432 \u043f\u043e \u0441\u0435\u0442\u043a\u0435 \u2014 \u0448\u0442\u043e\u0440\u043c \u0440\u0430\u0437\u0440\u0443\u0448\u0435\u043d\u0438\u044f.",barrels:[el(-0.4,50,16,0.4,1.4,0.65,2.4),el(-0.2,54,18,0.42,1.45,0.67,2.6),el(0,58,20,0.44,1.5,0.7,2.8),el(0.2,54,18,0.42,1.45,0.67,2.6),el(0.4,50,16,0.4,1.4,0.65,2.4)]},
    {p:"Plasma",name:"AnnihilatorX",ru:"\u0410\u043d\u043d\u0438\u0433\u0438\u043b\u044f\u0442\u043e\u0440-X",h:40,desc:"\u041b\u0443\u0447 + \u0432\u0437\u0440\u044b\u0432 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u2014 \u043f\u043e\u043b\u043d\u043e\u0435 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435.",bdm:1.3,barrels:[el(0,95,7,3.0,0.6,2.5,2.2),el(Math.PI/3,35,12,0.8,1.0,1.0,1.2),el(-Math.PI/3,35,12,0.8,1.0,1.0,1.2)]},
    {p:"Plasma",name:"LaserX",ru:"\u041b\u0430\u0437\u0435\u0440",h:120,desc:"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0439 \u043b\u0443\u0447 \u043f\u043e\u043a\u0430 \u0437\u0430\u0436\u0430\u0442 \u2014 \u043f\u043b\u0430\u0437\u043c\u0435\u043d\u043d\u044b\u0439 \u043b\u0430\u0437\u0435\u0440.",barrels:[el(0,88,8,2.2,0.68,2.2,2.0),el(0.1,85,7,2.0,0.65,2.0,1.8)]},
    {p:"Plasma",name:"PhaseBeam",ru:"\u0424\u0430\u0437\u043e\u0432\u044b\u0439 \u041b\u0443\u0447",h:200,desc:"\u041b\u0443\u0447 \u043e\u0433\u0438\u0431\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u0443\u044e \u0446\u0435\u043b\u044c \u2014 \u0444\u0430\u0437\u043e\u0432\u044b\u0439 \u0432\u044b\u0441\u0442\u0440\u0435\u043b.",barrels:[el(-0.15,92,7,2.5,0.63,2.4,2.0),el(0,90,7,2.5,0.63,2.5,2.0),el(0.15,92,7,2.5,0.63,2.4,2.0)]},
    {p:"EMPTank",name:"StormEMP",ru:"\u0428\u0442\u043e\u0440\u043c \u042d\u041c\u041f",h:40,desc:"\u041f\u043b\u043e\u0449\u0430\u0434\u043d\u0430\u044f \u0432\u043e\u043b\u043d\u0430 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f \u2014 \u042d\u041c\u041f-\u0448\u0442\u043e\u0440\u043c.",barrels:[el(0,68,15,1.8,0.62,1.7,2.5),el(0.4,45,12,1.2,0.8,1.3,1.5),el(-0.4,45,12,1.2,0.8,1.3,1.5)]},
    {p:"EMPTank",name:"Neutron",ru:"\u041d\u0435\u0439\u0442\u0440\u043e\u043d",h:130,desc:"\u0412\u0440\u0430\u0433 \u0442\u0435\u0440\u044f\u0435\u0442 \u0443\u0440\u043e\u043d \u043d\u0430 4 \u0441\u0435\u043a \u2014 \u043d\u0435\u0439\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0438\u043c\u043f\u0443\u043b\u044c\u0441.",barrels:[el(0,72,11,2.2,0.58,1.9,2.3),el(0.25,50,10,1.4,0.75,1.5,1.6),el(-0.25,50,10,1.4,0.75,1.5,1.6)]},
    {p:"EMPTank",name:"Collider",ru:"\u041a\u043e\u043b\u043b\u0430\u0439\u0434\u0435\u0440",h:200,desc:"\u0414\u0432\u0430 \u043b\u0443\u0447\u0430 \u0441\u0445\u043b\u043e\u043f\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u043e\u0447\u043a\u0435 \u2014 \u043a\u043e\u043b\u043b\u0430\u0439\u0434\u0435\u0440\u043d\u044b\u0439 \u0443\u0434\u0430\u0440.",barrels:[el(-0.2,72,11,2.0,0.6,1.8,2.2),el(0.2,72,11,2.0,0.6,1.8,2.2)]},
    {p:"DualRailgun",name:"TripleRailgun",ru:"\u0422\u0440\u043e\u0439\u043d\u043e\u0439 \u0420\u0435\u0439\u043b\u0433\u0430\u043d",h:40,desc:"\u0422\u0440\u0438 \u043b\u0443\u0447\u0430 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u2014 \u0442\u0440\u043e\u0439\u043d\u0430\u044f \u0430\u0442\u0430\u043a\u0430.",barrels:[el(-0.12,80,7,2.0,0.65,2.0,1.8),el(0,82,7,2.1,0.65,2.0,1.9),el(0.12,80,7,2.0,0.65,2.0,1.8)]},
    {p:"DualRailgun",name:"Fork",ru:"\u0412\u0438\u043b\u043a\u0430",h:130,desc:"\u0414\u0432\u0430 \u043b\u0443\u0447\u0430 \u0440\u0430\u0441\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0443\u0433\u043b\u043e\u043c 30\xb0 \u2014 \u0440\u0430\u0437\u0434\u0432\u043e\u0435\u043d\u0438\u0435.",barrels:[el(-0.26,82,7,2.2,0.63,2.1,1.9),el(0.26,82,7,2.2,0.63,2.1,1.9)]},
    {p:"DualRailgun",name:"Crossfire",ru:"\u041f\u0435\u0440\u0435\u043a\u0440\u0451\u0441\u0442\u043e\u043a",h:200,desc:"X-\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0439 \u0437\u0430\u043b\u043f \u0432 4 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u2014 \u043f\u0435\u0440\u0435\u043a\u0440\u0451\u0441\u0442\u043d\u044b\u0439 \u043e\u0433\u043e\u043d\u044c.",barrels:[el(0,80,7,1.8,0.65,2.0,1.8),el(Math.PI/2,80,7,1.8,0.65,2.0,1.8),el(Math.PI,80,7,1.8,0.65,2.0,1.8),el(-Math.PI/2,80,7,1.8,0.65,2.0,1.8)]},
    {p:"Citadel",name:"FortressX",ru:"\u041a\u0440\u0435\u043f\u043e\u0441\u0442\u044c-X",h:40,desc:"8 \u0441\u0442\u0432\u043e\u043b\u043e\u0432 + \u0449\u0438\u0442 \u0441\u043f\u0435\u0440\u0435\u0434\u0438 \u2014 \u043d\u0435\u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043d\u0430\u044f \u043a\u0440\u0435\u043f\u043e\u0441\u0442\u044c.",rm:1.1,barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI/4,40,13,1.1,0.88,1.05,1.15);})},
    {p:"Citadel",name:"Volcano",ru:"\u0412\u0443\u043b\u043a\u0430\u043d",h:120,desc:"\u0425\u0430\u043e\u0442\u0438\u0447\u043d\u044b\u0439 \u0448\u043a\u0432\u0430\u043b \u0438\u0437 10 \u0441\u0442\u0432\u043e\u043b\u043e\u0432 \u2014 \u043e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u0432\u0443\u043b\u043a\u0430\u043d.",rm:1.15,barrels:[0,1,2,3,4,5,6,7,8,9].map(function(i){return el(i*Math.PI*2/10,36,11,0.9,0.9,1.0,1.0);})},
    {p:"Citadel",name:"Fort",ru:"\u0424\u043e\u0440\u0442",h:200,desc:"4 \u0442\u044f\u0436\u0451\u043b\u044b\u0445 + 4 \u043b\u0451\u0433\u043a\u0438\u0445 \u0441\u0442\u0432\u043e\u043b\u0430 \u2014 \u0441\u043c\u0435\u0448\u0430\u043d\u043d\u044b\u0439 \u0444\u043e\u0440\u0442.",rm:1.1,barrels:[el(0,45,18,1.4,0.85,1.0,1.4),el(Math.PI/2,45,18,1.4,0.85,1.0,1.4),el(Math.PI,45,18,1.4,0.85,1.0,1.4),el(-Math.PI/2,45,18,1.4,0.85,1.0,1.4),el(Math.PI/4,34,11,0.8,0.9,1.0,0.9),el(3*Math.PI/4,34,11,0.8,0.9,1.0,0.9),el(-3*Math.PI/4,34,11,0.8,0.9,1.0,0.9),el(-Math.PI/4,34,11,0.8,0.9,1.0,0.9)]},
    {p:"Bunker",name:"Destroyer2",ru:"\u0420\u0430\u0437\u0440\u0443\u0448\u0438\u0442\u0435\u043b\u044c",h:40,desc:"\u041e\u0434\u0438\u043d \u0441\u0442\u0432\u043e\u043b \u2014 \u043f\u0443\u043b\u044f = \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430 HP \u0432\u0440\u0430\u0433\u0430.",bdm:1.5,rm:1.1,barrels:[el(0,55,32,0.35,1.8,0.62,5.0)]},
    {p:"Bunker",name:"Siege2",ru:"\u041e\u0441\u0430\u0434\u0430",h:130,desc:"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0439 \u043f\u043e\u0442\u043e\u043a \u0438\u0437 3 \u0441\u0442\u0432\u043e\u043b\u043e\u0432 \u2014 \u043e\u0441\u0430\u0434\u043d\u044b\u0439 \u043e\u0433\u043e\u043d\u044c.",rm:1.1,barrels:[el(-0.2,52,20,0.35,1.6,0.65,3.2),el(0,55,22,0.32,1.6,0.63,3.5),el(0.2,52,20,0.35,1.6,0.65,3.2)]},
    {p:"Bunker",name:"Armada",ru:"\u0410\u0440\u043c\u0430\u0434\u0430",h:200,desc:"5 \u0441\u0442\u0432\u043e\u043b\u043e\u0432 \u2014 \u043e\u0442\u0434\u0430\u0447\u0430 \u0442\u043e\u043b\u043a\u0430\u0435\u0442 \u043d\u0430\u0437\u0430\u0434.",rm:1.15,barrels:[el(-0.4,48,18,0.38,1.5,0.65,3.0),el(-0.2,52,20,0.36,1.55,0.64,3.2),el(0,54,22,0.34,1.6,0.63,3.5),el(0.2,52,20,0.36,1.55,0.64,3.2),el(0.4,48,18,0.38,1.5,0.65,3.0)]},
    {p:"Tower",name:"Pulsar",ru:"\u041f\u0443\u043b\u044c\u0441\u0430\u0440",h:40,desc:"\u0421\u043f\u0443\u0442\u043d\u0438\u043a\u0438 \u0432\u0437\u0440\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043a\u0430\u0441\u0430\u043d\u0438\u0438 \u2014 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u043c\u0438\u043d\u044b.",bdm:1.3,rm:1.1,barrels:[el(0,38,12,1.1,1.1,1.1,1.2),el(2.09,38,12,1.1,1.1,1.1,1.2),el(-2.09,38,12,1.1,1.1,1.1,1.2)]},
    {p:"Tower",name:"Vortex",ru:"\u0412\u0438\u0445\u0440\u044c",h:130,desc:"5 \u0441\u043f\u0443\u0442\u043d\u0438\u043a\u043e\u0432 + \u0441\u0430\u043c\u043e\u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u2014 \u0432\u0438\u0445\u0440\u044c \u0441\u043c\u0435\u0440\u0442\u0438.",rm:1.15,isHoming:true,barrels:[0,1,2,3,4].map(function(i){return el(i*Math.PI*2/5,36,11,1.0,1.1,1.1,1.0);})},
    {p:"Tower",name:"Saturn",ru:"\u0421\u0430\u0442\u0443\u0440\u043d",h:200,desc:"\u041a\u043e\u043b\u044c\u0446\u043e \u0438\u0437 8 \u0449\u0438\u0442\u043e\u0432-\u0441\u043d\u0430\u0440\u044f\u0434\u043e\u0432 \u2014 \u043f\u043b\u0430\u043d\u0435\u0442\u0430\u0440\u043d\u0430\u044f \u0437\u0430\u0449\u0438\u0442\u0430.",rm:1.2,bdm:0.8,barrels:[0,1,2,3,4,5,6,7].map(function(i){return el(i*Math.PI/4,32,10,0.85,1.0,0.9,1.1);})}
  ];
  for(var _cti=0;_cti<_ct4.length;_cti++){
    var _ce=_ct4[_cti],_pt=_t[_ce.p];
    if(!_pt)continue;
    _t[_ce.name]={
      name:_ce.name,requiredLevel:60,upgradesFrom:[_ce.p],
      color:shiftHue(_pt.color,_ce.h),
      description:_ce.desc,
      barrels:_ce.barrels||[],
      noBarrels:_ce.noBarrels||false,
      bodyDamageMultiplier:(_pt.bodyDamageMultiplier||1)*(_ce.bdm||1),
      radiusMultiplier:(_pt.radiusMultiplier||1)*(_ce.rm||1),
      isHoming:!!_ce.isHoming,
      isInvis:!!_ce.isInvis
    };
    W1[_ce.name]=_ce.ru;
  }
  var _ct4parents=w0.filter(function(n){return _customT3.has(n.name);});
  for(var _ci=0;_ci<_ct4parents.length;_ci++){
    var _cp=_ct4parents[_ci];
    var _childList=_ct4.filter(function(e){return e.p===_cp.name;});
    for(var _cj=0;_cj<_childList.length;_cj++){
      var _cch=_childList[_cj];
      w0.push({name:_cch.name,tier:4,x:xl[4],y:_cp.y+(_cj-1)*80,r:28});
      Ty.push([_cp.name,_cch.name]);
    }
  }
})();
  ;(function patchTier3(){
    // Override the most same-looking tier-3 tanks with distinct barrel geometry.
    // Goal: every tank should look and feel different from its branch siblings.

    // OctoTank: was 8 evenly-spaced barrels (looks same as Fortress).
    // New: 4 directions × DOUBLE barrel — "twin-cannon cross" look.
    if(_t['OctoTank']){
      _t['OctoTank'].barrels=[
        el(0,          44,14,0.72,1.12,0.92,0.92,undefined,-6), el(0,          40,12,0.78,1.02,0.86,0.82,undefined,6),
        el(Math.PI/2,  44,14,0.72,1.12,0.92,0.92,undefined,-6), el(Math.PI/2,  40,12,0.78,1.02,0.86,0.82,undefined,6),
        el(Math.PI,    44,14,0.72,1.12,0.92,0.92,undefined,-6), el(Math.PI,    40,12,0.78,1.02,0.86,0.82,undefined,6),
        el(-Math.PI/2, 44,14,0.72,1.12,0.92,0.92,undefined,-6), el(-Math.PI/2, 40,12,0.78,1.02,0.86,0.82,undefined,6),
      ];
      _t['OctoTank'].description='4 направления с двойными стволами — синхронный огонь крестом.';
    }

    // Fortress: was 6 uniform barrels (boring). New: 3 long + 3 short alternating — star pattern.
    if(_t['Fortress']){
      _t['Fortress'].barrels=[
        el(0,             52,15,0.78,1.0,1.0,1.02),
        el(Math.PI/3,     30,12,0.62,0.96,0.94,0.85),
        el(2*Math.PI/3,   52,15,0.78,1.0,1.0,1.02),
        el(Math.PI,       30,12,0.62,0.96,0.94,0.85),
        el(4*Math.PI/3,   52,15,0.78,1.0,1.0,1.02),
        el(5*Math.PI/3,   30,12,0.62,0.96,0.94,0.85),
      ];
      _t['Fortress'].description='Три длинных + три коротких через 60° — звезда огня по кругу.';
    }

    // Battleship: was 4 fat cannon-style barrels (similar to Destroyer-style).
    // New: 4 wide torpedo tubes in fan — naval broadside fantasy.
    if(_t['Battleship']){
      _t['Battleship'].barrels=[
        el(-0.52, 38,20,1.18,0.96,1.32,1.12),
        el(-0.18, 46,22,1.38,1.02,1.42,1.32),
        el( 0.18, 46,22,1.38,1.02,1.42,1.32),
        el( 0.52, 38,20,1.18,0.96,1.32,1.12),
      ];
      _t['Battleship'].description='Четыре торпедных трубы широким конусом — залп флагмана.';
    }

    // Spreadshot: was 7 barrels in wide fan (same as PentaShot but more).
    // New: 5 centre + 2 extreme side barrels (≈90°) — 270° coverage, totally different look.
    if(_t['Spreadshot']){
      _t['Spreadshot'].barrels=[
        el(-0.22, 44,11,0.68,1.12,0.88,0.92),
        el(-0.08, 46,12,0.65,1.12,0.90,1.02),
        el(0,     48,13,0.62,1.12,0.92,1.12),
        el( 0.08, 46,12,0.65,1.12,0.90,1.02),
        el( 0.22, 44,11,0.68,1.12,0.88,0.92),
        el(-Math.PI/2+0.18, 30,10,0.84,0.96,0.85,0.80),
        el( Math.PI/2-0.18, 30,10,0.84,0.96,0.85,0.80),
      ];
      _t['Spreadshot'].description='5 центральных + 2 боковых под 90° — охват 270° одним залпом.';
    }

    // Hurricane: was 6 barrels in rough spiral (looked like PentaShot cousin).
    // New: 3 double-barrel groups at 120° — triangle-spinner visual.
    if(_t['Hurricane']){
      _t['Hurricane'].barrels=[
        el(0,            40,12,0.54,1.16,0.88,0.92,undefined,-8),
        el(0,            36,10,0.50,1.10,0.82,0.80,undefined,8),
        el(2*Math.PI/3,  40,12,0.54,1.16,0.88,0.92,undefined,-8),
        el(2*Math.PI/3,  36,10,0.50,1.10,0.82,0.80,undefined,8),
        el(-2*Math.PI/3, 40,12,0.54,1.16,0.88,0.92,undefined,-8),
        el(-2*Math.PI/3, 36,10,0.50,1.10,0.82,0.80,undefined,8),
      ];
      _t['Hurricane'].description='Три двойных ствола через 120° — вращающийся треугольник огня.';
    }

    // TripleTwin: was 3 pairs forward/side (looked like TwinFlank cousin).
    // New: 6-barrel wide arc (3L + 3R) — spread-assault look very different from TwinFlank.
    if(_t['TripleTwin']){
      _t['TripleTwin'].barrels=[
        el(0,           45,12,0.80,0.85,1.0,0.85,undefined,-8),
        el(0,           45,12,0.80,0.85,1.0,0.85,undefined,8),
        el(2*Math.PI/3, 42,12,0.80,0.85,1.0,0.85,undefined,-8),
        el(2*Math.PI/3, 42,12,0.80,0.85,1.0,0.85,undefined,8),
        el(4*Math.PI/3, 42,12,0.80,0.85,1.0,0.85,undefined,-8),
        el(4*Math.PI/3, 42,12,0.80,0.85,1.0,0.85,undefined,8),
      ];
      _t['TripleTwin'].description='Три пары параллельных стволов через 120° — тройной двойник.';
    }

    // BentHybrid: was 3 diagonal barrels (weak identity). 
    // New: pure X-cross (4 barrels at ±45° and ±135°) — diagonal-only firing.
    if(_t['BentHybrid']){
      _t['BentHybrid'].barrels=[
        el(-Math.PI/4,    48,14,0.80,1.06,0.95,1.0),
        el( Math.PI/4,    48,14,0.80,1.06,0.95,1.0),
        el(-3*Math.PI/4,  44,12,0.76,1.00,0.90,0.95),
        el( 3*Math.PI/4,  44,12,0.76,1.00,0.90,0.95),
      ];
      _t['BentHybrid'].description='4 ствола по диагоналям ±45° — стрельба только по углам, не прямо.';
    }

    // Predator: was "two barrels big+small" (felt like Hunter-cousin).
    // New: three staggered barrels (long → med → short) — triple-depth sniper.
    if(_t['Predator']){
      _t['Predator'].barrels=[
        el(0,   78,10,3.2,0.42,2.4,3.2),   // ultra-long slow
        el(0,   55,13,1.8,0.72,1.5,1.8),   // medium
        el(0,   35,16,0.9,1.05,1.0,1.0),   // short wide
      ];
      _t['Predator'].description='Три ствола в глубину: сверхдальний, средний и ближний — разные роли в одном.';
    }

    // Rocketeer: was 1 huge slow barrel (same as Annihilator family).
    // New: 1 wide barrel + 2 angled back jets — rocket-with-thrust visual.
    if(_t['Rocketeer']){
      _t['Rocketeer'].barrels=[
        el(0,       58,22,3.5,0.82,0.7,3.2),
        el(Math.PI, 32,12,0.48,1.1,0.85,0.7,undefined,-10),
        el(Math.PI, 32,12,0.48,1.1,0.85,0.7,undefined,10),
      ];
      _t['Rocketeer'].description='Огромный снаряд вперёд + реактивный выхлоп — настоящая ракета.';
    }
  })();

// ── SNIPER BRANCH BUFF + RAILGUN LASER + ROCKET FLAGS ─────────────────
;(function patchSpecialBranches(){
  // Collect full sniper branch (BFS from 'Sniper')
  var _childMap={};
  Ty.forEach(function(e){if(!_childMap[e[0]])_childMap[e[0]]=[];_childMap[e[0]].push(e[1]);});
  var _sniperBranch=new Set(['Sniper']);
  var _q=['Sniper'];
  while(_q.length){var _cur=_q.shift();(_childMap[_cur]||[]).forEach(function(c){if(!_sniperBranch.has(c)){_sniperBranch.add(c);_q.push(c);}});}
  // Include T4 nodes whose name starts with a sniper-branch T3 name
  var _sArr=Array.from(_sniperBranch);
  Object.keys(_t).forEach(function(k){
    if(_t[k].requiredLevel>=60){
      for(var _i=0;_i<_sArr.length;_i++){if(k.indexOf(_sArr[_i])===0){_sniperBranch.add(k);break;}}
    }
  });

  // Apply to all sniper-branch tanks: 2x damage, 2x bullet speed (nerf from 3x), sniperZoom flag, 0.667x bullet lifetime (nerf -33%)
  _sniperBranch.forEach(function(k){
    if(!_t[k])return;
    _t[k].sniperZoom=true;
    _t[k].bulletLifeMultiplier=0.667;
    (_t[k].barrels||[]).forEach(function(b){
      b.reloadMultiplier=(b.reloadMultiplier||1)*2;
      b.bulletDamageMultiplier=(b.bulletDamageMultiplier||1)*1.6;
      b.bulletSpeedMultiplier=(b.bulletSpeedMultiplier||1)*1.8;
    });
  });

  // Railgun branch: isLaser=true, 2x damage, 1.5x reload (slower), sniper-range speed boost
  var _railgunBranch=['Railgun','Siege','Plasma','EMPTank','DualRailgun'];
  // Also include T4 children of Plasma/EMPTank/DualRailgun in _customT3
  Object.keys(_t).forEach(function(k){
    if(_t[k].upgradesFrom){
      _t[k].upgradesFrom.forEach(function(p){
        if(_railgunBranch.indexOf(p)>=0&&_railgunBranch.indexOf(k)<0)_railgunBranch.push(k);
      });
    }
  });
  _railgunBranch.forEach(function(k){
    if(!_t[k])return;
    _t[k].isLaser=true;
    (_t[k].barrels||[]).forEach(function(b){
      b.bulletDamageMultiplier=(b.bulletDamageMultiplier||1)*2;
      b.bulletSpeedMultiplier=(b.bulletSpeedMultiplier||1)*3;
      b.reloadMultiplier=(b.reloadMultiplier||1)*1.5;
    });
  });

  // Rocket/missile tanks: isRocket flag for triangle rendering
  var _rocketTanks=['Rocketeer','Skimmer','Fighter','SmartMine'];
  // Also include any T4 from these
  Object.keys(_t).forEach(function(k){
    if(_t[k].upgradesFrom){
      _t[k].upgradesFrom.forEach(function(p){
        if(_rocketTanks.indexOf(p)>=0&&_rocketTanks.indexOf(k)<0)_rocketTanks.push(k);
      });
    }
  });
  _rocketTanks.forEach(function(k){if(_t[k])_t[k].isRocket=true;});
  // Auto-mark piercing tanks by description keywords
  Object.keys(_t).forEach(function(k){
    var td=_t[k];
    if(!td.isPiercing && td.description && (
      td.description.indexOf('насквозь')!==-1 ||
      td.description.indexOf('сквозной')!==-1 ||
      td.description.indexOf('пробивает всё')!==-1
    )){td.isPiercing=true;}
  });
})();

;(function applyTierColors(){
  // T0=blue T1=white T2=green T3=yellow T4=orange T5=red
  // Prime variants (strongest T4 branch) are treated as T5
  Object.keys(_t).forEach(function(k){
    var tank=_t[k];
    var rl=tank.requiredLevel||1;
    var color;
    if(rl<=1)        color='#44aaff'; // T0 blue
    else if(rl<=5)   color='#e0e0e0'; // T1 white
    else if(rl<=15)  color='#22cc55'; // T2 green
    else if(rl<=30)  color='#ffdd00'; // T3 yellow
    else if(rl<=45)  color='#ff8800'; // T4 orange
    else if(k.endsWith('Prime')) color='#ff3333'; // T5 red (Prime = top tier)
    else             color='#ff8800'; // T4+ orange
    tank.color=color;
  });
})();

;(function applyDualCol(){
  var nodeMap={};
  w0.forEach(function(n){nodeMap[n.name]=n;});
  var childMap={};
  Ty.forEach(function(e){if(!childMap[e[0]])childMap[e[0]]=[];childMap[e[0]].push(e[1]);});
  function getBranch(root){
    var s=new Set([root]),q=[root];
    while(q.length){var n=q.shift();(childMap[n]||[]).forEach(function(c){if(!s.has(c)){s.add(c);q.push(c);}});}
    return s;
  }
  var t1s=(childMap['Basic']||[]).slice().sort(function(a,b){
    return((nodeMap[a]&&nodeMap[a].y)||0)-((nodeMap[b]&&nodeMap[b].y)||0);
  });
  var cw=xl[4]-xl[0]+200;
  var rowGap=90;
  var curY=0;
  var rightT1Set=new Set();
  for(var gi=0;gi<t1s.length;gi+=2){
    var na=t1s[gi],nb=t1s[gi+1];
    var bA=getBranch(na);
    var bB=nb?getBranch(nb):new Set();
    var nA=w0.filter(function(n){return bA.has(n.name);});
    var nB=nb?w0.filter(function(n){return bB.has(n.name);}):[];
    var minYA=nA.length?Math.min.apply(null,nA.map(function(n){return n.y;})):curY;
    var maxYA=nA.length?Math.max.apply(null,nA.map(function(n){return n.y;})):curY;
    var minYB=nB.length?Math.min.apply(null,nB.map(function(n){return n.y;})):curY;
    var maxYB=nB.length?Math.max.apply(null,nB.map(function(n){return n.y;})):curY;
    nA.forEach(function(n){n.y=n.y-minYA+curY;});
    nB.forEach(function(n){n.y=n.y-minYB+curY;n.x=n.x+cw;});
    var rh=Math.max(maxYA-minYA,maxYB-minYB);
    curY+=rh+rowGap;
    if(nb)rightT1Set.add(nb);
  }
  var basic=nodeMap['Basic'];
  if(basic&&t1s[0]&&nodeMap[t1s[0]])basic.y=nodeMap[t1s[0]].y;
  var basicR={name:'Basic_R',tier:0,x:(basic?basic.x:xl[0])+cw,y:basic?basic.y:0,r:basic?basic.r:20};
  if(t1s[1]&&nodeMap[t1s[1]])basicR.y=nodeMap[t1s[1]].y;
  w0.push(basicR);
  // Give Basic_R a proper display name and tank data so it renders identically to Basic
  W1['Basic_R']=W1['Basic']||'Базовый';
  if(_t['Basic'])_t['Basic_R']=_t['Basic'];
  rightT1Set.forEach(function(n1Name){
    for(var i=0;i<Ty.length;i++){
      if(Ty[i][0]==='Basic'&&Ty[i][1]===n1Name){Ty[i]=['Basic_R',n1Name];break;}
    }
  });
  py=curY+80;
  V0=cw*2-60;
})();
;(function normalizeTree(){
  var minY=Math.min.apply(null,w0.map(function(n){return n.y;}));
  // Shift all nodes so min y = at (node radius), giving padding above topmost node
  w0.forEach(function(n){n.y=n.y-minY+at;});
  var maxY=Math.max.apply(null,w0.map(function(n){return n.y;}));
  py=maxY+at+80;
})();

;(function shiftSniperBranch(){
  var childMap={};
  Ty.forEach(function(e){if(!childMap[e[0]])childMap[e[0]]=[];childMap[e[0]].push(e[1]);});
  var branch=new Set(['Sniper']);
  var queue=['Sniper'];
  while(queue.length){
    var cur=queue.shift();
    (childMap[cur]||[]).forEach(function(c){if(!branch.has(c)){branch.add(c);queue.push(c);}});
  }
  // Include T4 nodes whose name starts with a Sniper-branch T3 name
  var branchArr=Array.from(branch);
  w0.forEach(function(n){
    if(n.tier===4){
      for(var i=0;i<branchArr.length;i++){
        if(n.name.indexOf(branchArr[i])===0){branch.add(n.name);break;}
      }
    }
  });
  w0.forEach(function(n){if(branch.has(n.name))n.y+=300;});
  var maxY=Math.max.apply(null,w0.map(function(n){return n.y;}));
  py=maxY+at+80;
})();

;(function spreadT2Nodes(){
  // Sort T2 nodes by y, assign cumulative extra offset
  var t2=w0.filter(function(n){return n.tier===2;}).sort(function(a,b){return a.y-b.y;});
  // Build descendant map for shifting children with parent
  var childMap={};
  Ty.forEach(function(e){if(!childMap[e[0]])childMap[e[0]]=[];childMap[e[0]].push(e[1]);});
  function getDesc(root){
    var set=new Set();var q=[root];
    while(q.length){var c=q.shift();(childMap[c]||[]).forEach(function(x){if(!set.has(x)){set.add(x);q.push(x);}});}
    return set;
  }
  // Shift each T2 node and its descendants by index*30
  t2.forEach(function(n,i){
    var delta=i*30;
    n.y+=delta;
    var desc=getDesc(n.name);
    // Also shift T4 nodes whose name starts with a descendant name
    var descArr=Array.from(desc);
    w0.forEach(function(nd){
      if(desc.has(nd.name)){nd.y+=delta;return;}
      if(nd.tier===4){
        for(var j=0;j<descArr.length;j++){
          if(nd.name.indexOf(descArr[j])===0){nd.y+=delta;break;}
        }
      }
    });
  });
  var maxY=Math.max.apply(null,w0.map(function(n){return n.y;}));
  py=maxY+at+80;
  var maxX=Math.max.apply(null,w0.map(function(n){return n.x;}));
  V0=maxX+at+80;
})();

// ---- FULLSCREEN TREE OVERLAY PATCH ----
  ;(function patchTreeFullscreen(){
    document.head.insertAdjacentHTML('beforeend','<style id="tree-fs-style">'+
      '#tree-fs-hdr{position:fixed;top:0;left:0;right:0;height:52px;z-index:10001;'+
        'background:rgba(4,4,18,0.97);border-bottom:1px solid rgba(255,255,255,0.12);'+
        'display:none;align-items:center;justify-content:space-between;padding:0 10px;box-sizing:border-box;gap:6px;}'+
      '#tree-fs-hdr.on{display:flex;}'+
      '#tree-fs-close{background:rgba(180,30,30,0.22);border:1.5px solid rgba(220,70,70,0.5);color:#ff9090;'+
        'padding:7px 14px;border-radius:10px;font-size:13px;cursor:pointer;font-family:Arial;font-weight:bold;white-space:nowrap;touch-action:manipulation;flex-shrink:0;}'+
      '#tree-fs-zoom{display:flex;align-items:center;gap:5px;flex:1;justify-content:center;}'+
      '.tzb{background:rgba(255,255,255,0.10);border:1.5px solid rgba(255,255,255,0.22);color:#fff;'+
        'width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;'+
        'touch-action:manipulation;user-select:none;-webkit-user-select:none;font-family:Arial;line-height:1;flex-shrink:0;}'+
      '#tzoom-val{color:rgba(255,255,255,0.55);font-size:11px;font-family:Arial;min-width:40px;text-align:center;flex-shrink:0;}'+
    '</style>');

    var hdr=document.createElement('div');
    hdr.id='tree-fs-hdr';
    hdr.innerHTML=
      '<span style="color:#c8a018;font-family:Arial;font-size:13px;font-weight:bold;white-space:nowrap;flex-shrink:0;">&#127807; Дерево</span>'+
      '<div id="tree-fs-zoom">'+
        '<button class="tzb" id="tzb-out">&#8722;</button>'+
        '<span id="tzoom-val">100%</span>'+
        '<button class="tzb" id="tzb-in">+</button>'+
        '<button class="tzb" id="tzb-fit" style="font-size:14px;">&#8634;</button>'+
      '</div>'+
      '<button id="tree-fs-close">&#10005; Закрыть</button>';
    document.body.appendChild(hdr);

    function findToggleBtn(){
      var btns=document.querySelectorAll('button');
      for(var i=0;i<btns.length;i++){
        if(btns[i].textContent.indexOf('Дерево')>=0&&!btns[i].closest('#tree-fs-hdr'))return btns[i];
      }
      return null;
    }
    document.getElementById('tree-fs-close').onclick=function(){
      var b=findToggleBtn();if(b)b.click();
    };

    // ---- Independent transform state (never conflicts with React) ----
    var ST={sc:1,px:0,py:0};

    function applyTransform(){
      var wr=window.__treeWrapRef&&window.__treeWrapRef.current;
      if(!wr)return;
      wr.style.transform='translate('+ST.px+'px,'+ST.py+'px) scale('+ST.sc+')';
      document.getElementById('tzoom-val').textContent=Math.round(ST.sc*100)+'%';
    }

    function clampScale(v){return Math.min(4,Math.max(0.1,v));}
    function fitToScreen(){var vw=window.innerWidth;var vh=window.innerHeight-52;var wr=window.__treeWrapRef&&window.__treeWrapRef.current;var svg=wr&&wr.querySelector("svg");var bb=svg?svg.getBBox():null;if(bb&&bb.width>0&&bb.height>0){var sc=Math.min(vw/(bb.width+80),vh/(bb.height+80));sc=clampScale(sc);ST.sc=sc;ST.px=(vw-bb.width*sc)/2-bb.x*sc;ST.py=(vh-bb.height*sc)/2-bb.y*sc;}else{var sc2=Math.min(vw/(V0+80),(vh)/(py+80));sc2=clampScale(sc2);ST.sc=sc2;ST.px=(vw-V0*sc2)/2;ST.py=(vh-py*sc2)/2;}applyTransform();}

    // Zoom buttons
    document.getElementById('tzb-in').addEventListener('click',function(){ST.sc=clampScale(ST.sc+0.25);applyTransform();},true);
    document.getElementById('tzb-out').addEventListener('click',function(){ST.sc=clampScale(ST.sc-0.25);applyTransform();},true);
    document.getElementById('tzb-fit').addEventListener('click',function(){fitToScreen();},true);

    // ---- Touch state ----
    var pinch={on:false,d0:0,s0:1,px0:0,py0:0};
    var drag={on:false,sx:0,sy:0,px0:0,py0:0};
    var mDrag={on:false,sx:0,sy:0,px0:0,py0:0};

    function dist(t){var dx=t[0].clientX-t[1].clientX,dy=t[0].clientY-t[1].clientY;return Math.sqrt(dx*dx+dy*dy);}

    function onTS(e){
      // Block React from seeing this touch event entirely
      e.stopImmediatePropagation();
      if(e.touches.length===2){
        var _t2=e.touches;var _mp={x:(_t2[0].clientX+_t2[1].clientX)/2,y:(_t2[0].clientY+_t2[1].clientY)/2};var _rect=_zyRoot?_zyRoot.getBoundingClientRect():{left:0,top:52};pinch={on:true,d0:dist(_t2),s0:ST.sc,px0:ST.px,py0:ST.py,cx:_mp.x-_rect.left,cy:_mp.y-_rect.top};
        drag.on=false;
      }else if(e.touches.length===1){
        pinch.on=false;
        drag={on:true,sx:e.touches[0].clientX,sy:e.touches[0].clientY,px0:ST.px,py0:ST.py};
      }
    }

    function onTM(e){
      e.stopImmediatePropagation();
      e.preventDefault();
      if(e.touches.length===2&&pinch.on){
        var ns=clampScale(pinch.s0*(dist(e.touches)/pinch.d0));
        var ratio=ns/pinch.s0;
        ST.sc=ns;
        ST.px=pinch.cx-(pinch.cx-pinch.px0)*ratio;
        ST.py=pinch.cy-(pinch.cy-pinch.py0)*ratio;
        applyTransform();
      }else if(e.touches.length===1&&drag.on){
        ST.px=drag.px0+(e.touches[0].clientX-drag.sx);
        ST.py=drag.py0+(e.touches[0].clientY-drag.sy);
        applyTransform();
      }
    }

    function onTE(e){
      e.stopImmediatePropagation();
      if(e.touches.length<2)pinch.on=false;
      if(e.touches.length===0)drag.on=false;
    }

    function onMD(e){
      mDrag={on:true,sx:e.clientX,sy:e.clientY,px0:ST.px,py0:ST.py};
      e.currentTarget.style.cursor='grabbing';
    }
    function onMM(e){
      if(!mDrag.on)return;
      ST.px=mDrag.px0+(e.clientX-mDrag.sx);
      ST.py=mDrag.py0+(e.clientY-mDrag.sy);
      applyTransform();
    }
    function onMU(e){mDrag.on=false;e.currentTarget.style.cursor='grab';}
    function onWh(e){
      e.preventDefault();
      var rect=_zyRoot?_zyRoot.getBoundingClientRect():{left:0,top:52};
      var cx=e.clientX-rect.left,cy=e.clientY-rect.top;
      var ns=clampScale(ST.sc*(e.deltaY<0?1.12:0.88));
      var ratio=ns/ST.sc;
      ST.px=cx-(cx-ST.px)*ratio;
      ST.py=cy-(cy-ST.py)*ratio;
      ST.sc=ns;
      applyTransform();
    }

    var _patched=false,_zyRoot=null;
    function patchCanvas(zyRoot){
      _zyRoot=zyRoot;
      if(_patched)return;_patched=true;
      // Use capture:true + stopImmediatePropagation to completely block React's handlers
      zyRoot.addEventListener('touchstart',onTS,{capture:true,passive:false});
      zyRoot.addEventListener('touchmove',onTM,{capture:true,passive:false});
      zyRoot.addEventListener('touchend',onTE,{capture:true,passive:false});
      zyRoot.addEventListener('touchcancel',onTE,{capture:true,passive:false});
      zyRoot.addEventListener('mousedown',onMD);
      zyRoot.addEventListener('mousemove',onMM);
      zyRoot.addEventListener('mouseup',onMU);
      zyRoot.addEventListener('mouseleave',onMU);
      zyRoot.addEventListener('wheel',onWh,{passive:false});
      zyRoot.style.cursor='grab';
    }

    var active=false,_hiddenEls=[];
    var _obsRoot=document.getElementById('root');
    if(!_obsRoot){
      _obsRoot=document.body;
    }
    new MutationObserver(function(){
      var svg=document.querySelector('svg[width="'+V0+'"]');
      if(svg&&!active){
        active=true;
        var wrapDiv=svg.parentElement;            // _wrapRef (transform target)
        var zyRoot=wrapDiv&&wrapDiv.parentElement; // overflow:hidden / grab div
        var compRoot=zyRoot&&zyRoot.parentElement; // component root

        // Hide title + legend siblings inside component root
        _hiddenEls=[];
        if(compRoot){
          Array.prototype.forEach.call(compRoot.children,function(ch){
            if(ch!==zyRoot){ch._pdisp=ch.style.display;ch.style.display='none';_hiddenEls.push(ch);}
          });
        }

        // Make zyRoot cover the screen (below header), solid background so menu doesn't bleed through
        if(zyRoot){
          var s=zyRoot.style;
          s.setProperty('position','fixed','important');
          s.setProperty('top','52px','important');
          s.setProperty('left','0','important');
          s.setProperty('right','0','important');
          s.setProperty('bottom','0','important');
          s.setProperty('width','100vw','important');
          s.setProperty('max-height','none','important');
          s.setProperty('overflow','hidden','important');
          s.setProperty('background','#080812','important');
          s.setProperty('z-index','10000','important');
          s.setProperty('box-sizing','border-box','important');
          patchCanvas(zyRoot);
        }

        // Ensure transform target is correct
        if(wrapDiv){
          wrapDiv.style.transformOrigin='0 0';
          wrapDiv.style.willChange='transform';
          wrapDiv.style.display='inline-block';
          wrapDiv.style.userSelect='none';
        }

        setTimeout(fitToScreen,80);
        hdr.classList.add('on');
      }else if(!svg&&active){
        active=false;_patched=false;
        hdr.classList.remove('on');
        _hiddenEls.forEach(function(el){el.style.display=el._pdisp||'';});
        _hiddenEls=[];
      }
    }).observe(_obsRoot,{childList:true,subtree:true});
  })();
function _clsTier(cls){var t=_t[cls];if(!t)return 0;var rl=t.requiredLevel||1;return rl<=1?0:rl<=5?1:rl<=15?2:rl<=30?3:rl<=45?4:5;}
function _tankStats(cls){var t=_t[cls];if(!t)return null;var bb=t.barrels||[];var n=bb.length;if(n===0)return{n:0,dmg:0,spd:0,rld:0,bod:Math.min(3,(t.bodyDamageMultiplier||1)),siz:Math.min(3,(t.radiusMultiplier||1))};var aD=bb.reduce(function(s,b){return s+(b.bulletDamageMultiplier||1);},0)/n;var aS=bb.reduce(function(s,b){return s+(b.bulletSpeedMultiplier||1);},0)/n;var aR=bb.reduce(function(s,b){return s+(b.reloadMultiplier||1);},0)/n;var aSz=bb.reduce(function(s,b){return s+(b.bulletSizeMultiplier||b[6]||1);},0)/n;return{n:n,dmg:Math.min(3,aD*Math.pow(n,0.5)*aSz),spd:Math.min(3,aS),rld:Math.min(3,1.5/aR),bod:Math.min(3,(t.bodyDamageMultiplier||1)),siz:Math.min(3,(t.radiusMultiplier||1))};}
function _sBar(val,max,col){var pct=Math.round(Math.min(100,Math.max(0,(val/max)*100)));return D.jsxs("div",{style:{display:'flex',alignItems:'center',gap:4,marginBottom:2},children:[D.jsx("div",{style:{flex:1,height:5,background:'rgba(255,255,255,0.08)',borderRadius:3,overflow:'hidden'},children:D.jsx("div",{style:{width:pct+'%',height:'100%',background:col,borderRadius:3,transition:'width .3s'}})}),D.jsx("span",{style:{fontSize:8,color:'rgba(255,255,255,0.32)',minWidth:22,textAlign:'right'},children:pct+'%'})]});}
function zy({onClose}){
    const[path,setPath]=cl.useState([]);
    const[preview,setPreview]=cl.useState(null);
    const panRef=cl.useRef({x:0,y:0});
    const scaleRef=cl.useRef(1);
    const dragRef=cl.useRef({on:false,sx:0,sy:0,px:0,py:0});
    const pinchRef=cl.useRef({on:false,d0:0,s0:1});
    const innerRef=cl.useRef(null);

    const T0='Basic';
    function getCh(cls){
      if(cls===T0){
        // combine Basic + Basic_R so applyDualCol split doesn't hide branches
        const a=Ty.filter(e=>e[0]==='Basic').map(e=>e[1]);
        const b=Ty.filter(e=>e[0]==='Basic_R').map(e=>e[1]);
        return [...a,...b];
      }
      return Ty.filter(e=>e[0]===cls).map(e=>e[1]);
    }
    function getTankData(cls){return _t[cls]||(_t[cls+'Alpha']?{color:(_t[cls+'Alpha'].color||'#44aaff')}:null)||{color:K0[1]||'#22ee55'};}

    const fullPath=[T0,...path];
    const curNav=path.length>0?path[path.length-1]:null;
    const list=curNav?getCh(curNav):getCh(T0);
    const prevCh=preview?getCh(preview):[];

    function navInto(cls){setPath(p=>[...p,cls]);setPreview(null);}
    function goIdx(idx){setPath(idx===0?[]:p=>p.slice(0,idx));setPreview(null);}
    function goBack(){if(preview){setPreview(null);}else{setPath(p=>p.slice(0,-1));}}
    function applyT(){if(innerRef.current)innerRef.current.style.transform='translate('+panRef.current.x+'px,'+panRef.current.y+'px) scale('+scaleRef.current+')';}
    function onTS(e){if(e.touches.length===2){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY;pinchRef.current={on:true,d0:Math.sqrt(dx*dx+dy*dy),s0:scaleRef.current};dragRef.current.on=false;}else if(e.touches.length===1){pinchRef.current.on=false;dragRef.current={on:true,sx:e.touches[0].clientX,sy:e.touches[0].clientY,px:panRef.current.x,py:panRef.current.y};}}
    function onTM(e){e.preventDefault();if(e.touches.length===2&&pinchRef.current.on){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY;scaleRef.current=Math.min(3,Math.max(0.3,pinchRef.current.s0*(Math.sqrt(dx*dx+dy*dy)/pinchRef.current.d0)));applyT();}else if(e.touches.length===1&&dragRef.current.on){panRef.current.x=dragRef.current.px+(e.touches[0].clientX-dragRef.current.sx);panRef.current.y=dragRef.current.py+(e.touches[0].clientY-dragRef.current.sy);applyT();}}
    function onTE(){dragRef.current.on=false;pinchRef.current.on=false;}
    function onMD(e){if(e.button!==0)return;dragRef.current={on:true,sx:e.clientX,sy:e.clientY,px:panRef.current.x,py:panRef.current.y};e.currentTarget.style.cursor='grabbing';}
    function onMM(e){if(!dragRef.current.on)return;panRef.current.x=dragRef.current.px+(e.clientX-dragRef.current.sx);panRef.current.y=dragRef.current.py+(e.clientY-dragRef.current.sy);applyT();}
    function onMU(e){dragRef.current.on=false;if(e&&e.currentTarget)e.currentTarget.style.cursor='grab';}
    function onWh(e){e.preventDefault();scaleRef.current=Math.min(3,Math.max(0.3,scaleRef.current*(e.deltaY<0?1.12:0.9)));applyT();}

    const cSt=(col,sel)=>({background:sel?col+'dd':col+'44',border:'2px solid '+col,borderRadius:10,padding:'8px 6px 9px',cursor:'pointer',color:'#fff',fontFamily:'Arial',fontWeight:'bold',fontSize:11,textShadow:'0 1px 3px #000a',display:'flex',flexDirection:'column',alignItems:'center',gap:3,width:86,boxSizing:'border-box',boxShadow:sel?'0 0 18px '+col+'88':'',transition:'transform .12s'});
    const T0data=getTankData(T0);
    const curData=curNav?getTankData(curNav):null;

    return D.jsxs("div",{style:{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:10000,background:'rgba(4,4,14,0.98)',display:'flex',flexDirection:'column'},onPointerDown:e=>e.stopPropagation(),children:[

      D.jsxs("div",{style:{flexShrink:0,background:'rgba(4,4,14,1)',borderBottom:'1px solid rgba(255,255,255,0.09)',padding:'10px 14px 8px',display:'flex',flexDirection:'column',gap:6},children:[
        D.jsxs("div",{style:{display:'flex',alignItems:'center',justifyContent:'space-between'},children:[
          D.jsx("span",{style:{color:'#c8a018',fontFamily:'Arial',fontSize:14,fontWeight:'bold'},children:'🌿 Дерево улучшений'}),
          D.jsxs("div",{style:{display:'flex',gap:6},children:[
            path.length>0?D.jsx("button",{onPointerDown:e=>{e.stopPropagation();goBack();},style:{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.18)',borderRadius:6,color:'#ccc',padding:'4px 10px',cursor:'pointer',fontSize:12,fontFamily:'Arial'},children:'◀ Назад'}):null,
            D.jsx("button",{onPointerDown:e=>{e.stopPropagation();onClose&&onClose();},style:{background:'rgba(200,40,40,0.18)',border:'1.5px solid rgba(220,60,60,0.45)',borderRadius:6,color:'#ff6060',padding:'4px 12px',cursor:'pointer',fontSize:12,fontFamily:'Arial',fontWeight:'bold'},children:'✕'})
          ]})
        ]}),
        D.jsx("div",{style:{display:'flex',alignItems:'center',flexWrap:'wrap',gap:3},children:
          fullPath.map((cls,i)=>D.jsxs("span",{style:{display:'flex',alignItems:'center',gap:3},children:[
            D.jsx("span",{
              onPointerDown:i<fullPath.length-1?e=>{e.stopPropagation();goIdx(i);}:undefined,
              style:{background:i===fullPath.length-1?(getTankData(cls).color+'33'):'transparent',border:i===fullPath.length-1?'1px solid '+(getTankData(cls).color||'#44aaff'):'none',borderRadius:5,padding:'2px 8px',color:i===fullPath.length-1?(getTankData(cls).color||'#44aaff'):'rgba(255,255,255,0.42)',fontSize:11,fontFamily:'Arial',fontWeight:i===fullPath.length-1?'bold':'normal',cursor:i<fullPath.length-1?'pointer':'default'},
              children:Dc(cls)||cls
            }),
            i<fullPath.length-1?D.jsx("span",{style:{color:'rgba(255,255,255,0.2)',fontSize:14},children:'›'}):null
          ]},i))
        })
      ]}),

      D.jsx("div",{style:{flex:1,overflow:'hidden',cursor:'grab',touchAction:'none',userSelect:'none',WebkitUserSelect:'none'},
        onTouchStart:onTS,onTouchMove:onTM,onTouchEnd:onTE,
        onMouseDown:onMD,onMouseMove:onMM,onMouseUp:onMU,onMouseLeave:onMU,onWheel:onWh,
        children:D.jsx("div",{ref:innerRef,style:{transformOrigin:'top left',willChange:'transform',padding:'16px 16px 60px',display:'inline-block',minWidth:'100%'},children:

          D.jsxs("div",{style:{display:'flex',flexDirection:'row',alignItems:'flex-start',gap:20,minWidth:320},children:[

            D.jsxs("div",{style:{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:10},children:[D.jsxs("div",{style:{display:'flex',alignItems:'flex-start',gap:16},children:[

              D.jsxs("div",{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:4},children:[
                D.jsxs("div",{style:{...cSt(T0data.color||'#4488ff',false),cursor:'default',opacity:.75,width:92},children:[
                  D.jsx(Rc,{className:T0,size:42,angle:0}),
                  D.jsx("span",{style:{fontSize:10,fontWeight:'bold'},children:Dc(T0)||T0}),
                  D.jsx("span",{style:{fontSize:8,color:'rgba(255,255,255,0.35)'},children:'T0 · старт'})
                ]}),
                ...path.map(function(cls,idx){var isLast=idx===path.length-1;var nd=getTankData(cls);return D.jsxs("div",{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:3,marginTop:4},children:[D.jsx("div",{style:{width:2,height:14,background:'rgba(255,255,255,0.15)',borderRadius:1}}),D.jsx("div",{style:{color:'rgba(255,255,255,0.22)',fontSize:11},children:'▼'}),D.jsxs("div",{style:{...cSt(nd&&nd.color||'#44aaff',isLast),cursor:'default',width:92},children:[D.jsx(Rc,{className:cls,size:40,angle:0}),D.jsx("span",{style:{fontSize:10,fontWeight:'bold'},children:Dc(cls)||cls}),D.jsx("span",{style:{fontSize:8,color:'rgba(255,255,255,0.55)'},children:'T'+(idx+1)+(isLast?' · выбрано':'')})]})]},idx)})
              ]}),

              D.jsxs("div",{style:{display:'flex',flexDirection:'column',gap:4},children:[
                D.jsxs("div",{style:{display:'flex',alignItems:'center',gap:6,marginBottom:2},children:[
                  D.jsx("div",{style:{width:20,height:2,background:'rgba(255,255,255,0.15)',borderRadius:1}}),
                  D.jsx("div",{style:{color:'rgba(200,200,255,0.32)',fontSize:9,fontFamily:'Arial',letterSpacing:.5},children:'T'+(path.length+1)+' — '+(curNav?'ветки '+(Dc(curNav)||curNav):'начальные ветки')+' ('+list.length+')'})
                ]}),
                D.jsx("div",{style:{display:'flex',flexDirection:'column',gap:6},children:
                  list.map(cls=>{
                    const T=getTankData(cls);
                    const isSel=preview===cls;
                    const hasK=getCh(cls).length>0;
                    const _tier=_clsTier(cls);
                    return D.jsxs("button",{
                      onPointerDown:v=>{v.stopPropagation();setPreview(p=>p===cls?null:cls);},
                      style:{...cSt(T.color||'#44aaff',isSel)},
                      onMouseEnter:v=>{if(!isSel)v.currentTarget.style.transform='scale(1.06)';},
                      onMouseLeave:v=>{v.currentTarget.style.transform='';},
                      children:[
                        D.jsx(Rc,{className:cls,size:36,angle:0}),
                        D.jsx("span",{style:{fontSize:10,fontWeight:'bold',textAlign:'center'},children:Dc(cls)||cls}),
                        D.jsx("span",{style:{fontSize:8,color:'rgba(255,255,255,0.38)'},children:'T'+_tier+(hasK?' · ▼ '+getCh(cls).length+' веток':' · финал')})
                      ]
                    },cls);
                  })
                })
              ]})
            ]}),

            ]}),
            preview&&getTankData(preview)?(function(){
              var _pd=getTankData(preview);
              var _pc=getTankData(preview).color||'#44aaff';
              var _pt=_clsTier(preview);
              var _st=_tankStats(preview);
              var _td=_t[preview];
              return D.jsxs("div",{style:{background:'rgba(18,18,46,0.95)',border:'1.5px solid '+_pc+'77',borderRadius:12,padding:'12px 14px',maxWidth:420,boxSizing:'border-box'},children:[
                D.jsxs("div",{style:{display:'flex',gap:12,alignItems:'flex-start',marginBottom:8},children:[
                  D.jsx(Rc,{className:preview,size:48,angle:0}),
                  D.jsxs("div",{style:{flex:1,minWidth:0},children:[
                    D.jsxs("div",{style:{display:'flex',alignItems:'center',gap:6,marginBottom:3},children:[
                      D.jsx("div",{style:{color:_pc,fontWeight:'bold',fontSize:13,fontFamily:'Arial'},children:Dc(preview)||preview}),
                      D.jsx("div",{style:{background:_pc+'33',border:'1px solid '+_pc+'66',borderRadius:4,padding:'1px 6px',color:_pc,fontSize:9,fontFamily:'Arial',fontWeight:'bold'},children:'T'+_pt})
                    ]}),
                    _td&&_td.requiredLevel?D.jsx("div",{style:{color:'rgba(255,255,255,0.35)',fontSize:9,fontFamily:'Arial',marginBottom:3},children:'Уровень: '+_td.requiredLevel+(_td.upgradesFrom&&_td.upgradesFrom.length?' · из: '+_td.upgradesFrom.map(function(p){return W1[p]||p;}).join(', '):'')}):null,
                    (_td&&_td.description)?D.jsx("div",{style:{color:'rgba(255,255,255,0.65)',fontSize:10,lineHeight:1.5,fontFamily:'Arial'},children:_td.description}):null
                  ]}),
                  prevCh.length>0?D.jsx("button",{
                    onPointerDown:function(v){v.stopPropagation();navInto(preview);},
                    style:{background:'linear-gradient(135deg,#1a44bb,#0d2d88)',border:'2px solid #3366dd',borderRadius:8,color:'#fff',fontFamily:'Arial',fontWeight:'bold',fontSize:11,padding:'8px 12px',cursor:'pointer',whiteSpace:'nowrap',flexShrink:0,boxShadow:'0 0 12px #1a44bb66'},
                    children:'Войти ▼'
                  }):null
                ]}),
                _st?D.jsxs("div",{style:{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:8},children:[
                  D.jsxs("div",{style:{display:'flex',justifyContent:'space-between',marginBottom:6},children:[
                    D.jsx("div",{style:{color:'rgba(255,255,255,0.4)',fontSize:9,fontFamily:'Arial',fontWeight:'bold',letterSpacing:.5},children:'ХАРАКТЕРИСТИКИ'}),
                    D.jsx("div",{style:{color:'rgba(255,255,255,0.3)',fontSize:9,fontFamily:'Arial'},children:'Стволов: '+_st.n})
                  ]}),
                  D.jsxs("div",{style:{display:'grid',gridTemplateColumns:'60px 1fr',gap:'3px 6px',alignItems:'center'},children:[
                    D.jsx("span",{style:{color:'rgba(255,200,80,0.7)',fontSize:9,fontFamily:'Arial'},children:'Урон'}),    _sBar(_st.dmg,3,'#ff6644'),
                    D.jsx("span",{style:{color:'rgba(100,200,255,0.7)',fontSize:9,fontFamily:'Arial'},children:'Скорость'}), _sBar(_st.spd,3,'#44aaff'),
                    D.jsx("span",{style:{color:'rgba(100,255,100,0.7)',fontSize:9,fontFamily:'Arial'},children:'Скорострел'}),_sBar(_st.rld,3,'#44ff88'),
                    D.jsx("span",{style:{color:'rgba(255,100,100,0.7)',fontSize:9,fontFamily:'Arial'},children:'Таран'}),    _sBar(_st.bod,3,'#ff4444'),
                    D.jsx("span",{style:{color:'rgba(200,150,255,0.7)',fontSize:9,fontFamily:'Arial'},children:'Размер'}),   _sBar(_st.siz,3,'#cc88ff')
                  ]})
                ]}):null,
                prevCh.length>0?D.jsx("div",{style:{color:'rgba(255,255,255,0.25)',fontSize:9,marginTop:6,fontFamily:'Arial'},children:'Ветки: '+prevCh.map(function(c){return Dc(c)||c;}).join(', ')}):
                D.jsx("div",{style:{color:'rgba(255,220,80,0.45)',fontSize:9,marginTop:6,fontFamily:'Arial'},children:'T'+_pt+' · финальный танк'})
              ]});
            })():null

          ]})
        })
      })
    ]});
  }
function _DomHUD({state:_ds,uiScale:_dhSc}){const _pl=(_ds.domScore&&_ds.domScore.player)||0,_np=(_ds.domScore&&_ds.domScore.npc)||0,_cap=_ds.capturePoints||[];const _goal=300;return D.jsxs("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%) scale("+(_dhSc||1)+")",transformOrigin:"top center",background:"rgba(0,0,0,0.72)",borderRadius:12,padding:"6px 14px",zIndex:170,pointerEvents:"none",fontFamily:"Arial",fontSize:12,color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",gap:4,minWidth:200},children:[D.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.6)",marginBottom:1},children:"🏴 Доминирование · до "+_goal}),D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,width:"100%"},children:[D.jsx("span",{style:{color:"#00b2e1",fontWeight:"bold",minWidth:28,textAlign:"right"},children:_pl}),D.jsxs("div",{style:{flex:1,height:8,borderRadius:4,background:"rgba(255,255,255,0.12)",overflow:"hidden",display:"flex"},children:[D.jsx("div",{style:{width:Math.min(_pl/_goal*100,100)+"%",background:"#00b2e1",transition:"width 0.3s",borderRadius:"4px 0 0 4px"}}),D.jsx("div",{style:{flex:1}}),D.jsx("div",{style:{width:Math.min(_np/_goal*100,100)+"%",background:"#f14e54",transition:"width 0.3s",borderRadius:"0 4px 4px 0"}})]}),D.jsx("span",{style:{color:"#f14e54",fontWeight:"bold",minWidth:28},children:_np})]}),D.jsxs("div",{style:{display:"flex",gap:6},children:_cap.map(_cp=>D.jsxs("div",{key:_cp.id,style:{background:_cp.team==="player"?"rgba(0,178,225,0.3)":_cp.team==="npc"?"rgba(241,78,84,0.3)":"rgba(200,200,200,0.15)",border:"1.5px solid "+(_cp.team==="player"?"#00b2e1":_cp.team==="npc"?"#f14e54":"#888"),borderRadius:6,padding:"1px 7px",fontSize:11,fontWeight:"bold",color:_cp.team==="player"?"#00d4ff":_cp.team==="npc"?"#ff7070":"#bbb"},children:[_cp.id," ",_cp.team==="player"?"✓":_cp.team==="npc"?"✕":"○"]},_cp.id))})]})}

function ShapesGuide({onClose}){
  var _d=[
    {key:'square',      ru:'Квадрат',              sides:4, col:'#f0dc40',str:'#d4ba38',hp:13,    xp:43,    dmg:8,  r:18},
    {key:'triangle',    ru:'Треугольник',           sides:3, col:'#f05050',str:'#d84e50',hp:26,    xp:107,   dmg:12, r:22},
    {key:'crasher',     ru:'Крашер',                sides:4, col:'#e040c8',str:'#a02090',hp:52,    xp:150,   dmg:22, r:16},
    {key:'mediumSquare',ru:'Средний квадрат',       sides:4, col:'#00ddcc',str:'#009988',hp:35,    xp:64,    dmg:10, r:24},
    {key:'mediumTriangle',ru:'Средний треугольник', sides:3, col:'#ffcc00',str:'#cc9900',hp:90,    xp:229,   dmg:14, r:22},
    {key:'largeSquare', ru:'Большой квадрат',       sides:4, col:'#ff8800',str:'#cc5500',hp:60,    xp:100,   dmg:13, r:17},
    {key:'largeTriangle',ru:'Большой треугольник',  sides:3, col:'#44cc44',str:'#22aa22',hp:150,   xp:315,   dmg:18, r:21},
    {key:'pentagon',    ru:'Пятиугольник',          sides:5, col:'#6680f0',str:'#5062cc',hp:130,   xp:558,   dmg:18, r:30},
    {key:'alphaPentagon',ru:'Альфа-пятиугольник',  sides:5, col:'#4455ee',str:'#2233cc',hp:910,   xp:1072,  dmg:40, r:52},
    {key:'bigPentagon', ru:'Большой пятиугольник',  sides:5, col:'#6680f0',str:'#5062cc',hp:1950,  xp:6435,  dmg:60, r:80},
    {key:'hexagon',     ru:'Шестиугольник',         sides:6, col:'#9966ff',str:'#7744cc',hp:2600,  xp:8580,  dmg:70, r:90},
    {key:'heptagon',    ru:'Семиугольник',          sides:7, col:'#cc44ff',str:'#9922cc',hp:4200,  xp:14300, dmg:88, r:105},
    {key:'octagon',     ru:'Восьмиугольник',        sides:8, col:'#ff6633',str:'#cc4422',hp:7000,  xp:24310, dmg:108,r:122},
    {key:'decagon',     ru:'Десятиугольник',        sides:10,col:'#ff2244',str:'#cc1133',hp:12000, xp:40040, dmg:130,r:142},
    {key:'megaPentagon',ru:'Мега-пятиугольник',    sides:5, col:'#0d1fcc',str:'#0a14aa',hp:22000, xp:71500,  dmg:160,r:175},
    {key:'ultraPolygon',ru:'Ультра-полигон',       sides:12,col:'#ffaa00',str:'#cc8800',hp:45000, xp:143000, dmg:210,r:225},
    {key:'hugeSquare',      ru:'Огромный квадрат',         sides:4, col:'#cc2222',str:'#991111',hp:200,   xp:520,    dmg:20, r:32},
    {key:'hugeTriangle',    ru:'Огромный треугольник',     sides:3, col:'#882288',str:'#551155',hp:380,   xp:1000,   dmg:27, r:36},
    {key:'titanSquare',     ru:'Квадрат-титан',            sides:4, col:'#aa1111',str:'#770000',hp:800,   xp:2500,   dmg:36, r:46},
    {key:'titanTriangle',   ru:'Треугольник-титан',        sides:3, col:'#cc5500',str:'#993300',hp:1600,  xp:5500,   dmg:48, r:54},
    {key:'colossusSquare',  ru:'Квадрат-колосс',           sides:4, col:'#772244',str:'#440022',hp:4000,  xp:12000,  dmg:60, r:66},
    {key:'colossusTriangle',ru:'Треугольник-колосс',       sides:3, col:'#007766',str:'#004433',hp:7500,  xp:25000,  dmg:75, r:76},
    {key:'behemothSquare',  ru:'Квадрат-бегемот',          sides:4, col:'#660066',str:'#330033',hp:13000, xp:50000,  dmg:90, r:90},
    {key:'behemothTriangle',ru:'Треугольник-бегемот',      sides:3, col:'#aa7700',str:'#664400',hp:22000, xp:82000,  dmg:106,r:103},
    {key:'legendSquare',    ru:'Легендарный квадрат',      sides:4, col:'#888888',str:'#555555',hp:38000, xp:130000, dmg:132,r:120},
    {key:'legendTriangle',  ru:'Легендарный треугольник',  sides:3, col:'#0044dd',str:'#002299',hp:60000, xp:210000, dmg:155,r:135},
  ];
  function _pts(n,r,cx,cy){
    var p=[];
    for(var i=0;i<n;i++){
      var a=i/n*Math.PI*2-Math.PI/2;
      p.push((cx+Math.cos(a)*r).toFixed(1)+','+(cy+Math.sin(a)*r).toFixed(1));
    }
    return p.join(' ');
  }
  return D.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"linear-gradient(135deg,#0a0a1a 0%,#10102a 100%)",display:"flex",flexDirection:"column",overflow:"hidden"},
    children:D.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},
      children:[
        D.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderBottom:"1.5px solid rgba(255,255,255,0.10)",background:"rgba(6,8,22,0.98)",flexShrink:0},
          children:[
            D.jsx("div",{style:{color:"#f6e84c",fontFamily:"Arial",fontSize:18,fontWeight:"bold",letterSpacing:1},children:"📐 Все фигуры"}),
            D.jsx("div",{style:{color:"rgba(255,255,255,0.35)",fontFamily:"Arial",fontSize:11},children:"Характеристики всех фигур на карте"}),
            D.jsx("button",{onClick:onClose,style:{background:"rgba(200,40,40,0.22)",border:"1.5px solid rgba(220,60,60,0.5)",borderRadius:9,color:"#ff8888",fontFamily:"Arial",fontSize:13,fontWeight:"bold",padding:"7px 18px",cursor:"pointer",touchAction:"manipulation"},children:"✕ Закрыть"})
          ]
        }),
        D.jsx("div",{style:{flex:1,overflowY:"auto",padding:"14px 12px"},
          children:D.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:10,maxWidth:900,margin:"0 auto"},
            children:_d.map(function(sh){
              var sz=24;
              var pts=_pts(sh.sides,sz,32,32);
              return D.jsxs("div",{key:sh.key,style:{background:"rgba(10,14,38,0.96)",border:"1.5px solid "+sh.col+"66",borderRadius:14,padding:"12px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:7,boxShadow:"0 2px 12px rgba(0,0,0,0.5)"},
                children:[
                  D.jsx("svg",{width:64,height:64,viewBox:"0 0 64 64",children:
                    D.jsx("polygon",{points:pts,fill:sh.col,stroke:sh.str,strokeWidth:3.5,strokeLinejoin:"round"})
                  }),
                  D.jsx("div",{style:{color:"#ffffff",fontFamily:"Arial",fontSize:11,fontWeight:"bold",textAlign:"center",lineHeight:1.35},children:sh.ru}),
                  D.jsxs("div",{style:{width:"100%",background:"rgba(0,0,0,0.25)",borderRadius:8,padding:"7px 8px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px 8px",fontFamily:"Arial"},
                    children:[
                      D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[
                        D.jsx("span",{style:{color:"rgba(100,220,100,0.7)",fontSize:9,fontWeight:"bold",letterSpacing:.5},children:"HP"}),
                        D.jsx("span",{style:{color:"#7eff9a",fontSize:12,fontWeight:"bold"},children:sh.hp>=1000?(sh.hp/1000).toFixed(sh.hp%1000?1:0)+'K':sh.hp})
                      ]}),
                      D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[
                        D.jsx("span",{style:{color:"rgba(255,220,50,0.7)",fontSize:9,fontWeight:"bold",letterSpacing:.5},children:"ОПЫТ"}),
                        D.jsx("span",{style:{color:"#f6e84c",fontSize:12,fontWeight:"bold"},children:sh.xp>=1000?(sh.xp/1000).toFixed(sh.xp%1000?1:0)+'K':sh.xp})
                      ]}),
                      D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[
                        D.jsx("span",{style:{color:"rgba(255,100,80,0.7)",fontSize:9,fontWeight:"bold",letterSpacing:.5},children:"УРОН"}),
                        D.jsx("span",{style:{color:"#ff8866",fontSize:12,fontWeight:"bold"},children:sh.dmg})
                      ]}),
                      D.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:1},children:[
                        D.jsx("span",{style:{color:"rgba(150,180,255,0.7)",fontSize:9,fontWeight:"bold",letterSpacing:.5},children:"РАЗМЕР"}),
                        D.jsx("span",{style:{color:"#99bbff",fontSize:12,fontWeight:"bold"},children:sh.r})
                      ]}),
                    ]
                  })
                ]
              });
            })
          })
        })
      ]
    })
  });
}

function Dy({onStart:i,uiScale:_uiScV,setUiScale:_sUiScV}){if(window._gamePhase==="playing")return null;const[h,o]=cl.useState("Player"),[s,T]=cl.useState(!1),[Jt,ft]=cl.useState(!1),[_mo,_sm]=cl.useState("classic"),[_msOpen,_setMsOpen]=cl.useState(!1),[_stOpen,_setStOpen]=cl.useState(false),[_stTab,_setStTab]=cl.useState("ui"),[_shOpen,_setShOpen]=cl.useState(false);const _mds=[{id:"classic",icon:"🎯",nm:"Классика",ds:"Стандарт. Качай танк и уничтожай врагов."},{id:"survival",icon:"💥",nm:"Выживание",ds:"Зона сужается. Выживи последним!"},{id:"domination",icon:"🏴",nm:"Доминирование",ds:"Захвати 3 точки. Первый до 300."},{id:"zombie",icon:"🧟",nm:"Зомби",ds:"Выживи 3 минуты. Не заразись!"},{id:"horde",icon:"🌊",nm:"Волны",ds:"Бесконечные волны врагов!"},{id:"sniper",icon:"🔭",nm:"Снайперы",ds:"Только снайперские классы."}];const _mlv=parseInt(localStorage.getItem("diep_maxLevel")||"1"),_req={classic:0,sniper:15,survival:25,horde:35,domination:45,zombie:60};return D.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"Arial, sans-serif",zIndex:300,padding:20,overflowY:"auto"},children:D.jsxs("div",{style:{textAlign:"center",width:"100%",padding:"0 24px",boxSizing:"border-box"},children:[D.jsx("div",{style:{fontSize:52,fontWeight:900,color:"#00b2e1",textShadow:"0 0 30px #00b2e188, 0 4px 8px #000",marginBottom:4,letterSpacing:2},children:"DIEP"}),D.jsx("div",{style:{fontSize:16,color:"rgba(255,255,255,0.5)",marginBottom:20,letterSpacing:4},children:"CLONE"}),D.jsx("div",{style:{marginBottom:14},children:D.jsx("input",{value:h,onChange:v=>o(v.target.value.slice(0,16)),onKeyDown:v=>{v.key==="Enter"&&h.trim()&&i(h.trim(),_mo==="classic"&&Jt,_mo)},placeholder:"Ваш ник...",maxLength:16,style:{width:"100%",padding:"12px 18px",fontSize:16,borderRadius:10,border:"2px solid rgba(68,136,255,0.5)",background:"rgba(255,255,255,0.07)",color:"#fff",outline:"none",boxSizing:"border-box",textAlign:"center",letterSpacing:1}})}),_msOpen&&D.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.78)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>_setMsOpen(!1),children:D.jsxs("div",{style:{background:"#0d1525",border:"1.5px solid rgba(68,136,255,0.4)",borderRadius:16,padding:20,maxWidth:480,width:"100%",maxHeight:"85vh",overflowY:"auto"},onClick:e=>e.stopPropagation(),children:[D.jsx("div",{style:{color:"#c8a018",fontSize:15,fontWeight:"bold",textAlign:"center",marginBottom:14},children:"Выбери режим:"}),D.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:12},children:_mds.map(m=>D.jsxs("button",{onClick:()=>{const _lok=_mlv<(_req[m.id]||0);if(!_lok){_sm(m.id);_setMsOpen(!1);}},style:{padding:"10px 6px",borderRadius:12,border:!(_mlv<(_req[m.id]||0))&&_mo===m.id?"2px solid #00b2e1":"2px solid rgba(255,255,255,0.12)",background:!(_mlv<(_req[m.id]||0))&&_mo===m.id?"rgba(0,100,160,0.55)":"rgba(255,255,255,0.04)",color:!(_mlv<(_req[m.id]||0))&&_mo===m.id?"#fff":"rgba(255,255,255,0.55)",cursor:_mlv<(_req[m.id]||0)?"not-allowed":"pointer",textAlign:"center",transition:"all 0.15s",touchAction:"manipulation",position:"relative",overflow:"hidden"},children:[D.jsxs("div",{style:{filter:_mlv<(_req[m.id]||0)?"grayscale(1) blur(1.5px) brightness(0.4)":"none",transition:"filter 0.2s"},children:[D.jsx("div",{style:{fontSize:20,marginBottom:2},children:m.icon}),D.jsx("div",{style:{fontSize:11,fontWeight:"bold",marginBottom:2},children:m.nm}),D.jsx("div",{style:{fontSize:9,color:_mo===m.id?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.35)",lineHeight:1.3},children:m.ds})]}),_mlv<(_req[m.id]||0)&&D.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.55)",borderRadius:10},children:D.jsxs("div",{style:{textAlign:"center"},children:[D.jsx("div",{style:{fontSize:16},children:m.icon}),D.jsx("div",{style:{fontSize:9,color:"rgba(255,220,80,0.95)",fontWeight:"bold",marginTop:2},children:"Уровень "+(_req[m.id]||0)})]})})]},m.id))}),D.jsx("button",{onClick:()=>_setMsOpen(!1),style:{marginTop:8,width:"100%",padding:"9px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,color:"rgba(255,255,255,0.55)",cursor:"pointer",fontSize:13},children:"Закрыть"})]})}),D.jsx("button",{onClick:()=>_setMsOpen(!0),style:{width:"100%",padding:"11px 14px",borderRadius:12,border:"2px solid rgba(68,136,255,0.35)",background:"rgba(0,40,80,0.4)",color:"#fff",cursor:"pointer",textAlign:"left",marginBottom:16,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:13,touchAction:"manipulation"},children:[D.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[D.jsx("span",{style:{fontSize:18},children:(_mds.find(m=>m.id===_mo)||_mds[0]).icon}),D.jsxs("span",{children:[D.jsx("span",{style:{color:"rgba(255,255,255,0.45)",fontSize:11},children:"Режим: "}),D.jsx("span",{style:{fontWeight:"bold"},children:(_mds.find(m=>m.id===_mo)||_mds[0]).nm})]})]}),D.jsx("span",{style:{color:"rgba(255,255,255,0.45)",fontSize:12},children:"▼ выбрать"})]}),D.jsxs("div",{style:{display:"flex",gap:12,marginBottom:20},children:[_mo==="classic"?D.jsx("button",{onClick:()=>ft(v=>!v),style:{padding:"13px 18px",fontSize:14,fontWeight:"bold",borderRadius:12,border:Jt?"2px solid #4488ff":"2px solid rgba(255,255,255,0.2)",background:Jt?"rgba(30,60,140,0.8)":"rgba(30,30,50,0.6)",color:Jt?"#88ccff":"rgba(255,255,255,0.6)",cursor:"pointer",whiteSpace:"nowrap",touchAction:"manipulation"},children:Jt?"⚔ Команды ВКЛ":"⚔ Команды ВЫКЛ"}):null,D.jsx("button",{onClick:()=>h.trim()&&i(h.trim(),_mo==="classic"&&Jt,_mo),disabled:!h.trim(),style:{flex:1,padding:"13px",fontSize:18,fontWeight:"bold",borderRadius:12,border:"none",background:h.trim()?"linear-gradient(90deg,#0098c8,#44b4e0)":"rgba(100,100,100,0.4)",color:h.trim()?"#fff":"#888",cursor:h.trim()?"pointer":"default",boxShadow:h.trim()?"0 4px 16px #00b2e155":"none",transition:"all 0.2s"},children:"Играть"}),D.jsx("button",{onClick:()=>T(v=>!v),style:{padding:"13px 18px",fontSize:15,fontWeight:"bold",borderRadius:12,border:"2px solid rgba(255,200,50,0.4)",background:s?"rgba(255,200,50,0.15)":"rgba(255,255,255,0.05)",color:"#c8a018",cursor:"pointer",transition:"all 0.2s",whiteSpace:"nowrap"},children:"🌿 Дерево"}),D.jsx("button",{onClick:()=>_setShOpen(true),style:{padding:"13px 18px",fontSize:15,fontWeight:"bold",borderRadius:12,border:"2px solid rgba(100,200,255,0.4)",background:"rgba(0,40,80,0.4)",color:"#88ddff",cursor:"pointer",transition:"all 0.2s",whiteSpace:"nowrap",touchAction:"manipulation"},children:"📐 Фигуры"})]}),s&&D.jsx(zy,{onClose:()=>T(false)}),_shOpen&&D.jsx(ShapesGuide,{onClose:()=>_setShOpen(false)}),!s&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:12,lineHeight:1.8},children:[D.jsx("div",{style:{fontWeight:"bold",color:"rgba(255,255,255,0.45)",marginBottom:4},children:"Управление:"}),D.jsx("div",{children:"WASD / Стрелки — движение  |  Мышь — прицел  |  ЛКМ / Пробел — стрельба"}),D.jsx("div",{style:{marginTop:2},children:"📱 Два джойстика на мобильном — касайтесь в любом месте"})]}),D.jsx("div",{style:{marginTop:14,display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:["Уничтожай фигуры","Прокачивай танк","Бейся с NPC",D.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:8},children:D.jsx("button",{onClick:()=>_setStOpen(true),style:{padding:"8px 16px",borderRadius:10,border:"1.5px solid rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.7)",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",gap:6,touchAction:"manipulation"},children:["⚙ Настройки"]})}),"Выбирай классы"].map(v=>D.jsx("span",{style:{background:"rgba(68,136,255,0.12)",border:"1px solid rgba(68,136,255,0.28)",borderRadius:20,padding:"4px 12px",fontSize:11,color:"rgba(255,255,255,0.55)"},children:v},v))})]}),_stOpen&&D.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.82)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>_setStOpen(false),children:D.jsxs("div",{style:{background:"#0d1525",border:"1.5px solid rgba(68,136,255,0.4)",borderRadius:18,padding:24,maxWidth:400,width:"100%",maxHeight:"85vh",overflowY:"auto"},onClick:e=>e.stopPropagation(),children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[D.jsx("div",{style:{color:"#fff",fontSize:18,fontWeight:"bold"},children:"⚙ Настройки"}),D.jsx("button",{onClick:()=>_setStOpen(false),style:{background:"none",border:"none",color:"rgba(255,255,255,0.5)",fontSize:20,cursor:"pointer",padding:"0 4px"},children:"✕"})]}),D.jsxs("div",{style:{display:"flex",gap:8,marginBottom:20},children:[D.jsx("button",{onClick:()=>_setStTab("ui"),style:{flex:1,padding:"8px",borderRadius:8,border:"none",fontWeight:"bold",fontSize:13,cursor:"pointer",background:_stTab==="ui"?"rgba(0,120,200,0.7)":"rgba(255,255,255,0.07)",color:_stTab==="ui"?"#fff":"rgba(255,255,255,0.45)"},children:"🎛 Интерфейс"}),D.jsx("button",{onClick:()=>_setStTab("game"),style:{flex:1,padding:"8px",borderRadius:8,border:"none",fontWeight:"bold",fontSize:13,cursor:"pointer",background:_stTab==="game"?"rgba(0,120,200,0.7)":"rgba(255,255,255,0.07)",color:_stTab==="game"?"#fff":"rgba(255,255,255,0.45)"},children:"🎮 Управление"})]}),_stTab==="ui"&&D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[D.jsxs("div",{children:[D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[D.jsx("span",{style:{color:"#c0d8f0",fontSize:14,fontWeight:"bold"},children:"Размер UI"}),D.jsx("span",{style:{color:"#4af",fontSize:14,fontWeight:"bold"},children:Math.round((_uiScV||1)*100)+"%"})]}),D.jsx("input",{type:"range",min:"0.4",max:"2.5",step:"0.05",value:_uiScV||1,onInput:function(e){const v=parseFloat(e.target.value);_sUiScV&&_sUiScV(v);localStorage.setItem("diep_uiScale",String(v));},style:{width:"100%",accentColor:"#4488ff",cursor:"pointer",height:32}}),D.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4},children:[D.jsx("span",{style:{color:"rgba(255,255,255,0.3)",fontSize:11},children:"40% — маленький"}),D.jsx("span",{style:{color:"rgba(255,255,255,0.3)",fontSize:11},children:"250% — большой"})]})]}),D.jsx("button",{onClick:()=>{const def=Math.max(0.4,Math.min(2.5,Math.min(window.innerWidth,window.innerHeight)/420));_sUiScV&&_sUiScV(def);localStorage.removeItem("diep_uiScale");},style:{padding:"9px",borderRadius:10,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.05)",color:"rgba(255,255,255,0.5)",fontSize:13,cursor:"pointer",width:"100%"},children:"↺ Сбросить по умолчанию"})]}),_stTab==="game"&&D.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[D.jsx("div",{style:{color:"rgba(255,255,255,0.4)",fontSize:13,textAlign:"center",padding:"20px 0"},children:"⌨ Управление"}),D.jsxs("div",{style:{color:"rgba(255,255,255,0.6)",fontSize:13,lineHeight:2},children:["WASD / Стрелки — движение",D.jsx("br",{}),"Мышь — прицел  |  ЛКМ — стрельба",D.jsx("br",{}),"📱 Левый джойстик — движение",D.jsx("br",{}),"📱 Правый джойстик — прицел + стрельба"]})]})]})}),null]})});}const J0=()=>window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768;function _ModeLbl({mode:_m,lbl:_l,uiScale:_mlSc}){if(!_l)return null;return D.jsx("div",{style:{position:"absolute",top:68,left:"50%",transform:"translateX(-50%) scale("+(_mlSc||1)+")",transformOrigin:"top center",background:"rgba(0,0,0,0.68)",borderRadius:10,padding:"6px 18px",color:"#fff",fontFamily:"Arial",fontSize:13,fontWeight:"bold",zIndex:160,pointerEvents:"none",whiteSpace:"nowrap",letterSpacing:0.5},children:_l});}function FsBtn(){return null;}function Ry(){const i=cl.useRef(null),h=cl.useRef(G0()),o=cl.useRef({moveX:0,moveY:0,aimX:0,aimY:0,shooting:!1,shootAngle:0}),s=cl.useRef(new Set),T=cl.useRef({x:0,y:0,down:!1}),v=cl.useRef(0),[E,B]=cl.useState(0),[z,p]=cl.useState(J0()),d=cl.useCallback(()=>{const W=i.current;return W?Math.min(W.width/900,W.height/600,1.4):1},[]),U=cl.useCallback((W,tm=!1,gm="classic")=>{const G=G0(tm,gm);G.player.name=W;{const _wdsp=W==="White Devil",_sgsp=W==="SeraGON";if(_wdsp){G.player._glowColor="#ff1a1a";G.player.statPoints=1;}else if(_sgsp){G.player._glowColor="#9b30ff";G.player.statPoints=1;}if(_wdsp||_sgsp){const _lel=document.createElement("div");const _lgc=_wdsp?"#ff1a1a":"#9b30ff";_lel.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;color:#fff;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;text-align:center;text-shadow:0 0 20px "+_lgc+",0 0 40px "+_lgc+";pointer-events:none;opacity:1;transition:opacity 1.2s;line-height:1.8;";_lel.innerHTML=_wdsp?"&#9760; WHITE DEVIL<br><span style=\"font-size:9px\">Явился. Арена содрогается.</span>":"&#9670; SERAGON<br><span style=\"font-size:9px\">Врата тьмы — открыты.</span>";document.body.appendChild(_lel);setTimeout(()=>{_lel.style.opacity="0";setTimeout(()=>_lel.remove(),1300);},2800);}}G.phase="playing",h.current=G,window._gamePhase="playing",window._playerAlive=true,B(al=>al+1)},[]),H=cl.useCallback(()=>{h.current.phase="menu",window._gamePhase="menu",B(W=>W+1)},[]),k=cl.useCallback(W=>{ny(h.current.player,W),B(G=>G+1)},[]),L=cl.useCallback(W=>{iy(h.current,W),B(G=>G+1)},[]),K=cl.useCallback((W,G)=>{o.current.moveX=W,o.current.moveY=G},[]),sl=cl.useCallback((W,G)=>{o.current.aimX=W,o.current.aimY=G},[]),ut=cl.useCallback((W,G,al)=>{o.current.shooting=W,W&&(G!==0||al!==0)&&(o.current.aimX=G,o.current.aimY=al)},[]);cl.useEffect(()=>{const W=al=>{al.type==="keydown"?s.current.add(al.code):s.current.delete(al.code)},G=al=>{const Tl=i.current;if(!Tl)return;const Bl=Tl.getBoundingClientRect(),vl=d();T.current.x=(al.clientX-Bl.left)/vl-Tl.width/(2*vl),T.current.y=(al.clientY-Bl.top)/vl-Tl.height/(2*vl),al.type==="mousedown"&&(T.current.down=!0),(al.type==="mouseup"||al.type==="mouseleave")&&(T.current.down=!1)};return window.addEventListener("keydown",W),window.addEventListener("keyup",W),window.addEventListener("mousemove",G),window.addEventListener("mousedown",G),window.addEventListener("mouseup",G),window.addEventListener("contextmenu",al=>al.preventDefault()),()=>{window.removeEventListener("keydown",W),window.removeEventListener("keyup",W),window.removeEventListener("mousemove",G),window.removeEventListener("mousedown",G),window.removeEventListener("mouseup",G)}},[d]),cl.useEffect(()=>{const W=()=>{p(J0());const G=i.current;G&&(G.width=G.offsetWidth,G.height=G.offsetHeight)};return window.addEventListener("resize",W),W(),()=>window.removeEventListener("resize",W)},[]),cl.useEffect(()=>{let W=0,_gLt=0;const G=(ts)=>{const _gDt=Math.min(_gLt?ts-_gLt:16.7,50);_gLt=ts;const al=h.current;if(al.phase==="playing"){const Tl=o.current;if(!z){const vl=s.current,Rt=T.current;let $l=0,zl=0;(vl.has("KeyW")||vl.has("ArrowUp"))&&(zl-=1),(vl.has("KeyS")||vl.has("ArrowDown"))&&(zl+=1),(vl.has("KeyA")||vl.has("ArrowLeft"))&&($l-=1),(vl.has("KeyD")||vl.has("ArrowRight"))&&($l+=1);const mt=Math.sqrt($l*$l+zl*zl);Tl.moveX=mt>0?$l/mt:0,Tl.moveY=mt>0?zl/mt:0,Tl.aimX=Rt.x,Tl.aimY=Rt.y,Tl.shooting=Rt.down||vl.has("Space")}if(!_psdRef.current){if(al.phase==="playing"){fy(al,Tl,_gDt),W++,W%7===0&&B(vl=>vl+1)}const Bl=i.current;Bl&&ry(Bl,al,d()/1.3)}}(al.phase==="dead"||al.phase==="won")&&(window._gamePhase!==al.phase&&(window._gamePhase=al.phase),window._playerAlive=!!(al.player&&al.player.health>0),!al._saved&&(al._saved=!0,localStorage.setItem("diep_maxLevel",String(Math.max(parseInt(localStorage.getItem("diep_maxLevel")||"1"),al.player.level)))),B(vl=>vl+1));v.current=requestAnimationFrame(G)};return v.current=requestAnimationFrame(G),()=>cancelAnimationFrame(v.current)},[z,d]);const _initUiSc=()=>{const _sv=parseFloat(localStorage.getItem("diep_uiScale")||"0");return _sv>0?_sv:Math.max(0.4,Math.min(2.5,Math.min(window.innerWidth,window.innerHeight)/420));};const[_uiScV,_sUiScV]=cl.useState(_initUiSc);const[_psd,_sPsd]=cl.useState(false);const[_ptree,_sPtree]=cl.useState(false);const _psdRef=cl.useRef(false);const _ptreeRef=cl.useRef(false);cl.useEffect(()=>{_psdRef.current=_psd;},[_psd]);cl.useEffect(()=>{_ptreeRef.current=_ptree;},[_ptree]);cl.useEffect(()=>{window.__gamePause=()=>{if(h.current.phase==="playing"){if(_ptreeRef.current){_sPtree(false);}else{_sPsd(p=>{const next=!p;if(next)_sPtree(false);return next;});}}};},[]);const pl=h.current,dl=pl.player;return D.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:"#111"},children:[D.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:1}}),pl.phase==="menu"&&D.jsx(Dy,{onStart:U,uiScale:_uiScV,setUiScale:_sUiScV}),pl.phase==="playing"&&D.jsxs(D.Fragment,{children:[_psd&&D.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.82)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:900,fontFamily:"Arial",touchAction:"manipulation"},children:[_ptree?D.jsx(zy,{onClose:()=>_sPtree(false)}):D.jsxs("div",{style:{background:"rgba(10,15,40,0.98)",border:"1.5px solid rgba(68,136,255,0.4)",borderRadius:18,padding:"32px 40px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,minWidth:260,zoom:_uiScV},children:[D.jsx("div",{style:{color:"#fff",fontSize:22,fontWeight:"bold",marginBottom:4},children:"⏸ Пауза"}),D.jsx("button",{onPointerDown:e=>{e.stopPropagation();_sPsd(false);},style:{width:"100%",padding:"13px",fontSize:16,fontWeight:"bold",borderRadius:12,border:"2px solid rgba(68,136,255,0.5)",background:"rgba(30,60,140,0.7)",color:"#fff",cursor:"pointer",touchAction:"manipulation"},children:"▶  Продолжить"}),D.jsxs("div",{style:{width:"100%",padding:"6px 2px 10px"},children:[D.jsx("div",{style:{color:"#b0c8f0",fontFamily:"Arial",fontSize:13,fontWeight:"bold",marginBottom:6,textAlign:"center"},children:"🎛 Размер интерфейса: "+Math.round(_uiScV*100)+"%"}),D.jsx("input",{type:"range",min:"0.4",max:"2.5",step:"0.05",value:_uiScV,onInput:function(e){const v=parseFloat(e.target.value);_sUiScV(v);localStorage.setItem("diep_uiScale",String(v));},style:{width:"100%",accentColor:"#4488ff",cursor:"pointer",height:28}})]}),D.jsx("button",{onPointerDown:e=>{e.stopPropagation();_sPtree(true);},style:{width:"100%",padding:"13px",fontSize:16,fontWeight:"bold",borderRadius:12,border:"2px solid rgba(200,160,24,0.5)",background:"rgba(80,60,10,0.5)",color:"#c8a018",cursor:"pointer",touchAction:"manipulation"},children:"🌿 Дерево"}),D.jsx("button",{onPointerDown:e=>{e.stopPropagation();_sPsd(false);H();},style:{width:"100%",padding:"13px",fontSize:16,fontWeight:"bold",borderRadius:12,border:"2px solid rgba(255,160,30,0.4)",background:"rgba(80,40,10,0.5)",color:"#ffaa44",cursor:"pointer",touchAction:"manipulation"},children:"🏠 Выйти в меню"}),D.jsx("button",{onPointerDown:e=>{e.stopPropagation();if(window.Android&&window.Android.exitApp)window.Android.exitApp();},style:{width:"100%",padding:"13px",fontSize:16,fontWeight:"bold",borderRadius:12,border:"2px solid rgba(200,40,40,0.4)",background:"rgba(80,10,10,0.5)",color:"#ff6060",cursor:"pointer",touchAction:"manipulation"},children:"✕ Выйти из игры"})]})]}),z&&dl&&dl.health>0&&D.jsx(yy,{onLeftMove:K,onRightMove:sl,onRightShoot:ut}),D.jsx("div",{style:{position:"absolute",top:12,left:12,zIndex:150,pointerEvents:"none",zoom:_uiScV},children:D.jsx(gy,{state:pl})}),D.jsx("div",{style:{position:"absolute",top:12,right:12,zIndex:150,pointerEvents:"none"},children:D.jsx(Sy,{entries:pl.leaderboard,uiScale:_uiScV})}),D.jsx(my,{player:dl,kills:pl.kills,gameTime:pl.gameTime,teamMode:pl.teamMode,teamScore:pl.teamScore,uiScale:_uiScV}),D.jsx(vy,{player:dl,onUpgrade:k,uiScale:_uiScV}),pl.gameMode==="domination"&&D.jsx(_DomHUD,{state:pl,uiScale:_uiScV}),(["survival","domination","zombie","horde","sniper"].includes(pl.gameMode)&&D.jsx(_ModeLbl,{key:pl.gameMode,uiScale:_uiScV,mode:pl.gameMode,lbl:pl.gameMode==="domination"?null:pl.gameMode==="survival"?"💥 NPC: "+pl.npcs.length+" · Зона: "+Math.round(pl.zoneRadius||0):pl.gameMode==="domination"?"🏴 Вы: "+(pl.domScore&&pl.domScore.player||0)+" / NPC: "+(pl.domScore&&pl.domScore.npc||0)+" (до 1000)":pl.gameMode==="zombie"?"🧟 Выживи: "+Math.floor(((pl.zombieTimer)||0)/1000)+"с":pl.gameMode==="horde"?("🌊 Волна "+(pl.waveNumber||0)+(pl.npcs.length===0?" · Пауза "+Math.ceil((pl.waveTimer||1)/1000)+"с":" · "+pl.npcs.length+" врагов")):pl.gameMode==="sniper"?"🔭 Снайперский режим":""})),pl.showUpgradeClass&&D.jsx(by,{availableClasses:pl.availableClasses,onSelect:L,uiScale:_uiScV}),pl.classUnlockNotifs&&pl.classUnlockNotifs.length>0&&D.jsx("div",{style:{position:"absolute",right:16,top:120,display:"flex",flexDirection:"column",gap:10,zIndex:550,pointerEvents:"none",zoom:_uiScV},children:pl.classUnlockNotifs.map((n,_ni)=>D.jsxs("div",{style:{background:"rgba(10,10,26,0.95)",border:"1px solid rgba(200,160,24,0.6)",borderRadius:10,padding:"10px 16px",width:210,opacity:Math.min(1,n.timer/40),boxShadow:"0 2px 18px rgba(0,0,0,0.55)"},children:[D.jsx("div",{style:{color:"#c8a018",fontSize:11,marginBottom:4,fontFamily:"Arial",letterSpacing:.8},children:"🔓 РАЗБЛОКИРОВАНО"}),D.jsx("div",{style:{color:"#fff",fontSize:15,fontWeight:"bold",fontFamily:"Arial"},children:W1[n.name]||n.name}),D.jsx("div",{style:{color:"#bbb",fontSize:11,marginTop:3,fontFamily:"Arial",lineHeight:1.4},children:_t[n.name]&&_t[n.name].description||""})]},_ni))})]}),pl.phase==="won"&&D.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.75)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:700,fontFamily:"Arial"},children:[D.jsx("div",{style:{fontSize:52,fontWeight:"bold",color:"#22cc55",marginBottom:8,textShadow:"0 0 25px #00ff8888"},children:"Победа! 🏆"}),D.jsx("div",{style:{color:"rgba(255,255,255,0.6)",fontSize:16,marginBottom:4},children:pl.gameMode==="survival"?"Ты последний выживший!":pl.gameMode==="domination"?"Вы захватили все точки!":pl.gameMode==="zombie"?"Выжил среди зомби!":pl.gameMode==="horde"?"Отличный результат! Волна: "+(pl.waveNumber||0):""}),D.jsxs("div",{style:{color:"rgba(255,255,255,0.5)",fontSize:14,marginBottom:4},children:["Уровень: ",dl.level,"  |  Убийств: ",pl.kills]}),D.jsxs("div",{style:{color:"#c8a018",fontSize:22,fontWeight:"bold",marginBottom:28},children:["Очки: ",dl.score]}),D.jsx("button",{onPointerDown:H,style:{padding:"13px 36px",fontSize:18,fontWeight:"bold",borderRadius:10,border:"none",background:"linear-gradient(90deg,#22aa44,#44cc66)",color:"#fff",cursor:"pointer",boxShadow:"0 4px 16px #00aa4455",touchAction:"manipulation"},children:"Играть снова"})]}),pl.phase==="dead"&&D.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.72)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:700,fontFamily:"Arial"},children:[D.jsx("div",{style:{fontSize:42,fontWeight:"bold",color:"#c03030",marginBottom:8,textShadow:"0 0 20px #ff000088"},children:"Вы уничтожены!"}),D.jsxs("div",{style:{color:"rgba(255,255,255,0.55)",fontSize:16,marginBottom:4},children:["Уровень: ",dl.level,"  |  Убийств: ",pl.kills]}),D.jsxs("div",{style:{color:"#c8a018",fontSize:22,fontWeight:"bold",marginBottom:28},children:["Очки: ",dl.score]}),D.jsx("button",{onPointerDown:H,style:{padding:"13px 36px",fontSize:18,fontWeight:"bold",borderRadius:10,border:"none",background:"linear-gradient(90deg,#0098c8,#44b4e0)",color:"#fff",cursor:"pointer",boxShadow:"0 4px 16px #00b2e144",touchAction:"manipulation"},children:"Играть снова"})]})]})}function Oy(){return D.jsx("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",background:"#111"},children:D.jsx(Ry,{})})}U1.createRoot(document.getElementById("root")).render(D.jsx(Oy,{}));
;(function patchJoystickCleanup(){
  var _lastPhase='';

  function _clearOverlays(){
    // Remove/clear the _vOvl overlay canvases (z-index:81) appended to body by hy()
    var bodyCanvases=document.querySelectorAll('body>canvas');
    bodyCanvases.forEach(function(c){
      var zi=c.style.zIndex;
      if(zi==='81'||zi===81||zi==='80'||zi===80){
        try{var ctx=c.getContext('2d');if(ctx)ctx.clearRect(0,0,c.width,c.height);}catch(e){}
        c.style.display='none';
      }
    });
  }

  function _hideJoy(){
    // Dispatch touchcancel + hide the z-index:80 joystick canvases in #root
    var canvases=document.querySelectorAll('#root canvas');
    canvases.forEach(function(c){
      var zi=c.style.zIndex;
      if(zi==='80'||zi===80){
        try{c.dispatchEvent(new TouchEvent('touchcancel',{bubbles:true,cancelable:true,touches:[],targetTouches:[],changedTouches:[]}));}catch(e){}
        try{var ctx=c.getContext('2d');if(ctx)ctx.clearRect(0,0,c.width,c.height);}catch(e){}
        c.style.display='none';
        c.style.pointerEvents='none';
        // Clear and hide its _vOvl overlay if still attached
        if(c._vOvl){
          try{var oc=c._vOvl.getContext('2d');if(oc)oc.clearRect(0,0,c._vOvl.width,c._vOvl.height);}catch(e){}
          c._vOvl.style.display='none';
        }
      }
    });
    // Also catch any orphaned overlays left in body after unmount
    _clearOverlays();
  }

  function _showJoy(){
    var canvases=document.querySelectorAll('#root canvas');
    canvases.forEach(function(c){
      var zi=c.style.zIndex;
      if(zi==='80'||zi===80){
        c.style.display='block';
        c.style.pointerEvents='auto';
        if(c._vOvl)c._vOvl.style.display='block';
      }
    });
    // Show body overlays
    var bodyCanvases=document.querySelectorAll('body>canvas');
    bodyCanvases.forEach(function(c){
      var zi=c.style.zIndex;
      if(zi==='81'||zi===81){c.style.display='block';}
    });
  }

  function _cleanJoy(){
    var phase=window._gamePhase||'menu';
    var wasPlaying=_lastPhase==='playing';
    if(phase!=='playing'&&wasPlaying){_hideJoy();}
    if(phase==='playing'){_showJoy();}
    else{_clearOverlays();}
    _lastPhase=phase;
    setTimeout(_cleanJoy,100);
  }
  setTimeout(_cleanJoy,800);
})();


// ── isSplitting + isRangeBoost ENGINE MECHANICS ──────────────────────────────
// Engine line 9 has 3 patches injected:
//   Patch-A: bullet creation now includes isSplitting flag on bullet object
//   Patch-B: after i.bullets.push(..s..) splitting bullets are registered in
//            window._activeSplitBullets keyed by their id
//   Patch-C: before i.bullets.filter cleanup, window._splitQueue is flushed
//            into i.bullets so externally spawned fragment bullets survive
;(function patchSplittingAndRangeBoost(){

  // ── 1. isRangeBoost: 2× bullet lifetime = 2× effective firing range ────────
  // The engine reads _t[className].bulletLifeMultiplier natively at bullet-spawn
  // time: lifetime = Math.round(q0 * bulletLifeMultiplier)
  // Setting 2.0 doubles every Longshot-branch bullet's travel distance.
  Object.keys(_t).forEach(function(k){
    var td=_t[k];
    if(!td||!td.isRangeBoost)return;
    // Guard: don't clobber if a previous patch already set a non-default value
    if(!td.bulletLifeMultiplier||td.bulletLifeMultiplier===1){
      td.bulletLifeMultiplier=2.0;
    }
  });

  // ── 2. isSplitting: fragment lifetime = 0.65× (close-range shrapnel feel) ──
  // Splitter-branch tanks already have multi-barrel spread configs that produce
  // the visual "splitting" pattern.  Reducing lifetime to 65 % makes each
  // spread pellet behave like a short-range fragment (shotgun shrapnel) rather
  // than a full-range bullet, which is the correct mechanical feel.
  Object.keys(_t).forEach(function(k){
    var td=_t[k];
    if(!td||!td.isSplitting)return;
    if(!td.bulletLifeMultiplier||td.bulletLifeMultiplier===1){
      td.bulletLifeMultiplier=0.65;
    }
  });

  // ── 3. Mid-flight impact split via _splitQueue / _activeSplitBullets ───────
  // Engine Patch-B registers every newly-fired splitting bullet into
  // window._activeSplitBullets = { [id]: {px,py,vx,vy,r,dmg,life,isNpc,team,col,age,splitAt} }
  // Each rAF tick we advance the simulated position by (vx,vy) and, when
  // age === splitAt (~42 % through lifetime = mid-flight), we push 4 radial
  // fragment bullets into window._splitQueue.
  // Engine Patch-C flushes _splitQueue into i.bullets before the cleanup step,
  // so the fragments are live game entities (not in set B, so they survive).

  window._splitQueue          = window._splitQueue          || [];
  window._activeSplitBullets  = window._activeSplitBullets  || {};

  var _fragIdN = Date.now();
  function _fragId(){ return '_f'+(++_fragIdN); }

  function _spawnFragments(rec){
    var n   = 4;
    var spd = Math.sqrt(rec.vx*rec.vx + rec.vy*rec.vy) * 1.15;
    var base= Math.atan2(rec.vy, rec.vx);
    for(var i=0;i<n;i++){
      var a   = base + (i/n)*Math.PI*2;
      window._splitQueue.push({
        id          : _fragId(),
        pos         : {x: rec.px, y: rec.py},
        vel         : {x: Math.cos(a)*spd, y: Math.sin(a)*spd},
        radius      : rec.r  * 0.52,
        damage      : rec.dmg* 0.38,
        penetration : 1,
        ownerId     : '_split',
        isNpc       : rec.isNpc,
        allyTeam    : rec.team || null,
        color       : rec.col  || '#22cc55',
        lifetime    : 32,
        maxLifetime : 32,
        isHoming    : false,
        isDrone     : false,
        isTrap      : false,
        isLaser     : false,
        isRocket    : false,
        isSplitting : false   // fragments do NOT re-split
      });
    }
  }

  function _tickSplits(){
    var amap = window._activeSplitBullets;
    var keys = Object.keys(amap);
    for(var ki=0;ki<keys.length;ki++){
      var id  = keys[ki];
      var rec = amap[id];
      // Advance simulated position (mirrors engine: pos += vel each tick)
      rec.px += rec.vx;
      rec.py += rec.vy;
      rec.age++;
      if(rec.age === rec.splitAt){
        _spawnFragments(rec);
        delete amap[id];
      } else if(rec.age > rec.life + 4){
        // Bullet expired without triggering split (edge case cleanup)
        delete amap[id];
      }
    }
    requestAnimationFrame(_tickSplits);
  }
  requestAnimationFrame(_tickSplits);

})();
