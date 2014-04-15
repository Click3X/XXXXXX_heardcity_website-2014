<?php // OURTEAM TEMPLATE ?>

<div class="ourteam-container">

	<!-- ANIMATED PRE LOADER -->
	<!--     <div id="anim-holder" class="anim-holder preload-anim">
        <div id="preload-anim" class="sprite-pre_loader20000"></div>
    </div> -->

    <div class="content-wrap">
    	<!-- MAIN CONTENT -->
	    <div id="main" role="main" class="ui-content" class="main">

	    	<?php include('heard/php/projects/bio.php'); ?>

	    	<div id="all-items-holder" class="all-items-holder clearfix">
	    		<ul id="all-items" class="all-items"></ul>
	    	</div>

	    </div><!-- /content -->

	    <!-- SIDEBAR PANEL -->
	    <div data-role="panel" id="right-panel" data-display="push" data-position="right" data-theme="b">

	        <a href="#" data-rel="close" class="ui-btn ui-corner-all ui-shadow ui-mini ui-btn-inline ui-icon-delete ui-btn-icon-right">Close</a>
	        <?php include('heard/php/sub-nav.php'); ?>

	    </div><!-- /panel -->

	    <?php include('heard/php/footer.php'); ?>

	</div><!--  CONTENT WRAP -->

</div><!-- OURTEAM CONTAINER -->