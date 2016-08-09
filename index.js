$(document).ready(function() {

	// $getJSON method is used to get JSON data using an AJAX HTTP GET request 
	$getJSON('topspots.json', function(data) {

		// $.each method is like a Loop, it takes in an array
		// You also pass in a callback function that accepts 2 parameters
		// The function will be called on for the amount of items on the array
		// The index always starts at 0, so if there are 10 things it will end at 9

		$.each(topspots, function(index, topspot) {

			// We grabbed the Table ID called topSpot and also the tbody. You could of also gave tbody an ID 
			// The Append Method inserts specified content at the end of the selected items
			// topspot.name = Going to the topspots.json and getting the name property from the topspot object
			$("#topSpotsTable tbody").append('<tr><td>' + topspot.name + '</td><td>' + topspot.description + '</td><td><a href="google.com/maps?q=' + topspot.location +'">Click here to open in Google Maps</a></td></tr>');


		});
	});
});