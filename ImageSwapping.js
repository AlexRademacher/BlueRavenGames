var image = document.getElementById("SwappingImage");
var currentPos = 0;
var images = ["url('Images/StrangeTower.png')", "url('Images/TheWyrm.png')"];

function volgendefoto() {
    ++currentPos;
    
    if (currentPos >= images.length)
        currentPos = 0;
    
    //alert('url("' + images[currentPos] + '")');
    
    image.body.style.backgroundImage = images[currentPos];
}

setInterval(volgendefoto, 3000);
