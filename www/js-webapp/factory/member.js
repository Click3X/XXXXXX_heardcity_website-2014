function clueTipSoloMemberItems() {
	$(document).trigger('hideCluetip');

	var target = $('#' + $(this).attr('for')).val();
	$items = $('.'+target);

	var bio = '#' + target + '-bio';
	// HIDE ALL ITEMS
	$('#all-items-holder .item').hide();
	$('#member-bio').hide();

	$(function() {
		$('html, body').animate({scrollTop:0}, 'slow', function() {
			$('body').addClass('js-single-member');
		});

		$items.each(function(index, element) {
			$(element).delay(index*250).fadeIn(400); // delays each subsequent fade by 50ms.
		});
		$(bio).fadeIn(400);
	});
}

var Members = {

	init: function() {
		this.setUpNav();
		this.setUpTemplate();
		this.getData();
		// this.setUpItems();
		
		// this.appendMembersToPage();
		this.isOnScreen();
		this.bindUIActions();
	},

	setUpNav: function() {
		Members.subnavLinks = _.template("<li><a id='<%= id %>-link' href='#<%= id %>' class='member-link' data-person='<%= id %>'><%= name %></a></li>");
	},

	setUpTemplate: function() {
		Members.compiled = _.template(
			"<div id='<%= id %>-bio' class='container clearfix module module-member hidden' >" + /* style='background-image: url(<%= memberImage %>)' */
				"<div class='team-member-new clearfix'>" +
					"<ul class='member-text'>" +
						"<li class='misc-text'>This belongs to</li>" +
						"<li class='name'>" +
						"<%= name %>" + 
						"</li>" +
						"<li class='bio'><p>" + 
						"<%= bio %>" + 
						"</p></li>" + 
						"<li class='permalink'><a href='#' class='all-members' data-person='heardcity'>" +
						"&gt; View all items" +
						"</a></li>" +
					"</ul>" +
				"</div>" + 
			"</div>"
		);
	},

	getData: function() {
		$.getJSON("/www/js-webapp/data/members.json", function(data) {
			Members.appendSubnavToPage(data);
			// Members.appendItemsToPage(data);
			Members.appendMembersToPage(data);
			Members.prepMaps(data);
		});
	},

	setUpItems: function() {	
		Members.list = _.template("<% _.each(items, function(item) { if(item.coords) { var itemId = formatLink(item.name.toLowerCase()); %><li class=\'item <%= itemId + ' ' + id %>\'><img src='<%= item.image %>' alt='<%= item.name %>'><map id=\'<%= id %>\' name=\'<%= id %>\' class='map-link' data-person='<%= id %>'><area href='#' class='cluetip-div' shape='poly' coords='<%= item.coords %>' alt='<%= item.name %>' data-person='<%= id %>' data-item='<%= itemId %>' title=''></map></li> <%; } else { var itemId = formatLink(item.name.toLowerCase()); %> <li class='item <%= itemId + ' ' + id %>'><a class='cluetip-div' href='#' data-person=\'<%= id %>\' data-item='<%= itemId %>' title=''><img src='<%= item.image %>' alt='<%= item.name %>'></a></li><%; } }); %>");
		for(var i=0; i< Members.length; i++) {
			console.log('This is templage: ' + Members[i]);
		}
	},

	prepMaps: function(data) {
		var liArray = [];
		var ul = $('<ul/>', {'id': 'all-items', 'class': 'all-items'});
		for (i = 0; i < data.members.length; i++) {
			var member = data.members[i]; 
			// console.log('This is member:' + member); console.dir(member);
			var items = member.items;
			var sex = member.sex;
			$.each(items, function() {
				var item = $(this);
				
				var bio = this.bio;
				var src = this.image;
				var name = this.name;
				var coords = this.coords;
				var id = formatLink(name);
				var usemap = '#' + member.id + id;

				var img, map, area, li, a;

				var li = $('<li/>', {
                    'class':'item' + ' ' + id + ' ' + member.id
                });
				console.log('This is src:' + src);
				src = '/www/' + src;
				if(coords) {
                    img = $('<img/>', {
                        'src':src,
                        // src:image,
                        'alt':item.name,
                        'usemap':usemap,
                        // "data-src":blankGif
                        'data-src':src
                    }),
                    map = $('<map/>', {
                        'id':usemap,
                        'name':usemap,
                        'class':'map-link',
                        'data-person':member.id
                    }),
                    area = $('<area/>', {
                        href:'#',
                        shape:'poly',
                        coords:coords,
                        alt: id,
                        'data-person':member.id,
                        'data-item':id,
                        "title": "|" + "|" + name + "\'s" + "|" + name + "|" + bio + "|" + "<label for='"+member.id+"-"+id+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member.id+"' id='"+member.id+"-"+id+"' value='"+member.id+"'>",
                        'class':'cluetip-div'
                    });

                    map.append(area);
                    li.append(img);
                    li.append(map);

                    li.appendTo(ul);


                } else {
                    img = $('<img/>', {
                        // src:image,
                        src:src,
                        alt:item.name,
                        // "data-src":blankGif
                        'data-src':src
                    }),
                    a = $('<a/>', {
                        href:'#',
                        'data-person':member.id,
                        'data-item': id,
                        "title": "|" + "|" + name + "\'s" + "|" + name + "|" + bio + "|" + "<label for='"+member.id+"-"+id+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member.id+"' id='"+member.id+"-"+id+"' value='"+member.id+"'>",
                        class:'cluetip-div'
                    });
                    a.append(img);
                    li.append(a);
                    // liArray.push(li);

                    li.appendTo(ul);
                }

			});

		}
		$("#all-items-holder").append(ul);
		var deviceWidth;
		if(device == 'desk') {
			deviceWidth = 400;
		} else { deviceWidth = 280;}
		$('.cluetip-div').cluetip({
		    splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
		                     // ...and split the contents into separate divs where there is a "|"
		    showTitle: false, // hide the clueTip's heading
		    sticky: true,
		    dropShadow: true,
		    arrows: true,
		    dropShadowSteps:16,
		    width:deviceWidth,
		    positionBy: 'bottomTop',
		    closeText:'x',
		    fx: {
		        open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
		        openSpeed: 400
		    },
		    hoverIntent: {
		        sensitivity:  5,
		        interval:     30,
		        timeout:      0
		    },
		    onShow: function(ct, ci){
		        $('label').click(clueTipSoloMemberItems);
		        $('.cluetip-close').click(function() {
		            $(document).trigger('hideCluetip');
		        });
		    }
		});
	},

	appendSubnavToPage: function(data) {
		var i, subnav = "<ul id='member-nav' class='member-nav'>";
		subnav += "<li><a href='#heardcity' data-person='heardcity' class='member-link'>Heard City</a></li>";
		for (i = 0; i < data.members.length; i++) {
			subnav += Members.subnavLinks(data.members[i]);
		}
		subnav += "</ul>";

		$("#sub-nav").append(subnav);
	},
	
	appendMembersToPage: function(data) {
		var i, html = "";
		for (i = 0; i < data.members.length; i++) {
			html += Members.compiled(data.members[i]);
		}  

		$("#members").append(html); 

	},

	appendItemsToPage: function(data) {
		var i, allItems = "<ul id='all-items' class='all-items'>";
		for (i = 0; i < data.members.length; i++) {
			// allItems += Members.list(data.members[i]);
		}

		allItems += '</ul>';
		$("#all-items-holder").append(allItems);
		
		var deviceWidth = 400;
		$('.cluetip-div').cluetip({
		    splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
		                     // ...and split the contents into separate divs where there is a "|"
		    showTitle: false, // hide the clueTip's heading
		    sticky: true,
		    dropShadow: true,
		    arrows: true,
		    dropShadowSteps:16,
		    width:deviceWidth,
		    positionBy: 'bottomTop',
		    closeText:'x',
		    fx: {
		        open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
		        openSpeed: 250
		    },
		    hoverIntent: {
		        sensitivity:  5,
		        interval:     30,
		        timeout:      0
		    },
		    onShow: function(ct, ci){
		        // $('label').click(clueTipSoloMemberItems);
		        $('.cluetip-close').click(function() {
		            $(document).trigger('hideCluetip');
		        });
		    }
		});

	},

	isOnScreen: function() {
		/* THIS MAY NOT BE WORKING */
		// var visibility = $(this).onScreen;
		var visibility = VISIBILITY.isVisible(this);
		return visibility;
	},

	bindUIActions: function() {
		$(document).on("click", "#member-header a", function() {
			$(document).trigger('hideCluetip');

			var target = $(this).data('person'),
			$items = $('.'+target),
			$siblings = $('.item').not(target);

			// AJAX DEEP LINKING (start -- needs more!)
			window.location.hash = target;
        
			// SHOW BIO
			$('.module-member').hide();
			$bio = $('#'+target+'-bio').removeClass('hidden').fadeIn(400);
	
			// HIDE ALL ITEMS
			$('#all-items-holder .item').hide();

			// CHECK TO SEE IF HEARDCITY WAS CLICKED
			if(target == 'heardcity') {


				$(function() {
					$('html, body').animate({scrollTop:0}, 100, function() {
						$('body').removeClass('js-single-member');
						$('.item').css('opacity', 0).fadeIn(250).animate({opacity:1}, 250);

					});
				});
				
				$('#member-bio').fadeIn(500);

			} else {
				$('#member-bio').hide();
				$('html, body').animate({scrollTop:0}, 'slow');
				$('body').addClass('js-single-member');
				$items.each(function(index, element) {
			    	$(element).delay(index*250).fadeIn(400); // delays each subsequent fade by 50ms.
				});
			}
			
			// CLOSE NAV
			$('#member-header').addClass('side-bar-closed');
		});

		$(document).on("click", "#members .permalink .all-members", function() {
			$(document).trigger('hideCluetip');

			var target = $(this).data('person'),
			$items = $('.'+target),
			$siblings = $('.item').not(target);

			if(target == 'heardcity') {
				$(function() {
					$('html, body').animate({scrollTop:0}, 100, function() {
						$('body').removeClass('js-single-member');
						$('.item').css('opacity', 0).fadeIn(250).animate({opacity:1}, 250);
					});
				});
			$('#members > div').hide();
			$('#member-bio').fadeIn(500);

			}
		});


		// $(document).on("click", "#members .permalink .all-members", function() {
		// 	$(document).trigger('hideCluetip');

		// 	var target = $('#' + $(this).attr('for')).val();
		// 	$items = $('.'+target);

		// 	$(function() {
		// 		$('#member-bio').hide();
		// 		$('html, body').animate({scrollTop:0}, 'slow');
		// 		$('body').addClass('js-single-member');
		// 		$items.each(function(index, element) {
		// 	    	$(element).delay(index*250).fadeIn(400); // delays each subsequent fade by 50ms.
		// 		});
		// 	});

		// });

	}
};

Members.init();