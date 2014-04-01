<?php // GREY TEXT ?>
<div class="container clearfix grey-theme virtual-photo">
 	<div class="noise"></div>
 	<div class=""><!--  wrap -->
 		<ul id="grey-text-slider" class="royalSlider contentSlider rsDefault">
 		<?php
 			
 			foreach ($text_carousel_grey as $headline => $text) { ?>

 			<li class="just-text">
 				<div class="just-text-child">
					<div class="text-headline"><?php echo $headline; ?></div>
					<p class="serif"><?php echo $text; ?></p>
				</div>
			</li>

			<?php } ?>
		</ul>
	</div>
</div>