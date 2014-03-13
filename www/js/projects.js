// Project Page Javasript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "modern":"../lib/modernizr"
    },
   "shim": {
      "util/helper": ["jquery"],
      "bootstrap.min": ["jquery"],
      "lib/bootstrap.min": ["jquery"],
      "util/grid": ["jquery"],
      "util/feat-button": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/projects"]);