define(["jquery", "util/helper", "bootstrap.min"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
        docBody.helper();
	});

	// When address is hovered, add hover class to all li address elements
	$('.g-map-link').hover(function() {
			$('.g-map-link').addClass('addy'); }, 
		function() { 
			$('.g-map-link').removeClass('addy'); 
		});

});