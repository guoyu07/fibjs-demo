var async = require("async");
var num = require("./tm.json").file_tm;

var fs = require("graceful-fs");
var child_process = require("child_process");

var dir = "temp/";
if(!fs.existsSync(dir)) fs.mkdirSync(dir);

var data = [];
for (var i = 0; i < num; i++) {
	data.push(i);
}

var t = new Date().getTime();

async.each(data, function( file, callback) {
	fs.writeFile(dir + "file" + file, file, function(err) {
		if (err) throw err;
    	callback();
	});
}, function(err){
  t = new Date().getTime() - t;
  console.log(t);
  child_process.exec("rm -rf " + dir);
});
