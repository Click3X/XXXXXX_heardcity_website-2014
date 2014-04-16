<?php // SUB NAV / SIDE BAR ?>

<div id="member-header" class="member-header clearfix side-bar-closed">
    <nav>
        <ul id="member-fixed" data-breakpoint="600" class="flexnav with-js opacity sm-screen flexnav-hide one-page">
            <li><a href="#" id="all-members" class="ui-btn ui-btn-inline ui-btn-up-b all-members" data-person="heardcity">Our Team</a></li>
            <?php 
                foreach ($members as $key => $member) {
                    $member_name = $member['name'];
                    $member_class = formatLink($member_name);
                    $name = formatLink($member_name);
                    echo '<li><a href="#'.$name.'" data-person="'.$member_class.'" class="ui-btn ui-btn-inline ui-btn-up-b sidebar-link">'.$member_name .'</a></li>';
                }
            ?>
        </ul>
    </nav>
</div>