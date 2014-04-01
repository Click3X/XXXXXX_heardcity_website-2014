$.fn.sliders = function() {

    // SLIDERS
	function imgSlider(elem) {
		$(elem).royalSlider({
		    autoHeight: true,
		    arrowsNav: true,
		    arrowsNavAutoHide:false,
		    fadeinLoadedSlide: false,
		    controlNavigationSpacing: 0,
		    controlNavigation: 'none',
		    imageScaleMode: 'none',
		    imageAlignCenter:false,
		    slidesSpacing:0,
		    loop: true,
		    loopRewind:false,
		    numImagesToPreload: 6,
		    keyboardNavEnabled: true,
		    usePreloader: false
		});
	}

	function textSlider(elem) {
		$(elem).royalSlider({
		    arrowsNavAutoHide:false,
		    autoHeight: true,
		    arrowsNav: true,
		    arrowsNavAutoHide:false,
		    fadeinLoadedSlide: false,
		    controlNavigationSpacing: 0,
		    slidesSpacing:0,
		    controlNavigation: 'none',
		    imageScaleMode: 'none',
		    imageAlignCenter:false,
		    loop: true,
		    loopRewind:false,
		    keyboardNavEnabled: true,
		    usePreloader: false
		});
	}


	 function buildImgs(marqueeSlides) {
	    var holder = $('<ul/>', {
	        id: 'marquee-slider',
	        class: 'royalSlider contentSlider rsDefault ab-hidden'
	    });
	    // APPEND SLIDES TO  MARQUEE
	    marqueeSlides.forEach(function(slide) {
			var imgSplit = slide.split('/');
			var imgId = imgSplit.pop();
			imgId = imgId.split('-');
			imgId = imgId[0] + '-' + imgId[1];

			var li = $('<li/>', {
				id: imgId,
				class: 'marquee-slide'
			});

			$(holder).append(li).fadeIn("show");
		});

	    return holder;
	}


	function buildTextSlides(blackTexts) {
	    var firstCon = $('<div/>', {
	        id:"first-container", 
	        class:"black-theme ab-hidden"
	    }),
	    // noise = $('<div/>', {
	    //     class:"noise"
	    // }), 
	    blackTextSlider = $('<ul/>', {
	        id:"black-text-slider", 
	        class:"text-slider black-grad royalSlider contentSlider rsDefault"
	    });

	    blackTexts.forEach(function(blackText) {
	        var li = $('<li/>'),
	        innerSlide = $('<div/>', {
	            class:"inner-slide"
	        }),
	        slideText = $('<div/>', {
	            class:"slide-text"
	        }),
	        p = $('<p/>').text(blackText);

	        slideText.append(p);
	        innerSlide.append(slideText);
	        li.append(innerSlide);
	        blackTextSlider.append(li);
	    });

	    firstCon.append(blackTextSlider).fadeIn("show");

	    return firstCon;
	}

	    // firstCon.append(noise);
	    // firstCon.append(blackTextSlider);
	    // $('body').append(firstCon);

	    //  ACTIVATE ROYAL SLIDER AFTER ATTACHING ELEMENT
	    // $('#black-text-slider').royalSlider({
	    //     arrowsNavAutoHide:false,
	    //     autoHeight: true,
	    //     arrowsNav: true,
	    //     arrowsNavAutoHide:false,
	    //     fadeinLoadedSlide: false,
	    //     controlNavigationSpacing: 0,
	    //     slidesSpacing:0,
	    //     controlNavigation: 'none',
	    //     imageScaleMode: 'none',
	    //     imageAlignCenter:false,
	    //     loop: true,
	    //     loopRewind:false,
	    //     keyboardNavEnabled: true,
	    //     usePreloader: false
	    // });
	// }




	// BUILD RETURN OBJECT
	var sliders = {
		imgSlider:imgSlider,
		textSlider:textSlider,
		buildImgs:buildImgs,
		buildTextSlides:buildTextSlides
	}

	return sliders;

};