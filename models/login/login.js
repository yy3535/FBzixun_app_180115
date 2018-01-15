//初始化mui框架
mui.init();
//用户输入账号密码
//用户点击登录按钮
//捕获用户点击登录按钮的事件
document.getElementById('login').addEventListener('tap',function () {
//	alert('我被触发了');
	//获取到账号和密码的文本框对象
	var usernameInput=document.querySelector('input[name="username"]');
	var passwordInput=document.querySelector('input[name="password"]');
	//获取到用户输入的账号密码
	var usernameValue=usernameInput.value;
	var passwordValue=passwordInput.value;
	console.info("账号是:",usernameValue,"   密码是：",passwordValue);
	//非空校验
	if(!usernameValue||!passwordValue){
		mui.toast('用户名或密码不能为空');
		return;
	}
	
//	if(usernameValue==='admin'&&passwordValue==='123456'){
//		console.info('登录成功,开始跳转页面');
//		mui.openWindow('../main/main.html','main');
//	}else{
//		mui.toast('用户名或密码错误!请重新输入!');
//	}
	
	//使用Ajax把账号密码传输到服务器上，在服务器进行账号密码的校验，https://leancloud.cn
	mui.ajax({
		url:'https://api.leancloud.cn/1.1/login',
		type:'post',
		data:{
			'username':usernameValue,//zhangsan
			'password':passwordValue//123456
		},
		headers:{
			'X-LC-Id':'cLssBjVV5WmSUG3NFRktARTg-gzGzoHsz',
			'X-LC-Key':'NcuSGbaIcKBaU4QDYfNPRY9d'
		},
		success:function(resp){
			mui.toast('登录成功!');
			//存储到本地
			localStorage.setItem('sessionToken',resp.sessionToken);
			localStorage.setItem('username',resp.username);
			mui.later(function () {
				mui.openWindow({
					url:'../main/main.html',
					id:'main',
					show:{
						aniShow:'none'
					},
					styles:{
						hardwareAccelerated:true
					}
					
				});
			},1500);
			
		},
		error:function(error){
			mui.toast('账号或者密码错误！')
		}
	});
	//如果校验成功，跳转界面到主页 
	//如果校验失败，提示密码错误
});
