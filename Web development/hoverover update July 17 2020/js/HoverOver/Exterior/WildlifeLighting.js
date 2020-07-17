// March 4, 2016
// Exterior/ WildlifeLighting
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorWildlifeLighting = function () {
    var pName = ["L01", "L05","L07","L16","L92","L151"];    
    var menuName = "ExteriorWildlifeLighting".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var textArray = ["110 lm", "330 lm LEDs","22 lm","110 lm","110 lm","330 lm LEDs"];;

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

$('.slides_control .ExteriorWildlifeLightingImagebuttonL010, \
.slides_control .ExteriorWildlifeLightingImagebuttonL051, \
.slides_control .ExteriorWildlifeLightingImagebuttonL072, \
.slides_control .ExteriorWildlifeLightingImagebuttonL163, \
.slides_control .ExteriorWildlifeLightingImagebuttonL924, \
.slides_control .ExteriorWildlifeLightingImagebuttonL1515 \
').hover(function (e) {
    ExteriorWildlifeLighting.hoverover();
}, function () {
    ExteriorWildlifeLighting.remove();
});







