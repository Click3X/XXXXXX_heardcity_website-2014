// OUR TEAM JS

// DOCUMENT READY
$(document).ready(function() {
	var device;
    // CHECK FOR MOBILE
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		device = 'mobile';
		$body.addClass('mobile');
 } else {
		device = 'desk';
 }

 // VARS
 var $body = $("body"),
    $mainMenu = $("#page-fixed"),
    $subNav = $("#member-fixed"),
    $img = $("img"),
    $clickClose = $('#click-close'),
    $sidebarLinks = $('#member-fixed .sidebar-link'),
    $clueTipPermalink = $('.item-list .permalink'),
    $memberBioPermalink = $('#member-bio .permalink > a');

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

 // TOGGLE SIDE BAR
 $('#member-button').click( function() {
    $('#member-header').toggleClass('side-bar-closed');
    $clickClose.toggleClass('hidden');
    $clickClose.click(function() {
        $('#member-header').toggleClass('side-bar-closed');
       });
   });

});