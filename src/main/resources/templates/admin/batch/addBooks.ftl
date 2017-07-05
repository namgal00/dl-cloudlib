<!DOCTYPE>
<html>

	<head>
		[#include "/admin/include/head.htm"]
		<script type="text/javascript">
			function submitForm(obj) {
				$obj = $(obj);
				WD.disabledBtn($obj); // 禁用按钮
				if(WD.check_null_add_notice($("#fileUpload"))) {
						$("#formId").submit();
				}
				WD.rmDisabledBtn($obj);
			}
			
			
		</script>
	</head>

	<body>
		<article class="main">
			<div class="title">
				<section>
					<a href="javascript:history.go(-1);"><b class=icon-arrow-left-thick></b>返回</a>
					<a href="javascript:history.go(1);">向前<b class=icon-arrow-right-thick></b></a>
				</section>
				<span>当前位置：</span>
				<a href="#">电子书管理</a>
				<a href="#" class="on">批次管理</a>
			</div>
			<div class="nav">批导入电子书</div>
			<div class="pubFormTable">
				<form action="${base }/admin/batch/addBooks" method="post" id="formId" enctype="multipart/form-data" >
					<input type="hidden" name="batchId" value="${batch.id}">
					<table cellpadding="0" cellspacing="0" border="0">

						<tr>
							<td>批次名称:</td>
							<td>${batch.name}</td>
						</tr>
					<tr>
							<td>电子书EXCEL:</td>
							<td>
								<input type="file" id="fileUpload" name="fileUpload" onfocus="cleanNotice(this)" /><span id="fileUpload_notice" class="field_notice">*</span>
							</td>
						</tr>
						<tr>
							<td>启用:</td>
							<td>
								<input type="radio" class="radioClass" name="enable" value="true" /> 是<br />
								<input type="radio" class="radioClass" name="enable" value="false" checked="checked" /> 否<br />
							</td>
						</tr>
						<tr>
							<td>上架:</td>
							<td>
								<input type="radio" class="radioClass" name="shelves" value="true" /> 是<br />
								<input type="radio" class="radioClass" name="shelves" value="false" checked="checked" /> 否<br />
							</td>
						</tr>
						<tr>
							<td>免费:</td>
							<td>
								<input type="radio" class="radioClass" name="enfree" value="true" /> 是<br />
								<input type="radio" class="radioClass" name="enfree" value="false" checked="checked" /> 否<br />
							</td>
						</tr>
						
						<tr>
							<td></td>
							<td>
								<button type="button" onclick="submitForm(this);">确 认</button>
								<button type="reset">重 置</button>
								<button type="button">返 回</button>
							</td>
						</tr>
					</table>
				</form>
			</div>
		</article>
	</body>

</html>