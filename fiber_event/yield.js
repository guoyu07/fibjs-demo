var fs = require("fs");
var co = require("./co");

function read(file) {
	return function(fn) {
		fs.readFile(file, function(err, data) {
			if (err) return fn(err);
			fn(null, data);
		});
	}
}

co(function *() {
	var a = yield read('readme.md');
	console.log(a.toString());
})();
