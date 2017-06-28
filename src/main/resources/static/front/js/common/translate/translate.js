//jQuery.noConflict();

//jQuery(function($) {

var _translTypeCE = 'ce';
var _translTypeEC = 'ec';

var translateResult = '';

//自有翻译接口
function yunrangTranslateAction(translateUrl,type,text,callback){
	 var url = contextPath + '/translate/translate?type=' + type + '&text=' + text;
	 jQuery.ajax({
		 type:"GET",
		 url : url,
		 success:function(msg){
			 var jsonMsgData = Ext.util.JSON.decode(msg);
			 translateResult = Ext.encode(jsonMsgData.result);
			 callback(Ext.encode(jsonMsgData.result));
		 }
	 });
}


// bing 翻译
function bingTranslateAction(translateUrl,type,text,callback){
	    window.mycallback = function(response) {
	    		// 如果bing的接口翻译成功，则调用回调函数
				if(response != null && response != ''){
					 translateResult = response;
					 callback(response);
				}
	     }
	    var s = document.createElement("script");
	    s.src = translateUrl;
	    document.getElementsByTagName("head")[0].appendChild(s);
}


//翻译通用API，先调用bing，后调用自有接口
function yrTranslate() {

		//存储setInterval函数的返回id
	   var intervalId = null;

		var _args = arguments;
		if(_args == null || _args.length != 3){
			return "please input _args !";
		}

		// bing的翻译接口
		var _bingTransUrl = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=mycallback&appId=A4D660A48A6A97CCA791C34935E4C02BBB1BEC1C";

		var _bingTranslateUrl;


		// 如果第一个参数的长度是0，则返回错误提示
		if( jQuery.trim(_args[0]).length == 0 ){
			return "the first parameter length is 0";
		}

		// 如果第二个参数的长度是0，则返回错误提示
		if( jQuery.trim(_args[1]).length == 0 ){
			return "the second parameter length is 0";
		}

		if( jQuery.trim(_args[1]) == _translTypeEC){
			// 按bing翻译
			_bingTranslateUrl = _bingTransUrl + '&from=en&to=zh-cn&text=' + _args[0];
			// 按英译中操作翻译
			bingTranslateAction(_bingTranslateUrl,_translTypeEC,_args[0],_args[2]);
		}

		if( jQuery.trim(_args[1]) == _translTypeCE){
			// 按bing翻译
			_bingTranslateUrl = _bingTransUrl + '&from=zh-cn&to=en&text=' + _args[0];
			// 按中译英操作翻译
			bingTranslateAction(_bingTranslateUrl,_translTypeCE,_args[0],_args[2]);
		}


		//循环检查是否bing返回翻译结果，如果没有则调用自有翻译接口
		var intervalNumber = 0;
		var intervalId = setInterval(
				function (){
					if(intervalNumber >= 3){
						intervalNumber = 0;
						translateResult = '';
						if( jQuery.trim(_args[1]) == _translTypeEC){
							yunrangTranslateAction(_bingTranslateUrl,_translTypeEC,_args[0],_args[2]);
						}else{
							yunrangTranslateAction(_bingTranslateUrl,_translTypeCE,_args[0],_args[2]);
						}
						//如果返回结果了就将setInterval停止
						clearInterval(intervalId);
						return;

					}

					//如果翻译结果等于空，则intervalNumber自增，如果大于3次，也就是3秒，则开始调用自有翻译接口
					if(translateResult == ''){
						intervalNumber ++;
					}

				}
		,1000);
}

//yrTranslate('我生','ce',function(translate){
//  alert(translate);
//});

//yrTranslate('i am a student','ec',function(translate){
//  alert(translate);
//});
//});

var ipt = null

function translate2en(cur) {
	ipt = $(cur).parent().prev().find('input');
	var text = ipt.val();
	if (typeof(text) == "undefined" || !text || text.length == 0) {
		return;
	}
	yrTranslate(text,'ce',translateCallback);
	return false;
}

function translate2zh(cur) {
	ipt = $(cur).parent().prev().find('input');
	var text = ipt.val();
	if (typeof(text) == "undefined" || !text || text.length == 0) {
		return;
	}
	yrTranslate(text,'ec',translateCallback);
}

function translateCallback(result) {
	var info = null;
	var title = null;
	ipt.val(result);
	generateSearchExpression();

}


