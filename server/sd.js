var http = require('http');
var mq = require('mq');
var svr = new http.Server(8080, new mq.Routing({
	'^/f(/.*)': http.fileHandler('./'),
	'^/i(/.*)': function(r) {
		r.response.write('Hello, World!');
	}
}));
svr.run();