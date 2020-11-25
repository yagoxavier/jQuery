$(function () {
    var btn = $(".button");
    var effect_time = 300;

    btn.on("click", function (e) {
        e.preventDefault();

        var fade = $(".fade");
        var fade_close = $(".fade_close");

        //FADE IN: Exibe
        fade.fadeIn(effect_time, function () {
            fade_close.on("click", function () {
                //FADE OUT: Oculta
                fade.fadeOut(effect_time, function () {
                    //$(this).remove();
                });
            });
        }).css("display", "flex");

        fade.find("p").on("click", function (e) {
            if (e.target === this) {
                //FADE TOGGLE: Alterna
                $(this).find("b").stop().fadeToggle(effect_time);
            }
        });

        fade.find("b").on("click", function () {
            if ($(this).hasClass("active")) {
                //FADE TO: Aplica Opacidade
                $(this).fadeTo(effect_time, 0.5, function () {
                    console.log($(this));
                    $(this).removeClass("active");
                });
            } else {
                $(this).fadeTo(effect_time, 1, function () {
                    console.log($(this));
                    $(this).addClass("active");
                });
            }
        });


    });
});
