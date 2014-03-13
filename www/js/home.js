// Home Page Javascript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "owl-carousel": "../lib/owl.carousel.min"
    },
    "shim": {
        "util/helper": ["jquery"],
        "bootstrap.min": ["jquery"],
        "owl-carousel": ["jquery"],
        "util/carousel":["owl-carousel"],
        "util/parallax":["jquery"],
        "util/team-member-form":["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/home"]);