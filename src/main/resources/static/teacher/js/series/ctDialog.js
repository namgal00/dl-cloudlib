(function() {
	var ini = {
		show : function(id, type, modal, title, url, w, h) {
			hiddenLayerOther(layerID);
			iframe = false;
			if (modal == true)
				hide();
			if (type == 'iframe') {
				if (!id)
					id = 'ctDialog';
				if (!document.getElementById(id)) {
					var temp_e = document.createElement('div');
					temp_e.id = id;
					temp_e.className = 'ctDialogDiv';
					temp_e.style.width = w + 'px';
					temp_e.style.hieght = h + 'px';
					var _content = '<div class="head1"><div class="close" onclick="ctDialog.close(\''
							+ id + '\');">X</div>';
					_content += '' + title + '</div>';
					_content += '<div class="body1">';
					_content += '<iframe frameborder="0" src="' + url
							+ '" width="' + (w - 20) + '" height="' + h
							+ '"></iframe>';
					_content += '</div>';
					temp_e.innerHTML = _content;
					document.body.appendChild(temp_e);
				}
				iframe = true;
			}
			layerID = id;
			buildDiv(layerID);
			if (document.getElementById(layerID) != null) {
				var dv = document.getElementById(layerID);
				if (dv.style.visibility == "hidden") {
					getCenterXY_ForLayer(dv);
					dv.style.visibility = "visible";
				}
				document.body.onmousemove = function(event) {
					drag(event, dv)
				};
				document.body.onmouseup = function() {
					objX = 0;
					objY = 0
				};
			}

			return false;
		},
		close : function(id) {
			if (!id)
				id = layerID;
			cancel();
			if (document.getElementById(id)) {
				if (iframe == true) {
					document.body.removeChild(document.getElementById(id));
				} else {
					document.getElementById(id).style.visibility = "hidden";
				}
			}
		}
	}, objX = 0, objY = 0, iframe = false, layerID = false, hiddenObjs = [], layer = new Array();
	dragObj = new Array();
	dragObjId = new Array();
			IE = !-[ 1, ], // !+'\v1',
			IE6 = IE
					&& ([ /MSIE (\d)\.0/i.exec(navigator.userAgent) ][0][1] == 6),

			buildDiv = function(layerID) {
				var dragObjId = document.getElementById(layerID);
				dragObjId.style.visibility = 'hidden';
				dragObjId.style.zIndex = '999';

				var styleWidth = dragObjId.clientWidth + 'px';
				var styleHeight = dragObjId.clientHeight + 'px';

				dragObjId = set_div_style(dragObjId, layerID, '0px', '0px',
						styleWidth, styleHeight, "absolute",
						"0px solid #c0d4db", "default", false);
				try {
					dragObj = getFirstChild(dragObjId);
					dragObj.style.cursor = 'move';
					dragObj.onmousedown = function(event) {
						// 让IE下鼠标超出视口仍可控制
						if (document.body.setCapture) {
							dragObj.setCapture();
						}
						drag_mouse_down(event, this.parentNode)
					};
					dragObj.onmouseup = function(event) {
						if (document.body.releaseCapture)
							dragObj.releaseCapture();// IE释放鼠标监控
					}
					dragObj.onselectstart = function() {
						return false
					};
					if (IE) {
						dragObj.onresize = function() {
							checkAndResetStyleTop(this.parentNode)
						};
					} else {
						dragObj.onclick = function() {
							checkAndResetStyleTop(this.parentNode)
						};
					}
				} catch (e) {
				}
			},

			checkAndResetStyleTop = function(obj) {
				var p = getPage();
				var clientHeight = obj.clientHeight;
				var styleTop = parseInt(obj.style.top.substring(0,
						obj.style.top.length - 2));
				if (clientHeight + styleTop > p.height) {
					obj.style.top = (p.height - clientHeight) + 'px';
				}
			},

			getFirstChild = function(obj) {
				var result = obj.firstChild;
				if (result) {
					while (!result.tagName) {
						result = result.nextSibling;
					}
				}
				return result;
			},

			getNextChild = function(obj) {
				var result = obj.nextSibling;
				if (result) {
					while (!result.tagName) {
						result = result.nextSibling;
					}
				}
				return result;
			},

			drag_mouse_down = function(event, obj) {
				var obj_left = obj.style.left;
				var obj_top = obj.style.top;
				var obj_left = obj_left.replace(/p|x/g, "");
				var obj_top = obj_top.replace(/p|x/g, "");
				if (event == null) {// IE必须
					event = window.event;
				}
				var clientX = String(event.clientX).replace(/p|x/g, "");
				var clientY = String(event.clientY).replace(/p|x/g, "");
				objX = clientX - obj_left;
				objY = clientY - obj_top;
			},

			drag = function(event, obj) {
				var p = getPage();
				if (objX != 0 && objY != 0) {
					if (event == null) {// IE必须
						event = window.event;
					}
					if (event.button == 1 || event.button == 0) {
						var objWidth = obj.clientWidth;
						var objHeight = obj.clientHeight;
						var leftPo = event.clientX - objX;
						if (leftPo < 0) {
							leftPo = 0;
						}
						var topPo = event.clientY - objY;
						if (topPo < 0) {
							topPo = 0;
						}
						obj.style.left = leftPo + 'px';
						obj.style.top = topPo + 'px';
					}
				}
			},

			set_div_style = function(obj, id, top, left, width, height,
					position, border, cursor, background) {
				var obj = obj;
				obj.id = id ? id : null;
				obj.style.top = top ? top : '0px';
				obj.style.left = left ? left : '0px';
				if (width)
					obj.style.width = width;
				if (height)
					obj.style.height = height;
				obj.style.position = position ? position : "static";
				// obj.style.border = border?border:"1px #000 solid";
				// obj.style.cursor = cursor?cursor:"default";
				if (background)
					obj.style.background = background;
				return obj;
			},

			// 将悬浮层的位置定位在body可见区域中央
			getCenterXY_ForLayer = function(objdiv) {
				var p = getPage();
				var objdiv = objdiv;
				objdiv.style.display = 'block';
				var styleWidth = objdiv.style.width.substring(0,
						objdiv.style.width.length - 2);
				var clientHeight = parseInt(objdiv.style.height);
				var objLeft = parseInt(document.documentElement.scrollLeft
						+ (p.winWidth - styleWidth) / 2)
						+ 'px';
				var relTop = (p.winHeight - clientHeight) / 2;
				var objTop = parseInt(document.documentElement.scrollTop
						+ relTop)
						+ 'px';
				objdiv.style.top = objTop;
				objdiv.style.left = objLeft;
				checkAndResetStyleTop(objdiv);
			},

			// 隐藏元素
			HideElement = function(strElementTagName) {
				try {
					for (i = 0; i < window.document.all.tags(strElementTagName).length; i++) {
						var objTemp = window.document.all
								.tags(strElementTagName)[i];
						if ('hidden' != objTemp.style.visibility) {
							objTemp.style.visibility = "hidden";
							hiddenObjs.push(objTemp);
						}
					}
				} catch (e) {
					alert(e.message);
				}
			},

			hideElementAll = function() {
				hiddenObjs = [];
				HideElement("SELECT");
				HideElement("OBJECT");
				HideElement("IFRAME");
			},

			showElementAll = function() {
				var len = hiddenObjs.length;
				for ( var i = 0; i < len; i++) {
					hiddenObjs[i].style.visibility = "visible";
				}
			},

			hiddenLayerOther = function(layerID) {
				ini.close(layerID);
				// for( var i=0;i<layer.length;i++ ){
				// if ( layer[i] != layerID && document.getElementById(layer[i])
				// != null ) {
				// ini.close(layer[i]);
				// }
				// }
			},

			// 滤镜效果
			hide = function() {

				synSizeByBody("globalDiv");
				document.getElementById("globalDiv").style.display = "block";
				if (IE) {
					hideElementAll();
				}
			},

			synSizeByBody = function() {

				var p = getPage();

				var argArr = synSizeByBody.arguments;
				for ( var i = 0; i < argArr.length; i++) {
					if (document.getElementById(argArr[i]) != null) {
						document.getElementById(argArr[i]).style.width = (p.width)
								+ 'px';
						document.getElementById(argArr[i]).style.height = (p.height)
								+ 'px';
					}
				}
			},

			cancel = function() {
				document.getElementById("globalDiv").style.display = "none";
				if (IE) {
					showElementAll();
				}
				recoverBodyEvent();
			},

			recoverBodyEvent = function() {
				try {

				} catch (e) {
				}
			},

			buildGlobalDiv = function() { // 遮罩层
				var p = getPage();
				var globalDiv = document.createElement('div');
				globalDiv.id = 'globalDiv';
				globalDiv.style.display = 'none';
				globalDiv.style.zIndex = '98';
				globalDiv = set_div_style(globalDiv, 'globalDiv', '0px', '0px',
						p.width + 'px', p.height + 'px', "absolute", "",
						"default", "#CCCCCC");// darkgray

				if (IE) {
					globalDiv.style.filter = "alpha(opacity=60)";
				} else {
					globalDiv.style.opacity = 60 / 100;
				}
				document.body.appendChild(globalDiv);
			},

			// 获取页面尺寸相关数据
			// 如果要获取父页面或子页面的数据，请指定win参数
			getPage = function(win) {
				var dd = win ? win.document.documentElement
						: document.documentElement, db = win ? win.document.body
						: document.body, dom = dd || db;
				return {
					width : Math.max(dom.clientWidth, dom.scrollWidth), // 页面宽度
					height : Math.max(dom.clientHeight, dom.scrollHeight), // 页面长度
					left : Math.max(dd.scrollLeft, db.scrollLeft), // 被滚动条卷去的文档宽度
					top : Math.max(dd.scrollTop, db.scrollTop), // 被滚动条卷去的文档高度
					winWidth : dom.clientWidth, // 浏览器视口宽度
					winHeight : dom.clientHeight
				// 浏览器视口高度
				};
			},

			// 事件绑定
			bind = function(obj, type, fn) {
				if (obj.attachEvent) {
					obj['e' + type + fn] = fn;
					obj[type + fn] = function() {
						obj['e' + type + fn](window.event);
					}
					obj.attachEvent('on' + type, obj[type + fn]);
				} else {
					obj.addEventListener(type, fn, false);
				}
				;
			},

			// 移除事件
			unbind = function(obj, type, fn) {
				if (obj.detachEvent) {
					try {
						obj.detachEvent('on' + type, obj[type + fn]);
						obj[type + fn] = null;
					} catch (_) {
					}
					;
				} else {
					obj.removeEventListener(type, fn, false);
				}
				;
			};

	if (IE6)
		document.execCommand('BackgroundImageCache', false, true);// 开启IE
																	// CSS背景图片缓存

	// 页面载入即启动一个隐秘对话框，让浏览器预先加载皮肤背景图片
	bind(window, 'load', function() {
		buildGlobalDiv();
	});

	this.ctDialog = ini;// 兼容老版本调用方式
})();