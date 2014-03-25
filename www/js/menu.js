// Home Page Javascript

requirejs.config({
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "util": "../util",
      "modern":"../lib/modernizr",
       "slickNav":"../lib/jquery.slickNav.min"
    },
    "shim": {
        "util/helper": ["jquery"],
        // "util/team-member-form":["jquery"],
        "slickNav": ["jquery","modern"],
        "util/new-nav": ["jquery", "slickNav"]
    }
});

// Load the main app module to start the app
requirejs(["app/menu"]);