<?php
error_reporting(E_ALL);
// HOME
$page='Home';

include('php/header.php');

// Include Projects Data
include('php/project-grid.php');

?>

<!-- ====================================  start BLACK TEXT carousel    ==================================== -->
	<div id="first-container" class="container clearfix black-theme">
		<div class="noise"></div>
		<div> <!-- class="wrap" -->
			<ul id="black-text-slider" class="text-slider owl-carousel black-grad">

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



    <!-- Image Spread Module-->    
    <div id="image-spread-1" class="container clearfix image-spread">
    	<?php foreach ($image_spreads as $key => $image_spread) {
    		if($image_spread["class"] == "half-image") {
				echo '<div class="image-holder"><div id="'.$image_spread['id'].'" class="image-spread '.$image_spread["class"].'"></div></div>'; //style="background-image:url('.$image_spread["image"].');"    			
    		}
    		
    	} ?>
    </div>




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
						// echo '<pre>'.print_r($project).'</pre>';
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
							<div class="section-title">
								<div><?php echo $project['title']; ?></div>
							</div>
							<ul class="credits">
								<!-- <div class="noise"></div> -->
								<li><span class="bold">Directed by: </span><?php echo $project['director']; ?></li>
								<li><span class="bold">Mixed by: </span><?php echo $project['mixer']; ?></li>
							</ul>
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



    <!-- Image Spread Module-->    
    <div class="container clearfix image-spread">
    	<?php foreach ($image_spreads as $key => $image_spread) {
    		if($image_spread["class"] == "full-image") {
				echo '<div id="'.$image_spread['id'].'" class="image-spread '.$image_spread["class"].'"></div>'; //style="background-image:url('.$image_spread["image"].');"    			
    		}
    		
    	} ?>
    </div>


<!-- ((((((((((((((((((((((((((((((((   TEAM MEMBER CAROUSEL  ))))))))))))))))))))))))))))))))   -->
	<div class="container clearfix team-member-module grey-theme">
		<div class="noise"></div>
		<div class="section-title">
			<div>Meet Our Team</div>
		</div>
		<div> <!-- class="wrap" -->
			<ul id="team-slider" class="team-members owl-carousel"> 

				<?php foreach ($members as $key => $member) { ?>
				<li id="<?php echo formatLink($member['name']); ?>">
					<div class="team-member clearfix">
						<div class="image">
							<img src="<?php echo placeHolder($member['image']);?>" alt="<?php echo $member['name'];?>">
						</div>
						<ul class="member-text">
							<li class="misc-text">This belongs to</li>
							<li class="name"><?php echo $member['name']; ?></li>
							<li class="bio"><?php echo firstBit($member['bio']); ?></li>
							<li class="permalink"><a href="<?php echo $member['permalink']; ?>">View more of <?php echo $member['sex']; ?> stuff</a></li>
						</ul>
					</div>
				</li>
				<?php } ?>

			</ul>
		</div>
    </div>
<!-- ((((((((((((((((((((((((((((((((   END team member   ))))))))))))))))))))))))))))))))   -->


    <!-- Dog & Window deco pic -->
	<div class="container clearfix hide-over">
		<div class="img-holder dog-para-holder">
			<div class="dog-para">
				<div id="dog-windows" class="dog-windows"></div>   <!-- style="background-image:url('img/build/home/dog-windows.jpg');" -->
			</div>
		</div>
    </div>



<!-- //////////////////////   GREY TEXT carousel    ////////////////////// -->
	 <div class="container clearfix grey-theme virtual-photo">
	 	<div class="noise"></div>
	 	<div class="wrap">
	 		<ul id="grey-text-slider" class="owl-carousel">
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
<!-- //////////////////////  END GREY   ////////////////////// -->



   	
	<!-- Image Spread II -->
    <div class="container clearfix image-spread-2">
    	<?php foreach ($image_spreads2 as $key => $image_spread2) { 
    		echo '<div class="para-holder"><div id="'.$image_spread2['id'].'" class="'.$image_spread2['class'].' half-pad"></div></div>';
    	} ?>
    </div>


<?php include('php/footer.php'); ?>