//////////////////////////////////////////////////////////////////////
// 	This javascript file is used to demonstrate the use of jQuery
// 	event triggers.
// 
// 	Teo Espero
// 	BS Cloud and Systems Administration
// 	Western Governors University

// 	#Web-Dev-Bootcamp-Udemy
//////////////////////////////////////////////////////////////////////


$("#fadingEffect").click(function(){
	$(".pDiv").fadeToggle(1000);
});

$("#SlideDown").click(function(){
	$(".pDiv").slideDown(1000);
});

$("#SlideUp").click(function(){
	$(".pDiv").slideUp(1000);
});

$("#SlideToggle").click(function(){
	$(".pDiv").slideToggle(1000);
});


//////////////////////////////////////////////////////////////////////
// 	EOF
//////////////////////////////////////////////////////////////////////