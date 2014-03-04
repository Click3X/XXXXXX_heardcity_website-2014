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
        halfPara;
        
        function homeParallax(){
            var top = $(this).scrollTop();                
            homeLogo.css('transform', 'translateY(' + (top/-1.625) + 'px)'); 
            slide.css('transform', 'translate3d(0,' + (-top/-6) + 'px, 0)');                 
        }

        function halfParallax(){
            var top = $(this).scrollTop(),
            ratio = top/-18;    
            jeanJacket.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 
        }

        // -------------------------------------- STICKY MENU FUNCTION -------------------------------------- //
        var menu = $('.home #new-menu-holder').eq(0),
        firstCon = $('.home #first-container');

        w.scroll(function(){
            var offset, offsetY;

            offset =  firstCon.offset();
            offsetY = offset.top-w.scrollTop();

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
            }

        });
        //  -------------------------------------- end STICKY MENU FUNCTION -------------------------------------- //
    });
    
    // Scroll Window to top on page refresh, remove hidden class on logo
    w.ready(function() {
        w.scrollTop(0);
        homeLogo.removeClass('logo-invisible');
    });

});