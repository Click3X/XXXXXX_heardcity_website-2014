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
						"<li class='permalink'><a href='#' class='all-members' style='display: none;'>" +
						"&gt; View all items" +
						"</a></li>" +
					"</ul>" +
				"</div>" + 
			"</div>"
		);
	},

	setUpItems: function() {		
		Members.list = _.template("<% _.each(items, function(item) { if(item.coords) { var itemId = formatLink(item.name.toLowerCase()); %><li class=\'item <%= itemId + ' ' + id %>\'><img src='<%= item.image %>' alt='<%= item.name %>'><map id=\'<%= id %>\' name=\'<%= id %>\' class='map-link' data-person='<%= id %>'><area href='#' class='cluetip-div' shape='poly' coords='<%= item.coords %>' alt='<%= item.name %>' data-person='<%= id %>' data-item='<%= itemId %>' title=''></map></li> <%; } else { var itemId = formatLink(item.name.toLowerCase()); %> <li class='item <%= itemId + ' ' + id %>'><a class='cluetip-div' href='#' data-person=\'<%= id %>\' data-item='<%= itemId %>' title=''><img src='<%= item.image %>' alt='<%= item.name %>'></a></li><%; } }); %>");

	},

	getData: function() {
		$.getJSON("js-webapp/data/members.json", function(data) {
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
		$(document).on("click", "#member-header a", function() {
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
					$('html, body').animate({scrollTop:0}, 100, function() {
						$('body').removeClass('js-single-member');
						$('.item').css('opacity', 0).fadeIn(250).animate({opacity:1}, 250);

					});
				});
				
				$('#member-bio').fadeIn(500);
				// $(topItems).each(function(index, element) {
				// 	$(element).delay(index*250).fadeIn(400);
				// });
				// $(bottomItems).show();
			} else {
				$('#member-bio').hide();
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