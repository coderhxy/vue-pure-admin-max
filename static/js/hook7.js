var z=(i,d,l)=>new Promise((c,u)=>{var h=a=>{try{p(l.next(a))}catch(s){u(s)}},g=a=>{try{p(l.throw(a))}catch(s){u(s)}},p=a=>a.done?c(a.value):Promise.resolve(a.value).then(h,g);p((l=l.apply(i,d)).next())});import{_ as U}from"./form.vue_vue_type_script_setup_true_lang4.js";import{r as W,a as T,m as Y,i as m,N as A,ac as f,F as Z,e as E,aX as V,gj as w,ah as ee,ag as ne,$ as te,L as H,aD as ae}from"./index.js";import{i as ie}from"./system.js";import{u as le}from"./hooks.js";import"./index73.js";import"./index71.js";import"./index69.js";function se(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!ae(i)}function Te(){const i=W({title:""}),d=T(),l=T([]),c=T(!0),u=(n,e=!1)=>{switch(n){case 0:return e?"菜单":"primary";case 1:return e?"iframe":"warning";case 2:return e?"外链":"danger";case 3:return e?"按钮":"info"}},h=[{label:"菜单名称",prop:"title",align:"left",cellRenderer:({row:n})=>m(Z,null,[m("span",{class:"inline-block mr-1"},[A(le(n.icon),{style:{paddingTop:"1px"}})]),m("span",null,[f(n.title)])])},{label:"菜单类型",prop:"menuType",width:100,cellRenderer:({row:n,props:e})=>{let t;return m(E("el-tag"),{size:e.size,type:u(n.menuType),effect:"plain"},se(t=u(n.menuType,!0))?t:{default:()=>[t]})}},{label:"路由路径",prop:"path"},{label:"组件路径",prop:"component",formatter:({path:n,component:e})=>V(e)?n:e},{label:"权限标识",prop:"auths"},{label:"排序",prop:"rank",width:100},{label:"隐藏",prop:"showLink",formatter:({showLink:n})=>n?"否":"是",width:100},{label:"操作",fixed:"right",width:210,slot:"operation"}];function g(n){}function p(n){n&&(n.resetFields(),a())}function a(){return z(this,null,function*(){c.value=!0;const{data:n}=yield ie();let e=n;V(i.title)||(e=e.filter(t=>f(t.title).includes(i.title))),l.value=w(e),setTimeout(()=>{c.value=!1},500)})}function s(n){if(!n||!n.length)return;const e=[];for(let t=0;t<n.length;t++)n[t].title=f(n[t].title),s(n[t].children),e.push(n[t]);return e}function X(n="新增",e){var t,r,v,b,y,k,I,M,R,S,D,j,F,O,_,$,x,C,P,L,N;ee({title:`${n}菜单`,props:{formInline:{menuType:(t=e==null?void 0:e.menuType)!=null?t:0,higherMenuOptions:s(ne(l.value)),parentId:(r=e==null?void 0:e.parentId)!=null?r:0,title:(v=e==null?void 0:e.title)!=null?v:"",name:(b=e==null?void 0:e.name)!=null?b:"",path:(y=e==null?void 0:e.path)!=null?y:"",component:(k=e==null?void 0:e.component)!=null?k:"",rank:(I=e==null?void 0:e.rank)!=null?I:99,redirect:(M=e==null?void 0:e.redirect)!=null?M:"",icon:(R=e==null?void 0:e.icon)!=null?R:"",extraIcon:(S=e==null?void 0:e.extraIcon)!=null?S:"",enterTransition:(D=e==null?void 0:e.enterTransition)!=null?D:"",leaveTransition:(j=e==null?void 0:e.leaveTransition)!=null?j:"",activePath:(F=e==null?void 0:e.activePath)!=null?F:"",auths:(O=e==null?void 0:e.auths)!=null?O:"",frameSrc:(_=e==null?void 0:e.frameSrc)!=null?_:"",frameLoading:($=e==null?void 0:e.frameLoading)!=null?$:!0,keepAlive:(x=e==null?void 0:e.keepAlive)!=null?x:!1,hiddenTag:(C=e==null?void 0:e.hiddenTag)!=null?C:!1,fixedTag:(P=e==null?void 0:e.fixedTag)!=null?P:!1,showLink:(L=e==null?void 0:e.showLink)!=null?L:!0,showParent:(N=e==null?void 0:e.showParent)!=null?N:!1}},width:"45%",draggable:!0,fullscreen:te(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>A(U,{ref:d}),beforeSure:(B,{options:G})=>{const J=d.value.getRef(),K=G.props.formInline;function o(){H(`您${n}了菜单名称为${f(K.title)}的这条数据`,{type:"success"}),B(),a()}J.validate(Q=>{Q&&o()})}})}function q(n){H(`您删除了菜单名称为${f(n.title)}的这条数据`,{type:"success"}),a()}return Y(()=>{a()}),{form:i,loading:c,columns:h,dataList:l,onSearch:a,resetForm:p,openDialog:X,handleDelete:q,handleSelectionChange:g}}export{Te as useMenu};
