// Single Team Member Page Javasript

requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util"
    },
   "shim": {
      "util/helper": ["jquery"],
      "util/nav": ["jquery"],
      "util/side-bar": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/single"]);