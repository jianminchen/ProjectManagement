function mycarousel_initCallback(carousel) {
			$('#mycarousel-next').bind('click', function() {
				carousel.next();
				return false;
			});

			$('#mycarousel-prev').bind('click', function() {
				carousel.prev();
				return false;
			});
};

function pageLoad() {
    $(function () {
        $('#data_container .ce_enabled').cefn();
       
    });
};
 
$(document).ready(function() {
	var carousel_container = $('#carousel_container'),
				carousel_bar = $('#carousel_bar'),
				carousel_border = $('#carousel_b_border'),
				top_spacing = 0,
				waypoint_offset = 0;
			
		carousel_container.waypoint({
			handler: function(event, direction) {
				if (direction == 'down') {
					carousel_container.css({ 'height':carousel_bar.outerHeight()});
					carousel_bar.stop().addClass("sticky").css("top",-carousel_bar.outerHeight()).animate({"top":0},300);
					carousel_border.stop().addClass("carousel_b_border_shadow");
				} else {
					carousel_container.css({ 'height':'auto' });
					carousel_bar.stop().removeClass("sticky").css("top",carousel_bar.outerHeight()).animate({"top":""},300);
					carousel_border.stop().removeClass("carousel_b_border_shadow");
				}
			},
			offset: function() {
				return -carousel_bar.outerHeight();
			}
		});
			
		var d_toggle = $('#d_toggle'),
			d_layer = $('#dimension_layer');
		
		d_toggle.on('click',function(){
			var $this = $(this);
			d_layer.fadeToggle('normal', 'linear');
			$this.text($this.text() == '[+] SHOW DIMENSION' ? '[-] HIDE DIMENSION' : '[+] SHOW DIMENSION');
		});

		$("#mycarousel").jcarousel({
			scroll: 6,
			visible: 7,
			animation: "normal",
			initCallback: mycarousel_initCallback,
			// This tells jCarousel NOT to autobuild prev/next buttons
			buttonNextHTML: null,
			buttonPrevHTML: null
		});
		
		var carousel_toggle = $('#carousel_toggle').addClass('carousel_toggle_on'),
			carousel_product = $('#carousel_product').show();
		
		carousel_toggle.on('click', function(){
			var $this = $(this);
			carousel_product.slideToggle('normal');
			$this.toggleClass('carousel_toggle_off');
		});
});