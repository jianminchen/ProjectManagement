// October 26, 2017
// Exterior/ Pendant
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorPendant = function () {    
    var p1 = ["L198"];      

    var pName = p1;   
    
    var menuName = "ExteriorPendant".concat("Imagebutton");
    var cssClass = ".slides_control .";   

    var t1 = ["1870 lm (4')"];
    
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

Test case:
1. Make sure that last product, no ',' 

*/
                    
$('.slides_control .ExteriorPendantImagebuttonL1980 \
').hover(function (e) {
    ExteriorPendant.hoverover();
}, function () {
    ExteriorPendant.remove();
});







