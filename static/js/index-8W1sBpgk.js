import{d as b,p as k,a as w,fZ as i,e as s,f as c,k as m,i as n,w as l,g as t,t as y,h as x,F as C,l as V,s as S,av as B,a9 as N,ga as P}from"./index-CcH4JEIi.js";const U=t("p",{class:"mb-2"}," 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ",-1),F={class:"card-header"},z=b({name:"PermissionPage",__name:"index",setup(H){var o;const d=k(()=>({width:"85vw",justifyContent:"start"})),a=w((o=i())==null?void 0:o.username),p=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function _(){i().loginByUsername({username:a.value,password:"admin123"}).then(r=>{r.success&&(B().removeItem("async-routes"),N().clearAllCachePage(),P())})}return(r,u)=>{const v=s("el-link"),f=s("el-option"),h=s("el-select"),g=s("el-card");return c(),m("div",null,[U,n(g,{shadow:"never",style:S(d.value)},{header:l(()=>[t("div",F,[t("span",null,"当前角色："+y(a.value),1)]),n(v,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/page/index.vue",target:"_blank"},{default:l(()=>[x(" 代码位置 src/views/permission/page/index.vue ")]),_:1})]),default:l(()=>[n(h,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=e=>a.value=e),class:"!w-[160px]",onChange:_},{default:l(()=>[(c(),m(C,null,V(p,e=>n(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])])}}});export{z as default};
