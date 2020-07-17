/// designed by Julia chen on July 15, 2020
/// ... 
function GetInteriorIngradeItems() {   
    var p1 = ["L01", "L02", "L03", "L05", "L06", "L07", "L08"];
    var p2 = ["L09", "L300", "L301", "L302", "L303", "L304", "L305"];
    var p3 = ["L306", "L307", "L310", "L312", "L315", "L320", "L321"];
    var p4 = ["L324", "L325", "L337", "L338", "L339", "L352", "L356"];
    var p5 = ["L358", "L359", "L360", "L366", "L368", "L369", "L370"];
    var p6 = ["L371", "L372", "L373", "L382"];

    var pName = p1.concat(p2).concat(p3).concat(p4).concat(p5).concat(p6);

    return pName;
}



