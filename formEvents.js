$(document).ready(function () {
    $("#sname, #sclass, #scountry").focus(function () {
        $(this).css("background-color", "aqua")
    });

    $("#sname, #sclass, #scountry").blur(function () {
        $(this).css("background-color", "")
    });

    $("#scountry").change(function () {
        var a = $(this).val(); //store the value of country in a.
        $("#box").html(a); //set the value of a to box.
    });

    $("#sname, #sclass, #scountry").select(function () {
        $(this).css("background-color", "yellow")
    });

    $("#sform").submit(function () {
        alert("Form Submitted Successfully");
    })
});
