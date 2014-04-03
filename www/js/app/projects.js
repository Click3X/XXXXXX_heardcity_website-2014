define(["jquery", 
        "util/config", 
        "flexnav",
        "util/grid",
        "util/feat-button"], function($, config, flexnav, grid ,featButton) {
    
    $(function() {

        // TEST FOR MOBILE DEVICE / TABLET
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
            // console.log('this is device' + device);
            $body.addClass('mobile');
        } else {
            device = 'desk';
            // console.log('this is device' + device);
        }

        // SPINNER IS NOT WORKING RIGHT - DISABLE TEMPORARILY
        // $('#ajax-loader').fadeOut(500);
        // $('#ajax-loader').hide();


        var $body = $('body'),
            $mainMenu = $("#page-fixed");

        $('#page-title').text('Projects');
        $('#page-projects').addClass('mobile-hidden');

        window.onload = (function(){
            // HIDE SPINNER
            $('#ajax-loader').fadeOut(500);

            // INITIALIZE MENU
            $mainMenu.flexNav({
                'hoverIntent': false,
                'hover':false,
                'buttonSelector': '#page-button'
            });

            // INITIANLIZE GRID
            Grid.init();

            if(selectedProject) {
                $(selectedProject).click();
            }


        })();

    });
});
