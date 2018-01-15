mui.init();
//发送按钮
var sendButton=document.getElementById('send');
//表情
var emoticons=document.getElementById('emoticons');
//更多
var more=document.getElementById('more');

document.getElementById('msg-input').addEventListener('input',function () {
	//console.info(this.value);
	
	if(this.value.trim().length>0){
		console.info('有东西了');
		//把发送按钮显示出来，把表情、更多按钮隐藏起来
		sendButton.style.display='block';
		emoticons.style.display='none';
		more.style.display='none';
	}else{
		console.info('东西删光了')
		//把发送按钮隐藏掉，把表情、更多按钮隐藏显示出来
		sendButton.style.display='';
		emoticons.style.display='';
		more.style.display='';
	}
});


document.getElementById('send').addEventListener('tap',function () {
	//alert(document.getElementById('msg-input').value);
	var msgInput=document.getElementById('msg-input');
	var msgValue=msgInput.value;
	
	var willSendMsg='<div class="chat-box chat-box-right mui-content-padded">'+
			    	'	<img class="chat-avatar" src="zhangsan.png"/>'+
			    	'	<div class="chat-content">'+
			    	'		<div class="chat-content-inner">'+
			    	msgValue+
			    	'		</div>'+
			    	'		<div class="chat-content-arrow"></div>'+
			    	'	</div>'+
			    	'	<div class="clear-float"></div>'+
			    	'</div>';
	
	var newDom=document.createElement('div');
	newDom.innerHTML=willSendMsg;
	var msgList=document.querySelector('.chat-list');
	//把拼接好的气泡html追加到消息列表末尾
	msgList.appendChild(newDom);
	
	//清空文本输入框
	msgInput.value='';
	//显示表情和更多按钮，隐藏发送按钮
	sendButton.style.display='';
	emoticons.style.display='';
	more.style.display='';
	
	
	//G滚动条到最底部时  scrollTop：229   scrollHeight 753 offsetHeight 524
	msgList.scrollTop=msgList.scrollHeight-msgList.offsetHeight;

	//开始发送消息 zhangsan>>>lisi
	// lisi 用自己的名字作为 clientId，获取 IMClient 对象实例
	realtime.createIMClient('zhangsan').then(function(zhangsan) {
	  // 创建与Jerry之间的对话
	  return zhangsan.createConversation({
	    members: ['lisi'],
	    name: '张三发给李四的消息',
	  });
	}).then(function(conversation) {
	  // 发送消息
	  return conversation.send(new AV.TextMessage(msgValue));
	}).then(function(message) {
	  console.log('张三发给李四的消息', '发送成功！');
	}).catch(console.error);

});


//初始化实时聊天
var Realtime = AV.Realtime;
var TextMessage = AV.TextMessage;
//初始化
var realtime = new Realtime({
  appId: 'cLssBjVV5WmSUG3NFRktARTg-gzGzoHsz',
  region: 'cn', //美国节点为 "us"
});

console.info('我是张三，我现在正在和李四聊天');
//监听所有发送过来给我的消息
realtime.createIMClient('zhangsan').then(function(zhangsan) {
  zhangsan.on('message', function(message, conversation) {
    console.log('我收到了消息: ' + message.text);
    
    var willSendMsg='<div class="chat-box chat-box-left mui-content-padded">'+
			    	'	<img class="chat-avatar" src="lisi.png"/>'+
			    	'	<div class="chat-content">'+
			    	'		<div class="chat-content-inner">'+
			    	message.text+
			    	'		</div>'+
			    	'		<div class="chat-content-arrow"></div>'+
			    	'	</div>'+
			    	'	<div class="clear-float"></div>'+
			    	'</div>';
	
	var newDom=document.createElement('div');
	newDom.innerHTML=willSendMsg;
	var msgList=document.querySelector('.chat-list');
	//把拼接好的气泡html追加到消息列表末尾
	msgList.appendChild(newDom);
	
	msgList.scrollTop=msgList.scrollHeight-msgList.offsetHeight;
    
  });
}).catch(console.error);