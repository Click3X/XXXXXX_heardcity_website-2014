 <!-- Home Page Slider -->
    <div id="home-slider-holder" class="container clearfix">
        <div id="logo-bg" class="logo-bg"></div>
        <ul id="home-slider" class="home-slider owl-carousel">
        <?php foreach ($marquee as $marq_img) {
                $id = formatId($marq_img);
                echo '<li id="'.$id.'" class="slide"></li>';
            } ?>
        </ul>
    </div>