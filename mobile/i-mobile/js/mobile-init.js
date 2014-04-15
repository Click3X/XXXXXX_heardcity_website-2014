//**************** INIT FUNCTIONS ****************** //
$(document).bind("mobileinit",function(){
  $.mobile.touchOverflowEnabled=true;
});
$(document).bind('pageinit',function(){
  
});
var myScroll=[],f;
var ua=$.browser;
// as we use jQuery 1.7 -> replace "delegate()" with "on()"?
$(document).delegate('[data-role="page"]','pageshow',function(){

  if($.mobile.activePage.attr('id')!='page-bilder'){
    $('#body').removeClass('bilder landscape');
  }
  if($.mobile.activePage.find('.footer').length>0){
    f=$('#'+$.mobile.activePage.find('.footer')[0].id);
  }
  else{
    f=$('.footer');
  }
 f.css({'height':'54px'});
  
  $('.nav_more a').live('click',function(){
    f.animate({
      height:'108px'
    },100);
    return false;
  });
  
  if(ua.msie&&(ua.version.slice(0,1)=="8"||ua.version.slice(0,1)=="7")){
  }
  else if($.mobile.activePage.find('.wrapper').length>0){
    if(this.id in myScroll) {
      myScroll[this.id].refresh();
      //myScroll[this.id].destroy();
      //myScroll[this.id]=null;
    }
    else{
      myScroll[this.id]=new iScroll($.mobile.activePage.find('.wrapper')[0].id,{
        hScroll        : false,
        vScroll        : true,
        hScrollbar     : false,
        vScrollbar     : true,
        fixedScrollbar : true,
        fadeScrollbar  : false,
        hideScrollbar  : false,
        bounce         : true,
        momentum       : true,
        lockDirection  : true,
		zoom:false
      });
    }
  }
});

$(window).bind('orientationchange',function(){
  if($.mobile.activePage[0].id in myScroll){
    myScroll[$.mobile.activePage[0].id].refresh();
  }
});

//**************** END INIT FUNCTIONS ****************** //