<!DOCTYPE html>
<html class="ui-mobile">
	<head>
	<base href="http://mobile.dev/">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Heard City Mobile Tests</title>
	
	<link rel="shortcut icon" href="demos/favicon.ico">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.css">
	<link rel="stylesheet" href="demos/_assets/css/jqm-demos.css">

	<style>
	.outline { outline: 1px solid rgba(255, 0, 0, 0.2);}
	.outline-button {position: fixed; z-index: 1000; bottom:100px; left:100px;}
	/* Swipe works with mouse as well but often causes text selection. */
	#demo-page * {
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    -o-user-select: none;
	    user-select: none;
	}
	/* Content styling. */
	dl { font-family: "Times New Roman", Times, serif; padding: 1em; }
	dt { font-size: 2em; font-weight: bold; }
	dt span { font-size: .5em; color: #777; margin-left: .5em; }
	dd { font-size: 1.25em; margin: 1em 0 0; padding-bottom: 1em; border-bottom: 1px solid #eee; }
	.back-btn { float: right; margin: 0 2em 1em 0; }

	nav { position: fixed; width: 100%;}

	#mmenu {
		margin: 0 auto;
		padding: 0;
	}
	#mmenu li,
	#mmenu li a { text-align: center; }

	@media screen and (max-width: 960px) {
	    #nav#full {
	        display:none
	    }
	 
	    nav#mobile {
	        background-color:#111;
	        box-shadow: 0 0 3px 2px rgba(0,0,0,0.3);
	        display:block;
	    }
	 
	    /*
	    Top black bar that holds the toggle button
	    */
	 
	    nav#mobile #toggle-bar {
	        line-height:70px;
	        height:70px;
	    }
	 
	    /*
	    Toggle button #1 ("Menu")
	    */
	 
	    nav#mobile strong a {
	        margin-left:30px;
	        border:1px solid #444;
	        padding:10px;
	    }
	 
	    /*
	    Toggle button #2 ("Navicon")
	    */
	 
	    nav#mobile .navicon {
	        float: left;
	        height: 6px;
	        width: 34px;
	        margin: 20px;
	        border-top: 18px double #FFF;
	        border-bottom: 6px solid #FFF;
	        font-size:0;
	    }
	 
	    /*
	    The dropdown menu
	    */
	 
	    nav#mobile ul li {
	        clear:both;
	        list-style:none;
	    }
	 
	    nav#mobile ul li a {
	        display:inline-block;
	        text-align: center;
	        background-color:#300;
	        text-transform:uppercase;
	        letter-spacing:.2em;
	        margin:2px 0;
	        padding:6px 0 6px 8px;
	    }
	 
	    nav#mobile ul ul {
	        font-size:small;
	    }
	 
	    nav#mobile ul ul li {
	        margin-left:30px;
	    }
	 
	    nav#mobile ul ul a {
	        background-color:#333;
	        padding-left:8px;
	    }
	 
	    nav#mobile ul ul a:before {
	        content: "2192";
	        padding-right:8px;
	    }
	}

	</style>
	
	<script src="external/jquery/jquery.js"></script>
	<script src="demos/_assets/js/"></script>
	<script src="js/"></script>
	<script>
		$(function(){
			$("[data-role='navbar']").navbar();
			$("[data-role='header'], [data-role='footer']").toolbar();
		});
	</script>

	<script>
		$(function() {
			$('<input/>', {'id':'outline','type':'button', 'value':'outline', 'class':'outline-button'}).appendTo('body').click(function() {
				$('*').toggleClass('outline');
			})
		});
	</script>
</head>

<body class="ui-mobile-viewport ui-overlay-a">