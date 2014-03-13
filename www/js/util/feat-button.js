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
    buttonHolder.addClass('selected-button');

});