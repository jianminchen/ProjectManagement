// March 4, 2016
// Interior/ Elevator
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorElevator = function () {
    var pName = ["L401", "L402", "L403","L405"];
    var menuName = "InteriorElevator".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["1430 lm", "1430 lm", "2860 lm", "2860 lm"];
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
                    
$('.slides_control .InteriorElevatorImagebuttonL4010, \
.slides_control .InteriorElevatorImagebuttonL4021, \
.slides_control .InteriorElevatorImagebuttonL4032, \
.slides_control .InteriorElevatorImagebuttonL4053 \
').hover(function (e) {
    InteriorElevator.hoverover();
}, function () {
    InteriorElevator.remove();
});







