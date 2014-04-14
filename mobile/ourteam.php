<?php 
require_once('heard/php/config.php');
require_once('heard/php/functions.php');

$page = 'Our Team';
?>
<!DOCTYPE html>
<html class="ui-mobile">
	<head>
	<!-- <base href="<?php echo $BASE; ?>"> -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Heard City | <?php echo $page; ?></title>
	
	<link rel="shortcut icon" href="demos/favicon.ico">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.css">
	<link rel="stylesheet" href="demos/_assets/css/jqm-demos.css">

	<link rel="stylesheet" href="heard/css/base.css">
	<link rel="stylesheet" href="heard/css/footer.css">
	<link rel="stylesheet" href="heard/css/nav.css">
	<link rel="stylesheet" href="heard/css/items.css">
	<link rel="stylesheet" href="heard/css/cluetip.css">


	<style>
	.outline { outline: 1px solid rgba(255, 0, 0, 0.2);}
	.outline-button {position: fixed; z-index: 1000; bottom:100px; left:100px;}
	/* Swipe works with mouse as well but often causes text selection. */
	#ourteam * {
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

	<script src="heard/js/lib/jquery.unveil.min.js"></script>

	<script src="heard/js/lib/jquery.hoverIntent.js"></script>
	<script src="heard/js/lib/jquery.cluetip.js"></script>
	<script src="heard/js/functions.js"></script>

	<script>
        // TEST FOR MOBILE DEVICE / TABLET
        var device;
        if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
        } else {
            device = 'desk';
        }

    </script>


	<script>
		$(function(){
			$("[data-role='navbar']").navbar();
			// $("[data-role='header'], [data-role='footer']").toolbar();
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

<body class="ui-mobile-viewport ui-overlay-a ourteam">

	<div data-role="page" id="ourteam" data-url="ourteam">
	    
	    <!-- MAIN NAV -->
	    <?php include('heard/php/new-main-nav.php'); ?>


	    <!-- MAIN CONTENT -->
	    <div id="main" role="main" class="ui-content" class="main">

	    	<?php include('heard/php/projects/bio.php'); ?>

	    	<div id="all-items-holder" class="all-items-holder clearfix">
	    		<ul id="all-items" class="all-items"></ul>
	    	</div>

	    </div><!-- /content -->



	    <!-- SIDEBAR PANEL -->
	    <div data-role="panel" id="right-panel" data-display="push" data-position="right" data-theme="b">

	        <a href="#" data-rel="close" class="ui-btn ui-corner-all ui-shadow ui-mini ui-btn-inline ui-icon-delete ui-btn-icon-right">Close</a>
	        <?php include('heard/php/sub-nav.php'); ?>

	    </div><!-- /panel -->

	</div>

	<script>
	$( document ).on( "pagecreate", "#ourteam", function() {

		// INIT VARS
		var $memBioName = $('#member-bio .name');
	    var $memBioBio = $('#member-bio .bio');
	    var heardBio = "People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.";
	    var heardName = "Heard City";
	    var $allItems = $('#all-items');
	    var recentlyClicked = [];

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

	        // ITIT ITEMS  TO PAGE
	        // GET MEMBER ITEMS ADD TO PAGE
			for(var i=0; i<memberArray.length; i++) {
				var items = memberArray[i].items;
				for(var k=0; k<items.length; k++) {
					items[k].build($allItems);
					recentlyClicked.push(items[k]);
				}
			}
			$memBioName.text(heardName);
			$memBioBio.text(heardBio);

			// ADD CLUE TIP
	        initClueTip();

	        $("img").unveil(1200);
	    });


///////////////////////////////////////////////////////// CLICK EVENTS //////////////////////////////////////////////////////////////////
	    // SIDEBAR CLICK EVENT
	    $('.sidebar-link').click(function() {
    		// REMOVE EXISING ITEMS
    		if(recentlyClicked.length > 0) {
    			for(var i=0; i<recentlyClicked.length; i++) {
    				recentlyClicked[i].remove();
    			}
    		}

    		// STORE MATCHING MEMBER - PUT IN NAME
			var memberId = $(this).data('person');
			var selectMember = _.where(memberArray, {id:memberId});

			// ADD MEMBER BIO
			$memBioName.text(selectMember[0].name);
			$memBioBio.text(selectMember[0].bio);

			// GET MEMBER ITEMS ADD TO PAGE
			var items = selectMember[0].items;
			console.log('These are the items!'); console.dir(items);
			for(var i=0; i<items.length; i++) {
				items[i].build($allItems);
				recentlyClicked.push(items[i]);
			}

			// ADD CLUE TIP
	        initClueTip();
		});

		// ALL MEMBER CLICK
		$('.all-members').click(function() {
    		// REMOVE EXISING ITEMS
    		if(recentlyClicked.length > 0) {
    			for(var i=0; i<recentlyClicked.length; i++) {
    				recentlyClicked[i].remove();
    			}
    		}

    		// STORE MATCHING MEMBER - PUT IN NAME
			var memberId = $(this).data('person');
			var selectMember = _.where(memberArray, {id:memberId});

			// ADD MEMBER BIO
			$memBioName.text(heardName);
			$memBioBio.text(heardBio);

			// GET MEMBER ITEMS ADD TO PAGE
			for(var i=0; i<memberArray.length; i++) {
				var items = memberArray[i].items;
				for(var k=0; k<items.length; k++) {
					items[k].build($allItems);
					recentlyClicked.push(items[k]);
				}
			}

			// ADD CLUE TIP
	        initClueTip();
		});


 
	});
	</script>
	
</body>
</html>