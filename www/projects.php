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

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->
        
        <?php
            if(isset($_POST['selected_project'])) { 
                $selected_project = $_POST['selected_project'];
                echo '<script>var selectedProject ="#'.$selected_project.'";</script>';
            } else {
                echo '<script>var selectedProject ="";</script>';
            }
        ?>  

        <script data-main="js/projects" src="js/lib/require.js"></script>
    
    </head>

    <body class="projects">
<!-- PRELOADER -->
         <div id="ajax-loader">
            <div class="ajax-spinner">
                <img src="images/logo/logo-white.png" width="150px" height="194px">
                <img src="images/sprites/ajaxSpinner.gif" id="spin-wheel">
            </div>
        </div>

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
                    <!-- <a id="all-btn" href="#" title="All">&plus;</a> -->
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
                        $projectJSON = array();
                        include('php/project-grid.php');

                        foreach ($projects as $key => $value) { 
                            array_push($projectJSON, $value);
                            $thumbsrc = $value["images"]["mobile"][0];
                            $cleanTitle = $value["title"];
                            $cleanTitle = preg_replace('/\s+/', '', $cleanTitle); 
                            $cleanTitle = str_replace("'", "", $cleanTitle);
                            $cleanTitle = strtolower( $cleanTitle );

                            ?>

                            <li class="og-vid-holder clearfix <?php echo formatLink($value["type"]);?>">
                            
                            <?php 
                            echo '<a id="'.$cleanTitle.'" href="'.$dir.'" data-title="'.$value["title"].'" data-director="'.$value["director"].'" data-mixer="'.$value["mixer"].'" data-poster="'.$thumbsrc.'" data-mp4="'.$value["mp4"].'">';
                                echo '<div class="vid-thumb-holder img-link clearfix">';
                                    echo '<div class="project-thumb-bg" style="background-image:url('.$thumbsrc.'); background-size:cover;"></div>';
                                echo '</div>'; ?>

                                    <div class="vid-title-holder clearfix">
                                        <div class="title">
                                            <div>
                                            <?php 
                                                echo '<div class="vid-thumb-holder text-link clearfix">';
                                                echo $value["title"];
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

        
        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>

    </body>

</html>
