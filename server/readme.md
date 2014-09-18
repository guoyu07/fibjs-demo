###服务器编程

####静态服务器

```javascript
    var http = require('http');
    var svr = new http.Server(8080, http.fileHandler('./'));
    svr.run();
```

```Bash
    curl 127.0.0.1:8080/readme.md
```


####动态服务器
```javascript
    var http = require('http');
    var svr = new http.Server(80, function(r){
      r.response.write('Hello, World!');
    });
    svr.run();
```

```Bash
    curl 127.0.0.1:8080
```
 
####动静合一
```javascript
    var http = require('http');
    var mq = require('mq');
    var svr = new http.Server(8080, new mq.Routing({
    '^/f(/.*)': http.fileHandler('./'),
    '^/i(/.*)': function(r) {
    r.response.write('Hello, World!');
    }
    }));
    svr.run();
```

```Bash
    curl 127.0.0.1:8080/i/
    curl 127.0.0.1:8080/f/readme.md
```
