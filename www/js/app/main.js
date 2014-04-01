define(["jquery", 
        "util/config", 
        "util/jquery.slider", 
        "util/jquery.menu",
        "controller/parallax",
        "controller/request-anim",
        "royalslider"], function($, config, slider, menu, parallax, requestAnim, royalslider) {
    
    $(function() {
        var $body = $('body'),
        $mainMenu = $("#page-fixed"),
        $marqueeSlider = $('#marquee-slider'),
        $blackTextSlider = $('#black-text-slider'),
        $featuredSlider = $('#featured-slider'),
        $greyTextSlider = $('#grey-text-slider'),
        device,
        $teamSlider = $('#team-slider');


        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
            console.log('this is device' + device);
        } else {
            device = 'desk';
            console.log('this is device' + device);
        }
                
        window.onload = (function(){

            $('.open-vid').click(function(e) {
                e.preventDefault();
                var src= $(this).data('vid'),
                parent = $(this).parent(),
                img = $(this).children('img'); 

                var vidDiv = $('<div/>', {class:'og-fullimg home-video', style:'opacity:0' }),
                vid = $('<video/>', {"src":src,"controls":"", "type":"video/mp4"});

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
                selectedInput = $(selectedProjectLink).siblings('input'),
                selectedInput = selectedInput[0];
                // Check the input associated with Project
                $(selectedInput).prop('checked', true);
                // Submit to our team
                $('#projectForm').submit();
            });



            // IF MEMBER IS CLICKED, SUBMIT FORM   
            $('.member-permalink').click(function() { 

                var selectedMemberLink = $(this),
                selectedInput = $(selectedMemberLink).siblings('input'),
                selectedInput = selectedInput[0];
                // Check the input associated with team member
                $(selectedInput).prop('checked', true);
                // Submit to our team
                $('#myForm').submit();
            });



            // REMOVE BG-WHITE on Page load
            $body.removeClass('white-bg');

            // INITIALIZE MENU
            $mainMenu.flexNav({
                'hoverIntent': false,
                'hover':false,
                'buttonSelector': '#page-button'
            });

            // INITIALIZE SLIDERS
            $marqueeSlider.royalSlider({
                autoHeight: true,
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
                usePreloader: false
            });

            $blackTextSlider.royalSlider({
                autoHeight: true,
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
                usePreloader: false
            });

            $greyTextSlider.royalSlider({
                autoHeight: true,
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
                usePreloader: false
            });

            $featuredSlider.royalSlider({
                autoHeight: true,
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
                usePreloader: false,
                navigateByClick: false
            });

            $teamSlider.royalSlider({
                imageScaleMode:'none', 
                imageAlignCenter:false,
                autoHeight: true,
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
                usePreloader: false,
                navigateByClick: false
            });


            if(device == 'desk') {
                // ON SCROLL
                w.scroll(function(){
                    var offset, offsetY;

                    offset =  firstCon.offset();
                    offsetY = offset.top-w.scrollTop();

                    // HOME SLIDE LOGO PARALLAX
                    if(offsetY >= -52) {
                        homePara = requestAnimFrame(homeParallax);
                    }

                    // NORD PARALLAX & JEAN JACKET PARALAXX
                    if((offsetY > -1282) && (offsetY < 744) ) {
                   //     halfPara = requestAnimFrame(halfParallax);
                    //  gNordPara = requestAnimFrame(gNordParallax);
                    }

                    // // DUDE PARALLAX
                    if((offsetY > -2184) && (offsetY < -624) ) {
                       // dudePara = dudeParallax();
                    }
                });
            }

        })();



        // STICKY NAV 
        var $w = $(window),
        $firstCon = $('#first-container'),
        $siteHeader = $('#site-header');

        $w.scroll(function(){
            var offset, offsetY;
            offset =  $firstCon.offset();
            offsetY = offset.top-$w.scrollTop();
            // STICKY NAV
            if(offsetY <= 49) {
                $siteHeader.addClass("sticky-top");
            } else if(offsetY > 49) {
                $siteHeader.removeClass("sticky-top");
            }
        });


        // PAGE TITLE
        $('#page-title').text('Home');
        $('#page-home').addClass('current');



    });


            




});

