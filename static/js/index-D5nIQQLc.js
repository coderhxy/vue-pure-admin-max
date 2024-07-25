import{useRole as j}from"./hook-CTUoymiZ.js";import{g as E}from"./utils-NlcLu7mC.js";import{R as F,P as M}from"./refresh-D8pTM8Ws.js";import{u as c}from"./hooks-Dn-V-aPq.js";import{d as G}from"./delete-Ce0TSdK5.js";import{d as H,a as h,e as l,A as J,f as C,k as b,i as o,w as t,u as e,h as i,B as K,g as k,t as O,j as Q,_ as W}from"./index-C9LNgsF8.js";import"./detail.vue_vue_type_script_setup_true_lang-DDp5-JtI.js";import"./vue-json-pretty-BbAjLK7k.js";import"./system-hdvoVIcn.js";import"./sortable.esm-CkCitmyH.js";import"./epTheme-Cg82m5DB.js";import"./collapse-Dv0AWJFr.js";const X={width:1024,height:1024,body:'<path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160z"/>'},Y=X,Z={class:"main"},ee={key:0,class:"bg-[var(--el-fill-color-light)] w-full h-[46px] mb-2 pl-4 flex items-center"},oe={class:"flex-auto"},te={style:{"font-size":"var(--el-font-size-base)"},class:"text-[rgba(42,46,54,0.5)] dark:text-[rgba(220,220,242,0.5)]"},ne=H({name:"SystemLog",__name:"index",setup(le){const d=h(),p=h(),{form:s,loading:u,columns:y,dataList:v,pagination:x,selectedNum:f,onSearch:_,onDetail:S,clearAll:w,resetForm:V,onbatchDel:R,handleSizeChange:z,onSelectionCancel:D,handleCellDblclick:P,handleCurrentChange:B,handleSelectionChange:N}=j(p);return(ae,a)=>{const T=l("el-input"),m=l("el-form-item"),q=l("el-date-picker"),r=l("el-button"),$=l("el-form"),g=l("el-popconfirm"),A=l("pure-table"),I=J("motion-fade");return C(),b("div",Z,[o($,{ref_key:"formRef",ref:d,inline:!0,model:e(s),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:t(()=>[o(m,{label:"所属模块",prop:"module"},{default:t(()=>[o(T,{modelValue:e(s).module,"onUpdate:modelValue":a[0]||(a[0]=n=>e(s).module=n),placeholder:"请输入所属模块",clearable:"",class:"!w-[170px]"},null,8,["modelValue"])]),_:1}),o(m,{label:"请求时间",prop:"requestTime"},{default:t(()=>[o(q,{modelValue:e(s).requestTime,"onUpdate:modelValue":a[1]||(a[1]=n=>e(s).requestTime=n),shortcuts:e(E)(),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期时间","end-placeholder":"结束日期时间"},null,8,["modelValue","shortcuts"])]),_:1}),o(m,null,{default:t(()=>[o(r,{type:"primary",icon:e(c)("ri:search-line"),loading:e(u),onClick:e(_)},{default:t(()=>[i(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(r,{icon:e(c)(e(F)),onClick:a[2]||(a[2]=n=>e(V)(d.value))},{default:t(()=>[i(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(M),{title:"系统日志（仅演示，操作后不生效）",columns:e(y),onRefresh:e(_)},{buttons:t(()=>[o(g,{title:"确定要删除所有日志数据吗？",onConfirm:e(w)},{reference:t(()=>[o(r,{type:"danger",icon:e(c)(e(G))},{default:t(()=>[i(" 清空日志 ")]),_:1},8,["icon"])]),_:1},8,["onConfirm"])]),default:t(({size:n,dynamicColumns:L})=>[e(f)>0?K((C(),b("div",ee,[k("div",oe,[k("span",te," 已选 "+O(e(f))+" 项 ",1),o(r,{type:"primary",text:"",onClick:e(D)},{default:t(()=>[i(" 取消选择 ")]),_:1},8,["onClick"])]),o(g,{title:"是否确认删除?",onConfirm:e(R)},{reference:t(()=>[o(r,{type:"danger",text:"",class:"mr-1"},{default:t(()=>[i(" 批量删除 ")]),_:1})]),_:1},8,["onConfirm"])])),[[I]]):Q("",!0),o(A,{ref_key:"tableRef",ref:p,"row-key":"id","align-whole":"center","table-layout":"auto",loading:e(u),size:n,adaptive:"",adaptiveConfig:{offsetBottom:108},data:e(v),columns:L,pagination:e(x),paginationSmall:n==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(N),onPageSizeChange:e(z),onPageCurrentChange:e(B),onCellDblclick:e(P)},{operation:t(({row:U})=>[o(r,{class:"reset-margin !outline-none",link:"",type:"primary",size:n,icon:e(c)(e(Y)),onClick:re=>e(S)(U)},{default:t(()=>[i(" 详情 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","onSelectionChange","onPageSizeChange","onPageCurrentChange","onCellDblclick"])]),_:1},8,["columns","onRefresh"])])}}}),be=W(ne,[["__scopeId","data-v-93c1a603"]]);export{be as default};
