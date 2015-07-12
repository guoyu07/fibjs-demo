var mq = require("mq");
var _ver = /\d+:\d+:\d+/.exec(new Date() + "")[0];

module.exports = mq.jsHandler(function(req) {
	req.response.write(_ver);
});