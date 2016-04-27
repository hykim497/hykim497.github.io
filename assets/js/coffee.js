$(document).ready(function(){

$("#arashiyama").hover(function() {
	$("#flower").FadeIn("slow");
	$("#flower").FadeOut("slow");
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