var imageCounter = 2;

var imageList = [
    "trabalhos/foto6.jpg",
    "trabalhos/foto2.jpg",
    "trabalhos/foto8.jpg",
    "trabalhos/foto7.jpg"
];

function preloadImages() {
    $(imageList).each(function () {
        $('<img />').attr('src', this).appendTo('body').hide();
    });
}

preloadImages();

$(window).on("load", function () {
    
    $("#loading-spinner").animate({
        opacity: 0
    }, function(){
        $("#loading-spinner").css("display", "none");
    });
    
    setInterval(function () {
        if (imageCounter === imageList.length - 1) {
            imageCounter = 0;
            $("#main-pic").animate({opacity: 0}, 400, function () {
                $("#main-pic").css("background-image", "url(" + imageList[imageCounter] + ")");
            });
            $("#main-pic").animate({opacity: 1}, 600);
        } else {
            imageCounter++;
            $("#main-pic").animate({opacity: 0}, 400, function () {
                $("#main-pic").css("background-image", "url(" + imageList[imageCounter] + ")");
            });
            $("#main-pic").animate({opacity: 1}, 600);
        }
    }, 3000);
});