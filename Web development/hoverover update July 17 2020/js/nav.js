// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {
	var NAV_BTN = {
		
		init: function(elem){
			var self = this;
			self.navBtn = elem.find('#nav_list > li > a');
			self.navSection = elem.find('#nav_section_wrapper > .nav_section');
			$('#menu_border').hide(); 
			$('#top_border').not('.top_border_display_none').show();
		},
		
		ShowIt: function(flag){
			var self = this;
			$.each(self.navSection, function(index, obj){
				if ($(self.navSection[index]).data('function') === flag && self.navSection.is(":visible") == false)
				{
				    $(self.navSection[index]).slideDown(250);
				    $('#menu_border').show();
				    $('#top_border').hide();
				    $(self.navSection[index]).addClass('active_menu');
				    //$(self.navBtn[index]).addClass('open_menu')
				}
				else if ($(self.navSection[index]).data('function') === flag){
				    $.when($(self.navSection[index]).siblings().slideUp(250)).then($(self.navSection[index]).delay(400).slideDown(250));
				    $('#menu_border').show();
				    $('#top_border').hide();
				    $(self.navSection[index]).addClass('active_menu');
				    //$(self.navBtn[index]).addClass('open_menu')
				}

				switch(flag){
				    case 'Interior':
				        $('#nav_list li:nth-child(1) a ').addClass('open_menu');
				        break;
				    case 'Exterior':
				        $('#nav_list li:nth-child(2) a ').addClass('open_menu');
				        break;
				    case 'Systems':
				        $('#nav_list li:nth-child(3) a ').addClass('open_menu');
				        break;
				    case 'POWERSUPPLIES':
				        $('#nav_list li:nth-child(4) a ').addClass('open_menu');
				        break;
				    case 'pj':
				        $('#nav_list li:nth-child(5) a ').addClass('open_menu');
				        break;
				    case 'rs':
				        $('#nav_list li:nth-child(6) a ').addClass('open_menu');
				        break;
				
				}
                
			});
			
		},
		
		collasp: function(){
		    var self = this;
		    
			$.each(self.navSection, function(index, obj){
			    $(self.navSection[index]).slideUp(250);
			    $('#menu_border').hide();
			    $('#top_border').not('.top_border_display_none').show();
			    $(self.navBtn[index]).removeClass('open_menu');
			});
		}
	};
	
	$.fn.navFn = function() {
		return this.each(function(){
			var nav_Btn = Object.create(NAV_BTN);
			var current;
			var temp;
			nav_Btn.init($(this));

			nav_Btn.navBtn.click(function(){
				var g =  $(this);
				current = g.data('function');
				
				if(temp == current)
				{
					nav_Btn.collasp();
					temp = null;
					$('#nav_list li a').removeClass('open_menu');
				}
				else{
				    temp = current;
				    $('#nav_list li a').removeClass('open_menu');
					nav_Btn.ShowIt(temp);
				}
			
			});	

			var over_flg;

			$('#nav_list').hover(function () { over_flg = true; }, function () { over_flg = false; });

			//$('.nav_section a').hover(function () { over_flg2 = true; }, function () { over_flg2 = false; over_flg = true; });

			$('body').click(function () {
			    $('.nav_section a').click(function () {
			        over_flg = true;
			    });

			    if (over_flg == false) {
			        
			        var navOpen = $('.active_menu').is(':visible');

			        if (navOpen == 1) {
			                $('.nav_section').slideUp(250);
			                $('#menu_border').hide();
			                $('#top_border').not('.top_border_display_none').show();
			                temp = null;
			                $('#nav_list li a').removeClass('open_menu');
			        }
		      
			    }
			    //else if (over_flg2 == true) {

			    //    //alert('hello');
			    //    var navOpen = $('.active_menu').is(':visible');
			    //    if (navOpen == 1) {
			    //        $('.nav_section').slideUp('50');
			    //        $('#menu_border').hide();
			    //        temp = null;
			    //    }
			    //}
			    
			    
			});


			var prevTop = 0;
			$(window).scroll(function () {

			    var currentTop = $(this).scrollTop();
			    if (prevTop != currentTop) {
			        nav_Btn.collasp();
			        
			    temp = null;
			    }
			    

			    $('header').css('left', '-' + $(window).scrollLeft() + 'px');
			    $('footer').css('left', '-' + $(window).scrollLeft() + 'px');
			    $('footer').css('padding-right', '' + $(window).scrollLeft() + 'px');
			});

		});
	};

	
})( jQuery, window, document );