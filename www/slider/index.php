<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<link rel="stylesheet" href="royalslider/royalslider.css"></link>
<link rel="stylesheet" href="royalslider/minimal-white/rs-minimal-white.css"></link>
<script src="js/jquery-1.8.2.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.easing-1.3.js" type="text/javascript" charset="utf-8"></script>

<script src="royalslider/jquery.royalslider.custom.min.js" type="text/javascript" charset="utf-8"></script>
<script src="jwplayer/jwplayer.js" type="text/javascript" ></script>
</head>

<body>




  <div class="royalSlider rsMinW">
    <div class="rsContent">
      <a class="rsImg" data-rsVideo="movies/jgpearslogo.mp4" href="fff.png"></a>  
    </div>

    <div class="rsContent">
      <a class="rsImg" data-rsVideo="movies/jgpearslogo.mp4" href="fff.png"></a>  
    </div>
        
    <div class="rsContent">
    SLIDE 3
    </div>
 </div>





<script type="text/javascript">
  
</script>

<script type="text/javascript">
  var slider = $('.royalSlider').royalSlider({
    // options...
	        keyboardNavEnabled: true,
			navigateByClick: false,
			sliderDrag: false,
      imageScaleMode: 'fill'
}).data('royalSlider');
   
   				          
   slider.ev.on('rsOnCreateVideoElement', function(e, url) 
    {    
	    // url - path to video from data-rsVideo attribute
        // slider.videoObj - jQuery object that holds video HTML code
        // slider.videoObj must be IFRAME, VIDEO or EMBED element, or have class rsVideoObj
        slider.videoObj = $('<div id="mediaplayer" class="rsVideoObj">Loading the player ...</div>');
      setTimeout(function() {
        jwplayer('mediaplayer').setup({
          'flashplayer': 'jwplayer/player.swf',
          'id': 'playerID',
          'width': '100%',
          'height': '100%',
          "autoplay": true,
          'file': url,
          'viral.onpause': false,
          'controlbar.idlehide':true,
          'stretching': 'exactfit',    
        });  
      }, 50);
});

</script>

</body>
</html>
