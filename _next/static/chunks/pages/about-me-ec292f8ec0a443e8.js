(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{9372:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-me",function(){return n(6828)}])},1049:function(e){"use strict";e.exports=function(e){var t=e.src;return"/images/".concat(t)}},9749:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return r}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,l=void 0!==i&&i,s=e.priority,c=void 0!==s&&s,g=e.loading,b=e.lazyRoot,j=void 0===b?null:b,z=e.lazyBoundary,O=void 0===z?"200px":z,E=e.className,I=e.quality,P=e.width,R=e.height,L=e.style,C=e.objectFit,q=e.objectPosition,D=e.onLoadingComplete,M=e.placeholder,B=void 0===M?"empty":M,U=e.blurDataURL,W=_(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),G=u.useContext(h.ImageConfigContext),F=u.useMemo((function(){var e=y||G||m.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[G]),H=W,T=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(T=H.layout),delete H.layout);var V=A;if("loader"in H){if(H.loader){var J=H.loader;V=function(e){e.config;var t=_(e,["config"]);return J(t)}}delete H.loader}var K="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var X=x(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(U=U||X.blurDataURL,K=X.src,(!T||"fill"!==T)&&(R=R||X.height,P=P||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:K;var Q=S(P),Z=S(R),$=S(I),Y=!c&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Y=!1);v.has(t)&&(Y=!1);var ee,te=r(u.useState(!1),2),ne=te[0],ie=te[1],oe=r(f.useIntersection({rootRef:j,rootMargin:O,disabled:!Y}),3),re=oe[0],ae=oe[1],le=oe[2],se=!Y||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,me={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:q};0;0;var fe=Object.assign({},L,"raw"===T?{}:me),he="blur"!==B||ne?{}:{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:q||"0% 0%"};if("fill"===T)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof Z){var ge=Z/Q,be=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===T?(ce.display="block",ce.position="relative",de=!0,ue.paddingTop=be):"intrinsic"===T?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===T&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=Z)}else 0;var pe={src:w,srcSet:void 0,sizes:void 0};se&&(pe=k({config:F,src:t,unoptimized:l,layout:T,width:Q,quality:$,sizes:n,loader:V}));var _e=t;0;var ye,ve="imagesrcset",we="imagesizes";ve="imageSrcSet",we="imageSizes";var je=(o(ye={},ve,pe.srcSet),o(ye,we,pe.sizes),ye),xe=u.default.useLayoutEffect,ke=u.useRef(D),Se=u.useRef(t);u.useEffect((function(){ke.current=D}),[D]),xe((function(){Se.current!==t&&(le(),Se.current=t)}),[le,t]);var Ae=p({isLazy:Y,imgAttributes:pe,heightInt:Z,widthInt:Q,qualityInt:$,layout:T,className:E,imgStyle:fe,blurStyle:he,loading:g,config:F,unoptimized:l,placeholder:B,loader:V,srcString:_e,onLoadingCompleteRef:ke,setBlurComplete:ie,setIntersection:re,isVisible:se},H);return u.default.createElement(u.default.Fragment,null,"raw"===T?u.default.createElement(N,Object.assign({},Ae)):u.default.createElement("span",{style:ce},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(N,Object.assign({},Ae))),c?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+pe.src+pe.srcSet+pe.sizes,rel:"preload",as:"image",href:pe.srcSet?void 0:pe.src},je))):null)};var s,c,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(s=n(3121))&&s.__esModule?s:{default:s},m=n(139),f=n(9246),h=n(8730),g=(n(670),n(2700));function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=arguments,n=function(n){var i=null!=t[n]?t[n]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),o.forEach((function(t){b(e,t,i[t])}))},i=1;i<arguments.length;i++)n(i);return e}function _(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},v=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,r=new URL("".concat(t.path).concat(O(n))),a=r.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),o&&a.set("q",o.toString());return r.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(O(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(O(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function k(e){var t=e.config,n=e.src,i=e.unoptimized,o=e.layout,r=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var o=e.deviceSizes,r=e.allSizes;if(i&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,a(c));return{widths:r.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,o,s),d=u.widths,m=u.kind,f=d.length-1;return{sizes:s||"w"!==m?s:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===m?e:i+1).concat(m)})).join(", "),src:c({config:t,src:n,quality:l,width:d[f]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",i=j.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,i,o,r){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===i&&r(!0),null===o||void 0===o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var N=function(e){var t=e.imgAttributes,n=e.heightInt,i=e.widthInt,o=e.qualityInt,r=e.layout,a=e.className,l=e.imgStyle,s=e.blurStyle,c=e.isLazy,d=e.placeholder,m=e.loading,f=e.srcString,h=e.config,g=e.unoptimized,b=e.loader,y=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,j=e.onLoad,x=e.onError,S=(e.isVisible,_(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,t,"raw"===r?{height:n,width:i}:{},{decoding:"async","data-nimg":r,className:a,style:p({},l,s),ref:u.useCallback((function(e){w(e),(null===e||void 0===e?void 0:e.complete)&&z(e,f,0,d,y,v)}),[w,f,r,d,y,v]),onLoad:function(e){z(e.currentTarget,f,0,d,y,v),j&&j(e)},onError:function(e){"blur"===d&&v(!0),x&&x(e)}})),(c||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},S,k({config:h,src:f,unoptimized:g,layout:r,width:i,quality:o,sizes:t.sizes,loader:b}),"raw"===r?{height:n,width:i}:{},{decoding:"async","data-nimg":r,style:l,className:a,loading:m||"lazy"}))))};function O(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6828:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var i=n(5893),o=n(9008),r=n.n(o),a=n(5675),l=n.n(a),s=n(7814),c=n(9398),u=n(1417),d=n(8050),m=n.n(d),f=n(6706),h=n.n(f);function g(e){var t=e.items;return(0,i.jsx)("ul",{className:h().list,children:t.map((function(e,t){return(0,i.jsx)("li",{className:h().list__item,children:e},t)}))})}var b=n(1346),p=n.n(b);function _(e){var t=e.text,n=e.href,o=e.color,r=e.newWindow,a="button--".concat(o);return(0,i.jsx)("a",{className:p()[a],href:n,target:r?"_blank":"_self",rel:"noreferrer",children:t})}var y=n(1129),v=n(1049),w=["Music (into drum & bass)","Food (both eating and cooking)","Reading (70% through with Malazan Book of the Fallen)","Games (PC and Switch)"];function j(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Hiroto Kaku - About Me"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsx)(y.Z,{children:(0,i.jsxs)("div",{className:m()["about-me__layout"],children:[(0,i.jsx)("div",{className:m()["about-me__photo"],children:(0,i.jsx)(l(),{loader:v,src:"portrait.jpg",alt:"face",width:200,height:200})}),(0,i.jsxs)("div",{className:m()["about-me__content"],children:[(0,i.jsx)("h1",{className:m()["about-me__h1"],children:"About me"}),(0,i.jsxs)("div",{className:m()["about-me__text"],children:[(0,i.jsxs)("section",{className:m()["about-me__section"],children:[(0,i.jsx)("h2",{className:m()["about-me__h2"],children:"Skills and expertise"}),(0,i.jsx)("p",{className:m()["about-me__description"],children:"Hi, I'm Hiroto Kaku!"}),(0,i.jsx)("p",{className:m()["about-me__description"],children:"I've had a life-long interested in making things, which led me to study engineering in college."}),(0,i.jsx)("p",{className:m()["about-me__description"],children:"As a UX research consultant, I worked with both domestic and international clients from a wide range of industries, helping them improve their products for the Japanese market."})]}),(0,i.jsxs)("section",{className:m()["about-me__section"],children:[(0,i.jsx)("h2",{className:m()["about-me__h2"],children:"Me, as a person"}),(0,i.jsx)("p",{className:m()["about-me__description"],children:"Born in Germany and raised in Japan and the US. I'm now living in Toronto, Canada."}),(0,i.jsx)("p",{className:m()["about-me__description"],children:"Day to day, I'm always looking for new things to discover and learn about. My hobbies always give me a wide range of things to dig into and enjoy."}),(0,i.jsx)(g,{items:w})]}),(0,i.jsxs)("section",{className:m()["about-me__section"],children:[(0,i.jsx)("h2",{className:m()["about-me__h2"],children:"Learn more and get in touch"}),(0,i.jsxs)("ul",{className:m().links,children:[(0,i.jsx)("li",{children:(0,i.jsx)(_,{styles:"display:inline",text:"Get my resume",href:"https://onedrive.live.com/download?cid=8781DAED1A9AA5B5&resid=8781DAED1A9AA5B5%21539430&authkey=AMUNkvnFPSgxaUU",color:"blue",newWindow:!0})}),(0,i.jsx)("li",{className:m().links__icon,children:(0,i.jsx)("a",{href:"https://github.com/thekakkun/",rel:"noreferrer",target:"_blank",children:(0,i.jsx)(s.G,{icon:u.zhw})})}),(0,i.jsx)("li",{className:m().links__icon,children:(0,i.jsx)("a",{href:"https://www.linkedin.com/in/hirotokaku/",rel:"noreferrer",target:"_blank",children:(0,i.jsx)(s.G,{icon:u.D9H})})}),(0,i.jsx)("li",{className:m().links__icon,children:(0,i.jsx)("a",{href:"mailto:kaku.hiroto@gmail.com",rel:"noreferrer",target:"_blank",children:(0,i.jsx)(s.G,{icon:c.FU$})})})]})]})]})]})]})})]})}},1346:function(e){e.exports={body:"button_body__BrMGP",button:"button_button__OcYl_","button--green":"button_button--green__GsjKL","button--blue":"button_button--blue__aJttq"}},6706:function(e){e.exports={body:"list_body__zhQCS",list:"list_list__N5xPE",list__item:"list_list__item__DwdhZ"}},8050:function(e){e.exports={body:"about-me_body__HNoGX","about-me__layout":"about-me_about-me__layout__qk6oW","about-me__photo":"about-me_about-me__photo__oENS2","about-me__content":"about-me_about-me__content__NTLNU","about-me__h1":"about-me_about-me__h1__TBi3E","about-me__h2":"about-me_about-me__h2__74sgV","about-me__section":"about-me_about-me__section__jArDJ","about-me__description":"about-me_about-me__description__r8VfN",links:"about-me_links__cRP7S",links__icon:"about-me_links__icon__jRoeK"}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=9372,e(e.s=t);var t}));var t=e.O();_N_E=t}]);