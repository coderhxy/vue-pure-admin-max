var Ae=Object.defineProperty,Le=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var te=t=>{throw TypeError(t)};var U=(t,e,s)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,M=(t,e)=>{for(var s in e||(e={}))De.call(e,s)&&U(t,s,e[s]);if(ee)for(var s of ee(e))qe.call(e,s)&&U(t,s,e[s]);return t},se=(t,e)=>Le(t,ve(e));var y=(t,e,s)=>U(t,typeof e!="symbol"?e+"":e,s),ie=(t,e,s)=>e.has(t)||te("Cannot "+s);var f=(t,e,s)=>(ie(t,e,"read from private field"),s?s.call(t):e.get(t)),V=(t,e,s)=>e.has(t)?te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var o=(t,e,s)=>(ie(t,e,"access private method"),s);var p=(t,e,s)=>new Promise((r,n)=>{var u=h=>{try{l(s.next(h))}catch(d){n(d)}},a=h=>{try{l(s.throw(h))}catch(d){n(d)}},l=h=>h.done?r(h.value):Promise.resolve(h.value).then(u,a);l((s=s.apply(t,e)).next())});import{d as ke,a as xe,m as Me,i as re}from"./index-C9LNgsF8.js";const de=t=>Array.isArray(t),ce=t=>de(t)?t:[t];let Re=function(t){let e=function(c){return ce(c).forEach(b=>{var x;return m.set(Symbol((x=b.char)==null?void 0:x.innerText),n(M({},b)))}),this},s=()=>h().filter(c=>c.typeable),r=function(c,b){let x=[...m.keys()];m.set(x[c],n(b))},n=c=>(c.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},c),u=function(){m.forEach(c=>delete c.done)},a=function(){m=new Map,e(t)},l=()=>m,h=()=>Array.from(m.values()),d=c=>m.delete(c),w=(c=!1)=>c?h():h().filter(b=>!b.done),k=(c,b=!1)=>b?m.delete(c):m.get(c).done=!0,m=new Map;return e(t),{add:e,set:r,wipe:a,done:k,reset:u,destroy:d,getItems:w,getQueue:l,getTypeable:s}};const fe="data-typeit-id",S="ti-cursor",$e="END",Fe={started:!1,completed:!1,frozen:!1,destroyed:!1},C={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},He=`[${fe}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,$=t=>document.createElement(t),K=t=>document.createTextNode(t),pe=(t,e="")=>{let s=$("style");s.id=e,s.appendChild(K(t)),document.head.appendChild(s)},ne=t=>(de(t)||(t=[t/2,t/2]),t),oe=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let ue=t=>t/2;function Qe(t){let{speed:e,deleteSpeed:s,lifeLike:r}=t;return s=s!==null?s:e/3,r?[oe(e,ue(e)),oe(s,ue(s))]:[e,s]}const me=t=>Array.from(t);let Y=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(s=>{e.parentNode.insertBefore(K(s),e)}),e.remove();return}Y(e)}),t);const ye=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,Y(e.body)};function be(t,e=!1,s=!1){let r=t.querySelector(`.${S}`),n=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:l=>{var h,d;if(r&&s){if((h=l.classList)!=null&&h.contains(S))return NodeFilter.FILTER_ACCEPT;if(r.contains(l))return NodeFilter.FILTER_REJECT}return(d=l.classList)!=null&&d.contains(S)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),u,a=[];for(;u=n.nextNode();)u.originalParent||(u.originalParent=u.parentNode),a.push(u);return e?a.reverse():a}function Be(t){return be(ye(t))}function _e(t,e=!0){return e?Be(t):me(t).map(K)}const ge=t=>Number.isInteger(t),ae=({queueItems:t,selector:e,cursorPosition:s,to:r})=>{if(ge(e))return e*-1;let n=new RegExp($e,"i").test(r),u=e?[...t].reverse().findIndex(({char:l})=>{let h=l.parentElement,d=h.matches(e);return n&&d?!0:d&&h.firstChild.isSameNode(l)}):-1;u<0&&(u=n?0:t.length-1);let a=n?0:1;return u-s+a},ze=t=>(t.forEach(clearTimeout),[]),R=(t,e)=>new Array(e).fill(t);let B=t=>new Promise(e=>{requestAnimationFrame(()=>p(void 0,null,function*(){e(yield t())}))}),Te=t=>t==null?void 0:t.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),we=({cursor:t,frames:e,options:s})=>{let r=t.animate(e,s);return r.pause(),r.id=t.dataset.tiAnimationId,B(()=>{B(()=>{r.play()})}),r},Ue=({cursor:t,options:e,cursorOptions:s})=>{if(!t||!s)return;let r=Te(t),n;r&&(e.delay=r.effect.getComputedTiming().delay,n=r.currentTime,r.cancel());let u=we({cursor:t,frames:s.animation.frames,options:e});return n&&(u.currentTime=n),u},le=t=>{var e;return(e=t.func)==null?void 0:e.call(null)},Ve=u=>p(void 0,[u],function*({index:t,queueItems:e,wait:s,cursor:r,cursorOptions:n}){let a=e[t][1],l=[],h=t,d=a,w=()=>d&&!d.delay,k=a.shouldPauseCursor()&&n.autoPause;for(;w();)l.push(d),w()&&h++,d=e[h]?e[h][1]:null;if(l.length)return yield B(()=>p(void 0,null,function*(){for(let b of l)yield le(b)})),h-1;let m=Te(r),c;return m&&(c=se(M({},m.effect.getComputedTiming()),{delay:k?n.autoPauseDelay:0})),yield s(()=>p(void 0,null,function*(){m&&k&&m.cancel(),yield B(()=>{le(a)})}),a.delay),yield Ue({cursor:r,options:c,cursorOptions:n}),t});const je=(t,e)=>{new IntersectionObserver((r,n)=>{r.forEach(u=>{u.isIntersecting&&(e(),n.unobserve(t))})},{threshold:1}).observe(t)},Oe=()=>Math.random().toString().substring(2,9),_=t=>"value"in t;let We=t=>_(t)?me(t.value):be(t,!0).filter(e=>!(e.childNodes.length>0)),E=t=>typeof t=="function"?t():t,Z=(t,e=document,s=!1)=>e[`querySelector${s?"All":""}`](t),Je=t=>/body/i.test(t==null?void 0:t.tagName),Xe=(t,e)=>{if(_(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let s=Je(e.originalParent)?t:e.originalParent||t;s.insertBefore(e,Z("."+S,s)||null)};const Ge=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),I=(t,e)=>Object.assign({},t,e);let Ke=t=>{var e,s,r;if(typeof t=="object"){let n={},{frames:u,options:a}=C.cursor.animation;return n.animation=t.animation||{},n.animation.frames=((e=t.animation)==null?void 0:e.frames)||u,n.animation.options=I(a,((s=t.animation)==null?void 0:s.options)||{}),n.autoPause=(r=t.autoPause)!=null?r:C.cursor.autoPause,n.autoPauseDelay=t.autoPauseDelay||C.cursor.autoPauseDelay,n}return t===!0?C.cursor:t};const Ye=(t,e)=>{if(!t)return;let s=t.parentNode;(s.childNodes.length>1||s.isSameNode(e)?t:s).remove()},Ze=(t,e,s)=>{let r=e[s-1],n=Z(`.${S}`,t);t=(r==null?void 0:r.parentNode)||t,t.insertBefore(n,r||null)};function et(t){return typeof t=="string"?Z(t):t}let tt={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},st=(t,e)=>{let r=`${`[${fe}='${t}']`} .${S}`,n=getComputedStyle(e),u=Object.entries(tt).reduce((a,[l,h])=>`${a} ${l}: var(--ti-cursor-${l}, ${h||n[l]});`,"");pe(`${r} { display: inline-block; width: 0; ${u} }`,t)};function it(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let rt=(t,e,s)=>Math.min(Math.max(e+t,0),s.length),nt=(t,e,s)=>new Promise(r=>{let n=()=>p(void 0,null,function*(){yield t(),r()});s.push(setTimeout(n,e||0))});var i,Pe,N,j,Se,O,W,J,F,g,Ee,A,L,Ce,z,Ie,Ne,X,H,v,Q,P,D,q,G,T,he;let ot=(he=class{constructor(e,s={}){V(this,i);y(this,"element");y(this,"timeouts");y(this,"cursorPosition");y(this,"predictedCursorPosition");y(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1});y(this,"opts");y(this,"id");y(this,"queue");y(this,"cursor");y(this,"unfreeze",()=>{});y(this,"is",function(e){return this.statuses[e]});V(this,z,e=>{var s;e.cursor=Ke((s=e.cursor)!=null?s:C.cursor),this.opts.strings=o(this,i,Ie).call(this,ce(this.opts.strings)),this.opts=I(this.opts,{html:!f(this,i,q)&&this.opts.html,nextStringDelay:ne(this.opts.nextStringDelay),loopDelay:ne(this.opts.loopDelay)})});this.opts=I(C,s),this.element=et(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=I({},Fe),this.id=Oe(),this.queue=Re([{delay:this.opts.startDelay}]),f(this,z).call(this,s),this.cursor=o(this,i,Ne).call(this),this.element.dataset.typeitId=this.id,pe(He),this.opts.strings.length&&o(this,i,Ce).call(this)}go(){return this.statuses.started?this:(o(this,i,J).call(this),this.opts.waitUntilVisible?(je(this.element,o(this,i,N).bind(this)),this):(o(this,i,N).call(this),this))}destroy(e=!0){this.timeouts=ze(this.timeouts),E(e)&&this.cursor&&o(this,i,Q).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let s in this.statuses)this.statuses[s]=!1;return this.element[o(this,i,F).call(this)?"value":"innerHTML"]="",this}type(e,s={}){e=E(e);let{instant:r}=s,n=o(this,i,A).call(this,s),a=_e(e,this.opts.html).map(h=>({func:()=>o(this,i,H).call(this,h),char:h,delay:r||Ge(h)?0:o(this,i,P).call(this),typeable:h.nodeType===Node.TEXT_NODE})),l=[n[0],{func:()=>p(this,null,function*(){return yield this.opts.beforeString(e,this)})},...a,{func:()=>p(this,null,function*(){return yield this.opts.afterString(e,this)})},n[1]];return o(this,i,g).call(this,l,s)}break(e={}){return o(this,i,g).call(this,{func:()=>o(this,i,H).call(this,$("BR")),typeable:!0},e)}move(e,s={}){e=E(e);let r=o(this,i,A).call(this,s),{instant:n,to:u}=s,a=ae({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:u,cursorPosition:f(this,i,D)}),l=a<0?-1:1;return this.predictedCursorPosition=f(this,i,D)+a,o(this,i,g).call(this,[r[0],...R({func:()=>o(this,i,j).call(this,l),delay:n?0:o(this,i,P).call(this),cursorable:!0},Math.abs(a)),r[1]],s)}exec(e,s={}){let r=o(this,i,A).call(this,s);return o(this,i,g).call(this,[r[0],{func:()=>e(this)},r[1]],s)}options(e,s={}){return e=E(e),o(this,i,L).call(this,e),o(this,i,g).call(this,{},s)}pause(e,s={}){return o(this,i,g).call(this,{delay:E(e)},s)}delete(e=null,s={}){e=E(e);let r=o(this,i,A).call(this,s),n=e,{instant:u,to:a}=s,l=this.queue.getTypeable(),h=n===null?l.length:ge(n)?n:ae({queueItems:l,selector:n,cursorPosition:f(this,i,D),to:a});return o(this,i,g).call(this,[r[0],...R({func:o(this,i,v).bind(this),delay:u?0:o(this,i,P).call(this,1),deletable:!0},h),r[1]],s)}freeze(){this.statuses.frozen=!0}flush(e=()=>{}){return o(this,i,J).call(this),o(this,i,N).call(this,!1).then(e),this}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return o(this,i,L).call(this,e)}getElement(){return this.element}empty(e={}){return o(this,i,g).call(this,{func:o(this,i,Pe).bind(this)},e)}},i=new WeakSet,Pe=function(){return p(this,null,function*(){if(o(this,i,F).call(this)){this.element.value="";return}f(this,i,T).forEach(o(this,i,Q).bind(this))})},N=function(e=!0){return p(this,null,function*(){this.statuses.started=!0;let s=r=>{this.queue.done(r,!e)};try{let r=[...this.queue.getQueue()];for(let u=0;u<r.length;u++){let[a,l]=r[u];if(!l.done){if(!l.deletable||l.deletable&&f(this,i,T).length){let h=yield o(this,i,O).call(this,u,r);Array(h-u).fill(u+1).map((d,w)=>d+w).forEach(d=>{let[w]=r[d];s(w)}),u=h}s(a)}}if(!e)return this;if(this.statuses.completed=!0,yield this.opts.afterComplete(this),!this.opts.loop)throw"";let n=this.opts.loopDelay;o(this,i,W).call(this,()=>p(this,null,function*(){yield o(this,i,Se).call(this,n[0]),o(this,i,N).call(this)}),n[1])}catch(r){}return this})},j=function(e){return p(this,null,function*(){this.cursorPosition=rt(e,this.cursorPosition,f(this,i,T)),Ze(this.element,f(this,i,T),this.cursorPosition)})},Se=function(e){return p(this,null,function*(){let s=f(this,i,D);s&&(yield o(this,i,j).call(this,{value:s}));let r=f(this,i,T).map(n=>[Symbol(),{func:o(this,i,v).bind(this),delay:o(this,i,P).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let n=0;n<r.length;n++)yield o(this,i,O).call(this,n,r);this.queue.reset(),this.queue.set(0,{delay:e})})},O=function(e,s){return Ve({index:e,queueItems:s,wait:o(this,i,W).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},W=function(e,s,r=!1){return p(this,null,function*(){this.statuses.frozen&&(yield new Promise(n=>{this.unfreeze=()=>{this.statuses.frozen=!1,n()}})),r||(yield this.opts.beforeStep(this)),yield nt(e,s,this.timeouts),r||(yield this.opts.afterStep(this))})},J=function(){return p(this,null,function*(){if(!o(this,i,F).call(this)&&this.cursor&&this.element.appendChild(this.cursor),f(this,i,G)){st(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:s,options:r}=e;we({frames:s,cursor:this.cursor,options:M({duration:this.opts.cursorSpeed},r)})}})},F=function(){return _(this.element)},g=function(e,s){return this.queue.add(e),o(this,i,Ee).call(this,s),this},Ee=function(e={}){let s=e.delay;s&&this.queue.add({delay:s})},A=function(e={}){return[{func:()=>o(this,i,L).call(this,e)},{func:()=>o(this,i,L).call(this,this.opts)}]},L=function(e){return p(this,null,function*(){this.opts=I(this.opts,e)})},Ce=function(){let e=this.opts.strings.filter(s=>!!s);e.forEach((s,r)=>{if(this.type(s),r+1===e.length)return;let n=this.opts.breakLines?[{func:()=>o(this,i,H).call(this,$("BR")),typeable:!0}]:R({func:o(this,i,v).bind(this),delay:o(this,i,P).call(this,1)},this.queue.getTypeable().length);o(this,i,X).call(this,n)})},z=new WeakMap,Ie=function(e){let s=this.element.innerHTML;return s?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=s,Y(this.element),o(this,i,X).call(this,R({func:o(this,i,v).bind(this),delay:o(this,i,P).call(this,1),deletable:!0},f(this,i,T).length)),e):it(s).concat(e)):e},Ne=function(){if(f(this,i,q))return null;let e=$("span");return e.className=S,f(this,i,G)?(e.innerHTML=ye(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},X=function(e){let s=this.opts.nextStringDelay;this.queue.add([{delay:s[0]},...e,{delay:s[1]}])},H=function(e){Xe(this.element,e)},v=function(){f(this,i,T).length&&(f(this,i,q)?this.element.value=this.element.value.slice(0,-1):o(this,i,Q).call(this,f(this,i,T)[this.cursorPosition]))},Q=function(e){Ye(e,this.element)},P=function(e=0){return Qe(this.opts)[e]},D=function(){var e;return(e=this.predictedCursorPosition)!=null?e:this.cursorPosition},q=function(){return _(this.element)},G=function(){return!!this.opts.cursor&&!f(this,i,q)},T=function(){return We(this.element)},he);const ut=ke({name:"TypeIt",props:{options:{type:Object,default:()=>({})}},setup(t,{slots:e,expose:s}){function r(a){throw new TypeError(a)}function n(){return navigator.language}const u=xe(null);return Me(()=>{const a=u.value.querySelector(".type-it");if(!a){const h=n()==="zh-CN"?"请确保有且只有一个具有class属性为 'type-it' 的元素":"Please make sure that there is only one element with a Class attribute with 'type-it'";r(h)}const l=new ot(a,t.options).go();s({typeIt:l})}),()=>{var a,l;return re("div",{ref:u},[(l=(a=e.default)==null?void 0:a.call(e))!=null?l:re("span",{class:"type-it"},null)])}}}),dt=ut;export{dt as T};
