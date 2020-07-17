/// designed by Julia chen on July 15, 2020
/// ... 
function GetFixtureOutputMap() {    
    // set up on July 16 2020
    var map = new Dictionary();       

    var lumenL01 = "47 - 79 lm";
    var L01s = ["L01", "L02", "L03", "L302", "L303", "L304", "L305"];
    L01s = L01s.concat(["L306", "L324", "L370", "L371"]);       

    L01s.forEach(function (item, index) {
        map.add(item, lumenL01);
    });

    // L08, L09 0.5-3.4 lm
    var L08 = "0.5-3.4 lm";
    map.add("L08", L08);
    map.add("L09", L08);

    // L300, L301, 29-53 lm
    var L300 = "29-53 lm";
    map.add("L300", L300);
    map.add("L301", L300);    
    
    // "L320", "L321", 1.8 - 3.8 lm
    var L320 = "1.8 - 3.8 lm";
    map.add("L320", L320);
    map.add("L321", L320);
    
    // "L358", L359 1.3 - 4.0 lm
    var L358 = "1.3 - 4.0 lm";
    map.add("L358", L358);
    map.add("L359", L358);

    // "0.2W"
    var L07 = "2.7 lm";
    map.add("L06", L07);
    map.add("L07", L07);
    map.add("L337", L07);    
    map.add("L339", L07);

    var L05 = "117 - 275 lm";
    map.add("L05", L05);
    map.add("L315", L05);
    map.add("L352", L05);    

    var L368 = "140 - 275 lm";
    map.add("L368", L368);
    map.add("L369", L368);

    var L372 = "29 - 53 lm"
    map.add("L372", L372);
    map.add("L373", L372);
   
    map.add("L307", "33 - 53 lm");
    map.add("L310", "51 - 78 lm");    
    map.add("L312", "43 - 72 lm");
    map.add("L325", "1.8 - 3.8 lm");
    map.add("L338", "0.05, 0.1 lm");
    map.add("L356", "4 lm");
    map.add("L360", "247 - 275 lm");
    map.add("L366", "305 - 315 lm");
    map.add("L382", "110 lm");    

    return map;
}



