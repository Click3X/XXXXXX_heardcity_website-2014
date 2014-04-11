$(document).ready(function() {

    var clickedMembers = [];
    $sidebarLinks = $('#member-fixed li .sidebar-link'),
    $allMembers = $('.all-members');


    // IF SELECTED MEMBER
    
        if(selectedMember) {
            setTimeout(function() {
            $('#all-items').remove();
            var memberId = selectedMember;

            var selectMember = _.where(memberArray, {id:memberId});
            var lis = selectMember[0].buildLi();
            selectMember[0].attachToDom(lis);

            // console.log(selectMember[0]); console.dir(selectMember[0]);
            $('#member-bio .bio > p').html(selectMember[0].bio).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
            $('#sidebar-name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .permalink a').show().animate({opacity:1}, 500);

            $('body').addClass('js-single-member');

            // ADD CLUE TIP
            var deviceWidth;
            if(device == 'desk') {
                deviceWidth = 400;
                openSpeed = 400;
            } else { 
                deviceWidth = 280;
                openSpeed = 0;
            }

            $('.cluetip-div').cluetip({
                splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
                                 // ...and split the contents into separate divs where there is a "|"
                showTitle: false, // hide the clueTip's heading
                sticky: true,
                dropShadow: true,
                arrows: true,
                dropShadowSteps:16,
                width:deviceWidth,
                positionBy: 'bottomTop',
                closeText:'x',
                fx: {
                    open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
                    openSpeed:openSpeed
                },
                hoverIntent: {
                    sensitivity:  5,
                    interval:     30,
                    timeout:      0
                },
                onShow: function(ct, ci){
                    $('label').click(clueTipSoloMemberItems);
                    $('.cluetip-close').click(function() {
                        $(document).trigger('hideCluetip');
                    });
                }
            });
        }, 50);

    } else {
        // SHOW HEARDCITY BIO
        $('#member-bio .bio > p').html('People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#sidebar-name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .permalink a').hide();
    }
    



    // SUB NAV MEMBER CLICKS
    $sidebarLinks.click(function() {
        $(document).trigger('hideCluetip');
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
        $('#member-bio .permalink a').show().animate({opacity:1}, 500);

        $('body').addClass('js-single-member');

        // ADD CLUE TIP
        var deviceWidth;
        if(device == 'desk') {
            deviceWidth = 400;
            openSpeed = 400;
        } else { 
            deviceWidth = 280;
            openSpeed = 0;
        }

        $('.cluetip-div').cluetip({
            splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
                             // ...and split the contents into separate divs where there is a "|"
            showTitle: false, // hide the clueTip's heading
            sticky: true,
            dropShadow: true,
            arrows: true,
            dropShadowSteps:16,
            width:deviceWidth,
            positionBy: 'bottomTop',
            closeText:'x',
            fx: {
                open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
                openSpeed:openSpeed
            },
            hoverIntent: {
                sensitivity:  5,
                interval:     30,
                timeout:      0
            },
            onShow: function(ct, ci){
                $('label').click(clueTipSoloMemberItems);
                $('.cluetip-close').click(function() {
                    $(document).trigger('hideCluetip');
                });
            }
        });

    });




    // ALL MEMBERS CLICK 
    $allMembers.click(function() {
        $(document).trigger('hideCluetip');

        console.log('All members has been clicked!');

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

        // SHOW HEARDCITY BIO
        $('#member-bio .bio > p').html('People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#sidebar-name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .permalink a').hide();

        // ADD CLUE TIP
        var deviceWidth;
        if(device == 'desk') {
            deviceWidth = 400;
            openSpeed = 400;
        } else { 
            deviceWidth = 280;
            openSpeed = 0;
        }

        $('.cluetip-div').cluetip({
            splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
                             // ...and split the contents into separate divs where there is a "|"
            showTitle: false, // hide the clueTip's heading
            sticky: true,
            dropShadow: true,
            arrows: true,
            dropShadowSteps:16,
            width:deviceWidth,
            positionBy: 'bottomTop',
            closeText:'x',
            fx: {
                open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
                openSpeed:openSpeed
            },
            hoverIntent: {
                sensitivity:  5,
                interval:     30,
                timeout:      0
            },
            onShow: function(ct, ci){
                $('label').click(clueTipSoloMemberItems);
                $('.cluetip-close').click(function() {
                    $(document).trigger('hideCluetip');
                });
            }
        });
    });
});