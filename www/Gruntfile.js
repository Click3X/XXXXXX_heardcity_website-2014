module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    // 'js/*.js', // All JS in the libs folder
                    // 'js/home/setup.js'  // This specific file
                    'js/lib/jquery.unveil.min.js',
                    'js/lib/jquery.flexnav.min.js',
                    'js/lib/jquery.easing-1.3.js',
                    'js/lib/jquery.royalslider.min.js',
                    'js/home/setup.js'
                ],
                dest: 'js/build/production.js',
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);

};