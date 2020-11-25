$(function () {
    //Embrulha todos os elementos selecionados.
    $("p").wrapAll("<div>");

    //Embrulha cada elemento selecionado por dentro.
    $("p").wrapInner("<span>");

    //Desembrulha o elemento selecionado de seu antecedente.
    $("span").unwrap("p");

    //Embrulha cada os elementos selecionados.
    $("span").wrap("<h2>");
});
