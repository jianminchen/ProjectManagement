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
function mouseHoverOverDetailWithTitle(idArray, textArray) {
    var cssMouseHoverPosition = "mouseHoverPosition";

    for (i = 0; i < idArray.length; i++) {
        var div = $('<div class="plist_Caption_highlight_hoverover mouseHoverProduct">').css({
        });
        var spn = $('<span class="plist_Caption_highlight_hoverover mouseHoverText mouseHoverProduct">').css({

        });

        var spnFirst = $('<span class="plist_Caption_highlight_hoverover mouseHoverTextWithTitle mouseHoverProduct">').css({

        });

        var isFirstOne = i % 7 == 0;

        div.append(textArray[i]);
        spn.append(textArray[i]);
        spnFirst.append(textArray[i]);

        var ith = $(idArray[i]);

        if (isFirstOne) {
            ith.after(spnFirst); 
        }
        else {
            ith.after(spn);
        }

        ith.parent().addClass(cssMouseHoverPosition);

        if (i == 0) {
            var divLine = $(' <div id="carousel_b_border_New" class="grid_x mouseHoverProduct">');
            var divLine2 = $(' <div id="carousel_b_border_New2" class="grid_x mouseHoverProduct">');
            var divLine3 = $(' <div id="carousel_b_border_New3" class="grid_x mouseHoverProduct">');
            var divLine4 = $(' <div id="carousel_b_border_New4" class="grid_x mouseHoverProduct">');
            var divLine5 = $(' <div id="carousel_b_border_New5" class="grid_x mouseHoverProduct">');
           
            $('#carousel_b_border').before(divLine);
            $('#carousel_b_border').before(divLine2);
            $('#carousel_b_border').before(divLine3);
            $('#carousel_b_border').before(divLine4);
            $('#carousel_b_border').before(divLine5);
        }
    }
}


