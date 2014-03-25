<?php // Sidebar php ?>

	<div id="side-bar-nav" class="side-bar-nav mobile-hide-till-load">
		<div id="push">
			<!-- <div class="head-icon"></div> TOOK OUT SILOHUETTE as requested-->
			<a href="#" class="arrow-toggle"></a>
			<div id="sidebar-name" class="sidebar-name"><?php echo $de_name; ?></div>
		</div>

		<ul id="members-list" class="members-list">
			<li><a href="#" id="all-members" class="all-members">Our Team</a></li>
			<?php 
				foreach ($members as $key => $member) {
					$member_name = $member['name'];
					$member_class = formatLink($member_name);
					echo '<li><a href="#" data-person="'.$member_class.'" class="sidebar-link">'.$member_name .'</a></li>';
				}
			?>
		</ul>
	</div>

	<a id="click-close" class="click-close hidden"></a>