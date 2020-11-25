$(function () {
    var title = $("title").text();
    
    //Insere o conteúdo antes do elemento selecionado
    $(".j").before("<h1>" + title + "</h1>");
    
    //Move/Cria um conteúdo ANTES do elemento selecionado
    $("<p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>").insertBefore($(".j"));
   
    var old_text = "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <b>dummy text ever since the 1500s</b>, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
    
    //Insere o conteúdo depois do elemento selecionado
    $(".j").after(old_text);
    $(".j").after("<a class='a' href='#'>Continue lendo...</a>");
    
    //Move/cria o conteúdo depois do elemento selecionado
    $(".a").insertAfter("p:last");
});
