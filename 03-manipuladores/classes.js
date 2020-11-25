$(function () {

    //CSS
    $("p").css("color", "#006699");
    $("p").css({
        color: '#555'
                //"border-bottom": "1px solid #ccc"
    });

    //Escreve e recupera o atributo
    $(".segunda").attr("id", "segundo");
    console.log($(".segunda").attr("id"));

    //Verifica uma propriedade
    console.warn($("input").prop("checked"));
    console.warn($("input").attr("checked"));

    //Escreve e recupera um valor
    $("input").val("nome");
    console.warn($("input").val());

    //Copia e replica um elemento
    $(".segunda").clone().appendTo("body").html("<b>#BoraProgramar!</b>");

    $("div").on("click", function () {
        //$(this).toggleClass("add"); //Remove ou adiciona uma classe.

        //Verifica uma classe
        if ($(this).hasClass("add")) {
            //Remove uma classe
            $(this).removeClass("add");
            $(this).find("p").slideUp();
            //Remove um atributo
            $("input").removeAttr("checked");
        } else {
            //Ariciona um classe
            $(this).addClass("add");
            $(this).find("p").slideDown();
            $("input").attr("checked", "checked");
        }
    });
});
