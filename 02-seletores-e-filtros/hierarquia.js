$(function () {
    $("article p").css("color", "red");

    $("article > *").css("color", "blue");

    $("div + *").css("background", "yellow");
    
    $("div ~ p").text("Irmão");
});
