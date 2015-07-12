"use strict";
var coroutine = require('coroutine');
module.exports = function(init, nm, timeout) {
	var pools = [],
		count = 0,
		sem = new coroutine.Semaphore(nm || 10);
	timeout = timeout || 60000;
	return function(func) {
		var r, o, c, d = new Date().getTime();
		while (count) {
			c = pools[0];
			if (d - c.time.getTime() > timeout) {
				pools = pools.slice(1);
				count--;
				try {
					c.o.dispose();
				} catch (e) {
					console.error("pool error: ", e.toString());
				}
			} else break;
		}
		sem.acquire();
		try {
			o = count ? pools[--count].o : init();
			r = func(o);
			pools[count++] = {
				o: o,
				time: new Date()
			};
			sem.post();
		} catch (e) {
			sem.post();
			try {
				o.dispose();
			} catch (e) {}
			throw e;
		}
		return r;
	}
}