var te=Object.defineProperty;var $=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var K=(e,r,t)=>r in e?te(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,I=(e,r)=>{for(var t in r||(r={}))ae.call(r,t)&&K(e,t,r[t]);if($)for(var t of $(r))ne.call(r,t)&&K(e,t,r[t]);return e};var G=(e,r,t)=>new Promise((V,d)=>{var b=o=>{try{c(t.next(o))}catch(i){d(i)}},v=o=>{try{c(t.throw(o))}catch(i){d(i)}},c=o=>o.done?V(o.value):Promise.resolve(o.value).then(b,v);c((t=t.apply(e,r)).next())});import{S as ue}from"./sortable.esm-CkCitmyH.js";import{d as re,a as f,Z as oe,am as T,ag as m,p as O,i as l,a5 as ie,F as M,B as E,A as R,e as u,h as D,u as P,ac as S,aD as ce,cV as se,y as de,X as fe}from"./index-C9LNgsF8.js";import{u as me}from"./epTheme-Cg82m5DB.js";import{E as ve,R as xe,C as be,D as he,S as ge}from"./collapse-Dv0AWJFr.js";function Ce(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ce(e)}const ye={title:{type:String,default:"列表"},vxeTableRef:{type:Object},columns:{type:Array,default:()=>[]},tree:{type:Boolean,default:!1},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},ke=re({name:"VxeTableBar",props:ye,emits:["refresh"],setup(e,{emit:r,slots:t,attrs:V}){const d=f("small"),b=f(!1),v=f(!0),c=f(!1),o=oe(),i=f(e.isExpandAll);let x=T(m(e==null?void 0:e.columns),"title");const h=f(T(m(e==null?void 0:e.columns),"title")),s=f(m(e==null?void 0:e.columns)),B=O(()=>a=>({background:a===d.value?me().epThemeColor:"",color:a===d.value?"#fff":"var(--el-text-color-primary)"})),C=O(()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"]),H=O(()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]);function L(){b.value=!0,r("refresh"),se(500).then(()=>b.value=!1)}function U(){i.value=!i.value,i.value?e.vxeTableRef.setAllTreeExpand(!0):e.vxeTableRef.clearTreeExpand(),e.vxeTableRef.refreshColumn()}function A(){const a=m(s.value).filter(n=>h.value.includes(n.title));e.vxeTableRef.reloadColumn(a)}function W(a){h.value=a?x:[],c.value=!1,A()}function X(a){h.value=a;const n=a.length;v.value=n===x.length,c.value=n>0&&n<x.length}function Z(){return G(this,null,function*(){v.value=!0,c.value=!1,s.value=m(e==null?void 0:e.columns),x=[],x=yield T(m(e==null?void 0:e.columns),"title"),h.value=T(m(e==null?void 0:e.columns),"title"),e.vxeTableRef.refreshColumn()})}function j(a){d.value=a,e.vxeTableRef.refreshColumn()}const q={dropdown:()=>l(u("el-dropdown-menu"),{class:"translation"},{default:()=>[l(u("el-dropdown-item"),{style:B.value("medium"),onClick:()=>j("medium")},{default:()=>[D("宽松")]}),l(u("el-dropdown-item"),{style:B.value("small"),onClick:()=>j("small")},{default:()=>[D("默认")]}),l(u("el-dropdown-item"),{style:B.value("mini"),onClick:()=>j("mini")},{default:()=>[D("紧凑")]})]})},J=a=>{a.preventDefault(),de(()=>{var k;const n=((k=o==null?void 0:o.proxy)==null?void 0:k.$refs[`VxeGroupRef${P(e.tableKey)}`]).$el.firstElementChild;ue.create(n,{animation:300,handle:".drag-btn",onEnd:({newIndex:g,oldIndex:p,item:ee})=>{const F=ee,N=F.parentNode,_=s.value[p],z=s.value[g];if(_!=null&&_.fixed||z!=null&&z.fixed){const w=N.children[p];g>p?N.insertBefore(F,w):N.insertBefore(F,w&&w.nextElementSibling);return}const le=s.value.splice(p,1)[0];s.value.splice(g,0,le),A()}})})},Q=a=>!!s.value.filter(n=>S(n.title)===S(a))[0].fixed,y=a=>({content:a,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),Y={reference:()=>E(l(ge,{class:["w-[16px]",C.value]},null),[[R("tippy"),y("列设置")]])};return()=>{let a;return l(M,null,[l("div",ie(V,{class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"}),[l("div",{class:"flex justify-between w-full h-[60px] p-4"},[t!=null&&t.title?t.title():l("p",{class:"font-bold truncate"},[e.title]),l("div",{class:"flex items-center justify-around"},[t!=null&&t.buttons?l("div",{class:"flex mr-4"},[t.buttons()]):null,e.tree?l(M,null,[E(l(ve,{class:["w-[16px]",C.value],style:{transform:i.value?"none":"rotate(-90deg)"},onClick:()=>U()},null),[[R("tippy"),y(i.value?"折叠":"展开")]]),l(u("el-divider"),{direction:"vertical"},null)]):null,E(l(xe,{class:["w-[16px]",C.value,b.value?"animate-spin":""],onClick:()=>L()},null),[[R("tippy"),y("刷新")]]),l(u("el-divider"),{direction:"vertical"},null),E(l(u("el-dropdown"),{trigger:"click"},I({default:()=>[l(be,{class:["w-[16px]",C.value]},null)]},q)),[[R("tippy"),y("密度")]]),l(u("el-divider"),{direction:"vertical"},null),l(u("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},I({default:()=>[l("div",{class:[H.value]},[l(u("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:v.value,"onUpdate:modelValue":n=>v.value=n,indeterminate:c.value,onChange:n=>W(n)},null),l(u("el-button"),{type:"primary",link:!0,onClick:()=>Z()},{default:()=>[D("重置")]})]),l("div",{class:"pt-[6px] pl-[11px]"},[l(u("el-scrollbar"),{"max-height":"36vh"},{default:()=>[l(u("el-checkbox-group"),{ref:`VxeGroupRef${P(e.tableKey)}`,modelValue:h.value,onChange:n=>X(n)},{default:()=>[l(u("el-space"),{direction:"vertical",alignment:"flex-start",size:0},Ce(a=x.map((n,k)=>l("div",{class:"flex items-center"},[l(he,{class:["drag-btn w-[16px] mr-2",Q(n)?"!cursor-no-drop":"!cursor-grab"],onMouseenter:g=>J(g)},null),l(u("el-checkbox"),{key:k,label:n,value:n,onChange:A},{default:()=>[l("span",{title:S(n),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[S(n)])]})])))?a:{default:()=>[a]})]})]})])]},Y))])]),t.default({size:d.value,dynamicColumns:s.value})])])}}}),De=fe(ke);export{De as V};
