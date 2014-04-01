// SIDE BAR CONTROLLER
define(["jquery", 
        "util/config",
        "controller/team-member-factory"], function($, config, teamMemberFactory) {
       
        // console.log('This is teamMemberFactory' + teamMemberFactory);
        var length = teamMemberFactory.length;
       	// ATTACH SIDEBAR TO DOM
	    window.onload = (function(){ 
	        var ul = $('<ul/>', {
	            class:'item-list'
	        }),
	        itemListHolder = $('#item-list-holder'),
	        winWidth = $(window).width(),
	        i =0;
	 
	        // CHECK WIN - WIDTH
	        // if(winWidth < 600) { length = 36; } 
	        // else { length = teamMemberFactory.length; }

	        while(i < length) {
	            var li = teamMemberFactory[i];
	            li.appendTo(ul);
	            i++;
	        }

	        ul.appendTo(itemListHolder);

	        var lis = ul.children(),
	        k =0;
	        
	        // REVEAL FUNCTION
	        function reveal(li) {
	            $(li).removeClass('item-hidden').addClass('item-show', 1000);
	        }
	        // SHOW AFTER TIMEOUT
	        function showLi(li, k) {
	            setTimeout(function() {
	                reveal(li);
	            }, 6 * ( k + 1 ));
	        }
	        // SHOW all lis
	        for( k=0; k < length; k++) {
	            var li = lis[k];
	            showLi(li, k);
	        }

	    })();

});