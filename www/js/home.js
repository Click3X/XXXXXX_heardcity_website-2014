// Home Page Javascript

requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      // "gasp": "//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min",
      "owl-carousel": "../lib/owl.carousel.min"
    },
    "shim": {
        "util/helper": ["jquery"],
        "util/nav": ["jquery"],
        "owl-carousel": ["jquery"],
        "util/carousel":["owl-carousel"]
        // "scrollbg": ["gasp"]
    }
});

// Load the main app module to start the app
requirejs(["app/home"]);