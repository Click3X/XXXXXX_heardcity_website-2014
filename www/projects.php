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

                        $thumbs = $value["thumb"];
                        foreach ($thumbs as $thumb) {
                            $last = substr($thumb, -7, 3);
                            if($last != 'two') { 
                                $thumbsrc = $thumb;
                            }
                        }

                        ?>

                        <li class="og-vid-holder clearfix <?php echo formatLink($value["type"]);?>">
                            <?php echo '<a href="'.$dir.'" data-title="'.$value["title"].'" data-director="'.$value["director"].'" data-mixer="'.$value["mixer"].'" data-mp4="'.$value["mp4"].'" class="vid-thumb-holder img-link clearfix">'; ?>
                                <?php echo '<img src="'.$thumbsrc.'" alt="'.$value["title"].'">'; ?>
                            </a>
                            <div class="vid-title-holder clearfix">
                                <div class="title">
                                    <div>
                                        <?php echo '<a href="'.$dir.'" data-title="'.$value["title"].'" data-director="'.$value["director"].'" data-mixer="'.$value["mixer"].'" data-mp4="'.$value["mp4"].'" class="vid-thumb-holder text-link clearfix">'; ?>
                                            <?php echo $value["title"];?>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                <?php   } ?>
                
            </ul>
        </div>
    </div><!-- /container -->

<?php include('php/footer.php'); ?>