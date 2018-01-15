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
			    	'	<img class="chat-avatar" src="lisi.png"/>'+
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
})