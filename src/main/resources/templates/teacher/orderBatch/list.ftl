<!DOCTYPE html>
<html>

	<head>
		[#include "/teacher/include/head.htm"]
		<script type="text/javascript">
			$(function(){
				showPath("当前位置：电子书管理→ 批次管理→ 批次列表");
			});
			/**
			 * 修改
			 * @param {Object} url
			 */
			function editDate(url) {
				editDataByCheckId(url);
			}
			 
			/*
			 * 修改为当前工作批次状态
			 */
			 function isWorkBatchDate(url){
				 editDataByCheckId(url);
			}
			 
		</script>
	</head>

	<body>
		<form action="${base}/teacher/batch/bookOrderBatch" method="post" id="formId">
			<div class="main">
				[#include "/teacher/include/path.ftl"]
				<div class="main_content">
					<div class="search">
						<div class="search_condition">
							<span><font>批次名称：</font> <input name="search_EQ_name" type="text" value="${EQ_name}"> </span> <span class="search_button">
							<input  type="submit" value="查询" class="btn_orange">
						</span>
						</div>
					</div>
					<div class="list_table_title">
						<h3>预订批次列表</h3>
						<ul>
							<li><span class="btn_left"></span>
								<a href="${base}/teacher/batch/addBatch">新增</a><span class="btn_right"></span></li>
							<li><span class="btn_left"></span>
								<a href="javascript:editDate('${base}/teacher/batch/editBatch');">修改</a><span class="btn_right"></span></li>
							<li><span class="btn_left"></span>
								<a href="javascript:isWorkBatchDate('${base}/teacher/batch/isWorkBatch');">设为当前批次</a><span class="btn_right"></span></li>
						</ul>
					</div>
					<div class="list" id="list1">
						<table id="myTable01" class="list_table" width="100%" border="0" cellspacing="0" cellpadding="0">
							<thead>
								<tr class="odd even">
									<th width="4%">选择</th>
									<th>批次名称</th>
									<th>预算</th>
									<th>联系人</th>
									<th width="10%">联系方式</th>
									<th width="16%">创建日期</th>
									<th width="8%">状态</th>
								</tr>
							</thead>
							<tbody>
								[#if (page.list)??] [#list page.list as data]

								<tr class="odd">
									<td><input type="checkbox" name="ids" value="${data.id }"  class="input_none" form="form_ids"/></td>
									<td >[#if (data.isWorkBatch.getName()=="2")] 
									          	<span style="color: red;">${data.name}</span> 
									     [#else]
									          ${data.name }
									     [/#if]
									</td>
									<td>${data.budget }</td>
									<td>${data.contact }</td>
									<td>${data.contactWay }</td>
									<td>${(data.createDate)?string('yyyy-MM-dd') }</td>
									<td>${data.status.getName() }</td>
								</tr>

								[/#list][/#if]

							</tbody>
						</table>
					</div>

					[#include "/teacher/include/page.ftl"]
				</div>
			</div>
		</form>
		<form action="" id="form_ids" hidden="hidden" method="post"></form>
	</body>

</html>