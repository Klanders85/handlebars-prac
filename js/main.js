$(document).ready(function(){

var d = new Date();
var n = d.getDay();


var data = {
	headerTitle: "Shop Page",
	weekDay: d
}

var theTemplateScript = $("#header").html();

var theTemplate = Handlebars.compile(theTemplateScript);  

$(document.body).append(theTemplate(data));
 

});
