define(["jquery", "util/helper", "bootstrap.min", "util/side-bar", "util/team-members-json", "util/map-links"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
        docBody.helper();
	});

    // See if SELECTED MEMBER HAS BEEN SET on OUR PAGE document.ready
    $(function() {
        if(selectedMember) {
            var target = '.item-holder.' + selectedMember,
            siblings = $('.item-holder').not(target);

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