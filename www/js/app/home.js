define(["jquery", "util/helper", "util/nav", "util/carousel"], function($) {
    
    // Add helper button
    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');
    	docBody.toggleNav();
        docBody.helper();
        $('.navLink').click();



        ///////////////////////////////
        // Home Slideshow Parallaxcomp
        ///////////////////////////////

        var slide = $('.home #home-slider .slide'),
        guitarNord = $('#guitar-nord'),
        jeanJacket = $('#jean-jacket'),
        dudePhone = $('#dude-on-phone');
        homeLogo = $('.home .container .logo-bg');
        
        var homePara;
        function homeParallax(){
            var top = $(this).scrollTop();                
            homeLogo.css('transform', 'translateY(' + (top/-1.625) + 'px)'); 
            slide.css('transform', 'translate3d(0,' + (-top/-6) + 'px, 0)');                 
            
            // homePara = requestAnimationFrame(homeParallax);
        }

        var halfPara;
        function halfParallax(){
            var top = $(this).scrollTop(),
            ratio = top/-18;    
            jeanJacket.css('transform', 'translate3d(' + ratio + 'px, 0, 0)'); 

            // halfPara = requestAnimationFrame(halfParallax);
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
            console.log('THis is offsetY '+offsetY+'\n');

            // STICKY NAV
            if(offsetY <= 49) {
                menu.addClass("sticky-top");
            } else if(offsetY > 49) {
                menu.removeClass("sticky-top");
            }

            // If not scrolled past -112, Fire home Parallaxcomp
            if(offsetY >= -112) {
                // homeParallax(); 
                homePara = requestAnimationFrame(homeParallax);
            }

            // HALF IMAGES PARALLAX
            if((offsetY > -1282) && (offsetY < 744) ) {
                halfParallax(); 

                halfPara = requestAnimationFrame(halfParallax);
            }


        });
//  -------------------------------------- end STICKY MENU FUNCTION -------------------------------------- //



    });
});