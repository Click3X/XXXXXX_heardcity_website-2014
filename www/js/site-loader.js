$(document).ready(function () {
	"use strict"

    //Creating loader overlay
    $('<div id="loaderMask"><div id="anim-holder" class="anim-holder preload-anim"><div id="preload-anim" class="sprite-pre_loader20001"></div></div></div>').css({
        position:"fixed",
        top:0,
        bottom:0,
        left:0,
        right:0,
        color:'#333333',
        background:'#fff',
        'z-index':3000
    }).appendTo('body');

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
        setTimeout(function() { 
    		$("<img />").attr("src", val).bind("load", function () {
                completeImageLoading();
            });

            $("<img />").attr("src", val).bind("error", function () {
                imgError(this);
            });
        }, 100 * i);
    });

    var frameCount = 20001;
    var spritePre = 'sprite-pre_loader';
    var finalFrame = 20133;
    var preloadAnim = $('#preload-anim');
    var animHolder = $('#anim-holder');

    function completeImageLoading(){
        // frameCount++;
    	count++;

        frameCount = frameCount + count;

    	percentage = Math.floor(count / imgArray.length * 100);
     //    console.log('This is your percentage load!: ' + percentage);
    	// $('#loaderMask span').text(percentage + '%');

        var preCount = frameCount-1;
        var preCountStr = preCount.toString();
        var countStr = frameCount.toString();
        var preAnimClass = spritePre + preCountStr;
        var animClass = spritePre + countStr;
        // console.log('This is animClass: ' + animClass); console.dir(animClass);
        preloadAnim.removeClass(preAnimClass).addClass(animClass);

    	if(percentage === 100){
    		// $('#loaderMask').html('<span>100%</span>')
    		$('#loaderMask').fadeOut(function(){
    			$('#loaderMask').remove();
                $('#preload-mask').css('visibility','visible');
    		});
            preloadAnim.fadeOut(500);
            animHolder.fadeOut(500);
    	}
    }

    // if(device == 'desk') {
    //     $(function() {
    //         var count = 20001;
    //         var spritePre = 'sprite-pre_loader';
    //         var finalFrame = 20133;
    //         function animPreLoader() {
    //             count++;

    //             if(count > finalFrame - 1) {
    //                 preloadAnim.fadeOut(500);
    //                 animHolder.fadeOut(500);
    //                 $('#body-inner').show(750);
    //                 clearInterval(timeout);
    //             }

    //             var preCount = count-1;
    //             var preCountStr = preCount.toString();
    //             var countStr = count.toString();
    //             var preAnimClass = spritePre + preCountStr;
    //             var animClass = spritePre + countStr;
    //             preloadAnim.removeClass(preAnimClass).addClass(animClass);
    //         }

    //         var timeout = setInterval(animPreLoader, 32);
    //         animPreLoader();
    //     });
    // }
    



    //Error handling
    function imgError (arg) {
    	$('#loaderMask').html("Image failed to load.. Loader quitting..").delay(3000).fadeOut(1000, function(){
    		$('#loaderMask').remove();
    	})
    }
 

});