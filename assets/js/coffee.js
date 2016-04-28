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

$("#home").hover(function() {
	$(this).css({"color": "#411f01", "text-shadow": "-2px 0px 7px #ebd3be, 2px 0px 7px #ebd3be"});
	}, function() {
	$(this).css({"color": "black", "text-shadow": "none"});
});

$("#people").hover(function() {
	$(this).css({"color": "#411f01", "text-shadow": "-2px 0px 7px #ebd3be, 2px 0px 7px #ebd3be"});
	}, function() {
	$(this).css({"color": "black", "text-shadow": "none"});
});


});