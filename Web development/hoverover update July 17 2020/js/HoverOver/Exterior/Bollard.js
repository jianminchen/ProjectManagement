// March 4, 2016
// Exterior/ Bollard
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorBollard = function () {
    var pName = ["L92", "L900", "L902", "L904", "L905", "L910", "L932"];    
    var menuName = "ExteriorBollard".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var textArray = ["275 lm", "880 lm", "275 lm", "880 lm", "880 lm", "660 lm", "275 lm"];;

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

$('.slides_control .ExteriorBollardImagebuttonL920, \
.slides_control .ExteriorBollardImagebuttonL9001, \
.slides_control .ExteriorBollardImagebuttonL9022, \
.slides_control .ExteriorBollardImagebuttonL9043, \
.slides_control .ExteriorBollardImagebuttonL9054, \
.slides_control .ExteriorBollardImagebuttonL9105, \
.slides_control .ExteriorBollardImagebuttonL9326 \
').hover(function (e) {
    ExteriorBollard.hoverover();
}, function () {
    ExteriorBollard.remove();
});







