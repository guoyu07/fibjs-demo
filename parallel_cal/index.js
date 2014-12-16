var http = require("http");
var coroutine = require("coroutine");

var d = [];

for (var i = 0; i < 200; i++) {
	d.push("http://127.0.0.1");
}

var t = new Date().getTime();

d.forEach(function(a) {
	http.get(a);
});

//coroutine.parallel(d, function(a) {
//	http.get(a);
//});

t = new Date().getTime() - t;
console.log(t);