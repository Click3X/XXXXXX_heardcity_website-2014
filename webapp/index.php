<?php 
include('php/config.php'); 
include('php/functions.php'); 
include('php/project-grid.php'); 

if(!isset($_POST['selected_member'])) { 
    $de_name = $defaults['name'];
    $de_bio = $defaults['bio'];
    $de_permalink = '#';
} else {
    $de_name = ''; $de_bio = ''; $de_permalink = '#';
}

?>
<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>HEARDCITY</title>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<!--   <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/items.css" media="screen" type="text/css" />
  <link rel="stylesheet" href="css/items-width.css" media="screen" type="text/css" />
  <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" /> -->


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
        } else {
            device = 'desk';
        }
    </script>

</head>

<body>
  <div id="page-wrap" class="container">

    <?php include('php/main-nav.php'); ?>

    <div id="main-content" class="main-content">

      <section id="members" class="members">
        <div id="heardcity-bio" class="module module-member" style="display: block;">
          <div class="member-info">
            <h3 class="member-title">Heard City</h3>
            <p class="member-director">People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You'll see what passions we have and what kind of things we do in our free time. It's an honest way to see who we are as a collective.</p>
          </div>
        </div>
      </section>

      <div id="all-items-holder" class="all-items-holder"></div>

    </div>

    <div id="sub-nav" class="sub-nav"></div>
    
  </div>

  <script src='http://codepen.io/assets/libs/fullpage/jquery.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js'></script>

  <script src="js/lib/jquery.flexnav.min.js"></script>


  <script src="js/lib/jquery.browser.js"></script>
  <script src="js/lib/jquery.ba-hashchange.min.js"></script>
  <script src="js/lib/jquery.onscreen.js"></script>

  <script src="js/lib/jquery.cluetip.js"></script>
  <script src="js/lib/jquery.hoverIntent.js"></script>


  <script src="js/setup.js"></script>
  <script src="js/factory/member.js"></script>
  <script src="js/controller/hash-change.js"></script>


  <script src="js/controller/hover.js"></script>



</body>

</html>