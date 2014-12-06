var http = require("http");
var vm = require("vm");
var coroutine = require("coroutine");

function new_web() {
	return new vm.SandBox({
		mq: require("mq")
	}).require("./web.js");
}

var svr = new http.Server(8080, new_web());
svr.crossDomain = true;

(function() {
	while (true) {
		coroutine.sleep(1000);
		svr.handler = new_web();
	}
}).start();

svr.run();