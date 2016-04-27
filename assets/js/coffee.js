$(document).ready(function(){

$("#arashiyama").hover(function() {
	$("#flower").show(); 
	}, function () {
	$("#flower").hide();
});

$("#oyheart").hover(function() {
	$("#heart").show(); 
	}, function () {
	$("#heart").hide();
});

$("#dream").hover(function() {
	$("#rocket").show(); 
	}, function () {
	$("#rocket").hide();
});

$("#guat").hover(function() {
	$("#tree").show(); 
	}, function () {
	$("#tree").hide();
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