// HASH CHANGE for AJAX DEEPLINKING
$(function() {
    var hash = document.location.hash.replace(/^#\//, '');
    if(hash) {
        console.log('We have a hash!' + hash);
        // $('#sub-nav a[href="#' + hash + '"]').trigger('click');
        $(hash + '-link').trigger('click');
    }
});


// 'a.member-link'