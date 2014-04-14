<div data-role="header" data-theme="b" class="clearfix">
    <nav id="mobile">

        <div id="toggle-bar">
            <a class="navicon mtoggle" href="#">☰</a>
            <span id="page-title" class="page-title"><?php echo $page; ?></span>
            <?php if($page == 'Our Team') {
                echo '<a href="#right-panel" data-icon="carat-l" data-iconpos="notext" data-shadow="false" data-iconshadow="false" class="right-arrow">&lt;</a>';
            } ?>
        </div>
     
        <ul id="mmenu">
            <li><a href="home.php">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="ourteam.php">ourteam</a></li>
            <li><a href="#">Contact</a></li>           
        </ul>
     
    </nav>
</div><!-- /header -->