// Contact Page Javascript

requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "maps": "//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"
    },
   "shim": {
      "util/helper": ["jquery"],
      "util/nav": ["jquery"],
      "util/google-map": ["maps"]
    }
});

// Load the main app module to start the app
requirejs(["app/contact"]);