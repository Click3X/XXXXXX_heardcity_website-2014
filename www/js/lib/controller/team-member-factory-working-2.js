// SIDE BAR CONTROLLER
define(["jquery", 
        "util/config"], function($, config) {
        // SET UP WORKING VARS
    var body = $('body'),
    teamMembers = [],
    liArray = [],
    posAll =[{"name":"philiploeb ","item":"beardoll","top":"31.8%","left":"14.9%"},{"name":"garynoel ","item":"baseball","top":"0.87%","left":"40%"},{"name":"corymelious ","item":"skiboots","top":"2.1%","left":"26%;"},{"name":"gloriapitagorsky ","item":"poster","top":"0.5%","left":"56%"},{"name":"peonyrene ","item":"lipstick","top":"3%","left":"62.5%"},{"name":"keithreynaud ","item":"fishinglure","top":"3.2%","left":"78%"},{"name":"garynoel ","item":"hasselblad","top":"3.9%","left":"62%"},{"name":"jeremysiegal ","item":"taiwanbeer","top":"0.45%","left":"79.1%"},{"name":"elizabethmcclanahan ","item":"guitar","top":"5.3%","left":"7.5%"},{"name":"garynoel ","item":"coral","top":"7.6%","left":"66%"},{"name":"elizabethmcclanahan ","item":"readingglasses","top":"7.1%","left":"51%"},{"name":"jodilevine ","item":"book","top":"8.4%","left":"13.5%"},{"name":"gloriapitagorsky ","item":"montaukmagnet","top":"8.4%","left":"41.5%"},{"name":"gloriapitagorsky ","item":"zagat","top":"9.8%","left":"35.5%"},{"name":"sashaawn ","item":"passport","top":"9.65%","left":"76.5%"},{"name":"elizabethmcclanahan ","item":"librarycard","top":"10.3%","left":"67%"},{"name":"corymelious ","item":"recorder","top":"11.2%","left":"14.5%"},{"name":"jodilevine ","item":"rings","top":"11.4%","left":"33%"},{"name":"jeremysiegal ","item":"bapexbyabathingape","top":"11.8%","left":"57%"},{"name":"elizabethmcclanahan ","item":"tvguide","top":"14.4%","left":"19%"},{"name":"garynoel ","item":"wacom","top":"14.48%","left":"41%"},{"name":"ericwarzecha ","item":"boo","top":"14.1%","left":"48%"},{"name":"keithreynaud ","item":"barn","top":"14.1%","left":"75%"},{"name":"corymelious ","item":"fly","top":"15.65%","left":"77.2%"},{"name":"elizabethmcclanahan ","item":"yogamat","top":"16.95%","left":"15%"},{"name":"danflosdorf ","item":"watch","top":"16.9%","left":"78.9%"},{"name":"evanmangiamele ","item":"drumsticks","top":"18.2%","left":"10%"},{"name":"keithreynaud ","item":"castironpan","top":"19.3%","left":"10.7%"},{"name":"philiploeb ","item":"smashedpenny","top":"19.175%","left":"53.5%"},{"name":"evanmangiamele ","item":"leela","top":"20.1%","left":"47.5"},{"name":"corymelious ","item":"campingstove","top":"18.65%","left":"66%"},{"name":"ericwarzecha ","item":"sabresjersey","top":"22.1%","left":"15%"},{"name":"garynoel ","item":"mouse","top":"25.9%","left":"19%"},{"name":"garynoel ","item":"amctrailguide","top":"78.5%","left":"26.75%"},{"name":"corymelious ","item":"homebrewbook","top":"11.7%","left":"75%"},{"name":"jeremysiegal ","item":"s1991nikeairjordanvi","top":"27.7%","left":"29.8%"},{"name":"corymelious ","item":"drumsticks","top":"28.6%","left":"20%"},{"name":"evanmangiamele ","item":"gameboy","top":"29%","left":"75.6%"},{"name":"jodilevine ","item":"rug","top":"31.4%","left":"43%"},{"name":"evanmangiamele ","item":"growler","top":"0.57%","left":"11.5%"},{"name":"gloriapitagorsky ","item":"bracelet","top":"34.8%","left":"40%"},{"name":"danflosdorf ","item":"snowboard","top":"35%","left":"62.5%"},{"name":"garynoel ","item":"firesticks","top":"36.2%","left":"13%"},{"name":"jeremysiegal ","item":"ambushpowchain","top":"36.6%","left":"40.3%"},{"name":"evanmangiamele ","item":"controller","top":"43.7%","left":"37%"},{"name":"katieflynn ","item":"soccerclete","top":"43.4%","left":"15%"},{"name":"philiploeb ","item":"linushueycassette","top":"47.1%","left":"70.2%"},{"name":"philiploeb ","item":"q102tshirt","top":"47.1%","left":"19%"},{"name":"danflosdorf ","item":"yuengling","top":"47.9%","left":"49.5%"},{"name":"philiploeb ","item":"cassette","top":"48.7%","left":"67.2%"},{"name":"peonyrene ","item":"brunomars","top":"50.7%","left":"27%"},{"name":"katieflynn ","item":"film","top":"50%","left":"60%"},{"name":"sashaawn ","item":"floraldress","top":"52.5%","left":"12%"},{"name":"gloriapitagorsky ","item":"scarf","top":"52.25%","left":"52%"},{"name":"ericwarzecha ","item":"minorthreat","top":"54.8%","left":"54%"},{"name":"jodilevine ","item":"pouch","top":"57.3%","left":"59%"},{"name":"jeremysiegal ","item":"retinamacbookpro","top":"59%","left":"9.5%"},{"name":"philiploeb ","item":"turkey","top":"59%","left":"57%"},{"name":"peonyrene ","item":"pandorabracelet","top":"61.3%","left":"51%"},{"name":"taliarodgers ","item":"beachbum","top":"61.2%","left":"65%"},{"name":"sashaawn ","item":"trapezegrips","top":"62.25%","left":"55.5%"},{"name":"philiploeb ","item":"painting","top":"62%","left":"11%"},{"name":"sashaawn ","item":"theremin","top":"63.55%","left":"12.5%"},{"name":"peonyrene ","item":"bag","top":"64.6%","left":"63%"},{"name":"keithreynaud ","item":"carfridge","top":"66.3%","left":"42.5%"},{"name":"peonyrene ","item":"ipadipodiphone","top":"66.2%","left":"16%"},{"name":"peonyrene ","item":"necklace","top":"67.8%","left":"5%"},{"name":"keithreynaud ","item":"rum","top":"70.9%","left":"15%"},{"name":"gloriapitagorsky ","item":"jayson","top":"70.6%","left":"55%"},{"name":"ericwarzecha ","item":"guitar","top":"71.9%","left":"14.5%"},{"name":"jeremysiegal ","item":"kanyewest","top":"74%","left":"8.5%"},{"name":"danflosdorf ","item":"hockeystick","top":"74.7%","left":"70%"},{"name":"taliarodgers ","item":"tanktop","top":"76.7%","left":"41%"},{"name":"gloriapitagorsky ","item":"elephantfigure","top":"76.5%","left":"15%"},{"name":"taliarodgers ","item":"books","top":"78.15%","left":"16%"},{"name":"corymelious ","item":"hammer","top":"80.45%","left":"13.5%"},{"name":"katieflynn ","item":"pizza","top":"81.15%","left":"35%"},{"name":"katieflynn ","item":"necklace","top":"83.7%","left":"18.25%"},{"name":"jodilevine ","item":"yogamat","top":"84.5%","left":"40%"},{"name":"jodilevine ","item":"knittingneedle","top":"86.6%","left":"19%"},{"name":"keithreynaud ","item":"blade","top":"87.3%","left":"19%"},{"name":"taliarodgers ","item":"minnieripperton","top":"86.5%","left":"55%"},{"name":"gloriapitagorsky ","item":"flowers","top":"88.8%","left":"49.5%"},{"name":"gloriapitagorsky ","item":"ring","top":"89.45%","left":"43.5%"},{"name":"gloriapitagorsky ","item":"boardbinder","top":"90.4%","left":"18.5%"},{"name":"taliarodgers ","item":"nikefreehyperfeels","top":"91%","left":"52.5%"},{"name":"katieflynn ","item":"chargersjersey","top":"93.15%","left":"20%"},{"name":"taliarodgers ","item":"comics","top":"93.6%","left":"60%"},{"name":"keithreynaud ","item":"plasticbaby","top":"97%","left":"44.5%"},{"name":"sashaawn ","item":"bikepedal","top":"96.65%","left":"57.5%"},{"name":"garynoel ","item":"grillutensils","top":"97%","left":"23%"},{"name":"jodilevine ","item":"seeds","top":"97.8%","left":"53%"},{"name":"peonyrene ","item":"carkeys","top":"100.25%","left":"39.5%"},{"name":"gloriapitagorsky ","item":"nytimes","top":"100.1%","left":"70.5%"},{"name":"gloriapitagorsky ","item":"necklace","top":"102%","left":"44.5%"},{"name":"elizabethmcclanahan ","item":"saintsjersey","top":"104.35%","left":"41.5%"},{"name":"danflosdorf ","item":"skateboard","top":"102.35%","left":"72.5%"},{"name":"taliarodgers ","item":"toy","top":"104.4%","left":"21.5%"},{"name":"jodilevine ","item":"sneakers","top":"108.4%","left":"20%"},{"name":"katieflynn ","item":"drill","top":"108.7%","left":"59%"},{"name":"katieflynn ","item":"whisk","top":"109.6%","left":"58%"},{"name":"ericwarzecha ","item":"telluridepicture","top":"112%","left":"18%"},{"name":"corymelious ","item":"shaker","top":"12.5%","left":"35%"},{"name":"jeremysiegal ","item":"sampler","top":"101.85%","left":"20%"}];

    $(function() {
        // STORE JSON IN VAR
        var members = body.configData().jsonMembers;

        function validateString(string) {
            string = string.replace(/[^a-z0-9\s]/gi, '');
            string = string.toLowerCase();
            string = string.replace(/[_\s]/g, '-');
            return string;
        }

        function nameShoes(itemName) {
            if(itemName == 's1991 Nike Air Jordan VI Sport Blue') {
                itemName = itemName.substring(1);
            }
            return itemName;
        }

        // TEAM MEMBER CONSTRUCTOR
        function Member(name, bio, sex, items, member_class) {
            this.name = name;
            this.bio = bio;
            this.sex = sex;
            this.items = items;
            this.member_class = member_class;
            this.id =  validateString(name);
        }



        // MAKE OUR MEMBERS
        $.each(members, function(i, member) {
            var name = this.name;
            var bio = this.bio;
            var sex = this.sex;
            var items = this.items;
            var member_class = this.member_class;
            var memberItemArray = [];
            var k = 0;

            var realName = name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();


            posAll.forEach(function() {
                var memItem = posAll[k];
                if(member_class = memItem.name) {                  
                    memberItemArray.push(memItem);
                k++;
                }
            });
            // console.log('this is realName' + realName);
           

            // posAll.forEach(function(i, item) {
            //     if(realName == posAll[item] {
            //         console.log
            //     }
            // });

        
            $.each(items, function(j, item) {
                var itemName = item.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, ""),
                image = item.image,
                itemClass = 'item-hidden item-holder ' + itemName.toLowerCase() + ' ' + member_class,
                usemap = (image.split('.')[0]).split('/')[1],
                usemap = validateString(usemap),
                coords = item.coords,
                map, area, a, top, le img;

                var l=0;
                var itemname = itemName.toLowerCase();
                memberItemArray.forEach(function() {
                    var memItem = memberItemArray[l];
                    console.log('this is memItem' + memItem); console.log(memItem);
                    if(memItem.item == itemname) {
                        top = memItem.top;
                        left = memItem.left;
                    }
                    l++;
                });


                var li = $('<li/>', {
                    class:itemClass,
                    "data-pos-all":top,
                    "data-pos-solo":left
                });

                // ON THE FLY DEBUGGING
                var cleanItemName = nameShoes(item.name),
                reallyCleanItemName = validateString(cleanItemName),
                blankGif = 'images/sprites/blank.gif';

                // check for Coords, else link shape is regular
                if(coords) {
                    img = $('<img/>', {
                        src:blankGif,
                        alt:item.name,
                        usemap:'#'+usemap,
                        "data-src":image
                    }),
                    map = $('<map/>', {
                        id:usemap,
                        name:usemap,
                        class:"map-link",
                        "data-person":member_class
                    }),
                    area = $('<area/>', {
                        href:"#",
                        shape:"poly",
                        coords:coords,
                        alt: itemName.toLowerCase(),
                        "data-person":member_class,
                        "data-item": itemName.toLowerCase(),
                        "title": "|" + "|" + name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                        class:"cluetip-div"
                    });

                    map.append(area);
                    li.append(img);
                    li.append(map);


                } else {
                    img = $('<img/>', {
                        src:blankGif,
                        alt:item.name,
                        "data-src":image
                    }),
                    a = $('<a/>', {
                        href:"#",
                        "data-person":member_class,
                        "data-item": itemName.toLowerCase(),
                        "title": "|" + "|" + name + "\'s" + "|" + cleanItemName + "|" + item.bio + "|" + "<label for='"+member_class+"-"+reallyCleanItemName+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member_class+"' id='"+member_class+"-"+reallyCleanItemName+"' value='"+member_class+"'>",
                        class:"cluetip-div",
                        "data-person":member_class
                    });

                    a.append(img);
                    li.append(a);
                }

            liArray.push(li);

            });

            var teamMember = new Member(name, bio, sex, items, member_class);
            teamMembers.push(teamMember);

        });



	});
    return liArray;
});