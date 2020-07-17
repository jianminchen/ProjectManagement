// March 4, 2016
// Systems/ Black Single Rail
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsBlackSingleRail = function () {
    var pName = ["L225M", "P96", "P97", "P96L", "P97L", "X06"];
     
    var menuName = "SystemsBlackSingleRail".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var textArray = ["880 lm", "MR16", "MR16", "660 lm LEDs", "660 lm LEDs", "MR16"];

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

$('.slides_control .SystemsBlackSingleRailImagebuttonL225M0, \
.slides_control .SystemsBlackSingleRailImagebuttonP961, \
.slides_control .SystemsBlackSingleRailImagebuttonP972, \
.slides_control .SystemsBlackSingleRailImagebuttonP96L3, \
.slides_control .SystemsBlackSingleRailImagebuttonP97L4, \
.slides_control .SystemsBlackSingleRailImagebuttonX065 \
').hover(function (e) {
    SystemsBlackSingleRail.hoverover();
}, function () {
    SystemsBlackSingleRail.remove();
});







