// Contact Page Javascript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "maps": "//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"
    },
   "shim": {
      "util/helper": ["jquery"],
      "bootstrap.min": ["jquery"],
      "lib/bootstrap.min": ["jquery"],
      "util/google-map": ["maps"]
    }
});

// Load the main app module to start the app
requirejs(["app/contact"]);