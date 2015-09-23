var myhttp = require("q-io/http");
myhttp.read("http://localhost:1337")
	.then(function (data) {
	console.log(JSON.parse(data));
	})
	.then(null, console.error)
	.done();
	


/* 
fetch JSON @ ... and console.log it.
return promise successful (status 200) http request.
parse the returned JSON and console.log it


   ----- Official Answer -----

     var qhttp = require('q-io/http');

      qhttp.read("http://localhost:1337")
      .then(function (json) {
        console.log(JSON.parse(json));
      })
      .then(null, console.error)
      .done()
	  
*/