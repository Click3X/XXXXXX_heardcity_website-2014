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
        <link rel="icon" href="favicon.ico">
        
        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

<<<<<<< HEAD
=======
        <style>
                .item-list img {
                      opacity: 0;
                      transition: opacity .3s ease-in;
                    } 
        </style>

>>>>>>> parent of 8aac456... Our team page working much smoother
          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->  

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
        <!--  <div id="ajax-loader">
            <div class="ajax-spinner">
                <img src="images/logo/logo-white.svg" width="150px" height="194px">
                <img src="images/sprites/ajaxSpinner.gif" id="spin-wheel">
            </div>
        </div> -->

        <?php include('php/main-nav.php'); ?>
    	 
<!--    <div id="black-logo" class="logo"></div>	 -->
<!--     	<div id="loader">
            <div id="spinner" class="loading"></div>
        </div> -->

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
            <div id="item-list-holder" class="team-member-items">
                <ul class="item-list">

                    <?php 
                        $blankGif = 'images/sprites/blank.gif';

                        foreach ($members as $key => $member) { 
                            $name = $member['name'];
                            $bio = $member['bio'];
                            $sex = $member['sex'];
                            $items = $member['items'];
                            $member_class = formatLink($member['name']);

                            foreach ($items as $key => $item) {
                                $iName = $item['name'];
                                $itemName = formatLink($iName);
                                $image = $item['image'];
                                $itemBio = $item['bio'];
                                $itemClass = 'item-holder '.$itemName .' ' .$member_class;
                                $title =  "|" . "|" . $name . "'s" . "|" . $iName . "|" . $itemBio . "|" . "<label for='".$member_class."-".$itemName."' class='permalink'>> View " . $sex . " stuff</label><input type='radio' name='".$member_class."' id='".$member_class."-".$itemName."' value='".$member_class."'>";

                                $usemap = explode('.', $image);
                                $usemap = explode( '/', $usemap[0]);
                                $usemap = $usemap[1];
                                $usemap = formatLink($usemap);
                                if(isset($item['coords'])) {
                                    $coords = $item['coords'];
                                    echo '<li class="'.$itemClass.'">
                                            <img src="'.$image.'" alt="'.$iName.'">
                                            <map id="'.$member_class.'" name="'.$member_class.'" class="map-link" data-person="'.$member_class.'">
                                                <area href="#" shape="poly" coords="'.$coords.'" alt="'.$itemName.'" data-person="'.$member_class.'" data-item="'.$itemName.'" title="'.$title.'" class="cluetip-div">
                                            </map>
                                        </li>';
                                } else {

                                   echo '<li class="'.$itemClass.'">
                                            <a href="#" data-person="'.$member_class.'" data-item="'.$itemName.'" title="'.$title.'" class="cluetip-div">
                                                <img src="'.$image.'" alt="'.$iName.'">
                                            </a>
                                        </li>';
                                }
                                
                            }

                        } ?>


                </ul>
            </div>
        </div>

        <?php include('php/sub-nav.php'); ?>
        <!-- <input id="out" type="button" value="Outline" style="position:fixed; right:5px; width:80px; bottom:100px; z-index:1000"/> -->

        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>
        
    </body>

</html>
