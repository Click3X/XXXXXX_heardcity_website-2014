// PARALLAX VARs
var slide = $('#home-slider .slide'),
homeLogo = $('#logo-bg'),
w = $(window),
guitarNord = $('#image-spread-1'),
gNordPara,
homePara,
halfPara;

// STICKY MENU
var menu = $('#new-menu-holder').eq(0),
firstCon = $('#first-container');

function homeParallax() {
    var top = $(this).scrollTop(),
    ratio = top/2.825,
    sRatio = -top/-1.85;

    homeLogo.css('transform', 'translateY(' + ratio + 'px)'); 
    slide.css('transform', 'translate3d(0,' + sRatio + 'px, 0)');                 
}





// IS IN VIEWPORT
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    // console.log('This is the elements docViewTop: ' +   docViewTop);
    // console.log('This is the elements  docViewBottom: ' +   docViewBottom);

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    // console.log('This is the elemTop: ' +  elemTop);
    // console.log('This is the elements hight: ' +  $(elem).height());

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// function FIND OFFSET
function findOffset(element) {
    w.scroll(function(){
        // var offset = element.offset(),
        // offsetY = offset.top-w.scrollTop();
        // console.log(offsetY);
        // return offsetY;
        var cansee = isScrolledIntoView(element);
        console.log(cansee);
        return cansee;
    });
}


// MAKE A PARALLAX OBJECT for Parallaxing
function parallaxMod(element, ratioDiv) {
    this.element = element;
    this.top = $(this.element).scrollTop();
    this.ratio = this.top/ratioDiv;
    this.inview = findOffset(element);
    // this.inview = isScrolledIntoView(element);
}

gNordPara = new parallaxMod(guitarNord, 1.85);
console.log('This is gNordPara' + gNordPara);






// ON SCROLL
w.scroll(function(){
    var offset,
    offsetY;

    offset =  firstCon.offset();
    offsetY = offset.top-w.scrollTop();

    // console.log('This is offsetY: ' + offsetY + '\n');

    // STICKY NAV
    if(offsetY <= 49) {
        menu.addClass("sticky-top");
        homeLogo.addClass('logo-invisible');
    } else if(offsetY > 49) {
        menu.removeClass("sticky-top");
        homeLogo.removeClass('logo-invisible');
    }

    // HOME SLIDE LOGO PARALLAX
    if(offsetY >= -52) {
        homePara = requestAnimFrame(homeParallax);
    }
});