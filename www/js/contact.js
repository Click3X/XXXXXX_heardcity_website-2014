// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      // "domReady": "domReady",
      "flexnav":"jquery.flexnav.min"
    },
    "shim": {
    	"flexnav":["jquery"],
		    "util/config": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/contact"]);
