$(function(){
	$('#slideshow_frame').slides({
		preload: true,
		preloadImage: '../img/slideshow/loading.gif',
		effect: 'slide, fade',
		crossfade: true,
		slideSpeed: 350,
		fadeSpeed: 500,
		generateNextPrev: false,
		generatePagination: false
	});
});