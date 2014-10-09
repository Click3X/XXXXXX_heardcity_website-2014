<?php 
include('php/config.php'); 
include('php/functions.php'); 
include('php/project-grid.php'); 



?>
<!DOCTYPE html>
<html>
    <head>
    	<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

        <title>Heard City | Our Team</title>
        <base href="<?php echo $BASE; ?>ourteam.php">

        <meta name="description" content="Heard City">
        <meta name="author" content="Charles Davis">
        <meta name="google-site-verification" content="UF6chmGt4khLOuoo1UJPKlZQhNqI2A_piOZs3tQU08Q" />
        <meta property="og:title" content="Heard City"/>
        <meta property="og:type" content="company"/>
        <meta property="og:url" content="http://heardcity.com"/>
        <meta property="og:image" content="http://heardcity.com/favicon.png"/>
        <meta property="og:site_name" content="Heard City"/>
        <meta property="fb:admins" content="631337813"/>
        <meta property="og:description"
              content="Get the latest insider information about the new audio company from the Have You Heard site."/>

        
        <link rel="shortcut icon" href="favicon.ico">

        <link href="<?php echo $BASE; ?>stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="<?php echo $BASE; ?>stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

        <style>
            .page-wrap .all-itmes-holder .all-items { 
                position:relative; width: 100%; max-width: 1024px !important; margin:0 auto !important; padding-bottom:100% !important;
            }

            .js-single-member #member-bio {
                    display: block;
                }

            #member-bio > div > ul > li.title {
                font-size: .750em;
                color: #333333;
                letter-spacing: .15em;
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

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="js/site-loader.js"></script>
    
    </head>

    <body class="ourteam one-page">
        <h1>BILLY HAYES AWESOME DEV PAGE</h1>
        <div id="page-wrap" class="page-wrap">
            <?php echo json_encode($members); ?>
        </div>
    </body>

</html>
