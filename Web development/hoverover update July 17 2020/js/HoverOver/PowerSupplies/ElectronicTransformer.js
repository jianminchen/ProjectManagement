// October 27, 2016
// Power Supplies/ Electronic Transformer
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesElectronicTransformer = function () {
    var pName = ["TLW120E60", "TLW120E75", "TLW120E150","TLW120E150-02","TLW277E75"];    

    var menuName = "PowerSuppliesElectronicTransformer".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["60W", "75W", "150W","150W","75W"];
  
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
$('.slides_control .PowerSuppliesElectronicTransformerImagebuttonTLW120E600, \
.slides_control .PowerSuppliesElectronicTransformerImagebuttonTLW120E751, \
.slides_control .PowerSuppliesElectronicTransformerImagebuttonTLW120E1502, \
.slides_control .PowerSuppliesElectronicTransformerImagebuttonTLW120E150-023, \
.slides_control .PowerSuppliesElectronicTransformerImagebuttonTLW277E754 \
').hover(function (e) {
    PowerSuppliesElectronicTransformer.hoverover();
}, function () {
    PowerSuppliesElectronicTransformer.remove();
});
