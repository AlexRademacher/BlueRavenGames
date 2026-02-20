let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

function testTabs(evt, tabNum) {
    var i, tabContent, tabs;
    var alreadyPressed = false;

    
    if (document.getElementById(tabNum).style.display == "block") {
        alreadyPressed = true;
    }
    
    // remove all other info
    tabContent = document.getElementsByClassName("TabContent");
    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    
    // remove active state from all tab buttons
    tabs = document.getElementsByClassName("Tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    
    if (!alreadyPressed){
        // reveal the info of the tab pressed and set it active
        document.getElementById(tabNum).style.display = "block";
        evt.currentTarget.className += " active";
    }
}
