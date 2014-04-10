define(['jquery',
        'util/config',
        'unveil',
        'flexnav',
        'controller/request-anim',
        'royalslider',
        'imgLoaded'], function($, config, unveil, flexnav, anim, royalslider, imgLoaded) {

    'use strict';

    $(function() {
        // TEST FOR MOBILE DEVICE / TABLET
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
            // console.log('this is device' + device);
            // $body.addClass('mobile');
        } else {
            device = 'desk';
            // console.log('this is device' + device);
        }

        $('body').addClass(device);

        var $imgs = $('img');
        var imgCount = $imgs.length;
        var imgLoaded = 0;
        var animHolder = $('#anim-holder');
        var preloadAnim = $('#preload-anim');

        // Hide body - to fade in after preload animation
        $('#body-inner').hide();

        // var percent = function() {
        //     var percent = imgLoaded/100;
        //     return percent;
        // }

        
        // $('body').imagesLoaded( function() {
        //     // images have loaded
        //     console.log('All images have loaded!');
        // });
        // $('body').imagesLoaded()
        //   .always( function( instance ) {
        //     console.log('all images loaded');
        //   })
        //   .done( function( instance ) {
        //     console.log('all images successfully loaded');
        //   })
        //   .fail( function() {
        //     console.log('all images loaded, at least one is broken');
        //   })
        //   .progress( function( instance, image ) {
        //     var result = image.isLoaded ? 'loaded' : 'broken';
        //     console.log( 'image is ' + result + ' for ' + image.img.src );
        //     if(result == 'loaded') {
        //         imgLoaded++;
        //         console.log('This is imgLoaded: ' + imgLoaded);
        //     }
        //   });
        // imagesLoaded( elem, callback );
        // // you can use `new` if you like
        // new imagesLoaded( elem, callback );
        // // IMAGES LOADED
        // imgLoad.on( 'progress', function( instance, image ) {
        //     var result = image.isLoaded ? 'loaded' : 'broken';
        //     console.log( 'image is ' + result + ' for ' + image.img.src );
        // });

        // GET all images count
        // $(function() {
            
        //     console.dir($imgs);
        //     console.log('These are your vars: ' + $imgs, imgCount, imgLoaded);

        //     $.each($imgs, function() {
        //         $(this).load(function() {
        //             console.dir(this);
        //             ++imgLoaded;
        //             console.log('This is imgLoaded: ' + imgLoaded);
        //             if(imgLoaded == imgCount) {
        //                 console.log('All images loaded!');
        //             }
        //         });
        //     });

        // });

        // animHolder.fadeOut(250);

        // if(device == 'mobile') {
        //     $('body').append('<div id="ajax-loader" class="hidden"><div class="ajax-spinner"><img src="images/logo/logo-white.png" width="150px" height="194px"><img src="images/sprites/ajaxSpinner.gif" id="spin-wheel"></div></div>');
        // }

        // ANIMATION function
        // if(device == 'desk') {
        //     $(function() {
        //         var count = 20001;
        //         var spritePre = 'sprite-pre_loader';
        //         var finalFrame = 20133;

        //         // $('#body-inner').hide();

        //         function animPreLoader() {
        //            count++;
        //            if(count > finalFrame - 1) {
        //             preloadAnim.fadeOut(500);
        //             animHolder.fadeOut(500);
        //             $('#body-inner').show(750);
        //             clearInterval(timeout);
        //            }
        //            var preCount = count-1;
        //            var preCountStr = preCount.toString();
        //            var countStr = count.toString();
        //            var preAnimClass = spritePre + preCountStr;
        //            var animClass = spritePre + countStr;
        //            preloadAnim.removeClass(preAnimClass).addClass(animClass);

        //           }
        //         var timeout = setInterval(animPreLoader, 32);
        //         animPreLoader();
        //        });
        //     }
        

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
        $('#page-home').addClass('mobile-hidden current');
        

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

        // INITIALIZE SLIDERS
        // $marqueeSlider.royalSlider({
        //     autoHeight: true,
        //     transitionSpeed:1200,
        //     arrowsNav: true,
        //     arrowsNavAutoHide:false,
        //     fadeinLoadedSlide: false,
        //     controlNavigationSpacing: 0,
        //     controlNavigation: 'none',
        //     imageScaleMode: 'none',
        //     imageAlignCenter:false,
        //     slidesSpacing:0,
        //     loop: true,
        //     loopRewind:false,
        //     numImagesToPreload: 6,
        //     keyboardNavEnabled: true,
        //     usePreloader: true,
        //     autoPlay: {
        //         // autoplay options go gere
        //         enabled: true,
        //         pauseOnHover: true,
        //         delay:6000
        //     }
        // });

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