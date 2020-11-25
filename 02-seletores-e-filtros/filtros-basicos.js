$(function () {
    //DIFERENTES DA SELEÇÃO
    $("p:not('.p')").css("font-weight", "bold");

    //O PRIMEIRO NA LISTA
    $("p:first").css("color", "red");

    //O ÚLTIMO NA LISTA
    $("p:last").css("color", "red");

    //ELEMENTOS PAREAS
    $("p:even").css("background", "#eee");

    //ELEMENTOS ÍMPARES
    $("p:odd").css("background", "#ccc");

    //ELEMENTO NA POSIÇÃO 4 A PARTIR DE 0
    $("p:eq(4)").text("jQuery Essentials");

    //TODOS ACIMA DA POSIÇÃO 4
    $("p:gt(4)").text("Seletores GT");

    //TODOS ABAIXO DA POSIÇÃO 4
    $("p:lt(4)").text("Seletores LT");

    //ELEMENTOS DE HEADING (h1, h2, etc)
    $(".list :header").css({
        "font-size": "1.4em",
        color: "#888"
    });

    //SPAN DENTRO DE UM HEADING
    $(".list :header span").css("color", "blue");


    //ELEMENYOS ANIMADOS
    function animar_el(elemento) {
        $(elemento).fadeToggle(400, function () {
            animar_el(elemento);
        });
    }

    var num = 1;
    setInterval(function () {
        $(":animated").text(num);
        num++;
    }, 800);

    animar_el(".list span");

    //ELEMENTOS EM FOCU
    $(":focus").css("background", "green");

    //O ELEMENTO RAIZ
    console.log($(":root"));
});
