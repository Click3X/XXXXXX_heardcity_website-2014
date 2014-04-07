requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "flexnav":"jquery.flexnav.min",
      "clue-tip":"jquery.cluetip",
      "hover":"jquery.hoverIntent",
      "unveil":"jquery.unveil.min",
      "hashchange":"jquery.ba-hashchange.min"
    },
    "shim": {
      "flexnav":["jquery"],
      "util/config": ["jquery"],
      "controller/team-member-factory":["jquery", "util/config"],
      "hover":["jquery"],
      // "clue-tip": ["jquery", "controller/team-member-factory"],
      "clue-tip": ["jquery"],
      // "util/clue-hover": ["jquery", "controller/team-member-factory", "clue-tip", "hover"],
      "util/clue-hover": ["jquery", "clue-tip"],
      "unveil":["jquery"],
      "jquery.browser":["jquery"],
      "hashchange":["jquery", "jquery.browser"]
    }
});

// Load the main app module to start the app
requirejs(["app/deeplink"]);
