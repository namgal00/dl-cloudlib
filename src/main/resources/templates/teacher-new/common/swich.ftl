
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0034)https://wz.cloudlib.cn/frame/swich -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>MAIN</title>
<!--框架必需start-->
<link href="${base }/teacher-new/css/css.css" rel="stylesheet" type="text/css">

<!--框架必需end-->

<!-- 颜色 -->
<link href="${base }/teacher-new/css/frame.css" rel="stylesheet" type="text/css">
<script src="${base }/teacher-new/js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="${base }/teacher-new/js/common_list.js" type="text/javascript"></script>
<script src="${base }/teacher-new/js/common.js" type="text/javascript"></script>
<script src="${base }/teacher-new/js/WdatePicker.js" language="javascript"></script>
<link href="${base }/teacher-new/css/WdatePicker.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
var timer=null;
if(''!=null && ''!=''){
    timer=setInterval(minusOneSec,1000);
}

function minusOneSec(){	
	if($("#clock").text()==''){
	   $("#clock").text('');
	}
	var curTime=parseInt($("#clock").text());
	curTime=curTime-1;
	$("#clock").text(curTime);
	if(curTime==0){	
		alert("登录时间已到，请重新登录");
		if(timer!=null){	
		   clearInterval(timer);
		}
		return;
	}
}

	$(function() {
		if ('' != '') {
			window.location.href = '';
		}
	});

	$(function() {
		autoCount('/multiple/count');
	});
</script>
<!-- 颜色end -->

<!-- png 透明-->
<!--[if lte IE 6]>
<script src="../../js/PNGimg.js" type="text/javascript"></script>    
<script type="text/javascript">        
DD_belatedPNG.fix('div, ul, img, li, input ,a, .tab_title, .tab_titlebg ');    
</script>
<![endif]-->
<style>
.floatCount {
	position: fixed;
	width: 100%;
	height: 40px;
	line-height: 40px;
	left: 0px;
	bottom: 4px; /*background:rgba(51,102,153,0.5) !important;*/
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
			<!--<img
					src="/images/horn/53.gif"
			style="padding-left: 1054px">
			-->
			<div class="path_left"></div>
			
		</div>
		<div class="welcome">
			<div class="welcome_pic"></div>
		</div>
		
	</div>


<div id="_my97DP" style="position: absolute; top: -1970px; left: -1970px;">
