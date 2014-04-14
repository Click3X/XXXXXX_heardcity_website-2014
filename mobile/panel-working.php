<?php 
require_once('heard/php/config.php');
require_once('heard/php/functions.php');
?>
<!DOCTYPE html>
<html class="ui-mobile">
	<head>
	<base href="http://mobile.dev/">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Heard City Mobile Tests</title>
	
	<link rel="shortcut icon" href="demos/favicon.ico">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.css">
	<link rel="stylesheet" href="demos/_assets/css/jqm-demos.css">

	<link rel="stylesheet" href="heard/css/nav.css">

	<style>
	.outline { outline: 1px solid rgba(255, 0, 0, 0.2);}
	.outline-button {position: fixed; z-index: 1000; bottom:100px; left:100px;}
	/* Swipe works with mouse as well but often causes text selection. */
	#demo-page * {
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    -o-user-select: none;
	    user-select: none;
	}
	/* Content styling. */
	dl { font-family: "Times New Roman", Times, serif; padding: 1em; }
	dt { font-size: 2em; font-weight: bold; }
	dt span { font-size: .5em; color: #777; margin-left: .5em; }
	dd { font-size: 1.25em; margin: 1em 0 0; padding-bottom: 1em; border-bottom: 1px solid #eee; }
	.back-btn { float: right; margin: 0 2em 1em 0; }


	</style>
	
	<script src="external/jquery/jquery.js"></script>
	<script src="demos/_assets/js/"></script>
	<script src="js/"></script>
	<script src="heard/js/lib/underscore-min.js"></script>
	<script src="heard/js/functions.js"></script>
	<script>
		$(function(){
			$("[data-role='navbar']").navbar();
			$("[data-role='header'], [data-role='footer']").toolbar();
		});
	</script>

	<script>
		$(function() {
			$('<input/>', {'id':'outline','type':'button', 'value':'outline', 'class':'outline-button'}).appendTo('body').click(function() {
				$('*').toggleClass('outline');
			})
		});
	</script>
</head>

<body class="ui-mobile-viewport ui-overlay-a">

	<div data-role="page" id="demo-page" data-url="demo-page">
	    <div data-role="header" data-theme="b">
	        <nav id="mobile">

			    <div id="toggle-bar">
			    	<a class="navicon mtoggle" href="#">☰</a>
			        <a href="#right-panel" data-icon="carat-l" data-iconpos="notext" data-shadow="false" data-iconshadow="false" class="right-arrow">&lt;</a>
			    </div>
			 
			    <ul id="mmenu">
			        <li><a href="#">Home</a></li>
			        <li><a href="#">Products</a></li>
			        <li><a href="#">About</a></li>
			        <li><a href="#">Contact</a></li>           
			    </ul>
			 
			</nav>
	    </div><!-- /header -->


	    <div id="main" role="main" class="ui-content" class="main">

	    	<?php include('heard/php/projects/bio.php'); ?>


	    	<div id="all-items-holder" class="all-items-holder clearfix">
	    		<ul id="all-items" class="all-items"></ul>
	    	</div>

	    </div><!-- /content -->

	    <div data-role="panel" id="right-panel" data-display="push" data-position="right" data-theme="b">
	        <p>Right push panel.</p>
	        <a href="#" data-rel="close" class="ui-btn ui-corner-all ui-shadow ui-mini ui-btn-inline ui-icon-delete ui-btn-icon-right">Close</a>
	        
	        <?php include('heard/php/sub-nav.php'); ?>

	    </div><!-- /panel -->
	</div>

	<script>
	$( document ).on( "pagecreate", "#demo-page", function() {

		// SIDE PANEL OPEN CLOSE
	    $( document ).on( "swipeleft", "#demo-page", function( e ) {
	        // We check if there is no open panel on the page because otherwise
	        // a swipe to close the left panel would also open the right panel (and v.v.).
	        // We do this by checking the data that the framework stores on the page element (panel: open).
	        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
	            if ( e.type === "swipeleft" ) {
	                $( "#right-panel" ).panel( "open" );
	            } 
	        }
	    });


	    // HEADER MENU OPEN CLOSE
	    $("#mmenu").hide();
	    $(".mtoggle").click(function() {
	        $("#mmenu").slideToggle(200);
	    });


	    // BUILD DATA
	    $.getJSON("heard/js/members.json", function(data) {
		    for (i = 0; i < data.members.length; i++) {
	            var memberInfo = data.members[i];
	            var member = new Members(memberInfo);
	            memberArray.push(member);
	        }
	    });


	    var $allItems = $('#all-items');
	    var recentlyClicked = [];
	    // SIDEBAR CLICK EVENT
	    $('.sidebar-link').click(function() {
	    		// REMOVE EXISING ITEMS
	    		// if(recentlyClicked.length > 0) {
	    		// 	for(var i=0; i<recentlyClicked.length; i++) {
	    		// 		recentlyClicked[i].remove();
	    		// 		recentlyClicked.splice( $.inArray(recentlyClicked[i], recentlyClicked), 1);
	    		// 	}
	    		// }

				var memberId = $(this).data('person');
				var selectMember = _.where(memberArray, {id:memberId});
				console.log('THis is the memberId: ' + memberId);
				console.log('THis is the selectMember: ' + selectMember); console.dir(selectMember);

				var items = selectMember[0].items;
				console.log('THis is the items: ' + items); console.dir(items);
				for(var i=0; i<items.length; i++) {
					items[i].build($allItems);
					recentlyClicked.push(items[i]);
				}

		});


 
	});
	</script>
	
</body>
</html>