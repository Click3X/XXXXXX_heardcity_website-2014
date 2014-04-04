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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"> -->

        <title>Heard City | Our Team</title>
        <link rel="icon" href="favicon.ico">

        <link href="stylesheets/vendor/snap/snap.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/vendor/snap/assets/demo.css" media="screen, projection" rel="stylesheet" type="text/css" />
        
        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->  

            <?php  // If the Team Member Form has been submitted, echo the variable between script tags for JS
           
            if(isset($_POST['selected_member']) && ($_POST['selected_member'] != '')) { 
                    $selected_member = $_POST['selected_member']; 
                    echo "<script>var selectedMember = '$selected_member';</script>"; } 
                else { echo "<script>var selectedMember = '';</script>"; } 
            ?>

       <!-- <script data-main="js/ourteam" src="js/lib/require.js"></script> -->
       <script src="js-new/lib/modernizr.js"></script>
       <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    
    </head>

    <body class="ourteam one-page">
        
        <!-- PRELOADER -->
        <!--  <div id="ajax-loader">
            <div class="ajax-spinner">
                <img src="images/logo/logo-white.png" width="150px" height="194px">
                <img src="images/sprites/ajaxSpinner.gif" id="spin-wheel">
            </div>
        </div> -->

        <?php include('php/main-nav.php'); ?>
    	 

        <!-- <div id="member-bio" class="container clearfix">
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
        </div> -->

        


        
        <div id="content" class="snap-content">
            <div id="toolbar">
                <a href="#" id="open-left"></a>
                <h1>Toggles</h1>
            </div>
            <div class="toggler" id="ol">Open Left</div>
            <div class="toggler" id="or">Open Right</div>
        </div>




        <div class="snap-drawers">
            <div class="snap-drawer snap-drawer-left">
                <div>
                    <h3>Snap.js</h3>
                    <div class="demo-social">
                        <a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-text="Snap.js - A Library for creating beautiful mobile shelfs in Javascript" data-url="http://jakiestfu.github.com/Snap.js/" data-count="none" data-via="jakiestfu">Tweet</a>
                        <a href="https://twitter.com/jakiestfu" class="twitter-follow-button" data-show-count="false" data-lang="en">Follow @jakiestfu</a>
                        <iframe src="http://ghbtns.com/github-btn.html?user=jakiestfu&amp;repo=Snap.js&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="120" height="20"></iframe>
                    </div>
                    <h4>Demos</h4>
                    <ul>
                        <li><a href="default.html">Default</a></li>
                        <li><a href="noDrag.html">No Drag</a></li>
                        <li><a href="skinnyThreshold.html">Skinny Threshold</a></li>
                        <li><a href="toggles.html">Toggles</a></li>
                    </ul>
                    <div>
                        <p>Toggles are easy to create. Snap.js gives you the state of the pane and allows you to make decisions simply.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non erat ac leo ultrices blandit sed vel risus. Pellentesque facilisis blandit auctor. Maecenas vestibulum vulputate tincidunt. Mauris nec quam libero. Fusce eget ligula non leo varius condimentum quis ac elit. Donec id urna ut neque semper ultrices. Proin ut suscipit felis. Nullam neque felis, ullamcorper scelerisque volutpat vel, vehicula vehicula neque. Aenean scelerisque elit ac erat sagittis ullamcorper.</p>
                    </div>
                </div>
            </div>
            <div class="snap-drawer snap-drawer-right"></div>
        </div>



        <!-- SUB NAV -->
        <?php // include('php/sub-nav.php'); ?>

        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>

        <!-- SCRIPTS -->
         <script src="js-new/lib/jquery.flexnav.min.js"></script>
         <script src="js-new/lib/jquery.unveil.min.js"></script>
         <script src="js-new/lib/snap/snap.min.js"></script>
         <script src="js-new/lib/snap/demo.js"></script>
         <script src="js-new/ourteam/index.js"></script>
        
    </body>

</html>
