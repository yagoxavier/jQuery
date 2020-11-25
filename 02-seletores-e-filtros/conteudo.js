$(function () {
    //ELEMENTOS COM CONTEÚDO OU EL.FILHOS
    $("p:parent").css("background", "red");

    //ELEMENTOS VAZIOS
    $("p:empty").html("<b>Este esta vazio!</b>");

    //ELEMENTOS COM OCORRÊNCIA DE CONTEÚDO
    $("p:contains('Essentials')").css("color", "#fff");

    //ELEMENYOS COM OCORRÊNCIA DE EL.FILHOS
    $("p:has('b')").text("É este aqui");
});