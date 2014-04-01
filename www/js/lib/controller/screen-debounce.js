// SCREEN DEBOUNCE
//my/shirt.js now has some dependencies, a cart and inventory
//module in the same directory as shirt.js
define(["jquery"], function($) {

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the

    // leading edge, instead of the trailing.
    debounce = function(func, wait, immediate) {
        var timeout;
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


    var getSize = debounce(
        function() {
            var winWidth = window.innerWidth;
            var holder;
            // var bodyElems = document . getElementsByTagName( "body" )[ 0 ] ; 
            var body = document . getElementsByTagName( "body" )[ 0 ] ; 

            if(winWidth < 700) {
                console.log('Small Bitch');
                body.className = 'red';
                holder = 'mobile';
            } else {
                console.log('Big Boys');
                body.className = 'blue';
                holder = 'desk';
            }
      
            return holder;

        }, 
        50
    );

// getSize();

// window.addEventListener('resize', getSize);


//return an object to define the "my/shirt" module.
return {
    getSize:getSize
    // color: "blue",
    // size: "large",
    // addToCart: function() {
    //     inventory.decrement(this);
    //     cart.add(this);
    }
});





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
