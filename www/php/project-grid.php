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

				if(isset($info["agency"])) { $projects[$i]["agency"] = $info["agency"]; }
				if(isset($info["mixer"])) { $projects[$i]["mixer"] = $info["mixer"]; }
				if(isset($info["director"])) { $projects[$i]["director"] = $info["director"]; }
				if(isset($info["type"])) { $projects[$i]["type"] = $info["type"]; }
				if(isset($info["title"])) { $projects[$i]["title"] = $info["title"]; }
				if(isset($info["client"])) { $projects[$i]["client"] = $info["client"]; }
				// 'client'
			}
	 	}
	$i++;
	}

// echo '<pre>'.print_r($projects).'</pre>';

?>