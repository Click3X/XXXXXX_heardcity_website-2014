// SIDE BAR NAV
var sideBar = $('#side-bar-nav'),
clickClose = $('#click-close'),
allMembers = $('.all-members'),
memberBio = $('#member-bio'),
sidebarLinks = $('.sidebar-link');


// loop through JSON data and CREATE ARRAY
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


// If Our Team is clicked, show all member items
allMembers.click(function() {
	$('.item-holder').show();
	// memberBio.hide();
	$('#member-bio .permalink > a').hide();
	$('body.ourteam').removeClass('js-single-member');
	var defaultName = jsonDefaults.name;
	var defaultBio = jsonDefaults.bio;

	$('#member-bio .bio > p').html(defaultBio);
	$('#member-bio .name').html(defaultName);
	$('#sidebar-name').html(defaultName);
	console.log('this is default name: ' + defaultName + 'this is default bio: ' + defaultBio);
});



// Closing the Sidebar BY CLICKING ON OTHER AREA	
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



/////////////////////////////////// NEW FUNCTION
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 768) {
        	var sideNav = $('body, #side-bar-nav');
        	sideNav.css({"right":"60px", "top":0});
        	// sideNav.css('right', '60px');
            openShutDroor = function() {
				// var sideNav = $('body, #side-bar-nav'),
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

// MEMBER ITEMS isolated on CLICK
showSoloMemberItems = function() {
	var member = $(this).data('person'),
	target = '.item-holder.' + member,
	siblings = $('.item-holder').not(target);

	console.log('This is var member: '+member);
	// SHOW individual items
	$('.item-holder').show();
	siblings.hide();	
	$('body.ourteam').addClass('js-single-member');
	$(target).show();

	// SHOW member BIO
	// memberBio.show();
	$('#member-bio .permalink > a').show();
	showMemberBio(member);
	
	// OPEN / SHUT side bar NAV
	openShutDroor();
}
// ITEM filter
sidebarLinks.click(showSoloMemberItems);
