import{d as _,a as u,e as n,f as h,k as f,i as a,w as o,q as w,h as i,aV as b}from"./index.js";import{a as v}from"./data.js";const y=_({__name:"fluidHeight",setup(C){const r=[{label:"日期",prop:"date",width:"260",fixed:!0},{label:"姓名",prop:"name",width:"260"},{label:"地区",prop:"state",width:"260"},{label:"城市",prop:"city",width:"260"},{label:"地址",prop:"address",width:"260"},{label:"邮编",prop:"post-code",width:"260"},{label:"操作",width:"120",fixed:"right",slot:"operation"}],e=new Date,t=u(v),d=s=>{t.value.splice(s,1)},p=()=>{e.setDate(e.getDate()+1),t.value.push({date:b(e).format("YYYY-MM-DD"),name:"Tom",address:"No. 189, Grove St, Los Angeles",state:"California",city:"Los Angeles","post-code":"CA 90036"})};return(s,k)=>{const l=n("el-button"),c=n("pure-table");return h(),f("div",null,[a(c,{data:t.value,columns:r,maxHeight:"500"},{operation:o(({$index:m})=>[a(l,{link:"",type:"primary",size:"small",onClick:w(x=>d(m),["prevent"])},{default:o(()=>[i(" Remove ")]),_:2},1032,["onClick"])]),_:1},8,["data"]),a(l,{class:"mt-4",style:{width:"100%"},onClick:p},{default:o(()=>[i(" Add Item ")]),_:1})])}}});export{y as _};
