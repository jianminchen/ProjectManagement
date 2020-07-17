function pageLoad() {
$(function(){
	// Set starting slide to 1
	var startSlide = 1;
	// Get slide number if it exists
	if (window.location.hash) {
		startSlide = window.location.hash.replace('#','');
	}

	// Initialize Slides
	$('#carousel_product').slides({
		preload: true,
		preloadImage: '../img/slideshow/loading.gif',
		generatePagination: false,
		play: 0,
		prev:'carousel-prev',
		next:'carousel-next',
		// Get the starting slide
		start: startSlide
	});

	////////   prev and next btn hide/show

	$('#carousel_product .slides_container div.slide:last-child').addClass('last');
	$('#carousel_product .slides_container div.slide:first-child').addClass('first1');
	$('#carousel_product .slides_container div.slide:nth-child(2)').addClass('first2');
          
	$('.carousel-next').click(function () {
	    if (($('.last').is(':visible')) == 1) {	        
	        $('.carousel-next').css('display', 'none');	       
	    }
	    
	    $('.carousel-prev').css('display', 'block');
	})
           
	if ($('.first2').length) {
	    if (($('.first1').is(':visible')) == 1) {
	        $('.carousel-prev').css('display', 'none');
	        $('#car_prev').css('height', '10px');
	    }
	}

	$('.carousel-next').click(function () {
	    $('.carousel-prev').css('display', 'block');
	})

	$('.carousel-prev').click(function () {
        $('.carousel-next').css('display', 'block');

	    if (($('.first1').is(':visible')) == 1) {
	        $('.carousel-prev').css('display', 'none');
	        $('#car_prev').css('height', '10px');
	    }
	})

    ////////prev and next btn hide/show ends
	$('#slides').slides({
	    preload: true,
	    preloadImage: '../img/slideshow/loading.gif',
	    generatePagination: true,
	    play: 0,
	    pause: 4000,
	    hoverPause: true,
	    effect: 'fade',
	    // Get the starting slide
	    start: 0
	});

	$(".product_ul li input").click(function () {

	    $("#render_container").hide();
	    $("#render_container").fadeIn('slow');
	
	});

	$('#data_container .ce_enabled').cefn();

	var d_toggle = $('#d_toggle'),
		d_layer = $('#dimension_layer');

	d_toggle.on('click', function () {
	    var $this = $(this);
	    d_layer.fadeToggle('normal', 'linear');
	    $this.text($this.text() == '[+] SHOW DIMENSION' ? '[-] HIDE DIMENSION' : '[+] SHOW DIMENSION');
	});
    
	var carousel_container = $('#carousel_container'),
		carousel_border = $('#carousel_b_border'),
		distancetop = carousel_container.position().top;

	var carousel_toggle = $('#carousel_toggle').addClass('carousel_toggle_on'),
		carousel_product = $('#carousel_product').show();

    var overview_toggle = $('#overview_toggle').addClass('overview_toggle_on'),
		overview_info = $('.overview_info').show();  // 2019-09-17 hide()->show()

    var product_overview_toggle = $('#product_overview_section'),
       product_overview_info = $('.overview_info').show(); // 2019-09-17 hide()->show()

	var render_container = $('#render_container');

	var i = 0;

	if (($("div").find("#PowerSuppliesMainMenu").length)) {
	    overview_info = $('.overview_info').show();
	    product_overview_info = $('.overview_info').show();

	    if ($('#overview_toggle').hasClass('overview_toggle_on')) {
	    } else {
	        overview_toggle.removeClass('overview_toggle_off');
	        overview_toggle.toggleClass('overview_toggle_on');
	    }
	}
 
    carousel_toggle.unbind();
    overview_toggle.unbind();
    product_overview_toggle.unbind();

	carousel_toggle.on('click', function () {
	    var $this = $(this);
	    carousel_product.slideToggle('normal');
	    //$this.toggleClass('carousel_toggle_off');
	    //console.log(++i);
	    carousel_toggle.toggleClass('carousel_toggle_off');  
	});
    
	if ($('.overview_info').is(':visible') == 0) {
	    overview_toggle.removeClass('overview_toggle_on');
	}

	overview_toggle.on('click', function () {
	    var $this = $(this);
	    overview_info.slideToggle('normal'); 
	    $this.toggleClass('overview_toggle_on');
	    //console.log(++i);
	    overview_toggle.toggleClass('overview_toggle_off');
	});

	product_overview_toggle.on('click', function () {
	    var $this = $(this);
	    product_overview_info.slideToggle('normal');

	    if ($('#overview_toggle').hasClass('overview_toggle_on')) {
	        overview_toggle.removeClass('overview_toggle_on');
	        overview_toggle.toggleClass('overview_toggle_off');
	    } else {
	        overview_toggle.removeClass('overview_toggle_off');
	        overview_toggle.toggleClass('overview_toggle_on');
	    }
	});	    

	if ($("div").find("#MainMenuSelectedInterior").length) {
	    $('.MenuItemsColorClass').css('color', '#333');
	    $('[data-function=Interior]').css('color', '#FCB31C');       
	}

	if ($("div").find("#MainMenuSelectedExterior").length) {
	    $('.MenuItemsColorClass').css('color', '#333');
	    $('[data-function=Exterior]').css('color', '#FCB31C');	    
	}

    //MainMenuSelectedSystem
	if ($("div").find("#MainMenuSelectedSystem").length) {
	    $('.MenuItemsColorClass').css('color', '#333');
	    $('[data-function=Systems]').css('color', '#FCB31C');	   
	}

    //MainMenuSelectedPowerSupplies
	if ($("div").find("#MainMenuSelectedPowerSupplies").length) {
	    $('.MenuItemsColorClass').css('color', '#333');
	    $('[data-function=POWERSUPPLIES]').css('color', '#FCB31C');	   
	}     

	$(".fancybox").fancybox({
	    padding: 0,
	    openEffect: 'elastic',
	    openSpeed: 150,
	    closeEffect: 'elastic',
	    closeSpeed: 150,
	    closeClick: true,
	    helpers: {
	        overlay: true
	    }
	});

	$(".ce_enabled").hover(function () {
	    $(this).find('.mountlist').addClass('border_on');
	}, function () {
	    $(this).find('.mountlist').removeClass("border_on");
	});
});

    // added on July 16, 2020
$.getScript("js/MenuItems/InteriorIngrade.js");
$.getScript("js/MenuItems/ExteriorIngrade.js");

$.getScript("js/DataStructure/Dictionary.js");
$.getScript("js/hoverover/DataEntry/cutoutSize.js");
$.getScript("js/hoverover/DataEntry/cutoutSizeMm.js");
$.getScript("js/hoverover/DataEntry/fixtureOutput.js");
$.getScript("js/hoverover/DataEntry/ledOutput.js");
$.getScript("js/hoverover/DataEntry/wattage.js");

    //finish hover over 
    $.getScript("js/finshIconHoverOver/finishIconHoverOver.js");

    // March 4, 2016 - add mouse hoverover work for MP Lighting products
$.getScript("js/HoverOver/basicHoverOver.js");

    // customized - August 28, 2019
$.getScript("js/HoverOver/customized/hoverOverTitle.js");
   
    // Interior
    $.getScript("js/HoverOver/Interior/Ingrade.js");                
    /*$.getScript("js/HoverOver/Interior/WallMount.js");
    $.getScript("js/HoverOver/Interior/Cabinet.js");     
    $.getScript("js/HoverOver/Interior/Spotlight.js");
    $.getScript("js/HoverOver/Interior/Picture.js");
    $.getScript("js/HoverOver/Interior/SurfaceMountDownlight.js");
    $.getScript("js/HoverOver/Interior/SurfaceMountUplight.js");    
    $.getScript("js/HoverOver/Interior/RecessedDownlight.js");
    $.getScript("js/HoverOver/Interior/Desk.js");    
    $.getScript("js/HoverOver/Interior/Elevator.js");
    $.getScript("js/HoverOver/Interior/Pendant.js");
    $.getScript("js/HoverOver/Interior/Linear.js");
    $.getScript("js/HoverOver/Interior/WarmDimming.js");
    $.getScript("js/HoverOver/Interior/WineRack.js");
    $.getScript("js/HoverOver/Interior/Carpet.js"); */

    // Exterior 
    $.getScript("js/HoverOver/Exterior/Ingrade.js");
    /*$.getScript("js/HoverOver/Exterior/WallMount.js");
    $.getScript("js/HoverOver/Exterior/Bollard.js");
    $.getScript("js/HoverOver/Exterior/Spotlight.js");
    $.getScript("js/HoverOver/Exterior/SurfaceMountDownlight.js");        
    $.getScript("js/HoverOver/Exterior/RecessedDownlight.js");
    $.getScript("js/HoverOver/Exterior/Pendant.js");
    $.getScript("js/HoverOver/Exterior/Linear.js");
    $.getScript("js/HoverOver/Exterior/Windowsill.js");
    $.getScript("js/HoverOver/Exterior/WildlifeLighting.js");
    $.getScript("js/HoverOver/Exterior/Submersible.js");
    $.getScript("js/HoverOver/Exterior/SubmersibleLandscape.js");    */
    
    // Systems
    /*$.getScript("js/HoverOver/Systems/SystemsTwoCircuitTrack.js");
    $.getScript("js/HoverOver/Systems/SystemsBlackSingleRail.js");
    $.getScript("js/HoverOver/Systems/SystemsCableSystem.js");        
    $.getScript("js/HoverOver/Systems/SystemsDualCircuitRail.js");      
    $.getScript("js/HoverOver/Systems/HorizontalDoubleRail.js");
    $.getScript("js/HoverOver/Systems/SystemsSingleRail.js");
    $.getScript("js/HoverOver/Systems/SystemsSingleRailWallFlush.js");
    $.getScript("js/HoverOver/Systems/VerticalDoubleRail.js");
    $.getScript("js/HoverOver/Systems/SystemsThreeCircuitTrack.js"); */

    // Power Supplies - Added on Oct. 25 - Oct. 27, 2016
    $.getScript("js/HoverOver/PowerSupplies/DimmableDriver.js");
    $.getScript("js/HoverOver/PowerSupplies/NonDimmableDriver.js");
    $.getScript("js/HoverOver/PowerSupplies/ConstantCurrentDriver.js");    
    $.getScript("js/HoverOver/PowerSupplies/ConstantVoltageDriver.js");
    $.getScript("js/HoverOver/PowerSupplies/SurfaceMountDriver.js");
    $.getScript("js/HoverOver/PowerSupplies/ElectronicTransformer.js");
    $.getScript("js/HoverOver/PowerSupplies/MagneticTransformer.js");
    $.getScript("js/HoverOver/PowerSupplies/SurfaceMountTransformer.js");       
    
    // --  end of mouse hoverover work   
    // end of testing 

    // recommended driver webpage - hoverover driver image, then show download links
    $('.rdflf_image_link').hover(function (e) {

        var link = $(this).find('a').attr('href');
        var text = $('<a href="'+ link +'"><p style="color:white;">Download Spec Sheet</p></a>');
        var div = $('<div id="driver_spec_link" class="driver_spec_download">').css({
            //"position": "absolute",
            //"z-index": "1000",
            //"border": "1px solid #d9d9d9"
        });
        div.append(text);
        $(this).append(div);

        //var mydiv = document.getElementById("driver_spec_link");
        //var aTag = document.createElement('a');
        //aTag.setAttribute('href', link);
        //aTag.innerHTML = "link text";
        //mydiv.appendChild(aTag);

    }, function () {
        $('.driver_spec_download').remove();
    });
};
//$(document).ready(function () { });
$(window).load(function () { });