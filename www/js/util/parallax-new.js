// PARALLAX VARs
var slide = $('#home-slider .slide'),
homeLogo = $('#logo-bg'),
w = $(window),
guitarNord = $('#guitar-nord'),
jeanJacket = $('#jean-jacket'),
firstCon = $('#first-container'),
homePara,
halfPara,
gNordPara;


// Test if element is in Viewport
$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

elementOnScreen = function(element) {
    var onScreen = $(element).isOnScreen();
    if(onScreen) {
        return 1;
    }
}


function homeParallax() {
    var top = $(this).scrollTop(),
    ratio = top/2.825,
    sRatio = top/1.85;

    homeLogo.css('transform', 'translateY(' + ratio + 'px)'); 
    slide.css('transform', 'translate3d(0,' + sRatio + 'px, 0)');                 
}

function halfParallax() {
    var top = $(this).scrollTop(),
    ratio = top/-24;
    jeanJacket.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 
}

function gNordParallax() {
    var top = $(this).scrollTop(),
    gRatio = top/7.85;
    guitarNord.css('transform', 'translate3d(0,' + gRatio + 'px, 0)'); 
}


// STICKY MENU
var menu = $('#new-menu-holder').eq(0),
firstCon = $('#first-container');

// ON SCROLL
w.scroll(function(){
    var offset, offsetY;

    offset =  firstCon.offset();
    offsetY = offset.top-w.scrollTop();

    // // DEV -get scrollY
    // // console.log('This is offsetY: ' + offsetY + '\n');

    // // HOME SLIDE LOGO PARALLAX
    // if(offsetY >= -52) {

     //   homePara = requestAnimFrame(homeParallax);
    // }

    // // NORD PARALLAX & JEAN JACKET PARALAXX
    if((offsetY > -1282) && (offsetY < 744) ) {
    // if(elementOnScreen(guitarNord)) {

        gNordPara = requestAnimFrame(gNordParallax);
    }
    // }

});