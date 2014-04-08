$(function() {
	 // MOBILE CHECKING FOR CLUETIP
    var deviceWidth;
    if(device ==='mobile') {
        deviceWidth = 250;
    } else if( device ==='desk') {
        deviceWidth = 400;
    }
            
	$('.cluetip-div').cluetip({
	    splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
	                     // ...and split the contents into separate divs where there is a "|"
	    showTitle: false, // hide the clueTip's heading
	    sticky: true,
	    dropShadow: true,
	    arrows: true,
	    dropShadowSteps:16,
	    width:deviceWidth,
	    positionBy: 'bottomTop',
	    closeText:'x',
	    fx: {
	        open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
	        openSpeed: 250
	    },
	    hoverIntent: {
	        sensitivity:  5,
	        interval:     30,
	        timeout:      0
	    },
	    onShow: function(ct, ci){
	        $('label').click(clueTipSoloMemberItems);
	        $('.cluetip-close').click(function() {
	            $(document).trigger('hideCluetip');
	        });
	    }
	});
});