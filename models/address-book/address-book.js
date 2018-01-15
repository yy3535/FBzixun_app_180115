mui.init();

//第一件事 ，自定義一個事件
document.addEventListener('showpage',function(){
	//alert('我被觸發啦')
	var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	//calc hieght
	list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
	console.info("内容顯示區域的高度:"+document.body.offsetHeight+"---頭部導航欄的高度"+header.offsetHeight);
	//create内容顯示區域的高度:565---頭部導航欄的高度44
	window.indexedList = new mui.IndexedList(list);
	
});