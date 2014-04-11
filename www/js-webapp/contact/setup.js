$(function() {
    var $body = $('body');
    // TEST FOR MOBILE DEVICE / TABLET
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        device = 'mobile';
        $body.addClass('mobile');
    } else {
        device = 'desk';
    }
    
    var $body = $('body'),
        $mainMenu = $("#page-fixed"),
        $blackLogo = $('#black-logo');
         
    $('#page-title').text('Contact');
    $('#page-contact').addClass('mobile-hidden current');

    // MAIN MENU
    $mainMenu.flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });


    // HIDE SPINNER
    $('.preload-wrap').removeClass('preload-wrap');
    $('#ajax-loader').fadeOut(500); 

});