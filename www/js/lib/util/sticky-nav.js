var w = $(window),
firstCon = $('#first-container'),
mainNav = $('#new-menu-holder');

w.scroll(function(){
    var offset, offsetY;

    offset =  firstCon.offset();
    offsetY = offset.top-w.scrollTop();

    // STICKY NAV
    if(offsetY <= 49) {
        mainNav.addClass("sticky-top");
    } else if(offsetY > 49) {
        mainNav.removeClass("sticky-top");
    }
});