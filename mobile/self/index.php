<?php 
require_once('php/config.php');
require_once('php/functions.php');
$page = 'Our Team';
$class = formatLink($page);
?>
<!DOCTYPE HTML>
<html>
	<head> 
		<title>Heard City | <?php echo $page; ?></title> 
		<link rel="shortcut icon" href="favicon.ico">
		<meta charset="utf-8">

        <meta name="viewport" content="width=device-width, 
            initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, 
            user-scalable=yes">	

		<link rel="stylesheet" href="css/jquery-mobile.css" />
		<link rel="stylesheet" href="css/lazyload-animate.css" />

		<link rel="stylesheet" href="css/ourteam/items.css" />
		<link rel="stylesheet" href="css/ourteam/items-positions.css" />

		<link rel="stylesheet" href="css/cluetip/jquery.cluetip.css" />

		<link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
		<link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
		<!--[if IE]>
		  <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
		<![endif]-->

		<script>
	        // TEST FOR MOBILE DEVICE / TABLET
	        var device;
	        if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	            device = 'mobile';
	        } else if( /iPad/i.test(navigator.userAgent) ) {
	        	device = 'iPad';
	        } else {
	            device = 'desk';
	        }

	    </script>

		<script src="js/lib/jquery-1.9.1.js"></script>
		<script src="js/lib/jquery-mobile.js"></script>
		<script src="js/lib/lazyloadxt.js"></script>
		<script src="js/lib/underscore-min.js"></script>
		<script src="js/lib/jquery.hoverIntent.js"></script>
		<script src="js/lib/jquery.cluetip.js"></script>
	
	</head>
	<body class="<?php echo $class; ?>">
		<div data-role="page" id="ourteam" data-theme="b">

			<!-- TOP OVERLAY -->
			<div data-role="panel" data-dark-modal="true" data-position="top" data-display="overlay" id="toppaneloverlay" data-theme="a">
				<div data-role="navbar">
					<?php include('php/nav-template.php'); ?>
				</div><!-- /navbar -->
			</div><!-- /panel -->
			

			<!-- SIDEBAR -->
			<div data-role="panel" data-position="right" data-display="overlay" id="rightpanel" data-theme="a">
				<?php include('php/sub-nav.php'); ?>
			</div>

			
			<!-- HEADER -->
			<div data-role="header" data-position="fixed">
				<a href="#toppaneloverlay" data-role="button" data-rel="panel" data-dismissible="true">☰</a>
				<h1><?php echo $page; ?></h1>
			</div><!-- /header --> 
	

			<!-- CONTENT -->
			<div data-role="content">
				<div id="content-inner" class="content-inner">
					<!-- SIDEBAR LINK -->
					<a id="sidebar-button-holder" class="sidebar-button-holder" href="#rightpanel" data-role="button" data-rel="panel" data-dismissible="true">&nbsp;</a>

					<!-- BIO -->
					<?php include('php/ourteam/bio.php'); ?>

					<!-- MEMBER ITEMS -->
					<div id="all-items-holder" class="all-items-holder">
						<ul id="all-items" class="all-items"></ul>
					</div>
				
				</div>
			</div><!-- /content -->
			
			<div data-role="footer"><!-- data-position="fixed" -->
				<?php include('php/footer.php'); ?>
			</div>
		
		</div><!-- /page menu  -->

		<script src="js/ourteam/functions.js"></script>
		<script src="js/ourteam/index.js"></script>

		<script>
	    $(window).on('ajaxComplete', function() {

	        setTimeout(function() {
	            $(window).lazyLoadXT();

	        }, 50);

	        $.lazyLoadXT.onload.addClass = 'animated fadeIn';

	    });
	    </script>

	</body>
</html>

