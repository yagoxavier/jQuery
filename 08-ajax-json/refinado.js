$(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var action = form.attr("action");
        var form_data = form.serialize() + "&action=" + action;

        $.ajax({
            url: "refinado.php",
            type: "POST",
            data: form_data,
            dataType: "JSON",
            beforeSend: function (xhr) {
                form.find("button").after("<span class='load'>Aguarde, carregando...</span>");
                $(".error, .success").fadeOut(400, function () {
                    $(this).remove();
                });
            },
            success: function (response, textStatus, jqXHR) {
                if (response.error) {
                    form.prepend("<span class='error'>" + response.error + "</span>");
                } else {
                    form.prepend("<span class='success'>Cadastro realizado com sucesso. Seja bem-vindo(a) " + response.first_name + "!</span>");
                    form.trigger("reset");
                }

                if (response.redirect) {
                    setTimeout(function () {
                        window.location.href = response.redirect;
                    }, 3000);
                }
            },
            error: function (jqXHR, textStatus, errorThrow) {
                form.prepend("<span class='error'>Desculpe, erro ao processar: " + errorThrow + "</span>");
            },
            complete: function (jqXHR, textStatus) {
                form.find(".load").fadeOut(function () {
                    $(this).remove();
                });
            }
        });
    });
});