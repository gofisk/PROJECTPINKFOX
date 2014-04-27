/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var prevContentID = "notificationContent";

window.onload = function()
{
    setupContent();
};

function setupContent()
{
    var childContent = document.getElementById('tabsContent').childNodes;
    for (var i = 0; i < childContent.length; i++)
    {
        if (childContent[i].id !== undefined && childContent[i].id !== null)
        {
            if (childContent[i].id === prevContentID)
            {
                childContent[i].className = "selectedContent";
            }
            else
            {
                childContent[i].className = "unselectedContent";
            }
        }
        
    }
}

function changeContent(curContentID)
{
    if (curContentID === prevContentID)
        return;
    
    var prevContent = document.getElementById(prevContentID);
    var curContent = document.getElementById(curContentID);
    prevContent.className = "unselectedContent";
    curContent.className = "selectedContent";
    prevContentID = curContentID;
}