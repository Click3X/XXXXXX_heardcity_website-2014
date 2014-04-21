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


    // INITIALIZE MENU
    $mainMenu.flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });

    // HASH on CLICK
    $("#og-grid a").click(function(e) {
        window.location.hash = $(this).attr("id");
        e.preventDefault();
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