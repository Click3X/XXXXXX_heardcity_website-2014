<?php // Sidebar php ?>

	<div id="side-bar-nav" class="side-bar-nav">
		<div class="head-icon"></div>
		<div id="push"><a href="#" class="arrow-toggle"></a></div>

		<ul id="members-list" class="members-list">
			<li>Our Team</li>
			<?php 
				foreach ($members as $key => $member) {
					echo '<li><a href="#">'.$member['name'].'</a></li>';
				}
			?>
		</ul>
	</div>

	<a id="click-close" class="click-close hidden"></a>