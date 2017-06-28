// init
$(function(){
	initDocTypeLink();    				 // 初始化文献类型链接的事件处理器,定义在common.js
	initSearchBar();    				 // 初始化搜索框，包括输入提示语和搜索提示,定义在common.js
	initCategories();     				 // 初始化文献类型下拉框和检索字段下拉框,定义在common.js
    initSelectElements();				 // 初始化下拉列表值，定义在common.js
});

//记录在线阅读log
function deleteMyFavour(id) {
	$.post(
			contextPath + '/user/deleteMyFavour',
			{'id': id}
	);
	if (locale == 'zh_CN') {
		alert("删除成功");
	} else {
		alert("Delete my favour success");
	}
	window.location.reload();
}