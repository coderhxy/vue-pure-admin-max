var C=(o,c,n)=>new Promise((r,l)=>{var S=a=>{try{s(n.next(a))}catch(m){l(m)}},p=a=>{try{s(n.throw(a))}catch(m){l(m)}},s=a=>a.done?r(a.value):Promise.resolve(a.value).then(S,p);s((n=n.apply(o,c)).next())});import{a as u,r as _,m as N,$ as R,i as M,e as z,d0 as U,cK as E,L as y,ah as F,N as W}from"./index-DUNyaDI6.js";import{_ as K}from"./dict.vue_vue_type_script_setup_true_lang-CR789zPf.js";import q from"./index-Ci8wt2nV.js";import{u as A}from"./hooks-Cya_nZSB.js";import{f as G,h as J}from"./system-96Ho1NNj.js";import"./index-DTmqByIN.js";import"./rule-DjF5db9G.js";function ne(){const o=u(""),c=u(),n=u([]),r=u(!0),l=u({}),{switchStyle:S}=A(),p=u([]),s=u(!0),a=_({total:0,pageSize:10,currentPage:1,background:!0}),m=[{label:"字典标签",prop:"label",minWidth:130,cellRenderer:e=>M(z("el-button"),{size:"small",color:e.row.color},{default:()=>[e.row.label]})},{label:"字典值",prop:"value",minWidth:130},{label:"状态",prop:"status",minWidth:90,cellRenderer:e=>{var t;return M(z("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(t=l.value[e.index])==null?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":i=>e.row.status=i,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:S.value,onChange:()=>x(e)},null)}},{sortable:!0,label:"排序",minWidth:90,prop:"sort"},{label:"备注",minWidth:90,prop:"remark"},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:e})=>U(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}];function x({row:e,index:t}){E.confirm(`确定要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.label}</strong>字典标签吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{l.value[t]=Object.assign({},l.value[t],{loading:!0}),setTimeout(()=>{l.value[t]=Object.assign({},l.value[t],{loading:!1}),y("已成功修改状态",{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function L(e){y(`您删除了字典标签为${e.label}的这条数据`,{type:"success"}),f()}function H(e){}function O(e){}function f(){return C(this,null,function*(){r.value=!0;const{data:e}=yield G({dictId:o.value});n.value=e.list,a.total=e.total,a.pageSize=e.pageSize,a.currentPage=e.currentPage,setTimeout(()=>{r.value=!1},500)})}function P({id:e,selected:t}){o.value=t?e:"",f()}function Y(e="新增",t){var i,d,g,v,h,b;F({title:`${e}字典详情`,props:{formInline:{title:e,label:(i=t==null?void 0:t.label)!=null?i:"",value:(d=t==null?void 0:t.value)!=null?d:"",color:(g=t==null?void 0:t.color)!=null?g:"#6abe39",sort:(v=t==null?void 0:t.sort)!=null?v:999,status:(h=t==null?void 0:t.status)!=null?h:1,remark:(b=t==null?void 0:t.remark)!=null?b:""}},width:"32%",draggable:!0,fullscreen:R(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>W(q,{ref:c}),beforeSure:($,{options:D})=>{const k=c.value.getRef(),B=D.props.formInline;function I(){y(`您${e}了字典标签为${B.label}的这条数据`,{type:"success"}),$(),f()}k.validate(V=>{V&&I()})}})}function j(e="新增",t){var i,d,g;F({title:`${e}字典`,props:{formInline:{title:e,name:(i=t==null?void 0:t.name)!=null?i:"",code:(d=t==null?void 0:t.code)!=null?d:"",remark:(g=t==null?void 0:t.remark)!=null?g:""}},width:"32%",draggable:!0,fullscreen:R(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>W(K,{ref:c}),beforeSure:(v,{options:h})=>{const b=c.value.getRef(),$=h.props.formInline;function D(){y(`您${e}了字典名称为${$.name}的这条数据`,{type:"success"}),v(),T()}b.validate(k=>{k&&D()})}})}function T(){return C(this,null,function*(){s.value=!0;const{data:e}=yield J();setTimeout(()=>{p.value=e,s.value=!1},200)})}return N(()=>{T(),f()}),{dictId:o,loading:r,columns:m,dataList:n,treeData:p,treeLoading:s,pagination:a,deviceDetection:R,onSearch:f,openDialog:Y,onTreeSelect:P,handleDelete:L,openDictDialog:j,getDictTreeData:T,handleSizeChange:H,handleCurrentChange:O}}export{ne as useDict};
