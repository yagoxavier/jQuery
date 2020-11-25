$(function () {
    //FIND
    $(".article_content").find("p").css({
        "font-size": "0.875em"
    });

    $(".article").find(".article_link").on("click", function () {
        $(this).parent().find(".article_content p").toggleClass("active");
        $(this).toggleClass("active");
        return false;
    });

    //NEXT E NEXT ALL
    $(".article_content p:first").next().addClass("active");
    $(".article_content p:first").nextAll().addClass("active");

    //PREV E PREV ALL
    $(".article_content p:last").prev().removeClass("active");
    $(".article_content p:last").prevAll().addClass("active");

    //NEXT UNTIL
    $(".article_content p:first").clone().appendTo(".article_content");
    $(".article_content p:first").clone().removeClass("active").appendTo(".article_content");
    $(".article_content p:first").clone().appendTo(".article_content");

    //$(".article_content p").nextUntil().fadeOut(2000);
    //$(".article_content p").nextUntil(".active").fadeOut(2000);
    //$(".article_content p").nextUntil("", ".active").fadeOut(2000);

    //PREV UNTIL
    $(".article_content p:last").prevUntil("", ".active").fadeOut(2000);
});
