import{d as $,a as v,x as f,m as W,y,z as L,b as B,w as l,e as s,f as N,g as i,i as a,h as o,u as r}from"./index-C9LNgsF8.js";const U={class:"card-header"},z={class:"font-medium"},F=i("span",null," 请输入要创建水印的值：",-1),M=i("span",null,"请选择要创建水印的颜色：",-1),P=$({name:"WaterMark",__name:"watermark",setup(T){const k=v(),_=v(),c=v("#409EFF"),u=v("vue-pure-admin"),{setWatermark:d,clear:g}=f(),{setWatermark:p,clear:w}=f(k),{setWatermark:C}=f(_);return W(()=>{y(()=>{C("无法删除的水印",{forever:!0,width:180,height:70})})}),L(()=>{g()}),(A,e)=>{const b=s("el-link"),h=s("el-input"),x=s("el-color-picker"),m=s("el-space"),n=s("el-button"),V=s("el-card");return N(),B(V,{shadow:"never"},{header:l(()=>[i("div",U,[i("span",z,[a(b,{href:"https://pure-admin-utils.netlify.app/hooks/useWatermark/useWatermark",target:"_blank",style:{margin:"0 5px 4px 0","font-size":"16px"}},{default:l(()=>[o(" 页面水印 ")]),_:1})])]),a(b,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/watermark.vue",target:"_blank"},{default:l(()=>[o(" 代码位置 src/views/able/watermark.vue ")]),_:1})]),default:l(()=>[a(m,{wrap:"",class:"!mb-2"},{default:l(()=>[F,a(h,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),class:"mr-4",style:{width:"200px"},clearable:""},null,8,["modelValue"]),M,a(x,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t),"show-alpha":""},null,8,["modelValue"])]),_:1}),a(m,{wrap:""},{default:l(()=>[a(n,{plain:"",onClick:e[2]||(e[2]=t=>r(d)(u.value,{color:c.value}))},{default:l(()=>[o(" 创建整页水印 ")]),_:1}),a(n,{plain:"",onClick:e[3]||(e[3]=t=>r(d)(u.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[o(" 创建整页渐变水印 ")]),_:1}),a(n,{plain:"",onClick:e[4]||(e[4]=t=>r(d)(u.value,{rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[o(" 创建整页渐变且水平90度的水印 ")]),_:1}),a(n,{plain:"",onClick:e[5]||(e[5]=t=>r(d)(u.value,{gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:l(()=>[o(" 创建整页渐变且有阴影的水印 ")]),_:1}),a(n,{plain:"",onClick:e[6]||(e[6]=t=>r(d)(u.value,{globalAlpha:.15,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[o(" 创建整页高透明渐变水印 ")]),_:1}),a(n,{plain:"",onClick:r(g)},{default:l(()=>[o("清除整页水印")]),_:1},8,["onClick"])]),_:1}),i("div",{ref_key:"local",ref:k,class:"w-1/2 h-[200px] border border-sky-500 mt-4"},null,512),a(m,{wrap:"",class:"mt-6"},{default:l(()=>[a(n,{plain:"",onClick:e[7]||(e[7]=t=>r(p)("局部水印",{color:c.value,width:140,height:65}))},{default:l(()=>[o(" 创建局部水印 ")]),_:1}),a(n,{plain:"",onClick:e[8]||(e[8]=t=>r(p)("局部水印",{width:140,height:65,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[o(" 创建局部渐变水印 ")]),_:1}),a(n,{plain:"",onClick:e[9]||(e[9]=t=>r(p)("局部水印",{width:140,height:65,rotate:0,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}]}))},{default:l(()=>[o(" 创建局部渐变且水平90度的水印 ")]),_:1}),a(n,{plain:"",onClick:e[10]||(e[10]=t=>r(p)("局部水印",{width:140,height:65,gradient:[{value:0,color:"magenta"},{value:.5,color:"blue"},{value:1,color:"red"}],shadowConfig:[20]}))},{default:l(()=>[o(" 创建局部渐变且有阴影的水印 ")]),_:1}),a(n,{plain:"",onClick:r(w)},{default:l(()=>[o("清除局部水印")]),_:1},8,["onClick"])]),_:1}),i("div",{ref_key:"preventLocal",ref:_,class:"w-1/2 h-[200px] border border-indigo-500 mt-4"},null,512)]),_:1})}}});export{P as default};
