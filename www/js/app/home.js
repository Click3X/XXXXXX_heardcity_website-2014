define(["jquery",
        "util/helper",
        "bootstrap.min",
        "util/team-member-form",
        "util/carousel",
        "royalslider",
        "util/request-anim", 
        "util/parallax", 
        "util/sticky-nav"], function($) {


    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');
        // Toggle helper * DELETE FOR PRODUCTION
        docBody.helper();
    });

    $('.open-vid').click(function(event) {
    	console.log('I am open vid and I have been clicked!');
    	event.preventDefault();
    	var vidSib = $(this).siblings();
    	console.dir(vidSib);
    	vidSib.removeClass('hidden');
    });

});