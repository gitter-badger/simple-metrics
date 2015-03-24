// simple test :-D

var m = require('./index').SimpleMetrics();

m.getconfig()
m.send()

setInterval(function(){
	m.count()
}, 100)

setInterval(function(){
	m.count()
}, 700)

// Ctrl+c to exit