var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(n,e,t)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,a=(n,e)=>{for(var t in e||(e={}))h.call(e,t)&&p(n,t,e[t]);if(i)for(var t of i(e))x.call(e,t)&&p(n,t,e[t]);return n};import{d as v,db as y,a as c,m as C,d4 as b,b as g,w as P,a6 as R,q as T,N as _,e as M,f as $,U as k,Z as w}from"./index-BBFSeAfV.js";const H=v({name:"ReText",__name:"index",props:{lineClamp:{type:[String,Number]},tippyProps:{type:Object,default:()=>({})}},setup(n){const e=n,t=y(),l=c(),o=c(),u=s=>e.lineClamp?s.scrollHeight>s.clientHeight:s.scrollWidth>s.clientWidth,r=()=>a({content:_(t.content||t.default)},e.tippyProps);function f(s){u(s.target)?(o.value.setProps(r()),o.value.enable()):o.value.disable()}return C(()=>{var s;o.value=b((s=l.value)==null?void 0:s.$el,r())}),(s,S)=>{const d=M("el-text");return $(),g(d,R(a({truncated:!n.lineClamp,lineClamp:n.lineClamp},s.$attrs),{ref_key:"textRef",ref:l,onMouseover:T(f,["self"])}),{default:P(()=>[k(s.$slots,"default")]),_:3},16)}}}),W=w(H);export{W as R};
