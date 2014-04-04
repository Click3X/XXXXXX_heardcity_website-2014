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
        <title>Heard City | Our Team</title>
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-touch-fullscreen" content="yes">

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
    <body class="ourteam">
        <?php include('php/main-nav.php'); ?>

        <div id="content" class="snap-content">
            
            <div class="content-container">

                <div id="toolbar">
                    <a href="#" id="open-left"></a>
                    <a href="#" class="toggler" id="or"></a>
                </div>

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


                <!-- // MEMBER ITEMS -->
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





            </div>
            <!-- FOOTER -->
            <?php include('php/footer.php'); ?>

        </div>

        <?php // include('php/footer.php'); ?>

        <div class="snap-drawers">
            <div class="snap-drawer snap-drawer-right">
                <div>
                    <?php include('php/sub-nav-new.php'); ?>
                </div>
            </div>
        </div>



        <!-- SCRIPTS -->
         <script src="js-new/lib/jquery.flexnav.min.js"></script>
         <script src="js-new/lib/jquery.unveil.min.js"></script>
         <script src="js-new/lib/snap/snap.min.js"></script>
         <script src="js-new/lib/snap/demo.js"></script>
        
         <script type="text/javascript">
         $(document).ready(function() {
            var snapper = new Snap({
                element: document.getElementById('content'),
                disable: 'left',
                minPosition: -266,
                maxPosition: 266
            });

            addEvent(document.getElementById('or'), 'click', function(){
                snapper.open('right');
            });


            var device;
                // CHECK FOR MOBILE
             if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                    device = 'mobile';
                    $body.addClass('mobile');
             } else {
                    device = 'desk';
             }

             // VARS
             var $body = $("body"),
                $mainMenu = $("#page-fixed"),
                $subNav = $("#member-fixed"),
                $img = $("img"),
                $clickClose = $('#click-close'),
                $sidebarLinks = $('.sidebar-link'),
                $clueTipPermalink = $('.item-list .permalink'),
                $memberBioPermalink = $('#member-bio .permalink > a');

             // INITIALIZE MENU
             $mainMenu.flexNav({
              'hoverIntent': false,
              'hover':false,
              'buttonSelector': '#page-button'
             });

             // SUB MENU
             $subNav.flexNav({
              'hoverIntent': false,
              'hover':false,
              'buttonSelector': '#member-button'
             });
             
             // TOGGLE SIDE BAR
             $sidebarLinks.click( function() {
                    var clicked = $(this).data('person');
                    console.log('I have been clicked!' + clicked); console.dir(clicked);
               });
        });
        </script>

         <!-- <script src="js-new/ourteam/index.js"></script> -->
        
    </body>

</html>
