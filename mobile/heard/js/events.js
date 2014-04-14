$('.sidebar-link').click(function() {
	var target = $(this).data('person');
	console.log('THis is the target: ' + target);
});