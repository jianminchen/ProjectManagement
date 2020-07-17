// March 4, 2016
// Systems/ Cable System
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsCableSystem = function () {
    var p1 = ["X01", "X06", "X31", "P02", "P11"];    
     
    var pName = p1; 
     
    var menuName = "SystemsCableSystem".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["MR16", "MR16", "MR16", "MR16", "MR16"];
    
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

$('.slides_control .SystemsCableSystemImagebuttonX010, \
.slides_control .SystemsCableSystemImagebuttonX061, \
.slides_control .SystemsCableSystemImagebuttonX312, \
.slides_control .SystemsCableSystemImagebuttonP023, \
.slides_control .SystemsCableSystemImagebuttonP114 \
').hover(function (e) {
    SystemsCableSystem.hoverover();
}, function () {
    SystemsCableSystem.remove();
});







