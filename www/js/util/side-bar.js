// SIDE BAR NAV
var sideBar = $('#side-bar-nav'),
clickClose = $('#click-close'),
allMembers = $('.all-members'),
itemHolders = $('.item-holder'),
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


// loop through JSON data
loopMembers = function(member) {
	$(jsonMembers).each(function() {
		var name = this.name,
		member_class = this.member_class,
		bio = this.bio,
		match;
		
		if(member == member_class) {
			console.log('We Have a Match!');
			match = member;

			$('#member-bio .bio > p').html(bio);
			$('#member-bio .name').html(name);
		}
	});
}


// Closing the Sidebar
$('#push, #close').click(function () {
	openShutDroor();
	clickClose.click(function() {
		openShutDroor();
		$(this).addClass('hidden');
	})
});

// SIDE BAR hover
$('.members-list').hover(function() {
	$('#push').toggleClass('hide-push')
});

// If name is clicked, only show their items
showSoloItems = function() {
	var member = $(this).data('person'),
	target = '.item-holder.' + member,
	$targetItems = $(target),
	siblings = itemHolders.not($targetItems);

	itemHolders.show();
	memberBio.show();
	siblings.hide();
	loopMembers(member);
	openShutDroor();
}

sidebarLinks.click(showSoloItems);

// If Our Team is clicked, show all member items
allMembers.click(function() {
	itemHolders.show();
	memberBio.hide();
});
