import{u as g}from"./columns19.js";import{u as d}from"./hooks.js";import{d as f,e as o,f as C,b,w as a,i as t,u as e,_ as h}from"./index.js";const w=f({__name:"index",setup(x){const{loading:i,columns:r,dataList:s,pagination:n,Empty:c,onCurrentChange:l}=g();return(y,k)=>{const p=o("el-empty"),m=o("el-button"),u=o("pure-table");return C(),b(u,{"row-key":"id",alignWhole:"center",showOverflowTooltip:"",loading:e(i),"loading-config":{background:"transparent"},data:e(s).slice((e(n).currentPage-1)*e(n).pageSize,e(n).currentPage*e(n).pageSize),columns:e(r),pagination:e(n),onPageCurrentChange:e(l)},{empty:a(()=>[t(p,{description:"暂无数据","image-size":60},{image:a(()=>[t(e(c))]),_:1})]),operation:a(({row:_})=>[t(m,{plain:"",circle:"",size:"small",title:`查看序号为${_.id}的详情`,icon:e(d)("ri:search-line")},null,8,["title","icon"])]),_:1},8,["loading","data","columns","pagination","onPageCurrentChange"])}}}),B=h(w,[["__scopeId","data-v-db81b3a6"]]);export{B as default};
