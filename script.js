$(document).ready(function(){
  $.get("file:///C:/Users/xanke/Desktop/html%20pages/navi.html", function(data) {
    $("#header").html(data);
  });
});
