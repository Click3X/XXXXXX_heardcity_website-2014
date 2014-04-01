// OUR TEAM - SHOW ALL MEMBERS
$.fn.sidebarClick = function() {



// LOOK FOR MEMBER MATCH - FILTER FOR CORRECT SELECTION
showMemberBio = function(jsonMembers, member) {
	$(jsonMembers).each(function() {
		var name = this.name,
		member_class = this.member_class,
		bio = this.bio,
		match;
		
		if(member == member_class) {
			match = member;

			$('#member-bio .bio > p').html(bio);
			$('#member-bio .name').html(name);
			$('#sidebar-name').html(name);
		}
	});
}




// MEMBER ITEMS isolated on CLICK
showSoloMemberItems = function(showMemberBio, jsonMembers) {
	
	$('body.ourteam').removeClass('js-single-member', 1000);
	$('.item-holder').addClass('item-hidden', 1000);

	var member = $(this).data('person'),
	target = '.item-holder.' + member,
	siblings = $('.item-holder').not(target);

	// console.log('This is member' + member); console.dir(member);

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
	showMemberBio(jsonMembers, member);
	
	// HIDE CLUETIP AFTER LINK CLICK
	// $(document).trigger('hideCluetip');

	// OPEN / SHUT side bar NAV
	// openShutDroor();
}
// ITEM filter
// sidebarLinks.click(showSoloMemberItems);

	var sidebarClicker = {
		showMemberBio:showMemberBio,
		showSoloMemberItems:showSoloMemberItems
	}


	return sidebarClicker;

}