var w=(i,r,e)=>new Promise((a,n)=>{var f=t=>{try{p(e.next(t))}catch(v){n(v)}},d=t=>{try{p(e.throw(t))}catch(v){n(v)}},p=t=>t.done?a(t.value):Promise.resolve(t.value).then(f,d);p((e=e.apply(i,r)).next())});import{r as R,ac as o,fC as s,fZ as $,gb as C,a as E,a8 as h}from"./index.js";const y=/^\d{6}$/,P=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/,A=R({password:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.purePassWordReg")))):P.test(r)?e():e(new Error(o(s("login.purePassWordRuleReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.pureVerifyCodeReg")))):$().verifyCode!==r?e(new Error(o(s("login.pureVerifyCodeCorrectReg")))):e()},trigger:"blur"}]}),W=R({phone:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.purePhoneReg")))):C(r)?e():e(new Error(o(s("login.purePhoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.pureVerifyCodeReg")))):y.test(r)?e():e(new Error(o(s("login.pureVerifyCodeSixReg"))))},trigger:"blur"}]}),Z=R({phone:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.purePhoneReg")))):C(r)?e():e(new Error(o(s("login.purePhoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.pureVerifyCodeReg")))):y.test(r)?e():e(new Error(o(s("login.pureVerifyCodeSixReg"))))},trigger:"blur"}],password:[{validator:(i,r,e)=>{r===""?e(new Error(o(s("login.purePassWordReg")))):P.test(r)?e():e(new Error(o(s("login.purePassWordRuleReg"))))},trigger:"blur"}]}),g=E(!1),u=E(null),l=E(""),x=()=>({isDisabled:g,timer:u,text:l,start:(e,a,n=60)=>w(void 0,null,function*(){if(!e)return;const f=h(n,!0);yield e.validateField(a,d=>{d&&(clearInterval(u.value),g.value=!0,l.value=`${n}`,u.value=setInterval(()=>{n>0?(n-=1,l.value=`${n}`):(l.value="",g.value=!1,clearInterval(u.value),n=f)},1e3))})}),end:()=>{l.value="",g.value=!1,clearInterval(u.value)}});export{Z as a,A as l,W as p,x as u};
