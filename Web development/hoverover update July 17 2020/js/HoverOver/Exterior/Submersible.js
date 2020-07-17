// March 4, 2016
// Exterior/ Submersible
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorSubmersible = function () {
    var p1 = ["U01",  "U05",  "U08",  "U300", "U302", "U304", "U306"];
    var p2 = ["U312", "U320", "U324", "U358", "U360", "U366", "U368"];

    
    var pName = p1.concat(p2); 
    var menuName = "ExteriorSubmersible".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["275 lm", "825 lm", "275 lm", "275 lm", "275 lm", "275 lm", "275 lm"];
    var t2 = ["275 lm", "275 lm", "275 lm", "825 lm", "880 lm", "880 lm", "880 lm"];
    
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

$('.slides_control .ExteriorSubmersibleImagebuttonU010, \
.slides_control .ExteriorSubmersibleImagebuttonU051, \
.slides_control .ExteriorSubmersibleImagebuttonU082, \
.slides_control .ExteriorSubmersibleImagebuttonU3003, \
.slides_control .ExteriorSubmersibleImagebuttonU3024, \
.slides_control .ExteriorSubmersibleImagebuttonU3045, \
.slides_control .ExteriorSubmersibleImagebuttonU3066, \
.slides_control .ExteriorSubmersibleImagebuttonU3127, \
.slides_control .ExteriorSubmersibleImagebuttonU3208, \
.slides_control .ExteriorSubmersibleImagebuttonU3249, \
.slides_control .ExteriorSubmersibleImagebuttonU35810, \
.slides_control .ExteriorSubmersibleImagebuttonU36011, \
.slides_control .ExteriorSubmersibleImagebuttonU36612, \
.slides_control .ExteriorSubmersibleImagebuttonU36813').hover(function (e) {
    ExteriorSubmersible.hoverover();
}, function () {
    ExteriorSubmersible.remove();
});







