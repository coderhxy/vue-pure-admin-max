import{az as e}from"./index-DizcWSWA.js";const n=t=>e.request("post","/user",{data:t}),r=()=>e.request("get","/list-all-role"),o=t=>e.request("post","/list-role-ids",{data:t}),a=t=>e.request("post","/role",{data:t}),u=t=>e.request("post","/menu",{data:t}),g=t=>e.request("post","/dept",{data:t}),i=t=>e.request("post","/online-logs",{data:t}),c=t=>e.request("post","/login-logs",{data:t}),l=t=>e.request("post","/operation-logs",{data:t}),p=t=>e.request("post","/system-logs",{data:t}),q=t=>e.request("post","/system-logs-detail",{data:t}),L=t=>e.request("post","/role-menu",{data:t}),m=t=>e.request("post","/role-menu-ids",{data:t}),d=()=>e.request("get","/dict-tree"),k=t=>e.request("post","/dict-detail",{data:t}),T=t=>e.request("post","/tenant-list",{data:t}),D=t=>e.request("post","/tenant-package",{data:t}),M=t=>e.request("post","/tenant-package-menu",{data:t}),R=t=>e.request("post","/tenant-package-menu-ids",{data:t}),y=()=>e.request("get","/tenant-package-simple");export{l as a,q as b,p as c,i as d,g as e,k as f,c as g,d as h,u as i,L as j,a as k,m as l,r as m,n,o,y as p,T as q,M as r,D as s,R as t};
