import{t as s}from"./data-DmxWGFRz.js";import{d,a as _,e as o,f as m,k as c,i as e,w as i,u as b}from"./index-CcH4JEIi.js";const V=d({__name:"layout",setup(f){const a=_("fixed"),n=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(v,t)=>{const l=o("el-radio-button"),u=o("el-radio-group"),r=o("pure-table");return m(),c("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=p=>a.value=p)},{default:i(()=>[e(l,{label:"fixed",value:"fixed"}),e(l,{label:"auto",value:"auto"})]),_:1},8,["modelValue"]),e(r,{data:b(s),columns:n,"table-layout":a.value},null,8,["data","table-layout"])])}}});export{V as _};
