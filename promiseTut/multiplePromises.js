var q = require('q');
var def1 = q.defer();
var def2 = q.defer();

function all(def1, def2) {
      for () 
}

/* 
construct 2 promises using q.defer
function all (promise1, promise2){
      create internal promise using q.defer - return it
      create a counter var with initial val=0
      attach .then fulfillment handler...
}

//should print 1,2,3,4,5,"[eror: OH NOES]"



   ----- Official Answer -----

     var q = require('q');

      function iterate (num) {
        console.log(num);
        return ++num;
      };

      function throwMyGod () {
        throw new Error("OH NOES");
      };

      q.fcall(iterate, 1)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(throwMyGod)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(iterate)
      .then(null, console.log);
	  
*/