//data and settings
var result = '<p class="{$color}">Precheck passed.</p>', //html for main result
    delay = 500, //delay of sub results
    data = Array(
    '<li class="green">Javascript <img src="http://www.jquery4u.com/images/green_tick_small.gif"></li>',
    '<li class="orange">System <img src="http://www.jquery4u.com/images/green_tick_small.gif"></li>',
    '<li class="green">Device <img src="http://www.jquery4u.com/images/green_tick_small.gif"></li>',
    '<li class="green">Browser <img src="http://www.jquery4u.com/images/green_tick_small.gif"></li>',
    '<li class="green">Flash <img src="http://www.jquery4u.com/images/green_tick_small.gif"></li>'
    );

//self executing function starting from array index 0
(function process_els(el_index) {
  
    var el = data[el_index],
        precheckUl = $('#precheck ul'),
        loadingLi = $('<li class="loading"><img width="18px" height="18px" src="http://www.jquery4u.com/images/ajax_loader.gif"></li>'),
        sysPreId = "syspre_"+el_index;
  
  //show loading image
  precheckUl.append(loadingLi.clone().attr("id",sysPreId));
  
  //after simulated delay replace loading image with sub check result
  setTimeout( function()
  {
      precheckUl.find('li.loading:first').replaceWith(data[el_index]);
      
  }, delay);
  
  //to simulate the delay recursively call itself until all array elements have been processed
  if (el_index + 1 < data.length) {
    setTimeout(function() { process_els(el_index + 1); }, delay);
  }
    else
    {
        setTimeout(function() 
        {
            //append the final result after all sub checks have been inserted
            precheckUl.after(result);
        }, (delay*2));
    }
})(0);