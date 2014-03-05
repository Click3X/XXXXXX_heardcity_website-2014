<?php // FUNCTIONS

// format page titles to strip white spaces and enforce lowercase
function formatLink($page) {
	$returnPage =  str_replace(' ', '', $page);
	$returnPage = strtolower($returnPage);
	return $returnPage;
}

// Main Navigation for Site
function newMenu($sitePages, $page, $effect) {

	echo '<div id="new-menu-holder" class="new-menu-holder">';
		echo '<div class="top desktop-hidden">
	    		<a href="#" class="navLink">&#9776;</a>
	    		<span id="nav-page-title" class="nav-page-title desktop-hidden">'.$page.'</span>
	  		</div>';

	  	echo '<div id="new-menu-collapse">';
			echo '<ul id="new-menu" class="new-menu clearfix ">';
			foreach ($sitePages as $key => $sitePage) {
				if($page == $sitePage) {$class = ' current-page';} else {$class='';}
				echo '<li class="menu-'.formatLink($sitePage).' '.$effect.$class.'">';
					echo '<a href="'.formatLink($sitePage).'.php" data-hover="'.$sitePage.'"><span>'.$sitePage.'</span></a>';
				echo '</li>';
			}
			echo '</ul>';
		echo '</div>';
	echo '</div>';

}


// Read DIRECTORY & RETURN contents as $videos array
function readDirectory($vidDir, $videos) {	
    if (is_dir($vidDir)) {
        if ($dh = opendir($vidDir)) {
            while (($file = readdir($dh)) !== false) {

            	// only prodess dir if its not our 'build' directory
            	if($file != 'build') {

	                $vidPath = $vidDir.$file;
	                $firstChar  = substr($file, 0, 1);

	                // dont push hidden files
	                if($firstChar != '.') {
	                  array_push($videos, $vidPath);
	                }
	            }
            }
            closedir($dh);
            return $videos;
        }
    }
}


// Only get the first 26 words of Bio for short form
function firstBit($sentence) {
	$sentence = implode(' ', array_slice(explode(' ', $sentence), 0, 26));
	$sentence .= '... ';
	return $sentence;
}


// Placeholder if TEAM MEMBER does not have an image
function placeHolder($image) {
	if(!$image) {
		$image = 'img/team-members/placeholder.gif';
		return $image;
	} else {
		return $image;
	}
}

function formatId($marq_img) {
	$fileInfo = pathinfo($marq_img);
    $name = formatLink($fileInfo['filename']);
    $name = explode('-', $name);
    array_pop($name);
    $name = implode('-', $name);
    return $name;
}

function getRawName($marq_img) {
	$info = pathinfo($marq_img);
	// echo '<pre>'.print_r($info).'</pre>';
	$rawName = explode('-', $info['filename']);
	array_pop($rawName);
	$rawName = implode('-', $rawName);
	// echo 'This is rawName: '.$rawName."\n";
	return $rawName;
}