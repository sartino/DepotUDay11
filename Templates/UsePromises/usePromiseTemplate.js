function mapAsync(iterator, obj, context) {
	var result = obj.map(iterator);
	return Promise.all(result);
};

//function mapAsyncWithOrder(iterator, context, descending);
//	var initialValue = Promise.resolve([]);
//	iterator = iterator.bind(context);

function mapAsyncInOrder(iterator, array, context) {};


function mapAsyncInDescendingOrder(iterator, array, context) {};