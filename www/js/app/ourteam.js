define(["jquery", 
        "util/helper", 
        "bootstrap.min", 
        "util/side-bar", 
        "util/team-members-json",
        "in-view",
        // "util/map-links",
        "clue-tip",
        "util/clue-hover",
        "hover"
        ], function($) {

            // Add helper button
            $(function() {
            	var docBody = $('body');
                docBody.helper();
        	});

            // See if SELECTED MEMBER HAS BEEN SET on OUR PAGE document.ready
            $(function() {
                if(selectedMember) {
                    console.log('This is the selectedMember: ' + selectedMember); console.dir(selectedMember);
                    var target = '.item-holder.' + selectedMember,
                    siblings = $('.item-holder').not(target);

                    console.log('These are the siblings: ' + siblings); console.dir(siblings);

                    // SHOW individual items
                    $('.item-holder').show();
                    siblings.hide();    
                    $('body.ourteam').addClass('js-single-member');
                    $(target).show();
                    $('#member-bio .permalink > a').show();

                    // Show member Bio
                    showMemberBio(selectedMember);
                }
            });

    

            // $('#houdini').cluetip({
            //     splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
            //                      // ...and split the contents into separate divs where there is a "|"
            //     showTitle: false, // hide the clueTip's heading
            //     sticky: true,
            //     dropShadow: true,
            //     arrows: true,
            //     dropShadowSteps:12,
            //     fx: {
            //           open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
            //           openSpeed: 200
            //         }
            //   });

});