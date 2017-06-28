$(function(){
	initAdvancedHtmlEvents();    // 初始化高级检索页
	initLanguageLink();    // 初始化切换语言时跳转的的URL
	initCurrentLanguage();  // 初始化粗体显示当前语言链接
	initSelectElements();          // 初始化所有页面上的select控件，自动选中value值
//	initCheckYear();            // 高级检索检查输入年份
	initAdvancedSearchTranslateLink();
	initAdvanceSearchTypeRadio();
});


var keyword = null;

var logicIndex = 1;

function initAdvanceSearchTypeRadio(){
	$('input[type=radio][name="searchtype"][value="logicsearch"]').attr("checked",true);
	$('input[type=radio][name="searchtype"]').click(function(){
		var currentTab = $(this).attr("value");
		if(currentTab!= null && currentTab=="fulltextsearch"){
			$("#logicSearchTab").hide();
			$("#fullTextSearchTab").show();
			//alert($("#docTypeSlt")[2].val());
		}else{
			$("#fullTextSearchTab").hide();
			$("#logicSearchTab").show();
		}
	})
}
function initAdvancedHtmlEvents() {
	if ($('div.advanceSearch').size() == 0) {
		return;
	}
	initCtgSltBoxes();  // 初始化下拉框
	$('#addSearchCriteriaBtn').click(function(){
		if ($('input[id^=criteriaIpt-]').size() >= 3) {
			return;
		}
		var html = '<div class="item fn-clear" style="display:none;" id="logicSltDiv">';
		html += '<select class="w120 aOR">';
		html += '<option value="AND">' + $('#andText').html() + '</option>';
		html += '<option value="OR">' + $('#orText').html() + '</option>';
		html += '<option value="-">' + $('#notText').html() + '</option>';
		html += '</select>';
		html += '<div class="blk5"></div>';
		html += '</div>';
		var div = $(html);
		var ele = null;
		$('#searchCriteriaBottom').before(div);
		ele = div.find('select');
		ele.attr('id','logicLink-' + logicIndex);
		ele.change(generateSearchExpression);
		div.show();
		var html = '<div class="item fn-clear" style="display:none;" id="searchCriteriaDiv">';
		html += '<div class="feeds fl">';
		if($('#docTypeSlt').val()==allDocType){
			html += '<select class="w120 fieldSlt" disabled="true"></select>';
		}else{
			html += '<select class="w120 fieldSlt"></select>';
		}
		
		html += '</div>';
		html += '<div class="feeds fl">';
		html += '<p>';
		html += '<input type="text" maxlength="60" class="inputTxt w408"/>';
		html += '</p>';
		if (!($.browser.msie && ($.browser.version == "6.0") && !$.support.style)){
			html += '<p class="translate" toEN="' + $('#toENText').html() + '" toCH="' + $('#toCHText').html() + '">';
			if ($('.translate:eq(0)').next('a').size != 0) {
				html += '<a href="javascript:void(0);" onclick="translate2zh(this)">' + $('#toCHText').html() + '</a>&nbsp;-&nbsp;&nbsp;<a href="javascript:void(0);" onclick="translate2en(this)">'+$('#toENText').html()+'</a>';
			}
			html += '</p>';
		}
		html+='</div>';
		html += '<div class="feeds fl">';
		html += '<p>';
		html += '<input type="button" class="formBtn" value="' + $('#delConText').html() + '"/>';
		html += '</p>';
		html += '</div>';
		html += '</div>';
		div = $(html);
		$('#searchCriteriaBottom').before(div);
		ele = div.find('select');
		ele.attr('id','fieldSlt-' + logicIndex);
		ele.html($('#fieldSlt-0').html());
		ele.change(generateSearchExpression);
		ele = div.find('input[type=text]');
		ele.attr('id','criteriaIpt-' + logicIndex);
		if ($.browser.msie) {
			ele.bind('propertychange',generateSearchExpression);
		} else {
			ele.bind('input',generateSearchExpression);
		}
		ele = div.find(':button');
		ele.attr('id','delSearchCriteriaBtn-' + logicIndex);
		ele.click(function(){
			$(this).parents('#searchCriteriaDiv').prev().remove();
			$(this).parents('#searchCriteriaDiv').remove();
			generateSearchExpression();
		});
		div.find("input[type='text']").attr("value","");
		div.show();
		//$('#searchCriteriaDiv').find('input[type=text]').removeAttr('id');
		logicIndex++;
	});
	$('select[name^=criteria-]').change(generateSearchExpression);
	if($.browser.msie) {
		$('input:text[name^=criteria-]').bind('propertychange',generateSearchExpression);
	} else {
		$('input:text[name^=criteria-]').bind('input',generateSearchExpression);
	}
	$('input:text[name^=criteria-]').bind('blur',generateSearchExpression);
	$('input:checkbox[name^=criteria-]').click(generateSearchExpression);
	$('input:radio[name^=criteria-]').click(generateSearchExpression);
	
	generateSearchExpression();
}

// 高级检索生成检索字符串
function generateSearchExpression() {
	var expsn = ''
	var refine = false;
	if ($('input[name=criteria-fuzzySearch]:checked').val() == "false") {
		refine = true;
	}

	var docType = $('#docTypeSlt').val();
	if (typeof(docType) != "undefined" && docType && docType.length > 0
		&& typeof( topCategories[docType]) != "undefined" &&  topCategories[docType] &&  topCategories[docType].length > 0) {
		expsn += ' mediatype:('
		var arr = topCategories[docType];
		var isFirst = true;
		for (var i = 0; i < arr.length; i++) {
			if (!isFirst) {
				expsn += ' OR '
			}
			expsn += categoriesCode[arr[i]];
			isFirst = false;
		}
		expsn += ')';
	}

	var acQuery = "";
	for (var i = 0; i < logicIndex; i++) {
		//拼接逻辑关系字符串
		var iptValue = "";
		if ($('#criteriaIpt-' + i).size() != 0) {
			iptValue = $('#criteriaIpt-' + i).val().replace(/(--)/g, '').replace(/\'/g, ' ');
		}
		if (iptValue && iptValue.length > 0) {
			var logicStr = $('#logicLink-' + i).val();
			if(i>0 && typeof(logicStr)!="undefined" && logicStr!=null && logicStr.length>0){
				acQuery += " "+$('#logicLink-' + i).val()+" ";
			}
			acQuery += "("+iptValue;
			if (typeof(fieldsCode[$('#fieldSlt-'+ i).val()])!="undefined" && fieldsCode[$('#fieldSlt-'+ i).val()]!=null){
				acQuery = acQuery +" "+ fieldsCode[$('#fieldSlt-'+ i).val()]+":("+iptValue+")";
			}
			acQuery +=")";
			
			if (i == 0) {
				keyword = wrapKeyword(refine, $('#criteriaIpt-' + i).val().replace(/(--)/g, '').replace(/\'/g, ' '));
			}
			/*iif (typeof(fieldsCode[$('#fieldSlt-'+ i).val()])!="undefined" && fieldsCode[$('#fieldSlt-'+ i).val()]!=null){
				if(i == 0){
					expsn += ' AND ';
				}
				if (expsn.indexOf(fieldsCode[$('#fieldSlt-'+ i).val()] + ':') > 0) {
					var idx = expsn.indexOf(fieldsCode[$('#fieldSlt-'+ i).val()] + ':');
					var preKey = expsn.substring(idx + fieldsCode[$('#fieldSlt-'+ i).val()].length + 2, expsn.indexOf(') ', idx));
					expsn = expsn.substring(0, idx) + fieldsCode[$('#fieldSlt-'+ i).val()] + ':(' + preKey + ' '
								+ $('#logicLink-' + i).val() + ' ' + $('#criteriaIpt-' + i).val().replace(/(--)/g, '').replace(/\'/g, ' ') + ') ';
				} else if (i > 0){
					expsn += ' ' + $('#logicLink-' + i).val() + ' ';
					expsn += ' ' + fieldsCode[$('#fieldSlt-'+ i).val()] + ':(' + $('#criteriaIpt-' + i).val().replace(/(--)/g, '').replace(/\'/g, ' ') + ') ';
				} else {
					expsn += ' ' + fieldsCode[$('#fieldSlt-'+ i).val()] + ':(' + $('#criteriaIpt-' + i).val().replace(/(--)/g, '').replace(/\'/g, ' ') + ') ';
				}
			}*/
		}else{
			if(i==0){
				keyword = null;
			}
		}
	}
	expsn = "(" +acQuery + ")" + expsn;


	var yearFrom = $('#yearCriteriaFrom').val();
	if (yearFrom.length > 0) {
		expsn += ' AND yearint>=' + yearFrom;
	}
	var yearTo = $('#yearCriteriaTo').val();
	if (yearTo.length > 0) {
		expsn += ' AND yearint<=' + yearTo;
	} else if (yearTo.length == 0 && yearFrom.length > 0) {
		expsn += ' AND yearint<=2050';
	}

	var isLabelAdded = false;
	var isAdded = false;
	$('input[name=criteria-showTarget]').each(function(){
		if (this.checked) {
			if (!isLabelAdded) {
				expsn += ' AND haveurl:1';
				isLabelAdded = true;
			}
			if (isAdded) {
				expsn += ',';
			}
//			expsn += this.value;
			isAdded = true;
		}
	});

	isLabelAdded = false;
	isAdded = false;
	$('input[name=criteria-targetLibrary]').each(function(){
		if (this.checked) {
			if (!isLabelAdded) {
				expsn += ' AND dataowner:';
				isLabelAdded = true;
			}
			if (isAdded) {
				expsn += ',';
			}
			expsn += this.value;
			isAdded = true;
		}
	});

	$('#searchExpression').val(expsn.replace(/\s+$/, ''));
}

// 高级检索页面检索按钮事件
function searchCriteria() {
	var expression = "";
	var extra = "&targetFieldLog="+encodeURIComponent($("#fieldSlt-0").val()); 
	var currDocType = $('#docTypeSlt').val();
	if($("input:[type='radio']:[name='searchtype']:checked").val()=="fulltextsearch"){
		keyword = $("#fullTextSearchInput").val();
		expression = "("+keyword+")";
		
		if (typeof(currDocType) != "undefined" && currDocType && currDocType.length > 0
				&& typeof( topCategories[currDocType]) != "undefined" &&  topCategories[currDocType] &&  topCategories[currDocType].length > 0) {
				expression += ' AND mediatype:(';
				var arr = topCategories[currDocType];
				for (var i = 0; i < arr.length; i++) {
						expression += categoriesCode[arr[i]];
						if(i!=arr.length-1){
							expression += ' OR ';
						}
						
				}
				expression += ')';
			}
		expression += " AND isfulltext:0";
		
		var yearFrom = $('#yearCriteriaFrom').val();
		if (yearFrom.length > 0) {
			expression += ' AND yearint>=' + yearFrom;
		}
		var yearTo = $('#yearCriteriaTo').val();
		if (yearTo.length > 0) {
			expression += ' AND yearint<=' + yearTo;
		} else if (yearTo.length == 0 && yearFrom.length > 0) {
			expression += ' AND yearint<=2050';
		}

		var isLabelAdded = false;
		var isAdded = false;
		$('input[name=criteria-showTarget]').each(function(){
			if (this.checked) {
				if (!isLabelAdded) {
					expression += ' AND haveurl:1';
					isLabelAdded = true;
				}
				if (isAdded) {
					expression += ',';
				}
//				expsn += this.value;
				isAdded = true;
			}
		});

		isLabelAdded = false;
		isAdded = false;
		$('input[name=criteria-targetLibrary]').each(function(){
			if (this.checked) {
				if (!isLabelAdded) {
					expression += ' AND dataowner:';
					isLabelAdded = true;
				}
				if (isAdded) {
					expression += ',';
				}
				expression += this.value;
				isAdded = true;
			}
		});
		extra = "&docType="+encodeURIComponent($('#docTypeSlt').val());
	}else{
	    extra = "&docType="+encodeURIComponent($("#docTypeSlt").val());
		extra += "&targetFieldLog="+encodeURIComponent($("#fieldSlt-0").val());
		expression = $('#searchExpression').val();
	}
	
	if (!keyword || keyword.length == 0  || keyword.Trim().length == 0) {
		if (locale == 'zh_CN') {
			alert("请输入关键词");
		} else {
			alert("input keyword please");
		}
		return;
	}
	keyword = keyword.Trim().replace(/[\\\^\"\&]/g,"").replace(/\'/g, ' ');
	if($("input:[type='radio']:[name='searchtype']:checked").val()=="fulltextsearch"){
		if(!isValidKeyword(keyword,60)){
			return;
		}
	}else{
		if(!isValidKeyword(keyword,30)){
			return;
		}
		var valid = true;
	    $("#criteriaFieldSet div.item div.feeds p input[id*='criteriaIpt']").each(function(){
	    	if(!isValidKeyword($(this).val(),30)){
	    		valid = false;
	    	}
	    })
	     if(!valid){
	    	 return;
	     }
	}
	
	var yearRegex = /^[1-9]\d{0,3}$/;
	var yearFrom = $('#yearCriteriaFrom').val();
	var yearTo = $('#yearCriteriaTo').val();
	if(yearFrom && yearFrom.length>0 && !yearRegex.test(yearFrom)){
		if (locale == 'zh_CN') {
			alert("年份格式有误");
		} else {
			alert("year data format error");
		}
		return;
	}
	if(yearTo && yearTo.length>0 && !yearRegex.test(yearTo)){
		if (locale == 'zh_CN') {
			alert("年份格式有误");
		} else {
			alert("year data format error");
		}
		return;
	}
	if(yearTo && yearTo.length>0 && yearFrom && yearFrom.length>0 && yearTo-yearFrom<0){
		if (locale == 'zh_CN') {
			alert("开始年份不能大于结束年份");
		} else {
			alert("year range error");
		}
		return;
	}
	if (yearTo - '3000' > 0) {
		if (locale == 'zh_CN') {
			alert("结束年份不能大于3000");
		} else {
			alert("end year should be no more than 3000");
		}
		return;
	}
	
	search(0, keyword, null, expression, extra, expression);
}

//模糊检索，页面入口已经被注释
function wrapKeyword(refine, keyword) {
	if (refine) {
		return '"' + keyword + '"';
	} else {
		return keyword;
	}
}

// 初始化年份检查
function initCheckYear() {
	var yearFrom = '';
	var yearTo = '';
	var bindEle = "";
	if ($.browser.msie) {
		bindEle = "propertychange";
	} else {
		bindEle = "input";
	}
	$('#yearCriteriaFrom').bind(bindEle,function(){
		var msg = '';
		if ($(this).val().length > 0) {
			if ($(this).val().length > 4 || !isYearValue($(this).val())) {
				if (locale == 'zh_CN') {
					msg = '年份格式有误';
				} else {
					msg = 'year data format error';
				}
			} else {
				yearFrom = $(this).val();
			}
		} else {
			yearFrom = '';
		}

		if (msg.length > 0) {
			alert(msg);
		}

	});
	$('#yearCriteriaTo').bind(bindEle,function(){
		var msg = '';
		if ($(this).val().length > 0) {
			if ($(this).val().length > 4 || !isYearValue($(this).val())) {
				if (locale == 'zh_CN') {
					msg = '年份格式有误';
				} else {
					msg = 'year data format error';
				}
			} else {
				yearTo = $(this).val();
			}
		} else {
			yearTo = '';
		}
		if (msg.length > 0) {
			alert(msg);

		}
	});
}

// 翻译在IE6不可用
function initAdvancedSearchTranslateLink(){
	var transElement = $(".translate");
	if(transElement.length>0){
		if (!($.browser.msie && ($.browser.version == "6.0") && !$.support.style)){
			var toEn = transElement.attr("toEN");
			var toCh = transElement.attr("toCH");
			var translateLink ='<a href="javascript:void(0);" onclick="translate2zh(this)">'+toCh+'</a>&nbsp;-&nbsp;&nbsp;<a href="javascript:void(0);" onclick="translate2en(this)">'+toEn+'</a>'
			transElement.append(translateLink);
		}
	}
}