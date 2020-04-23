$(document).ready(function () {
    let startBattleships4 = parseInt($("#cntBattleships4").text());
    let startBattleships3 = parseInt($("#cntBattleships3").text());
    let startBattleships2 = parseInt($("#cntBattleships2").text());
    let startBattleships1 = parseInt($("#cntBattleships1").text());

    let cntBattleships1 = startBattleships1;
    let cntBattleships2 = startBattleships2;
    let cntBattleships3 = startBattleships3;
    let cntBattleships4 = startBattleships4;

    /*
    while (cntBattleships1 + cntBattleships2 + cntBattleships3 + cntBattleships4) {
        // TODO: PLAYER 1 setup ships

        // $("#cntBattleships4").text((startBattleships4 - 1).toString())
        // $("#cntBattleships3").text((startBattleships3 - 1).toString())
        // $("#cntBattleships2").text((startBattleships2 - 1).toString())
        // $("#cntBattleships1").text((startBattleships1 - 1).toString())
    }
    */
    
    $("#playerId").text("Player2:");
    $("#cntBattleships4").text(startBattleships4.toString())
    $("#cntBattleships3").text(startBattleships3.toString())
    $("#cntBattleships2").text(startBattleships2.toString())
    $("#cntBattleships1").text(startBattleships1.toString())

    cntBattleships1 = startBattleships1;
    cntBattleships2 = startBattleships2;
    cntBattleships3 = startBattleships3;
    cntBattleships4 = startBattleships4;

    /*
    while (cntBattleships1 + cntBattleships2 + cntBattleships3 + cntBattleships4) {
        // TODO: PLAYER 2 setup ships

        // $("#cntBattleships4").text((startBattleships4 - 1).toString())
        // $("#cntBattleships3").text((startBattleships3 - 1).toString())
        // $("#cntBattleships2").text((startBattleships2 - 1).toString())
        // $("#cntBattleships1").text((startBattleships1 - 1).toString())
    }
    */

    // TODO: delete
    alert("REDIRECT");
    
    // TODO: save cnt of ship tiles for both players

    window.location.replace("battleship-game.html");
});
