// March 4, 2016
// Interior/ Pendant
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorPendant = function () {    
    var p1 = ["L191", "L192", "L194", "L195", 'L196', 'L197','L199','L600'];
    var p2 = ['L603', 'L630', 'L631', 'L632', 'L640', 'L641', 'L642'];
    var p3 = [ 'L650S', 'L650M','L650L','L651','L698',"P81L", "P96L", "P97L"];
    var p4 = ["P02", "P11",  "P81", "P96", "P97"];    

    var pName = p1.concat(p2).concat(p3).concat(p4);   
    
    var menuName = "InteriorPendant".concat("Imagebutton");
    var cssClass = ".slides_control .";   

    var t1 = ["1870 lm (4')", "1870 lm (4')", "275 lm", "275 lm", "1870 lm (4')", "22 lm", "880lm", "1430 lm"];
    var t2 = ["2860 lm", "1870 lm (4')", "1870 lm (4')", "1870 lm (4')", "110 lm LEDs", "110 lm LEDs", "110 lm LEDs"];
    var t3 = ["1100 lm/ft", "1100 lm/ft", "1100 lm/ft", "880 lm", "880 lm","660 lm", "660 lm", "660 lm"];
    var t4 = [ "MR16", "MR16",  "BI-PIN", "BI-PIN", "MR16"];    

    var textArray = t1.concat(t2).concat(t3).concat(t4);    

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

Test case:
1. Make sure that last product, no ',' 

*/
                    
$('.slides_control .InteriorPendantImagebuttonL1910, \
.slides_control .InteriorPendantImagebuttonL1921, \
.slides_control .InteriorPendantImagebuttonL1942, \
.slides_control .InteriorPendantImagebuttonL1953, \
.slides_control .InteriorPendantImagebuttonL1964, \
.slides_control .InteriorPendantImagebuttonL1975, \
.slides_control .InteriorPendantImagebuttonL1996, \
.slides_control .InteriorPendantImagebuttonL6007, \
.slides_control .InteriorPendantImagebuttonL6038, \
.slides_control .InteriorPendantImagebuttonL6309, \
.slides_control .InteriorPendantImagebuttonL63110, \
.slides_control .InteriorPendantImagebuttonL63211, \
.slides_control .InteriorPendantImagebuttonL64012, \
.slides_control .InteriorPendantImagebuttonL64113, \
.slides_control .InteriorPendantImagebuttonL64214, \
.slides_control .InteriorPendantImagebuttonL650S15, \
.slides_control .InteriorPendantImagebuttonL650M16, \
.slides_control .InteriorPendantImagebuttonL650L17, \
.slides_control .InteriorPendantImagebuttonL65118, \
.slides_control .InteriorPendantImagebuttonL69819, \
.slides_control .InteriorPendantImagebuttonP81L20, \
.slides_control .InteriorPendantImagebuttonP96L21, \
.slides_control .InteriorPendantImagebuttonP97L22, \
.slides_control .InteriorPendantImagebuttonP0223, \
.slides_control .InteriorPendantImagebuttonP1124, \
.slides_control .InteriorPendantImagebuttonP8125, \
.slides_control .InteriorPendantImagebuttonP9626, \
.slides_control .InteriorPendantImagebuttonP9727 \
').hover(function (e) {
    InteriorPendant.hoverover();
}, function () {
    InteriorPendant.remove();
});







