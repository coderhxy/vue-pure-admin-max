import{R as B}from"./index70.js";import{d as R,a as r,z as j,b as f,w as t,e as n,A as z,f as c,g as o,h as i,i as l,B as N,k as h,u as v,j as g,t as p,aK as V}from"./index.js";const D="/vue-pure-admin-max/static/png/avatar.png",I={class:"card-header"},A={class:"font-medium"},E={"element-loading-background":"transparent"},J={class:"flex flex-wrap justify-center items-center text-center"},K={key:1,class:"mt-1"},$=R({name:"Cropping",__name:"index",setup(P){const e=r(),_=r(),w=r(),u=r(!1),a=r("");function k({base64:m,blob:d,info:s}){e.value=s,a.value=m}return j(()=>{_.value.hide()}),(m,d)=>{const s=n("el-link"),x=n("el-image"),b=n("el-popover"),C=n("el-card"),y=z("loading");return c(),f(C,{shadow:"never"},{header:t(()=>[o("div",I,[o("span",A,[i(" 图片裁剪，基于开源的 "),l(s,{href:"https://fengyuanchen.github.io/cropperjs/",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:t(()=>[i(" cropperjs ")]),_:1}),i(" 进行二次封装（提示：右键下面左侧裁剪区可开启功能菜单） ")])]),l(s,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/cropping",target:"_blank"},{default:t(()=>[i(" 代码位置 src/views/components/cropping ")]),_:1})]),default:t(()=>[N((c(),h("div",E,[l(b,{ref_key:"popoverRef",ref:_,visible:u.value,placement:"right",width:"300px"},{reference:t(()=>[l(v(B),{ref_key:"refCropper",ref:w,class:"w-[30vw]",src:v(D),circled:"",onCropper:k,onReadied:d[0]||(d[0]=S=>u.value=!0)},null,8,["src"])]),default:t(()=>[o("div",J,[a.value?(c(),f(x,{key:0,src:a.value,"preview-src-list":Array.of(a.value),fit:"cover"},null,8,["src","preview-src-list"])):g("",!0),e.value?(c(),h("div",K,[o("p",null," 图像大小："+p(parseInt(e.value.width))+" × "+p(parseInt(e.value.height))+"像素 ",1),o("p",null," 文件大小："+p(v(V)(e.value.size))+"（"+p(e.value.size)+" 字节） ",1)])):g("",!0)])]),_:1},8,["visible"])])),[[y,!u.value]])]),_:1})}}});export{$ as default};
