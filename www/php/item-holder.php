<?php // ITEM HOLDER

echo '<li class="item-holder '.$member_class.' '.$item_class.'">';

if($coords == '') {
    echo '<a href="#" data-person="'.$member_class.'" data-item="'.$item_class.'" class="map-link">';
        echo '<img src="'.$image.'" usemap="#'.$usemap.'">';
    echo '</a>';
} else {
    echo '<img src="'.$image.'" usemap="#'.$usemap.'">';
    echo '<map id="'.$usemap.'" name="'.$usemap.'" data-person="'.$member_class.'" data-item="'.$item_class.'" class="map-link">
            <area shape="poly" coords="'.$coords.'" href="#" />
          </map>';
}                  

  echo '<div class="neighbor">';
        echo '<div class="item-hover-inner">';
            echo '<h2>'.$name.'</h2>';
            echo '<p class="serif">'.$bio.'</p>';
            echo '<a href="#" data-person="'.$member_class.'" data-item="'.$item_class.'" class="view-profile"> &gt; View more of '.$possesive.' items...</a>';
        echo '</div>';
    echo '</div>';
echo '</li>';