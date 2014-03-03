// Click events for Features and Commercials buttons
// These are currently not working as intended and are breaking the layout
// in a few places when clicked

var featuresBtn = $('#features-btn'),
features = $('.feature');
commercials = $('.commercial');
commercialsBtn = $('#commercials-btn');

featuresBtn.click(function() {
    console.log('Features button was clicked');
    features.show().removeClass('project-hidden');
    commercials.addClass('project-hidden').hide();
    $('.selected-button').removeClass('selected-button');
    
    var buttonHolder = $( this ).parent().parent();
    buttonHolder.addClass('selected-button');
    console.log('This is the buttonHolder: ' + buttonHolder);
    console.dir(buttonHolder);

});

commercialsBtn.click(function() {
    console.log('Commercials button was clicked');
    commercials.show().removeClass('project-hidden');
    features.addClass('project-hidden').hide();
    $('.selected-button').removeClass('selected-button');

    var buttonHolder = $( this ).parent().parent();
    buttonHolder.addClass('selected-button');
    console.log('This is the buttonHolder: ' + buttonHolder);
    console.dir(buttonHolder);

});