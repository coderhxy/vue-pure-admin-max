var M=(U,h,c)=>new Promise((g,f)=>{var v=r=>{try{n(c.next(r))}catch(p){f(p)}},b=r=>{try{n(c.throw(r))}catch(p){f(p)}},n=r=>r.done?g(r.value):Promise.resolve(r.value).then(v,b);n((c=c.apply(U,h)).next())});import{useRole as ue}from"./hook-BuLh69fa.js";import{P as fe}from"./index-CJtaVm5J.js";import{u as m}from"./hooks-Dfz93Yhx.js";import{d as _e,p as he,a as _,m as ge,cU as ve,y as be,cV as xe,ga as ye,e as s,A as ke,f as O,k as E,i as l,w as a,u as e,h as u,g as i,v as C,$ as L,B as W,fs as Ce,t as H,aF as w,j as we,_ as Ve}from"./index-DUNyaDI6.js";import{d as Re}from"./delete-Ce0TSdK5.js";import{d as Se}from"./edit-pen-Ci7W0xNM.js";import{R as $e}from"./refresh-zmagq4lj.js";import{d as Ie}from"./menu-DpbF6EVM.js";import{A as Ue}from"./add-circle-line-Cw_F_RXn.js";import{d as De}from"./check-CIQVCvCT.js";import"./form.vue_vue_type_script_setup_true_lang-CE3rzQcp.js";import"./hooks-Cya_nZSB.js";import"./system-96Ho1NNj.js";import"./sortable.esm-CkCitmyH.js";import"./epTheme-DjctmiPF.js";import"./collapse-BgIEKl_e.js";const Pe={class:"main"},Be={key:0,class:"!min-w-[calc(100vw-60vw-268px)] mt-2 px-2 pb-2 bg-bg_color ml-2 overflow-auto"},ze={class:"flex justify-between w-full px-3 pt-5 pb-4"},Ae={class:"flex"},Te={class:"font-bold truncate"},Fe={class:"flex flex-wrap"},Ne=_e({name:"SystemRole",__name:"index",setup(U){const h=he(()=>["w-[22px]","h-[22px]","flex","justify-center","items-center","outline-none","rounded-[4px]","cursor-pointer","transition-colors","hover:bg-[#0000000f]","dark:hover:bg-[#ffffff1f]","dark:hover:text-[#ffffffd9]"]),c=_(),g=_(),f=_(),v=_(),b=_(),{form:n,isShow:r,curRow:p,loading:D,columns:Q,rowStyle:X,dataList:q,treeData:G,treeProps:J,isLinkage:x,pagination:K,isExpandAll:V,isSelectAll:R,treeSearchValue:S,onSearch:P,resetForm:Y,openDialog:B,handleMenu:z,handleSave:Z,handleDelete:ee,filterMethod:le,transformI18n:oe,onQueryChanged:te,handleSizeChange:ae,handleCurrentChange:ne,handleSelectionChange:se}=ue(c);return ge(()=>{ve(v,()=>M(this,null,function*(){yield be(),xe(60).then(()=>{b.value=parseFloat(ye(f.value.getTableDoms().tableWrapper.style.height,"px"))})}))}),(je,t)=>{var N;const $=s("el-input"),y=s("el-form-item"),A=s("el-option"),re=s("el-select"),d=s("el-button"),ie=s("el-form"),ce=s("el-popconfirm"),pe=s("pure-table"),T=s("IconifyIconOffline"),I=s("el-checkbox"),de=s("el-tree-v2"),F=ke("tippy");return O(),E("div",Pe,[l(ie,{ref_key:"formRef",ref:g,inline:!0,model:e(n),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"},{default:a(()=>[l(y,{label:"角色名称：",prop:"name"},{default:a(()=>[l($,{modelValue:e(n).name,"onUpdate:modelValue":t[0]||(t[0]=o=>e(n).name=o),placeholder:"请输入角色名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),l(y,{label:"角色标识：",prop:"code"},{default:a(()=>[l($,{modelValue:e(n).code,"onUpdate:modelValue":t[1]||(t[1]=o=>e(n).code=o),placeholder:"请输入角色标识",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),l(y,{label:"状态：",prop:"status"},{default:a(()=>[l(re,{modelValue:e(n).status,"onUpdate:modelValue":t[2]||(t[2]=o=>e(n).status=o),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:a(()=>[l(A,{label:"已启用",value:"1"}),l(A,{label:"已停用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),l(y,null,{default:a(()=>[l(d,{type:"primary",icon:e(m)("ri:search-line"),loading:e(D),onClick:e(P)},{default:a(()=>[u(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),l(d,{icon:e(m)(e($e)),onClick:t[3]||(t[3]=o=>e(Y)(g.value))},{default:a(()=>[u(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),i("div",{ref_key:"contentRef",ref:v,class:C(["flex",e(L)()?"flex-wrap":""])},[l(e(fe),{class:C([e(r)&&!e(L)()?"!w-[60vw]":"w-full"]),style:{transition:"width 220ms cubic-bezier(0.4, 0, 0.2, 1)"},title:"角色管理（仅演示，操作后不生效）",columns:e(Q),onRefresh:e(P)},{buttons:a(()=>[l(d,{type:"primary",icon:e(m)(e(Ue)),onClick:t[4]||(t[4]=o=>e(B)())},{default:a(()=>[u(" 新增角色 ")]),_:1},8,["icon"])]),default:a(({size:o,dynamicColumns:me})=>[l(pe,{ref_key:"tableRef",ref:f,"align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(D),size:o,adaptive:"","row-style":e(X),adaptiveConfig:{offsetBottom:108},data:e(q),columns:me,pagination:e(K),paginationSmall:o==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(se),onPageSizeChange:e(ae),onPageCurrentChange:e(ne)},{operation:a(({row:k})=>[l(d,{class:"reset-margin",link:"",type:"primary",size:o,icon:e(m)(e(Se)),onClick:j=>e(B)("修改",k)},{default:a(()=>[u(" 修改 ")]),_:2},1032,["size","icon","onClick"]),l(ce,{title:`是否确认删除角色名称为${k.name}的这条数据`,onConfirm:j=>e(ee)(k)},{reference:a(()=>[l(d,{class:"reset-margin",link:"",type:"primary",size:o,icon:e(m)(e(Re))},{default:a(()=>[u(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"]),l(d,{class:"reset-margin",link:"",type:"primary",size:o,icon:e(m)(e(Ie)),onClick:j=>e(z)(k)},{default:a(()=>[u(" 权限 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1032,["loading","size","row-style","data","columns","pagination","paginationSmall","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["class","columns","onRefresh"]),e(r)?(O(),E("div",Be,[i("div",ze,[i("div",Ae,[i("span",{class:C(h.value)},[W(l(T,{class:"dark:text-white",width:"18px",height:"18px",icon:e(Ce),onClick:e(z)},null,8,["icon","onClick"]),[[F,{content:"关闭"}]])],2),i("span",{class:C([h.value,"ml-2"])},[W(l(T,{class:"dark:text-white",width:"18px",height:"18px",icon:e(De),onClick:e(Z)},null,8,["icon","onClick"]),[[F,{content:"保存菜单权限"}]])],2)]),i("p",Te," 菜单权限 "+H(`${(N=e(p))!=null&&N.name?`（${e(p).name}）`:""}`),1)]),l($,{modelValue:e(S),"onUpdate:modelValue":t[5]||(t[5]=o=>w(S)?S.value=o:null),placeholder:"请输入菜单进行搜索",class:"mb-1",clearable:"",onInput:e(te)},null,8,["modelValue","onInput"]),i("div",Fe,[l(I,{modelValue:e(V),"onUpdate:modelValue":t[6]||(t[6]=o=>w(V)?V.value=o:null),label:"展开/折叠"},null,8,["modelValue"]),l(I,{modelValue:e(R),"onUpdate:modelValue":t[7]||(t[7]=o=>w(R)?R.value=o:null),label:"全选/全不选"},null,8,["modelValue"]),l(I,{modelValue:e(x),"onUpdate:modelValue":t[8]||(t[8]=o=>w(x)?x.value=o:null),label:"父子联动"},null,8,["modelValue"])]),l(de,{ref_key:"treeRef",ref:c,"show-checkbox":"",data:e(G),props:e(J),height:b.value,"check-strictly":!e(x),"filter-method":e(le)},{default:a(({node:o})=>[i("span",null,H(e(oe)(o.label)),1)]),_:1},8,["data","props","height","check-strictly","filter-method"])])):we("",!0)],2)])}}}),tl=Ve(Ne,[["__scopeId","data-v-6f2d9355"]]);export{tl as default};
