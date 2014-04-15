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
    var li, img, area, map, usemap, a;
    this.name = data.name;
    this.bio = data.bio;
    this.id = formatLink(data.name);
    this.image = data.image;
    this.position = data.position;
    this.owner = data.owner;
    this.ownerId = data.ownerId;
    this.ownerSex = data.ownerSex;

    var blankGif = '../images/sprites/loader.gif';
    var imgSource = '';

    if(this.position < 20) {
        imgSource = this.image;
    } else { imgSoure = blankGif;}

    //  TEST IF ITEM HAS COORDS
    if(data.coords) { 
        this.coords = data.coords;
        usemap = this.ownerId + this.id;
        li = $('<li/>', {'class':this.id + ' ' + this.ownerId +' item'});
        img = $('<img/>', { 'src':imgSource,/*'src':blankGif,*/'alt':this.name, 'usemap':'#' + usemap, 'data-blank':blankGif, 'class':'lazy', 'data-original':this.image});
        map = $('<map/>', {'id':usemap,'name':usemap,'class':'map-link','data-person':this.ownerId});
        area = $('<area/>', {'href':'#','shape':'poly','coords':this.coords,'alt':this.id,'data-person':this.ownerId,'data-item':this.id,"title": "|" + "|" + this.owner + "\'s" + "|" + this.owner + "|" + this.bio + "|" + "<label for='"+this.ownerId+"-"+this.id+"' class='permalink'>> View " + this.ownerSex + " stuff</label><input type='radio' name='"+this.owner+"' id='"+this.ownerId+"-"+this.id+"' value='"+this.ownerId+"'>",'class':'cluetip-div'});
        // APPEND TO LI
        map.append(area); img.appendTo(li); li.append(map);
    } else {
        li = $('<li/>', {'class':this.id + ' ' + this.ownerId +' item'});
        img = $('<img/>', { 'src':imgSource,/*'src':blankGif,*/'alt':this.name, 'data-blank':blankGif, 'class':'lazy', 'data-original':this.image});
        a = $('<a/>', {href:'#','data-person':this.ownerId,'data-item': this.id,"title": "|" + "|" + this.owner + "\'s" + "|" + this.name + "|" + this.bio + "|" + "<label for='"+this.ownerId+"-"+this.id+"' class='permalink'>> View " + this.ownerSex + " stuff</label><input type='radio' name='"+this.owner+"' id='"+this.ownerId+"-"+this.id+"' value='"+this.ownerId+"'>",'class':'cluetip-div'});
        // APPEND TO LI
        img.appendTo(a);
        a.appendTo(li);
    }

    
    this.build = function(elem) {
    	li.appendTo(elem);
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
            $("#cluetip").css('z-index',1200); return true;
            // $('label').click(clueTipSoloMemberItems);
            $('.cluetip-close').click(function() {
                $(document).trigger('hideCluetip');
            });
        }
    });
}