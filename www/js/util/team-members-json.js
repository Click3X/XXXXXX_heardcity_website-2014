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

	console.log('These are now your new JS members: '+membersOut);
	return membersOut;
}


function memberItems(members) {
	$.each(members, function(i, member) {
		var items = members[i].items,
		member_class = members[i].member_class;

		$.each(items, function(j, item) {
			console.dir(item);
			var itemName = item.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""),
			image = item.image,
			itemClass = 'item-holder ' + itemName.toLowerCase() + ' ' + member_class,
			usemap = (image.split('.')[0]).split('/')[1],
			li = $('<li/>', {
				class:itemClass
			}),
			img = $('<img/>', {
				src:image,
				alt:item.name,
				usemap:usemap
			});

			li.append(img);

			itemList.append(li);

		});

	});

}



// USE FUNCTIONS
jsMembers = buildMemberList(jsonMembers, jsonMembers);
memberItems(jsMembers);

console.table(jsMembers);
