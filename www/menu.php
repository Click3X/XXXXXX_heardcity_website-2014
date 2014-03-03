<?php // Contact
$page='Our Team';
include('php/header.php'); 

$words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus imperdiet est sed auctor. Nulla libero lorem, gravida at malesuada dolorum ensu quis, iaculis sed elit.';
$testArray = split(' ', $words);


?>
<div class="clearfix" style="background-color:grey;">

	<div class="container clearfix" style="padding:5em 0; text-align:center;">
		<nav class="cl-effect-17">
		    <a href="#" data-hover="Seraglio" style="padding:0 2em;"><span>Seraglio</span></a>
		    <a href="#" data-hover="Sumptuous" style="padding:0 2em;"><span>Sumptuous</span></a>
		    <a href="#" data-hover="Scintilla" style="padding:0 2em;"><span>Scintilla</span></a>
		    <a href="#" data-hover="Palimpsest" style="padding:0 2em;"><span>Palimpsest</span></a>
		    <a href="#" data-hover="Assemblage" style="padding:0 2em;"><span>Assemblage</span></a>
		</nav>
	</div>

	<?php newMenu($sitePages, $page, 'cl-effect-17'); ?>


	<div class="container clearfix" style="padding:5em 0; text-align:center;">
		<nav class="cl-effect-17">
		    <a href="#" data-hover="Seraglio" style="padding:0 2em;"><span>Seraglio</span></a>
		    <a href="#" data-hover="Sumptuous" style="padding:0 2em;"><span>Sumptuous</span></a>
		    <a href="#" data-hover="Scintilla" style="padding:0 2em;"><span>Scintilla</span></a>
		    <a href="#" data-hover="Palimpsest" style="padding:0 2em;"><span>Palimpsest</span></a>
		    <a href="#" data-hover="Assemblage" style="padding:0 2em;"><span>Assemblage</span></a>
		</nav>
	</div>

</div>

<?php include('php/footer.php'); ?>