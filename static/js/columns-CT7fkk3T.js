var d=(v,p,o)=>new Promise((e,i)=>{var n=t=>{try{u(o.next(t))}catch(c){i(c)}},r=t=>{try{u(o.throw(t))}catch(c){i(c)}},u=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);u((o=o.apply(v,p)).next())});import{a as f,ag as w,r as b,n as C,y as E,aX as h,L as R}from"./index-CcH4JEIi.js";import{b as V}from"./data-CpF1ALa8.js";function N(v,p,o){const e=f(V),i=w(e.value),n=f([1,3,4]),r=b({sexValue:"",searchDate:""}),u=[{value:0,label:"男"},{value:1,label:"女"}],t=[{type:"selection",reserveSelection:!0,align:"left"},{label:"ID",prop:"id",width:50},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"地址",prop:"address"},{label:"日期",prop:"date",minWidth:120}],c=b({pageSize:5,currentPage:1,layout:"prev, pager, next",total:e.value.length,background:!0,size:"small"}),m=a=>{const l=[];a.forEach(s=>{l.push({label:s.name,id:s.id})}),n.value=l},x=()=>{if(e.value=i,!h(r.sexValue)){let a=u.map(l=>l.value===Number(r.sexValue)&&l.label).filter(Boolean)[0];e.value=e.value.filter(l=>l.sex===a)}h(r.searchDate)||(e.value=e.value.filter(a=>a.date===r.searchDate)),c.total=e.value.length},S=()=>{p.value.resetFields(),g(),e.value=i,c.total=e.value.length},D=({id:a})=>{var s;const{toggleRowSelection:l}=o.value.getTableRef();l((s=e.value.filter(T=>T.id==a))==null?void 0:s[0],!1)},g=()=>{const{clearSelection:a}=o.value.getTableRef();a()},y=()=>{v.value.blur(),R(`当前选中的数据为：${JSON.stringify(n.value)}`,{type:"success"})};return C(n,()=>d(this,null,function*(){yield E();const{toggleRowSelection:a}=o.value.getTableRef();n.value.forEach(l=>{e.value.forEach(s=>{s.id===l&&a(s)})})}),{immediate:!0}),{searchForm:r,sexOptions:u,columns:t,pagination:c,selectValue:n,tableData:e,onSure:y,onClear:g,onReset:S,onSearch:x,removeTag:D,handleSelectionChange:m}}export{N as useColumns};
