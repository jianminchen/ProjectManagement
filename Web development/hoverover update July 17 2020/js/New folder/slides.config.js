$(document).ready(function() {  

		$('#slides').slides({
			preload: true,
			preloadImage: 'img/slideshow/loading.gif',
			generatePagination: true,
			play: 0,
			pause: 4000,
			hoverPause: true,
			effect: 'fade',
			// Get the starting slide
			start: 0
		});

	});