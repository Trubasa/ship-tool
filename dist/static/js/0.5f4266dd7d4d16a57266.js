webpackJsonp([0],{"NX/y":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("3cXf"),l=t.n(s),i={name:"volume-measure",data:function(){return{resultList:[],activeNames1:["1"],activeNames2:[],activeNames3:["1"],activeNames4:[],xlsxData:null,trList:[],selectValue:"",form:{},paramHeight:0,paramList:[],autoMeasure:"",maxVolume:"",fileName:"",sheet:""}},watch:{paramHeight:function(e){parseFloat(e)>this.maxGauge&&this.$message({message:"输入的纵倾大于数据最大值",type:"warning"}),this.paramList=this.getCalParam()},resultList:function(e){localStorage.setItem("resultList",l()(e))}},computed:{maxGauge:function(){return parseFloat(this.xlsxData[this.xlsxData.length-1].GAUGE)},manualMeasure:function(){return 0==this.paramList.length?"":(this.paramList[1][this.selectValue]-this.paramList[0][this.selectValue])*(this.paramHeight-parseFloat(this.paramList[0].GAUGE))/(parseFloat(this.paramList[1].GAUGE)-parseFloat(this.paramList[0].GAUGE))+parseFloat(this.paramList[0][this.selectValue])},errorMeasure:function(){return""==this.manualMeasure||""==this.maxVolume?"":parseInt((this.manualMeasure-parseFloat(this.autoMeasure))/this.maxVolume*1e4)/100+"%"}},mounted:function(){this.$store.commit("changeTitle","舱容测量"),console.log(localStorage.resultList),this.resultList=localStorage.resultList&&"[]"!=localStorage.resultList?JSON.parse(localStorage.resultList):[]},methods:{setXlsxInfo:function(e){this.fileName=e.fileName,this.sheet=e.sheet},saveResult:function(){var e={};for(var a in e["文件名"]=this.fileName,e["舱室"]=this.sheet,e["纵倾"]=this.selectValue,e["液位"]=this.paramHeight,e["遥测舱容"]=this.autoMeasure,e["手测舱容"]=this.manualMeasure,e["误差"]=this.errorMeasure,e["测量时间"]=this.$common.dateFormatter((new Date).getTime()),e)if(!this.$common.verify(a,e[a],"require"))return;console.log(e),this.resultList.unshift(e),this.resultList.length>productConfig.maxResultList&&this.resultList.pop(),this.$message({message:"保存成功",type:"success"})},setXlsxData:function(e){this.xlsxData=e,this.maxVolume=this.getMaxVolume(e),this.trList=this.getTrList(e),this.selectValue=this.trList[0],this.calculate()},trChange:function(e){},calculate:function(e){var a=this.getCalParam();console.log(a),this.paramList=a,a.length},getTrList:function(e){var a=[],t=e[0];for(var s in t)"GAUGE"!=s&&"ULL"!=s&&a.push(s);return a},getMaxVolume:function(e){var a=e[e.length-1],t=0;for(var s in a)"GAUGE"!=s&&"ULL"!=s&&parseFloat(a[s])>t&&(t=parseFloat(a[s]));return t},getCalParam:function(){var e=[];if(!this.xlsxData)return this.$message.info("暂无数据，请上传excel！"),e;for(var a=0;a<this.xlsxData.length;a++)if(parseFloat(this.xlsxData[a].GAUGE)>this.paramHeight){e.push(this.xlsxData[a-1]),e.push(this.xlsxData[a]);break}return e}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"volume-measure"},[t("div",{staticClass:"page_panel mgb"},[t("el-collapse",{model:{value:e.activeNames1,callback:function(a){e.activeNames1=a},expression:"activeNames1"}},[t("el-collapse-item",{attrs:{title:"数据选择",name:"1"}},[t("xlsx-analyze",{on:{xlsxData:function(a){e.setXlsxData(a)},xlsxInfo:e.setXlsxInfo}})],1)],1)],1),e._v(" "),t("div",{staticClass:"page_panel mgb"},[t("el-collapse",{model:{value:e.activeNames2,callback:function(a){e.activeNames2=a},expression:"activeNames2"}},[t("el-collapse-item",{attrs:{title:"数据列表",name:"1"}},[t("xlsx-table",{attrs:{data:e.xlsxData}})],1)],1)],1),e._v(" "),t("div",{staticClass:"page_panel mgb"},[t("el-collapse",{model:{value:e.activeNames3,callback:function(a){e.activeNames3=a},expression:"activeNames3"}},[t("el-collapse-item",{attrs:{title:"参数",name:"1"}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[e.trList?t("el-form-item",{attrs:{label:"纵倾"}},[t("el-select",{staticClass:"input_normal",attrs:{placeholder:"请选择"},on:{change:e.trChange},model:{value:e.selectValue,callback:function(a){e.selectValue=a},expression:"selectValue"}},e._l(e.trList,function(e,a){return t("el-option",{key:a,attrs:{label:e,value:e}})}))],1):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"液位"}},[t("el-input",{staticClass:"input_normal",attrs:{type:"number"},model:{value:e.paramHeight,callback:function(a){e.paramHeight=a},expression:"paramHeight"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"遥测舱容"}},[t("el-input",{staticClass:"input_normal",attrs:{type:"number"},model:{value:e.autoMeasure,callback:function(a){e.autoMeasure=a},expression:"autoMeasure"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手测舱容"}},[e._v("\n            "+e._s(e.manualMeasure)+"\n          ")]),e._v(" "),t("el-form-item",{attrs:{label:"误差"}},[e._v("\n            "+e._s(e.errorMeasure)+"\n          ")])],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"page_panel mgb"},[t("el-collapse",{model:{value:e.activeNames4,callback:function(a){e.activeNames4=a},expression:"activeNames4"}},[t("el-collapse-item",{attrs:{title:"计算面板",name:"1"}},[0!=e.paramList.length?t("div",[e._v("\n          手测：("+e._s(e.paramList[1][e.selectValue])+"-"+e._s(e.paramList[0][e.selectValue])+")/("+e._s(parseFloat(e.paramList[1].GAUGE))+"-"+e._s(parseFloat(e.paramList[0].GAUGE))+")*("+e._s(e.paramHeight)+"-"+e._s(parseFloat(e.paramList[0].GAUGE))+")+"+e._s(e.paramList[0][e.selectValue])+"=\n          "),t("span",{staticClass:"main_color"},[e._v(e._s(e.manualMeasure))])]):e._e(),e._v(" "),""!=e.errorMeasure?t("div",[e._v("\n          误差：("+e._s(e.manualMeasure)+"-"+e._s(parseFloat(e.autoMeasure))+")/"+e._s(e.maxVolume)+"\n          "),t("span",{staticClass:"main_color"},[e._v(e._s(e.errorMeasure))])]):e._e()])],1)],1),e._v(" "),t("div",{staticClass:"float_panel_br_1"},[t("el-button",{attrs:{type:"primary",circle:""},on:{click:e.saveResult}},[t("i",{staticClass:"iconfont icon-qianyuejilu"})])],1)])},staticRenderFns:[]};var n=t("46Yf")(i,r,!1,function(e){t("m4Nq"),t("kCqx")},"data-v-342ee421",null);a.default=n.exports},kCqx:function(e,a){},m4Nq:function(e,a){}});