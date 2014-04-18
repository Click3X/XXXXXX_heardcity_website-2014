<!-- ####################   Featured Work: CAROUSEL for FEATURED work    ############################# -->
<div class="container clearfix black-theme featured-work">
	<!-- <div class="noise"></div> -->
	<div class="section-title">
		<div>Featured Work</div>
	</div>

	<div class="">  <!-- wrap -->
	  <form id="projectForm" action="projects.php"  method="POST">
		<ul id="featured-slider" class="feat-work-slider royalSlider contentSlider rsDefault">
		
		<?php
			foreach ($projects as $key => $project) { 
				if($project['type'] == 'feature') { 
					$tablet = $project["images"]["tablet"];
					$mobile = $project["images"]["mobile"];
					$vidsrc = $project["vidsrc"];
					$vidmp4 = $project["mp4"];
					$title = $project['title'];

					$projectLink = formatLink( $title );

					if($tablet) { $thumbsrc = $tablet; } else { $thumbsrc = $mobile;}
					?>

				<li class="work-slide clearfix">
					<div class="img-holder">
						<a href="#" class="open-vid" data-vid="<?php echo $vidmp4 = $project["mp4"];?>" data-poster="<?php echo $thumbsrc[0]; ?>">
							<img src="<?php echo $thumbsrc[0]; ?>" alt="<?php echo $project['title']; ?>" class="rsImg">
							<!-- <img src="images/sprites/blank.gif" alt="<?php echo $project['title']; ?>" class="rsImg" data-src="<?php echo $thumbsrc[0]; ?>" > -->
						</a>
					<!-- 
						<div class="og-fullimg home-video">
							<video controls="" src="<?php // echo $vidmp4;?>"><source src="" type="video/mp4"></video>
						</div>
						 -->
					</div>

					<div class="grey-theme" class="rsABlock" data-delay="400" data-easing="easeOutSine">
						<!-- <div class="noise"></div> -->

						<div class="sec-wrap rsABlock">
							<div class="section-title">
								<label for="<?php echo $projectLink; ?>-input" class="project-video-link"><?php echo $title; ?></label>
								<input type="radio" name="selected_project" id="<?php echo $projectLink; ?>-input" tabindex="2" value="<?php echo $projectLink; ?>">
							</div>
							<ul class="credits">
								<?php if(isset($project['director'])) { ?><li><span class="bold">Directed by: </span><?php echo $project['director']; ?></li><?php } ?>
								<?php if(isset($project['mixer'])) { ?><li><span class="bold">Mixed by: </span><?php echo $project['mixer']; ?></li><?php } ?>
								<?php if(isset($project['agency'])) { ?><li><span class="bold">Agency: </span><?php echo $project['agency']; ?></li><?php } ?>
							</ul>
						</div>
					</div>
				</li>
		<?php   
				}
			}
		?>

		</ul>
		<input type="submit" value="Submit">
  	  </form>
	</div>
</div>
<!-- ####################   END: CAROUSEL - FEATURED work    ############################# -->