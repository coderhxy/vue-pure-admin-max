import{d as M,aI as C,aJ as x,a as s,ag as V,p as m,b as j,w as h,e as u,f as r,g as c,i as g,k as I,l as T,v as O,s as $,q as b,t as A,F as X,B as Y,a2 as E,Y as F}from"./index-DizcWSWA.js";const N=["bounce","flash","pulse","rubberBand","shakeX","headShake","swing","tada","wobble","jello","heartBeat","backInDown","backInLeft","backInRight","backInUp","backOutDown","backOutLeft","backOutRight","backOutUp","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeInTopLeft","fadeInTopRight","fadeInBottomLeft","fadeInBottomRight","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","fadeOutTopLeft","fadeOutTopRight","fadeOutBottomRight","fadeOutBottomLeft","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedInRight","lightSpeedInLeft","lightSpeedOutRight","lightSpeedOutLeft","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"],q={class:"w-[280px]"},J={class:"flex flex-wrap justify-around mb-1"},G=["onMouseenter","onClick"],H=M({name:"ReAnimateSelector",__name:"index",props:C({placeholder:{type:String,default:"请选择动画"}},{modelValue:{type:String},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const a=x(d,"modelValue"),f=s(),n=s(N),v=V(n),w=m(()=>["mt-1","flex","border","w-[130px]","h-[100px]","items-center","cursor-pointer","transition-all","justify-center","border-[#e5e7eb]","hover:text-primary","hover:duration-[700ms]"]),_=m(()=>e=>a.value===e?{borderColor:"var(--el-color-primary)",color:"var(--el-color-primary)"}:"");function L(e){a.value=e}function R(){a.value=""}function B(e){f.value=e,n.value=v.value.filter(o=>o.includes(e))}const t=s({});function k(e){var o;t.value[e]=(o=t.value[e])!=null&&o.loading?Object.assign({},t.value[e],{loading:!1}):Object.assign({},t.value[e],{loading:!0})}function D(){t.value={}}return(e,o)=>{const y=u("el-empty"),U=u("el-scrollbar"),z=u("el-select");return r(),j(z,{clearable:"",filterable:"",placeholder:d.placeholder,"popper-class":"pure-animate-popper","model-value":a.value,"filter-method":B,onClear:R},{empty:h(()=>[c("div",q,[g(U,{noresize:"",height:"212px","view-style":{overflow:"hidden"},class:"border-t border-[#e5e7eb]"},{default:h(()=>[c("ul",J,[(r(!0),I(X,null,T(n.value,(l,i)=>{var p;return r(),I("li",{key:i,class:O(w.value),style:$(_.value(l)),onMouseenter:b(S=>k(i),["prevent"]),onMouseleave:b(D,["prevent"]),onClick:S=>L(l)},[c("h4",{class:O([`animate__animated animate__${(p=t.value[i])!=null&&p.loading?l+" animate__infinite":""} `])},A(l),3)],46,G)}),128))]),Y(g(y,{description:`${f.value} 动画不存在`,"image-size":60},null,8,["description"]),[[E,n.value.length===0]])]),_:1})])]),_:1},8,["placeholder","model-value"])}}}),P=F(H);export{P as R};
