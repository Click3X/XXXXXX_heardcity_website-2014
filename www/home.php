<?php 
include('php/config.php'); 
include('php/functions.php'); 
include('php/project-grid.php'); 
?>
<!DOCTYPE html>
<html>
    <head>
    	<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Heard City | Home</title>

        <link rel="shortcut icon" href="favicon.ico">

        <link href="stylesheets/vendor/royal/royalslider.css" media="screen, projection" rel="stylesheet" type="text/css">
        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

        <!--[if IE]>
          <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->
        
        <script>
            // TEST FOR MOBILE DEVICE / TABLET
            var device;
            if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {
                device = 'mobile';
            } else {
                device = 'desk';
            }

            <?php echo 'var base="'.$BASE.'";'; ?>
        </script>
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="js/site-loader.js"></script>
        
    </head>

    <body class="home">
      <div id="preload-mask" style="visibility:hidden">
        <!-- BODY INNER WILL BE HIDDEN TILL PRE LOADING IS DONE -->
        <div class="body-inner clearfix">

            <!-- MARQUEE -->
            <div id="black-logo" class="logo"></div>    
            <div id="home-slider-holder" class="container clearfix">
                <ul id="marquee-slider" class="royalSlider contentSlider rsDefault js-show">
                    <li id="sun-light" class="marquee-slide"></li>
                    <li id="sun-rays" class="marquee-slide"></li>
                    <li id="sun-chairs" class="marquee-slide"></li>
                </ul>
            </div>

            <?php include('php/main-nav.php'); ?>

            <!-- BLACK TEXT 1 -->
            <?php include('php/home/black-text.php'); ?>


            <!-- // GUTIAR-NORD JEAN-JACKET -->
            <div id="image-spread-1" class="container clearfix image-spread">
                <div class="image-holder half">
                    <div id="guitar-nord" class="image-spread half-image bg-img"></div>
                </div>
                <div class="image-holder half">
                    <div id="jean-jacket" class="image-spread half-image bg-img"></div>
                </div>
            </div>


            <!-- FEATURED WORK -->
            <?php include('php/home/feat-work.php'); ?>


            <!-- WINDOWS -->
            <div class="container clearfix image-spread">
                <div class="image-holder">
                    <!-- <div id="dude-on-phone" class="image-spread full-image bg-img"></div> -->
                    <div id="windows" class="image-spread full-image bg-img"></div>
                </div>
            </div>


            <!-- MEET TEAM -->
            <?php include('php/home/meet-team.php'); ?>

            <!-- DOG PHONE -->
            <div class="container clearfix image-spread">
                <div class="image-holder">
                    <div id="dog-windows" class="image-spread full-image bg-img"></div>
                </div>
            </div>


            <!--GREY TEXT -->
            <?php include('php/home/grey-text.php'); ?>


            <!-- // STAIRS - GIRL -->
            <div id="image-spread-2" class="container clearfix image-spread">
                <div class="image-holder half2">
                    <div id="stairs" class="image-spread half bg-img"></div>
                </div>
                <div class="image-holder half2">
                    <div id="girl-large" class="image-spread half bg-img"></div>
                </div>
            </div>


            <!-- FOOTER -->
            <?php include('php/footer.php'); ?>

            <script src="js/lib/jquery.unveil.min.js"></script>
            <script src="js/lib/jquery.flexnav.min.js"></script>
            <script src="js/lib/jquery.easing-1.3.js"></script>
            <script src="js/lib/jquery.royalslider.min.js"></script>
            <script src="js/home/setup.js"></script>

        </div>
      </div> <!-- /#PRELOAD-MASK -->
    </body>
</html>