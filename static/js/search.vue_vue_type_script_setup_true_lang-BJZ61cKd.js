var J=Object.defineProperty,K=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var R=(t,a,o)=>a in t?J(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,S=(t,a)=>{for(var o in a||(a={}))O.call(a,o)&&R(t,o,a[o]);if(L)for(var o of L(a))Q.call(a,o)&&R(t,o,a[o]);return t},k=(t,a)=>K(t,M(a));var D=(t,a,o)=>new Promise((d,u)=>{var i=s=>{try{r(o.next(s))}catch(h){u(h)}},f=s=>{try{r(o.throw(s))}catch(h){u(h)}},r=s=>s.done?d(s.value):Promise.resolve(s.value).then(i,f);r((o=o.apply(t,a)).next())});import{_ as X}from"./_plugin-vue_export-helper-C_DISmKY.js";import{u as Y,f as C,g as Z,a as ee,P as le,b as ae}from"./plus-form-8oxnisM-.js";import{d as x,a as w,aW as oe,p as E,u as l,n as se,f as m,b as v,ap as te,l as B,w as p,S as g,aq as N,bj as F,dn as re,dh as j,dp as ne,h as U,t as $,j as I,i as q,dq as ue,dr as pe,ds as de,dt as ie,du as ce,a5 as fe}from"./index-DizcWSWA.js";import{o as he}from"./orderBy-PtvynX3T.js";var me=x({name:"PlusSearch",__name:"index",props:{modelValue:{default:()=>({})},defaultValues:{default:()=>({})},columns:{default:()=>[]},hasFooter:{type:Boolean,default:!0},hasReset:{type:Boolean,default:!0},hasUnfold:{type:Boolean,default:!0},searchText:{default:""},resetText:{default:""},searchLoading:{type:Boolean,default:!1},inline:{type:Boolean,default:!0},showNumber:{default:2},labelPosition:{default:void 0},rowProps:{default:()=>({gutter:20})},colProps:{default:()=>({xs:24,sm:12,md:8,lg:8,xl:6})}},emits:["update:modelValue","search","change","reset","collapse"],setup(t,{expose:a,emit:o}){const d=t,u=o,{t:i}=Y(),f=w(),r=w(!1),s=w({}),h=oe(),z=C(h,ae()),W=C(h,Z()),A=C(h,ee()),_=E(()=>{const e=d.columns.filter(n=>l(n.hideInSearch)!==!0).map(n=>k(S({},n),{hideInForm:!1})).map(n=>k(S({},n),{order:n!=null&&n.order?l(n.order):0}));return he(e,["order"],["desc"])}),G=E(()=>d.hasUnfold&&!r.value?_.value.slice(0,d.showNumber):_.value);se(()=>d.modelValue,e=>{s.value=e},{immediate:!0});const H=(e,n)=>D(this,null,function*(){u("update:modelValue",e),u("change",e,n)}),P=()=>{u("search",s.value)},V=()=>{s.value=S({},d.defaultValues),u("update:modelValue",s.value),u("reset",s.value)},T=e=>{e.preventDefault(),r.value=!r.value,u("collapse",r.value)};return a({plusFormInstance:f,handleReset:V,handleSearch:P,handleUnfold:T}),(e,n)=>(m(),v(l(le),fe({ref_key:"plusFormInstance",ref:f},e.$attrs,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=y=>s.value=y),inline:e.inline,"label-position":e.labelPosition,"row-props":e.rowProps,"col-props":e.colProps,columns:G.value,class:"plus-search","has-footer":!1,onChange:H}),te({"search-footer":p(()=>[e.hasFooter?(m(),v(l(re),{key:0,class:"plus-search__button__wrapper",label:e.labelPosition==="top"?"placeholder":""},{default:p(()=>[g(e.$slots,"footer",{isShowUnfold:r.value,handleReset:V,handleSearch:P,handleUnfold:T},()=>[e.hasReset?(m(),v(l(j),{key:0,icon:l(ne),onClick:V},{default:p(()=>[U($(e.resetText||l(i)("plus.search.resetText")),1)]),_:1},8,["icon"])):I("v-if",!0),q(l(j),{type:"primary",loading:e.searchLoading,icon:l(ue),onClick:P},{default:p(()=>[U($(e.searchText||l(i)("plus.search.searchText")),1)]),_:1},8,["loading","icon"]),e.hasUnfold&&_.value.length>e.showNumber?(m(),v(l(pe),{key:1,class:"plus-search__unfold",type:"primary",underline:!1,href:"javaScript:;",onClick:T},{default:p(()=>[U($(r.value?l(i)("plus.search.retract"):l(i)("plus.search.expand"))+" ",1),q(l(de),null,{default:p(()=>[r.value?(m(),v(l(ie),{key:0})):(m(),v(l(ce),{key:1}))]),_:1})]),_:1})):I("v-if",!0)])]),_:3},8,["label"])):I("v-if",!0)]),_:2},[B(l(z),(y,c)=>({name:c,fn:p(b=>[g(e.$slots,c,N(F(b)))])})),B(l(W),(y,c)=>({name:c,fn:p(b=>[g(e.$slots,c,N(F(b)))])})),B(l(A),(y,c)=>({name:c,fn:p(b=>[g(e.$slots,c,N(F(b)))])})),e.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:p(()=>[g(e.$slots,"tooltip-icon")]),key:"0"}:void 0]),1040,["modelValue","inline","label-position","row-props","col-props","columns"]))}}),ve=X(me,[["__file","index.vue"]]);const be=ve,Pe=x({__name:"search",setup(t){const a=w({status:"0",time:new Date().toString()}),o=[{label:"名称",prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]},{label:"时间",prop:"time",valueType:"date-picker"},{label:"数量",prop:"number",valueType:"input-number",fieldProps:{precision:2,step:2}},{label:"城市",prop:"city",valueType:"cascader",options:[{value:"0",label:"陕西",children:[{value:"0-0",label:"西安",children:[{value:"0-0-0",label:"新城区"},{value:"0-0-1",label:"高新区"},{value:"0-0-2",label:"灞桥区"}]}]},{value:"1",label:"山西",children:[{value:"1-0",label:"太原",children:[{value:"1-0-0",label:"小店区"},{value:"1-0-1",label:"古交市"},{value:"1-0-2",label:"万柏林区"}]}]}]},{label:"地区",prop:"place",tooltip:"请精确到门牌号",fieldProps:{placeholder:"请精确到门牌号"}},{label:"到期时间",prop:"endTime",valueType:"date-picker",fieldProps:{type:"datetimerange",startPlaceholder:"请选择",endPlaceholder:"请选择"}},{label:"奖励",prop:"price"},{label:"提成",prop:"percentage"}],d=f=>{},u=f=>{},i=()=>{};return(f,r)=>(m(),v(l(be),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=s=>a.value=s),columns:o,"show-number":2,"label-width":"80","label-position":"right",onChange:d,onSearch:u,onReset:i},null,8,["modelValue"]))}});export{Pe as _};
