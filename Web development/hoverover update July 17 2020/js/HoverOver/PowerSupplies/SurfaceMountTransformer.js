// October 27, 2016
// Power Supplies/ Surface Mount Transformer
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var PowerSuppliesSurfaceMountTransformer = function () {
    var pName = ["TLW120E-C", "TLW120E-CF", "TLW120E-A","TLW120E-AF","TLW120E150-SRB"];    

    var menuName = "PowerSuppliesSurfaceMountTransformer".concat("Imagebutton");

    var cssClass = ".slides_control .";


    var t1 = ["150W or 300W", "150W or 300W", "150W or 300W", "150W or 300W","150W"];
  
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
$('.slides_control .PowerSuppliesSurfaceMountTransformerImagebuttonTLW120E-C0, \
.slides_control .PowerSuppliesSurfaceMountTransformerImagebuttonTLW120E-CF1, \
.slides_control .PowerSuppliesSurfaceMountTransformerImagebuttonTLW120E-A2, \
.slides_control .PowerSuppliesSurfaceMountTransformerImagebuttonTLW120E-AF3, \
.slides_control .PowerSuppliesSurfaceMountTransformerImagebuttonTLW120E150-SRB4 \
').hover(function (e) {
    PowerSuppliesSurfaceMountTransformer.hoverover();
}, function () {
    PowerSuppliesSurfaceMountTransformer.remove();
});
