import{d as s,af as c,u as p,k as u,f as _}from"./index.js";const l=s({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=c(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,f)=>(_(),u("div"))}});export{l as default};
