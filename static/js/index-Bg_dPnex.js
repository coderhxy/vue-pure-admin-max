import{useDept as A}from"./hook-Cr4kRhzy.js";import{R as F,P as N}from"./refresh-D8pTM8Ws.js";import{u as i}from"./hooks-Dn-V-aPq.js";import{d as P}from"./delete-Ce0TSdK5.js";import{d as U}from"./edit-pen-Ci7W0xNM.js";import{A as y}from"./add-circle-line-Cw_F_RXn.js";import{d as z,a as C,e as a,f as E,k as L,i as o,w as t,u as e,h as s,_ as O}from"./index-C9LNgsF8.js";import"./form.vue_vue_type_script_setup_true_lang-CptXoebe.js";import"./index-mQO7ZEI1.js";import"./hooks-9d9CkBFL.js";import"./system-hdvoVIcn.js";import"./sortable.esm-CkCitmyH.js";import"./epTheme-Cg82m5DB.js";import"./collapse-Dv0AWJFr.js";const j={class:"main"},q=z({name:"SystemDept",__name:"index",setup(G){const f=C(),u=C(),{form:m,loading:_,columns:h,dataList:x,onSearch:b,resetForm:R,openDialog:c,handleDelete:V,handleSelectionChange:w}=A();return(H,n)=>{var k;const $=a("el-input"),d=a("el-form-item"),g=a("el-option"),S=a("el-select"),r=a("el-button"),B=a("el-form"),D=a("el-popconfirm"),T=a("pure-table");return E(),L("div",j,[o(B,{ref_key:"formRef",ref:f,inline:!0,model:e(m),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:t(()=>[o(d,{label:"部门名称：",prop:"name"},{default:t(()=>[o($,{modelValue:e(m).name,"onUpdate:modelValue":n[0]||(n[0]=l=>e(m).name=l),placeholder:"请输入部门名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(d,{label:"状态：",prop:"status"},{default:t(()=>[o(S,{modelValue:e(m).status,"onUpdate:modelValue":n[1]||(n[1]=l=>e(m).status=l),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:t(()=>[o(g,{label:"启用",value:1}),o(g,{label:"停用",value:0})]),_:1},8,["modelValue"])]),_:1}),o(d,null,{default:t(()=>[o(r,{type:"primary",icon:e(i)("ri:search-line"),loading:e(_),onClick:e(b)},{default:t(()=>[s(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(r,{icon:e(i)(e(F)),onClick:n[2]||(n[2]=l=>e(R)(f.value))},{default:t(()=>[s(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(N),{title:"部门管理（仅演示，操作后不生效）",columns:e(h),tableRef:(k=u.value)==null?void 0:k.getTableRef(),onRefresh:e(b)},{buttons:t(()=>[o(r,{type:"primary",icon:e(i)(e(y)),onClick:n[3]||(n[3]=l=>e(c)())},{default:t(()=>[s(" 新增部门 ")]),_:1},8,["icon"])]),default:t(({size:l,dynamicColumns:I})=>[o(T,{ref_key:"tableRef",ref:u,adaptive:"",adaptiveConfig:{offsetBottom:45},"align-whole":"center","row-key":"id",showOverflowTooltip:"","table-layout":"auto","default-expand-all":"",loading:e(_),size:l,data:e(x),columns:I,"header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(w)},{operation:t(({row:p})=>[o(r,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(U)),onClick:v=>e(c)("修改",p)},{default:t(()=>[s(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(r,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(y)),onClick:v=>e(c)("新增",{parentId:p.id})},{default:t(()=>[s(" 新增 ")]),_:2},1032,["size","icon","onClick"]),o(D,{title:`是否确认删除部门名称为${p.name}的这条数据`,onConfirm:v=>e(V)(p)},{reference:t(()=>[o(r,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(P))},{default:t(()=>[s(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","onSelectionChange"])]),_:1},8,["columns","tableRef","onRefresh"])])}}}),re=O(q,[["__scopeId","data-v-52636b46"]]);export{re as default};
