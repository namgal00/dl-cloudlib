var indexNum = -1;
var GLOBAL_SUBFIELDSIGN = '▼';
//获取字段中的子字段
function getSubFieldVal(fieldStr,subSplit){
	if(fieldStr.indexOf(subSplit)==-1)return "";
	var subFieldVal=fieldStr.substring(fieldStr.indexOf(subSplit)+subSplit.length);
	if(subFieldVal.indexOf(GLOBAL_SUBFIELDSIGN)!=-1)subFieldVal=subFieldVal.substring(0,subFieldVal.indexOf(GLOBAL_SUBFIELDSIGN));
	return subFieldVal;
};

//修改子字段的值
function updateSubField(fieldStr,_subField,fieldValue){
	var subFieldArr=fieldStr.split(GLOBAL_SUBFIELDSIGN);
	var tmpVal='';
	var newVal='';
	var isUpdate=false;
	for(var i=0;i<subFieldArr.length;i++){
		tmpVal=subFieldArr[i];
		//这里大于2,是过滤掉没有内容的子字段，如 a b c。都会被过虑掉哦
		if(tmpVal==''||tmpVal.length<1){
			continue;
		}
		var _thisfieldValue=tmpVal;
		if(tmpVal.substring(0,_subField.length)==_subField){
			_thisfieldValue=tmpVal.substring(0,_subField.length)+fieldValue;
			isUpdate=true;
		}
		newVal=newVal+GLOBAL_SUBFIELDSIGN+_thisfieldValue;
		//var _subField
	}
	if(!isUpdate){
		if(arguments.length==4) {
			return insertSubField(fieldStr,_subField,fieldValue,arguments[3]);	//这里添加传递第四个参数，该参数是排在该子字段前的参数
		} else {
			return insertSubField(fieldStr,_subField,fieldValue);
		}
	}
	//alert("newVal"+"="+newVal);
	return newVal;
};
//往字符串fieldStr中增加一个子字段值为fieldValue。_subField是单个字母。如：a
function insertSubField(fieldStr,_subField,fieldValue){
	if(_subField==''||fieldValue=='')return fieldStr;
	var subFieldArr=fieldStr.split(GLOBAL_SUBFIELDSIGN);
	var tmpVal='';
	var newVal='';
	var isInsert=false;
	/*-***这里获取需要排在他前面的参数***modifyByWerwolf****20080813*-*/
	var beforeSubField = "";
	if(arguments.length==4) {
		beforeSubField = arguments[3];
	}
	for(var i=0;i<subFieldArr.length;i++){
		tmpVal=subFieldArr[i];
		//这里大于2,是过滤掉没有内容的子字段，如a b c。都会被过虑掉哦
		if(tmpVal==''||tmpVal.length<2)
			continue;
		//alert(tmpVal);
		if(tmpVal.charAt(0)<_subField){
			newVal+=GLOBAL_SUBFIELDSIGN+tmpVal;
		}else if(tmpVal.charAt(0)>_subField){
			if(!isInsert){
				if(beforeSubField.indexOf(tmpVal.charAt(0))==-1) {	//这里判断是否是在他前面
					newVal+=GLOBAL_SUBFIELDSIGN+_subField+fieldValue;
					isInsert=true;
				}
			}
			newVal+=GLOBAL_SUBFIELDSIGN+tmpVal;
		}else{
			newVal+=GLOBAL_SUBFIELDSIGN+_subField+fieldValue;
			isInsert=true;
		}
	}
	if(!isInsert){
		newVal+=GLOBAL_SUBFIELDSIGN+_subField+fieldValue;
	}
	//alert("newVal"+"="+newVal);
	return newVal;
};
//获取多个子字段
function getSubFieldValMore(fieldStr,subSplit){
	var str="";
	while(fieldStr.indexOf(subSplit)!=-1)
	{	
		fieldStr=fieldStr.substring(fieldStr.indexOf(subSplit)+subSplit.length);
		if(fieldStr.indexOf(GLOBAL_SUBFIELDSIGN)!=-1)
		{
			str = str+fieldStr.substring(0,fieldStr.indexOf(GLOBAL_SUBFIELDSIGN))+";";
			fieldStr = fieldStr.substring(fieldStr.indexOf(GLOBAL_SUBFIELDSIGN));
		}else{
			str = str+fieldStr;	
		}
	}
	return str;
};
//去掉ISBN中的横扛
function del_(srcIsbn){
	var beforeStr=new String("");
	var afterStr=srcIsbn;
	while(afterStr.indexOf("-")>-1){
		beforeStr=beforeStr+afterStr.substring(0,afterStr.indexOf("-"));
		afterStr=afterStr.substring(afterStr.indexOf("-")+1);
	}
	beforeStr=beforeStr+afterStr;
	return beforeStr;
};
//从isbn中获取出版社code
function getPubStr(isbnStr){
	var srcIsbn=del_(isbnStr);
	var pubStr="";
	var isbnArr=isbnStr.split("-");
	if(isbnStr.indexOf("-")!=-1){
		if((srcIsbn.length==10||srcIsbn.length==9)&&isbnArr.length>2){
			return (isbnArr[0]+"-"+isbnArr[1]);
		}else if((srcIsbn.length==13||srcIsbn.length==12)&&isbnArr.length>3){
			return (isbnArr[1]+"-"+isbnArr[2]);
		}
	}
	return (pubStr);
};
//生成005字段的时间
function getTime() //get time string 
{
	var curtime = new Date();
	var mill = Date.parse(curtime);
	var millsec=curtime.getMilliseconds();
	var millsec=parseInt(millsec / 100);
	var today = curtime.getFullYear() + ""
			+ lengthadd(curtime.getMonth() + 1) + ""
			+ lengthadd(curtime.getDate()) + ""
			+ lengthadd(curtime.getHours()) + ""
			+ lengthadd(curtime.getMinutes()) + ""
			+ lengthadd(curtime.getSeconds()) + "." + millsec;
	return today;
};
function lengthadd(Str) {
	var addStr = new String(Str);
	if (addStr.length == 1)
		addStr = "0" + addStr;

	return addStr;
};
function getTime() //get time string 
{
	var curtime = new Date();
	var mill = Date.parse(curtime);
	var millsec = curtime.getMilliseconds();
	var millsec = parseInt(millsec / 100);
	var today = curtime.getFullYear() + ""
			+ lengthadd(curtime.getMonth() + 1) + ""
			+ lengthadd(curtime.getDate()) + ""
			+ lengthadd(curtime.getHours()) + ""
			+ lengthadd(curtime.getMinutes()) + ""
			+ lengthadd(curtime.getSeconds()) + "." + millsec;
	return today;
};
function getIdentifyIndex(identify){
	var index=-1;
	for(var i=0;i<idxTAB.length;i++){
		if(idxTAB[i]==identify){
			index=i;
			break;
		}
	}
	return index;
	
};
function getFieldNameByIdentify(identify){
	 var index = getIdentifyIndex(identify);
	 if(index!=-1){
		 return labelTAB[index];
	 }else{
		 return "";
	 }
	 
	
};
//比较字符串
function compareStr(str_1,str_2){//如果字符串相同，则返回结果
	var returnVal=true;
	var length_1=str_1.length;
	var length_2=str_2.length;
	var leng=length_1;
	if(leng>length_2)leng=length_2;
	if(leng==0)return false;
	for(var i=0;i<leng;i++){
		var tmpval_1=str_1.charAt(i);
		var tmpval_2=str_2.charAt(i);
		if(tmpval_1=="*"||tmpval_2=="*"||tmpval_1==tmpval_2){//如果相同
			
		}else{//如果不相同
			returnVal=false;
		}
	}
	return returnVal;
}
//获取所生成拼音的配置字段
function getAutoPinyinField(autopinyinfield,selfField){
	if(selfField=="")return false;
	var returnVal="";
	var tmpArr=autopinyinfield.split(";");
	for(var i=0;i<tmpArr.length;i++){
		var tmpStr=tmpArr[i];
		if(tmpStr!=""){
			if(selfField==tmpStr){
				returnVal=tmpArr[i];
			}else if(selfField.indexOf(tmpStr)==0){//如700
				returnVal=tmpArr[i];
			}else if(tmpStr.length>=selfField.length){
				if(compareStr(tmpStr,selfField)){
					returnVal=tmpStr;
					return returnVal;
				}
			}
		}
	}
	return returnVal;
};
function checkRepeat(url){
	var ooWin=showModalDialog(url,null,"dialogWidth:700px;dialogHeight:450px");
	//window.open (url, "newwindow", "height=766, width=1069, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no");
}
function confirmInfo(info,formId){
	if(confirm(info)){
		$("#"+formId).submit();
	}
	
}
function AddText(_obj,txt){ 
	/**
	if(window.clipboardData.getData('text')==null){
		window.clipboardData.setData('text',str);
	}
	_obj.focus()//使 id 为obj的对象成为当前焦点对象 
	document.execCommand("paste",0,str)//在文档光标处以paste粘贴str 
	**/
	
	
	if(window.clipboardData) //IE
	{
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", txt);
		
	}else if (window.netscape){
	try { 
		netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
	
	}
	catch (e){
		alert("please visit 'about:config' and set signed.applets.codebase_principal_support as 'true'");
	//提示用户开放浏览器的安全性设置
	}
	var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
	if (!clip){
		return;
	}
	
	var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
	if (!trans){
		return;
	}
	
	trans.addDataFlavor('text/unicode');
	var str = new Object();
	var len = new Object();
	var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
	var copytext = txt;
	str.data = copytext;
	trans.setTransferData("text/unicode",str,copytext.length*2);
	var clipid = Components.interfaces.nsIClipboard;
	if (!clip){
		return;
	}
		clip.setData(trans,null,clipid.kGlobalClipboard);
	} 
	_obj.focus()//使 id 为obj的对象成为当前焦点对象 
	document.execCommand("paste",0,txt)//在文档光标处以paste粘贴str 
	/**
	var flashcopier = 'flashcopier';
	if (!document.getElementById(flashcopier)) {
	var divholder = document.createElement('div');
	divholder.id = flashcopier;
	document.body.appendChild(divholder);
	}
	document.getElementById(flashcopier).innerHTML = '';
	var divinfo = '<embed src="clipboard.swf" FlashVars="clipboard=' + txt + '" width="0" height="0" type="application/x-shockwave-flash"></embed>';

	document.getElementById(flashcopier).innerHTML = divinfo;
	**/
} 