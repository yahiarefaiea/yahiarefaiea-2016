//////////////////////////////////////////////////
////  Hello Scripts  /////////////////////////////
//////////////////////////////////////////////////

/* Disable Scrolling */

$(window).disablescroll();

/* jpreLoader Options and Callback */

$(document).ready(function() {
	$('body').jpreLoader({
		showSplash: false,
		loaderVPos: '13%',
		splashVPos: 0
	}, function() {
		$('.hello, #navigation').addClass('ready');
		setTimeout(function() {
			
			// Remove jpreloader Container
			$('#jpreContent').remove();
			
			// Change Text in .changeable
			$('.changeable').typed({
				strings: ["'m <h1>Pleased To Meet You</h1>",
						  "'m <h1>A Web Designer</h1>",
						  "'m <h1>A Graphic Designer</h1>",
						  "'m <h1>From Syria</h1>",
						  " Do <h1>Creative Stuff</h1>",
						  " Do <h1>Incredibly Insane Animation</h1>",
						  " Love to <h1>Discover New Things</h1>",
						  " Love to <h1>Cook Food</h1>",
						  " Love <h1>Kitties, Pizza &amp; Coffee</h1>"],
				backSpeed: 21,
				backDelay: 1450,
				loop: true,
				showCursor: false,
				contentType: 'html'
			});
			
			// Remove .active to the first list item to fix some issues
			$('#navigation > ul > li:first-child').removeClass('active');
			
		}, 1800);
		
		setTimeout(function() {
			
			// Add .active to the first list item in the #navigation
			$('#navigation > ul > li:first-child').addClass('active');
			
			// #wrapper is ready
			$('#wrapper').addClass('ready');
			
			// Enable Scrolling
			$(window).disablescroll('undo');
			
		}, 5025);
	});
});