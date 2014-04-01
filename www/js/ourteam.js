requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "domReady": "domReady",
      "flexnav":"jquery.flexnav.min",
      // "imgpre":"jquery.preloader",
      // "_":"underscore-min",
      "clue-tip":"jquery.cluetip",
      "hover":"jquery.hoverIntent"
    },
    "shim": {
      // "_":["jquery"],
    	"flexnav":["jquery"],
      // "imgpre":['jquery'],
      "util/jquery.menu": ["jquery", "flexnav", "util/config"],
      "util/jquery.sub-menu": ["jquery", "flexnav", "util/config"],
      // "util/preloader": ["jquery", "util/config", "util/dom-variables", "imgpre"],
	    "util/config": ["jquery"],
      "util/team-member-json":["jquery", "util/config"],
      // "controller/screen-debounce": ["jquery"],
      "util/side-bar": ["jquery", "util/config", "controller/team-member-factory"],
      "hover":["jquery"],
      "clue-tip": ["jquery", "controller/team-member-factory"],
      "util/clue-hover": ["jquery", "controller/team-member-factory", "clue-tip", "hover"]
    }
});

// Load the main app module to start the app
requirejs(["app/ourteam"]);
