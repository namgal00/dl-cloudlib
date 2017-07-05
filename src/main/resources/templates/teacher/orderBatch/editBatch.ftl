<!DOCTYPE html >
<html>

	<head>
		[#include "/teacher/include/head.htm"]
		<script type="text/javascript">
			$(function() {
				showPath("当前位置：电子书管理→ 批次管理→ 修改批次");
			});

			function judgeSubmit() {
				var name = $("#name").val();
				if(name == '') {
					$("#nameInfo").text("批次名称不能为空*");
					return;
				}else if(!checkName($("#name"))){
					return;
				}
				okOnBlur('nameInfo');
				
				
				var budget = $("#budget").val();
				if(budget == 0) {
					$("#budgetInfo").text("预算不能为空*");
					return;
				}else{
					var reg=/(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
					if(!reg.test(budget)){
						$("#budgetInfo").text("请输入正确的价格*");
						return;
					}
				}
				okOnBlur('budgetInfo');
				
				
				var contact = $("#contact").val();
				if(contact == 0) {
					$("#contactInfo").text("联系人不能为空*");
					return;
				}
				okOnBlur('contactInfo');
				
				var contact = $("#contactWay").val();
				if(contact == 0) {
					$("#contactWayInfo").text("联系方式不能为空*");
					return;
				}
				okOnBlur('contactWayInfo');
				
				$("#formId").submit();
			}

			function textOnBlur() {
				
				var budget = $("#budget").val();
				if(budget == 0) {
					$("#budgetInfo").text("预算不能为空*");
					return;
				}else{
					var reg= /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
					if(!reg.test(budget)){
						$("#budgetInfo").text("请输入正确的价格*");
						return;
					}
				}
				okOnBlur('budgetInfo');
				
				
				var contact = $("#contact").val();
				if(contact == 0) {
					$("#contactInfo").text("联系人不能为空*");
					return;
				}
				okOnBlur('contactInfo');
				
				
				var contact = $("#contactWay").val();
				if(contact == 0) {
					$("#contactWayInfo").text("联系方式不能为空*");
					return;
				}
				okOnBlur('contactWayInfo');
				
			}
			/*
			 * 检查批次名是否唯一
			 */
			 
			 function checkName(obj){
				 	var judge = false;
					var $obj = $(obj);
					var name = $obj.val();
					
					if(name == '') {
						$("#nameInfo").text("批次名称不能为空*");
						return;
					}else{
						$.ajax({
							type: "post",
							url:"${base}/teacher/batch/checkName",
							data:{"name":name},
							dataType:"json",
							async:false,
							success:function(data){
								if(data.messageType == "SUCCESS") {
									judge = true;
									okOnBlur('nameInfo');
								} else {
									$("#nameInfo").html("该批次名已经存在，请重新命名*");
								}
							}
						});
						return judge;
					}	
			}
			
		</script>
	</head>

	<body>

		<form action="${base}/teacher/batch/editBatch" method="post" id="formId">
			<input type="hidden" name="id" value="${bookBatch.id }"/>
			<input type="hidden" name="schoolId" value="${bookBatch.schoolId }"/>
			<input type="hidden" name="status" value="${bookBatch.status }"/>
			<div class="main">
				[#include "/teacher/include/path.ftl"]
				<div class="main_content">
					<div class="row_half edit">
						<div class="row_half_right">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tbody>
									<tr>
										<th align="right" width="150">批次名称：</th>
										<td align="left"><input name="name" type="text" value="${bookBatch.name }" id="name" onblur="checkName(this)"><span style="color: red" id="nameInfo">*</span></td>
									</tr>

									<tr>
										<th align="right" width="150">预算金额：</th>
										<td align="left"><input name="budget" type="text" value="${bookBatch.budget }" id="budget" onblur="textOnBlur()"><span style="color: red" id="budgetInfo">*</span></td>
									</tr>

									<tr>
										<th align="right" width="150">联系人：</th>
										<td align="left"><input name="contact" type="text" value="${bookBatch.contact }" id="contact" onblur="textOnBlur()"><span style="color: red" id="contactInfo">*</span></td>
									</tr>

									<tr>
										<th align="right" width="150">联系方式：</th>
										<td align="left"><input name="contactWay" type="text" value="${bookBatch.contactWay }" id="contactWay" onblur="textOnBlur()"><span style="color: red" id="contactWayInfo">*</span></td>
									</tr>

									<tr>
										<th align="right">备注：</th>
										<td colspan="3" align="left"><textarea name="message"  id="textarea" cols="50" rows="3">${bookBatch.message }</textarea></td>
									</tr>

									<tr>
										<th align="right">&nbsp;</th>
										<td><input name="" class="input_btn" type="button" value="保存" onclick="judgeSubmit()"> 
										<input name="" class="input_btn" type="reset" value="重置" > 
										<input name="" class="input_btn" type="button" value="返回" onclick="javascript:history.go(-1);"></td>
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