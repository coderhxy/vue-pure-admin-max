import{P as C}from"./print-B-zH8tbv.js";import{_ as V}from"./pieChart.vue_vue_type_script_setup_true_lang-CALEmMhQ.js";import{d as B,a as D,b as m,w as t,e as a,A as I,f as r,g as l,i as e,k as L,l as P,F as G,h as v,B as b,C as E,D as z,_ as F}from"./index-DizcWSWA.js";const c=i=>(E("data-v-65651f02"),i=i(),z(),i),R={class:"card-header"},U=c(()=>l("span",{class:"font-medium"},"打印功能（报表、图表、图片）",-1)),$=c(()=>l("p",{class:"font-medium text-lg text-center"},"Table",-1)),j=c(()=>l("p",{class:"font-medium text-lg text-center"},"Echart",-1)),q=c(()=>l("p",{class:"font-medium text-lg text-center"},"Image",-1)),H=c(()=>l("img",{src:"https://pure-admin-utils.netlify.app/logo.png",alt:"avatars",class:"img mt-[10px] m-auto"},null,-1)),J=B({name:"Print",__name:"index",setup(i){const _=D("1"),g=[{value:"1",el:".el-table",label:"Table"},{value:"2",el:".echart",label:"Echart"},{value:"3",el:".img",label:"Image"}];function h(){var s;const o=(s=g.filter(p=>p.value===_.value)[0])==null?void 0:s.el;C(o).toPrint}const x=({rowIndex:o})=>o===1?"warning-row":o===3?"success-row":"",y=[{date:"2016-05-03",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",age:18,address:"No. 189, Grove St, Los Angeles"}];return(o,s)=>{const p=a("el-option"),w=a("el-select"),k=a("el-button"),N=a("el-link"),d=a("el-table-column"),S=a("el-table"),u=a("el-col"),T=a("el-row"),A=a("el-card"),f=I("motion");return r(),m(A,{shadow:"never"},{header:t(()=>[l("div",R,[U,e(w,{modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=n=>_.value=n),class:"!w-[100px] mr-2",placeholder:"Select",size:"small"},{default:t(()=>[(r(),L(G,null,P(g,n=>e(p,{key:n.value,label:n.label,value:n.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(k,{size:"small",type:"primary",onClick:h},{default:t(()=>[v(" 打印 ")]),_:1})]),e(N,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/print",target:"_blank"},{default:t(()=>[v(" 代码位置 src/views/able/print ")]),_:1})]),default:t(()=>[e(T,{gutter:24},{default:t(()=>[b((r(),m(u,{xs:24,sm:24,md:24,lg:24,xl:24,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:t(()=>[$,e(S,{border:"",data:y,"row-class-name":x,class:"el-table w-full mt-[10px]"},{default:t(()=>[e(d,{prop:"date",label:"Date"}),e(d,{prop:"name",label:"Name"}),e(d,{prop:"age",label:"age"}),e(d,{prop:"address",label:"Address"})]),_:1})]),_:1})),[[f]]),b((r(),m(u,{xs:11,sm:11,md:11,lg:11,xl:11,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:t(()=>[j,e(V,{class:"echart mt-[10px]"})]),_:1})),[[f]]),b((r(),m(u,{xs:11,sm:11,md:11,lg:11,xl:11,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:200}}},{default:t(()=>[q,H]),_:1})),[[f]])]),_:1})]),_:1})}}}),Q=F(J,[["__scopeId","data-v-65651f02"]]);export{Q as default};
