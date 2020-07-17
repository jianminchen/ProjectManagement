// March 4, 2016
// Interior/ WineRack
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorWineRack = function () {
    var pName = ["L182", "L183"];
    var menuName = "InteriorWineRack".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["110 lm", "110 lm"];
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

$('.slides_control .InteriorWineRackImagebuttonL1820, \
   .slides_control .InteriorWineRackImagebuttonL1831  \
').hover(function (e) {
    InteriorWineRack.hoverover();
}, function () {
    InteriorWineRack.remove();
});







