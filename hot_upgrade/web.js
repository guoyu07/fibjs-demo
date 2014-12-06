var mq = require("mq");

var _ver = new Date() + "";
_ver = /\d+:\d+:\d+/.exec(_ver)[0];

module.exports = mq.jsHandler(function(req) {
	req.response.write(_ver);
});