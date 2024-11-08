var V=Object.defineProperty,A=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var x=(n,t,a)=>t in n?V(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,y=(n,t)=>{for(var a in t||(t={}))q.call(t,a)&&x(n,a,t[a]);if(b)for(var a of b(t))B.call(t,a)&&x(n,a,t[a]);return n},w=(n,t)=>A(n,T(t));import{d as L,N as _,ad as C,a8 as I,a9 as P,p as E,aa as z,ab as j,b as H,w as s,e as h,f as K,g as c,i as d,h as M,u as m,t as g,ac as S}from"./index.js";const k=L({name:"ReTreeLine",props:{node:{type:Object,required:!0},data:{type:Array,default:()=>{}},treeData:{type:Array,default:()=>[]},indent:{type:Number,default:16},showLabelLine:{type:Boolean,default:!0}},setup(n,t){const{slots:a}=t;return{getScopedSlot:l=>{if(!l)return null;const r=l.split("||");let e=null;for(let o=0;o<r.length;o++){const i=r[o];e=(a||{})[i]}return e},getSlotValue:(l,r,e=null)=>C(l)?l(r)||e:l||e}},render(){const n=this.getScopedSlot("default"),t=this.getScopedSlot("node-label"),a=this.getScopedSlot("after-node-label"),f=n?this.getSlotValue(n,{node:this.node,data:this.data}):[t?this.getSlotValue(t,{node:this.node,data:this.data}):_("span",{class:"element-tree-node-label"},this.node.label),this.showLabelLine?_("span",{class:"element-tree-node-label-line"}):null,this.getSlotValue(a,{node:this.node,data:this.data})],u=[];let l=this.node;for(;l;){let e=l.parent;if(l.level===1&&!l.parent){if(!this.treeData||!Array.isArray(this.treeData))throw Error("if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data.");e={children:Array.isArray(this.treeData)?this.treeData.map(o=>w(y({},o),{key:o.id})):[],level:0,key:"node-0",parent:null}}if(e){const o=(e.children||e.childNodes).findIndex(i=>(i.key||i.id)===(l.key||l.id));u.unshift(o===(e.children||e.childNodes).length-1)}l=e}const r=[];for(let e=0;e<this.node.level;e++)r.push(_("span",{class:{"element-tree-node-line-ver":!0,"last-node-line":u[e]&&this.node.level-1!==e,"last-node-isLeaf-line":u[e]&&this.node.level-1===e},style:{left:this.indent*e+"px"}}));return _("span",{class:"element-tree-node-label-wrapper"},[f].concat(r).concat([_("span",{class:"element-tree-node-line-hor",style:{width:(this.node.isLeaf?24:8)+"px",left:(this.node.level-1)*this.indent+"px"}})]))}}),O={class:"card-header"},R=c("p",{class:"font-medium"}," 扩展 Elemenet Plus 的树形组件包括虚拟树组件，支持连接线 ",-1),F=c("div",{class:"card-header"},"普通树结构",-1),G={class:"max-h-[550px] overflow-y-auto"},J={class:"text-sm"},Q=c("div",{class:"card-header"},"虚拟树结构",-1),U={class:"max-h-[550px] overflow-y-auto"},W={class:"text-sm"},Z=L({name:"LineTree",__name:"line-tree",setup(n){const t=I(P().wholeMenus,!0),a=E(()=>z(t)),f=j(a.value),u={value:"uniqueId",children:"children"};return(l,r)=>{const e=h("el-link"),o=h("el-tree"),i=h("el-card"),v=h("el-col"),D=h("el-tree-v2"),N=h("el-row");return K(),H(i,{shadow:"never"},{header:s(()=>[c("div",O,[R,d(e,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/line-tree.vue",target:"_blank"},{default:s(()=>[M(" 代码位置 src/views/able/line-tree.vue ")]),_:1})])]),default:s(()=>[d(N,{gutter:24},{default:s(()=>[d(v,{xs:24,sm:24,md:12,lg:12,xl:12,class:"mb-[20px]"},{default:s(()=>[d(i,{shadow:"never"},{header:s(()=>[F]),default:s(()=>[c("div",G,[d(o,{data:a.value,props:u,"show-checkbox":"","default-expand-all":"","node-key":"uniqueId",indent:30},{default:s(({node:p})=>[d(m(k),{node:p,showLabelLine:!0},{"node-label":s(()=>[c("span",J,g(m(S)(p.data.meta.title)),1)]),_:2},1032,["node"])]),_:1},8,["data"])])]),_:1})]),_:1}),d(v,{xs:24,sm:24,md:12,lg:12,xl:12},{default:s(()=>[d(i,{shadow:"never"},{header:s(()=>[Q]),default:s(()=>[c("div",U,[d(D,{data:a.value,props:u,"show-checkbox":"",height:550,"default-expanded-keys":m(f)},{default:s(({node:p})=>[d(m(k),{node:p,treeData:a.value,showLabelLine:!0,indent:30},{"node-label":s(()=>[c("span",W,g(m(S)(p.data.meta.title)),1)]),_:2},1032,["node","treeData"])]),_:1},8,["data","default-expanded-keys"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Z as default};
