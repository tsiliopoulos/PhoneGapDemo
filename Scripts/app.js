// custom js goes here
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$( "#qrScanBtn" ).click(function() {
  		doScan();
	});
}

function doScan(){
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			alert("We got a barcode\n" +
				"Result: " + result.text + "\n" +
				"Format: " + result.format + "\n" +
				"Cancelled: " + result.cancelled);
	  	},
	  	function (error) {
			alert("Scanning failed: " + error);
	  	}
	);
}
