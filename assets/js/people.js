$(document).ready(function(){

$("#opendoor").click(function() {
	$(".notebox").hide();
});

$("#one").click(function() {
	$("#notebox1").show();
});

$("#two").click(function() {
	$("#notebox2").show();
});

$("#three").click(function() {
	$("#notebox3").show();
});

$("#four").click(function() {
	$("#notebox5").show();
});

$("#five").click(function() {
	$("#notebox4").show();
});

$("#nine").click(function() {
	$("#notebox6").show();
});

$("#eleven").click(function() {
	$("#notebox7").show();
});

$("#fifteen").click(function() {
	$("#notebox8").show();
});

$("#seventeen").click(function() {
	$("#notebox17").show();
});

$("#home").hover(function() {
	$(this).css({"color": "#411f01", "text-shadow": "-2px 0px 7px #ebd3be, 2px 0px 7px #ebd3be"});
	}, function() {
	$(this).css({"color": "black", "text-shadow": "none"});
});

$("#coffee").hover(function() {
	$(this).css({"color": "#411f01", "text-shadow": "-2px 0px 7px #ebd3be, 2px 0px 7px #ebd3be"});
	}, function() {
	$(this).css({"color": "black", "text-shadow": "none"});
});

});