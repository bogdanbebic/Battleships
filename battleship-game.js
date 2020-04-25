$(document).ready(function () {
    let username1 = localStorage.getItem("username1");
    let username2 = localStorage.getItem("username2");

    let tablePlayer1 = JSON.parse(localStorage.getItem("battleshipsPlayer1"));
    let tablePlayer2 = JSON.parse(localStorage.getItem("battleshipsPlayer2"));

    $(".attackable td").click(function (event) {
        $(this).text("X");

        // $(".attackable td").index(this) -> returns linearized index of td in attackable table
        alert($(".attackable td").index(this));
    });

});
