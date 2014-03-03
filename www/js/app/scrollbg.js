(function() {



	// Slide girl on wood
	// var girlWood = $("#girl-wood"),
	// girlWoodHeight = girlWood.outerHeight(),
	// girlWoodOffset = girlWood.offset();
	// var girlWoodTween = new TimelineMax({paused:true});
	// girlWoodTween.append( TweenMax.staggerTo(girlWood, 1, {css:{"transform":"translate3d(-200%, 0, 0)"}}, 0.05) );


	// Dude on Phone
	var dudeOnPhone = $("#dude-on-phone"),
	dudeOnPhoneHeight = dudeOnPhone.outerHeight(),
	dudeOnPhoneOffset = dudeOnPhone.offset();
	var dudeOnPhoneTween = new TimelineMax({paused:true});
	dudeOnPhoneTween.append( TweenMax.staggerTo(dudeOnPhone, 1, {css:{"transform":"translate3d(-255%, 0, 0)"}}, 0.05) );


	// Dog Windows
	var dogWindows = $("#dog-windows"),
	dogWindowsHeight = dogWindows.outerHeight(),
	dogWindowsOffset = dogWindows.offset();
	var dogWindowsTween = new TimelineMax({paused:true});
	dogWindowsTween.append( TweenMax.staggerTo(dogWindows, 1, {css:{"transform":"translate3d(20%, 0, 0)"}}, 0.05) );


	/*************************
	SCROLL BREAKDOWN
	This particular function has a simple work and that is to get the values of several important things to make the scroll
	controlling tween work.
	This function will trigger every time you scroll the window, whether is with the scrollbar, mouse wheel, scrollbar arrows,
	keyboard arrow and page up and page down.

	GETVERT
	The variable getVert is going to return the actual vertical position of the element's scroll bar, in this particular case
	the window element, but making a little change you can make this any DOM element. The most common used elements for this
	are window and div, and keep in mind that there are several scroll plugins and libraries around the internet in order to
	customize a div scroll bar, so you can give it a personal flavor.

	GETHOR
	The variable getHor returns the actual position of the horizontal of the element's scroll bar

	SETTING THE SCROLL POSITION
	If you are interested in setting the scroll position you can use Jack's ScrollToPlugin.
	*************************/
	$(window).scroll(function()
	{
		var getVert = $(this).scrollTop();
		console.log(getVert);
		var getHor = $(this).scrollLeft();

		var innerHeight = window.innerHeight;
			
		function scrollTween(startPoint, endPoint, tweenName, type)	
		{
			var progressNumber;
			if(type == 'vertical')
			{
				progressNumber = (1 / (endPoint - startPoint)) * (getVert - startPoint);
			}
			else if (type == 'horizontal')
			{
				progressNumber = (1 / (endPoint - startPoint)) * (getHor - startPoint);
			}
			if (progressNumber >= 0 && progressNumber <= 1)
			{
				tweenName.progress(progressNumber);
			}
			else if(progressNumber < 0)
			{
				tweenName.progress(0);
			}
			else if(progressNumber > 1)
			{
				tweenName.progress(1);
			}
		}

		// Tween top Home.Slide
		// scrollTween(0, slideHeight, logoSlideTween, 'vertical');
		
		scrollTween(dudeOnPhoneOffset.top + dudeOnPhoneHeight, dudeOnPhoneHeight, dudeOnPhoneTween, 'vertical');

		scrollTween(dogWindowsOffset.top + dogWindowsHeight, dogWindowsHeight, dogWindowsTween, 'vertical');

	//	scrollTween(girlWoodOffset.top + girlWoodHeight, girlWoodHeight, girlWoodTween, 'vertical');

		/*********************
		SCROLLTWEEN FUNCTION BREAKDOWN
		This is quite simple, the function works for both vertical and horizontal scrolling and needs 4 arguments to work.
		
		START
		The first argument is the start point, you can set this by a number but i strongly suggest to set it with the offset.top or offset.left
		property of an object (http://api.jquery.com/offset/), otherwise you are going to loose a lot of time seting up this point.
		
		END
		The second argument works just like start, and i suggest you use the offset property of an object to set this.
		
		TWEEN
		Remember the first comment in this file, this is where the name of the variable comes in handy, you create your Tween
		and store it in a variable, then when you call the function you just give the variable name and Javascript does the rest for you :D
		
		TYPE
		This determines whether the scroll that triggers the tween will be vertical or horizontal. This is a string so remember to use quotation
		marks, whether single or double quotation is irrelevant, they just have to be the same, so for no reason use this "horizontal', if you 
		started with double quotation, finish with double.
		**********************/
	});

});