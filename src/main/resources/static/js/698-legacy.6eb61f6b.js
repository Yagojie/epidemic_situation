"use strict";(self["webpackChunkepidemic_management_vue"]=self["webpackChunkepidemic_management_vue"]||[]).push([[698],{5698:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[o("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),o("el-breadcrumb-item",[e._v("历史行程管理")]),o("el-breadcrumb-item",{attrs:{to:{path:"/hodometer"}}},[e._v("历史出行数据管理")])],1),o("el-card",[o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入内容"},on:{clear:e.getHodoMeterList},model:{value:e.queryInfo.username,callback:function(t){e.$set(e.queryInfo,"username",t)},expression:"queryInfo.username"}},[o("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getHodoMeterList},slot:"append"})],1)],1),o("el-col",{attrs:{span:5}},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addVisible=!0}}},[e._v("添加数据")]),o("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.batchDelete(e.tableChecked)}}},[e._v("批量删除")])],1)],1),o("el-table",{staticStyle:{width:"100%"},attrs:{"cell-style":e.rowClass,"row-style":e.rowStyle,data:e.HodoMeterList,"header-cell-style":e.headClass,border:""},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),o("el-table-column",{attrs:{label:"ID",prop:"id",width:"45px"}}),o("el-table-column",{attrs:{label:"姓名",prop:"username",width:"80px"}}),o("el-table-column",{attrs:{label:"电话",prop:"mobile",width:"110"}}),o("el-table-column",{attrs:{label:"外出地点",prop:"place",width:"100px"}}),o("el-table-column",{attrs:{label:"出行时间",prop:"cxTime"}}),o("el-table-column",{attrs:{label:"备注",prop:"bz"}}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-tooltip",{staticClass:"item",attrs:{content:"编辑",effect:"dark",placement:"top-start"}},[o("el-button",{attrs:{circle:"",icon:"el-icon-edit",size:"mini",type:"primary"},on:{click:function(o){return e.editHodo(t.row)}}})],1),o("el-tooltip",{staticClass:"item",attrs:{content:"删除",effect:"dark",placement:"top-start"}},[o("el-button",{attrs:{circle:"",icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(o){return e.deleteHodo(t.row)}}})],1)]}}])})],1),o("el-pagination",{attrs:{"current-page":e.queryInfo.pageNum,"page-size":e.queryInfo.pageSize,"page-sizes":[5,8,10,12,15],total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),o("el-dialog",{attrs:{visible:e.addVisible,title:"增加数据",width:"35%"},on:{"update:visible":function(t){e.addVisible=t},close:e.closeAddDialog}},[o("el-form",{ref:"addHodoFormRef",staticClass:"demo-Info",attrs:{model:e.HodoMeter,rules:e.mobileFormRules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"用户名",prop:"username"}},[o("el-input",{model:{value:e.HodoMeter.username,callback:function(t){e.$set(e.HodoMeter,"username",t)},expression:"HodoMeter.username"}})],1),o("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[o("el-input",{model:{value:e.HodoMeter.mobile,callback:function(t){e.$set(e.HodoMeter,"mobile",t)},expression:"HodoMeter.mobile"}})],1),o("el-form-item",{attrs:{label:"外出地点",prop:"place"}},[o("el-input",{model:{value:e.HodoMeter.place,callback:function(t){e.$set(e.HodoMeter,"place",t)},expression:"HodoMeter.place"}})],1),o("el-form-item",{attrs:{label:"外出时间",prop:"cxTime"}},[o("el-date-picker",{staticStyle:{float:"left"},attrs:{placeholder:"选择日期时间",size:"large",type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.HodoMeter.cxTime,callback:function(t){e.$set(e.HodoMeter,"cxTime",t)},expression:"HodoMeter.cxTime"}})],1),o("el-form-item",{attrs:{label:"备注",prop:"bz"}},[o("el-input",{model:{value:e.HodoMeter.bz,callback:function(t){e.$set(e.HodoMeter,"bz",t)},expression:"HodoMeter.bz"}})],1)],1),o("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.addHodo}},[e._v("确 定")])],1),o("el-dialog",{attrs:{visible:e.editVisible,title:"编辑数据",width:"35%"},on:{"update:visible":function(t){e.editVisible=t},close:e.closeEditDialog}},[o("el-form",{ref:"editHodoFormRef",staticClass:"demo-Info",attrs:{model:e.HodoMeter,rules:e.mobileFormRules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"用户名",prop:"username"}},[o("el-input",{attrs:{disabled:""},model:{value:e.HodoMeter.username,callback:function(t){e.$set(e.HodoMeter,"username",t)},expression:"HodoMeter.username"}})],1),o("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[o("el-input",{model:{value:e.HodoMeter.mobile,callback:function(t){e.$set(e.HodoMeter,"mobile",t)},expression:"HodoMeter.mobile"}})],1),o("el-form-item",{attrs:{label:"外出地点",prop:"place"}},[o("el-input",{model:{value:e.HodoMeter.place,callback:function(t){e.$set(e.HodoMeter,"place",t)},expression:"HodoMeter.place"}})],1),o("el-form-item",{attrs:{label:"外出时间",prop:"cxTime"}},[o("el-date-picker",{staticStyle:{float:"left"},attrs:{placeholder:"选择日期时间",size:"large",type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.HodoMeter.cxTime,callback:function(t){e.$set(e.HodoMeter,"cxTime",t)},expression:"HodoMeter.cxTime"}})],1),o("el-form-item",{attrs:{label:"备注",prop:"bz"}},[o("el-input",{model:{value:e.HodoMeter.bz,callback:function(t){e.$set(e.HodoMeter,"bz",t)},expression:"HodoMeter.bz"}})],1)],1),o("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.updateHodo}},[e._v("确 定")])],1)],1)},l=[],i=(o(4916),o(7601),o(1703),o(1539),o(4747),{name:"HodoMeter",data:function(){var e=function(e,t,o){var a=/^1[345789]\d{9}$/;if(a.test(t))return o();o(new Error("请输入合法的手机号码"))};return{queryInfo:{username:"",pageNum:1,pageSize:5},total:null,HodoMeter:{place:"",cxTime:""},tableChecked:[],ids:[],HodoMeterList:[],editVisible:!1,addVisible:!1,mobileFormRules:{mobile:[{validator:e,trigger:"blur"}]}}},methods:{handleSelectionChange:function(e){this.tableChecked=e},headClass:function(){return"text-align:center"},rowClass:function(){return"text-align:center"},rowStyle:function(e){var t=e.row;if(t.id%2==0)return{backgroundColor:"#eedeb0"}},getHodoMeterList:function(){var e=this;this.$axios.get("/admin/odometer/getOdoMeterList",{params:this.queryInfo}).then((function(t){void 0!==t.data.data.total?1e4===t.data.status?(e.total=t.data.data.total,e.HodoMeterList=t.data.data.list,e.$message.success("查询成功！")):e.$message.error("查询失败！"):1e4===t.data.status?(e.total=1,e.HodoMeterList=[],e.HodoMeterList.push(t.data.data),e.$message.success("查询成功！")):e.$message.error("查询失败！")}))},batchDelete:function(e){var t=this;e.forEach((function(e,o){t.ids.push(e.id),console.log(t.ids)})),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t.$axios.post("/admin/odometer/deleteUsers",t.ids).then((function(e){1e4!==e.data.status&&t.$message.error("删除失败！"),t.$message({type:"success",message:"删除成功!"}),t.getHodoMeterList()})),console.log("删除了",t.ids),t.ids=[]})).catch((function(e){t.$message({type:"info",message:"已取消删除"})}))},handleSizeChange:function(e){this.queryInfo.pageSize=e,this.getHodoMeterList()},handleCurrentChange:function(e){this.queryInfo.pageNum=e,this.getHodoMeterList()},editHodo:function(e){this.HodoMeter=e,this.editVisible=!this.editVisible},closeAddDialog:function(){},closeEditDialog:function(){this.$refs["editHodoFormRef"].resetFields()},deleteHodo:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","删除用户",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.get("admin/odometer/delete/"+e.id).then((function(e){t.getHodoMeterList(),t.$message.success("删除用户成功！")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},updateHodo:function(){var e=this;this.$refs["editHodoFormRef"].validate((function(t){if(!t)return alert("请输入正确的信息！");e.$axios.post("/odometer/update",e.HodoMeter).then((function(t){1e4===t.data.status?(e.$message.success("更新成功！"),e.editVisible=!e.editVisible,e.getHodoMeterList()):e.$message.error("更新失败！")}))}))},addHodo:function(){var e=this;this.$refs["addHodoFormRef"].validate((function(t){if(!t)return alert("请输入正确的信息！");e.$axios.post("/odometer/add",e.HodoMeter).then((function(t){1e4===t.data.status?(e.$message.success("添加成功！"),e.addVisible=!e.addVisible,e.getHodoMeterList()):e.$message.error("添加失败！")}))}))}},created:function(){this.getHodoMeterList()}}),r=i,s=o(1001),n=(0,s.Z)(r,a,l,!1,null,"430718be",null),d=n.exports}}]);
//# sourceMappingURL=698-legacy.6eb61f6b.js.map