"use strict";exports.id=474,exports.ids=[474],exports.modules={474:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(1261),i=r.n(n)},512:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(4985),i=r(740),o=r(687),l=i._(r(3210)),a=n._(r(7755)),s=r(4959),d=r(9513),u=r(4604);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(148);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t))if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,l.useContext)(s.AmpStateContext),n=(0,l.useContext)(d.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1261:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return a}});let n=r(4985),i=r(4953),o=r(6533),l=n._(r(1933));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},1480:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,d=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1933:(e,t)=>{function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,l=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+l+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},2756:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},4604:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4953:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(148);let n=r(1480),i=r(2756),o=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r,s;let d,u,c,{src:f,sizes:p,unoptimized:m=!1,priority:g=!1,loading:h,className:v,quality:b,width:y,height:_,fill:w=!1,style:x,overrideSrc:j,onLoad:S,onLoadingComplete:O,placeholder:E="empty",blurDataURL:P,fetchPriority:C,decoding:R="async",layout:z,objectFit:M,objectPosition:I,lazyBoundary:A,lazyRoot:k,...D}=e,{imgConf:T,showAltText:N,blurComplete:F,defaultLoader:U}=t,L=T||i.imageConfigDefault;if("allSizes"in L)d=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),n=null==(r=L.qualities)?void 0:r.sort((e,t)=>e-t);d={...L,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let G=D.loader||U;delete D.loader,delete D.srcSet;let B="__next_img_default"in G;if(B){if("custom"===d.loader)throw Object.defineProperty(Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=G;G=t=>{let{config:r,...n}=t;return e(n)}}if(z){"fill"===z&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!p&&(p=t)}let q="",W=a(y),X=a(_);if((s=f)&&"object"==typeof s&&(l(s)||void 0!==s.src)){let e=l(f)?f.default:f;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,c=e.blurHeight,P=P||e.blurDataURL,q=e.src,!w)if(W||X){if(W&&!X){let t=W/e.width;X=Math.round(e.height*t)}else if(!W&&X){let t=X/e.height;W=Math.round(e.width*t)}}else W=e.width,X=e.height}let V=!g&&("lazy"===h||void 0===h);(!(f="string"==typeof f?f:q)||f.startsWith("data:")||f.startsWith("blob:"))&&(m=!0,V=!1),d.unoptimized&&(m=!0),B&&!d.dangerouslyAllowSVG&&f.split("?",1)[0].endsWith(".svg")&&(m=!0);let H=a(b),$=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:I}:{},N?{}:{color:"transparent"},x),J=F||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:X,blurWidth:u,blurHeight:c,blurDataURL:P||"",objectFit:$.objectFit})+'")':'url("'+E+'")',Y=o.includes($.objectFit)?"fill"===$.objectFit?"100% 100%":"cover":$.objectFit,Z=J?{backgroundSize:Y,backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},K=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),u=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:s[u]})}}({config:d,src:f,unoptimized:m,width:W,quality:H,sizes:p,loader:G});return{props:{...D,loading:V?"lazy":h,fetchPriority:C,width:W,height:X,decoding:R,className:v,style:{...$,...Z},sizes:K.sizes,srcSet:K.srcSet,src:j||K.src},meta:{unoptimized:m,priority:g,placeholder:E,fill:w}}}},4959:(e,t,r)=>{e.exports=r(4041).vendored.contexts.AmpContext},6533:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(4985),i=r(740),o=r(687),l=i._(r(3210)),a=n._(r(1215)),s=n._(r(512)),d=r(4953),u=r(2756),c=r(7903);r(148);let f=r(9148),p=n._(r(1933)),m=r(3038),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function v(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:b,fill:y,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:j,sizesInput:S,onLoad:O,onError:E,...P}=e,C=(0,l.useCallback)(e=>{e&&(E&&(e.src=e.src),e.complete&&h(e,p,_,w,x,b,S))},[r,p,_,w,x,E,b,S]),R=(0,m.useMergedRef)(t,C);return(0,o.jsx)("img",{...P,...v(f),loading:g,width:s,height:a,decoding:d,"data-nimg":y?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:R,onLoad:e=>{h(e.currentTarget,p,_,w,x,b,S)},onError:e=>{j(!0),"empty"!==p&&x(!0),E&&E(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{var e;let t=g||n||u.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:a,onLoadingComplete:s}=e,m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let[v,_]=(0,l.useState)(!1),[w,x]=(0,l.useState)(!1),{props:j,meta:S}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:x,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7755:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(3210),i=()=>{},o=()=>{};function l(e){var t;let{headManager:r,reduceComponentsToState:l}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(l(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},7903:(e,t,r)=>{e.exports=r(4041).vendored.contexts.ImageConfigContext},9148:(e,t,r)=>{e.exports=r(4041).vendored.contexts.RouterContext}};