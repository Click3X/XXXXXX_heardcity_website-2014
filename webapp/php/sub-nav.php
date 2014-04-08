<?php // SUB NAV / SIDE BAR ?>
<div id="member-header" class="member-header clearfix side-bar-closed">
    <div id="member-button" class="menu-button one-page active">
        <!-- <div>☰</div> -->
        <div>&nbsp;</div>
        <span id="member-title" class="page-title all-members">Heard City</span>
    </div>
    <nav>
        <ul id="member-fixed" data-breakpoint="600" class="flexnav with-js opacity sm-screen flexnav-hide one-page">
            <li><a href="#" id="all-members" class="all-members">Our Team</a></li>
            <?php 
                foreach ($members as $key => $member) {
                    $member_name = $member['name'];
                    $member_class = formatLink($member_name);
                    $name = formatLink($member_name);
                    echo '<li><a href="#'.$name.'" data-person="'.$member_class.'" class="sidebar-link">'.$member_name .'</a></li>';
                }
            ?>
        </ul>
    </nav>
</div>
<a id="click-close" class="click-close hidden"></a>