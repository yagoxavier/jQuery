$(function () {
    var instruction = $(".result b");

    //FOCUS | CHANGE
    $("input").focus(function () {
        console.log("FOCUS");
    }).focusin(function () {
        instruction.text("Informe o " + $(this).attr("placeholder").replace(":", ""));
    }).focusout(function () {
        if (!$(this).val()) {
            instruction.text("Hey, e o título?");
        }
    }).change(function () {
        instruction.text($(this).val());
    });

    //BLUR
    $("*").blur(function () {
        console.log("BLUR: " + this);
    }).focusout(function () {
        console.log("OUT: " + this);
    });

    //SELECT
    $("*").select(function (e) {
        console.log(e);
    });

    $("input, textarea").focus(function () {
        $(this).select();
        document.execCommand("copy");
    });

    //SUBMIT
    $("form").on("submit", function (e) {
        e.preventDefault();

        var form = $(this);
        var data = $(this).serialize();

        console.log(data);

//        $.post("api.php", {data: data}, function (retorno) {
//
//        });

        form.find("button").text("Carregando!");
    });
});