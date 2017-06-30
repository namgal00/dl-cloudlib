





<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>阿里云云图书馆</title>

<!--框架必需start-->
<link href="${base }/teacher-new/css/css.css"
	rel="stylesheet" type="text/css" />

<!--框架必需end-->

<!-- 颜色 -->
<link href="${base }/teacher-new/css/frame.css"
	rel="stylesheet" type="text/css" />
<link
	href="${base }/teacher-new/css/jquery-ui-1.8.18.custom.css"
	rel="stylesheet" type="text/css" />
<script src="${base }/teacher-new/js/jquery-1.8.2.min.js"></script>
<script src="${base }/teacher-new/js/jquery.js"
	type="javascript"></script>
<script type="text/javascript"
	src="${base }/teacher-new/js/ui/jquery.ui.core.js"></script>
<script type="text/javascript"
	src="${base }/teacher-new/js/ui/jquery.ui.widget.js"></script>
<script type="text/javascript"
	src="${base }/teacher-new/js/ui/jquery.ui.mouse.js"></script>
<script type="text/javascript"
	src="${base }/teacher-new/js/ui/jquery.ui.button.js"></script>
<script type="text/javascript"
	src="${base }/teacher-new/js/ui/jquery.ui.draggable.js"></script>
<script type="text/javascript"
	src="${base }/teacher-new/js/ui/jquery.ui.position.js"></script>
<script type="text/javascript"
	src="${base }/teacher-new/js/ui/jquery.ui.dialog.js"></script>
<script src="${base }/teacher-new/js/common_list.js"
	type="text/javascript"></script>
<script type="text/javascript">
	function openUserWindow() {
		window
				.open(
						'/manaSysUser/editPasswordForward',
						'个人信息修改', 'height=210, width=400, top=200, left=600',
						false);
	}

	function openCountWindow() {
		window.open(
				'/multiple/multipleParam',
				'统计参数设置', 'height=210, width=400, top=200, left=600', false);
	}

	function openFeedBackWindow() {
		window.open('/feedBack/list', '信息反馈',
				'height=600, width=1024, top=150, left=200', false);

	}
	
	function openClockWindow(){	
		window.open('/manaSysUser/setClockForward', '设置闹钟',
				'height=260, width=800, top=500, left=400', false);
	}
</script>

<script type="text/javascript">
	$(function() {
		$("#fullbg,#dialog").hide();
		openHelp();
	});
	function closeHelp() {
		$("#fullbg,#dialog").hide();
	}
	/**打开提示框**/
	function openHelp() {
		var bh = window.parent.height;
		var bw = window.parent.width;
		$("#fullbg").css({
			height : bh,
			width : bw,
			display : "block"
		});
		$("#dialog").show();
	}
</script>
<style>


 
 body {
    background: #00A2DE;
 
}
</style>
</head>


<body>
	<div class="topbg">
		<div class="topLogo">
			<span class="vS">II</span><span class="vB">V2.0</span>
		</div>
		<ul id="topNav" class="topNav">
			<li><a
				href="/login/returnDesk/101"
				target="frameset"> <img
					src="${base }/teacher-new/image/t_icon1.png"
					width="42" height="42" /><br />返回桌面
			</a></li>

			
				
					<li><a
						href="/login/manaLeft/101/9"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_icon2.png"
							width="42" height="42" /><br />采编管理
					</a></li>
				
				
				

				

				
				
				

				
			
				
				
					<li><a
						href="/login/manaLeft/101/65"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_icon4.png"
							width="42" height="42" /><br />典藏管理
					</a></li>
				
				

				

				
				
				

				
			
				
				
				
					<li><a
						href="/login/manaLeft/101/17"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_icon5.png"
							width="42" height="42" /><br />流通管理
					</a></li>
				

				

				
				
				

				
			
				
				
				

				
					<li><a
						href="/login/manaLeft/101/132"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_icon8.png"
							width="42" height="42" /><br />财经管理
					</a></li>
				

				
				
				

				
			
				
				
				

				

				
					<li><a
						href="/login/manaLeft/101/41"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_icon7.png"
							width="42" height="42" /><br />期刊管理
					</a></li>
				
				
				

				
			
				
				
				

				

				
				
					<li><a
						href="/login/manaLeft/101/167"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_icon9.png"
							width="42" height="42" /><br />统计管理
					</a></li>
				
				

				
			
				
				
				

				

				
				
				

				
					<li><a
						href="/login/manaLeft/101/10106"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_iconsj.png"
							width="42" height="42" /><br />数据分析
					</a></li>
				
			
				
				
				

				

				
				
				
					<li><a
						href="/login/manaLeft/101/112"
						target="frameset"> <img
							src="${base }/teacher-new/image/t_icon6.png"
							width="42" height="42" /><br />系统管理
					</a></li>
				

				
			

			<li><a
				href="/webOpac/queryList/3303010000784"
				target="frameset"> <img
					src="${base }/teacher-new/image/icon_d_webopac.png"
					width="42" height="42" /><br />webopac
			</a></li>
			
			<!-- 
			<li><a href="javascript:openClockWindow()"> <img
					src="/images/clock.png"
					width="42" height="42" /><br />闹钟
			</a></li>
			
			<li><a href="#"> <img
					src="/images/icon_d_add.png"
					width="42" height="42" /><br />添加应用
			</a></li>-->
		</ul>

		<!--  
		<div class="topNotice">
			<marquee style="color: red;" scrollAmount="1" width="150" height="80" 
				direction="left" scrolldelay="1" onmouseover="stop()" onmouseout="start()">
				当前版本信息为2.3.47，对征订目录接收、馆藏数据误删、安卓阅览登记进一步完善
				当前版本信息为2.3.47，对征订目录接收、馆藏数据误删、安卓阅览登记进一步完善
			</marquee>
		</div>-->

		<div class="topSubNav_ul">
			<li class="t_sNav_news"><a
				href="javascript:openFeedBackWindow()">反馈</a></li>
			<!-- li class="t_sNav_count"><a href="javascript:openCountWindow()">统计</a></li-->
			<li class="t_sNav_help"><a href="javascript:openUserWindow()">修改</a></li>
			<li class="t_sNav_quit"><a
				href="/login/manegerOut"
				target="frameset">退出</a></li>
		</div>
	</div>
</body>
</html>
