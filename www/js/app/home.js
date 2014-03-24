define(["jquery", "util/helper", "bootstrap.min", "util/team-member-form", "util/carousel", "util/request-anim"/*, "util/parallax"*/,"util/build-marquee","util/sticky-nav", "util/loader"], function($) {


    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');

        // Toggle helper * DELETE FOR PRODUCTION
        docBody.helper();

    });

});