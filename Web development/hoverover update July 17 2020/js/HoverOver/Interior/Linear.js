// March 4, 2016
// Interior/ Linear
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorLinear = function () {
    var p1 = ["L101", "L102", "L103", "L104", "L106", "L107", "L109"];
    var p2 = ["L110", "L113", "L114", "L115", "L116", "L122", "L123","L124"];
    var p3 = ["L125", "L151", "L161", "L162", "L163", "L166", "L171"];
    
    var pName = p1.concat(p2).concat(p3); 
    var menuName = "InteriorLinear".concat("Imagebutton");
    var cssClass = ".slides_control .";
    
    var t1 = ["Max 880 lm/ ft", "Max 506 lm/ ft", "Max 880 lm/ ft", "Max 880 lm/ ft", "Max 880 lm/ ft", "Max 1320 lm/ ft", "Max 275 lm/ ft"];
    var t2 = ["Max 275 lm/ ft", "Max 660 lm/ ft", "Max 1100 lm/ ft", "Max 1100 lm/ ft", "Max 1210 lm/ft", "Max 1210 lm/ ft", "880 lm", "Max 1100 lm/ft"];
    var t3 = ["880 lm", "825 lm", "Max 770 lm/ ft", "Max 880 lm/ ft", "Max 1100 lm/ ft", "Max 1320 lm/ ft", "Max 880 lm/ ft"];

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

$('.slides_control .InteriorLinearImagebuttonL1010, \
.slides_control .InteriorLinearImagebuttonL1021, \
.slides_control .InteriorLinearImagebuttonL1032, \
.slides_control .InteriorLinearImagebuttonL1043, \
.slides_control .InteriorLinearImagebuttonL1064, \
.slides_control .InteriorLinearImagebuttonL1075, \
.slides_control .InteriorLinearImagebuttonL1096, \
.slides_control .InteriorLinearImagebuttonL1107, \
.slides_control .InteriorLinearImagebuttonL1138, \
.slides_control .InteriorLinearImagebuttonL1149, \
.slides_control .InteriorLinearImagebuttonL11510, \
.slides_control .InteriorLinearImagebuttonL11611, \
.slides_control .InteriorLinearImagebuttonL12212, \
.slides_control .InteriorLinearImagebuttonL12313, \
.slides_control .InteriorLinearImagebuttonL12414, \
.slides_control .InteriorLinearImagebuttonL12515, \
.slides_control .InteriorLinearImagebuttonL15116, \
.slides_control .InteriorLinearImagebuttonL16117, \
.slides_control .InteriorLinearImagebuttonL16218, \
.slides_control .InteriorLinearImagebuttonL16319, \
.slides_control .InteriorLinearImagebuttonL16620, \
.slides_control .InteriorLinearImagebuttonL17121  \
').hover(function (e) {
    InteriorLinear.hoverover();
}, function () {
    InteriorLinear.remove();
});







