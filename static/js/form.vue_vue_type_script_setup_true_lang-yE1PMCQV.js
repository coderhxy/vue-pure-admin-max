import{f as y}from"./mock-DSYshLc4.js";import{d as w,a as c,r as g,e as r,f as k,b as L,w as a,i as t,g as V,u as C,h as m,aG as F,L as u}from"./index-C9LNgsF8.js";const H={width:24,height:24,body:'<path fill="currentColor" d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7Zm9-10v7h-2V9H6l6-6l6 6h-5Z"/>'},I={class:"el-upload__text"},D=w({__name:"form",setup(R){const i=c(),_=c(),o=g({fileList:[],date:""}),v=s=>{s&&s.validate(e=>{if(e){const f=F({files:o.fileList.map(l=>({raw:l.raw})),date:o.date});y(f).then(({success:l})=>{l?u("提交成功",{type:"success"}):u("提交失败")}).catch(l=>{u(`提交异常 ${l}`,{type:"error"})})}else return!1})},b=s=>{s&&s.resetFields()};return(s,e)=>{const f=r("IconifyIconOffline"),l=r("el-upload"),d=r("el-form-item"),h=r("el-date-picker"),p=r("el-button"),x=r("el-form");return k(),L(x,{ref_key:"formRef",ref:i,model:o,"label-width":"82px"},{default:a(()=>[t(d,{label:"附件",prop:"fileList",rules:[{required:!0,message:"附件不能为空"}]},{default:a(()=>[t(l,{ref_key:"uploadRef",ref:_,"file-list":o.fileList,"onUpdate:fileList":e[0]||(e[0]=n=>o.fileList=n),drag:"",multiple:"",action:"#",class:"!w-[200px]","auto-upload":!1},{default:a(()=>[V("div",I,[t(f,{icon:C(H),width:"26",class:"m-auto mb-2"},null,8,["icon"]),m(" 可点击或拖拽上传 ")])]),_:1},8,["file-list"])]),_:1}),t(d,{label:"日期",prop:"date",rules:[{required:!0,message:"日期不能为空"}]},{default:a(()=>[t(h,{modelValue:o.date,"onUpdate:modelValue":e[1]||(e[1]=n=>o.date=n),type:"datetime",class:"!w-[200px]",placeholder:"请选择日期时间","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(d,null,{default:a(()=>[t(p,{type:"primary",text:"",bg:"",onClick:e[2]||(e[2]=n=>v(i.value))},{default:a(()=>[m(" 提交 ")]),_:1}),t(p,{text:"",bg:"",onClick:e[3]||(e[3]=n=>b(i.value))},{default:a(()=>[m("重置")]),_:1})]),_:1})]),_:1},8,["model"])}}});export{D as _};
