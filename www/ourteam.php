<?php // Our Team
$page='Our Team';
include('php/header.php');

// if no member selected, show the first Bio
// NEED A BETTER ALTERNATIVE to this
if(!isset($_POST['selected_member'])) { 
	$de_name = $defaults['name'];
	$de_bio = $defaults['bio'];
	$de_permalink = '#';
} else {
	$de_name = ''; $de_bio = ''; $de_permalink = '#';
}

include('php/build-members-array.php');

?>

<div id="member-bio" class="container clearfix">
	<div class="team-member clearfix">
		<ul class="member-text">
			<li class="misc-text">This belongs to</li>
			<li class="name"><?php echo $de_name; ?></li>
			<li class="bio"><p><?php echo $de_bio; ?></p></li>
			<li class="permalink"><a href="<?php echo $de_permalink; ?>" class="all-members" style="display: none;">View everyones stuff</a></li>
		</ul>
	</div>
</div>

<div id="graph" class="container clearfix">
	<div id="item-list-holder" class="team-member-items">
		<!-- CONTENT TO BE APPENDED HERE -->
	</div>
</div>

<?php include('php/sidebar.php'); ?>
<?php include('php/footer.php'); ?>