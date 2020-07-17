/// designed by Julia chen on July 15, 2020
/// ... 
function GetWattageMap() {
    // set up on July 16 2020
    var map = new Dictionary();

    // all wattages:     
    
    var wattageL01 = "1W, 2.5W";
    var L01s = ["L01", "L02", "L03", "L08", "L09", "L300", "L301", "L302", "L303", "L304"];
    L01s = L01s.concat(["L305", "L306", "L307", "L310", "L312", "L320", "L321", "L324", "L325", "L358"]);
    L01s = L01s.concat(["L370", "L371", "L372", "L373"]);
    
    L01s.forEach(function (item, index) {
        map.add(item, wattageL01);
    });

    // "0.2W"
    var L07 = "0.2W";
    map.add("L06", L07);
    map.add("L07", L07);
    map.add("L337", L07);
    map.add("L338", L07);
    map.add("L339", L07);
   
    var L05 = "3W, 7.5W";
    map.add("L05", L05);
    map.add("L315", L05);
    map.add("L352", L05);
    map.add("L359", L05);
    
    var L368 = "4W, 8W";
    map.add("L368", L368);
    map.add("L369", L368);

    var L356 = "8W";   
    map.add("L356", L356);
    map.add("L360", L356);
    map.add("L366", L356);

    map.add("L382","1W");    

    return map;
}



