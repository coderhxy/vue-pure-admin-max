import{d as g,p as N,i as n,u as l,a as u,B as A,a0 as H,F as I,r as B,b as U,w as a,e as S,f as W,g as c,h as X,_ as Y}from"./index-DUhDYU9H.js";const L=g({name:"Resizer",props:{split:{type:String,required:!0},className:{type:String,default:""}},setup(t){const i=N(()=>["splitter-pane-resizer",t.split,t.className].join(" "));return()=>n("div",{class:l(i)},null)}}),R=g({name:"SplitPane",components:{resizer:L},props:{splitSet:{type:Object,require:!0}},emits:["resize"],setup(t,i){var h,w,P,b,z;const r=u(!1),f=u(!1),e=u((h=t.splitSet)==null?void 0:h.defaultPercent),v=((w=t.splitSet)==null?void 0:w.split)==="vertical"?"width":"height",p=((P=t.splitSet)==null?void 0:P.split)==="vertical"?"left":"top",d=u(["splitter-pane splitter-paneL",(b=t.splitSet)==null?void 0:b.split]),x=u(["splitter-pane splitter-paneR",(z=t.splitSet)==null?void 0:z.split]),V=N(()=>{var s;return r.value?((s=t.splitSet)==null?void 0:s.split)==="vertical"?{cursor:"col-resize"}:{cursor:"row-resize"}:{cursor:"default"}}),j=()=>{f.value||(e.value=50,i.emit("resize",e.value))},q=()=>{r.value=!0,f.value=!1},D=()=>{r.value=!1},F=s=>{var y,M,k,C,T;if((s.buttons===0||s.which===0)&&(r.value=!1),r.value){let m=0,o=s.currentTarget;if(((y=t.splitSet)==null?void 0:y.split)==="vertical")for(;o;)m+=o.offsetLeft,o=o.offsetParent;else for(;o;)m+=o.offsetTop,o=o.offsetParent;const O=((M=t.splitSet)==null?void 0:M.split)==="vertical"?s.pageX:s.pageY,$=((k=t.splitSet)==null?void 0:k.split)==="vertical"?s.currentTarget.offsetWidth:s.currentTarget.offsetHeight,_=Math.floor((O-m)/$*1e4)/100;_>((C=t.splitSet)==null?void 0:C.minPercent)&&_<100-((T=t.splitSet)==null?void 0:T.minPercent)&&(e.value=_),i.emit("resize",e.value),f.value=!0}};return()=>{var s;return n(I,null,[n("div",{class:"vue-splitter-container clearfix",style:l(V),onMouseup:()=>D(),onMousemove:()=>F(event)},[n("div",{class:l(d),style:{[l(v)]:l(e)+"%"}},[i.slots.paneL()]),n(L,{style:`${l([p])}:${l(e)}%`,split:(s=t.splitSet)==null?void 0:s.split,onMousedown:()=>q(),onClick:()=>j()},null),n("div",{class:l(x),style:{[l(v)]:100-l(e)+"%"}},[i.slots.paneR()]),A(n("div",{class:"vue-splitter-container-mask"},null),[[H,l(r)]])])])}}}),E={class:"card-header"},G={class:"split-pane"},J=g({name:"SplitPane",__name:"split-pane",setup(t){const i=B({minPercent:20,defaultPercent:40,split:"vertical"}),r=B({minPercent:20,defaultPercent:40,split:"horizontal"});return(f,e)=>{const v=S("el-link"),p=S("el-scrollbar"),d=S("el-card");return W(),U(d,{shadow:"never"},{header:a(()=>[c("div",E,[e[1]||(e[1]=c("p",{class:"font-medium"},"切割面板",-1)),n(v,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/split-pane.vue",target:"_blank"},{default:a(()=>e[0]||(e[0]=[X(" 代码位置 src/views/components/split-pane.vue ")])),_:1})])]),default:a(()=>[c("div",G,[n(l(R),{splitSet:i},{paneL:a(()=>[n(p,null,{default:a(()=>e[2]||(e[2]=[c("div",{class:"dv-a"},"A",-1)])),_:1})]),paneR:a(()=>[n(l(R),{splitSet:r},{paneL:a(()=>[n(p,null,{default:a(()=>e[3]||(e[3]=[c("div",{class:"dv-b"},"B",-1)])),_:1})]),paneR:a(()=>[n(p,null,{default:a(()=>e[4]||(e[4]=[c("div",{class:"dv-c"},"C",-1)])),_:1})]),_:1},8,["splitSet"])]),_:1},8,["splitSet"])])]),_:1})}}}),Q=Y(J,[["__scopeId","data-v-57f6b178"]]);export{Q as default};
