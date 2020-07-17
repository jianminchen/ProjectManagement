// October 25, 2016
// Power Supplies/ Constant Voltage Driver
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesConstantVoltageDriver = function () {
    var pName = ["TLDDLV60W5000", "TLDDLV100W4100", "TLDAV50W12V","TLDAV60W9V", "TLDAV60W12V", "TLDAV60W12V02i", "TLDAV100W12V"];
    pName = pName.concat(["TLDAV100W15V","TLDAV100W20V", "TLDAV100W24V", "TLDAV100W24V01", "TLDAV100W24V04i", "TLDAV100W24V05i", "TLD12012V12W1" ]);
    pName = pName.concat(["TLDDLV10W12V", "TLDDLV10W24V"]);

    var menuName = "PowerSuppliesConstantVoltageDriver".concat("Imagebutton");

    var cssClass = ".slides_control .";

    var t1 = ["60W", "100W", "50W", "60W", "60W", "60W", "100W"];
    var t2 = ["100W", "100W", "100W", "100W", "100W", "100W", "12W"];
    var t3 = ["10W", "10W"];

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
$('.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV60W50000, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV100W41001, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV50W12V2, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV60W9V3, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV60W12V4, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV60W12V02i5, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W12V6, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W15V7, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W20V8, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W24V9, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W24V010, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W24V04i11, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDAV100W24V05i12, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLD12012V12W113, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV10W12V14, \
.slides_control .PowerSuppliesConstantVoltageDriverImagebuttonTLDDLV10W24V15 \
').hover(function (e) {
    PowerSuppliesConstantVoltageDriver.hoverover();
}, function () {
    PowerSuppliesConstantVoltageDriver.remove();
});
