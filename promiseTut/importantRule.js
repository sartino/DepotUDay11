var q = require('q');
var def = q.defer();

function iterate(num) {
	console.log(num);
	return num +1;
}
function throwMyGod() {
	throw new Error ("OH NOES");
}

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
	

/* 
//create function 'throwmygod' that throw "OH NOES"
//function iterate that prints 1st arg(integer) to it + returns arg+1;
//create promise chain that wraps 'iterate method' using fCall then iterate 10x
//attach console.log as a rejection handler at bottom of chain
//call 'throwMyGod' after 5th call of 'iterate'
//done handler?

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