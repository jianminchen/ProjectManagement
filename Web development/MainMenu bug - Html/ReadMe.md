Oct. 5, 2020<br>
The website menu items disappears when uplight is removed from websiteMainMenu table. <br>

I found out that MasterPage.cs has bug. Here are steps for me to trouble shoot. <br>
1. Export websiteMainMenu table to websiteMainMenuTest;
2. Update .cs code to replace websiteMainMenu using table websiteMainMenuTest;
3. Test the website using my own Visual Studio, the bug is repeatable. 
4. Html page is broken. The section is closed early. 


