$(function () {
    var speed = 1000;

    //SLIDE DOWN: Exibe
    $(".expand").on("click", function () {
        $(".slide_content").stop().slideDown(speed, function () {
            //Completar a ação
        });
    });

    //SLIDE UP: Oculta
    $(".close").on("click", function () {
        $(".slide_content").stop().slideUp(speed, function () {
            //Completar a ação
        });
    });

    //SLIDE TOGGOLE: Alterna
    $(".toggle").on("click", function () {
        $(".slide_content").stop().slideToggle(speed, function () {
            //Completar a ação
        });
    });

    //Exemplo Sanfona
    $(".slide h4").on("click", function () {
        //$(this).parent().find(".slide_content").slideToggle();

        $(".slide_content").stop().slideUp(speed);
        $(this).parent().find(".slide_content").slideToggle();
    });
});
