<?php // HOME

$page='Home';

include('php/header.php');

include('php/project-grid.php');

?>


	<!-- Text Slider BLACK -->
	<div class="container clearfix black-theme">
		<div class="noise"></div>
		<div class="wrap">
			<ul class="text-slider">
				<li>
					<div class="inner-slide">
						<div class="slide-text">
							Welcome to Heard City.
						</div>
					</div>
				</li>
			</ul>
			<div class="arrow black-arrow-left"></div>
			<div class="arrow black-arrow-right"></div>
		</div>
    </div>


    <!-- Image Spread Module-->    
    <div class="container clearfix image-spread">
    	<?php foreach ($image_spreads as $key => $image_spread) {
    		echo '<div id="'.$image_spread['id'].'" class="image-spread '.$image_spread["class"].'" style="background-image:url('.$image_spread["image"].');"></div>';
    	} ?>
    </div>


    <!--Team Member Module Wrap-->
	<div class="container clearfix team-member-module grey-theme">
		<div class="noise"></div>
		<div class="section-title">
			<div>Meet Our Team</div>
		</div>
		<div class="wrap">
			<ul class="team-members">
				<!--Team Member Module -->
				<?php foreach ($members as $key => $member) { ?>
				<li>
					<div class="team-member clearfix">
						<div class="image">
							<img src="<?php echo $member['image'];?>" alt="<?php echo $member['name'];?>">
						</div>
						<ul class="member-text">
							<li class="misc-text">This belongs to</li>
							<li class="name"><?php echo $member['name']; ?></li>
							<li class="bio"><?php echo $member['bio']; ?></li>
							<li class="permalink"><a href="<?php echo $member['permalink']; ?>">View more of his stuff</a></li>
						</ul>
					</div>
				</li>
				<?php } ?>
			</ul>
			<div class="arrow grey-arrow-left"></div>
			<div class="arrow grey-arrow-right"></div>
		</div>
    </div>


    <!--Featured Work Module Wrap -->
	<div class="container clearfix black-theme featured-work">
		<div class="noise"></div>
		<div class="section-title">
			<div>Featured Work</div>
		</div>
		<div class="wrap">
			<ul class="feat-work-slider">
				<!--Team Member Module -->
				<?php foreach ($featured_works as $key => $featured_work) { ?>
					<li class="work-slide">
						<div class="img-holder">
							<img src="<?php echo $featured_work['image']; ?>" alt="polaroid-canoe">
						</div>
					</li>
				<?php } ?>
			</ul>
			<div class="arrow black-arrow-left"></div>
			<div class="arrow black-arrow-right"></div>
		</div>
    </div>

    <!--Virtual Photo Module -->
	<div class="container clearfix virtual-photo">

		<div class="grey-theme">
			<div class="noise"></div>
			<div class="section-title">
				<div>John Butterill's Virtual Photo</div>
			</div>
			<ul class="credits">
				<li><span class="bold">Directed by: </span>Lorem Ipsum</li>
				<li><span class="bold">Mixed by: </span>Lorem Ipsum</li>
			</ul>
		</div>

		<div class="img-holder">
			<!-- <img id="dog-windows" src="img/home/dog-windows.jpg" alt="dog-window"> -->
			<div id="dog-windows" class="dog-windows" style="background-image:url('img/home/dog-windows.jpg');"></div>
		</div>

    </div>


	 <!-- Virtual Photo text slider module -->
	 <div class="container clearfix grey-theme virtual-photo">
	 	<div class="noise"></div>
	 	<div class="wrap">
	 		<ul class="just-text">
	 			<li>
					<div>Walls but no Boundaries</div>
					<p class="serif">We work as a team, not as individuals, sharing spaces and equipment in an inspired flow supporting the highest production capabilities.</p>
    			</li>
    		</ul>
			<div class="arrow grey-arrow-left"></div>
			<div class="arrow grey-arrow-right"></div>
    	</div>
    </div>

   	
	<!-- Image Spread II -->
    <div class="container clearfix">
    	<div class="half-image" style="background-image:url('img/home/stairs.jpg'); background-repeat:no-repeat; background-size:contain; padding-bottom:50%;"></div>
    	<div id="girl-wood" class="half-image" style="background-image:url('img/home/girl-large.jpg'); background-repeat:no-repeat; background-size:159%; background-position: 86% 50%; padding-bottom:50%;"></div>
    </div>


<?php include('php/footer.php'); ?>