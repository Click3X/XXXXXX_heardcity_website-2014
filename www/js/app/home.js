define(["jquery", "util/helper", "util/nav", "util/carousel", "util/request-anim"], function($) {
    
    var homeLogo = $('#logo-bg'),
    w = $(window);

    // Scroll Window to top on page refresh, remove hidden class on logo
    w.ready(function() {
        w.scrollTop(0);
        // Remove invisible class from main logo
        homeLogo.removeClass('logo-invisible');
    });

    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');

        // Toggle Nav
    	docBody.toggleNav();
        // Toggle helper * DELETE FOR PRODUCTION
        docBody.helper();

        // Open nav menu * Find a better solution for this
        $('.navLink').click();

        // PARALLAX VARs
        var slide = $('#home-slider .slide'),
        guitarNord = $('#guitar-nord'),
        jeanJacket = $('#jean-jacket'),
        dudePhone = $('#dude-on-phone'),
        dogWindows = $('#dog-windows'),
        stairs = $('#stairs'),
        girl = $('#girl-large'),
        girlPara,
        stairsPara,
        homePara,
        halfPara,
        gNordPara,
        dudePara;
        
        function homeParallax() {
            var top = $(this).scrollTop(),
            ratio = top/-1.625,
            sRatio = -top/-6;

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
            gRatio = top/16;
            guitarNord.css('transform', 'translate3d(0,' + gRatio + 'px, 0)'); 
        }

        function dudeParallax() {
            var top = $(this).scrollTop(),
            ratio = top/16;
            dudePhone.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 
        }

        function dogParallax() {
            var top = $(this).scrollTop(),
            ratio = -top/24;
            dogWindows.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 
        }

        function girlParallax() {
            var top = $(this).scrollTop(),
            ratio = top/-24;
            girl.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 
        }

        function stairsParallax() {
            var top = $(this).scrollTop(),
            gRatio = top/16;
            stairs.css('transform', 'translate3d(0,' + gRatio + 'px, 0)'); 
        }

       // STICKY MENU
        var menu = $('#new-menu-holder').eq(0),
        firstCon = $('#first-container');

        // ON SCROLL
        w.scroll(function(){
            var offset, offsetY;

            offset =  firstCon.offset();
            offsetY = offset.top-w.scrollTop();

            // DEV -get scrollY
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

            // NORD PARALLAX & JEAN JACKET PARALAXX
            if((offsetY > -1282) && (offsetY < 744) ) {
                halfPara = requestAnimFrame(halfParallax);
                gNordPara = requestAnimFrame(gNordParallax);
            }

            // DUDE PARALLAX
            if((offsetY > -2184) && (offsetY < -624) ) {
                dudePara = dudeParallax();
            }

            // DOG PARALLAX
            if((offsetY > -2586) && (offsetY < -1244) ) {
                dogPara = dogParallax();
            }

            // GIRL PARALLAX & STAIRS PARALLAX
            if((offsetY > -3742) && (offsetY < -2730) ) {
                girlPara = girlParallax();
                stairsPara = stairsParallax();
            }

        });
    });

});