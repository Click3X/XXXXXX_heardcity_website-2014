define(["jquery", 
        "util/config"], function($, config) {
    
    $(function() {

        var body = $('body');

        // GET JSON MEMBERS
        var jsonMembers = body.configData().jsonMembers;

        // OLD CODE
        var jsMembers = [],
        teamMembers = [],
        liArray = [],
        itemListHolder = $('#item-list-holder'),
        itemList = $('<ul/>', {
                        class:"item-list"
                    });

        // Validate String for HTML
        function validateString(string) {
         string = string.replace(/[^a-z0-9\s]/gi, '');
         string = string.toLowerCase();
         string = string.replace(/[_\s]/g, '-');
         return string;
        }


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
                    usemap = validateString(usemap),
                    coords = item.coords,
                    map, area, a,
                    li = $('<li/>', {
                        class:itemClass
                    });

                    var cleanItemName = nameShoes(item.name);
                    var reallyCleanItemName = validateString(cleanItemName);

                    // check for Coords, else link shape is regular
                    if(coords) {
                        img = $('<img/>', {
                            src:image,
                            alt:item.name,
                            usemap:'#'+usemap
                        }),
                        map = $('<map/>', {
                            id:usemap,
                            name:usemap,
                            class:"map-link"
                        }),
                        area = $('<area/>', {
                            href:"#",
                            shape:"poly",
                            coords:coords,
                            alt: itemName.toLowerCase(),
                            "data-person":member_class,
                            "data-item": itemName.toLowerCase(),
                            "title": "|" + "|" + member_name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + member_sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                            class:"cluetip-div"
                        });

                        map.append(area);
                        li.append(img);
                        li.append(map);

                    } else {
                        img = $('<img/>', {
                            src:image,
                            alt:item.name
                            // usemap:'#'+usemap
                        }),
                        a = $('<a/>', {
                            href:"#",
                            "data-person":member_class,
                            "data-item": itemName.toLowerCase(),
                            "title": "|" + "|" + member_name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + member_sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                            class:"cluetip-div"
                        });

                        a.append(img);
                        li.append(a);
                    }


                    // BUILD HOVER MOBILE DIV - (hidden on screens > 768)
                    var hoverMobile = $('<ul/>', {
                        class:"hover-mobile"
                    }), 
                    li1 = $('<li/>', {
                        class:"hover-name"
                    }).text(member_name),
                    li2 = $('<li/>', {
                        class:"hover-item-name"             
                    }).text(cleanItemName),
                    li3 = $('<li/>', {
                        class:"hover-item-bio"
                    }).text(item.bio),
                    li4 = $('<li/>', {
                        class:"hover-permalink"
                    }),
                    hoverLabel = $('<label/>', {
                        class:'permalink',
                        "for":member_class+"-"+reallyCleanItemName
                    }).text("> View " + member_sex + " stuff"),
                    hoverInput = $('<input/>', {
                        "type": "radio",
                        "name": member_class,
                        "id": member_class+"-"+reallyCleanItemName,
                        "value": member_class
                    });

                    li4.append(hoverLabel, hoverInput);
                    hoverMobile.append(li1, li2, li3, li4);
                    // li.append(hoverMobile);

                    liArray.push(li);
                });
            });
        }

        // USE FUNCTIONS
        jsMembers = buildMemberList(jsonMembers, jsMembers);
        memberItems(jsMembers);




        // APPEND TO DOM AFTER ALL DOWNLOADS AND JS FUNCTIONS
        window.onload = (function(){


            // ADD UL TO DOM
            itemListHolder.append(itemList);
            // LENGTH OF ITEM ARRAY
            var length = liArray.length;
            // APPEND LI TO DOM ( ** THEY ARE HIDDEN !!  **)
            for(var i = 0; i < length; i++) {
                itemList.append(liArray[i]);
            }

            // ITERATOR
            var k =0;
            // REVEAL FUNCTION
            function reveal(li) {
                // top = li.offset.Top;
                $(li).removeClass('item-hidden').addClass('item-show', 1000);
            }
            // SHOW AFTER TIMEOUT
            function showLi(li, k) {
                setTimeout(function() {
                    reveal(li);
                }, 6 * ( k + 1 ));
            }


            // var topItems = [],
            k = 0;

            $('#item-list-holder .item-list > li').each(function(k,v) {
                var top = $(this).position().top;
                if(top < 1200) {
                    // topItems.push(this);
                    showLi(this, k);
                }
            });

            // TOGGLE SIDE BAR OPEN CLOSED
        // $('#member-button').click( function() { 
        //     $('#member-header').toggleClass('side-bar-closed');
        //     console.log('Im clicked!');
        // });

            

        })();


        

    });
});