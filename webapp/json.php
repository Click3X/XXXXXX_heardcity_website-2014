<?php 
include('php/config.php'); 
include('php/functions.php'); 
include('php/project-grid.php'); 


// BUILD MEMBERS Array for JSON
$jsonMembers = array();

foreach ($members as $key => $member) {
  $member_name = $member['name'];
  $member_bio = $member['bio'];
  $id = formatLink($member_name);
  $sex = $member["sex"];
  $possesive = explode(' ', $member_name);
  $possesive = $possesive[0]."'s";
  $items = $member['items'];

  // Array for JSON
  $jsonMembers[$key]['name'] = $member_name;
  $jsonMembers[$key]['bio'] = $member_bio;
  $jsonMembers[$key]['sex'] = $sex;
  $jsonMembers[$key]['items'] = $items;
  $jsonMembers[$key]['id'] = $id;
    
  foreach ($items as $key => $item) {
        if($item['image']) {
            $image = $item['image'];
            $info = pathinfo($image);
            $usemap = $info['filename'];
        }
        if($item['bio']) {
            $bio = $item['bio'];
        }
        if(isset($item['map'])) {
            $map = $item['map'];
        }
        if(isset($item['coords'])) {
            $coords = $item['coords'];
        } else { 
            $coords = ''; 
        }
        if($item['name']) {
            $name = $item['name'];
            $item_class= formatLink($name);
        }
  }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Heard City | DATA</title>
    
    </head>

    <body>


      <?php

      echo json_encode(array("members" => $jsonMembers)); 

      ?>

      

  <?php // include('php/footer.php'); ?>
        
    </body>
</html>