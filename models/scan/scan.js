mui.init();


mui.plusReady(function () {
	//创建码扫描控件
	var scan=new plus.barcode.Barcode(
		'bcode',
		[
			plus.barcode.QR,plus.barcode.AZTEC
		],
		{
			frameColor:'#399a0e',
			scanbarColor:'#399a0e',
//			background:'#399a0e'
			
		}
	);
	
	//扫描成功厚回掉函数（识别到条码类型，然后返回文本结果）
	scan.onmarked = function ( type, code, file ) {
		console.info(type+"----"+code);
		
	}
	
	//开始扫描
	scan.start();
	
});

