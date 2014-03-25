// HOME PAGE owlCarousel
$('#home-slider').owlCarousel({
    items:1,
    singleItem:true,
    navigation:true,
    navigationText:false,
    pagination:false,
    rewindNav:true,
    rewindSpeed:0,
    afterInit : function(){
        // el.trigger('owl.jumpTo',1) ///start on 4th position
        $('#home-slider-holder').removeClass('pad-bot');
    }
});

$('#team-slider, #black-text-slider, #featured-slider, #grey-text-slider').owlCarousel({
    items:1,
    singleItem:true,
    navigation:true,
    navigationText:false,
    pagination:false,
    rewindNav:true,
    rewindSpeed:0
});