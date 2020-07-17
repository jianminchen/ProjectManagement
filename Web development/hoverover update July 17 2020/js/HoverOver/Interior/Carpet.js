// May 8, 2019
// Interior/ Carpet
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorCarpet = function () {
    var pName = ["L580"];
    var menuName = "InteriorCarpet".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["110 lm"];
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

$('.slides_control .InteriorCarpetImagebuttonL5800 \
').hover(function (e) {
    InteriorCarpet.hoverover();
}, function () {
    InteriorCarpet.remove();
});







