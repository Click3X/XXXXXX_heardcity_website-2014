// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "modern":"../lib/modernizr",
      "flexnav":"jquery.flexnav.min"
    },
    "shim": {
      "flexnav":["jquery"],
        "util/config": ["jquery"],
        "util/grid": ["jquery", "modern"],
        "util/feat-button": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/projects"]);
