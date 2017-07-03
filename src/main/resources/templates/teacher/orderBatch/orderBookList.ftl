<!DOCTYPE html>

<html>

	<head>
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
		<link rel="stylesheet" href="${base }/teacher/css/dialog.css" type="text/css" />
		<script type="text/javascript">
			var base = "";

			function closeHelp() {
				$("#fullbg1,#dialog1").hide();
			}
		</script>
		<title>征订目录预订列表</title>
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
		<form action="${base}/teacher/bookOrder/listSellerBiblio" method="post" id="formId">

			<div class="main">
				<div class="path">
					<div class="path_left"></div>
					<div class="path_module">当前位置：电子书管理→ 批次管理→ 批次列表</div>
					<div class="path_right">
						<a href="javascript:history.go(1);" class="btn_next">向前</a>
						<a href="javascript:history.go(-1);" class="btn_back">返回</a>
					</div>
				</div>
				<div class="main_content">

					<script type="text/javascript">
						<script>
						$(function() {
							$(".add").click(function() {
								var t = $(this).parent().find('input[class*=text_box]');
								if(t.val() == "" || undefined || null || 0) {
									t.val(1);
								}
								t.val(parseInt(t.val()) + 1)
								setTotal();
							})
							$(".min").click(function() {
								var t = $(this).parent().find('input[class*=text_box]');
								if(t.val() == "" || undefined || null || 0) {
									t.val(1);
								}
								t.val(parseInt(t.val()) - 1)
								if(parseInt(t.val()) < 1) {
									t.val(1);
								}
								setTotal();
							})
							$(".text_box").keyup(function() {
								var t = $(this).parent().find('input[class*=text_box]');
								var reg = "/[1-9]|[1-9][\d]*/";
								if(!reg.test(t)) {
									t.val(1);
								}
								/*
								if(parseInt(t.val())==""||undefined||null || isNaN(t.val())||0) {  
								    t.val(1);  
								}  */
								setTotal();
							})

							function setTotal() {
								var s = 0;
								$("#tab td").each(function() {
									var t = $(this).find('input[class*=text_box]').val();
									var p = $(this).find('span[class*=price]').text();
									if(parseInt(t) == "" || undefined || null || isNaN(t) || isNaN(parseInt(t))) {
										t = 0;
									}
									s += parseInt(t) * parseFloat(p);
								});
								$("#total").html(s.toFixed(2));
							}
							setTotal();
						})
					</script>
					<style>
						div[type=number] {
							-moz-appearance: textfield;
							/* Firefox */
							-webkit-appearance: textfield;
							/* Safari and Chrome */
						}
						
						input[type=number]::-webkit-inner-spin-button,
						input[type=number]::-webkit-outer-spin-button {
							-webkit-appearance: none;
							margin: 0;
						}
					</style>

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
							<input type="hidden" name="batchId" value="301"> <span><font>ISBN：</font>
							<input name="isbn" type="text"
							value="" id="isbn" onfocus="onFocusSubmit('isbn','/bookOrder/querySellerBiblio')"/></span> <span><font>题名：</font>
							<input name="title" type="text"
							value="" /></span> <span><font>著者：</font>
							<input name="author" type="text"
							value="" /></span> <span><font>分类号：</font>
							<input name="classNo" type="text"
							value="" /></span> <span><font>出版社：</font>
							<input name="publisher" type="text"
							value="" /></span> <span class="search_button" onclick="doFormSubmit('formId','/bookOrder/querySellerBiblio')">
							<input name="" type="button" value="查询" class="btn_orange" />
						</span>
						</div>
					</div>
					<div class="list_table_title">
						<h3>书商征订目录</h3>
						<ul>
							<li><span class="btn_left"></span>
								<a href="javascript:modfiyRadio('/bookOrder/orderForward/#id#')" class="btn btn_confirm">订购</a><span class="btn_right"></span></li>
							<li>
								<font></font>
							</li>

							<li><span class="btn_left"></span>
								<a href="/bookOrder/list" class="btn btn_delete">删除</a><span class="btn_right"></span></li>
							<li>
								<font></font>
							</li>
						</ul>
					</div>
					<div class="list" id="list1">
						<table id="myTable01" class="list_table" width="100%" border="0" cellspacing="0" cellpadding="0">
							<thead>
								<tr>
									<th colspan="2" width="4%" align="right">选择</th>
									<th width="10%">ISBN</th>
									<th width="10%">分类号</th>
									<th>题名</th>
									<th width="10%">著者</th>
									<th width="10%">出版社</th>

									<th width="10%">出版日期</th>
									<th width="10%">价格</th>
									<th width="15%">副本数</th>

								</tr>
							</thead>
							<tbody>

								<input name="ids" type="hidden" value="801469" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801469" /></td>
									<td>978-7-5436-3623-1&nbsp;</td>
									<td>I16&nbsp;</td>
									<td>有一种情感永不泯灭&nbsp;</td>
									<td>张志忠主编&nbsp;</td>

									<td>青岛出版社&nbsp;</td>
									<td>2006&nbsp;</td>
									<td>CNY19.80&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801468" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801468" /></td>
									<td>978-7-212-03764-2&nbsp;</td>
									<td>S7-49&nbsp;</td>
									<td>森林报&nbsp;</td>
									<td>(苏)维·比安基著,陆永昌，沈尧翻译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2010&nbsp;</td>
									<td>CNY11.50&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801467" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801467" /></td>
									<td>978-7-212-03765-9&nbsp;</td>
									<td>S7-49&nbsp;</td>
									<td>森林报&nbsp;</td>
									<td>(苏)维·比安基著,陆永昌，张琪，朱巧玲翻译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2010&nbsp;</td>
									<td>CNY11.50&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801466" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801466" /></td>
									<td>978-7-212-03930-1&nbsp;</td>
									<td>I711.88&nbsp;</td>
									<td>野地的亲族&nbsp;</td>
									<td>(加)查尔斯·罗伯茨原著,韦清琦等译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2011&nbsp;</td>
									<td>CNY12.00&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801465" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801465" /></td>
									<td>978-7-212-03763-5&nbsp;</td>
									<td>Q96-49&nbsp;</td>
									<td>昆虫记&nbsp;</td>
									<td>(法)让-亨利·法布尔著,黎阳编译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2010&nbsp;</td>
									<td>CNY11.50&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801464" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801464" /></td>
									<td>978-7-212-03761-1&nbsp;</td>
									<td>I512.85&nbsp;</td>
									<td>动物趣事&nbsp;</td>
									<td>(俄罗斯)鲍·斯·日特科夫著,傅俊荣，吴文智翻译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2010&nbsp;</td>
									<td>CNY11.50&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801463" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801463" /></td>
									<td>978-7-212-03931-8&nbsp;</td>
									<td>I561.88&nbsp;</td>
									<td>世界之初的童话&nbsp;</td>
									<td>(英)鲁德亚德·吉卜林原著,李霞，洪蕾，陈秋华译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2011&nbsp;</td>
									<td>CNY10.00&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801462" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801462" /></td>
									<td>978-7-212-03929-5&nbsp;</td>
									<td>I561.88&nbsp;</td>
									<td>森林王子&nbsp;</td>
									<td>(英)鲁德亚德·吉卜林原著,潘平亮译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2011&nbsp;</td>
									<td>CNY12.00&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801461" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801461" /></td>
									<td>978-7-212-03932-5&nbsp;</td>
									<td>I561.84&nbsp;</td>
									<td>柳林风&nbsp;</td>
									<td>(英)肯尼斯·格雷厄姆原著,吴文智，张月娇译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2011&nbsp;</td>
									<td>CNY12.00&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

								<input name="ids" type="hidden" value="801460" />
								<tr onclick="checkedTr(this);">
									<td width="2%" align="center" bgcolor="#f9f9f9">&nbsp;</td>
									<td width="2%" align="right"><input name="radios" type="radio" class="input_none" id="radios" value="801460" /></td>
									<td>978-7-212-03933-2&nbsp;</td>
									<td>I521.88&nbsp;</td>
									<td>小鹿斑比&nbsp;</td>
									<td>(奥)费利克斯·萨尔腾原著,赵翠翠译&nbsp;</td>

									<td>安徽人民出版社&nbsp;</td>
									<td>2011&nbsp;</td>
									<td>CNY10.00&nbsp;</td>
									<th width="15%"><input class="min" name="" type="button" value="-" /> <input class="text_box" name="" type="number" value="" placeholder="1" /> <input class="add" name="" type="button" value="+" /> </th>
								</tr>

							</tbody>
						</table>
					</div>
					[#include "/admin/include/head.htm"]
				</div>
			</div>
		</form>
	</body>

</html>