<?php // MEET TEAM ?>
<div class="container clearfix team-member-module grey-theme">

	<div class="noise"></div>
	<div class="section-title">
		<div>Meet Our Team</div>
	</div>
	
	<div> 
	  <form id="myForm" action="ourteam.php"  method="GET">
		<ul id="team-slider" class="team-members royalSlider contentSlider rsDefault"> 

		<?php 
			foreach ($members as $key => $member) { 
				$member_items = $member['items'];
				$member_class = formatLink($member['name']);
				
				$item_count = count($member_items);
				$item_count = $item_count-1;

				$random = rand(0, $item_count);

				$rand_item = $member_items[$random];
				$item_name = $rand_item['name'];
				$item_image = $rand_item['image']; ?>

			<li id="<?php echo formatLink($member['name']); ?>">
				<div class="team-member clearfix">
					
					<div class="image">
						<!-- <img src="<?php // echo $item_image;?>" alt="<?php// echo $member['name'];?>" class="rsImg"> -->
						<img src="images/sprites/blank.gif" alt="<?php echo $member['name']; ?>" class="rsImg" data-src="<?php echo $item_image; ?>" >
					</div>

					<ul class="member-text">
						<li class="misc-text">This belongs to</li>
						<li class="name"><?php echo $member['name']; ?></li>
						<!-- <li class="bio"><?php // echo firstBit($member['bio']); ?></li> -->
						<li class="permalink">								
							<!-- <a href="<?php echo $member['permalink']; ?>" class="member-permalink">View more of <?php echo $member['sex']; ?> stuff</a> -->
							<label for="<?php echo $member_class; ?>-input" class="member-permalink">View more of <?php echo $member['sex']; ?> stuff</label>
							<input type="radio" name="selected_member" id="<?php echo $member_class; ?>-input" tabindex="2" value="<?php echo $member_class; ?>">
						</li>
					</ul>
				</div>
			</li>

		<?php } ?>

		</ul>
		<input type="submit" value="Submit">
  	  </form>
	</div>

</div>