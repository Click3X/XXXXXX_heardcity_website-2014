var w = $(window),
firstCon = $('#first-container'),
mainNav = $('#new-menu-holder');

w.scroll(function(){
    var offset, offsetY;

    offset =  firstCon.offset();
    offsetY = offset.top-w.scrollTop();

    // DEV -get scrollY
    // console.log('This is offsetY: ' + offsetY + '\n');

    // STICKY NAV
    if(offsetY <= 49) {
        mainNav.addClass("sticky-top");
    } else if(offsetY > 49) {
        mainNav.removeClass("sticky-top");
    }
});