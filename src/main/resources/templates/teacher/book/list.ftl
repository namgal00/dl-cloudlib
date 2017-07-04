<!DOCTYPE html>
<html>

	<head>
		[#include "/teacher/include/head.htm"]
		<script type="text/javascript">
			$(function() {
				showPath("当前位置：电子书管理→ 电子书→ 电子书列表");
				showBg();
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
		<form action="${base}/teacher/book/list" method="post" id="formId">
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
						<span style="color:red;">当前预定批次:${(bookBatch.name)!''}<span>
						<ul>
							<li><span class="btn_left"></span>
								<a href="${base}/teacher/batch/addBatch">新增</a><span class="btn_right"></span></li>
						</ul>
					</div>
					<div class="list" id="list1">
						<table id="myTable01" class="list_table" width="100%" border="0" cellspacing="0" cellpadding="0">
							<thead>
								<tr class="odd even">
									<th width="60">选择</th>
									<th>ISBN</th>
									<th>题名</th>
									<th>作者</th>
									<th>出版社</th>
									<th>出版时间</th>
									<th>分类号</th>
									<th>启用</th>
									<th>上架</th>
									<th>免费</th>
									<th>价格</th>
								</tr>
							</thead>
							<tbody>
								[#if (page.list)??] [#list page.list as data]

								<tr class="odd">
									<td><input type="checkbox" name="ids" value="${data.id }" form="form_ids" class="input_none" /></td>
									<td>
										<div title="${data.isbn }">${data.isbn }${data.enfree}</div>
									</td>
									<td>
										<div title="${data.title }">${data.title }</div>
									</td>
									<td>
										<div title="${data.author }">${data.author }</div>
									</td>
									<td>
										<div title="${data.press }">${data.press }</div>
									</td>
									<td>
										<div title="${data.publicationDate }">${data.publicationDate }</div>
									</td>
									<td>
										<div title="${data.classification }">${data.classification }</div>
									</td>
									<td>
										<div title="${data.enable?string(" 是 ","否 ")  }">${data.enable?string("是","否") }</div>
									</td>
									<td>
										<div title="${data.shelves?string(" 是 ","否 ")  }">${data.shelves?string("是","否") }</div>
									</td>
									<td>
										<div title="${data.free?string(" 是 ","否 ") }">${data.free?string("是","否") }</div>
									</td>
									<td>
										<div title="${data.price }">${data.price }</div>
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
</div>
</html>