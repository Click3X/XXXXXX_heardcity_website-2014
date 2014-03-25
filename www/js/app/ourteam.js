define(["jquery", 
        "util/helper", 
        "bootstrap.min", 
        "util/side-bar", 
        "util/team-members-json",
        "in-view",
        "util/map-links"
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



            // TRY NEW MAP HIGHT
            // $(function() {
            //     $( document ).tooltip();
            //   });
    

});