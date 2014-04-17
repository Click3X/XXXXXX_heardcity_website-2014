// ARRAY TO HOLD MEMBER OBJECTS
var memberArray = [];

// HELPER FUNCTION
function formatLink(string) {
    string = string.replace(/[^a-z0-9\s]/gi, '');
    string = string.toLowerCase();
    string = string.replace(/[_\s]/g, '');
    return string;
}

///////////////////////////// TEAM MEMBER OBJECT ---- CONTAINS AN ARRAY OF ITEM OBJECTS ////////////////////////////

// MEMBER OBJECT
function Members(data) {
    this.name = data.name;
    this.bio = data.bio;
    this.sex = data.sex;
    this.id = data.id;
    this.items = [];

    var memName = this.name;
    var memId = this.id;
    var memSex = this.sex;

    for(var i=0; i < data.items.length; i++) {
        data.items[i].owner = memName;
        data.items[i].ownerId = memId;
        data.items[i].ownerSex = memSex;

    	var itemInfo = data.items[i];
    	var item = new Item(itemInfo);
    	this.items.push(item);
    }
}

// ITEM OBJECT
function Item(data) {

    // 'CONTAINS' FUNCTIONALITY FOR ARRAY
    Array.prototype.contains = function ( needle ) {
        var i;
        for (i in this) {
            if (this[i] === needle) { return true; }
        }
        return false;
    };

    // LEAVE THESE ITEMS AS PNG
    var noJpg = [
        'items/Peony_Rene_necklace.png',
        'items/Eric_Warzecha_jersey.png',
        'items/Elizabeth_McClanahan_guitar.png',
        'items/Keith_Reynaud_Pot.png',
        'items/Jeremy_Siegal_Jordans.png',
        'items/Jeremy_Siegal_chain.png',
        'items/Gary_Noel_plant.png',
        'items/Sasha_Awn_dress.png',
        'items/Sasha_Awn_moog.png',
        'items/Sasha_Awn_gloves.png',
        'items/Eric_Warzecha_guitar.png',
        'items/Talia_Rodgers_tank_top.png',
        'items/Cory_Melious_Boot.png'
    ];


    var li, img, area, map, usemap, a;
    this.name = data.name;
    this.bio = data.bio;
    this.id = formatLink(data.name);
    this.image = data.image;
    this.position = data.position;
    this.owner = data.owner;
    this.ownerId = data.ownerId;
    this.ownerSex = data.ownerSex;
    
    // SWITCH FROM PNG TO JPEG WHERE APPLICABLE
    var src;
    var imgSource = JSON.stringify(this.image);

    if (noJpg.contains(this.image)) {
        src = this.image;
    } else {
        src = imgSource.replace(/png/g, 'jpg');
        src = src.replace(/items/g, 'items/jpg');
        src = src.replace(/"/g, ""); 
    }


    //  TEST IF ITEM HAS COORDS
    if(data.coords) { 
        this.coords = data.coords;
        usemap = this.ownerId + this.id;
        li = $('<li/>', {'class':this.id + ' ' + this.ownerId +' item'});
        img = $('<img/>', {/*'src':imgSource, */'data-src':src, 'alt':this.name, 'usemap':'#' + usemap});
        map = $('<map/>', {'id':usemap,'name':usemap,'class':'map-link','data-person':this.ownerId});
        area = $('<area/>', {'href':'#','shape':'poly','coords':this.coords,'alt':this.id,'data-person':this.ownerId,'data-item':this.id,"title": "|" + "|" + this.owner + "\'s" + "|" + this.name + "|" + this.bio + "|" + "<label for='"+this.ownerId+"-"+this.id+"' class='permalink'>> View " + this.ownerSex + " stuff</label><input type='radio' name='"+this.owner+"' id='"+this.ownerId+"-"+this.id+"' value='"+this.ownerId+"'>",'class':'cluetip-div'});
        // APPEND TO LI
        map.append(area); 
        img.appendTo(li); 
        li.append(map);
    } else {
        li = $('<li/>', {'class':this.id + ' ' + this.ownerId +' item'});
        img = $('<img/>', {/*'src':imgSource, */'data-src':src, 'alt':this.name});
        a = $('<a/>', {href:'#','data-person':this.ownerId, 'data-item': this.id, "title": "|" + "|" + this.owner + "\'s" + "|" + this.name + "|" + this.bio + "|" + "<label for='"+this.ownerId+"-"+this.id+"' class='permalink'>> View " + this.ownerSex + " stuff</label><input type='radio' name='"+this.owner+"' id='"+this.ownerId+"-"+this.id+"' value='"+this.ownerId+"'>",'class':'cluetip-div'});
        // APPEND TO LI
        img.appendTo(a);
        a.appendTo(li);
    }

    
    this.build = function(elem) {
    	li.appendTo(elem);
        var $li = $(li);
        return $li;
    }

    this.remove = function() {
        li.remove();
    }

}


/////////////////////////////////////////////// INIT CLUETIP /////////////////////////////////////////
function initClueTip() {

    var deviceWidth;
    if(device == 'desk') {
        deviceWidth = 400;
        openSpeed = 400;
    } else { 
        deviceWidth = 300;
        openSpeed = 0;
    }
    
    $('.cluetip-div').cluetip({
        splitTitle: '|',
        showTitle: false, 
        sticky: true,
        dropShadow: true,
        arrows: false,
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
            $("#cluetip").css('z-index',1200); 
            $('#cluetip label').click(function() {
                var $memBioName = $('#member-bio .name');
                var $memBioBio = $('#member-bio .bio p');

                $(document).trigger('hideCluetip');
                var memberId = $('#' + $(this).attr('for')).val();
                $items = $('.'+memberId);
                console.log('This is $items: ' + $items); console.dir($items);

                var otherItems = $('.item').not($items);
                console.dir(otherItems);

                // $(otherItems).remove();
                // $(otherItems).hide();

                // REMOVE EXISING ITEMS
                // if(recentlyClicked.length > 0) {
                //     for(var i=0; i<recentlyClicked.length; i++) {
                //         recentlyClicked[i].remove();
                //     }
                // }

                // STORE MATCHING MEMBER - PUT IN NAME
                // var memberId = $(this).data('person');
                // var selectMember = _.where(memberArray, {id:memberId});

                // console.dir(selectMember);

                // ADD MEMBER BIO
                // $memBioName.text(selectMember[0].name);
                // $memBioBio.text(selectMember[0].bio);

                // // GET MEMBER ITEMS ADD TO PAGE
                // var items = selectMember[0].items;
                // for(var i=0; i<items.length; i++) {
                //     items[i].build($allItems);
                //     var $itemEl = items[i].build($allItems).get(0);
                //     var rImg = $($itemEl).find('img').get(0);
                //     var rSrc = $(rImg).data('src');
                //     $(rImg).attr('src', rSrc);
                //     recentlyClicked.push(items[i]);

                // }

                // var lastLi =  '<li><div id="marker-end" class="lazy-hidden"></div></li>';
                // $(lastLi).appendTo('#all-items');

                $('body').addClass('js-single-member');

                // // ADD CLUE TIP
                // initClueTip();

            });
            $('.cluetip-close').click(function() {
                $(document).trigger('hideCluetip');
            });

            return true;
        }
    });
}