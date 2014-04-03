define(["jquery", 
		"util/config", 
		"flexnav"], function($, config, flexnav ) {
    
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


        var $body = $('body'),
            $mainMenu = $("#page-fixed"),
            $blackLogo = $('#black-logo');
            // $loader = $('#loader');
        
        // $('#page-contact').addClass('current');
        $('#page-title').text('Contact');
        $('#page-contact').addClass('mobile-hidden current');

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
