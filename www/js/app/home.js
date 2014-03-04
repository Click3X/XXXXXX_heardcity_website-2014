define(["jquery", "util/helper", "util/nav", "util/carousel", "util/request-anim"], function($) {
    
    var homeLogo = $('#logo-bg'),
    w = $(window);  

    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');

    	docBody.toggleNav();
        docBody.helper();

        // Open nav menu * Find a better solution for this
        $('.navLink').click();

        ///////////////////////////////
        // Home Slideshow Parallaxcomp
        ///////////////////////////////

        var slide = $('.home #home-slider .slide'),
        guitarNord = $('#guitar-nord'),
        jeanJacket = $('#jean-jacket'),
        dudePhone = $('#dude-on-phone'),
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
            gRatio = top/16; 
            guitarNord.css('transform', 'translate3d(0,' + gRatio + 'px, 0)'); 
        }

        // -------------------------------------- STICKY MENU FUNCTION -------------------------------------- //
        var menu = $('.home #new-menu-holder').eq(0),
        firstCon = $('.home #first-container');

        w.scroll(function(){
            var offset, offsetY;

            offset =  firstCon.offset();
            offsetY = offset.top-w.scrollTop();

            // DEV -get scrollY
            // console.log('This is offsetY: ' + offsetY);

            // STICKY NAV
            if(offsetY <= 49) {
                menu.addClass("sticky-top");
                homeLogo.addClass('logo-invisible');
            } else if(offsetY > 49) {
                menu.removeClass("sticky-top");
                homeLogo.removeClass('logo-invisible');
            }

            // If not scrolled past -112, Fire home Parallaxcomp
            if(offsetY >= -112) {
                homePara = requestAnimFrame(homeParallax);
            }

            // HALF IMAGES PARALLAX
            if((offsetY > -1282) && (offsetY < 744) ) {
                halfPara = requestAnimFrame(halfParallax);
                gNordPara = requestAnimFrame(gNordParallax);
            }

        });
    });
    
    // Scroll Window to top on page refresh, remove hidden class on logo
    w.ready(function() {
        w.scrollTop(0);
        homeLogo.removeClass('logo-invisible');
    });

});