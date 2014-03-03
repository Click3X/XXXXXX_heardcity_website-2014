define(["jquery", "util/helper", "util/nav", "util/carousel"], function($) {
    
    // Add helper button
    $(function() {
        var docBody = $('body');
    	docBody.toggleNav();
        docBody.helper();
        $('.navLink').click();



        ///////////////////////////////
        // Home Slideshow Parallaxcomp
        ///////////////////////////////

        var slide = $('.home #home-slider .slide'),
        dudePhone = $('#dude-on-phone');
        homeLogo = $('.home .container .logo-bg');

        function homeParallax(){
            if(docBody.hasClass('home')){    
                var top = $(this).scrollTop();                
                homeLogo.css('transform', 'translateY(' + (top/-1.625) + 'px)'); 
                slide.css('transform', 'translate3d(0,' + (-top/-6) + 'px, 0)');                 
            }   
        }


// -------------------------------------- STICKY MENU FUNCTION -------------------------------------- //
        var w = $(window),
        menu = $('.home #new-menu-holder').eq(0),
        firstCon = $('.home #first-container');
        // Set some kind of Timeout function to not call this too often
        $(window).scroll(function(){
            var offset, offsetY;

            offset =  firstCon.offset();
            offsetY = offset.top-w.scrollTop();

            // STICKY NAV
            if(offsetY <= 49) {
                menu.addClass("sticky-top");
            } else if(offsetY > 49) {
                menu.removeClass("sticky-top");
            }

            // If not scrolled past -112, Fire home Parallaxcomp
            if(offsetY >= -112) {
                homeParallax(); 
            }
        });
//  -------------------------------------- end STICKY MENU FUNCTION -------------------------------------- //



    });
});