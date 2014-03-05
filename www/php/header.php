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
        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

        <!--[if IE]>
            <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->

        <?php 
            if(isset($page) && ($page == 'Home')) { 
                // Include Responsive BG script for smaller images
                include('responsive-styles.php'); 
            }
            // Decide what requireJs script to load based on current page
            include('header-script-loader.php'); 
            ?>
        
        <script data-main="<?php echo $script; ?>" src="js/lib/require.js"></script>
               
    </head>
    <?php if(isset($single)) {$page = 'single';} ?>
    <body class="<?php echo formatLink($page); ?>">

        <?php 
        if($page == 'Home') { ?>
            <!-- Home Page Slider -->
            <div id="home-slider-holder" class="container clearfix">
                <div id="logo-bg" class="logo-bg"></div> <!-- logo-invisible -->
                <ul id="home-slider" class="home-slider owl-carousel">
                    <?php 
                        foreach ($marquee as $marq_img) {
                            $id = formatId($marq_img);
                            echo '<li id="'.$id.'" class="slide"></li>';
                        }
                    ?>
                    
                </ul>
            </div>

        <?php } ?>
        
        <?php // printMenu($sitePages, $page); 
            newMenu($sitePages, $page, 'cl-effect-21');
        ?>