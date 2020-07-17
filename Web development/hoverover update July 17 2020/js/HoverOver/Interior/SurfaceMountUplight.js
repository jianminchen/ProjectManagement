//http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern
/*
Learning JavaScript pattern called: Revealing Module Pattern 
InteriorIngrade is defined as a variable, associate it with a function and then invoke the function 
immediately as the script loads. The final parenthesis shown in the code cause it to be invoked. 

Adding a return statement at the end of the function that exposes the public members. 
*/
var InteriorSurfaceMountUplight = function () {
    var pName = ["L604"];   

    var menuName = "InteriorSurfaceMountUplight".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var textArray = ["880 lm"];       

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
$('.slides_control .InteriorSurfaceMountUplightImagebuttonL6040 \
').hover(function (e) {
    InteriorSurfaceMountUplight.hoverover();
 }, function () {
     InteriorSurfaceMountUplight.remove();
 });