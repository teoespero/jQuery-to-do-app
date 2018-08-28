//////////////////////////////////////////////////////////////////////
// 	This javascript file is used to demonstrate the use of jQuery
// 	event triggers.
//
// 	Teo Espero
// 	BS Cloud and Systems Administration
// 	Western Governors University

// 	#Web-Dev-Bootcamp-Udemy
//////////////////////////////////////////////////////////////////////

// check off to-dos by clicking

// dynamically we wish to add a "click"
// listener to every LI that is created
$("ul").on("click", "li", (function(){
	$(this).toggleClass("completed");
}));


// clicked delete

// dynamically we wish to add a "click"
// listener to every SPAN that is created
$("ul").on("click","span",(function(event){

	// delete the line
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	// prevent other listeners
	// from being triggered
	event.stopPropagation();
}));

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		// grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span>x</span>" + todoText + "</li>");
	}
});


//////////////////////////////////////////////////////////////////////
// 	EOF
//////////////////////////////////////////////////////////////////////
