// March 4, 2016
// Exterior/ Ingrade
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorIngrade = function () {
    var p1 = ["L01",  "L03",  "L05", "L06", "L07", "L08", "L300"];
    var p2 = ["L302", "L304", "L306", "L310", "L312", "L320", "L324"];
    var p3 = ["L337", "L338", "L339", "L352", "L358", "L360","L366"];
    var p4 = ["L368", "L370",  "L372", "L379", "L382"]; 
    var pName = p1.concat(p2).concat(p3).concat(p4);

    var menuName = "ExteriorIngrade".concat("Imagebutton");
    var cssClass = ".slides_control .";

    // create a small function to concatenate first item in one page
    // Title 
    // Trim Size
    // LED/Fixture Output
    // The design of function:
    // framework.css - 
    // .mouseHoverTextWithTitle
    // specify 
    // left: -120px; 
    // width: 230%;   (original size is 90 px)
    // slides.unpacked.js - 
    // overflow: "visible",   (August 27, 2019 hidden -> visible)
    // 
    // two input arguments
    // Ø2-1/2, '200 / 79 lm'
    // 'Ø2-1/2\"'
    function concatenateFirstColumn(trimSize, lumens) {
        // two title: Trim Size, LED/Fixture Output
        var title = 'Trim Size';
        var i;
        for (i = 0; i < 22; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(trimSize);
        title = title.concat('<br>');
        title = title.concat('LED/Fixture Output');
        for (i = 0; i < 6; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(lumens);

        return title;
    }
    //                                      L01
    var firstItem = concatenateFirstColumn('Ø2-1/2\"', '220 / 79 lm');
    // First row
    var row1 = [firstItem];   
    row1 = row1.concat(["Ø2-1/2\"<br>275 / 79 lm"]);   // L03
    row1 = row1.concat(["Ø3-5/8\"<br>825 / 275 lm"]);  // L05
    row1 = row1.concat(["Ø3/4\"<br>22 / 2.7 lm"]);     // L06
    row1 = row1.concat(["Ø3/4\"<br>22 / 2.7 lm"]);     // L07
    row1 = row1.concat(["Ø2-7/16\"<br>275 / 1.6 lm"]); // L08  
    row1 = row1.concat(["Ø2-1/2\"<br>275 / 53 lm"]);   // L300

    firstItem = concatenateFirstColumn('Ø1-3/4\"','275 / 79 lm'); // L302
    var row2 = [firstItem];       
    
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 79 lm"]);   // L304
    row2 = row2.concat(["Ø1-3/4\"<br>275 / 53 lm"]);   // L306
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 78 lm"]);   // L310
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 70 lm"]);   // L312
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 3.8 lm"]);   // L320
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 3.8 lm"]);   // L324
    

    firstItem = concatenateFirstColumn('Ø7/8\"', '22 / 2.7 lm'); // L337
    var row3 = [firstItem];
    row3 = row3.concat(["Ø7/8\"<br>22 / 0.1 lm"]);  // L338
    row3 = row3.concat(["Ø15/16\"<br>22 / 0.1 lm"]);  // L339
    row3 = row3.concat(["Ø2-3/4\"<br>825 / 275 lm"]);  // L352
    row3 = row3.concat(["Ø3-5/8\"<br>825 / 4.0 lm"]); // L358
    row3 = row3.concat(["Ø3-5/8\"<br>880 / 275 lm"]); // L360
    row3 = row3.concat(["Ø3-5/8\"<br>880 / 880 lm"]); // L366

    firstItem = concatenateFirstColumn('Ø3-5/8\"', '880 / 275 lm'); // L368
    var row4 = [firstItem];
    row4 = row4.concat(["Ø1-3/4\"<br>275 / 79.4 lm"]);  // L370
    row4 = row4.concat(["Ø1-3/4\"<br>275 / 53 lm"]);  // L372
    row4 = row4.concat(["Ø1-3/4\"<br>275 / 79 lm"]);  // L379
    row4 = row4.concat(["Ø1-11/16\"<br>110 / 46 lm"]); // L382    

    var textArray = row1.concat(row2).concat(row3).concat(row4);    

    hoverover = function () {
        /* 8/28/2019 
        framework.css 
        Add .mouseHoverTextWithTitle 
            position: absolute; 
            top: 126px; 
            left = -100px;
            width: 230%;       
        */
        $(".slides_container").css('overflow', 'visible');
        $("#carousel_b_border").css('padding-top', '32px'); /* 8/29/2019 two row display */

        var idArray = prepareIdArray(cssClass, menuName, pName);
        mouseHoverOverDetailWithTitle(idArray, textArray);
    },
    remove = function () {
        $(".slides_container").css('overflow', 'hidden');
        $("#carousel_b_border").css('padding-top', '16px');
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

$('.slides_control .ExteriorIngradeImagebuttonL010, \
.slides_control .ExteriorIngradeImagebuttonL031, \
.slides_control .ExteriorIngradeImagebuttonL052, \
.slides_control .ExteriorIngradeImagebuttonL063, \
.slides_control .ExteriorIngradeImagebuttonL074, \
.slides_control .ExteriorIngradeImagebuttonL085, \
.slides_control .ExteriorIngradeImagebuttonL3006, \
.slides_control .ExteriorIngradeImagebuttonL3027, \
.slides_control .ExteriorIngradeImagebuttonL3048, \
.slides_control .ExteriorIngradeImagebuttonL3069, \
.slides_control .ExteriorIngradeImagebuttonL31010, \
.slides_control .ExteriorIngradeImagebuttonL31211, \
.slides_control .ExteriorIngradeImagebuttonL32012, \
.slides_control .ExteriorIngradeImagebuttonL32413, \
.slides_control .ExteriorIngradeImagebuttonL33714, \
.slides_control .ExteriorIngradeImagebuttonL33815, \
.slides_control .ExteriorIngradeImagebuttonL33916, \
.slides_control .ExteriorIngradeImagebuttonL35217, \
.slides_control .ExteriorIngradeImagebuttonL35818, \
.slides_control .ExteriorIngradeImagebuttonL36019, \
.slides_control .ExteriorIngradeImagebuttonL36620, \
.slides_control .ExteriorIngradeImagebuttonL36821, \
.slides_control .ExteriorIngradeImagebuttonL37022, \
.slides_control .ExteriorIngradeImagebuttonL37223, \
.slides_control .ExteriorIngradeImagebuttonL37924, \
.slides_control .ExteriorIngradeImagebuttonL38225').hover(function (e) {
    ExteriorIngrade.hoverover();
}, function () {
    ExteriorIngrade.remove();
});







