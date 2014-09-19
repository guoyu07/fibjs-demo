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

###纤程简介
```javascript
    function func() {
    }
    func.start();
```
便会创建一个纤程，将 func 作为入口，并加入调度列表，当有纤程出让控制权时，此函数便会被执行。切换方式是保存全部 cpu 寄存器，
加载目标纤程的 cpu 寄存器，恢复 ip 和 sp。