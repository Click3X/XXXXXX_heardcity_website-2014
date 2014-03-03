<?php // RESPONSIVE STYLES
	$sizes = array(
		"mobile-half"=>'-240',
		"mobile"=>'-480', 
		"tablet-half"=>'-768',
		"tablet"=>'-960', 
		"desk"=>'-1440', 
		"super"=>'-1920');

	echo '<style>';

		foreach ($marquee as $marq_img) {
			$id = formatId($marq_img);			
			$rawName = getRawName($marq_img);			
			$info = pathinfo($marq_img);
			$ext = $info['extension'];
			
			echo '#'.$id.' { background-image:url("responsive-images/marquee/'.$id.'/'.$rawName.$sizes["mobile"].'.'.$ext.'");'."}\n";


		}

		// DOG -home.php
		$dogImage = $dog[0];
		$dogId = formatId($dogImage);
		$dogName = getRawName($dogImage);	
		echo '#dog-windows { background-image:url("responsive-images/'.$dogId.'/'.$dogName.$sizes["mobile"].'.'.$ext.'");'."}\n";

		// DUDE on PHONE -home.php
		$dudeImage =$image_spreads[2]['image'];
		$dudeId = formatId($dudeImage);
		$dudeName = getRawName($dudeImage);	
		echo '#dude-on-phone { background-image:url("responsive-images/'.$dudeId.'/'.$dudeName.$sizes["mobile"].'.'.$ext.'");'."}\n";

		// JEAN JACKET -home.php
		$jeanImage =$image_spreads[1]['image'];
		$jeanId = $image_spreads[1]['id'];
		$jeanRealId = '#'.$jeanId;
		$jeanName = getRawName($jeanImage);	
		echo $jeanRealId.' { background-image:url("responsive-images/'.$jeanId.'/'.$jeanName.$sizes["mobile-half"].'.'.$ext.'");'."}\n";

		// NORD -home.php
		$nordImage =$image_spreads[0]['image'];
		$nordId = $image_spreads[0]['id'];
		$nordRealId = '#'.$nordId;
		$nordName = getRawName($nordImage);	
		echo $nordRealId.' { background-image:url("responsive-images/'.$nordId.'/'.$nordName.$sizes["mobile-half"].'.'.$ext.'");'."}\n";

		$stairsImage =$image_spreads2[0]['image'];
		$stairsId = $image_spreads2[0]['id'];
		$stairsRealId = '#'.$stairsId;
		$stairsName = getRawName($stairsImage);	
		echo $stairsRealId.' { background-image:url("responsive-images/'.$stairsId.'/'.$stairsName.$sizes["mobile-half"].'.'.$ext.'");'."}\n";

		$girlImage =$image_spreads2[1]['image'];
		$girlId = $image_spreads2[1]['id'];
		$girlRealId = '#'.$girlId;
		$girlName = getRawName($girlImage);	
		echo $girlRealId.' { background-image:url("responsive-images/'.$girlId.'/'.$girlName.$sizes["mobile-half"].'.'.$ext.'");'."}\n";



		echo '@media(min-width:480px) { ';
			
				foreach ($marquee as $marq_img) {
					$id = formatId($marq_img);			
					$rawName = getRawName($marq_img);			
					$info = pathinfo($marq_img);
					$ext = $info['extension'];
					
					echo '#'.$id.' { background-image:url("responsive-images/marquee/'.$id.'/'.$rawName.$sizes["tablet"].'.'.$ext.'");'."}\n";
				}

				echo '#dog-windows {background-image:url("responsive-images/'.$dogId.'/'.$dogName.$sizes["tablet"].'.'.$ext.'");'."}\n";
				echo '#dude-on-phone { background-image:url("responsive-images/'.$dudeId.'/'.$dudeName.$sizes["tablet"].'.'.$ext.'");'."}\n";
				echo $jeanRealId.' { background-image:url("responsive-images/'.$jeanId.'/'.$jeanName.$sizes["mobile"].'.'.$ext.'");'."}\n";
				echo $nordRealId.' { background-image:url("responsive-images/'.$nordId.'/'.$nordName.$sizes["mobile"].'.'.$ext.'");'."}\n";
				echo $stairsRealId.' { background-image:url("responsive-images/'.$stairsId.'/'.$stairsName.$sizes["mobile"].'.'.$ext.'");'."}\n";
				echo $girlRealId.' { background-image:url("responsive-images/'.$girlId.'/'.$girlName.$sizes["mobile"].'.'.$ext.'");'."}\n";

		echo '}';

		echo '@media(min-width:960px) { ';
				
				foreach ($marquee as $marq_img) {
					$id = formatId($marq_img);			
					$rawName = getRawName($marq_img);			
					$info = pathinfo($marq_img);
					$ext = $info['extension'];
					
					echo '#'.$id.' { background-image:url("responsive-images/marquee/'.$id.'/'.$rawName.$sizes["desk"].'.'.$ext.'");'."}\n";
				}

				echo '#dog-windows {background-image:url("responsive-images/'.$dogId.'/'.$dogName.$sizes["desk"].'.'.$ext.'");'."}\n";
				echo '#dude-on-phone { background-image:url("responsive-images/'.$dudeId.'/'.$dudeName.$sizes["desk"].'.'.$ext.'");'."}\n";
				echo $jeanRealId.' { background-image:url("responsive-images/'.$jeanId.'/'.$jeanName.$sizes["tablet-half"].'.'.$ext.'");'."}\n";
				echo $nordRealId.' { background-image:url("responsive-images/'.$nordId.'/'.$nordName.$sizes["tablet-half"].'.'.$ext.'");'."}\n";
				echo $stairsRealId.' { background-image:url("responsive-images/'.$stairsId.'/'.$stairsName.$sizes["tablet"].'.'.$ext.'");'."}\n";
				echo $girlRealId.' { background-image:url("responsive-images/'.$girlId.'/'.$girlName.$sizes["tablet"].'.'.$ext.'");'."}\n";

		echo '}';

		echo '@media(min-width:1440px) { ';
				
				foreach ($marquee as $marq_img) {
					$id = formatId($marq_img);			
					$rawName = getRawName($marq_img);			
					$info = pathinfo($marq_img);
					$ext = $info['extension'];
					
					echo '#'.$id.' { background-image:url("responsive-images/marquee/'.$id.'/'.$rawName.$sizes["super"].'.'.$ext.'");'."}\n";
				}

				echo '#dog-windows {background-image:url("responsive-images/'.$dogId.'/'.$dogName.$sizes["super"].'.'.$ext.'");'."}\n";
				echo '#dude-on-phone { background-image:url("responsive-images/'.$dudeId.'/'.$dudeName.$sizes["super"].'.'.$ext.'");'."}\n";
				echo $stairsRealId.' { background-image:url("responsive-images/'.$stairsId.'/'.$stairsName.$sizes["desk"].'.'.$ext.'");'."}\n";
				echo $girlRealId.' { background-image:url("responsive-images/'.$girlId.'/'.$girlName.$sizes["desk"].'.'.$ext.'");'."}\n";


		echo '}';

	echo '</style>';