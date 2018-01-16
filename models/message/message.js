mui.init();
			
mui.plusReady(function() {
	var _self = plus.webview.currentWebview();
	var group = new webviewGroup(_self.id, {
		items: [{
			id: "tuijian.html",
			url: "../tuijian/tuijian.html",
			extras: {}
		}, {
			id: "redian.html",
			url: "../redian/redian.html",
			extras: {}
		}, {
			id: "beijing.html",
			url: "../beijing/beijing.html",
			extras: {}
		}, {
			id: "shehui.html",
			url: "../shehui/shehui.html",
			extras: {}
		}, {
			id: "yule.html",
			url: "../yule/yule.html",
			extras: {}
		}],
		onChange: function(obj) {
			var c = document.querySelector(".mui-control-item.mui-active");
			if(c) {
				c.classList.remove("mui-active");
			}
			var target = document.querySelector(".mui-scroll .mui-control-item:nth-child(" + (parseInt(obj.index) + 1) + ")");
			target.classList.add("mui-active");
			if(target.scrollIntoView) {
				target.scrollIntoView();
			}
		}
	});
	mui(".mui-scroll").on("tap", ".mui-control-item", function(e) {
		var wid = this.getAttribute("data-wid");
		group.switchTab(wid);
	});

});
mui.back = function() {
	var _self = plus.webview.currentWebview();
	_self.close("auto");
}