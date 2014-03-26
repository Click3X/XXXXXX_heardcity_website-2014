$.fn.helper = function() {

    // Charles Helper Button
    $('<style type="text/css"> .outline { outline: 1px solid rgba(255, 0, 0, 0.2);} </style>').appendTo('head');
	$('body').append('<input id="out" type="button" value="Outline" style="position:fixed; right:5px; width:80px; bottom:100px; z-index:30000"/>');
	$('#out').click(function() {
	    $('*').toggleClass('outline');
	});
}




var k =0;
// REVEAL FUNCTION
function reveal(li) {
	$(li).removeClass('item-hidden').addClass('item-show', 1000);
}
// SHOW AFTER TIMEOUT
function showLi(li, k) {
	setTimeout(function() {
		reveal(li);
		console.log('this is li' + li + ' this is k ' + k );
	}, 6 * ( k + 1 ));
}