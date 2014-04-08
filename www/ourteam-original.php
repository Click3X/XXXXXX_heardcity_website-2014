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
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

        <title>Heard City | Our Team</title>

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
                // console.log('this is device' + device);
                // $body.addClass('mobile');
            } else {
                device = 'desk';
                // console.log('this is device' + device);
            }
        </script>

            <?php  // If the Team Member Form has been submitted, echo the variable between script tags for JS
           
            if(isset($_POST['selected_member']) && ($_POST['selected_member'] != '')) { 
                    $selected_member = $_POST['selected_member']; 
                    echo "<script>var selectedMember = '$selected_member';</script>"; } 
                else { echo "<script>var selectedMember = '';</script>"; } 
            ?>

        <script data-main="js/ourteam" src="js/lib/require.js"></script>
    
    </head>

    <body class="ourteam one-page">
        
        <!-- PRELOADER -->
<!--          <div id="ajax-loader">
            <div class="ajax-spinner">
                <img src="images/logo/logo-white.png" width="150px" height="194px">
                <img src="images/sprites/ajaxSpinner.gif" id="spin-wheel">
            </div>
        </div> -->

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
        

        <div id="graph" class="clearfix">
            <div id="item-list-holder" class="team-member-items"></div>
        </div>

        <!-- SUB NAV -->
        <?php include('php/sub-nav.php'); ?>

        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>
        
    </body>

</html>
