define(["jquery", 
        // "util/config", 
        "flexnav",
        "util/grid",
        "util/feat-button"], function($, flexnav, grid ,featButton) {
    
    $(function() {
        // $body = $('body');

        // TEST FOR MOBILE DEVICE / TABLET
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
            // console.log('this is device' + device);
            // $body.addClass('mobile');
        } else {
            device = 'desk';
            // console.log('this is device' + device);
        }

        
        var $body = $('body'),
            $mainMenu = $("#page-fixed");

        $('#page-title').text('Projects');
        $('#page-projects').addClass('mobile-hidden current');

        // window.onload = (function(){
            // HIDE SPINNER
            // $('#ajax-loader').fadeOut(500);

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


        // })();

    });
});
