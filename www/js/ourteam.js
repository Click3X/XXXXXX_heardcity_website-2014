// Our Team Page Javasript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "in-view": "../lib/in-view"
      // "hilight": "../lib/jquery.maphilight.min",
      // "qtip": "../lib/qtip/jquery.qtip.min",
    },
   "shim": {
      "util/helper": ["jquery"],
      "bootstrap.min": ["jquery"],
      "lib/bootstrap.min": ["jquery"],
      "in-view": ["jquery"],
      // "hilight": ["jquery"],
      // "qtip": ["jquery"],
      "util/side-bar": ["jquery"],
      "util/team-members-json": ["jquery"],
      "util/map-links": ["jquery", "util/team-members-json"]
    }
});

// Load the main app module to start the app
requirejs(["app/ourteam"]);