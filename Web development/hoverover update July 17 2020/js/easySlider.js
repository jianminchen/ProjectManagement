/*
 * 	Easy Slider 1.7 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/4004/easy-slider-15-the-easiest-jquery-plugin-for-sliding
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

(function($) {

	$.fn.easySlider = function(options){
	  
		// default configuration properties
		var defaults = {			
			prevId: 		'prevBtn',
			prevText: 		'Previous',
			nextId: 		'nextBtn',	
			nextText: 		'Next',
			controlsShow:	true,
			controlsBefore:	'',
			controlsAfter:	'',	
			controlsFade:	true,
			firstId: 		'firstBtn',
			firstText: 		'First',
			firstShow:		false,
			lastId: 		'lastBtn',	
			lastText: 		'Last',
			lastShow:		false,				
			vertical:		false,
			speed: 			800,
			auto:			false,
			pause:			2000,
			continuous:		false, 
			numeric: 		false,
			numericId: 'controls',
			defaultPage: 2,
			queryName: 'PageNo', // the query parameter name for the default tab
			queryNameProject: 'Project'
		}; 
		
		var options = $.extend(defaults, options);  
				
		this.each(function() {  
			var obj = $(this); 				
			var s = $("li", obj).length;
			var w = $("li", obj).width(); 
			var h = $("li", obj).height(); 
			var clickable = true;
			obj.width(w); 
			obj.height(h); 
			obj.css("overflow","hidden");
			var ts = s-1;
			var t = 0;    // 7/24/2014
			
			//$("ul", obj).css('width', 7 * w);
			$("ul", obj).css('width',s*w);										
			
			if(!options.vertical) $("li", obj).css('float','left');
								
			if(options.controlsShow){
				var html = options.controlsBefore;								
					
			    html += ' <span id="'+ options.prevId +'"><a href=\"javascript:void(0);\">'+ options.prevText +'</a></span>';
				html += ' <span id="'+ options.nextId +'"><a href=\"javascript:void(0);\">'+ options.nextText +'</a></span>';								
				
				html += options.controlsAfter;

				if (($("div").find("#EasySliderPageNoId").length)) {
				    var inputObj = $("div").find("#EasySliderPageNoId");
				    t=parseInt(inputObj.val());
				}

				if (($("#slideshow_frame #carousel_project div").find("span").length)) {

				}else
				    $(obj).after(html);										
			};
			
			var _PageIDUrlIndex = getPageIDFromUrl();
			for (var i = 0; i < _PageIDUrlIndex; i++) {
			    animate("next", true);
			    clickable = true;
			}

			var projectUrl = getProjectFromUrl();
			if (projectUrl == "Robson1") {
			    var ImgSrc = "../img/projects/RS/RS_x_1.jpg";
			    var ImgAlt = "Robson Square";
			    $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
			    $("img#MainPhoto").hide();
			    $("img#MainPhoto").fadeIn("normal");

			    $("img#robson1").addClass('active_project');
			    $('img.ChangePhoto').not("img#robson1").removeClass('active_project');

			    $("#robson1").trigger("click");			  
			}
			else if (projectUrl == "NYPalaceHotel1") {
			    var ImgSrc = "../img/projects/NYPalaceHotel/L01_NY-palace-hotel.jpg";
			    var ImgAlt = "NY Palace Hotel";
			    $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
			    $("img#MainPhoto").hide();
			    $("img#MainPhoto").fadeIn("normal");

			    $("img#NYPalaceHotel1").addClass('active_project');
			    $('img.ChangePhoto').not("img#NYPalaceHotel1").removeClass('active_project');

			    $("#NYPalaceHotel1").trigger("click");
			}
			else if (projectUrl == "CraftBeerMarket3") {
			    var ImgSrc = "../img/projects/CraftBeerMarket/CraftBeer03.jpg";
			    var ImgAlt = "Craft Beer Market";
			    $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
			    $("img#MainPhoto").hide();
			    $("img#MainPhoto").fadeIn("normal");

			    $("img#CraftBeerMarket3").addClass('active_project');
			    $('img.ChangePhoto').not("img#CraftBeerMarket3").removeClass('active_project');

			    $("#CraftBeerMarket3").trigger("click");
			}
			else if (projectUrl == "Princeton1") {
			    var ImgSrc = "../img/projects/CraftBeerMarket/CraftBeer03.jpg";
			    var ImgAlt = "Princeton University";
			    $("img#MainPhoto").attr({ src: ImgSrc, alt: ImgAlt });
			    $("img#MainPhoto").hide();
			    $("img#MainPhoto").fadeIn("normal");

			    $("img#Princeton1").addClass('active_project');
			    $('img.ChangePhoto').not("img#Princeton1").removeClass('active_project');

			    $("#Princeton1").trigger("click");
			}


			
			$("a","#"+options.nextId).click(function(){		
				animate("next",true);
			});
			$("a","#"+options.prevId).click(function(){		
				animate("prev",true);				
			});	
			$("a","#"+options.firstId).click(function(){		
				animate("first",true);
			});				
			$("a","#"+options.lastId).click(function(){		
				animate("last",true);				
			});				
			
		    /**
			 * Get the tab index from the query parameter if provided
			 */
			function getPageIDFromUrl() {
			    var _currentUrl = window.location.href,
					_params = _currentUrl.slice(_currentUrl.indexOf('?') + 1).split('&'),
					i = 0,
					_paramsLength = _params.length,
					_value = '';
			    for (i; i < _paramsLength; i++) {
			        _value = _params[i].split('=');
			        if (_value[0] === options.queryName) {
			            return _value[1];
			        }
			    }
			    return 0;
			};

			function getProjectFromUrl() {
			    var _currentUrl = window.location.href,
					_params = _currentUrl.slice(_currentUrl.indexOf('?') + 1).split('&'),
					i = 0,
					_paramsLength = _params.length,
					_value = '';
			    for (i; i < _paramsLength; i++) {
			        _value = _params[i].split('=');
			        if (_value[0] === options.queryNameProject) {
			            return _value[1];
			        }
			    }
			    return '';
			};

			function setCurrent(i){
				i = parseInt(i)+1;
				$("li", "#" + options.numericId).removeClass("current");
				$("li#" + options.numericId + i).addClass("current");
			};
			
			function adjust(){
				if(t>ts) t=0;		
				if(t<0) t=ts;	
				if(!options.vertical) {
					$("ul",obj).css("margin-left",(t*w*-1));
				} else {
					$("ul",obj).css("margin-left",(t*h*-1));
				}
				clickable = true;
				if(options.numeric) setCurrent(t);
			};
			
			function animate(dir,clicked){
				if (clickable){
					clickable = false;
					var ot = t;				
					switch(dir){
						case "next":
							t = (ot>=ts) ? (options.continuous ? t+1 : ts) : t+1;						
							break; 
						case "prev":
							t = (t<=0) ? (options.continuous ? t-1 : 0) : t-1;
							break; 
						case "first":
							t = 0;
							break; 
						case "last":
							t = ts;
							break; 
						default:
							t = dir;
							break; 
					};	
					var diff = Math.abs(ot-t);
					var speed = diff*options.speed;						
					if(!options.vertical) {
						p = (t*w*-1);
						$("ul",obj).animate(
							{ marginLeft: p }, 
							{ queue:false, duration:speed, complete:adjust }
						);				
					} else {
						p = (t*h*-1);
						$("ul",obj).animate(
							{ marginTop: p }, 
							{ queue:false, duration:speed, complete:adjust }
						);					
					};
					
					if(!options.continuous && options.controlsFade){					
						if(t==ts){
							$("a","#"+options.nextId).hide();
							$("a","#"+options.lastId).hide();
						} else {
							$("a","#"+options.nextId).show();
							$("a","#"+options.lastId).show();					
						};
						if(t==0){
							$("a","#"+options.prevId).hide();
							$("a","#"+options.firstId).hide();
						} else {
							$("a","#"+options.prevId).show();
							$("a","#"+options.firstId).show();
						};					
					};				
					
					if(clicked) clearTimeout(timeout);
					if(options.auto && dir=="next" && !clicked){;
						timeout = setTimeout(function(){
							animate("next",false);
						},diff*options.speed+options.pause);
					};
				};
			};
			
			var timeout;
			if(options.auto){;
				timeout = setTimeout(function(){
					animate("next",false);
				},options.pause);
			};		
			
			if(options.numeric) setCurrent(0);
		
			if((!options.continuous && options.controlsFade)&& t==0){					
				$("a","#"+options.prevId).hide();
				$("a","#"+options.firstId).hide();				
			};		
		});
	};

})(jQuery);



