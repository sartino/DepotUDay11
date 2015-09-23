var q = require('q');
var def = q.defer();

function parsePromised(arg) {    //creates a promise
	
	try {
		def.resolve(JSON.parse(arg));
	} catch (error) {
		def.reject(error);
	}
	return def.promise;
}
	parsePromised(process.argv[2]).then(null, console.log);


/*    ----- Official Answer-----

      var q = require('q');

      function parsePromised (json) {
        var def = q.defer()
          , result;

        try {
          result = JSON.parse(json);
        } catch (e) {
          def.reject(e);
        }

        def.resolve(result);
        return def.promise;
      };

      parsePromised(process.argv[2])
      .then(null, console.log)
	  
	  */