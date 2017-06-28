<!doctype html>
<html>

	<head>
		[#include "/front/include/head.htm"]

		<script type="text/javascript" src="${base}/front/js/jquery/jquery-1.7.2.min.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery.easyui.extend.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery-ui-1.8.22.custom.min.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery-hashchange/jquery.ba-hashchange.min.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery.md5.js"></script>
		<script type="text/javascript" src="${base}/front/js/jquery/jquery.wresize.js"></script>

		<script type="text/javascript">
			var contextPath = '';
			var locale = 'zh_CN';
			var isSSOBackendValid = 'false';
			var userName = '';
			var isHomePage = 'false';
			var defaultOrderBy = 'RELATIVE';
		</script>
		<script type="text/javascript" src="${base}/front/js/common.js"></script>

		<script type="text/javascript" src="${base}/front/js/data/categories_index_zh.js"></script>
		<script type="text/javascript" src="${base}/front/js/baidumap.js"></script>
		<script type="text/javascript" src="${base}/front/js/data/librariesCoordinates.js"></script>

	</head>

	<body>

		<!-- header -->
		[#include "/front/include/header.htm"]
		<!-- header end -->

		<link href="${base}/front/css/easyui/easyui.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript">
			var isInit = 0;
			var overResults = $('#overResults');

			function sendEmail() {
				if(isInit == 0) {
					initSuggest();
					isInit = 1;
				}

				if($("#emailmsg").val().Trim() == '') {
					$.messager.alert('', '邮箱必须填写');
				} else if(!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test($("#emailmsg").val().Trim()))) {
					$.messager.alert('', '请填写正确的邮件地址');
				} else if($("#msg").val().Trim() == '') {
					$.messager.alert('', '内容必须填写');
				} else {
					overResults.show();
					var d = $("form").serialize();
					$.post(
						contextPath + "${base}/suggest",
						d,
						function(result) {
							$.messager.alert('', '建议发送成功');
							overResults.hide();
							location.reload();
						});
				}

			}
		</script>
		<div class="suggest_wrap fc">
			<div id="suggest-main" class="suggest">
				<div class="sug_hd">
					<div id="w_logo" class="w_logo">
						<a href="/">&nbsp;</a>
					</div>
					<div class="sug_tit">意见反馈</div>
				</div>
				<div class="sug_bd">
					<p class="gray sug_tip">欢迎提出宝贵的意见和建议！我们会用心倾听并持续改进产品，把更好的体验带给您！</p>
					<form id="ff" method="post">
						<table>
							<tbody>
								<tr class="fitem" style="height:55px">
									<td class="w80">您的姓名:</td>
									<td><input class="easyui-validatebox validatebox-text" type="text" name="name" style="width:400px;"></input>
									</td>
								</tr>
								<tr class="fitem" style="height:55px">
									<td class="w80">您的电话:</td>
									<td><input class="easyui-validatebox validatebox-text" type="text" name="tel" style="width:400px;"></input>
									</td>
								</tr>
								<tr class="fitem" style="height:60px">
									<td class="w80"><b class="red">*</b>电子邮件:</td>
									<td><input id="emailmsg" class="easyui-validatebox validatebox-text" required="true" missingMessage="邮箱必须填写" type="text" name="email" validType="email" style="width:400px;" invalidMessage="请填写正确的邮件地址"></input>
									</td>
								</tr>
								<tr class="fitem" style="height:55px">
									<td class="w80" valign="top" style="padding-top:10px;"><b class="red">*</b>反馈内容:</td>
									<td style="padding-top:5px;"><textarea id="msg" name="msg" style="width:400px;height:60px;" class="easyui-validatebox validatebox-text" required="true" missingMessage="内容必须填写"></textarea></td>
								</tr>
								<tr style="height:40px">
									<td colspan="2" style="; padding-left:50px;">
										<a href="javascript:void(0)" class="suggest-btn" onclick="sendEmail()"><span class="suggest-btn-left"><span class="suggest-btn-text icon-ok"></span></span>
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
		</div>
		<script>
			function initSuggest() {

				var loadingImg = $('#loadingImg');
				var main = $('#suggest-main');
				if(overResults.size() == 0) {
					overResults = $('<div id="overResults" style="display:none; position:absolute; z-index:99; background: none repeat scroll 0% 0% white; opacity:0.9;"></div>');
					main.append(overResults);
					loadingImg = $('<div id="loadingImg" style="position:absolute; height:300px; width:300px;"><img src="' + base + '/front/images/loading1.gif"/></div>');
					overResults.append(loadingImg);
				}
				overResults.width(main.width() + 20);
				overResults.height(main.height() + 20);
				overResults.css('position', 'absolute');
				overResults.css('left', main.offset().left);
				overResults.css('top', main.offset().top);
				loadingImg.css('margin-left', (overResults.width() - 320) / 2);
				var loadingHeight = window.pageYOffset + (screen.availHeight - 1000) / 2 - main.position().top;
				if(main.height > 600) {
					loadingHeight -= 100;
				}
				loadingImg.css('margin-top', loadingHeight);
			}
		</script>

		<!-- footer -->
		[#include "/front/include/footer.htm"]

	</body>

</html>