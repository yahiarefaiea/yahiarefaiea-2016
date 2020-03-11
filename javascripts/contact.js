//////////////////////////////////////////////////
////  Contact Scripts  ///////////////////////////
//////////////////////////////////////////////////

$(document).ready(function() {
	
	var contact = new Waypoint({
		element: $('#contact'),
		handler: function(direction) {
			$('#section-img .overlay').toggleClass('hard');
			
			$('#resume').removeClass('tiny');
			
			if(direction == "down") {
				$('#contact').addClass('active');
				
				setTimeout(function() {
					$('#resume').addClass('hint--always hover');
				}, 420);
			} else {
				$('#contact').removeClass('active');
				
				$('#resume').removeClass('hint--always hover');
			}
			
			/* Focus the first Field using .focus() */
//			if($('#contact').hasClass('active')) {
//				setTimeout(function() {
//					$('#contact input[name="name"]').focus();
//				}, 640);
//			} else {
//				$('#contact input[name="name"]').blur();
//			}
		}
	})
	
	/* Adding .focus when the Textarea is not Empty */
	$('#contact textarea[name="message"]').on('keydown', function() {
		if($('#contact textarea[name="message"]').val() != '') {
			$('#contact textarea[name="message"]').addClass('focus');
		} else {
			$('#contact textarea[name="message"]').removeClass('focus');
		}
	});
});