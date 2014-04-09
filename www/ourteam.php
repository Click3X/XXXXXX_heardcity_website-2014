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

// if(isset($_REQUEST['selected_member'])) {

// }


?>
<!DOCTYPE html>
<html>
    <head>
    	<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

        <title>Heard City | Our Team</title>

        <link href="<?php echo $BASE; ?>stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="<?php echo $BASE; ?>stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->  
        <style>
            #deeplink {color:black;}
            #holder .item-holder {
                position: static;
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

       <!-- <script data-main="js/deeplink" src="js-webapp/lib/require.js"></script> -->
    
    </head>

    <body id="deeplink" class="ourteam deeplink one-page">
        <div id="page-wrap" class="page-wrap">
            
            <?php include('php/main-nav.php'); ?>

            <div id="member-bio" class="container clearfix">
                <div class="team-member clearfix">
                    <ul class="member-text">
                        <li class="misc-text">This belongs to</li>
                        <li class="name"><?php echo $de_name; ?></li>
                        <li class="bio"><p><?php echo $de_bio; ?></p></li>
                        <li class="permalink"><a href="<?php echo $de_permalink; ?>" class="all-members" style="display: none;">View everyones stuff</a></li>
                    </ul>
                </div>
            </div>

            <div id="members" class="members"></div>

            <div id="all-items-holder"></div>
        	 
            <!-- SUB NAV -->
            <?php include('php/sub-nav.php'); ?>
        </div>
        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>

        <script src='http://codepen.io/assets/libs/fullpage/jquery.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js'></script>

        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.flexnav.min.js"></script>


        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.browser.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.ba-hashchange.min.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.onscreen.js"></script>

        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.unveil.min.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.cluetip.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/lib/jquery.hoverIntent.js"></script>


        <script src="<?php echo $BASE; ?>js-webapp/setup.js"></script>
        <script src="<?php echo $BASE; ?>js-webapp/factory/member.js"></script>
    <!--    <script src="<?php echo $BASE; ?>js-webapp/controller/hash-change.js"></script>-->


        <script src="<?php echo $BASE; ?>js-webapp/controller/hover.js"></script>
        <script scr="<?php echo $BASE; ?>js-webapp/last-js.js"></script>
        
    </body>

</html>
