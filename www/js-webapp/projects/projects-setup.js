$(function() {

        // TEST FOR MOBILE DEVICE / TABLET
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
            // console.log('this is device' + device);
            // $body.addClass('mobile');
        } else {
            device = 'desk';
            // console.log('this is device' + device);
        }

        
        var $body = $('body'),
            $mainMenu = $("#page-fixed");

        $body.addClass(device);

        $('#page-title').text('Projects');
        $('#page-projects').addClass('mobile-hidden current');

        // window.onload = (function(){
        // HIDE SPINNER
        // $('#ajax-loader').fadeOut(500);

        // INITIALIZE MENU
        $mainMenu.flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#page-button'
        });

        // INITIANLIZE GRID
        $(function() {
             Grid.init();

             if(selectedProject) {
                setTimeout(function() {
                    var target = '#'+selectedProject;
                    var parent = $(target).parent();
                    // parent.addClass('og-expanded');
                    $(target).click();

                }, 100);
               
            }

        });
           
        // CLOSE ON TAP
        // $('.og-close').on("tap", function(event) {
        //     console.log('Touch!')
        // });


            



    });