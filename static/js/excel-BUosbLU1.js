var E=Object.defineProperty,B=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var k=(a,e,t)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,w=(a,e)=>{for(var t in e||(e={}))V.call(e,t)&&k(a,t,e[t]);if(x)for(var t of x(e))z.call(e,t)&&k(a,t,e[t]);return a},v=(a,e)=>B(a,S(e));import{u as h,w as K}from"./xlsx-DaVhO591.js";import{d as N,b as A,w as _,e as i,f as j,g as y,i as m,h as f,u as g}from"./index-DizcWSWA.js";const F={class:"font-medium"},J={class:"h-[25rem] mt-3"},q=N({name:"Excel",__name:"excel",setup(a){const e=(r=10,s="column-",n)=>Array.from({length:r}).map((c,o)=>v(w({},n),{key:`${s}${o}`,dataKey:`${s}${o}`,title:`Column ${o}`,width:150})),t=(r,s=200,n="row-")=>Array.from({length:s}).map((c,o)=>r.reduce((l,u,p)=>(l[u.dataKey]=`Row ${o} - Col ${p}`,l),{id:`${n}${o}`,parentId:null})),d=e(10),b=t(d,1e3),$=()=>{const r=b.map(o=>{const l=[];return d.forEach(u=>{l.push(o[u.dataKey])}),l}),s=[];d.forEach(o=>{s.push(o.title)}),r.unshift(s);const n=h.aoa_to_sheet(r),c=h.book_new();h.book_append_sheet(c,n,"数据报表"),K(c,"tableV2.xlsx")};return(r,s)=>{const n=i("el-link"),c=i("el-button"),o=i("el-table-v2"),l=i("el-auto-resizer"),u=i("el-card");return j(),A(u,{shadow:"never"},{header:_(()=>[y("div",F,[m(n,{href:"https://github.com/SheetJS/sheetjs",target:"_blank",style:{margin:"0 5px 4px 0","font-size":"16px"}},{default:_(()=>[f(" 导出Excel ")]),_:1})]),m(n,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/excel.vue",target:"_blank"},{default:_(()=>[f(" 代码位置 src/views/able/excel.vue ")]),_:1})]),default:_(()=>[m(c,{type:"primary",onClick:$},{default:_(()=>[f("导出Excel")]),_:1}),y("div",J,[m(l,null,{default:_(({height:p,width:C})=>[m(o,{columns:g(d),data:g(b),width:C,height:p,fixed:""},null,8,["columns","data","width","height"])]),_:1})])]),_:1})}}});export{q as default};
