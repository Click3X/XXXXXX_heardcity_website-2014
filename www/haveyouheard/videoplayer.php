<?php

	$vidurl = "http://have-you-heard.co/videos/BUD_RETURNOFKING_30.mp4";
	$posturl = str_replace(".mp4", ".jpg", $vidurl);

	if( isset($_GET['f']) ){
		$vidurl = "http://have-you-heard.co/videos/".$_GET['f'];
		$posturl = str_replace(".mp4", ".jpg", $vidurl);
	}
?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" style="overflow-y: hidden;"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>Have You Heard?</title>
	<meta name="description" content="Have You Heard?">
	<meta name="author" content="Matthew Wilber">
	<meta name="google-site-verification" content="UF6chmGt4khLOuoo1UJPKlZQhNqI2A_piOZs3tQU08Q" />
	<meta property="og:title" content="Have You Heard?"/>
    <meta property="og:type" content="company"/>
    <meta property="og:url" content="http://have-you-heard.co"/>
    <meta property="og:image" content="http://have-you-heard.co/apple-touch-icon.png"/>
    <meta property="og:site_name" content="Have You Heard"/>
    <meta property="fb:admins" content="631337813"/>
    <meta property="og:description"
          content="Get the latest insider information about the new audio company from the Have You Heard site."/>

	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="stylesheet" href="css/style.css">

	<script src="js/libs/modernizr-2.0.6.min.js"></script>
	
	<link href="http://vjs.zencdn.net/c/video-js.css" rel="stylesheet">
	<script src="http://vjs.zencdn.net/c/video.js"></script>
</head>
<body style="height:300px; width:400px; overflow: hidden;">
	<video id="my_video_1" class="video-js vjs-default-skin" controls 
	  preload="auto" width="400" height="300" poster="<?php echo $posturl ?>"
	  data-setup="{}">
	  <source src="<?php echo $vidurl ?>" type='video/mp4'>
	</video>
</body>
</html>