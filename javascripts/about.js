//////////////////////////////////////////////////
////  About Scripts  /////////////////////////////
//////////////////////////////////////////////////

$(document).ready(function() {
	
	/* Sticky .section-mage */
	
	var sectionImage = new Waypoint.Sticky({
		element: $('#section-img')[0],
		handler: function(direction) {
			$('#section-img').parent().toggleClass('absolute');
		}
	})
});