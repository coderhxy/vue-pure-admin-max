var I=(t,e,o)=>new Promise((n,r)=>{var s=l=>{try{a(o.next(l))}catch(c){r(c)}},i=l=>{try{a(o.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,i);a((o=o.apply(t,e)).next())});import{d as C,a as h,b2 as pt,n as P,m as L,o as at,f as b,k as z,B as ht,a3 as At,g as f,U as x,i as E,t as D,j as k,y as M,C as vt,D as yt,aW as N,dh as wt,p as F,di as bt,dj as _t,u as w,F as Et,l as Ot,s as zt,aY as H,r as It,b as St,w as B,cU as Rt,e as K,q as xt,a6 as Dt,_ as Ct}from"./index-BBFSeAfV.js";import{B as Nt}from"./back_top-Kxh7384i.js";function Ft(t=6){return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)}const Bt=["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399"];function jt(t,e){return Math.floor(Math.random()*(e-t+1))+t}function Pt(){return Bt[jt(0,4)]}const Lt="https://www.getphotoblanket.com",Mt=({page:t=1,pageSize:e=20})=>{const o=`${Lt}/products.json?page=${t}&limit=${e}`;return fetch(o).then(n=>n.json()).then(n=>n.products).then(n=>n.map(r=>({id:Ft(),star:!1,price:r.variants[0].price,src:{original:r.images[0].src},backgroundColor:Pt(),name:r.title})))},Tt="data:image/png;base64,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",kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABNBJREFUaEPtmV1oXEUUx//n3g1JRGqL9k1RsFq/6IMgSky8c2YTQyONiojWYumTQrWKSNH6oO1TS1EQFcTiQwsaK4qIbVdod+/M3Y0IteJDwVr1oVYFEfFFwUY2c2TCbrhZNptNduvuQgf2Ze85M+c359w5Z84l9PigHrcflwCqHrTWsoiUmLn8f3q1bR4wxggRlZxz00EQlCowf19smLYAxHF8NxFNA/gUgAKwGsApD5GC+eNiwLQL4GUi2gNgDIA31ENEKZhzIvK5h5mZmZkeHx//uV0wbQEwxpQADDPzgvny+fyNYRhO1MB42w9674RhWIqi6IdWYFoGMMbcBuA0ER1RSk3GcbyViB4HcBTAMWb+0RtYKpXWlMvlSSKaFBFdCTP/yIrIRxWY08uFaQfAswAeAPAaMx81xhwmojVpQ0TkSxH5QGt9tvp/kiQTzrlJAOsroeYfnXPOHQrD8JhS6qtmYFoGaGaRRjKFQuF6IhononsB+N9gSv4ggENKqYSIpN48cwCFQmF3EARPt2rMcvWZ+ao4ju/TWh+r6hpjRkVkYwXIh+d8qvEw/f39Hw4NDf1T/TMN8AqA/HKNWKk8EWmlVFjZvG0iUiSiIjO/W52zWCyuLZfLm4hoE4DxlHfmQi2bze6uBbih+tKt1LBm9Ky17wN4NAXgN29uiMi/HsS/2FrrA+n5isXi7bOzsx5mdyaTWT8yMvJ9XQC/K80YshIZv2uNAOrM+bWIHKjCWGuPi8g9zDzgZesC+LJgJcYtpeOc27MCAD/taWbeYIy5i4gKzjnvnW29BLCLmfcZY54H8GoQBONRFB3vGYByuXzt2NjYeWPMJwAeTGf8rg8hIvpTKXVlHMe3AogBnNFa+1prbnQ9gIi8rbXeHsfxE0T0DhE9qZSaP526HgDACDNPW2sPicjWvr6+VcPDw3/1jAd8vJ84ceKKTCbjj1NordelT7tu98BRZt5krd0sIlNEtFcp9VLPAIjIFq31lDHmLQBPBUGwIYqiBSV3xz1gjPFlRN3MXz0ujTHf+LKbmS+rTZZdC0BEJ5VSdxYKBR0EQYGIppRSW3oGAEA1++4F8KK/ySmljvQMQDX7Wmt9ZeqP0rqXr24NoZ+Y+TpjzDoiOuvvCszM9YrFbgV4nZmfi+N4JxHtJ6JnlFJv9hLAXPY1xuQAbASwlpnrNsY67oHKlXL+RgbgAjMP5nK5/oGBgd+DIPhNKeU7F3VHxwFq80Cl/fKYMeYRAIdFZL/W+oWeAQDwMDN/7PtLADzEHcx8qmcAUtn3FxFZrbW+vNFVteMhFMexj+/7faKqxP9okiRDzrkvALzHzL5NuejoOEDasiRJJqMo+sxau19EdgZB8FAURf4auTyARgrteJZuq9SbzxhzBsBNi2XfJcvpdhjZaI5GAEmSXOOcO09EsVIqu5QtHe/M1Rpord0hIm8A2MHM/h7QcHQjQMF/P3DOXZ3NZn/teoBKJr4AYLpSPviu4HfMfPNSxvvnCzzgnNvejFKrMmEYDi/S3LWVjx37mHlXM+vUhlAzOm2RISLnu9N+slwut2pwcHCCiCZExH+5mchmsyebWWgOwBgz3+lqRqldMszsd3zByOfzt4yOjn7b7Bod/8TUrKGLyV0CaHUHW9X/D9N93V6azvezAAAAAElFTkSuQmCC";function Ht(t,e){const o=t.getBoundingClientRect();if(!e)return o.top>=0&&o.bottom<=window.innerHeight;const n=e.getBoundingClientRect();return o.top>=n.top&&o.bottom<=n.bottom}function Kt(t){return I(this,null,function*(){return yield M(),t.value instanceof HTMLElement?t.value:t.value?document.querySelector(t.value):null})}function U(t){let e=`0px 0px ${t.distance}px 0px`;t.top&&(e=`${t.distance}px 0px 0px 0px`);const o=new IntersectionObserver(n=>{n[0].isIntersecting&&(t.firstload&&t.emit(),t.firstload=!0)},{root:t.parentEl,rootMargin:e});return o.observe(t.infiniteLoading.value),o}const lt=(t,e)=>{const o=t.__vccOpts||t;for(const[n,r]of e)o[n]=r;return o},Ut={},Wt=t=>(vt("data-v-d3e37633"),t=t(),yt(),t),Gt={class:"container"},Yt=Wt(()=>f("div",{class:"spinner"},null,-1)),Qt=[Yt];function Vt(t,e){return b(),z("div",Gt,Qt)}const Zt=lt(Ut,[["render",Vt],["__scopeId","data-v-d3e37633"]]),Xt={class:"state-error"},Jt=C({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(t,{emit:e}){const o=t;let n=null,r=0;const s=h(null),i=h(""),{top:a,firstload:l,distance:c}=o,{identifier:d,target:m}=pt(o),u={infiniteLoading:s,top:a,firstload:l,distance:c,parentEl:null,emit(){r=(u.parentEl||document.documentElement).scrollHeight,g.loading(),e("infinite",g)}},g={loading(){i.value="loading"},loaded(){return I(this,null,function*(){i.value="loaded";const p=u.parentEl||document.documentElement;yield M(),a&&(p.scrollTop=p.scrollHeight-r),Ht(s.value,u.parentEl)&&u.emit()})},complete(){i.value="complete",n==null||n.disconnect()},error(){i.value="error"}};return P(d,()=>{n==null||n.disconnect(),n=U(u)}),L(()=>I(this,null,function*(){u.parentEl=yield Kt(m),n=U(u)})),at(()=>{n==null||n.disconnect()}),(p,v)=>(b(),z("div",{ref_key:"infiniteLoading",ref:s,style:{"min-height":"1px"}},[ht(f("div",null,[x(p.$slots,"spinner",{},()=>[E(Zt)],!0)],512),[[At,i.value=="loading"]]),i.value=="complete"?x(p.$slots,"complete",{key:0},()=>{var y;return[f("span",null,D(((y=p.slots)==null?void 0:y.complete)||"No more results!"),1)]},!0):k("",!0),i.value=="error"?x(p.$slots,"error",{key:1,retry:u.emit},()=>{var y;return[f("span",Xt,[f("span",null,D(((y=p.slots)==null?void 0:y.error)||"Oops something went wrong!"),1),f("button",{class:"retry",onClick:v[0]||(v[0]=(..._)=>u.emit&&u.emit(..._))},"retry")])]},!0):k("",!0)],512))}}),qt=lt(Jt,[["__scopeId","data-v-a7077831"]]);function $t(t){return bt()?(_t(t),!0):!1}const ct=typeof window!="undefined";function te(t,e){function o(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}return o}function ee(t,e={}){let o,n;return s=>{const i=w(t),a=w(e.maxWait);if(o&&clearTimeout(o),i<=0||a!==void 0&&a<=0)return n&&(clearTimeout(n),n=null),s();a&&!n&&(n=setTimeout(()=>{o&&clearTimeout(o),n=null,s()},a)),o=setTimeout(()=>{n&&clearTimeout(n),n=null,s()},i)}}function ne(t,e=200,o={}){return te(ee(e,o),t)}function oe(t){var e;const o=w(t);return(e=o==null?void 0:o.$el)!=null?e:o}const re=ct?window:void 0,W=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},G="__vueuse_ssr_handlers__";W[G]=W[G]||{};var Y=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,ae=(t,e)=>{var o={};for(var n in t)ie.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&Y)for(var n of Y(t))e.indexOf(n)<0&&se.call(t,n)&&(o[n]=t[n]);return o};function le(t,e,o={}){const n=o,{window:r=re}=n,s=ae(n,["window"]);let i;const a=r&&"ResizeObserver"in r,l=()=>{i&&(i.disconnect(),i=void 0)},c=P(()=>oe(t),m=>{l(),a&&r&&m&&(i=new ResizeObserver(e),i.observe(m,s))},{immediate:!0,flush:"post"}),d=()=>{l(),c()};return $t(d),{isSupported:a,stop:d}}var Q,V;ct&&(window!=null&&window.navigator)&&((Q=window==null?void 0:window.navigator)!=null&&Q.platform)&&/iP(ad|hone|od)/.test((V=window==null?void 0:window.navigator)==null?void 0:V.platform);const ce=({breakpoints:t,wrapperWidth:e,gutter:o,hasAroundGutter:n,initWidth:r})=>{const s=Object.keys(t).map(c=>Number(c)).sort((c,d)=>c-d);let i=e,a=!1;for(const c of s)if(e<=c){i=c,a=!0;break}if(!a)return r;const l=t[i].rowPerView;return n?(e-o)/l-o:(e-(l-1)*o)/l};function ue(t){const e=h(0),o=h(null);le(o,i=>{const a=i[0],{width:l}=a.contentRect;e.value=l});const n=F(()=>ce({wrapperWidth:e.value,breakpoints:t.breakpoints,gutter:t.gutter,hasAroundGutter:t.hasAroundGutter,initWidth:t.width})),r=F(()=>{const i=t.hasAroundGutter?-t.gutter:t.gutter;return Math.floor((e.value+i)/(n.value+t.gutter))}),s=F(()=>{if(t.align==="left")return 0;if(t.align==="center"){const i=t.hasAroundGutter?t.gutter:-t.gutter,a=r.value*(n.value+t.gutter)+i;return(e.value-a)/2}else{const i=t.hasAroundGutter?t.gutter:-t.gutter,a=r.value*(n.value+t.gutter)+i;return e.value-a}});return{waterfallWrapper:o,wrapperWidth:e,colWidth:n,cols:r,offsetX:s}}function ut(t,e){return new RegExp(`(^|\\s)${e}(\\s|$)`).test(t.className)}function Z(t,e){if(ut(t,e))return;const o=t.className.split(/\s+/);o.push(e),t.className=o.join(" ")}const de=document.createElement("div").style,j=(()=>{const t={standard:"transform",webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform"};for(const e in t){const o=t[e];if(de[o]!==void 0)return e}return!1})();function R(t){return j===!1?!1:j==="standard"?t:j+t.charAt(0).toUpperCase()+t.substr(1)}const X=R("transform"),J=R("animation-duration"),q=R("animation-delay"),$=R("transition"),tt=R("animation-fill-mode");function fe(t,e,o,n,r){const s=h([]),i=h(0),a=m=>{const u=t.hasAroundGutter?m+1:m;return t.gutter*u+e.value*m+n.value},l=()=>{s.value=new Array(o.value).fill(t.hasAroundGutter?t.gutter:0)},c=me(t);return{wrapperHeight:i,layoutHandle:()=>I(this,null,function*(){return new Promise(m=>{l();const u=[];if(r&&r.value&&r.value.childNodes.forEach(g=>{g.className==="waterfall-item"&&u.push(g)}),u.length===0)return!1;for(let g=0;g<u.length;g++){const A=u[g],p=Math.min.apply(null,s.value),v=s.value.indexOf(p),y=a(v),_=A.style;X&&(_[X]=`translate3d(${y}px,${p}px, 0)`),_.width=`${e.value}px`,_.visibility="visible";const{height:mt}=A.getBoundingClientRect();s.value[v]+=mt+t.gutter,c(A,()=>{const gt=t.posDuration/1e3;$&&(_[$]=`transform ${gt}s`)})}i.value=Math.max.apply(null,s.value),setTimeout(()=>{m(!0)},t.posDuration)})})}}function me(t){return(e,o)=>{const n=e.firstChild;if(n&&!ut(n,t.animationPrefix)){const r=`${t.animationDuration/1e3}s`,s=`${t.animationDelay/1e3}s`,i=n.style;Z(n,t.animationPrefix),Z(n,t.animationEffect),J&&(i[J]=r),q&&(i[q]=s),tt&&(i[tt]="both"),o&&setTimeout(()=>{o()},t.animationDuration+t.animationDelay)}}}const ge=typeof window!="undefined"&&window!==null,et=Ae(),pe=Object.prototype.propertyIsEnumerable,nt=Object.getOwnPropertySymbols;function he(t,...e){return e.map(n=>n.replace(/\[(\w+)\]/g,".$1").split(".").reduce((r,s)=>r&&r[s],t))}function Ae(){return ge&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function S(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function ve(t){return typeof t=="object"?t===null:typeof t!="function"}function ye(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function we(t,...e){if(!S(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof nt!="function")return t;for(const o of e){const n=nt(o);for(const r of n)pe.call(o,r)&&(t[r]=o[r])}return t}function dt(t,...e){let o=0;for(ve(t)&&(t=e[o++]),t||(t={});o<e.length;o++)if(S(e[o])){for(const n of Object.keys(e[o]))ye(n)&&(S(t[n])&&S(e[o][n])?dt(t[n],e[o][n]):t[n]=e[o][n]);we(t,e[o])}return t}function ot(t,e){return new Promise((o,n)=>{const r=new Image;r.onload=()=>{o(r)},r.onerror=()=>{n(new Error("Image load error"))},e&&(r.crossOrigin="Anonymous"),r.src=t})}var O;(function(t){t.LOADING="loading",t.LOADED="loaded",t.ERROR="error"})(O||(O={}));const be={rootMargin:"0px",threshold:0},rt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",_e="";class Ee{constructor(e=!0,o,n=!0){this.lazyActive=!0,this.crossOrigin=!0,this.options={loading:rt,error:_e,observerOptions:be,log:!0,ratioCalculator:(r,s)=>s/r},this._images=new WeakMap,this.lazyActive=e,this.crossOrigin=n,this.config(o)}config(e={}){dt(this.options,e),e.ratioCalculator&&(this.options.ratioCalculator=e.ratioCalculator)}mount(e,o,n){const{src:r,loading:s,error:i}=this._valueFormatter(o);e.setAttribute("lazy",O.LOADING),e.setAttribute("src",s||rt),this.lazyActive?(et||(this._setImageSrc(e,r,n,i),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,r,n,i)):this._setImageSrc(e,r,n,i)}resize(e,o){const n=e.getAttribute("lazy"),r=e.getAttribute("src");n&&n===O.LOADED&&r&&ot(r,this.crossOrigin).then(s=>{const{width:i,height:a}=s,l=e.width/i*a;e.height=l;const c=e.style;c.height=`${l}px`,o()})}unmount(e){const o=this._realObserver(e);o&&o.unobserve(e),this._images.delete(e)}_setImageSrc(e,o,n,r){!o||e.getAttribute("src")===o||ot(o,this.crossOrigin).then(i=>{var a,l;const{width:c,height:d}=i,m=((l=(a=this.options).ratioCalculator)==null?void 0:l.call(a,c,d))||d/c,u=e.parentNode.parentNode;u.style.paddingBottom=`${m*100}%`,e.setAttribute("lazy",O.LOADED),e.removeAttribute("src"),e.setAttribute("src",o),n(!0)}).catch(()=>{const i=this._realObserver(e);i&&i.disconnect(),r&&(e.setAttribute("lazy",O.ERROR),e.setAttribute("src",r),n(!1)),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${o} `)})})}_isOpenLazy(){return et&&this.lazyActive}_initIntersectionObserver(e,o,n,r){const s=this.options.observerOptions;this._images.set(e,new IntersectionObserver(a=>{Array.prototype.forEach.call(a,l=>{if(l.isIntersecting){const c=this._realObserver(e);c&&c.unobserve(l.target),this._setImageSrc(e,o,n,r)}})},s));const i=this._realObserver(e);i&&i.observe(e)}_valueFormatter(e){let o=e,n=this.options.loading,r=this.options.error;return S(e)&&(o=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:o,loading:n,error:r}}_log(e){this.options.log&&e()}_realObserver(e){return this._images.get(e)}}var ft=(t,e)=>{for(const[o,n]of e)t[o]=n;return t};const T=C({props:{list:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},imgSelector:{type:String,default:"src"},width:{type:Number,default:200},breakpoints:{type:Object,default:()=>({1200:{rowPerView:3},800:{rowPerView:2},500:{rowPerView:1}})},gutter:{type:Number,default:10},hasAroundGutter:{type:Boolean,default:!0},posDuration:{type:Number,default:300},animationPrefix:{type:String,default:"animate__animated"},animationEffect:{type:String,default:"fadeIn"},animationDuration:{type:Number,default:1e3},animationDelay:{type:Number,default:300},backgroundColor:{type:String,default:"#fff"},lazyload:{type:Boolean,default:!0},loadProps:{type:Object,default:()=>{}},crossOrigin:{type:Boolean,default:!0},delay:{type:Number,default:300},align:{type:String,default:"center"}},setup(t,e){const o=new Ee(t.lazyload,t.loadProps,t.crossOrigin);N("lazy",o);const{waterfallWrapper:n,wrapperWidth:r,colWidth:s,cols:i,offsetX:a}=ue(t),{wrapperHeight:l,layoutHandle:c}=fe(t,s,i,a,n),d=ne(()=>{c().then(()=>{e.emit("afterRender")})},t.delay);P(()=>[r,s,t.list],()=>{r.value>0&&d()},{deep:!0});const m=h(0);return N("sizeChangeTime",m),N("imgLoaded",d),{waterfallWrapper:n,wrapperHeight:l,getRenderURL:A=>he(A,t.imgSelector)[0],getKey:(A,p)=>A[t.rowKey]||p,renderer:d}}}),it=()=>{wt(t=>({"84adae44":t.backgroundColor}))},st=T.setup;T.setup=st?(t,e)=>(it(),st(t,e)):it;const Oe=T,ze={class:"waterfall-card"};function Ie(t,e,o,n,r,s){return b(),z("div",{ref:"waterfallWrapper",class:"waterfall-list",style:zt({height:`${t.wrapperHeight}px`})},[(b(!0),z(Et,null,Ot(t.list,(i,a)=>(b(),z("div",{key:t.getKey(i,a),class:"waterfall-item"},[f("div",ze,[x(t.$slots,"item",{item:i,index:a,url:t.getRenderURL(i)},void 0,!0)])]))),128))],4)}var Se=ft(Oe,[["render",Ie],["__scopeId","data-v-6d3e5303"]]);const Re=C({props:{url:{type:String,default:""},title:{type:String,default:""},alt:{type:String,default:""}},setup(t,e){const o=H("imgLoaded"),n=H("lazy"),r=h(null);L(()=>{s()}),at(()=>{i()});function s(){r.value&&n.mount(r.value,t.url,l=>{o(),l?e.emit("success",t.url):e.emit("error",t.url)})}function i(){r.value&&n.unmount(r.value)}function a(){e.emit("load",t.url)}return{lazyRef:r,imageLoad:a}}}),xe={class:"lazy__box"},De={class:"lazy__resource"},Ce=["title","alt"];function Ne(t,e,o,n,r,s){return b(),z("div",xe,[f("div",De,[f("img",{ref:"lazyRef",class:"lazy__img",title:t.title,alt:t.alt,onLoad:e[0]||(e[0]=(...i)=>t.imageLoad&&t.imageLoad(...i))},null,40,Ce)])])}var Fe=ft(Re,[["render",Ne],["__scopeId","data-v-640f8d40"]]);const Be=["onClick"],je={class:"overflow-hidden"},Pe={class:"px-4 pt-2 pb-4 border-t border-t-gray-800"},Le={class:"pb-4 text-gray-50 group-hover:text-yellow-300"},Me={class:"pt-3 flex justify-between items-center border-t border-t-gray-600 border-opacity-50"},Te={class:"text-gray-50"},ke=["onClick"],He=C({__name:"index",setup(t){const e=It({rowKey:"id",gutter:10,hasAroundGutter:!0,width:320,breakpoints:{1200:{rowPerView:4},800:{rowPerView:3},500:{rowPerView:2}},animationEffect:"animate__zoomInUp",animationDuration:1e3,animationDelay:300,imgSelector:"src.original",loadProps:{loading:kt,error:Tt},lazyload:!0}),o=h(1),n=h([]),r=h(),s=h();function i(){s.value=Rt.service({target:".content",background:"transparent",text:"加载中"}),Mt({page:o.value,pageSize:r.value}).then(c=>{setTimeout(()=>{n.value.push(...c),o.value+=1,M(()=>{s.value.close()})},500)})}function a(c,d){n.value.splice(d,1)}function l(c){}return L(()=>{i()}),(c,d)=>{const m=K("el-backtop"),u=K("el-scrollbar");return b(),St(u,{"max-height":"calc(100vh - 120px)",class:"content"},{default:B(()=>[E(w(Se),Dt({list:n.value},e),{item:B(({item:g,url:A,index:p})=>[f("div",{class:"bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-linear hover:shadow-lg hover:shadow-gray-600 group",onClick:v=>void 0},[f("div",je,[E(w(Fe),{url:A,class:"cursor-pointer transition-all duration-300 ease-linear group-hover:scale-105"},null,8,["url"])]),f("div",Pe,[f("h4",Le,D(g.name),1),f("div",Me,[f("div",Te,"$ "+D(g.price),1),f("div",null,[f("button",{class:"px-3 h-7 rounded-full bg-red-500 text-sm text-white shadow-lg transition-all duration-300 hover:bg-red-600",onClick:xt(v=>a(g,p),["stop"])}," 删除 ",8,ke)])])])],8,Be)]),_:1},16,["list"]),E(m,{title:"回到顶部",right:35,bottom:50,"visibility-height":400,target:".content .el-scrollbar__wrap"},{default:B(()=>[E(w(Nt))]),_:1}),E(w(qt),{firstload:!1,onInfinite:i})]),_:1})}}}),Ge=Ct(He,[["__scopeId","data-v-06e29e61"]]);export{Ge as default};
