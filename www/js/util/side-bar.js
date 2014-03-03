// SIDE BAR NAV
$('#push, #close').click(function () {
	var $navigacia = $('body, #side-bar-nav'),
	val = $navigacia.css('right') === '250px' ? '60px' : '250px';
	$navigacia.animate({
		right: val
		}, 300);
	$('#side-bar-nav').toggleClass('open-nav');
});

// SIDE BAR hover
$('.members-list').hover(function() {
	$('#push').toggleClass('hide-push')
});
