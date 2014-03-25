<?php // HEADER PHP
include('config.php');
include('functions.php'); 
?>

<!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width">

<title>SlickNav Demo - Responsive Mobile Nav Plugin for jQuery</title>

<style>

        .slicknav_menu {
            display:none;
        }

        @media screen and (max-width: 40em) {
            .js #menu {
                display:none;
            }
            
            .js .slicknav_menu {
                display:block;
            }
        }
        </style>
        <link rel="stylesheet" href="stylesheets/vendor/slicknav.css" />

<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
</head>
<body>