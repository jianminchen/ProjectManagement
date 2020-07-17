//http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern
/*
Learning JavaScript pattern called: Revealing Module Pattern 
InteriorIngrade is defined as a variable, associate it with a function and then invoke the function 
immediately as the script loads. The final parenthesis shown in the code cause it to be invoked. 

Adding a return statement at the end of the function that exposes the public members. 

-- March 11, 2016
For maintenance, the id is assumed to be in the sequential order, start from 0, increment one by one. 
Whenever a new ingrade is added, it is the array insertion operation for product name array and also wattage array. 
Go find the position, and then, insert the new production info. 

And here is the code in C# to generate the ID for each button of product: 
ImageButtonCustomized.cs 
line 28 - 31: 
public static string getID(int i, string pName)
    {
        return BUTTON + pName + i.ToString();
    }
*/
var InteriorIngrade = function () {    
    var pName = GetInteriorIngradeItems(); 

    var menuName = "InteriorIngrade".concat("Imagebutton");
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

    var menuItems = pName;  

    var textArray = [];
    menuItems.forEach(function (item, index) {               
        if (index % 7 == 0) {
            textArray = textArray.concat(concatenateFirstColumn(
                wattageMap.find(item),
                cutoutSizeMap.find(item),
                cutoutSizeMmMap.find(item),
                ledOutputMap.find(item),
                fixtureOutputMap.find(item), 20)); // first item in each page
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

Hoverover.interiorIngradeMenuItems = GetInteriorIngradeItems();
Hoverover.interiorIngradeCssClass = "";
Hoverover.tmp = "";

Hoverover.interiorIngradeMenuItems.forEach(function (item, index) {     
    if (index > 0) {
        Hoverover.tmp = Hoverover.tmp + ",";
    }

    Hoverover.tmp = Hoverover.tmp + " .slides_control .InteriorIngradeImagebutton" + item + index;
});

Hoverover.interiorIngradeCssClass = Hoverover.tmp;

$(Hoverover.interiorIngradeCssClass).hover(function (e) {
    InteriorIngrade.hoverover();
}, function () {
    InteriorIngrade.remove();
});
