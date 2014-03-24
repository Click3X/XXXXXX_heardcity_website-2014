// Home Page Javascript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "owl-carousel": "../lib/owl.carousel.min",
       "load-images": "../lib/loaded"
      // "gasp":"http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min",
      // "scroll-magic":"../../scrollmagic/js/jquery.scrollmagic.min",
      // "debug":"../../scrollmagic/js/jquery.scrollmagic.debug"
    },
    "shim": {
        "util/helper": ["jquery"],
        "bootstrap.min": ["jquery"],
        "owl-carousel": ["jquery"],
        "util/carousel":["owl-carousel"],
        "util/team-member-form":["jquery"],
        "util/sticky-nav":["jquery"],
        "util/loader":["load-images"],
        // "scroll-magic":["jquery", "gasp"],
        // "debug":["jquery", "gasp"],
        "util/new-parallax":["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/dev"]);