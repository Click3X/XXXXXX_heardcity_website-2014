$(document).ready(function () {
	"use strict"
	//indexOf is not supported by IE9>. 
	if (!Array.prototype.indexOf){
	  Array.prototype.indexOf = function(elt /*, from*/){
	    var len = this.length >>> 0;

	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;

	    for (; from < len; from++){
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}
    
    var bgImg = [], img = [], count=0, percentage = 0;
    var animHolder = $('#anim-holder');
    var preloadAnim = $('#preload-anim');

    //Creating loader overlay
    $('<div id="loaderMask"><div id="anim-holder" class="anim-holder preload-anim"><div id="preload-anim" class="sprite-pre_loader20040"></div></div></div>').css({
    	position:"fixed",
    	top:0,
    	bottom:0,
    	left:0,
    	right:0,
        color:'#333333',
    	background:'#fff',
        'z-index':3000
    }).appendTo('body');

    //Searching all elemnts in the page for image
    $('*').filter(function() {

	    var val = $(this).css('background-image').replace(/url\(/g,'').replace(/\)/,'').replace(/"/g,'');
	    var imgVal = $(this).not('script').attr('src');

	    if(val !== 'none' && !/linear-gradient/g.test(val) && bgImg.indexOf(val) === -1){
	    	bgImg.push(val)
	    }

	    if(imgVal !== undefined && img.indexOf(imgVal) === -1){
	    	img.push(imgVal)
	    }

 	});

    var imgArray = bgImg.concat(img); 

    $.each(imgArray, function(i,val){ //Adding load and error event
		$("<img />").attr("src", val).bind("load", function () {
            completeImageLoading();
        });

        $("<img />").attr("src", val).bind("error", function () {
            imgError(this);
        });
    });


    var spritePre, animClass, preloadClass;

    function completeImageLoading(){

        setTimeout(function() {

        	count++;
        	percentage = Math.floor(count / imgArray.length * 100);
            spritePre = 'sprite-pre_loader';
            preloadClass = 20033 + percentage;
            animClass = spritePre + preloadClass.toString();

            console.log('This is your percentage load!: ' + percentage);
        	// $('#loaderMask span').html('<span>'+percentage + '%'+'</span>');
            
            preloadAnim.removeClass (function (index, css) {
                return (css.match (/\bsprite-pre_loader-\S+/g) || []).join(' ');
            }).addClass(animClass);

            console.log('This is animClass: ' + animClass); console.dir(animClass);

        	if(percentage === 100){
        		// $('#loaderMask').html('<span>100%</span>')
        		$('#loaderMask').fadeOut(function(){
        			$('#loaderMask').remove();
                    $('#preload-mask').css('visibility','visible');
        		})
        	}
        }, 200);
    }

    //Error handling
    function imgError (arg) {
    	$('#loaderMask').html("Image failed to load.. Loader quitting..").delay(3000).fadeOut(1000, function(){
    		$('#loaderMask').remove();
    	})
    }
 

});