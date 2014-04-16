<?php 
require_once('heard/php/config.php');
require_once('heard/php/functions.php');
$page = 'Our Team';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>jQuery Mobile</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="demos/favicon.ico">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
    <link rel="stylesheet" href="css/themes/default/jquery.mobile.css">
    <link rel="stylesheet" href="demos/_assets/css/jqm-demos.css">

    <script>
        // TEST FOR MOBILE DEVICE / TABLET
        var device;
        if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
        } else {
            device = 'desk';
        }

    </script>


    <script src="external/jquery/jquery.js"></script>
    <script src="demos/_assets/js/"></script>
    <script src="js/"></script>
    <script src="heard/js/lib/jquery.lazyloadxt.js"></script>

    
</head>
	<body class="ui-mobile-viewport ui-overlay-b">
		<div data-role="page" id="menu" data-theme="b" data-url="menu" tabindex="0" class="ui-page ui-body-b ui-page-panel ui-page-header-fixed ui-page-footer-fixed ui-page-active" style="padding-top: 42px; padding-bottom: 42px; min-height: 330px;">
		
			<div data-role="panel" data-dark-modal="true" data-position="top" data-display="push" id="toppanelpush" data-theme="a" class="ui-panel ui-panel-position-top ui-panel-display-push ui-panel-closed ui-body-a ui-panel-animate">
				<div class="ui-panel-inner"><div data-role="navbar" class="ui-navbar ui-mini" role="navigation">
					<ul class="ui-grid-b">
						<li class="ui-block-a"><a href="http://www.twitter.com" data-theme="d" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-d ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Twitter</span></span></a></li>
						<li class="ui-block-b"><a href="http://www.jquerymobile.com" data-theme="a" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">JQM</span></span></a></li>
						<li class="ui-block-c"><a href="http://www.youtube.com" data-theme="b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-b ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Youtube</span></span></a></li>
					</ul>
				</div><br><div data-role="navbar" class="ui-navbar ui-mini" role="navigation">
					<ul class="ui-grid-b">
						<li class="ui-block-a"><a href="http://www.facebook.com" data-theme="b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-b ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Facebook</span></span></a></li>
						<li class="ui-block-b"><a href="http://www.google.com" data-theme="e" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-e ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Google</span></span></a></li>
						<li class="ui-block-c"><a href="http://www.blackberry.com" data-theme="c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-c ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Blackberry</span></span></a></li>
					</ul>
				</div></div><!-- /navbar -->
				
				<!-- /navbar -->
			</div><!-- /panel -->
			
			<div data-role="panel" data-position="top" data-display="overlay" id="toppaneloverlay" data-theme="a" class="ui-panel ui-panel-position-top ui-panel-display-overlay ui-panel-closed ui-body-a ui-panel-animate">
				<div class="ui-panel-inner"><div data-role="navbar" class="ui-navbar ui-mini" role="navigation">
					<ul class="ui-grid-b">
						<li class="ui-block-a"><a href="http://www.facebook.com" data-theme="b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-b ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Facebook</span></span></a></li>
						<li class="ui-block-b"><a href="http://www.google.com" data-theme="e" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-e ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Google</span></span></a></li>
						<li class="ui-block-c"><a href="http://www.blackberry.com" data-theme="c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-c ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Blackberry</span></span></a></li>
					</ul>
				</div></div><!-- /navbar -->
			</div><!-- /panel -->
 		
			<div data-role="panel" data-position="left" data-display="overlay" id="leftpanel" data-theme="a" class="ui-panel ui-panel-position-left ui-panel-display-overlay ui-panel-closed ui-body-a ui-panel-animate">
				<div class="ui-panel-inner"><a href="http://www.facebook.com" data-role="button" data-theme="b" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" class="ui-btn ui-btn-up-b ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Facebook</span></span></a><a href="http://www.google.com" data-role="button" data-theme="e" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" class="ui-btn ui-btn-up-e ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Google</span></span></a><a href="http://www.blackberry.com" data-role="button" data-theme="c" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" class="ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Blackberry</span></span></a></div>
				
				
			</div>
			
			<div data-role="panel" data-position="right" data-display="push" id="rightpanel" data-theme="a" class="ui-panel ui-panel-position-right ui-panel-display-push ui-panel-closed ui-body-a ui-panel-animate">
				<div class="ui-panel-inner"><span id="actionItem">
					<span id="menuPressed"> </span>
					<span id="icon"> </span>
					<span id="actionTitle">Help</span>
				</span><a href="#toppanelpush" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-btn-up-b ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Open top push</span></span></a></div>
				
			</div>
			
			<div data-role="panel" data-position="top" data-display="overlay" id="toppaneloverlaylist" data-theme="a" class="ui-panel ui-panel-position-top ui-panel-display-overlay ui-panel-closed ui-body-a ui-panel-animate">
				<div class="ui-panel-inner"><ul data-role="listview" data-theme="c" class="ui-listview">
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Acura</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Audi</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">BMW</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Cadillac</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-last-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Ferrari</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
				</ul></div>
			</div><!-- /panel -->
			
			<div data-role="panel" data-position="bottom" data-display="overlay" id="bottompaneloverlay" data-theme="a" class="ui-panel ui-panel-position-bottom ui-panel-display-overlay ui-panel-closed ui-body-a ui-panel-animate">
				<div class="ui-panel-inner"><div data-role="navbar" class="ui-navbar ui-mini" role="navigation">
					<ul class="ui-grid-b">
						<li class="ui-block-a"><a href="http://www.twitter.com" data-theme="d" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-d ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Twitter</span></span></a></li>
						<li class="ui-block-b"><a href="http://www.jquerymobile.com" data-theme="a" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-a ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">JQM</span></span></a></li>
						<li class="ui-block-c"><a href="http://www.youtube.com" data-theme="b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-b ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Youtube</span></span></a></li>
					</ul>
				</div><br><div data-role="navbar" class="ui-navbar ui-mini" role="navigation">
					<ul class="ui-grid-b">
						<li class="ui-block-a"><a href="http://www.facebook.com" data-theme="b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-b ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Facebook</span></span></a></li>
						<li class="ui-block-b"><a href="http://www.google.com" data-theme="e" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-e ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Google</span></span></a></li>
						<li class="ui-block-c"><a href="http://www.blackberry.com" data-theme="c" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-inline="true" class="ui-btn ui-btn-up-c ui-btn-inline"><span class="ui-btn-inner"><span class="ui-btn-text">Blackberry</span></span></a></li>
					</ul>
				</div></div><!-- /navbar -->
				
				<!-- /navbar -->
				
			</div><!-- /panel -->
			
			<div data-role="panel" data-dark-modal="true" data-position="bottom" data-display="push" id="bottompanelpush" data-theme="a" class="ui-panel ui-panel-position-bottom ui-panel-display-push ui-panel-closed ui-body-a ui-panel-animate">
				<div class="ui-panel-inner"><ul data-role="listview" data-theme="c" class="ui-listview">
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Acura</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Audi</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">BMW</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Cadillac</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
					<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-last-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">Ferrari</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>
				</ul></div>
				
			</div><!-- /panel -->
 		

			
			<div data-role="header" data-position="fixed" class="ui-header ui-bar-a ui-panel-content-fixed-toolbar ui-panel-animate ui-panel-content-fixed-toolbar-closed ui-header-fixed slidedown" role="banner">
				<h1 class="ui-title" role="heading" aria-level="1">Main Menu</h1>
			</div><!-- /header --> 
	
			<div class="ui-panel-content-wrap ui-body-b ui-panel-animate ui-panel-content-wrap-closed"><div data-role="content" class="ui-content" role="main">	
			
				<a href="#toppanelpush" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-btn-up-b ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Open top push</span></span></a>
				<a href="#toppaneloverlay" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-b"><span class="ui-btn-inner"><span class="ui-btn-text">Open top overlay</span></span></a>
				<a href="#rightpanel" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-b"><span class="ui-btn-inner"><span class="ui-btn-text">Open right push</span></span></a>
				<a href="#leftpanel" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-b"><span class="ui-btn-inner"><span class="ui-btn-text">Open left overlay</span></span></a>
				<a href="#toppaneloverlaylist" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-b"><span class="ui-btn-inner"><span class="ui-btn-text">Open top listview</span></span></a>
				
				<a href="#bottompaneloverlay" data-role="button" data-theme="a" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Open bottom overlay</span></span></a>
				<a href="#bottompanelpush" data-role="button" data-theme="a" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Open bottom push</span></span></a>
				
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum fermentum purus nec fermentum. 
				Praesent diam nibh, tempus in laoreet vitae, pharetra quis orci. Praesent ultrices nisi eu mi lobortis 
				id vehicula arcu faucibus. Cras a diam sit amet elit commodo rhoncus eu condimentum risus. Maecenas 
				quis quam et nulla cursus ornare eu id sapien. Sed suscipit tincidunt neque nec porttitor. Donec adipiscing 
				justo nec dolor hendrerit vel consequat ipsum semper. Praesent eleifend sagittis dui non feugiat. Nulla tincidunt 
				dapibus felis, vel vestibulum ante vehicula sed. Sed fringilla, lectus vel pharetra blandit, metus 
				tellus ullamcorper dolor, vel vestibulum magna augue vel urna. Donec semper dolor eros, vitae ultricies lectus. 
				Fusce bibendum justo odio, eget vulputate nisl. Curabitur a nunc leo. Vestibulum ante ipsum primis in 
				faucibus orci luctus et ultrices posuere cubilia Curae;
				</p>
				
				<p>
				

				Phasellus eget enim justo, nec rhoncus odio. Vivamus sed orci in libero malesuada consequat. Integer ac 
				justo vestibulum leo molestie lobortis id at tellus. Duis ullamcorper volutpat lacus iaculis scelerisque. 
				Ut eget ultrices urna. In nec tincidunt lectus. Morbi sit amet nisi elit. Morbi pellentesque erat sed libero 
				consectetur at mollis dui ultrices. Integer est ipsum, mattis sed aliquam a, gravida sit amet nisi. Nulla justo 
				massa, ullamcorper pellentesque convallis quis, eleifend bibendum enim. Integer at lacus vel quam tempus posuere. 
				Cras sapien nisi, sagittis in blandit non, mattis a lectus. Maecenas luctus nibh nec est pulvinar ultricies 
				ut at est.
				</p>
				
				<div data-role="collapsible-set" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-inset="false" data-theme="d" class="ui-collapsible-set">
					<div data-role="collapsible" class="ui-collapsible ui-collapsible-collapsed ui-first-child"><h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-up-d" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="arrow-r" data-iconpos="left" data-theme="d"><span class="ui-btn-inner"><span class="ui-btn-text">Animals<span class="ui-collapsible-heading-status"> click to expand contents</span></span><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></span></a></h3><div class="ui-collapsible-content ui-collapsible-content-collapsed" aria-hidden="true">
						
						<ul data-role="listview" data-inset="false" class="ui-listview">
							<li class="ui-li ui-li-static ui-btn-up-b ui-first-child">Cats</li>
							<li class="ui-li ui-li-static ui-btn-up-b">Dogs</li>
							<li class="ui-li ui-li-static ui-btn-up-b">Lizards</li>
							<li class="ui-li ui-li-static ui-btn-up-b ui-last-child">Snakes</li>
						</ul>
					</div></div>
					<div data-role="collapsible" class="ui-collapsible ui-collapsible-collapsed"><h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-up-d ui-btn-icon-left" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="arrow-r" data-iconpos="left" data-theme="d"><span class="ui-btn-inner"><span class="ui-btn-text">Cars<span class="ui-collapsible-heading-status"> click to expand contents</span></span><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></span></a></h3><div class="ui-collapsible-content ui-collapsible-content-collapsed" aria-hidden="true">
						
						<ul data-role="listview" data-inset="false" class="ui-listview">
							<li class="ui-li ui-li-static ui-btn-up-b ui-first-child">Acura</li>
							<li class="ui-li ui-li-static ui-btn-up-b">Audi</li>
							<li class="ui-li ui-li-static ui-btn-up-b">BMW</li>
							<li class="ui-li ui-li-static ui-btn-up-b ui-last-child">Cadillac</li>
						</ul>
					</div></div>
					<div data-role="collapsible" class="ui-collapsible ui-collapsible-collapsed ui-last-child"><h3 class="ui-collapsible-heading ui-collapsible-heading-collapsed"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-btn-icon-left ui-btn-up-d" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="arrow-r" data-iconpos="left" data-theme="d"><span class="ui-btn-inner"><span class="ui-btn-text">Planets<span class="ui-collapsible-heading-status"> click to expand contents</span></span><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></span></a></h3><div class="ui-collapsible-content ui-collapsible-content-collapsed" aria-hidden="true">
						
						<ul data-role="listview" data-inset="false" class="ui-listview">
							<li class="ui-li ui-li-static ui-btn-up-b ui-first-child">Earth</li>
							<li class="ui-li ui-li-static ui-btn-up-b">Jupiter</li>
							<li class="ui-li ui-li-static ui-btn-up-b">Mars</li>
							<li class="ui-li ui-li-static ui-btn-up-b ui-last-child">Mercury</li>
						</ul>
					</div></div>
				</div>
				
				<form>
					<label for="textarea-1" class="ui-input-text">Textarea:</label>
					<textarea cols="40" rows="8" name="textarea-1" id="textarea-1" class="ui-input-text ui-body-b ui-corner-all ui-shadow-inset"></textarea>
				</form>
			
				<a href="#toppaneloverlay" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-btn-up-b ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Open top overlay</span></span></a>
				<a href="#toppanelpush" data-role="button" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="b" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-b"><span class="ui-btn-inner"><span class="ui-btn-text">Open top push</span></span></a>
				<a href="#bottompaneloverlay" data-role="button" data-theme="a" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Open bottom overlay</span></span></a>
				<a href="#bottompanelpush" data-role="button" data-theme="a" data-rel="panel" data-dismissible="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all"><span class="ui-btn-inner"><span class="ui-btn-text">Open bottom push</span></span></a>
			</div></div><!-- /content -->
			
			<div data-role="footer" data-position="fixed" class="ui-footer ui-bar-a ui-panel-content-fixed-toolbar ui-panel-animate ui-panel-content-fixed-toolbar-closed ui-footer-fixed slideup" role="contentinfo">
				<h1 class="ui-title" role="heading" aria-level="1">Page Footer</h1>
			</div>
		<div class="ui-panel-dismiss" data-panelid="toppanelpush"></div><div class="ui-panel-dismiss" data-panelid="toppaneloverlay"></div><div class="ui-panel-dismiss" data-panelid="leftpanel"></div><div class="ui-panel-dismiss" data-panelid="rightpanel"></div><div class="ui-panel-dismiss" data-panelid="toppaneloverlaylist"></div><div class="ui-panel-dismiss" data-panelid="bottompaneloverlay"></div><div class="ui-panel-dismiss" data-panelid="bottompanelpush"></div></div><!-- /page menu  -->

	

	<style>

	</style>


<div class="ui-loader ui-corner-all ui-body-a ui-loader-default"><span class="ui-icon ui-icon-loading"></span>
		<h1>loading</h1>
	</div>
	
	<script src="heard/js/lib/jquery.hoverIntent.js"></script>
	<script src="heard/js/lib/jquery.cluetip.js"></script>

	<script src="heard/js/lib/underscore-min.js"></script>
	<script src="heard/js/functions-test-new.js"></script>

	<script src="heard/js/ourteam/index-test-new.js"></script>
	<script>
	$(window).on('ajaxComplete', function() {
		setTimeout(function() {
		$(window).lazyLoadXT();
		}, 50);
	});
	</script>
</body>
</html>