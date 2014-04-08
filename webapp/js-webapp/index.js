var compiled = _.template(
  "<div class='module module-member' >" + /* style='background-image: url(<%= memberImage %>)' */
    "<div class='member-info'>" +
      "<h3 class='member-title'>" +
         "<%= name %>" + 
      "</h3>" +
      "<p class='member-director'>" + 
         "<%= bio %>" + 
      "</p>" + 
      "<a href=''>" +
      "&gt; View all items" +
      "</a>" +
    "</div>" + 
  "</div>"
);


var list = _.template("<% _.each(items, function(item) { var itemId = formatLink(item.name.toLowerCase()); %> <li class='<%= itemId + ' ' + id %>'><span><%= item.name %></span><img src='<%= item.image %>' alt='<%= item.name %>'></li> <% }); %>");

var subnavLinks = _.template("<li><a href='#<%= id %>'><%= name %></a></li>");


// $.getJSON("http://codepen.io/chriscoyier/pen/0b21d5b4f7fbf4e7858b2ffc8890e007.js", function(data) {
$.getJSON("js/data/members.json", function(data) {
  console.log('This is the data: ' + data);
  console.dir(data);
  var i, html = "", subnav = "<ul id='member-nav' class='member-nav'>";
  for (i = 0; i < data.members.length; i++) {
    html += compiled(data.members[i]);
    html += '<ul id='+ data.members[i].id +'>';
    html += list(data.members[i]);
    html += '</ul>';

    subnav += subnavLinks(data.members[i]);
  }  
  subnav += '</ul>';
  
  $("#sub-nav").append(subnav); 
  $("#members").append(html); 
});

// Event Handling
$(document).on("click", ".module-member", function() {
  alert("member added");
});



