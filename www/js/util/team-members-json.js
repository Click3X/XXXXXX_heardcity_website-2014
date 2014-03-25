// TEAM MEMBER JSON	
// jsonMembers array is from the site itself

var jsMembers = [],
teamMembers = [],
liArray = [],
// itemList = $('.item-list'),
itemListHolder = $('#item-list-holder'),
itemList = $('<ul/>', {
				class:"item-list"
			});

// Build the Members list
function buildMemberList(membersIn, membersOut ) {
	$.each(membersIn, function(i, member) {
		membersOut.push(member);
	});
	
	return membersOut;
}

function nameShoes(itemName) {
	if(itemName == 's1991 Nike Air Jordan VI Sport Blue') {
		itemName = itemName.substring(1);
	}
	return itemName;
}


function memberItems(members) {
	// Each MEMBER
	$.each(members, function(i, member) {
		var pic_real_width,
		pic_real_height,
		items = members[i].items,
		member_sex = members[i].sex,
		member_class = members[i].member_class,
		member_name = members[i].name;

		// Each ITEM
		$.each(items, function(j, item) {
			var itemName = item.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""),
			image = item.image,
			itemClass = 'item-hidden item-holder ' + itemName.toLowerCase() + ' ' + member_class,
			usemap = (image.split('.')[0]).split('/')[1],
			coords = item.coords,
			map, area, a, h2, p, aLink,
			neighbor, innerHover,
			img = $('<img/>', {
				src:image,
				alt:item.name,
				usemap:usemap
			}),
			// .load(function() {
			// 	pic_real_width = this.width;   // Note: $(this).width() will not
   //      		// Set parent LI width once img has loaded and browser knows img width
   //      		var parentWidth = (this.width/1024) * 100;
   //      		// $(this).offsetParent().width(parentWidth+'%');

   //      		// styleSheet += '.'+ itemName.toLowerCase() + '.' + member_class + '{ width:'+parentWidth +'%;}'+'\n';
   //      		// console.log(styleSheet);
			// }),
			li = $('<li/>', {
				class:itemClass
			});

			var cleanItemName = nameShoes(item.name);

			// check for Coords, else link shape is regular
			if(coords) {
				map = $('<map/>', {
					id:usemap,
					name:usemap,
					class:"map-link"
				}),
				area = $('<area/>', {
					href:"#",
					shape:"poly",
					coords:coords,
					"data-person":member_class,
					"data-item": itemName.toLowerCase()
				});

				map.append(area);
				li.append(img);
				li.append(map);

			} else {
				a = $('<a/>', {
					href:"#",
					"data-person":member_class,
					"data-item": itemName.toLowerCase(),
					class:"map-link"
				});

				a.append(img);
				li.append(a);
			}

			// POP UP div for each item
			divHover = $('<div/>', {
				class:"neighbor"
			}),
			ulPopup = $('<ul/>', {
				class:"pop-up"
			}),
			liMain = $('<li/>'),
			divTeamMember  = $('<div/>', {
				class:"team-member clearfix"
			}),
			ulMemberText = $('<ul/>', {
				class:"member-text"
			}),
			liMiscText = $('<li/>', {
				class:"misc-text"
			}).text('This is ' + member_name + '\'s'),
			liName = $('<li/>', {
				class:"name"
			}).text(cleanItemName),
			liBio = $('<li/>', {
				class:"serif"
			}).text(item.bio),
			liAlink = $('<li/>', {
				class:"permalink"
			}),
			aLink = $('<a/>', {
				href:"#",
				"data-person":member_class,
				"data-item": itemName.toLowerCase(),
				class:"view-profile"
			}).text('View '+ member_sex +' stuff');

			// STICH TO TOGETHER ELEMENTS starting with UL and LIs
			liAlink.append(aLink);
			ulMemberText.append(liMiscText, liName, liBio, liAlink);

			// TEAM MEM
			divTeamMember.append(ulMemberText);

			// POP UP ULs
			liMain.append(divTeamMember);
			ulPopup.append(liMain);
			divHover.append(ulPopup);

			// APPEND TO DOM
			li.append(divHover);
			
			// itemList.append(li);

			liArray.push(li);
		});
	});
}


// USE FUNCTIONS
jsMembers = buildMemberList(jsonMembers, jsMembers);
memberItems(jsMembers);


// APPEND TO DOM AFTER ALL DOWNLOADS AND JS FUNCTIONS
$(window).ready(function() {
	// Add ul to dom to individually attach li's to
	itemListHolder.append(itemList);

	var current = 0

    function draw() {
        var next = current + 1
        for(var i = current; i < next; i++) {
            // $('#collection').append('<li>Line Item</li>');
            var cItem = liArray[i],
			$cItem = $(cItem);
			itemList.append(cItem);
			$cItem.animate().removeClass('item-hidden').addClass('item-show', 1000);
        }
        current = next
        setTimeout(draw, 3);
    }
	
	draw();
	
});