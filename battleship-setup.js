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

    // Player 1 move

    let playerIndexSetup = 1;
    $("#playerId").text(username1 + ":");

    let cntBattleships1 = startBattleships1;
    let cntBattleships2 = startBattleships2;
    let cntBattleships3 = startBattleships3;
    let cntBattleships4 = startBattleships4;

    // TODO: implement

    // reset battleship counters
    $("#cntBattleships4").text(startBattleships4.toString())
    $("#cntBattleships3").text(startBattleships3.toString())
    $("#cntBattleships2").text(startBattleships2.toString())
    $("#cntBattleships1").text(startBattleships1.toString())
    
    // Player 2 move

    playerIndexSetup = 2;
    $("#playerId").text(username2 + ":");
    
    cntBattleships1 = startBattleships1;
    cntBattleships2 = startBattleships2;
    cntBattleships3 = startBattleships3;
    cntBattleships4 = startBattleships4;

    $("td").mousedown(function (event) {
        $(this).addClass("border border-success");
        // $("td").index(this) -> returns linearized index of td in table
        console.log("START: " + $("td").index(this));
    })
    
    $("td").mouseup(function (event) {
        $(this).addClass("border border-danger");
        console.log("END: " + $("td").index(this));
    })

    // TODO: delete
    //alert("REDIRECT");
    
    // TODO: save cnt of ship tiles for both players

    //window.location.replace("battleship-game.html");
});
