var slideshowTimer;


const events = ["pageshow", "load", "DOMContentLoaded"];

const eventLogger = (event) => {
    switch(event.type) {
        case "DOMContentLoaded":
            var slides = document.getElementsByClassName("SlideContent");
            slides[n].style.display = "block";
            
            slideshowTimer = setTimeout(slideshow, 10000);
            break;
        default:
            break;
    }
};

events.forEach((eventName) => window.addEventListener(eventName, eventLogger));



function testTabs(evt, tabNum) {
    var i, tabContent, tabs;
    var alreadyPressed = false;
    
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


function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function overlayOn(x) {
    const collection = document.getElementById(x);
    const element = collection.getElementsByTagName("div");
    element[0].style.display = "block";
    //document.getElementsByClassName("overlay").style.display = "block";
    console.log(5 + 6);
}

function overlayOff(x) {
    const collection = document.getElementById(x);
    const element = collection.getElementsByTagName("div");
    element[0].style.display = "none";
}

function collapse(x) {
    x.classList.toggle("active");
    
    
    var content = x.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
}

var n = 0;

function slideshow() {
    slideshowProgress();
    slideshowTimer = setTimeout(slideshow, 10000);
}

function slideshowProgress() { 
    var slides = document.getElementsByClassName("SlideContent");
    
    if (n >= slides.length - 1)
            n = 0;
        else
            n = n + 1;
    
    slides[n].style.display = "block";
    
    if (n <= 0){
        slides[slides.length - 1].style.display = "none";
    }
    
    if (n > 0 && n <= slides.length - 1) {
        slides[n - 1].style.display = "none";
    }
}

function slideshowBack() {
    
    var slides = document.getElementsByClassName("SlideContent");

    if (n <= 0)
            n = slides.length - 1;
        else
            n = n - 1;
    
    slides[n].style.display = "block";
    
    if (n >= slides.length - 1) {
        slides[0].style.display = "none";
    }
    
    if (n < slides.length - 1 && n >= 0) {
        slides[n + 1].style.display = "none";
    }
}

function ssForwardButton() {
    clearTimeout(slideshowTimer);
    slideshowProgress();
    slideshowTimer = setTimeout(slideshow, 30000);
}

function ssBackButton() {
    clearTimeout(slideshowTimer);
    slideshowBack();
    slideshowTimer = setTimeout(slideshow, 30000);
}