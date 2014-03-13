// PARALLAX VARs
var slide = $('#new-home-slider .slide'),
homeLogo = $('#logo-bg'),
w = $(window),
guitarNord = $('#guitar-nord'),
dudePhone = $('#dude-on-phone'),
jeanJacket = $('#jean-jacket'),
firstCon = $('#first-container'),
homePara,
halfPara,
dudePara,
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

// Get only the first slide from Home Marquee slides


function homeParallax() {
    var top = $(this).scrollTop(),
    ratio = top/2.825,
    sRatio = top/3.85;

    homeLogo.css('transform', 'translateY(' + ratio + 'px)'); 
    slide.css('transform', 'translate3d(0,' + sRatio + 'px, 0)');                 
}

function halfParallax() {
    var top = $(this).scrollTop(),
    ratio = top/-24;
    jeanJacket.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 
}

function halfImageParallax() {
    var top = $(this).scrollTop(),
    ratio = top/3.85;
    guitarNord.css('transform', 'translate3d(0,' + ratio + 'px, 0)');
    jeanJacket.css('transform', 'translate3d(0,' + ratio + 'px, 0)'); 
}

function dudeParallax() {
    var top = $(this).scrollTop(),
    ratio = top/16;
    dudePhone.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 
}


// ON SCROLL
w.scroll(function(){
    
    // TOP IMAGE SLIDE and LOGO
    if(elementOnScreen(slide)) {
        homePara = requestAnimFrame(homeParallax);
    }

    // NORD PARALLAX 
    if(elementOnScreen(guitarNord)) {
        gNordPara = requestAnimFrame(halfImageParallax);
    }

    // DUDE ON PHONE
    // if(elementOnScreen(guitarNord)) {
    //     dudePara = requestAnimFrame(dudeParallax);
    // }



});