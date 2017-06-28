if (window != top)
	top.location.href = "reader_login.jsp";
function changidateCode(obj) {
	//获取当前的时间作为参数，无具体意义
	var timenow = new Date().getTime();
	//每次请求需要一个不同的参数，否则可能会返回同样的验证码

	obj.src = "creatidateAction.action?d=" + timenow;
}
$(document).ready(function() {
	//changidateCode($('#validPic').get(0));
	});

function onloadd() {
	var statu = document.getElementById("hiddend").value;
	var hidtdr = document.getElementById("hidtr");
	if (statu == "email") {
		hidtdr.style.display = "block";
	}
	var sourcevalue=document.getElementById("userrname").value;
	if(sourcevalue==""){
		 document.getElementById("userrname").value="注册账号/读者卡号/身份证号";
		 document.getElementById("userrname").style.color="#9D9D9D";
	}
}
function checkinng() {
	var strPass = document.getElementById("userrname").value;
	var strPassss = document.getElementById("passwword").value;
	if (strPass == "") {
		alert("请输入登录账号！");
		return false;
	}
	if (strPassss == "") {
		alert("请输入密码！");
		return false;
	}
	var form1 = document.getElementById("form1");
	form1.setAttribute("action", "reader_login.action");
	return true;
}

	function checkonfocusu(){
		var sourcevalue=document.getElementById("userrname").value;
		if(sourcevalue=="注册账号/读者卡号/身份证号"){
			document.getElementById("userrname").value="";
			document.getElementById("userrname").style.color="#000000";
		}
	}
	function checkonfocusp(){
		var passwword=document.getElementById("passwword").value;
		if(passwword=="请输入密码"){
			document.getElementById("passwword").value="";
			document.getElementById("passwword").style.color="#000000";
		}
	}
	function checkonbluru(){
		var sourcevalue=document.getElementById("userrname").value;
		if(sourcevalue==""){
			document.getElementById("userrname").value="注册账号/读者卡号/身份证号";
			document.getElementById("userrname").style.color="#9D9D9D";
		}
	}
	function checkonblurp(){
		var passwword=document.getElementById("passwword").value;
		if(passwword==""){
			document.getElementById("passwword").value="请输入密码";
			document.getElementById("passwword").style.color="#9D9D9D";
		}
	}
