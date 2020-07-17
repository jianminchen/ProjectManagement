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
    var p3 = ["L337", "L338", "L339", "L352", "L356", "L358", "L360"];
    var p4 = ["L366", "L368", "L370",  "L372", "L382"]; 
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
    function concatenateFirstColumn(wattage, cutoutSize, ledOutput, fixtureOutput, spaceCount) {
        // four title items: wattage, cutoutSize, LED output,fixture Output                     
        var title = 'Wattage';
        var i;
        for (i = 0; i < 30; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(wattage);
        title = title.concat('<br>');

        // 2nd - cut size
        title = title.concat('Cut-out Size');
        for (i = 0; i < 24; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(cutoutSize);
        title = title.concat('<br>');

        // 3rd - LED Output
        title = title.concat('LED Output');
        for (i = 0; i < 20; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(ledOutput);
        title = title.concat('<br>');

        // 4th Fixture Output
        title = title.concat('Fixture Output');
        if (spaceCount <= 0)
            spaceCount = 20;

        for (i = 0; i < spaceCount; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(fixtureOutput);

        return title;
    }

    //                                      L01
    var firstItem = concatenateFirstColumn('1W, 2W', 'Ø2-1/2\"', '110 - 275 lm', '47 - 79 lm', 20);
    // First row
    var row1 = [firstItem];   
    row1 = row1.concat(["1W, 2.5W<br>Ø2-1/2\"<br>110 - 275 lm<br>47 - 79 lm"]);   // L03
    row1 = row1.concat(["3W, 7.5W<br>Ø3-5/8\"<br>330 - 825 lm<br>117 - 275 lm"]);  // L05
    row1 = row1.concat(["0.2W<br>Ø3/4\"<br>22 lm<br>2.7 lm"]);     // L06
    row1 = row1.concat(["0.2W<br>Ø3/4\"<br>22 lm<br>2.7 lm"]);     // L07
    row1 = row1.concat(["1W, 2.5W<br>Ø2-7/16\"<br>110 - 275 lm<br>0.5 - 3.4 lm"]); // L08  
    row1 = row1.concat(["1W, 2.5W<br>Ø2-1/2\"<br>110 - 275 lm<br>29 - 53 lm"]);   // L300

    firstItem = concatenateFirstColumn('1W, 2.5W','Ø1-3/4\"', '110 -275 lm', '47 - 79 lm', 20); // L302
    var row2 = [firstItem];       
    
    row2 = row2.concat(["1W, 2.5W<br>Ø2-1/2\"<br>110 - 275 lm<br>47 - 79 lm"]);   // L304
    row2 = row2.concat(["1W, 2.5W<br>Ø1-3/4\"<br>110 - 275 lm<br>47 - 79 lm"]);   // L306
    row2 = row2.concat(["1W, 2.5W<br>Ø2-1/2\"<br>110 - 275 lm<br>51 - 78 lm"]);   // L310
    row2 = row2.concat(["1W, 2.5W<br>Ø2-1/2\"<br>110 - 275 lm<br>43 - 70 lm"]);   // L312
    row2 = row2.concat(["1W, 2.5W<br>Ø2-1/2\"<br>110 - 275 lm<br>1.8 - 3.8 lm"]);  // L320
    row2 = row2.concat(["1W, 2.5W<br>Ø2-1/2\"<br>110 - 275 lm<br>47 - 79 lm"]);  // L324    

    firstItem = concatenateFirstColumn('0.2W','Ø7/8\"', '22 lm','2.7 lm', 24); // L337
    var row3 = [firstItem];
    row3 = row3.concat(["0.2W<br>Ø7/8\"<br>22 lm<br>0.05, 0.1 lm"]);    // L338
    row3 = row3.concat(["0.2W<br>Ø15/16\"<br>22 lm<br>2.7 lm"]);  // L339
    row3 = row3.concat(["3W, 7.5W<br>Ø2-3/4\"<br>330 -825 lm<br>117 - 275 lm"]); // L352
    row3 = row3.concat(["8W<br>Ø3-5/8\"<br>880 lm<br> 4 lm"]); // L356
    row3 = row3.concat(["1W, 2.5W<br>Ø3-5/8\"<br>110 - 275 lm<br>1.3 - 4.0 lm"]); // L358
    row3 = row3.concat(["8W<br>Ø3-5/8\"<br>880 lm<br> 247 - 275 lm"]); // L360    

    firstItem = concatenateFirstColumn('8W', 'Ø3-5/8\"', '880 lm', '247 - 275 lm', 14); // L366
    var row4 = [firstItem];
    row4 = row4.concat(["4W, 8W<br>Ø3-5/8\"<br>440 - 880 lm<br> 140 - 275 lm"]);   // L368
    row4 = row4.concat(["1W, 2.5W<br>Ø1-3/4\"<br>100 - 275 lm<br> 47 - 79.4 lm"]);  // L370
    row4 = row4.concat(["1W, 2.5W<br>Ø1-3/4\"<br>100 - 275 lm<br>29 - 53 lm"]);    // L372    
    row4 = row4.concat(["1W<br>Ø1-11/16\"<br>110 lm<br> 46 lm"]);  // L382    

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

        // two lines - 32px
        //$("#carousel_b_border").css('padding-top', '32px'); /* 8/29/2019 two row display */
        $("#carousel_b_border").css('padding-top', '73px');   /* 4/20/2020 four rows */

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
.slides_control .ExteriorIngradeImagebuttonL35618, \
.slides_control .ExteriorIngradeImagebuttonL35819, \
.slides_control .ExteriorIngradeImagebuttonL36020, \
.slides_control .ExteriorIngradeImagebuttonL36621, \
.slides_control .ExteriorIngradeImagebuttonL36822, \
.slides_control .ExteriorIngradeImagebuttonL37023, \
.slides_control .ExteriorIngradeImagebuttonL37224, \
.slides_control .ExteriorIngradeImagebuttonL38225 \
').hover(function (e) {
    ExteriorIngrade.hoverover();
}, function () {
    ExteriorIngrade.remove();
});







