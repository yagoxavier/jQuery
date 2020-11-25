$(function () {
    var input = $("input");
    var textarea = $("textarea");
    
    //KEYPRESS | KEYDOWN
    input.keypress(function (e) {
        console.log("PRESS: " + e.which);
    }).keydown(function (e) {
        console.log("DOWN: " + e.which);
        console.log(e.metaKey);

        if (e.metaKey) {
            if (e.which === 85) {
                alert("UpInside!");
            }

            if (event.which === 74) {
                alert("jQuery Essentials");
            }
        }
    }).keyup(function () {
        console.log("UP");
    });
    
    //KEYUP
    $("input").on("keyup", function (e) {
        var input = $(this);
        //input.val(input.val().toUpperCase());

        if (!$(".result").find("h1").length) {
            $(".result").prepend("<h1>" + input.val().toUpperCase() + "</h1>");
        } else {
            $(".result h1").text(input.val().toUpperCase());
        }
    });

    $("textarea").on("keyup", function (e) {
        var textarea = $(this);

        if (!$(".result").find("div").length) {
            $(".result").append("<div><p>" + textarea.val() + "</p></div>");
        } else {
            $(".result div").html("<p>" + textarea.val().replace(/\n/g, "</p><p>") + "</p>");
        }
    });
    
    //RESIZE
    $(window).resize(function (event) {
        console.log($(this).outerWidth());
        //console.log(event);
    });
    
    //SCROLL
    $("body").height(1500);
    $(window).scroll(function (event) {
        console.log($(this).scrollTop());
        //console.log(event);
    });
});
