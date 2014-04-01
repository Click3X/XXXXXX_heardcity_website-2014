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

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->

        <script data-main="js/app" src="js/lib/require.js"></script>
    
    </head>

    <body class="home white-bg">
<div id="men">

</div>



<div id="par">

  <div class="par-container marq">
    <div id="sun-light" class="lax2 sun-light"></div>
    <div id="black-logo" class="lax2 bg-logo"></div>
  </div>


      <?php include('php/home/black-text.php'); ?>


  <div class="par-container nord-jacket">
    <div id="guitar-nord" class="lax1 g-nord"></div>
    <div id="jean-jacket"  class="lax2 j-jacket"></div>
  </div>


      <?php include('php/home/feat-work.php'); ?>


  <div class="par-container man-holder">
    <div id="dude-on-phone" class="lax1 man-phone"></div>
  </div>


      <?php include('php/home/meet-team.php'); ?>


  <div class="par-container dog-holder">
    <div class="lax1 dog"></div>
  </div>


      <?php include('php/home/grey-text.php'); ?>


  <div class="par-container stairs-girl">
    <div class="lax1 stairs"></div>
    <div class="lax1 girl"></div>
  </div>


</div>




<?php include('php/footer.php'); ?>
        
    </body>
</html>