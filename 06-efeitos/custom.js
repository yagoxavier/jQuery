$(function () {
    $(".start").on("click", function (e) {
        e.preventDefault();

//        $(".animate").animate({"top": 500}, 1000)
//                .animate({"left": 500}, 1000)
//                .animate({"top": 0}, 1000)
//                .animate({"left": 0}, 1000);

        $(".animate").animate({"top": 500}, 1000, function () {
            //Executa isso
        })
                .queue(function () {
                    $(this).css("background", "red").dequeue();
                })
                .animate({"left": 500}, 1000)
                .queue(function () {
                    $(this).css("background", "purple").dequeue();
                })
                .animate({"top": 0}, 1000)
                .delay(1000)
                .queue(function () {
                    $(this).css("background", "pink").dequeue();
                })
                .animate({"left": 0}, 1000)
                .queue(function () {
                    $(this).css("background", "#09f").dequeue();
                });
    });

    $(".stop").on("click", function (e) {
        e.preventDefault();

        //$(".animate").stop();
        $(".animate").stop(true, true);
    });

    $(".clear").on("click", function (e) {
        e.preventDefault();

        console.log($(".animate").queue());
        $(".animate").clearQueue();
        console.log($(".animate").queue());
    });

    $(".finish").on("click", function () {
        $(".animate").finish();
    });
});
