//http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern
/*
Learning JavaScript pattern called: Revealing Module Pattern 
InteriorIngrade is defined as a variable, associate it with a function and then invoke the function 
immediately as the script loads. The final parenthesis shown in the code cause it to be invoked. 

Adding a return statement at the end of the function that exposes the public members. 
*/
var InteriorWarmDimming = function () {
    var pName = ["L225C-L", "L360", "L401", "L402", "L403", "L405", "L421", "L422", "L600", "L603"];   

    var menuName = "InteriorWarmDimming".concat("Imagebutton");
    var cssClass = ".slides_control .";

    var textArray = ["1430 lm", "880 lm", "1430 lm", "1430 lm", "2860 lm", "2860 lm","1430 lm", "1430 lm", "1430 lm","2860 lm"];

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
InteriorWarmDimming
InteriorWarmDimmingImagebuttonL6004
*/
$('.slides_control .InteriorWarmDimmingImagebuttonL225C-L0, \
.slides_control .InteriorWarmDimmingImagebuttonL3601,    \
.slides_control .InteriorWarmDimmingImagebuttonL4012,    \
.slides_control .InteriorWarmDimmingImagebuttonL4023,    \
.slides_control .InteriorWarmDimmingImagebuttonL4034, \
.slides_control .InteriorWarmDimmingImagebuttonL4055, \
.slides_control .InteriorWarmDimmingImagebuttonL4216, \
.slides_control .InteriorWarmDimmingImagebuttonL4227, \
.slides_control .InteriorWarmDimmingImagebuttonL6008, \
.slides_control .InteriorWarmDimmingImagebuttonL6039 \
').hover(function (e) {
        InteriorWarmDimming.hoverover();
 }, function () {
        InteriorWarmDimming.remove();
 });