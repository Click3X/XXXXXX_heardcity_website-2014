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
      "modern":"../lib/modernizr",
      "flexnav":"jquery.flexnav.min"
    },
    "shim": {
      "flexnav":["jquery"],
        "util/jquery.menu": ["jquery", "flexnav", "util/config"],
        "util/config": ["jquery"],
        "util/grid": ["jquery", "modern"],
        "util/feat-button": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/projects"]);
