import{d as X,a as u,ag as N,b as d,w as l,e as n,A as q,f as s,g as m,i as a,B as G,h as o,j as H,k as S,l as U,t as L,F as R,a6 as J,y as M,aX as Q,C as Y,D as Z,_ as ee}from"./index.js";const g=_=>(Y("data-v-97d69d4b"),_=_(),Z(),_),le={class:"card-header"},ae=g(()=>m("p",{class:"mb-2"},"基础按钮",-1)),te=g(()=>m("br",null,null,-1)),se=g(()=>m("br",null,null,-1)),ne=g(()=>m("p",{class:"mb-2"},"动态编辑标签",-1)),oe=X({name:"PureTag",__name:"tag",setup(_){const r=u("default"),v=u(!1),y=u(!1),k=u("dark"),c=u([{type:"primary",text:"Primary"},{type:"success",text:"Success"},{type:"info",text:"Info"},{type:"warning",text:"Warning"},{type:"danger",text:"Danger"}]),$=b=>{c.value.splice(c.value.indexOf(b),1)},j=N(c.value);function F(){c.value=N(j)}const p=u(""),f=u(["Tag 1","Tag 2","Tag 3"]),h=u(!1),C=u(),K=b=>{f.value.splice(f.value.indexOf(b),1)},O=()=>{h.value=!0,M(()=>{C.value.input.focus()})},w=()=>{Q(p.value)||f.value.push(p.value),h.value=!1,p.value=""};return(b,t)=>{const z=n("el-link"),i=n("el-radio"),T=n("el-radio-group"),V=n("el-space"),I=n("el-checkbox"),x=n("el-button"),B=n("el-tag"),P=n("el-divider"),A=n("el-input"),E=n("el-card"),W=q("tippy");return s(),d(E,{shadow:"never"},{header:l(()=>[m("div",le,[a(V,{wrap:"",size:40},{default:l(()=>[G((s(),d(z,{href:"https://element-plus.org/zh-CN/component/tag.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:l(()=>[o(" Tag 标签 ")]),_:1})),[[W,{content:"点击查看详细文档"}]]),a(T,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e)},{default:l(()=>[a(i,{value:"large"},{default:l(()=>[o("大尺寸")]),_:1}),a(i,{value:"default"},{default:l(()=>[o("默认尺寸")]),_:1}),a(i,{value:"small"},{default:l(()=>[o("小尺寸")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),a(z,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/tag.vue",target:"_blank"},{default:l(()=>[o(" 代码位置 src/views/components/tag.vue ")]),_:1})]),default:l(()=>[ae,a(T,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value=e),class:"mb-3"},{default:l(()=>[a(i,{label:"dark",value:"dark"}),a(i,{label:"light",value:"light"}),a(i,{label:"plain",value:"plain"})]),_:1},8,["modelValue"]),te,a(V,{class:"mb-3"},{default:l(()=>[c.value.length>0?(s(),d(I,{key:0,modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value=e),label:"可移除"},null,8,["modelValue"])):(s(),d(x,{key:1,size:"small",text:"",bg:"",class:"mr-6",onClick:F},{default:l(()=>[o(" 重置 ")]),_:1})),v.value&&c.value.length>0?(s(),d(x,{key:2,size:"small",text:"",bg:"",class:"mr-6 ml-4",onClick:t[3]||(t[3]=e=>c.value=[])},{default:l(()=>[o(" 移除全部 ")]),_:1})):H("",!0),a(I,{modelValue:y.value,"onUpdate:modelValue":t[4]||(t[4]=e=>y.value=e),label:"圆形"},null,8,["modelValue"])]),_:1}),se,a(V,{wrap:""},{default:l(()=>[(s(!0),S(R,null,U(c.value,(e,D)=>(s(),d(B,{key:D,type:e.type,effect:k.value,closable:v.value,round:y.value,size:r.value,disabled:r.value==="disabled",onClose:ue=>$(e)},{default:l(()=>[o(L(e.text),1)]),_:2},1032,["type","effect","closable","round","size","disabled","onClose"]))),128))]),_:1}),a(P),ne,(s(!0),S(R,null,U(f.value,e=>(s(),d(B,{key:e,class:"mx-1",closable:"",size:r.value,"disable-transitions":!1,onClose:D=>K(e)},{default:l(()=>[o(L(e),1)]),_:2},1032,["size","onClose"]))),128)),h.value?(s(),d(A,{key:0,ref_key:"InputRef",ref:C,modelValue:p.value,"onUpdate:modelValue":t[5]||(t[5]=e=>p.value=e),class:"ml-1 !w-20",size:"small",onKeyup:J(w,["enter"]),onBlur:w},null,8,["modelValue"])):(s(),d(x,{key:1,class:"button-new-tag ml-1",size:"small",onClick:O},{default:l(()=>[o(" 新建标签 ")]),_:1}))]),_:1})}}}),ce=ee(oe,[["__scopeId","data-v-97d69d4b"]]);export{ce as default};
