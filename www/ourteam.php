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
    <body>
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
                        <li><a href="dragElement.html">Drag Element</a></li>
                        <li><a href="rightDisabled.html">Right Disabled</a></li>
                        <li><a href="hyperextend.html">Hyperextension Disabled</a></li>
                        <li><a href="skinnyThreshold.html">Skinny Threshold</a></li>
                        <li><a href="toggles.html">Toggles</a></li>
                        <li><a href="classNames.html">Class Names</a></li>
                        <li><a href="expand.html">Expanding</a></li>
                        <li><a href="settings.html">Settings</a></li>
                        <li><a href="ratchet/template.html">Ratchet</a></li>
                    </ul>
                    <div>
                        <p>Toggles are easy to create. Snap.js gives you the state of the pane and allows you to make decisions simply.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non erat ac leo ultrices blandit sed vel risus. Pellentesque facilisis blandit auctor. Maecenas vestibulum vulputate tincidunt. Mauris nec quam libero. Fusce eget ligula non leo varius condimentum quis ac elit. Donec id urna ut neque semper ultrices. Proin ut suscipit felis. Nullam neque felis, ullamcorper scelerisque volutpat vel, vehicula vehicula neque. Aenean scelerisque elit ac erat sagittis ullamcorper.</p>
                    </div>
                </div>
            </div>
            <div class="snap-drawer snap-drawer-right"></div>
        </div>
        
        <div id="content" class="snap-content">
            <div id="toolbar">
                <a href="#" id="open-left"></a>
                <h1>Toggles</h1>
            </div>
            <div class="toggler" id="ol">Open Left</div>
            <div class="toggler" id="or">Open Right</div>
        </div>


        <!-- SUB NAV -->
        <?php // include('php/sub-nav.php'); ?>

        <!-- FOOTER -->
        <?php // include('php/footer.php'); ?>

        <!-- SCRIPTS -->
         <script src="js-new/lib/jquery.flexnav.min.js"></script>
         <script src="js-new/lib/jquery.unveil.min.js"></script>
         <script src="js-new/lib/snap/snap.min.js"></script>
         <script src="js-new/lib/snap/demo.js"></script>
        
         <script type="text/javascript">
            var snapper = new Snap({
                element: document.getElementById('content')
            });
            addEvent(document.getElementById('ol'), 'click', function(){
                snapper.open('left');
            });

            addEvent(document.getElementById('or'), 'click', function(){
                snapper.open('right');
            });
            
        </script>

         <!-- <script src="js-new/ourteam/index.js"></script> -->
        
    </body>

</html>
