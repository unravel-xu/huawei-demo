(function(e){function n(n){for(var c,r,o=n[0],i=n[1],d=n[2],l=0,h=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2a4ae8e7":"5ef8d8c2","chunk-3dd5e43e":"fe0383d5","chunk-4ce61c90":"975d7b7f","chunk-56d33ea9":"8bb0b35f","chunk-512ac297":"c02dfe1d","chunk-642eb3e4":"fc02a712","chunk-681bcc59":"aac85c61","chunk-af3d84a2":"e5ccb77e","chunk-d7c7c0ea":"859eb442"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-2a4ae8e7":1,"chunk-3dd5e43e":1,"chunk-4ce61c90":1,"chunk-56d33ea9":1,"chunk-512ac297":1,"chunk-642eb3e4":1,"chunk-681bcc59":1,"chunk-af3d84a2":1,"chunk-d7c7c0ea":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2a4ae8e7":"55e4e2ac","chunk-3dd5e43e":"40ced074","chunk-4ce61c90":"5a6f25c4","chunk-56d33ea9":"1e0d7326","chunk-512ac297":"e5f2212c","chunk-642eb3e4":"228c7359","chunk-681bcc59":"8fafaa30","chunk-af3d84a2":"1a05532c","chunk-d7c7c0ea":"69b1871b"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===a))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){d=h[o],l=d.getAttribute("data-href");if(l===c||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var h=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2377:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),r={id:"app"};function a(e,n,t,a,u,o){var i=Object(c["Q"])("router-view");return Object(c["H"])(),Object(c["m"])("div",r,[Object(c["q"])(i)])}var u={name:"App",components:{}},o=(t("a26d"),t("d959")),i=t.n(o);const d=i()(u,[["render",a]]);var l=d,h=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),f=[{path:"/",name:"Home",component:function(){return t.e("chunk-d7c7c0ea").then(t.bind(null,"bb51"))}},{path:"/upload",name:"upload",component:function(){return t.e("chunk-2a4ae8e7").then(t.bind(null,"d443"))}},{path:"/index",name:"index",component:function(){return t.e("chunk-512ac297").then(t.bind(null,"86d6"))}},{path:"/collection",name:"collection",component:function(){return t.e("chunk-681bcc59").then(t.bind(null,"1ced"))}},{path:"/train",name:"train",component:function(){return t.e("chunk-af3d84a2").then(t.bind(null,"2e42"))}},{path:"/scene",name:"scene",component:function(){return Promise.all([t.e("chunk-3dd5e43e"),t.e("chunk-56d33ea9")]).then(t.bind(null,"f6b8"))}},{path:"/InDBML",name:"InDBML",component:function(){return t.e("chunk-642eb3e4").then(t.bind(null,"a55b"))}},{path:"/InDBMLUse",name:"InDBMLUse",component:function(){return Promise.all([t.e("chunk-3dd5e43e"),t.e("chunk-4ce61c90")]).then(t.bind(null,"5461"))}}],p=Object(h["a"])({history:Object(h["b"])(),routes:f}),s=p,b=t("7864"),m=(t("7dd6"),t("3ef0")),k=t.n(m),v=function(e){e.use(b["a"],{locale:k.a})},g=t("bc3a"),y=t.n(g),j=t("130e"),O=(t("2377"),t("4328"),Object(c["j"])(l));v(O),O.use(j["a"],y.a),O.use(s).mount("#app"),y.a.defaults.baseURL="/api"},"824b":function(e,n,t){},a26d:function(e,n,t){"use strict";t("824b")}});
//# sourceMappingURL=app.c37c82b5.js.map