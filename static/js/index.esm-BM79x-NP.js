import{d as w,a as g,p as _,r as W,n as N,z as K,b6 as I,B as U,i as c,T as X,ba as D,aH as F,aF as Y,y as H,a0 as q}from"./index-DUhDYU9H.js";var L=function(e,t){var o,n=t.arg;if(!n){console.error("参数有误");return}var a=t.value,s=F(n)?n.value:(o=t.instance)===null||o===void 0?void 0:o.$refs[n];if(!s){console.error("没有找到 ".concat(n," 对应的实例"));return}if(typeof s.addReference!="function"){console.error("".concat(n," 对应的实例不是 VContextmenu"));return}e.$contextmenuKey=n,s.addReference(e,a)},G=function(e,t){var o,n=e.$contextmenuKey;if(n){var a=F(n)?n.value:(o=t.instance)===null||o===void 0?void 0:o.$refs[n];if(!a){console.error("没有找到 ".concat(n," 对应的实例"));return}if(typeof a.removeReference!="function"){console.error("".concat(n," 对应的实例不是 VContextmenu"));return}a.removeReference(e)}},z=function(e,t){G(e,t),L(e,t)},ue={mounted:L,updated:z,beforeUnmount:G},r={contextmenu:"v-contextmenu",contextmenuIcon:"v-contextmenu-icon",contextmenuInner:"v-contextmenu-inner",contextmenuDivider:"v-contextmenu-divider",contextmenuItem:"v-contextmenu-item",contextmenuItemHover:"v-contextmenu-item--hover",contextmenuItemDisabled:"v-contextmenu-item--disabled",contextmenuGroup:"v-contextmenu-group",contextmenuGroupTitle:"v-contextmenu-group__title",contextmenuGroupMenus:"v-contextmenu-group__menus",contextmenuSubmenu:"v-contextmenu-submenu",contextmenuSubmenuTitle:"v-contextmenu-submenu__title",contextmenuSubmenuMenus:"v-contextmenu-submenu__menus",contextmenuSubmenuMenusTop:"v-contextmenu-submenu__menus--top",contextmenuSubmenuMenusRight:"v-contextmenu-submenu__menus--right",contextmenuSubmenuMenusBottom:"v-contextmenu-submenu__menus--bottom",contextmenuSubmenuMenusLeft:"v-contextmenu-submenu__menus--left",contextmenuSubmenuArrow:"v-contextmenu-submenu__arrow"};function J(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!Y(u)}var Q={trigger:["contextmenu"]},oe=w({name:"VContextmenu",props:{modelValue:{type:Boolean,default:!1},autoAdjustPlacement:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},teleport:{type:[String,Object],default:function(){return"body"}},preventContextmenu:{type:Boolean,default:!0}},emits:["show","hide","update:modelValue","contextmenu"],setup:function(e,t){var o=t.emit,n=g(null),a=g(e.modelValue||!1),s=function(i){a.value=i,o("update:modelValue",i)},h=g({top:0,left:0}),M=_(function(){return{top:"".concat(h.value.top,"px"),left:"".concat(h.value.left,"px")}}),$=g(null),y=function(i,m){var l=i instanceof Event?m:i,R=(l==null?void 0:l.autoAdjustPlacement)||e.autoAdjustPlacement,f={top:(l==null?void 0:l.top)||0,left:(l==null?void 0:l.left)||0};if(i instanceof Event){var E,P;i.preventDefault(),f.top=(E=l==null?void 0:l.top)!==null&&E!==void 0?E:i.pageY,f.left=(P=l==null?void 0:l.left)!==null&&P!==void 0?P:i.pageX}s(!0),H(function(){if(R){var k=n.value;if(!k)return;var O=k.clientWidth,T=k.clientHeight;if(T+f.top>=window.innerHeight+window.scrollY){var V=f.top-T;V>window.scrollY&&(f.top=V)}if(O+f.left>=window.innerWidth+window.scrollX){var j=f.left-O;j>window.scrollX&&(f.left=j)}}h.value=f,o("show")})},C=function(){$.value=null,s(!1),o("hide")},d=W(new Map),x=g(),b=_(function(){return x.value&&d.get(x.value)}),A=function(i,m){var l=function(){return m!=null&&m.trigger?Array.isArray(m.trigger)?m.trigger:[m.trigger]:Q.trigger}(),R=function(E){e.disabled||(x.value=i,y(E,{}))};l.forEach(function(f){i.addEventListener(f,R)}),d.set(i,{triggers:l,handler:R})},B=function(i){var m=d.get(i);m&&(m.triggers.forEach(function(l){i.removeEventListener(l,m.handler)}),d.delete(i))},S=function(i){if(!(!i.target||!n.value||!x.value)){var m=n.value.contains(i.target)||b.value&&b.value.triggers.includes("click")&&x.value.contains(i.target);m||s(!1)}};return N(a,function(p){p?document.addEventListener("click",S):document.removeEventListener("click",S)}),K(function(){document.removeEventListener("click",S)}),I("visible",a),I("autoAdjustPlacement",e.autoAdjustPlacement),I("show",y),I("hide",C),{visible:a,style:M,currentReferenceOptions:b,currentOptions:$,contextmenuRef:n,addReference:A,removeReference:B,toggle:s,show:y,hide:C}},methods:{renderContent:function(){var e=this,t,o;return U(c("div",{class:r.contextmenu,ref:"contextmenuRef",style:this.style,onContextmenu:function(a){e.$props.preventContextmenu&&a.preventDefault(),e.$emit("contextmenu",a)}},[c("ul",{class:r.contextmenuInner},[(t=(o=this.$slots).default)===null||t===void 0?void 0:t.call(o,{triggerOptions:"currentReferenceOptions",options:"currentOptions"})])]),[[q,"visible"]])}},render:function(){var e;return this.visible?this.teleport?c(X,{to:this.teleport},J(e=this.renderContent())?e:{default:function(){return[e]}}):this.renderContent():null}});function Z(u,e){if(typeof u!="object"||!u)return u;var t=u[Symbol.toPrimitive];if(t!==void 0){var o=t.call(u,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(u)}function ee(u){var e=Z(u,"string");return typeof e=="symbol"?e:String(e)}function v(u,e,t){return e=ee(e),e in u?Object.defineProperty(u,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):u[e]=t,u}var re=w({name:"VContextmenuItem",props:{disabled:{type:Boolean,default:!1},hideOnClick:{type:Boolean,default:!0},contextmenuAsClick:{type:Boolean,default:!0}},emits:["click","contextmenu","mouseenter","mouseleave"],setup:function(e,t){var o=t.emit,n=D("hide"),a=g(!1),s=_(function(){return v(v(v({},r.contextmenuItem,!0),r.contextmenuItemDisabled,e.disabled),r.contextmenuItemHover,a.value)}),h=function(d){o("click",d),!e.disabled&&e.hideOnClick&&(n==null||n())},M=function(d){if(o("contextmenu",d),e.contextmenuAsClick){if(e.disabled)return;e.hideOnClick&&(n==null||n())}},$=function(d){o("mouseenter",d),!e.disabled&&(a.value=!0)},y=function(d){o("mouseleave",d),!e.disabled&&(a.value=!1)};return{classes:s,handleClick:h,handleContextmenu:M,handleMouseenter:$,handleMouseleave:y}},render:function(){var e,t;return c("li",{class:this.classes,onClick:this.handleClick,onContextmenu:this.handleContextmenu,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t)])}}),ie=w({name:"VContextmenuDivider",render:function(){return c("li",{class:r.contextmenuDivider},null)}}),te=w({name:"VContextmenuIcon",props:{name:{type:String,required:!0}},render:function(){return c("i",{class:[r.contextmenuIcon,"".concat(r.contextmenuIcon,"-").concat(this.name)]},null)}}),le=w({name:"VContextmenuSubmenu",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave"],setup:function(e,t){var o=t.emit,n=g(null),a=D("autoAdjustPlacement"),s=g(["top","right"]),h=g(!1),M=function(x){e.disabled||(h.value=!0,o("mouseenter",x),H(function(){var b=[];if(a){var A=x.target,B=A.getBoundingClientRect();if(!n.value)return;var S=n.value.clientWidth,p=n.value.clientHeight;B.right+S>=window.innerWidth?b.push("left"):b.push("right"),B.bottom+p>=window.innerHeight?b.push("bottom"):b.push("top")}s.value=b}))},$=function(x){e.disabled||(h.value=!1,o("mouseleave",x))},y=_(function(){return v(v(v(v({},r.contextmenuItem,!0),r.contextmenuSubmenuTitle,!0),r.contextmenuItemHover,h.value),r.contextmenuItemDisabled,e.disabled)}),C=_(function(){return v(v(v(v(v(v({},r.contextmenu,!0),r.contextmenuSubmenuMenus,!0),r.contextmenuSubmenuMenusTop,s.value.includes("top")),r.contextmenuSubmenuMenusRight,s.value.includes("right")),r.contextmenuSubmenuMenusBottom,s.value.includes("bottom")),r.contextmenuSubmenuMenusLeft,s.value.includes("left"))});return{hover:h,submenuRef:n,titleClasses:y,menusClasses:C,handleMouseenter:M,handleMouseleave:$}},render:function(){var e,t,o,n;return c("li",{class:r.contextmenuSubmenu,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[c("div",{class:this.titleClasses},[((e=(t=this.$slots).title)===null||e===void 0?void 0:e.call(t))||this.title,c("span",{class:r.contextmenuSubmenuArrow},[c(te,{name:"right-arrow"},null)])]),this.hover?c("div",{ref:"submenuRef",class:this.menusClasses},[c("ul",{class:r.contextmenuInner},[(o=(n=this.$slots).default)===null||o===void 0?void 0:o.call(n)])]):null])}}),ae=w({name:"VContextmenuGroup",props:{title:{type:String,default:void 0},maxWidth:{type:[Number,String],default:void 0}},setup:function(e){var t=_(function(){if(e.maxWidth)return{"max-width":typeof e.maxWidth=="number"?"".concat(e.maxWidth,"px"):e.maxWidth,"overflow-x":"auto"}});return{style:t}},methods:{renderTitle:function(){var e,t,o=((e=(t=this.$slots).title)===null||e===void 0?void 0:e.call(t))||this.title;return o?c("div",{class:r.contextmenuGroupTitle},[o]):null}},render:function(){var e,t;return c("li",{class:r.contextmenuGroup},[this.renderTitle(),c("ul",{style:this.style,class:r.contextmenuGroupMenus},[(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t)])])}});export{oe as C,re as a,ie as b,le as c,ae as d,ue as e};
