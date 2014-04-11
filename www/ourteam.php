<?php 
include('php/config.php'); 
include('php/functions.php'); 
include('php/project-grid.php'); 

if(!isset($_GET['selected_member'])) { 
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
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

        <title>Heard City | Our Team</title>
        <base href="<?php echo $BASE; ?>ourteam.php">
        
        <link rel="shortcut icon" href="favicon.ico">

        <link href="<?php echo $BASE; ?>stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="<?php echo $BASE; ?>stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->  
        <style>

            .page-wrap .all-itmes-holder .all-items { 
                position:relative; width: 100%; max-width: 1024px !important; margin:0 auto !important; padding-bottom:100% !important;
            }

            .js-single-member #member-bio {
                    display: block;
                }
            
        </style>
        <script>
            // TEST FOR MOBILE DEVICE / TABLET
            var device;
            if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                device = 'mobile';
            } else {
                device = 'desk';
            }

            <?php echo 'var base="'.$BASE.'";'; ?>
        </script>
       
            <?php  // If the Team Member Form has been submitted, echo the variable between script tags for JS
                if(isset($_GET['selected_member']) && ($_GET['selected_member'] != '')) { 
                    $selected_member = $_GET['selected_member'];
                    echo "<script>var selectedMember = '$selected_member';</script>";
                } elseif(isset($_REQUEST['selected_member'])) {
                    $selected_member = $_REQUEST['selected_member'];
                    echo "<script>var selectedMember = '$selected_member';</script>";
                } else { 
                    echo "<script>var selectedMember = '';</script>";
                } 
            ?>

         <script>
          if(window.location.hash) {
              var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
              console.log(hash);
              var selectedMember = hash;
              // hash found
          } else {
              // No hash found
          }
        </script>

    
    </head>

    <body class="ourteam one-page">
        <!-- PRELOADER -->
        <div id="ajax-loader">
            <div class="ajax-spinner">
                <img src="images/logo/logo-white.png" width="150px" height="194px">
                <img src="images/sprites/ajaxSpinner.gif" id="spin-wheel">
            </div>
        </div>
        
        <div id="page-wrap" class="page-wrap">
            
            <?php include('php/main-nav.php'); ?>

            <div id="member-bio" class="container clearfix">
                <div class="team-member clearfix">
                    <ul class="member-text">
                        <li class="misc-text">This belongs to</li>
                        <li class="name"><?php // echo $de_name; ?></li>
                        <li class="bio"><p><?php // echo $de_bio; ?></p></li>
                        <li class="permalink"><a href="<?php echo $de_permalink; ?>" class="all-members" style="display: none;">View everyones stuff</a></li>
                    </ul>
                </div>
            </div>

            <div id="members" class="members"></div>

            <div id="all-items-holder" class="all-items-holder clearfix">
            </div>

            <div id="members" class="members"></div>
        	 
            <!-- SUB NAV -->
            <?php include('php/sub-nav.php'); ?>
        </div>
        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="js-webapp/lib/underscore-min.js"></script>

        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.flexnav.min.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.unveil.min.js"></script>
        
        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.cluetip.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.hoverIntent.js"></script> 

        <script src="<?php echo $BASE; ?>js-webapp/object.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/object-events.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/setup.js"></script>

        
    </body>

</html>
