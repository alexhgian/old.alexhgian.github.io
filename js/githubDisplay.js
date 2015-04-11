// jQuery for github getting
$(function() {
	console.log("Getting repo...");
	$.getJSON('https://api.github.com/users/alexhgian', function( data ) {
		//console.log(data);
	});

	$.getJSON('https://api.github.com/users/alexhgian/repos', function( data ) {
		data.forEach(function(element,index,array){
			 console.log('name:', element);
			buildTable(element.name,element.description,element.html_url)
		});

	});

});


var buildTable = function(hData, pData, lData){
	var jsonData = {};

	$row = $('#project-row');

	var $portDiv = $('<div class="col-md-4 portfolio-item"/>');
	var $header = $('<h3/>').append(hData);
	var $paragraph = $('<p/>').append(pData);
	var $icon = $('<i class="fa fa-github"></i>');
	var $link = $('<a/>').append(' Learn more here');

	$link.attr('href',lData);
	$icon.append($link);

	$portDiv.append($header);
	$portDiv.append($paragraph);
	$portDiv.append($icon);
	$row.append($portDiv);

}
//
// <div class="col-sm-4 portfolio-item">
// 	<h3>Project</h3>
// 	<p>
// 		Donec id elit non mi porta gravida at eget metus. Fusce
// 		dapibus.
// 	</p>
// 	<a>Learn more here</a>
// </div>
