// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // Major libraries
    jquery: '../libs/jquery/jquery-min',
	jquerymobile: '../libs/jquery-mobile/jquery.mobile-1.0.1.min',
	mordernizr: '../libs/mordernizr/modernizr-2.5.2.custom',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone-min',
	iscroll: '../libs/iscroll/iscroll',
	preloadjs: '../libs/createjs/preloadjs-0.1.0.min',
	mobileinit  : 'mobile-init',
	pageparser : '../libs/helpers/page-parser'
  }
});

require(['jquery', 'preloadjs',  'jquerymobile', 'pageparser', 'mobileinit',  'mordernizr', 'iscroll', 'underscore', 'backbone'], function(){
	
});
