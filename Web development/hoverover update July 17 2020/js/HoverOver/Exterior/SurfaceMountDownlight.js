// March 4, 2016
// Exterior/ Surface Mount Downlight
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorSurfaceMountDownlight = function () {
    var pName = ["L131", "L600","L603"];    
    var menuName = "ExteriorSurfaceMountDownlight".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var textArray = ["825 lm LEDs", "1430 lm","2860 lm"];

    hoverover = function () {
        var idArray = prepareIdArray(cssClass, menuName, pName);

        mouseHoverOverDetail(idArray, textArray);
    },
    remove = function () {
        var idArray = prepareIdArray(cssClass, menuName, pName);

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

$('.slides_control .ExteriorSurfaceMountDownlightImagebuttonL1310, \
.slides_control .ExteriorSurfaceMountDownlightImagebuttonL6001, \
.slides_control .ExteriorSurfaceMountDownlightImagebuttonL6032 \
').hover(function (e) {
    ExteriorSurfaceMountDownlight.hoverover();
}, function () {
    ExteriorSurfaceMountDownlight.remove();
});







