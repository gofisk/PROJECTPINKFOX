/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var prevID = "notification";

window.onload = function()
{
    setupContent();
};

function setupContent()
{
    var loadedContent = document.getElementById(prevID+"Content");
    var loadedTab = document.getElementById(prevID+"Tab");
    loadedContent.className = "selectedContent";
    loadedTab.className = "selectedTab";
}

function changeContent(curID)
{
    if (curID === prevID)
        return;
    
    var prevContent = document.getElementById(prevID+"Content");
    var curContent = document.getElementById(curID+"Content");
    var prevTab = document.getElementById(prevID+"Tab");
    var curTab = document.getElementById(curID+"Tab");
    
    prevTab.className = "unselectedTab";
    curTab.className = "selectedTab";
    prevContent.className = "unselectedContent";
    curContent.className = "selectedContent";
    
    prevID = curID;
}