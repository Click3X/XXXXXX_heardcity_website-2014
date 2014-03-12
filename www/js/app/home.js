define(["jquery", "util/helper", "util/nav", "util/team-member-form", "util/carousel", "util/request-anim", "util/parallax"], function($) {

    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');

        // Toggle Nav
    	docBody.toggleNav();
        // Toggle helper * DELETE FOR PRODUCTION
        docBody.helper();

        // Open nav menu * Find a better solution for this
        $('.navLink').click();

    });

});