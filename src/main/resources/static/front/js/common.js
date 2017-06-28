// init
$(function(){
	initCustomizedImages();     // 改变背景图片和Logo
});

var suggestServer = "http://find.nlc.cn/suggest/?";
var keywordInputted = false;

// 检索框初始化
function initSearchBar() {
	// init SearchBar input event handler
	$('input.submitInput').each(function(){
		var ipt = $(this);
		var value;
		if ($(this).attr('id') == 'keywordIpt') {
			if (typeof(iptValue) != 'undefined') {
				value = iptValue;
			}
		} else {
			if (typeof(secQuery) != 'undefined') {
				value = secQuery;
			}
		}
		var defaultKeyword = '';
		if($('div.wj_subNav a:first').attr("class")=='current'){
			defaultKeyword = ipt.attr('defaultValue')
		}
		ipt.val(defaultKeyword);
		ipt.css('color','#999999');
		ipt.focus(function(){
			if(this.value == defaultKeyword) {
				this.value='';
				this.style.color='#000'
				keywordInputted = true;
			}
			if($('div.wj_subNav a:first').attr("class")!='current'){
				this.style.color='#000'
			}
		});
		ipt.blur(function(){
			if (!this.value || this.value.length == 0 || this.value.replace(/\s+/g , '').length == 0) {
				if($('div.wj_subNav a:first').attr("class")=="current"){
					this.value = defaultKeyword;
					this.style.color = '#999'
					keywordInputted = false;
				}

			} else {
				keywordInputted = true;
			}
		});
		ipt.keydown(function(eventObj){
			if (eventObj.keyCode == 13) {
				$(this).blur();
				var btnId = this.getAttribute('btnId');
				if (typeof(btnId) != "undefined" && btnId != null && btnId.length > 0) {
					keywordInputted = true;
					$('#' + btnId).click();
				}
			}
		});
		if (value && value.length > 0 && value != defaultKeyword) {
			ipt.val(value);
			this.style.color='#000'
		}
		ipt.blur();
	});

	// init autocomplete
	$("input.submitInput:eq(0)").autocomplete({
		source: function( request, response ) {
			$.ajax({
				url: suggestServer,
				data: {
					type: 1,
					token: request.term
				},
				dataType: "jsonp",
				success: function(data){
					response( $.map( data, function( e ) {
						return e.value
					}));
				},
				complete:function(a,b,c,d){
					a;
				}
			});
		},
		minLength: 1,
		select:function(event, ui){
			$(this).val(ui.item.value);
//			$(this).parent().parent().find("input.submitBtn").click();
		},
		open:function(event, ui) {
			$(this).autocomplete("option", "disabled", false);
		}
	});
}

// 初始化一级分类状态
function initCategories() {
	try {
		$('#targetFieldSlt').click(function(){
			$('#targetTypeOptns').toggle();
		});
		$('#targetFieldSlt').parent().mouseleave(function(){
			$('#targetTypeOptns').hide();
		});
		if (typeof(docType) != 'undefined' && docType.length > 0 && docType != "All" && docType != "全部") {
			var doctypeExist = false;
			$('div.wj_subNav a').each(function(){
				if ($(this).attr('title') == docType) {
					$(this).click();
					doctypeExist = true;
				}
			});
			if(!doctypeExist){
				$('div.wj_subNav a:first').click();
			}
		} else {
			$('#targetFieldSlt').parent().hide();
				if ($.browser.msie) {
					$('.submitInput:eq(0)').width(550);
				} else {
					$('.submitInput:eq(0)').width(565);
				}
		}
		if (typeof(targetFieldLog) != 'undefined' && targetFieldLog.length > 0) {
			$('#targetFieldText').html(targetFieldLog);
		}
	} catch (e) {
		return;
	}
}

// 检索字段下拉层填充
function fillTargetFields(curCtg) {
	var commonFields = getCommonFields(curCtg);
	html = '<a href="javascript:void(0);">'+allFields+'</a>';
	for (var j = 0; j < commonFields.length; j++) {
		html += '<a href="javascript:void(0);">' + commonFields[j] + '</a>';
	}
	$('#targetTypeOptns').html(html);
	$('#targetTypeOptns a').click(function(){
		$('#targetFieldText').html(this.innerHTML);
		$('#targetTypeOptns').hide();
	});
}

// 获取所选一级分类的公共字段
function getCommonFields(topCtg) {
	return getAllFields(topCategories[topCtg]);
}

function getSameFields(scdCtgArr) {
	var result = [];
	var curArr = [];
	var isFirst = true;
	for (var i = 0; i < scdCtgArr.length; i++) {
		curArr = secondaryCateories[scdCtgArr[i]];
		for (var j = 0; j < curArr.length; j++) {
			if (isFirst) {
				result.push(curArr[j]);
			} else {
				result = retainAll(result, curArr);
			}
		}
		if (isFirst) {
			result = result;
		}
		isFirst = false;
	}
	return result;
}

function getAllFields(scdCtgArr) {
	var result = [];
	var curArr = [];
	var isFirst = true;
	if(typeof(scdCtgArr)=="undefined" || scdCtgArr==null || scdCtgArr.length==0){
		result.push(allFields);
		return ;
	}
	for (var i = 0; i < scdCtgArr.length; i++) {
		curArr = secondaryCateories[scdCtgArr[i]];
		for (var j = 0; j < curArr.length; j++) {
			var resultStr = result.join();
			if(resultStr.indexOf(curArr[j])<0){
				result.push(curArr[j]);
			}
		}

	}
	return result;
}

function retainAll(arr1, arr2) {
	var result = [];
	var i = 0;
	if (typeof(arr1)!="undefined" && typeof(arr2)!="undefined" && arr1.length >0 && arr2.length >0){
		for(var i=0;i<arr1.length;i++){
			for(var j=0;j<arr2.length;j++){
				if(arr1[i]==arr2[j]){
					result[result.length] = arr1[i];
					break;
				}
			}
		}
	}
	return result;
}

function initCtgSltBoxes() {
	var html = "";
	for (var topCtg in topCategories) {
		html += '<option value="' + topCtg + '">' + topCtg + '</option>';
	}
	$('#docTypeSlt').html(html);
	setFieldSlt($('#docTypeSlt').get(0));
}

function setFieldSlt(obj) {
	var commonFields = getCommonFields((obj.value).replace('&', '&amp;'));
	$('select.fieldSlt').each(function(){
		$(this).children().remove();
		this.options[0] = new Option(allFields, allFields);
		if(typeof(commonFields)!="undefined" && commonFields!=null && commonFields.length>0){
			for (var i = 0; i < commonFields.length; i++) {
				this.options[i+1] = new Option(commonFields[i], commonFields[i]);
			}
		}
		
	});
}

// 下拉列表选中默认值
function initSelectElements() {
	$('select').each(function(){
		var dftValue = this.getAttribute('defaultValue');
		if (!dftValue || dftValue.length == 0) {
			return;
		}
		for (var i = 0; i < this.childNodes.length; i++) {
			if (dftValue == this.childNodes[i].value) {
				this.childNodes[i].selected = true;
				return;
			}
		}
	});
}

// 一级分类点击的事件
function initDocTypeLink() {
	$('div.wj_subNav a').click(function(){
		var docType = $(this).attr('title');
		$('div.wj_subNav a').each(function(){
			$(this).removeClass('current');
			if( typeof($(this).attr("imgname"))!="undefined" && $(this).attr("imgname") ){
				$(this).html('<img src="'+contextPath+'/images/doctype/'+$(this).attr("imgname")+'.png" onload="fix(this)"/>');
			}
		});
		$(this).addClass('current');
		if(typeof($(this).attr("imgname"))!="undefined" && $(this).attr("imgname")){
			$(this).html('<img src="'+contextPath+'/images/doctype/'+$(this).attr("imgname")+'_c.png" onload="fix(this)"/>');
		}
		//doctype不是全部,去掉默认搜索提示语
		var searchbar = $('input.submitInput:first');
		if(searchbar.val()==''||searchbar.val()==searchbar.attr("defaultValue")){
			if($(this).attr("imgname")=='all'||$(this).attr("title")==$('div.wj_subNav a:first').text()){
				searchbar.val(searchbar.attr("defaultValue"));
				searchbar.css('color','#999999');
			}else{
				searchbar.val('');
			}
		}

		var flag = false;
		if (docType != $('div.wj_subNav a:first').attr('title')) {
			flag = true;
		}
		if (flag) {
			fillTargetFields(docType);
			$('#targetFieldText').html($('#targetFieldText').attr('defaultText'));
			$('#targetFieldSlt').parent().show();
			$('#targetFieldSlt').show();
			if(locale == "en_US") {
				if ($.browser.msie) {
					$('.submitInput:eq(0)').width(456);
				} else {
					$('.submitInput:eq(0)').width(465);
				}
			} else {
				if ($.browser.msie) {
					$('.submitInput:eq(0)').width(465);
				} else {
					$('.submitInput:eq(0)').width(475);
				}
			};
		} else {
			$('#targetFieldText').html($('#targetFieldText').attr('defaultText'));
			$('#targetFieldSlt').parent().hide();
			if ($.browser.msie) {
				$('.submitInput:eq(0)').width(550);
			} else {
				$('.submitInput:eq(0)').width(565);
			}
		}
		return false;
	});
}

// 当前语言粗体显示
function initCurrentLanguage() {
	if (locale == 'zh_CN') {
		var text = $('.language #showChinese').html();
		$('.language #showChinese').html('<b>' + text + '</b>');
	} else {
		var text = $('.language #showEnglish').html();
		$('.language #showEnglish').html('<b>' + text + '</b>');
	}
}

// 切换语言的链接拼装
function initLanguageLink() {
	var url = document.URL;
	var chineseURL;
	var englishURL;
	if (url.indexOf('?') >= 0) {
		var idx = url.indexOf('request_locale');
		if (idx >= 0) {
			url = url.substring(0, idx);
			chineseURL =url + 'request_locale=zh_CN';
			englishURL = url + 'request_locale=en_US';
		} else {
			chineseURL =url + '&request_locale=zh_CN';
			englishURL = url + '&request_locale=en_US';
		}

	} else {
		chineseURL = url + '?request_locale=zh_CN';
		englishURL = url + '?request_locale=en_US';
	}
	if (locale == 'zh_CN'){
		$('#showEnglish').attr('href',englishURL);
	}else{
		$('#showChinese').attr('href',chineseURL);
	}
}

// 年份是否合法
function isYearValue(val) {
	if (val[0] == '0') {
		return false;
	}
	for (var i = 0; i < val.length; i++) {
		if (val[i] < '0' || val[i] > '9') {
			return false;
		}
	}
	return true;
}

// 判断是否是中文字符
function isChinese(str) {
	var lst = /[\u4e00-\u9fa5]/;
	return lst.test(str);
}

// 判断是否合法
function isValid(arg) {
	return !(arg === undefined || arg === null);
}

// 获取指定长度的字符串
function getStrOfAssignedLen(str, maxLen) {
	var len = 0;
	for (var i = 0; i < str.length; i++) {
		if (isChinese(str.charAt(i))) {
			len += 2;
		} else {
			len += 1;
		}
		if (len > maxLen) {
			break;
		}
	}
	if (i < str.length) {
		return str.substring(0, i) + '...';
	} else {
		return str;
	}
}

// 得到检索条件的json对象
function getSearchArgs(query, secQuery, actualQuery) {
	if (!isValid(query))		query = '';
	if (!isValid(secQuery))		secQuery = '';
	if (!isValid(actualQuery))	actualQuery = '';

	if (query.length == 0 && actualQuery.length == 0) {
		return null;
	}

	if (actualQuery.length > 0 && query.length > 0 && secQuery.length > 0) {

	// 修正bug 二次检索翻页结果越来越少
		if (actualQuery.indexOf(query + ' AND ' + secQuery) >= 0) {
			actualQuery = query + ' AND ' + secQuery + actualQuery.substring((query + ' AND ' + secQuery).length);
		} else {
			actualQuery = query + ' AND ' + secQuery + actualQuery.substring(query.length);
		}
	// 修正bug 二次检索翻页结果越来越少
//		actualQuery = query + ' AND ' + secQuery + actualQuery.substring(query.length);
	}

	if (actualQuery.length == 0) {
		if (query.length > 0) {
			actualQuery = query;
		}
		if (secQuery.length > 0) {
			actualQuery += ' AND ' + secQuery;
		}
	}

	return {
		'query':query,
		'secQuery':secQuery,
		'actualQuery':actualQuery
	};
}

//首页和其他也面的上方检索按钮
function indexSearch(fromHome) {
	//var query = $('#keywordIpt').val().replace(/[\\\^\"\&]/g,"").replace(/(--)/g, '').replace(/\'/g, ' ');   //去掉'\',\^\等特殊字符
	var query = $('#keywordIpt').val().replace(/[\\\^\"\&]/g,"").replace(/(--)/g, '').replace(/<|>|\||&|%|@|,|\;|\$/g,'');
//	if (!query || query.length == 0 || !keywordInputted || query.Trim().length == 0) {
	if (!query || query.length == 0 || query.Trim().length == 0) {
		$('#keywordIpt').val("");
		initSearchBar();
		return;
	}
	query = query.Trim();
	var defaultValue = $('#keywordIpt').attr("defaultvalue");
	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style){
		if (!isValidKeyword(query, 30,defaultValue)) {
			return;
		}
	}
	if (!isValidKeyword(query, 60,defaultValue)) {
		return;
	}
	var targetField = $("#targetFieldText").html();
	var actualQuery = query;
	var extraUrl = '';
	var docType = $('div.wj_subNav a.current').attr("title");
	if (typeof(docType) != 'undefined' &&
			docType != null &&
			docType.length > 0) {

		extraUrl += '&docType=' + encodeURIComponent(docType);

		// 媒体类型
		var secArr = topCategories[docType];
		if (typeof(secArr) != 'undefined' && secArr != null) {
			var subTypes = [];
			for (var i = 0; i < secArr.length; i++) {
				subTypes.push(categoriesCode[secArr[i]]);
			}
			if (subTypes.length > 0){
				actualQuery += ' mediatype:(' + subTypes.join(' OR ') + ') ';
			}
			extraUrl += "&mediaTypes=" + subTypes.join(',');

			// 检索字段
			if (typeof(targetField) != 'undefined' &&
					targetField != null &&
					targetField.length > 0 &&
					targetField != $("#targetFieldText").attr('defaultText')) {
				actualQuery += ' ' + encodeURIComponent(fieldsCode[targetField]) + ':(' + query + ') ';
				extraUrl += '&targetField=' + encodeURIComponent(fieldsCode[targetField]);
			}
		}

		//添加targetfiledlog
		var targetFieldLog = targetField;
		if (typeof(targetFieldLog)=="undefined" || targetFieldLog==null || targetFieldLog.length==0){
			if (locale == 'zh_CN'){
				targetFieldLog = "全部字段";
			}else{
				targetFieldLog = "All Field";
			}
		}
		extraUrl += "&isGroup=isGroup";
		extraUrl += "&targetFieldLog=" + encodeURIComponent(targetFieldLog);

	}
	$('#instant-search-btn').attr('disabled',"true");
	search(2, query, null, actualQuery, extraUrl, null, fromHome);
}

//除去使用ajax进行检索之外的检索都掉用此search
function search(searchType, query, secQuery, actual, extra, orgin, fromHome,isOpenNewPage) {
	if (!query || query.length == 0 || query == $('input.submitInput').attr('defaultValue')) {
		return;
	}
	if (secQuery!=null && typeof(secQuery) != 'undefined' ) {
		if(secQuery == $('#searchInResultsIpt').attr('defaultValue')){
			return;
		}

	}

	var args = getSearchArgs(query, secQuery, actual);
	if (args == null) {
		return;
	}

	var url = contextPath + '/search/doSearch'
			+ '?query=' + encodeURIComponent(args.query)
			+ '&secQuery=' + encodeURIComponent(args.secQuery)
			+ '&actualQuery=' + encodeURIComponent(args.actualQuery)
			+ '&searchType=' + encodeURIComponent(searchType);
	if (isValid(orgin)) {
		url += '&orginQuery=' + encodeURIComponent(orgin);
	}
	if (typeof(extra)=="undefined" || extra == null){
		extra = '';
	}

	if(!(/.*?(&docType)/i.test(extra))){
		if (locale == 'zh_CN'){
			extra += "&docType=" + encodeURIComponent("全部");
		} else {
			extra += "&docType=" + encodeURIComponent("All");
		}
	}

	if(!(/.*?(&targetFieldLog)/i.test(extra))){
		if (locale == 'zh_CN'){
			extra += "&targetFieldLog=" + encodeURIComponent("全部字段");
		} else {
			extra += "&targetFieldLog=" + encodeURIComponent("All Field");
		}
	}
	// added by guohuaxue
	if (typeof (orderBy) == 'undefined' || orderBy!=null || orderBy.length == 0) {
		if (typeof (defaultOrderBy) != "undefined" && defaultOrderBy != null
				&& defaultOrderBy.length > 0) {
			orderBy = defaultOrderBy;
			extra += '&orderBy=' + defaultOrderBy;
		}
	}
	if(typeof (orderBy) != 'undefined' && orderBy!=null && orderBy.length != 0 && orderBy!="RELATIVE"){
		extra = extra.replace("&isGroup=isGroup", "");
	}

	if (isValid(extra)) {
		url += extra;
	}
	if (isValid(fromHome)) {
		url += '&fromHome=' + fromHome;
	}
	if (isOpenNewPage!=null && isOpenNewPage=="yes") {
		window.open(url);
	} else {
		window.location = url;
	}

}

// 改变背景图片和Logo
var backgroundPath = contextPath + '/pictures/wjBackground.jpg';
var logoPath = contextPath + '/pictures/wjLogo.jpg';
function initCustomizedImages() {
	$(document.body).css('background-image', 'url(' + backgroundPath + ')');
	if ($('#l_wjLogo').size() > 0) {
		$('#l_wjLogo').css('background-image', 'url(' + logoPath + ')');
		var tempImg = $('<img style="display:none;" src="' + logoPath + '"></img>');
		$(document.body).append(tempImg);
		tempImg.error(function(){
			$('#l_wjLogo').css('background-image', 'url(' + contextPath + '/images/skin.png)');
		});
	}
}

// 改变图片的大小
function changeImgSize(img, w, h) {
	var widthRate = ($(img).width()) / w - 1;
	var heightRate = ($(img).height()) / h - 1;
	var widthAfter;
	var heightAfter;
	if (widthRate > 0 && widthRate >= heightRate) {
		widthAfter = w;
		heightAfter = w * $(img).height() / $(img).width();
	} else if (heightRate > 0 && heightRate >= widthRate) {
		heightAfter = h;
		widthAfter = h * $(img).width() / $(img).height();
	} else {
		widthAfter = $(img).width();
		heightAfter = $(img).height();
	}
	$(img).css("width", widthAfter + "px");
	$(img).css("height", heightAfter + "px");
	$(img).css("margin-top", "-" + (heightAfter / 2) + "px");
	$(img).css("margin-left", "-" + (widthAfter / 2)  + "px");
}

//退出登录
function logout(){
	 new SSOUtil().ssoProcess(contextPath+'/sso/logout');
	return false;
}

// 检索词长度检查
function isValidKeyword(keyword, len,defaultValue) {
	if(typeof(defaultValue)!="undefined" && defaultValue!=null && keyword==defaultValue){
		return false;
	}

	var keyLen = 0;
	for (var i = 0; i < keyword.length; i++) {
		if (isChinese(keyword.charAt(i))) {
			keyLen += 2;
		} else {
			keyLen += 1;
		}
	}
	if (keyLen > len) {
		var msg = '';
		if (locale == 'en_US') {
			msg = 'keyword should be no longer than'+len/2 +' Chinese character or '+len+'English character';
		} else {
			msg = '最多输入'+len/2+'个汉字或'+len+'个英文字符';
		}
		alert(msg);
		return false;
	}
	return true;
}

function getQueryString(){
	var result = location.search.match(new RegExp("[/?/&][^/?/&]+=[^/?/&]+","g"));
	var href = "";
	if(typeof(result)!='undefined'&&result!=null&&result!=""){
		for(var i = 0; i < result.length; i++){
			href += result[i].substring(1)+"||";
		}
		if(href!=null&&href!=""){
			href = href.substring(0, href.length-2);
		}
		return href;
	}
	return null;
}

function getSSOLoginUrl(){
	var baseLoginUrl = "http://sso1.nlc.cn/Reader/reader_login.jsp?para=http://"+window.location.host+window.location.pathname+"?ssoparam=";
	 var qs = getQueryString();
	 if(qs!=null){
	 	qs = qs+"||fromGuoTu=fromGuoTu";
	 }else{
	 	qs = "fromGuoTu=fromGuoTu";
	 }
	 var encodeQs =encodeURIComponent(encodeURIComponent(qs));
	 var ssoLoginUrl = baseLoginUrl+encodeQs;
	 return ssoLoginUrl;
}

String.prototype.Trim = function()
{
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
