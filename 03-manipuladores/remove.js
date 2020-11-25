$(function () {
    //Remove o elemento selecionado
    $(".b").remove();

    //Remove elementos e conteúdo do elemento selecionado
    $(".d").empty();
    setTimeout(function () {
        $(".d").text("#BoraProgramar!");
    }, 2000);


    $("p").on("click", function () {
        $(this).toggleClass("active");
    });

    var p;

    $(".button").on("click", function () {
        if (p) {
            p.appendTo(".r");
            p = null;
        } else {
            //Remove o elemento selecionado mantendo eventos em cache para reutilização
            p = $("p").detach();
        }
    });

    var href = $(".e").text();

    //Substitui o ELEMENTO por
    $(".e").replaceWith("<p><a target='_blank' href='https://" + href + "'>" + href + "</a></p>");

    //Substitui o ELEMENTO em
    $("<p>#BoraProgramar!</p>").replaceAll("p");
});
