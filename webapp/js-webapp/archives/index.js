var compiled = _.template(
  "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" + 
    "<div class='movie-info'>" +
      "<h3 class='movie-title'>" +
         "<%= movieTitle %>" + 
      "</h3>" +
      "<p class='movie-director'>" + 
         "<%= movieDirector %>" + 
      "</p>" + 
    "</div>" + 
  "</div>"
);

$.getJSON("http://codepen.io/chriscoyier/pen/0b21d5b4f7fbf4e7858b2ffc8890e007.js", function(data) {
  var i, html = "";
  for (i = 0; i < data.movies.length; i++) {
    html += compiled(data.movies[i]);
  }  
  $("#movies").append(html);  
});

// Event Handling
$(document).on("click", ".module-movie", function() {
  alert("movie added");
});
