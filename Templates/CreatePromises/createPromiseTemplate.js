var APromise = {};

APromise.all = function(promises){};

APromise.race = function(promises){
	return Promise.resolve(promises);
};

APromise.resolve = function(value){
	return Promise.resolve(value);
};

APromise.reject = function(err){
	return Promise.resolve(err);
};

module.exports.APromise = APromise;
