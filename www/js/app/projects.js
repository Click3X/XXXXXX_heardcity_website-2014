define(["jquery", "modern", "util/helper", "util/nav", "util/grid", "util/feat-button"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
        docBody.toggleNav();
        docBody.helper();
        
        Grid.init();


        // Temp script to disable text link from refreshing page
        // !!! COME BACK & properly attach to li element !!!
        
        $('.text-link').click(function(event) {
        	event.preventDefault();
        	$(this).closest('.img-link').click();
        });

	});

});