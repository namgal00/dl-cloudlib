<!DOCTYPE html>
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>云图数字图书馆</title>
		<script type="text/javascript" language="javascript" src="${base}/front/js/jquery-1.8.3.js"></script>
		<script type="text/javascript" language="javascript" src="${base}/front/js/jquery.carouFredSel-6.2.1-packed.js"></script>
		<script type="text/javascript" language="javascript">
			$(function() {
				$('#foo1').carouFredSel({
					scroll: { fx: 'fade', duration: 1500, pauseOnHover: 'resume' },
					circular: true,
					infinite: true,
					prev: '#prev2',
					next: '#next2',
					pagination: "#pager2",
					mousewheel: true,
					swipe: {
						onMouse: true,
						onTouch: true
					}
				});
			});
		</script>
		<style type="text/css">
			<!-- img {
				border: 0px;
			}
			
			.list_carousel {
				margin: 0;
				width: 825px;
				position: relative;
				height: 257px;
				z-index: 0;
			}
			
			.list_carousel ul {
				margin: 0;
				padding: 0;
				list-style: none;
				display: block;
			}
			
			.list_carousel li {
				text-align: center;
				border: 0;
				width: 825px;
				height: 257px;
				padding: 0;
				margin: 0;
				display: block;
				float: left;
			}
			
			.pager {
				text-align: right;
				height: 20px;
				z-index: 5;
				position: absolute;
				width: 825px;
				left: 0px;
				top: 230px;
				color: #FFF;
			}
			
			.pager a {
				text-align: center;
				width: 20px;
				height: 20px;
				display: inline-block;
				font-size: 14px;
				font-family: Arial, Helvetica, sans-serif;
				line-height: 20px;
				margin: 0 5px 0 0;
				color: #0a67ac;
				text-decoration: none;
				vertical-align: middle;
				background-color: #FFF;
			}
			
			.pager a.selected {
				text-align: center;
				background-color: #0a67ac;
				font-size: 14px;
				font-family: Arial, Helvetica, sans-serif;
				display: inline-block;
				color: #FFF;
				text-decoration: none;
				cursor: default;
			}
			
			.pager a span {
				display: block;
			}
			
			-->
		</style>

	</head>

	<body leftmargin="0" topmargin="0">
		<table width="825" height="257" align="center" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td valign="top">
					<div class="list_carousel">
						<ul id="foo1">
							<li>
								<img src="${base}/front/images/lb1.jpg" usemap="#Map" style="border:0; cursor:pointer;" border="0" />
							</li>

							<li>
								<a href="#" target="_blank"><img src="${base}/front/images/lb2.jpg" alt="11" width="824" height="257" /></a>
							</li>

							<li>
								<a href="#" target="_blank"><img src="${base}/front/images/lb3.jpg" alt="22" width="824" height="257" /></a>
							</li>

						</ul>
						<div id="pager2" class="pager"></div>
					</div>
				</td>
			</tr>
		</table>
	</body>

</html>