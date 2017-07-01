<!DOCTYPE html >
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<title>MAIN</title>
		<!--框架必需start-->
		<link href="${base }/teacher/css/css.css" rel="stylesheet" type="text/css">

		<!--框架必需end-->

		<!-- 颜色 -->
		<link href="${base }/teacher/css/frame.css" rel="stylesheet" type="text/css">
		<script src="${base }/teacher/js/jquery-1.8.2.min.js" type="text/javascript"></script>
		<script src="${base }/teacher/js/common_list.js" type="text/javascript"></script>
		<script src="${base }/teacher/js/common.js" type="text/javascript"></script>
		<script src="${base }/teacher/js/WdatePicker.js" language="javascript"></script>
		<link href="${base }/teacher/css/WdatePicker.css" rel="stylesheet" type="text/css">
		<script type="text/javascript">
			var timer = null;
			if('' != null && '' != '') {
				timer = setInterval(minusOneSec, 1000);
			}

			function minusOneSec() {
				if($("#clock").text() == '') {
					$("#clock").text('');
				}
				var curTime = parseInt($("#clock").text());
				curTime = curTime - 1;
				$("#clock").text(curTime);
				if(curTime == 0) {
					alert("登录时间已到，请重新登录");
					if(timer != null) {
						clearInterval(timer);
					}
					return;
				}
			}

			$(function() {
				if('' != '') {
					window.location.href = '';
				}
			});

			$(function() {
				autoCount('/multiple/count');
			});
		</script>
		<!-- 颜色end -->

		<style>
			.floatCount {
				position: fixed;
				width: 100%;
				height: 40px;
				line-height: 40px;
				left: 0px;
				bottom: 4px;
				/*background:rgba(51,102,153,0.5) !important;*/
				background: #369;
				text-indent: 20px;
				color: #FFF;
			}
		</style>
	</head>

	<body>
		<div class="main">
			<div class="path">
				<strong>当前推荐使用分辨率：1500*1280&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
				<div class="path_left"></div>

			</div>
			<div class="welcome">
				<div class="welcome_pic"></div>
			</div>

		</div>

		<div id="_my97DP" style="position: absolute; top: -1970px; left: -1970px;">