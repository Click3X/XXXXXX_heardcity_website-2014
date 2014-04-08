var Members = {

	init: function() {
		this.setUpNav();
		this.setUpTemplate();
		this.setUpItems();
		this.getData();
		// this.appendMembersToPage();
		this.isOnScreen();
		this.bindUIActions();
	},

	setUpNav: function() {
		Members.subnavLinks = _.template("<li><a id='<%= id %>-link' href='#<%= id %>' class='member-link' data-person='<%= id %>'><%= name %></a></li>");
	},

	setUpTemplate: function() {
		Members.compiled = _.template(
			"<div id='<%= id %>-bio' class='module module-member hidden' >" + /* style='background-image: url(<%= memberImage %>)' */
				"<div class='member-info'>" +
					"<h3 class='member-title'>" +
					"<%= name %>" + 
					"</h3>" +
					"<p class='member-director'>" + 
					"<%= bio %>" + 
					"</p>" + 
					"<a href=''>" +
					"&gt; View all items" +
					"</a>" +
				"</div>" + 
			"</div>"
		);
	},

	setUpItems: function() {		
		Members.list = _.template("<% _.each(items, function(item) { if(item.coords) { var itemId = formatLink(item.name.toLowerCase()); %><li class=\'item <%= itemId + ' ' + id %>\'><span><%= item.name %></span><img src='<%= item.image %>' alt='<%= item.name %>'><map id=\'<%= id %>\' name=\'<%= id %>\' class='map-link' data-person='<%= id %>'><area href='#' class='cluetip-div' shape='poly' coords='<%= item.coords %>' alt='<%= item.name %>' data-person='<%= id %>' data-item='<%= itemId %>' title='||<%= name %>s | <%= item.name %> | <% var bio = item.bio.replace(/'/g, '\\''); %><%= bio %> | <label for=\'<%= id + item.name %>\' class=\'permalink\' View <%= sex %> stuff</label><input type=\'radio\' name=\'<%= id %>\' id=\'<%= id + item.name %>\' value=\'<%= id %>\' class=\'cluetip-div\'>'></map></li> <%; } else { var itemId = formatLink(item.name.toLowerCase()); %> <li class='item <%= itemId + ' ' + id %>'><a class='cluetip-div' href='#' data-person=\'<%= id %>\' data-item='<%= itemId %>' title='||<%= name %>s | <%= item.name %> | <% var bio = item.bio.replace(/'/g, '\\''); %><%= bio %> | <label for=\'<%= id + item.name %>\' class=\'permalink\' > View <%= sex %> stuff</label><input type=\'radio\' name=\'<%= id %>\' id=\'<%= id + item.name %>\' value=\'<%= id %>\'><img src=\'<%= item.image %>\' alt=\'<%= item.name %>\''></a></li><%; } }); %>");    

	},

	getData: function() {
		$.getJSON("js/data/members.json", function(data) {
			Members.appendSubnavToPage(data);
			Members.appendItemsToPage(data);
			Members.appendMembersToPage(data);
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
			allItems += Members.list(data.members[i]);
		}

		allItems += '</ul>';
		$("#all-items-holder").append(allItems);

	},

	isOnScreen: function() {
		/* THIS MAY NOT BE WORKING */
		// var visibility = $(this).onScreen;
		var visibility = VISIBILITY.isVisible(this);
		return visibility;
	},

	bindUIActions: function() {
		$(document).on("click", "#member-nav a", function() {
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
				// var topItems=[];
				// var bottomItems = [];

				$(function() {
					$('html, body').animate({scrollTop:0}, 500, function() {
						$('body').removeClass('js-single-member');
						$('.item').css('opacity', 0).show(250).animate({opacity:1}, 250);
					});

					

					

				});
				

				// $(topItems).each(function(index, element) {
				// 	$(element).delay(index*250).fadeIn(400);
				// });
				// $(bottomItems).show();
			} else {
				$('html, body').animate({scrollTop:0}, 'slow');
				$('body').addClass('js-single-member');
				$items.each(function(index, element) {
			    	$(element).delay(index*250).fadeIn(400); // delays each subsequent fade by 50ms.
				});
			}
		});
	}
};

Members.init();