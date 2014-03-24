// Visit http://creative-punch.net for more demos, articles and tutorials

var countImages = $('.preload img').size();

// Select Images from Gallery div
$('.preload').imagesLoaded()
.always( function( instance ) {
  $('#progress-bar').fadeOut(function() {
    $('.preload').fadeIn();
  });
})
.progress( function( instance, image ) {
  if(image.isLoaded) {
    $(image.img).addClass('loaded');
    
    var countLoadedImages = $('.preload img.loaded').size();
    
    var width = new Number(100 * (countLoadedImages / countImages));
    width = width.toFixed(2) + '%';
    
    $('#progress-bar > #progress').css({
      'width' : width
    });
    
    $('#progress-bar > p > span').html(width);
  }
});