var http = require('http');
var svr = new http.Server(8080, function(r){
	r.response.write('Hello, World!');
});
svr.run();