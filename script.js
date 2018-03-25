$(document).ready(function(){
  $.get("navi.html", function(data) {
    $("#header").html(data);
  });
});
