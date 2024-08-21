var ee=Object.defineProperty,le=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var A=(u,c,a)=>c in u?ee(u,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[c]=a,S=(u,c)=>{for(var a in c||(c={}))se.call(c,a)&&A(u,a,c[a]);if(q)for(var a of q(c))oe.call(c,a)&&A(u,a,c[a]);return u},G=(u,c)=>le(u,ae(c));import{d as te,a as n,n as de,b as j,w as l,e as i,f as w,g as d,i as e,h as o,k as H,l as J,v as T,t as O,F as K,u as ce,am as ue,L as ne,C as ie,D as re,_ as _e}from"./index-CcH4JEIi.js";const _=u=>(ie("data-v-ba42e1d6"),u=u(),re(),u),pe={class:"card-header"},me=_(()=>d("span",{style:{"font-size":"16px","font-weight":"800"}}," 可选按钮 ",-1)),ve=_(()=>d("p",{class:"mb-2"},"单选（紧凑风格的按钮样式）",-1)),be=_(()=>d("p",{class:"mb-2"},"单选（带有边框）",-1)),fe=_(()=>d("p",{class:"mb-2"},"单选（自定义内容）",-1)),he={class:"flex"},ke={class:"flex"},ge={class:"flex"},Ve=_(()=>d("p",{class:"mb-2"},"多选（紧凑风格的按钮样式）",-1)),we=_(()=>d("p",{class:"mb-2"},"多选（带有边框）",-1)),ze=_(()=>d("p",{class:"mb-2"},"多选（来点不一样的体验）",-1)),xe={class:"flex"},Ce={class:"flex"},ye={class:"flex"},Be=_(()=>d("p",null,"可控制间距的按钮样式",-1)),Ie=_(()=>d("p",{class:"mb-2"},"单选",-1)),Ue={class:"mb-2 mt-4"},Se=_(()=>d("p",{class:"mb-2"},"单个可选按钮",-1)),Ge=te({name:"CheckButton",__name:"check-button",setup(u){const c=n(20),a=n("default"),p=n(),z=n(!0),$=n("wait"),N=n("complete"),D=n("progress"),F=n(["apple","tomato"]),L=n(["cucumber","onion","blueberry"]),M=n(["tomato","watermelon","strawberry"]),x=n([{title:"等待中",checked:!1},{title:"进行中",checked:!0},{title:"已完成",checked:!1}]),C=n({});function P(m,t){if(a.value==="disabled")return;C.value[t]=Object.assign(G(S({},m),{checked:!m.checked})),x.value.map(g=>g.checked=!1),x.value[t].checked=C.value[t].checked;const{title:r,checked:b}=C.value[t];ne(b?`已选中${r}`:`取消选中${r}`,{type:"success"})}const y=n([{title:"苹果",checked:!0},{title:"西红柿",checked:!0},{title:"香蕉",checked:!1}]),E=n({});function Q(m,t){a.value!=="disabled"&&(E.value[t]=Object.assign(G(S({},m),{checked:!m.checked})),y.value[t].checked=E.value[t].checked)}function R(){a.value!=="disabled"&&(z.value=!z.value)}return de(a,m=>m==="disabled"?p.value="default":p.value=a.value),(m,t)=>{const r=i("el-radio"),b=i("el-radio-group"),g=i("el-space"),W=i("el-link"),f=i("el-radio-button"),v=i("el-divider"),h=i("IconifyIconOnline"),k=i("el-checkbox-button"),B=i("el-checkbox-group"),I=i("el-checkbox"),X=i("el-slider"),U=i("el-check-tag"),Y=i("el-card");return w(),j(Y,{shadow:"never"},{header:l(()=>[d("div",pe,[e(g,{wrap:"",size:40},{default:l(()=>[me,e(b,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s)},{default:l(()=>[e(r,{value:"large"},{default:l(()=>[o("大尺寸")]),_:1}),e(r,{value:"default"},{default:l(()=>[o("默认尺寸")]),_:1}),e(r,{value:"small"},{default:l(()=>[o("小尺寸")]),_:1}),e(r,{value:"disabled"},{default:l(()=>[o("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(W,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/check-button.vue",target:"_blank"},{default:l(()=>[o(" 代码位置 src/views/components/check-button.vue ")]),_:1})]),default:l(()=>[ve,e(b,{modelValue:$.value,"onUpdate:modelValue":t[1]||(t[1]=s=>$.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(f,{value:"wait"},{default:l(()=>[o("等待中")]),_:1}),e(f,{value:"progress"},{default:l(()=>[o("进行中")]),_:1}),e(f,{value:"complete"},{default:l(()=>[o("已完成")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),be,e(b,{modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=s=>N.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(r,{value:"wait",border:""},{default:l(()=>[o("等待中")]),_:1}),e(r,{value:"progress",border:""},{default:l(()=>[o("进行中")]),_:1}),e(r,{value:"complete",border:""},{default:l(()=>[o("已完成")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),fe,e(b,{modelValue:D.value,"onUpdate:modelValue":t[3]||(t[3]=s=>D.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(f,{value:"wait"},{default:l(()=>[d("span",he,[e(h,{icon:"ri:progress-8-fill",class:"mr-1"}),o(" 等待中 ")])]),_:1}),e(f,{value:"progress"},{default:l(()=>[d("span",ke,[e(h,{icon:"ri:progress-6-line",class:"mr-1"}),o(" 进行中 ")])]),_:1}),e(f,{value:"complete"},{default:l(()=>[d("span",ge,[e(h,{icon:"ri:progress-8-line",class:"mr-1"}),o(" 已完成 ")])]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),Ve,e(B,{modelValue:F.value,"onUpdate:modelValue":t[4]||(t[4]=s=>F.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(k,{value:"apple"},{default:l(()=>[o("苹果")]),_:1}),e(k,{value:"tomato"},{default:l(()=>[o("西红柿")]),_:1}),e(k,{value:"banana"},{default:l(()=>[o("香蕉")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),we,e(B,{modelValue:L.value,"onUpdate:modelValue":t[5]||(t[5]=s=>L.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(I,{value:"cucumber",border:""},{default:l(()=>[o("黄瓜")]),_:1}),e(I,{value:"onion",border:""},{default:l(()=>[o("洋葱")]),_:1}),e(I,{value:"blueberry",border:""},{default:l(()=>[o("蓝莓")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),ze,e(B,{modelValue:M.value,"onUpdate:modelValue":t[6]||(t[6]=s=>M.value=s),class:"pure-checkbox",size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(k,{value:"tomato"},{default:l(()=>[d("span",xe,[e(h,{icon:"streamline-emojis:tomato",class:"mr-1"}),o(" 番茄 ")])]),_:1}),e(k,{value:"watermelon"},{default:l(()=>[d("span",Ce,[e(h,{icon:"streamline-emojis:watermelon-1",class:"mr-1"}),o(" 西瓜 ")])]),_:1}),e(k,{value:"strawberry"},{default:l(()=>[d("span",ye,[e(h,{icon:"streamline-emojis:strawberry-1",class:"mr-1"}),o(" 草莓 ")])]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),Be,e(X,{modelValue:c.value,"onUpdate:modelValue":t[7]||(t[7]=s=>c.value=s),class:"mb-2 !w-[300px]","show-tooltip":!1,disabled:a.value==="disabled"},null,8,["modelValue","disabled"]),Ie,e(g,{wrap:"",size:c.value},{default:l(()=>[(w(!0),H(K,null,J(x.value,(s,V)=>(w(),j(U,{key:V,class:T(["select-none",a.value==="disabled"&&"tag-disabled",s.checked&&"is-active"]),checked:s.checked,onChange:Z=>P(s,V)},{default:l(()=>[o(O(s.title),1)]),_:2},1032,["class","checked","onChange"]))),128))]),_:1},8,["size"]),d("p",Ue," 多选 "+O(ce(ue)(y.value.filter(s=>s.checked),"title")),1),e(g,{wrap:"",size:c.value},{default:l(()=>[(w(!0),H(K,null,J(y.value,(s,V)=>(w(),j(U,{key:V,class:T(["select-none",a.value==="disabled"&&"tag-disabled",s.checked&&"is-active"]),checked:s.checked,onChange:Z=>Q(s,V)},{default:l(()=>[o(O(s.title),1)]),_:2},1032,["class","checked","onChange"]))),128))]),_:1},8,["size"]),e(v),Se,e(U,{class:T(["select-none",a.value==="disabled"&&"tag-disabled",z.value&&"is-active"]),checked:z.value,onChange:R},{default:l(()=>[o(" 一个人也要努力 😊 ")]),_:1},8,["class","checked"])]),_:1})}}}),Oe=_e(Ge,[["__scopeId","data-v-ba42e1d6"]]);export{Oe as default};
