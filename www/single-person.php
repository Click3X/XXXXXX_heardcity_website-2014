<?php // Single Person
$single=true;
$single_person['name'] = 'Keith Reynaud';
$page=$single_person['name'];

include('php/header.php'); 
?>

<div class="clearfix container wrap single-person-container">

	<div class="items-holder wrap">	
		<!-- POP UP Team Member Module -->	
		<ul class="pop-up">
		<?php 
			// foreach ($members as $key => $member) { 

			?>
			<li>
				<div class="team-member clearfix">
					<div class="image">
						<img src="<?php echo $members[0]['silhouette'];?>" alt="Silhouette">
					</div>
					<ul class="member-text">
						<li class="misc-text">This belongs to</li>
						<li class="name"><?php echo $members[0]['name']; ?></li>
						<li class="bio"><?php echo $members[0]['bio']; ?></li>
						<li class="permalink"><a href="<?php echo $members[0]['permalink']; ?>">View everyones stuff</a></li>
					</ul>
				</div>
			</li>
			<?php
			 // } 
			 ?>
		</ul>

		<div class="items items-1" style="background-image:url('img/team-members/stuff-1.png');"></div>
	</div>

	<?php include('php/sidebar.php'); ?>

</div>

<?php include('php/footer.php'); ?>