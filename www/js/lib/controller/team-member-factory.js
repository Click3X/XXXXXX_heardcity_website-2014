// SIDE BAR CONTROLLER
define(["jquery", 
        "util/config"], function($, config) {
        // SET UP WORKING VARS
    var body = $('body'),
    teamMembers = [],
    liArray = [];

    $(function() {
        // STORE JSON IN VAR
        var members = body.configData().jsonMembers;

        function validateString(string) {
            string = string.replace(/[^a-z0-9\s]/gi, '');
            string = string.toLowerCase();
            string = string.replace(/[_\s]/g, '-');
            return string;
        }

        function nameShoes(itemName) {
            if(itemName == 's1991 Nike Air Jordan VI Sport Blue') {
                itemName = itemName.substring(1);
            }
            return itemName;
        }

        // TEAM MEMBER CONSTRUCTOR
        function Member(name, bio, sex, items, member_class) {
            this.name = name;
            this.bio = bio;
            this.sex = sex;
            this.items = items;
            this.member_class = member_class;
            this.id =  validateString(name);
        }



        // MAKE OUR MEMBERS
        $.each(members, function(i, member) {
            var name = this.name;
            var bio = this.bio;
            var sex = this.sex;
            var items = this.items;
            var member_class = this.member_class;

            $.each(items, function(j, item) {
                var itemName = item.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""),
                image = item.image,
                itemClass = 'item-hidden item-holder ' + itemName.toLowerCase() + ' ' + member_class,
                usemap = (image.split('.')[0]).split('/')[1],
                usemap = validateString(usemap),
                coords = item.coords,
                map, area, a, img,
                li = $('<li/>', {
                    class:itemClass,
                    "data-pos-all":"",
                    "data-pos-solo":""
                });

                // ON THE FLY DEBUGGING
                var cleanItemName = nameShoes(item.name),
                reallyCleanItemName = validateString(cleanItemName),
                blankGif = 'images/sprites/blank.gif';

                // check for Coords, else link shape is regular
                if(coords) {
                    img = $('<img/>', {
                        src:blankGif,
                        alt:item.name,
                        usemap:'#'+usemap,
                        "data-src":image
                    }),
                    map = $('<map/>', {
                        id:usemap,
                        name:usemap,
                        class:"map-link",
                        "data-person":member_class
                    }),
                    area = $('<area/>', {
                        href:"#",
                        shape:"poly",
                        coords:coords,
                        alt: itemName.toLowerCase(),
                        "data-person":member_class,
                        "data-item": itemName.toLowerCase(),
                        "title": "|" + "|" + name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                        class:"cluetip-div"
                    });

                    map.append(area);
                    li.append(img);
                    li.append(map);


                } else {
                    img = $('<img/>', {
                        src:blankGif,
                        alt:item.name,
                        "data-src":image
                    }),
                    a = $('<a/>', {
                        href:"#",
                        "data-person":member_class,
                        "data-item": itemName.toLowerCase(),
                        "title": "|" + "|" + name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                        class:"cluetip-div",
                        "data-person":member_class
                    });

                    a.append(img);
                    li.append(a);
                }

            liArray.push(li);

            });

            var teamMember = new Member(name, bio, sex, items, member_class);
            teamMembers.push(teamMember);

        });



	});
    return liArray;
});