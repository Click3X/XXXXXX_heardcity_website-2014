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
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

        <title>Heard City | Our Team</title>

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

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
        </script>
            <?php  // If the Team Member Form has been submitted, echo the variable between script tags for JS
            if(isset($_POST['selected_member']) && ($_POST['selected_member'] != '')) { 
                    $selected_member = $_POST['selected_member']; 
                    echo "<script>var selectedMember = '$selected_member';</script>"; } 
                else { echo "<script>var selectedMember = '';</script>"; } 
            ?>

        <script data-main="js/deeplink" src="js/lib/require.js"></script>
    
    </head>

    <body id="deeplink" class="ourteam deeplink one-page">
        <div id="page-wrap" class="page-wrap">
            
            <?php include('php/main-nav.php'); ?>

            <div id="main-content" class="main-content">




            </div>
        	 
            <!-- SUB NAV -->
            <?php include('php/sub-nav.php'); ?>
            <!-- FOOTER -->
            <?php include('php/footer.php'); ?>


        </div>
    </body>

</html>
