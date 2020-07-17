// March 4, 2016
// Systems/ DualCircuitRail
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsDualCircuitRail = function () {
    var p1 = ["L72", "L73", "L225M", "P81L", "P96L"];
    var p2 = ["X01", "X06", "X31", "X42", "X45", "X51",  "P02"];
    var p3 = ["P11", "P81", "P96"];    
     
    var pName = p1.concat(p2).concat(p3);
     
    var menuName = "SystemsDualCircuitRail".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["1320 lm", "660 lm", "880 lm", "660 lm", "660 lm"];
    var t2 = ["MR16", "MR16", "MR16", "MR16", "MR16", "MR16", "MR16"];
    var t3 = ["MR16", "MR16", "MR16"];
       

    var textArray = t1.concat(t2).concat(t3);

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

$('.slides_control .SystemsDualCircuitRailImagebuttonL720, \
.slides_control .SystemsDualCircuitRailImagebuttonL731, \
.slides_control .SystemsDualCircuitRailImagebuttonL225M2, \
.slides_control .SystemsDualCircuitRailImagebuttonP81L3, \
.slides_control .SystemsDualCircuitRailImagebuttonP96L4, \
.slides_control .SystemsDualCircuitRailImagebuttonX015, \
.slides_control .SystemsDualCircuitRailImagebuttonX066, \
.slides_control .SystemsDualCircuitRailImagebuttonX317, \
.slides_control .SystemsDualCircuitRailImagebuttonX428, \
.slides_control .SystemsDualCircuitRailImagebuttonX459, \
.slides_control .SystemsDualCircuitRailImagebuttonX5110, \
.slides_control .SystemsDualCircuitRailImagebuttonP0211, \
.slides_control .SystemsDualCircuitRailImagebuttonP1112, \
.slides_control .SystemsDualCircuitRailImagebuttonP8113, \
.slides_control .SystemsDualCircuitRailImagebuttonP9614 \
').hover(function (e) {
    SystemsDualCircuitRail.hoverover();
}, function () {
    SystemsDualCircuitRail.remove();
});







