// March 4, 2016
// Interior/ Cabinet
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorCabinet = function () {
    var pName = ["L51", "L52", "L57", "L65", "L67", "L101"];
    pName = pName.concat(["L102", "L107", "L109", "L110", "L500", "L501", "L502"]);
    pName = pName.concat(["L503", "L504", "L505", "L508","L509","L550"]);

    var menuName = "InteriorCabinet".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["275 lm", "275 lm", "330 lm", "275 lm", "275 lm", "Max 880 lm/ft"];
    var t2 = ["Max 506 lm/ft", "Max 1320 lm/ft", "Max 275 lm/ft", "Max 275 lm/ft", "275 lm", "275 lm", "275 lm"];
    var t3 = ["275 lm", "3x110 lm LEDs", "275 lm", "275 lm", "275 lm", "275 lm"];

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
$('.slides_control .InteriorCabinetImagebuttonL510, \
.slides_control .InteriorCabinetImagebuttonL521, \
.slides_control .InteriorCabinetImagebuttonL572, \
.slides_control .InteriorCabinetImagebuttonL653, \
.slides_control .InteriorCabinetImagebuttonL674, \
.slides_control .InteriorCabinetImagebuttonL1015, \
.slides_control .InteriorCabinetImagebuttonL1026, \
.slides_control .InteriorCabinetImagebuttonL1077, \
.slides_control .InteriorCabinetImagebuttonL1098, \
.slides_control .InteriorCabinetImagebuttonL1109, \
.slides_control .InteriorCabinetImagebuttonL50010, \
.slides_control .InteriorCabinetImagebuttonL50111, \
.slides_control .InteriorCabinetImagebuttonL50212, \
.slides_control .InteriorCabinetImagebuttonL50313, \
.slides_control .InteriorCabinetImagebuttonL50414, \
.slides_control .InteriorCabinetImagebuttonL50515, \
.slides_control .InteriorCabinetImagebuttonL50816, \
.slides_control .InteriorCabinetImagebuttonL50917, \
.slides_control .InteriorCabinetImagebuttonL55018 \
').hover(function (e) {
    InteriorCabinet.hoverover();
}, function () {
    InteriorCabinet.remove();     
});
