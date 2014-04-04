// CLUE TIP ON OUR TEAM PAGE - Make sure TEAM JSON SCRIPT HAS ALREADY RUN
// SIDE BAR CONTROLLER
define(["jquery", 
        "util/config",
        "controller/team-member-factory"], function($, config, teamMemberFactory) {

        	var $body = $('body');
        	var members = $body.configData().jsonMembers;

			$(window).ready(function() {

			showMemberBioAgain = function(member) {
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
                        $('#member-bio .permalink .all-members').show();
                    }
                });
            }

			clueTipSoloMemberItems = function() {
				$(document).trigger('hideCluetip');
				$('html, body').animate({scrollTop : 0},800);
				
				var member = $("#" + $(this).attr('for')).val();
                // console.log('THis is member: ' + member);
                var memberItems = '.item-holder'+'.'+member;
                var $allOtherMembers = $('.item-holder').not(memberItems);
                var $memberItems = $(memberItems);
                var k = 0; var l=0;
                var length = $allOtherMembers.length;
                var mlength = $memberItems.length;

                $('html, body').animate({scrollTop : 0},800);

                // HIDE OTHERS
                function hideMember(obj) {
                    var showed = []; var i= 0; 
                    setTimeout(function() {
                        $(obj).removeClass('item-show').hide().addClass('hide-mem-items', 250);
                    }, 80 * ( l + 1 ));

                    setTimeout(function() {
                        $body.addClass('js-single-member'); 
                    }, 280);
                }

                // SHOW MEMBER
                function showMember(obj, l) {
                    setTimeout(function() {
                        $(obj).removeClass('hide-mem-items').show().addClass('item-show', 500);
                    }, 120 * ( l + 1 ));
                }           

                // UNVIEL ALL IMAGES 
                var $imgs = $memberItems.find('img');
                $imgs.trigger("unveil");

                // SHOW MEMBER BIO
                showMemberBioAgain(member);
                // if click = CLOSE
                // $clickClose.addClass('hidden');
                // CLOSE SIDEBAR
                // $('#member-header').addClass('side-bar-closed');
                
                // TOGGLE HIDE - SHOW CLASS ON EACH MEMBER LI
                function init() {
                     for( k=0; k < length; k++) {
                        var obj = $allOtherMembers[k];
                        hideMember(obj, k);
                    }

                    for(l=0; l < mlength; l++) {
                        var obj = $memberItems[l];
                        showMember(obj, l); 
                    }
                }

               init();
            }


				// clueTipSoloMemberItems = function() {
				// 	$(document).trigger('hideCluetip');
				// 	 $('html, body').animate({scrollTop : 0},800);

					//  // var member = $("#" + $(this).attr('for')).val();
					//  var member = $(this);
					//  toggleMemberItems(member);

					// // SHOW member BIO
					// $('#member-bio .permalink > a').show();
					// showMemberBioAgain(member);
				// }


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
