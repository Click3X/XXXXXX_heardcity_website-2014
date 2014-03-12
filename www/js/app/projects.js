define(["jquery", "modern", "util/helper", "bootstrap.min", "util/grid", "util/feat-button"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
        docBody.helper();
        
        // Video Projects Thumb Grid
        Grid.init();


        // Temp script to disable text link from refreshing page
        // !!! COME BACK & properly attach to li element !!!
        $('.text-link').click(function(event) {
        	event.preventDefault();
        	$(this).closest('.img-link').click();
        });

	});

});