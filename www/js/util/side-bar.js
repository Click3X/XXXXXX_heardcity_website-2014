// SIDE BAR NAV
var sideBar = $('#side-bar-nav'),
clickClose = $('#click-close'),
allMembers = $('.all-members'),
memberBio = $('#member-bio'),
sidebarLinks = $('.sidebar-link');

$('#side-bar-nav').removeClass('mobile-hide-till-load');

// Closing the Sidebar BY CLICKING ON OTHER AREA	
$('#push, #close').click(function () {
	openShutDroor();
	clickClose.click(function() {
		openShutDroor();
		$(this).addClass('hidden');
	})
});


/////////////////////////////////// NEW FUNCTION
// Optimalisation: Store the references outside the event handler:
var $window = $(window);

function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 768) {
    	var sideNav = $('body, #side-bar-nav');
    	sideNav.css({"right":"60px", "top":0});
        openShutDroor = function() {
			var value = sideNav.css('right') === '250px' ? '60px' : '250px';
			sideNav.animate({
				right: value
				}, 150);
			sideBar.toggleClass('open-nav');
			clickClose.toggleClass('hidden');
		}
    } else {
    	var sideNav = $('body, #side-bar-nav');
    	sideNav.css({"right":"0px", "top":"-350px"});
    	openShutDroor = function() {
			var value = sideNav.css('top') === '42px' ? '-350px' : '42px';
			sideNav.animate({
				top: value
				}, 150);
			sideBar.toggleClass('open-nav');
			clickClose.toggleClass('hidden');
		}	
    }
}

// Execute on load
checkWidth();
// Bind event listener
$(window).resize(checkWidth);






// OUR TEAM - SHOW ALL MEMBERS
allMembers.click(function() {
	// HIDE CLUETIP AFTER LINK CLICK
	$(document).trigger('hideCluetip');
	
	$('.item-holder').show();
	// memberBio.hide();
	$('#member-bio .permalink > a').hide();
	$('body.ourteam').removeClass('js-single-member');
	var defaultName = jsonDefaults.name;
	var defaultBio = jsonDefaults.bio;

	$('#member-bio .bio > p').html(defaultBio);
	$('#member-bio .name').html(defaultName);
	$('#sidebar-name').html(defaultName);
});




// LOOK FOR MEMBER MATCH - FILTER FOR CORRECT SELECTION
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
			$('#sidebar-name').html(name);
		}
	});
}






// MEMBER ITEMS isolated on CLICK
showSoloMemberItems = function() {
	
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
	showMemberBio(member);
	
	// HIDE CLUETIP AFTER LINK CLICK
	$(document).trigger('hideCluetip');

	// OPEN / SHUT side bar NAV
	openShutDroor();
}
// ITEM filter
sidebarLinks.click(showSoloMemberItems);










