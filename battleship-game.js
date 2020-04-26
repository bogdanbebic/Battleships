$(document).ready(function () { 
    function setNewTextInOpponentShipsTable(indexInTable, textToSet) {
        $(".attackable td").eq(indexInTable).text(textToSet);
    }

    function setNewTextInMyShipsTable(indexInTable, textToSet) {
        $("#user_battleships_table td").eq(indexInTable).text(textToSet);
    }

    function overwriteOpponentShipsTable(tableText) {
        $(".attackable td").text("");
        for (let index = 0; index < tableText.length; index++) {
            if (tableText[index] != "O") {
                setNewTextInOpponentShipsTable(index, tableText[index]);
            }
        }
    }

    function overwriteMyShipsTable(tableText) {
        $("#user_battleships_table td").text("");
        for (let index = 0; index < tableText.length; index++) {
            setNewTextInMyShipsTable(index, tableText[index]);
        }
    }

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
        localStorage.setItem("username1", username1);
    }

    if (username2 == null) {
        username2 = "Player2";
        localStorage.setItem("username2", username2);
    }

    // get setup battleships
    let tablePlayer1 = JSON.parse(localStorage.getItem("battleshipsPlayer1"));
    let tablePlayer2 = JSON.parse(localStorage.getItem("battleshipsPlayer2"));

    let battleshipCnt1 = tablePlayer1.filter(x => x == "O").length;
    let battleshipCnt2 = tablePlayer2.filter(x => x == "O").length;

    let playerIndexPlay = 1;
    $("#user_playing").text(username1);
    overwriteMyShipsTable(tablePlayer1);

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
        let attackedIndex = $(".attackable td").index(this);
        let waitTime = 1000;
        if (playerIndexPlay == 1) {
            if (tablePlayer2[attackedIndex] == "/" || tablePlayer2[attackedIndex] == "X") {
                return;
            }
            else if (tablePlayer2[attackedIndex] == "O") {
                tablePlayer2[attackedIndex] = "X";
                if (--battleshipCnt2 == 0) {
                    setTimeout(function () {
                        alert(username1 + " wins with " + battleshipCnt1 + " battleships left");
                        window.location.replace("battleship-welcome.html");
                    }, waitTime);
                }
            }
            else {
                tablePlayer2[attackedIndex] = "/";
            }

            setNewTextInOpponentShipsTable(attackedIndex, tablePlayer2[attackedIndex]);
            if (tablePlayer2[attackedIndex] == '/') {
                setTimeout(function () {
                    playerIndexPlay++;
                    $("#user_playing").text(username2);
                    overwriteOpponentShipsTable(tablePlayer1);
                    overwriteMyShipsTable(tablePlayer2);
                }, waitTime);
            }
        }
        else {
            if (tablePlayer1[attackedIndex] == "/" || tablePlayer1[attackedIndex] == "X") {
                return;
            }
            else if (tablePlayer1[attackedIndex] == "O") {
                tablePlayer1[attackedIndex] = "X";
                if (--battleshipCnt1 == 0) {
                    setTimeout(function () {
                        alert(username2 + " wins with " + battleshipCnt2 + " battleships left");
                        window.location.replace("battleship-welcome.html");                        
                    }, waitTime);
                }
            }
            else {
                tablePlayer1[attackedIndex] = "/";
            }

            setNewTextInOpponentShipsTable(attackedIndex, tablePlayer1[attackedIndex]);
            if (tablePlayer1[attackedIndex] == '/') {
                setTimeout(function () {
                    playerIndexPlay = 1;
                    $("#user_playing").text(username1);
                    overwriteOpponentShipsTable(tablePlayer2);
                    overwriteMyShipsTable(tablePlayer1);
                }, waitTime);
            }
        }
    });

});
