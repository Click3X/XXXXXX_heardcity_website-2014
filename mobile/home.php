<?php 
require_once('heard/php/config.php');
require_once('heard/php/functions.php');
$page = 'Home';
?>
<!DOCTYPE html>
<html class="ui-mobile">
	<head>
	<base href="<?php echo $BASE; ?>">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Heard City | <?php echo $page; ?></title>
	
	<link rel="shortcut icon" href="demos/favicon.ico">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.css">
	<link rel="stylesheet" href="demos/_assets/css/jqm-demos.css">

	<link rel="stylesheet" href="heard/css/royal/royalslider.css">

	<link rel="stylesheet" href="heard/css/base.css">
	<link rel="stylesheet" href="heard/css/footer.css">
	<link rel="stylesheet" href="heard/css/nav.css">
	<link rel="stylesheet" href="heard/css/home-slider.css">
	<link rel="stylesheet" href="heard/css/home.css">
	<link rel="stylesheet" href="heard/css/preload.css">



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


	ul {
		padding-left: 0;
		margin: 0;
	}
	</style>
	
	<script src="external/jquery/jquery.js"></script>
	<script src="demos/_assets/js/"></script>
	<script src="js/"></script>

	<script src="heard/js/lib/underscore-min.js"></script>
	<script src="heard/js/functions.js"></script>

	<script src="heard/js/lib/jquery.easing-1.3.js"></script>
	<script src="heard/js/lib/jquery.royalslider.min.js"></script>

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

<body class="home ui-mobile-viewport ui-overlay-a">

	<div data-role="page" id="demo-page" data-url="demo-page">

		<!-- ANIMATED PRE LOADER -->
        <div id="anim-holder" class="anim-holder preload-anim">
            <div id="preload-anim" class="sprite-pre_loader20000"></div>
        </div>



        <div class="content-wrap">

	    <!-- MARQUEE -->
		    <div id="black-logo" class="logo"></div>
		    <?php include('heard/php/home/marquee.php'); ?>

		    <!-- MAIN NAV -->
		    <?php include('heard/php/new-main-nav.php'); ?>

		    <!-- MAIN CONTENT -->
		    <div id="main" role="main" class="ui-content" class="main">
		    	
		    	<!-- // GUTIAR-NORD JEAN-JACKET -->
		        <div id="image-spread-1" class="container clearfix image-spread">
		            <div class="image-holder half">
		                <div id="guitar-nord" class="image-spread half-image bg-img"></div>
		            </div>
		            <div class="image-holder half">
		                <div id="jean-jacket" class="image-spread half-image bg-img"></div>
		            </div>
		        </div>

		    </div>

		    <?php include('heard/php/footer.php'); ?>

		</div><!--  CONTENT WRAP -->



	</div>

	<script>
	$( document ).on( "pagecreate", "#demo-page", function() {

		var preloadAnim = $('#preload-anim');
		var animHolder = $('#anim-holder');
		// CHECK FOR MOBILE OR DESK SIZE
	    if(device == 'desk') {
        $(function() {
            var count = 20001;
            var spritePre = 'sprite-pre_loader';
            var finalFrame = 20133;

            function animPreLoader() {
               count++;
               if(count > finalFrame - 10) {
                preloadAnim.fadeOut(500);
                animHolder.fadeOut(500);
                // $('#body-inner').show(750);
                clearInterval(timeout);
               }
               var preCount = count-1;
               var preCountStr = preCount.toString();
               var countStr = count.toString();
               var preAnimClass = spritePre + preCountStr;
               var animClass = spritePre + countStr;
               preloadAnim.removeClass(preAnimClass).addClass(animClass);

              }
            var timeout = setInterval(animPreLoader, 32);
            animPreLoader();
           });
        }

		// INIT VARS
		var $marqueeSlider = $('#marquee-slider');

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


	    // INIT ROYALSLIDER
	    // RANDOMIZE IMAGES before Marquee
	    $(function() {
	        $.fn.randomize = function(selector){
	            (selector ? this.find(selector) : this).parent().each(function(){
	                $(this).children(selector).sort(function(){
	                    return Math.random() - 0.5;
	                }).detach().appendTo(this);
	            });

	            return this;
	        };

	        $('#marquee-slider li').randomize();

	        // INITIALIZE SLIDERS
	        $marqueeSlider.royalSlider({
	            autoHeight: true,
	            transitionSpeed:1200,
	            arrowsNav: true,
	            arrowsNavAutoHide:false,
	            fadeinLoadedSlide: false,
	            controlNavigationSpacing: 0,
	            controlNavigation: 'none',
	            imageScaleMode: 'none',
	            imageAlignCenter:false,
	            slidesSpacing:0,
	            loop: true,
	            loopRewind:false,
	            numImagesToPreload: 6,
	            keyboardNavEnabled: true,
	            usePreloader: true,
	            autoPlay: {
	                // autoplay options go gere
	                enabled: true,
	                pauseOnHover: true,
	                delay:6000
	            }
	        });

	    });


 
	});
	</script>
	
</body>
</html>