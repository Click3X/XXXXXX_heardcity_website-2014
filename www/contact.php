<?php // Contact
$page='Contact';
include('php/header.php'); 

?>
<div class="container clearfix contact-container">

	<!-- <div class="wrap map"></div> -->

	<div id="map-canvas" class="map"></div>

	<div class="contact-section-holder">
		<div class="img-holder contact-logo">
			<img src="img/logos/contact-logo.png" alt="Heard City logo">
		</div>

		<div class="section-title">
			<div class="border-holder grey">
				<div>Get in touch or swing by.</div>
			</div>
		</div>

		<div class="address">
			<ul>
				<li class="phone"><?php echo $address['phone']; ?></li>
				<li class="street"><?php echo $address['street']; ?></li>
				<li class="floor"><?php echo $address['floor']; ?></li>
				<li class="city-li"><?php echo $address['city']; ?></li>
				<li class="name"><?php echo $contact['name']; ?></li>
				<li class="email"><a href="mailto:<?php echo $contact['email']; ?>"><?php echo $contact['email']; ?></a></li>
			</ul>
		</div>
	</div>

	<div class="city"></div>

</div>

<?php include('php/footer.php'); ?>