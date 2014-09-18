###Callback Yield fiber 对比

####Callback
```javascript
    var fs = require("fs");
    fs.readFile('readme.md', function(err, data) {
      if (err) throw err;
      console.log(data.toString());
    });

```

####Yield
```javascript
    var fs = require("fs");
    function *readFile(fname, callback) {
    	yield fs.readFile(fname, callback);
    }
    var reader = readFile("readme.md", function(err, data) {
    	if (err) throw err;
    	console.log(data.toString());
    });
    reader.next();
```

####fibjs
```javascript
    var fs = require("fs");
    try {
    	var file = fs.readFile('readme.md1');
    	console.log(file);
    } catch (e) {
    	console.log(e.number);
    }
```