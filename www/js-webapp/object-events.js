$(document).ready(function() {
    var clickedMembers = [];
    $sidebarLinks = $('#member-fixed li .sidebar-link'),
    $allMembers = $('.all-members');


    // SUB NAV MEMBER CLICKS
    $sidebarLinks.click(function() {
        var memberId = $(this).data('person');
        if(clickedMembers.length > 0) {
            var lastMemId = clickedMembers.pop();
            var lastMember = _.where(memberArray, {id:memberId});
            $('#all-items-holder ul').remove();

        }
        clickedMembers.push(memberId);

        var selectMember = _.where(memberArray, {id:memberId});
        var lis = selectMember[0].buildLi();
        selectMember[0].attachToDom(lis);
    });

    // ALL MEMBERS CLICK 
    $allMembers.click(function() {
        var memberId = $(this).data('person');
        if(clickedMembers.length > 0) {
            var lastMemId = clickedMembers.pop();
            $('#all-items-holder .'+lastMemId).remove();
        }
        clickedMembers.push(memberId);

        var ul = $('<ul/>', {'id':'item-holder', 'class':'item-holder'});

        $.each(memberArray, function() {
            var heard = $(this)[0];
            var items = heard.buildLi();
            // heard.attachToDom(items);
            $.each(items, function() { $(this).appendTo(ul);} );
            
            // console.log('This is MEMBERS: ' + heard); console.dir(heard);
        });
        ul.appendTo($('#all-items-holder'));

        $('.item').addClass('heardcity');
    })




});