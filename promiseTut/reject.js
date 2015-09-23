var q = require('q');
var def = q.defer();

function printError (error) {
	console.log(error.message);
}
def.promise.then(null, printError);
setTimeout(def.reject, 300, Error("REJECTED!"));

/*    -------Official Answer------

      function printError (err) {
        console.log(err.message);
      }

      def.promise.then(null, printError);
      setTimeout(def.reject, 300, new Error("REJECTED!"));
----------------------------------------
def.promise.then(console.log);
setTimeout(def.resolve, 300, "RESOLVED!");

use q to create a promise
function to print error.messages using console.log
pass this function as a rejection handler to the then method
manually reject that promise setTIMEOUT 300MS
	pass it an error object with parameter "REJECTED!";" 
*/