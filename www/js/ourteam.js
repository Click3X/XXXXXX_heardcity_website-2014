// Our Team Page Javasript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util"
    },
   "shim": {
      "util/helper": ["jquery"],
      "util/nav": ["jquery"],
      "util/side-bar": ["jquery"],
      "util/team-members-json": ["jquery"],
      "util/map-links": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/ourteam"]);