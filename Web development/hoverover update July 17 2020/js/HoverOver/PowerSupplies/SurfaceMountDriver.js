// October 25, 2016
// Power Supplies/ Surface Mount Driver
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesSurfaceMountDriver = function () {
    var pName = ["SLD-F", "SLD-S", "SLD-SRB"];    

    var menuName = "PowerSuppliesSurfaceMountDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["100W", "100W", "100W"];
  
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
$('.slides_control .PowerSuppliesSurfaceMountDriverImagebuttonSLD-F0, \
.slides_control .PowerSuppliesSurfaceMountDriverImagebuttonSLD-S1, \
.slides_control .PowerSuppliesSurfaceMountDriverImagebuttonSLD-SRB2 \
').hover(function (e) {
    PowerSuppliesSurfaceMountDriver.hoverover();
}, function () {
    PowerSuppliesSurfaceMountDriver.remove();
});
