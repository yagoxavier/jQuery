$(function () {
    //CHILDREN
    $(".article").children().css("font-family", "Open Sans, serif");
    $(".article").children(".article_content").css("margin-bottom", "30px");
    $(".article_content").children("p").css("font-size", "0.8em");

    //SIBLINGS
    $(".article_content p").siblings().css("color", "#777");
    $(".article_content p").siblings(".a").css("color", "#09f");

    //PARENT
    $(".article_content b").parent().css({
        padding: "10px",
        background: "#fbfbfb"
    }).parent("div").css({
        "paddigin-bottom": "15px",
        "border-bottom": "5px solid #eee"
    });

    //PARENTS
    $("p").on("click", function () {
        //$(this).parents().toggleClass("active");
        $(this).parents("body").toggleClass("active");

        var data = new Date();
        $(".date").remove();
        $(this).parents("div:last").append("<div class='date'>" + data.getUTCDate() + "/" + data.getUTCMonth() + "/" + data.getUTCFullYear() + "</div>");

        console.log($(this).parents());
        console.log($(this).closest(".article"));
    });

    //CLOSEST
    $("b").closest("p").css("border-top", "1px solid #09f");

    //PARENT UNTIL
    console.log("UNTIL");
    console.log($(".a").parents(".article")); //volta até
    console.log($(".a").parentsUntil(".article")); //parentes de article [EL, ]
    console.log($(".a").parentsUntil("body", "article")); //parentes de article [EL, FILTRO]
});
