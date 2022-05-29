const open=document.getElementById("open"),close=document.getElementById("close"),container=document.querySelector(".container"),circle=document.querySelector(".circle"),body=document.querySelector("body"),lu=document.querySelector(".lu"),nav=document.querySelector(".nav"),overlay=document.createElement("DIV");body.appendChild(overlay),open.addEventListener("click",()=>{container.classList.add("show-nav"),circle.classList.add("show-nav"),container.classList.add("overlay"),overlay.classList.add("overlay"),nav.classList.add("active"),overlay.classList.contains("overlay")&&overlay.addEventListener("click",()=>{container.classList.remove("show-nav"),circle.classList.remove("show-nav"),container.classList.remove("overlay"),overlay.classList.remove("overlay"),nav.classList.remove("active")})}),close.addEventListener("click",()=>{container.classList.remove("show-nav"),circle.classList.remove("show-nav"),container.classList.remove("overlay"),body.classList.remove("overlay"),overlay.classList.remove("overlay"),nav.classList.remove("active")}),container.addEventListener("click",()=>{container.classList.remove("show-nav"),circle.classList.remove("show-nav"),container.classList.remove("overlay"),body.classList.remove("overlay"),overlay.classList.remove("overlay"),nav.classList.remove("active")}),lu.addEventListener("click",()=>{container.classList.remove("show-nav"),circle.classList.remove("show-nav"),container.classList.remove("overlay"),body.classList.remove("overlay"),overlay.classList.remove("overlay"),nav.classList.remove("active")});var swiper=new Swiper(".mySwiper",{direction:getDirection(),grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",autoplay:{delay:1e4,disableOnInteraction:!1},loop:!0});function getDirection(){return window.innerWidth<=768?"horizontal":"vertical"}var swiper1=new Swiper(".mySwiper1",{direction:"horizontal",effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},coverflowEffect:{rotate:0,stretch:1e3,depth:0,modifier:0,slideShadows:!1}});
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/!function(e,n,o){function a(e,n){return typeof e===n}function s(e){var n=v.className,o=c._config.classPrefix||"";if(d&&(n=n.baseVal),c._config.enableJSClass){var a=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(a,"$1"+o+"js$2")}c._config.enableClasses&&(n+=" "+o+e.join(" "+o),d?v.className.baseVal=n:v.className=n)}function t(e,n){if("object"==typeof e)for(var o in e)A(e,o)&&t(o,e[o]);else{var a=(e=e.toLowerCase()).split("."),i=c[a[0]];if(2==a.length&&(i=i[a[1]]),void 0!==i)return c;n="function"==typeof n?n():n,1==a.length?c[a[0]]=n:(!c[a[0]]||c[a[0]]instanceof Boolean||(c[a[0]]=new Boolean(c[a[0]])),c[a[0]][a[1]]=n),s([(n&&0!=n?"":"no-")+a.join("-")]),c._trigger(e,n)}return c}var i=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout((function(){n(o[e])}),0)},addTest:function(e,n,o){r.push({name:e,fn:n,options:o})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var A,v=n.documentElement,d="svg"===v.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;A=a(e,"undefined")||a(e.call,"undefined")?function(e,n){return n in e&&a(e.constructor.prototype[n],"undefined")}:function(n,o){return e.call(n,o)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),c.hasOwnProperty(e)&&setTimeout((function(){c._trigger(e,c[e])}),0)},l._trigger=function(e,n){if(this._l[e]){var o=this._l[e];setTimeout((function(){var e;for(e=0;e<o.length;e++)(0,o[e])(n)}),0),delete this._l[e]}},c._q.push((function(){l.addTest=t})),c.addAsyncTest((function(){function e(e,n,o){function a(n){var a=!(!n||"load"!==n.type)&&1==s.width;t(e,"webp"===e&&a?new Boolean(a):a),o&&o(n)}var s=new Image;s.onerror=a,s.onload=a,s.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],o=n.shift();e(o.name,o.uri,(function(o){if(o&&"load"===o.type)for(var a=0;a<n.length;a++)e(n[a].name,n[a].uri)}))})),function(){var e,n,o,s,t,l;for(var A in r)if(r.hasOwnProperty(A)){if(e=[],(n=r[A]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=a(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)1===(l=e[t].split(".")).length?c[l[0]]=s:(!c[l[0]]||c[l[0]]instanceof Boolean||(c[l[0]]=new Boolean(c[l[0]])),c[l[0]][l[1]]=s),i.push((s?"":"no-")+l.join("-"))}}(),s(i),delete l.addTest,delete l.addAsyncTest;for(var u=0;u<c._q.length;u++)c._q[u]();e.Modernizr=c}(window,document);
//# sourceMappingURL=bundle.js.map