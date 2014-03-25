// Our Team Page Javasript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "in-view": "../lib/in-view",
      "clue-tip": "../lib/jquery.cluetip",
      "hover": "../lib/jquery.hoverIntent"
      // "hilight": "../lib/jquery.maphilight.min",
      // "qtip": "../lib/qtip/jquery.qtip.min",
    },
   "shim": {
      "util/helper": ["jquery"],
      "bootstrap.min": ["jquery"],
      "lib/bootstrap.min": ["jquery"],
      "in-view": ["jquery"],
      "clue-tip": ["jquery", "util/team-members-json"],
      "hover": ["jquery", "clue-tip"],
      // "hilight": ["jquery"],
      // "qtip": ["jquery"],
      "util/side-bar": ["jquery"],
      "util/team-members-json": ["jquery"],
      "util/map-links": ["jquery", "util/team-members-json"],
      "util/clue-hover": ["jquery", "util/team-members-json", "clue-tip", "hover"]
    }
});

// Load the main app module to start the app
requirejs(["app/ourteam"]);