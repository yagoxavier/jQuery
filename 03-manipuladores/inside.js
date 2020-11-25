$(function () {
    //RECUPERA O TEXTO DO ELEMENTO
    var text = $(".j").text();
    //$(".j").text("TEXTO aqui"); //Escreve o TEXTO no elemento
    
    //RECUPERA O HTML DO ELEMENTO
    var html = $(".j").html();
    //$(".j").html("<p>HTML AQUI</p>"); //Escreve o HTML no elemento

    //Insere o conteúdo dentro e AO FINAL do elemento
    $(".e").append("<p>" + text + "</p>");
    $(".e").append("<p>" + html + "</p>");
    
    //Move ou cria o conteúdo dentro e AO FINAL do elemento
    $(".a").appendTo($(".e"));
    $("<p><b>#BoraProgramar!</b></p>").appendTo($(".e"));
    
    //Insere o conteúdo dentro e AO COMEÇO do elemento
    $(".e").prepend("<h2>Resultados:</h2>");
    
    //Move ou cria o conteúdo dentro e AO COMEÇO do elemento
    $("<p>Exemplos:</p>").prependTo($(".e p:first"));
});
