import{useColumns as c}from"./columns-JSwo7QZl.js";import{d,a as f,e as u,f as C,b as m,u as e}from"./index-BBFSeAfV.js";const z=d({__name:"index",setup(_){const a=f(),{loading:o,columns:i,dataList:t,pagination:n,loadingConfig:r,adaptiveConfig:g,onSizeChange:l,onCurrentChange:s}=c();return(h,b)=>{const p=u("pure-table");return C(),m(p,{ref_key:"tableRef",ref:a,border:"",adaptive:"",adaptiveConfig:e(g),"row-key":"id",alignWhole:"center",showOverflowTooltip:"",loading:e(o),"loading-config":e(r),data:e(t).slice((e(n).currentPage-1)*e(n).pageSize,e(n).currentPage*e(n).pageSize),columns:e(i),pagination:e(n),onPageSizeChange:e(l),onPageCurrentChange:e(s)},null,8,["adaptiveConfig","loading","loading-config","data","columns","pagination","onPageSizeChange","onPageCurrentChange"])}}});export{z as _};
