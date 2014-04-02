var newItems = [];

posAll.forEach(function() {
	var item = this ; 
	console.log('this is the item'+item);

	var name = item.split('{');
	console.log('This is the name ' + name);
});