$(function() {

    // TEST FOR MOBILE DEVICE / TABLET
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        device = 'mobile';
    } else {
        device = 'desk';
    }

    
    var $body = $('body'),
        $mainMenu = $("#page-fixed");

    $body.addClass(device);

    $('#page-title').text('Projects');
    $('#page-projects').addClass('mobile-hidden current');

    // HIDE SPINNER
    // $('.preload-wrap').removeClass('preload-wrap');
    $('#ajax-loader').fadeOut(500);

    // INITIALIZE MENU
    $mainMenu.flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });

    // INITIANLIZE GRID
    $(function() {
         Grid.init();

         if(selectedProject) {
            setTimeout(function() {
                var target = '#'+selectedProject;
                var parent = $(target).parent();
                // parent.addClass('og-expanded');
                $(target).click();

            }, 100);
           
        }

    });
       

});