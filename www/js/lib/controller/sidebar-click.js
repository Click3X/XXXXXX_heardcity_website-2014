// SUB MENU
define(['jquery', 'util/config'], function($, config) {
      
    'use strict';
    var items = '';
    var itemHolder = [];

    $(function() {

        // EVENTS ON DOM
        var $memberLinks = $('#member-fixed a'),
        $body = $('body'),
        sideDroor = ('#member-header');

        //DATA
        var jsonMembers = $body.configData().jsonMembers;

        // FOR ADDING TOP DOM 
        var $mainContent = $('#main-content'),
        $ul = $('<ul/>', {
            'class':'holder',
            'id':'holder'
        });


        // FUNCTIONS
        function validateString(string) {
            string = string.replace(/[^a-z0-9\s]/gi, '');
            string = string.toLowerCase();
            string = string.replace(/[_\s]/g, '-');
            return string;
        }

        function nameShoes(itemName) {
            if(itemName === 's1991 Nike Air Jordan VI Sport Blue') {
                itemName = itemName.substring(1);
            }
            return itemName;
        }

        
        // OPEN CLOSE SIDEBAR
        $memberLinks.click(function (event) {
            event.preventDefault();

            // REMOVE ANY ELEMENTS IF THERE ARE ANY IN LI
            if ( $( '#holder li' ).length ) {
                // console.log('We have elements');
                var elements = $('#holder li');
                // REMOVE ELEMENTS ONE by ONE
                for(var i=0; i < elements.length; i++) {
                    var elem = elements[i];
                    $(elem).detach();

                }


            } else {
                // console.log('NO elements');
            }

            // CLOSE SIDEAR - if open
            // if (!$(sideDroor).hasClass('side-bar-closed')) { 
            //     $(sideDroor).addClass('side-bar-closed');
            // }

            // GET NAME OF MEMBER CLICKED ON IN VARIABLE
            var member = $(this).data('person');
            var member_class = member.member_class;
            var sex = member.sex;

            // CHECK FOR MATCH - member
            for(var i=0; i < jsonMembers.length; i++) {
                var currentMember = jsonMembers[i];
                if(currentMember.member_class == member) {
                    items = currentMember.items;
                }
            }

            // MAKE LIS FROM ITEMS
            for(var i=0; i < items.length; i++) {
                var item = items[i];
                var itemName = item.name.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ''),
                image = item.image,
                itemClass = 'item-holder ' + itemName.toLowerCase() + ' ' + member_class,
                usemap = (image.split('.')[0]).split('/')[1],
                coords = item.coords,
                r=0,
                map, area, a, img,
                imageSource;


                var li = $('<li/>', {
                    'class':itemClass
                }).text('I am ' + item.name);

                usemap = validateString(usemap);
                // ON THE FLY DEBUGGING
                var cleanItemName = nameShoes(item.name),
                reallyCleanItemName = validateString(cleanItemName),
                blankGif = 'images/sprites/blank.gif';

                // make IMAGE NOT BLANK
                imageSource = image;

                if(coords) {
                    img = $('<img/>', {
                        src:imageSource,
                        // src:image,
                        alt:item.name,
                        usemap:'#'+usemap,
                        // "data-src":blankGif
                        'data-src':image
                    }),
                    map = $('<map/>', {
                        id:usemap,
                        name:usemap,
                        class:'map-link',
                        'data-person':member_class
                    }),
                    area = $('<area/>', {
                        href:'#',
                        shape:'poly',
                        coords:coords,
                        alt: itemName.toLowerCase(),
                        'data-person':member_class,
                        'data-item': itemName.toLowerCase(),
                        "title": "|" + "|" + name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                        class:'cluetip-div'
                    });

                    map.append(area);
                    li.append(img);
                    li.append(map);


                } else {
                    img = $('<img/>', {
                        // src:image,
                        src:imageSource,
                        alt:item.name,
                        // "data-src":blankGif
                        'data-src':image
                    }),
                    a = $('<a/>', {
                        href:'#',
                        'data-person':member_class,
                        'data-item': itemName.toLowerCase(),
                        "title": "|" + "|" + name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                        class:'cluetip-div'
                    });
                    a.append(img);
                    li.append(a);
                }

                // ITEM HOLDER IS AN ARRAY THAT HOLDS ONTO ALL ELEMENTS WE CREATED
                itemHolder.push(li);


                // ATTACH TO DOM
                li.appendTo($ul);
            }

        });

        

        $ul.appendTo($mainContent);


    });

    return items;

});