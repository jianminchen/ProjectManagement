// October 25, 2016
// Power Supplies/ Constant Current Driver
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesConstantCurrentDriver = function () {
    var pName = ["LED10W6001i", "LED10W6002i", "LED10W350i", "LED10W700i", "LED12W350i", "LED12W700i", "LED15W35002i"];
    pName = pName.concat(["LED15W350i03", "LED16W350700E", "LED18W3502i", "LED18W3503i", "LED18W7002i", "LED20W200i-LT", "LED20W700i", "LED30W350i01B"]);
    pName = pName.concat(["LED30W700i02", "LED36W7003i", "LED4W350", "LED4W700", "LED4W700i", "LED3W350L", "LED8W350L"]);
    pName = pName.concat(["LED9W700L", "LED10W350D", "LED17W700D", "LED25W1050", "LED40W1750", "LED20W700D277", "LED3W350P01"]);
    pName = pName.concat(["LED8W350P01", "LED9W700P01", "LED4W410E", "LED23W700E", "LED25W210E"]);    

    var menuName = "PowerSuppliesConstantCurrentDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";

    var t1 = ["10W", "10W", "10W", "10W", "12W", "12W", "15W"];
    var t2 = ["15W", "16W", "18W", "18W", "18W", "20W", "20W", "30W"];
    var t3 = ["30W","36W",  "4W", "4W",  "4W",  "3W",  "8W"];
    var t4 = ["9W", "10W", "17W", "25W", "40W", "20W", "3W"];
    var t5 = ["8W", "9W",  "4W", "23W","25W"]; 

    var textArray = t1.concat(t2).concat(t3).concat(t4).concat(t5);

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
$(' .slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W6001i0, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W6002i1, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W350i2, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W700i3, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED12W350i4, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED12W700i5, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED15W35002i6, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED15W350i037, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED16W350700E8, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED18W3502i9, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED18W3503i10, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED18W7002i11, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED20W200i-LT12, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED20W700i13, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED30W350i01B14, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED30W700i0215, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED36W7003i16, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED4W35017, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED4W70018, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED4W700i19, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED3W350L20, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED8W350L21, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED9W700L22, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED10W350D23, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED17W700D24, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED25W105025, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED40W175026, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED20W700D27727, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED3W350P0128, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED8W350P0129, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED9W700P0130, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED4W410E31, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED23W700E32, \
.slides_control .PowerSuppliesConstantCurrentDriverImagebuttonLED25W210E33 \
').hover(function (e) {
    PowerSuppliesConstantCurrentDriver.hoverover();
}, function () {
    PowerSuppliesConstantCurrentDriver.remove();
});
