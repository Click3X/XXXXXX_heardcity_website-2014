$(document).ready(function() {
    var $mMenu = $("#mmenu");
        // HEADER MENU OPEN CLOSE
    $mMenu.hide();
    $(".mtoggle").click(function() {
        $mMenu.slideToggle(200);
    });

    $('#mmenu a').click(function() {
        var target = $(this).attr('href');
        target = target.substr(1);
        console.log('This is your target: ' + target);
        $('#page-title').text(target);

        $mMenu.slideToggle(200);
    });

});


$( document ).on( "pagecreate", "#page1", function() {

    // SWITCH PAGE TITLE
    $('#page-title').text('Projects');
    // $('#mmenu li').show();
    // $('#page-ourteam').hide();

  

});



$(document).on('pageshow', '.ui-page', function() {
  $('#page1 .container').infiniteScrollHelper({
    loadMore: function(page, done) {
      // use the page argument to find the next page to load.
      // This assumes you have a list of links somewhere on the
      // page for your html pagination
          
      // jQuery eq filter is 0 based so we have to minus 1 from
      // page to get the 0 based page to load
      var url = $('.pagination a').eq(page - 1).attr('href');
      // now we have the url to the next page of data

      $.get(url, function(data) {
        // data will be the raw html from the url you just
        // requested.
        // you can do what you need to with it, perhaps pull out
        // just what you need and insert it into .container

        // alert(data);
            
        $(data).find(".article").appendTo('.container');
            
        // now call the done callback to let the plugin know
        // you are done loading
        done();
      });
    }
  });
});