define(["jquery", 
		"util/config", 
		"../util/jquery.menu"], function($, config, menu ) {
    
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
