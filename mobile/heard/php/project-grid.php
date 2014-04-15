<?php // PROJECT - GRID
	// Set up variables for VIDEOS directory
	$dirs = array();
	$thumbsDir = array();
	$projects = array();

	// Directory where videos & corresponding thumbs are located
	$dirDir = 'vids-thumbs/';
	// Get dirs from Directory and put in $dirs Array
	$dirs = readDirectory($dirDir, $dirs);

	$i=0;
	foreach ($dirs as $dir)  { 
		$files = array();
		$dir = $dir . '/';
	 	$files = readDirectory($dir, $files);
	 	$projects[$i]["images"]["mobile"] = array();
	 	$projects[$i]["images"]["tablet"] = array();
	 	$projects[$i]["images"]["alt"] = array();

	 	foreach ($files as $file) {
	 		// get file path info for parsing
	 		$fileInfo = pathinfo($file);

	 		// Check for VIDEO thumbnail
			if (($fileInfo["extension"] == "png") || ($fileInfo["extension"] == "jpg") || ($fileInfo["extension"] == "gif")) {
				$imgSize = substr( ($fileInfo["filename"]), -3, 3 );
				if($imgSize==480) { array_push($projects[$i]["images"]["mobile"], $file); }
				if($imgSize==840) { array_push($projects[$i]["images"]["tablet"], $file); }
				if($imgSize=="two") { array_push($projects[$i]["images"]["alt"], $file); }
			}

			// Check for mp4 VIDEO file
			if (($fileInfo["extension"] == "mp4")) {
				$projects[$i]["mp4"] = $file;
				$projects[$i]["vidsrc"] = $fileInfo["basename"];
			}

			// Check for PHP text File
			if (($fileInfo["extension"] == "php")) {
				include($file);

				$projects[$i]["mixer"] = $info["mixer"];
				$projects[$i]["director"] = $info["director"];
				$projects[$i]["type"] = $info["type"];
				$projects[$i]["title"] = $info["title"];
			}
	 	}
	$i++;
	}

?>