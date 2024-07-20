$(document).ready(function () {

    $(window).scroll(function () {
        $("body").css("background-color", "yellow")
    });

    $("#box").scroll(function () {
        $(this).css("color", "white")
    });

    

    $(window).resize(function () {
        $("body").css("background-color", "")
    });
});