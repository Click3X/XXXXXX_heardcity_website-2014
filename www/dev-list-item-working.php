<?php // Our Team
$page='Our Team';
include('php/header.php'); 
?>

<!-- Home Page Slider -->
<div id="item" class="container clearfix" style="color:#000; background-color:#fff">

	<?php 

		foreach ($members as $key => $member) {
			if( count($member['items']) > 1 ) {
				$member_name = $member['name'];
				$member_class = formatLink($member_name);

				echo '<div class="team-member-items '.$member_class.'">';
					echo '<h1 style="text-align:center; font-size:2.5em; padding:1em 0;">'.$member_name.'</h1>';
					echo '<ul class="item-list">';
					
					$items = $member['items'];
					foreach ($items as $key => $item) {
						if($item['image']) {$image = $item['image'];}
						if($item['name']) {
							$name = $item['name'];
							$item_class= formatLink($name);
						}
						if($item['bio']) {$bio = $item['bio'];}

						echo '<li class="item-holder '.$item_class.'">';
							echo '<img src="'.$image.'" alt="'.$name.'">';
							echo '<div class="item-hover">';
								echo '<div class="item-hover-inner">';
									echo '<h2>'.$name.'</h2>';
									echo '<p class="serif">'.$bio.'</p>';
								echo '</div>';
							echo '</div>';
						echo '</li>';
					}
					echo '</ul>';
				echo '</div>';
			}
		}
	?>

	<?php include('php/sidebar.php'); ?>

</div>

        

<?php include('php/footer.php'); ?>