var U=(I,g,u)=>new Promise((w,p)=>{var m=s=>{try{o(u.next(s))}catch(f){p(f)}},b=s=>{try{o(u.throw(s))}catch(f){p(f)}},o=s=>s.done?w(s.value):Promise.resolve(s.value).then(m,b);o((u=u.apply(I,g)).next())});import{f as $}from"./mock-Bbajq-j5.js";import{d as A,a as d,r as L,gc as D,e as r,f as E,k as M,i as l,w as t,u as h,h as x,g as R,$ as F,v as j,aG as G,L as y}from"./index-CcH4JEIi.js";import{R as T}from"./index-CezaF9YY.js";import{d as H}from"./upload-line-ClmDKJCy.js";const J=R("h3",{class:"my-8"},"个人信息",-1),K=R("span",{class:"ml-2"},"更新头像",-1),Q={class:"dialog-footer"},le=A({name:"Profile",__name:"Profile",setup(I){const g=d(""),u=d(),w=d(),p=d(),m=d(!1),b=d(),o=L({avatar:"",nickname:"",email:"",phone:"",description:""}),s=L({nickname:[{required:!0,message:"昵称必填",trigger:"blur"}]});function f(a,e){const c=[{value:"@qq.com"},{value:"@126.com"},{value:"@163.com"}];let V=[],i=[];c.map(_=>i.push({value:a.split("@")[0]+_.value})),V=a?i.filter(_=>_.value.toLowerCase().indexOf(a.toLowerCase())===0):i,e(V)}const O=a=>{const e=new FileReader;e.onload=c=>{g.value=c.target.result,m.value=!0},e.readAsDataURL(a.raw)},k=()=>{w.value.hidePopover(),p.value.clearFiles(),m.value=!1},B=({blob:a})=>u.value=a,P=()=>{const a=G({files:new File([u.value],"avatar")});$(a).then(({success:e,data:c})=>{e?(y("更新头像成功",{type:"success"}),k()):y("更新头像失败")}).catch(e=>{y(`提交异常 ${e}`,{type:"error"})})},S=a=>U(this,null,function*(){yield a.validate((e,c)=>{e&&y("更新信息成功",{type:"success"})})});return D().then(a=>{Object.assign(o,a.data)}),(a,e)=>{const c=r("el-avatar"),V=r("IconifyIconOffline"),i=r("el-button"),_=r("el-upload"),v=r("el-form-item"),C=r("el-input"),q=r("el-autocomplete"),z=r("el-form"),N=r("el-dialog");return E(),M("div",{class:j(["min-w-[180px]",h(F)()?"max-w-[100%]":"max-w-[70%]"])},[J,l(z,{ref_key:"userInfoFormRef",ref:b,"label-position":"top",rules:s,model:o},{default:t(()=>[l(v,{label:"头像"},{default:t(()=>[l(c,{size:80,src:o.avatar},null,8,["src"]),l(_,{ref_key:"uploadRef",ref:p,accept:"image/*",action:"#",limit:1,"auto-upload":!1,"show-file-list":!1,"on-change":O},{default:t(()=>[l(i,{plain:"",class:"ml-4"},{default:t(()=>[l(V,{icon:h(H)},null,8,["icon"]),K]),_:1})]),_:1},512)]),_:1}),l(v,{label:"昵称",prop:"nickname"},{default:t(()=>[l(C,{modelValue:o.nickname,"onUpdate:modelValue":e[0]||(e[0]=n=>o.nickname=n),placeholder:"请输入昵称"},null,8,["modelValue"])]),_:1}),l(v,{label:"邮箱",prop:"email"},{default:t(()=>[l(q,{modelValue:o.email,"onUpdate:modelValue":e[1]||(e[1]=n=>o.email=n),"fetch-suggestions":f,"trigger-on-focus":!1,placeholder:"请输入邮箱",clearable:"",class:"w-full"},null,8,["modelValue"])]),_:1}),l(v,{label:"联系电话"},{default:t(()=>[l(C,{modelValue:o.phone,"onUpdate:modelValue":e[2]||(e[2]=n=>o.phone=n),placeholder:"请输入联系电话",clearable:""},null,8,["modelValue"])]),_:1}),l(v,{label:"简介"},{default:t(()=>[l(C,{modelValue:o.description,"onUpdate:modelValue":e[3]||(e[3]=n=>o.description=n),placeholder:"请输入简介",type:"textarea",autosize:{minRows:6,maxRows:8},maxlength:"56","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(i,{type:"primary",onClick:e[4]||(e[4]=n=>S(b.value))},{default:t(()=>[x(" 更新信息 ")]),_:1})]),_:1},8,["rules","model"]),l(N,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=n=>m.value=n),width:"40%",title:"编辑头像","destroy-on-close":"",closeOnClickModal:!1,"before-close":k,fullscreen:h(F)()},{footer:t(()=>[R("div",Q,[l(i,{bg:"",text:"",onClick:k},{default:t(()=>[x("取消")]),_:1}),l(i,{bg:"",text:"",type:"primary",onClick:P},{default:t(()=>[x(" 确定 ")]),_:1})])]),default:t(()=>[l(h(T),{ref_key:"cropRef",ref:w,imgSrc:g.value,onCropper:B},null,8,["imgSrc"])]),_:1},8,["modelValue","fullscreen"])],2)}}});export{le as _};
