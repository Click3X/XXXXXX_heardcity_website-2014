<?php 
require_once('../../heard/php/config.php');
require_once('../../heard/php/functions.php');
$page = 'Our Team';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>jQuery Mobile</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../libs/jquery-mobile/jquery.mobile-1.3.2.css">
    <link rel="stylesheet" href="css/style.css">

    <script>
        // TEST FOR MOBILE DEVICE / TABLET
        var device;
        if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
        } else {
            device = 'desk';
        }

    </script>


    <script src="../libs/jquery/jquery.js"></script>
    <script src="../libs/jquery-mobile/jquery.mobile-1.3.2.js"></script>
    <script src="../dist/jquery.lazyloadxt.js"></script>

    
</head>
<body>
    <div data-role="page" id="page1">
        <div data-role="header">
            <h1>Page 1 Testing this out</h1>
            <a href="#page2">2</a>
        </div>
        <div data-role="content">
            <p><img data-src="http://lorempixel.com/300/200/city/1" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/2" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/3" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/4" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/5" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/6" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/7" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/8" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/9" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/city/10" width="300" height="200"></p>
        </div>
        </div>
    </div>
    <div data-role="page" id="page2">
        <div data-role="header">
            <h1>Page 2</h1>
            <a href="#page1">1</a>
        </div>
        <div data-role="content">
            <p><img data-src="http://lorempixel.com/300/200/nature/1" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/2" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/3" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/4" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/5" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/6" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/7" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/8" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/9" width="300" height="200"></p>
            <p><img data-src="http://lorempixel.com/300/200/nature/10" width="300" height="200"></p>
        </div>
    </div>
    <script src="../../heard/js/lib/jquery.hoverIntent.js"></script>
    <script src="../../heard/js/lib/jquery.cluetip.js"></script>

    <script src="../../heard/js/lib/underscore-min.js"></script>
    <script src="../../heard/js/functions-test.js"></script>

     <script src="../../heard/js/ourteam/index-test.js"></script>
     <script>
    $(window).on('ajaxComplete', function() {
        setTimeout(function() {
            $(window).lazyLoadXT();
        }, 50);
    });
    </script>
</body>
</html>