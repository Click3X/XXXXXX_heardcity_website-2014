define(["jquery"], function($) {

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the

    // leading edge, instead of the trailing.
    debounce = function(func, wait, immediate) {
      var timeout;
      var returnWidth;
      	return function() {
      		var context = this, args = arguments;
      		var later = function() {
      			timeout = null;
      			if (!immediate) func.apply(context, args);
      		};
      		var callNow = immediate && !timeout;
      		clearTimeout(timeout);
      		timeout = setTimeout(later, wait);
      		if (callNow) func.apply(context, args);
      	};
    };


    

    var update = debounce(function() {
      var returnWidth = window.innerWidth;
      var bodyElems = document . getElementsByTagName( "body" ) ; 
      var body = bodyElems[ 0 ] ;

      if(returnWidth < 700) {
        console.log('Small Bitch');
        body.className = 'red';
        holder = 'mobile';
      } else {
        console.log('Big Boys');
        body.className = 'blue';
        holder = 'desk';
      }
      
      return holder;

    }, 50);

    // update();

    // window.addEventListener('resize', update);

    return update;

});