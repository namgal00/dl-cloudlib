<!DOCTYPE html >
<html>

	<head>
		[#include "/teacher/include/head.htm"]
		<script type="text/javascript">
			$(function() {
				showPath("当前位置：电子书管理→ 批次管理→ 新增批次");
			});

			function judgeSubmit() {
				var name = $("#name").val();
				if(name == '') {
					$("#nameInfo").text("批次名称不能为空*");
					return;
				}
				okOnBlur('nameInfo');

				var bookSellerId = $("#bookSellerId").val();
				if(bookSellerId == 0) {
					$("#sellerInfo").text("请选择书商名称*");
					return;
				}
				okOnBlur('sellerInfo');
				var budgetId = $("#budgetId").val();
				if(budgetId == 0) {
					$("#budgetInfo").text("请选择预算名称*");
					return;
				}
				okOnBlur('budgetInfo');
				$("#formId").submit();
			}

			function textOnBlur() {
				var name = $("#name").val();
				if(name == '') {
					$("#nameInfo").text("批次名称不能为空*");
					return;
				}
				okOnBlur('nameInfo');

				var bookSellerId = $("#bookSellerId").val();
				if(bookSellerId == 0) {
					$("#sellerInfo").text("请选择书商名称*");
					return;
				}
				okOnBlur('sellerInfo');
				var budgetId = $("#budgetId").val();
				if(budgetId == 0) {
					$("#budgetInfo").text("请选择预算名称*");
					return;
				}
				okOnBlur('budgetInfo');
			}
		</script>
	</head>

	<body>

		<form action="${base}/bookOrderBatch/add" method="post" id="formId">
			<div class="main">
				[#include "/teacher/include/path.ftl"]
				<div class="main_content">
					<div class="row_half edit">
						<div class="row_half_right">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tbody>
									<tr>
										<th align="right" width="150">批次名称：</th>
										<td align="left"><input name="name" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
									</tr>

									<tr>
										<th align="right" width="150">预算金额：</th>
										<td align="left"><input name="budget" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
									</tr>

									<tr>
										<th align="right" width="150">联系人：</th>
										<td align="left"><input name="contact" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
									</tr>

									<tr>
										<th align="right" width="150">联系方式：</th>
										<td align="left"><input name="contactWay" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
									</tr>

									<tr>
										<th align="right">备注：</th>
										<td colspan="3" align="left"><textarea name="message" id="textarea" cols="50" rows="3"></textarea></td>
									</tr>

									<tr>
										<th align="right">&nbsp;</th>
										<td><input name="" class="input_btn" type="button" value="保存" onclick="judgeSubmit()"> <input name="" class="input_btn" type="button" value="重置" onclick="formReset()"> <input name="" class="input_btn" type="button" value="返回" onclick="doReturn(&#39;/bookOrderBatch/list&#39;)"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</form>
	</body>

</html>