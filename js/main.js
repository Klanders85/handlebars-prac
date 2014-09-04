$(document).ready(function(){

var d = new Date();
var n = d.getDay();


var data = {
	headerTitle : 'Shop Page',
	weekDay: d,
	bodyTitle : 'This is from the bodyTitle value',
	bodyContent : 'Same here nucka',
	footerTitle : 'Footer Motherfucker',
	footerContent : 'This is being loaded from the data object'
}

var headerTemplate = $('#header').html();
var bodyTemplate   = $('#body').html();
var footerTemplate = $('#footer').html();

var headerCompile = Handlebars.compile(headerTemplate);  
var bodyCompile = Handlebars.compile(bodyTemplate);  
var footerCompile = Handlebars.compile(footerTemplate);  

$(document.body).append(headerCompile(data));
$(document.body).append(bodyCompile(data));
$(document.body).append(footerCompile(data));
 

});
