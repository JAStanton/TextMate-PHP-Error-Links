// ==UserScript==
// @name         TextMate Error Linking
// @author       Jonathan Stanton
// @description  Finds Errors on the page and links to TextMate with them.
// ==/UserScript==

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://code.jquery.com/jquery-1.5.2.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}
function main() {
	$.fn.reverse = [].reverse;
	$(".php_error").each(function(){
		var data = $(this).find("b").reverse();	
		var ln = $(data[0]).text();
		var url = $(data[1]).text();
		$(data[0]).html('<a href="txmt://open/?url=file:///'+url+'&line='+ln+'">'+ln+'</a>');
		$(data[1]).html('<a href="txmt://open/?url=file:///'+url+'">'+url+'</a>');
		$('.php_error').wrap('<pre />');
	});
}
addJQuery(main);