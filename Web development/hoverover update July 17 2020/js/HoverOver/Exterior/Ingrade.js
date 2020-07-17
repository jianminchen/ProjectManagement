// March 4, 2016
// Exterior/ Ingrade
/*
Learning Javascript:
append an array to another array - concat method. 
using JavaScript Revealing Module Pattern
*/
var ExteriorIngrade = function () {
    /* - this should be removed from Ingrade.js - July 17, 2020
    var p1 = ["L01",  "L03",  "L05", "L06", "L07", "L08", "L300"];
    var p2 = ["L302", "L304", "L306", "L310", "L312", "L320", "L324"];
    var p3 = ["L337", "L338", "L339", "L352", "L356", "L358", "L360"];
    var p4 = ["L366", "L368", "L370",  "L372", "L382"]; 
    var pName = p1.concat(p2).concat(p3).concat(p4);
    */
    var pName = GetExteriorIngradeItems(); 

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
    function ConstructHover(name) {
        return wattageMap.find(name) + "<br>" +
         cutoutSizeMap.find(name) + "<br>" +
         cutoutSizeMmMap.find(name) + "<br>" +
         ledOutputMap.find(name) + "<br>" +
         fixtureOutputMap.find(name)
    };

    function concatenateFirstColumn(wattage, cutoutSize, cutoutSizeMm, ledOutput, fixtureOutput, countSpace) {
        // five title items: wattage, cutoutSize, cutoutSizeMm, LED output,fixture Output                     
        var title = 'Wattage';
        var i;
        for (i = 0; i < 30; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(wattage);
        title = title.concat('<br>');

        // 2nd - cut-out size
        title = title.concat('Cut-out Size');
        for (i = 0; i < 24; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(cutoutSize);
        title = title.concat('<br>');

        // 3rd - cut-out size - added on July 8 2020
        title = title.concat('Cut-out Size (mm)');
        for (i = 0; i < 16; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(cutoutSizeMm);
        title = title.concat('<br>');

        // 4th - LED Output
        title = title.concat('LED Output');
        for (i = 0; i < 20; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(ledOutput);
        title = title.concat('<br>');

        // 5th Fixture Output
        title = title.concat('Fixture Output');
        if (countSpace <= 0)
            countSpace = 20;

        for (i = 0; i < countSpace; i++) {
            title = title.concat('&nbsp;')
        }

        title = title.concat(fixtureOutput);

        return title;
    }

 var wattageMap = GetWattageMap(); 
    var cutoutSizeMap = GetCutoutSizeMap();
    var cutoutSizeMmMap = GetCutoutSizeMmMap();
    var ledOutputMap = GetLedOutputMap();
    var fixtureOutputMap = GetFixtureOutputMap(); 

    //var menuItems = GetExteriorIngradeItems();    
    var menuItems = pName;
    /* removed on July 7, 2020
    var menuItems = ["L01", "L03", "L05", "L06", "L07", "L08", "L300"];
    menuItems = menuItems.concat(["L302", "L304", "L306", "L310", "L312", "L320", "L324"]);
    menuItems = menuItems.concat(["L337", "L338", "L339", "L352", "L356", "L358", "L360"]);
    menuItems = menuItems.concat(["L366", "L368", "L370", "L372", "L382"]);    
    */

    var textArray = [];
    menuItems.forEach(function (item, index) {               
        if (index % 7 == 0) {
            var space = 20;
            // Exterior L366
            if (fixtureOutputMap.find(item).length >= 11) {
                space = 17;
            }

            textArray = textArray.concat(concatenateFirstColumn(
                wattageMap.find(item),
                cutoutSizeMap.find(item),
                cutoutSizeMmMap.find(item),
                ledOutputMap.find(item),
                fixtureOutputMap.find(item), space)); // first item in each page
        }
        else {
            textArray = textArray.concat([ConstructHover(item)]);
        }        
    });                             

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
        //$("#carousel_b_border").css('padding-top', '73px'); /* 4/20/2020 four rows*/
        
        $("#carousel_b_border").css('padding-top', '13px'); /* 7/08/2020 five rows*/

        var idArray = prepareIdArray(cssClass, menuName, pName);        
        mouseHoverOverDetailWithTitle(idArray, textArray);

        $("#carousel_b_border_New2").css('padding-top', '13px'); /* 7/08/2020 five rows*/
        $("#carousel_b_border_New3").css('padding-top', '13px'); /* 7/08/2020 five rows*/
        $("#carousel_b_border_New4").css('padding-top', '13px'); /* 7/08/2020 five rows*/
        $("#carousel_b_border_New5").css('padding-top', '13px'); /* 7/08/2020 five rows*/
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

// be careful to avoid name confliction - July 16, 2020
// create name space to avoid confliction
// updated on July 16, 2020
var Hoverover = Hoverover || {};

Hoverover.exteriorMenuItems = GetExteriorIngradeItems();

Hoverover.exteriorIngradeCssClass = "";

Hoverover.exteriorMenuItems.forEach(function (item, index) {
    if (index > 0) {
        Hoverover.exteriorIngradeCssClass = Hoverover.exteriorIngradeCssClass + ",";
    }

    Hoverover.exteriorIngradeCssClass = Hoverover.exteriorIngradeCssClass + " .slides_control .ExteriorIngradeImagebutton" + item + index;
});

// updated on July 16, 2020 
$(Hoverover.exteriorIngradeCssClass).hover(function (e) {
    ExteriorIngrade.hoverover();
}, function () {
    ExteriorIngrade.remove();
});







