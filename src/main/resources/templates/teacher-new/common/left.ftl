





<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>LEFT</title>
<!--框架必需start-->
<link href="${base }/teacher-new/css/css.css"
	rel="stylesheet" type="text/css" />
<!--框架必需end-->

<!-- 颜色 -->
<link href="${base }/teacher-new/css/frame.css"
	rel="stylesheet" type="text/css" />
<!-- 颜色end -->

<!-- png 透明-->
<!--[if lte IE 6]>
<script src="../../js/PNGimg.js" type="text/javascript"></script>    
<script type="text/javascript">        
DD_belatedPNG.fix('ul, img, li, input ');    
</script>
<![endif]-->

<style>


.leftNav {
 background:#FFFFFF;
 border: 0px solid #94b2bf;

margin: 0 0 0 0px;
 }
 
 body {
    background: #FFFFFF;
 
}
.leftName{
    line-height: 40px;
	font-size: 14px;
	color: #222;
	font-weight:bold;
	border-bottom: 1px solid #E7EBEF;
	background: url(${base }/teacher-new/image/touxiang01.png) no-repeat;
}

.mTitle{
		font-size: 15px;
		padding: 22px 0 0px 20px;
}

.mTitle img{
		margin-right:5px
}
.leftNav_list{
border-bottom: 1px solid #E7EBEF;
}
</style>


<script src="${base }/teacher-new/js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="${base }/teacher-new/js/common_list.js" type="text/javascript"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$(".mTitle").click(function() {
			$('.mUl').slideUp();
			$(this).next().slideToggle("slow");
			//siblings(".mCon").slideUp("slow");
		});

		$(".mCon a").hover(function() {
			$(this).removeClass("mCon_a");
			$(this).addClass("mCon_a_h");
		}, function() {
			$(this).removeClass("mCon_a_h");
			$(this).addClass("mCon_a");
		});
		$(".mCon a").mousedown(function() {
			$(".mCon_a_h2").removeClass("mCon_a_h2");
			$(this).addClass("mCon_a_h2");
		});

	});

	$(function() {
		if ('' != '') {
			$('.mCon_a')
					.each(
							function() {
								if ($(this).attr('href') == '') {
									$(this).parent('.mCon').parent('.mUl').css(
											'display', 'block');
									$(this).removeClass("mCon_a");
									$(this).addClass("mCon_a_h");
								}
							});
		} else {
			$('.mCon').each(function(i) {
				if (i == 0) {
					$(this).parent('.mUl').css('display', 'block');
					return;
				}
			});
		}
	});
</script>
</head>

<body>
	<div class="leftNav">
		<div class="leftName">
			您好！测试学校<br /> 测试学校
		</div>
		<div class="leftNav_list">
	
				<div class="mTitle">
					<img
						src="${base }/teacher-new/image/ioc/26.gif"
						width="15" height="15" align="absmiddle" />图书预订管理
				</div>
				
				<div class="mUl" style="display: none">					
					<div class="mCon" style="display: block;">
						<a href="${base }/teachernew/batch/bookOrderBatch"
							class="mCon_a" target="main">预订批次管理</a>
					</div>

					<div class="mCon" style="display: block;">
						<a href="${base }/teachernew/common/swich"
							class="mCon_a" target="main">图书预订处理</a>
					</div>

				</div>			
		</div>
	</div>
</body>
</html>
