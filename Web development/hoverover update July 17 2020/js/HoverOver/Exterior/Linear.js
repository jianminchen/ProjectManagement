// March 4, 2016
// Exterior/ Linear
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorLinear = function () {
    var pName = ["L110", "L113", "L151", "L152","L153","L171"];    
    var menuName = "ExteriorLinear".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    /* var textArray = ["29 lm LEDs","110 lm LEDs", "110 lm LEDs"]; */
    var textArray = ["Max 275 lm/ ft", "Max 660 lm/ ft", "825 lm", "Max 275 lm/ ft", "Max 275 lm/ ft", "Max 880 lm/ ft"];

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

$('.slides_control .ExteriorLinearImagebuttonL1100,\
.slides_control .ExteriorLinearImagebuttonL1131, \
.slides_control .ExteriorLinearImagebuttonL1512, \
.slides_control .ExteriorLinearImagebuttonL1523, \
.slides_control .ExteriorLinearImagebuttonL1534, \
.slides_control .ExteriorLinearImagebuttonL1715 \
').hover(function (e) {
    ExteriorLinear.hoverover();
}, function () {
    ExteriorLinear.remove();
});







