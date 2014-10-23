$(document).ready(function(){

// data goes here that will be dynamic -- JSON FORMAT!
var data = {
	"bandName"     :[ "Metallica",
					   "APC",
					   "Mudvayne",
					   "Daft Punk"
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
