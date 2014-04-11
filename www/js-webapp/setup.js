function formatLink(string) {
    string = string.replace(/[^a-z0-9\s]/gi, '');
    string = string.toLowerCase();
    string = string.replace(/[_\s]/g, '');
    return string;
}


$('#page-title').text('Our Team');
$('#page-ourteam').addClass('mobile-hidden current');

// VARS
var $body = $('body'),
    $mainMenu = $('#page-fixed'),
    $subNav = $('#member-fixed'),
    $img = $('img'),
    $clickClose = $('#click-close'),
    $sidebarLinks = $('#member-fixed .sidebar-link'),
    $clueTipPermalink = $('.item-list .permalink'),
    $memberBioPermalink = $('#member-bio .permalink > a');


// CHANGE SRC ON IMAGES
        // var toPngs = $('.item img');
        // // console.dir(toPngs);

        // var noJpg = [
        //     'items/Peony_Rene_necklace.png',
        //     'items/Eric_Warzecha_jersey.png',
        //     'items/Elizabeth_McClanahan_guitar.png',
        //     'items/Keith_Reynaud_Pot.png',
        //     'items/Jeremy_Siegal_Jordans.png',
        //     'items/Jeremy_Siegal_chain.png',
        //     'items/Gary_Noel_plant.png',
        //     'items/Sasha_Awn_dress.png',
        //     'items/Sasha_Awn_moog.png',
        //     'items/Sasha_Awn_gloves.png',
        //     'items/Eric_Warzecha_guitar.png',
        //     'items/Talia_Rodgers_tank_top.png'
        // ];
        // // CHECK ARRAY FUNCTION
        // Array.prototype.contains = function ( needle ) {
        //     var i;
        //     for (i in this) {
        //         if (this[i] === needle) { return true; }
        //     }
        //     return false;
        // };

        // function switchSrc(obj) {
        //     var src = $(this).data('src'),
        //     png = /png$/;

        //     if (noJpg.contains(src)) {
        //         // console.log('Not this one');
        //     }
        //     else {
        //         src = src.replace(png, 'jpg');
        //         src = src.replace('items', 'items/jpg');
        //         $(this).attr('data-src', src);
        //     }
        // }
        // // SWITCH SRC
        // $.each(toPngs, switchSrc);


         // INITIALIZE MENU
        $mainMenu.flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#page-button'
        });

        // SUB MENU
        $('#member-fixed').flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#member-button'
        });

 // TOGGLE SIDE BAR
        $('#member-button').click( function() {
            $('#member-header').toggleClass('side-bar-closed');
            $('#member-button').toggleClass('rotate');
            $clickClose.toggleClass('hidden');
            $clickClose.click(function() {
                $('#member-header').toggleClass('side-bar-closed');
            });
        });

        $("a[href='#top']").click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

// IF SELECTED MEMBER

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;