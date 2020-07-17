
/*
make adjustment on cellular phone display - requested by Mirek on Feb. 13, 2015 
The function is designed to adjust the menu and image to show better 
on mobile devices - iphone, android phone, blackberry, windows phones 

Navigator userAgent property: 
--
Apple iphone 5
Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) 
AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 
Safari/9537.53
--
BlackBerry z30
Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) 
Version/10.0.9.2372 Mobile Safari/537.10+
--
BlackBerry z10
Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+

--
windows phone
Internet Explorer for Windows Phone 8.1 Update
Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537


Nokia phone

NokiaN97/21.1.107 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4

Test cases: 1. Android phone, easy to read menus; 
               iphone 5/6, Power Supplies menu is not missing 'Supplies';
            2. Top menu change applies to all pages
            3. Tablet should be same as desktop; 
            4. SONY, HTC are android phones
Action Items: 1. 
             
**/
/*  -- back up before working on the change - 9/17/2015  
- August 30, 2016
Test on nexus 5 - work on the update
A checklist:
1. line A:  Keep the primary logo same size on the mobile version 
   comment out line 57
2. line C: Menus - Interior/ Exterior/Systems
   Font size is adjusted to 90%, otherwise, 100%, menu item "Power Supplies", Supplies is missing
   line 61 - 90%
3. line D: body - zoom to 75%, therefore, the font is readable, but not too big, 
   ideal for nexus 5 phone
   check for Iphone4, used to 60%
4. line E: need some notes here - min-width?
*/
function customizedZoomOut() {
    
    var needAjustment = mobileNeedAdjustment(); 
 
    if (needAjustment && needAjustment ===true) {       
        //$("#primary_logo").css('zoom', '100%');   // line A
        //$("#header").css('zoom', '95%');          // line B
       
        $("#nav_list > li").css('font-size', '90%');   // line C
       
        $("body").css('zoom', '75%');       // line D

        $("body").css('min-width', '320');  // line E
    };
    
}

/*  Try to make change based on request from Mirek - hold on it until Julia has more time 9/23/2015 
function customizedZoomOut() {

    var needAjustment = mobileNeedAdjustment();

    if (needAjustment && needAjustment === true) {

        //Menu items section - 
        // 1. Logo - reduce 50% 
        // 2. font size - reduct to 65%;
        $("#primary_logo").css('zoom', '50%');
        $("#header").css('zoom', '95%');

        //Interior/Exterior/Systems/Projects Menu section - font size smaller
        $("#nav_list > li").css('font-size', '65%');
        //$("#sub_footer > li").css('font-size', '65%');

        //body section shrinks to 60%
        $("body").css('zoom', '60%');
        $("body").css('min-width', '320');

        if (Math.abs(window.orientation) === 90 && window.screen.width < 700) {
            // Landscape
            
           
            $("body").css('zoom', '50%');
            $("body").css('min-width', '320');

            //$("#header_wrapper").css('zoom', '75%');  // causing the header search edit box missing 
            //$("#sub_footer").css('zoom', '75%');    //causing the footer missing 
             
        } else if (window.screen.width < 400) {
            // Portrait
            $("body").css('zoom', '35%');
            $("body").css('min-width', '300');
        }
    };

}
*/
 function mobileNeedAdjustment(){
    var ratioValue = window.devicePixelRatio;
    var isHighDensityScreen = (ratioValue >= 1.5);
    var isLowDensityScreen = (ratioValue == 0.75);
    var needAdjustment = false; 

    if (isHighDensityScreen) {
        var userAgent = navigator.userAgent;
        var ua = userAgent.toLowerCase();

        // small case 
        var isAndroid = ua.indexOf("android") > -1;

        // case sensitive comparison
        var isBlackBerry = userAgent.indexOf("BB10") > -1;
        var is_iOS_iphoneOnly = (userAgent.match(/(iPhone)/g) ? true : false);

        // Nokia SymbianOS
        var isNokiaSymbinaOSPhone = userAgent.indexOf("SymbianOS") > -1;
        var isWindowsPhone = userAgent.indexOf("Windows Phone") > -1;

        if (isAndroid || isBlackBerry || is_iOS_iphoneOnly || isNokiaSymbinaOSPhone || isWindowsPhone) {
            return true;
        }
    };

    return false;
}