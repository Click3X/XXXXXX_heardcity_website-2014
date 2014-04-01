// BUILD SUB MENU
$.fn.buildSubNav = function(members, current) {

	// VALIDATE STRINGS used for HTML ATTRIBUTES and PROPERTIES
	function validateString(string) {
		var goodString = string.replace(/[^a-z0-9\s]/gi, '');
		goodString = goodString.toLowerCase();
		goodString = goodString.replace(/[_\s]/g, '-');
		return goodString;
	}

    var memDiv = $('<div/>', {
        id:'member-header',
        class:'member-header clearfix side-bar-closed'
    }), 
    div = $('<div/>', {
        id:'member-button',
        class:'menu-button active'
    }).html('<div>&#9776;</div>'),
    pageTitle = $('<span/>', {
         id:'member-title',
        class:'page-title all-members'
    }).text(current),
    nav = $('<nav/>'),
    navUl = $('<ul/>', {
        'data-breakpoint':'800',
        class: 'flexnav with-js opacity sm-screen flexnav-hide',
        id:'member-fixed'
    }),
    currentClass = current;
    
    // MAKE LI FOR EACH PAGE
    $(members).each(function(i, member) {
        if(current == member) {
            currentClass = ' current-member';
        } else {currentClass = ''}
        var pageId = validateString(member),
        pageLi = $('<li/>', {
            // class:'menu-'+ memberId + currentClass
        }), 
        pageA = $('<a/>', {
            href:pageId.replace(/-/g, ''),
            "data-hover": member,
            class:'sidebar-link'
        }).text(member);

        $(pageLi).append(pageA);
        $(navUl).append(pageLi);
    });

    nav.append(navUl);
    memDiv.append(div, pageTitle, nav);
    if ($('body.ourteam').length){
        $('body').append(memDiv);
    }

    $("#member-fixed").flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#member-button'
    });

}