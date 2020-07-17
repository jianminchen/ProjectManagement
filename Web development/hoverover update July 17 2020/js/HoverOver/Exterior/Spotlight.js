// March 4, 2016
// Exterior/ Spotlight
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorSpotlight = function () {
    var names = ["L730","L930"];   
  
    var menuName = "ExteriorSpotlight".concat("Imagebutton");

    var cssClass = ".slides_control .";

    var wattages = ["275 lm","275 lm"];
   
    var textArray = wattages;    

    hoverover = function () {
        var idArray = prepareIdArray(cssClass, menuName, names);

        mouseHoverOverDetail(idArray, textArray);
    },
    remove = function () {
        var idArray = prepareIdArray(cssClass, menuName, names);

        mouseHoverover_Remove(idArray);
    };  // compile error: , should be ; 

    return {
        hoverover: hoverover,
        remove: remove
    };
}();

/*
JavaScript multiple selector
https://api.jquery.com/multiple-selector/

Action item: 
How to concatenate the CSS class using string concatenation? 

*/
$('.slides_control .ExteriorSpotlightImagebuttonL7300, \
.slides_control .ExteriorSpotlightImagebuttonL9301 \
').hover(function (e) {
    ExteriorSpotlight.hoverover();
}, function () {
    ExteriorSpotlight.remove();
});

