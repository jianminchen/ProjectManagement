// March 4, 2016
// Systems/ Three Circuit Track
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsThreeCircuitTrack = function () {
    var p1 = ["H10", "H20", "H50"];   
    var pName = p1; 
     
    var menuName = "SystemsThreeCircuitTrack".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["T4", "T4", "R111"];    
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

$('.slides_control .SystemsThreeCircuitTrackImagebuttonH100, \
.slides_control .SystemsThreeCircuitTrackImagebuttonH201, \
.slides_control .SystemsThreeCircuitTrackImagebuttonH502 \
').hover(function (e) {
    SystemsThreeCircuitTrack.hoverover();
}, function () {
    SystemsThreeCircuitTrack.remove();
});







