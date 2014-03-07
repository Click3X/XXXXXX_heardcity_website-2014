define(["jquery", "util/helper", "util/nav", "util/side-bar", "util/team-members-json"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
    	docBody.toggleNav();
        docBody.helper();
	});


    // Hover Class for Our Team Page
    var mapLinks = $('.map-link');
    mapLinks.hover(
        function() {
            var neighbor = $(this).siblings('.neighbor');
            neighbor.addClass('js-high-z');
        }, 
        function() {
            var neighbor = $(this).siblings('.neighbor');
            neighbor.removeClass('js-high-z');
        }
    );


});