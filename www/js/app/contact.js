define(["jquery", 
		"util/config", 
		"flexnav"], function($, config, flexnav ) {
    
    $(function() {
        var $body = $('body'),
            $mainMenu = $("#page-fixed"),
            $blackLogo = $('#black-logo');
            $loader = $('#loader');
        
        $('#page-contact').addClass('current');
        $('#page-title').text('Contact');

        window.onload = (function(){
            // HIDE SPINNER
            $('#ajax-loader').fadeOut(500);
            
            // MAIN MENU
            $mainMenu.flexNav({
                'hoverIntent': false,
                'hover':false,
                'buttonSelector': '#page-button'
            });
        })();

    });
});
