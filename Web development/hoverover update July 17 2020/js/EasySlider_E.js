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
			prevId: 		'prevEBtn',
			prevText: 		'Previous',
			nextId: 		'nextEBtn',	
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
			numericId: 		'controls'
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
			obj.css("overflow", "hidden");   // debug hidden initial
			var ts = s-1;
			var t = 0;
			//$("ul", obj).css('width', 7 * w);
			$("ul", obj).css('width',s*w);										
			
			if(!options.vertical) $("li", obj).css('float','left');
								
			if(options.controlsShow){
				var html = options.controlsBefore;								
					
			    html += ' <span id="'+ options.prevId +'" class="EducationB"><a href=\"javascript:void(0);\">'+ options.prevText +'</a></span>';
			    html += ' <span id="' + options.nextId + '" class="EducationB"><a href=\"javascript:void(0);\">' + options.nextText + '</a></span>';
				
				html += options.controlsAfter;

				if (($("div").find("#EasySliderPageNoId").length)) {
				    var inputObj = $("div").find("#EasySliderPageNoId");
				    t=parseInt(inputObj.val());
				}

				//if (($("div").find("span").length)) {
				if (($("div").find("#prevEBtn").length)) {			    

				}else
				    $(obj).after(html);										
			};
			
			
			$("a","#"+options.nextId).click(function(){		
			    animate("next", true);		    
		   
			});
			$("a","#"+options.prevId).click(function(){		
			    animate("prev", true);

			   
			});	
			$("a","#"+options.firstId).click(function(){		
			    animate("first", true);

			  
			});				
			
			
			function setCurrent(i){
				i = parseInt(i)+1;
				$("li", "#" + options.numericId).removeClass("current");
				$("li#" + options.numericId + i).addClass("current");
			};
			
			function adjust(){
				if(t>ts) t=0;		
				if(t<0) t=ts;	
				if(!options.vertical) {
				    $("ul", obj).css("margin-left", (t * w * -1));				  			    
				    
				    if (t == 0) {
				        document.getElementById("education_caption").innerHTML = 'IN-GRADE';
				        document.getElementById("project_row_project").innerHTML = '<div class="grid_9 product_inl_x project_link educationTextAlign">In-grade luminairies are among the most ersatile light sources. Depedning on the application, they can be used as indicator luminaire, directional luminaire, or all washer. In-grades are installed at ground level, usually directing an upward or outward light beam to mark walkways, highlight entrances, illuminate signs, or showcase textures/ surfaces. Round or square versions are available to suit a variety of applications, architecture, and landscapes.</div>';

				        document.getElementById("proejct_row_educationImgs").innerHTML = '<div class="demoImgEducation"><img src="../img/education/Images/Ingrade/RS_x_1.jpg"   alt="x1"  class="demoEduImg "/></div><div class="demoImgEducation"><img src="../img/education/Images/Ingrade/RS_x_2.jpg"   alt="x1"  class="demoEduImg "/></div><div class="demoImgEducation"><img src="../img/education/Images/Ingrade/RS_x_3.jpg"   alt="x1"  class="demoEduImg "/></div><div class="demoImgEducation demoImgEductionClear"><img src="../img/education/Images/Ingrade/RS_x_4.jpg"   alt="x1"  class="demoEduImg "/></div>';

				    }
				    else if (t == 1) {
				        document.getElementById("education_caption").innerHTML = 'WALL MOUNT';
				        document.getElementById("project_row_project").innerHTML = '<div class="grid_9 product_inl_x project_link educationTextAlign">Wall Mount is a great choice as well. </div>';

				        document.getElementById("proejct_row_educationImgs").innerHTML = 'Wall mount images will come very soon.'; 
				    }
				    else if (t == 2) {
				        document.getElementById("education_caption").innerHTML = 'CABINET';
				        document.getElementById("project_row_project").innerHTML = '<div class="grid_9 product_inl_x project_link educationTextAlign">Cabinet is a great choice as well. </div>';

				        document.getElementById("proejct_row_educationImgs").innerHTML = '<div class="demoImgEducation"><img src="../img/education/Images/Cabinet/L58_application.jpg"   alt="x1"  class="demoEduImg "/></div>';
				    }
				    else if (t == 3) {
				        document.getElementById("education_caption").innerHTML = 'SPOTLIGHT';
				        document.getElementById("project_row_project").innerHTML = '<div class="grid_9 product_inl_x project_link educationTextAlign">Spotlight is a great choice as well. </div>';

				        document.getElementById("proejct_row_educationImgs").innerHTML = 'Spotlight images will come very soon.';
				    }
				    else if (t == 4) {
				        document.getElementById("education_caption").innerHTML = 'PENDANT';
				        document.getElementById("project_row_project").innerHTML = '<div class="grid_9 product_inl_x project_link educationTextAlign">Pendant is a great choice as well. </div>';

				        document.getElementById("proejct_row_educationImgs").innerHTML = 'Pendant images will come very soon.';
				    }
				    else if (t == 5) {
				        document.getElementById("education_caption").innerHTML = 'DOWNLIGHT';
				        document.getElementById("project_row_project").innerHTML = '<div class="grid_9 product_inl_x project_link educationTextAlign">Downlight is a great choice as well. </div>';

				        document.getElementById("proejct_row_educationImgs").innerHTML = 'Downlight images will come very soon.';
				    }
				    else if (t == 6) {
				        document.getElementById("education_caption").innerHTML = 'LINEAR';
				        document.getElementById("project_row_project").innerHTML = '<div class="grid_9 product_inl_x project_link educationTextAlign">Linear is a great choice as well. </div>';

				        document.getElementById("proejct_row_educationImgs").innerHTML = 'Linear images will come very soon.';
				    }
				    
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



