$(function () {
    var content = $(".content");
    var defaults = content.html();
    var template = "load/load.html";
    content.load(template + " #home");

    $("body").on("click", ".j_load", function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            return;
        } else {
            $(".j_load").removeClass("active");
            $(this).addClass("active");
        }

        var load_dile = $(this).attr("href");
        content.html(defaults).delay(400).fadeOut(100, function () {
            content.load(template + " #" + load_dile, function (response, status, jqXHR) {
                console.log(response, status, jqXHR);
            }).fadeIn();
        });
    });
});