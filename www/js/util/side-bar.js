// SIDE BAR NAV
var sideBar = $('#side-bar-nav'),
clickClose = $('#click-close'),
allMembers = $('.all-members'),
memberBio = $('#member-bio'),
sidebarLinks = $('.sidebar-link');

// open - shut side Nav
openShutDroor = function() {
	var sideNav = $('body, #side-bar-nav'),
	value = sideNav.css('right') === '250px' ? '60px' : '250px';
	sideNav.animate({
		right: value
		}, 150);
	sideBar.toggleClass('open-nav');
	clickClose.toggleClass('hidden');
}


// loop through JSON data and CREATE ARRAY (controller?)
showMemberBio = function(member) {
	$(jsonMembers).each(function() {
		var name = this.name,
		member_class = this.member_class,
		bio = this.bio,
		match;
		
		if(member == member_class) {
			match = member;

			$('#member-bio .bio > p').html(bio);
			$('#member-bio .name').html(name);
		}
	});
}


// Closing the Sidebar (controller?)
$('#push, #close').click(function () {
	openShutDroor();
	clickClose.click(function() {
		openShutDroor();
		$(this).addClass('hidden');
	})
});


// SIDE BAR hover (controller?)
$('.members-list').hover(function() {
	$('#push').toggleClass('hide-push')
});


// If name is clicked, only show their items (controller?)
showSoloMemberItems = function() {
	var member = $(this).data('person'),
	target = '.item-holder.' + member,
	siblings = $('.item-holder').not(target);

	// console.log( 'This is member: ' + member );
	// console.log( 'This is siblings: ' + siblings ); console.dir(siblings);

	// SHOW individual ITEMS
	$('.item-holder').show();
	siblings.hide();	
	$('body.ourteam').addClass('js-single-member');
	$(target).show();

	// SHOW member BIO
	memberBio.show();
	showMemberBio(member);
	
	// OPEN / SHUT side bar NAV
	openShutDroor();
}
// ITEM filter
sidebarLinks.click(showSoloMemberItems);


// If Our Team is clicked, show all member items
allMembers.click(function() {
	$('.item-holder').show();
	memberBio.hide();
	$('body.ourteam').removeClass('js-single-member');
});
