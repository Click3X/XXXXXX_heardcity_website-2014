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

        <meta name="description" content="Heard City">
        <meta name="author" content="Charles Davis">
        <meta name="google-site-verification" content="UF6chmGt4khLOuoo1UJPKlZQhNqI2A_piOZs3tQU08Q" />
        <meta property="og:title" content="Heard City"/>
        <meta property="og:type" content="company"/>
        <meta property="og:url" content="http://heardcity.com"/>
        <meta property="og:image" content="http://heardcity.com/favicon.png"/>
        <meta property="og:site_name" content="Heard City"/>
        <meta property="fb:admins" content="631337813"/>
        <meta property="og:description"
              content="Get the latest insider information about the new audio company from the Have You Heard site."/>


        <link rel="shortcut icon" href="favicon.ico">

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />

          <!--[if IE]>
              <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
          <![endif]-->

        <script>
            // TEST FOR MOBILE DEVICE / TABLET
            var device;
            if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ) {
                device = 'mobile';
            } else {
                device = 'desk';
            }

            <?php echo 'var base="'.$BASE.'";'; ?>
        </script>


        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
        <script>
            var clickLatLong = new google.maps.LatLng(40.741244, -73.991320),
            dumboLatLong = new google.maps.LatLng(40.704007, -73.986759),
            map,
            mapOptions,
            marker,
            dumboMarker;



            function initialize() {

                mapOptions = {
                    zoom: 12,
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

                dumboMarker = new google.maps.Marker({
                    position: dumboLatLong,
                    map: map
                });

            }

            google.maps.event.addDomListener(window, "load", initialize);

        </script>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="js/site-loader.js"></script>
    </head>

    <body class="contact">

            <?php include('php/main-nav.php'); ?>
            <div class="container clearfix contact-container">

                <div id="map-canvas" class="map"></div>

                <div class="contact-section-holder">
                    <div class="img-holder contact-logo">
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

                    <div class="address-holder clearfix">
                        <div class="address">
                            <ul class="address-info">
                                <li class="phone"><a href="tel:5551234567" class=""><?php echo $address['phone']; ?></a></li>
                                <li class="street"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php echo $address['street'].', '. $address['floor']; ?></a></li>
                                <li class="city-li"><a href="https://www.google.com/maps/place/16+W+22nd+St/@40.7412435,-73.9913197,17z/data=!4m2!3m1!1s0x89c259a386c20bd5:0x6da26b75635d4e84" target="_blank" class="g-map-link"><?php echo $address['city']; ?></a></li>
                            </ul>
                        </div>
                        <div class="address address-two">
                            <ul class="address-info">
                                <li class="phone"><a href="tel:5551234567">347.627.0950</a></li>
                                <li class="street"><a href="https://www.google.com/maps/place/20+Jay+St+%23618,+Brooklyn,+NY+11201/@40.7040072,-73.986759,17z/data=!3m1!4b1!4m2!3m1!1s0x89c25a324d8b7913:0x98ccf68c62ee3a6b" target="_blank" class="g-map-link">20 Jay St., Suite 618</a></li>
                                <li class="city-li"><a href="https://www.google.com/maps/place/20+Jay+St+%23618,+Brooklyn,+NY+11201/@40.7040072,-73.986759,17z/data=!3m1!4b1!4m2!3m1!1s0x89c25a324d8b7913:0x98ccf68c62ee3a6b" target="_blank" class="g-map-link">Brooklyn, NY 11201</a></li>
                            </ul>
                        </div>
                        <div class="contact-info-holder">
                             <ul class="address contact-info">
                                <li class="name"><?php echo $contact['name']; ?></li>
                                <li class="email"><a href="mailto:<?php echo $contact['email']; ?>"><?php echo $contact['email']; ?></a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="city"></div>

            </div>

        <!-- FOOTER -->
        <?php include('php/footer.php'); ?>

        <!--
        <script src="js/lib/jquery.flexnav.min.js"></script>
        <script src="js/contact/setup.js"></script>
        -->
        <script src="js/build/contact-production.min.js"></script>

        <script>

            var _gaq=[['_setAccount','UA-33922112-1'],['_trackPageview']];

            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];

            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';

            s.parentNode.insertBefore(g,s)}(document,'script'));

        </script>

    </body>

</html>