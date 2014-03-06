define(["jquery", "util/helper", "util/nav", "util/side-bar"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
    	docBody.toggleNav();
        docBody.helper();
	});

    // Temp hover function for demo - DELETE for PRODUCTION
	$('.wallet').hover(function() {
		console.log('THis is the Wallet!');
		$('.hover-bubble').toggleClass('show-hover');
	});


});