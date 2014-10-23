$(document).ready(function(){

// data goes here that will be dynamic -- JSON FORMAT!
var data = {
	"bandName"     :[  "Mudvayne",
					   '<img src="http://placehold.it/350x150">',
					   "APC",
					   "Mudvayne",
					],

	"datePlaying" :[ "5.29.15",
					 "5.31.15",
					 "6.3.15",
					 "6.10.15"
					]
}

//save templates to var
var contentTemplate   = $('#content').html();

//compile templates
var contentCompile = Handlebars.compile(contentTemplate);  

//add templates to the HTML
$(document.body).append(contentCompile(data));

});
