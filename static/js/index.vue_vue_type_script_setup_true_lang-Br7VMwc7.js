import{useColumns as U}from"./columns-DehS44QN.js";import{d as k,e as r,f as N,k as B,i as e,w as l,u as a,aG as m,h as o,g as _}from"./index-BBFSeAfV.js";const y=_("p",{class:"text-sm"},"多选：",-1),A=_("p",{class:"text-sm"},"动态列：",-1),T=_("p",{class:"text-sm"},"表格大小：",-1),D=_("p",{class:"text-sm"},"分页大小：",-1),E=_("p",{class:"text-sm"},"分页的对齐方式：",-1),W=k({__name:"index",setup(G){const{loading:h,columns:V,dataList:C,select:p,hideVal:f,tableSize:d,pagination:s,loadingConfig:z,paginationAlign:c,paginationSmall:v,onChange:x,onSizeChange:b,onCurrentChange:S}=U();return(L,n)=>{const t=r("el-radio-button"),i=r("el-radio-group"),g=r("el-divider"),P=r("el-space"),w=r("pure-table");return N(),B("div",null,[e(P,{class:"float-right mb-4"},{default:l(()=>[y,e(i,{modelValue:a(p),"onUpdate:modelValue":n[0]||(n[0]=u=>m(p)?p.value=u:null),size:"small"},{default:l(()=>[e(t,{value:"yes"},{default:l(()=>[o("是")]),_:1}),e(t,{value:"no"},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"]),e(g,{direction:"vertical"}),A,e(i,{modelValue:a(f),"onUpdate:modelValue":n[1]||(n[1]=u=>m(f)?f.value=u:null),size:"small"},{default:l(()=>[e(t,{value:"nohide"},{default:l(()=>[o("不隐藏")]),_:1}),e(t,{value:"hideDate"},{default:l(()=>[o("隐藏日期")]),_:1}),e(t,{value:"hideName"},{default:l(()=>[o("隐藏姓名")]),_:1}),e(t,{value:"hideAddress"},{default:l(()=>[o("隐藏地址")]),_:1})]),_:1},8,["modelValue"]),e(g,{direction:"vertical"}),T,e(i,{modelValue:a(d),"onUpdate:modelValue":n[2]||(n[2]=u=>m(d)?d.value=u:null),size:"small"},{default:l(()=>[e(t,{value:"large"},{default:l(()=>[o("large")]),_:1}),e(t,{value:"default"},{default:l(()=>[o("default")]),_:1}),e(t,{value:"small"},{default:l(()=>[o("small")]),_:1})]),_:1},8,["modelValue"]),e(g,{direction:"vertical"}),D,e(i,{modelValue:a(v),"onUpdate:modelValue":n[3]||(n[3]=u=>m(v)?v.value=u:null),size:"small",onChange:a(x)},{default:l(()=>[e(t,{value:!1},{default:l(()=>[o("no small")]),_:1}),e(t,{value:!0},{default:l(()=>[o("small")]),_:1})]),_:1},8,["modelValue","onChange"]),e(g,{direction:"vertical"}),E,e(i,{modelValue:a(c),"onUpdate:modelValue":n[4]||(n[4]=u=>m(c)?c.value=u:null),size:"small"},{default:l(()=>[e(t,{value:"right"},{default:l(()=>[o("right")]),_:1}),e(t,{value:"center"},{default:l(()=>[o("center")]),_:1}),e(t,{value:"left"},{default:l(()=>[o("left")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(w,{border:"","row-key":"id",alignWhole:"center",showOverflowTooltip:"",size:a(d),loading:a(h),"loading-config":a(z),height:a(d)==="small"?352:440,data:a(C).slice((a(s).currentPage-1)*a(s).pageSize,a(s).currentPage*a(s).pageSize),columns:a(V),pagination:a(s),onPageSizeChange:a(b),onPageCurrentChange:a(S)},null,8,["size","loading","loading-config","height","data","columns","pagination","onPageSizeChange","onPageCurrentChange"])])}}});export{W as _};
