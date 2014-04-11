$(function() {
    var $body = $('body');
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

    // MAIN MENU
    $mainMenu.flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });


    // HIDE SPINNER
    // $('.preload-wrap').removeClass('preload-wrap');
    $('#ajax-loader').fadeOut(500);
    

});