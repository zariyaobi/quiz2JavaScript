$(document).ready(function(){
$("#show").click(function(){
  $("#text").show();
});

$("#hide").click(function(){
  $("#text").hide();
});

$("#text").hover(function(){
  $(this).css("background-color", "green");
});
});

