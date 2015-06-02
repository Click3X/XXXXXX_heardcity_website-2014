/*! flexnav https://github.com/indyplanets/flexnav http://unlicense.org/ 2013-11-28 */
!function(){var a;a=jQuery,a.fn.flexNav=function(b){var c,d,e,f,g,h,i,j,k,l,m,n;return k=a.extend({animationSpeed:250,transitionOpacity:!0,buttonSelector:".menu-button",hoverIntent:!1,hoverIntentTimeout:150,calcItemWidths:!1,hover:!0},b),c=a(this),c.addClass("with-js"),k.transitionOpacity===!0&&c.addClass("opacity"),c.find("li").each(function(){return a(this).has("ul").length?a(this).addClass("item-with-ul").find("ul").hide():void 0}),k.calcItemWidths===!0&&(d=c.find(">li"),f=d.length,h=100/f,g=h+"%"),c.data("breakpoint")&&(e=c.data("breakpoint")),l=function(){return c.hasClass("lg-screen")===!0&&k.hover===!0?k.transitionOpacity===!0?a(this).find(">ul").addClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"],opacity:"toggle"},k.animationSpeed):a(this).find(">ul").addClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"]},k.animationSpeed):void 0},i=function(){return c.hasClass("lg-screen")===!0&&a(this).find(">ul").hasClass("flexnav-show")===!0&&k.hover===!0?k.transitionOpacity===!0?a(this).find(">ul").removeClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"],opacity:"toggle"},k.animationSpeed):a(this).find(">ul").removeClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"]},k.animationSpeed):void 0},j=function(){var b;if(a(window).width()<=e)return c.removeClass("lg-screen").addClass("sm-screen"),k.calcItemWidths===!0&&d.css("width","100%"),b=k.buttonSelector+", "+k.buttonSelector+" .touch-button",a(b).removeClass("active"),a(".one-page li a").on("click",function(){return c.removeClass("flexnav-show")});if(a(window).width()>e){if(c.removeClass("sm-screen").addClass("lg-screen"),k.calcItemWidths===!0&&d.css("width",g),c.removeClass("flexnav-show").find(".item-with-ul").on(),a(".item-with-ul").find("ul").removeClass("flexnav-show"),i(),k.hoverIntent===!0)return a(".item-with-ul").hoverIntent({over:l,out:i,timeout:k.hoverIntentTimeout});if(k.hoverIntent===!1)return a(".item-with-ul").on("mouseenter",l).on("mouseleave",i)}},a(k.buttonSelector).data("navEl",c),n=".item-with-ul, "+k.buttonSelector,a(n).append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'),m=k.buttonSelector+", "+k.buttonSelector+" .touch-button",a(m).on("click",function(b){var c,d,e;return a(m).toggleClass("active"),b.preventDefault(),b.stopPropagation(),e=k.buttonSelector,c=a(this).is(e)?a(this):a(this).parent(e),d=c.data("navEl"),d.toggleClass("flexnav-show")}),a(".touch-button").on("click",function(){var b,d;return b=a(this).parent(".item-with-ul").find(">ul"),d=a(this).parent(".item-with-ul").find(">span.touch-button"),c.hasClass("lg-screen")===!0&&a(this).parent(".item-with-ul").siblings().find("ul.flexnav-show").removeClass("flexnav-show").hide(),b.hasClass("flexnav-show")===!0?(b.removeClass("flexnav-show").slideUp(k.animationSpeed),d.removeClass("active")):b.hasClass("flexnav-show")===!1?(b.addClass("flexnav-show").slideDown(k.animationSpeed),d.addClass("active")):void 0}),c.find(".item-with-ul *").focus(function(){return a(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide(),a(this).parent(".item-with-ul").find(">ul").addClass("open").show()}),j(),a(window).on("resize",j)}}.call(this);
/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/

//   START CODE // 

var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 250
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];

	// Register deferred callbacks
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}

		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}

	function imgLoaded( img, isBroken ) {
		// don't proceed if BLANK image, or image is already loaded
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}

		// store element in loaded images array
		loaded.push( img );

		// keep track of broken and properly loaded images
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}

		// cache image and its state for future calls
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

		// trigger deferred progress method if present
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}

		// call doneLoading and clean listeners if all images are loaded
		if ( $images.length === loaded.length ){
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded' );
		}
	}

	// if no images, trigger immediately
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
			// trigger imgLoaded
			imgLoaded( event.target, event.type === 'error' );
		}).each( function( i, el ) {
			var src = el.src;

			// find out if this image has been already checked for status
			// if it was, and src has not changed, call imgLoaded on it
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}

			// if complete is true and browser supports natural sizes, try
			// to check for image status manually
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}

			// cached images don't fire load sometimes, so we reset src, but only when
			// dealing with IE, or image is complete (loaded) and failed manual check
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				el.src = src;
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};


////////////////////////  --- START GRID FUNCTIONS ---  /////////////////////////////

var Grid = (function() {

		// list of items
	var $grid = $( '#og-grid' ),
		// the items
		$items = $grid.children( 'li' ),
		// current expanded item's index
		current = -1,
		// position (top) of the expanded item
		// used to know if the preview will expand in a different row
		previewPos = -1,
		// extra amount of pixels to scroll the window
		scrollExtra = 0,
		// extra margin when expanded (between preview overlay and the next items)
		marginExpanded = 0,
		$window = $( window ), winsize,
		$body = $( 'html, body' ),
		// transitionend events
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support for csstransitions
		support = Modernizr.csstransitions,
		// default settings
		settings = {
			minHeight : 350,
			speed : 350,
			easing : 'ease'
		};

	function init( config ) {
		
		// the settings..
		settings = $.extend( true, {}, settings, config );

		// preload all images
		$grid.imagesLoaded( function() {

			// save item´s size and offset
			saveItemInfo( true );
			// get window´s size
			getWinSize();
			// initialize some events
			initEvents();

		} );

	}

	// add more items to the grid.
	// the new items need to appended to the grid.
	// after that call Grid.addItems(theItems);
	function addItems( $newitems ) {

		$items = $items.add( $newitems );

		$newitems.each( function() {
			var $item = $( this );
			$item.data( {
				offsetTop : $item.offset().top,
				height : $item.height()
			} );
		} );

		initItemsEvents( $newitems );

	}

	// saves the item´s offset top and height (if saveheight is true)
	function saveItemInfo( saveheight ) {
		$items.each( function() {
			var $item = $( this );
			$item.data( 'offsetTop', $item.offset().top );
			if( saveheight ) {
				$item.data( 'height', $item.height() );
				// console.log('This is the height: ' + $item.height() );
				// console.log('This is the offset top: ' + $item.offset().top );
			}
		} );
	}

	function initEvents() {
		
		// when clicking an item, show the preview with the item´s info and large image.
		// close the item if already expanded.
		// also close if clicking on the item´s cross
		initItemsEvents( $items );
		
		// on window resize get the window´s size again
		// reset some values..
		$window.on( 'debouncedresize', function() {
			
			scrollExtra = 0;
			previewPos = -1;
			// save item´s offset
			saveItemInfo();
			getWinSize();
			var preview = $.data( this, 'preview' );
			if( typeof preview != 'undefined' ) {
				hidePreview();
			}

		} );

	}

	function initItemsEvents( $items ) {
		$items.on( 'click', 'span.og-close', function() {
			hidePreview();
			return false;
		} ).children( 'a' ).on( 'click', function(e) {

			var $item = $( this ).parent();
			// console.log('this is item' + $item); console.log($item);

			// check if item already opened
			current === $item.index() ? hidePreview() : showPreview( $item );
			return false;

		} );
	}

	function getWinSize() {
		winsize = { width : $window.width(), height : $window.height() };
	}

	function showPreview( $item ) {

		var preview = $.data( this, 'preview' ),
			// item´s offset top
			position = $item.data( 'offsetTop' );
			// console.log('THis is position: ' + position);
			// console.log('Thisis previewPos: ' + previewPos);

		scrollExtra = 0;

		// if a preview exists and previewPos is different (different row) from item´s top then close it
		if( typeof preview != 'undefined' ) {

			// not in the same row
			if( previewPos !== position ) {
				// if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
				if( position > previewPos ) {
					scrollExtra = preview.height;
				}
				hidePreview();
			}
			// same row
			else {
				preview.update( $item );
				return false;
			}
			
		}

		// update previewPos
		previewPos = position;
		// initialize new preview for the clicked item
		preview = $.data( this, 'preview', new Preview( $item ) );
		// expand preview overlay
		preview.open();

	}

	function hidePreview() {
		current = -1;
		var preview = $.data( this, 'preview' );
		preview.close();
		$.removeData( this, 'preview' );
	}

	// the preview obj / overlay
	function Preview( $item ) {
		this.$item = $item;
		this.expandedIdx = this.$item.index();
		this.create();
		this.update();
	}

	Preview.prototype = {
		create : function() {
			// create Preview structure:
			this.$title = $( '<li class="p-name"></li>' );

			this.$videoTagFile = $('<source src="" type="video/mp4" />');
			this.$videoTag = $('<video controls class="feat-video" poster=""></video>');
			this.$videoTag.append(this.$videoTagFile);

			this.$vidOgg = $('<source src="" type="video/ogg" />');
			this.$videoTag.append(this.$vidOgg);

			this.$director = $('<span class="p-director"></span>');
			this.$directorList = $('<li class="p-director"><span class="bold">Directed by: </span></li>').append(this.$director);
			
			this.$mixer = $('<span class="p-mixer"></span>');
			this.$mixerList = $('<li><span class="bold">Mixed by: </span><span class="p-mixer"></span></li>').append(this.$mixer);
			
			this.$agency = $('<span class="p-agency"></span>');
			this.$agencyList = $('<li class="p-agency"><span class="bold">Agency: </span></li>').append(this.$agency);
		
			this.$client = $('<span class="p-client"></span>');
			this.$clientList = $('<li class="p-client"><span class="bold">Client: </span></li>').append(this.$client);

			this.$projectInfo = $('<ul class="credits"></ul>').append(this.$title, this.$clientList, this.$agencyList, this.$directorList ); //this.$mixerList,

			this.$sectionTitle = $('<div class="section-title grey-theme"><div class="noise"></div></div>').append(this.$projectInfo);
			this.$details = $( '<div class="og-details"></div>' );
			this.$fullimage = $( '<div class="og-fullimg"></div>' ).append( this.$videoTag, this.$sectionTitle ); // , this.$credits 
			this.$closePreview = $( '<span class="og-close"></span>' );
			this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
			this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
			// append preview element to the item
			this.$item.append( this.getEl() );
			// set the transitions for the preview and the item
			if( support ) {
				this.setTransition();
			}
		},
		update : function( $item ) {

			if( $item ) {
				this.$item = $item;
			}
			
			// if already expanded remove class "og-expanded" from current item and add it to new item
			if( current !== -1 ) {
				var $currentItem = $items.eq( current );
				$currentItem.removeClass( 'og-expanded' );
				this.$item.addClass( 'og-expanded' );
				// position the preview correctly
				this.positionPreview();
			}

			// update current value
			current = this.$item.index();

			// update preview´s content
			var $itemEl = this.$item.children( 'a' ),
				eldata = {
					href : $itemEl.attr( 'href' ),
					title : $itemEl.data( 'title' ),
					mp4: $itemEl.data( 'mp4' ),
					director: $itemEl.data( 'director' ),
					mixer: $itemEl.data( 'mixer' ),
					poster: $itemEl.data( 'poster' ),
					agency: $itemEl.data( 'agency' ),
					client: $itemEl.data( 'client' )
				};

			this.$title.html( eldata.title );

			// Charles new data attributes
			var newOgg = eldata.mp4;
			newOgg = newOgg.replace('mp4', 'ogv');
			this.$vidOgg.attr('src', newOgg);
			this.$videoTagFile.attr('src', eldata.mp4);
			this.$videoTag.attr('poster', eldata.poster);
			this.$director.html( eldata.director );
			this.$mixer.html( eldata.mixer );
			this.$agency.html( eldata.agency );
			this.$client.html( eldata.client );


			if(!eldata.director) {
				$(this.$directorList[0]).hide();
				// console.log('there is director: ' + eldata.director);
			}

			if(!eldata.agency) {
				$(this.$agencyList[0]).hide();

			}
			

			var self = this;
			
			// remove the current image in the preview
			

			// if( typeof self.$largeImg != 'undefined' ) {
			// 	self.$largeImg.remove();
			// }
			
			// preload large image and add it to the preview
			// for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)

			// if( self.$fullimage.is( ':visible' ) ) {
			// 	this.$loading.show();
			// 	$( '<img/>' ).load( function() {
			// 		var $img = $( this );
			// 		if( $img.attr( 'src' ) === self.$item.children('a').data( 'largesrc' ) ) {
			// 			self.$loading.hide();
			// 			self.$fullimage.find( 'img' ).remove();
			// 			self.$largeImg = $img.fadeIn( 350 );
			// 			self.$fullimage.append( self.$largeImg );
			// 		}
			// 	} ).attr( 'src', eldata.largesrc );	
			// }

		},
		open : function() {

			setTimeout( $.proxy( function() {
				// set the height for the preview and the item
				this.setHeights();
				// scroll to position the preview in the right place
				this.positionPreview();
			}, this ), 25 );

		},
		close : function() {

			var self = this,
				onEndFn = function() {
					if( support ) {
						$( this ).off( transEndEventName );
					}
					self.$item.removeClass( 'og-expanded' );
					self.$previewEl.remove();
				};

			setTimeout( $.proxy( function() {

				if( typeof this.$largeImg !== 'undefined' ) {
					this.$largeImg.fadeOut( 'fast' );
				}
				this.$previewEl.css( 'height', 0 );
				// the current expanded item (might be different from this.$item)
				var $expandedItem = $items.eq( this.expandedIdx );
				$expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

				if( !support ) {
					onEndFn.call();
				}

			}, this ), 25 );
			
			return false;

		},
		calcHeight : function() {

			var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
				itemHeight = winsize.height;

			if( heightPreview < settings.minHeight ) {
				heightPreview = settings.minHeight;
				itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
			}

			this.height = heightPreview;
			this.itemHeight = itemHeight;

		},
		setHeights : function() {

			var self = this,
				onEndFn = function() {
					if( support ) {
						self.$item.off( transEndEventName );
					}
					self.$item.addClass( 'og-expanded' );
				};

			this.calcHeight();
			this.$previewEl.css( 'height', this.height + 190 );
			this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

			if( !support ) {
				onEndFn.call();
			}

		},
		positionPreview : function() {

			// scroll page
			// case 1 : preview height + item height fits in window´s height
			// case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
			// case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
			var position = this.$item.data( 'offsetTop' ),
				previewOffsetT = this.$previewEl.offset().top - scrollExtra,
				scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;
			
			$body.animate( { scrollTop : scrollVal }, settings.speed );

		},
		setTransition  : function() {
			this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
			this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
		},
		getEl : function() {
			return this.$previewEl;
		}
	}

	return { 
		init : init,
		addItems : addItems
	};

})();
// Click events for Features and Commercials buttons
// These are currently not working as intended and are breaking the layout
// in a few places when clicked

var featuresBtn = $('#features-btn'),
features = $('.feature'),
commercials = $('.commercial'),
allBtn = $('#all-btn'),
all = $('.feature, .commercial'),
commercialsBtn = $('#commercials-btn');

featuresBtn.click(function() {

    features.show().removeClass('project-hidden');
    commercials.addClass('project-hidden').hide();
    $('.selected-button').removeClass('selected-button');
    
    var buttonHolder = $( this ).parent().parent();
    buttonHolder.addClass('selected-button');

});

commercialsBtn.click(function() {

    commercials.show().removeClass('project-hidden');
    features.addClass('project-hidden').hide();
    $('.selected-button').removeClass('selected-button');

    var buttonHolder = $( this ).parent().parent();
    buttonHolder.addClass('selected-button');
});

allBtn.click(function() {

    all.show().removeClass('project-hidden');
    $('.selected-button').removeClass('selected-button');

    var buttonHolder = $( this ).parent().parent();
    var buttonHolder = $( this ).parent().parent();
    buttonHolder.addClass('selected-button');
    $('.features-commercial .button-holder').addClass('selected-button');

});
$(function() {

    // TEST FOR MOBILE DEVICE / TABLET
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        device = 'mobile';
    } else {
        device = 'desk';
    }

    
    var $body = $('body'),
        $mainMenu = $("#page-fixed");

    $body.addClass(device);

    $('#page-title').text('Projects');
    $('#page-projects').addClass('mobile-hidden current');


    // INITIALIZE MENU
    $mainMenu.flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });

    // HASH on CLICK
    $("#og-grid a").click(function(e) {
        window.location.hash = $(this).attr("id");
        e.preventDefault();
    });

    // INITIANLIZE GRID
    $(function() {
         Grid.init();

         if(selectedProject) {
            setTimeout(function() {
                var target = '#'+selectedProject;
                var parent = $(target).parent();
                // parent.addClass('og-expanded');
                $(target).click();

            }, 100);
           
        }

    });
       

});