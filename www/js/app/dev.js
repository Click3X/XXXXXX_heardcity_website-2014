define(["jquery", "util/helper", "bootstrap.min", "util/team-member-form", "util/carousel", "util/request-anim", "util/loader"], function($) {

    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');

        // Toggle helper * DELETE FOR PRODUCTION
        docBody.helper();

    });

});