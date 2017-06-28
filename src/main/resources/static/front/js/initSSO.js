$(function(){
	 var ssoUtil = new SSOUtil();
	 if(isSSOBackendValid!=null && isSSOBackendValid=="true"){
		 if (!ssoUtil.ticketExist()) {
				ssoUtil.ssoProcess(contextPath+'/sso/clearUserInfo',{ 'sendType':1,'callback':function(returnObj) {
				}
			});
			location.href = getSSOLoginUrl();
		 }
	 }else{
		//ticket存在，则把ticket发送到后台，验证ticket是否合法
			if (ssoUtil.ticketExist()) {
				if(userName.length==0){
					ssoUtil.ssoProcess(contextPath+'/sso/validate',{
						'sendType':1,'callback':function(returnObj) {      //返回json格式，{'result':返回码,’errmsg’:’错误信息’},
							if (returnObj.result == 200) {				//200表示验证成功
								//document.getElementById('loginOut').style.display = '';//显示登录成功
								var loginHTML = '';
								if (locale == 'zh_CN') {
									loginHTML = '<a href="http://www.nlc.cn/" target="_blank">国图首页</a><span> 欢迎您！'+returnObj.username;
									if(isHomePage=="false"){
										loginHTML+='</span><a href="/">文津搜索首页</a>';
									}
								loginHTML += '<a href="/user/searchHistory">个人中心</a><a href="'+contextPath+'/sso/logoutjump">退出</a><a href="#">意见反馈</a><a href="'+contextPath+'/show/help_EN" target="_blank">帮助</a>';
								}else{
									loginHTML = '<a href="http://www.nlc.cn/" target="_blank">National Library</a><span> Welcome!'+returnObj.username;
									if(isHomePage=="false"){
										loginHTML+='</span><a href="/">WenJin Search</a>';
									}
									loginHTML += '<a href="/user/searchHistory">User Center</a><a href="'+contextPath+'/sso/logoutjump">Logout</a><a href="#">Feedback</a><a href="'+contextPath+'/show/help_EN" target="_blank">Help</a>';
								}
								$("#wjHd .fn_bar .nav").html(loginHTML);
							} else {	//验证失败，跳转到国图统一登录页面
								document.write("<script language=\"javascript\" src=\"http://sso1.nlc.cn/sso/delete-sso-cookie?responseType=json&rand="+Math.random()+"\">");
								document.write("<\/script>");
							}
						},
						'process':function() {
						},
						'type':'json'
					});
				}

			}
			//ticket不存在，清除session,跳转到国图登录页
			else {
				if(userName.length>0){
					ssoUtil.ssoProcess(contextPath+'/sso/clearUserInfo',{ 'sendType':1,'callback':function(returnObj) {
					}});
					var loginHTML = "";
					if (locale == 'zh_CN') {
						if(isHomePage=="false"){
							loginHTML += '<a href="http://www.nlc.cn/" target="_blank">国家图书馆</a><a href="/">文津搜索首页</a>';
						}
						loginHTML += '<a href="/user/searchHistory">个人中心</a>'+
									 '<a href="'+getSSOLoginUrl()+'">登录</a>'+
									 '<a href="http://sso1.nlc.cn/Reader/rdRegister_rule.jsp" target="_blank">注册</a><a href="#">意见反馈</a><a href="'
									 +contextPath+'/show/help_EN" target="_blank">帮助</a>';
					}else{
						if(isHomePage=="false"){
							loginHTML += '<a href="http://www.nlc.cn/" target="_blank">National Library</a><a href="/">WenJin Search</a>';
						}
						loginHTML += '<a href="/user/searchHistory">User Center</a>'+
									 '<a href="'+getSSOLoginUrl()+'">Login</a>'+
									 '<a href="http://sso1.nlc.cn/Reader/rdRegister_rule.jsp" target="_blank">Regist</a><a href="#">Feedback</a><a href="'
									 +contextPath+'/show/help_EN" target="_blank">Help</a>';
					}
					$("#wjHd .fn_bar .nav").html(loginHTML);
				}

			}
	 }
});