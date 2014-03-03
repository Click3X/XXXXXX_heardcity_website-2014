<?php   // HEADER SCRIPT LOADER for loading correct
        // Require js script
            
// Load different Javascript for each page
switch ($page) {
    case 'Home':
        $script = 'js/home';
        break;

    case 'Projects':
        $script = 'js/projects';
        break;

    case 'Our Team':
        $script = 'js/ourteam';
        break;

    case 'Contact':
        $script = 'js/contact';
        $maps = '<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>';
        $mapScript = '<script>
                        var clickLatLong = new google.maps.LatLng(40.741244, -73.991320),
                        map,
                        mapOptions,
                        marker;

                        function initialize() {

                            mapOptions = {
                                zoom: 17,
                                center: clickLatLong,
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

                    </script>';

        echo $maps;
        echo $mapScript;
        break;
}

// If is page Single, incorporate js/single for require js
if($single) {
    $script = 'js/single';
}

?>