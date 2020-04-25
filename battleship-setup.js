$(document).ready(function () {
    // get battleships count
    let startBattleships4 = parseInt($("#cntBattleships4").text());
    let startBattleships3 = parseInt($("#cntBattleships3").text());
    let startBattleships2 = parseInt($("#cntBattleships2").text());
    let startBattleships1 = parseInt($("#cntBattleships1").text());

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

    // init start and end of ship indices
    let startIndex  = -1;
    let endIndex    = -1;

    // Player 1 move
    let playerIndexSetup = 1;
    $("#playerId").text(username1 + ":");

    let cntBattleships1 = startBattleships1;
    let cntBattleships2 = startBattleships2;
    let cntBattleships3 = startBattleships3;
    let cntBattleships4 = startBattleships4;

    let tablePlayer1 = [];
    let tablePlayer2 = [];
    $("td").each(function (index) {
        tablePlayer1.push($(this).text());
        tablePlayer2.push($(this).text());
    });

    $("td").mousedown(function (event) {
        startIndex  = $("td").index(this);
        endIndex    = -1;
    })
    
    $("td").mouseup(function (event) {
        if (startIndex == -1) {
            return;
        }

        endIndex = $("td").index(this);


        // TODO: implement


        // TODO: delete if statements
        if (endIndex == 0) {
            cntBattleships1--;
        }
        if (endIndex == 1){
            cntBattleships2--;
        }
        if (endIndex == 2) {
            cntBattleships3--;
        }
        if (endIndex == 3) {
            cntBattleships4--;
        }

        // update labels of ships remaining
        $("#cntBattleships4").text(cntBattleships4.toString())
        $("#cntBattleships3").text(cntBattleships3.toString())
        $("#cntBattleships2").text(cntBattleships2.toString())
        $("#cntBattleships1").text(cntBattleships1.toString())

        // reset indices
        startIndex  = -1;
        endIndex    = -1;

        if (cntBattleships1 + cntBattleships2 + cntBattleships3 + cntBattleships4 == 0) {
            // reset battleship counters
            $("#cntBattleships4").text(startBattleships4.toString())
            $("#cntBattleships3").text(startBattleships3.toString())
            $("#cntBattleships2").text(startBattleships2.toString())
            $("#cntBattleships1").text(startBattleships1.toString())
            
            playerIndexSetup++;

            if (playerIndexSetup == 2) {
                // save player 1 battleships
                localStorage.setItem("battleshipsPlayer1", JSON.stringify(tablePlayer1));

                // reset table cells
                $("td").text("");

                // Player 2 move
                playerIndexSetup = 2;
                $("#playerId").text(username2 + ":");

                // reset battleship counters
                cntBattleships1 = startBattleships1;
                cntBattleships2 = startBattleships2;
                cntBattleships3 = startBattleships3;
                cntBattleships4 = startBattleships4;
            } else {
                // save player 2 battleships
                localStorage.setItem("battleshipsPlayer2", JSON.stringify(tablePlayer2));

                // finished setup
                alert("REDIRECT");
                window.location.replace("battleship-game.html");
            }
        }
    })
});
