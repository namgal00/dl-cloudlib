$(function(){
	initDocTypeLink();     // 初始化搜索框上面文献类型链接的事件处理器
	initSearchBar();     // 初始化搜索框，包括输入提示语和搜索提示
	initCategories();      // 初始化文献类型下拉框和检索字段下拉框
	initSearchResults();    // 初始化搜索结果页面结果列表的高度
	initCorrectionWords();   // 在搜索结果页面加载纠错词
	initRelativeQueries();    // 在搜索结果页面加载相关搜索词
	initLanguageLink();    // 初始化切换语言时跳转的的URL
	initCurrentLanguage();  // 初始化粗体显示当前语言链接

	initSelectElements();          // 初始化所有页面上的select控件，自动选中value值
	initOrderBySlt();           // 初始化列表页的排序下拉框
	initResultFieldSlt();       // 初始化列表页的检索字段下拉列表
	initHashHandler();          // 初始化hashchange事件监听
	initCheckBoxEvent();        // 初始化结果列表页面checkbox外层超链接事件
	initOrderSltLocation();
	initShowMore();            //初始化列表页左侧删选标签
	//initShowMoreClick();            //初始化showMoreClick事件

	if (location.hash && location.hash.replace(/^#/, '').length > 0) {
		$(window).hashchange();
	}
});

function initHashHandler() {
	var isFirst = false;
	$(window).bind('hashchange', function(){
	    var hash = decodeURIComponent(location.hash);
	    var args = {};
	    var hashValue = '';
	    if (hash && (hashValue = hash.replace(/^#/, '')).length > 0) {
	    	// show overlay
	    	var overResults = $('#overResults');
	    	var loadingImg = $('#loadingImg');
	    	var main = $('#searchresult-main');
	    	if (overResults.size() == 0) {
	    		overResults = $('<div id="overResults" style="display:none; position:absolute; z-index:99; background: none repeat scroll 0% 0% white; opacity:0.9;"></div>');
	    		main.append(overResults);
	    		loadingImg = $('<div id="loadingImg" style="position:absolute; height:300px; width:300px;"><img src="' + contextPath + '/images/loading1.gif"/></div>');
	    		overResults.append(loadingImg);
	    	}
	    	overResults.width(main.width());
	    	overResults.height(main.height());
	    	overResults.css('position','absolute');
    		overResults.css('left',main.position().left);
	    	overResults.css('top',main.position().top);
	    	loadingImg.css('margin-left',(overResults.width() - 320) / 2);
	    	var loadingHeight = window.pageYOffset + (screen.availHeight - 320) / 2 - main.position().top;
	    	if (main.height > 600) {
	    		loadingHeight -= 100;
	    	}
	    	loadingImg.css('margin-top', loadingHeight);
	    	overResults.show();

	    	hashValue = hash.replace(/^#/, '');
	    	var mtArr = [];
	    	var keyValues = hashValue.split('||');
	    	for (var i = 0; i < keyValues.length; i++) {
	    		var kv = keyValues[i].split('--');
	    		if (kv.length == 2) {
	    			args[kv[0]] = kv[1];
	    		}
	    	}
	    	args['searchType'] = 2;
	    	$.post(
	    			contextPath + '/search/ajaxSearch',
	    			args,
	    			function(data){
	    				$('#searchresult-main').html(data);
	    				var curArea = $('#curArea').html();
	    				if (orginArea.length > 0 && curArea.length > 0 && hasSelected && oldArea == curArea) {
	    					$('.mNav[curArea=' + curArea + ']').html(orginArea);
	    				}
	    				$('#totalCnt').text(resultCount);
	    				overResults.hide();  // hide overlay
	    				initSearchResults();

	    				var chkItemIdxs = '';
	    		    	if (hashValue.indexOf('chkItemIdx') != -1) {
	    		    		chkItemIdxs = hashValue.substring(0, hashValue.indexOf('||'));
	    		    	}
	    		    	var chkIdxArr = new Array();
	    		    	if (chkItemIdxs.length > 0) {
	    		    		chkIdxArr = chkItemIdxs.split('--')[1].split(',');
	    		    	}
	    		    	var chkBoxes = $('input[type=checkbox]');
	    		    	for (var i = 0; i < chkBoxes.length; i++) {
	    		    		chkBoxes[i].checked = false;
	    	    		}
	    		    	mtArr = [];
	    		    	if (chkIdxArr.length > 0) {
	    		    		for (var i = 0; i < chkIdxArr.length; i++) {
	    		    			$(':checkbox[aid="' + chkIdxArr[i] + '"]').attr('checked', true);
	    		    			if ($(':checkbox[aid="' + chkIdxArr[i] + '"]').attr('field') == 'mediatype') {
	    		    				mtArr[mtArr.length] = $(':checkbox[aid="' + chkIdxArr[i] + '"]').parents('li').attr('title');
	    		    			}
	    		    		}
	    		    	}
	    		    	// init query field options
	    		    	var fields = getSameFields(mtArr);
	    		    	var html = document.getElementById('all-fields-opt').outerHTML;
	    		    	for (var i = 0; i < fields.length; i++) {
	    		    		html += '<a href="javascript:void(0);" fldText="' + fields[i] + '" code="' + fieldsCode[fields[i]] + '">'+ getStrOfAssignedLen(fields[i],30)  + '</a>';
	    		    	}
	    		    	$('#resultFldOptns').html(html);
	    		    	bindOptionClick();

	    				// init order by select
	    				if (typeof(orderBy) != "undefined" && orderBy != null && orderBy.length > 0) {
	    					$('#orderByText').html($('a[code=' + orderBy + ']').html());
	    				} else {
	    					$('#orderByText').html($('a[code="RELATIVE"]').html());
	    				}
	    				initOrderSltLocation();
	    				// init query field select
    					$('#resultFldText').html(getStrOfAssignedLen($('#fldText').html(), 30));

    					if(showcountflag==1){
    						$("#num_ico").removeClass("select");
    						$("#num_ico").addClass("selected");
    					}else{
    						$("#num_ico").removeClass("selected");
    						$("#num_ico").addClass("select");
    					}
	    				window.scrollTo(0, 0);
	    				initCorrectionWords();   // 在搜索结果页面加载纠错词
	    				initRelativeQueries();    // 在搜索结果页面加载相关搜索词
	    				initOrderBySlt();           // 初始化列表页的排序下拉框
	    				initResultFieldSlt();       // 初始化列表页的检索字段下拉列表
//	    				initHashHandler();          // 初始化hashchange事件监听
	    				initCheckBoxEvent();        // 初始化结果列表页面checkbox外层超链接事件
	    				initShowMore();            //初始化列表页左侧删选标签
	    				if(hasSelected){
	    					showMoreObject.reset(curArea);
	    				}else{
	    					showMoreObject.reset();
	    				}
	    				initSearchBar();
	    			}
	    		);

	    } else {
	    	var url = window.location.href;
	    	window.location = url.replace('#', '');
	    	window.scrollTo(0, 0);
	  }
	});
}

// 列表页点击图片或者题名进入详情页的链接拼装
function makeDetailUrl(obj, url, docID, dataSource, query) {
	var hrefUrl = url + 'docId=' + docID + '&dataSource=' + dataSource + '&query=' + encodeURIComponent(query);
	$(obj).attr("href", hrefUrl);
}

// 结果列表页面排序
function sortResults(orderBy) {
	hashChange = true;
	var extra = {'orderBy':orderBy,'queryField':queryField};
	if ($('#resultFldText').html() != $('#resultFldOptns a:eq(0)').html()) {
		extra = {'orderBy':orderBy,'queryField':queryField,'fldText':$('#resultFldText').html().Trim()};
	}
	ajaxSearch(preQuery, secQuery, actualQuery, extra, orginQuery);
}

//结果列表页面选择**中包含检索词的结果
function filterField(field, fldText) {
	var aqExtra = null;
	var extra = null;
	if (typeof(field) != "undefined" && field != null && field.length > 0 && field != "all") {
		aqExtra = field + ':' + preQuery;
		extra = {'queryField':field,'fldText':fldText};
	}
	filterResults(null, aqExtra, extra);
}

//结果列表页面的显示数量
function showcount(pageNo){
	hashChange = true;
	if(showcountflag==0){
		var extra = {'pageNo':1,'orderBy':orderBy,'queryField':queryField,'showcount':'1'};
		showcountflag=1;
	}else{
		var extra = {'pageNo':1,'orderBy':orderBy,'queryField':queryField,'showcount':'0'};
		showcountflag=0;
	}
	if ($('#resultFldText').html() != $('#resultFldOptns a:eq(0)').html()) {
		extra['fldText'] = $('#resultFldText').html().Trim();
	}
	ajaxSearch(preQuery, secQuery, actualQuery, extra, orginQuery);
}

//翻页 结果列表页面上方与下方都有
function turnSearchResultPage(pageNo) {
	hashChange = true;
	if(pageNo>60){
		pageNo=60;
	}
	ajaxSearch(preQuery, secQuery, actualQuery, {'pageNo':pageNo,'orderBy':orderBy,'queryField':queryField,'fldText':fldText,'isGroup':isGroup}, orginQuery);
}

//结果列表页面切换摘要、目录、馆藏、书评等信息Tab
var docTabs = ['summary', 'catelog', 'collection', 'comment'];
var submitFlg = false;
function toggleDocExpandInfo(ele, tab, docid, dataSource, dataSourceEn) {
	var args = {'docId':docid, 'datasource':dataSource};
	if (tab == 'collection') {
		args['lib'] = true;
	} else if (tab == 'comment') {
		args['viewComment'] = true;
	} else if (tab == 'summary') {
		args['detail'] = true;
	} else if (tab == 'catelog') {
		args['detail'] = true;
	}
	$.post(
			contextPath + '/search/recordViewLog',
			args
	);

	var info = $(ele).parents('div.info');
	var loading = $(ele).parents('.info').find('img');
	if (info.attr('extended') != 'true' && submitFlg != true) {
		submitFlg = true;
		loading.show();
		$.post(
			contextPath + '/search/showExpandInfo',
			{'docId':docid,'dataSource':dataSourceEn},
			function(data){
				submitFlg = true;
				info.after(data);
				switchDocExpandInfoTab(ele, tab);
				initArrowLocation(ele);
				info.attr('extended','true');
				loading.hide();
				submitFlg = false;
			}
		).error(function() {
			loading.hide();
		});
	} else {
		switchDocExpandInfoTab(ele, tab);
	}
	return false;
}

// 切换Tab
function switchDocExpandInfoTab(ele, tab) {
	var others = [];
	for (var i in docTabs) {
		if (docTabs[i] != tab) {
			others.push(docTabs[i]);
		}
	}
//	if ($.browser.msie && $.browser.version == "6.0") {
	if ($.browser.msie) {
		$(ele).parent().parent().parent().children('div[tab=' + tab + ']').toggle();
	} else {
		$(ele).parent().parent().parent().children('div[tab=' + tab + ']').slideToggle();
	}
	for (var i in others) {
		$(ele).parent().parent().parent().children('div[tab=' + others[i] + ']').hide();
	}
}

//结果列表页面过滤、翻页、排序、选择检索字段等均通过ajax进行检索请求的发送
function ajaxSearch(query, secQuery, actualQuery, extra, orginQuery) {
	var args = getSearchArgs(query, secQuery, actualQuery);
	if (args == null) {
		return;
	}

	if (typeof(extra) == "object" && extra != null) {
		for (var ppt in extra) {
			if (typeof(extra[ppt]) != "undefined" && extra[ppt] != null) {
				args[ppt] = extra[ppt];
			}
		}
		//add by kaisun
		args['showcount'] = showcountflag;
		//add end
	}
	if (isValid(docType)) {
		args['docType'] = docType;
	}
	if (isValid(targetField)) {
		args['targetField'] = targetField;
	}
	if (isValid(targetFieldLog)) {
		args['targetFieldLog'] = targetFieldLog;
	}
	args["orginQuery"] = orginQuery;
	//判读是否进行聚类搜索
	if (args["showcount"]<1 && (args["orderBy"]=="RELATIVE"||args["orderBy"]==null)
			&& !(/.*groupbyid:\(.*\).*/g).test(actualQuery) 
			&& (/.*isGroup=isGroup.*/g).test(location.href)){
		args["isGroup"] = "isGroup";
	}

	if (hashChange) {
		var hashValue = '';
		var chkItemIdx = '';
		var chkBoxes = $('input[type=checkbox]');
		for (var i = 0; i < chkBoxes.length; i++) {
			if (chkBoxes[i].checked == true) {
				chkItemIdx += $(chkBoxes[i]).attr('aid') + ',';
			}
		}
		if (chkItemIdx.length > 0) {
			chkItemIdx = chkItemIdx.substring(0, chkItemIdx.length - 1);
		}
		if (chkItemIdx.length > 0) {
			hashValue += 'chkItemIdx--' + chkItemIdx + '||';
		}
		for (var p in args) {
			if (typeof(args[p]) != "undefined" && args[p] != null) {
				hashValue += p + '--' + args[p] + '||';
			}
		}
		if (hashValue.length > 0) {
			hashValue = hashValue.substring(0, hashValue.length - 2);
		}
		window.location.hash=encodeURIComponent(hashValue);
	}
}

//结果列表页面二次检索
function searchInResults() {
	var resultIpt = $('#searchInResultsIpt').val().replace(/[\\\^\"\&]/g,"").replace(/(--)/g, '').replace(/\'/g, ' ');
	if (resultIpt ==$('#searchInResultsIpt').attr('defaultValue') || !isValidKeyword(resultIpt, 60)) {
		return;
	}
	$('#submit-btn').attr('disabled',"true");
	var extra = "";
	if (isValid(docType)) {
		extra+="&docType="+encodeURIComponent(docType);
	}
	if (isValid(targetField)) {
		extra+="&targetField="+encodeURIComponent(targetField);
	}
	if (isValid(targetFieldLog)) {
		extra+="&targetFieldLog="+encodeURIComponent(targetFieldLog);
	}
	if (targetFieldLog=="全部字段" ||　targetFieldLog=="All Field"){
		extra += "&isGroup=isGroup";
	}
	search(2, preQuery, $('#searchInResultsIpt').val().replace(/[\\\^\"\&]/g,"").replace(/(--)/g, '').replace(/\'/g, ' '), orginQuery, extra, orginQuery);
}

var hashChange = false;
var orginArea = '';
var hasSelected = true;
var oldArea = '';

// 列表页过滤结果
function filterResults(ele, aqExtra, extra) {
	if (ele != null) {
		hasSelected = true;
		extra['curArea'] = $(ele).parents('.mNav').attr('curArea');
		oldArea = $(ele).parents('.mNav').attr('curArea');
		orginArea = $(ele).parents('.mNav').html();
		if ($(ele).parents('.mNav').find(':checkbox:checked').size() == 0) {
			hasSelected = false;
		}
	}

	hashChange = true;
	var orgin = orginQuery;

	// assemble field arguments
	var args = {};
	var mtArr = [];
	$('input.inputCheck:checked').each(function(){
		var key = null;
		var value = null;
		key = this.getAttribute('field');
		value = this.getAttribute('code');
		if (typeof(this.getAttribute('do')) != "undefined" && this.getAttribute('do') != null && this.getAttribute('do') == 'clean') {
			value = value.replace(/\s*等$/g,'').replace(/\s*etc$/g,'').replace(/\[.*?\]/g,'').replace(/\(.*?\)/g,'');
			value = '(' + value + ')';
		}
		if(typeof(key)!="undefined" && key!=null && key.length > 0 &&  value!='all' && $(ele).attr("code")!="all"){
			if (typeof(args[key]) == "undefined" || args[key] == null) {
				args[key] = key+ ':(' +value + ') ';
			} else {
				var org = args[key];
			    var pattern = /(\().*\)/g;
			    var orgValue = org.match(pattern)[0].replace(")","").replace("(","");
				args[key] = key+ ':('+orgValue+ " OR " + value + ') ';
			}
			if (key == 'mediatype') {
				mtArr[mtArr.length] = $(this).parents('li').attr('title');
			}
		}

	});

	var actualQuery = '';
	var oq = orginQuery;

	if (typeof(secQuery) != 'undefined' && secQuery != null && secQuery != '') {
		if (oq.indexOf(':') > 0) {
			actualQuery = preQuery + ' AND ' + secQuery + oq.substring(oq.substring(0, oq.indexOf(':')).lastIndexOf(' '));
		} else {
			actualQuery = preQuery + ' AND ' + secQuery;
		}
	} else {
		actualQuery = orginQuery;
	}
	for (var prop in args) {
		if (oq.indexOf(prop + ':') >= 0) {
			actualQuery = oq.substring(0, orginQuery.indexOf(prop + ':')) + args[prop];
			if (oq.indexOf(') ', oq.indexOf(prop + ':')) >= 0) {
				actualQuery += oq.substring(oq.indexOf(') ', oq.indexOf(prop + ':')) + 2);
			}

		} else {
			actualQuery += ' ' + args[prop];
		}
		oq = actualQuery;
	}

	if (typeof(aqExtra) != "undefined" && aqExtra != null) {
		actualQuery += ' ' + aqExtra;
	}

	if(typeof(actualQuery) != "undefined" && actualQuery.length>330){
		var message = "";
		var width = 0;
		if (locale == 'zh_CN') {
			message = '过滤条件过多，请重新选择';
			width =182;
		} else {
			message = 'Too many filter conditions, please reselect';
			width = 270;
		}
		$.messager.showBySite({
			msg:message,
			showType:'fade',
			timeout:2000,
			width:width,
			height:45
		},{
			top : $(ele).position().top+$(ele).height(),//将$.messager.show的top设置为点击对象之下
			left : $(ele).position().left,//将$.messager.show的left设置为与点击对象对齐
			bottom : ""
		});

		$(ele).attr('checked', false);
		return false;
	}
	ajaxSearch(preQuery, secQuery, actualQuery, extra, orginQuery);
}

// 调整左右高度一致
function initSearchResults() {
	if ($('#searchresult-items').size() > 0) { // 判断是否是搜索结果页面
		sidebarHeight = + $('#searchresult-sidebar').height();
		childHeight = + $("#searchresult-list").height();
		if (childHeight < sidebarHeight) {
			var targetHeight = $("#searchresult-items").height() + sidebarHeight - childHeight;
			$("#searchresult-items").after('<div id="searchresult-items-div-height"></div>');
			$("#searchresult-items-div-height").height((sidebarHeight - childHeight));
		}
	}
}

// 加载纠错结果
function initCorrectionWords() {
	if (typeof preQuery == "undefined" || !preQuery || preQuery.length == 0) {
		return;
	}
	$.post(
		contextPath + '/search/getCorrectionWord',
		{'query': preQuery},
		function(data){
			if (!data || data.length == 0) {
				return;
			}
			var html = '您要找的是不是：';
			for (var i = 0; i < data.length; i++) {
				html += '<a href="javascript:void(search(2, \'' + data[i] + '\',null,null,\'&isGroup=isGroup\'));">' + data[i] + '</a>&nbsp;'
			}
			$('#correctionWords').html(html);
		},
		'json'
	);
}

// 加载相关词
function initRelativeQueries() {
	if (typeof(preQuery) == "undefined" || !preQuery || preQuery.length == 0) {
		return;
	}
	$.post(
		contextPath + '/search/getRelativeQueries',
		{'query': preQuery},
		function(data){
			if (!data || data.length == 0) {
				return;
			}
			var html = '';
			var totalLen = 0;
			var lineBreaked = false;
			for (var i = 0; i < data.length; i++) {
				if (i % 4 == 0) {
					html += '<tr>';
				}
				html += '<td><a href="javascript:void(search(2, \'' + data[i] + '\',null,null,\'&isGroup=isGroup\'));">' + data[i] + '</a></td>';
				if (i % 4 == 3) {
					html += '</tr>';
				}
			}
			if (!html.match(/tr>$/)) {
				html += '</tr>';
			}
			$('#relative-queries').html(html);
		},
		'json'
	);
}

// 初始化排序下拉框
function initOrderBySlt() {
	if (typeof(orderBy) == 'undefined' || !orderBy || orderBy.length == 0) {
		orderBy = 'RELATIVE';
	}
	$('#orderBySlt').click(function(){
		$('#orderByOptns').toggle();
	});

	$('#orderByOptns').mouseleave(function(){
		$('#orderByOptns').hide();
	});

	$('#orderByOptns a').click(function(){
		var curCtg = this.innerHTML;
		var oldOrderBy = $('#orderByText').html();
		$('#orderByText').html(curCtg);
		$('#orderBySlt').show();
		$('#orderByOptns').hide();
		if (curCtg != oldOrderBy) {
			sortResults($(this).attr('code'));
		}
	});
}

// 初始化排序下拉列表项位置
function initOrderSltLocation() {
	if ($('#orderByOptns').size() != 0) {
		$('#orderByOptns').css('left', $('.viewOrder a').position().left);
	}
}

// 初始化选择检索极字段下拉列表
function initResultFieldSlt() {
	$('#resultFldSlt').click(function(){
		$('#resultFldOptns').toggle();
	});
	$('#resultFldOptns').mouseleave(function(){
		$('#resultFldOptns').hide();
	});
	bindOptionClick();
}

// 初始化选择检索极字段下拉列表项的点击事件
function bindOptionClick() {
	$('#resultFldOptns a').click(function(){
		var curCtg = this.innerHTML;
		var oldResultFld = $('#resultFldText').html();
		$('#resultFldText').html(curCtg);
		$('#resultFldSlt').show();
		$('#resultFldOptns').hide();
		if (curCtg != oldResultFld) {
			filterField($(this).attr('code'), $(this).attr('fldText'));
		}
	});
}

// 过滤项checkbox点击事件
function initCheckBoxEvent() {
	$('.sideFilter').find('li a').each(function() {
		$(this).click(function() {
			var chk = $(this).find(":checkbox");
			if (typeof(chk.attr('checked')) == 'undefined' || chk.attr('checked') == false) {   //checkbox原来是未选中状态
				chk.attr('checked', 'true');
				if ($(this).parents('.subNav').size() == 0) {
					var mattr = $(this).attr('mattr');
					$('ul[mattr=' + mattr + ']').find('li :checkbox').attr('checked', 'true');
				} else {
					if ($(this).parents('.subNav').find(':checkbox').size() == $(this).parents('.subNav').find(':checkbox:checked').size()) {
						$(this).parents('.subNav').prev().find(':checkbox').attr('checked', 'true');
					}
				}
			} else {
				chk.removeAttr('checked');
				if ($(this).parents('.subNav').size() == 0) {
					var mattr = $(this).attr('mattr');
					$('ul[mattr=' + mattr + ']').find('li :checkbox').removeAttr("checked");
				} else {
					if ($(this).parents('.subNav').find(':checkbox').size() == $(this).parents('.subNav').find(':checkbox:not(checked)').size()) {
						$(this).parents('.subNav').prev().find(':checkbox').removeAttr('checked');
					}
				}
			}

			var extra = {};
			var aqExtra = '';
			if (typeof(orderBy) != 'undefined' && orderBy != null && orderBy.length != 0) {
				extra['orderBy'] = orderBy;
			}
			if (typeof(queryField) != 'undefined' && queryField != null && queryField.length != 0) {
				extra['queryField'] = queryField;
				aqExtra += queryField + ':' + preQuery;
			}
			if (typeof(fldText) != 'undefined' && fldText != null && fldText.length != 0) {
				extra['fldText'] = fldText;
			}

			filterResults(chk, aqExtra, extra);
			return false;
		});
	});

	$('.sideFilter').find(':checkbox').each(function() {
		$(this).click(function(event) {
			event.stopPropagation();
			if (typeof( $(this).attr('checked')) == 'undefined' ||  $(this).attr('checked') == false){
				 $(this).attr("checked","true");
			}else{
				$(this).removeAttr('checked');
			}
			var te = $(this).parents("a").click();
		});
	});
}

// 初始化摘要、目次、馆藏信息等的下拉箭头位置
function initArrowLocation(obj) {
	var name = $(obj).attr('name');
	if ($(obj).parents('.item').find('.img').size() == 0) {
		$(obj).parents('.item').find('.wjPopup').each(function() {
			var cls = $(this).find('.arrow').attr('class');
			$(this).find('.arrow').attr('class', cls.replace('summary', 'summary_n').replace('catalogue', 'catalogue_n').replace('holdingInfo', 'holdingInfo_n'));
		});
	}
}

// 初始化“显示更多”
var showMoreObject = {
		eachShowNum:5,   //每次新增标签个数
		defaultStartIndex:0, //显示开始下标
		yearint:0,
		language:0,
		datasource:0,
		dataowner:0,
		firstcreator:0,
		noRefreshField:["eachShowNum","defaultStartIndex","reset","noRefreshField"],
		reset:function(norefreshfield){
				for(var field in showMoreObject){
					var needRefresh = true;
					for(var prop in this.noRefreshField){
	 					if(field==this.noRefreshField[prop] ||(norefreshfield && norefreshfield==field) ){
	                       needRefresh = false;
						   break;
						}
					}
				if(needRefresh){
					this[field] = 0;
				}
	        }
	  }
}

function initShowMore(field){
	var showStartIndex = showMoreObject.defaultStartIndex;
	if(typeof(field)!="undefined" && field!=null){
		showStartIndex =  showMoreObject[field];
	}
	var showEndIndex = 0;			//增加的最后一个标签的下标

	var operateObj = null;
	if(typeof(field)!="undefined" && field!=null){
		operateObj = $('.sideFilter').find("div[id='more'][field='"+field+"']");
	}else{
		operateObj = $('.sideFilter').find("div[id='more']");
	}

	operateObj.each(function(){
		var currentfield = $(this).attr("field");
		//更改要显示的标签的display属性
		var length =  $('.sideFilter').find(':checkbox[field="'+currentfield+'"]').length;
		if(typeof(field)!="undefined" && field!=null){
			showEndIndex = showMoreObject[field]+showMoreObject.eachShowNum >= length ? length :showMoreObject[field]+showMoreObject.eachShowNum;
		}else{
			showEndIndex = showMoreObject.defaultStartIndex+showMoreObject.eachShowNum >= length ? length :showMoreObject.defaultStartIndex+showMoreObject.eachShowNum;
		}
		$('.sideFilter').find(':checkbox[field="'+currentfield+'"]')
		.parents("li:lt("+showEndIndex+"):gt("+(showStartIndex)+"),li:eq("+showStartIndex+")").attr("style","display:block");

		//判断是否显示show more
		var display = $('.sideFilter').find(':checkbox[field="'+currentfield+'"]').parents("li:last").attr("style");

		var blockReg = /.*?(?:block).*/;
		if(length==0 || (typeof(display)!="undefined" && display!=null && blockReg.test(display)) ){
			$(this).attr("style","display:none;")
		}
	});
}

function initShowMoreClick(obj) {
		var currentfield = $(obj).attr("field");
		showMoreObject[currentfield] = showMoreObject[currentfield]+showMoreObject.eachShowNum;
		initShowMore(currentfield);
}
function groupResultButtonClick(searchType, query, secQuery, actual) {
	var extraUrl = "";
	var docType = $('div.wj_subNav a.current').attr("title");
	if (typeof(docType) != 'undefined' && docType != null && docType.length > 0) {
		extraUrl += '&docType=' + encodeURIComponent(docType);
	}
	
	var secArr = topCategories[docType];
	if (typeof(secArr) != 'undefined' && secArr != null) {
		var subTypes = [];
		for (var i = 0; i < secArr.length; i++) {
			subTypes.push(categoriesCode[secArr[i]]);
		}
		if (subTypes.length > 0){
			actual += ' mediatype:(' + subTypes.join(' OR ') + ') ';
		}
	}
	search(searchType, query, secQuery, actual,extraUrl,null,null,"yes");
}