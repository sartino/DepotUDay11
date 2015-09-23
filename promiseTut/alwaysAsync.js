var q = require('q');
var def = q.defer();

def.promise.then(console.log);
def.resolve("SECOND");
console.log("FIRST");


/*    ----- Official Answer-----

var q = require('q')
        , deferred = q.defer();

      deferred.promise.then(console.log);
      deferred.resolve("SECOND");
      console.log("FIRST");
	  */