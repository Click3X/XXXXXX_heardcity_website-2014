 <!-- Home Page Slider -->
    <div id="home-slider-holder" class="container clearfix"> <!--  pad-bot -->
        <div id="logo-bg" class="logo-bg"></div>
        <ul id="home-slider" class="home-slider clearfix royalSlider contentSlider rsDefault">
        <?php foreach ($marquee as $marq_img) {
                $id = formatId($marq_img);
                echo '<li id="'.$id.'" class="slide"></li>';
            } ?>
        </ul>
    </div>