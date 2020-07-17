// March 4, 2016
// Systems/ Vertical Double Rail
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsVerticalDoubleRail = function () {
    var p1 = ["X01", "X06", "X31", "X42", "X45", "P02", "P11"];
    var p2 = ["P81", "P96"];       

    var pName = p1.concat(p2);

    var menuName = "SystemsVerticalDoubleRail".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["MR16", "MR16", "MR16", "MR16", "MR16", "MR16", "MR16"];
    var t2 = ["MR16", "MR16"];     

    var textArray = t1.concat(t2);

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
                    
$('.slides_control .SystemsVerticalDoubleRailImagebuttonX010, \
.slides_control .SystemsVerticalDoubleRailImagebuttonX061, \
.slides_control .SystemsVerticalDoubleRailImagebuttonX312, \
.slides_control .SystemsVerticalDoubleRailImagebuttonX423, \
.slides_control .SystemsVerticalDoubleRailImagebuttonX454, \
.slides_control .SystemsVerticalDoubleRailImagebuttonP025, \
.slides_control .SystemsVerticalDoubleRailImagebuttonP116, \
.slides_control .SystemsVerticalDoubleRailImagebuttonP817, \
.slides_control .SystemsVerticalDoubleRailImagebuttonP968 \
').hover(function (e) {
    SystemsVerticalDoubleRail.hoverover();
}, function () {
    SystemsVerticalDoubleRail.remove();
});







