//
// Development research: 
// sample code: http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_hover
// finish swatches           
// http://stackoverflow.com/questions/906486/how-can-i-programmatically-invoke-an-onclick-event-from-a-anchor-tag-while-kee
// http://stackoverflow.com/questions/1070760/javascript-function-in-href-vs-onclick
// http://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery    
// understand JavaScript getElementById vs Jquery selector - April 8, 2016
// for onclick event, JavaScript getElementById should be used. 
// For maintanenace -
// 10/27/2017
// add SI - Silver
// September 7, 2017 
// add PS6
// January 4, 2016
// Add ABS finish 
//
$("#finish_thumb_wrapper ul li img").hover(function () {

        var finish_class = this.className;
        var prefix = "slidesPageID_finish_"; 
        var finished = ["AB", "ABZ", "BK", "BA", "BN", "BZ","BZP", "MA", "MC", "MP", "MSC", "PB", "PS6", "SS", "S", "S3", "S6", "SI", "BT0", "WH", "WI", "WO","WN","TK","ML","CO","CD"];
        if (finished.indexOf(finish_class) > -1) {
            var idKey = prefix.concat(finish_class);
            if (document.getElementById(idKey)) {
                document.getElementById(idKey).click();
            }

            var cssClass = ".finish_full." + finish_class;
            $(cssClass).show()
        }    
    },     // end of function()

    function () {
        $(".finish_full").hide()
    }
)         // end of hover  