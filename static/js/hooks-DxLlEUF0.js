import{ac as l,ae as h,gO as c,aA as f,g0 as n}from"./index-DUhDYU9H.js";function y(){const a=l(),i=h(),s=c(a.params)?a.query:a.params;function o(t,u){Object.keys(t).forEach(e=>{f(t[e])||(t[e]=t[e].toString())}),u==="query"?(n().handleTags("push",{path:"/tabs/query-detail",name:"TabQueryDetail",query:t,meta:{title:{zh:`No.${t.id} - 详情信息`,en:`No.${t.id} - DetailInfo`},dynamicLevel:3}}),i.push({name:"TabQueryDetail",query:t})):u==="params"&&(n().handleTags("push",{path:"/tabs/params-detail/:id",name:"TabParamsDetail",params:t,meta:{title:{zh:`No.${t.id} - 详情信息`,en:`No.${t.id} - DetailInfo`}}}),i.push({name:"TabParamsDetail",params:t}))}return{toDetail:o,initToDetail:t=>{s&&o(s,t)},getParameter:s,router:i}}export{y as u};
