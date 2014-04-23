<?php // NEW BLACK TEXT SLIDER ?>
<div id="first-container" class="container clearfix black-theme">
	<!-- <div class="noise"></div> -->
    <ul id="black-text-slider" class="text-slider black-grad royalSlider contentSlider rsDefault rsAutoHeight rsHor">
    <?php
 		foreach ($text_carousel_black as $headline) { ?>	
	        <li>
	            <div class="inner-slide">
	                <div class="slide-text">
	                    <p><?php echo $headline; ?></p>
	                </div>
	            </div>
	        </li>
    <?php } ?> 
    </ul>
</div>