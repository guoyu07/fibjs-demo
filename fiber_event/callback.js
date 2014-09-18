var fs = require("fs");
fs.readFile('readme.md', function(err, data) {
	if (err) throw err;
	console.log(data.toString());
});
