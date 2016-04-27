$(document).ready(function(){

$("#arashiyama").hover(function() {
	$("#flower").fadeTo("slow", 1);
	$("#flower").fadeTo("slow", 0);
});

$("#pagewrapper").click(function() {
  $(".descriptions").hide();
});

$("#arashiyama").click(function() {
  $("#arashiyamadesc").show();
});

$("#oyheart").click(function() {
  $("#oyheartdesc").show();
});

$("#dream").click(function() {
  $("#dreamdesc").show();
});

$("#guat").click(function() {
  $("#guatdesc").show();
});

});