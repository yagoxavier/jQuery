$(function () {
    //SELETOR DE ELEMENTO
    $("b").text("jQuery Essentials");
    
    //SELETOR DE CLASSE
    $(".jquery").css("color", "red");
    
    //SELETOR DE ID
    $("#jquery").text("Id = jQuery");
    
    //SELETOR ALL
    $("div *").css("border", "1px solid #ccc");
    
    //SELETOR MÚLTIPLO
    $(".jquery, b").css({
        background: "blue",
        color: "red",
        'border-radius': "4px",
        padding: "10px",
        "font-size": "1.4em"
    });
    
    //SELETOR MÚLTIPLO ALTERNATIVO
    $("b").add("p").css("font-size", "2em");
});
