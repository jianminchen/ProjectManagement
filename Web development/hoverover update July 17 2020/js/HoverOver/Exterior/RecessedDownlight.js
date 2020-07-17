// March 4, 2016
// Exterior/ RecessedDownlight
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorRecessedDownlight = function () {
    var pName = ["L401", "L402","L403","L405", "L422"];    
    var menuName = "ExteriorRecessedDownlight".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var textArray = ["1430 lm", "1430 lm","2860 lm","2860 lm","1430 lm"];

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

$('.slides_control .ExteriorRecessedDownlightImagebuttonL4010, \
.slides_control .ExteriorRecessedDownlightImagebuttonL4021, \
.slides_control .ExteriorRecessedDownlightImagebuttonL4032, \
.slides_control .ExteriorRecessedDownlightImagebuttonL4053, \
.slides_control .ExteriorRecessedDownlightImagebuttonL4224 \
').hover(function (e) {
    ExteriorRecessedDownlight.hoverover();
}, function () {
    ExteriorRecessedDownlight.remove();
});







