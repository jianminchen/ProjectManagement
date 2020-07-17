/// designed by Julia chen on July 15, 2020
/// ... 
function GetCutoutSizeMap() {
    // set up on July 16 2020
    var map = new Dictionary();

    // all sizes: 
    // "Ø1/2\""
    // "Ø7/16\"" 
    // "Ø1\"" 
    // "Ø1-1/4\""
    // "Ø1-5/8\""     
    // "Ø2-11/16\"";
    // "Ø2-3/4\"" 

    // "Ø1-5/8\"", 41mm
    var sizeL01 = "Ø1-5/8\"";
    var L01Size = ["L01", "L02", "L03", "L08", "L09", "L300", "L301"];
    L01Size = L01Size.concat(["L302","L304","L305","L306","L307","L310","L312"]);
    L01Size = L01Size.concat(["L320","L321","L324","L325"]); 
    
    L01Size.forEach(function (item, index) {
        map.add(item, sizeL01);
    });    

    //  "Ø1/2\"", 13mm   
    var sizeL07 = "Ø1/2\"";
    map.add("L07", sizeL07);
    map.add("L337", sizeL07);
    map.add("L338", sizeL07);
    map.add("L339", sizeL07);

    // "Ø2-3/4\""  70mm
    var sizeL315 = "Ø2-3/4\"";
    map.add("L315", sizeL315);
    map.add("L369", sizeL315);      

    // "Ø7/16\"" 10.5mm
    var sizeL06 = "Ø7/16\"";
    map.add("L06", sizeL06);

    // "Ø2-11/16\"" 69mm
    var sizeL05 = "Ø2-11/16\"";
    map.add("L05", sizeL05);
    map.add("L352", sizeL05);
    map.add("L356", sizeL05);   
    map.add("L358", sizeL05);
    map.add("L359", sizeL05);
    map.add("L360", sizeL05);
    map.add("L366", sizeL05);
    map.add("L368", sizeL05);

    // "Ø1-1/4\"" 28.8mm
    var sizeL370 = "Ø1-1/4\"";
    map.add("L370", sizeL370);
    map.add("L371", sizeL370);
    map.add("L372", sizeL370);
    map.add("L373", sizeL370);

    // "Ø1-1/8\"" 28.8mm
    var sizeL382 = "Ø1-1/8\"";
    map.add("L382", sizeL382);

    return map;
}



