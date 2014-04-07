// SUB MENU
define(['jquery', 'flexnav'], function($) {
      
    'use strict';
    var $mainMenu = $('#page-fixed'),
    $subNav = $('#member-fixed');

    $(function() {
         // INITIALIZE MENU
        $mainMenu.flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#page-button'
        });

        // SUB MENU
        $subNav.flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#member-button'
        });

        // CURRENT PAGE
        $('#page-title').text('Our Team');
        $('#page-ourteam').addClass('mobile-hidden current');

    });

});