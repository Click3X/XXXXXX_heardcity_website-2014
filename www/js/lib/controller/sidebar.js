// SUB MENU
define(['jquery', 'flexnav'], function($) {
      
    'use strict';

    $(function() {
        var $memberLinks = $('#member-fixed a'),
        sideDroor = ('#member-header'),
        $sidebarButton = $('#member-button');

        // OPEN CLOSE SIDEBAR
        $sidebarButton.click(function () {
            $(sideDroor).toggleClass('side-bar-closed');
        });

    });

});