import{d as P,a as r,B as v,k as u,i as d,w as m,e as f,A as b,f as p,g as t,u as _,a2 as D,b as I,j as h,t as i,cS as N,X as V}from"./index-C9LNgsF8.js";import{R as j}from"./index-BNDF-xz6.js";const z={"element-loading-background":"transparent"},A={class:"w-[18vw]"},E={class:"mt-1 text-center"},J={class:"flex flex-wrap justify-center items-center text-center"},M={key:1,class:"mt-1"},X=P({name:"ReCropperPreview",__name:"index",props:{imgSrc:String},emits:["cropper"],setup(w,{expose:g,emit:C}){const k=C,e=r(),l=r(),x=r(),o=r(!1),s=r("");function R({base64:c,blob:n,info:a}){e.value=a,s.value=c,k("cropper",{base64:c,blob:n,info:a})}function y(){l.value.hide()}return g({hidePopover:y}),(c,n)=>{const a=f("el-image"),S=f("el-popover"),B=b("loading");return v((p(),u("div",z,[d(S,{ref_key:"popoverRef",ref:l,visible:o.value,placement:"right",width:"18vw"},{reference:m(()=>[t("div",A,[d(_(j),{ref_key:"refCropper",ref:x,src:w.imgSrc,circled:"",onCropper:R,onReadied:n[0]||(n[0]=$=>o.value=!0)},null,8,["src"]),v(t("p",E," 温馨提示：右键上方裁剪区可开启功能菜单 ",512),[[D,o.value]])])]),default:m(()=>[t("div",J,[s.value?(p(),I(a,{key:0,src:s.value,"preview-src-list":Array.of(s.value),fit:"cover"},null,8,["src","preview-src-list"])):h("",!0),e.value?(p(),u("div",M,[t("p",null," 图像大小："+i(parseInt(e.value.width))+" × "+i(parseInt(e.value.height))+"像素 ",1),t("p",null," 文件大小："+i(_(N)(e.value.size))+"（"+i(e.value.size)+" 字节） ",1)])):h("",!0)])]),_:1},8,["visible"])])),[[B,!o.value]])}}}),G=V(X);export{G as R};
