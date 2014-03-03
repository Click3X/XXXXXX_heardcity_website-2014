$.fn.helper = function() {

    // Charles Helper Button
    $('<style type="text/css"> .outline { outline: 1px solid rgba(255, 0, 0, 0.2);} </style>').appendTo('head');
	$('body').append('<input id="out" type="button" value="Outline" style="position:fixed; right:5px; width:80px; bottom:100px; z-index:30000"/>');
	$('#out').click(function() {
	    $('*').toggleClass('outline');
	});
}