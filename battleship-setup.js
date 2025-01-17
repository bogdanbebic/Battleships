function isHorizontal(i, j) {
    let greater = Math.max(i, j);
    let smaller = Math.min(i, j);
    return (greater - smaller < 10) && (greater % 10 > smaller % 10);
}

function isVertical(i, j) {
    let greater = Math.max(i, j);
    let smaller = Math.min(i, j);
    return (greater - smaller) % 10 == 0;
}

function calculateBattleshipLength(start, end) {
    let greater = Math.max(start, end);
    let smaller = Math.min(start, end);
    if (isHorizontal(start, end)) {
        return greater - smaller + 1;
    }
    else if (isVertical(start, end)) {
        return Math.ceil(greater / 10) - Math.ceil(smaller / 10) + 1;
    }

    return -1;
}

function areNeighborCellsAvailable(index) {
    let ret = $("td").eq(index).text() != "O";

    if (index > 9) {
        ret &= $("td").eq(index - 10).text() != "O";
    }

    if (index < 90) {
        ret &= $("td").eq(index + 10).text() != "O";
    }

    if (index % 10 != 0) {
        ret &= $("td").eq(index - 1).text() != "O";
    }

    if (index % 10 != 9) {
        ret &= $("td").eq(index + 1).text() != "O";
    }

    if (index > 9 && index % 10 != 0) {
        ret &= $("td").eq(index - 11).text() != "O";
    }

    if (index > 9 && index % 10 != 9) {
        ret &= $("td").eq(index - 9).text() != "O";
    }

    if (index < 90 && index % 10 != 0) {
        ret &= $("td").eq(index + 9).text() != "O";
    }

    if (index < 90 && index % 10 != 9) {
        ret &= $("td").eq(index + 11).text() != "O";
    }

    return ret;
}

$(document).ready(function () {
    // for better appearence of table
    $("tr").addClass("d-flex");
    $("th").addClass("col");
    $("td").addClass("col");

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
        localStorage.setItem("username1", username1);
    }

    if (username2 == null) {
        username2 = "Player2";
        localStorage.setItem("username2", username2);
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

    let battleships1 = {
        player : 1,
        battleships : []
    }

    let battleships2 = {
        player : 2,
        battleships : []
    }

    $("td").mousedown(function (event) {
        startIndex  = $("td").index(this);
        endIndex    = -1;
    })

    $("td").mouseup(function (event) {
        if (startIndex == -1) {
            return;
        }

        endIndex = $("td").index(this);

        if (!isHorizontal(startIndex, endIndex) && !isVertical(startIndex, endIndex)) {
            return;
        }

        let greater = Math.max(startIndex, endIndex);
        let smaller = Math.min(startIndex, endIndex);

        let battleshipCurrentIndex = smaller;
        while (battleshipCurrentIndex <= greater) {
            if (!areNeighborCellsAvailable(battleshipCurrentIndex)) {
                return;
            }

            if (isVertical(startIndex, endIndex)) {
                battleshipCurrentIndex += 10;
            }
            else {
                battleshipCurrentIndex += 1;
            }
        }

        let battleshipLength = calculateBattleshipLength(startIndex, endIndex);
        if (cntBattleships1 > 0 && battleshipLength == 1) {
            cntBattleships1--;
        }
        else if (cntBattleships2 > 0 && battleshipLength == 2) {
            cntBattleships2--;
        }
        else if (cntBattleships3 > 0 && battleshipLength == 3) {
            cntBattleships3--;
        }
        else if (cntBattleships4 > 0 && battleshipLength == 4) {
            cntBattleships4--;
        }
        else {
            return;
        }

        let battleship = {
            notHitCount : battleshipLength,
            indices : []
        };

        battleshipCurrentIndex = smaller;
        while (battleshipCurrentIndex <= greater) {
            $("td").eq(battleshipCurrentIndex).text("O");
            battleship.indices.push(battleshipCurrentIndex);
            if (isVertical(startIndex, endIndex)) {
                battleshipCurrentIndex += 10;
            }
            else {
                battleshipCurrentIndex += 1;
            }
        }

        // update labels of ships remaining
        $("#cntBattleships4").text(cntBattleships4.toString())
        $("#cntBattleships3").text(cntBattleships3.toString())
        $("#cntBattleships2").text(cntBattleships2.toString())
        $("#cntBattleships1").text(cntBattleships1.toString())


        if (playerIndexSetup == 1) {
            battleships1.battleships.push(battleship);
        }
        else {
            battleships2.battleships.push(battleship);
        }

        // reset indices
        startIndex  = -1;
        endIndex    = -1;
        let waitTime = 1000;
        if (cntBattleships1 + cntBattleships2 + cntBattleships3 + cntBattleships4 == 0) {
            // reset battleship counters
            $("#cntBattleships4").text(startBattleships4.toString())
            $("#cntBattleships3").text(startBattleships3.toString())
            $("#cntBattleships2").text(startBattleships2.toString())
            $("#cntBattleships1").text(startBattleships1.toString())

            playerIndexSetup++;

            if (playerIndexSetup == 2) {
                // save player 1 battleships
                let tablePlayer1 = [];
                $("td").each(function (index) {
                    tablePlayer1.push($(this).text());
                });
                localStorage.setItem("battleshipsPlayer1", JSON.stringify(tablePlayer1));
                localStorage.setItem("battleships1", JSON.stringify(battleships1));

                setTimeout(function () {
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
                }, waitTime);
            } else {
                // save player 2 battleships
                let tablePlayer2 = [];
                $("td").each(function (index) {
                    tablePlayer2.push($(this).text());
                });
                localStorage.setItem("battleshipsPlayer2", JSON.stringify(tablePlayer2));
                localStorage.setItem("battleships2", JSON.stringify(battleships2));

                // finished setup
                setTimeout(function () { window.location.replace("battleship-game.html"); }, waitTime);
            }
        }
    })
});
