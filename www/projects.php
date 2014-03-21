<?php // Projects
$page='Projects';
include('php/header.php'); 
?>

<!-- BUTTON HOLDER -->
<div class="clearfix features-commercial">
	<div class="button-holder">
		<div class="clearfix">
			<a id="features-btn" href="#" title="Features">Features</a>
		</div>
	</div>

    <div class="button-holder middle-button-holder">
        <div class="clearfix">
            <a id="all-btn" href="#" title="All">+</a>
        </div>
    </div>

	<div class="button-holder">
		<div class="clearfix">
			<a id="commercials-btn" href="#" title="Commercials">Commercials</a>
		</div>
	</div>	
</div>

<div class="container clearfix"> 
    <div class="main">
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
                    echo '<a id="'.$cleanTitle.'" href="'.$dir.'" data-title="'.$value["title"].'" data-director="'.$value["director"].'" data-mixer="'.$value["mixer"].'" data-mp4="'.$value["mp4"].'">';
                        echo '<div class="vid-thumb-holder img-link clearfix">';
                            // Project Thumb as bg image on div
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

<?php include('php/footer.php'); ?>