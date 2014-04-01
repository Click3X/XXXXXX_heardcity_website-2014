// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "royalslider": "jquery.royalslider.min",
      "flexnav":"jquery.flexnav.min"
    },
    "shim": {
    	"flexnav":["jquery"],
      "jquery.easing-1.3":["jquery"],
    	"royalslider": ["jquery", "jquery.easing-1.3"],
		  "util/config": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
