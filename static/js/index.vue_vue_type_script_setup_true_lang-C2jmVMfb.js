import{useColumns as d}from"./columns-By8VmJn1.js";import{d as _,a as f,e as n,f as g,b as w,w as k,g as y,i as C,u as e,aF as b}from"./index-DizcWSWA.js";const v={class:"m-4"},B=_({__name:"index",setup(x){const a=f(),{columns:s,pagination:o,selectValue:l,tableDataEdit:r,rowStyle:c,onRowClick:i}=d(a);return(R,t)=>{const p=n("pure-table"),u=n("el-select");return g(),w(u,{ref_key:"selectRef",ref:a,modelValue:e(l),"onUpdate:modelValue":t[0]||(t[0]=m=>b(l)?l.value=m:null),class:"!w-[200px]",placeholder:"请选择","value-key":"id",clearable:""},{empty:k(()=>[y("div",v,[C(p,{"row-key":"id",alignWhole:"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},"row-style":e(c),data:e(r).slice((e(o).currentPage-1)*e(o).pageSize,e(o).currentPage*e(o).pageSize),columns:e(s),pagination:e(o),onRowClick:e(i)},null,8,["row-style","data","columns","pagination","onRowClick"])])]),_:1},8,["modelValue"])}}});export{B as _};
