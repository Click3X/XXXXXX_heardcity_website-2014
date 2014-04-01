define(["jquery", 
		"util/config", 
		"flexnav"], function($, config, flexnav ) {
    
    $(function() {
        var $body = $('body'),
            $mainMenu = $("#page-fixed"),
            $blackLogo = $('#black-logo');
            $loader = $('#loader');

        window.onload = (function(){
            // MAIN MENU
            $mainMenu.flexNav({
                'hoverIntent': false,
                'hover':false,
                'buttonSelector': '#page-button'
            });
        })();


        $('#page-contact').addClass('current');
        $('#page-title').text('Contact');
    });
});
