// October 25, 2016
// Power Supplies/ Non-Dimmable Driver
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesNonDimmableDriver = function () {
    var pName = ["LED3W350L", "LED4W350", "LED4W700", "LED8W350L", "LED9W700L", "LED10W350D", "LED16W350700E"];
    pName = pName.concat(["LED17W700D", "LED25W1050", "LED40W1750", "LED20W700D277", "TLD12012V12W1", "TLDDLV10W12V", "TLDDLV10W24V"]);
    pName = pName.concat(["LED1CT10W350", "LED3W350P01", "LED8W350P01", "LED9W700P01", "LED4W410E", "LED23W700E", "LED25W210E"]);
    pName = pName.concat(["TLDDLV100W4100"]); 

    var menuName = "PowerSuppliesNonDimmableDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["3W",  "4W",  "4W",  "8W",  "9W",  "10W", "16W"];
    var t2 = ["17W", "25W", "40W", "20W", "12W", "10W", "10W"];
    var t3 = ["10W", "3W",  "8W",  "9W",  "4W",  "23W", "25W"];
    var t4 = ["100W"]; 

    var textArray = t1.concat(t2).concat(t3).concat(t4);

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
$('.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED3W350L0, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED4W3501, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED4W7002, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED8W350L3, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED9W700L4, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED10W350D5, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED16W350700E6, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED17W700D7, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED25W10508, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED40W17509, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED20W700D27710, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLD12012V12W111, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLDDLV10W12V12, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLDDLV10W24V13, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED1CT10W35014, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED3W350P0115, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED8W350P0116, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED9W700P0117, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED4W410E18, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED23W700E19, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonLED25W210E20, \
.slides_control .PowerSuppliesNonDimmableDriverImagebuttonTLDDLV100W410021 \
').hover(function (e) {
    PowerSuppliesNonDimmableDriver.hoverover();
}, function () {
    PowerSuppliesNonDimmableDriver.remove();     
});
