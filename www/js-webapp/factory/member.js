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

function getOffsetSum(elem) {
  var top=0, left=0
 
  while(elem) {
    top = top + parseInt(elem.offsetTop)
    left = left + parseInt(elem.offsetLeft)
    elem = elem.offsetParent       
  }
    
  return {top: top, left: left}
}


var Members = {

	init: function() {
		this.setUpNav();
		this.setUpTemplate();
		this.getData();
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
		$.getJSON(base + "js-webapp/data/members.json", function(data) {
			Members.appendSubnavToPage(data);
			Members.appendMembersToPage(data);
			Members.prepMaps(data);
		});
	},

	// setUpItems: function() {	
	// 	Members.list = _.template("<% _.each(items, function(item) { if(item.coords) { var itemId = formatLink(item.name.toLowerCase()); %><li class=\'item <%= itemId + ' ' + id %>\'><img src='<%= item.image %>' alt='<%= item.name %>'><map id=\'<%= id %>\' name=\'<%= id %>\' class='map-link' data-person='<%= id %>'><area href='#' class='cluetip-div' shape='poly' coords='<%= item.coords %>' alt='<%= item.name %>' data-person='<%= id %>' data-item='<%= itemId %>' title=''></map></li> <%; } else { var itemId = formatLink(item.name.toLowerCase()); %> <li class='item <%= itemId + ' ' + id %>'><a class='cluetip-div' href='#' data-person=\'<%= id %>\' data-item='<%= itemId %>' title=''><img src='<%= item.image %>' alt='<%= item.name %>'></a></li><%; } }); %>");
	// 	for(var i=0; i< Members.length; i++) {
	// 	}
	// },

	prepMaps: function(data) {
		var liArray = [];
		var ul = $('<ul/>', {'id': 'all-items', 'class': 'all-items'});
		for (i = 0; i < data.members.length; i++) {
			var member = data.members[i];
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

				var blankGif = 'images/sprites/blank.gif';

				src = base + src;

				var li = $('<li/>', {
                    'class':'item hidden' + ' ' + id + ' ' + member.id
                });            


				// console.log('This is src:' + src);
				// src = base + src;
				if(coords) {
                    img = $('<img/>', {
                        'src':src,
                        // 'src':blankGif,
                        'alt':item.name,
                        'usemap':usemap,
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
                        src:src,
                        // src:blankGif,
                        alt:item.name,
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
                    li.appendTo(ul);
                }

			});
			

			$(function() {
				$("#all-items-holder").append(ul);	
				var lis = $('.item'),
		        k =0;

				if(selectedMember) {
					var target = selectedMember,
					lis = $('.'+target);
					$('body').addClass('js-single-member');
					$('.module-member').hide();
					$('#'+target+'-bio').removeClass('hidden').fadeIn(400);
				}
		        
		        // REVEAL FUNCTION
		        function reveal(li) {
		            $(li).removeClass('hidden').fadeIn(300);
		        }
		        // SHOW AFTER TIMEOUT
		        function showLi(li, k) {
		            setTimeout(function() {
		                reveal(li);
		            }, 12 * ( k + 1 ));
		        }
		        // SHOW all lis
		        var topItems=[], bottomItems = [];
		        var blankGif = 'images/sprites/blank.gif';
		        for( k=0; k < lis.length; k++) {
		            var currentLi = lis[k];
		            var li = $(currentLi)[0];

		            var perTop = $(li).css('top');
		            perTop= parseInt(perTop.substr(0, perTop.length-1)); 
		            if(parseInt(perTop) > 10) { 
		            	// var img = $(li).find('img');
		            	// img.attr('src', blankGif);
		            	bottomItems.push(li);
		            }
		            if(parseInt(perTop) < 10) { 
		            	topItems.push(li);
		            }

		            for(var i=0; i < topItems.length; i++) {
		            	showLi(topItems[i], i);
		            }

		            $(bottomItems).show();

		        }

			});

		}
		

		var deviceWidth;
		if(device == 'desk') {
			deviceWidth = 400;
			openSpeed = 400;
		} else { 
			deviceWidth = 280;
			openSpeed = 0;
		}
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
		        openSpeed:openSpeed
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

	bindUIActions: function() {
		$(document).on("click", "#member-header a", function() {
			if ( window.history && window.history.pushState ) { 
			    window.history.pushState('', '', window.location.pathname) 
			} else { 
			    window.location.href = window.location.href.replace(/#.*$/, '#');
			}

			$(function() {
    var hash = document.location.hash.replace(/^#\//, '');
    if(hash) {
        console.log('We have a hash!' + hash);
        // $('#sub-nav a[href="#' + hash + '"]').trigger('click');
        $(hash + '-link').trigger('click');
    }
});

			var local = window.location.href;
			console.log('This is local: ' + local);
			
			$(document).trigger('hideCluetip');

			var target = $(this).data('person'),
			$items = $('.'+target),
			$siblings = $('.item').not(target);

			// AJAX DEEP LINKING (start -- needs more!)
			window.location.hash = target;
			console.log('This is target: ' + target);
        
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
				$('#member-bio .name').html('Heard City');
				$('#member-bio .bio p').text('People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.');

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
			window.location.hash = target;
			console.log('This is target:' + target);
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
				$('.module-member').hide();
				$('#member-bio').fadeIn(500);
				$('#member-bio .name').html('Heard City');
				$('#member-bio .bio p').text('People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.');
			}
		});

	}
};

Members.init();