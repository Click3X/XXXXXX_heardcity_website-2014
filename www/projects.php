<?php 
include('php/config.php'); 
include('php/functions.php'); 
include('php/project-grid.php'); 
?>
<!DOCTYPE html>
<html>
    <head>
    	<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Heard City | Projects</title>
        <base href="<?php echo $BASE; ?>projects.php">

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

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->
        
        <script>
            // TEST FOR MOBILE DEVICE / TABLET
            var device;
            if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {
                device = 'mobile';
            } else {
                device = 'desk';
            }

            <?php echo 'var base="'.$BASE.'";'; ?>
        </script>

        <?php  // If the SELECTED PROJECT Form has been submitted, echo the variable between script tags for JS
                if(isset($_POST['selected_project']) && ($_POST['selected_project'] != '')) { 
                    $selected_project = $_POST['selected_project'];
                    echo "<script>var selectedProject = '$selected_project';</script>";
                } elseif(isset($_REQUEST['selected_project'])) {
                    $selected_project = $_REQUEST['selected_project'];
                    echo "<script>var selectedProject = '$selected_project';</script>";
                } else { 
                    echo "<script>var selectedProject = '';</script>";
                } 
            ?>

        <script>
          if(window.location.hash) {
              var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
              console.log(hash);
              var selectedProject = hash;
              // hash found
          } else {
              // No hash found
          }
        </script>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="js/site-loader.js"></script>

        <script src="js/lib/modernizr.js"></script>
    </head>

    <body class="projects">

        <?php include('php/main-nav.php');?>

                <!-- BUTTON HOLDER -->
        <div class="clearfix features-commercial">
            <div class="button-holder">
                <div class="clearfix">
                    <a id="features-btn" href="#" title="Features">Features</a>
                </div>
            </div>

            <div class="button-holder middle-button-holder">
                <div class="clearfix">
                    <a id="all-btn" href="#" title="All">All</a>
                </div>
            </div>

            <div class="button-holder">
                <div class="clearfix">
                    <a id="commercials-btn" href="#" title="Commercials">Commercials</a>
                </div>
            </div>  
        </div>

        <div class=""> 
            <div class="main clearfix container">
                <ul id="og-grid" class="og-grid">
                    <?php 
                        // Set variable to catch Video Details
                        // $projectJSON = array();
                        include('php/project-grid.php');

                        $order = array("Paintball", "Conditions Box", "Train", "Puffy Tail", "Remix", "Spring is Weird: First Impression", "Revenge", "RE2PECT", "Kumiko The Treasure Hunter", "Made in America", "Asad", "Blue Ruin", "Invention Donkey", "Friends Furever", "Fables", "I Will What I Want", "Emily's Oz", "Heaven Knows What");
                        $projects_sorted = $projects;

                        usort($projects_sorted, function ($a, $b) use ($order) {
                            $pos_a = array_search($a['title'], $order);
                            $pos_b = array_search($b['title'], $order);
                            return $pos_a - $pos_b;
                        });

                        foreach ($projects_sorted as $key => $value) { 
                            array_push($projectJSON, $value);
                            $thumbsrc = $value["images"]["mobile"][0];
                            $cleanTitle = $value["title"];
                            $cleanTitle = preg_replace('/\s+/', '', $cleanTitle); 
                            $cleanTitle = str_replace("'", "", $cleanTitle);
                            $cleanTitle = strtolower( $cleanTitle );

                            ?>



                            <li class="og-vid-holder clearfix <?php echo formatLink($value["type"]);?>">
                            
                            <?php 
                            echo '<a id="'.$cleanTitle.'" class="no-delay" href="#'.$cleanTitle.'" data-dir="'.$dir.'" '; 
                            if(isset($value["client"])) {echo 'data-client="'.$value["client"].'"';} echo 'data-title="'.$value["title"].'"'; 
                            if(isset($value["director"])) {echo 'data-director="'.$value["director"].'"';} 
                            if(isset($value["mixer"])) { echo 'data-mixer="'.$value["mixer"].'"';} 
                            if(isset($value["agency"])) {echo 'data-agency="'.$value["agency"].'"';} echo 'data-poster="'.$BASE.$thumbsrc.'" data-mp4="'.$BASE.$value["mp4"].'">';
                                echo '<div class="vid-thumb-holder img-link clearfix">';
                                    echo '<div class="project-thumb-bg" style="background-image:url('.$BASE . $thumbsrc.'); background-size:cover;"></div>';
                                echo '</div>'; ?>

                                    <div class="vid-title-holder clearfix">
                                        <div class="title">
                                            <div>
                                            <?php 
                                                echo '<div class="vid-thumb-holder text-link clearfix">';
                                                // echo $value["title"];
                                                echo $value["client"];
                                                echo '</div>'; ?>
                                            </div>
                                        </div>
                                    </div>
                    <?php echo '</a>'; ?>
                            </li>
                    <?php } ?>
                </ul>
            </div>
        </div><!-- /container -->

        <pre>
    </pre>
  
        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>
        
        <!--<script src="js/lib/jquery.flexnav.min.js"></script>
        <script src="js/projects/grid.js"></script>
        <script src="js/projects/feat-button.js"></script>
        <script src="js/projects/projects-setup.js"></script>-->
        
        <script src="js/build/projects-production.min.js"></script>

        <script>

            var _gaq=[['_setAccount','UA-33922112-1'],['_trackPageview']];

            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];

            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';

            s.parentNode.insertBefore(g,s)}(document,'script'));

        </script>
        
    </body>

</html>
