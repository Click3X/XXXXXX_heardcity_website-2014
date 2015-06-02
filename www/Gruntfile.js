module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    // HOME
                    // 'js/*.js', // All JS in the libs folder
                    // 'js/home/setup.js',  // This specific file
                    // 'js/lib/jquery.unveil.min.js',
                    // 'js/lib/jquery.flexnav.min.js',
                    // 'js/lib/jquery.easing-1.3.js',
                    // 'js/lib/jquery.royalslider.min.js',
                    // 'js/home/setup.js'
                    // OURTEAM
                    // 'js/lib/underscore-min.js',
                    // 'js/lib/jquery.flexnav.min.js',
                    // 'js/lib/jquery.unveil.min.js',
                    // 'js/lib/jquery.cluetip.js',
                    // 'js/lib/jquery.hoverIntent.js',
                    // 'js/object.js',
                    // 'js/object-events.js',
                    // 'js/setup.js'
                    // PROJECTS
                    'js/lib/jquery.flexnav.min.js',
                    'js/projects/grid.js',
                    'js/projects/feat-button.js',
                    'js/projects/projects-setup.js'
                    // CONTACT
                    // 'js/lib/jquery.flexnav.min.js',
                    // 'js/contact/setup.js'

                ],
                // dest: 'js/build/home-production.js',
                // dest: 'js/build/ourteam-production.js'
                dest: 'js/build/projects-production.js',
                // dest: 'js/build/contact-production.js'
            }
        },
        uglify: {
            build: {
                // src: 'js/build/home-production.js',
                // dest: 'js/build/home-production.min.js'
                // src: 'js/build/ourteam-production.js',
                // dest: 'js/build/ourteam-production.min.js'
                src: 'js/build/projects-production.js',
                dest: 'js/build/projects-production.min.js'
                // src: 'js/build/contact-production.js',
                // dest: 'js/build/contact-production.min.js'
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);

};