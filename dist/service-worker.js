if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const u=e=>n(e,o),t={module:{uri:o},exports:l,require:u};i[o]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(s(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ask-alexa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.04dbd20b.css",revision:null},{url:"/data.json",revision:"623d1fbc0fe4d9572e4a08b6c5117b9e"},{url:"/img/Roche_Logo_800px_Blue_RGB.60fa3d38.svg",revision:null},{url:"/img/logoActemra1.c8538698.png",revision:null},{url:"/img/logoAlexa1.e6ad2a46.png",revision:null},{url:"/img/questionMark.5e293f84.png",revision:null},{url:"/img/robotFace4.157625b8.png",revision:null},{url:"/img/say-icon3.7013d521.png",revision:null},{url:"/index.html",revision:"b7fb45e55d3e178fdf87e7503a4e3ba6"},{url:"/js/app.202156d7.js",revision:null},{url:"/js/chunk-vendors.7ab1108f.js",revision:null},{url:"/manifest.json",revision:"aa6ed5081a72dedde85d69894ecd2253"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
