$(function () {
    $(".jquery_essentials").html("jQuery Essentials!");
    
    /*
     * EXTRA: Você também pode limpar seu console.
     */
    console.clear(); //Console was cleared

    console.group("Mensagens Gerais"); //Agrupa Mensagens no console
    console.log("jQuery Essentials"); //Imprime no Console
    console.info("O jQuery foi carregado com sucesso!"); //Gera uma informação
    console.warn("Um alerta"); //Gera um Alerta
    console.error("Um erro"); //Gera um Erro
    console.groupEnd(); //Fecha o Grupo

    var cadastro = false; //Variável de teste

    console.group("Cadastro de usuários"); //Abre novo Grupo
    console.info("Cadastro iniciado!"); //Gera Informação

    if (cadastro === true) {
        console.log("Cadastro Realizado"); //Imprime na tela
    } else {
        console.warn("Erro ao cadastrar"); //Gera alerta
    }
    console.groupEnd(); //Finaliza Grupo
});