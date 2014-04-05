define(['jquery',
        'util/config',
        'unveil',
        'flexnav',
        'controller/request-anim',
        'royalslider'], function($, config, unveil, flexnav, anim, royalslider) {

    
    'use strict';

    // $(function() {
    //     $.ajax({
    //         url: '/',
    //         xhrFields: {
    //             onprogress: function (e) {
    //                 if (e.lengthComputable) {
    //                     console.log(e.loaded / e.total * 100 + '%');
    //                 }
    //             }
    //         },
    //         success: function (response) {
    //             console.log('This is what success looks like. Does it feel like this too?' + response);
    //         }
    //     });

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

        // HIDE MAN NAV to prevent flickr?
        $siteHeader.hide();

        // TEST FOR MOBILE DEVICE / TABLET
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
            // console.log('this is device' + device);
            $body.addClass('mobile');
        } else {
            device = 'desk';
            // console.log('this is device' + device);
        }

        // PAGE TITLE
        $('#page-title').text('Home');
        $('#page-home').addClass('mobile-hidden');
        

        // OPEN VIDEO FUNCTION - FEATURED WORK
        $('.open-vid').click(function(e) {
            e.preventDefault();
            var src= $(this).data('vid'),
            parent = $(this).parent(),
            img = $(this).children('img');

            var vidDiv = $('<div/>', {class:'og-fullimg home-video', style:'opacity:0' }),
            vid = $('<video/>', {'src':src,'controls':'', 'class':'feat-video', 'type':'video/mp4'});

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


        // WINDOW ON LOAD        
        // HIDE SPINNER
        $('#ajax-loader').fadeOut(500);

        // SWITCH IMG SRC FOR LAZY LOADING
        $img.unveil(600);

        // INITIALIZE MENU
        $mainMenu.flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#page-button'
        });
        $siteHeader.show();

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
                // autoplay options go gere
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
            // autoPlay: {
            //     // autoplay options go gere
            //     enabled: true,
            //     pauseOnHover: true
            // }
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
                // autoplay options go gere
                enabled: true,
                pauseOnHover: true,
                delay:6000
            }
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
                // autoplay options go gere
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

        function homeParallax() {
            var top = $(this).scrollTop(),
            ratio = top/2.825,
            sRatio = top/1.85;

            $blackLogo.css('transform', 'translateY(' + ratio + 'px)');
            $slide.css('transform', 'translate3d(0,' + sRatio + 'px, 0)');
        }


        // PARALLAX SCROLL
        if(device === 'desk') {
            $w.scroll(function(){
                var offset, offsetY;

                offset =  $firstCon.offset();
                offsetY = offset.top-$w.scrollTop();
                if(offsetY >= -52) {
                    homePara = requestAnimFrame(homeParallax);
                }
            });
        }

    // HIDE SPINNER
    // $('.preload-wrap').removeClass('preload-wrap');
    // $('#ajax-loader').fadeOut(500);

    });
});