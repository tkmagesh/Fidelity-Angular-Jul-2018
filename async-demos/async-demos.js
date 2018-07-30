var app = function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	function addAsync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			return result;
		}, 3000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		var result = addAsync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	return { 
		addSyncClient,
		addAsyncClient
	};
}();