// March 9, 2016
/*
 Learn JavaScript 
 Prototype pattern 
 http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-the-prototype-pattern

*/
// March 4, 2016
// Interior/ In-grade
/*
Learning Javascript:
append an array to another array - concat method. 

*/
function getIdArray_InteriorIngrade() {
    var pName = ["L01", "L02", "L03", "L05", "L06", "L07", "L08"];
    pName = pName.concat( ["L09",  "L300", "L301", "L302", "L303", "L304", "L306"]);
    pName = pName.concat(["L320", "L324", "L326", "L337", "L352"]);
   
    var menuName = "InteriorIngrade".concat("Imagebutton");

    var cssClass = ".slides_control .";

    return prepareIdArray(cssClass, menuName, pName);
}

function MouseHoverover_InteriorIngrade() {
    var t1 = ["2W", "2W", "2W", "7W",   "0.2W", "0.2W", "2W"];
    var t2 = ["2W", "2W", "2W", "2W",   "2W",   "2W",   "2W"];
    var t3 = ["2W", "2W", "2W", "0.2W", "7W"];
    var textArray = t1.concat(t2).concat(t3);

    var idArray = getIdArray_InteriorIngrade();

    mouseHoverOverDetail(idArray, textArray);
}


function mouseHoveroverRemove_InteriorIngrade() {

    var idArray = getIdArray_InteriorIngrade();

    mouseHoverover_Remove(idArray);
}

var InteriorIngrade = function () {

};

InteriorIngrade.prototype = {
    getIdArray: function () {
        var pName = ["L01", "L02", "L03", "L05", "L06", "L07", "L08"];
        pName = pName.concat(["L09", "L300", "L301", "L302", "L303", "L304", "L306"]);
        pName = pName.concat(["L320", "L324", "L326", "L337", "L352"]);

        var menuName = "InteriorIngrade".concat("Imagebutton");

        var cssClass = ".slides_control .";

        return prepareIdArray(cssClass, menuName, pName);
    },
    mouseHoveroverRemove: function () {
        var idArray = getIdArray();

        mouseHoverover_Remove(idArray);
    }
}
/*
var InteriorIngrade_2nd = function () {
};

InteriorIngrade_2nd.prototype = {

}
*/
/*
JavaScript multiple selector
https://api.jquery.com/multiple-selector/

Action item: 
How to concatenate the CSS class using string concatenation? 

*/
$('.slides_control .InteriorIngradeImagebuttonL010, \
   .slides_control .InteriorIngradeImagebuttonL021, \
   .slides_control .InteriorIngradeImagebuttonL032, \
   .slides_control .InteriorIngradeImagebuttonL053, \
   .slides_control .InteriorIngradeImagebuttonL064, \
   .slides_control .InteriorIngradeImagebuttonL075, \
   .slides_control .InteriorIngradeImagebuttonL086, \
   .slides_control .InteriorIngradeImagebuttonL097, \
   .slides_control .InteriorIngradeImagebuttonL3008, \
   .slides_control .InteriorIngradeImagebuttonL3019, \
   .slides_control .InteriorIngradeImagebuttonL30210, \
   .slides_control .InteriorIngradeImagebuttonL30311, \
   .slides_control .InteriorIngradeImagebuttonL30412, \
   .slides_control .InteriorIngradeImagebuttonL30613, \
   .slides_control .InteriorIngradeImagebuttonL32014, \
   .slides_control .InteriorIngradeImagebuttonL32415, \
   .slides_control .InteriorIngradeImagebuttonL32616, \
   .slides_control .InteriorIngradeImagebuttonL33717, \
   .slides_control .InteriorIngradeImagebuttonL35218  \
').hover(function (e) {
    var menuIcon = new InteriorIngrade();
    menuIcon.mouseHoverover(); 
    //MouseHoverover_InteriorIngrade();
}, function () {
    var menuIcon2 = new InteriorIngrade();
    menuIcon2.mouseHoveroverRemove(); 
    //mouseHoveroverRemove_InteriorIngrade();
});







