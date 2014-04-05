// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "waitSeconds": 200,
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "royalslider": "jquery.royalslider.min",
      "flexnav":"jquery.flexnav.min",
      "unveil":"jquery.unveil.min",
      // "preloader":"queryLoader"
      // "spin":"spin"
    },
    "shim": {
      "util/config": ["jquery"],
      "unveil":['jquery'],
    	"flexnav":["jquery"],
      "jquery.easing-1.3":["jquery"],
    	"royalslider": ["jquery", "jquery.easing-1.3"]
      // "preloader":["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
