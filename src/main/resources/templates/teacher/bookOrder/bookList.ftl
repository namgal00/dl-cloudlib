<!DOCTYPE html>
<html>
	<head>

		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<!-- css -->
		<link rel="shortcut icon" href="${base}/teacher/images/favicon.ico" />

		<link rel="icon" href="${base}/teacher/images/favicon.ico" type="image/x-icon" />
		<link href="${base}/teacher/css/css.css" rel="stylesheet" type="text/css" />
		<link href="${base}/teacher/css/frame.css" rel="stylesheet" type="text/css" />
		<link href="${base}/teacher/css/smartMenu.css" rel="stylesheet" type="text/css" />
		<!-- js -->
		<script src="${base}/teacher/js/jquery-1.8.2.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="${base }/teacher/js/jquery.textSearch-1.0.js">
		</script>
		<script src="${base}/teacher/js/marc/jquery-smartMenu.js" type="text/javascript"></script>
		<script src="${base}/teacher/js/marc/ZeroClipboard.js" type="text/javascript"></script>
		<script src="${base}/teacher/js/common_list.js" type="text/javascript"></script>
		<script src="${base}/teacher/js/calendar/WdatePicker.js" type="text/javascript"></script>
		<script type="text/javascript">
			function closeHelp() {
				$("#fullbg1,#dialog1").hide();
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
		<title>书目列表</title>
	</head>

	<body>
		<form action="${base}/cloudlib/biblioTemp/list" method="post" id="formId">
			<input type="hidden" name="urlMark" value="1">

			<input type="hidden" id="pageNumber" name="pageNumber" value="1" />

			<input type="hidden" id="properties" name="properties" value="id" />
			<input type="hidden" id="direction" name="direction" value="DESC" />

			<input type="hidden" id="pageSize" name="pageSize" value="10" />
			<div class="main">
				<div class="path">
					<div class="path_left"></div>
					<div class="path_module">当前位置：采编管理→ 编目管理→ 书目维护</div>
					<div class="path_right">
						<a href="javascript:history.go(1);" class="btn_next">向前</a>
						<a href="javascript:history.go(-1);" class="btn_back">返回</a>
					</div>
				</div>
				<div class="main_content">

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

						function orderNumber() {
							var number = prompt("请输入您要订购的数量：", "1");
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
					<div class="search">
						<div class="search_condition">
							<span><font>ISBN：</font> <input name="isbn" type="text" id="isbn"
							value="" onfocus="onFocusSubmit('isbn','/cloudlib/biblioTemp/query')"/></span> <span><font>题名：</font>
							<input name="title" type="text"
							value="" /></span> <span><font>著者：</font>
							<input name="author" type="text"
							value="" /></span> <span><font>分类号：</font>
							<input name="classNo" type="text"
							value="" /></span> <span><font>出版社：</font>
							<input name="publisher" type="text"
							value="" /></span> <span class="search_button" onclick="doFormSubmit('formId','/cloudlib/biblioTemp/query')">
							<input name="" type="button" value="查询" class="btn_orange" />
						</span> <span class="search_button" onclick="doFormSubmit('formId','/cloudlib/z3950DownLoad/z3950Query')">
							<input name="" type="button" value="Z3950查询" class="btn_orange" />
						</span>
						</div>
					</div>
					<div class="list_table_title">
						<h3>书目列表</h3>
						<ul>

							<li><span class="btn_left"></span>
								<a href="javascript:remove('/cloudlib/biblioTemp/delete/#id#')" class="btn btn_delete">批量订购</a><span class="btn_right"></span></li>
							<li>
								<font></font>
							</li>
						</ul>
					</div>
					<div class="list" id="list1">
						<table id="myTable01" class="list_table" width="100%" border="0" cellspacing="0" cellpadding="0">
							<thead>
								<tr>
									<th width="3%">选择</th>
									<th width="10%">ISBN</th>
									<th width="8%">分类号</th>
									<th>题名</th>
									<th width="10%">著者</th>
									<th width="10%">出版社</th>
									<th width="7%">出版地</th>
									<th width="7%">出版日期</th>
									<th width="7%">价格</th>
									<th width="7%">页数</th>
									<th width="7%">订购</th>
									<th width="7%">详情</th>
								</tr>
							</thead>
							<tbody>

								<input name="ids" type="hidden" value="10048589" />
								<tr>
									<td align="right"><input name="checks" type="checkbox" class="input_none" id="checks" value="10048589" /></td>
									<td>1817-3586&nbsp;</td>
									<td>I247&nbsp;</td>
									<td>小说贩(2005.12)&nbsp;</td>
									<td>本社编&nbsp;</td>
									<td>远方出版社&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>9.8&nbsp;</td>
									<td>259&nbsp;</td>
									<td><input type="button" id="order" onclick="orderNumber();" value="订购" /></td>
									<td>
										<a href="${base }/teacher/bookOrder/order">查看</a>
									</td>
								</tr>

								<input name="ids" type="hidden" value="10048588" />
								<tr>
									<td align="right"><input name="checks" type="checkbox" class="input_none" id="checks" value="10048588" /></td>
									<td>7-204-05545-4&nbsp;</td>
									<td>I247&nbsp;</td>
									<td>官运亨通&nbsp;</td>
									<td>程凌征著&nbsp;</td>
									<td>内蒙古人民出版社&nbsp;</td>
									<td>呼和浩特&nbsp;</td>
									<td>&nbsp;</td>
									<td>29.0&nbsp;</td>
									<td>339&nbsp;</td>
									<td><input type="button" id="order" value="订购" /></td>
									<td>
										<a>查看</a>
									</td>
								</tr>

								<input name="ids" type="hidden" value="10048587" />
								<tr>
									<td align="right"><input name="checks" type="checkbox" class="input_none" id="checks" value="10048587" /></td>
									<td>7-5317-1875-8&nbsp;</td>
									<td>I247&nbsp;</td>
									<td>歌哭&nbsp;</td>
									<td>漆漆著&nbsp;</td>
									<td>北方文艺出版社&nbsp;</td>
									<td>哈尔滨&nbsp;</td>
									<td>&nbsp;</td>
									<td>22.0&nbsp;</td>
									<td>220&nbsp;</td>
									<td><input type="button" id="order" value="订购" /></td>
									<td>
										<a>查看</a>
									</td>
								</tr>

								<input name="ids" type="hidden" value="10048586" />
								<tr>
									<td align="right"><input name="checks" type="checkbox" class="input_none" id="checks" value="10048586" /></td>
									<td>7-204-05545-4&nbsp;</td>
									<td>I247&nbsp;</td>
									<td>位高权重&nbsp;</td>
									<td>程凌征著&nbsp;</td>
									<td>内蒙古人民出版社&nbsp;</td>
									<td>呼和浩特&nbsp;</td>
									<td>&nbsp;</td>
									<td>29.0&nbsp;</td>
									<td>339&nbsp;</td>
									<td><input type="button" id="order" value="订购" /></td>
									<td>
										<a>查看</a>
									</td>
								</tr>

								<input name="ids" type="hidden" value="10048585" />
								<tr>
									<td align="right"><input name="checks" type="checkbox" class="input_none" id="checks" value="10048585" /></td>
									<td>7-5012-2921-X&nbsp;</td>
									<td>K825&nbsp;</td>
									<td>搜索张朝阳&nbsp;</td>
									<td>天宇著&nbsp;</td>
									<td>世界知识出版社&nbsp;</td>
									<td>北京&nbsp;</td>
									<td>&nbsp;</td>
									<td>29.8&nbsp;</td>
									<td>255&nbsp;</td>
									<td><input type="button" id="order" value="订购" /></td>
									<td>
										<a>查看</a>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

					<!-- javascript:checkIds() -->
					<div class="pager">
						<span style="margin-left: 10px; float: left;margin-top: 5px; "><input class="input_none" type="checkbox" onclick="javascript:checkIds();"/> </span ><span style="float: left;">全选/反选</span> <span>第1/1页
		共5条</span>

						<span class="page_gray">首页</span>

						<span class="page_gray">上一页</span>

						<span class="page_gray">下一页</span>

						<span class="page_gray">未页</span>

						<span>转至 <input id="forward" class="input_in" type="text" /> <input
		type="button" class="input_btn" value="GO" id="pageNum"
		onclick="forwardPage('1')" />
	</span>
					</div>
				</div>
			</div>
		</form>
	</body>

</html>