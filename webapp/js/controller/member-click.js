// Member click
$('.member-link').click(function() {
	var target = $(this).data('person');
	var $items = $('.'+target);
	console.dir($items);
	$('#all-items-holder .item').hide();
	$items.each(function(index, element) {
    	$(element).delay(index*50).fadeIn(400); // delays each subsequent fade by 50ms.
    	// Change 50 to match the duration of the fade and they will fade in one after the other.
	});
});