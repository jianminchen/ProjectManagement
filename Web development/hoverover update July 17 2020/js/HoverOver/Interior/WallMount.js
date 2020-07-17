// March 4, 2016
// Interior/ WallMount
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var InteriorWallMount = function () {
    var pName =          ["L01",  "L02",  "L03",  "L08", "L09"];
    pName = pName.concat(["L16",  "L17",  "L22",  "L24", "L36"]);
    pName = pName.concat(["L46",  "L47",  "L49",  "L91",  "L193", "L301", "L302", "L303"]);
    pName = pName.concat(["L304", "L307", "L652", "L711", "L712", "L713", "L714"]);
    pName = pName.concat(["L715", "L720", "L721", "L722", "L723", "L730", "L741"]);
    pName = pName.concat(["L750", "L760", "L761", "L770"]);

    var menuName = "InteriorWallMount".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["275 lm", "275 lm", "275 lm", "275 lm", "275 lm"];
    var t2 = ["275 lm", "550 lm", "275 lm", "275 lm", "660 lm"];
    var t3 = ["660 lm", "660 lm", "660 lm", "275 lm", "1870 lm/4ft", "275 lm", "275 lm", "275 lm"];
    var t4 = ["275 lm", "275 lm", "880 lm", "275 lm", "550 lm", "275 lm", "275 lm"];
    var t5 = ["550 lm", "1760 lm", "880 lm", "880 lm", "880 lm", "275 lm", "660 lm"];
    var t6 = ["110 lm", "660 lm", "660 lm", "660 lm"];

    var textArray = t1.concat(t2).concat(t3).concat(t4).concat(t5).concat(t6);

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
$('.slides_control .InteriorWallMountImagebuttonL010, \
.slides_control .InteriorWallMountImagebuttonL021, \
.slides_control .InteriorWallMountImagebuttonL032, \
.slides_control .InteriorWallMountImagebuttonL083, \
.slides_control .InteriorWallMountImagebuttonL094, \
.slides_control .InteriorWallMountImagebuttonL165, \
.slides_control .InteriorWallMountImagebuttonL176, \
.slides_control .InteriorWallMountImagebuttonL227, \
.slides_control .InteriorWallMountImagebuttonL248, \
.slides_control .InteriorWallMountImagebuttonL369, \
.slides_control .InteriorWallMountImagebuttonL4610, \
.slides_control .InteriorWallMountImagebuttonL4711, \
.slides_control .InteriorWallMountImagebuttonL4912, \
.slides_control .InteriorWallMountImagebuttonL9113, \
.slides_control .InteriorWallMountImagebuttonL19314, \
.slides_control .InteriorWallMountImagebuttonL30115, \
.slides_control .InteriorWallMountImagebuttonL30216, \
.slides_control .InteriorWallMountImagebuttonL30317, \
.slides_control .InteriorWallMountImagebuttonL30418, \
.slides_control .InteriorWallMountImagebuttonL30719, \
.slides_control .InteriorWallMountImagebuttonL65220, \
.slides_control .InteriorWallMountImagebuttonL71121, \
.slides_control .InteriorWallMountImagebuttonL71222, \
.slides_control .InteriorWallMountImagebuttonL71323, \
.slides_control .InteriorWallMountImagebuttonL71424, \
.slides_control .InteriorWallMountImagebuttonL71525, \
.slides_control .InteriorWallMountImagebuttonL72026, \
.slides_control .InteriorWallMountImagebuttonL72127, \
.slides_control .InteriorWallMountImagebuttonL72228, \
.slides_control .InteriorWallMountImagebuttonL72329, \
.slides_control .InteriorWallMountImagebuttonL73030, \
.slides_control .InteriorWallMountImagebuttonL74131, \
.slides_control .InteriorWallMountImagebuttonL75032, \
.slides_control .InteriorWallMountImagebuttonL76033, \
.slides_control .InteriorWallMountImagebuttonL76134, \
.slides_control .InteriorWallMountImagebuttonL77035 \
').hover(function (e) {
    InteriorWallMount.hoverover();
}, function () {
    InteriorWallMount.remove();
});


