// OUR TEAM
define(["jquery", 
		"util/config", 
        "flexnav",
        "controller/team-member-factory",
        "controller/sub-menu",
        "clue-tip",
        "util/clue-hover",
        "hover"], function($, config, flexnav, teamMemberFactory, subMenu, clueTip, clueHover, hover) {
    $(function() {
        $('#page-ourteam').addClass('current');
        // $('#out').click(function() { $('*').toggleClass('outline'); });

        var $body = $("body"),
            $mainMenu = $("#page-fixed"),
            $subNav = $("#member-fixed"),
            $clickClose = $('#click-close');

         // INITIALIZE MENU
        $mainMenu.flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#page-button'
        });

        // SUB MENU
        $subNav.flexNav({
            'hoverIntent': false,
            'hover':false,
            'buttonSelector': '#member-button'
        });
        

        var jsonMembers = $body.configData().jsonMembers;
        // SIDE BAR CLICK EVENT
        var showMemberBio = function(member) {
            $(jsonMembers).each(function() {
                var name = this.name,
                member_class = this.member_class,
                bio = this.bio,
                memMatch;
                
                if(member == member_class) {
                    memMatch = member;

                    $('#member-bio .bio > p').html(bio);
                    $('#member-bio .name').html(name);
                    $('#sidebar-name').html(name);
                }
            });
        }

        
        window.onload = (function(){

            // CHECK TO SEE IF SELECTED MEMBER HAS BEEN SENT FROM HOME.PHP
            if(selectedMember) {
                var target = '.item-holder.' + selectedMember,
                siblings = $('.item-holder').not(target);
                // Show individual items
                $('.item-holder').show();
                siblings.hide();    
                $('body.ourteam').addClass('js-single-member');
                $(target).show();
                $('#member-bio .permalink > a').show();
                // Show member Bio
                showMemberBio(selectedMember);
            }


            // CLICK EVENTS - if MIN WIDTH - look to FLEX NAV FOR another option
            $('#member-button').click( function() { 
                $('#member-header').toggleClass('side-bar-closed');
                $clickClose.toggleClass('hidden');
                $clickClose.click(function() {
                    $('#member-header').toggleClass('side-bar-closed');
                });
            });


            function showSolo(elem) {
                event.preventDefault();
                $(document).trigger('hideCluetip');
                var hreftarget = $(this).data('person'),
                target = '.item-holder.' + hreftarget,
                siblings = $('.item-holder').not(target);

                // $("html, body").animate({ scrollTop: 0 });
                $body.removeClass('js-single-member'); 
                siblings.hide();

                // SHOW member BIO
                $('#member-bio .permalink > a').show();
                showMemberBio(hreftarget);
                $("html, body").scrollTop(0);
                $(target).removeClass('item-hidden');
                $body.addClass('js-single-member');
                // OPEN / SHUT side bar NAV
                 $('#member-header').addClass('side-bar-closed');
            }

            
            // $('.item-holder a').click( function(event) {
            //     event.preventDefault();
            // });



            // // Closing the Sidebar BY CLICKING ON OTHER AREA    
            // $('#push, #close').click(function () {
            //     $('#member-header').toggleClass('side-bar-closed');
            //     $clickClose.click(function() {
            //         $('#member-header').toggleClass('side-bar-closed');
            //     })
            // });

            // CLICKING OFF SIDEBAR, CLOSE IT
            // $clickClose.click(function() {$(this).addClass('hidden');});


            // SHOW MEMBER BIO, NAME, LINK
            var jsonDefaults = $body.configData().jsonDefaults;
            var allMembers = $('.all-members');
            allMembers.click(function(event) {
                event.preventDefault();
                $(document).trigger('hideCluetip');

                $('.item-holder').show();
                $('#member-bio .permalink > a').hide();
                $body.removeClass('js-single-member');
            
                var defaultName = jsonDefaults[0].name;
                var defaultBio = jsonDefaults[0].bio;

                $('#member-bio .bio > p').html(defaultBio);
                $('#member-bio .name').html(defaultName);
                $('#sidebar-name').html(defaultName);
            });

            // TEAM MEMBER CLICK
            $('#member-header a').click( function(event) {
                event.preventDefault();

                $(document).trigger('hideCluetip');

                var hreftarget = $(this).attr('href'),
                target = '.item-holder.' + hreftarget,
                siblings = $('.item-holder').not(target);

                siblings.hide();
                $body.removeClass('js-single-member');
                $('.item-holder').fadeIn( "slow", function() {});

                // Tighten up footer with less elements on screen
                siblings.hide();

                // Show Target
                $(target).removeClass('item-hidden').show();

                $body.addClass('js-single-member');
                // SHOW member BIO
                $('#member-bio .permalink > a').show();
                showMemberBio(hreftarget);
                
                // OPEN / SHUT side bar NAV
                 $('#member-header').addClass('side-bar-closed');
                
            });

            // ON MAP LINK CLICK - SHOW MEMBER SOLO
            $('.map-link').click(function(event) {
                event.preventDefault();
                var elem = $(this);
                showSolo(elem);
            });

            // ON CLUE TIP LINK CLICK - SHOW MEMBER SOLO
            $('.cluetip-div').click(function(event) {
                event.preventDefault();
                var elem = $(this);
                showSolo(elem);
            });


        })();



    });
});