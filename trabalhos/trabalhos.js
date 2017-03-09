/*global $*/
$(window).on("load", function () {
    'use strict';
    $("#loading-spinner").animate({
        opacity: 0
    }, function () {
        $("#loading-spinner").css("display", "none");
    });
});

$(".image-container").hover(function () {
    'use strict';
    $(this).css("filter", "none");
}, function () {
    'use strict';
    $(this).css("filter", "grayscale(100%)");
});

/*$(".menu-arrow").on("click", function () {

    'use strict';
    if ($(".menu-slide").css("display") === "none") {
        $(".menu-slide").css("display", "block");
        $(".menu-slide").animate({
            right: 0
        });
        $(".menu-arrow").animate({
            right: $(".menu-slide").css("width")
        }, function () {
            $(".menu-arrow").removeClass("fa-angle-left");
            $(".menu-arrow").addClass("fa-angle-right");
        });
    } else {
        $(".menu-slide").animate({
            right: '-40vw'
        }, function () {
            $(".menu-slide").css("display", "none");
        });
        $(".menu-arrow").animate({
            right: 0
        }, function () {
            $(".menu-arrow").removeClass("fa-angle-right");
            $(".menu-arrow").addClass("fa-angle-left");
        });
    }
});*/

$(".image-container").on("click", function () {
    'use strict';
    $(".foto-zoom, .foto-zoom-large").css("display", "none");
    if ($(window).width() > 576) {
        if ($(this).hasClass("large")) {
            $(".foto-zoom-large").css("background-image", $(this).css("background-image"));
            $(".foto-zoom-large").css("display", "block");
        } else {
            $(".foto-zoom").css("background-image", $(this).css("background-image"));
            $(".foto-zoom").css("display", "block");
        }
    }
});

$(".foto-zoom, .foto-zoom-large, .menu-arrow").on("click", function () {
    'use strict';
    $(".foto-zoom, .foto-zoom-large").css("display", "none");
});