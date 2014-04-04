// CLUE TIP ON OUR TEAM PAGE - Make sure TEAM JSON SCRIPT HAS ALREADY RUN
// SIDE BAR CONTROLLER
define(["jquery", 
        "util/config",
        "controller/team-member-factory"], function($, config, teamMemberFactory) {

	var $body = $('body');

	// ON CLUE TIP HOVER
	$('.cluetip-div').cluetip({
		splitTitle: '|',
		showTitle: false,
		sticky: true,
		dropShadow: true,
		arrows: true,
		dropShadowSteps:16,
		width:400,
		positionBy: 'bottomTop',
		closeText:'x',
		fx: {
			open: 'fadeIn',
			openSpeed: 250
		},
		hoverIntent: {
				sensitivity:  5,
				interval:     30,
				timeout:      0
		},
		onShow: function(ct, ci){
			$('label').click(function() {
				console.log('Ihave been clicked!');
			});
				$('.cluetip-close').click(function() {
					$(document).trigger('hideCluetip');
			});
		}
	});
});