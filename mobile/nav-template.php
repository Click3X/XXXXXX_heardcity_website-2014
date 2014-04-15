<?php // NAV TEMPLATE ?>

<nav id="mobile" data-role="navbar">
    <div id="toggle-bar">
        <a class="navicon mtoggle" href="#">☰</a>
        <a class="navicon mtoggle center-toggle" href="#"><span id="page-title" class="page-title"><?php echo $page; ?></span></a>
		<!-- <a href="#right-panel" data-icon="carat-l" data-iconpos="notext" data-shadow="false" data-iconshadow="false" class="right-arrow">&lt;</a> -->
    </div>		     
    <ul id="mmenu">
        <li id="page-home"><p><a href="home.php" rel="external">Home</a></p></li>
        <li id="page-ourteam"><p><a href="ourteam.php" rel="external">Our Team</a></p></li>
        <li id="page-projects"><p><a href="projects.php" rel="external">Projects</a></p></li>
        <li id="page-contact"><p><a href="contact.php" rel="external">Contact</a></p></li>
    </ul>
</nav>
