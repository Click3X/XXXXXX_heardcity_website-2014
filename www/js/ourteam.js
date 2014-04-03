requirejs.config({
    // "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "flexnav":"jquery.flexnav.min",
      "clue-tip":"jquery.cluetip",
      "hover":"jquery.hoverIntent",
      "unveil":"jquery.unveil.min"
    },
    "shim": {
    	"flexnav":["jquery"],
	    "util/config": ["jquery"],
      "controller/team-member-factory":["jquery", "util/config"],
      "hover":["jquery"],
      "clue-tip": ["jquery", "controller/team-member-factory"],
      "util/clue-hover": ["jquery", "controller/team-member-factory", "clue-tip", "hover"],
      "unveil":["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/ourteam"]);
