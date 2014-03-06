<?php // Sidebar php ?>

	<div id="side-bar-nav" class="side-bar-nav">
		<div class="head-icon"></div>
		<div id="push"><a href="#" class="arrow-toggle"></a></div>

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