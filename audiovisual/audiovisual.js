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