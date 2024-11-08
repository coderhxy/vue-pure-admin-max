import{d as I,Z as E,p as M,a0 as F,y as p,i as o,u as N,F as k,a_ as D,a$ as c,b0 as i,Y as T,a as L,k as K,l as j,e as R,f as w,b as Y,w as $,g as Z,t as A,h as z,j as G}from"./index.js";const d="stay",h="hs-on",f="hs-off",m="hs-range",g="both-left-sides",b="both-right-sides";let H="right",S=[],s=[];const J={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}},O=I({name:"ReSelector",props:J,emits:["selectedVal"],setup(l,{emit:_}){const a=E(),y=l.value,v=M(()=>l.disabled),q=M(()=>{const e=[];let t=0,n=y;for(y!==Math.floor(y)&&n--;t<n;t++)e.push(h);for(;t<l.max.length;t++)e.push(f);return e}),x=e=>{if(!l.disabled){if(s.length===1){S.length<1&&S.push({index:e});let t=S[0].index;if(e>t)for(H="right",D(!1,b,document.querySelector(".hs-select__item"+s[0].index));e>=t;)c(document.querySelector(".hs-select__item"+t),m),t++;else for(H="left",D(!0,b,document.querySelector(".hs-select__item"+s[0].index));e<=t;)c(document.querySelector(".hs-select__item"+t),m),t--}c(document.querySelector("."+f+e),h)}},C=e=>{if(l.disabled)return;const t=document.querySelector("."+f+e);if(t.className.includes(d))return!1;if(i(t,h),s.length===1){const n=S[0].index;if(e>=n)for(let r=0;r<=e;r++)i(document.querySelector(".hs-select__item"+r),m);else for(;e<=n;)i(document.querySelector(".hs-select__item"+e),m),e++}},u=(e,t)=>{if(l.disabled)return;const n=s.length;n<2?(s.push({item:t,index:e}),c(document.querySelector("."+f+e),d),c(document.querySelector(".hs-select__item"+s[0].index),g),s[1]&&(H==="right"?c(document.querySelector(".hs-select__item"+s[1].index),b):c(document.querySelector(".hs-select__item"+s[1].index),g)),n===1&&(H==="right"?_("selectedVal",{left:s[0].item,right:s[1].item,whole:s}):_("selectedVal",{left:s[1].item,right:s[0].item,whole:s}))):p(()=>{s.forEach(r=>{i(document.querySelector("."+f+r.index),h,d),i(document.querySelector(".hs-select__item"+r.index),g,b)}),s=[],S=[];for(let r=0;r<=l.max.length;r++){const B=document.querySelector(".hs-select__item"+r);B&&i(B,m)}s.push({item:t,index:e}),c(document.querySelector("."+f+e),d),c(document.querySelector(".hs-select__item"+s[0].index),g)})},V=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"传入的数组长度必须是2";for(e.sort((t,n)=>t-n),c(a.refs["hsdiv"+l.HsKey+e[0]],h,d),c(a.refs["hstd"+l.HsKey+e[0]],g),c(a.refs["hsdiv"+l.HsKey+e[1]],h,d),c(a.refs["hstd"+l.HsKey+e[1]],b);e[1]>=e[0];)c(a.refs["hstd"+l.HsKey+e[0]],m),e[0]++}};return F(()=>{p(()=>{V(l.echo)})}),()=>o(k,null,[o("table",{cellspacing:"0",cellpadding:"0"},[o("tbody",null,[o("tr",null,[l.max.map((e,t)=>o("td",{"data-index":l.HsKey,ref:`hstd${l.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>x(t),onMouseleave:()=>C(t),onClick:()=>u(t,e),style:{cursor:N(v)?"auto":"pointer",textAlign:"center"},key:t},[o("div",{ref:`hsdiv${l.HsKey}${t}`,class:`hs-item ${[N(q)[t]+t]}`},[o("span",null,[e])])]))])])])])}}),P=T(O),Q={class:"font-medium"},U={key:0,class:"mt-3"},X=I({name:"Selector",__name:"selector",setup(l){const _=L(""),a=L([{title:"基础用法",echo:[],disabled:!1},{title:"回显模式",echo:[2,7],disabled:!0}]),y=({left:v,right:q})=>{_.value=`${v}-${q}`};return(v,q)=>{const x=R("el-link"),C=R("el-card");return w(),K("div",null,[(w(!0),K(k,null,j(a.value,(u,V)=>(w(),Y(C,{key:V,class:"mb-2",shadow:"never"},{header:$(()=>[Z("p",Q,A(u.title),1),o(x,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/selector.vue",target:"_blank"},{default:$(()=>[z(" 代码位置 src/views/components/selector.vue ")]),_:1})]),default:$(()=>[o(N(P),{HsKey:V,echo:u.echo,disabled:u.disabled,onSelectedVal:y},null,8,["HsKey","echo","disabled"]),u.disabled?G("",!0):(w(),K("h4",U,"选中范围："+A(_.value),1))]),_:2},1024))),128))])}}});export{X as default};
