<?php // HEADER PHP
include('config.php');
include('functions.php'); 
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?php echo $siteName . " | ". $page;?></title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=0"/>

        <!-- NORMALIZE -->
        <link rel="stylesheet" href="stylesheets/normalize.css">

        <!-- LOAD BOOTSTRAP STYLES -->
        <link href="stylesheets/vendor/bootstrap/bootstrap.css" rel="stylesheet">
        <link href="stylesheets/vendor/bootstrap/bootstrap-responsive.css" rel="stylesheet">

        <!-- LOAD ROYALSLIDER STYLES -->
<!--    <link href="stylesheets/vendor/royal/royalslider.css" rel="stylesheet">
        <link href="stylesheets/vendor/royal/rs-default.css" rel="stylesheet">
 -->
 
        <!-- LOAD CLUE TIP STYLES -->
        <link href="stylesheets/vendor/cluetip/jquery.cluetip.css" rel="stylesheet" />


        <!-- SASS STYLES - after Bootstrap! -->
        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />


        <!-- LOAD QTIP STYLES -->
        <!-- <link rel="stylesheet" href="qtip/jquery.qtip.min.css"> -->


        <!--[if IE]>
            <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->

        <?php 
            if($page == 'Dev') {
                include('php/parallax-styles.php');
            }

            if(isset($page) && ($page == 'Home' || $page == 'Dev')) { 
                // Include Responsive BG script for smaller images
                include('responsive-styles.php'); 
            }
            // Decide what requireJs script to load based on current page
            include('header-script-loader.php'); 
        ?>
        
        <script data-main="<?php echo $script; ?>" src="js/lib/require.js"></script>
        
        <?php  // If the Team Member Form has been submitted, echo the variable between script tags for JS
            if(isset($_POST['selected_member']) && ($_POST['selected_member'] != '')) { 
                $selected_member = $_POST['selected_member']; 
                echo "<script>var selectedMember = '$selected_member';</script>";
            } else {
                  echo "<script>var selectedMember = '';</script>";
            } 
        ?>

    </head>

    <body class="<?php echo formatLink($page); ?>">

    <?php 
        if($page == 'Home') { include('php/home/home-slider.php'); } 
        if($page != 'Dev') { newBootMenu($sitePages, $page, 'cl-effect-21'); }
    ?>    