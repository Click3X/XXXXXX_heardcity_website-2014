<?php // Contact
$page='Home';
include('php/header.php'); 
?>

<!-- Home Page Slider -->
<div id="dev-slider-holder" class="container clearfix">
    <div id="logo-bg" class="logo-bg"></div> <!-- logo-invisible -->
    <ul id="dev-home-slider" class="dev-home-slider owl-carousel">
        <?php 
            foreach ($marquee as $marq_img) {
                $id = formatId($marq_img);
                echo '<li id="'.$id.'" class="slide"></li>';
            }
        ?>
        
    </ul>
</div>

        

<?php include('php/footer.php'); ?>