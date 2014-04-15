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


	<link rel="stylesheet" href="heard/css/base.css">
	<link rel="stylesheet" href="heard/css/footer.css">
	<link rel="stylesheet" href="heard/css/nav.css">


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


	<script src="heard/js/lib/jquery.hoverIntent.js"></script>
	<script src="heard/js/lib/jquery.cluetip.js"></script>

	<script src="heard/js/lib/lazyload.js"></script>

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
	
	<div data-role="header" class="header-nav">
        <?php include('nav-template.php'); ?>
    </div>
    <!-- OURTEAM -->
    <div data-role="page" id="ourteam" data-title="Our Team">
    	
    	
        <div data-role="content">
            <div id="main" role="main" class="ui-content" class="main">
		    	<?php include('heard/php/projects/bio.php'); ?>
		    	<!-- SUB NAV TRIGGER -->
		    	<a id="sub-nav-trigger" href="#right-panel" data-icon="carat-l" data-iconpos="notext" data-shadow="false" data-iconshadow="false" class="right-arrow">&lt;</a>
		    	
		    	<div id="all-items-holder" class="all-items-holder clearfix">
		    		<ul id="all-items" class="all-items"></ul>
		    	</div>
		    </div><!-- /main -->

        </div>
        <!-- SIDEBAR PANEL -->

	    <div data-role="panel" id="right-panel" data-display="push" data-position="right" data-theme="b">
	        <!-- <a href="#" data-rel="close" class="ui-btn ui-corner-all ui-shadow ui-mini ui-btn-inline ui-icon-delete ui-btn-icon-right">Close</a> -->
	        <?php include('heard/php/sub-nav.php'); ?>
	    </div><!-- /SIDEBAR -->
		<div data-role="footer">
             <?php include('heard/php/footer.php'); ?>
        </div>
    </div>

    <script src="heard/js/ourteam/index.js"></script>

</body>
</html>