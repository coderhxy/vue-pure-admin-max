var F=(V,y,r)=>new Promise((f,p)=>{var d=n=>{try{i(r.next(n))}catch(m){p(m)}},u=n=>{try{i(r.throw(n))}catch(m){p(m)}},i=n=>n.done?f(n.value):Promise.resolve(n.value).then(d,u);i((r=r.apply(V,y)).next())});import{d as R,a as b,n as g,b as j,w as a,e as s,f as C,i as t,h as _,k as q,l as I,t as J,F as M,J as P}from"./index-DUhDYU9H.js";const A=R({__name:"ListDialogForm",props:{visible:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:visible"],setup(V,{emit:y}){const r=[{label:"网关",value:1},{label:"人工智能",value:2},{label:"CVM",value:3},{label:"防火墙",value:4},{label:"未知",value:5}],f=V,p=b(),d=b(!1),u=b(f.data),i=b(""),n=o=>F(this,null,function*(){o&&(yield o.validate(e=>{e&&(P("提交成功",{type:"success"}),d.value=!1,m(o))}))}),m=o=>{o&&o.resetFields()},x=()=>{d.value=!1,m(p.value)},U=y;g(()=>d.value,o=>{U("update:visible",o)}),g(()=>f.visible,o=>{d.value=o}),g(()=>f.data,o=>{u.value=o});const B={name:[{required:!0,message:"请输入产品名称",trigger:"blur"}]};return(o,e)=>{const c=s("el-input"),v=s("el-form-item"),w=s("el-radio"),D=s("el-radio-group"),L=s("el-option"),N=s("el-select"),O=s("el-form"),k=s("el-button"),S=s("el-dialog");return C(),j(S,{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=l=>d.value=l),title:"新建产品",width:680,draggable:"","before-close":x},{footer:a(()=>[t(k,{onClick:x},{default:a(()=>e[9]||(e[9]=[_("取消")])),_:1}),t(k,{type:"primary",onClick:e[5]||(e[5]=l=>n(p.value))},{default:a(()=>e[10]||(e[10]=[_(" 确定 ")])),_:1})]),default:a(()=>[t(O,{ref_key:"ruleFormRef",ref:p,model:u.value,rules:B,"label-width":"100px"},{default:a(()=>[t(v,{label:"产品名称",prop:"name"},{default:a(()=>[t(c,{modelValue:u.value.name,"onUpdate:modelValue":e[0]||(e[0]=l=>u.value.name=l),style:{width:"480px"},placeholder:"请输入产品名称"},null,8,["modelValue"])]),_:1}),t(v,{label:"产品状态",prop:"status"},{default:a(()=>[t(D,{modelValue:u.value.status,"onUpdate:modelValue":e[1]||(e[1]=l=>u.value.status=l)},{default:a(()=>[t(w,{value:"0"},{default:a(()=>e[7]||(e[7]=[_("已停用")])),_:1}),t(w,{value:"1"},{default:a(()=>e[8]||(e[8]=[_("已启用")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(v,{label:"产品描述",prop:"description"},{default:a(()=>[t(c,{modelValue:u.value.description,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value.description=l),style:{width:"480px"},placeholder:"请输入产品描述"},null,8,["modelValue"])]),_:1}),t(v,{label:"产品类型",prop:"type"},{default:a(()=>[t(N,{modelValue:u.value.type,"onUpdate:modelValue":e[3]||(e[3]=l=>u.value.type=l),clearable:"",style:{width:"480px"}},{default:a(()=>[(C(),q(M,null,I(r,(l,T)=>t(L,{key:T,value:l.value,label:l.label},{default:a(()=>[_(J(l.label),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),t(v,{label:"备注",prop:"mark"},{default:a(()=>[t(c,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=l=>i.value=l),type:"textarea",style:{width:"480px"},placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{A as _};
