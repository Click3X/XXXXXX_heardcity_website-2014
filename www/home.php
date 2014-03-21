<?php
error_reporting(E_ALL);
// HOME
$page='Home';

include('php/header.php');

// Include Projects Data
include('php/project-grid.php');

?>

<?php include('php/home/black-text.php'); ?>


    <!-- Image Spread Module-->    
    <div id="image-spread-1" class="container clearfix image-spread">
    	<?php foreach ($image_spreads as $key => $image_spread) {
    		if($image_spread["class"] == "half-image") {
				echo '<div class="image-holder"><div id="'.$image_spread['id'].'" class="image-spread '.$image_spread["class"].'"></div></div>'; //style="background-image:url('.$image_spread["image"].');"    			
    		}
    		
    	} ?>
    </div>


<?php include('php/home/feat-work.php'); ?>


    <!-- Image Spread Module-->    
    <div class="container clearfix image-spread">
    	<?php foreach ($image_spreads as $key => $image_spread) {
    		if($image_spread["class"] == "full-image") {
				echo '<div id="'.$image_spread['id'].'" class="image-spread '.$image_spread["class"].'"></div>';
    		}
    		
    	} ?>
    </div>


<?php include('php/home/meet-team.php'); ?>



    <!-- Dog & Window deco pic -->
	<div class="container clearfix hide-over">
		<div class="img-holder dog-para-holder">
			<div class="dog-para">
				<div id="dog-windows" class="dog-windows"></div>
			</div>
		</div>
    </div>


<?php include('php/home/grey-text.php'); ?>

   	
	<!-- Image Spread II -->
    <div class="container clearfix image-spread-2">
    	<?php foreach ($image_spreads2 as $key => $image_spread2) { 
    		echo '<div class="para-holder"><div id="'.$image_spread2['id'].'" class="'.$image_spread2['class'].'"></div></div>';
    	} ?>
    </div>


<?php include('php/footer.php'); ?>