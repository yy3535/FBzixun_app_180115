

//底部webview  main.html  主/父webview

//其他webview  从/子webview


mui.init();




mui.plusReady(function () {
	//获取父Wv
	var parentWv=plus.webview.currentWebview();
	
	//创建4个子webview
	var pageList=[
		{
			url:'../message/message.html',
			id:'message'
		},
		{
			url:'../discover/discover.html',
			id:'discover'
		},
		{
			url:'../address-book/address-book.html',
			id:'address-book'
		},
		{
			url:'../mine/mine.html',
			id:'mine'
		}
	];
	//for循环来创建4个子页面
	for (var i=0,l=pageList.length;i<l;i++) {
		var url=pageList[i].url;
		var id=pageList[i].id;
		console.info(url+"-----------"+id);
		//如果该Wv已经呗创建，则跳过本次循环
		if(plus.webview.getWebviewById(id)){
			continue;
		}
		//开始创建webview
		var newWv=plus.webview.create(url,id,{
			bottom:'50px',
			top:'0px',
			popGesture:'none'
		});
		//设置Wv的显示状态
		//第一个Wv显示出来，其他的Wv隐藏
//		if(i===0){
//			newWv.show();
//		}else{
//			newWv.hide();
//		}
		i===0?newWv.show():newWv.hide();
		
		//把子Wv追加(挂)到父WebView
		parentWv.append(newWv);
		
	}
	//默认显示的子页面Id
	var showWv='message';
	mui('.mui-bar').on('tap','.mui-tab-item',function (e) {
		//mui.alert('我被点击了');
		//点击后要显示的Wv的id
		var showWvId=this.dataset.id;
		
		//如果当前显示的子页面和即将要点击的子页面是同一个，那么就什么也不处理
		if(showWv===showWvId)return;
		
		//隐藏当前正显示的Wv
		plus.webview.getWebviewById(showWv).hide();
		
		
		//显示即将点击的那个Wv
		console.info(showWvId);
		var willShowWv=plus.webview.getWebviewById(showWvId);
		willShowWv.show('none',0,function () {
			//觸發這個Wv界面裏面定義的showpage
			mui.fire(willShowWv,'showpage');//第一個參數是：觸發哪個Wv對象，第二個參數：觸發這個Wv的什麽事件
		});
		//更新当前显示的子页面Id
		showWv=showWvId;
	});
	
});