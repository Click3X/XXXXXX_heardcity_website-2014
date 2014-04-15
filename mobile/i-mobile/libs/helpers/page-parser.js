PageParser = function(options) {
	var defaults = {
		page: options.page
	}

	var options = $.extend({}, defaults, options);
	
	this.page = options.page;
	this.portfolio = null;

}

PageParser.prototype.parse = function()
{

	var Section = Backbone.Model.extend({ 
		defaults : {
			section_title: "",
			port_items: new Array()
		},
		initialize: function(){
			
		}
	});

	var PortItem =  Backbone.Model.extend({ 
		defaults : {
			port_title: "",
			thumb_src: "",
			img_src: "",
			loading_page: "",
			img_file : "",
			intro_text: "",
			thumb_src: ""
		},
		initialize : function() {
			
		}
	});                    

	var Portfolio = new Backbone.Collection;

	$(window).load(this.page, function(html) {

		$(html).find("h1.section_title").each(function(section_index, section_title) {
			
				var section = new Section();
				var port_items = new Array();
				
				section.set("section_title", $(section_title).text() );	

				$(section_title).nextUntil("h1.section_title", 'div.section_content').each(function(row_index, section_row){
										
					$(section_row).find("div.thumb_item").each(function(thumb_index, thumb_item) {

						var port_title = $(thumb_item).find("h2.port_title").text();
						var thumb_src = $(thumb_item).find("img").attr("src");
						var img_file = $(thumb_item).find("img").attr("alt");
						var intro_text = $(thumb_item).find("div.intro_container").find("p.intro_text").text();
						var loading_page =  $(thumb_item).attr("page");

						port_items.push(new PortItem({
							port_title: port_title,
							thumb_src: thumb_src,
							img_file : img_file,
							intro_text: intro_text,
							loading_page: loading_page
						}));

						section.set("port_items", port_items);
					});  // END LOOP THROUGH EACH THUMBS OF SECTION ROW

				}); // END LOOP THROUGH EACH SECTION ROW

				
				Portfolio.add(section);

			}); // END LOOP THROUGH EACH SECTION
		
		return Portfolio.toJSON();
		//this.addEventListener("PARSED_COMPLETED", 
		//context.addEventListener("PARSED_COMPLETED");
		

	});
}




			
