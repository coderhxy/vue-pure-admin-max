import{_ as T}from"./_plugin-vue_export-helper-C_DISmKY.js";import{u as V,P as k}from"./plus-form-8oxnisM-.js";import{d as h,a as c,P as F,f as u,k as b,i as g,w as i,F as P,l as S,b as x,u as o,dl as $,a5 as d,ap as _,S as m,dm as q,v as C}from"./index-DizcWSWA.js";var E=h({name:"PlusStepsForm",__name:"index",props:{modelValue:{default:1},data:{default:()=>[]},submitText:{default:void 0},nextText:{default:void 0},preText:{default:void 0}},emits:["pre","next","update:modelValue","change"],setup(v,{emit:n}){const l=v,s=n,{t:r}=V(),t=c();F(()=>{t.value=l.modelValue});const p=(e,f)=>{s("change",e,f)},w=()=>{t.value-- >l.data.length+1&&(t.value=1),s("update:modelValue",t.value),s("pre",t.value)},y=e=>{t.value++>l.data.length-1&&(t.value=l.data.length),s("update:modelValue",t.value),s("next",t.value,e)};return(e,f)=>(u(),b("div",{class:C(["plus-steps-form",e.$attrs.direction==="vertical"?"plus-steps-from-vertical":""])},[g(o(q),d({active:t.value,"finish-status":"success"},e.$attrs),{default:i(()=>[(u(!0),b(P,null,S(e.data,a=>(u(),x(o($),d({key:a.title},a),_({_:2},[e.$slots.icon?{name:"icon",fn:i(()=>[m(e.$slots,"icon",{icon:a.icon,title:a.title,description:a.description})]),key:"0"}:void 0,e.$slots.title?{name:"title",fn:i(()=>[m(e.$slots,"title",{icon:a.icon,title:a.title,description:a.description})]),key:"1"}:void 0,e.$slots.description?{name:"description",fn:i(()=>[m(e.$slots,"description",{icon:a.icon,title:a.title,description:a.description})]),key:"2"}:void 0]),1040))),128))]),_:3},16,["active"]),g(o(k),d(e.data[t.value-1].form,{"has-reset":t.value!==1,"submit-text":t.value===e.data.length?e.submitText||o(r)("plus.stepsForm.submitText"):e.nextText||o(r)("plus.stepsForm.nextText"),"reset-text":e.preText||o(r)("plus.stepsForm.preText"),onSubmit:y,onReset:w,onChange:p}),null,16,["has-reset","submit-text","reset-text"])],2))}}),B=T(E,[["__file","index.vue"]]);const L=B,W=h({__name:"steps",setup(v){const n=c([{title:"第一步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},modelValue:{},columns:[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]}],rules:{name:[{required:!0,message:"请输入名称"}]}}},{title:"第二步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},labelWidth:"100",modelValue:{},columns:[{label:"标签",width:120,prop:"tag"},{label:"执行进度",width:200,prop:"progress"},{label:"评分",width:200,prop:"rate",valueType:"rate"},{label:"是否显示",width:100,prop:"switch",valueType:"switch"}],rules:{tag:[{required:!0,message:"请输入标签"}],progress:[{required:!0,message:"请输入执行进度"}]}}},{title:"第三步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},modelValue:{},columns:[{label:"时间",prop:"time",valueType:"date-picker"},{label:"要求",prop:"demand",valueType:"checkbox",options:[{label:"四六级",value:"0"},{label:"计算机二级证书",value:"1"},{label:"普通话证书",value:"2"}]},{label:"奖励",prop:"price"},{label:"提成",prop:"percentage"},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],rules:{time:[{required:!0,trigger:"change",message:"请选择时间"}],demand:[{required:!0,trigger:"change",message:"请选择要求"}]}}}]),l=c(1),s=(r,t)=>{l.value=r};return(r,t)=>(u(),x(o(L),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=p=>l.value=p),simple:"",class:"w-[800px] m-auto",data:n.value,"align-center":"",onNext:s},null,8,["modelValue","data"]))}});export{W as _};
