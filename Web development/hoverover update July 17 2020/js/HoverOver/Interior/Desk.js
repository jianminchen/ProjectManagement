// May 8, 2019
// Interior/ Desk
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorDesk = function () {
    var pName = ["L227S","L227M"];
    var menuName = "InteriorDesk".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = [ "440 lm","880 lm"];
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

$('.slides_control .InteriorDeskImagebuttonL227S0, \
.slides_control .InteriorDeskImagebuttonL227M1 \
').hover(function (e) {
    InteriorDesk.hoverover();
}, function () {
    InteriorDesk.remove();
});







