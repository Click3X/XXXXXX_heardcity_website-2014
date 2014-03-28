// Home Page Javascript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      // "owl-carousel": "../lib/owl.carousel.min",
      "load-images": "../lib/loaded",
      "rs-easing": "../lib/jquery.easing-1.3",
      "royalslider": "../lib/jquery.royalslider.min"
    },
    "shim": {
        "util/helper": ["jquery"],
        "bootstrap.min": ["jquery"],
        "util/sticky-nav": ["jquery"],
        // "owl-carousel": ["jquery"],
        "load-images": ["jquery"],
        "rs-easing": ["jquery"],
        "royalslider": ["jquery", "rs-easing"],
        "util/carousel":["royalslider"],
        "util/loader":["load-images"],
        "util/parallax":["jquery"],
        "util/team-member-form":["jquery"],
        "util/build-marquee":["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/home"]);