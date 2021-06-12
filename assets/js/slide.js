$(function () {
    nav_resize();
    var timerId = setInterval(function () {
        $("#slideGalley .nav .next").click();
    }, 5000);
    $("#slideGalley").hover(function () {
        $("#slideGalley .nav").show();
        clearInterval(timerId);
    }, function () {
        $("#slideGalley .nav").hide();
        timerId = setInterval(function () {
            $("#slideGalley .nav .next").click();
        }, 5000);
    });

    $("#slideGalley .nav .next").click(function () {
        $("#slideGalley .slide:not(:animated)").animate({
            "margin-left": -1 * $("#slideGalley .slide li").width()
        }, "swing", function () {
            $("#slideGalley .slide").css("margin-left", "0").append($("#slideGalley .slide li:first-child"))
        });
    });
    $("#slideGalley .nav .prev").click(function () {
        $("#slideGalley .slide:not(:animated)")
            .css("margin-left", -1 * $("#slideGalley .slide li").width())
            .prepend($("#slideGalley .slide li:last-child"))
            .animate({
                "margin-left": 0
            }, "swing");
    });
});

// TODO find better way to share max width value with css
function nav_resize() {
    if ($(window).width() < 1080) {
        w = $("#slideGalley").width();
        $("#slideGalley .slide img").css("width", w);	//height is auto changed (css@media)
        $("#slideGalley .nav img").css("width", w / 20);
        $("#slideGalley .nav .next, #slideGalley .nav .prev").css("margin-top", -$("#slideGalley .nav img").width());
    } else {
        $("#slideGalley .slide img").css("width", 1080);
        $("#slideGalley .nav img").css("width", "auto");
        $("#slideGalley .nav .next, #slideGalley .nav .prev").css("margin-top", -50);
    }
}

$(window).resize(nav_resize);