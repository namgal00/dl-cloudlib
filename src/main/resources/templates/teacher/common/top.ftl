<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

		<!--框架必需start-->
		<link href="${base }/teacher/css/css.css" rel="stylesheet" type="text/css" />
		<!--框架必需end-->

		<!-- 颜色 -->
		<link href="${base }/teacher/css/frame.css" rel="stylesheet" type="text/css" />
		<link href="${base }/teacher/css/jquery-ui-1.8.18.custom.css" rel="stylesheet" type="text/css" />

		<script type="text/javascript">
			/**
			 * 退出
			 */
			function logOut() {
				var r = confirm("确认退出?")
				if(r == true) {
					window.parent.location.href = "${base}/teacher/logOut";
				} else {
				}
			}
		</script>
		<style>
			body {
				background: #00A2DE;
			}
		</style>
	</head>

	<body>
		<div class="topbg" >
			<div class="topLogo">
				<span class="vS">II</span><span class="vB">V2.0</span>
			</div>
			<ul id="topNav" class="topNav">
				<!--<li>
					<a href="/login/returnDesk/101" target="frameset"> <img src="${base }/teacher/image/t_icon1.png" width="42" height="42" /><br />返回桌面
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/9" target="frameset"> <img src="${base }/teacher/image/t_icon2.png" width="42" height="42" /><br />采编管理
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/65" target="frameset"> <img src="${base }/teacher/image/t_icon4.png" width="42" height="42" /><br />典藏管理
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/17" target="frameset"> <img src="${base }/teacher/image/t_icon5.png" width="42" height="42" /><br />流通管理
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/132" target="frameset"> <img src="${base }/teacher/image/t_icon8.png" width="42" height="42" /><br />财经管理
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/41" target="frameset"> <img src="${base }/teacher/image/t_icon7.png" width="42" height="42" /><br />期刊管理
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/167" target="frameset"> <img src="${base }/teacher/image/t_icon9.png" width="42" height="42" /><br />统计管理
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/10106" target="frameset"> <img src="${base }/teacher/image/t_iconsj.png" width="42" height="42" /><br />数据分析
					</a>
				</li>

				<li>
					<a href="/login/manaLeft/101/112" target="frameset"> <img src="${base }/teacher/image/t_icon6.png" width="42" height="42" /><br />系统管理
					</a>
				</li>

				<li>
					<a href="/webOpac/queryList/3303010000784" target="frameset"> <img src="${base }/teacher/image/icon_d_webopac.png" width="42" height="42" /><br />webopac
					</a>
				</li>-->

			</ul>

			<div class="topSubNav_ul">
				<li class="t_sNav_quit">
					<a href="javascript:logOut();" target="frameset">退出</a>
				</li>
			</div>
		</div>
	</body>

</html>