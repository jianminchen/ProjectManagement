// March 4, 2016
// Systems/ Two Circuit Track
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var SystemsTwoCircuitTrack = function () {
    var p1 = ["L195", "L197", "L199","L698"];    
       
    var pName = p1; 
    // SystemsTwoCircuitTrackImagebuttonL1950
    var menuName = "SystemsTwoCircuitTrack".concat("Imagebutton");
    var cssClass = ".slides_control .";
   
    var t1 = ["275 lm", "22 lm", "880 lm", "880 lm"];  

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

$('.slides_control .SystemsTwoCircuitTrackImagebuttonL1950, \
.slides_control .SystemsTwoCircuitTrackImagebuttonL1971, \
.slides_control .SystemsTwoCircuitTrackImagebuttonL1992, \
.slides_control .SystemsTwoCircuitTrackImagebuttonL6983 \
').hover(function (e) {
    SystemsTwoCircuitTrack.hoverover();
}, function () {
    SystemsTwoCircuitTrack.remove();
});







