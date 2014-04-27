/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var prevID = "notificationContent";

function changeTab(curId)
{
    if (curId === prevId)
        return;
    var prevTabId = prevId + 'Tab';
    var curTabId = curId + 'Tab';

    var prevTab = document.getElementById(prevTabId);
    var curTab = document.getElementById(curTabId);
    var prevTabContent = document.getElementById(prevId);
    var curTabContent = document.getElementById(curId);
    prevTabContent.style.display = 'none';
    curTabContent.style.display = 'block';
    setCookie(tabName, curId, tabExpires);
    curTab.className = "selectedTab";
    prevTab.className = prevTab.className.replace("selectedTab", "unselectedTab");

    prevId = curId;
}