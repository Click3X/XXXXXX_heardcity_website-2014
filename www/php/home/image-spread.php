 <!-- Image Spread Module-->    
<div id="guitar-jacket" class="container clearfix guitar-jacket">
	<?php foreach ($image_spreads as $key => $image_spread) {
		if($image_spread["class"] == "half-image") {
			echo '<div class="parallax-holder">
					<div id="'.$image_spread['id'].'" class="vert-parallax '.$image_spread["class"].'"></div>
				 </div>';
		}
		
	} ?>
</div>