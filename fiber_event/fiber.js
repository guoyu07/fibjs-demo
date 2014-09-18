var fs = require("fs");
try {
	var file = fs.readFile('readme.md1');
	console.log(file);
} catch (e) {
	console.log(e.number);
}
