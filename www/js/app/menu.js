define(["jquery", "util/helper",  "util/new-nav"], function($) {

    $(function() {
        var docBody = $('body'),
        home = docBody.hasClass('home');

        // Toggle helper * DELETE FOR PRODUCTION
        docBody.helper();

        $('#menu').slicknav();
    });

});