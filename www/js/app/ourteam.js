define(["jquery", "util/helper", "util/nav", "util/side-bar", "util/team-members-json"], function($) {

    // Add helper button
    $(function() {
    	var docBody = $('body');
    	docBody.toggleNav();
        docBody.helper();
	});


    // Hover Class for Our Team Page to see POP UP
    var mapLinks = $('.map-link');
    mapLinks.hover(
        function() {
            var neighbor = $(this).siblings('.neighbor'),
            parentLi = $(this).parent('li').eq(0),
            parentHeight = parentLi[0].clientHeight,
            parentWidth = parentLi[0].clientWidth,
            neighborWidth = neighbor[0].clientWidth,
            neighborHeight = neighbor[0].clientHeight,
            parOffset;

            // Get offset for POPUP depending on Parent/Neighbor Ratio
            if(neighborWidth >= parentWidth) {
                parOffset = (neighborWidth/2)-(parentWidth/2);
            } else {
                parOffset = (parentWidth/2)-(neighborWidth/2);
            }

            // Change CSS Properties
            $(neighbor[0]).css({   
                "top": "-"+(neighborHeight + 12)+"px",
                "left":"-"+parOffset+"px",
                "z-index":1,
                "opacity":1
            });

            // Z-index class for hover effect - THIS IS BUGGY - NEEDS TENDING T0
            // neighbor.addClass('js-high-z');
            parentLi.addClass('posZ');
            $('.negZ').removeClass('negZ').addClass('zeroZ');
        }, 
        function() {
            var neighbor = $(this).siblings('.neighbor'),
            parentLi = $(this).parent('li').eq(0);

            $(neighbor[0]).css({   
                "top":"auto",
                "left":"auto",
                "z-index":-1,
                "opacity":0
            });

            // neighbor.removeClass('js-high-z');
            parentLi.removeClass('posZ');
            $('.list-item').removeClass('negZ')
            parentLi.addClass('negZ');

            // After a short duration, remove negZ from original parentLi
            setTimeout(function() {
                parentLi.removeClass('negZ');    
            }, 750);
        }
    );


});