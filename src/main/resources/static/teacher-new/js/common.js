$(function() {
	// 列表隔行换色
	$(document).ready(function() {
		$('.edit tr').addClass('odd');
		$('.edit tr:even').addClass('even');
		// 输入框背景
		$(".ft input").focus(function() {
			$(this).css('background', '#D9F1FE');
		});
		$(".ft input").blur(function() {
			$(this).css('background', '#FFF');
		});
	});
});

function loadingDiv() {
	$('#mainDiv').hide();
	$('#loading').show();
}

/**
 * 换肤ajax请求
 * 
 * @param url
 * @param color
 */
function changeSkin(url, color) {
	$.post(url, {
		"color" : color
	}, null, "text");
}

/**
 * 加载Cookie中保存的肤色
 * 
 * @param color
 */
function loadSkin(color) {
	if (color != '') {
		$('#' + color).addClass('on').siblings().removeClass('on');
		$('html').css({
			'background' : 'url(' + $("#" + color).attr('url') + ')'
		});
	}
}

/**
 * 保存用户桌面图标
 * 
 * @param url
 * @param pngId
 */
function saveDeskPng(url, pngId) {
	$.post(url, {
		"id" : pngId
	}, null, "text");
}

/**
 * 保存用户桌面图标
 * 
 * @param url
 * @param pngId
 */
function deleteDeskPng(url, pngId) {
	$.post(url, {
		"sysDesktopId" : pngId
	}, null, "text");
}

/**
 * 加载已保存的桌面图标
 * 
 * @param totalId
 * @param checkId
 */
function loadDeskPng(checkId) {
	$("[name=" + checkId + "]").each(function() {
		$("#add_" + $(this).val()).show();
		if ($('.commonTray .bd .list').eq($('.commonTray .bd .list').length - 1)
				.find('ul li').length < 9) {
			var htmlTxt = '<li id="logo_'+$('#savedId_'+$(this).val()).val()+'"><a href="'+$("#saveLogoUrl_"+$(this).val()).val()+'"><span class="png"></span><img src="'
					+$('#savedUrl_'+$(this).val()).val() + '" class="png"/><p>'
					+$('#savedName_'+$(this).val()).val()+ '</p></a></li>';
			$('.commonTray .bd .list').eq($('.commonTray .bd .list').length - 1)
					.find('ul').append(htmlTxt);
		} else {
			var htmlTxt = '<div class="list"><ul class="puButton"><div class="bg"></div><li id="logo_'+$('#savedId_'+$(this).val()).val()+'"><a href="'+$("#saveLogoUrl_"+$(this).val()).val()+'"><span class="png"></span><img src="'
					+ $('#savedUrl_'+$(this).val()).val()
					+ '" class="png"/><p>'
					+ $('#savedName_'+$(this).val()).val() + '</p></a></li></ul></div>';
			$('.commonTray .bd').append(htmlTxt);
			$('.tabList').append('<li></li>');
		}
	});
}

function autoCount(url){	
	$.post(url,function(data) {
		if(data!=null && data!=''){	
			$('#cNum').text(data.collectionNum+' 册');
			$('#lNum').text(data.bookNum+' 册');
			$('#pNum').text(data.personNum+' 人');
			$('#lRate').text(data.lendRate);
			$('#pRate').text(data.circulationRate);
		}
	}, 'json');	
}

function setParamCount(url){
	var startDate=$("#startDate").val();
	var endDate=$("#endDate").val();
	if (startDate == '' && endDate != '') {
		alert("开始日期不能为空!");
		return;
	}
	if (startDate != '' && endDate == '') {
	    alert("结束日期不能为空!");
		return;
	}
	$.post(url,{
		"startDate" : startDate==''?null:startDate,
		"endDate" :   endDate==''?null:endDate
	}, function(data) {
		if(data!=null && data!=''){	
			$('#cNum').text(data.collectionNum+' 册');
			$('#lNum').text(data.bookNum+' 册');
			$('#pNum').text(data.personNum+' 人');
			$('#lRate').text(data.lendRate);
			$('#pRate').text(data.circulationRate);
		}
	}, 'json');	
}