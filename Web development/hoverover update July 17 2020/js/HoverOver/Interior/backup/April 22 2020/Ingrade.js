//http://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern
/*
Learning JavaScript pattern called: Revealing Module Pattern 
InteriorIngrade is defined as a variable, associate it with a function and then invoke the function 
immediately as the script loads. The final parenthesis shown in the code cause it to be invoked. 

Adding a return statement at the end of the function that exposes the public members. 

-- March 11, 2016
For maintainance, the id is assumed to be in the sequential order, start from 0, increment one by one. 
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
    var pName =          ["L01", "L02", "L03", "L05", "L06", "L07", "L08"];
    pName = pName.concat(["L09", "L300", "L301", "L302", "L303", "L304", "L305"]);
    pName = pName.concat(["L306", "L307", "L310", "L312", "L315", "L320", "L321"]); 
    pName = pName.concat(["L324", "L325", "L337", "L338", "L339", "L352", "L356","L358"]);
    pName = pName.concat(["L359", "L360", "L366", "L368", "L369", "L370", "L371"]);
    pName = pName.concat(["L372", "L373", "L382"]);

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
    row1 = row1.concat(["Ø2-1/2\"<br>275 / 79 lm"]);   // L02
    row1 = row1.concat(["Ø2-1/2\"<br>275 / 79 lm"]);   // L03
    row1 = row1.concat(["Ø3-5/8\"<br>825 / 275 lm"]);  // L05
    row1 = row1.concat(["Ø3/4\"<br>22 / 2.7 lm"]);     // L06
    row1 = row1.concat(["Ø3/4\"<br>22 / 2.7 lm"]);     // L07
    row1 = row1.concat(["Ø2-7/16\"<br>275 / 1.6 lm"]); // L08     

    firstItem = concatenateFirstColumn('Ø2-7/16\"', '275 / 1.6 lm'); // L09
    var row2 = [firstItem];
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 53 lm"]);    // L300
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 275 lm"]);  // L301
    row2 = row2.concat(["Ø1-3/4\"<br>275 / 79 lm"]);   // L302
    row2 = row2.concat(["Ø1-47/64\"<br>275 / 79 lm"]); // L303
    row2 = row2.concat(["Ø2-1/2\"<br>275 / 79 lm"]);   // L304
    row2 = row2.concat(["Ø2-1/4\"<br>275 / 79 lm"]);   // L305 

    firstItem = concatenateFirstColumn('Ø1-3/4\"', '275 / 53 lm'); // L306
    var row3 = [firstItem];
    row3 = row3.concat(["Ø1-3/4\"<br>275 / 53 lm"]);  // L307
    row3 = row3.concat(["Ø2-1/2\"<br>275 / 78 lm"]);  // L310
    row3 = row3.concat(["Ø2-1/2\"<br>275 / 70 lm"]);  // L312
    row3 = row3.concat(["Ø3-5/8\"<br>825 / 275 lm"]); // L315
    row3 = row3.concat(["Ø2-1/2\"<br>275 / 3.8 lm"]); // L320
    row3 = row3.concat(["Ø2-1/2\"<br>275 / 3.8 lm"]); // L321

    firstItem = concatenateFirstColumn('Ø2-1/2\"', '275 / 3.8 lm'); // L324
    var row4 = [firstItem];
    row4 = row4.concat(["Ø2-1/4\"<br>275 / 3.8 lm"]);  // L325
    row4 = row4.concat(["Ø7/8\"<br>22 / 2.7 lm"]);  // L337
    row4 = row4.concat(["Ø7/8\"<br>22 / 0.1 lm"]);  // L338
    row4 = row4.concat(["Ø15/16\"<br>22 / 0.1 lm"]); // L339
    row4 = row4.concat(["Ø2-3/4\"<br>825 / 275 lm"]); // L352
    row4 = row4.concat(["Ø3-5/8\"<br>880 / 4 lm"]); // L356    
    
    firstItem = concatenateFirstColumn('Ø3-5/8\"', '825 / 4.0 lm'); // L358
    var row5 = [firstItem];
    row5 = row5.concat(["Ø3-5/8\"<br>825 / 4.0 lm"]);  // L359
    row5 = row5.concat(["Ø3-5/8\"<br>880 / 275 lm"]);  // L360
    row5 = row5.concat(["Ø3-5/8\"<br>880 / 880 lm"]);  // L366
    row5 = row5.concat(["Ø3-5/8\"<br>880 / 275 lm"]);  // L368
    row5 = row5.concat(["Ø3-5/8\"<br>880 / 275 lm"]);  // L369
    row5 = row5.concat(["Ø1-3/4\"<br>275 / 79.4 lm"]); // L370    

    firstItem = concatenateFirstColumn('Ø1-3/4\"', '275 / 79.4 lm'); // L371
    var row6 = [firstItem];
    row6 = row6.concat(["Ø1-3/4\"<br>275 / 53 lm"]);  // L372
    row6 = row6.concat(["Ø1-3/4\"<br>275 / 53 lm"]);  // L373    
    row6 = row6.concat(["Ø1-11/16\"<br>110 / 46 lm"]);  // L382

    var textArray = row1.concat(row2).concat(row3).concat(row4).concat(row5).concat(row6);

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
   .slides_control .InteriorIngradeImagebuttonL30513, \
   .slides_control .InteriorIngradeImagebuttonL30614, \
   .slides_control .InteriorIngradeImagebuttonL30715, \
   .slides_control .InteriorIngradeImagebuttonL31016, \
   .slides_control .InteriorIngradeImagebuttonL31217, \
   .slides_control .InteriorIngradeImagebuttonL31518, \
   .slides_control .InteriorIngradeImagebuttonL32019, \
   .slides_control .InteriorIngradeImagebuttonL32120, \
   .slides_control .InteriorIngradeImagebuttonL32421, \
   .slides_control .InteriorIngradeImagebuttonL32522, \
   .slides_control .InteriorIngradeImagebuttonL33723, \
   .slides_control .InteriorIngradeImagebuttonL33824, \
   .slides_control .InteriorIngradeImagebuttonL33925, \
   .slides_control .InteriorIngradeImagebuttonL35226, \
   .slides_control .InteriorIngradeImagebuttonL35627, \
   .slides_control .InteriorIngradeImagebuttonL35828, \
   .slides_control .InteriorIngradeImagebuttonL35929, \
   .slides_control .InteriorIngradeImagebuttonL36030, \
   .slides_control .InteriorIngradeImagebuttonL36631, \
   .slides_control .InteriorIngradeImagebuttonL36832, \
   .slides_control .InteriorIngradeImagebuttonL36933, \
   .slides_control .InteriorIngradeImagebuttonL37034, \
   .slides_control .InteriorIngradeImagebuttonL37135, \
   .slides_control .InteriorIngradeImagebuttonL37236, \
   .slides_control .InteriorIngradeImagebuttonL37337, \
   .slides_control .InteriorIngradeImagebuttonL38238 \
').hover(function (e) {
        InteriorIngrade.hoverover();
    }, function () {
        InteriorIngrade.remove();
    });