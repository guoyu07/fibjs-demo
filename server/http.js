var http = require('http');
var coroutine = require("coroutine");

var svr = new http.Server(8080, function(r){
	if(r.query.a === "wait"){
		coroutine.sleep(10000);
	}
	if(r.query.a === "get"){
		var res = "";
		for(var i = 0; i < 10 ;i++){
			res += "  " + http.get("http://127.0.0.1:8080").readAll().toString();
			coroutine.sleep(1000);
			console.log("res:", res);
		}
		res += " from http.get";
		r.response.write(res);
		return;
	}
	r.response.write('Hello, World!');
});
svr.run();
