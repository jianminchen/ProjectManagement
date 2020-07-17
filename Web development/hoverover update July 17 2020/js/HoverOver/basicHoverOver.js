// March 4, 2016
// mouse hoverover function
// Feb. 24, 2016
// Interior/ recessed downlight L01 and other items in the menu bar
// Feb. 12, 2016 - work on mouseoverevent 
// http://blog.teamtreehouse.com/css3-substring-matching-attribute-selectors   
// http://www.asp.net/web-forms/overview/older-versions-getting-started/master-pages/control-id-naming-in-content-pages-cs
// http://api.jquery.com/after/  not append
// http://stackoverflow.com/questions/2104949/how-to-reload-refresh-an-elementimage-in-jquery
// http://www.mplighting.com/img/hoverover/shadow.jpg
// https://css-tricks.com/text-blocks-over-image/

// basic function for all menus - No. 1 
function mouseHoverOverDetail(idArray, textArray) {
    var cssMouseHoverPosition = "mouseHoverPosition";

    for (i = 0; i < idArray.length; i++) {
        var div = $('<div class="plist_Caption_highlight_hoverover mouseHoverProduct">').css({
        });
        var spn = $('<span class="plist_Caption_highlight_hoverover mouseHoverText mouseHoverProduct">').css({

        });
        div.append(textArray[i]);
        spn.append(textArray[i]);

        var ith = $(idArray[i]);
        ith.after(spn);
        ith.parent().addClass(cssMouseHoverPosition);

        if (i == 0) {
            var divLine = $(' <div id="carousel_b_border_New" class="grid_x mouseHoverProduct">');
            $('#carousel_b_border').before(divLine);
        }
    }
}

// basic function for all menus - No. 2
/*
Learning JavaScript:
1. bug001 - how to declare an array
  (March 4, 2016): [] - declare it using [], otherwise, leave empty, will cause problem
  change1: replace index[i] with i - save time to avoid maintain index[i]
2. Design the function to have some flexibility - overload the function 
   with pIndex, or not index. 
   save time to avoid pIndex if the order is sequential. 

   or pIndex is specified as an array 

  reference:
http://stackoverflow.com/questions/456177/function-overloading-in-javascript-best-practices
*/

function prepareIdArray(cssClass, menuName, pName, pIndex) {
    
    var len = pName.length;
    var unspecifiedIndex = pIndex == undefined;
    if (!unspecifiedIndex)
        len = Math.min(pName.length, pIndex.length);

    var i = 0;

    var outputArray = [];   // bug001 
    for (i = 0; i < len; i++) {
        var index = i; 
        if (!unspecifiedIndex)
            index = pIndex[i];

        outputArray.push(cssClass.concat(menuName.concat(pName[i].concat(index))));  // change1       
    }

    return outputArray;
}

// basic function for all menus - No. 3
function mouseHoverover_Remove(idArray) {

    $('.mouseHoverProduct').remove();

    var cssMouseHoverPosition = "mouseHoverPosition";

    for (i = 0; i < idArray.length; i++) {
        var ith = $(idArray[i]);
        ith.parent().removeClass(cssMouseHoverPosition);
    }
}