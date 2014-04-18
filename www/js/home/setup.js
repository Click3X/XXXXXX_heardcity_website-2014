$(function() {
    // TEST FOR MOBILE DEVICE / TABLET
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        device = 'mobile';
    } else {
        device = 'desk';
    }

    $('body').addClass(device);

    var $imgs = $('img');
    var imgCount = $imgs.length;

    // REQUEST ANIMATION FRAME
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    // SET UP VARS
    var $body = $('body'),
    $mainMenu = $('#page-fixed'),
    $marqueeSlider = $('#marquee-slider'),
    $blackTextSlider = $('#black-text-slider'),
    $featuredSlider = $('#featured-slider'),
    $greyTextSlider = $('#grey-text-slider'),
    device, homePara,
    $teamSlider = $('#team-slider'),
    $img = $('img'),
    $w = $(window),
    $blackLogo = $('#black-logo'),
    $slide = $('#marquee-slider .marquee-slide:first-of-type'),
    $firstCon = $('#first-container'),
    $siteHeader = $('#site-header');


    // PAGE TITLE
    $('#page-title').text('Home');
    $('#page-home').addClass('mobile-hidden current');
    

    // OPEN VIDEO FUNCTION - FEATURED WORK
    $('.open-vid').click(function(e) {
        e.preventDefault();
        var src= $(this).data('vid'),
        poster = $(this).data('poster'),
        parent = $(this).parent(),
        img = $(this).children('img');

        var vidDiv = $('<div/>', {'class':'og-fullimg home-video', style:'opacity:0' }),
        vid = $('<video/>', {'src':src,'controls':'', 'class':'feat-video', 'type':'video/mp4', 'poster':poster});

        vidDiv.append(vid);
        var delImg = img[0];
        $(delImg).fadeOut(50);
        vidDiv.appendTo(parent[0]).animate({
                opacity: 1
            }, 500, function() {
            // Animation complete.
            });
    });


    // IF VIDEO TITLE IS CLICKED, SUBMIT FORM
    $('.project-video-link').click(function() {
        var selectedProjectLink = $(this),
        selectedInput = $(selectedProjectLink).siblings('input');
        selectedInput = selectedInput[0];
        // Check the input associated with Project
        $(selectedInput).prop('checked', true);
        $('#projectForm').submit();
    });


    // IF MEMBER IS CLICKED, SUBMIT FORM   
    $('.member-permalink').click(function() {
        var selectedMemberLink = $(this),
        selectedInput = $(selectedMemberLink).siblings('input');
        selectedInput = selectedInput[0];
        // Check the input associated with team member
        $(selectedInput).prop('checked', true);
        $('#myForm').submit();
    });

    // SWITCH IMG SRC FOR LAZY LOADING
    $img.unveil(600);

    // INITIALIZE MENU
    $mainMenu.flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });

    $siteHeader.show();


    // RANDOMIZE IMAGES before Marquee
    $(function() {
        $.fn.randomize = function(selector){
            (selector ? this.find(selector) : this).parent().each(function(){
                $(this).children(selector).sort(function(){
                    return Math.random() - 0.5;
                }).detach().appendTo(this);
            });

            return this;
        };

        $('#marquee-slider li').randomize();

        // INITIALIZE SLIDERS
        $marqueeSlider.royalSlider({
            autoHeight: true,
            transitionSpeed:1200,
            arrowsNav: true,
            arrowsNavAutoHide:false,
            fadeinLoadedSlide: false,
            controlNavigationSpacing: 0,
            controlNavigation: 'none',
            imageScaleMode: 'none',
            imageAlignCenter:false,
            slidesSpacing:0,
            loop: true,
            loopRewind:false,
            numImagesToPreload: 6,
            keyboardNavEnabled: true,
            usePreloader: true,
            autoPlay: {
                // autoplay options go gere
                enabled: true,
                pauseOnHover: true,
                delay:6000
            }
        });

    });

    $blackTextSlider.royalSlider({
        autoHeight: true,
        transitionSpeed:1200,
        arrowsNav: true,
        arrowsNavAutoHide:false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        slidesSpacing:0,
        controlNavigation: 'none',
        imageScaleMode: 'none',
        imageAlignCenter:false,
        loop: true,
        loopRewind:false,
        keyboardNavEnabled: true,
        usePreloader:false,
        autoPlay: {
            enabled: true,
            pauseOnHover: true
        }
    });

    $greyTextSlider.royalSlider({
        autoHeight: true,
        transitionSpeed:1200,
        arrowsNav: true,
        arrowsNavAutoHide:false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        slidesSpacing:0,
        controlNavigation: 'none',
        imageScaleMode: 'none',
        imageAlignCenter:false,
        loop: true,
        loopRewind:false,
        keyboardNavEnabled: true,
        usePreloader:false
    });

    $featuredSlider.royalSlider({
        autoHeight: true,
        transitionSpeed:1200,
        arrowsNav: true,
        arrowsNavAutoHide:false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'none',
        imageScaleMode: 'none',
        imageAlignCenter:false,
        slidesSpacing:0,
        loop: true,
        loopRewind:false,
        numImagesToPreload: 6,
        keyboardNavEnabled: true,
        usePreloader: true,
        navigateByClick: false,
        autoPlay: {
            enabled: true,
            pauseOnHover: true,
            delay:6000
        },
        block: {
            fadeEffect: false,
            moveEffect: 'right',
            moveOffset: 500,
            easing:'easeInOutSine',
            delay:200
        }
    });

    // PAUSE VIDEO ON SLIDE CHANGE
    var sliderInstance = $featuredSlider.data('royalSlider');
    sliderInstance.ev.on('rsAfterSlideChange', function() {
          var myVideo = $('video');
        $('video').remove();
        $('.work-slide img').show();

    });

    $teamSlider.royalSlider({
        imageScaleMode:'none',
        imageAlignCenter:false,
        autoHeight: true,
        transitionSpeed:1200,
        arrowsNav: true,
        arrowsNavAutoHide:false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'none',
        slidesSpacing:0,
        loop: true,
        loopRewind:false,
        numImagesToPreload: 6,
        keyboardNavEnabled: true,
        usePreloader:false,
        navigateByClick: false,
        autoPlay: {
            enabled: true,
            pauseOnHover: true
        }
    });


    // STICKY NAV
    $w.scroll(function(){
        var offset, offsetY;
        offset =  $firstCon.offset();
        offsetY = offset.top-$w.scrollTop();
        // STICKY NAV
        if(offsetY <= 49) {
            $siteHeader.addClass('sticky-top');
        } else if(offsetY > 49) {
            $siteHeader.removeClass('sticky-top');
        }
    });


    // PARALLAX FUNCTION
    function homeParallax() {
        var top = $(this).scrollTop(),
        ratio = top/2.825,
        sRatio = top/1.85;

        $blackLogo.css('transform', 'translateY(' + ratio + 'px)');
        $slide.css('transform', 'translate3d(0,' + sRatio + 'px, 0)');
    }
    
    if(device === 'desk') {
        $w.scroll(function(){
            var offset, offsetY;

            offset =  $firstCon.offset();
            offsetY = offset.top-$w.scrollTop();
            if(offsetY >= -52) {
                homePara = window.requestAnimFrame(homeParallax);
            }
        });
    }

});