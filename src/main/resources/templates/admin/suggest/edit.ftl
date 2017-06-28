<!DOCTYPE>
<html>

	<head>
		[#include "/admin/include/head.htm"]
		<script type="text/javascript">
			function submitForm(obj,key) {
				$obj = $(obj);
				WD.disabledBtn($obj); // 禁用按钮
				if(key == 'deal'){
					$("#formId").attr("action",base+"/admin/suggest/deal");
				}else{
					$("#formId").attr("action",base+"/admin/suggest/ignore");
				}
				$("#formId").submit();

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
				<a href="#">读者反馈</a>
				<a href="#" class="on">意见反馈</a>
			</div>
			<div class="nav">反馈信息处理</div>
			<div class="pubFormTable">
				<form action="${base}/admin/suggest/edit" method="post" id="formId">
					<input type="hidden" name="id" value="${suggest.id}" />

					<table cellpadding="0" cellspacing="0" border="0">
						<tr>
							<td>姓名:</td>
							<td><input value="${suggest.name}" disabled="disabled" readonly="readonly" /></td>
						</tr>
						<tr>
							<td>电话:</td>
							<td><input value="${suggest.tel}" disabled="disabled" readonly="readonly" /></span>
							</td>
						</tr>
						<tr>
							<td>邮箱:</td>
							<td><input value="${suggest.email}" disabled="disabled" readonly="readonly" /></span>
							</td>
						</tr>
						<tr>
							<td>反馈内容:</td>
							<td><textarea disabled="disabled" readonly="readonly">${suggest.msg}</textarea></span>
							</td>
						</tr>

						<tr>
							<td></td>
							<td>
								<button type="button" onclick="submitForm(this,'deal');">回信处理</button>
								<button type="button" onclick="submitForm(this,'ignore');">忽略</button>
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