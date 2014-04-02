// SUB MENU
define(["jquery", 
        "util/config",
        "controller/team-member-factory"], function($, config, teamMemberFactory) {
        
        // DEV PAGE WORK
        // SORT POSITIONS FOR ALL PAGE
        // var newItems = []
        // i=0;
        // posAll.forEach(function() {
        //     var item = posAll[i]; 
        //     var nameSplit = item.split('{');
        //     var names =nameSplit[0].split('.');
        //     var positions =nameSplit[1].split(' ');
            
        //     var top = positions[1];
        //     var left = positions[3];
        //     var item = names[0];
        //     var name = names[1];
        //     top = top.substring(0, top.length - 1);
        //     left = left.substring(0, left.length - 2);

        //     var itemObj = {
        //         name:name,
        //         item:item,
        //         top:top,
        //         left:left
        //     }

        //     newItems.push(itemObj);
        //     // console.log('this is name: ' + name + ' this is the item: ' + item);
        //     i++;
        // });
        // console.log('these are the new items: ' + newItems);
        // console.dir(newItems);

        // newItems.forEach(function(i, item) {
        // 	var item = JSON.stringify(newItems[item]);
        // 	document.write(item+',');
        // });




       
        var length = teamMemberFactory.length;
       	// ATTACH SIDEBAR TO DOM
	    // window.onload = (function(){ 
	    $(function(){ 
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

	    });

});