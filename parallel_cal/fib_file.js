var fs = require("fs");
var process = require("process");
var coroutine = require("coroutine");
var num = require("./tm.json").file_tm;

var dir = "temp/";
if(!fs.exists(dir)) fs.mkdir(dir);

var data = [];
for (var i = 0; i < num; i++) {
	data.push(i);
}

var t = new Date().getTime();

// forFile();
parallelFile();

t = new Date().getTime() - t;

console.log(t);

process.system("rm -rf " + dir);

function forFile() {
	var len = data.length;
	for (var i = 0; i < len; i++) {
		fs.writeFile(dir + "file" + data[i], data[i]);
	}
}

function parallelFile() {
	coroutine.parallel(data, function(d) {
		fs.writeFile(dir + "file" + d, d);
	});
}