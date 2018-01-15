mui.init();
mui.plusReady(function(){
	
	var up=document.querySelector('.up');
	var down=document.querySelector('.down');
	
	var MAX=20;//摇动的边界值
	var p=null;
	//监听移动设备的加速度变化
	plus.accelerometer.watchAcceleration(function(a){
		//如果xyz三个方向上的加速度的绝对值相加起来超过了某个数值，那么我们就认为用户在摇晃手机
		//console.info(JSON.stringify(a));
		
		
		if(!p&&Math.abs(a.xAxis)+Math.abs(a.yAxis)+Math.abs(a.zAxis)>MAX){
			console.info('开始播放音效')
			//用户在摇动手机
			//mui.alert('我被摇动了');
			//播放音效
			p=plus.audio.createPlayer('_www/models/shake/shake.wav');
			p.play();//开始播放音效
			
			//2秒厚停止播放音效
			setTimeout(function () {
				p.stop();
				p=null;
			},2000);
			console.info('开始图片效果'+'translateY(-'+(up.offsetHeight/2)+'px)')
			//开始图片特效
			up.style.webkitTransform='translateY(-'+(up.offsetHeight/2)+'px)';
			down.style.webkitTransform='translateY('+(down.offsetHeight/2)+'px)';
			
			setTimeout(function(){
				up.style.webkitTransform='';
				down.style.webkitTransform='';
				
				mui.later(function(){
					mui.toast('正在搜索同一时刻摇晃手机的人');
				},200);
			},700);
			
		}
	},function(){
		alert("监听失败了");
	},{
		frequency:200
	});
	
	
});

