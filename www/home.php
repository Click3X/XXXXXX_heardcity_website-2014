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

        <link href="stylesheets/vendor/royal/royalslider.css" media="screen, projection" rel="stylesheet" type="text/css">
    <!--     <link href="stylesheets/vendor/royal/rs-default.css" media="screen, projection" rel="stylesheet" type="text/css"> -->
        
        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->

        <script data-main="js/app" src="js/lib/require.js"></script>
    
    </head>

    <body class="home">
        <div class="body-inner clearfix">
             <!-- PRELOADER -->
             <div id="ajax-loader">
                <div class="ajax-spinner">
                    <img src="images/logo/logo-white.svg" width="150px">
                    <img src="images/sprites/ajaxSpinner.gif" id="spin-wheel">
                </div>
            </div>
        	

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
            <?php include('php/home/black-text-new.php'); ?>



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


            <!-- DUDE ON PHONE -->
            <div class="container clearfix image-spread">
                <div class="image-holder">
                    <div id="dude-on-phone" class="image-spread full-image bg-img"></div>
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

        </div>
    </body>
</html>
