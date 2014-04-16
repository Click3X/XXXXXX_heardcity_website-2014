$(document).ready(function() {
    var $mMenu = $("#mmenu");
        // HEADER MENU OPEN CLOSE
    $mMenu.hide();
    $(".mtoggle").click(function() {
        $mMenu.slideToggle(200);
    });

    $('#mmenu a').click(function() {
        var target = $(this).attr('href');
        target = target.substr(1);
        console.log('This is your target: ' + target);
        $('#page-title').text(target);

        $mMenu.slideToggle(200);
    });

	var $memBioName = $('#member-bio .name');
    var $memBioBio = $('#member-bio .bio');
    var heardBio = "People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.";
    var heardName = "Heard City";
    var recentlyClicked = [];
    function sortItems(memberArray) {
	    var sortedHolder = [];
	    // GET MEMBER ITEMS ADD TO PAGE
	    for(var i=0; i<memberArray.length; i++) {
	        var items = memberArray[i].items;
	        for(var l=0; l < items.length; l++) {
	            sortedHolder.push(items[l]);    
	        }
	    }
	    return sortedHolder;
	}

    // BUILD DATA
    $.getJSON("heard/js/members.json", function(data) {
	    for (i = 0; i < data.members.length; i++) {
            var memberInfo = data.members[i];
            var member = new Members(memberInfo);
            memberArray.push(member);
        }

    	var sortsItems = sortItems(memberArray);
		var sortedItems = _.indexBy(sortsItems, 'position');
		console.log('These are your sorted items: ' + sortedItems); console.dir(sortedItems);

		$.each(sortedItems, function(k) {
			console.log('built!');
			sortedItems[k].build('#page1 > div.ui-content');
			// console.dir(sortedItems[k]);
			recentlyClicked.push(sortedItems[k]);

		});


		$memBioName.text(heardName);
		$memBioBio.text(heardBio);

		// ADD CLUE TIP
        initClueTip();
    });




    // HASH TAG - ENABLE DEEP LINKING
    // $('a[href^="#"]').not('.all-members, .navicon, #sub-nav-trigger').bind('click vclick', function () {
    //     location.hash = $(this).attr('href');
    //     return false;
    // });

});


$( document ).on( "pagecreate", "#page1", function() {

	

    // SWITCH PAGE TITLE
    $('#page-title').text('Our Team');
    // $('#mmenu li').show();
    // $('#page-ourteam').hide();

    $('#sub-nav-trigger').click(function() {
    	$(document).trigger('hideCluetip');
    });

    $('.mtoggle').click(function() {
		$(document).trigger('hideCluetip');
    });

    

	// INIT VARS
	var $memBioName = $('#member-bio .name');
    var $memBioBio = $('#member-bio .bio');
    var heardBio = "People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.";
    var heardName = "Heard City";
    var $allItems = $('#page1 > div.ui-content');
    
    var $body = $('body');

    $body.addClass('ourteam');

	// SIDE PANEL OPEN CLOSE
    $( document ).on( "swipeleft", "#ourteam", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        $(document).trigger('hideCluetip');

        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#right-panel" ).panel( "open" );
            } 
        }
    });






///////////////////////////////////////////////////////// CLICK EVENTS //////////////////////////////////////////////////////////////////
    // SIDEBAR CLICK EVENT
    $('.sidebar-link').click(function() {
    	// HIDE CLUETIP
    	$(document).trigger('hideCluetip');

		// REMOVE EXISING ITEMS
		if(recentlyClicked.length > 0) {
			for(var i=0; i<recentlyClicked.length; i++) {
				recentlyClicked[i].remove();
			}
		}

		// STORE MATCHING MEMBER - PUT IN NAME
		var memberId = $(this).data('person');
		var selectMember = _.where(memberArray, {id:memberId});

		// ADD MEMBER BIO
		$memBioName.text(selectMember[0].name);
		$memBioBio.text(selectMember[0].bio);

		// GET MEMBER ITEMS ADD TO PAGE
		var items = selectMember[0].items;
		console.log('These are the items!'); console.dir(items);
		for(var i=0; i<items.length; i++) {
			items[i].build($allItems);
			recentlyClicked.push(items[i]);
			$('.lazy').lazyload({
    			effect : 'fadeIn'
  			});
		}

		$('.all-items').css('padding-bottom', '863px');
		// $('img').trigger('unveil');

		// ADD CLUE TIP
        initClueTip();
	});

	// ALL MEMBER CLICK
	$('#all-members, #all-members-bio').click(function() {
		// HIDE CLUETIP
    	$(document).trigger('hideCluetip');

		// REMOVE EXISING ITEMS
		if(recentlyClicked.length > 0) {
			for(var i=0; i<recentlyClicked.length; i++) {
				recentlyClicked[i].remove();
			}
		}

		// STORE MATCHING MEMBER - PUT IN NAME
		var memberId = $(this).data('person');
		var selectMember = _.where(memberArray, {id:memberId});

		// ADD MEMBER BIO
		$memBioName.text(heardName);
		$memBioBio.text(heardBio);

		// GET MEMBER ITEMS ADD TO PAGE
		var sortsItems = sortItems(memberArray);
		var sortedItems = _.indexBy(sortsItems, 'position');
		console.log('These are your sorted items: ' + sortedItems); console.dir(sortedItems);

		$.each(sortedItems, function(k) {
			sortedItems[k].build($allItems);
			// console.dir(sortedItems[k]);
			recentlyClicked.push(sortedItems[k]);
		});

		$('.all-items').css('padding-bottom', '1299%');

		// ADD CLUE TIP
        initClueTip();
	});


	// var scrollDiv = $('.ui-content').get(2);
	// console.log('This is scrollDiv' + scrollDiv); console.dir(scrollDiv);

	// var scrollDivTop =  function() {
	// 	return scrollDiv.scrollTop;
	// }


	// window.onscroll = function (event) {
	// 	var divTop = scrollDiv.scrollTop;
	// 	if(divTop > 1000) {
	// 		$('.item img').trigger('unveil');
	// 	}
	//   // called when the window is scrolled.
	// }
	

});