// Project Page Javasript

requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "modern":"../lib/modernizr"
    },
   "shim": {
      "util/helper": ["jquery"],
      "util/nav": ["jquery"],
      "util/grid": ["jquery"],
      "util/feat-button": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/projects"]);