<!DOCTYPE html> 
<html lang="en"> 
 
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	
		<title>Demo: A fluid and responsive, lazy-loaded header image (minus the rendering blips).</title>

		<!-- [if gte IE 7]><!-->
		<link rel="stylesheet" media="screen, projection" href="/stylesheets/screen.css" />
		<!-- <![endif]--> 
		
		<!-- enable HTML5 elements in IE7+8 -->
		<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
			

        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

		<script type="text/javascript" src="//use.typekit.net/tku5nnn.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	</head>
	
	<body>



		<header class="group" role="banner">

			<div class="panorama"><!-- <<< the container for the image we intend to lazy load -->
				
				<img class="photo lazy" src="lazy.png" data-original="railway.jpg" alt="Railway line" /><!-- <<< the image we're lazy loading -->

				<div class="prelude group">

					<div class="wrap group">
						<h1>Lazy Header</h1>
					</div>				

				</div><!-- /.prelude -->	

												
			</div><!-- /.panorama -->				

		</header>


		<div class="wrap group">

			<div id="main" role="main" class="group">
			
				<div class="mod-centre">
				
					<section class="overture mod group">
						<p>Demo: A fluid and responsive, lazy-loaded image (minus the rendering blips).</p>
					</section>


					<section class="mod group">
						<p>Head over to <a href="#"><strong>the original post</strong></a> to see how this works.</p>
					</section>


					<section class="call-to-action group">
						<a href="https://bitbucket.org/thisisthat/responsive-image-lazy-loading" class="btn" target="_blank">Download the source from BitBucket &rarr;</a>
					</section>		
				</div><!-- /.mod-centre -->


			</div><!-- /#main -->

        </div><!-- /.wrap -->


<!-- scripts -->
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
     <script src="/javascripts/fluid-img.js"></script>
     <script src="/javascripts/jquery.lazyload.min.js"></script>

     <script src="/javascripts/application.js"></script>


     <script type="text/javascript">
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-5384973-17']);
          _gaq.push(['_trackPageview']);
          
          (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
     </script>

<!-- /scripts -->
          
     </body>

</html>




