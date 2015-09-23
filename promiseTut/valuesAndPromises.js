var q = require('q');
var def = q.defer();

function attachTitle (theGood) {
	return ("DR. " + theGood);	
}
def.promise
.then(attachTitle)
.then(console.log);
def.resolve("MANHATTAN");

/*    ----- Official Answer-----

var q = require('q')
        , def = q.defer();

      function attachTitle (name) {
        return "DR. " + name;
      }

      def.promise
      .then(attachTitle)
      .then(console.log);

      def.resolve("MANHATTAN");
	  
	  */