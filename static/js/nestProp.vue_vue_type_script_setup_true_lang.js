import{d as r,e as a,f as s,b as l,w as p,g as m}from"./index.js";const i=["innerHTML"],_=r({__name:"nestProp",setup(c){const e=[{userInfo:{name:"Test1",age:22},other:[{sex:"女"},{more:{content:'<div><span style="color: red">我是 html 片段</span></div>'}}],role:"设计师"},{userInfo:{name:"Test2",age:28},other:[{sex:"男"},{more:{content:'<img width="100" height="100" src="https://pure-admin.github.io/pure-admin-table/imgs/11.jpg">'}}],role:"后端"},{userInfo:{name:"Test3",age:20},other:[{sex:"女"},{more:{content:'<img width="100" height="100" src="https://pure-admin.github.io/pure-admin-table/imgs/1.jpg">'}}],role:"程序员鼓励师"},{userInfo:{name:"Test4",age:26},other:[{sex:"男"},{more:{content:'<a href="https://github.com/xiaoxian521" target="_black">我是链接，点我去 Follow</a>'}}],role:"前端"}],t=[{label:"姓名",prop:"userInfo.name"},{label:"性别",prop:"other[0].sex"},{label:"年龄",prop:"userInfo.age"},{label:"Html片段",slot:"content"},{label:"角色",prop:"role"}];return(h,u)=>{const o=a("pure-table");return s(),l(o,{data:e,columns:t},{content:p(({row:n})=>[m("span",{innerHTML:n.other[1].more.content},null,8,i)]),_:1})}}});export{_};
