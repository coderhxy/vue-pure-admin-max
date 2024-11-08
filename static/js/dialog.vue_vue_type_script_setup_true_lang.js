var L=(g,b,t)=>new Promise((d,s)=>{var m=a=>{try{f(t.next(a))}catch(l){s(l)}},n=a=>{try{f(t.throw(a))}catch(l){s(l)}},f=a=>a.done?d(a.value):Promise.resolve(a.value).then(m,n);f((t=t.apply(g,b)).next())});import{_ as z,b as H}from"./_plugin-vue_export-helper.js";/* empty css          */import{u as O,f as C,g as J,a as K,P as Q,b as X}from"./plus-form.js";import{d as F,p as R,a as T,P as Y,f as D,b as W,ap as B,w as o,S as p,g as N,s as Z,i as w,u,dh as j,h as E,t as A,a5 as _,di as ee,aW as le,n as I,aq as y,bj as V,l as S,dj as U,e as ae,k as oe}from"./index.js";const te={class:"plus-dialog-body"};var se=F({name:"PlusDialog",inheritAttrs:!1,__name:"index",props:{modelValue:{type:Boolean,default:!1},confirmText:{default:""},cancelText:{default:""},confirmLoading:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},footerAlign:{default:"right"},top:{default:"15vh"},width:{default:"460px"},title:{default:""}},emits:["update:modelValue","cancel","confirm"],setup(g,{emit:b}){const t=g,d=b,s=R(()=>({justifyContent:t.footerAlign==="left"?"flex-start":t.footerAlign==="center"?"center":"flex-end"})),m=T(!1),{t:n}=O();Y(()=>{m.value=t.modelValue});const f=()=>{d("confirm")},a=()=>{d("update:modelValue",!1),d("cancel")};return(l,h)=>(D(),W(u(ee),_({modelValue:m.value,"onUpdate:modelValue":h[0]||(h[0]=$=>m.value=$),top:l.top,width:l.width,title:l.title||u(n)("plus.dialog.title"),"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":!1,"before-close":a,class:"plus-dialog"},l.$attrs),B({default:o(()=>[N("div",te,[p(l.$slots,"default")])]),_:2},[l.$slots.header?{name:"header",fn:o(()=>[p(l.$slots,"header")]),key:"0"}:void 0,l.hasFooter?{name:"footer",fn:o(()=>[N("div",{class:"plus-dialog-footer",style:Z(s.value)},[p(l.$slots,"footer",{},()=>[w(u(j),{onClick:a},{default:o(()=>[E(A(l.cancelText||u(n)("plus.dialog.cancelText")),1)]),_:1}),w(u(j),{type:"primary",loading:l.confirmLoading,onClick:f},{default:o(()=>[E(A(l.confirmText||u(n)("plus.dialog.confirmText")),1)]),_:1},8,["loading"])])],4)]),key:"1"}:void 0]),1040,["modelValue","top","width","title"]))}}),ne=z(se,[["__file","index.vue"]]);const re=ne;var ie=F({name:"PlusDialogForm",__name:"index",props:{modelValue:{default:()=>({})},visible:{type:Boolean,default:!1},dialog:{default:()=>({})},form:{default:()=>({})},hasErrorTip:{type:Boolean,default:!0}},emits:["update:modelValue","update:visible","confirm","change","cancel","confirmError"],setup(g,{expose:b,emit:t}){const d=g,s=t,{t:m}=O(),n=T(),f=R(()=>{var e;return(e=n.value)==null?void 0:e.formInstance}),a=T({}),l=T(!1),h=le(),$=C(h,X()),q=C(h,J()),x=C(h,K());I(()=>d.visible,e=>{l.value=e},{immediate:!0}),I(()=>d.modelValue,e=>{a.value=e},{immediate:!0});const M=(e,c)=>{s("update:modelValue",e),s("change",e,c)},P=()=>L(this,null,function*(){var e,c,r;try{(yield(e=f.value)==null?void 0:e.validate())&&s("confirm",a.value)}catch(i){if(d.hasErrorTip){U.closeAll();const v=H(i)&&Object.values(i),G=v?(r=(c=v[0])==null?void 0:c[0])==null?void 0:r.message:void 0;U.warning(G||m("plus.form.errorTip"))}s("confirmError",i)}}),k=()=>{l.value=!1,s("update:visible",l.value),s("cancel")};return b({handleConfirm:P,handleCancel:k,formInstance:f}),(e,c)=>(D(),W(u(re),_({modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=r=>l.value=r),width:"800px",top:"10vh",title:u(m)("plus.dialogForm.title")},e.dialog,{onCancel:k,onConfirm:P}),B({default:o(()=>[w(u(Q),_({ref_key:"formInstance",ref:n,modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=r=>a.value=r),"has-footer":!1,"footer-align":"right"},e.form,{onChange:M}),B({_:2},[e.$slots["form-footer"]?{name:"footer",fn:o(r=>[p(e.$slots,"form-footer",y(V(r)))]),key:"0"}:void 0,e.$slots["form-group-header"]?{name:"group-header",fn:o(r=>[p(e.$slots,"form-group-header",y(V(r)))]),key:"1"}:void 0,S(u($),(r,i)=>({name:i,fn:o(v=>[p(e.$slots,i,y(V(v)))])})),S(u(q),(r,i)=>({name:i,fn:o(v=>[p(e.$slots,i,y(V(v)))])})),S(u(x),(r,i)=>({name:i,fn:o(v=>[p(e.$slots,i,y(V(v)))])})),e.$slots["tooltip-icon"]?{name:"tooltip-icon",fn:o(()=>[p(e.$slots,"tooltip-icon")]),key:"2"}:void 0]),1040,["modelValue"])]),_:2},[e.$slots["dialog-header"]?{name:"header",fn:o(()=>[p(e.$slots,"dialog-header")]),key:"0"}:void 0,e.$slots["dialog-footer"]?{name:"footer",fn:o(()=>[p(e.$slots,"dialog-footer",y(V({handleConfirm:P,handleCancel:k})))]),key:"1"}:void 0]),1040,["modelValue","title"]))}}),ue=z(ie,[["__file","index.vue"]]);const de=ue,be=F({__name:"dialog",setup(g){const b=[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]},{label:"是否显示",width:100,prop:"switch",valueType:"switch"},{label:"时间",prop:"time",valueType:"date-picker"},{label:"数量",prop:"number",valueType:"input-number",fieldProps:{precision:2,step:2}},{label:"城市",prop:"city",valueType:"cascader",options:[{value:"0",label:"陕西",children:[{value:"0-0",label:"西安",children:[{value:"0-0-0",label:"新城区"},{value:"0-0-1",label:"高新区"},{value:"0-0-2",label:"灞桥区"}]}]},{value:"1",label:"山西",children:[{value:"1-0",label:"太原",children:[{value:"1-0-0",label:"小店区"},{value:"1-0-1",label:"古交市"},{value:"1-0-2",label:"万柏林区"}]}]}]},{label:"地区",prop:"place",tooltip:"请精确到门牌号",fieldProps:{placeholder:"请精确到门牌号"}},{label:"要求",prop:"demand",valueType:"checkbox",options:[{label:"四六级",value:"0"},{label:"计算机二级证书",value:"1"},{label:"普通话证书",value:"2"}]},{label:"梦想",prop:"gift",valueType:"radio",options:[{label:"诗",value:"0"},{label:"远方",value:"1"},{label:"美食",value:"2"}]},{label:"到期时间",prop:"endTime",valueType:"date-picker",fieldProps:{type:"datetimerange",startPlaceholder:"请选择开始时间",endPlaceholder:"请选择结束时间"}},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],t=T(!1),d=T({}),s=()=>{t.value=!0};return(m,n)=>{const f=ae("el-button");return D(),oe("div",null,[w(f,{onClick:s},{default:o(()=>[E("打开弹窗表单")]),_:1}),w(u(de),{visible:t.value,"onUpdate:visible":n[0]||(n[0]=a=>t.value=a),modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=a=>d.value=a),form:{columns:b}},null,8,["visible","modelValue","form"])])}}});export{be as _};
