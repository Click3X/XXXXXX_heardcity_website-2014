
$(function(){
	console.log("$ is ready");

	var thumbnails = $(".thumbnails li");

	thumbnails.each(function(){
		var li = $(this),
		img = new Image();

        img.onload = function(e){
        	li.find('.play-icon').eq(0).css("display","block");

        	li.click(function(){
        		var title = $(this).attr("data-title"),
        		video = $(this).attr("data-video"),
        		image = "content/" + $(this).attr("data-image");

        		console.log("data title : " + title);

        		$("#image-modal").find('.modal-title').eq(0).html(title);

        		if(video && video != undefined){
	        		video += "?title=0&amp;byline=0&amp;portrait=0";

	        		$("#image-modal").find('.modal-body img').eq(0).attr("src","").css("display","none");
	        		$("#image-modal").find('.modal-body iframe').eq(0).attr("src",video).css("display","block");
	        	} else {
	        		$("#image-modal").find('.modal-body iframe').eq(0).attr("src","").css("display","none");
	        		$("#image-modal").find('.modal-body img').eq(0).attr("src",image).css("display","block");
	        	}

	        	$("#image-modal").modal("show");
        	});

        	li.css({"background-image":"url("+img.src+")", "background-size":"cover"});
        };

        img.src = "content/" + li.attr("data-image");
	});

});