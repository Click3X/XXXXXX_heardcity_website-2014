// BUILD MENU
$.fn.buildFlexNav = function(pages, current) {

	// VALIDATE STRINGS used for HTML ATTRIBUTES and PROPERTIES
	function validateString(string) {
		var goodString = string.replace(/[^a-z0-9\s]/gi, '');
		goodString = goodString.toLowerCase();
		goodString = goodString.replace(/[_\s]/g, '-');
		return goodString;
	}

    var header = $('<header/>', {
        id:'site-header',
        class:'site-header clearfix'
    }), 
    div = $('<div/>', {
        id:'page-button',
        class:'menu-button active'
    }).html('<span>&#9776;</span>'),
    pageTitle = $('<span/>', {
        id:'page-title',
        class:'page-title'
    }).text(current),
    nav = $('<nav/>'),
    navUl = $('<ul/>', {
        'data-breakpoint':'800',
        class: 'flexnav with-js opacity sm-screen flexnav-hide',
         id:'page-fixed'
    }),
    currentClass = current;
    
    // MAKE LI FOR EACH PAGE
    $(pages).each(function(i, page) {
        if(current == page) {
            currentClass = ' current-page';
        } else {currentClass = ''}
        var pageId = validateString(page),
        pageLi = $('<li/>', {
            class:'menu-'+ pageId + currentClass
        }), 
        pageA = $('<a/>', {
            href:pageId.replace(/-/g, '') + '.html',
            "data-hover": page
        }).text(page);

        $(pageLi).append(pageA);
        $(navUl).append(pageLi);
    });

    nav.append(navUl);
    header.append(div, pageTitle, nav);
    if ($('body.home').length){
        $('body').append(header);
    } else { $('body').prepend(header); }

    $("#page-fixed").flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });

}