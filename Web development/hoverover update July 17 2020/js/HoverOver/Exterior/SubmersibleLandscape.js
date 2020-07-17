// March 4, 2016
// Exterior/ SubmersibleLandscape
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorSubmersibleLandscape = function () {
    var p1 = ["L03"];  
    
    var pName = p1; 
    var menuName = "ExteriorSubmersibleLandscape".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["275 lm"];   
    
    var textArray = t1;

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

$('.slides_control .ExteriorSubmersibleLandscapeImagebuttonL030 ').hover(function (e) {
    ExteriorSubmersibleLandscape.hoverover();
}, function () {
    ExteriorSubmersibleLandscape.remove();
});







