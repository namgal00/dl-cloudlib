<!DOCTYPE html>
<html>

	<head>
		[#include "/teacher/include/head.htm"]
		<script type="text/javascript">
			$(function(){
				showPath("当前位置：电子书管理→ 电子书→ 电子书列表");
			});
			/**
			 * 修改
			 * @param {Object} url
			 */
			function editDate(url) {
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
							<span><font>题名：</font> <input name="search_LIKE_title" type="text" value="${LIKE_title}"> </span> 
							<span><font>作者：</font> <input name="search_LIKE_author" type="text" value="${LIKE_author}"> </span> 
							<span><font>出版社：</font> <input name="search_LIKE_press" type="text" value="${LIKE_press}"> </span> 
							<span class="search_button">
								<input  type="submit" value="查询" class="btn_orange">
							</span>
						</div>
					</div>
					<div class="list_table_title">
						<h3>电子书列表</h3>
						<ul>
							<li><span class="btn_left"></span>
								<a href="${base}/teacher/batch/addBatch">新增</a><span class="btn_right"></span></li>
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
									<th width="8%">详情</th>
								</tr>
							</thead>
							<tbody>
								[#if (page.list)??] [#list page.list as data]

								<tr class="odd">
									<td><input type="checkbox" name="ids" value="${data.id }"  class="input_none" /></td>
									<td>${data.name }</td>
									<td>${data.budget }</td>
									<td>${data.contact }</td>
									<td>${data.contactWay }</td>
									<td>${(data.createDate)?string('yyyy-MM-dd') }</td>
									<td>${data.status.getName() }</td>
									<td>
										<a href="${base }/teacher/batch/orderBookList">查看</a>
									</td>
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