// TEAM MEMBER JSON	
// jsonMembers array is from the site itself

var jsMembers = [],
teamMembers = [];
itemList = $('.item-list');

// Build the Members list
function buildMemberList(membersIn, membersOut ) {
	$.each(membersIn, function(i, member) {
		membersOut.push(member);
	});
	
	return membersOut;
}


function memberItems(members) {
	// console.table(members);
	// Each MEMBER
	$.each(members, function(i, member) {
		var items = members[i].items,
		member_sex = members[i].sex,
		member_silo = members[i].silo,
		member_class = members[i].member_class,
		defaultSilo = 'img/build/team-members/keith-silo.png',
		member_name = members[i].name;

		// TEMP * if no silo, use Keiths as default
		if(member_silo == '') {member_silo = defaultSilo;}

		// Each ITEM
		$.each(items, function(j, item) {
			var itemName = item.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""),
			image = item.image,
			itemClass = 'item-holder ' + itemName.toLowerCase() + ' ' + member_class,
			usemap = (image.split('.')[0]).split('/')[1],
			coords = item.coords,
			map, area, a, h2, p, aLink,
			neighbor, innerHover,
			li = $('<li/>', {
				class:itemClass
			}),
			img = $('<img/>', {
				src:image,
				alt:item.name,
				usemap:usemap
			});

			// console.dir(item);

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
			divImage = $('<div/>', {
				class:"image"
			}),
			divImg = $('<img/>', {
				src: member_silo,
				alt:"silohuette"
			}),
			ulMemberText = $('<ul/>', {
				class:"member-text"
			}),
			liMiscText = $('<li/>', {
				class:"misc-text"
			}).text('This is ' + member_name + '\'s'),
			liName = $('<li/>', {
				class:"name"
			}).text(item.name),
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

			// STICH TOGETHER IMAGE DIV
			divImage.append(divImg);

			// TEAM MEM
			divTeamMember.append(divImage, ulMemberText);

			// POP UP ULs
			liMain.append(divTeamMember);
			ulPopup.append(liMain);
			divHover.append(ulPopup);

			// APPEND TO DOM
			li.append(divHover);
			itemList.append(li);

		});

	});

}


// USE FUNCTIONS
jsMembers = buildMemberList(jsonMembers, jsMembers);
memberItems(jsMembers);
