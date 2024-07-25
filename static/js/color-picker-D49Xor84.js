import{d as N,a as t,n as D,b as g,w as e,e as a,A as P,f as w,g as p,i as l,B as U,h as s,t as R}from"./index-C9LNgsF8.js";const S={class:"card-header"},A=p("p",{class:"mb-2"},"不同尺寸、选择透明度、预定义颜色",-1),O=p("p",{class:"mb-2"},"外部触发器",-1),q=N({name:"ColorPicker",__name:"color-picker",setup(T){const o=t("default"),d=t(),r=t(!1),u=t(),_=t("rgba(255, 69, 0, 0.68)"),f=t("hsla(209, 100%, 56%, 0.73)"),v=t(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);D(o,m=>m==="disabled"?d.value="default":d.value=o.value);function V(){r.value?u.value.hide():u.value.show(),r.value=!r.value}return(m,n)=>{const h=a("el-link"),c=a("el-radio"),z=a("el-radio-group"),b=a("el-space"),k=a("el-color-picker"),C=a("el-divider"),y=a("el-button"),x=a("el-card"),B=P("tippy");return w(),g(x,{shadow:"never"},{header:e(()=>[p("div",S,[l(b,{wrap:"",size:40},{default:e(()=>[U((w(),g(h,{href:"https://element-plus.org/zh-CN/component/color-picker.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:e(()=>[s(" 颜色选择器 ")]),_:1})),[[B,{content:"点击查看详细文档"}]]),l(z,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=i=>o.value=i)},{default:e(()=>[l(c,{value:"large"},{default:e(()=>[s("大尺寸")]),_:1}),l(c,{value:"default"},{default:e(()=>[s("默认尺寸")]),_:1}),l(c,{value:"small"},{default:e(()=>[s("小尺寸")]),_:1}),l(c,{value:"disabled"},{default:e(()=>[s("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),l(h,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/color-picker.vue",target:"_blank"},{default:e(()=>[s(" 代码位置 src/views/components/color-picker.vue ")]),_:1})]),default:e(()=>[A,l(k,{modelValue:_.value,"onUpdate:modelValue":n[1]||(n[1]=i=>_.value=i),"show-alpha":"",predefine:v.value,size:d.value,disabled:o.value==="disabled"},null,8,["modelValue","predefine","size","disabled"]),l(C),O,l(b,{wrap:""},{default:e(()=>[l(k,{ref_key:"colorPickerRef",ref:u,modelValue:f.value,"onUpdate:modelValue":n[2]||(n[2]=i=>f.value=i),"show-alpha":"",predefine:v.value,size:d.value,disabled:o.value==="disabled"},null,8,["modelValue","predefine","size","disabled"]),l(y,{size:d.value,disabled:o.value==="disabled",onClick:V},{default:e(()=>[s(R(r.value?"关闭":"打开"),1)]),_:1},8,["size","disabled"])]),_:1})]),_:1})}}});export{q as default};
