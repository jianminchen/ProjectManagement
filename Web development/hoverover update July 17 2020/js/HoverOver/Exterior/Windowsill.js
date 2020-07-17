// Oct. 9, 2018
// Exterior/ Windowsill
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorWindowsill = function () {
    var pName = ["L150", "L159"];    
    var menuName = "ExteriorWindowsill".concat("Imagebutton");
    var cssClass = ".slides_control .";   
    
    var textArray = ["275 lm", "495 lm"];

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

$('.slides_control .ExteriorWindowsillImagebuttonL1500,\
   .slides_control .ExteriorWindowsillImagebuttonL1591\
').hover(function (e) {
    ExteriorWindowsill.hoverover();
}, function () {
    ExteriorWindowsill.remove();
});







