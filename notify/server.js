var http = require("http");
var notify = require("notify");

var svr = new http.Server(8080, notify);
svr.crossDomain = true;
svr.run();