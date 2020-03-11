//////////////////////////////////////////////////
////  Experience Scripts  ////////////////////////
//////////////////////////////////////////////////

$(document).ready(function() {
	
	/* Sticky .what_should_stuck */
	
	var experience = new Waypoint.Sticky({
		element: $('#experience .what_should_stuck')[0]
	})
	
	
	/* Toggle Class when skillBottom */
	
	var expBottom = new Waypoint({
		element: $('#placeExpBottom'),
		handler: function(direction) {
			$('#experience .what_should_stuck').toggleClass('bottom');
		}
	})
});