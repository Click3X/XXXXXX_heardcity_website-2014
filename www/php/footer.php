<?php // FOOTER ?>
		<footer class="footer">
    		<div class="footer-inner clearfix wrap">
	    		<div class="footer-logo"></div>
	    		<div class="address">
	    			<ul>
	    				<li><?php echo $address['phone']; ?></li>
	    				<li><?php echo $address['street']; ?></li>
	    				<li><?php echo $address['floor']; ?></li>
	    				<li><?php echo $address['city']; ?></li>
	    			</ul>
	    		</div>
	    		<div class="social-icons clearfix">
	    			<div class="icon-holder"><a href="<?php echo $social['map'] ?>" class="sprite sprite-map"></a></div>
	    			<div class="icon-holder"><a href="<?php echo $social['email'] ?>" class="sprite sprite-email"></a></div>
	    			<div class="icon-holder"><a href="<?php echo $social['instagram'] ?>" class="sprite sprite-instagram"></a></div>
	    			<div class="icon-holder"><a href="<?php echo $social['facebook'] ?>" class="sprite sprite-facebook"></a></div>
	    			<div class="icon-holder"><a href="<?php echo $social['twitter'] ?>" class="sprite sprite-twitter"></a></div>
	    			<div class="icon-holder"><a href="<?php echo $social['youtube'] ?>" class="sprite sprite-you-tube"></a></div>
	    		</div>
	    	</div>
	    </footer>

		<!--
		<script type="text/javascript">
			var projectJSON = <?php // echo json_encode($projectJSON); ?>;
			console.log("This is the projectJSON array: " + projectJSON);
		</script>
		-->

		<?php $jsonMembers = json_encode($jsonMembers); ?>
	
		<script type="text/javascript">
			// JSON for OUR TEAM page
			var jsonMembers = <?php echo $jsonMembers; ?>;
			// console.table(jsonMembers);
		</script>

    </body>
</html>