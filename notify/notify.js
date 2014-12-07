var mq = require("mq");
var coroutine = require("coroutine");
var tm = 1000;

function getTime() {
	return /\d+:\d+:\d+/.exec(new Date() + "")[0];
}

function asyncSend(r, value) {
	var aw = r.aw;
	r.aw = undefined;
	(function() {
		r.response.write(value || "");
		aw.end();
	}).start();
}

function notify(req) {
	req.aw = mq.await();
	(function() {
		coroutine.sleep(tm);
		var t = getTime();
		console.log(t);
		asyncSend(req, t);
	}).start();
	return req.aw;
}

module.exports = notify;