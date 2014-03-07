<!DOCTYPE html>
<html>
<head>
    <title>Billy's Image Map Testing</title>
    <style>
    * {
        outline: 1px solid rgba(255, 0, 0, 0.2);
    }
        p, h1 {
            display: inline-block;
            max-width: 12em;
        }
        ul {
            text-align: justify;
        }
        li {
            list-style-type:none;
            display: inline-block;
            position: relative;
            text-align: center;
            z-index: 1;
        }

        .neighbor {
            opacity: 0;
            display: inline-block;
            position:absolute;
            min-width: 12em;
            background: rgba(255, 255, 255, 0.8);
            border:1px solid silver;
            padding:.5em;
            box-shadow: 2px 5px 6px rgba(0,0,0,0.2);
            z-index: 0;
        }

        map:hover + .neighbor {
            opacity: 1;
            z-index: 2;
            top:-33%;
        }
    </style>
</head>

<body>
    <h1>Image Map Testing</h1>

    <?php 
    
    $jsonMembers = array();

    include('php/config.php');
    include('php/functions.php');

    echo '<ul>';

        foreach ($members as $key => $member) {
            $member_name = $member['name'];
            $member_bio = $member['bio'];
            $member_silo = $member['silo'];
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
            $jsonMembers[$key]['silo'] = $member_silo;
            $jsonMembers[$key]['member_class'] = $member_class;

            if($member_class == 'corymelious') {
                
                foreach ($items as $key => $item) {
                    if($item['image']) {
                        $image = $item['image'];
                        $info = pathinfo($image);
                        // helper($info);
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
                
                    echo '<li>
                            <img src="'.$image.'" usemap="#'.$usemap.'">
                            <map id="'.$usemap.'" name="'.$usemap.'">
                                <area shape="poly" coords="'.$coords.'" href="#" />
                            </map>
                            <div id="neighbor" class="neighbor">
                                <h1>'.$name.'</h1>
                                <p>'.$bio.'</p>
                            </div>
                        </li>';
                }
            }
        }
    echo '</ul>';

    ?>

</body>
</html>