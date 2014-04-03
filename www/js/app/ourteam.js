// OUR TEAM
define(["jquery",
		"util/config", 
        "flexnav",
        "controller/team-member-factory",
        "controller/sub-menu",
        "unveil",
        "clue-tip",
        "util/clue-hover",
        "hover"], function($, config, flexnav, teamMemberFactory, subMenu, unveil, clueTip, clueHover, hover) {
    $(function() {
        // SPINNER IS NOT WORKING RIGHT - DISABLE TEMPORARILY
        // $('#ajax-loader').fadeOut(500);
        // $('#ajax-loader').hide();

        // TEST FOR MOBILE DEVICE / TABLET
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            device = 'mobile';
            // console.log('this is device' + device);
            $body.addClass('mobile');
        } else {
            device = 'desk';
            // console.log('this is device' + device);
        }


        // CURRENT PAGE
        $('#page-title').text('Our Team');
        // $('#page-ourteam').addClass('current');
        // $('.menu-ourteam > a').hide();
        $('#page-ourteam').addClass('mobile-hidden');

        // VARS
        var $body = $("body"),
            $mainMenu = $("#page-fixed"),
            $subNav = $("#member-fixed"),
            $img = $("img"),
            $clickClose = $('#click-close'),
            $sidebarLinks = $('#member-fixed .sidebar-link'),
            $clueTipPermalink = $('.item-list .permalink'),
            $memberBioPermalink = $('#member-bio .permalink > a');

        // CHANGE SRC ON IMAGES
        var toPngs = $('.item-holder img');
        // console.dir(toPngs);

        var noJpg = [
            'items/Peony_Rene_necklace.png',
            'items/Eric_Warzecha_jersey.png',
            'items/Elizabeth_McClanahan_guitar.png',
            'items/Keith_Reynaud_Pot.png',
            'items/Jeremy_Siegal_Jordans.png',
            'items/Jeremy_Siegal_chain.png',
            'items/Gary_Noel_plant.png',
            'items/Sasha_Awn_dress.png',
            'items/Sasha_Awn_moog.png',
            'items/Sasha_Awn_gloves.png',
            'items/Eric_Warzecha_guitar.png',
            'items/Talia_Rodgers_tank_top.png'
        ];
        // CHECK ARRAY FUNCTION
        Array.prototype.contains = function ( needle ) {
           for (i in this) {
               if (this[i] == needle) return true;
           }
           return false;
        }

        function switchSrc(obj) {
            var src = $(this).data('src'),
            png = /png$/;

            if (noJpg.contains(src)) {
                // console.log('Not this one');
            }
            else {
                src = src.replace(png, "jpg");
                src = src.replace("items", "items/jpg");
                $(this).attr('data-src', src);
            }
        }
        // SWITCH SRC
        $.each(toPngs, switchSrc);


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
        
        // JSON DATA
        var jsonMembers = $body.configData().jsonMembers;

        console.log(jsonMembers);

        // SIDE BAR CLICK EVENT- get bios
        showMemberBio = function(member) {
            $(jsonMembers).each(function() {
                var name = this.name,
                member_class = this.member_class,
                bio = this.bio,
                memMatch;
                
                if(member == member_class) {
                    memMatch = member;

                    $('#member-bio .bio > p').html(bio).css('opacity',0).show().animate({opacity:1});
                    $('#member-bio .name').html(name).css('opacity',0).show().animate({opacity:1});
                    $('#sidebar-name').html(name).css('opacity',0).show().animate({opacity:1});
                }
            });
        }


        var $pImgs = $("img");
        // UNVEIL FIRST 24 IMAGES
        for (var i=0;i < 24; i++) { 
                var thisImg = $pImgs[i];
                console.log('This is thisImg: ' + thisImg);
                $("img").trigger("unveil");
                // document.write(cars[i] + "<br>");
            }

        
        window.onload = (function(){

            // HIDE SPINNER
            $('#ajax-loader').fadeOut(500);
     

            // // SHOW IMAGES ON SCROLL
            // var $pImgs = $("img"); 
            // console.log('These are $pImgs: ' + $pImgs); console.dir($pImgs);
            
            $("img").unveil(600, function() {
              $(this).load(function() {
                this.style.opacity = 1;
              });
            });

     
            // TOGGLE SIDE BAR
            $('#member-button').click( function() { 
                $('#member-header').toggleClass('side-bar-closed');
                $clickClose.toggleClass('hidden');
                $clickClose.click(function() {
                    $('#member-header').toggleClass('side-bar-closed');
                });
            });

            $("a[href='#top']").click(function() {
                  $("html, body").animate({ scrollTop: 0 }, "slow");
                  return false;
                });


            // SIDEBAR LINKS

            function toggleMemberItems(member) {
                var member = $(member).eq(0).data('person');
                var memberItems = '.item-holder'+'.'+member;
                var $allOtherMembers = $('.item-holder').not(memberItems);
                var $memberItems = $(memberItems);
                var k = 0; var l=0;
                var length = $allOtherMembers.length;
                var mlength = $memberItems.length;

                $('html, body').animate({scrollTop : 0},800);

                // HIDE OTHERS
                function hideMember(obj) {
                    var showed = []; var i= 0; 
                    setTimeout(function() {
                        $(obj).removeClass('item-show').hide().addClass('hide-mem-items', 250);
                    }, 80 * ( l + 1 ));

                    setTimeout(function() {
                        $body.addClass('js-single-member'); 
                    }, 280);
                }

                // SHOW MEMBER
                function showMember(obj, l) {
                    setTimeout(function() {
                        $(obj).removeClass('hide-mem-items').show().addClass('item-show', 500);
                    }, 120 * ( l + 1 ));
                }           

                // UNVIEL ALL IMAGES 
                var $imgs = $memberItems.find('img');
                $imgs.trigger("unveil");

                // if click = CLOSE
                $clickClose.addClass('hidden');
                // CLOSE SIDEBAR
                $('#member-header').addClass('side-bar-closed');

                $('#member-bio .permalink > a').show();
                showMemberBio(member);
                
                // TOGGLE HIDE - SHOW CLASS ON EACH MEMBER LI
                function init() {
                     for( k=0; k < length; k++) {
                        var obj = $allOtherMembers[k];
                        hideMember(obj, k);
                    }

                    for(l=0; l < mlength; l++) {
                        var obj = $memberItems[l];
                        showMember(obj, l); 
                    }
                }

               init();
            }





            // toggleMemberItems(member);
            // $clueTipPermalink.click(function(event) {
            //     event.preventDefault();

            //     $('html, body').animate({scrollTop : 0},800);

            //     console.log('this is member button');
            //     // HIDE CLUE TIP
            //     $(document).trigger('hideCluetip');
                
            //     var member = $(this);
            //     toggleMemberItems(member);

            // });

            // FIRE FUNCTION OFF ON CLICK
            $sidebarLinks.click(function(event) {
                event.preventDefault();

                // HIDE CLUE TIP
                $(document).trigger('hideCluetip');
                
                var member = $(this);
                toggleMemberItems(member);

            });
            

            // CHECK TO SEE IF SELECTED MEMBER HAS BEEN SENT FROM HOME.PHP
            if(selectedMember) {
                var target = '.item-holder.' + selectedMember,
                siblings = $('.item-holder').not(target);
                // Show individual items
                $('.item-holder').show();

                siblings.hide();    
                $('body.ourteam').addClass('js-single-member');
                $(target).show();

                var $imgs = $(target).find('img');
                $imgs.trigger("unveil");

                $memberBioPermalink.show();
                // Show member Bio
                showMemberBio(selectedMember);
            }


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
                $memberBioPermalink.show();
                showMemberBio(hreftarget);

                $("html, body").scrollTop(0);
                $(target).removeClass('item-hidden');
                $body.addClass('js-single-member');
                
                var $imgs = $(target).find('img');
                $imgs.trigger("unveil");

                // OPEN / SHUT side bar NAV
                $('#member-header').addClass('side-bar-closed');
            }




            // SHOW MEMBER BIO, NAME, LINK
            var jsonDefaults = $body.configData().jsonDefaults;
            var allMembers = $('.all-members');

            allMembers.click(function(event) {
                event.preventDefault();

                $('.item-holder').show().removeClass('hide-mem-items');
                $memberBioPermalink.hide();
                $body.removeClass('js-single-member');

                var $imgs = $(target).find('img');
                $imgs.trigger("unveil");
            
                var defaultName = jsonDefaults[0].name;
                var defaultBio = jsonDefaults[0].bio;

                $('#member-bio .bio > p').html(defaultBio);
                $('#member-bio .name').html(defaultName);
                $('#sidebar-name').html(defaultName);
            });


            // TEAM MEMBER CLICK
            // $('#member-header a').click( function(event) {
            //     event.preventDefault();

            //      // HIDE CLUE TIP HOVER
            //     $(document).trigger('hideCluetip');

            //     // SCROLL WINDOW TO TOP
            //     $('html, body').animate({scrollTop : 0},800);

            //     // GET HREF VALUES
            //     var hreftarget = $(this).attr('href'),
            //     target = '.item-holder.' + hreftarget,
            //     siblings = $('.item-holder').not(target);

                
            //     // HIDE SIBLINGS
            //     siblings.hide();

            //     // RESET BODY CONTAINER CLASS
            //     $body.removeClass('js-single-member');
            //     $('.item-holder').fadeIn( "slow");

            //     // Tighten up footer with less elements on screen
            //     siblings.hide();

            //     // Show Target
            //     $(target).removeClass('item-hidden').show();

            //     var $imgs = $(target).find("img"); console.log('This is $imgs: ' + $imgs); console.dir($imgs);
            //     $imgs.trigger("unveil");

            //     $body.addClass('js-single-member');
            //     // SHOW member BIO
            //     $memberBioPermalink.show("slow");
            //     showMemberBio(hreftarget);

                
            //     // OPEN / SHUT side bar NAV
            //      $('#member-header').addClass('side-bar-closed');
            //      $clickClose.addClass('hidden');
                
            // });

            // // ON MAP LINK CLICK - SHOW MEMBER SOLO
            $('.map-link').click(function(event) {
                event.preventDefault();
                var elem = $(this);
                // showSolo(elem);
                $('html, body').animate({scrollTop : 0},800);
                console.log('map link click');
            });

            // // ON CLUE TIP LINK CLICK - SHOW MEMBER SOLO
            $('.cluetip-div').click(function(event) {
                event.preventDefault();
                var elem = $(this);
                // showSolo(elem);
                $('html, body').animate({scrollTop : 0},800);
                console.log('map link click');
            });


        })();



    });
});