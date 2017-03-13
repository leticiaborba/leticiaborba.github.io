//preload the spinner button
function preloadElement(type, className){
    var newElement = document.createElement(type);
    var newClass = document.createAttribute('class');

    newClass.value = className;
    newElement.setAttributeNode(newClass);

    document.getElementsByTagName('body')[0].appendChild(newElement);
    document.getElementsByTagName('body')[0].removeChild(newElement);            
}

preloadElement('I', 'fa fa-circle-o-notch');

//hide the loading overlay after the page finished loading
window.addEventListener("load", function(){
    var loadingDiv = document.getElementById("loading-div");
    loadingDiv.className += " active";
    document.body.className += " active";
});

//set the grayscale filter on mouse over/off
function filterOff(x){
    x.style.webkitFilter = 'grayscale(0)';
}

function filterOn(x){
    x.style.webkitFilter = 'grayscale(100%)';
}

//set the click event listener to the .image-container class collection to handle the zooming images
function clickEventSetup(){
    var classCollection = document.getElementsByClassName("image-container");
    for(var i = 0; i < classCollection.length; i++){
        classCollection[i].addEventListener("click", function(){
            document.getElementById("foto-zoom").style.display = "none";
            document.getElementById("foto-zoom-large").style.display = "none";

            var imageUrl = this.style.backgroundImage

            if(window.innerWidth > 576 ){
                if(this.classList.contains("large")){
                    document.getElementById("foto-zoom-large").style.backgroundImage = imageUrl;
                    document.getElementById("foto-zoom-large").style.display = "block";
                } else {
                    document.getElementById("foto-zoom").style.backgroundImage = imageUrl;
                    document.getElementById("foto-zoom").style.display = "block";
                }
            }
        });
    }
}

clickEventSetup();

//hide the zoom overlay on click
document.getElementById("foto-zoom").addEventListener("click", function(){
    document.getElementById("foto-zoom").style.display = "none";
});

document.getElementById("foto-zoom-large").addEventListener("click", function(){
    document.getElementById("foto-zoom-large").style.display = "none";
});

//add the .active class to the menu elements and remove it accordingly
document.getElementById("burger").addEventListener("click", function(){

    if(!document.getElementById("burger").classList.contains("active")){
        document.getElementById("menu").className += " active";
        document.getElementById("burger").className += " active";
        document.getElementById("menu-content").className += " active";
    } else {
        document.getElementById("menu").classList.remove("active");
        document.getElementById("burger").classList.remove("active");
        document.getElementById("menu-content").classList.remove("active");
    }           
});