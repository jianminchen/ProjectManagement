using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MasterPage : System.Web.UI.MasterPage
{   
    /// <summary>
    /// code review on Dec. 15, 2017
    /// code review on June 13, 2017
    /// load Interior, Exterior, System, Power Supplies menus from the database, 
    /// and then continue to load submenus for each main menu. 
    /// Html and CSS are configured to fit the design requirement. 
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void Page_Load(object sender, EventArgs e)
    {
        loadMainMenuSubMenu();        

        addRecommendedDriverHyperLink(); 
    }

    /// <summary>
    /// code review on June 13, 2017
    /// </summary>
    private void addRecommendedDriverHyperLink()
    {
        PlaceHolderRecommendedDriverTool.Controls.Clear();

        string recommendedDriverLink = "";
        if (isIE8Version())
        {
            recommendedDriverLink = "~/tools/RecommendedDriversIE8.aspx";
        }
        else
        {
            recommendedDriverLink = "~/tools/RecommendedDrivers.aspx";
        }

        HyperLink theLink = new HyperLink();
        theLink.Text = "Recommended Driver";
        theLink.NavigateUrl = recommendedDriverLink;
        theLink.ToolTip = "Recommended Driver";
        theLink.CssClass = "";
        theLink.Target = "_blank";

        PlaceHolderRecommendedDriverTool.Controls.Add(new LiteralControl("<li>"));
        PlaceHolderRecommendedDriverTool.Controls.Add(theLink);
        PlaceHolderRecommendedDriverTool.Controls.Add(new LiteralControl("</li>")); 
    }

    /// <summary>
    /// Code review on June 13, 2017
    /// </summary>
    protected void loadMainMenuSubMenu()
    {       
        addMainMenus();
        addSubMenus();        
    }

    /// <summary>
    /// code review on June 13, 2017
    /// <li><a data-function="in">INTERIOR</a></li>
    //  PlaceHolderMainMenu.Controls.Add(new LiteralControl("<li><a class=\"MenuItemsColorClass\" id=\"ColorMenu" + name + 
    //  "\" data-function=\"" + dataFunctionName + "\">" + name + "</a></li>")); 
    /// </summary>
    /// <returns></returns>
    private string getHtml(string name, string dataFunctionName)
    {
        var html = "<li><a class=\"MenuItemsColorClass\" id=\"ColorMenu" + name;
        html += "\" data-function=\"" + dataFunctionName + "\">"; 
        html += "<span id=\"MenuItemsID_Span_" + name.Trim().Split(' ')[0] + "\">" + name + "</span></a></li>";

        return html; 
    }

    /// <summary>
    /// code review on June 13, 2017
    /// </summary>
    private void addMainMenus()
    {
        var urls = BowenIslandProject.URLNameList.GetList();

        PlaceHolderMainMenu.Controls.Clear();
        foreach (BowenIslandProject.URLNameList url in urls)
        {
            var dataFunctionName = url.DataFunctionNameinHtml;
            var name = url.WebDisplayName;

            var html = getHtml(name, dataFunctionName);

            PlaceHolderMainMenu.Controls.Add(new LiteralControl(html));
        }
    }

    /// <summary>
    /// code review on Oct. 5, 2020
    /// Maximum four columns - each column - five rows maximum
    /// Check html syntax - prevent syntax error 
    /// code review on June 13, 2017
    /// </summary>
    private void addSubMenus()
    {        
        var subMenus = BowenIslandProject.UrlNameAndChildListHashTable.getTable();
        var urls = BowenIslandProject.URLNameList.GetList();

        foreach (BowenIslandProject.URLNameList url in urls)
        {
            var key = url.UrlName;
            var name = url.DataFunctionNameinHtml;

            var subMenuList = (ArrayList)subMenus[key];

            // html, CSS code 
            var openSection = "<section data-function=\"" + name + "\" class=\"container_12 nav_section\">";
            var leftLeaveBlank = "<div class=\"grid_3\" style=\"height:30px;\">&nbsp;</div>";            

            PlaceHolderSubMenu.Controls.Add(new LiteralControl(openSection));
            PlaceHolderSubMenu.Controls.Add(new LiteralControl(leftLeaveBlank));
            
            addSubMenuFirstThreeColumns(subMenuList);
            addSubMenuFourthColumn(subMenuList);

            PlaceHolderSubMenu.Controls.Add(new LiteralControl("</section>")); // close section - openSection
        }
    }

    /// <summary>
    /// code review on Oct. 5, 2020
    /// html syntax checking 
    /// - check open div and close div
    /// first three columns - 
    /// </summary>
    /// <param name="subMenuList"></param>
    private void addSubMenuFirstThreeColumns(ArrayList subMenuList)
    {
        const int RowsPerColumn = 5;
        const int ThreeColumns  = 3 * RowsPerColumn;

        var openDiv = "<div class=\"grid_7 \">";
        PlaceHolderSubMenu.Controls.Add(new LiteralControl(openDiv));
        addRowsMenuItems(subMenuList, 0, ThreeColumns - 1);
        PlaceHolderSubMenu.Controls.Add(new LiteralControl("</div>")); // close div for openDiv
    }

    /// <summary>
    /// code review on Oct. 5, 2020
    /// easy to check html syntax
    /// </summary>
    /// <param name="subMenuList"></param>
    private void addSubMenuFourthColumn(ArrayList subMenuList)
    {
        const int RowsPerColumn = 5;
        const int ThreeColumns = 3 * RowsPerColumn;

        if (subMenuList.Count > ThreeColumns)
        {
            var openDiv = "<div id=\"MenuItemsFourthRow\" class=\"grid_2 \">";

            PlaceHolderSubMenu.Controls.Add(new LiteralControl(openDiv));

            addRowsMenuItems(subMenuList, ThreeColumns, ThreeColumns + RowsPerColumn - 1);

            PlaceHolderSubMenu.Controls.Add(new LiteralControl("</div>"));
        }
    }

    /// <summary>
    /// Oct. 5, 2020
    /// Warning ...
    /// If missing close div, then whole page is broken. Menu items are gone. It can be found by scrolling down ...
    /// Please work on improvements - code should be simple, and error-prone. Syntax checking...
    /// Interior/ Exterior/ System - each column 5 rows
    /// Power Supplies - each column 4 rows
    /// 
    /// extract to a standalone function 
    /// April 6 2020
    /// First three rows - 0 - 14
    /// Fourth rows - 15 
    /// </summary>
    /// <param name="subMenuList"></param>
    private void addRowsMenuItems(ArrayList subMenuList, int start, int end)
    {                       
        const int RowPerColumn = 5;
        var menuCount = subMenuList.Count;
     
        int columnCount = 0;
        for (int i = start, row = 0; i <= end && i < menuCount; i++, row++)
        {
            var subMenu = (BowenIslandProject.UrlNameAndChildListHashTable)subMenuList[i];

            var mainMenuUrl = subMenu.UrlName;

            var rowSettings = RowPerColumn;
            var specialSetting = mainMenuUrl.ToUpper().Contains("POWER");
            if (specialSetting)
            {
                rowSettings = 4;
            }

            var isFirstRow = row % rowSettings == 0;
            var isLastRow = ((row + 1) % rowSettings == 0) || (i == end || i == menuCount - 1);

            if (isFirstRow)
            {
                var cssClass = "grid_2";
                if (columnCount == 2 && menuCount < 15)
                {
                    cssClass = "grid_3";
                }

                var idName = mainMenuUrl + "MenuItem" + "Column" + row/rowSettings;
                var openDiv = "<div id=\"" + idName +"\" class=\"grid_2 led_menu\"><ul class=\"ns_list " + cssClass + " \">";
                PlaceHolderSubMenu.Controls.Add(new LiteralControl(openDiv));

                columnCount++;
            }

            addSubMenuHyperLink(subMenu);           

            if (isLastRow)
            {
                PlaceHolderSubMenu.Controls.Add(new LiteralControl("</ul></div>")); // close div 
            }            
        }       
    }

    /// <summary>
    /// code review on Oct. 5, 2020
    /// </summary>
    /// <param name="subMenu"></param>
    private void addSubMenuHyperLink(BowenIslandProject.UrlNameAndChildListHashTable subMenu)
    {
        var mainMenuUrl = subMenu.UrlName;
        var subMenuUrl = subMenu.UrlSubName;
        var navigateUrl = getNavigateUrl(mainMenuUrl, subMenuUrl);

        var hyperLink = new HyperLink();

        hyperLink.ID = subMenu.UrlStringAsKey;
        hyperLink.NavigateUrl = navigateUrl;
        hyperLink.Target = "_self";
        hyperLink.Text = subMenu.WebDisplaySubName;

        PlaceHolderSubMenu.Controls.Add(new LiteralControl("<li>"));
        PlaceHolderSubMenu.Controls.Add(hyperLink);
        PlaceHolderSubMenu.Controls.Add(new LiteralControl("</li>"));
    }

    /// <summary>
    /// code review on June 13, 2017
    /// </summary>
    /// <param name="mainMenuUrl"></param>
    /// <param name="subMenuUrl"></param>
    /// <returns></returns>
    private string getNavigateUrl(string mainMenuUrl, string subMenuUrl)
    {
        var mainMenu = URLString_BowenIsland.URLLOOKUP.MAINMENU;
        var subMenu  = URLString_BowenIsland.URLLOOKUP.SUBMENU;

        var navigateUrl = "~/ProductsOverview.aspx?" + mainMenu + "=" + mainMenuUrl + "&" + subMenu + "=" + subMenuUrl;

        if (WebsiteSubMenuString.isViewAll(subMenuUrl))
        {
            navigateUrl = "~/ViewAll.aspx?" + mainMenu + "=" + mainMenuUrl;
        }

        if (WebsiteSubMenuString.isViewAllSystem(subMenuUrl))
        {
            navigateUrl = "~/ViewAllSystemPowerSupplies.aspx?" + mainMenu + "=" + mainMenuUrl;
        }

        if (WebsiteSubMenuString.isInstallationInstructionstring(subMenuUrl))
        {
            navigateUrl = "~/system_mount.aspx";
        }

        return navigateUrl; 
    }

    /// <summary>
    /// code review on June 13, 2017
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void searchBox_TextChanged(object sender, EventArgs e)
    {
        var SearchTerm = searchBox.Text;

        if ((SearchTerm.Trim() != "") && (SearchTerm.Trim() != "search"))
        {
            SearchTerm = MPL.CleanString.RemoveSigns(SearchTerm, "0");

            // default is AND, cb1 = 0; default is OR, cb1 = 1 on Nov. 28, 2013
            Response.Redirect("~/SearchResult.aspx?terms=" + SearchTerm + "&cb1=0&cb2=0&cb3=0");   
        }
    }

    private float getInternetExplorerVersion()
    {
        // Returns the version of Internet Explorer or a -1
        // (indicating the use of another browser).
        float rv = -1;

        System.Web.HttpBrowserCapabilities browser = Request.Browser;

        if (browser.Browser == "IE")
        {
            rv = (float)(browser.MajorVersion + browser.MinorVersion);
        }

        return rv;
    }

    private bool isIE8Version()
    {
        bool browserVersionIE8 = false; 

        //string msg;
        double ver = getInternetExplorerVersion();

        if (ver > 0.0)   // IE browser 
        {
            if (ver >= 8.0 && ver < 9.0)
            {
                browserVersionIE8 = true;
            }
        }
        else  // other browsers
        {
            //msg = "You're not using Internet Explorer.";
        }

        return browserVersionIE8; 
    }
}
