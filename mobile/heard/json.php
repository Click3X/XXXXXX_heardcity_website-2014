<?php 
include('php/config.php'); 
include('php/functions.php'); 
// include('php/project-grid.php'); 


// BUILD MEMBERS Array for JSON
$jsonMembers = array();

foreach ($members as $key => $member) {
  $member_name = $member['name'];
  $member_bio = $member['bio'];
  $member_class = formatLink($member_name);
  $sex = $member["sex"];
  $possesive = explode(' ', $member_name);
  $possesive = $possesive[0]."'s";
  $items = $member['items'];

  // Array for JSON
  $jsonMembers[$key]['name'] = $member_name;
  $jsonMembers[$key]['bio'] = $member_bio;
  $jsonMembers[$key]['sex'] = $sex;
  $jsonMembers[$key]['items'] = $items;
  $jsonMembers[$key]['id'] = $member_class;
    
  foreach ($items as $key => $item) {
        if($item['image']) {
            $image = $item['image'];
            $position = $item['position'];
            $info = pathinfo($image);
            $usemap = $info['filename'];

            echo print_r($image);
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

        <title>Heard City | Home</title>
    
    </head>

    <body class="">


      <?php $jsonMembers = json_encode($jsonMembers);

          echo '<pre>'.$jsonMembers.'</pre>';

          echo '<script>var newJsonMembers = JSON.stringify('.$jsonMembers.'); console.dir(newJsonMembers); </script>';
?>

          <script> console.log(newJsonMembers);</script>
        
    </body>
</html>