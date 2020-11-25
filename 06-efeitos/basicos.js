$(function () {
    var btn = $(".button");
    var timeEffet = 6000;

    btn.on("click", function (e) {
        e.preventDefault();
        
        //HIDE: Oculta
        $(".hide").stop().hide(timeEffet);
        
        //SHOW: Exibe
        $(".show").stop().show(timeEffet, function () {
            console.log("Ok!");
        });
        
        //TOGGLE: Alterna
        $(".toggle").stop().toggle(timeEffet);
    });
});
