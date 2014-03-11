define(["jquery", "util/helper", "util/nav", "util/carousel", "util/request-anim", "util/parallax"], function($) {

    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');

        // Toggle Nav
    	docBody.toggleNav();
        // Toggle helper * DELETE FOR PRODUCTION
        docBody.helper();

        // Open nav menu * Find a better solution for this
        $('.navLink').click();

        $('.member-permalink').click( function(e) { 
            e.preventDefault(); 

            var memPerma = $(this);
            var memInput = memPerma[0].firstElementChild;

            console.log('This is memInput'+ memInput ); console.dir(memInput);
            console.log(memInput.value);

            // $('#member-form').submit();
         });

        
    });

});