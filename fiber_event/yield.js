var fs = require("fs");

function *readFile(fname, callback) {
	yield fs.readFile(fname, callback);
}

var reader = readFile("readme.md", function(err, data) {
	if (err) throw err;
	console.log(data.toString());
});

reader.next();
