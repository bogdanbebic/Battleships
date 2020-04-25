$(document).ready(function () {
    // for better appearence of table
    $("tr").addClass("d-flex");
    $("th").addClass("col");
    $("td").addClass("col");

    // get usernames from storage
    let username1 = localStorage.getItem("username1");
    let username2 = localStorage.getItem("username2");

    // set default usernames if necessary
    if (username1 == null) {
        username1 = "Player1";
        localStorage.setItem(username1);
    }

    if (username2 == null) {
        username2 = "Player2";
        localStorage.setItem(username2);
    }

    // get setup battleships
    let tablePlayer1 = JSON.parse(localStorage.getItem("battleshipsPlayer1"));
    let tablePlayer2 = JSON.parse(localStorage.getItem("battleshipsPlayer2"));

    let playerIndexPlay = 1;
    $("#user_playing").text(username1);

    /*
    // hide/show current player ships
    $("#my_ships_button").click(function () {
        if ($("#my_ships_button").text() == "Hide my ships") {
            $("#user_battleships_table").hide();
            $("#my_ships_button").text("Show my ships");
        }
        else {
            $("#user_battleships_table").show();
            $("#my_ships_button").text("Hide my ships");
        }
    })
    */

    $(".attackable td").click(function (event) {
        $(this).text("X");

        // $(".attackable td").index(this) -> returns linearized index of td in attackable table
        alert($(".attackable td").index(this));
    });

});
