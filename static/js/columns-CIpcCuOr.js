import{P as d}from"./print-B-zH8tbv.js";import{b}from"./data-DRAt627D.js";import{a as c,a9 as i}from"./index-BBFSeAfV.js";function g(a){const e=c(i(b,!0)),t=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],o=()=>{d(a.value.getTableDoms().tableWrapper).toPrint};function n({column:{property:r},rowIndex:f}){if(r==="id")return f<3?{background:"#87baf9"}:{background:"#87e8de"}}function l({columnIndex:r}){return r===0?{background:"#f3b2d0"}:{background:"#fafafa"}}function u({rowIndex:r}){return r%2===1?{background:"#ffa39e"}:{background:"#91d5ff"}}return{columns:t,dataList:e,print:o,rowStyle:u,cellStyle:n,headerCellStyle:l}}export{g as useColumns};
