/* Timer, Limit Meter, Level Box, High Scores for Arnold's Game */

/* TIMER */

function timerStart() {
    time = 0;

    counter = setInterval(function () {
        time++;
        $(".meter-timer").text(time);
    }, 1000);

}

function timerStop() {
    turnLength = time;
    clearInterval(counter);
    $(".meter-timer").text("0");
}


/* LIMIT METER */

function meterReset() {
    meter = 0;
    $(".meter-fill-bar").css("height", "0");
}

function meterFill() {

    if (turnLength < currentLevel) {
        meter = meter + ((currentLevel - turnLength) - 1);
    }

    let x = (meter * 5);
    let y = "calc(" + x + "% - 20px)";
    $(".meter-fill-bar").css("height", y);


}



/* LEVEL BOX*/

function levelBox() {
    $(".level-num").addClass("is_level-num-change");

    setTimeout(function () {
        $(".level-num").text(currentLevel);
    }, 500);

    $(".level-num").on("animationend", function () {
        $(this).removeClass("is_level-num-change");
    });
}


/* BOX SCORES */

function highScore() {

    if (currentLevel === 1 && currentRound === 1) {
        player1LastScore = 0;
    }

    if (player1LastScore > player1HighScore) {
        player1HighScore = player1LastScore;
    }

}

function scorePush() {
    $("#player1ScoreBox1").text("Lvl " + player1LastScore);
    $("#player1HighScore").text("Lvl " + player1HighScore);
    pastScores();
}

function pastScores() {
    scoreHist.push(player1LastScore);

    if (scoreHist.length > 1) {
        $("#player1ScoreBox2").text("Lvl " + scoreHist[scoreHist.length - 2]);
    }

    if (scoreHist.length > 2) {
        $("#player1ScoreBox3").text("Lvl " + scoreHist[scoreHist.length - 3]);
    }

    if (scoreHist.length > 3) {
        $("#player1ScoreBox4").text("Lvl " + scoreHist[scoreHist.length - 4]);
    }

    if (scoreHist.length > 4) {
        $("#player1ScoreBox5").text("Lvl " + scoreHist[scoreHist.length - 5]);
    }

}


/* END of document */