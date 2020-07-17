// October 27, 2016
// Power Supplies/ Magnetic Transformer
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesMagneticTransformer = function () {
    var pName = ["TLW120M10", "TLW120MII300", "TLW120MT150", "TLW120MT300", "TLW277MII300", "TLW277MT300", "TLW120MT050-01"];
    pName = pName.concat(["TLW120MT050U","TLW277MT050-01","TLW277MT150-01"]); 

    var menuName = "PowerSuppliesMagneticTransformer".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["10W", "300W", "150W", "300W", "300W", "300W", "50W"];
    var t2 = ["50W","50W","150W"];
  
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
$('.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW120M100, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW120MII3001, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW120MT1502, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW120MT3003, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW120277MII3004, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW277MT3005, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW120MT050-016, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW120MT050U-017, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW277MT050-018, \
.slides_control .PowerSuppliesMagneticTransformerImagebuttonTLW277MT150-019 \
').hover(function (e) {
    PowerSuppliesMagneticTransformer.hoverover();
}, function () {
    PowerSuppliesMagneticTransformer.remove();
});
