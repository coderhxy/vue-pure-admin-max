import{d as h,a as d,ad as C,b as uu,w as o,e as s,f as eu,g as D,h as n,i as e,u as nu,aj as r,W as lu,ak as v,F as A,al as E,J as a,am as tu,L as R}from"./index-DUhDYU9H.js";import{_ as ou}from"./formPrimitive.vue_vue_type_script_setup_true_lang-DlfKx6f_.js";import{_ as p}from"./form.vue_vue_type_script_setup_true_lang-CutEItB0.js";const ru={class:"card-header"},iu={class:"font-medium"},Bu=h({__name:"index",setup(su){function b(){r({title:"基础用法",contentRenderer:()=>e("p",null,[n("抽屉内容-基础用法")])})}function w(){r({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[n("抽屉内容-无背景遮罩层")])})}const $=lu(()=>r({title:"延时2秒打开抽屉",openDelay:1400,contentRenderer:()=>e("p",null,[n("抽屉内容-延时2秒打开抽屉")])}),600);function x(){r({title:"延时2秒关闭抽屉",closeDelay:2e3,contentRenderer:()=>e("p",null,[n("抽屉内容-延时2秒关闭抽屉")])})}function z(){r({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[n("抽屉内容-不显示右上角关闭按钮图标")])})}function I(){r({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[n("抽屉内容-禁止通过键盘ESC关闭")])})}function P(){r({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[n("抽屉内容-禁止通过点击modal关闭")])})}function _(){r({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[n("抽屉内容-隐藏底部取消、确定按钮")])})}function y(){r({title:"自定义头部",showClose:!1,headerRenderer:({close:t,titleId:u,titleClass:i})=>e("div",{class:"flex flex-row justify-between"},[e("h4",{id:u,class:i},[n("自定义头部")]),e(s("el-button"),{type:"danger",onClick:t},{default:()=>[n("关闭")]})]),contentRenderer:()=>e("p",null,[n("抽屉内容-自定义头部")])})}function S(){r({title:"自定义底部",footerRenderer:({options:t,index:u})=>e(s("el-button"),{onClick:()=>E(t,u)},{default:()=>[t.title,n("-"),u]}),contentRenderer:()=>e("p",null,[n("抽屉内容-自定义底部")])})}function g(){r({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({drawer:{options:t,index:u},button:i})=>{E(t,u)}},{label:"按钮2",text:!0,bg:!0,btnClick:({drawer:{options:t,index:u},button:i})=>{E(t,u)}},{label:"按钮3",size:"large",type:"warning",btnClick:({drawer:{options:t,index:u},button:i})=>{E(t,u)}}],contentRenderer:()=>e("p",null,[n("抽屉内容-自定义底部按钮")])})}function O(){r({title:"打开后的回调",open:({options:t,index:u})=>a({options:t,index:u}),contentRenderer:()=>e("p",null,[n("抽屉内容-打开后的回调")])})}function T(){r({title:"关闭后的回调",closeCallBack:({options:t,index:u,args:i})=>{let l="";(i==null?void 0:i.command)==="cancel"?l="您点击了取消按钮":(i==null?void 0:i.command)==="sure"?l="您点击了确定按钮":l="您点击了右上角关闭按钮或空白页或按下了esc键",a(l)},contentRenderer:()=>e("p",null,[n("抽屉内容-关闭后的回调")])})}function N(){r({title:"嵌套的抽屉",size:"50%",contentRenderer:({index:t})=>e(s("el-button"),{onClick:()=>r({title:`第${t+1}个子抽屉`,size:"40%",contentRenderer:({index:u})=>e(s("el-button"),{onClick:()=>r({title:`第${u+1}个子抽屉`,size:"30%",contentRenderer:()=>e(A,null,[e(s("el-button"),{round:!0,onClick:()=>tu()},{default:()=>[n("哎呦，你干嘛，赶快关闭所有抽屉")]})])})},{default:()=>[n("点击打开第"),u+1,n("个子抽屉")]})})},{default:()=>[n("点击打开第"),t+1,n("个子抽屉")]})})}function L(){const t=d(1);r({title:`第${t.value}页`,contentRenderer:()=>e(A,null,[e(s("el-button"),{disabled:t.value<=1,onClick:()=>{t.value-=1,v(`第${t.value}页`)}},{default:()=>[n("上一页")]}),e(s("el-button"),{onClick:()=>{t.value+=1,v(`第${t.value}页`)}},{default:()=>[n("下一页")]})])})}function H(){r({size:"30%",title:"Popconfirm确认框示例",popConfirm:{title:"是否确认修改当前数据"},contentRenderer:()=>e("p",null,[n("点击右下方确定按钮看看效果吧")])})}function M(){r({size:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>p,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:t,args:u})=>{const{formInline:i}=t.props,l=`姓名：${i.user} 城市：${i.region}`;(u==null?void 0:u.command)==="cancel"?a(`您点击了取消按钮，当前表单数据为 ${l}`):(u==null?void 0:u.command)==="sure"?a(`您点击了确定按钮，当前表单数据为 ${l}`):a(`您点击了右上角关闭按钮或空白页或按下了esc键，当前表单数据为 ${l}`)}})}const B=d({user:"菜虚鲲",region:"浙江"}),V=C(B.value);function j(){r({size:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>R(p,{formInline:B.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${B.value.user} 城市：${B.value.region}`),B.value=C(V)}})}const f=d({user:"菜虚鲲",region:"浙江"}),U=C(f.value);function W(){r({size:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(p,{formInline:f.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${f.value.user} 城市：${f.value.region}`),f.value=C(U)}})}const c=d({user:"菜虚鲲",region:"浙江"}),J=C(c.value);function q(){r({size:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(p,{formInline:c.value},null),closeCallBack:()=>{a(`当前表单数据为 姓名：${c.value.user} 城市：${c.value.region}`),c.value=C(J)}})}const m=d("Hello World"),G=d(m.value);function K(){r({size:"30%",title:"子组件 prop 为 primitive 类型 demo",contentRenderer:()=>R(ou,{data:m.value,"onUpdate:data":t=>m.value=t}),closeCallBack:()=>{a(`当前表单内容：${m.value}`),m.value=G.value}})}function Q(){r({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[n("抽屉内容-点击底部取消按钮的回调（会暂停抽屉的关闭）")]),beforeCancel:(t,{options:u,index:i})=>{}})}function X(){r({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[n("抽屉内容-点击底部确定按钮的回调（会暂停抽屉的关闭，经常用于新增、修改抽屉内容后调用接口）")]),beforeSure:(t,{options:u,index:i})=>{}})}function Y(){r({sureBtnLoading:!0,title:"点击底部确定按钮可开启按钮动画",contentRenderer:()=>e("p",null,[n("抽屉内容-点击底部确定按钮可开启按钮动画")]),beforeSure:(t,{closeLoading:u})=>{setTimeout(()=>t(),800)}})}return(t,u)=>{const i=s("el-link"),l=s("el-button"),k=s("el-space"),F=s("el-divider"),Z=s("el-card");return eu(),uu(Z,{shadow:"never"},{header:o(()=>[D("div",ru,[D("span",iu,[u[1]||(u[1]=n(" 二次封装 Element Plus 的 ")),e(i,{href:"https://element-plus.org/zh-CN/component/drawer.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:o(()=>u[0]||(u[0]=[n(" Drawer ")])),_:1})])]),e(i,{href:"https://github.com/pure-admin/vue-pure-admin/tree/main/src/views/components/drawer",target:"_blank"},{default:o(()=>u[2]||(u[2]=[n(" 代码位置 src/views/components/drawer ")])),_:1})]),default:o(()=>[e(k,{wrap:""},{default:o(()=>[e(l,{onClick:b},{default:o(()=>u[3]||(u[3]=[n("基础用法")])),_:1}),e(l,{onClick:w},{default:o(()=>u[4]||(u[4]=[n(" 无背景遮罩层 ")])),_:1}),e(l,{onClick:nu($)},{default:o(()=>u[5]||(u[5]=[n(" 延时2秒打开抽屉 ")])),_:1},8,["onClick"]),e(l,{onClick:x},{default:o(()=>u[6]||(u[6]=[n(" 延时2秒关闭抽屉 ")])),_:1}),e(l,{onClick:z},{default:o(()=>u[7]||(u[7]=[n(" 不显示右上角关闭按钮图标 ")])),_:1}),e(l,{onClick:I},{default:o(()=>u[8]||(u[8]=[n(" 禁止通过键盘ESC关闭 ")])),_:1}),e(l,{onClick:P},{default:o(()=>u[9]||(u[9]=[n(" 禁止通过点击modal关闭 ")])),_:1}),e(l,{onClick:_},{default:o(()=>u[10]||(u[10]=[n(" 隐藏底部取消、确定按钮 ")])),_:1}),e(l,{onClick:y},{default:o(()=>u[11]||(u[11]=[n(" 自定义头部 ")])),_:1}),e(l,{onClick:S},{default:o(()=>u[12]||(u[12]=[n(" 自定义底部 ")])),_:1}),e(l,{onClick:g},{default:o(()=>u[13]||(u[13]=[n(" 自定义底部按钮 ")])),_:1}),e(l,{onClick:O},{default:o(()=>u[14]||(u[14]=[n(" 打开后的回调 ")])),_:1}),e(l,{onClick:T},{default:o(()=>u[15]||(u[15]=[n(" 关闭后的回调 ")])),_:1}),e(l,{onClick:N},{default:o(()=>u[16]||(u[16]=[n(" 嵌套的抽屉 ")])),_:1}),e(l,{onClick:L},{default:o(()=>u[17]||(u[17]=[n(" 更改抽屉自身属性值 ")])),_:1}),e(l,{onClick:H},{default:o(()=>u[18]||(u[18]=[n("Popconfirm确认框")])),_:1})]),_:1}),e(F),e(k,{wrap:""},{default:o(()=>[e(l,{onClick:M},{default:o(()=>u[19]||(u[19]=[n(" 结合Form表单（第一种方式） ")])),_:1}),e(l,{onClick:j},{default:o(()=>u[20]||(u[20]=[n(" 结合Form表单（第二种方式） ")])),_:1}),e(l,{onClick:W},{default:o(()=>u[21]||(u[21]=[n(" 结合Form表单（第三种方式） ")])),_:1}),e(l,{onClick:q},{default:o(()=>u[22]||(u[22]=[n(" 结合Form表单（第四种方式） ")])),_:1}),e(l,{onClick:K},{default:o(()=>u[23]||(u[23]=[n(" 子组件 prop 为 primitive 类型 ")])),_:1})]),_:1}),e(F),e(k,{wrap:""},{default:o(()=>[e(l,{onClick:Q},{default:o(()=>u[24]||(u[24]=[n(" 点击底部取消按钮的回调（会暂停抽屉的关闭） ")])),_:1}),e(l,{onClick:X},{default:o(()=>u[25]||(u[25]=[n(" 点击底部确定按钮的回调（会暂停抽屉的关闭，经常用于新增、修改抽屉内容后调用接口） ")])),_:1}),e(l,{onClick:Y},{default:o(()=>u[26]||(u[26]=[n(" 点击底部确定按钮可开启按钮动画 ")])),_:1})]),_:1})]),_:1})}}});export{Bu as default};
