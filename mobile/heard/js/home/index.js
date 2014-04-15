$(document).ready(function() {
    var $mMenu = $("#mmenu");
        // HEADER MENU OPEN CLOSE
    $mMenu.hide();
    $(".mtoggle").click(function() {
        $mMenu.slideToggle(200);
    });

    $('#mmenu a').click(function() {
        var target = $(this).attr('href');
        target = target.substr(1);
        console.log('This is your target: ' + target);
        $('#page-title').text(target);

        $mMenu.slideToggle(200);
    });


    // HASH TAG - ENABLE DEEP LINKING
    $('a[href^="#"]').not('.all-members, .navicon, #sub-nav-trigger').bind('click vclick', function () {
        location.hash = $(this).attr('href');
        return false;
    });

});


$( document ).on( "pagecreate", "#home", function() {

    // SWITCH PAGE TITLE
    $('#page-title').text('Home');
    // HIDE CURRENT PAGE TITLE ON MENU
    // $('#mmenu li').show();
    // $('#page-home').hide();

	var preloadAnim = $('#preload-anim');
	var animHolder = $('#anim-holder');
	// CHECK FOR MOBILE OR DESK SIZE
    if(device == 'desk') {
    $(function() {
        var count = 20001;
        var spritePre = 'sprite-pre_loader';
        var finalFrame = 20133;

        function animPreLoader() {
           count++;
           if(count > finalFrame - 10) {
            preloadAnim.fadeOut(500);
            animHolder.fadeOut(500);
            // $('#body-inner').show(750);
            clearInterval(timeout);
           }
           var preCount = count-1;
           var preCountStr = preCount.toString();
           var countStr = count.toString();
           var preAnimClass = spritePre + preCountStr;
           var animClass = spritePre + countStr;
           preloadAnim.removeClass(preAnimClass).addClass(animClass);

          }
        var timeout = setInterval(animPreLoader, 32);
        animPreLoader();
       });
    }

	// INIT VARS
	var $marqueeSlider = $('#marquee-slider');

	// SIDE PANEL OPEN CLOSE
    $( document ).on( "swipeleft", "#demo-page", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#right-panel" ).panel( "open" );
            } 
        }
    });


    // // HEADER MENU OPEN CLOSE
    // $("#mmenu").hide();
    // $(".mtoggle").click(function() {
    //     $("#mmenu").slideToggle(200);
    // });


    // INIT ROYALSLIDER
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



});