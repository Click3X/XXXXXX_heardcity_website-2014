$.fn.toggleNav = function() {

	/* Function to animate height: auto */
	function autoHeightAnimate(element, time){
	  	var curHeight = element.height(), // Get Default Height
	        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
	    	  element.height(curHeight); // Reset to Default Height
	    	  element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
	}

	var nav = $('#new-menu-collapse'),
	animateTime = 500,
	navLink = $('#new-menu-holder .top .navLink');
	navLink.click(function(){
		if(nav.height() === 0){
			autoHeightAnimate(nav, animateTime);
			$('#new-menu-collapse').removeClass('invisible');
		} else {
			nav.stop().animate({ height: '0' }, animateTime);
			$('#new-menu-collapse').addClass('invisible');
		}
	});

}