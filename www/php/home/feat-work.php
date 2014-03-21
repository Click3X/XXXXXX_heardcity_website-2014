<!-- ####################   Featured Work: CAROUSEL for FEATURED work    ############################# -->
<div class="container clearfix black-theme featured-work">
	<div class="noise"></div>
	<div class="section-title">
		<div>Featured Work</div>
	</div>

	<div class="">  <!-- wrap -->
		<ul id="featured-slider" class="feat-work-slider owl-carousel">
		
		<?php
			foreach ($projects as $key => $project) { 
				if($project['type'] == 'feature') { 
					$tablet = $project["images"]["tablet"];
					$mobile = $project["images"]["mobile"];
					if($tablet) { $thumbsrc = $tablet; } else { $thumbsrc = $mobile;}
					?>

				<li class="work-slide clearfix">
					<div class="img-holder">
						<img src="<?php echo $thumbsrc[0]; ?>" alt="<?php echo $project['title']; ?>">
					</div>

					<div class="grey-theme">
						<div class="noise"></div>

						<div class="sec-wrap">
							<div class="section-title">
								<div><?php echo $project['title']; ?></div>
							</div>
							<ul class="credits">
								<li><span class="bold">Directed by: </span><?php echo $project['director']; ?></li>
								<li><span class="bold">Mixed by: </span><?php echo $project['mixer']; ?></li>
							</ul>
						</div>
					</div>
				</li>
		<?php   
				}
			}
		?>

		</ul>
	</div>
</div>
<!-- ####################   END: CAROUSEL - FEATURED work    ############################# -->