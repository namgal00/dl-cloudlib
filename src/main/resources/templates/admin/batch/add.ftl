<!DOCTYPE>
<html>

	<head>
		[#include "/admin/include/head.htm"]
		<script type="text/javascript">
			function submitForm(obj) {
				$obj = $(obj);
				WD.disabledBtn($obj); // 禁用按钮
				if(WD.check_null_add_notice($("#name"))) {
					if(checkName($("#name"))){
						$("#formId").submit();
					}
				}
				WD.rmDisabledBtn($obj);
			}
			/**
			 * 验证名称是否重复
			 * @param {Object} obj
			 */
			function checkName(obj) {
				var judge = false;
				var $obj = $(obj);
				var name = $obj.val();

				$.ajax({
					type: "post",
					url: "${base}/admin/batch/checkName",
					data: {
						"name": name
					},
					dataType: "json",
					async:false,
					success: function(data) {
						if(data.messageType == "SUCCESS") {
							judge = true;
						} else {
							$("#name_notice").html("该批次名已经存在，请重新命名*");
						}
					}
				});
				
				return judge;

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
			<div class="nav">新建批次</div>
			<div class="pubFormTable">
				<form action="${base }/admin/batch/add" method="post" id="formId">
					<table cellpadding="0" cellspacing="0" border="0">

						<tr>
							<td>批次名称:</td>
							<td><input type="text" name="name" onfocus="cleanNotice(this)" onblur="checkName(this);" placeholder="请输入名称" id="name" /><span id="name_notice" class="field_notice">*</span></td>
						</tr>

						<tr>
							<td>描述:</td>
							<td><textarea name="descript" id="description"></textarea>
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