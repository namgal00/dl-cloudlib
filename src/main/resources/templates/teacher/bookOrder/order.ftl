<!DOCTYPE html>

<html>

	<head>
		<title>书目预订</title>

		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<!-- css -->
		<link rel="shortcut icon" href="${base }/teacher/images/favicon.ico" />

		<link rel="icon" href="${base }/teacher/images/favicon.ico" type="image/x-icon" />
		<link href="${base }/teacher/css/css.css" rel="stylesheet" type="text/css" />
		<link href="${base }/teacher/css/frame.css" rel="stylesheet" type="text/css" />
		<link href="${base }/teacher/css/smartMenu.css" rel="stylesheet" type="text/css" />
		<!-- js -->
		<script src="${base }/teacher/js/jquery-1.8.2.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="${base }/teacher/js/jquery.textSearch-1.0.js">
		</script>
		<script src="${base }/teacher/js/jquery-smartMenu.js" type="text/javascript"></script>
		<script src="${base }/teacher/js/ZeroClipboard.js" type="text/javascript"></script>
		<script src="${base }/teacher/js/common_list.js" type="text/javascript"></script>
		<script src="${base }/teacher/js/WdatePicker.js" type="text/javascript"></script>
		<script type="text/javascript">
			var base = "";

			function closeHelp() {
				$("#fullbg1,#dialog1").hide();
			}
		</script>

		<script type="text/javascript">
			function order(uri) {
				var reg = /^[1-9]\d*$/;
				var orderNo = $("#orderNo").val();
				var copies = $("#copies").val();
				if(orderNo == '') {
					alert("订购号不能为空");
					return;
				}
				if(!reg.test(copies)) {
					alert("复本数必须为大于0的整数");
					return;
				}
				$("#formId").attr("action", uri);
				$("#formId").submit();
			}

			function remove(uri) {
				var id = '';
				if(confirm("删除后无法恢复，确认删除?")) {
					location.href = uri.replace("#id#", id);
				}
			}

			function cancelOrder(uri) {
				var id = '';
				if(confirm("确认退订?")) {
					location.href = uri.replace("#id#", id);
				}
			}

			function calculatePrice() {
				var price = $("#price").val();
				var sourceType = $("#sourceType").val();
				var targetType = $("#targetType").val();
				$.post('/bookOrder/rate', { 'price': price, 'sourceType': sourceType, 'targetType': targetType }, function(data) {
					if(data != null && data != '') {
						$("#catalogPrice").val(data);
					}
				}, 'json');
			}
		</script>

		<style>
			body {
				border-left: 1px solid #E7EBEF;
			}
			
			.path_module {
				color: #222;
			}
			
			.path_right a {
				font-weight: 600;
				color: #222;
			}
			
			.main {
				border: 0px solid #F7F3F7;
			}
			
			.main input[type="text"] {
				background: #FFFFFF;
			}
			
			.search .search_button .btn_orange {
				width: 100px;
				height: 24px;
				color: #fff;
				letter-spacing: 1px;
				background: #00A2DE;
				border: 0px solid #F7F3F7;
			}
			
			.search .search_button .btn_orange:hover {
				width: 100px;
				height: 24px;
				color: #fff;
				letter-spacing: 1px;
				background: #6AD0F6;
				border: 0px solid #F7F3F7;
			}
		</style>

	</head>

	<body>
		<form action="" method="post" id="formId">
			<input type="hidden" name="id" value="">
			<input type="hidden" name="biblioTemp.id" value="801469">
			<input type="hidden" name="bookSeller.id" value="161">
			<input type="hidden" name="budget.id" value="141">
			<input type="hidden" name="batch.id" value="302">
			<div class="main">
				<div class="path">
					<div class="path_left"></div>
					<div class="path_module">当前位置：采编管理 → 图书预订管理 → 图书预订处理 → 书目预订</div>
					<div></div>
					<div class="path_right">
						<a href="javascript:history.go(1);" class="btn_next">向前</a>
						<a href="javascript:history.go(-1);" class="btn_back">返回</a>
					</div>
				</div>

				<link rel="stylesheet" href="${base }/teacher/css/dialog.css" type="text/css" />
				<script type="text/javascript">
					$(function() {

						$("#fullbg1,#dialog1").hide();
						var isFree = "";
						var isManadate = "false";
						if(isFree != "true" && isManadate == "true") {
							//不是免费  而且超期
							/**学校激活码过期的弹出框**/
							openHelp();
						}

						$("#close").click(function() {
							hideMessage();
						});
						if('' != "") {
							$("#divmsg").removeClass();
							$("#divmsg").addClass("tip tRight");
							$("#pMsg")
								.text(
									'1');
							setTimeout('hideMessage()', 5000);
						} else if('' != "") {
							$("#divmsg").removeClass();
							$("#divmsg").addClass("tip");
							$("#pMsg")
								.text(
									'2');
						} else if('' != "") {
							$("#divmsg").removeClass();
							$("#divmsg").addClass("tip tError");
							$("#pMsg")
								.text(
									'3');
						} else {
							$("#divmsg").hide();
						}
					});

					function openHelp() {
						var bh = $("html").height();
						var bw = $("html").width();
						$("#fullbg1").css({
							height: bh,
							width: bw,
							display: "block"
						});
						$("#dialog1").show();
					}

					function hideMessage() {
						$(".tip .close").parents(".tip").animate({
							opacity: 'hide'
						}, "slow");
					}

					function showMsg(msg, msgType) {
						if(msgType == "warn") {
							$("#divmsg").removeClass();
							$("#divmsg").addClass("tip");
						} else if(msgType == "success") {
							$("#divmsg").removeClass();
							$("#divmsg").addClass("tip tRight");
							setTimeout('hideMessage()', 5000);
						} else {
							$("#divmsg").removeClass();
							$("#divmsg").addClass("tip tError");
						}
						$("#pMsg").text(msg);
						$("#divmsg").show();
					}
				</script>

				<div id="divmsg">
					<div class="tipBox">
						<div class="ico"></div>
						<p id="pMsg"></p>
						<div class="close" id="close"></div>
						<div class="clear"></div>
					</div>
				</div>

				<div id="fullbg1"></div>
				<div id="dialog1">

					<p class="close1" onclick="closeHelp();" style="margin-top: 340px;">关闭</p>
				</div>
				<div class="main_content">
					<div class="row_half edit">
						<div class="row_half_left2">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td colspan="2" align="left" valign="middle" height="20" class="list_table_bg_hover"><input name="" class="input_btn" type="button" value="编目" onclick="location.href='/bookOrder/findOneBiblio/801469'" /></td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>ISBN：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">978-7-5436-3623-1</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>分类号：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">I16</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>价格：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">CNY19.80</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>语种：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">chi</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>标题：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">有一种情感永不泯灭</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>著者：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">张志忠主编</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>版次：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">1</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>出版地：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">青岛</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>出版社：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">青岛出版社</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>出版日期：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">2006</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>页码：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">212页</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>尺寸：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">23cm</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>主题：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">散文,世界,选集</td>
								</tr>

								<tr>
									<th style="text-align:right;width:130px;" valign="middle"><strong>摘要：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
									<td align="left" valign="middle">本书包括“梦里花落知多少”、“母亲是船也是岸”、“永远的二月兰”、“七美元的梦”、“最后一片藤叶”等五大部分，收录了世界部分著名散文作品。</td>
								</tr>

							</table>
						</div>
						<div class="row_half_right2">
							<h3>当前预定批次：【<span style="color:red">20170407</span>】</h3>
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<th align="right">单价：</th>
									<td align="left"><input name="curprice" type="text" value="19.8" /></td>
									<th width="15%" align="right" class="td_gray">订购批次：</th>
									<td width="35%" align="left">20170407&nbsp;</td>
								</tr>

								<tr>
									<th width="15%" align="right">复本数：</th>
									<td width="35%" align="left"><input name="copies" type="text" id="copies" /></td>
									<th width="15%" align="right" class="td_gray">书商名称：</th>
									<td width="35%" align="left">清华大学出版社&nbsp;</td>
								</tr>

								<tr>
									<th align="right">货币类型：</th>
									<td align="left">
										<select name="currency" id="sourceType">

											<option value="CNY">CNY</option>

											<option value="HKD">HKD</option>

											<option value="USD">USD</option>

										</select>
									</td>
									<th align="right" class="td_gray">资金预算：</th>
									<td align="left">2016516&nbsp;</td>
								</tr>

								<tr>
									<th align="right">备注：</th>
									<td colspan="3" align="left"><textarea name="remark" id="textarea" cols="50" rows="3"></textarea></td>
								</tr>

								<tr>
									<td class="td_graybg" colspan="4"><input name="" class="input_btn" type="button" value="保存" onclick="order('/bookOrder/order')" />
										<input name="" class="input_btn" type="button" value="重置" onclick="formReset()" /> <input name="" class="input_btn" type="button" value="返回" onclick="doReturn('/bookOrder/listSellerBiblio/301')" /></td>
								</tr>

							</table>
						</div>
					</div>

				</div>
			</div>
		</form>
	</body>

</html>