// March 4, 2016
// Interior/ Spotlight
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorSpotlight = function () {
    var pName = ["L53", "L72", "L73",  "L225C-S"];
    pName = pName.concat(["L225C-M", "L225C-L", "L226", "L507", "L730", "X01", "X02"]);
    pName = pName.concat(["X06", "X31", "X42", "X45", "X51", "X101"]);     

    var menuName = "InteriorSpotlight".concat("Imagebutton");

    var cssClass = ".slides_control .";

    var t1 = ["275 lm", "1320 lm LEDs", "660 lm LEDs", "440 lm LEDs"];
    var t2 = ["880 lm", "1430 lm", "550 lm", "275 lm", "275 lm", "LED MR16", "LED MR16"];
    var t3 = ["LED MR16", "LED MR16", "LED MR16", "LED MR16", "LED MR16", "LED MR16"];
    
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
$('.slides_control .InteriorSpotlightImagebuttonL530, \
.slides_control .InteriorSpotlightImagebuttonL721, \
.slides_control .InteriorSpotlightImagebuttonL732, \
.slides_control .InteriorSpotlightImagebuttonL225C-S3, \
.slides_control .InteriorSpotlightImagebuttonL225C-M4, \
.slides_control .InteriorSpotlightImagebuttonL225C-L5, \
.slides_control .InteriorSpotlightImagebuttonL2266, \
.slides_control .InteriorSpotlightImagebuttonL5077, \
.slides_control .InteriorSpotlightImagebuttonL7308, \
.slides_control .InteriorSpotlightImagebuttonX019, \
.slides_control .InteriorSpotlightImagebuttonX0210, \
.slides_control .InteriorSpotlightImagebuttonX0611, \
.slides_control .InteriorSpotlightImagebuttonX3112, \
.slides_control .InteriorSpotlightImagebuttonX4213, \
.slides_control .InteriorSpotlightImagebuttonX4514, \
.slides_control .InteriorSpotlightImagebuttonX5115, \
.slides_control .InteriorSpotlightImagebuttonX10116 \
').hover(function (e) {
    InteriorSpotlight.hoverover();
}, function () {
    InteriorSpotlight.remove();
});

