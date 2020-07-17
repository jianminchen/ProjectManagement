// March 4, 2016
// Interior/ Picture
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorPicture = function () {
    var pName = ["X45","L225W-S","L225W-M", "L227W-S", "L227W-M"];
    var menuName = "InteriorPicture".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = [ "LED MR16","440 lm","880 lm","440 lm","880 lm"];
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

$('.slides_control .InteriorPictureImagebuttonX450, \
.slides_control .InteriorPictureImagebuttonL225W-S1, \
.slides_control .InteriorPictureImagebuttonL225W-M2, \
.slides_control .InteriorPictureImagebuttonL227W-S3, \
.slides_control .InteriorPictureImagebuttonL227W-M4 \
').hover(function (e) {
    InteriorPicture.hoverover();
}, function () {
    InteriorPicture.remove();
});







