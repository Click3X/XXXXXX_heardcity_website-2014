define(["jquery", "util/helper", "util/nav", "util/side-bar"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
    	docBody.toggleNav();
        docBody.helper();
	});

});