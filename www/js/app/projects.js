define(["jquery", "modern", "util/helper", "bootstrap.min", "util/grid", "util/feat-button"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
        docBody.helper();
        
        // Video Projects Thumb Grid
        Grid.init();
	});

});