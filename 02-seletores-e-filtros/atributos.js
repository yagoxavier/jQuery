$(function () {
    //CONTÉM O ATRIBUO
    $("[class]").css("background", "#ccc");

    //IGUAL AO ATRIBUO
    $("[data-upinside='true']").css("background", "#006699");

    //DIFERENTE DO ATRIBUTO
    $("a[title!='UpInside']").css("background", "red");

    //COMEÇA COM O ATRIBUTO
    $("[class^='jquery']").css("background", "#0099ff");

    //TERMINA COM O ATRIBUTO
    $("[class$='div']").css("color", "#fff");

    //CONTEM QUALQUER NO ATRIBUTO
    $("[class*='r']").css("font-weight", "bold");

    //O VALOR DEVE ESTAR PRESENTE NOA TRIBUTO (Separado por espaço)
    $("[class~='jquery']").css("text-transform", "uppercase");

    //O ATRIBUTO OU O ATRIBUTO SEGUIDO DE HÍFEN
    $("[class|='jquery-essentials']").css("border-bottom", "3px solid red");

    //COMBINANDO FILTROS PARA CHEGAR AO ELEMNENTO
    $("[class*='jquery'][data-upinside]").css("color", "pink");
});