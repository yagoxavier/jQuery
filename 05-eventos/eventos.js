$(function () {
    var content = "<div>Opa, estamos aprendendo jQuery <p class='j_close button'>Remover</p></div>";

    //ON
    $(".j_button").on("click", function (event) {
        //console.log(event);
        $(content).prependTo("body");
    });

    //$(".j_close").on("click", function(){
    //   console.log("REMOVER");
    //});

    //DELEGATE ON
    $("body").on("click", ".j_close", function () {
        //console.log("REMOVER");
        $(this).parent().remove();
    });

    //DELEGATE + DATA ON
    $("body").on("click mouseleave", ".j_close", {text: "<p class='clear'>Removido</p>"}, function (e) {
        $("body").prepend(e.data.text);
        $(this).parent("div").remove();
    });

    //ONE
    $(".j_button").one("click", function () {
        console.log("Primeiro Click");
    });

    //TRIGGER
    $(".j_button").on("jQ.remove", function () {
        $(".clear").remove();
        console.log("jQ.remove Executado!");
    }).on("click", function () {
        var cc = $(".clear").length;
        if (cc >= 1) {
            $(this).trigger("jQ.remove");
        }
    });

    //TRIGGER HANDLER + OFF
    $("div p").click(function () {
        console.log("CLICK");

        var input = $(this).parent().find("input");

        input.focus(function () {
            console.log("FOCUSED");
        });

        //input.trigger("focus");
        input.triggerHandler("focus");

        input.off("focus");
        $(this).off("click").on("click", function () {
            console.warn("Other Click");
        });
    });
});
