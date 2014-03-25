// CLUE TIP ON OUR TEAM PAGE - Make sure TEAM JSON SCRIPT HAS ALREADY RUN
$(window).ready(function() {

	$('.cluetip-div').cluetip({
	    splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
	                     // ...and split the contents into separate divs where there is a "|"
	    showTitle: false, // hide the clueTip's heading
	    sticky: true,
	    dropShadow: true,
	    arrows: true,
	    dropShadowSteps:16,
	    width:400,
	    positionBy: 'mouse',
	    closeText:'x',
	    fx: {
	          open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
	          openSpeed: 200
	        },
	    hoverIntent: {
      		sensitivity:  5,
      		interval:     30,
      		timeout:      0
    	}
	  });
});

