var q = require('q');
var def = q.defer();

function printError (error) {
	console.log(error.message);
}
def.promise.then(console.log, console.log);
def.resolve("I FIRED");
def.reject("I DID NOT FIRE");

/*      ----- Official Answer-----

var q = require('q')
        , def = q.defer();

      def.promise.then(console.log, console.log);
      def.resolve("I FIRED");
      def.reject("I DID NOT FIRE");
	  */