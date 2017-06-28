var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : (s = ua
		.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : (s = ua
		.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : (s = ua
		.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : (s = ua
		.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

if (Sys.opera || Sys.safari) {
	window.setInterval("reinitIframe()", 200);
}
function reinitIframe() // Õë¶Ôopera safari
{
	var iframe = document.getElementById("PandL");
	try {
		var bHeight = iframe.contentWindow.document.body.scrollHeight;
		var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
		var height = Math.max(bHeight, dHeight);
		iframe.height = height;
	} catch (ex) {
	}
}

function iframeAutoFit(iframeObj) {
	setTimeout(
			function() {
				if (!iframeObj)
					return;
				iframeObj.height = (iframeObj.Document ? iframeObj.Document.body.scrollHeight
						: iframeObj.contentDocument.body.offsetHeight) + 30;// ÕâÀï+30ÊÇÓÐÄ¿µÄµÄ
			}, 200)
}