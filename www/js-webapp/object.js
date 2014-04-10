var memberArray = [];

function Members(data) {
    this.name = data.name;
    this.bio = data.bio;
    this.sex = data.sex;
    this.id = data.id;
    this.items = data.items;
    this.buildLi = function() {
        var liArray = [];
        var $ul = $('<ul/>', {
            'class':this.id,
            'id':this.id
        });
        var items = this.items;
        var member = this;
        var sex = this.sex;
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
                    'class':'item' + ' ' + id + ' ' + member.id
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
                    li.appendTo($ul);


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
                    // li.appendTo($ul);
                    liArray.push(li);
                }

            });

        // return $ul;
        return liArray;
    };

    this.attachToDom=function(data) {
        var ul = $('<ul/>', {'id':'item-holder', 'class':'item-holder'});
        for(var i=0; i< data.length; i++) {
            var li = data[i];
            $(li).appendTo(ul);
        }
        $('#all-items-holder').append(ul);
    };

    this.removeFromDom=function(data) {
        $('#all-items-holder').remove(data);
    };
}



var setupMembers = {

    init: function() {
        this.getData();
    },

    getData: function() {
        $.getJSON(base + "js-webapp/data/members.json", function(data) {
            setupMembers.buildNewMember(data);
        });
    },

    buildNewMember:function(data) {
        for (i = 0; i < data.members.length; i++) {
            var memberInfo = data.members[i];
            var member = new Members(memberInfo);
            console.dir(member.items); 

            memberArray.push(member);

            // console.log('This is member' + member); console.dir(member);
        }
    }

};

setupMembers.init();

console.log('These are your members: ' + memberArray); console.dir(memberArray);