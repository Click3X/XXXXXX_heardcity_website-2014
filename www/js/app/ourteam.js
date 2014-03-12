define(["jquery", "util/helper", "util/nav", "util/side-bar", "util/team-members-json", "util/map-links"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
    	docBody.toggleNav();
        docBody.helper();
	});

    // See if SELECTED MEMBER HAS BEEN SET
    $(function() {
        if(selectedMember) {
          //  console.log('We have a selectedMember' + selectedMember); console.dir(selectedMember);
            
            // if so get her ITEMS
            var target = '.item-holder.' + selectedMember,
            siblings = $('.item-holder').not(target);

            //console.log('Here ARE the siblings: ' + siblings); console.dir(siblings);
            // SHOW individual items
            $('.item-holder').show();
            siblings.hide();    
            $('body.ourteam').addClass('js-single-member');
            $(target).show();


            // Show member Bio
            showMemberBio(selectedMember);

        }
    });

});