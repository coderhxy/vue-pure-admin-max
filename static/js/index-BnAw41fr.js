var d=Object.defineProperty;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&p(n,t,e[t]);if(i)for(var t of i(e))x.call(e,t)&&p(n,t,e[t]);return n};import{d as v,aW as y,a as c,m as C,aO as g,b,w as P,a5 as R,q as T,N as _,e as M,f as S,S as $,Y as k}from"./index-CcH4JEIi.js";const w=v({name:"ReText",__name:"index",props:{lineClamp:{type:[String,Number]},tippyProps:{type:Object,default:()=>({})}},setup(n){const e=n,t=y(),l=c(),a=c(),u=s=>e.lineClamp?s.scrollHeight>s.clientHeight:s.scrollWidth>s.clientWidth,r=()=>o({content:_(t.content||t.default)},e.tippyProps);function f(s){u(s.target)?(a.value.setProps(r()),a.value.enable()):a.value.disable()}return C(()=>{var s;a.value=g((s=l.value)==null?void 0:s.$el,r())}),(s,H)=>{const m=M("el-text");return S(),b(m,R(o({truncated:!n.lineClamp,lineClamp:n.lineClamp},s.$attrs),{ref_key:"textRef",ref:l,onMouseover:T(f,["self"])}),{default:P(()=>[$(s.$slots,"default")]),_:3},16)}}}),N=k(w);export{N as R};
