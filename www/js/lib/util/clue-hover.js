// CLUE TIP ON OUR TEAM PAGE - Make sure TEAM JSON SCRIPT HAS ALREADY RUN
// SIDE BAR CONTROLLER
define(["jquery", 
        "util/config",
        "controller/team-member-factory"], function($, config, teamMemberFactory) {

        	var $body = $('body');
        	var members = $body.configData().jsonMembers;

			$(window).ready(function() {

				var showMemberBioAgain = function(member) {
			                $(members).each(function() {
			                    var name = this.name,
			                    member_class = this.member_class,
			                    bio = this.bio,
			                    memMatch;
			                    
			                    if(member == member_class) {
			                        memMatch = member;

			                        $('#member-bio .bio > p').html(bio);
			                        $('#member-bio .name').html(name);
			                        $('#sidebar-name').html(name);
			                    }
			                });
			            }

				clueTipSoloMemberItems = function() {
					$('body.ourteam').removeClass('js-single-member', 1000);
					$('.item-holder').addClass('item-hidden', 1000);

					var member = $("#" + $(this).attr('for')).val(),
					target = '.item-holder.' + member,
					siblings = $('.item-holder').not(target);

			//		console.log('This is member' + member); console.dir(member);

					// HIDE CLUETIP AFTER LINK CLICK
					$(document).trigger('hideCluetip');

					// console.log('This is var member: '+member);
					$('.item-holder').fadeIn( "slow", function() {});

					// Tighten up footer with less elements on screen
					siblings.hide();

					// Show Target
					$(target).removeClass('item-hidden', 1000);
					$(target).show();

					// Attempt at slowing things down
					$('body.ourteam').addClass('js-single-member', 1000);

					// SHOW member BIO
					$('#member-bio .permalink > a').show();
					showMemberBioAgain(member);
				}


				// ON CLUE TIP HOVER
				$('.cluetip-div').cluetip({
				    splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
				                     // ...and split the contents into separate divs where there is a "|"
				    showTitle: false, // hide the clueTip's heading
				    sticky: true,
				    dropShadow: true,
				    arrows: true,
				    dropShadowSteps:16,
				    width:400,
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
						})
			    	}	
				});


			});
});