<?php // ImAGE SPREAD two ?>
<div class="container clearfix dude-on-phone-new">
	<?php foreach ($image_spreads as $key => $image_spread) {
		if($image_spread["class"] == "full-image") {
			echo '<div class="parallax-holder"><div id="'.$image_spread['id'].'" class="image-spread '.$image_spread["class"].'"></div></div>';
		}
		
	} ?>
</div>