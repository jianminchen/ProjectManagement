/// designed by Julia chen on July 15, 2020
/// ... 
function GetLedOutputMap() {
    // set up on July 16 2020
    var map = new Dictionary();

    // all wattages:     

    var lumenL01 = "110 - 275 lm";
    var L01s = ["L01", "L02", "L03", "L08", "L09", "L300", "L301", "L302", "L303", "L304"];
    L01s = L01s.concat(["L305", "L306", "L307", "L310", "L312", "L320", "L321", "L324", "L325", "L358"]);
    L01s = L01s.concat(["L370", "L371", "L372", "L373"]);

    L01s.forEach(function (item, index) {
        map.add(item, lumenL01);
    });
   
    // "0.2W"
    var L07 = "22 lm";
    map.add("L06", L07);
    map.add("L07", L07);
    map.add("L337", L07);
    map.add("L338", L07);
    map.add("L339", L07);

    var L05 = "330 - 825 lm";
    map.add("L05", L05);
    map.add("L315", L05);
    map.add("L352", L05);
    map.add("L359", L05);

    var L368 = "440 - 880 lm";
    map.add("L368", L368);
    map.add("L369", L368);

    var L356 = "880 lm";
    map.add("L356", L356);
    map.add("L360", L356);
    map.add("L366", L356);

    map.add("L382", "110 lm");

    return map;
}



