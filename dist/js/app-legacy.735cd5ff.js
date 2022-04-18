(function(){"use strict";var e={6428:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var o=n(9567),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HeaderComponent",{attrs:{logoRoche:e.images.logoRoche}}),n("div",{staticClass:"components"},[n("transition",{attrs:{name:"home-page"}},[e.isShowCard?e._e():n("HomePage",{attrs:{logoAlexa:e.images.logoAlexa,logoActemra:e.images.logoActemra,faceImage:e.images.digitalFace}})],1),n("NavbarComponent",{on:{showCards:e.showCards,hideCards:e.hideCards}}),n("transition",{attrs:{name:"fade-cards"}},[e.isShowCard?n("section",{staticClass:"cards-wrapper"},e._l(e.questions,(function(t,o){return n("QuestionCard",{key:o,attrs:{index:o,question:t,questionMark:e.images.questionMark},on:{setQuestion:e.showQuestion}})})),1):e._e()]),n("transition",{attrs:{name:"fade-textfield"}},[e.isShowTextfield?n("TextfieldComponent",{attrs:{currentQuestion:e.currentQuestion}}):e._e()],1)],1)],1)},i=[],s=n(6166),a=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-wrapper"},[n("div",{staticClass:"control-buttons"},[n("button",{on:{click:e.showCards}},[e._v("START")]),n("button",{on:{click:e.hideCards}},[e._v("ABOUT")])])])},u=[],l={name:"NavbarComponent",data:function(){return{isCardOpen:!1}},methods:{showCards:function(){this.isCardOpen=!0,this.$emit("showCards",this.isCardOpen)},hideCards:function(){this.isCardOpen=!1,this.$emit("hideCards",this.isCardOpen)}}},d=l,f=n(1001),p=(0,f.Z)(d,c,u,!1,null,"45c1d946",null),g=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",attrs:{id:"card"},on:{click:e.showQuestion}},[n("img",{attrs:{src:e.questionMark}})])},m=[],v={name:"QuestionCard",props:["index","question","questionMark"],data:function(){return{isOpen:!1,questionNumber:this.index+1}},methods:{showQuestion:function(){this.$emit("setQuestion",this.question),console.log(this.question)}}},C=v,w=(0,f.Z)(C,h,m,!1,null,null,null),x=w.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"textfield"},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("span",{key:e.currentQuestion},[e._v(e._s(e.currentQuestion))])])],1)},_=[],k={name:"TextfieldComponent",props:{currentQuestion:String},data:function(){return{}}},A=k,S=(0,f.Z)(A,b,_,!1,null,"1913c00f",null),q=S.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("img",{staticClass:"face-image",attrs:{src:e.faceImage}}),n("header"),n("section",[n("p",[e._v(e._s(e.message))])]),n("footer",[n("div",{staticClass:"logo-wrapper"},[n("img",{attrs:{id:"logoAlexa",src:e.logoAlexa}}),n("img",{attrs:{id:"logoActemra",src:e.logoActemra}})])])])},Q=[],T={name:"HomePage",props:{logoAlexa:String,logoActemra:String,faceImage:String},data:function(){return{message:"Hello, I'm Pavexa. Your virtual liflet."}}},y=T,R=(0,f.Z)(y,O,Q,!1,null,"61b65fd0",null),$=R.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("img",{attrs:{id:"logoRoche",src:e.logoRoche}})])},j=[],M={name:"HeaderComponent",props:{logoRoche:String}},P=M,Z=(0,f.Z)(P,E,j,!1,null,"5c8d673c",null),H=Z.exports,N={name:"App",components:{HeaderComponent:H,NavbarComponent:g,QuestionCard:x,TextfieldComponent:q,HomePage:$},data:function(){return{questions:[],currentQuestion:"choose question",isShowCard:!1,isShowTextfield:!1,images:{logoRoche:n(1872),logoAlexa:n(5700),logoActemra:n(5019),questionMark:n(8666),digitalFace:n(4885)}}},beforeMount:function(){var e=this;a().get("./data.json").then((function(t){e.questions=t.data.questions,console.log(e.questions)})).catch((function(e){return console.log(e)}))},methods:{showCards:function(e){this.isShowCard=e,this.isShowTextfield=e},hideCards:function(e){this.isShowCard?(this.isShowCard=e,this.isShowTextfield=e,this.currentQuestion="choose question"):console.log("PRESS START")},showQuestion:function(e){this.currentQuestion="Alexa, ask Pavexa ".concat(e)}}},F=N,B=(0,f.Z)(F,r,i,!1,null,null,null),I=B.exports,z=n(563);(0,z.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o.Z.config.productionTip=!1,new o.Z({render:function(e){return e(I)}}).$mount("#app")},1872:function(e,t,n){e.exports=n.p+"img/Roche_Logo_800px_Blue_RGB.60fa3d38.svg"},5019:function(e,t,n){e.exports=n.p+"img/logoActemra1.c8538698.png"},5700:function(e,t,n){e.exports=n.p+"img/logoAlexa1.e6ad2a46.png"},8666:function(e,t,n){e.exports=n.p+"img/questionMark.5e293f84.png"},4885:function(e,t,n){e.exports=n.p+"img/robotFace4.157625b8.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],c=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(o);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkask_alexa"]=self["webpackChunkask_alexa"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6428)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.735cd5ff.js.map