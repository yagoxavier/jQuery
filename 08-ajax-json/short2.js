$(function () {
    $.getScript("short2_viacep.js", function () {
        $(".viacep").viacep(".result", function (data) {
            $.each(data, function (i, e) {
                //console.log(i + ": " + e);
            });
        });
    });
});