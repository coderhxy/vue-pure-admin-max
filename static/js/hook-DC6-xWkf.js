var F=(o,m,l)=>new Promise((p,i)=>{var s=a=>{try{n(l.next(a))}catch(u){i(u)}},f=a=>{try{n(l.throw(a))}catch(u){i(u)}},n=a=>a.done?p(a.value):Promise.resolve(a.value).then(s,f);n((l=l.apply(o,m)).next())});import{r as R,a as r,m as O,aX as Y,i as g,e as h,h as E,fQ as U,J as b,bo as X,af as q,X as A,L as J}from"./index-DUhDYU9H.js";import{_ as Q}from"./form.vue_vue_type_script_setup_true_lang-DnlwPOB3.js";import{u as G}from"./hooks-DiGVlrzF.js";import{q as K}from"./system-BEm4o0Sb.js";function ne(){const o=R({name:"",contactName:"",contactMobile:"",status:""}),m=r(),l=r([]),p=r(!1),i=r(!0),s=r({}),{switchStyle:f}=G(),n=R({total:0,pageSize:10,currentPage:1,background:!0}),a=[{label:"租户编号",prop:"id",minWidth:80},{label:"租户名",prop:"name",minWidth:140},{label:"租户套餐",prop:"packageName",minWidth:120},{label:"联系人",prop:"contactName",minWidth:120},{label:"联系电话",prop:"contactMobile",minWidth:120},{label:"账号额度",prop:"accountCount",minWidth:80},{label:"过期时间",prop:"expireTime",minWidth:160,formatter:({expireTime:e})=>Y(e).format("YYYY-MM-DD HH:mm:ss")},{label:"绑定域名",cellRenderer:e=>g(h("el-button"),{type:"primary",tag:"a",link:!0,href:e.row.website,target:"_blank",rel:"noopener noreferrer"},{default:()=>[e.row.website]}),minWidth:240},{label:"租户状态",cellRenderer:e=>{var t;return g(h("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(t=s.value[e.index])==null?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":d=>e.row.status=d,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:f.value,onChange:()=>u(e)},null)},minWidth:90},{label:"备注",cellRenderer:e=>g(h("el-button"),{type:"primary",tag:"a",link:!0,href:e.row.remark,target:"_blank",rel:"noopener noreferrer"},{default:()=>[E("代码地址："),e.row.remark]}),minWidth:520},{label:"创建时间",prop:"createTime",minWidth:160,formatter:({createTime:e})=>Y(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}];function u({row:e,index:t}){U.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.name}</strong>吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{s.value[t]=Object.assign({},s.value[t],{loading:!0}),setTimeout(()=>{s.value[t]=Object.assign({},s.value[t],{loading:!1}),b(`已${e.status===0?"停用":"启用"}${e.name}`,{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function $(e){b(`您删除了租户名为${e.name}的这条数据`,{type:"success"}),c()}function N(e){}function z(e){}function H(e){}function c(){return F(this,null,function*(){i.value=!0;const{data:e}=yield K(X(o));l.value=e.list,n.total=e.total,n.pageSize=e.pageSize,n.currentPage=e.currentPage,setTimeout(()=>{i.value=!1},500)})}const I=e=>{e&&(e.resetFields(),c())};function L(e="新增",t){var d,v,y,k,M,C,T,W,D,S;q({title:`${e}租户`,props:{formInline:{title:e,name:(d=t==null?void 0:t.name)!=null?d:"",packageId:(v=t==null?void 0:t.packageId)!=null?v:"",contactName:(y=t==null?void 0:t.contactName)!=null?y:"",contactMobile:(k=t==null?void 0:t.contactMobile)!=null?k:"",username:(M=t==null?void 0:t.username)!=null?M:"",password:(C=t==null?void 0:t.password)!=null?C:"",accountCount:(T=t==null?void 0:t.accountCount)!=null?T:0,expireTime:(W=t==null?void 0:t.expireTime)!=null?W:"",website:(D=t==null?void 0:t.website)!=null?D:"",remark:(S=t==null?void 0:t.remark)!=null?S:""}},width:"32%",draggable:!0,fullscreen:A(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>J(Q,{ref:m,formInline:null}),beforeSure:(_,{options:P})=>{const V=m.value.getRef(),j=P.props.formInline;function x(){b(`您${e}了租户名为${j.name}的这条数据`,{type:"success"}),_(),c()}V.validate(B=>{B&&x()})}})}return O(()=>{c()}),{form:o,isShow:p,loading:i,columns:a,dataList:l,pagination:n,onSearch:c,resetForm:I,openDialog:L,handleDelete:$,handleSizeChange:N,handleCurrentChange:z,handleSelectionChange:H}}export{ne as useTenantList};
