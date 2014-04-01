// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "domReady": "domReady",
      "royalslider": "jquery.royalslider.min",
      "flexnav":"jquery.flexnav.min"
    },
    "shim": {
    	"flexnav":["jquery"],
    	"royalslider": ["jquery", "jquery.easing-1.3"],
        "util/jquery.slider": ["jquery", "royalslider"],
        "util/jquery.menu": ["jquery", "flexnav", "util/config"],
        "util/jquery.sub-menu": ["jquery", "flexnav", "util/config"],
        // "util/preloader": ["jquery", "util/config"],
        "controller/team-member-factory":["jquery", "util/config"],
        "controller/side-bar":["jquery", "util/config", "controller/team-member-factory"],
        "controller/sub-menu":["jquery", "util/config", "controller/team-member-factory"],
		    "util/config": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/dev"]);
