// October 25, 2016
// Power Supplies/ Dimmable Driver
/*  julia code review 
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesDimmableDriver = function () {
    var pName = ["LED4W700i", "LED10W6001i", "LED10W6002i", "LED10W350i", "LED10W700i", "LED12W350i", "LED12W700i"];
    pName = pName.concat(["LED15W35002i", "LED15W350i03", "LED18W3502i", "LED18W3503i", "LED18W7002i", "LED20W200i-LT", "LED20W700i", "LED30W350i01B"]);
    pName = pName.concat(["LED30W700i02", "LED36W7003i", "TLC010i", "TLDDLV60W5000", "TLDDLV100W4100", "TLDAV50W12V", "TLDAV60W9V"]);
    pName = pName.concat(["TLDAV60W12V", "TLDAV60W12V02i", "TLDAV100W12V", "TLDAV100W15V", "TLDAV100W20V", "TLDAV100W24V", "TLDAV100W24V01"]);
    pName = pName.concat(["TLDAV100W24V04i", "TLDAV100W24V05i"]); 

    var menuName = "PowerSuppliesDimmableDriver".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var t1 = ["4W",  "10W",  "10W", "10W", "10W", "12W", "12W"];
    var t2 = ["15W", "15W",  "18W", "18W", "18W", "20W","20W", "30W"];
    var t3 = ["30W", "36W",  "Dimming Control", "60W", "100W", "50W", "60W"]; 
    var t4 = ["60W", "60W",  "100W", "100W", "100W", "100W", "100W"];
    var t5 = ["100W", "100W"]; 

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
$('.slides_control .PowerSuppliesDimmableDriverImagebuttonLED4W700i0, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED10W6001i1, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED10W6002i2, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED10W350i3, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED10W700i4, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED12W350i5, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED12W700i6, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED15W35002i7, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED15W350i038, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED18W3502i9, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED18W3503i10, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED18W7002i11, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED20W200i-LT12, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED20W700i13, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED30W350i01B14, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED30W700i0215, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonLED36W7003i16, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLC010i17, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDDLV60W500018, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDDLV100W410019, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV50W12V20, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV60W9V21, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV60W12V22, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV60W12V02i23, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W12V24, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W15V25, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W20V26, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W24V27, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W24V0128, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W24V04i29, \
.slides_control .PowerSuppliesDimmableDriverImagebuttonTLDAV100W24V05i30 \
').hover(function (e) {
    PowerSuppliesDimmableDriver.hoverover();
}, function () {
    PowerSuppliesDimmableDriver.remove();     
});
