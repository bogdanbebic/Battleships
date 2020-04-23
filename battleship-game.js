$(document).ready(function () {
    $(".attackable td").click(function (event) {
        $(this).text("X");

        // $(".attackable td").index(this) -> returns linearized index of td in attackable table
        alert($(".attackable td").index(this));
    })

});
