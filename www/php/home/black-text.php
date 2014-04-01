<!-- ====================================  start BLACK TEXT carousel    ==================================== -->
<div id="first-container" class="container clearfix black-theme">
	<div class="noise"></div>
	<div> <!-- class="wrap" -->
		<ul id="black-text-slider" class="text-slider black-grad royalSlider contentSlider rsDefault">

			<?php
 			foreach ($text_carousel_black as $headline) { ?>
 			<li class="">
				<div class="inner-slide">
					<div class="slide-text">
						<p><?php echo $headline; ?></p>
					</div>
				</div>
			</li>
			<?php } ?>

		</ul>
	</div>
</div>
<!-- ====================================  END BLACK  ==================================== -->