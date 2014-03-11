<?php // Our Team
$page='Our Team';
include('php/header.php'); 
?>



<div id="member-bio" class="container clearfix">
	<div class="team-member clearfix">
		<div class="image">
			<img src="<?php echo $members[0]['silo'];?>" alt="Silhouette">
		</div>
		<ul class="member-text">
			<li class="misc-text">This belongs to</li>
			<li class="name"><?php echo $members[0]['name']; ?></li>
			<li class="bio"><p><?php echo $members[0]['bio']; ?></p></li>
			<li class="permalink"><a href="<?php echo $members[0]['permalink']; ?>" class="all-members">View everyones stuff</a></li>
		</ul>
	</div>
</div>



<div id="graph" class="container clearfix">

<?php 
	// Array for JSON
	$jsonMembers = array();

	echo '<div id="item-list-holder" class="team-member-items">';
		echo '<ul class="item-list">';

		foreach ($members as $key => $member) {
			$member_name = $member['name'];
			$member_bio = $member['bio'];
			$member_silo = $member['silo'];
			$member_class = formatLink($member_name);
			$sex = $member["sex"];
			$possesive = explode(' ', $member_name);
			$possesive = $possesive[0]."'s";
			$items = $member['items'];

			// Array for JSON
			$jsonMembers[$key]['name'] = $member_name;
			$jsonMembers[$key]['bio'] = $member_bio;
			$jsonMembers[$key]['sex'] = $sex;
			$jsonMembers[$key]['items'] = $items;
			$jsonMembers[$key]['silo'] = $member_silo;
			$jsonMembers[$key]['member_class'] = $member_class;
				
			foreach ($items as $key => $item) {
                    if($item['image']) {
                        $image = $item['image'];
                        $info = pathinfo($image);
                        // helper($info);
                        $usemap = $info['filename'];
                    }
                    if($item['bio']) {
                        $bio = $item['bio'];
                    }
                    if(isset($item['map'])) {
                        $map = $item['map'];
                    }
                    if(isset($item['coords'])) {
                        $coords = $item['coords'];
                    } else { 
                        $coords = ''; 
                    }
                    if($item['name']) {
                        $name = $item['name'];
                        $item_class= formatLink($name);
                    }

                // include('php/item-holder.php');

			}
		}
		echo '</ul>';		
	echo '</div>';
	?>

</div>

	<?php include('php/sidebar.php'); ?>

</div>

        

<?php include('php/footer.php'); ?>