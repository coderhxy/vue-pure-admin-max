var v=(b,f,m)=>new Promise((p,d)=>{var l=e=>{try{i(m.next(e))}catch(u){d(u)}},V=e=>{try{i(m.throw(e))}catch(u){d(u)}},i=e=>e.done?p(e.value):Promise.resolve(e.value).then(l,V);i((m=m.apply(b,f)).next())});import{r as I,d as M,a as g,m as q,e as n,f as s,b as c,w as t,i as o,k as N,F as T,l as F,j as _,u as R}from"./index-DUhDYU9H.js";import{p as Y}from"./system-BEm4o0Sb.js";const B=I({name:[{required:!0,message:"租户名为必填项",trigger:"blur"}],packageId:[{required:!0,message:"租户套餐为必选项",trigger:"blur"}],contactName:[{required:!0,message:"联系人为必填项",trigger:"blur"}],contactMobile:[{required:!0,message:"联系电话为必填项",trigger:"blur"}],accountCount:[{required:!0,message:"账号额度为必填项",trigger:"blur"}],expireTime:[{required:!0,message:"过期时间为必选项",trigger:"blur"}],website:[{required:!0,message:"绑定域名为必填项",trigger:"blur"}]}),E=M({__name:"form",props:{formInline:{default:()=>({title:"新增",name:"",packageId:"",contactName:"",contactMobile:"",username:"",password:"",accountCount:0,expireTime:"",website:"",remark:""})}},setup(b,{expose:f}){const m=b,p=g([]),d=g(),l=g(m.formInline);function V(){return d.value}return q(()=>v(this,null,function*(){p.value=(yield Y()).data})),f({getRef:V}),(i,e)=>{const u=n("el-input"),r=n("el-form-item"),k=n("el-option"),w=n("el-select"),x=n("el-input-number"),U=n("el-date-picker"),C=n("el-form");return s(),c(C,{ref_key:"ruleFormRef",ref:d,model:l.value,rules:R(B),"label-width":"82px"},{default:t(()=>[o(r,{label:"租户名",prop:"name"},{default:t(()=>[o(u,{modelValue:l.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value.name=a),clearable:"",placeholder:"请输入租户名"},null,8,["modelValue"])]),_:1}),o(r,{label:"租户套餐",prop:"packageId"},{default:t(()=>[o(w,{modelValue:l.value.packageId,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.packageId=a),placeholder:"请选择租户套餐",clearable:"",class:"!w-full"},{default:t(()=>[(s(!0),N(T,null,F(p.value,(a,y)=>(s(),c(k,{key:y,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"联系人",prop:"contactName"},{default:t(()=>[o(u,{modelValue:l.value.contactName,"onUpdate:modelValue":e[2]||(e[2]=a=>l.value.contactName=a),clearable:"",placeholder:"请输入联系人"},null,8,["modelValue"])]),_:1}),o(r,{label:"联系电话",prop:"contactMobile"},{default:t(()=>[o(u,{modelValue:l.value.contactMobile,"onUpdate:modelValue":e[3]||(e[3]=a=>l.value.contactMobile=a),clearable:"",placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),l.value.title==="新增"?(s(),c(r,{key:0,label:"用户名称"},{default:t(()=>[o(u,{modelValue:l.value.username,"onUpdate:modelValue":e[4]||(e[4]=a=>l.value.username=a),clearable:"",placeholder:"请输入用户名称"},null,8,["modelValue"])]),_:1})):_("",!0),l.value.title==="新增"?(s(),c(r,{key:1,label:"用户密码"},{default:t(()=>[o(u,{modelValue:l.value.password,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.password=a),clearable:"",type:"password","show-password":"",placeholder:"请输入用户密码"},null,8,["modelValue"])]),_:1})):_("",!0),o(r,{label:"账号额度",prop:"accountCount"},{default:t(()=>[o(x,{modelValue:l.value.accountCount,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.accountCount=a),class:"!w-full",min:0,max:9999,"controls-position":"right"},null,8,["modelValue"])]),_:1}),o(r,{label:"过期时间",prop:"expireTime"},{default:t(()=>[o(U,{modelValue:l.value.expireTime,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.expireTime=a),type:"datetime",class:"!w-full",placeholder:"请选择过期时间",format:"YYYY-MM-DD HH:mm:ss","value-format":"x"},null,8,["modelValue"])]),_:1}),o(r,{label:"绑定域名",prop:"website"},{default:t(()=>[o(u,{modelValue:l.value.website,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.website=a),clearable:"",placeholder:"请输入绑定域名"},null,8,["modelValue"])]),_:1}),o(r,{label:"备注"},{default:t(()=>[o(u,{modelValue:l.value.remark,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.remark=a),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}});export{E as _};
