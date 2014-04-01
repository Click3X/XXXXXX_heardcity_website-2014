define(["jquery", 
        "util/config", 
        "flexnav",
        "util/grid",
        "util/feat-button"], function($, config, flexnav, grid ,featButton) {
    
    $(function() {
        var $body = $('body'),
            $mainMenu = $("#page-fixed"),
            $blackLogo = $('#black-logo');
            $loader = $('#loader');

        window.onload = (function(){
            // REMOVE BG-WHITE on Page load
            $body.removeClass('white-bg');
            $loader.hide();
            $blackLogo.hide();
            // console.log('Window is loaded Bitch!');

            // INITIALIZE MENU
            $mainMenu.flexNav({
                'hoverIntent': false,
                'hover':false,
                'buttonSelector': '#page-button'
            });

            $('#page-title').text('Projects');
            $('#page-projects').addClass('current');

            // INITIANLIZE GRID
            Grid.init();

            if(selectedProject) {
            //    console.log('There is a selectedProject!' + selectedProject);
                $(selectedProject).click();
            }


        })();

        // $('#page-title').text('Projects');
        // $('#page-projects').addClass('current');
    });
});
