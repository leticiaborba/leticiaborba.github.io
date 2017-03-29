$(window).on("load", function () {
    
    $("#loading-spinner").animate({
        opacity: 0
    }, function(){
        $("#loading-spinner").css("display", "none");
    });
    
});