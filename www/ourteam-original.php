<?php // Our Team
$page='Our Team';
include('php/header.php'); 
?>

<div class="clearfix container our-team-container">

	<div class="items-holder wrap">	
		
		<div class="items items-1" style="background-image:url('img/ourteam/stuff-1.jpg');">
			<a class="item-link wallet" href="single-person.php"></a>
			<?php include('php/pop-up.php'); ?>
		</div>

		<!-- POP UP HOVER for each TEAM MEMBER -->
		<?php
			foreach ($list_items as $key => $list_item) {
				echo '<div class="items items-'.$key.'" style="background-image:url('.$list_item['image'].');"></div>';
			} 
		?>
	</div>

	<?php include('php/sidebar.php'); ?>

</div>

<?php include('php/footer.php'); ?>