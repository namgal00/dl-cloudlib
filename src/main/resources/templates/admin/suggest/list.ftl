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
			<a href="#">读者反馈</a>
			<a href="#" class="on">意见反馈</a>
		</div>
		[#include "/admin/include/message.ftl"]
		<form action="${base}/admin/suggest/list" id="formId" method="POST">
			<div class="search">
				<span> 
					<label> 处理类型：
						<select name="search_EQ_type">
							<option>---全部---</option>
							<option value="untreated" [#if EQ_type=='untreated']selected="selected" [/#if]>未处理</option>
							<option value="processed" [#if EQ_type=='processed']selected="selected" [/#if]>已处理</option>	
						</select>
					</label>
				</span>
			<span>
				<button class="btn-yellow" type="submit">查询</button>
			</span>
			</div>

			<div class="nav">
				<ul>
					<li>
						<a href="javascript:editDate('${base}/admin/suggest/edit.jhtml');">查看</a>
					</li>

				</ul>
				<title>意见反馈列表</title>
			</div>
			<div class="pubTable">
				<table cellpadding="0" cellspacing="0" border="0">
					<!--按照百分比写th不同的宽度需自定义。某些可直接定义宽度的无需写百分比。在所有的th当中挑选一格不写宽度，以自适应。-->
					<tr>
						<th width="60">选择</th>
						<th>日期</th>
						<th>姓名</th>
						<th>联系方式</th>
						<th>邮箱</th>
						<th>反馈内容</th>
						<th>处理类型</th>

					</tr>
					<!--td中的div是为防止显示的字符超出表格高度而定，可在div中加title属性，方便鼠标放上去显示所有标题-->
					[#if (page.list)??] [#list page.list as data]
					<tr>

						<td><input type="checkbox" name="ids" value="${data.id }" form="form_ids" /></td>
						<td>
							<div title="${(data.createDate)?string('yyyy-MM-dd') }">${(data.createDate)?string('yyyy-MM-dd') }</div>
						</td>
						<td>
							<div title="${data.name }">${data.name }</div>
						</td>
						<td>
							<div title="${data.tel }">${data.tel }</div>
						</td>
						<td>
							<div title="${data.email }">${data.email }</div>
						</td>
						<td>
							<div title="${data.msg }">${data.msg }</div>
						</td>
						<td>
							<div title="${data.type.getName() }">${data.type.getName() }</div>
						</td>

					</tr>
					[/#list] [/#if]
				</table>
				[#include "/admin/include/page.ftl"]
			</div>
		</form>
		<form action="" id="form_ids" hidden="hidden" method="post"></form>
	</article>

</html>