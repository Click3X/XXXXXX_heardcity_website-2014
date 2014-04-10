$(document).ready(function() {
    var clickedMembers = [];
    $sidebarLinks = $('#member-fixed li .sidebar-link'),
    $allMembers = $('.all-members');



    // SUB NAV MEMBER CLICKS
    $sidebarLinks.click(function() {
        // REMOVE OBJECTS
        $('#all-items').remove();
        
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

        // console.log(selectMember[0]); console.dir(selectMember[0]);
        $('#member-bio .bio > p').html(selectMember[0].bio).css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
        $('#sidebar-name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);


        $('body').addClass('js-single-member');

    });




    // ALL MEMBERS CLICK 
    // $allMembers.click(function() {
    //     var memberId = $(this).data('person');
    //     if(clickedMembers.length > 0) {
    //         var lastMemId = clickedMembers.pop();
    //         $('#all-items-holder .'+lastMemId).remove();
    //     }
    //     clickedMembers.push(memberId);

    //     // build heardcity ul
    //     var ul;
    //     $('#all-items').remove();
    //     ul = $('<ul/>', {'id':'all-items', 'class':'all-items'});

    //     $.each(memberArray, function() {
    //         var heard = $(this)[0];
    //         var items = heard.buildLi();
    //         $.each(items, function() {
    //             $(this).appendTo(ul);
    //             $(this).delay(20*i).animate({opacity: "1"}, "fast");
    //         });
    //     });
    //     ul.appendTo($('#all-items-holder'));

    //     $('.item').addClass('heardcity');

    //     if($('body').hasClass('js-single-member')) {
    //         $('body').removeClass('js-single-member');
    //     }
    // });


    // TOUCH EVENTS

    $allMembers.on("tap", function() {
        // alert('you doubletapped me!');
        console.log('you doubletapped me!');

        var memberId = $(this).data('person');
        if(clickedMembers.length > 0) {
            var lastMemId = clickedMembers.pop();
            $('#all-items-holder .'+lastMemId).remove();
        }
        clickedMembers.push(memberId);

        // build heardcity ul
        var ul;
        $('#all-items').remove();
        ul = $('<ul/>', {'id':'all-items', 'class':'all-items'});

        $.each(memberArray, function() {
            var heard = $(this)[0];
            var items = heard.buildLi();
            $.each(items, function() {
                $(this).appendTo(ul);
                $(this).delay(20*i).animate({opacity: "1"}, "fast");
            });
        });
        ul.appendTo($('#all-items-holder'));

        $('.item').addClass('heardcity');

        if($('body').hasClass('js-single-member')) {
            $('body').removeClass('js-single-member');
        }

    });

    $('#member-button').on("tap", function() {
        // alert('you doubletapped me!');
        console.log('you doubletapped me!');
    });






});