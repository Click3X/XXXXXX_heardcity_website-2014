<?php // Contact
$page='Contact';
include('php/header.php'); 

?>
<div class="container clearfix contact-container">

	<div id="map-canvas" class="map"></div>

	<div class="contact-section-holder">
		<div class="img-holder contact-logo">
			<img src="img/logos/contact-logo.png" alt="Heard City logo">
		</div>

		<div class="section-title">
			<div class="border-holder grey">
				<div>Get in touch or swing by</div>
			</div>
		</div>

		<?php 
		$phone = $address['phone'];

		$phone  = str_replace('.', '', $phone);
		?>

		<div class="address">
			<ul>
				<li class="phone"><a href="tel:5551234567" class=""><?php echo $address['phone']; ?></a></li>
				<li class="street"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php echo $address['street'].', '. $address['floor']; ?></a></li>
				<!-- <li class="floor"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php // echo $address['floor']; ?></a></li> -->
				<li class="city-li"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php echo $address['city']; ?></a></li>
				<li class="name"><?php echo $contact['name']; ?></li>
				<li class="email"><a href="mailto:<?php echo $contact['email']; ?>"><?php echo $contact['email']; ?></a></li>
			</ul>
		</div>
	</div>

	<div class="city"></div>

</div>

<?php include('php/footer.php'); ?>