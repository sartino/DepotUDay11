//var myhttp = require("q-io/http");



/* 

     ----Previous Example-----
     use 'localhost'
port 7000: session cache (ready)
port 7001: database (mongo, level, postgres, etc...)
use the 'q-io' module to create promises as wrappers
      for http responses
*you will need more than 1 promise

1-send a 'http get request' to the session cache on port 7000


     
var myhttp = require("q-io/http");
myhttp.read("http://localhost:1337")
	.then(function (data) {
	console.log(JSON.parse(data));
	})
	.then(null, console.error)
	.done();

   ----- Official Answer -----

     var qhttp = require('q-io/http');

      qhttp.read("http://localhost:1337")
      .then(function (json) {
        console.log(JSON.parse(json));
      })
      .then(null, console.error)
      .done()
	  
*/