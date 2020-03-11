//////////////////////////////////////////////////
////  Skills Scripts  ////////////////////////////
//////////////////////////////////////////////////

$(document).ready(function() {
	
	/* Sticky .what_should_stuck */
	
	var skills = new Waypoint.Sticky({
		element: $('#skills .what_should_stuck')[0],
		handler: function(direction) {
			$('#section-img .overlay').toggleClass('hard');
		}
	})
	
	
	/* Toggle Class when skillBottom */
	
	var skillBottom = new Waypoint({
		element: $('#placeSkillBottom'),
		handler: function(direction) {
			$('#skills .what_should_stuck').toggleClass('bottom');
		}
	})
});