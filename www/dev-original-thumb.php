<?php // Contact
$page='Our Team';
include('php/header.php'); 

$words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus imperdiet est sed auctor. Nulla libero lorem, gravida at malesuada dolorum ensu quis, iaculis sed elit.';
$testArray = split(' ', $words);


?>
	<div class="container demo-3">
		<ul class="grid cs-style-3">

		<?php include('php/project-grid.php');

			foreach ($projects as $key => $project) {
				$imageSec = $project['thumb'][0];
				$imageFeat = $project['thumb'][1];
				$mp4 = $project['mp4'];
				$title = $project['title'];
				$type = $project['type'];
				$mixer = $project['mixer'];
				$director = $project['director'];
			?>
			
			<li class="<?php echo formatLink($type); ?>">
				<figure>
					<img src="<?php echo $imageFeat; ?>" alt="<?php echo $title; ?>">
					<figcaption style="background-image:url('<?php echo $imageSec; ?>');" class="sec-image">
						
						<span><?php echo $title; ?></span>
						
					</figcaption>
				</figure>
			</li>

			<?php 

			}

			?>

		</ul>
	</div>

<?php include('php/footer.php'); ?>