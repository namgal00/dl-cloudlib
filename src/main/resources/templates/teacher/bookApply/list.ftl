<!DOCTYPE>
<html>

	<head>
		[#include "/admin/include/head.htm"]
		<link rel="stylesheet" href="${base}/default/css/head.css" />
		<script type="text/javascript">
			/**
			 * 修改
			 * @param {Object} url
			 */
			function editDate(url) {
				editDataByCheckId(url);
			}
			/**
			 *删除
			 */
			function deleteDate(url) {
				deleteDataByCheckId(base + url);
			}
		</script>
	</head>

	<article class="main">
		<div class="title">
			<section>
				<a href="javascript:history.go(-1);"><b class=icon-arrow-left-thick></b>返回</a>
				<a href="javascript:history.go(1);">向前<b class=icon-arrow-right-thick></b></a>
			</section>
			<span>当前位置：</span>
			<a href="#">电子书管理</a>
			<a href="#" class="on">电子书交易</a>
		</div>
		[#include "/admin/include/message.ftl"]
		<form action="${base}/admin/apply/list" id="formId" method="POST">
			<div class="search">
				<span> 
				<label> 批次名：
					<select name="search_EQ_batchId">
						<option>---全部---</option>
						[#list batchs as batch]
							[#if EQ_batchId == batch.id]
								<option value="${batch.id}" selected="selected">${batch.name}</option>
							[#else]
								<option value="${batch.id}">${batch.name}</option>
							[/#if]
						[/#list]
					</select>
				</label>
			</span>
				<span>
				<label> ISBN：<input type="text"
					placeholder="ISBN" name="search_LIKE_isbn"
					value="${(LIKE_isbn)!''}" class="length-one" />
				</label>
			</span>
				<span>
				<label> 题名：<input type="text"
					placeholder="题名" name="search_LIKE_title"
					value="${(LIKE_title)!''}" class="length-one" />
				</label>
			</span>
				<span>
				<label> 作者：<input type="text"
					placeholder="作者" name="search_LIKE_author"
					value="${(LIKE_author)!''}" class="length-one" />
				</label>
			</span>
				<span>
				<button class="btn-yellow" type="submit">查询</button>
			</span>
			</div>

			<div class="nav">
				<ul>
					<li>
						<a href="${base }/admin/book/add.jhtml">新增</a>
					</li>
					<li>
						<a href="javascript:editDate('${base}/admin/book/edit.jhtml');">修改</a>
					</li>
				</ul>
				<title>申请列表</title>
			</div>
			<div class="pubTable">
				<table cellpadding="0" cellspacing="0" border="0">
					<!--按照百分比写th不同的宽度需自定义。某些可直接定义宽度的无需写百分比。在所有的th当中挑选一格不写宽度，以自适应。-->
					<tr>
						<th width="60">选择</th>
						<th>书名</th>
						<th>学校名</th>
						<th>状态</th>
						

					</tr>
					<!--td中的div是为防止显示的字符超出表格高度而定，可在div中加title属性，方便鼠标放上去显示所有标题-->
					 [#list applyRecord as data]
					<tr>

						<td><input type="checkbox" name="ids" value="${data.id }" form="form_ids" /></td>
						<td>
							<div title="${data.bookName }">${data.bookName }</div>
						</td>
						<td>
							<div title="${data.schoolName }">${data.schoolName }</div>
						</td>
						<td>
							<div title="${data.applyStatus }">${data.applyStatus }</div>
						</td>
						
						
					</tr>
					[/#list] 
				</table>
				[#include "/admin/include/page.ftl"]
			</div>
		</form>
		<form action="" id="form_ids" hidden="hidden" method="post"></form>
	</article>

</html>