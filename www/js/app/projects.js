define(["jquery", 
        "util/config", 
        "flexnav",
        "util/grid",
        "util/feat-button"], function($, config, flexnav, grid ,featButton) {
    
    $(function() {
        var $body = $('body'),
            $mainMenu = $("#page-fixed");

        $('#page-title').text('Projects');
        $('#page-projects').addClass('current');

        window.onload = (function(){

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
