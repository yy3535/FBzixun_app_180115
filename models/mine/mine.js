mui.init();

mui.ready(function () {
	//添加showpage自定义事件监听
	window.addEventListener('showpage',function(event){
		//登录用户显示
	  	var username=localStorage.getItem('username');
		var nickname=document.querySelector(".nickname");
		if(username==null){
			nickname.innerHTML="未登录";
		}else{
			nickname.innerHTML=username;
		}
	});
	document.getElementById('login').addEventListener('tap',function () {
		mui.openWindow({
			url:'../login/login.html',
			id:'login'
		});
	});
	document.getElementById('setting').addEventListener('tap',function () {
		mui.openWindow({
			url:'../setting/setting.html',
			id:'setting'
		});
	});
});