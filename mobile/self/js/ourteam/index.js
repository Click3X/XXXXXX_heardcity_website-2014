$(document).ready(function() {

	// example for how you might do this with touch devices
	$('body').bind('touchstart', function(event) {
		event = event.originalEvent;
		var tgt = event.touches[0] && event.touches[0].target,
		$tgt = $(tgt);

		if (tgt.nodeName !== 'A' && !$tgt.closest('div.cluetip').length ) {
			$(document).trigger('hideCluetip');
		}
	});

	window.onscroll = function (e) {  
		$(document).trigger('hideCluetip');
	}

	var $memBioName = $('#member-bio .name');
    var $memBioBio = $('#member-bio .bio p');
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
    $.getJSON("js/ourteam/members.json", function(data) {
	    for (i = 0; i < data.members.length; i++) {
            var memberInfo = data.members[i];
            var member = new Members(memberInfo);
            memberArray.push(member);
        }

    	var sortsItems = sortItems(memberArray);
		var sortedItems = _.indexBy(sortsItems, 'position');
		// console.log('These are your sorted items: ' + sortedItems); console.dir(sortedItems);

		$.each(sortedItems, function(k) {
			// console.log('built!');
			sortedItems[k].build('#all-items');
			// console.dir(sortedItems[k]);
			recentlyClicked.push(sortedItems[k]);

		});


		$memBioName.text(heardName);
		$memBioBio.text(heardBio);

		// ADD CLUE TIP
        initClueTip();
    });

///////////////////////////////////////////////////////// CLICK EVENTS //////////////////////////////////////////////////////////////////
 var $allItems = $('#all-items');
    
    var $body = $('body');

 //    $body.addClass('ourteam');

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
		// console.log('I have been clicked! ' + memberId); console.dir(memberId);
		var selectMember = _.where(memberArray, {id:memberId});

		// ADD MEMBER BIO
		$memBioName.text(selectMember[0].name);
		$memBioBio.text(selectMember[0].bio);

		// GET MEMBER ITEMS ADD TO PAGE
		var items = selectMember[0].items;
		// console.log('These are the items!'); console.dir(items);
		for(var i=0; i<items.length; i++) {
			items[i].build($allItems);
			var $itemEl = items[i].build($allItems).get(0);
			// console.log('This is this: ' + $itemEl); console.dir($itemEl);

			var rImg = $($itemEl).find('img').get(0);

			// console.log('This is this: ' + rImg); console.dir(rImg);

			var rSrc = $(rImg).data('src');
			$(rImg).attr('src', rSrc);

			recentlyClicked.push(items[i]);

		}

		// $('#all-items').css('padding-bottom', '863px');
		$body.addClass('js-single-member');

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

		// $('#all-items').css('padding-bottom', '1299%');
		$body.removeClass('js-single-member');

		// ADD CLUE TIP
        initClueTip();
	});







});
