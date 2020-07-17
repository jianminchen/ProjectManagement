// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {
	var CROW = {
		
		init: function(elem){
			var self = this;
			self.cebtn = elem.find('.ce_btn');
			self.ceList = elem.find('.ce_list').hide();
			self.container = elem.children('.collasped');
			space_holder = $("<div></div>").addClass('grid_12 space_holder');
			self.container.before(space_holder);
			self.ceList_accessoryShade = elem.find('.ce_list_accesoryShade')
			self.ceList_accessoryShade_SlideUpAuto = elem.find('.ceList_accessoryShade_SlideUpAuto')

			$.each(self.ceList_accessoryShade, function (index, obj) {
			    $(self.ceList_accessoryShade[0]).slideDown('normal');
			    $(self.ceList_accessoryShade[0]).removeClass('ce_btn_deselected').addClass('ce_btn_selected');
			});

			$.each(self.ceList_accessoryShade_SlideUpAuto, function (index, obj) {
			    $(self.ceList_accessoryShade_SlideUpAuto[0]).slideUp('normal');
			    $(self.ceList_accessoryShade_SlideUpAuto[0]).removeClass('ce_btn_selected').addClass('ce_btn_deselected');

			    $(self.ceList_accessoryShade_SlideUpAuto[1]).slideUp('normal');
			    $(self.ceList_accessoryShade_SlideUpAuto[1]).removeClass('ce_btn_selected').addClass('ce_btn_deselected');
			});
		},         	
		
		display: function(flag){
			var self = this;
			$.each(self.ceList, function(index, obj){
				if ($(self.ceList[index]).data('type') === flag && self.ceList.is(":visible") == false)
				{
					$(self.ceList[index]).slideDown('normal').siblings().hide();
				}
				else if ($(self.ceList[index]).data('type') === flag){
					$(self.ceList[index]).fadeIn('slow').siblings().hide();
				}
			});
			self.cebtn.addClass('ce_btn_deselected');
		},
		
		collasp: function(){
			var self = this;
			
			$.each(self.ceList, function(index, obj){
				$(self.ceList[index]).slideUp('normal');
				//$(self.ceList[index]).removeClass('ce_btn_deselected ce_btn_selected');
			});
			//self.ceList.slideUp('normal');
			self.cebtn.removeClass('ce_btn_deselected ce_btn_selected');
		}
	};
	
	$.fn.cefn = function() {
	    return this.each(function () {
	         
			var crow = Object.create(CROW);
			var current;
			var temp;
			var defaultExpand = 0;
			

			var self = this;
			self.ceList_accessoryShade = $(this).find('.ce_list_accesoryShade')
			self.ceList_accessoryShade_SlideUpAuto = $(this).find('.ceList_accessoryShade_SlideUpAuto')

			crow.init($(this));
			
			crow.cebtn.click(function () {
			    var g = $(this);
			    current = g.data('type');
			    
			    $.each(self.ceList_accessoryShade, function (index, obj) {
			        defaultExpand = 1
			        temp = current;
			    });		

			    $.each(self.ceList_accessoryShade_SlideUpAuto, function (index, obj) {
			        defaultExpand = 0
			        temp = null;
			    });

				if (defaultExpand == 0) {
				    if (temp == current) {
				        crow.collasp();
				        temp = null;
				    }
				    else {
				        temp = current;
				        crow.display(temp);
				        g.removeClass('ce_btn_deselected').addClass('ce_btn_selected');
				    }
				} else if (defaultExpand == 1) {
				    if (temp == current) {				        
				        crow.display(temp);
				        g.removeClass('ce_btn_deselected').addClass('ce_btn_selected');
				        temp = null;
				    }
				    else {				       
				        crow.collasp();
				        temp = current; alert(fla);
				    }
				}
			});

	        //rieko added function below
			var over_flg;
			var over_flg_fancy; 

			$('.ce_btn').hover(function () { over_flg = true; }, function () { over_flg = false; });
			$('.fancybox img').hover(function () { over_flg_fancy = true; }, function () { over_flg_fancy = false; });

			$('body').find('.ce_enabled').click(function () {   
			    if (over_flg == false && over_flg_fancy == false) {
			       
			        var navOpen = $(this).find('.ce_list').is(':visible');
			        var accOpen = $(this).find('.ce_list_accesoryShade').is(':visible')
			        var accOpenAuto = $(this).find('.ceList_accessoryShade_SlideUpAuto').is(':visible')

			        if (navOpen == 1) {
			            if (accOpen == 1 || accOpenAuto == 1) {
			                $(this).find('.ce_list').slideUp('normal');
			                $(this).find('.ce_btn').removeClass('ce_btn_deselected ce_btn_selected');
			            } else {
			                $(this).find('.ce_list').slideUp('normal');
			                $(this).find('.ce_btn').removeClass('ce_btn_deselected ce_btn_selected');
			                temp = null;
			            }
			        }
			    } 
			});

			$('.ce_list_accesoryShade').click(function () {
			    $('.ce_list_accesoryShade').slideUp('normal');
			    $(this).find('.ce_btn').removeClass('ce_btn_deselected ce_btn_selected');
			});

			$('.ceList_accessoryShade_SlideUpAuto').click(function () {
			    $('.ceList_accessoryShade_SlideUpAuto').slideUp('normal');
			    $(this).find('.ce_btn').removeClass('ce_btn_deselected ce_btn_selected');
			});
		});
	};
    	
})( jQuery, window, document );