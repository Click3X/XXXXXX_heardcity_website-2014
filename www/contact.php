<?php 
include('php/config.php'); 
include('php/functions.php'); 
include('php/project-grid.php'); 
?>
<!DOCTYPE html>
<html>
    <head>
    	<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Heard City | Contact</title>

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->

        <script data-main="js/contact" src="js/lib/require.js"></script>

        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
        <script>
            var clickLatLong = new google.maps.LatLng(40.741244, -73.991320),
            map,
            mapOptions,
            marker;

            function initialize() {

                mapOptions = {
                    zoom: 17,
                    zoomControl: true,
                    scaleControl: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true,
                    center: clickLatLong,
                    disableDefaultUI: true,
                    styles: [
                        {"stylers":[
                            {"hue":"#ff1a00"},
                            {"invert_lightness":true},
                            {"saturation":-100},
                            {"lightness":33},
                            {"gamma":0.5}
                            ]
                        },
                        {"featureType":"water",
                        "elementType":"geometry",
                        "stylers":[
                            {"color":"#2D333C"}
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "stylers": [
                              { "visibility": "on" },
                              { "color": "#000000" }
                            ]
                          },
                          {
                            "featureType": "road.local",
                            "stylers": [
                              { "color": "#000000" },
                              { "visibility": "on" }
                            ]
                          }
                    ]
                };

                map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

                marker = new google.maps.Marker({
                    position: clickLatLong,
                    map: map
                });

            }

            google.maps.event.addDomListener(window, "load", initialize);

        </script>
    </head>

    <body class="contact">
        <!-- PRELOADER -->
         <div id="ajax-loader">
            <div class="ajax-spinner">
                <img src="images/logo/logo-white.png" width="150px" height="194px">
                <img src="images/sprites/ajaxSpinner.gif" id="spin-wheel">
            </div>
        </div>
        <div class="preload-wrap">
        <?php include('php/main-nav.php'); ?>


        <div class="container clearfix contact-container">

            <div id="map-canvas" class="map"></div>

            <div class="contact-section-holder">
                <div class="img-holder contact-logo">
                    <!-- <div class="footer-logo"></div> -->
                    <img src="images/logo/logo-black.svg" alt="Heard City logo">
                </div>


                <div class="section-title">
                    <div class="border-holder grey">
                        <div>Get in touch or swing by</div>
                    </div>
                </div>

                <?php 
                $phone = $address['phone'];

                $phone  = str_replace('.', '', $phone);
                ?>

                <div class="address">
                    <ul class="address-info">
                        <li class="phone"><a href="tel:5551234567" class=""><?php echo $address['phone']; ?></a></li>
                        <li class="street"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php echo $address['street'].', '. $address['floor']; ?></a></li>
                        <!-- <li class="floor"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php // echo $address['floor']; ?></a></li> -->
                        <li class="city-li"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php echo $address['city']; ?></a></li>
                    </ul>
                    <ul class="contact-info">
                        <li class="name"><?php echo $contact['name']; ?></li>
                        <li class="email"><a href="mailto:<?php echo $contact['email']; ?>"><?php echo $contact['email']; ?></a></li>
                    </ul>
                </div>
            </div>

            <div class="city"></div>

        </div>
        </div>
        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>

    </body>

</html>
