mui.init();

mui.ready(function () {
	document.getElementById('setting').addEventListener('tap',function () {
		mui.openWindow({
			url:'../setting/setting.html',
			id:'setting'
		});
	});
});