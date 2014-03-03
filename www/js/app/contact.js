define(["jquery", "util/helper", "util/nav", "util/google-map"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
    	docBody.toggleNav();
        docBody.helper();
        $('.navLink').click();
	});

});