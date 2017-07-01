

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- saved from url=(0048)https://wz.cloudlib.cn/bookOrderBatch/addForward -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">






<!-- css -->
<link rel="shortcut icon" href="https://wz.cloudlib.cn/images/favicon.ico">

<link rel="icon" href="https://wz.cloudlib.cn/images/favicon.ico" type="image/x-icon">
<link href="${base }/teacher/css/css.css" rel="stylesheet" type="text/css">
<link href="${base }/teacher/css/frame.css" rel="stylesheet" type="text/css">
<link href="${base }/teacher/css/smartMenu.css" rel="stylesheet" type="text/css">
<!-- js -->
<script src="${base }/teacherjs/jquery-1.8.2.min.js" type="text/javascript"></script>
<script type="text/javascript" src="${base }/teacher/js/jquery.textSearch-1.0.js">
        </script>
<script src="${base }/teacher/js/jquery-smartMenu.js" type="text/javascript"></script>
<script src="${base }/teacher/js/ZeroClipboard.js" type="text/javascript"></script>
<script src="${base }/teacher/js/common_list.js" type="text/javascript"></script>
<script src="${base }/teacher/js/WdatePicker.js" type="text/javascript"></script>
<link href="${base }/teacher/css/WdatePicker.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
	var base = "";
	function closeHelp() {
		$("#fullbg1,#dialog1").hide();
	}
</script>  
<script type="text/javascript">
	function judgeSubmit() {
		var name=$("#name").val();
		if(name==''){	
			$("#nameInfo").text("批次名称不能为空*");
			return;
		}
		okOnBlur('nameInfo');
		
		var bookSellerId=$("#bookSellerId").val();
		if(bookSellerId==0){	
			$("#sellerInfo").text("请选择书商名称*");
			return;
		}
		okOnBlur('sellerInfo');
		var budgetId=$("#budgetId").val();
		if(budgetId==0){	
			$("#budgetInfo").text("请选择预算名称*");
			return;
		}
		okOnBlur('budgetInfo');
		$("#formId").submit();
	}
	
	function textOnBlur(){	
		var name=$("#name").val();
		if(name==''){	
			$("#nameInfo").text("批次名称不能为空*");
			return;
		}
		okOnBlur('nameInfo');
		
		var bookSellerId=$("#bookSellerId").val();
		if(bookSellerId==0){	
			$("#sellerInfo").text("请选择书商名称*");
			return;
		}
		okOnBlur('sellerInfo');
		var budgetId=$("#budgetId").val();
		if(budgetId==0){	
			$("#budgetInfo").text("请选择预算名称*");
			return;
		}
		okOnBlur('budgetInfo');
	}
</script>
<title>预订批次添加</title>
<style>
 body {
  
 border-left: 1px solid #E7EBEF;
}

.path_module{

color: #222;
}
.path_right a{
font-weight:600;
color: #222;
}
.main{

border:0px solid #F7F3F7;
 
}

.main input[type="text"]{

background: #FFFFFF;
}

.search .search_button .btn_orange{

width: 100px;
height: 24px;
color: #fff;
letter-spacing: 1px;
background: #00A2DE;
border:0px solid #F7F3F7;
}

.search .search_button .btn_orange:hover{

width: 100px;
height: 24px;
color: #fff;
letter-spacing: 1px;
background: #6AD0F6;
border:0px solid #F7F3F7;
}

</style>
</head>


<body>

	<form action="https://wz.cloudlib.cn/bookOrderBatch/add" method="post" id="formId">
		<div class="main">
			<div class="path">
				<div class="path_left"></div>
				
			</div>
			


<link rel="stylesheet" href="${base }/teacher/css/dialog.css" type="text/css">
<script type="text/javascript">
	$(function() {

		$("#fullbg1,#dialog1").hide();
		var isFree = "";
		var isManadate = "false";
		if (isFree != "true" && isManadate == "true") {
			//不是免费  而且超期
			/**学校激活码过期的弹出框**/
			openHelp();
		}

		$("#close").click(function() {
			hideMessage();
		});
		if ('' != "") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip tRight");
			$("#pMsg")
					.text(
							'1');
			setTimeout('hideMessage()', 5000);
		} else if ('' != "") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip");
			$("#pMsg")
					.text(
							'2');
		} else if ('' != "") {
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
			height : bh,
			width : bw,
			display : "block"
		});
		$("#dialog1").show();
	}

	function hideMessage() {
		$(".tip .close").parents(".tip").animate({
			opacity : 'hide'
		}, "slow");
	}

	function showMsg(msg, msgType) {
		if (msgType == "warn") {
			$("#divmsg").removeClass();
			$("#divmsg").addClass("tip");
		} else if (msgType == "success") {
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

<div id="divmsg" style="display: none;">
	<div class="tipBox">
		<div class="ico"></div>
		<p id="pMsg"></p>
		<div class="close" id="close"></div>
		<div class="clear"></div>
	</div>
</div>

<div id="fullbg1" style="display: none;"></div>
<div id="dialog1" style="display: none;">
	
	<p class="close1" onclick="closeHelp();" style="margin-top: 340px;">关闭</p>
</div>
			<div class="main_content">
				<div class="row_half edit">
					<div class="row_half_right">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tbody><tr>
								<th align="right" width="150">批次名称：</th>
								<td align="left"><input name="name" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
							</tr>
							
							
							
							<tr>
								<th align="right" width="150">预算金额：</th>
								<td align="left"><input name="name" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
							</tr>
							
							<tr>
								<th align="right" width="150">联系人：</th>
								<td align="left"><input name="name" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
							</tr>
							
							<tr>
								<th align="right" width="150">联系方式：</th>
								<td align="left"><input name="name" type="text" value="" id="name" onblur="textOnBlur()"><span style="color: red" id="nameInfo">*</span></td>
							</tr>
							
							<tr>
								<th align="right">备注：</th>
								<td colspan="3" align="left"><textarea name="remark" id="textarea" cols="50" rows="3"></textarea></td>
							</tr>

							<tr>
								<th align="right">&nbsp;</th>
								<td><input name="" class="input_btn" type="button" value="保存" onclick="judgeSubmit()"> <input name="" class="input_btn" type="button" value="重置" onclick="formReset()"> <input name="" class="input_btn" type="button" value="返回" onclick="doReturn(&#39;/bookOrderBatch/list&#39;)"></td>
							</tr>
						</tbody></table>
					</div>
				</div>
			</div>
		</div>
	</form>

<div id="_my97DP" style="position: absolute; top: -1970px; left: -1970px;"><iframe style="width: 186px; height: 198px;" src="js/My97DatePicker.html" frameborder="0" border="0" scrolling="no"></iframe></div></body></html>