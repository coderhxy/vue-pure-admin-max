import{s as v,a as h}from"./vue-virtual-scroller.esm-k0Cx_hha.js";import{d as x,a as r,p as g,e as d,f as w,k as I,g as o,h as V,i,w as m,u as p,t as y,_ as C}from"./index-CcH4JEIi.js";const k={class:"dynamic-scroller-demo"},b={class:"flex-ac mb-4 shadow-2xl"},z={class:"flex items-center"},B=x({__name:"vertical",setup(N){const l=r([]),a=r("");for(let e=0;e<800;e++)l.value.push({id:e});const u=g(()=>{if(!a.value)return l.value;const e=a.value;return l.value.filter(t=>t.id==e)});return(e,t)=>{const _=d("el-input"),f=d("IconifyIconOnline");return w(),I("div",k,[o("div",b,[V(" 垂直模式 vertical "),i(_,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),class:"!w-[350px]",clearable:"",placeholder:"Filter..."},null,8,["modelValue"])]),i(p(h),{items:u.value,"min-item-size":54,class:"scroller"},{default:m(({item:s,index:n,active:c})=>[i(p(v),{item:s,active:c,"size-dependencies":[s.id],"data-index":n,"data-active":c,title:`Click to change message ${n}`,class:"message"},{default:m(()=>[o("div",z,[i(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),o("span",null,y(s.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title"])]),_:1},8,["items"])])}}}),$=C(B,[["__scopeId","data-v-7ec069cd"]]);export{$ as default};
