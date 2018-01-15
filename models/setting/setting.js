mui.init();

var loginWv;
mui.later(function(){
	//获取到登录界面的Wv
	loginWv=plus.webview.getLaunchWebview();
},1000);

mui('body').on('tap', '.mui-popover-action li>a', function() {
	var a = this,
		parent;
	//根据点击按钮，反推当前是哪个actionsheet
	for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
		if (parent.classList.contains('mui-popover-action')) {
			break;
		}
	}
	//关闭actionsheet
	mui('#' + parent.id).popover('toggle');
//	alert( "你刚点击了\"" + a.id + "\"按钮");
	if(a.id==='loginout'){
		
		
		//清空一下本地的用户数据
		localStorage.removeItem('sessionToken');
		localStorage.removeItem('username');
		
		//退出,显示登录界面
		loginWv.show();
		//关闭主界面，由于mian这个主界面和message，address-book，discover,mine
		//是父子界面关系，所以只要关闭了main，其他4个子界面会跟随关闭
		plus.webview.close('main','none');
		plus.webview.close('setting','none');
		
	}
})