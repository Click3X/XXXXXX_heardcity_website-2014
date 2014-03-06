// SIDE BAR NAV
var sideBar = $('#side-bar-nav'),
clickClose = $('#click-close'),

openShutDroor = function() {
	var sideNav = $('body, #side-bar-nav'),
	value = sideNav.css('right') === '250px' ? '60px' : '250px';
	sideNav.animate({
		right: value
		}, 150);
	sideBar.toggleClass('open-nav');
	clickClose.toggleClass('hidden');
}

$('#push, #close').click(function () {
	
	openShutDroor();
	clickClose.click(function() {
		openShutDroor();
		$(this).addClass('hidden');
	})
});

// SIDE BAR hover
$('.members-list').hover(function() {
	$('#push').toggleClass('hide-push')
});
