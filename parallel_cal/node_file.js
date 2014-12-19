var fs = require("fs");
var child_process = require("child_process");
var num = require("./tm.json").file_tm;

var dir = "temp/";
if(!fs.existsSync(dir)) fs.mkdirSync(dir);

var data = [];
for (var i = 0; i < num; i++) {
	data.push(i);
}

var j = 0;
var t = new Date().getTime();
(function write() {
	if(j < num){
		fs.writeFile(dir + "file" + j, j, function(err) {
			if (err) {
				throw err;
			}
			j++;
			write();
		});
	}else{
		t = new Date().getTime() - t;
		console.log(t);
		child_process.exec("rm -rf " + dir);
	}
})();
