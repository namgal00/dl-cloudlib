// init
$(function(){
	initDocTypeLink();     // 初始化搜索框上面文献类型链接的事件处理器
	initSearchBar();     // 初始化搜索框，包括输入提示语和搜索提示
	initCategories();      // 初始化文献类型下拉框和检索字段下拉框
//	initTagClound();         // 初始化标签云
	initLanguageLink();    // 初始化切换语言时跳转的的URL
	initCurrentLanguage();  // 初始化粗体显示当前语言链接
});

function initTagClound(){
	try {
		$("#tag_container>ul").wrap("<div class='wrap' ></div>").parent().css({'width':'750','height':'108'});
		var options = {
			"range" : [ -100, 250],
			"gravity" : -0.5, // 重力
			"xPos" : 0.5, // 标签区域中的X坐标，百分比
			"yPos" : 0.5, // 标签区域中的Y坐标，百分比
			"gravityVector" : [ 0, 0, 1], // 动画方向，[左->右，下->上，里->外]
			"interval" : 20, // 刷新频率
			"hoverGravityFactor" : -0.1 // 鼠标悬浮时的重力
		};

		if($.browser.msie) {
			options = {
					"range" : [ -100, 250],
					"gravity" : -3, // 重力
					"xPos" : 0.5, // 标签区域中的X坐标，百分比
					"yPos" : 0.5, // 标签区域中的Y坐标，百分比
					"gravityVector" : [ 0, 0, 1], // 动画方向，[左->右，下->上，里->外]
					"interval" : 20, // 刷新频率
					"hoverGravityFactor" : -0.3 // 鼠标悬浮时的重力
				};
		}
		$("div.wrap").starfieldTagCloud(options);
	} catch (e) {
		return;
	}
}

function showUserRecommend(){
	var ip=getQueryString('uid');
	$.post(
		contextPath + '/search/userRecommend?uid='+ip,
		function(data){
			if (!data || data.length == 0) {
				return;
			}
			var html = '';
			var totalLen = 0;
			var lineBreaked = false;
			for (var i = 0; i < data.length; i++) {
				if (i % 4 == 0) {
					html += '<li  class="last">';
				}else{
					html += '<li>';
				}
				var bookName = data[i].title;
				if(bookName.length>8){
					bookName = bookName.substring(0,8)+"...";
				}
				
				html += '<a  href="' + contextPath + '/search/showDocDetails?docId=' + data[i].strDocid + '&dataSource=' + data[i].dataSource + '" onclick="recomendbook('+data[i].strDocid+',\''+data[i].dataSource+'\');return false;" title="'+ data[i].title +'" target="_blank"><img src="' + contextPath + '/pictures/icon_'+ data[i].mediaType +'.png" style="vertical-align:-2px; margin-right:5px;"/>' + bookName + '</a>'
				html += '</li>';
			}
			$('#recommend').show();
			$('#relative-queries').html(html);
		},
		'json'
	);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return '';
}


//记录查看相关书籍推荐的log
function recomendbook(docId,datasource) {
	// record recommend log
	$.post(
			contextPath + '/search/recordViewLog',
			{'docId': docId, 'resname':title, 'recommand':true, 'datasource':datasource}
	);
}