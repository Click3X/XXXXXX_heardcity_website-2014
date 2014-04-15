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

	<link rel="stylesheet" href="heard/css/items.css">
	<link rel="stylesheet" href="heard/css/items-positions.css">
	<link rel="stylesheet" href="heard/css/cluetip.css">



	<style>
	body {line-height: 26px;}
		ul { padding:0; margin:0;}
		.ui-content {padding:0;}
		.header-nav p { text-align: center;}
		/*div[data-role="page"] {margin-top:50px;	}*/

		#toggle-bar .right-arrow { display: none;}
		.ourteam #toggle-bar .right-arrow { display: block;}
		.ourteam div[data-role="panel"] {
			background: #fff;
		}

		#page-title {
		/*	text-transform: uppercase;*/
			letter-spacing: .2em;
			margin: 2px 0;
			padding: 6px 0 6px 8px;
		}

		nav#mobile .navicon.center-toggle {position: static;}

/*		#mmenu li:first-child p {
			margin-top: 10px;
		}
*/
		#member-fixed a {
			text-decoration: none;
			text-transform: uppercase;
			text-shadow:none;
			color:#989899;
			font-weight: 400;
		}

		#sub-nav-trigger {
			background: white;
			width: 60px;
			text-align: center;
			height: 100%;
			top: 0;
			border-left: 1px solid #222;

			padding-top: 14px;
			color: #222;
			text-decoration: none;
			font-weight: 400;
			text-shadow: none;

		}
		#ourteam .ui-panel-wrapper {
			margin-right:0;
		}

		#ourteam .ui-panel-open.ui-panel-position-right.ui-panel-display-push {
			border-left-width: 0;
			margin-left: 0;
		}
		.home-container #main {
			min-width: none;
		}

		#right-panel,
		#ourteam {
			padding-top:50px;
		}
		
		#ourteam #main {
			padding-right:60px;
		}

		div#cluetip {
			background: rgba(255, 255, 255, 0.9);
		}

		#ourteam div[data-role="content"] {
			padding-top:50px;
		}

		#mmenu li {
			display: block;
			width: 100%;
			background-color: transparent !important;
		}

		#mmenu  p {
			/*margin:0;*/
			background-color: transparent !important;
		}

		#menu li a {
			background-color: transparent !important;
		}


		.container {
			padding-top:50px;
		}
.ui-page-theme-a .ui-btn,
 html .ui-bar-a .ui-btn,
 html .ui-body-a .ui-btn,
 html body .ui-group-theme-a .ui-btn,
 html head + body .ui-btn.ui-btn-a,
/* Button visited */
 .ui-page-theme-a .ui-btn:visited,
 html .ui-bar-a .ui-btn:visited,
 html .ui-body-a .ui-btn:visited,
 html body .ui-group-theme-a .ui-btn:visited,
 html head + body .ui-btn.ui-btn-a:visited {
	background-color: transparent !important;
	border-left:0; border-right:0;
}
		/*html,body{
		   height:100%
		  }
		  html{
		   overflow-y:scroll
		  }*/

	/*	#ourteram .ui-panel-wrapper {
			min-height:0;
		}*/

		div[data-role="header"] {
			border-top:0;
		}
	</style>

	
	<script src="external/jquery/jquery.js"></script>
	<script src="demos/_assets/js/"></script>
	<script src="js/"></script>

	<script src="heard/js/lib/underscore-min.js"></script>
	<script src="heard/js/lib/jquery.unveil.min.js"></script>
	
	<script src="heard/js/functions.js"></script>

	<script src="heard/js/lib/jquery.easing-1.3.js"></script>
	<script src="heard/js/lib/jquery.royalslider.min.js"></script>

	<script src="heard/js/lib/jquery.hoverIntent.js"></script>
	<script src="heard/js/lib/jquery.cluetip.js"></script>

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
		$(function() {
			$('<input/>', {'id':'outline','type':'button', 'value':'outline', 'class':'outline-button'}).appendTo('body').click(function() {
				$('*').toggleClass('outline');
			})
		});
	</script>

</head>

<body class="container">

	<div id="page1" data-role="page">
		<div data-role="header" class="header-nav">
        	<?php include('nav-template.php'); ?>
    	</div>
	  <div class="container" data-role="content">
	    <h1><a href="https://github.com/expandtheroom/jquery-infinite-scroll-helper">jQuery Infinite Scroll Helper</a> in jQuery Mobile</h1>
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <div class="pagination">
	      <a href="page2">Next</a>
	    </div>
	  </div>
	</div>

	<div id="page2" data-role="page">
	  <div data-role="content">
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	    <p class="article"><img src="http://placekitten.com/100/100"></p> 
	  </div>
	</div>

    <script src="heard/js/ourteam/index.js"></script>

</body>
</html>